# すべてのブロッサムで作ったブログ形式のファイル(2005~2018)を、jsonに抽出する
# input : blog/{yest}/{monty}/{date}/index.html
# output : blogData.json
# perl 05extract.pl

#!/usr/bin/perl
use strict;
use warnings;
use JSON;

my $output_file = "blogData.json";
open(my $json_fh, '>', $output_file) or die "Cannot open $output_file for writing: $!";

my $id = 1;
my @blog_entries;

# すべての年、月、日のフォルダを走査
for my $year (glob("blog/*")) {
    next unless (-d $year);
    my $year_value = (split('/', $year))[-1]; # フォルダ名から年を抽出
    for my $month (glob("$year/*")) {
        next unless (-d $month);
        my $month_value = (split('/', $month))[-1]; # フォルダ名から月を抽出
        for my $date (glob("$month/*")) {
            next unless (-d $date);
            my $date_value = (split('/', $date))[-1]; # フォルダ名から日を抽出

            # index.htmlファイルを開いて"title"の値を抽出
            my $html_file = "$date/index.html";
            # index.htmlファイルをUTF-8エンコーディングで開いて"title"の値を抽出
            open(my $html_fh, '<:encoding(UTF-8)', $html_file) or die "Cannot open $html_file for reading: $!";

            my $title = "";  # タイトルの値を格納する変数

            while (my $line = <$html_fh>) {
                if ($line =~ /<span class="title">([^<]+)<\/span>/) {
                    $title = $1;  # 正規表現でタイトルを抽出
                    last;  # タイトルが見つかったらループを終了
                }
            }

            my $image = "noimage";  # イメージの値を格納する変数
            my $image_replaced = 0;
            my $found_main_entry = 0; # 現在、うまく使えていない
            while (my $line = <$html_fh>) {
                if (!$image_replaced && $line =~ /<img src="\/bimages\/(\d{4}\/[^\s>]+\.jpg)"[^>]*>/) {
                    my $new_image = $1;
                    $image =~ s/noimage/$new_image/;
                    $image_replaced = 1; # 置換済みフラグを立てる
                    last; # 置換が完了したらループを抜ける
                }
                elsif (!$image_replaced && $line =~ /<td><img src="\/bimages\/(\d{4}\/[^\s>]+\.jpg)"[^>]*>\s*<\/td>/) {
                    my $new_image = $1;
                    $image =~ s/noimage/$new_image/;
                    $image_replaced = 1; # 置換済みフラグを立てる
                    last; # 置換が完了したらループを抜ける
                }
                # この行には入らないので諦める
                if (!$found_main_entry && $line =~ /<!-- main blog entry column -->/) {
                    $found_main_entry = 1; # メインエントリー部分を発見
                }
            }

            close($html_fh);

            # $titleの前後の空白や改行を削除
            $title =~ s/^\s+//;
            $title =~ s/\s+$//;

            my %entry = (
                "id" => $id,
                "year" => $year_value,
                "month" => $month_value,
                "date" => $date_value,
                "title" => $title, 
                "image" => $image, 
            );
            push @blog_entries, \%entry;
            $id++;
        }
    }
}

# JSON 形式にエンコードしてファイルに書き込む
my $json_data = to_json(\@blog_entries, { pretty => 1, utf8 => 1 });

print $json_fh $json_data;

close($json_fh);

print "blogData.json ファイルが作成されました。\n";

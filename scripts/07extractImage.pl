# index.htmlからimageファイルパスを抜き出すスクリプト
#!/usr/bin/perl
use strict;
use warnings;
use utf8;  # UTF-8を使用することを宣言
use File::Find;
use JSON::XS;

# ファイルパス
my $input_file = 'blogData_input.json';
my $output_file = 'blogData_extractImage.json';

# JSONファイルの読み込み
open(my $json_input, '<:encoding(UTF-8)', $input_file) or die "Cannot open $input_file: $!";
my $json_data = join('', <$json_input>);
close($json_input);

###ここから、書き直してください
# 読み込むHTMLファイルのパス
my $read_file = 'blog/2018/12/01/index.html';

my $new_image;

# ファイルを一行ずつ読み込み、条件に合致する行を置換
open(my $html_file, '<:encoding(UTF-8)', $read_file) or die "Cannot open $read_file: $!";
while (my $line = <$html_file>) {
    if ($line =~ /<img src="\/bimages\/(\d{4}\/\d{3}\.jpg)"/) {
        $new_image = $1;
        last; # マッチしたらループを抜ける
    }
}
close($html_file);

# $new_image が設定されている場合のみ置換
if (defined $new_image) {
    $json_data =~ s/"image": "noimage"/"image": "$new_image"/;
}
###ここまで、書き直してください

# アウトプットファイルに書き出す
open(my $json_output, '>:encoding(UTF-8)', $output_file) or die "Cannot open $output_file: $!";
binmode($json_output, ":utf8");  # ファイルハンドルにUTF-8エンコーディングを指定
print $json_output $json_data;
close($json_output);


binmode STDOUT, ":utf8";  # 標準出力にもUTF-8エンコーディングを指定

print "インプットファイルの内容をアウトプットファイルにコピーしました。\n";

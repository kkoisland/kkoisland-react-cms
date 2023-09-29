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
###
# ファイル検索と画像取得
# 入力のHTMLテキスト（例として一部を示します）
my $html = '... <!-- main blog entry column -->
<img src="/bimages/2018/062.jpg" width="800" height="533" border="0"><br>
<img src="/bimages/2020/123.jpg" width="800" height="533" border="0"><br>
...';


# "image": "noimage" を "image": "2018/066.jp" に置換
$json_data =~ s/"image": "noimage"/"image": "2018\/066.jpg"/g;

###

# アウトプットファイルに書き出す
open(my $json_output, '>:encoding(UTF-8)', $output_file) or die "Cannot open $output_file: $!";
binmode($json_output, ":utf8");  # ファイルハンドルにUTF-8エンコーディングを指定
print $json_output $json_data;
close($json_output);


binmode STDOUT, ":utf8";  # 標準出力にもUTF-8エンコーディングを指定

print "インプットファイルの内容をアウトプットファイルにコピーしました。\n";

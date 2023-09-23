# すべてのブロッサムで作ったブログ形式のファイル(2005~2018)のindex.htmlを、Shift-JISからUTF-8に変換する
# input : blog
# output : blog_output
# perl 01convert_blog_utf8.pl

#!/usr/bin/perl
use strict;
use warnings;
use Encode;
use File::Copy::Recursive qw(dircopy);

# 入力ディレクトリと出力ディレクトリを指定
my $input_dir = "blog";
my $output_dir = "blog_output";

# 出力ディレクトリを作成（既に存在する場合はスキップ）
mkdir $output_dir unless -d $output_dir;

# 入力ディレクトリの中身を出力ディレクトリにコピー
dircopy($input_dir, $output_dir) or die "Cannot copy directory: $!";

# 入力ディレクトリ内の index.html ファイルをShift-JISからUTF-8に変換
process_directory($output_dir);

print "変換が完了しました。\n";

sub process_directory {
  my ($dir) = @_;
  opendir my $dh, $dir or die "Cannot open directory $dir: $!";
  while (my $entry = readdir $dh) {
    next if $entry eq '.' || $entry eq '..';
    my $path = "$dir/$entry";
    if (-d $path) {
      process_directory($path); # サブディレクトリ内も再帰的に処理
    } elsif (-f $path && $entry eq 'index.html') {
      # ファイルの場合かつファイル名が index.html の場合、Shift-JISからUTF-8に変換
      convert_file_encoding($path);
    }
  }
  closedir $dh;
}

sub convert_file_encoding {
  my ($file) = @_;
  open my $fh, '<:encoding(shiftjis)', $file or die "Cannot open $file: $!";
  my @lines = <$fh>; # ファイル内容を配列に読み込む
  close $fh;

  open my $output_fh, '>:utf8', $file or die "Cannot open $file: $!";
  print $output_fh @lines; # 配列の内容をUTF-8で書き込む
  close $output_fh;
}

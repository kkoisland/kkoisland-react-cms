# すべてのブロッサムで作ったブログ形式のファイル(2005~2018)のindex.htmlの文字エンコーディングを変換する。<meta charset="utf-8" />とする
# input : blog_input
# output : blog_output_meta_utf8
# perl 02convert_blog_meta.pl

#!/usr/bin/perl
use strict;
use warnings;
use Encode;
use File::Copy::Recursive qw(dircopy);

# 入力ディレクトリと出力ディレクトリを指定
my $input_dir = "blog_input";
my $output_dir = "blog_output_meta_utf8";

# 出力ディレクトリを作成（既に存在する場合はスキップ）
mkdir $output_dir unless -d $output_dir;

# 入力ディレクトリの中身を出力ディレクトリにコピー
dircopy($input_dir, $output_dir) or die "Cannot copy directory: $!";

# 入力ディレクトリ内の index.html ファイルを変換
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
      # ファイルの場合かつファイル名が index.html の場合、変換
      convert_file_encoding($path);
    }
  }
  closedir $dh;
}

sub convert_file_encoding {
  my ($file) = @_;
  open my $fh, '<:utf8', $file or die "Cannot open $file: $!";
  my @lines = <$fh>; # ファイル内容を配列に読み込む
  close $fh;

  # 文字列置換を行い、<META HTTP-EQUIV="content-type" content="text/html;charset=Shift_JIS"> を <meta charset="utf-8" /> に変換
  foreach my $line (@lines) {
    $line =~ s/<META HTTP-EQUIV="content-type" content="text\/html;charset=Shift_JIS">/<meta charset="utf-8" \/>/gi;
  }

  open my $output_fh, '>:utf8', $file or die "Cannot open $file: $!";
  print $output_fh @lines; # 配列の内容をUTF-8で書き込む
  close $output_fh;
}

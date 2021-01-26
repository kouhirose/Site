---
title: "gatsby ブログで使用したプラグイン"
date: "2021-01-11 18:37:46"
description: "Gatsbyのブログを作るときに使ったプラグイン"
emoji: "🍎"
---

<!-- ## プラグインの記録をしておく -->
このブログはgatsbyで作った．
その中でいくつかのプラグインを使ったので，その記録をしておく．
またgatsbyでサイトを作るときに参考になるかも．

## 画像関係
このブログはマークダウンで書いている．
マークダウンに画像を挿入したとき，ブログで表示できるように以下の2つのプラグインを入れた．
以下のサイトを参考に設定した．
- gatsby-plugin-sharp
- gatsby-remark-images

<div class="iframely-embed">
	<div class="iframely-responsive" style="height: 140px; padding-bottom: 0;">
		<a href="https://www.corylog.com/gatsby/gatsby016/" data-iframely-url="//cdn.iframe.ly/MkMGz1C?iframe=card-small"></a>
	</div>
</div>


### gatsby-transfermer-remark
マークダウンで書いた記事をhtmlに変換してくれるプラグイン．
マークダウンはローカルファイルに保存するので，アクセスできるようにgatsby-source-filesystemというプラグインも合わせてインストールする．

### gatsby-source-filesystem
ローカルファイルをgatsbyアプリケーションにデータを取り込むプラグインだそう．



<div class="iframely-embed">
	<div class="iframely-responsive" style="padding-bottom: 52.5%; padding-top: 120px;">
		<a href="https://www.amazon.co.jp/dp/4478106118/" data-iframely-url="//cdn.iframe.ly/owfDqf5?iframe=card-small"></a>
	</div>
</div>
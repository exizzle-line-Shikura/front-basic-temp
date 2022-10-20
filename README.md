## 環境構築
Node.js v16.17.1

必要な開発モジュールをyarnでインストールする。
- `yarn install` : モジュールインストール

## コーディング

基本は_src配下の編集ファイル（ejs,scss,js）で作業を実施する。dist配下はjson以外のファイルは触らない。

|- _src：編集ディレクトリ
|-  dist：本番ディレクトリ

template.ejsをコーティングのテンプレとし、pages.jsonにてページ情報を設定し、
distをルートディレクトリとしている。

## コマンド
gulpとwebpackを使用して、簡易的な環境構築を実施している。

- `yarn watch` : ローカルサーバ http://localhost:8200/ が起動、watch管理により_src配下のejs,scss,js全てを監視する。
- `yarn build`: ejs,scss,jsのビルド、画像圧縮を行い、dist配下にhtml、css、jsファイルを書き出す。

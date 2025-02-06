# 勉強用: 仕様変更して遊ぶ

## 概要

Reactをほとんど触ったことがないので、既存ソースを色々いじってReactを勉強するのが目的。  
シンプルだしちゃんとコンポーネント分割もしてそうだったからこのソースを採用。

## TODO

やることリスト。  
完了た項目もメモ書きとして残しておく。

- [ ] Reactとはあんま関係ないちょっとした変更
    - [ ] タスク入力欄を広げる
    - [ ] クリックして何か起きるところは全部カーソルをポインターにする
    - [ ] Todo1→1  
    ただの番号に変更する
- [ ] 編集機能追加
    - [ ] 編集アイコン追加
    - [ ] クリックするとテキストボックス表示
- [ ] チェック入れるとグレーアウト
- [ ] 件数表示
    - [ ] 残りTodo件数→合計件数
    - [ ] 未完了Todo件数を追加
- [ ] ドラッグ＆ドロップで並び換え
- [ ] サブタスク機能  
    - [ ] 適当なボタンを用意
    - [ ] ボタンクリックするとインデントを深くする  
    →これでサブタスクっぽく見えるかな
- [ ] 詳細入力欄を追加

---

以下、オリジナルのreadme

---

## Todo App for React

React（TypeScript）を使った、簡単な Todo アプリ開発

[React(TypeScript)の復習として簡単なTodoアプリを作ってみた話](https://zenn.dev/grazie/articles/cfb43e4b81a152)

### Start

```shell
# node バージョン確認
node -v

# package install
npm install

# server start
npm run start:legacy
```

### React プロジェクト開始方法

```shell
# JS
npx create-react-app { projectName }
# TS
npx create-react-app { projectName } --template typescript

# サーバー起動
cd { projectName }
npm start
```

### その他

```shell
# コンポーネント雛形作成コマンド(拡張機能)
refce
```

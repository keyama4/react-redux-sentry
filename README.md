# React Redux Sentry

react-reduxを使ったwebアプリケーションのsentryの導入及び動作確認のためのミニマムプロジェクト。

## Requirements

node: `v10.5.0`

## How To Run

Change raven config argument value to your sentry dsn.
See [index.js](https://github.com/keyama4/react-redux-sentry/blob/master/src/index.js).

```
$ yarn install
```


```
$ yarn start
```


access `http://localhost:3000`.

## How To Test

アプリ起動後に画面に表示に従って操作するとerrorが発生するのでSentryの対象プロジェクトにデータが渡ってたらOK

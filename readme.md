# Skynet
Multi project task running manager.

## Trobleshooting

to prevent package `sqlite3` dependencies fails in `nan.h` compilation, the solution for now is pin yarn resolution in package.json:
```js
"resolutions": {
  "nan": "github:jkleinsc/nan#remove_accessor_signature"
}
```

if node-gyp can't find de python, then set in config:
```sh
npm config set python python3
```

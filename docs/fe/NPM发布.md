![](../img/bg/post-bg-npm.png")

## 发布一个稳定版

```
npm version 0.1.0

// 发布0.1.0
npm publish
```

发布稳定版后，通过`tnpm install moduleName`会自动安装最新版

## 修改后发布一个稳定版

```
// 一些修改
git add -a && git commit -m 'modify'

npm version 0.1.1

// 发布0.1.1
npm publish
```

## 利用 tag 发布 beta 版

```
npm version prelease
npm publish --tag beta
```

## 查看版本信息

```
npm info

// 查看tag列表
npm dist-tag ls
```

## beta 版重新设置为稳定版

```
// 将模块对应的版本添加到latest
npm dist-tag add <pkg>@<version> latest
npm publish
```

## 删除 tag

```
npm dist-tag rm <pkg> <tag>
```

## 参考文档

- [npm 基本用法](https://segmentfault.com/a/1190000007665813)
- [npm-dist-tag 用法](https://github.com/liangklfangl/npm-dist-tag)
- [Using Npm Tags](http://jbavari.github.io/blog/2015/10/16/using-npm-tags/)
- [npm-dist-tag](https://docs.npmjs.com/cli/dist-tag)
- [How to Label Packages with Dist-tags](https://docs.npmjs.com/getting-started/using-tags)

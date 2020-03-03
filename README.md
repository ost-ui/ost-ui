[![codecov](https://codecov.io/gh/Ironsub/ost-ui-bate/branch/master/graph/badge.svg)](https://codecov.io/gh/Ironsub/ost-ui-bate)
[![Build Status](https://travis-ci.org/Ironsub/ost-ui-bate.svg?branch=master)](https://travis-ci.org/Ironsub/ost-ui-bate)
[![npm package](https://img.shields.io/npm/v/ost-ui.svg?style=flat-square)](https://www.npmjs.com/package/ost-ui)
[![npm downloads](https://img.shields.io/npm/dm/ost-ui.svg)](https://www.npmjs.com/package/ost-ui)
# OST UI 移动端组件库
---


[Documentation](https://ost-ui.github.io/ost-ui/)

<br/>

基于 REACT 框架的移动端组件库

因业务需求繁复，存在大量重复组件及功能开发工作；为提升前端团队开发效率，我们将根据业务场景将高复用组件进行抽离封装 📦； 以达到提升前端开发效率的问题。

### 灵活性

可自定义组件统一单位，以便于搭配各种适配方案

### 简单易用

可通过远程安装也可以打包成本地文件引入使用

### 扩展性

组件考虑到多种使用场景，根据不同的 API 改变组件形态

### install

``` $ npm install ost-ui --save ```

### 调用组件：

<br/>

``` jsx
import { OstMask } from 'ost-ui';
```

### 样式调用:

```less
@import "~ost-ui/dist/npm/__style/index.less";
```

更改全局单位，在引入样式后定义变量 (必须在引入后定义，否则无法起作用 )：

<br/>

```less
@BU: .01rem;
```

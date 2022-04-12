---
title: 常见手写js函数(一)
date: 2022-04-09 19:22:58
tags: JavaScript
categories: 前端
---

本系列主要列出了常见工具函数功能，手写实现。虽然平时开发有这些常用函数的工具库，但是不仅要知道如何使用，还要知道其实现方式，弄清楚其实现的原理，更有利于我们更好的使用这些工具函数，还可以提高我们的编码能力。

比如对于 Promise 的使用，虽然知道使用 Promise 来处理 JavaScript 的异步处理，比如 ajax，比如多个请求之间有参数联系，但是对它的一些用法依然是一知半解，直到某天去看了手写的 Promise A+的实现原理，许多一些迷糊的东西突然豁然开朗，对 Promise 有了更加清晰的认识，我们需要的就是这样的效果。

## 本篇内容是防抖和节流

### 防抖函数

设置的时间：5s
防抖：如果触发事件后从 0s 到 5s 内，如果事件再次触发，则会清空前面设置的时间，又从 0s 开始继续等待 5s，如果 5s 内事件没有再次触发，5s 之后，则执行事件的回调函数。

```javascript
function debounce(fn, wait) {
  let timer = null; // 定义一个变量指向定时器
  return function () {
    // 返回一个函数，闭包，debouce的执行上下文消失了，timer也不会被回收
    const content = this; // 获取调用返回函数的对象
    const arg = [...arguments]; // 获取fn的参数
    if (timer) clearTimeout(timer); // 定时器存在则清除
    // setTimeout的返回值是一个数字对定时器的标志符。执行定时器，将标志符号赋值给timer
    timer = setTimeout(() => {
      // 执行fn函数，通过apply指向调用的对象
      fn.apply(this, arg);
    }, wait);
  };
}
```

防抖常使用的场景：

- input 的 onchange 事件，常用于搜索
- 窗口 resize，当窗口确定大小时才渲染，防止重复渲染；

### 节流函数

设置时间：5s
节流：在 5s 时间内，事件不管触发多少次，只有在 5s 完了之后回调函数才执行，下一次执行还需等待 5s。

节流可以有两种实现方法：

#### 时间差实现

结束时间 - 开始时间 > 设置时间

```javascript
function throttle(fn, wait) {
  let startDate = +new Date(); // 获取当前时间戳
  return function () {
    const context = this;
    const arg = [...arguments];
    let endDate = new Date(); // 获取事件执行时的时间戳
    if (endDate - startDate > wait) {
      // 比较时间戳是否大于设置时间
      fn.apply(context, arg);
      // 将结束的时间戳赋值给开始的时间戳
      startDate = endDate;
    }
  };
}
```

#### 定时器实现

```javascript
function throttle(fn, wait) {
  let timer = null;
  return function () {
    const context = this;
    const arg = [...arguments];
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(context, arg);
      timer = null;
    }, wait);
  };
}
```

节流使用场景：

- 浏览器的窗口 onresize 事件
- 浏览器的滚动条 onscroll 事件

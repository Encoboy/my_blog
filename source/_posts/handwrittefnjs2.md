---
title: 常见手写js函数(二)
date: 2022-04-12 15:18:28
tags: javascript
categories: 前端
---

本系列主要列出了常见工具函数功能，手写实现。虽然平时开发有这些常用函数的工具库，但是不仅要知道如何使用，还要知道其实现方式，弄清楚其实现的原理，更有利于我们更好的使用这些工具函数，还可以提高我们的编码能力。

## 本篇内容是 intanceof，flat，reduce 方法的实现

### intanceof 方法

判断 js 类型的方法，只可以判断引用类型的对象，不能判断基本类型。判断类型的原理是在对象的原型链上是否可以找到该类型的原型。

```javascript
/**
 * @target 要判断的对象
 * @origin 判断该target对象的类型
 */
function myIntanceof(target, origin) {
  // 基本类型返回false
  if (typeof target !== "object" || target === null) {
    return false;
  }
  // 获取目标对象的__proto__原型
  let proto = Object.getPrototype(target);
  // proto 存在，当找到null的时候，表示到达原型链的最顶端
  if (proto) {
    // 判断目标对象的原型__proto__ 是否等于 判断类型的原型
    if (proto === origin.prototype) {
      return true;
    }
    // 不在继续往原型链深入查找，知道原型链的最顶端
    proto = Object.getPrototype(proto);
  }
  return false;
}
```

### 数组的 flat 方法

MDN 上的解释：按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

主要使用 reduce 函数和 concat 函数实现

```javascript
function myFlat(arr, depth = 1) {
  if (depth === 0) return arr.slice();
  return arr.reduce((pre, cur, index, arr) => {
    // 判断元素是否是数组，是的话使用递归。
    return pre.concat(Array.isArray(cur) ? myFlat(cur, depth - 1) : cur);
  });
}
```

### 数组的 reduce 方法

MDN 上的解释：对数组中的每个元素按序执行一个由您提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

```javascript
function reduce(cb, inital) {
  const arr = this; // 调用reduce的数组对象
  const pre = inital || arr[0]; // 定义初始值
  const len = arr.length;
  // 判断是否有初始值，有从0开始循环，没有从1开始。
  for (let i = inital ? 0 : 1; i < len; i++) {
    pre = cb(pre, arr[i], i, arr);
  }
  return pre;
}
```

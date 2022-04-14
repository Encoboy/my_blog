---
title: 群接龙前端笔试题
date: 2022-04-14 11:33:46
tags: javascript
categories: 面试
---

本篇主要记录群接龙的前端笔试题，一共有五大题目，这里只记录四道 js 编程题目。感觉这四道笔试题还是挺不错的，主要考察了对 class 类的编程能力，async await 的理解，对数据结构处理的能力。总体上来说并不难。

## 题目一

编写一个 People 类，使其的实例具有监听事件、触发事件、接触绑定功能。(实例可能监听多个不同的事件，也可以去除监听事件)

```javascript
class People {
  constructor(name) {
    this.name = name;
    this.listenObj = {};
  }
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
  // TODO: 请在此处完善代码
  on(eventName, eventFn) {
    (this.listenObj[eventName] || (this.listenObj[eventName] = new Map())).set(
      eventFn,
      eventName
    );
  }

  emit(eventName, info) {
    for (let fn of this.listenObj[eventName].keys()) {
      fn(info);
    }
  }

  off(eventName, eventFn) {
    this.listenObj[eventName].delete(eventFn);
  }
}
/* 以下为测试代码 */
const say1 = (greeting) => {
  console.log(`${greeting}, nice meeting you.`);
};
const say2 = (greeting) => {
  console.log(`${greeting}, nice meeting you, too.`);
};
const jerry = new People("Jerry");
jerry.sayHi();
// => 输出：'Hi, I am Jerry'

jerry.on("greeting", say1);
jerry.on("greeting2", say2);
jerry.emit("greeting", "Hi");
jerry.emit("greeting2", "Hi2");
// => 输出：'Hi, nice meeting you.' 和 'Hi2, nice meeting you, too'

jerry.off("greeting", say1);
jerry.emit("greeting", "Hi");
jerry.emit("greeting2", "Hi2");
// => 只输出：'Hi2, nice meeting you, too'
```

## 题目二

完成 sleep 函数

```javascript
const sleep = (duration) => {
  // TODO: 请在此处完善代码
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
};

const anyFunc = async () => {
  console.log("123"); // 输出 123
  await sleep(300); // 暂停 300 毫秒
  console.log("456"); // 输出 456，但是距离上面输出的 123 时间上相隔了 300 毫秒
};
```

## 题目三

完成 deepGet 函数，给它传入一个对象和字符串，字符串表示对象深层属性的获取路径，可以深层次获取对象内容

```javascript
const deepGet = (obj, prop) => {
  // TODO: 在此处完善代码
  if (JSON.stringify(obj) === "{}") {
    return undefined;
  }
  // TODO: 在此处完善代码
  const propArr = prop.split("."); // 字符串切割成数组
  let result = JSON.parse(JSON.stringify(obj)); // 深拷贝对象防止修改参数引用
  const propArrLength = propArr.length;
  for (let i = 0; i < propArrLength; i++) {
    result = handleFn(result, propArr[i]);
    if (i === propArrLength - 1) {
      return result;
    }
  }
  // 处理函数
  function handleFn(result, str) {
    const pattSign = /\[[0-9]+\]/; // 正则获取字符串中的 [11]
    const pattNumber = /[0-9]+/; // 正则获取字符串中的数字
    const arrSign = str.match(pattSign); // 得到一个包含这样规则的[11]正则
    // 判断是数组还是对象
    if (arrSign) {
      // 处理stringPro[11]这样的字符串
      const stringPro_index = arrSign[0]; // 得到 [11]
      const arrPro = str.replace(stringPro_index, ""); // 得到属性 stringPro
      const arrIndex = +stringPro_index.match(pattNumber)[0]; // 得到数组下标 11
      return result[arrPro][arrIndex];
    } else {
      return result[str] ? result[str] : undefined;
    }
  }
};

/** 以下为测试代码 */
deepGet(
  {
    school: {
      student: { name: "Tomy" },
    },
  },
  "school.student.name"
); // => 'Tomy'

deepGet(
  {
    school: {
      students: [{ name: "Tomy" }, { name: "Lucy" }],
    },
  },
  "school.students[1].name"
); // => 'Lucy'

// 对于不存在的属性，返回 undefined
deepGet({ user: { name: "Tomy" } }, "user.age"); // => undefined
deepGet({ user: { name: "Tomy" } }, "school.user.age"); // => undefined
```

## 题目四

完成 combo 函数。它接受任意多个单参函数（只接受一个参数的函数）作为参数，并且返回一个函数。它的作为用：使得类似 f(g(h(a))) 这样的函数调用可以简写为 combo(f, g, h)(a)

```javascript
const combo = (...arg) => {
  // TODO: 请在此处完善代码
  return function (number) {
    let arglength = [...arg].length;
    for (let i = 0; i < arglength; i++) {
      number = arg.pop()(number);
    }
    return number;
  };
};

/* 以下为测试代码 */
const addOne = (a) => a + 1;
const multiTwo = (a) => a * 2;
const divThree = (a) => a / 3;
const toString = (a) => a + "";
const split = (a) => a.split("");

// split(toString(addOne(multiTwo(divThree(333)))));
// => ["4", "4", "5"]

const testForCombo = combo(split, toString, addOne, multiTwo, divThree);
console.log(testForCombo(666));
// => ["4", "4", "5"]
```

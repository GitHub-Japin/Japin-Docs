---
title: JavaScript笔记
date: 2024/12/25
tags:
 - js
categories:
 - 前端
---

## 数组截取
### slice
该方法是对数组进行部分截取，并返回一个数组副本；参数start是截取的开始数组索引，end参数等于你要取的最后一个字符的位置值加上1（可选）
```text
//如果不传入参数二，那么将从参数一的索引位置开始截取，一直到数组尾
var a=[1,2,3,4,5,6];
var b=a.slice(0,3);    //[1,2,3]
var c=a.slice(3);       //[4,5,6]
 
//如果两个参数中的任何一个是负数，array.length会和它们相加，试图让它们成为非负数，举例说明：
//当只传入一个参数，且是负数时，length会与参数相加，然后再截取
var a=[1,2,3,4,5,6];
var b=a.slice(-1);    //[6]
 
//当只传入一个参数，是负数时,并且参数的绝对值大于数组length时，会截取整个数组
var a=[1,2,3,4,5,6];
var b=a.slice(-6);    //[1,2,3,4,5,6]
var c=a.slice(-8);    //[1,2,3,4,5,6]
 
//当传入两个参数一正一负时，length也会先于负数相加后，再截取
var a=[1,2,3,4,5,6];
var b=a.slice(2,-3);    //[3]
 
//当传入一个参数，大于length时，将返回一个空数组
var a=[1,2,3,4,5,6];
var b=a.slice(6);　　//[]
```

### splice
splice方法从array中移除一个或多个数组，并用新的item替换它们。参数start是从数组array中移除元素的开始位置。参数deleteCount是要移除的元素的个数。如果有额外的参数，那么item会插入到被移除元素的位置上。它返回一个包含被移除元素的数组。
```text
var a=['a','b','c'];
var b= a.splice(1,1,'e','f');    //a=['a','e','f','c'],b=['b']

var a=['a','b','c'];
a.splice(索引,1) //删除索引位置的元素
```

## 数组追加
### push
```text
var arr = [];
arr.push(1);
arr.push(1,2,3,4,5);
```

### splice
```text
let arr=[1,2,3,4];
arr.splice(1,0,1.5);
```

### unshift
```text
let arr=[1,2,3,4];
arr.unshift(5);
console.log(arr); //[5,1,2,3,4]
```

### length
### concat
### ...

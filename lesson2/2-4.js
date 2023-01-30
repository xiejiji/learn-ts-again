function Person() {}
Person.prototype.commonFriends = ["赵", "钱", "孙", "李"];
const person1 = new Person();
Person.prototype = {
  commonFriends: ["周", "吴", "郑", "王"],
};
const person2 = new Person();
console.log(person1.commonFriends);
console.log(person2.commonFriends);

let k1 = Symbol("k1"),
  k2 = Symbol("k2");
let o = {
  1: 1,
  first: "first",
  [k1]: "sym2",
  second: "second",
  0: 0,
};
o[k2] = "sym2";
o[3] = 3;
o.third = "third";
o[2] = 2;
const inKeys = [];
for (let key in o) {
  inKeys.push(key);
}
console.log(inKeys);
console.log(Object.keys(o));
console.log(Object.getOwnPropertyNames(o));

const o1 = {};
o1[1] = 1;
o1["first"] = "first";
o1["second"] = "second";
o1[0] = 0;
console.log(Object.keys(o1));
console.log(Object.getOwnPropertyNames(o1));

// 原型链代码

// function SuperType() {
//   this.property = true;
// }
// SuperType.prototype.getSuperValue = function () {
//   return this.property;
// };
// function SubType() {
//   this.subProperty = false;
// }
// SubType.prototype = new SuperType();
// SubType.prototype.constructor = SubType();
// SubType.prototype.getSubValue = function () {
//   return this.subProperty;
// };
// const instance = new SubType();
// console.log(instance.getSuperValue());
// console.log(instance.constructor);

// 原型链的问题
// 共享;

// 子类型实例传递参数给父类型;

// 盗用构造函数

function SuperType(name) {
  this.superProperty = true;
  this.name = name;
}
SuperType.prototype.getSuperValue = function () {
  return this.superProperty;
};
function SubType() {
  SuperType.call(this, "子类型传递过来的");
  this.subProperty = false;
}
SubType.prototype = new SuperType();
const instance = new SubType();
console.log(instance.name);
console.log(instance.getSuperValue());

// 原型式继承
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

let person = {
  name: "鸣人",
  friends: ["佐助", "小樱"],
};
// 第二个参数时描述属性
const anotherPerson = Object.create(person, {
  name: {
    value: "佐助",
  },
});
// Object.create() 传入一个参数时一样

// 寄生式组合继承

function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
function inheritPrototype(subType, superType) {
  let prototype = object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

function SuperType(name) {
  this.name = name;
  this.color = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
  console.log(this.name);
};
function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function () {
  console.log(this.age);
};

class Person {
  constructor() {}
  static locate() {}
}

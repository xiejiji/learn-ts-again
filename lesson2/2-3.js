// 原型模式
function QQUser(QQNo_, QQAge_, QQMark_) {
  this.QQAge_ = QQAge_;
  this.QQNo_ = QQNo_;
  this.QQMark_ = QQMark_;
}

// 箭头函数的this指向问题
// QQUser.prototype.showName = () => {
//   console.log("名字", this.QQNo_);
// };
console.log("QQUserKeys", Object.getOwnPropertyNames(QQUser));
console.log(
  "QQUser.prototype.__proto__",
  QQUser.prototype.__proto__ === Object.prototype
);
console.log("--------------------------------------");
QQUser.prototype.showName = function () {
  console.log(this.QQAge_);
  console.log("名字", this.QQNo_);
};

QQUser.prototype.commonfriends = ["天天", "小李", "雏田"];
// QQUser.prototype的 [[Prototype]] 和 constructor 是系统固定分配的；
const zuozhu = new QQUser("佐助", 12, "宇智波一族");
const mingren = new QQUser("鸣人", 12, "九尾人柱力");
const xiaoying = new QQUser("小英", 12, "怪力");
zuozhu.commonfriends.push("牙");
console.log(QQUser.prototype);
zuozhu.showName();
console.log(Object.prototype.__proto__);
console.log(QQUser.prototype.isPrototypeOf(mingren));
console.log(Object.getPrototypeOf(zuozhu));
console.log(Object.getPrototypeOf(zuozhu) === QQUser.prototype);

// hasOwnPrototype()

console.log("hasOwnPrototype", zuozhu.hasOwnProperty("QQNo_"));
console.log(Object.getOwnPropertyDescriptor(QQUser.prototype, "showName"));

// in 无论是实例的还是原型上的属性

console.log("in QQUser.prototype", "showName" in QQUser.prototype);
console.log("in zuozhu", "showName" in zuozhu);
// 要确定某个属性是否存在于原型上

function hasPrototypeProperty(object, name) {
  return !object.hasOwnProperty("name") && name in object;
}
console.log(hasPrototypeProperty(zuozhu, "QQAge__"));
console.log(hasPrototypeProperty(zuozhu, "showName"));
for (key in zuozhu) {
  console.log(key);
}
// 可枚举的实例属性
console.log(Object.keys(zuozhu));

// 原型的属性，不论可不可以枚举
console.log(Object.getOwnPropertyNames(QQUser.prototype));

// 共享性产申的问题，如果是引用类型就会修改共享的值
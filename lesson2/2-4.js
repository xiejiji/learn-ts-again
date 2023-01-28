function Person() {}
Person.prototype.commonFriends = ["赵", "钱", "孙", "李"];
const person1 = new Person();
Person.prototype = {
  commonFriends: ["周", "吴", "郑", "王"],
};
const person2 = new Person();
console.log(person1.commonFriends);
console.log(person2.commonFriends);

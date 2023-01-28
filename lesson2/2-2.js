// 构造函数模式
function QQUser(QQNo_, QQAge_, QQMark_) {
  this.QQAge_ = QQAge_;
  this.QQNo_ = QQNo_;
  this.QQMark_ = QQMark_;
  this.commonfriends = ["天天", "小李", "雏田"];
  this.show = function () {
    console.log(this.QQNo_);
    console.log(this.commonfriends);
  };
}

const zuozhu = new QQUser("佐助", 12, "宇智波一族");
const mingren = new QQUser("鸣人", 12, "九尾人柱力");
const xiaoying = new QQUser("小英", 12, "怪力");

zuozhu.show();
zuozhu.commonfriends.push("牙");
zuozhu.show();
mingren.show();
console.log(Object.getPrototypeOf(zuozhu));
console.log(zuozhu.__proto__ === QQUser.prototype);
console.log(zuozhu.constructor === QQUser);
console.log(zuozhu instanceof Object);
console.log(zuozhu instanceof QQUser);

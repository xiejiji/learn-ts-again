class Person {
  public name: string;
  public age: number;
  public phone: string;
  public address?: string[] = ["中关村", "后厂村"];
  constructor(
    name_: string,
    age_: number,
    phone_: string,
    address_?: string[]
  ) {
    this.name = name_;
    this.age = age_;
    this.phone = phone_;
    this.address = address_;
  }
  public doEat(who: string, address: string): void {
    console.log(`${this.name}和${who}吃饭，在${address}吃饭`);
  }
}
const person = new Person("张三", 20, "139999999");
console.log(person);
person.doEat("李四", "王府井");

console.log(Person.prototype.isPrototypeOf(person));
console.log(Object.getPrototypeOf(person));

class Teacher extends Person {
  public subject: string;
  constructor(name_: string, age_: number, phone_: string, subject_: string) {
    super(name_, age_, phone_);
    this.subject = subject_;
  }
  doTeach() {
    console.log(`${this.name}老师教${this.subject}`);
  }
}
const teacherW = new Teacher("王", 40, "12121221", "数学");
console.log(teacherW.doTeach());
(async function () {
  const imgUrl =
    "https://mbdp01.bdstatic.com/static/landing-pc/img/logo_top.79fdb8c2.png";
  const data = await fetch(imgUrl);
  const blob = await data.blob();
  await navigator.clipboard.write([
    new ClipboardItem({
      [blob.type]: blob,
    }),
  ]);
  console.log(1111);
})();

export {};

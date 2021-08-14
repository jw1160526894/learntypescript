class Dog {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    //构造函数在实例创建完被立即调用
    this.name = name;
    this.age = age;
  }
  bark() {
    alert(this.name + '汪汪汪!');
  }
}

const dog1 = new Dog('旺财', 4);
const dog2 = new Dog('小白', 2);
dog1.bark()

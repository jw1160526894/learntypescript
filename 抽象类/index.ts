//抽象类不是es6所支持的，是ts专有的,可以通过new.target去实现

//当某个类我们不希望通过它来创建实例，可以把它设置成一个抽象类 使用abstract关键字
//抽象类就是专门用来给其它类继承的父类
abstract class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract sayHello(): void; //抽象方法，子类必须定义sayHello方法
  //为什么要这样做？避免子类没有定义该方法时 会使用到该方法
}

class Dog extends Animal {
  sayHello() {
    console.log('狗在叫')
  }
}

class Cat extends Animal {
  sayHello() {
    console.log('猫在叫')
  }
}
//const an = new Animal('马'); //报错  抽象类不能实例化

const dog1 = new Dog('小黑');
dog1.sayHello();


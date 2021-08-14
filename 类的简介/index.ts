class Person {
  readonly name: string = '孙悟空';
  static readonly age: number = 18;

  // sayHello() {
  //   console.log('hello')
  // }
  static sayHello() {
    console.log('我是静态方法，只能被Person类调用')
  }
}

const p1 = new Person();
console.log(p1.name)


//static表示静态属性，静态属性不能被实例调用，只能通过类来调用
console.log(Person.age)

//readonly 表示属性或方法是只读的，不能赋值
//p1.name = '猪八戒'; //报错

//Person.age = 20;//报错 age是只读的静态属性

//p1.sayHello()  //报错
Person.sayHello()


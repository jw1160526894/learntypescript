//接口也是ts特有的 ，es6没有
//1.接口可以定义一个类型的规范，类似type定义的类型
type myType = {
  name: string,
  age: number
}

const a: myType = {
  name: '孙悟空',
  age: 18
}

//接口与type的区别在于，接口可以重复定义（最后的规范是他们的并集）,而类型不能重复定义

//以下会报错
// type myType = {
//   sex:string
// }

interface myInterface {
  name: string,
  age: number
}
interface myInterface {
  sex: string
}

const b: myInterface = {
  name: '猪八戒',
  age: 18,
  sex: '男'
}

//-------------------------------

//2.接口用来定义一个类的结构
interface myInter {
  name: string;
  sayHello(): void; //接口中的方法都是抽象方法
}

class MyClass implements myInter { //implements表示对接口的实现
  name: string;
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log('你好啊')
  }
}

const c = new MyClass('美猴王')
c.sayHello()
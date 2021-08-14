/*
  6.Object类型
*/
let a: Object;
a = {};
a = function () { }
//通常Object类型是没有意义的，因为js中的对象有很多，函数、数组、对象

//通常这样使用
let b: { name: string }; //表示b的属性是name，值的类型是string
//b = {name:123};//报错
//b = {name:'hello',age:18} //报错
b = { name: 'hello' };

let b1: { name: string, age: number };
//b1 = {name:'hi'} //报错
b1 = { name: 'hello', age: 18 }

//属性后加 ？，表示属性是可选的
let b2: { name: string, age?: number };
b2 = { name: 'haha' }
b2 = { name: 'haha', age: 18 };



//[propertyName:string]:any 表示任意类型的属性,properName不是固定的，写成abc都可以
let b3: { name: string, [xxx: string]: any };
//表示b3类型中 必须有一个name属性，其它属性有什么都可以
b3 = { name: 'hello', a: 123, b: 456 };



//设置函数结构的声明
//let d:Function;//通常设置成函数类型没有什么意义，我们需要考虑的是函数的结构

let d: (n1: number, n2: number) => number;
//表示 函数d的参数有两个，都是number类型，返回值也是number类型
d = function (a: number, b: number): number {
  return a + b;
}

//报错
// d = function(a:string,b:number):number{
//   return a + b;
// }



/*
  7.Array 数组类型
  声明方式
    类型[]
    或
    Array<类型>
*/
let e: string[]; //表示数组中的元素必须是string类型
//e = ['1','2',true];//报错
e = ['1', '2', 'hello'];

//第二种表示方法
let e1: Array<number>; //表示数字类型数组
e1 = [1, 2, 3];
//e1 = [1,'a'];//报错

let e2: Array<any>// 表示任意类型数组，通常不这样使用
e2 = [1, 'a', true];


/*
  8.tuple 元组，就是固定长度的数组
  声明方式
    [类型，类型,...]
*/
let f: [string, number];
f = ['a', 123];
//f = ['b','c'];//报错
//f = ['a'];//报错

/*
  enum 枚举

    性别这种字段存在数据库一般是 0 或 1，表示男和女，此时想知道0是男,还是1是男就不方便，枚举就是解决这种问题的
*/
enum Gender {
  male,
  female
}

let i: { name: string, sex: Gender };
i = {
  name: '孙悟空',
  sex: Gender.male
}
console.log(i.sex === Gender.male);//true


//补充

// & 表示同时
let j: { name: string } & { age: number };
j = { name: 'hello', age: 20 };
//j = {name:'hello'};//报错

//类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
k = 5;
//k = 6;//报错

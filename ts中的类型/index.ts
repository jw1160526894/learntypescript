
/*
  1.直接使用字面量进行类型声明
*/
let a:10;
a = 10;
//a = 11; //报错

//可以使用 | 来连接多个类型(联合类型)
let b :"male" | "female";
b = "male";
b = "female";
//b = true; // 报错

let c:string | boolean;
c = true;
c = 'hello';
//c = 123;//报错




/*
  2.any(任意类型) ,一个变量设置了any类型后，相当于对该变量关闭了TS的类型检测
*/
//let d:any;
//声明变量如果不指定类型，则TS解析器会自动判断该类型为any(隐式any)
let d;
d = 123;
d = 'hello';
d = true;


/*
  3.unknown(位置类型)
*/

let e:unknown;
e = 123;
e = true;


let s:string;
//d的类型是any，它可以赋值给任意变量
//s = d;

e = 'hello';
//unknown 其实就是一个类型安全的any
//unknown类型的变量,不能直接赋值给其它类型的变量,可以使用判断和类型断言
//s = e; //报错

// if(typeof e === 'string'){
//   s = e;
// }

//类型断言,告诉解析器变量的实际类型
/*
基本语法
 变量 as 类型
 或
 <类型>变量

*/

//s = e as string;
s = <string>e;


/*
  4.void 表示空，以函数为例 表示没有返回值
*/
function fn():void{
  console.log(123);
  //return '123'; //报错
}

/*
  5.never 表示永远不会返回结果
*/
function fn2():never{
  throw new Error('报错了!');//报错后函数立即结束了
}
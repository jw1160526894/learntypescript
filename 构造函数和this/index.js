var Dog = /** @class */ (function () {
    function Dog(name, age) {
        //构造函数在实例创建完被立即调用
        this.name = name;
        this.age = age;
    }
    Dog.prototype.bark = function () {
        alert(this.name + '汪汪汪!');
    };
    return Dog;
}());
var dog1 = new Dog('旺财', 4);
var dog2 = new Dog('小白', 2);
dog1.bark();

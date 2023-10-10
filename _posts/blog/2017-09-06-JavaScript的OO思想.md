---
layout: post
title:  JavaScript的OO思想
date:   2017-09-06T15:06:25.000Z
description: ​​​​​​​类class是Object-Oriented面向对象的语言有一个标志，通过类我们可以创建任意多个具有相同属性和方法的对象。JavaScript中没...
img: https://www.samyoc.com/uploads/users/1/images/1520865409790.jpg
author: Winter
category: blog
answer: 0
tags: 前端
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><img src="https://www.samyoc.com/uploads/users/1/images/1520865409790.jpg" style="width:100%" /></p>

<p>类class是Object-Oriented面向对象的语言有一个标志，通过类我们可以创建任意多个具有相同属性和方法的对象。JavaScript中没有类的概念，但它也是面向对象的，只是实现方法会有所不同。</p>

<p>创建单个对象有两种基本方法：</p>

<blockquote>
<p>1.使用Object的构造函数创建实例然后在实例上添加属性和方法；&nbsp;<br />
2.使用对象字面量的方法。</p>
</blockquote>

<p>在简单的场景这两种方法是很实用的，但如果遇到有很多对象有相同的属性，相同的方法的时候，这两种方法的弊端就暴露出来了，会产生大量的重复代码。</p>

<p>为了应对不同的场景和方法，创建对象有以下几种方法。</p>

<p>1、<strong>工厂模式</strong>。所谓的工厂模式指的是使用函数封装利用Object的构造函数创建实例再添加属性和方法的步骤，然后返回该实例。这样每次运行这个方法我们都会得到一个结构相同的对象。</p>

<pre>
<code>function createPerson(name, age){
    var person = new Object();
    person.name = name;
    person.age = age;
    person.sayHi = function () {
        alert(&quot;My name is &quot; + person.name + &quot;, I&#39;m &quot; + person.age);
    }

    return person;
}

var liLei = createPerson(&quot;LiLei&quot;, 12);
liLei.sayHi();</code></pre>

<p>这个模式虽然解决了重复代码的问题，但是创建出的对象都是Object类型，<strong>没有解决对象识别问题</strong>。</p>

<p>2、<strong>构造函数模式</strong>。利用构造函数模式可以解决对象是别问题。改造上面的代码可得：</p>

<pre>
<code>function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayHi = function () {
        alert(&quot;My name is &quot; + this.name + &quot;, I&#39;m &quot; + this.age);
    }
}

var liLei = new Person(&quot;LiLei&quot;, 12);
liLei.sayHi();</code></pre>

<p>对比工程模式我们可以看到以下3处不同：</p>

<blockquote>
<p>1、没有显示创建对象&nbsp;<br />
2、直接将属性和方法赋值给了this对象&nbsp;<br />
3、没有return</p>
</blockquote>

<p>使用构造函数会经历一下4个步骤：</p>

<blockquote>
<p>1、创建一个新的对象&nbsp;<br />
2、将构造函数的作用域赋值给新的对象，这样this就指向了新的对象&nbsp;<br />
3、执行构造函数中的代码（为这个新对象添加属性或方法）&nbsp;<br />
4、返回新对象</p>
</blockquote>

<p>所以上面的的形式就如同以下所示一般：</p>

<pre>
<code>var hanMeimei = new Object();
Person.call(hanMeimei, &quot;Han Meimei&quot;, 12);
hanMeimei.sayHi();</code></pre>

<p>然而构造函数模式并非是完美的，就比如Person的sayHi方法，<strong>我们每次创建一个新的实例的时候，都会创建一个新的sayHi并为之开辟新空间，尽管这个sayHi方法做的事是一模一样的</strong>。</p>

<pre>
<code>var liLei = new Person(&quot;LiLei&quot;, 12);
var hanMeimei = new Person(&quot;Han MeiMei&quot;, 12);
alert(liLei.sayHi == hanMeimei.sayHi); //false</code></pre>

<p>创建多个相同的方法确实没有必要。虽然我们可以像下面的例子一样定义一个全局的函数来解决这个问题，但是由此引发的问题就是，如果我们有多个方法，就需要定义多个全局函数了，这不仅会破坏自定义引用类型的封装性，还会使全局作用域混乱，是一种很不安全的做法。</p>

<pre>
<code>function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayHi = sayHi;
}

function sayHi () {
    alert(&quot;My name is &quot; + this.name + &quot;, I&#39;m &quot; + this.age);
}</code></pre>

<p>3、<strong>原型模式</strong>。为了解决构造函数的重复定义相同的方法的问题，原型模式便出现了。</p>

<p>首先我们得理解什么是原型，原型即prototype，它是一个指针，指向一个对象，这个对象的用途就是包含特定类型的所有示例共享的属性和方法，我们创建的每一个函数都会有原型（prototype）属性。使用原型的好处是，我们将共享的属性或方法赋值给原型对象，该类型的所有实例都可以访问该属性或方法。</p>

<pre>
<code>function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.sayHi = function () {
    alert(&quot;My name is &quot; + this.name + &quot;, I&#39;m &quot; + this.age);
}

var liLei = new Person(&quot;Li Lei&quot;, 12);
liLei.sayHi();//My name is Li Lei, I&#39;m 12
var hanMeimei = new Person(&quot;Han MeiMei&quot;, 12);
hanMeimei.sayHi();//My name is Han MeiMei, I&#39;m 12
alert(liLei.sayHi == hanMeimei.sayHi); //true</code></pre>

<p>关于原型对象有以下3点需要注意：</p>

<p>(1)、如果我们在实例中添加一个属性，该属性与原型对象中的属性同名的话，处理的结果是原型中的属性被屏蔽了，记住是被屏蔽了而不是重写了，因为如果这个时候再删除实例中的这个属性的话，再访问这个值就会访问原型中的同名属性，并且该值为原型初始化时的值，一直未改过。</p>

<pre>
<code>function Dog(age){
    this.age = age;
}

Dog.prototype.name = &quot;Little White&quot;;

var littleWhite = new Dog();
alert(littleWhite.name); // Little White;
littleWhite.name = &quot;Xiao Bai&quot;; 
alert(littleWhite.name); //Xiao Bai
delete littleWhite.name;
alert(littleWhite.name); // Little White;</code></pre>

<p>(2)、原型对象中的引用属性在其中一个实例里被改变，则所有的实例获取该属性都将得到新的值。</p>

<pre>
<code>function MyToy(){

}

MyToy.prototype.group = [&quot;Dingding&quot;, &quot;Dingxi&quot;, &quot;Lala&quot;];

var toy1 = new MyToy();
var toy2 = new MyToy();
toy1.group.push(&quot;Po&quot;);
alert(toy2.group); // Dingding,Dingxi,Lala,Po</code></pre>

<p>如上上述例子所示，我们通过实例toy1修改了原型对象的属性group，toy2去获取的时候值已经发生了变化。</p>

<p>(3)、初始化一个实例后，再给函数的原型对象重新赋值，<strong>已创建的</strong>实例与新的原型对象不会有联系，也就是说已创建的实例不能访问新原型对象的方法和属性。如下所示：</p>

<pre>
<code>var toy = new MyToy();

MyToy.prototype = {
    group: [&quot;Dingding&quot;, &quot;Dingxi&quot;, &quot;Lala&quot;]
};

alert(toy.group); // undefined</code></pre>

<p>以上三点也可以很好的帮助我们理解原型prototype，它是一枚指针，默认指向一个Object对象，在创建函数时会相应为其初始化一枚这样的指针，当使用该函数new出一个新的实例时，该指针又会赋值给new出的实例。所以在new出一个新实例后，再给函数的原型对象赋值个新的对象是，函数的原型指针指向了新的对象，但是此时的实例的原型的指针指向的还是旧的对象。&nbsp;</p>

<p>如果单单只是用原型模式的话，事实上并不能满足所有的需求。原型模式也是没有缺点，主要体现在以下两点：</p>

<blockquote>
<p>1、省去了构造函数传参&nbsp;<br />
2、所有的实例共享原型的属性，这个是非常可怕的</p>
</blockquote>

<p>4、<strong>组合使用构造函数和原型模式</strong>。单独使用原型模式会有弊端，但和其他模式组合起来使用的话，有些问题就迎刃而解了。典型的就是组合使用构造函数和原型模式，它是目前ECMAScript中，认同度最高，使用最广泛的一种创建自定义类型的方法。</p>

<pre>
<code>function MyToy(owner){
    this.owner = owner;
    this.group = [&quot;Dingding&quot;, &quot;Dingxi&quot;, &quot;Lala&quot;];
}

MyToy.prototype.sayOwner = function(){
    alert(this.owner);
};


var lileis = new MyToy(&quot;Li Lei&quot;);
var hanMeimeis = new MyToy(&quot;Han Meimei&quot;);
lileis.group.push(&quot;Po&quot;);
alert(lileis.group);//Dingding,Dingxi,Lala,Po
alert(hanMeimeis.group);//Dingding,Dingxi,Lala
alert(lileis.group == hanMeimeis.group); // false
alert(lileis.sayOwner == hanMeimeis.sayOwner); // true</code></pre>

<p>5、<strong>动态原型模式</strong>。有其它OO语言开发经验的朋友看到独立的函数和独立的原型的时候会有点困惑，甚至难以理解。例如在C#类中，方法和属性是一个整体，是一起定义的</p>

<pre>
<code>public class MyToy
{
    public string owner { get; set;}
    public string[] group { get; set; }

    public void sayOwner()
    {
        //...
    }
}</code></pre>

<p>当然JS里也可以变成这样，只是方法有所不同。</p>

<pre>
<code>function MyToy(owner){
    this.owner = owner;
    this.group = [&quot;Dingding&quot;, &quot;Dingxi&quot;, &quot;Lala&quot;];

    if(typeof this.sayOwner != &quot;function&quot;) {
        MyToy.prototype.sayOwner = function(){
            alert(this.owner);
        };
    }
}

var liLei = new MyToy(&quot;Li Lei&quot;);
liLei.sayOwner();//Li Lei</code></pre>

<p>这便是动态原型模式，当你需要同时定义很多个原型函数的时候，不需要为每一个函数都做一次if判断，仅需要判断一个就可以了，然后把所有的定义都放在一个if语句中。</p>

<p>6、<strong>寄生构造函数模式</strong>。当我们想封装JS中的引用对象时，可能以上的方式都不适用，这个时候我们就可以使用这个所谓的寄生构造函数模式了。</p>

<pre>
<code>function MyToy(){
    // Create Array
    var arr = new Array();

    // Add values
    arr.push.apply(arr, arguments);

    // Add method
    arr.toPipedString = function(){
        return this.join(&quot;-&quot;);
    }

    return arr;
}

var toys = new MyToy(&quot;Dingding&quot;, &quot;Dingxi&quot;, &quot;Lala&quot;);
alert(toys.toPipedString()); // Dingding-Dingxi-Lala
alert(toys instanceof MyToy); // false
alert(toys instanceof Array); // true</code></pre>

<p>我们可以注意到此时toys instanceof MyToy的值是false，这主要是因为构造函数返回的对象不是MyToy类型的实例，而由于在构造函数中出现了return arr，所以得到的arr，是一个Array类型的对象。</p>

<p>7、<strong>稳妥构造函数模式</strong>。所谓的稳妥模式，即使在函数体内不访问this，没有公共属性，变量私有化，这种模式比较适合在安全的环境中或者不想数据被第三方的应用程序改动时使用。</p>

<pre>
<code>function MyToy (name) {
    var obj = new Object();
    obj.sayName = function(){
        alert(name);
    }
    return obj;
}

var dingding = MyToy(&quot;Ding ding&quot;);
dingding.sayName();</code></pre>

<p>在这个创建的对象中除了调用sayName方法，是没有其它办法可以访问变量name的。</p>

<p>看起来它和寄生构造函数很相似，都不能使用instanceof来判断创建的对象的类型，不过它们有以下两点是不同的。</p>

<blockquote>
<p>1、不使用new操作符来调用构造函数&nbsp;<br />
2、在方法体内不引用this</p>
</blockquote>

<p>以上便是在JavaScript中创建对象7种常见方法，每个方法都有利有弊，最重要的还是在合适的场景中使用合适的方法。</p>

<p>&nbsp;</p>

<p>我们知道面向对象的语言有四大基本特性：抽象、继承、封装和多态。抽象性是指将具有一致的数据结构（属性）和行为（操作）的对象抽象成类。一个类就是这样一种抽象，它反映了与应用有关的重要性质，而忽略其他一些无关内容。任何类的划分都是主观的，但必须与具体的应用有关。在C#等一些面向对象语言中有抽象类的概念，继承了抽象类的类必须实现抽象类中的方法，而在JS中由于不存在类的概念，不存在重写等关键字，所以JS中是没有抽象概念。而JS是弱类型的语言，任何一个类型都可以赋值给任一属性，所以我们可以说JS是支持多态的。所以总的来说JS支持继承，封装和多态。前面讲到了对象的创建，可以理解为封装，这次我们主要说说这个继承的思想。</p>

<p>与其他面向对象语言不同，JS中的继承也有着自己独特的实现方式。基本上有以下6中实现方式：<strong>原型链，借用构造函数，组合继承，原型式继承，寄生式继承，寄生组合式继承</strong>。</p>

<p>1、<strong>原型链继承</strong>&nbsp;<br />
所谓的原型链继承即是通过将父对象直接赋值给子对象的原型，这一样子对象可以通过原型访问父对象中的属性和方法。我们知道，在创建一个新的对象时，原型指针都会默认的指向一个Object对象，因此我们可以通过原型指针访问object中的方法，比如toString方法，我们可以说该对象实际上是通过原型链继承了Object对象。实现原型链的继承方式如以下所示：</p>

<pre>
<code>function SuperType(){
    this.name = &quot;I&#39;m super type&quot;;
}

SuperType.prototype.sayHi = function(first_argument) {
    alert(&quot;Hi&quot;);
};

function SubType(){

}

SubType.prototype = new SuperType();

var sub = new SubType();
sub.sayHi();//Hi
alert(sub.name);//I&#39;m super type
alert(sub.constructor == SuperType);//true</code></pre>

<p>通过上面的原型链继承的例子我们不难方面以下几点：</p>

<blockquote>
<p>1、和C#，Java等面向对象语言不同，它并不是继承类的机构的方式，而是将一个父对象实例赋值给子对象的原型指针而实现继承的&nbsp;<br />
2、使用该方式的继承不仅会继承来自实例中的方法，而且会继承其属性，并且该属性的可以说是静态的，即在一个子对象的实例中改变，则其它实例中也会改变。&nbsp;<br />
3、我们知道默认的原型对象里会有一个constructor属性，该属性指向的是函数的本身，而现在整个原型对象被重写了，子对象的构造函数属性指向了父对象的函数，即现在sub的constructor指向的是SuperType函数。</p>
</blockquote>

<p>2、<strong>借用构造函数</strong>&nbsp;<br />
使用原型链可以实现继承，但是这样的继承并不是完美的，大部分时候我们并不希望继承的属性是存在原型对象中的，因为这样带来的负面效果是牵一发而动全身，改变一处而处处改变，而这样的实现是无法满足一些特定的需求的。所以如果我们要子对象继承父对象中的属性，而又希望每个子对象中的属性是独立的话，则必须要考虑其他的实现方式。在此引申出另一种实现方法：借用构造函数。这种方式可以解决属性继承的问题。</p>

<pre>
<code>function SuperType(){
    this.name = &quot;Li Lei&quot;;
    this.sayHi = function() {
        alert(&quot;Hi&quot;);
    };
}

SuperType.prototype.show = function() {
    alert(&quot;Hello world&quot;);
};

function SubType(){
    SuperType.call(this);
}

var sub = new SubType();
sub.sayHi();//Hi
alert(sub.name);//Li Lei
alert(sub.constructor == SubType);//true
alert(sub.show);//undefined</code></pre>

<p>我们可以看到实现这种继承的方式只是在子类型的构造函数的内部调用父类型的构造函数而已。能实现这种方式的主要原因是函数是在特定环境中执行代码的对象，因此通过使用apply()和call()方法也可以在新创建的对象上执行构造函数。浅显点来说，现在做的事不过是将子对象当前作用域赋值给函数SuperType，然后执行SuperType函数，因为此时SuperType函数里的this为sub，所以才会使得sub有了name和sayHi属性。&nbsp;<br />
这种实现方式有以下几点也需要注意：</p>

<blockquote>
<p>1、该实现没有改变原型对象&nbsp;<br />
2、原型对象中的constructor指向的仍是子对象函数类型本身&nbsp;<br />
3、父类型中的原型对象对子类型是不可见的</p>
</blockquote>

<p>所以当我们想子类型能够继承父类型的原型时，借用构造函数方式是不能满足需求的。</p>

<p>3、<strong>组合继承</strong>&nbsp;<br />
顾名思义组合继承就是原型链+借用构造函数继承了，它有时候也叫经典伪继承。其思路是使用原型链继承父类型的原型属性和方法，使用借用构造函数来实现对实例属性和方法的继承。话不多说，看一段代码。</p>

<pre>
<code>function SuperType(){
    this.name = &quot;Li Lei&quot;;
}
SuperType.prototype.show = function() {
    alert(&quot;Hello world&quot;);
};

function SubType(){
    SuperType.call(this);
}
SubType.prototype = new SuperType();

var sub = new SubType();
alert(sub.name);//Li Lei
alert(sub.constructor == SuperType);//false
sub.show();//Hello world</code></pre>

<p>在这里虽然SubType的原型中虽然也存在属性name，但是由于利用借用构造函数方式，在构造函数内部又定义了name，此时这个那么是覆盖了原型中的name的。由此可见，组合继承融合了原型链和借用构造函数的优点，避免了各自产生的缺陷。但是组合继承也并非是完美的，它调用了两次父类型的构造函数，可能会产生冗余的方法和属性，例如上面的例子中，原型对象和实例对象都有name属性。</p>

<p>4、<strong>原型式继承</strong></p>

<p>如果你不想创建一个构造函数，而只是想让一个对象和另一个对象相似的话，就可以使用原型式继承了。</p>

<pre>
<code>function create(obj){
    function F(){};
    F.prototype = obj;
    return new F();
}

var people = {
    name: &quot;Li Lei&quot;,
    friends: [&quot;Han Meimei&quot;, &quot;Jim Green&quot;]
}

var tom = create(people);
tom.name = &quot;Tom&quot;;
tom.friends.push(&quot;Li Lei&quot;);

var lucy = create(people);
lucy.name = &quot;Lucy&quot;;
lucy.friends.push(&quot;Tom&quot;);

alert(people.friends);//Han Meimei,Jim Green,Li Lei,Tom</code></pre>

<p>在ECMAScript5中通过新增了Object.create()的方法规范了原型式继承，该方法接受两个参数，一个是用作新对象原型的对象，一个是为新对象定义额外属性的对象，在只传入一个对象的情况下，该方法和上面示例中的方法create中的表现是一致的。</p>

<pre>
<code>var people = {
    name: &quot;Li Lei&quot;,
    friends: [&quot;Han Meimei&quot;, &quot;Jim Green&quot;]
}

var tom = Object.create(people);
tom.name = &quot;Tom&quot;;
tom.friends.push(&quot;Li Lei&quot;);

var lucy = Object.create(people);
lucy.name = &quot;Lucy&quot;;
lucy.friends.push(&quot;Tom&quot;);

alert(people.friends);//Han Meimei,Jim Green,Li Lei,Tom</code></pre>

<p>5、<strong>寄生式继承</strong>&nbsp;<br />
这是一种与原型式继承紧密相关的继承，与寄生构造模式和工厂模式类似。相当于是加强版的原型式继承。</p>

<pre>
<code>function create(obj){
    function F(){};
    F.prototype = obj;
    return new F();
}

function createParasitic(obj){
    var para = create(obj);
    para.sayHi = function(){
        alert(&quot;Hi&quot;);
    }
    return para;
}

var people = {
    name: &quot;Li Lei&quot;,
    friends: [&quot;Han Meimei&quot;, &quot;Jim Green&quot;]
}

var lily = createParasitic(people);
lily.sayHi();// Hi</code></pre>

<p>这种做法的结果是不仅得到了一个与另外一个对象相似的对象，而且在这个对象上添加了自己想要的方法。</p>

<p>6、<strong>寄生组合式继承</strong>&nbsp;<br />
前面我们说了组合继承，它是JavaScript中最常用的模式，而组合继承的不足就是调用了两次构造函数，结果是产生了冗余的属性或者方法。</p>

<pre>
<code>function SuperType(){
    this.name = &quot;Li Lei&quot;;
}
SuperType.prototype.show = function() {
    alert(&quot;Hello world&quot;);
};

function SubType(){
    SuperType.call(this); //第二次调用构造函数
}
SubType.prototype = new SuperType(); //第一次调用构造函数

var sub = new SubType();
alert(sub.name);//&quot;Li Lei&quot;
alert(sub.constructor == SuperType);//true
sub.show();//Hello world</code></pre>

<p>所谓的寄生组合式，指的是使用借用构造函数的方式来继承属性，使用原型链混合的方式来继承方法。它的主题思想就是不必为了子类型的原型而调用父类型的构造函数，我们所需要的只是父类型的原型对象的一个副本而已。其实现方式如下：</p>

<pre>
<code>function create(obj){
    function F(){};
    F.prototype = obj;
    return new F();
}

function inheritPrototype(subType, superType){
    var proto = create(superType.prototype);
    proto.constructor = subType;
    subType.prototype = proto;
}</code></pre>

<p>下面我们再来看一个使用寄生组合继承的例子。</p>

<pre>
<code>function create(obj){
    function F(){};
    F.prototype = obj;
    return new F();
}

function inheritPrototype(subType, superType){
    var proto = create(superType.prototype);
    proto.constructor = subType;
    subType.prototype = proto;
}

function SuperType(){
    this.name = &quot;Li Lei&quot;;
}
SuperType.prototype.show = function() {
    alert(&quot;Hello world&quot;);
};

function SubType(){
    SuperType.call(this); //第二次调用构造函数
}

inheritPrototype(SubType, SuperType);

var sub = new SubType();
alert(sub.name);//&quot;Li Lei&quot;
alert(sub.constructor == SubType);//true
sub.show();//Hello world</code></pre>

<p>至此，基本的继承方式已经说完，每一种方式都有利有弊，关键在于用在合适的地方，才能发挥无限的威力。</p>
</div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>

---
layout: question
title:  在JavaScript中定义枚举的首选语法是什么？
date:   2020-03-09T10:25:54.000Z
description: 在JavaScript中定义枚举的首选语法是什么？就像是：my.namespace.ColorEnum = {    RED   0,    GR...
img: 
author: 小宇宙前端
category: question
answer: 11
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中定义枚举的首选语法是什么？</font><font style="vertical-align: inherit;">就像是：</font></font></p>

<pre><code>my.namespace.ColorEnum = {<font></font>
    RED : 0,<font></font>
    GREEN : 1,<font></font>
    BLUE : 2<font></font>
}<font></font>
<font></font>
// later on<font></font>
<font></font>
if(currentColor == my.namespace.ColorEnum.RED) {<font></font>
   // whatever<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还是有更好的成语？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第207篇《在JavaScript中定义枚举的首选语法是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿神奇梅</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以做这样的事情</font></font></p>

<pre><code>    var Enum = (function(foo) {<font></font>
<font></font>
    var EnumItem = function(item){<font></font>
        if(typeof item == "string"){<font></font>
            this.name = item;<font></font>
        } else {<font></font>
            this.name = item.name;<font></font>
        }<font></font>
    }<font></font>
    EnumItem.prototype = new String("DEFAULT");<font></font>
    EnumItem.prototype.toString = function(){<font></font>
        return this.name;<font></font>
    }<font></font>
    EnumItem.prototype.equals = function(item){<font></font>
        if(typeof item == "string"){<font></font>
            return this.name == item;<font></font>
        } else {<font></font>
            return this == item &amp;&amp; this.name == item.name;<font></font>
        }<font></font>
    }<font></font>
<font></font>
    function Enum() {<font></font>
        this.add.apply(this, arguments);<font></font>
        Object.freeze(this);<font></font>
    }<font></font>
    Enum.prototype.add = function() {<font></font>
        for (var i in arguments) {<font></font>
            var enumItem = new EnumItem(arguments[i]);<font></font>
            this[enumItem.name] = enumItem;<font></font>
        }<font></font>
    };<font></font>
    Enum.prototype.toList = function() {<font></font>
        return Object.keys(this);<font></font>
    };<font></font>
    foo.Enum = Enum;<font></font>
    return Enum;<font></font>
})(this);<font></font>
var STATUS = new Enum("CLOSED","PENDING", { name : "CONFIRMED", ackd : true });<font></font>
var STATE = new Enum("CLOSED","PENDING","CONFIRMED",{ name : "STARTED"},{ name : "PROCESSING"});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如该库中所定义。
</font></font><a href="https://github.com/webmodule/foo/blob/master/foo.js#L217" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/webmodule/foo/blob/master/foo.js#L217</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完整示例
 </font></font><a href="https://gist.github.com/lnt/bb13a2fd63cdb8bce85fd62965a20026" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://gist.github.com/lnt/bb13a2fd63cdb8bce85fd62965a20026</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的解决方案：</font></font></strong></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建</font></font></h2>

<pre><code>var Status = Object.freeze({<font></font>
    "Connecting":0,<font></font>
    "Ready":1,<font></font>
    "Loading":2,<font></font>
    "Processing": 3<font></font>
});<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获得价值</font></font></h2>

<pre><code>console.log(Status.Ready) // 1
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取得金钥</font></font></h2>

<pre><code>console.log(Object.keys(Status)[Status.Ready]) // Ready
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是实现</font></font><a href="http://www.typescriptlang.org/Handbook#basic-types-enum" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TypeScript枚举</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的几种不同方法</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的方法是仅迭代一个对象，向该对象添加反转的键值对。</font><font style="vertical-align: inherit;">唯一的缺点是您必须手动设置每个成员的值。</font></font></p>

<pre><code>function _enum(list) {       <font></font>
  for (var key in list) {<font></font>
    list[list[key] = list[key]] = key;<font></font>
  }<font></font>
  return Object.freeze(list);<font></font>
}<font></font>
<font></font>
var Color = _enum({<font></font>
  Red: 0,<font></font>
  Green: 5,<font></font>
  Blue: 2<font></font>
});<font></font>
<font></font>
// Color → {0: "Red", 2: "Blue", 5: "Green", "Red": 0, "Green": 5, "Blue": 2}<font></font>
// Color.Red → 0<font></font>
// Color.Green → 5<font></font>
// Color.Blue → 2<font></font>
// Color[5] → Green<font></font>
// Color.Blue &gt; Color.Green → false<font></font>
</code></pre>

<p><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这是一个</font></font><a href="https://lodash.com/docs#mixin" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">lodash mixin</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，用于使用字符串创建枚举。</font><font style="vertical-align: inherit;">虽然此版本涉及更多点，但它会自动为您编号。</font><font style="vertical-align: inherit;">本示例中使用的所有lodash方法都具有常规的JavaScript等效项，因此您可以根据需要轻松地将它们切换出来。</font></font></p>

<pre><code>function enum() {<font></font>
    var key, val = -1, list = {};<font></font>
    _.reduce(_.toArray(arguments), function(result, kvp) {    <font></font>
        kvp = kvp.split("=");<font></font>
        key = _.trim(kvp[0]);<font></font>
        val = _.parseInt(kvp[1]) || ++val;            <font></font>
        result[result[val] = key] = val;<font></font>
        return result;<font></font>
    }, list);<font></font>
    return Object.freeze(list);<font></font>
}    <font></font>
<font></font>
// Add enum to lodash <font></font>
_.mixin({ "enum": enum });<font></font>
<font></font>
var Color = _.enum(<font></font>
    "Red",<font></font>
    "Green",<font></font>
    "Blue = 5",<font></font>
    "Yellow",<font></font>
    "Purple = 20",<font></font>
    "Gray"<font></font>
);<font></font>
<font></font>
// Color.Red → 0<font></font>
// Color.Green → 1<font></font>
// Color.Blue → 5<font></font>
// Color.Yellow → 6<font></font>
// Color.Purple → 20<font></font>
// Color.Gray → 21<font></font>
// Color[5] → Blue<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var ColorEnum = {<font></font>
    red: {},<font></font>
    green: {},<font></font>
    blue: {}<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您无需确保不会以这种方式将重复的数字分配给不同的枚举值。</font><font style="vertical-align: inherit;">实例化一个新对象并将其分配给所有枚举值。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">→笑里藏刀↓</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的</font></font><a href="http://documentcloud.github.com/backbone/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">骨干</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，你可以得到全面的枚举功能免费使用（通过ID，名称，自定义成员找到）</font></font><a href="http://documentcloud.github.com/backbone/#Collection"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Backbone.Collection</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>// enum instance members, optional<font></font>
var Color = Backbone.Model.extend({<font></font>
    print : function() {<font></font>
        console.log("I am " + this.get("name"))<font></font>
    }<font></font>
});<font></font>
<font></font>
// enum creation<font></font>
var Colors = new Backbone.Collection([<font></font>
    { id : 1, name : "Red", rgb : 0xFF0000},<font></font>
    { id : 2, name : "Green" , rgb : 0x00FF00},<font></font>
    { id : 3, name : "Blue" , rgb : 0x0000FF}<font></font>
], {<font></font>
    model : Color<font></font>
});<font></font>
<font></font>
// Expose members through public fields.<font></font>
Colors.each(function(color) {<font></font>
    Colors[color.get("name")] = color;<font></font>
});<font></font>
<font></font>
// using<font></font>
Colors.Red.print()<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这是一个古老的方法，但是此后通过TypeScript接口实现的方法是：</font></font></p>

<pre><code>var MyEnum;<font></font>
(function (MyEnum) {<font></font>
    MyEnum[MyEnum["Foo"] = 0] = "Foo";<font></font>
    MyEnum[MyEnum["FooBar"] = 2] = "FooBar";<font></font>
    MyEnum[MyEnum["Bar"] = 1] = "Bar";<font></font>
})(MyEnum|| (MyEnum= {}));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样</font></font><code>MyEnum.Bar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一来，</font></font><code>MyEnum[1]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论声明的顺序如何，</font><font style="vertical-align: inherit;">都可以查找</font><font style="vertical-align: inherit;">返回1以及</font><font style="vertical-align: inherit;">返回“ Bar”的这</font><font style="vertical-align: inherit;">两者</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三LEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://babeljs.io/docs/plugins/transform-class-properties/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES7中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以依靠静态属性进行优雅的ENUM：</font></font></p>

<pre><code>class ColorEnum  {<font></font>
    static RED = 0 ;<font></font>
    static GREEN = 1;<font></font>
    static BLUE = 2;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后 </font></font></p>

<pre><code>if (currentColor === ColorEnum.GREEN ) {/*-- coding --*/}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点（使用类而不是文字对象）是拥有父类，</font></font><code>Enum</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后您所有的Enums都将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该类。  </font></font></p>

<pre><code> class ColorEnum  extends Enum {/*....*/}
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇启人</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这并不是一个很好的答案，但是我个人认为这很好</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">话虽这么说，因为值无关紧要（您使用过0、1、2），所以如果您想输出当前值，我将使用有意义的字符串。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在大多数现代浏览器中，都有一种</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">符号</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原始数据类型可用于创建枚举。</font><font style="vertical-align: inherit;">这将确保枚举的类型安全，因为JavaScript保证每个符号值都是唯一的，即</font></font><code>Symbol() != Symbol()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>const COLOR = Object.freeze({RED: Symbol(), BLUE: Symbol()});
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了简化调试，可以在枚举值中添加描述：</font></font></p>

<pre><code>const COLOR = Object.freeze({RED: Symbol("RED"), BLUE: Symbol("BLUE")});
</code></pre>

<p><a href="http://plnkr.co/edit/rGjzZlUF4HPdllaTQ3OW?p=preview" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">柱塞演示</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://github.com/zhaber/symbol-enum" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GitHub上，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以找到一个包装器，以简化初始化枚举所需的代码：</font></font></p>

<pre><code>const color = new Enum("RED", "BLUE")<font></font>
<font></font>
color.RED.toString() // Symbol(RED)<font></font>
color.getName(color.RED) // RED<font></font>
color.size // 2<font></font>
color.values() // Symbol(RED), Symbol(BLUE)<font></font>
color.toString() // RED,BLUE<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">底线：不能。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以伪造它，但不会获得类型安全性。</font><font style="vertical-align: inherit;">通常，这是通过创建映射到整数值的字符串值的简单字典来完成的。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>var DaysEnum = {"monday":1, "tuesday":2, "wednesday":3, ...}<font></font>
<font></font>
Document.Write("Enumerant: " + DaysEnum.tuesday);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种方法有问题吗？</font><font style="vertical-align: inherit;">您可能会意外地重新定义您的枚举数，或者意外地具有重复的枚举数值。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>DaysEnum.monday = 4; // whoops, monday is now thursday, too
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong>  </p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么Artur Czajka的Object.freeze呢？</font><font style="vertical-align: inherit;">这样是否可以防止您将星期一设置为星期四？</font><font style="vertical-align: inherit;">– Fry Quad</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绝对</font></font><a href="http://msdn.microsoft.com/en-us/library/windows/apps/ff806186%28v=vs.94%29.aspx" rel="noreferrer"><code>Object.freeze</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以完全解决我抱怨的问题。</font><font style="vertical-align: inherit;">我想提醒大家，当我写上面的文章时，</font></font><code>Object.freeze</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上并不存在。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在....现在它提供了一些</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有趣的可能性。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑2</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
这是一个用于创建枚举的很好的库。</font></font></p>

<p><a href="http://www.2ality.com/2011/10/enums.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.2ality.com/2011/10/enums.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管它可能不适合枚举的所有有效用法，但它的路途很长。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从1.8.5开始，可以密封和冻结对象，因此将以上定义为：</font></font></p>

<pre><code>const DaysEnum = Object.freeze({"monday":1, "tuesday":2, "wednesday":3, ...})
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>const DaysEnum = {"monday":1, "tuesday":2, "wednesday":3, ...}<font></font>
Object.freeze(DaysEnum)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和瞧！</font><font style="vertical-align: inherit;">JS枚举。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这不会阻止您为变量分配不需要的值，这通常是枚举的主要目标：</font></font></p>

<pre><code>let day = DaysEnum.tuesday<font></font>
day = 298832342 // goes through without any errors<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保类型安全性（使用枚举或其他方式）的程度更高的一种方法是使用诸如</font></font><a href="https://www.typescriptlang.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TypeScript</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://flow.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Flow之</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类的工具</font><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/freeze" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资源</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不需要引号，但为了保持一致性，我保留了它们。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>

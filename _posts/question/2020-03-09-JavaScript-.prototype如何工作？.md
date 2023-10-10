---
layout: question
title:  JavaScript .prototype如何工作？
date:   2020-03-09T10:28:43.000Z
description: 我不喜欢动态编程语言，但是我写了相当一部分JavaScript代码。我从来没有真正了解过这种基于原型的编程，有人知道它是如何工作的吗？var obj ...
img: 
author: YOC43564555
category: question
answer: 13
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不喜欢动态编程语言，但是我写了相当一部分JavaScript代码。</font><font style="vertical-align: inherit;">我从来没有真正了解过这种基于原型的编程，有人知道它是如何工作的吗？</font></font></p>

<pre><code>var obj = new Object();<font></font>
obj.prototype.test = function() { alert('Hello?'); };<font></font>
var obj2 = new obj();<font></font>
obj2.test();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我记得很久以前与人们进行过多次讨论（我不确定自己在做什么），但是据我了解，这里没有一个课堂的概念。</font><font style="vertical-align: inherit;">这只是一个对象，这些对象的实例是原始对象的副本，对吧？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，此“ .prototype”属性在JavaScript中的确切目的是什么？</font><font style="vertical-align: inherit;">它与实例化对象有何关系？</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：正确的方法</font></font></h3>

<pre><code>var obj = new Object(); // not a functional object<font></font>
obj.prototype.test = function() { alert('Hello?'); }; // this is wrong!<font></font>
<font></font>
function MyObject() {} // a first class functional object<font></font>
MyObject.prototype.test = function() { alert('OK'); } // OK<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些</font></font><a href="http://ejohn.org/apps/learn/#64" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">幻灯片也</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实起到了很大作用。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第209篇《JavaScript .prototype如何工作？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是您已经有一个对象，</font></font><code>Object.new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但使用构造函数语法时仍然没有对象。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要的是要理解，对象的原型（可通过</font></font><code>Object.getPrototypeOf(obj)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或通过不推荐使用的</font></font><code>__proto__</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性获得）与</font></font><code>prototype</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构造函数</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">之间存在区别</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">前者是每个实例的属性，后者是构造函数的属性。</font><font style="vertical-align: inherit;">也就是说，与</font></font><code>Object.getPrototypeOf(new Foobar())</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指代相同的对象</font></font><code>Foobar.prototype</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Stafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个显示</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">__proto__</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原型</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构造函数</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关系的方案：
</font></font><a href="https://i.stack.imgur.com/uy5ce.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/uy5ce.png" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原型</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新的对象</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过克隆现有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，实际上，当我们考虑原型时，可以真正地考虑</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">克隆或</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复制某些内容而不是进行组合。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Stafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在理解这类内容时，我总是喜欢类比。</font><font style="vertical-align: inherit;">在我看来，与原型低音继承相比，“原型继承”相当令人困惑，尽管原型是更简单的范例。</font><font style="vertical-align: inherit;">实际上，对于原型而言，确实没有继承，因此名称本身就具有误导性，它更像是一种“委托”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想象一下....</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您正在读高中，正在上课，今天有一个测验，但是您没有笔来填写答案。</font><font style="vertical-align: inherit;">h！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您正坐在可能有笔的朋友Finnius旁边。</font><font style="vertical-align: inherit;">您问，他环顾四周办公桌没有成功，但他没有说“我没有笔”，而是一个好朋友，他与其他朋友Derp核对了他是否有笔。</font><font style="vertical-align: inherit;">Derp确实有一支备用笔，并将其传递回Finnius，后者将其交给您以完成测验。</font><font style="vertical-align: inherit;">Derp已将钢笔委托给Finnius，后者已将钢笔委托给您使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里重要的是，Derp不会把笔给您，因为您</font><font style="vertical-align: inherit;">与他</font><font style="vertical-align: inherit;">没有直接</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关系</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是原型工作方式的简化示例，其中在数据树中搜索您要寻找的东西。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用更好的图片</font><font style="vertical-align: inherit;">解释</font></font><a href="https://github.com/rus0000/jsinheritance" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于JavaScript原型的继承的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种尝试</font></font></p>

<p><a href="https://github.com/rus0000/jsinheritance" rel="noreferrer"><img src="https://i.stack.imgur.com/6gEKe.png" alt="简单对象继承"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我告诉您我对原型的理解。</font><font style="vertical-align: inherit;">我不会在这里将继承与其他语言进行比较。</font><font style="vertical-align: inherit;">我希望人们不再比较语言，而只是理解语言本身。</font><font style="vertical-align: inherit;">理解原型和原型继承非常简单，下面我将向您展示。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原型就像模型一样，您可以基于该模型创建产品。</font><font style="vertical-align: inherit;">要理解的关键点是，当您使用另一个对象作为原型创建对象时，原型与产品之间的联系是永恒的。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>var model = {x:2};<font></font>
var product = Object.create(model);<font></font>
model.y = 5;<font></font>
product.y<font></font>
=&gt;5<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个对象都包含一个称为[[prototype]]的内部属性，可以通过该</font></font><code>Object.getPrototypeOf()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数</font><font style="vertical-align: inherit;">进行访问</font><font style="vertical-align: inherit;">。</font></font><code>Object.create(model)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个新对象并将其[[prototype]]属性设置为对象</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模型</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，当您这样做时</font></font><code>Object.getPrototypeOf(product)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，将获得对象</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模型</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产品</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中的</font><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">按以下方式处理：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当访问属性以仅读取其值时，将在范围链中查找该属性。</font><font style="vertical-align: inherit;">对变量的搜索从</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产品</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开始</font><font style="vertical-align: inherit;">直至其原型。</font><font style="vertical-align: inherit;">如果在搜索中找到这样的变量，则搜索将在此处停止，并返回值。</font><font style="vertical-align: inherit;">如果在范围链中找不到此类变量，则返回undefined。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">写入（更改）属性后，该属性总是写在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产品</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象上。</font><font style="vertical-align: inherit;">如果</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产品</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尚不具有此类属性，则将隐式创建和编写该产品。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用原型属性进行的对象链接称为原型继承。</font><font style="vertical-align: inherit;">那里很简单，同意吗？</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小阿飞</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现</font></font><code>obj_n.prop_X</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在引用</font><font style="vertical-align: inherit;">“原型链”作为递归约定时会很有帮助</font><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>obj_n.prop_X</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不存在，检查</font></font><code>obj_n+1.prop_X</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪里</font></font><code>obj_n+1 = obj_n.[[prototype]]</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>prop_X</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">终于在第k个原型对象中找到，则</font></font></p>

<p><code>obj_1.prop_X = obj_1.[[prototype]].[[prototype]]..(k-times)..[[prototype]].prop_X</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在此处按其属性找到Javascript对象之间的关系图：</font></font></p>

<p> <img src="https://i.stack.imgur.com/2tGyY.jpg" alt="js对象图"> </p>

<p><a href="http://jsobjects.org" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsobjects.org</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村AL</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当构造函数创建对象时，该对象隐式引用构造函数的“ prototype”属性，以解决属性引用的问题。</font><font style="vertical-align: inherit;">构造表达式的“ prototype”属性可以由程序表达式的builder.prototype引用，添加到对象原型的属性可以通过继承由共享原型的所有对象共享。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><a href="https://www.youtube.com/watch?v=PMfcsYzj-9M"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">《面向对象的JavaScript权威指南》</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -简短而清晰的约30分钟的视频解释所提出的问题（原型继承主题从</font></font><a href="https://youtu.be/PMfcsYzj-9M?t=344"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5:45</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开始</font><font style="vertical-align: inherit;">，尽管我更喜欢听整个视频）。</font><font style="vertical-align: inherit;">该视频的作者还创建了JavaScript对象可视化器网站</font></font><a href="http://www.objectplayground.com/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.objectplayground.com/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><a href="https://i.stack.imgur.com/Vf4qR.jpg"><img src="https://i.stack.imgur.com/Vf4qR.jpg" alt="在此处输入图片说明"></a>
<a href="https://i.stack.imgur.com/xcRpT.jpg"><img src="https://i.stack.imgur.com/xcRpT.jpg" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyEvaL</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ .prototype”属性的确切目的是什么？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标准类的接口变得可扩展。</font><font style="vertical-align: inherit;">例如，您使用的是</font></font><code>Array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类，还需要为所有数组对象添加一个自定义序列化程序。</font><font style="vertical-align: inherit;">您会花时间编码一个子类，还是使用合成或...原型属性通过让用户控制可用于类的成员/方法的确切集合来解决此问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将原型视为额外的vtable指针。</font><font style="vertical-align: inherit;">当原始类中缺少某些成员时，将在运行时查找原型。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript在通常意义上没有继承，但是它具有原型链。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原型链</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在对象中找不到对象的成员，则会在原型链中寻找它。</font><font style="vertical-align: inherit;">链由其他对象组成。</font><font style="vertical-align: inherit;">可以使用</font></font><code>__proto__</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量</font><font style="vertical-align: inherit;">访问给定实例的原型</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">每个对象都有一个对象，因为javascript中的类和实例之间没有区别。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向原型添加功能/变量的优点是，它只能在内存中一次，而不是每个实例一次。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对于继承也很有用，因为原型链可以包含许多其他对象。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小JinJin蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读此主题后，我对JavaScript原型链感到困惑，然后我发现了这些图表 </font></font></p>

<p><a href="http://iwiki.readthedocs.org/en/latest/javascript/js_core.html#inheritance" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://iwiki.readthedocs.org/en/latest/javascript/js_core.html#inheritance</font></font></a>
<img src="https://i.stack.imgur.com/rcGmc.png" alt="* [[protytype]] *和功能对象的<code> prototype </ code>属性"></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个清晰的图表，以按原型链显示JavaScript继承</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和 </font></font></p>

<p><a href="http://www.javascriptbank.com/javascript/article/JavaScript_Classical_Inheritance/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.javascriptbank.com/javascript/article/JavaScript_Classical_Inheritance/</font></font></a></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个包含一个示例代码和一些漂亮的图表。</font></font></em></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原型链最终归结为Object.prototype。 </font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过将子类的原型设置为与父类的对象相等，每次都可以在技术上根据需要扩展原型链。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对理解JavaScript原型链也有帮助。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

---
layout: question
title:  在JavaScript中检查字符串相等性的正确方法是什么？
date:   2020-03-10T04:23:42.000Z
description: 在JavaScript中检查字符串之间是否相等的正确方法是什么？...
img: 
author: TomGO小小
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中检查字符串之间是否相等的正确方法是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第475篇《在JavaScript中检查字符串相等性的正确方法是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一L</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在测试过程中提出了一个替代解决方案。</font><font style="vertical-align: inherit;">您可以在字符串原型上使用function。</font></font></p>

<pre><code>String.prototype.betwenStr = function(one){<font></font>
<font></font>
return JSON.stringify(new String(this)) === JSON.stringify(new String(one));<font></font>
<font></font>
}<font></font>
<font></font>
<font></font>
 //call it<font></font>
 "hello world".betweenStr("hello world"); //returns boolean <font></font>
 //value<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在chrome浏览器中正常工作</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端LEYLEY</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的方法是使用三元运算符，如下所示：</font></font></p>

<pre><code> "was" = "was" ? true : false
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果要比较的字符串在数组中，则将使用es6过滤器</font></font></p>

<pre><code>let stringArray  = [men, boys, girls, sit, can, gotten]<font></font>
stringArray.filter(I=&gt; I === boys ? <font></font>
stringArray.pop(indexOf(I)) : null)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面将检查您的stringArray以及从数组中匹配它的任何字符串，在本例中，我们选择了“ boys”</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam小哥理查德</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑到这两个字符串可能是非常大的，有2种主要的方法</font></font><code>bitwise search</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>localeCompare</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我推荐这个功能</font></font></p>

<pre><code>function compareLargeStrings(a,b){<font></font>
    if (a.length !== b.length) {<font></font>
         return false;<font></font>
    }<font></font>
    return a.localeCompare(b) === 0;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro伽罗</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>Objects</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用</font></font><code>JSON.stringyfy()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">技巧</font><font style="vertical-align: inherit;">检查</font><font style="vertical-align: inherit;">字符串</font><font style="vertical-align: inherit;">。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var me = new String("me");<font></font>
var you = new String("me");<font></font>
var isEquel = JSON.stringify(me) === JSON.stringify(you);<font></font>
console.log(isEquel);</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin小卤蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅添加一个答案：如果所有这些方法都返回false，即使字符串看起来相等，一个字符串的左侧和/或右侧也可能存在空格。</font><font style="vertical-align: inherit;">因此，</font></font><code>.trim()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在比较之前</font><font style="vertical-align: inherit;">，只需将a </font><font style="vertical-align: inherit;">放在字符串的末尾：</font></font></p>

<pre><code>if(s1.trim() === s2.trim())<font></font>
{<font></font>
    // your code<font></font>
}<font></font>
</code></pre>

<p>I have lost hours trying to figure out what is wrong.
Hope this will help to someone!</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐十三</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导致我提出这个问题的是</font></font><code>padding</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>white-spaces</code>  </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查我的情况</font></font></p>

<pre><code> if (title === "LastName")<font></font>
      doSomething();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标题是 </font></font><code>"           LastName"</code></p>

<p><a href="https://i.stack.imgur.com/XCo3c.png" rel="noreferrer"><img src="https://i.stack.imgur.com/XCo3c.png" alt="在此处输入图片说明"></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以也许你必须使用这样的</font></font><code>trim</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能</font></font></p>
</blockquote>

<pre><code>var title = $(this).text().trim();
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小卤蛋Pro</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非您真的知道强制的工作方式，否则应避免</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用身份运算符</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是您应该</font></font><a href="https://medium.com/@ludico8/identity-vs-equality-battle-of-understanding-vs-758d396e922#.hhg396ey9" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读此书以了解其工作原理</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以让语言为您执行某种类型的强制转换，例如：</font></font></p>

<pre><code>"1" == 1 // true<font></font>
"0" == false // true<font></font>
[] == false // true<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如道格拉斯·克罗克福德（Douglas Crockford）在他的书中所说： </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">始终最好使用身份运算符。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony樱番长</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您知道它们是字符串，则无需检查类型。</font></font></p>

<pre><code>"a" == "b"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，请注意，字符串对象将不相等。</font></font></p>

<pre><code>new String("a") == new String("a")
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将返回false。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用valueOf（）方法将其转换为String对象的基元，</font></font></p>

<pre><code>new String("a").valueOf() == new String("a").valueOf()
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将返回true</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

---
layout: question
title:  检查元素是否包含JavaScript中的类？
date:   2020-03-12T06:59:23.000Z
description: 使用普通的JavaScript（不是jQuery），是否可以检查元素是否包含类？目前，我正在这样做：var test = document.g...
img: 
author: 路易Pro
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用普通的JavaScript（不是jQuery），是否可以检查元素是否</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，我正在这样做：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var test = document.getElementById("test");<font></font>
var testClass = test.className;<font></font>
<font></font>
switch (testClass) {<font></font>
  case "class1":<font></font>
    test.innerHTML = "I have class1";<font></font>
    break;<font></font>
  case "class2":<font></font>
    test.innerHTML = "I have class2";<font></font>
    break;<font></font>
  case "class3":<font></font>
    test.innerHTML = "I have class3";<font></font>
    break;<font></font>
  case "class4":<font></font>
    test.innerHTML = "I have class4";<font></font>
    break;<font></font>
  default:<font></font>
    test.innerHTML = "";<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div id="test" class="class1"&gt;&lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是，如果我将HTML更改为此...</font></font></p>

<pre><code>&lt;div id="test" class="class1 class5"&gt;&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...不再存在完全匹配的内容，因此我得到的默认输出为none（</font></font><code>""</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">但我还是想输出为</font></font><code>I have class1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了</font></font><code>.class1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1031篇《检查元素是否包含JavaScript中的类？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony樱番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为完美的解决方案将是这样</font></font></p>

<pre><code>if ($(this).hasClass("your_Class")) <font></font>
    alert("positive");            <font></font>
else              <font></font>
    alert("Negative");<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅此Codepen链接，以使用vanilla JavaScript〜轻松快捷地检查元素是否具有特定类的方式！</font></font></p>

<p><a href="https://codepen.io/JefMari/pen/NxLaed" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">hasClass（香草JS）</font></font></a> </p>

<pre><code>function hasClass(element, cls) {<font></font>
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') &gt; -1;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将使用Poly填充classList功能并使用新语法。</font><font style="vertical-align: inherit;">这样，较新的浏览器将使用新的实现（速度要快得多），只有旧的浏览器才能从代码中获得性能上的优势。</font></font></p>

<p><a href="https://github.com/remy/polyfills/blob/master/classList.js" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/remy/polyfills/blob/master/classList.js</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一番长小小</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><code>className</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是一个字符串，因此您可以使用常规的</font></font><a href="http://www.quirksmode.org/js/strings.html#indexof" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">indexOf</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数查看类列表是否包含另一个字符串。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个不区分大小写的简单解决方案：</font></font></p>

<pre><code>function hasClass(element, classNameToTestFor) {<font></font>
    var classNames = element.className.split(' ');<font></font>
    for (var i = 0; i &lt; classNames.length; i++) {<font></font>
        if (classNames[i].toLowerCase() == classNameToTestFor.toLowerCase()) {<font></font>
            return true;<font></font>
        }<font></font>
    }<font></font>
    return false;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝猪猪小卤蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简化的单线：</font></font><sup><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1</font></font></b></sup></p>

<pre><code>function hasClassName(classname,id) {<font></font>
 return  String ( ( document.getElementById(id)||{} ) .className )<font></font>
         .split(/\s/)<font></font>
         .indexOf(classname) &gt;= 0;<font></font>
}<font></font>
</code></pre>

<p><sup><b><font style="vertical-align: inherit;"></font></b></sup> <code>indexOf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE（当然）不支持数组</font><sup><b><font style="vertical-align: inherit;"> 1</font></b></sup><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在网上可以找到很多猴子补丁。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim老丝梅</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于他想使用switch（），我很惊讶还没有人提出这一点：</font></font></p>

<pre><code>var test = document.getElementById("test");<font></font>
var testClasses = test.className.split(" ");<font></font>
test.innerHTML = "";<font></font>
for(var i=0; i&lt;testClasses.length; i++) {<font></font>
    switch(testClasses[i]) {<font></font>
        case "class1": test.innerHTML += "I have class1&lt;br/&gt;"; break;<font></font>
        case "class2": test.innerHTML += "I have class2&lt;br/&gt;"; break;<font></font>
        case "class3": test.innerHTML += "I have class3&lt;br/&gt;"; break;<font></font>
        case "class4": test.innerHTML += "I have class4&lt;br/&gt;"; break;<font></font>
        default: test.innerHTML += "(unknown class:" + testClasses[i] + ")&lt;br/&gt;";<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种简单有效的解决方案是尝试</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.contains</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font></font></p>

<pre><code>test.classList.contains(testClass);
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>

---
layout: question
title:  如何在JavaScript中检查空/未定义/空字符串？
date:   2020-03-09T08:02:55.000Z
description: 我看到了这个问题，但是没有看到JavaScript特定的示例。string.EmptyJavaScript中是否有一个简单的可用工具，还是仅用于检查的情况...
img: 
author: 梅猿
category: question
answer: 23
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看到了</font></font><a href="https://stackoverflow.com/questions/10230/checking-for-string-contents-string-length-vs-empty-string"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是没有看到JavaScript特定的示例。</font></font><code>string.Empty</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中</font><font style="vertical-align: inherit;">是否有一个简单的</font><font style="vertical-align: inherit;">可用工具，还是仅用于检查的情况</font></font><code>""</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在这里看不到好的答案（至少不是适合我的答案）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我决定回答自己：</font></font></p>

<p><code>value === undefined || value === null || value === "";</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要开始检查它是​​否未定义。</font><font style="vertical-align: inherit;">否则，您的方法可能会爆炸，然后可以检查它是否等于null或等于空字符串。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你不能拥有！</font><font style="vertical-align: inherit;">或仅</font></font><code>if(value)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您选中</font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该选项后才会给出错误答案（0为错误）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">话虽如此，将其包装为以下方法：</font></font></p>

<p><code>public static isEmpty(value: any): boolean {
    return value === undefined || value === null || value === "";
}</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS .：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不需要检查typeof</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为它甚至在进入方法之前都会爆炸并抛出。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我结合使用，最快的检查是第一位的。</font></font></p>

<pre><code>function isBlank(pString) {<font></font>
    if (!pString || pString.length == 0) {<font></font>
        return true;<font></font>
    }<font></font>
    // Checks for a non-white space character<font></font>
    // which I think [citation needed] is faster<font></font>
    // than removing all the whitespace and checking<font></font>
    // against an empty string<font></font>
    return !/[^\s]+/.test(pString);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Pro梅</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">忽略空格字符串，可以使用它来检查null，空和未定义：</font></font></p>

<pre><code>var obj = {};<font></font>
(!!obj.str) // Returns false<font></font>
<font></font>
obj.str = "";<font></font>
(!!obj.str) // Returns false<font></font>
<font></font>
obj.str = null;<font></font>
(!!obj.str) // Returns false<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简洁明了，它适用于未定义的属性，尽管它不是最易读的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要检查它是否完全是一个空字符串：</font></font></p>

<pre><code>if(val==="")...
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要检查它是一个空字符串还是一个无值的逻辑等效项（null，undefined，0，NaN，false，...）：</font></font></p>

<pre><code>if(!val)...
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一L</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个：</font></font></p>

<pre><code>export const isEmpty = string =&gt; (!string || !string.length);
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个</font></font></p>

<pre><code>str.value.length == 0
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不仅需要检测空字符串，还需要检测空白字符串，我将在Goral的答案中添加：</font></font></p>

<pre><code>function isEmpty(s){<font></font>
    return !s.length;    <font></font>
}<font></font>
<font></font>
function isBlank(s){<font></font>
    return isEmpty(s.trim());    <font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，还没有像string.empty这样的直接方法来检查字符串是否为空。</font><font style="vertical-align: inherit;">但是在您的代码中，您可以使用包装检查是否为空字符串，例如：</font></font></p>

<pre><code>// considering the variable in which your string is saved is named str.<font></font>
<font></font>
if (str &amp;&amp; str.length&gt;0) { <font></font>
<font></font>
  // Your code here which you want to run if the string is not empty.<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此方法，您还可以确保字符串也未定义或为null。</font><font style="vertical-align: inherit;">请记住，未定义，null和empty是三件事。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有这些答案都很好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我不能确定变量是一个字符串，不只包含空格（这对我很重要），并且可以包含“ 0”（字符串）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的版本：</font></font></p>

<pre><code>function empty(str){<font></font>
    return !str || !/[^\s]+/.test(str);<font></font>
}<font></font>
<font></font>
empty(null); // true<font></font>
empty(0); // true<font></font>
empty(7); // false<font></font>
empty(""); // true<font></font>
empty("0"); // false<font></font>
empty("  "); // true<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"></font><a href="http://jsfiddle.net/YZfGs/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsfiddle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天猿理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我没有注意到一个考虑到字符串中可能存在空字符的答案。</font><font style="vertical-align: inherit;">例如，如果我们有一个空字符串：</font></font></p>

<pre><code>var y = "\0"; // an empty string, but has a null character<font></font>
(y === "") // false, testing against an empty string does not work<font></font>
(y.length === 0) // false<font></font>
(y) // true, this is also not expected<font></font>
(y.match(/^[\s]*$/)) // false, again not wanted<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要测试其无效性，可以执行以下操作：</font></font></p>

<pre><code>String.prototype.isNull = function(){ <font></font>
  return Boolean(this.match(/^[\0]*$/)); <font></font>
}<font></font>
...<font></font>
"\0".isNull() // true<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它适用于空字符串和空字符串，并且所有字符串均可访问。</font><font style="vertical-align: inherit;">另外，它可以扩展为包含其他JavaScript空字符或空格字符（即，不间断空格，字节顺序标记，行/段落分隔符等）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaPro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，如果您将填充空格的字符串视为“空”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用以下正则表达式对其进行测试：</font></font></p>

<pre><code>!/\S/.test(string); // Returns true if blank.
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通常用这样的东西</font></font></p>

<pre><code>if (!str.length) {<font></font>
    // Do something<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不会太担心最</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有效的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font><font style="vertical-align: inherit;">使用最清楚您意图的内容。</font><font style="vertical-align: inherit;">对我来说通常是</font></font><code>strVar == ""</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="https://stackoverflow.com/users/20310/constantin"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">康斯坦丁（Constantin）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的评论</font><font style="vertical-align: inherit;">，如果strVar最终可以包含一个整数0值，那么这确实是意图明确的情况之一。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用正则表达式：</font></font></p>

<pre><code>if((/^\s*$/).test(str)) { }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查是否为空或用空格填充的字符串。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC40565407</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查是否</font></font><code>var a;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存在</font></font></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修剪</font></font><code>false spaces</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值，然后测试</font></font><code>emptiness</code></p>

<pre><code>if ((a)&amp;&amp;(a.trim()!=''))<font></font>
{<font></font>
  // if variable a is not empty do this <font></font>
}<font></font>
</code></pre></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid飞羽</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试：</font></font></p>

<pre><code>if (str &amp;&amp; str.trim().length) {  <font></font>
    //...<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony西门古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var s; // undefined<font></font>
var s = ""; // ""<font></font>
s.length // 0<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中没有任何内容代表空字符串。</font><font style="vertical-align: inherit;">对照</font></font><code>length</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（如果您知道var永远是字串）或对照</font></font><code>""</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">仲羽蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://lodash.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">lodash</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：_.isEmpty（value）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它涵盖了很多类似的情况下</font></font><code>{}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>''</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但它总是返回</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>Number</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript的基本数据类型</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一样</font></font><code>_.isEmpty(10)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者</font></font><code>_.isEmpty(Number.MAX_VALUE)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者的回报</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三SamJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用：</font></font></p>

<pre class="lang-js prettyprint-override"><code>function empty(e) {<font></font>
  switch (e) {<font></font>
    case "":<font></font>
    case 0:<font></font>
    case "0":<font></font>
    case null:<font></font>
    case false:<font></font>
    case typeof(e) == "undefined":<font></font>
      return true;<font></font>
    default:<font></font>
      return false;<font></font>
  }<font></font>
}<font></font>
<font></font>
empty(null) // true<font></font>
empty(0) // true<font></font>
empty(7) // false<font></font>
empty("") // true<font></font>
empty((function() {<font></font>
    return ""<font></font>
})) // false<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋LEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要确保字符串不只是一堆空白（我假设这是用于表单验证），则需要对这些空格进行替换。</font></font></p>

<pre><code>if(str.replace(/\s/g,"") == ""){<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以得到的最接近的结果</font></font><code>str.Empty</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（以str为字符串为前提）是：</font></font></p>

<pre><code>if (!str.length) { ...
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">先前的所有答案都不错，但这会更好。</font><font style="vertical-align: inherit;">使用</font></font><code>!!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）运算符。</font></font></p>

<pre class="lang-js prettyprint-override"><code>if(!!str){<font></font>
    // Some code here<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或使用类型转换：</font></font></p>

<pre class="lang-js prettyprint-override"><code>if(Boolean(str)){<font></font>
    // Code here<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者执行相同的功能。</font><font style="vertical-align: inherit;">将变量类型转换为布尔值，其中</font></font><code>str</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是变量。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
它返回</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了</font></font><code>null,undefined,0,000,"",false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
返回</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符串“ 0”和空格“”。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin伽罗小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了检查字符串是否为空，空或未定义，我使用：</font></font></p>

<pre><code>function isEmpty(str) {<font></font>
    return (!str || 0 === str.length);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了检查字符串是否为空，空或未定义，我使用：</font></font></p>

<pre><code>function isBlank(str) {<font></font>
    return (!str || /^\s*$/.test(str));<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于检查字符串是否为空白或仅包含空格：</font></font></p>

<pre><code>String.prototype.isEmpty = function() {<font></font>
    return (this.length === 0 || !this.trim());<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

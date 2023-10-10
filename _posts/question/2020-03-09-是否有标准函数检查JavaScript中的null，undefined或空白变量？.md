---
layout: question
title:  是否有标准函数检查JavaScript中的null，undefined或空白变量？
date:   2020-03-09T10:20:08.000Z
description: 是否有一个通用的JavaScript函数检查一个变量的值，并确保它不undefined还是null？我有以下代码，但不确定是否涵盖所有情况：funct...
img: 
author: GO西门
category: question
answer: 16
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有一个通用的JavaScript函数检查一个变量的值，并确保它不</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还是</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">我有以下代码，但不确定是否涵盖所有情况：</font></font></p>

<pre><code>function isEmpty(val){<font></font>
    return (val === undefined || val == null || val.length &lt;= 0) ? true : false;<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管很老套，但忘记的是他们应该包装自己的代码块，然后捕获错误，然后进行测试...</font></font></p>

<pre><code>function checkup( t ){<font></font>
  try{<font></font>
    for(p in t){<font></font>
      if( p.hasOwnProperty( t ) ){<font></font>
        return true;<font></font>
      }<font></font>
    }<font></font>
    return false;<font></font>
  }catch(e){<font></font>
    console.log("ERROR : "+e);<font></font>
    return e;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您真的不必事先检查潜在的问题，只需抓住它，然后按需要进行处理即可。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为使用？</font><font style="vertical-align: inherit;">操作员稍微干净一点。</font></font></p>

<pre><code>var ? function_if_exists() : function_if_doesnt_exist();
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var myNewValue = myObject &amp;&amp; myObject.child &amp;&amp; myObject.child.myValue;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将永远不会引发错误。</font><font style="vertical-align: inherit;">如果</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">myObject</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">child</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">myValue</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为null，则</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">myNewValue</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将为null。</font><font style="vertical-align: inherit;">没有错误将被抛出</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYPro达蒙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>function isEmpty(val){<font></font>
    return !val;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是此解决方案是过度设计的，如果您以后不想为业务模型需求修改功能，那么直接在代码中使用它更干净：</font></font></p>

<pre><code>if(!val)...
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试不同的逻辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以使用下面的代码检查所有四（4）条条件以进行验证，例如not null，not blank，not undefined和not zero，仅在javascript和jquery中使用此代码（！（！（variable）））。</font></font></p>

<pre><code>function myFunction() {<font></font>
    var data;  //The Values can be like as null, blank, undefined, zero you can test<font></font>
<font></font>
    if(!(!(data)))<font></font>
    {<font></font>
        alert("data "+data);<font></font>
    } <font></font>
    else <font></font>
    {<font></font>
        alert("data is "+data);<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能是有用的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组中的所有值都表示您想要的内容（空，未定义或其他内容），然后在其中搜索所需内容。</font></font></p>

<pre><code>var variablesWhatILookFor = [null, undefined, ''];<font></font>
variablesWhatILookFor.indexOf(document.DocumentNumberLabel) &gt; -1<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋LEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果尚未声明该变量，则将无法使用函数测试未定义变量，因为会出现错误。 </font></font></p>

<pre><code>if (foo) {}<font></font>
function (bar) {}(foo)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果尚未声明foo，则两者都将产生错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要测试是否已声明变量，可以使用</font></font></p>

<pre><code>typeof foo != "undefined"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要测试是否已声明foo并且它具有一个值，则可以使用</font></font></p>

<pre><code>if (typeof foo != "undefined" &amp;&amp; foo) {<font></font>
    //code here<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenMandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的-如果value为null，undefined等或空白（即仅包含空格），则返回true：</font></font></p>

<pre><code>function stringIsEmpty(value) {<font></font>
<font></font>
    return value ? value.trim().length == 0 : true;<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">用户7049302300</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你有点过分了。</font><font style="vertical-align: inherit;">要检查变量是否没有值，只需要检查undefined和null。</font></font></p>

<pre><code>function isEmpty(value){<font></font>
    return (typeof value === "undefined" || value === null);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设</font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>""</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和对象（甚至是空对象和数组）都是有效的“值”。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空字符串（“”），null，undefined，false以及数字0和NaN。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说，如果字符串为空，</font></font><code>var name = ""</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则</font></font><code>console.log(!name)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>function isEmpty(val){<font></font>
  return !val;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">val</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空，null，未定义，false，数字0或NaN，则</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此函数将返回true </font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据您的问题域，您可以只使用like </font></font><code>!val</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>!!val</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此条件检查</font></font></p>

<pre><code>if (!!foo) {<font></font>
    //foo is defined<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是你所需要的全部。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您更喜欢纯JavaScript，请尝试以下操作：</font></font></p>

<pre><code>  /**<font></font>
   * Checks if `value` is empty. Arrays, strings, or `arguments` objects with a<font></font>
   * length of `0` and objects with no own enumerable properties are considered<font></font>
   * "empty".<font></font>
   *<font></font>
   * @static<font></font>
   * @memberOf _<font></font>
   * @category Objects<font></font>
   * @param {Array|Object|string} value The value to inspect.<font></font>
   * @returns {boolean} Returns `true` if the `value` is empty, else `false`.<font></font>
   * @example<font></font>
   *<font></font>
   * _.isEmpty([1, 2, 3]);<font></font>
   * // =&gt; false<font></font>
   *<font></font>
   * _.isEmpty([]);<font></font>
   * // =&gt; true<font></font>
   *<font></font>
   * _.isEmpty({});<font></font>
   * // =&gt; true<font></font>
   *<font></font>
   * _.isEmpty('');<font></font>
   * // =&gt; true<font></font>
   */<font></font>
<font></font>
function isEmpty(value) {<font></font>
    if (!value) {<font></font>
      return true;<font></font>
    }<font></font>
    if (isArray(value) || isString(value)) {<font></font>
      return !value.length;<font></font>
    }<font></font>
    for (var key in value) {<font></font>
      if (hasOwnProperty.call(value, key)) {<font></font>
        return false;<font></font>
      }<font></font>
    }<font></font>
    return true;<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则，如果您已经在使用下划线或破折号，请尝试：</font></font></p>

<pre><code>_.isEmpty(value)
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>function isEmpty(value){<font></font>
  return (value == null || value.length === 0);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将返回true</font></font></p>

<pre><code>undefined  // Because undefined == null<font></font>
<font></font>
null<font></font>
<font></font>
[]<font></font>
<font></font>
""<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和零参数函数，因为函数</font></font><code>length</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是它所使用的已声明参数的数量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要禁止使用后一种类别，您可能只需要检查空白字符串即可</font></font></p>

<pre><code>function isEmpty(value){<font></font>
  return (value == null || value === '');<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">评分最高的第一个答案是错误的。</font><font style="vertical-align: inherit;">如果值未定义，它将在现代浏览器中引发异常。</font><font style="vertical-align: inherit;">您必须使用：</font></font></p>

<pre><code>if (typeof(value) !== "undefined" &amp;&amp; value)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么 </font></font></p>

<pre><code>if (typeof value  !== "undefined" &amp;&amp; value)
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Mandy飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能会发现以下功能有用： </font></font></p>

<pre><code>function typeOf(obj) {<font></font>
  return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或在ES7中（如果有进一步改进，请评论）</font></font></p>

<pre><code>function typeOf(obj) {<font></font>
  const { toString } = Object.prototype;<font></font>
  const stringified = obj::toString();<font></font>
  const type = stringified.split(' ')[1].slice(0, -1);<font></font>
<font></font>
  return type.toLowerCase();<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果：</font></font></p>

<pre><code>typeOf(); //undefined<font></font>
typeOf(null); //null<font></font>
typeOf(NaN); //number<font></font>
typeOf(5); //number<font></font>
typeOf({}); //object<font></font>
typeOf([]); //array<font></font>
typeOf(''); //string<font></font>
typeOf(function () {}); //function<font></font>
typeOf(/a/) //regexp<font></font>
typeOf(new Date()) //date<font></font>
typeOf(new WeakMap()) //weakmap<font></font>
typeOf(new Map()) //map<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“请注意，绑定操作符（：:)根本不是ES2016（ES7）的一部分，也不是ECMAScript标准的任何更高版本。它目前是该语言引入的阶段0（strawman）建议。” </font><font style="vertical-align: inherit;">–西蒙·凯贝格（Simon Kjellberg）。</font><font style="vertical-align: inherit;">作者希望对这个美丽的接受皇家提升的提议表示支持。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">布雷西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查value是undefined还是null的详细方法是：</font></font></p>

<pre><code>return value === undefined || value === null;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符，但这希望人们</font></font><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">知道所有规则</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>return value == null; // also returns true if value is undefined
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

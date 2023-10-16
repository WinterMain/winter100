---
layout: question
title:  如何在JavaScript中检查空值？
date:   2020-03-12T07:29:05.000Z
description: 如何在JavaScript中检查空值？我在下面编写了代码，但是没有用。if (pass == null || cpass == null || ema...
img: 
author: 飞云卡卡西神乐
category: question
answer: 12
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在JavaScript中检查空值？</font><font style="vertical-align: inherit;">我在下面编写了代码，但是没有用。</font></font></p>

<pre><code>if (pass == null || cpass == null || email == null || cemail == null || user == null) {      <font></font>
<font></font>
    alert("fill all columns");<font></font>
    return false;  <font></font>
<font></font>
}   <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript程序中如何找到错误？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1062篇《如何在JavaScript中检查空值？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无神无</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要检查</font><font style="vertical-align: inherit;">javascript中的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">undefined</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">null</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，只需编写以下代码：</font></font></p>

<pre><code>if (!var) {<font></font>
        console.log("var IS null or undefined");<font></font>
} else {<font></font>
        console.log("var is NOT null or undefined");<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidAPro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严格等于运算符：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以通过检查null </font></font><code>===</code> </p>

<pre><code>if ( value === null ){<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需使用 </font></font><code>if</code></p>

<pre><code>if( value ) {<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值不是，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将评估为true </font><font style="vertical-align: inherit;">：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空值</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未定义</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">N</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空字符串（“”）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><strong><font style="vertical-align: inherit;">声明</font></strong><font style="vertical-align: inherit;">变量</font><font style="vertical-align: inherit;">但未分配值的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JAVASCRIPT中的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> AFAIK </font><font style="vertical-align: inherit;">，其类型为</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">所以我们可以检查变量，即使这将是一个</font><font style="vertical-align: inherit;">持有一些</font><strong><font style="vertical-align: inherit;">实例</font></strong><font style="vertical-align: inherit;">到位的</font><strong><font style="vertical-align: inherit;">价值</font></strong><font style="vertical-align: inherit;">。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><code>undefined</code><font style="vertical-align: inherit;"></font><code>object</code><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个用于检查返回的无效性的辅助方法，</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在您的API中使用它。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">帮助程序函数，以检查变量是否为空：</font></font></strong></p>

<pre><code>function isEmpty(item){<font></font>
    if(item){<font></font>
        return false;<font></font>
    }else{<font></font>
        return true;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试捕获异常API调用：</font></font></strong></p>

<pre><code>try {<font></font>
<font></font>
    var pass, cpass, email, cemail, user; // only declared but contains nothing.<font></font>
<font></font>
    // parametrs checking<font></font>
    if(isEmpty(pass) || isEmpty(cpass) || isEmpty(email) || isEmpty(cemail) || isEmpty(user)){<font></font>
        console.log("One or More of these parameter contains no vlaue. [pass] and-or [cpass] and-or [email] and-or [cemail] and-or [user]");<font></font>
    }else{<font></font>
        // do stuff<font></font>
    }<font></font>
<font></font>
} catch (e) {<font></font>
    if (e instanceof ReferenceError) {<font></font>
        console.log(e.message); // debugging purpose<font></font>
        return true;<font></font>
    } else {<font></font>
        console.log(e.message); // debugging purpose<font></font>
        return true;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些测试用例：</font></font></strong></p>

<pre><code>var item = ""; // isEmpty? true<font></font>
var item = " "; // isEmpty? false<font></font>
var item; // isEmpty? true<font></font>
var item = 0; // isEmpty? true<font></font>
var item = 1; // isEmpty? false<font></font>
var item = "AAAAA"; // isEmpty? false<font></font>
var item = NaN; // isEmpty? true<font></font>
var item = null; // isEmpty? true<font></font>
var item = undefined; // isEmpty? true<font></font>
<font></font>
console.log("isEmpty? "+isEmpty(item));<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiDavaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个：</font></font></p>

<pre><code>if (!variable &amp;&amp; typeof variable === "object") {<font></font>
    // variable is null<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用lodash模块检查值是否为null或未定义</font></font></p>

<pre><code>_.isNil(value)<font></font>
Example <font></font>
<font></font>
 country= "Abc"<font></font>
    _.isNil(country)<font></font>
    //false<font></font>
<font></font>
   state= null<font></font>
    _.isNil(state)<font></font>
    //true<font></font>
<font></font>
city= undefined<font></font>
    _.isNil(state)<font></font>
    //true<font></font>
<font></font>
   pin= true<font></font>
    _.isNil(pin)<font></font>
    // false   <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考链接：</font><a href="https://lodash.com/docs/#isNil" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://lodash.com/docs/#isNil" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//lodash.com/docs/#isNil</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Davaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于来自DB for ex的布尔值，这将不起作用：</font></font></p>

<pre><code> value = false<font></font>
<font></font>
 if(!value) {<font></font>
   // it will change all false values to not available<font></font>
   return "not available"<font></font>
 }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Tom</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript在检查“空”值方面非常灵活。</font><font style="vertical-align: inherit;">我猜您实际上是在寻找空字符串，在这种情况下，这种简单的代码将起作用：</font></font></p>

<pre><code>if(!pass || !cpass || !email || !cemail || !user){
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将检查空字符串（</font></font><code>""</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）， ，</font><font style="vertical-align: inherit;">，</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> </font><font style="vertical-align: inherit;">以及数字</font><font style="vertical-align: inherit;">和</font></font><code>undefined</code><font style="vertical-align: inherit;"></font><code>false</code><font style="vertical-align: inherit;"></font><code>0</code><font style="vertical-align: inherit;"></font><code>NaN</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，如果您专门检查数字，则</font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此方法</font><font style="vertical-align: inherit;">时常会</font><font style="vertical-align: inherit;">犯错，</font><font style="vertical-align: inherit;">对于返回的函数，它</font></font><code>num !== 0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是首选（</font></font><code>num !== -1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>~num</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">（也检查了错误代码</font></font><code>-1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）））</font></font><code>-1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，例如</font></font><code>indexOf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门达蒙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过显式检查</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但使用简化的语法来</font><font style="vertical-align: inherit;">改进可接受的答案</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>if ([pass, cpass, email, cemail, user].every(x=&gt;x!==null)) {<font></font>
    // your code here ...<font></font>
}<font></font>
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>// Test<font></font>
let pass=1, cpass=1, email=1, cemail=1, user=1; // just to test<font></font>
<font></font>
if ([pass, cpass, email, cemail, user].every(x=&gt;x!==null)) {<font></font>
    // your code here ...<font></font>
    console.log ("Yayy! None of them are null");<font></font>
} else {<font></font>
    console.log ("Oops! At-lease one of them is null");<font></font>
}</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Pro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中，没有字符串等于</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许您希望</font></font><code>pass == null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当when </font></font><code>pass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是空字符串</font><font style="vertical-align: inherit;">时</font><font style="vertical-align: inherit;">为</font><font style="vertical-align: inherit;">true，</font><font style="vertical-align: inherit;">因为您知道松散的等价运算符</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会执行某些类型的类型强制。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，此表达式为true：</font></font></p>

<pre><code>'' == 0
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相反，严格相等运算符</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说这是错误的：</font></font></p>

<pre><code>'' === 0
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">鉴于</font></font><code>''</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大致相等，您可以合理地猜想</font></font><code>''</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大致相等。</font><font style="vertical-align: inherit;">但是，事实并非如此。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此表达式是错误的：</font></font></p>

<pre><code>'' == null
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将任何字符串与比较的结果</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为false。</font><font style="vertical-align: inherit;">因此，</font></font><code>pass == null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的所有其他测试始终为假，并且用户永远不会收到警报。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要修复您的代码，请将每个值与空字符串进行比较：</font></font></p>

<pre><code>pass === ''
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您确定这</font></font><code>pass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个字符串，那么</font></font><code>pass == ''</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也将起作用，因为只有一个空字符串大致等于该空字符串。</font><font style="vertical-align: inherit;">另一方面，一些专家说，除非您特别想执行松散相等运算符执行的类型强制，否则始终在JavaScript中始终使用严格相等是一种好习惯。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想知道哪些值对大致相等，请参阅</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于此主题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness" rel="nofollow"><font style="vertical-align: inherit;">Mozilla文章</font></a><font style="vertical-align: inherit;">中的“相似性比较”表</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green老丝Itachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是对WebWanderer有关检查NaN的解决方案的评论（我没有足够的代表来发表正式评论）。</font><font style="vertical-align: inherit;">解决方案读为</font></font></p>

<pre><code>if(!parseInt(variable) &amp;&amp; variable != 0 &amp;&amp; typeof variable === "number")
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这对于四舍五入的有理数</font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（如）</font><font style="vertical-align: inherit;">将失败</font></font><code>variable = 0.1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">更好的测试是：</font></font></p>

<pre><code>if(isNaN(variable) &amp;&amp; typeof variable === "number")
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光阿飞</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需更换</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在所有地方。</font></font></p>

<p><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是一个松散或抽象的相等比较</font></font></p>

<p><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是严格的平等比较</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多详细信息，</font><font style="vertical-align: inherit;">请参见MDN上有关“ </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">平等比较和相同性”的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文章</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝猿路易</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，您有一个没有函数体的return语句。</font><font style="vertical-align: inherit;">可能会引发错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种更清洁的检查方法是简单地使用！</font><font style="vertical-align: inherit;">操作员：</font></font></p>

<pre><code>if (!pass || !cpass || !email || !cemail || !user) {<font></font>
<font></font>
    alert("fill all columns");<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>

---
layout: question
title:  在Javascript中按名字（按字母顺序）对数组进行排序
date:   2020-03-11T15:25:47.000Z
description: 我得到了一个数组（请参阅下面的数组中的一个对象），我需要使用JavaScript按名字排序。我该怎么做？var user = {   bio  nu...
img: 
author: 逆天梅
category: question
answer: 17
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我得到了一个数组（请参阅下面的数组中的一个对象），我需要使用JavaScript按名字排序。</font><font style="vertical-align: inherit;">我该怎么做？</font></font></p>

<pre><code>var user = {<font></font>
   bio: null,<font></font>
   email:  "user@domain.com",<font></font>
   firstname: "Anna",<font></font>
   id: 318,<font></font>
   lastAvatar: null,<font></font>
   lastMessage: null,<font></font>
   lastname: "Nickson",<font></font>
   nickname: "anny"<font></font>
};<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第854篇《在Javascript中按名字（按字母顺序）对数组进行排序》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞羽宝儿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅作记录，如果您想拥有一个命名的排序功能，语法如下： </font></font></p>

<pre><code>let sortFunction = (a, b) =&gt; {<font></font>
 if(a.firstname &lt; b.firstname) { return -1; }<font></font>
 if(a.firstname &gt; b.firstname) { return 1; }<font></font>
 return 0;<font></font>
})<font></font>
users.sort(sortFunction)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，以下操作无效： </font></font></p>

<pre><code>users.sort(sortFunction(a,b))
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一Mandy</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用类似的方法来消除</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">区分大小写</font></font></strong> </p>

<pre><code>users.sort(function(a, b){<font></font>
<font></font>
  //compare two values<font></font>
  if(a.firstname.toLowerCase() &lt; b.firstname.toLowerCase()) return -1;<font></font>
  if(a.firstname.toLowerCase() &gt; b.firstname.toLowerCase()) return 1;<font></font>
  return 0;<font></font>
<font></font>
})<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Itachi小小</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的实现在旧版ES中效果很好：</font></font></p>

<pre><code>sortObject = function(data) {<font></font>
    var keys = Object.keys(data);<font></font>
    var result = {};<font></font>
<font></font>
    keys.sort();<font></font>
<font></font>
    for(var i = 0; i &lt; keys.length; i++) {<font></font>
        var key = keys[i];<font></font>
<font></font>
        result[key] = data[key];<font></font>
    }<font></font>
<font></font>
    return result;<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">6的不行</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将最重要的答案放入原型中，以按键排序。</font></font></p>

<pre><code>Array.prototype.alphaSortByKey= function (key) {<font></font>
    this.sort(function (a, b) {<font></font>
        if (a[key] &lt; b[key])<font></font>
            return -1;<font></font>
        if (a[key] &gt; b[key])<font></font>
            return 1;<font></font>
        return 0;<font></font>
    });<font></font>
    return this;<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱神无</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单来说，您可以使用此方法</font></font></p>

<pre><code>users.sort(function(a,b){return a.firstname &lt; b.firstname ? -1 : 1});
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将其用于对象</font></font></p>

<pre><code>transform(array: any[], field: string): any[] {<font></font>
return array.sort((a, b) =&gt; a[field].toLowerCase() !== b[field].toLowerCase() ? a[field].toLowerCase() &lt; b[field].toLowerCase() ? -1 : 1 : 0);}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinPro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通用函数可以如下编写</font></font></p>

<pre><code>    function getSortedData(data, prop, isAsc) {<font></font>
        return data.sort((a, b) =&gt; (a[prop] &lt; b[prop] ? -1 : 1) * (isAsc ? 1 : -1));<font></font>
   }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以传递以下参数</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您要排序的数据</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数据中的属性应按其排序</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后一个参数是布尔类型。</font><font style="vertical-align: inherit;">它检查您是否要按升序或降序排序</font></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小卤蛋Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font></p>

<pre><code>users.sort((a,b)=&gt; (a.firstname&gt;b.firstname)*2-1)
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var users = [<font></font>
  { firstname: "Kate", id: 318, /*...*/ },<font></font>
  { firstname: "Anna", id: 319, /*...*/ },<font></font>
  { firstname: "Cristine", id: 317, /*...*/ },<font></font>
]<font></font>
<font></font>
console.log(users.sort((a,b)=&gt; (a.firstname&gt;b.firstname)*2-1) );</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端猴子</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更简洁的表示法：</font></font></p>

<pre><code>user.sort(function(a, b){<font></font>
    return a.firstname === b.firstname ? 0 : a.firstname &lt; b.firstname ? -1 : 1;<font></font>
})<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanDavaid</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样对于asec和desc排序，您都可以使用此方法：假设我们有一个变量</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SortType</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它指定了想要的升序或降序排序：</font></font></p>

<pre><code> users.sort(function(a,b){<font></font>
            return   sortType==="asc"? a.firstName.localeCompare( b.firstName): -( a.firstName.localeCompare(  b.firstName));<font></font>
        })<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞羽</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://stackoverflow.com/a/18920254/872188"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案中得到</font><font style="vertical-align: inherit;">启发</font><font style="vertical-align: inherit;">，</font></font></p>

<pre><code>users.sort((a,b) =&gt; (a.firstname  - b.firstname));
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green前端</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><a href="http://underscorejs.org/#sortBy"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">underscorejs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供了非常好的_.sortBy函数：</font></font></p>

<pre><code>_.sortBy([{a:1},{a:3},{a:2}], "a")
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者您可以使用自定义排序功能：</font></font></p>

<pre><code>_.sortBy([{a:"b"},{a:"c"},{a:"a"}], function(i) {return i.a.toLowerCase()})
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">漂亮的小ES6一线：</font></font></p>

<pre><code>users.sort((a, b) =&gt; a.firstname !== b.firstname ? a.firstname &lt; b.firstname ? -1 : 1 : 0);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一西里</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre><code>array.sort(function(a, b){<font></font>
 var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();<font></font>
 if (nameA &lt; nameB) //sort string ascending<font></font>
  return -1;<font></font>
 if (nameA &gt; nameB)<font></font>
  return 1;<font></font>
 return 0; //default return value (no sorting)<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿小哥小卤蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ES6的代码最短！</font></font></p>

<pre><code>users.sort((a, b) =&gt; a.firstname.localeCompare(b.firstname))
</code></pre>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare#Browser_compatibility" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String.prototype.localeCompare（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本支持是通用的！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">→笑里藏刀↓</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果比较的字符串包含Unicode字符，则可以使用</font><font style="vertical-align: inherit;">如下所示</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">class </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare"><code>localeCompare</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数</font></font></a><font style="vertical-align: inherit;"></font><code>String</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>users.sort(function(a,b){<font></font>
    return a.firstname.localeCompare(b.firstname);<font></font>
})<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY村村</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您有一个数组</font></font><code>users</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以使用</font></font><code>users.sort</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并传递一个接受两个参数并进行比较的函数（比较器）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它应该返回 </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果第一个参数小于第二个参数，则为负数（应在结果数组的第二个参数之前放置）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果第一个参数较大，则为正数（应放在第二个参数之后） </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果这两个元素相等，则为0。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我们的情况下，如果两个元素是</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们要比较</font></font><code>a.firstname</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>b.firstname</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>users.sort(function(a, b){<font></font>
    if(a.firstname &lt; b.firstname) { return -1; }<font></font>
    if(a.firstname &gt; b.firstname) { return 1; }<font></font>
    return 0;<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此代码将适用于任何类型。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，在“现实生活”™中，当您比较字符串时，您通常希望忽略大小写，正确地对变音符号进行排序，诸如ß之类的怪异符号，因此您可能需要使用</font></font><code>localeCompare</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">为清楚起见，请参见其他答案。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>

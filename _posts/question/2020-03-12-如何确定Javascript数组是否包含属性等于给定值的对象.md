---
layout: question
title:  如何确定Javascript数组是否包含属性等于给定值的对象？
date:   2020-03-12T02:32:13.000Z
description: 我有一个像vendors = \[    {      Name  'Magenic',      ID  'ABC'     },    {...
img: 
author: 小胖凯前端
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个像</font></font></p>

<pre><code>vendors = [<font></font>
    {<font></font>
      Name: 'Magenic',<font></font>
      ID: 'ABC'<font></font>
     },<font></font>
    {<font></font>
      Name: 'Microsoft',<font></font>
      ID: 'DEF'<font></font>
    } //and so on goes array... <font></font>
];<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何检查此数组以查看Magenic是否存在？</font><font style="vertical-align: inherit;">除非必须，否则我不想循环播放。</font><font style="vertical-align: inherit;">我正在处理几千条记录。</font></font></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于这是一个受欢迎的帖子，所以我想分享一些新发现。</font><font style="vertical-align: inherit;">看来@CAFxX已经分享了！</font><font style="vertical-align: inherit;">我应该更经常阅读这些内容。</font><font style="vertical-align: inherit;">我遇到了</font></font><a href="https://benfrain.com/understanding-native-javascript-array-methods/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://benfrain.com/understanding-native-javascript-array-methods/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>vendors.filter(function(vendor){ return vendor.Name === "Magenic" })
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">借助</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 2015</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，使用新的箭头功能甚至更加简单：</font></font></p>

<pre><code>vendors.filter(vendor =&gt; vendor.Name === "Magenic")
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第893篇《如何确定Javascript数组是否包含属性等于给定值的对象？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomSam</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><code>var without2 = (arr, args) =&gt; arr.filter(v =&gt; v.id !== args.id);
</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
例：</font></font></p>

<p><code>without2([{id:1},{id:1},{id:2}],{id:2})
</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果：没有2（[{{id：1}，{id：1}，{id：2}]，{id：2}）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">長ぐつをはいたネコ</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决此问题的方法是使用ES6并创建一个为我们做检查的函数。</font><font style="vertical-align: inherit;">此功能的好处是可以在整个项目中重用，以检查给定</font></font><code>key</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和的</font><font style="vertical-align: inherit;">对象数组</font></font><code>value</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">够了，让我们看看代码</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组</font></font></strong></p>

<pre><code>const ceos = [<font></font>
  {<font></font>
    name: "Jeff Bezos",<font></font>
    company: "Amazon"<font></font>
  }, <font></font>
  {<font></font>
    name: "Mark Zuckerberg",<font></font>
    company: "Facebook"<font></font>
  }, <font></font>
  {<font></font>
    name: "Tim Cook",<font></font>
    company: "Apple"<font></font>
  }<font></font>
];<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能</font></font></strong></p>

<pre><code>const arrayIncludesInObj = (arr, key, valueToCheck) =&gt; {<font></font>
  let found = false;<font></font>
<font></font>
  arr.some(value =&gt; {<font></font>
    if (value[key] === valueToCheck) {<font></font>
      found = true;<font></font>
      return true; // this will break the loop once found<font></font>
    }<font></font>
  });<font></font>
<font></font>
  return found;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通话/使用</font></font></strong></p>

<pre><code>const found = arrayIncludesInObj(ceos, "name", "Tim Cook"); // true<font></font>
<font></font>
const found = arrayIncludesInObj(ceos, "name", "Tim Bezos"); // false<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>const a = [{one:2},{two:2},{two:4}]<font></font>
const b = a.filter(val =&gt; "two" in val).length;<font></font>
if (b) {<font></font>
   ...<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长神无</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您可以执行以下操作：</font></font></p>

<pre><code>const find = (key, needle) =&gt; return !!~vendors.findIndex(v =&gt; (v[key] === needle));
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">nick</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">lodash</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果lodash库对于您的应用程序来说太重了，请考虑分块出不必要的未使用功能。</font></font></p>

<pre><code>let newArray = filter(_this.props.ArrayOne, function(item) {<font></font>
                    return find(_this.props.ArrayTwo, {"speciesId": item.speciesId});<font></font>
                });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这只是做到这一点的一种方法。</font><font style="vertical-align: inherit;">另一个可以是：</font></font></p>

<pre><code>var newArray=  [];<font></font>
     _.filter(ArrayOne, function(item) {<font></font>
                        return AllSpecies.forEach(function(cItem){<font></font>
                            if (cItem.speciesId == item.speciesId){<font></font>
                            newArray.push(item);<font></font>
                          }<font></font>
                        }) <font></font>
                    });<font></font>
</code></pre>

<p><code>console.log(arr);</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的例子也可以</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不用任何</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似的库</font><font style="vertical-align: inherit;">来</font><strong><font style="vertical-align: inherit;">重写</font></strong><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var newArray=  [];<font></font>
ArrayOne.filter(function(item) {<font></font>
                return ArrayTwo.forEach(function(cItem){<font></font>
                    if (cItem.speciesId == item.speciesId){<font></font>
                    newArray.push(item);<font></font>
                  }<font></font>
                }) <font></font>
            });<font></font>
console.log(arr);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望我的回答有帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是jquery，则可以利用grep来创建具有所有匹配对象的数组：</font></font></p>

<pre><code>var results = $.grep(vendors, function (e) {<font></font>
    return e.Name == "Magenic";<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后使用结果数组：</font></font></p>

<pre><code>for (var i=0, l=results.length; i&lt;l; i++) {<font></font>
    console.log(results[i].ID);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">马克</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">纠正我，如果我错了..我本可以使用这样的</font></font><code>forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法，</font></font></p>

<pre><code>var found=false;<font></font>
vendors.forEach(function(item){<font></font>
   if(item.name === "name"){<font></font>
       found=true;<font></font>
       return;<font></font>
   }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如今我已经习惯了，因为它简单易懂。</font><font style="vertical-align: inherit;">谢谢。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin达蒙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于OP询问</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了密钥是否存在</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的问题</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用ES6 reduce函数返回布尔值的更优雅的解决方案是</font></font></p>

<pre><code>const magenicVendorExists =  vendors.reduce((accumulator, vendor) =&gt; (accumulator||vendor.Name === "Magenic"), false);
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   reduce的初始参数是a </font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果数组具有键，它将返回true。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望它有助于更​​好，更干净地执行代码</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>

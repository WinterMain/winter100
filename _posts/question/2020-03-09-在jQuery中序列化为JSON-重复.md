---
layout: question
title:  在jQuery中序列化为JSON \[重复\]
date:   2020-03-09T14:58:55.000Z
description:                                                                          ...
img: 
author: 乐小胖
category: question
answer: 10
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/558518/serializing-an-object-to-json" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将对象序列化为JSON </font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （3个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2017-04-07 13：35：01Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要将</font><font style="vertical-align: inherit;">一个对象</font></font><a href="https://en.wikipedia.org/wiki/Serialization" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">序列化为</font></font></a><font style="vertical-align: inherit;"></font><a href="https://www.json.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我正在使用</font></font><a href="https://api.jquery.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有没有“标准”的方式来做到这一点？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的具体情况：我有一个定义如下的数组：</font></font></p>

<pre><code>var countries = new Array();<font></font>
countries[0] = 'ga';<font></font>
countries[1] = 'cd';<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要将其转换为字符串以</font></font><a href="https://www.w3schools.com/jquery/ajax_ajax.asp" rel="noreferrer"><code>$.ajax()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样</font><font style="vertical-align: inherit;">传递</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>$.ajax({<font></font>
    type: "POST",<font></font>
    url: "Concessions.aspx/GetConcessions",<font></font>
    data: "{'countries':['ga','cd']}",<font></font>
...<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第336篇《在jQuery中序列化为JSON \[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天小哥蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，你应该   </font></font><code>JSON.stringify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>JSON.parse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你的</font></font><code>Json_PostData</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前电话</font></font><code>$.ajax</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>$.ajax({<font></font>
        url:    post_http_site,  <font></font>
        type: "POST",         <font></font>
        data:   JSON.parse(JSON.stringify(Json_PostData)),       <font></font>
        cache: false,<font></font>
        error: function (xhr, ajaxOptions, thrownError) {<font></font>
            alert(" write json item, Ajax error! " + xhr.status + " error =" + thrownError + " xhr.responseText = " + xhr.responseText );    <font></font>
        },<font></font>
        success: function (data) {<font></font>
            alert("write json item, Ajax  OK");<font></font>
<font></font>
        } <font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上述解决方案未考虑的一件事是，如果您有一组输入，但只提供了一个值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如果后端需要一组人，但是在这种情况下，您只需要与一个人打交道。</font><font style="vertical-align: inherit;">然后做：</font></font></p>

<pre><code>&lt;input type="hidden" name="People" value="Joe" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，使用先前的解决方案，它只会映射到以下内容：</font></font></p>

<pre><code>{<font></font>
    "People" : "Joe"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但它确实应该映射到</font></font></p>

<pre><code>{<font></font>
    "People" : [ "Joe" ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了解决这个问题，输入应如下所示：</font></font></p>

<pre><code>&lt;input type="hidden" name="People[]" value="Joe" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且您将使用以下功能（基于其他解决方案，但进行了扩展）</font></font></p>

<pre><code>$.fn.serializeObject = function() {<font></font>
var o = {};<font></font>
var a = this.serializeArray();<font></font>
$.each(a, function() {<font></font>
    if (this.name.substr(-2) == "[]"){<font></font>
        this.name = this.name.substr(0, this.name.length - 2);<font></font>
        o[this.name] = [];<font></font>
    }<font></font>
<font></font>
    if (o[this.name]) {<font></font>
        if (!o[this.name].push) {<font></font>
            o[this.name] = [o[this.name]];<font></font>
        }<font></font>
        o[this.name].push(this.value || '');<font></font>
    } else {<font></font>
        o[this.name] = this.value || '';<font></font>
    }<font></font>
});<font></font>
return o;<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这基本上是两步过程：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，您需要像这样进行分类</font></font></p>

<pre><code>var JSON_VAR = JSON.stringify(OBJECT_NAME, null, 2); 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后，您需要将字符串转换为Object</font></font></p>

<pre><code>var obj = JSON.parse(JSON_VAR);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenGil</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想使用外部库，则可以使用</font></font><code>.toSource()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本机JavaScript方法，但是它并不是跨浏览器的完美选择。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙阳光乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经使用</font></font><a href="https://code.google.com/p/jquery-json/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jquery-json</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 6个月了，它的工作原理很棒。</font><font style="vertical-align: inherit;">使用非常简单：</font></font></p>

<pre><code>var myObj = {foo: "bar", "baz": "wockaflockafliz"};<font></font>
$.toJSON(myObj);<font></font>
<font></font>
// Result: {"foo":"bar","baz":"wockaflockafliz"}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我没有用过，但您可能想尝试</font><strong><a href="http://jollytoad.googlepages.com/json.js" rel="noreferrer"><font style="vertical-align: inherit;">Mark Gibson编写</font></a></strong><font style="vertical-align: inherit;">的</font></font><strong><a href="http://jollytoad.googlepages.com/json.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery插件</font></font></a></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它添加了两个功能：</font></font><code>$.toJSON(value)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>$.parseJSON(json_str, [safe])</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我确实在某个地方找到了这个。</font><font style="vertical-align: inherit;">不记得在哪里...可能在StackOverflow :)</font></font></p>

<pre><code>$.fn.serializeObject = function(){<font></font>
    var o = {};<font></font>
    var a = this.serializeArray();<font></font>
    $.each(a, function() {<font></font>
        if (o[this.name]) {<font></font>
            if (!o[this.name].push) {<font></font>
                o[this.name] = [o[this.name]];<font></font>
            }<font></font>
            o[this.name].push(this.value || '');<font></font>
        } else {<font></font>
            o[this.name] = this.value || '';<font></font>
        }<font></font>
    });<font></font>
    return o;<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿DavaidL</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><a href="https://github.com/douglascrockford/JSON-js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON-js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -JavaScript中的JSON。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要将对象转换为字符串，请使用</font></font><code>JSON.stringify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var json_text = JSON.stringify(your_object, null, 2);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要将JSON字符串转换为对象，请使用</font></font><code>JSON.parse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var your_object = JSON.parse(json_text);
</code></pre>

<p><font style="vertical-align: inherit;"></font><a href="http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">John Resig</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最近推荐了它</font><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...请开始将使用JSON的应用程序迁移到Crockford的json2.js。</font><font style="vertical-align: inherit;">它与ECMAScript 5规范完全兼容，并且在存在本机（更快！）实现的情况下优雅地降级。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，昨天我刚刚在jQuery中进行了一次更改，该更改利用了JSON.parse方法（如果已存在），因为它已经被完全指定。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我倾向于相信他在JavaScript问题上所说的话：）</font></font></p>

<p><a href="http://caniuse.com/json" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有现代浏览器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（以及许多较旧的较旧的</font><a href="http://caniuse.com/json" rel="noreferrer"><font style="vertical-align: inherit;">浏览器</font></a><font style="vertical-align: inherit;">）都原生支持</font></font><a href="http://ecma262-5.com/ELS5_Section_15.htm#Section_15.12" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON对象</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">Crockford的JSON库的当前版本仅会定义</font></font><code>JSON.stringify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>JSON.parse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果尚未定义，则任何浏览器本机实现都将保持不变。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不，序列化为JSON的标准方法是使用现有的JSON序列化库。</font><font style="vertical-align: inherit;">如果您不希望这样做，则必须编写自己的序列化方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要有关如何执行此操作的指南，建议您检查一些可用库的源代码。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不会出来说编写自己的序列化方法是不好的，但是您必须考虑到，如果使用格式正确的JSON对您的应用程序很重要，那么您就必须权衡“另外一个”的开销。依赖性”，以防止您的自定义方法有一天可能遇到您未曾预料到的失败案例。</font><font style="vertical-align: inherit;">您可以致电该风险是否可以接受。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><a href="http://caniuse.com/#search=JSON.stringify" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于IE8 +</font></font></strong></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不需要jQuery，请使用：</font></font></p>

<pre><code>JSON.stringify(countries); 
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>

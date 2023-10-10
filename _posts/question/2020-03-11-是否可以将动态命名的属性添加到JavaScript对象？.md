---
layout: question
title:  是否可以将动态命名的属性添加到JavaScript对象？
date:   2020-03-11T04:05:47.000Z
description: 在JavaScript中，我创建了一个像这样的对象：var data = {    'PropertyA'  1,    'PropertyB' ...
img: 
author: 斯丁斯丁
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中，我创建了一个像这样的对象：</font></font></p>

<pre><code>var data = {<font></font>
    'PropertyA': 1,<font></font>
    'PropertyB': 2,<font></font>
    'PropertyC': 3<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果直到运行时才确定属性名称，是否可以在初始创建此对象后为其添加其他属性？</font><font style="vertical-align: inherit;">即</font></font></p>

<pre><code>var propName = 'Property' + someUserInput<font></font>
//imagine someUserInput was 'Z', how can I now add a 'PropertyZ' property to <font></font>
//my object?<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第640篇《是否可以将动态命名的属性添加到JavaScript对象？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绝对是 </font><font style="vertical-align: inherit;">将其视为字典或关联数组。</font><font style="vertical-align: inherit;">您可以随时添加它。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在运行时添加了新属性，则可能很有用：</font></font></p>

<pre><code>data = { ...data, newPropery: value}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，散布运算符使用浅表复制，但此处我们将数据分配给自身，因此应该不会丢失</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天GO</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种从包含对象的动态字符串名称访问的好方法（例如object.subobject.property）</font></font></p>

<pre><code>function ReadValue(varname)<font></font>
{<font></font>
    var v=varname.split(".");<font></font>
    var o=window;<font></font>
    if(!v.length)<font></font>
        return undefined;<font></font>
    for(var i=0;i&lt;v.length-1;i++)<font></font>
        o=o[v[i]];<font></font>
    return o[v[v.length-1]];<font></font>
}<font></font>
<font></font>
function AssignValue(varname,value)<font></font>
{<font></font>
    var v=varname.split(".");<font></font>
    var o=window;<font></font>
    if(!v.length)<font></font>
        return;<font></font>
    for(var i=0;i&lt;v.length-1;i++)<font></font>
        o=o[v[i]];<font></font>
    o[v[v.length-1]]=value;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>ReadValue("object.subobject.property");<font></font>
WriteValue("object.subobject.property",5);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">eval适用于读取值，但写入值要难一些。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更高级的版本（如果不存在子类，则创建子类，并允许使用对象而不是全局变量）</font></font></p>

<pre><code>function ReadValue(varname,o=window)<font></font>
{<font></font>
    if(typeof(varname)==="undefined" || typeof(o)==="undefined" || o===null)<font></font>
        return undefined;<font></font>
    var v=varname.split(".");<font></font>
    if(!v.length)<font></font>
        return undefined;<font></font>
    for(var i=0;i&lt;v.length-1;i++)<font></font>
    {<font></font>
        if(o[v[i]]===null || typeof(o[v[i]])==="undefined") <font></font>
            o[v[i]]={};<font></font>
        o=o[v[i]];<font></font>
    }<font></font>
    if(typeof(o[v[v.length-1]])==="undefined")    <font></font>
        return undefined;<font></font>
    else    <font></font>
        return o[v[v.length-1]];<font></font>
}<font></font>
<font></font>
function AssignValue(varname,value,o=window)<font></font>
{<font></font>
    if(typeof(varname)==="undefined" || typeof(o)==="undefined" || o===null)<font></font>
        return;<font></font>
    var v=varname.split(".");<font></font>
    if(!v.length)<font></font>
        return;<font></font>
    for(var i=0;i&lt;v.length-1;i++)<font></font>
    {<font></font>
        if(o[v[i]]===null || typeof(o[v[i]])==="undefined")<font></font>
            o[v[i]]={};<font></font>
        o=o[v[i]];<font></font>
    }<font></font>
    o[v[v.length-1]]=value;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>ReadValue("object.subobject.property",o);<font></font>
WriteValue("object.subobject.property",5,o);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这与o.object.subobject.property相同</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOItachi</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单，最便携的方法是。</font></font></p>

<pre><code>var varFieldName = "good";<font></font>
var ob = {};<font></font>
Object.defineProperty(ob, varFieldName , { value: "Fresh Value" });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据#abeing答案！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一老丝宝儿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是上述安倍答案的补充。</font><font style="vertical-align: inherit;">您可以定义一个函数来封装defineProperty的复杂性，如下所述。</font></font></p>

<pre><code>var defineProp = function ( obj, key, value ){<font></font>
  var config = {<font></font>
    value: value,<font></font>
    writable: true,<font></font>
    enumerable: true,<font></font>
    configurable: true<font></font>
  };<font></font>
  Object.defineProperty( obj, key, config );<font></font>
};<font></font>
<font></font>
//Call the method to add properties to any object<font></font>
defineProp( data, "PropertyA",  1 );<font></font>
defineProp( data, "PropertyB",  2 );<font></font>
defineProp( data, "PropertyC",  3 );<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="http://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝镜风</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了前面的所有答案之外，如果您想知道我们</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将来如何</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用计算属性名（ECMAScript 6）</font><font style="vertical-align: inherit;">编写动态属性名，请执行以下</font><font style="vertical-align: inherit;">操作：</font></font></p>

<pre><code>var person = "John Doe";<font></font>
var personId = "person_" + new Date().getTime();<font></font>
var personIndex = {<font></font>
    [ personId ]: person<font></font>
//  ^ computed property name<font></font>
};<font></font>
<font></font>
personIndex[ personId ]; // "John Doe"<font></font>
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font></font><a href="https://github.com/nzakas/understandinges6/blob/master/manuscript/03-Objects.md#computed-property-names"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解ECMAScript 6-Nickolas Zakas</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

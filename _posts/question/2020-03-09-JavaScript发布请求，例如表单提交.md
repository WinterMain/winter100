---
layout: question
title:  JavaScript发布请求，例如表单提交
date:   2020-03-09T12:49:12.000Z
description: 我正在尝试将浏览器定向到其他页面。如果我想要GET请求，我可能会说document.location.href = 'http //example.c...
img: 
author: 乐米亚
category: question
answer: 10
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试将浏览器定向到其他页面。</font><font style="vertical-align: inherit;">如果我想要GET请求，我可能会说</font></font></p>

<pre><code>document.location.href = 'http://example.com/q=a';
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，除非使用POST请求，否则我尝试访问的资源将无法正确响应。</font><font style="vertical-align: inherit;">如果不是动态生成的，我可能会使用HTML</font></font></p>

<pre><code>&lt;form action="http://example.com/" method="POST"&gt;<font></font>
  &lt;input type="hidden" name="q" value="a"&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我只需从DOM提交表单。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我真的很想让我说的JavaScript代码</font></font></p>

<pre><code>post_to_url('http://example.com/', {'q':'a'});
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的跨浏览器实现是什么？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对不起，我不清楚。</font><font style="vertical-align: inherit;">我需要一个更改浏览器位置的解决方案，就像提交表单一样。</font><font style="vertical-align: inherit;">如果</font></font><a href="http://en.wikipedia.org/wiki/XMLHttpRequest" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XMLHttpRequest</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以做到这一点</font><font style="vertical-align: inherit;">，那不是很明显。</font><font style="vertical-align: inherit;">而且这不应该是异步的，也不应该使用XML，因此Ajax并不是答案。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim老丝L</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以进行AJAX调用（可能使用诸如Prototype.js或JQuery之类的库）。</font><font style="vertical-align: inherit;">AJAX可以处理GET和POST选项。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德小胖Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用document.forms java并将其循环以获取表单中的所有元素，然后通过xhttp发送。</font><font style="vertical-align: inherit;">因此，这是我的javascript / ajax提交解决方案（包括所有html作为示例）：</font></font></p>

<pre><code>          &lt;!DOCTYPE html&gt;<font></font>
           &lt;html&gt;<font></font>
           &lt;body&gt;<font></font>
           &lt;form&gt;<font></font>
       First name: &lt;input type="text" name="fname" value="Donald"&gt;&lt;br&gt;<font></font>
        Last name: &lt;input type="text" name="lname" value="Duck"&gt;&lt;br&gt;<font></font>
          Addr1: &lt;input type="text" name="add" value="123 Pond Dr"&gt;&lt;br&gt;<font></font>
           City: &lt;input type="text" name="city" value="Duckopolis"&gt;&lt;br&gt;<font></font>
      &lt;/form&gt; <font></font>
<font></font>
<font></font>
<font></font>
           &lt;button onclick="smc()"&gt;Submit&lt;/button&gt;<font></font>
<font></font>
                   &lt;script&gt;<font></font>
             function smc() {<font></font>
                  var http = new XMLHttpRequest();<font></font>
                       var url = "yourphpfile.php";<font></font>
                     var x = document.forms[0];<font></font>
                          var xstr = "";<font></font>
                         var ta ="";<font></font>
                    var tb ="";<font></font>
                var i;<font></font>
               for (i = 0; i &lt; x.length; i++) {<font></font>
     if (i==0){ta = x.elements[i].name+"="+ x.elements[i].value;}else{<font></font>
       tb = tb+"&amp;"+ x.elements[i].name +"=" + x.elements[i].value;<font></font>
             } }<font></font>
<font></font>
           xstr = ta+tb;<font></font>
      http.open("POST", url, true);<font></font>
       http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");<font></font>
<font></font>
      http.onreadystatechange = function() {<font></font>
          if(http.readyState == 4 &amp;&amp; http.status == 200) {<font></font>
<font></font>
        // do whatever you want to with the html output response here<font></font>
<font></font>
                } <font></font>
<font></font>
               }<font></font>
            http.send(xstr);<font></font>
<font></font>
              }<font></font>
         &lt;/script&gt;<font></font>
<font></font>
         &lt;/body&gt;<font></font>
     &lt;/html&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LA</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用jQuery之类的库及其</font></font><a href="http://docs.jquery.com/Ajax/jQuery.post" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ .post方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用DHTML动态添加表单，然后提交。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的情况下，这非常有效：</font></font></p>

<pre><code>document.getElementById("form1").submit();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在类似的函数中使用它：</font></font></p>

<pre><code>function formSubmit() {<font></font>
     document.getElementById("frmUserList").submit();<font></font>
} <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此功能，您可以发布所有输入值。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的解决方案将对深度嵌套的对象进行编码，这与@RakeshPai当前接受的解决方案不同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它使用“ qs” npm库及其stringify函数将嵌套对象转换为参数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管您应该能够通过修改传递给stringify的选项来修改它以使其与所需的任何后端一起工作，但是该代码与Rails后端可以很好地协同工作。</font><font style="vertical-align: inherit;">Rails要求将arrayFormat设置为“ brackets”。</font></font></p>

<pre><code>import qs from "qs"<font></font>
<font></font>
function normalPost(url, params) {<font></font>
  var form = document.createElement("form");<font></font>
  form.setAttribute("method", "POST");<font></font>
  form.setAttribute("action", url);<font></font>
<font></font>
  const keyValues = qs<font></font>
    .stringify(params, { arrayFormat: "brackets", encode: false })<font></font>
    .split("&amp;")<font></font>
    .map(field =&gt; field.split("="));<font></font>
<font></font>
  keyValues.forEach(field =&gt; {<font></font>
    var key = field[0];<font></font>
    var value = field[1];<font></font>
    var hiddenField = document.createElement("input");<font></font>
    hiddenField.setAttribute("type", "hidden");<font></font>
    hiddenField.setAttribute("name", key);<font></font>
    hiddenField.setAttribute("value", value);<font></font>
    form.appendChild(hiddenField);<font></font>
  });<font></font>
  document.body.appendChild(form);<font></font>
  form.submit();<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>normalPost("/people/new", {<font></font>
      people: [<font></font>
        {<font></font>
          name: "Chris",<font></font>
          address: "My address",<font></font>
          dogs: ["Jordan", "Elephant Man", "Chicken Face"],<font></font>
          information: { age: 10, height: "3 meters" }<font></font>
        },<font></font>
        {<font></font>
          name: "Andrew",<font></font>
          address: "Underworld",<font></font>
          dogs: ["Doug", "Elf", "Orange"]<font></font>
        },<font></font>
        {<font></font>
          name: "Julian",<font></font>
          address: "In a hole",<font></font>
          dogs: ["Please", "Help"]<font></font>
        }<font></font>
      ]<font></font>
    });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生以下Rails参数：</font></font></p>

<pre><code>{"authenticity_token"=&gt;"...",<font></font>
 "people"=&gt;<font></font>
  [{"name"=&gt;"Chris", "address"=&gt;"My address", "dogs"=&gt;["Jordan", "Elephant Man", "Chicken Face"], "information"=&gt;{"age"=&gt;"10", "height"=&gt;"3 meters"}},<font></font>
   {"name"=&gt;"Andrew", "address"=&gt;"Underworld", "dogs"=&gt;["Doug", "Elf", "Orange"]},<font></font>
   {"name"=&gt;"Julian", "address"=&gt;"In a hole", "dogs"=&gt;["Please", "Help"]}]}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小红酱</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><a href="https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FormObject</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个选项。</font><font style="vertical-align: inherit;">但是，大多数浏览器现在不支持FormObject。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里有三个选择。</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标准JavaScript答案：使用框架！</font><font style="vertical-align: inherit;">大多数Ajax框架都会使您抽象出进行</font></font><a href="http://en.wikipedia.org/wiki/XMLHttpRequest" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XMLHTTPRequest</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> POST </font><font style="vertical-align: inherit;">的简便方法</font><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自己发出XMLHTTPRequest请求，将post传递到open方法而不是get中。</font><font style="vertical-align: inherit;">（有关更多信息，请参见</font></font><em><a href="http://www.openjs.com/articles/ajax_xmlhttp_using_post.php" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在XMLHTTPRequest（Ajax）</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font><em><a href="http://www.openjs.com/articles/ajax_xmlhttp_using_post.php" rel="noreferrer"><font style="vertical-align: inherit;">使用POST方法</font></a></em><font style="vertical-align: inherit;">。）</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过JavaScript，动态创建表单，添加操作，添加输入并提交。</font></font></p></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near小哥神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是rakesh的答案，但是支持数组（在表单中很常见）： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">普通的javascript： </font></font></p>

<pre><code>function post_to_url(path, params, method) {<font></font>
    method = method || "post"; // Set method to post by default, if not specified.<font></font>
<font></font>
    // The rest of this code assumes you are not using a library.<font></font>
    // It can be made less wordy if you use one.<font></font>
    var form = document.createElement("form");<font></font>
    form.setAttribute("method", method);<font></font>
    form.setAttribute("action", path);<font></font>
<font></font>
    var addField = function( key, value ){<font></font>
        var hiddenField = document.createElement("input");<font></font>
        hiddenField.setAttribute("type", "hidden");<font></font>
        hiddenField.setAttribute("name", key);<font></font>
        hiddenField.setAttribute("value", value );<font></font>
<font></font>
        form.appendChild(hiddenField);<font></font>
    }; <font></font>
<font></font>
    for(var key in params) {<font></font>
        if(params.hasOwnProperty(key)) {<font></font>
            if( params[key] instanceof Array ){<font></font>
                for(var i = 0; i &lt; params[key].length; i++){<font></font>
                    addField( key, params[key][i] )<font></font>
                }<font></font>
            }<font></font>
            else{<font></font>
                addField( key, params[key] ); <font></font>
            }<font></font>
        }<font></font>
    }<font></font>
<font></font>
    document.body.appendChild(form);<font></font>
    form.submit();<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哦，这是jquery版本：（略有不同的代码，但归结为同一件事）</font></font></p>

<pre><code>function post_to_url(path, params, method) {<font></font>
    method = method || "post"; // Set method to post by default, if not specified.<font></font>
<font></font>
    var form = $(document.createElement( "form" ))<font></font>
        .attr( {"method": method, "action": path} );<font></font>
<font></font>
    $.each( params, function(key,value){<font></font>
        $.each( value instanceof Array? value : [value], function(i,val){<font></font>
            $(document.createElement("input"))<font></font>
                .attr({ "type": "hidden", "name": key, "value": val })<font></font>
                .appendTo( form );<font></font>
        }); <font></font>
    } ); <font></font>
<font></font>
    form.appendTo( document.body ).submit(); <font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><a href="https://stackoverflow.com/questions/118693/how-do-you-dynamically-create-a-radio-button-in-javascript-that-works-in-all-br#120372"><font style="vertical-align: inherit;">此答案中</font></a></font><code>createElement</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">功能</font><font style="vertical-align: inherit;">，由于</font><a href="http://msdn.microsoft.com/en-us/library/ms534184(VS.85).aspx" rel="noreferrer"><font style="vertical-align: inherit;">IE的损坏（</font></a><font style="vertical-align: inherit;">通常使用</font><font style="vertical-align: inherit;">以下方法</font><font style="vertical-align: inherit;">创建的元素上</font><a href="http://msdn.microsoft.com/en-us/library/ms534184(VS.85).aspx" rel="noreferrer"><font style="vertical-align: inherit;">具有name属性）</font></a><font style="vertical-align: inherit;">，这是必需的</font><font style="vertical-align: inherit;">：</font></font><a href="https://stackoverflow.com/questions/118693/how-do-you-dynamically-create-a-radio-button-in-javascript-that-works-in-all-br#120372"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><a href="http://msdn.microsoft.com/en-us/library/ms534184(VS.85).aspx" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><code>document.createElement</code><font style="vertical-align: inherit;"></font></p>

<pre><code>function postToURL(url, values) {<font></font>
    values = values || {};<font></font>
<font></font>
    var form = createElement("form", {action: url,<font></font>
                                      method: "POST",<font></font>
                                      style: "display: none"});<font></font>
    for (var property in values) {<font></font>
        if (values.hasOwnProperty(property)) {<font></font>
            var value = values[property];<font></font>
            if (value instanceof Array) {<font></font>
                for (var i = 0, l = value.length; i &lt; l; i++) {<font></font>
                    form.appendChild(createElement("input", {type: "hidden",<font></font>
                                                             name: property,<font></font>
                                                             value: value[i]}));<font></font>
                }<font></font>
            }<font></font>
            else {<font></font>
                form.appendChild(createElement("input", {type: "hidden",<font></font>
                                                         name: property,<font></font>
                                                         value: value}));<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
    document.body.appendChild(form);<font></font>
    form.submit();<font></font>
    document.body.removeChild(form);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

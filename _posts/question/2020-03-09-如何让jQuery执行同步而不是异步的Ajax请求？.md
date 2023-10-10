---
layout: question
title:  如何让jQuery执行同步而不是异步的Ajax请求？
date:   2020-03-09T15:02:00.000Z
description: 我有一个提供标准扩展点的JavaScript小部件。其中之一是beforecreate功能。它应返回false以防止创建项目。我已经使用jQuery在...
img: 
author: 老丝Jim猴子
category: question
answer: 5
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个提供标准扩展点的JavaScript小部件。</font><font style="vertical-align: inherit;">其中之一是</font></font><code>beforecreate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能。</font><font style="vertical-align: inherit;">它应返回</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以防止创建项目。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经使用jQuery在此函数中添加了Ajax调用：</font></font></p>

<pre><code>beforecreate: function (node, targetNode, type, to) {<font></font>
  jQuery.get('http://example.com/catalog/create/' + targetNode.id + '?name=' + encode(to.inp[0].value),<font></font>
<font></font>
  function (result) {<font></font>
    if (result.isOk == false) <font></font>
        alert(result.message);<font></font>
  });<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我想防止我的小部件创建该项目，因此我应该</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在母函数中</font><font style="vertical-align: inherit;">返回</font><font style="vertical-align: inherit;">，而不是在回调中返回。</font><font style="vertical-align: inherit;">有没有一种方法可以使用jQuery或任何其他浏览器内API执行同步AJAX请求？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">仲羽蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Since the original question was about <code>jQuery.get</code>, it is worth mentioning here that (as mentioned <a href="https://stackoverflow.com/a/44172561/1526703">here</a>) one <strong>could</strong> use <code>async: false</code> in a <code>$.get()</code> but <strong>ideally avoid</strong> it since asynchronous <code>XMLHTTPRequest</code> is deprecated (and the browser may give a warning):</p>

<pre><code>$.get({<font></font>
  url: url,// mandatory<font></font>
  data: data,<font></font>
  success: success,<font></font>
  dataType: dataType,<font></font>
  async:false // to make it synchronous<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖前端逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>This is example:</p>

<pre><code>$.ajax({<font></font>
  url: "test.html",<font></font>
  async: false<font></font>
}).done(function(data) {<font></font>
   // Todo something..<font></font>
}).fail(function(xhr)  {<font></font>
   // Todo something..<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>function getURL(url){<font></font>
    return $.ajax({<font></font>
        type: "GET",<font></font>
        url: url,<font></font>
        cache: false,<font></font>
        async: false<font></font>
    }).responseText;<font></font>
}<font></font>
<font></font>
<font></font>
//example use<font></font>
var msg=getURL("message.php");<font></font>
alert(msg);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过调用来将jQuery的Ajax设置置于同步模式</font></font></p>

<pre><code>jQuery.ajaxSetup({async:false});
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后使用以下命令执行Ajax调用 </font></font><code>jQuery.get( ... );</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后再打开一次</font></font></p>

<pre><code>jQuery.ajaxSetup({async:true});
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想它的工作原理与@Adam所建议的一样，但对于希望重新配置其</font><font style="vertical-align: inherit;">语法</font></font><code>jQuery.get()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>jQuery.post()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更复杂的</font></font><code>jQuery.ajax()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法的</font><font style="vertical-align: inherit;">人可能会有所帮助</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端LEY米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优秀的解决方案！</font><font style="vertical-align: inherit;">我注意到，当我尝试实现它时，如果我在成功子句中返回了一个值，那么它将以未定义的形式返回。</font><font style="vertical-align: inherit;">我必须将其存储在变量中并返回该变量。</font><font style="vertical-align: inherit;">这是我想出的方法：</font></font></p>

<pre><code>function getWhatever() {<font></font>
  // strUrl is whatever URL you need to call<font></font>
  var strUrl = "", strReturn = "";<font></font>
<font></font>
  jQuery.ajax({<font></font>
    url: strUrl,<font></font>
    success: function(html) {<font></font>
      strReturn = html;<font></font>
    },<font></font>
    async:false<font></font>
  });<font></font>
<font></font>
  return strReturn;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

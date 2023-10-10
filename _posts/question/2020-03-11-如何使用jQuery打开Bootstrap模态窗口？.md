---
layout: question
title:  如何使用jQuery打开Bootstrap模态窗口？
date:   2020-03-11T03:33:56.000Z
description: 我正在使用Twitter Bootstrap模态窗口功能。当有人单击我的表单上的提交时，我想在单击表单中的“提交按钮”时显示模式窗口。<form id...
img: 
author: 乐米亚
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Twitter Bootstrap模态窗口功能。</font><font style="vertical-align: inherit;">当有人单击我的表单上的提交时，我想在单击表单中的“提交按钮”时显示模式窗口。</font></font></p>

<pre><code>&lt;form id="myform" class="form-wizard"&gt;<font></font>
    &lt;h2 class="form-wizard-heading"&gt;BootStap Wizard Form&lt;/h2&gt;<font></font>
    &lt;input type="text" value=""/&gt;<font></font>
    &lt;input type="submit"/&gt;<font></font>
&lt;/form&gt;<font></font>
<font></font>
&lt;!-- Modal --&gt;<font></font>
&lt;div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"&gt;<font></font>
    &lt;div class="modal-header"&gt;<font></font>
        &lt;button type="button" class="close" data-dismiss="modal" aria-hidden="true"&gt;×&lt;/button&gt;<font></font>
        &lt;h3 id="myModalLabel"&gt;Modal header&lt;/h3&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div class="modal-body"&gt;<font></font>
        &lt;p&gt;One fine body…&lt;/p&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div class="modal-footer"&gt;<font></font>
        &lt;button class="btn" data-dismiss="modal" aria-hidden="true"&gt;Close&lt;/button&gt;<font></font>
        &lt;button class="btn btn-primary"&gt;Save changes&lt;/button&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery的：</font></font></p>

<pre><code>$('#myform').on('submit', function(ev) {<font></font>
    $('#my-modal').modal({<font></font>
        show: 'false'<font></font>
    }); <font></font>
<font></font>
<font></font>
    var data = $(this).serializeObject();<font></font>
    json_data = JSON.stringify(data);<font></font>
    $("#results").text(json_data); <font></font>
    $(".modal-body").text(json_data); <font></font>
<font></font>
    // $("#results").text(data);<font></font>
<font></font>
    ev.preventDefault();<font></font>
});<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第602篇《如何使用jQuery打开Bootstrap模态窗口？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;script type="text/javascript"&gt;<font></font>
    $(function () {<font></font>
        $("mybtn").click(function () {<font></font>
            $("#my-modal").modal("show");<font></font>
        });<font></font>
    });<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Davaid</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;form id="myform" class="form-wizard"&gt;<font></font>
    &lt;h2 class="form-wizard-heading"&gt;BootStap Wizard Form&lt;/h2&gt;<font></font>
    &lt;input type="text" value=""/&gt;<font></font>
    &lt;input type="submit" id="submitButton"/&gt;<font></font>
&lt;/form&gt;<font></font>
<font></font>
&lt;!-- Modal --&gt;<font></font>
&lt;div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"&gt;<font></font>
    &lt;div class="modal-header"&gt;<font></font>
        &lt;button type="button" class="close" data-dismiss="modal" aria-hidden="true"&gt;×&lt;/button&gt;<font></font>
        &lt;h3 id="myModalLabel"&gt;Modal header&lt;/h3&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div class="modal-body"&gt;<font></font>
        &lt;p&gt;One fine body…&lt;/p&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div class="modal-footer"&gt;<font></font>
        &lt;button class="btn" data-dismiss="modal" aria-hidden="true"&gt;Close&lt;/button&gt;<font></font>
        &lt;button class="btn btn-primary"&gt;Save changes&lt;/button&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用下面的代码启动模式。</font></font></p>

<pre><code>$(document).ready(function(){<font></font>
    $("#submitButton").click(function(){<font></font>
        $("#myModal").modal();<font></font>
    });<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font></p>

<pre><code>$("#myModal").modal("toggle")
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要打开或关闭ID为myModal的模态。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果上述方法不起作用，则表明bootstrap.js已被其他js文件覆盖。</font><font style="vertical-align: inherit;">这是一个解决方案</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1：-将bootstrap.js移到底部，以便它将覆盖其他js文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2：-确保订单如下</font></font></p>

<pre><code>&lt;script src="plugins/jQuery/jquery-2.2.3.min.js"&gt;&lt;/script&gt;<font></font>
&lt;!-- Other js files --&gt;<font></font>
&lt;script src="plugins/jQuery/bootstrap.min.js"&gt;&lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪路易</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处查看完整的解决方案： </font></font></p>

<p><a href="http://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_modal_show&amp;stacked=h" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_modal_show&amp;stacked=h</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保按要求的顺序放置库以获得结果：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1-首先bootstrap.min.css 2- jquery.min.js 3- bootstrap.min.js</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（换句话说，必须在bootstrap.min.js之前调用jquery.min.js）</font></font></p>

<pre><code>    &lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"&gt;<font></font>
<font></font>
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"&gt;<font></font>
&lt;/script&gt; <font></font>
<font></font>
 &lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"&gt;&lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilTony泡芙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是在文档准备好后立即加载引导警报的方法。</font><font style="vertical-align: inherit;">这很容易，只需添加</font></font></p>

<pre><code> $(document).ready(function(){<font></font>
   $("#myModal").modal();<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">在W3Schools上</font><font style="vertical-align: inherit;">做了一个</font></font><a href="https://www.w3schools.com/code/tryit.asp?filename=FIXH7FBJ6Y6T" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html lang="en"&gt;<font></font>
&lt;head&gt;<font></font>
  &lt;title&gt;Bootstrap Example&lt;/title&gt;<font></font>
  &lt;meta charset="utf-8"&gt;<font></font>
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;<font></font>
  &lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"&gt;<font></font>
  &lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"&gt;&lt;/script&gt;<font></font>
  &lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"&gt;&lt;/script&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
<font></font>
&lt;div class="container"&gt;<font></font>
  &lt;h2&gt;Here is how to load a bootstrap modal as soon as the document is ready &lt;/h2&gt;<font></font>
  &lt;!-- Trigger the modal with a button --&gt;<font></font>
<font></font>
<font></font>
  &lt;!-- Modal --&gt;<font></font>
  &lt;div class="modal fade" id="myModal" role="dialog"&gt;<font></font>
    &lt;div class="modal-dialog"&gt;<font></font>
    <font></font>
      &lt;!-- Modal content--&gt;<font></font>
      &lt;div class="modal-content"&gt;<font></font>
        &lt;div class="modal-header"&gt;<font></font>
          &lt;button type="button" class="close" data-dismiss="modal"&gt;&amp;times;&lt;/button&gt;<font></font>
          &lt;h4 class="modal-title"&gt;Modal Header&lt;/h4&gt;<font></font>
        &lt;/div&gt;<font></font>
        &lt;div class="modal-body"&gt;<font></font>
          &lt;p&gt;Some text in the modal.&lt;/p&gt;<font></font>
        &lt;/div&gt;<font></font>
        &lt;div class="modal-footer"&gt;<font></font>
          &lt;button type="button" class="btn btn-default" data-dismiss="modal"&gt;Close&lt;/button&gt;<font></font>
        &lt;/div&gt;<font></font>
      &lt;/div&gt;<font></font>
      <font></font>
    &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
  <font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
$(document).ready(function(){<font></font>
   $("#myModal").modal();<font></font>
});<font></font>
&lt;/script&gt;<font></font>
<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim理查德</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，您可以通过数据使用属性</font></font></p>

<pre><code>&lt;button type="button" data-toggle="modal" data-target="#myModal"&gt;Launch modal&lt;/button&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，您无需编写javascript。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在此处查看更多信息：</font><a href="http://getbootstrap.com/2.3.2/javascript.html#modals" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://getbootstrap.com/2.3.2/javascript.html#modals" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//getbootstrap.com/2.3.2/javascript.html#modals</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

---
layout: question
title:  在jQuery中创建div元素
date:   2020-03-09T12:42:39.000Z
description:                                                                          ...
img: 
author: 乐米亚
category: question
answer: 12
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
                            <a href="/questions/268490/jquery-document-createelement-equivalent" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery document.createElement是否等效？</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （13个回答）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2017-12-06 22：48：01Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建</font><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第254篇《在jQuery中创建div元素》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin神奇宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>You can use <code>.add()</code> to create a new <strong><em>jQuery</em></strong> <em>object</em> and add to the targeted element. Use chaining then to proceed further.</p>

<p>For eg <a href="https://api.jquery.com/add/" rel="nofollow">jQueryApi</a>: </p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>$( "div" ).css( "border", "2px solid red" )<font></font>
  .add( "p" )<font></font>
  .css( "background", "yellow" );</code></pre>
<pre class="snippet-code-css lang-css prettyprint-override"><code> div {<font></font>
    width: 60px;<font></font>
    height: 60px;<font></font>
    margin: 10px;<font></font>
    float: left;<font></font>
  }</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"&gt;&lt;/script&gt;<font></font>
&lt;div&gt;&lt;/div&gt;<font></font>
&lt;div&gt;&lt;/div&gt;<font></font>
&lt;div&gt;&lt;/div&gt;<font></font>
&lt;div&gt;&lt;/div&gt;<font></font>
&lt;div&gt;&lt;/div&gt;<font></font>
&lt;div&gt;&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>How about this? Here, <code>pElement</code> refers to the element you want this <code>div</code> inside (to be a child of! :).</p>

<pre><code>$("pElement").append("&lt;div&gt;&lt;/div");
</code></pre>

<p>You can easily add anything more to that <code>div</code> in the string - Attributes, Content, you name it. Do note, for attribute values, you need to use the right quotation marks. </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小小小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I hope that helps code. :) (I use)</p>

<pre><code>function generateParameterForm(fieldName, promptText, valueType) {<font></font>
    //&lt;div class="form-group"&gt;<font></font>
    //&lt;label for="yyy" class="control-label"&gt;XXX&lt;/label&gt;<font></font>
    //&lt;input type="text" class="form-control" id="yyy" name="yyy"/&gt;<font></font>
    //&lt;/div&gt;<font></font>
<font></font>
    // Add new div tag<font></font>
    var form = $("&lt;div/&gt;").addClass("form-group");<font></font>
<font></font>
    // Add label for prompt text<font></font>
    var label = $("&lt;label/&gt;").attr("for", fieldName).addClass("control-label").text(promptText);<font></font>
<font></font>
    // Add text field<font></font>
    var input = $("&lt;input/&gt;").attr("type", "text").addClass("form-control").addClass(valueType).attr("id", fieldName).attr("name", fieldName);<font></font>
<font></font>
    // lbl and inp =&gt; form<font></font>
    $(form).append(label).append(input);<font></font>
<font></font>
    return $(form);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I think this is the best way to add a div:</p>

<p>To append a test div to the div element with ID div_id:</p>

<pre><code>$("#div_id").append("div name along with id will come here, for example, test");
</code></pre>

<p>Now append <a href="http://en.wikipedia.org/wiki/HTML" rel="nofollow">HTML</a> to this added test div:</p>

<pre><code>$("#test").append("Your HTML");
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>If it is just an empty div, this is sufficient:</p>

<pre><code>$("#foo").append("&lt;div&gt;")
</code></pre>

<p>or</p>

<pre><code>$("#foo").append("&lt;div/&gt;")
</code></pre>

<p>It gives the same result.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidHarry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>document.createElement('div');
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>alternatively to append()
you can also use <code>appendTo()</code> which has a different syntax: </p>

<pre><code>$("#foo").append("&lt;div&gt;hello world&lt;/div&gt;");<font></font>
$("&lt;div&gt;hello world&lt;/div&gt;").appendTo("#foo");    <font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小卡卡西小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>All these worked for me,</p>

<p>HTML part:</p>

<pre><code>&lt;div id="targetDIV" style="border: 1px solid Red"&gt;<font></font>
    This text is surrounded by a DIV tag whose id is "targetDIV".<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p>JavaScript code:</p>

<pre><code>//Way 1: appendTo()<font></font>
&lt;script type="text/javascript"&gt;<font></font>
    $("&lt;div&gt;hello stackoverflow users&lt;/div&gt;").appendTo("#targetDIV"); //appendTo: Append at inside bottom<font></font>
&lt;/script&gt;<font></font>
<font></font>
//Way 2: prependTo()<font></font>
&lt;script type="text/javascript"&gt;<font></font>
    $("&lt;div&gt;Hello, Stack Overflow users&lt;/div&gt;").prependTo("#targetDIV"); //prependTo: Append at inside top<font></font>
&lt;/script&gt;<font></font>
<font></font>
//Way 3: html()<font></font>
&lt;script type="text/javascript"&gt;<font></font>
    $("#targetDIV").html("&lt;div&gt;Hello, Stack Overflow users&lt;/div&gt;"); //.html(): Clean HTML inside and append<font></font>
&lt;/script&gt;<font></font>
<font></font>
//Way 4: append()<font></font>
&lt;script type="text/javascript"&gt;<font></font>
    $("#targetDIV").append("&lt;div&gt;Hello, Stack Overflow users&lt;/div&gt;"); //Same as appendTo<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Green</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>A short way of creating div is</p>

<pre><code>var customDiv = $("&lt;div/&gt;");
</code></pre>

<p>Now the custom div  can be appended to any other div.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐LEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>d = document.createElement('div');<font></font>
$(d).addClass(classname)<font></font>
    .html(text)<font></font>
    .appendTo($("#myDiv")) //main div<font></font>
.click(function () {<font></font>
    $(this).remove();<font></font>
})<font></font>
    .hide()<font></font>
    .slideToggle(300)<font></font>
    .delay(2500)<font></font>
    .slideToggle(300)<font></font>
    .queue(function () {<font></font>
    $(this).remove();<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>div = $("&lt;div&gt;").html("Loading......");<font></font>
$("body").prepend(div);    <font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaGil</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>$("&lt;div/&gt;").appendTo("div#main");
</code></pre>

<p>will append a blank div to <code>&lt;div id="main"&gt;&lt;/div&gt;</code></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

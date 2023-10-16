---
layout: question
title:  如何在不通过jQuery提交的情况下强制进行html5表单验证
date:   2020-03-26T08:38:17.000Z
description: 我的应用程序中有此表单，我将通过AJAX提交它，但是我想使用HTML5进行客户端验证。因此，我希望能够通过jQuery强制进行表单验证。我想触发验证而...
img: 
author: 小宇宙
category: question
answer: 3
tags: jQuery HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的应用程序中有此表单，我将通过AJAX提交它，但是我想使用HTML5进行客户端验证。</font><font style="vertical-align: inherit;">因此，我希望能够通过jQuery强制进行表单验证。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想触发验证而不提交表单。</font><font style="vertical-align: inherit;">可能吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3775篇《如何在不通过jQuery提交的情况下强制进行html5表单验证》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天神乐</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不需要jQuery即可实现。</font><font style="vertical-align: inherit;">在您的表单中添加：</font></font></p>

<pre><code>onsubmit="return buttonSubmit(this)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或在JavaScript中：</font></font></p>

<pre><code>myform.setAttribute("onsubmit", "return buttonSubmit(this)");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的</font></font><code>buttonSubmit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数（或任何您称呼的函数）中，您可以使用AJAX提交表单。</font></font><code>buttonSubmit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅当您的表单通过HTML5验证时才会被调用。</font></font></p>

<p>In case this helps anyone, here is my <code>buttonSubmit</code> function:</p>

<pre><code>function buttonSubmit(e)<font></font>
{<font></font>
    var ajax;<font></font>
    var formData = new FormData();<font></font>
    for (i = 0; i &lt; e.elements.length; i++)<font></font>
    {<font></font>
        if (e.elements[i].type == "submit")<font></font>
        {<font></font>
            if (submitvalue == e.elements[i].value)<font></font>
            {<font></font>
                submit = e.elements[i];<font></font>
                submit.disabled = true;<font></font>
            }<font></font>
        }<font></font>
        else if (e.elements[i].type == "radio")<font></font>
        {<font></font>
            if (e.elements[i].checked)<font></font>
                formData.append(e.elements[i].name, e.elements[i].value);<font></font>
        }<font></font>
        else<font></font>
            formData.append(e.elements[i].name, e.elements[i].value);<font></font>
    }<font></font>
    formData.append("javascript", "javascript");<font></font>
    var action = e.action;<font></font>
    status = action.split('/').reverse()[0] + "-status";<font></font>
    ajax = new XMLHttpRequest();<font></font>
    ajax.addEventListener("load", manageLoad, false);<font></font>
    ajax.addEventListener("error", manageError, false);<font></font>
    ajax.open("POST", action);<font></font>
    ajax.send(formData);<font></font>
    return false;<font></font>
}<font></font>
</code></pre>

<p>Some of my forms contain multiple submit buttons, hence this line <code>if (submitvalue == e.elements[i].value)</code>. I set the value of <code>submitvalue</code> using a click event.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖A</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><pre><code>    if $("form")[0].checkValidity()<font></font>
      $.ajax(<font></font>
        url: "url"<font></font>
        type: "post"<font></font>
        data: {<font></font>
<font></font>
        }<font></font>
        dataType: "json"<font></font>
        success: (data) -&gt;<font></font>
<font></font>
      )<font></font>
    else<font></font>
      #important<font></font>
      $("form")[0].reportValidity()<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自：</font></font><a href="http://zhishu.huati365.com/read/HTML/%E5%9C%A8Ajax%E8%AF%B7%E6%B1%82%E4%B8%AD%E4%BD%BF%E7%94%A8HTML5%E8%87%AA%E5%AE%9A%E4%B9%89%E9%AA%8C%E8%AF%81" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">html5表单验证</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到了适合我的解决方案。</font><font style="vertical-align: inherit;">只需像这样调用javascript函数即可：</font></font></p>

<p><code>action="javascript:myFunction();"</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后您就进行了html5验证...非常简单:-)</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>

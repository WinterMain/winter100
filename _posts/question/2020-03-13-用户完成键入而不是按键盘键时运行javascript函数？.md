---
layout: question
title:  用户完成键入而不是按键盘键时运行javascript函数？
date:   2020-03-13T10:15:58.000Z
description: 我想在用户完成在文本框中的输入后触发ajax请求。我不希望它在用户每次输入字母时都运行该函数，因为这将导致大量的ajax请求，但是我也不希望他们也必须按下...
img: 
author: 
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在用户完成在文本框中的输入后触发ajax请求。</font><font style="vertical-align: inherit;">我不希望它在用户每次输入字母时都运行该函数，因为这将导致大量的ajax请求，但是我也不希望他们也必须按下Enter键。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以让我检测用户何时完成键入，然后执行ajax请求？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里使用jQuery！</font><font style="vertical-align: inherit;">戴夫</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1515篇《用户完成键入而不是按键盘键时运行javascript函数？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一旦检测到对文本框的关注，请在按键上进行超时检查，并在每次触发时将其重置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">超时完成后，请执行ajax请求。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙路易</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么不只使用onfocusout？</font></font></p>

<p><a href="https://www.w3schools.com/jsreF/event_onfocusout.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.w3schools.com/jsreF/event_onfocusout.asp</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果是表单，他们将始终留下每个输入字段的焦点，以便单击“提交”按钮，因此您知道没有任何输入会错过调用其onfocusout事件处理程序的机会。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小小小小</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果用户有必要离开该领域，可以在Javascript中使用“ onBlur”代替Onchange</font></font></p>

<pre><code>  &lt;TextField id="outlined-basic"  variant="outlined" defaultValue={CardValue} onBlur={cardTitleFn} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果没有必要，设置计时器将是一个不错的选择。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY逆天</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用onblur事件来检测文本框何时失去焦点：</font><a href="https://developer.mozilla.org/en/DOM/element.onblur" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：
 </font></font><a href="https://developer.mozilla.org/en/DOM/element.onblur" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/en/DOM/element.onblur</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这与“停止键入”不同，如果您担心用户键入一堆东西然后坐在那里而文本框仍处于焦点的情况。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为此，我建议将setTimeout绑定到onclick事件，并假设经过x次没有按键输入的时间之后，用户已停止键入。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅老丝</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我觉得该</font></font><code>input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件</font><font style="vertical-align: inherit;">的解决方案有点简单</font><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint-override"><code>var typingTimer;<font></font>
var doneTypingInterval = 500;<font></font>
<font></font>
$("#myInput").on("input", function () {<font></font>
    window.clearTimeout(typingTimer);<font></font>
    typingTimer = window.setTimeout(doneTyping, doneTypingInterval);<font></font>
});<font></font>
<font></font>
function doneTyping () {<font></font>
    // code here<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony樱番长</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为在这种情况下，keyDown事件不是必需的（请告诉我为什么我错了）。</font><font style="vertical-align: inherit;">在我的（非jquery）脚本中，类似的解决方案如下所示：</font></font></p>

<pre><code>var _timer, _timeOut = 2000; <font></font>
<font></font>
<font></font>
<font></font>
function _onKeyUp(e) {<font></font>
    clearTimeout(_timer);<font></font>
    if (e.keyCode == 13) {      // close on ENTER key<font></font>
        _onCloseClick();<font></font>
    } else {                    // send xhr requests<font></font>
        _timer = window.setTimeout(function() {<font></font>
            _onInputChange();<font></font>
        }, _timeOut)<font></font>
    }<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我对Stack Overflow的第一个答复，所以我希望有一天能对某人有所帮助：）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near小哥西门</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，严格来说，不能，因为计算机无法猜测用户何时完成输入。</font><font style="vertical-align: inherit;">当然，您可以在启动按键时触发一个计时器，并在以后的每次按键启动时将其重置。</font><font style="vertical-align: inherit;">如果计时器到期，则用户在计时器持续时间内没有输入-您可以称其为“完成输入”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您希望用户在输入时会暂停，则无法知道何时完成操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（除非您当然不能从数据中分辨出何时完成） </font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

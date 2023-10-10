---
layout: question
title:  如何处理ReactJS中的onKeyPress事件？
date:   2020-03-10T14:37:15.000Z
description: 如何使onKeyPress事件在ReactJS中起作用？当enter (keyCode=13)按下时，它应该发出警报。var Test = React...
img: 
author: 乐米亚
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使</font></font><code>onKeyPress</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件在ReactJS中起作用？</font><font style="vertical-align: inherit;">当</font></font><strong><code>enter (keyCode=13)</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按下</font><font style="vertical-align: inherit;">时，它应该发出警报</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>var Test = React.createClass({<font></font>
    add: function(event){<font></font>
        if(event.keyCode == 13){<font></font>
            alert('Adding....');<font></font>
        }<font></font>
    },<font></font>
    render: function(){<font></font>
        return(<font></font>
            &lt;div&gt;<font></font>
                &lt;input type="text" id="one" onKeyPress={this.add} /&gt;    <font></font>
            &lt;/div&gt;<font></font>
        );<font></font>
    }<font></font>
});<font></font>
<font></font>
React.render(&lt;Test /&gt;, document.body);<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO逆天L</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">晚了聚会，但我试图在TypeScript中完成此操作并提出了以下建议：</font></font></p>

<pre><code>&lt;div onKeyPress={(e: KeyboardEvent&lt;HTMLDivElement&gt;) =&gt; console.log(e.key)}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将打印在屏幕上的确切键。</font><font style="vertical-align: inherit;">因此，如果要在div处于焦点时响应所有“ a”按下，则可以将e.key与“ a”进行比较-字面上是if（e.key ===“ a”）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小卤蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要将动态参数传递给函数，请在动态输入内部：</font></font></p>

<pre><code>&lt;Input <font></font>
  onKeyPress={(event) =&gt; {<font></font>
    if (event.key === "Enter") {<font></font>
      this.doSearch(data.searchParam)<font></font>
    }<font></font>
  }}<font></font>
  placeholder={data.placeholderText} /&gt;<font></font>
/&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这对某人有帮助。</font><font style="vertical-align: inherit;">:)</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L西里</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React不会给您传递您可能会想到的那种事件。</font><font style="vertical-align: inherit;">相反，它正在传递</font></font><a href="https://facebook.github.io/react/docs/events.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">综合事件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在简短的测试中，</font></font><code>event.keyCode == 0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">永远都是正确的。</font><font style="vertical-align: inherit;">你想要的是</font></font><code>event.charCode</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>render: function(){<font></font>
     return(<font></font>
         &lt;div&gt;<font></font>
           &lt;input type="text" id="one" onKeyDown={this.add} /&gt;<font></font>
        &lt;/div&gt;<font></font>
     );<font></font>
}<font></font>
</code></pre>

<p><code>onKeyDown</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检测</font></font><code>keyCode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

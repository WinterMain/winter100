---
layout: question
title:  如何在jQuery中定义多个CSS属性？
date:   2020-03-18T07:56:09.000Z
description: jQuery是否有任何语法方法来定义多个CSS属性，而无需像这样将所有内容都放在右边：$("#message").css("width", "550p...
img: 
author: 梅Tom猿
category: question
answer: 3
tags: jQuery的 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery是否有任何语法方法来定义多个CSS属性，而无需像这样将所有内容都放在右边：</font></font></p>

<pre><code>$("#message").css("width", "550px").css("height", "300px").css("font-size", "8pt");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有20条这样的代码，那么您将很难阅读，有什么解决方案吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，通过jQuery API，jQuery可以理解并返回正确的值 </font></font></p>

<pre><code>.css({ "background-color": "#ffe", "border-left": "5px solid #ccc" }) 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和 </font></font></p>

<pre><code>.css({backgroundColor: "#ffe", borderLeft: "5px solid #ccc" }).
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，使用DOM表示法时，属性名称周围的引号是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可选的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但对于CSS表示法，</font><font style="vertical-align: inherit;">由于名称中的连字符，因此</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">必须</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">引号</font><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇伽罗Itachi</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><strong>Script</strong></p>

<pre><code> $(IDname).css({<font></font>
    "background":"#000",<font></font>
    "color":"#000"<font></font>
})<font></font>
</code></pre>

<p><strong>Html</strong></p>

<pre><code>&lt;div id="hello"&gt;&lt;/div&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁A</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>You Can Try This</p>

<pre><code>$("p:first").css("background-color", "#B2E0FF").css("border", "3px solid red");
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易猴子Pro</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>Try this</p>

<pre><code>$(element).css({<font></font>
    "propertyName1":"propertyValue1",<font></font>
    "propertyName2":"propertyValue2"<font></font>
})<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

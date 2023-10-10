---
layout: question
title:  jQuery获取textarea文本
date:   2020-03-12T10:37:40.000Z
description: 最近，我开始使用jQuery，并且已经关注了一些教程。现在，我觉得使用它有点能力（这很简单），而且我认为如果能够在网页上制作一个“控制台”，那就太酷了（例...
img: 
author: 做个有心人
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最近，我开始使用jQuery，并且已经关注了一些教程。</font><font style="vertical-align: inherit;">现在，我觉得使用它有点能力（这很简单），而且我认为如果能够在网页上制作一个“控制台”，那就太酷了（例如，像在</font></font><a href="http://en.wiktionary.org/wiki/first-person_shooter" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FPS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">游戏中</font><font style="vertical-align: inherit;">一样按下“键” </font><font style="vertical-align: inherit;">，等），然后将Ajax本身返回到服务器以进行处理。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我本来以为最好的方法是将文本放入文本区域内，然后将其拆分，或者我应该使用keyup事件，将返回的键码转换为ASCII字符，将该字符附加到字符串中并将该字符串发送到服务器（然后清空字符串）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找不到有关从文本区域获取文本的任何信息，我所得到的只是键盘信息。</font><font style="vertical-align: inherit;">另外，如何将返回的键码转换为ASCII字符？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1290篇《jQuery获取textarea文本》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan逆天前端</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该有一个仅包含控制台消息的div，即先前的命令及其输出。</font><font style="vertical-align: inherit;">在下面放置一个输入或文本区域，仅保留您正在键入的命令。</font></font></p>

<pre><code>-------------------------------<font></font>
| consle output ...           |<font></font>
| more output                 |<font></font>
| prevous commands and data   |<font></font>
-------------------------------<font></font>
&gt; This is an input box.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，您只需将输入框的值发送到服务器进行处理，然后将结果附加到控制台消息div。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ㄏ囧囧ㄟ</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，它是value属性</font></font></p>

<pre><code>testArea.value
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还是您需要的东西缺少我了？</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">做个有心人</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现可以使用以下函数将事件的keyCode转换为字符：</font></font></p>

<pre><code>var char = String.fromCharCode(v_code);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后从那里将字符附加到字符串，然后按Enter键将字符串发送到服务器。</font><font style="vertical-align: inherit;">很抱歉，我的问题似乎有点晦涩难懂，而且标题的含义几乎完全是题外话，这是凌晨，而且我还没有吃早餐;）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢您的帮助。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

---
layout: question
title:  使用JavaScript从CSS元素中删除CSS类（不使用jQuery）
date:   2020-03-12T02:52:32.000Z
description:                                                                          ...
img: 
author: 西里A
category: question
answer: 4
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
                            <a href="/questions/195951/how-can-i-change-an-elements-class-with-javascript" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用JavaScript更改元素的类？</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （30个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2014-08-12 16：58：50Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谁能让我知道如何仅使用JavaScript删除元素上的类？</font><font style="vertical-align: inherit;">请不要给我jQuery的答案，因为我无法使用它，对此我一无所知。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第902篇《使用JavaScript从CSS元素中删除CSS类（不使用jQuery）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>There is also <code>$.toggleClass</code>, <code>$.addClass</code>, and <code>$.removeClass</code>. For documentation, take a look at <a href="http://api.jquery.com/toggleClass/" rel="nofollow">http://api.jquery.com/toggleClass/</a>.</p>

<p>Take a look at this <a href="http://jsfiddle.net/7jmsH/" rel="nofollow">jsFiddle example</a> to see it in action.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid神无</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>I use this JS snippet code :</p>

<p>First of all, I reach all the classes then according to index of my target class, I set <strong>className = ""</strong>.</p>

<pre><code>Target = document.getElementsByClassName("yourClass")[1];<font></font>
Target.className="";<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小小神乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>div.classList.add("foo");<font></font>
div.classList.remove("foo");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息，</font><a href="https://developer.mozilla.org/en-US/docs/Web/API/element.classList"><font style="vertical-align: inherit;">请</font></a><font style="vertical-align: inherit;">访问</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/element.classList"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/en-US/docs/Web/API/element.classList</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西达蒙西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是将此功能引入所有DOM元素的方法：</font></font></p>

<pre><code>HTMLElement.prototype.removeClass = function(remove) {<font></font>
    var newClassName = "";<font></font>
    var i;<font></font>
    var classes = this.className.split(" ");<font></font>
    for(i = 0; i &lt; classes.length; i++) {<font></font>
        if(classes[i] !== remove) {<font></font>
            newClassName += classes[i] + " ";<font></font>
        }<font></font>
    }<font></font>
    this.className = newClassName;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

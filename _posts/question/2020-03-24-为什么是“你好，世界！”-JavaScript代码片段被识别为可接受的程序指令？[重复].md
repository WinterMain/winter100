---
layout: question
title:  为什么是“你好，世界！” JavaScript代码片段被识别为可接受的程序指令？\[重复\]
date:   2020-03-24T11:01:08.000Z
description:                                                                          ...
img: 
author: 飞云Tom
category: question
answer: 2
tags: JavaScript Node.js
topic: Node.js
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
                            <b>This question already has answers here</b>:
                            
                        </div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/43943699/why-does-this-code-written-backwards-print-hello-world" dir="ltr">Why does this code, written backwards, print “Hello World!”</a>
                                <span class="question-originals-answer-count">
                                    (4 answers)
                                </span>
                        </div>
                                <div class="grid--cell mb0 mt8">Closed <span title="2020-01-23 12：02：08Z" class="relativetime">2 months ago</span>.</div>
            </div>
                    </aside>
<p>Recently a coworker showed this fragment of JavaScript code: </p>

<pre class="lang-js prettyprint-override"><code>greet = "‮".toString.bind("hello world!")
</code></pre>

<p>If you paste this inside the Developer Console and execute it will print a "Hello, World!" message:</p>

<pre class="lang-js prettyprint-override"><code>&gt;&gt; console.log(greet())<font></font>
hello, world!<font></font>
</code></pre>

<p>Another interesting thing I found is that if you paste the same <code>greet</code> code inside Node.js REPL it will automatically transpile it to a "readable" format.</p>

<p>How does this work? Why is this behaviour possible in a browser and why does Node.js automatically format it?</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3701篇《为什么是“你好，世界！” JavaScript代码片段被识别为可接受的程序指令？\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim西里</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际的代码是：</font></font></p>

<pre><code>greet = "...".toString.bind("hello world!")
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">凡</font></font><code>...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在字符串字面量是字节</font></font><code>E2 80 AE</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是自右至左的优先Unicode字符，这会导致其后的所有反向显示。</font><font style="vertical-align: inherit;">它用于编写从右到左的语言，例如阿拉伯语或希伯来语。</font></font></p>

<p><a href="https://i.stack.imgur.com/m9zTd.png" rel="noreferrer"><img src="https://i.stack.imgur.com/m9zTd.png" alt="十六进制编辑器是您的朋友"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您有隐藏的字符使文本反转。</font><font style="vertical-align: inherit;">在这里您可以看到原始字符：</font><a href="https://www.soscisurvey.de/tools/view-chars.php" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://www.soscisurvey.de/tools/view-chars.php" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.soscisurvey.de/tools/view-chars.php</font></font></a></p>

<p><a href="https://i.stack.imgur.com/bj9N3.png" rel="noreferrer"><img src="https://i.stack.imgur.com/bj9N3.png" alt="在此处输入图片说明"></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>

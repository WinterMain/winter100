---
layout: question
title:  打印JavaScript对象的内容？\[重复\]
date:   2020-03-16T07:06:53.000Z
description:                                                                          ...
img: 
author: 宝儿Sam
category: question
answer: 11
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
                            <a href="/questions/957537/how-can-i-display-a-javascript-object" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何显示JavaScript对象？</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （36个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2015-04-19 10：08：14Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，如果我们仅使用</font></font><code>alert(object);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它，它将显示为</font></font><code>[object Object]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如何在JavaScript中打印对象的所有内容参数？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1778篇《打印JavaScript对象的内容？\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚L</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Internet Explorer 8具有类似于</font><font style="vertical-align: inherit;">Firefox的</font></font><a href="http://getfirebug.com" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firebug的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发人员工具</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">Opera具有Opera DragonFly，而Google Chrome浏览器也具有开发者工具（Shift + Ctrl + J）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是在IE6-8中调试JavaScript的更详细的答案：
 </font></font><a href="https://stackoverflow.com/questions/780059/using-the-ie8-developer-tools-to-debug-earlier-ie-versions/801547#801547"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用IE8“开发人员工具”调试早期的IE版本</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">6的不行</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用Prototype的Object.inspect（）方法，该方法“返回对象的面向调试的字符串表示形式”。</font></font></p>

<p><a href="http://api.prototypejs.org/language/Object/inspect/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://api.prototypejs.org/language/Object/inspect/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了类似的问题，其原因是我利用Ajax来获取数据。</font><font style="vertical-align: inherit;">在这种情况下，我进行了两个异步ajax调用。</font><font style="vertical-align: inherit;">在一个我只是返回字符串味精，并显示在警报。</font><font style="vertical-align: inherit;">在第二个ajax调用中，我以json格式获取arraylist并在js中对其进行解码。</font><font style="vertical-align: inherit;">因此，我的第二个请求用于首先处理，并且我收到了对象的警报。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，请检查。</font><font style="vertical-align: inherit;">1.警报应包含字符串。</font><font style="vertical-align: inherit;">2.如果您获得arrayList或任何其他Object对其进行解码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">祝一切顺利！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Gil</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用来自</font></font><a href="http://www.json.org/js.html" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.json.org/js.html的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> json.js </font><font style="vertical-align: inherit;">将json数据更改为字符串数据。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Gil樱</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在其原型中为对象提供自己的toString方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy小卤蛋凯</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该考虑使用</font></font><a href="http://getfirebug.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FireBug</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行JavaScript调试。</font><font style="vertical-align: inherit;">它使您可以交互式检查所有变量，甚至逐步执行功能。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony樱番长</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用dir（object）。</font><font style="vertical-align: inherit;">或者，您始终可以下载</font></font><a href="http://getfirebug.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox的Firebug</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（非常有用）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilTony泡芙</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Firefox，</font></font><code>alert(object.toSource())</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则只需进行简单的调试即可。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony飞云</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打印您可以使用的对象的内容</font></font></p>

<pre><code>console.log(obj_str);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在如下所示的控制台中查看结果。</font></font></p>

<pre><code>Object {description: "test"} 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于打开的控制台，请在Chrome浏览器中按F12键，您会在调试模式下找到控制台选项卡。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙阿飞JinJin</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缩进的JSON对象将为您提供非常好的输出：</font></font></p>

<pre><code>alert(JSON.stringify(YOUR_OBJECT_HERE, null, 4));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二个参数会在返回字符串之前更改字符串的内容。</font><font style="vertical-align: inherit;">第三个参数指定要用作可读性的空白空间。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁斯丁</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果只想使用对象的字符串表示形式，则可以使用</font><a href="http://json.org/js.html" rel="noreferrer"><font style="vertical-align: inherit;">JSON库</font></a><font style="vertical-align: inherit;">来使用该</font></font><code>JSON.stringify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数</font><font style="vertical-align: inherit;">。</font></font><a href="http://json.org/js.html" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>

---
layout: question
title:  如何使用Firebug或类似工具调试JavaScript / jQuery事件绑定？
date:   2020-03-11T15:25:06.000Z
description: 我需要调试一个使用jQuery进行一些相当复杂和混乱的DOM操作的Web应用程序。某一时刻，某些与特定元素绑定的事件并未触发，只是停止工作。如果我有能...
img: 
author: Itachi小卤蛋凯
category: question
answer: 10
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要调试一个使用jQuery进行一些相当复杂和混乱的</font></font><a href="http://en.wikipedia.org/wiki/Document_Object_Model" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOM</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">操作</font><font style="vertical-align: inherit;">的Web应用程序</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">某一时刻，某些与特定元素绑定的事件并未触发，只是停止工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我有能力编辑应用程序源代码，那么我将向下钻取并添加一堆</font></font><a href="http://en.wikipedia.org/wiki/Firebug_%28software%29" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firebug</font></font></a> <code>console.log()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句和注释/取消注释代码段，以试图找出问题所在。</font><font style="vertical-align: inherit;">但是，假设我无法编辑应用程序代码，并且需要使用Firebug或类似工具完全在Firefox中工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firebug非常擅长让我浏览和操作DOM。</font><font style="vertical-align: inherit;">不过，到目前为止，我还无法弄清楚如何使用Firebug进行事件调试。</font><font style="vertical-align: inherit;">具体来说，我只想查看在给定时间绑定到特定元素的事件处理程序的列表（使用Firebug JavaScript断点来跟踪更改）。</font><font style="vertical-align: inherit;">但是Firebug无法查看绑定事件，或者我太笨了，找不到它。</font><font style="vertical-align: inherit;">:-)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么建议或想法吗？</font><font style="vertical-align: inherit;">理想情况下，我只想查看和编辑绑定到元素的事件，就像今天编辑DOM一样。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿阿飞Tom</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><a href="https://blog.getfirebug.com/2014/06/10/firebug-2-0/#dom-events-inspector" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firebug 2</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在确实包含DOM事件调试/检查。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC38880545</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>According to <a href="http://groups.google.com/group/firebug/browse_thread/thread/607400c545ce6048?pli=1" rel="nofollow noreferrer" title="这个线程">this thread</a>, there is no way in Firebug to view what events are attached to listeners on a DOM element.</p>

<p>It looks like the best you can do is either what tj111 suggests, or you could right-click the element in the HTML viewer, and click "Log Events" so you can see which events are firing for a particular DOM element.  I suppose one could do that to see what events <em>could</em> be firing off particular functions.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小小神乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还在</font><font style="vertical-align: inherit;">Chrome存储区中</font><font style="vertical-align: inherit;">找到了</font></font><a href="https://chrome.google.com/webstore/detail/dbhhnnnpaeobfddmlalhnehgclcmjimi" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery Debugger</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以单击一个dom项目，它将显示绑定到该事件的所有事件以及回调函数。</font><font style="vertical-align: inherit;">我正在调试一个无法正确删除事件的应用程序，这帮助我在几分钟之内找到了它。</font><font style="vertical-align: inherit;">显然，这是针对Chrome的，而不是针对Firefox的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥阿飞神奇</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><code>ev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 元素旁边的图标</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Firefox开发人员工具的“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查器”</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">面板中，列出了绑定到元素的所有事件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先使用</font></font><kbd>Ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Shift</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font><font style="vertical-align: inherit;">选择一个元素</font></font><kbd>C</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，例如Stack Overflow的upvote箭头。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击</font></font><code>ev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素右侧</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">图标，然后将打开一个对话框：</font></font></p>

<p><a href="https://i.stack.imgur.com/9QYSA.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/9QYSA.png" alt="活动工具提示"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击</font></font><code>||</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所需事件</font><font style="vertical-align: inherit;">的暂停</font><font style="vertical-align: inherit;">符号，这将在处理程序行上打开调试器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以像往常一样在调试器中放置一个断点，方法是单击该行的左边界。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在以下</font><a href="https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_event_listeners" rel="nofollow noreferrer"><font style="vertical-align: inherit;">网址中</font></a><font style="vertical-align: inherit;">提到了这一点：</font><a href="https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_event_listeners" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_event_listeners" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_event_listeners</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，我找不到一种可以与Prettyfcation完美配合的方法，它似乎只是最小化了：</font></font><a href="https://stackoverflow.com/questions/3216583/beautify-javascript-and-css-in-firebug/33753982#33753982"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在Firefox / Firebug中美化Javascript和CSS？</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Firefox 42上测试。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一Green</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来FireBug小组正在研究EventBug扩展。</font><font style="vertical-align: inherit;">它将在FireBug-Events中添加另一个面板。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“事件面板将按事件类型分组列出页面上的所有事件处理程序。对于每种事件类型，您都可以打开以查看侦听器绑定的元素以及函数源的摘要。” </font></font><a href="http://blog.getfirebug.com/2009/09/18/eventbug-rising/" rel="nofollow noreferrer" title="Getfirebug博客上的条目"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">EventBug上升</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管他们现在不能说何时发布。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Mandy</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery将事件存储在以下内容中：</font></font></p>

<pre><code>$("a#somefoo").data("events")
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做一个</font></font><code>console.log($("a#somefoo").data("events"))</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该列出附加到该元素的事件。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝飞云</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现在最新的Chrome（v29）中使用DevTools，这两个技巧对于调试事件非常有帮助：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">列出</font><a href="https://developers.google.com/chrome-developer-tools/docs/console#accessing_recently_selected_elements_and_objects" rel="noreferrer"><font style="vertical-align: inherit;">最后选择的DOM元素的</font></a><font style="vertical-align: inherit;"> jQuery事件</font></font><a href="https://developers.google.com/chrome-developer-tools/docs/console#accessing_recently_selected_elements_and_objects" rel="noreferrer"><font style="vertical-align: inherit;"></font></a>
</p><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查页面上的元素</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在控制台中键入以下内容： </font></font><p></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ ._ data（</font></font><a href="https://developers.google.com/chrome-developer-tools/docs/console#accessing_recently_selected_elements_and_objects" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ 0</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，“ events”）//假设jQuery 1.7+</font></font></p></blockquote></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将列出与之关联的所有jQuery事件对象，展开感兴趣的事件，右键单击“ handler”属性的功能，然后选择“ Show function definition”。</font><font style="vertical-align: inherit;">它将打开包含指定功能的文件。</font></font></li>
  </ul><p></p>
</li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://developers.google.com/chrome-developer-tools/docs/commandline-api#monitoreventsobject_events" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">monitorEvents</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（）命令</font></font></p></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子十三</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="http://firequery.binaryage.com/#features" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FireQuery</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它显示了Firebug的HTML选项卡中附加到DOM元素的所有事件。</font><font style="vertical-align: inherit;">它还显示通过附加到元素的任何数据</font></font><code>$.data</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Me无敌小哥</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebKit开发人员控制台（可在Chrome，Safari等中找到）可让您查看元素的附加事件。</font></font></p>

<p><a href="https://stackoverflow.com/questions/10213703/how-do-i-view-events-fired-on-an-element-in-chrome-web-developer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关堆栈溢出问题的更多详细信息</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿小小</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个很好的小书签，称为</font></font><a href="http://www.sprymedia.co.uk/article/Visual+Event+2" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Visual Event</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以显示附加到元素的所有事件。</font><font style="vertical-align: inherit;">它具有用于不同类型事件（鼠标，键盘等）的彩色高亮显示。</font><font style="vertical-align: inherit;">将鼠标悬停在它们上方时，它将显示事件处理程序的主体，其附加方式以及文件/行号（在WebKit和Opera上）。</font><font style="vertical-align: inherit;">您也可以手动触发事件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它找不到所有事件，因为没有标准的方法可以查找将什么事件处理程序附加到元素上，但是它可以与流行的库一起使用，例如jQuery，Prototype，MooTools，YUI等。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

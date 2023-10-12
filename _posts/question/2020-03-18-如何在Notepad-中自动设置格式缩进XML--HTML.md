---
layout: question
title:  如何在Notepad ++中自动设置格式/缩进XML / HTML
date:   2020-03-18T08:25:07.000Z
description: 有没有办法重新缩进一段代码？我正在寻找类似于Eclipse（自动格式化/缩进）中的Ctrl+ Shift+的东西F。要清楚一点我已经知道如何在 ...
img: 
author: 
category: question
answer: 11
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法重新缩进一段代码？</font><font style="vertical-align: inherit;">我正在寻找类似于</font><font style="vertical-align: inherit;">Eclipse（自动格式化/缩进）中的</font></font><kbd>Ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Shift</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+的</font><font style="vertical-align: inherit;">东西</font></font><kbd>F</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要清楚一点</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经知道如何</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Notepad ++ </font><em><font style="vertical-align: inherit;">之外</font></em><font style="vertical-align: inherit;">格式化XML </font><font style="vertical-align: inherit;">（如上所述，Eclipse可以正常工作），因此我不需要一堆链接到其他XML格式化工具。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我专门处理XML和HTML。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理想情况下，键绑定与Eclipse中的键绑定一样方便，因此我不必中断我的工作流程。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经知道NppAutoIndent了-它无法工作，因为我正在使用XML，HTML和CSS。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2057篇《如何在Notepad ++中自动设置格式/缩进XML / HTML》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">cyril</span>
            <span class="discuss-time">2022.03.17</span>
          </div>
          <div class="discuss-comment"><p>您可以使用以下在线工具：</p><p><a href="http://extendsclass.com/xml-formatter-online.html">http://extendsclass.com/xml-formatter-online.html</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC108074432</span>
            <span class="discuss-time">2020.11.25</span>
          </div>
          <div class="discuss-comment"><p>&nbsp;</p><p>&nbsp;</p><p>If you want to learn How Blogging Works? and How it is done? Then you must visit this site to find out the concept of blogging. I am offering this site cause it change my life and I wish it may change yours too. For that <i><strong>Click here</strong></i></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖逆天</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需安装最新的notepad ++并安装fold by fold。</font><font style="vertical-align: inherit;">在菜单栏上，选择Plugins-&gt; Plugins Admin，然后选择fold By和折叠。</font><font style="vertical-align: inherit;">效果最好</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小卡卡西小卤蛋</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要直接回答OP，请看一下这个人的网站：   </font></font><a href="http://thomashunter.name/blog/notepad-tidy-for-xml/#comment-7310" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Thomas Hunter Notepad ++ Tidy for XML</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">只需执行简单的步骤，您就可以在NPP内很好地格式化XML。</font><font style="vertical-align: inherit;">到目前为止，我发现的唯一异常是嵌套的自闭合元素EG：</font></font></p>

<pre><code>&lt;OuterTag&gt;Text for outer element&lt;SelfClosingTag/&gt;&lt;/OuterTag&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将整理到： </font></font></p>

<pre><code>&lt;OuterTag&gt;Text for outer element<font></font>
&lt;SelfClosingTag/&gt;&lt;/OuterTag&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能有一种方法可以解决此问题，但目前，它已设法将文档中的行数减少了300k，可以解决此特殊异常。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim老丝达蒙</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将记事本7.6与“插件管理”一起使用，但找不到XML工具。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我必须手动安装它，就像@ some-java-guy在他的</font></font><a href="https://stackoverflow.com/a/34036271/1037864"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回答中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所做的一样，</font><font style="vertical-align: inherit;">除了我的plugins文件夹位于此处：</font></font><code>C:\Users\&lt;my username&gt;\AppData\Local\Notepad++\plugins</code><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
在该目录中，我创建了一个新目录（名为XmlTools），并在那里复制了XMLTools.dll。</font><font style="vertical-align: inherit;">（并且我将所有依赖项都复制到了程序文件中的Notepad ++目录。）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyEva</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我必须</font><font style="vertical-align: inherit;">在“插件”-&gt;“插件管理器”-&gt;“显示插件管理器”-&gt;“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下</font><strong><font style="vertical-align: inherit;">更新代理设置</font></strong><font style="vertical-align: inherit;">，以查看“可用”列表中的所有插件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后，安装“ XML工具”非常容易，并且如上所述完成了请求的工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇神奇Near</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我第三次安装Windows和npp，一段时间后我意识到整理功能将不再起作用。</font><font style="vertical-align: inherit;">所以我用谷歌寻找解决方案，来到这个线程，然后在更多线程的帮助下，我终于解决了它。</font><font style="vertical-align: inherit;">我将一劳永逸地总结我的所有动作。</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装TextFX插件：插件-&gt;插件管理器-&gt;显示插件管理器。</font><font style="vertical-align: inherit;">选择TextFX字符并安装。</font><font style="vertical-align: inherit;">重新启动npp后，菜单“ TextFX”应该可见。</font><font style="vertical-align: inherit;">（信用：@remipod）。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过从旧的npp软件包中粘贴Config文件夹来安装libtidy.dll：按照</font></font><a href="https://stackoverflow.com/questions/6985637/notepad-htmltidy-unable-to-find-libtidy-dll/6985688#6985688"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此答案中的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明进行操作</font><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在最新的npp安装目的地（通常为C：\ Program Files（x86）\ Notepad ++ \ plugins）中有一个Config文件夹后，npp需要对该文件夹的写访问权限。</font><font style="vertical-align: inherit;">右键单击配置文件夹-&gt;属性-&gt;安全选项卡-&gt;选择用户，单击编辑-&gt;选中完全控制以允许读/写访问。</font><font style="vertical-align: inherit;">请注意，您需要管理员权限才能执行此操作。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新启动npp并验证TextFX-&gt; TextFX HTML Tidy-&gt; Tidy：重新插入XML即可。</font></font></p></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony伽罗Sam</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，Notepad ++不提供任何此类功能。</font><font style="vertical-align: inherit;">但是您可以使用一些在线工具来自动格式化文本，例如</font></font><a href="https://www.freeformatter.com/xml-formatter.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.freeformatter.com/xml-formatter.html</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它有助于。</font><font style="vertical-align: inherit;">:)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长阿飞</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些不知道的人，npp在插件和其他项目中提供了很多支持。</font><font style="vertical-align: inherit;">您可以从</font></font><a href="http://sourceforge.net/projects/npp-plugins/files/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SourceForge</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载这些插件</font><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="https://i.stack.imgur.com/riCYJ.png" rel="noreferrer"><img src="https://i.stack.imgur.com/riCYJ.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要</font></font><code>XML Tools</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用N ++设置文本格式</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载完后</font></font><code>XML Tools</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">..</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">退出记事本++</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到   </font></font><code>C:\Program File\Notepad++</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...。您的N ++安装文件夹。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将来自xml工具的文件放在下面，该文件是通过以下方式下载到npp根文件夹中的： </font></font><code>copy replace</code></li>
</ol>

<p><a href="https://i.stack.imgur.com/svpII.png" rel="noreferrer"><img src="https://i.stack.imgur.com/svpII.png" alt="在此处输入图片说明"></a></p>

<ol start="2">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到</font></font><code>..\Plugins</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">子文件夹并放在下载的文件下面</font></font></li>
</ol>

<p><a href="https://i.stack.imgur.com/EmbRE.png" rel="noreferrer"><img src="https://i.stack.imgur.com/EmbRE.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新启动并享受！！！</font></font></p>

<p><kbd>Ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Alt</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Shft</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>B</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">格式化。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidAPro</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装Tidy2插件。</font><font style="vertical-align: inherit;">我有Notepad ++ v6.2.2，并且Tidy2到目前为止运行良好。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY蛋蛋Near</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于我升级到6.3.2，所以我使用</font></font><code>XML Tools</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过插件管理器安装XML工具。 </font></font></li>
<li>use the shortcut <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> (<em>or</em> 
menu -&gt; Plugins -&gt; XML Tools -&gt; Pretty Print)</li>
</ul>

<p>In older versions:
menu -&gt; TextFX -&gt; HTML Tidy -&gt; Tidy: Reindent XML.</p></div>
        </div></div>
    {% endraw %}
  </div>
<div>

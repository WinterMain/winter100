---
layout: question
title:  如何使用Sublime Text 2重新格式化HTML代码？
date:   2020-03-13T12:54:15.000Z
description: 我有一些格式很差的HTML代码，我想重新格式化。是否有一个命令可以自动在Sublime Text 2中重新格式化HTML代码，使其看起来更好并且更易于阅读...
img: 
author: GO飞云
category: question
answer: 13
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一些格式很差的HTML代码，我想重新格式化。</font><font style="vertical-align: inherit;">是否有一个命令可以自动在Sublime Text 2中重新格式化HTML代码，使其看起来更好并且更易于阅读？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1570篇《如何使用Sublime Text 2重新格式化HTML代码？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro老丝</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以设置快捷键</font></font><kbd>F12</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">容易！！！</font></font></p>

<pre><code>{ "keys": ["f12"], "command": "reindent" , "args": { "single_line": false } }
</code></pre>

<p><font style="vertical-align: inherit;"></font><a href="http://how-to-sublime-text.blogspot.com/2014/11/reformat-code.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看详细</font><a href="http://how-to-sublime-text.blogspot.com/2014/11/reformat-code.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;">信息</font></a><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Green</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个不错的开源</font></font><a href="https://github.com/akalongman/sublimetext-codeformatter" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CodeFormatter插件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它（以及重新缩进）可以美化脏代码，即使所有代码都在一行中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞Harry小胖</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用</font></font><a href="http://tidy.sourceforge.net/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">整洁的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自定义构建系统来美化HTML。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的Packages / User /目录中有HTMLTidy.sublime-build：</font></font></p>

<pre><code>{<font></font>
  "cmd": ["tidy", "-config", "$packages/User/tidy_config.cfg", "$file"]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和tidy_config.cfg文件在同一目录中：</font></font></p>

<pre><code>indent: auto<font></font>
tab-size: 4<font></font>
show-warnings: no<font></font>
write-back: yes<font></font>
quiet: yes<font></font>
indent-cdata: yes<font></font>
tidy-mark: no<font></font>
wrap: 0<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后只需选择构建系统，然后按</font></font><kbd>ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>b</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><kbd>cmd</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>b</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新格式化文件内容即可。</font><font style="vertical-align: inherit;">一个小问题是ST2不会自动重新加载文件，因此要查看结果，您必须切换到其他文件（或切换到其他应用程序）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Mac上，我已经使用macports安装了tidy，在Windows上，您必须自己下载它并在构建系统中指定tidy所在的工作目录：</font></font></p>

<pre><code>"working_dir": "c:\\HTMLTidy\\"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或将其添加到PATH。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这是您要寻找的： </font></font></p>

<p><a href="https://github.com/victorporof/Sublime-HTMLPrettify" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/victorporof/Sublime-HTMLPrettify</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green逆天</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，</font></font><code>HTML Prettify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案非常简单。</font><font style="vertical-align: inherit;">我去了</font></font><a href="https://github.com/victorporof/Sublime-HTMLPrettify" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML Prettify页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要 </font></font><code>Sublime Package Manager</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照</font><a href="https://sublime.wbond.net/installation" rel="noreferrer"><font style="vertical-align: inherit;">此处</font></a><font style="vertical-align: inherit;">的说明安装软件包管理器</font></font><a href="https://sublime.wbond.net/installation" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入</font></font><kbd>cmd + shift + p</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以调出菜单</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已输入 </font></font><code>prettify</code></li>
<li><font style="vertical-align: inherit;"></font><code>HTML prettify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在菜单中</font><font style="vertical-align: inherit;">选择</font><font style="vertical-align: inherit;">选择</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">繁荣。</font><font style="vertical-align: inherit;">做完了 </font><font style="vertical-align: inherit;">看起来很棒</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐古一</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建了一个名为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTMLBeautify</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的程序包</font><font style="vertical-align: inherit;">，该程序可以很好地重新格式化HTML。</font><font style="vertical-align: inherit;">我以1997年发现的Perl脚本为基础，对它进行了更新，使其可以与所有新的有尖齿的现代标签一起使用。</font><font style="vertical-align: inherit;">:)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查一下，让我知道您的想法！</font></font></p>

<p><a href="https://github.com/rareyman/HTMLBeautify" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/rareyman/HTMLBeautify</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需转到</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑-&gt;标签-&gt;自动格式化文档上的标签</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝村村</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个名为SublimeHtmlTidy的插件，可以很好地工作 </font></font></p>

<p><a href="https://github.com/welovewordpress/SublimeHtmlTidy" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/welovewordpress/SublimeHtmlTidy</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙Sam</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管问题是针对HTML的，但我还要另外提供有关如何</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自动格式化Sublime Text 2的Javascript代码的信息</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">；</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以选择所有代码（</font></font><kbd>ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>A</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）并使用应用程序内功能reindent（</font></font><code>Edit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-&gt; </font></font><code>Line</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-&gt; </font></font><code>Reindent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），也可以使用JsFormat格式化插件，</font></font><code>Sublime Text 2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取关于如何格式化代码的更多自定义设置。 Sublime Text的默认选项卡/缩进设置。</font></font></p>

<p><a href="https://github.com/jdc0589/JsFormat" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/jdc0589/JsFormat</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font><font style="vertical-align: inherit;">使用程序包控制（</font><font style="vertical-align: inherit;">-&gt; </font><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">轻松安装</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JsFormat</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">打开程序包控制，然后</font><em><font style="vertical-align: inherit;">输入install，hit</font></em><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">然后输入</font><font style="vertical-align: inherit;">并点击</font><font style="vertical-align: inherit;">，完成。</font><font style="vertical-align: inherit;">（软件包控制器将在的左下角显示安装状态以及成功和错误</font><font style="vertical-align: inherit;">）</font></font><code>Preferences</code><font style="vertical-align: inherit;"></font><code>Package Control</code><font style="vertical-align: inherit;"></font><em><font style="vertical-align: inherit;"></font><kbd>enter</kbd></em><font style="vertical-align: inherit;"></font><code>js format</code><font style="vertical-align: inherit;"></font><kbd>enter</kbd><font style="vertical-align: inherit;"></font><code>Sublime</code><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将以下行添加到您的键绑定（</font></font><code>Preferences</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-&gt; </font></font><code>Key Bindings User</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<pre><code>{ "keys": ["ctrl+alt+2"], "command": "js_format"}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用的是</font></font><kbd>ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>alt</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>2</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以根据需要更改此快捷键。</font><font style="vertical-align: inherit;">到目前为止，</font></font><code>JsFormat</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个不错的插件，值得尝试！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这会帮助某人。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom神奇</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我推荐这个插件：</font></font><a href="https://packagecontrol.io/packages/HTML-CSS-JS%20Prettify" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML / CSS / JS Prettify</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它确实有效。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装后，只需选择代码，然后按</font></font><kbd>Ctrl+Shift+H</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做完了！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯ANear</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是一般提示。</font><font style="vertical-align: inherit;">我要做的是自动整理HTML，安装了软件包HTML_Tidy，然后将以下按键绑定添加到默认设置（我使用的是）：</font></font></p>

<pre><code>{ "keys": ["enter"], "command": "html_tidy" },
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次输入都会运行HTML Tidy。</font><font style="vertical-align: inherit;">这样做可能有缺点，我对Sublime还是很陌生，但似乎可以满足我的要求:)</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Tom逆天</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我唯一能找到的包是</font></font><a href="https://github.com/SublimeText/Tag" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tag</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用程序包控件进行安装。</font></font><a href="https://sublime.wbond.net" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://sublime.wbond.net</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装程序包控件后。</font><font style="vertical-align: inherit;">转到程序包控制（</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“首选项”</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -&gt;“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">程序包控制”</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），然后键入并</font></font><code>install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击</font></font><kbd>enter</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">然后输入</font></font><code>tag</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并点击</font></font><kbd>enter</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装标签后，突出显示文本，按下快捷</font></font><kbd>Ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Alt</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>F</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro路易</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不需要任何插件即可执行此操作。</font><font style="vertical-align: inherit;">只需选择所有行（</font></font><kbd>Ctrl </kbd><kbd>A</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），然后从菜单中选择编辑→行→重新缩进。</font><font style="vertical-align: inherit;">如果您的文件使用扩展名包含HTML </font></font><code>.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">的扩展名，则此方法有效</font></font><code>.php</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您经常这样做，则可能会发现此键映射很有用：</font></font></p>

<pre><code>{ "keys": ["ctrl+shift+r"], "command": "reindent" , "args": { "single_line": false } }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果未保存文件（例如，您只是将其粘贴到新窗口中），则可以</font></font><code>language of choice</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在选择重新缩进选项之前，</font><font style="vertical-align: inherit;">通过选择菜单视图→语法→来手动设置缩进语言</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

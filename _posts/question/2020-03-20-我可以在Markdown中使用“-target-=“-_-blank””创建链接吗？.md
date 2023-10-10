---
layout: question
title:  我可以在Markdown中使用“ target =“ _ blank””创建链接吗？
date:   2020-03-20T05:28:05.000Z
description: 有没有一种方法可以在Markdown中创建在新窗口中打开的链接？如果没有，建议您使用哪种语法。我将其添加到我使用的markdown编译器中。我认为这应该是...
img: 
author: Stafan
category: question
answer: 10
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以在Markdown中创建在新窗口中打开的链接？</font><font style="vertical-align: inherit;">如果没有，建议您使用哪种语法。</font><font style="vertical-align: inherit;">我将其添加到我使用的markdown编译器中。</font><font style="vertical-align: inherit;">我认为这应该是一个选择。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用：[页面链接]（您的URL在这里“（目标| _blank）”）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan逆天</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用{[attr] =“ [prop]”}添加任何属性</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如[Google]（</font></font><a href="http://www.google.com" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.google.com</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）{target =“ _ blank”}</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于幽灵降价使用：</font></font></p>

<pre><code>[Google](https://google.com" target="_blank)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里找到它：</font><a href="https://cmatskas.com/open-external-links-in-a-new-window-ghost/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://cmatskas.com/open-external-links-in-a-new-window-ghost/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//cmatskas.com/open-external-links-in-a-new-window-ghost/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三泡芙</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的项目中，我正在这样做，并且效果很好：</font></font></p>

<pre><code>[Link](https://example.org/ "title" target="_blank")
</code></pre>

<p><a href="https://example.org/" rel="noreferrer" title="标题“ target =” _ blank"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但并非所有解析器都允许您这样做。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种全局解决方案是将</font></font><code>&lt;base target="_blank"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
页面</font></font><code>&lt;head&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">放入其中</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这实际上为每个锚元素添加了默认目标。</font><font style="vertical-align: inherit;">我使用markdown在基于Wordpress的网站上创建内容，而主题定制器将使我将该代码注入到每个页面的顶部。</font><font style="vertical-align: inherit;">如果您的主题没有这样做，那么有一个</font></font><a href="https://wordpress.org/plugins/header-and-footer-scripts/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插件</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro十三</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Markdown-2.5.2，您可以使用以下命令：</font></font></p>

<pre><code>[link](url){:target="_blank"}
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam斯丁</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，不能将链接属性添加到Markdown URL并不是很正确。</font><font style="vertical-align: inherit;">要添加属性，请检查所使用的基础markdown解析器及其扩展名。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尤其是</font></font><a href="https://pandoc.org/" rel="noreferrer"><code>pandoc</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有enable的扩展名</font></font><a href="https://pandoc.org/MANUAL.html#extension-link_attributes" rel="noreferrer"><code>link_attributes</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它允许在链接中进行标记。</font><font style="vertical-align: inherit;">例如</font></font></p>

<pre><code>[Hello, world!](http://example.com/){target="_blank"}
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些从未来</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[R </font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font><font style="vertical-align: inherit;">例如，使用</font></font><code>rmarkdown</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>bookdown</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>blogdown</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等），这是你想要的语法。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于未使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">R的用户</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可能需要</font><font style="vertical-align: inherit;">在对</font><font style="vertical-align: inherit;">with </font><font style="vertical-align: inherit;">的调用中</font></font><a href="https://pandoc.org/MANUAL.html#extensions" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启用扩展</font></font></a><font style="vertical-align: inherit;"></font><code>pandoc</code><font style="vertical-align: inherit;"></font><code>+link_attributes</code></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这与</font></font><a href="https://kramdown.gettalong.org/syntax.html#inline-links" rel="noreferrer"><code>kramdown</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解析器的支持</font><font style="vertical-align: inherit;">不同</font><font style="vertical-align: inherit;">，后者是上面接受的答案之一。</font><font style="vertical-align: inherit;">特别要注意的是，kramdown与pandoc有所不同，因为它需要一个冒号</font></font><code>:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">--在大括号的开头- </font></font><code>{}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如</font></font></p>

<pre><code>[link](http://example.com){:hreflang="de"}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尤其是：</font></font></p>

<pre><code># Pandoc<font></font>
{ attribute1="value1" attribute2="value2"}<font></font>
<font></font>
# Kramdown<font></font>
{: attribute1="value1" attribute2="value2"}<font></font>
 ^<font></font>
 ^ Colon<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Grav CMS，它可以完美运行：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正文/内容：</font></font><br>
<code>Some text[1]</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正文/参考：</font></font><br>
<code>[1]: http://somelink.com/?target=_blank</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只要确保首先传递了target属性，如果链接中还有其他属性，请将它们复制/粘贴到参考URL的末尾。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以作为直接链接：</font></font><br>
<code>[Go to this page](http://somelink.com/?target=_blank)</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><a href="http://kramdown.gettalong.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Kramdown</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持它。</font><font style="vertical-align: inherit;">它与标准Markdown语法兼容，但也有许多扩展。</font><font style="vertical-align: inherit;">您可以这样使用它：</font></font></p>

<pre><code>[link](url){:target="_blank"}
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就Markdown语法而言，如果要详细说明，则只需使用HTML。</font></font></p>

<pre><code>&lt;a href="http://example.com/" target="_blank"&gt;Hello, world!&lt;/a&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我见过的大多数Markdown引擎都允许使用纯旧的HTML，仅在这种情况下，即通用文本标记系统无法将其截断。</font><font style="vertical-align: inherit;">（例如，StackOverflow引擎。）然后，无论如何，它们都将通过HTML白名单过滤器运行整个输出，因为即使是仅Markdown的文档也可以轻松包含XSS攻击。</font><font style="vertical-align: inherit;">这样，如果您或您的用户想要创建</font></font><code>_blank</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接，那么他们可能仍然可以。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果这是您将经常使用的功能，则创建自己的语法可能很有意义，但是通常它并不是至关重要的功能。</font><font style="vertical-align: inherit;">如果要在新窗口中启动该链接，请自己按住ctrl键单击它，谢谢。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

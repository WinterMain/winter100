---
layout: question
title:  RegEx匹配XHTML自包含标签以外的打开标签
date:   2020-03-13T12:51:23.000Z
description:                                                                          ...
img: 
author: A米亚
category: question
answer: 20
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLock" width="18" height="18" viewBox="0 0 18 18"><path d="M16 9a2 2 0 0 0-2-2V6A5 5 0 0 0 4 6v1a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V9zm-7 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.1-7H5.9V6a3.1 3.1 0 0 1 6.2 0v1z"></path></svg>
                        </div>
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已锁定</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">此问题的评论已被禁用，但它仍在接受新的答案和其他交互方式。</font></font><a href="/help/locked-posts"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解更多</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要匹配所有这些开始标签：</font></font></p>

<pre><code>&lt;p&gt;<font></font>
&lt;a href="foo"&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但不是这些：</font></font></p>

<pre><code>&lt;br /&gt;<font></font>
&lt;hr class="foo" /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想出了这个，想确保我做对了。</font><font style="vertical-align: inherit;">我只是捕捉到</font></font><code>a-z</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;([a-z]+) *[^/]*?&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我相信它说：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到一个小于，然后</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查找（并捕获）az一次或多次，然后</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到零个或多个空格，然后</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到零次或多次贪婪的字符，除了</font></font><code>/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">寻找大于</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有那个权利吗？</font><font style="vertical-align: inherit;">更重要的是，您怎么看？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯泡芙Davaid</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管为此目的使用正则表达式不适当且无效，但有时正则表达式可以为简单的匹配问题提供快速解决方案，并且在我看来，对于琐碎的工作使用正则表达式并不是那么麻烦。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有</font></font><a href="http://blog.stevenlevithan.com/archives/match-innermost-html-element" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一篇</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于匹配最里面的HTML元素的权威</font><a href="http://blog.stevenlevithan.com/archives/match-innermost-html-element" rel="noreferrer"><font style="vertical-align: inherit;">博客文章，</font></a><font style="vertical-align: inherit;">这些元素由Steven Levithan撰写。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯梅</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我看来，您正在尝试匹配结尾不带“ /”的标签。</font><font style="vertical-align: inherit;">尝试这个：</font></font></p>

<pre><code>&lt;([a-zA-Z][a-zA-Z0-9]*)[^&gt;]*(?&lt;!/)&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green小宇宙伽罗</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您只是想查找这些标签（没有解析的野心），请尝试以下正则表达式：</font></font></p>

<pre><code>/&lt;[^/]*?&gt;/g
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在30秒内编写了它，并在此处进行了测试：</font><a href="http://gskinner.com/RegExr/"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：
 </font></font><a href="http://gskinner.com/RegExr/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//gskinner.com/RegExr/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它与您提到的标签类型匹配，而忽略了您想忽略的标签类型。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云小胖</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;\s*(\w+)[^/&gt;]*&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">零件说明：</font></font></p>

<p><code>&lt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：起始字符</font></font></p>

<p><code>\s*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：标记名称前可能有空格（难看但可行）。</font></font></p>

<p><code>(\w+)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：标签可以包含字母和数字（h1）。</font><font style="vertical-align: inherit;">好吧，</font></font><code>\w</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也匹配“ _”，但是我猜并没有伤害。</font><font style="vertical-align: inherit;">如果好奇，请改用（[a-zA-Z0-9] +）。</font></font></p>

<p><code>[^/&gt;]*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：除了东西</font></font><code>&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直至收盘</font></font><code>&gt;</code></p>

<p><code>&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：关闭 </font></font><code>&gt;</code></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无关</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些低估正则表达式的人来说，它们仅与正则语言一样强大：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以</font><font style="vertical-align: inherit;">将非常规的，甚至不是上下文无关</font><font style="vertical-align: inherit;">的</font></font><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">n</font></font></sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ba </font></font><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">n</font></font></sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ba </font></font><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">n</font></font></sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><code>^(a+)b\1b\1$</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反引用</font></font><a href="http://en.wiktionary.org/wiki/FTW" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FTW</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro伽罗</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于用于解析（x）HTML的RegExp方法的问题，对于所有谈到某些限制的人的答案是：您没有受过足够的训练来统治这种强大武器的力量，因为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NOBODY</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里谈到了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">递归</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一位与RegExp无关的同事通知了我这个讨论，这肯定不是网络上有关这个古老而又热门话题的第一个讨论。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读了一些帖子之后，我要做的第一件事是在该线程中寻找“？R”字符串。</font><font style="vertical-align: inherit;">第二个是搜索“递归”。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
不，圣牛，没有找到匹配的东西。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
由于没有人提到解析器所基于的主要机制，所以我很快意识到没人明白这一点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果（x）HTML解析器需要递归，则没有递归的RegExp解析器不足以实现此目的。</font><font style="vertical-align: inherit;">这是一个简单的构造。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正则表达式的黑色艺术是难以掌握</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，所以也许有，我们离开了，而试图和测试我们的个人解决方案捕获整个网络中，一方面进一步的可能性......好吧，我相信它:)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是魔术图案：</font></font></p>

<pre><code>$pattern = "/&lt;([\w]+)([^&gt;]*?)(([\s]*\/&gt;)|(&gt;((([^&lt;]*?|&lt;\!\-\-.*?\-\-&gt;)|(?R))*)&lt;\/\\1[\s]*&gt;))/s";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">去尝试一下。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
它以PHP字符串编写，因此“ s”修饰符使类包含换行符。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这是</font><font style="vertical-align: inherit;">我在一月份写</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的PHP手册</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><strong><font style="vertical-align: inherit;">示例注释</font></strong><font style="vertical-align: inherit;">：</font></font><a href="http://php.net/manual/en/regexp.reference.recursive.php" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（请注意，在该注释中，我错误地使用了“ m”修饰符；尽管未使用^或$定位符，但它已被RegExp引擎丢弃，但应将其删除）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我们可以从更明智的角度讨论此方法的局限性：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据RegExp引擎的具体实现，递归</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解析的嵌套模式数量</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能有所限制</font><font style="vertical-align: inherit;">，但这取决于所使用的语言</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管损坏的（x）HTML不会导致严重错误，但尚未</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">清理</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ol>

<p>Anyhow it is only a RegExp pattern, but it discloses the possibility to develop of a lot of powerful implementations.<br>
I wrote this pattern to power the <em>recursive descent parser</em> of a template engine I built in my framework, and performances are really great, both in execution times or in memory usage (nothing to do with other template engines which use the same syntax).</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Jim斯丁</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如许多人已经指出的那样，HTML不是一种常规语言，因此很难解析。</font><font style="vertical-align: inherit;">我的解决方案是使用整洁的程序将其转换为常规语言，然后使用XML解析器使用结果。</font><font style="vertical-align: inherit;">为此有很多不错的选择。</font><font style="vertical-align: inherit;">我的程序是使用Java和</font></font><a href="http://jtidy.sourceforge.net/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jtidy</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库</font><font style="vertical-align: inherit;">编写的</font><font style="vertical-align: inherit;">，将HTML转换为XML，然后通过Jaxen将xpath转换为结果。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Tom</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个</font></font><a href="http://kingdesk.com/projects/php-parser/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于PHP的解析器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它使用一些不合常规的正则表达式来解析HTML。</font><font style="vertical-align: inherit;">作为该项目的作者，我可以告诉您可以使用正则表达式解析HTML，但是效率不高。</font><font style="vertical-align: inherit;">如果您需要服务器端解决方案（就像我为</font></font><a href="http://wordpress.org/extend/plugins/wp-typography/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">wp-Typography WordPress插件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所做的那样</font><font style="vertical-align: inherit;">），则可以使用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐Eva</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我以前使用过一个名为</font></font><a href="http://htmlparser.sourceforge.net/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTMLParser的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开源工具</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它旨在以各种方式解析HTML，并且很好地达到了目的。</font><font style="vertical-align: inherit;">它可以将HTML解析为不同的treenode，并且您可以轻松地使用其API从节点中获取属性。</font><font style="vertical-align: inherit;">检查一下，看看是否可以帮到您。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子阳光</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要PHP：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://www.php.net/manual/en/function.dom-import-simplexml.php" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PHP DOM </font></font></a> <a href="http://php.net/manual/en/class.domdocument.php" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，除非它是格式正确的XML将无法正常工作。</font><font style="vertical-align: inherit;">无论它们对全人类的使用有多好。</font></font></p>

<p><a href="http://simplehtmldom.sourceforge.net/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">simplehtmldom</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很好，但是我发现它有点bug，而且它的内存占用很大[将在大页面上崩溃。]</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我从未使用过</font></font><a href="http://querypath.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">querypath</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此无法评论其有用性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个可以尝试的是我的</font></font><a href="http://github.com/siteroller/domparser" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOMParser</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它对资源非常少，并且我已经很开心地使用了一段时间。</font><font style="vertical-align: inherit;">简单易学，功能强大。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Python和Java，发布了类似的链接。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于下注者-我仅在XML解析器证明无法承受实际使用时编写类。</font><font style="vertical-align: inherit;">宗教否决只会阻止发布有用的答案-请使问题保持​​在问题的角度之内。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您要第一个</font></font><code>&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不带</font></font><code>/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">看</font></font><a href="http://www.regular-expressions.info/lookaround.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解如何做到这一点的详细信息。</font><font style="vertical-align: inherit;">这被称为否定性回溯。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，</font></font><code>&lt;bar/&gt;&lt;/foo&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该示例的简单</font><font style="vertical-align: inherit;">实现最终将</font><font style="vertical-align: inherit;">在此示例文档中</font><font style="vertical-align: inherit;">匹配</font></font></p>

<pre><code>&lt;foo&gt;&lt;bar/&gt;&lt;/foo&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您能否提供更多有关您要解决的问题的信息？</font><font style="vertical-align: inherit;">您是否以编程方式遍历标签？</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子猿</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试：</font></font></p>

<pre><code>&lt;([^\s]+)(\s[^&gt;]*?)?(?&lt;!/)&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它与您的相似，但是最后一个</font></font><code>&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能在斜杠之后，并且也可以接受</font></font><code>h1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid古一</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道您对此有确切的需求，但是如果您还使用.NET，则不能使用</font></font><a href="http://www.codeplex.com/htmlagilitypack" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML Agility Pack</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">摘抄：</font></font></p>

<blockquote>
  <p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是一个.NET代码库，可让您解析“网络外” HTML文件。</font><font style="vertical-align: inherit;">解析器对“真实世界”格式的HTML非常宽容。</font></font></em></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony阳光</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3C以伪正则表达式形式解释了解析：</font></font><br>
<a href="http://www.w3.org/TR/REC-xml-names/#ns-using" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3C Link</font></font></a>  </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遵循了var链接</font></font><code>QName</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>S</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及</font></font><code>Attribute</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获得更清晰的画面。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
基于此，您可以创建一个很好的正则表达式来处理诸如剥离标签之类的事情。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi村村</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中国古代的战略家，一般哲学家孙子说：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据说，如果您认识自己的敌人并认识自己，那么您就可以赢得一百场战斗，而不会遭受任何损失。</font><font style="vertical-align: inherit;">如果您只了解自己而不是对手，那么您可能会赢或输。</font><font style="vertical-align: inherit;">如果您既不认识自己，也不认识敌人，那么您将永远危害自己。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，您的敌人是HTML，而您本人或正则表达式。</font><font style="vertical-align: inherit;">您甚至可能是使用不规则正则表达式的Perl。</font><font style="vertical-align: inherit;">懂HTML。</font><font style="vertical-align: inherit;">认识你自己。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我编写了一个描述HTML本质的句。</font></font></p>

<pre><code>HTML has<font></font>
complexity exceeding<font></font>
regular language.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还撰写了一个句，描述了Perl中正则表达式的性质。</font></font></p>

<pre><code>The regex you seek<font></font>
is defined within the phrase<font></font>
&lt;([a-zA-Z]+)(?:[^&gt;]*[^/]*)?&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">木心小哥</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然您无法使用正则表达式解析HTML的答案是正确的，但它们不适用于此处。</font><font style="vertical-align: inherit;">OP只想用正则表达式解析一个HTML标记，而这可以用正则表达式来完成。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议的正则表达式是错误的，但是：</font></font></p>

<pre><code>&lt;([a-z]+) *[^/]*?&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您向正则表达式添加内容，则可以通过回溯将其强制匹配诸如之类的愚蠢内容</font></font><code>&lt;a &gt;&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>[^/]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这太宽松了。</font><font style="vertical-align: inherit;">另请注意，这</font></font><code>&lt;space&gt;*[^/]*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是多余的，因为</font></font><code>[^/]*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还可匹配空格。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的建议是</font></font></p>

<pre><code>&lt;([a-z]+)[^&gt;]*(?&lt;!/)&gt;
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>(?&lt;! ... )</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在Perl正则表达式中）负向查找在</font><font style="vertical-align: inherit;">哪里</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它显示为“一个&lt;，然后是一个单词，然后是不是&gt;的任何内容，最后一个可能不是/，后跟&gt;”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，这允许类似</font></font><code>&lt;a/ &gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（与原始正则表达式一样）的东西，因此，如果您想要更严格的限制，则需要构建一个正则表达式以匹配用空格分隔的属性对。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长神乐小小</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在shell中，您可以</font><font style="vertical-align: inherit;">使用</font><a href="https://en.wikipedia.org/wiki/Sed" rel="noreferrer"><font style="vertical-align: inherit;">sed</font></a><font style="vertical-align: inherit;">解析</font></font><a href="https://en.wikipedia.org/wiki/HTML" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><a href="https://en.wikipedia.org/wiki/Sed" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<ol>
<li><a href="http://sed.sourceforge.net/grabbag/scripts/turing.sed" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">图灵赛德</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编写HTML解析器（作业）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">???</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">利润！</font></font></li>
</ol>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相关（为什么不应该使用正则表达式匹配）：</font></font></p>

<ul>
<li><a href="https://blog.codinghorror.com/if-you-like-regular-expressions-so-much-why-dont-you-marry-them/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您非常喜欢正则表达式，为什么不嫁给他们呢？</font></font></a></li>
<li><a href="https://blog.codinghorror.com/regular-expressions-now-you-have-two-problems/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正则表达式：现在您有两个问题</font></font></a></li>
<li><a href="http://danlec.com/blog/hacking-stackoverflow-com-s-html-sanitizer" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">黑客stackoverflow.com的HTML清理器</font></font></a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚十三Harry</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议使用</font></font><a href="http://querypath.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">QueryPath</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在PHP中解析XML和HTML。</font><font style="vertical-align: inherit;">它的语法基本上与jQuery相同，只是在服务器端。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near神奇</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这里的缺点是HTML是</font></font><a href="http://en.wikipedia.org/wiki/Context-free_grammar" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chomsky Type 2语法（无上下文语法），</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而RegEx是</font></font><a href="http://en.wikipedia.org/wiki/Regular_grammar" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chomsky Type 3语法（常规语法）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">由于类型2语法从根本上比类型3语法复杂（请参阅</font></font><a href="http://en.wikipedia.org/wiki/Chomsky_hierarchy" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chomsky层次结构</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），因此从</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数学</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上讲</font><font style="vertical-align: inherit;">，</font><em><font style="vertical-align: inherit;">无法</font></em><font style="vertical-align: inherit;">使用RegEx解析XML。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是许多人会尝试，有些甚至会声称成功-但直到其他人发现错误并完全把您弄乱为止。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然</font><font style="vertical-align: inherit;">只有正则表达式的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任意</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> HTML是不可能的，但有时使用它们来解析</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有限的已知</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> HTML集合是</font><font style="vertical-align: inherit;">适当的</font><font style="vertical-align: inherit;">。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想从一小撮HTML页面中抓取数据，然后将它们填充到数据库中，则正则表达式可能会正常工作。</font><font style="vertical-align: inherit;">例如，我最近想获得我从议会网站上获得的澳大利亚联邦代表的姓名，政党和地区。</font><font style="vertical-align: inherit;">这是一项有限的一次性工作。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正则表达式对我来说效果很好，并且安装起来非常快。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿村村</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要听这些家伙。</font><font style="vertical-align: inherit;">如果将任务分解成小块，则</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用regex </font><font style="vertical-align: inherit;">完全</font><font style="vertical-align: inherit;">解析上下文无关的语法。</font><font style="vertical-align: inherit;">您可以使用按顺序执行每个脚本的脚本来生成正确的模式：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决停止问题。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">摆一个圆圈。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">计算O（log n）或以下的旅行商问题。</font><font style="vertical-align: inherit;">如果不止如此，您将用完RAM，引擎将挂起。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该模式将非常大，因此请确保您有一个无损压缩随机数据的算法。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">几乎在那里-将整个事情除以零。</font><font style="vertical-align: inherit;">十分简单。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我本人还没有完成最后一部分，但是我知道我已经接近了。</font></font><code>CthulhuRlyehWgahnaglFhtagnException</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于某种原因，</font><font style="vertical-align: inherit;">它总是抛出</font><font style="vertical-align: inherit;">s，因此我将其移植到VB 6并使用</font></font><code>On Error Resume Next</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">一旦调查了刚刚在墙上打开的这扇奇怪的门，我将更新代码。</font><font style="vertical-align: inherit;">嗯</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS Pierre de Fermat也想出了办法，但是他所写的利润不足以编写代码。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

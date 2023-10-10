---
layout: question
title:  <b>和<strong>，<i>和<em>有什么区别？
date:   2020-03-17T08:11:05.000Z
description: <b>和<strong>，<i>和<em>HTML / XHTML 之间有什么区别？您什么时候应该使用？...
img: 
author: 神无神乐
category: question
answer: 18
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;strong&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;em&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML / XHTML </font><font style="vertical-align: inherit;">之间有什么区别</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">您什么时候应该使用？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1904篇《<b>和<strong>，<i>和<em>有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德古一</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们将</font></font><code>&lt;strong&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签用于具有较高优先级的文本，以用于SEO用途，例如产品名称，公司名称等，而</font></font><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单则使其变粗。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似地，我们使用</font></font><code>&lt;em&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SEO优先级高</font></font><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的文本</font><font style="vertical-align: inherit;">，同时</font><font style="vertical-align: inherit;">使文本简单斜体。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村飞云</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><code>&lt;strong&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>&lt;em&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是抽象的（人们说这是语义时的意思）。
</font></font><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是使事物“强”或“强调”的特定方式</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比喻：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论</font></font><code>&lt;strong&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;em&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>&lt;i&gt;</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“车辆”就是“吉普车”</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端JinJin</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您通常应该尽量避免</font></font><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">引入它们是为了在创建CSS之前在HMTL早期版本中布局页面（改变其外观），例如同时删除</font></font><code>font</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签，并且主要是为了向后兼容而保留，因为某些论坛允许内联HTML，这很容易更改文本外观的方式（例如BBCode使用</font></font><code>[i]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以使用</font></font><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等等）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自创建CSS以来，实际上不再需要在HTML中进行布局，这就是为什么首先创建CSS的原因（HTML == Structure，CSS == Layout）。</font><font style="vertical-align: inherit;">这些标签将来也可能消失，</font></font><code>span</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要“无意义”的字体变化</font><font style="vertical-align: inherit;">，您毕竟可以使用CSS和</font><font style="vertical-align: inherit;">标签使文本变为粗体/斜体。</font><font style="vertical-align: inherit;">HTML 5仍然允许它们，但声明以这种方式标记文本</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有任何意义</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><code>&lt;em&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而</font></font><code>&lt;strong&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，它仅表示“强调”或“强调”某些内容，从而使浏览器完全可以使用它进行渲染。</font><font style="vertical-align: inherit;">默认情况下，</font><font style="vertical-align: inherit;">大多数浏览器将</font></font><code>em</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照</font></font><code>strong</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标准建议的</font><font style="vertical-align: inherit;">斜体和</font><font style="vertical-align: inherit;">粗体进行</font><font style="vertical-align: inherit;">渲染</font><font style="vertical-align: inherit;">，但是并不一定要这样做（它们可能使用不同的颜色，字体大小，字体等）。</font><font style="vertical-align: inherit;">您可以使用CSS以所需的方式更改行为。</font><font style="vertical-align: inherit;">您可以根据需要将其设置为</font></font><code>em</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">粗体</font></font><code>strong</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，例如将其设置为粗体和红色。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry猴子A</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML格式元素：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML还定义了特殊元素，用于定义具有特殊含义的文本。</font><font style="vertical-align: inherit;">HTML使用&lt;b&gt;和&lt;i&gt;之类的元素来格式化输出，例如粗体或斜体文本。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML粗体和强格式：</font></font></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML &lt;b&gt;元素定义粗体文本，没有任何额外的重要性。</font></font></p>
</blockquote>

<pre><code>&lt;b&gt;This text is bold&lt;/b&gt;
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML &lt;strong&gt;元素定义强文本，并增加了语义上的“强”重要性。</font></font></p>
</blockquote>

<pre><code>&lt;strong&gt;This text is strong&lt;/strong&gt;
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML斜体和强调格式：</font></font></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML &lt;i&gt;元素定义斜体文本，没有任何额外的重要性。</font></font></p>
</blockquote>

<pre><code>&lt;i&gt;This text is italic&lt;/i&gt;
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML &lt;em&gt;元素定义了强调的文本，具有附加的语义重要性。</font></font></p>
</blockquote>

<pre><code>&lt;em&gt;This text is emphasized&lt;/em&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙前端</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“它们具有相同的效果。但是，XHTML是一种更干净，较新的HTML版本，建议使用该</font></font><code>&lt;strong&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记。strong更好，因为它更易于阅读-含义更清晰。此外，它</font></font><code>&lt;strong&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传达了含义-显示文本强烈-虽然</font></font><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（用于粗体表示）传达了一种方法-粗体显示文本，但是对于“ strong”而言，如果您使用CSS样式表来更改使文本变得更坚固的方法，则代码仍然有意义。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;em&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ </font><font style="vertical-align: inherit;">之间的区别</font><font style="vertical-align: inherit;">也是如此</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google dixit：</font></font></p>

<p><a href="http://wiki.answers.com/Q/What_is_the_difference_between_HTML_tags_b_and_strong" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://wiki.answers.com/Q/What_is_the_difference_between_HTML_tags_b_and_strong</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam凯卡卡西</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">b</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">i</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示您希望文本显示为粗体或斜体。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">strong</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">em</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示您希望以用户理解为“重要”的方式呈现文本。</font><font style="vertical-align: inherit;">默认设置是将strong呈现为粗体，将em呈现为斜体，但是其他一些文化可能会使用其他映射。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像程序中的字符串一样，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">b</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">i</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将被“硬编码”，而</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">strong</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">em</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将被“本地化”。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Mandy</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应避免使用它们，因为它们描述了文本的样式。</font><font style="vertical-align: inherit;">而是使用</font></font><code>&lt;strong&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和，</font></font><code>&lt;em&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它描述了文本的语义（含义）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与HTML中的所有内容一样，您应该考虑的不是</font><font style="vertical-align: inherit;">真正的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">外观</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而是真正的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">含义</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当然，对您而言可能只是粗体和斜体，而对于屏幕阅读器而言则不是。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil神奇</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于使用</font></font><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  标签的</font><font style="vertical-align: inherit;">文本加粗  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于使用</font></font><code>&lt;strong&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  标签</font><font style="vertical-align: inherit;">很重要的文本  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于使用</font></font><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  标签的</font><font style="vertical-align: inherit;">文本斜体样式  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于使用</font></font><code>&lt;em&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  标签的</font><font style="vertical-align: inherit;">强调文字  </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam猪猪</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅在由于任何原因使CSS样式类不方便或无法使用时才使用它们（例如博客系统，仅允许在帖子中使用某些标签，并最终允许使用嵌入的样式）。</font><font style="vertical-align: inherit;">另一个原因是支持非常老的浏览器（某些移动设备？）或原始搜索引擎（提供点</font></font><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>&lt;strong&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记，而不是分析CSS样式）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果可以定义CSS样式，请使用它们。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim猪猪伽罗</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，出于这个响应线程中提到的原因，我同时使用了&lt;strong&gt;和&lt;b&gt;。</font><font style="vertical-align: inherit;">有时候，粗体显示某些文本</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来会</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更好，但是在语义上并不一定比句子的其余部分重要。</font><font style="vertical-align: inherit;">这是我目前正在处理的页面上的示例：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“检索有关&lt;b&gt;长曲棍球&lt;/ b&gt;的&lt;strong&gt;所有&lt;/ strong&gt;图书。”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在那句话中，“全部”一词非常重要，而“曲棍网兜球”则不那么重要-我只是希望它是粗体的，因为它代表一个搜索词，因此我希望进行视觉上的分隔。</font><font style="vertical-align: inherit;">如果您正在使用屏幕阅读器来查看页面，那么我真的认为不需要强调“长曲棍球”一词。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会倾向于想象大多数Web开发人员都使用其中一种，但是两者都很好-正如某些人所声称的，&lt;b&gt;绝对不被弃用。</font><font style="vertical-align: inherit;">对我来说，这只是视觉吸引力和意义之间的一条细线。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva梅村村</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>&lt;em&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;strong&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签是传统代表性。</font><font style="vertical-align: inherit;">但是</font><font style="vertical-align: inherit;">在</font><strong><font style="vertical-align: inherit;">HTML5中</font></strong><strong><font style="vertical-align: inherit;">为</font></strong><font style="vertical-align: inherit;">它们赋予了</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语义含义</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<p><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于HTML4中的字体样式。</font></font><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于斜体和</font></font><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">粗体。</font><font style="vertical-align: inherit;">在HTML5中，</font></font><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签具有新的语义含义，即“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替代语音或语气</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”，</font></font><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签具有在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样式上偏移</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的含义</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签的</font><font style="vertical-align: inherit;">示例用途</font><font style="vertical-align: inherit;">是-分类名称，技术术语，另一种语言的惯用语，音译，思想，西方文本中的船名。</font><font style="vertical-align: inherit;">如 -</font></font></p>

<pre><code>&lt;p&gt;&lt;i&gt;I hope this works&lt;/i&gt;, he thought.&lt;/p&gt;
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签的</font><font style="vertical-align: inherit;">示例用法</font><font style="vertical-align: inherit;">是文档摘录中的关键字，评论中的产品名称，交互式文本驱动软件中的可操作单词，文章线索。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面的示例段落在样式上从其后面的段落偏移。</font></font></p>

<pre><code>&lt;p&gt;&lt;b class="lead"&gt;The event takes place this upcoming Saturday, and over 3,000 people have already registered.&lt;/b&gt;&lt;/p&gt;
</code></pre>

<p><code>&lt;em&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>&lt;strong&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML4中具有强调和强调的含义。</font><font style="vertical-align: inherit;">但是在HTML5中，这</font></font><code>&lt;em&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意味着</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">强调重点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>&lt;strong&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很强的重要性</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在下面的示例中，在阅读</font><font style="vertical-align: inherit;">... </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的单词时应该进行语言更改</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;p&gt;Make sure to sign up &lt;em&gt;before&lt;/em&gt; the day of the event, September 16, 2016&lt;/p&gt;
</code></pre>

<p>In the same example we can use the <code>&lt;strong&gt;</code> tag as follows ..</p>

<pre><code>&lt;p&gt;Make sure to sign up &lt;em&gt;before&lt;/em&gt; the day of the event, &lt;strong&gt;September 16, 2016&lt;/strong&gt;&lt;/p&gt;
</code></pre>

<p>to give importance on the event date.</p>

<p>MDN Ref: </p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b" rel="nofollow noreferrer">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b</a></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i" rel="nofollow noreferrer">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i</a>  </p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em" rel="nofollow noreferrer">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em</a> </p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong" rel="nofollow noreferrer">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蓝染大人</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如其他人所说，&lt;b&gt;和&lt;i&gt;是显式的（即“使此文本变为粗体”），而&lt;strong&gt;和&lt;em&gt;是语义的（即“应强调此文本”）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在现代网络浏览器的背景下，很难看到差异（它们似乎都产生相同的结果，对吗？），但请考虑为视障人士使用屏幕阅读器。</font><font style="vertical-align: inherit;">如果屏幕阅读器遇到&lt;i&gt;标记，它将不知道该怎么办。</font><font style="vertical-align: inherit;">但是，如果遇到&lt;em&gt;标签，它就会知道应该将其中的内容强调给侦听器。</font><font style="vertical-align: inherit;">在其中，您得到了实际的区别。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyTom</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><code>&lt;em&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>&lt;strong&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比</font></font><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">消耗更多带宽</font></font><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们还需要更多的输入（如果不是自动生成的）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们还会使编辑器屏幕上出现更多文本。</font><font style="vertical-align: inherit;">我似乎记得，程序员喜欢较小的源文件（如果相同）。</font><font style="vertical-align: inherit;">（而且，让我们成为现实，它们是相同的。是的，存在“技术性” </font><font style="vertical-align: inherit;">差异</font><font style="vertical-align: inherit;">（&lt;i&gt; </font></font><i><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">咳嗽</font></font></em></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &lt;/ i&gt;，</font><i><em><font style="vertical-align: inherit;">咳嗽</font></em></i><font style="vertical-align: inherit;">，对不起），但这首先是虚假的。”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用上述任何一个标签，您都可以使用样式表来自定义样式，但是如果您希望它们显示的外观与默认呈现不同，可以使用它们。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端凯神乐</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管</font></font><code>&lt;strong&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;em&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在语义上当然更正确，但似乎肯定有合理的理由将</font></font><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签用于客户编写的内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此类内容中，单词或短语可能会以粗体或斜体显示，因此通常不应该由我们来分析此类粗体或斜体的语义推理。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，这样的内容可以指粗体和斜体词和短语，以传达特定的含义。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个例子是英语考试题，指示学生替换粗体字。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomPro</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是定义的摘要以及建议的用法：</font></font></p>

<p><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...文本跨度关注所正在绘制功利的目的，而不输送任何额外的重要性，并没有暗示替代的语态和语气，如</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键词</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在一个文档抽象，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产品名称</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在评论中，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可操作的话</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在交互式文本驱动软件或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文章目录</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><code>&lt;strong&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ...现在代表的是重要性，而不是强调。</font></font></p>

<p><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...以替代的声音或心情表达的文本范围，或以其他方式偏离正常散文，表示某种不同的文本质量，例如</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分类名称</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">技术术语</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种语言</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><em><font style="vertical-align: inherit;">惯用语</font></em><font style="vertical-align: inherit;">，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">思想</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，或</font><font style="vertical-align: inherit;">西方文字中</font><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">船名</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><code>&lt;em&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 表示重点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（这些都是W3C来源的直接引号，并增加了我的强调。请参阅：</font></font><a href="https://rawgithub.com/whatwg/html-differences/master/Overview.html#changed-elements"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://rawgithub.com/whatwg/html-differences/master/Overview.html#changed-elements"><font style="vertical-align: inherit;">//rawgithub.com/whatwg/html-differences/master/Overview.html#changed-elements</font></a><font style="vertical-align: inherit;">和</font></font><a href="http://www.w3.org/TR/html401/struct/text.html#h-9.2.1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.w3.org /TR/html401/struct/text.html#h-9.2.1</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（原始）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green逆天</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都与样式有关，而</font></font><code>&lt;em&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;strong&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是语义。</font><font style="vertical-align: inherit;">在HTML 4中，第一个分类为</font></font><a href="http://www.w3.org/TR/REC-html40/present/graphics.html#h-15.2.1" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字体样式元素</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">第二个分类</font><font style="vertical-align: inherit;">为</font></font><a href="http://www.w3.org/TR/REC-html40/struct/text.html#h-9.2.1" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">短语元素</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如您所指出的那样，</font></font><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>&lt;em&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常被认为是相似的，因为浏览器经常以斜体显示这两者。</font><font style="vertical-align: inherit;">但是根据规范，</font></font><code>&lt;em&gt;</code> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示重点</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;strong&gt;</code> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示更强的重点</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这很明显，但是经常会被误解。</font><font style="vertical-align: inherit;">另一方面，何时使用</font></font><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">何时使用之间的区别</font></font><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上是样式问题。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Tony伽罗</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><code>&lt;strong&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>&lt;em&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在文档中添加额外的语义含义。</font><font style="vertical-align: inherit;">碰巧的是，它们还为您的文本提供了大胆的斜体样式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您当然可以使用CSS覆盖它们的样式。</font></font></p>

<p><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而</font></font><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在另一方面只适用的字体样式，不应再使用。</font><font style="vertical-align: inherit;">（因为您应该使用CSS进行格式化，并且如果文本实际上很重要，那么无论如何您都可能会将其设置为“强”或“强调”！）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望有道理。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ADavaid</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是明确的-它们分别指定粗体和斜体。</font></font></p>

<p><code>&lt;strong&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>&lt;em&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是语义的-它们指定所包含的文本应以某种方式“强”或“强调”，通常是粗体和斜体，但允许通过CSS控制实际样式。</font><font style="vertical-align: inherit;">因此，这些在现代网页中是首选。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

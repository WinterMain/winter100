---
layout: question
title:  如何使用Sass正确避免在HTML上嵌入Twitter Bootstrap类名称
date:   2020-03-24T06:13:18.000Z
description: 我正在一个刚刚开始的Rails项目中工作。我们希望使用twitter bootstrap作为样式的基础，一开始，我们将直接在HTML代码上直接使用boot...
img: 
author: Tom小宇宙
category: question
answer: 4
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在一个刚刚开始的Rails项目中工作。</font><font style="vertical-align: inherit;">我们希望使用twitter bootstrap作为样式的基础，一开始，我们将直接在HTML代码上直接使用bootstrap的类名，就像bootstrap的文档中所示，但是在阅读了以下文章之后：</font></font></p>

<p><a href="http://blog.pamelafox.org/2012/12/a-tale-of-two-bootstraps-lessons.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可维护CSS的经验教训</font></font></a> </p>

<p><a href="http://ruby.bvision.com/blog/please-stop-embedding-bootstrap-classes-in-your-html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请停止在您的HTML中嵌入Bootstrap类</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很清楚为什么不使用引导程序是不正确的，所以在读了一些之后：</font></font></p>

<p><a href="http://thenittygritty.co/decouple-css" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将CSS与HTML分离</font></font></a></p>

<p><a href="http://smacss.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">smacss</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除其他外，似乎使用sass @extend是避免使用bootstrap的类名的正确方法，所以不要这样做：</font></font></p>

<pre><code>&lt;button type="submit" class="btn"&gt;Search&lt;/button&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以这样做：</font></font></p>

<pre><code>&lt;button type="submit" class="button"&gt;Search&lt;/button&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且我们的sass代码如下所示：</font></font></p>

<pre><code>.button {<font></font>
   @extend ".btn";<font></font>
}<font></font>
</code></pre>

<p>The problem with that approach, besides the bunch of extra selectors that will be added each time we extend a bootstrap class just to use a different name, is that in cases where bootstrap uses selectors like this:</p>

<pre><code>.form-search .input-append .btn, .form-search .form-input-append .btn {<font></font>
  border-radius: 0 14px 14px 0;<font></font>
} <font></font>
</code></pre>

<p>the button won't get the right style because sass will not apply that same rule to our custom class name, I mean, sass is <strong>not</strong> doing this: </p>

<pre><code>.form-search .input-append .btn, .form-search .input-append .button, <font></font>
.form-search .form-input-append .btn, .form-search .form-input-append .button {<font></font>
  border-radius: 0 14px 14px 0;<font></font>
} <font></font>
</code></pre>

<p>So I wonder, is this the right way to avoid embedding bootstrap's class names into HTML, if so, how should I handle this problem (it happens frequently)? if not, what would be a better way to use custom class names but still get the styles from bootstrap.</p>

<p>I really appreciate your thoughts on this. Please keep in mind that I am just learning about overall web design (css, sass, less, html, js, etc.).</p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于大多数新手来说，您是在正确的道路上；</font><font style="vertical-align: inherit;">您一直在阅读的资源非常棒。</font><font style="vertical-align: inherit;">但是，我认为您担心的问题可能没有道理：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...按钮将无法获得正确的样式，因为sass不会将相同的规则应用于我们的自定义类名称...</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，我认为您一定会误会。</font><font style="vertical-align: inherit;">根据Sass文档：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@extend通过将扩展选择器（例如.seriousError）插入样式表中扩展选择器（例如.error）出现的任何地方来工作。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">完整的代码示例，</font><font style="vertical-align: inherit;">请参见</font></font><a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#how_it_works" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://sass-lang.com/documentation/file.SASS_REFERENCE.html#how_it_works</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您原来的解决方案实际上是正确的。</font><font style="vertical-align: inherit;">使用扩展，但不带引号：</font></font></p>

<pre><code>.button {<font></font>
  @extend .btn; //no quotes<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用您的示例对此进行了测试，并且可以正常工作。</font><font style="vertical-align: inherit;">Sass用“ .btn”复制所有选择器，在这些新创建的选择器上，用“ .button”替换“ .btn”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，如果Sass为您的喜好产生过多的重复，也不必担心（只要您遵循发布的链接所指出的最佳实践）即可。</font><font style="vertical-align: inherit;">如果服务器使用gzip或等效文件，则很容易压缩重复代码；</font><font style="vertical-align: inherit;">客户端应该不会注意到加载速度变慢，尽管“解压缩” CSS可能会花费更长的时间。</font><font style="vertical-align: inherit;">至于CSS选择器的速度，也不必担心。</font><font style="vertical-align: inherit;">速度对选择器至关重要的唯一情况是在JavaScript方面，尤其是jQuery。</font><font style="vertical-align: inherit;">对于您的Sass代码，只需遵循关于可维护性的最佳实践（尤其是在尝试模块化时，即SMACSS），那么一切都会很好。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>@extend</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但不要引用选择器：</font></font></p>

<p><code>
.button {
   @extend .btn;
}
</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您会看到Sass也像您想要的那样扩展了相关的选择器（</font></font><code>.form-search .input-append .btn</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等）。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">…除了每次我们扩展引导类以使用其他名称时都会添加的额外选择器之外…</font></font></p>
</blockquote>

<p><code>@extend</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过复制选择器起作用。</font><font style="vertical-align: inherit;">如果您不希望这样做，可以改为在HTML中“扩展”-即添加Bootstrap的类名。</font><font style="vertical-align: inherit;">:)</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您将.btn重命名为.button时，还应该将.form-search重命名为.form-searchnew等吗？</font><font style="vertical-align: inherit;">在这种情况下，上面示例中的sass代码应类似于：</font></font></p>

<pre><code>.form-searchnew .input-appendnew .button {<font></font>
  extend(.form-search .input-append .btn);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是有道理的（我不知道SASS），并导致您期望的CSS。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为引导程序不仅仅与CSS有关。</font><font style="vertical-align: inherit;">Bootstrap是关于CSS，html（structure）和javascript的。</font><font style="vertical-align: inherit;">即使您将css与html分开，我也不容易迁移到其他框架。</font><font style="vertical-align: inherit;">除了CSS外，您还必须更改html结构和javascript调用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例从Twitter的Bootstrap 2迁移到3（请参阅：将</font></font><a href="https://stackoverflow.com/questions/17974998/updating-bootstrap-to-version-3-what-do-i-have-to-do/18069643"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap更新到版本3-我必须做什么？</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">我还想知道是否可以通过将旧的类扩展到新的CSS来进行迁移（请参阅：</font></font><a href="http://bassjobsen.weblogs.fm/migrate-your-templates-from-twitter-bootstrap-2-x-to-twitter-bootstrap-3/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="http://bassjobsen.weblogs.fm/migrate-your-templates-from-twitter-bootstrap-2-x-to-twitter-bootstrap-3/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">//bassjobsen.weblogs.fm/migrate-your-templates-from-twitter-bootstrap-2-x-to-twitter-bootstrap -3 /</font></a><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">阅读</font></font><a href="http://bootply.com/bootstrap-3-migration-guide" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迁移指南后</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我认为您不能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他解决方案。</font><font style="vertical-align: inherit;">Angular JS将Twitter的Bootstrap与javascript分离。</font><font style="vertical-align: inherit;">同样在这种情况下，迁移似乎也并非一帆风顺，请参阅：</font></font><a href="https://stackoverflow.com/questions/18150629/angular-dialog-directives-with-bootstrap-3/18241469"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 3的Angular Dialog指令</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许还会阅读这篇文章：</font></font><a href="http://www.jasonwong.org/post/45849350459/migrating-from-zurb-foundation-twitter-bootstrap-to" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="http://www.jasonwong.org/post/45849350459/migrating-from-zurb-foundation-twitter-bootstrap-to" rel="nofollow noreferrer"><font style="vertical-align: inherit;">//www.jasonwong.org/post/45849350459/migrating-from-zurb-foundation-twitter-bootstrap-to</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它指的是</font></font><a href="http://bourbon.io/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bourdon</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://neat.bourbon.io/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Neat</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们网站上的示例：</font></font></p>

<pre><code>&lt;!-- HTML markup for the section right below this code block --&gt;<font></font>
&lt;section&gt;<font></font>
  &lt;aside&gt;What is it about?&lt;/aside&gt;<font></font>
  &lt;article&gt;Neat is an open source semantic grid framework built on top of Sass and Bourbon…&lt;/article&gt;<font></font>
&lt;/section&gt;<font></font>
<font></font>
// Enter Neat<font></font>
section {<font></font>
  @include outer-container;<font></font>
  aside { @include span-columns(3); }<font></font>
  article { @include span-columns(9); }<font></font>
}<font></font>
// And the result is...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如他们所说：“它完全依赖于Sass mixins，不会污染HTML”，这似乎是您所寻找的方式。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenSam</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议您看看sass占位符类</font></font><a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholders" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholders</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以免使您的CSS蒙上阴影。</font><font style="vertical-align: inherit;">很可能您不会使用引导程序中包含的每个元素，并且占位符只有在代码中实际进行了扩展时才会写入样式表。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，我认为人们倾向于对css框架如何工作以及css和html实际如何去耦感到困惑。</font><font style="vertical-align: inherit;">对于非常大的网站（或您最终希望变得非常大的网站），性能和css文件大小至关重要，那么最好的选择是OOCSS。</font><font style="vertical-align: inherit;">这不可避免地意味着您直接在HTML中设置了格式代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您可以降低效率并希望HTML干净，请确保使用语义类（按钮示例：号召性用语，号召性用语辅助，提交，btn-primary，btn-企业颜色等）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还请记住将JS与CSS分离！</font><font style="vertical-align: inherit;">使用特殊的类来附加行为（例如js-submit，js-call-to-action等）。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后但并非最不重要的一点：不要计划更新CSS框架。</font><font style="vertical-align: inherit;">这些框架旨在为您提供领先优势，而不是成为您的整体设计解决方案。</font><font style="vertical-align: inherit;">扩展它们，使它们适应，使它们成为自己的，投资设计并创建自己的外观，以使您的应用程序与众不同。</font><font style="vertical-align: inherit;">如果使您想到更新的原因是跟上标准更改的烦恼，请更好地使用指南针mixins。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

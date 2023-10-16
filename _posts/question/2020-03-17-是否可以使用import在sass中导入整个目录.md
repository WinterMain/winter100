---
layout: question
title:  是否可以使用\`import在sass中导入整个目录？
date:   2020-03-17T09:12:07.000Z
description: 我正在用SASS局部模块对样式表进行模块化，如下所示：\`import partials/header\`import partials/viewpor...
img: 
author: Davaid前端LEY
category: question
answer: 7
tags: 导入 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在用SASS局部模块对样式表进行模块化，如下所示：</font></font></p>

<pre><code>@import partials/header<font></font>
@import partials/viewport<font></font>
@import partials/footer<font></font>
@import partials/forms<font></font>
@import partials/list_container<font></font>
@import partials/info_container<font></font>
@import partials/notifications<font></font>
@import partials/queues<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法包含整个部分目录（这是一个充满SASS部分的目录），例如@import指南针或其他内容？ </font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1930篇《是否可以使用\`import在sass中导入整个目录？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过定义要导入的文件，可以使用所有文件夹的通用定义。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，</font></font><code>@import "style/*"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将编译样式文件夹中的所有文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在</font></font><a href="https://kolosek.com/sass-import/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到有关Sass导入功能的更多信息</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云泡芙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#import" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#import</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来不像。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果这些文件中的任何一个总是需要其他文件，则让它们导入其他文件，而仅导入顶级文件。</font><font style="vertical-align: inherit;">如果它们都是独立的，那么我认为您将必须像现在一样继续这样做。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯阳光</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在Rails项目中使用Sass，则sass-rails gem </font></font><a href="https://github.com/rails/sass-rails" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/rails/sass-rails</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有全局导入功能。</font></font></p>

<pre><code>@import "foo/*"     // import all the files in the foo folder<font></font>
@import "bar/**/*"  // import all the files in the bar tree<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要在另一个答案中回答这个问题，“如果您导入目录，那么如何确定导入顺序？没有办法不会带来某种新的复杂性。” </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人认为将文件组织到目录中可以减少复杂性。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我组织的项目是一个相当复杂的应用程序。</font><font style="vertical-align: inherit;">17个目录中有119个Sass文件。</font><font style="vertical-align: inherit;">这些大致符合我们的观点，主要用于调整，而繁重的工作则由我们的自定义框架处理。</font><font style="vertical-align: inherit;">对我来说，几行导入的目录比119行导入的文件名要简单一些。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了解决加载顺序，我们将需要首先加载的文件（mixin，变量等）放置在早期加载的目录中。</font><font style="vertical-align: inherit;">否则，加载顺序是并且应该无关紧要的……如果我们做的正确。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi小宇宙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检出</font></font><a href="https://github.com/chriseppstein/sass-globbing" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无聊的项目</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim古一</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此功能永远不会成为Sass的一部分。</font><font style="vertical-align: inherit;">主要原因之一是进口订单。</font><font style="vertical-align: inherit;">在CSS中，最后导入的文件可以覆盖之前声明的样式。</font><font style="vertical-align: inherit;">如果导入目录，如何确定导入顺序？</font><font style="vertical-align: inherit;">不可能没有引入新的复杂性。</font><font style="vertical-align: inherit;">通过保留一个导入列表（如您在示例中所做的那样），您可以清楚地知道导入顺序。</font><font style="vertical-align: inherit;">如果您希望能够放心地覆盖另一个文件中定义的样式，或者在一个文件中写入mixins并在另一个文件中使用它们，那么这是至关重要的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要进行更彻底的讨论，</font></font><a href="https://github.com/haml/haml/issues/97" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处</font><font style="vertical-align: inherit;">查看</font><a href="https://github.com/haml/haml/issues/97" rel="noreferrer"><font style="vertical-align: inherit;">此封闭功能请求</font></a><font style="vertical-align: inherit;">：</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Stafan</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><code>__partials__.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在相同目录下</font><font style="vertical-align: inherit;">创建一个文件</font></font><code>partials</code></p>

<pre><code>|- __partials__.scss<font></font>
|- /partials<font></font>
   |- __header__.scss<font></font>
   |- __viewport__.scss<font></font>
   |- ....<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在中</font></font><code>__partials__.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我写道：</font></font></p>

<pre><code>@import "partials/header";<font></font>
@import "partials/viewport";<font></font>
@import "partials/footer";<font></font>
@import "partials/forms";<font></font>
....<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，当我要导入整个内容时</font></font><code>partials</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，只需编写即可</font></font><code>@import "partials"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果要导入其中任何一个，也可以编写</font></font><code>@import "partials/header"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐米亚</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过将sass文件放置在文件夹中来导入和导入该文件中的所有文件，从而使用一些解决方法，如下所示：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件路径：main / current / _current.scss</font></font></p>

<p><code>@import "placeholders";
 @import "colors";</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在下一个目录级别的文件中，您仅使用import导入文件，该文件从该目录中导入了所有文件：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件路径：main / main.scss</font></font></p>

<p><code>@import "EricMeyerResetCSSv20";
 @import "clearfix";
 @import "current";</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，您就可以拥有相同数量的文件，就像您要导入整个目录一样。</font><font style="vertical-align: inherit;">注意顺序，最后出现的文件将覆盖匹配的阶梯。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>

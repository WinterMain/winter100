---
layout: question
title:  如何从Sass样式表中仅导入变量和mixins？
date:   2020-03-24T06:12:41.000Z
description: 我正在使用Zurb Foundation 4（S）CSS框架，并且遇到了大量重复样式的问题。这是因为在每一个文件，我\`import 'foundation...
img: 
author: Sam蛋蛋Itachi
category: question
answer: 0
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Zurb Foundation 4（S）CSS框架，并且遇到了大量重复样式的问题。</font><font style="vertical-align: inherit;">这是因为在每一个文件，我</font></font><code>@import 'foundation'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在，从基金会的所有样式也导入（对于规则</font></font><code>body</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>.row</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>.button</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和朋友）。</font><font style="vertical-align: inherit;">由于所有Zurb的样式都被声明为四到五次，因此这会导致SCSS编译时间较长，并且在Chrome中难以导航Web开发人员控制台。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了减轻这种情况，我创建了一个</font></font><code>globals</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">scss文件，其中包含Foundation使用的可覆盖变量（从中复制粘贴</font></font><code>foundation_and_overrides.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后</font></font><code>foundation_and_overrides</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导入全局变量）。</font><font style="vertical-align: inherit;">仅导入</font></font><code>globals.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件仅在不使用Foundation mixins </font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">文件中消除重复。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在使用Foundation mixins的文件中：是否可以仅从SCSS文件中导入mixins，而不导入具体的Foundation样式？ </font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>

---
layout: question
title:  禁用LESS-CSS覆盖calc（）\[重复\]
date:   2020-03-18T11:20:00.000Z
description:                                                                          ...
img: 
author: 凯卡卡西
category: question
answer: 4
tags: css CSS
topic: CSS
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
                            <a href="/questions/11972084/less-aggressive-compilation-with-css3-calc" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用CSS3 calc进行不太积极的编译</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （4个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2016-09-23 13：45：38Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我正在尝试用我的LESS代码在CSS3中执行此操作：</font></font></p>

<pre><code>width: calc(100% - 200px);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，LESS编译时将输出以下内容：</font></font></p>

<pre><code>width: calc(-100%);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法告诉LESS不要以这种方式编译它并正常输出它？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2187篇《禁用LESS-CSS覆盖calc（）[重复]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry卡卡西</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了使用</font></font><a href="https://stackoverflow.com/a/17904128/1331430"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的其他答案中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所述的转义值外</font><font style="vertical-align: inherit;">，还可以通过启用“ </font></font><a href="http://lesscss.org/usage/#command-line-usage-strict-math" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严格数学”</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">来解决此问题</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启用严格的数学运算后，仅处理不必要括号内的数学运算，因此您的代码：</font></font></p>

<pre><code>width: calc(100% - 200px);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启用严格的数学选项后，将可以按预期工作。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请注意，严格数学不仅在内部应用，而且在全局应用</font></font><code>calc()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这意味着，如果您具有：</font></font></p>

<pre><code>font-size: 12px + 2px;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Less将不再处理数学运算-它将输出</font></font><code>font-size: 12px + 2px</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然是无效的CSS。</font><font style="vertical-align: inherit;">您必须将Lesser应该处理的所有数学都包装在（以前是不必要的）括号中：</font></font></p>

<pre><code>font-size: (12px + 2px);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在开始新项目时，严格数学是一个不错的选择，否则您可能不得不重写大部分代码。</font><font style="vertical-align: inherit;">对于最常见的用例，</font></font><a href="https://stackoverflow.com/a/17904128/1331430"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个答案中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">描述的转义字符串方法</font><font style="vertical-align: inherit;">更合适。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪Stafan小卤蛋</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://github.com/SomMeri/less4j/wiki/Less-Language-Escaping" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转义字符串</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（也称为转义值）：</font></font></p>

<pre><code>width: ~"calc(100% - 200px)";
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，如果您需要将Less Math与转义字符串混合使用：</font></font></p>

<pre><code>width: calc(~"100% - 15rem +" (10px+5px) ~"+ 2em");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编译为：</font></font></p>

<pre><code>width: calc(100% - 15rem + 15px + 2em);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，这作为“少”将值（转义的字符串和数学结果）连接在一起时起作用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO猴子</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Fabricio的解决方案效果很好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">calc的一个非常常见的用例是添加100％的宽度并在元素周围添加一些边距。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以这样做：</font></font></p>

<pre><code>@someMarginVariable: 15px;<font></font>
<font></font>
margin: @someMarginVariable;<font></font>
width: calc(~"100% - "@someMarginVariable*2);<font></font>
width: -moz-calc(~"100% - "@someMarginVariable*2);<font></font>
width: -webkit-calc(~"100% - "@someMarginVariable*2);<font></font>
width: -o-calc(~"100% - "@someMarginVariable*2);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者可以使用mixin，例如：</font></font></p>

<pre><code>.fullWidthMinusMarginPaddingMixin(@marginSize,@paddingSize) {<font></font>
  @minusValue: (@marginSize+@paddingSize)*2;<font></font>
  padding: @paddingSize;<font></font>
  margin: @marginSize;<font></font>
  width: calc(~"100% - "@minusValue);<font></font>
  width: -moz-calc(~"100% - "@minusValue);<font></font>
  width: -webkit-calc(~"100% - "@minusValue);<font></font>
  width: -o-calc(~"100% - "@minusValue);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva十三</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带变量的转义字符串的示例：</font></font></p>

<pre><code>@some-variable-height: 10px;<font></font>
<font></font>
...<font></font>
<font></font>
div {<font></font>
    height: ~"calc(100vh - "@some-variable-height~")";<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编译为</font></font></p>

<pre><code>div {<font></font>
    height: calc(100vh - 10px );<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

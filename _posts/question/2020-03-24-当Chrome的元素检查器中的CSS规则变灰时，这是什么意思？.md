---
layout: question
title:  当Chrome的元素检查器中的CSS规则变灰时，这是什么意思？
date:   2020-03-24T10:41:38.000Z
description: 我正在h2使用Google Chrome浏览器的元素检查器检查网页上的元素，并且某些CSS规则（似乎已应用）显示为灰色。删除线似乎表明一条规则已被覆盖，但...
img: 
author: 神无前端Jim
category: question
answer: 7
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在</font></font><code>h2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Google Chrome浏览器的元素检查器检查网页上的元素，并且某些CSS规则（似乎已应用）显示为灰色。</font><font style="vertical-align: inherit;">删除线似乎表明一条规则已被覆盖，但是样式变灰是什么意思？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在该问题已经有许多正确答案之后，我要回答很久，因为我遇到了另一种情况，即Chome DevTools中的CSS代码块显示为灰色且不可编辑：有问题的块包含</font></font><a href="https://en.wikipedia.org/wiki/Zero-width_space" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">U + 200B ZERO WIDTH SPACE字符</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">找到并删除它们后，我可以再次在Chrome DevTools中编辑该块。</font><font style="vertical-align: inherit;">大概这也可能与其他非ascii字符一起发生，我没有尝试弄清楚。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><a href="https://i.stack.imgur.com/f9Ybm.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/f9Ybm.jpg" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">chrome开发人员的新版本显示了它的继承来源。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Eva</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用webpack时，在重建后重新加载页面时，在源代码中已更改的所有css规则或属性都将显示为灰色。</font><font style="vertical-align: inherit;">这真的很烦人，迫使我每次都重新加载页面。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迈克尔·科尔曼（Michael Coleman）的答案正确。</font><font style="vertical-align: inherit;">我只想添加一个简单的图像即可。</font><font style="vertical-align: inherit;">他包含的链接有一个简单的示例：</font><a href="http://commandlinefanatic.com/art033ex4.html" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://commandlinefanatic.com/art033ex4.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//commandlinefanatic.com/art033ex4.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML / DOM看起来像这样...</font></font></p>

<p><a href="https://i.stack.imgur.com/JqP48.png" rel="noreferrer"><img src="https://i.stack.imgur.com/JqP48.png" alt="的HTML"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您选择p元素时，Chrome中的样式窗格看起来像这样...</font></font></p>

<p><a href="https://i.stack.imgur.com/bOXDn.png" rel="noreferrer"><img src="https://i.stack.imgur.com/bOXDn.png" alt="样式窗格"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您所见，p元素继承自其祖先（div）。</font><font style="vertical-align: inherit;">那么为什么风格会</font></font><code>background-color: blue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变灰呢？</font><font style="vertical-align: inherit;">因为它是规则集的一部分，该规则集至少具有一种可继承的样式。</font><font style="vertical-align: inherit;">那可继承的风格是</font></font><code>text-indent: 1em</code></p>

<p><code>background-color:blue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是可继承的，而是包含在</font></font><code>text-indent: 1em</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中</font><font style="vertical-align: inherit;">的规则集的一部分，</font><font style="vertical-align: inherit;">它是可继承的，并且Chrome开发人员希望在显示规则集时保持完整。</font><font style="vertical-align: inherit;">但是，为了在规则集中可以从不能继承的样式中区分出样式，将无法继承的样式显示为灰色。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着该规则已被另一个具有更高优先级的规则替换。</font><font style="vertical-align: inherit;">例如带有以下内容的样式表：</font></font></p>

<pre><code>h2 {<font></font>
  color: red;<font></font>
}<font></font>
h2 {<font></font>
  color: blue;<font></font>
}<font></font>
</code></pre>

<p>The inspector will show the rule <code>color:red;</code> grayed out and <code>color:blue;</code> normally.</p>

<p>Read up on <a href="http://dorward.me.uk/www/css/inheritance/" rel="nofollow noreferrer">CSS inheritance</a> to learn which rules are inherited/have higher priority.</p>

<p><strong>EDIT:</strong></p>

<p>Mixup: the grayed out rules are the unset rules, which use a special default stylesheet that is applied to <em>all</em> elements(the rules that make the element renderable, because all styles have to have a value).</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐神奇</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着该规则已被继承，但不适用于所选元素：</font></font></p>

<p><a href="http://code.google.com/chrome/devtools/docs/elements-styles.html#computed_style" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://code.google.com/chrome/devtools/docs/elements-styles.html#computed_style</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该窗格仅包含直接适用于所选元素的规则中的属性。</font><font style="vertical-align: inherit;">为了另外显示继承的属性，请启用显示继承的复选框。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些属性将以灰色字体显示。</font></font></strong></p>
</blockquote>

<p><img src="https://i.stack.imgur.com/o626m.png" alt="灰色的规则继承自祖先"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实时示例：检查包含文本“ Hello，world！”的元素。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>div { <font></font>
  margin: 0;<font></font>
}<font></font>
<font></font>
div#foo { <font></font>
  margin-top: 10px; <font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div id="foo"&gt;Hello, world!&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果通过检查器添加样式，但是这种新样式不适用于所选元素，也会发生这种情况。</font><font style="vertical-align: inherit;">通常显示的样式仅是所选元素的样式，因此灰色表示您刚刚添加的样式不会选择在DOM导航器中具有焦点的元素。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

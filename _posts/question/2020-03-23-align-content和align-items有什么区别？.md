---
layout: question
title:  align-content和align-items有什么区别？
date:   2020-03-23T02:13:36.000Z
description: 任何人都可以告诉我之间的差异align-items和align-content？...
img: 
author: 斯丁
category: question
answer: 7
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何人都可以告诉我之间的差异</font></font><code>align-items</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>align-content</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Pro猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据我从</font></font><a href="https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-template-columns-rows" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解到的</font><font style="vertical-align: inherit;">：</font></font></p>

<p>when you use align-item or justify-item, you are adjusting "the content inside a grid item along the&nbsp;column axis or row&nbsp;axis respectively.</p>

<p>But:
if you use align-content or justify-content, you are setting the position a grid along the column axis or the&nbsp;row&nbsp;axis. it occurs when you have a grid in a bigger container and width or height are inflexible (using px).</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主要区别在于元素的高度不同时！</font><font style="vertical-align: inherit;">然后您可以看到它们在行中如何居中\结束\开始</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对齐内容</font></font></strong></p>

<p><code>align-content</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制横轴（即垂直方向，如果</font></font><code>flex-direction</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>row</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，和水平如果</font></font><code>flex-direction</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>column</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）的定位</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的多个</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">线相对于彼此。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（段落的思考线垂直散开，朝上堆叠，朝下堆叠。这是</font></font><code>flex-direction</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在行范式下）。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对齐项目</font></font></strong></p>

<p><code>align-items</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 控制柔性元素的单个线的横轴。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（如果段落中的某行包含一些常规文本和一些较高的文本（如数学方程式，请考虑如何对齐）。在这种情况下，它将是一行中每种文本的底部，顶部还是中心对齐？）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇樱</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，我已经在浏览器中检查了它们。</font></font></p>

<p><code>align-content</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以改变一个线对行方向或宽度高度为列时，它的值是拉伸，或添加之间或者周围的线空的空间</font></font><code>space-between</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>space-around</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>flex-start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>flex-end values</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><code>align-items</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以更改项目在行区域内的高度或位置。</font><font style="vertical-align: inherit;">当没有包装物品时，它们只有一行，该行的区域始终被拉伸到伸缩框区域（即使物品溢出），并且</font></font><code>align-content</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对一行没有影响。</font><font style="vertical-align: inherit;">因此，它对未包装的物品没有影响，并且</font></font><code>align-items</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当所有物品都在同一行上时</font><font style="vertical-align: inherit;">，只能</font><font style="vertical-align: inherit;">更改物品的位置或拉伸它们。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果将它们包装起来，则每行中都有多行和多个项目。</font><font style="vertical-align: inherit;">并且，如果每行的所有项目都具有相同的高度（对于行方向），则该行的高度将等于这些项目的高度，并且更改</font></font><code>align-items</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值</font><font style="vertical-align: inherit;">不会产生任何影响</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果要影响</font></font><code>align-items</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包裹物品的时间并且包裹物品具有相同的高度（对于行方向），则必须先使用</font></font><code>align-content</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Stretch值才能扩大线条区域。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，</font></font><code>align-items</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于单行中的项目。</font><font style="vertical-align: inherit;">因此，对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主轴</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上的一行元素</font><font style="vertical-align: inherit;">，</font></font><code>align-items</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将使这些项目彼此对齐，并且将从下一行的新视角开始。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，</font></font><code>align-content</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不会干扰一行中的项目，而是会干扰</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">rows本身</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，</font></font><code>align-content</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将尝试使行相对于彼此对齐并弯曲容器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查这个小提琴：</font><a href="https://jsfiddle.net/htym5zkn/8/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://jsfiddle.net/htym5zkn/8/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/htym5zkn/8/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现示例</font></font><a href="http://flexboxfroggy.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://flexboxfroggy.com/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将花费您10-20分钟，在21级时，您会找到问题的答案。</font><font style="vertical-align: inherit;">它提到：</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">align-content</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确定行之间的间距，而</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">align-items</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
  确定项目在容器中如何整体对齐。</font><font style="vertical-align: inherit;">如果只有一行，则</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">align-content</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无效</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>align-items</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">flex-box </font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">属性就像</font></font><code>justify-content</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">沿着</font><font style="vertical-align: inherit;">主轴一样</font><font style="vertical-align: inherit;">，沿</font><font style="vertical-align: inherit;">横轴对齐flex容器内的项目</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（默认情况下</font></font><code>flex-direction: row</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，交叉轴对应于垂直，主轴对应于水平。</font></font><code>flex-direction: column</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这两个分别互换）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个</font></font><code>align-items:center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">外观</font><font style="vertical-align: inherit;">的示例</font><font style="vertical-align: inherit;">：</font></font></p>

<p><a href="https://i.stack.imgur.com/Wcfm5.png" rel="noreferrer"><img src="https://i.stack.imgur.com/Wcfm5.png" alt="align-items：居中"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但</font></font><code>align-content</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于多线柔性盒。</font><font style="vertical-align: inherit;">当项目在一行中时，它无效。</font><font style="vertical-align: inherit;">它根据其值对齐整个结构。</font><font style="vertical-align: inherit;">这是一个示例</font></font><code>align-content: space-around;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
</font></font><a href="https://i.stack.imgur.com/OHTV1.png" rel="noreferrer"><img src="https://i.stack.imgur.com/OHTV1.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里是如何</font></font><code>align-content: space-around;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><code>align-items:center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">外观：</font></font><a href="https://i.stack.imgur.com/qX3as.png" rel="noreferrer"><img src="https://i.stack.imgur.com/qX3as.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意第一行中的第三个框和所有其他框更改为在该行中垂直居中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是一些可使用的Codepen链接：</font></font></p>

<p><a href="http://codepen.io/asim-coder/pen/MKQWbb" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://codepen.io/asim-coder/pen/MKQWbb</font></font></a></p>

<p><a href="http://codepen.io/asim-coder/pen/WrMNWR" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://codepen.io/asim-coder/pen/WrMNWR</font></font></a></p>

<p><a href="http://codepen.io/enxaneta/full/adLPwv/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一支超酷的笔，可以显示并让您使用flexbox中的几乎所有内容。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

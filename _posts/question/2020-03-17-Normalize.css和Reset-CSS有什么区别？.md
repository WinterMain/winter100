---
layout: question
title:  Normalize.css和Reset CSS有什么区别？
date:   2020-03-17T09:18:42.000Z
description: 我知道CSS重置是什么，但是最近我听说了这个叫做Normalize.css的新东西。Normalize.css和Reset CSS有什么区别？标准...
img: 
author: 神奇Davaid
category: question
answer: 6
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道CSS重置是什么，但是最近我听说了这个叫做Normalize.css的新东西。</font></font></p>

<p><font style="vertical-align: inherit;"></font><a href="http://necolas.github.com/normalize.css/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Normalize.css</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://meyerweb.com/eric/tools/css/reset/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Reset CSS有</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么</font><font style="vertical-align: inherit;">区别</font><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标准化CSS和重置CSS有什么区别？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS重置只是一个新的流行词吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗飞云</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时，最好的解决方案是同时使用两者。</font><font style="vertical-align: inherit;">有时，两者都不使用。</font><font style="vertical-align: inherit;">有时，是使用其中一个。</font><font style="vertical-align: inherit;">如果要在所有浏览器中重置所有样式（包括边距和填充），请使用reset.css。</font><font style="vertical-align: inherit;">然后自己应用所有装饰和样式。</font><font style="vertical-align: inherit;">如果您只是喜欢内置样式，但想要更多的跨浏览器同步性，即规范化，则可以使用normalize.css。</font><font style="vertical-align: inherit;">但是，如果您选择同时使用reset.css和normalize.css，请先链接reset.css样式表，然后再链接（立即）normalize.css样式表。</font><font style="vertical-align: inherit;">有时，并非总是哪个更好，而是何时使用哪个相对于何时同时使用两者以及何时不使用两者。</font><font style="vertical-align: inherit;">恕我直言。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端小宇宙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主要区别在于：</font></font></strong></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS重置旨在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有内置的浏览器样式。</font><font style="vertical-align: inherit;">H1-6，p，strong，em等标准元素最终看起来完全相似，根本没有装饰。</font><font style="vertical-align: inherit;">然后，您应该自己添加</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有装饰</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><a href="http://necolas.github.com/normalize.css/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Normalize CSS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旨在使内置浏览器样式</font><font style="vertical-align: inherit;">在各浏览</font><font style="vertical-align: inherit;">器之间</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保持一致</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">H1-6之类的元素将在浏览器中以一致的方式显示为粗体，较大等。</font><font style="vertical-align: inherit;">然后，您应该仅添加</font><font style="vertical-align: inherit;">设计需要的装饰</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">差异</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的设计</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">a）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遵循版式和其他方面的通用约定，并且</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">b）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Normalize.css适用于您的目标受众，则使用Normalize.CSS而不是CSS重置将使您自己的CSS更小，更快地编写。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯斯丁达蒙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Normalize.css主要是一组样式，基于其作者认为会看起来不错并使其在所有浏览器中看起来一致的样式。</font><font style="vertical-align: inherit;">重置基本上从元素上去除样式，因此您可以更好地控制所有样式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我都用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Reset中的某些样式，Normalize.css中的一些样式。</font><font style="vertical-align: inherit;">例如，在Normalize.css中，有一种样式可以确保所有输入元素都具有相同的字体（在文本输入和文本区域之间）不会出现。</font><font style="vertical-align: inherit;">重置没有这种样式，因此输入通常使用不同的字体。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以基本上，使用两个CSS文件可以更好地“均衡”所有内容；）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问候！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GONear</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先</font></font><code>reset.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是您可以使用的最差的库，因为在将边距填充和其他属性的值分配给之后，它删除了HTML的标准结构并以文本形式显示了您编写的所有内容</font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，例如，您将发现</font></font><code>&lt;H1&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与相同</font></font><code>&lt;H6&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，</font></font><code>Normalize.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用标准结构，也修复了其中几乎所有的错误。</font><font style="vertical-align: inherit;">例如，它解决了从一个浏览器到另一个浏览器显示表单的问题。</font><font style="vertical-align: inherit;">规范化通过修改此功能来解决此问题，因此您的元素将在所有浏览器中显示为相同。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Stafan</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从其描述来看，它似乎试图使用户代理的默认样式在所有浏览器中保持一致，而不是像重置一样剥离所有默认样式。</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与许多CSS重置不同</font><strong><font style="vertical-align: inherit;">，保留有用的默认值</font></strong><font style="vertical-align: inherit;">。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新设置似乎有必要满足定制设计规范，尤其是在复杂的非样板类型的设计项目中。</font><font style="vertical-align: inherit;">听起来标准化似乎是进行纯Web编程的好方法，但是网站通常是Web编程和UI / UX设计规则之间的结合。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

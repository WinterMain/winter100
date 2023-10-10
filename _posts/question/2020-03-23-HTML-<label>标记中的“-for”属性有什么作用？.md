---
layout: question
title:  HTML <label>标记中的“ for”属性有什么作用？
date:   2020-03-23T06:14:38.000Z
description: 我想知道以下两个代码段之间的区别是什么：<label>Input here   </label><input type='text' name='t...
img: 
author: 十三小哥
category: question
answer: 4
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道以下两个代码段之间的区别是什么：</font></font></p>

<pre><code>&lt;label&gt;Input here : &lt;/label&gt;<font></font>
&lt;input type='text' name='theinput' id='theinput'/&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font></p>

<pre><code>&lt;label for='theinput'&gt;Input here : &lt;/label&gt;<font></font>
&lt;input type='text' name='theinput' id='theinput'/&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我确定当您使用特殊的JavaScript库时，它会执行某些操作，但是除此之外，它是否可以验证HTML或出于其他原因而需要？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之，它所做的就是引用</font></font><code>id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入的，仅此</font><font style="vertical-align: inherit;">而已</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;label for="the-id-of-the-input"&gt;Input here:&lt;/label&gt;<font></font>
&lt;input type="text" name="the-name-of-input" id="the-id-of-the-input"&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小TomNear</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>&lt;label&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">的for属性</font><font style="vertical-align: inherit;">应等于相关元素的id属性，以将它们绑定在一起。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">for属性显示此标签代表相关的输入字段，复选框或单选按钮或与其关联的任何其他数据输入字段。</font><font style="vertical-align: inherit;">例如</font></font></p>

<pre><code>    &lt;li&gt;<font></font>
&lt;label&gt;{translate:blindcopy}&lt;/label&gt;<font></font>
            &lt;a class="" href="#" title="{translate:savetemplate}" onclick="" &gt;&lt;i class="fa fa-list" class="button" &gt;&lt;/i&gt;&lt;/a&gt; &amp;nbsp <font></font>
            &lt;input type="text" id="BlindCopy" name="BlindCopy" class="splitblindcopy" /&gt;<font></font>
    &lt;/li&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p>The <code>for</code> attribute associates the label with a control element, as defined in the description of <a href="http://www.w3.org/TR/html401/interact/forms.html#h-17.9.1" rel="noreferrer"><code>label</code></a> in the HTML 4.01 spec. This implies, among other things, that when the <code>label</code> element receives focus (e.g. by being clicked on), it passes the focus on to its associated control. The association between a label and a control may also be used by speech-based user agents, which may give the user a way to ask what the associated label is, when dealing with a control. (The association may not be as obvious as in visual rendering.)</p>

<p>In the first example in the question (without the <code>for</code>), the use of <code>label</code> markup has no logical or functional implication – it’s useless, unless you do something with it in CSS or JavaScript.</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML规范没有强制性要求将标签与控件关联，但是Web内容可访问性指南（WCAG）2.0确实如此。</font><font style="vertical-align: inherit;">在技​​术文档</font></font><a href="http://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/H44" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">H44：使用标签元素将文本标签与表单控件相关联中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对此进行了描述，该文档</font><font style="vertical-align: inherit;">还解释了隐式关联（通过嵌套，例如</font></font><code>input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">inside </font></font><code>label</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）不如通过</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">的显式关联得到广泛支持</font><font style="vertical-align: inherit;">，</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

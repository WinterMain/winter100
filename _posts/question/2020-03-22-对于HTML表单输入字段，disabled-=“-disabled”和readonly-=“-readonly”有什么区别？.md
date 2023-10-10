---
layout: question
title:  对于HTML表单输入字段，disabled =“ disabled”和readonly =“ readonly”有什么区别？
date:   2020-03-22T12:21:09.000Z
description: 我已经阅读了一些，但是对于不同的浏览器如何处理事情，我似乎找不到任何可靠的方法。...
img: 
author: 泡芙
category: question
answer: 1
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经阅读了一些，但是对于不同的浏览器如何处理事情，我似乎找不到任何可靠的方法。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2572篇《对于HTML表单输入字段，disabled =“ disabled”和readonly =“ readonly”有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font><code>readonly</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素就是不可编辑，但是当根据被发送</font></font><code>form</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的提交。</font><font style="vertical-align: inherit;">一个</font></font><code>disabled</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素是不可编辑和提交不发送电子邮件。</font><font style="vertical-align: inherit;">另一个区别是</font></font><code>readonly</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素可以集中（而“通过表格制表”时要集中）而</font></font><code>disabled</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素不能</font><font style="vertical-align: inherit;">集中</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://web.archive.org/web/20150913195206/https://kreotekdev.wordpress.com/2007/11/08/disabled-vs-readonly-form-fields/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这篇很棒的文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="http://www.w3.org/TR/html4/interact/forms.html#h-17.12" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">w3c的定义中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读有关此内容的更多信息</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">引用重要的部分：</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键差异</font></font></strong></p>
  
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁用属性</font></font></strong></p>
  
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁用的表单元素的值不会传递到处理器方法。</font><font style="vertical-align: inherit;">W3C将此称为成功元素（其工作方式类似于未选中的表单复选框。）</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">某些浏览器可能会为禁用的表单元素覆盖或提供默认样式。</font><font style="vertical-align: inherit;">（将文本涂成灰色或浮雕）Internet Explorer 5.5对此特别讨厌。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁用的表单元素不会获得焦点。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在选项卡导航中会跳过禁用的表单元素。</font></font></li>
  </ul>
  
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只读属性</font></font></strong></p>
  
  <ul>
  <li>Not all form elements have a readonly attribute. Most notable, the <code>&lt;SELECT&gt;</code> , <code>&lt;OPTION&gt;</code> , and <code>&lt;BUTTON&gt;</code> elements do not have readonly
  attributes (although they both have disabled attributes)</li>
  <li>Browsers provide no default overridden visual feedback that the form element is read only. (This can be a problem… see below.)</li>
  <li>Form elements with the readonly attribute set will get passed to the form processor.</li>
  <li>Read only form elements can receive the focus</li>
  <li>Read only form elements are included in tabbed navigation.</li>
  </ul>
</blockquote></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

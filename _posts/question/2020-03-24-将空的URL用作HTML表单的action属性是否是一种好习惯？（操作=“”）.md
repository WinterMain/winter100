---
layout: question
title:  将空的URL用作HTML表单的action属性是否是一种好习惯？（操作=“”）
date:   2020-03-24T10:59:41.000Z
description: 我想知道是否有人可以使用空白HTML表单操作将其发布回当前页面，从而给出“最佳实践”响应。这里有一篇帖子问空白的HTML表单动作是做什么的，并且像这样...
img: 
author: 伽罗理查德
category: question
answer: 9
tags: 表单 HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道是否有人可以使用空白HTML表单操作将其发布回当前页面，从而给出“最佳实践”响应。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里有</font></font><a href="https://stackoverflow.com/questions/641292/html-forms-without-actions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一篇帖子问空白的HTML表单动作是做什么的，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且像</font></font><a href="http://www.thefutureoftheweb.com/blog/use-empty-form-action-submit-to-current" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些页面</font><font style="vertical-align: inherit;">表明它很好，但是我想知道人们的想法。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我使用Classic ASP时，我经常这样做。</font><font style="vertical-align: inherit;">通常，当需要某种形式的服务器端验证作为输入时（在AJAX时代之前），我会使用它。</font><font style="vertical-align: inherit;">我看到的主要缺点是，它没有在文件级别将编程逻辑与表示分离开来。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐泡芙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我以前根本不指定动作属性。</font><font style="vertical-align: inherit;">实际上是我的框架的设计方式，所有页面都精确地提交回相同的地址。</font><font style="vertical-align: inherit;">但是今天我发现了问题。</font><font style="vertical-align: inherit;">有时我借用动作属性值来进行一些后台调用（我猜有些人将它们命名为AJAX）。</font><font style="vertical-align: inherit;">因此，我发现如果未指定动作属性，IE会将动作属性值保持为空。</font><font style="vertical-align: inherit;">根据我的理解，这有点奇怪，因为如果未指定action属性，则JavaScript对应项至少必须未定义。</font><font style="vertical-align: inherit;">无论如何，我的意思是选择最佳实践之前，您需要了解更多上下文，例如是否在JavaScript中使用该属性。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Tom</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需使用 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>
</blockquote>

<pre><code>&lt;form action="?" method="post" enctype="multipart/form-data" name="myForm" id="myForm"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不违反HTML5标准。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamGil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为最好</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">明确</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">声明表单的发布位置。</font><font style="vertical-align: inherit;">如果您想完全安全，则要在表单中将表单提交回自身，请在action属性中输入与表单相同的URL。</font><font style="vertical-align: inherit;">尽管主流浏览器的评估结果</font></font><code>""</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是相同的，但您不能保证非主流浏览</font><font style="vertical-align: inherit;">器的评估结果</font><font style="vertical-align: inherit;">会相同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，整个URL包括Juddling之类的GET数据也会指出。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将使用HTML5进行验证。</font></font></p>

<pre><code>&lt;form action="#"&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不包含action属性，</font></font><a href="http://blog.andlabs.org/2010/03/bypassing-csrf-protections-with.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则会</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开该页面以进行</font><a href="http://blog.andlabs.org/2010/03/bypassing-csrf-protections-with.html" rel="noreferrer"><font style="vertical-align: inherit;">iframe clickjacking</font></a><font style="vertical-align: inherit;">攻击，其中涉及一些简单的步骤：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">攻击者将您的页面包装在iframe中</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">iframe URL包含与表单字段同名的查询参数</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提交表单后，查询值将插入数据库中</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户的标识信息（电子邮件，地址等）已被泄露</font></font></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考文献</font></font></strong></p>

<ul>
<li><a href="http://blog.andlabs.org/2010/03/bypassing-csrf-protections-with.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过ClickJacking和HTTP参数污染绕过CSRF保护</font></font></a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西猪猪</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML 5中</font></font><code>action=""</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不支持，因此请勿这样做。</font><font style="vertical-align: inherit;">坏习惯。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相反，如果您完全完全取消操作，则默认情况下它将提交到同一页面，所以我认为这是最佳做法：</font></font></p>

<pre><code>&lt;form&gt;This will submit to the current page&lt;/form&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用php汇总表格，则可能需要考虑以下内容。</font></font><a href="http://www.w3schools.com/php/php_form_validation.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里阅读更多有关它的信息。</font></font></a></p>

<pre><code>&lt;form method="post" action="&lt;?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?&gt;"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，您可以</font></font><code>#</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">记住，尽管这会像锚点一样滚动到页面顶部。</font></font></p>

<pre><code>&lt;form action="#"&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，</font><font style="vertical-align: inherit;">当前HTML5草案</font><font style="vertical-align: inherit;">的“ </font></font><a href="http://dev.w3.org/html5/spec/Overview.html#attr-fs-action" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表单提交”小节</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不允许</font></font><code>action=""</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这违反规范。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>action</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><code>formaction</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内容属性，如果指定，必须有一个值是一个有效的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非空</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> URL用空格潜在的包围。</font><font style="vertical-align: inherit;">（添加了重点）</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"></font><a href="https://stackoverflow.com/a/1132015/27727"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">墨卡托答案中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用的部分</font><font style="vertical-align: inherit;">是对</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实现</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的要求</font><font style="vertical-align: inherit;">，而不是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作者</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的要求</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">作者必须遵守作者的要求。</font><font style="vertical-align: inherit;">引用</font></font><a href="http://dev.w3.org/html5/spec/Overview.html#how-to-read-this-specification" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何阅读本规范</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p>In particular, there are conformance requirements that apply to producers, for example authors and the documents they create, and there are conformance requirements that apply to consumers, for example Web browsers. They can be distinguished by what they are requiring: a requirement on a producer states what is allowed, while a requirement on a consumer states how software is to act.</p>
</blockquote>

<p>The change from HTML4—which did allow an empty URL—was made because “<a href="https://www.w3.org/Bugs/Public/show_bug.cgi?id=14215#c1" rel="noreferrer">browsers do weird things with an empty <code>action=""</code> attribute</a>”. Considering the reason for the change, its probably best not to do that in HTML4 either.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通常使用action =“”，它是XHTML有效的，并将GET数据保留在URL中。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

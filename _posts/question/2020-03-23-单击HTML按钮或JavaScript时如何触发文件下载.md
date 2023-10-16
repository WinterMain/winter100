---
layout: question
title:  单击HTML按钮或JavaScript时如何触发文件下载
date:   2020-03-23T01:15:01.000Z
description: 这太疯狂了，但是我不知道该怎么做，而且由于这些单词很普遍，因此很难在搜索引擎上找到我需要的东西。我认为这应该很容易回答。我想要一个简单的文件下载，该操...
img: 
author: 伽罗理查德
category: question
answer: 11
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这太疯狂了，但是我不知道该怎么做，而且由于这些单词很普遍，因此很难在搜索引擎上找到我需要的东西。</font><font style="vertical-align: inherit;">我认为这应该很容易回答。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要一个简单的文件下载，该操作与此相同：</font></font></p>

<pre><code>&lt;a href="file.doc"&gt;Download!&lt;/a&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我想使用HTML按钮，例如以下任一按钮：</font></font></p>

<pre><code>&lt;input type="button" value="Download!"&gt;<font></font>
&lt;button&gt;Download!&lt;/button&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样，是否可以通过JavaScript触发简单下载？</font></font></p>

<pre><code>$("#fileRequest").click(function(){ /* code to download? */ });
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我绝对</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在寻找一种创建类似于按钮的锚，使用任何后端脚本或与服务器标头或mime类型混淆的方法。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2574篇《单击HTML按钮或JavaScript时如何触发文件下载》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，添加按钮而不是锚文本非常有效。</font></font></p>

<pre><code>&lt;a href="file.doc"&gt;&lt;button&gt;Download!&lt;/button&gt;&lt;/a&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照大多数规则，这可能不可行，但看起来还不错。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙古一</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用</font></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记，请不要忘记使用指向文件的整个网址，即：</font></font></p>

<pre><code>&lt;a href="http://www.example.com/folder1/file.doc"&gt;Download&lt;/a&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以添加标签，但不添加任何文本，但带有链接。</font><font style="vertical-align: inherit;">当您像在代码中一样单击按钮时，只需运行$（“ yourlinkclass”）。click（）函数。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYStafan</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有一个复杂的URL，另一种方法</font></font><code>file.doc?foo=bar&amp;jon=doe</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是在表单内添加隐藏字段</font></font></p>

<pre><code>&lt;form method="get" action="file.doc"&gt;<font></font>
  &lt;input type="hidden" name="foo" value="bar" /&gt;<font></font>
  &lt;input type="hidden" name="john" value="doe" /&gt;<font></font>
  &lt;button type="submit"&gt;Download Now&lt;/button&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">灵感来自@Cfreak答案，该答案不完整</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载属性</font></font></p>

<pre><code> &lt;a class="btn btn-success btn-sm" href="/file_path/file.type" download&gt;<font></font>
     &lt;span&gt;download &lt;/span&gt;&amp;nbsp;&lt;i class="fa fa-download"&gt;&lt;/i&gt;<font></font>
 &lt;/a&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的</font></font><code>&lt;body&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;/body&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">之间的任意位置</font><font style="vertical-align: inherit;">，使用以下代码放置一个按钮：</font></font></p>

<pre><code>&lt;button&gt;<font></font>
    &lt;a href="file.doc" download&gt;Click to Download!&lt;/a&gt;<font></font>
&lt;/button&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这肯定可以工作！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁飞云阳光</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不能使用表单，则使用</font></font><a href="https://www.npmjs.com/package/downloadjs" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">downloadjs的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种方法</font><font style="vertical-align: inherit;">非常合适。</font><font style="vertical-align: inherit;">downloadjs在后台使用blob和html 5文件API：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{downloadjs（URL，文件名）}）/&gt;</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">*这是jsx / react语法，但可以在纯HTML中使用</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这最终对我有用，因为要下载的文件是在加载页面时确定的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JS更新表单的action属性：</font></font></p>

<pre><code>function setFormAction() {<font></font>
    document.getElementById("myDownloadButtonForm").action = //some code to get the filename;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用JS更新表单的action属性：</font></font></p>

<pre><code>&lt;body onLoad="setFormAction();"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有提交按钮的表单标签：</font></font></p>

<pre><code>&lt;form method="get" id="myDownloadButtonForm" action=""&gt;<font></font>
    Click to open document:  <font></font>
    &lt;button type="submit"&gt;Open Document&lt;/button&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无效</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;form method="get" id="myDownloadButtonForm" action="javascript:someFunctionToReturnFileName();"&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidJinJin</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引导版本</font></font></strong></p>

<pre><code>&lt;a class="btn btn-danger" role="button" href="path_to_file"<font></font>
   download="proposed_file_name"&gt;<font></font>
  Download<font></font>
&lt;/a&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">记录</font></font><a href="https://getbootstrap.com/docs/4.0/components/buttons/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Bootstrap 4文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，也可以在Bootstrap 3中使用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用HTML5 </font></font><code>download</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">触发下载</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;a href="path_to_file" download="proposed_file_name"&gt;Download&lt;/a&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪里：</font></font></p>

<ul>
<li><code>path_to_file</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是路径解析为URL </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同根同源</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着页面和文件必须共享相同的域，子域，协议（HTTP与HTTPS）和端口（如果指定）。</font><font style="vertical-align: inherit;">例外是</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/Blob" rel="noreferrer"><code>blob:</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">and </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs" rel="noreferrer"><code>data:</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（始终有效）和and </font></font><a href="https://en.wikipedia.org/wiki/File_URI_scheme" rel="noreferrer"><code>file:</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（永远无效）。</font></font></li>
<li><code>proposed_file_name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是要保存到的文件名。</font><font style="vertical-align: inherit;">如果为空，则浏览器默认为文件名。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档：</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://html.spec.whatwg.org/multipage/links.html#downloading-resources" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML标准上下载</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-download" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML标准上</font></font><code>download</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://caniuse.com/#feat=download" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CanIUse</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于按钮，您可以执行</font></font></p>

<pre><code>&lt;form method="get" action="file.doc"&gt;<font></font>
   &lt;button type="submit"&gt;Download!&lt;/button&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>

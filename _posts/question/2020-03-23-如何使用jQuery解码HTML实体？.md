---
layout: question
title:  如何使用jQuery解码HTML实体？
date:   2020-03-23T13:39:27.000Z
description: 如何使用jQuery解码字符串中的HTML实体？...
img: 
author: 蛋蛋猿
category: question
answer: 6
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用jQuery解码字符串中的HTML实体？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这与选择的解决方案完全相反。</font></font></p>

<pre><code>var decoded = $("&lt;div/&gt;").text(encodedStr).html();
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOL蛋蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于ExtJS用户，如果您已经有了编码的字符串，例如，当库函数的返回值是innerHTML内容时，请考虑以下ExtJS函数：</font></font></p>

<pre><code>Ext.util.Format.htmlDecode(innerHtmlContent)
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西梅Harry</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只需要将HTML实体字符（⇓）作为HTML按钮的值即可。</font><font style="vertical-align: inherit;">HTML代码从浏览器开始就看起来不错：</font></font></p>

<pre><code>&lt;input type="button" value="Embed &amp; Share  &amp;dArr;" id="share_button" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我添加了一个切换开关，该切换开关也应显示字符。</font><font style="vertical-align: inherit;">这是我的解决方案</font></font></p>

<pre><code>$("#share_button").toggle(<font></font>
    function(){<font></font>
        $("#share").slideDown();<font></font>
        $(this).attr("value", "Embed &amp; Share " + $("&lt;div&gt;").html("&amp;uArr;").text());<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将再次在按钮中显示⇓。</font><font style="vertical-align: inherit;">我希望这可以帮助某人。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LStafan小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">he</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库，</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">库可从</font></font><strong><em><a href="https://github.com/mathiasbynens/he" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/mathiasbynens/he获得</font></font></a></em></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>console.log(he.decode("J&amp;#246;rg &amp;amp J&amp;#xFC;rgen rocked to &amp;amp; fro "));<font></font>
// Logs "Jörg &amp; Jürgen rocked to &amp; fro"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><a href="https://github.com/mathiasbynens/he/issues/18" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">质疑图书馆的作者</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有任何理由在客户端代码中使用此图书馆，以支持</font><font style="vertical-align: inherit;">此处及其他地方的</font><a href="https://stackoverflow.com/a/10526903/1709587"><font style="vertical-align: inherit;">其他答案中</font></a></font><code>&lt;textarea&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">技巧</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">他提供了一些可能的理由：</font></font><a href="https://stackoverflow.com/a/10526903/1709587"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在服务器端使用node.js，则使用用于HTML编码/解码的库可为您提供一个在客户端和服务器端均可使用的解决方案。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">某些浏览器的实体解码算法存在错误或缺少对某些</font></font><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/named-character-references.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命名字符引用的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如，Internet Explorer将</font></font><code>&amp;nbsp;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确地</font><font style="vertical-align: inherit;">解码和呈现不间断空格（</font><font style="vertical-align: inherit;">），但将它们报告为普通空间，而不是通过DOM元素的</font></font><code>innerText</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性将其</font><font style="vertical-align: inherit;">报告为不间断空格</font><font style="vertical-align: inherit;">，从而打破了</font></font><code>&lt;textarea&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">hack（尽管只是次要的）。</font><font style="vertical-align: inherit;">此外，IE 8和IE 9根本</font></font><a href="https://stackoverflow.com/questions/15207604/ie8-is-not-rendering-some-of-the-html-name-entities"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不支持</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> HTML 5中添加的任何新的命名字符引用。</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的作者</font><font style="vertical-align: inherit;">还在</font></font><a href="http://mathias.html5.org/tests/html/named-character-references/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://mathias.html5.org/tests/html上</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">托管了对命名字符引用支持的测试。</font><a href="http://mathias.html5.org/tests/html/named-character-references/" rel="noreferrer"><font style="vertical-align: inherit;">/ named-character-references /</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在IE 8中，它报告超过一千个错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想避免与实体解码有关的浏览器错误和/或能够处理所有命名字符引用，则无法逃脱</font></font><code>&lt;textarea&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">；</font><font style="vertical-align: inherit;">你需要像</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样的图书馆</font><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他只是觉得很好，感觉用这种方式做事不太hacky。</font></font></p></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像Mike Samuel所说的那样，不要使用jQuery.html（）。text（）来解码html实体，因为这样做是不安全的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取而代之的是，使用模板渲染器（例如</font></font><a href="http://mustache.github.io/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mustache.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://stackoverflow.com/a/27385169/175954"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@VyvIT</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注释中的encodeEntities）。</font></font></p>

<p><a href="http://underscorejs.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Underscore.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实用程序带库带有</font></font><code>escape</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>unescape</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法，但是对于用户输入而言，它们并不安全：</font></font></p>

<p><strong><a href="http://underscorejs.org/#escape" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">_.escape（字符串）</font></font></a></strong></p>

<p><strong><a href="http://underscorejs.org/#unescape" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">_.unescape（字符串）</font></font></a></strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天猿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安全说明：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此答案（下面以其原始形式保留）可能会</font><font style="vertical-align: inherit;">在您的应用程序中</font><font style="vertical-align: inherit;">引入</font></font><a href="https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XSS漏洞</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不应该使用此答案。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读</font></font><a href="https://stackoverflow.com/a/1395954/1709587"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">lucascaro的答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取对该答案中漏洞的解释，然后改用该答案或</font></font><a href="https://stackoverflow.com/a/23596964/1709587"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mark Amery的答案中的方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其实试试看 </font></font></p>

<pre><code>var decoded = $("&lt;div/&gt;").html(encodedStr).text();
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

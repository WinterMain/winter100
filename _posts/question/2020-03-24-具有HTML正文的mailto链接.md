---
layout: question
title:  具有HTML正文的mailto链接
date:   2020-03-24T03:41:36.000Z
description: 我mailto在HTML文档中有几个链接。<a href="mailto etc...">我可以在mailto 部分插入HTML格式的正文hre...
img: 
author: DavaidTony宝儿
category: question
answer: 10
tags: HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><code>mailto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML文档中</font><font style="vertical-align: inherit;">有几个</font><font style="vertical-align: inherit;">链接。</font></font></p>

<pre><code>&lt;a href="mailto:etc..."&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以在</font></font><code>mailto:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分</font><font style="vertical-align: inherit;">插入HTML格式的正文</font></font><code>href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font></font></p>

<pre><code>&lt;a href="mailto:me@me.com?subject=Me&amp;body=&lt;b&gt;ME&lt;/b&gt;"&gt;Mail me&lt;/a&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，在iOS中（2016），添加</font></font><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记以简单的斜体，粗体格式非常好。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3327篇《具有HTML正文的mailto链接》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我以这种方式工作：</font></font></p>

<pre><code>var newLine = escape("\n");<font></font>
var body = "Hello" + newLine +"World";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出为：</font></font></p>

<pre><code>Hello<font></font>
World  <font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Harry</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何人都可以尝试以下操作（mailto函数仅接受纯文本，但在这里我展示了如何使用HTML内部文本属性以及如何将锚点添加为mailto正文参数）： </font></font></p>

<pre><code>//Create as many html elements you need.<font></font>
<font></font>
const titleElement = document.createElement("DIV");<font></font>
titleElement.innerHTML = this.shareInformation.title; // Just some string<font></font>
<font></font>
//Here I create an &lt;a&gt; so I can use href property<font></font>
const titleLinkElement = document.createElement("a");<font></font>
titleLinkElement.href = this.shareInformation.link; // This is a url<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...</font></font></p>

<pre><code>let mail = document.createElement("a");<font></font>
<font></font>
// Using es6 template literals add the html innerText property and anchor element created to mailto body parameter<font></font>
mail.href = <font></font>
  `mailto:?subject=${titleElement.innerText}&amp;body=${titleLinkElement}%0D%0A${abstractElement.innerText}`;<font></font>
mail.click();<font></font>
<font></font>
// Notice how I use ${titleLinkElement} that is an anchor element, so mailto uses its href and renders the url I needed<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以输入unicode值以插入换行符（即：），</font></font><code>\u0009</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是HTML标签具有不同程度的支持，应避免使用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><a href="https://dxr.mozilla.org/comm-central/rev/2a29ee0adb310b54a6a2df72034953fed8f2b043/comm/mailnews/compose/src/nsSmtpUrl.cpp#151" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">雷鸟支持</font></font></a> <code>html-body</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><code>mailto:me@me.com?subject=Me&amp;html-body=&lt;b&gt;ME&lt;/b&gt;</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值得指出的是，至少在iPhone上的Safari上，</font><font style="vertical-align: inherit;">似乎确实</font><font style="vertical-align: inherit;">在body参数中</font><font style="vertical-align: inherit;">插入了基本的HTML标签，如</font></font><code>&lt;b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>&lt;i&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;img&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（理想情况下，无论如何在其他情况下都不应使用CSS，更喜欢使用CSS）。</font></font><code>mailto:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作-他们在电子邮件客户端中很荣幸。</font><font style="vertical-align: inherit;">我尚未进行详尽的测试，以查看其他移动或桌面浏览器/电子邮件客户端组合是否支持此功能。</font><font style="vertical-align: inherit;">这是否真的符合标准也值得怀疑。</font><font style="vertical-align: inherit;">但是，如果要为该平台构建，可能会很有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如其他响应所指出的那样，在将其嵌入</font></font><code>mailto:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font><font style="vertical-align: inherit;">之前，还应该在整个主体上使用encodeURIComponent </font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光小胖</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管无法使用HTML格式化电子邮件正文，但可以按照先前的建议添加换行符。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您能够使用javascript，则“ encodeURIComponent（）”可能会像下面这样使用...</font></font></p>

<pre><code>var formattedBody = "FirstLine \n Second Line \n Third Line";<font></font>
var mailToLink = "mailto:x@y.com?body=" + encodeURIComponent(formattedBody);<font></font>
window.location.href = mailToLink;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有些事情是可能的，但不是全部，例如说您想要换行，而不是使用</font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">use</font></font><code>%0D%0A</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例： </font></font></p>



<pre><code>&lt;a href="mailto:?subject=&amp;body=Hello,%0D%0A%0D%0AHere is the link to the PDF Brochure.%0D%0A%0D%0ATo view the brochure please click the following link: http://www.uyslist.com/yachts/brochure.pdf"&gt;&lt;img src="images/email.png" alt="EMail PDF Brochure" /&gt;&lt;/a&gt;                        
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不。这根本不可能。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用了它，它似乎可以与Outlook一起使用，而不是使用html，但至少可以在将正文添加为输出时使用换行符设置文本格式。</font></font></p>

<pre><code>&lt;a href="mailto:email@address.com?subject=Hello world&amp;body=Line one%0DLine two"&gt;Email me&lt;/a&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门GO村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您在</font></font><a href="https://tools.ietf.org/html/rfc6068" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RFC 6068中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所看到的</font><font style="vertical-align: inherit;">，这是完全不可能的：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">特殊的</font></font><code>&lt;hfname&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“正文”表示关联的</font></font><code>&lt;hfvalue&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  是邮件的正文。</font><font style="vertical-align: inherit;">“正文”字段值旨在包含消息的第一个文本/纯文本正文部分的内容。</font><font style="vertical-align: inherit;">“正文”伪头字段主要用于生成用于自动处理的短消息（例如，用于邮件列表的“订阅”消息），而不是用于一般的MIME正文。</font></font></p>
</blockquote></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

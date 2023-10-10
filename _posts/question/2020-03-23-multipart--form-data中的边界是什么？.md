---
layout: question
title:  multipart / form-data中的边界是什么？
date:   2020-03-23T03:29:55.000Z
description: 我想问一个关于的问题multipart/form-data。在HTTP标头中，我发现Content-Type  multipart/form-data; ...
img: 
author: 猴子
category: question
answer: 1
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想问一个关于的问题</font></font><code>multipart/form-data</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在HTTP标头中，我发现</font></font><code>Content-Type: multipart/form-data; boundary=???</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>???</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免费的由用户来定义？</font><font style="vertical-align: inherit;">还是从HTML生成？</font><font style="vertical-align: inherit;">我可以定义</font></font><code>??? = abcdefg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋猿阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题的确切答案是：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，您可以为</font></font><code>boundary</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数</font><font style="vertical-align: inherit;">使用任意值</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为它的长度不超过70个字节，并且仅由</font></font><a href="https://en.wikipedia.org/wiki/US-ASCII" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">7位</font></font><code>US-ASCII</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（可打印）字符组成。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用的是</font></font><code>multipart/*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内容类型之一，则实际上</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要</font></font></em><font style="vertical-align: inherit;"></font><code>boundary</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>Content-Type</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标头中</font><font style="vertical-align: inherit;">指定</font><font style="vertical-align: inherit;">参数</font><font style="vertical-align: inherit;">，否则服务器（对于HTTP请求）将无法解析有效负载。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非您</font><em><font style="vertical-align: inherit;">完全</font></em><font style="vertical-align: inherit;">确定</font><font style="vertical-align: inherit;">在有效载荷数据</font><font style="vertical-align: inherit;">中仅使用</font><font style="vertical-align: inherit;">字符集</font><font style="vertical-align: inherit;">，否则</font><font style="vertical-align: inherit;">您可能还希望</font><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">标头</font><font style="vertical-align: inherit;">中将</font></font><code>charset</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数</font><font style="vertical-align: inherit;">设置为</font><font style="vertical-align: inherit;">。</font></font><code>UTF-8</code><font style="vertical-align: inherit;"></font><code>Content-Type</code><font style="vertical-align: inherit;"></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font><code>US-ASCII</code><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"></font><a href="http://www.ietf.org/rfc/rfc2046.txt" rel="noreferrer" title="多用途Internet邮件扩展（MIME）第二部分：媒体类型"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RFC2046的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些相关摘录</font><font style="vertical-align: inherit;">：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4.1.2。</font><font style="vertical-align: inherit;">字符集参数：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与某些其他参数值不同，charset参数的值不区分大小写。</font><font style="vertical-align: inherit;">在没有字符集参数的情况下必须假定的默认字符集是US-ASCII。</font></font></p>
</blockquote></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5.1。</font><font style="vertical-align: inherit;">多部分媒体类型</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如内容传输编码字段[RFC 2045]的定义中所述，类型“ multipart”的实体除“ 7bit”，“ 8bit”或“ binary”外不允许编码。</font><font style="vertical-align: inherit;">在任何情况下，“多部分”边界定界符和标头字段始终表示为7位US-ASCII（尽管标头字段可以按照RFC 2047编码非US-ASCII标头文本），并且正文部分中的数据可以在在每个适当的正文部分的基础上，具有Content-Transfer-Encoding字段。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多部分实体的“内容类型”字段需要一个参数“边界”。</font><font style="vertical-align: inherit;">然后将边界定界符行定义为完全由两个连字符（“-”，十进制值45）组成的行，其后是Content-Type标头字段中的边界参数值，可选的线性空白和终止CRLF。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边界分隔符不得出现在封装的材料中，并且长度不能超过70个字符，并且不计算两个前导连字符。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后一个主体部分之后的边界定界线是一个明显的定界符，它指示将不再跟随其他主体部分。</font><font style="vertical-align: inherit;">这样的定界线与之前的定界线相同，只是在边界参数值之后添加了两个连字符。</font></font></p>
</blockquote></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是使用任意边界的示例：</font></font></p>

<pre><code>Content-Type: multipart/form-data; charset=utf-8; boundary="another cool boundary"<font></font>
<font></font>
--another cool boundary<font></font>
Content-Disposition: form-data; name="foo"<font></font>
<font></font>
bar<font></font>
--another cool boundary<font></font>
Content-Disposition: form-data; name="baz"<font></font>
<font></font>
quux<font></font>
--another cool boundary--<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

---
layout: question
title:  使用<input type =“ file”>时限制文件格式？
date:   2020-03-18T02:14:47.000Z
description: 当用户单击<input type="file">HTML元素中的“浏览”按钮时，我想限制可以从本机OS文件选择器选择的文件类型。我有一种感觉，这是不可能的...
img: 
author: 西里猿LEY
category: question
answer: 8
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当用户单击</font></font><code>&lt;input type="file"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML元素中</font><font style="vertical-align: inherit;">的“浏览”按钮时，我想限制可以从本机OS文件选择器选择的文件类型</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我有一种感觉，这是不可能的，但我想知道是否有</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个解决方案。</font><font style="vertical-align: inherit;">我只想保留HTML和JavaScript；</font><font style="vertical-align: inherit;">请不要使用Flash。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green樱</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您实际上可以使用javascript做到这一点，但请记住js是客户端，因此，如果您要避免（如您所说的那样限制或限制）某些类型的文件，您实际上会在“警告用户”他们可以上传的文件类型。做它在服务器端。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想开始使用服务器端验证，</font><font style="vertical-align: inherit;">请看一下</font></font><a href="http://php.about.com/od/advancedphp/ss/php_file_upload_4.htm" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个基本教程</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">对于整个教程，请访问</font></font><a href="http://php.about.com/od/advancedphp/ss/php_file_upload.htm" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">祝好运！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端小胖JinJin</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议如下：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果必须让用户默认选择任何图像文件，请使用accept =“ image / *”</font></font></p>

<p><code>&lt;input type="file" accept="image/*" /&gt;</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想限制特定的图像类型，请使用accept =“ image / bmp，image / jpeg，image / png”</font></font></p>

<p><code>&lt;input type="file" accept="image/bmp, image/jpeg, image/png" /&gt;</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想限制为特定类型，请使用accept =“。bmp，.doc，.pdf”</font></font></p>

<p><code>&lt;input type="file" accept=".bmp, .doc, .pdf" /&gt;</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不能限制用户将文件文件管理器更改为所有文件，因此请始终在脚本和服务器中验证文件类型</font></font></p></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱西里猴子</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如前面的答案中所述，我们不能限制用户仅选择给定文件格式的文件。</font><font style="vertical-align: inherit;">但是使用html中的file属性上的accept标签确实很方便。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至于验证，我们必须在服务器端进行。</font><font style="vertical-align: inherit;">我们也可以在js的客户端执行此操作，但这不是万无一失的解决方案。</font><font style="vertical-align: inherit;">我们必须在服务器端进行验证。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于这些需求，我确实更喜欢struts2 Java Web应用程序开发框架。</font><font style="vertical-align: inherit;">借助其内置的文件上传功能，将文件上传到基于struts2的Web应用程序可谓小菜一碟。</font><font style="vertical-align: inherit;">只需提及我们希望在应用程序中接受的文件格式，其余所有内容都由框架本身的核心负责。</font><font style="vertical-align: inherit;">您可以在struts官方网站上进行检查。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil村村</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签与</font></font><code>accept</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性一起</font><font style="vertical-align: inherit;">使用</font></font></p>

<pre><code>&lt;input type="file" name="my-image" id="image" accept="image/gif, image/jpeg, image/png" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击</font></font><a href="http://caniuse.com/#feat=input-file-accept" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处以获取最新的浏览器兼容性表</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现场演示</font></font><a href="http://jsfiddle.net/rb1n9bfe/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要仅选择图像文件，可以使用此 </font></font><code>accept="image/*"</code></p>

<pre><code>&lt;input type="file" name="my-image" id="image" accept="image/*" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现场演示</font></font><a href="http://www.wufoo.com/html5/attributes/07-accept.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a></p>

<p><a href="https://i.stack.imgur.com/FWFiw.png" rel="noreferrer"><img src="https://i.stack.imgur.com/FWFiw.png" alt="仅会显示gif，jpg和png，Chrome 44版的屏幕截图"></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
仅会显示gif，jpg和png，Chrome 44版的屏幕截图</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom老丝Pro</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严格来说，答案是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否定的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">开发人员</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阻止用户在本机OS文件选择对话框中选择任何类型或扩展名的文件。</font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，仍然</font><font style="vertical-align: inherit;">可以使用</font><font style="vertical-align: inherit;">的</font></font><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">accept</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font></font><code>&lt;input type = "file"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在OS的文件选择对话框中提供过滤器。</font><font style="vertical-align: inherit;">例如，</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;!-- (IE 10+, Edge (EdgeHTML), Edge (Chromium), Chrome, Firefox 42+) --&gt;<font></font>
&lt;input type="file" accept=".xls,.xlsx" /&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该提供一种过滤掉.xls或.xlsx以外的文件的方法。</font><font style="vertical-align: inherit;">尽管</font><font style="vertical-align: inherit;">element </font><font style="vertical-align: inherit;">的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面</font></font><code>input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">始终表示支持此功能，但令我惊讶的是，直到42版，此功能才在Firefox中对我不起作用。该功能在IE 10 +，Edge和Chrome中有效。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，为了支持早于IE 42+的Firefox 42以及IE 10 +，Edge，Chrome和Opera，我认为最好使用逗号分隔的MIME类型列表：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;!-- (IE 10+, Edge (EdgeHTML), Edge (Chromium), Chrome, Firefox) --&gt;<font></font>
&lt;input type="file"<font></font>
 accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel" /&gt; </code></pre>
</div>
</div>
<p></p>

<p>[<strong>Edge</strong> (EdgeHTML) behavior: The file type filter dropdown shows the file types mentioned here, but is not the default in the dropdown. The default filter is <code>All files (*)</code>.]<br></p>

<p>You can also use asterisks in MIME-types. For example:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;input type="file" accept="image/*" /&gt; &lt;!-- all image types --&gt; <font></font>
&lt;input type="file" accept="audio/*" /&gt; &lt;!-- all audio types --&gt; <font></font>
&lt;input type="file" accept="video/*" /&gt; &lt;!-- all video types --&gt; </code></pre>
</div>
</div>
<p></p>

<p>W3C <strong><a href="https://html.spec.whatwg.org/multipage/input.html#attr-input-accept" rel="noreferrer">recommends</a></strong> authors to specify both MIME-types and corresponding extensions in the <code>accept</code> attribute. So, the <strong>best</strong> approach is:<br></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;!-- Right approach: Use both file extensions and corresponding MIME-types. --&gt;<font></font>
&lt;!-- (IE 10+, Edge (EdgeHTML), Edge (Chromium), Chrome, Firefox) --&gt;<font></font>
&lt;input type="file"<font></font>
 accept=".xls,.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel" /&gt; </code></pre>
</div>
</div>
<p></p>

<p>JSFiddle of the same: <a href="http://jsfiddle.net/sachinjoseph/BkcKQ/" rel="noreferrer">here</a>.<br></p>

<p><strong>Reference:</strong> <a href="http://www.iana.org/assignments/media-types/media-types.xhtml" rel="noreferrer">List of MIME-types</a><br><br>
<strong>IMPORTANT:</strong> Using the <code>accept</code> attribute only provides a way of filtering in the files of types that are of interest. Browsers still allow users to choose files of any type. Additional (client-side) checks should be done (using JavaScript, one way would be <a href="https://stackoverflow.com/a/4329103/1724702">this</a>), and definitely file types <strong><em>MUST be verified on the server</em></strong>, using a combination of MIME-type using both the file extension and its binary signature (<a href="https://stackoverflow.com/questions/58510/using-net-how-can-you-find-the-mime-type-of-a-file-based-on-the-file-signature">ASP.NET</a>, <a href="https://stackoverflow.com/questions/310714/how-to-check-file-types-of-uploaded-files-in-php">PHP</a>, <a href="https://stackoverflow.com/questions/4600679/detect-mime-type-of-uploaded-file-in-ruby">Ruby</a>, <a href="https://stackoverflow.com/questions/8666445/check-file-type-after-upload">Java</a>). You might also want to refer to <a href="http://en.wikipedia.org/wiki/List_of_file_signatures" rel="noreferrer">these</a> <a href="http://www.garykessler.net/library/file_sigs.html" rel="noreferrer">tables</a> for file types and their <a href="http://en.wikipedia.org/wiki/Magic_number_%28programming%29" rel="noreferrer">magic numbers</a>, to perform a more robust server-side verification.<br><br>
Here are <a href="https://stackoverflow.com/questions/3597082/how-is-a-website-hacked-by-a-maliciously-encoded-image-that-contained-a-php-scr">three</a> <a href="http://www.acunetix.com/websitesecurity/upload-forms-threat/" rel="noreferrer">good</a> <a href="http://www.hanselman.com/blog/BackToBasicsWhenAllowingUserUploadsDontAllowUploadsToExecuteCode.aspx" rel="noreferrer">reads</a> on file-uploads and security.</p>

<p><strong>EDIT:</strong>  Maybe file type verification using its binary signature can also be done on client side using JavaScript (rather than just by looking at the extension) using HTML5 File API, but still, the file must be verified on the server, because a malicious user will still be able to upload files by making a custom HTTP request.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐路易</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你是对的。</font><font style="vertical-align: inherit;">使用HTML是不可能的。</font><font style="vertical-align: inherit;">用户将能够选择他/她想要的任何文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以编写一段</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码来避免基于扩展名提交文件。</font><font style="vertical-align: inherit;">但是请记住，这绝不会阻止恶意用户提交他/她真正想要的任何文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像是：</font></font></p>

<pre><code>function beforeSubmit()<font></font>
{<font></font>
    var fname = document.getElementById("ifile").value;<font></font>
    // check if fname has the desired extension<font></font>
    if (fname hasDesiredExtension) {<font></font>
        return true;<font></font>
    } else {<font></font>
        return false;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML代码：</font></font></p>

<pre><code>&lt;form method="post" onsubmit="return beforeSubmit();"&gt;<font></font>
    &lt;input type="file" id="ifile" name="ifile"/&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三前端Harry</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入标签具有accept属性。</font><font style="vertical-align: inherit;">但是，它绝对不可靠。</font><font style="vertical-align: inherit;">浏览器很可能将其视为“建议”，这意味着用户也将根据文件管理器进行预选择，仅显示所需的类型。</font><font style="vertical-align: inherit;">他们仍然可以选择“所有文件”并上传所需的任何文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;form&gt;<font></font>
    &lt;input type="file" name="pic" id="pic" accept="image/gif, image/jpeg" /&gt;<font></font>
&lt;/form&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读</font></font><a href="http://www.w3.org/TR/html5/forms.html#attr-input-accept" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5规范中的更多内容</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请记住，它仅用作用户查找正确文件的“帮助”。</font><font style="vertical-align: inherit;">每个用户都可以将他/她想要的任何请求发送到您的服务器。</font><font style="vertical-align: inherit;">您始终必须在服务器端验证所有内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，答案是：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能限制</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是您</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置预选择，但</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依靠它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替代地或附加地，您可以通过使用JavaScript检查文件名（输入字段的值）来执行类似的操作，但这是无稽之谈，因为它不提供任何保护，也不会简化用户的选择。</font><font style="vertical-align: inherit;">它只会潜在地诱使网站管理员认为他/她受到了保护，并打开了一个安全漏洞。</font><font style="vertical-align: inherit;">对于具有备用文件扩展名（例如jpeg而不是jpg），大写或没有文件扩展名（在Linux系统中很常见）的用户来说，这可能会很麻烦。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小乐</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从技术上讲，您可以</font><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">指定</font></font><a href="http://www.w3.org/TR/html401/interact/forms.html#adef-accept"><code>accept</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在</font></font><a href="http://dev.w3.org/html5/spec/states-of-the-type-attribute.html#attr-input-accept"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">html5中为</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替代</font><a href="http://www.w3.org/TR/html401/interact/forms.html#adef-accept"><font style="vertical-align: inherit;">属性</font></a><font style="vertical-align: inherit;">）</font></font><code>input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但未正确支持</font><font style="vertical-align: inherit;">该</font><a href="http://www.w3.org/TR/html401/interact/forms.html#adef-accept"><font style="vertical-align: inherit;">属性</font></a><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

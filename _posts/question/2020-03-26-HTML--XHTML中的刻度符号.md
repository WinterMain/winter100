---
layout: question
title:  HTML / XHTML中的刻度符号
date:   2020-03-26T08:38:37.000Z
description: 我们需要在内部网络应用程序中显示一个勾号（✓或✔），并且理想情况下希望避免使用图像。必须在XP机器上从IE 6.0.2900开始工作，理想情况下，我们...
img: 
author: 小卤蛋
category: question
answer: 11
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们需要</font><font style="vertical-align: inherit;">在内部网络应用程序中</font><font style="vertical-align: inherit;">显示一个</font></font><a href="http://en.wikipedia.org/wiki/Tick_(checkmark)" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">勾号</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（✓或✔），并且理想情况下希望避免使用图像。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">必须在XP机器上从IE 6.0.2900开始工作，理想情况下，我们需要它是跨浏览器（IE + FF的最新版本）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管将浏览器编码设置为UTF-8（META正常运行，而不是问题），但以下显示框仍然显示。</font><font style="vertical-align: inherit;">默认字体是Times New Roman（可能是一个问题，但是尝试使用Lucida Sans Unicode无效，并且我既没有安装Arial Unicode MS，也没有安装Lucida Grande）。</font></font></p>

<pre><code>&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
&lt;meta http-equiv="Content-Type" content="text/html;charset=utf-8" /&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
 &amp;#10003; &amp;#10004;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何帮助表示赞赏。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在IE 6.0和IE 7下，以下作品：</font></font></p>

<pre><code>&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
 &lt;span style="font-family: wingdings; font-size: 200%;"&gt;&amp;#252;&lt;/span&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人可以在Windows上的FF下查看，我将不胜感激。</font><font style="vertical-align: inherit;">我很确定它不能在非Windows盒子上工作。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3776篇《HTML / XHTML中的刻度符号》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅JinJin</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以用⊕或⊗</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥路易Gil</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参加聚会很晚，我发现</font></font><code>&amp;check;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（✓）在Opera中工作。</font><font style="vertical-align: inherit;">我尚未在其他任何浏览器上对其进行过测试，但是它对某些人可能有用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以添加一个带有Base64编码GIF的白色小礼品（</font></font><a href="https://www.base64-image.de/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在线生成器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>

<pre><code>url("data:image/gif;base64,R0lGODlhCwAKAIABAP////3cnSH5BAEKAAEALAAAAAALAAoAAAIUjH+AC73WHIsw0UCjglraO20PNhYAOw==")
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以Chrome为例，我使用它来设置复选框控件的样式：</font></font></p>

<pre><code>INPUT[type=checkbox]:focus<font></font>
{<font></font>
outline:1px solid rgba(0,0,0,0.2);<font></font>
}<font></font>
<font></font>
INPUT[type=checkbox]<font></font>
{<font></font>
background-color: #DDD;<font></font>
border-radius: 2px;<font></font>
-webkit-appearance: button;<font></font>
width: 17px;<font></font>
height: 17px;<font></font>
margin-top: 1px;<font></font>
cursor:pointer;<font></font>
}<font></font>
<font></font>
INPUT[type=checkbox]:checked<font></font>
{<font></font>
background:#409fd6 url("data:image/gif;base64,R0lGODlhCwAKAIABAP////3cnSH5BAEKAAEALAAAAAALAAoAAAIUjH+AC73WHIsw0UCjglraO20PNhYAOw==") 3px 3px no-repeat;<font></font>
}<font></font>
</code></pre>

<p>If you just wanted it in an IMG tag, you would do the checkmark/tickmark as:</p>

<pre><code>&lt;img alt="" src="data:image/gif;base64,R0lGODlhCwAKAIABAP////3cnSH5BAEKAAEALAAAAAALAAoAAAIUjH+AC73WHIsw0UCjglraO20PNhYAOw==" width="11" height="10"&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">√（平方根符号，＆＃8730;）就足够了吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，请确保</font><strong><font style="vertical-align: inherit;">在</font></strong><font style="vertical-align: inherit;">将数据发送到浏览器</font><strong><font style="vertical-align: inherit;">之前</font></strong><font style="vertical-align: inherit;">设置</font></font><code>Content-Type:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标题</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">仅指定</font><font style="vertical-align: inherit;">content-type标签可能不足以鼓励浏览器使用正确的字符集。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><code>&lt;meta&gt;</code><font style="vertical-align: inherit;"></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Wingdings的解决方案不是基于unicode的，并且在未安装Wingdings的情况下无法在Linux中使用。</font></font></p>

<pre><code>Crossed Checkbox<font></font>
&lt;div style="font-family: Wingdings;"&gt;û&lt;/div&gt; ☒<font></font>
<font></font>
Checked Checkbox<font></font>
&lt;div style="font-family: Wingdings;"&gt;ü&lt;/div&gt; ☑<font></font>
<font></font>
Cross<font></font>
&lt;div style="font-family: Wingdings;"&gt;ý&lt;/div&gt; ✗<font></font>
<font></font>
Check<font></font>
&lt;div style="font-family: Wingdings;"&gt;þ&lt;/div&gt; ✓<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无达蒙Pro</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，但所有建议均无效（Windows XP上为Firefox）。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我发现了</font><font style="vertical-align: inherit;">使用图像数据显示一些对勾标记</font><font style="vertical-align: inherit;">的可能</font></font><a href="https://stackoverflow.com/a/3664495/1066234"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>span:before {<font></font>
    content:url("data:image/gif;base64,R0lGODlhCgAKAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAKAAoAAAISlG8AeMq5nnsiSls***pzmj0FADs=");<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，您可以创建自己的选中标记图像，并使用转换器将其添加为data：image / gif。</font><font style="vertical-align: inherit;">希望这可以帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户端计算机需要一种带有字形的正确字体，此字符才能显示它。</font><font style="vertical-align: inherit;">但是时代新罗马没有。</font><font style="vertical-align: inherit;">尝试使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Arial Unicode MS</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lucida Grande</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;span style="font-family: Arial Unicode MS, Lucida Grande"&gt;<font></font>
    &amp;#10003; &amp;#10004;<font></font>
&lt;/span&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这适用于Windows XP的IE 5.5，IE 6.0，FF 3.0.6。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near米亚</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通常使用fontawesome字体（</font></font><a href="http://fontawesome.io/icon/check/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://fontawesome.io/icon/check/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），您可以在html文件中使用它：     </font></font></p>

<pre><code> &lt;i class="fa fa-check"&gt;&lt;/i&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或在CSS中：</font></font></p>

<pre><code>content: "\f00c";<font></font>
font-family: FontAwesome;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，您应该意识到实际上并不需要使用HTML实体-只要您将HTML文档的编码正确声明为UTF-8，您就可以简单地将这些符号复制/粘贴到文件/服务器端脚本/ JavaScript /其他。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">话虽如此，这是</font><font style="vertical-align: inherit;">与此主题相关</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的所有相关UTF-8字符/ HTML实体</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><strong><font style="vertical-align: inherit;">详尽列表</font></strong><font style="vertical-align: inherit;">：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">☐（十六进制：</font></font><code>&amp;#x2610;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ dec ：）：</font></font><code>&amp;#9744;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">投票箱（为空，应该是这样）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">☑（十六进制：</font></font><code>&amp;#x2611;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ dec ：)：</font></font><code>&amp;#9745;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带支票的投票箱</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（十六进制：</font></font><code>&amp;#x2612;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ dec ：）：</font></font><code>&amp;#9746;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带x的投票箱</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">✓（十六进制：</font></font><code>&amp;#x2713;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ DEC： </font></font><code>&amp;#10003;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font><font style="vertical-align: inherit;">复选标记，等同于</font></font><code>&amp;checkmark;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&amp;check;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://code.google.com/p/doctype-mirror/wiki/CheckCharacterEntity" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大多数浏览器</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">✔（十六进制：</font></font><code>&amp;#x2714;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ dec：）：</font></font><code>&amp;#10004;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复选标记</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">✗（十六进制：</font></font><code>&amp;#x2717;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/十进制</font><font style="vertical-align: inherit;">：) </font></font><code>&amp;#10007;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：投票x</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（十六进制：</font></font><code>&amp;#x2718;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/十进制：) </font></font><code>&amp;#10008;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：重选x</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">🗸（⚠十六进制：</font></font><code>&amp;#x1F5F8;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ dec </font></font><code>&amp;#128504;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：复选标记（自2017年起支持不佳）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">✅（⚠十六进制：</font></font><code>&amp;#x2705;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ dec </font><font style="vertical-align: inherit;">：）</font></font><code>&amp;#9989;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：白色</font><font style="vertical-align: inherit;">粗体</font><font style="vertical-align: inherit;">复选标记（混合支持，截至2017年）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">🗴（⚠十六进制：</font></font><code>&amp;#x1F5F4;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ dec </font><font style="vertical-align: inherit;">：）</font></font><code>&amp;#128500;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：投票脚本X（自2017年以来支持不佳）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">🗶（⚠十六进制：</font></font><code>&amp;#x1F5F6;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ dec </font><font style="vertical-align: inherit;">：）：</font></font><code>&amp;#128502;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">粗体投票X（自2017年起支持不佳）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">⮽（⚠十六进制：</font></font><code>&amp;#x2BBD;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ dec </font><font style="vertical-align: inherit;">：）：</font></font><code>&amp;#11197;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带灯X的投票箱（自2017年起支持不佳）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">🗵（⚠十六进制：</font></font><code>&amp;#x1F5F5;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ dec </font><font style="vertical-align: inherit;">：）：</font></font><code>&amp;#128501;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带脚本X的投票箱（自2017年开始受支持）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">🗹（⚠十六进制：</font></font><code>&amp;#x1F5F9;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ dec </font><font style="vertical-align: inherit;">：）：</font></font><code>&amp;#128505;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带粗体格的投票箱（自2017年开始受支持）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">🗷（⚠十六进制：</font></font><code>&amp;#x1F5F7;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ dec </font><font style="vertical-align: inherit;">：）：</font></font><code>&amp;#128503;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带粗体字X的投票箱（自2017年起受支持）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否检出网络字体中的刻度符号？</font><font style="vertical-align: inherit;">这是可以用于更常见示例的示例：</font></font><code>A☐B☑C☒D✓E✔F✗G✘H</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-只需将其复制/粘贴到webfont提供者的示例文本框中，然后查看哪些字体支持哪些刻度符号。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AL村村</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么不以只读模式使用HTML输入复选框元素</font></font></p>

<pre><code>&lt;input type="checkbox" disabled="disabled" /&gt; and<font></font>
&lt;input type="checkbox" checked="checked" disabled="disabled" /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这将适用于所有浏览器。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子A</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为您使用的是不太受支持的Unicode值，这些值并不总是所有代码点都有字形。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
尝试以下字符：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">☐（</font><font style="vertical-align: inherit;">Unicode十六进制为</font></font><a href="http://www.unicodemap.org/details/0x2610/index.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0x2610</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> [HTML十进制：</font></font><code>&amp;#9744;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">]）：一个空（未选中）复选框</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">☑（</font></font><a href="http://www.unicodemap.org/details/0x2611/index.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0x2611</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> [HTML十进制：</font></font><code>&amp;#9745;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">]）：上一个复选框的选中版本</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">✓（</font></font><a href="http://www.unicodemap.org/details/0x2713/index.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0x2713</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> [HTML十进制：</font></font><code>&amp;#10003;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">]）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">✔（</font></font><a href="http://www.unicodemap.org/details/0x2714/index.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0x2714</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> [HTML十进制：</font></font><code>&amp;#10004;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">]）</font></font></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里的第一个符号似乎有些混乱，☐/ 0x2610。</font><font style="vertical-align: inherit;">这是一个空（未选中）复选框，因此，如果您看到一个框，则应该是它的外观。</font><font style="vertical-align: inherit;">它与☑/ 0x2611（已检查的版本）相对应。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

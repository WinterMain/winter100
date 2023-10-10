---
layout: question
title:  为什么\` font-face在woff文件上引发404错误？
date:   2020-03-19T02:23:23.000Z
description: 我正在\`font-face公司网站上使用，效果很好/看起来不错。除Firefox和Chrome以外，该.woff文件均会引发404错误。IE不会引发错误。...
img: 
author: Jim小胖米亚
category: question
answer: 13
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在</font></font><code>@font-face</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">公司网站上</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">，效果很好/看起来不错。</font><font style="vertical-align: inherit;">除Firefox和Chrome以外，该</font></font><code>.woff</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件均</font><font style="vertical-align: inherit;">会引发404错误</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">IE不会引发错误。</font><font style="vertical-align: inherit;">我的字***于根目录，但是我尝试使用css文件夹中的字体，甚至提供字体的整个URL。</font><font style="vertical-align: inherit;">如果从我的css文件中删除那些字体，我不会得到404，所以我知道这不是语法错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，我使用了fontsquirrels工具来创建</font></font><code>@font-face</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字体和代码：</font></font></p>

<pre class="lang-css prettyprint-override"><code>@font-face {<font></font>
  font-family: 'LaurenCBrownRegular';<font></font>
  src: url('/laurencb-webfont.eot');<font></font>
  src: local('☺'), <font></font>
    url('/laurencb-webfont.woff') format('woff'), <font></font>
    url('/laurencb-webfont.ttf') format('truetype'), <font></font>
    url('/laurencb-webfont.svg#webfontaaFhOfws') format('svg');<font></font>
  font-weight: normal;<font></font>
  font-style: normal;<font></font>
}<font></font>
<font></font>
@font-face {<font></font>
  font-family: 'FontinSansRegular';<font></font>
  src: url('/fontin_sans_r_45b-webfont.eot');<font></font>
  src: local('☺'), <font></font>
    url('/fontin_sans_r_45b-webfont.woff') format('woff'), <font></font>
    url('/fontin_sans_r_45b-webfont.ttf') format('truetype'), <font></font>
    url('/fontin_sans_r_45b-webfont.svg#webfontKJHTwWCi') format('svg');<font></font>
  font-weight: normal;<font></font>
  font-style: normal;<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry西门</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IIS Mime类型：.woff字体/ x-woff（不是application / x-woff或application / x-font-woff）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Itachi</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果添加MIME类型后仍然无法使用，请检查站点的“身份验证”部分中是否启用了“匿名身份验证”，并确保根据给定的屏幕截图选择“应用程序池标识”。</font></font></p>

<p><a href="https://i.stack.imgur.com/FD6XQ.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/FD6XQ.jpg" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Pro小卤蛋</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在IIS7下使用CodeIgniter：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的web.config文件中，将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">woff</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模式中</font></font></strong></p>

<pre><code>&lt;rule name="Rewrite CI Index"&gt;<font></font>
  &lt;match url=".*" /&gt;<font></font>
    &lt;conditions&gt;<font></font>
      &lt;add input="{REQUEST_FILENAME}" pattern="css|js|jpg|jpeg|png|gif|ico|htm|html|woff" negate="true" /&gt;<font></font>
    &lt;/conditions&gt;<font></font>
    &lt;action type="Rewrite" url="index.php/{R:0}" /&gt;<font></font>
 &lt;/rule&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望能帮助到你 ！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙村村Pro</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还要检查您的URL重写器。</font><font style="vertical-align: inherit;">如果发现“怪异”，它可能会抛出404。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三小哥Jim</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能很明显，但是它使我不时使用404s了...确保字体文件夹权限设置正确。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil蛋蛋</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您无权访问您的Web服务器配置，则也可以只重命名字体文件，使其以svg结尾（但保留格式）。</font><font style="vertical-align: inherit;">在Chrome和Firefox中对我来说效果很好。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无LEYMandy</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试了很多有关权限，mime类型等的事情，但是对我来说，最终结果是web.config删除了IIS中的静态文件处理程序，然后将其显式添加回具有静态文件的目录中。</font><font style="vertical-align: inherit;">一旦我为目录添加了位置节点并添加了处理程序，请求就停止获取404。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋JinJin</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这篇文章的答案非常有帮助，可以节省大量时间。</font><font style="vertical-align: inherit;">但是，我发现使用时</font></font><code>FontAwesome 4.50</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我还必须</font></font><code>woff2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为扩展名类型</font><font style="vertical-align: inherit;">添加其他配置，</font><font style="vertical-align: inherit;">如下所示，否则</font></font><code>woff2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Chrome的开发人员工具中的控制台&gt;错误下，</font><font style="vertical-align: inherit;">对</font><font style="vertical-align: inherit;">类型的</font><font style="vertical-align: inherit;">请求</font><font style="vertical-align: inherit;">给出了404错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据S.Serp的评论，以下配置应放在</font></font><code>&lt;system.webServer&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">内</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;staticContent&gt;<font></font>
  &lt;remove fileExtension=".woff" /&gt;<font></font>
  &lt;!-- In case IIS already has this mime type --&gt;<font></font>
  &lt;mimeMap fileExtension=".woff" mimeType="application/x-font-woff" /&gt;<font></font>
  &lt;remove fileExtension=".woff2" /&gt;<font></font>
  &lt;!-- In case IIS already has this mime type --&gt;<font></font>
  &lt;mimeMap fileExtension=".woff2" mimeType="application/x-font-woff2" /&gt;<font></font>
&lt;/staticContent&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一村村</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行IIS服务器管理器（运行命令：inetmgr）打开Mime类型并添加以下内容</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件扩展名：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   .woff</font></font></p>
  
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MIME类型</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：application / octet-stream</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易GO</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，@ Ian Robinson的答案很好用，但Chrome会继续抱怨该消息：“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资源被解释为字体，但使用MIME类型application / x-woff进行了传输</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果知道了，可以从 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用/ x-woff</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序/ x </font></font><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-font</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -woff</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且您将不再有任何Chrome控制台错误！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（已在Chrome 17上测试）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端LSam</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了Ian的答案外，我还必须允许请求过滤模块中的字体扩展名使其起作用。 </font></font></p>

<pre><code>&lt;system.webServer&gt;<font></font>
  &lt;staticContent&gt;<font></font>
    &lt;remove fileExtension=".woff" /&gt;<font></font>
    &lt;remove fileExtension=".woff2" /&gt;<font></font>
    &lt;mimeMap fileExtension=".woff" mimeType="application/x-font-woff" /&gt;<font></font>
    &lt;mimeMap fileExtension=".woff2" mimeType="application/x-font-woff" /&gt;<font></font>
  &lt;/staticContent&gt;<font></font>
  &lt;security&gt;<font></font>
      &lt;requestFiltering&gt;<font></font>
          &lt;fileExtensions&gt;<font></font>
              &lt;add fileExtension=".woff" allowed="true" /&gt;<font></font>
              &lt;add fileExtension=".ttf" allowed="true" /&gt;<font></font>
              &lt;add fileExtension=".woff2" allowed="true" /&gt;<font></font>
          &lt;/fileExtensions&gt;<font></font>
      &lt;/requestFiltering&gt;<font></font>
  &lt;/security&gt;    <font></font>
&lt;/system.webServer&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚凯村村</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了相同的症状-Chrome中的woff文件上显示404-并且在具有IIS 6的Windows Server上运行应用程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您处于相同的情况，则可以执行以下操作来修复它：</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案1</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“只需通过IIS管理器（网站属性的HTTP标头选项卡）添加以下MIME类型声明：</font></font><strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.woff application / x-woff</font></font></strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="https://stackoverflow.com/questions/3594823/mime-type-for-woff-fonts"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">woff字体</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://stackoverflow.com/a/9484251/326"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">grsmto</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的MIME类型，实际的MIME类型为</font></font><strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">application / x-font-woff（至少适用于Chrome）。</font><font style="vertical-align: inherit;">x-woff将修复Chrome 404，x-font-woff将修复Chrome警告。</font></font></strike></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">截至2017年</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：Woff字体现已作为</font><font style="vertical-align: inherit;">MIME模式</font><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">的</font></font><a href="https://tools.ietf.org/html/rfc8081#section-4.4.5" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RFC8081规范的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一部分进行了</font><a href="https://tools.ietf.org/html/rfc8081#section-4.4.5" rel="noreferrer"><font style="vertical-align: inherit;">标准化</font></a><font style="vertical-align: inherit;">。</font></font><code>font/woff</code><font style="vertical-align: inherit;"></font><code>font/woff2</code><font style="vertical-align: inherit;"></font></p>

<p><img src="https://i.stack.imgur.com/2caxh.png" alt="IIS 6 MIME类型"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢Seb Duggan：</font><a href="http://sebduggan.com/posts/serving-web-fonts-from-iis" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：</font></font><a href="http://sebduggan.com/posts/serving-web-fonts-from-iis" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//sebduggan.com/posts/serving-web-fonts-from-iis</font></font></a></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案2</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web配置中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加MIME类型</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>  &lt;system.webServer&gt;<font></font>
    &lt;staticContent&gt;<font></font>
      &lt;remove fileExtension=".woff" /&gt; &lt;!-- In case IIS already has this mime type --&gt;<font></font>
      &lt;mimeMap fileExtension=".woff" mimeType="font/woff" /&gt;<font></font>
    &lt;/staticContent&gt;    <font></font>
  &lt;/system.webServer&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony斯丁</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IIS7解决方案</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也遇到了同样的问题。</font><font style="vertical-align: inherit;">我认为从服务器级别进行此配置会更好，因为它适用于所有网站。</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到IIS </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根节点，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后双击“ MIME类型”配置选项   </font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">点击右上角“动作”面板中的“添加”链接。 </font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将弹出一个对话框。</font><font style="vertical-align: inherit;">添加.woff文件扩展名，并将“ application / x-font-woff”指定为相应的MIME类型。</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为.woff文件扩展名添加MIME类型</font></font></p>

<p><a href="https://i.stack.imgur.com/5kFtz.png"><img src="https://i.stack.imgur.com/5kFtz.png" alt="转到MIME类型"></a></p>

<p><a href="https://i.stack.imgur.com/dMv4w.png"><img src="https://i.stack.imgur.com/dMv4w.png" alt="添加MIME类型"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我为解决IIS 7中的问题所做的工作</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

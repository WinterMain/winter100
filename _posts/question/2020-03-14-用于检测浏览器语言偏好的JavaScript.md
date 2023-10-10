---
layout: question
title:  用于检测浏览器语言偏好的JavaScript
date:   2020-03-14T10:13:34.000Z
description:                                                                          ...
img: 
author: Tony达蒙Mandy
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/17680413/get-visitors-language-country-code-with-javascript-client-side" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用javascript（客户端）获取访问者的语言和国家/地区代码（重复）</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （3个答案）
                                </font></font></span>
                        </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/673905/best-way-to-determine-users-locale-within-browser" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在浏览器中确定用户区域设置的最佳方法</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （8个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2018-03-16 04：33：35Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在尝试使用JavaScript检测浏览器的语言偏好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我在中的IE中设置了浏览器语言</font></font><code>Tools&gt;Internet Options&gt;General&gt;Languages</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如何使用JavaScript读取此值？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox也有同样的问题。</font><font style="vertical-align: inherit;">我无法检测到</font></font><code>tools&gt;options&gt;content&gt;languages</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">的设置</font></font><code>navigator.language</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用   </font></font><code>navigator.userLanguage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  ，它通过</font></font><code>Start&gt;ControlPanel&gt;RegionalandLanguageOptions&gt;Regional Options</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项卡</font><font style="vertical-align: inherit;">检测完成的设置
 </font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经测试过</font></font><code>navigator.browserLanguage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>navigator.systemLanguage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但均未返回第一个设置的值（</font></font><code>Tools&gt;InternetOptions&gt;General&gt;Languages</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到了一个</font><font style="vertical-align: inherit;">详细讨论此问题</font><font style="vertical-align: inherit;">的</font></font><a href="http://www.velocityreviews.com/forums/t99655-save-way-to-detect-browser-language.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但问题仍未得到解决:(</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为我使用的代码很少，非常可靠。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将您站点的文件放在一个子目录中。</font><font style="vertical-align: inherit;">通过SSL进入服务器，并创建指向该文件存储位置的子目录的符号链接，以指示您的语言。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre><code>ln -s /var/www/yourhtml /var/www/en<font></font>
ln -s /var/www/yourhtml /var/www/sp<font></font>
ln -s /var/www/yourhtml /var/www/it<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用您的Web服务器读取HTTP_ACCEPT_LANGUAGE并根据它提供的语言值重定向到这些“不同的子目录”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以使用Javascript的window.location.href来获取您的网址，并在条件条件下使用它来可靠地标识首选语言。</font></font></p>

<pre><code>url_string = window.location.href;<font></font>
if (url_string = "http://yoursite.com/it/index.html") {<font></font>
    document.getElementById("page-wrapper").className = "italian";<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙GO</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于谁在寻找Java Server解决方案</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是RestEasy</font></font></p>

<pre><code>@GET<font></font>
@Path("/preference-language")<font></font>
@Consumes({"application/json", "application/xml"})<font></font>
@Produces({"application/json", "application/xml"})<font></font>
public Response getUserLanguagePreference(@Context HttpHeaders headers) {<font></font>
    return Response.status(200)<font></font>
            .entity(headers.getAcceptableLanguages().get(0))<font></font>
            .build();<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near逆天</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果只需要支持某些现代浏览器，则可以使用：</font></font></p>

<pre><code>navigator.languages
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它按用户指定的顺序返回用户语言首选项的数组。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">截至目前（2014年9月），该功能适用​​于：Chrome（v37），Firefox（v32）和Opera（v24）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但不支持：IE（v11）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙樱</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于它的价值，Wikimedia的通用语言选择器库具有执行此操作的挂钩：</font><a href="https://www.mediawiki.org/wiki/Extension:UniversalLanguageSelector" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font><a href="https://www.mediawiki.org/wiki/Extension:UniversalLanguageSelector" rel="noreferrer"><font style="vertical-align: inherit;">//www.mediawiki.org/wiki/Extension</font></a><font style="vertical-align: inherit;"> :UniversalLanguageSelector
</font></font><a href="https://www.mediawiki.org/wiki/Extension:UniversalLanguageSelector" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅resources / js / ext.uls.init.js中的getFrequentLanguageList函数。</font><font style="vertical-align: inherit;">直接链接：</font><a href="https://gerrit.wikimedia.org/r/gitweb?p=mediawiki/extensions/UniversalLanguageSelector.git;a=blob;f=resources/js/ext.uls.init.js;hb=HEAD" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font><a href="https://gerrit.wikimedia.org/r/gitweb?p=mediawiki/extensions/UniversalLanguageSelector.git;a=blob;f=resources/js/ext.uls.init.js;hb=HEAD" rel="noreferrer"><font style="vertical-align: inherit;">//gerrit.wikimedia.org/r/gitweb?p=</font></a><font style="vertical-align: inherit;"> mediawiki/extensions/ </font><a href="https://gerrit.wikimedia.org/r/gitweb?p=mediawiki/extensions/UniversalLanguageSelector.git;a=blob;f=resources/js/ext.uls.init.js;hb=HEAD" rel="noreferrer"><font style="vertical-align: inherit;">UniversalLanguageSelector.git;a=blob;f=</font></a><font style="vertical-align: inherit;"> resources/js/
 </font></font><a href="https://gerrit.wikimedia.org/r/gitweb?p=mediawiki/extensions/UniversalLanguageSelector.git;a=blob;f=resources/js/ext.uls.init.js;hb=HEAD" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ext.uls.init.js;hb=HEAD</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它仍然取决于服务器，或更具体地说，取决于MediaWiki API。</font><font style="vertical-align: inherit;">我显示它的原因是，它可以提供一个很好的示例，以获取有关用户语言的所有有用信息：浏览器语言，接受语言，地理位置（以及从CLDR获取国家/语言信息），当然，用户自己的网站偏好设置。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖GO</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您要开发Chrome应用程序/扩展程序，请使用</font></font><a href="https://developer.chrome.com/extensions/i18n#method-getAcceptLanguages"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">chrome.i18n API</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>chrome.i18n.getAcceptLanguages(function(languages) {<font></font>
  console.log(languages);<font></font>
  // ["en-AU", "en", "en-US"]<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><code>navigator.userLanguage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 对于IE</font></font></p>

<p><code>window.navigator.language</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 用于Firefox / Opera / Safari</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有合适的方法来获得该设置，至少不是独立于浏览器的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是服务器具有该信息，因为它是HTTP请求标头的一部分（Accept-Language字段，请参见</font></font><a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.4" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.4</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，唯一可靠的方法是从服务器获取答案。</font><font style="vertical-align: inherit;">您将需要在服务器上运行的某些内容（例如.asp，.jsp，.php，CGI），并且“内容”可以返回该信息。</font><font style="vertical-align: inherit;">此处的好例子：</font><a href="http://www.developershome.com/wap/detection/detection.asp?page=readHeader" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://www.developershome.com/wap/detection/detection.asp?page=readHeader" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.developershome.com/wap/detection/detection.asp?page=readHeader</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy卡卡西</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var language = navigator.languages &amp;&amp; navigator.languages[0] || // Chrome / Firefox<font></font>
               navigator.language ||   // All browsers<font></font>
               navigator.userLanguage; // IE &lt;= 10<font></font>
<font></font>
console.log(language);</code></pre>
</div>
</div>
<p></p>

<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/languages"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorLanguage/languages</font></font></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorLanguage/language</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试PWA模板</font></font><a href="https://github.com/StartPolymer/progressive-web-app-template"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/StartPolymer/progressive-web-app-template</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里GO</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2014年更新。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，有一种方法可以使用</font></font><strong><a href="https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage.languages"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">navigator.languages</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Firefox和Chrome中获取接受语言</font><font style="vertical-align: inherit;">  （在Chrome&gt; = 32和Firefox&gt; = 32中有效）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，</font><font style="vertical-align: inherit;">近年来Firefox中的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage.language"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">navigator.language</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反映了内容的首选语言，而不是UI的语言。</font><font style="vertical-align: inherit;">但是，由于其他浏览器尚未支持此概念，因此它不是很有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，要尽可能获得最喜欢的内容语言，并使用UI语言作为后备：</font></font></p>

<pre><code>navigator.languages<font></font>
    ? navigator.languages[0]<font></font>
    : (navigator.language || navigator.userLanguage)<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

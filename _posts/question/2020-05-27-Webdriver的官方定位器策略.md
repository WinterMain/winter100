---
layout: question
title:  Webdriver的官方定位器策略
date:   2020-05-27T02:01:56.000Z
description: 在W3c webdirver官方文档中，明确指出了定位策略是：State   KeywordCSS selector    "css selecto...
img: 
author: 别坑我路易
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://w3c.github.io/webdriver/webdriver-spec.html#locator-strategies" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3c webdirver官方文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，明确指出了定位策略是：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">State</span><span class="pln">   </span><span class="typ">Keyword</span><span class="pln">
CSS selector    </span><span class="str">"css selector"</span><span class="pln">
</span><span class="typ">Link</span><span class="pln"> text selector  </span><span class="str">"link text"</span><span class="pln">
</span><span class="typ">Partial</span><span class="pln"> link text selector  </span><span class="str">"partial link text"</span><span class="pln">
</span><span class="typ">Tag</span><span class="pln"> name    </span><span class="str">"tag name"</span><span class="pln">
</span><span class="typ">XPath</span><span class="pln"> selector  </span><span class="str">"xpath"</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，</font></font><a href="https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Selenium的有线协议</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">class</span><span class="pln"> name  
css selector
id  
name
link text
partial link text
tag name
xpath</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在THEORY中，Selenium的文档已过时，新规范文档中包含“真实”故事。</font><font style="vertical-align: inherit;">然而...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在最新的Chrome浏览器自己的Webdriver上进行了一些测试，我可以确认这一点，</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>class name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者都能正常工作。</font><font style="vertical-align: inherit;">但是，它们不在规格范围内。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我记得在阅读Chromium问题时曾说过，他们只会实施官方的Webdriver规范。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在：我</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">知道</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通用答案，其中“规格并非总是遵循100％”等。但是，我想知道的是：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在Chromium中找到实现此功能的代码吗？</font><font style="vertical-align: inherit;">（欢迎链接）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chromium邮件列表中是否有关于这些的讨论？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“非官方”命令（在“旧”硒规范文件中有记录）是否有可能保留？</font><font style="vertical-align: inherit;">你在哪里读的？</font></font></li>
</ul></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4180篇《Webdriver的官方定位器策略》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.05.27</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，您看对了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据目前</font></font><strong><code>WebDriver - W3C Candidate Recommendation</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><a href="https://w3c.github.io/webdriver/webdriver-spec.html#locator-strategies" rel="noreferrer"><strong><code>Locator Strategies</code></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">征募情况如下：</font></font></p>

<ul>
<li><strong><code>"css selector"</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ：CSS选择器</font></font></li>
<li><strong><code>"link text"</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ：链接文本选择器</font></font></li>
<li><strong><code>"partial link text"</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ：部分链接文本选择器</font></font></li>
<li><strong><code>"tag name"</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ： 标签名</font></font></li>
<li><strong><code>"xpath"</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ：XPath选择器</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快照：</font></font></p>

<p><a href="https://i.stack.imgur.com/e3kwW.png" rel="noreferrer"><img src="https://i.stack.imgur.com/e3kwW.png" alt="定位器策略"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，</font></font><a href="https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#post-sessionsessionidelementidelement" rel="noreferrer"><strong><code>JsonWireProtocol</code></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">曾经曾经被用来支持</font><font style="vertical-align: inherit;">下面列出</font><font style="vertical-align: inherit;">的“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定位器策略”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是目前文档明确指出其</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已过时”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<ul>
<li><strong><code>class name</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：返回其类名称包含搜索值的元素；</font><font style="vertical-align: inherit;">不允许使用复合类名称。</font></font></li>
<li><strong><code>css selector</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ：返回与CSS选择器匹配的元素。</font></font></li>
<li><strong><code>id</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ：返回其ID属性与搜索值匹配的元素。</font></font></li>
<li><strong><code>name</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ：返回其NAME属性与搜索值匹配的元素。</font></font></li>
<li><strong><code>link text</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ：返回其可见文本与搜索值匹配的锚元素。</font></font></li>
<li><strong><code>partial link text</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ：返回一个锚元素，其可见文本部分与搜索值匹配。</font></font></li>
<li><strong><code>tag name</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ：返回其标签名称与搜索值匹配的元素。</font></font></li>
<li><strong><code>xpath</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：返回与XPath表达式匹配的元素。</font><font style="vertical-align: inherit;">提供的XPath表达式必须“按原样”应用于服务器；</font><font style="vertical-align: inherit;">如果表达式不是相对于元素根的，则服务器不应修改它。</font><font style="vertical-align: inherit;">因此，XPath查询可能返回根元素的子树中未包含的元素。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快照：</font></font></p>

<p><a href="https://i.stack.imgur.com/ftg7I.png" rel="noreferrer"><img src="https://i.stack.imgur.com/ftg7I.png" alt="定位器策略"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改通过相应的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户端</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">特定绑定</font><font style="vertical-align: inherit;">传播</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">对于</font></font><strong><code>Selenium-Java</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户，这是</font></font><a href="https://github.com/SeleniumHQ/selenium/blob/13d8f8be751001d44df8e5f1797518f4fb4dec6b/java/client/src/org/openqa/selenium/remote/http/W3CHttpCommandCodec.java#L187" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户代码</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我们在其中为用户提供开关柜：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint prettyprinted" style=""><code><span class="pln">        switch (using) {
          case "class name":
            toReturn.put("using", "css selector");
            toReturn.put("value", "." + cssEscape(value));
            break;

          case "id":
            toReturn.put("using", "css selector");
            toReturn.put("value", "#" + cssEscape(value));
            break;

          case "link text":
            // Do nothing
            break;

          case "name":
            toReturn.put("using", "css selector");
            toReturn.put("value", "*[name='" + value + "']");
            break;

          case "partial link text":
            // Do nothing
            break;

          case "tag name":
            toReturn.put("using", "css selector");
            toReturn.put("value", cssEscape(value));
            break;

          case "xpath":
            // Do nothing
            break;
        }
        return toReturn;</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span> Run code snippet</span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link">Expand snippet</a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif1" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit snippet-box-result" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p>Snapshot :</p>

<p><a href="https://i.stack.imgur.com/I1RA6.png" rel="noreferrer"><img src="https://i.stack.imgur.com/I1RA6.png" alt="JAVA_classname_id_name_tagname"></a></p>

<p>Now, your question must be why this change in the <strong><code>W3C Specs</code></strong> and in the <strong><code>clients</code></strong>. As per <a href="https://github.com/w3c/webdriver/issues/1042" rel="noreferrer">#1042</a> the Answer from the <strong>WebDriver Contributors</strong> was pretty straight as : </p>

<blockquote>
  <p><strong><code>This keeps the specification simple as these can be implemented using the CSS selector, which maps down to querySelector/querySelectorAll.</code></strong></p>
</blockquote></div>
        </div></div>
    {% endraw %}
  </div>
<div>

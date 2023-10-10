---
layout: question
title:  如何使用HTML Agility Pack
date:   2020-03-18T07:04:01.000Z
description: 如何使用HTML Agility Pack？我的XHTML文档不是完全有效。这就是为什么我要使用它。如何在项目中使用它？我的项目在C＃中。...
img: 
author: MandyJinJin路易
category: question
answer: 5
tags: 标签c＃ HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用</font></font><a href="http://html-agility-pack.net/?z=codeplex" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML Agility Pack</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的XHTML文档不是完全有效。</font><font style="vertical-align: inherit;">这就是为什么我要使用它。</font><font style="vertical-align: inherit;">如何在项目中使用它？</font><font style="vertical-align: inherit;">我的项目在C＃中。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个</font></font></p>

<pre><code>string htmlBody = ParseHmlBody(dtViewDetails.Rows[0]["Body"].ToString());<font></font>
<font></font>
private string ParseHmlBody(string html)<font></font>
        {<font></font>
            string body = string.Empty;<font></font>
            try<font></font>
            {<font></font>
                var htmlDoc = new HtmlDocument();<font></font>
                htmlDoc.LoadHtml(html);<font></font>
                var htmlBody = htmlDoc.DocumentNode.SelectSingleNode("//body");<font></font>
                body = htmlBody.OuterHtml;<font></font>
            }<font></font>
            catch (Exception ex)<font></font>
            {<font></font>
<font></font>
                dalPendingOrders.LogMessage("Error in ParseHmlBody" + ex.Message);<font></font>
            }<font></font>
            return body;<font></font>
        }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiHarry</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与HTMLAgilityPack相关的主要代码如下</font></font></p>

<pre><code>using System;<font></font>
using System.Net;<font></font>
using System.Web;<font></font>
using System.Web.Services;<font></font>
using System.Web.Script.Services;<font></font>
using System.Text.RegularExpressions;<font></font>
using HtmlAgilityPack;<font></font>
<font></font>
namespace GetMetaData<font></font>
{<font></font>
    /// &lt;summary&gt;<font></font>
    /// Summary description for MetaDataWebService<font></font>
    /// &lt;/summary&gt;<font></font>
    [WebService(Namespace = "http://tempuri.org/")]<font></font>
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]<font></font>
    [System.ComponentModel.ToolboxItem(false)]<font></font>
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line.<font></font>
    [System.Web.Script.Services.ScriptService]<font></font>
    public class MetaDataWebService: System.Web.Services.WebService<font></font>
    {<font></font>
        [WebMethod]<font></font>
        [ScriptMethod(UseHttpGet = false)]<font></font>
        public MetaData GetMetaData(string url)<font></font>
        {<font></font>
            MetaData objMetaData = new MetaData();<font></font>
<font></font>
            //Get Title<font></font>
            WebClient client = new WebClient();<font></font>
            string sourceUrl = client.DownloadString(url);<font></font>
<font></font>
            objMetaData.PageTitle = Regex.Match(sourceUrl, @<font></font>
            "\&lt;title\b[^&gt;]*\&gt;\s*(?&lt;Title&gt;[\s\S]*?)\&lt;/title\&gt;", RegexOptions.IgnoreCase).Groups["Title"].Value;<font></font>
<font></font>
            //Method to get Meta Tags<font></font>
            objMetaData.MetaDescription = GetMetaDescription(url);<font></font>
            return objMetaData;<font></font>
        }<font></font>
<font></font>
        private string GetMetaDescription(string url)<font></font>
        {<font></font>
            string description = string.Empty;<font></font>
<font></font>
            //Get Meta Tags<font></font>
            var webGet = new HtmlWeb();<font></font>
            var document = webGet.Load(url);<font></font>
            var metaTags = document.DocumentNode.SelectNodes("//meta");<font></font>
<font></font>
            if (metaTags != null)<font></font>
            {<font></font>
                foreach(var tag in metaTags)<font></font>
                {<font></font>
                    if (tag.Attributes["name"] != null &amp;&amp; tag.Attributes["content"] != null &amp;&amp; tag.Attributes["name"].Value.ToLower() == "description")<font></font>
                    {<font></font>
                        description = tag.Attributes["content"].Value;<font></font>
                    }<font></font>
                }<font></font>
            } <font></font>
            else<font></font>
            {<font></font>
                description = string.Empty;<font></font>
            }<font></font>
            return description;<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomLEY</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">入门-HTML Agility Pack</font></font></p>

<pre><code>// From File<font></font>
var doc = new HtmlDocument();<font></font>
doc.Load(filePath);<font></font>
<font></font>
// From String<font></font>
var doc = new HtmlDocument();<font></font>
doc.LoadHtml(html);<font></font>
<font></font>
// From Web<font></font>
var url = "http://html-agility-pack.net/";<font></font>
var web = new HtmlWeb();<font></font>
var doc = web.Load(url);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYMandy</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道这对您有什么帮助，但是我写了几篇文章介绍了这些基础知识。</font></font></p>

<ul>
<li><em><a href="http://runtingsproper.blogspot.com/2009/09/htmlagilitypack-article-series.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HtmlAgilityPack文章系列</font></font></a></em></li>
<li><em><a href="http://runtingsproper.blogspot.com/2009/09/introduction-to-htmlagilitypack-library.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HtmlAgilityPack库简介</font></font></a></em> </li>
<li><em><a href="http://runtingsproper.blogspot.com/2009/11/easily-extracting-links-from-snippet-of.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用HtmlAgilityPack轻松地从HTML片段中提取链接</font></font></a></em></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下一篇文章完成了95％，我只需要写出我编写的代码的最后几部分的说明。</font><font style="vertical-align: inherit;">如果您有兴趣，那么我会尽量记得在发布时在此处发布。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西门十三</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，将</font></font><a href="https://www.nuget.org/packages/HtmlAgilityPack/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTMLAgilityPack</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> nuget包</font><font style="vertical-align: inherit;">安装</font><font style="vertical-align: inherit;">到您的项目中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，例如：</font></font></p>

<pre><code>HtmlAgilityPack.HtmlDocument htmlDoc = new HtmlAgilityPack.HtmlDocument();<font></font>
<font></font>
// There are various options, set as needed<font></font>
htmlDoc.OptionFixNestedTags=true;<font></font>
<font></font>
// filePath is a path to a file containing the html<font></font>
htmlDoc.Load(filePath);<font></font>
<font></font>
// Use:  htmlDoc.LoadHtml(xmlString);  to load from a string (was htmlDoc.LoadXML(xmlString)<font></font>
<font></font>
// ParseErrors is an ArrayList containing any errors from the Load statement<font></font>
if (htmlDoc.ParseErrors != null &amp;&amp; htmlDoc.ParseErrors.Count() &gt; 0)<font></font>
{<font></font>
    // Handle any parse errors as required<font></font>
<font></font>
}<font></font>
else<font></font>
{<font></font>
<font></font>
    if (htmlDoc.DocumentNode != null)<font></font>
    {<font></font>
        HtmlAgilityPack.HtmlNode bodyNode = htmlDoc.DocumentNode.SelectSingleNode("//body");<font></font>
<font></font>
        if (bodyNode != null)<font></font>
        {<font></font>
            // Do something with bodyNode<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（注意：此代码仅是示例，不一定是最佳/唯一方法。请勿在自己的应用程序中盲目使用。）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>HtmlDocument.Load()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法还接受一个流，这对于与.NET框架中的其他面向流的类进行集成非常有用。</font><font style="vertical-align: inherit;">虽然</font></font><code>HtmlEntity.DeEntitize()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是正确处理html实体的另一种有用方法。</font><font style="vertical-align: inherit;">（感谢马修）</font></font></p>

<p><code>HtmlDocument</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font><code>HtmlNode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  是您最常使用的类。</font><font style="vertical-align: inherit;">与XML解析器类似，它提供了接受XPath表达式的selectSingleNode和selectNodes方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font><code>HtmlDocument.Option??????</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  布尔属性。</font><font style="vertical-align: inherit;">这些控制</font></font><code>Load</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>LoadXML</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法将</font><font style="vertical-align: inherit;">如何</font><font style="vertical-align: inherit;">处理HTML / XHTML。</font></font></p>

<p>There is also a compiled help file called HtmlAgilityPack.chm that has a complete reference for each of the objects.  This is normally in the base folder of the solution.</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

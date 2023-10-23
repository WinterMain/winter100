---
layout: question
title:  如何在ASP.NET MVC中的HTML-5 data- \*属性中使用破折号
date:   2020-03-24T02:38:11.000Z
description: 我正在尝试在ASP.NET MVC 1项目中使用HTML5数据属性。（我是C＃和ASP.NET MVC新手。） <%= Html.ActionLink...
img: 
author: 西里神奇
category: question
answer: 6
tags: asp.net-mvc HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试</font><font style="vertical-align: inherit;">在ASP.NET MVC 1项目中</font><font style="vertical-align: inherit;">使用</font></font><a href="http://ejohn.org/blog/html-5-data-attributes/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5数据属性</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（我是C＃和ASP.NET MVC新手。）</font></font></p>

<pre><code> &lt;%= Html.ActionLink("« Previous", "Search",<font></font>
     new { keyword = Model.Keyword, page = Model.currPage - 1},<font></font>
     new { @class = "prev", data-details = "Some Details"   })%&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的htmlAttributes中的“数据细节”给出以下错误：</font></font></p>

<pre><code> CS0746: Invalid anonymous type member declarator. Anonymous type members <font></font>
  must be declared with a member assignment, simple name or member access.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我使用data_details时，它可以工作，但是我想它必须按照规范以“ data-”开头。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有任何方法可以使此工作正常运行，并将HTML5数据属性与Html.ActionLink或类似的Html帮助器一起使用？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有其他替代机制可将自定义数据附加到元素？</font><font style="vertical-align: inherit;">稍后将由JS处理此数据。</font></font></li>
</ul></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3244篇《如何在ASP.NET MVC中的HTML-5 data- \*属性中使用破折号》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不喜欢使用纯粹的“ a”标签，太多的打字。</font><font style="vertical-align: inherit;">因此，我提出了解决方案。</font><font style="vertical-align: inherit;">鉴于它看起来</font></font></p>

<pre><code>&lt;%: Html.ActionLink(node.Name, "Show", "Browse", <font></font>
                    Dic.Route("id", node.Id), Dic.New("data-nodeId", node.Id)) %&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dic类的实现</font></font></p>

<pre><code>public static class Dic<font></font>
{<font></font>
    public static Dictionary&lt;string, object&gt; New(params object[] attrs)<font></font>
    {<font></font>
        var res = new Dictionary&lt;string, object&gt;();<font></font>
        for (var i = 0; i &lt; attrs.Length; i = i + 2)<font></font>
            res.Add(attrs[i].ToString(), attrs[i + 1]);<font></font>
        return res;<font></font>
    }<font></font>
<font></font>
    public static RouteValueDictionary Route(params object[] attrs)<font></font>
    {<font></font>
        return new RouteValueDictionary(Dic.New(attrs));<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以像这样使用它：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Mvc中：</font></font></strong></p>

<pre><code>@Html.TextBoxFor(x=&gt;x.Id,new{@data_val_number="10"});
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML中：</font></font></strong></p>

<pre><code>&lt;input type="text" name="Id" data_val_number="10"/&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无番长</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它比上面建议的一切还要容易。</font><font style="vertical-align: inherit;">MVC中包含短划线（-）的数据属性通过使用下划线（_）来满足。</font></font></p>

<pre><code>&lt;%= Html.ActionLink("« Previous", "Search",<font></font>
 new { keyword = Model.Keyword, page = Model.currPage - 1},<font></font>
 new { @class = "prev", data_details = "Some Details"   })%&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看到JohnnyO已经提到了这一点。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用新的Html帮助程序扩展功能来实现此功能，然后将其与现有的ActionLinks相似地使用。</font></font></p>

<pre><code>public static MvcHtmlString ActionLinkHtml5Data(this HtmlHelper htmlHelper, string linkText, string actionName, string controllerName, object routeValues, object htmlAttributes, object htmlDataAttributes)<font></font>
{<font></font>
    if (string.IsNullOrEmpty(linkText))<font></font>
    {<font></font>
        throw new ArgumentException(string.Empty, "linkText");<font></font>
    }<font></font>
<font></font>
    var html = new RouteValueDictionary(htmlAttributes);<font></font>
    var data = new RouteValueDictionary(htmlDataAttributes);<font></font>
<font></font>
    foreach (var attributes in data)<font></font>
    {<font></font>
        html.Add(string.Format("data-{0}", attributes.Key), attributes.Value);<font></font>
    }<font></font>
<font></font>
    return MvcHtmlString.Create(HtmlHelper.GenerateLink(htmlHelper.ViewContext.RequestContext, htmlHelper.RouteCollection, linkText, null, actionName, controllerName, new RouteValueDictionary(routeValues), html));<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你这样称呼它...</font></font></p>

<pre><code>&lt;%: Html.ActionLinkHtml5Data("link display", "Action", "Controller", new { id = Model.Id }, new { @class="link" }, new { extra = "some extra info" })  %&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单:-)</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong></p>

<p><font style="vertical-align: inherit;"><a href="http://westdiscgolf.blogspot.com/2011/01/aspnet-mvc2-html5-data-attributes.html" rel="nofollow"><font style="vertical-align: inherit;">在这里</font></a><font style="vertical-align: inherit;">多写</font></font><a href="http://westdiscgolf.blogspot.com/2011/01/aspnet-mvc2-html5-data-attributes.html" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一点</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在mvc 4中可以用Underscore（“ _”）渲染</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">剃刀：</font></font></strong></p>

<pre><code>@Html.ActionLink("Vote", "#", new { id = item.FileId, }, new { @class = "votes", data_fid = item.FileId, data_jid = item.JudgeID, })
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">呈现的HTML</font></font></strong></p>

<pre><code>&lt;a class="votes" data-fid="18587" data-jid="9" href="/Home/%23/18587"&gt;Vote&lt;/a&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomMandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：MVC 3和更高版本对此提供了内置支持。</font><font style="vertical-align: inherit;">有关建议的解决方案，请参见下面JohnnyO的高度评价的答案。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为没有任何直接的帮助者可以实现这一目标，但是我确实有两个想法可供您尝试：</font></font></p>

<pre><code>// 1: pass dictionary instead of anonymous object<font></font>
&lt;%= Html.ActionLink( "back", "Search",<font></font>
    new { keyword = Model.Keyword, page = Model.currPage - 1},<font></font>
    new Dictionary&lt;string,Object&gt; { {"class","prev"}, {"data-details","yada"} } )%&gt;<font></font>
<font></font>
// 2: pass custom type decorated with descriptor attributes<font></font>
public class CustomArgs<font></font>
{<font></font>
    public CustomArgs( string className, string dataDetails ) { ... }<font></font>
<font></font>
    [DisplayName("class")]<font></font>
    public string Class { get; set; }<font></font>
    [DisplayName("data-details")]<font></font>
    public string DataDetails { get; set; }<font></font>
}<font></font>
<font></font>
&lt;%= Html.ActionLink( "back", "Search",<font></font>
    new { keyword = Model.Keyword, page = Model.currPage - 1},<font></font>
    new CustomArgs( "prev", "yada" ) )%&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是想法，还没有测试。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>

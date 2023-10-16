---
layout: question
title:  手动刷新或编写时，React-router网址不起作用
date:   2020-03-09T14:48:04.000Z
description: 我正在使用React-router，当我单击链接按钮时，它可以正常工作，但是当我刷新网页时，它不会加载我想要的内容。例如，我进去了localhost/...
img: 
author: 凯斯丁
category: question
answer: 21
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用React-router，当我单击链接按钮时，它可以正常工作，但是当我刷新网页时，它不会加载我想要的内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，我进去了</font></font><code>localhost/joblist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，一切都很好，因为我按链接到达这里。</font><font style="vertical-align: inherit;">但是，如果刷新网页，则会得到：</font></font></p>

<pre class="lang-none prettyprint-override"><code>Cannot GET /joblist
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，它不是这样工作的。</font><font style="vertical-align: inherit;">最初，我的URL为</font></font><code>localhost/#/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>localhost/#/joblist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且它们工作正常。</font><font style="vertical-align: inherit;">但是我不喜欢这种URL，因此尝试删除它</font></font><code>#</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我写道：</font></font></p>

<pre><code>Router.run(routes, Router.HistoryLocation, function (Handler) {<font></font>
 React.render(&lt;Handler/&gt;, document.body);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题不会发生</font></font><code>localhost/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这个总是返回我想要的。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个程序是单页的，所以</font></font><code>/joblist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不需要向任何服务器询问任何内容。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">EDIT2：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的整个路由器。</font></font></p>

<pre><code>var routes = (<font></font>
    &lt;Route name="app" path="/" handler={App}&gt;<font></font>
        &lt;Route name="joblist" path="/joblist" handler={JobList}/&gt;<font></font>
        &lt;DefaultRoute handler={Dashboard}/&gt;<font></font>
        &lt;NotFoundRoute handler={NotFound}/&gt;<font></font>
    &lt;/Route&gt;<font></font>
);<font></font>
<font></font>
Router.run(routes, Router.HistoryLocation, function (Handler) {<font></font>
  React.render(&lt;Handler/&gt;, document.body);<font></font>
});<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第319篇《手动刷新或编写时，React-router网址不起作用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Green前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://stackoverflow.com/a/51489736/7649991"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Joshua Dyck的答案中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加更多信息</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Firebase，并且要同时使用根路由和子目录路由，则需要在：中添加以下代码</font></font><code>firebase.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>{<font></font>
  "hosting": {<font></font>
    "rewrites": [<font></font>
      {<font></font>
        "source": "*",<font></font>
        "destination": "/index.html"<font></font>
      },<font></font>
      {<font></font>
        "source": "/subdirectory/**",<font></font>
        "destination": "/subdirectory/index.html"<font></font>
      }<font></font>
    ]<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您正在为客户建立一个网站。</font><font style="vertical-align: inherit;">您希望网站的所有者在</font></font><a href="https://your.domain.com/management" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://your.domain.com/management中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加信息，</font><font style="vertical-align: inherit;">同时网站的用户将导航到</font></font><a href="https://your.domain.com" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://your.domain.com</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，您的</font></font><code>firebase.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件将如下所示：</font></font></p>

<pre><code>{<font></font>
  "hosting": {<font></font>
    "rewrites": [<font></font>
      {<font></font>
        "source": "*",<font></font>
        "destination": "/index.html"<font></font>
      },<font></font>
      {<font></font>
        "source": "/management/**",<font></font>
        "destination": "/management/index.html"<font></font>
      }<font></font>
    ]<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢这种处理方式。</font><font style="vertical-align: inherit;">尝试</font><font style="vertical-align: inherit;">在服务器端</font><font style="vertical-align: inherit;">添加：
 </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">yourSPAPageRoute / *</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来解决此问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我之所以采用这种方法，是因为即使本地HTML5历史记录API也不支持页面刷新时进行正确的重定向（据我所知）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：选定的答案已经解决了这个问题，但我正在尝试更具体。</font></font></p>

<p><a href="https://i.stack.imgur.com/74sGH.png" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快速路线</font></font></a></p>

<p><a href="https://i.stack.imgur.com/3GMHG.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/3GMHG.png" alt="测试-历史记录API"></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
经过测试，只想分享。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望能帮助到你。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony达蒙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>For those who are using IIS 10, this is what you should do to make this right. Be sure that you are using browserHistory with this. As for reference I will give the code for the routing, but this is not what matters, what matters is the next step after the component code below:</p>

<pre><code>class App extends Component {<font></font>
    render() {<font></font>
        return (<font></font>
            &lt;Router history={browserHistory}&gt;<font></font>
                &lt;div&gt;<font></font>
                    &lt;Root&gt;<font></font>
                        &lt;Switch&gt;<font></font>
                            &lt;Route exact path={"/"} component={Home} /&gt;    <font></font>
                            &lt;Route path={"/home"} component={Home} /&gt;<font></font>
                            &lt;Route path={"/createnewproject"} component={CreateNewProject} /&gt;<font></font>
                            &lt;Route path={"/projects"} component={Projects} /&gt;<font></font>
                            &lt;Route path="*" component={NotFoundRoute} /&gt;<font></font>
                        &lt;/Switch&gt;<font></font>
                    &lt;/Root&gt;<font></font>
                &lt;/div&gt;<font></font>
            &lt;/Router&gt;<font></font>
        )<font></font>
    }<font></font>
}<font></font>
render (&lt;App /&gt;, window.document.getElementById("app"));<font></font>
</code></pre>

<p>Since the problem is IIS receives request from client browsers, it will interpret the URL as if it is asking for a page, then returns a 404 page since there is no available page. Do the following:</p>

<ol>
<li>Open IIS</li>
<li>Expand Server then open the Sites Folder</li>
<li>Click the website/application</li>
<li>Go to the Error Pages</li>
<li>Open the 404 error status item in the list</li>
<li>Instead of the option "Insert content from static file into the error response", change it to "Execute a URL on this site" and add "/" slash value to the URL.</li>
</ol>

<p>And it will now work fine.</p>

<p><a href="https://i.stack.imgur.com/sihHh.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/sihHh.png" alt="在此处输入图片说明"></a>
<a href="https://i.stack.imgur.com/12o6e.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/12o6e.png" alt="在此处输入图片说明"></a></p>

<p>I hope it helps. :-)</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我使用.Net Core MVC时，类似以下内容对我有所帮助：</font></font></p>

<pre><code>    public class HomeController : Controller<font></font>
    {<font></font>
        public IActionResult Index()<font></font>
        {<font></font>
            var url = Request.Path + Request.QueryString;<font></font>
            return App(url);<font></font>
        }<font></font>
<font></font>
        [Route("App")]<font></font>
        public IActionResult App(string url)<font></font>
        {<font></font>
            return View("/wwwroot/app/build/index.html");<font></font>
        }<font></font>
   }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上在MVC端，所有不匹配的路由都将落入</font></font><code>Home/Index</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所指定的位置</font></font><code>startup.cs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在内部</font></font><code>Index</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以获取原始请求url并将其传递到任何需要的地方。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">startup.cs</font></font></p>
</blockquote>

<pre><code>        app.UseMvc(routes =&gt;<font></font>
        {<font></font>
            routes.MapRoute(<font></font>
                name: "default",<font></font>
                template: "{controller=Home}/{action=Index}/{id?}");<font></font>
<font></font>
            routes.MapSpaFallbackRoute(<font></font>
                name: "spa-fallback",<font></font>
                defaults: new { controller = "Home", action = "Index" });<font></font>
        });<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您具有以下本地路由定义</font></font></p>

<pre><code>&lt;Route exact path="/" render={routeProps =&gt; (<font></font>
   &lt;Home routeProps={routeProps}/&gt;<font></font>
)}/&gt;<font></font>
<font></font>
{/*optional catch-all router */}<font></font>
&lt;Route render={routeProps =&gt; (<font></font>
       &lt;div&gt;&lt;h4&gt;404 not found&lt;/h4&gt;&lt;/div&gt;<font></font>
)}/&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的Home组件上，您可以在ComponentWillMount事件中拦截请求，</font></font></p>

<pre><code>const searchPath = this.props.routeProps.location.search;<font></font>
<font></font>
if (searchPath){<font></font>
    this.props.routeProps.history.push("/" + searchPath.replace("?",""));<font></font>
}<font></font>
else{<font></font>
    /*.... originally Home event */<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以请求/？joblist，而不是在url上调用/ joblist，组件将自动将请求重定向到/ joblist（请注意路径中的额外问号）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥达蒙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个主题有点老了，已经解决了，但是我想向您推荐一个简单，清晰和更好的解决方案。</font><font style="vertical-align: inherit;">如果您使用Web服务器，则可以使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个Web服务器都可以将用户重定向到错误页面（如果使用http 404）。要解决此问题，您需要将用户重定向到索引页面。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用Java基本服务器（tomcat或任何java应用程序服务器），则解决方案可能是以下几种：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">web.xml：</font></font></strong></p>

<pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;<font></font>
&lt;web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"<font></font>
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"<font></font>
         version="3.1"&gt;<font></font>
<font></font>
    &lt;!-- WELCOME FILE LIST --&gt;<font></font>
    &lt;welcome-file-list&gt;<font></font>
        &lt;welcome-file&gt;index.jsp&lt;/welcome-file&gt;<font></font>
    &lt;/welcome-file-list&gt;<font></font>
<font></font>
    &lt;!-- ERROR PAGES DEFINITION --&gt;<font></font>
    &lt;error-page&gt;<font></font>
        &lt;error-code&gt;404&lt;/error-code&gt;<font></font>
        &lt;location&gt;/index.jsp&lt;/location&gt;<font></font>
    &lt;/error-page&gt;<font></font>
<font></font>
&lt;/web-app&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GET </font></font><a href="http://example.com/about" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://example.com/about</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web服务器抛出http 404，因为此页面在服务器端不存在</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误页面配置告诉服务器将index.jsp页面发送回用户</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么JS将在客户端上完成剩下的工作，因为客户端的网址仍然是</font></font><a href="http://example.com/about" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://example.com/about</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就是这样，不再需要魔术：)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村番长前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在IIS中托管；</font><font style="vertical-align: inherit;">将此添加到我的webconfig中解决了我的问题</font></font></p>

<pre><code>&lt;httpErrors errorMode="Custom" defaultResponseMode="ExecuteURL"&gt;<font></font>
    &lt;remove statusCode="500" subStatusCode="100" /&gt;<font></font>
    &lt;remove statusCode="500" subStatusCode="-1" /&gt;<font></font>
    &lt;remove statusCode="404" subStatusCode="-1" /&gt;<font></font>
    &lt;error statusCode="404" path="/" responseMode="ExecuteURL" /&gt;<font></font>
    &lt;error statusCode="500" prefixLanguageFilePath="" path="/error_500.asp" responseMode="ExecuteURL" /&gt;<font></font>
    &lt;error statusCode="500" subStatusCode="100" path="/error_500.asp" responseMode="ExecuteURL" /&gt;<font></font>
&lt;/httpErrors&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以对其他任何服务器进行类似的配置</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Firebase，则只需确保在应用程序根目录（在托管部分中）的firebase.json文件中具有rewrites属性。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>{ <font></font>
  "hosting": {<font></font>
    "rewrites": [{<font></font>
      "source":"**",<font></font>
      "destination": "/index.html"<font></font>
    }]    <font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以节省别人的挫折感和浪费的时间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">祝您编程愉快...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于该主题的进一步阅读：</font></font></p>

<p><a href="https://firebase.google.com/docs/hosting/full-config#rewrites" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://firebase.google.com/docs/hosting/full-config#rewrites</font></font></a></p>

<p><a href="https://stackoverflow.com/questions/37667626/firebase-cli-configure-as-a-single-page-app-rewrite-all-urls-to-index-html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firebase CLI：“配置为单页应用程序（将所有URL重写为/index.html）”</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小卤蛋Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还没有使用服务器端渲染，但是遇到了与OP相同的问题，在大多数情况下，Link似乎都可以正常工作，但是当我有参数时却失败了。</font><font style="vertical-align: inherit;">我将在此处记录我的解决方案，以查看它是否对任何人都有帮助。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的主要jsx包含以下内容：</font></font></p>

<pre><code>&lt;Route onEnter={requireLogin} path="detail/:id" component={ModelDetail} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对于第一个匹配的链接来说效果很好，但是当：id更改</font></font><code>&lt;Link&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嵌套在该模型的详细信息页面上的表达式时，浏览器栏中的url会更改，但是页面的内容最初并未更改以反映链接的模型。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">麻烦的是我曾经用来</font></font><code>props.params.id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置模型</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该组件仅安装一次，因此这意味着第一个模型是粘贴在页面上的模型，随后的链接会更改道具，但页面看起来没有变化。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将模型同时设置为组件状态</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>componentWillReceiveProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于</font><font style="vertical-align: inherit;">组件的状态</font><font style="vertical-align: inherit;">（此处基于下一个道具）将解决该问题，并且页面内容会更改以反映所需的模型。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到了带有React Router（Apache）的SPA解决方案。</font><font style="vertical-align: inherit;">只需添加.htaccess</font></font></p>

<pre><code>&lt;IfModule mod_rewrite.c&gt;<font></font>
<font></font>
  RewriteEngine On<font></font>
  RewriteBase /<font></font>
  RewriteRule ^index\.html$ - [L]<font></font>
  RewriteCond %{REQUEST_FILENAME} !-f<font></font>
  RewriteCond %{REQUEST_FILENAME} !-d<font></font>
  RewriteCond %{REQUEST_FILENAME} !-l<font></font>
  RewriteRule . /index.html [L]<font></font>
<font></font>
&lt;/IfModule&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源：</font><a href="https://gist.github.com/alexsasharegan/173878f9d67055bfef63449fa7136042" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://gist.github.com/alexsasharegan/173878f9d67055bfef63449fa7136042" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//gist.github.com/alexsasharegan/173878f9d67055bfef63449fa7136042</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小欧学姐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果确实有index.html的备用版本，请确保在index.html文件中具有以下内容：</font></font></p>

<pre><code>&lt;script&gt;<font></font>
  System.config({ baseURL: '/' });<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能因项目而异。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙阿飞斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在IIS上托管react应用，只需添加一个包含以下内容的web.config文件：</font></font></p>

<pre><code>&lt;?xml version="1.0" encoding="utf-8"?&gt;<font></font>
&lt;configuration&gt;<font></font>
  &lt;system.webServer&gt;<font></font>
    &lt;httpErrors errorMode="Custom" existingResponse="Replace"&gt;<font></font>
        &lt;remove statusCode="404" subStatusCode="-1" /&gt;<font></font>
        &lt;error statusCode="404" path="/" responseMode="ExecuteURL" /&gt;<font></font>
    &lt;/httpErrors&gt;<font></font>
  &lt;/system.webServer&gt;<font></font>
&lt;/configuration&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将告诉IIS服务器将主页返回到客户端，而不是404错误，并且不需要使用哈希历史记录。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim小哥GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试使用以下代码在公用文件夹中添加“ .htaccess”文件。</font></font></p>

<pre><code>RewriteEngine On<font></font>
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]<font></font>
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d<font></font>
RewriteRule ^ - [L]<font></font>
<font></font>
RewriteRule ^ /index.html [L]  <font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚JinJin樱</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Create React App：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个伟大的步行路程，虽然这个问题与许多大型主机平台的解决方案，你可以找到</font></font><a href="https://facebook.github.io/create-react-app/docs/deployment#netlify-https-wwwnetlifycom" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的创建做出反应应用页面上。</font><font style="vertical-align: inherit;">例如，我将React Router v4和Netlify用作前端代码。</font><font style="vertical-align: inherit;">只需要在我的公用文件夹中添加一个文件（“ _redirects”），然后在该文件中添加一行代码即可：</font></font></p>

<pre><code>/*  /index.html  200
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，当输入浏览器或有人刷新时，我的网站可以正确呈现诸如mysite.com/pricing之类的路径。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将此添加到 </font></font><code>webpack.congif.js</code></p>

<pre><code>devServer: {<font></font>
    historyApiFallback: true<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您通过AWS Static S3 Hosting和CloudFront托管React应用</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CloudFront响应403 Access Denied消息后就出现了此问题，因为它希望/ some / other / path存在于我的S3文件夹中，但是该路径仅存在于React的使用react-router的路由内部。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案是设置分发错误页面规则。</font><font style="vertical-align: inherit;">转到CloudFront设置，然后选择您的分配。</font><font style="vertical-align: inherit;">接下来转到“错误页面”标签。</font><font style="vertical-align: inherit;">单击“创建自定义错误响应”并添加403的条目，因为这是我们得到的错误状态代码。</font><font style="vertical-align: inherit;">将“响应页面路径”设置为/index.html并将状态码设置为200。最终结果以其简单性令我惊讶。</font><font style="vertical-align: inherit;">提供了索引页，但URL保留在浏览器中，因此，一旦React应用加载，它将检测URL路径并导航到所需的路由。</font></font></p>

<p><a href="https://i.stack.imgur.com/Pafj4.png" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误页面403规则</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProTom</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack Dev Server具有启用此功能的选项。</font><font style="vertical-align: inherit;">打开</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并添加</font></font><code>--history-api-fallback</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该解决方案为我工作。</font></font></p>

<p><a href="https://github.com/reactjs/react-router-tutorial/tree/master/lessons/10-clean-urls#configuring-your-server" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应路由器教程</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样可以解决你的问题 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在生产模式下的ReactJS应用程序中，我也遇到了同样的问题。</font><font style="vertical-align: inherit;">这是该问题的2种解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.将路由历史更改为“ hashHistory”，而不是用browserHistory </font></font></p>

<pre><code>&lt;Router history={hashHistory} &gt;<font></font>
   &lt;Route path="/home" component={Home} /&gt;<font></font>
   &lt;Route path="/aboutus" component={AboutUs} /&gt;<font></font>
&lt;/Router&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在使用命令构建应用 </font></font></p>

<pre><code>sudo npm run build
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后将build文件夹放在您的var / www /文件夹中，现在该应用程序可以正常工作，在每个URL中添加＃标签。</font><font style="vertical-align: inherit;">喜欢</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地主机/＃/ home本地主机/＃/ aboutus</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案2：不使用浏览器历史记录＃标签，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在路由器中设置您的历史= {browserHistory}，现在使用sudo npm run build对其进行构建。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要创建“ conf”文件来解决“ 404找不到页面”，conf文件应如下所示。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开您的终端，键入以下命令 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cd / etc / apache2 / sites-available ls nano sample.conf在其中添加以下内容。</font></font></p>

<pre><code>&lt;VirtualHost *:80&gt;<font></font>
    ServerAdmin admin@0.0.0.0<font></font>
    ServerName 0.0.0.0<font></font>
    ServerAlias 0.0.0.0<font></font>
    DocumentRoot /var/www/html/<font></font>
<font></font>
    ErrorLog ${APACHE_LOG_DIR}/error.log<font></font>
    CustomLog ${APACHE_LOG_DIR}/access.log combined<font></font>
    &lt;Directory "/var/www/html/"&gt;<font></font>
            Options Indexes FollowSymLinks<font></font>
            AllowOverride all<font></font>
            Require all granted<font></font>
    &lt;/Directory&gt;<font></font>
&lt;/VirtualHost&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您需要使用以下命令来启用sample.conf文件</font></font></p>

<pre><code>cd /etc/apache2/sites-available<font></font>
sudo a2ensite sample.conf<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后它将要求您使用sudo服务apache2 reload或重新启动apache服务器</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后打开您的localhost / build文件夹，并添加内容如下的.htaccess文件。</font></font></p>

<pre><code>   RewriteEngine On<font></font>
   RewriteBase /<font></font>
   RewriteCond %{REQUEST_FILENAME} !-f<font></font>
   RewriteCond %{REQUEST_FILENAME} !-d<font></font>
   RewriteCond %{REQUEST_FILENAME} !-l<font></font>
   RewriteRule ^.*$ / [L,QSA]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，该应用程序可以正常运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：将0.0.0.0 ip更改为您的本地IP地址。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果对此有任何疑问，请随时提出评论。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对其他人有帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyPro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚才使用create-react-app制作了一个网站，并在此处遇到了同样的问题。</font><font style="vertical-align: inherit;">我</font></font><code>BrowserRouting</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><code>react-router-dom</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包装中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我在Nginx服务器上运行，对我来说解决了什么是将以下内容添加到</font></font><code>/etc/nginx/yourconfig.conf</code></p>

<pre><code>location / {<font></font>
  if (!-e $request_filename){<font></font>
    rewrite ^(.*)$ /index.html break;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对应于</font></font><code>.htaccess</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在运行Appache的情况下</font><font style="vertical-align: inherit;">添加以下内容</font></font></p>

<pre><code>Options -MultiViews<font></font>
RewriteEngine On<font></font>
RewriteCond %{REQUEST_FILENAME} !-f<font></font>
RewriteRule ^ index.html [QSA,L]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这似乎也是Facebook自己建议的解决方案，可以在</font><a href="https://facebook.github.io/create-react-app/docs/deployment#serving-apps-with-client-side-routing" rel="noreferrer"><font style="vertical-align: inherit;">这里</font></a><font style="vertical-align: inherit;">找到</font></font><a href="https://facebook.github.io/create-react-app/docs/deployment#serving-apps-with-client-side-routing" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在index.html中</font></font><code>head</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，添加以下内容：</font></font></p>

<pre><code>&lt;base href="/"&gt;<font></font>
&lt;!-- This must come before the css and javascripts --&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，当与webpack dev服务器一起运行时，请使用此命令。</font></font></p>

<pre><code>webpack-dev-server --mode development --hot --inline --content-base=dist --history-api-fallback
</code></pre>

<p><code>--history-api-fallback</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是重要的部分</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi小哥</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以更改</font></font><code>.htaccess</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件并插入以下内容：</font></font></p>

<pre><code>&lt;IfModule mod_rewrite.c&gt;<font></font>
  RewriteEngine On<font></font>
  RewriteBase /<font></font>
  RewriteRule ^index\.html$ - [L]<font></font>
  RewriteCond %{REQUEST_FILENAME} !-f<font></font>
  RewriteCond %{REQUEST_FILENAME} !-d<font></font>
  RewriteCond %{REQUEST_FILENAME} !-l<font></font>
  RewriteRule . /index.html [L]<font></font>
&lt;/IfModule&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用</font></font><code>react: "^16.12.0"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>react-router: "^5.1.2"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
此方法是万能的，并且可能是入门的最简单方法。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>

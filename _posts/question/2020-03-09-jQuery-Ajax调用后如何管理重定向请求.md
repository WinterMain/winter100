---
layout: question
title:  jQuery Ajax调用后如何管理重定向请求
date:   2020-03-09T13:26:11.000Z
description: 我$.post()使用Ajax调用servlet，然后使用生成的HTML片段替换div用户当前页面中的元素。但是，如果会话超时，服务器将发送重定向指令以将...
img: 
author: Pro小胖
category: question
answer: 12
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><code>$.post()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Ajax调用servlet，然后使用生成的HTML片段替换</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户当前页面中</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">元素。</font><font style="vertical-align: inherit;">但是，如果会话超时，服务器将发送重定向指令以将用户发送到登录页面。</font><font style="vertical-align: inherit;">在这种情况下，jQuery用</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">登录页面的内容</font><font style="vertical-align: inherit;">替换了该</font><font style="vertical-align: inherit;">元素，从而迫使用户的眼睛确实看到了一个罕见的场景。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用jQuery 1.2.6从Ajax调用管理重定向指令？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第274篇《jQuery Ajax调用后如何管理重定向请求》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO凯</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>You can also hook XMLHttpRequest send prototype. This will work for all sends (jQuery/dojo/etc) with one handler.</p>

<p>I wrote this code to handle a 500 page expired error, but it should work just as well to trap a 200 redirect. Ready the wikipedia entry on <a href="http://en.wikipedia.org/wiki/XMLHttpRequest" rel="nofollow">XMLHttpRequest</a> onreadystatechange about the meaning of readyState.</p>

<pre><code>// Hook XMLHttpRequest<font></font>
var oldXMLHttpRequestSend = XMLHttpRequest.prototype.send;<font></font>
<font></font>
XMLHttpRequest.prototype.send = function() {<font></font>
  //console.dir( this );<font></font>
<font></font>
  this.onreadystatechange = function() {<font></font>
    if (this.readyState == 4 &amp;&amp; this.status == 500 &amp;&amp; this.responseText.indexOf("Expired") != -1) {<font></font>
      try {<font></font>
        document.documentElement.innerHTML = this.responseText;<font></font>
      } catch(error) {<font></font>
        // IE makes document.documentElement read only<font></font>
        document.body.innerHTML = this.responseText;<font></font>
      }<font></font>
    }<font></font>
  };<font></font>
<font></font>
  oldXMLHttpRequestSend.apply(this, arguments);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L泡芙Jim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>If you also want to pass the values then you can also set the session variables and access 
Eg: 
In your jsp you can write </p>

<pre><code>&lt;% HttpSession ses = request.getSession(true);<font></font>
   String temp=request.getAttribute("what_you_defined"); %&gt;<font></font>
</code></pre>

<p>And then you can store this temp value in your javascript variable and play around </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚凯</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Spring Security，答案似乎对某些人有用，但我发现可以扩展LoginUrlAuthenticationEntryPoint并添加特定的代码来更健壮地处理AJAX。</font><font style="vertical-align: inherit;">大多数示例拦截</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重定向，而不仅仅是身份验证失败。</font><font style="vertical-align: inherit;">对于我从事的项目来说，这是不可取的。</font><font style="vertical-align: inherit;">如果您不希望缓存失败的AJAX请求，则可能还需要扩展ExceptionTranslationFilter并重写“ sendStartAuthentication”方法以删除缓存步骤。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例AjaxAwareAuthenticationEntryPoint：</font></font></p>

<pre><code>public class AjaxAwareAuthenticationEntryPoint extends<font></font>
    LoginUrlAuthenticationEntryPoint {<font></font>
<font></font>
    public AjaxAwareAuthenticationEntryPoint(String loginUrl) {<font></font>
        super(loginUrl);<font></font>
    }<font></font>
<font></font>
    @Override<font></font>
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {<font></font>
        if (isAjax(request)) {<font></font>
            response.sendError(HttpStatus.UNAUTHORIZED.value(), "Please re-authenticate yourself");<font></font>
        } else {<font></font>
        super.commence(request, response, authException);<font></font>
        }<font></font>
    }<font></font>
<font></font>
    public static boolean isAjax(HttpServletRequest request) {<font></font>
        return request != null &amp;&amp; "XMLHttpRequest".equals(request.getHeader("X-Requested-With"));<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源：
 </font></font><a href="https://stackoverflow.com/questions/11242174/handle-session-expired-event-in-spring-based-web-application"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="http://yoyar.com/blog/2012/06/dealing-with-the-spring-security-ajax-session-timeout-problem/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font></p>

<pre><code>    $(document).ready(function () {<font></font>
        if ($("#site").length &gt; 0) {<font></font>
            window.location = "&lt;%= Url.Content("~") %&gt;" + "Login/LogOn";<font></font>
        }<font></font>
    });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其放在登录页面上。</font><font style="vertical-align: inherit;">如果已将其加载到主页的div中，它将重定向到登录页面。</font><font style="vertical-align: inherit;">“ #site”是位于除登录页面以外的所有页面上的div的ID。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilGreen</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个适用于我的简单解决方案，无需更改服务器代码...只需添加一小撮肉豆蔻...</font></font></p>

<pre><code>$(document).ready(function ()<font></font>
{<font></font>
    $(document).ajaxSend(<font></font>
    function(event,request,settings)<font></font>
    {<font></font>
        var intercepted_success = settings.success;<font></font>
        settings.success = function( a, b, c ) <font></font>
        {  <font></font>
            if( request.responseText.indexOf( "&lt;html&gt;" ) &gt; -1 )<font></font>
                window.location = window.location;<font></font>
            else<font></font>
                intercepted_success( a, b, c );<font></font>
        };<font></font>
    });<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我检查html标签的存在，但是您可以更改indexOf来搜索登录页面中存在的唯一字符串...</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小小神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给定的大多数解决方案都使用一种变通方法，即使用额外的标头或不正确的HTTP代码。</font><font style="vertical-align: inherit;">这些解决方案很可能会起作用，但会有点“棘手”。</font><font style="vertical-align: inherit;">我想出了另一个解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们使用的WIF已配置为在401响应上重定向（passiveRedirectEnabled =“ true”）。</font><font style="vertical-align: inherit;">重定向在处理普通请求时很有用，但不适用于AJAX请求（因为浏览器不会执行302 /重定向）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在global.asax中使用以下代码，可以禁用AJAX请求的重定向：</font></font></p>

<pre><code>    void WSFederationAuthenticationModule_AuthorizationFailed(object sender, AuthorizationFailedEventArgs e)<font></font>
    {<font></font>
        string requestedWithHeader = HttpContext.Current.Request.Headers["X-Requested-With"];<font></font>
<font></font>
        if (!string.IsNullOrEmpty(requestedWithHeader) &amp;&amp; requestedWithHeader.Equals("XMLHttpRequest", StringComparison.OrdinalIgnoreCase))<font></font>
        {<font></font>
            e.RedirectToIdentityProvider = false;<font></font>
        }<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，您就可以为AJAX请求返回401响应，然后您的JavaScript可以通过重新加载页面来处理该响应。</font><font style="vertical-align: inherit;">重新加载页面将抛出401，将由WIF处理（WIF会将用户重定向到登录页面）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理401错误的示例JavaScript：</font></font></p>

<pre><code>$(document).ajaxError(function (event, jqxhr, settings, exception) {<font></font>
<font></font>
    if (jqxhr.status == 401) { //Forbidden, go to login<font></font>
        //Use a reload, WIF will redirect to Login<font></font>
        location.reload(true);<font></font>
    }<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现的另一种解决方案（如果要设置全局行为特别有用）是将该</font></font><a href="https://api.jquery.com/jQuery.ajax/"><code>$.ajaxsetup()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><a href="https://api.jquery.com/jquery.ajaxsetup/"><code>statusCode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">property</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一起使用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">就像其他人指出的那样，不要使用重定向状态码（</font></font><code>3xx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），而应使用状态码来</font></font><code>4xx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理客户端重定向。</font></font></p>

<pre><code>$.ajaxSetup({ <font></font>
  statusCode : {<font></font>
    400 : function () {<font></font>
      window.location = "/";<font></font>
    }<font></font>
  }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替换</font></font><code>400</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为您要处理的状态码。</font><font style="vertical-align: inherit;">像已经提到的那样，</font></font><code>401 Unauthorized</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能是一个好主意。</font><font style="vertical-align: inherit;">我使用，</font></font><code>400</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它是非常不确定的，我可以将其</font></font><code>401</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于更具体的情况（例如错误的登录凭据）。</font><font style="vertical-align: inherit;">因此，</font></font><code>4xx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当会话超时并且您要处理客户端重定向时，</font><font style="vertical-align: inherit;">后端应该返回</font><font style="vertical-align: inherit;">错误代码，</font><font style="vertical-align: inherit;">而不是直接</font><font style="vertical-align: inherit;">重定向。</font><font style="vertical-align: inherit;">即使使用骨干.js之类的框架，对我来说也很完美</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Tom</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只想分享我的方法，因为这可能会帮助某人：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我基本上包括一个JavaScript模块，该模块处理身份验证之类的内容，例如显示用户名，在这种情况下，还处理</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重定向到登录页面的情况</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的情况是：我们基本上有一个ISA服务器，其间侦听所有请求并</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以302和</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">登录页面</font><strong><font style="vertical-align: inherit;">的位置标头</font></strong><font style="vertical-align: inherit;">作为</font><strong><font style="vertical-align: inherit;">响应</font></strong><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的JavaScript模块中，我</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最初的方法</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font></p>

<pre><code>$(document).ajaxComplete(function(e, xhr, settings){<font></font>
    if(xhr.status === 302){<font></font>
        //check for location header and redirect...<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题（这里已经提到了很多问题）是浏览器自己处理重定向，因此</font></font><code>ajaxComplete</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从未调用过</font><font style="vertical-align: inherit;">我的</font><font style="vertical-align: inherit;">回调，而是获得</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了已经重定向的Login页面</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><strong><font style="vertical-align: inherit;">响应</font></strong><font style="vertical-align: inherit;">，显然是a </font></font><code>status 200</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">问题：您如何检测成功的200响应是您的实际登录页面还是其他任意页面？</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于无法捕获302重定向响应，因此我</font></font><code>LoginPage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在登录页面上</font><font style="vertical-align: inherit;">添加了一个</font><font style="vertical-align: inherit;">标头，其中包含登录页面本身的网址。</font><font style="vertical-align: inherit;">现在，在模块中，我监听标题并进行重定向：</font></font></p>

<pre><code>if(xhr.status === 200){<font></font>
    var loginPageRedirectHeader = xhr.getResponseHeader("LoginPage");<font></font>
    if(loginPageRedirectHeader &amp;&amp; loginPageRedirectHeader !== ""){<font></font>
        window.location.replace(loginPageRedirectHeader);<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...就像魅​​力:)。</font><font style="vertical-align: inherit;">您可能想知道为什么我在</font></font><code>LoginPage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标头中</font><font style="vertical-align: inherit;">包含url </font><font style="vertical-align: inherit;">...基本上是因为我找不到确定</font></font><code>GET</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><code>xhr</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">的自动位置重定向得到</font><font style="vertical-align: inherit;">的url的方法</font><font style="vertical-align: inherit;">...</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢蒂默兹的方法，加上一点柠檬味。</font><font style="vertical-align: inherit;">如果你有机会返回</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的contentType</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的text / html</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，当你期待</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，你是最有可能被重定向。</font><font style="vertical-align: inherit;">就我而言，我只是简单地重新加载页面，然后将其重定向到登录页面。</font><font style="vertical-align: inherit;">哦，检查一下jqXHR的状态是否为200，这似乎很愚蠢，因为您使用的是错误函数，对吗？</font><font style="vertical-align: inherit;">否则，合法的错误情况将迫使迭代重载（哎呀）</font></font></p>

<pre><code>$.ajax(<font></font>
   error:  function (jqXHR, timeout, message) {<font></font>
    var contentType = jqXHR.getResponseHeader("Content-Type");<font></font>
    if (jqXHR.status === 200 &amp;&amp; contentType.toLowerCase().indexOf("text/html") &gt;= 0) {<font></font>
        // assume that our login has expired - reload our current page<font></font>
        window.location.reload();<font></font>
    }<font></font>
<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无老丝Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有浏览器正确处理301和302响应。</font><font style="vertical-align: inherit;">实际上，该标准甚至说他们应该“透明地”处理它们，这对于Ajax Library供应商来说是一个巨大的麻烦。</font><font style="vertical-align: inherit;">在</font></font><a href="http://code.google.com/p/ra-ajax/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ra-Ajax中，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们被迫使用HTTP响应状态代码278（只是一些“未使用”的成功代码）来透明地处理来自服务器的重定向。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这真的让我很烦，如果这里有人在W3C中有一些“拉”，我将不胜感激，您可以让W3C </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">知道</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们确实需要自己处理301和302代码...！</font><font style="vertical-align: inherit;">;）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最终实现的解决方案是对Ajax调用的回调函数使用包装器，并在此包装器中检查返回的HTML块上是否存在特定元素。</font><font style="vertical-align: inherit;">如果找到该元素，则包装器将执行重定向。</font><font style="vertical-align: inherit;">如果不是，则包装将调用转发给实际的回调函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，我们的包装器函数类似于：</font></font></p>

<pre><code>function cbWrapper(data, funct){<font></font>
    if($("#myForm", data).length &gt; 0)<font></font>
        top.location.href="login.htm";//redirection<font></font>
    else<font></font>
        funct(data);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，在进行Ajax调用时，我们使用了类似以下内容：</font></font></p>

<pre><code>$.post("myAjaxHandler", <font></font>
       {<font></font>
        param1: foo,<font></font>
        param2: bar<font></font>
       },<font></font>
       function(data){<font></font>
           cbWrapper(data, myActualCB);<font></font>
       }, <font></font>
       "html"<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我们有用，因为所有Ajax调用总是在DIV元素内返回HTML，该DIV元素用于替换页面的一部分。</font><font style="vertical-align: inherit;">另外，我们只需要重定向到登录页面。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我阅读了此问题，并实现了关于将响应</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTTP状态代码</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">为278的方法，以避免浏览器透明地处理重定向。</font><font style="vertical-align: inherit;">即使这样做有效，我还是有点不满意，因为它有点破烂。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在深入研究之后，我放弃了这种方法并使用了</font></font><a href="http://en.wikipedia.org/wiki/JSON" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在这种情况下，所有对AJAX请求的响应都具有</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态码</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 200，并且响应的主体包含在服务器上构造的JSON对象。</font><font style="vertical-align: inherit;">然后，客户端上的JavaScript可以使用JSON对象来决定它需要做什么。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个与您类似的问题。</font><font style="vertical-align: inherit;">我执行的AJAX请求有2种可能的响应：一种</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器</font><em><font style="vertical-align: inherit;">重定向</font></em><font style="vertical-align: inherit;">到新页面，另一种</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新页面</font><em><font style="vertical-align: inherit;">替换</font></em><font style="vertical-align: inherit;">当前页面上的现有HTML表单。</font><font style="vertical-align: inherit;">执行此操作的jQuery代码如下所示：</font></font></p>

<pre><code>$.ajax({<font></font>
    type: "POST",<font></font>
    url: reqUrl,<font></font>
    data: reqBody,<font></font>
    dataType: "json",<font></font>
    success: function(data, textStatus) {<font></font>
        if (data.redirect) {<font></font>
            // data.redirect contains the string URL to redirect to<font></font>
            window.location.href = data.redirect;<font></font>
        } else {<font></font>
            // data.form contains the HTML for the replacement form<font></font>
            $("#myform").replaceWith(data.form);<font></font>
        }<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON对象“数据”在服务器上构造为具有2个成员：</font></font><code>data.redirect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>data.form</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我发现这种方法要好得多。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>

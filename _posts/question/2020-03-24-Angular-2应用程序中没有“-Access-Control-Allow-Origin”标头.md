---
layout: question
title:  Angular 2应用程序中没有“ Access-Control-Allow-Origin”标头
date:   2020-03-24T03:12:36.000Z
description: 对于这个项目，我只是学习和练习Angular2。我没有服务器端，并且正在向barchart ondemand api发出API请求  。我想知道是否...
img: 
author: Itachi
category: question
answer: 9
tags: 角 Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于这个项目，我只是学习和练习Angular2。我没有服务器端，并且正在向</font></font><a href="http://www.barchartondemand.com/api.php"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">barchart ondemand api</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发出API请求 
 </font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道是否有可能绕过cors问题。</font><font style="vertical-align: inherit;">我对这一切仍然很陌生，因此非常感谢您对婴儿进行操作！</font><font style="vertical-align: inherit;">我正在使用</font></font><code>http://localhost:8080</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误消息：（api键已注释掉） </font></font></p>

<p><code>XMLHttpRequest cannot load http://marketdata.websol.barchart.com/getHistory.json?key=MY_API_KEY&amp;symbol=GOOG&amp;type=daily&amp;startDate=20150311000000. Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8080' is therefore not allowed access.</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">StockInformationService：</font></font></p>

<pre><code>import {Injectable} from 'angular2/core';<font></font>
import {Http, Headers} from 'angular2/http';<font></font>
import {Observable} from 'rxjs/Rx';<font></font>
<font></font>
@Injectable()<font></font>
export class StockInformationService {<font></font>
    private apiRoot = "http://marketdata.websol.barchart.com/getHistory.json?key=MY_API_KEY&amp;";<font></font>
<font></font>
    constructor (private _http: Http) {}<font></font>
<font></font>
    getData(symbol: string): Observable&lt;any&gt; {<font></font>
        // Tried adding headers with no luck<font></font>
        const headers = new Headers();<font></font>
        headers.append('Access-Control-Allow-Headers', 'Content-Type');<font></font>
        headers.append('Access-Control-Allow-Methods', 'GET');<font></font>
        headers.append('Access-Control-Allow-Origin', '*');<font></font>
<font></font>
        return this._http.get(this.apiRoot + "symbol=" + symbol + "&amp;type=daily&amp;startDate=20150311000000", {headers: headers})<font></font>
            .map(response =&gt; response.json());<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用组件：</font></font></p>

<pre><code>import {Component} from "angular2/core";<font></font>
import {VolumeComponent} from '../../components/volume/volume';<font></font>
import {StockInformationService} from '../../core/stock-information.service';<font></font>
<font></font>
@Component({<font></font>
    selector: 'app-shell',<font></font>
    template: require('./app-shell.html'),<font></font>
    directives: [VolumeComponent],<font></font>
    providers: [StockInformationService]<font></font>
})<font></font>
export class AppShell {<font></font>
    constructor(private _stockInformationService: StockInformationService) {}<font></font>
<font></font>
    // In my template, on button click, make api request<font></font>
    requestData(symbol: string) {<font></font>
        this._stockInformationService.getData(symbol)<font></font>
            .subscribe(<font></font>
                data =&gt; {<font></font>
                    console.log(data)<font></font>
                },<font></font>
                error =&gt; console.log("Error: " + error)<font></font>
            )}<font></font>
    }<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的控制台中，requestData错误：
</font></font><code>Error: [object Object]</code></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大多数情况下，这种情况是由于服务器的响应类型无效而发生的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请确保以下2避免此问题。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您无需在Angular端设置任何CORS标头。</font><font style="vertical-align: inherit;">非常知道该如何处理。</font><font style="vertical-align: inherit;">Angular期望返回数据为json格式。</font><font style="vertical-align: inherit;">因此，即使对于OPTIONS请求，也要确保返回类型为JSON。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用CORS标头在服务器端处理CORS，这很容易解释，也可以在Google中设置CORS标头或中间件。</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过将以下内容添加到您的spring控制器中，我遇到了相同的错误，以及如何解决该错误：</font></font></p>

<pre><code>@CrossOrigin(origins = {"http://localhost:3000"})
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖古一</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在练习Angular5时遇到了同样的问题。</font><font style="vertical-align: inherit;">然后我遇到了</font></font><a href="https://spring.io/guides/gs/rest-service-cors/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://spring.io/guides/gs/rest-service-cors/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这帮助我解决了问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直</font></font><code>@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用我的请求映射方法。</font><font style="vertical-align: inherit;">我们也可以在Spring Boot应用程序中全局配置它。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AStafan</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在使用</font></font><a href="https://www.soapui.org/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SoapUI</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个</font><font style="vertical-align: inherit;">用于REST和SOAP请求和响应的免费测试工具的模型，那么对于Angular 2+应用程序，您应该记住在HTTP标头请求中进行设置</font></font></p>

<pre><code> Access-Control-Allow-Origin :  *
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我添加了两个图像，以帮助您插入。</font><font style="vertical-align: inherit;">第一个显示您应添加的标题。</font><font style="vertical-align: inherit;">如果要添加标题，则必须先单击加号按钮（绿色）。</font></font></p>

<p><a href="https://i.stack.imgur.com/jEzSH.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/jEzSH.jpg" alt="第一张图片"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二张图片显示插入*。</font><font style="vertical-align: inherit;">值*允许接受来自不同主机的所有请求。</font></font></p>

<p><a href="https://i.stack.imgur.com/6WWns.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/6WWns.jpg" alt="第二张图片"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成这项工作后，我的Angular应用程序在控制台中消除了此烦人的错误。</font></font></p>

<p><a href="https://i.stack.imgur.com/IKLSt.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/IKLSt.jpg" alt="控制台内部错误"></a></p>

<p><font style="vertical-align: inherit;"></font><a href="https://www.youtube.com/watch?v=L2SMZ9bbDvE&amp;t=298s" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该视频</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是帮助我了解创建第一个模型的重要资源</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它将帮助您在SoapUi的环境中创建新的模型，而无需服务器端。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，这不是Angular2错误，而是浏览器正在运行的错误（即，应用程序外部）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">必须先将CORS标头添加到服务器上的该端点，然后才能发出任何请求。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我花了很多时间来寻找解决方案，并通过在服务器端进行更改使它最终得以工作。请访问以下网站</font></font><a href="https://docs.microsoft.com/en-us/aspnet/core/security/cors" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://docs.microsoft.com/zh-cn/aspnet/core/security/cors</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我在服务器端启用corse时，它对我有用。我们在API中使用Asp.Net核心，下面的代码可以正常工作</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）在Startup.cs的ConfigureServices中添加了Addcors</font></font></p>

<pre><code>public void ConfigureServices(IServiceCollection services)<font></font>
    {<font></font>
        services.AddCors();<font></font>
        services.AddMvc();<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）在Configure方法中添加了UseCors，如下所示：</font></font></p>

<pre><code>public void Configure(IApplicationBuilder app, IHostingEnvironment env)<font></font>
    {<font></font>
        app.UseCors(builder =&gt;builder.AllowAnyOrigin());<font></font>
        app.UseMvc();<font></font>
    }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝神无</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需将</font></font><code>php</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">为</font></font></p>

<pre><code>header("Access-Control-Allow-Origin: *");<font></font>
header("Content-Type: application/json; charset=UTF-8");<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="http://www.mocky.io/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.mocky.io/时</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也遇到了同样的问题，</font><font style="vertical-align: inherit;">我要做的是添加到模拟响应头中：Access-Control-Allow-Origin *</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要添加它，只需单击高级选项</font></font></p>

<p><img src="https://i.stack.imgur.com/T417c.png" alt="Mock.io标头示例"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
完成此操作后，我的应用程序便能够从外部域检索数据。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以从以下</font></font><a href="http://www.html5rocks.com/en/tutorials/cors/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网站</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读有关此内容的更多信息：</font><a href="http://www.html5rocks.com/en/tutorials/cors/"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font><a href="http://www.html5rocks.com/en/tutorials/cors/"><font style="vertical-align: inherit;">//www.html5rocks.com/en/tutorials/cors/</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的资源方法不会被命中，因此它们的标题将永远不会被设置。</font><font style="vertical-align: inherit;">原因是实际请求之前有一个所谓的预检请求，这是一个OPTIONS请求。</font><font style="vertical-align: inherit;">因此，错误来自以下事实：预检请求未生成必要的标头。</font><font style="vertical-align: inherit;">检查您是否需要在.htaccess文件中添加以下内容：</font></font></p>

<pre><code>Header set Access-Control-Allow-Origin "*"
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

---
layout: question
title:  手动刷新或写入时，React-router网址不起作用
date:   2020-05-25T04:06:20.000Z
description: 我正在使用React-router，当我单击链接按钮时，它可以正常工作，但是当我刷新网页时，它不会加载我想要的内容。例如，我进去了localhost/...
img: 
author: Itachi
category: question
answer: 19
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用React-router，当我单击链接按钮时，它可以正常工作，但是当我刷新网页时，它不会加载我想要的内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，我进去了</font></font><code>localhost/joblist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，一切都很好，因为我按链接到达这里。</font><font style="vertical-align: inherit;">但是，如果刷新网页，则会得到：</font></font></p>

<pre class="lang-none prettyprint prettyprinted" style=""><code><span class="pln">Cannot GET /joblist</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，它不是这样工作的。</font><font style="vertical-align: inherit;">最初，我的URL为</font></font><code>localhost/#/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>localhost/#/joblist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且它们工作正常。</font><font style="vertical-align: inherit;">但是我不喜欢这种URL，因此尝试删除它</font></font><code>#</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我写道：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">Router</span><span class="pun">.</span><span class="pln">run</span><span class="pun">(</span><span class="pln">routes</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Router</span><span class="pun">.</span><span class="typ">HistoryLocation</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="typ">Handler</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
 </span><span class="typ">React</span><span class="pun">.</span><span class="pln">render</span><span class="pun">(&lt;</span><span class="typ">Handler</span><span class="pun">/&gt;,</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">body</span><span class="pun">);</span><span class="pln">
</span><span class="pun">});</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题不会发生</font></font><code>localhost/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这个总是返回我想要的。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个程序是单页的，所以</font></font><code>/joblist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不需要向任何服务器询问任何内容。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">EDIT2：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的整个路由器。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> routes </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="typ">Route</span><span class="pln"> name</span><span class="pun">=</span><span class="str">"app"</span><span class="pln"> path</span><span class="pun">=</span><span class="str">"/"</span><span class="pln"> handler</span><span class="pun">={</span><span class="typ">App</span><span class="pun">}&gt;</span><span class="pln">
        </span><span class="pun">&lt;</span><span class="typ">Route</span><span class="pln"> name</span><span class="pun">=</span><span class="str">"joblist"</span><span class="pln"> path</span><span class="pun">=</span><span class="str">"/joblist"</span><span class="pln"> handler</span><span class="pun">={</span><span class="typ">JobList</span><span class="pun">}/&gt;</span><span class="pln">
        </span><span class="pun">&lt;</span><span class="typ">DefaultRoute</span><span class="pln"> handler</span><span class="pun">={</span><span class="typ">Dashboard</span><span class="pun">}/&gt;</span><span class="pln">
        </span><span class="pun">&lt;</span><span class="typ">NotFoundRoute</span><span class="pln"> handler</span><span class="pun">={</span><span class="typ">NotFound</span><span class="pun">}/&gt;</span><span class="pln">
    </span><span class="pun">&lt;/</span><span class="typ">Route</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">);</span><span class="pln">

</span><span class="typ">Router</span><span class="pun">.</span><span class="pln">run</span><span class="pun">(</span><span class="pln">routes</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Router</span><span class="pun">.</span><span class="typ">HistoryLocation</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="typ">Handler</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="typ">React</span><span class="pun">.</span><span class="pln">render</span><span class="pun">(&lt;</span><span class="typ">Handler</span><span class="pun">/&gt;,</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">body</span><span class="pun">);</span><span class="pln">
</span><span class="pun">});</span></code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4163篇《手动刷新或写入时，React-router网址不起作用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><strong><font style="vertical-align: inherit;">Redux</font></strong><font style="vertical-align: inherit;">也</font></font><code>HashRouter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有用</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，只需替换：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="typ">Router</span><span class="pln"> </span><span class="com">//replace Router</span><span class="pln">
</span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">"react-router-dom"</span><span class="pun">;</span><span class="pln">

</span><span class="typ">ReactDOM</span><span class="pun">.</span><span class="pln">render</span><span class="pun">(</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="typ">LocaleProvider</span><span class="pln"> locale</span><span class="pun">={</span><span class="pln">enUS</span><span class="pun">}&gt;</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="typ">Provider</span><span class="pln"> store</span><span class="pun">={</span><span class="typ">Store</span><span class="pun">}&gt;</span><span class="pln">
        </span><span class="pun">&lt;</span><span class="typ">Router</span><span class="pln"> history</span><span class="pun">={</span><span class="pln">history</span><span class="pun">}&gt;</span><span class="pln"> </span><span class="com">//replace here saying Router</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="typ">Layout</span><span class="pun">/&gt;</span><span class="pln">
        </span><span class="pun">&lt;/</span><span class="typ">Router</span><span class="pun">&gt;</span><span class="pln">
    </span><span class="pun">&lt;/</span><span class="typ">Provider</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="typ">LocaleProvider</span><span class="pun">&gt;,</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">"app"</span><span class="pun">));</span><span class="pln">
registerServiceWorker</span><span class="pun">();</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="typ">HashRouter</span><span class="pln"> </span><span class="com">//replaced with HashRouter</span><span class="pln">
</span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">"react-router-dom"</span><span class="pun">;</span><span class="pln">

</span><span class="typ">ReactDOM</span><span class="pun">.</span><span class="pln">render</span><span class="pun">(</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="typ">LocaleProvider</span><span class="pln"> locale</span><span class="pun">={</span><span class="pln">enUS</span><span class="pun">}&gt;</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="typ">Provider</span><span class="pln"> store</span><span class="pun">={</span><span class="typ">Store</span><span class="pun">}&gt;</span><span class="pln">
        </span><span class="pun">&lt;</span><span class="typ">HashRouter</span><span class="pln"> history</span><span class="pun">={</span><span class="pln">history</span><span class="pun">}&gt;</span><span class="pln"> </span><span class="com">//replaced with HashRouter</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="typ">Layout</span><span class="pun">/&gt;</span><span class="pln">
        </span><span class="pun">&lt;/</span><span class="typ">HashRouter</span><span class="pun">&gt;</span><span class="pln">
    </span><span class="pun">&lt;/</span><span class="typ">Provider</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="typ">LocaleProvider</span><span class="pun">&gt;,</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">"app"</span><span class="pun">));</span><span class="pln">
registerServiceWorker</span><span class="pun">();</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞羽</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于使用IIS 10的用户，这是您应该做的以实现此目的的方法。</font><font style="vertical-align: inherit;">确保与此同时使用browserHistory。</font><font style="vertical-align: inherit;">作为参考，我将给出用于路由的代码，但这并不重要，重要的是下面的组件代码之后的下一步：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">class</span><span class="pln"> </span><span class="typ">App</span><span class="pln"> extends </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="typ">Router</span><span class="pln"> history</span><span class="pun">={</span><span class="pln">browserHistory</span><span class="pun">}&gt;</span><span class="pln">
                </span><span class="pun">&lt;</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
                    </span><span class="pun">&lt;</span><span class="typ">Root</span><span class="pun">&gt;</span><span class="pln">
                        </span><span class="pun">&lt;</span><span class="typ">Switch</span><span class="pun">&gt;</span><span class="pln">
                            </span><span class="pun">&lt;</span><span class="typ">Route</span><span class="pln"> exact path</span><span class="pun">={</span><span class="str">"/"</span><span class="pun">}</span><span class="pln"> component</span><span class="pun">={</span><span class="typ">Home</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">    
                            </span><span class="pun">&lt;</span><span class="typ">Route</span><span class="pln"> path</span><span class="pun">={</span><span class="str">"/home"</span><span class="pun">}</span><span class="pln"> component</span><span class="pun">={</span><span class="typ">Home</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
                            </span><span class="pun">&lt;</span><span class="typ">Route</span><span class="pln"> path</span><span class="pun">={</span><span class="str">"/createnewproject"</span><span class="pun">}</span><span class="pln"> component</span><span class="pun">={</span><span class="typ">CreateNewProject</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
                            </span><span class="pun">&lt;</span><span class="typ">Route</span><span class="pln"> path</span><span class="pun">={</span><span class="str">"/projects"</span><span class="pun">}</span><span class="pln"> component</span><span class="pun">={</span><span class="typ">Projects</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
                            </span><span class="pun">&lt;</span><span class="typ">Route</span><span class="pln"> path</span><span class="pun">=</span><span class="str">"*"</span><span class="pln"> component</span><span class="pun">={</span><span class="typ">NotFoundRoute</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
                        </span><span class="pun">&lt;/</span><span class="typ">Switch</span><span class="pun">&gt;</span><span class="pln">
                    </span><span class="pun">&lt;/</span><span class="typ">Root</span><span class="pun">&gt;</span><span class="pln">
                </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="pun">&lt;/</span><span class="typ">Router</span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">)</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
render </span><span class="pun">(&lt;</span><span class="typ">App</span><span class="pln"> </span><span class="pun">/&gt;,</span><span class="pln"> window</span><span class="pun">.</span><span class="pln">document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">"app"</span><span class="pun">));</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于问题是IIS收到来自客户端浏览器的请求，因此它将好像请求页面一样解释URL，然后由于没有可用的页面而返回404页面。</font><font style="vertical-align: inherit;">请执行下列操作：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开IIS</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开服务器，然后打开站点文件夹</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">点击网站/应用程序</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到错误页面</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开列表中的404错误状态项</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替选项“将内容从静态文件插入错误响应中”，将其更改为“在此站点上执行URL”，然后在URL中添加“ /”斜杠值。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在它将正常工作。</font></font></p>

<p><a href="https://i.stack.imgur.com/sihHh.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/sihHh.png" alt="在此处输入图片说明"></a>
<a href="https://i.stack.imgur.com/12o6e.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/12o6e.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对您有所帮助。</font><font style="vertical-align: inherit;">:-)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我使用.Net Core MVC时，类似以下内容对我有所帮助：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">    </span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">HomeController</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="typ">Controller</span><span class="pln">
    </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">public</span><span class="pln"> </span><span class="typ">IActionResult</span><span class="pln"> </span><span class="typ">Index</span><span class="pun">()</span><span class="pln">
        </span><span class="pun">{</span><span class="pln">
            </span><span class="kwd">var</span><span class="pln"> url </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Request</span><span class="pun">.</span><span class="typ">Path</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="typ">Request</span><span class="pun">.</span><span class="typ">QueryString</span><span class="pun">;</span><span class="pln">
            </span><span class="kwd">return</span><span class="pln"> </span><span class="typ">App</span><span class="pun">(</span><span class="pln">url</span><span class="pun">);</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">

        </span><span class="pun">[</span><span class="typ">Route</span><span class="pun">(</span><span class="str">"App"</span><span class="pun">)]</span><span class="pln">
        </span><span class="kwd">public</span><span class="pln"> </span><span class="typ">IActionResult</span><span class="pln"> </span><span class="typ">App</span><span class="pun">(</span><span class="pln">string url</span><span class="pun">)</span><span class="pln">
        </span><span class="pun">{</span><span class="pln">
            </span><span class="kwd">return</span><span class="pln"> </span><span class="typ">View</span><span class="pun">(</span><span class="str">"/wwwroot/app/build/index.html"</span><span class="pun">);</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
   </span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上在MVC端，所有不匹配的路由都将落入</font></font><code>Home/Index</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所指定的位置</font></font><code>startup.cs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在内部</font></font><code>Index</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以获取原始请求url并将其传递到任何需要的地方。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">startup.cs</font></font></p>
</blockquote>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">        app</span><span class="pun">.</span><span class="typ">UseMvc</span><span class="pun">(</span><span class="pln">routes </span><span class="pun">=&gt;</span><span class="pln">
        </span><span class="pun">{</span><span class="pln">
            routes</span><span class="pun">.</span><span class="typ">MapRoute</span><span class="pun">(</span><span class="pln">
                name</span><span class="pun">:</span><span class="pln"> </span><span class="str">"default"</span><span class="pun">,</span><span class="pln">
                template</span><span class="pun">:</span><span class="pln"> </span><span class="str">"{controller=Home}/{action=Index}/{id?}"</span><span class="pun">);</span><span class="pln">

            routes</span><span class="pun">.</span><span class="typ">MapSpaFallbackRoute</span><span class="pun">(</span><span class="pln">
                name</span><span class="pun">:</span><span class="pln"> </span><span class="str">"spa-fallback"</span><span class="pun">,</span><span class="pln">
                defaults</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> controller </span><span class="pun">=</span><span class="pln"> </span><span class="str">"Home"</span><span class="pun">,</span><span class="pln"> action </span><span class="pun">=</span><span class="pln"> </span><span class="str">"Index"</span><span class="pln"> </span><span class="pun">});</span><span class="pln">
        </span><span class="pun">});</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在IIS中托管；</font><font style="vertical-align: inherit;">将此添加到我的webconfig中解决了我的问题</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">httpErrors errorMode</span><span class="pun">=</span><span class="str">"Custom"</span><span class="pln"> defaultResponseMode</span><span class="pun">=</span><span class="str">"ExecuteURL"</span><span class="pun">&gt;</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="pln">remove statusCode</span><span class="pun">=</span><span class="str">"500"</span><span class="pln"> subStatusCode</span><span class="pun">=</span><span class="str">"100"</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="pln">remove statusCode</span><span class="pun">=</span><span class="str">"500"</span><span class="pln"> subStatusCode</span><span class="pun">=</span><span class="str">"-1"</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="pln">remove statusCode</span><span class="pun">=</span><span class="str">"404"</span><span class="pln"> subStatusCode</span><span class="pun">=</span><span class="str">"-1"</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="pln">error statusCode</span><span class="pun">=</span><span class="str">"404"</span><span class="pln"> path</span><span class="pun">=</span><span class="str">"/"</span><span class="pln"> responseMode</span><span class="pun">=</span><span class="str">"ExecuteURL"</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="pln">error statusCode</span><span class="pun">=</span><span class="str">"500"</span><span class="pln"> prefixLanguageFilePath</span><span class="pun">=</span><span class="str">""</span><span class="pln"> path</span><span class="pun">=</span><span class="str">"/error_500.asp"</span><span class="pln"> responseMode</span><span class="pun">=</span><span class="str">"ExecuteURL"</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="pln">error statusCode</span><span class="pun">=</span><span class="str">"500"</span><span class="pln"> subStatusCode</span><span class="pun">=</span><span class="str">"100"</span><span class="pln"> path</span><span class="pun">=</span><span class="str">"/error_500.asp"</span><span class="pln"> responseMode</span><span class="pun">=</span><span class="str">"ExecuteURL"</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="pln">httpErrors</span><span class="pun">&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以对其他任何服务器进行类似的配置</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">别太浪</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个主题有点老了，已经解决了，但是我想向您推荐一个简单，清晰和更好的解决方案。</font><font style="vertical-align: inherit;">如果您使用Web服务器，则可以使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个Web服务器都具有在http 404的情况下将用户重定向到错误页面的功能。要解决此问题，您需要将用户重定向到索引页面。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用Java基本服务器（tomcat或任何java应用程序服务器），则解决方案可能是以下几种：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">web.xml：</font></font></strong></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;?</span><span class="pln">xml version</span><span class="pun">=</span><span class="str">"1.0"</span><span class="pln"> encoding</span><span class="pun">=</span><span class="str">"UTF-8"</span><span class="pun">?&gt;</span><span class="pln">
</span><span class="pun">&lt;</span><span class="pln">web</span><span class="pun">-</span><span class="pln">app xmlns</span><span class="pun">=</span><span class="str">"http://xmlns.jcp.org/xml/ns/javaee"</span><span class="pln"> xmlns</span><span class="pun">:</span><span class="pln">xsi</span><span class="pun">=</span><span class="str">"http://www.w3.org/2001/XMLSchema-instance"</span><span class="pln">
         xsi</span><span class="pun">:</span><span class="pln">schemaLocation</span><span class="pun">=</span><span class="str">"http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"</span><span class="pln">
         version</span><span class="pun">=</span><span class="str">"3.1"</span><span class="pun">&gt;</span><span class="pln">

    </span><span class="pun">&lt;!--</span><span class="pln"> WELCOME FILE LIST </span><span class="pun">--&gt;</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="pln">welcome</span><span class="pun">-</span><span class="pln">file</span><span class="pun">-</span><span class="pln">list</span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">&lt;</span><span class="pln">welcome</span><span class="pun">-</span><span class="pln">file</span><span class="pun">&gt;</span><span class="pln">index</span><span class="pun">.</span><span class="pln">jsp</span><span class="pun">&lt;/</span><span class="pln">welcome</span><span class="pun">-</span><span class="pln">file</span><span class="pun">&gt;</span><span class="pln">
    </span><span class="pun">&lt;/</span><span class="pln">welcome</span><span class="pun">-</span><span class="pln">file</span><span class="pun">-</span><span class="pln">list</span><span class="pun">&gt;</span><span class="pln">

    </span><span class="pun">&lt;!--</span><span class="pln"> ERROR PAGES DEFINITION </span><span class="pun">--&gt;</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="pln">error</span><span class="pun">-</span><span class="pln">page</span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">&lt;</span><span class="pln">error</span><span class="pun">-</span><span class="pln">code</span><span class="pun">&gt;</span><span class="lit">404</span><span class="pun">&lt;/</span><span class="pln">error</span><span class="pun">-</span><span class="pln">code</span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">&lt;</span><span class="pln">location</span><span class="pun">&gt;</span><span class="str">/index.jsp&lt;/</span><span class="pln">location</span><span class="pun">&gt;</span><span class="pln">
    </span><span class="pun">&lt;/</span><span class="pln">error</span><span class="pun">-</span><span class="pln">page</span><span class="pun">&gt;</span><span class="pln">

</span><span class="pun">&lt;/</span><span class="pln">web</span><span class="pun">-</span><span class="pln">app</span><span class="pun">&gt;</span></code></pre>

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
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还没有使用服务器端渲染，但是遇到了与OP相同的问题，在大多数情况下，Link似乎可以正常工作，但是当我有参数时失败了。</font><font style="vertical-align: inherit;">我将在此处记录我的解决方案，以查看它是否对任何人都有帮助。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的主要jsx包含以下内容：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="typ">Route</span><span class="pln"> onEnter</span><span class="pun">={</span><span class="pln">requireLogin</span><span class="pun">}</span><span class="pln"> path</span><span class="pun">=</span><span class="str">"detail/:id"</span><span class="pln"> component</span><span class="pun">={</span><span class="typ">ModelDetail</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对于第一个匹配的链接来说效果很好，但是当：id更改</font></font><code>&lt;Link&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嵌套在该模型的详细信息页面上的表达式时，浏览器栏中的url会更改，但是页面的内容最初并未更改以反映链接的模型。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">麻烦的是我曾用来</font></font><code>props.params.id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置模型</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该组件仅安装一次，因此这意味着第一个模型是粘贴在页面上的模型，随后的Links更改了道具，但页面看起来没有变化。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将模型同时设置为组件状态</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>componentWillReceiveProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于</font><font style="vertical-align: inherit;">组件的状态</font><font style="vertical-align: inherit;">（此处基于下一个道具）将解决该问题，并且页面内容会更改以反映所需的模型。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伊芙妮</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到了带有React Router（Apache）的SPA解决方案。</font><font style="vertical-align: inherit;">只需添加.htaccess</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="typ">IfModule</span><span class="pln"> mod_rewrite</span><span class="pun">.</span><span class="pln">c</span><span class="pun">&gt;</span><span class="pln">

  </span><span class="typ">RewriteEngine</span><span class="pln"> </span><span class="typ">On</span><span class="pln">
  </span><span class="typ">RewriteBase</span><span class="pln"> </span><span class="pun">/</span><span class="pln">
  </span><span class="typ">RewriteRule</span><span class="pln"> </span><span class="pun">^</span><span class="pln">index\.html$ </span><span class="pun">-</span><span class="pln"> </span><span class="pun">[</span><span class="pln">L</span><span class="pun">]</span><span class="pln">
  </span><span class="typ">RewriteCond</span><span class="pln"> </span><span class="pun">%{</span><span class="pln">REQUEST_FILENAME</span><span class="pun">}</span><span class="pln"> </span><span class="pun">!-</span><span class="pln">f
  </span><span class="typ">RewriteCond</span><span class="pln"> </span><span class="pun">%{</span><span class="pln">REQUEST_FILENAME</span><span class="pun">}</span><span class="pln"> </span><span class="pun">!-</span><span class="pln">d
  </span><span class="typ">RewriteCond</span><span class="pln"> </span><span class="pun">%{</span><span class="pln">REQUEST_FILENAME</span><span class="pun">}</span><span class="pln"> </span><span class="pun">!-</span><span class="pln">l
  </span><span class="typ">RewriteRule</span><span class="pln"> </span><span class="pun">.</span><span class="pln"> </span><span class="pun">/</span><span class="pln">index</span><span class="pun">.</span><span class="pln">html </span><span class="pun">[</span><span class="pln">L</span><span class="pun">]</span><span class="pln">

</span><span class="pun">&lt;/</span><span class="typ">IfModule</span><span class="pun">&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源：</font><a href="https://gist.github.com/alexsasharegan/173878f9d67055bfef63449fa7136042" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://gist.github.com/alexsasharegan/173878f9d67055bfef63449fa7136042" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//gist.github.com/alexsasharegan/173878f9d67055bfef63449fa7136042</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">别太浪</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Firebase，则只需确保在应用程序根目录（在托管部分中）的firebase.json文件中具有rewrites属性。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">{</span><span class="pln"> 
  </span><span class="str">"hosting"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="str">"rewrites"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[{</span><span class="pln">
      </span><span class="str">"source"</span><span class="pun">:</span><span class="str">"**"</span><span class="pun">,</span><span class="pln">
      </span><span class="str">"destination"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"/index.html"</span><span class="pln">
    </span><span class="pun">}]</span><span class="pln">    
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以节省别人的挫折感和浪费的时间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">祝您编程愉快！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于该主题的进一步阅读：</font></font></p>

<p><a href="https://firebase.google.com/docs/hosting/full-config#rewrites" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://firebase.google.com/docs/hosting/full-config#rewrites</font></font></a></p>

<p><a href="https://stackoverflow.com/questions/37667626/firebase-cli-configure-as-a-single-page-app-rewrite-all-urls-to-index-html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firebase CLI：“配置为单页应用程序（将所有URL重写为/index.html）”</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Create React App：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个伟大的步行路程，虽然这个问题与许多大型主机平台的解决方案，你可以找到</font></font><a href="https://facebook.github.io/create-react-app/docs/deployment#netlify-https-wwwnetlifycom" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的创建做出反应应用页面上。</font><font style="vertical-align: inherit;">例如，我将React Router v4和Netlify用作前端代码。</font><font style="vertical-align: inherit;">只需要在我的公用文件夹中添加一个文件（“ _redirects”），然后在该文件中添加一行代码即可：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="com">/*  /index.html  200</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，当输入浏览器或有人刷新时，我的网站可以正确呈现诸如mysite.com/pricing之类的路径。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试使用以下代码在公用文件夹内添加“ .htaccess”文件。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">RewriteEngine</span><span class="pln"> </span><span class="typ">On</span><span class="pln">
</span><span class="typ">RewriteCond</span><span class="pln"> </span><span class="pun">%{</span><span class="pln">DOCUMENT_ROOT</span><span class="pun">}%{</span><span class="pln">REQUEST_URI</span><span class="pun">}</span><span class="pln"> </span><span class="pun">-</span><span class="pln">f </span><span class="pun">[</span><span class="pln">OR</span><span class="pun">]</span><span class="pln">
</span><span class="typ">RewriteCond</span><span class="pln"> </span><span class="pun">%{</span><span class="pln">DOCUMENT_ROOT</span><span class="pun">}%{</span><span class="pln">REQUEST_URI</span><span class="pun">}</span><span class="pln"> </span><span class="pun">-</span><span class="pln">d
</span><span class="typ">RewriteRule</span><span class="pln"> </span><span class="pun">^</span><span class="pln"> </span><span class="pun">-</span><span class="pln"> </span><span class="pun">[</span><span class="pln">L</span><span class="pun">]</span><span class="pln">

</span><span class="typ">RewriteRule</span><span class="pln"> </span><span class="pun">^</span><span class="pln"> </span><span class="pun">/</span><span class="pln">index</span><span class="pun">.</span><span class="pln">html </span><span class="pun">[</span><span class="pln">L</span><span class="pun">]</span><span class="pln">  </span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">千羽</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果确实有index.html的备用版本，请确保在index.html文件中具有以下内容：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">script</span><span class="pun">&gt;</span><span class="pln">
  </span><span class="typ">System</span><span class="pun">.</span><span class="pln">config</span><span class="pun">({</span><span class="pln"> baseURL</span><span class="pun">:</span><span class="pln"> </span><span class="str">'/'</span><span class="pln"> </span><span class="pun">});</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="pln">script</span><span class="pun">&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能因项目而异。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">镜风</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在IIS上托管react应用，只需添加一个web.config文件，其中包含：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;?</span><span class="pln">xml version</span><span class="pun">=</span><span class="str">"1.0"</span><span class="pln"> encoding</span><span class="pun">=</span><span class="str">"utf-8"</span><span class="pun">?&gt;</span><span class="pln">
</span><span class="pun">&lt;</span><span class="pln">configuration</span><span class="pun">&gt;</span><span class="pln">
  </span><span class="pun">&lt;</span><span class="pln">system</span><span class="pun">.</span><span class="pln">webServer</span><span class="pun">&gt;</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="pln">httpErrors errorMode</span><span class="pun">=</span><span class="str">"Custom"</span><span class="pln"> existingResponse</span><span class="pun">=</span><span class="str">"Replace"</span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">&lt;</span><span class="pln">remove statusCode</span><span class="pun">=</span><span class="str">"404"</span><span class="pln"> subStatusCode</span><span class="pun">=</span><span class="str">"-1"</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
        </span><span class="pun">&lt;</span><span class="pln">error statusCode</span><span class="pun">=</span><span class="str">"404"</span><span class="pln"> path</span><span class="pun">=</span><span class="str">"/"</span><span class="pln"> responseMode</span><span class="pun">=</span><span class="str">"ExecuteURL"</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
    </span><span class="pun">&lt;/</span><span class="pln">httpErrors</span><span class="pun">&gt;</span><span class="pln">
  </span><span class="pun">&lt;/</span><span class="pln">system</span><span class="pun">.</span><span class="pln">webServer</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="pln">configuration</span><span class="pun">&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将告诉IIS服务器将主页返回到客户端而不是404错误，并且不需要使用哈希历史记录。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack Dev Server具有启用此功能的选项。</font><font style="vertical-align: inherit;">打开</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并添加</font></font><code>--history-api-fallback</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该解决方案为我工作。</font></font></p>

<p><a href="https://github.com/reactjs/react-router-tutorial/tree/master/lessons/10-clean-urls#configuring-your-server" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应路由器教程</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伊芙妮</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将此添加到</font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">devServer</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    historyApiFallback</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MonsterKK</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样可以解决你的问题 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在生产模式下的ReactJS应用程序中，我也遇到了同样的问题。</font><font style="vertical-align: inherit;">这是该问题的2个解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.将路由历史更改为“ hashHistory”，而不是用browserHistory </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="typ">Router</span><span class="pln"> history</span><span class="pun">={</span><span class="pln">hashHistory</span><span class="pun">}</span><span class="pln"> </span><span class="pun">&gt;</span><span class="pln">
   </span><span class="pun">&lt;</span><span class="typ">Route</span><span class="pln"> path</span><span class="pun">=</span><span class="str">"/home"</span><span class="pln"> component</span><span class="pun">={</span><span class="typ">Home</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
   </span><span class="pun">&lt;</span><span class="typ">Route</span><span class="pln"> path</span><span class="pun">=</span><span class="str">"/aboutus"</span><span class="pln"> component</span><span class="pun">={</span><span class="typ">AboutUs</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="typ">Router</span><span class="pun">&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在使用命令构建应用 </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">sudo npm run build</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后将build文件夹放在您的var / www /文件夹中，现在该应用程序可以正常工作，在每个URL中添加＃标签。</font><font style="vertical-align: inherit;">喜欢</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地主机/＃/ home本地主机/＃/ aboutus</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案2：不使用浏览器历史记录＃标签，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在路由器中设置您的历史= {browserHistory}，现在使用sudo npm run build对其进行构建。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要创建“ conf”文件来解决“ 404找不到页面”，conf文件应如下所示。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开您的终端，键入以下命令 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cd / etc / apache2 / sites-available ls nano sample.conf在其中添加以下内容。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="typ">VirtualHost</span><span class="pln"> </span><span class="pun">*:</span><span class="lit">80</span><span class="pun">&gt;</span><span class="pln">
    </span><span class="typ">ServerAdmin</span><span class="pln"> admin@0</span><span class="pun">.</span><span class="lit">0.0</span><span class="pun">.</span><span class="lit">0</span><span class="pln">
    </span><span class="typ">ServerName</span><span class="pln"> </span><span class="lit">0.0</span><span class="pun">.</span><span class="lit">0.0</span><span class="pln">
    </span><span class="typ">ServerAlias</span><span class="pln"> </span><span class="lit">0.0</span><span class="pun">.</span><span class="lit">0.0</span><span class="pln">
    </span><span class="typ">DocumentRoot</span><span class="pln"> </span><span class="pun">/</span><span class="kwd">var</span><span class="pun">/</span><span class="pln">www</span><span class="pun">/</span><span class="pln">html</span><span class="pun">/</span><span class="pln">

    </span><span class="typ">ErrorLog</span><span class="pln"> $</span><span class="pun">{</span><span class="pln">APACHE_LOG_DIR</span><span class="pun">}/</span><span class="pln">error</span><span class="pun">.</span><span class="pln">log
    </span><span class="typ">CustomLog</span><span class="pln"> $</span><span class="pun">{</span><span class="pln">APACHE_LOG_DIR</span><span class="pun">}/</span><span class="pln">access</span><span class="pun">.</span><span class="pln">log combined
    </span><span class="pun">&lt;</span><span class="typ">Directory</span><span class="pln"> </span><span class="str">"/var/www/html/"</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="typ">Options</span><span class="pln"> </span><span class="typ">Indexes</span><span class="pln"> </span><span class="typ">FollowSymLinks</span><span class="pln">
            </span><span class="typ">AllowOverride</span><span class="pln"> all
            </span><span class="typ">Require</span><span class="pln"> all granted
    </span><span class="pun">&lt;/</span><span class="typ">Directory</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="typ">VirtualHost</span><span class="pun">&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您需要使用以下命令来启用sample.conf文件</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">cd </span><span class="pun">/</span><span class="pln">etc</span><span class="pun">/</span><span class="pln">apache2</span><span class="pun">/</span><span class="pln">sites</span><span class="pun">-</span><span class="pln">available
sudo a2ensite sample</span><span class="pun">.</span><span class="pln">conf</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后它将要求您使用sudo服务apache2重新加载或重新启动apache服务器</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后打开您的localhost / build文件夹并添加内容如下的.htaccess文件。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">   </span><span class="typ">RewriteEngine</span><span class="pln"> </span><span class="typ">On</span><span class="pln">
   </span><span class="typ">RewriteBase</span><span class="pln"> </span><span class="pun">/</span><span class="pln">
   </span><span class="typ">RewriteCond</span><span class="pln"> </span><span class="pun">%{</span><span class="pln">REQUEST_FILENAME</span><span class="pun">}</span><span class="pln"> </span><span class="pun">!-</span><span class="pln">f
   </span><span class="typ">RewriteCond</span><span class="pln"> </span><span class="pun">%{</span><span class="pln">REQUEST_FILENAME</span><span class="pun">}</span><span class="pln"> </span><span class="pun">!-</span><span class="pln">d
   </span><span class="typ">RewriteCond</span><span class="pln"> </span><span class="pun">%{</span><span class="pln">REQUEST_FILENAME</span><span class="pun">}</span><span class="pln"> </span><span class="pun">!-</span><span class="pln">l
   </span><span class="typ">RewriteRule</span><span class="pln"> </span><span class="pun">^.*</span><span class="pln">$ </span><span class="pun">/</span><span class="pln"> </span><span class="pun">[</span><span class="pln">L</span><span class="pun">,</span><span class="pln">QSA</span><span class="pun">]</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，该应用程序可以正常运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：将0.0.0.0 ip更改为您的本地IP地址。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果对此有任何疑问，请随时提出评论。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对其他人有帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">千羽</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您通过AWS Static S3 Hosting和CloudFront托管React应用</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CloudFront响应403 Access Denied消息后就出现了此问题，因为它希望/ some / other / path存在于我的S3文件夹中，但该路径仅存在于React的使用react-router的路由内部。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案是设置分发错误页面规则。</font><font style="vertical-align: inherit;">转到CloudFront设置，然后选择您的分配。</font><font style="vertical-align: inherit;">接下来转到“错误页面”标签。</font><font style="vertical-align: inherit;">单击“创建自定义错误响应”并添加403的条目，因为这是我们得到的错误状态代码。</font><font style="vertical-align: inherit;">将“响应页面路径”设置为/index.html并将状态码设置为200。最终结果以其简单性令我惊讶。</font><font style="vertical-align: inherit;">提供了索引页面，但URL保留在浏览器中，因此，一旦React应用加载，它将检测URL路径并导航到所需的路由。</font></font></p>

<p><a href="https://i.stack.imgur.com/Pafj4.png" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误页面403规则</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">镜风</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚才使用create-react-app制作了一个网站，并在此处遇到了同样的问题。</font><font style="vertical-align: inherit;">我</font></font><code>BrowserRouting</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><code>react-router-dom</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包装中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我在Nginx服务器上运行，对我来说解决了什么是将以下内容添加到</font></font><code>/etc/nginx/yourconfig.conf</code></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">location </span><span class="pun">/</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(!-</span><span class="pln">e $request_filename</span><span class="pun">){</span><span class="pln">
    rewrite </span><span class="pun">^(.*)</span><span class="pln">$ </span><span class="pun">/</span><span class="pln">index</span><span class="pun">.</span><span class="pln">html </span><span class="kwd">break</span><span class="pun">;</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对应于</font></font><code>.htaccess</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在运行Appache的情况下</font><font style="vertical-align: inherit;">将以下内容添加到</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">Options</span><span class="pln"> </span><span class="pun">-</span><span class="typ">MultiViews</span><span class="pln">
</span><span class="typ">RewriteEngine</span><span class="pln"> </span><span class="typ">On</span><span class="pln">
</span><span class="typ">RewriteCond</span><span class="pln"> </span><span class="pun">%{</span><span class="pln">REQUEST_FILENAME</span><span class="pun">}</span><span class="pln"> </span><span class="pun">!-</span><span class="pln">f
</span><span class="typ">RewriteRule</span><span class="pln"> </span><span class="pun">^</span><span class="pln"> index</span><span class="pun">.</span><span class="pln">html </span><span class="pun">[</span><span class="pln">QSA</span><span class="pun">,</span><span class="pln">L</span><span class="pun">]</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这似乎也是Facebook自己建议的解决方案，可以在</font><a href="https://facebook.github.io/create-react-app/docs/deployment#serving-apps-with-client-side-routing" rel="noreferrer"><font style="vertical-align: inherit;">这里</font></a><font style="vertical-align: inherit;">找到</font></font><a href="https://facebook.github.io/create-react-app/docs/deployment#serving-apps-with-client-side-routing" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">王者一打九达蒙</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在index.html中</font></font><code>head</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，添加以下内容：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">base href</span><span class="pun">=</span><span class="str">"/"</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;!--</span><span class="pln"> </span><span class="typ">This</span><span class="pln"> must come before the css and javascripts </span><span class="pun">--&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，当与webpack dev服务器一起运行时，请使用此命令。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">webpack</span><span class="pun">-</span><span class="pln">dev</span><span class="pun">-</span><span class="pln">server </span><span class="pun">--</span><span class="pln">mode development </span><span class="pun">--</span><span class="pln">hot </span><span class="pun">--</span><span class="kwd">inline</span><span class="pln"> </span><span class="pun">--</span><span class="pln">content</span><span class="pun">-</span><span class="pln">base</span><span class="pun">=</span><span class="pln">dist </span><span class="pun">--</span><span class="pln">history</span><span class="pun">-</span><span class="pln">api</span><span class="pun">-</span><span class="pln">fallback</span></code></pre>

<p><code>--history-api-fallback</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是重要的部分</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以更改</font></font><code>.htaccess</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件并插入以下内容：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="typ">IfModule</span><span class="pln"> mod_rewrite</span><span class="pun">.</span><span class="pln">c</span><span class="pun">&gt;</span><span class="pln">
  </span><span class="typ">RewriteEngine</span><span class="pln"> </span><span class="typ">On</span><span class="pln">
  </span><span class="typ">RewriteBase</span><span class="pln"> </span><span class="pun">/</span><span class="pln">
  </span><span class="typ">RewriteRule</span><span class="pln"> </span><span class="pun">^</span><span class="pln">index\.html$ </span><span class="pun">-</span><span class="pln"> </span><span class="pun">[</span><span class="pln">L</span><span class="pun">]</span><span class="pln">
  </span><span class="typ">RewriteCond</span><span class="pln"> </span><span class="pun">%{</span><span class="pln">REQUEST_FILENAME</span><span class="pun">}</span><span class="pln"> </span><span class="pun">!-</span><span class="pln">f
  </span><span class="typ">RewriteCond</span><span class="pln"> </span><span class="pun">%{</span><span class="pln">REQUEST_FILENAME</span><span class="pun">}</span><span class="pln"> </span><span class="pun">!-</span><span class="pln">d
  </span><span class="typ">RewriteCond</span><span class="pln"> </span><span class="pun">%{</span><span class="pln">REQUEST_FILENAME</span><span class="pun">}</span><span class="pln"> </span><span class="pun">!-</span><span class="pln">l
  </span><span class="typ">RewriteRule</span><span class="pln"> </span><span class="pun">.</span><span class="pln"> </span><span class="pun">/</span><span class="pln">index</span><span class="pun">.</span><span class="pln">html </span><span class="pun">[</span><span class="pln">L</span><span class="pun">]</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="typ">IfModule</span><span class="pun">&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用</font></font><code>react: "^16.12.0"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>react-router: "^5.1.2"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这种方法是万能的，可能是入门的最简单方法。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>

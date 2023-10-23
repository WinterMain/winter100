---
layout: question
title:  带有BrowserRouter / browserHistory的React-router在刷新时不起作用
date:   2020-05-28T02:08:27.000Z
description: 我有以下webpack配置文件：var webpack = require('webpack');var path = require('path'...
img: 
author: 镜风Davaid
category: question
answer: 1
tags: node.js Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有以下webpack配置文件：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> webpack </span><span class="pun">=</span><span class="pln"> require</span><span class="pun">(</span><span class="str">'webpack'</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> path </span><span class="pun">=</span><span class="pln"> require</span><span class="pun">(</span><span class="str">'path'</span><span class="pun">);</span><span class="pln">

</span><span class="kwd">var</span><span class="pln"> BUILD_DIR </span><span class="pun">=</span><span class="pln"> path</span><span class="pun">.</span><span class="pln">resolve</span><span class="pun">(</span><span class="pln">__dirname</span><span class="pun">,</span><span class="pln"> </span><span class="str">'src/client/public'</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> APP_DIR </span><span class="pun">=</span><span class="pln"> path</span><span class="pun">.</span><span class="pln">resolve</span><span class="pun">(</span><span class="pln">__dirname</span><span class="pun">,</span><span class="pln"> </span><span class="str">'src/client/app'</span><span class="pun">);</span><span class="pln">

</span><span class="kwd">var</span><span class="pln"> config </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    entry</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="pln">
        APP_DIR </span><span class="pun">+</span><span class="pln"> </span><span class="str">'/config/routes.jsx'</span><span class="pun">,</span><span class="pln">
        </span><span class="str">'webpack/hot/dev-server'</span><span class="pun">,</span><span class="pln">
        </span><span class="str">'webpack-dev-server/client?http://localhost:8080'</span><span class="pln">
    </span><span class="pun">],</span><span class="pln">
  output</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    publicPath</span><span class="pun">:</span><span class="pln"> </span><span class="str">'http://localhost:8080/src/client/public/'</span><span class="pln">
  </span><span class="pun">},</span><span class="pln">
  module </span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    loaders </span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="pln">
      </span><span class="pun">{</span><span class="pln">
        test</span><span class="pun">:</span><span class="pln"> </span><span class="str">/\.jsx?$/</span><span class="pun">,</span><span class="pln">
        loader</span><span class="pun">:</span><span class="pln"> </span><span class="str">'babel-loader'</span><span class="pun">,</span><span class="pln">
        include</span><span class="pun">:</span><span class="pln"> APP_DIR</span><span class="pun">,</span><span class="pln">
        exclude</span><span class="pun">:</span><span class="pln"> </span><span class="str">/node_modules/</span><span class="pun">,</span><span class="pln">
        query</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            presets</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="str">'es2015'</span><span class="pun">]</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
      </span><span class="pun">},</span><span class="pln">
      </span><span class="pun">{</span><span class="pln">
        test</span><span class="pun">:</span><span class="pln"> </span><span class="str">/\.scss$/</span><span class="pun">,</span><span class="pln">
        loaders</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="pln"> </span><span class="str">'style'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'css'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'sass'</span><span class="pln"> </span><span class="pun">]</span><span class="pln">
      </span><span class="pun">},</span><span class="pln"> 
      </span><span class="pun">{</span><span class="pln">
        test</span><span class="pun">:</span><span class="pln"> </span><span class="str">/\.json$/</span><span class="pun">,</span><span class="pln"> 
        loader</span><span class="pun">:</span><span class="pln"> </span><span class="str">"json-loader"</span><span class="pln">
     </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">]</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">};</span><span class="pln">

module</span><span class="pun">.</span><span class="pln">exports </span><span class="pun">=</span><span class="pln"> config</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要做的就是在本地主机上运行我的应用程序，但是当我点击：“ </font></font><a href="http://localhost:8080/src/client/home" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：// localhost：8080 / src / client / home</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”（根据我的routes.jsx并在运行webpack-dev-server之后）</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span><span class="pln">

</span><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Route</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Router</span><span class="pun">,</span><span class="pln"> browserHistory </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react-router'</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="typ">ReactDOM</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react-dom'</span><span class="pun">;</span><span class="pln">

</span><span class="kwd">import</span><span class="pln"> </span><span class="typ">Wrapper</span><span class="pln">       </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'./../components/wrapper.jsx'</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="typ">Home</span><span class="pln">          </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'./../components/home.jsx'</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="typ">Projects</span><span class="pln">      </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'./../components/projects.jsx'</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="typ">SingleProject</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'./../components/projectContent/singleProject.jsx'</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="typ">About</span><span class="pln">         </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'./../components/aboutUs.jsx'</span><span class="pln">

</span><span class="typ">ReactDOM</span><span class="pun">.</span><span class="pln">render</span><span class="pun">((</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="typ">Router</span><span class="pln"> history</span><span class="pun">={</span><span class="pln">browserHistory</span><span class="pun">}</span><span class="pln"> </span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">&lt;</span><span class="typ">Route</span><span class="pln"> path</span><span class="pun">=</span><span class="str">"/"</span><span class="pln"> component</span><span class="pun">={</span><span class="typ">Wrapper</span><span class="pun">}</span><span class="pln"> </span><span class="pun">&gt;</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="typ">Route</span><span class="pln"> path</span><span class="pun">=</span><span class="str">"home"</span><span class="pln"> component</span><span class="pun">={</span><span class="typ">Home</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="typ">Route</span><span class="pln"> path</span><span class="pun">=</span><span class="str">"projects"</span><span class="pln"> component</span><span class="pun">={</span><span class="typ">Projects</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="typ">Route</span><span class="pln"> path</span><span class="pun">=</span><span class="str">"projects/:id"</span><span class="pln"> component</span><span class="pun">={</span><span class="typ">SingleProject</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="typ">Route</span><span class="pln"> path</span><span class="pun">=</span><span class="str">"about"</span><span class="pln"> component</span><span class="pun">={</span><span class="typ">About</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
        </span><span class="pun">&lt;/</span><span class="typ">Route</span><span class="pun">&gt;</span><span class="pln">
    </span><span class="pun">&lt;/</span><span class="typ">Router</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">),</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">'app'</span><span class="pun">));</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我懂了 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“无法获取/ src / client / home”。</font></font></p>
</blockquote></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4187篇《带有BrowserRouter / browserHistory的React-router在刷新时不起作用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要在webpack设置中添加它：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">devServer</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  historyApiFallback</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln">
</span><span class="pun">},</span><span class="pln"> </span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后像这样启动服务器：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">webpack</span><span class="pun">-</span><span class="pln">dev</span><span class="pun">-</span><span class="pln">server </span><span class="pun">--</span><span class="pln">config webpack</span><span class="pun">.</span><span class="pln">config</span><span class="pun">.</span><span class="pln">js</span></code></pre>

<p>Because you want React-Route to handle the route instead of your server. So no matter what the url is it should goes to index.html.</p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>

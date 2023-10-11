---
layout: question
title:  将自定义道具传递到react-router v4中的路由器组件
date:   2020-05-28T07:28:10.000Z
description: 我正在使用React Router创建一个多页面应用程序。我的主要组件是<App/>，它呈现了所有到子组件的路由。我正在尝试通过路线传递道具，根据我所做的...
img: 
author: MonsterKK
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用React Router创建一个多页面应用程序。</font><font style="vertical-align: inherit;">我的主要组件是</font></font><code>&lt;App/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它呈现了所有到子组件的路由。</font><font style="vertical-align: inherit;">我正在尝试通过路线传递道具，根据</font><font style="vertical-align: inherit;">我所做的</font><font style="vertical-align: inherit;">一些</font></font><a href="https://github.com/ReactTraining/react-router/issues/4105" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">研究</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，子组件利用最常见的方式来挖掘传递下来的道具是通过</font></font><code>this.props.route</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们继承</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">对象。</font><font style="vertical-align: inherit;">但是，这个对象对我来说是未定义的。</font><font style="vertical-align: inherit;">在</font></font><code>render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">子组件的函数上，我</font></font><code>console.log(this.props)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和我返回了一个看起来像这样的对象</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">{</span><span class="pln">match</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">,</span><span class="pln"> location</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">,</span><span class="pln"> history</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Object</span><span class="pun">,</span><span class="pln"> staticContext</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">undefined</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来根本不像我期望的道具。</font><font style="vertical-align: inherit;">这是我的详细代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">父组件（我试图在所有子组件中将“ hi”一词作为“ test”的道具传递下来）： </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">BrowserRouter</span><span class="pln"> as </span><span class="typ">Router</span><span class="pun">,</span><span class="pln"> </span><span class="typ">HashRouter</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Route</span><span class="pun">,</span><span class="pln"> </span><span class="typ">Switch</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react-router-dom'</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="typ">Link</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react-router'</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span><span class="pln">

</span><span class="kwd">import</span><span class="pln"> </span><span class="typ">Home</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'./Home.jsx'</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="typ">Nav</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'./Nav.jsx'</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="typ">Progress</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'./Progress.jsx'</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="typ">Test</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'./Test.jsx'</span><span class="pun">;</span><span class="pln">



</span><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">App</span><span class="pln"> extends </span><span class="typ">React</span><span class="pun">.</span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span><span class="pln">

  </span><span class="kwd">constructor</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    super</span><span class="pun">();</span><span class="pln">

    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">_fetchPuzzle </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">_fetchPuzzle</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">);</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">

  render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
      </span><span class="pun">&lt;</span><span class="typ">Router</span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">&lt;</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
          </span><span class="pun">&lt;</span><span class="typ">Nav</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
          </span><span class="pun">&lt;</span><span class="typ">Switch</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="typ">Route</span><span class="pln"> path</span><span class="pun">=</span><span class="str">"/"</span><span class="pln"> exact test</span><span class="pun">=</span><span class="str">"hi"</span><span class="pln"> component</span><span class="pun">={</span><span class="typ">Home</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="typ">Route</span><span class="pln"> path</span><span class="pun">=</span><span class="str">"/progress"</span><span class="pln"> test</span><span class="pun">=</span><span class="str">"hi"</span><span class="pln"> component</span><span class="pun">={</span><span class="typ">Progress</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">             
            </span><span class="pun">&lt;</span><span class="typ">Route</span><span class="pln"> path</span><span class="pun">=</span><span class="str">"/test"</span><span class="pln"> test</span><span class="pun">=</span><span class="str">"hi"</span><span class="pln"> component</span><span class="pun">={</span><span class="typ">Test</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="typ">Route</span><span class="pln"> render</span><span class="pun">={()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">&lt;</span><span class="pln">p</span><span class="pun">&gt;</span><span class="typ">Page</span><span class="pln"> not found</span><span class="pun">!&lt;</span><span class="str">/p&gt;} /</span><span class="pun">&gt;</span><span class="pln">
          </span><span class="pun">&lt;/</span><span class="typ">Switch</span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
      </span><span class="pun">&lt;/</span><span class="typ">Router</span><span class="pun">&gt;</span><span class="pln">
    </span><span class="pun">);</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">儿童：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">const</span><span class="pln"> </span><span class="typ">CodeMirror</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> require</span><span class="pun">(</span><span class="str">'react-codemirror'</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">import</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="typ">Link</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react-router-dom'</span><span class="pun">;</span><span class="pln">

require</span><span class="pun">(</span><span class="str">'codemirror/mode/javascript/javascript'</span><span class="pun">)</span><span class="pln">

require</span><span class="pun">(</span><span class="str">'codemirror/mode/xml/xml'</span><span class="pun">);</span><span class="pln">
require</span><span class="pun">(</span><span class="str">'codemirror/mode/markdown/markdown'</span><span class="pun">);</span><span class="pln">

</span><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">Home</span><span class="pln"> extends </span><span class="typ">React</span><span class="pun">.</span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span><span class="pln">

  </span><span class="kwd">constructor</span><span class="pun">(</span><span class="pln">props</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    super</span><span class="pun">(</span><span class="pln">props</span><span class="pun">);</span><span class="pln">

    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">props</span><span class="pun">)</span><span class="pln">

  </span><span class="pun">}</span><span class="pln">

  render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">const</span><span class="pln"> options </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      lineNumbers</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln">  
      theme</span><span class="pun">:</span><span class="pln"> </span><span class="str">'abcdef'</span><span class="pln">    
      </span><span class="com">// mode: this.state.mode</span><span class="pln">
    </span><span class="pun">};</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">)</span><span class="pln">

    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
      </span><span class="pun">&lt;</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">&lt;</span><span class="pln">h1</span><span class="pun">&gt;</span><span class="typ">First</span><span class="pln"> page bro</span><span class="pun">&lt;/</span><span class="pln">h1</span><span class="pun">&gt;</span><span class="pln">        
        </span><span class="pun">&lt;</span><span class="typ">CodeMirror</span><span class="pln"> value</span><span class="pun">=</span><span class="str">'code lol'</span><span class="pln"> onChange</span><span class="pun">={()=&gt;</span><span class="str">'do something'</span><span class="pun">}</span><span class="pln"> options</span><span class="pun">={</span><span class="pln">options</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
      </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;);</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对React很陌生，所以如果我遗漏了一些明显的东西，我深表歉意。</font><font style="vertical-align: inherit;">谢谢！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4230篇《将自定义道具传递到react-router v4中的路由器组件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过将</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prop </font><font style="vertical-align: inherit;">传递给组件来将</font><font style="vertical-align: inherit;">prop </font><font style="vertical-align: inherit;">传递给组件</font></font><code>Route</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，从而内联组件定义。</font><font style="vertical-align: inherit;">根据</font></font><strong><a href="https://reacttraining.com/react-router/web/api/Route/render-func" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOCS：</font></font></a></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样可以方便地进行内联渲染和包装，而无需进行上述不必要的重新安装。与其使用</font></font><code>component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prop </font><font style="vertical-align: inherit;">为您创建一个新的React元素</font><font style="vertical-align: inherit;">，还可以传入一个在</font></font><code>location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">匹配</font><font style="vertical-align: inherit;">时调用的函数</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">渲染道具接收与组件渲染道具相同的所有路线道具</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样您就可以将prop传递给组件</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln"> </span><span class="pun">&lt;</span><span class="typ">Route</span><span class="pln"> path</span><span class="pun">=</span><span class="str">"/"</span><span class="pln"> exact render</span><span class="pun">={(</span><span class="pln">props</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">(&lt;</span><span class="typ">Home</span><span class="pln"> test</span><span class="pun">=</span><span class="str">"hi"</span><span class="pln"> </span><span class="pun">{...</span><span class="pln">props</span><span class="pun">}/&gt;)}</span><span class="pln"> </span><span class="pun">/&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后您可以像访问它</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">test </span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在你的</font></font><code>Home</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件中</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还请确保您正在传递，</font></font><code>{...props}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样默认路由器道具</font></font><code>location, history, match etc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也将传递给</font></font><code>Home</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件，否则唯一</font><font style="vertical-align: inherit;">传递给</font><font style="vertical-align: inherit;">组件的道具就是</font></font><code>test</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote></div>
        </div></div>
    {% endraw %}
  </div>
<div>

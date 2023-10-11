---
layout: question
title:  未捕获的TypeError：无法读取未定义的属性“状态或道具”
date:   2020-05-28T06:44:18.000Z
description: 因此，我开始将应用程序从ES2015转换为使用React的ES6。我有一个家长班和一个孩子班，export default class Paren...
img: 
author: 猴子村村
category: question
answer: 2
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我开始将应用程序从ES2015转换为使用React的ES6。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个家长班和一个孩子班，</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">Parent</span><span class="pln"> extends </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">constructor</span><span class="pun">(</span><span class="pln">props</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        super</span><span class="pun">(</span><span class="pln">props</span><span class="pun">);</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            code</span><span class="pun">:</span><span class="pln"> </span><span class="str">''</span><span class="pln">
        </span><span class="pun">};</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    setCodeChange</span><span class="pun">(</span><span class="pln">newCode</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln">code</span><span class="pun">:</span><span class="pln"> newCode</span><span class="pun">});</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">


    login</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">code </span><span class="pun">==</span><span class="pln"> </span><span class="str">""</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            </span><span class="com">// Some functionality</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
                </span><span class="pun">&lt;</span><span class="typ">Child</span><span class="pln"> onCodeChange</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setCodeChange</span><span class="pun">}</span><span class="pln"> onLogin</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">login</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">儿童班</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">Child</span><span class="pln"> extends </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">constructor</span><span class="pun">(</span><span class="pln">props</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        super</span><span class="pun">(</span><span class="pln">props</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    handleCodeChange</span><span class="pun">(</span><span class="pln">e</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">onCodeChange</span><span class="pun">(</span><span class="pln">e</span><span class="pun">.</span><span class="pln">target</span><span class="pun">.</span><span class="pln">value</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    login</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">onLogin</span><span class="pun">();</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
                </span><span class="pun">&lt;</span><span class="pln">input name</span><span class="pun">=</span><span class="str">"code"</span><span class="pln"> onChange</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleCodeChange</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">)}/&gt;</span><span class="pln">
            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="pln">button id</span><span class="pun">=</span><span class="str">"login"</span><span class="pln"> onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">login</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">)}&gt;</span><span class="pln">
        </span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="typ">Child</span><span class="pun">.</span><span class="pln">propTypes </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    onCodeChange</span><span class="pun">:</span><span class="pln"> </span><span class="typ">React</span><span class="pun">.</span><span class="typ">PropTypes</span><span class="pun">.</span><span class="pln">func</span><span class="pun">,</span><span class="pln">
    onLogin</span><span class="pun">:</span><span class="pln"> </span><span class="typ">React</span><span class="pun">.</span><span class="typ">PropTypes</span><span class="pun">.</span><span class="pln">func
</span><span class="pun">};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这会导致以下错误，</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">this.state是未定义的</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它指的是，</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">code </span><span class="pun">==</span><span class="pln"> </span><span class="str">""</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="com">// Some functionality</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">知道是什么原因造成的吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4191篇《未捕获的TypeError：无法读取未定义的属性“状态或道具”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇神奇Near</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用箭头功能来绑定您的功能。</font><font style="vertical-align: inherit;">您需要在子组件和父组件中都绑定功能。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上级：</font></font></strong></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">Parent</span><span class="pln"> extends </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">constructor</span><span class="pun">(</span><span class="pln">props</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        super</span><span class="pun">(</span><span class="pln">props</span><span class="pun">);</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            code</span><span class="pun">:</span><span class="pln"> </span><span class="str">''</span><span class="pln">
        </span><span class="pun">};</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    setCodeChange </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">newCode</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln">code</span><span class="pun">:</span><span class="pln"> newCode</span><span class="pun">});</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">


    login </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">code </span><span class="pun">==</span><span class="pln"> </span><span class="str">""</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            </span><span class="com">// Some functionality</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
                </span><span class="pun">&lt;</span><span class="typ">Child</span><span class="pln"> onCodeChange</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setCodeChange</span><span class="pun">}</span><span class="pln"> onLogin</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">login</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span><span class="pln">
            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">儿童</font></font></strong></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">export</span><span class="pln"> </span><span class="kwd">default</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">Child</span><span class="pln"> extends </span><span class="typ">Component</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">constructor</span><span class="pun">(</span><span class="pln">props</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        super</span><span class="pun">(</span><span class="pln">props</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    handleCodeChange </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">e</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">onCodeChange</span><span class="pun">(</span><span class="pln">e</span><span class="pun">.</span><span class="pln">target</span><span class="pun">.</span><span class="pln">value</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    login </span><span class="pun">=</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">props</span><span class="pun">.</span><span class="pln">onLogin</span><span class="pun">();</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
                </span><span class="pun">&lt;</span><span class="pln">input name</span><span class="pun">=</span><span class="str">"code"</span><span class="pln"> onChange</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleCodeChange</span><span class="pun">}/&gt;</span><span class="pln">
            </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="pln">button id</span><span class="pun">=</span><span class="str">"login"</span><span class="pln"> onClick</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">login</span><span class="pun">}&gt;</span><span class="pln">
        </span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="typ">Child</span><span class="pun">.</span><span class="pln">propTypes </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    onCodeChange</span><span class="pun">:</span><span class="pln"> </span><span class="typ">React</span><span class="pun">.</span><span class="typ">PropTypes</span><span class="pun">.</span><span class="pln">func</span><span class="pun">,</span><span class="pln">
    onLogin</span><span class="pun">:</span><span class="pln"> </span><span class="typ">React</span><span class="pun">.</span><span class="typ">PropTypes</span><span class="pun">.</span><span class="pln">func
</span><span class="pun">};</span></code></pre>

<p>There are other ways to bind the functions as well such as the one you are using but you need to do that for parent component too as  <code>&lt;Child onCodeChange={this.setCodeChange.bind(this)} onLogin={this.login.bind(this)} /&gt;</code></p>

<p>or you can specify binding in the constructor as</p>

<p><strong>Parent:</strong> </p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">constructor</span><span class="pun">(</span><span class="pln">props</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    super</span><span class="pun">(</span><span class="pln">props</span><span class="pun">);</span><span class="pln">
    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        code</span><span class="pun">:</span><span class="pln"> </span><span class="str">''</span><span class="pln">
    </span><span class="pun">};</span><span class="pln">
 </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setCodeChange </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setCodeChange</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">);</span><span class="pln">
 </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">login </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">login</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><strong>Child</strong></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">constructor</span><span class="pun">(</span><span class="pln">props</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    super</span><span class="pun">(</span><span class="pln">props</span><span class="pun">);</span><span class="pln">
    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleCodeChange </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">handleCodeChange</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">);</span><span class="pln">
    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">login </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">login</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我同意@Shubham Kathri提供的所有不同解决方案，除了在render中直接绑定。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不建议您直接在render中绑定功能。</font><font style="vertical-align: inherit;">建议始终将其绑定到构造函数中，因为如果直接在render中绑定，则每当组件渲染时，Webpack都会在捆绑文件中创建一个新的函数/对象，因此Webpack捆绑文件的大小会增加。</font><font style="vertical-align: inherit;">由于许多原因，您的组件会重新渲染，例如：执行setState，但是如果将其放置在构造函数中，则只会调用一次。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不建议以下实现 </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="typ">Child</span><span class="pln"> onCodeChange</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setCodeChange</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">)}</span><span class="pln"> onLogin</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">login</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">)}</span><span class="pln"> </span><span class="pun">/&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">始终在构造函数中执行此操作，并在需要时使用ref</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">constructor</span><span class="pun">(</span><span class="pln">props</span><span class="pun">){</span><span class="pln">
  super</span><span class="pun">(</span><span class="pln">props</span><span class="pun">);</span><span class="pln">
  </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">login </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">login</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">);</span><span class="pln">
  </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setCodeChange </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setCodeChange</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="pun">&lt;</span><span class="typ">Child</span><span class="pln"> onCodeChange</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setCodeChange</span><span class="pun">}</span><span class="pln"> onLogin</span><span class="pun">={</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">login</span><span class="pun">}</span><span class="pln"> </span><span class="pun">/&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是ES6，则不需要手动绑定，但是如果需要的话。</font><font style="vertical-align: inherit;">如果您想避免与范围相关的问题和手动功能/对象绑定，可以使用箭头功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">抱歉，我的手机上有错别字</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>

---
layout: question
title:  如何从Angle的Observable / http / async调用返回响应？
date:   2020-05-25T06:10:51.000Z
description: 我有返回一个observable的服务，该服务向我的服务器发出一个http请求并获取数据。我想使用这些数据，但是我总是最终得到undefined。有什么问...
img: 
author: 猪猪
category: question
answer: 4
tags: JavaScript TypeScript
topic: TypeScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有返回一个observable的服务，该服务向我的服务器发出一个http请求并获取数据。</font><font style="vertical-align: inherit;">我想使用这些数据，但是我总是最终得到</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有什么问题？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务内容</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="lit">@Injectable</span><span class="pun">()</span><span class="pln">
</span><span class="kwd">export</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">EventService</span><span class="pln"> </span><span class="pun">{</span><span class="pln">

  </span><span class="kwd">constructor</span><span class="pun">(</span><span class="kwd">private</span><span class="pln"> http</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Http</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">}</span><span class="pln">

  getEventList</span><span class="pun">():</span><span class="pln"> </span><span class="typ">Observable</span><span class="pun">&lt;</span><span class="pln">any</span><span class="pun">&gt;{</span><span class="pln">
    </span><span class="kwd">let</span><span class="pln"> headers </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Headers</span><span class="pun">({</span><span class="pln"> </span><span class="str">'Content-Type'</span><span class="pun">:</span><span class="pln"> </span><span class="str">'application/json'</span><span class="pln"> </span><span class="pun">});</span><span class="pln">
    </span><span class="kwd">let</span><span class="pln"> options </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">RequestOptions</span><span class="pun">({</span><span class="pln"> headers</span><span class="pun">:</span><span class="pln"> headers </span><span class="pun">});</span><span class="pln">

    </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">http</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="str">"http://localhost:9999/events/get"</span><span class="pun">,</span><span class="pln"> options</span><span class="pun">)</span><span class="pln">
                </span><span class="pun">.</span><span class="pln">map</span><span class="pun">((</span><span class="pln">res</span><span class="pun">)=&gt;</span><span class="pln"> res</span><span class="pun">.</span><span class="pln">json</span><span class="pun">())</span><span class="pln">
                </span><span class="pun">.</span><span class="kwd">catch</span><span class="pun">((</span><span class="pln">err</span><span class="pun">)=&gt;</span><span class="pln"> err</span><span class="pun">)</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">零件：</font></font></strong></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="lit">@Component</span><span class="pun">({...})</span><span class="pln">
</span><span class="kwd">export</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">EventComponent</span><span class="pln"> </span><span class="pun">{</span><span class="pln">

  myEvents</span><span class="pun">:</span><span class="pln"> any</span><span class="pun">;</span><span class="pln">

  </span><span class="kwd">constructor</span><span class="pun">(</span><span class="pln"> </span><span class="kwd">private</span><span class="pln"> es</span><span class="pun">:</span><span class="pln"> </span><span class="typ">EventService</span><span class="pln"> </span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">}</span><span class="pln">

  ngOnInit</span><span class="pun">(){</span><span class="pln">
    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">es</span><span class="pun">.</span><span class="pln">getEventList</span><span class="pun">()</span><span class="pln">
        </span><span class="pun">.</span><span class="pln">subscribe</span><span class="pun">((</span><span class="pln">response</span><span class="pun">)=&gt;{</span><span class="pln">
            </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">myEvents </span><span class="pun">=</span><span class="pln"> response</span><span class="pun">;</span><span class="pln">
        </span><span class="pun">});</span><span class="pln">

    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">myEvents</span><span class="pun">);</span><span class="pln"> </span><span class="com">//This prints undefined!</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我检查了</font></font><a href="https://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何从异步调用返回响应？</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发布但找不到解决方案</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4166篇《如何从Angle的Observable / http / async调用返回响应？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果仅在模板中</font><font style="vertical-align: inherit;">使用</font></font><a href="https://angular.io/api/common/AsyncPipe" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">myEvents，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则可以使用asyncPype。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里使用asyncPype和Angular4 HttpClient的示例</font></font><a href="https://stackblitz.com/edit/angular-rhioqt?file=app%2Fevent.service.ts" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackblitz.com/edit/angular-rhioqt?file=app%2Fevent.service.ts</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里的问题是，您</font><font style="vertical-align: inherit;">刚好在</font><font style="vertical-align: inherit;">块外</font><font style="vertical-align: inherit;">执行操作时</font><font style="vertical-align: inherit;">，您正在初始化</font></font><code>this.myEvents</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>subscribe()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪个异步</font><font style="vertical-align: inherit;">块中。</font><font style="vertical-align: inherit;">因此</font><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">初始化</font><font style="vertical-align: inherit;">之前</font><font style="vertical-align: inherit;">被</font><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">。</font></font><code>console.log()</code><font style="vertical-align: inherit;"></font><code>subscribe()</code><font style="vertical-align: inherit;"></font><code>console.log()</code><font style="vertical-align: inherit;"></font><code>this.myEvents</code><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请同时将您的console.log（）代码移到subscribe（）内，然后完成。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">ngOnInit</span><span class="pun">(){</span><span class="pln">
    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">es</span><span class="pun">.</span><span class="pln">getEventList</span><span class="pun">()</span><span class="pln">
        </span><span class="pun">.</span><span class="pln">subscribe</span><span class="pun">((</span><span class="pln">response</span><span class="pun">)=&gt;{</span><span class="pln">
            </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">myEvents </span><span class="pun">=</span><span class="pln"> response</span><span class="pun">;</span><span class="pln">
            console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">myEvents</span><span class="pun">);</span><span class="pln">
        </span><span class="pun">});</span><span class="pln">
  </span><span class="pun">}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">柳叶风吹</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在angular / javascript中进行http调用是异步操作。</font><font style="vertical-align: inherit;">因此，当您进行http调用时，它将分配新线程来完成此调用，并从另一个线程的下一行开始执行。</font><font style="vertical-align: inherit;">这就是为什么您获得不确定的价值。</font><font style="vertical-align: inherit;">因此，请进行以下更改以解决此问题</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">this</span><span class="pun">.</span><span class="pln">es</span><span class="pun">.</span><span class="pln">getEventList</span><span class="pun">()</span><span class="pln">  
      </span><span class="pun">.</span><span class="pln">subscribe</span><span class="pun">((</span><span class="pln">response</span><span class="pun">)=&gt;{</span><span class="pln">  
       </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">myEvents </span><span class="pun">=</span><span class="pln"> response</span><span class="pun">;</span><span class="pln">  
        console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">myEvents</span><span class="pun">);</span><span class="pln"> </span><span class="com">//&lt;-this become synchronous now  </span><span class="pln">
    </span><span class="pun">});</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">鱼二水</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果不明确，因为角度过程异步。</font><font style="vertical-align: inherit;">您可以尝试如下：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">async</span><span class="pln"> ngOnInit</span><span class="pun">(){</span><span class="pln">
    </span><span class="kwd">const</span><span class="pln"> res </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">await</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">es</span><span class="pun">.</span><span class="pln">getEventList</span><span class="pun">();</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">res</span><span class="pun">));</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>

---
layout: question
title:  等效于Angular 2中的$ compile
date:   2020-05-25T06:13:49.000Z
description: 我想手动编译一些包含指令的HTML。$compileAngular 2中的等效项是什么？例如，在Angular 1中，我可以动态编译HTML片段并将其...
img: 
author: 番长樱梅
category: question
answer: 4
tags: 角度的 TypeScript
topic: TypeScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想手动编译一些包含指令的HTML。</font></font><code>$compile</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular 2中</font><font style="vertical-align: inherit;">的等效项是什么</font><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，在Angular 1中，我可以动态编译HTML片段并将其附加到DOM： </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> e </span><span class="pun">=</span><span class="pln"> angular</span><span class="pun">.</span><span class="pln">element</span><span class="pun">(</span><span class="str">'&lt;div directive&gt;&lt;/div&gt;'</span><span class="pun">);</span><span class="pln">
element</span><span class="pun">.</span><span class="pln">append</span><span class="pun">(</span><span class="pln">e</span><span class="pun">);</span><span class="pln">
$compile</span><span class="pun">(</span><span class="pln">e</span><span class="pun">)(</span><span class="pln">$scope</span><span class="pun">);</span></code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4169篇《等效于Angular 2中的$ compile》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要注入html代码，请使用指令</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">div </span><span class="pun">[</span><span class="pln">innerHtml</span><span class="pun">]=</span><span class="str">"htmlVar"</span><span class="pun">&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></pre>

<p>If you want to load whole component in some place, use DynamicComponentLoader:</p>

<p><a href="https://angular.io/docs/ts/latest/api/core/DynamicComponentLoader-class.html" rel="nofollow">https://angular.io/docs/ts/latest/api/core/DynamicComponentLoader-class.html</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这个问题已经很久了，但是我花了数周的时间试图弄清楚如何在启用AOT的情况下进行此工作。</font><font style="vertical-align: inherit;">我能够编译一个对象，但无法执行现有组件。</font><font style="vertical-align: inherit;">好吧，我最终决定更改策略，因为我不希望像执行自定义模板那样大量地编译代码。</font><font style="vertical-align: inherit;">我的想法是添加任何人都可以做并循环通过现有工厂的html。</font><font style="vertical-align: inherit;">这样，我可以搜索element / attribute / etc。</font><font style="vertical-align: inherit;">在该HTMLElement上命名并执行组件。</font><font style="vertical-align: inherit;">我能够使它工作，并认为我应该分享它，以节省我浪费在它上面的大量时间。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="lit">@Component</span><span class="pun">({</span><span class="pln">
    selector</span><span class="pun">:</span><span class="pln"> </span><span class="str">"compile"</span><span class="pun">,</span><span class="pln">
    template</span><span class="pun">:</span><span class="pln"> </span><span class="str">""</span><span class="pun">,</span><span class="pln">
    inputs</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="str">"html"</span><span class="pun">]</span><span class="pln">
</span><span class="pun">})</span><span class="pln">
</span><span class="kwd">export</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">CompileHtmlComponent</span><span class="pln"> </span><span class="kwd">implements</span><span class="pln"> </span><span class="typ">OnDestroy</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">constructor</span><span class="pun">(</span><span class="pln">
        </span><span class="kwd">private</span><span class="pln"> content</span><span class="pun">:</span><span class="pln"> </span><span class="typ">ViewContainerRef</span><span class="pun">,</span><span class="pln">
        </span><span class="kwd">private</span><span class="pln"> injector</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Injector</span><span class="pun">,</span><span class="pln">
        </span><span class="kwd">private</span><span class="pln"> ngModRef</span><span class="pun">:</span><span class="pln"> </span><span class="typ">NgModuleRef</span><span class="pun">&lt;</span><span class="pln">any</span><span class="pun">&gt;</span><span class="pln">
    </span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">}</span><span class="pln">

    ngOnDestroy</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="typ">DestroyComponents</span><span class="pun">();</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    </span><span class="kwd">private</span><span class="pln"> </span><span class="typ">_ComponentRefCollection</span><span class="pun">:</span><span class="pln"> any</span><span class="pun">[]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">null</span><span class="pun">;</span><span class="pln">
    </span><span class="kwd">private</span><span class="pln"> </span><span class="typ">_Html</span><span class="pun">:</span><span class="pln"> string</span><span class="pun">;</span><span class="pln">

    </span><span class="kwd">get</span><span class="pln"> </span><span class="typ">Html</span><span class="pun">():</span><span class="pln"> string </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="typ">_Html</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
    </span><span class="lit">@Input</span><span class="pun">(</span><span class="str">"html"</span><span class="pun">)</span><span class="pln"> </span><span class="kwd">set</span><span class="pln"> </span><span class="typ">Html</span><span class="pun">(</span><span class="pln">val</span><span class="pun">:</span><span class="pln"> string</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="com">// recompile when the html value is set</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="typ">_Html</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">val </span><span class="pun">||</span><span class="pln"> </span><span class="str">""</span><span class="pun">)</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="str">""</span><span class="pun">;</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="typ">TemplateHTMLCompile</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="typ">_Html</span><span class="pun">);</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    </span><span class="kwd">private</span><span class="pln"> </span><span class="typ">DestroyComponents</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="com">// we need to remove the components we compiled</span><span class="pln">
        </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="typ">_ComponentRefCollection</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            </span><span class="kwd">this</span><span class="pun">.</span><span class="typ">_ComponentRefCollection</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">((</span><span class="pln">c</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                c</span><span class="pun">.</span><span class="pln">destroy</span><span class="pun">();</span><span class="pln">
            </span><span class="pun">});</span><span class="pln">
        </span><span class="pun">}</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="typ">_ComponentRefCollection</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Array</span><span class="pun">();</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    </span><span class="kwd">private</span><span class="pln"> </span><span class="typ">TemplateHTMLCompile</span><span class="pun">(</span><span class="pln">html</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="typ">DestroyComponents</span><span class="pun">();</span><span class="pln">
        </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">content</span><span class="pun">.</span><span class="pln">element</span><span class="pun">.</span><span class="pln">nativeElement</span><span class="pun">.</span><span class="pln">innerHTML </span><span class="pun">=</span><span class="pln"> html</span><span class="pun">;</span><span class="pln">
        </span><span class="kwd">var</span><span class="pln"> ref </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">content</span><span class="pun">.</span><span class="pln">element</span><span class="pun">.</span><span class="pln">nativeElement</span><span class="pun">;</span><span class="pln">
        </span><span class="kwd">var</span><span class="pln"> factories </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">ngModRef</span><span class="pun">.</span><span class="pln">componentFactoryResolver as any</span><span class="pun">).</span><span class="pln">_factories</span><span class="pun">;</span><span class="pln">
        </span><span class="com">// here we loop though the factories, find the element based on the selector</span><span class="pln">
        factories</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">((</span><span class="pln">comp</span><span class="pun">:</span><span class="pln"> </span><span class="typ">ComponentFactory</span><span class="pun">&lt;</span><span class="pln">unknown</span><span class="pun">&gt;)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            </span><span class="kwd">var</span><span class="pln"> list </span><span class="pun">=</span><span class="pln"> ref</span><span class="pun">.</span><span class="pln">querySelectorAll</span><span class="pun">(</span><span class="pln">comp</span><span class="pun">.</span><span class="pln">selector</span><span class="pun">);</span><span class="pln">
            list</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">((</span><span class="pln">item</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                </span><span class="kwd">var</span><span class="pln"> parent </span><span class="pun">=</span><span class="pln"> item</span><span class="pun">.</span><span class="pln">parentNode</span><span class="pun">;</span><span class="pln">
                </span><span class="kwd">var</span><span class="pln"> next </span><span class="pun">=</span><span class="pln"> item</span><span class="pun">.</span><span class="pln">nextSibling</span><span class="pun">;</span><span class="pln">
                </span><span class="kwd">var</span><span class="pln"> ngContentNodes</span><span class="pun">:</span><span class="pln"> any</span><span class="pun">[][]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Array</span><span class="pun">();</span><span class="pln"> </span><span class="com">// this is for the viewchild/viewchildren of this object</span><span class="pln">

                comp</span><span class="pun">.</span><span class="pln">ngContentSelectors</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">((</span><span class="pln">sel</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                    </span><span class="kwd">var</span><span class="pln"> ngContentList</span><span class="pun">:</span><span class="pln"> any</span><span class="pun">[]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Array</span><span class="pun">();</span><span class="pln">

                    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">sel </span><span class="pun">==</span><span class="pln"> </span><span class="str">"*"</span><span class="pun">)</span><span class="pln"> </span><span class="com">// all children;</span><span class="pln">
                    </span><span class="pun">{</span><span class="pln">
                        item</span><span class="pun">.</span><span class="pln">childNodes</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">((</span><span class="pln">c</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                            ngContentList</span><span class="pun">.</span><span class="pln">push</span><span class="pun">(</span><span class="pln">c</span><span class="pun">);</span><span class="pln">
                        </span><span class="pun">});</span><span class="pln">
                    </span><span class="pun">}</span><span class="pln">
                    </span><span class="kwd">else</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                        </span><span class="kwd">var</span><span class="pln"> selList </span><span class="pun">=</span><span class="pln"> item</span><span class="pun">.</span><span class="pln">querySelectorAll</span><span class="pun">(</span><span class="pln">sel</span><span class="pun">);</span><span class="pln">

                        selList</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">((</span><span class="pln">l</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                            ngContentList</span><span class="pun">.</span><span class="pln">push</span><span class="pun">(</span><span class="pln">l</span><span class="pun">);</span><span class="pln">
                        </span><span class="pun">});</span><span class="pln">
                    </span><span class="pun">}</span><span class="pln">

                    ngContentNodes</span><span class="pun">.</span><span class="pln">push</span><span class="pun">(</span><span class="pln">ngContentList</span><span class="pun">);</span><span class="pln">
                </span><span class="pun">});</span><span class="pln">
                </span><span class="com">// here is where we compile the factory based on the node we have</span><span class="pln">
                </span><span class="kwd">let</span><span class="pln"> component </span><span class="pun">=</span><span class="pln"> comp</span><span class="pun">.</span><span class="pln">create</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">injector</span><span class="pun">,</span><span class="pln"> ngContentNodes</span><span class="pun">,</span><span class="pln"> item</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">ngModRef</span><span class="pun">);</span><span class="pln">

                </span><span class="kwd">this</span><span class="pun">.</span><span class="typ">_ComponentRefCollection</span><span class="pun">.</span><span class="pln">push</span><span class="pun">(</span><span class="pln">component</span><span class="pun">);</span><span class="pln"> </span><span class="com">// save for our destroy call</span><span class="pln">
                </span><span class="com">// we need to move the newly compiled element, as it was appended to this components html</span><span class="pln">
                </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">next</span><span class="pun">)</span><span class="pln"> parent</span><span class="pun">.</span><span class="pln">insertBefore</span><span class="pun">(</span><span class="pln">component</span><span class="pun">.</span><span class="pln">location</span><span class="pun">.</span><span class="pln">nativeElement</span><span class="pun">,</span><span class="pln"> next</span><span class="pun">);</span><span class="pln">
                </span><span class="kwd">else</span><span class="pln"> parent</span><span class="pun">.</span><span class="pln">appendChild</span><span class="pun">(</span><span class="pln">component</span><span class="pun">.</span><span class="pln">location</span><span class="pun">.</span><span class="pln">nativeElement</span><span class="pun">);</span><span class="pln">

                component</span><span class="pun">.</span><span class="pln">hostView</span><span class="pun">.</span><span class="pln">detectChanges</span><span class="pun">();</span><span class="pln"> </span><span class="com">// tell the component to detectchanges</span><span class="pln">
            </span><span class="pun">});</span><span class="pln">
        </span><span class="pun">});</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">三千曜米亚</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular TypeScript / ES6（Angular 2+）</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同时使用AOT + JIT。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在这里创建了如何使用它：</font><a href="https://github.com/patrikx3/angular-compile" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://github.com/patrikx3/angular-compile" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/patrikx3/angular-compile</font></font></a></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">npm install p3x</span><span class="pun">-</span><span class="pln">angular</span><span class="pun">-</span><span class="pln">compile</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件：应该具有上下文和一些html数据...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">div </span><span class="pun">[</span><span class="pln">p3x</span><span class="pun">-</span><span class="pln">compile</span><span class="pun">]=</span><span class="str">"data"</span><span class="pln"> </span><span class="pun">[</span><span class="pln">p3x</span><span class="pun">-</span><span class="pln">compile</span><span class="pun">-</span><span class="pln">context</span><span class="pun">]=</span><span class="str">"ctx"</span><span class="pun">&gt;</span><span class="pln">loading </span><span class="pun">...&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">别坑我</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以看到该组件，该组件允许编译简单的动态Angular组件</font></font><a href="https://www.npmjs.com/package/@codehint-ng/html-compiler" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/@codehint-ng/html-compiler</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>

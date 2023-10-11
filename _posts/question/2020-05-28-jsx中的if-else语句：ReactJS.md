---
layout: question
title:  jsx中的if-else语句：ReactJS
date:   2020-05-28T07:23:41.000Z
description: 当需要指定特定状态时，我需要更改渲染功能并运行一些子渲染功能， 例如：render() {    return (           <Vi...
img: 
author: 王者一打九
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当需要指定特定状态时，我需要更改渲染功能并运行一些子渲染功能， </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">   
        </span><span class="pun">&lt;</span><span class="typ">View</span><span class="pln"> style</span><span class="pun">={</span><span class="pln">styles</span><span class="pun">.</span><span class="pln">container</span><span class="pun">}&gt;</span><span class="pln">
            </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state </span><span class="pun">==</span><span class="pln"> </span><span class="str">'news'</span><span class="pun">){</span><span class="pln">
                </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="pln">
                    </span><span class="pun">&lt;</span><span class="typ">Text</span><span class="pun">&gt;</span><span class="pln">data</span><span class="pun">&lt;/</span><span class="typ">Text</span><span class="pun">&gt;</span><span class="pln">
                </span><span class="pun">)</span><span class="pln">
            </span><span class="pun">}</span><span class="pln">
        </span><span class="pun">&lt;/</span><span class="typ">View</span><span class="pun">&gt;</span><span class="pln">
    </span><span class="pun">)</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在不更改场景的情况下实现这一点，我将使用标签动态更改内容。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4229篇《jsx中的if-else语句：ReactJS》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢这样，而且效果很好。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">constructor</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
   super</span><span class="pun">();</span><span class="pln">

   </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state </span><span class="pun">={</span><span class="pln">
     status</span><span class="pun">:</span><span class="kwd">true</span><span class="pln">
   </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

render</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
   </span><span class="kwd">return</span><span class="pun">(</span><span class="pln"> 

     </span><span class="pun">{</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">status </span><span class="pun">===</span><span class="pln"> </span><span class="kwd">true</span><span class="pln"> </span><span class="pun">?</span><span class="pln">
           </span><span class="pun">&lt;</span><span class="typ">TouchableHighlight</span><span class="pln"> onPress</span><span class="pun">={()=&gt;</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">hideView</span><span class="pun">()}&gt;</span><span class="pln">
             </span><span class="pun">&lt;</span><span class="typ">View</span><span class="pln"> style</span><span class="pun">={</span><span class="pln">styles</span><span class="pun">.</span><span class="pln">optionView</span><span class="pun">}&gt;</span><span class="pln">
               </span><span class="pun">&lt;</span><span class="typ">Text</span><span class="pun">&gt;</span><span class="typ">Ok</span><span class="pln"> </span><span class="typ">Fine</span><span class="pln"> </span><span class="pun">:)&lt;/</span><span class="typ">Text</span><span class="pun">&gt;</span><span class="pln">
             </span><span class="pun">&lt;/</span><span class="typ">View</span><span class="pun">&gt;</span><span class="pln">
          </span><span class="pun">&lt;/</span><span class="typ">TouchableHighlight</span><span class="pun">&gt;</span><span class="pln">
           </span><span class="pun">:</span><span class="pln">
           </span><span class="pun">&lt;</span><span class="typ">Text</span><span class="pun">&gt;</span><span class="typ">Ok</span><span class="pln"> </span><span class="typ">Fine</span><span class="pun">.&lt;/</span><span class="typ">Text</span><span class="pun">&gt;</span><span class="pln">
     </span><span class="pun">}</span><span class="pln">
  </span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

hideView</span><span class="pun">(){</span><span class="pln">
  </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">setState</span><span class="pun">({</span><span class="pln">
    home</span><span class="pun">:!</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">state</span><span class="pun">.</span><span class="pln">status
  </span><span class="pun">});</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>

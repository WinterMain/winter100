---
layout: question
title:  如何在Vue Material中设置柔性网格
date:   2020-05-28T06:50:08.000Z
description: 我正在尝试构建一个使用Vue-Material的界面，以在网格中呈现用户输入的卡。卡正确渲染。但是，我希望我的网格以消除间隙的方式来弯​​曲，调整和交错不...
img: 
author: 柳叶风吹
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试构建一个使用Vue-Material的界面，以在网格中呈现用户输入的卡。</font><font style="vertical-align: inherit;">卡正确渲染。</font><font style="vertical-align: inherit;">但是，我希望我的网格以消除间隙的方式来弯​​曲，调整和交错不同尺寸的卡片，如下所示：</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/26849/images/thumbnails/1590648481092.jpg" data-src="https://www.samyoc.com//uploads/users/26849/images/1590648481092.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/Ou7Ec.jpg" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下代码与上面的网格相对应：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">&lt;</span><span class="pln">template</span><span class="pun">&gt;</span><span class="pln">
  </span><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"content"</span><span class="pun">&gt;</span><span class="pln">
    </span><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-layout"</span><span class="pun">&gt;</span><span class="pln">
      </span><span class="pun">&lt;</span><span class="pln">div
        v</span><span class="pun">-</span><span class="kwd">for</span><span class="pun">=</span><span class="str">"post in posts.slice().reverse()"</span><span class="pln"> </span><span class="pun">:</span><span class="pln">key</span><span class="pun">=</span><span class="str">"post.id"</span><span class="pln">
        </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-layout-item md-size-20 md-xsmall-size-100"</span><span class="pln">
      </span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">&lt;</span><span class="pln">md</span><span class="pun">-</span><span class="pln">card</span><span class="pun">&gt;</span><span class="pln">
          </span><span class="pun">&lt;</span><span class="pln">md</span><span class="pun">-</span><span class="pln">card</span><span class="pun">-</span><span class="pln">content v</span><span class="pun">-</span><span class="kwd">if</span><span class="pun">=</span><span class="str">"post.downloadUrl"</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="pln">md</span><span class="pun">-</span><span class="pln">card</span><span class="pun">-</span><span class="pln">media</span><span class="pun">&gt;</span><span class="pln">
              </span><span class="pun">&lt;</span><span class="pln">img </span><span class="pun">:</span><span class="pln">src</span><span class="pun">=</span><span class="str">"post.downloadUrl"</span><span class="pln"> style</span><span class="pun">=</span><span class="str">"width: 100%"</span><span class="pun">/&gt;</span><span class="pln">
            </span><span class="pun">&lt;/</span><span class="pln">md</span><span class="pun">-</span><span class="pln">card</span><span class="pun">-</span><span class="pln">media</span><span class="pun">&gt;&lt;</span><span class="pln">br</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="pln">p</span><span class="pun">&gt;{{</span><span class="pln"> post</span><span class="pun">.</span><span class="pln">content </span><span class="pun">}}&lt;/</span><span class="pln">p</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="pln">p</span><span class="pun">&gt;{{</span><span class="pln"> post</span><span class="pun">.</span><span class="pln">timestamp </span><span class="pun">|</span><span class="pln"> moment </span><span class="pun">}}&lt;/</span><span class="pln">p</span><span class="pun">&gt;</span><span class="pln">
          </span><span class="pun">&lt;/</span><span class="pln">md</span><span class="pun">-</span><span class="pln">card</span><span class="pun">-</span><span class="pln">content</span><span class="pun">&gt;</span><span class="pln">

          </span><span class="pun">&lt;</span><span class="pln">md</span><span class="pun">-</span><span class="pln">card</span><span class="pun">-</span><span class="pln">content v</span><span class="pun">-</span><span class="kwd">else</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="pln">p</span><span class="pun">&gt;{{</span><span class="pln"> post</span><span class="pun">.</span><span class="pln">content </span><span class="pun">}}&lt;/</span><span class="pln">p</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="pln">p</span><span class="pun">&gt;{{</span><span class="pln"> post</span><span class="pun">.</span><span class="pln">timestamp </span><span class="pun">|</span><span class="pln"> moment </span><span class="pun">}}&lt;/</span><span class="pln">p</span><span class="pun">&gt;</span><span class="pln">
          </span><span class="pun">&lt;/</span><span class="pln">md</span><span class="pun">-</span><span class="pln">card</span><span class="pun">-</span><span class="pln">content</span><span class="pun">&gt;</span><span class="pln">
          </span><span class="pun">&lt;</span><span class="pln">md</span><span class="pun">-</span><span class="pln">card</span><span class="pun">-</span><span class="pln">actions</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="pln">md</span><span class="pun">-</span><span class="pln">button </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-icon-button md-info"</span><span class="pun">&gt;</span><span class="pln">
              </span><span class="pun">&lt;</span><span class="pln">md</span><span class="pun">-</span><span class="pln">icon</span><span class="pun">&gt;</span><span class="pln">favorite</span><span class="pun">&lt;/</span><span class="pln">md</span><span class="pun">-</span><span class="pln">icon</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="pun">&lt;/</span><span class="pln">md</span><span class="pun">-</span><span class="pln">button</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="pun">&lt;</span><span class="pln">md</span><span class="pun">-</span><span class="pln">button </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-icon-button md-info"</span><span class="pun">&gt;</span><span class="pln">
              </span><span class="pun">&lt;</span><span class="pln">md</span><span class="pun">-</span><span class="pln">icon</span><span class="pun">&gt;</span><span class="pln">share</span><span class="pun">&lt;/</span><span class="pln">md</span><span class="pun">-</span><span class="pln">icon</span><span class="pun">&gt;</span><span class="pln">
            </span><span class="pun">&lt;/</span><span class="pln">md</span><span class="pun">-</span><span class="pln">button</span><span class="pun">&gt;</span><span class="pln">
          </span><span class="pun">&lt;/</span><span class="pln">md</span><span class="pun">-</span><span class="pln">card</span><span class="pun">-</span><span class="pln">actions</span><span class="pun">&gt;</span><span class="pln">
        </span><span class="pun">&lt;/</span><span class="pln">md</span><span class="pun">-</span><span class="pln">card</span><span class="pun">&gt;</span><span class="pln">
      </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
    </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
  </span><span class="pun">&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span><span class="pln">
</span><span class="pun">&lt;/</span><span class="pln">template</span><span class="pun">&gt;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何配置这种Vue-Material布局以消除这些间隙的方式排列卡片？</font><font style="vertical-align: inherit;">谢谢！</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/26849/images/thumbnails/1590648481104.jpg" data-src="https://www.samyoc.com//uploads/users/26849/images/1590648481104.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/m4NvW.jpg" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例子＃3</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/26849/images/thumbnails/1590648481106.jpg" data-src="https://www.samyoc.com//uploads/users/26849/images/1590648481106.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/zuJPY.jpg" alt="在此处输入图片说明"></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4193篇《如何在Vue Material中设置柔性网格》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>

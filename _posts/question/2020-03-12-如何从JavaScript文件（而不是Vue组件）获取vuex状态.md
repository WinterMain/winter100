---
layout: question
title:  如何从JavaScript文件（而不是Vue组件）获取vuex状态
date:   2020-03-12T12:23:28.000Z
description: 我正在使用vuex（2.1.1），并使之在vue单个文件组件中正常工作。但是，为了避免在vue单个文件组件中出现过多混乱，我将一些功能移到了utils.j...
img: 
author: Green小小古一
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用vuex（2.1.1），并使之在vue单个文件组件中正常工作。</font><font style="vertical-align: inherit;">但是，为了避免在vue单个文件组件中出现过多混乱，我将一些功能移到了</font></font><code>utils.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导入vue文件</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">模块中。</font><font style="vertical-align: inherit;">在此，</font></font><code>utils.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想阅读vuex状态。</font><font style="vertical-align: inherit;">我怎样才能做到这一点？</font><font style="vertical-align: inherit;">看起来用吸气剂等接近状态是在假设您是在vue组件中工作的，或者不是？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试</font></font><code>import state from '../store/modules/myvuexmodule'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后参考，</font></font><code>state.mystateproperty</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是它总是给出“ undefined”，而在vue-devtools中，我可以看到state属性确实具有正确的值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我现在的估计是，这根本不是“解决之道”，因为js文件中的state.property值不会是被动的，因此不会更新或发生其他事情，但是也许有人可以确认/证明我错了。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>

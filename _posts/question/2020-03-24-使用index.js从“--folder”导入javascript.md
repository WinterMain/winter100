---
layout: question
title:  使用index.js从“ / folder”导入javascript
date:   2020-03-24T03:13:54.000Z
description: 我注意到一些情况下，我看到以下内容：// /reducers/reducer1.jsexport default function reduce...
img: 
author: 阳光Stafan
category: question
answer: 0
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我注意到一些情况下，我看到以下内容：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>// /reducers/reducer1.js<font></font>
export default function reducer1(state = {}, action){<font></font>
  // etc...<font></font>
}<font></font>
  <font></font>
// /reducers/reducer2.js<font></font>
export default function reducer2(state = {}, action){<font></font>
  // etc...<font></font>
}<font></font>
<font></font>
// /reducers/index.js<font></font>
import { combineReducers } from 'redux';<font></font>
import reducer1 from './reducer1';<font></font>
import reducer2 from './reducer2';<font></font>
<font></font>
export default combineReducers({<font></font>
  reducer1,<font></font>
  reducer2<font></font>
})<font></font>
  <font></font>
// /store.js<font></font>
import masterReducer from './reducers';<font></font>
<font></font>
export default function makeStore(){<font></font>
  // etc...<font></font>
}</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意我们调用的最后一个“文件” </font></font><code>import masterReducer from './reducers'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-一些人似乎认为这应该</font></font><code>default export</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从index.js文件</font><font style="vertical-align: inherit;">导入</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这实际上是规范的一部分吗？</font><font style="vertical-align: inherit;">-我的解释/问题是，这是许多人使用WebPack v1将结果转换</font></font><code>import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为CommonJS样式的</font></font><code>requires</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句的结果吗？</font><font style="vertical-align: inherit;">还是在带有“官方” </font></font><code>import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>export</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持的</font><font style="vertical-align: inherit;">WebPack v2中打破</font><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3291篇《使用index.js从“ / folder”导入javascript》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>

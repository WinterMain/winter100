---
layout: question
title:  如何为React-Router设置Google Analytics（分析）？
date:   2020-03-16T04:13:41.000Z
description: 我正在尝试在我的React网站上设置Google Analytics（分析），并且遇到了一些程序包，但是其中没有一个程序包具有我在示例方面的设置。希望有人...
img: 
author: Mandy卡卡西
category: question
answer: 2
tags: React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在我的React网站上设置Google Analytics（分析），并且遇到了一些程序包，但是其中没有一个程序包具有我在示例方面的设置。</font><font style="vertical-align: inherit;">希望有人能对此有所启发。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在查看的软件包是</font></font><a href="https://www.npmjs.com/package/react-ga" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-ga</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的渲染方法</font></font><code>index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下所示。</font></font></p>

<pre><code>React.render((<font></font>
&lt;Router history={createBrowserHistory()}&gt;<font></font>
    &lt;Route path="/" component={App}&gt;<font></font>
        &lt;IndexRoute component={Home} onLeave={closeHeader}/&gt;<font></font>
        &lt;Route path="/about" component={About} onLeave={closeHeader}/&gt;<font></font>
        &lt;Route path="/gallery" component={Gallery} onLeave={closeHeader}/&gt;<font></font>
        &lt;Route path="/contact-us" component={Contact} onLeave={closeHeader}&gt;<font></font>
            &lt;Route path="/contact-us/:service" component={Contact} onLeave={closeHeader}/&gt;<font></font>
        &lt;/Route&gt;<font></font>
        &lt;Route path="/privacy-policy" component={PrivacyPolicy} onLeave={closeHeader} /&gt;<font></font>
        &lt;Route path="/feedback" component={Feedback} onLeave={closeHeader} /&gt;<font></font>
    &lt;/Route&gt;<font></font>
    &lt;Route path="*" component={NoMatch} onLeave={closeHeader}/&gt;<font></font>
&lt;/Router&gt;), document.getElementById('root'));<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1712篇《如何为React-Router设置Google Analytics（分析）？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁米亚小卤蛋</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了在某​​些事件（例如onClick等）上动态更新url，可以使用以下内容： </font></font></p>

<pre><code> //Imports<font></font>
 import ReactGA from "react-ga";<font></font>
 import { createBrowserHistory } from "history";<font></font>
<font></font>
 // Add following on some event, like onClick (depends on your requirement)<font></font>
 const history = createBrowserHistory();<font></font>
 ReactGA.initialize("&lt;Your-UA-ID-HERE&gt;");<font></font>
 ReactGA.pageview(history.location.pathname);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天米亚</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是通过一些解决方法跟踪所有路径的最简单方法：</font></font></p>

<p><code>npm i --save history react-ga</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个文件 </font></font><code>history.js</code></p>

<pre><code>import { createBrowserHistory } from "history"<font></font>
import ReactGA from "react-ga"<font></font>
<font></font>
ReactGA.initialize(process.env.REACT_APP_GA)<font></font>
<font></font>
const history = createBrowserHistory()<font></font>
history.listen((location) =&gt; {<font></font>
    ReactGA.pageview(location.pathname)<font></font>
})<font></font>
<font></font>
// workaround for initial visit<font></font>
if (window.performance &amp;&amp; (performance.navigation.type === performance.navigation.TYPE_NAVIGATE)) {<font></font>
    ReactGA.pageview("/")<font></font>
}<font></font>
<font></font>
export default history<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后将其导入到设置您的位置 </font></font><code>Router</code></p>

<pre><code>import history from "./history"<font></font>
<font></font>
...<font></font>
<font></font>
class Route extends Component {<font></font>
render() {<font></font>
    return (<font></font>
        &lt;Router history={history}&gt;<font></font>
            &lt;Switch&gt;<font></font>
              &lt;Route path="/" exact component={HomePage} /&gt;<font></font>
              ...<font></font>
            &lt;/Switch&gt;<font></font>
        &lt;/Router&gt;<font></font>
    )<font></font>
}<font></font>
<font></font>
export default Route<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考文献：</font></font></p>
  
  <p><a href="https://medium.com/alturasoluciones/how-to-set-up-and-use-google-analytics-in-react-apps-fb057d195d13" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">古斯塔沃·冈萨雷斯| </font><font style="vertical-align: inherit;">medium.com</font></font></a></p>
  
  <p><a href="https://github.com/ReactTraining/history" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">历史| </font><font style="vertical-align: inherit;">的GitHub</font></font></a></p>
</blockquote></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>

---
layout: question
title:  React Hooks错误：只能在函数组件的主体内部调用Hook
date:   2020-03-18T10:40:04.000Z
description: 使用useState挂钩时出现此错误。我有它的基本形式，正在看react docs作为参考，但是仍然出现此错误。我已经准备好面对手掌的时刻...exp...
img: 
author: Stafan神无
category: question
answer: 12
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>useState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">挂钩</font><font style="vertical-align: inherit;">时出现此错误</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我有它的基本形式，正在看</font></font><a href="https://reactjs.org/docs/hooks-reference.html#usestate" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react docs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为参考，但是仍然出现此错误。</font><font style="vertical-align: inherit;">我已经准备好面对手掌的时刻...</font></font></p>

<pre><code>export function Header() {<font></font>
  const [count, setCount] = useState(0)<font></font>
  return &lt;span&gt;header&lt;/span&gt;<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2162篇《React Hooks错误：只能在函数组件的主体内部调用Hook》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天伽罗宝儿</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于纱线工作区的其他用户，这是我的处境以及解决方法。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包装

</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">富

</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react@16.8.6</font></font></li>
</ul></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">酒吧

</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应@ 16.10.1</font></font></li>
</ul></li>
</ul></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于</font></font><a href="https://reactjs.org/warnings/invalid-hook-call-warning.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Invalid Hook Call Warning</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的Facebook文档对</font><font style="vertical-align: inherit;">纱线工作区一无所知，因此我认为我的配置正确。</font><font style="vertical-align: inherit;">但事实并非如此。</font><font style="vertical-align: inherit;">您只能通过在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有软件包中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用相同版本来解决错误</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上面的示例中，您必须将react的版本从“ foo”提高到16.10.1，以便它与“ bar”中的react版本匹配。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">奖励：</font></font><a href="https://github.com/facebook/react/issues/13991" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请在GitHub上查看此讨论，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取在互联网上分载的美丽情感包。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY逆天</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将package.json react-dom版本更新为react</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Stafan</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用Create React App，则还必须</font></font><code>"react-scripts"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用react和react-dom版本</font><font style="vertical-align: inherit;">更新</font><font style="vertical-align: inherit;">版本。</font></font></p>

<pre><code> "react-scripts": "2.1.5",<font></font>
 "react": "^16.8.1",<font></font>
 "react-dom": "^16.8.1",<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种组合效果很好。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里古一</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我而言，发生这种情况是因为我有一个新版本的react（16.8.6）和一个旧版本的react-dom（16.6.1）。</font></font></p>

<p><a href="https://reactjs.org/warnings/invalid-hook-call-warning.html#mismatching-versions-of-react-and-react-dom" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://reactjs.org/warnings/invalid-hook-call-warning.html#mismatching-versions-of-react-and-react-dom</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都升级到@latest（16.8.6）修复了该错误。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro阿飞Davaid</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用npm链接时遇到此问题，则可以使用另一种解决方案：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>npm link</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照以下说明在您的库中做出反应：</font><a href="https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或在您的库中将react设置为peerDependency，然后使用 </font></font><code>npm link --only=production</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaMandy</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题如下：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在做：
</font></font><code>ReactDOM.render(Example(), app);</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而我应该一直在做：
</font></font><code>ReactDOM.render(&lt;Example /&gt;, app);</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天小哥蛋蛋</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于使用MobX并使用包裹组件时遇到此问题的人员</font></font><code>observer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请确保使用</font></font><code>mobx-react-lite</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>mobx-react</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5月29日更新</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font><a href="https://github.com/mobxjs/mobx-react/blob/master/CHANGELOG.md#600" rel="nofollow noreferrer"><font style="vertical-align: inherit;">现在</font></a></font><code>mobx-react</code> <code>6.0.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开始，</font></font><a href="https://github.com/mobxjs/mobx-react/blob/master/CHANGELOG.md#600" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">mobx-react现在支持基于钩子的组件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此不再需要</font></font><code>mobx-react-lite</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用（如果那是您的问题）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomGreen</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>react-hot-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在该PR入站时</font><font style="vertical-align: inherit;">发现此替代方法</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在内包装调用钩子的函数，以</font></font><code>React.memo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">防止在未更改的情况下进行热重载。</font></font></p>

<p><code>const MyFunc = React.memo(({props}) =&gt; {...
</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案功劳：</font><a href="https://github.com/gatsbyjs/gatsby/issues/9489" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : 
 </font></font><a href="https://github.com/gatsbyjs/gatsby/issues/9489" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/gatsbyjs/gatsby/issues/9489</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村卡卡西</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在一个monorepo，其中包有一个问题</font></font><a href="https://github.com/pedronauck/docz" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">docz</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>react@16.6.3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及最终输出束有两个反应的版本。</font></font></p>

<p><a href="https://github.com/facebook/react/issues/14262" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Github上发行</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过移除包装进行固定it</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿村村</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在使用</font></font><a href="https://parceljs.org/hmr.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Parcel的Hot Module Replacement</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时遇到此错误</font><font style="vertical-align: inherit;">，并通过更新</font></font><code>react-dom</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为Alpha版本进行了</font><font style="vertical-align: inherit;">修复</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>yarn add react-dom@16.7.0-alpha.0
</code></pre>

<p><a href="https://github.com/facebook/react/issues/13972#issuecomment-433178133" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到这个问题。</font></font></a> </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥十三</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有同样的问题。</font><font style="vertical-align: inherit;">我的问题与React Router有关。</font><font style="vertical-align: inherit;">我不小心用了</font></font></p>

<pre><code>&lt;Route render={ComponentUsingHooks} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替 </font></font></p>

<pre><code>&lt;Route component={ComponentUsingHooks} /&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenJinJin</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是忘记更新</font></font><code>react-dom</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块。</font></font><a href="https://github.com/facebook/react/issues/13972#issuecomment-433178133" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">见问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

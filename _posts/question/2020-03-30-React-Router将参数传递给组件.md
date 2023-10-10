---
layout: question
title:  React Router将参数传递给组件
date:   2020-03-30T09:47:22.000Z
description: const rootEl = document.getElementById('root');ReactDOM.render(    <Browse...
img: 
author: 老丝阿飞
category: question
answer: 8
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><pre><code>const rootEl = document.getElementById('root');<font></font>
<font></font>
ReactDOM.render(<font></font>
    &lt;BrowserRouter&gt;<font></font>
        &lt;Switch&gt;<font></font>
            &lt;Route exact path="/"&gt;<font></font>
                &lt;MasterPage /&gt;<font></font>
            &lt;/Route&gt;<font></font>
            &lt;Route exact path="/details/:id" &gt;<font></font>
                &lt;DetailsPage /&gt;<font></font>
            &lt;/Route&gt;<font></font>
        &lt;/Switch&gt;<font></font>
    &lt;/BrowserRouter&gt;,<font></font>
    rootEl<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试访问</font><font style="vertical-align: inherit;">DetailsPage组件中</font><font style="vertical-align: inherit;">的</font></font><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ID</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但无法访问它。</font><font style="vertical-align: inherit;">我试过了</font></font></p>

<pre><code>&lt;DetailsPage foo={this.props}/&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将参数传递给DetailsPage，但徒劳。 </font></font></p>

<pre><code>export default class DetailsPage extends Component {<font></font>
    constructor(props) {<font></font>
        super(props);<font></font>
    }<font></font>
<font></font>
    render() {<font></font>
        return (<font></font>
            &lt;div className="page"&gt;<font></font>
            &lt;Header /&gt;<font></font>
            &lt;div id="mainContentContainer" &gt;<font></font>
<font></font>
            &lt;/div&gt;<font></font>
            &lt;/div&gt;<font></font>
    );<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以有什么想法如何将ID传递给DetailsPage吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3853篇《React Router将参数传递给组件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是类组件，则最有可能使用GSerjo建议。</font><font style="vertical-align: inherit;">通过</font></font><code>&lt;Route&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具</font><font style="vertical-align: inherit;">将参数传递</font><font style="vertical-align: inherit;">给目标组件：</font></font></p>

<pre><code>exact path="/problem/:problemId" render={props =&gt; &lt;ProblemPage {...props.match.params} /&gt;}
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个。</font></font></p>

<pre><code>&lt;Route exact path="/details/:id" render={(props)=&gt;{return(<font></font>
    &lt;DetailsPage id={props.match.params.id}/&gt;)<font></font>
}} /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在详细信息页面中尝试此...</font></font></p>

<pre><code>this.props.id
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端JinJin</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是 TypeScript版本。</font><font style="vertical-align: inherit;">工作于</font></font><code>"react-router-dom": "^4.3.1"</code></p>

<pre><code>export const AppRouter: React.StatelessComponent = () =&gt; {<font></font>
    return (<font></font>
        &lt;BrowserRouter&gt;<font></font>
            &lt;Switch&gt;<font></font>
                &lt;Route exact path="/problem/:problemId" render={props =&gt; &lt;ProblemPage {...props.match.params} /&gt;} /&gt;<font></font>
                &lt;Route path="/" exact component={App} /&gt;<font></font>
            &lt;/Switch&gt;<font></font>
        &lt;/BrowserRouter&gt;<font></font>
    );<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和组件</font></font></p>

<pre><code>export class ProblemPage extends React.Component&lt;ProblemRouteTokens&gt; {<font></font>
<font></font>
    public render(): JSX.Element {<font></font>
        return (&lt;div&gt;{this.props.problemId}&lt;/div&gt;);<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪里 </font></font><code>ProblemRouteTokens</code></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导出接口ProblemRouteTokens {issueId：string; </font><font style="vertical-align: inherit;">}</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了Alexander Lunas的答案以外，如果您想添加多个参数，请使用：</font></font></p>

<pre><code>&lt;Route path="/details/:id/:title" component={DetailsPage}/&gt;<font></font>
<font></font>
export default class DetailsPage extends Component {<font></font>
  render() {<font></font>
    return(<font></font>
      &lt;div&gt;<font></font>
        &lt;h2&gt;{this.props.match.params.id}&lt;/h2&gt;<font></font>
        &lt;h3&gt;{this.props.match.params.title}&lt;/h3&gt;<font></font>
      &lt;/div&gt;<font></font>
    )<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用渲染方法：</font></font></p>

<pre><code>&lt;Route exact path="/details/:id" render={(props)=&gt;{<font></font>
    &lt;DetailsPage id={props.match.params.id}/&gt;<font></font>
}} /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且您应该能够使用以下命令访问ID：</font></font></p>

<pre><code>this.props.id
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在DetailsPage组件内部</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要将props传递到路线内的组件，最简单的方法是利用</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如下所示：</font></font></p>

<pre><code>&lt;Route exact path="/details/:id" render={(props) =&gt; &lt;DetailsPage globalStore={globalStore} {...props} /&gt; } /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用以下内容访问道具</font></font><code>DetailPage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>this.props.match<font></font>
this.props.globalStore<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>{...props}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要通过原路线的道具，否则你将只能得到</font></font><code>this.props.globalStore</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内</font></font><code>DetailPage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearDavaid</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用组件：</font></font></p>

<pre><code>&lt;Route exact path="/details/:id" component={DetailsPage} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且您应该能够访问</font></font><code>id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用：</font></font></p>

<pre><code>this.props.match.params.id
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内部</font></font><code>DetailsPage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用它来访问组件中的ID：</font></font></p>

<pre><code>&lt;Route path="/details/:id" component={DetailsPage}/&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在详细信息组件中：</font></font></p>

<pre><code>export default class DetailsPage extends Component {<font></font>
  render() {<font></font>
    return(<font></font>
      &lt;div&gt;<font></font>
        &lt;h2&gt;{this.props.match.params.id}&lt;/h2&gt;<font></font>
      &lt;/div&gt;<font></font>
    )<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将在h2中呈现任何ID，希望对您有所帮助。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

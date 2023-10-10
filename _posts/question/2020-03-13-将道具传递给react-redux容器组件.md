---
layout: question
title:  将道具传递给react-redux容器组件
date:   2020-03-13T12:14:33.000Z
description: 我有一个在React Native Navigator组件中创建的react-redux容器组件。我希望能够将导航器作为道具传递给此容器组件，以便在其演示...
img: 
author: 小卤蛋村村
category: question
answer: 3
tags: reactjs- React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个在React Native Navigator组件中创建的react-redux容器组件。</font><font style="vertical-align: inherit;">我希望能够将导航器作为道具传递给此容器组件，以便在其演示组件中按下按钮之后，它可以将一个对象推入导航器堆栈。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想做到这一点而无需手写react-redux容器组件给我的所有样板代码（也不要错过react-redux在这里也会给我的所有优化）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">容器组件代码示例：</font></font></p>

<pre><code>const mapStateToProps = (state) =&gt; {<font></font>
    return {<font></font>
        prop1: state.prop1,<font></font>
        prop2: state.prop2<font></font>
    }<font></font>
}<font></font>
<font></font>
const mapDispatchToProps = (dispatch) =&gt; {<font></font>
    return {<font></font>
        onSearchPressed: (e) =&gt; {<font></font>
            dispatch(submitSearch(navigator)) // This is where I want to use the injected navigator<font></font>
        }<font></font>
    }<font></font>
}<font></font>
<font></font>
const SearchViewContainer = connect(<font></font>
    mapStateToProps,<font></font>
    mapDispatchToProps<font></font>
)(SearchView)<font></font>
<font></font>
export default SearchViewContainer<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望能够从我的导航器</font></font><code>renderScene</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数中</font><font style="vertical-align: inherit;">调用这样的组件</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;SearchViewContainer navigator={navigator}/&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上面的容器代码中，我需要能够从</font></font><code>mapDispatchToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数</font><font style="vertical-align: inherit;">内部访问此传递的prop </font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不想将导航器存储在redux状态对象上，也不想将prop传递给表示组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么方法可以将prop传递给此容器组件吗？</font><font style="vertical-align: inherit;">另外，我还有其他替代方法吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1532篇《将道具传递给react-redux容器组件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin西门</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>mapStateToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>mapDispatchToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者取</font></font><code>ownProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为第二个参数。</font></font><br></p>

<pre><code>[mapStateToProps(state, [ownProps]): stateProps] (Function):<font></font>
[mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function):<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">供</font></font><a href="https://github.com/reduxjs/react-redux/blob/master/docs/api/connect.md#mapstatetoprops-state-ownprops--object" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Pro</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以传递第二个参数，通过该参数，</font></font><code>mapStateToProps(state, ownProps)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以访问在mapStateToProps中传递给组件的道具</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry小哥</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用 TypeScript进行此操作时有一些陷阱，所以这里有个例子。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个陷阱是，当您仅使用dispatchToProps时（不映射任何状态道具），重要的是不要忽略状态参数（可以用下划线前缀命名）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个陷阱是必须使用仅包含传递的道具的接口来键入ownProps参数-这可以通过将props接口分成两个接口来实现，例如</font></font></p>

<pre><code>interface MyComponentOwnProps {<font></font>
  value: number;<font></font>
}<font></font>
<font></font>
interface MyComponentConnectedProps {<font></font>
  someAction: (x: number) =&gt; void;<font></font>
}<font></font>
<font></font>
export class MyComponent extends React.Component&lt;<font></font>
  MyComponentOwnProps &amp; MyComponentConnectedProps<font></font>
&gt; {<font></font>
....//  component logic<font></font>
}<font></font>
<font></font>
const mapStateToProps = (<font></font>
  _state: AppState,<font></font>
  ownProps: MyComponentOwnProps,<font></font>
) =&gt; ({<font></font>
  value: ownProps.value,<font></font>
});<font></font>
<font></font>
const mapDispatchToProps = {<font></font>
  someAction,<font></font>
};<font></font>
<font></font>
export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以通过传递单个参数来声明该组件：</font></font></p>

<pre><code>&lt;MyComponent value={event} /&gt;
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

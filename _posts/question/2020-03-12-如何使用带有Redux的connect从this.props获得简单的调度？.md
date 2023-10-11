---
layout: question
title:  如何使用带有Redux的connect从this.props获得简单的调度？
date:   2020-03-12T07:19:42.000Z
description: 我有一个连接的简单React组件（映射了一个简单的数组/状态）。为了避免引用商店的上下文，我想要一种直接从道具中获取“发货”的方法。我见过其他人正在使用这...
img: 
author: Near猪猪
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个连接的简单React组件（映射了一个简单的数组/状态）。</font><font style="vertical-align: inherit;">为了避免引用商店的上下文，我想要一种直接从道具中获取“发货”的方法。</font><font style="vertical-align: inherit;">我见过其他人正在使用这种方法，但是由于某些原因无法使用它：)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我当前正在使用的每个npm依赖项的版本</font></font></p>

<pre><code>"react": "0.14.3",<font></font>
"react-redux": "^4.0.0",<font></font>
"react-router": "1.0.1",<font></font>
"redux": "^3.0.4",<font></font>
"redux-thunk": "^1.0.2"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是带有连接方法的组件</font></font></p>

<pre><code>class Users extends React.Component {<font></font>
    render() {<font></font>
        const { people } = this.props;<font></font>
        return (<font></font>
            &lt;div&gt;<font></font>
                &lt;div&gt;{this.props.children}&lt;/div&gt;<font></font>
                &lt;button onClick={() =&gt; { this.props.dispatch({type: ActionTypes.ADD_USER, id: 4}); }}&gt;Add User&lt;/button&gt;<font></font>
            &lt;/div&gt;<font></font>
        );<font></font>
    }<font></font>
};<font></font>
<font></font>
function mapStateToProps(state) {<font></font>
    return { people: state.people };<font></font>
}<font></font>
<font></font>
export default connect(mapStateToProps, {<font></font>
    fetchUsers<font></font>
})(Users);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要查看减速器（没什么令人兴奋的，但是这里）</font></font></p>

<pre><code>const initialState = {<font></font>
    people: []<font></font>
};<font></font>
<font></font>
export default function(state=initialState, action) {<font></font>
    if (action.type === ActionTypes.ADD_USER) {<font></font>
        let newPeople = state.people.concat([{id: action.id, name: 'wat'}]);<font></font>
        return {people: newPeople};<font></font>
    }<font></font>
    return state;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要查看如何使用Redux配置路由器</font></font></p>

<pre><code>const createStoreWithMiddleware = applyMiddleware(<font></font>
      thunk<font></font>
)(createStore);<font></font>
<font></font>
const store = createStoreWithMiddleware(reducers);<font></font>
<font></font>
var Route = (<font></font>
  &lt;Provider store={store}&gt;<font></font>
    &lt;Router history={createBrowserHistory()}&gt;<font></font>
      {Routes}<font></font>
    &lt;/Router&gt;<font></font>
  &lt;/Provider&gt;<font></font>
);<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来如果我在连接中省略了自己的调度（当前上面显示了fetchUsers），我将获得免费调度（只是不确定这是否带有异步操作的设置通常可以正常工作）。</font><font style="vertical-align: inherit;">人们会混合搭配还是全部还是一无所有？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[mapDispatchToProps]</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1046篇《如何使用带有Redux的connect从this.props获得简单的调度？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenSam</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然您可能</font></font><code>dispatch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">成为的一部分</font></font><code>dispatchToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但我建议您避免</font><font style="vertical-align: inherit;">在组件内部</font><font style="vertical-align: inherit;">访问</font></font><code>store</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>dispatch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直接</font><font style="vertical-align: inherit;">访问</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">似乎最好在connect的第二个参数中传入绑定动作创建者来为您服务</font></font><code>dispatchToProps</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅我在此处</font></font><a href="https://stackoverflow.com/a/34455431/2644281"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/34455431/2644281</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发布的示例，该示例</font><font style="vertical-align: inherit;">说明如何传递“已经绑定的动作创建者”，这样您的组件就无需直接了解或依赖商店/发货。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">抱歉，简短。</font><font style="vertical-align: inherit;">我将更新瓦特/更多信息。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，您可以根据自己的喜好混合搭配。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font></font><code>dispatch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在作为道具，如果这是你想要什么：</font></font></p>

<pre><code>export default connect(mapStateToProps, (dispatch) =&gt; ({<font></font>
    ...bindActionCreators({fetchUsers}, dispatch), dispatch<font></font>
}))(Users);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道如何</font></font><code>fetchUsers</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用（如异步功能？），但你通常会使用类似</font></font><code>bindActionCreators</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自动绑定</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调度，然后你就不必担心使用</font></font><code>dispatch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直接连接的部件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>dispatch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录排序将</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哑巴</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，无状态组件与redux </font><font style="vertical-align: inherit;">耦合</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这会使它的便携性降低。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>

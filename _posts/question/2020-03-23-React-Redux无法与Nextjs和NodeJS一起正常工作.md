---
layout: question
title:  React Redux无法与Next.js和NodeJS一起正常工作
date:   2020-03-23T14:05:43.000Z
description: 通过遵循此示例，我正在使用带有Redux的Next.js的应用程序，这是其中的一部分store.js// REDUCERSconst authRed...
img: 
author: 小胖
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过遵循</font></font><a href="https://github.com/zeit/next.js/tree/canary/examples/with-redux" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">我正在使用带有Redux的Next.js的应用程序</font><font style="vertical-align: inherit;">，这是其中的一部分</font></font><code>store.js</code></p>

<pre><code>// REDUCERS<font></font>
const authReducer = (state = null, action) =&gt; {<font></font>
    switch (action.type){<font></font>
        case actionTypes.FETCH_USER:<font></font>
            return action.payload || false;<font></font>
        default:<font></font>
            return state;<font></font>
    }<font></font>
}<font></font>
<font></font>
export const rootReducer = combineReducers({<font></font>
    user: authReducer,<font></font>
    form: reduxForm,<font></font>
});<font></font>
<font></font>
// ACTIONS<font></font>
export const fetchUser = () =&gt; {<font></font>
    return (dispatch) =&gt; {<font></font>
        axios.get('/api/current_user')<font></font>
            .then(res =&gt; dispatch({<font></font>
                type: actionTypes.FETCH_USER, <font></font>
                payload: res.data<font></font>
            }));<font></font>
    };<font></font>
};<font></font>
<font></font>
export const submitLogin = (values) =&gt; async dispacth =&gt; {<font></font>
    const res = await axios.post('/api/login', values);<font></font>
<font></font>
    // Router.push('/');<font></font>
    // console.log(res)<font></font>
<font></font>
    dispacth({ type: actionTypes.SUBMIT_LOGIN, payload: res.data });<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和客户端，例如 </font></font><code>header</code></p>

<pre><code>function mapStateToProps (state) {<font></font>
    const { user } = state<font></font>
    return { user }<font></font>
}<font></font>
<font></font>
export default connect(mapStateToProps)(Header)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我</font></font><code>console.log('############=&gt;', this.props.user);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的道具和我没有登录时，它显示为空，但显示一些额外的数据，例如下面的屏幕截图</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/24019/images/thumbnails/1584972215978.png" data-src="https://www.samyoc.com//uploads/users/24019/images/1584972215978.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/QTC4M.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是当我登录并</font></font><code>console.log('############=&gt;', this.props.user);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示正确的数据时，没有额外的数据，例如下图</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/24019/images/thumbnails/1584972215980.png" data-src="https://www.samyoc.com//uploads/users/24019/images/1584972215980.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/sCgkV.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我做错了什么？</font><font style="vertical-align: inherit;">请帮我。</font><font style="vertical-align: inherit;">谢谢</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3124篇《React Redux无法与Next.js和NodeJS一起正常工作》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>

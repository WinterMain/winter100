---
layout: question
title:  如何访问Redux Reducer内部的状态？
date:   2020-03-14T10:19:33.000Z
description: 我有一个化简器，为了计算新状态，我需要操作中的数据以及该化简器未管理的部分状态数据。具体来说，在下面将显示的reducer中，我需要访问该accountD...
img: 
author: L神无Mandy
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个化简器，为了计算新状态，我需要操作中的数据以及该化简器未管理的部分状态数据。</font><font style="vertical-align: inherit;">具体来说，在下面将显示的reducer中，我需要访问该</font></font><code>accountDetails.stateOfResidenceId</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字段。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">initialState.js：</font></font></strong></p>

<pre><code>export default {<font></font>
    accountDetails: {<font></font>
        stateOfResidenceId: '',<font></font>
        accountType: '',<font></font>
        accountNumber: '',<font></font>
        product: ''<font></font>
    },<font></font>
    forms: {<font></font>
        blueprints: [<font></font>
<font></font>
        ]<font></font>
    }<font></font>
};<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FormsReducer.js：</font></font></strong></p>

<pre><code>import * as types from '../constants/actionTypes';<font></font>
import objectAssign from 'object-assign';<font></font>
import initialState from './initialState';<font></font>
import formsHelper from '../utils/FormsHelper';<font></font>
export default function formsReducer(state = initialState.forms, action) {<font></font>
  switch (action.type) {<font></font>
    case types.UPDATE_PRODUCT: {<font></font>
        //I NEED accountDetails.stateOfResidenceId HERE<font></font>
        console.log(state);<font></font>
        const formBlueprints = formsHelper.getFormsByProductId(action.product.id);<font></font>
        return objectAssign({}, state, {blueprints: formBlueprints});<font></font>
    }<font></font>
<font></font>
    default:<font></font>
      return state;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">index.js（根减速器）：</font></font></strong></p>

<pre><code>import { combineReducers } from 'redux';<font></font>
import accountDetails from './accountDetailsReducer';<font></font>
import forms from './formsReducer';<font></font>
<font></font>
const rootReducer = combineReducers({<font></font>
    accountDetails,<font></font>
    forms<font></font>
});<font></font>
<font></font>
export default rootReducer;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何访问此字段？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1607篇《如何访问Redux Reducer内部的状态？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德理查德</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在分派动作时，您可以传递参数。</font><font style="vertical-align: inherit;">在这种情况下，您可以传递</font></font><code>accountDetails.stateOfResidenceId</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给操作，然后将其作为有效负载传递给reducer。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Tom小宇宙</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以尝试使用：</font></font></p>

<p><a href="https://github.com/mileschristian/redux-named-reducers" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">名为redux的减速器</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样您就可以在代码中的任何地方获取状态，如下所示：</font></font></p>

<pre><code>const localState1 = getState(reducerA.state1)<font></font>
const localState2 = getState(reducerB.state2)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是首先考虑是否最好将外部状态作为有效负载传递给操作。   </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">杨天栾</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的选择是要么仅使用编写更多逻辑</font></font><code>combineReducers</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，要么在操作中包含更多数据。</font><font style="vertical-align: inherit;">Redux常见问题解答涵盖了以下主题：</font></font><a href="http://redux.js.org/docs/faq/Reducers.html#reducers-share-state" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="http://redux.js.org/docs/faq/Reducers.html#reducers-share-state" rel="noreferrer"><font style="vertical-align: inherit;">//redux.js.org/docs/faq/Reducers.html#reducers-share-state</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，我目前正在针对Redux docs主题为“结构化减速器”的一组新页面进行工作，您可能会有所帮助。</font><font style="vertical-align: inherit;">当前的WIP页面位于</font></font><a href="https://github.com/markerikson/redux/blob/structuring-reducers-page/docs/recipes/StructuringReducers.md" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/markerikson/redux/blob/structuring-reducers-page/docs/recipes/StructuringReducers.md</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯理查德</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将为此使用</font></font><a href="https://github.com/gaearon/redux-thunk" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">thunk</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是一个示例：</font></font></p>

<pre><code>export function updateProduct(product) {<font></font>
  return (dispatch, getState) =&gt; {<font></font>
    const { accountDetails } = getState();<font></font>
<font></font>
    dispatch({<font></font>
      type: UPDATE_PRODUCT,<font></font>
      stateOfResidenceId: accountDetails.stateOfResidenceId,<font></font>
      product,<font></font>
    });<font></font>
  };<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，您可以获得操作所需的所有数据，然后可以将该数据发送到减速器。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋伽罗猿</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议您将其传递给动作创建者。</font><font style="vertical-align: inherit;">因此，在某个地方，您将有一个动作创建者来执行以下操作：</font></font></p>

<pre><code>updateProduct(arg1, arg2, stateOfResidenceId) {<font></font>
  return {<font></font>
    type: UPDATE_PRODUCT,<font></font>
    stateOfResidenceId<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您触发动作的地方，假设您正在使用反应，则可以使用 </font></font></p>

<pre><code>function mapStateToProps(state, ownProps) {<font></font>
  return {<font></font>
    stateOfResidenceId: state.accountdetails.stateOfResidenceId<font></font>
  }  <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使用react-redux的connect连接到您的react组件。 </font></font></p>

<pre><code>connect(mapStateToProps)(YourReactComponent);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，在您触发动作updateProduct的react组件中，您应该将stateOfResidenceId作为道具，然后可以将其传递给动作创建者。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这听起来有些令人费解，但实际上是有关关注点分离的问题。 </font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

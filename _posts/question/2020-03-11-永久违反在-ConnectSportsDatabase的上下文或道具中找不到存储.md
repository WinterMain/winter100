---
layout: question
title:  永久违反：在“ Connect（SportsDatabase）”的上下文或道具中找不到“存储”
date:   2020-03-11T09:50:44.000Z
description: 完整代码在这里：https   //gist.github.com/js08/0ec3d70dfda76d7e9fb4你好我有一个应用程序，其中...
img: 
author: 卡卡西路易前端
category: question
answer: 7
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完整代码在这里：</font><a href="https://gist.github.com/js08/0ec3d70dfda76d7e9fb4" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://gist.github.com/js08/0ec3d70dfda76d7e9fb4" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//gist.github.com/js08/0ec3d70dfda76d7e9fb4</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你好</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个应用程序，其中根据构建环境显示了针对台式机和移动设备的不同模板。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以在需要隐藏移动模板的导航菜单的地方成功开发它。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我能够编写一个测试用例，其中它通过原型获取所有值并正确呈现</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但不确定如何在移动设备上编写单元测试用例时，不应呈现导航组件。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试过，但是遇到错误...您能告诉我如何解决它。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供下面的代码。</font></font></li>
</ul>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试用例</font></font></h1>

<pre class="lang-js prettyprint-override"><code>import {expect} from 'chai';<font></font>
import React from 'react';<font></font>
import TestUtils from 'react-addons-test-utils';<font></font>
import {SportsTopPortion} from '../../../src/components/sports-top-portion/sports-top-portion.jsx';<font></font>
require('../../test-utils/dom');<font></font>
<font></font>
<font></font>
describe('"sports-top-portion" Unit Tests', function() {<font></font>
    let shallowRenderer = TestUtils.createRenderer();<font></font>
<font></font>
    let sportsContentContainerLayout ='mobile';<font></font>
    let sportsContentContainerProfile = {'exists': 'hasSidebar'};<font></font>
    let sportsContentContainerAuthExchange = {hasValidAccessToken: true};<font></font>
    let sportsContentContainerHasValidAccessToken ='test'; <font></font>
<font></font>
    it('should render correctly', () =&gt; {<font></font>
        shallowRenderer.render(&lt;SportsTopPortion sportsWholeFramework={sportsContentContainerLayout} sportsPlayers={sportsContentContainerProfile} sportsAuthentication={sportsContentContainerAuthExchange} sportsUpperBar={{activeSportsLink:'test'}} /&gt;);<font></font>
        //shallowRenderer.render(&lt;SportsTopPortion sportsWholeFramework={sportsContentContainerLayout} sportsPlayers={sportsContentContainerProfile} hasValidAccessToken={sportsContentContainerHasValidAccessToken}  /&gt;);<font></font>
<font></font>
        let renderedElement = shallowRenderer.getRenderOutput();<font></font>
        console.log("renderedElement-------&gt;" + JSON.stringify(renderedElement));<font></font>
<font></font>
        expect(renderedElement).to.exist;<font></font>
    });<font></font>
<font></font>
    it('should not render sportsNavigationComponent when sports.build is mobile', () =&gt; {<font></font>
        let sportsNavigationComponent = TestUtils.renderIntoDocument(&lt;SportsTopPortion sportsWholeFramework={sportsContentContainerLayout} sportsPlayers={sportsContentContainerProfile} sportsAuthentication={sportsContentContainerAuthExchange} sportsUpperBar={{activeSportsLink:'test'}} /&gt;);<font></font>
        console.log("sportsNavigationComponent-------&gt;" + JSON.stringify(sportsNavigationComponent));<font></font>
<font></font>
        //let footnoteContainer = TestUtils.findRenderedDOMComponentWithClass(sportsNavigationComponent, 'linkPack--standard');<font></font>
<font></font>
        //expect(footnoteContainer).to.exist;<font></font>
    });<font></font>
<font></font>
});<font></font>
</code></pre>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要编写测试用例的代码片段</font></font></h1>

<pre class="lang-js prettyprint-override"><code>if (sports.build === 'mobile') {<font></font>
    sportsNavigationComponent = &lt;div /&gt;;<font></font>
    sportsSideMEnu = &lt;div /&gt;;<font></font>
    searchComponent = &lt;div /&gt;;<font></font>
    sportsPlayersWidget = &lt;div /&gt;;<font></font>
}<font></font>
</code></pre>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误</font></font></h1>

<pre class="lang-js prettyprint-override"><code>1) "sports-top-portion" Unit Tests should not render sportsNavigationComponent when sports.build is mobile:<font></font>
     Invariant Violation: Could not find "store" in either the context or props of "Connect(SportsDatabase)". Either wrap the root component in a &lt;Provider&gt;, or explicitly pass "store" as a prop to "Connect(SportsDatabase)".<font></font>
      at Object.invariant [as default] (C:\sports-whole-page\node_modules\invariant\invariant.js:42:15)<font></font>
      at new Connect (C:\sports-whole-page\node_modules\react-redux\lib\components\createConnect.js:135:33)<font></font>
      at [object Object].ReactCompositeComponentMixin.mountComponent (C:\sports-whole-page\node_modules\react\lib\ReactCompositeComponent.js:148:18)<font></font>
      at [object Object].wrapper [as mountComponent] (C:\sports-whole-page\node_modules\react\lib\ReactPerf.js:66:21)<font></font>
      at Object.ReactReconciler.mountComponent (C:\sports-whole-page\node_modules\react\lib\ReactReconciler.js:37:35)<font></font>
      at ReactDOMComponent.ReactMultiChild.Mixin.mountChildren (C:\sports-whole-page\node_modules\react\lib\ReactMultiChild.js:241:44)<font></font>
      at ReactDOMComponent.Mixin._createContentMarkup (C:\sports-whole-page\node_modules\react\lib\ReactDOMComponent.js:591:32)<font></font>
      at ReactDOMComponent.Mixin.mountComponent (C:\sports-whole-page\node_modules\react\lib\ReactDOMComponent.js:479:29)<font></font>
      at Object.ReactReconciler.mountComponent (C:\sports-whole-page\node_modules\react\lib\ReactReconciler.js:37:35)<font></font>
      at ReactDOMComponent.ReactMultiChild.Mixin.mountChildren (C:\sports-whole-page\node_modules\react\lib\ReactMultiChild.js:241:44)<font></font>
      at ReactDOMComponent.Mixin._createContentMarkup (C:\sports-whole-page\node_modules\react\lib\ReactDOMComponent.js:591:32)<font></font>
      at ReactDOMComponent.Mixin.mountComponent (C:\sports-whole-page\node_modules\react\lib\ReactDOMComponent.js:479:29)<font></font>
      at Object.ReactReconciler.mountComponent (C:\sports-whole-page\node_modules\react\lib\ReactReconciler.js:37:35)<font></font>
      at [object Object].ReactCompositeComponentMixin.mountComponent (C:\sports-whole-page\node_modules\react\lib\ReactCompositeComponent.js:225:34)<font></font>
      at [object Object].wrapper [as mountComponent] (C:\sports-whole-page\node_modules\react\lib\ReactPerf.js:66:21)<font></font>
      at Object.ReactReconciler.mountComponent (C:\sports-whole-page\node_modules\react\lib\ReactReconciler.js:37:35)<font></font>
      at ReactDOMComponent.ReactMultiChild.Mixin.mountChildren (C:\sports-whole-page\node_modules\react\lib\ReactMultiChild.js:241:44)<font></font>
      at ReactDOMComponent.Mixin._createContentMarkup (C:\sports-whole-page\node_modules\react\lib\ReactDOMComponent.js:591:32)<font></font>
      at ReactDOMComponent.Mixin.mountComponent (C:\sports-whole-page\node_modules\react\lib\ReactDOMComponent.js:479:29)<font></font>
      at Object.ReactReconciler.mountComponent (C:\sports-whole-page\node_modules\react\lib\ReactReconciler.js:37:35)<font></font>
      at [object Object].ReactCompositeComponentMixin.mountComponent (C:\sports-whole-page\node_modules\react\lib\ReactCompositeComponent.js:225:34)<font></font>
      at [object Object].wrapper [as mountComponent] (C:\sports-whole-page\node_modules\react\lib\ReactPerf.js:66:21)<font></font>
      at Object.ReactReconciler.mountComponent (C:\sports-whole-page\node_modules\react\lib\ReactReconciler.js:37:35)<font></font>
      at ReactDOMComponent.ReactMultiChild.Mixin.mountChildren (C:\sports-whole-page\node_modules\react\lib\ReactMultiChild.js:241:44)<font></font>
      at ReactDOMComponent.Mixin._createContentMarkup (C:\sports-whole-page\node_modules\react\lib\ReactDOMComponent.js:591:32)<font></font>
      at ReactDOMComponent.Mixin.mountComponent (C:\sports-whole-page\node_modules\react\lib\ReactDOMComponent.js:479:29)<font></font>
      at Object.ReactReconciler.mountComponent (C:\sports-whole-page\node_modules\react\lib\ReactReconciler.js:37:35)<font></font>
      at [object Object].ReactCompositeComponentMixin.mountComponent (C:\sports-whole-page\node_modules\react\lib\ReactCompositeComponent.js:225:34)<font></font>
      at [object Object].wrapper [as mountComponent] (C:\sports-whole-page\node_modules\react\lib\ReactPerf.js:66:21)<font></font>
      at Object.ReactReconciler.mountComponent (C:\sports-whole-page\node_modules\react\lib\ReactReconciler.js:37:35)<font></font>
      at [object Object].ReactCompositeComponentMixin.mountComponent (C:\sports-whole-page\node_modules\react\lib\ReactCompositeComponent.js:225:34)<font></font>
      at [object Object].wrapper [as mountComponent] (C:\sports-whole-page\node_modules\react\lib\ReactPerf.js:66:21)<font></font>
      at Object.ReactReconciler.mountComponent (C:\sports-whole-page\node_modules\react\lib\ReactReconciler.js:37:35)<font></font>
      at mountComponentIntoNode (C:\sports-whole-page\node_modules\react\lib\ReactMount.js:266:32)<font></font>
      at ReactReconcileTransaction.Mixin.perform (C:\sports-whole-page\node_modules\react\lib\Transaction.js:136:20)<font></font>
      at batchedMountComponentIntoNode (C:\sports-whole-page\node_modules\react\lib\ReactMount.js:282:15)<font></font>
      at ReactDefaultBatchingStrategyTransaction.Mixin.perform (C:\sports-whole-page\node_modules\react\lib\Transaction.js:136:20)<font></font>
      at Object.ReactDefaultBatchingStrategy.batchedUpdates (C:\sports-whole-page\node_modules\react\lib\ReactDefaultBatchingStrategy.js:62:19)<font></font>
      at Object.batchedUpdates (C:\sports-whole-page\node_modules\react\lib\ReactUpdates.js:94:20)<font></font>
      at Object.ReactMount._renderNewRootComponent (C:\sports-whole-page\node_modules\react\lib\ReactMount.js:476:18)<font></font>
      at Object.wrapper [as _renderNewRootComponent] (C:\sports-whole-page\node_modules\react\lib\ReactPerf.js:66:21)<font></font>
      at Object.ReactMount._renderSubtreeIntoContainer (C:\sports-whole-page\node_modules\react\lib\ReactMount.js:550:32)<font></font>
      at Object.ReactMount.render (C:\sports-whole-page\node_modules\react\lib\ReactMount.js:570:23)<font></font>
      at Object.wrapper [as render] (C:\sports-whole-page\node_modules\react\lib\ReactPerf.js:66:21)<font></font>
      at Object.ReactTestUtils.renderIntoDocument (C:\sports-whole-page\node_modules\react\lib\ReactTestUtils.js:76:21)<font></font>
      at Context.&lt;anonymous&gt; (C:/codebase/sports-whole-page/test/components/sports-top-portion/sports-top-portion-unit-tests.js:28:41)<font></font>
      at callFn (C:\sports-whole-page\node_modules\mocha\lib\runnable.js:286:21)<font></font>
      at Test.Runnable.run (C:\sports-whole-page\node_modules\mocha\lib\runnable.js:279:7)<font></font>
      at Runner.runTest (C:\sports-whole-page\node_modules\mocha\lib\runner.js:421:10)<font></font>
      at C:\sports-whole-page\node_modules\mocha\lib\runner.js:528:12<font></font>
      at next (C:\sports-whole-page\node_modules\mocha\lib\runner.js:341:14)<font></font>
      at C:\sports-whole-page\node_modules\mocha\lib\runner.js:351:7<font></font>
      at next (C:\sports-whole-page\node_modules\mocha\lib\runner.js:283:14)<font></font>
      at Immediate._onImmediate (C:\sports-whole-page\node_modules\mocha\lib\runner.js:319:5)<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第781篇《永久违反：在“ Connect（SportsDatabase）”的上下文或道具中找不到“存储”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚神无</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，这是进口问题，希望对您有所帮助。</font><font style="vertical-align: inherit;">WebStorm的默认导入是错误的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更换</font></font></p>

<pre><code>import connect from "react-redux/lib/connect/connect";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font></p>

<pre><code>import {connect} from "react-redux";
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Davaid</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我升级时，这发生在我身上。</font><font style="vertical-align: inherit;">我不得不降级了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-redux ^ 5.0.6→^ 7.1.3 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能对我有用的解决方案</font></font></p>

<pre><code>import React from "react";<font></font>
import { shallow } from "enzyme";<font></font>
import { Provider } from "react-redux";<font></font>
import configureMockStore from "redux-mock-store";<font></font>
import TestPage from "../TestPage";<font></font>
<font></font>
const mockStore = configureMockStore();<font></font>
const store = mockStore({});<font></font>
<font></font>
describe("Testpage Component", () =&gt; {<font></font>
    it("should render without throwing an error", () =&gt; {<font></font>
        expect(<font></font>
            shallow(<font></font>
                &lt;Provider store={store}&gt;<font></font>
                    &lt;TestPage /&gt;<font></font>
                &lt;/Provider&gt;<font></font>
            ).exists(&lt;h1&gt;Test page&lt;/h1&gt;)<font></font>
        ).toBe(true);<font></font>
    });<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样做是从“酶”导入{浅，安装}；</font></font></p>

<pre><code>const store = mockStore({<font></font>
  startup: { complete: false }<font></font>
});<font></font>
<font></font>
describe("==== Testing App ======", () =&gt; {<font></font>
  const setUpFn = props =&gt; {<font></font>
    return mount(<font></font>
      &lt;Provider store={store}&gt;<font></font>
        &lt;App /&gt;<font></font>
      &lt;/Provider&gt;<font></font>
    );<font></font>
  };<font></font>
<font></font>
  let wrapper;<font></font>
  beforeEach(() =&gt; {<font></font>
    wrapper = setUpFn();<font></font>
  });<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门泡芙Jim</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>When we put together a react-redux application we should expect to see a structure where at the top we have the <code>Provider</code> tag which has an instance of a redux store.</p>

<p>That <code>Provider</code> tag then renders your parent component, lets call it the <code>App</code> component which in turn renders every other component inside the application.</p>

<p>Here is the key part, when we wrap a component with the <code>connect()</code> function, that <code>connect()</code> function expects to see some parent component within the hierarchy that has the <code>Provider</code> tag.</p>

<p>So the instance you put the <code>connect()</code> function in there, it will look up the hierarchy and try to find the <code>Provider</code>.</p>

<p>Thats what you want to have happen, but in your test environment that flow is breaking down.</p>

<p>Why?</p>

<p>Why?</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我们回到假定的sportsDatabase测试文件时，您必须自己是sportsDatabase组件，然后尝试独立地单独呈现该组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，从根本上讲，您在该测试文件中所做的只是获取该组件并将其扔掉而已，它与任何组件都没有关系，</font></font><code>Provider</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也不在其上方存储，这就是为什么您看到此消息的原因。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>Provider</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该组件的上下文或属性中</font><font style="vertical-align: inherit;">没有存储或</font><font style="vertical-align: inherit;">标签，因此该组件会抛出错误，因为它希望</font></font><code>Provider</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在其父层次结构中</font><font style="vertical-align: inherit;">看到</font><font style="vertical-align: inherit;">标记或存储。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是该错误的含义。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiJinJin</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很简单 </font><font style="vertical-align: inherit;">您正在尝试测试通过调用生成的包装器组件</font></font><code>connect()(MyPlainComponent)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该包装器组件希望可以访问Redux存储。</font><font style="vertical-align: inherit;">通常情况下，该存储库可以用作</font></font><code>context.store</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为在组件层次结构的顶部，您将有一个</font></font><code>&lt;Provider store={myStore} /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，您将自己渲染连接的组件，没有存储，因此会引发错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您有几种选择：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个商店并</font></font><code>&lt;Provider&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在连接的组件周围</font><font style="vertical-align: inherit;">渲染一个</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个商店并将其直接传递为</font></font><code>&lt;MyConnectedComponent store={store} /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为连接的组件也将接受“ store”作为道具</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要费心测试连接的组件。</font><font style="vertical-align: inherit;">导出“普通”未连接版本，然后进行测试。</font><font style="vertical-align: inherit;">如果您测试您的简单组件和</font></font><code>mapStateToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能，则可以放心地假设所连接的版本将正常工作。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能想通读Redux文档中的“测试”页面：</font></font><a href="https://redux.js.org/recipes/writing-tests" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://redux.js.org/recipes/writing-tests" rel="noreferrer"><font style="vertical-align: inherit;">//redux.js.org/recipes/writing-tests</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在实际看到您发布了源代码并重新读取错误消息之后，真正的问题不在于SportsTopPane组件。</font><font style="vertical-align: inherit;">问题在于您要“完全”渲染SportsTopPane，它也将渲染所有子项，而不是像在第一种情况下那样进行“浅”渲染。</font><font style="vertical-align: inherit;">该行</font></font><code>searchComponent = &lt;SportsDatabase sportsWholeFramework="desktop" /&gt;;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正在渲染我假设也已连接的组件，因此期望在React的“上下文”功能中可以使用存储。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此时，您有两个新选项：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅对SportsTopPane进行“浅”渲染，以免强迫其完全渲染其子级</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您确实想对SportsTopPane进行“深度”渲染，则需要在上下文中提供Redux存储。</font><font style="vertical-align: inherit;">我强烈建议您看一下酶测试库，它可以让您做到这一点。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">示例，</font><font style="vertical-align: inherit;">请参见</font></font><a href="http://airbnb.io/enzyme/docs/api/ReactWrapper/setContext.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://airbnb.io/enzyme/docs/api/ReactWrapper/setContext.html</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总的来说，我会指出您可能在这个组件中尝试做太多事情，并且可能希望考虑将其分解为较小的组件，而每个组件的逻辑更少。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥达蒙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言</font></font></p>

<pre><code>const myReducers = combineReducers({<font></font>
  user: UserReducer<font></font>
});<font></font>
<font></font>
const store: any = createStore(<font></font>
  myReducers,<font></font>
  applyMiddleware(thunk)<font></font>
);<font></font>
</code></pre>

<p><code>shallow(&lt;Login /&gt;, { context: { store } });</code></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>

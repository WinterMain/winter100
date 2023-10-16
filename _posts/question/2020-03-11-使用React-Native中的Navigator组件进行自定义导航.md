---
layout: question
title:  使用React-Native中的Navigator组件进行自定义导航
date:   2020-03-11T04:22:11.000Z
description: I’m exploring possibilities of React Native while developing a demo app with ...
img: 
author: 猴子乐
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>I’m exploring possibilities of <a href="http://facebook.github.io/react-native" rel="noreferrer">React Native</a> while developing a demo app with custom navigation between views with the help of <a href="http://facebook.github.io/react-native/docs/navigator.html#content" rel="noreferrer"><code>Navigator</code> component</a>.</p>

<p>The main app class renders navigator and inside <code>renderScene</code> returns passed component:</p>

<pre><code>class App extends React.Component {<font></font>
    render() {<font></font>
        return (<font></font>
            &lt;Navigator<font></font>
                initialRoute={{name: 'WelcomeView', component: WelcomeView}}<font></font>
                configureScene={() =&gt; {<font></font>
                    return Navigator.SceneConfigs.FloatFromRight;<font></font>
                }}<font></font>
                renderScene={(route, navigator) =&gt; {<font></font>
                    // count the number of func calls<font></font>
                    console.log(route, navigator); <font></font>
<font></font>
                    if (route.component) {<font></font>
                        return React.createElement(route.component, { navigator });<font></font>
                    }<font></font>
                }}<font></font>
             /&gt;<font></font>
        );<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p>For now app contains two views:</p>

<pre><code>class FeedView extends React.Component {<font></font>
    render() {<font></font>
        return (<font></font>
            &lt;View style={styles.container}&gt;<font></font>
                &lt;Text&gt;<font></font>
                    Feed View!<font></font>
                &lt;/Text&gt;<font></font>
            &lt;/View&gt;<font></font>
        );<font></font>
    }<font></font>
}<font></font>
<font></font>
class WelcomeView extends React.Component {<font></font>
    onPressFeed() {<font></font>
        this.props.navigator.push({<font></font>
            name: 'FeedView',<font></font>
            component: FeedView<font></font>
        });<font></font>
    }<font></font>
<font></font>
    render() {<font></font>
        return (<font></font>
            &lt;View style={styles.container}&gt;<font></font>
                &lt;Text style={styles.welcome}&gt;<font></font>
                    Welcome View!<font></font>
                &lt;/Text&gt;<font></font>
<font></font>
                &lt;Text onPress={this.onPressFeed.bind(this)}&gt;<font></font>
                    Go to feed!<font></font>
                &lt;/Text&gt;<font></font>
            &lt;/View&gt;<font></font>
        );<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p>What I want to figure out is:</p>

<ul>
<li><p>I see in the logs that when pressing “go to feed” <code>renderScene</code> is called several times though the view renders correctly once. Is it how the animation works?</p>

<pre><code>index.ios.js:57 Object {name: 'WelcomeView', component: function}<font></font>
index.ios.js:57 Object {name: 'FeedView', component: function}<font></font>
// renders Feed View<font></font>
</code></pre></li>
<li><p>Generally does my approach conform to the React way, or can it be done better?</p></li>
</ul>

<p>What I want to achieve is something similar to <a href="http://facebook.github.io/react-native/docs/navigatorios.html#content" rel="noreferrer"><code>NavigatorIOS</code></a> but without the navigation bar (however some views will have their own custom navigation bar).</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第658篇《使用React-Native中的Navigator组件进行自定义导航》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端凯神乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><code>Navigator</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在已弃用，</font></font><code>RN 0.44.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>react-native-deprecated-custom-components</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">改用来支持</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">的现有应用程序</font></font><code>Navigator</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子十三</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在不推荐使用Navigator组件。</font><font style="vertical-align: inherit;">您可以使用askonov的react-native-router-flux，它种类繁多，支持许多不同的动画，并且效率很高</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan猿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的方法应该很好。</font><font style="vertical-align: inherit;">在Fb的大型应用程序中，我们避免在</font></font><code>require()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渲染之前为场景组件</font><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">，这可以节省一些启动时间。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>renderScene</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首次将场景推送到导航器时，应调用</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">函数。</font><font style="vertical-align: inherit;">当导航器重新渲染时，也将为活动场景调用该视图。</font><font style="vertical-align: inherit;">如果您</font></font><code>renderScene</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在之后</font><font style="vertical-align: inherit;">看到</font><font style="vertical-align: inherit;">多次被调用</font></font><code>push</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可能是一个错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导航器仍在开发中，但是如果发现任何问题，请在github上归档并标记我！</font><font style="vertical-align: inherit;">（@ericvicenti）</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>

---
layout: question
title:  React Context和Next JS
date:   2020-03-23T14:08:58.000Z
description: 我正在尝试向我的应用程序添加简单的React Context。我在“ ./components/DataProvider.js”中创建上下文，如下所示：...
img: 
author: DavaidTony宝儿
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试向我的应用程序添加简单的React Context。</font><font style="vertical-align: inherit;">我在“ ./components/DataProvider.js”中创建上下文，如下所示：</font></font></p>

<pre><code>import React, { Component } from 'react'<font></font>
<font></font>
const DataContext = React.createContext()<font></font>
<font></font>
class DataProvider extends Component {<font></font>
    state = {<font></font>
        isAddButtonClicked: false<font></font>
    }<font></font>
<font></font>
    changeAddButtonState = () =&gt; {<font></font>
        if( this.state.isAddButtonClicked ) {<font></font>
            this.setState({<font></font>
                isAddButtonClicked: false<font></font>
            })<font></font>
        } else {<font></font>
            this.setState({<font></font>
                isAddButtonClicked: true<font></font>
            })            <font></font>
        }<font></font>
    }<font></font>
<font></font>
    render() {<font></font>
        return(<font></font>
            &lt;DataContext.Provider<font></font>
                value={{<font></font>
                    isAddButtonClicked: this.state.isAddButtonClicked,<font></font>
                    changeAddButtonState: () =&gt; {<font></font>
                        if( this.state.isAddButtonClicked ) {<font></font>
                            this.setState({<font></font>
                                isAddButtonClicked: false<font></font>
                            })<font></font>
                        } else {<font></font>
                            this.setState({<font></font>
                                isAddButtonClicked: true<font></font>
                            })            <font></font>
                        }<font></font>
                    }<font></font>
                }}<font></font>
            &gt;<font></font>
                {this.props.children}<font></font>
            &lt;/DataContext.Provider&gt;<font></font>
        )<font></font>
    }<font></font>
<font></font>
}<font></font>
<font></font>
const DataConsumer = DataContext.Consumer<font></font>
<font></font>
export default DataProvider<font></font>
export { DataConsumer }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我添加到“ ./pages/_app.js”中</font></font></p>

<pre><code>import App, { Container } from 'next/app'<font></font>
<font></font>
import DataProvider from '../components/DataProvider'<font></font>
<font></font>
class MyApp extends App {<font></font>
render () {<font></font>
    const { Component, pageProps } = this.props<font></font>
    return (<font></font>
    &lt;Container&gt;<font></font>
        &lt;DataProvider&gt;<font></font>
        &lt;Component {...pageProps} /&gt;<font></font>
        &lt;/DataProvider&gt;<font></font>
    &lt;/Container&gt;<font></font>
    )<font></font>
}<font></font>
}<font></font>
<font></font>
export default MyApp<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在“ ./components/AddPostButton.js”中使用它。</font></font></p>

<pre><code>import React, {Component} from 'react'<font></font>
import { DataConsumer } from './DataProvider'<font></font>
<font></font>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'<font></font>
import { faPlus } from '@fortawesome/free-solid-svg-icons'<font></font>
<font></font>
class AddPostButton extends Component {<font></font>
    render() {<font></font>
        return (<font></font>
            &lt;div&gt;<font></font>
                &lt;DataConsumer&gt;<font></font>
                    {({ changeAddButtonState }) =&gt; (<font></font>
                        &lt;a onClick={changeAddButtonState}&gt;<font></font>
                            &lt;FontAwesomeIcon icon={faPlus} color='#fff' /&gt;<font></font>
                        &lt;/a&gt;<font></font>
                    )}<font></font>
                &lt;/DataConsumer&gt;<font></font>
            &lt;/div&gt;<font></font>
<font></font>
        )<font></font>
    }<font></font>
<font></font>
}<font></font>
<font></font>
export default AddPostButton<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但我收到此错误“无法读取未定义的属性'changeAddButtonState'”。</font><font style="vertical-align: inherit;">我正在使用React 16.7和NextJS 7.0.2。</font><font style="vertical-align: inherit;">不知道怎么了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二个问题是我应该对所有内容使用一个上下文还是将其用作MVC模式中的模型？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3131篇《React Context和Next JS》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>

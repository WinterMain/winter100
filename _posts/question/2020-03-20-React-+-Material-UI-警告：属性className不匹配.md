---
layout: question
title:  React + Material-UI-警告：属性className不匹配
date:   2020-03-20T06:15:58.000Z
description: 由于classNames的分配方式不同，我在Material-UI组件中的客户端和服务器端样式渲染之间存在差异。第一次加载页面时会正确分配classN...
img: 
author: 米亚
category: question
answer: 2
tags: node.js React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于classNames的分配方式不同，我在Material-UI组件中的客户端和服务器端样式渲染之间存在差异。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一次加载页面时会正确分配className，但是刷新页面后，className将不再匹配，因此组件将失去其样式。</font><font style="vertical-align: inherit;">这是我在控制台上收到的错误消息：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告：道具</font></font><code>className</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不匹配。</font><font style="vertical-align: inherit;">服务器：“ MuiFormControl-root-3 MuiFormControl-marginNormal-4
   </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SearchBar-textField-31</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”客户端：“ MuiFormControl-root-3 MuiFormControl-marginNormal-4
   </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SearchBar-textField-2</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遵循了Material-UI TextField </font></font><a href="https://material-ui.com/demos/text-fields/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">及其随附的</font></font><a href="https://codesandbox.io/s/2012x8202y" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Code Sandbox示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是我似乎无法弄清楚是什么原因导致服务器类和客户端类名之间的差异。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加带有删除“ x”图标的Material-UI芯片时，我遇到了类似的问题。</font><font style="vertical-align: inherit;">刷新后呈现的“ x”图标宽度达到了惊人的1024px。</font><font style="vertical-align: inherit;">同样的潜在问题是该图标没有收到正确的样式类。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于堆栈溢出，有几个问题解决了为什么客户端和服务器可能会以不同的方式呈现className（例如，需要使用自定义server.js并在setState中使用Math.random升级到@ Material-UI / core版本^ 1.0.0） ），但这些都不适用于我的情况。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还不知道</font></font><a href="https://github.com/mui-org/material-ui/issues/7836" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该Github讨论</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否</font><font style="vertical-align: inherit;">会有所帮助，但由于他们使用的是Material-UI的Beta版，因此可能没有帮助。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最少的复制步骤：</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建项目文件夹并启动节点服务器：</font></font></p>

<pre><code>mkdir app<font></font>
cd app<font></font>
npm init -y<font></font>
npm install react react-dom next @material-ui/core<font></font>
npm run dev<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑package.json：</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加到“脚本”： </font></font><code>"dev": "next",</code></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app / pages / index.jsx：</font></font></h3>

<pre><code>import Head from "next/head"<font></font>
import CssBaseline from "@material-ui/core/CssBaseline"<font></font>
import SearchBar from "../components/SearchBar"<font></font>
<font></font>
const Index = () =&gt; (<font></font>
  &lt;React.Fragment&gt;<font></font>
    &lt;Head&gt;<font></font>
      &lt;link<font></font>
        rel="stylesheet"<font></font>
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"<font></font>
      /&gt;<font></font>
      &lt;meta name="viewport" content="width=device-width, initial-scale=1" /&gt;<font></font>
      &lt;meta charSet="utf-8" /&gt;<font></font>
    &lt;/Head&gt;<font></font>
    &lt;CssBaseline /&gt;<font></font>
    &lt;SearchBar /&gt;<font></font>
  &lt;/React.Fragment&gt;<font></font>
)<font></font>
<font></font>
export default Index<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app / components / SearchBar.jsx：</font></font></h3>

<pre><code>import PropTypes from "prop-types"<font></font>
import { withStyles } from "@material-ui/core/styles"<font></font>
import TextField from "@material-ui/core/TextField"<font></font>
<font></font>
const styles = (theme) =&gt; ({<font></font>
  container: {<font></font>
    display: "flex",<font></font>
    flexWrap: "wrap",<font></font>
  },<font></font>
  textField: {<font></font>
    margin: theme.spacing.unit / 2,<font></font>
    width: 200,<font></font>
    border: "2px solid red",<font></font>
  },<font></font>
})<font></font>
<font></font>
class SearchBar extends React.Component {<font></font>
  constructor(props) {<font></font>
    super(props)<font></font>
    this.state = { value: "" }<font></font>
    this.handleChange = this.handleChange.bind(this)<font></font>
    this.handleSubmit = this.handleSubmit.bind(this)<font></font>
  }<font></font>
<font></font>
  handleChange(event) {<font></font>
    this.setState({ value: event.target.value })<font></font>
  }<font></font>
<font></font>
  handleSubmit(event) {<font></font>
    event.preventDefault()<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    const { classes } = this.props<font></font>
    return (<font></font>
      &lt;form<font></font>
        className={classes.container}<font></font>
        noValidate<font></font>
        autoComplete="off"<font></font>
        onSubmit={this.handleSubmit}<font></font>
      &gt;<font></font>
        &lt;TextField<font></font>
          id="search"<font></font>
          label="Search"<font></font>
          type="search"<font></font>
          placeholder="Search..."<font></font>
          className={classes.textField}<font></font>
          value={this.state.value}<font></font>
          onChange={this.handleChange}<font></font>
          margin="normal"<font></font>
        /&gt;<font></font>
      &lt;/form&gt;<font></font>
    )<font></font>
  }<font></font>
}<font></font>
<font></font>
SearchBar.propTypes = {<font></font>
  classes: PropTypes.object.isRequired,<font></font>
}<font></font>
<font></font>
export default withStyles(styles)(SearchBar)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在浏览器中访问页面</font></font><code>localhost:3000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并看到以下内容：</font></font></p>

<p><a href="https://i.stack.imgur.com/Nm4Ww.png" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TextField组件周围的红色边框</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">刷新浏览器，然后看到以下内容：</font></font></p>

<p><a href="https://i.stack.imgur.com/a2I7y.png" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TextField组件的样式消失了</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，TextField周围的红色边框消失了。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相关库：</font></font></h1>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“反应”：16.4.0</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“反应堆”：16.4.0</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“下一个”：6.0.3</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ @ material-ui / core”：1.2.0</font></font></li>
</ul></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐卡卡西猿</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是服务器端生成类名，但是样式表不会自动包含在HTML中。</font><font style="vertical-align: inherit;">您需要显式提取CSS并将其附加到服务器端渲染组件的UI中。</font><font style="vertical-align: inherit;">此处说明了整个过程：</font><a href="https://material-ui.com/guides/server-rendering/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://material-ui.com/guides/server-rendering/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//material-ui.com/guides/server-rendering/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom凯</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过Babel进行转译，我对Next.js和样式化组件也遇到了同样的问题。</font><font style="vertical-align: inherit;">实际上，客户端和服务器端的类名不同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过在.babelrc中编写此代码来解决此问题： </font></font></p>

<pre><code>{<font></font>
"presets": ["next/babel"],<font></font>
"plugins": [<font></font>
    [<font></font>
      "styled-components",<font></font>
      { "ssr": true, "displayName": true, "preprocess": false }<font></font>
    ]<font></font>
]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">}</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

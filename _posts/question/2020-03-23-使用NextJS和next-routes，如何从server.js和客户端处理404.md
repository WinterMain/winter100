---
layout: question
title:  使用NextJS和next-routes，如何从server.js和客户端处理404
date:   2020-03-23T13:03:04.000Z
description: 我希望我的下一个路由在从server.js（服务器端）运行以及在具有Link的链接端运行时，能够正常处理未找到的文件（实际上未找到路由）。我有一个解决方案...
img: 
author: 西里Pro
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望我的下一个路由在从server.js（服务器端）运行以及在具有Link的链接端运行时，能够正常处理未找到的文件（实际上未找到路由）。</font><font style="vertical-align: inherit;">我有一个解决方案，但是它体积很大，感觉好像我没有尽我所能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将粘贴在我的页面文件（pages / speakerdetail.js）下面，该文件确实可以正确处理服务器和客户端，但是在每个显示“未找到”的文件中必须具有自定义渲染方法似乎是错误的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也在仓库中以示例方式运行</font></font></p>

<p><a href="https://github.com/pkellner/next-routes-problem" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/pkellner/next-routes-problem</font></font></a></p>

<pre><code>import React, {Component} from 'react';<font></font>
import {Link} from '../routes'<font></font>
import Router from 'next/router'<font></font>
<font></font>
class speakerdetail extends Component {<font></font>
<font></font>
    static async getInitialProps({req,res,query}) {<font></font>
<font></font>
        console.log("getInitialProps speakerdetail");<font></font>
        let statusCode = 200;<font></font>
        let slugSpeaker = '';<font></font>
        let ccYear = '';<font></font>
        if (query &amp;&amp; query.slugSpeaker) {<font></font>
            console.log("query.slugSpeaker:" + query.slugSpeaker);<font></font>
            slugSpeaker = query.slugSpeaker;<font></font>
        }<font></font>
        if (query &amp;&amp; query.ccYear) {<font></font>
            console.log("query.ccYear:" + query.ccYear);<font></font>
            ccYear = query.ccYear;<font></font>
        }<font></font>
        if (slugSpeaker != 'douglas-crockford-1124' || ccYear != '2018') {<font></font>
            if (req) {<font></font>
                console.log("getInitialProps - res.redirect cause server");<font></font>
                statusCode = 404;<font></font>
                res.statusCode = 404;<font></font>
            } else {<font></font>
                console.log("getInitialProps - router.push cause client")<font></font>
                Router.push('/error404');<font></font>
            }<font></font>
        }<font></font>
        return {<font></font>
            slugSpeaker,<font></font>
            ccYear,<font></font>
            statusCode<font></font>
        };<font></font>
    }<font></font>
<font></font>
    render() {<font></font>
<font></font>
        if (this.props.statusCode == 404) {<font></font>
            return (<font></font>
                &lt;div&gt;Not Found&lt;/div&gt;<font></font>
            )<font></font>
        }<font></font>
<font></font>
        return (<font></font>
            &lt;div&gt;<font></font>
                &lt;b&gt;speakerdetail    {this.props.ccYear}   {this.props.slugSpeaker}   {this.props.statusCode}&lt;/b&gt;<font></font>
                &lt;hr/&gt;<font></font>
                &lt;Link route='/' &gt;<font></font>
                    &lt;a&gt;home&lt;/a&gt;<font></font>
                &lt;/Link&gt;<font></font>
            &lt;/div&gt;<font></font>
        );<font></font>
    }<font></font>
}<font></font>
<font></font>
speakerdetail.propTypes = {};<font></font>
speakerdetail.defaultProps = {};<font></font>
<font></font>
export default speakerdetail;<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>

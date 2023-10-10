---
layout: question
title:  如何在Redux中提出AJAX请求
date:   2020-03-18T09:13:23.000Z
description: 就我所知，我必须在实际操作中编写请求。在行动中如何使用承诺来提交请求？我正在获取数据。然后在reducer中创建新状态。在连接中绑定动作和减速器。但是我不...
img: 
author: 泡芙神无伽罗
category: question
answer: 0
tags: ajax React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我所知，我必须在实际操作中编写请求。</font><font style="vertical-align: inherit;">在行动中如何使用承诺来提交请求？</font><font style="vertical-align: inherit;">我正在获取数据。</font><font style="vertical-align: inherit;">然后在reducer中创建新状态。</font><font style="vertical-align: inherit;">在连接中绑定动作和减速器。</font><font style="vertical-align: inherit;">但是我不知道如何使用promise进行请求。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">行动</font></font></strong> </p>

<pre><code>import $ from 'jquery';<font></font>
export const GET_BOOK = 'GET_BOOK';<font></font>
<font></font>
export default function getBook() {<font></font>
  return {<font></font>
    type: GET_BOOK,<font></font>
    data: $.ajax({<font></font>
      method: "GET",<font></font>
      url: "/api/data",<font></font>
      dataType: "json"<font></font>
    }).success(function(data){<font></font>
      return data;<font></font>
    })<font></font>
  };<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">减速器</font></font></strong></p>

<pre><code>import {GET_BOOK} from '../actions/books';<font></font>
<font></font>
const booksReducer = (state = initialState, action) =&gt; {<font></font>
  switch (action.type) {<font></font>
    case GET_BOOK:<font></font>
      return state;<font></font>
    default:<font></font>
      return state;<font></font>
  }<font></font>
};<font></font>
<font></font>
export default booksReducer;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">容器</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
如何在容器中显示数据？</font></font></p>

<pre><code>import React, { Component, PropTypes } from 'react';<font></font>
import { connect } from 'react-redux';<font></font>
import getBook  from '../actions/books';<font></font>
import Radium from 'radium';<font></font>
import {Link} from 'react-router';<font></font>
<font></font>
function mapStateToProps(state) {<font></font>
  return {<font></font>
    books: state.data.books,<font></font>
  };<font></font>
}<font></font>
<font></font>
function mapDispatchToProps(dispatch) {<font></font>
  return {<font></font>
    getBooks: () =&gt; dispatch(getBook()),<font></font>
  };<font></font>
}<font></font>
<font></font>
@Radium<font></font>
@connect(mapStateToProps, mapDispatchToProps)<font></font>
class booksPage extends Component {<font></font>
  static propTypes = {<font></font>
    getBooks: PropTypes.func.isRequired,<font></font>
    books: PropTypes.array.isRequired,<font></font>
  };<font></font>
<font></font>
  render() {<font></font>
    const {books} = this.props;<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        &lt;Link to={`/authors`}&gt;&lt;MUIButton style="flat"&gt;All Authors&lt;/MUIButton&gt;&lt;/Link&gt;<font></font>
        &lt;ul&gt;<font></font>
          {books.map((book, index) =&gt;<font></font>
            &lt;li key={index}&gt;<font></font>
              &lt;Link to={`/book/${book.name}`}&gt;&lt;MUIButton style="flat"&gt;&lt;div class="mui--text-black mui--text-display4"&gt;<font></font>
                "{book.name}"&lt;/div&gt;&lt;/MUIButton&gt;&lt;/Link&gt;<font></font>
              &lt;Link to={`/author/${book.author}`}&gt;&lt;MUIButton style="flat"&gt;&lt;div class="mui--text-black mui--text-display4"&gt;<font></font>
                {book.author}&lt;/div&gt;&lt;/MUIButton&gt;&lt;/Link&gt;<font></font>
            &lt;/li&gt;<font></font>
          )}<font></font>
        &lt;/ul&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
export default booksPage;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2106篇《如何在Redux中提出AJAX请求》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>

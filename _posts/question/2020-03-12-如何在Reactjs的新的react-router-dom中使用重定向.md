---
layout: question
title:  如何在Reactjs的新的react-router-dom中使用重定向
date:   2020-03-12T04:45:29.000Z
description: 我正在使用最新版本的react-router模块，名为react-router-dom，它已成为使用React开发Web应用程序时的默认模块。我想知道在P...
img: 
author: 小胖LEY西门
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用最新版本的react-router模块，名为react-router-dom，它已成为使用React开发Web应用程序时的默认模块。</font><font style="vertical-align: inherit;">我想知道在POST请求后如何进行重定向。</font><font style="vertical-align: inherit;">我一直在编写此代码，但是在请求之后，什么都没有发生。</font><font style="vertical-align: inherit;">我在网上查看过，但是所有数据都是关于React Router的先前版本的，而关于最后一个更新的则不是。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">码：</font></font></p>

<pre><code>import React, { PropTypes } from 'react';<font></font>
import ReactDOM from 'react-dom';<font></font>
import { BrowserRouter } from 'react-router-dom';<font></font>
import { Redirect } from 'react-router'<font></font>
<font></font>
import SignUpForm from '../../register/components/SignUpForm';<font></font>
import styles from './PagesStyles.css';<font></font>
import axios from 'axios';<font></font>
import Footer from '../../shared/components/Footer';<font></font>
<font></font>
class SignUpPage extends React.Component {<font></font>
  constructor(props) {<font></font>
    super(props);<font></font>
<font></font>
    this.state = {<font></font>
      errors: {},<font></font>
      client: {<font></font>
        userclient: '',<font></font>
        clientname: '',<font></font>
        clientbusinessname: '',<font></font>
        password: '',<font></font>
        confirmPassword: ''<font></font>
      }<font></font>
    };<font></font>
<font></font>
    this.processForm = this.processForm.bind(this);<font></font>
    this.changeClient = this.changeClient.bind(this);<font></font>
  }<font></font>
<font></font>
  changeClient(event) {<font></font>
    const field = event.target.name;<font></font>
    const client = this.state.client;<font></font>
    client[field] = event.target.value;<font></font>
<font></font>
    this.setState({<font></font>
      client<font></font>
    });<font></font>
  }<font></font>
<font></font>
  async processForm(event) {<font></font>
    event.preventDefault();<font></font>
<font></font>
    const userclient = this.state.client.userclient;<font></font>
    const clientname = this.state.client.clientname;<font></font>
    const clientbusinessname = this.state.client.clientbusinessname;<font></font>
    const password = this.state.client.password;<font></font>
    const confirmPassword = this.state.client.confirmPassword;<font></font>
    const formData = { userclient, clientname, clientbusinessname, password, confirmPassword };<font></font>
<font></font>
    axios.post('/signup', formData, { headers: {'Accept': 'application/json'} })<font></font>
      .then((response) =&gt; {<font></font>
        this.setState({<font></font>
          errors: {}<font></font>
        });<font></font>
<font></font>
        &lt;Redirect to="/"/&gt; // Here, nothings happens<font></font>
      }).catch((error) =&gt; {<font></font>
        const errors = error.response.data.errors ? error.response.data.errors : {};<font></font>
        errors.summary = error.response.data.message;<font></font>
<font></font>
        this.setState({<font></font>
          errors<font></font>
        });<font></font>
      });<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;div className={styles.section}&gt;<font></font>
        &lt;div className={styles.container}&gt;<font></font>
          &lt;img src={require('./images/lisa_principal_bg.png')} className={styles.fullImageBackground} /&gt;<font></font>
          &lt;SignUpForm <font></font>
            onSubmit={this.processForm}<font></font>
            onChange={this.changeClient}<font></font>
            errors={this.state.errors}<font></font>
            client={this.state.client}<font></font>
          /&gt;<font></font>
          &lt;Footer /&gt;<font></font>
        &lt;/div&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
export default SignUpPage;<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin小小</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于使用了</font></font><a href="https://reacttraining.com/react-router/web/api/Hooks/usehistory" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">useHistory（）钩子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此React Router v5现在允许您使用history.push（）进行简单重定向</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>import { useHistory } from "react-router"<font></font>
<font></font>
function HomeButton() {<font></font>
  let history = useHistory()<font></font>
<font></font>
  function handleClick() {<font></font>
    history.push("/home")<font></font>
  }<font></font>
<font></font>
  return (<font></font>
    &lt;button type="button" onClick={handleClick}&gt;<font></font>
      Go home<font></font>
    &lt;/button&gt;<font></font>
  )<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

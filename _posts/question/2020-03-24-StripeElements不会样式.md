---
layout: question
title:  StripeElements不会样式
date:   2020-03-24T03:18:13.000Z
description: 我有如下所示的Stripe表单，可以很好地加载  render() {    const createOptions = (fontSize  st...
img: 
author: 阳光前端
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有如下所示的Stripe表单，可以很好地加载</font></font></p>

<pre><code>  render() {<font></font>
    const createOptions = (fontSize: string) =&gt; {<font></font>
      return {<font></font>
        style: {<font></font>
          base: {<font></font>
            fontSize,<font></font>
            color: '#424770',<font></font>
            letterSpacing: '0.025em',<font></font>
            fontFamily: 'Source Code Pro, monospace',<font></font>
            '::placeholder': {<font></font>
              color: '#aab7c4',<font></font>
            },<font></font>
          },<font></font>
          invalid: {<font></font>
            color: '#9e2146',<font></font>
          },<font></font>
        },<font></font>
      };<font></font>
    };<font></font>
<font></font>
    return (<font></font>
      &lt;div className={styles.cardsection}&gt;<font></font>
        &lt;form onSubmit={this.handleSubmit}&gt;<font></font>
        &lt;label&gt;<font></font>
        Card Details<font></font>
            &lt;CardElement {...createOptions(this.props.fontSize)} /&gt;<font></font>
          &lt;/label&gt;<font></font>
          &lt;button&gt;<font></font>
            {this.state.paid === 'waiting' ? 'Please wait...' : 'Confirm order'}<font></font>
          &lt;/button&gt;<font></font>
        &lt;/form&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
export default injectStripe(CheckoutForm);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有我的styles.less文件：</font></font></p>

<pre><code>.cardsection {<font></font>
  width: 60%;<font></font>
  margin: auto;<font></font>
  margin-top: 30px;<font></font>
  background-color: #f6f9fc;<font></font>
  padding: 20px;<font></font>
<font></font>
  label {<font></font>
    color: #6b7c93;<font></font>
    font-weight: 300;<font></font>
    letter-spacing: 0.025em;<font></font>
<font></font>
    .StripeElement {<font></font>
      display: block;<font></font>
      margin: 10px 0 20px 0;<font></font>
      max-width: 500px;<font></font>
      padding: 10px 14px;<font></font>
      box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px;<font></font>
      border-radius: 4px;<font></font>
      background: white;<font></font>
    }<font></font>
<font></font>
    .StripeElement--focus {<font></font>
      box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px, rgba(0, 0, 0, 0.0784314) 0px 1px 3px;<font></font>
      -webkit-transition: all 150ms ease;<font></font>
      transition: all 150ms ease;<font></font>
    }<font></font>
  }<font></font>
}<font></font>
<font></font>
button {<font></font>
  white-space: nowrap;<font></font>
  border: 0;<font></font>
  outline: 0;<font></font>
  display: inline-block;<font></font>
  height: 40px;<font></font>
  line-height: 40px;<font></font>
  padding: 0 14px;<font></font>
  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);<font></font>
  color: #fff;<font></font>
  border-radius: 4px;<font></font>
  font-size: 15px;<font></font>
  font-weight: 600;<font></font>
  text-transform: uppercase;<font></font>
  letter-spacing: 0.025em;<font></font>
  background-color: #6772e5;<font></font>
  text-decoration: none;<font></font>
  -webkit-transition: all 150ms ease;<font></font>
  transition: all 150ms ease;<font></font>
  margin-top: 10px;<font></font>
}<font></font>
<font></font>
button:hover {<font></font>
  color: #fff;<font></font>
  cursor: pointer;<font></font>
  background-color: #7795f8;<font></font>
  transform: translateY(-1px);<font></font>
  box-shadow: 0 7px 14px rgba(50, 50, 93, .10), 0 3px 6px rgba(0, 0, 0, .08);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于某些原因，我无法设置StripeElements的样式。</font><font style="vertical-align: inherit;">我所有其他样式都可以，但Stripe Elements却不能。</font><font style="vertical-align: inherit;">我已经检查了加载的HTML，在标签内是我的div，名为StripeElement</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从下面可以看到，输入框未设置样式。 
</font></font><a href="https://www.samyoc.com//uploads/users/25834/images/thumbnails/1585019766186.png" data-src="https://www.samyoc.com//uploads/users/25834/images/1585019766186.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/fZfUB.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用React-Stripe-Element库，并使用Next.js在SSR应用程序中实现它</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：我已经找到了问题，但我不确定如何克服它。</font><font style="vertical-align: inherit;">构建我的应用程序时，在CSS和html中为我的类分配了一个随机变量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，cardsection变为cardsection__Xy12xg2。</font><font style="vertical-align: inherit;">问题是在我的HTML中，StripeElement保持为StripeElement，但我的CSS变成StripeElement__28vnshY</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何想法如何克服这个？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3300篇《StripeElements不会样式》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>

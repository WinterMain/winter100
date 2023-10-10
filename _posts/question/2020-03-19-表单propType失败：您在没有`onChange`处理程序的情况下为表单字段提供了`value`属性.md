---
layout: question
title:  表单propType失败：您在没有\`onChange\`处理程序的情况下为表单字段提供了\`value\`属性
date:   2020-03-19T02:09:35.000Z
description: 加载我的React应用程序时，我在控制台中收到此错误。  警告：表单propType失败：您在value没有onChange处理程序的情况下向表单字...
img: 
author: 西门Mandy
category: question
answer: 2
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">加载我的React应用程序时，我在控制台中收到此错误。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告：表单propType失败：您在</font></font><code>value</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有</font></font><code>onChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理程序的</font><font style="vertical-align: inherit;">情况下向表单字段</font><font style="vertical-align: inherit;">提供了</font><font style="vertical-align: inherit;">prop </font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这将呈现一个只读字段。</font><font style="vertical-align: inherit;">如果该字段应可变使用</font></font><code>defaultValue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">否则，设置</font></font><code>onChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>readOnly</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">检查的渲染方法
   </font></font><code>AppFrame</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的AppFrame组件如下：</font></font></p>

<pre><code>class AppFrame extends Component {<font></font>
    render() {<font></font>
        return (<font></font>
            &lt;div&gt;<font></font>
                &lt;header className="navbar navbar-fixed-top navbar-shadow"&gt;<font></font>
                    &lt;div className="navbar-branding"&gt;<font></font>
                        &lt;a className="navbar-brand" href="dashboard"&gt;<font></font>
                            &lt;b&gt;Shire&lt;/b&gt;Soldiers<font></font>
                        &lt;/a&gt;<font></font>
                    &lt;/div&gt;<font></font>
                    &lt;form className="navbar-form navbar-left navbar-search alt" role="search"&gt;<font></font>
                        &lt;div className="form-group"&gt;<font></font>
                            &lt;input type="text" className="form-control" placeholder="Search..."<font></font>
                                   value="Search..."/&gt;<font></font>
                        &lt;/div&gt;<font></font>
                    &lt;/form&gt;<font></font>
                    &lt;ul className="nav navbar-nav navbar-right"&gt;<font></font>
                        &lt;li className="dropdown menu-merge"&gt;<font></font>
                            &lt;span className="caret caret-tp hidden-xs"&gt;&lt;/span&gt;<font></font>
                        &lt;/li&gt;<font></font>
                    &lt;/ul&gt;<font></font>
                &lt;/header&gt;<font></font>
<font></font>
                &lt;aside id="sidebar_left" className="nano nano-light affix"&gt;<font></font>
<font></font>
                    &lt;div className="sidebar-left-content nano-content"&gt;<font></font>
<font></font>
                        &lt;ul className="nav sidebar-menu"&gt;<font></font>
                            &lt;li className="sidebar-label pt20"&gt;Menu&lt;/li&gt;<font></font>
                            &lt;li className="sidebar-label"&gt;<font></font>
                                &lt;IndexLink to="/" activeClassName="active"&gt;Dashboard&lt;/IndexLink&gt;<font></font>
                            &lt;/li&gt;<font></font>
                            &lt;li className="sidebar-label"&gt;<font></font>
                                &lt;Link to="/fixtures" activeClassName="active"&gt;Fixtures&lt;/Link&gt;<font></font>
                            &lt;/li&gt;<font></font>
                            &lt;li className="sidebar-label"&gt;<font></font>
                                &lt;Link to="/players" activeClassName="active"&gt;Players&lt;/Link&gt;<font></font>
                            &lt;/li&gt;<font></font>
                        &lt;/ul&gt;<font></font>
<font></font>
                    &lt;/div&gt;<font></font>
<font></font>
                &lt;/aside&gt;<font></font>
                &lt;section id="content_wrapper"&gt;<font></font>
                    &lt;section id="content" className="table-layout animated fadeIn"&gt;<font></font>
                        {this.props.children}<font></font>
                    &lt;/section&gt;<font></font>
                &lt;/section&gt;<font></font>
            &lt;/div&gt;<font></font>
<font></font>
        )<font></font>
    }<font></font>
}<font></font>
<font></font>
export default AppFrame;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在努力找出我实际上在这里做错了什么。</font><font style="vertical-align: inherit;">该应用程序启动并运行，但是我正在尝试删除所有控制台警告/错误。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2246篇《表单propType失败：您在没有`onChange`处理程序的情况下为表单字段提供了`value`属性》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一Mandy</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您已经在搜索输入中直接输入了一个值，但由于您已经有一个占位符，因此看不到那里的好处。</font><font style="vertical-align: inherit;">您可以从以下位置删除该值：</font></font></p>

<pre><code>&lt;input type="text" className="form-control" placeholder="Search..." value="Search..."/&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对此：</font></font></p>

<pre><code>&lt;input type="text" className="form-control" placeholder="Search..." /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，如果您认为必须拥有它，请将其设置为</font></font><code>defaultValue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;input type="text" className="form-control" placeholder="Search..." defaultValue="Search..."/&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档：</font><a href="https://facebook.github.io/react/docs/uncontrolled-components.html#default-values" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://facebook.github.io/react/docs/uncontrolled-components.html#default-values" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//facebook.github.io/react/docs/un受控-components.html＃default-values</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom伽罗</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出现警告是因为您在输入上设置了value属性，并且不提供任何处理程序来更新它。</font><font style="vertical-align: inherit;">有两种方法：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ref</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从DOM获取表单值。</font></font></p>

<p><a href="https://reactjs.org/docs/uncontrolled-components.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://reactjs.org/docs/uncontrol-components.html</font></font></a></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">onChange</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理函数。</font></font></p></li>
</ol></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

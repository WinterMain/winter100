---
layout: question
title:  在React Router中触发Redux操作以响应路由转换
date:   2020-04-07T03:14:13.000Z
description: 我在最新的应用程序中使用react-router和redux，并且遇到了一些与基于当前url参数和查询所要求的状态更改有关的问题。基本上，我有一个组件...
img: 
author: 逆天前端宝儿
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在最新的应用程序中使用react-router和redux，并且遇到了一些与基于当前url参数和查询所要求的状态更改有关的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，我有一个组件，每次URL更改时都需要更新其状态。</font><font style="vertical-align: inherit;">像这样通过 decorator通过redux通过props传递状态</font></font></p>

<pre class="lang-js prettyprint-override"><code> @connect(state =&gt; ({<font></font>
   campaigngroups: state.jobresults.campaigngroups,<font></font>
   error: state.jobresults.error,<font></font>
   loading: state.jobresults.loading<font></font>
 }))<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，我正在使用componentWillReceiveProps生命周期方法来响应来自react-router的url更改，因为当this.props.params和this.props.query中的url更改时，react-router会将新的props传递给处理程序。这种方法的主要问题是，我正在此方法中触发操作以更新状态-然后，该状态通过并传递新的props该组件将再次触发相同的生命周期方法-因此基本上创建了一个无穷循环，目前我正在设置一个状态变量以阻止这种情况的发生。</font></font></p>

<pre class="lang-js prettyprint-override"><code>  componentWillReceiveProps(nextProps) {<font></font>
    if (this.state.shouldupdate) {<font></font>
      let { slug } = nextProps.params;<font></font>
      let { citizenships, discipline, workright, location } = nextProps.query;<font></font>
      const params = { slug, discipline, workright, location };<font></font>
      let filters = this._getFilters(params);<font></font>
      // set the state accroding to the filters in the url<font></font>
      this._setState(params);<font></font>
      // trigger the action to refill the stores<font></font>
      this.actions.loadCampaignGroups(filters);<font></font>
    }<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有基于路线转换触发动作的标准方法，还是可以将商店的状态直接连接到组件的状态，而不是通过prop传递它？</font><font style="vertical-align: inherit;">我尝试使用willTransitionTo静态方法，但无法访问this.props.dispatch。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4049篇《在React Router中触发Redux操作以响应路由转换》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>

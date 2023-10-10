---
layout: question
title:  在地图函数Reactjs中未定义“ this”
date:   2020-03-12T07:47:38.000Z
description: 我正在使用Reactjs，编写一个菜单组件。"use strict";var React = require("react");var Menu...
img: 
author: Mandy古一
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Reactjs，编写一个菜单组件。</font></font></p>

<pre><code>"use strict";<font></font>
<font></font>
var React = require("react");<font></font>
var Menus = React.createClass({<font></font>
<font></font>
    item_url: function (item,categories,articles) {<font></font>
        console.log('afdasfasfasdfasdf');<font></font>
        var url='XXX';<font></font>
        if (item.type == 1) {<font></font>
            url = item.categoryId == null ? 'javascript:void(0)' : path('buex_portal_browse_category', {slug: categories[item.categoryId].slug});<font></font>
        } else if (item.type == 2) {<font></font>
            url = item.articleId == null ? 'javascript:void(0)' : path('buex_portal_view_article', {slug: articles[item.articleId].slug, id: item.articleId});<font></font>
        } else {<font></font>
            url = item.url;<font></font>
        }<font></font>
        return url;<font></font>
    },<font></font>
<font></font>
    render: function () {<font></font>
     //   console.log(this.props.menus);  // return correctly<font></font>
            var menuElements = this.props.menus.map(function (item1) { // return fault : 'cannot read property 'props' of undefined '<font></font>
            return (<font></font>
                &lt;div&gt;<font></font>
                    &lt;li&gt;<font></font>
                        &lt;a href={this.item_url(item1, this.props.categories, this.props.articles )}&gt;{item1.name} // the same fault above<font></font>
                            &lt;i class="glyphicon glyphicon-chevron-right pull-right"&gt;&lt;/i&gt;<font></font>
                        &lt;/a&gt;<font></font>
                        &lt;div class="sub-menu"&gt;<font></font>
                            &lt;div&gt;<font></font>
                            {item1._children.map(function (item2) {<font></font>
                                return (<font></font>
                                    &lt;div&gt;<font></font>
                                        &lt;h4&gt;<font></font>
                                            &lt;a href={this.item_url(item2, this.props.categories, this.props.articles)}&gt;{ item2.name }&lt;/a&gt;<font></font>
                                        &lt;/h4&gt;<font></font>
                                        &lt;ul&gt;<font></font>
                                            {item2._children.map(function (item3) {<font></font>
                                                return ( <font></font>
                                                    &lt;div&gt;&lt;li&gt;&lt;a href={this.item_url(item3, this.props.categories, this.props.articles) }&gt;{ item3.name }&lt;/a&gt;&lt;/li&gt;&lt;/div&gt;<font></font>
                                                );<font></font>
                                            })}                   <font></font>
                                        &lt;/ul&gt;<font></font>
                                    &lt;/div&gt;<font></font>
                                );<font></font>
                            })}<font></font>
                            &lt;/div&gt;<font></font>
                        &lt;/div&gt;<font></font>
                    &lt;/li&gt;<font></font>
                &lt;/div&gt;<font></font>
            );<font></font>
        });<font></font>
<font></font>
        return (<font></font>
            &lt;div class="menu"&gt;<font></font>
                &lt;ul class="nav nav-tabs nav-stacked"&gt;<font></font>
                    {menuElements}<font></font>
                &lt;/ul&gt;<font></font>
            &lt;/div&gt;<font></font>
        );<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当我在map函数内部使用“ this”时，它都是未定义的，但在外部，则没有问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误： </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“无法读取未定义的属性'props'”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人帮我！</font><font style="vertical-align: inherit;">：（（</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1084篇《在地图函数Reactjs中未定义“ this”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimJim</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map"><code>Array.prototype.map()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要第二个参数来设置</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在映射函数中引用的内容，因此将其</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为第二个参数</font><font style="vertical-align: inherit;">传递</font><font style="vertical-align: inherit;">以保留当前上下文：</font></font></p>

<pre><code>someList.map(function(item) {<font></font>
  ...<font></font>
}, this)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，您可以使用ES6 </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">箭头功能</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自动保留当前</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上下文：</font></font></p>

<pre><code>someList.map((item) =&gt; {<font></font>
  ...<font></font>
})<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

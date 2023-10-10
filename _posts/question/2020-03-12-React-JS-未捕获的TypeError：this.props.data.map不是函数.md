---
layout: question
title:  React JS-未捕获的TypeError：this.props.data.map不是函数
date:   2020-03-12T08:23:09.000Z
description: I'm working with reactjs and cannot seem prevent this error when trying to di...
img: 
author: NearPro
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>I'm working with reactjs and cannot seem prevent this error when trying to display json data (either from file or server):</p>

<pre><code>Uncaught TypeError: this.props.data.map is not a function
</code></pre>

<p>I've looked at:</p>

<p><a href="https://stackoverflow.com/questions/21074638/react-code-throwing-typeerror-this-props-data-map-is-not-a-function">React code throwing “TypeError: this.props.data.map is not a function”</a></p>

<p><a href="https://stackoverflow.com/questions/28434789/react-js-this-props-data-map-is-not-a-function">React.js this.props.data.map() is not a function</a></p>

<p>Neither of these has helped me fix the problem. After my page loads, I can verify that this.data.props is not undefined (and does have a value equivalent to the json object - can call with <code>window.foo</code>), so it seems like it isn't loading in time when it is called by ConversationList. How do I make sure that the <code>map</code> method is working on the json data and not an <code>undefined</code> variable?</p>

<pre><code>var converter = new Showdown.converter();<font></font>
<font></font>
var Conversation = React.createClass({<font></font>
  render: function() {<font></font>
    var rawMarkup = converter.makeHtml(this.props.children.toString());<font></font>
    return (<font></font>
      &lt;div className="conversation panel panel-default"&gt;<font></font>
        &lt;div className="panel-heading"&gt;<font></font>
          &lt;h3 className="panel-title"&gt;<font></font>
            {this.props.id}<font></font>
            {this.props.last_message_snippet}<font></font>
            {this.props.other_user_id}<font></font>
          &lt;/h3&gt;<font></font>
        &lt;/div&gt;<font></font>
        &lt;div className="panel-body"&gt;<font></font>
          &lt;span dangerouslySetInnerHTML={{__html: rawMarkup}} /&gt;<font></font>
        &lt;/div&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
<font></font>
var ConversationList = React.createClass({<font></font>
  render: function() {<font></font>
<font></font>
    window.foo            = this.props.data;<font></font>
    var conversationNodes = this.props.data.map(function(conversation, index) {<font></font>
<font></font>
      return (<font></font>
        &lt;Conversation id={conversation.id} key={index}&gt;<font></font>
          last_message_snippet={conversation.last_message_snippet}<font></font>
          other_user_id={conversation.other_user_id}<font></font>
        &lt;/Conversation&gt;<font></font>
      );<font></font>
    });<font></font>
<font></font>
    return (<font></font>
      &lt;div className="conversationList"&gt;<font></font>
        {conversationNodes}<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
<font></font>
var ConversationBox = React.createClass({<font></font>
  loadConversationsFromServer: function() {<font></font>
    return $.ajax({<font></font>
      url: this.props.url,<font></font>
      dataType: 'json',<font></font>
      success: function(data) {<font></font>
        this.setState({data: data});<font></font>
      }.bind(this),<font></font>
      error: function(xhr, status, err) {<font></font>
        console.error(this.props.url, status, err.toString());<font></font>
      }.bind(this)<font></font>
    });<font></font>
  },<font></font>
  getInitialState: function() {<font></font>
    return {data: []};<font></font>
  },<font></font>
  componentDidMount: function() {<font></font>
    this.loadConversationsFromServer();<font></font>
    setInterval(this.loadConversationsFromServer, this.props.pollInterval);<font></font>
  },<font></font>
  render: function() {<font></font>
    return (<font></font>
      &lt;div className="conversationBox"&gt;<font></font>
        &lt;h1&gt;Conversations&lt;/h1&gt;<font></font>
        &lt;ConversationList data={this.state.data} /&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
<font></font>
$(document).on("page:change", function() {<font></font>
  var $content = $("#content");<font></font>
  if ($content.length &gt; 0) {<font></font>
    React.render(<font></font>
      &lt;ConversationBox url="/conversations.json" pollInterval={20000} /&gt;,<font></font>
      document.getElementById('content')<font></font>
    );<font></font>
  }<font></font>
})<font></font>
</code></pre>

<p>EDIT: adding sample conversations.json</p>

<p>Note - calling <code>this.props.data.conversations</code> also returns an error:</p>

<pre><code>var conversationNodes = this.props.data.conversations.map...
</code></pre>

<p>returns the following error: </p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未捕获的TypeError：无法读取未定义的属性“ map”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是sessions.json：</font></font></p>

<pre><code>{"user_has_unread_messages":false,"unread_messages_count":0,"conversations":[{"id":18768,"last_message_snippet":"Lorem ipsum","other_user_id":10193}]}
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1121篇《React JS-未捕获的TypeError：this.props.data.map不是函数》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>componentDidMount()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在获取数据时</font><font style="vertical-align: inherit;">尝试</font><font style="vertical-align: inherit;">生命周期</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan村村达蒙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发生这种情况是因为在异步数据到达之前就已经渲染了组件，因此应该在渲染之前进行控制。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我以这种方式解决了它： </font></font></p>

<pre><code>render() {<font></font>
    let partners = this.props &amp;&amp; this.props.partners.length &gt; 0 ?<font></font>
        this.props.partners.map(p=&gt;<font></font>
            &lt;li className = "partners" key={p.id}&gt;<font></font>
                &lt;img src={p.img} alt={p.name}/&gt; {p.name} &lt;/li&gt;<font></font>
        ) : &lt;span&gt;&lt;/span&gt;;<font></font>
<font></font>
    return (<font></font>
        &lt;div&gt;<font></font>
            &lt;ul&gt;{partners}&lt;/ul&gt;<font></font>
        &lt;/div&gt;<font></font>
    );<font></font>
}<font></font>
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当属性为null / undefined时地图无法解析，所以我先做了一个控件 </font></font></li>
</ul>

<p><code>this.props &amp;&amp; this.props.partners.length &gt; 0 ?</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西小宇宙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不需要数组即可执行此操作。 </font></font></p>

<pre><code>var ItemNode = this.state.data.map(function(itemData) {<font></font>
return (<font></font>
   &lt;ComponentName title={itemData.title} key={itemData.id} number={itemData.id}/&gt;<font></font>
 );<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil蛋蛋Tony</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我有用的是将props.data使用转换为数组， 
 </font></font><code>
data = Array.from(props.data);
</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
然后可以使用该</font></font><code>data.map()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞蛋蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，您还可以将新数据转换为数组，并使用类似concat的方法： </font></font></p>

<pre><code>var newData = this.state.data.concat([data]);  <font></font>
this.setState({data: newData})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种模式实际上在</font></font><a href="https://facebook.github.io/react/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://facebook.github.io/react/的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Facebook ToDo演示应用程序中使用（请参阅“应用程序”一节）</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

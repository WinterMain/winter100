---
layout: question
title:  反应输入defaultValue不会随着状态更新
date:   2020-03-12T09:28:08.000Z
description: 我正在尝试使用react创建一个简单的表单，但是要使数据正确绑定到表单的defaultValue面临困难。我正在寻找的行为是这样的：当我打开页面...
img: 
author: 鱼二水
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用react创建一个简单的表单，但是要使数据正确绑定到表单的defaultValue面临困难。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在寻找的行为是这样的：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我打开页面时，应在数据库中的“文本”输入字段中填写AwayMessage的文本。</font><font style="vertical-align: inherit;">那就是“样本文本”</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理想情况下，如果数据库中的AwayMessage没有文本，则我想在“文本”输入字段中有一个占位符。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，现在，我发现每次刷新页面时，“文本”输入字段均为空白。</font><font style="vertical-align: inherit;">（尽管我在输入中键入的内容确实可以保存并持久保存。）我认为这是因为当AwayMessage为空对象时，输入文本字段的html会加载，而当awayMessage加载时，它不会刷新。</font><font style="vertical-align: inherit;">另外，我无法为该字段指定默认值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了清楚起见，我删除了一些代码（即onToggleChange）</font></font></p>

<pre><code>    window.Pages ||= {}<font></font>
<font></font>
    Pages.AwayMessages = React.createClass<font></font>
<font></font>
      getInitialState: -&gt;<font></font>
        App.API.fetchAwayMessage (data) =&gt;<font></font>
        @setState awayMessage:data.away_message<font></font>
        {awayMessage: {}}<font></font>
<font></font>
      onTextChange: (event) -&gt;<font></font>
        console.log "VALUE", event.target.value<font></font>
<font></font>
      onSubmit: (e) -&gt;<font></font>
        window.a = @<font></font>
        e.preventDefault()<font></font>
        awayMessage = {}<font></font>
        awayMessage["master_toggle"]=@refs["master_toggle"].getDOMNode().checked<font></font>
        console.log "value of text", @refs["text"].getDOMNode().value<font></font>
        awayMessage["text"]=@refs["text"].getDOMNode().value<font></font>
        @awayMessage(awayMessage)<font></font>
<font></font>
      awayMessage: (awayMessage)-&gt;<font></font>
        console.log "I'm saving", awayMessage<font></font>
        App.API.saveAwayMessage awayMessage, (data) =&gt;<font></font>
          if data.status == 'ok'<font></font>
            App.modal.closeModal()<font></font>
            notificationActions.notify("Away Message saved.")<font></font>
            @setState awayMessage:awayMessage<font></font>
<font></font>
      render: -&gt;<font></font>
        console.log "AWAY_MESSAGE", this.state.awayMessage<font></font>
        awayMessageText = if this.state.awayMessage then this.state.awayMessage.text else "Placeholder Text"<font></font>
        `&lt;div className="away-messages"&gt;<font></font>
           &lt;div className="header"&gt;<font></font>
             &lt;h4&gt;Away Messages&lt;/h4&gt;<font></font>
           &lt;/div&gt;<font></font>
           &lt;div className="content"&gt;<font></font>
             &lt;div className="input-group"&gt;<font></font>
               &lt;label for="master_toggle"&gt;On?&lt;/label&gt;<font></font>
               &lt;input ref="master_toggle" type="checkbox" onChange={this.onToggleChange} defaultChecked={this.state.awayMessage.master_toggle} /&gt;<font></font>
             &lt;/div&gt;<font></font>
             &lt;div className="input-group"&gt;<font></font>
               &lt;label for="text"&gt;Text&lt;/label&gt;<font></font>
               &lt;input ref="text" onChange={this.onTextChange} defaultValue={awayMessageText} /&gt;<font></font>
             &lt;/div&gt;<font></font>
           &lt;/div&gt;<font></font>
           &lt;div className="footer"&gt;<font></font>
             &lt;button className="button2" onClick={this.close}&gt;Close&lt;/button&gt;<font></font>
             &lt;button className="button1" onClick={this.onSubmit}&gt;Save&lt;/button&gt;<font></font>
           &lt;/div&gt;<font></font>
         &lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的AwayMessage的console.log显示以下内容：</font></font></p>

<pre><code>AWAY_MESSAGE Object {}<font></font>
AWAY_MESSAGE Object {id: 1, company_id: 1, text: "Sample Text", master_toggle: false}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1211篇《反应输入defaultValue不会随着状态更新》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>

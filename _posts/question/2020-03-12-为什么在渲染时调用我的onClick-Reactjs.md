---
layout: question
title:  为什么在渲染时调用我的onClick？-React.js
date:   2020-03-12T12:17:17.000Z
description: 我有一个已创建的组件：class Create extends Component {  constructor(props) {    supe...
img: 
author: 伊芙妮
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个已创建的组件：</font></font></p>

<pre><code>class Create extends Component {<font></font>
  constructor(props) {<font></font>
    super(props);<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    var playlistDOM = this.renderPlaylists(this.props.playlists);<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        {playlistDOM}<font></font>
      &lt;/div&gt;<font></font>
    )<font></font>
  }<font></font>
<font></font>
  activatePlaylist(playlistId) {<font></font>
    debugger;<font></font>
  }<font></font>
<font></font>
  renderPlaylists(playlists) {<font></font>
    return playlists.map(playlist =&gt; {<font></font>
      return &lt;div key={playlist.playlist_id} onClick={this.activatePlaylist(playlist.playlist_id)}&gt;{playlist.playlist_name}&lt;/div&gt;<font></font>
    });<font></font>
  }<font></font>
}<font></font>
<font></font>
function mapStateToProps(state) {<font></font>
  return {<font></font>
    playlists: state.playlists<font></font>
  }<font></font>
}<font></font>
<font></font>
export default connect(mapStateToProps)(Create);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个页面，</font></font><code>activatePlaylist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被每一个信息</font></font><code>playlist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的</font></font><code>map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果我</font></font><code>bind</code> <code>activatePlaylist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">喜欢：</font></font></p>

<pre><code>activatePlaylist.bind(this, playlist.playlist_id)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还可以使用匿名函数：</font></font></p>

<pre><code>onClick={() =&gt; this.activatePlaylist(playlist.playlist_id)}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后它会按预期工作。</font><font style="vertical-align: inherit;">为什么会这样？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1304篇《为什么在渲染时调用我的onClick？-React.js》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamTony</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您传递方法的方式</font></font><code>this.activatePlaylist(playlist.playlist_id)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将立即调用该方法。</font><font style="vertical-align: inherit;">您应该将方法的引用传递给</font></font><code>onClick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件。</font><font style="vertical-align: inherit;">按照下面提到的一种实现来解决您的问题。  </font></font></p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">

1。

</font></font><pre><code>onClick={this.activatePlaylist.bind(this,playlist.playlist_id)}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，bind属性用于</font></font><code>this.activatePlaylist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过传递</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上下文和参数</font><font style="vertical-align: inherit;">来创建</font><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">的引用</font></font><code>playlist.playlist_id</code></p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">

2。

</font></font><pre><code>onClick={ (event) =&gt; { this.activatePlaylist.(playlist.playlist_id)}}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这会将一个函数附加到onClick事件，该事件仅在用户单击操作时触发。</font><font style="vertical-align: inherit;">执行此代码时，</font></font><code>this.activatePlaylist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将调用</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一梅</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要传递对</font><font style="vertical-align: inherit;">函数的</font></font><code>onClick</code> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，当您这样做时</font></font><code>activatePlaylist( .. )</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用函数并传递给</font></font><code>onClick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从返回的值</font></font><code>activatePlaylist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以使用以下三个选项之一：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">使用</font></font><code>.bind</code></p>

<pre><code>activatePlaylist.bind(this, playlist.playlist_id)
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">使用箭头功能</font></font></p>

<pre><code>onClick={ () =&gt; this.activatePlaylist(playlist.playlist_id) }
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">或从返回函数</font></font><code>activatePlaylist</code></p>

<pre><code>activatePlaylist(playlistId) {<font></font>
  return function () {<font></font>
     // you code <font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>

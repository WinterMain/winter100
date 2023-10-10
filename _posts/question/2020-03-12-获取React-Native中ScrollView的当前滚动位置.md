---
layout: question
title:  获取React Native中ScrollView的当前滚动位置
date:   2020-03-12T06:37:18.000Z
description: 是否可以获取当前滚动位置或<ScrollView>React Native中组件的当前页面？所以像这样：<ScrollView  horizon...
img: 
author: 十三村村蛋蛋
category: question
answer: 8
tags: ios IOS
topic: IOS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以获取当前滚动位置或</font></font><code>&lt;ScrollView&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Native中组件</font><font style="vertical-align: inherit;">的当前页面</font><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以像这样：</font></font></p>

<pre><code>&lt;ScrollView<font></font>
  horizontal={true}<font></font>
  pagingEnabled={true}<font></font>
  onScrollAnimationEnd={() =&gt; { <font></font>
      // get this scrollview's current page or x/y scroll position<font></font>
  }}&gt;<font></font>
  this.state.data.map(function(e, i) { <font></font>
      &lt;ImageCt key={i}&gt;&lt;/ImageCt&gt; <font></font>
  })<font></font>
&lt;/ScrollView&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第999篇《获取React Native中ScrollView的当前滚动位置》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至于页面，我正在研究一个更高阶的组件，该组件基本上使用上述方法来做到这一点。</font><font style="vertical-align: inherit;">当您深入了解诸如初始布局和内容更改之类的细微之处时，实际上只需要一点时间。</font><font style="vertical-align: inherit;">我不会声称自己做得“正确”，但是从某种意义上讲，我会考虑使用正确且谨慎地执行此操作的组件的正确答案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅：</font></font><a href="https://github.com/rreusser/react-native-paged-scroll-view" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-native-paged-scroll-view</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">希望反馈，即使是我做错了！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥梅Stafan</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我相信</font></font><code>contentOffset</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会给你一个包含左上角滚动偏移量的对象：</font></font></p>

<p><a href="http://facebook.github.io/react-native/docs/scrollview.html#contentoffset" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://facebook.github.io/react-native/docs/scrollview.html#contentoffset</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁JinJinHarry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样最终可以从视图中实时获取当前滚动位置。</font><font style="vertical-align: inherit;">我正在做的是使用滚动事件监听器和scrollEventThrottle。</font><font style="vertical-align: inherit;">然后，我将其作为处理我制作的滚动功能和更新道具的事件传递。</font></font></p>

<pre><code> export default class Anim extends React.Component {<font></font>
          constructor(props) {<font></font>
             super(props);<font></font>
             this.state = {<font></font>
               yPos: 0,<font></font>
             };<font></font>
           }<font></font>
<font></font>
        handleScroll(event){<font></font>
            this.setState({<font></font>
              yPos : event.nativeEvent.contentOffset.y,<font></font>
            })<font></font>
        }<font></font>
<font></font>
        render() {<font></font>
            return (<font></font>
          &lt;ScrollView onScroll={this.handleScroll.bind(this)} scrollEventThrottle={16} /&gt;<font></font>
    )<font></font>
    }<font></font>
    }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi神乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要在滚动结束后按原始问题的要求获取x / y，最简单的方法可能是：</font></font></p>

<pre><code>&lt;ScrollView<font></font>
   horizontal={true}<font></font>
   pagingEnabled={true}<font></font>
   onMomentumScrollEnd={(event) =&gt; { <font></font>
      // scroll animation ended<font></font>
      console.log(e.nativeEvent.contentOffset.x);<font></font>
      console.log(e.nativeEvent.contentOffset.y);<font></font>
   }}&gt;<font></font>
   ...content<font></font>
&lt;/ScrollView&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanJinJin</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">布拉德·奥伊勒（Brad Oyler）的答案是正确的。</font><font style="vertical-align: inherit;">但是您只会收到一个事件。</font><font style="vertical-align: inherit;">如果需要不断更新滚动位置，则应设置</font></font><code>scrollEventThrottle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prop，如下所示：</font></font></p>

<pre><code>&lt;ScrollView onScroll={this.handleScroll} scrollEventThrottle={16} &gt;<font></font>
  &lt;Text&gt;<font></font>
    Be like water my friend …<font></font>
  &lt;/Text&gt;<font></font>
&lt;/ScrollView&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和事件处理程序：</font></font></p>

<pre><code>handleScroll: function(event: Object) {<font></font>
  console.log(event.nativeEvent.contentOffset.y);<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，您可能会遇到性能问题。</font><font style="vertical-align: inherit;">相应地调节油门。</font><font style="vertical-align: inherit;">16为您提供最多的更新。</font><font style="vertical-align: inherit;">0只有一个。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Gil</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您只是想获取当前位置（例如，按下某个按钮时），而不是在用户滚动时跟踪它，那么调用</font></font><code>onScroll</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">侦听器将导致性能问题。</font><font style="vertical-align: inherit;">当前，最简单地获取当前滚动位置的最有效方法是使用</font></font><a href="https://github.com/wix/react-native-invoke" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-native-invoke</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">程序包。</font><font style="vertical-align: inherit;">确实有一个示例，但是该程序包还执行其他许多操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里阅读。
</font></font><a href="https://medium.com/@talkol/invoke-any-native-api-directly-from-pure-javascript-in-react-native-1fb6afcdf57d#.68ls1sopd" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://medium.com/@talkol/invoke-any-native-api-direct-from-pure-javascript-in-react-native-1fb6afcdf57d#.68ls1sopd</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐小胖</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试。</font></font></p>

<pre><code>&lt;ScrollView onScroll={this.handleScroll} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接着： </font></font></p>

<pre><code>handleScroll: function(event: Object) {<font></font>
 console.log(event.nativeEvent.contentOffset.y);<font></font>
},<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋伽罗猿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以上答案告诉了如何使用不同的API来获取位置，</font></font><code>onScroll</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>onMomentumScrollEnd</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等; </font><font style="vertical-align: inherit;">如果您想知道页面索引，可以使用偏移值进行计算。</font></font></p>

<pre><code> &lt;ScrollView <font></font>
    pagingEnabled={true}<font></font>
    onMomentumScrollEnd={this._onMomentumScrollEnd}&gt;<font></font>
    {pages}<font></font>
 &lt;/ScrollView&gt; <font></font>
<font></font>
  _onMomentumScrollEnd = ({ nativeEvent }: any) =&gt; {<font></font>
   // the current offset, {x: number, y: number} <font></font>
   const position = nativeEvent.contentOffset; <font></font>
   // page index <font></font>
   const index = Math.round(nativeEvent.contentOffset.x / PAGE_WIDTH);<font></font>
<font></font>
   if (index !== this.state.currentIndex) {<font></font>
     // onPageDidChanged<font></font>
   }<font></font>
 };<font></font>
</code></pre>

<p><a href="https://i.stack.imgur.com/v1ZR4.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/v1ZR4.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在iOS中，ScrollView和可见区域之间的关系如下： 
</font></font><a href="https://i.stack.imgur.com/Xghjp.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/Xghjp.png" alt="图片来自https://www.objc.io/issues/3-views/scroll-view/ "></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="https://www.objc.io/issues/3-views/scroll-view/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://www.objc.io/issues/3-views/scroll-view/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.objc.io/issues/3-views/scroll-view/</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

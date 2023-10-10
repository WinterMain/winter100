---
layout: post
title:  说说React的事（五）Props验证
date:   2017-10-12T14:06:52.000Z
description: 前面说到props是组件之间交流的一种方式，是数据流通的桥梁。React提供一项机制就是我们可以设置Props属性的类型，这样Props的属性假如一旦被设置为n...
img: 
author: Winter
category: blog
answer: 0
tags: 说说React的事
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>前面说到props是组件之间交流的一种方式，是数据流通的桥梁。React提供一项机制就是我们可以设置Props属性的类型，这样Props的属性假如一旦被设置为number型的时候，就不能传字符串值给它了，这个便是Props的验证。</p>

<p>通过Props的验证，我们可以让组件结构变得清晰，防止盲目传递参数，而造成产生不可预知的bug的隐患。</p>

<p>Props的验证请看如下片段</p>

<h3><em><strong>App.jsx</strong></em></h3>

<pre>
import React from &#39;react&#39;;

class App extends React.Component {
   render() {
      return (
         &lt;div&gt;
            &lt;h3&gt;Array: {this.props.propArray}&lt;/h3&gt;
            &lt;h3&gt;Bool: {this.props.propBool ? &quot;True...&quot; : &quot;False...&quot;}&lt;/h3&gt;
            &lt;h3&gt;Func: {this.props.propFunc(3)}&lt;/h3&gt;
            &lt;h3&gt;Number: {this.props.propNumber}&lt;/h3&gt;
            &lt;h3&gt;String: {this.props.propString}&lt;/h3&gt;
            &lt;h3&gt;Object: {this.props.propObject.objectName1}&lt;/h3&gt;
            &lt;h3&gt;Object: {this.props.propObject.objectName2}&lt;/h3&gt;
            &lt;h3&gt;Object: {this.props.propObject.objectName3}&lt;/h3&gt;
         &lt;/div&gt;
      );
   }
}

App.propTypes = {
   propArray: React.PropTypes.array.isRequired,
   propBool: React.PropTypes.bool.isRequired,
   propFunc: React.PropTypes.func,
   propNumber: React.PropTypes.number,
   propString: React.PropTypes.string,
   propObject: React.PropTypes.object
}

App.defaultProps = {
   propArray: [1,2,3,4,5],
   propBool: true,
   propFunc: function(e){return e},
   propNumber: 1,
   propString: &quot;String value...&quot;,
	
   propObject: {
      objectName1:&quot;objectValue1&quot;,
      objectName2: &quot;objectValue2&quot;,
      objectName3: &quot;objectValue3&quot;
   }
}

export default App;</pre>

<p>如上，假如我们给propBool赋值为string &ldquo;123&rdquo;时，编译是不会通过的，而且当我们又设置了属性是isRequired，那意味着这个值一定要从外部传进该组件，否则也会出现编译错误。</p>

<p>&nbsp;</p>

<p>&nbsp;</p>
</div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第25篇《说说React的事（五）Props验证》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>

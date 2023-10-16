---
layout: question
title:  用jQuery动画addClass / removeClass
date:   2020-04-07T03:17:10.000Z
description: 我正在使用jQuery和jQuery-ui，并希望为各种对象设置各种属性的动画。 为了在此说明问题，我将其简化为一个div，当用户将鼠标悬停在其上时，...
img: 
author: 古一Green
category: question
answer: 4
tags: JavaScript CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用jQuery和jQuery-ui，并希望为各种对象设置各种属性的动画。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了在此说明问题，我将其简化为一个div，当用户将鼠标悬停在其上时，该分区从蓝色变为红色。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用时我可以得到想要的行为</font></font><code>animate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是这样做</font><font style="vertical-align: inherit;">时</font><font style="vertical-align: inherit;">，我要设置动画的样式必须在动画代码中，因此与样式表是分开的。</font><font style="vertical-align: inherit;">（请参见</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例1</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种替代方法是使用</font></font><code>addClass()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>removeClass()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我无法重新创建可以得到的确切行为</font></font><code>animate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（请参见</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例2</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<hr>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例子1</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们看一下我拥有的代码</font></font><code>animate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>$('#someDiv')<font></font>
  .mouseover(function(){<font></font>
    $(this).stop().animate( {backgroundColor:'blue'}, {duration:500});<font></font>
  })<font></font>
  .mouseout(function(){<font></font>
    $(this).stop().animate( {backgroundColor:'red'}, {duration:500});<font></font>
  });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它显示了我正在寻找的所有行为：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在红色和蓝色之间平滑动画。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当用户将鼠标快速移入或移出div时，没有动画“超排队”。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果用户在动画播放过程中将鼠标移出/移入，则可以正确地缓解当前的“中途”状态和新的“目标”状态。</font></font></li>
</ol>

<p>But since the style changes are defined in <code>animate()</code> I have to change the style values there, and can't just have it point to my stylesheet. This 'fragmenting' of where styles are defined is something that really bothers me.</p>

<hr>

<h3>Example 2</h3>

<p>Here is my current best attempt using <code>addClass()</code> and <code>removeClass</code> (note that for the animation to work you need jQuery-ui): </p>

<pre><code>//assume classes 'red' and 'blue' are defined<font></font>
<font></font>
$('#someDiv')<font></font>
  .addClass('blue')<font></font>
  .mouseover(function(){<font></font>
    $(this).stop(true,false).removeAttr('style').addClass('red', {duration:500});<font></font>
  })<font></font>
  .mouseout(function(){<font></font>
    $(this).stop(true,false).removeAttr('style').removeClass('red', {duration:500});<font></font>
  });<font></font>
</code></pre>

<p>This exhibits both property 1. and 2. of my original requirements, however 3 does not work.</p>

<p>I understand the reason for this:</p>

<p>When animating <code>addClass()</code> and <code>removeClass()</code> jQuery adds a temporary style to the element, and then increments the appropriate values until they reach the values of the provided class, and only then does it actually add/remove the class.</p>

<p>Because of this I have to remove the style attribute, otherwise if the animation is stopped halfway the style attribute would remain and would permanently overwrite any class values, since style attributes in a tag have higher importance than class styles.</p>

<p>However when the animation is halfway done it hasn't yet added the new class, and so with this solution the color jumps to the previous color when the user moves their mouse before the animation is completed.</p>

<hr>

<p>What I want ideally is to be able to do something like this:</p>

<pre><code>$('#someDiv')<font></font>
  .mouseover(function(){<font></font>
    $(this).stop().animate( getClassContent('blue'), {duration:500});<font></font>
  })<font></font>
  .mouseout(function(){<font></font>
    $(this).stop().animate( getClassContent('red'), {duration:500});<font></font>
  });<font></font>
</code></pre>

<p>Where <code>getClassContent</code> would just return the contents of the provided class. The key point is that this way I don't have to keep my style definitions all over the place, but can keep them in classes in my stylesheet.</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4060篇《用jQuery动画addClass / removeClass》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然这个问题已经很老了，但我要添加其他答案中没有的信息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一旦事件完成，OP将使用stop（）停止当前动画。</font><font style="vertical-align: inherit;">但是，将参数与函数正确混合使用会有所帮助。</font><font style="vertical-align: inherit;">例如。</font><font style="vertical-align: inherit;">stop（true，true）或stop（true，false），因为这会很好地影响排队的动画。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下链接说明了一个演示，该演示显示了stop（）可用的不同参数以及它们与finish（）的区别。</font></font></p>

<p><a href="http://api.jquery.com/finish/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://api.jquery.com/finish/</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管OP在使用JqueryUI时没有问题，但这是针对可能遇到类似情况但不能使用JqueryUI /也需要支持IE7和8的其他用户的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用jui ui的</font></font><a href="http://api.jqueryui.com/switchclass/" rel="noreferrer"><code>switchClass</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这里是一个示例：</font></font></p>

<pre><code>$( "selector" ).switchClass( "oldClass", "newClass", 1000, "easeInOutQuad" );
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或参阅此</font></font><a href="http://jsfiddle.net/y9nzz/1/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsfiddle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需要</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery UI效果核心</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（13KB），即可启用添加的持续时间（就像它指出的Omar Tariq一样）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilTony</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于您不必担心IE，为什么不使用CSS过渡来提供动画和jQuery来更改类。</font><font style="vertical-align: inherit;">实时示例：</font><a href="http://jsfiddle.net/tw16/JfK6N/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：</font></font><a href="http://jsfiddle.net/tw16/JfK6N/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/tw16/JfK6N/</font></font></a></p>

<pre><code>#someDiv{<font></font>
    -webkit-transition: all 0.5s ease;<font></font>
    -moz-transition: all 0.5s ease;<font></font>
    -o-transition: all 0.5s ease;<font></font>
    transition: all 0.5s ease;<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>

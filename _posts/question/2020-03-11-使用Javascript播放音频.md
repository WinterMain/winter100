---
layout: question
title:  使用Javascript播放音频？
date:   2020-03-11T09:29:56.000Z
description: 我正在用HTML5和Javascript制作游戏。如何通过Javascript播放游戏音频？...
img: 
author: Gil理查德
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在用HTML5和Javascript制作游戏。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何通过Javascript播放游戏音频？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第765篇《使用Javascript播放音频？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>With the security requirements that a user must interact with a webpage for audio to be allowed this is how I do it, based on reading many articles, including on this site</p>

<ol>
<li>Define the required audio files in your html</li>
<li>Have a start game button with an onclick</li>
<li>When the button is clicked then play and pause ALL the audio files bar the one you want to play at the beginning</li>
</ol>

<p>Because all the audio files have been "played" on the same OnClick, you can now play them any time in the game without restrictions</p>

<p>Note that for best compatability do not use wav files, MS do not support them</p>

<p>Use mp3 and ogg, that covers all devices</p>

<p>Example:</p>

<pre><code>&lt;audio id="welcome"&gt;<font></font>
    &lt;source src="URL/welcome.ogg" type="audio/ogg"&gt;<font></font>
    &lt;source src="URL/welcome.mp3" type="audio/mpeg"&gt;<font></font>
    Your browser does not support the audio element.<font></font>
&lt;/audio&gt;<font></font>
</code></pre>

<p>repeat as needed for all audio in the game</p>

<p>Then:</p>

<pre><code>document.getElementById("welcome").play();<font></font>
document.getElementById("welcome").pause();<font></font>
</code></pre>

<p>repeat as needed except do not pause the audio you want to hear when the game starts</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro阿飞Davaid</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Just use this:</p>

<pre><code>&lt;video controls="" autoplay="" name="media"&gt;&lt;source src="Sound URL Here" type="audio/mpeg" /&gt;&lt;/video&gt;
</code></pre>

<p>Or, to make it simpler:</p>

<pre><code>&lt;video controls="" autoplay="" name="media"&gt;<font></font>
<font></font>
&lt;source src="Sound URL Here" type="audio/mpeg" /&gt;<font></font>
<font></font>
&lt;/video&gt;<font></font>
</code></pre>

<p>Sample:
</p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;video controls="" autoplay="" name="media"&gt;<font></font>
&lt;source src="https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3" type="audio/mpeg"&gt;<font></font>
&lt;/video&gt;</code></pre>
</div>
</div>
<p></p>

<blockquote>
  <p><strong>Have NO IDEA if this works on other browsers other than Chrome 73!!</strong></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>This is some JS i came up with on a baby AI project im working with. i hope this is able to help you out. </p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
    &lt;title&gt;<font></font>
        js prompt AI<font></font>
    &lt;/title&gt;<font></font>
    &lt;style&gt;<font></font>
        #button {<font></font>
            border: 1px solid black;<font></font>
            border-radius: 10px;<font></font>
            font-size: 22px;<font></font>
            height:65px;<font></font>
            width:100px;<font></font>
            text-align: center;<font></font>
            line-height: 65px;<font></font>
        }<font></font>
    &lt;/style&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
<font></font>
    &lt;audio id="myAudio" src="./how_are_you.m4a"&gt;&lt;/audio&gt;<font></font>
    &lt;p&gt;To Interact with the AI please click the button&lt;/p&gt;<font></font>
    &lt;div id=button&gt;click&lt;/div&gt;<font></font>
<font></font>
    &lt;script&gt;<font></font>
<font></font>
       var button = document.getElementById("button");<font></font>
       function playBack() {<font></font>
           button.addEventListener("click", function (){<font></font>
            var talk = prompt("If you wish for the AI to respond type hi");<font></font>
            var myAudio = document.getElementById("myAudio");<font></font>
<font></font>
            if(talk === "hi") {<font></font>
                    myAudio.play();<font></font>
            }<font></font>
           }) ;<font></font>
<font></font>
<font></font>
<font></font>
       }<font></font>
       playBack();<font></font>
   &lt;/script&gt;<font></font>
&lt;/body&gt;<font></font>
<font></font>
&lt;/html&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near西里泡芙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>if you want to play your audio whenever the page is opened then do like this.</p>

<p>

</p><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script&gt;<font></font>
  function playMusic(){<font></font>
  music.play();<font></font>
  }<font></font>
  &lt;/script&gt;<font></font>
&lt;html&gt;<font></font>
  &lt;audio id="music" loop src="sounds/music.wav" autoplay&gt; &lt;/audio&gt;<font></font>
  &lt;/html&gt;</code></pre>
</div>
</div>
<p></p>

<p>and call this playMusic() whenever you need in your game code.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Stafan</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个很老的问题，但是我想添加一些有用的信息。</font><font style="vertical-align: inherit;">话题开始者提到他是</font></font><code>"making a game"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此对于每个需要音频进行游戏开发的人来说，有一个更好的选择，不仅仅是</font></font><code>&lt;audio&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签或标签</font></font><code>HTMLAudioElement</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我认为您应该考虑使用</font></font><a href="http://www.html5rocks.com/en/tutorials/webaudio/intro/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web Audio API</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管网络音频不再需要插件，但音频标签为实现复杂的游戏和交互式应用程序带来了明显的限制。</font><font style="vertical-align: inherit;">Web Audio API是用于处理和合成Web应用程序中音频的高级JavaScript API。</font><font style="vertical-align: inherit;">该API的目标是包括现代游戏音频引擎中的功能以及现代桌面音频制作应用程序中的某些混合，处理和过滤任务。</font></font></p>
</blockquote></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>

---
layout: question
title:  JavaScript / HTML5中的声音效果
date:   2020-03-24T02:42:15.000Z
description: 我正在使用HTML5对游戏进行编程；我现在遇到的障碍是如何播放音效。具体要求数量很少：播放和混合多种声音，多次播放同一样本，可能会重复播放，...
img: 
author: 村村伽罗Mandy
category: question
answer: 14
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用HTML5对游戏进行编程；</font><font style="vertical-align: inherit;">我现在遇到的障碍是如何播放音效。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具体要求数量很少：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">播放和混合多种声音，</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多次播放同一样本，可能会重复播放，</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随时中断样本播放，</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好播放包含（低质量）原始PCM的WAV文件，但是我当然可以转换它们。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的第一种方法是使用HTML5 </font></font><code>&lt;audio&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素并定义页面中的所有声音效果。</font><font style="vertical-align: inherit;">Firefox只是播放桃花心的WAV文件，但</font></font><code>#play</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多次</font><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">实际上并不会多次播放示例。</font><font style="vertical-align: inherit;">根据我对HTML5规范的了解，该</font></font><code>&lt;audio&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素还跟踪播放状态，因此可以解释原因。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的直接想法是克隆音频元素，因此我创建了以下微型JavaScript库来为我做这件事（取决于jQuery）：</font></font></p>

<pre><code>var Snd = {<font></font>
  init: function() {<font></font>
    $("audio").each(function() {<font></font>
      var src = this.getAttribute('src');<font></font>
      if (src.substring(0, 4) !== "snd/") { return; }<font></font>
      // Cut out the basename (strip directory and extension)<font></font>
      var name = src.substring(4, src.length - 4);<font></font>
      // Create the helper function, which clones the audio object and plays it<font></font>
      var Constructor = function() {};<font></font>
      Constructor.prototype = this;<font></font>
      Snd[name] = function() {<font></font>
        var clone = new Constructor();<font></font>
        clone.play();<font></font>
        // Return the cloned element, so the caller can interrupt the sound effect<font></font>
        return clone;<font></font>
      };<font></font>
    });<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，现在我可以</font></font><code>Snd.boom();</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从Firebug控制台进行播放</font></font><code>snd/boom.wav</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但仍然不能多次播放相同的样本。</font><font style="vertical-align: inherit;">似乎该</font></font><code>&lt;audio&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素实际上更多是流功能，而不是用来播放声音效果的东西。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种巧妙的方法可以使我想不到的事情发生，最好仅使用HTML5和JavaScript？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还应该提到，我的测试环境是Ubuntu 9.10上的Firefox 3.5。</font><font style="vertical-align: inherit;">我尝试过的其他浏览器-Opera，Midori，Chromium和Epiphany-产生了不同的结果。</font><font style="vertical-align: inherit;">有些不玩任何东西，有些则抛出异常。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以随时尝试</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/AudioContext" rel="nofollow"><code>AudioContext</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获得有限的支持，但这是</font></font><a href="https://webaudio.github.io/web-audio-api/#the-audiocontext-interface" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web音频api</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作草案的一部分。</font><font style="vertical-align: inherit;">如果您计划将来发布某些内容，那可能是值得的。</font><font style="vertical-align: inherit;">而且，如果您只为chrome和Firefox编程，那您就是无价之宝。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这是一个完全的hack，但是我想我应该添加我之前放在github上的这个示例开源音频库...</font></font></p>

<p><a href="https://github.com/run-time/jThump" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/run-time/jThump</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击下面的链接后，在主行键上键入以播放蓝调即兴演奏（也可以同时键入多个键等）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用jThump库的示例&gt;&gt;   </font></font><a href="http://davealger.com/apps/jthump/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://davealger.com/apps/jthump/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它基本上是通过使不可见的</font></font><code>&lt;iframe&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素加载加载在onReady（）上播放声音的页面来工作的。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这当然不是理想的选择，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但您可以仅基于创造力（以及它是开源的，并且可以在我尝试过的任何浏览器中使用）为此解决方案+1，希望此举至少能使其他人搜索到一些想法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">:)</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所选答案将适用于除IE之外的所有内容。</font><font style="vertical-align: inherit;">我写了一个关于如何使其在跨浏览器中工作的教程= </font></font><a href="http://www.andy-howard.com/how-to-play-sounds-cross-browser-including-ie/index.html" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.andy-howard.com/how-to-play-sounds-cross-browser-includes-ie/index.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我写的函数；</font></font></p>

<pre><code>function playSomeSounds(soundPath)<font></font>
 {<font></font>
<font></font>
 var trident = !!navigator.userAgent.match(/Trident\/7.0/);<font></font>
 var net = !!navigator.userAgent.match(/.NET4.0E/);<font></font>
 var IE11 = trident &amp;&amp; net<font></font>
 var IEold = ( navigator.userAgent.match(/MSIE/i) ? true : false );<font></font>
 if(IE11 || IEold){<font></font>
 document.all.sound.src = soundPath;<font></font>
 }<font></font>
 else<font></font>
 {<font></font>
 var snd = new Audio(soundPath); // buffers automatically when created<font></font>
 snd.play();<font></font>
 }<font></font>
 };<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还需要将以下标记添加到html页面：</font></font></p>

<pre><code>&lt;bgsound id="sound"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，您可以调用该函数并在此处简单地通过路径：</font></font></p>

<pre><code>playSomeSounds("sounds/welcome.wav");
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋Davaid</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议使用</font></font><a href="http://www.createjs.com/#!/SoundJS" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SoundJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是我帮助开发的一个库。</font><font style="vertical-align: inherit;">它使您可以编写一个适用于任何地方的代码库，SoundJS可以根据需要选择Web音频，html音频或Flash音频。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可以让您做所有您想做的事情：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">播放和混合多种声音，</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多次播放相同的样本，可能会重复播放</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随时中断样本播放</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">播放包含的WAV文件（取决于浏览器支持）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望能有所帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryL</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不可能使用单个</font></font><code>&lt;audio&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">进行多次射击</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">为此，您需要使用多个元素。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在对音乐盒卡生成器进行编程时遇到了这个问题。</font><font style="vertical-align: inherit;">从不同的库开始，但每次都会出现故障。</font><font style="vertical-align: inherit;">常规音频实现的延迟很糟糕，没有多次播放...最终使用lowlag库+ soundmanager结束了：</font></font></p>

<p><a href="http://lowlag.alienbill.com/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://lowlag.alienbill.com/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
和 
 </font></font><a href="http://www.schillmania.com/projects/soundmanager2/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.schillmania.com/projects/soundmanager2/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在此处查看实现：</font><a href="http://musicbox.grit.it/" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="http://musicbox.grit.it/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//musicbox.grit.it/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我为多个浏览器播放生成了wav + ogg文件。</font><font style="vertical-align: inherit;">此音乐盒播放器可在ipad，iphone，Nexus，mac，pc等设备上响应。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖路易</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><a href="http://robert.ocallahan.org/2011/11/latency-of-html5-sounds.html" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://robert.ocallahan.org/2011/11/latency-of-html5-sounds.html</font></font></a></p>

<p><a href="http://people.mozilla.org/~roc/audio-latency-repeating.html" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://people.mozilla.org/~roc/audio-latency-repeating.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以在Firefox和Chrome中正常运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要停止开始的声音，请执行var sound = document.getElementById（“ shot”）。cloneNode（true）;。</font><font style="vertical-align: inherit;">sound.play（）; </font><font style="vertical-align: inherit;">以及后来的sound.pause（）;</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯樱Gil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是个主意。</font><font style="vertical-align: inherit;">将特定类别的声音的所有音频加载到单个音频元素中，其中src数据是您在连续音频文件中的所有样本（可能希望保持沉默），这样您就可以以更短的超时捕获和剪切样本出血至下一个样本的风险）。</font><font style="vertical-align: inherit;">然后，寻找样本并在需要时播放。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要播放其中一个以上的声音，则可以创建一个具有相同src的附加音频元素，以便对其进行缓存。</font><font style="vertical-align: inherit;">现在，您实际上有多个“轨道”。</font><font style="vertical-align: inherit;">您可以使用自己喜欢的资源分配方案（如Round Robin等）利用轨道组。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以指定其他选项，例如在该资源可用时将声音排队到要播放的曲目中或剪切当前正在播放的样本。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里斯丁</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要多次播放相同的样本，不可能做这样的事情：</font></font></p>

<pre><code>e.pause(); // Perhaps optional<font></font>
e.currentTime = 0;<font></font>
e.play();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>e</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是音频元素）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许我完全误解了您的问题，您是否希望声音效果同时播放多次？</font><font style="vertical-align: inherit;">那么这是完全错误的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim猴子Eva</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看看</font></font><a href="http://hyper-metrix.com/misc/jai/" rel="nofollow noreferrer"><strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jai</font></font></strike></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（-&gt; </font></font><a href="http://dl.dropbox.com/u/2400/mirror/jai/jai-x.htm" rel="nofollow noreferrer"><strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">mirror</font></font></strike></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）（javascript音频接口）站点。</font><font style="vertical-align: inherit;">通过查看其来源，他们似乎在</font></font><code>play()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反复</font><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">，并且提到它们的库可能适合在基于HTML5的游戏中使用。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以同时触发多个音频事件，这些事件可用于创建Javascript游戏或通过某些背景音乐进行语音播放</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid小哥</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">听起来像您想要的是多声道声音。</font><font style="vertical-align: inherit;">假设您有4个频道（例如在非常古老的16位游戏中），我还没有完全使用HTML5音频功能，但是您是否只需要4个&lt;audio&gt;元素，并使用了循环播放下一个音效？</font><font style="vertical-align: inherit;">你有尝试过吗？</font><font style="vertical-align: inherit;">怎么了？</font><font style="vertical-align: inherit;">如果有效：要同时播放更多声音，只需添加更多&lt;audio&gt;元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我之前没有HTML5 &lt;audio&gt;元素，使用了</font></font><a href="http://flash-mp3-player.net/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://flash-mp3-player.net/中的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个Flash对象来完成此操作</font><font style="vertical-align: inherit;">-我写了一个音乐测验（</font></font><a href="http://webdeavour.appspot.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://webdeavour.appspot.com/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），当用户单击问题按钮时，用它来播放音乐片段。</font><font style="vertical-align: inherit;">最初，每个问题只有一个播放器，可以将它们彼此叠加播放，因此我将其更改为只有一个播放器，我指的是不同的音乐片段。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><h1><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3C的</font><em><font style="vertical-align: inherit;">WebAudio</font></em><font style="vertical-align: inherit;"> API</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自2012年7月起，</font><font style="vertical-align: inherit;">Chrome现已支持</font></font><a href="https://webaudio.github.io/web-audio-api/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebAudio API</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而Firefox至少已部分支持</font><a href="https://webaudio.github.io/web-audio-api/" rel="noreferrer"><font style="vertical-align: inherit;">WebAudio API</font></a><font style="vertical-align: inherit;">，并将于版本6起将其添加到IOS。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管它足够健壮，可以以编程方式用于基本任务，但Audio元素绝不是要为游戏等提供完整的音频支持。它设计为允许将单个媒体嵌入到页面中，类似于img。标签。</font><font style="vertical-align: inherit;">尝试在游戏中使用音频标签存在很多问题：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时序图在音频元素中很常见</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个声音实例都需要一个Audio元素</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">负载事件并不完全可靠</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有通用的音量控制，没有衰减，没有滤镜/效果</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用这篇</font></font><a href="http://www.html5rocks.com/en/tutorials/webaudio/intro/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebAudio入门</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文章来开始使用WebAudio API。</font><font style="vertical-align: inherit;">该</font></font><a href="http://www.html5rocks.com/en/tutorials/webaudio/fieldrunners/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">炮塔防御WebAudio案例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也很好看。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一种使同时播放相同声音成为可能的方法。</font><font style="vertical-align: inherit;">与预加载器结合使用，一切就绪。</font><font style="vertical-align: inherit;">至少可以在Firefox 17.0.1上运行，还没有进行其他测试。</font></font></p>

<pre><code>// collection of sounds that are playing<font></font>
var playing={};<font></font>
// collection of sounds<font></font>
var sounds={step:"knock.ogg",throw:"swing.ogg"};<font></font>
<font></font>
// function that is used to play sounds<font></font>
function player(x)<font></font>
{<font></font>
    var a,b;<font></font>
    b=new Date();<font></font>
    a=x+b.getTime();<font></font>
    playing[a]=new Audio(sounds[x]);<font></font>
    // with this we prevent playing-object from becoming a memory-monster:<font></font>
    playing[a].onended=function(){delete playing[a]};<font></font>
    playing[a].play();<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将此绑定到键盘键，即可享受：</font></font></p>

<pre><code>player("step");
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿DavaidL</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5 </font></font><code>Audio</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您无需理会</font></font><code>&lt;audio&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素。</font><font style="vertical-align: inherit;">HTML 5使您可以</font><font style="vertical-align: inherit;">直接</font><font style="vertical-align: inherit;">访问</font></font><a href="http://dev.w3.org/html5/spec/video.html#htmlmediaelement" rel="noreferrer"><code>Audio</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var snd = new Audio("file.wav"); // buffers automatically when created<font></font>
snd.play();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前版本的规范不支持混合。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要多次播放相同的声音，请创建</font></font><code>Audio</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象的</font><font style="vertical-align: inherit;">多个实例</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您还可以</font></font><code>snd.currentTime=0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在对象播放完毕后对其进行</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于JS构造函数不支持后备</font></font><code>&lt;source&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素，因此您应该使用</font></font></p>

<pre><code>(new Audio()).canPlayType("audio/ogg; codecs=vorbis")
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试浏览器是否支持Ogg Vorbis。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在编写游戏或音乐应用程序（不仅仅是播放器），则需要使用</font></font><a href="https://www.w3.org/TR/webaudio/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更高级的Web Audio API</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="http://caniuse.com/audio-api" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大多数浏览器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在都</font><a href="http://caniuse.com/audio-api" rel="noreferrer"><font style="vertical-align: inherit;">支持</font></a><font style="vertical-align: inherit;">该</font><a href="https://www.w3.org/TR/webaudio/" rel="noreferrer"><font style="vertical-align: inherit;">API</font></a><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

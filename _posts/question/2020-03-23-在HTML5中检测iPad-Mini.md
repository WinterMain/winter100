---
layout: question
title:  在HTML5中检测iPad Mini
date:   2020-03-23T06:11:21.000Z
description: Apple的iPad Mini在更多方面比我们想要的要小一些，是iPad 2的较小版本。在JavaScript中，window.navigator对象为M...
img: 
author: 蛋蛋猿
category: question
answer: 20
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Apple的iPad Mini在更多方面比我们想要的要小一些，是iPad 2的较小版本。</font><font style="vertical-align: inherit;">在JavaScript中，</font></font><code>window.navigator</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象为Mini和iPad 2公开了相同的值。到目前为止，我检测到差异的测试并未成功。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么这很重要？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于iPad Mini和iPad 2屏幕的像素相同，但实际尺寸（英寸/厘米）不同，因此它们的</font></font><a href="http://en.wikipedia.org/wiki/Pixel_density"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PPI</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（像素/英寸）不同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了使Web应用程序和游戏提供友好的用户界面，某些元素的大小相对于用户的拇指或手指位置进行了调整，因此，我们可能希望缩放某些图像或按钮以提供更好的用户体验。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，我已经尝试过的事情（包括一些非常明显的方法）：</font></font></p>

<ul>
<li><code>window.devicepixelratio</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS元素宽度（以厘米为单位）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS媒体查询（例如</font></font><code>resolution</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>-webkit-device-pixel-ratio</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SVG图纸以相似单位</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在设定的时间内执行各种CSS Webkit转换，并使用来计数渲染的帧</font></font><code>requestAnimFrame</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我希望能够检测到可测量的差异）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我没有主意。</font><font style="vertical-align: inherit;">你呢？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
感谢您到目前为止的答复。</font><font style="vertical-align: inherit;">我想评论一下有人投票反对将iPad mini与2相比，因为Apple认为这是统治所有人的准则。</font><font style="vertical-align: inherit;">好的，这就是我的理由，为什么我觉得知道一个人使用的是iPad mini还是iPad 2确实很有意义，然后按照我的意愿进行操作。</font></font></p>

<p>The iPad mini is not only a much smaller device (9.7 inch versus 7.9 inch), but its form factor allows for a different usage. The iPad 2 is usually held with two hands when gaming unless you're <a href="http://en.wikipedia.org/wiki/Chuck_Norris_facts">Chuck Norris</a>. The mini is smaller, but it is also much lighter and allows for gameplay where you hold it in one hand and use another to swipe or tap or whatnot. As a game designer and developer myself, I'd just like to <strong>know</strong> if it's a mini so I can choose to provide the player with a different controlscheme if I want (for instance after A/B testing with a group of players). </p>

<p>Why? Well, it's a proven fact that the majority of users tend to go with the default settings, so leaving out a virtual thumbstick and putting some other tap-based control on the screen (just giving an arbitrary example here) when the player loads up the game for the first time is what I, and probably other game designers, would love to <strong>be able to</strong> do.</p>

<p>So IMHO this goes beyond the thick fingers / guidelines discussions and is just something Apple and all other vendors ought to do: allow us to uniquely identify your device and <strong>think different</strong> instead of <strong>following</strong> guidelines.</p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2807篇《在HTML5中检测iPad Mini》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于关于</font><font style="vertical-align: inherit;">iPad 2的</font></font><a href="https://stackoverflow.com/users/119271/douglas"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道格拉斯</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题</font></font><code>new webkitAudioContext().destination.numberOfChannels</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我决定进行一些测试。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查</font></font><code>2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在iPad mini上</font><font style="vertical-align: inherit;">返回的numberOfChannels </font><font style="vertical-align: inherit;">，但在装有iOS 5和</font></font><code>2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">iOS 6的</font><font style="vertical-align: inherit;">iPad 2上没有</font><font style="vertical-align: inherit;">检查</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我尝试检查webkitAudioContext是否可用</font></font></p>

<pre><code>var hasWebkitAudio = typeof(webkitAudioContext) === "object";<font></font>
alert(hasWebkitAudio);​<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样，此处的iPad Mini和带有iOS 6的iPad 2返回true，而带有iOS 5的iPad 2返回false。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（此测试不适用于台式机，对于台式机，请检查webkitAudioContext是否为函数）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是供您试用的代码：</font><a href="http://jsfiddle.net/sqFbc/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/sqFbc/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/sqFbc/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony神乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您创建了一堆1“ x1”宽的div，并将它们一个接一个地附加到父div，直到边界框从1英寸跳到2英寸，该怎么办？</font><font style="vertical-align: inherit;">mini上的一英寸与iPad上的一英寸一样，对吗？</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在iOS7中，用户可以进行系统范围的设置调整：当内容变得太小而无法阅读时，</font><font style="vertical-align: inherit;">可以更改“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文本大小”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该文本大小可用于形成合理尺寸的UI，例如用于按钮（在iPad Mini Retina上经过测试，可对“文本大小”设置更改做出反应）：</font></font></p>

<pre><code>padding: 0.5em 1em 0.5em 1em;<font></font>
font: -apple-system-body;    <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="http://jsfiddle.net/fU8QK/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按钮CSS，感谢jsfiddle和cssbuttongenerator）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚LEY</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里的所有解决方案都不是面向未来的（这阻止了Apple发布与iPad 2具有相同屏幕尺寸但与iPad Mini具有相同分辨率的iPad）。</font><font style="vertical-align: inherit;">所以我想出了一个主意：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个宽度为1英寸的div并将其附加到主体。</font><font style="vertical-align: inherit;">然后，我创建另一个宽度为100％的div并将其附加到主体：</font></font></p>

<pre><code>var div1= $("&lt;div/&gt;").appendTo(document.body).width("1in");<font></font>
var div2= $("&lt;div/&gt;").appendTo(document.body).width("100%");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery width（）函数始终返回以像素为单位的值，因此您可以：</font></font></p>

<pre><code>var screenSize= div2.width() / div1.width();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，screenSize保留了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序可用</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的大小</font><font style="vertical-align: inherit;">（以英寸为单位）（但要注意舍入舍入误差）。</font><font style="vertical-align: inherit;">您可以使用它来按自己的方式放置GUI。</font><font style="vertical-align: inherit;">同样不要忘了之后删除无用的div。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还要注意，Kaspars提出的算法不仅在用户以全屏模式运行应用程序时不起作用，而且在Apple修补浏览器UI时也会中断。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不会区分设备，但是正如您在编辑中解释的那样，您真正想知道的是设备屏幕尺寸。</font><font style="vertical-align: inherit;">我的想法也不会告诉您确切的屏幕尺寸，但会为您提供更有用的信息，即您可以用来绘制GUI的实际尺寸（以英寸为单位）。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
使用此代码来检查它是否真正在您的设备上工作。</font><font style="vertical-align: inherit;">我没有任何iPad可以测试它。</font></font></p>

<pre><code>var div1= $("&lt;div/&gt;").appendTo(document.body).width("1in").height("1in").css("position", "absolute");<font></font>
var div2= $("&lt;div/&gt;").appendTo(document.body).width("100%").height("100%").css("position", "absolute");<font></font>
var width= div2.width() / div1.width()<font></font>
var height= div2.height() / div1.height()<font></font>
alert(Math.sqrt(width*width + height*height));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它会弹出一个窗口，您的屏幕尺寸以英寸为单位。</font><font style="vertical-align: inherit;">它似乎可以在我的笔记本电脑上工作，并在市场上以15.4英寸的价格出售笔记本电脑屏幕时返回15.49。</font><font style="vertical-align: inherit;">任何人都可以在iPad上对此进行测试并发表评论吗？</font><font style="vertical-align: inherit;">不要忘记全屏运行它。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">EDIT2：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事实证明，我在其中进行测试的页面有一些冲突的</font></font><a href="http://en.wikipedia.org/wiki/Cascading_Style_Sheets" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我修复了测试代码，使其现在可以正常工作。</font><font style="vertical-align: inherit;">您需要位置：div上的绝对位置，以便可以使用％的高度。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">EDIT3：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我做了一些研究，似乎没有办法真正获得任何设备上的屏幕尺寸。</font><font style="vertical-align: inherit;">这不是操作系统所能知道的。</font><font style="vertical-align: inherit;">当您在CSS中使用现实单位时，实际上只是基于屏幕某些属性的估计。</font><font style="vertical-align: inherit;">不用说这根本不准确。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未经测试，但是它可以播放音频文件，提取背景噪音并计算其“颜色”（频率图），而不是播放音频文件并检查平衡情况。</font><font style="vertical-align: inherit;">如果IPad Mini的麦克风型号与IPad 2不同，则其背景颜色应明显不同，并且某些音频指纹识别技术可能会帮助您确定所使用的设备。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不认为在这种情况下可行并值得麻烦，但我认为</font><font style="vertical-align: inherit;">在某些应用中可以使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景噪音的指纹识别功能</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，例如，告诉您建筑物内的位置。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以随时询问用户？！ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果用户看不到按钮或内容，则为他们提供一种自行管理缩放的方法。</font><font style="vertical-align: inherit;">您总是可以在站点上内置一些缩放按钮，以使内容（文本/按钮）更大或更小。</font><font style="vertical-align: inherit;">（几乎）可以保证此功能适用于任何当前的iPad分辨率，并且可能由苹果决定采用的任何将来的分辨率。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LLEY</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是回答问题，而是问题背后的问题：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的目标是在较小的屏幕上改善用户体验。</font><font style="vertical-align: inherit;">UI控件的外观是其中的一部分。</font><font style="vertical-align: inherit;">UX的另一部分是应用程序的响应方式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您将能够对水龙头做出反应的区域做成足够大的尺寸，以便在iPad Mini上易于使用，同时又将UI控件的视觉表示尺寸减小到足以使iPad在视觉上令人愉悦，那该怎么办？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您收集了不在可视区域中的足够的水龙头，则可以决定以可视方式缩放UI控件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，这也适用于iPad上的大手笔。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这使我想起电影《平衡》中的一句话：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“您会说，从格拉玛顿教士手中拿走武器的最简单方法是什么？”</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“你问他。”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们非常习惯于寻求解决方案，有时，最好问一下。</font><font style="vertical-align: inherit;">（有充分的理由，我们通常不这样做，但这始终是一个选择。）这里的所有建议都很出色，但是一个简单的解决方案可能是让您的程序在启动时询问他们正在使用哪个iPad。 。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这是一个厚脸皮的答案，但我希望这提醒我们，我们不必为所有事情而战。</font><font style="vertical-align: inherit;">（我为下一次投票做好了准备：P）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些例子：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">操作系统安装期间的键盘检测有时无法检测到特定的键盘，因此安装程序必须询问。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Windows询问您连接到的网络是家庭网络还是公用网络。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">计算机无法检测到将要使用它的人，因此它们需要用户名和密码。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">祝您好运-希望您找到了一个很棒的解决方案！</font><font style="vertical-align: inherit;">如果您不这样做，请不要忘记这一点。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不是您提出的问题的答案，但我希望它比说“不要那样做”更有用：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是检测iPad Mini，为什么不检测用户是否很难按一下控件（或：一直按控件的子区域），并增大/缩小控件的大小以适应他们？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要更大控件的用户无论硬件如何均可获得它们。</font><font style="vertical-align: inherit;">不需要更大控件并希望看到更多内容的用户也可以得到该功能。</font><font style="vertical-align: inherit;">这不仅仅是检测硬件，这很简单，而且有些微妙的事情要解决，但是如果仔细地做的话，可能会很好。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要求所有具有iPad2用户代理的用户</font></font><a href="http://howto.cnet.com/8301-11310_39-57507927-285/with-ios-6-you-can-upload-photos-in-safari/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用内置摄像头</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供照片</font><a href="http://howto.cnet.com/8301-11310_39-57507927-285/with-ios-6-you-can-upload-photos-in-safari/"><font style="vertical-align: inherit;">，</font></a><font style="vertical-align: inherit;">并使用</font></font><a href="http://www.w3.org/TR/FileAPI/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML File API</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检测分辨率</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">由于相机的改进，iPad Mini照片将具有更高的分辨率。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以尝试创建一个不可见的canvas元素，然后使用Canvas API将其转换为PNG / JPG。</font><font style="vertical-align: inherit;">我没有任何测试方法，但是</font><font style="vertical-align: inherit;">由于底层的压缩算法和设备的像素密度</font><font style="vertical-align: inherit;">，最终的位</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能会</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有所不同。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony达蒙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，这是检查陀螺仪的好方法。</font><font style="vertical-align: inherit;">您可以轻松地做到这一点</font></font></p>

<p><a href="https://developer.apple.com/documentation/webkitjs/devicemotionevent" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.apple.com/documentation/webkitjs/devicemotionevent</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或类似的东西 </font></font></p>

<pre><code>window.ondevicemotion = function(event) {<font></font>
    if (navigator.platform.indexOf("iPad") != -1 &amp;&amp; window.devicePixelRatio == 1) {<font></font>
        var version = "";<font></font>
        if (event.acceleration) version = "iPad2";<font></font>
        else version="iPad Mini";<font></font>
<font></font>
        alert(version);<font></font>
    }<font></font>
    window.ondevicemotion = null;<font></font>
}​<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有任何iPad可以测试。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony樱</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于微基准测试，在iPad 2上计算大约需要X微秒，在iPad mini上需要大约y秒。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可能不够准确，但是可能会有一些指导说明iPad mini的芯片效率更高。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嗯，iPad 2和iPad Mini的电池尺寸不同。</font></font></p>

<p>If iOS 6 supports it, you can get the current battery level from <code>0.0..1.0</code> using <code>window.navigator.webkitBattery.level</code>. At some level either in hardware or software, that is likely calculated as <code>CurrentLevel / TotalLevel</code>, where both are ints. If so, that will result in a float which is a multiple of <code>1 / TotalLevel</code>. If you take lots of battery level readings from both devices, and calculate <code>battery.level * n</code> you might be able to find a value of n where all the results start to be close to integers, which will give you <code>iPad2TotalLevel</code> and <code>iPadMiniTotalLevel</code>.</p>

<p>If those two numbers are different, and mutually prime, then in production you can calculate <code>battery.level * iPad2TotalLevel</code> and <code>battery.level * iPadMiniTotalLevel</code>. Whichever is closer to an integer will indicate which device is being used.</p>

<p>Sorry about the number of ifs in this answer! Hopefully something better will come along.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，目前看来这是不可能的：</font><a href="http://www.mobilexweb.com/blog/ipad-mini-detection-for-html5-user-agent" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="http://www.mobilexweb.com/blog/ipad-mini-detection-for-html5-user-agent" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.mobilexweb.com/blog/ipad-mini-detection-for-html5-user-agent</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两天前，我在推特上发布了第一个检测到的问题：“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已确认iPad Mini用户代理与iPad 2相同</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”。</font><font style="vertical-align: inherit;">我已经收到数百个答案，它们说用户代理嗅探是一种不好的做法，我们应该检测功能而不是设备等。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，是的，您是对的，但这与问题没有直接关系。</font><font style="vertical-align: inherit;">而且我需要补充第二个坏消息：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有客户端技术也无法进行“特征检测”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个疯狂的尝试，但是iPad 2和iPad mini之间的区别之一是前者没有3轴陀螺仪。</font><font style="vertical-align: inherit;">也许可以使用WebKit设备方向API来查看您可以从中获得什么样的信息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，</font></font><a href="http://developer.apple.com/library/safari/#documentation/SafariDOMAdditions/Reference/DeviceMotionEventClassRef/DeviceMotionEvent/DeviceMotionEvent.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎建议您仅</font></font><code>rotationRate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在设备具有陀螺仪的情况下</font><font style="vertical-align: inherit;">才能获取该</font><font style="vertical-align: inherit;">值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">抱歉，我无法提供有效的POC-我无法使用iPad mini。</font><font style="vertical-align: inherit;">也许对这些定向API有更多了解的人可以在这里提出建议。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimJinJin</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这可能是技术含量较低的解决方案，但是由于我们似乎还没有提出其他建议。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我假设您已经检查了大多数其他设备，因此我认为可能出现以下情况。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以检查所有可能需要特殊CSS /尺寸的最流行设备，如果不匹配，要么假设它是iPad mini，要么问用户？</font></font></p>

<pre><code>// Device checks here<font></font>
...<font></font>
else {<font></font>
  // it would probably be better to make this a nicer popup-thing<font></font>
  var mini = prompt("Are you using a iPad mini? Press yes for a better user experience");<font></font>
  // Store the result for future visits somehow.<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道目前这似乎是一种愚蠢的方法，但是如果我们目前无法确定该设备是iPad mini还是iPad 2，则至少该网站可以用于执行此类操作的iPad mini设备。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您甚至可以使用以下内容：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“为了给您带来最佳的浏览体验，我们会尝试检测您的设备类型以根据您的设备自定义网站。不幸的是，由于局限性，这并非总是可能的，我们目前无法确定您使用的是iPad 2还是iPad迷你通过使用这些方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了获得最佳的浏览体验，请在下面选择要使用的设备。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此选择将被存储以供将来在此设备上访问该网站。</font></font></p>

<pre><code>[] iPad 2 <font></font>
[*] iPad mini<font></font>
[] Ancient blackberry device<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不完全了解您在JavaScript中可以做什么和不能做什么。</font><font style="vertical-align: inherit;">我知道您可以获取用户的IP，但是可以获取用户的mac地址吗？</font><font style="vertical-align: inherit;">iPad2和iPad mini的范围是否有所不同？</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要求用户将iPad从地面几千英尺高处掉下来。</font><font style="vertical-align: inherit;">然后使用内部加速度计测量iPad达到终端速度所花费的时间。</font><font style="vertical-align: inherit;">较大的iPad具有更大的阻力系数，并且比</font></font><a href="http://en.wikipedia.org/wiki/IPad_Mini"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">iPad Mini可以</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在更短的时间内达到终端速度</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一些示例代码，可以帮助您入门。</font></font></p>

<pre><code>function isIPadMini( var timeToReachTerminalVelocity )<font></font>
{<font></font>
    return (timeToReachTerminalVelocity &gt; IPAD_MINI_THRESHOLD);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当苹果公司不可避免地以不同的外形尺寸发布下一个iPad时，您几乎肯定需要重新查看此代码。</font><font style="vertical-align: inherit;">但是，我敢肯定，您将掌握一切，并为每个新版本的iPad维护此技巧。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当右声道和左声道的音量都很高时，播放立体声音频文件并比较加速度计的响应-iPad2具有单声道扬声器，而iPad Mini具有内置立体声扬声器。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要您的帮助来收集数据，请访问</font></font><a href="http://www.intechrity365.com/collectIpadMini2.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此页面，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并帮助我收集有关此疯狂想法的数据。</font><font style="vertical-align: inherit;">我没有iPad mini，所以我真的需要您的帮助</font></font></em></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这是一个可怕的解决方案，但是目前区分iPad Mini和iPad 2的唯一方法是检查其内部版本号，并将每个内部版本号映射到相关设备。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我举一个例子：6.0版iPad mini公开“ </font></font><code>10A406</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">”作为内部版本号，而iPad 2公开“ </font></font><code>10A5376e</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该值可以通过用户代理（</font></font><code>window.navigator.userAgent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">上的正则表达式轻松获得</font><font style="vertical-align: inherit;">；</font><font style="vertical-align: inherit;">该数字以“ </font></font><code>Mobile/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">” </font><font style="vertical-align: inherit;">为前缀</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，这是检测iPad Mini的唯一明确方法。</font><font style="vertical-align: inherit;">我建议采用</font></font><code>viewport</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相关方法（在支持的情况下，使用vh / vw单位）在不同屏幕尺寸上正确显示内容。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋小卤蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong> <a href="http://konstruktors.com/blog/web-design/4396-detect-ipad-mini-javascript/#comment-24726" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些值在创建选项卡时正在报告视口宽度和高度，并且它们在旋转时不会改变，因此</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该方法不能用于设备检测</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在</font><font style="vertical-align: inherit;">iPad Mini和iPad 2上</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">它们中</font><font style="vertical-align: inherit;">的一个</font></font><code>screen.availWidth</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">两个</font><font style="vertical-align: inherit;">，</font></font><code>screen.availHeight</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它们似乎有所不同。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小型平板电脑</font></font></h2>

<pre><code>screen.availWidth = 768<font></font>
screen.availHeight = 1004<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">iPad 2</font></font></h2>

<pre><code>screen.availWidth = 748<font></font>
screen.availHeight = 1024<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源：</font><a href="http://konstruktors.com/blog/web-design/4396-detect-ipad-mini-javascript/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：</font></font><a href="http://konstruktors.com/blog/web-design/4396-detect-ipad-mini-javascript/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//konstruktors.com/blog/web-design/4396-detect-ipad-mini-javascript/</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

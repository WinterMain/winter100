---
layout: question
title:  您如何获得JavaScript时间戳？
date:   2020-03-09T04:49:09.000Z
description: 如何获取JavaScript时间戳？与Unix时间戳类似，即代表当前时间和日期的单个数字。可以是数字或字符串。...
img: 
author: 老丝米亚
category: question
answer: 18
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何获取JavaScript时间戳？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><a href="https://en.wikipedia.org/wiki/Unix_time" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Unix时间戳</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似，</font><font style="vertical-align: inherit;">即代表当前时间和日期的单个数字。</font><font style="vertical-align: inherit;">可以是数字或字符串。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第152篇《您如何获得JavaScript时间戳？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪JinJin西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>more simpler way:</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> timeStamp</span><span class="pun">=</span><span class="pln">event</span><span class="pun">.</span><span class="pln">timestamp </span><span class="pun">||</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">().</span><span class="pln">getTime</span><span class="pun">();</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>For <a href="https://lodash.com/docs#now">lodash</a> and <a href="http://underscorejs.org/#now">underscore</a> users, use <code>_.now</code>.</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> timestamp </span><span class="pun">=</span><span class="pln"> _</span><span class="pun">.</span><span class="pln">now</span><span class="pun">();</span><span class="pln"> </span><span class="com">// in milliseconds</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><a href="http://momentjs.com" rel="noreferrer">Moment.js</a> can abstract away a lot of the pain in dealing with Javascript Dates. </p>

<p>See: <a href="http://momentjs.com/docs/#/displaying/unix-timestamp/" rel="noreferrer">http://momentjs.com/docs/#/displaying/unix-timestamp/</a></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">moment</span><span class="pun">().</span><span class="pln">unix</span><span class="pun">();</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小卤蛋Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>If it is for logging purposes, you can use <strong>ISOString</strong></p>

<p><code>new Date().toISOString()</code></p>

<blockquote>
  <p>"2019-05-18T20:02:36.694Z"</p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚伽罗L</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>If want a basic way to generate a timestamp in Node.js this works well.</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> time </span><span class="pun">=</span><span class="pln"> process</span><span class="pun">.</span><span class="pln">hrtime</span><span class="pun">();</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> timestamp </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Math</span><span class="pun">.</span><span class="pln">round</span><span class="pun">(</span><span class="pln"> time</span><span class="pun">[</span><span class="pln"> </span><span class="lit">0</span><span class="pln"> </span><span class="pun">]</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> </span><span class="lit">1e3</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> time</span><span class="pun">[</span><span class="pln"> </span><span class="lit">1</span><span class="pln"> </span><span class="pun">]</span><span class="pln"> </span><span class="pun">/</span><span class="pln"> </span><span class="lit">1e6</span><span class="pln"> </span><span class="pun">);</span></code></pre>

<p>Our team is using this to bust cache in a localhost environment. The output is <code>/dist/css/global.css?v=245521377</code> where <code>245521377</code> is the timestamp generated by <code>hrtime()</code>. </p>

<p>Hopefully this helps, the methods above can work as well but I found this to be the simplest approach for our needs in Node.js.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">木心</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>This one has a solution : which converts unixtime stamp to tim in js try this</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">(</span><span class="pln">UNIX_timestamp</span><span class="pun">*</span><span class="lit">1000</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> hour </span><span class="pun">=</span><span class="pln"> a</span><span class="pun">.</span><span class="pln">getUTCHours</span><span class="pun">();</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> min </span><span class="pun">=</span><span class="pln"> a</span><span class="pun">.</span><span class="pln">getUTCMinutes</span><span class="pun">();</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> sec </span><span class="pun">=</span><span class="pln"> a</span><span class="pun">.</span><span class="pln">getUTCSeconds</span><span class="pun">();</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋小卤蛋小哥</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Any browsers not supported Date.now, you can use this for get current date time:</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">currentTime </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">.</span><span class="pln">now</span><span class="pun">()</span><span class="pln"> </span><span class="pun">||</span><span class="pln"> </span><span class="pun">+</span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">()</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">江山如画</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="com">// The Current Unix Timestamp</span><span class="pln">
</span><span class="com">// 1443534720 seconds since Jan 01 1970. (UTC)</span><span class="pln">

</span><span class="com">// seconds</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="typ">Math</span><span class="pun">.</span><span class="pln">floor</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">().</span><span class="pln">valueOf</span><span class="pun">()</span><span class="pln"> </span><span class="pun">/</span><span class="pln"> </span><span class="lit">1000</span><span class="pun">));</span><span class="pln"> </span><span class="com">// 1443534720</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="typ">Math</span><span class="pun">.</span><span class="pln">floor</span><span class="pun">(</span><span class="typ">Date</span><span class="pun">.</span><span class="pln">now</span><span class="pun">()</span><span class="pln"> </span><span class="pun">/</span><span class="pln"> </span><span class="lit">1000</span><span class="pun">));</span><span class="pln"> </span><span class="com">// 1443534720</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="typ">Math</span><span class="pun">.</span><span class="pln">floor</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">().</span><span class="pln">getTime</span><span class="pun">()</span><span class="pln"> </span><span class="pun">/</span><span class="pln"> </span><span class="lit">1000</span><span class="pun">));</span><span class="pln"> </span><span class="com">// 1443534720</span><span class="pln">

</span><span class="com">// milliseconds</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="typ">Math</span><span class="pun">.</span><span class="pln">floor</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">().</span><span class="pln">valueOf</span><span class="pun">()));</span><span class="pln"> </span><span class="com">// 1443534720087</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="typ">Math</span><span class="pun">.</span><span class="pln">floor</span><span class="pun">(</span><span class="typ">Date</span><span class="pun">.</span><span class="pln">now</span><span class="pun">()));</span><span class="pln"> </span><span class="com">// 1443534720087</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="typ">Math</span><span class="pun">.</span><span class="pln">floor</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">().</span><span class="pln">getTime</span><span class="pun">()));</span><span class="pln"> </span><span class="com">// 1443534720087</span><span class="pln">

</span><span class="com">// jQuery</span><span class="pln">
</span><span class="com">// seconds</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="typ">Math</span><span class="pun">.</span><span class="pln">floor</span><span class="pun">(</span><span class="pln">$</span><span class="pun">.</span><span class="pln">now</span><span class="pun">()</span><span class="pln"> </span><span class="pun">/</span><span class="pln"> </span><span class="lit">1000</span><span class="pun">));</span><span class="pln"> </span><span class="com">// 1443534720</span><span class="pln">
</span><span class="com">// milliseconds</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">$</span><span class="pun">.</span><span class="pln">now</span><span class="pun">());</span><span class="pln"> </span><span class="com">// 1443534720087</span></code></pre>
<pre class="snippet-code-html lang-html prettyprint prettyprinted" style=""><code><span class="tag">&lt;script</span><span class="pln"> </span><span class="atn">src</span><span class="pun">=</span><span class="atv">"https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"</span><span class="tag">&gt;&lt;/script&gt;</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span> Run code snippet</span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link">Expand snippet</a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif6" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>You can only use </p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="pln">    </span><span class="kwd">var</span><span class="pln"> timestamp </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">().</span><span class="pln">getTime</span><span class="pun">();</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">timestamp</span><span class="pun">);</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span> Run code snippet</span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link">Expand snippet</a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif5" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p>to get the current timestamp. No need to do anything extra.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilJinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Today - 2018.06.27 I provide some time comparison for pure js solutions. This can be useful for people who wanna get/measure time in JS in light/efficient way (eg. for real-time applications like simulations, games etc.)</p>

<p>Tested on MacOs High Sierra 10.13.3 on Chrome 67.0.3396.99 (64-bit), Safari 11.0.3 (13604.5.6), Firefox 59.0.2 (64-bit). On below screenshot I show you results for fastest browser (Safari):</p>

<p><a href="https://i.stack.imgur.com/HaS7h.png" rel="noreferrer"><img src="https://i.stack.imgur.com/HaS7h.png" alt="enter image description here"></a></p>

<p>As I observe the <code>Date.now()</code> was fastest method to get timestamp for all three browsers. Safari has 19.2M operations per second, Firefox 16.1M, Chrome 7.8M. </p>

<p>The <code>new Date()*1</code> was slowest for Chrome (2.8M) and Firefox (2.6M). The <code>Number(new Date())</code> was slowest for Safari (2.9M). </p>

<p><strong>So the winner JS code is <code>Date.now()</code> and fastest browser is Safari (2x faster that chrome! ).</strong> </p>

<p>You can perform test on your machine here: <a href="https://jsperf.com/timestamp-test-x" rel="noreferrer">https://jsperf.com/timestamp-test-x</a>.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小阿飞</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime"><code>Date.getTime()</code></a> method can be used with a little tweak:</p>

<blockquote>
  <p>The value returned by the getTime method is the number of milliseconds
  since 1 January 1970 00:00:00 UTC.</p>
</blockquote>

<p>Divide the result by 1000 to get the Unix timestamp, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor"><code>floor</code></a> if necessary:</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">(</span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">).</span><span class="pln">getTime</span><span class="pun">()</span><span class="pln"> </span><span class="pun">/</span><span class="pln"> </span><span class="lit">1000</span></code></pre>

<hr>

<p><sup>The <code>Date.valueOf()</code> method is functionally equivalent to <code>Date.getTime()</code>, which makes it possible to use arithmetic operators on date object to achieve identical results. In my opinion, this approach affects readability.</sup></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Davaid老丝</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">().</span><span class="pln">valueOf</span><span class="pun">());</span><span class="pln"> </span><span class="com">// returns the number of milliseconds since the epoch</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span> Run code snippet</span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link">Expand snippet</a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif2" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>In addition to the other options, if you want a dateformat ISO, you get can get it directly</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">().</span><span class="pln">toISOString</span><span class="pun">());</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span> Run code snippet</span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link">Expand snippet</a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif3" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><em>jQuery</em> provides <a href="http://api.jquery.com/jQuery.now/" rel="noreferrer">its own method</a> to get the timestamp:</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> timestamp </span><span class="pun">=</span><span class="pln"> $</span><span class="pun">.</span><span class="pln">now</span><span class="pun">();</span></code></pre>

<p><sup>(besides it just implements <code>(new Date).getTime()</code> expression)</sup></p>

<p><strong>REF:</strong> <a href="http://api.jquery.com/jQuery.now/" rel="noreferrer">http://api.jquery.com/jQuery.now/</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> time </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">.</span><span class="pln">now </span><span class="pun">||</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">+</span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">;</span><span class="pln">
</span><span class="pun">};</span><span class="pln">

time</span><span class="pun">();</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> timestamp </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Number</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">());</span><span class="pln"> </span><span class="com">// current time as number</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">文韬武略辛弃疾</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript自时期起以毫秒为单位运行，而大多数其他语言以秒为单位运行。</font><font style="vertical-align: inherit;">您可以以毫秒为单位工作，但是只要您传递一个值来表示PHP，PHP本机功能就可能会失败。</font><font style="vertical-align: inherit;">因此，请确保我始终使用秒，而不是毫秒。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将为您提供Unix时间戳（以秒为单位）：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> unix </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Math</span><span class="pun">.</span><span class="pln">round</span><span class="pun">(+</span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">()/</span><span class="lit">1000</span><span class="pun">);</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将为您提供自纪元以来的毫秒数（不是Unix时间戳）：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> milliseconds </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Date</span><span class="pun">().</span><span class="pln">getTime</span><span class="pun">();</span></code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢这个，因为它很小：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">+</span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Date</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也喜欢这样，因为它很短，并且与现代浏览器兼容，并且有500多人投票认为它更好： </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">Date</span><span class="pun">.</span><span class="pln">now</span><span class="pun">()</span></code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

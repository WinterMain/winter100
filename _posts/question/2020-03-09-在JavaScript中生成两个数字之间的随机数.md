---
layout: question
title:  在JavaScript中生成两个数字之间的随机数
date:   2020-03-09T11:51:45.000Z
description: 有没有一种方法可以在JavaScript中生成指定范围内的随机数（例如1到6：1、2、3、4、5或6）？...
img: 
author: 达蒙理查德
category: question
answer: 15
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以在JavaScript中生成指定范围内的随机数（例如1到6：1、2、3、4、5或6）？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第227篇《在JavaScript中生成两个数字之间的随机数》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Mandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Try using:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function random(min, max) {<font></font>
   return Math.round((Math.random() *( Math.abs(max - min))) + min);<font></font>
}<font></font>
console.log(random(1, 6));</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>This is about nine years late, but <a href="https://randojs.com" rel="nofollow noreferrer">randojs.com</a> makes this a simple one-liner:</p>

<pre><code>rando(1, 6)
</code></pre>

<p>You just need to add this to the head of your html document, and you can do pretty much whatever you want with randomness easily. Random values from arrays, random jquery elements, random properties from objects, and even preventing repetitions if needed.</p>

<pre><code>&lt;script src="https://randojs.com/1.0.0.js"&gt;&lt;/script&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐阿飞</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>to return 1-6 like a dice basically,
return Math.round(Math.random() * 5 + 1);</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I discovered a great new way to do this using ES6 default parameters. It is very nifty since it allows either one argument or two arguments. Here it is:</p>

<pre><code>function random(n, b = 0) {<font></font>
    return Math.random() * (b-n) + n;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>This should work:</p>

<pre><code>const getRandomNum = (min, max) =&gt; Math.floor(Math.random() * (max - min + 1)) + min
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿良</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I was searching random number generator written in TypeScript and I have written this after reading all of the answers, hope It would work for TypeScript coders.</p>

<pre><code>    Rand(min: number, max: number): number {<font></font>
        return (Math.random() * (max - min + 1) | 0) + min;<font></font>
    }   <font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪Sam</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Example</p>

<p>Return a random number between 1 and 10:</p>

<pre><code>Math.floor((Math.random() * 10) + 1);
</code></pre>

<p>The result could be:
    <code>3</code></p>

<p>Try yourself: <a href="http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_random2" rel="noreferrer">here</a></p>

<p>--</p>

<p>or using lodash / undescore:</p>

<p><code>_.random(min, max)</code></p>

<p>Docs:
- <a href="https://lodash.com/docs#random" rel="noreferrer">lodash</a>
- <a href="http://underscorejs.org/#random" rel="noreferrer">undescore</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilJinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues" rel="nofollow noreferrer">Crypto-strong</a> random integer number in range [a,b] (assumption: a &lt; b )</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let rand= (a,b)=&gt; a+(b-a+1)*crypto.getRandomValues(new Uint32Array(1))[0]/2**32|0<font></font>
<font></font>
console.log( rand(1,6) );</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋LEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsfiddle：</font><a href="https://jsfiddle.net/cyGwf/477/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> ://jsfiddle.net/cyGwf/477/</font></font><a href="https://jsfiddle.net/cyGwf/477/" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随机整数</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：要获取</font></font><code>min</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">之间的随机整数</font></font><code>max</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请使用以下代码</font></font></p>

<pre><code>function getRandomInteger(min, max) {<font></font>
  min = Math.ceil(min);<font></font>
  max = Math.floor(max);<font></font>
  return Math.floor(Math.random() * (max - min)) + min;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随机浮点数</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：要获取</font></font><code>min</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">之间的随机浮点数</font></font><code>max</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请使用以下代码</font></font></p>

<pre><code>function getRandomFloat(min, max) {<font></font>
  return Math.random() * (max - min) + min;<font></font>
}<font></font>
</code></pre>

<p>Reference: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random" rel="noreferrer">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他解决方案：</font></font></p>

<ul>
<li><code>(Math.random() * 6 | 0) + 1</code></li>
<li><code>~~(Math.random() * 6) + 1</code></li>
</ul>

<p><a href="https://code.labstack.com/xObK_c4M" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在线尝试</font></font></strong></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var x = 6; // can be any number<font></font>
var rand = Math.floor(Math.random()*x) + 1;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，在</font></font><a href="http://underscorejs.org/#random"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下划线</font></font></a></p>

<pre><code>_.random(min, max)
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>function randomIntFromInterval(min, max) { // min and max included <font></font>
  return Math.floor(Math.random() * (max - min + 1) + min);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它“额外”的作用是允许以1开头的随机间隔。因此，例如，您可以获得10到15之间的随机数。</font><font style="vertical-align: inherit;">灵活性。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamTony</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h1><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Math.random（）</font></font></a></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font><font style="vertical-align: inherit;">介于min（包括）和max（包括）之间</font><font style="vertical-align: inherit;">的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">整数随机数</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>function randomInteger(min, max) {<font></font>
  return Math.floor(Math.random() * (max - min + 1)) + min;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">介于min（包括）和max（</font><strong><font style="vertical-align: inherit;">不</font></strong><font style="vertical-align: inherit;">包括）</font><font style="vertical-align: inherit;">之间的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_number_between_two_values" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何随机数</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<pre><code>function randomNumber(min, max) {<font></font>
  return Math.random() * (max - min) + min;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有用的示例（整数）：</font></font></p>

<pre><code>// 0 -&gt; 10<font></font>
Math.floor(Math.random() * 11);<font></font>
<font></font>
// 1 -&gt; 10<font></font>
Math.floor(Math.random() * 10) + 1;<font></font>
<font></font>
// 5 -&gt; 20<font></font>
Math.floor(Math.random() * 16) + 5;<font></font>
<font></font>
// -10 -&gt; (-2)<font></font>
Math.floor(Math.random() * 9) - 10;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">**总是很值得提醒（Mozilla）：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Math.random（）不提供加密安全的随机数。</font><font style="vertical-align: inherit;">不要将它们用于与安全相关的任何事情。</font><font style="vertical-align: inherit;">改用Web Crypto API，更确切地说，使用window.crypto.getRandomValues（）方法。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天乐樱</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下代码仅在最小值为时才有效</font></font><code>1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">不适用于除以外的最小值</font></font><code>1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要获得1（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">且只有1</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）和6 </font><font style="vertical-align: inherit;">之间的随机整数</font><font style="vertical-align: inherit;">，则应计算：</font></font></p>

<pre><code>Math.floor(Math.random() * 6) + 1  
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪里：  </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1是起始号码    </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">6是可能的结果数（1 +开始</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（6）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -结束</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（1）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
</ul></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

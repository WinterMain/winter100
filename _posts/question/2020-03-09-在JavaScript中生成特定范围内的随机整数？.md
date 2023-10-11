---
layout: question
title:  在JavaScript中生成特定范围内的随机整数？
date:   2020-03-09T11:14:48.000Z
description: 如何在JavaScript中的两个指定变量之间生成随机整数，例如x = 4，y = 8并输出以下任何内容4, 5, 6, 7, 8？...
img: 
author: LEva卡卡西
category: question
answer: 21
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在JavaScript中的两个指定变量之间生成随机整数，例如</font></font><code>x = 4</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>y = 8</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并输出以下任何内容</font></font><code>4, 5, 6, 7, 8</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第218篇《在JavaScript中生成特定范围内的随机整数？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>My method of generating random number between 0 and n, where n &lt;= 10 (n excluded):</p>

<pre><code>Math.floor((Math.random() * 10) % n)
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Tom</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><ul>
<li>random(min,max) generates a random number between min (inclusive) and max (exclusive)</li>
<li><p>Math.floor rounds a number down to the nearest integer</p>

<pre><code>function generateRandomInteger (min, max) { <font></font>
    return Math.floor(random(min,max)) <font></font>
}`<font></font>
</code></pre></li>
</ul>

<p>So to generate a random integer between 4 and 8 inclusive, call the above function with the following arguments:</p>

<pre><code>generateRandomInteger (4,9)
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小欧学姐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I made this function which takes into account options like min, max, exclude (a list of ints to exclude), and seed (in case you want a seeded random generator).</p>

<pre><code>get_random_int = function(args={})<font></font>
{<font></font>
    let def_args =<font></font>
    {<font></font>
        min: 0,<font></font>
        max: 1,<font></font>
        exclude: false,<font></font>
        seed: Math.random<font></font>
    }<font></font>
<font></font>
    args = Object.assign(def_args, args)<font></font>
<font></font>
    let num = Math.floor(args.seed() * (args.max - args.min + 1) + args.min)<font></font>
<font></font>
    if(args.exclude)<font></font>
    {<font></font>
        let diff = args.max - args.min<font></font>
        let n = num<font></font>
<font></font>
        for(let i=0; i&lt;diff*2; i++)<font></font>
        {<font></font>
            if(args.exclude.includes(n))<font></font>
            {<font></font>
                if(n + 1 &lt;= args.max)<font></font>
                {<font></font>
                    n += 1<font></font>
                }<font></font>
<font></font>
                else<font></font>
                {<font></font>
                    n = args.min<font></font>
                }<font></font>
            }<font></font>
<font></font>
            else<font></font>
            {<font></font>
                num = n<font></font>
                break<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
<font></font>
    return num<font></font>
}<font></font>
</code></pre>

<p>It can be used like:</p>

<pre><code>let n = get_random_int<font></font>
(<font></font>
    {<font></font>
        min: 0,<font></font>
        max: some_list.length - 1,<font></font>
        exclude: [3, 6, 5],<font></font>
        seed: my_seed_function<font></font>
    }<font></font>
)<font></font>
</code></pre>

<p>Or more simply:</p>

<pre><code>let n = get_random_int<font></font>
(<font></font>
    {<font></font>
        min: 0,<font></font>
        max: some_list.length - 1<font></font>
    }<font></font>
)<font></font>
</code></pre>

<p>Then you can do:</p>

<pre><code>let item = some_list[n]
</code></pre>

<p>Gist: <a href="https://gist.github.com/madprops/757deb000bdec25776d5036dae58ee6e" rel="nofollow noreferrer">https://gist.github.com/madprops/757deb000bdec25776d5036dae58ee6e</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>/*
 Write a function called <code>randUpTo</code> that accepts a number and returns a 
 random whole number between 0 and that number?
*/</p>

<pre><code>var randUpTo = function(num) {<font></font>
    return Math.floor(Math.random() * (num - 1) + 0);<font></font>
};<font></font>
</code></pre>

<p>/*
 Write a function called <code>randBetween</code> that accepts two numbers 
 representing a range and returns a random whole number between those two 
 numbers.
*/</p>

<pre><code>var randBetween = function (min, max) {<font></font>
    return Math.floor(Math.random() * (max - min - 1)) + min;<font></font>
};<font></font>
</code></pre>

<p>/*
 Write a function called <code>randFromTill</code> that accepts two numbers 
 representing a range and returns a random number between min (inclusive) 
 and max (exclusive).
*/</p>

<pre><code>var randFromTill = function (min, max) {<font></font>
    return Math.random() * (max - min) + min;<font></font>
};<font></font>
</code></pre>

<p>/*
 Write a function called <code>randFromTo</code> that accepts two numbers 
 representing a range and returns a random integer between min (inclusive) 
 and max (inclusive)
*/</p>

<pre><code>var randFromTo = function (min, max) {<font></font>
    return Math.floor(Math.random() * (max - min + 1)) + min;<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near小哥Green</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>This can handle generating upto 20 digit UNIQUE random number</p>

<p><strong>JS</strong></p>

<pre><code>var generatedNumbers = [];<font></font>
<font></font>
function generateRandomNumber(precision) { // precision --&gt; number precision in integer <font></font>
    if (precision &lt;= 20) {<font></font>
        var randomNum = Math.round(Math.random().toFixed(precision) * Math.pow(10, precision));<font></font>
        if (generatedNumbers.indexOf(randomNum) &gt; -1) {<font></font>
            if (generatedNumbers.length == Math.pow(10, precision))<font></font>
                return "Generated all values with this precision";<font></font>
                return generateRandomNumber(precision);<font></font>
        } else {<font></font>
            generatedNumbers.push(randomNum);<font></font>
            return randomNum;<font></font>
        }<font></font>
    } else<font></font>
       return "Number Precision shoould not exceed 20";<font></font>
}<font></font>
generateRandomNumber(1);<font></font>
</code></pre>

<p><a href="https://i.stack.imgur.com/Bb1bo.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/Bb1bo.jpg" alt="enter image description here"></a></p>

<p><a href="http://jsfiddle.net/Nofiden/6ae8up1k/2/" rel="nofollow noreferrer">JsFiddle</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三凯</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>You can you this code snippet,</p>

<pre><code>let randomNumber = function(first,second){<font></font>
let number = Math.floor(Math.random()*Math.floor(second));<font></font>
while(number&lt;first){<font></font>
<font></font>
    number = Math.floor(Math.random()*Math.floor(second));<font></font>
}<font></font>
return number;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGreen</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>this is my take on a random number in a range, as in I wanted to get a random number within a range of base to exponent.  e.g. base = 10, exponent = 2, gives a random number from 0 to 100, ideally, and so on.</p>

<p>if it helps use it, here it is:</p>

<pre><code>// get random number within provided base + exponent<font></font>
// by Goran Biljetina --&gt; 2012<font></font>
<font></font>
function isEmpty(value){<font></font>
    return (typeof value === "undefined" || value === null);<font></font>
}<font></font>
var numSeq = new Array();<font></font>
function add(num,seq){<font></font>
    var toAdd = new Object();<font></font>
     toAdd.num = num;<font></font>
     toAdd.seq = seq;<font></font>
     numSeq[numSeq.length] = toAdd;<font></font>
}<font></font>
function fillNumSeq (num,seq){<font></font>
    var n;<font></font>
    for(i=0;i&lt;=seq;i++){<font></font>
        n = Math.pow(num,i);<font></font>
        add(n,i);<font></font>
    }<font></font>
}<font></font>
function getRandNum(base,exp){<font></font>
    if (isEmpty(base)){<font></font>
        console.log("Specify value for base parameter");<font></font>
    }<font></font>
    if (isEmpty(exp)){<font></font>
        console.log("Specify value for exponent parameter");<font></font>
    }<font></font>
    fillNumSeq(base,exp);<font></font>
    var emax;<font></font>
    var eseq;<font></font>
    var nseed;<font></font>
    var nspan;<font></font>
    emax = (numSeq.length);<font></font>
    eseq = Math.floor(Math.random()*emax)+1;<font></font>
    nseed = numSeq[eseq].num;<font></font>
    nspan = Math.floor((Math.random())*(Math.random()*nseed))+1;<font></font>
    return Math.floor(Math.random()*nspan)+1;<font></font>
}<font></font>
<font></font>
console.log(getRandNum(10,20),numSeq);<font></font>
//testing:<font></font>
//getRandNum(-10,20);<font></font>
//console.log(getRandNum(-10,20),numSeq);<font></font>
//console.log(numSeq);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilJinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>To get <a href="https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues" rel="nofollow noreferrer">crypto-strong</a> random integer number in ragne [x,y] try</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let rand= (x,y)=&gt; x+(y-x+1)*crypto.getRandomValues(new Uint32Array(1))[0]/2**32|0<font></font>
<font></font>
console.log(rand(4,8))</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Jim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Here is an example of a javascript function that can generate a random number of any specified length <strong>without using Math.random():</strong></p>

<pre><code>    function genRandom(length)<font></font>
    {<font></font>
     const t1 = new Date().getMilliseconds();<font></font>
     var min = "1",max = "9";<font></font>
     var result;<font></font>
     var numLength = length;<font></font>
     if (numLength != 0)<font></font>
     {<font></font>
        for (var i = 1; i &lt; numLength; i++)<font></font>
        {<font></font>
           min = min.toString() + "0";<font></font>
           max = max.toString() + "9";<font></font>
        }<font></font>
     } <font></font>
     else<font></font>
     {<font></font>
        min = 0;<font></font>
        max = 0;<font></font>
        return; <font></font>
     }<font></font>
<font></font>
      for (var i = min; i &lt;= max; i++)<font></font>
      {<font></font>
           //Empty Loop<font></font>
      }<font></font>
<font></font>
      const t2 = new Date().getMilliseconds();<font></font>
      console.log(t2);<font></font>
      result = ((max - min)*t1)/t2;<font></font>
      console.log(result);<font></font>
      return result;<font></font>
    }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>    &lt;!DOCTYPE html&gt;<font></font>
&lt;html&gt;<font></font>
    &lt;head&gt;<font></font>
            &lt;meta charset="utf-8" /&gt;<font></font>
    &lt;/head&gt;<font></font>
    &lt;body&gt;<font></font>
        &lt;script&gt;<font></font>
            /*<font></font>
<font></font>
                assuming that window.crypto.getRandomValues is available<font></font>
                the real range would be fron 0 to 1,998 instead of 0 to 2,000<font></font>
                See javascript documentation for explanation<font></font>
                https://developer.mozilla.org/en-US/docs/Web/API/RandomSource/getRandomValues<font></font>
            */<font></font>
            var array = new Uint8Array(2);<font></font>
            window.crypto.getRandomValues(array);<font></font>
            console.log(array[0] + array[1]);<font></font>
<font></font>
        &lt;/script&gt;<font></font>
    &lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p>Uint8Array create a array filled with a number up to 3 digits which would be a maximum of 999. This code is very short.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MonsterKK梅</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Random whole number between lowest and highest:</p>

<pre><code>function randomRange(l,h){<font></font>
  var range = (h-l);<font></font>
  var random = Math.floor(Math.random()*range);<font></font>
  if (random === 0){random+=1;}<font></font>
  return l+random;<font></font>
}<font></font>
</code></pre>

<p>Not the most elegant solution.. but something quick.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I know this question is already answered but my answer could help someone.</p>

<p>I found this simple method on W3Schools:</p>

<pre><code>Math.floor((Math.random() * max) + min);
</code></pre>

<p>Hope this would help someone.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>To get a random number say between 1 and 6, first do:</p>

<pre><code>    0.5 + (Math.random() * ((6 - 1) + 1))
</code></pre>

<p>This multiplies a random number by 6 and then adds 0.5 to it. Next round the number to a positive integer by doing:</p>

<pre><code>    Math.round(0.5 + (Math.random() * ((6 - 1) + 1))
</code></pre>

<p>This round the number to the nearest whole number.</p>

<p>Or to make it more understandable do this:</p>

<pre><code>    var value = 0.5 + (Math.random() * ((6 - 1) + 1))<font></font>
    var roll = Math.round(value);<font></font>
    return roll;<font></font>
</code></pre>

<p>In general the code for doing this using variables is:</p>

<pre><code>    var value = (Min - 0.5) + (Math.random() * ((Max - Min) + 1))<font></font>
    var roll = Math.round(value);<font></font>
    return roll;<font></font>
</code></pre>

<p>The reason for taking away 0.5 from the minimum value is because using the minimum value alone would allow you to get an integer that was one more than your maximum value. By taking away 0.5 from the minimum value you are essentially preventing the maximum value from being rounded up.</p>

<p><strong>Hope that helps.</strong></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村达蒙LEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>For a random integer with a range, try:</p>

<pre><code>function random(minimum, maximum) {<font></font>
  var bool = true;<font></font>
<font></font>
  while (bool) {<font></font>
    var number = (Math.floor(Math.random() * maximum + 1) + minimum);<font></font>
    if (number &gt; 20) {<font></font>
      bool = true;<font></font>
    } else {<font></font>
      bool = false;<font></font>
    }<font></font>
  }<font></font>
<font></font>
  return number;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Stafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong>Use this function to get random numbers between given range</strong></p>

<pre><code>function rnd(min,max){<font></font>
    return Math.floor(Math.random()*(max-min+1)+min );<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A村村</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Here is the MS DotNet Implementation of Random class in javascript-</p>

<pre><code>var Random = (function () {<font></font>
function Random(Seed) {<font></font>
    if (!Seed) {<font></font>
        Seed = this.milliseconds();<font></font>
    }<font></font>
    this.SeedArray = [];<font></font>
    for (var i = 0; i &lt; 56; i++)<font></font>
        this.SeedArray.push(0);<font></font>
    var num = (Seed == -2147483648) ? 2147483647 : Math.abs(Seed);<font></font>
    var num2 = 161803398 - num;<font></font>
    this.SeedArray[55] = num2;<font></font>
    var num3 = 1;<font></font>
    for (var i_1 = 1; i_1 &lt; 55; i_1++) {<font></font>
        var num4 = 21 * i_1 % 55;<font></font>
        this.SeedArray[num4] = num3;<font></font>
        num3 = num2 - num3;<font></font>
        if (num3 &lt; 0) {<font></font>
            num3 += 2147483647;<font></font>
        }<font></font>
        num2 = this.SeedArray[num4];<font></font>
    }<font></font>
    for (var j = 1; j &lt; 5; j++) {<font></font>
        for (var k = 1; k &lt; 56; k++) {<font></font>
            this.SeedArray[k] -= this.SeedArray[1 + (k + 30) % 55];<font></font>
            if (this.SeedArray[k] &lt; 0) {<font></font>
                this.SeedArray[k] += 2147483647;<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
    this.inext = 0;<font></font>
    this.inextp = 21;<font></font>
    Seed = 1;<font></font>
}<font></font>
Random.prototype.milliseconds = function () {<font></font>
    var str = new Date().valueOf().toString();<font></font>
    return parseInt(str.substr(str.length - 6));<font></font>
};<font></font>
Random.prototype.InternalSample = function () {<font></font>
    var num = this.inext;<font></font>
    var num2 = this.inextp;<font></font>
    if (++num &gt;= 56) {<font></font>
        num = 1;<font></font>
    }<font></font>
    if (++num2 &gt;= 56) {<font></font>
        num2 = 1;<font></font>
    }<font></font>
    var num3 = this.SeedArray[num] - this.SeedArray[num2];<font></font>
    if (num3 == 2147483647) {<font></font>
        num3--;<font></font>
    }<font></font>
    if (num3 &lt; 0) {<font></font>
        num3 += 2147483647;<font></font>
    }<font></font>
    this.SeedArray[num] = num3;<font></font>
    this.inext = num;<font></font>
    this.inextp = num2;<font></font>
    return num3;<font></font>
};<font></font>
Random.prototype.Sample = function () {<font></font>
    return this.InternalSample() * 4.6566128752457969E-10;<font></font>
};<font></font>
Random.prototype.GetSampleForLargeRange = function () {<font></font>
    var num = this.InternalSample();<font></font>
    var flag = this.InternalSample() % 2 == 0;<font></font>
    if (flag) {<font></font>
        num = -num;<font></font>
    }<font></font>
    var num2 = num;<font></font>
    num2 += 2147483646.0;<font></font>
    return num2 / 4294967293.0;<font></font>
};<font></font>
Random.prototype.Next = function (minValue, maxValue) {<font></font>
    if (!minValue &amp;&amp; !maxValue)<font></font>
        return this.InternalSample();<font></font>
    var num = maxValue - minValue;<font></font>
    if (num &lt;= 2147483647) {<font></font>
        return parseInt((this.Sample() * num + minValue).toFixed(0));<font></font>
    }<font></font>
    return this.GetSampleForLargeRange() * num + minValue;<font></font>
};<font></font>
Random.prototype.NextDouble = function () {<font></font>
    return this.Sample();<font></font>
};<font></font>
Random.prototype.NextBytes = function (buffer) {<font></font>
    for (var i = 0; i &lt; buffer.length; i++) {<font></font>
        buffer[i] = this.InternalSample() % 256;<font></font>
    }<font></font>
};<font></font>
return Random;<font></font>
}());<font></font>
</code></pre>

<p><strong>Use:</strong></p>

<pre><code>        var r = new Random();<font></font>
        var nextInt = r.Next(1, 100); //returns an integer between range<font></font>
        var nextDbl = r.NextDouble(); //returns a random decimal<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天伽罗宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>If you need variable between 0 and max you can use:</p>

<pre><code>Math.floor(Math.random() *  max);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Return a random number between 1 and 10:</p>

<pre><code>Math.floor((Math.random()*10) + 1); 
</code></pre>

<p>Return a random number between 1 and 100:</p>

<pre><code>Math.floor((Math.random()*100) + 1)
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>function randomRange(min, max) {<font></font>
  return ~~(Math.random() * (max - min + 1)) + min<font></font>
}<font></font>
</code></pre>

<p>Alternative if you are using <strong><a href="http://underscorejs.org/#random">Underscore.js</a></strong> you can use</p>

<pre><code>_.random(min, max)
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green达蒙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h1><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Math.random（）</font></font></a></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发人员网络文档中：</font></font></p>

<pre><code>// Returns a random integer between min (include) and max (include)<font></font>
<font></font>
Math.floor(Math.random() * (max - min + 1)) + min;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有用的例子：</font></font></p>

<pre><code>// 0 - 10<font></font>
Math.floor(Math.random() * 11);<font></font>
<font></font>
// 1 - 10<font></font>
Math.floor(Math.random() * 10) + 1;<font></font>
<font></font>
// 5 - 20<font></font>
Math.floor(Math.random() * 16) + 5;<font></font>
<font></font>
// -10 - (-2)<font></font>
Math.floor(Math.random() * 9) - 10;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>

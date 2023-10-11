---
layout: question
title:  从JavaScript数组获取随机值
date:   2020-03-11T03:21:32.000Z
description: 考虑：var myArray = \['January', 'February', 'March'\];    如何使用JavaScript从此数组...
img: 
author: 卡卡西卡卡西
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑：</font></font></p>

<pre><code>var myArray = ['January', 'February', 'March'];    
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用JavaScript从此数组中选择随机值？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第594篇《从JavaScript数组获取随机值》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个如何做的例子：</font></font></p>

<pre><code>$scope.ctx.skills = data.result.skills;<font></font>
    $scope.praiseTextArray = [<font></font>
    "Hooray",<font></font>
    "You\'re ready to move to a new skill", <font></font>
    "Yahoo! You completed a problem", <font></font>
    "You\'re doing great",  <font></font>
    "You succeeded", <font></font>
    "That was a brave effort trying new problems", <font></font>
    "Your brain was working hard",<font></font>
    "All your hard work is paying off",<font></font>
    "Very nice job!, Let\'s see what you can do next",<font></font>
    "Well done",<font></font>
    "That was excellent work",<font></font>
    "Awesome job",<font></font>
    "You must feel good about doing such a great job",<font></font>
    "Right on",<font></font>
    "Great thinking",<font></font>
    "Wonderful work",<font></font>
    "You were right on top of that one",<font></font>
    "Beautiful job",<font></font>
    "Way to go",<font></font>
    "Sensational effort"<font></font>
  ];<font></font>
<font></font>
  $scope.praiseTextWord = $scope.praiseTextArray[Math.floor(Math.random()*$scope.praiseTextArray.length)];<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村路易</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为，与其乱搞原型或及时声明它，不如将其暴露在窗口中：</font></font></p>

<pre><code>window.choice = function() {<font></font>
  if (!this.length || this.length == 0) return;<font></font>
  if (this.length == 1) return this[0];<font></font>
  return this[Math.floor(Math.random()*this.length)];<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以在应用中的任何位置调用它，如下所示：</font></font></p>

<pre><code>var rand = window.choice.call(array)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样您仍然可以</font></font><code>for(x in array)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">循环</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green老丝Itachi</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这类似于@Jacob Relkin的解决方案，但比它更笼统：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是ES2015：</font></font></p>

<pre><code>const randomChoice = arr =&gt; {<font></font>
    const randIndex = Math.floor(Math.random() * arr.length);<font></font>
    return arr[randIndex];<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该代码的工作方式是选择一个介于0和数组长度之间的随机数，然后返回该索引处的项目。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">递归的独立函数，可以返回任意数量的项（与</font></font><a href="https://lodash.com/docs/4.17.4#sampleSize" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">lodash.sampleSize</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相同</font><font style="vertical-align: inherit;">）：</font></font></p>

<pre><code>function getRandomElementsFromArray(array, numberOfRandomElementsToExtract = 1) {<font></font>
    const elements = [];<font></font>
<font></font>
    function getRandomElement(arr) {<font></font>
        if (elements.length &lt; numberOfRandomElementsToExtract) {<font></font>
            const index = Math.floor(Math.random() * arr.length)<font></font>
            const element = arr.splice(index, 1)[0];<font></font>
<font></font>
            elements.push(element)<font></font>
<font></font>
            return getRandomElement(arr)<font></font>
        } else {<font></font>
            return elements<font></font>
        }<font></font>
    }<font></font>
<font></font>
    return getRandomElement([...array])<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三古一神奇</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><code>~~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">速度比快得多</font></font><code>Math.Floor()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此在使用UI元素生成输出时进行性能优化时，就可以</font></font><code>~~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">赢得比赛。</font></font><a href="https://coderwall.com/p/9b6ksa/is-faster-than-math-floor" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多信息</font></font></a></p>

<pre><code>var rand = myArray[~~(Math.random() * myArray.length)];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果您知道该数组将拥有数百万个元素，那么您可能需要重新考虑按位运算符和</font></font><code>Math.Floor()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为按位运算符对大量数字的行为很奇怪。</font><font style="vertical-align: inherit;">参见下面的示例，对输出进行解释。</font></font><a href="https://www.bendangelo.me/javascript/2015/01/21/why-i-stopped-using-bitwise-to-round.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多信息</font></font></a></p>

<pre><code>var number = Math.floor(14444323231.2); // =&gt; 14444323231<font></font>
var number = 14444323231.2 | 0; // =&gt; 1559421343<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry泡芙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您要选择与上次不同的随机项目（不是随机的，但仍然是常见要求）...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以@Markus的答案为基础，我们可以添加另一个原型函数：</font></font></p>

<pre><code>Array.prototype.randomDiffElement = function(last) {<font></font>
   if (this.length == 0) {<font></font>
      return;<font></font>
   } else if (this.length == 1) {<font></font>
      return this[0];<font></font>
   } else {<font></font>
      var num = 0;<font></font>
      do {<font></font>
         num = Math.floor(Math.random() * this.length);<font></font>
      } while (this[num] == last);<font></font>
      return this[num];<font></font>
   }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并像这样实现：</font></font></p>

<pre><code>var myRandomDiffElement = myArray.randomDiffElement(lastRandomElement)
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原型法</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果计划大量获取随机值，则可能需要为其定义一个函数。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，将其放在您的代码中：</font></font></p>

<pre><code>Array.prototype.sample = function(){<font></font>
  return this[Math.floor(Math.random()*this.length)];<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在：</font></font></p>

<pre><code>[1,2,3,4].sample() //=&gt; a random element
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="https://creativecommons.org/publicdomain/zero/1.0/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CC0 1.0许可证</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的条款向公共领域发布的代码</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green蛋蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个简单的单线</font></font></p>

<pre><code>const randomElement = array[Math.floor(Math.random() * array.length)];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];<font></font>
const randomMonth = months[Math.floor(Math.random() * months.length)];<font></font>
<font></font>
console.log("random month =&gt;", randomMonth);</code></pre>
</div>
</div>
<p></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>

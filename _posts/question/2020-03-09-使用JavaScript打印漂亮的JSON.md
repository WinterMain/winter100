---
layout: question
title:  使用JavaScript打印漂亮的JSON
date:   2020-03-09T09:55:32.000Z
description: 如何以易于阅读的格式（对人类读者而言）显示JSON？我主要是在寻找缩进和空格，甚至可能是颜色/字体样式/等等。...
img: 
author: 十三西里GO
category: question
answer: 12
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何以易于阅读的格式（对人类读者而言）显示JSON？</font><font style="vertical-align: inherit;">我主要是在寻找缩进和空格，甚至可能是颜色/字体样式/等等。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第191篇《使用JavaScript打印漂亮的JSON》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;!-- here is a complete example pretty print with more space between lines--&gt;<font></font>
&lt;!-- be sure to pass a json string not a json object --&gt;<font></font>
&lt;!-- use line-height to increase or decrease spacing between json lines --&gt;<font></font>
<font></font>
&lt;style  type="text/css"&gt;<font></font>
.preJsonTxt{<font></font>
  font-size: 18px;<font></font>
  text-overflow: ellipsis;<font></font>
  overflow: hidden;<font></font>
  line-height: 200%;<font></font>
}<font></font>
.boxedIn{<font></font>
  border: 1px solid black;<font></font>
  margin: 20px;<font></font>
  padding: 20px;<font></font>
}<font></font>
&lt;/style&gt;<font></font>
<font></font>
&lt;div class="boxedIn"&gt;<font></font>
    &lt;h3&gt;Configuration Parameters&lt;/h3&gt;<font></font>
    &lt;pre id="jsonCfgParams" class="preJsonTxt"&gt;{{ cfgParams }}&lt;/pre&gt;<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;script language="JavaScript"&gt;<font></font>
$( document ).ready(function()<font></font>
{<font></font>
     $(formatJson);<font></font>
<font></font>
     &lt;!-- this will do a pretty print on the json cfg params      --&gt;<font></font>
     function formatJson() {<font></font>
         var element = $("#jsonCfgParams");<font></font>
         var obj = JSON.parse(element.text());<font></font>
        element.html(JSON.stringify(obj, undefined, 2));<font></font>
     }<font></font>
});<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议使用</font></font><strong><a href="https://highlightjs.org" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HighlightJS</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接受答案</font><strong><font style="vertical-align: inherit;">相同的原理</font></strong><font style="vertical-align: inherit;">，但也适用于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">许多其他语言</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并具有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">许多预定义的配色方案</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果使用</font></font><a href="http://requirejs.org/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RequireJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以使用以下命令生成兼容模块</font></font></p>

<pre><code>python3 tools/build.py -tamd json xml &lt;specify other language here&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成依赖于Python3和Java。</font><font style="vertical-align: inherit;">添加</font></font><code>-n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以生成非缩小版本。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是不使用本机功能即可进行打印的方法。</font></font></p>

<pre><code>function pretty(ob, lvl = 0) {<font></font>
<font></font>
  let temp = [];<font></font>
<font></font>
  if(typeof ob === "object"){<font></font>
    for(let x in ob) {<font></font>
      if(ob.hasOwnProperty(x)) {<font></font>
        temp.push( getTabs(lvl+1) + x + ":" + pretty(ob[x], lvl+1) );<font></font>
      }<font></font>
    }<font></font>
    return "{\n"+ temp.join(",\n") +"\n" + getTabs(lvl) + "}";<font></font>
  }<font></font>
  else {<font></font>
    return ob;<font></font>
  }<font></font>
<font></font>
}<font></font>
<font></font>
function getTabs(n) {<font></font>
  let c = 0, res = "";<font></font>
  while(c++ &lt; n)<font></font>
    res+="\t";<font></font>
  return res;<font></font>
}<font></font>
<font></font>
let obj = {a: {b: 2}, x: {y: 3}};<font></font>
console.log(pretty(obj));<font></font>
<font></font>
/*<font></font>
  {<font></font>
    a: {<font></font>
      b: 2<font></font>
    },<font></font>
    x: {<font></font>
      y: 3<font></font>
    }<font></font>
  }<font></font>
*/<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在寻找一个漂亮的库来美化网页上的json ...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Prism.js相当不错。</font></font></p>

<p><a href="http://prismjs.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://prismjs.com/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现使用JSON.stringify（obj，undefined，2）来获得缩进，然后使用棱镜来添加主题是一种很好的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要通过ajax调用加载JSON，则可以运行Prism的一种实用程序方法来美化</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>Prism.highlightAll()
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是用React编写的一个简单的JSON格式/颜色组件：</font></font></p>

<pre><code>const HighlightedJSON = ({ json }: Object) =&gt; {<font></font>
  const highlightedJSON = jsonObj =&gt;<font></font>
    Object.keys(jsonObj).map(key =&gt; {<font></font>
      const value = jsonObj[key];<font></font>
      let valueType = typeof value;<font></font>
      const isSimpleValue =<font></font>
        ["string", "number", "boolean"].includes(valueType) || !value;<font></font>
      if (isSimpleValue &amp;&amp; valueType === "object") {<font></font>
        valueType = "null";<font></font>
      }<font></font>
      return (<font></font>
        &lt;div key={key} className="line"&gt;<font></font>
          &lt;span className="key"&gt;{key}:&lt;/span&gt;<font></font>
          {isSimpleValue ? (<font></font>
            &lt;span className={valueType}&gt;{`${value}`}&lt;/span&gt;<font></font>
          ) : (<font></font>
            highlightedJSON(value)<font></font>
          )}<font></font>
        &lt;/div&gt;<font></font>
      );<font></font>
    });<font></font>
  return &lt;div className="json"&gt;{highlightedJSON(json)}&lt;/div&gt;;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到它在此CodePen中工作：</font><a href="https://codepen.io/benshope/pen/BxVpjo" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> ://codepen.io/benshope/pen/BxVpjo
</font></font><a href="https://codepen.io/benshope/pen/BxVpjo" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望有帮助！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝村村</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>JSON.stringify(your object, null, 2)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
第二个参数用作替换函数，该函数使用key和Val作为参数。如果要在JSON对象中进行修改，</font><font style="vertical-align: inherit;">可以使用</font><font style="vertical-align: inherit;">第二个参数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多参考：</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云前端西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Douglas Crockford在JavaScript库中的JSON将通过stringify方法漂亮地打印JSON。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能还会发现以下问题的答案很有用：</font></font><a href="https://stackoverflow.com/questions/352098/how-to-pretty-print-json-script"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在（unix）shell脚本中漂亮地打印JSON？</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无伽罗阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">效果很好： </font></font></p>

<pre><code>console.table()
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处阅读更多信息：</font><a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Console/table" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Console/table" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/pt-BR/docs/Web/API/Console/table</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出于调试目的，我使用：</font></font></p>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">console.debug（“％o”，data）;
</font></font></pre>

<ul>
<li><a href="https://getfirebug.com/wiki/index.php/Console_API"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://getfirebug.com/wiki/index.php/Console_API</font></font></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/DOM/console"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/DOM/console</font></font></a></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Mandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>console.dir()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是的快捷方式</font></font><code>console.log(util.inspect())</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（唯一的区别是它绕过了</font></font><code>inspect()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在对象上定义的</font><font style="vertical-align: inherit;">任何自定义</font><font style="vertical-align: inherit;">函数。）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法高亮显示</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">智能缩进</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从键中删除引号，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使输出尽可能漂亮。</font></font></p>

<pre><code>const object = JSON.parse(jsonString)<font></font>
<font></font>
console.dir(object, {depth: null, colors: true})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于命令行：</font></font></p>

<p><code>cat package.json | node -e "process.stdin.pipe(new stream.Writable({write: chunk =&gt; console.dir(JSON.parse(chunk), {depth: null, colors: true})}))"</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小小神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font></font><a href="https://chrome.google.com/extensions/detail/chklaanhfefbnpoihckbnefhakgolnmc" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSONView Chrome扩展程序</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（它看起来很漂亮：）：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：添加 </font></font><code>jsonreport.js</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还发布了一个在线的独立JSON漂亮打印查看器jsonreport.js，该查看器提供了人类可读的HTML5报告，可用于查看任何JSON数据。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在“ </font></font><em><a href="https://github.com/ServiceStack/ServiceStack/wiki/HTML5ReportFormat" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新JavaScript HTML5报告格式”中</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读有关该格式的更多信息</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙阳光乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var jsonObj = {"streetLabel": "Avenue Anatole France", "city": "Paris 07",  "postalCode": "75007", "countryCode": "FRA",  "countryLabel": "France" };<font></font>
<font></font>
document.getElementById("result-before").innerHTML = JSON.stringify(jsonObj);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果以HTML显示，则应添加一个栏杆 </font></font><code>&lt;pre&gt;&lt;/pre&gt;</code></p>

<pre><code>document.getElementById("result-after").innerHTML = "&lt;pre&gt;"+JSON.stringify(jsonObj,undefined, 2) +"&lt;/pre&gt;"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="false" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var jsonObj = {"streetLabel": "Avenue Anatole France", "city": "Paris 07",  "postalCode": "75007", "countryCode": "FRA",  "countryLabel": "France" };<font></font>
<font></font>
document.getElementById("result-before").innerHTML = JSON.stringify(jsonObj);<font></font>
<font></font>
document.getElementById("result-after").innerHTML = "&lt;pre&gt;"+JSON.stringify(jsonObj,undefined, 2) +"&lt;/pre&gt;"</code></pre>
<pre class="snippet-code-css lang-css prettyprint-override"><code>div { float:left; clear:both; margin: 1em 0; }</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div id="result-before"&gt;&lt;/div&gt;<font></font>
&lt;div id="result-after"&gt;&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>

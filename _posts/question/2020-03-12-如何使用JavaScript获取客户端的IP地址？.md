---
layout: question
title:  如何使用JavaScript获取客户端的IP地址？
date:   2020-03-12T06:32:14.000Z
description:                                                                          ...
img: 
author: 神无Green
category: question
answer: 18
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLock" width="18" height="18" viewBox="0 0 18 18"><path d="M16 9a2 2 0 0 0-2-2V6A5 5 0 0 0 4 6v1a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V9zm-7 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.1-7H5.9V6a3.1 3.1 0 0 1 6.2 0v1z"></path></svg>
                        </div>
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题的答案是</font></font><a href="/help/privileges/edit-community-wiki"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">社区的努力</font></font></a></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">编辑现有答案以改善此职位。</font><font style="vertical-align: inherit;">它目前不接受新的答案或互动。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要以某种方式使用JavaScript检索客户端的IP地址；</font><font style="vertical-align: inherit;">没有服务器端代码，甚至没有SSI。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，我不反对使用免费的第三方脚本/服务。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>    $.getJSON("http://jsonip.com?callback=?", function (data) {<font></font>
        alert("Your ip address: " + data.ip);<font></font>
    });<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小小十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先是</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际答案</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不可能仅使用客户端执行的代码来找到您自己的IP地址。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，您可以仅对</font></font><a href="https://api.muctool.de/whois" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://api.muctool.de/whois</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行GET </font><font style="vertical-align: inherit;">并收到类似获取客户端IP地址的信息</font></font></p>

<pre><code>{<font></font>
"ip": "88.217.152.15",<font></font>
"city": "Munich",<font></font>
"isp": "M-net Telekommunikations GmbH",<font></font>
"country": "Germany",<font></font>
"countryIso": "DE",<font></font>
"postalCode": "80469",<font></font>
"subdivisionIso": "BY",<font></font>
"timeZone": "Europe/Berlin",<font></font>
"cityGeonameId": 2867714,<font></font>
"countryGeonameId": 2921044,<font></font>
"subdivisionGeonameId": 2951839,<font></font>
"ispId": 8767,<font></font>
"latitude": 48.1299,<font></font>
"longitude": 11.5732,<font></font>
"fingerprint": "61c5880ee234d66bded68be14c0f44236f024cc12efb6db56e4031795f5dc4c4",<font></font>
"session": "69c2c032a88fcd5e9d02d0dd6a5080e27d5aafc374a06e51a86fec101508dfd3",<font></font>
"fraud": 0.024,<font></font>
"tor": false<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Tony古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用客户端可以调用的Flash对象，完全在客户端执行此操作，并且大多数情况下可以在JavaScript中执行。</font><font style="vertical-align: inherit;">Flash </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">访问本地计算机的IP地址，这可能不是很有用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam蛋蛋Itachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实没有可靠的方法来获取客户端计算机的IP地址。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这经历了一些可能性。</font><font style="vertical-align: inherit;">如果用户具有多个接口，则使用Java的代码将中断。</font></font></p>

<p><a href="http://nanoagent.blogspot.com/2006/09/how-to-find-evaluate-remoteaddrclients.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://nanoagent.blogspot.com/2006/09/how-to-find-evaluate-remoteaddrclients.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从这里查看其他答案，听起来您可能想要获取客户端的公共IP地址，该地址可能是他们用来连接到互联网的路由器的地址。</font><font style="vertical-align: inherit;">这里的许多其他答案都在谈论这一点。</font><font style="vertical-align: inherit;">我建议创建并托管自己的服务器端页面，以接收请求并使用IP地址进行响应，而不是依赖于可能会或可能不会继续工作的其他人的服务。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenSamA</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://ipdata.co?utm_campaign=stackoverflow-answer-391979&amp;utm_medium=answer&amp;utm_source=stackoverflow" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ipdata.co</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该API还提供地理位置数据，并具有10个全局端点，每个端点每天可以处理超过800M个请求！</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此答案使用的“测试” API密钥非常有限，仅用于测试几个调用。</font></font><a href="https://ipdata.co?utm_campaign=stackoverflow-answer-391979-free-plan-cta&amp;utm_medium=answer&amp;utm_source=stackoverflow" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注册</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您自己的免费API密钥，每天最多可获得1500个开发请求。</font></font></p>
</blockquote>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>$.get("https://api.ipdata.co?api-key=test", function (response) {<font></font>
    $("#response").html(response.ip);<font></font>
}, "jsonp");</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"&gt;&lt;/script&gt;<font></font>
&lt;pre id="response"&gt;&lt;/pre&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门猴子</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我非常喜欢，</font></font><a href="https://www.ipify.org/" rel="noreferrer"><code>api.ipify.org</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它同时支持HTTP和HTTPS。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是一些</font></font><code>api.ipify.org</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用jQuery </font><font style="vertical-align: inherit;">获取IP的示例</font><font style="vertical-align: inherit;">。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过HTTPS的JSON格式</font></font></h3>

<pre><code>https://api.ipify.org?format=json
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>$.getJSON("https://api.ipify.org/?format=json", function(e) {<font></font>
    alert(e.ip);<font></font>
});</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"&gt;&lt;/script&gt;</code></pre>
</div>
</div>
<p></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过HTTP的JSON格式</font></font></h3>

<pre><code>http://api.ipify.org?format=json
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>$.getJSON("http://api.ipify.org/?format=json", function(e) {<font></font>
    alert(e.ip);<font></font>
});</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"&gt;&lt;/script&gt;</code></pre>
</div>
</div>
<p></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过HTTPS的文本格式</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不希望在JSON中使用它，那么还会通过HTTPS提供纯文本响应</font></font></p>

<pre><code>https://api.ipify.org
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过HTTP的文本格式</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有通过HTTP的明文响应</font></font></p>

<pre><code>http://api.ipify.org
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小神奇</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><a href="http://ip.codehelper.io"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript / jQuery获取客户端的IP地址和位置</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（国家/地区，城市）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需要将带有“ src”链接的标签嵌入服务器。</font><font style="vertical-align: inherit;">服务器将返回“ codehelper_ip”作为对象/ JSON，您可以立即使用它。</font></font></p>

<pre><code>// First, embed this script in your head or at bottom of the page.<font></font>
&lt;script language="Javascript" src="http://www.codehelper.io/api/ips/?js"&gt;&lt;/script&gt;<font></font>
// You can use it<font></font>
&lt;script language="Javascript"&gt;<font></font>
    alert(codehelper_ip.IP);<font></font>
    alert(codehelper_ip.Country);<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息，请</font></font><a href="http://ip.codehelper.io"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见Javascript Detect Real IP Address Plus Country</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是jQUery，则可以尝试：</font></font></p>

<pre><code>console.log(codehelper_ip); 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将向您显示有关返回对象的更多信息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想要回调函数，请尝试以下操作：</font></font></p>

<pre><code>// First, embed this script in your head or at bottom of the page.<font></font>
&lt;script language="Javascript" src="http://www.codehelper.io/api/ips/?callback=yourcallback"&gt;&lt;/script&gt;<font></font>
// You can use it<font></font>
&lt;script language="Javascript"&gt;<font></font>
    function yourcallback(json) {<font></font>
       alert(json.IP);<font></font>
     }<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非您使用某种外部服务，否则通常是不可能的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村宝儿Itachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，我偏离了这个问题，但是今天我有类似的需求，尽管我无法使用Javascript从客户端找到ID，但是我做了以下工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在服务器端：-</font></font></p>

<pre><code>&lt;div style="display:none;visibility:hidden" id="uip"&gt;&lt;%= Request.UserHostAddress %&gt;&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用JavaScript</font></font></p>

<pre><code>var ip = $get("uip").innerHTML;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用ASP.Net Ajax，但是可以使用getElementById代替$ get（）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发生的是，我在页面上隐藏了div元素，并从服务器呈现了用户的IP。</font><font style="vertical-align: inherit;">比起Java，我只是加载了那个值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能对像您这样有类似要求的人（像我一样，但我还没有弄清楚）有帮助。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">干杯!</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无JimEva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="http://userinfo.io"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">userinfo.io</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> javascript库。</font></font></p>

<pre><code>&lt;script type="text/javascript" src="userinfo.0.0.1.min.js"&gt;&lt;/script&gt;<font></font>
<font></font>
UserInfo.getInfo(function(data) {<font></font>
  alert(data.ip_address);<font></font>
}, function(err) {<font></font>
  // Do something with the error<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以使用requirejs加载脚本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它会为您提供访问者的IP地址，以及有关其位置（国家，城市等）的一些数据。</font><font style="vertical-align: inherit;">它基于maxmind geoip数据库。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免责声明：我写了这个库</font></font></em></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过使用Smart-IP.net </font></font><a href="http://smart-ip.net/geoip-api" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Geo-IP API</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如，通过使用jQuery：</font></font></p>

<pre><code>$(document).ready( function() {<font></font>
    $.getJSON( "http://smart-ip.net/geoip-json?callback=?",<font></font>
        function(data){<font></font>
            alert( data.host);<font></font>
        }<font></font>
    );<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Tony</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font><font style="vertical-align: inherit;">为此</font><font style="vertical-align: inherit;">使用我的服务</font></font><a href="http://ipinfo.io" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://ipinfo.io</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将为您提供客户端IP，主机名，地理位置信息和网络所有者。</font><font style="vertical-align: inherit;">这是一个记录IP的简单示例：</font></font></p>

<pre><code>$.get("http://ipinfo.io", function(response) {<font></font>
    console.log(response.ip);<font></font>
}, "jsonp");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个更详细的JSFiddle示例，该示例还打印了完整的响应信息，因此您可以看到所有可用的详细信息：</font><a href="http://jsfiddle.net/zK5FN/2/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/zK5FN/2/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/zK5FN/2/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">别再看了</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看</font></font><a href="http://www.ipify.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.ipify.org/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据他们：</font></font></p>

<blockquote>
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无限制</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用它</font><font style="vertical-align: inherit;">（即使您每分钟执行数百万个请求）。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ipify是完全开源的（请查看</font></font><a href="https://github.com/rdegges/ipify-api" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GitHub存储库</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></li>
  </ul>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个有效的JS示例（而不是想知道为什么这个答案投票这么少，请自己尝试一下以查看实际效果）：</font></font></p>

<pre><code>&lt;script&gt;<font></font>
function getIP(json) {<font></font>
  alert("My public IP address is: " + json.ip);<font></font>
}<font></font>
&lt;/script&gt;<font></font>
&lt;script src="https://api.ipify.org?format=jsonp&amp;callback=getIP"&gt;&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">太懒于复制/粘贴？</font><font style="vertical-align: inherit;">我喜欢。</font></font><a href="http://jsbin.com/bajubacaju/edit?html,output" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个演示</font></font></strong></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">懒得点击？ </font></font><code>:O</code></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font><em><font style="vertical-align: inherit;">在运行演示之前</font></em><strong><font style="vertical-align: inherit;">请</font></strong></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭Adblock Plus / uBlock＆co ..否则，它将无法正常工作。</font></font></em></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">与IPify团队</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无关</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我只是认为有人为一般利益提供这样的服务真是太荒谬了。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Itachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你不能 </font><font style="vertical-align: inherit;">您必须询问服务器。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的页面中包含以下代码： </font></font><code>&lt;script type="text/javascript" src="http://l2.io/ip.js"&gt;&lt;/script&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多文档</font></font><a href="http://l2.io" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Itachi理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以对hostip.info或类似服务进行ajax调用...</font></font></p>

<pre><code>function myIP() {<font></font>
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();<font></font>
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");<font></font>
<font></font>
    xmlhttp.open("GET","http://api.hostip.info/get_html.php",false);<font></font>
    xmlhttp.send();<font></font>
<font></font>
    hostipInfo = xmlhttp.responseText.split("\n");<font></font>
<font></font>
    for (i=0; hostipInfo.length &gt;= i; i++) {<font></font>
        ipAddress = hostipInfo[i].split(":");<font></font>
        if ( ipAddress[0] == "IP" ) return ipAddress[1];<font></font>
    }<font></font>
<font></font>
    return false;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，地理定位信息会在同一调用中返回。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过JSONP通过服务器端进行中继</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在搜寻时找到它的同时，在SO上找到了它。</font></font><a href="https://stackoverflow.com/questions/102605/can-i-lookup-the-ip-address-of-a-hostname-from-javascript"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以使用客户端Javascript执行DNS查找（从主机名到IP地址）吗？</font></font></a></p>

<pre><code>&lt;script type="application/javascript"&gt;<font></font>
    function getip(json){<font></font>
      alert(json.ip); // alerts the ip address<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
<font></font>
&lt;script type="application/javascript" src="http://www.telize.com/jsonip?callback=getip"&gt;&lt;/script&gt;<font></font>
</code></pre>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> telize.com API已于</font></font><a href="http://www.cambus.net/adventures-in-running-a-free-public-api/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2015年11月15日</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">永久</font><a href="http://www.cambus.net/adventures-in-running-a-free-public-api/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">关闭</font></a><font style="vertical-align: inherit;">。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁西门</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><blockquote><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个</font></font></blockquote>

<pre><code>$.get("http://ipinfo.io", function(response) {<font></font>
    alert(response.ip);<font></font>
}, "jsonp");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>$(document).ready(function () {<font></font>
    $.getJSON("http://jsonip.com/?callback=?", function (data) {<font></font>
        console.log(data);<font></font>
        alert(data.ip);<font></font>
    });<font></font>
});<font></font>
</code></pre>

<p><a href="http://jsfiddle.net/rBL3D/79/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

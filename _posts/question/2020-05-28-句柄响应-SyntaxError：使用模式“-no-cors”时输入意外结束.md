---
layout: question
title:  句柄响应-SyntaxError：使用模式“ no-cors”时输入意外结束
date:   2020-05-28T07:18:44.000Z
description: 我尝试了对REST-API的ReactJS提取调用，并想处理响应。该呼叫有效，我得到响应，我可以在Chrome Dev Tools中看到该响应：fun...
img: 
author: 千羽
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试了对REST-API的ReactJS提取调用，并想处理响应。</font><font style="vertical-align: inherit;">该呼叫有效，我得到响应，我可以在Chrome Dev Tools中看到该响应：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> getAllCourses</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
fetch</span><span class="pun">(</span><span class="str">'http://localhost:8080/course'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    method</span><span class="pun">:</span><span class="pln"> </span><span class="str">'POST'</span><span class="pun">,</span><span class="pln">
    mode</span><span class="pun">:</span><span class="pln"> </span><span class="str">'no-cors'</span><span class="pun">,</span><span class="pln">
    credentials</span><span class="pun">:</span><span class="pln"> </span><span class="str">'same-origin'</span><span class="pun">,</span><span class="pln">
    headers</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="str">'Accept'</span><span class="pun">:</span><span class="pln"> </span><span class="str">'application/json'</span><span class="pun">,</span><span class="pln">
        </span><span class="str">'Content-Type'</span><span class="pun">:</span><span class="pln"> </span><span class="str">'application/json'</span><span class="pun">,</span><span class="pln">
    </span><span class="pun">},</span><span class="pln">
    body</span><span class="pun">:</span><span class="pln"> JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">({</span><span class="pln">
        objectClass</span><span class="pun">:</span><span class="pln"> </span><span class="str">'course'</span><span class="pun">,</span><span class="pln">
        crud</span><span class="pun">:</span><span class="pln"> </span><span class="str">'2'</span><span class="pln">
    </span><span class="pun">})</span><span class="pln">
</span><span class="pun">}).</span><span class="pln">then</span><span class="pun">(</span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">response</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">response</span><span class="pun">);</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> response</span><span class="pun">.</span><span class="pln">json</span><span class="pun">();</span><span class="pln">

</span><span class="pun">}).</span><span class="kwd">catch</span><span class="pun">(</span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">err</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">err</span><span class="pun">)</span><span class="pln">
</span><span class="pun">});</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我尝试处理响应时，出现“ SyntaxError：输入意外结束”</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">return</span><span class="pln"> response</span><span class="pun">.</span><span class="pln">json</span><span class="pun">();</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">console.log看起来像这样：</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/26859/images/thumbnails/1590650196668.png" data-src="https://www.samyoc.com//uploads/users/26859/images/1590650196668.png" rel="noreferrer"><img src="https://i.stack.imgur.com/tr01h.png" alt="Console.log（响应）"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的响应JSON看起来像这样，它是有效的，我用jsonlint检查了它：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">[</span><span class="pln">
  </span><span class="pun">{</span><span class="pln">
    </span><span class="str">"0x1"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="str">"users"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[],</span><span class="pln">
      </span><span class="str">"lectures"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[],</span><span class="pln">
      </span><span class="str">"owner"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"0x2"</span><span class="pun">,</span><span class="pln">
      </span><span class="str">"title"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"WWI 14 SEA"</span><span class="pun">,</span><span class="pln">
      </span><span class="str">"description"</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">null</span><span class="pun">,</span><span class="pln">
      </span><span class="str">"objectClass"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"course"</span><span class="pun">,</span><span class="pln">
      </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"course_00001"</span><span class="pln">
    </span><span class="pun">},</span><span class="pln">
    </span><span class="str">"0x2"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="str">"username"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"system"</span><span class="pun">,</span><span class="pln">
      </span><span class="str">"lectures"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[],</span><span class="pln">
      </span><span class="str">"course"</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">null</span><span class="pun">,</span><span class="pln">
      </span><span class="str">"solutions"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[],</span><span class="pln">
      </span><span class="str">"exercises"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[],</span><span class="pln">
      </span><span class="str">"roles"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="pln">
        </span><span class="str">"0x3"</span><span class="pun">,</span><span class="pln">
        </span><span class="str">"0x4"</span><span class="pun">,</span><span class="pln">
        </span><span class="str">"0x5"</span><span class="pln">
      </span><span class="pun">],</span><span class="pln">
      </span><span class="str">"objectClass"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"user"</span><span class="pun">,</span><span class="pln">
      </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"user_00001"</span><span class="pln">
    </span><span class="pun">},</span><span class="pln">
    </span><span class="str">"0x3"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="str">"roleName"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"ROLE_ADMIN"</span><span class="pun">,</span><span class="pln">
      </span><span class="str">"objectClass"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"role"</span><span class="pun">,</span><span class="pln">
      </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"role_00001"</span><span class="pln">
    </span><span class="pun">},</span><span class="pln">
    </span><span class="str">"0x4"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="str">"roleName"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"ROLE_STUDENT"</span><span class="pun">,</span><span class="pln">
      </span><span class="str">"objectClass"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"role"</span><span class="pun">,</span><span class="pln">
      </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"role_00002"</span><span class="pln">
    </span><span class="pun">},</span><span class="pln">
    </span><span class="str">"0x5"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="str">"roleName"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"ROLE_DOCENT"</span><span class="pun">,</span><span class="pln">
      </span><span class="str">"objectClass"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"role"</span><span class="pun">,</span><span class="pln">
      </span><span class="str">"id"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"role_00003"</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">]</span></code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4228篇《句柄响应-SyntaxError：使用模式“ no-cors”时输入意外结束》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>

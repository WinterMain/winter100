---
layout: question
title:  HTML5中是否有一个minlength验证属性？
date:   2020-03-18T08:29:19.000Z
description: 似乎该字段的minlength属性<input>无效。HTML5中是否还有其他属性可以设置字段值的最小长度？...
img: 
author: 米亚Near
category: question
answer: 13
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎该</font><font style="vertical-align: inherit;">字段</font><font style="vertical-align: inherit;">的</font></font><code>minlength</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font></font><code>&lt;input&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无效。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5中是否还有其他属性可以设置字段值的最小长度？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2059篇《HTML5中是否有一个minlength验证属性？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil番长</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我在其中验证了大部分手动和使用Firefox（43.0.4），</font></font><code>minlength</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>validity.tooShort</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不可不幸。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于只需要存储最小长度即可继续，因此一种简便的方法是将此值分配给输入标签的另一个有效属性。</font><font style="vertical-align: inherit;">在这种情况下，然后，可以使用</font></font><code>min</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>max</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>step</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从[类型=“号码”]的输入特性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与其将这些限制存储在数组中，不如将其存储在同一输入中，而不是获取元素ID以匹配数组索引，则更加容易。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿伽罗</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加最大值和最小值，您可以指定允许值的范围：</font></font></p>

<pre><code>&lt;input type="number" min="1" max="999" /&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy路易</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用了max和min，然后使用了required，它对我来说很好，但是不确定是不是一种编码方法。</font><font style="vertical-align: inherit;">希望对您有所帮助</font></font></p>

<pre><code>&lt;input type="text" maxlength="13" name ="idnumber" class="form-control"  minlength="13" required&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿Mandy</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅</font></font><a href="http://caniuse.com/#search=minlength" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://caniuse.com/#search=minlength</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，某些浏览器可能不支持此属性。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果“类型”的值是其中之一：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文字，电子邮件，搜索，密码，电话或url</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（警告：不包括</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数字</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> | </font><font style="vertical-align: inherit;">现在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有浏览器支持“电话”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -2017.10）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">minlength</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（/ maxlength）属性，它指定最小字符数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如。</font></font></p>

<pre><code>&lt;input type="text" minlength="11" maxlength="11" pattern="[0-9]*" placeholder="input your phone number"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或使用“模式”属性：</font></font></p>

<pre><code>&lt;input type="text" pattern="[0-9]{11}" placeholder="input your phone number"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果“类型”是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">number</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则不</font><font style="vertical-align: inherit;">支持</font><font style="vertical-align: inherit;">算法的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最小长度</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（/ maxlength），可以使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">min</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（/ max）属性代替。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如。</font></font></p>

<pre><code>&lt;input type="number" min="100" max="999" placeholder="input a three-digit number"&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">有壳网</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我注意到有时在chrome中，当自动填充功能打开并且字段由自动填充浏览器内置方法填充字段时，它会绕过最小长度验证规则，因此在这种情况下，您将必须通过以下属性禁用自动填充功能：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">autocomplete =“ off”</font></font></strong> </p>

<pre><code>&lt;input autocomplete="new-password" name="password" id="password" type="password" placeholder="Password" maxlength="12" minlength="6" required /&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinStafanL</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><code>minlength</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在</font></font><a href="https://caniuse.com/#feat=input-minlength" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大多数浏览器都</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">广泛支持attribute属性</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;input type="text" minlength="2" required&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，与其他HTML5功能一样，此全景图中也缺少IE11。</font><font style="vertical-align: inherit;">因此，如果您拥有广泛的IE11用户群，请考虑使用</font><a href="https://caniuse.com/#feat=input-pattern" rel="nofollow noreferrer"><font style="vertical-align: inherit;">大多数浏览器</font></a><font style="vertical-align: inherit;">（包括IE11）</font></font><code>pattern</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">几乎都支持</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">HTML5属性</font><font style="vertical-align: inherit;">。</font></font><a href="https://caniuse.com/#feat=input-pattern" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了有一个好的统一的实现，并且可能是可扩展的或动态的（基于生成HTML的框架），我将投票给该</font></font><code>pattern</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性：</font></font></p>

<pre><code>&lt;input type="text" pattern=".{2,}" required&gt;
</code></pre>

<p><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时，</font><strong><font style="vertical-align: inherit;">可用性</font></strong><font style="vertical-align: inherit;">仍然</font><strong><font style="vertical-align: inherit;">很小</font></strong></font><code>pattern</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">使用时，用户将看到不直观（非常普通）的错误/警告消息</font></font><code>pattern</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">请参阅</font></font><a href="https://jsfiddle.net/a4cdwkgf/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下jsfiddle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;h3&gt;In each form type 1 character and press submit&lt;/h3&gt;<font></font>
&lt;/h2&gt;<font></font>
&lt;form action="#"&gt;<font></font>
  Input with minlength: &lt;input type="text" minlength="2" required name="i1"&gt;<font></font>
  &lt;input type="submit" value="Submit"&gt;<font></font>
&lt;/form&gt;<font></font>
&lt;br&gt;<font></font>
&lt;form action="#"&gt;<font></font>
  Input with patern: &lt;input type="text" pattern=".{2,}" required name="i1"&gt;<font></font>
  &lt;input type="submit" value="Submit"&gt;<font></font>
&lt;/form&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，在Chrome（但在大多数浏览器中类似）中，您会收到以下错误消息：</font></font></p>

<pre><code>Please lengthen this text to 2 characters or more (you are currently using 1 character)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过使用</font></font><code>minlength</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font></p>

<pre><code>Please match the format requested
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过使用</font></font><code>pattern</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry神乐</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论使用与否，我都使用maxlength和minlength，</font></font><code>required</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它对HTML5非常有效。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;input id="passcode" type="password" minlength="8" maxlength="10"&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">`</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim猴子Eva</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是HTML5，而是实用的：如果碰巧使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AngularJS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以同时使用</font></font><a href="https://docs.angularjs.org/api/ng/directive/input" rel="noreferrer"><code>ng-minlength</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入和文本区域。</font><font style="vertical-align: inherit;">另请参阅</font></font><a href="http://plnkr.co/edit/GotWYIwosmrokXCul249" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此Plunk</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端梅</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">minLength属性（与maxLength不同）在HTML5中本身不存在。</font><font style="vertical-align: inherit;">但是，如果字段包含少于x个字符，则有一些方法可以验证该字段。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在下面的链接中使用jQuery提供了一个示例：</font><a href="http://docs.jquery.com/Plugins/Validation/Methods/minlength" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://docs.jquery.com/Plugins/Validation/Methods/minlength" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//docs.jquery.com/Plugins/Validation/Methods/minlength</font></font></a></p>

<pre><code>&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
  &lt;script src="http://code.jquery.com/jquery-latest.js"&gt;&lt;/script&gt;<font></font>
  &lt;script type="text/javascript" src="http://jzaefferer.github.com/jquery-validation/jquery.validate.js"&gt;&lt;/script&gt;<font></font>
&lt;script type="text/javascript"&gt;<font></font>
jQuery.validator.setDefaults({<font></font>
    debug: true,<font></font>
    success: "valid"<font></font>
});;<font></font>
&lt;/script&gt;<font></font>
<font></font>
  &lt;script&gt;<font></font>
  $(document).ready(function(){<font></font>
    $("#myform").validate({<font></font>
  rules: {<font></font>
    field: {<font></font>
      required: true,<font></font>
      minlength: 3<font></font>
    }<font></font>
  }<font></font>
});<font></font>
  });<font></font>
  &lt;/script&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
<font></font>
&lt;form id="myform"&gt;<font></font>
  &lt;label for="field"&gt;Required, Minimum length 3: &lt;/label&gt;<font></font>
  &lt;input class="left" id="field" name="field" /&gt;<font></font>
  &lt;br/&gt;<font></font>
  &lt;input type="submit" value="Validate!" /&gt;<font></font>
&lt;/form&gt;<font></font>
<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子猪猪</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，那里。</font><font style="vertical-align: inherit;">就像maxlength。</font><font style="vertical-align: inherit;">W3.org文档：</font><a href="http://www.w3.org/TR/html5/forms.html#attr-fe-minlength" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="http://www.w3.org/TR/html5/forms.html#attr-fe-minlength" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.w3.org/TR/html5/forms.html#attr-fe-minlength</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>minlength</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不起作用，请使用</font></font><code>pattern</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ Pumbaa80提及</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">属性作为</font></font><code>input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于textarea：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
用于设置max；</font><font style="vertical-align: inherit;">使用</font></font><code>maxlength</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和分钟转到</font></font><a href="https://stackoverflow.com/questions/18184791/how-to-apply-min-and-max-on-textarea/24640346#24640346"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此链接</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将在此处找到最大和最小。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimItachi</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="http://www.w3.org/TR/2009/WD-html5-20090825/forms.html#attr-input-pattern" rel="noreferrer"><code>pattern</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">也需要</font><font style="vertical-align: inherit;">该</font></font><a href="http://www.w3.org/TR/2009/WD-html5-20090825/forms.html#attr-input-required" rel="noreferrer"><code>required</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，否则</font></font><a href="http://www.w3.org/TR/2011/WD-html5-20110525/association-of-controls-and-forms.html#constraint-validation" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">约束验证</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将排除具有空值的输入字段</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;input pattern=".{3,}"   required title="3 characters minimum"&gt;<font></font>
&lt;input pattern=".{5,10}" required title="5 to 10 characters"&gt;<font></font>
</code></pre>

<p>If you want to create the option to use the pattern for "empty, or minimum length", you could do the following:</p>

<pre><code>&lt;input pattern=".{0}|.{5,10}" required title="Either 0 OR (5 to 10 chars)"&gt;<font></font>
&lt;input pattern=".{0}|.{8,}"   required title="Either 0 OR (8 chars minimum)"&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚宝儿</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是仅HTML5的解决方案</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（如果您需要最小长度5，最大长度10个字符验证）</font></font></p>

<p><strong><a href="http://jsfiddle.net/xhqsB/102/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/xhqsB/102/</font></font></a></strong></p>

<pre><code>&lt;form&gt;<font></font>
  &lt;input pattern=".{5,10}"&gt;<font></font>
  &lt;input type="submit" value="Check"&gt;&lt;/input&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ASamGreen</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font><code>minlength</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">房地产</font></font><a href="http://www.w3.org/TR/html5/forms.html#the-maxlength-and-minlength-attributes" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5规范</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，还有</font></font><code>validity.tooShort</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接口。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，所有现代浏览器的最新版本均启用了这两种功能。</font><font style="vertical-align: inherit;">有关详细信息，请参见</font></font><a href="https://caniuse.com/#search=minlength" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://caniuse.com/#search=minlength</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

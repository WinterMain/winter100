---
layout: question
title:  如何在TextView中显示HTML？
date:   2020-03-17T08:19:38.000Z
description: 我有简单的HTML：<h2>Title</h2><br><p>description here</p>我想在中显示HTML样式的文本TextV...
img: 
author: 理查德A小宇宙
category: question
answer: 21
tags: Android HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有简单的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;h2&gt;Title&lt;/h2&gt;&lt;br&gt;<font></font>
&lt;p&gt;description here&lt;/p&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在中显示HTML样式的文本</font></font><code>TextView</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这该怎么做？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1906篇《如何在TextView中显示HTML？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天猪猪</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>If you use <code>androidx.</code>* classes in your project, you should use <code>HtmlCompat.fromHtml(text, flag)</code>. Source of the method is:</p>

<p><code>@NonNull
    public static Spanned fromHtml(@NonNull String source, @FromHtmlFlags int flags) {
        if (Build.VERSION.SDK_INT &gt;= 24) {
            return Html.fromHtml(source, flags);
        }
        //noinspection deprecation
        return Html.fromHtml(source);
    }</code></p>

<p>It is better way than Html.fromHtml as there is less code, only one line, and recommended way to use it.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗古一</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>Simply use:</p>

<pre><code>String variable="StackOverflow";<font></font>
textView.setText(Html.fromHtml("&lt;b&gt;Hello : &lt;/b&gt;"+ variable));<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan阳光</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>You can use simple Kotlin extension function like this:</p>

<pre><code>fun TextView.setHtmlText(source: String) {<font></font>
    this.text = HtmlCompat.fromHtml(source, HtmlCompat.FROM_HTML_MODE_LEGACY)<font></font>
}<font></font>
</code></pre>

<p>And usage:</p>

<pre><code>textViewMessage.setHtmlText("Message: &lt;b&gt;Hello World&lt;/b&gt;")
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinPro</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>Use below code to get the solution:</p>

<pre><code>textView.setText(fromHtml("&lt;Your Html Text&gt;"))
</code></pre>

<p>Utitilty Method</p>

<pre><code>public static Spanned fromHtml(String text)<font></font>
{<font></font>
    Spanned result;<font></font>
    if (Build.VERSION.SDK_INT &gt;= android.os.Build.VERSION_CODES.N) {<font></font>
        result = Html.fromHtml(text, Html.FROM_HTML_MODE_LEGACY);<font></font>
    } else {<font></font>
        result = Html.fromHtml(text);<font></font>
    }<font></font>
    return result;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光逆天</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>Created <strong>Kotlin</strong> extensions to convert <strong>html</strong> from <strong>String</strong> - </p>

<pre><code>fun String?.toHtml(): Spanned? {<font></font>
    if (this.isNullOrEmpty()) return null<font></font>
    return HtmlCompat.fromHtml(this, HtmlCompat.FROM_HTML_MODE_COMPACT)<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇神乐GO</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><pre><code>public class HtmlTextView extends AppCompatTextView {<font></font>
<font></font>
public HtmlTextView(Context context) {<font></font>
    super(context);<font></font>
    init();<font></font>
}<font></font>
<font></font>
private void init(){<font></font>
    if (Build.VERSION.SDK_INT &gt;= Build.VERSION_CODES.N) {<font></font>
        setText(Html.fromHtml(getText().toString(), Html.FROM_HTML_MODE_COMPACT));<font></font>
    } else {<font></font>
        setText(Html.fromHtml(getText().toString()));<font></font>
    }<font></font>
 }<font></font>
}<font></font>
</code></pre>

<p>update of <a href="https://stackoverflow.com/a/27462961/2497264">answer above</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞A飞云</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>I have implemented this using web view. In my case i have to load image from URL along with the text in text view and this works for me.</p>

<pre><code>WebView myWebView =new WebView(_context);<font></font>
        String html = childText;<font></font>
        String mime = "text/html";<font></font>
        String encoding = "utf-8";<font></font>
        myWebView.getSettings().setJavaScriptEnabled(true);<font></font>
        myWebView.loadDataWithBaseURL(null, html, mime, encoding, null);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长卡卡西</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>Whenever you write custom text view basic HTML set text feature will be get vanished form some of the devices.</p>

<p>So we need to do following addtional steps make is work </p>

<pre><code>public class CustomTextView extends TextView {<font></font>
<font></font>
    public CustomTextView(..) {<font></font>
        // other instructions<font></font>
        setText(Html.fromHtml(getText().toString()));<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AL村村</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>Make a global method like:</p>

<pre><code>public static Spanned stripHtml(String html) {<font></font>
            if (!TextUtils.isEmpty(html)) {<font></font>
                if (Build.VERSION.SDK_INT &gt;= Build.VERSION_CODES.N) {<font></font>
                    return Html.fromHtml(html, Html.FROM_HTML_MODE_COMPACT);<font></font>
                } else {<font></font>
                    return Html.fromHtml(html);<font></font>
                }<font></font>
            }<font></font>
            return null;<font></font>
        }<font></font>
</code></pre>

<p>You can also use it in your Activity/Fragment like:</p>

<pre><code>text_view.setText(stripHtml(htmlText));
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO神乐</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><pre><code>String value = html value ....<font></font>
mTextView.setText(Html.fromHtml(value),TextView.BufferType.SPANNABLE)<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无逆天</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您只想显示一些html文本，而实际上并不需要a </font></font><code>TextView</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请</font></font><code>WebView</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">a </font><font style="vertical-align: inherit;">并按如下所示使用它：</font></font></p>

<pre><code>String htmlText = ...;<font></font>
webview.loadData(htmlText , "text/html; charset=UTF-8", null);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也不限制您使用几个html标签。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村达蒙LEY</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>Simple use <code>Html.fromHtml("html string")</code>. This will work. If the string has tags like <code>&lt;h1&gt;</code> then spaces will come. But we cannot eliminate those spaces. If you still want to remove the spaces, then you can remove the tags in the string and then pass the string to the method <code>Html.fromHtml("html string");</code> . Also generally these strings come from server(dynamic) but not often, if it is the case better to pass the string as it is to the method than try to remove the tags from the string.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里小胖小卤蛋</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>I would like also to suggest following project: <a href="https://github.com/NightWhistler/HtmlSpanner" rel="noreferrer">https://github.com/NightWhistler/HtmlSpanner</a></p>

<p>Usage is almost the same as default android converter:</p>

<pre><code>(new HtmlSpanner()).fromHtml()
</code></pre>

<p>Found it after I already started by own implementation of html to spannable converter, because standard Html.fromHtml does not provide enough flexibility over rendering control and even no possibility to use custom fonts from ttf</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Harry梅</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>The best approach to use CData sections for the string in strings.xml file to get a actual display of the html content to the TextView the below code snippet will give you the fair idea.</p>

<pre><code>//in string.xml file<font></font>
&lt;string name="welcome_text"&gt;&lt;![CDATA[&lt;b&gt;Welcome,&lt;/b&gt; to the forthetyroprogrammers blog Logged in as:]]&gt; %1$s.&lt;/string&gt;<font></font>
<font></font>
//and in Java code<font></font>
String welcomStr=String.format(getString(R.string.welcome_text),username);<font></font>
tvWelcomeUser.setText(Html.fromHtml(welcomStr));<font></font>
</code></pre>

<p>CData section in string text keeps the html tag data intact even after formatting text using String.format method. So, Html.fromHtml(str) works fine and you’ll see the bold text in Welcome message.</p>

<p><strong>Output:</strong></p>

<blockquote>
  <p>Welcome, to your favorite music app store. Logged in as: username</p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AGO</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><pre><code>String value = "&lt;html&gt; &lt;a href=\"http://example.com/\"&gt;example.com&lt;/a&gt; &lt;/html&gt;";<font></font>
    SiteLink= (TextView) findViewById(R.id.textViewSite);<font></font>
    SiteLink.setText(Html.fromHtml(value));<font></font>
    SiteLink.setMovementMethod(LinkMovementMethod.getInstance());<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva神无</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您尝试从字符串资源ID显示HTML，则格式可能不会显示在屏幕上。</font><font style="vertical-align: inherit;">如果发生这种情况，请尝试使用CDATA标记代替：</font></font></p>

<pre><code>strings.xml:<font></font>
&lt;string name="sample_string"&gt;&lt;![CDATA[&lt;h2&gt;Title&lt;/h2&gt;&lt;br&gt;&lt;p&gt;Description here&lt;/p&gt;]]&gt;&lt;/string&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...</font></font></p>

<pre><code>MainActivity.java:<font></font>
text.setText(Html.fromHtml(getString(R.string.sample_string));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多详细信息，</font><font style="vertical-align: inherit;">请参见此</font></font><a href="https://stackoverflow.com/a/13893926/923920"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">帖子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙樱</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面的代码对我来说是最好的结果。</font></font></p>

<pre><code>TextView myTextview = (TextView) findViewById(R.id.my_text_view);<font></font>
htmltext = &lt;your html (markup) character&gt;;<font></font>
Spanned sp = Html.fromHtml(htmltext);<font></font>
myTextview.setText(sp);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro蛋蛋</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您希望能够通过xml对其进行配置而无需在Java代码中进行任何修改，那么您可能会发现此想法很有帮助。</font><font style="vertical-align: inherit;">只需从构造函数调用init并将文本设置为html</font></font></p>

<pre><code>public class HTMLTextView extends TextView {<font></font>
    ... constructors calling init...<font></font>
    private void init(){<font></font>
       setText(Html.fromHtml(getText().toString()));<font></font>
    }    <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">xml： </font></font></p>

<pre><code>        &lt;com.package.HTMLTextView<font></font>
        android:text="@string/about_item_1"/&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村Mandy</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的setText（Html.fromHtml（bodyData））</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">弃用</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> API 24后，现在你必须这样做：</font></font></p>

<pre><code> if (android.os.Build.VERSION.SDK_INT &gt;= android.os.Build.VERSION_CODES.N) {<font></font>
      tvDocument.setText(Html.fromHtml(bodyData,Html.FROM_HTML_MODE_LEGACY));<font></font>
 } else {<font></font>
      tvDocument.setText(Html.fromHtml(bodyData));<font></font>
 }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L十三</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看看这个：</font><a href="https://stackoverflow.com/a/8558249/450148"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://stackoverflow.com/a/8558249/450148"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//stackoverflow.com/a/8558249/450148</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">太好了!!</font></font></p>

<pre><code>&lt;resource&gt;<font></font>
    &lt;string name="your_string"&gt;This is an &lt;u&gt;underline&lt;/u&gt; text demo for TextView.&lt;/string&gt;<font></font>
&lt;/resources&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它仅适用于少量标签。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门LEY</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要使用</font></font><a href="http://developer.android.com/reference/android/text/Html.html#fromHtml%28java.lang.String%29" rel="noreferrer"><code>Html.fromHtml()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XML字符串中的HTML。</font><font style="vertical-align: inherit;">仅在布局XML中引用带有HTML的字符串将不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是您应该做的：</font></font></p>

<pre><code>if (Build.VERSION.SDK_INT &gt;= Build.VERSION_CODES.N) {<font></font>
    textView.setText(Html.fromHtml("&lt;h2&gt;Title&lt;/h2&gt;&lt;br&gt;&lt;p&gt;Description here&lt;/p&gt;", Html.FROM_HTML_MODE_COMPACT));<font></font>
} else { <font></font>
    textView.setText(Html.fromHtml("&lt;h2&gt;Title&lt;/h2&gt;&lt;br&gt;&lt;p&gt;Description here&lt;/p&gt;"));<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>

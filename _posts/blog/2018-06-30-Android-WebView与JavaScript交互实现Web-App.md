---
layout: post
title:  Android WebView与JavaScript交互实现Web App
date:   2018-06-30T06:04:05.000Z
description: 当我们去开发一个基于web的android app时，我们第一需要处理的就是与JavaScript的交互问题，Android需要做的事情就是开放某些特定的接口供...
img: https://www.samyoc.com/uploads/users/1/images/thumbnails/1530338643060.png
author: Winter
category: blog
answer: 0
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><div>当我们去开发一个基于web的android app时，我们第一需要处理的就是与JavaScript的交互问题，Android需要做的事情就是开放某些特定的接口供web里的JavaScript调用，可以开放弹出框功能，Toast，界面跳转等等，这样我们的web视图以假乱真的当成Android的原生界面，而这套web代码又可以嵌入iPhone的客户端中，也就是说Android和IOS客户端仅仅是提供一个共web使用的框架，业务都由web端处理，这岂不是开发一次，可处处运行。然而这一切都是后话，且让我们先实现WebView和JavaScript的交互问题。这里我以Android app为例。</div>

<div>&nbsp;</div>

<div>1. 首先在Eclipse中创建一个空的Android项目，我将它命名为JSInteraction，找到并打开AndroidManifest.xml文件，在Permissions里添加一个android.permission.WRITE_EXTERNAL_STORAGE权限。</div>

<div><img alt="" src="http://img.blog.csdn.net/20150812144911747?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" style="box-sizing:border-box; margin:0px 0px 24px; max-width:100%" /></div>

<div>2.这里我已经添加了一个主页面activity_main.xml，一个主要的Activity&nbsp;MainActivity.java，及一个提供各种功能供JavaScript调用的类JsOperator.java。</div>

<div>主要的目录结构如下图所示</div>

<div><img alt="" src="http://img.blog.csdn.net/20150812145509384?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" style="box-sizing:border-box; margin:0px 0px 24px; max-width:100%" /></div>

<div>主页面activity_main.xml代码如下所示，仅仅只有一个WebView</div>

<pre>
&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;LinearLayout xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;
    android:layout_width=&quot;match_parent&quot;
    android:layout_height=&quot;match_parent&quot;
    android:orientation=&quot;vertical&quot; &gt;

    &lt;WebView
        android:id=&quot;@+id/webView&quot;
        android:layout_width=&quot;match_parent&quot;
        android:layout_height=&quot;match_parent&quot; /&gt;

&lt;/LinearLayout&gt;</pre>

<div>MainActivity.java的代码如下所示，<img alt="" src="http://img.blog.csdn.net/20150812150102960?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" style="box-sizing:border-box; margin:0px 0px 24px; max-width:100%" />表示添加供JS调用的对象，其别名是JsInteraction，这样在JS中只要写JsInteraction.&lt;方法名称&gt;()就可以调用相应的方法了。WebView将加载assets文件夹里LoginJs文件夹下的login.html，这个文件会在后面创建。</div>

<pre>
package com.yld.jsinteraction;

import android.support.v7.app.ActionBarActivity;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.annotation.SuppressLint;
import android.os.Bundle;

public class MainActivity extends ActionBarActivity {

	private WebView webView;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);

		this.webView = (WebView) this.findViewById(R.id.webView);
		this.initializeWebView();
	}
	
	@SuppressLint({ &quot;NewApi&quot;, &quot;SetJavaScriptEnabled&quot; })
	private void initializeWebView(){
		webView.addJavascriptInterface(new JsOperator(MainActivity.this),
				&quot;JsInteraction&quot;);
		try {
			String url = &quot;file:///android_asset/LoginJs/login.html&quot;;
			WebSettings webSettings = webView.getSettings();
			webSettings.setJavaScriptEnabled(true);
			webSettings.setAllowFileAccess(true);
			webSettings.setAllowFileAccessFromFileURLs(true);

			this.webView.loadUrl(url);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
</pre>

<div>JsOperator.java的代码如下</div>

<div>
<pre>
package com.yld.jsinteraction;

import org.json.JSONObject;

import android.app.AlertDialog;
import android.app.AlertDialog.Builder;
import android.content.Context;
import android.content.DialogInterface;
import android.content.DialogInterface.OnClickListener;
import android.webkit.JavascriptInterface;

public class JsOperator {

	private Context context;

	public JsOperator(Context context) {
		this.context = context;
	}

	/**
	 * 弹出消息对话框
	 */
	@JavascriptInterface
	public void showDialog(String message) {

		AlertDialog.Builder builder = new Builder(context);
		builder.setMessage(message);
		builder.setTitle(&quot;提示&quot;);
		builder.setPositiveButton(&quot;确认&quot;, new OnClickListener() {
			@Override
			public void onClick(DialogInterface dialog, int which) {

			}
		});
		builder.setNegativeButton(&quot;取消&quot;, new OnClickListener() {
			@Override
			public void onClick(DialogInterface dialog, int which) {
				dialog.dismiss();
			}
		});
		builder.create().show();
	}
	
	/**
	 * 获取登录的用户名和密码
	 * @return JSON格式的字符串
	 */
	@JavascriptInterface
	public String getLoginInfo(){
		try{
			JSONObject login = new JSONObject();
			login.put(&quot;Username&quot;, &quot;YLD&quot;);
			login.put(&quot;Password&quot;, &quot;111&quot;);
			
			return login.toString();
		}catch(Exception e){
			e.printStackTrace();
		}
		
		return null;
	}
}
</pre>
</div>

<div>JsOperator提供了两个方法，一个方法用来弹出对话框，另一个方法则是返回一个登录信息的JSON字符串，而且这两个方法都打上了标签@JavascriptInterface，这是比较重要的，因为在较低的版本中如果不声明它是JavaScript可调用的方法，JS将无法调用。</div>

<div>&nbsp;</div>

<div>3.在assets文件夹下创建LoginJs文件夹，并在其下创建两个文件login.html，login.js</div>

<div>login.html中有一个用户名密码输入框及一个登录按钮，代码如下</div>

<pre>
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
	&lt;meta charset=&quot;UTF-8&quot;&gt;
	&lt;title id=&quot;title&quot;&gt;Login&lt;/title&gt;
	&lt;script type=&quot;text/javascript&quot; src=&quot;login.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body style=&quot;background:lightblue&quot;&gt;
	&lt;div style=&quot;margin-top: 20px;margin-left: 20px&quot;&gt;
		&lt;div&gt;
			&lt;label&gt;Username:&lt;/label&gt;
			&lt;input id=&quot;txtUsername&quot; type=&quot;text&quot; style=&quot;margin-left: 20px&quot;/&gt;
		&lt;/div&gt;
		&lt;div style=&quot;margin-top: 20px&quot;&gt;
			&lt;label&gt;Password:&lt;/label&gt;
			&lt;input id=&quot;txtPassword&quot; type=&quot;text&quot; style=&quot;margin-left: 20px&quot;/&gt;
		&lt;/div&gt;
		&lt;div style=&quot;margin-top: 20px;margin-left: 160px&quot;&gt;
			&lt;button onclick=&quot;loginObj.login()&quot; style=&quot;width:100px&quot;&gt;Login&lt;/button&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<div>在login.js的setLoginInfo里使用JsInteraction.getLoginInfo()调用android提供的接口，并获取登录信息并将登录信息填充到用户输入框中，login方法则是调用了JsInteraction.showDialog(&quot;Login start...&quot;)来调用android端提供的弹出对话框的接口。</div>

<pre>
var Login = (function(){
	function Login(){

	}

	Login.prototype.login = function(){
		JsInteraction.showDialog(&quot;Login start...&quot;);
	}

	Login.prototype.setLoginInfo = function(){
		var logininfoJson = JsInteraction.getLoginInfo();
		//解析json字符串
		var logininfo = eval(&quot;(&quot;+logininfoJson+&quot;)&quot;);

		document.getElementById(&quot;txtUsername&quot;).value = logininfo.Username;
		document.getElementById(&quot;txtPassword&quot;).value = logininfo.Password;
	}

	return Login;
})();

var loginObj = new Login();

window.onload=function(){
	loginObj.setLoginInfo();
}</pre>

<div><br />
4.Html和客户端的创建已经完成，运行效果如下</div>

<div><img alt="" src="http://img.blog.csdn.net/20150812151406792?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" style="box-sizing:border-box; margin:0px 0px 24px; max-width:100%" /></div>

<div>点击Login按钮</div>

<div><img alt="" src="http://img.blog.csdn.net/20150812151442940?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" style="box-sizing:border-box; margin:0px 0px 24px; max-width:100%" /></div>

<div>&nbsp;</div>

<div>源代码下载页：http://download.csdn.net/detail/leyyang/8995887</div>
</div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第67篇《Android WebView与JavaScript交互实现Web App》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>

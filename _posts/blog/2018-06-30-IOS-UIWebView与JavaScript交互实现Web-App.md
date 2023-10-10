---
layout: post
title:  IOS UIWebView与JavaScript交互实现Web App
date:   2018-06-30T06:02:06.000Z
description: 上一篇文章讲到了Android WebView与JavaScript的交互问题，现在来讲一下IOS的UIWebView与JavaScript的交互问题。和And...
img: https://www.samyoc.com/uploads/users/1/images/thumbnails/1530338521732.jpg
author: Winter
category: blog
answer: 0
tags: IOS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>上一篇文章讲到了Android WebView与JavaScript的交互问题，现在来讲一下IOS的UIWebView与JavaScript的交互问题。和Android的相比，IOS的会略显笨拙一些不大友好，然而也算是在未引用第三方框架的基础上完成了交互的问题。OK，现在开始吧。</p>

<p>1.首先在IOSA-&gt;Application下选择Single View Application创建一个IOS应用，命名为JSInteraction，然后我删去了Info.plist文件里Main storyboard file base name字段，选择加载ViewController的View。</p>

<p><img alt="" src="http://img.blog.csdn.net/20150813141710643?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" style="box-sizing:border-box; margin:0px; max-width:100%" />&nbsp;<img alt="" src="http://img.blog.csdn.net/20150813141406269?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" style="box-sizing:border-box; margin:0px; max-width:100%" /></p>

<p>1.修改AppDelegate.m的didFinishLaunchingWithOptions并添加如下代码。</p>

<p>&nbsp;</p>

<pre>
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    
    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    [self.window makeKeyAndVisible];
    
    ViewController * viewController = [[ViewController alloc] init];
    [self.window setRootViewController:viewController];
    
    return YES;
}</pre>

<p>2.修改类ViewController，添加一个WebView并添加与JavaScript交互的功能。</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<pre>
//
//  ViewController.h
//  JSInteraction
//
//  Created by Winter on 15/8/12.
//  Copyright (c) 2015年 YLD. All rights reserved.
//

#import &lt;UIKit/UIKit.h&gt;

@interface ViewController : UIViewController&lt;UIWebViewDelegate&gt; {
    UINavigationItem *item_;
}

@property (nonatomic, strong) UIWebView *webView;

@end</pre>

<p><br />
在WebView的shouldStartLoadWithRequest处理JS的请求根据JS的传入的Url来判断JS所需的操作。在这里面我主要提供了一个弹出对话框的接口，当JS传入的URL是以jsinteraction:showAleart开头时则调用ViewController里的showAlert方法，而JS需要从App获取数据时，则需要WebView调用stringByEvaluatingJavaScriptFromString方法并传入后台JS提供的方法并传入参数来实现传递数据给后台的JS。有点绕，且看看实现方式。</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<pre>
//
//  ViewController.m
//  JSInteraction
//
//  Created by Winter on 15/8/12.
//  Copyright (c) 2015年 YLD. All rights reserved.
//

#import &quot;ViewController.h&quot;

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    UINavigationBar *bar = [[UINavigationBar alloc] initWithFrame:CGRectMake(0, 20, self.view.bounds.size.width, 30.0f)];
    bar.backgroundColor = [UIColor clearColor];
    item_ = [[UINavigationItem alloc] initWithTitle:@&quot;&quot;];
    [bar pushNavigationItem:item_ animated:YES];
    [self.view addSubview:bar];
    
    self.view.backgroundColor = [UIColor colorWithRed:0.0f green:20.0f blue:255.0f alpha:1.0f];
    self.webView = [[UIWebView alloc] initWithFrame:CGRectMake(10.0f, 60.0f, self.view.bounds.size.width-20, self.view.bounds.size.height - 80.0f)];
    self.webView.delegate = self;
    [self.view addSubview:self.webView];
    
    
    [self initializeWebView];
    
    // Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
 * Load local html file
 */
- (void)initializeWebView {
    NSString *filePath = [[NSBundle mainBundle] pathForResource:@&quot;LoginJs/login&quot; ofType:@&quot;html&quot;];
    
    [self.webView loadRequest:[NSURLRequest requestWithURL:[NSURL fileURLWithPath:filePath]]];
}

- (BOOL)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType {
    NSString *requestString = [[request URL] absoluteString];
    NSArray *headers = [requestString componentsSeparatedByString:@&quot;:&quot;];

    if([headers count]&gt;1) {
        NSString *appAction = [(NSString *)[headers objectAtIndex:0] lowercaseString];
        NSString *funtionName =(NSString*)[headers objectAtIndex:1];
        
        if([appAction isEqualToString:@&quot;jsinteraction&quot;]) {
            if([funtionName isEqualToString:@&quot;showAleart&quot;] &amp;&amp; [headers count] &gt; 2){
                NSString* message = (NSString*)[headers objectAtIndex:2];
            
                [self showAleart:message];
            }
        
            return NO;
        } else if([appAction isEqualToString:@&quot;executescript&quot;]){
            if([funtionName isEqualToString:@&quot;loginObj.setLoginInfo&quot;]){
                NSString *loginInfo = @&quot;&#39;{\&quot;Username\&quot;:\&quot;YLD\&quot;,\&quot;Password\&quot;:\&quot;111\&quot;}&#39;&quot;;
                NSString *execute = [NSString stringWithFormat:@&quot;loginObj.setLoginInfo(%@)&quot;, loginInfo];
            
                [webView stringByEvaluatingJavaScriptFromString:execute];
            }
            return NO;
        }
    }
    
    return YES;
}

- (void)webViewDidFinishLoad:(UIWebView *)webView {
    item_.title = [self.webView stringByEvaluatingJavaScriptFromString:@&quot;document.title&quot;];
}

/**
 * 弹出消息对话框
 */
- (void)showAleart: (NSString *) message {
    UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:@&quot;Warning&quot;
                                                        message:message
                                                       delegate:self
                                              cancelButtonTitle:@&quot;OK&quot;
                                              otherButtonTitles:nil , nil];
    
    [alertView show];
}

@end
</pre>

<p><br />
3.IOS端已经完成，根据目前的实现，JS端需要请求的URL须是以下两种格式才能实现与IOS的交互。</p>

<p>&nbsp;</p>

<p>1）jsinteraction:showAleart:xxxx</p>

<p>2) &nbsp;executescript:loginObj.setLoginInfo:xxxx</p>

<p>4.下面实现web端的功能，新建一个文件夹命名为LoginJs，在改文件夹下添加两个文件，login.html和login.js。login.html有两个文本输入框我们会在程序启动时让IOS端为其注入相应的数据，再有一个登录按钮，点击按钮则会调用IOS端ViewController的showAlert方法，弹出对话框。</p>

<p>&nbsp;</p>

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

<p>在login.js中实现相应的方法，在页面加载完成时会调用请求，请求IOS端的数据。实现与IOS端的交互主要是依靠更改window的location。</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<pre>
&quot;user strict&quot;

var Login = (function(){
	function Login(){

	}

	Login.prototype.login = function(){
		this.appRequest(&quot;JSInteraction&quot;, &quot;showAleart&quot;, &quot;Start...&quot;);
	}

    /**
     * 设置登录信息
     * @logininfoJson json参数字符串
     */
	Login.prototype.setLoginInfo = function(logininfoJson){
		//解析json字符串
        var logininfo = eval(&quot;(&quot;+logininfoJson+&quot;)&quot;);

		document.getElementById(&quot;txtUsername&quot;).value = logininfo.Username;
		document.getElementById(&quot;txtPassword&quot;).value = logininfo.Password;
	}

    Login.prototype.appRequest = function(appAction, functionName, parameters){
        var requestCommand = appAction + &quot;:&quot; + functionName + &quot;:&quot; + parameters;

        window.location = requestCommand;
    }
             
	return Login;
})();

var loginObj = new Login();

window.onload=function(){
    loginObj.appRequest(&quot;executeScript&quot;, &quot;loginObj.setLoginInfo&quot;, &quot;&quot;);
}</pre>

<p><br />
5.接下来我们将web的LoginJs添加至IOS的JSInteraction工程中</p>

<p>&nbsp;</p>

<p><img alt="" src="http://img.blog.csdn.net/20150813144726600?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" style="box-sizing:border-box; margin:0px; max-width:100%" /><br />
&nbsp;</p>

<p>添加完成后，工程结构如下图</p>

<p><img alt="" src="http://img.blog.csdn.net/20150813144858994?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" style="box-sizing:border-box; margin:0px; max-width:100%" /></p>

<p>6.运行App，效果如下所示。</p>

<p><img alt="" src="http://img.blog.csdn.net/20150813145017966?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" style="box-sizing:border-box; margin:0px; max-width:100%" /></p>

<p>点击Login按钮</p>

<p><img alt="" src="http://img.blog.csdn.net/20150813145108707?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" style="box-sizing:border-box; margin:0px; max-width:100%" /></p>

<p>&nbsp;</p>

<p>源代码下载页：http://download.csdn.net/detail/leyyang/9000543</p>
</div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第66篇《IOS UIWebView与JavaScript交互实现Web App》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>

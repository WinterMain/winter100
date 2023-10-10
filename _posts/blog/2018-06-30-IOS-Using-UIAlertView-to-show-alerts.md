---
layout: post
title:  IOS Using UIAlertView to show alerts
date:   2018-06-30T04:18:10.000Z
description: UIAlertView in other words, it's a dialog box. You want to show a message or ask...
img: https://www.samyoc.com/uploads/users/1/images/thumbnails/1530332286391.jpg
author: Winter
category: blog
answer: 0
tags: IOS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>UIAlertView in other words, it&#39;s a dialog box. You want to show a message or ask user to confirm an action. UIAlertView would come in handy. Here, I create a simple project and show a alert view when suer click a button named &quot;Show A Simple Alert View&quot;. The implementation is in class ViewController. Below is the main code.</p>

<p>&nbsp;</p>

<pre>
//
//  ViewController.m
//  Chapter1UIAlertView
//
//  Created by Winter on 15/8/13.
//  Copyright (c) 2015年 YLD. All rights reserved.
//

#import &quot;ViewController.h&quot;

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];
    
    UIButton *buttonSimple = [[UIButton alloc] initWithFrame:CGRectMake(20.0f, 30.0f, 300.0f, 30.0f)];
    [buttonSimple setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
    [buttonSimple setTitleColor:[UIColor grayColor] forState:UIControlStateHighlighted];
    [buttonSimple setBackgroundColor:[UIColor orangeColor]];
    [buttonSimple setTitle:@&quot;Show A Simple Alert View&quot; forState:UIControlStateNormal];
    [buttonSimple addTarget:self action:@selector(showAlert) forControlEvents:UIControlEventTouchUpInside];
    
    [self.view addSubview:buttonSimple];
}

- (void) showAlert {
    UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:@&quot;Warning&quot;
                                                        message:@&quot;Hello&quot;
                                                       delegate:self
                                              cancelButtonTitle:@&quot;OK&quot;
                                              otherButtonTitles:nil, nil];
    
    [alertView show];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
</pre>

<p>Run app you and click the button you would see below scene.</p>

<p>&nbsp;</p>

<p><img alt="" src="http://img.blog.csdn.net/20150813163428367?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" style="box-sizing:border-box; margin:0px; max-width:100%" /></p>

<p>Now, you probably appreciate to have more button in alert view and each button would invoke different function while user clicking it. To implement this function you need to make you view controller accord with protocol UIAlertViewDelegate and implement method &nbsp;alertView:clickedButtonAtIndex:. I put a label at the top of view to see what button had clicked in alert view and its button index. The cancel button&#39;s index is 0.</p>

<p>The ViewController.h code as below.</p>

<p>&nbsp;</p>

<pre>
//
//  ViewController.h
//  Chapter1UIAlertView
//
//  Created by Winter on 15/8/13.
//  Copyright (c) 2015年 YLD. All rights reserved.
//

#import &lt;UIKit/UIKit.h&gt;

@interface ViewController : UIViewController&lt;UIAlertViewDelegate&gt;{
    UILabel *label_;
}


@end
</pre>

<p>Add below codes to viewDidLoad in ViewController.m file. These codes would create a label in top of the view and create a button next to last view element. When you click this button it would invoke method showAlertWithMoreButtons.</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<pre>
    label_ = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 30.0f, self.view.bounds.size.width, 60.0f)];
    label_.backgroundColor = [UIColor blackColor];
    label_.textAlignment = NSTextAlignmentCenter;
    label_.textColor = [UIColor whiteColor];
    [self.view addSubview:label_];
    
    UIButton *buttonMore = [[UIButton alloc] initWithFrame:CGRectMake(20.0f, 140.0f, 300.0f, 30.0f)];
    [buttonMore setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
    [buttonMore setTitleColor:[UIColor grayColor] forState:UIControlStateHighlighted];
    [buttonMore setBackgroundColor:[UIColor brownColor]];
    [buttonMore setTitle:@&quot;Show More Buttons Alert View&quot; forState:UIControlStateNormal];
    [buttonMore addTarget:self action:@selector(showAlertWithMoreButtons) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:buttonMore];</pre>

<p>&nbsp;</p>

<p>Add method&nbsp;alertView:clickedButtonAtIndex: and implement it.</p>

<p>&nbsp;</p>

<pre>
- (void)alertView:(UIAlertView *)alertView clickedButtonAtIndex:(NSInteger)buttonIndex {
    label_.text =[NSString stringWithFormat:@&quot;%@ %ld&quot;, [alertView buttonTitleAtIndex:buttonIndex], (long)buttonIndex];
}</pre>

<p>Run the app and click button &quot;Show More Buttons Alert View&quot;.</p>

<p>&nbsp;</p>

<p><img alt="" src="http://img.blog.csdn.net/20150813171131074?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" style="box-sizing:border-box; margin:0px; max-width:100%" /><br />
&nbsp;</p>

<p>If you want user input some text, you can set alert view style as UIAlertViewStylePlainTextInput</p>

<pre>
- (void) showAlertTextInput {
    UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:@&quot;Warning&quot;
                                                        message:@&quot;Do you like apple?&quot;
                                                       delegate:self
                                              cancelButtonTitle:@&quot;Cancel&quot;
                                              otherButtonTitles:@&quot;OK&quot;, nil];
    
    [alertView setAlertViewStyle:UIAlertViewStylePlainTextInput];
    
    [alertView show];
}</pre>

<p><br />
You can get what user had input via&nbsp;[alertView&nbsp;textFieldAtIndex:0].text. I made it display in label after user finishing inputting and clicking OK.</p>

<p>&nbsp;</p>

<pre>
&lt;pre name=&quot;code&quot; class=&quot;objc&quot;&gt;- (void)alertView:(UIAlertView *)alertView clickedButtonAtIndex:(NSInteger)buttonIndex {
    label_.text =[NSString stringWithFormat:@&quot;%@ %ld TextFiled 0: %@&quot;, [alertView buttonTitleAtIndex:buttonIndex], (long)buttonIndex, [alertView textFieldAtIndex:0].text];
    
}</pre>

<p>&nbsp;</p>

<pre>

&nbsp;</pre>

<p><img alt="" src="http://img.blog.csdn.net/20150813173056175?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" style="-webkit-text-stroke-width:0px; box-sizing:border-box; color:#4f4f4f; font-family:&quot;PingFang SC&quot;,&quot;Microsoft YaHei&quot;,SimHei,Arial,SimSun; font-size:16px; font-style:normal; font-variant-caps:normal; font-variant-ligatures:normal; font-weight:400; letter-spacing:normal; margin:0px 0px 24px; max-width:100%; orphans:2; text-align:justify; text-decoration-color:initial; text-decoration-style:initial; text-indent:0px; text-transform:none; white-space:normal; widows:2; word-spacing:0px" /><br />
If you want user input some secure text, you can set alert view style as UIAlertViewStyleSecureTextInput</p>

<p>&nbsp;</p>

<p><img alt="" src="http://img.blog.csdn.net/20150813173438813?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" style="box-sizing:border-box; margin:0px; max-width:100%" /><br />
If you want user input login information user name and password, you can set alert view style as UIAlertViewStyleLoginAndPasswordInput. Use&nbsp;[alertView&nbsp;textFieldAtIndex:0].text to get login text,&nbsp;[alertView&nbsp;textFieldAtIndex:1].text to get password text.</p>

<p><img alt="" src="http://img.blog.csdn.net/20150813173850298?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" style="box-sizing:border-box; margin:0px; max-width:100%" /></p>
</div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>

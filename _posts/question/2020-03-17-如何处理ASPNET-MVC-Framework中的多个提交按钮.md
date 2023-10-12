---
layout: question
title:  如何处理ASP.NET MVC Framework中的多个提交按钮？
date:   2020-03-17T08:28:27.000Z
description: 有一些简单的方法可以处理来自同一表单的多个提交按钮吗？例如：<% Html.BeginForm("MyAction", "MyController",...
img: 
author: 斯丁猪猪
category: question
answer: 22
tags: C＃ HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一些简单的方法可以处理来自同一表单的多个提交按钮吗？</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>&lt;% Html.BeginForm("MyAction", "MyController", FormMethod.Post); %&gt;<font></font>
&lt;input type="submit" value="Send" /&gt;<font></font>
&lt;input type="submit" value="Cancel" /&gt;<font></font>
&lt;% Html.EndForm(); %&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何想法如何在ASP.NET Framework Beta中做到这一点？</font><font style="vertical-align: inherit;">我搜索过的所有示例中都包含一个按钮。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1908篇《如何处理ASP.NET MVC Framework中的多个提交按钮？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Pro</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>Modified version of <code>HttpParamActionAttribute</code> method but with a bug fix for not causing an error on expired/invalid session postbacks. To see if this is a problem with your current site, open the your form in a window and just before you go to click <code>Save</code> or <code>Publish</code>, open a duplicate window, and logout. Now go back to your first window and try to submit your form using either button. For me I got an error so this change solves that problem for me. I omit a bunch of stuff for the sake of brevity but you should get the idea. The key parts are the inclusion of <code>ActionName</code> on the attribute and making sure the name passed in is the name of the View that shows the form</p>

<p><strong>Attribute Class</strong></p>

<pre><code>[AttributeUsage(AttributeTargets.Method, AllowMultiple = false, Inherited = true)]<font></font>
public class HttpParamActionAttribute : ActionNameSelectorAttribute<font></font>
{<font></font>
    private readonly string actionName;<font></font>
<font></font>
    public HttpParamActionAttribute(string actionName)<font></font>
    {<font></font>
        this.actionName = actionName;<font></font>
    }<font></font>
<font></font>
    public override bool IsValidName(ControllerContext controllerContext, string actionName, MethodInfo methodInfo)<font></font>
    {<font></font>
        if (actionName.Equals(methodInfo.Name, StringComparison.InvariantCultureIgnoreCase))<font></font>
            return true;<font></font>
<font></font>
        if (!actionName.Equals(this.actionName, StringComparison.InvariantCultureIgnoreCase))<font></font>
            return false;<font></font>
<font></font>
        var request = controllerContext.RequestContext.HttpContext.Request;<font></font>
        return request[methodInfo.Name] != null;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><strong>Controller</strong></p>

<pre><code>[Authorize(Roles="CanAddContent")]<font></font>
public ActionResult CreateContent(Guid contentOwnerId)<font></font>
{<font></font>
    var viewModel = new ContentViewModel<font></font>
    {<font></font>
        ContentOwnerId = contentOwnerId<font></font>
        //populate rest of view model<font></font>
    }<font></font>
    return View("CreateContent", viewModel);<font></font>
}<font></font>
<font></font>
[Authorize(Roles="CanAddContent"), HttpPost, HttpParamAction("CreateContent"), ValidateAntiForgeryToken]<font></font>
public ActionResult SaveDraft(ContentFormModel model)<font></font>
{<font></font>
    //Save as draft<font></font>
    return RedirectToAction("CreateContent");<font></font>
}<font></font>
<font></font>
[Authorize(Roles="CanAddContent"), HttpPost, HttpParamAction("CreateContent"), ValidateAntiForgeryToken]<font></font>
public ActionResult Publish(ContentFormModel model)<font></font>
{<font></font>
    //publish content<font></font>
    return RedirectToAction("CreateContent");<font></font>
}<font></font>
</code></pre>

<p><strong>View</strong></p>

<pre class="lang-html prettyprint-override"><code>@using (Ajax.BeginForm("CreateContent", "MyController", new { contentOwnerId = Model.ContentOwnerId }))<font></font>
{<font></font>
    @Html.AntiForgeryToken()<font></font>
    @Html.HiddenFor(x =&gt; x.ContentOwnerId)<font></font>
<font></font>
    &lt;!-- Rest of your form controls --&gt;<font></font>
    &lt;input name="SaveDraft" type="submit" value="SaveDraft" /&gt;<font></font>
    &lt;input name="Publish" type="submit" value="Publish" /&gt;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光伽罗</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><pre><code>//model<font></font>
    public class input_element<font></font>
        {<font></font>
         public string Btn { get; set; }<font></font>
        }   <font></font>
<font></font>
//views--submit btn can be input type also...<font></font>
    @using (Html.BeginForm())<font></font>
    {<font></font>
            &lt;button type="submit" name="btn" value="verify"&gt;<font></font>
             Verify data&lt;/button&gt;<font></font>
            &lt;button type="submit" name="btn" value="save"&gt;<font></font>
             Save data&lt;/button&gt;    <font></font>
            &lt;button type="submit" name="btn" value="redirect"&gt;<font></font>
                 Redirect&lt;/button&gt;<font></font>
    }<font></font>
<font></font>
//controller<font></font>
<font></font>
    public ActionResult About()<font></font>
        {<font></font>
            ViewBag.Message = "Your app description page.";<font></font>
            return View();<font></font>
        }<font></font>
<font></font>
        [HttpPost]<font></font>
        public ActionResult About(input_element model)<font></font>
        {<font></font>
                if (model.Btn == "verify")<font></font>
                {<font></font>
                // the Verify button was clicked<font></font>
                }<font></font>
                else if (model.Btn == "save")<font></font>
                {<font></font>
                // the Save button was clicked<font></font>
                } <font></font>
                else if (model.Btn == "redirect")<font></font>
                {<font></font>
                // the Redirect button was clicked<font></font>
                } <font></font>
                return View();<font></font>
        }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小卤蛋</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><pre><code>[HttpPost]<font></font>
public ActionResult ConfirmMobile(string nameValueResend, string nameValueSubmit, RegisterModel model)<font></font>
    {<font></font>
        var button = nameValueResend ?? nameValueSubmit;<font></font>
        if (button == "Resend")<font></font>
        {<font></font>
<font></font>
        }<font></font>
        else<font></font>
        {<font></font>
<font></font>
        }<font></font>
    }<font></font>
<font></font>
<font></font>
    Razor file Content:<font></font>
    @using (Html.BeginForm()<font></font>
    {<font></font>
        &lt;div class="page registration-result-page"&gt;<font></font>
<font></font>
            &lt;div class="page-title"&gt;<font></font>
                &lt;h1&gt; Confirm Mobile Number&lt;/h1&gt;<font></font>
            &lt;/div&gt;<font></font>
<font></font>
            &lt;div class="result"&gt;<font></font>
                @Html.EditorFor(model =&gt; model.VefificationCode)<font></font>
                @Html.LabelFor(model =&gt; model.VefificationCode, new { })<font></font>
                @Html.ValidationMessageFor(model =&gt; model.VefificationCode)<font></font>
            &lt;/div&gt;<font></font>
            &lt;div class="buttons"&gt;<font></font>
                &lt;button type="submit" class="btn" name="nameValueResend" value="Resend"&gt;<font></font>
                    Resend<font></font>
                &lt;/button&gt;<font></font>
                &lt;button type="submit" class="btn" name="nameValueSubmit" value="Verify"&gt;<font></font>
                    Submit<font></font>
                &lt;/button&gt;<font></font>
<font></font>
            &lt;/div&gt;<font></font>
            &lt;/div&gt;<font></font>
<font></font>
    }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙A宝儿</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我参加聚会很晚了，但是这里...我的实现是从@mkozicki借来的，但是需要更少的硬编码字符串才能出错。  </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要框架4.5+</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">本质上，控制器方法名称应该是路由的关键。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">按钮名称必须使用</font></font><code>"action:[controllerMethodName]"</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（请注意使用C＃6 </font></font><a href="https://msdn.microsoft.com/en-us/library/dn986596.aspx" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nameof</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> API，为要调用的控制器方法的名称提供特定于类型的引用。</font></font></p>

<pre><code>&lt;form&gt;<font></font>
    ... form fields ....<font></font>
    &lt;button name="action:@nameof(MyApp.Controllers.MyController.FundDeathStar)" type="submit" formmethod="post"&gt;Fund Death Star&lt;/button&gt;<font></font>
    &lt;button name="action:@nameof(MyApp.Controllers.MyController.HireBoba)" type="submit" formmethod="post"&gt;Hire Boba Fett&lt;/button&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制器</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>namespace MyApp.Controllers<font></font>
{<font></font>
    class MyController<font></font>
    {    <font></font>
        [SubmitActionToThisMethod]<font></font>
        public async Task&lt;ActionResult&gt; FundDeathStar(ImperialModel model)<font></font>
        {<font></font>
            await TrainStormTroopers();<font></font>
            return View();<font></font>
        }<font></font>
<font></font>
        [SubmitActionToThisMethod]<font></font>
        public async Task&lt;ActionResult&gt; HireBoba(ImperialModel model)<font></font>
        {<font></font>
            await RepairSlave1();<font></font>
            return View();<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性魔术</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">注意</font></font><a href="https://msdn.microsoft.com/en-us/library/system.runtime.compilerservices.callermembernameattribute(v=vs.110).aspx" rel="nofollow"><code>CallerMemberName</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">善良</font><font style="vertical-align: inherit;">的使用</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>[AttributeUsage(AttributeTargets.Method, AllowMultiple = false, Inherited = true)]<font></font>
public class SubmitActionToThisMethodAttribute : ActionNameSelectorAttribute<font></font>
{        <font></font>
    public SubmitActionToThisMethodAttribute([CallerMemberName]string ControllerMethodName = "")<font></font>
    {<font></font>
        controllerMethod = ControllerMethodName;<font></font>
        actionFormat = string.Concat(actionConstant, ":", controllerMethod);<font></font>
    }<font></font>
    const string actionConstant = "action";<font></font>
    readonly string actionFormat;<font></font>
    readonly string controllerMethod;<font></font>
<font></font>
    public override bool IsValidName(ControllerContext controllerContext, string actionName, MethodInfo methodInfo)<font></font>
    {<font></font>
        var isValidName = false;<font></font>
        var value = controllerContext.Controller.ValueProvider.GetValue(actionFormat);<font></font>
<font></font>
        if (value != null)<font></font>
        {<font></font>
            controllerContext.Controller.ControllerContext.RouteData.Values[actionConstant] = controllerMethod;<font></font>
            isValidName = true;<font></font>
        }<font></font>
        return isValidName;<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿阿飞Tom</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我编写的用于处理多个图像和/或文本按钮的扩展方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是图像按钮的HTML：</font></font></p>

<pre><code>&lt;input id="btnJoin" name="Join" src="/content/images/buttons/btnJoin.png" <font></font>
       type="image"&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或使用文本提交按钮：</font></font></p>

<pre><code>&lt;input type="submit" class="ui-button green" name="Submit_Join" value="Add to cart"  /&gt;<font></font>
&lt;input type="submit" class="ui-button red" name="Submit_Skip" value="Not today"  /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是您使用来从控制器调用的扩展方法</font></font><code>form.GetSubmitButtonName()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">对于图像按钮，它将查找带有的表单参数</font></font><code>.x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（表示单击了图像按钮）并提取名称。</font><font style="vertical-align: inherit;">对于常规</font></font><code>input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按钮，它将查找以开头的名称，</font></font><code>Submit_</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后从中提取命令。</font><font style="vertical-align: inherit;">因为我正在抽象确定“命令”的逻辑，所以您可以在客户端上的图像+文本按钮之间切换，而无需更改服务器端代码。</font></font></p>

<pre><code>public static class FormCollectionExtensions<font></font>
{<font></font>
    public static string GetSubmitButtonName(this FormCollection formCollection)<font></font>
    {<font></font>
        return GetSubmitButtonName(formCollection, true);<font></font>
    }<font></font>
<font></font>
    public static string GetSubmitButtonName(this FormCollection formCollection, bool throwOnError)<font></font>
    {<font></font>
        var imageButton = formCollection.Keys.OfType&lt;string&gt;().Where(x =&gt; x.EndsWith(".x")).SingleOrDefault();<font></font>
        var textButton = formCollection.Keys.OfType&lt;string&gt;().Where(x =&gt; x.StartsWith("Submit_")).SingleOrDefault();<font></font>
<font></font>
        if (textButton != null)<font></font>
        {<font></font>
            return textButton.Substring("Submit_".Length);<font></font>
        }<font></font>
<font></font>
        // we got something like AddToCart.x<font></font>
        if (imageButton != null)<font></font>
        {<font></font>
            return imageButton.Substring(0, imageButton.Length - 2);<font></font>
        }<font></font>
<font></font>
        if (throwOnError)<font></font>
        {<font></font>
            throw new ApplicationException("No button found");<font></font>
        }<font></font>
        else<font></font>
        {<font></font>
            return null;<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于文本按钮，您必须在名称前加上</font></font><code>Submit_</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我更喜欢这种方式，因为它意味着您可以更改文本（显示）值，而无需更改代码。</font><font style="vertical-align: inherit;">与</font></font><code>SELECT</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">不同</font><font style="vertical-align: inherit;">，</font></font><code>INPUT</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按钮仅具有“值”，而没有单独的“文本”属性。</font><font style="vertical-align: inherit;">我的按钮在不同的上下文中说的不同，但是映射到相同的“命令”。</font><font style="vertical-align: inherit;">我更喜欢用这种方式提取名称，而不必为编写代码</font></font><code>== "Add to cart"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云老丝</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我没有足够的代表在正确的位置发表评论，但我整天都在此发表评论，所以想分享。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试实现“ MultipleButtonAttribute”解决方案时，</font></font><code>ValueProvider.GetValue(keyValue)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将错误地返回</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原来，当我应该将System.Web.MVC版本3.0设置为4.0时（其他程序集是4.0）。</font><font style="vertical-align: inherit;">我不知道为什么我的项目无法正确升级，并且我没有其他明显的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果您</font></font><code>ActionNameSelectorAttribute</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不工作，请检查。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋宝儿Pro</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我要使用的技术，在这里还没有看到。</font><font style="vertical-align: inherit;">激发该解决方案的链接（由Saajid Ismail发布）为</font></font><a href="http://weblogs.asp.net/dfindley/archive/2009/05/31/asp-net-mvc-multiple-buttons-in-the-same-form.aspx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://weblogs.asp.net/dfindley/archive/2009/05/31/asp-net-mvc-multiple-buttons-in-the-same-form .aspx</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">它采用了Dylan Beattie的答案来进行本地化而没有任何问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在视图中：</font></font></p>

<pre><code>&lt;% Html.BeginForm("MyAction", "MyController", FormMethod.Post); %&gt;<font></font>
&lt;button name="button" value="send"&gt;&lt;%: Resources.Messages.Send %&gt;&lt;/button&gt;<font></font>
&lt;button name="button" value="cancel"&gt;&lt;%: Resources.Messages.Cancel %&gt;&lt;/button&gt;<font></font>
&lt;% Html.EndForm(); %&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在控制器中：</font></font></p>

<pre><code>public class MyController : Controller <font></font>
{<font></font>
    public ActionResult MyAction(string button)<font></font>
    {<font></font>
         switch(button)<font></font>
         {<font></font>
             case "send":<font></font>
                 this.DoSend();<font></font>
                 break;<font></font>
             case "cancel":<font></font>
                 this.DoCancel();<font></font>
                 break;<font></font>
         }<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim西里</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大卫·芬德利（David Findley）在他的ASP.Net Weblog上写下了大约3种不同的选择。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读本文</font></font><a href="http://weblogs.asp.net/dfindley/archive/2009/05/31/asp-net-mvc-multiple-buttons-in-the-same-form.aspx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中具有相同形式的多个按钮，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以查看他的解决方案以及每种解决方案的优缺点。</font><font style="vertical-align: inherit;">恕我直言，他提供了一个非常优雅的解决方案，该方案利用了装饰动作的属性。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天小卤蛋Green</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>There are three ways by which you can solve the above issue</p>

<ol>
<li>HTML way</li>
<li>Jquery way</li>
<li>“ActionNameSelectorAttribute” way</li>
</ol>

<p>Below is a video which summarizes all the three approaches in a demonstrative way.</p>

<p><a href="https://www.facebook.com/shivprasad.koirala/videos/vb.100002224977742/809335512483940" rel="noreferrer">https://www.facebook.com/shivprasad.koirala/videos/vb.100002224977742/809335512483940</a></p>

<p><strong>HTML way :-</strong></p>

<p>In the HTML way we need to create two forms and place the “Submit” button inside each of the forms. And every form’s action will point to different / respective actions. You can see the below code the first form is posting to “Action1” and the second form will post to “Action2” depending on which “Submit” button is clicked.</p>

<pre><code>&lt;form action="Action1" method=post&gt;<font></font>
&lt;input type=”submit” name=”Submit1”/&gt;<font></font>
&lt;/form&gt;<font></font>
<font></font>
&lt;form action="Action2" method=post&gt;<font></font>
&lt;input type=”submit” name=”Submit2”&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p><strong>Ajax way :-</strong></p>

<p>In case you are a  Ajax lover this second option would excite you more. In the Ajax way we can create two different functions “Fun1” and “Fun1” , see the below code. These functions will make Ajax calls by using JQUERY or any other framework. Each of these functions are binded with the “Submit” button’s “OnClick” events. Each of these function make call to respective action names.</p>

<pre><code>&lt;Script language="javascript"&gt;<font></font>
function Fun1()<font></font>
{<font></font>
$.post(“/Action1”,null,CallBack1);<font></font>
}<font></font>
function Fun2()<font></font>
{<font></font>
$.post(“/Action2”,null,CallBack2);<font></font>
}<font></font>
&lt;/Script&gt;<font></font>
<font></font>
&lt;form action="/Action1" method=post&gt;<font></font>
&lt;input type=submit name=sub1 onclick=”Fun2()”/&gt;<font></font>
&lt;/form&gt;<font></font>
&lt;form action="/Action2" method=post&gt;<font></font>
&lt;input type=submit name=sub2 onclick=”Fun1()”/&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p><strong>Using “ActionNameSelectorAttribute”:-</strong> </p>

<p>This is a great and a clean option. The “ActionNameSelectorAttribute” is a simple attribute class where we can write decision making logic which will decide which action can be executed.</p>

<p>So the first thing is in HTML we need to put proper name’s to the submit buttons for identifying them on the server. </p>

<p>You can see we have put “Save” and “Delete” to the button names. Also you can notice in the action we have just put controller name “Customer” and not a particular action name. We expect the action name will be decide by “ActionNameSelectorAttribute”.</p>

<pre><code>&lt;form action=”Customer” method=post&gt;<font></font>
&lt;input type=submit value="Save" name="Save" /&gt; &lt;br /&gt;<font></font>
&lt;input type=submit value="Delete" name="Delete"/&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p>So when the submit button is clicked , it first hits the “ActionNameSelector” attribute and then depending on which submit is fired it invokes the appropriate action.</p>

<p><img src="https://i.stack.imgur.com/mrw4H.png" alt="在此处输入图片说明"></p>

<p>So the first step is to create  a class which inherits from “ActionNameSelectorAttribute” class. In this class we have created a simple property “Name”.</p>

<p>We also need to override the “IsValidName” function which returns true or flase. This function is where we write the logic whether an action has to be executed or not. So if this function returns true then the action is executed or else it is not.</p>

<pre><code>public class SubmitButtonSelector : ActionNameSelectorAttribute<font></font>
    {<font></font>
        public string Name { get; set; }<font></font>
        public override bool IsValidName(ControllerContext controllerContext, string actionName, System.Reflection.MethodInfo methodInfo)<font></font>
        {<font></font>
            // Try to find out if the name exists in the data sent from form<font></font>
var value = controllerContext.Controller.ValueProvider.GetValue(Name);<font></font>
            if (value != null)<font></font>
            {<font></font>
                return true;<font></font>
            }<font></font>
            return false;<font></font>
<font></font>
        }<font></font>
    }<font></font>
</code></pre>

<p>The main heart of the above function is in the below code. The “ValueProvider” collection has all the data that has been posted from the form. So it first looks up the “Name” value and if its  found in the HTTP request it returns true or else it returns false.</p>

<pre><code>var value = controllerContext.Controller.ValueProvider.GetValue(Name);<font></font>
if (value != null)<font></font>
      {<font></font>
        return true;<font></font>
      }<font></font>
      return false;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后可以根据相应的动作修饰此属性类，并可以提供相应的“名称”值。</font><font style="vertical-align: inherit;">因此，如果提交正在执行此操作，并且名称与HTML提交按钮名称匹配，则它将进一步执行该操作，否则将不执行该操作。</font></font></p>

<pre><code>public class CustomerController : Controller<font></font>
{<font></font>
        [SubmitButtonSelector(Name="Save")]<font></font>
        public ActionResult Save()<font></font>
        {<font></font>
            return Content("Save Called");<font></font>
        }<font></font>
        [SubmitButtonSelector(Name = "Delete")]<font></font>
        public ActionResult Delete()<font></font>
        {<font></font>
            return Content("Delete Called");<font></font>
        }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanHarry</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您没有使用HTML 5的限制，则可以将</font></font><code>&lt;button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记与</font></font><code>formaction</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Attribute一起使用：</font></font></p>

<pre><code>&lt;form action="demo_form.asp" method="get"&gt;<font></font>
   First name: &lt;input type="text" name="fname" /&gt;&lt;br /&gt;<font></font>
   Last name: &lt;input type="text" name="lname" /&gt;&lt;br /&gt;<font></font>
   &lt;button type="submit"&gt;Submit&lt;/button&gt;&lt;br /&gt;<font></font>
   &lt;button type="submit" formaction="demo_admin.asp"&gt;Submit as admin&lt;/button&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="http://www.w3schools.com/html5/att_button_formaction.asp" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://www.w3schools.com/html5/att_button_formaction.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.w3schools.com/html5/att_button_formaction.asp</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的浏览器支持输入按钮的属性formaction（IE 10+，不确定其他浏览器），那么以下方法应该起作用：</font></font></p>

<pre><code>@using (Html.BeginForm()){<font></font>
    //put form inputs here<font></font>
<font></font>
&lt;input id="sendBtn" value="Send" type="submit" formaction="@Url.Action("Name Of Send Action")" /&gt;<font></font>
<font></font>
&lt;input id="cancelBtn" value="Cancel" type="submit" formaction="@Url.Action("Name of Cancel Action") /&gt;<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiA</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是最适合我的方法：</font></font></p>

<pre><code>&lt;input type="submit" value="Delete" name="onDelete" /&gt;<font></font>
&lt;input type="submit" value="Save" name="onSave" /&gt;<font></font>
<font></font>
<font></font>
public ActionResult Practice(MyModel model, string onSave, string onDelete)<font></font>
{<font></font>
    if (onDelete != null)<font></font>
    {<font></font>
        // Delete the object<font></font>
        ...<font></font>
        return EmptyResult();<font></font>
    }<font></font>
<font></font>
    // Save the object<font></font>
    ...<font></font>
    return EmptyResult();<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里老丝古一</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也遇到过这个“问题”，但是通过添加</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">找到了一个相当合乎逻辑的解决方案</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我不记得其他语言有这个问题。</font></font></p>

<p><a href="http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2</font></font></a></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果一个表单包含多个提交按钮，则仅激活的提交按钮成功。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意味着以下代码</font></font><code>value</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性可以更改，本地化，国际化，而</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">额外的代码检查强类型资源文件或常量。</font></font></p>

<pre><code>&lt;% Html.BeginForm("MyAction", "MyController", FormMethod.Post); %&gt;<font></font>
&lt;input type="submit" name="send" value="Send" /&gt;<font></font>
&lt;input type="submit" name="cancel" value="Cancel" /&gt;<font></font>
&lt;input type="submit" name="draft" value="Save as draft" /&gt;<font></font>
&lt;% Html.EndForm(); %&gt;`<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在接收端，您只需要检查您的任何已知提交类型是否不是 </font></font><code>null</code></p>

<pre><code>public ActionResult YourAction(YourModel model) {<font></font>
<font></font>
    if(Request["send"] != null) {<font></font>
<font></font>
        // we got a send<font></font>
<font></font>
    }else if(Request["cancel"]) {<font></font>
<font></font>
        // we got a cancel, but would you really want to post data for this?<font></font>
<font></font>
    }else if(Request["draft"]) {<font></font>
<font></font>
        // we got a draft<font></font>
<font></font>
    }<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯乐</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不喜欢ActionSelectName的地方是，控制器中的每个操作方法都会调用IsValidName。</font><font style="vertical-align: inherit;">我不知道为什么这样工作。</font><font style="vertical-align: inherit;">我喜欢一个解决方案，其中每个按钮根据其功能都有不同的名称，但是我不喜欢这样的事实，即操作方法中的参数必须与表单中的按钮一样多。</font><font style="vertical-align: inherit;">我为所有按钮类型创建了一个枚举：</font></font></p>

<pre><code>public enum ButtonType<font></font>
{<font></font>
    Submit,<font></font>
    Cancel,<font></font>
    Delete<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用ActionFilter代替ActionSelectName：</font></font></p>

<pre><code>public class MultipleButtonsEnumAttribute : ActionFilterAttribute<font></font>
{<font></font>
    public Type EnumType { get; set; }<font></font>
<font></font>
    public MultipleButtonsEnumAttribute(Type enumType)<font></font>
    {<font></font>
        EnumType = enumType;<font></font>
    }<font></font>
<font></font>
    public override void OnActionExecuting(ActionExecutingContext filterContext)<font></font>
    {<font></font>
        foreach (var key in filterContext.HttpContext.Request.Form.AllKeys)<font></font>
        {<font></font>
            if (Enum.IsDefined(EnumType, key))<font></font>
            {<font></font>
                var pDesc = filterContext.ActionDescriptor.GetParameters()<font></font>
                    .FirstOrDefault(x =&gt; x.ParameterType == EnumType);<font></font>
                filterContext.ActionParameters[pDesc.ParameterName] = Enum.Parse(EnumType, key);<font></font>
                break;<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">筛选器将在表单数据中找到按钮名称，并且如果按钮名称与枚举中定义的任何按钮类型匹配，它将在操作参数中找到ButtonType参数：</font></font></p>

<pre><code>[MultipleButtonsEnumAttribute(typeof(ButtonType))]<font></font>
public ActionResult Manage(ButtonType buttonPressed, ManageViewModel model)<font></font>
{<font></font>
    if (button == ButtonType.Cancel)<font></font>
    {<font></font>
        return RedirectToAction("Index", "Home");<font></font>
    }<font></font>
    //and so on<font></font>
    return View(model)<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在视图中，我可以使用：</font></font></p>

<pre><code>&lt;input type="submit" value="Button Cancel" name="@ButtonType.Cancel" /&gt;<font></font>
&lt;input type="submit" value="Button Submit" name="@ButtonType.Submit" /&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOL蛋蛋</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以这样写：</font></font></p>

<pre><code>&lt;% Html.BeginForm("MyAction", "MyController", FormMethod.Post); %&gt;<font></font>
&lt;input type="submit" name="button" value="Send" /&gt;<font></font>
&lt;input type="submit" name="button" value="Cancel" /&gt;<font></font>
&lt;% Html.EndForm(); %&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在页面中检查名称==“发送”或名称==“取消” ...</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐小小</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该能够为按钮命名并为其赋予一个值。</font><font style="vertical-align: inherit;">然后将此名称作为参数映射到操作。</font><font style="vertical-align: inherit;">或者，使用2个单独的动作链接或2个形式。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁AJinJin</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议有兴趣的人士</font></font><a href="https://blog.maartenballiauw.be/post/2009/11/26/supporting-multiple-submit-buttons-on-an-aspnet-mvc-view.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看看Maarten Balliauw的解决方案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我觉得这很优雅。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">万一链接消失，它将使用</font></font><code>MultiButton</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用于控制器动作</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">属性来指示该动作应与哪个按钮单击相关。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomGO小小</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>Just written a post about that:
<a href="http://blog.ashmind.com/index.php/2010/03/15/multiple-submit-buttons-with-asp-net-mvc-final-solution/" rel="noreferrer">Multiple submit buttons with ASP.NET MVC</a>:</p>

<p>Basically, instead of using <code>ActionMethodSelectorAttribute</code>, I am using
<code>ActionNameSelectorAttribute</code>, which allows me to pretend the action name is whatever I want it to be. Fortunately, <code>ActionNameSelectorAttribute</code> does not just make me specify action name, instead I can choose whether the current action matches request. </p>

<p>So there is my class (btw I am not too fond of the name):  </p>

<pre><code>public class HttpParamActionAttribute : ActionNameSelectorAttribute {<font></font>
    public override bool IsValidName(ControllerContext controllerContext, string actionName, MethodInfo methodInfo) {<font></font>
        if (actionName.Equals(methodInfo.Name, StringComparison.InvariantCultureIgnoreCase))<font></font>
            return true;<font></font>
<font></font>
        if (!actionName.Equals("Action", StringComparison.InvariantCultureIgnoreCase))<font></font>
            return false;<font></font>
<font></font>
        var request = controllerContext.RequestContext.HttpContext.Request;<font></font>
        return request[methodInfo.Name] != null;<font></font>
    }<font></font>
} <font></font>
</code></pre>

<p>To use just define a form like this:</p>

<pre><code>&lt;% using (Html.BeginForm("Action", "Post")) { %&gt;<font></font>
  &lt;!— …form fields… --&gt;<font></font>
  &lt;input type="submit" name="saveDraft" value="Save Draft" /&gt;<font></font>
  &lt;input type="submit" name="publish" value="Publish" /&gt;<font></font>
&lt;% } %&gt; <font></font>
</code></pre>

<p>and controller with two methods  </p>

<pre><code>public class PostController : Controller {<font></font>
    [HttpParamAction]<font></font>
    [AcceptVerbs(HttpVerbs.Post)]<font></font>
    public ActionResult SaveDraft(…) {<font></font>
        //…<font></font>
    }<font></font>
<font></font>
    [HttpParamAction]<font></font>
    [AcceptVerbs(HttpVerbs.Post)]<font></font>
    public ActionResult Publish(…) {<font></font>
        //…<font></font>
    } <font></font>
}<font></font>
</code></pre>

<p>As you see, the attribute does not require you to specify anything at all. Also, name of the buttons are translated directly to the method names. Additionally (I haven’t tried that) these should work as normal actions as well, so you can post to any of them
directly.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小A卡卡西</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它很短，很套房：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><a href="https://stackoverflow.com/a/19652874/3021180"><font style="vertical-align: inherit;">耶伦·多普</font></a><font style="vertical-align: inherit;">（</font><a href="https://stackoverflow.com/a/19652874/3021180"><font style="vertical-align: inherit;">Jeroen Dop</font></a><font style="vertical-align: inherit;">）回答了</font></font><a href="https://stackoverflow.com/a/19652874/3021180"><font style="vertical-align: inherit;"></font></a></p>
</blockquote>

<pre><code>&lt;input type="submit" name="submitbutton1" value="submit1" /&gt;<font></font>
&lt;input type="submit" name="submitbutton2" value="submit2" /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在代码背后这样做</font></font></p>

<pre><code> if( Request.Form["submitbutton1"] != null)<font></font>
{<font></font>
    // Code for function 1<font></font>
}<font></font>
else if(Request.Form["submitButton2"] != null )<font></font>
{<font></font>
       // code for function 2<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">祝好运。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端前端凯</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Eilon建议您可以这样：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有多个按钮，则可以通过为每个按钮命名来区分它们：</font></font></p>

<pre><code>&lt;input type="submit" name="SaveButton" value="Save data" /&gt;<font></font>
&lt;input type="submit" name="CancelButton" value="Cancel and go back to main page" /&gt;<font></font>
</code></pre>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在控制器操作方法中，可以添加以HTML输入标记名称命名的参数：</font></font></p>

<pre><code>public ActionResult DoSomeStuff(string saveButton, string<font></font>
cancelButton, ... other parameters ...)<font></font>
{ ... }<font></font>
</code></pre>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果将任何值发布到这些参数之一，则表示该按钮是被单击的按钮。</font><font style="vertical-align: inherit;">Web浏览器将只发布了一个值，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">得到了点击该按钮。</font><font style="vertical-align: inherit;">所有其他值将为null。</font></font></p>

<pre><code>if (saveButton != null) { /* do save logic */ }<font></font>
if (cancelButton != null) { /* do cancel logic */ }<font></font>
</code></pre>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢这种方法，因为它不依赖于提交按钮的value属性，该属性比分配的名称更容易更改，并且不需要启用javascript</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅：</font><a href="http://forums.asp.net/p/1369617/2865166.aspx#2865166" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：
 </font></font><a href="http://forums.asp.net/p/1369617/2865166.aspx#2865166" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//forums.asp.net/p/1369617/2865166.aspx#2865166</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝小哥梅</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以按照前面提到的操作检查名称，但是您可能会考虑这是否是一个好的设计。</font><font style="vertical-align: inherit;">考虑动作的责任，不要将此设计与按钮名称之类的UI方面过多耦合，是一个好主意。</font><font style="vertical-align: inherit;">因此，请考虑使用2种形式和2种动作：</font></font></p>

<pre><code>&lt;% Html.BeginForm("Send", "MyController", FormMethod.Post); %&gt;<font></font>
&lt;input type="submit" name="button" value="Send" /&gt;<font></font>
&lt;% Html.EndForm(); %&gt;<font></font>
<font></font>
&lt;% Html.BeginForm("Cancel", "MyController", FormMethod.Post); %&gt;<font></font>
&lt;input type="submit" name="button" value="Cancel" /&gt;<font></font>
&lt;% Html.EndForm(); %&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，在“取消”的情况下，您通常只是不处理表单，而是转到新的URL。</font><font style="vertical-align: inherit;">在这种情况下，您根本不需要提交表单，只需一个链接：</font></font></p>

<pre><code>&lt;%=Html.ActionLink("Cancel", "List", "MyController") %&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一Eva</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在很大程度上基于</font></font><a href="http://blog.maartenballiauw.be/post/2009/11/26/supporting-multiple-submit-buttons-on-an-aspnet-mvc-view.aspx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Maarten Balliauw</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的帖子和评论，这是一个针对多个提交按钮问题的基于属性的，几乎干净的解决方案</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>[AttributeUsage(AttributeTargets.Method, AllowMultiple = false, Inherited = true)]<font></font>
public class MultipleButtonAttribute : ActionNameSelectorAttribute<font></font>
{<font></font>
    public string Name { get; set; }<font></font>
    public string Argument { get; set; }<font></font>
<font></font>
    public override bool IsValidName(ControllerContext controllerContext, string actionName, MethodInfo methodInfo)<font></font>
    {<font></font>
        var isValidName = false;<font></font>
        var keyValue = string.Format("{0}:{1}", Name, Argument);<font></font>
        var value = controllerContext.Controller.ValueProvider.GetValue(keyValue);<font></font>
<font></font>
        if (value != null)<font></font>
        {<font></font>
            controllerContext.Controller.ControllerContext.RouteData.Values[Name] = Argument;<font></font>
            isValidName = true;<font></font>
        }<font></font>
<font></font>
        return isValidName;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">剃刀：</font></font></p>

<pre><code>&lt;form action="" method="post"&gt;<font></font>
 &lt;input type="submit" value="Save" name="action:Save" /&gt;<font></font>
 &lt;input type="submit" value="Cancel" name="action:Cancel" /&gt;<font></font>
&lt;/form&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和控制器：</font></font></p>

<pre><code>[HttpPost]<font></font>
[MultipleButton(Name = "action", Argument = "Save")]<font></font>
public ActionResult Save(MessageModel mm) { ... }<font></font>
<font></font>
[HttpPost]<font></font>
[MultipleButton(Name = "action", Argument = "Cancel")]<font></font>
public ActionResult Cancel(MessageModel mm) { ... }<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></em> <a href="https://docs.microsoft.com/en-us/aspnet/core/mvc/razor-pages/#using-multiple-handlers" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">剃刀页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来可以提供相同的功能。</font><font style="vertical-align: inherit;">对于新开发，它可能是更可取的。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>

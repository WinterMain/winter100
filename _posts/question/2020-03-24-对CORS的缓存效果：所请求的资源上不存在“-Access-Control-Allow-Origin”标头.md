---
layout: question
title:  对CORS的缓存效果：所请求的资源上不存在“ Access-Control-Allow-Origin”标头
date:   2020-03-24T06:21:45.000Z
description: The short version of this issue is we are seeing the typical CORS error (x ha...
img: 
author: 斯丁前端
category: question
answer: 4
tags: browser Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>The short version of this issue is we are seeing the typical CORS error (<code>x has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.</code>) however we are absolutely sending the specified headers. The requests are fine to begin with however after n (pattern undetermined) amount of time SOME (no real pattern to this other than it's a random 1 or 2 assets referenced in the html file) requests will suddenly start failing. <em>On a hard refresh or with disabling cache, the issue is resolved.</em></p>

<p>We're wondering how caching may affect CORS in this case? Or if the issue lies elsewhere?</p>

<p>What we see is the asset is loaded fine in the first instance. </p>

<p>Here's a cURL representation of what the browser (<strong>chrome</strong>, not tested elsewhere) sends to the server (<strong>cloudfront in front of s3</strong>):</p>

<pre><code>curl -I 'https://assets-frontend.kalohq.ink/style.allapps.add899080acbbeed5bb6a7301d234b65.css' -H 'Referer: https://lystable.kalohq.ink/projects/2180?edit=true' -H 'Origin: https://lystable.kalohq.ink' -H 'DPR: 2' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gec
</code></pre>

<p>And the headers in response to this look like:</p>

<pre><code>HTTP/1.1 200 OK<font></font>
Content-Type: text/css<font></font>
Content-Length: 5632<font></font>
Connection: keep-alive<font></font>
Date: Wed, 28 Jun 2017 09:23:04 GMT<font></font>
Access-Control-Allow-Origin: *<font></font>
Access-Control-Allow-Methods: GET<font></font>
Access-Control-Max-Age: 3000<font></font>
Last-Modified: Wed, 28 Jun 2017 09:16:15 GMT<font></font>
ETag: "ece4babc2509d989254638493ff4c742"<font></font>
Cache-Control: max-age=31556926<font></font>
Content-Encoding: gzip<font></font>
Accept-Ranges: bytes<font></font>
Server: AmazonS3<font></font>
Vary: Origin,Access-Control-Request-Headers,Access-Control-Request-Method<font></font>
Age: 3384<font></font>
X-Cache: Hit from cloudfront<font></font>
Via: 1.1 adc13b6f5827d04caa2efba65479257c.cloudfront.net (CloudFront)<font></font>
X-Amz-Cf-Id: PcC2qL04aC4DPtNuwCudckVNM3QGhz4jiDL10IDkjIBnCOK3hxoMoQ==<font></font>
</code></pre>

<p>After this you can browse the site for a while, refresh a few times and everything is fine and dandy.</p>

<p>But then you might refresh and suddenly you see the error in console:</p>

<pre><code>Access to CSS stylesheet at 'https://assets-frontend.kalohq.ink/style.allapps.add899080acbbeed5bb6a7301d234b65.css' from origin 'https://kalohq.ink' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'https://kalohq.ink' is therefore not allowed access.
</code></pre>

<p>At this point if you hard-refresh or disable the cache and reload the page everything goes back to working. This is why we're pointing at browser caching behaviour playing with CORS at this point.</p>

<p>The HTML file loading these assets is as follows:</p>

<pre><code>&lt;!doctype html&gt;&lt;html lang="en"&gt;&lt;head&gt;&lt;meta charset="utf-8"&gt;&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;&lt;title&gt;Kalo&lt;/title&gt;&lt;meta name="description" content="Kalo is used by the best teams on the planet to onboard, manage, and pay their freelancers. "&gt;&lt;meta name="viewport" content="width=device-width,initial-scale=1"&gt;&lt;meta http-equiv="Accept-CH" content="Width,DPR,Save-Data"&gt;&lt;script&gt;window.performance&amp;&amp;"function"==typeof window.performance.mark&amp;&amp;window.performance.mark("start load bootstrap"),console.log("Kalo v0.214.1 🎉")&lt;/script&gt;&lt;script type="text/javascript" crossorigin="anonymous"&gt;window.webpackManifest={0:"moment-timezone-data.8189aab661847dea1b73.chunk.js",1:"1.7645e36f0742ed31139b.chunk.js",2:"2.bf0a1c9b400d715e3138.chunk.js",3:"3.d077b7a1cede6f6960e6.chunk.js",4:"4.0bbd51f182d8fa3f4951.chunk.js",5:"5.1dcf124ea7874546fc7a.chunk.js",6:"6.85ee04326ef5cfe2c084.chunk.js",7:"7.cf718eabaa3814fcb47c.chunk.js",8:"8.4c4c5b070e09afe037a1.chunk.js",9:"9.ba3b9a5f540f057fca46.chunk.js",10:"10.3c850061770df8801575.chunk.js",11:"11.df971dd9c4ab435fd421.chunk.js",12:"12.81905afa591a4796dcfc.chunk.js",13:"13.0f78c0c77d45cd79ac26.chunk.js",14:"14.f8f9f24d15e1cc4372a1.chunk.js",15:"15.6badd92530b5da668e98.chunk.js",16:"16.ef87b8dc2f87ca2d40a1.chunk.js",17:"17.bf842b852470057c4f0b.chunk.js",18:"18.f091321e6a0bbf16bf1f.chunk.js",19:"19.0297861a162b49308887.chunk.js",20:"20.7281da4b01eb4eb4bf1f.chunk.js",21:"21.781ca5137a9c76031df2.chunk.js",22:"22.c7dfd45fc0bd41c7618d.chunk.js",23:"23.8c4885794fd57453884a.chunk.js",24:"24.1447090b6f41a311414e.chunk.js",25:"25.021a38e680888fe2ac7e.chunk.js",26:"26.1afe06be0d6164d3409a.chunk.js",27:"27.dc70b696039ad4762a3b.chunk.js",28:"28.8c383709ce92ecae6b0c.chunk.js",29:"29.f594eb538f606ae17c50.chunk.js",30:"30.a2c1dfc70e0fac57b2a4.chunk.js",31:"31.2eaee95b85227b23ccd8.chunk.js",32:"32.528e99c8151fef966483.chunk.js",33:"33.c3b7530ab92bc1280136.chunk.js",34:"34.1eb5635dc498ad450839.chunk.js",35:"35.e71c1e7bc6092ff2a35f.chunk.js",36:"36.0d174c67ddb177944140.chunk.js",37:"37.af1c6ed4cde9120da636.chunk.js",38:"38.fb0dd22a16e7b597ef93.chunk.js",39:"39.c17f705a3438de3dc997.chunk.js",40:"40.d509fa240e2adf2888aa.chunk.js",41:"41.37d2f0e0e06a3c7d816b.chunk.js",42:"42.4febbf78adc3084afec3.chunk.js",43:"43.7aa48b320fcf69adb0a3.chunk.js",44:"44.5e6da9391c7412910447.chunk.js",45:"45.a17d5b7c5e534f260841.chunk.js",46:"46.a1d3a7790959ac892ed0.chunk.js",47:"47.241627b0e5da4ce35606.chunk.js",48:"48.84f9532a64f5a3beb20c.chunk.js",49:"49.f8527afe7cade8fc293a.chunk.js",50:"50.776b466f9019479de8fc.chunk.js",51:"51.ca34827c84d4bcc82079.chunk.js",52:"52.517f4f6c63395646cdd7.chunk.js",53:"53.e3a2103e4151cd13300f.chunk.js",54:"athena.5e6c5b01662cea2c8b1a.chunk.js",55:"hera.b69b80db056ad9c9389f.chunk.js",56:"hermes.29bb236b97c128e8b6ee.chunk.js",57:"iris.834233a6fb064bf576a9.chunk.js",58:"hephaestus.7ac71b3274dda739ba1f.chunk.js",59:"59.ce1aefa687f2ef9c9908.chunk.js",60:"60.5070b818882287dfc402.chunk.js",61:"61.19d5149d0a2bd9ef3c1e.chunk.js",62:"62.d7831f900b939591822e.chunk.js"}&lt;/script&gt;&lt;link rel="shortcut icon" href="https://assets-frontend.kalohq.ink/favicon.ico" crossorigin="anonymous"&gt;&lt;link href="https://assets-frontend.kalohq.ink/style.allapps.add899080acbbeed5bb6a7301d234b65.css" rel="stylesheet" crossorigin="anonymous"&gt;&lt;link href="https://assets-frontend.kalohq.ink/style.hermes.689f9795642815d4b8afd20e446a174d.css" rel="stylesheet" crossorigin="anonymous"&gt;&lt;link rel="preload" href="https://assets-frontend.kalohq.ink/hermes.29bb236b97c128e8b6ee.js" as="script" crossorigin="anonymous"&gt;&lt;link rel="preload" href="https://assets-frontend.kalohq.ink/style.hermes.689f9795642815d4b8afd20e446a174d.css" as="style" crossorigin="anonymous"&gt;&lt;link rel="preload" href="https://assets-frontend.kalohq.ink/allapps.commons.8395b1aa9666e3271c40.js" as="script" crossorigin="anonymous"&gt;&lt;link rel="preload" href="https://assets-frontend.kalohq.ink/style.allapps.add899080acbbeed5bb6a7301d234b65.css" as="style" crossorigin="anonymous"&gt;&lt;link rel="preload" href="https://assets-frontend.kalohq.ink/vendor.83e606c69fc5ae7aeb9b.js" as="script" crossorigin="anonymous"&gt;&lt;link rel="preload" href="https://assets-frontend.kalohq.ink/core/styles/fonts/Fakt-Soft-Pro-SemiBold/FaktSoftPro-SemiBold.1901bce5eea18c64a60693e961585ba1.woff" as="font" crossorigin="anonymous"&gt;&lt;link rel="preload" href="https://assets-frontend.kalohq.ink/core/styles/fonts/Fakt-Soft-Pro-Blond/FaktSoftPro-Blond.4ab21e2be2f31a0ab8d798a9c65f99c1.woff" as="font" crossorigin="anonymous"&gt;&lt;link rel="prefetch" href="https://assets-frontend.kalohq.ink/hera.b69b80db056ad9c9389f.js" crossorigin="anonymous"&gt;&lt;link rel="prefetch" href="https://assets-frontend.kalohq.ink/iris.834233a6fb064bf576a9.js" crossorigin="anonymous"&gt;&lt;link rel="prefetch" href="https://assets-frontend.kalohq.ink/athena.5e6c5b01662cea2c8b1a.js" crossorigin="anonymous"&gt;&lt;link rel="prefetch" href="https://assets-frontend.kalohq.ink/moment-timezone-data.8189aab661847dea1b73.chunk.js" crossorigin="anonymous"&gt;&lt;link rel="prefetch" href="https://assets-frontend.kalohq.ink/style.hera.f00a272db8e5756775fb2632e67c1056.css" crossorigin="anonymous"&gt;&lt;link rel="prefetch" href="https://assets-frontend.kalohq.ink/style.iris.1465dc22f4279c748a04c66f3b4494de.css" crossorigin="anonymous"&gt;&lt;link rel="prefetch" href="https://assets-frontend.kalohq.ink/style.athena.6acb14c0d060121364c9a0cf3e6fa0ad.css" crossorigin="anonymous"&gt;&lt;link rel="prefetch" href="https://assets-frontend.kalohq.ink/_/node_modules/@kalo/ui/icon/fonts/MaterialIcons/MaterialIcons-Regular.012cf6a10129e2275d79d6adac7f3b02.woff" crossorigin="anonymous"&gt;&lt;link rel="prefetch" href="https://assets-frontend.kalohq.ink/core/assets/fonts/MaterialIcons-Regular.012cf6a10129e2275d79d6adac7f3b02.woff" crossorigin="anonymous"&gt;&lt;link rel="prefetch" href="https://assets-frontend.kalohq.ink/_/node_modules/@kalo/ui/icon/fonts/MaterialIcons/MaterialIcons-Regular.570eb83859dc23dd0eec423a49e147fe.woff2" crossorigin="anonymous"&gt;&lt;link rel="prefetch" href="https://assets-frontend.kalohq.ink/core/assets/fonts/MaterialIcons-Regular.570eb83859dc23dd0eec423a49e147fe.woff2" crossorigin="anonymous"&gt;&lt;/head&gt;&lt;body&gt;&lt;main id="app"&gt;&lt;!--[if lt IE 8]&gt;<font></font>
  &lt;p class="browserupgrade"&gt;You are using an outdated browser. Please &lt;a href="http://browsehappy.com/"&gt;upgrade your browser&lt;/a&gt; to improve your experience.&lt;/p&gt;<font></font>
  &lt;![endif]--&gt;&lt;noscript&gt;Kalo - Work without boundaries Please wait a moment as we load Kalo. Please make sure you have Javascript enabled to continue. Kalo’s aim is to give companies complete visibility over their external network.&lt;/noscript&gt;&lt;noscript&gt;&lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5XLW75" height="0" width="0" style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;&lt;/noscript&gt;&lt;/main&gt;&lt;div class="root __splash"&gt;&lt;style&gt;html{position:static!important;overflow-y:auto}.root{transition:opacity .35s linear;color:#234957;background-color:#f9fafc;position:absolute;top:0;right:0;bottom:0;left:0;opacity:1}.root.exit{opacity:0!important}.navigation{height:60px;background:#fff;border-bottom:1px solid #eceff1}.login{background:#ea5f6e;position:absolute;top:0;left:0;bottom:0;width:50%;display:flex;justify-content:center;align-items:center}@media screen and (max-width:767px){.login{width:100%;right:0}}.hide{display:none!important}.logo{height:107px}&lt;/style&gt;&lt;div id="navbar" class="navigation hide"&gt;&lt;/div&gt;&lt;div id="login" class="login hide"&gt;&lt;div class="logo"&gt;&lt;svg width="160" height="70" viewBox="0 0 206 90" xmlns="http://www.w3.org/2000/svg"&gt;&lt;title&gt;Kalo&lt;/title&gt;&lt;path fill-rule="evenodd" fill="#fff" d="M17.629 47.172c2.31 0 4.254-.986 6.078-2.833l18.845-19.706c1.824-1.971 3.89-2.957 6.323-2.957 7.294 0 10.212 9.114 5.835 13.55L35.378 54.562l18.724 19.706c3.283 3.571 3.526 8.498.244 12.07-1.46 1.601-3.406 2.464-5.837 2.464-2.552 0-4.62-.986-6.2-2.834L23.707 65.646c-1.7-1.847-3.647-2.832-5.835-2.832h-1.58v17.612c0 4.804-3.405 8.5-8.147 8.5-4.376 0-8.145-3.942-8.145-8.5V8.498C0 3.695 3.647 0 8.145 0c4.5 0 8.147 3.695 8.147 8.498v38.674h1.337zm97.134 29.56c0 2.586-.972 4.433-2.916 5.789-6.566 4.557-15.077 6.773-25.654 6.773-16.656 0-25.653-9.236-25.653-21.676 0-11.455 8.146-20.076 25.045-20.076 3.891 0 8.39.616 13.496 1.848v-3.326c0-6.528-3.283-9.608-11.55-9.608-3.525 0-7.417.74-11.672 2.095-6.686 2.094-11.185-1.11-11.185-6.405 0-3.572 1.823-6.035 5.35-7.513 4.742-2.094 10.698-3.08 17.871-3.08 17.872 0 26.868 8.376 26.868 25.003v30.176zm-15.682-4.68V60.965c-4.378-1.354-8.39-1.97-12.159-1.97-6.443 0-10.577 3.202-10.577 8.006 0 5.296 4.134 8.252 10.942 8.252 4.5 0 8.51-1.11 11.794-3.203zm39.845 8.904c0 4.803-3.405 8.498-8.147 8.498-4.376 0-8.145-3.941-8.145-8.498V9.15c0-4.803 3.647-8.62 8.145-8.62 4.5 0 8.147 3.817 8.147 8.62v71.806zm57.513 1.359c-5.348 4.681-12.035 7.02-20.06 7.02-7.903 0-14.589-2.339-20.06-7.02-5.471-4.68-8.511-10.715-9.118-17.982-.365-5.788-.365-11.7 0-17.612.607-7.391 3.525-13.426 8.996-18.106 5.472-4.68 12.28-7.02 20.183-7.02 8.024 0 14.71 2.34 20.06 7.02 5.349 4.68 8.389 10.715 8.997 18.106.365 5.789.365 11.7 0 17.488-.608 7.391-3.648 13.427-8.998 18.106zm-7.172-33.009c-.363-7.02-5.229-11.946-12.887-11.946-7.417 0-12.402 4.68-13.01 11.946a69.483 69.483 0 0 0 0 12.318c.608 7.266 5.593 11.946 13.01 11.946 7.416 0 12.4-4.68 12.887-11.946a69.326 69.326 0 0 0 0-12.318z"/&gt;&lt;/svg&gt;&lt;/div&gt;&lt;/div&gt;&lt;script&gt;"/login"===window.location.pathname&amp;&amp;-1===document.cookie.indexOf("VIEW=")?document.getElementById("login").classList.remove("hide"):document.getElementById("navbar").classList.remove("hide"),document.querySelector(".__splash.root").id="splash"&lt;/script&gt;&lt;/div&gt;&lt;script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Symbol,fetch,Intl.~locale.en&amp;amp;unknown=polyfill"&gt;&lt;/script&gt;&lt;script src="https://apis.google.com/js/client.js" async&gt;&lt;/script&gt;&lt;script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDteWPK1-k97egIjYcX8-Btt8SpRsHit50&amp;libraries=places" async&gt;&lt;/script&gt;&lt;script&gt;!function(e,t,a,n,c,o,s){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,o=t.createElement(a),s=t.getElementsByTagName(a)[0],o.async=1,o.src="https://www.google-analytics.com/analytics.js",s.parentNode.insertBefore(o,s)}(window,document,"script",0,"ga"),ga("create","","auto")&lt;/script&gt;&lt;script&gt;!function(e,t,a,n,g){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-5XLW75",m.parentNode.insertBefore(r,m)}(window,document,"script","dataLayer")&lt;/script&gt;&lt;script&gt;!function(){function t(){var t=a.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://widget.intercom.io/widget/s21m3m5m";var e=a.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}var e=window,n=e.Intercom;if("function"==typeof n)n("reattach_activator"),n("update",intercomSettings);else{var a=document,c=function(){c.c(arguments)};c.q=[],c.c=function(t){c.q.push(t)},e.Intercom=c,e.attachEvent?e.attachEvent("onload",t):e.addEventListener("load",t,!1)}}()&lt;/script&gt;&lt;script type="text/javascript" src="https://assets-frontend.kalohq.ink/vendor.83e606c69fc5ae7aeb9b.js" crossorigin="anonymous"&gt;&lt;/script&gt;&lt;script type="text/javascript" src="https://assets-frontend.kalohq.ink/allapps.commons.8395b1aa9666e3271c40.js" crossorigin="anonymous"&gt;&lt;/script&gt;&lt;script type="text/javascript" src="https://assets-frontend.kalohq.ink/hermes.29bb236b97c128e8b6ee.js" crossorigin="anonymous"&gt;&lt;/script&gt;&lt;/body&gt;&lt;/html&gt;<font></font>
</code></pre>

<p>Something to note here is that all <code>script</code> and <code>link</code> tags have <code>crossorigin="anonymous"</code>. Also note the preload and prefetch tags.</p>

<p>The issue is mostly affecting stylesheets it seems BUT scripts have also been affected in the same manner. Again it's really odd that it seems to pick randomly which assets will break and when. Considering these two facts perhaps it is even based on the reference ordering in the document/load order.</p>

<p>A few final clarifications hopefully to help:</p>

<ul>
<li>Assets served from cloudfront in front of s3 (see response headers)</li>
<li>Not had reports/testing in browsers other than chrome at this point though can hopefully update on that shortly</li>
<li>All the script and stylesheet assets are preloaded using </li>
</ul>

<p>Any help or guidance with this issue is going to be hugely appreciated. It's pretty blocking at the moment!</p>

<p><strong>Update:</strong></p>

<p>So we have managed to get what appears to be a continuously working build out without any apparent issues. Hard to know for 100% without time due to seemingly sporadic/random nature of the issue. What we changed was the following:</p>

<ul>
<li>Bypass Cloudfront to directly reference assets in S3. What could be different?</li>
<li>Set <code>access-control-max-age</code> to <code>-1</code> which disables this. We wouldn't expect this to have any effect because this should only (reading spec) affect preflight requests which don't occur for GET requests.</li>
<li>Remove the preload/prefetch link tags.</li>
</ul>

<p>We are now doing further testing to try and isolate one or a combo of these as the culprits. We can then dig further into what is happening there.</p>

<blockquote>
  <p>Note this <em>solving</em> the issue has now been proved incorrect. See <em>Update 2</em>.</p>
</blockquote>

<p><strong>Update 2:</strong></p>

<p>We have had further reports and occurrences in-house of the issue after the previous rollout which we thought bypassed the issue. One affect the previous rollout did have was that the issue is now seen much less frequently. Again a hard refresh fixes everything.</p>

<p>The issue is identical to previously described still and so far we have not seen first-hand a failure to load JS since the first occurrence - always seems to be a CSS file failing now.</p>

<p><strong>Update 3:</strong></p>

<p>Some pretty important information I didn't mention originally is the change which happened around the time this issue started presenting itself.</p>

<p>Last Monday we released a bundle refactor, powered by <a href="https://webpack.js.org/" rel="noreferrer">webpack</a> which meant assets became shared between deployments. For example if an output file <code>allapps.commons.HASH123.css</code> didn't change between release v1 and v2 then the idea is we could leverage browser caching.</p>

<p>What still happens however is that the script uploading these assets to S3 <em>IS</em> currently dumbly uploading and overriding the original file. We were under the assumption this change would be pretty harmless since the file is the same name and contents but perhaps this has some adverse effect?</p>

<p>Another effect of this release was that now there will be a lot more assets due to aggressive <a href="https://webpack.js.org/guides/code-splitting/#components/sidebar/sidebar.jsx" rel="noreferrer">code splitting</a>. One thing to note here though is that none of the async chunks seem to suffer from the same problem (they're using jsonp afterall) and the issue is only with those assets reference via <code>&lt;script&gt;</code> and <code>&lt;link&gt;</code> tags.</p>

<p>You can find the build artifacts of the release PRIOR to the breaking release <a href="https://drive.google.com/open?id=0ByRPB4t3N6FjMjNId19tR1ItWGM" rel="noreferrer">here</a>. And find the NEW build artifacts of the current active release showing infrequent issues <a href="https://drive.google.com/open?id=0ByRPB4t3N6FjZDVJcUJHVXR2azA" rel="noreferrer">here</a>. You can also find our deploy scripts <a href="https://drive.google.com/open?id=0ByRPB4t3N6FjN01CSUpIMzhFMFE" rel="noreferrer">here</a></p>

<p>All resources can be found on google drive <a href="https://drive.google.com/open?id=0ByRPB4t3N6FjZEVSaTZqOUxRZTQ" rel="noreferrer">here</a>.</p>

<p><strong>Update 4:</strong></p>

<p>This issue is still occurring and has now been reported on an async chunk which is loaded on-demand. Looking at the webpack runtime these scripts are loaded by adding a new script tag to the page, again with <code>crossorigin="anonymous"</code>.</p>

<p><strong>Update 5:</strong></p>

<p>On each build we now use a unique salt (the release version) when hashing the file names. This means no assets are shared between builds. The issue has continued to persist after this release.</p>

<p><strong>Update 6:</strong></p>

<p>I've uploaded a <a href="https://drive.google.com/open?id=0ByRPB4t3N6FjdnZ3ZWZBZ0pPdGM" rel="noreferrer"><code>.har</code> file</a> showing this issue occurring over a user session.</p>

<p>Search for the following string <code>"url": "https://assets-frontend.kalohq.ink/style.allapps.add899080acbbeed5bb6a7301d234b65.css",</code> and see the various requests made for this asset. You will see the first few are fine and have the headers you'd the expect. The last occurrence (line 32624) is the one which failed.</p>

<pre><code>{<font></font>
    "startedDateTime": "2017-06-28T09:40:15.534Z",<font></font>
    "time": 0,<font></font>
    "request": {<font></font>
      "method": "GET",<font></font>
      "url": "https://assets-frontend.kalohq.ink/style.allapps.add899080acbbeed5bb6a7301d234b65.css",<font></font>
      "httpVersion": "unknown",<font></font>
      "headers": [<font></font>
        {<font></font>
          "name": "Referer",<font></font>
          "value": "https://kalohq.ink/account"<font></font>
        },<font></font>
        {<font></font>
          "name": "Origin",<font></font>
          "value": "https://kalohq.ink"<font></font>
        },<font></font>
        {<font></font>
          "name": "DPR",<font></font>
          "value": "2"<font></font>
        },<font></font>
        {<font></font>
          "name": "User-Agent",<font></font>
          "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"<font></font>
        }<font></font>
      ],<font></font>
      "queryString": [],<font></font>
      "cookies": [],<font></font>
      "headersSize": -1,<font></font>
      "bodySize": 0<font></font>
    },<font></font>
    "response": {<font></font>
      "status": 0,<font></font>
      "statusText": "",<font></font>
      "httpVersion": "unknown",<font></font>
      "headers": [],<font></font>
      "cookies": [],<font></font>
      "content": {<font></font>
        "size": 0,<font></font>
        "mimeType": "x-unknown"<font></font>
      },<font></font>
      "redirectURL": "",<font></font>
      "headersSize": -1,<font></font>
      "bodySize": -1,<font></font>
      "_transferSize": 0,<font></font>
      "_error": ""<font></font>
    },<font></font>
    "cache": {},<font></font>
    "timings": {<font></font>
      "blocked": -1,<font></font>
      "dns": -1,<font></font>
      "connect": -1,<font></font>
      "send": 0,<font></font>
      "wait": 0,<font></font>
      "receive": 0,<font></font>
      "ssl": -1<font></font>
    },<font></font>
    "serverIPAddress": "",<font></font>
    "pageref": "page_10"<font></font>
  },<font></font>
</code></pre>

<p><strong>Update 7:</strong></p>

<p>So last night we pushed a change which removed the usage of the <code>crossorigin="anonymous"</code> attribute <em>everywhere</em>. So far we have not seen the issue occur (still waiting given the nature of the issue) but are seeing some interesting and unexpected responses from the requests being made now. Would be great if we could get some clarification on what exactly is happening here. I don't believe we expected removing <code>crossorigin="anonymous"</code> to have such an effect or even understand why it was so broken before since our server is setup to send the correct headers AND the <code>Vary</code> header.</p>

<p><em>Request from cli to s3, with an Origin header, no cors response headers</em></p>

<pre><code>curl -I 'https://s3.amazonaws.com/olympus.lystable.com/style.allapps.5ebcc4d28ec238a53f46d6c8e12900d1.css' -H 'Pragma: no-cache' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-GB,en-US;q=0.8,en;q=0.6' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/59.0.3071.109 Chrome/59.0.3071.109 Safari/537.36' -H 'Accept: text/css,*/*;q=0.1' -H 'Referer: https://asos.kalohq.com/categories' -H 'Connection: keep-alive' -H 'DPR: 1' -H 'Cache-Control: no-cache' -H "Origin: https://kalohq.com" --compressed<font></font>
HTTP/1.1 200 OK<font></font>
x-amz-id-2: kxOvBrYsKyZ42wGgJu8iyRZ8q6j5DHDC6QoK1xn2e8FO1wIEEVkxQ0JvGQTmwrN/Njf8EOlmLrE=<font></font>
x-amz-request-id: DA8B5488D3A7EF73<font></font>
Date: Thu, 13 Jul 2017 13:27:47 GMT<font></font>
Last-Modified: Thu, 13 Jul 2017 11:30:50 GMT<font></font>
ETag: "c765a0a215cb4c9a074f22c3863c1223"<font></font>
Cache-Control: max-age=31556926<font></font>
Content-Encoding: gzip<font></font>
Accept-Ranges: bytes<font></font>
Content-Type: text/css<font></font>
Content-Length: 5887<font></font>
Server: AmazonS3<font></font>
</code></pre>

<p><em>Request a moment later from cli again to s3 with just origin header. Now suddenly gives all expected cors headers back...</em></p>

<pre><code>curl -H "Origin: https://kalohq.com" -I https://assets-frontend.kalohq.com/style.allapps.5ebcc4d28ec238a53f46d6c8e12900d1.css<font></font>
HTTP/1.1 200 OK<font></font>
Content-Type: text/css<font></font>
Content-Length: 5887<font></font>
Connection: keep-alive<font></font>
Date: Thu, 13 Jul 2017 13:33:09 GMT<font></font>
Access-Control-Allow-Origin: *<font></font>
Access-Control-Allow-Methods: GET<font></font>
Access-Control-Max-Age: -1<font></font>
Last-Modified: Thu, 13 Jul 2017 11:30:50 GMT<font></font>
ETag: "c765a0a215cb4c9a074f22c3863c1223"<font></font>
Cache-Control: max-age=31556926<font></font>
Content-Encoding: gzip<font></font>
Accept-Ranges: bytes<font></font>
Server: AmazonS3<font></font>
Vary: Origin,Access-Control-Request-Headers,Access-Control-Request-Method<font></font>
Age: 69<font></font>
X-Cache: Hit from cloudfront<font></font>
Via: 1.1 a19c66da9b402e0bee3fd29619661850.cloudfront.net (CloudFront)<font></font>
X-Amz-Cf-Id: 3wQ7Z6EaAcMscGirwsYVi1M_rvoc1fbI034QY4QZd6IqmlRzLRllEg==<font></font>
</code></pre>

<p><strong>Update 8:</strong></p>

<p>The removal of <code>crossorigin="anonymous"</code> tags have resolved the issue. Investigation into why this suddenly started being an issue with this release is ongoing since we had this attribute on script tags <em>before</em>.</p>

<hr>

<p><em>All resources useful in this investigation can be found on google drive <a href="https://drive.google.com/open?id=0ByRPB4t3N6FjZEVSaTZqOUxRZTQ" rel="noreferrer">here</a>.</em></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3361篇《对CORS的缓存效果：所请求的资源上不存在“ Access-Control-Allow-Origin”标头》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想分享一下我们遇到的同样问题，但是在这种情况下，请特别预加载一些字体。</font><font style="vertical-align: inherit;">我们注意到S3，CloudFront和Safari的结合正在杀死我们，因此我们决定删除</font></font><code>preload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>crossorigin="anonymous"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们正在尝试这样做：</font></font></p>

<p><code>&lt;link rel="preload" href="&lt;zzz.cloudfrontUrl.com&gt;" as="font" crossOrigin="anonymous" /&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是野生动物园以某种方式破坏了缓存，并且它</font></font><code>not allowed access-control-allow-origin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是在某些时候</font><font style="vertical-align: inherit;">提供缓存</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们的假设是，可能来自任何CDN的safari和preload字体之间都存在问题</font></font><code>crossOrigin="anonymous"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（这是</font></font><a href="https://drafts.csswg.org/css-fonts/#font-fetching-requirements" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要求</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问候。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam老丝</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以告诉我们这是怎么发生的。</font><font style="vertical-align: inherit;">Azure CDN（我们使用）目前不支持Vary：标头。</font><font style="vertical-align: inherit;">到目前为止很糟糕。</font><font style="vertical-align: inherit;">但是现在我们使用脚本crossorigin属性，这就是有趣的事情，某些浏览器不支持。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果现在这样的浏览器来到我们的网站，它将不会发送原始信息：因为它不了解“ crossorigin”属性。</font><font style="vertical-align: inherit;">如果以后又有另一个了解它的人来了，它将发送源：-&gt; CORS错误，因为已缓存第一个响应。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">丑陋。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将我们的JS迁移到Webpack时，我们遇到了同样的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们的设置类似：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部署期间将资产上载到S3存储桶</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值区设为Cloudfront来源 </font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迁移到Webpack时，我们希望利用JS源映射来更好地向Airbrake报告错误。</font><font style="vertical-align: inherit;">为了正确捕获错误，必须</font></font><code>crossorigin="anonymous"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在脚本标签上设置属性。</font><font style="vertical-align: inherit;">此处说明原因：</font><a href="https://blog.sentry.io/2016/05/17/what-is-script-error.html" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：
 </font></font><a href="https://blog.sentry.io/2016/05/17/what-is-script-error.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//blog.sentry.io/2016/05/17/what-is-script-error.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题的一部分是，有时返回CORS响应标头，有时不返回，在浏览器中触发CORS错误。</font><font style="vertical-align: inherit;">Cloudfront服务器使用不带CORS标头的OR来缓存响应，具体取决于第一个客户端请求是否发出Miss请求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有两种可能的结果：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一个客户端不发送原始请求标头=&gt; Cloudfront服务器缓存没有CORS标头的响应。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一个客户端发送原始请求标头=&gt; Cloudfront服务器缓存没有CORS标头的响应。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这使问题看起来像是随机的，但这仅是竞争条件（第一个客户端如何发出请求）以及在不同的Cloudfront服务器上缓存的不同标头的问题：时间和位置相关。</font><font style="vertical-align: inherit;">此外，浏览器可能会缓存这些错误的标头...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您需要正确配置Cloudront的分发行为以：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许并缓存预检（OPTIONS）请求</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将缓存基于CORS请求标头（来源，Access-Control-Request-Headers，Access-Control-Request-Method）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是解决我们问题的配置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">S3存储桶/权限/ CORS配置：</font></font></p>

<pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;<font></font>
&lt;CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/"&gt;<font></font>
&lt;CORSRule&gt;<font></font>
    &lt;AllowedOrigin&gt;*&lt;/AllowedOrigin&gt;<font></font>
    &lt;AllowedMethod&gt;GET&lt;/AllowedMethod&gt;<font></font>
    &lt;AllowedMethod&gt;HEAD&lt;/AllowedMethod&gt;<font></font>
    &lt;MaxAgeSeconds&gt;300&lt;/MaxAgeSeconds&gt;<font></font>
    &lt;AllowedHeader&gt;*&lt;/AllowedHeader&gt;<font></font>
&lt;/CORSRule&gt;<font></font>
&lt;/CORSConfiguration&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cloudfront分发/编辑行为：</font></font></p>

<p><a href="https://i.stack.imgur.com/nxViB.png" rel="noreferrer"><img src="https://i.stack.imgur.com/nxViB.png" alt="在此处输入图片说明"></a></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我们刚刚将CSS迁移到Webpack，因此遇到了与您类似的问题。</font><font style="vertical-align: inherit;">我们正在遇到CSS文件的偶发性CORS错误。</font><font style="vertical-align: inherit;">我们正在尝试删除</font><font style="vertical-align: inherit;">标签</font></font><code>crossorigin="anonymous"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">属性，</font></font><code>&lt;link rel="stylesheet" /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为我们不需要对CSS文件进行错误跟踪。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><a href="https://assets-frontend.kalohq.ink/style.allapps.add899080acbbeed5bb6a7301d234b65.css" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅当存在“ Origin”标头（与CORS请求一起发送，但不发送常规请求）时，</font><a href="https://assets-frontend.kalohq.ink/style.allapps.add899080acbbeed5bb6a7301d234b65.css" rel="noreferrer"><font style="vertical-align: inherit;">https：</font></a><font style="vertical-align: inherit;"> //assets-frontend.kalohq.ink/style.allapps.add899080acbbeed5bb6a7301d234b65.css仅返回CORS标头。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是发生了什么：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户获取CSS作为no-CORS请求的一部分（例如</font></font><code>&lt;link rel="stylesheet"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">由于</font></font><code>Cache-Control</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标题</font><font style="vertical-align: inherit;">而缓存</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户获取CSS作为CORS请求的一部分。</font><font style="vertical-align: inherit;">响应来自缓存。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CORS检查失败，没有</font></font><code>Access-Control-Allow-Origin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标题。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器在这里有问题，它应该使用</font></font><code>Vary</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标头来指示其响应根据</font></font><code>Origin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标头（和其他标头）的变化。</font><font style="vertical-align: inherit;">它发送此标头以响应CORS请求，但也应发送它以响应非CORS请求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome此处存在一些错误，因为它应该使用请求的凭据模式作为缓存密钥的一部分，因此非凭据请求（例如发出的请求</font></font><code>fetch()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）不应与缓存中使用凭据请求的项匹配。</font><font style="vertical-align: inherit;">我认为这里还有其他类似Chrome浏览器的浏览器，但Firefox却不是。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，由于您使用的是CDN，因此您不能依靠浏览器来完成此操作，因为缓存可能仍会在CDN上进行。</font><font style="vertical-align: inherit;">添加正确的</font></font><code>Vary</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标题是正确的解决方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">tl; dr：将以下标头添加到</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持CORS的响应中：</font></font></p>

<pre><code>Vary: Origin, Access-Control-Request-Headers, Access-Control-Request-Method
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>

---
layout: post
title:  BASE64 Converter在线转换
date:   2019-03-18T08:35:09.000Z
description: 在线字符串转BASE64，在线图片转BASE64，轻轻拖拽图片，即可完成对图片的BASE64编码。点击即可解码BASE64文本...
img: https://www.samyoc.com/uploads/users/1/images/thumbnails/1552897384339.png
author: Winter
category: blog
answer: 0
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><section style="overflow:hidden;"><section data-role="outer" label="Powered by 365editor" style="font-family:微软雅黑;font-size:16px;"><section class="KolEditor" data-tools-id="64510"><section style="margin: 10px;display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;-webkit-justify-content: center;-moz-justify-content: center;-ms-justify-content: center;-o-justify-content: center;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;"><section style="background-image: url(&quot;http://editor-material.oss-cn-beijing.aliyuncs.com/style/20190318/1552880809/%E6%96%B0%E5%A2%9E%E7%B4%A0%E6%9D%90_0.png&quot;); background-position: center bottom; background-repeat: no-repeat; background-size: 100%; width: 125px; padding-bottom: 10px; box-sizing: border-box;"><p style="font-size: 15px;margin: 0;text-align: center;color: #a5beb5;">BASE64</p></section><section style="background-image: url(&quot;http://editor-material.oss-cn-beijing.aliyuncs.com/style/20190318/1552880809/%E6%96%B0%E5%A2%9E%E7%B4%A0%E6%9D%90_1.png&quot;); background-position: center top; background-repeat: no-repeat; background-size: 100%; width: 125px; padding-top: 10px; box-sizing: border-box;"><p style="font-size: 15px;margin: 0;text-align: center;color: #a5beb5;">在线转换</p></section></section></section><section class="KolEditor" data-tools-id="72497"><section style="margin:10px;display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;-webkit-justify-content:center;-moz-justify-content:center;-ms-justify-content:center;-o-justify-content:center;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;"><section style="
padding: 5px; border: 2px solid rgb(116, 169, 137); box-sizing: border-box;margin-top: 60px;"><section style="padding: 15px;border:1px dashed #74a989;display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;-webkit-flex-direction: column;-moz-flex-direction: column;-ms-flex-direction: column;-o-flex-direction: column;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;"><section style="width:172px;" class=""><img src="http://editor-user.oss-cn-beijing.aliyuncs.com/29/8/1483908/1552897477954834.png" alt="" style="max-width: 100%; height: auto;" data-tools-id="48107"></section><section style="margin-top: 20px;"><p style="color: #282828;margin: 0;text-align: left;font-size: 13px;line-height: 1.5;">在线字符串转BASE64，在线图片转BASE64，轻轻拖拽图片，即可完成对图片的BASE64编码。点击即可解码BASE64文本。</p></section></section></section></section></section><p><br></p><p>什么是BASE64？

Base64是网络上最常见的用于传输8Bit字节码的编码方式之一，是一种基于64个可打印字符来表示二进制数据的方法。</p><pre><code>/**
 * BASE64 与字符串互转
 * https://www.samyoc.com
 * Winter
 */
function Base64() {

    // Primary key
    _baseKey = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    /**
     * Encode string to base64 string.
     * @param {String} input The input string
     */
    this.encode = function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8Encode(input);
        while (i &lt; input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 &gt;&gt; 2;
            enc2 = ((chr1 &amp; 3) &lt;&lt; 4) | (chr2 &gt;&gt; 4);
            enc3 = ((chr2 &amp; 15) &lt;&lt; 2) | (chr3 &gt;&gt; 6);
            enc4 = chr3 &amp; 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                _baseKey.charAt(enc1) + _baseKey.charAt(enc2) +
                _baseKey.charAt(enc3) + _baseKey.charAt(enc4);
        }
        return output;
    }

    /**
     * Decode base64 string to normal string.
     * @param {String} input The input base64 string.
     */
    this.decode = function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i &lt; input.length) {
            enc1 = _baseKey.indexOf(input.charAt(i++));
            enc2 = _baseKey.indexOf(input.charAt(i++));
            enc3 = _baseKey.indexOf(input.charAt(i++));
            enc4 = _baseKey.indexOf(input.charAt(i++));
            chr1 = (enc1 &lt;&lt; 2) | (enc2 &gt;&gt; 4);
            chr2 = ((enc2 &amp; 15) &lt;&lt; 4) | (enc3 &gt;&gt; 2);
            chr3 = ((enc3 &amp; 3) &lt;&lt; 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = _utf8Decode(output);
        return output;
    }

    // UTF-8 encoding
    _utf8Encode = function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n &lt; string.length; n++) {
            var c = string.charCodeAt(n);
            if (c &lt; 128) {
                utftext += String.fromCharCode(c);
            } else if ((c &gt; 127) &amp;&amp; (c &lt; 2048)) {
                utftext += String.fromCharCode((c &gt;&gt; 6) | 192);
                utftext += String.fromCharCode((c &amp; 63) | 128);
            } else {
                utftext += String.fromCharCode((c &gt;&gt; 12) | 224);
                utftext += String.fromCharCode(((c &gt;&gt; 6) &amp; 63) | 128);
                utftext += String.fromCharCode((c &amp; 63) | 128);
            }

        }
        return utftext;
    }

    // UTF-8 decoding
    _utf8Decode = function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i &lt; utftext.length) {
            c = utftext.charCodeAt(i);
            if (c &lt; 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c &gt; 191) &amp;&amp; (c &lt; 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c &amp; 31) &lt;&lt; 6) | (c2 &amp; 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c &amp; 15) &lt;&lt; 12) | ((c2 &amp; 63) &lt;&lt; 6) | (c3 &amp; 63));
                i += 3;
            }
        }
        return string;
    }
}</code></pre><section class="KolEditor" data-tools-id="56630"><section style="margin:10px auto;text-align:center;"><section style="background-image:url(http://editor-material.oss-cn-beijing.aliyuncs.com/style/20190305/1551754504/%E6%96%B0%E5%A2%9E%E7%B4%A0%E6%9D%90_0.png);background-position: center;background-repeat: no-repeat;background-size: 100% auto;width:284px;height:176px;overflow-y:auto;margin: 0 auto;padding: 25px 39px 44px 45px;box-sizing:border-box;"><p style="font-size: 15px;line-height: 1.5;color: #333333;text-align: justify;margin: 0;"><span style="caret-color: rgb(47, 47, 47); color: rgb(47, 47, 47); font-family: ubuntu, PingFangSC-regular, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Microsoft YaHei&quot;, Tahoma, sans-serif; font-size: 15px; letter-spacing: 2px; text-align: justify; text-size-adjust: auto;">成功的关键在于相信自己有成功的能力。A SamYoc APP designed by YLD(Winter)</span></p></section></section></section><p><br></p></section></section></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第116篇《BASE64 Converter在线转换》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>

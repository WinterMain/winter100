---
layout: post
title:  JavaScript读取画布像素的RGB值
date:   2021-06-22T07:39:33.000Z
description: 在画布中移动鼠标，获取当前点的RGB值
img: 
author: Winter
category: blog
answer: 0
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content">{"code":{"html":"<canvas id=\"myCanvas\" width=\"200\" height=\"200\" style=\"border: red;border-style: dotted\">\nYour browser does not support the canvas element.\n</canvas>\n\n<div>\n\t<div id=\"text\"></div>\n\t<span id=\"color\" style=\"display:inline-block;width:100px;height:30px\"></span>\n</div>","css":"","js":"var color = document.getElementById(\"color\");\nvar text = document.getElementById(\"text\");\nvar canvas = document.getElementById(\"myCanvas\");\nvar context = canvas.getContext(\"2d\");\nvar destX = 0;\nvar destY = 0;\nvar imageObj = new Image();\nimageObj.onload = function(){\n    context.drawImage(imageObj, destX, destY);\n};\nimageObj.src = \"https://www.samyoc.com/uploads/users/1/images/1596023567451.jpg\";\n\ncanvas.onmousemove = function(e) {\n    // not so sure about these... might need to offset them or so\n    var x = e.x;\n    var y = e.y;\n\n    // set color now\n    var canvasColor = context.getImageData(x, y, 1, 1).data; // rgba e [0,255]\n    var r = canvasColor[0];\n    var g = canvasColor[1];\n    var b = canvasColor[2];\n\t\ttext.innerText=\"R=\"+r+\",G=\"+g+ \",b=\"+b;\n    color.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';\n}"},"options":{"activeKey":"player","hide":{"html":false,"css":false,"js":false},"name":{"html":"HTML","css":"CSS","js":"JavaScript"},"layout":"left","profile":{"html":"","css":"type=\"text/css\"","js":""},"mode":{"html":"htmlmixed","css":"css","js":"javascript"}}}</div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4284篇《JavaScript读取画布像素的RGB值》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>

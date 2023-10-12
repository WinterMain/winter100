---
layout: question
title:  Google Maps API v3：如何删除所有标记？
date:   2020-03-20T05:38:28.000Z
description: 在Google Maps API v2中，如果我想删除所有地图标记，则只需执行以下操作：map.clearOverlays();如何在Googl...
img: 
author: ProAGil
category: question
answer: 21
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Google Maps API v2中，如果我想删除所有地图标记，则只需执行以下操作：</font></font></p>

<pre><code>map.clearOverlays();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在Google Maps API </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v3中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行此操作</font><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看</font></font><a href="http://code.google.com/apis/maps/documentation/v3/reference.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Reference API</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，对我来说还不清楚。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2486篇《Google Maps API v3：如何删除所有标记？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐小小</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这可能是一个简单的解决方案，但这就是我要做的</font></font></p>

<pre><code>$("#map_canvas").html("");<font></font>
markers = [];<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次都为我工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用gmap V3插件：
</font></font><code>$("#map").gmap("removeAllMarkers");</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅：</font><a href="http://www.smashinglabs.pl/gmap/documentation#after-load" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://www.smashinglabs.pl/gmap/documentation#after-load" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.smashinglabs.pl/gmap/documentation#after-load</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYGreen</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到了简单的解决方案（我认为）： </font></font></p>

<pre><code>var marker = new google.maps.Marker();<font></font>
<font></font>
function Clear(){<font></font>
     marker.setMap(null);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Tom</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用速记做得很好。</font><font style="vertical-align: inherit;">做就是了</font></font></p>

<pre><code>    map.clear();
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要将地图null设置为该标记。</font></font></p>

<pre><code>var markersList = [];    <font></font>
<font></font>
function removeMarkers(markersList) {<font></font>
   for(var i = 0; i &lt; markersList.length; i++) {<font></font>
      markersList[i].setMap(null);<font></font>
   }<font></font>
}<font></font>
<font></font>
function addMarkers() {<font></font>
   var marker = new google.maps.Marker({<font></font>
        position : {<font></font>
            lat : 12.374,<font></font>
            lng : -11.55<font></font>
        },<font></font>
        map : map<font></font>
       });<font></font>
      markersList.push(marker);<font></font>
   }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是说要删除它们还是隐藏它们或删除它们？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果隐藏：</font></font></p>

<pre><code>function clearMarkers() {<font></font>
            setAllMap(null);<font></font>
        }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要删除它们：</font></font></p>

<pre><code> function deleteMarkers() {<font></font>
            clearMarkers();<font></font>
            markers = [];<font></font>
        }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，我使用数组标记来跟踪它们并手动将其重置。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro逆天猿</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是清除Googlemap</font></font></p>

<pre><code>mGoogle_map.clear();
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一TonyPro</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需遍历标记并将其从地图中删除，然后清空地图标记数组即可：</font></font></p>

<pre><code>var markers = map.markers;<font></font>
for(var i = 0; i &lt; markers.length; i++) {<font></font>
    markers[i].setMap(null);<font></font>
}<font></font>
map.markers = [];<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道为什么，但是，</font></font><code>setMap(null)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我使用时</font><font style="vertical-align: inherit;">，设置</font><font style="vertical-align: inherit;">标记对我不起作用</font></font><code>DirectionsRenderer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我也必须打电话</font></font><code>setMap(null)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给我</font></font><code>DirectionsRenderer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre><code>var directionsService = new google.maps.DirectionsService();<font></font>
var directionsDisplay = new google.maps.DirectionsRenderer();<font></font>
<font></font>
if (map.directionsDisplay) {<font></font>
    map.directionsDisplay.setMap(null);<font></font>
}<font></font>
<font></font>
map.directionsDisplay = directionsDisplay;<font></font>
<font></font>
var request = {<font></font>
    origin: start,<font></font>
    destination: end,<font></font>
    travelMode: google.maps.TravelMode.DRIVING<font></font>
};<font></font>
<font></font>
directionsDisplay.setMap(map);<font></font>
directionsService.route(request, function (result, status) {<font></font>
    if (status == google.maps.DirectionsStatus.OK) {<font></font>
        directionsDisplay.setDirections(result);<font></font>
    }<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是Google自己在至少一个示例中使用的方法：</font></font></p>

<pre><code>var markers = [];<font></font>
<font></font>
// Clear out the old markers.<font></font>
markers.forEach(function(marker) {<font></font>
  marker.setMap(null);<font></font>
});<font></font>
markers = [];<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查Google示例以获取完整的代码示例：</font></font></p>

<p><a href="https://developers.google.com/maps/documentation/javascript/examples/places-searchbox" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developers.google.com/maps/documentation/javascript/examples/places-searchbox</font></font></a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙小小米亚</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要从地图中删除所有标记，请创建类似以下内容的函数：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.addMarker（位置）：此功能用于在地图上添加标记</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.clearMarkers（）：此函数从地图而不是数组中删除所有标记</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3.setMapOnAll（map）：此函数用于在数组中添加标记信息</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4.deleteMarkers（）：此函数通过删除对标记的引用来删除数组中的所有标记。</font></font></p>

<pre><code>// Adds a marker to the map and push to the array.<font></font>
      function addMarker(location) {<font></font>
        var marker = new google.maps.Marker({<font></font>
          position: location,<font></font>
          map: map<font></font>
        });<font></font>
        markers.push(marker);<font></font>
      }<font></font>
<font></font>
<font></font>
// Sets the map on all markers in the array.<font></font>
      function setMapOnAll(map) {<font></font>
        for (var i = 0; i &lt; markers.length; i++) {<font></font>
          markers[i].setMap(map);<font></font>
        }<font></font>
      }<font></font>
<font></font>
<font></font>
<font></font>
// Removes the markers from the map, but keeps them in the array.<font></font>
  function clearMarkers() {<font></font>
    setMapOnAll(null);<font></font>
  }<font></font>
<font></font>
// Deletes all markers in the array by removing references to them.<font></font>
      function deleteMarkers() {<font></font>
        clearMarkers();<font></font>
        markers = [];<font></font>
      }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚使用kmlLayer.setMap（null）进行了尝试，并且它起作用了。</font><font style="vertical-align: inherit;">不知道这是否可以与常规标记一起使用，但似乎可以正常使用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">清除所有叠加层，包括多边形，标记等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需使用：</font></font></p>

<p><code>map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);}</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我在地图应用程序上编写的用于实现此功能的函数：</font></font></p>

<pre><code>  function clear_Map() {<font></font>
    directionsDisplay = new google.maps.DirectionsRenderer();<font></font>
    //var chicago = new google.maps.LatLng(41.850033, -87.6500523);<font></font>
    var myOptions = {<font></font>
        zoom: 8,<font></font>
        mapTypeId: google.maps.MapTypeId.ROADMAP,<font></font>
        center: HamptonRoads<font></font>
    }<font></font>
<font></font>
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);<font></font>
    directionsDisplay.setMap(map);<font></font>
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以通过这种方式进行操作：</font></font></p>

<pre><code>function clearMarkers(category){ <font></font>
  var i;       <font></font>
<font></font>
  for (i = 0; i &lt; markers.length; i++) {                          <font></font>
    markers[i].setVisible(false);        <font></font>
  }    <font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinJim</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，您可以找到有关如何删除标记的示例：</font></font></p>

<p><a href="https://developers.google.com/maps/documentation/javascript/examples/marker-remove?hl=es" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developers.google.com/maps/documentation/javascript/examples/marker-remove?hl=es</font></font></a></p>

<pre><code>// Add a marker to the map and push to the array.<font></font>
function addMarker(location) {<font></font>
  var marker = new google.maps.Marker({<font></font>
    position: location,<font></font>
    map: map<font></font>
  });<font></font>
  markers.push(marker);<font></font>
}<font></font>
<font></font>
// Sets the map on all markers in the array.<font></font>
function setAllMap(map) {<font></font>
  for (var i = 0; i &lt; markers.length; i++) {<font></font>
    markers[i].setMap(map);<font></font>
   }<font></font>
}<font></font>
<font></font>
// Removes the markers from the map, but keeps them in the array.<font></font>
function clearMarkers() {<font></font>
  setAllMap(null);<font></font>
}<font></font>
<font></font>
// Deletes all markers in the array by removing references to them.<font></font>
function deleteMarkers() {<font></font>
  clearMarkers();<font></font>
  markers = [];<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearSamHarry</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>set_map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在两个答案中张贴</font><font style="vertical-align: inherit;">的“ </font><font style="vertical-align: inherit;">”功能似乎在Google Maps v3 API中不再起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道发生了什么</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google似乎更改了其API，以使“ </font></font><code>set_map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">”不是“ </font></font><code>setMap</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">”。</font></font></p>

<p><a href="http://code.google.com/apis/maps/documentation/v3/reference.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://code.google.com/apis/maps/documentation/v3/reference.html</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿米亚飞云</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">干净，简单地使用rolinger的答案。</font></font></p>

<pre><code>function placeMarkerAndPanTo(latLng, map) {<font></font>
      while(markersArray.length) { markersArray.pop().setMap(null); }<font></font>
      var marker = new google.maps.Marker({<font></font>
        position: latLng,<font></font>
        map: map<font></font>
      });<font></font>
      map.panTo(latLng);<font></font>
<font></font>
      markersArray.push(marker) ;<font></font>
    }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google的演示库演示了如何进行演示：</font></font></p>

<p><a href="http://code.google.com/apis/maps/documentation/javascript/examples/overlay-remove.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://code.google.com/apis/maps/documentation/javascript/examples/overlay-remove.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以查看源代码以查看它们如何添加标记。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">长话短说，它们将标记保留在全局阵列中。</font><font style="vertical-align: inherit;">清除/删除它们时，它们遍历数组并在给定的标记对象上调用“ .setMap（null）”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，此示例显示了一个“技巧”。</font><font style="vertical-align: inherit;">在此示例中，“清除”意味着将它们从地图中删除，但将其保留在数组中，这使应用程序可以快速将它们重新添加到地图中。</font><font style="vertical-align: inherit;">从某种意义上讲，这就像“隐藏”它们。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“删除”也会清除数组。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><pre><code>for (i in markersArray) {<font></font>
  markersArray[i].setMap(null);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅在IE上工作。</font></font></p>

<hr>

<pre><code>for (var i=0; i&lt;markersArray.length; i++) {<font></font>
  markersArray[i].setMap(null);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Chrome，Firefox上工作，即...</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天西里</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><pre><code>google.maps.Map.prototype.markers = new Array();<font></font>
<font></font>
google.maps.Map.prototype.addMarker = function(marker) {<font></font>
    this.markers[this.markers.length] = marker;<font></font>
};<font></font>
<font></font>
google.maps.Map.prototype.getMarkers = function() {<font></font>
    return this.markers<font></font>
};<font></font>
<font></font>
google.maps.Map.prototype.clearMarkers = function() {<font></font>
    for(var i=0; i&lt;this.markers.length; i++){<font></font>
        this.markers[i].setMap(null);<font></font>
    }<font></font>
    this.markers = new Array();<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为V3中没有，所以我使用了上述自定义实现。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免责声明：我没有编写此代码，但是在将其合并到我的代码库中时忘记了保留引用，所以我不知道它来自哪里。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样的问题。</font><font style="vertical-align: inherit;">此代码不再起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经更正了，以这种方式更改clearMarkers方法：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">set_map（null）---&gt; setMap（null）</font></font></p>

<pre><code>google.maps.Map.prototype.clearMarkers = function() {<font></font>
    for(var i=0; i &lt; this.markers.length; i++){<font></font>
        this.markers[i].setMap(null);<font></font>
    }<font></font>
    this.markers = new Array();<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档已更新，以包含有关以下主题的详细信息：</font><a href="https://developers.google.com/maps/documentation/javascript/markers#remove" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://developers.google.com/maps/documentation/javascript/markers#remove" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developers.google.com/maps/documentation/javascript/markers#remove</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>

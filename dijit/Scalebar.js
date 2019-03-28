// COPYRIGHT © 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/has","dojo/query","../kernel","../lang","../domUtils","../units","../SpatialReference","../WKIDUnitConversion","../geometry/Point","../geometry/ScreenPoint","../geometry/Polyline","../geometry/geodesicUtils","../geometry/webMercatorUtils","../geometry/screenUtils","../geometry/normalizeUtils","dojo/i18n!../nls/jsapi"],function(e,i,a,s,t,r,c,l,n,h,d,o,m,p,b,v,S,g,u,f,y,_,L,w){var k=e(null,{declaredClass:"esri.dijit.Scalebar",map:null,mapUnit:null,scalebarUnit:null,unitsDictionary:[],domNode:null,screenPt1:null,screenPt2:null,localStrings:w.widgets.scalebar,constructor:function(e,c){if(this.metricScalebar=r.create("div",{innerHTML:"<div class='esriScaleLabelDiv'><div class='esriScalebarLabel esriScalebarLineLabel esriScalebarSecondNumber'></div></div><div class='esriScalebarLine esriScalebarMetricLine'></div>"}),this.englishScalebar=r.create("div",{innerHTML:"<div class='esriScalebarLine esriScalebarEnglishLine'></div><div class='esriScaleLabelDiv'><div class='esriScalebarLabel esriScalebarLineLabel esriScalebarSecondNumber'></div></div>"}),this.domNode=r.create("div"),e=e||{},!e.map)return void console.error("scalebar: unable to find the 'map' property in parameters");if(e.scalebarUnit){if("english"!==e.scalebarUnit&&"metric"!==e.scalebarUnit&&"dual"!==e.scalebarUnit)return void console.error("scalebar unit only accepts english or metric or dual");this.scalebarUnit=e.scalebarUnit}else this.scalebarUnit="english";if(e.scalebarStyle){if("ruler"!==e.scalebarStyle&&"line"!==e.scalebarStyle)return void console.error("scalebar style must be ruler or line");this.scalebarStyle=e.scalebarStyle}else this.scalebarStyle="ruler";switch(this.background=e.background,this.scalebarUnit){case"english":"ruler"===this.scalebarStyle&&(this.englishScalebar.innerHTML="<div class='esriScalebarRuler'><div class='esriScalebarRulerBlock upper_firstpiece'></div><div class='esriScalebarRulerBlock upper_secondpiece'></div><div class='esriScalebarRulerBlock lower_firstpiece'></div><div class='esriScalebarRulerBlock lower_secondpiece'></div></div><div class='scaleLabelDiv'><div class='esriScalebarLabel' style='left: -3%'>0</div><div class='esriScalebarLabel esriScalebarFirstNumber'></div><div class='esriScalebarLabel esriScalebarSecondNumber'></div></div>"),this.domNode.appendChild(this.englishScalebar);break;case"metric":"ruler"===this.scalebarStyle&&(this.metricScalebar.innerHTML="<div class='esriScalebarRuler'><div class='esriScalebarRulerBlock upper_firstpiece'></div><div class='esriScalebarRulerBlock upper_secondpiece'></div><div class='esriScalebarRulerBlock lower_firstpiece'></div><div class='esriScalebarRulerBlock lower_secondpiece'></div></div><div class='scaleLabelDiv'><div class='esriScalebarLabel' style='left: -3%'>0</div><div class='esriScalebarLabel esriScalebarFirstNumber'></div><div class='esriScalebarLabel esriScalebarSecondNumber'></div></div>"),this.domNode.appendChild(this.metricScalebar);break;case"dual":this.domNode.appendChild(this.metricScalebar),this.domNode.appendChild(this.englishScalebar)}if(this.map=e.map,c?c.appendChild(this.domNode):(this.map.container.appendChild(this.domNode),e.attachTo?t.add(this.domNode,"scalebar_"+e.attachTo):t.add(this.domNode,"scalebar_bottom-left")),t.add(this.domNode,"esriScalebar"),this.map.loaded)this._getDistance(),this._checkBingMaps();else var l=s.connect(this.map,"onLoad",this,function(){s.disconnect(l),l=null,this._getDistance(),this._checkBingMaps()});this._mapOnPan=s.connect(this.map,"onPan",this,this._getDistance),this._mapOnExtentChange=s.connect(this.map,"onExtentChange",this,this._getDistance),a.forEach(this.map.layerIds,function(e,a){"esri.virtualearth.VETiledLayer"===this.map.getLayer(e).declaredClass&&s.connect(this.map.getLayer(e),"onVisibilityChange",i.hitch(this,function(e){this._checkBingMaps()}))},this),this._mapOnLayerAdd=s.connect(this.map,"onLayerAdd",i.hitch(this,function(e){"esri.virtualearth.VETiledLayer"===e.declaredClass&&s.connect(e,"onVisibilityChange",i.hitch(this,function(e){this._checkBingMaps()})),this._checkBingMaps()})),this._mapOnLayerRemove=s.connect(this.map,"onLayerRemove",i.hitch(this,this._checkBingMaps))},hide:function(){this._hidden=!0,m.hide(this.domNode)},show:function(){this._hidden=!1,m.show(this.domNode)},destroy:function(){s.disconnect(this._mapOnPan),s.disconnect(this._mapOnExtentChange),s.disconnect(this._mapOnLayerAdd),s.disconnect(this._mapOnLayerRemove),this.hide(),this.map=null,r.destroy(this.domNode)},_checkBingMaps:function(){t.contains(this.domNode,"scalebar_bottom-left")&&(l.set(this.domNode,"left","25px"),a.forEach(this.map.layerIds,function(e,i){if("esri.virtualearth.VETiledLayer"===this.map.getLayer(e).declaredClass&&this.map.getLayer(e).visible){var a="95px";this.map._mapParams.nav&&(a="115px"),l.set(this.domNode,"left",a)}},this))},_getDistance:function(e){e=this.map._clip?this.map._getAvailExtent():e||this.map.extent;var i=c.position(this.domNode,!0),a=i.y-this.map.position.y;a=a>this.map.height?this.map.height:a,a=a<0?0:a;var s,t,r,l,n=new g(0,a),h=new g(this.map.width,a);this.mapUnit="esriDecimalDegrees";var d=_.toMapPoint(e,this.map.width,this.map.height,n),m=_.toMapPoint(e,this.map.width,this.map.height,h),w=new S(e.xmin,(e.ymin+e.ymax)/2,this.map.spatialReference),k=new S(e.xmax,(e.ymin+e.ymax)/2,this.map.spatialReference);if(this.map._clip){var R=this.map.spatialReference._getInfo();d=new S(R.valid[0],0,this.map.spatialReference),m=new S(R.valid[1],0,this.map.spatialReference)}if(3857===this.map.spatialReference.wkid||102100===this.map.spatialReference.wkid||102113===this.map.spatialReference.wkid||this.map.spatialReference.wkt&&-1!=this.map.spatialReference.wkt.indexOf("WGS_1984_Web_Mercator"))d=y.webMercatorToGeographic(d,!0),m=y.webMercatorToGeographic(m,!0),w=y.webMercatorToGeographic(w,!0),k=y.webMercatorToGeographic(k,!0);else if(o.isDefined(v[this.map.spatialReference.wkid])||this.map.spatialReference.wkt&&0===this.map.spatialReference.wkt.indexOf("PROJCS")){this.mapUnit="linearUnit",s=Math.abs(e.xmax-e.xmin);var M;if(o.isDefined(v[this.map.spatialReference.wkid]))M=v.values[v[this.map.spatialReference.wkid]];else{var N=this.map.spatialReference.wkt,U=N.lastIndexOf(",")+1,x=N.lastIndexOf("]]");M=parseFloat(N.substring(U,x))}s*=M,l=s/1609,r=s/1e3,s/=1e3}if("esriDecimalDegrees"===this.mapUnit){var B=f.isSupported(this.map.spatialReference)?this.map.spatialReference.wkid:4326,D=new u(new b({wkid:B}));D.addPath([d,m]);var T=L._straightLineDensify(D,10);s=f.geodesicLengths([T],p.KILOMETERS)[0];var C=new u(new b({wkid:B}));C.addPath([w,k]);var E=L._straightLineDensify(C,10);t=f.geodesicLengths([E],p.KILOMETERS)[0],l=s/1.609,t/=1.609,r=s}"english"===this.scalebarUnit?this._getScaleBarLength(l,"mi"):"metric"===this.scalebarUnit?this._getScaleBarLength(r,"km"):"dual"===this.scalebarUnit&&(this._getScaleBarLength(l,"mi"),this._getScaleBarLength(r,"km"))},_getScaleBarLength:function(e,i){var a=this.map._getFrameWidth(),s=this.map._clip&&a>0?a:this.map.width,t=50*e/s,r=0,c=i;for(t<.1&&("mi"===i?(t*=5280,c="ft"):"km"===i&&(t*=1e3,c="m"));t>=1;)t/=10,r++;var l,n;t>.5?(l=1,n=.5):t>.3?(l=.5,n=.3):t>.2?(l=.3,n=.2):t>.15?(l=.2,n=.15):t>=.1&&(l=.15,n=.1);var h=l/t>=t/n?n:l,d=h/t,o=50*d,m=Math.pow(10,r)*h;this._drawScaleBar(o,m,c)},_drawScaleBar:function(e,i,s){var t,r,c,l=2*Math.round(e);"mi"===s||"ft"===s?(this.englishScalebar.style.width=l+"px",t=h(".esriScalebarFirstNumber",this.englishScalebar),r=h(".esriScalebarSecondNumber",this.englishScalebar),c=h(".esriScalebarMetricLineBackground",this.englishScalebar)):(this.metricScalebar.style.width=l+"px",t=h(".esriScalebarFirstNumber",this.metricScalebar),r=h(".esriScalebarSecondNumber",this.metricScalebar),c=h(".esriScalebarMetricLineBackground",this.metricScalebar)),a.forEach(c,function(e,i){e.style.width=l-2+"px"},this),a.forEach(t,function(e,a){e.innerHTML=i},this),a.forEach(r,function(e,a){"esriUnknown"!==this.mapUnit?e.innerHTML=2*i+this.localStrings[s]:e.innerHTML=2*i+"Unknown Unit"},this)}});return n("extend-esri")&&i.setObject("dijit.Scalebar",k,d),k});
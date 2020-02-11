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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/lang","dojox/charting/Theme","../../themes/ThemeLibrary","./ChartTypes","./ChartLineMarkers","./ChartLineStyles","esri/dijit/geoenrichment/utils/ColorUtil"],function(e,o,r,l,a,n,i){function t(e,o,r){var a,n=o;switch(e){case l.COLUMN:a=n.column&&n.column.colors;break;case l.BAR:a=n.bar&&n.bar.colors;break;case l.LINE:case l.VERTICAL_LINE:a=n.line&&n.line.colors;break;case l.PIE:a=n.pie&&n.pie.colors;break;case l.DONUT:a=n.donut&&n.donut.colors;break;case l.GAUGE:a=n.gauge&&n.gauge.colors;break;case l.WAFFLE:a=n.waffle&&n.waffle.colors;break;case l.RING:a=n.ring&&n.ring.colors;break;case l.PICTURE_COLUMN:a=n.pictureColumn&&n.pictureColumn.colors;break;case l.PICTURE_BAR:a=n.pictureBar&&n.pictureBar.colors}return a&&a.length||(a=null),r<=3&&n.colors3series&&n.colors3series.length&&n.colors3series||a||n.colors||c}var s={},c=["#AAAAAA","#888888","#555555","#333333"];return s.DEFAULT_LINE_THICKNESS=1,s.DEFAULT_COLUMN_THICKNESS="Medium",s.DEFAULT_DONUT_HOLE_PERCENT=50,s.DEFAULT_DONUT_GAP=3,s.DEFAULT_DONUT_ARC_PERCENT=100,s.DEFAULT_GAUGE_HOLE_PERCENT=80,s.DEFAULT_GAUGE_GAP=2,s.DEFAULT_GAUGE_ANGLE=0,s.DEFAULT_GAUGE_ARC_PERCENT=100,s.getThemeForSettings=function(r,a,t){var u=t.isEditMode,g=t.isBenchmarked,f=a,d=new o({colors:f.colors||c});if(!r)return d;var C=r.visualProperties;d.plotarea.fill=C.backgroundColor||f.backgroundColor,"number"!=typeof C.backgroundColorOpacity||i.isTransparent(d.plotarea.fill)||(d.plotarea.fill=i.toColor(d.plotarea.fill),d.plotarea.fill.a=C.backgroundColorOpacity),d.plotarea.stroke={width:0},C.plotAreaOutlineColor&&(d.plotarea.stroke.color=C.plotAreaOutlineColor,"number"!=typeof C.plotAreaOutlineOpacity||i.isTransparent(d.plotarea.stroke.color)||(d.plotarea.stroke.color=i.toColor(d.plotarea.stroke.color),d.plotarea.stroke.color.a=C.plotAreaOutlineOpacity),d.plotarea.stroke.width=C.plotAreaOutlineThickness||0,C.plotAreaOutlineStyle&&(d.plotarea.stroke.style=n.toGFXValue(C.plotAreaOutlineStyle))),d.chart.fill="transparent",d.axis.title.font="normal normal normal 11px Verdana",l.hasBackgroundImage(r.type)&&(d.plotarea.backgroundImageData=C.backgroundImageData);var b=e.mixin({},f.dataLabelsStyle,C.dataLabelsStyle);d.series.dataLabelsColor=b.color,d.series.dataLabelsAltColor=C.dataLabelsEnableAltColor&&(C.dataLabelsAltColor||f.dataLabelsAltColor),d.series.dataLabelsFont=s.combineFontString(b),d.series.dataLabelsHorizontalAlign=C.dataLabelsHorizontalAlign||"center",d.series.dataLabelsVerticalAlign=C.dataLabelsVerticalAlign||"middle",d.series.dataLabelsAngle=C.dataLabelsAngle,d.series.dataLabelsMaxWidth=C.dataLabelsMaxWidth;var L=e.mixin({},b,C.dataLabelsLabelStyle);if(d.series.dataLabelsLabelColor=L.color,d.series.dataLabelsLabelFont=s.combineFontString(L),d.series.dataLabelsPercentColor=b.color,d.series.dataLabelsPercentFont=s.combineFontString(b),l.isColumnBarLike(r.type)&&(d.series.showColumnBarBackground=C.showColumnBarBackground,d.series.columnBarBackgroundColor=C.columnBarBackgroundColor||f.columnBarBackground&&f.columnBarBackground.backgroundColor,d.series.columnBarBackgroundColor&&(d.series.columnBarBackgroundColor=C.columnBarBackgroundOpacity<1?i.getColorWithAlpha(d.series.columnBarBackgroundColor,C.columnBarBackgroundOpacity):d.series.columnBarBackgroundColor),d.series.renderColumnBarsInOppositeDirections=C.renderColumnBarsInOppositeDirections),l.hasAxis(r.type)&&(d.series.baseLineValue=C.yAxis.baseLineValue),r.type===l.DONUT&&(d.series.donutHolePercent=void 0!==C.donutHolePercent?C.donutHolePercent:s.DEFAULT_DONUT_HOLE_PERCENT,d.series.donutGap=void 0!==C.donutGap?C.donutGap:s.DEFAULT_DONUT_GAP,d.series.donutArcPercent=void 0!==C.donutArcPercent?C.donutArcPercent:s.DEFAULT_DONUT_ARC_PERCENT,d.series.donutArcPercent=Math.min(100,Math.max(50,d.series.donutArcPercent))),r.type===l.GAUGE){d.series.donutHolePercent=void 0!==C.gaugeHolePercent?C.gaugeHolePercent:s.DEFAULT_GAUGE_HOLE_PERCENT,d.series.donutGap=void 0!==C.gaugeGap?C.gaugeGap:s.DEFAULT_GAUGE_GAP,d.series.startAngle=void 0!==C.gaugeStartAngle?C.gaugeStartAngle:s.DEFAULT_GAUGE_ANGLE,d.series.donutArcPercent=void 0!==C.gaugeArcPercent?C.gaugeArcPercent:s.DEFAULT_GAUGE_ARC_PERCENT,d.series.donutArcPercent=Math.min(100,Math.max(50,d.series.donutArcPercent)),d.series.donutShowIcons=C.showChartIcons,C.gaugeShowArrow&&(d.series.gaugeShowArrowIndicator=!0,d.series.donutGap=0,100!==d.series.donutArcPercent&&(d.series.startAngle=0),d.series.gaugeArrowIndicatorLineColor=C.gaugeArrowLineColor||f.gauge&&f.gauge.arrowIndicator.lineColor,d.series.gaugeArrowIndicatorFillColor=C.gaugeArrowFillColor||f.gauge&&f.gauge.arrowIndicator.backgroundColor);var h=e.mixin({},f.gauge&&f.gauge.dataLabelStyle,C.gaugeLabelStyle);if(d.series.gaugeMainLabelPosition=C.gaugeLabelPlacement,d.series.gaugeMainLabelFont=s.combineFontString(h),d.series.gaugeMainLabelFontColor=C.gaugeConditionalStylingLabel?null:h.color,d.series.gaugeMainLabelFontColorFromConditionalStyling=C.gaugeConditionalStylingLabel&&!!C.conditionalStyling,d.series.gaugeMainLabelFontSize=C.gaugeLabelStyle&&C.gaugeLabelStyle.fontSize,d.series.gaugeMainLabelTextDecoration=h.textDecoration,C.gaugeShowFromToLabels){d.series.gaugeShowFromToLabels=C.gaugeShowFromToLabels;var F=e.mixin({},f.gauge&&f.gauge.dataLabelStyle,C.gaugeFromLabelStyle);d.series.gaugeFromLabelValue=C.gaugeRangeMin||0,d.series.gaugeFromLabelFont=s.combineFontString(F),d.series.gaugeFromLabelFontColor=F.color,d.series.gaugeFromLabelFontSize=F.fontSize,d.series.gaugeFromLabelTextDecoration=F.textDecoration;var p=e.mixin({},f.gauge&&f.gauge.dataLabelStyle,C.gaugeToLabelStyle);d.series.gaugeToLabelValue=C.gaugeRangeMax||"",d.series.gaugeToLabelFont=s.combineFontString(p),d.series.gaugeToLabelFontColor=p.color,d.series.gaugeToLabelFontSize=p.fontSize,d.series.gaugeToLabelTextDecoration=p.textDecoration}}if(r.type===l.WAFFLE){d.series.waffleDirection=C.waffleDirection,d.series.waffleFlowStyle=C.waffleFlowStyle,d.series.waffleShowWholePictures=C.waffleShowWholePictures,d.series.waffleStretchIconsToFill=C.waffleStretchIconsToFill,d.series.waffleLabelPlacement=C.waffleLabelPlacement,d.series.waffleLabelOffset=C.waffleLabelOffset,d.series.waffleColumnSpace=C.waffleColumnSpace,d.series.waffleRowSpace=C.waffleRowSpace,d.series.waffleNumIcons=C.waffleNumIcons,d.series.waffleNumRows=C.waffleNumRows,d.series.waffleNumColumns=C.waffleNumColumns,d.series.waffleHideValue=C.waffleHideValue;var A=e.mixin({},f.waffle&&f.waffle.dataValueStyle,C.waffleValueStyle);d.series.waffleValueFont=s.combineFontString(A),d.series.waffleValueFontColor=C.waffleConditionalStylingValue?null:A.color,d.series.waffleValueFontColorFromConditionalStyling=C.waffleConditionalStylingValue&&!!C.conditionalStyling,d.series.waffleValueFontSize=A.fontSize,d.series.waffleValueTextDecoration=A.textDecoration,d.series.waffleHideLabel=C.waffleHideLabel;var m=e.mixin({},f.waffle&&f.waffle.dataLabelStyle,C.waffleLabelStyle);d.series.waffleLabelFont=s.combineFontString(m),d.series.waffleLabelFontColor=C.waffleConditionalStylingLabel?null:m.color,d.series.waffleLabelFontColorFromConditionalStyling=C.waffleConditionalStylingLabel&&!!C.conditionalStyling,d.series.waffleLabelFontSize=m.fontSize,d.series.waffleLabelTextDecoration=m.textDecoration,d.series.waffleShowLabelAbove=C.waffleShowLabelAbove}return r.type===l.RING&&(d.series.show100PercentLabel=!g,d.series.ringBackgroundColor=C.ringBackgroundColor||f.ring&&f.ring.ringBackground&&f.ring.ringBackground.backgroundColor,d.series.ringBackgroundColor&&(d.series.ringBackgroundColor=C.ringBackgroundOpacity<1?i.getColorWithAlpha(d.series.ringBackgroundColor,C.ringBackgroundOpacity):d.series.ringBackgroundColor)),l.isPictureLike(r.type)&&(d.series.columnBarShowWholePictures=C.columnBarShowWholePictures),d.marker.fill="#FFFFFF",d.series.outline=null,d.series.isEditMode=u,d},s.getComparisonSymbol=function(e){return a.getMarkerPath(a.CIRCLE,e)},s.calcColorForPoint=function(e){var o=e.point,r=e.seriesItem,a=e.pointIndex,n=e.isOthersPoint,i=e.seriesIndex,c=e.numSeries,u=e.chartType,g=e.themeSettings,f=e.isComparisonSeries,d=e.comparisonInfo,C=r&&r.points.length;u===l.WAFFLE&&C--;var b,L,h=r&&r.color,F=l.isSingleSeries(u)||l.isColumnBarLike(u)&&!g.renderSingleDataSeriesWithSameColor&&1===c,p=t(u,g,F?C:c);if(l.isLineLike(u))f&&d?L=d.color||g.comparisonInfo.lineColor:(b=p[i%p.length],L=h||b||"#000000");else if(f&&d&&d.color)L=d.color;else{var A;if(A=l.isPictureLike(u)?o&&s.getPointIconStyle(o).fillColor:o&&o.color,u===l.GAUGE&&n&&g.gauge.othersColor)return A||g.gauge.othersColor;if(u===l.WAFFLE&&n&&g.waffle.othersColor)return A||g.waffle.othersColor;b=b||(F?p[a%p.length]:p[i%p.length]),L=A||!l.isSingleSeries(u)&&h||b||"#000000"}return L},s.pointCanHaveColor=function(e){return!l.isPictureLike(e.chartType)||!!(e.point.iconFieldInfo&&e.point.iconFieldInfo.shapeJson&&e.point.iconFieldInfo.shapeJson.g.length)},s.setPointColor=function(e,o){delete e.color,e.iconFieldInfo?e.iconFieldInfo.shapeJson&&(delete e.iconFieldInfo.shapeJson.style.fillColor,delete e.iconFieldInfo.shapeJson.style.borderColor,o&&(e.iconFieldInfo.shapeJson.style.fillColor=o,e.iconFieldInfo.shapeJson.style.borderColor=o)):o&&(e.color=o)},s.calcColorForSeries=function(e){var o=e.seriesItem,r=e.seriesIndex,a=e.numSeries,n=e.chartType,i=e.themeSettings;if(l.isSingleSeries(n))return null;var s,c,u=l.isColumnBarLike(n)&&!i.renderSingleDataSeriesWithSameColor&&1===a,g=t(n,i,a);if(l.isLineLike(n))s=g[r%g.length],c=o&&o.color||s||"#000000";else var s=u?null:g[r%g.length],c=o&&o.color||s||"#000000";return c},s.provideMissingIconsForPoints=function(o,r){if(l.isPictureLike(r)){var a,n=[];o.forEach(function(o){o.iconFieldInfo?(a=o.iconFieldInfo,n.forEach(function(o){o.iconFieldInfo=e.clone(a)}),n.length=0):a?o.iconFieldInfo=e.clone(a):n.push(o)})}},s.setWaffleChartPointIcon=function(o,r,l){var a=o&&o.shapeJson;0===r?l.forEach(function(r,l){if(r.fieldInfo||a){var n=s.getPointIconStyle(r);r.iconFieldInfo=0===l?o:o&&e.clone(o),r.iconFieldInfo&&r.iconFieldInfo.shapeJson&&0!==l&&(r.iconFieldInfo.shapeJson.style.fillColor=n.fillColor,r.iconFieldInfo.shapeJson.style.borderColor=n.borderColor)}}):l[r].iconFieldInfo=o;var n=l[0],i=l[l.length-1];!i.iconFieldInfo&&n.iconFieldInfo&&n.iconFieldInfo.shapeJson&&(i.iconFieldInfo=e.clone(n.iconFieldInfo),delete i.iconFieldInfo.shapeJson.style.fillColor,delete i.iconFieldInfo.shapeJson.style.borderColor)},s.getPointIconStyle=function(e,o){function r(e,o){return"number"==typeof e?e:o}var l=o&&o.considerTheme,a=e&&(e.iconFieldInfo||e.icon);if(!a||!a.shapeJson)return{fillColor:null,fillAlpha:null,borderColor:null,borderAlpha:null,borderWidth:null,borderDashArray:null};var n=a.shapeJson.style,i=l&&a.shapeJson.themeStyle;return{fillColor:n&&n.fillColor||i&&i.fillColor,fillAlpha:r(n&&n.fillAlpha,i&&i.fillAlpha),borderColor:n&&n.borderColor||i&&i.borderColor,borderAlpha:r(n&&n.borderAlpha,i&&i.borderAlpha),borderWidth:r(n&&n.borderWidth,i&&i.borderWidth),borderDashArray:n&&n.borderDashArray||i&&i.borderDashArray}},s.calcIconForPoint=function(o,r,a){if(!l.isPictureLike(a))return null;var n=o.iconFieldInfo;return n&&n.shapeJson&&r&&(n=e.clone(n),n.shapeJson.themeStyle={fillColor:r,borderColor:r}),n},s.calcBackgroundIconForPoint=function(o,r,a,n){if(!l.isPictureLike(r))return null;var i=n.columnBarBackgroundColor||a.columnBarBackground&&a.columnBarBackground.backgroundColor,t=o.iconFieldInfo;return t&&t.shapeJson&&i?(t=e.clone(t),t.shapeJson.themeStyle={fillColor:i,borderColor:i},t):null},s.combineFontString=function(e){return e=e||{},(e.fontStyle||"normal")+" normal "+(e.fontWeight||"normal")+" "+(e.fontSize||r.CHART_DATA_FONT_SIZE)+"px "+(e.fontFamily||r.DEFAULT_FONT_FAMILY_CLASSIC)},s});
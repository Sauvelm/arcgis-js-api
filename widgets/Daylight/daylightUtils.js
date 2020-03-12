// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","dojo/i18n!./nls/Daylight","../../intl/locale","../../views/3d/lib/SunCalc"],function(e,a,n,t,m){function i(e,a){var n=new Date(a);return n.setUTCFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),n}function o(e,a){var n=new Date(e.getTime());return n.setUTCHours(n.getUTCHours()+a),n}function b(e,a){return i(e,60*a*1e3)}function T(e,a){var n=new Date(e.getTime());return n.setUTCFullYear(a.getFullYear(),a.getMonth(),a.getDate()),n}function l(e){return 60*e.getUTCHours()+e.getUTCMinutes()+e.getUTCSeconds()/60+e.getUTCMilliseconds()/6e4}function z(e){var a=new Date(0);return a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0),a.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),a}function r(){var e=[{name:"UTC-12",abbr:-12,label:["UTC-12",n.timezoneDateline]},{name:"UTC-11",abbr:-11,label:["UTC-11",n.timezoneSamoa]},{name:n.timezoneHAST,abbr:-10,label:["UTC-10 ("+n.timezoneHAST+")",n.timezoneHawaii]},{name:n.timezoneAKST,abbr:-9,label:["UTC-9 ("+n.timezoneAKST+")",n.timezoneAlaska]},{name:n.timezonePST,abbr:-8,label:["UTC-8 ("+n.timezonePST+")",n.timezoneBaja]},{name:n.timezoneMST,abbr:-7,label:["UTC-7 ("+n.timezoneMST+")",n.timezoneMountain]},{name:n.timezoneMST,abbr:-7,label:["UTC-7 ("+n.timezoneMST+")",n.timezoneLaPaz]},{name:n.timezoneMST,abbr:-7,label:["UTC-7 ("+n.timezoneMST+")",n.timezoneArizona]},{name:n.timezoneCST,abbr:-6,label:["UTC-6 ("+n.timezoneCST+")",n.timezoneSaskatchewan]},{name:n.timezoneCST,abbr:-6,label:["UTC-6 ("+n.timezoneCST+")",n.timezoneCentralAmerica]},{name:n.timezoneCST,abbr:-6,label:["UTC-6 ("+n.timezoneCST+")",n.timezoneCentralTime]},{name:n.timezoneCST,abbr:-6,label:["UTC-6 ("+n.timezoneCST+")",n.timezoneMexico]},{name:n.timezoneEST,abbr:-5,label:["UTC-5 ("+n.timezoneEST+")",n.timezoneEasternUS]},{name:n.timezoneEST,abbr:-5,label:["UTC-5 ("+n.timezoneEST+")",n.timezoneLima]},{name:n.timezoneEST,abbr:-5,label:["UTC-5 ("+n.timezoneEST+")",n.timezoneIndiana]},{name:"UTC-4",abbr:-4,label:["UTC-4",n.timezoneAtlantic]},{name:"UTC-4",abbr:-4,label:["UTC-4",n.timezoneCuiaba]},{name:"UTC-4",abbr:-4,label:["UTC-4",n.timezoneSantiago]},{name:"UTC-4",abbr:-4,label:["UTC-4",n.timezoneManaus]},{name:"UTC-4",abbr:-4,label:["UTC-4",n.timezoneAsuncion]},{name:"UTC-3",abbr:-3,label:["UTC-3",n.timezoneBrasilia]},{name:"UTC-3",abbr:-3,label:["UTC-3",n.timezoneGreenland]},{name:"UTC-3",abbr:-3,label:["UTC-3",n.timezoneMontevideo]},{name:"UTC-3",abbr:-3,label:["UTC-3",n.timezoneCayenne]},{name:"UTC-3",abbr:-3,label:["UTC-3",n.timezoneBuenosAires]},{name:"UTC-2",abbr:-2,label:["UTC-2",n.timezoneMidAtlantic]},{name:"UTC-1",abbr:-1,label:["UTC-1",n.timezoneAzores]},{name:"UTC-1",abbr:-1,label:["UTC-1",n.timezoneCaboVerde]},{name:"GMT",abbr:0,label:["UTC (GMT)",n.timezoneDublin]},{name:"GMT",abbr:0,label:["UTC (GMT)",n.timezoneReykjavik]},{name:"GMT",abbr:0,label:["UTC (GMT)",n.timezoneCasablanca]},{name:n.timezoneCET,abbr:1,label:["UTC+1 ("+n.timezoneCET+")",n.timezoneBelgrade]},{name:n.timezoneCET,abbr:1,label:["UTC+1 ("+n.timezoneCET+")",n.timezoneSarajevo]},{name:n.timezoneCET,abbr:1,label:["UTC+1 ("+n.timezoneCET+")",n.timezoneBrussels]},{name:n.timezoneCET,abbr:1,label:["UTC+1 ("+n.timezoneCET+")",n.timezoneWCAfrica]},{name:n.timezoneCET,abbr:1,label:["UTC+1 ("+n.timezoneCET+")",n.timezoneAmsterdam]},{name:n.timezoneCET,abbr:1,label:["UTC+1 ("+n.timezoneCET+")",n.timezoneWindhoek]},{name:n.timezoneEET,abbr:2,label:["UTC+2 ("+n.timezoneEET+")",n.timezoneMinsk]},{name:n.timezoneEET,abbr:2,label:["UTC+2 ("+n.timezoneEET+")",n.timezoneCairo]},{name:n.timezoneEET,abbr:2,label:["UTC+2 ("+n.timezoneEET+")",n.timezoneHelsinki]},{name:n.timezoneEET,abbr:2,label:["UTC+2 ("+n.timezoneEET+")",n.timezoneAthens]},{name:n.timezoneEET,abbr:2,label:["UTC+2 ("+n.timezoneEET+")",n.timezoneJerusalem]},{name:n.timezoneEET,abbr:2,label:["UTC+2 ("+n.timezoneEET+")",n.timezoneAmman]},{name:n.timezoneEET,abbr:2,label:["UTC+2 ("+n.timezoneEET+")",n.timezoneBeirut]},{name:n.timezoneEET,abbr:2,label:["UTC+2 ("+n.timezoneEET+")",n.timezoneHarare]},{name:n.timezoneEET,abbr:2,label:["UTC+2 ("+n.timezoneEET+")",n.timezoneDamascus]},{name:n.timezoneEET,abbr:2,label:["UTC+2 ("+n.timezoneEET+")",n.timezoneIstanbul]},{name:n.timezoneMSK,abbr:3,label:["UTC+3 ("+n.timezoneMSK+")",n.timezoneKuwait]},{name:n.timezoneMSK,abbr:3,label:["UTC+3 ("+n.timezoneMSK+")",n.timezoneBaghdad]},{name:n.timezoneMSK,abbr:3,label:["UTC+3 ("+n.timezoneMSK+")",n.timezoneNairobi]},{name:n.timezoneMSK,abbr:3,label:["UTC+3 ("+n.timezoneMSK+")",n.timezoneKaliningrad]},{name:n.timezoneGST,abbr:4,label:["UTC+4 ("+n.timezoneGST+")",n.timezoneMoscow]},{name:n.timezoneGST,abbr:4,label:["UTC+4 ("+n.timezoneGST+")",n.timezoneMuscat]},{name:n.timezoneGST,abbr:4,label:["UTC+4 ("+n.timezoneGST+")",n.timezoneBaku]},{name:n.timezoneGST,abbr:4,label:["UTC+4 ("+n.timezoneGST+")",n.timezoneYerevan]},{name:n.timezoneGST,abbr:4,label:["UTC+4 ("+n.timezoneGST+")",n.timezoneTbilisi]},{name:n.timezoneGST,abbr:4,label:["UTC+4 ("+n.timezoneGST+")",n.timezonePortLouis]},{name:"UTC+5",abbr:5,label:["UTC+5",n.timezoneTashkent]},{name:"UTC+5",abbr:5,label:["UTC+5",n.timezoneIslamabad]},{name:"UTC+6",abbr:6,label:["UTC+6",n.timezoneEkaterinburg]},{name:"UTC+6",abbr:6,label:["UTC+6",n.timezoneAstana]},{name:"UTC+6",abbr:6,label:["UTC+6",n.timezoneDhaka]},{name:n.timezoneICT,abbr:7,label:["UTC+7 ("+n.timezoneICT+")",n.timezoneNovosibirsk]},{name:n.timezoneICT,abbr:7,label:["UTC+7 ("+n.timezoneICT+")",n.timezoneBangkok]},{name:n.timezoneCCT,abbr:8,label:["UTC+8 ("+n.timezoneCCT+")",n.timezoneKrasnoyarsk]},{name:n.timezoneCCT,abbr:8,label:["UTC+8 ("+n.timezoneCCT+")",n.timezoneBeijing]},{name:n.timezoneCCT,abbr:8,label:["UTC+8 ("+n.timezoneCCT+")",n.timezoneSingapore]},{name:n.timezoneCCT,abbr:8,label:["UTC+8 ("+n.timezoneCCT+")",n.timezoneTaipei]},{name:n.timezoneCCT,abbr:8,label:["UTC+8 ("+n.timezoneCCT+")",n.timezonePerth]},{name:n.timezoneCCT,abbr:8,label:["UTC+8 ("+n.timezoneCCT+")",n.timezoneUlaanbaatar]},{name:n.timezoneJST,abbr:9,label:["UTC+9 ("+n.timezoneJST+")",n.timezoneIrkutsk]},{name:n.timezoneJST,abbr:9,label:["UTC+9 ("+n.timezoneJST+")",n.timezoneSeoul]},{name:n.timezoneJST,abbr:9,label:["UTC+9 ("+n.timezoneJST+")",n.timezoneOsaka]},{name:n.timezoneAEST,abbr:10,label:["UTC+10 ("+n.timezoneAEST+")",n.timezoneYakutsk]},{name:n.timezoneAEST,abbr:10,label:["UTC+10 ("+n.timezoneAEST+")",n.timezoneCanberra]},{name:n.timezoneAEST,abbr:10,label:["UTC+10 ("+n.timezoneAEST+")",n.timezoneBrisbane]},{name:n.timezoneAEST,abbr:10,label:["UTC+10 ("+n.timezoneAEST+")",n.timezoneHobart]},{name:n.timezoneAEST,abbr:10,label:["UTC+10 ("+n.timezoneAEST+")",n.timezoneGuam]},{name:"UTC+11",abbr:11,label:["UTC+11",n.timezoneVladivostok]},{name:"UTC+11",abbr:11,label:["UTC+11",n.timezoneSolomon]},{name:n.timezoneNZST,abbr:12,label:["UTC+12 ("+n.timezoneNZST+")",n.timezoneMagadan]},{name:n.timezoneNZST,abbr:12,label:["UTC+12 ("+n.timezoneNZST+")",n.timezoneFiji]},{name:n.timezoneNZST,abbr:12,label:["UTC+12 ("+n.timezoneNZST+")",n.timezoneAuckland]},{name:n.timezoneNZST,abbr:12,label:["UTC+12 ("+n.timezoneNZST+")",n.timezoneNukualofa]}];return e.sort(function(e,a){return e.abbr<a.abbr?-1:e.abbr>a.abbr?1:0}),e}function C(e,a,n){if(isNaN(e.getTime())&&isNaN(a.getTime()))return 3e5;var t=n.getTime(),m=e.getTime(),i=a.getTime(),o=m-36e5,b=m+36e5,T=i-48e5,l=i+24e5,z=3e5;return t>=o&&t<=b?z=t-o<=12e5?18e5-(t-o)/12e5*16e5:b-t<=6e5?3e5-(b-t)/12e5*2*1e5:2e5:t>=T&&t<=l?z=t-T<=6e5?3e5-(t-T)/12e5*2*1e5:l-t<=12e5?18e5-(l-t)/12e5*16e5:2e5:(t<m||t>i)&&(z=18e5),z}function U(e,a,n,t){var i=m.getTimes(e,a,n),b=i.sunrise,T=i.sunset,l=o(e,t),z=o(b,t),r=o(T,t);if(l.getUTCDate()!==z.getUTCDate()||l.getUTCDate()!==r.getUTCDate()){var C=l.getTime()-z.getTime()>0?1:-1;b.setUTCDate(b.getUTCDate()+C),T.setUTCDate(T.getUTCDate()+C)}return{sunrise:b,sunset:T}}function S(e,a){var n=new Date(36e5*Math.round(e/60));"tick"!==a&&(n=new Date(6e4*e));var m=Intl.DateTimeFormat(t.getLocale(),{hour:"2-digit",minute:"2-digit",timeZone:"UTC"}).format(n);return"tick"===a&&-1!==m.indexOf(" ")&&(m=Intl.DateTimeFormat(t.getLocale(),{hour:"numeric",timeZone:"UTC"}).format(n),m=m.replace(":00","")),m}Object.defineProperty(a,"__esModule",{value:!0}),a.makeTime=i,a.dateAddHours=o,a.sliderPosToDateTime=b,a.localDateToDateTime=T,a.dateTimeToSliderPos=l,a.dateTimeToLocalDate=z,a.getGMTOffsets=r,a.calculatePlaySpeed=C,a.getSunriseAndSunsetTimes=U,a.formatSliderLabel=S});
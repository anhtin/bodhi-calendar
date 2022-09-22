"use strict";(self.webpackChunkbodhi_calendar_v2=self.webpackChunkbodhi_calendar_v2||[]).push([[5671],{35063:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width?String(e.width):a.defaultWidth,n=a.formats[t]||a.formats[a.defaultWidth];return n}},a.exports=e.default},64028:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t){var n;if("formatting"===(null!==t&&void 0!==t&&t.context?String(t.context):"standalone")&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,r=null!==t&&void 0!==t&&t.width?String(t.width):i;n=a.formattingValues[r]||a.formattingValues[i]}else{var l=a.defaultWidth,o=null!==t&&void 0!==t&&t.width?String(t.width):a.defaultWidth;n=a.values[o]||a.values[l]}return n[a.argumentCallback?a.argumentCallback(e):e]}},a.exports=e.default},27758:function(a,e){function t(a,e){for(var t in a)if(a.hasOwnProperty(t)&&e(a[t]))return t}function n(a,e){for(var t=0;t<a.length;t++)if(e(a[t]))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.width,l=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],o=e.match(l);if(!o)return null;var u,d=o[0],f=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],s=Array.isArray(f)?n(f,(function(a){return a.test(d)})):t(f,(function(a){return a.test(d)}));u=a.valueCallback?a.valueCallback(s):s,u=i.valueCallback?i.valueCallback(u):u;var m=e.slice(d.length);return{value:u,rest:m}}},a.exports=e.default},35568:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(a.matchPattern);if(!n)return null;var i=n[0],r=e.match(a.parsePattern);if(!r)return null;var l=a.valueCallback?a.valueCallback(r[0]):r[0];l=t.valueCallback?t.valueCallback(l):l;var o=e.slice(i.length);return{value:l,rest:o}}},a.exports=e.default},9705:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={lessThanXSeconds:{one:"inqas minn sekonda",other:"inqas minn {{count}} sekondi"},xSeconds:{one:"sekonda",other:"{{count}} sekondi"},halfAMinute:"nofs minuta",lessThanXMinutes:{one:"inqas minn minuta",other:"inqas minn {{count}} minuti"},xMinutes:{one:"minuta",other:"{{count}} minuti"},aboutXHours:{one:"madwar sieg\u0127a",other:"madwar {{count}} sieg\u0127at"},xHours:{one:"sieg\u0127a",other:"{{count}} sieg\u0127at"},xDays:{one:"\u0121urnata",other:"{{count}} \u0121ranet"},aboutXWeeks:{one:"madwar \u0121img\u0127a",other:"madwar {{count}} \u0121img\u0127at"},xWeeks:{one:"\u0121img\u0127a",other:"{{count}} \u0121img\u0127at"},aboutXMonths:{one:"madwar xahar",other:"madwar {{count}} xhur"},xMonths:{one:"xahar",other:"{{count}} xhur"},aboutXYears:{one:"madwar sena",two:"madwar sentejn",other:"madwar {{count}} snin"},xYears:{one:"sena",two:"sentejn",other:"{{count}} snin"},overXYears:{one:"aktar minn sena",two:"aktar minn sentejn",other:"aktar minn {{count}} snin"},almostXYears:{one:"kwa\u017ci sena",two:"kwa\u017ci sentejn",other:"kwa\u017ci {{count}} snin"}},n=function(a,e,n){var i,r=t[a];return i="string"===typeof r?r:1===e?r.one:2===e&&r.two?r.two:r.other.replace("{{count}}",String(e)),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"f'"+i:i+" ilu":i};e.default=n,a.exports=e.default},19486:function(a,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=t(35063))&&n.__esModule?n:{default:n};var r={date:(0,i.default)({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};e.default=r,a.exports=e.default},12174:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={lastWeek:"eeee 'li g\u0127adda' 'fil-'p",yesterday:"'Il-biera\u0127 fil-'p",today:"'Illum fil-'p",tomorrow:"'G\u0127ada fil-'p",nextWeek:"eeee 'fil-'p",other:"P"},n=function(a,e,n,i){return t[a]};e.default=n,a.exports=e.default},87084:function(a,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=t(64028))&&n.__esModule?n:{default:n};var r={ordinalNumber:function(a,e){return Number(a)+"\xba"},era:(0,i.default)({values:{narrow:["Q","W"],abbreviated:["QK","WK"],wide:["qabel Kristu","wara Kristu"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1. kwart","2. kwart","3. kwart","4. kwart"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,i.default)({values:{narrow:["J","F","M","A","M","\u0120","L","A","S","O","N","D"],abbreviated:["Jan","Fra","Mar","Apr","Mej","\u0120un","Lul","Aww","Set","Ott","Nov","Di\u010b"],wide:["Jannar","Frar","Marzu","April","Mejju","\u0120unju","Lulju","Awwissu","Settembru","Ottubru","Novembru","Di\u010bembru"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["\u0126","T","T","E","\u0126","\u0120","S"],short:["\u0126a","Tn","Tl","Er","\u0126a","\u0120i","Si"],abbreviated:["\u0126ad","Tne","Tli","Erb","\u0126am","\u0120im","Sib"],wide:["Il-\u0126add","It-Tnejn","It-Tlieta","L-Erbg\u0127a","Il-\u0126amis","Il-\u0120img\u0127a","Is-Sibt"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"a",pm:"p",midnight:"nofsillejl",noon:"nofsinhar",morning:"g\u0127odwa",afternoon:"wara nofsinhar",evening:"filg\u0127axija",night:"lejl"},abbreviated:{am:"AM",pm:"PM",midnight:"nofsillejl",noon:"nofsinhar",morning:"g\u0127odwa",afternoon:"wara nofsinhar",evening:"filg\u0127axija",night:"lejl"},wide:{am:"a.m.",pm:"p.m.",midnight:"nofsillejl",noon:"nofsinhar",morning:"g\u0127odwa",afternoon:"wara nofsinhar",evening:"filg\u0127axija",night:"lejl"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"f'nofsillejl",noon:"f'nofsinhar",morning:"filg\u0127odu",afternoon:"wara nofsinhar",evening:"filg\u0127axija",night:"billejl"},abbreviated:{am:"AM",pm:"PM",midnight:"f'nofsillejl",noon:"f'nofsinhar",morning:"filg\u0127odu",afternoon:"wara nofsinhar",evening:"filg\u0127axija",night:"billejl"},wide:{am:"a.m.",pm:"p.m.",midnight:"f'nofsillejl",noon:"f'nofsinhar",morning:"filg\u0127odu",afternoon:"wara nofsinhar",evening:"filg\u0127axija",night:"billejl"}},defaultFormattingWidth:"wide"})};e.default=r,a.exports=e.default},51962:function(a,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(t(27758));function i(a){return a&&a.__esModule?a:{default:a}}var r={ordinalNumber:(0,i(t(35568)).default)({matchPattern:/^(\d+)(\xba)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(q|w)/i,abbreviated:/^(q\.?\s?k\.?|b\.?\s?c\.?\s?e\.?|w\.?\s?k\.?)/i,wide:/^(qabel kristu|before common era|wara kristu|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(q|b)/i,/^(w|c)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^k[1234]/i,wide:/^[1234](\.)? kwart/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[jfmaglsond]/i,abbreviated:/^(jan|fra|mar|apr|mej|\u0121un|lul|aww|set|ott|nov|di\u010b)/i,wide:/^(jannar|frar|marzu|april|mejju|\u0121unju|lulju|awwissu|settembru|ottubru|novembru|di\u010bembru)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^\u0121/i,/^l/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mej/i,/^\u0121/i,/^l/i,/^aw/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[\u0127te\u0121s]/i,short:/^(\u0127a|tn|tl|er|\u0127a|\u0121i|si)/i,abbreviated:/^(\u0127ad|tne|tli|erb|\u0127am|\u0121im|sib)/i,wide:/^(il-\u0127add|it-tnejn|it-tlieta|l-erbg\u0127a|il-\u0127amis|il-\u0121img\u0127a|is-sibt)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0127/i,/^t/i,/^t/i,/^e/i,/^\u0127/i,/^\u0121/i,/^s/i],any:[/^(il-)?\u0127ad/i,/^(it-)?tn/i,/^(it-)?tl/i,/^(l-)?er/i,/^(il-)?ham/i,/^(il-)?\u0121i/i,/^(is-)?si/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(a|p|f'nofsillejl|f'nofsinhar|(ta') (g\u0127odwa|wara nofsinhar|filg\u0127axija|lejl))/i,any:/^([ap]\.?\s?m\.?|f'nofsillejl|f'nofsinhar|(ta') (g\u0127odwa|wara nofsinhar|filg\u0127axija|lejl))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^f'nofsillejl/i,noon:/^f'nofsinhar/i,morning:/g\u0127odwa/i,afternoon:/wara(\s.*)nofsinhar/i,evening:/filg\u0127axija/i,night:/lejl/i}},defaultParseWidth:"any"})};e.default=r,a.exports=e.default},15671:function(a,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=u(t(9705)),i=u(t(19486)),r=u(t(12174)),l=u(t(87084)),o=u(t(51962));function u(a){return a&&a.__esModule?a:{default:a}}var d={code:"mt",formatDistance:n.default,formatLong:i.default,formatRelative:r.default,localize:l.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};e.default=d,a.exports=e.default}}]);
//# sourceMappingURL=5671.f7e0541c.chunk.js.map
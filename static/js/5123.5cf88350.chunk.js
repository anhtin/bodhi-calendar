"use strict";(self.webpackChunkbodhi_calendar_v2=self.webpackChunkbodhi_calendar_v2||[]).push([[5123],{35063:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width?String(e.width):a.defaultWidth,n=a.formats[t]||a.formats[a.defaultWidth];return n}},a.exports=e.default},64028:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t){var n;if("formatting"===(null!==t&&void 0!==t&&t.context?String(t.context):"standalone")&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,r=null!==t&&void 0!==t&&t.width?String(t.width):i;n=a.formattingValues[r]||a.formattingValues[i]}else{var u=a.defaultWidth,d=null!==t&&void 0!==t&&t.width?String(t.width):a.defaultWidth;n=a.values[d]||a.values[u]}return n[a.argumentCallback?a.argumentCallback(e):e]}},a.exports=e.default},27758:function(a,e){function t(a,e){for(var t in a)if(a.hasOwnProperty(t)&&e(a[t]))return t}function n(a,e){for(var t=0;t<a.length;t++)if(e(a[t]))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.width,u=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],d=e.match(u);if(!d)return null;var o,l=d[0],f=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],c=Array.isArray(f)?n(f,(function(a){return a.test(l)})):t(f,(function(a){return a.test(l)}));o=a.valueCallback?a.valueCallback(c):c,o=i.valueCallback?i.valueCallback(o):o;var s=e.slice(l.length);return{value:o,rest:s}}},a.exports=e.default},35568:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(a.matchPattern);if(!n)return null;var i=n[0],r=e.match(a.parsePattern);if(!r)return null;var u=a.valueCallback?a.valueCallback(r[0]):r[0];u=t.valueCallback?t.valueCallback(u):u;var d=e.slice(i.length);return{value:u,rest:d}}},a.exports=e.default},81983:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={lessThanXSeconds:{one:"bir saniy\u0259d\u0259n az",other:"{{count}} bir saniy\u0259d\u0259n az"},xSeconds:{one:"1 saniy\u0259",other:"{{count}} saniy\u0259"},halfAMinute:"yar\u0131m d\u0259qiq\u0259",lessThanXMinutes:{one:"bir d\u0259qiq\u0259d\u0259n az",other:"{{count}} bir d\u0259qiq\u0259d\u0259n az"},xMinutes:{one:"bir d\u0259qiq\u0259",other:"{{count}} d\u0259qiq\u0259"},aboutXHours:{one:"t\u0259xmin\u0259n 1 saat",other:"t\u0259xmin\u0259n {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 g\xfcn",other:"{{count}} g\xfcn"},aboutXWeeks:{one:"t\u0259xmin\u0259n 1 h\u0259ft\u0259",other:"t\u0259xmin\u0259n {{count}} h\u0259ft\u0259"},xWeeks:{one:"1 h\u0259ft\u0259",other:"{{count}} h\u0259ft\u0259"},aboutXMonths:{one:"t\u0259xmin\u0259n 1 ay",other:"t\u0259xmin\u0259n {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"t\u0259xmin\u0259n 1 il",other:"t\u0259xmin\u0259n {{count}} il"},xYears:{one:"1 il",other:"{{count}} il"},overXYears:{one:"1 ild\u0259n \xe7ox",other:"{{count}} ild\u0259n \xe7ox"},almostXYears:{one:"dem\u0259k olar ki 1 il",other:"dem\u0259k olar ki {{count}} il"}},n=function(a,e,n){var i,r=t[a];return i="string"===typeof r?r:1===e?r.one:r.other.replace("{{count}}",String(e)),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?i+" sonra":i+" \u0259vv\u0259l":i};e.default=n,a.exports=e.default},76132:function(a,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=t(35063))&&n.__esModule?n:{default:n};var r={date:(0,i.default)({formats:{full:"EEEE, do MMMM y 'il'",long:"do MMMM y 'il'",medium:"d MMM y 'il'",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} {{time}} - 'd\u0259'",long:"{{date}} {{time}} - 'd\u0259'",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};e.default=r,a.exports=e.default},54692:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={lastWeek:"'sonuncu' eeee p -'d\u0259'",yesterday:"'d\xfcn\u0259n' p -'d\u0259'",today:"'bug\xfcn' p -'d\u0259'",tomorrow:"'sabah' p -'d\u0259'",nextWeek:"eeee p -'d\u0259'",other:"P"},n=function(a,e,n,i){return t[a]};e.default=n,a.exports=e.default},27385:function(a,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=t(64028))&&n.__esModule?n:{default:n};var r={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-\xfcnc\xfc",4:"-\xfcnc\xfc",100:"-\xfcnc\xfc",6:"-nc\u0131",9:"-uncu",10:"-uncu",30:"-uncu",60:"-\u0131nc\u0131",90:"-\u0131nc\u0131"},u={ordinalNumber:function(a,e){var t=Number(a),n=function(a){if(0===a)return a+"-\u0131nc\u0131";var e=a%10,t=a%100-e,n=a>=100?100:null;return r[e]?r[e]:r[t]?r[t]:null!==n?r[n]:""}(t);return t+n},era:(0,i.default)({values:{narrow:["e.\u0259","b.e"],abbreviated:["e.\u0259","b.e"],wide:["eram\u0131zdan \u0259vv\u0259l","bizim era"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1ci kvartal","2ci kvartal","3c\xfc kvartal","4c\xfc kvartal"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,i.default)({values:{narrow:["Y","F","M","A","M","\u0130","\u0130","A","S","O","N","D"],abbreviated:["Yan","Fev","Mar","Apr","May","\u0130yun","\u0130yul","Avq","Sen","Okt","Noy","Dek"],wide:["Yanvar","Fevral","Mart","Aprel","May","\u0130yun","\u0130yul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["B.","B.e","\xc7.a","\xc7.","C.a","C.","\u015e."],short:["B.","B.e","\xc7.a","\xc7.","C.a","C.","\u015e."],abbreviated:["Baz","Baz.e","\xc7\u0259r.a","\xc7\u0259r","C\xfcm.a","C\xfcm","\u015e\u0259"],wide:["Bazar","Bazar ert\u0259si","\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131","\xc7\u0259r\u015f\u0259nb\u0259","C\xfcm\u0259 ax\u015fam\u0131","C\xfcm\u0259","\u015e\u0259nb\u0259"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"am",pm:"pm",midnight:"gec\u0259yar\u0131",noon:"g\xfcn",morning:"s\u0259h\u0259r",afternoon:"g\xfcnd\xfcz",evening:"ax\u015fam",night:"gec\u0259"},abbreviated:{am:"AM",pm:"PM",midnight:"gec\u0259yar\u0131",noon:"g\xfcn",morning:"s\u0259h\u0259r",afternoon:"g\xfcnd\xfcz",evening:"ax\u015fam",night:"gec\u0259"},wide:{am:"a.m.",pm:"p.m.",midnight:"gec\u0259yar\u0131",noon:"g\xfcn",morning:"s\u0259h\u0259r",afternoon:"g\xfcnd\xfcz",evening:"ax\u015fam",night:"gec\u0259"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"gec\u0259yar\u0131",noon:"g\xfcn",morning:"s\u0259h\u0259r",afternoon:"g\xfcnd\xfcz",evening:"ax\u015fam",night:"gec\u0259"},abbreviated:{am:"AM",pm:"PM",midnight:"gec\u0259yar\u0131",noon:"g\xfcn",morning:"s\u0259h\u0259r",afternoon:"g\xfcnd\xfcz",evening:"ax\u015fam",night:"gec\u0259"},wide:{am:"a.m.",pm:"p.m.",midnight:"gec\u0259yar\u0131",noon:"g\xfcn",morning:"s\u0259h\u0259r",afternoon:"g\xfcnd\xfcz",evening:"ax\u015fam",night:"gec\u0259"}},defaultFormattingWidth:"wide"})};e.default=u,a.exports=e.default},44877:function(a,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(t(27758));function i(a){return a&&a.__esModule?a:{default:a}}var r={ordinalNumber:(0,i(t(35568)).default)({matchPattern:/^(\d+)(-?(ci|inci|nci|uncu|\xfcnc\xfc|nc\u0131))?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(b|a)$/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)$/i,wide:/^(bizim eradan \u0259vv\u0259l|bizim era)$/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b$/i,/^(a|c)$/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]$/i,abbreviated:/^K[1234]$/i,wide:/^[1234](ci)? kvartal$/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[(?-i)yfmaisond]$/i,abbreviated:/^(Yan|Fev|Mar|Apr|May|\u0130yun|\u0130yul|Avq|Sen|Okt|Noy|Dek)$/i,wide:/^(Yanvar|Fevral|Mart|Aprel|May|\u0130yun|\u0130yul|Avgust|Sentyabr|Oktyabr|Noyabr|Dekabr)$/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^[(?-i)y]$/i,/^[(?-i)f]$/i,/^[(?-i)m]$/i,/^[(?-i)a]$/i,/^[(?-i)m]$/i,/^[(?-i)i]$/i,/^[(?-i)i]$/i,/^[(?-i)a]$/i,/^[(?-i)s]$/i,/^[(?-i)o]$/i,/^[(?-i)n]$/i,/^[(?-i)d]$/i],abbreviated:[/^Yan$/i,/^Fev$/i,/^Mar$/i,/^Apr$/i,/^May$/i,/^\u0130yun$/i,/^\u0130yul$/i,/^Avg$/i,/^Sen$/i,/^Okt$/i,/^Noy$/i,/^Dek$/i],wide:[/^Yanvar$/i,/^Fevral$/i,/^Mart$/i,/^Aprel$/i,/^May$/i,/^\u0130yun$/i,/^\u0130yul$/i,/^Avgust$/i,/^Sentyabr$/i,/^Oktyabr$/i,/^Noyabr$/i,/^Dekabr$/i]},defaultParseWidth:"narrow"}),day:(0,n.default)({matchPatterns:{narrow:/^(B\.|B\.e|\xc7\.a|\xc7\.|C\.a|C\.|\u015e\.)$/i,short:/^(B\.|B\.e|\xc7\.a|\xc7\.|C\.a|C\.|\u015e\.)$/i,abbreviated:/^(Baz\.e|\xc7\u0259r|\xc7\u0259r\.a|C\xfcm|C\xfcm\.a|\u015e\u0259)$/i,wide:/^(Bazar|Bazar ert\u0259si|\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131|\xc7\u0259r\u015f\u0259nb\u0259|C\xfcm\u0259 ax\u015fam\u0131|C\xfcm\u0259|\u015e\u0259nb\u0259)$/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^B\.$/i,/^B\.e$/i,/^\xc7\.a$/i,/^\xc7\.$/i,/^C\.a$/i,/^C\.$/i,/^\u015e\.$/i],abbreviated:[/^Baz$/i,/^Baz\.e$/i,/^\xc7\u0259r\.a$/i,/^\xc7\u0259r$/i,/^C\xfcm\.a$/i,/^C\xfcm$/i,/^\u015e\u0259$/i],wide:[/^Bazar$/i,/^Bazar ert\u0259si$/i,/^\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131$/i,/^\xc7\u0259r\u015f\u0259nb\u0259$/i,/^C\xfcm\u0259 ax\u015fam\u0131$/i,/^C\xfcm\u0259$/i,/^\u015e\u0259nb\u0259$/i],any:[/^B\.$/i,/^B\.e$/i,/^\xc7\.a$/i,/^\xc7\.$/i,/^C\.a$/i,/^C\.$/i,/^\u015e\.$/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(a|p|gec\u0259yar\u0131|g\xfcn|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam|gec\u0259)$/i,any:/^(am|pm|a\.m\.|p\.m\.|AM|PM|gec\u0259yar\u0131|g\xfcn|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam|gec\u0259)$/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a$/i,pm:/^p$/i,midnight:/^gec\u0259yar\u0131$/i,noon:/^g\xfcn$/i,morning:/s\u0259h\u0259r$/i,afternoon:/g\xfcnd\xfcz$/i,evening:/ax\u015fam$/i,night:/gec\u0259$/i}},defaultParseWidth:"any"})};e.default=r,a.exports=e.default},95123:function(a,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(t(81983)),i=o(t(76132)),r=o(t(54692)),u=o(t(27385)),d=o(t(44877));function o(a){return a&&a.__esModule?a:{default:a}}var l={code:"az",formatDistance:n.default,formatLong:i.default,formatRelative:r.default,localize:u.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=l,a.exports=e.default}}]);
//# sourceMappingURL=5123.5cf88350.chunk.js.map
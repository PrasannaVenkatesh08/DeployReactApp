(this.webpackJsonptestone=this.webpackJsonptestone||[]).push([[3],{16:function(t,e,n){"use strict";n.r(e),n.d(e,"getCLS",(function(){return v})),n.d(e,"getFCP",(function(){return y})),n.d(e,"getFID",(function(){return k})),n.d(e,"getLCP",(function(){return C})),n.d(e,"getTTFB",(function(){return P}));var i,a,r,o,u=function(t,e){return{name:t,value:void 0===e?-1:e,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var n=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return n.observe({type:t,buffered:!0}),n}}catch(t){}},s=!1,f=function(t,e){s||"undefined"!=typeof InstallTrigger||(addEventListener("beforeunload",(function(){})),s=!0),addEventListener("visibilitychange",(function n(i){"hidden"===document.visibilityState&&(t(i),e&&removeEventListener("visibilitychange",n,!0))}),!0)},d=function(t){addEventListener("pageshow",(function(e){e.persisted&&t(e)}),!0)},m="function"==typeof WeakSet?new WeakSet:new Set,p=function(t,e,n){var i;return function(){e.value>=0&&(n||m.has(e)||"hidden"===document.visibilityState)&&(e.delta=e.value-(i||0),(e.delta||void 0===i)&&(i=e.value,t(e)))}},v=function(t,e){var n,i=u("CLS",0),a=function(t){t.hadRecentInput||(i.value+=t.value,i.entries.push(t),n())},r=c("layout-shift",a);r&&(n=p(t,i,e),f((function(){r.takeRecords().map(a),n()})),d((function(){i=u("CLS",0),n=p(t,i,e)})))},l=-1,h=function(){return"hidden"===document.visibilityState?0:1/0},S=function(){f((function(t){var e=t.timeStamp;l=e}),!0)},g=function(){return l<0&&(l=h(),S(),d((function(){setTimeout((function(){l=h(),S()}),0)}))),{get timeStamp(){return l}}},y=function(t,e){var n,i=g(),a=u("FCP"),r=c("paint",(function(t){"first-contentful-paint"===t.name&&(r&&r.disconnect(),t.startTime<i.timeStamp&&(a.value=t.startTime,a.entries.push(t),m.add(a),n()))}));r&&(n=p(t,a,e),d((function(i){a=u("FCP"),n=p(t,a,e),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,m.add(a),n()}))}))})))},w={passive:!0,capture:!0},E=new Date,L=function(t,e){i||(i=e,a=t,r=new Date,F(removeEventListener),T())},T=function(){if(a>=0&&a<r-E){var t={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+a};o.forEach((function(e){e(t)})),o=[]}},b=function(t){if(t.cancelable){var e=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?function(t,e){var n=function(){L(t,e),a()},i=function(){a()},a=function(){removeEventListener("pointerup",n,w),removeEventListener("pointercancel",i,w)};addEventListener("pointerup",n,w),addEventListener("pointercancel",i,w)}(e,t):L(e,t)}},F=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return t(e,b,w)}))},k=function(t,e){var n,r=g(),s=u("FID"),v=function(t){t.startTime<r.timeStamp&&(s.value=t.processingStart-t.startTime,s.entries.push(t),m.add(s),n())},l=c("first-input",v);n=p(t,s,e),l&&f((function(){l.takeRecords().map(v),l.disconnect()}),!0),l&&d((function(){var r;s=u("FID"),n=p(t,s,e),o=[],a=-1,i=null,F(addEventListener),r=v,o.push(r),T()}))},C=function(t,e){var n,i=g(),a=u("LCP"),r=function(t){var e=t.startTime;e<i.timeStamp&&(a.value=e,a.entries.push(t)),n()},o=c("largest-contentful-paint",r);if(o){n=p(t,a,e);var s=function(){m.has(a)||(o.takeRecords().map(r),o.disconnect(),m.add(a),n())};["keydown","click"].forEach((function(t){addEventListener(t,s,{once:!0,capture:!0})})),f(s,!0),d((function(i){a=u("LCP"),n=p(t,a,e),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,m.add(a),n()}))}))}))}},P=function(t){var e,n=u("TTFB");e=function(){try{var e=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,e={entryType:"navigation",startTime:0};for(var n in t)"navigationStart"!==n&&"toJSON"!==n&&(e[n]=Math.max(t[n]-t.navigationStart,0));return e}();n.value=n.delta=e.responseStart,n.entries=[e],t(n)}catch(t){}},"complete"===document.readyState?setTimeout(e,0):addEventListener("pageshow",e)}}}]);
//# sourceMappingURL=3.6540595c.chunk.js.map
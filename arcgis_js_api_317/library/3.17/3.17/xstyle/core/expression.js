//>>built
define("xstyle/core/expression",["xstyle/core/utils","xstyle/core/Definition"],function(p,u){function v(f,b){var m=b[0];return m&&f?(m=y(m),v(f.property?f.property(m):f[m],b.slice(1))):f}function w(f,b,m){if(z(b,f)){var c={};c[f]=function(a){for(var c=[],d=0,e=b.length;d<e;d++){var h=b[d];h&&"function"==typeof h[f]&&(h=h[f](a));c[d]=h}return m(c)};return c}return m(b)}function s(f,b){return{apply:function(d,c,a){for(var g=0,n=c.length;g<n;g++){var e=c[g];e.dependencyOf&&e.dependencyOf(a)}g=function(){var h=
[];if(f.selfExecuting)return f.apply(d,c,a);for(var b=0,e=c.length;b<e;b++)h[b]=c[b].valueOf();if(f.selfWaiting)return f.apply(d,h,a);h.push(d);return p.whenAll(h,function(c){var b=c.pop();return w("forRule",c,function(c){return w("forElement",c,function(c){return f.apply(b,c,a)})})})};g.reverse=function(a){return b(a,c)};return g}}}function q(f){return x[f]||(x[f]=new Function("a","b","return "+f))}function d(f,b,d,c,a){function g(c){c.skipResolve=!0;c.precedence=b;c.infix=!1!==a}var p=function(f,
b){var d=b[0],e=b[1];if(d&&d.put)e=c(f,e&&e.valueOf()),e!==A&&d.put(e);else if(e&&e.put)e.put(a(f,d&&d.valueOf()));else throw new TypeError("Can not put");},e={apply:function(b,e,l){var t;d=q(d);c=c&&q(c);a=a&&q(a);n[f]=t=s(d,p);g(t);return t.apply(b,e,l)}};g(e);n[f]=e}function r(d,b){function m(a){for(;q<=a.precedence;){var c=e.pop(),d=n[e.pop()],b=new u;b.setCompute(d.apply(null,d.infix?[e.pop(),c]:[c],b));h=e.length?e[e.length-1]:void 0;e.push(b);q=h&&n[h]&&n[h].precedence}}var c,a;b=b.join?b.slice():
[b];for(c=0;c<b.length;c++)if(a=b[c],"string"==typeof a){var g=a.match(/"[^\"]*"|[+\-<>\|\/\?\:^*!&|]+|[\w_$\.\/-]+/g);a=[c,1];g&&a.push.apply(a,g);b.splice.apply(b,a);c+=a.length-3}var q,e=[],h,g={};for(c=0;c<b.length;c++){a=b[c];if("("==a.operator){var k=e[e.length-1];void 0===k||n.hasOwnProperty(k)?a=r(d,a.getArgs()[0]):(e.pop(),a=function(a,c){function b(m){return p.when(a.valueOf(),function(b){var l=a.parent&&a.parent.valueOf();if(!b.selfResolving){if(!e){e=[];for(var k=0,n=c.length;k<n;k++)e[k]=
r(d,c[k]);h=b.selfReacting?b.apply(l,e,g):s(b).apply(l,e,g)}return h()}b=b.apply(l,c,g);return m?b:b.valueOf()})}var e,h,g=new u(b);g.setReverseCompute(function(){var a=arguments;return p.when(b(!0),function(b){return b.put.apply(b,a)})});return g}(k,a.getArgs()))}else if(n.hasOwnProperty(a))k=n[a],m(k),q=(h||k).precedence;else if(-1<a)a=+a;else if(a.isLiteralString)a=a.value;else{a=a.split(/\s*\/\s*/);var k=a[0],l=d.getDefinition(k);if("string"==typeof l||l instanceof Array)l=r(d,l);else if(void 0===
l)throw Error('Could not find reference "'+k+'"');g[k]=l;1<a.length&&(l=v(l,a.slice(1)));a=l}e.push(a)}m({precedence:100});if(1<e.length)throw Error("Could not reduce expression");a=e[0];a.inputs=g;return a}var y=p.convertCssNameToJs,z=p.someHasProperty,A={},x={},n={};d("+",6,"a+b","a-b","a-b");d("-",6,"a-b","a+b","b-a");d("*",5,"a*b","a/b","a/b");d("/",5,"a/b","a*b","b/a");d("?",16,"b[a?0:1]","a\x3d\x3d\x3db[0]||(a\x3d\x3d\x3db[1]?false:deny)","[a,b]");d(":",15,"[a,b]","a[0]?a[1]:deny","a[1]");d("!",
4,"!a","!a",!1);d("%",5,"a%b");d("\x3e",8,"a\x3eb");d("\x3e\x3d",8,"a\x3e\x3db");d("\x3c",8,"a\x3cb");d("\x3c\x3d",8,"a\x3c\x3db");d("\x3d\x3d",9,"a\x3d\x3d\x3db");d("\x26",8,"a\x26\x26b");d("|",8,"a||b");return{react:s,evaluate:r,selfResolving:function(d){d.selfResolving=!0;return d}}});
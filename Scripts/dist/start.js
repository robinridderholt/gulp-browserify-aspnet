!function n(r,t,o){function e(u,i){if(!t[u]){if(!r[u]){var c="function"==typeof require&&require;if(!i&&c)return c(u,!0);if(f)return f(u,!0);throw new Error("Cannot find module '"+u+"'")}var s=t[u]={exports:{}};r[u][0].call(s.exports,function(n){var t=r[u][1][n];return e(t?t:n)},s,s.exports,n,r,t,o)}return t[u].exports}for(var f="function"==typeof require&&require,u=0;u<o.length;u++)e(o[u]);return e}({1:[function(n,r){"use strict";function t(){var n=this;return n.doStuff=function(){console.log("Common doing stuff")},n}r.exports=new t},{}],2:[function(n){"use strict";function r(n){var r=this;return r.doStuff=function(){n.doStuff(),console.log("Start doing stuff")},r}var t=n("./common.js"),o=new r(t);o.doStuff()},{"./common.js":1}]},{},[2]);
!function(){function t(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){u=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw o}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}(self.webpackChunkangular_cn=self.webpackChunkangular_cn||[]).push([["src_app_custom-elements_live-example_live-example_module_ts"],{8948:function(e,r,a){"use strict";a.r(r),a.d(r,{LiveExampleModule:function(){return S}});var o=a(1116),c=a(1374),u=a(5366);function l(t,e){var n="string"==typeof e?e:e.find(function(e){return t.hasOwnProperty(e.toLowerCase())});return void 0===n?void 0:t[n.toLowerCase()]}function f(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return void 0===t?e:"false"!==t.trim()}var s=["content"];function p(t,e){if(1&t&&(u.TgZ(0,"p"),u._uU(1," \u4f60\u8fd8\u53ef\u4ee5 "),u.TgZ(2,"a",8),u._uU(3,"\u4e0b\u8f7d\u8fd9\u4e2a\u4f8b\u5b50"),u.qZA(),u._uU(4,"\u3002 "),u.qZA()),2&t){var n=u.oxw(2);u.xp6(2),u.Q6J("href",n.zip,u.LSH)}}function d(t,e){if(1&t&&(u.TgZ(0,"span"),u.TgZ(1,"div",5),u._UZ(2,"aio-embedded-stackblitz",6),u.qZA(),u.YNc(3,p,5,1,"p",7),u.qZA()),2&t){var n=u.oxw();u.xp6(1),u.s9C("title",n.title),u.xp6(1),u.Q6J("src",n.stackblitz),u.xp6(1),u.Q6J("ngIf",n.enableDownload)}}function m(t,e){if(1&t&&(u.TgZ(0,"span"),u.TgZ(1,"a",9),u._uU(2),u.qZA(),u.qZA()),2&t){var n=u.oxw();u.xp6(1),u.s9C("title",n.title),u.Q6J("href",n.zip,u.LSH),u.xp6(1),u.Oqu(n.title)}}function v(t,e){if(1&t&&(u.TgZ(0,"span"),u._uU(1," / "),u.TgZ(2,"a",8),u._uU(3,"\u4e0b\u8f7d\u8303\u4f8b"),u.qZA(),u.qZA()),2&t){var n=u.oxw(2);u.xp6(2),u.Q6J("href",n.zip,u.LSH)}}function h(t,e){if(1&t&&(u.TgZ(0,"span"),u.TgZ(1,"a",10),u._uU(2),u.qZA(),u.YNc(3,v,4,1,"span",7),u.qZA()),2&t){var n=u.oxw();u.xp6(1),u.s9C("title",n.title),u.Q6J("href",n.stackblitz,u.LSH),u.xp6(1),u.Oqu(n.title),u.xp6(1),u.Q6J("ngIf",n.enableDownload)}}var g,b=["*"],w=["iframe"],y=c.bL+"live-examples/",x=c.bL+"zips/",Z=function(){var e=function(){function e(r,i){n(this,e);var a=function(e){var n,r={},i=t(e instanceof u.SBq?e.nativeElement.attributes:e.attributes);try{for(i.s();!(n=i.n()).done;){var a=n.value;r[a.name.toLowerCase()]=a.value}}catch(o){i.e(o)}finally{i.f()}return r}(r),o=this.getExampleDir(a,i.path(!1)),c=this.getStackblitzName(a);this.mode=this.getMode(a),this.enableDownload=this.getEnableDownload(a),this.stackblitz=this.getStackblitz(o,c,"embedded"===this.mode),this.zip=this.getZip(o,c),this.title=this.getTitle(a)}return i(e,[{key:"ngAfterContentInit",value:function(){var t=this.content.nativeElement.textContent.trim();t&&(this.title=t)}},{key:"getEnableDownload",value:function(t){return!f(l(t,"noDownload"))}},{key:"getExampleDir",value:function(t,e){var n=l(t,"name");if(!n){var r=e.match(/[^/?#]+(?=\/?(?:\?|#|$))/);n=r?r[0]:"index"}return n.trim()}},{key:"getMode",value:function(t){var e=f(l(t,"downloadOnly")),n=f(l(t,"embedded"));return e?"downloadOnly":n?"embedded":"default"}},{key:"getStackblitz",value:function(t,e,n){return"".concat(y).concat(t,"/").concat(e,"stackblitz.html").concat(n?"?ctl=1":"")}},{key:"getStackblitzName",value:function(t){var e=(l(t,"stackblitz")||"").trim();return e&&"".concat(e,".")}},{key:"getTitle",value:function(t){return(l(t,"title")||"\u73b0\u573a\u6f14\u7ec3").trim()}},{key:"getZip",value:function(t,e){var n=t.split("/")[0];return"".concat(x).concat(t,"/").concat(e).concat(n,".zip")}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Y36(u.SBq),u.Y36(o.Ye))},e.\u0275cmp=u.Xpm({type:e,selectors:[["live-example"]],viewQuery:function(t,e){var n;(1&t&&u.Gf(s,7),2&t)&&(u.iGM(n=u.CRH())&&(e.content=n.first))},ngContentSelectors:b,decls:7,vars:3,consts:[[2,"display","none"],["content",""],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"title"],[3,"src"],[4,"ngIf"],["download","","title","\u4e0b\u8f7d\u8303\u4f8b",3,"href"],["download","",3,"href","title"],["target","_blank",3,"href","title"]],template:function(t,e){1&t&&(u.F$t(),u.TgZ(0,"span",0,1),u.Hsn(2),u.qZA(),u.TgZ(3,"span",2),u.YNc(4,d,4,3,"span",3),u.YNc(5,m,3,3,"span",3),u.YNc(6,h,4,4,"span",4),u.qZA()),2&t&&(u.xp6(3),u.Q6J("ngSwitch",e.mode),u.xp6(1),u.Q6J("ngSwitchCase","embedded"),u.xp6(1),u.Q6J("ngSwitchCase","downloadOnly"))},directives:function(){return[o.RF,o.n9,o.ED,k,o.O5]},encapsulation:2}),e}(),k=function(){var t=function(){function t(){n(this,t)}return i(t,[{key:"ngAfterViewInit",value:function(){this.iframe&&(this.iframe.nativeElement.src=this.src)}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Xpm({type:t,selectors:[["aio-embedded-stackblitz"]],viewQuery:function(t,e){var n;(1&t&&u.Gf(w,7),2&t)&&(u.iGM(n=u.CRH())&&(e.iframe=n.first))},inputs:{src:"src"},decls:2,vars:0,consts:[["frameborder","0","width","100%","height","100%"],["iframe",""]],template:function(t,e){1&t&&u._UZ(0,"iframe",0,1)},styles:["iframe[_ngcontent-%COMP%]{min-height:400px}"]}),t}(),S=((g=function t(){n(this,t),this.customElementComponent=Z}).\u0275fac=function(t){return new(t||g)},g.\u0275mod=u.oAB({type:g}),g.\u0275inj=u.cJS({imports:[[o.ez]]}),g)}}])}();
//# sourceMappingURL=src_app_custom-elements_live-example_live-example_module_ts-es5.9d7dbe96b5b8877d19c8.js.map
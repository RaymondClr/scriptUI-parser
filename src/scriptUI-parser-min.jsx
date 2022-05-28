// prettier-ignore
var parseScriptUI=function(){function t(t,n,e){switch(e.length){case 0:return t.call(n);case 1:return t.call(n,e[0]);case 2:return t.call(n,e[0],e[1]);case 3:return t.call(n,e[0],e[1],e[2]);default:return t.apply(n,e)}}function n(t,n){for(var e=-1,r=t.length;++e<r;)n(t[e],e,t)}function e(t,n){for(var e=-1,r=t.length,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o}function r(t,n){if(!S(n))return t;for(var e in n)g(n,e)&&(t[e]=n[e]);return t}function o(t,n){n=s(n,t);for(var e=0,r=n.length;null!=t&&e<r;)t=t[R(n[e++])];return e&&e==r?t:void 0}function i(t){return Object.prototype.toString.call(t)}function f(t,n){return u(t,n,function(n,e){return g(t,e)})}function u(t,e,r){var o={};return n(e,function(n){var e=t[n];r(e,n)&&(o[n]=e)}),o}function a(t){if("string"==typeof t)return t;if(v(t))return e(t,a)+"";var n=t+"";return"0"==n&&1/t==-dn?"-0":n}function s(t,n){if(v(t))return t;return x(t,n)?[t]:j(B(t))}function c(t,n){if(null==n||n<1)return[];for(var e=[],r=0,o=t.length;r<o;)e.push([].slice.call(t,r,r+=n));return e}function l(t){return function(){return t}}function h(t,n){for(var e=-1,r=t.length;++e<r;)if(t[e]===n)return!0;return!1}function p(t){if(!C(t))return t;return v(t)?t.slice():r({},t)}function d(t,e){var r=v(t)?n:P;return r(t,e)}function b(t,n,e){var r=null==t?void 0:t[n];return void 0===r?e:r}function g(t,n){return null!=t&&Object.prototype.hasOwnProperty.call(t,n)}function v(t){return"[object Array]"===i(t)}function y(t){return!0===t||!1===t}function k(t){return"function"==typeof t}function x(t,n){if(v(t))return!1;var e=typeof t;if("number"==e||"boolean"==e||null==t)return!0;return wn.test(t)||!On.test(t)||null!=n&&t in Object(n)}function O(t){return null==t}function w(t){return null===t}function m(t){return"number"==typeof t}function S(t){return null!=t&&"[object Object]"===i(t)}function C(t){return null!=t&&"object"==typeof t}function L(t){return"string"==typeof t}function T(t){var n=[];for(var e in t)t.hasOwnProperty(e)&&n.push(e);return n}function I(t,n){var e={};return P(t,function(t,r,o){e[r]=n(t,r,o)}),e}function z(t,n){if(null==t)return{};for(var e={},r=0,o=t.length;r<o;r++)n?e[t[r]]=n[r]:e[t[r][0]]=t[r][1];return e}function P(t,e){n(T(t),function(n){e(t[n],n,t)})}function W(t,n){return e(t,F(n))}function F(t){return function(n){return n[t]}}function j(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(mn,function(t,e,r,o){n.push(r?o.replace(gn,"$1"):e||t)}),n}function A(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}function R(t){if("string"==typeof t)return t;var n=t+"";return"0"==n&&1/t==-dn?"-0":n}function B(t){return null==t?"":a(t)}function D(t){for(var n=T(t),e=n.length,r=new Array(e),o=0;o<e;o++)r[o]=t[n[o]];return r}function N(){for(var n=t(Math.max,null,W(arguments,"length").concat(0)),e=new Array(n),r=0;r<n;r++)e[r]=W(arguments,""+r);return e}function U(t){return parseInt(ln.appVersion)===t}function E(t,n){return function(e){return m(e)&&e>=t&&e<=n}}function V(t){return null!=t&&"[object BridgeTalk]"===i(t)}function M(t){return g(Dn,t)}function X(t){return g(Bn,t)}function Y(t){return h(Yn,t)}function _(t){return g(Nn,t)}function G(t){return E(0,3)(t)||L(t)&&yn.test(t)}function q(t){return null!=t&&"[object global]"===i(t)}function H(t){return null!=t&&"[object $]"===i(t)}function J(t){return t===cn}function K(t){return L(t)&&xn.test(t)}function Q(t){return Sn===t}function Z(t){return t.button===Un}function tt(t){return t instanceof Panel}function nt(t){return tt(t)}function et(t){return t.button===En}function rt(t){return J(t)||nt(t)}function ot(t,n){return!!t&&h(n,t.appName)}function it(t){return X(t)||M(t)||_(t)}function ft(t){return t instanceof Window}function ut(t){return t.replace(bn,"")}function at(t){return t.replace(vn,"")}function st(t){return e(t,function(t){return w(t)?void 0:t})}function ct(t,n,e,r){P(t,function(t,o){if(o=ut(o).toLowerCase(),!it(o))return;M(o)?ct(t,e(n,t,o),e,r):r(n,t,o)})}function lt(t,n){if(tt(n))return n;if(O(t))return new Window(Rn);return t=st(t),new Window(t[0],t[1],t[2],t[3])}function ht(){this.layout.resize()}function pt(t,n){var e=t.param,o=lt(e,n);return o.onResizing=o.onResize=ht,r(o,t.style)}function dt(t){if(!S(t))return{};if(!g(t,"style"))return{};return S(t.style)?t.style:{}}function bt(t){if(X(t))return Bn[t];if(_(t))return Nn[t];if(M(t))return Dn[t]}function gt(t){return g(t,"param")?t.param:[]}function vt(t){return v(t)?t:gt(t)}function yt(t){return v(t)?{}:dt(t)}function kt(t,n){if(!v(t))return[];var e=t[0];if(O(e))return t;var r=bt(n),o=t[r];if(O(o)&&(t[r]={}),g(o,"name"))return t;return t[r].name=e+"",t}function xt(t,n){return t[bt(n)]}function Ot(t,n,e){return t.add(n,e[1],e[2],e[3])}function wt(t,n,e){return t.add(n,e[1],e[2],e[3],e[4],e[5])}function mt(t,n,e){var r={rectbutton:Ft,roundbutton:jt};return r[n](t,n,e)}function St(t){return at(uneval(t))}function Ct(t){var n;return t=t.replace(kn,"$1$1$2$2$3$3"),t.replace(xn,function(t,e,r,o){n=[parseInt(e,16),parseInt(r,16),parseInt(o,16)]}),n}function Lt(t){return e(Ct(t),function(t){return t/255})}function Tt(t,n){return Lt(t).concat(n)}function $t(t,n){return At(t)+St(n)}function It(t,n,e){d(t,function(r,o){e(r,o,n.concat(o),t),C(r)&&It(r,n.concat(o),e)})}function zt(n,e){It(n,[],function(n){C(n)||t(e,null,arguments)})}function Pt(t){return I(t,function(t,n){return h(Gn,n)&&!v(t)?A(4,l(t)):t})}function Wt(t,n,e){return zt(t,function(t,r,i,f){var u=o(n,i);o(e,i)(u)&&(f[r]=u)}),t}function Ft(t,n,e){var o=xt(e,n);O(o)&&(o={});var i=b(e,1,le.bounds),u=b(e,2,le.text),a={text:u,properties:{name:o.name}},s=t.add($t(n,a),i),c=r(f(o,Vn),{bounds:i,text:u});return c=Wt(new de,Pt(c),ge),Xt(s,n,c)}function jt(t,n,e){var o=xt(e,n);O(o)&&(o={});var i=b(e,1,he.bounds),u=b(e,2,he.text),a={text:u,properties:{name:o.name}},s=t.add($t(n,a),i),c=r(f(o,Mn),{bounds:i,text:u});return c=Wt(new be,Pt(c),ve),Xt(s,n,c)}function At(t){return Jn[t]}function Rt(t,e){n(Xn,function(n){t.addEventListener(n,e)})}function Bt(t,n,e,r){return{text:this.newPen(this.PenType.SOLID_COLOR,t,1),fill:this.newBrush(this.BrushType.SOLID_COLOR,n),stroke:this.newPen(this.PenType.SOLID_COLOR,e,r)}}function Dt(n,r){var o=e(r,function(e){return t(Bt,n,e)});return z(Xn,o)}function Nt(t){return L(t)?ScriptUI.FontStyle[t.toUpperCase()]:t}function Ut(t){return ScriptUI.newFont(t.fontName,Nt(t.fontStyle),t.fontSize)}function Et(t){return f(t,qn)}function Vt(n){return e(t(N,null,D(f(n,Hn))),function(n){var r=c(n,3),o=N(r[0],r[1]),i=e(o,function(n){return t(Tt,null,n)});return i.concat(r[2])})}function Mt(t){return t.addEventListener("mouseup",function(n){n.stopPropagation(),k(t.onClick)&&Z(n)&&t.onClick()}),t}function Xt(t,n,e){var o=t.graphics;r(o,f(e,_n));var i=Dt(o,Vt(e));return o.pen=i.mouseout,o.font=Ut(Et(e)),Rt(t,function(n){if(n.stopPropagation(),et(n))return;o.pen=i[n.type],t.notify("onDraw")}),Yt(Mt(t),n)}function Yt(t,n){var e=t.graphics,r="rectbutton"===n?"rectPath":"ellipsePath",o="rectbutton"===n?qt:Ht;return t.onDraw=function(){var n=new o(t);e[r](n.left,n.top,n.width,n.height),n.enableFill&&e.fillPath(n.pen.fill),n.enableStroke&&e.strokePath(n.pen.stroke),n.enableText&&e.drawString(n.text,n.pen.text,n.textX,n.textY,n.font)},t}function _t(t,n){var e=n.length;return t/((e+jn)/e)}function Gt(){var t=this.graphics.measureString(this.text,this.font),n=this.graphics.measureString(this.text,this.font,t[0]),e=Ln?_t(n[0],this.text):n[0],r=(this.width-e)/2+this.left+this.fontOffset[0],o=zn?Fn:(this.height-n[1])/2+this.top+this.fontOffset[1];return[r+te[0],o+te[1]]}function qt(t){this.graphics=t.graphics,this.enableText=this.graphics.enableText,this.enableFill=this.graphics.enableFill,this.enableStroke=this.graphics.enableStroke,this.fontOffset=this.graphics.fontOffset,this.pen=this.graphics.pen,this.text=t.text,this.font=this.graphics.font,this.left=0,this.top=0,this.width=t.size[0]-Wn,this.height=t.size[1]-Wn,this.textLocation=Gt.call(this),this.textX=this.textLocation[0],this.textY=this.textLocation[1]}function Ht(t){this.graphics=t.graphics,this.enableText=this.graphics.enableText,this.enableFill=this.graphics.enableFill,this.enableStroke=this.graphics.enableStroke,this.fontOffset=this.graphics.fontOffset,this.pen=this.graphics.pen,this.text=t.text,this.font=this.graphics.font,this.left=this.pen.stroke.lineWidth,this.top=this.pen.stroke.lineWidth,this.width=t.size[0]-2*this.left-Wn,this.height=t.size[1]-2*this.top-Wn,this.textLocation=Gt.call(this),this.textX=this.textLocation[0],this.textY=this.textLocation[1]}function Jt(t,n,e){e=In&&Y(e)?"button":e;var o=st(kt(vt(n),e)),i=_(e)?mt:wt;r(i(t,e,o),yt(n))}function Kt(t,n,e){var o=st(kt(gt(n),e));return r(Ot(t,e,o),n.style)}function Qt(t,n){var e=pt(t,n);return ct(t,e,Kt,Jt),e}function Zt(t){return null===t||!t.visible}function tn(t,n,e,r){var o=null;return function(){return Zt(o)&&(o=Qt(t,n)),on(o,r),ft(o)&&e&&o.show(),o}}function nn(t,n,e,r){var o=Qt(t,n);return on(o,r),ft(o)&&e&&o.show(),o}function en(t,n,e){if(e)return Window;if(rt(sn))return n?sn:Window;return rt(t)?t:Window}function rn(t,n){if(E(0,2)(n))return n;if(E(0,2)(t))return t;return 0}function on(t,n){t.layout.layout(n),t.layout.resize()}function fn(n){var e=n?tn:nn;return t(e,null,[].slice.call(arguments,1))}function un(t,n){var e=r(new pe,t.config),o=!!e.show,i=!!e.dockable,f=!!e.singleton,u=en(n.context,i,f),a=rn(n.layoutMode,e.layoutMode);return[f,t,u,o,a]}function an(n){if(!S(n))return null;var e=t(fn,null,un(n,an));return Pn.push(e),e}var sn=this,cn=H($)&&q($.global)&&$.global,ln=!!cn&&V(cn.BridgeTalk)&&cn.BridgeTalk,hn=["aftereffects","photoshop","illustrator","indesign","estoolkit"];if(!ot(ln,hn))throw"不受支持的宿主应用";var pn="0.1.1",dn=1/0,bn=/\d/g,gn=/\\(\\)?/g,vn=/\)$|^\(/g,yn=/REGULAR|BOLD|ITALIC|BOLDITALIC/i,kn=/^#?([a-f\d])([a-f\d])([a-f\d])$/gi,xn=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/gi,On=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,wn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Sn=ln.appName,Cn=Q("aftereffects"),Ln=Q("photoshop"),Tn=Q("illustrator"),$n=Q("indesign"),In=Cn&&U(16),zn=Tn||$n,Pn=[],Wn=Ln?1:0,Fn=Tn?4.5:5,jn=2.4,An={aftereffects:"palette",photoshop:"dialog",illustrator:"palette",indesign:"dialog",estoolkit:"palette"},Rn=An[Sn],Bn={button:3,checkbox:3,dropdownlist:3,edittext:3,flashplayer:3,iconbutton:3,image:3,listbox:3,progressbar:5,radiobutton:3,scrollbar:5,slider:5,statictext:3,treeview:3},Dn={group:2,panel:3,tab:3,tabbedpanel:3},Nn={rectbutton:3,roundbutton:3,angle:3},Un=0,En=2,Vn=["enableText","enableFill","enableStroke","fontName","fontStyle","fontSize","fontOffset","fontColor","fillColor","strokeColor","fontOpacity","fillOpacity","strokeOpacity","strokeWidth"],Mn=Vn,Xn=["mouseover","mouseout","mousedown","mouseup"],Yn=["rectbutton","roundbutton"],_n=["enableText","enableFill","enableStroke","fontOffset"],Gn=["fontColor","fillColor","strokeColor","fontOpacity","fillOpacity","strokeOpacity","strokeWidth"],qn=["fontName","fontStyle","fontSize"],Hn=["fontColor","fillColor","strokeColor","fontOpacity","fillOpacity","strokeOpacity","strokeWidth"],Jn={rectbutton:"customView",roundbutton:"customView",angle:"customBoundedValue"},Kn={aftereffects:2,photoshop:1,illustrator:2,indesign:2,estoolkit:2},Qn=A(4,l(Kn[Sn])),Zn={aftereffects:[0,0],photoshop:[0,0],illustrator:[0,2],indesign:[0,3],estoolkit:[0,-1]},te=Zn[Sn],ne={aftereffects:["#161616","#8a8a8a","#161616","#ffffff"],photoshop:["#f0f0f0","#f0f0f0","#f0f0f0","#ffffff"],illustrator:["#4b4b4b","#ffffff","#ffffff","#ffffff"],indesign:["#4b4b4b","#ffffff","#ffffff","#ffffff"],estoolkit:["#000000","#000000","#000000","#000000"]},ee=ne[Sn],re={aftereffects:["#8a8a8a","#232323","#636363","#2d8ceb"],photoshop:["#454545","#454545","#363636","#454545"],illustrator:["#ffffff","#535353","#46a0f5","#46a0f5"],indesign:["#ffffff","#535353","#46a0f5","#46a0f5"],estoolkit:["#e5f1fb","#e1e1e1","#cce4f7","#e5f1fb"]},oe=re[Sn],ie={aftereffects:["#8a8a8a","#8a8a8a","#636363","#2d8ceb"],photoshop:["#666666","#666666","#636363","#1473e7"],illustrator:["#ffffff","#ffffff","#46a0f5","#46a0f5"],indesign:["#ffffff","#ffffff","#46a0f5","#46a0f5"],estoolkit:["#0078d7","#adadad","#005499","#0078d7"]},fe=ie[Sn],ue={aftereffects:[0,0,80,28],photoshop:[0,0,65,25],illustrator:[0,0,80,26],indesign:[0,0,80,28],estoolkit:[0,0,78,23]},ae=ue[Sn],se={aftereffects:[0,0,30,30],photoshop:[0,0,28,28],illustrator:[0,0,28,28],indesign:[0,0,30,30],estoolkit:[0,0,23,23]},ce=se[Sn],le={text:"",bounds:ae},he={text:"",bounds:ce},pe=function(){this.dockable=!0,this.show=!0,this.singleton=!1},de=function(){this.enableText=!0,this.enableFill=!0,this.enableStroke=!0,this.fontName="Tahoma",this.fontStyle="REGULAR",this.fontSize=12,this.fontOffset=[0,0],this.fontColor=p(ee),this.fillColor=p(oe),this.strokeColor=p(fe),this.fontOpacity=[1,1,1,1],this.fillOpacity=[1,1,1,1],this.strokeOpacity=[1,1,1,1],this.strokeWidth=p(Qn)},be=de,ge={enableText:y,enableFill:y,enableStroke:y,fontName:L,fontStyle:G,fontSize:E(1,24),fontOffset:[m,m],fontColor:[K,K,K,K],fillColor:[K,K,K,K],strokeColor:[K,K,K,K],fontOpacity:[E(0,1),E(0,1),E(0,1),E(0,1)],fillOpacity:[E(0,1),E(0,1),E(0,1),E(0,1)],strokeOpacity:[E(0,1),E(0,1),E(0,1),E(0,1)],strokeWidth:[E(0,10),E(0,10),E(0,10),E(0,10)]},ve=ge;return an.version=pn,an}.call(this);

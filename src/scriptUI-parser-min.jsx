// prettier-ignore
var parseScriptUI=function(){function t(t,n,e){switch(e.length){case 0:return t.call(n);case 1:return t.call(n,e[0]);case 2:return t.call(n,e[0],e[1]);case 3:return t.call(n,e[0],e[1],e[2]);default:return t.apply(n,e)}}function n(t,n){for(var e=-1,r=t.length;++e<r;)n(t[e],e,t)}function e(t,n){for(var e=-1,r=t.length,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o}function r(t,n){if(!w(n))return t;for(var e in n)d(n,e)&&(t[e]=n[e]);return t}function o(t,n){n=a(n,t);for(var e=0,r=n.length;null!=t&&e<r;)t=t[A(n[e++])];return e&&e==r?t:void 0}function i(t,n){return f(t,n,function(n,e){return d(t,e)})}function f(t,e,r){var o={};return n(e,function(n){var e=t[n];r(e,n)&&(o[n]=e)}),o}function u(t){if("string"==typeof t)return t;if(b(t))return e(t,u)+"";var n=t+"";return"0"==n&&1/t==-an?"-0":n}function a(t,n){if(b(t))return t;return y(t,n)?[t]:W(R(t))}function s(t,n){if(null==n||n<1)return[];for(var e=[],r=0,o=t.length;r<o;)e.push([].slice.call(t,r,r+=n));return e}function c(t){return function(){return t}}function l(t,n){for(var e=-1,r=t.length;++e<r;)if(t[e]===n)return!0;return!1}function h(t,e){var r=b(t)?n:I;return r(t,e)}function p(t,n,e){var r=null==t?void 0:t[n];return void 0===r?e:r}function d(t,n){return null!=t&&Object.prototype.hasOwnProperty.call(t,n)}function b(t){return"[object Array]"===Object.prototype.toString.call(t)}function g(t){return!0===t||!1===t}function v(t){return"function"==typeof t}function y(t,n){if(b(t))return!1;var e=typeof t;if("number"==e||"boolean"==e||null==t)return!0;return gn.test(t)||!bn.test(t)||null!=n&&t in Object(n)}function k(t){return null==t}function x(t){return null===t}function O(t){return"number"==typeof t}function w(t){return null!=t&&"[object Object]"===Object.prototype.toString.call(t)}function m(t){return null!=t&&"object"==typeof t}function S(t){return"string"==typeof t}function C(t){var n=[];for(var e in t)t.hasOwnProperty(e)&&n.push(e);return n}function L(t,n){var e={};return I(t,function(t,r,o){e[r]=n(t,r,o)}),e}function T(t,n){if(null==t)return{};for(var e={},r=0,o=t.length;r<o;r++)n?e[t[r]]=n[r]:e[t[r][0]]=t[r][1];return e}function I(t,e){n(C(t),function(n){e(t[n],n,t)})}function z(t,n){return e(t,P(n))}function P(t){return function(n){return n[t]}}function W(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(vn,function(t,e,r,o){n.push(r?o.replace(cn,"$1"):e||t)}),n}function F(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}function A(t){if("string"==typeof t)return t;var n=t+"";return"0"==n&&1/t==-an?"-0":n}function R(t){return null==t?"":u(t)}function j(t){for(var n=C(t),e=n.length,r=new Array(e),o=0;o<e;o++)r[o]=t[n[o]];return r}function D(){for(var n=t(Math.max,null,z(arguments,"length").concat(0)),e=new Array(n),r=0;r<n;r++)e[r]=z(arguments,""+r);return e}function N(t){return parseInt(on.appVersion)===t}function B(t,n){return function(e){return O(e)&&e>=t&&e<=n}}function U(t){return d(Cn,t)}function E(t){return d(Sn,t)}function V(t){return l(Dn,t)}function M(t){return d(Ln,t)}function X(t){return B(0,3)(t)||S(t)&&hn.test(t)}function Y(t){return t===rn}function _(t){return S(t)&&dn.test(t)}function G(t){return yn===t}function q(t){return t.button===Tn}function H(t){return t instanceof Panel}function J(t){return H(t)}function K(t){return t.button===In}function Q(t){return Y(t)||J(t)}function Z(t,n){return t&&l(n,t.appName)}function tt(t){return E(t)||U(t)||M(t)}function nt(t){return t instanceof Window}function et(t){return t.replace(sn,"")}function rt(t){return t.replace(ln,"")}function ot(t){return e(t,function(t){return x(t)?void 0:t})}function it(t,n,e,r){I(t,function(t,o){if(o=et(o).toLowerCase(),!tt(o))return;U(o)?it(t,e(n,t,o),e,r):r(n,t,o)})}function ft(t,n){if(H(n))return n;if(k(t))return new Window(mn);return t=ot(t),new Window(t[0],t[1],t[2],t[3])}function ut(){this.layout.resize()}function at(t,n){var e=t.param,o=ft(e,n);return o.onResizing=o.onResize=ut,r(o,t.style)}function st(t){if(!w(t))return{};if(!d(t,"style"))return{};return w(t.style)?t.style:{}}function ct(t){if(E(t))return Sn[t];if(M(t))return Ln[t];if(U(t))return Cn[t]}function lt(t){return d(t,"param")?t.param:[]}function ht(t){return b(t)?t:lt(t)}function pt(t){return b(t)?{}:st(t)}function dt(t,n){if(!b(t))return[];var e=t[0];if(k(e))return t;var r=ct(n),o=t[r];if(k(o)&&(t[r]={}),d(o,"name"))return t;return t[r].name=e+"",t}function bt(t,n){return t[ct(n)]}function gt(t,n,e){return t.add(n,e[1],e[2],e[3])}function vt(t,n,e){return t.add(n,e[1],e[2],e[3],e[4],e[5])}function yt(t,n,e){var r={rectbutton:It,roundbutton:zt};return r[n](t,n,e)}function kt(t){return rt(uneval(t))}function xt(t){var n;return t=t.replace(pn,"$1$1$2$2$3$3"),t.replace(dn,function(t,e,r,o){n=[parseInt(e,16),parseInt(r,16),parseInt(o,16)]}),n}function Ot(t){return e(xt(t),function(t){return t/255})}function wt(t,n){return Ot(t).concat(n)}function mt(t,n){return Pt(t)+kt(n)}function St(t,n,e){h(t,function(r,o){e(r,o,n.concat(o),t),m(r)&&St(r,n.concat(o),e)})}function Ct(n,e){St(n,[],function(n){m(n)||t(e,null,arguments)})}function Lt(t){return L(t,function(t,n){return l($n,n)&&!b(t)?F(4,c(t)):t})}function Tt(t,n,e){return Ct(t,function(t,r,i,f){var u=o(n,i);o(e,i)(u)&&(f[r]=u)}),t}function It(t,n,e){var o=bt(e,n);k(o)&&(o={});var f=p(e,1,Zn.bounds),u=p(e,2,Zn.text),a={text:u,properties:{name:o.name}},s=t.add(mt(n,a),f),c=r(i(o,zn),{bounds:f,text:u});return c=Tt(new ee,Lt(c),oe),Bt(s,n,c)}function zt(t,n,e){var o=bt(e,n);k(o)&&(o={});var f=p(e,1,te.bounds),u=p(e,2,te.text),a={text:u,properties:{name:o.name}},s=t.add(mt(n,a),f),c=r(i(o,Pn),{bounds:f,text:u});return c=Tt(new re,Lt(c),ie),Bt(s,n,c)}function Pt(t){return jn[t]}function Wt(t,e){n(Wn,function(n){t.addEventListener(n,e)})}function $t(t,n,e,r){return{text:this.newPen(this.PenType.SOLID_COLOR,t,1),fill:this.newBrush(this.BrushType.SOLID_COLOR,n),stroke:this.newPen(this.PenType.SOLID_COLOR,e,r)}}function Ft(n,r){var o=e(r,function(e){return t($t,n,e)});return T(Wn,o)}function At(t){return S(t)?ScriptUI.FontStyle[t.toUpperCase()]:t}function Rt(t){return ScriptUI.newFont(t.fontName,At(t.fontStyle),t.fontSize)}function jt(t){return i(t,Fn)}function Dt(n){return e(t(D,null,j(i(n,An))),function(n){var r=s(n,3),o=D(r[0],r[1]),i=e(o,function(n){return t(wt,null,n)});return i.concat(r[2])})}function Nt(t){return t.addEventListener("mouseup",function(n){n.stopPropagation(),v(t.onClick)&&q(n)&&t.onClick()}),t}function Bt(t,n,e){var o=t.graphics;r(o,i(e,Rn));var f=Ft(o,Dt(e));return o.pen=f.mouseout,o.font=Rt(jt(e)),Wt(t,function(n){if(n.stopPropagation(),K(n))return;o.pen=f[n.type],t.notify("onDraw")}),Ut(Nt(t),n)}function Ut(t,n){var e=t.graphics,r="rectbutton"===n?"rectPath":"ellipsePath",o="rectbutton"===n?Vt:Mt;return t.onDraw=function(){var n=new o(t);e[r](n.left,n.top,n.width,n.height),n.enableFill&&e.fillPath(n.pen.fill),n.enableStroke&&e.strokePath(n.pen.stroke),n.enableText&&e.drawString(n.text,n.pen.text,n.textX,n.textY,n.font)},t}function Et(){var t=this.graphics.measureString(this.text,this.font),n=this.graphics.measureString(this.text,this.font,t[0]),e=(this.width-n[0])/2+this.left+this.fontOffset[0],r=(this.height-n[1])/2+this.top+this.fontOffset[1];return[e+Vn[0],r+Vn[1]]}function Vt(t){this.graphics=t.graphics,this.enableText=this.graphics.enableText,this.enableFill=this.graphics.enableFill,this.enableStroke=this.graphics.enableStroke,this.fontOffset=this.graphics.fontOffset,this.pen=this.graphics.pen,this.text=t.text,this.font=this.graphics.font,this.left=0,this.top=0,this.width=t.size[0]-Nn,this.height=t.size[1]-Nn,this.textLocation=Et.call(this),this.textX=this.textLocation[0],this.textY=this.textLocation[1]}function Mt(t){this.graphics=t.graphics,this.enableText=this.graphics.enableText,this.enableFill=this.graphics.enableFill,this.enableStroke=this.graphics.enableStroke,this.fontOffset=this.graphics.fontOffset,this.pen=this.graphics.pen,this.text=t.text,this.font=this.graphics.font,this.left=this.pen.stroke.lineWidth,this.top=this.pen.stroke.lineWidth,this.width=t.size[0]-2*this.left-Nn,this.height=t.size[1]-2*this.top-Nn,this.textLocation=Et.call(this),this.textX=this.textLocation[0],this.textY=this.textLocation[1]}function Xt(t,n,e){e=On&&V(e)?"button":e;var o=ot(dt(ht(n),e)),i=M(e)?yt:vt;r(i(t,e,o),pt(n))}function Yt(t,n,e){var o=ot(dt(lt(n),e));return r(gt(t,e,o),n.style)}function _t(t,n){var e=at(t,n);return it(t,e,Yt,Xt),e}function Gt(t){return null===t||!t.visible}function qt(t,n,e,r){var o=null;return function(){return Gt(o)&&(o=_t(t,n)),Qt(o,r),nt(o)&&e&&o.show(),o}}function Ht(t,n,e,r){var o=_t(t,n);return Qt(o,r),nt(o)&&e&&o.show(),o}function Jt(t,n,e){if(e)return Window;if(Q(en))return n?en:Window;return Q(t)?t:Window}function Kt(t,n){if(B(0,2)(n))return n;if(B(0,2)(t))return t;return 0}function Qt(t,n){t.layout.layout(n),t.layout.resize()}function Zt(n){var e=n?qt:Ht;return t(e,null,[].slice.call(arguments,1))}function tn(t,n){var e=r(new ne,t.config),o=!!e.show,i=!!e.dockable,f=!!e.singleton,u=Jt(n.context,i,f),a=Kt(n.layoutMode,e.layoutMode);return[f,t,u,o,a]}function nn(n){return w(n)?t(Zt,null,tn(n,nn)):null}var en=this,rn=$.global,on=rn&&rn.BridgeTalk,fn=["aftereffects","photoshop","illustrator","indesign","estoolkit"];if(!Z(on,fn))throw"不受支持的宿主应用";var un="0.0.6",an=1/0,sn=/\d/g,cn=/\\(\\)?/g,ln=/\)$|^\(/g,hn=/REGULAR|BOLD|ITALIC|BOLDITALIC/i,pn=/^#?([a-f\d])([a-f\d])([a-f\d])$/gi,dn=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/gi,bn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,gn=/^\w*$/,vn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yn=on.appName,kn=G("aftereffects"),xn=G("photoshop"),On=kn&&N(16),wn={aftereffects:"palette",photoshop:"dialog",illustrator:"palette",indesign:"dialog",estoolkit:"palette"},mn=wn[yn],Sn={button:3,checkbox:3,dropdownlist:3,edittext:3,flashplayer:3,iconbutton:3,image:3,listbox:3,progressbar:5,radiobutton:3,scrollbar:5,slider:5,statictext:3,treeview:3},Cn={group:2,panel:3,tab:3,tabbedpanel:3},Ln={rectbutton:3,roundbutton:3,angle:3},Tn=0,In=2,zn=["enableText","enableFill","enableStroke","fontName","fontStyle","fontSize","fontOffset","fontColor","fillColor","strokeColor","fontOpacity","fillOpacity","strokeOpacity","strokeWidth"],Pn=zn,Wn=["mouseover","mouseout","mousedown","mouseup"],$n=["fontColor","fillColor","strokeColor","fontOpacity","fillOpacity","strokeOpacity","strokeWidth"],Fn=["fontName","fontStyle","fontSize"],An=["fontColor","fillColor","strokeColor","fontOpacity","fillOpacity","strokeOpacity","strokeWidth"],Rn=["enableText","enableFill","enableStroke","fontOffset"],jn={rectbutton:"customView",roundbutton:"customView",angle:"customBoundedValue"},Dn=["rectbutton","roundbutton"],Nn=xn?1:0,Bn={aftereffects:2,photoshop:1,illustrator:2,indesign:2,estoolkit:2},Un=F(4,c(Bn[yn])),En={aftereffects:[0,0],photoshop:[6,-2],illustrator:[0,9],indesign:[0,9],estoolkit:[0,-1]},Vn=En[yn],Mn={aftereffects:["#161616","#8a8a8a","#161616","#ffffff"],photoshop:["#f0f0f0","#f0f0f0","#f0f0f0","#ffffff"],illustrator:["#4b4b4b","#ffffff","#ffffff","#ffffff"],indesign:["#4b4b4b","#ffffff","#ffffff","#ffffff"],estoolkit:["#000000","#000000","#000000","#000000"]},Xn=Mn[yn],Yn={aftereffects:["#8a8a8a","#232323","#636363","#2d8ceb"],photoshop:["#454545","#454545","#363636","#454545"],illustrator:["#ffffff","#535353","#46a0f5","#46a0f5"],indesign:["#ffffff","#535353","#46a0f5","#46a0f5"],estoolkit:["#e5f1fb","#e1e1e1","#cce4f7","#e5f1fb"]},_n=Yn[yn],Gn={aftereffects:["#8a8a8a","#8a8a8a","#636363","#2d8ceb"],photoshop:["#666666","#666666","#636363","#1473e7"],illustrator:["#ffffff","#ffffff","#46a0f5","#46a0f5"],indesign:["#ffffff","#ffffff","#46a0f5","#46a0f5"],estoolkit:["#0078d7","#adadad","#005499","#0078d7"]},qn=Gn[yn],Hn={aftereffects:[0,0,80,28],photoshop:[0,0,65,25],illustrator:[0,0,80,26],indesign:[0,0,80,28],estoolkit:[0,0,78,23]},Jn=Hn[yn],Kn={aftereffects:[0,0,30,30],photoshop:[0,0,28,28],illustrator:[0,0,28,28],indesign:[0,0,30,30],estoolkit:[0,0,23,23]},Qn=Kn[yn],Zn={text:"",bounds:Jn},te={text:"",bounds:Qn},ne=function(){this.dockable=!0,this.show=!0,this.singleton=!1},ee=function(){this.enableText=!0,this.enableFill=!0,this.enableStroke=!0,this.fontName="Tahoma",this.fontStyle="REGULAR",this.fontSize=12,this.fontOffset=[0,0],this.fontColor=Xn,this.fillColor=_n,this.strokeColor=qn,this.fontOpacity=[1,1,1,1],this.fillOpacity=[1,1,1,1],this.strokeOpacity=[1,1,1,1],this.strokeWidth=Un},re=ee,oe={enableText:g,enableFill:g,enableStroke:g,fontName:S,fontStyle:X,fontSize:B(1,24),fontOffset:[O,O],fontColor:[_,_,_,_],fillColor:[_,_,_,_],strokeColor:[_,_,_,_],fontOpacity:[B(0,1),B(0,1),B(0,1),B(0,1)],fillOpacity:[B(0,1),B(0,1),B(0,1),B(0,1)],strokeOpacity:[B(0,1),B(0,1),B(0,1),B(0,1)],strokeWidth:[B(0,10),B(0,10),B(0,10),B(0,10)]},ie=oe;return nn.version=un,nn}.call(this);

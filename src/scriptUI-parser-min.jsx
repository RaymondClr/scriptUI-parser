// prettier-ignore
var parseScriptUI=function(){function t(){for(var t=-1,n=arguments.length;++t<n;)if(!arguments[t])return!1;return!0}function n(t,n,e){switch(e.length){case 0:return t.call(n);case 1:return t.call(n,e[0]);case 2:return t.call(n,e[0],e[1]);case 3:return t.call(n,e[0],e[1],e[2]);default:return t.apply(n,e)}}function e(t,n){for(var e=-1,r=t.length;++e<r;)n(t[e],e,t)}function r(t,n){for(var e=-1,r=t.length,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o}function o(t){return A([].slice.call(arguments,1),function(n){if(L(n))for(var e in n)t[e]=n[e]}),t}function i(t,n){n=l(n,t);for(var e=0,r=n.length;null!=t&&e<r;)t=t[U(n[e++])];return e&&e==r?t:void 0}function f(t){return Object.prototype.toString.call(t)}function u(t,n){return a(t,n,function(n,e){return x(t,e)})}function a(t,n,r){var o={};return e(n,function(n){var e=t[n];r(e,n)&&(o[n]=e)}),o}function c(t){if("string"==typeof t)return t;if(y(t))return r(t,c)+"";var n=t+"";return"0"==n&&1/t==-Rn?"-0":n}function l(t,n){if(y(t))return t;return O(t,n)?[t]:B(V(t))}function s(t,n){if(null==n||n<1)return[];for(var e=[],r=0,o=t.length;r<o;)e.push([].slice.call(t,r,r+=n));return e}function h(t){if(!T(t))return t;return y(t)?t.slice():o({},t)}function p(t){var n=y(t)?[]:{};return T(t)&&g(t,function(t,e,r){x(r,e)&&(n[e]=T(t)?p(t):t)}),n}function d(t){return function(){return t}}function b(t,n){for(var e=-1,r=t.length;++e<r;)if(t[e]===n)return!0;return!1}function g(t,n){var r=y(t)?e:A;return r(t,n)}function v(t,n,e){var r=null==t?void 0:t[n];return void 0===r?e:r}function x(t,n){return null!=t&&Object.prototype.hasOwnProperty.call(t,n)}function y(t){return"[object Array]"===f(t)}function k(t){return!0===t||!1===t}function w(t){return"function"==typeof t}function O(t,n){if(y(t))return!1;var e=typeof t;if("number"==e||"boolean"==e||null==t)return!0;return D(Yn.test(t),!Xn.test(t),null!=n&&t in Object(n))}function m(t){return null==t}function S(t){return null===t}function C(t){return"number"==typeof t}function L(n){var e=typeof n;return t(null!=n,"object"==e||"function"==e)}function T(t){return null!=t&&"object"==typeof t}function I(t){return"string"==typeof t}function P(t){var n=[];for(var e in t)t.hasOwnProperty(e)&&n.push(e);return n}function F(t,n){var e={};return A(t,function(t,r,o){e[r]=n(t,r,o)}),e}function z(t,n){if(null==t)return{};for(var e={},r=0,o=t.length;r<o;r++)n?e[t[r]]=n[r]:e[t[r][0]]=t[r][1];return e}function A(t,n){e(P(t),function(e){n(t[e],e,t)})}function D(){for(var t=-1,n=arguments.length;++t<n;)if(arguments[t])return!0;return!1}function W(t,n){return r(t,R(n))}function R(t){return function(n){return n[t]}}function B(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(Gn,function(t,e,r,o){n.push(r?o.replace(Nn,"$1"):e||t)}),n}function N(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}function U(t){if("string"==typeof t)return t;var n=t+"";return"0"==n&&1/t==-Rn?"-0":n}function V(t){return null==t?"":c(t)}function j(t,n){return delete t[n],t}function E(t){for(var n=P(t),e=n.length,r=new Array(e),o=0;o<e;o++)r[o]=t[n[o]];return r}function X(){for(var t=n(Math.max,null,W(arguments,"length").concat(0)),e=new Array(t),r=0;r<t;r++)e[r]=W(arguments,""+r);return e}function Y(t,e,r,o){var i=Zt(r)?J:K;return n(i,null,arguments)}function G(t,e){var r=Qt(t.type)?H:M;o(n(r,null,arguments),It(e))}function K(t,n,e,r){if(Qt(e)){var i=It(n),f=dn(t,e,Sn(n,e));return x(i,"selection")&&r.listContainer.push({container:f,itemIndex:i.selection}),o(f,j(i,"selection"))}return o(dn(t,e,Sn(n,e)),It(n))}function M(t,n,e){e=Zn&&Vt(e)?"button":e;var r=jt(e)?dt:bn;return r(t,e,Sn(n,e))}function H(t,n,e,r){return gn(t,Pt(n))}function J(t,n,e,r){var i=It(n),f=vn(t,Pt(n));return i.expanded&&r.nodes.push(f),o(f,j(i,"expanded"))}function Q(t,n,e){return yt(n,function(n,r,o,f){var u=i(t,o);i(e,o)(u)&&(f[r]=u)}),n}function _(t,n,e){g(t,function(r,o){e(r,o,n.concat(o),t),T(r)&&_(r,n.concat(o),e)})}function Z(t,n,e,r,o){A(t,function(t,i){if(i=wt(i).toLowerCase(),!on(i)||!en(n.type,i))return;if(Ut(i)){var f=e(n,t,i,o);Z(t,f,e,r,o)}else r(n,t,i)})}function q(t){return v(t,"config")}function tt(t){return v(t,"param")}function nt(t){var n=v(t,"param");return y(n)?hn(n):[]}function et(t){var n=v(t,"style");return L(n)?n:{}}function rt(t,n){var e=Wt(t,n),r=new kt;return Z(t,e,Y,G,r),wn(r.listContainer),mt(r.nodes),e}function ot(t,n,e,r){var o=rt(t,n);return Dt(o,r),un(o)&&e&&o.show(),o}function it(t,n,e,r){var o=null;return function(){return Ht(o)&&(o=rt(t,n)),Dt(o,r),un(o)&&e&&o.show(),o}}function ft(t){var e=t?it:ot;return n(e,null,[].slice.call(arguments,1))}function ut(){var t=this.graphics.measureString(this.text,this.font),n=this.graphics.measureString(this.text,this.font,t[0]),e=Hn?St(n[0],this.text):n[0],r=(this.width-e)/2+this.left+this.fontOffset[0],o=qn?ee:(this.height-n[1])/2+this.top+this.fontOffset[1];return[r+Fe[0],o+Fe[1]]}function at(t){return ScriptUI.newFont(t.fontName,ln(t.fontStyle),t.fontSize)}function ct(t,e){var o=r(e,function(e){return n(xn,t,e)});return z(Oe,o)}function lt(t,n,e){var r=Ct(e,n);m(r)&&(r={});var i=v(e,1,Ee.bounds),f=v(e,2,Ee.text),a={text:f,properties:{name:r.name}},c=t.add(st(n,a),i),l=o(u(r,ke),{bounds:i,text:f});return l=Q(sn(l),p(Ge),Me),gt(c,n,l)}function st(t,n){return an(t)+pt(n)}function ht(t,n,e){var r=Ct(e,n);m(r)&&(r={});var i=v(e,1,Xe.bounds),f=v(e,2,Xe.text),a={text:f,properties:{name:r.name}},c=t.add(st(n,a),i),l=o(u(r,we),{bounds:i,text:f});return l=Q(sn(l),p(Ke),He),gt(c,n,l)}function pt(t){return Ot(uneval(t))}function dt(t,n,e){var r={rectbutton:lt,roundbutton:ht};return r[n](t,n,e)}function bt(t,n){var e=t.graphics,r="rectbutton"===n?"rectPath":"ellipsePath",o="rectbutton"===n?vt:xt;return t.onDraw=function(){var n=new o(t);e[r](n.left,n.top,n.width,n.height),n.enableFill&&e.fillPath(n.pen.fill),n.enableStroke&&e.strokePath(n.pen.stroke),n.enableText&&e.drawString(n.text,n.pen.text,n.textX,n.textY,n.font)},t}function gt(t,n,e){var r=t.graphics,i=ct(r,pn(e)),f=at(cn(e));return o(r,u(e,me),{pen:i.mouseout,font:f}),bt(In(Pn(t,i)),n)}function vt(t){this.graphics=t.graphics,this.enableText=this.graphics.enableText,this.enableFill=this.graphics.enableFill,this.enableStroke=this.graphics.enableStroke,this.fontOffset=this.graphics.fontOffset,this.pen=this.graphics.pen,this.text=t.text,this.font=this.graphics.font,this.left=0,this.top=0,this.width=t.size[0]-ne,this.height=t.size[1]-ne,this.textLocation=ut.call(this),this.textX=this.textLocation[0],this.textY=this.textLocation[1]}function xt(t){this.graphics=t.graphics,this.enableText=this.graphics.enableText,this.enableFill=this.graphics.enableFill,this.enableStroke=this.graphics.enableStroke,this.fontOffset=this.graphics.fontOffset,this.pen=this.graphics.pen,this.text=t.text,this.font=this.graphics.font,this.left=this.pen.stroke.lineWidth,this.top=this.pen.stroke.lineWidth,this.width=t.size[0]-2*this.left-ne,this.height=t.size[1]-2*this.top-ne,this.textLocation=ut.call(this),this.textX=this.textLocation[0],this.textY=this.textLocation[1]}function yt(t,e){_(t,[],function(t){T(t)||n(e,null,arguments)})}function kt(){this.nodes=[],this.listContainer=[]}function wt(t){return t.replace(Bn,"")}function Ot(t){return t.replace(Un,"")}function mt(t){e(t,function(t){t.expanded=!0})}function St(t,n){var e=n.length;return t/((e+re)/e)}function Ct(t,n){return t[Lt(n)]}function Lt(t){if(_t(t))return ae[t];if(jt(t))return le[t];if(Ut(t))return ce[t]}function Tt(t){return y(t)?hn(t):nt(t)}function It(t){return y(t)?{}:et(t)}function Pt(t){var n=L(t)?tt(t):t;return String(n)}function $t(t,n){return qt(n)?n:new Window(t[0],t[1],t[2],t[3])}function Ft(t){return r(zt(t),function(t){return t/255})}function zt(t){var n;return t=t.replace(jn,"$1$1$2$2$3$3"),t.replace(En,function(t,e,r,o){n=[parseInt(e,16),parseInt(r,16),parseInt(o,16)]}),n}function At(t,n){return Ft(t).concat(n)}function Dt(t,n){t.layout.layout(n),t.layout.resize()}function Wt(t,n){var e=$t($n(nt(t)),n);return e.onResizing=e.onResize=yn,o(e,et(t))}function Rt(t){return parseInt(An.appVersion)===t}function Bt(t,n){return function(e){return C(e)&&e>=t&&e<=n}}function Nt(t){return null!=t&&"[object BridgeTalk]"===f(t)}function Ut(t){return he.test(ve[t])}function Vt(t){return be.test(ve[t])}function jt(t){return de.test(ve[t])}function Et(t){return D(Bt(0,3)(t),I(t)&&Vn.test(t))}function Xt(t){return t===zn}function Yt(t){return null!=t&&"[object global]"===f(t)}function Gt(t){return null!=t&&"[object $]"===f(t)}function Kt(t){return I(t)&&En.test(t)}function Mt(t){return Kn===t}function Ht(t){return null===t||!t.visible}function Jt(t){return t.button===xe}function Qt(t){return pe.test(ve[t])}function _t(t){return ge.test(ve[t])}function Zt(t){return"node"===t}function qt(t){return t instanceof Panel}function tn(t){return qt(t)}function nn(t){return t.button===ye}function en(t,n){var e=ve[t]+ve[n];return se.test(e)}function rn(t){return Xt(t)||tn(t)}function on(t){return x(ve,t)}function fn(t,n){return!!t&&b(n,t.appName)}function un(t){return t instanceof Window}function an(t){return Te[t]}function cn(t){return u(t,Ce)}function ln(t){return I(t)?ScriptUI.FontStyle[t.toUpperCase()]:t}function sn(t){return F(t,function(t,n){return b(Se,n)&&!y(t)?N(4,d(t)):t})}function hn(t){return r(t,function(t){return S(t)?void 0:t})}function pn(t){return r(n(X,null,E(u(t,Le))),function(t){var e=s(t,3),o=X(e[0],e[1]),i=r(o,function(t){return n(At,null,t)});return i.concat(e[2])})}function dn(t,n,e){return t.add(n,e[1],e[2],e[3])}function bn(t,n,e){return t.add(n,e[1],e[2],e[3],e[4],e[5])}function gn(t,n){return t.add("item",n)}function vn(t,n){return t.add("node",n)}function xn(t,n,e,r){return{text:this.newPen(this.PenType.SOLID_COLOR,t,1),fill:this.newBrush(this.BrushType.SOLID_COLOR,n),stroke:this.newPen(this.PenType.SOLID_COLOR,e,r)}}function yn(){this.layout.resize()}function kn(t){if(!L(t))return null;var e=n(ft,null,On(t,kn));return te.push(e),e}function wn(t){e(t,function(t){var n=t.container,e=t.itemIndex,o=r(y(e)?e:[e],function(t){return n.items[t]});n.selection=o})}function On(t,n){var e=o(h(Ye),q(t)),r=!!e.show,i=!!e.dockable,f=!!e.singleton,u=mn(n.context,i,f),a=Cn(n.layoutMode,e.layoutMode);return[f,t,u,r,a]}function mn(t,n,e){if(e||!n)return Window;if(rn(Fn))return Fn;return rn(t)?t:Window}function Sn(t,n){return Tn(Tt(t),n)}function Cn(t,n){if(Bt(0,2)(n))return n;if(Bt(0,2)(t))return t;return 0}function Ln(t,n){e(Oe,function(e){t.addEventListener(e,n)})}function Tn(t,n){var e=t[0];if(m(e))return t;var r=Lt(n),o=t[r];if(L(o)||(t[r]={}),x(o,"name"))return t;return t[r].name=e,t}function In(t){return t.addEventListener("mouseup",function(n){n.stopPropagation(),w(t.onClick)&&Jt(n)&&t.onClick()}),t}function Pn(t,n){return Ln(t,function(e){if(e.stopPropagation(),nn(e))return;t.graphics.pen=n[e.type],t.notify("onDraw")}),t}function $n(t){var n=String(t[0]);return t[0]=b(ie,n)?n:ue,t}var Fn=this,zn=Gt($)&&Yt($.global)&&$.global,An=!!zn&&Nt(zn.BridgeTalk)&&zn.BridgeTalk,Dn=["aftereffects","photoshop","illustrator","indesign","estoolkit"];if(!fn(An,Dn))throw"不受支持的宿主应用";var Wn="0.2.7",Rn=1/0,Bn=/\d/g,Nn=/\\(\\)?/g,Un=/\)$|^\(/g,Vn=/REGULAR|BOLD|ITALIC|BOLDITALIC/i,jn=/^#?([a-f\d])([a-f\d])([a-f\d])$/gi,En=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/gi,Xn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Yn=/^\w*$/,Gn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kn=An.appName,Mn=Mt("aftereffects"),Hn=Mt("photoshop"),Jn=Mt("illustrator"),Qn=Mt("indesign"),_n=Mt("estoolkit"),Zn=Mn&&Rt(16),qn=Jn||Qn,te=[],ne=Hn?1:0,ee=Jn?4.5:5,re=2.4,oe={aftereffects:["dialog","palette","window"],photoshop:"dialog",illustrator:["dialog","palette","window"],indesign:"dialog",estoolkit:["dialog","palette","window"]},ie=oe[Kn],fe={aftereffects:"palette",photoshop:"dialog",illustrator:"palette",indesign:"dialog",estoolkit:"palette"},ue=fe[Kn],ae={button:3,checkbox:3,dropdownlist:3,edittext:3,iconbutton:3,image:3,listbox:3,progressbar:4,radiobutton:3,scrollbar:5,slider:5,statictext:3,treeview:3},ce={group:2,panel:3,tab:3,tabbedpanel:3},le={rectbutton:3,roundbutton:3,angle:3},se=/[CGMNTW][ABDEFGHIKNOPQRSUVXYZ]|[DK]J|[VL][LJ]|UT/,he=/[DGKLNTUV]/,pe=/[DKLV]/,de=/[XYZ]/,be=/[XY]/,ge=/[ABDEFHIKOPQRSV]/,ve={button:"A",checkbox:"B",dialog:"C",dropdownlist:"D",edittext:"E",group:"G",iconbutton:"H",image:"I",item:"J",listbox:"K",node:"L",palette:"M",panel:"N",progressbar:"O",radiobutton:"P",scrollbar:"Q",slider:"R",statictext:"S",tab:"T",tabbedpanel:"U",treeview:"V",window:"W",rectbutton:"X",roundbutton:"Y"};_n&&o(ve,{flashplayer:"F"}),Hn&&j(ve,"treeview");var xe=0,ye=2,ke=["enableText","enableFill","enableStroke","fontName","fontStyle","fontSize","fontOffset","fontColor","fillColor","strokeColor","fontOpacity","fillOpacity","strokeOpacity","strokeWidth"],we=ke,Oe=["mouseover","mouseout","mousedown","mouseup"],me=["enableText","enableFill","enableStroke","fontOffset"],Se=["fontColor","fillColor","strokeColor","fontOpacity","fillOpacity","strokeOpacity","strokeWidth"],Ce=["fontName","fontStyle","fontSize"],Le=["fontColor","fillColor","strokeColor","fontOpacity","fillOpacity","strokeOpacity","strokeWidth"],Te={rectbutton:"customView",roundbutton:"customView",angle:"customBoundedValue"},Ie={aftereffects:2,photoshop:1,illustrator:2,indesign:2,estoolkit:2},Pe=N(4,d(Ie[Kn])),$e={aftereffects:[0,0],photoshop:[0,0],illustrator:[0,2],indesign:[0,3],estoolkit:[0,-1]},Fe=$e[Kn],ze={aftereffects:["#161616","#8a8a8a","#161616","#ffffff"],photoshop:["#f0f0f0","#f0f0f0","#f0f0f0","#ffffff"],illustrator:["#4b4b4b","#ffffff","#ffffff","#ffffff"],indesign:["#4b4b4b","#ffffff","#ffffff","#ffffff"],estoolkit:["#000000","#000000","#000000","#000000"]},Ae=ze[Kn],De={aftereffects:["#8a8a8a","#232323","#636363","#2d8ceb"],photoshop:["#454545","#454545","#363636","#454545"],illustrator:["#ffffff","#535353","#46a0f5","#46a0f5"],indesign:["#ffffff","#535353","#46a0f5","#46a0f5"],estoolkit:["#e5f1fb","#e1e1e1","#cce4f7","#e5f1fb"]},We=De[Kn],Re={aftereffects:["#8a8a8a","#8a8a8a","#636363","#2d8ceb"],photoshop:["#666666","#666666","#636363","#1473e7"],illustrator:["#ffffff","#ffffff","#46a0f5","#46a0f5"],indesign:["#ffffff","#ffffff","#46a0f5","#46a0f5"],estoolkit:["#0078d7","#adadad","#005499","#0078d7"]},Be=Re[Kn],Ne={aftereffects:[0,0,80,28],photoshop:[0,0,65,25],illustrator:[0,0,80,26],indesign:[0,0,80,28],estoolkit:[0,0,78,23]},Ue=Ne[Kn],Ve={aftereffects:[0,0,30,30],photoshop:[0,0,28,28],illustrator:[0,0,28,28],indesign:[0,0,30,30],estoolkit:[0,0,23,23]},je=Ve[Kn],Ee={text:"",bounds:Ue},Xe={text:"",bounds:je},Ye={dockable:!0,show:!0,singleton:!1},Ge={enableText:!0,enableFill:!0,enableStroke:!0,fontName:"Tahoma",fontStyle:"REGULAR",fontSize:12,fontOffset:[0,0],fontColor:Ae,fillColor:We,strokeColor:Be,fontOpacity:[1,1,1,1],fillOpacity:[1,1,1,1],strokeOpacity:[1,1,1,1],strokeWidth:Pe},Ke=Ge,Me={enableText:k,enableFill:k,enableStroke:k,fontName:I,fontStyle:Et,fontSize:Bt(1,24),fontOffset:[C,C],fontColor:[Kt,Kt,Kt,Kt],fillColor:[Kt,Kt,Kt,Kt],strokeColor:[Kt,Kt,Kt,Kt],fontOpacity:[Bt(0,1),Bt(0,1),Bt(0,1),Bt(0,1)],fillOpacity:[Bt(0,1),Bt(0,1),Bt(0,1),Bt(0,1)],strokeOpacity:[Bt(0,1),Bt(0,1),Bt(0,1),Bt(0,1)],strokeWidth:[Bt(0,10),Bt(0,10),Bt(0,10),Bt(0,10)]},He=Me;return kn.version=Wn,kn}.call(this);

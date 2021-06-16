var pc=Object.defineProperty;var Hs=(r,e)=>{for(var t in e)pc(r,t,{get:e[t],enumerable:!0})};function mc(r){if(!!r&&typeof window!="undefined"){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function Gn(r,e){var t=r.__state.conversionName.toString(),n=Math.round(r.r),i=Math.round(r.g),a=Math.round(r.b),s=r.a,o=Math.round(r.h),l=r.s.toFixed(1),c=r.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=r.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+a+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+a+","+s+")";if(t==="HEX")return"0x"+r.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+a+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+a+","+s+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+a+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+a+",a:"+s+"}";if(t==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+s+"}"}return"unknown format"}var Gs=Array.prototype.forEach,Ai=Array.prototype.slice,W={BREAK:{},extend:function(e){return this.each(Ai.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(t[i])||(e[i]=t[i])}.bind(this))},this),e},defaults:function(e){return this.each(Ai.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(e[i])&&(e[i]=t[i])}.bind(this))},this),e},compose:function(){var e=Ai.call(arguments);return function(){for(var t=Ai.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(!!e){if(Gs&&e.forEach&&e.forEach===Gs)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,a=void 0;for(i=0,a=e.length;i<a;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var s in e)if(t.call(n,e[s],s)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var a=this,s=arguments;function o(){i=null,n||e.apply(a,s)}var l=n||!i;clearTimeout(i),i=setTimeout(o,t),l&&e.apply(a,s)}},toArray:function(e){return e.toArray?e.toArray():Ai.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(r){function e(t){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},gc=[{litmus:W.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:Gn},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:Gn},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:Gn},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:Gn}}},{litmus:W.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:W.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:W.isObject,conversions:{RGBA_OBJ:{read:function(e){return W.isNumber(e.r)&&W.isNumber(e.g)&&W.isNumber(e.b)&&W.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return W.isNumber(e.r)&&W.isNumber(e.g)&&W.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return W.isNumber(e.h)&&W.isNumber(e.s)&&W.isNumber(e.v)&&W.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return W.isNumber(e.h)&&W.isNumber(e.s)&&W.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Ei=void 0,er=void 0,qr=function(){er=!1;var e=arguments.length>1?W.toArray(arguments):arguments[0];return W.each(gc,function(t){if(t.litmus(e))return W.each(t.conversions,function(n,i){if(Ei=n.read(e),er===!1&&Ei!==!1)return er=Ei,Ei.conversionName=i,Ei.conversion=n,W.BREAK}),W.BREAK}),er},ks=void 0,tr={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,a=e/60-Math.floor(e/60),s=n*(1-t),o=n*(1-a*t),l=n*(1-(1-a)*t),c=[[n,l,s],[o,n,s],[s,n,l],[s,o,n],[l,s,n],[n,s,o]][i];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),a=Math.max(e,t,n),s=a-i,o=void 0,l=void 0;if(a!==0)l=s/a;else return{h:NaN,s:0,v:0};return e===a?o=(t-n)/s:t===a?o=2+(n-e)/s:o=4+(e-t)/s,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:a/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(ks=t*8)|e&~(255<<ks)}},_c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},It=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},Ut=function(){function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),an=function r(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var a=Object.getPrototypeOf(e);return a===null?void 0:r(a,t,n)}else{if("value"in i)return i.value;var s=i.get;return s===void 0?void 0:s.call(n)}},sn=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},on=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},Je=function(){function r(){if(It(this,r),this.__state=qr.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Ut(r,[{key:"toString",value:function(){return Gn(this)}},{key:"toHexString",value:function(){return Gn(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r}();function Zr(r,e,t){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Je.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(Je.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function $r(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Je.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(Je.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}Je.recalculateRGB=function(r,e,t){if(r.__state.space==="HEX")r.__state[e]=tr.component_from_hex(r.__state.hex,t);else if(r.__state.space==="HSV")W.extend(r.__state,tr.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};Je.recalculateHSV=function(r){var e=tr.rgb_to_hsv(r.r,r.g,r.b);W.extend(r.__state,{s:e.s,v:e.v}),W.isNaN(e.h)?W.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h};Je.COMPONENTS=["r","g","b","h","s","v","hex","a"];Zr(Je.prototype,"r",2);Zr(Je.prototype,"g",1);Zr(Je.prototype,"b",0);$r(Je.prototype,"h");$r(Je.prototype,"s");$r(Je.prototype,"v");Object.defineProperty(Je.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Je.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=tr.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Ln=function(){function r(e,t){It(this,r),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Ut(r,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r}(),xc={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Vs={};W.each(xc,function(r,e){W.each(r,function(t){Vs[t]=e})});var vc=/(\d+(\.\d+)?)px/;function Yt(r){if(r==="0"||W.isUndefined(r))return 0;var e=r.match(vc);return W.isNull(e)?0:parseFloat(e[1])}var N={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,a=t;W.isUndefined(a)&&(a=!0),W.isUndefined(i)&&(i=!0),e.style.position="absolute",a&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var a=n||{},s=Vs[t];if(!s)throw new Error("Event type "+t+" not supported.");var o=document.createEvent(s);switch(s){case"MouseEvents":{var l=a.x||a.clientX||0,c=a.y||a.clientY||0;o.initMouseEvent(t,a.bubbles||!1,a.cancelable||!0,window,a.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=o.initKeyboardEvent||o.initKeyEvent;W.defaults(a,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,a.bubbles||!1,a.cancelable,window,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.keyCode,a.charCode);break}default:{o.initEvent(t,a.bubbles||!1,a.cancelable||!0);break}}W.defaults(o,i),e.dispatchEvent(o)},bind:function(e,t,n,i){var a=i||!1;return e.addEventListener?e.addEventListener(t,n,a):e.attachEvent&&e.attachEvent("on"+t,n),N},unbind:function(e,t,n,i){var a=i||!1;return e.removeEventListener?e.removeEventListener(t,n,a):e.detachEvent&&e.detachEvent("on"+t,n),N},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return N},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return N},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Yt(t["border-left-width"])+Yt(t["border-right-width"])+Yt(t["padding-left"])+Yt(t["padding-right"])+Yt(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Yt(t["border-top-width"])+Yt(t["border-bottom-width"])+Yt(t["padding-top"])+Yt(t["padding-bottom"])+Yt(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Ws=function(r){sn(e,r);function e(t,n){It(this,e);var i=on(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function s(){a.setValue(!a.__prev)}return N.bind(i.__checkbox,"change",s,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return Ut(e,[{key:"setValue",value:function(n){var i=an(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),an(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Ln),yc=function(r){sn(e,r);function e(t,n,i){It(this,e);var a=on(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i,o=a;if(a.__select=document.createElement("select"),W.isArray(s)){var l={};W.each(s,function(c){l[c]=c}),s=l}return W.each(s,function(c,u){var d=document.createElement("option");d.innerHTML=u,d.setAttribute("value",c),o.__select.appendChild(d)}),a.updateDisplay(),N.bind(a.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),a.domElement.appendChild(a.__select),a}return Ut(e,[{key:"setValue",value:function(n){var i=an(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return N.isActive(this.__select)?this:(this.__select.value=this.getValue(),an(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Ln),bc=function(r){sn(e,r);function e(t,n){It(this,e);var i=on(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=i;function s(){a.setValue(a.__input.value)}function o(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),N.bind(i.__input,"keyup",s),N.bind(i.__input,"change",s),N.bind(i.__input,"blur",o),N.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return Ut(e,[{key:"updateDisplay",value:function(){return N.isActive(this.__input)||(this.__input.value=this.getValue()),an(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Ln);function Xs(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var Ys=function(r){sn(e,r);function e(t,n,i){It(this,e);var a=on(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i||{};return a.__min=s.min,a.__max=s.max,a.__step=s.step,W.isUndefined(a.__step)?a.initialValue===0?a.__impliedStep=1:a.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(a.initialValue))/Math.LN10))/10:a.__impliedStep=a.__step,a.__precision=Xs(a.__impliedStep),a}return Ut(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!=0&&(i=Math.round(i/this.__step)*this.__step),an(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Xs(n),this}}]),e}(Ln);function wc(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var nr=function(r){sn(e,r);function e(t,n,i){It(this,e);var a=on(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));a.__truncationSuspended=!1;var s=a,o=void 0;function l(){var _=parseFloat(s.__input.value);W.isNaN(_)||s.setValue(_)}function c(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}function u(){c()}function d(_){var g=o-_.clientY;s.setValue(s.getValue()+g*s.__impliedStep),o=_.clientY}function h(){N.unbind(window,"mousemove",d),N.unbind(window,"mouseup",h),c()}function p(_){N.bind(window,"mousemove",d),N.bind(window,"mouseup",h),o=_.clientY}return a.__input=document.createElement("input"),a.__input.setAttribute("type","text"),N.bind(a.__input,"change",l),N.bind(a.__input,"blur",u),N.bind(a.__input,"mousedown",p),N.bind(a.__input,"keydown",function(_){_.keyCode===13&&(s.__truncationSuspended=!0,this.blur(),s.__truncationSuspended=!1,c())}),a.updateDisplay(),a.domElement.appendChild(a.__input),a}return Ut(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():wc(this.getValue(),this.__precision),an(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Ys);function js(r,e,t,n,i){return n+(i-n)*((r-e)/(t-e))}var Jr=function(r){sn(e,r);function e(t,n,i,a,s){It(this,e);var o=on(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:a,step:s})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),N.bind(o.__background,"mousedown",c),N.bind(o.__background,"touchstart",h),N.addClass(o.__background,"slider"),N.addClass(o.__foreground,"slider-fg");function c(g){document.activeElement.blur(),N.bind(window,"mousemove",u),N.bind(window,"mouseup",d),u(g)}function u(g){g.preventDefault();var x=l.__background.getBoundingClientRect();return l.setValue(js(g.clientX,x.left,x.right,l.__min,l.__max)),!1}function d(){N.unbind(window,"mousemove",u),N.unbind(window,"mouseup",d),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function h(g){g.touches.length===1&&(N.bind(window,"touchmove",p),N.bind(window,"touchend",_),p(g))}function p(g){var x=g.touches[0].clientX,f=l.__background.getBoundingClientRect();l.setValue(js(x,f.left,f.right,l.__min,l.__max))}function _(){N.unbind(window,"touchmove",p),N.unbind(window,"touchend",_),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return Ut(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",an(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Ys),Qs=function(r){sn(e,r);function e(t,n,i){It(this,e);var a=on(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=a;return a.__button=document.createElement("div"),a.__button.innerHTML=i===void 0?"Fire":i,N.bind(a.__button,"click",function(o){return o.preventDefault(),s.fire(),!1}),N.addClass(a.__button,"button"),a.domElement.appendChild(a.__button),a}return Ut(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Ln),Kr=function(r){sn(e,r);function e(t,n){It(this,e);var i=on(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new Je(i.getValue()),i.__temp=new Je(0);var a=i;i.domElement=document.createElement("div"),N.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",N.bind(i.__input,"keydown",function(g){g.keyCode===13&&d.call(this)}),N.bind(i.__input,"blur",d),N.bind(i.__selector,"mousedown",function(){N.addClass(this,"drag").bind(window,"mouseup",function(){N.removeClass(a.__selector,"drag")})}),N.bind(i.__selector,"touchstart",function(){N.addClass(this,"drag").bind(window,"touchend",function(){N.removeClass(a.__selector,"drag")})});var s=document.createElement("div");W.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),W.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),W.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),W.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),W.extend(s.style,{width:"100%",height:"100%",background:"none"}),qs(s,"top","rgba(0,0,0,0)","#000"),W.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),Mc(i.__hue_field),W.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),N.bind(i.__saturation_field,"mousedown",o),N.bind(i.__saturation_field,"touchstart",o),N.bind(i.__field_knob,"mousedown",o),N.bind(i.__field_knob,"touchstart",o),N.bind(i.__hue_field,"mousedown",l),N.bind(i.__hue_field,"touchstart",l);function o(g){p(g),N.bind(window,"mousemove",p),N.bind(window,"touchmove",p),N.bind(window,"mouseup",c),N.bind(window,"touchend",c)}function l(g){_(g),N.bind(window,"mousemove",_),N.bind(window,"touchmove",_),N.bind(window,"mouseup",u),N.bind(window,"touchend",u)}function c(){N.unbind(window,"mousemove",p),N.unbind(window,"touchmove",p),N.unbind(window,"mouseup",c),N.unbind(window,"touchend",c),h()}function u(){N.unbind(window,"mousemove",_),N.unbind(window,"touchmove",_),N.unbind(window,"mouseup",u),N.unbind(window,"touchend",u),h()}function d(){var g=qr(this.value);g!==!1?(a.__color.__state=g,a.setValue(a.__color.toOriginal())):this.value=a.__color.toString()}function h(){a.__onFinishChange&&a.__onFinishChange.call(a,a.__color.toOriginal())}i.__saturation_field.appendChild(s),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function p(g){g.type.indexOf("touch")===-1&&g.preventDefault();var x=a.__saturation_field.getBoundingClientRect(),f=g.touches&&g.touches[0]||g,m=f.clientX,M=f.clientY,T=(m-x.left)/(x.right-x.left),A=1-(M-x.top)/(x.bottom-x.top);return A>1?A=1:A<0&&(A=0),T>1?T=1:T<0&&(T=0),a.__color.v=A,a.__color.s=T,a.setValue(a.__color.toOriginal()),!1}function _(g){g.type.indexOf("touch")===-1&&g.preventDefault();var x=a.__hue_field.getBoundingClientRect(),f=g.touches&&g.touches[0]||g,m=f.clientY,M=1-(m-x.top)/(x.bottom-x.top);return M>1?M=1:M<0&&(M=0),a.__color.h=M*360,a.setValue(a.__color.toOriginal()),!1}return i}return Ut(e,[{key:"updateDisplay",value:function(){var n=qr(this.getValue());if(n!==!1){var i=!1;W.each(Je.COMPONENTS,function(o){if(!W.isUndefined(n[o])&&!W.isUndefined(this.__color.__state[o])&&n[o]!==this.__color.__state[o])return i=!0,{}},this),i&&W.extend(this.__color.__state,n)}W.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var a=this.__color.v<.5||this.__color.s>.5?255:0,s=255-a;W.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+a+","+a+","+a+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,qs(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),W.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+a+","+a+","+a+")",textShadow:this.__input_textShadow+"rgba("+s+","+s+","+s+",.7)"})}}]),e}(Ln),Sc=["-moz-","-o-","-webkit-","-ms-",""];function qs(r,e,t,n){r.style.background="",W.each(Sc,function(i){r.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function Mc(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var Ac={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var a=n.getElementsByTagName("head")[0];try{a.appendChild(i)}catch(s){}}},Ec=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,Tc=function(e,t){var n=e[t];return W.isArray(arguments[2])||W.isObject(arguments[2])?new yc(e,t,arguments[2]):W.isNumber(n)?W.isNumber(arguments[2])&&W.isNumber(arguments[3])?W.isNumber(arguments[4])?new Jr(e,t,arguments[2],arguments[3],arguments[4]):new Jr(e,t,arguments[2],arguments[3]):W.isNumber(arguments[4])?new nr(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new nr(e,t,{min:arguments[2],max:arguments[3]}):W.isString(n)?new bc(e,t):W.isFunction(n)?new Qs(e,t,""):W.isBoolean(n)?new Ws(e,t):null};function Lc(r){setTimeout(r,1e3/60)}var Pc=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||Lc,Fc=function(){function r(){It(this,r),this.backgroundElement=document.createElement("div"),W.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),N.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),W.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;N.bind(this.backgroundElement,"click",function(){e.hide()})}return Ut(r,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),W.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",N.unbind(t.domElement,"webkitTransitionEnd",i),N.unbind(t.domElement,"transitionend",i),N.unbind(t.domElement,"oTransitionEnd",i)};N.bind(this.domElement,"webkitTransitionEnd",n),N.bind(this.domElement,"transitionend",n),N.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-N.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-N.getHeight(this.domElement)/2+"px"}}]),r}(),Cc=mc(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);Ac.inject(Cc);var Zs="dg",$s=72,Js=20,Ti="Default",Li=function(){try{return!!window.localStorage}catch(r){return!1}}(),Pi=void 0,Ks=!0,kn=void 0,ea=!1,eo=[],He=function r(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),N.addClass(this.domElement,Zs),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=W.defaults(n,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),n=W.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),W.isUndefined(n.load)?n.load={preset:Ti}:n.preset&&(n.load.preset=n.preset),W.isUndefined(n.parent)&&n.hideable&&eo.push(this),n.resizable=W.isUndefined(n.parent)&&n.resizable,n.autoPlace&&W.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=Li&&localStorage.getItem(Vn(this,"isLocal"))==="true",a=void 0,s=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(h){t.parent?t.getRoot().preset=h:n.load.preset=h,Dc(this),t.revert()}},width:{get:function(){return n.width},set:function(h){n.width=h,na(t,h)}},name:{get:function(){return n.name},set:function(h){n.name=h,s&&(s.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(h){n.closed=h,n.closed?N.addClass(t.__ul,r.CLASS_CLOSED):N.removeClass(t.__ul,r.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=h?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(h){Li&&(i=h,h?N.bind(window,"unload",a):N.unbind(window,"unload",a),localStorage.setItem(Vn(t,"isLocal"),h))}}}),W.isUndefined(n.parent)){if(this.closed=n.closed||!1,N.addClass(this.domElement,r.CLASS_MAIN),N.makeSelectable(this.domElement,!1),Li&&i){t.useLocalStorage=!0;var o=localStorage.getItem(Vn(this,"gui"));o&&(n.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,N.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),n.closeOnTop?(N.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(N.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),N.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);N.addClass(l,"controller-name"),s=ta(t,l);var c=function(h){return h.preventDefault(),t.closed=!t.closed,!1};N.addClass(this.__ul,r.CLASS_CLOSED),N.addClass(s,"title"),N.bind(s,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(W.isUndefined(n.parent)&&(Ks&&(kn=document.createElement("div"),N.addClass(kn,Zs),N.addClass(kn,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(kn),Ks=!1),kn.appendChild(this.domElement),N.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||na(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},N.bind(window,"resize",this.__resizeHandler),N.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),N.bind(this.__ul,"transitionend",this.__resizeHandler),N.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&Rc(this),a=function(){Li&&localStorage.getItem(Vn(t,"isLocal"))==="true"&&localStorage.setItem(Vn(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=a;function u(){var d=t.getRoot();d.width+=1,W.defer(function(){d.width-=1})}n.parent||u()};He.toggleHide=function(){ea=!ea,W.each(eo,function(r){r.domElement.style.display=ea?"none":""})};He.CLASS_AUTO_PLACE="a";He.CLASS_AUTO_PLACE_CONTAINER="ac";He.CLASS_MAIN="main";He.CLASS_CONTROLLER_ROW="cr";He.CLASS_TOO_TALL="taller-than-window";He.CLASS_CLOSED="closed";He.CLASS_CLOSE_BUTTON="close-button";He.CLASS_CLOSE_TOP="close-top";He.CLASS_CLOSE_BOTTOM="close-bottom";He.CLASS_DRAG="drag";He.DEFAULT_WIDTH=245;He.TEXT_CLOSED="Close Controls";He.TEXT_OPEN="Open Controls";He._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===$s||r.keyCode===$s)&&He.toggleHide()};N.bind(window,"keydown",He._keydownHandler,!1);W.extend(He.prototype,{add:function(e,t){return Fi(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Fi(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;W.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&kn.removeChild(this.domElement);var e=this;W.each(this.__folders,function(t){e.removeFolder(t)}),N.unbind(window,"keydown",He._keydownHandler,!1),to(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new He(t);this.__folders[e]=n;var i=ta(this,n.domElement);return N.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],to(e);var t=this;W.each(e.__folders,function(n){e.removeFolder(n)}),W.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=N.getOffset(e.__ul).top,n=0;W.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=N.getHeight(i))}),window.innerHeight-t-Js<n?(N.addClass(e.domElement,He.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-Js+"px"):(N.removeClass(e.domElement,He.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&W.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:W.debounce(function(){this.onResize()},50),remember:function(){if(W.isUndefined(Pi)&&(Pi=new Fc,Pi.domElement.innerHTML=Ec),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;W.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&Nc(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&na(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=ir(this)),e.folders={},W.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=ir(this),ia(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Ti]=ir(this,!0)),this.load.remembered[e]=ir(this),this.preset=e,ra(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){W.each(this.__controllers,function(t){this.getRoot().load.remembered?no(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),W.each(this.__folders,function(t){t.revert(t)}),e||ia(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&io(this.__listening)},updateDisplay:function(){W.each(this.__controllers,function(e){e.updateDisplay()}),W.each(this.__folders,function(e){e.updateDisplay()})}});function ta(r,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?r.__ul.insertBefore(n,t):r.__ul.appendChild(n),r.onResize(),n}function to(r){N.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&N.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function ia(r,e){var t=r.__preset_select[r.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function Ic(r,e,t){if(t.__li=e,t.__gui=r,W.extend(t,{options:function(s){if(arguments.length>1){var o=t.__li.nextElementSibling;return t.remove(),Fi(r,t.object,t.property,{before:o,factoryArgs:[W.toArray(arguments)]})}if(W.isArray(s)||W.isObject(s)){var l=t.__li.nextElementSibling;return t.remove(),Fi(r,t.object,t.property,{before:l,factoryArgs:[s]})}},name:function(s){return t.__li.firstElementChild.firstElementChild.innerHTML=s,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Jr){var n=new nr(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});W.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(a){var s=t[a],o=n[a];t[a]=n[a]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(n,l),s.apply(t,l)}}),N.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof nr){var i=function(s){if(W.isNumber(t.__min)&&W.isNumber(t.__max)){var o=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=Fi(r,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(o),l&&c.listen(),c}return s};t.min=W.compose(i,t.min),t.max=W.compose(i,t.max)}else t instanceof Ws?(N.bind(e,"click",function(){N.fakeEvent(t.__checkbox,"click")}),N.bind(t.__checkbox,"click",function(a){a.stopPropagation()})):t instanceof Qs?(N.bind(e,"click",function(){N.fakeEvent(t.__button,"click")}),N.bind(e,"mouseover",function(){N.addClass(t.__button,"hover")}),N.bind(e,"mouseout",function(){N.removeClass(t.__button,"hover")})):t instanceof Kr&&(N.addClass(e,"color"),t.updateDisplay=W.compose(function(a){return e.style.borderLeftColor=t.__color.toString(),a},t.updateDisplay),t.updateDisplay());t.setValue=W.compose(function(a){return r.getRoot().__preset_select&&t.isModified()&&ia(r.getRoot(),!0),a},t.setValue)}function no(r,e){var t=r.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var a=t.load.remembered,s=void 0;if(a[r.preset])s=a[r.preset];else if(a[Ti])s=a[Ti];else return;if(s[n]&&s[n][e.property]!==void 0){var o=s[n][e.property];e.initialValue=o,e.setValue(o)}}}}function Fi(r,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new Kr(e,t);else{var a=[e,t].concat(n.factoryArgs);i=Tc.apply(r,a)}n.before instanceof Ln&&(n.before=n.before.__li),no(r,i),N.addClass(i.domElement,"c");var s=document.createElement("span");N.addClass(s,"property-name"),s.innerHTML=i.property;var o=document.createElement("div");o.appendChild(s),o.appendChild(i.domElement);var l=ta(r,o,n.before);return N.addClass(l,He.CLASS_CONTROLLER_ROW),i instanceof Kr?N.addClass(l,"color"):N.addClass(l,_c(i.getValue())),Ic(r,l,i),r.__controllers.push(i),i}function Vn(r,e){return document.location.href+"."+e}function ra(r,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,r.__preset_select.appendChild(n),t&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function ro(r,e){e.style.display=r.useLocalStorage?"block":"none"}function Nc(r){var e=r.__save_row=document.createElement("li");N.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),N.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",N.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",N.addClass(n,"button"),N.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",N.addClass(i,"button"),N.addClass(i,"save-as");var a=document.createElement("span");a.innerHTML="Revert",N.addClass(a,"button"),N.addClass(a,"revert");var s=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?W.each(r.load.remembered,function(d,h){ra(r,h,h===r.preset)}):ra(r,Ti,!1),N.bind(s,"change",function(){for(var d=0;d<r.__preset_select.length;d++)r.__preset_select[d].innerHTML=r.__preset_select[d].value;r.preset=this.value}),e.appendChild(s),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(a),Li){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Vn(r,"isLocal"))==="true"&&l.setAttribute("checked","checked"),ro(r,o),N.bind(l,"change",function(){r.useLocalStorage=!r.useLocalStorage,ro(r,o)})}var u=document.getElementById("dg-new-constructor");N.bind(u,"keydown",function(d){d.metaKey&&(d.which===67||d.keyCode===67)&&Pi.hide()}),N.bind(t,"click",function(){u.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),Pi.show(),u.focus(),u.select()}),N.bind(n,"click",function(){r.save()}),N.bind(i,"click",function(){var d=prompt("Enter a new preset name.");d&&r.saveAs(d)}),N.bind(a,"click",function(){r.revert()})}function Rc(r){var e=void 0;r.__resize_handle=document.createElement("div"),W.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(a){return a.preventDefault(),r.width+=e-a.clientX,r.onResize(),e=a.clientX,!1}function n(){N.removeClass(r.__closeButton,He.CLASS_DRAG),N.unbind(window,"mousemove",t),N.unbind(window,"mouseup",n)}function i(a){return a.preventDefault(),e=a.clientX,N.addClass(r.__closeButton,He.CLASS_DRAG),N.bind(window,"mousemove",t),N.bind(window,"mouseup",n),!1}N.bind(r.__resize_handle,"mousedown",i),N.bind(r.__closeButton,"mousedown",i),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function na(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function ir(r,e){var t={};return W.each(r.__rememberedObjects,function(n,i){var a={},s=r.__rememberedObjectIndecesToControllers[i];W.each(s,function(o,l){a[l]=e?o.initialValue:o.getValue()}),t[i]=a}),t}function Dc(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function io(r){r.length!==0&&Pc.call(window,function(){io(r)}),W.each(r,function(e){e.updateDisplay()})}var ao=He;var so="129",Pn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uc=0,oo=1,zc=2,lo=1,Oc=2,Ci=3,rr=0,Ke=1,Cn=2,co=1,Ri=0,Rn=1,Zt=2,uo=3,ho=4,Bc=5,Wn=100,Hc=101,Gc=102,fo=103,po=104,kc=200,Vc=201,Wc=202,Xc=203,mo=204,go=205,Yc=206,jc=207,Qc=208,qc=209,Zc=210,$c=0,Jc=1,Kc=2,aa=3,ed=4,td=5,nd=6,id=7,sa=0,rd=1,ad=2,ln=0,sd=1,Di=2,od=3,ld=4,cd=5,_o=300,oa=301,la=302,xo=303,vo=304,ca=306,da=307,ua=1e3,bt=1001,ha=1002,ht=1003,yo=1004,bo=1005,qe=1006,dd=1007,ar=1008,fa=1009,ud=1010,hd=1011,pa=1012,fd=1013,sr=1014,Dn=1015,or=1016,pd=1017,md=1018,gd=1019,lr=1020,_d=1021,Xn=1022,nt=1023,xd=1024,vd=1025,ma=1026,ga=1027,yd=1028,bd=1029,wd=1030,Md=1031,Sd=1032,Ad=1033,wo=33776,Mo=33777,So=33778,Ao=33779,Eo=35840,To=35841,Lo=35842,Po=35843,Ed=36196,Fo=37492,Co=37496,Td=37808,Ld=37809,Pd=37810,Fd=37811,Cd=37812,Rd=37813,Dd=37814,Nd=37815,Id=37816,Ud=37817,zd=37818,Od=37819,Bd=37820,Hd=37821,Gd=36492,kd=37840,Vd=37841,Wd=37842,Xd=37843,Yd=37844,jd=37845,Qd=37846,qd=37847,Zd=37848,$d=37849,Jd=37850,Kd=37851,eu=37852,tu=37853,nu=0,Ni=3e3,Ro=3001,iu=3007,ru=3002,au=3003,su=3004,ou=3005,lu=3006,cu=3200,du=3201,Do=0,uu=1,_a=7680,hu=519,xa=35044,zt=35048,No="300 es",$t=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let a=0,s=i.length;a<s;a++)i[a].call(this,e);e.target=null}}},it=[];for(let r=0;r<256;r++)it[r]=(r<16?"0":"")+r.toString(16);var va=Math.PI/180,Io=180/Math.PI;function Ii(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(it[r&255]+it[r>>8&255]+it[r>>16&255]+it[r>>24&255]+"-"+it[e&255]+it[e>>8&255]+"-"+it[e>>16&15|64]+it[e>>24&255]+"-"+it[t&63|128]+it[t>>8&255]+"-"+it[t>>16&255]+it[t>>24&255]+it[n&255]+it[n>>8&255]+it[n>>16&255]+it[n>>24&255]).toUpperCase()}function Ot(r,e,t){return Math.max(e,Math.min(t,r))}function fu(r,e){return(r%e+e)%e}function ya(r,e,t){return(1-t)*r+t*e}function Uo(r){return(r&r-1)==0&&r!==0}function pu(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}var le=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*i+e.x,this.y=a*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}};le.prototype.isVector2=!0;var et=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,a,s,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,a=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],_=n[8],g=i[0],x=i[3],f=i[6],m=i[1],M=i[4],T=i[7],A=i[2],v=i[5],C=i[8];return a[0]=s*g+o*m+l*A,a[3]=s*x+o*M+l*v,a[6]=s*f+o*T+l*C,a[1]=c*g+u*m+d*A,a[4]=c*x+u*M+d*v,a[7]=c*f+u*T+d*C,a[2]=h*g+p*m+_*A,a[5]=h*x+p*M+_*v,a[8]=h*f+p*T+_*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*a*u+n*o*l+i*a*c-i*s*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*s-o*c,h=o*l-u*a,p=c*a-s*l,_=t*d+n*h+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return e[0]=d*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*s)*g,e[3]=h*g,e[4]=(u*t-i*l)*g,e[5]=(i*a-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*a)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,s,o){let l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),i=this.elements,a=i[0],s=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*a+n*l,i[3]=t*s+n*c,i[6]=t*o+n*u,i[1]=-n*a+t*l,i[4]=-n*s+t*c,i[7]=-n*o+t*u,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};et.prototype.isMatrix3=!0;var Yn,Nn=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yn===void 0&&(Yn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Yn.width=e.width,Yn.height=e.height;let n=Yn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}},mu=0,wt=class extends $t{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=bt,i=bt,a=qe,s=ar,o=nt,l=fa,c=1,u=Ni){super();Object.defineProperty(this,"id",{value:mu++}),this.uuid=Ii(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let i=this.image;if(i.uuid===void 0&&(i.uuid=Ii()),!t&&e.images[i.uuid]===void 0){let a;if(Array.isArray(i)){a=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?a.push(ba(i[s].image)):a.push(ba(i[s]))}else a=ba(i);e.images[i.uuid]={uuid:i.uuid,url:a}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_o)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ua:e.x=e.x-Math.floor(e.x);break;case bt:e.x=e.x<0?0:1;break;case ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ua:e.y=e.y-Math.floor(e.y);break;case bt:e.y=e.y<0?0:1;break;case ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};wt.DEFAULT_IMAGE=void 0;wt.DEFAULT_MAPPING=_o;wt.prototype.isTexture=!0;function ba(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Nn.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var De=class{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a,s=.01,o=.1,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],_=l[9],g=l[2],x=l[6],f=l[10];if(Math.abs(u-h)<s&&Math.abs(d-g)<s&&Math.abs(_-x)<s){if(Math.abs(u+h)<o&&Math.abs(d+g)<o&&Math.abs(_+x)<o&&Math.abs(c+p+f-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,T=(p+1)/2,A=(f+1)/2,v=(u+h)/4,C=(d+g)/4,U=(_+x)/4;return M>T&&M>A?M<s?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(M),i=v/n,a=C/n):T>A?T<s?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(T),n=v/i,a=U/i):A<s?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(A),n=C/a,i=U/a),this.set(n,i,a,t),this}let m=Math.sqrt((x-_)*(x-_)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(m)<.001&&(m=1),this.x=(x-_)/m,this.y=(d-g)/m,this.z=(h-u)/m,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}};De.prototype.isVector4=!0;var rt=class extends $t{constructor(e,t,n){super();this.width=e,this.height=t,this.depth=1,this.scissor=new De(0,0,e,t),this.scissorTest=!1,this.viewport=new De(0,0,e,t),n=n||{},this.texture=new wt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:qe,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};rt.prototype.isWebGLRenderTarget=!0;var Mt=class{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,a,s,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=a[s+0],p=a[s+1],_=a[s+2],g=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==h||c!==p||u!==_){let x=1-o,f=l*h+c*p+u*_+d*g,m=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){let A=Math.sqrt(M),v=Math.atan2(A,f*m);x=Math.sin(x*v)/A,o=Math.sin(o*v)/A}let T=o*m;if(l=l*x+h*T,c=c*x+p*T,u=u*x+_*T,d=d*x+g*T,x===1-o){let A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,a,s){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=a[s],h=a[s+1],p=a[s+2],_=a[s+3];return e[t]=o*_+u*d+l*p-c*h,e[t+1]=l*_+u*h+c*d-o*p,e[t+2]=c*_+u*p+o*h-l*d,e[t+3]=u*_-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=e._x,i=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(a/2),h=l(n/2),p=l(i/2),_=l(a/2);switch(s){case"XYZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"YXZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"ZXY":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"ZYX":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"YZX":this._x=h*u*d+c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d-h*p*_;break;case"XZY":this._x=h*u*d-c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(s-i)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(a-c)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(s-i)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+i*c-a*l,this._y=i*u+s*l+a*o-n*c,this._z=a*u+s*c+n*l-i*o,this._w=s*u-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,a=this._z,s=this._w,o=s*e._w+n*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*s+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*a+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};Mt.prototype.isQuaternion=!0;var w=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(zo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zo.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*i-o*n,u=l*n+o*t-a*i,d=l*i+a*n-s*t,h=-a*t-s*n-o*i;return this.x=c*l+h*-a+u*-o-d*-s,this.y=u*l+h*-s+d*-a-c*-o,this.z=d*l+h*-o+c*-s-u*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-a*o,this.y=a*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wa.copy(this).projectOnVector(e),this.sub(wa)}reflect(e){return this.sub(wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}};w.prototype.isVector3=!0;var wa=new w,zo=new Mt,St=class{constructor(e=new w(Infinity,Infinity,Infinity),t=new w(-Infinity,-Infinity,-Infinity)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=Infinity,n=Infinity,i=Infinity,a=-Infinity,s=-Infinity,o=-Infinity;for(let l=0,c=e.length;l<c;l+=3){let u=e[l],d=e[l+1],h=e[l+2];u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>a&&(a=u),d>s&&(s=d),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(a,s,o),this}setFromBufferAttribute(e){let t=Infinity,n=Infinity,i=Infinity,a=-Infinity,s=-Infinity,o=-Infinity;for(let l=0,c=e.count;l<c;l++){let u=e.getX(l),d=e.getY(l),h=e.getZ(l);u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>a&&(a=u),d>s&&(s=d),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(a,s,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new w),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new w),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Ma.copy(t.boundingBox),Ma.applyMatrix4(e.matrixWorld),this.union(Ma));let n=e.children;for(let i=0,a=n.length;i<a;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new w),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),cr.subVectors(this.max,zi),jn.subVectors(e.a,zi),Qn.subVectors(e.b,zi),qn.subVectors(e.c,zi),cn.subVectors(Qn,jn),dn.subVectors(qn,Qn),In.subVectors(jn,qn);let t=[0,-cn.z,cn.y,0,-dn.z,dn.y,0,-In.z,In.y,cn.z,0,-cn.x,dn.z,0,-dn.x,In.z,0,-In.x,-cn.y,cn.x,0,-dn.y,dn.x,0,-In.y,In.x,0];return!Sa(t,jn,Qn,qn,cr)||(t=[1,0,0,0,1,0,0,0,1],!Sa(t,jn,Qn,qn,cr))?!1:(dr.crossVectors(cn,dn),t=[dr.x,dr.y,dr.z],Sa(t,jn,Qn,qn,cr))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new w),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ui.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};St.prototype.isBox3=!0;var Jt=[new w,new w,new w,new w,new w,new w,new w,new w],Ui=new w,Ma=new St,jn=new w,Qn=new w,qn=new w,cn=new w,dn=new w,In=new w,zi=new w,cr=new w,dr=new w,Un=new w;function Sa(r,e,t,n,i){for(let a=0,s=r.length-3;a<=s;a+=3){Un.fromArray(r,a);let o=i.x*Math.abs(Un.x)+i.y*Math.abs(Un.y)+i.z*Math.abs(Un.z),l=e.dot(Un),c=t.dot(Un),u=n.dot(Un);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var gu=new St,Oo=new w,Aa=new w,Ea=new w,Zn=class{constructor(e=new w,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):gu.setFromPoints(e).getCenter(n);let i=0;for(let a=0,s=e.length;a<s;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new w),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new St),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ea.subVectors(e,this.center);let t=Ea.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Ea.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return Aa.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Oo.copy(e.center).add(Aa)),this.expandByPoint(Oo.copy(e.center).sub(Aa)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Kt=new w,Ta=new w,ur=new w,un=new w,La=new w,hr=new w,Pa=new w,zn=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new w),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kt)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new w),t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kt.copy(this.direction).multiplyScalar(t).add(this.origin),Kt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ta.copy(e).add(t).multiplyScalar(.5),ur.copy(t).sub(e).normalize(),un.copy(this.origin).sub(Ta);let a=e.distanceTo(t)*.5,s=-this.direction.dot(ur),o=un.dot(this.direction),l=-un.dot(ur),c=un.lengthSq(),u=Math.abs(1-s*s),d,h,p,_;if(u>0)if(d=s*l-o,h=s*o-l,_=a*u,d>=0)if(h>=-_)if(h<=_){let g=1/u;d*=g,h*=g,p=d*(d+s*h+2*o)+h*(s*d+h+2*l)+c}else h=a,d=Math.max(0,-(s*h+o)),p=-d*d+h*(h+2*l)+c;else h=-a,d=Math.max(0,-(s*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-s*a+o)),h=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+c):(d=Math.max(0,-(s*a+o)),h=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c);else h=s>0?-a:a,d=Math.max(0,-(s*h+o)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(ur).multiplyScalar(h).add(Ta),p}intersectSphere(e,t){Kt.subVectors(e.center,this.origin);let n=Kt.dot(this.direction),i=Kt.dot(Kt)-n*n,a=e.radius*e.radius;if(i>a)return null;let s=Math.sqrt(a-i),o=n-s,l=n+s;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,s,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(a=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),n>s||a>i||((a>n||n!==n)&&(n=a),(s<i||i!==i)&&(i=s),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Kt)!==null}intersectTriangle(e,t,n,i,a){La.subVectors(t,e),hr.subVectors(n,e),Pa.crossVectors(La,hr);let s=this.direction.dot(Pa),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;un.subVectors(this.origin,e);let l=o*this.direction.dot(hr.crossVectors(un,hr));if(l<0)return null;let c=o*this.direction.dot(La.cross(un));if(c<0||l+c>s)return null;let u=-o*un.dot(Pa);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,a,s,o,l,c,u,d,h,p,_,g,x){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=a,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=g,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/$n.setFromMatrixColumn(e,0).length(),a=1/$n.setFromMatrixColumn(e,1).length(),s=1/$n.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,n=e.x,i=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){let h=s*u,p=s*d,_=o*u,g=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=_+p*c,t[10]=s*l}else if(e.order==="YXZ"){let h=l*u,p=l*d,_=c*u,g=c*d;t[0]=h+g*o,t[4]=_*o-p,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-o,t[2]=p*o-_,t[6]=g+h*o,t[10]=s*l}else if(e.order==="ZXY"){let h=l*u,p=l*d,_=c*u,g=c*d;t[0]=h-g*o,t[4]=-s*d,t[8]=_+p*o,t[1]=p+_*o,t[5]=s*u,t[9]=g-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){let h=s*u,p=s*d,_=o*u,g=o*d;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+g,t[1]=l*d,t[5]=g*c+h,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){let h=s*l,p=s*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-h*d,t[8]=_*d+p,t[1]=d,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+_,t[10]=h-g*d}else if(e.order==="XZY"){let h=s*l,p=s*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+g,t[5]=s*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=o*u,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_u,e,xu)}lookAt(e,t,n){let i=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),hn.crossVectors(n,At),hn.lengthSq()===0&&(Math.abs(n.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),hn.crossVectors(n,At)),hn.normalize(),fr.crossVectors(At,hn),i[0]=hn.x,i[4]=fr.x,i[8]=At.x,i[1]=hn.y,i[5]=fr.y,i[9]=At.y,i[2]=hn.z,i[6]=fr.z,i[10]=At.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,a=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],_=n[2],g=n[6],x=n[10],f=n[14],m=n[3],M=n[7],T=n[11],A=n[15],v=i[0],C=i[4],U=i[8],B=i[12],G=i[1],Q=i[5],H=i[9],P=i[13],R=i[2],D=i[6],F=i[10],X=i[14],K=i[3],$=i[7],se=i[11],ae=i[15];return a[0]=s*v+o*G+l*R+c*K,a[4]=s*C+o*Q+l*D+c*$,a[8]=s*U+o*H+l*F+c*se,a[12]=s*B+o*P+l*X+c*ae,a[1]=u*v+d*G+h*R+p*K,a[5]=u*C+d*Q+h*D+p*$,a[9]=u*U+d*H+h*F+p*se,a[13]=u*B+d*P+h*X+p*ae,a[2]=_*v+g*G+x*R+f*K,a[6]=_*C+g*Q+x*D+f*$,a[10]=_*U+g*H+x*F+f*se,a[14]=_*B+g*P+x*X+f*ae,a[3]=m*v+M*G+T*R+A*K,a[7]=m*C+M*Q+T*D+A*$,a[11]=m*U+M*H+T*F+A*se,a[15]=m*B+M*P+T*X+A*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],_=e[3],g=e[7],x=e[11],f=e[15];return _*(+a*l*d-i*c*d-a*o*h+n*c*h+i*o*p-n*l*p)+g*(+t*l*p-t*c*h+a*s*h-i*s*p+i*c*u-a*l*u)+x*(+t*c*d-t*o*p-a*s*d+n*s*p+a*o*u-n*c*u)+f*(-i*o*u-t*l*d+t*o*h+i*s*d-n*s*h+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],_=e[12],g=e[13],x=e[14],f=e[15],m=d*x*c-g*h*c+g*l*p-o*x*p-d*l*f+o*h*f,M=_*h*c-u*x*c-_*l*p+s*x*p+u*l*f-s*h*f,T=u*g*c-_*d*c+_*o*p-s*g*p-u*o*f+s*d*f,A=_*d*l-u*g*l-_*o*h+s*g*h+u*o*x-s*d*x,v=t*m+n*M+i*T+a*A;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/v;return e[0]=m*C,e[1]=(g*h*a-d*x*a-g*i*p+n*x*p+d*i*f-n*h*f)*C,e[2]=(o*x*a-g*l*a+g*i*c-n*x*c-o*i*f+n*l*f)*C,e[3]=(d*l*a-o*h*a-d*i*c+n*h*c+o*i*p-n*l*p)*C,e[4]=M*C,e[5]=(u*x*a-_*h*a+_*i*p-t*x*p-u*i*f+t*h*f)*C,e[6]=(_*l*a-s*x*a-_*i*c+t*x*c+s*i*f-t*l*f)*C,e[7]=(s*h*a-u*l*a+u*i*c-t*h*c-s*i*p+t*l*p)*C,e[8]=T*C,e[9]=(_*d*a-u*g*a-_*n*p+t*g*p+u*n*f-t*d*f)*C,e[10]=(s*g*a-_*o*a+_*n*c-t*g*c-s*n*f+t*o*f)*C,e[11]=(u*o*a-s*d*a-u*n*c+t*d*c+s*n*p-t*o*p)*C,e[12]=A*C,e[13]=(u*g*i-_*d*i+_*n*h-t*g*h-u*n*x+t*d*x)*C,e[14]=(_*o*i-s*g*i-_*n*l+t*g*l+s*n*x-t*o*x)*C,e[15]=(s*d*i-u*o*i+u*n*l-t*d*l-s*n*h+t*o*h)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),a=1-n,s=e.x,o=e.y,l=e.z,c=a*s,u=a*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*s,0,c*l-i*o,u*l+i*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,s){return this.set(1,n,a,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,u=s+s,d=o+o,h=a*c,p=a*u,_=a*d,g=s*u,x=s*d,f=o*d,m=l*c,M=l*u,T=l*d,A=n.x,v=n.y,C=n.z;return i[0]=(1-(g+f))*A,i[1]=(p+T)*A,i[2]=(_-M)*A,i[3]=0,i[4]=(p-T)*v,i[5]=(1-(h+f))*v,i[6]=(x+m)*v,i[7]=0,i[8]=(_+M)*C,i[9]=(x-m)*C,i[10]=(1-(h+g))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,a=$n.set(i[0],i[1],i[2]).length(),s=$n.set(i[4],i[5],i[6]).length(),o=$n.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],Bt.copy(this);let c=1/a,u=1/s,d=1/o;return Bt.elements[0]*=c,Bt.elements[1]*=c,Bt.elements[2]*=c,Bt.elements[4]*=u,Bt.elements[5]*=u,Bt.elements[6]*=u,Bt.elements[8]*=d,Bt.elements[9]*=d,Bt.elements[10]*=d,t.setFromRotationMatrix(Bt),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,i,a,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let o=this.elements,l=2*a/(t-e),c=2*a/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),h=-(s+a)/(s-a),p=-2*s*a/(s-a);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,a,s){let o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-a),d=(t+e)*l,h=(n+i)*c,p=(s+a)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ve.prototype.isMatrix4=!0;var $n=new w,Bt=new ve,_u=new w(0,0,0),xu=new w(1,1,1),hn=new w,fr=new w,At=new w,Bo=new ve,Ho=new Mt,Et=class{constructor(e=0,t=0,n=0,i=Et.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._order=i||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,n){let i=e.elements,a=i[0],s=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],p=i[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ot(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bo,t,n)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return Ho.setFromEuler(this),this.setFromQuaternion(Ho,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new w(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};Et.prototype.isEuler=!0;Et.DefaultOrder="XYZ";Et.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Fa=class{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}},vu=0,Go=new w,Jn=new Mt,en=new ve,pr=new w,Oi=new w,yu=new w,bu=new Mt,ko=new w(1,0,0),Vo=new w(0,1,0),Wo=new w(0,0,1),wu={type:"added"},Xo={type:"removed"},Ye=class extends $t{constructor(){super();Object.defineProperty(this,"id",{value:vu++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DefaultUp.clone();let e=new w,t=new Et,n=new Mt,i=new w(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ve},normalMatrix:{value:new et}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Ye.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.premultiply(Jn),this}rotateX(e){return this.rotateOnAxis(ko,e)}rotateY(e){return this.rotateOnAxis(Vo,e)}rotateZ(e){return this.rotateOnAxis(Wo,e)}translateOnAxis(e,t){return Go.copy(e).applyQuaternion(this.quaternion),this.position.add(Go.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ko,e)}translateY(e){return this.translateOnAxis(Vo,e)}translateZ(e){return this.translateOnAxis(Wo,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pr.copy(e):pr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Oi,pr,this.up):en.lookAt(pr,Oi,this.up),this.quaternion.setFromRotationMatrix(en),i&&(en.extractRotation(i.matrixWorld),Jn.setFromRotationMatrix(en),this.quaternion.premultiply(Jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xo)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Xo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),en.multiply(e.parent.matrixWorld)),e.applyMatrix4(en),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new w),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new Mt),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,e,yu),e}getWorldScale(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new w),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,bu,e),e}getWorldDirection(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new w),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(a(e.animations,l))}}if(t){let o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),p=s(e.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p)}return n.object=i,n;function s(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ye.DefaultUp=new w(0,1,0);Ye.DefaultMatrixAutoUpdate=!0;Ye.prototype.isObject3D=!0;var Ca=new w,Mu=new w,Su=new et,Ht=class{constructor(e=new w(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ca.subVectors(n,t).cross(Mu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new w),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new w);let n=e.delta(Ca),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(n).multiplyScalar(a).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new w),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Su.getNormalMatrix(e),i=this.coplanarPoint(Ca).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};Ht.prototype.isPlane=!0;var Gt=new w,tn=new w,Ra=new w,nn=new w,Kn=new w,ei=new w,Yo=new w,Da=new w,Na=new w,Ia=new w,Ze=class{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new w),i.subVectors(n,t),Gt.subVectors(e,t),i.cross(Gt);let a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){Gt.subVectors(i,t),tn.subVectors(n,t),Ra.subVectors(e,t);let s=Gt.dot(Gt),o=Gt.dot(tn),l=Gt.dot(Ra),c=tn.dot(tn),u=tn.dot(Ra),d=s*c-o*o;if(a===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),a=new w),d===0)return a.set(-2,-1,-1);let h=1/d,p=(c*l-o*u)*h,_=(s*u-o*l)*h;return a.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,nn),nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getUV(e,t,n,i,a,s,o,l){return this.getBarycoord(e,t,n,i,nn),l.set(0,0),l.addScaledVector(a,nn.x),l.addScaledVector(s,nn.y),l.addScaledVector(o,nn.z),l}static isFrontFacing(e,t,n,i){return Gt.subVectors(n,t),tn.subVectors(e,t),Gt.cross(tn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Gt.cross(tn).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new w),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ze.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Ht),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ze.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,a){return Ze.getUV(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return Ze.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ze.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new w);let n=this.a,i=this.b,a=this.c,s,o;Kn.subVectors(i,n),ei.subVectors(a,n),Da.subVectors(e,n);let l=Kn.dot(Da),c=ei.dot(Da);if(l<=0&&c<=0)return t.copy(n);Na.subVectors(e,i);let u=Kn.dot(Na),d=ei.dot(Na);if(u>=0&&d<=u)return t.copy(i);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Kn,s);Ia.subVectors(e,a);let p=Kn.dot(Ia),_=ei.dot(Ia);if(_>=0&&p<=_)return t.copy(a);let g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ei,o);let x=u*_-p*d;if(x<=0&&d-u>=0&&p-_>=0)return Yo.subVectors(a,i),o=(d-u)/(d-u+(p-_)),t.copy(i).addScaledVector(Yo,o);let f=1/(x+g+h);return s=g*f,o=h*f,t.copy(n).addScaledVector(Kn,s).addScaledVector(ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Au=0,jt=class extends $t{constructor(){super();Object.defineProperty(this,"id",{value:Au++}),this.uuid=Ii(),this.name="",this.type="Material",this.fog=!0,this.blending=Rn,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=mo,this.blendDst=go,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_a,this.stencilZFail=_a,this.stencilZPass=_a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}onBuild(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===co;continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rn&&(n.blending=this.blending),this.side!==rr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(a){let s=[];for(let o in a){let l=a[o];delete l.metadata,s.push(l)}return s}if(t){let a=i(e.textures),s=i(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};jt.prototype.isMaterial=!0;var jo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kt={h:0,s:0,l:0},mr={h:0,s:0,l:0};function Ua(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function za(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Oa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var be=class{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=fu(e,1),t=Ot(t,0,1),n=Ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let i=n<=.5?n*(1+t):n+t-n*t,a=2*n-i;this.r=Ua(a,i,e+1/3),this.g=Ua(a,i,e),this.b=Ua(a,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i,a=n[1],s=n[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){let o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(o,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let i=n[1],a=i.length;if(a===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(a===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=jo[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){let n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}copyLinearToSRGB(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});let t=this.r,n=this.g,i=this.b,a=Math.max(t,n,i),s=Math.min(t,n,i),o,l,c=(s+a)/2;if(s===a)o=0,l=0;else{let u=a-s;switch(l=c<=.5?u/(a+s):u/(2-a-s),a){case t:o=(n-i)/u+(n<i?6:0);break;case n:o=(i-t)/u+2;break;case i:o=(t-n)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(kt),kt.h+=e,kt.s+=t,kt.l+=n,this.setHSL(kt.h,kt.s,kt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kt),e.getHSL(mr);let n=ya(kt.h,mr.h,t),i=ya(kt.s,mr.s,t),a=ya(kt.l,mr.l,t);return this.setHSL(n,i,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};be.NAMES=jo;be.prototype.isColor=!0;be.prototype.r=1;be.prototype.g=1;be.prototype.b=1;var fn=class extends jt{constructor(e){super();this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.morphTargets=e.morphTargets,this}};fn.prototype.isMeshBasicMaterial=!0;var Ge=new w,gr=new le,ze=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=xa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,n=0;for(let i=0,a=e.length;i<a;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new be),t[n++]=s.r,t[n++]=s.g,t[n++]=s.b}return this}copyVector2sArray(e){let t=this.array,n=0;for(let i=0,a=e.length;i<a;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new le),t[n++]=s.x,t[n++]=s.y}return this}copyVector3sArray(e){let t=this.array,n=0;for(let i=0,a=e.length;i<a;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new w),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z}return this}copyVector4sArray(e){let t=this.array,n=0;for(let i=0,a=e.length;i<a;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new De),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z,t[n++]=s.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ge.fromBufferAttribute(this,t),Ge.applyMatrix3(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ge.x=this.getX(t),Ge.y=this.getY(t),Ge.z=this.getZ(t),Ge.applyMatrix4(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ge.x=this.getX(t),Ge.y=this.getY(t),Ge.z=this.getZ(t),Ge.applyNormalMatrix(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ge.x=this.getX(t),Ge.y=this.getY(t),Ge.z=this.getZ(t),Ge.transformDirection(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};ze.prototype.isBufferAttribute=!0;var Ba=class extends ze{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ha=class extends ze{constructor(e,t,n){super(new Uint32Array(e),t,n)}},yt=class extends ze{constructor(e,t,n){super(new Float32Array(e),t,n)}};function Qo(r){if(r.length===0)return-Infinity;let e=r[0];for(let t=1,n=r.length;t<n;++t)r[t]>e&&(e=r[t]);return e}var Eu=0,Ft=new ve,Ga=new Ye,ti=new w,Tt=new St,Bi=new St,tt=new w,Oe=class extends $t{constructor(){super();Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qo(e)>65535?Ha:Ba)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let a=new et().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return Ga.lookAt(e),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new St);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-Infinity,-Infinity,-Infinity),new w(Infinity,Infinity,Infinity));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let a=t[n];Tt.setFromBufferAttribute(a),this.morphTargetsRelative?(tt.addVectors(this.boundingBox.min,Tt.min),this.boundingBox.expandByPoint(tt),tt.addVectors(this.boundingBox.max,Tt.max),this.boundingBox.expandByPoint(tt)):(this.boundingBox.expandByPoint(Tt.min),this.boundingBox.expandByPoint(Tt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,Infinity);return}if(e){let n=this.boundingSphere.center;if(Tt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){let o=t[a];Bi.setFromBufferAttribute(o),this.morphTargetsRelative?(tt.addVectors(Tt.min,Bi.min),Tt.expandByPoint(tt),tt.addVectors(Tt.max,Bi.max),Tt.expandByPoint(tt)):(Tt.expandByPoint(Bi.min),Tt.expandByPoint(Bi.max))}Tt.getCenter(n);let i=0;for(let a=0,s=e.count;a<s;a++)tt.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(tt));if(t)for(let a=0,s=t.length;a<s;a++){let o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)tt.fromBufferAttribute(o,c),l&&(ti.fromBufferAttribute(e,c),tt.add(ti)),i=Math.max(i,n.distanceToSquared(tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,a=t.normal.array,s=t.uv.array,o=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new ze(new Float32Array(4*o),4));let l=t.tangent.array,c=[],u=[];for(let G=0;G<o;G++)c[G]=new w,u[G]=new w;let d=new w,h=new w,p=new w,_=new le,g=new le,x=new le,f=new w,m=new w;function M(G,Q,H){d.fromArray(i,G*3),h.fromArray(i,Q*3),p.fromArray(i,H*3),_.fromArray(s,G*2),g.fromArray(s,Q*2),x.fromArray(s,H*2),h.sub(d),p.sub(d),g.sub(_),x.sub(_);let P=1/(g.x*x.y-x.x*g.y);!isFinite(P)||(f.copy(h).multiplyScalar(x.y).addScaledVector(p,-g.y).multiplyScalar(P),m.copy(p).multiplyScalar(g.x).addScaledVector(h,-x.x).multiplyScalar(P),c[G].add(f),c[Q].add(f),c[H].add(f),u[G].add(m),u[Q].add(m),u[H].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let G=0,Q=T.length;G<Q;++G){let H=T[G],P=H.start,R=H.count;for(let D=P,F=P+R;D<F;D+=3)M(n[D+0],n[D+1],n[D+2])}let A=new w,v=new w,C=new w,U=new w;function B(G){C.fromArray(a,G*3),U.copy(C);let Q=c[G];A.copy(Q),A.sub(C.multiplyScalar(C.dot(Q))).normalize(),v.crossVectors(U,Q);let P=v.dot(u[G])<0?-1:1;l[G*4]=A.x,l[G*4+1]=A.y,l[G*4+2]=A.z,l[G*4+3]=P}for(let G=0,Q=T.length;G<Q;++G){let H=T[G],P=H.start,R=H.count;for(let D=P,F=P+R;D<F;D+=3)B(n[D+0]),B(n[D+1]),B(n[D+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let i=new w,a=new w,s=new w,o=new w,l=new w,c=new w,u=new w,d=new w;if(e)for(let h=0,p=e.count;h<p;h+=3){let _=e.getX(h+0),g=e.getX(h+1),x=e.getX(h+2);i.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),u.subVectors(s,a),d.subVectors(i,a),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,a),d.subVectors(i,a),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(e.attributes[i]===void 0)continue;let s=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,u=Math.min(l.length,s.length-c);for(let d=0,h=c;d<u;d++,h++)s[h]=l[d]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tt.fromBufferAttribute(e,t),tt.normalize(),e.setXYZ(t,tt.x,tt.y,tt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),p=0,_=0;for(let g=0,x=l.length;g<x;g++){p=l[g]*u;for(let f=0;f<u;f++)h[_++]=c[p++]}return new ze(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Oe,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new Oe().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let a=e.morphAttributes;for(let c in a){let u=[],d=a[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,u=s.length;c<u;c++){let d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};Oe.prototype.isBufferGeometry=!0;var qo=new ve,ni=new zn,ka=new Zn,pn=new w,mn=new w,gn=new w,Va=new w,Wa=new w,Xa=new w,_r=new w,xr=new w,vr=new w,yr=new le,br=new le,wr=new le,Ya=new w,Mr=new w,Vt=class extends Ye{constructor(e=new Oe,t=new fn){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){let o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){let n=this.geometry,i=this.material,a=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(a),e.ray.intersectsSphere(ka)===!1)||(qo.copy(a).invert(),ni.copy(e.ray).applyMatrix4(qo),n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1))return;let s;if(n.isBufferGeometry){let o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,d=n.attributes.uv,h=n.attributes.uv2,p=n.groups,_=n.drawRange;if(o!==null)if(Array.isArray(i))for(let g=0,x=p.length;g<x;g++){let f=p[g],m=i[f.materialIndex],M=Math.max(f.start,_.start),T=Math.min(f.start+f.count,_.start+_.count);for(let A=M,v=T;A<v;A+=3){let C=o.getX(A),U=o.getX(A+1),B=o.getX(A+2);s=Sr(this,m,e,ni,l,c,u,d,h,C,U,B),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,_.start),x=Math.min(o.count,_.start+_.count);for(let f=g,m=x;f<m;f+=3){let M=o.getX(f),T=o.getX(f+1),A=o.getX(f+2);s=Sr(this,i,e,ni,l,c,u,d,h,M,T,A),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let g=0,x=p.length;g<x;g++){let f=p[g],m=i[f.materialIndex],M=Math.max(f.start,_.start),T=Math.min(f.start+f.count,_.start+_.count);for(let A=M,v=T;A<v;A+=3){let C=A,U=A+1,B=A+2;s=Sr(this,m,e,ni,l,c,u,d,h,C,U,B),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,_.start),x=Math.min(l.count,_.start+_.count);for(let f=g,m=x;f<m;f+=3){let M=f,T=f+1,A=f+2;s=Sr(this,i,e,ni,l,c,u,d,h,M,T,A),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};Vt.prototype.isMesh=!0;function Tu(r,e,t,n,i,a,s,o){let l;if(e.side===Ke?l=n.intersectTriangle(s,a,i,!0,o):l=n.intersectTriangle(i,a,s,e.side!==Cn,o),l===null)return null;Mr.copy(o),Mr.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Mr);return c<t.near||c>t.far?null:{distance:c,point:Mr.clone(),object:r}}function Sr(r,e,t,n,i,a,s,o,l,c,u,d){pn.fromBufferAttribute(i,c),mn.fromBufferAttribute(i,u),gn.fromBufferAttribute(i,d);let h=r.morphTargetInfluences;if(e.morphTargets&&a&&h){_r.set(0,0,0),xr.set(0,0,0),vr.set(0,0,0);for(let _=0,g=a.length;_<g;_++){let x=h[_],f=a[_];x!==0&&(Va.fromBufferAttribute(f,c),Wa.fromBufferAttribute(f,u),Xa.fromBufferAttribute(f,d),s?(_r.addScaledVector(Va,x),xr.addScaledVector(Wa,x),vr.addScaledVector(Xa,x)):(_r.addScaledVector(Va.sub(pn),x),xr.addScaledVector(Wa.sub(mn),x),vr.addScaledVector(Xa.sub(gn),x)))}pn.add(_r),mn.add(xr),gn.add(vr)}r.isSkinnedMesh&&(r.boneTransform(c,pn),r.boneTransform(u,mn),r.boneTransform(d,gn));let p=Tu(r,e,t,n,pn,mn,gn,Ya);if(p){o&&(yr.fromBufferAttribute(o,c),br.fromBufferAttribute(o,u),wr.fromBufferAttribute(o,d),p.uv=Ze.getUV(Ya,pn,mn,gn,yr,br,wr,new le)),l&&(yr.fromBufferAttribute(l,c),br.fromBufferAttribute(l,u),wr.fromBufferAttribute(l,d),p.uv2=Ze.getUV(Ya,pn,mn,gn,yr,br,wr,new le));let _={a:c,b:u,c:d,normal:new w,materialIndex:0};Ze.getNormal(pn,mn,gn,_.normal),p.face=_}return p}var Ar=class extends Oe{constructor(e=1,t=1,n=1,i=1,a=1,s=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:s};let o=this;i=Math.floor(i),a=Math.floor(a),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=0,p=0;_("z","y","x",-1,-1,n,t,e,s,a,0),_("z","y","x",1,-1,n,t,-e,s,a,1),_("x","z","y",1,1,e,n,t,i,s,2),_("x","z","y",1,-1,e,n,-t,i,s,3),_("x","y","z",1,-1,e,t,n,i,a,4),_("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(d,2));function _(g,x,f,m,M,T,A,v,C,U,B){let G=T/C,Q=A/U,H=T/2,P=A/2,R=v/2,D=C+1,F=U+1,X=0,K=0,$=new w;for(let se=0;se<F;se++){let ae=se*Q-P;for(let ye=0;ye<D;ye++){let pe=ye*G-H;$[g]=pe*m,$[x]=ae*M,$[f]=R,c.push($.x,$.y,$.z),$[g]=0,$[x]=0,$[f]=v>0?1:-1,u.push($.x,$.y,$.z),d.push(ye/C),d.push(1-se/U),X+=1}}for(let se=0;se<U;se++)for(let ae=0;ae<C;ae++){let ye=h+ae+D*se,pe=h+ae+D*(se+1),Se=h+(ae+1)+D*(se+1),we=h+(ae+1)+D*se;l.push(ye,pe,we),l.push(pe,Se,we),K+=6}o.addGroup(p,K,B),p+=K,h+=X}}};function ii(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ot(r){let e={};for(let t=0;t<r.length;t++){let n=ii(r[t]);for(let i in n)e[i]=n[i]}return e}var _n={clone:ii,merge:ot},Lu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ke=class extends jt{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Lu,this.fragmentShader=Pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ii(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};ke.prototype.isShaderMaterial=!0;var Er=class extends Ye{constructor(){super();this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new w),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};Er.prototype.isCamera=!0;var ft=class extends Er{constructor(e=50,t=1,n=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(va*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};ft.prototype.isPerspectiveCamera=!0;var ri=90,ai=1,Tr=class extends Ye{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new ft(ri,ai,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new w(1,0,0)),this.add(i);let a=new ft(ri,ai,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new w(-1,0,0)),this.add(a);let s=new ft(ri,ai,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new w(0,1,0)),this.add(s);let o=new ft(ri,ai,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new w(0,-1,0)),this.add(o);let l=new ft(ri,ai,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new w(0,0,1)),this.add(l);let c=new ft(ri,ai,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new w(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,a,s,o,l,c]=this.children,u=e.xr.enabled,d=e.getRenderTarget();e.xr.enabled=!1;let h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(d),e.xr.enabled=u}},Hi=class extends wt{constructor(e,t,n,i,a,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:oa,o=o!==void 0?o:Xn,super(e,t,n,i,a,s,o,l,c,u),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};Hi.prototype.isCubeTexture=!0;var ja=class extends rt{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new Hi(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qe,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=nt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ar(5,5,5),a=new ke({name:"CubemapFromEquirect",uniforms:ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:Ri});a.uniforms.tEquirect.value=t;let s=new Vt(i,a),o=t.minFilter;return t.minFilter===ar&&(t.minFilter=qe),new Tr(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){let a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(a)}};ja.prototype.isWebGLCubeRenderTarget=!0;var si=new Zn,Lr=new w,Pr=class{constructor(e=new Ht,t=new Ht,n=new Ht,i=new Ht,a=new Ht,s=new Ht){this.planes=[e,t,n,i,a,s]}set(e,t,n,i,a,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],a=n[1],s=n[2],o=n[3],l=n[4],c=n[5],u=n[6],d=n[7],h=n[8],p=n[9],_=n[10],g=n[11],x=n[12],f=n[13],m=n[14],M=n[15];return t[0].setComponents(o-i,d-l,g-h,M-x).normalize(),t[1].setComponents(o+i,d+l,g+h,M+x).normalize(),t[2].setComponents(o+a,d+c,g+p,M+f).normalize(),t[3].setComponents(o-a,d-c,g-p,M-f).normalize(),t[4].setComponents(o-s,d-u,g-_,M-m).normalize(),t[5].setComponents(o+s,d+u,g+_,M+m).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSprite(e){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Lr.x=i.normal.x>0?e.max.x:e.min.x,Lr.y=i.normal.y>0?e.max.y:e.min.y,Lr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Zo(){let r=null,e=!1,t=null,n=null;function i(a,s){t(a,s),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function Fu(r,e){let t=e.isWebGL2,n=new WeakMap;function i(c,u){let d=c.array,h=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,d,h),c.onUploadCallback();let _=5126;return d instanceof Float32Array?_=5126:d instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):d instanceof Uint16Array?c.isFloat16BufferAttribute?t?_=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):_=5123:d instanceof Int16Array?_=5122:d instanceof Uint32Array?_=5125:d instanceof Int32Array?_=5124:d instanceof Int8Array?_=5120:(d instanceof Uint8Array||d instanceof Uint8ClampedArray)&&(_=5121),{buffer:p,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function a(c,u,d){let h=u.array,p=u.updateRange;r.bindBuffer(d,c),p.count===-1?r.bufferSubData(d,0,h):(t?r.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):r.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1)}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);d===void 0?n.set(c,i(c,u)):d.version<c.version&&(a(d.buffer,c,u),d.version=c.version)}return{get:s,remove:o,update:l}}var $o=class extends Oe{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let a=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,p=[],_=[],g=[],x=[];for(let f=0;f<u;f++){let m=f*h-s;for(let M=0;M<c;M++){let T=M*d-a;_.push(T,-m,0),g.push(0,0,1),x.push(M/o),x.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){let M=m+c*f,T=m+c*(f+1),A=m+1+c*(f+1),v=m+1+c*f;p.push(M,T,v),p.push(T,A,v)}this.setIndex(p),this.setAttribute("position",new yt(_,3)),this.setAttribute("normal",new yt(g,3)),this.setAttribute("uv",new yt(x,2))}},Cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Nu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Iu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uu="vec3 transformed = vec3( position );",zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ou=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,Bu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,qu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$u=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ku=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,th="gl_FragColor = linearToOutputTexel( gl_FragColor );",nh=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,ih=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ah=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lh=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,ch=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,dh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,fh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,ph=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mh=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,gh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,_h=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,xh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vh=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,yh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bh=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,wh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), rawDiffuseColor, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), rawDiffuseColor, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,Mh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ah=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,Eh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Th=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ph=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ch=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Rh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ih=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Oh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Bh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,Hh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Gh=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Vh=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Wh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Xh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Yh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,jh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$h=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kh=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ef=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,nf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,af=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,of=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,df=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uf=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hf=`#ifdef USE_TRANSMISSION
	#ifdef USE_TRANSMISSIONMAP
		totalTransmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSNMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition.xyz / vWorldPosition.w;
	vec3 v = normalize( cameraPosition - pos );
	vec3 viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
	float ior = ( 1.0 + 0.4 * reflectivity ) / ( 1.0 - 0.4 * reflectivity );
	vec3 f0 = vec3( pow( ior - 1.0, 2.0 ) / pow( ior + 1.0, 2.0 ) );
	vec3 f90 = vec3( 1.0 );
	vec3 f_transmission = totalTransmission * getIBLVolumeRefraction(
		normal, v, viewDir, roughnessFactor, diffuseColor.rgb, f0, f90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance);
	diffuseColor.rgb = mix( diffuseColor.rgb, f_transmission, totalTransmission );
#endif`,ff=`#ifdef USE_TRANSMISSION
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec4 vWorldPosition;
	vec3 getVolumeTransmissionRay(vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix) {
		vec3 refractionVector = refract(-v, normalize(n), 1.0 / ior);
		vec3 modelScale;
		modelScale.x = length(vec3(modelMatrix[0].xyz));
		modelScale.y = length(vec3(modelMatrix[1].xyz));
		modelScale.z = length(vec3(modelMatrix[2].xyz));
		return normalize(refractionVector) * thickness * modelScale;
	}
	float applyIorToRoughness(float roughness, float ior) {
		return roughness * clamp(ior * 2.0 - 2.0, 0.0, 1.0);
	}
	vec3 getTransmissionSample(vec2 fragCoord, float roughness, float ior) {
		float framebufferLod = log2(transmissionSamplerSize.x) * applyIorToRoughness(roughness, ior);
		return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod).rgb;
	}
	vec3 applyVolumeAttenuation(vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance) {
		if (attenuationDistance == 0.0) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log(attenuationColor) / attenuationDistance;
			vec3 transmittance = exp(-attenuationCoefficient * transmissionDistance);			return transmittance * radiance;
		}
	}
	vec3 getIBLVolumeRefraction(vec3 n, vec3 v, vec3 viewDir, float perceptualRoughness, vec3 baseColor, vec3 f0, vec3 f90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness, vec3 attenuationColor, float attenuationDistance) {
		vec3 transmissionRay = getVolumeTransmissionRay(n, v, thickness, ior, modelMatrix);
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4(refractedRayExit, 1.0);
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec3 transmittedLight = getTransmissionSample(refractionCoords, perceptualRoughness, ior);
		vec3 attenuatedColor = applyVolumeAttenuation(transmittedLight, length(transmissionRay), attenuationColor, attenuationDistance);
		float NdotV = saturate(dot(n, viewDir));
		vec2 brdf = integrateSpecularBRDF(NdotV, perceptualRoughness);
		vec3 specularColor = f0 * brdf.x + f90 * brdf.y;
		return (1.0 - specularColor) * attenuatedColor * baseColor;
	}
#endif`,pf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,mf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,gf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,_f=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,xf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,vf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bf=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mf=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ef=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Df=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,If=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uf=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vf=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform vec3 attenuationColor;
	uniform float attenuationDistance;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <transmission_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef USE_TRANSMISSION
		float totalTransmission = transmission;
		float thicknessFactor = thickness;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	vec3 rawDiffuseColor = diffuseColor.rgb;
	#include <transmission_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#ifdef USE_TRANSMISSION
	varying vec4 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition;
#endif
}`,Xf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Yf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Zf=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Jf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ae={alphamap_fragment:Cu,alphamap_pars_fragment:Ru,alphatest_fragment:Du,aomap_fragment:Nu,aomap_pars_fragment:Iu,begin_vertex:Uu,beginnormal_vertex:zu,bsdfs:Ou,bumpmap_pars_fragment:Bu,clipping_planes_fragment:Hu,clipping_planes_pars_fragment:Gu,clipping_planes_pars_vertex:ku,clipping_planes_vertex:Vu,color_fragment:Wu,color_pars_fragment:Xu,color_pars_vertex:Yu,color_vertex:ju,common:Qu,cube_uv_reflection_fragment:qu,defaultnormal_vertex:Zu,displacementmap_pars_vertex:$u,displacementmap_vertex:Ju,emissivemap_fragment:Ku,emissivemap_pars_fragment:eh,encodings_fragment:th,encodings_pars_fragment:nh,envmap_fragment:ih,envmap_common_pars_fragment:rh,envmap_pars_fragment:ah,envmap_pars_vertex:sh,envmap_physical_pars_fragment:_h,envmap_vertex:oh,fog_vertex:lh,fog_pars_vertex:ch,fog_fragment:dh,fog_pars_fragment:uh,gradientmap_pars_fragment:hh,lightmap_fragment:fh,lightmap_pars_fragment:ph,lights_lambert_vertex:mh,lights_pars_begin:gh,lights_toon_fragment:xh,lights_toon_pars_fragment:vh,lights_phong_fragment:yh,lights_phong_pars_fragment:bh,lights_physical_fragment:wh,lights_physical_pars_fragment:Mh,lights_fragment_begin:Sh,lights_fragment_maps:Ah,lights_fragment_end:Eh,logdepthbuf_fragment:Th,logdepthbuf_pars_fragment:Lh,logdepthbuf_pars_vertex:Ph,logdepthbuf_vertex:Fh,map_fragment:Ch,map_pars_fragment:Rh,map_particle_fragment:Dh,map_particle_pars_fragment:Nh,metalnessmap_fragment:Ih,metalnessmap_pars_fragment:Uh,morphnormal_vertex:zh,morphtarget_pars_vertex:Oh,morphtarget_vertex:Bh,normal_fragment_begin:Hh,normal_fragment_maps:Gh,normalmap_pars_fragment:kh,clearcoat_normal_fragment_begin:Vh,clearcoat_normal_fragment_maps:Wh,clearcoat_pars_fragment:Xh,packing:Yh,premultiplied_alpha_fragment:jh,project_vertex:Qh,dithering_fragment:qh,dithering_pars_fragment:Zh,roughnessmap_fragment:$h,roughnessmap_pars_fragment:Jh,shadowmap_pars_fragment:Kh,shadowmap_pars_vertex:ef,shadowmap_vertex:tf,shadowmask_pars_fragment:nf,skinbase_vertex:rf,skinning_pars_vertex:af,skinning_vertex:sf,skinnormal_vertex:of,specularmap_fragment:lf,specularmap_pars_fragment:cf,tonemapping_fragment:df,tonemapping_pars_fragment:uf,transmission_fragment:hf,transmission_pars_fragment:ff,uv_pars_fragment:pf,uv_pars_vertex:mf,uv_vertex:gf,uv2_pars_fragment:_f,uv2_pars_vertex:xf,uv2_vertex:vf,worldpos_vertex:yf,background_frag:bf,background_vert:wf,cube_frag:Mf,cube_vert:Sf,depth_frag:Af,depth_vert:Ef,distanceRGBA_frag:Tf,distanceRGBA_vert:Lf,equirect_frag:Pf,equirect_vert:Ff,linedashed_frag:Cf,linedashed_vert:Rf,meshbasic_frag:Df,meshbasic_vert:Nf,meshlambert_frag:If,meshlambert_vert:Uf,meshmatcap_frag:zf,meshmatcap_vert:Of,meshtoon_frag:Bf,meshtoon_vert:Hf,meshphong_frag:Gf,meshphong_vert:kf,meshphysical_frag:Vf,meshphysical_vert:Wf,normal_frag:Xf,normal_vert:Yf,points_frag:jf,points_vert:Qf,shadow_frag:qf,shadow_vert:Zf,sprite_frag:$f,sprite_vert:Jf},ie={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new et},uv2Transform:{value:new et},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new et}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new et}}},Qt={basic:{uniforms:ot([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:ot([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.fog,ie.lights,{emissive:{value:new be(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:ot([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:ot([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:ot([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new be(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:ot([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:ot([ie.points,ie.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:ot([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:ot([ie.common,ie.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:ot([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.normal_vert,fragmentShader:Ae.normal_frag},sprite:{uniforms:ot([ie.sprite,ie.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},cube:{uniforms:ot([ie.envmap,{opacity:{value:1}}]),vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:ot([ie.common,ie.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:ot([ie.lights,ie.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};Qt.physical={uniforms:ot([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new le(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new be(0)},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new be(0)}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};function Kf(r,e,t,n,i){let a=new be(0),s=0,o,l,c=null,u=0,d=null;function h(_,g){let x=!1,f=g.isScene===!0?g.background:null;f&&f.isTexture&&(f=e.get(f));let m=r.xr,M=m.getSession&&m.getSession();M&&M.environmentBlendMode==="additive"&&(f=null),f===null?p(a,s):f&&f.isColor&&(p(f,1),x=!0),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),f&&(f.isCubeTexture||f.mapping===ca)?(l===void 0&&(l=new Vt(new Ar(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:ii(Qt.cube.uniforms),vertexShader:Qt.cube.vertexShader,fragmentShader:Qt.cube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,A,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=f,l.material.uniforms.flipEnvMap.value=f.isCubeTexture&&f._needsFlipEnvMap?-1:1,(c!==f||u!==f.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,c=f,u=f.version,d=r.toneMapping),_.unshift(l,l.geometry,l.material,0,0,null)):f&&f.isTexture&&(o===void 0&&(o=new Vt(new $o(2,2),new ke({name:"BackgroundMaterial",uniforms:ii(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=f,f.matrixAutoUpdate===!0&&f.updateMatrix(),o.material.uniforms.uvTransform.value.copy(f.matrix),(c!==f||u!==f.version||d!==r.toneMapping)&&(o.material.needsUpdate=!0,c=f,u=f.version,d=r.toneMapping),_.unshift(o,o.geometry,o.material,0,0,null))}function p(_,g){t.buffers.color.setClear(_.r,_.g,_.b,g,i)}return{getClearColor:function(){return a},setClearColor:function(_,g=1){a.set(_),s=g,p(a,s)},getClearAlpha:function(){return s},setClearAlpha:function(_){s=_,p(a,s)},render:h}}function ep(r,e,t,n){let i=r.getParameter(34921),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||a!==null,o={},l=g(null),c=l;function u(P,R,D,F,X){let K=!1;if(s){let $=_(F,D,R);c!==$&&(c=$,h(c.object)),K=x(F,X),K&&f(F,X)}else{let $=R.wireframe===!0;(c.geometry!==F.id||c.program!==D.id||c.wireframe!==$)&&(c.geometry=F.id,c.program=D.id,c.wireframe=$,K=!0)}P.isInstancedMesh===!0&&(K=!0),X!==null&&t.update(X,34963),K&&(C(P,R,D,F),X!==null&&r.bindBuffer(34963,t.get(X).buffer))}function d(){return n.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function h(P){return n.isWebGL2?r.bindVertexArray(P):a.bindVertexArrayOES(P)}function p(P){return n.isWebGL2?r.deleteVertexArray(P):a.deleteVertexArrayOES(P)}function _(P,R,D){let F=D.wireframe===!0,X=o[P.id];X===void 0&&(X={},o[P.id]=X);let K=X[R.id];K===void 0&&(K={},X[R.id]=K);let $=K[F];return $===void 0&&($=g(d()),K[F]=$),$}function g(P){let R=[],D=[],F=[];for(let X=0;X<i;X++)R[X]=0,D[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:F,object:P,attributes:{},index:null}}function x(P,R){let D=c.attributes,F=P.attributes,X=0;for(let K in F){let $=D[K],se=F[K];if($===void 0||$.attribute!==se||$.data!==se.data)return!0;X++}return c.attributesNum!==X||c.index!==R}function f(P,R){let D={},F=P.attributes,X=0;for(let K in F){let $=F[K],se={};se.attribute=$,$.data&&(se.data=$.data),D[K]=se,X++}c.attributes=D,c.attributesNum=X,c.index=R}function m(){let P=c.newAttributes;for(let R=0,D=P.length;R<D;R++)P[R]=0}function M(P){T(P,0)}function T(P,R){let D=c.newAttributes,F=c.enabledAttributes,X=c.attributeDivisors;D[P]=1,F[P]===0&&(r.enableVertexAttribArray(P),F[P]=1),X[P]!==R&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,R),X[P]=R)}function A(){let P=c.newAttributes,R=c.enabledAttributes;for(let D=0,F=R.length;D<F;D++)R[D]!==P[D]&&(r.disableVertexAttribArray(D),R[D]=0)}function v(P,R,D,F,X,K){n.isWebGL2===!0&&(D===5124||D===5125)?r.vertexAttribIPointer(P,R,D,X,K):r.vertexAttribPointer(P,R,D,F,X,K)}function C(P,R,D,F){if(n.isWebGL2===!1&&(P.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();let X=F.attributes,K=D.getAttributes(),$=R.defaultAttributeValues;for(let se in K){let ae=K[se];if(ae>=0){let ye=X[se];if(ye!==void 0){let pe=ye.normalized,Se=ye.itemSize,we=t.get(ye);if(we===void 0)continue;let V=we.buffer,je=we.type,Ee=we.bytesPerElement;if(ye.isInterleavedBufferAttribute){let me=ye.data,_e=me.stride,Ce=ye.offset;me&&me.isInstancedInterleavedBuffer?(T(ae,me.meshPerAttribute),F._maxInstanceCount===void 0&&(F._maxInstanceCount=me.meshPerAttribute*me.count)):M(ae),r.bindBuffer(34962,V),v(ae,Se,je,pe,_e*Ee,Ce*Ee)}else ye.isInstancedBufferAttribute?(T(ae,ye.meshPerAttribute),F._maxInstanceCount===void 0&&(F._maxInstanceCount=ye.meshPerAttribute*ye.count)):M(ae),r.bindBuffer(34962,V),v(ae,Se,je,pe,0,0)}else if(se==="instanceMatrix"){let pe=t.get(P.instanceMatrix);if(pe===void 0)continue;let Se=pe.buffer,we=pe.type;T(ae+0,1),T(ae+1,1),T(ae+2,1),T(ae+3,1),r.bindBuffer(34962,Se),r.vertexAttribPointer(ae+0,4,we,!1,64,0),r.vertexAttribPointer(ae+1,4,we,!1,64,16),r.vertexAttribPointer(ae+2,4,we,!1,64,32),r.vertexAttribPointer(ae+3,4,we,!1,64,48)}else if(se==="instanceColor"){let pe=t.get(P.instanceColor);if(pe===void 0)continue;let Se=pe.buffer,we=pe.type;T(ae,1),r.bindBuffer(34962,Se),r.vertexAttribPointer(ae,3,we,!1,12,0)}else if($!==void 0){let pe=$[se];if(pe!==void 0)switch(pe.length){case 2:r.vertexAttrib2fv(ae,pe);break;case 3:r.vertexAttrib3fv(ae,pe);break;case 4:r.vertexAttrib4fv(ae,pe);break;default:r.vertexAttrib1fv(ae,pe)}}}}A()}function U(){Q();for(let P in o){let R=o[P];for(let D in R){let F=R[D];for(let X in F)p(F[X].object),delete F[X];delete R[D]}delete o[P]}}function B(P){if(o[P.id]===void 0)return;let R=o[P.id];for(let D in R){let F=R[D];for(let X in F)p(F[X].object),delete F[X];delete R[D]}delete o[P.id]}function G(P){for(let R in o){let D=o[R];if(D[P.id]===void 0)continue;let F=D[P.id];for(let X in F)p(F[X].object),delete F[X];delete D[P.id]}}function Q(){H(),c!==l&&(c=l,h(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Q,resetDefaultState:H,dispose:U,releaseStatesOfGeometry:B,releaseStatesOfProgram:G,initAttributes:m,enableAttribute:M,disableUnusedAttributes:A}}function tp(r,e,t,n){let i=n.isWebGL2,a;function s(c){a=c}function o(c,u){r.drawArrays(a,c,u),t.update(u,a,1)}function l(c,u,d){if(d===0)return;let h,p;if(i)h=r,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](a,c,u,d),t.update(u,a,d)}this.setMode=s,this.render=o,this.renderInstances=l}function np(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(C){if(C==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext,o=t.precision!==void 0?t.precision:"highp",l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=r.getParameter(34930),h=r.getParameter(35660),p=r.getParameter(3379),_=r.getParameter(34076),g=r.getParameter(34921),x=r.getParameter(36347),f=r.getParameter(36348),m=r.getParameter(36349),M=h>0,T=s||e.has("OES_texture_float"),A=M&&T,v=s?r.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:x,maxVaryings:f,maxFragmentUniforms:m,vertexTextures:M,floatFragmentTextures:T,floatVertexTextures:A,maxSamples:v}}function ip(r){let e=this,t=null,n=0,i=!1,a=!1,s=new Ht,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h,p){let _=d.length!==0||h||n!==0||i;return i=h,t=u(d,p,0),n=d.length,_},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1,c()},this.setState=function(d,h,p){let _=d.clippingPlanes,g=d.clipIntersection,x=d.clipShadows,f=r.get(d);if(!i||_===null||_.length===0||a&&!x)a?u(null):c();else{let m=a?0:n,M=m*4,T=f.clippingState||null;l.value=T,T=u(_,h,M,p);for(let A=0;A!==M;++A)T[A]=t[A];f.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,_){let g=d!==null?d.length:0,x=null;if(g!==0){if(x=l.value,_!==!0||x===null){let f=p+g*4,m=h.matrixWorldInverse;o.getNormalMatrix(m),(x===null||x.length<f)&&(x=new Float32Array(f));for(let M=0,T=p;M!==g;++M,T+=4)s.copy(d[M]).applyMatrix4(m,o),s.normal.toArray(x,T),x[T+3]=s.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,x}}function rp(r){let e=new WeakMap;function t(s,o){return o===xo?s.mapping=oa:o===vo&&(s.mapping=la),s}function n(s){if(s&&s.isTexture){let o=s.mapping;if(o===xo||o===vo)if(e.has(s)){let l=e.get(s).texture;return t(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let c=r.getRenderTarget(),u=new ja(l.height/2);return u.fromEquirectangularTexture(r,s),e.set(s,u),r.setRenderTarget(c),s.addEventListener("dispose",i),t(u.texture,s.mapping)}else return null}}return s}function i(s){let o=s.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}function ap(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function sp(r,e,t,n){let i={},a=new WeakMap;function s(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",s),delete i[h.id];let p=a.get(h);p&&(e.remove(p),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let _ in h)e.update(h[_],34962);let p=d.morphAttributes;for(let _ in p){let g=p[_];for(let x=0,f=g.length;x<f;x++)e.update(g[x],34962)}}function c(d){let h=[],p=d.index,_=d.attributes.position,g=0;if(p!==null){let m=p.array;g=p.version;for(let M=0,T=m.length;M<T;M+=3){let A=m[M+0],v=m[M+1],C=m[M+2];h.push(A,v,v,C,C,A)}}else{let m=_.array;g=_.version;for(let M=0,T=m.length/3-1;M<T;M+=3){let A=M+0,v=M+1,C=M+2;h.push(A,v,v,C,C,A)}}let x=new(Qo(h)>65535?Ha:Ba)(h,1);x.version=g;let f=a.get(d);f&&e.remove(f),a.set(d,x)}function u(d){let h=a.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function op(r,e,t,n){let i=n.isWebGL2,a;function s(h){a=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,p){r.drawElements(a,p,o,h*l),t.update(p,a,1)}function d(h,p,_){if(_===0)return;let g,x;if(i)g=r,x="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[x](a,p,o,h*l,_),t.update(p,a,_)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=d}function lp(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case 4:t.triangles+=o*(a/3);break;case 1:t.lines+=o*(a/2);break;case 3:t.lines+=o*(a-1);break;case 2:t.lines+=o*a;break;case 0:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function cp(r,e){return r[0]-e[0]}function dp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function up(r){let e={},t=new Float32Array(8),n=[];for(let a=0;a<8;a++)n[a]=[a,0];function i(a,s,o,l){let c=a.morphTargetInfluences,u=c===void 0?0:c.length,d=e[s.id];if(d===void 0){d=[];for(let x=0;x<u;x++)d[x]=[x,0];e[s.id]=d}for(let x=0;x<u;x++){let f=d[x];f[0]=x,f[1]=c[x]}d.sort(dp);for(let x=0;x<8;x++)x<u&&d[x][1]?(n[x][0]=d[x][0],n[x][1]=d[x][1]):(n[x][0]=Number.MAX_SAFE_INTEGER,n[x][1]=0);n.sort(cp);let h=o.morphTargets&&s.morphAttributes.position,p=o.morphNormals&&s.morphAttributes.normal,_=0;for(let x=0;x<8;x++){let f=n[x],m=f[0],M=f[1];m!==Number.MAX_SAFE_INTEGER&&M?(h&&s.getAttribute("morphTarget"+x)!==h[m]&&s.setAttribute("morphTarget"+x,h[m]),p&&s.getAttribute("morphNormal"+x)!==p[m]&&s.setAttribute("morphNormal"+x,p[m]),t[x]=M,_+=M):(h&&s.hasAttribute("morphTarget"+x)===!0&&s.deleteAttribute("morphTarget"+x),p&&s.hasAttribute("morphNormal"+x)===!0&&s.deleteAttribute("morphNormal"+x),t[x]=0)}let g=s.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",t)}return{update:i}}function hp(r,e,t,n){let i=new WeakMap;function a(l){let c=n.render.frame,u=l.geometry,d=e.get(l,u);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function s(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}var Qa=class extends wt{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Qa.prototype.isDataTexture2DArray=!0;var qa=class extends wt{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};qa.prototype.isDataTexture3D=!0;var Jo=new wt,fp=new Qa,pp=new qa,Ko=new Hi,el=[],tl=[],nl=new Float32Array(16),il=new Float32Array(9),rl=new Float32Array(4);function oi(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,a=el[i];if(a===void 0&&(a=new Float32Array(i),el[i]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,r[s].toArray(a,o)}return a}function pt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function lt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function al(r,e){let t=tl[e];t===void 0&&(t=new Int32Array(e),tl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function mp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function gp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2fv(this.addr,e),lt(t,e)}}function _p(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;r.uniform3fv(this.addr,e),lt(t,e)}}function xp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4fv(this.addr,e),lt(t,e)}}function vp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(pt(t,n))return;rl.set(n),r.uniformMatrix2fv(this.addr,!1,rl),lt(t,n)}}function yp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(pt(t,n))return;il.set(n),r.uniformMatrix3fv(this.addr,!1,il),lt(t,n)}}function bp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(pt(t,n))return;nl.set(n),r.uniformMatrix4fv(this.addr,!1,nl),lt(t,n)}}function wp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Mp(r,e){let t=this.cache;pt(t,e)||(r.uniform2iv(this.addr,e),lt(t,e))}function Sp(r,e){let t=this.cache;pt(t,e)||(r.uniform3iv(this.addr,e),lt(t,e))}function Ap(r,e){let t=this.cache;pt(t,e)||(r.uniform4iv(this.addr,e),lt(t,e))}function Ep(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Tp(r,e){let t=this.cache;pt(t,e)||(r.uniform2uiv(this.addr,e),lt(t,e))}function Lp(r,e){let t=this.cache;pt(t,e)||(r.uniform3uiv(this.addr,e),lt(t,e))}function Pp(r,e){let t=this.cache;pt(t,e)||(r.uniform4uiv(this.addr,e),lt(t,e))}function Fp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||Jo,i)}function Cp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||pp,i)}function Rp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||Ko,i)}function Dp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||fp,i)}function Np(r){switch(r){case 5126:return mp;case 35664:return gp;case 35665:return _p;case 35666:return xp;case 35674:return vp;case 35675:return yp;case 35676:return bp;case 5124:case 35670:return wp;case 35667:case 35671:return Mp;case 35668:case 35672:return Sp;case 35669:case 35673:return Ap;case 5125:return Ep;case 36294:return Tp;case 36295:return Lp;case 36296:return Pp;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Dp}}function Ip(r,e){r.uniform1fv(this.addr,e)}function Up(r,e){let t=oi(e,this.size,2);r.uniform2fv(this.addr,t)}function zp(r,e){let t=oi(e,this.size,3);r.uniform3fv(this.addr,t)}function Op(r,e){let t=oi(e,this.size,4);r.uniform4fv(this.addr,t)}function Bp(r,e){let t=oi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Hp(r,e){let t=oi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Gp(r,e){let t=oi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function kp(r,e){r.uniform1iv(this.addr,e)}function Vp(r,e){r.uniform2iv(this.addr,e)}function Wp(r,e){r.uniform3iv(this.addr,e)}function Xp(r,e){r.uniform4iv(this.addr,e)}function Yp(r,e){r.uniform1uiv(this.addr,e)}function jp(r,e){r.uniform2uiv(this.addr,e)}function Qp(r,e){r.uniform3uiv(this.addr,e)}function qp(r,e){r.uniform4uiv(this.addr,e)}function Zp(r,e,t){let n=e.length,i=al(t,n);r.uniform1iv(this.addr,i);for(let a=0;a!==n;++a)t.safeSetTexture2D(e[a]||Jo,i[a])}function $p(r,e,t){let n=e.length,i=al(t,n);r.uniform1iv(this.addr,i);for(let a=0;a!==n;++a)t.safeSetTextureCube(e[a]||Ko,i[a])}function Jp(r){switch(r){case 5126:return Ip;case 35664:return Up;case 35665:return zp;case 35666:return Op;case 35674:return Bp;case 35675:return Hp;case 35676:return Gp;case 5124:case 35670:return kp;case 35667:case 35671:return Vp;case 35668:case 35672:return Wp;case 35669:case 35673:return Xp;case 5125:return Yp;case 36294:return jp;case 36295:return Qp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35680:case 36300:case 36308:case 36293:return $p}}function Kp(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=Np(e.type)}function sl(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Jp(e.type)}sl.prototype.updateCache=function(r){let e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),lt(e,r)};function ol(r){this.id=r,this.seq=[],this.map={}}ol.prototype.setValue=function(r,e,t){let n=this.seq;for(let i=0,a=n.length;i!==a;++i){let s=n[i];s.setValue(r,e[s.id],t)}};var Za=/(\w+)(\])?(\[|\.)?/g;function ll(r,e){r.seq.push(e),r.map[e.id]=e}function em(r,e,t){let n=r.name,i=n.length;for(Za.lastIndex=0;;){let a=Za.exec(n),s=Za.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){ll(t,c===void 0?new Kp(o,r,e):new sl(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new ol(o),ll(t,d)),t=d}}}function xn(r,e){this.seq=[],this.map={};let t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){let i=r.getActiveUniform(e,n),a=r.getUniformLocation(e,i.name);em(i,a,this)}}xn.prototype.setValue=function(r,e,t,n){let i=this.map[e];i!==void 0&&i.setValue(r,t,n)};xn.prototype.setOptional=function(r,e,t){let n=e[t];n!==void 0&&this.setValue(r,t,n)};xn.upload=function(r,e,t,n){for(let i=0,a=e.length;i!==a;++i){let s=e[i],o=t[s.id];o.needsUpdate!==!1&&s.setValue(r,o.value,n)}};xn.seqWithValue=function(r,e){let t=[];for(let n=0,i=r.length;n!==i;++n){let a=r[n];a.id in e&&t.push(a)}return t};function cl(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var tm=0;function nm(r){let e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function dl(r){switch(r){case Ni:return["Linear","( value )"];case Ro:return["sRGB","( value )"];case ru:return["RGBE","( value )"];case su:return["RGBM","( value, 7.0 )"];case ou:return["RGBM","( value, 16.0 )"];case lu:return["RGBD","( value, 256.0 )"];case iu:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case au:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function ul(r,e,t){let n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let a=r.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+i+nm(a)}function Gi(r,e){let t=dl(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function im(r,e){let t=dl(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function rm(r,e){let t;switch(e){case sd:t="Linear";break;case Di:t="Reinhard";break;case od:t="OptimizedCineon";break;case ld:t="ACESFilmic";break;case cd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function am(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission>0)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ki).join(`
`)}function sm(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function om(r,e){let t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i).name;t[s]=r.getAttribLocation(e,s)}return t}function ki(r){return r!==""}function hl(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var lm=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(r){return r.replace(lm,cm)}function cm(r,e){let t=Ae[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return $a(t)}var dm=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ml(r){return r.replace(um,pl).replace(dm,hm)}function hm(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),pl(r,e,t,n)}function pl(r,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function gl(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===lo?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Oc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function pm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case oa:case la:e="ENVMAP_TYPE_CUBE";break;case ca:case da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case la:case da:e="ENVMAP_MODE_REFRACTION";break}return e}function gm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case sa:e="ENVMAP_BLENDING_MULTIPLY";break;case rd:e="ENVMAP_BLENDING_MIX";break;case ad:e="ENVMAP_BLENDING_ADD";break}return e}function _m(r,e,t,n){let i=r.getContext(),a=t.defines,s=t.vertexShader,o=t.fragmentShader,l=fm(t),c=pm(t),u=mm(t),d=gm(t),h=r.gammaFactor>0?r.gammaFactor:1,p=t.isWebGL2?"":am(t),_=sm(a),g=i.createProgram(),x,f,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[_].filter(ki).join(`
`),x.length>0&&(x+=`
`),f=[p,_].filter(ki).join(`
`),f.length>0&&(f+=`
`)):(x=[gl(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+h,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ki).join(`
`),f=[p,gl(t),"#define SHADER_NAME "+t.shaderName,_,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ln?"#define TONE_MAPPING":"",t.toneMapping!==ln?Ae.tonemapping_pars_fragment:"",t.toneMapping!==ln?rm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",Ae.encodings_pars_fragment,t.map?Gi("mapTexelToLinear",t.mapEncoding):"",t.matcap?Gi("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Gi("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Gi("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?Gi("lightMapTexelToLinear",t.lightMapEncoding):"",im("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ki).join(`
`)),s=$a(s),s=hl(s,t),s=fl(s,t),o=$a(o),o=hl(o,t),o=fl(o,t),s=ml(s),o=ml(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",t.glslVersion===No?"":"out highp vec4 pc_fragColor;",t.glslVersion===No?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=m+x+s,T=m+f+o,A=cl(i,35633,M),v=cl(i,35632,T);if(i.attachShader(g,A),i.attachShader(g,v),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),r.debug.checkShaderErrors){let B=i.getProgramInfoLog(g).trim(),G=i.getShaderInfoLog(A).trim(),Q=i.getShaderInfoLog(v).trim(),H=!0,P=!0;if(i.getProgramParameter(g,35714)===!1){H=!1;let R=ul(i,A,"vertex"),D=ul(i,v,"fragment");console.error("THREE.WebGLProgram: shader error: ",i.getError(),"35715",i.getProgramParameter(g,35715),"gl.getProgramInfoLog",B,R,D)}else B!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",B):(G===""||Q==="")&&(P=!1);P&&(this.diagnostics={runnable:H,programLog:B,vertexShader:{log:G,prefix:x},fragmentShader:{log:Q,prefix:f}})}i.deleteShader(A),i.deleteShader(v);let C;this.getUniforms=function(){return C===void 0&&(C=new xn(i,g)),C};let U;return this.getAttributes=function(){return U===void 0&&(U=om(i,g)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=tm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=v,this}function xm(r,e,t,n,i,a){let s=[],o=n.isWebGL2,l=n.logarithmicDepthBuffer,c=n.floatVertexTextures,u=n.maxVertexUniforms,d=n.vertexTextures,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},_=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmission","transmissionMap","thicknessMap"];function g(v){let U=v.skeleton.bones;if(c)return 1024;{let G=Math.floor((u-20)/4),Q=Math.min(G,U.length);return Q<U.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+U.length+" bones. This GPU supports "+Q+"."),0):Q}}function x(v){let C;return v&&v.isTexture?C=v.encoding:v&&v.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),C=v.texture.encoding):C=Ni,C}function f(v,C,U,B,G){let Q=B.fog,H=v.isMeshStandardMaterial?B.environment:null,P=e.get(v.envMap||H),R=p[v.type],D=G.isSkinnedMesh?g(G):0;v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let F,X;if(R){let se=Qt[R];F=se.vertexShader,X=se.fragmentShader}else F=v.vertexShader,X=v.fragmentShader;let K=r.getRenderTarget();return{isWebGL2:o,shaderID:R,shaderName:v.type,vertexShader:F,fragmentShader:X,defines:v.defines,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,instancing:G.isInstancedMesh===!0,instancingColor:G.isInstancedMesh===!0&&G.instanceColor!==null,supportsVertexTextures:d,outputEncoding:K!==null?x(K.texture):r.outputEncoding,map:!!v.map,mapEncoding:x(v.map),matcap:!!v.matcap,matcapEncoding:x(v.matcap),envMap:!!P,envMapMode:P&&P.mapping,envMapEncoding:x(P),envMapCubeUV:!!P&&(P.mapping===ca||P.mapping===da),lightMap:!!v.lightMap,lightMapEncoding:x(v.lightMap),aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,emissiveMapEncoding:x(v.emissiveMap),bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===uu,tangentSpaceNormalMap:v.normalMapType===Do,clearcoatMap:!!v.clearcoatMap,clearcoatRoughnessMap:!!v.clearcoatRoughnessMap,clearcoatNormalMap:!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,alphaMap:!!v.alphaMap,gradientMap:!!v.gradientMap,sheen:!!v.sheen,transmission:!!v.transmission,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:v.normalMap&&v.vertexTangents,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&G.geometry&&G.geometry.attributes.color&&G.geometry.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.displacementMap||!!v.transmission||!!v.transmissionMap||!!v.thicknessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.transmission||!!v.transmissionMap||!!v.thicknessMap)&&!!v.displacementMap,fog:!!Q,useFog:v.fog,fogExp2:Q&&Q.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:l,skinning:G.isSkinnedMesh===!0&&D>0,maxBones:D,useVertexTexture:c,morphTargets:v.morphTargets,morphNormals:v.morphNormals,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:ln,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,alphaTest:v.alphaTest,doubleSided:v.side===Cn,flipSided:v.side===Ke,depthPacking:v.depthPacking!==void 0?v.depthPacking:!1,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:o||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:o||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:o||t.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){let C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.fragmentShader),C.push(v.vertexShader)),v.defines!==void 0)for(let U in v.defines)C.push(U),C.push(v.defines[U]);if(v.isRawShaderMaterial===!1){for(let U=0;U<_.length;U++)C.push(v[_[U]]);C.push(r.outputEncoding),C.push(r.gammaFactor)}return C.push(v.customProgramCacheKey),C.join()}function M(v){let C=p[v.type],U;if(C){let B=Qt[C];U=_n.clone(B.uniforms)}else U=v.uniforms;return U}function T(v,C){let U;for(let B=0,G=s.length;B<G;B++){let Q=s[B];if(Q.cacheKey===C){U=Q,++U.usedTimes;break}}return U===void 0&&(U=new _m(r,C,v,i),s.push(U)),U}function A(v){if(--v.usedTimes==0){let C=s.indexOf(v);s[C]=s[s.length-1],s.pop(),v.destroy()}}return{getParameters:f,getProgramCacheKey:m,getUniforms:M,acquireProgram:T,releaseProgram:A,programs:s}}function vm(){let r=new WeakMap;function e(a){let s=r.get(a);return s===void 0&&(s={},r.set(a,s)),s}function t(a){r.delete(a)}function n(a,s,o){r.get(a)[s]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function ym(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.program!==e.program?r.program.id-e.program.id:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function _l(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function xl(r){let e=[],t=0,n=[],i=[],a=[],s={id:-1};function o(){t=0,n.length=0,i.length=0,a.length=0}function l(p,_,g,x,f,m){let M=e[t],T=r.get(g);return M===void 0?(M={id:p.id,object:p,geometry:_,material:g,program:T.program||s,groupOrder:x,renderOrder:p.renderOrder,z:f,group:m},e[t]=M):(M.id=p.id,M.object=p,M.geometry=_,M.material=g,M.program=T.program||s,M.groupOrder=x,M.renderOrder=p.renderOrder,M.z=f,M.group=m),t++,M}function c(p,_,g,x,f,m){let M=l(p,_,g,x,f,m);g.transmission>0?i.push(M):g.transparent===!0?a.push(M):n.push(M)}function u(p,_,g,x,f,m){let M=l(p,_,g,x,f,m);g.transmission>0?i.unshift(M):g.transparent===!0?a.unshift(M):n.unshift(M)}function d(p,_){n.length>1&&n.sort(p||ym),i.length>1&&i.sort(_||_l),a.length>1&&a.sort(_||_l)}function h(){for(let p=t,_=e.length;p<_;p++){let g=e[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.program=null,g.group=null}}return{opaque:n,transmissive:i,transparent:a,init:o,push:c,unshift:u,finish:h,sort:d}}function bm(r){let e=new WeakMap;function t(i,a){let s;return e.has(i)===!1?(s=new xl(r),e.set(i,[s])):a>=e.get(i).length?(s=new xl(r),e.get(i).push(s)):s=e.get(i)[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function wm(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new be};break;case"SpotLight":t={position:new w,direction:new w,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new w,halfWidth:new w,halfHeight:new w};break}return r[e.id]=t,t}}}function Mm(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var Sm=0;function Am(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function Em(r,e){let t=new wm,n=Mm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new w);let a=new w,s=new ve,o=new ve;function l(u){let d=0,h=0,p=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let _=0,g=0,x=0,f=0,m=0,M=0,T=0,A=0;u.sort(Am);for(let C=0,U=u.length;C<U;C++){let B=u[C],G=B.color,Q=B.intensity,H=B.distance,P=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=G.r*Q,h+=G.g*Q,p+=G.b*Q;else if(B.isLightProbe)for(let R=0;R<9;R++)i.probe[R].addScaledVector(B.sh.coefficients[R],Q);else if(B.isDirectionalLight){let R=t.get(B);if(R.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let D=B.shadow,F=n.get(B);F.shadowBias=D.bias,F.shadowNormalBias=D.normalBias,F.shadowRadius=D.radius,F.shadowMapSize=D.mapSize,i.directionalShadow[_]=F,i.directionalShadowMap[_]=P,i.directionalShadowMatrix[_]=B.shadow.matrix,M++}i.directional[_]=R,_++}else if(B.isSpotLight){let R=t.get(B);if(R.position.setFromMatrixPosition(B.matrixWorld),R.color.copy(G).multiplyScalar(Q),R.distance=H,R.coneCos=Math.cos(B.angle),R.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),R.decay=B.decay,B.castShadow){let D=B.shadow,F=n.get(B);F.shadowBias=D.bias,F.shadowNormalBias=D.normalBias,F.shadowRadius=D.radius,F.shadowMapSize=D.mapSize,i.spotShadow[x]=F,i.spotShadowMap[x]=P,i.spotShadowMatrix[x]=B.shadow.matrix,A++}i.spot[x]=R,x++}else if(B.isRectAreaLight){let R=t.get(B);R.color.copy(G).multiplyScalar(Q),R.halfWidth.set(B.width*.5,0,0),R.halfHeight.set(0,B.height*.5,0),i.rectArea[f]=R,f++}else if(B.isPointLight){let R=t.get(B);if(R.color.copy(B.color).multiplyScalar(B.intensity),R.distance=B.distance,R.decay=B.decay,B.castShadow){let D=B.shadow,F=n.get(B);F.shadowBias=D.bias,F.shadowNormalBias=D.normalBias,F.shadowRadius=D.radius,F.shadowMapSize=D.mapSize,F.shadowCameraNear=D.camera.near,F.shadowCameraFar=D.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=P,i.pointShadowMatrix[g]=B.shadow.matrix,T++}i.point[g]=R,g++}else if(B.isHemisphereLight){let R=t.get(B);R.skyColor.copy(B.color).multiplyScalar(Q),R.groundColor.copy(B.groundColor).multiplyScalar(Q),i.hemi[m]=R,m++}}f>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=p;let v=i.hash;(v.directionalLength!==_||v.pointLength!==g||v.spotLength!==x||v.rectAreaLength!==f||v.hemiLength!==m||v.numDirectionalShadows!==M||v.numPointShadows!==T||v.numSpotShadows!==A)&&(i.directional.length=_,i.spot.length=x,i.rectArea.length=f,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=T,i.spotShadowMatrix.length=A,v.directionalLength=_,v.pointLength=g,v.spotLength=x,v.rectAreaLength=f,v.hemiLength=m,v.numDirectionalShadows=M,v.numPointShadows=T,v.numSpotShadows=A,i.version=Sm++)}function c(u,d){let h=0,p=0,_=0,g=0,x=0,f=d.matrixWorldInverse;for(let m=0,M=u.length;m<M;m++){let T=u[m];if(T.isDirectionalLight){let A=i.directional[h];A.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(f),h++}else if(T.isSpotLight){let A=i.spot[_];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(f),_++}else if(T.isRectAreaLight){let A=i.rectArea[g];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(f),o.identity(),s.copy(T.matrixWorld),s.premultiply(f),o.extractRotation(s),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){let A=i.point[p];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(f),p++}else if(T.isHemisphereLight){let A=i.hemi[x];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(f),A.direction.normalize(),x++}}}return{setup:l,setupView:c,state:i}}function vl(r,e){let t=new Em(r,e),n=[],i=[];function a(){n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function l(){t.setup(n)}function c(d){t.setupView(n,d)}return{init:a,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function Tm(r,e){let t=new WeakMap;function n(a,s=0){let o;return t.has(a)===!1?(o=new vl(r,e),t.set(a,[o])):s>=t.get(a).length?(o=new vl(r,e),t.get(a).push(o)):o=t.get(a)[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var Ja=class extends jt{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=cu,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};Ja.prototype.isMeshDepthMaterial=!0;var Ka=class extends jt{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new w,this.nearDistance=1,this.farDistance=1e3,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Ka.prototype.isMeshDistanceMaterial=!0;var Lm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function yl(r,e,t){let n=new Pr,i=new le,a=new le,s=new De,o=[],l=[],c={},u=t.maxTextureSize,d={0:Ke,1:rr,2:Cn},h=new ke({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Pm,fragmentShader:Lm}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let _=new Oe;_.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Vt(_,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lo,this.render=function(v,C,U){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||v.length===0)return;let B=r.getRenderTarget(),G=r.getActiveCubeFace(),Q=r.getActiveMipmapLevel(),H=r.state;H.setBlending(Ri),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);for(let P=0,R=v.length;P<R;P++){let D=v[P],F=D.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let X=F.getFrameExtents();if(i.multiply(X),a.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/X.x),i.x=a.x*X.x,F.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/X.y),i.y=a.y*X.y,F.mapSize.y=a.y)),F.map===null&&!F.isPointLightShadow&&this.type===Ci){let $={minFilter:qe,magFilter:qe,format:nt};F.map=new rt(i.x,i.y,$),F.map.texture.name=D.name+".shadowMap",F.mapPass=new rt(i.x,i.y,$),F.camera.updateProjectionMatrix()}if(F.map===null){let $={minFilter:ht,magFilter:ht,format:nt};F.map=new rt(i.x,i.y,$),F.map.texture.name=D.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();let K=F.getViewportCount();for(let $=0;$<K;$++){let se=F.getViewport($);s.set(a.x*se.x,a.y*se.y,a.x*se.z,a.y*se.w),H.viewport(s),F.updateMatrices(D,$),n=F.getFrustum(),A(C,U,F.camera,D,this.type)}!F.isPointLightShadow&&this.type===Ci&&f(F,U),F.needsUpdate=!1}x.needsUpdate=!1,r.setRenderTarget(B,G,Q)};function f(v,C){let U=e.update(g);h.uniforms.shadow_pass.value=v.map.texture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(C,null,U,h,g,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(C,null,U,p,g,null)}function m(v){let C=v<<0,U=o[C];return U===void 0&&(U=new Ja({depthPacking:du,morphTargets:v}),o[C]=U),U}function M(v){let C=v<<0,U=l[C];return U===void 0&&(U=new Ka({morphTargets:v}),l[C]=U),U}function T(v,C,U,B,G,Q,H){let P=null,R=m,D=v.customDepthMaterial;if(B.isPointLight===!0&&(R=M,D=v.customDistanceMaterial),D===void 0){let F=!1;U.morphTargets===!0&&(F=C.morphAttributes&&C.morphAttributes.position&&C.morphAttributes.position.length>0),P=R(F)}else P=D;if(r.localClippingEnabled&&U.clipShadows===!0&&U.clippingPlanes.length!==0){let F=P.uuid,X=U.uuid,K=c[F];K===void 0&&(K={},c[F]=K);let $=K[X];$===void 0&&($=P.clone(),K[X]=$),P=$}return P.visible=U.visible,P.wireframe=U.wireframe,H===Ci?P.side=U.shadowSide!==null?U.shadowSide:U.side:P.side=U.shadowSide!==null?U.shadowSide:d[U.side],P.clipShadows=U.clipShadows,P.clippingPlanes=U.clippingPlanes,P.clipIntersection=U.clipIntersection,P.wireframeLinewidth=U.wireframeLinewidth,P.linewidth=U.linewidth,B.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(B.matrixWorld),P.nearDistance=G,P.farDistance=Q),P}function A(v,C,U,B,G){if(v.visible===!1)return;if(v.layers.test(C.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&G===Ci)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,v.matrixWorld);let P=e.update(v),R=v.material;if(Array.isArray(R)){let D=P.groups;for(let F=0,X=D.length;F<X;F++){let K=D[F],$=R[K.materialIndex];if($&&$.visible){let se=T(v,P,$,B,U.near,U.far,G);r.renderBufferDirect(U,null,P,se,v,K)}}}else if(R.visible){let D=T(v,P,R,B,U.near,U.far,G);r.renderBufferDirect(U,null,P,D,v,null)}}let H=v.children;for(let P=0,R=H.length;P<R;P++)A(H[P],C,U,B,G)}}function Fm(r,e,t){let n=t.isWebGL2;function i(){let L=!1,Z=new De,k=null,de=new De(0,0,0,0);return{setMask:function(re){k!==re&&!L&&(r.colorMask(re,re,re,re),k=re)},setLocked:function(re){L=re},setClear:function(re,Le,Be,at,Sn){Sn===!0&&(re*=at,Le*=at,Be*=at),Z.set(re,Le,Be,at),de.equals(Z)===!1&&(r.clearColor(re,Le,Be,at),de.copy(Z))},reset:function(){L=!1,k=null,de.set(-1,0,0,0)}}}function a(){let L=!1,Z=null,k=null,de=null;return{setTest:function(re){re?Se(2929):we(2929)},setMask:function(re){Z!==re&&!L&&(r.depthMask(re),Z=re)},setFunc:function(re){if(k!==re){if(re)switch(re){case $c:r.depthFunc(512);break;case Jc:r.depthFunc(519);break;case Kc:r.depthFunc(513);break;case aa:r.depthFunc(515);break;case ed:r.depthFunc(514);break;case td:r.depthFunc(518);break;case nd:r.depthFunc(516);break;case id:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);k=re}},setLocked:function(re){L=re},setClear:function(re){de!==re&&(r.clearDepth(re),de=re)},reset:function(){L=!1,Z=null,k=null,de=null}}}function s(){let L=!1,Z=null,k=null,de=null,re=null,Le=null,Be=null,at=null,Sn=null;return{setTest:function(Xe){L||(Xe?Se(2960):we(2960))},setMask:function(Xe){Z!==Xe&&!L&&(r.stencilMask(Xe),Z=Xe)},setFunc:function(Xe,qt,Nt){(k!==Xe||de!==qt||re!==Nt)&&(r.stencilFunc(Xe,qt,Nt),k=Xe,de=qt,re=Nt)},setOp:function(Xe,qt,Nt){(Le!==Xe||Be!==qt||at!==Nt)&&(r.stencilOp(Xe,qt,Nt),Le=Xe,Be=qt,at=Nt)},setLocked:function(Xe){L=Xe},setClear:function(Xe){Sn!==Xe&&(r.clearStencil(Xe),Sn=Xe)},reset:function(){L=!1,Z=null,k=null,de=null,re=null,Le=null,Be=null,at=null,Sn=null}}}let o=new i,l=new a,c=new s,u={},d=null,h={},p=null,_=!1,g=null,x=null,f=null,m=null,M=null,T=null,A=null,v=!1,C=null,U=null,B=null,G=null,Q=null,H=r.getParameter(35661),P=!1,R=0,D=r.getParameter(7938);D.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(D)[1]),P=R>=1):D.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),P=R>=2);let F=null,X={},K=r.getParameter(3088),$=r.getParameter(2978),se=new De().fromArray(K),ae=new De().fromArray($);function ye(L,Z,k){let de=new Uint8Array(4),re=r.createTexture();r.bindTexture(L,re),r.texParameteri(L,10241,9728),r.texParameteri(L,10240,9728);for(let Le=0;Le<k;Le++)r.texImage2D(Z+Le,0,6408,1,1,0,6408,5121,de);return re}let pe={};pe[3553]=ye(3553,3553,1),pe[34067]=ye(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(2929),l.setFunc(aa),Ne(!1),Ve(oo),Se(2884),Ce(Ri);function Se(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function we(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function V(L){L!==d&&(r.bindFramebuffer(36160,L),d=L)}function je(L,Z){return Z===null&&d!==null&&(Z=d),h[L]!==Z?(r.bindFramebuffer(L,Z),h[L]=Z,n&&(L===36009&&(h[36160]=Z),L===36160&&(h[36009]=Z)),!0):!1}function Ee(L){return p!==L?(r.useProgram(L),p=L,!0):!1}let me={[Wn]:32774,[Hc]:32778,[Gc]:32779};if(n)me[fo]=32775,me[po]=32776;else{let L=e.get("EXT_blend_minmax");L!==null&&(me[fo]=L.MIN_EXT,me[po]=L.MAX_EXT)}let _e={[kc]:0,[Vc]:1,[Wc]:768,[mo]:770,[Zc]:776,[Qc]:774,[Yc]:772,[Xc]:769,[go]:771,[qc]:775,[jc]:773};function Ce(L,Z,k,de,re,Le,Be,at){if(L===Ri){_===!0&&(we(3042),_=!1);return}if(_===!1&&(Se(3042),_=!0),L!==Bc){if(L!==g||at!==v){if((x!==Wn||M!==Wn)&&(r.blendEquation(32774),x=Wn,M=Wn),at)switch(L){case Rn:r.blendFuncSeparate(1,771,1,771);break;case Zt:r.blendFunc(1,1);break;case uo:r.blendFuncSeparate(0,0,769,771);break;case ho:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Rn:r.blendFuncSeparate(770,771,1,771);break;case Zt:r.blendFunc(770,1);break;case uo:r.blendFunc(0,769);break;case ho:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}f=null,m=null,T=null,A=null,g=L,v=at}return}re=re||Z,Le=Le||k,Be=Be||de,(Z!==x||re!==M)&&(r.blendEquationSeparate(me[Z],me[re]),x=Z,M=re),(k!==f||de!==m||Le!==T||Be!==A)&&(r.blendFuncSeparate(_e[k],_e[de],_e[Le],_e[Be]),f=k,m=de,T=Le,A=Be),g=L,v=null}function Re(L,Z){L.side===Cn?we(2884):Se(2884);let k=L.side===Ke;Z&&(k=!k),Ne(k),L.blending===Rn&&L.transparent===!1?Ce(Ri):Ce(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);let de=L.stencilWrite;c.setTest(de),de&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),vt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Se(32926):we(32926)}function Ne(L){C!==L&&(L?r.frontFace(2304):r.frontFace(2305),C=L)}function Ve(L){L!==Uc?(Se(2884),L!==U&&(L===oo?r.cullFace(1029):L===zc?r.cullFace(1028):r.cullFace(1032))):we(2884),U=L}function xt(L){L!==B&&(P&&r.lineWidth(L),B=L)}function vt(L,Z,k){L?(Se(32823),(G!==Z||Q!==k)&&(r.polygonOffset(Z,k),G=Z,Q=k)):we(32823)}function S(L){L?Se(3089):we(3089)}function b(L){L===void 0&&(L=33984+H-1),F!==L&&(r.activeTexture(L),F=L)}function j(L,Z){F===null&&b();let k=X[F];k===void 0&&(k={type:void 0,texture:void 0},X[F]=k),(k.type!==L||k.texture!==Z)&&(r.bindTexture(L,Z||pe[L]),k.type=L,k.texture=Z)}function Y(){let L=X[F];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function te(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function E(L){se.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),se.copy(L))}function q(L){ae.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),ae.copy(L))}function ee(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},F=null,X={},d=null,h={},p=null,_=!1,g=null,x=null,f=null,m=null,M=null,T=null,A=null,v=!1,C=null,U=null,B=null,G=null,Q=null,se.set(0,0,r.canvas.width,r.canvas.height),ae.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Se,disable:we,bindFramebuffer:je,bindXRFramebuffer:V,useProgram:Ee,setBlending:Ce,setMaterial:Re,setFlipSided:Ne,setCullFace:Ve,setLineWidth:xt,setPolygonOffset:vt,setScissorTest:S,activeTexture:b,bindTexture:j,unbindTexture:Y,compressedTexImage2D:te,texImage2D:J,texImage3D:oe,scissor:E,viewport:q,reset:ee}}function Cm(r,e,t,n,i,a,s){let o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,h=new WeakMap,p,_=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(S){}function g(S,b){return _?new OffscreenCanvas(S,b):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function x(S,b,j,Y){let te=1;if((S.width>Y||S.height>Y)&&(te=Y/Math.max(S.width,S.height)),te<1||b===!0)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap){let J=b?pu:Math.floor,oe=J(te*S.width),E=J(te*S.height);p===void 0&&(p=g(oe,E));let q=j?g(oe,E):p;return q.width=oe,q.height=E,q.getContext("2d").drawImage(S,0,0,oe,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+oe+"x"+E+")."),q}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function f(S){return Uo(S.width)&&Uo(S.height)}function m(S){return o?!1:S.wrapS!==bt||S.wrapT!==bt||S.minFilter!==ht&&S.minFilter!==qe}function M(S,b){return S.generateMipmaps&&b&&S.minFilter!==ht&&S.minFilter!==qe}function T(S,b,j,Y){r.generateMipmap(S);let te=n.get(b);te.__maxMipLevel=Math.log2(Math.max(j,Y))}function A(S,b,j){if(o===!1)return b;if(S!==null){if(r[S]!==void 0)return r[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Y=b;return b===6403&&(j===5126&&(Y=33326),j===5131&&(Y=33325),j===5121&&(Y=33321)),b===6407&&(j===5126&&(Y=34837),j===5131&&(Y=34843),j===5121&&(Y=32849)),b===6408&&(j===5126&&(Y=34836),j===5131&&(Y=34842),j===5121&&(Y=32856)),(Y===33325||Y===33326||Y===34842||Y===34836)&&e.get("EXT_color_buffer_float"),Y}function v(S){return S===ht||S===yo||S===bo?9728:9729}function C(S){let b=S.target;b.removeEventListener("dispose",C),B(b),b.isVideoTexture&&h.delete(b),s.memory.textures--}function U(S){let b=S.target;b.removeEventListener("dispose",U),G(b)}function B(S){let b=n.get(S);b.__webglInit!==void 0&&(r.deleteTexture(b.__webglTexture),n.remove(S))}function G(S){let b=S.texture,j=n.get(S),Y=n.get(b);if(!!S){if(Y.__webglTexture!==void 0&&(r.deleteTexture(Y.__webglTexture),s.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)r.deleteFramebuffer(j.__webglFramebuffer[te]),j.__webglDepthbuffer&&r.deleteRenderbuffer(j.__webglDepthbuffer[te]);else r.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&r.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&r.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer&&r.deleteRenderbuffer(j.__webglColorRenderbuffer),j.__webglDepthRenderbuffer&&r.deleteRenderbuffer(j.__webglDepthRenderbuffer);if(S.isWebGLMultipleRenderTargets)for(let te=0,J=b.length;te<J;te++){let oe=n.get(b[te]);oe.__webglTexture&&(r.deleteTexture(oe.__webglTexture),s.memory.textures--),n.remove(b[te])}n.remove(b),n.remove(S)}}let Q=0;function H(){Q=0}function P(){let S=Q;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),Q+=1,S}function R(S,b){let j=n.get(S);if(S.isVideoTexture&&Re(S),S.version>0&&j.__version!==S.version){let Y=S.image;if(Y===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(j,S,b);return}}t.activeTexture(33984+b),t.bindTexture(3553,j.__webglTexture)}function D(S,b){let j=n.get(S);if(S.version>0&&j.__version!==S.version){ye(j,S,b);return}t.activeTexture(33984+b),t.bindTexture(35866,j.__webglTexture)}function F(S,b){let j=n.get(S);if(S.version>0&&j.__version!==S.version){ye(j,S,b);return}t.activeTexture(33984+b),t.bindTexture(32879,j.__webglTexture)}function X(S,b){let j=n.get(S);if(S.version>0&&j.__version!==S.version){pe(j,S,b);return}t.activeTexture(33984+b),t.bindTexture(34067,j.__webglTexture)}let K={[ua]:10497,[bt]:33071,[ha]:33648},$={[ht]:9728,[yo]:9984,[bo]:9986,[qe]:9729,[dd]:9985,[ar]:9987};function se(S,b,j){if(j?(r.texParameteri(S,10242,K[b.wrapS]),r.texParameteri(S,10243,K[b.wrapT]),(S===32879||S===35866)&&r.texParameteri(S,32882,K[b.wrapR]),r.texParameteri(S,10240,$[b.magFilter]),r.texParameteri(S,10241,$[b.minFilter])):(r.texParameteri(S,10242,33071),r.texParameteri(S,10243,33071),(S===32879||S===35866)&&r.texParameteri(S,32882,33071),(b.wrapS!==bt||b.wrapT!==bt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(S,10240,v(b.magFilter)),r.texParameteri(S,10241,v(b.minFilter)),b.minFilter!==ht&&b.minFilter!==qe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let Y=e.get("EXT_texture_filter_anisotropic");if(b.type===Dn&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===or&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(S,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function ae(S,b){S.__webglInit===void 0&&(S.__webglInit=!0,b.addEventListener("dispose",C),S.__webglTexture=r.createTexture(),s.memory.textures++)}function ye(S,b,j){let Y=3553;b.isDataTexture2DArray&&(Y=35866),b.isDataTexture3D&&(Y=32879),ae(S,b),t.activeTexture(33984+j),t.bindTexture(Y,S.__webglTexture),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);let te=m(b)&&f(b.image)===!1,J=x(b.image,te,!1,u),oe=f(J)||o,E=a.convert(b.format),q=a.convert(b.type),ee=A(b.internalFormat,E,q);se(Y,b,oe);let L,Z=b.mipmaps;if(b.isDepthTexture)ee=6402,o?b.type===Dn?ee=36012:b.type===sr?ee=33190:b.type===lr?ee=35056:ee=33189:b.type===Dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ma&&ee===6402&&b.type!==pa&&b.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=pa,q=a.convert(b.type)),b.format===ga&&ee===6402&&(ee=34041,b.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=lr,q=a.convert(b.type))),t.texImage2D(3553,0,ee,J.width,J.height,0,E,q,null);else if(b.isDataTexture)if(Z.length>0&&oe){for(let k=0,de=Z.length;k<de;k++)L=Z[k],t.texImage2D(3553,k,ee,L.width,L.height,0,E,q,L.data);b.generateMipmaps=!1,S.__maxMipLevel=Z.length-1}else t.texImage2D(3553,0,ee,J.width,J.height,0,E,q,J.data),S.__maxMipLevel=0;else if(b.isCompressedTexture){for(let k=0,de=Z.length;k<de;k++)L=Z[k],b.format!==nt&&b.format!==Xn?E!==null?t.compressedTexImage2D(3553,k,ee,L.width,L.height,0,L.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,k,ee,L.width,L.height,0,E,q,L.data);S.__maxMipLevel=Z.length-1}else if(b.isDataTexture2DArray)t.texImage3D(35866,0,ee,J.width,J.height,J.depth,0,E,q,J.data),S.__maxMipLevel=0;else if(b.isDataTexture3D)t.texImage3D(32879,0,ee,J.width,J.height,J.depth,0,E,q,J.data),S.__maxMipLevel=0;else if(Z.length>0&&oe){for(let k=0,de=Z.length;k<de;k++)L=Z[k],t.texImage2D(3553,k,ee,E,q,L);b.generateMipmaps=!1,S.__maxMipLevel=Z.length-1}else t.texImage2D(3553,0,ee,E,q,J),S.__maxMipLevel=0;M(b,oe)&&T(Y,b,J.width,J.height),S.__version=b.version,b.onUpdate&&b.onUpdate(b)}function pe(S,b,j){if(b.image.length!==6)return;ae(S,b),t.activeTexture(33984+j),t.bindTexture(34067,S.__webglTexture),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);let Y=b&&(b.isCompressedTexture||b.image[0].isCompressedTexture),te=b.image[0]&&b.image[0].isDataTexture,J=[];for(let k=0;k<6;k++)!Y&&!te?J[k]=x(b.image[k],!1,!0,c):J[k]=te?b.image[k].image:b.image[k];let oe=J[0],E=f(oe)||o,q=a.convert(b.format),ee=a.convert(b.type),L=A(b.internalFormat,q,ee);se(34067,b,E);let Z;if(Y){for(let k=0;k<6;k++){Z=J[k].mipmaps;for(let de=0;de<Z.length;de++){let re=Z[de];b.format!==nt&&b.format!==Xn?q!==null?t.compressedTexImage2D(34069+k,de,L,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+k,de,L,re.width,re.height,0,q,ee,re.data)}}S.__maxMipLevel=Z.length-1}else{Z=b.mipmaps;for(let k=0;k<6;k++)if(te){t.texImage2D(34069+k,0,L,J[k].width,J[k].height,0,q,ee,J[k].data);for(let de=0;de<Z.length;de++){let Le=Z[de].image[k].image;t.texImage2D(34069+k,de+1,L,Le.width,Le.height,0,q,ee,Le.data)}}else{t.texImage2D(34069+k,0,L,q,ee,J[k]);for(let de=0;de<Z.length;de++){let re=Z[de];t.texImage2D(34069+k,de+1,L,q,ee,re.image[k])}}S.__maxMipLevel=Z.length}M(b,E)&&T(34067,b,oe.width,oe.height),S.__version=b.version,b.onUpdate&&b.onUpdate(b)}function Se(S,b,j,Y,te){let J=a.convert(j.format),oe=a.convert(j.type),E=A(j.internalFormat,J,oe);te===32879||te===35866?t.texImage3D(te,0,E,b.width,b.height,b.depth,0,J,oe,null):t.texImage2D(te,0,E,b.width,b.height,0,J,oe,null),t.bindFramebuffer(36160,S),r.framebufferTexture2D(36160,Y,te,n.get(j).__webglTexture,0),t.bindFramebuffer(36160,null)}function we(S,b,j){if(r.bindRenderbuffer(36161,S),b.depthBuffer&&!b.stencilBuffer){let Y=33189;if(j){let te=b.depthTexture;te&&te.isDepthTexture&&(te.type===Dn?Y=36012:te.type===sr&&(Y=33190));let J=Ce(b);r.renderbufferStorageMultisample(36161,J,Y,b.width,b.height)}else r.renderbufferStorage(36161,Y,b.width,b.height);r.framebufferRenderbuffer(36160,36096,36161,S)}else if(b.depthBuffer&&b.stencilBuffer){if(j){let Y=Ce(b);r.renderbufferStorageMultisample(36161,Y,35056,b.width,b.height)}else r.renderbufferStorage(36161,34041,b.width,b.height);r.framebufferRenderbuffer(36160,33306,36161,S)}else{let Y=b.isWebGLMultipleRenderTargets===!0?b.texture[0]:b.texture,te=a.convert(Y.format),J=a.convert(Y.type),oe=A(Y.internalFormat,te,J);if(j){let E=Ce(b);r.renderbufferStorageMultisample(36161,E,oe,b.width,b.height)}else r.renderbufferStorage(36161,oe,b.width,b.height)}r.bindRenderbuffer(36161,null)}function V(S,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),R(b.depthTexture,0);let Y=n.get(b.depthTexture).__webglTexture;if(b.depthTexture.format===ma)r.framebufferTexture2D(36160,36096,3553,Y,0);else if(b.depthTexture.format===ga)r.framebufferTexture2D(36160,33306,3553,Y,0);else throw new Error("Unknown depthTexture format")}function je(S){let b=n.get(S),j=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture){if(j)throw new Error("target.depthTexture not supported in Cube render targets");V(b.__webglFramebuffer,S)}else if(j){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(36160,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]=r.createRenderbuffer(),we(b.__webglDepthbuffer[Y],S,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),we(b.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function Ee(S){let b=S.texture,j=n.get(S),Y=n.get(b);S.addEventListener("dispose",U),S.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture=r.createTexture(),Y.__version=b.version,s.memory.textures++);let te=S.isWebGLCubeRenderTarget===!0,J=S.isWebGLMultipleRenderTargets===!0,oe=S.isWebGLMultisampleRenderTarget===!0,E=b.isDataTexture3D||b.isDataTexture2DArray,q=f(S)||o;if(o&&b.format===Xn&&(b.type===Dn||b.type===or)&&(b.format=nt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),te){j.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)j.__webglFramebuffer[ee]=r.createFramebuffer()}else if(j.__webglFramebuffer=r.createFramebuffer(),J)if(i.drawBuffers){let ee=S.texture;for(let L=0,Z=ee.length;L<Z;L++){let k=n.get(ee[L]);k.__webglTexture===void 0&&(k.__webglTexture=r.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(oe)if(o){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,j.__webglColorRenderbuffer);let ee=a.convert(b.format),L=a.convert(b.type),Z=A(b.internalFormat,ee,L),k=Ce(S);r.renderbufferStorageMultisample(36161,k,Z,S.width,S.height),t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,j.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),S.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),we(j.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(te){t.bindTexture(34067,Y.__webglTexture),se(34067,b,q);for(let ee=0;ee<6;ee++)Se(j.__webglFramebuffer[ee],S,b,36064,34069+ee);M(b,q)&&T(34067,b,S.width,S.height),t.bindTexture(34067,null)}else if(J){let ee=S.texture;for(let L=0,Z=ee.length;L<Z;L++){let k=ee[L],de=n.get(k);t.bindTexture(3553,de.__webglTexture),se(3553,k,q),Se(j.__webglFramebuffer,S,k,36064+L,3553),M(k,q)&&T(3553,k,S.width,S.height)}t.bindTexture(3553,null)}else{let ee=3553;E&&(o?ee=b.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(ee,Y.__webglTexture),se(ee,b,q),Se(j.__webglFramebuffer,S,b,36064,ee),M(b,q)&&T(3553,b,S.width,S.height),t.bindTexture(3553,null)}S.depthBuffer&&je(S)}function me(S){let b=f(S)||o,j=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Y=0,te=j.length;Y<te;Y++){let J=j[Y];if(M(J,b)){let oe=S.isWebGLCubeRenderTarget?34067:3553,E=n.get(J).__webglTexture;t.bindTexture(oe,E),T(oe,J,S.width,S.height),t.bindTexture(oe,null)}}}function _e(S){if(S.isWebGLMultisampleRenderTarget)if(o){let b=S.width,j=S.height,Y=16384;S.depthBuffer&&(Y|=256),S.stencilBuffer&&(Y|=1024);let te=n.get(S);t.bindFramebuffer(36008,te.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,te.__webglFramebuffer),r.blitFramebuffer(0,0,b,j,0,0,b,j,Y,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,te.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Ce(S){return o&&S.isWebGLMultisampleRenderTarget?Math.min(d,S.samples):0}function Re(S){let b=s.render.frame;h.get(S)!==b&&(h.set(S,b),S.update())}let Ne=!1,Ve=!1;function xt(S,b){S&&S.isWebGLRenderTarget&&(Ne===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Ne=!0),S=S.texture),R(S,b)}function vt(S,b){S&&S.isWebGLCubeRenderTarget&&(Ve===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Ve=!0),S=S.texture),X(S,b)}this.allocateTextureUnit=P,this.resetTextureUnits=H,this.setTexture2D=R,this.setTexture2DArray=D,this.setTexture3D=F,this.setTextureCube=X,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=_e,this.safeSetTexture2D=xt,this.safeSetTextureCube=vt}function Rm(r,e,t){let n=t.isWebGL2;function i(a){let s;if(a===fa)return 5121;if(a===pd)return 32819;if(a===md)return 32820;if(a===gd)return 33635;if(a===ud)return 5120;if(a===hd)return 5122;if(a===pa)return 5123;if(a===fd)return 5124;if(a===sr)return 5125;if(a===Dn)return 5126;if(a===or)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===_d)return 6406;if(a===Xn)return 6407;if(a===nt)return 6408;if(a===xd)return 6409;if(a===vd)return 6410;if(a===ma)return 6402;if(a===ga)return 34041;if(a===yd)return 6403;if(a===bd)return 36244;if(a===wd)return 33319;if(a===Md)return 33320;if(a===Sd)return 36248;if(a===Ad)return 36249;if(a===wo||a===Mo||a===So||a===Ao)if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===wo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Mo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===So)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ao)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Eo||a===To||a===Lo||a===Po)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Eo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===To)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Lo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Po)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Ed)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if((a===Fo||a===Co)&&(s=e.get("WEBGL_compressed_texture_etc"),s!==null)){if(a===Fo)return s.COMPRESSED_RGB8_ETC2;if(a===Co)return s.COMPRESSED_RGBA8_ETC2_EAC}if(a===Td||a===Ld||a===Pd||a===Fd||a===Cd||a===Rd||a===Dd||a===Nd||a===Id||a===Ud||a===zd||a===Od||a===Bd||a===Hd||a===kd||a===Vd||a===Wd||a===Xd||a===Yd||a===jd||a===Qd||a===qd||a===Zd||a===$d||a===Jd||a===Kd||a===eu||a===tu)return s=e.get("WEBGL_compressed_texture_astc"),s!==null?a:null;if(a===Gd)return s=e.get("EXT_texture_compression_bptc"),s!==null?a:null;if(a===lr)return n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}var es=class extends ft{constructor(e=[]){super();this.cameras=e}};es.prototype.isArrayCamera=!0;var li=class extends Ye{constructor(){super();this.type="Group"}};li.prototype.isGroup=!0;var Dm={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,s=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dm))),c&&e.hand){s=!0;for(let g of e.hand.values()){let x=t.getJointPose(g,n);if(c.joints[g.jointName]===void 0){let m=new li;m.matrixAutoUpdate=!1,m.visible=!1,c.joints[g.jointName]=m,c.add(m)}let f=c.joints[g.jointName];x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.jointRadius=x.radius),f.visible=x!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}},bl=class extends $t{constructor(e,t){super();let n=this,i=e.state,a=null,s=1,o=null,l="local-floor",c=null,u=[],d=new Map,h=new ft;h.layers.enable(1),h.viewport=new De;let p=new ft;p.layers.enable(2),p.viewport=new De;let _=[h,p],g=new es;g.layers.enable(1),g.layers.enable(2);let x=null,f=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let P=u[H];return P===void 0&&(P=new Fr,u[H]=P),P.getTargetRaySpace()},this.getControllerGrip=function(H){let P=u[H];return P===void 0&&(P=new Fr,u[H]=P),P.getGripSpace()},this.getHand=function(H){let P=u[H];return P===void 0&&(P=new Fr,u[H]=P),P.getHandSpace()};function m(H){let P=d.get(H.inputSource);P&&P.dispatchEvent({type:H.type,data:H.inputSource})}function M(){d.forEach(function(H,P){H.disconnect(P)}),d.clear(),x=null,f=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),Q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){l=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getSession=function(){return a},this.setSession=async function(H){if(a=H,a!==null){a.addEventListener("select",m),a.addEventListener("selectstart",m),a.addEventListener("selectend",m),a.addEventListener("squeeze",m),a.addEventListener("squeezestart",m),a.addEventListener("squeezeend",m),a.addEventListener("end",M),a.addEventListener("inputsourceschange",T);let P=t.getContextAttributes();P.xrCompatible!==!0&&await t.makeXRCompatible();let R={antialias:P.antialias,alpha:P.alpha,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:s},D=new XRWebGLLayer(a,t,R);a.updateRenderState({baseLayer:D}),o=await a.requestReferenceSpace(l),Q.setContext(a),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function T(H){let P=a.inputSources;for(let R=0;R<u.length;R++)d.set(P[R],u[R]);for(let R=0;R<H.removed.length;R++){let D=H.removed[R],F=d.get(D);F&&(F.dispatchEvent({type:"disconnected",data:D}),d.delete(D))}for(let R=0;R<H.added.length;R++){let D=H.added[R],F=d.get(D);F&&F.dispatchEvent({type:"connected",data:D})}}let A=new w,v=new w;function C(H,P,R){A.setFromMatrixPosition(P.matrixWorld),v.setFromMatrixPosition(R.matrixWorld);let D=A.distanceTo(v),F=P.projectionMatrix.elements,X=R.projectionMatrix.elements,K=F[14]/(F[10]-1),$=F[14]/(F[10]+1),se=(F[9]+1)/F[5],ae=(F[9]-1)/F[5],ye=(F[8]-1)/F[0],pe=(X[8]+1)/X[0],Se=K*ye,we=K*pe,V=D/(-ye+pe),je=V*-ye;P.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(je),H.translateZ(V),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let Ee=K+V,me=$+V,_e=Se-je,Ce=we+(D-je),Re=se*$/me*Ee,Ne=ae*$/me*Ee;H.projectionMatrix.makePerspective(_e,Ce,Re,Ne,Ee,me)}function U(H,P){P===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(P.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(a===null)return;g.near=p.near=h.near=H.near,g.far=p.far=h.far=H.far,(x!==g.near||f!==g.far)&&(a.updateRenderState({depthNear:g.near,depthFar:g.far}),x=g.near,f=g.far);let P=H.parent,R=g.cameras;U(g,P);for(let F=0;F<R.length;F++)U(R[F],P);H.matrixWorld.copy(g.matrixWorld),H.matrix.copy(g.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);let D=H.children;for(let F=0,X=D.length;F<X;F++)D[F].updateMatrixWorld(!0);R.length===2?C(g,h,p):g.projectionMatrix.copy(h.projectionMatrix)},this.getCamera=function(){return g};let B=null;function G(H,P){if(c=P.getViewerPose(o),c!==null){let D=c.views,F=a.renderState.baseLayer;i.bindXRFramebuffer(F.framebuffer);let X=!1;D.length!==g.cameras.length&&(g.cameras.length=0,X=!0);for(let K=0;K<D.length;K++){let $=D[K],se=F.getViewport($),ae=_[K];ae.matrix.fromArray($.transform.matrix),ae.projectionMatrix.fromArray($.projectionMatrix),ae.viewport.set(se.x,se.y,se.width,se.height),K===0&&g.matrix.copy(ae.matrix),X===!0&&g.cameras.push(ae)}}let R=a.inputSources;for(let D=0;D<u.length;D++){let F=u[D],X=R[D];F.update(X,P,o)}B&&B(H,P)}let Q=new Zo;Q.setAnimationLoop(G),this.setAnimationLoop=function(H){B=H},this.dispose=function(){}}};function Nm(r){function e(f,m){f.fogColor.value.copy(m.color),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function t(f,m,M,T,A){m.isMeshBasicMaterial?n(f,m):m.isMeshLambertMaterial?(n(f,m),l(f,m)):m.isMeshToonMaterial?(n(f,m),u(f,m)):m.isMeshPhongMaterial?(n(f,m),c(f,m)):m.isMeshStandardMaterial?(n(f,m),m.isMeshPhysicalMaterial?h(f,m,A):d(f,m)):m.isMeshMatcapMaterial?(n(f,m),p(f,m)):m.isMeshDepthMaterial?(n(f,m),_(f,m)):m.isMeshDistanceMaterial?(n(f,m),g(f,m)):m.isMeshNormalMaterial?(n(f,m),x(f,m)):m.isLineBasicMaterial?(i(f,m),m.isLineDashedMaterial&&a(f,m)):m.isPointsMaterial?s(f,m,M,T):m.isSpriteMaterial?o(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function n(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.specularMap&&(f.specularMap.value=m.specularMap);let M=r.get(m).envMap;if(M){f.envMap.value=M,f.flipEnvMap.value=M.isCubeTexture&&M._needsFlipEnvMap?-1:1,f.reflectivity.value=m.reflectivity,f.refractionRatio.value=m.refractionRatio;let v=r.get(M).__maxMipLevel;v!==void 0&&(f.maxMipLevel.value=v)}m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity);let T;m.map?T=m.map:m.specularMap?T=m.specularMap:m.displacementMap?T=m.displacementMap:m.normalMap?T=m.normalMap:m.bumpMap?T=m.bumpMap:m.roughnessMap?T=m.roughnessMap:m.metalnessMap?T=m.metalnessMap:m.alphaMap?T=m.alphaMap:m.emissiveMap?T=m.emissiveMap:m.clearcoatMap?T=m.clearcoatMap:m.clearcoatNormalMap?T=m.clearcoatNormalMap:m.clearcoatRoughnessMap&&(T=m.clearcoatRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),f.uvTransform.value.copy(T.matrix));let A;m.aoMap?A=m.aoMap:m.lightMap&&(A=m.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),f.uv2Transform.value.copy(A.matrix))}function i(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function s(f,m,M,T){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*M,f.scale.value=T*.5,m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap);let A;m.map?A=m.map:m.alphaMap&&(A=m.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),f.uvTransform.value.copy(A.matrix))}function o(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap);let M;m.map?M=m.map:m.alphaMap&&(M=m.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),f.uvTransform.value.copy(M.matrix))}function l(f,m){m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap)}function c(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===Ke&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===Ke&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===Ke&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===Ke&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}function d(f,m){f.roughness.value=m.roughness,f.metalness.value=m.metalness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===Ke&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===Ke&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),r.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function h(f,m,M){d(f,m),f.reflectivity.value=m.reflectivity,f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.sheen&&f.sheen.value.copy(m.sheen),m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),f.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Ke&&f.clearcoatNormalScale.value.negate()),f.transmission.value=m.transmission,m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap),m.transmission>0&&(f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)}function p(f,m){m.matcap&&(f.matcap.value=m.matcap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===Ke&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===Ke&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}function _(f,m){m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}function g(f,m){m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),f.referencePosition.value.copy(m.referencePosition),f.nearDistance.value=m.nearDistance,f.farDistance.value=m.farDistance}function x(f,m){m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===Ke&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===Ke&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Im(){let r=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return r.style.display="block",r}function Ue(r){r=r||{};let e=r.canvas!==void 0?r.canvas:Im(),t=r.context!==void 0?r.context:null,n=r.alpha!==void 0?r.alpha:!1,i=r.depth!==void 0?r.depth:!0,a=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,l=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1,d=null,h=null,p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Ni,this.physicallyCorrectLights=!1,this.toneMapping=ln,this.toneMappingExposure=1;let g=this,x=!1,f=0,m=0,M=null,T=-1,A=null,v=new De,C=new De,U=null,B=e.width,G=e.height,Q=1,H=null,P=null,R=new De(0,0,B,G),D=new De(0,0,B,G),F=!1,X=[],K=new Pr,$=!1,se=!1,ae=null,ye=new ve,pe=new w,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return M===null?Q:1}let V=t;function je(y,z){for(let I=0;I<y.length;I++){let O=y[I],ne=e.getContext(O,z);if(ne!==null)return ne}return null}try{let y={alpha:n,depth:i,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",Be,!1),V===null){let z=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&z.shift(),V=je(z,y),V===null)throw je(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ee,me,_e,Ce,Re,Ne,Ve,xt,vt,S,b,j,Y,te,J,oe,E,q,ee,L,Z,k;function de(){Ee=new ap(V),me=new np(V,Ee,r),Ee.init(me),Z=new Rm(V,Ee,me),_e=new Fm(V,Ee,me),X[0]=1029,Ce=new lp(V),Re=new vm,Ne=new Cm(V,Ee,_e,Re,me,Z,Ce),Ve=new rp(g),xt=new Fu(V,me),k=new ep(V,Ee,xt,me),vt=new sp(V,xt,Ce,k),S=new hp(V,vt,xt,Ce),q=new up(V),J=new ip(Re),b=new xm(g,Ve,Ee,me,k,J),j=new Nm(Re),Y=new bm(Re),te=new Tm(Ee,me),E=new Kf(g,Ve,_e,S,o),oe=new yl(g,S,me),ee=new tp(V,Ee,Ce,me),L=new op(V,Ee,Ce,me),Ce.programs=b.programs,g.capabilities=me,g.extensions=Ee,g.properties=Re,g.renderLists=Y,g.shadowMap=oe,g.state=_e,g.info=Ce}de();let re=new bl(g,V);this.xr=re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let y=Ee.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Ee.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(y){y!==void 0&&(Q=y,this.setSize(B,G,!1))},this.getSize=function(y){return y===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),y=new le),y.set(B,G)},this.setSize=function(y,z,I){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=y,G=z,e.width=Math.floor(y*Q),e.height=Math.floor(z*Q),I!==!1&&(e.style.width=y+"px",e.style.height=z+"px"),this.setViewport(0,0,y,z)},this.getDrawingBufferSize=function(y){return y===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),y=new le),y.set(B*Q,G*Q).floor()},this.setDrawingBufferSize=function(y,z,I){B=y,G=z,Q=I,e.width=Math.floor(y*I),e.height=Math.floor(z*I),this.setViewport(0,0,y,z)},this.getCurrentViewport=function(y){return y===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),y=new De),y.copy(v)},this.getViewport=function(y){return y.copy(R)},this.setViewport=function(y,z,I,O){y.isVector4?R.set(y.x,y.y,y.z,y.w):R.set(y,z,I,O),_e.viewport(v.copy(R).multiplyScalar(Q).floor())},this.getScissor=function(y){return y.copy(D)},this.setScissor=function(y,z,I,O){y.isVector4?D.set(y.x,y.y,y.z,y.w):D.set(y,z,I,O),_e.scissor(C.copy(D).multiplyScalar(Q).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(y){_e.setScissorTest(F=y)},this.setOpaqueSort=function(y){H=y},this.setTransparentSort=function(y){P=y},this.getClearColor=function(y){return y===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),y=new be),y.copy(E.getClearColor())},this.setClearColor=function(){E.setClearColor.apply(E,arguments)},this.getClearAlpha=function(){return E.getClearAlpha()},this.setClearAlpha=function(){E.setClearAlpha.apply(E,arguments)},this.clear=function(y,z,I){let O=0;(y===void 0||y)&&(O|=16384),(z===void 0||z)&&(O|=256),(I===void 0||I)&&(O|=1024),V.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Be,!1),Y.dispose(),te.dispose(),Re.dispose(),Ve.dispose(),S.dispose(),k.dispose(),re.dispose(),re.removeEventListener("sessionstart",Ns),re.removeEventListener("sessionend",Is),ae&&(ae.dispose(),ae=null),An.stop()};function Le(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let y=Ce.autoReset,z=oe.enabled,I=oe.autoUpdate,O=oe.needsUpdate,ne=oe.type;de(),Ce.autoReset=y,oe.enabled=z,oe.autoUpdate=I,oe.needsUpdate=O,oe.type=ne}function at(y){let z=y.target;z.removeEventListener("dispose",at),Sn(z)}function Sn(y){Xe(y),Re.remove(y)}function Xe(y){let z=Re.get(y).programs;z!==void 0&&z.forEach(function(I){b.releaseProgram(I)})}function qt(y,z){y.render(function(I){g.renderBufferImmediate(I,z)})}this.renderBufferImmediate=function(y,z){k.initAttributes();let I=Re.get(y);y.hasPositions&&!I.position&&(I.position=V.createBuffer()),y.hasNormals&&!I.normal&&(I.normal=V.createBuffer()),y.hasUvs&&!I.uv&&(I.uv=V.createBuffer()),y.hasColors&&!I.color&&(I.color=V.createBuffer());let O=z.getAttributes();y.hasPositions&&(V.bindBuffer(34962,I.position),V.bufferData(34962,y.positionArray,35048),k.enableAttribute(O.position),V.vertexAttribPointer(O.position,3,5126,!1,0,0)),y.hasNormals&&(V.bindBuffer(34962,I.normal),V.bufferData(34962,y.normalArray,35048),k.enableAttribute(O.normal),V.vertexAttribPointer(O.normal,3,5126,!1,0,0)),y.hasUvs&&(V.bindBuffer(34962,I.uv),V.bufferData(34962,y.uvArray,35048),k.enableAttribute(O.uv),V.vertexAttribPointer(O.uv,2,5126,!1,0,0)),y.hasColors&&(V.bindBuffer(34962,I.color),V.bufferData(34962,y.colorArray,35048),k.enableAttribute(O.color),V.vertexAttribPointer(O.color,3,5126,!1,0,0)),k.disableUnusedAttributes(),V.drawArrays(4,0,y.count),y.count=0},this.renderBufferDirect=function(y,z,I,O,ne,Fe){z===null&&(z=Se);let Me=ne.isMesh&&ne.matrixWorld.determinant()<0,fe=Bs(y,z,O,ne);_e.setMaterial(O,Me);let Te=I.index,he=I.attributes.position;if(Te===null){if(he===void 0||he.count===0)return}else if(Te.count===0)return;let Pe=1;O.wireframe===!0&&(Te=vt.getWireframeAttribute(I),Pe=2),(O.morphTargets||O.morphNormals)&&q.update(ne,I,O,fe),k.setup(ne,O,fe,I,Te);let ge,Ie=ee;Te!==null&&(ge=xt.get(Te),Ie=L,Ie.setIndex(ge));let Xt=Te!==null?Te.count:he.count,ut=I.drawRange.start*Pe,En=I.drawRange.count*Pe,Qe=Fe!==null?Fe.start*Pe:0,Tn=Fe!==null?Fe.count*Pe:Infinity,st=Math.max(ut,Qe),fc=Math.min(Xt,ut+En,Qe+Tn)-1,Ki=Math.max(0,fc-st+1);if(Ki!==0){if(ne.isMesh)O.wireframe===!0?(_e.setLineWidth(O.wireframeLinewidth*we()),Ie.setMode(1)):Ie.setMode(4);else if(ne.isLine){let Si=O.linewidth;Si===void 0&&(Si=1),_e.setLineWidth(Si*we()),ne.isLineSegments?Ie.setMode(1):ne.isLineLoop?Ie.setMode(2):Ie.setMode(3)}else ne.isPoints?Ie.setMode(0):ne.isSprite&&Ie.setMode(4);if(ne.isInstancedMesh)Ie.renderInstances(st,Ki,ne.count);else if(I.isInstancedBufferGeometry){let Si=Math.min(I.instanceCount,I._maxInstanceCount);Ie.renderInstances(st,Ki,Si)}else Ie.render(st,Ki)}},this.compile=function(y,z){h=te.get(y),h.init(),y.traverseVisible(function(I){I.isLight&&I.layers.test(z.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights(),y.traverse(function(I){let O=I.material;if(O)if(Array.isArray(O))for(let ne=0;ne<O.length;ne++){let Fe=O[ne];Qr(Fe,y,I)}else Qr(O,y,I)})};let Nt=null;function cc(y){Nt&&Nt(y)}function Ns(){An.stop()}function Is(){An.start()}let An=new Zo;An.setAnimationLoop(cc),typeof window!="undefined"&&An.setContext(window),this.setAnimationLoop=function(y){Nt=y,re.setAnimationLoop(y),y===null?An.stop():An.start()},re.addEventListener("sessionstart",Ns),re.addEventListener("sessionend",Is),this.render=function(y,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;y.autoUpdate===!0&&y.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(z),z=re.getCamera()),y.isScene===!0&&y.onBeforeRender(g,y,z,M),h=te.get(y,_.length),h.init(),_.push(h),ye.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),K.setFromProjectionMatrix(ye),se=this.localClippingEnabled,$=J.init(this.clippingPlanes,se,z),d=Y.get(y,p.length),d.init(),p.push(d),Us(y,z,0,g.sortObjects),d.finish(),g.sortObjects===!0&&d.sort(H,P),$===!0&&J.beginShadows();let I=h.state.shadowsArray;oe.render(I,y,z),h.setupLights(),h.setupLightsView(z),$===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset(),E.render(d,y);let O=d.opaque,ne=d.transmissive,Fe=d.transparent;O.length>0&&Ji(O,y,z),ne.length>0&&dc(O,ne,y,z),Fe.length>0&&Ji(Fe,y,z),M!==null&&(Ne.updateRenderTargetMipmap(M),Ne.updateMultisampleRenderTarget(M)),y.isScene===!0&&y.onAfterRender(g,y,z),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1),k.resetDefaultState(),T=-1,A=null,_.pop(),_.length>0?h=_[_.length-1]:h=null,p.pop(),p.length>0?d=p[p.length-1]:d=null};function Us(y,z,I,O){if(y.visible===!1)return;if(y.layers.test(z.layers)){if(y.isGroup)I=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(z);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||K.intersectsSprite(y)){O&&pe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ye);let Me=S.update(y),fe=y.material;fe.visible&&d.push(y,Me,fe,I,pe.z,null)}}else if(y.isImmediateRenderObject)O&&pe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ye),d.push(y,null,y.material,I,pe.z,null);else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==Ce.render.frame&&(y.skeleton.update(),y.skeleton.frame=Ce.render.frame),!y.frustumCulled||K.intersectsObject(y))){O&&pe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ye);let Me=S.update(y),fe=y.material;if(Array.isArray(fe)){let Te=Me.groups;for(let he=0,Pe=Te.length;he<Pe;he++){let ge=Te[he],Ie=fe[ge.materialIndex];Ie&&Ie.visible&&d.push(y,Me,Ie,I,pe.z,ge)}}else fe.visible&&d.push(y,Me,fe,I,pe.z,null)}}let Fe=y.children;for(let Me=0,fe=Fe.length;Me<fe;Me++)Us(Fe[Me],z,I,O)}function dc(y,z,I,O){ae===null&&(ae=new rt(1024,1024,{generateMipmaps:!0,minFilter:ar,magFilter:ht,wrapS:bt,wrapT:bt}));let ne=g.getRenderTarget();g.setRenderTarget(ae),g.clear(),Ji(y,I,O),Ne.updateRenderTargetMipmap(ae),g.setRenderTarget(ne),Ji(z,I,O)}function Ji(y,z,I){let O=z.isScene===!0?z.overrideMaterial:null;for(let ne=0,Fe=y.length;ne<Fe;ne++){let Me=y[ne],fe=Me.object,Te=Me.geometry,he=O===null?Me.material:O,Pe=Me.group;if(I.isArrayCamera){let ge=I.cameras;for(let Ie=0,Xt=ge.length;Ie<Xt;Ie++){let ut=ge[Ie];fe.layers.test(ut.layers)&&(_e.viewport(v.copy(ut.viewport)),h.setupLightsView(ut),zs(fe,z,ut,Te,he,Pe))}}else zs(fe,z,I,Te,he,Pe)}}function zs(y,z,I,O,ne,Fe){if(y.onBeforeRender(g,z,I,O,ne,Fe),y.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),y.isImmediateRenderObject){let Me=Bs(I,z,ne,y);_e.setMaterial(ne),k.reset(),qt(y,Me)}else g.renderBufferDirect(I,z,O,ne,y,Fe);y.onAfterRender(g,z,I,O,ne,Fe)}function Qr(y,z,I){z.isScene!==!0&&(z=Se);let O=Re.get(y),ne=h.state.lights,Fe=h.state.shadowsArray,Me=ne.state.version,fe=b.getParameters(y,ne.state,Fe,z,I),Te=b.getProgramCacheKey(fe),he=O.programs;O.environment=y.isMeshStandardMaterial?z.environment:null,O.fog=z.fog,O.envMap=Ve.get(y.envMap||O.environment),he===void 0&&(y.addEventListener("dispose",at),he=new Map,O.programs=he);let Pe=he.get(Te);if(Pe!==void 0){if(O.currentProgram===Pe&&O.lightsStateVersion===Me)return Os(y,fe),Pe}else fe.uniforms=b.getUniforms(y),y.onBuild(fe,g),y.onBeforeCompile(fe,g),Pe=b.acquireProgram(fe,Te),he.set(Te,Pe),O.uniforms=fe.uniforms;let ge=O.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ge.clippingPlanes=J.uniform),Os(y,fe),O.needsLights=hc(y),O.lightsStateVersion=Me,O.needsLights&&(ge.ambientLightColor.value=ne.state.ambient,ge.lightProbe.value=ne.state.probe,ge.directionalLights.value=ne.state.directional,ge.directionalLightShadows.value=ne.state.directionalShadow,ge.spotLights.value=ne.state.spot,ge.spotLightShadows.value=ne.state.spotShadow,ge.rectAreaLights.value=ne.state.rectArea,ge.ltc_1.value=ne.state.rectAreaLTC1,ge.ltc_2.value=ne.state.rectAreaLTC2,ge.pointLights.value=ne.state.point,ge.pointLightShadows.value=ne.state.pointShadow,ge.hemisphereLights.value=ne.state.hemi,ge.directionalShadowMap.value=ne.state.directionalShadowMap,ge.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,ge.spotShadowMap.value=ne.state.spotShadowMap,ge.spotShadowMatrix.value=ne.state.spotShadowMatrix,ge.pointShadowMap.value=ne.state.pointShadowMap,ge.pointShadowMatrix.value=ne.state.pointShadowMatrix);let Ie=Pe.getUniforms(),Xt=xn.seqWithValue(Ie.seq,ge);return O.currentProgram=Pe,O.uniformsList=Xt,Pe}function Os(y,z){let I=Re.get(y);I.outputEncoding=z.outputEncoding,I.instancing=z.instancing,I.skinning=z.skinning,I.numClippingPlanes=z.numClippingPlanes,I.numIntersection=z.numClipIntersection,I.vertexAlphas=z.vertexAlphas}function Bs(y,z,I,O){z.isScene!==!0&&(z=Se),Ne.resetTextureUnits();let ne=z.fog,Fe=I.isMeshStandardMaterial?z.environment:null,Me=M===null?g.outputEncoding:M.texture.encoding,fe=Ve.get(I.envMap||Fe),Te=I.vertexColors===!0&&O.geometry&&O.geometry.attributes.color&&O.geometry.attributes.color.itemSize===4,he=Re.get(I),Pe=h.state.lights;if($===!0&&(se===!0||y!==A)){let st=y===A&&I.id===T;J.setState(I,y,st)}let ge=!1;I.version===he.__version?(he.needsLights&&he.lightsStateVersion!==Pe.state.version||he.outputEncoding!==Me||O.isInstancedMesh&&he.instancing===!1||!O.isInstancedMesh&&he.instancing===!0||O.isSkinnedMesh&&he.skinning===!1||!O.isSkinnedMesh&&he.skinning===!0||he.envMap!==fe||I.fog&&he.fog!==ne||he.numClippingPlanes!==void 0&&(he.numClippingPlanes!==J.numPlanes||he.numIntersection!==J.numIntersection)||he.vertexAlphas!==Te)&&(ge=!0):(ge=!0,he.__version=I.version);let Ie=he.currentProgram;ge===!0&&(Ie=Qr(I,z,O));let Xt=!1,ut=!1,En=!1,Qe=Ie.getUniforms(),Tn=he.uniforms;if(_e.useProgram(Ie.program)&&(Xt=!0,ut=!0,En=!0),I.id!==T&&(T=I.id,ut=!0),Xt||A!==y){if(Qe.setValue(V,"projectionMatrix",y.projectionMatrix),me.logarithmicDepthBuffer&&Qe.setValue(V,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),A!==y&&(A=y,ut=!0,En=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){let st=Qe.map.cameraPosition;st!==void 0&&st.setValue(V,pe.setFromMatrixPosition(y.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Qe.setValue(V,"isOrthographic",y.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||O.isSkinnedMesh)&&Qe.setValue(V,"viewMatrix",y.matrixWorldInverse)}if(O.isSkinnedMesh){Qe.setOptional(V,O,"bindMatrix"),Qe.setOptional(V,O,"bindMatrixInverse");let st=O.skeleton;st&&(me.floatVertexTextures?(st.boneTexture===null&&st.computeBoneTexture(),Qe.setValue(V,"boneTexture",st.boneTexture,Ne),Qe.setValue(V,"boneTextureSize",st.boneTextureSize)):Qe.setOptional(V,st,"boneMatrices"))}return(ut||he.receiveShadow!==O.receiveShadow)&&(he.receiveShadow=O.receiveShadow,Qe.setValue(V,"receiveShadow",O.receiveShadow)),ut&&(Qe.setValue(V,"toneMappingExposure",g.toneMappingExposure),he.needsLights&&uc(Tn,En),ne&&I.fog&&j.refreshFogUniforms(Tn,ne),j.refreshMaterialUniforms(Tn,I,Q,G,ae),xn.upload(V,he.uniformsList,Tn,Ne)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(xn.upload(V,he.uniformsList,Tn,Ne),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Qe.setValue(V,"center",O.center),Qe.setValue(V,"modelViewMatrix",O.modelViewMatrix),Qe.setValue(V,"normalMatrix",O.normalMatrix),Qe.setValue(V,"modelMatrix",O.matrixWorld),Ie}function uc(y,z){y.ambientLightColor.needsUpdate=z,y.lightProbe.needsUpdate=z,y.directionalLights.needsUpdate=z,y.directionalLightShadows.needsUpdate=z,y.pointLights.needsUpdate=z,y.pointLightShadows.needsUpdate=z,y.spotLights.needsUpdate=z,y.spotLightShadows.needsUpdate=z,y.rectAreaLights.needsUpdate=z,y.hemisphereLights.needsUpdate=z}function hc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return f},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return M},this.setRenderTarget=function(y,z=0,I=0){M=y,f=z,m=I,y&&Re.get(y).__webglFramebuffer===void 0&&Ne.setupRenderTarget(y);let O=null,ne=!1,Fe=!1;if(y){let fe=y.texture;(fe.isDataTexture3D||fe.isDataTexture2DArray)&&(Fe=!0);let Te=Re.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(O=Te[z],ne=!0):y.isWebGLMultisampleRenderTarget?O=Re.get(y).__webglMultisampledFramebuffer:O=Te,v.copy(y.viewport),C.copy(y.scissor),U=y.scissorTest}else v.copy(R).multiplyScalar(Q).floor(),C.copy(D).multiplyScalar(Q).floor(),U=F;if(_e.bindFramebuffer(36160,O)&&me.drawBuffers){let fe=!1;if(y)if(y.isWebGLMultipleRenderTargets){let Te=y.texture;if(X.length!==Te.length||X[0]!==36064){for(let he=0,Pe=Te.length;he<Pe;he++)X[he]=36064+he;X.length=Te.length,fe=!0}}else(X.length!==1||X[0]!==36064)&&(X[0]=36064,X.length=1,fe=!0);else(X.length!==1||X[0]!==1029)&&(X[0]=1029,X.length=1,fe=!0);fe&&(me.isWebGL2?V.drawBuffers(X):Ee.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}if(_e.viewport(v),_e.scissor(C),_e.setScissorTest(U),ne){let fe=Re.get(y.texture);V.framebufferTexture2D(36160,36064,34069+z,fe.__webglTexture,I)}else if(Fe){let fe=Re.get(y.texture),Te=z||0;V.framebufferTextureLayer(36160,36064,fe.__webglTexture,I||0,Te)}},this.readRenderTargetPixels=function(y,z,I,O,ne,Fe,Me){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Re.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(fe=fe[Me]),fe){_e.bindFramebuffer(36160,fe);try{let Te=y.texture,he=Te.format,Pe=Te.type;if(he!==nt&&Z.convert(he)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ge=Pe===or&&(Ee.has("EXT_color_buffer_half_float")||me.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Pe!==fa&&Z.convert(Pe)!==V.getParameter(35738)&&!(Pe===Dn&&(me.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V.checkFramebufferStatus(36160)===36053?z>=0&&z<=y.width-O&&I>=0&&I<=y.height-ne&&V.readPixels(z,I,O,ne,Z.convert(he),Z.convert(Pe),Fe):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{let Te=M!==null?Re.get(M).__webglFramebuffer:null;_e.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(y,z,I=0){let O=Math.pow(2,-I),ne=Math.floor(z.image.width*O),Fe=Math.floor(z.image.height*O),Me=Z.convert(z.format);me.isWebGL2&&(Me===6407&&(Me=32849),Me===6408&&(Me=32856)),Ne.setTexture2D(z,0),V.copyTexImage2D(3553,I,Me,y.x,y.y,ne,Fe,0),_e.unbindTexture()},this.copyTextureToTexture=function(y,z,I,O=0){let ne=z.image.width,Fe=z.image.height,Me=Z.convert(I.format),fe=Z.convert(I.type);Ne.setTexture2D(I,0),V.pixelStorei(37440,I.flipY),V.pixelStorei(37441,I.premultiplyAlpha),V.pixelStorei(3317,I.unpackAlignment),z.isDataTexture?V.texSubImage2D(3553,O,y.x,y.y,ne,Fe,Me,fe,z.image.data):z.isCompressedTexture?V.compressedTexSubImage2D(3553,O,y.x,y.y,z.mipmaps[0].width,z.mipmaps[0].height,Me,z.mipmaps[0].data):V.texSubImage2D(3553,O,y.x,y.y,Me,fe,z.image),O===0&&I.generateMipmaps&&V.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(y,z,I,O,ne=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let{width:Fe,height:Me,data:fe}=I.image,Te=Z.convert(O.format),he=Z.convert(O.type),Pe;if(O.isDataTexture3D)Ne.setTexture3D(O,0),Pe=32879;else if(O.isDataTexture2DArray)Ne.setTexture2DArray(O,0),Pe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,O.flipY),V.pixelStorei(37441,O.premultiplyAlpha),V.pixelStorei(3317,O.unpackAlignment);let ge=V.getParameter(3314),Ie=V.getParameter(32878),Xt=V.getParameter(3316),ut=V.getParameter(3315),En=V.getParameter(32877);V.pixelStorei(3314,Fe),V.pixelStorei(32878,Me),V.pixelStorei(3316,y.min.x),V.pixelStorei(3315,y.min.y),V.pixelStorei(32877,y.min.z),V.texSubImage3D(Pe,ne,z.x,z.y,z.z,y.max.x-y.min.x+1,y.max.y-y.min.y+1,y.max.z-y.min.z+1,Te,he,fe),V.pixelStorei(3314,ge),V.pixelStorei(32878,Ie),V.pixelStorei(3316,Xt),V.pixelStorei(3315,ut),V.pixelStorei(32877,En),ne===0&&O.generateMipmaps&&V.generateMipmap(Pe),_e.unbindTexture()},this.initTexture=function(y){Ne.setTexture2D(y,0),_e.unbindTexture()},this.resetState=function(){f=0,m=0,M=null,_e.reset(),k.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var ci=class extends Ye{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};ci.prototype.isScene=!0;var Vi=class extends jt{constructor(e){super();this.type="LineBasicMaterial",this.color=new be(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}};Vi.prototype.isLineBasicMaterial=!0;var ts=class extends jt{constructor(e){super();this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}};ts.prototype.isPointsMaterial=!0;var wl=new ve,ns=new zn,Cr=new Zn,Rr=new w,Wi=class extends Ye{constructor(e=new Oe,t=new ts){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(i),Cr.radius+=a,e.ray.intersectsSphere(Cr)===!1)return;wl.copy(i).invert(),ns.copy(e.ray).applyMatrix4(wl);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){let c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let _=h,g=p;_<g;_++){let x=c.getX(_);Rr.fromBufferAttribute(d,x),Ml(Rr,x,l,i,e,t,this)}}else{let h=Math.max(0,s.start),p=Math.min(d.count,s.start+s.count);for(let _=h,g=p;_<g;_++)Rr.fromBufferAttribute(d,_),Ml(Rr,_,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){let o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};Wi.prototype.isPoints=!0;function Ml(r,e,t,n,i,a,s){let o=ns.distanceSqToPoint(r);if(o<t){let l=new w;ns.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}var Xi=class extends jt{constructor(e){super();this.type="MeshPhongMaterial",this.color=new be(16777215),this.specular=new be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Do,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};Xi.prototype.isMeshPhongMaterial=!0;var Sl={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Al=class{constructor(e,t,n){let i=this,a=!1,s=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,a===!1&&i.onStart!==void 0&&i.onStart(u,s,o),a=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,o),s===o&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}},Um=new Al,di=class{constructor(e){this.manager=e!==void 0?e:Um,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,a){n.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},is=class extends di{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,s=Sl.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;let o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function l(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),Sl.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(u){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),i&&i(u),a.manager.itemError(e),a.manager.itemEnd(e)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}},El=class extends di{constructor(e){super(e)}load(e,t,n,i){let a=new Hi,s=new is(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function l(c){s.load(e[c],function(u){a.images[c]=u,o++,o===6&&(a.needsUpdate=!0,t&&t(a))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return a}},Tl=class extends di{constructor(e){super(e)}load(e,t,n,i){let a=new wt,s=new is(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o;let l=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;a.format=l?Xn:nt,a.needsUpdate=!0,t!==void 0&&t(a)},n,i),a}},rs=class extends Ye{constructor(e,t=1){super();this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};rs.prototype.isLight=!0;var ui=class extends Er{constructor(e=-1,t=1,n=1,i=-1,a=.1,s=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,a=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};ui.prototype.isOrthographicCamera=!0;var Ll=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}},as=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Pl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Pl(){return(typeof performance=="undefined"?Date:performance).now()}var Fl="\\[\\]\\.:\\/",ss="[^"+Fl+"]",zm="[^"+Fl.replace("\\.","")+"]",Mg=/((?:WC+[\/:])*)/.source.replace("WC",ss),Sg=/(WCOD+)?/.source.replace("WCOD",zm),Ag=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ss),Eg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ss),Dr=class{constructor(e,t,n=0,i=Infinity){this.ray=new zn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!1,n=[]){return os(e,this,n,t),n.sort(Cl),n}intersectObjects(e,t=!1,n=[]){for(let i=0,a=e.length;i<a;i++)os(e[i],this,n,t);return n.sort(Cl),n}};function Cl(r,e){return r.distance-e.distance}function os(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){let i=r.children;for(let a=0,s=i.length;a<s;a++)os(i[a],e,t,!0)}}var Lt=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Om=new fn({side:Ke,depthWrite:!1,depthTest:!1}),Tg=new Vt(new Ar,Om);di.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Ll.extractUrlBase(r)};di.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};St.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};St.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};St.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};St.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};St.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};Zn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Pr.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};et.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};et.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};et.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};et.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};et.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};et.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};ve.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};ve.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};ve.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new w().setFromMatrixColumn(this,3)};ve.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};ve.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};ve.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ve.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ve.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};ve.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};ve.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ve.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};ve.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};ve.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};ve.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};ve.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};ve.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ve.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};ve.prototype.makeFrustum=function(r,e,t,n,i,a){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,a)};ve.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Ht.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};Mt.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};Mt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};zn.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};zn.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};zn.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};Ze.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};Ze.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};Ze.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};Ze.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};Ze.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};Ze.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Ze.getBarycoord(r,e,t,n,i)};Ze.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Ze.getNormal(r,e,t,n)};le.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};le.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};le.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};w.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};w.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};w.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};w.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};w.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};w.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};w.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};w.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};w.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};De.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};De.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ye.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};Ye.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Ye.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};Ye.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Ye.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Ye.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Vt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Vt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),nu},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});ft.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties(rs.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(ze.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===zt},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(zt)}}});ze.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?zt:xa),this};ze.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},ze.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Oe.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};Oe.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new ze(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};Oe.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};Oe.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Oe.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Oe.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};Oe.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Oe.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});ci.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(jt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new be}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===co}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}}});Object.defineProperties(ke.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});Ue.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};Ue.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};Ue.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Ue.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Ue.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Ue.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Ue.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Ue.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Ue.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Ue.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Ue.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Ue.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Ue.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Ue.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Ue.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};Ue.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Ue.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Ue.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Ue.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Ue.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Ue.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Ue.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Ue.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Ue.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Ue.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Ue.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?Ro:Ni}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(yl.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(rt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});Tr.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};Tr.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};Nn.crossOrigin=void 0;Nn.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let i=new Tl;i.setCrossOrigin(this.crossOrigin);let a=i.load(r,t,void 0,n);return e&&(a.mapping=e),a};Nn.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let i=new El;i.setCrossOrigin(this.crossOrigin);let a=i.load(r,t,void 0,n);return e&&(a.mapping=e),a};Nn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Nn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:so}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=so);var Ct=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},Bm=new ui(-1,1,1,-1,0,1),ls=new Oe;ls.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3));ls.setAttribute("uv",new yt([0,2,0,0,2,0],2));var vn=class{constructor(e){this._mesh=new Vt(ls,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Bm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Rl={uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`},cs=class extends Ct{constructor(e=.96){super();Rl===void 0&&console.error("THREE.AfterimagePass relies on AfterimageShader"),this.shader=Rl,this.uniforms=_n.clone(this.shader.uniforms),this.uniforms.damp.value=e,this.textureComp=new rt(window.innerWidth,window.innerHeight,{minFilter:qe,magFilter:ht,format:nt}),this.textureOld=new rt(window.innerWidth,window.innerHeight,{minFilter:qe,magFilter:ht,format:nt}),this.shaderMaterial=new ke({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new vn(this.shaderMaterial);let t=new fn;this.copyFsQuad=new vn(t)}render(e,t,n){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=n.texture,e.setRenderTarget(this.textureComp),this.compFsQuad.render(e),this.copyFsQuad.material.map=this.textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this.copyFsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.copyFsQuad.render(e));let i=this.textureOld;this.textureOld=this.textureComp,this.textureComp=i}setSize(e,t){this.textureComp.setSize(e,t),this.textureOld.setSize(e,t)}};var Dl={type:"change"},ds={type:"start"},us={type:"end"},hs=class extends $t{constructor(e,t){super();t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new w,this.minDistance=0,this.maxDistance=Infinity,this.minZoom=0,this.maxZoom=Infinity,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-Infinity,this.maxAzimuthAngle=Infinity,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pn.ROTATE,MIDDLE:Pn.DOLLY,RIGHT:Pn.PAN},this.touches={ONE:Fn.ROTATE,TWO:Fn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.listenToKeyEvents=function(E){E.addEventListener("keydown",j),this._domElementKeyEvents=E},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Dl),n.update(),a=i.NONE},this.update=function(){let E=new w,q=new Mt().setFromUnitVectors(e.up,new w(0,1,0)),ee=q.clone().invert(),L=new w,Z=new Mt,k=2*Math.PI;return function(){let re=n.object.position;E.copy(re).sub(n.target),E.applyQuaternion(q),o.setFromVector3(E),n.autoRotate&&a===i.NONE&&C(A()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Le=n.minAzimuthAngle,Be=n.maxAzimuthAngle;return isFinite(Le)&&isFinite(Be)&&(Le<-Math.PI?Le+=k:Le>Math.PI&&(Le-=k),Be<-Math.PI?Be+=k:Be>Math.PI&&(Be-=k),Le<=Be?o.theta=Math.max(Le,Math.min(Be,o.theta)):o.theta=o.theta>(Le+Be)/2?Math.max(Le,o.theta):Math.min(Be,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),E.setFromSpherical(o),E.applyQuaternion(ee),re.copy(n.target).add(E),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||L.distanceToSquared(n.object.position)>s||8*(1-Z.dot(n.object.quaternion))>s?(n.dispatchEvent(Dl),L.copy(n.object.position),Z.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",oe),n.domElement.removeEventListener("pointerdown",Re),n.domElement.removeEventListener("wheel",b),n.domElement.removeEventListener("touchstart",Y),n.domElement.removeEventListener("touchend",J),n.domElement.removeEventListener("touchmove",te),n.domElement.ownerDocument.removeEventListener("pointermove",Ne),n.domElement.ownerDocument.removeEventListener("pointerup",Ve),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",j)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},a=i.NONE,s=1e-6,o=new Lt,l=new Lt,c=1,u=new w,d=!1,h=new le,p=new le,_=new le,g=new le,x=new le,f=new le,m=new le,M=new le,T=new le;function A(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function C(E){l.theta-=E}function U(E){l.phi-=E}let B=function(){let E=new w;return function(ee,L){E.setFromMatrixColumn(L,0),E.multiplyScalar(-ee),u.add(E)}}(),G=function(){let E=new w;return function(ee,L){n.screenSpacePanning===!0?E.setFromMatrixColumn(L,1):(E.setFromMatrixColumn(L,0),E.crossVectors(n.object.up,E)),E.multiplyScalar(ee),u.add(E)}}(),Q=function(){let E=new w;return function(ee,L){let Z=n.domElement;if(n.object.isPerspectiveCamera){let k=n.object.position;E.copy(k).sub(n.target);let de=E.length();de*=Math.tan(n.object.fov/2*Math.PI/180),B(2*ee*de/Z.clientHeight,n.object.matrix),G(2*L*de/Z.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(ee*(n.object.right-n.object.left)/n.object.zoom/Z.clientWidth,n.object.matrix),G(L*(n.object.top-n.object.bottom)/n.object.zoom/Z.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function H(E){n.object.isPerspectiveCamera?c/=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*E)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function P(E){n.object.isPerspectiveCamera?c*=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/E)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function R(E){h.set(E.clientX,E.clientY)}function D(E){m.set(E.clientX,E.clientY)}function F(E){g.set(E.clientX,E.clientY)}function X(E){p.set(E.clientX,E.clientY),_.subVectors(p,h).multiplyScalar(n.rotateSpeed);let q=n.domElement;C(2*Math.PI*_.x/q.clientHeight),U(2*Math.PI*_.y/q.clientHeight),h.copy(p),n.update()}function K(E){M.set(E.clientX,E.clientY),T.subVectors(M,m),T.y>0?H(v()):T.y<0&&P(v()),m.copy(M),n.update()}function $(E){x.set(E.clientX,E.clientY),f.subVectors(x,g).multiplyScalar(n.panSpeed),Q(f.x,f.y),g.copy(x),n.update()}function se(E){E.deltaY<0?P(v()):E.deltaY>0&&H(v()),n.update()}function ae(E){let q=!1;switch(E.code){case n.keys.UP:Q(0,n.keyPanSpeed),q=!0;break;case n.keys.BOTTOM:Q(0,-n.keyPanSpeed),q=!0;break;case n.keys.LEFT:Q(n.keyPanSpeed,0),q=!0;break;case n.keys.RIGHT:Q(-n.keyPanSpeed,0),q=!0;break}q&&(E.preventDefault(),n.update())}function ye(E){if(E.touches.length==1)h.set(E.touches[0].pageX,E.touches[0].pageY);else{let q=.5*(E.touches[0].pageX+E.touches[1].pageX),ee=.5*(E.touches[0].pageY+E.touches[1].pageY);h.set(q,ee)}}function pe(E){if(E.touches.length==1)g.set(E.touches[0].pageX,E.touches[0].pageY);else{let q=.5*(E.touches[0].pageX+E.touches[1].pageX),ee=.5*(E.touches[0].pageY+E.touches[1].pageY);g.set(q,ee)}}function Se(E){let q=E.touches[0].pageX-E.touches[1].pageX,ee=E.touches[0].pageY-E.touches[1].pageY,L=Math.sqrt(q*q+ee*ee);m.set(0,L)}function we(E){n.enableZoom&&Se(E),n.enablePan&&pe(E)}function V(E){n.enableZoom&&Se(E),n.enableRotate&&ye(E)}function je(E){if(E.touches.length==1)p.set(E.touches[0].pageX,E.touches[0].pageY);else{let ee=.5*(E.touches[0].pageX+E.touches[1].pageX),L=.5*(E.touches[0].pageY+E.touches[1].pageY);p.set(ee,L)}_.subVectors(p,h).multiplyScalar(n.rotateSpeed);let q=n.domElement;C(2*Math.PI*_.x/q.clientHeight),U(2*Math.PI*_.y/q.clientHeight),h.copy(p)}function Ee(E){if(E.touches.length==1)x.set(E.touches[0].pageX,E.touches[0].pageY);else{let q=.5*(E.touches[0].pageX+E.touches[1].pageX),ee=.5*(E.touches[0].pageY+E.touches[1].pageY);x.set(q,ee)}f.subVectors(x,g).multiplyScalar(n.panSpeed),Q(f.x,f.y),g.copy(x)}function me(E){let q=E.touches[0].pageX-E.touches[1].pageX,ee=E.touches[0].pageY-E.touches[1].pageY,L=Math.sqrt(q*q+ee*ee);M.set(0,L),T.set(0,Math.pow(M.y/m.y,n.zoomSpeed)),H(T.y),m.copy(M)}function _e(E){n.enableZoom&&me(E),n.enablePan&&Ee(E)}function Ce(E){n.enableZoom&&me(E),n.enableRotate&&je(E)}function Re(E){if(n.enabled!==!1)switch(E.pointerType){case"mouse":case"pen":xt(E);break}}function Ne(E){if(n.enabled!==!1)switch(E.pointerType){case"mouse":case"pen":vt(E);break}}function Ve(E){switch(E.pointerType){case"mouse":case"pen":S();break}}function xt(E){E.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus();let q;switch(E.button){case 0:q=n.mouseButtons.LEFT;break;case 1:q=n.mouseButtons.MIDDLE;break;case 2:q=n.mouseButtons.RIGHT;break;default:q=-1}switch(q){case Pn.DOLLY:if(n.enableZoom===!1)return;D(E),a=i.DOLLY;break;case Pn.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enablePan===!1)return;F(E),a=i.PAN}else{if(n.enableRotate===!1)return;R(E),a=i.ROTATE}break;case Pn.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enableRotate===!1)return;R(E),a=i.ROTATE}else{if(n.enablePan===!1)return;F(E),a=i.PAN}break;default:a=i.NONE}a!==i.NONE&&(n.domElement.ownerDocument.addEventListener("pointermove",Ne),n.domElement.ownerDocument.addEventListener("pointerup",Ve),n.dispatchEvent(ds))}function vt(E){if(n.enabled!==!1)switch(E.preventDefault(),a){case i.ROTATE:if(n.enableRotate===!1)return;X(E);break;case i.DOLLY:if(n.enableZoom===!1)return;K(E);break;case i.PAN:if(n.enablePan===!1)return;$(E);break}}function S(E){n.domElement.ownerDocument.removeEventListener("pointermove",Ne),n.domElement.ownerDocument.removeEventListener("pointerup",Ve),n.enabled!==!1&&(n.dispatchEvent(us),a=i.NONE)}function b(E){n.enabled===!1||n.enableZoom===!1||a!==i.NONE&&a!==i.ROTATE||(E.preventDefault(),n.dispatchEvent(ds),se(E),n.dispatchEvent(us))}function j(E){n.enabled===!1||n.enablePan===!1||ae(E)}function Y(E){if(n.enabled!==!1){switch(E.preventDefault(),E.touches.length){case 1:switch(n.touches.ONE){case Fn.ROTATE:if(n.enableRotate===!1)return;ye(E),a=i.TOUCH_ROTATE;break;case Fn.PAN:if(n.enablePan===!1)return;pe(E),a=i.TOUCH_PAN;break;default:a=i.NONE}break;case 2:switch(n.touches.TWO){case Fn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;we(E),a=i.TOUCH_DOLLY_PAN;break;case Fn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;V(E),a=i.TOUCH_DOLLY_ROTATE;break;default:a=i.NONE}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(ds)}}function te(E){if(n.enabled!==!1)switch(E.preventDefault(),a){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;je(E),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Ee(E),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_e(E),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ce(E),n.update();break;default:a=i.NONE}}function J(E){n.enabled!==!1&&(n.dispatchEvent(us),a=i.NONE)}function oe(E){n.enabled!==!1&&E.preventDefault()}n.domElement.addEventListener("contextmenu",oe),n.domElement.addEventListener("pointerdown",Re),n.domElement.addEventListener("wheel",b,{passive:!1}),n.domElement.addEventListener("touchstart",Y,{passive:!1}),n.domElement.addEventListener("touchend",J),n.domElement.addEventListener("touchmove",te,{passive:!1}),this.update()}};var hi={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`};var On=class extends Ct{constructor(e,t){super();this.textureID=t!==void 0?t:"tDiffuse",e instanceof ke?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_n.clone(e.uniforms),this.material=new ke({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new vn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}};var fs=class extends Ct{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),a.buffers.stencil.setFunc(i.ALWAYS,s,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(i.EQUAL,1,4294967295),a.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),a.buffers.stencil.setLocked(!0)}},Nl=class extends Ct{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},ps=class{constructor(e,t){if(this.renderer=e,t===void 0){let n={minFilter:qe,magFilter:qe,format:nt},i=e.getSize(new le);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new rt(this._width*this._pixelRatio,this._height*this._pixelRatio,n),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],hi===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),On===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new On(hi),this.clock=new as}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,a=this.passes.length;i<a;i++){let s=this.passes[i];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),s.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}fs!==void 0&&(s instanceof fs?n=!0:s instanceof Nl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}},Yg=new ui(-1,1,1,-1,0,1),Il=new Oe;Il.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3));Il.setAttribute("uv",new yt([0,2,0,0,2,0],2));var ms=class extends Ct{constructor(e,t,n,i,a){super();this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=a!==void 0?a:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new be}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==void 0&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),a=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,a),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=s),e.autoClear=i}};var Ul={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new be(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},yn=class extends Ct{constructor(e,t,n,i){super();this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new be(0,0,0);let a={minFilter:qe,magFilter:qe,format:nt};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new rt(s,o,a),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let p=new rt(s,o,a);p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let _=new rt(s,o,a);_.texture.name="UnrealBloomPass.v"+h,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),s=Math.round(s/2),o=Math.round(o/2)}Ul===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");let l=Ul;this.highPassUniforms=_n.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ke({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{}}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new le(s,o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,hi===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");let d=hi;this.copyUniforms=_n.clone(d.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new ke({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:Zt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new be,this.oldClearAlpha=1,this.basic=new fn,this.fsQuad=new vn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,i),this.renderTargetsVertical[a].setSize(n,i),this.separableBlurMaterials[a].uniforms.texSize.value=new le(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=yn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=yn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}getSeperableBlurMaterial(e){return new ke({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ke({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform sampler2D dirtTexture;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};yn.BlurDirectionX=new le(1,0);yn.BlurDirectionY=new le(0,1);var zl={uniforms:{tDiffuse:{value:null},resolution:{value:new le(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		#define FXAA_PC 1
		#define FXAA_GLSL_100 1
		#define FXAA_QUALITY_PRESET 12

		#define FXAA_GREEN_AS_LUMA 1

		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_PC_CONSOLE
				//
				// The console algorithm for PC is included
				// for developers targeting really low spec machines.
				// Likely better to just run FXAA_PC, and use a really low preset.
				//
				#define FXAA_PC_CONSOLE 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GLSL_120
				#define FXAA_GLSL_120 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GLSL_130
				#define FXAA_GLSL_130 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_3
				#define FXAA_HLSL_3 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_4
				#define FXAA_HLSL_4 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_5
				#define FXAA_HLSL_5 0
		#endif
		/*==========================================================================*/
		#ifndef FXAA_GREEN_AS_LUMA
				//
				// For those using non-linear color,
				// and either not able to get luma in alpha, or not wanting to,
				// this enables FXAA to run using green as a proxy for luma.
				// So with this enabled, no need to pack luma in alpha.
				//
				// This will turn off AA on anything which lacks some amount of green.
				// Pure red and blue or combination of only R and B, will get no AA.
				//
				// Might want to lower the settings for both,
				//		fxaaConsoleEdgeThresholdMin
				//		fxaaQualityEdgeThresholdMin
				// In order to insure AA does not get turned off on colors
				// which contain a minor amount of green.
				//
				// 1 = On.
				// 0 = Off.
				//
				#define FXAA_GREEN_AS_LUMA 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_EARLY_EXIT
				//
				// Controls algorithm's early exit path.
				// On PS3 turning this ON adds 2 cycles to the shader.
				// On 360 turning this OFF adds 10ths of a millisecond to the shader.
				// Turning this off on console will result in a more blurry image.
				// So this defaults to on.
				//
				// 1 = On.
				// 0 = Off.
				//
				#define FXAA_EARLY_EXIT 1
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_DISCARD
				//
				// Only valid for PC OpenGL currently.
				// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
				//
				// 1 = Use discard on pixels which don't need AA.
				//		 For APIs which enable concurrent TEX+ROP from same surface.
				// 0 = Return unchanged color on pixels which don't need AA.
				//
				#define FXAA_DISCARD 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_FAST_PIXEL_OFFSET
				//
				// Used for GLSL 120 only.
				//
				// 1 = GL API supports fast pixel offsets
				// 0 = do not use fast pixel offsets
				//
				#ifdef GL_EXT_gpu_shader4
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifdef GL_NV_gpu_shader5
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifdef GL_ARB_gpu_shader5
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifndef FXAA_FAST_PIXEL_OFFSET
						#define FXAA_FAST_PIXEL_OFFSET 0
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GATHER4_ALPHA
				//
				// 1 = API supports gather4 on alpha channel.
				// 0 = API does not support gather4 on alpha channel.
				//
				#if (FXAA_HLSL_5 == 1)
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifdef GL_ARB_gpu_shader5
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifdef GL_NV_gpu_shader5
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifndef FXAA_GATHER4_ALPHA
						#define FXAA_GATHER4_ALPHA 0
				#endif
		#endif


		/*============================================================================
														FXAA QUALITY - TUNING KNOBS
		------------------------------------------------------------------------------
		NOTE the other tuning knobs are now in the shader function inputs!
		============================================================================*/
		#ifndef FXAA_QUALITY_PRESET
				//
				// Choose the quality preset.
				// This needs to be compiled into the shader as it effects code.
				// Best option to include multiple presets is to
				// in each shader define the preset, then include this file.
				//
				// OPTIONS
				// -----------------------------------------------------------------------
				// 10 to 15 - default medium dither (10=fastest, 15=highest quality)
				// 20 to 29 - less dither, more expensive (20=fastest, 29=highest quality)
				// 39			 - no dither, very expensive
				//
				// NOTES
				// -----------------------------------------------------------------------
				// 12 = slightly faster then FXAA 3.9 and higher edge quality (default)
				// 13 = about same speed as FXAA 3.9 and better than 12
				// 23 = closest to FXAA 3.9 visually and performance wise
				//	_ = the lowest digit is directly related to performance
				// _	= the highest digit is directly related to style
				//
				#define FXAA_QUALITY_PRESET 12
		#endif


		/*============================================================================

															 FXAA QUALITY - PRESETS

		============================================================================*/

		/*============================================================================
												 FXAA QUALITY - MEDIUM DITHER PRESETS
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 10)
				#define FXAA_QUALITY_PS 3
				#define FXAA_QUALITY_P0 1.5
				#define FXAA_QUALITY_P1 3.0
				#define FXAA_QUALITY_P2 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 11)
				#define FXAA_QUALITY_PS 4
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 3.0
				#define FXAA_QUALITY_P3 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 12)
				#define FXAA_QUALITY_PS 5
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 4.0
				#define FXAA_QUALITY_P4 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 13)
				#define FXAA_QUALITY_PS 6
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 4.0
				#define FXAA_QUALITY_P5 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 14)
				#define FXAA_QUALITY_PS 7
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 4.0
				#define FXAA_QUALITY_P6 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 15)
				#define FXAA_QUALITY_PS 8
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 4.0
				#define FXAA_QUALITY_P7 12.0
		#endif

		/*============================================================================
												 FXAA QUALITY - LOW DITHER PRESETS
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 20)
				#define FXAA_QUALITY_PS 3
				#define FXAA_QUALITY_P0 1.5
				#define FXAA_QUALITY_P1 2.0
				#define FXAA_QUALITY_P2 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 21)
				#define FXAA_QUALITY_PS 4
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 22)
				#define FXAA_QUALITY_PS 5
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 23)
				#define FXAA_QUALITY_PS 6
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 24)
				#define FXAA_QUALITY_PS 7
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 3.0
				#define FXAA_QUALITY_P6 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 25)
				#define FXAA_QUALITY_PS 8
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 4.0
				#define FXAA_QUALITY_P7 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 26)
				#define FXAA_QUALITY_PS 9
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 4.0
				#define FXAA_QUALITY_P8 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 27)
				#define FXAA_QUALITY_PS 10
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 4.0
				#define FXAA_QUALITY_P9 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 28)
				#define FXAA_QUALITY_PS 11
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 4.0
				#define FXAA_QUALITY_P10 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 29)
				#define FXAA_QUALITY_PS 12
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 2.0
				#define FXAA_QUALITY_P10 4.0
				#define FXAA_QUALITY_P11 8.0
		#endif

		/*============================================================================
												 FXAA QUALITY - EXTREME QUALITY
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 39)
				#define FXAA_QUALITY_PS 12
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.0
				#define FXAA_QUALITY_P2 1.0
				#define FXAA_QUALITY_P3 1.0
				#define FXAA_QUALITY_P4 1.0
				#define FXAA_QUALITY_P5 1.5
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 2.0
				#define FXAA_QUALITY_P10 4.0
				#define FXAA_QUALITY_P11 8.0
		#endif



		/*============================================================================

																		API PORTING

		============================================================================*/
		#if (FXAA_GLSL_100 == 1) || (FXAA_GLSL_120 == 1) || (FXAA_GLSL_130 == 1)
				#define FxaaBool bool
				#define FxaaDiscard discard
				#define FxaaFloat float
				#define FxaaFloat2 vec2
				#define FxaaFloat3 vec3
				#define FxaaFloat4 vec4
				#define FxaaHalf float
				#define FxaaHalf2 vec2
				#define FxaaHalf3 vec3
				#define FxaaHalf4 vec4
				#define FxaaInt2 ivec2
				#define FxaaSat(x) clamp(x, 0.0, 1.0)
				#define FxaaTex sampler2D
		#else
				#define FxaaBool bool
				#define FxaaDiscard clip(-1)
				#define FxaaFloat float
				#define FxaaFloat2 float2
				#define FxaaFloat3 float3
				#define FxaaFloat4 float4
				#define FxaaHalf half
				#define FxaaHalf2 half2
				#define FxaaHalf3 half3
				#define FxaaHalf4 half4
				#define FxaaSat(x) saturate(x)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_100 == 1)
			#define FxaaTexTop(t, p) texture2D(t, p, 0.0)
			#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), 0.0)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_120 == 1)
				// Requires,
				//	#version 120
				// And at least,
				//	#extension GL_EXT_gpu_shader4 : enable
				//	(or set FXAA_FAST_PIXEL_OFFSET 1 to work like DX9)
				#define FxaaTexTop(t, p) texture2DLod(t, p, 0.0)
				#if (FXAA_FAST_PIXEL_OFFSET == 1)
						#define FxaaTexOff(t, p, o, r) texture2DLodOffset(t, p, 0.0, o)
				#else
						#define FxaaTexOff(t, p, o, r) texture2DLod(t, p + (o * r), 0.0)
				#endif
				#if (FXAA_GATHER4_ALPHA == 1)
						// use #extension GL_ARB_gpu_shader5 : enable
						#define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
						#define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
						#define FxaaTexGreen4(t, p) textureGather(t, p, 1)
						#define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_130 == 1)
				// Requires "#version 130" or better
				#define FxaaTexTop(t, p) textureLod(t, p, 0.0)
				#define FxaaTexOff(t, p, o, r) textureLodOffset(t, p, 0.0, o)
				#if (FXAA_GATHER4_ALPHA == 1)
						// use #extension GL_ARB_gpu_shader5 : enable
						#define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
						#define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
						#define FxaaTexGreen4(t, p) textureGather(t, p, 1)
						#define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_3 == 1)
				#define FxaaInt2 float2
				#define FxaaTex sampler2D
				#define FxaaTexTop(t, p) tex2Dlod(t, float4(p, 0.0, 0.0))
				#define FxaaTexOff(t, p, o, r) tex2Dlod(t, float4(p + (o * r), 0, 0))
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_4 == 1)
				#define FxaaInt2 int2
				struct FxaaTex { SamplerState smpl; Texture2D tex; };
				#define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
				#define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_5 == 1)
				#define FxaaInt2 int2
				struct FxaaTex { SamplerState smpl; Texture2D tex; };
				#define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
				#define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
				#define FxaaTexAlpha4(t, p) t.tex.GatherAlpha(t.smpl, p)
				#define FxaaTexOffAlpha4(t, p, o) t.tex.GatherAlpha(t.smpl, p, o)
				#define FxaaTexGreen4(t, p) t.tex.GatherGreen(t.smpl, p)
				#define FxaaTexOffGreen4(t, p, o) t.tex.GatherGreen(t.smpl, p, o)
		#endif


		/*============================================================================
											 GREEN AS LUMA OPTION SUPPORT FUNCTION
		============================================================================*/
		#if (FXAA_GREEN_AS_LUMA == 0)
				FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.w; }
		#else
				FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.y; }
		#endif




		/*============================================================================

																 FXAA3 QUALITY - PC

		============================================================================*/
		#if (FXAA_PC == 1)
		/*--------------------------------------------------------------------------*/
		FxaaFloat4 FxaaPixelShader(
				//
				// Use noperspective interpolation here (turn off perspective interpolation).
				// {xy} = center of pixel
				FxaaFloat2 pos,
				//
				// Used only for FXAA Console, and not used on the 360 version.
				// Use noperspective interpolation here (turn off perspective interpolation).
				// {xy_} = upper left of pixel
				// {_zw} = lower right of pixel
				FxaaFloat4 fxaaConsolePosPos,
				//
				// Input color texture.
				// {rgb_} = color in linear or perceptual color space
				// if (FXAA_GREEN_AS_LUMA == 0)
				//		 {__a} = luma in perceptual color space (not linear)
				FxaaTex tex,
				//
				// Only used on the optimized 360 version of FXAA Console.
				// For everything but 360, just use the same input here as for "tex".
				// For 360, same texture, just alias with a 2nd sampler.
				// This sampler needs to have an exponent bias of -1.
				FxaaTex fxaaConsole360TexExpBiasNegOne,
				//
				// Only used on the optimized 360 version of FXAA Console.
				// For everything but 360, just use the same input here as for "tex".
				// For 360, same texture, just alias with a 3nd sampler.
				// This sampler needs to have an exponent bias of -2.
				FxaaTex fxaaConsole360TexExpBiasNegTwo,
				//
				// Only used on FXAA Quality.
				// This must be from a constant/uniform.
				// {x_} = 1.0/screenWidthInPixels
				// {_y} = 1.0/screenHeightInPixels
				FxaaFloat2 fxaaQualityRcpFrame,
				//
				// Only used on FXAA Console.
				// This must be from a constant/uniform.
				// This effects sub-pixel AA quality and inversely sharpness.
				//	 Where N ranges between,
				//		 N = 0.50 (default)
				//		 N = 0.33 (sharper)
				// {x__} = -N/screenWidthInPixels
				// {_y_} = -N/screenHeightInPixels
				// {_z_} =	N/screenWidthInPixels
				// {__w} =	N/screenHeightInPixels
				FxaaFloat4 fxaaConsoleRcpFrameOpt,
				//
				// Only used on FXAA Console.
				// Not used on 360, but used on PS3 and PC.
				// This must be from a constant/uniform.
				// {x__} = -2.0/screenWidthInPixels
				// {_y_} = -2.0/screenHeightInPixels
				// {_z_} =	2.0/screenWidthInPixels
				// {__w} =	2.0/screenHeightInPixels
				FxaaFloat4 fxaaConsoleRcpFrameOpt2,
				//
				// Only used on FXAA Console.
				// Only used on 360 in place of fxaaConsoleRcpFrameOpt2.
				// This must be from a constant/uniform.
				// {x__} =	8.0/screenWidthInPixels
				// {_y_} =	8.0/screenHeightInPixels
				// {_z_} = -4.0/screenWidthInPixels
				// {__w} = -4.0/screenHeightInPixels
				FxaaFloat4 fxaaConsole360RcpFrameOpt2,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_SUBPIX define.
				// It is here now to allow easier tuning.
				// Choose the amount of sub-pixel aliasing removal.
				// This can effect sharpness.
				//	 1.00 - upper limit (softer)
				//	 0.75 - default amount of filtering
				//	 0.50 - lower limit (sharper, less sub-pixel aliasing removal)
				//	 0.25 - almost off
				//	 0.00 - completely off
				FxaaFloat fxaaQualitySubpix,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_EDGE_THRESHOLD define.
				// It is here now to allow easier tuning.
				// The minimum amount of local contrast required to apply algorithm.
				//	 0.333 - too little (faster)
				//	 0.250 - low quality
				//	 0.166 - default
				//	 0.125 - high quality
				//	 0.063 - overkill (slower)
				FxaaFloat fxaaQualityEdgeThreshold,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_EDGE_THRESHOLD_MIN define.
				// It is here now to allow easier tuning.
				// Trims the algorithm from processing darks.
				//	 0.0833 - upper limit (default, the start of visible unfiltered edges)
				//	 0.0625 - high quality (faster)
				//	 0.0312 - visible limit (slower)
				// Special notes when using FXAA_GREEN_AS_LUMA,
				//	 Likely want to set this to zero.
				//	 As colors that are mostly not-green
				//	 will appear very dark in the green channel!
				//	 Tune by looking at mostly non-green content,
				//	 then start at zero and increase until aliasing is a problem.
				FxaaFloat fxaaQualityEdgeThresholdMin,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_SHARPNESS define.
				// It is here now to allow easier tuning.
				// This does not effect PS3, as this needs to be compiled in.
				//	 Use FXAA_CONSOLE_PS3_EDGE_SHARPNESS for PS3.
				//	 Due to the PS3 being ALU bound,
				//	 there are only three safe values here: 2 and 4 and 8.
				//	 These options use the shaders ability to a free *|/ by 2|4|8.
				// For all other platforms can be a non-power of two.
				//	 8.0 is sharper (default!!!)
				//	 4.0 is softer
				//	 2.0 is really soft (good only for vector graphics inputs)
				FxaaFloat fxaaConsoleEdgeSharpness,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_THRESHOLD define.
				// It is here now to allow easier tuning.
				// This does not effect PS3, as this needs to be compiled in.
				//	 Use FXAA_CONSOLE_PS3_EDGE_THRESHOLD for PS3.
				//	 Due to the PS3 being ALU bound,
				//	 there are only two safe values here: 1/4 and 1/8.
				//	 These options use the shaders ability to a free *|/ by 2|4|8.
				// The console setting has a different mapping than the quality setting.
				// Other platforms can use other values.
				//	 0.125 leaves less aliasing, but is softer (default!!!)
				//	 0.25 leaves more aliasing, and is sharper
				FxaaFloat fxaaConsoleEdgeThreshold,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_THRESHOLD_MIN define.
				// It is here now to allow easier tuning.
				// Trims the algorithm from processing darks.
				// The console setting has a different mapping than the quality setting.
				// This only applies when FXAA_EARLY_EXIT is 1.
				// This does not apply to PS3,
				// PS3 was simplified to avoid more shader instructions.
				//	 0.06 - faster but more aliasing in darks
				//	 0.05 - default
				//	 0.04 - slower and less aliasing in darks
				// Special notes when using FXAA_GREEN_AS_LUMA,
				//	 Likely want to set this to zero.
				//	 As colors that are mostly not-green
				//	 will appear very dark in the green channel!
				//	 Tune by looking at mostly non-green content,
				//	 then start at zero and increase until aliasing is a problem.
				FxaaFloat fxaaConsoleEdgeThresholdMin,
				//
				// Extra constants for 360 FXAA Console only.
				// Use zeros or anything else for other platforms.
				// These must be in physical constant registers and NOT immediates.
				// Immediates will result in compiler un-optimizing.
				// {xyzw} = float4(1.0, -1.0, 0.25, -0.25)
				FxaaFloat4 fxaaConsole360ConstDir
		) {
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posM;
				posM.x = pos.x;
				posM.y = pos.y;
				#if (FXAA_GATHER4_ALPHA == 1)
						#if (FXAA_DISCARD == 0)
								FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
								#if (FXAA_GREEN_AS_LUMA == 0)
										#define lumaM rgbyM.w
								#else
										#define lumaM rgbyM.y
								#endif
						#endif
						#if (FXAA_GREEN_AS_LUMA == 0)
								FxaaFloat4 luma4A = FxaaTexAlpha4(tex, posM);
								FxaaFloat4 luma4B = FxaaTexOffAlpha4(tex, posM, FxaaInt2(-1, -1));
						#else
								FxaaFloat4 luma4A = FxaaTexGreen4(tex, posM);
								FxaaFloat4 luma4B = FxaaTexOffGreen4(tex, posM, FxaaInt2(-1, -1));
						#endif
						#if (FXAA_DISCARD == 1)
								#define lumaM luma4A.w
						#endif
						#define lumaE luma4A.z
						#define lumaS luma4A.x
						#define lumaSE luma4A.y
						#define lumaNW luma4B.w
						#define lumaN luma4B.z
						#define lumaW luma4B.x
				#else
						FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
						#if (FXAA_GREEN_AS_LUMA == 0)
								#define lumaM rgbyM.w
						#else
								#define lumaM rgbyM.y
						#endif
						#if (FXAA_GLSL_100 == 1)
							FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0, 1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 0.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 0.0), fxaaQualityRcpFrame.xy));
						#else
							FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0, 1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 0), fxaaQualityRcpFrame.xy));
						#endif
				#endif
		/*--------------------------------------------------------------------------*/
				FxaaFloat maxSM = max(lumaS, lumaM);
				FxaaFloat minSM = min(lumaS, lumaM);
				FxaaFloat maxESM = max(lumaE, maxSM);
				FxaaFloat minESM = min(lumaE, minSM);
				FxaaFloat maxWN = max(lumaN, lumaW);
				FxaaFloat minWN = min(lumaN, lumaW);
				FxaaFloat rangeMax = max(maxWN, maxESM);
				FxaaFloat rangeMin = min(minWN, minESM);
				FxaaFloat rangeMaxScaled = rangeMax * fxaaQualityEdgeThreshold;
				FxaaFloat range = rangeMax - rangeMin;
				FxaaFloat rangeMaxClamped = max(fxaaQualityEdgeThresholdMin, rangeMaxScaled);
				FxaaBool earlyExit = range < rangeMaxClamped;
		/*--------------------------------------------------------------------------*/
				if(earlyExit)
						#if (FXAA_DISCARD == 1)
								FxaaDiscard;
						#else
								return rgbyM;
						#endif
		/*--------------------------------------------------------------------------*/
				#if (FXAA_GATHER4_ALPHA == 0)
						#if (FXAA_GLSL_100 == 1)
							FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 1.0), fxaaQualityRcpFrame.xy));
						#else
							FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
						#endif
				#else
						FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(1, -1), fxaaQualityRcpFrame.xy));
						FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
				#endif
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNS = lumaN + lumaS;
				FxaaFloat lumaWE = lumaW + lumaE;
				FxaaFloat subpixRcpRange = 1.0/range;
				FxaaFloat subpixNSWE = lumaNS + lumaWE;
				FxaaFloat edgeHorz1 = (-2.0 * lumaM) + lumaNS;
				FxaaFloat edgeVert1 = (-2.0 * lumaM) + lumaWE;
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNESE = lumaNE + lumaSE;
				FxaaFloat lumaNWNE = lumaNW + lumaNE;
				FxaaFloat edgeHorz2 = (-2.0 * lumaE) + lumaNESE;
				FxaaFloat edgeVert2 = (-2.0 * lumaN) + lumaNWNE;
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNWSW = lumaNW + lumaSW;
				FxaaFloat lumaSWSE = lumaSW + lumaSE;
				FxaaFloat edgeHorz4 = (abs(edgeHorz1) * 2.0) + abs(edgeHorz2);
				FxaaFloat edgeVert4 = (abs(edgeVert1) * 2.0) + abs(edgeVert2);
				FxaaFloat edgeHorz3 = (-2.0 * lumaW) + lumaNWSW;
				FxaaFloat edgeVert3 = (-2.0 * lumaS) + lumaSWSE;
				FxaaFloat edgeHorz = abs(edgeHorz3) + edgeHorz4;
				FxaaFloat edgeVert = abs(edgeVert3) + edgeVert4;
		/*--------------------------------------------------------------------------*/
				FxaaFloat subpixNWSWNESE = lumaNWSW + lumaNESE;
				FxaaFloat lengthSign = fxaaQualityRcpFrame.x;
				FxaaBool horzSpan = edgeHorz >= edgeVert;
				FxaaFloat subpixA = subpixNSWE * 2.0 + subpixNWSWNESE;
		/*--------------------------------------------------------------------------*/
				if(!horzSpan) lumaN = lumaW;
				if(!horzSpan) lumaS = lumaE;
				if(horzSpan) lengthSign = fxaaQualityRcpFrame.y;
				FxaaFloat subpixB = (subpixA * (1.0/12.0)) - lumaM;
		/*--------------------------------------------------------------------------*/
				FxaaFloat gradientN = lumaN - lumaM;
				FxaaFloat gradientS = lumaS - lumaM;
				FxaaFloat lumaNN = lumaN + lumaM;
				FxaaFloat lumaSS = lumaS + lumaM;
				FxaaBool pairN = abs(gradientN) >= abs(gradientS);
				FxaaFloat gradient = max(abs(gradientN), abs(gradientS));
				if(pairN) lengthSign = -lengthSign;
				FxaaFloat subpixC = FxaaSat(abs(subpixB) * subpixRcpRange);
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posB;
				posB.x = posM.x;
				posB.y = posM.y;
				FxaaFloat2 offNP;
				offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
				offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;
				if(!horzSpan) posB.x += lengthSign * 0.5;
				if( horzSpan) posB.y += lengthSign * 0.5;
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posN;
				posN.x = posB.x - offNP.x * FXAA_QUALITY_P0;
				posN.y = posB.y - offNP.y * FXAA_QUALITY_P0;
				FxaaFloat2 posP;
				posP.x = posB.x + offNP.x * FXAA_QUALITY_P0;
				posP.y = posB.y + offNP.y * FXAA_QUALITY_P0;
				FxaaFloat subpixD = ((-2.0)*subpixC) + 3.0;
				FxaaFloat lumaEndN = FxaaLuma(FxaaTexTop(tex, posN));
				FxaaFloat subpixE = subpixC * subpixC;
				FxaaFloat lumaEndP = FxaaLuma(FxaaTexTop(tex, posP));
		/*--------------------------------------------------------------------------*/
				if(!pairN) lumaNN = lumaSS;
				FxaaFloat gradientScaled = gradient * 1.0/4.0;
				FxaaFloat lumaMM = lumaM - lumaNN * 0.5;
				FxaaFloat subpixF = subpixD * subpixE;
				FxaaBool lumaMLTZero = lumaMM < 0.0;
		/*--------------------------------------------------------------------------*/
				lumaEndN -= lumaNN * 0.5;
				lumaEndP -= lumaNN * 0.5;
				FxaaBool doneN = abs(lumaEndN) >= gradientScaled;
				FxaaBool doneP = abs(lumaEndP) >= gradientScaled;
				if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P1;
				if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P1;
				FxaaBool doneNP = (!doneN) || (!doneP);
				if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P1;
				if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P1;
		/*--------------------------------------------------------------------------*/
				if(doneNP) {
						if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
						if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
						if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
						if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
						doneN = abs(lumaEndN) >= gradientScaled;
						doneP = abs(lumaEndP) >= gradientScaled;
						if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P2;
						if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P2;
						doneNP = (!doneN) || (!doneP);
						if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P2;
						if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P2;
		/*--------------------------------------------------------------------------*/
						#if (FXAA_QUALITY_PS > 3)
						if(doneNP) {
								if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
								if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
								if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
								if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
								doneN = abs(lumaEndN) >= gradientScaled;
								doneP = abs(lumaEndP) >= gradientScaled;
								if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P3;
								if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P3;
								doneNP = (!doneN) || (!doneP);
								if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P3;
								if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P3;
		/*--------------------------------------------------------------------------*/
								#if (FXAA_QUALITY_PS > 4)
								if(doneNP) {
										if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
										if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
										if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
										if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
										doneN = abs(lumaEndN) >= gradientScaled;
										doneP = abs(lumaEndP) >= gradientScaled;
										if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P4;
										if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P4;
										doneNP = (!doneN) || (!doneP);
										if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P4;
										if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P4;
		/*--------------------------------------------------------------------------*/
										#if (FXAA_QUALITY_PS > 5)
										if(doneNP) {
												if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
												if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
												if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
												if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
												doneN = abs(lumaEndN) >= gradientScaled;
												doneP = abs(lumaEndP) >= gradientScaled;
												if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P5;
												if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P5;
												doneNP = (!doneN) || (!doneP);
												if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P5;
												if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P5;
		/*--------------------------------------------------------------------------*/
												#if (FXAA_QUALITY_PS > 6)
												if(doneNP) {
														if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
														if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
														if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
														if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
														doneN = abs(lumaEndN) >= gradientScaled;
														doneP = abs(lumaEndP) >= gradientScaled;
														if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P6;
														if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P6;
														doneNP = (!doneN) || (!doneP);
														if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P6;
														if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P6;
		/*--------------------------------------------------------------------------*/
														#if (FXAA_QUALITY_PS > 7)
														if(doneNP) {
																if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
																if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
																if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
																if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
																doneN = abs(lumaEndN) >= gradientScaled;
																doneP = abs(lumaEndP) >= gradientScaled;
																if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P7;
																if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P7;
																doneNP = (!doneN) || (!doneP);
																if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P7;
																if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P7;
		/*--------------------------------------------------------------------------*/
				#if (FXAA_QUALITY_PS > 8)
				if(doneNP) {
						if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
						if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
						if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
						if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
						doneN = abs(lumaEndN) >= gradientScaled;
						doneP = abs(lumaEndP) >= gradientScaled;
						if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P8;
						if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P8;
						doneNP = (!doneN) || (!doneP);
						if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P8;
						if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P8;
		/*--------------------------------------------------------------------------*/
						#if (FXAA_QUALITY_PS > 9)
						if(doneNP) {
								if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
								if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
								if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
								if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
								doneN = abs(lumaEndN) >= gradientScaled;
								doneP = abs(lumaEndP) >= gradientScaled;
								if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P9;
								if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P9;
								doneNP = (!doneN) || (!doneP);
								if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P9;
								if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P9;
		/*--------------------------------------------------------------------------*/
								#if (FXAA_QUALITY_PS > 10)
								if(doneNP) {
										if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
										if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
										if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
										if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
										doneN = abs(lumaEndN) >= gradientScaled;
										doneP = abs(lumaEndP) >= gradientScaled;
										if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P10;
										if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P10;
										doneNP = (!doneN) || (!doneP);
										if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P10;
										if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P10;
		/*--------------------------------------------------------------------------*/
										#if (FXAA_QUALITY_PS > 11)
										if(doneNP) {
												if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
												if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
												if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
												if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
												doneN = abs(lumaEndN) >= gradientScaled;
												doneP = abs(lumaEndP) >= gradientScaled;
												if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P11;
												if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P11;
												doneNP = (!doneN) || (!doneP);
												if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P11;
												if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P11;
		/*--------------------------------------------------------------------------*/
												#if (FXAA_QUALITY_PS > 12)
												if(doneNP) {
														if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
														if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
														if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
														if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
														doneN = abs(lumaEndN) >= gradientScaled;
														doneP = abs(lumaEndP) >= gradientScaled;
														if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P12;
														if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P12;
														doneNP = (!doneN) || (!doneP);
														if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P12;
														if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P12;
		/*--------------------------------------------------------------------------*/
												}
												#endif
		/*--------------------------------------------------------------------------*/
										}
										#endif
		/*--------------------------------------------------------------------------*/
								}
								#endif
		/*--------------------------------------------------------------------------*/
						}
						#endif
		/*--------------------------------------------------------------------------*/
				}
				#endif
		/*--------------------------------------------------------------------------*/
														}
														#endif
		/*--------------------------------------------------------------------------*/
												}
												#endif
		/*--------------------------------------------------------------------------*/
										}
										#endif
		/*--------------------------------------------------------------------------*/
								}
								#endif
		/*--------------------------------------------------------------------------*/
						}
						#endif
		/*--------------------------------------------------------------------------*/
				}
		/*--------------------------------------------------------------------------*/
				FxaaFloat dstN = posM.x - posN.x;
				FxaaFloat dstP = posP.x - posM.x;
				if(!horzSpan) dstN = posM.y - posN.y;
				if(!horzSpan) dstP = posP.y - posM.y;
		/*--------------------------------------------------------------------------*/
				FxaaBool goodSpanN = (lumaEndN < 0.0) != lumaMLTZero;
				FxaaFloat spanLength = (dstP + dstN);
				FxaaBool goodSpanP = (lumaEndP < 0.0) != lumaMLTZero;
				FxaaFloat spanLengthRcp = 1.0/spanLength;
		/*--------------------------------------------------------------------------*/
				FxaaBool directionN = dstN < dstP;
				FxaaFloat dst = min(dstN, dstP);
				FxaaBool goodSpan = directionN ? goodSpanN : goodSpanP;
				FxaaFloat subpixG = subpixF * subpixF;
				FxaaFloat pixelOffset = (dst * (-spanLengthRcp)) + 0.5;
				FxaaFloat subpixH = subpixG * fxaaQualitySubpix;
		/*--------------------------------------------------------------------------*/
				FxaaFloat pixelOffsetGood = goodSpan ? pixelOffset : 0.0;
				FxaaFloat pixelOffsetSubpix = max(pixelOffsetGood, subpixH);
				if(!horzSpan) posM.x += pixelOffsetSubpix * lengthSign;
				if( horzSpan) posM.y += pixelOffsetSubpix * lengthSign;
				#if (FXAA_DISCARD == 1)
						return FxaaTexTop(tex, posM);
				#else
						return FxaaFloat4(FxaaTexTop(tex, posM).xyz, lumaM);
				#endif
		}
		/*==========================================================================*/
		#endif

		void main() {
			gl_FragColor = FxaaPixelShader(
				vUv,
				vec4(0.0),
				tDiffuse,
				tDiffuse,
				tDiffuse,
				resolution,
				vec4(0.0),
				vec4(0.0),
				vec4(0.0),
				0.75,
				0.166,
				0.0833,
				0.0,
				0.0,
				0.0,
				vec4(0.0)
			);

			// TODO avoid querying texture twice for same texel
			gl_FragColor.a = texture2D(tDiffuse, vUv).a;
		}`};var Ur={};Hs(Ur,{bulb:()=>xs,collidingBulb:()=>Qm,collidingDisc:()=>jm,cube:()=>Gm,disc:()=>_s,eightCubes:()=>Zm,expandingSphere:()=>Xm,fountain:()=>qm,harmonicSphere:()=>Wm,plane:()=>$m,plane2:()=>Jm,regularCube:()=>km,solarSystem:()=>Ym,sphere:()=>Vm,teapot:()=>Km,tesseract:()=>eg});var gs=class extends Oe{constructor(e=50,t=10,n=!0,i=!0,a=!0,s=!0,o=!0){let l=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,3,16,17,18,7,19,20,21,11,22,23,24,15,25,26,27,18,28,29,30,21,31,32,33,24,34,35,36,27,37,38,39,30,40,41,0,33,42,43,4,36,44,45,8,39,46,47,12,12,13,14,15,48,49,50,51,52,53,54,55,56,57,58,59,15,25,26,27,51,60,61,62,55,63,64,65,59,66,67,68,27,37,38,39,62,69,70,71,65,72,73,74,68,75,76,77,39,46,47,12,71,78,79,48,74,80,81,52,77,82,83,56,56,57,58,59,84,85,86,87,88,89,90,91,92,93,94,95,59,66,67,68,87,96,97,98,91,99,100,101,95,102,103,104,68,75,76,77,98,105,106,107,101,108,109,110,104,111,112,113,77,82,83,56,107,114,115,84,110,116,117,88,113,118,119,92,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,123,136,137,120,127,138,139,124,131,140,141,128,135,142,143,132,132,133,134,135,144,145,146,147,148,149,150,151,68,152,153,154,135,142,143,132,147,155,156,144,151,157,158,148,154,159,160,68,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,164,177,178,161,168,179,180,165,172,181,182,169,176,183,184,173,173,174,175,176,185,186,187,188,189,190,191,192,193,194,195,196,176,183,184,173,188,197,198,185,192,199,200,189,196,201,202,193,203,203,203,203,204,205,206,207,208,208,208,208,209,210,211,212,203,203,203,203,207,213,214,215,208,208,208,208,212,216,217,218,203,203,203,203,215,219,220,221,208,208,208,208,218,222,223,224,203,203,203,203,221,225,226,204,208,208,208,208,224,227,228,209,209,210,211,212,229,230,231,232,233,234,235,236,237,238,239,240,212,216,217,218,232,241,242,243,236,244,245,246,240,247,248,249,218,222,223,224,243,250,251,252,246,253,254,255,249,256,257,258,224,227,228,209,252,259,260,229,255,261,262,233,258,263,264,237,265,265,265,265,266,267,268,269,270,271,272,273,92,119,118,113,265,265,265,265,269,274,275,276,273,277,278,279,113,112,111,104,265,265,265,265,276,280,281,282,279,283,284,285,104,103,102,95,265,265,265,265,282,286,287,266,285,288,289,270,95,94,93,92],c=[1.4,0,2.4,1.4,-.784,2.4,.784,-1.4,2.4,0,-1.4,2.4,1.3375,0,2.53125,1.3375,-.749,2.53125,.749,-1.3375,2.53125,0,-1.3375,2.53125,1.4375,0,2.53125,1.4375,-.805,2.53125,.805,-1.4375,2.53125,0,-1.4375,2.53125,1.5,0,2.4,1.5,-.84,2.4,.84,-1.5,2.4,0,-1.5,2.4,-.784,-1.4,2.4,-1.4,-.784,2.4,-1.4,0,2.4,-.749,-1.3375,2.53125,-1.3375,-.749,2.53125,-1.3375,0,2.53125,-.805,-1.4375,2.53125,-1.4375,-.805,2.53125,-1.4375,0,2.53125,-.84,-1.5,2.4,-1.5,-.84,2.4,-1.5,0,2.4,-1.4,.784,2.4,-.784,1.4,2.4,0,1.4,2.4,-1.3375,.749,2.53125,-.749,1.3375,2.53125,0,1.3375,2.53125,-1.4375,.805,2.53125,-.805,1.4375,2.53125,0,1.4375,2.53125,-1.5,.84,2.4,-.84,1.5,2.4,0,1.5,2.4,.784,1.4,2.4,1.4,.784,2.4,.749,1.3375,2.53125,1.3375,.749,2.53125,.805,1.4375,2.53125,1.4375,.805,2.53125,.84,1.5,2.4,1.5,.84,2.4,1.75,0,1.875,1.75,-.98,1.875,.98,-1.75,1.875,0,-1.75,1.875,2,0,1.35,2,-1.12,1.35,1.12,-2,1.35,0,-2,1.35,2,0,.9,2,-1.12,.9,1.12,-2,.9,0,-2,.9,-.98,-1.75,1.875,-1.75,-.98,1.875,-1.75,0,1.875,-1.12,-2,1.35,-2,-1.12,1.35,-2,0,1.35,-1.12,-2,.9,-2,-1.12,.9,-2,0,.9,-1.75,.98,1.875,-.98,1.75,1.875,0,1.75,1.875,-2,1.12,1.35,-1.12,2,1.35,0,2,1.35,-2,1.12,.9,-1.12,2,.9,0,2,.9,.98,1.75,1.875,1.75,.98,1.875,1.12,2,1.35,2,1.12,1.35,1.12,2,.9,2,1.12,.9,2,0,.45,2,-1.12,.45,1.12,-2,.45,0,-2,.45,1.5,0,.225,1.5,-.84,.225,.84,-1.5,.225,0,-1.5,.225,1.5,0,.15,1.5,-.84,.15,.84,-1.5,.15,0,-1.5,.15,-1.12,-2,.45,-2,-1.12,.45,-2,0,.45,-.84,-1.5,.225,-1.5,-.84,.225,-1.5,0,.225,-.84,-1.5,.15,-1.5,-.84,.15,-1.5,0,.15,-2,1.12,.45,-1.12,2,.45,0,2,.45,-1.5,.84,.225,-.84,1.5,.225,0,1.5,.225,-1.5,.84,.15,-.84,1.5,.15,0,1.5,.15,1.12,2,.45,2,1.12,.45,.84,1.5,.225,1.5,.84,.225,.84,1.5,.15,1.5,.84,.15,-1.6,0,2.025,-1.6,-.3,2.025,-1.5,-.3,2.25,-1.5,0,2.25,-2.3,0,2.025,-2.3,-.3,2.025,-2.5,-.3,2.25,-2.5,0,2.25,-2.7,0,2.025,-2.7,-.3,2.025,-3,-.3,2.25,-3,0,2.25,-2.7,0,1.8,-2.7,-.3,1.8,-3,-.3,1.8,-3,0,1.8,-1.5,.3,2.25,-1.6,.3,2.025,-2.5,.3,2.25,-2.3,.3,2.025,-3,.3,2.25,-2.7,.3,2.025,-3,.3,1.8,-2.7,.3,1.8,-2.7,0,1.575,-2.7,-.3,1.575,-3,-.3,1.35,-3,0,1.35,-2.5,0,1.125,-2.5,-.3,1.125,-2.65,-.3,.9375,-2.65,0,.9375,-2,-.3,.9,-1.9,-.3,.6,-1.9,0,.6,-3,.3,1.35,-2.7,.3,1.575,-2.65,.3,.9375,-2.5,.3,1.125,-1.9,.3,.6,-2,.3,.9,1.7,0,1.425,1.7,-.66,1.425,1.7,-.66,.6,1.7,0,.6,2.6,0,1.425,2.6,-.66,1.425,3.1,-.66,.825,3.1,0,.825,2.3,0,2.1,2.3,-.25,2.1,2.4,-.25,2.025,2.4,0,2.025,2.7,0,2.4,2.7,-.25,2.4,3.3,-.25,2.4,3.3,0,2.4,1.7,.66,.6,1.7,.66,1.425,3.1,.66,.825,2.6,.66,1.425,2.4,.25,2.025,2.3,.25,2.1,3.3,.25,2.4,2.7,.25,2.4,2.8,0,2.475,2.8,-.25,2.475,3.525,-.25,2.49375,3.525,0,2.49375,2.9,0,2.475,2.9,-.15,2.475,3.45,-.15,2.5125,3.45,0,2.5125,2.8,0,2.4,2.8,-.15,2.4,3.2,-.15,2.4,3.2,0,2.4,3.525,.25,2.49375,2.8,.25,2.475,3.45,.15,2.5125,2.9,.15,2.475,3.2,.15,2.4,2.8,.15,2.4,0,0,3.15,.8,0,3.15,.8,-.45,3.15,.45,-.8,3.15,0,-.8,3.15,0,0,2.85,.2,0,2.7,.2,-.112,2.7,.112,-.2,2.7,0,-.2,2.7,-.45,-.8,3.15,-.8,-.45,3.15,-.8,0,3.15,-.112,-.2,2.7,-.2,-.112,2.7,-.2,0,2.7,-.8,.45,3.15,-.45,.8,3.15,0,.8,3.15,-.2,.112,2.7,-.112,.2,2.7,0,.2,2.7,.45,.8,3.15,.8,.45,3.15,.112,.2,2.7,.2,.112,2.7,.4,0,2.55,.4,-.224,2.55,.224,-.4,2.55,0,-.4,2.55,1.3,0,2.55,1.3,-.728,2.55,.728,-1.3,2.55,0,-1.3,2.55,1.3,0,2.4,1.3,-.728,2.4,.728,-1.3,2.4,0,-1.3,2.4,-.224,-.4,2.55,-.4,-.224,2.55,-.4,0,2.55,-.728,-1.3,2.55,-1.3,-.728,2.55,-1.3,0,2.55,-.728,-1.3,2.4,-1.3,-.728,2.4,-1.3,0,2.4,-.4,.224,2.55,-.224,.4,2.55,0,.4,2.55,-1.3,.728,2.55,-.728,1.3,2.55,0,1.3,2.55,-1.3,.728,2.4,-.728,1.3,2.4,0,1.3,2.4,.224,.4,2.55,.4,.224,2.55,.728,1.3,2.55,1.3,.728,2.55,.728,1.3,2.4,1.3,.728,2.4,0,0,0,1.425,0,0,1.425,.798,0,.798,1.425,0,0,1.425,0,1.5,0,.075,1.5,.84,.075,.84,1.5,.075,0,1.5,.075,-.798,1.425,0,-1.425,.798,0,-1.425,0,0,-.84,1.5,.075,-1.5,.84,.075,-1.5,0,.075,-1.425,-.798,0,-.798,-1.425,0,0,-1.425,0,-1.5,-.84,.075,-.84,-1.5,.075,0,-1.5,.075,.798,-1.425,0,1.425,-.798,0,.84,-1.5,.075,1.5,-.84,.075];super();t=Math.max(2,Math.floor(t));let u=1.3,h=3.15*(o?1:u)/2,p=e/h,_=n?(8*t-4)*t:0;_+=i?(16*t-4)*t:0,_+=a?40*t*t:0;let g=new Uint32Array(_*3),x=n?4:0;x+=i?8:0,x+=a?20:0,x*=(t+1)*(t+1);let f=new Float32Array(x*3),m=new Float32Array(x*3),M=new Float32Array(x*2),T=new ve;T.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0);let A=[],v=[],C=[],U=[],B=[],G=[],Q=[],H=[],P=[],R=new w,D,F,X,K,$=0,se=0,ae=new w,ye=new ve,pe=new ve,Se=new De,we=new De,V=new De,je=new De,Ee=new w,me=new w,_e=T.clone();_e.transpose();let Ce=(Y,te,J)=>!(f[Y*3]===f[te*3]&&f[Y*3+1]===f[te*3+1]&&f[Y*3+2]===f[te*3+2]||f[Y*3]===f[J*3]&&f[Y*3+1]===f[J*3+1]&&f[Y*3+2]===f[J*3+2]||f[te*3]===f[J*3]&&f[te*3+1]===f[J*3+1]&&f[te*3+2]===f[J*3+2]);for(let Y=0;Y<3;Y++)G[Y]=new ve;let Re=a?0:20,Ne=n?32:28,Ve=t+1,xt=0,vt=0,S=0,b=0,j=0;for(let Y=Re;Y<Ne;Y++)if(i||Y<20||Y>=28){for(let te=0;te<3;te++){for(let J=0;J<4;J++)for(let oe=0;oe<4;oe++)A[oe*4+J]=c[l[Y*16+J*4+oe]*3+te],s&&Y>=20&&Y<28&&te!==2&&(A[oe*4+J]*=1.077),!o&&te===2&&(A[oe*4+J]*=u);ye.set(A[0],A[1],A[2],A[3],A[4],A[5],A[6],A[7],A[8],A[9],A[10],A[11],A[12],A[13],A[14],A[15]),pe.multiplyMatrices(ye,T),G[te].multiplyMatrices(_e,pe)}for(let te=0;te<=t;te++){let J=te/t;for(let oe=0;oe<=t;oe++){let E=oe/t;for(K=4,F=X=1;K--;)v[K]=F,C[K]=X,F*=J,X*=E,K===3?(U[K]=B[K]=0,$=se=1):(U[K]=$*(3-K),B[K]=se*(3-K),$*=J,se*=E);Se.fromArray(v),we.fromArray(C),V.fromArray(U),je.fromArray(B);for(let q=0;q<3;q++)D=Se.clone(),D.applyMatrix4(G[q]),Q[q]=D.dot(we),D=V.clone(),D.applyMatrix4(G[q]),H[q]=D.dot(we),D=Se.clone(),D.applyMatrix4(G[q]),P[q]=D.dot(je);Ee.fromArray(H),me.fromArray(P),R.crossVectors(me,Ee),R.normalize(),Q[0]===0&&Q[1]===0?ae.set(0,Q[2]>h?1:-1,0):ae.set(R.x,R.z,-R.y),f[vt++]=p*Q[0],f[vt++]=p*(Q[2]-h),f[vt++]=-p*Q[1],m[S++]=ae.x,m[S++]=ae.y,m[S++]=ae.z,M[b++]=1-E,M[b++]=1-J}}for(let te=0;te<t;te++)for(let J=0;J<t;J++){let oe=xt*Ve*Ve+te*Ve+J,E=oe+1,q=E+Ve,ee=oe+Ve;Ce(oe,E,q)&&(g[j++]=oe,g[j++]=E,g[j++]=q),Ce(oe,q,ee)&&(g[j++]=oe,g[j++]=q,g[j++]=ee)}xt++}this.setIndex(new ze(g,1)),this.setAttribute("position",new ze(f,3)),this.setAttribute("normal",new ze(m,3)),this.setAttribute("uv",new ze(M,2)),this.computeBoundingSphere()}};var Nr=(r,e,t,n=256)=>~~(Math.min(r,.99)*n)+~~(Math.min(e,.99)*n)*n+~~(Math.min(t,.99)*n)*n*n;var Hm=r=>Math.exp(-Math.pow(r*2,2)),Ir=r=>r<5?(r+1.09611)*1900:(r+1.7)*1700,mt=r=>{let e=r*Math.pow(Math.random(),15),t=Ir(e);return{mass:e,temperature:t*(1+.75*Hm(1-2*Math.random()))}};var Pt=r=>r?[{temperature:0,mass:r,position:new w,speed:new w}]:[],Gm=({number:r,range:e,speed:t,mass:n,blackHoleMass:i})=>new Array(r).fill().map(()=>({...mt(n),position:new w(e/2-Math.random()*e,e/2-Math.random()*e,e/2-Math.random()*e),speed:new w(t/2-Math.random()*t,t/2-Math.random()*t,t/2-Math.random()*t)})).concat(Pt(i)),km=({number:r,range:e,speed:t,mass:n,blackHoleMass:i})=>{let a=~~Math.cbrt(r);return new Array(a).fill().map((s,o)=>new Array(a).fill().map((l,c)=>new Array(a).fill().map((u,d)=>{let h=new w(o/a-1/2,c/a-1/2,d/a-1/2);return{mass:n,temperature:15e3*(.75-h.lengthSq())-3e3,position:h.multiplyScalar(e),speed:new w(t/2-Math.random()*t,t/2-Math.random()*t,t/2-Math.random()*t)}}))).flat(3).concat(Pt(i))},Vm=({number:r,range:e,mass:t,speed:n,blackHoleMass:i,gravitationalConstant:a})=>{let s=new Lt;return e*=.5,new Array(r).fill().map(()=>{s.radius=e*Math.cbrt(Math.random()),s.theta=Math.random()*2*Math.PI,s.phi=Math.acos(2*Math.random()-1);let o=new w().setFromSpherical(s),l=1-2*Math.random(),c=1-2*Math.random(),u=-(l*o.x+c*o.y)/o.z,d=new w(l,c,u).normalize().multiplyScalar(n*Math.sqrt(a*i/s.radius));return{...mt(t),position:o,speed:d}}).concat(Pt(i))},Wm=({number:r,range:e,mass:t,speed:n,blackHoleMass:i,gravitationalConstant:a})=>{let s=new Lt;return e*=.5,new Array(r).fill().map(()=>{s.radius=e*Math.cbrt(Math.random()),s.theta=Math.random()*2*Math.PI,s.phi=Math.acos(2*Math.random()-1);let o=new w().setFromSpherical(s),l=new w(n*Math.cos(s.theta),0,-n*Math.sin(s.theta)).normalize().multiplyScalar(Math.sqrt(a*i/s.radius));return{...mt(t),position:o,speed:l}}).concat(Pt(i))},Xm=({number:r,range:e,mass:t,speed:n,blackHoleMass:i})=>{let a=new Lt;return e*=.5,new Array(r).fill().map(()=>{a.radius=e*Math.cbrt(Math.random()),a.theta=Math.random()*2*Math.PI,a.phi=Math.acos(2*Math.random()-1);let s=new w().setFromSpherical(a),o=s.clone().normalize().multiplyScalar(Math.random()*n);return{...mt(t),position:s,speed:o}}).concat(Pt(i))},_s=({number:r,range:e,mass:t,speed:n,blackHoleMass:i,gravitationalConstant:a,dimensions:s})=>{let o=new Lt;e*=.5;let l=e/12;if(s===4)return new Array(r).fill().map(()=>{let c=l+(e-l)*Math.random(),u=Math.random()*2*Math.PI,d=Math.random()*2*Math.PI,h=new De(c*Math.cos(u),c*Math.sin(d),c*Math.cos(d),c*Math.sin(u)),p=new De(Math.sin(u),-Math.cos(d),Math.sin(d),-Math.cos(u)).normalize().multiplyScalar(n*Math.sqrt(a*i)/c);return{...mt(t),position:h,speed:p}}).concat(Pt(i));if(s===3)return new Array(r).fill().map(()=>{o.radius=l+(e-l)*Math.random(),o.theta=Math.random()*2*Math.PI,o.phi=Math.PI/2;let c=new w().setFromSpherical(o),u=new w(Math.cos(o.theta),0,-Math.sin(o.theta)).normalize().multiplyScalar(n*Math.sqrt(a*i/o.radius));return{...mt(t),position:c,speed:u}}).concat(Pt(i));if(s===2)return new Array(r).fill().map(()=>{let c=l+(e-l)*Math.random(),u=Math.random()*2*Math.PI,d=new le(c*Math.cos(u),c*Math.sin(u)),h=new le(Math.sin(u),-Math.cos(u)).normalize().multiplyScalar(n*Math.sqrt(a*i));return{...mt(t),position:d,speed:h}}).concat(Pt(i))},xs=({number:r,range:e,mass:t,speed:n,blackHoleMass:i,gravitationalConstant:a})=>{let s=new Lt;return e*=.5,new Array(r).fill().map(()=>{s.radius=e*Math.random(),s.theta=Math.random()*2*Math.PI,s.phi=Math.PI/2*(1+Math.pow(1-s.radius/e,3)*2*(.5-Math.random())),s.radius+=Math.abs(Math.cos(s.phi))*e/8;let o=new w().setFromSpherical(s),l=new w(Math.cos(s.theta),0,-Math.sin(s.theta)).normalize().multiplyScalar(n*Math.sqrt(a*i/s.radius));return{...mt(t),position:o,speed:l}}).concat(Pt(i))},Ym=({gravitationalConstant:r})=>{let e=new Lt;e.theta=Math.PI/2;let t={temperature:Nr(1,1,0),mass:1989e3,position:new w,speed:new w},n=(A,v,C)=>(e.radius=v,e.phi=Math.random()*2*Math.PI,{temperature:Nr(...C),mass:A,position:new w().setFromSpherical(e),speed:new w(-Math.cos(e.phi),Math.sin(e.phi),0).normalize().multiplyScalar(Math.sqrt(r*t.mass/e.radius))}),i=n(.3285,57.909,[.8,.8,.8]),a=n(4.867,108.16,[.8,.8,0]),s=n(5.972,149.6,[.15,.25,1]),o=n(.639,227.99,[1,.5,.25]),l=n(1898,778.36,[1,.65,.46]),c=n(568.3,1433.5,[.55,.54,.4]),u=n(86.81,2872.4,[0,1,1]),d=n(102.4,4498.4,[0,0,1]),h=(A,v,C,U)=>(e.radius=v,e.phi=Math.random()*2*Math.PI,{temperature:Nr(...C),mass:A,position:new w().setFromSpherical(e).add(U.position),speed:new w(-Math.cos(e.phi),Math.sin(e.phi),0).normalize().multiplyScalar(Math.sqrt(r*U.mass/e.radius)).add(U.speed)}),p=h(.07342,.3844,[.9,.9,.9],s),_=h(.089319,.4218,[.9,.9,.9],l),g=h(.048,.6711,[.9,.9,.9],l),x=h(.14819,1.0704,[.9,.9,.9],l),f=h(.10759,1.8827,[.9,.9,.9],l),m=h(.13452,1.22183,[.9,.9,.9],c),M=h(.002306,.52704,[.9,.9,.9],c),T=h(.001805,3.5613,[.9,.9,.9],c);return[t,i,a,s,p,o,l,_,g,x,f,c,m,M,T,u,d]},jm=({number:r,range:e,mass:t,speed:n,blackHoleMass:i,gravitationalConstant:a,dimensions:s})=>{let o=~~(r/2),l=new w(e*.15,e*.15,-e*.25),c=new Et(Math.PI/4,0,0),u=new w(-n,-n,0),d=_s({number:o,range:e/3,mass:t,speed:1,blackHoleMass:i,gravitationalConstant:a,dimensions:s});d.forEach(({position:x,speed:f})=>{x.applyEuler(c).add(l),f.applyEuler(c).add(u)});let h=new w(-e*.15,-e*.15,e*.25),p=new Et(-Math.PI/8,0,0),_=new w(n,0,0),g=_s({number:o,range:e/2,mass:t,speed:1,blackHoleMass:i,gravitationalConstant:a,dimensions:s});return g.forEach(({position:x,speed:f})=>{x.applyEuler(p).add(h),f.applyEuler(p).add(_)}),[...d,...g]},Qm=({number:r,range:e,mass:t,speed:n,blackHoleMass:i,gravitationalConstant:a})=>{let s=~~(r/2),o=new w(e*.15,e*.15,-e*.25),l=new Et(Math.PI/4,0,0),c=new w(-n,-n,0),u=xs({number:s,range:e/3,mass:t,speed:1,blackHoleMass:i,gravitationalConstant:a});u.forEach(({position:g,speed:x})=>{g.applyEuler(l).add(o),x.applyEuler(l).add(c)});let d=new w(-e*.15,-e*.15,e*.25),h=new Et(-Math.PI/8,0,0),p=new w(n,0,0),_=xs({number:s,range:e/2,mass:t,speed:1,blackHoleMass:i,gravitationalConstant:a});return _.forEach(({position:g,speed:x})=>{g.applyEuler(h).add(d),x.applyEuler(h).add(p)}),[...u,..._]},qm=({number:r,range:e,mass:t,speed:n,blackHoleMass:i})=>{let a=new Lt;return e*=.5,new Array(r).fill().map(()=>{a.radius=e/10+Math.random()*e,a.theta=Math.random()*2*Math.PI,a.phi=Math.PI-Math.random()*Math.PI/12;let s=new w().setFromSpherical(a);return{...mt(t),position:s,speed:new w(0,n*Math.random(),0)}}).concat(Pt(i))},Zm=({number:r,range:e,mass:t,speed:n,blackHoleMass:i})=>{let a=8;e*=.333;let s=new Array(r).fill().map(()=>({...mt(t),position:new w(e/2-Math.random()*e,e/2-Math.random()*e,e/2-Math.random()*e),speed:new w(n/2-Math.random()*n,n/2-Math.random()*n,n/2-Math.random()*n)})),o=new Array(a).fill().map((c,u)=>s.slice(~~(u*r/a),~~((u+1)*r/a))),l=new Array(a).fill().map((c,u)=>new w(...u.toString(2).padStart(3,"0").split("").map(d=>d==="0"?-1:1)).multiplyScalar(e));return o.forEach((c,u)=>{c.forEach(d=>{d.position.add(l[u])})}),i&&s.push({temperature:0,mass:i,position:new w,speed:new w}),s},$m=({number:r,range:e,mass:t,blackHoleMass:n})=>(e*=.25,new Array(r).fill().map(()=>({...mt(t),position:new w(e/2-Math.random()*e,e,e/2-Math.random()*e),speed:new w})).concat(Pt(n))),Jm=({number:r,range:e,mass:t})=>new Array(r).fill().map(()=>({...mt(t),position:new le(e/2-Math.random()*e,e/2-Math.random()*e),speed:new w})),Km=({number:r,range:e,mass:t,blackHoleMass:n})=>{let i=~~(Math.sqrt(r/32)-1),s=new gs(~~(e/5),i).attributes.position;return new Array(s.count).fill().map((o,l)=>({...mt(t),position:new w(s.getX(l),s.getY(l),s.getZ(l)),speed:new w})).concat(Pt(n))},eg=({number:r,range:e,speed:t,mass:n,blackHoleMass:i})=>new Array(r).fill().map(()=>({...mt(n),position:new De(e/2-Math.random()*e,e/2-Math.random()*e,e/2-Math.random()*e,e/2-Math.random()*e),speed:new De(t/2-Math.random()*t,t/2-Math.random()*t,t/2-Math.random()*t,t/2-Math.random()*t)})).concat(Pt(i));var Ol=`varying float blackHole;
varying vec3 tColor;

const float maxR = 0.5;
const float eventHorizon = 0.666;
// const float horizonFade = 0.8;

void main() {
  float r = length(gl_PointCoord - vec2(0.5, 0.5));
  if (r > maxR) discard;

  if (length(tColor) == 0.0) {
    float p = r / maxR;
    float luminance = 0.;
    if(p > eventHorizon) {
      luminance = 1.0;
      // if(p > horizonFade) {
      //   luminance = (p - 1.) - .7 * (p - horizonFade) / (1. -horizonFade - 1.);
      // }
    }
    gl_FragColor = vec4(luminance, luminance, luminance, 0.1);
  } else {
    gl_FragColor = vec4(tColor, 1.0 );
  }
}`;var Bl=`attribute float mass;
attribute float temperature;

uniform float mode;
uniform float scale;
uniform float blackHoleMassThreshold;
varying float blackHole;
varying vec3 tColor;

void main() {
  float size;
  if (mass >= blackHoleMassThreshold) {
    size = 1. + pow(mass, 0.1);
    tColor = vec3(0.);
  } else {
    size = 1. + pow(mass, 0.33333);
    // 
    if(mode == 1.0) { // Rainbow
      float k = mod(temperature / 30., 12.); 
      tColor.r = 0.5 * (1. - max(min(k - 3., 9. - k), -1.));
      k = mod(8. + temperature / 30., 12.); 
      tColor.g = 0.5 * (1. - max(min(k - 3., 9. - k), -1.));
      k = mod(4. + temperature / 30., 12.);
      tColor.b = 0.5 * (1. - max(min(k - 3., 9. - k), -1.));
    } else if (mode == 0.) { // White
      tColor = vec3(1.);
    } else if (mode == 0.75) { // ColorCoded
      float l = 256.;
      tColor.b = floor(temperature / (l * l)) / l;
      tColor.g = floor(temperature / l - tColor.b * l * l) / l;
      tColor.r = temperature / l - tColor.b * l * l  - tColor.g * l;
    } else { // Temperature
      if (temperature < 6600.) {
        tColor.r = 1.0;
        tColor.g = 0.7 * log(temperature + 950.) - 5.3;
        if(temperature < 2000.) {
          tColor.b = 0.;
        } else {
          tColor.b = 0.0000000103591 * temperature * temperature + 0.000131732 * temperature - 0.315826;
        }
      } else {
        tColor.r = 0.3509 + 28274239.0 / (temperature * temperature);
        tColor.g = 0.49 + 20734442.0 / (temperature * temperature);
        tColor.b = 1.0;
      }
      if (mode == 0.25) {// Grayscale
        tColor.r = tColor.g = tColor.b = (tColor.r + tColor.g + tColor.b) / 3.;
      } 
    }
  }

  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

  gl_PointSize = scale * size * (300. / length(mvPosition.xyz));

  gl_Position = projectionMatrix * mvPosition;
}
`;var zr={preset:"Cube",remembered:{Cube:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!0,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"cube",number:3e3,range:1e3,speed:5,mass:10,blackHoleMass:0,scale:35,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.5,softening:10,collisions:!0,collisionThreshold:25,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},Tesseract:{0:{dimensions:4,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:3,zw:4,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"tesseract",number:3e3,range:1500,speed:0,mass:10,blackHoleMass:0,scale:40,colorMode:"Temperature",gravitationalConstant:100,softening:100,simulationSpeed:2,collisions:!0,collisionThreshold:25,escapeDistance:1e5,blackHoleMassThreshold:1e4,creationMode:!1}},FrozenTesseract:{0:{dimensions:4,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:6,zw:7,backend:"rust_none",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"tesseract",number:5e3,range:1e3,speed:0,mass:10,blackHoleMass:0,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,softening:30,simulationSpeed:0,collisions:!1,collisionThreshold:25,escapeDistance:1e5,blackHoleMassThreshold:1e4,creationMode:!1}},Wall:{0:{dimensions:2,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:6,zw:7,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!0,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"plane2",number:1e4,range:3e3,speed:0,mass:10,blackHoleMass:0,scale:20,colorMode:"Temperature",gravitationalConstant:1,softening:35,simulationSpeed:.5,collisions:!1,collisionThreshold:25,escapeDistance:1e5,blackHoleMassThreshold:1e4,creationMode:!1}},RegularCube:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_p2p",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!0,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"regularCube",number:1250,range:1e3,speed:0,mass:1,blackHoleMass:0,scale:50,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.5,softening:10,collisions:!1,collisionThreshold:25,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},Galaxy:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"disc",number:2e3,range:1500,speed:1,mass:10,blackHoleMass:1e5,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.5,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:1e3,blackHoleMassThreshold:1e4,creationMode:!1}},DualGalaxy:{0:{dimensions:4,zFov:45,wFov:45,w:1500,xy:2,xz:3,xw:5,yz:2.5,yw:1.5,zw:3.5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"disc",number:4e3,range:1e3,speed:1,mass:10,blackHoleMass:1e5,scale:28,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:5e3,blackHoleMassThreshold:1e4,creationMode:!1}},BulbGalaxy:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"bulb",number:2e3,range:1500,speed:1,mass:10,blackHoleMass:1e5,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:10,collisions:!0,collisionThreshold:2,escapeDistance:800,blackHoleMassThreshold:1e4,creationMode:!1}},SlowGalaxy:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"disc",number:2e3,range:1500,speed:.75,mass:10,blackHoleMass:1e5,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:10,collisions:!1,collisionThreshold:2,escapeDistance:1e3,blackHoleMassThreshold:1e4,creationMode:!1}},Sphere:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"sphere",number:4e3,range:1500,speed:1,mass:10,blackHoleMass:5e5,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.1,softening:50,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:5e5,creationMode:!1}},HarmonicSphere:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"harmonicSphere",number:5e3,range:1500,speed:15,mass:10,blackHoleMass:5e5,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.2,softening:50,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:5e5,creationMode:!1}},ProtoSolarSystem:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_p2p",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!1,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!0,afterImageDamp:.98,configuration:"solarSystem",number:1e3,range:1e3,speed:15,mass:10,blackHoleMass:0,scale:3,colorMode:"ColorCoded",gravitationalConstant:6.67,simulationSpeed:.001,softening:0,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:2e6,creationMode:!1}},CollidingGalaxies:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:2,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"collidingDisc",number:4e3,range:3e3,speed:10,mass:10,blackHoleMass:5e5,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.075,softening:10,collisions:!0,collisionThreshold:3,escapeDistance:2e3,blackHoleMassThreshold:5e5,creationMode:!1}},CollidingGalaxiesBulb:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:2,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"collidingBulb",number:8e3,range:3e3,speed:10,mass:10,blackHoleMass:5e5,scale:20,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.05,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:5e5,creationMode:!1}},Fountain:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_p2p",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"fountain",number:1e3,range:2e3,speed:5,mass:20,blackHoleMass:1e5,scale:15,colorMode:"Rainbow",gravitationalConstant:6.67,simulationSpeed:.05,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},EightCubes:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_p2p",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!0,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"eightCubes",number:1e3,range:1e3,speed:5,mass:10,blackHoleMass:0,scale:50,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.5,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:2500,creationMode:!1}},Plane:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_p2p",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:2,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"plane",number:1250,range:3e3,speed:15,mass:10,blackHoleMass:5e5,scale:15,colorMode:"White",gravitationalConstant:6.67,simulationSpeed:.1,softening:100,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:5e5,creationMode:!1}},Teapot:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_p2p",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!0,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"teapot",number:2e3,range:2500,speed:15,mass:10,blackHoleMass:0,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:50,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},TeapotWithBlackHole:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_p2p",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!0,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"teapot",number:2e3,range:2500,speed:15,mass:10,blackHoleMass:25e3,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:50,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},Ekusupuroshon:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"js_none",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"expandingSphere",number:5e4,range:10,speed:100,mass:10,blackHoleMass:0,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},Ekusupuroshon2:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"js_none",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!0,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"expandingSphere",number:1e6,range:10,speed:50,mass:10,blackHoleMass:0,scale:5,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},LittleExpand:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"expandingSphere",number:3e3,range:10,speed:40,mass:10,blackHoleMass:0,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},BigSphere:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:2,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"sphere",number:2e4,range:2e3,speed:0,mass:10,blackHoleMass:0,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:1,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}}},closed:!1,folders:{"Render fx":{preset:"Default",closed:!0,folders:{}},Configuration:{preset:"Default",closed:!1,folders:{}},Simulation:{preset:"Default",closed:!1,folders:{}}}};var Yi={};Hs(Yi,{MODE:()=>tg,NODE_ENV:()=>ng,SSR:()=>ig});var tg="production",ng="production",ig=!1;import.meta.env=Yi;var ue,Hl=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Hl.decode();var Or=null;function Br(){return(Or===null||Or.buffer!==ue.memory.buffer)&&(Or=new Uint8Array(ue.memory.buffer)),Or}function vs(r,e){return Hl.decode(Br().subarray(r,r+e))}var We=new Array(32).fill(void 0);We.push(void 0,null,!0,!1);var fi=We.length;function Bn(r){fi===We.length&&We.push(We.length+1);let e=fi;if(fi=We[e],typeof fi!="number")throw new Error("corrupt heap");return We[e]=r,e}function ji(r){return We[r]}function rg(r){r<36||(We[r]=fi,fi=r)}function ys(r){let e=ji(r);return rg(r),e}var Hr=0,Gr=new TextEncoder("utf-8"),ag=typeof Gr.encodeInto=="function"?function(r,e){return Gr.encodeInto(r,e)}:function(r,e){let t=Gr.encode(r);return e.set(t),{read:r.length,written:t.length}};function Gl(r,e,t){if(typeof r!="string")throw new Error("expected a string argument");if(t===void 0){let o=Gr.encode(r),l=e(o.length);return Br().subarray(l,l+o.length).set(o),Hr=o.length,l}let n=r.length,i=e(n),a=Br(),s=0;for(;s<n;s++){let o=r.charCodeAt(s);if(o>127)break;a[i+s]=o}if(s!==n){s!==0&&(r=r.slice(s)),i=t(i,n,n=s+r.length*3);let o=Br().subarray(i+s,i+n),l=ag(r,o);if(l.read!==r.length)throw new Error("failed to pass whole string");s+=l.written}return Hr=s,i}var kr=null;function Vr(){return(kr===null||kr.buffer!==ue.memory.buffer)&&(kr=new Int32Array(ue.memory.buffer)),kr}var gt=32;function Rt(r){if(gt==1)throw new Error("out of js stack");return We[--gt]=r,gt}function xe(r){if(typeof r!="number")throw new Error("expected a number argument")}function Qi(r,e){try{return r.apply(this,e)}catch(t){let n=function(){try{return t instanceof Error?`${t.message}

Stack:
${t.stack}`:t.toString()}catch(i){return"<failed to stringify thrown value>"}}();throw console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:",n),t}}function kl(){var r=ue.wasm_memory();return ys(r)}var pi=class{static __wrap(e){let t=Object.create(pi.prototype);return t.ptr=e,t}__destroy_into_raw(){let e=this.ptr;return this.ptr=0,e}free(){let e=this.__destroy_into_raw();ue.__wbg_barneshutrustgravity_free(e)}constructor(e,t,n){try{xe(n);var i=ue.barneshutrustgravity_new(Rt(e),Rt(t),n);return pi.__wrap(i)}finally{We[gt++]=void 0,We[gt++]=void 0}}xyz_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr);var e=ue.barneshutrustgravity_xyz_ptr(this.ptr);return e}speeds_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr);var e=ue.barneshutrustgravity_speeds_ptr(this.ptr);return e}masses_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr);var e=ue.barneshutrustgravity_masses_ptr(this.ptr);return e}temperatures_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr);var e=ue.barneshutrustgravity_temperatures_ptr(this.ptr);return e}frog_leap(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr),ue.barneshutrustgravity_frog_leap(this.ptr)}simulate(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr);var e=ue.barneshutrustgravity_simulate(this.ptr);return e>>>0}frog_drop(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr),ue.barneshutrustgravity_frog_drop(this.ptr)}grow(e){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr),ue.barneshutrustgravity_grow(this.ptr,Rt(e))}finally{We[gt++]=void 0}}shrink(e){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr),xe(e),ue.barneshutrustgravity_shrink(this.ptr,e)}set_orb(e,t){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr),xe(e),ue.barneshutrustgravity_set_orb(this.ptr,e,Bn(t))}project(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr),ue.barneshutrustgravity_project(this.ptr)}params_change(e){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr),ue.barneshutrustgravity_params_change(this.ptr,Rt(e))}finally{We[gt++]=void 0}}},mi=class{static __wrap(e){let t=Object.create(mi.prototype);return t.ptr=e,t}__destroy_into_raw(){let e=this.ptr;return this.ptr=0,e}free(){let e=this.__destroy_into_raw();ue.__wbg_norustgravity_free(e)}constructor(e,t,n){try{xe(n);var i=ue.norustgravity_new(Rt(e),Rt(t),n);return mi.__wrap(i)}finally{We[gt++]=void 0,We[gt++]=void 0}}xyz_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr);var e=ue.barneshutrustgravity_xyz_ptr(this.ptr);return e}masses_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr);var e=ue.barneshutrustgravity_masses_ptr(this.ptr);return e}temperatures_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr);var e=ue.barneshutrustgravity_temperatures_ptr(this.ptr);return e}frog_leap(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr),ue.norustgravity_frog_leap(this.ptr)}simulate(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr);var e=ue.norustgravity_simulate(this.ptr);return e>>>0}frog_drop(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr),ue.norustgravity_frog_drop(this.ptr)}grow(e){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr),ue.norustgravity_grow(this.ptr,Rt(e))}finally{We[gt++]=void 0}}shrink(e){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr),xe(e),ue.norustgravity_shrink(this.ptr,e)}set_orb(e,t){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr),xe(e),ue.norustgravity_set_orb(this.ptr,e,Bn(t))}project(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr),ue.norustgravity_project(this.ptr)}params_change(e){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr),ue.norustgravity_params_change(this.ptr,Rt(e))}finally{We[gt++]=void 0}}},gi=class{static __wrap(e){let t=Object.create(gi.prototype);return t.ptr=e,t}__destroy_into_raw(){let e=this.ptr;return this.ptr=0,e}free(){let e=this.__destroy_into_raw();ue.__wbg_p2prustgravity_free(e)}constructor(e,t,n){try{xe(n);var i=ue.p2prustgravity_new(Rt(e),Rt(t),n);return gi.__wrap(i)}finally{We[gt++]=void 0,We[gt++]=void 0}}xyz_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr);var e=ue.barneshutrustgravity_xyz_ptr(this.ptr);return e}masses_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr);var e=ue.barneshutrustgravity_masses_ptr(this.ptr);return e}temperatures_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr);var e=ue.barneshutrustgravity_temperatures_ptr(this.ptr);return e}frog_leap(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr),ue.p2prustgravity_frog_leap(this.ptr)}simulate(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr);var e=ue.p2prustgravity_simulate(this.ptr);return e>>>0}frog_drop(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr),ue.p2prustgravity_frog_drop(this.ptr)}grow(e){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr),ue.p2prustgravity_grow(this.ptr,Rt(e))}finally{We[gt++]=void 0}}shrink(e){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr),xe(e),ue.p2prustgravity_shrink(this.ptr,e)}set_orb(e,t){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr),xe(e),ue.p2prustgravity_set_orb(this.ptr,e,Bn(t))}project(){if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr),ue.p2prustgravity_project(this.ptr)}params_change(e){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");xe(this.ptr),ue.p2prustgravity_params_change(this.ptr,Rt(e))}finally{We[gt++]=void 0}}};async function sg(r,e){if(typeof Response=="function"&&r instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(r,e)}catch(n){if(r.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n);else throw n}let t=await r.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{let t=await WebAssembly.instantiate(r,e);return t instanceof WebAssembly.Instance?{instance:t,module:r}:t}}async function Vl(r){typeof r=="undefined"&&(r=new URL("index_bg.wasm",import.meta.url));let e={};e.wbg={},e.wbg.__wbindgen_string_new=function(i,a){var s=vs(i,a);return Bn(s)},e.wbg.__wbindgen_object_drop_ref=function(i){ys(i)},e.wbg.__wbg_length_555f836564bf148d=function(){return Qi(function(i){var a=ji(i).length;return xe(a),a},arguments)},e.wbg.__wbg_get_b7bbf50adcc94294=function(){return Qi(function(i,a){var s=ji(i)[a>>>0];return Bn(s)},arguments)},e.wbg.__wbg_new_59cb74e423758ede=function(){return Qi(function(){var i=new Error;return Bn(i)},arguments)},e.wbg.__wbg_stack_558ba5917b466edd=function(){return Qi(function(i,a){var s=ji(a).stack,o=Gl(s,ue.__wbindgen_malloc,ue.__wbindgen_realloc),l=Hr;Vr()[i/4+1]=l,Vr()[i/4+0]=o},arguments)},e.wbg.__wbg_error_4bb6c2a97407129a=function(){return Qi(function(i,a){try{console.error(vs(i,a))}finally{ue.__wbindgen_free(i,a)}},arguments)},e.wbg.__wbindgen_json_serialize=function(i,a){let s=ji(a);var o=JSON.stringify(s===void 0?null:s),l=Gl(o,ue.__wbindgen_malloc,ue.__wbindgen_realloc),c=Hr;Vr()[i/4+1]=c,Vr()[i/4+0]=l},e.wbg.__wbindgen_memory=function(){var i=ue.memory;return Bn(i)},e.wbg.__wbindgen_throw=function(i,a){throw new Error(vs(i,a))},e.wbg.__wbindgen_rethrow=function(i){throw ys(i)},(typeof r=="string"||typeof Request=="function"&&r instanceof Request||typeof URL=="function"&&r instanceof URL)&&(r=fetch(r));let{instance:t,module:n}=await sg(await r,e);return ue=t.exports,Vl.__wbindgen_wasm_module=n,ue}var Wl=Vl;var og=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function cg(r,e,t){return t={path:e,exports:{},require:function(n,i){return lg(n,i??t.path)}},r(t,t.exports),t.exports}function lg(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var dg=cg(function(r,e){(function(t,n){r.exports=n()})(og,function(){var t=function(){function n(p){return s.appendChild(p.dom),p}function i(p){for(var _=0;_<s.children.length;_++)s.children[_].style.display=_===p?"block":"none";a=p}var a=0,s=document.createElement("div");s.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",s.addEventListener("click",function(p){p.preventDefault(),i(++a%s.children.length)},!1);var o=(performance||Date).now(),l=o,c=0,u=n(new t.Panel("FPS","#0ff","#002")),d=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:s,addPanel:n,showPanel:i,begin:function(){o=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(d.update(p-o,200),p>l+1e3&&(u.update(1e3*c/(p-l),100),l=p,c=0,h)){var _=performance.memory;h.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return p},update:function(){o=this.end()},domElement:s,setMode:i}};return t.Panel=function(n,i,a){var s=Infinity,o=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,d=48*c,h=3*c,p=2*c,_=3*c,g=15*c,x=74*c,f=30*c,m=document.createElement("canvas");m.width=u,m.height=d,m.style.cssText="width:80px;height:48px";var M=m.getContext("2d");return M.font="bold "+9*c+"px Helvetica,Arial,sans-serif",M.textBaseline="top",M.fillStyle=a,M.fillRect(0,0,u,d),M.fillStyle=i,M.fillText(n,h,p),M.fillRect(_,g,x,f),M.fillStyle=a,M.globalAlpha=.9,M.fillRect(_,g,x,f),{dom:m,update:function(T,A){s=Math.min(s,T),o=Math.max(o,T),M.fillStyle=a,M.globalAlpha=1,M.fillRect(0,0,u,g),M.fillStyle=i,M.fillText(l(T)+" "+n+" ("+l(s)+"-"+l(o)+")",h,p),M.drawImage(m,_+c,g,x-c,f,_,g,x-c,f),M.fillRect(_+x-c,g,c,f),M.fillStyle=a,M.globalAlpha=.9,M.fillRect(_+x-c,g,c,l((1-T/A)*f))}}},t})}),Xl=dg;var _i=({colors:r})=>({cell:e})=>r[(e||0)%r.length],Yl=`
uniform float size;
attribute vec3 color;
varying vec3 vColor;

void main() {
  vColor = color;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

  gl_PointSize = size * (10.0 / - mvPosition.z);

  gl_Position = projectionMatrix * mvPosition;
}
`,jl=`
uniform float opacity;
varying vec3 vColor;

void main() {
  if (length(gl_PointCoord - vec2( 0.5, 0.5 )) > 0.475) discard;

  gl_FragColor = vec4(vColor, opacity);
}
`,xi=new Array(128).fill().map((r,e)=>`hsl(${e*29%360}, 60%, 60%)`),v0={faces:{enabled:!0,useColors:!0,colorGenerator:_i,colors:xi,reuse:"none",split:"cells",splitScale:100,material:new Xi({transparent:!0,opacity:.25,blending:Rn,depthWrite:!1,side:Cn,vertexColors:!0})},edges:{enabled:!0,useColors:!0,colorGenerator:_i,colors:xi,reuse:"faces",split:"cells",splitScale:100,material:new Vi({transparent:!0,opacity:.25,blending:Zt,depthWrite:!1,vertexColors:!0,linewidth:2})},points:{enabled:!1,useColors:!0,colorGenerator:_i,colors:xi,reuse:"faces",split:"none",splitScale:100,material:new ke({uniforms:{size:{value:5},opacity:{value:.25}},vertexShader:Yl,fragmentShader:jl,transparent:!0,blending:Zt})}},bs=class{constructor(e,t,n){this.fov=e||Math.PI/2,this.w=t||10,this.wt=0,this.wSlice=0,this.rotation=n||{xy:0,xz:0,xw:0,yz:0,yw:0,zw:0}}project([e,t,n,i]){let[a,s,o,l]=this.rotatePoint([e,t,n,i]),c=1+l*this.fov/this.w;return[a/c,s/c,o/c]}sliceProject(e,t){let[n,i,a,s]=e,[o,l,c,u]=t;if((this.wSlice-s)*(this.wSlice-u)>=0)return;let d=(this.wSlice-s)/(u-s),h=n+d*(o-n),p=i+d*(l-i),_=a+d*(c-a);return this.project([h,p,_,this.wSlice])}slice(e,t){let[n,i,a,s]=this.rotatePoint(e),[o,l,c,u]=this.rotatePoint(t);if((this.wSlice-s)*(this.wSlice-u)>=0)return;let d=(this.wSlice-s)/(u-s),h=n+d*(o-n),p=i+d*(l-i),_=a+d*(c-a);return[h,p,_]}shiftSlice(e,t,n){this.wt+=e/100;let i=(1+Math.cos(this.wt))*.5;this.wSlice=t+(n-t)*i}rotate(e){Object.keys(this.rotation).forEach(t=>{this.rotation[t]=(this.rotation[t]+(e[t]||0)/1e3)%(2*Math.PI)})}rotatePoint([e,t,n,i]){let{xy:a,xz:s,xw:o,yz:l,yw:c,zw:u}=this.rotation,d=Math.cos(a),h=Math.sin(a),p=Math.cos(s),_=Math.sin(s),g=Math.cos(o),x=Math.sin(o),f=Math.cos(l),m=Math.sin(l),M=Math.cos(c),T=Math.sin(c),A=Math.cos(u),v=Math.sin(u),C=e;return e=e*d+t*h,t=t*d-C*h,C=e,e=e*p+n*_,n=n*p-C*_,C=e,e=e*g+i*x,i=i*g-C*x,C=t,t=t*f+n*m,n=n*f-C*m,C=t,t=t*M+i*T,i=i*M-C*T,C=n,n=n*A+i*v,i=i*A-C*v,[e,t,n,i]}},y0={faces:{enabled:!0,useColors:!0,colorGenerator:_i,colors:xi,material:new Xi({side:Cn,shininess:50,vertexColors:!0})},edges:{enabled:!0,useColors:!0,colorGenerator:_i,colors:xi,material:new Vi({transparent:!0,opacity:.25,blending:Zt,depthWrite:!1,vertexColors:!0,linewidth:2})},points:{enabled:!1,useColors:!0,colorGenerator:_i,colors:xi,material:new ke({uniforms:{size:{value:5},opacity:{value:.25}},vertexShader:Yl,fragmentShader:jl,transparent:!0,blending:Zt})}},Ql=(r,[e,t,n=16,i=!1,a=!0],[s,o,l=16,c=!1,u=!0])=>{let d=[],h=[],p=[];for(let _=0;_<l;_++){let g=[];for(let x=0;x<n;x++){d.push(r(e+x*(t-e)/(n-(i?1:0)),s+_*(o-s)/(l-(c?1:0))));let f=x+1<n?x+1:0,m=_+1<l?_+1:0;(a||x+1<n)&&(u||_+1<l)&&(h.push([x+_*n,f+_*n,f+m*n,x+m*n]),g.push(h.length-1))}g.length&&p.push(g)}return{vertices:d,faces:h,cells:p}},ql=(r,e,t=32)=>Ql((n,i)=>[r*Math.cos(n),r*Math.sin(n),e*Math.cos(i),e*Math.sin(i)],[-Math.PI,Math.PI,t],[-Math.PI,Math.PI,t]),ug=(r,e=32)=>ql(r,r,e),b0=ql(1,.5),w0=ug(1),M0=Ql((r,e)=>[Math.cos(r)*Math.sin(e),Math.sin(r)*Math.sin(e),Math.cos(e)*Math.sin(r),Math.cos(e)*Math.cos(r)],[-Math.PI,Math.PI,32],[-Math.PI,Math.PI,32]),Wt=(r,[e,t,n=16,i=!1,a=!0],[s,o,l=16,c=!1,u=!0],[d,h,p=16,_=!1,g=!0],x={u:!0,v:!0,w:!0})=>{let f=[],m=[],M=[],T=[],A=[];for(let v=0;v<p;v++){let C=[];for(let U=0;U<l;U++){let B=A[U]||[];for(let G=0;G<n;G++){let Q=T[G]||[];f.push(r(e+G*(t-e)/(n-(i?1:0)),s+U*(o-s)/(l-(c?1:0)),d+v*(h-d)/(p-(_?1:0))));let H=G+1<n?G+1:0,P=U+1<l?U+1:0,R=v+1<p?v+1:0;(a||G+1<n)&&(u||U+1<l)&&(m.push([G+U*n+v*n*l,H+U*n+v*n*l,H+P*n+v*n*l,G+P*n+v*n*l]),C.push(m.length-1)),(a||G+1<n)&&(g||v+1<p)&&(m.push([G+U*n+v*n*l,G+U*n+R*n*l,H+U*n+R*n*l,H+U*n+v*n*l]),B.push(m.length-1)),(u||U+1<l)&&(g||v+1<p)&&(m.push([G+U*n+v*n*l,G+U*n+R*n*l,G+P*n+R*n*l,G+P*n+v*n*l]),Q.push(m.length-1)),T[G]=Q}A[U]=B}x.w&&M.push(C)}return x.v&&A.map(v=>M.push(v)),x.u&&T.map(v=>M.push(v)),{vertices:f,faces:m,cells:M}},hg=r=>Wt((e,t,n)=>[r*Math.cos(e),r*Math.sin(e)*Math.cos(t),r*Math.sin(e)*Math.sin(t)*Math.cos(n),r*Math.sin(e)*Math.sin(t)*Math.sin(n)],[0,Math.PI,16,!0],[0,2*Math.PI,16],[0,2*Math.PI,16]),S0=hg(1),fg=(r,e,t)=>Wt((n,i,a)=>[r*Math.cos(n),(e+r*Math.sin(n))*Math.cos(i),(t+(e+r*Math.sin(n))*Math.sin(i))*Math.cos(a),(t+(e+r*Math.sin(n))*Math.sin(i))*Math.sin(a)],[0,Math.PI,16,!0],[0,2*Math.PI,16],[0,2*Math.PI,16]),A0=fg(.25,.5,1),E0=Wt((r,e,t)=>[2*Math.cos(r)*Math.cos(e),2*Math.cos(r)*Math.sin(e),2*Math.sin(r),t],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,5]),T0=Wt((r,e,t)=>[t+2*Math.cos(r)*Math.cos(e),t+2*Math.cos(r)*Math.sin(e),t+2*Math.sin(r),t],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,5]),L0=Wt((r,e,t)=>[Math.sin(r)*Math.cos(e),Math.sin(r)*Math.sin(e),Math.cos(r),t],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,2,!0],{u:!0,v:!1,w:!0}),P0=Wt((r,e,t)=>[(1+.5*Math.cos(r))*Math.cos(e),(1+.5*Math.cos(r))*Math.sin(e),.5*Math.cos(r),t],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,2,!0],{u:!0,v:!1,w:!0}),F0=Wt((r,e,t)=>[Math.cos(r),Math.sin(r),e,t],[-Math.PI,Math.PI,32,!0],[-1,1,2,!0],[-1,1,2,!0],{u:!1,v:!0,w:!0}),C0=Wt((r,e,t)=>[.25*Math.cos(r)+1*Math.cos(r)*Math.cos(t),.25*Math.sin(r)+1*Math.sin(r)*Math.cos(t),.75*Math.cos(e)+1*Math.cos(e)*Math.sin(t),.75*Math.sin(e)+1*Math.sin(e)*Math.sin(t)],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],{u:!0,v:!1,w:!0}),R0=Wt((r,e,t)=>[.5*Math.cos(r)*Math.cos(e)*Math.cos(t)+1*Math.cos(e)*Math.cos(t),.5*Math.cos(r)*Math.cos(e)*Math.sin(t)+1*Math.cos(e)*Math.sin(t),.5*Math.cos(r)*Math.sin(e)+1*Math.sin(e),.5*Math.sin(r)],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,16,!0]),D0=Wt((r,e,t)=>[.5*Math.cos(r)*Math.cos(e)*Math.cos(t)+1*Math.cos(t),.5*Math.cos(r)*Math.cos(e)*Math.sin(t)+1*Math.sin(t),.5*Math.cos(r)*Math.sin(e),.5*Math.sin(r)],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,16,!0]),N0=Wt((r,e,t)=>[r,e,t,r*e*t],[-1,1,2,!0],[-1,1,2,!0],[-1,1,2,!0]);var ws=class{constructor(e,t,n){this.alive=!0,this.params=t,this.N=t.dimensions,this.vectorSuffix="xyzw",this.len=e.length,this.N>3&&(this.projector=new bs(t.wFov*Math.PI/180,t.w)),this.xyz=new Float32Array(n*3),this.positions=this.N===3?this.xyz:new Float32Array(n*this.N),this.speeds=new Float32Array(this.N*n),this.accelerations=new Float32Array(this.N*n),this.masses=new Float32Array(n),this.temperatures=new Float32Array(n),e.forEach((i,a)=>this.set_orb(a,i))}params_change(e){this.projector&&(this.projector.fov=e.wFov*Math.PI/180,this.projector.w=e.w)}frog_leap(){let e=this.params.simulationSpeed,t=e*.5;for(let n=0,i=this.len;n<i;n++){let a=n*this.N;for(let s=0;s<this.N;s++)this.speeds[a+s]+=this.accelerations[a+s]*t,this.positions[a+s]+=this.speeds[a+s]*e}}aggregateCollisions(e){let t=[];for(let n=0,i=e.length;n<i;n++){let[a,s]=e[n],o=!0;for(let l=0,c=t.length;l<c;l++){let u=t[l],d=u.includes(a),h=u.includes(s);if((d||h)&&(o=!1),d!==h){let p=d?s:a;p>u[0]?u.push(p):u.unshift(p);break}}o&&t.push(a>s?[s,a]:[a,s])}return t}solveCollisions(e){for(let t=0,n=e.length;t<n;t++){let i=e[t],a=i[0],s=a*this.N;for(let o=1,l=i.length;o<l;o++){let c=i[o],u=c*this.N,d=1/(this.masses[a]+this.masses[c]);for(let h=0;h<this.N;h++)this.positions[s+h]=d*(this.positions[s+h]*this.masses[a]+this.positions[u+h]*this.masses[c]),this.speeds[s+h]=d*(this.speeds[s+h]*this.masses[a]+this.speeds[u+h]*this.masses[c]);this.temperatures[a]=d*(this.temperatures[a]*this.masses[a]+this.temperatures[c]*this.masses[c]),this.masses[a]+=this.masses[c]}}}solveEscapes(){let e=[],{escapeDistance:t}=this.params;if(!t)return e;let n=t*t;for(let i=0,a=this.len;i<a;i++){let s=i*this.N,o=0;for(let l=0;l<this.N;l++)o+=this.positions[s+l]*this.positions[s+l];o>n&&e.push(i)}return e}crunchOrbs(e){let t=0,n=0;for(;t+n<this.len;){if(e.includes(t+n)){n+=1;continue}if(n==0){t+=1;continue}let i=t*this.N,a=(t+n)*this.N;for(let s=0;s<this.N;s++)this.positions[i+s]=this.positions[a+s],this.speeds[i+s]=this.speeds[a+s],this.accelerations[i+s]=this.accelerations[a+s];this.temperatures[t]=this.temperatures[t+n],this.masses[t]=this.masses[t+n],t+=1}return this.len-n}solve(e){let t=this.solveEscapes();return e.length&&(e=this.aggregateCollisions(e),e.forEach(n=>{t.push(...n.slice(1))}),this.solveCollisions(e)),t.length&&(this.len=this.crunchOrbs(t)),this.len}async simulate(){return this.solve([])}frog_drop(){let t=this.params.simulationSpeed*.5;for(let n=0,i=this.len;n<i;n++){let a=n*this.N;for(let s=0;s<this.N;s++)this.speeds[a+s]+=this.accelerations[a+s]*t}this.projector&&this.projector.rotate(this.params)}set_orb(e,{position:t,mass:n,speed:i,temperature:a}){let s=e*this.N;for(let o=0;o<this.N;o++){let l=this.vectorSuffix[o];this.positions[s+o]=t[l]||0,this.speeds[s+o]=i[l]||0}this.masses[e]=n,this.temperatures[e]=a}grow(e){if(this.len+e.length>this.temperatures.length){console.warn("Can't grow");return}e.forEach((t,n)=>this.set_orb(this.len+n,t)),this.len+=e.length}shrink(e){if(this.len-e<0){console.warn("Can't shrink");return}this.len-=e}project(){if(this.N!==3){if(this.N===2)for(let e=0,t=this.len;e<t;e++){let n=e*2,i=n+e;this.xyz[i]=this.positions[n],this.xyz[i+1]=this.positions[n+1],this.xyz[i+2]=0}else if(this.N===4)for(let e=0,t=this.len;e<t;e++){let n=e*3,i=n+e,a=this.projector.project([this.positions[i],this.positions[i+1],this.positions[i+2],this.positions[i+3]]);this.xyz[n]=a[0],this.xyz[n+1]=a[1],this.xyz[n+2]=a[2]}}}free(){this.alive=!1,delete this.temperatures,delete this.masses,delete this.accelerations,delete this.speeds,delete this.positions,delete this.xyz}},bn=ws;var Ms=class extends bn{compute2(e,t,n,i,a,s,o,l,c,u){t[0]=this.positions[s]-this.positions[i],t[1]=this.positions[s+1]-this.positions[i+1];let d=t[0]*t[0]+t[1]*t[1];l&&d<c&&u.push([n,a]);let h=this.masses[a]/(d+o);e[0]+=t[0]*h,e[1]+=t[1]*h}compute3(e,t,n,i,a,s,o,l,c,u){t[0]=this.positions[s]-this.positions[i],t[1]=this.positions[s+1]-this.positions[i+1],t[2]=this.positions[s+2]-this.positions[i+2];let d=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],h=Math.sqrt(d+o);l&&d<c&&u.push([n,a]);let p=this.masses[a]/(h*h*h);e[0]+=t[0]*p,e[1]+=t[1]*p,e[2]+=t[2]*p}compute4(e,t,n,i,a,s,o,l,c,u){t[0]=this.positions[s]-this.positions[i],t[1]=this.positions[s+1]-this.positions[i+1],t[2]=this.positions[s+2]-this.positions[i+2],t[3]=this.positions[s+3]-this.positions[i+3];let d=t[0]*t[0]+t[1]*t[1]+t[2]*t[2]+t[3]*t[3];l&&d<c&&u.push([n,a]);let h=d+o,p=this.masses[a]/(h*h);e[0]+=t[0]*p,e[1]+=t[1]*p,e[2]+=t[2]*p,e[3]+=t[3]*p}compute(e,t,n,i,a,s,o,l,c){let u=this[`compute${n}`].bind(this),d=new Array(n).fill(0),h=new Array(n).fill(0);for(let p=e,_=t;p<_;p++){let g=p*n;h.fill(0);for(let x=0;x<i;x++){if(p===x)continue;let f=x*n;u(h,d,p,g,x,f,s,o,l,c)}for(let x=0;x<n;x++)this.accelerations[g+x]=h[x]*a}}async simulate(){let{gravitationalConstant:e,softening:t,collisions:n,collisionThreshold:i}=this.params,a=t*t,s=i*i,o=[];return this.compute(0,this.len,this.N,this.len,e,a,n,s,o),this.solve(o)}},Zl=Ms;var Ss=class extends bn{frog_leap(){let e=this.params.simulationSpeed;for(let t=0,n=this.len;t<n;t++){let i=t*this.N;for(let a=0;a<this.N;a++)this.positions[i+a]+=this.speeds[i+a]*e}}simulate(){return this.len}frog_drop(){}},$l=Ss;var Wr=(r,...e)=>{class t extends r{constructor(...a){super(...a);e.forEach(s=>{n(this,new s(...a))})}}let n=(i,a)=>{Object.getOwnPropertyNames(a).concat(Object.getOwnPropertySymbols(a)).forEach(s=>{s.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/)||Object.defineProperty(i,s,Object.getOwnPropertyDescriptor(a,s))})};return e.forEach(i=>{n(t.prototype,i.prototype),n(t,i)}),t},wn=(r,...e)=>new Promise(t=>{r.postMessage(...e),r.onmessage=n=>t(n.data)});import.meta.env=Yi;var As=class extends bn{constructor(e,t,n,i="p2p-thread"){super(e,t,n);this.initThreadPool(i)}initThreadPool(e){this.pool=new Array(~~this.params.threads).fill().map(()=>{let t=import.meta.url;return new Worker(new URL(`./worker/${e}.js`,t),{type:"module"})})}async simulate(){let{gravitationalConstant:e,softening:t,collisions:n,collisionThreshold:i}=this.params,a=[],s=t*t,o=i*i,l=~~(this.len/this.pool.length),c=await Promise.all(this.pool.map((u,d)=>wn(u,[d*l,d==this.pool.length-1?this.len:(d+1)*l,this.len,this.N,e,s,n,o,this.accelerations.buffer,this.positions.buffer,this.masses.buffer])));if(!!this.alive)return c.forEach(([u,d,h,p])=>{let _=new Float32Array(u);for(let g=d;g<h;g++){let x=g*3;this.accelerations[x]=_[x],this.accelerations[x+1]=_[x+1],this.accelerations[x+2]=_[x+2]}a.push(...p)}),this.solve(a)}free(){super.free(),this.pool.forEach(e=>e.terminate())}},vi=As;var Es=class extends vi{constructor(e,t,n,i="p2p-thread-sab"){super(e,t,n,i);this.xyzBuffer=new SharedArrayBuffer(3*n*4),this.positionsBuffer=this.N===3?this.xyzBuffer:new SharedArrayBuffer(this.N*n*4),this.xyz=new Float32Array(this.xyzBuffer),this.positions=new Float32Array(this.positionsBuffer),this.speedsBuffer=new SharedArrayBuffer(this.N*n*4),this.speeds=new Float32Array(this.speedsBuffer),this.accelerationsBuffer=new SharedArrayBuffer(this.N*n*4),this.accelerations=new Float32Array(this.accelerationsBuffer),this.massesBuffer=new SharedArrayBuffer(n*4),this.masses=new Float32Array(this.massesBuffer),this.pool.forEach(a=>{a.postMessage([this.accelerationsBuffer,this.positionsBuffer,this.massesBuffer])}),e.forEach((a,s)=>this.set_orb(s,a))}async simulate(){let{gravitationalConstant:e,softening:t,collisions:n,collisionThreshold:i}=this.params,a=[],s=t*t,o=i*i,l=~~(this.len/this.pool.length),c=await Promise.all(this.pool.map((u,d)=>wn(u,[d*l,d==this.pool.length-1?this.len:(d+1)*l,this.len,this.N,e,s,n,o])));if(!!this.alive)return c.forEach(([u])=>{a.push(...u)}),this.solve(a)}},Xr=Es;var Jl=[[0,0],[1,0],[1,1],[0,1]],Kl=[[0,0,0],[1,0,0],[1,0,1],[0,0,1],[0,1,0],[1,1,0],[1,1,1],[0,1,1]],ec=[[0,0,0,0],[1,0,0,0],[1,0,1,0],[0,0,1,0],[0,0,0,1],[1,0,0,1],[1,0,1,1],[0,0,1,1],[0,1,0,0],[1,1,0,0],[1,1,1,0],[0,1,1,0],[0,1,0,1],[1,1,0,1],[1,1,1,1],[0,1,1,1]],Ts=class extends bn{subdivide2(e){let t=e.size/2;e.leaf=!1,e.quadrants=Jl.map(([n,i])=>({x:e.x+n*t,y:e.y+i*t,size:t,index:null,mass:0,cx:0,cy:0,quadrants:null,leaf:!0}))}getSubCell2(e,t){let n=t*2,i=this.positions[n]>e.quadrants[2].x,a=this.positions[n+1]>e.quadrants[2].y;return e.quadrants[Jl.findIndex(([s,o])=>!!s==i&&!!o==a)]}addParticle2(e,t){if(e.index===null){e.index=t;return}this.subdivide2(e);let n=this.getSubCell2(e,e.index);n.index=e.index;let i=this.getSubCell2(e,t);if(n===i){let a=t*2,s=e.index*2;this.positions[s]===this.positions[a]&&this.positions[s+1]===this.positions[a+1]||this.addParticle2(n,t)}i.index=t}makeOctree2(e,t){let n={x:e,y:e,size:t,index:null,mass:0,cx:0,cy:0,quadrants:null,leaf:!0};for(let i=0;i<this.len;i++){let a=n;for(;!a.leaf;)a=this.getSubCell2(a,i);this.addParticle2(a,i)}return n}massDistribution2(e){if(e.leaf){let t=e.index*2;e.cx=this.positions[t],e.cy=this.positions[t+1],e.mass=this.masses[e.index]}else{for(let t=0,n=e.quadrants.length;t<n;t++){let i=e.quadrants[t];i.index!==null&&(this.massDistribution2(i),e.mass+=i.mass,e.cx+=i.cx*i.mass,e.cy+=i.cy*i.mass)}e.cx/=e.mass,e.cy/=e.mass}}compute2(e,t,n,i,a,s,o){if(e.leaf){if(e.index!==null&&e.index!==t){let l=t*2,c=e.index*2,u=this.positions[c]-this.positions[l],d=this.positions[c+1]-this.positions[l+1],h=u*u+d*d;a&&h<o&&s.push([t,e.index]);let p=this.masses[e.index]/(h+i);this.accelerations[l]+=p*u,this.accelerations[l+1]+=p*d}}else{let l=t*2,c=e.cx-this.positions[l],u=e.cy-this.positions[l+1],d=c*c+u*u;if(e.size*e.size<n*n*d){let p=e.mass/d;this.accelerations[l]+=p*c,this.accelerations[l+1]+=p*u}else for(let p=0,_=e.quadrants.length;p<_;p++)this.compute2(e.quadrants[p],t,n,i,a,s,o)}}subdivide3(e){let t=e.size/2;e.leaf=!1,e.octants=Kl.map(([n,i,a])=>({x:e.x+n*t,y:e.y+i*t,z:e.z+a*t,size:t,index:null,mass:0,cx:0,cy:0,cz:0,octants:null,leaf:!0}))}getSubCell3(e,t){let n=t*3,i=this.positions[n]>e.octants[6].x,a=this.positions[n+1]>e.octants[6].y,s=this.positions[n+2]>e.octants[6].z;return e.octants[Kl.findIndex(([o,l,c])=>!!o==i&&!!l==a&&!!c==s)]}addParticle3(e,t){if(e.index===null){e.index=t;return}this.subdivide3(e);let n=this.getSubCell3(e,e.index);n.index=e.index;let i=this.getSubCell3(e,t);if(n===i){let a=t*3,s=e.index*3;this.positions[s]===this.positions[a]&&this.positions[s+1]===this.positions[a+1]&&this.positions[s+2]===this.positions[a+2]||this.addParticle3(n,t)}i.index=t}makeOctree3(e,t){let n={x:e,y:e,z:e,size:t,index:null,mass:0,cx:0,cy:0,cz:0,octants:null,leaf:!0};for(let i=0;i<this.len;i++){let a=n;for(;!a.leaf;)a=this.getSubCell3(a,i);this.addParticle3(a,i)}return n}massDistribution3(e){if(e.leaf){let t=e.index*3;e.cx=this.positions[t],e.cy=this.positions[t+1],e.cz=this.positions[t+2],e.mass=this.masses[e.index]}else{for(let t=0,n=e.octants.length;t<n;t++){let i=e.octants[t];i.index!==null&&(this.massDistribution3(i),e.mass+=i.mass,e.cx+=i.cx*i.mass,e.cy+=i.cy*i.mass,e.cz+=i.cz*i.mass)}e.cx/=e.mass,e.cy/=e.mass,e.cz/=e.mass}}compute3(e,t,n,i,a,s,o){if(e.leaf){if(e.index!==null&&e.index!==t){let l=t*3,c=e.index*3,u=this.positions[c]-this.positions[l],d=this.positions[c+1]-this.positions[l+1],h=this.positions[c+2]-this.positions[l+2],p=u*u+d*d+h*h,_=Math.sqrt(p+i);a&&p<o&&s.push([t,e.index]);let g=this.masses[e.index]/(_*_*_);this.accelerations[l]+=g*u,this.accelerations[l+1]+=g*d,this.accelerations[l+2]+=g*h}}else{let l=t*3,c=e.cx-this.positions[l],u=e.cy-this.positions[l+1],d=e.cz-this.positions[l+2],h=Math.sqrt(c*c+u*u+d*d);if(e.size<n*h){let _=e.mass/(h*h*h);this.accelerations[l]+=_*c,this.accelerations[l+1]+=_*u,this.accelerations[l+2]+=_*d}else for(let _=0,g=e.octants.length;_<g;_++)this.compute3(e.octants[_],t,n,i,a,s,o)}}subdivide4(e){let t=e.size/2;e.leaf=!1,e.hexadecants=ec.map(([n,i,a,s])=>({x:e.x+n*t,y:e.y+i*t,z:e.z+a*t,w:e.w+s*t,size:t,index:null,mass:0,cx:0,cy:0,cz:0,cw:0,hexadecants:null,leaf:!0}))}getSubCell4(e,t){let n=t*4,i=this.positions[n]>e.hexadecants[14].x,a=this.positions[n+1]>e.hexadecants[14].y,s=this.positions[n+2]>e.hexadecants[14].z,o=this.positions[n+3]>e.hexadecants[14].w;return e.hexadecants[ec.findIndex(([l,c,u,d])=>!!l==i&&!!c==a&&!!u==s&&!!d==o)]}addParticle4(e,t){if(e.index===null){e.index=t;return}this.subdivide4(e);let n=this.getSubCell4(e,e.index);n.index=e.index;let i=this.getSubCell4(e,t);if(n===i){let a=t*4,s=e.index*4;this.positions[s]===this.positions[a]&&this.positions[s+1]===this.positions[a+1]&&this.positions[s+2]===this.positions[a+2]&&this.positions[s+3]===this.positions[a+3]||this.addParticle4(n,t)}i.index=t}makeOctree4(e,t){let n={x:e,y:e,z:e,w:e,size:t,index:null,mass:0,cx:0,cy:0,cz:0,cw:0,hexadecants:null,leaf:!0};for(let i=0;i<this.len;i++){let a=n;for(;!a.leaf;)a=this.getSubCell4(a,i);this.addParticle4(a,i)}return n}massDistribution4(e){if(e.leaf){let t=e.index*4;e.cx=this.positions[t],e.cy=this.positions[t+1],e.cz=this.positions[t+2],e.cw=this.positions[t+3],e.mass=this.masses[e.index]}else{for(let t=0,n=e.hexadecants.length;t<n;t++){let i=e.hexadecants[t];i.index!==null&&(this.massDistribution4(i),e.mass+=i.mass,e.cx+=i.cx*i.mass,e.cy+=i.cy*i.mass,e.cz+=i.cz*i.mass,e.cw+=i.cw*i.mass)}e.cx/=e.mass,e.cy/=e.mass,e.cz/=e.mass,e.cw/=e.mass}}compute4(e,t,n,i,a,s,o){if(e.leaf){if(e.index!==null&&e.index!==t){let l=t*4,c=e.index*4,u=this.positions[c]-this.positions[l],d=this.positions[c+1]-this.positions[l+1],h=this.positions[c+2]-this.positions[l+2],p=this.positions[c+3]-this.positions[l+3],_=u*u+d*d+h*h+p*p,g=_+i;a&&_<o&&s.push([t,e.index]);let x=this.masses[e.index]/(g*g);this.accelerations[l]+=x*u,this.accelerations[l+1]+=x*d,this.accelerations[l+2]+=x*h,this.accelerations[l+3]+=x*p}}else{let l=t*4,c=e.cx-this.positions[l],u=e.cy-this.positions[l+1],d=e.cz-this.positions[l+2],h=e.cw-this.positions[l+3],p=c*c+u*u+d*d+h*h;if(e.size*e.size<n*n*p){let g=e.mass/(p*p);this.accelerations[l]+=g*c,this.accelerations[l+1]+=g*u,this.accelerations[l+2]+=g*d,this.accelerations[l+3]+=g*h}else for(let g=0,x=e.hexadecants.length;g<x;g++)this.compute4(e.hexadecants[g],t,n,i,a,s,o)}}async simulate(){let{theta:e,softening:t,gravitationalConstant:n,collisions:i,collisionThreshold:a}=this.params,s=[],o=t*t,l=a*a,c=Math.min.apply(null,this.positions),u=Math.max.apply(null,this.positions),d=this[`compute${this.N}`].bind(this),h=this[`makeOctree${this.N}`](c,u-c);this[`massDistribution${this.N}`](h);for(let p=0;p<this.len;p++){let _=p*this.N;for(let g=0;g<this.N;g++)this.accelerations[_+g]=0;d(h,p,e,o,i,s,l);for(let g=0;g<this.N;g++)this.accelerations[_+g]*=n}return this.solve(s)}},yi=Ts;var Ls=class extends Wr(vi,yi){constructor(e,t,n,i="bh-thread"){super(e,t,n,i)}fill2(e,t,n){let i=n.shift;if(t[0+i]=e.size,t[1+i]=e.index,t[2+i]=e.mass,t[3+i]=e.cx,t[4+i]=e.cy,e.leaf)for(let a=0;a<4;a++)t[5+a+i]=NaN;else for(let a=0;a<4;a++)n.shift+=9,t[5+a+i]=n.shift,this.fill2(e.quadrants[a],t,n);return i}fill3(e,t,n){let i=n.shift;if(t[0+i]=e.size,t[1+i]=e.index,t[2+i]=e.mass,t[3+i]=e.cx,t[4+i]=e.cy,t[5+i]=e.cz,e.leaf)for(let a=0;a<8;a++)t[6+a+i]=NaN;else for(let a=0;a<8;a++)n.shift+=14,t[6+a+i]=n.shift,this.fill3(e.octants[a],t,n);return i}fill4(e,t,n){let i=n.shift;if(t[0+i]=e.size,t[1+i]=e.index,t[2+i]=e.mass,t[3+i]=e.cx,t[4+i]=e.cy,t[5+i]=e.cz,t[6+i]=e.cw,e.leaf)for(let a=0;a<16;a++)t[7+a+i]=NaN;else for(let a=0;a<16;a++)n.shift+=23,t[7+a+i]=n.shift,this.fill4(e.hexadecants[a],t,n);return i}async simulate(){let{gravitationalConstant:e,softening:t,collisions:n,collisionThreshold:i,theta:a}=this.params,s=[],o=t*t,l=i*i,c=Math.min.apply(null,this.positions),u=Math.max.apply(null,this.positions),d=this[`makeOctree${this.N}`](c,u-c);this[`massDistribution${this.N}`](d);let h={2:"quadrants",3:"octants",4:"hexadecants"}[this.N],p=M=>M[h]?M[h].length+M[h].map(p).reduce((T,A)=>T+A,0):0,_=p(d)+1,g={2:9,3:14,4:23}[this.N],x=new Float32Array(_*g);this[`fill${this.N}`](d,x,{shift:0});let f=~~(this.len/this.pool.length),m=await Promise.all(this.pool.map((M,T)=>wn(M,[T*f,T==this.pool.length-1?this.len:(T+1)*f,this.N,a,e,o,n,l,this.accelerations.buffer,this.positions.buffer,this.masses.buffer,x.buffer])));if(!!this.alive)return m.forEach(([M,T,A,v])=>{let C=new Float32Array(M);for(let U=T;U<A;U++){let B=U*this.N;for(let G=0;G<this.N;G++)this.accelerations[B+G]=C[B+G]}s.push(...v)}),this.solve(s)}},tc=Ls;var Ps=class extends Wr(yi,Xr){constructor(e,t,n,i="bh-thread-sab"){super(e,t,n,i)}fill2(e,t,n){let i=n.shift;if(t[0+i]=e.size,t[1+i]=e.index,t[2+i]=e.mass,t[3+i]=e.cx,t[4+i]=e.cy,e.leaf)for(let a=0;a<4;a++)t[5+a+i]=NaN;else for(let a=0;a<4;a++)n.shift+=9,t[5+a+i]=n.shift,this.fill2(e.quadrants[a],t,n);return i}fill3(e,t,n){let i=n.shift;if(t[0+i]=e.size,t[1+i]=e.index,t[2+i]=e.mass,t[3+i]=e.cx,t[4+i]=e.cy,t[5+i]=e.cz,e.leaf)for(let a=0;a<8;a++)t[6+a+i]=NaN;else for(let a=0;a<8;a++)n.shift+=14,t[6+a+i]=n.shift,this.fill3(e.octants[a],t,n);return i}fill4(e,t,n){let i=n.shift;if(t[0+i]=e.size,t[1+i]=e.index,t[2+i]=e.mass,t[3+i]=e.cx,t[4+i]=e.cy,t[5+i]=e.cz,t[6+i]=e.cw,e.leaf)for(let a=0;a<16;a++)t[7+a+i]=NaN;else for(let a=0;a<16;a++)n.shift+=23,t[7+a+i]=n.shift,this.fill4(e.hexadecants[a],t,n);return i}async simulate(){let{gravitationalConstant:e,softening:t,collisions:n,collisionThreshold:i,theta:a}=this.params,s=[],o=t*t,l=i*i,c=Math.min.apply(null,this.positions),u=Math.max.apply(null,this.positions),d=this[`makeOctree${this.N}`](c,u-c);this[`massDistribution${this.N}`](d);let h={2:"quadrants",3:"octants",4:"hexadecants"}[this.N],p=T=>T[h]?T[h].length+T[h].map(p).reduce((A,v)=>A+v,0):0,_=p(d)+1,g={2:9,3:14,4:23}[this.N],x=new SharedArrayBuffer(_*g*4),f=new Float32Array(x);this[`fill${this.N}`](d,f,{shift:0});let m=~~(this.len/this.pool.length),M=await Promise.all(this.pool.map((T,A)=>wn(T,[A*m,A==this.pool.length-1?this.len:(A+1)*m,this.N,a,e,o,n,l,x])));if(!!this.alive)return M.forEach(([T])=>{s.push(...T)}),this.solve(s)}free(){super.free(),this.pool.forEach(e=>e.terminate())}},nc=Ps;var Yr=null,$e=null,Fs={Temperature:.5,Rainbow:1,Grayscale:.25,White:0,ColorCoded:.75},_t,ct,dt,ic=!1,qi={js_p2p:Zl,rust_p2p:gi,js_p2p_threaded:vi,js_p2p_sab:Xr,js_bh:yi,js_bh_threaded:tc,js_bh_sab:nc,rust_bh:pi,js_none:$l,rust_none:mi},pg={js_p2p_sab:"js_p2p_threaded",js_bh_sab:"js_bh_threaded"};typeof SharedArrayBuffer=="undefined"&&(delete qi.js_p2p_sab,delete qi.js_bh_sab);var jr=new Xl,rc=()=>decodeURIComponent(location.hash.replace(/^#/,""))||zr.preset,ac=rc(),ce=new Proxy({...zr.remembered[ac][0]},{set(r,e,t){return r[e]=t,ct?.params_change(r,e,t),!0}}),Dt=new Ue;Dt.setPixelRatio(window.devicePixelRatio);Dt.setSize(window.innerWidth,window.innerHeight);Dt.toneMapping=Di;document.body.appendChild(Dt.domElement);document.body.appendChild(jr.dom);var Cs=new ci,rn=new ft(45,window.innerWidth/window.innerHeight,1,2e4);rn.position.set(1500,1500,1500);rn.lookAt(0,0,0);var Mn=new hs(rn,Dt.domElement);Mn.minDistance=1;Mn.maxDistance=2e4;Mn.enableDamping=!0;Mn.dampingFactor=.05;var bi=new ps(Dt),mg=new ms(Cs,rn);bi.addPass(mg);var Zi=new cs;Zi.uniforms.damp.value=ce.afterImageDamp;Zi.enabled=ce.afterImage;bi.addPass(Zi);var Hn=new On(zl),sc=Dt.getPixelRatio();Hn.material.uniforms.resolution.value.x=1/(window.innerWidth*sc);Hn.material.uniforms.resolution.value.y=1/(window.innerHeight*sc);Hn.enabled=ce.fxaa;bi.addPass(Hn);var wi=new yn(new le(window.innerWidth,window.innerHeight),ce.bloomStrength,ce.bloomRadius,ce.bloomThreshold);Dt.toneMappingExposure=ce.bloomExposure;wi.enabled=ce.bloom;bi.addPass(wi);window.addEventListener("resize",gg);function gg(){rn.aspect=window.innerWidth/window.innerHeight,rn.updateProjectionMatrix(),Dt.setSize(window.innerWidth,window.innerHeight),bi.setSize(window.innerWidth,window.innerHeight);let r=Dt.getPixelRatio();Hn.material.uniforms.resolution.value.x=1/(window.innerWidth*r),Hn.material.uniforms.resolution.value.y=1/(window.innerHeight*r)}async function Rs(){jr.update(),await _g(),Yr=requestAnimationFrame(Rs)}async function _g(){if($e!==null){if($i.setFromCamera(Ds,rn),$e.iter===0){let{escapeDistance:e}=ce,t=new w;t.copy($i.ray.origin),t.addScaledVector($i.ray.direction,2e3),t.length()>e&&t.normalize().multiplyScalar(e*.9),$e.iter++;let n=new w;n.copy($i.ray.direction),n.multiplyScalar($e.speed);let i=Math.pow($e.iter/50,4)*ce.mass;$e.orb={position:t,speed:n,mass:i,temperature:Ir(i)},ct.grow([$e.orb])}else $e.iter++,$e.orb.speed.copy($i.ray.direction),$e.orb.speed.multiplyScalar($e.speed),$e.orb.mass=Math.pow($e.iter/50,4)*ce.mass,$e.orb.temperature=Ir($e.orb.mass),ct.set_orb(ct.len-1,$e.orb);_t.geometry.attributes.temperature.needsUpdate=!0,_t.geometry.attributes.mass.needsUpdate=!0}ct.frog_leap();let r=await ct.simulate();ct.frog_drop(),ct.project(),ce.backend.startsWith("rust")&&!_t.geometry.attributes.temperature.array.buffer.byteLength&&(console.log("Memory has grown"),oc(_t.geometry,_t.geometry.attributes.temperature.count)),r!==_t.geometry.drawRange.count&&(_t.geometry.setDrawRange(0,r),_t.geometry.attributes.temperature.needsUpdate=!0,_t.geometry.attributes.mass.needsUpdate=!0),_t.geometry.attributes.position.needsUpdate=!0,Mn.update(),bi.render()}function oc(r,e){let{buffer:t}=kl(),n=new Float32Array(t,ct.xyz_ptr(),3*e),i=new Float32Array(t,ct.masses_ptr(),e),a=new Float32Array(t,ct.temperatures_ptr(),e);r.setAttribute("position",new ze(n,3).setUsage(zt)),r.setAttribute("mass",new ze(i,1).setUsage(zt)),r.setAttribute("temperature",new ze(a,1).setUsage(zt))}function lc(){let{backend:r,configuration:e,scale:t,blackHoleMassThreshold:n,colorMode:i}=ce,a=Ur[e](ce),s=qi[r]||qi[pg[r]],o=a.length+1e3;ct=new s(a,ce,o);let l=new Oe;l.setDrawRange(0,a.length),r.startsWith("rust")?oc(l,o):(l.setAttribute("position",new ze(ct.xyz,3).setUsage(zt)),l.setAttribute("mass",new ze(ct.masses,1).setUsage(zt)),l.setAttribute("temperature",new ze(ct.temperatures,1).setUsage(zt))),l.setDrawRange(0,a.length);let c=new ke({vertexShader:Bl,fragmentShader:Ol,uniforms:{scale:{value:t},blackHoleMassThreshold:{value:n},mode:{value:Fs[i]}}});_t=new Wi(l,c),Cs.add(_t)}function Mi(){!ic||(cancelAnimationFrame(Yr),Cs.clear(),ct.free(),Mn.reset(),lc(),Yr=requestAnimationFrame(Rs))}function xg(){dt=new ao({load:zr,preset:ac}),dt.remember(ce),dt.add(ce,"backend",Object.keys(qi)).onChange(Mi),dt.add(ce,"dimensions",2,4,1).onChange(Mi),dt.add(ce,"zFov",0,180).onChange(a=>{rn.fov=a,rn.updateProjectionMatrix()});let r=dt.addFolder("4d params and rotation speeds");r.add(ce,"wFov",0,180),r.add(ce,"w",0).name("Camera ana"),r.add(ce,"xy",0,50),r.add(ce,"xz",0,50),r.add(ce,"xw",0,50),r.add(ce,"yz",0,50),r.add(ce,"yw",0,50),r.add(ce,"zw",0,50);let e=dt.addFolder("Backend parameters");e.add(ce,"theta",0,4,.01).name("bh theta").onChange(Mi),e.add(ce,"threads",1,128,1).onChange(Mi);let t=dt.addFolder("Render fx");t.add(ce,"autoRotate").onChange(a=>Mn.autoRotate=a).listen(),t.add(ce,"fxaa").onChange(a=>Hn.enabled=a),t.add(ce,"bloom").onChange(a=>{wi.enabled=a,Dt.toneMapping=a?Di:ln}),t.add(ce,"bloomStrength",0,10,.01).onChange(a=>wi.strength=a),t.add(ce,"bloomRadius",0,1,.01).onChange(a=>wi.radius=a),t.add(ce,"bloomThreshold",0,1,.01).onChange(a=>wi.threshold=a),t.add(ce,"bloomExposure",.001,128).onChange(a=>Dt.toneMappingExposure=a),t.add(ce,"afterImage").onChange(a=>Zi.enabled=a),t.add(ce,"afterImageDamp",0,1).onChange(a=>Zi.uniforms.damp.value=a);let n=dt.addFolder("Configuration");n.add(ce,"configuration",Object.keys(Ur)),n.add(ce,"number",0),n.add(ce,"range",0,5e3,1).name("range (1e15m)"),n.add(ce,"speed",0,1e3).name("speed (1e2m.s)"),n.add(ce,"mass",0,1e3).name("mass (1e30kg)"),n.add(ce,"blackHoleMass",0,1e6,1e3),n.add(ce,"scale",0,1e3).onChange(a=>_t.material.uniforms.scale.value=a),n.add(ce,"colorMode",Object.keys(Fs)).onChange(a=>_t.material.uniforms.mode.value=Fs[a]),n.add({restart:Mi},"restart"),n.open();let i=dt.addFolder("Simulation");i.add(ce,"gravitationalConstant",0,100,.01),i.add(ce,"simulationSpeed",0,100,.001).name("speed (1e13s)"),i.add(ce,"softening",0,1e3,1),i.add(ce,"collisions"),i.add(ce,"collisionThreshold",0,1e3,1),i.add(ce,"escapeDistance",0,1e5,1),i.add(ce,"blackHoleMassThreshold",0,2e6,1).onChange(a=>_t.material.uniforms.blackHoleMassThreshold.value=a),i.open(),window.innerWidth<600&&dt.close(),dt.revert(),dt.__preset_select.addEventListener("change",({target:{value:a}})=>{location.hash=`#${encodeURIComponent(a)}`}),window.addEventListener("hashchange",()=>{dt.preset=rc(),Mi()})}var $i=new Dr,Ds=new le;window.addEventListener("pointerdown",function(r){dt&&dt.domElement.contains(r.target)||jr&&jr.dom.contains(r.target)||(Ds.set(r.clientX/window.innerWidth*2-1,-(r.clientY/window.innerHeight)*2+1),ce.creationMode&&(ce.autoRotate=!1,Mn.autoRotate=!1,$e={iter:0,speed:20*(1+r.button)}))});window.addEventListener("pointermove",function(r){$e!==null&&Ds.set(r.clientX/window.innerWidth*2-1,-(r.clientY/window.innerHeight)*2+1)});window.addEventListener("pointerup",function(){$e=null});var vg=Wl("./dist/wasm/index_bg.wasm");vg.then(()=>{lc(),xg(),ic=!0,Yr=requestAnimationFrame(Rs)});
/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
//# sourceMappingURL=index.js.map

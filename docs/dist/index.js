var eh=Object.defineProperty;var oo=(s,e)=>{for(var t in e)eh(s,t,{get:e[t],enumerable:!0})};function th(s){if(!!s&&typeof window!="undefined"){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=s,document.head.appendChild(e),s}}function li(s,e){var t=s.__state.conversionName.toString(),n=Math.round(s.r),i=Math.round(s.g),r=Math.round(s.b),a=s.a,o=Math.round(s.h),l=s.s.toFixed(1),c=s.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=s.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+r+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+r+","+a+")";if(t==="HEX")return"0x"+s.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+r+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+r+","+a+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+r+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+r+",a:"+a+"}";if(t==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+a+"}"}return"unknown format"}var lo=Array.prototype.forEach,Ki=Array.prototype.slice,X={BREAK:{},extend:function(e){return this.each(Ki.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(t[i])||(e[i]=t[i])}.bind(this))},this),e},defaults:function(e){return this.each(Ki.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(e[i])&&(e[i]=t[i])}.bind(this))},this),e},compose:function(){var e=Ki.call(arguments);return function(){for(var t=Ki.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(!!e){if(lo&&e.forEach&&e.forEach===lo)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,r=void 0;for(i=0,r=e.length;i<r;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var a in e)if(t.call(n,e[a],a)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var r=this,a=arguments;function o(){i=null,n||e.apply(r,a)}var l=n||!i;clearTimeout(i),i=setTimeout(o,t),l&&e.apply(r,a)}},toArray:function(e){return e.toArray?e.toArray():Ki.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(s){function e(t){return s.apply(this,arguments)}return e.toString=function(){return s.toString()},e}(function(s){return isNaN(s)}),isArray:Array.isArray||function(s){return s.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},nh=[{litmus:X.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:li},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:li},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:li},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:li}}},{litmus:X.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:X.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:X.isObject,conversions:{RGBA_OBJ:{read:function(e){return X.isNumber(e.r)&&X.isNumber(e.g)&&X.isNumber(e.b)&&X.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return X.isNumber(e.r)&&X.isNumber(e.g)&&X.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return X.isNumber(e.h)&&X.isNumber(e.s)&&X.isNumber(e.v)&&X.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return X.isNumber(e.h)&&X.isNumber(e.s)&&X.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Qi=void 0,wr=void 0,Ms=function(){wr=!1;var e=arguments.length>1?X.toArray(arguments):arguments[0];return X.each(nh,function(t){if(t.litmus(e))return X.each(t.conversions,function(n,i){if(Qi=n.read(e),wr===!1&&Qi!==!1)return wr=Qi,Qi.conversionName=i,Qi.conversion=n,X.BREAK}),X.BREAK}),wr},co=void 0,Mr={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,r=e/60-Math.floor(e/60),a=n*(1-t),o=n*(1-r*t),l=n*(1-(1-r)*t),c=[[n,l,a],[o,n,a],[a,n,l],[a,o,n],[l,a,n],[n,a,o]][i];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),r=Math.max(e,t,n),a=r-i,o=void 0,l=void 0;if(r!==0)l=a/r;else return{h:NaN,s:0,v:0};return e===r?o=(t-n)/a:t===r?o=2+(n-e)/a:o=4+(e-t)/a,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:r/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(co=t*8)|e&~(255<<co)}},ih=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Ht=function(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")},Vt=function(){function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}}(),vn=function s(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var r=Object.getPrototypeOf(e);return r===null?void 0:s(r,t,n)}else{if("value"in i)return i.value;var a=i.get;return a===void 0?void 0:a.call(n)}},xn=function(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(s,e):s.__proto__=e)},bn=function(s,e){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:s},at=function(){function s(){if(Ht(this,s),this.__state=Ms.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Vt(s,[{key:"toString",value:function(){return li(this)}},{key:"toHexString",value:function(){return li(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),s}();function Ss(s,e,t){Object.defineProperty(s,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(at.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(at.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function Es(s,e){Object.defineProperty(s,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(at.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(at.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}at.recalculateRGB=function(s,e,t){if(s.__state.space==="HEX")s.__state[e]=Mr.component_from_hex(s.__state.hex,t);else if(s.__state.space==="HSV")X.extend(s.__state,Mr.hsv_to_rgb(s.__state.h,s.__state.s,s.__state.v));else throw new Error("Corrupted color state")};at.recalculateHSV=function(s){var e=Mr.rgb_to_hsv(s.r,s.g,s.b);X.extend(s.__state,{s:e.s,v:e.v}),X.isNaN(e.h)?X.isUndefined(s.__state.h)&&(s.__state.h=0):s.__state.h=e.h};at.COMPONENTS=["r","g","b","h","s","v","hex","a"];Ss(at.prototype,"r",2);Ss(at.prototype,"g",1);Ss(at.prototype,"b",0);Es(at.prototype,"h");Es(at.prototype,"s");Es(at.prototype,"v");Object.defineProperty(at.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(at.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Mr.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Bn=function(){function s(e,t){Ht(this,s),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Vt(s,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),s}(),rh={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},ho={};X.each(rh,function(s,e){X.each(s,function(t){ho[t]=e})});var sh=/(\d+(\.\d+)?)px/;function tn(s){if(s==="0"||X.isUndefined(s))return 0;var e=s.match(sh);return X.isNull(e)?0:parseFloat(e[1])}var N={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,r=t;X.isUndefined(r)&&(r=!0),X.isUndefined(i)&&(i=!0),e.style.position="absolute",r&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var r=n||{},a=ho[t];if(!a)throw new Error("Event type "+t+" not supported.");var o=document.createEvent(a);switch(a){case"MouseEvents":{var l=r.x||r.clientX||0,c=r.y||r.clientY||0;o.initMouseEvent(t,r.bubbles||!1,r.cancelable||!0,window,r.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=o.initKeyboardEvent||o.initKeyEvent;X.defaults(r,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,r.bubbles||!1,r.cancelable,window,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.keyCode,r.charCode);break}default:{o.initEvent(t,r.bubbles||!1,r.cancelable||!0);break}}X.defaults(o,i),e.dispatchEvent(o)},bind:function(e,t,n,i){var r=i||!1;return e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,n),N},unbind:function(e,t,n,i){var r=i||!1;return e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n),N},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return N},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return N},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return tn(t["border-left-width"])+tn(t["border-right-width"])+tn(t["padding-left"])+tn(t["padding-right"])+tn(t.width)},getHeight:function(e){var t=getComputedStyle(e);return tn(t["border-top-width"])+tn(t["border-bottom-width"])+tn(t["padding-top"])+tn(t["padding-bottom"])+tn(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},uo=function(s){xn(e,s);function e(t,n){Ht(this,e);var i=bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function a(){r.setValue(!r.__prev)}return N.bind(i.__checkbox,"change",a,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return Vt(e,[{key:"setValue",value:function(n){var i=vn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),vn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Bn),ah=function(s){xn(e,s);function e(t,n,i){Ht(this,e);var r=bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=i,o=r;if(r.__select=document.createElement("select"),X.isArray(a)){var l={};X.each(a,function(c){l[c]=c}),a=l}return X.each(a,function(c,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",c),o.__select.appendChild(h)}),r.updateDisplay(),N.bind(r.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),r.domElement.appendChild(r.__select),r}return Vt(e,[{key:"setValue",value:function(n){var i=vn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return N.isActive(this.__select)?this:(this.__select.value=this.getValue(),vn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Bn),oh=function(s){xn(e,s);function e(t,n){Ht(this,e);var i=bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;function a(){r.setValue(r.__input.value)}function o(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),N.bind(i.__input,"keyup",a),N.bind(i.__input,"change",a),N.bind(i.__input,"blur",o),N.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return Vt(e,[{key:"updateDisplay",value:function(){return N.isActive(this.__input)||(this.__input.value=this.getValue()),vn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Bn);function fo(s){var e=s.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var po=function(s){xn(e,s);function e(t,n,i){Ht(this,e);var r=bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=i||{};return r.__min=a.min,r.__max=a.max,r.__step=a.step,X.isUndefined(r.__step)?r.initialValue===0?r.__impliedStep=1:r.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(r.initialValue))/Math.LN10))/10:r.__impliedStep=r.__step,r.__precision=fo(r.__impliedStep),r}return Vt(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!=0&&(i=Math.round(i/this.__step)*this.__step),vn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=fo(n),this}}]),e}(Bn);function lh(s,e){var t=Math.pow(10,e);return Math.round(s*t)/t}var Sr=function(s){xn(e,s);function e(t,n,i){Ht(this,e);var r=bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));r.__truncationSuspended=!1;var a=r,o=void 0;function l(){var g=parseFloat(a.__input.value);X.isNaN(g)||a.setValue(g)}function c(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}function u(){c()}function h(g){var p=o-g.clientY;a.setValue(a.getValue()+p*a.__impliedStep),o=g.clientY}function d(){N.unbind(window,"mousemove",h),N.unbind(window,"mouseup",d),c()}function m(g){N.bind(window,"mousemove",h),N.bind(window,"mouseup",d),o=g.clientY}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),N.bind(r.__input,"change",l),N.bind(r.__input,"blur",u),N.bind(r.__input,"mousedown",m),N.bind(r.__input,"keydown",function(g){g.keyCode===13&&(a.__truncationSuspended=!0,this.blur(),a.__truncationSuspended=!1,c())}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return Vt(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():lh(this.getValue(),this.__precision),vn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(po);function mo(s,e,t,n,i){return n+(i-n)*((s-e)/(t-e))}var Ts=function(s){xn(e,s);function e(t,n,i,r,a){Ht(this,e);var o=bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:r,step:a})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),N.bind(o.__background,"mousedown",c),N.bind(o.__background,"touchstart",d),N.addClass(o.__background,"slider"),N.addClass(o.__foreground,"slider-fg");function c(p){document.activeElement.blur(),N.bind(window,"mousemove",u),N.bind(window,"mouseup",h),u(p)}function u(p){p.preventDefault();var f=l.__background.getBoundingClientRect();return l.setValue(mo(p.clientX,f.left,f.right,l.__min,l.__max)),!1}function h(){N.unbind(window,"mousemove",u),N.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function d(p){p.touches.length===1&&(N.bind(window,"touchmove",m),N.bind(window,"touchend",g),m(p))}function m(p){var f=p.touches[0].clientX,_=l.__background.getBoundingClientRect();l.setValue(mo(f,_.left,_.right,l.__min,l.__max))}function g(){N.unbind(window,"touchmove",m),N.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return Vt(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",vn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(po),go=function(s){xn(e,s);function e(t,n,i){Ht(this,e);var r=bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=r;return r.__button=document.createElement("div"),r.__button.innerHTML=i===void 0?"Fire":i,N.bind(r.__button,"click",function(o){return o.preventDefault(),a.fire(),!1}),N.addClass(r.__button,"button"),r.domElement.appendChild(r.__button),r}return Vt(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Bn),Cs=function(s){xn(e,s);function e(t,n){Ht(this,e);var i=bn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new at(i.getValue()),i.__temp=new at(0);var r=i;i.domElement=document.createElement("div"),N.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",N.bind(i.__input,"keydown",function(p){p.keyCode===13&&h.call(this)}),N.bind(i.__input,"blur",h),N.bind(i.__selector,"mousedown",function(){N.addClass(this,"drag").bind(window,"mouseup",function(){N.removeClass(r.__selector,"drag")})}),N.bind(i.__selector,"touchstart",function(){N.addClass(this,"drag").bind(window,"touchend",function(){N.removeClass(r.__selector,"drag")})});var a=document.createElement("div");X.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),X.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),X.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),X.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),X.extend(a.style,{width:"100%",height:"100%",background:"none"}),_o(a,"top","rgba(0,0,0,0)","#000"),X.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),ch(i.__hue_field),X.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),N.bind(i.__saturation_field,"mousedown",o),N.bind(i.__saturation_field,"touchstart",o),N.bind(i.__field_knob,"mousedown",o),N.bind(i.__field_knob,"touchstart",o),N.bind(i.__hue_field,"mousedown",l),N.bind(i.__hue_field,"touchstart",l);function o(p){m(p),N.bind(window,"mousemove",m),N.bind(window,"touchmove",m),N.bind(window,"mouseup",c),N.bind(window,"touchend",c)}function l(p){g(p),N.bind(window,"mousemove",g),N.bind(window,"touchmove",g),N.bind(window,"mouseup",u),N.bind(window,"touchend",u)}function c(){N.unbind(window,"mousemove",m),N.unbind(window,"touchmove",m),N.unbind(window,"mouseup",c),N.unbind(window,"touchend",c),d()}function u(){N.unbind(window,"mousemove",g),N.unbind(window,"touchmove",g),N.unbind(window,"mouseup",u),N.unbind(window,"touchend",u),d()}function h(){var p=Ms(this.value);p!==!1?(r.__color.__state=p,r.setValue(r.__color.toOriginal())):this.value=r.__color.toString()}function d(){r.__onFinishChange&&r.__onFinishChange.call(r,r.__color.toOriginal())}i.__saturation_field.appendChild(a),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function m(p){p.type.indexOf("touch")===-1&&p.preventDefault();var f=r.__saturation_field.getBoundingClientRect(),_=p.touches&&p.touches[0]||p,E=_.clientX,T=_.clientY,S=(E-f.left)/(f.right-f.left),w=1-(T-f.top)/(f.bottom-f.top);return w>1?w=1:w<0&&(w=0),S>1?S=1:S<0&&(S=0),r.__color.v=w,r.__color.s=S,r.setValue(r.__color.toOriginal()),!1}function g(p){p.type.indexOf("touch")===-1&&p.preventDefault();var f=r.__hue_field.getBoundingClientRect(),_=p.touches&&p.touches[0]||p,E=_.clientY,T=1-(E-f.top)/(f.bottom-f.top);return T>1?T=1:T<0&&(T=0),r.__color.h=T*360,r.setValue(r.__color.toOriginal()),!1}return i}return Vt(e,[{key:"updateDisplay",value:function(){var n=Ms(this.getValue());if(n!==!1){var i=!1;X.each(at.COMPONENTS,function(o){if(!X.isUndefined(n[o])&&!X.isUndefined(this.__color.__state[o])&&n[o]!==this.__color.__state[o])return i=!0,{}},this),i&&X.extend(this.__color.__state,n)}X.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var r=this.__color.v<.5||this.__color.s>.5?255:0,a=255-r;X.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+r+","+r+","+r+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,_o(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),X.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+r+","+r+","+r+")",textShadow:this.__input_textShadow+"rgba("+a+","+a+","+a+",.7)"})}}]),e}(Bn),hh=["-moz-","-o-","-webkit-","-ms-",""];function _o(s,e,t,n){s.style.background="",X.each(hh,function(i){s.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function ch(s){s.style.background="",s.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",s.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var uh={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var r=n.getElementsByTagName("head")[0];try{r.appendChild(i)}catch(a){}}},dh=`<div id="dg-save" class="dg dialogue">

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

</div>`,fh=function(e,t){var n=e[t];return X.isArray(arguments[2])||X.isObject(arguments[2])?new ah(e,t,arguments[2]):X.isNumber(n)?X.isNumber(arguments[2])&&X.isNumber(arguments[3])?X.isNumber(arguments[4])?new Ts(e,t,arguments[2],arguments[3],arguments[4]):new Ts(e,t,arguments[2],arguments[3]):X.isNumber(arguments[4])?new Sr(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Sr(e,t,{min:arguments[2],max:arguments[3]}):X.isString(n)?new oh(e,t):X.isFunction(n)?new go(e,t,""):X.isBoolean(n)?new uo(e,t):null};function ph(s){setTimeout(s,1e3/60)}var mh=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||ph,gh=function(){function s(){Ht(this,s),this.backgroundElement=document.createElement("div"),X.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),N.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),X.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;N.bind(this.backgroundElement,"click",function(){e.hide()})}return Vt(s,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),X.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",N.unbind(t.domElement,"webkitTransitionEnd",i),N.unbind(t.domElement,"transitionend",i),N.unbind(t.domElement,"oTransitionEnd",i)};N.bind(this.domElement,"webkitTransitionEnd",n),N.bind(this.domElement,"transitionend",n),N.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-N.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-N.getHeight(this.domElement)/2+"px"}}]),s}(),_h=th(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);uh.inject(_h);var vo="dg",xo=72,bo=20,Ji="Default",er=function(){try{return!!window.localStorage}catch(s){return!1}}(),tr=void 0,yo=!0,ci=void 0,As=!1,wo=[],We=function s(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),N.addClass(this.domElement,vo),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=X.defaults(n,{closeOnTop:!1,autoPlace:!0,width:s.DEFAULT_WIDTH}),n=X.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),X.isUndefined(n.load)?n.load={preset:Ji}:n.preset&&(n.load.preset=n.preset),X.isUndefined(n.parent)&&n.hideable&&wo.push(this),n.resizable=X.isUndefined(n.parent)&&n.resizable,n.autoPlace&&X.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=er&&localStorage.getItem(hi(this,"isLocal"))==="true",r=void 0,a=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(d){t.parent?t.getRoot().preset=d:n.load.preset=d,xh(this),t.revert()}},width:{get:function(){return n.width},set:function(d){n.width=d,Ds(t,d)}},name:{get:function(){return n.name},set:function(d){n.name=d,a&&(a.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(d){n.closed=d,n.closed?N.addClass(t.__ul,s.CLASS_CLOSED):N.removeClass(t.__ul,s.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=d?s.TEXT_OPEN:s.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(d){er&&(i=d,d?N.bind(window,"unload",r):N.unbind(window,"unload",r),localStorage.setItem(hi(t,"isLocal"),d))}}}),X.isUndefined(n.parent)){if(this.closed=n.closed||!1,N.addClass(this.domElement,s.CLASS_MAIN),N.makeSelectable(this.domElement,!1),er&&i){t.useLocalStorage=!0;var o=localStorage.getItem(hi(this,"gui"));o&&(n.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=s.TEXT_CLOSED,N.addClass(this.__closeButton,s.CLASS_CLOSE_BUTTON),n.closeOnTop?(N.addClass(this.__closeButton,s.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(N.addClass(this.__closeButton,s.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),N.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);N.addClass(l,"controller-name"),a=Ps(t,l);var c=function(d){return d.preventDefault(),t.closed=!t.closed,!1};N.addClass(this.__ul,s.CLASS_CLOSED),N.addClass(a,"title"),N.bind(a,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(X.isUndefined(n.parent)&&(yo&&(ci=document.createElement("div"),N.addClass(ci,vo),N.addClass(ci,s.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(ci),yo=!1),ci.appendChild(this.domElement),N.addClass(this.domElement,s.CLASS_AUTO_PLACE)),this.parent||Ds(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},N.bind(window,"resize",this.__resizeHandler),N.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),N.bind(this.__ul,"transitionend",this.__resizeHandler),N.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&vh(this),r=function(){er&&localStorage.getItem(hi(t,"isLocal"))==="true"&&localStorage.setItem(hi(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=r;function u(){var h=t.getRoot();h.width+=1,X.defer(function(){h.width-=1})}n.parent||u()};We.toggleHide=function(){As=!As,X.each(wo,function(s){s.domElement.style.display=As?"none":""})};We.CLASS_AUTO_PLACE="a";We.CLASS_AUTO_PLACE_CONTAINER="ac";We.CLASS_MAIN="main";We.CLASS_CONTROLLER_ROW="cr";We.CLASS_TOO_TALL="taller-than-window";We.CLASS_CLOSED="closed";We.CLASS_CLOSE_BUTTON="close-button";We.CLASS_CLOSE_TOP="close-top";We.CLASS_CLOSE_BOTTOM="close-bottom";We.CLASS_DRAG="drag";We.DEFAULT_WIDTH=245;We.TEXT_CLOSED="Close Controls";We.TEXT_OPEN="Open Controls";We._keydownHandler=function(s){document.activeElement.type!=="text"&&(s.which===xo||s.keyCode===xo)&&We.toggleHide()};N.bind(window,"keydown",We._keydownHandler,!1);X.extend(We.prototype,{add:function(e,t){return nr(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return nr(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;X.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&ci.removeChild(this.domElement);var e=this;X.each(this.__folders,function(t){e.removeFolder(t)}),N.unbind(window,"keydown",We._keydownHandler,!1),Mo(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new We(t);this.__folders[e]=n;var i=Ps(this,n.domElement);return N.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Mo(e);var t=this;X.each(e.__folders,function(n){e.removeFolder(n)}),X.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=N.getOffset(e.__ul).top,n=0;X.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=N.getHeight(i))}),window.innerHeight-t-bo<n?(N.addClass(e.domElement,We.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-bo+"px"):(N.removeClass(e.domElement,We.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&X.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:X.debounce(function(){this.onResize()},50),remember:function(){if(X.isUndefined(tr)&&(tr=new gh,tr.domElement.innerHTML=dh),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;X.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&bh(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Ds(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Er(this)),e.folders={},X.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Er(this),Ls(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Ji]=Er(this,!0)),this.load.remembered[e]=Er(this),this.preset=e,Rs(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){X.each(this.__controllers,function(t){this.getRoot().load.remembered?So(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),X.each(this.__folders,function(t){t.revert(t)}),e||Ls(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Eo(this.__listening)},updateDisplay:function(){X.each(this.__controllers,function(e){e.updateDisplay()}),X.each(this.__folders,function(e){e.updateDisplay()})}});function Ps(s,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?s.__ul.insertBefore(n,t):s.__ul.appendChild(n),s.onResize(),n}function Mo(s){N.unbind(window,"resize",s.__resizeHandler),s.saveToLocalStorageIfPossible&&N.unbind(window,"unload",s.saveToLocalStorageIfPossible)}function Ls(s,e){var t=s.__preset_select[s.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function yh(s,e,t){if(t.__li=e,t.__gui=s,X.extend(t,{options:function(a){if(arguments.length>1){var o=t.__li.nextElementSibling;return t.remove(),nr(s,t.object,t.property,{before:o,factoryArgs:[X.toArray(arguments)]})}if(X.isArray(a)||X.isObject(a)){var l=t.__li.nextElementSibling;return t.remove(),nr(s,t.object,t.property,{before:l,factoryArgs:[a]})}},name:function(a){return t.__li.firstElementChild.firstElementChild.innerHTML=a,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Ts){var n=new Sr(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});X.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(r){var a=t[r],o=n[r];t[r]=n[r]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(n,l),a.apply(t,l)}}),N.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof Sr){var i=function(a){if(X.isNumber(t.__min)&&X.isNumber(t.__max)){var o=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=nr(s,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(o),l&&c.listen(),c}return a};t.min=X.compose(i,t.min),t.max=X.compose(i,t.max)}else t instanceof uo?(N.bind(e,"click",function(){N.fakeEvent(t.__checkbox,"click")}),N.bind(t.__checkbox,"click",function(r){r.stopPropagation()})):t instanceof go?(N.bind(e,"click",function(){N.fakeEvent(t.__button,"click")}),N.bind(e,"mouseover",function(){N.addClass(t.__button,"hover")}),N.bind(e,"mouseout",function(){N.removeClass(t.__button,"hover")})):t instanceof Cs&&(N.addClass(e,"color"),t.updateDisplay=X.compose(function(r){return e.style.borderLeftColor=t.__color.toString(),r},t.updateDisplay),t.updateDisplay());t.setValue=X.compose(function(r){return s.getRoot().__preset_select&&t.isModified()&&Ls(s.getRoot(),!0),r},t.setValue)}function So(s,e){var t=s.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var r=t.load.remembered,a=void 0;if(r[s.preset])a=r[s.preset];else if(r[Ji])a=r[Ji];else return;if(a[n]&&a[n][e.property]!==void 0){var o=a[n][e.property];e.initialValue=o,e.setValue(o)}}}}function nr(s,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new Cs(e,t);else{var r=[e,t].concat(n.factoryArgs);i=fh.apply(s,r)}n.before instanceof Bn&&(n.before=n.before.__li),So(s,i),N.addClass(i.domElement,"c");var a=document.createElement("span");N.addClass(a,"property-name"),a.innerHTML=i.property;var o=document.createElement("div");o.appendChild(a),o.appendChild(i.domElement);var l=Ps(s,o,n.before);return N.addClass(l,We.CLASS_CONTROLLER_ROW),i instanceof Cs?N.addClass(l,"color"):N.addClass(l,ih(i.getValue())),yh(s,l,i),s.__controllers.push(i),i}function hi(s,e){return document.location.href+"."+e}function Rs(s,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,s.__preset_select.appendChild(n),t&&(s.__preset_select.selectedIndex=s.__preset_select.length-1)}function To(s,e){e.style.display=s.useLocalStorage?"block":"none"}function bh(s){var e=s.__save_row=document.createElement("li");N.addClass(s.domElement,"has-save"),s.__ul.insertBefore(e,s.__ul.firstChild),N.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",N.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",N.addClass(n,"button"),N.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",N.addClass(i,"button"),N.addClass(i,"save-as");var r=document.createElement("span");r.innerHTML="Revert",N.addClass(r,"button"),N.addClass(r,"revert");var a=s.__preset_select=document.createElement("select");if(s.load&&s.load.remembered?X.each(s.load.remembered,function(h,d){Rs(s,d,d===s.preset)}):Rs(s,Ji,!1),N.bind(a,"change",function(){for(var h=0;h<s.__preset_select.length;h++)s.__preset_select[h].innerHTML=s.__preset_select[h].value;s.preset=this.value}),e.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(r),er){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(hi(s,"isLocal"))==="true"&&l.setAttribute("checked","checked"),To(s,o),N.bind(l,"change",function(){s.useLocalStorage=!s.useLocalStorage,To(s,o)})}var u=document.getElementById("dg-new-constructor");N.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&tr.hide()}),N.bind(t,"click",function(){u.innerHTML=JSON.stringify(s.getSaveObject(),void 0,2),tr.show(),u.focus(),u.select()}),N.bind(n,"click",function(){s.save()}),N.bind(i,"click",function(){var h=prompt("Enter a new preset name.");h&&s.saveAs(h)}),N.bind(r,"click",function(){s.revert()})}function vh(s){var e=void 0;s.__resize_handle=document.createElement("div"),X.extend(s.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(r){return r.preventDefault(),s.width+=e-r.clientX,s.onResize(),e=r.clientX,!1}function n(){N.removeClass(s.__closeButton,We.CLASS_DRAG),N.unbind(window,"mousemove",t),N.unbind(window,"mouseup",n)}function i(r){return r.preventDefault(),e=r.clientX,N.addClass(s.__closeButton,We.CLASS_DRAG),N.bind(window,"mousemove",t),N.bind(window,"mouseup",n),!1}N.bind(s.__resize_handle,"mousedown",i),N.bind(s.__closeButton,"mousedown",i),s.domElement.insertBefore(s.__resize_handle,s.domElement.firstElementChild)}function Ds(s,e){s.domElement.style.width=e+"px",s.__save_row&&s.autoPlace&&(s.__save_row.style.width=e+"px"),s.__closeButton&&(s.__closeButton.style.width=e+"px")}function Er(s,e){var t={};return X.each(s.__rememberedObjects,function(n,i){var r={},a=s.__rememberedObjectIndecesToControllers[i];X.each(a,function(o,l){r[l]=e?o.initialValue:o.getValue()}),t[i]=r}),t}function xh(s){for(var e=0;e<s.__preset_select.length;e++)s.__preset_select[e].value===s.preset&&(s.__preset_select.selectedIndex=e)}function Eo(s){s.length!==0&&mh.call(window,function(){Eo(s)}),X.each(s,function(e){e.updateDisplay()})}var Co=We;var Is="142",Hn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wh=0,Ao=1,Mh=2,Po=1,Sh=2,ir=3,rr=0,Gt=1,an=2,Eh=1,yn=0,wn=1,on=2,Do=3,Lo=4,Th=5,ui=100,Ch=101,Ah=102,Ro=103,Io=104,Ph=200,Dh=201,Lh=202,Rh=203,Fo=204,No=205,Ih=206,Fh=207,Nh=208,zh=209,Oh=210,Uh=0,kh=1,Bh=2,Fs=3,Hh=4,Vh=5,Gh=6,Wh=7,Ns=0,jh=1,Xh=2,It=0,qh=1,sr=2,Yh=3,$h=4,Zh=5,zo=300,di=301,fi=302,zs=303,Os=304,Tr=306,Us=1e3,Wt=1001,ks=1002,ht=1003,Oo=1004,Uo=1005,Ft=1006,Kh=1007,Cr=1008,Gn=1009,Qh=1010,Jh=1011,ko=1012,eu=1013,Wn=1014,jn=1015,ar=1016,tu=1017,nu=1018,pi=1020,iu=1021,ru=1022,nn=1023,su=1024,au=1025,Xn=1026,mi=1027,ou=1028,lu=1029,cu=1030,hu=1031,uu=1033,Bs=33776,Hs=33777,Vs=33778,Gs=33779,Bo=35840,Ho=35841,Vo=35842,Go=35843,du=36196,Wo=37492,jo=37496,Xo=37808,qo=37809,Yo=37810,$o=37811,Zo=37812,Ko=37813,Qo=37814,Jo=37815,el=37816,tl=37817,nl=37818,il=37819,rl=37820,sl=37821,al=36492,qn=3e3,Qe=3001,fu=3200,pu=3201,ol=0,mu=1,ln="srgb",Yn="srgb-linear",Ws=7680,gu=519,ll=35044,Mn=35040,cl="300 es",js=1035,cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xs=Math.PI/180,hl=180/Math.PI;function or(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ft[s&255]+ft[s>>8&255]+ft[s>>16&255]+ft[s>>24&255]+"-"+ft[e&255]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[t&63|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[n&255]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]).toLowerCase()}function Et(s,e,t){return Math.max(e,Math.min(t,s))}function _u(s,e){return(s%e+e)%e}function qs(s,e,t){return(1-t)*s+t*e}function ul(s){return(s&s-1)==0&&s!==0}function Ys(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}var pe=class{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ct=class{constructor(){Ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],p=i[0],f=i[3],_=i[6],E=i[1],T=i[4],S=i[7],w=i[2],D=i[5],L=i[8];return r[0]=a*p+o*E+l*w,r[3]=a*f+o*T+l*D,r[6]=a*_+o*S+l*L,r[1]=c*p+u*E+h*w,r[4]=c*f+u*T+h*D,r[7]=c*_+u*S+h*L,r[2]=d*p+m*E+g*w,r[5]=d*f+m*T+g*D,r[8]=d*_+m*S+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,m=c*r-a*l,g=t*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/g;return e[0]=h*p,e[1]=(i*c-u*n)*p,e[2]=(o*n-i*a)*p,e[3]=d*p,e[4]=(u*t-i*l)*p,e[5]=(i*r-o*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(a*t-n*r)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*r+n*l,i[3]=t*a+n*c,i[6]=t*o+n*u,i[1]=-n*r+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*u,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};function dl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>65535)return!0;return!1}function Ar(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Pr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var $s={[ln]:{[Yn]:$n},[Yn]:{[ln]:Pr}},jt={legacyMode:!0,get workingColorSpace(){return Yn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if($s[e]&&$s[e][t]!==void 0){let n=$s[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rt={r:0,g:0,b:0},Xt={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function Zs(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Lr(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Yn){return this.r=e,this.g=t,this.b=n,jt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Yn){if(e=_u(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Zs(a,r,e+1/3),this.g=Zs(a,r,e),this.b=Zs(a,r,e-1/3)}return jt.toWorkingColorSpace(this,i),this}setStyle(e,t=ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,jt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,jt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,jt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,jt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ln){let n=fl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return jt.fromWorkingColorSpace(Lr(this,rt),e),Et(rt.r*255,0,255)<<16^Et(rt.g*255,0,255)<<8^Et(rt.b*255,0,255)<<0}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yn){jt.fromWorkingColorSpace(Lr(this,rt),t);let n=rt.r,i=rt.g,r=rt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Yn){return jt.fromWorkingColorSpace(Lr(this,rt),t),e.r=rt.r,e.g=rt.g,e.b=rt.b,e}getStyle(e=ln){return jt.fromWorkingColorSpace(Lr(this,rt),e),e!==ln?`color(${e} ${rt.r} ${rt.g} ${rt.b})`:`rgb(${rt.r*255|0},${rt.g*255|0},${rt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Xt),Xt.h+=e,Xt.s+=t,Xt.l+=n,this.setHSL(Xt.h,Xt.s,Xt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xt),e.getHSL(Dr);let n=qs(Xt.h,Dr.h,t),i=qs(Xt.s,Dr.s,t),r=qs(Xt.l,Dr.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};Ie.NAMES=fl;var gi,Ks=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gi===void 0&&(gi=Ar("canvas")),gi.width=e.width,gi.height=e.height;let n=gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Ar("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=$n(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qs=class{constructor(e=null){this.isSource=!0,this.uuid=or(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Js(i[a].image)):r.push(Js(i[a]))}else r=Js(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Js(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Ks.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vu=0,Nt=class extends cn{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=Wt,i=Wt,r=Ft,a=Cr,o=nn,l=Gn,c=1,u=qn){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=or(),this.name="",this.source=new Qs(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Us:e.x=e.x-Math.floor(e.x);break;case Wt:e.x=e.x<0?0:1;break;case ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Us:e.y=e.y-Math.floor(e.y);break;case Wt:e.y=e.y<0?0:1;break;case ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=zo;var Be=class{constructor(e=0,t=0,n=0,i=1){Be.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,a=.01,o=.1,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],p=l[2],f=l[6],_=l[10];if(Math.abs(u-d)<a&&Math.abs(h-p)<a&&Math.abs(g-f)<a){if(Math.abs(u+d)<o&&Math.abs(h+p)<o&&Math.abs(g+f)<o&&Math.abs(c+m+_-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,S=(m+1)/2,w=(_+1)/2,D=(u+d)/4,L=(h+p)/4,x=(g+f)/4;return T>S&&T>w?T<a?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=D/n,r=L/n):S>w?S<a?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=D/i,r=x/i):w<a?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=L/r,i=x/r),this.set(n,i,r,t),this}let E=Math.sqrt((f-g)*(f-g)+(h-p)*(h-p)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(f-g)/E,this.y=(h-p)/E,this.z=(d-u)/E,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ut=class extends cn{constructor(e,t,n={}){super();this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Be(0,0,e,t),this.scissorTest=!1,this.viewport=new Be(0,0,e,t);let i={width:e,height:t,depth:1};this.texture=new Nt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ft,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Qs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ea=class extends Nt{constructor(e=null,t=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pl=class extends Nt{constructor(e=null,t=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},hn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=r[a+0],m=r[a+1],g=r[a+2],p=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(h!==p||l!==d||c!==m||u!==g){let f=1-o,_=l*d+c*m+u*g+h*p,E=_>=0?1:-1,T=1-_*_;if(T>Number.EPSILON){let w=Math.sqrt(T),D=Math.atan2(w,_*E);f=Math.sin(f*D)/w,o=Math.sin(o*D)/w}let S=o*E;if(l=l*f+d*S,c=c*f+m*S,u=u*f+g*S,h=h*f+p*S,f===1-o){let w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*m-c*d,e[t+1]=l*g+u*d+c*h-o*m,e[t+2]=c*g+u*m+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>h){let m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>h){let m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ml.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ml.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-a*t,d=-r*t-a*n-o*i;return this.x=c*l+d*-r+u*-o-h*-a,this.y=u*l+d*-a+h*-r-c*-o,this.z=h*l+d*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ta.copy(this).projectOnVector(e),this.sub(ta)}reflect(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ta=new C,ml=new hn,_i=class{constructor(e=new C(Infinity,Infinity,Infinity),t=new C(-Infinity,-Infinity,-Infinity)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=Infinity,n=Infinity,i=Infinity,r=-Infinity,a=-Infinity,o=-Infinity;for(let l=0,c=e.length;l<c;l+=3){let u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=Infinity,n=Infinity,i=Infinity,r=-Infinity,a=-Infinity,o=-Infinity;for(let l=0,c=e.count;l<c;l++){let u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){let r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)Zn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Zn)}else n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox),na.applyMatrix4(e.matrixWorld),this.union(na);let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),Rr.subVectors(this.max,lr),vi.subVectors(e.a,lr),xi.subVectors(e.b,lr),bi.subVectors(e.c,lr),Sn.subVectors(xi,vi),En.subVectors(bi,xi),Kn.subVectors(vi,bi);let t=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-Kn.z,Kn.y,Sn.z,0,-Sn.x,En.z,0,-En.x,Kn.z,0,-Kn.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-Kn.y,Kn.x,0];return!ia(t,vi,xi,bi,Rr)||(t=[1,0,0,0,1,0,0,0,1],!ia(t,vi,xi,bi,Rr))?!1:(Ir.crossVectors(Sn,En),t=[Ir.x,Ir.y,Ir.z],ia(t,vi,xi,bi,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Zn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},un=[new C,new C,new C,new C,new C,new C,new C,new C],Zn=new C,na=new _i,vi=new C,xi=new C,bi=new C,Sn=new C,En=new C,Kn=new C,lr=new C,Rr=new C,Ir=new C,Qn=new C;function ia(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Qn.fromArray(s,r);let o=i.x*Math.abs(Qn.x)+i.y*Math.abs(Qn.y)+i.z*Math.abs(Qn.z),l=e.dot(Qn),c=t.dot(Qn),u=n.dot(Qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var xu=new _i,gl=new C,Fr=new C,ra=new C,cr=class{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):xu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ra.subVectors(e,this.center);let t=ra.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(ra.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Fr.set(0,0,1).multiplyScalar(e.radius):Fr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(gl.copy(e.center).add(Fr)),this.expandByPoint(gl.copy(e.center).sub(Fr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},dn=new C,sa=new C,Nr=new C,Tn=new C,aa=new C,zr=new C,oa=new C,Or=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.direction).multiplyScalar(t).add(this.origin),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){sa.copy(e).add(t).multiplyScalar(.5),Nr.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(sa);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Nr),o=Tn.dot(this.direction),l=-Tn.dot(Nr),c=Tn.lengthSq(),u=Math.abs(1-a*a),h,d,m,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let p=1/u;h*=p,d*=p,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Nr).multiplyScalar(d).add(sa),m}intersectSphere(e,t){dn.subVectors(e.center,this.origin);let n=dn.dot(this.direction),i=dn.dot(dn)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,i,r){aa.subVectors(t,e),zr.subVectors(n,e),oa.crossVectors(aa,zr);let a=this.direction.dot(oa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,e);let l=o*this.direction.dot(zr.crossVectors(Tn,zr));if(l<0)return null;let c=o*this.direction.dot(aa.cross(Tn));if(c<0||l+c>a)return null;let u=-o*Tn.dot(oa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xe=class{constructor(){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,o,l,c,u,h,d,m,g,p,f){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=m,_[7]=g,_[11]=p,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/yi.setFromMatrixColumn(e,0).length(),r=1/yi.setFromMatrixColumn(e,1).length(),a=1/yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,m=a*h,g=o*u,p=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=d-p*c,t[9]=-o*l,t[2]=p-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,m=l*h,g=c*u,p=c*h;t[0]=d+p*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=p+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,m=l*h,g=c*u,p=c*h;t[0]=d-p*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=p-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,m=a*h,g=o*u,p=o*h;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+p,t[1]=l*h,t[5]=p*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=p-d*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+g,t[10]=d-p*h}else if(e.order==="XZY"){let d=a*l,m=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+p,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bu,e,yu)}lookAt(e,t,n){let i=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),Cn.crossVectors(n,At),Cn.lengthSq()===0&&(Math.abs(n.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),Cn.crossVectors(n,At)),Cn.normalize(),Ur.crossVectors(At,Cn),i[0]=Cn.x,i[4]=Ur.x,i[8]=At.x,i[1]=Cn.y,i[5]=Ur.y,i[9]=At.y,i[2]=Cn.z,i[6]=Ur.z,i[10]=At.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],p=n[6],f=n[10],_=n[14],E=n[3],T=n[7],S=n[11],w=n[15],D=i[0],L=i[4],x=i[8],P=i[12],I=i[1],z=i[5],Q=i[9],ee=i[13],R=i[2],W=i[6],B=i[10],Y=i[14],j=i[3],U=i[7],V=i[11],J=i[15];return r[0]=a*D+o*I+l*R+c*j,r[4]=a*L+o*z+l*W+c*U,r[8]=a*x+o*Q+l*B+c*V,r[12]=a*P+o*ee+l*Y+c*J,r[1]=u*D+h*I+d*R+m*j,r[5]=u*L+h*z+d*W+m*U,r[9]=u*x+h*Q+d*B+m*V,r[13]=u*P+h*ee+d*Y+m*J,r[2]=g*D+p*I+f*R+_*j,r[6]=g*L+p*z+f*W+_*U,r[10]=g*x+p*Q+f*B+_*V,r[14]=g*P+p*ee+f*Y+_*J,r[3]=E*D+T*I+S*R+w*j,r[7]=E*L+T*z+S*W+w*U,r[11]=E*x+T*Q+S*B+w*V,r[15]=E*P+T*ee+S*Y+w*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],p=e[7],f=e[11],_=e[15];return g*(+r*l*h-i*c*h-r*o*d+n*c*d+i*o*m-n*l*m)+p*(+t*l*m-t*c*d+r*a*d-i*a*m+i*c*u-r*l*u)+f*(+t*c*h-t*o*m-r*a*h+n*a*m+r*o*u-n*c*u)+_*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],p=e[13],f=e[14],_=e[15],E=h*f*c-p*d*c+p*l*m-o*f*m-h*l*_+o*d*_,T=g*d*c-u*f*c-g*l*m+a*f*m+u*l*_-a*d*_,S=u*p*c-g*h*c+g*o*m-a*p*m-u*o*_+a*h*_,w=g*h*l-u*p*l-g*o*d+a*p*d+u*o*f-a*h*f,D=t*E+n*T+i*S+r*w;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/D;return e[0]=E*L,e[1]=(p*d*r-h*f*r-p*i*m+n*f*m+h*i*_-n*d*_)*L,e[2]=(o*f*r-p*l*r+p*i*c-n*f*c-o*i*_+n*l*_)*L,e[3]=(h*l*r-o*d*r-h*i*c+n*d*c+o*i*m-n*l*m)*L,e[4]=T*L,e[5]=(u*f*r-g*d*r+g*i*m-t*f*m-u*i*_+t*d*_)*L,e[6]=(g*l*r-a*f*r-g*i*c+t*f*c+a*i*_-t*l*_)*L,e[7]=(a*d*r-u*l*r+u*i*c-t*d*c-a*i*m+t*l*m)*L,e[8]=S*L,e[9]=(g*h*r-u*p*r-g*n*m+t*p*m+u*n*_-t*h*_)*L,e[10]=(a*p*r-g*o*r+g*n*c-t*p*c-a*n*_+t*o*_)*L,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*m-t*o*m)*L,e[12]=w*L,e[13]=(u*p*i-g*h*i+g*n*d-t*p*d-u*n*f+t*h*f)*L,e[14]=(g*o*i-a*p*i-g*n*l+t*p*l+a*n*f-t*o*f)*L,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*L,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,m=r*u,g=r*h,p=a*u,f=a*h,_=o*h,E=l*c,T=l*u,S=l*h,w=n.x,D=n.y,L=n.z;return i[0]=(1-(p+_))*w,i[1]=(m+S)*w,i[2]=(g-T)*w,i[3]=0,i[4]=(m-S)*D,i[5]=(1-(d+_))*D,i[6]=(f+E)*D,i[7]=0,i[8]=(g+T)*L,i[9]=(f-E)*L,i[10]=(1-(d+p))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=yi.set(i[0],i[1],i[2]).length(),a=yi.set(i[4],i[5],i[6]).length(),o=yi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],qt.copy(this);let c=1/r,u=1/a,h=1/o;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=h,qt.elements[9]*=h,qt.elements[10]*=h,t.setFromRotationMatrix(qt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(a+r)/(a-r),m=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){let o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),h=(t+e)*l,d=(n+i)*c,m=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},yi=new C,qt=new Xe,bu=new C(0,0,0),yu=new C(1,1,1),Cn=new C,Ur=new C,At=new C,_l=new Xe,vl=new hn,zt=class{constructor(e=0,t=0,n=0,i=zt.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _l.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_l,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vl.setFromEuler(this),this.setFromQuaternion(vl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}};zt.DefaultOrder="XYZ";zt.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var kr=class{constructor(){this.mask=1|0}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},wu=0,xl=new C,wi=new hn,fn=new Xe,Br=new C,hr=new C,Mu=new C,Su=new hn,bl=new C(1,0,0),yl=new C(0,1,0),wl=new C(0,0,1),Eu={type:"added"},Ml={type:"removed"},Pt=class extends cn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DefaultUp.clone();let e=new C,t=new zt,n=new hn,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ct}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=Pt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(bl,e)}rotateY(e){return this.rotateOnAxis(yl,e)}rotateZ(e){return this.rotateOnAxis(wl,e)}translateOnAxis(e,t){return xl.copy(e).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bl,e)}translateY(e){return this.translateOnAxis(yl,e)}translateZ(e){return this.translateOnAxis(wl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Br.copy(e):Br.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(hr,Br,this.up):fn.lookAt(Br,hr,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),wi.setFromRotationMatrix(fn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Eu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ml)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Ml)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,Mu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Su,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Pt.DefaultUp=new C(0,1,0);Pt.DefaultMatrixAutoUpdate=!0;var Yt=new C,pn=new C,la=new C,mn=new C,Mi=new C,Si=new C,Sl=new C,ca=new C,ha=new C,ua=new C,rn=class{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yt.subVectors(e,t),i.cross(Yt);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Yt.subVectors(i,t),pn.subVectors(n,t),la.subVectors(e,t);let a=Yt.dot(Yt),o=Yt.dot(pn),l=Yt.dot(la),c=pn.dot(pn),u=pn.dot(la),h=a*c-o*o;if(h===0)return r.set(-2,-1,-1);let d=1/h,m=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,mn),mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getUV(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,mn),l.set(0,0),l.addScaledVector(r,mn.x),l.addScaledVector(a,mn.y),l.addScaledVector(o,mn.z),l}static isFrontFacing(e,t,n,i){return Yt.subVectors(n,t),pn.subVectors(e,t),Yt.cross(pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Yt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return rn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Mi.subVectors(i,n),Si.subVectors(r,n),ca.subVectors(e,n);let l=Mi.dot(ca),c=Si.dot(ca);if(l<=0&&c<=0)return t.copy(n);ha.subVectors(e,i);let u=Mi.dot(ha),h=Si.dot(ha);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Mi,a);ua.subVectors(e,r);let m=Mi.dot(ua),g=Si.dot(ua);if(g>=0&&m<=g)return t.copy(r);let p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Si,o);let f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return Sl.subVectors(r,i),o=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(Sl,o);let _=1/(f+p+d);return a=p*_,o=d*_,t.copy(n).addScaledVector(Mi,a).addScaledVector(Si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Tu=0,An=class extends cn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=or(),this.name="",this.type="Material",this.blending=wn,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Fo,this.blendDst=No,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Eh;continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wn&&(n.blending=this.blending),this.side!==rr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Jn=class extends An{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ns,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},it=new C,Hr=new pe,qe=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=ll,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new Ie),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new pe),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new C),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new Be),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ll&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}},da=class extends qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}},fa=class extends qe{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Tt=class extends qe{constructor(e,t,n){super(new Float32Array(e),t,n)}},Cu=0,Ot=new Xe,pa=new Pt,Ei=new C,Dt=new _i,ur=new _i,ot=new C,lt=class extends cn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dl(e)?fa:da)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ct().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return pa.lookAt(e),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-Infinity,-Infinity,-Infinity),new C(Infinity,Infinity,Infinity));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Dt.setFromBufferAttribute(r),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,Infinity);return}if(e){let n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(ot.addVectors(Dt.min,ur.min),Dt.expandByPoint(ot),ot.addVectors(Dt.max,ur.max),Dt.expandByPoint(ot)):(Dt.expandByPoint(ur.min),Dt.expandByPoint(ur.max))}Dt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)ot.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ot));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ot.fromBufferAttribute(o,c),l&&(Ei.fromBufferAttribute(e,c),ot.add(Ei)),i=Math.max(i,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<o;I++)c[I]=new C,u[I]=new C;let h=new C,d=new C,m=new C,g=new pe,p=new pe,f=new pe,_=new C,E=new C;function T(I,z,Q){h.fromArray(i,I*3),d.fromArray(i,z*3),m.fromArray(i,Q*3),g.fromArray(a,I*2),p.fromArray(a,z*2),f.fromArray(a,Q*2),d.sub(h),m.sub(h),p.sub(g),f.sub(g);let ee=1/(p.x*f.y-f.x*p.y);!isFinite(ee)||(_.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(ee),E.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(ee),c[I].add(_),c[z].add(_),c[Q].add(_),u[I].add(E),u[z].add(E),u[Q].add(E))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let I=0,z=S.length;I<z;++I){let Q=S[I],ee=Q.start,R=Q.count;for(let W=ee,B=ee+R;W<B;W+=3)T(n[W+0],n[W+1],n[W+2])}let w=new C,D=new C,L=new C,x=new C;function P(I){L.fromArray(r,I*3),x.copy(L);let z=c[I];w.copy(z),w.sub(L.multiplyScalar(L.dot(z))).normalize(),D.crossVectors(x,z);let ee=D.dot(u[I])<0?-1:1;l[I*4]=w.x,l[I*4+1]=w.y,l[I*4+2]=w.z,l[I*4+3]=ee}for(let I=0,z=S.length;I<z;++I){let Q=S[I],ee=Q.start,R=Q.count;for(let W=ee,B=ee+R;W<B;W+=3)P(n[W+0]),P(n[W+1]),P(n[W+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let i=new C,r=new C,a=new C,o=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),a.fromBufferAttribute(t,f),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(e.attributes[i]===void 0)continue;let a=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let h=0,d=c;h<u;h++,d++)a[d]=l[h]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),m=0,g=0;for(let p=0,f=l.length;p<f;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let _=0;_<u;_++)d[g++]=c[m++]}return new qe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new lt,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},El=new Xe,Ti=new Or,ma=new cr,Pn=new C,Dn=new C,Ln=new C,ga=new C,_a=new C,va=new C,Vr=new C,Gr=new C,Wr=new C,jr=new pe,Xr=new pe,qr=new pe,xa=new C,Yr=new C,$t=class extends Pt{constructor(e=new lt,t=new Jn){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),e.ray.intersectsSphere(ma)===!1)||(El.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(El),n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1))return;let a,o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,m=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){let _=m[p],E=i[_.materialIndex],T=Math.max(_.start,g.start),S=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let w=T,D=S;w<D;w+=3){let L=o.getX(w),x=o.getX(w+1),P=o.getX(w+2);a=$r(this,E,e,Ti,l,c,u,h,d,L,x,P),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{let p=Math.max(0,g.start),f=Math.min(o.count,g.start+g.count);for(let _=p,E=f;_<E;_+=3){let T=o.getX(_),S=o.getX(_+1),w=o.getX(_+2);a=$r(this,i,e,Ti,l,c,u,h,d,T,S,w),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){let _=m[p],E=i[_.materialIndex],T=Math.max(_.start,g.start),S=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let w=T,D=S;w<D;w+=3){let L=w,x=w+1,P=w+2;a=$r(this,E,e,Ti,l,c,u,h,d,L,x,P),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{let p=Math.max(0,g.start),f=Math.min(l.count,g.start+g.count);for(let _=p,E=f;_<E;_+=3){let T=_,S=_+1,w=_+2;a=$r(this,i,e,Ti,l,c,u,h,d,T,S,w),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}};function Au(s,e,t,n,i,r,a,o){let l;if(e.side===Gt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side!==an,o),l===null)return null;Yr.copy(o),Yr.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Yr);return c<t.near||c>t.far?null:{distance:c,point:Yr.clone(),object:s}}function $r(s,e,t,n,i,r,a,o,l,c,u,h){Pn.fromBufferAttribute(i,c),Dn.fromBufferAttribute(i,u),Ln.fromBufferAttribute(i,h);let d=s.morphTargetInfluences;if(r&&d){Vr.set(0,0,0),Gr.set(0,0,0),Wr.set(0,0,0);for(let g=0,p=r.length;g<p;g++){let f=d[g],_=r[g];f!==0&&(ga.fromBufferAttribute(_,c),_a.fromBufferAttribute(_,u),va.fromBufferAttribute(_,h),a?(Vr.addScaledVector(ga,f),Gr.addScaledVector(_a,f),Wr.addScaledVector(va,f)):(Vr.addScaledVector(ga.sub(Pn),f),Gr.addScaledVector(_a.sub(Dn),f),Wr.addScaledVector(va.sub(Ln),f)))}Pn.add(Vr),Dn.add(Gr),Ln.add(Wr)}s.isSkinnedMesh&&(s.boneTransform(c,Pn),s.boneTransform(u,Dn),s.boneTransform(h,Ln));let m=Au(s,e,t,n,Pn,Dn,Ln,xa);if(m){o&&(jr.fromBufferAttribute(o,c),Xr.fromBufferAttribute(o,u),qr.fromBufferAttribute(o,h),m.uv=rn.getUV(xa,Pn,Dn,Ln,jr,Xr,qr,new pe)),l&&(jr.fromBufferAttribute(l,c),Xr.fromBufferAttribute(l,u),qr.fromBufferAttribute(l,h),m.uv2=rn.getUV(xa,Pn,Dn,Ln,jr,Xr,qr,new pe));let g={a:c,b:u,c:h,normal:new C,materialIndex:0};rn.getNormal(Pn,Dn,Ln,g.normal),m.face=g}return m}var Ci=class extends lt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(h,2));function g(p,f,_,E,T,S,w,D,L,x,P){let I=S/L,z=w/x,Q=S/2,ee=w/2,R=D/2,W=L+1,B=x+1,Y=0,j=0,U=new C;for(let V=0;V<B;V++){let J=V*z-ee;for(let K=0;K<W;K++){let le=K*I-Q;U[p]=le*E,U[f]=J*T,U[_]=R,c.push(U.x,U.y,U.z),U[p]=0,U[f]=0,U[_]=D>0?1:-1,u.push(U.x,U.y,U.z),h.push(K/L),h.push(1-V/x),Y+=1}}for(let V=0;V<x;V++)for(let J=0;J<L;J++){let K=d+J+W*V,le=d+J+W*(V+1),fe=d+(J+1)+W*(V+1),me=d+(J+1)+W*V;l.push(K,le,me),l.push(le,fe,me),j+=6}o.addGroup(m,j,P),m+=j,d+=Y}}static fromJSON(e){return new Ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ai(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function pt(s){let e={};for(let t=0;t<s.length;t++){let n=Ai(s[t]);for(let i in n)e[i]=n[i]}return e}var Rn={clone:Ai,merge:pt},Pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ye=class extends An{constructor(e){super();this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Pu,this.fragmentShader=Du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ba=class extends Pt{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xt=class extends ba{constructor(e=50,t=1,n=.1,i=2e3){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=hl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pi=90,Di=1,Tl=class extends Pt{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new xt(Pi,Di,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new C(1,0,0)),this.add(i);let r=new xt(Pi,Di,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new C(-1,0,0)),this.add(r);let a=new xt(Pi,Di,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new C(0,1,0)),this.add(a);let o=new xt(Pi,Di,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new C(0,-1,0)),this.add(o);let l=new xt(Pi,Di,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new C(0,0,1)),this.add(l);let c=new xt(Pi,Di,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new C(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,r,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=It,e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}},ya=class extends Nt{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:di,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Cl=class extends ut{constructor(e,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ya(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ci(5,5,5),r=new Ye({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:yn});r.uniforms.tEquirect.value=t;let a=new $t(i,r),o=t.minFilter;return t.minFilter===Cr&&(t.minFilter=Ft),new Tl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},wa=new C,Lu=new C,Ru=new Ct,In=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=wa.subVectors(n,t).cross(Lu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(wa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ru.getNormalMatrix(e),i=this.coplanarPoint(wa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Li=new cr,Zr=new C,Ma=class{constructor(e=new In,t=new In,n=new In,i=new In,r=new In,a=new In){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],m=n[9],g=n[10],p=n[11],f=n[12],_=n[13],E=n[14],T=n[15];return t[0].setComponents(o-i,h-l,p-d,T-f).normalize(),t[1].setComponents(o+i,h+l,p+d,T+f).normalize(),t[2].setComponents(o+r,h+c,p+m,T+_).normalize(),t[3].setComponents(o-r,h-c,p-m,T-_).normalize(),t[4].setComponents(o-a,h-u,p-g,T-E).normalize(),t[5].setComponents(o+a,h+u,p+g,T+E).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Zr.x=i.normal.x>0?e.max.x:e.min.x,Zr.y=i.normal.y>0?e.max.y:e.min.y,Zr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Al(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Iu(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,u){let h=c.array,d=c.usage,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){let d=u.array,m=u.updateRange;s.bindBuffer(h,c),m.count===-1?s.bufferSubData(h,0,d):(t?s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}var Kr=class extends lt{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,m=[],g=[],p=[],f=[];for(let _=0;_<u;_++){let E=_*d-a;for(let T=0;T<c;T++){let S=T*h-r;g.push(S,-E,0),p.push(0,0,1),f.push(T/o),f.push(1-_/l)}}for(let _=0;_<l;_++)for(let E=0;E<o;E++){let T=E+c*_,S=E+c*(_+1),w=E+1+c*(_+1),D=E+1+c*_;m.push(T,S,D),m.push(S,w,D)}this.setIndex(m),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(p,3)),this.setAttribute("uv",new Tt(f,2))}static fromJSON(e){return new Kr(e.width,e.height,e.widthSegments,e.heightSegments)}},Fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bu="vec3 transformed = vec3( position );",Hu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
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
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Gu=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Wu=`#ifdef USE_BUMPMAP
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
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ju=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
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
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
}`,ed=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
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
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,td=`vec3 transformedNormal = objectNormal;
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
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",od=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ld=`#ifdef USE_ENVMAP
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
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dd=`#ifdef USE_ENVMAP
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
#endif`,fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_d=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,vd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bd=`vec3 diffuse = vec3( 1.0 );
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
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,yd=`uniform bool receiveShadow;
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Cd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
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
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ad=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
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
		float roughness = material.roughness;
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
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
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
		getPointLightInfo( pointLight, geometry, directLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
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
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ld=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Rd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Id=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ud=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Wd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,jd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
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
	#endif
#endif`,Xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,qd=`#ifdef OBJECTSPACE_NORMALMAP
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
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
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
#endif`,Qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
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
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,sf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uf=`#ifdef USE_SHADOWMAP
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
#endif`,df=`#ifdef USE_SHADOWMAP
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
#endif`,ff=`#ifdef USE_SHADOWMAP
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
#endif`,pf=`float getShadowMask() {
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
}`,mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
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
#endif`,_f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vf=`#ifdef USE_SKINNING
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
#endif`,xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mf=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Sf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
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
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Ef=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Tf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Cf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Af=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Pf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Df=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,If=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`#include <envmap_common_pars_fragment>
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
}`,zf=`#include <common>
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
}`,Of=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
}`,Uf=`#define DISTANCE
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
}`,kf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vf=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gf=`uniform vec3 diffuse;
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wf=`#include <common>
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
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jf=`uniform vec3 diffuse;
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
#include <alphatest_pars_fragment>
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
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define LAMBERT
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
	#include <morphcolor_vertex>
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
}`,qf=`uniform vec3 diffuse;
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
#include <alphatest_pars_fragment>
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
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$f=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
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
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
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
	#include <normal_vertex>
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
}`,Kf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
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
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
}`,Jf=`#define PHONG
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
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
	vWorldPosition = worldPosition.xyz;
#endif
}`,tp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
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
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
}`,ip=`#define TOON
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
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,sp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ap=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 color;
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
}`,lp=`uniform float rotation;
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
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,De={alphamap_fragment:Fu,alphamap_pars_fragment:Nu,alphatest_fragment:zu,alphatest_pars_fragment:Ou,aomap_fragment:Uu,aomap_pars_fragment:ku,begin_vertex:Bu,beginnormal_vertex:Hu,bsdfs:Vu,iridescence_fragment:Gu,bumpmap_pars_fragment:Wu,clipping_planes_fragment:ju,clipping_planes_pars_fragment:Xu,clipping_planes_pars_vertex:qu,clipping_planes_vertex:Yu,color_fragment:$u,color_pars_fragment:Zu,color_pars_vertex:Ku,color_vertex:Qu,common:Ju,cube_uv_reflection_fragment:ed,defaultnormal_vertex:td,displacementmap_pars_vertex:nd,displacementmap_vertex:id,emissivemap_fragment:rd,emissivemap_pars_fragment:sd,encodings_fragment:ad,encodings_pars_fragment:od,envmap_fragment:ld,envmap_common_pars_fragment:cd,envmap_pars_fragment:hd,envmap_pars_vertex:ud,envmap_physical_pars_fragment:wd,envmap_vertex:dd,fog_vertex:fd,fog_pars_vertex:pd,fog_fragment:md,fog_pars_fragment:gd,gradientmap_pars_fragment:_d,lightmap_fragment:vd,lightmap_pars_fragment:xd,lights_lambert_vertex:bd,lights_pars_begin:yd,lights_toon_fragment:Md,lights_toon_pars_fragment:Sd,lights_phong_fragment:Ed,lights_phong_pars_fragment:Td,lights_physical_fragment:Cd,lights_physical_pars_fragment:Ad,lights_fragment_begin:Pd,lights_fragment_maps:Dd,lights_fragment_end:Ld,logdepthbuf_fragment:Rd,logdepthbuf_pars_fragment:Id,logdepthbuf_pars_vertex:Fd,logdepthbuf_vertex:Nd,map_fragment:zd,map_pars_fragment:Od,map_particle_fragment:Ud,map_particle_pars_fragment:kd,metalnessmap_fragment:Bd,metalnessmap_pars_fragment:Hd,morphcolor_vertex:Vd,morphnormal_vertex:Gd,morphtarget_pars_vertex:Wd,morphtarget_vertex:jd,normal_fragment_begin:Xd,normal_fragment_maps:qd,normal_pars_fragment:Yd,normal_pars_vertex:$d,normal_vertex:Zd,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:Qd,clearcoat_normal_fragment_maps:Jd,clearcoat_pars_fragment:ef,iridescence_pars_fragment:tf,output_fragment:nf,packing:rf,premultiplied_alpha_fragment:sf,project_vertex:af,dithering_fragment:of,dithering_pars_fragment:lf,roughnessmap_fragment:cf,roughnessmap_pars_fragment:hf,shadowmap_pars_fragment:uf,shadowmap_pars_vertex:df,shadowmap_vertex:ff,shadowmask_pars_fragment:pf,skinbase_vertex:mf,skinning_pars_vertex:gf,skinning_vertex:_f,skinnormal_vertex:vf,specularmap_fragment:xf,specularmap_pars_fragment:bf,tonemapping_fragment:yf,tonemapping_pars_fragment:wf,transmission_fragment:Mf,transmission_pars_fragment:Sf,uv_pars_fragment:Ef,uv_pars_vertex:Tf,uv_vertex:Cf,uv2_pars_fragment:Af,uv2_pars_vertex:Pf,uv2_vertex:Df,worldpos_vertex:Lf,background_vert:Rf,background_frag:If,cube_vert:Ff,cube_frag:Nf,depth_vert:zf,depth_frag:Of,distanceRGBA_vert:Uf,distanceRGBA_frag:kf,equirect_vert:Bf,equirect_frag:Hf,linedashed_vert:Vf,linedashed_frag:Gf,meshbasic_vert:Wf,meshbasic_frag:jf,meshlambert_vert:Xf,meshlambert_frag:qf,meshmatcap_vert:Yf,meshmatcap_frag:$f,meshnormal_vert:Zf,meshnormal_frag:Kf,meshphong_vert:Qf,meshphong_frag:Jf,meshphysical_vert:ep,meshphysical_frag:tp,meshtoon_vert:np,meshtoon_frag:ip,points_vert:rp,points_frag:sp,shadow_vert:ap,shadow_frag:op,sprite_vert:lp,sprite_frag:cp},ce={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ct},uv2Transform:{value:new Ct},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ct}}},sn={basic:{uniforms:pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.fog,ce.lights,{emissive:{value:new Ie(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:pt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:pt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:pt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:pt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:pt([ce.points,ce.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:pt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:pt([ce.common,ce.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:pt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:pt([ce.sprite,ce.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null}},vertexShader:De.background_vert,fragmentShader:De.background_frag},cube:{uniforms:pt([ce.envmap,{opacity:{value:1}}]),vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:pt([ce.common,ce.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:pt([ce.lights,ce.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};sn.physical={uniforms:pt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new pe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};function hp(s,e,t,n,i,r){let a=new Ie(0),o=i===!0?0:1,l,c,u=null,h=0,d=null;function m(p,f){let _=!1,E=f.isScene===!0?f.background:null;E&&E.isTexture&&(E=e.get(E));let T=s.xr,S=T.getSession&&T.getSession();S&&S.environmentBlendMode==="additive"&&(E=null),E===null?g(a,o):E&&E.isColor&&(g(E,1),_=!0),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Tr)?(c===void 0&&(c=new $t(new Ci(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:Ai(sn.cube.uniforms),vertexShader:sn.cube.vertexShader,fragmentShader:sn.cube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,(u!==E||h!==E.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=E,h=E.version,d=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new $t(new Kr(2,2),new Ye({name:"BackgroundMaterial",uniforms:Ai(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||h!==E.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=E,h=E.version,d=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,f){t.buffers.color.setClear(p.r,p.g,p.b,f,r)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),o=f,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,g(a,o)},render:m}}function up(s,e,t,n){let i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=f(null),c=l,u=!1;function h(R,W,B,Y,j){let U=!1;if(a){let V=p(Y,B,W);c!==V&&(c=V,m(c.object)),U=_(R,Y,B,j),U&&E(R,Y,B,j)}else{let V=W.wireframe===!0;(c.geometry!==Y.id||c.program!==B.id||c.wireframe!==V)&&(c.geometry=Y.id,c.program=B.id,c.wireframe=V,U=!0)}j!==null&&t.update(j,34963),(U||u)&&(u=!1,x(R,W,B,Y),j!==null&&s.bindBuffer(34963,t.get(j).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function p(R,W,B){let Y=B.wireframe===!0,j=o[R.id];j===void 0&&(j={},o[R.id]=j);let U=j[W.id];U===void 0&&(U={},j[W.id]=U);let V=U[Y];return V===void 0&&(V=f(d()),U[Y]=V),V}function f(R){let W=[],B=[],Y=[];for(let j=0;j<i;j++)W[j]=0,B[j]=0,Y[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:B,attributeDivisors:Y,object:R,attributes:{},index:null}}function _(R,W,B,Y){let j=c.attributes,U=W.attributes,V=0,J=B.getAttributes();for(let K in J)if(J[K].location>=0){let fe=j[K],me=U[K];if(me===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(me=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(me=R.instanceColor)),fe===void 0||fe.attribute!==me||me&&fe.data!==me.data)return!0;V++}return c.attributesNum!==V||c.index!==Y}function E(R,W,B,Y){let j={},U=W.attributes,V=0,J=B.getAttributes();for(let K in J)if(J[K].location>=0){let fe=U[K];fe===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor));let me={};me.attribute=fe,fe&&fe.data&&(me.data=fe.data),j[K]=me,V++}c.attributes=j,c.attributesNum=V,c.index=Y}function T(){let R=c.newAttributes;for(let W=0,B=R.length;W<B;W++)R[W]=0}function S(R){w(R,0)}function w(R,W){let B=c.newAttributes,Y=c.enabledAttributes,j=c.attributeDivisors;B[R]=1,Y[R]===0&&(s.enableVertexAttribArray(R),Y[R]=1),j[R]!==W&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,W),j[R]=W)}function D(){let R=c.newAttributes,W=c.enabledAttributes;for(let B=0,Y=W.length;B<Y;B++)W[B]!==R[B]&&(s.disableVertexAttribArray(B),W[B]=0)}function L(R,W,B,Y,j,U){n.isWebGL2===!0&&(B===5124||B===5125)?s.vertexAttribIPointer(R,W,B,j,U):s.vertexAttribPointer(R,W,B,Y,j,U)}function x(R,W,B,Y){if(n.isWebGL2===!1&&(R.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();let j=Y.attributes,U=B.getAttributes(),V=W.defaultAttributeValues;for(let J in U){let K=U[J];if(K.location>=0){let le=j[J];if(le===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){let fe=le.normalized,me=le.itemSize,G=t.get(le);if(G===void 0)continue;let $e=G.buffer,Ee=G.type,be=G.bytesPerElement;if(le.isInterleavedBufferAttribute){let ue=le.data,Fe=ue.stride,Ce=le.offset;if(ue.isInstancedInterleavedBuffer){for(let ve=0;ve<K.locationSize;ve++)w(K.location+ve,ue.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ve=0;ve<K.locationSize;ve++)S(K.location+ve);s.bindBuffer(34962,$e);for(let ve=0;ve<K.locationSize;ve++)L(K.location+ve,me/K.locationSize,Ee,fe,Fe*be,(Ce+me/K.locationSize*ve)*be)}else{if(le.isInstancedBufferAttribute){for(let ue=0;ue<K.locationSize;ue++)w(K.location+ue,le.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ue=0;ue<K.locationSize;ue++)S(K.location+ue);s.bindBuffer(34962,$e);for(let ue=0;ue<K.locationSize;ue++)L(K.location+ue,me/K.locationSize,Ee,fe,me*be,me/K.locationSize*ue*be)}}else if(V!==void 0){let fe=V[J];if(fe!==void 0)switch(fe.length){case 2:s.vertexAttrib2fv(K.location,fe);break;case 3:s.vertexAttrib3fv(K.location,fe);break;case 4:s.vertexAttrib4fv(K.location,fe);break;default:s.vertexAttrib1fv(K.location,fe)}}}}D()}function P(){Q();for(let R in o){let W=o[R];for(let B in W){let Y=W[B];for(let j in Y)g(Y[j].object),delete Y[j];delete W[B]}delete o[R]}}function I(R){if(o[R.id]===void 0)return;let W=o[R.id];for(let B in W){let Y=W[B];for(let j in Y)g(Y[j].object),delete Y[j];delete W[B]}delete o[R.id]}function z(R){for(let W in o){let B=o[W];if(B[R.id]===void 0)continue;let Y=B[R.id];for(let j in Y)g(Y[j].object),delete Y[j];delete B[R.id]}}function Q(){ee(),u=!0,c!==l&&(c=l,m(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:ee,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:S,disableUnusedAttributes:D}}function dp(s,e,t,n){let i=n.isWebGL2,r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,m;if(i)d=s,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=l}function fp(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&s instanceof WebGL2ComputeRenderingContext,o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),d=s.getParameter(35660),m=s.getParameter(3379),g=s.getParameter(34076),p=s.getParameter(34921),f=s.getParameter(36347),_=s.getParameter(36348),E=s.getParameter(36349),T=d>0,S=a||e.has("OES_texture_float"),w=T&&S,D=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:E,vertexTextures:T,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:D}}function pp(s){let e=this,t=null,n=0,i=!1,r=!1,a=new In,o=new Ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,m){let g=h.length!==0||d||n!==0||i;return i=d,t=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,d,m){let g=h.clippingPlanes,p=h.clipIntersection,f=h.clipShadows,_=s.get(h);if(!i||g===null||g.length===0||r&&!f)r?u(null):c();else{let E=r?0:n,T=E*4,S=_.clippingState||null;l.value=S,S=u(g,d,T,m);for(let w=0;w!==T;++w)S[w]=t[w];_.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){let p=h!==null?h.length:0,f=null;if(p!==0){if(f=l.value,g!==!0||f===null){let _=m+p*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(f===null||f.length<_)&&(f=new Float32Array(_));for(let T=0,S=m;T!==p;++T,S+=4)a.copy(h[T]).applyMatrix4(E,o),a.normal.toArray(f,S),f[S+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function mp(s){let e=new WeakMap;function t(a,o){return o===zs?a.mapping=di:o===Os&&(a.mapping=fi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let o=a.mapping;if(o===zs||o===Os)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Cl(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ri=class extends ba{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ii=4,Pl=[.125,.215,.35,.446,.526,.582],ei=20,Sa=new Ri,Dl=new Ie,Ea=null,ti=(1+Math.sqrt(5))/2,Fi=1/ti,Ll=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,ti,Fi),new C(0,ti,-Fi),new C(Fi,0,ti),new C(-Fi,0,ti),new C(ti,Fi,0),new C(-ti,Fi,0)],Ta=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ea=this._renderer.getRenderTarget(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea),e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===di||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,16*7),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:ar,format:nn,encoding:qn,depthBuffer:!1},i=Rl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rl(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gp(r)),this._blurMaterial=_p(r,e,t)}return i}_compileMaterial(e){let t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,Sa)}_sceneToCubeUV(e,t,n,i){let r=90,a=1,o=new xt(r,a,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Dl),u.toneMapping=It,u.autoClear=!1;let m=new Jn({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new $t(new Ci,m),p=!1,f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(Dl),p=!0);for(let _=0;_<6;_++){let E=_%3;E===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):E===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));let T=this._cubeSize;Qr(i,E*T,_>2?T:0,T,T),u.setRenderTarget(i),p&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===di||e.mapping===fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Il());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Qr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Sa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Ll[(i-1)%Ll.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new $t(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ei-1),p=r/g,f=isFinite(r)?1+Math.floor(u*p):ei;f>ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ei}`);let _=[],E=0;for(let L=0;L<ei;++L){let x=L/p,P=Math.exp(-x*x/2);_.push(P),L===0?E+=P:L<f&&(E+=2*P)}for(let L=0;L<_.length;L++)_[L]=_[L]/E;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=_,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;let S=this._sizeLods[i],w=3*S*(i>T-Ii?i-T+Ii:0),D=4*(this._cubeSize-S);Qr(t,w,D,3*S,2*S),l.setRenderTarget(t),l.render(h,Sa)}};function gp(s){let e=[],t=[],n=[],i=s,r=s-Ii+1+Pl.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Ii?l=Pl[a-s+Ii-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,p=3,f=2,_=1,E=new Float32Array(p*g*m),T=new Float32Array(f*g*m),S=new Float32Array(_*g*m);for(let D=0;D<m;D++){let L=D%3*2/3-1,x=D>2?0:-1,P=[L,x,0,L+2/3,x,0,L+2/3,x+1,0,L,x,0,L+2/3,x+1,0,L,x+1,0];E.set(P,p*g*D),T.set(d,f*g*D);let I=[D,D,D,D,D,D];S.set(I,_*g*D)}let w=new lt;w.setAttribute("position",new qe(E,p)),w.setAttribute("uv",new qe(T,f)),w.setAttribute("faceIndex",new qe(S,_)),e.push(w),i>Ii&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rl(s,e,t){let n=new ut(s,e,t);return n.texture.mapping=Tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function _p(s,e,t){let n=new Float32Array(ei),i=new C(0,1,0);return new Ye({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Il(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Fl(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Ca(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vp(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===zs||l===Os,u=l===di||l===fi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Ta(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{let h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Ta(s));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function xp(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function bp(s,e,t,n){let i={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)e.update(d[g],34962);let m=h.morphAttributes;for(let g in m){let p=m[g];for(let f=0,_=p.length;f<_;f++)e.update(p[f],34962)}}function c(h){let d=[],m=h.index,g=h.attributes.position,p=0;if(m!==null){let E=m.array;p=m.version;for(let T=0,S=E.length;T<S;T+=3){let w=E[T+0],D=E[T+1],L=E[T+2];d.push(w,D,D,L,L,w)}}else{let E=g.array;p=g.version;for(let T=0,S=E.length/3-1;T<S;T+=3){let w=T+0,D=T+1,L=T+2;d.push(w,D,D,L,L,w)}}let f=new(dl(d)?fa:da)(d,1);f.version=p;let _=r.get(h);_&&e.remove(_),r.set(h,f)}function u(h){let d=r.get(h);if(d){let m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function yp(s,e,t,n){let i=n.isWebGL2,r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){s.drawElements(r,m,o,d*l),t.update(m,r,1)}function h(d,m,g){if(g===0)return;let p,f;if(i)p=s,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,m,o,d*l,g),t.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function wp(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Mp(s,e){return s[0]-e[0]}function Sp(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Aa(s,e){let t=1,n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(t)}function Ep(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,a=new Be,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,d){let m=c.morphTargetInfluences;if(e.isWebGL2===!0){let g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0,f=r.get(u);if(f===void 0||f.count!==p){let W=function(){ee.dispose(),r.delete(u),u.removeEventListener("dispose",W)};f!==void 0&&f.texture.dispose();let T=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],x=u.morphAttributes.color||[],P=0;T===!0&&(P=1),S===!0&&(P=2),w===!0&&(P=3);let I=u.attributes.position.count*P,z=1;I>e.maxTextureSize&&(z=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);let Q=new Float32Array(I*z*4*p),ee=new ea(Q,I,z,p);ee.type=jn,ee.needsUpdate=!0;let R=P*4;for(let B=0;B<p;B++){let Y=D[B],j=L[B],U=x[B],V=I*z*4*B;for(let J=0;J<Y.count;J++){let K=J*R;T===!0&&(a.fromBufferAttribute(Y,J),Y.normalized===!0&&Aa(a,Y),Q[V+K+0]=a.x,Q[V+K+1]=a.y,Q[V+K+2]=a.z,Q[V+K+3]=0),S===!0&&(a.fromBufferAttribute(j,J),j.normalized===!0&&Aa(a,j),Q[V+K+4]=a.x,Q[V+K+5]=a.y,Q[V+K+6]=a.z,Q[V+K+7]=0),w===!0&&(a.fromBufferAttribute(U,J),U.normalized===!0&&Aa(a,U),Q[V+K+8]=a.x,Q[V+K+9]=a.y,Q[V+K+10]=a.z,Q[V+K+11]=U.itemSize===4?a.w:1)}}f={count:p,texture:ee,size:new pe(I,z)},r.set(u,f),u.addEventListener("dispose",W)}let _=0;for(let T=0;T<m.length;T++)_+=m[T];let E=u.morphTargetsRelative?1:1-_;d.getUniforms().setValue(s,"morphTargetBaseInfluence",E),d.getUniforms().setValue(s,"morphTargetInfluences",m),d.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}else{let g=m===void 0?0:m.length,p=n[u.id];if(p===void 0||p.length!==g){p=[];for(let S=0;S<g;S++)p[S]=[S,0];n[u.id]=p}for(let S=0;S<g;S++){let w=p[S];w[0]=S,w[1]=m[S]}p.sort(Sp);for(let S=0;S<8;S++)S<g&&p[S][1]?(o[S][0]=p[S][0],o[S][1]=p[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Mp);let f=u.morphAttributes.position,_=u.morphAttributes.normal,E=0;for(let S=0;S<8;S++){let w=o[S],D=w[0],L=w[1];D!==Number.MAX_SAFE_INTEGER&&L?(f&&u.getAttribute("morphTarget"+S)!==f[D]&&u.setAttribute("morphTarget"+S,f[D]),_&&u.getAttribute("morphNormal"+S)!==_[D]&&u.setAttribute("morphNormal"+S,_[D]),i[S]=L,E+=L):(f&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),_&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}let T=u.morphTargetsRelative?1:1-E;d.getUniforms().setValue(s,"morphTargetBaseInfluence",T),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Tp(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Nl=new Nt,zl=new ea,Ol=new pl,Ul=new ya,kl=[],Bl=[],Hl=new Float32Array(16),Vl=new Float32Array(9),Gl=new Float32Array(4);function Ni(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=kl[i];if(r===void 0&&(r=new Float32Array(i),kl[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function yt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Jr(s,e){let t=Bl[e];t===void 0&&(t=new Int32Array(e),Bl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Cp(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ap(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2fv(this.addr,e),yt(t,e)}}function Pp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;s.uniform3fv(this.addr,e),yt(t,e)}}function Dp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4fv(this.addr,e),yt(t,e)}}function Lp(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(bt(t,n))return;Gl.set(n),s.uniformMatrix2fv(this.addr,!1,Gl),yt(t,n)}}function Rp(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(bt(t,n))return;Vl.set(n),s.uniformMatrix3fv(this.addr,!1,Vl),yt(t,n)}}function Ip(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(bt(t,n))return;Hl.set(n),s.uniformMatrix4fv(this.addr,!1,Hl),yt(t,n)}}function Fp(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Np(s,e){let t=this.cache;bt(t,e)||(s.uniform2iv(this.addr,e),yt(t,e))}function zp(s,e){let t=this.cache;bt(t,e)||(s.uniform3iv(this.addr,e),yt(t,e))}function Op(s,e){let t=this.cache;bt(t,e)||(s.uniform4iv(this.addr,e),yt(t,e))}function Up(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function kp(s,e){let t=this.cache;bt(t,e)||(s.uniform2uiv(this.addr,e),yt(t,e))}function Bp(s,e){let t=this.cache;bt(t,e)||(s.uniform3uiv(this.addr,e),yt(t,e))}function Hp(s,e){let t=this.cache;bt(t,e)||(s.uniform4uiv(this.addr,e),yt(t,e))}function Vp(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Nl,i)}function Gp(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ol,i)}function Wp(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ul,i)}function jp(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||zl,i)}function Xp(s){switch(s){case 5126:return Cp;case 35664:return Ap;case 35665:return Pp;case 35666:return Dp;case 35674:return Lp;case 35675:return Rp;case 35676:return Ip;case 5124:case 35670:return Fp;case 35667:case 35671:return Np;case 35668:case 35672:return zp;case 35669:case 35673:return Op;case 5125:return Up;case 36294:return kp;case 36295:return Bp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return Gp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return jp}}function qp(s,e){s.uniform1fv(this.addr,e)}function Yp(s,e){let t=Ni(e,this.size,2);s.uniform2fv(this.addr,t)}function $p(s,e){let t=Ni(e,this.size,3);s.uniform3fv(this.addr,t)}function Zp(s,e){let t=Ni(e,this.size,4);s.uniform4fv(this.addr,t)}function Kp(s,e){let t=Ni(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Qp(s,e){let t=Ni(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Jp(s,e){let t=Ni(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function em(s,e){s.uniform1iv(this.addr,e)}function tm(s,e){s.uniform2iv(this.addr,e)}function nm(s,e){s.uniform3iv(this.addr,e)}function im(s,e){s.uniform4iv(this.addr,e)}function rm(s,e){s.uniform1uiv(this.addr,e)}function sm(s,e){s.uniform2uiv(this.addr,e)}function am(s,e){s.uniform3uiv(this.addr,e)}function om(s,e){s.uniform4uiv(this.addr,e)}function lm(s,e,t){let n=e.length,i=Jr(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||Nl,i[r])}function cm(s,e,t){let n=e.length,i=Jr(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Ol,i[r])}function hm(s,e,t){let n=e.length,i=Jr(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Ul,i[r])}function um(s,e,t){let n=e.length,i=Jr(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||zl,i[r])}function dm(s){switch(s){case 5126:return qp;case 35664:return Yp;case 35665:return $p;case 35666:return Zp;case 35674:return Kp;case 35675:return Qp;case 35676:return Jp;case 5124:case 35670:return em;case 35667:case 35671:return tm;case 35668:case 35672:return nm;case 35669:case 35673:return im;case 5125:return rm;case 36294:return sm;case 36295:return am;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35679:case 36299:case 36307:return cm;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return um}}var Wl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Xp(t.type)}},jl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=dm(t.type)}},Xl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Pa=/(\w+)(\])?(\[|\.)?/g;function ql(s,e){s.seq.push(e),s.map[e.id]=e}function fm(s,e,t){let n=s.name,i=n.length;for(Pa.lastIndex=0;;){let r=Pa.exec(n),a=Pa.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ql(t,c===void 0?new Wl(o,s,e):new jl(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Xl(o),ql(t,h)),t=h}}}var dr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);fm(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Yl(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var pm=0;function mm(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function gm(s){switch(s){case qn:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function $l(s,e,t){let n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+mm(s.getShaderSource(e),a)}else return i}function _m(s,e){let t=gm(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function vm(s,e){let t;switch(e){case qh:t="Linear";break;case sr:t="Reinhard";break;case Yh:t="OptimizedCineon";break;case $h:t="ACESFilmic";break;case Zh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xm(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fr).join(`
`)}function bm(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ym(s,e){let t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function fr(s){return s!==""}function Zl(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(s){return s.replace(wm,Mm)}function Mm(s,e){let t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Da(t)}var Sm=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Em=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jl(s){return s.replace(Em,Ql).replace(Sm,Tm)}function Tm(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Ql(s,e,t,n)}function Ql(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ec(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cm(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Po?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Sh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ir&&(e="SHADOWMAP_TYPE_VSM"),e}function Am(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case di:case fi:e="ENVMAP_TYPE_CUBE";break;case Tr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pm(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case fi:e="ENVMAP_MODE_REFRACTION";break}return e}function Dm(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ns:e="ENVMAP_BLENDING_MULTIPLY";break;case jh:e="ENVMAP_BLENDING_MIX";break;case Xh:e="ENVMAP_BLENDING_ADD";break}return e}function Lm(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Rm(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Cm(t),c=Am(t),u=Pm(t),h=Dm(t),d=Lm(t),m=t.isWebGL2?"":xm(t),g=bm(r),p=i.createProgram(),f,_,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(fr).join(`
`),f.length>0&&(f+=`
`),_=[m,g].filter(fr).join(`
`),_.length>0&&(_+=`
`)):(f=[ec(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),_=[m,ec(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==It?"#define TONE_MAPPING":"",t.toneMapping!==It?De.tonemapping_pars_fragment:"",t.toneMapping!==It?vm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,_m("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),a=Da(a),a=Zl(a,t),a=Kl(a,t),o=Da(o),o=Zl(o,t),o=Kl(o,t),a=Jl(a),o=Jl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let T=E+f+a,S=E+_+o,w=Yl(i,35633,T),D=Yl(i,35632,S);if(i.attachShader(p,w),i.attachShader(p,D),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){let P=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(w).trim(),z=i.getShaderInfoLog(D).trim(),Q=!0,ee=!0;if(i.getProgramParameter(p,35714)===!1){Q=!1;let R=$l(i,w,"vertex"),W=$l(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+P+`
`+R+`
`+W)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(I===""||z==="")&&(ee=!1);ee&&(this.diagnostics={runnable:Q,programLog:P,vertexShader:{log:I,prefix:f},fragmentShader:{log:z,prefix:_}})}i.deleteShader(w),i.deleteShader(D);let L;this.getUniforms=function(){return L===void 0&&(L=new dr(i,p)),L};let x;return this.getAttributes=function(){return x===void 0&&(x=ym(i,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=pm++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=D,this}var Im=0,tc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){let t=this.shaderCache;if(t.has(e)===!1){let n=new nc(e);t.set(e,n)}return t.get(e)}},nc=class{constructor(e){this.id=Im++,this.code=e,this.usedTimes=0}};function Fm(s,e,t,n,i,r,a){let o=new kr,l=new tc,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures,m=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,P,I,z,Q){let ee=z.fog,R=Q.geometry,W=x.isMeshStandardMaterial?z.environment:null,B=(x.isMeshStandardMaterial?t:e).get(x.envMap||W),Y=!!B&&B.mapping===Tr?B.image.height:null,j=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));let U=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,V=U!==void 0?U.length:0,J=0;R.morphAttributes.position!==void 0&&(J=1),R.morphAttributes.normal!==void 0&&(J=2),R.morphAttributes.color!==void 0&&(J=3);let K,le,fe,me;if(j){let Fe=sn[j];K=Fe.vertexShader,le=Fe.fragmentShader}else K=x.vertexShader,le=x.fragmentShader,l.update(x),fe=l.getVertexShaderID(x),me=l.getFragmentShaderID(x);let G=s.getRenderTarget(),$e=x.alphaTest>0,Ee=x.clearcoat>0,be=x.iridescence>0;return{isWebGL2:u,shaderID:j,shaderName:x.type,vertexShader:K,fragmentShader:le,defines:x.defines,customVertexShaderID:fe,customFragmentShaderID:me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:d,outputEncoding:G===null?s.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:qn,map:!!x.map,matcap:!!x.matcap,envMap:!!B,envMapMode:B&&B.mapping,envMapCubeUVHeight:Y,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===mu,tangentSpaceNormalMap:x.normalMapType===ol,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Qe,clearcoat:Ee,clearcoatMap:Ee&&!!x.clearcoatMap,clearcoatRoughnessMap:Ee&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:Ee&&!!x.clearcoatNormalMap,iridescence:be,iridescenceMap:be&&!!x.iridescenceMap,iridescenceThicknessMap:be&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===wn,alphaMap:!!x.alphaMap,alphaTest:$e,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!R.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!ee,useFog:x.fog===!0,fogExp2:ee&&ee.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Q.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:J,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:It,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===an,flipSided:x.side===Gt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){let P=[];if(x.shaderID?P.push(x.shaderID):(P.push(x.customVertexShaderID),P.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)P.push(I),P.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(_(P,x),E(P,x),P.push(s.outputEncoding)),P.push(x.customProgramCacheKey),P.join()}function _(x,P){x.push(P.precision),x.push(P.outputEncoding),x.push(P.envMapMode),x.push(P.envMapCubeUVHeight),x.push(P.combine),x.push(P.vertexUvs),x.push(P.fogExp2),x.push(P.sizeAttenuation),x.push(P.morphTargetsCount),x.push(P.morphAttributeCount),x.push(P.numDirLights),x.push(P.numPointLights),x.push(P.numSpotLights),x.push(P.numHemiLights),x.push(P.numRectAreaLights),x.push(P.numDirLightShadows),x.push(P.numPointLightShadows),x.push(P.numSpotLightShadows),x.push(P.shadowMapType),x.push(P.toneMapping),x.push(P.numClippingPlanes),x.push(P.numClipIntersection),x.push(P.depthPacking)}function E(x,P){o.disableAll(),P.isWebGL2&&o.enable(0),P.supportsVertexTextures&&o.enable(1),P.instancing&&o.enable(2),P.instancingColor&&o.enable(3),P.map&&o.enable(4),P.matcap&&o.enable(5),P.envMap&&o.enable(6),P.lightMap&&o.enable(7),P.aoMap&&o.enable(8),P.emissiveMap&&o.enable(9),P.bumpMap&&o.enable(10),P.normalMap&&o.enable(11),P.objectSpaceNormalMap&&o.enable(12),P.tangentSpaceNormalMap&&o.enable(13),P.clearcoat&&o.enable(14),P.clearcoatMap&&o.enable(15),P.clearcoatRoughnessMap&&o.enable(16),P.clearcoatNormalMap&&o.enable(17),P.iridescence&&o.enable(18),P.iridescenceMap&&o.enable(19),P.iridescenceThicknessMap&&o.enable(20),P.displacementMap&&o.enable(21),P.specularMap&&o.enable(22),P.roughnessMap&&o.enable(23),P.metalnessMap&&o.enable(24),P.gradientMap&&o.enable(25),P.alphaMap&&o.enable(26),P.alphaTest&&o.enable(27),P.vertexColors&&o.enable(28),P.vertexAlphas&&o.enable(29),P.vertexUvs&&o.enable(30),P.vertexTangents&&o.enable(31),P.uvsVertexOnly&&o.enable(32),P.fog&&o.enable(33),x.push(o.mask),o.disableAll(),P.useFog&&o.enable(0),P.flatShading&&o.enable(1),P.logarithmicDepthBuffer&&o.enable(2),P.skinning&&o.enable(3),P.morphTargets&&o.enable(4),P.morphNormals&&o.enable(5),P.morphColors&&o.enable(6),P.premultipliedAlpha&&o.enable(7),P.shadowMapEnabled&&o.enable(8),P.physicallyCorrectLights&&o.enable(9),P.doubleSided&&o.enable(10),P.flipSided&&o.enable(11),P.useDepthPacking&&o.enable(12),P.dithering&&o.enable(13),P.specularIntensityMap&&o.enable(14),P.specularColorMap&&o.enable(15),P.transmission&&o.enable(16),P.transmissionMap&&o.enable(17),P.thicknessMap&&o.enable(18),P.sheen&&o.enable(19),P.sheenColorMap&&o.enable(20),P.sheenRoughnessMap&&o.enable(21),P.decodeVideoTexture&&o.enable(22),P.opaque&&o.enable(23),x.push(o.mask)}function T(x){let P=g[x.type],I;if(P){let z=sn[P];I=Rn.clone(z.uniforms)}else I=x.uniforms;return I}function S(x,P){let I;for(let z=0,Q=c.length;z<Q;z++){let ee=c[z];if(ee.cacheKey===P){I=ee,++I.usedTimes;break}}return I===void 0&&(I=new Rm(s,P,x,r),c.push(I)),I}function w(x){if(--x.usedTimes==0){let P=c.indexOf(x);c[P]=c[c.length-1],c.pop(),x.destroy()}}function D(x){l.remove(x)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:T,acquireProgram:S,releaseProgram:w,releaseShaderCache:D,programs:c,dispose:L}}function Nm(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function zm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ic(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function rc(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,m,g,p,f){let _=s[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:f},s[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=p,_.group=f),e++,_}function o(h,d,m,g,p,f){let _=a(h,d,m,g,p,f);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(h,d,m,g,p,f){let _=a(h,d,m,g,p,f);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,d){t.length>1&&t.sort(h||zm),n.length>1&&n.sort(d||ic),i.length>1&&i.sort(d||ic)}function u(){for(let h=e,d=s.length;h<d;h++){let m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function Om(){let s=new WeakMap;function e(n,i){let r;return s.has(n)===!1?(r=new rc,s.set(n,[r])):i>=s.get(n).length?(r=new rc,s.get(n).push(r)):r=s.get(n)[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function Um(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ie};break;case"SpotLight":t={position:new C,direction:new C,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function km(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Bm=0;function Hm(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function Vm(s,e){let t=new Um,n=km(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new C);let r=new C,a=new Xe,o=new Xe;function l(u,h){let d=0,m=0,g=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let p=0,f=0,_=0,E=0,T=0,S=0,w=0,D=0;u.sort(Hm);let L=h!==!0?Math.PI:1;for(let P=0,I=u.length;P<I;P++){let z=u[P],Q=z.color,ee=z.intensity,R=z.distance,W=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)d+=Q.r*ee*L,m+=Q.g*ee*L,g+=Q.b*ee*L;else if(z.isLightProbe)for(let B=0;B<9;B++)i.probe[B].addScaledVector(z.sh.coefficients[B],ee);else if(z.isDirectionalLight){let B=t.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity*L),z.castShadow){let Y=z.shadow,j=n.get(z);j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=z.shadow.matrix,S++}i.directional[p]=B,p++}else if(z.isSpotLight){let B=t.get(z);if(B.position.setFromMatrixPosition(z.matrixWorld),B.color.copy(Q).multiplyScalar(ee*L),B.distance=R,B.coneCos=Math.cos(z.angle),B.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),B.decay=z.decay,z.castShadow){let Y=z.shadow,j=n.get(z);j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,i.spotShadow[_]=j,i.spotShadowMap[_]=W,i.spotShadowMatrix[_]=z.shadow.matrix,D++}i.spot[_]=B,_++}else if(z.isRectAreaLight){let B=t.get(z);B.color.copy(Q).multiplyScalar(ee),B.halfWidth.set(z.width*.5,0,0),B.halfHeight.set(0,z.height*.5,0),i.rectArea[E]=B,E++}else if(z.isPointLight){let B=t.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity*L),B.distance=z.distance,B.decay=z.decay,z.castShadow){let Y=z.shadow,j=n.get(z);j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,j.shadowCameraNear=Y.camera.near,j.shadowCameraFar=Y.camera.far,i.pointShadow[f]=j,i.pointShadowMap[f]=W,i.pointShadowMatrix[f]=z.shadow.matrix,w++}i.point[f]=B,f++}else if(z.isHemisphereLight){let B=t.get(z);B.skyColor.copy(z.color).multiplyScalar(ee*L),B.groundColor.copy(z.groundColor).multiplyScalar(ee*L),i.hemi[T]=B,T++}}E>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;let x=i.hash;(x.directionalLength!==p||x.pointLength!==f||x.spotLength!==_||x.rectAreaLength!==E||x.hemiLength!==T||x.numDirectionalShadows!==S||x.numPointShadows!==w||x.numSpotShadows!==D)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=E,i.point.length=f,i.hemi.length=T,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=D,i.spotShadowMap.length=D,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=w,i.spotShadowMatrix.length=D,x.directionalLength=p,x.pointLength=f,x.spotLength=_,x.rectAreaLength=E,x.hemiLength=T,x.numDirectionalShadows=S,x.numPointShadows=w,x.numSpotShadows=D,i.version=Bm++)}function c(u,h){let d=0,m=0,g=0,p=0,f=0,_=h.matrixWorldInverse;for(let E=0,T=u.length;E<T;E++){let S=u[E];if(S.isDirectionalLight){let w=i.directional[d];w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),d++}else if(S.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),g++}else if(S.isRectAreaLight){let w=i.rectArea[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(_),o.identity(),a.copy(S.matrixWorld),a.premultiply(_),o.extractRotation(a),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){let w=i.point[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(_),m++}else if(S.isHemisphereLight){let w=i.hemi[f];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(_),f++}}}return{setup:l,setupView:c,state:i}}function sc(s,e){let t=new Vm(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Gm(s,e){let t=new WeakMap;function n(r,a=0){let o;return t.has(r)===!1?(o=new sc(s,e),t.set(r,[o])):a>=t.get(r).length?(o=new sc(s,e),t.get(r).push(o)):o=t.get(r)[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var ac=class extends An{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oc=class extends An{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xm(s,e,t){let n=new Ma,i=new pe,r=new pe,a=new Be,o=new ac({depthPacking:pu}),l=new oc,c={},u=t.maxTextureSize,h={0:Gt,1:rr,2:an},d=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Wm,fragmentShader:jm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new lt;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new $t(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Po,this.render=function(S,w,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||S.length===0)return;let L=s.getRenderTarget(),x=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),I=s.state;I.setBlending(yn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let z=0,Q=S.length;z<Q;z++){let ee=S[z],R=ee.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);let W=R.getFrameExtents();if(i.multiply(W),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/W.x),i.x=r.x*W.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/W.y),i.y=r.y*W.y,R.mapSize.y=r.y)),R.map===null){let Y=this.type!==ir?{minFilter:ht,magFilter:ht}:{};R.map=new ut(i.x,i.y,Y),R.map.texture.name=ee.name+".shadowMap",R.camera.updateProjectionMatrix()}s.setRenderTarget(R.map),s.clear();let B=R.getViewportCount();for(let Y=0;Y<B;Y++){let j=R.getViewport(Y);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),I.viewport(a),R.updateMatrices(ee,Y),n=R.getFrustum(),T(w,D,R.camera,ee,this.type)}R.isPointLightShadow!==!0&&this.type===ir&&_(R,D),R.needsUpdate=!1}f.needsUpdate=!1,s.setRenderTarget(L,x,P)};function _(S,w){let D=e.update(p);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ut(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(w,null,D,d,p,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(w,null,D,m,p,null)}function E(S,w,D,L,x,P){let I=null,z=D.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(z!==void 0?I=z:I=D.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){let Q=I.uuid,ee=w.uuid,R=c[Q];R===void 0&&(R={},c[Q]=R);let W=R[ee];W===void 0&&(W=I.clone(),R[ee]=W),I=W}return I.visible=w.visible,I.wireframe=w.wireframe,P===ir?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:h[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaTest,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,D.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(D.matrixWorld),I.nearDistance=L,I.farDistance=x),I}function T(S,w,D,L,x){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===ir)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld);let z=e.update(S),Q=S.material;if(Array.isArray(Q)){let ee=z.groups;for(let R=0,W=ee.length;R<W;R++){let B=ee[R],Y=Q[B.materialIndex];if(Y&&Y.visible){let j=E(S,Y,L,D.near,D.far,x);s.renderBufferDirect(D,null,z,j,S,B)}}}else if(Q.visible){let ee=E(S,Q,L,D.near,D.far,x);s.renderBufferDirect(D,null,z,ee,S,null)}}let I=S.children;for(let z=0,Q=I.length;z<Q;z++)T(I[z],w,D,L,x)}}function qm(s,e,t){let n=t.isWebGL2;function i(){let A=!1,se=new Be,ne=null,xe=new Be(0,0,0,0);return{setMask:function(he){ne!==he&&!A&&(s.colorMask(he,he,he,he),ne=he)},setLocked:function(he){A=he},setClear:function(he,_e,ae,Me,He){He===!0&&(he*=Me,_e*=Me,ae*=Me),se.set(he,_e,ae,Me),xe.equals(se)===!1&&(s.clearColor(he,_e,ae,Me),xe.copy(se))},reset:function(){A=!1,ne=null,xe.set(-1,0,0,0)}}}function r(){let A=!1,se=null,ne=null,xe=null;return{setTest:function(he){he?me(2929):G(2929)},setMask:function(he){se!==he&&!A&&(s.depthMask(he),se=he)},setFunc:function(he){if(ne!==he){if(he)switch(he){case Uh:s.depthFunc(512);break;case kh:s.depthFunc(519);break;case Bh:s.depthFunc(513);break;case Fs:s.depthFunc(515);break;case Hh:s.depthFunc(514);break;case Vh:s.depthFunc(518);break;case Gh:s.depthFunc(516);break;case Wh:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);ne=he}},setLocked:function(he){A=he},setClear:function(he){xe!==he&&(s.clearDepth(he),xe=he)},reset:function(){A=!1,se=null,ne=null,xe=null}}}function a(){let A=!1,se=null,ne=null,xe=null,he=null,_e=null,ae=null,Me=null,He=null;return{setTest:function(Ve){A||(Ve?me(2960):G(2960))},setMask:function(Ve){se!==Ve&&!A&&(s.stencilMask(Ve),se=Ve)},setFunc:function(Ve,_t,Kt){(ne!==Ve||xe!==_t||he!==Kt)&&(s.stencilFunc(Ve,_t,Kt),ne=Ve,xe=_t,he=Kt)},setOp:function(Ve,_t,Kt){(_e!==Ve||ae!==_t||Me!==Kt)&&(s.stencilOp(Ve,_t,Kt),_e=Ve,ae=_t,Me=Kt)},setLocked:function(Ve){A=Ve},setClear:function(Ve){He!==Ve&&(s.clearStencil(Ve),He=Ve)},reset:function(){A=!1,se=null,ne=null,xe=null,he=null,_e=null,ae=null,Me=null,He=null}}}let o=new i,l=new r,c=new a,u={},h={},d=new WeakMap,m=[],g=null,p=!1,f=null,_=null,E=null,T=null,S=null,w=null,D=null,L=!1,x=null,P=null,I=null,z=null,Q=null,ee=s.getParameter(35661),R=!1,W=0,B=s.getParameter(7938);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),R=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),R=W>=2);let Y=null,j={},U=s.getParameter(3088),V=s.getParameter(2978),J=new Be().fromArray(U),K=new Be().fromArray(V);function le(A,se,ne){let xe=new Uint8Array(4),he=s.createTexture();s.bindTexture(A,he),s.texParameteri(A,10241,9728),s.texParameteri(A,10240,9728);for(let _e=0;_e<ne;_e++)s.texImage2D(se+_e,0,6408,1,1,0,6408,5121,xe);return he}let fe={};fe[3553]=le(3553,3553,1),fe[34067]=le(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),me(2929),l.setFunc(Fs),je(!1),et(Ao),me(2884),Ce(yn);function me(A){u[A]!==!0&&(s.enable(A),u[A]=!0)}function G(A){u[A]!==!1&&(s.disable(A),u[A]=!1)}function $e(A,se){return h[A]!==se?(s.bindFramebuffer(A,se),h[A]=se,n&&(A===36009&&(h[36160]=se),A===36160&&(h[36009]=se)),!0):!1}function Ee(A,se){let ne=m,xe=!1;if(A)if(ne=d.get(se),ne===void 0&&(ne=[],d.set(se,ne)),A.isWebGLMultipleRenderTargets){let he=A.texture;if(ne.length!==he.length||ne[0]!==36064){for(let _e=0,ae=he.length;_e<ae;_e++)ne[_e]=36064+_e;ne.length=he.length,xe=!0}}else ne[0]!==36064&&(ne[0]=36064,xe=!0);else ne[0]!==1029&&(ne[0]=1029,xe=!0);xe&&(t.isWebGL2?s.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function be(A){return g!==A?(s.useProgram(A),g=A,!0):!1}let ue={[ui]:32774,[Ch]:32778,[Ah]:32779};if(n)ue[Ro]=32775,ue[Io]=32776;else{let A=e.get("EXT_blend_minmax");A!==null&&(ue[Ro]=A.MIN_EXT,ue[Io]=A.MAX_EXT)}let Fe={[Ph]:0,[Dh]:1,[Lh]:768,[Fo]:770,[Oh]:776,[Nh]:774,[Ih]:772,[Rh]:769,[No]:771,[zh]:775,[Fh]:773};function Ce(A,se,ne,xe,he,_e,ae,Me){if(A===yn){p===!0&&(G(3042),p=!1);return}if(p===!1&&(me(3042),p=!0),A!==Th){if(A!==f||Me!==L){if((_!==ui||S!==ui)&&(s.blendEquation(32774),_=ui,S=ui),Me)switch(A){case wn:s.blendFuncSeparate(1,771,1,771);break;case on:s.blendFunc(1,1);break;case Do:s.blendFuncSeparate(0,769,0,1);break;case Lo:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case wn:s.blendFuncSeparate(770,771,1,771);break;case on:s.blendFunc(770,1);break;case Do:s.blendFuncSeparate(0,769,0,1);break;case Lo:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}E=null,T=null,w=null,D=null,f=A,L=Me}return}he=he||se,_e=_e||ne,ae=ae||xe,(se!==_||he!==S)&&(s.blendEquationSeparate(ue[se],ue[he]),_=se,S=he),(ne!==E||xe!==T||_e!==w||ae!==D)&&(s.blendFuncSeparate(Fe[ne],Fe[xe],Fe[_e],Fe[ae]),E=ne,T=xe,w=_e,D=ae),f=A,L=null}function ve(A,se){A.side===an?G(2884):me(2884);let ne=A.side===Gt;se&&(ne=!ne),je(ne),A.blending===wn&&A.transparent===!1?Ce(yn):Ce(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),o.setMask(A.colorWrite);let xe=A.stencilWrite;c.setTest(xe),xe&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),ct(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?me(32926):G(32926)}function je(A){x!==A&&(A?s.frontFace(2304):s.frontFace(2305),x=A)}function et(A){A!==wh?(me(2884),A!==P&&(A===Ao?s.cullFace(1029):A===Mh?s.cullFace(1028):s.cullFace(1032))):G(2884),P=A}function tt(A){A!==I&&(R&&s.lineWidth(A),I=A)}function ct(A,se,ne){A?(me(32823),(z!==se||Q!==ne)&&(s.polygonOffset(se,ne),z=se,Q=ne)):G(32823)}function Ze(A){A?me(3089):G(3089)}function Re(A){A===void 0&&(A=33984+ee-1),Y!==A&&(s.activeTexture(A),Y=A)}function Ue(A,se){Y===null&&Re();let ne=j[Y];ne===void 0&&(ne={type:void 0,texture:void 0},j[Y]=ne),(ne.type!==A||ne.texture!==se)&&(s.bindTexture(A,se||fe[A]),ne.type=A,ne.texture=se)}function Ne(){let A=j[Y];A!==void 0&&A.type!==void 0&&(s.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function M(){try{s.compressedTexImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function v(){try{s.texSubImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function k(){try{s.texSubImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function $(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function te(){try{s.texStorage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function de(){try{s.texStorage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ye(){try{s.texImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function b(){try{s.texImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(A){J.equals(A)===!1&&(s.scissor(A.x,A.y,A.z,A.w),J.copy(A))}function oe(A){K.equals(A)===!1&&(s.viewport(A.x,A.y,A.z,A.w),K.copy(A))}function re(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},Y=null,j={},h={},d=new WeakMap,m=[],g=null,p=!1,f=null,_=null,E=null,T=null,S=null,w=null,D=null,L=!1,x=null,P=null,I=null,z=null,Q=null,J.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:me,disable:G,bindFramebuffer:$e,drawBuffers:Ee,useProgram:be,setBlending:Ce,setMaterial:ve,setFlipSided:je,setCullFace:et,setLineWidth:tt,setPolygonOffset:ct,setScissorTest:Ze,activeTexture:Re,bindTexture:Ue,unbindTexture:Ne,compressedTexImage2D:M,texImage2D:ye,texImage3D:b,texStorage2D:te,texStorage3D:de,texSubImage2D:v,texSubImage3D:k,compressedTexSubImage2D:$,scissor:Z,viewport:oe,reset:re}}function Ym(s,e,t,n,i,r,a){let o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,p,f=new WeakMap,_=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function E(M,v){return _?new OffscreenCanvas(M,v):Ar("canvas")}function T(M,v,k,$){let te=1;if((M.width>$||M.height>$)&&(te=$/Math.max(M.width,M.height)),te<1||v===!0)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap){let de=v?Ys:Math.floor,ye=de(te*M.width),b=de(te*M.height);p===void 0&&(p=E(ye,b));let Z=k?E(ye,b):p;return Z.width=ye,Z.height=b,Z.getContext("2d").drawImage(M,0,0,ye,b),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ye+"x"+b+")."),Z}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function S(M){return ul(M.width)&&ul(M.height)}function w(M){return o?!1:M.wrapS!==Wt||M.wrapT!==Wt||M.minFilter!==ht&&M.minFilter!==Ft}function D(M,v){return M.generateMipmaps&&v&&M.minFilter!==ht&&M.minFilter!==Ft}function L(M){s.generateMipmap(M)}function x(M,v,k,$,te=!1){if(o===!1)return v;if(M!==null){if(s[M]!==void 0)return s[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let de=v;return v===6403&&(k===5126&&(de=33326),k===5131&&(de=33325),k===5121&&(de=33321)),v===33319&&(k===5126&&(de=33328),k===5131&&(de=33327),k===5121&&(de=33323)),v===6408&&(k===5126&&(de=34836),k===5131&&(de=34842),k===5121&&(de=$===Qe&&te===!1?35907:32856),k===32819&&(de=32854),k===32820&&(de=32855)),(de===33325||de===33326||de===33327||de===33328||de===34842||de===34836)&&e.get("EXT_color_buffer_float"),de}function P(M,v,k){return D(M,k)===!0||M.isFramebufferTexture&&M.minFilter!==ht&&M.minFilter!==Ft?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function I(M){return M===ht||M===Oo||M===Uo?9728:9729}function z(M){let v=M.target;v.removeEventListener("dispose",z),ee(v),v.isVideoTexture&&g.delete(v)}function Q(M){let v=M.target;v.removeEventListener("dispose",Q),W(v)}function ee(M){let v=n.get(M);if(v.__webglInit===void 0)return;let k=M.source,$=f.get(k);if($){let te=$[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(M),Object.keys($).length===0&&f.delete(k)}n.remove(M)}function R(M){let v=n.get(M);s.deleteTexture(v.__webglTexture);let k=M.source,$=f.get(k);delete $[v.__cacheKey],a.memory.textures--}function W(M){let v=M.texture,k=n.get(M),$=n.get(v);if($.__webglTexture!==void 0&&(s.deleteTexture($.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)s.deleteFramebuffer(k.__webglFramebuffer[te]),k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[te]);else{if(s.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let te=0;te<k.__webglColorRenderbuffer.length;te++)k.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[te]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let te=0,de=v.length;te<de;te++){let ye=n.get(v[te]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),a.memory.textures--),n.remove(v[te])}n.remove(v),n.remove(M)}let B=0;function Y(){B=0}function j(){let M=B;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),B+=1,M}function U(M){let v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.encoding),v.join()}function V(M,v){let k=n.get(M);if(M.isVideoTexture&&Ue(M),M.isRenderTargetTexture===!1&&M.version>0&&k.__version!==M.version){let $=M.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(k,M,v);return}}t.activeTexture(33984+v),t.bindTexture(3553,k.__webglTexture)}function J(M,v){let k=n.get(M);if(M.version>0&&k.__version!==M.version){Ee(k,M,v);return}t.activeTexture(33984+v),t.bindTexture(35866,k.__webglTexture)}function K(M,v){let k=n.get(M);if(M.version>0&&k.__version!==M.version){Ee(k,M,v);return}t.activeTexture(33984+v),t.bindTexture(32879,k.__webglTexture)}function le(M,v){let k=n.get(M);if(M.version>0&&k.__version!==M.version){be(k,M,v);return}t.activeTexture(33984+v),t.bindTexture(34067,k.__webglTexture)}let fe={[Us]:10497,[Wt]:33071,[ks]:33648},me={[ht]:9728,[Oo]:9984,[Uo]:9986,[Ft]:9729,[Kh]:9985,[Cr]:9987};function G(M,v,k){if(k?(s.texParameteri(M,10242,fe[v.wrapS]),s.texParameteri(M,10243,fe[v.wrapT]),(M===32879||M===35866)&&s.texParameteri(M,32882,fe[v.wrapR]),s.texParameteri(M,10240,me[v.magFilter]),s.texParameteri(M,10241,me[v.minFilter])):(s.texParameteri(M,10242,33071),s.texParameteri(M,10243,33071),(M===32879||M===35866)&&s.texParameteri(M,32882,33071),(v.wrapS!==Wt||v.wrapT!==Wt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(M,10240,I(v.magFilter)),s.texParameteri(M,10241,I(v.minFilter)),v.minFilter!==ht&&v.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let $=e.get("EXT_texture_filter_anisotropic");if(v.type===jn&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===ar&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(s.texParameterf(M,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function $e(M,v){let k=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",z));let $=v.source,te=f.get($);te===void 0&&(te={},f.set($,te));let de=U(v);if(de!==M.__cacheKey){te[de]===void 0&&(te[de]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),te[de].usedTimes++;let ye=te[M.__cacheKey];ye!==void 0&&(te[M.__cacheKey].usedTimes--,ye.usedTimes===0&&R(v)),M.__cacheKey=de,M.__webglTexture=te[de].texture}return k}function Ee(M,v,k){let $=3553;v.isDataArrayTexture&&($=35866),v.isData3DTexture&&($=32879);let te=$e(M,v),de=v.source;if(t.activeTexture(33984+k),t.bindTexture($,M.__webglTexture),de.version!==de.__currentVersion||te===!0){s.pixelStorei(37440,v.flipY),s.pixelStorei(37441,v.premultiplyAlpha),s.pixelStorei(3317,v.unpackAlignment),s.pixelStorei(37443,0);let ye=w(v)&&S(v.image)===!1,b=T(v.image,ye,!1,u);b=Ne(v,b);let Z=S(b)||o,oe=r.convert(v.format,v.encoding),re=r.convert(v.type),A=x(v.internalFormat,oe,re,v.encoding,v.isVideoTexture);G($,v,Z);let se,ne=v.mipmaps,xe=o&&v.isVideoTexture!==!0,he=de.__currentVersion===void 0||te===!0,_e=P(v,b,Z);if(v.isDepthTexture)A=6402,o?v.type===jn?A=36012:v.type===Wn?A=33190:v.type===pi?A=35056:A=33189:v.type===jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Xn&&A===6402&&v.type!==ko&&v.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Wn,re=r.convert(v.type)),v.format===mi&&A===6402&&(A=34041,v.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=pi,re=r.convert(v.type))),he&&(xe?t.texStorage2D(3553,1,A,b.width,b.height):t.texImage2D(3553,0,A,b.width,b.height,0,oe,re,null));else if(v.isDataTexture)if(ne.length>0&&Z){xe&&he&&t.texStorage2D(3553,_e,A,ne[0].width,ne[0].height);for(let ae=0,Me=ne.length;ae<Me;ae++)se=ne[ae],xe?t.texSubImage2D(3553,ae,0,0,se.width,se.height,oe,re,se.data):t.texImage2D(3553,ae,A,se.width,se.height,0,oe,re,se.data);v.generateMipmaps=!1}else xe?(he&&t.texStorage2D(3553,_e,A,b.width,b.height),t.texSubImage2D(3553,0,0,0,b.width,b.height,oe,re,b.data)):t.texImage2D(3553,0,A,b.width,b.height,0,oe,re,b.data);else if(v.isCompressedTexture){xe&&he&&t.texStorage2D(3553,_e,A,ne[0].width,ne[0].height);for(let ae=0,Me=ne.length;ae<Me;ae++)se=ne[ae],v.format!==nn?oe!==null?xe?t.compressedTexSubImage2D(3553,ae,0,0,se.width,se.height,oe,se.data):t.compressedTexImage2D(3553,ae,A,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?t.texSubImage2D(3553,ae,0,0,se.width,se.height,oe,re,se.data):t.texImage2D(3553,ae,A,se.width,se.height,0,oe,re,se.data)}else if(v.isDataArrayTexture)xe?(he&&t.texStorage3D(35866,_e,A,b.width,b.height,b.depth),t.texSubImage3D(35866,0,0,0,0,b.width,b.height,b.depth,oe,re,b.data)):t.texImage3D(35866,0,A,b.width,b.height,b.depth,0,oe,re,b.data);else if(v.isData3DTexture)xe?(he&&t.texStorage3D(32879,_e,A,b.width,b.height,b.depth),t.texSubImage3D(32879,0,0,0,0,b.width,b.height,b.depth,oe,re,b.data)):t.texImage3D(32879,0,A,b.width,b.height,b.depth,0,oe,re,b.data);else if(v.isFramebufferTexture){if(he)if(xe)t.texStorage2D(3553,_e,A,b.width,b.height);else{let ae=b.width,Me=b.height;for(let He=0;He<_e;He++)t.texImage2D(3553,He,A,ae,Me,0,oe,re,null),ae>>=1,Me>>=1}}else if(ne.length>0&&Z){xe&&he&&t.texStorage2D(3553,_e,A,ne[0].width,ne[0].height);for(let ae=0,Me=ne.length;ae<Me;ae++)se=ne[ae],xe?t.texSubImage2D(3553,ae,0,0,oe,re,se):t.texImage2D(3553,ae,A,oe,re,se);v.generateMipmaps=!1}else xe?(he&&t.texStorage2D(3553,_e,A,b.width,b.height),t.texSubImage2D(3553,0,0,0,oe,re,b)):t.texImage2D(3553,0,A,oe,re,b);D(v,Z)&&L($),de.__currentVersion=de.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function be(M,v,k){if(v.image.length!==6)return;let $=$e(M,v),te=v.source;if(t.activeTexture(33984+k),t.bindTexture(34067,M.__webglTexture),te.version!==te.__currentVersion||$===!0){s.pixelStorei(37440,v.flipY),s.pixelStorei(37441,v.premultiplyAlpha),s.pixelStorei(3317,v.unpackAlignment),s.pixelStorei(37443,0);let de=v.isCompressedTexture||v.image[0].isCompressedTexture,ye=v.image[0]&&v.image[0].isDataTexture,b=[];for(let ae=0;ae<6;ae++)!de&&!ye?b[ae]=T(v.image[ae],!1,!0,c):b[ae]=ye?v.image[ae].image:v.image[ae],b[ae]=Ne(v,b[ae]);let Z=b[0],oe=S(Z)||o,re=r.convert(v.format,v.encoding),A=r.convert(v.type),se=x(v.internalFormat,re,A,v.encoding),ne=o&&v.isVideoTexture!==!0,xe=te.__currentVersion===void 0||$===!0,he=P(v,Z,oe);G(34067,v,oe);let _e;if(de){ne&&xe&&t.texStorage2D(34067,he,se,Z.width,Z.height);for(let ae=0;ae<6;ae++){_e=b[ae].mipmaps;for(let Me=0;Me<_e.length;Me++){let He=_e[Me];v.format!==nn?re!==null?ne?t.compressedTexSubImage2D(34069+ae,Me,0,0,He.width,He.height,re,He.data):t.compressedTexImage2D(34069+ae,Me,se,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?t.texSubImage2D(34069+ae,Me,0,0,He.width,He.height,re,A,He.data):t.texImage2D(34069+ae,Me,se,He.width,He.height,0,re,A,He.data)}}}else{_e=v.mipmaps,ne&&xe&&(_e.length>0&&he++,t.texStorage2D(34067,he,se,b[0].width,b[0].height));for(let ae=0;ae<6;ae++)if(ye){ne?t.texSubImage2D(34069+ae,0,0,0,b[ae].width,b[ae].height,re,A,b[ae].data):t.texImage2D(34069+ae,0,se,b[ae].width,b[ae].height,0,re,A,b[ae].data);for(let Me=0;Me<_e.length;Me++){let Ve=_e[Me].image[ae].image;ne?t.texSubImage2D(34069+ae,Me+1,0,0,Ve.width,Ve.height,re,A,Ve.data):t.texImage2D(34069+ae,Me+1,se,Ve.width,Ve.height,0,re,A,Ve.data)}}else{ne?t.texSubImage2D(34069+ae,0,0,0,re,A,b[ae]):t.texImage2D(34069+ae,0,se,re,A,b[ae]);for(let Me=0;Me<_e.length;Me++){let He=_e[Me];ne?t.texSubImage2D(34069+ae,Me+1,0,0,re,A,He.image[ae]):t.texImage2D(34069+ae,Me+1,se,re,A,He.image[ae])}}}D(v,oe)&&L(34067),te.__currentVersion=te.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ue(M,v,k,$,te){let de=r.convert(k.format,k.encoding),ye=r.convert(k.type),b=x(k.internalFormat,de,ye,k.encoding);n.get(v).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,b,v.width,v.height,v.depth,0,de,ye,null):t.texImage2D(te,0,b,v.width,v.height,0,de,ye,null)),t.bindFramebuffer(36160,M),Re(v)?d.framebufferTexture2DMultisampleEXT(36160,$,te,n.get(k).__webglTexture,0,Ze(v)):s.framebufferTexture2D(36160,$,te,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(M,v,k){if(s.bindRenderbuffer(36161,M),v.depthBuffer&&!v.stencilBuffer){let $=33189;if(k||Re(v)){let te=v.depthTexture;te&&te.isDepthTexture&&(te.type===jn?$=36012:te.type===Wn&&($=33190));let de=Ze(v);Re(v)?d.renderbufferStorageMultisampleEXT(36161,de,$,v.width,v.height):s.renderbufferStorageMultisample(36161,de,$,v.width,v.height)}else s.renderbufferStorage(36161,$,v.width,v.height);s.framebufferRenderbuffer(36160,36096,36161,M)}else if(v.depthBuffer&&v.stencilBuffer){let $=Ze(v);k&&Re(v)===!1?s.renderbufferStorageMultisample(36161,$,35056,v.width,v.height):Re(v)?d.renderbufferStorageMultisampleEXT(36161,$,35056,v.width,v.height):s.renderbufferStorage(36161,34041,v.width,v.height),s.framebufferRenderbuffer(36160,33306,36161,M)}else{let $=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let te=0;te<$.length;te++){let de=$[te],ye=r.convert(de.format,de.encoding),b=r.convert(de.type),Z=x(de.internalFormat,ye,b,de.encoding),oe=Ze(v);k&&Re(v)===!1?s.renderbufferStorageMultisample(36161,oe,Z,v.width,v.height):Re(v)?d.renderbufferStorageMultisampleEXT(36161,oe,Z,v.width,v.height):s.renderbufferStorage(36161,Z,v.width,v.height)}}s.bindRenderbuffer(36161,null)}function Ce(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);let $=n.get(v.depthTexture).__webglTexture,te=Ze(v);if(v.depthTexture.format===Xn)Re(v)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,te):s.framebufferTexture2D(36160,36096,3553,$,0);else if(v.depthTexture.format===mi)Re(v)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,te):s.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function ve(M){let v=n.get(M),k=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ce(v.__webglFramebuffer,M)}else if(k){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]=s.createRenderbuffer(),Fe(v.__webglDepthbuffer[$],M,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),Fe(v.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function je(M,v,k){let $=n.get(M);v!==void 0&&ue($.__webglFramebuffer,M,M.texture,36064,3553),k!==void 0&&ve(M)}function et(M){let v=M.texture,k=n.get(M),$=n.get(v);M.addEventListener("dispose",Q),M.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=v.version,a.memory.textures++);let te=M.isWebGLCubeRenderTarget===!0,de=M.isWebGLMultipleRenderTargets===!0,ye=S(M)||o;if(te){k.__webglFramebuffer=[];for(let b=0;b<6;b++)k.__webglFramebuffer[b]=s.createFramebuffer()}else{if(k.__webglFramebuffer=s.createFramebuffer(),de)if(i.drawBuffers){let b=M.texture;for(let Z=0,oe=b.length;Z<oe;Z++){let re=n.get(b[Z]);re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&Re(M)===!1){let b=de?v:[v];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let Z=0;Z<b.length;Z++){let oe=b[Z];k.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(36161,k.__webglColorRenderbuffer[Z]);let re=r.convert(oe.format,oe.encoding),A=r.convert(oe.type),se=x(oe.internalFormat,re,A,oe.encoding),ne=Ze(M);s.renderbufferStorageMultisample(36161,ne,se,M.width,M.height),s.framebufferRenderbuffer(36160,36064+Z,36161,k.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(36161,null),M.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(k.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,$.__webglTexture),G(34067,v,ye);for(let b=0;b<6;b++)ue(k.__webglFramebuffer[b],M,v,36064,34069+b);D(v,ye)&&L(34067),t.unbindTexture()}else if(de){let b=M.texture;for(let Z=0,oe=b.length;Z<oe;Z++){let re=b[Z],A=n.get(re);t.bindTexture(3553,A.__webglTexture),G(3553,re,ye),ue(k.__webglFramebuffer,M,re,36064+Z,3553),D(re,ye)&&L(3553)}t.unbindTexture()}else{let b=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?b=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(b,$.__webglTexture),G(b,v,ye),ue(k.__webglFramebuffer,M,v,36064,b),D(v,ye)&&L(b),t.unbindTexture()}M.depthBuffer&&ve(M)}function tt(M){let v=S(M)||o,k=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let $=0,te=k.length;$<te;$++){let de=k[$];if(D(de,v)){let ye=M.isWebGLCubeRenderTarget?34067:3553,b=n.get(de).__webglTexture;t.bindTexture(ye,b),L(ye),t.unbindTexture()}}}function ct(M){if(o&&M.samples>0&&Re(M)===!1){let v=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],k=M.width,$=M.height,te=16384,de=[],ye=M.stencilBuffer?33306:36096,b=n.get(M),Z=M.isWebGLMultipleRenderTargets===!0;if(Z)for(let oe=0;oe<v.length;oe++)t.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+oe,36161,null),t.bindFramebuffer(36160,b.__webglFramebuffer),s.framebufferTexture2D(36009,36064+oe,3553,null,0);t.bindFramebuffer(36008,b.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,b.__webglFramebuffer);for(let oe=0;oe<v.length;oe++){de.push(36064+oe),M.depthBuffer&&de.push(ye);let re=b.__ignoreDepthValues!==void 0?b.__ignoreDepthValues:!1;if(re===!1&&(M.depthBuffer&&(te|=256),M.stencilBuffer&&(te|=1024)),Z&&s.framebufferRenderbuffer(36008,36064,36161,b.__webglColorRenderbuffer[oe]),re===!0&&(s.invalidateFramebuffer(36008,[ye]),s.invalidateFramebuffer(36009,[ye])),Z){let A=n.get(v[oe]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,A,0)}s.blitFramebuffer(0,0,k,$,0,0,k,$,te,9728),m&&s.invalidateFramebuffer(36008,de)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Z)for(let oe=0;oe<v.length;oe++){t.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+oe,36161,b.__webglColorRenderbuffer[oe]);let re=n.get(v[oe]).__webglTexture;t.bindFramebuffer(36160,b.__webglFramebuffer),s.framebufferTexture2D(36009,36064+oe,3553,re,0)}t.bindFramebuffer(36009,b.__webglMultisampledFramebuffer)}}function Ze(M){return Math.min(h,M.samples)}function Re(M){let v=n.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ue(M){let v=a.render.frame;g.get(M)!==v&&(g.set(M,v),M.update())}function Ne(M,v){let k=M.encoding,$=M.format,te=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===js||k!==qn&&(k===Qe?o===!1?e.has("EXT_sRGB")===!0&&$===nn?(M.format=js,M.minFilter=Ft,M.generateMipmaps=!1):v=Ks.sRGBToLinear(v):($!==nn||te!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),v}this.allocateTextureUnit=j,this.resetTextureUnits=Y,this.setTexture2D=V,this.setTexture2DArray=J,this.setTexture3D=K,this.setTextureCube=le,this.rebindTextures=je,this.setupRenderTarget=et,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Re}function $m(s,e,t){let n=t.isWebGL2;function i(r,a=null){let o;if(r===Gn)return 5121;if(r===tu)return 32819;if(r===nu)return 32820;if(r===Qh)return 5120;if(r===Jh)return 5122;if(r===ko)return 5123;if(r===eu)return 5124;if(r===Wn)return 5125;if(r===jn)return 5126;if(r===ar)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===iu)return 6406;if(r===nn)return 6408;if(r===su)return 6409;if(r===au)return 6410;if(r===Xn)return 6402;if(r===mi)return 34041;if(r===ou)return 6403;if(r===ru)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===js)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===lu)return 36244;if(r===cu)return 33319;if(r===hu)return 33320;if(r===uu)return 36249;if(r===Bs||r===Hs||r===Vs||r===Gs)if(a===Qe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Bs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Bs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bo||r===Ho||r===Vo||r===Go)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Bo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ho)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Go)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===du)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Wo||r===jo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Wo)return a===Qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===jo)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xo||r===qo||r===Yo||r===$o||r===Zo||r===Ko||r===Qo||r===Jo||r===el||r===tl||r===nl||r===il||r===rl||r===sl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Xo)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qo)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yo)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$o)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zo)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ko)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qo)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jo)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===el)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===tl)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nl)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===il)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rl)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sl)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===al)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===al)return a===Qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===pi?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var lc=class extends xt{constructor(e=[]){super();this.isArrayCamera=!0,this.cameras=e}},pr=class extends Pt{constructor(){super();this.isGroup=!0,this.type="Group"}},Zm={type:"move"},es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let p of e.hand.values()){let f=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){let E=new pr;E.matrixAutoUpdate=!1,E.visible=!1,c.joints[p.jointName]=E,c.add(E)}let _=c.joints[p.jointName];f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}},cc=class extends Nt{constructor(e,t,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:Xn,u!==Xn&&u!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Xn&&(n=Wn),n===void 0&&u===mi&&(n=pi),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ht,this.minFilter=l!==void 0?l:ht,this.flipY=!1,this.generateMipmaps=!1}},hc=class extends cn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=null,c=null,u=null,h=null,d=null,m=null,g=t.getContextAttributes(),p=null,f=null,_=[],E=[],T=new xt;T.layers.enable(1),T.viewport=new Be;let S=new xt;S.layers.enable(2),S.viewport=new Be;let w=[T,S],D=new lc;D.layers.enable(1),D.layers.enable(2);let L=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let V=_[U];return V===void 0&&(V=new es,_[U]=V),V.getTargetRaySpace()},this.getControllerGrip=function(U){let V=_[U];return V===void 0&&(V=new es,_[U]=V),V.getGripSpace()},this.getHand=function(U){let V=_[U];return V===void 0&&(V=new es,_[U]=V),V.getHandSpace()};function P(U){let V=E.indexOf(U.inputSource);if(V===-1)return;let J=_[V];J!==void 0&&J.dispatchEvent({type:U.type,data:U.inputSource})}function I(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",z);for(let U=0;U<_.length;U++){let V=E[U];V!==null&&(E[U]=null,_[U].disconnect(V))}L=null,x=null,e.setRenderTarget(p),d=null,h=null,u=null,i=null,f=null,j.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",I),i.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let V={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:d}),f=new ut(d.framebufferWidth,d.framebufferHeight,{format:nn,type:Gn,encoding:e.outputEncoding})}else{let V=null,J=null,K=null;g.depth&&(K=g.stencil?35056:33190,V=g.stencil?mi:Xn,J=g.stencil?pi:Wn);let le={colorFormat:32856,depthFormat:K,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(le),i.updateRenderState({layers:[h]}),f=new ut(h.textureWidth,h.textureHeight,{format:nn,type:Gn,depthTexture:new cc(h.textureWidth,h.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});let fe=e.properties.get(f);fe.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(o),j.setContext(i),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(U){for(let V=0;V<U.removed.length;V++){let J=U.removed[V],K=E.indexOf(J);K>=0&&(E[K]=null,_[K].dispatchEvent({type:"disconnected",data:J}))}for(let V=0;V<U.added.length;V++){let J=U.added[V],K=E.indexOf(J);if(K===-1){for(let fe=0;fe<_.length;fe++)if(fe>=E.length){E.push(J),K=fe;break}else if(E[fe]===null){E[fe]=J,K=fe;break}if(K===-1)break}let le=_[K];le&&le.dispatchEvent({type:"connected",data:J})}}let Q=new C,ee=new C;function R(U,V,J){Q.setFromMatrixPosition(V.matrixWorld),ee.setFromMatrixPosition(J.matrixWorld);let K=Q.distanceTo(ee),le=V.projectionMatrix.elements,fe=J.projectionMatrix.elements,me=le[14]/(le[10]-1),G=le[14]/(le[10]+1),$e=(le[9]+1)/le[5],Ee=(le[9]-1)/le[5],be=(le[8]-1)/le[0],ue=(fe[8]+1)/fe[0],Fe=me*be,Ce=me*ue,ve=K/(-be+ue),je=ve*-be;V.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(je),U.translateZ(ve),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();let et=me+ve,tt=G+ve,ct=Fe-je,Ze=Ce+(K-je),Re=$e*G/tt*et,Ue=Ee*G/tt*et;U.projectionMatrix.makePerspective(ct,Ze,Re,Ue,et,tt)}function W(U,V){V===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(V.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;D.near=S.near=T.near=U.near,D.far=S.far=T.far=U.far,(L!==D.near||x!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),L=D.near,x=D.far);let V=U.parent,J=D.cameras;W(D,V);for(let le=0;le<J.length;le++)W(J[le],V);D.matrixWorld.decompose(D.position,D.quaternion,D.scale),U.position.copy(D.position),U.quaternion.copy(D.quaternion),U.scale.copy(D.scale),U.matrix.copy(D.matrix),U.matrixWorld.copy(D.matrixWorld);let K=U.children;for(let le=0,fe=K.length;le<fe;le++)K[le].updateMatrixWorld(!0);J.length===2?R(D,T,S):D.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return D},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(U){h!==null&&(h.fixedFoveation=U),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=U)};let B=null;function Y(U,V){if(c=V.getViewerPose(l||a),m=V,c!==null){let J=c.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let K=!1;J.length!==D.cameras.length&&(D.cameras.length=0,K=!0);for(let le=0;le<J.length;le++){let fe=J[le],me=null;if(d!==null)me=d.getViewport(fe);else{let $e=u.getViewSubImage(h,fe);me=$e.viewport,le===0&&(e.setRenderTargetTextures(f,$e.colorTexture,h.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(f))}let G=w[le];G===void 0&&(G=new xt,G.layers.enable(le),G.viewport=new Be,w[le]=G),G.matrix.fromArray(fe.transform.matrix),G.projectionMatrix.fromArray(fe.projectionMatrix),G.viewport.set(me.x,me.y,me.width,me.height),le===0&&D.matrix.copy(G.matrix),K===!0&&D.cameras.push(G)}}for(let J=0;J<_.length;J++){let K=E[J],le=_[J];K!==null&&le!==void 0&&le.update(K,V,l||a)}B&&B(U,V),m=null}let j=new Al;j.setAnimationLoop(Y),this.setAnimationLoop=function(U){B=U},this.dispose=function(){}}};function Km(s,e){function t(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,_,E,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),u(p,f)):f.isMeshPhongMaterial?(i(p,f),c(p,f)):f.isMeshStandardMaterial?(i(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,T)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(r(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?o(p,f,_,E):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Gt&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Gt&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _=e.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let S=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*S}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let E;f.map?E=f.map:f.specularMap?E=f.specularMap:f.displacementMap?E=f.displacementMap:f.normalMap?E=f.normalMap:f.bumpMap?E=f.bumpMap:f.roughnessMap?E=f.roughnessMap:f.metalnessMap?E=f.metalnessMap:f.alphaMap?E=f.alphaMap:f.emissiveMap?E=f.emissiveMap:f.clearcoatMap?E=f.clearcoatMap:f.clearcoatNormalMap?E=f.clearcoatNormalMap:f.clearcoatRoughnessMap?E=f.clearcoatRoughnessMap:f.iridescenceMap?E=f.iridescenceMap:f.iridescenceThicknessMap?E=f.iridescenceThicknessMap:f.specularIntensityMap?E=f.specularIntensityMap:f.specularColorMap?E=f.specularColorMap:f.transmissionMap?E=f.transmissionMap:f.thicknessMap?E=f.thicknessMap:f.sheenColorMap?E=f.sheenColorMap:f.sheenRoughnessMap&&(E=f.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix));let T;f.aoMap?T=f.aoMap:f.lightMap&&(T=f.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uv2Transform.value.copy(T.matrix))}function r(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function o(p,f,_,E){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=E*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let T;f.map?T=f.map:f.alphaMap&&(T=f.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix))}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Gt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Qm(){let s=Ar("canvas");return s.style.display="block",s}function La(s={}){this.isWebGLRenderer=!0;let e=s.canvas!==void 0?s.canvas:Qm(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,o=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1,u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let h=null,d=null,m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=qn,this.physicallyCorrectLights=!1,this.toneMapping=It,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});let p=this,f=!1,_=0,E=0,T=null,S=-1,w=null,D=new Be,L=new Be,x=null,P=e.width,I=e.height,z=1,Q=null,ee=null,R=new Be(0,0,P,I),W=new Be(0,0,P,I),B=!1,Y=new Ma,j=!1,U=!1,V=null,J=new Xe,K=new pe,le=new C,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return T===null?z:1}let G=t;function $e(y,F){for(let H=0;H<y.length;H++){let O=y[H],q=e.getContext(O,F);if(q!==null)return q}return null}try{let y={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Is}`),e.addEventListener("webglcontextlost",A,!1),e.addEventListener("webglcontextrestored",se,!1),e.addEventListener("webglcontextcreationerror",ne,!1),G===null){let F=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&F.shift(),G=$e(F,y),G===null)throw $e(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ee,be,ue,Fe,Ce,ve,je,et,tt,ct,Ze,Re,Ue,Ne,M,v,k,$,te,de,ye,b,Z;function oe(){Ee=new xp(G),be=new fp(G,Ee,s),Ee.init(be),b=new $m(G,Ee,be),ue=new qm(G,Ee,be),Fe=new wp,Ce=new Nm,ve=new Ym(G,Ee,ue,Ce,be,b,Fe),je=new mp(p),et=new vp(p),tt=new Iu(G,be),Z=new up(G,Ee,tt,be),ct=new bp(G,tt,Fe,Z),Ze=new Tp(G,ct,tt,Fe),te=new Ep(G,be,ve),v=new pp(Ce),Re=new Fm(p,je,et,Ee,be,Z,v),Ue=new Km(p,Ce),Ne=new Om,M=new Gm(Ee,be),$=new hp(p,je,ue,Ze,u,a),k=new Xm(p,Ze,be),de=new dp(G,Ee,Fe,be),ye=new yp(G,Ee,Fe,be),Fe.programs=Re.programs,p.capabilities=be,p.extensions=Ee,p.properties=Ce,p.renderLists=Ne,p.shadowMap=k,p.state=ue,p.info=Fe}oe();let re=new hc(p,G);this.xr=re,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let y=Ee.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Ee.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(y){y!==void 0&&(z=y,this.setSize(P,I,!1))},this.getSize=function(y){return y.set(P,I)},this.setSize=function(y,F,H){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=y,I=F,e.width=Math.floor(y*z),e.height=Math.floor(F*z),H!==!1&&(e.style.width=y+"px",e.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(P*z,I*z).floor()},this.setDrawingBufferSize=function(y,F,H){P=y,I=F,z=H,e.width=Math.floor(y*H),e.height=Math.floor(F*H),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(R)},this.setViewport=function(y,F,H,O){y.isVector4?R.set(y.x,y.y,y.z,y.w):R.set(y,F,H,O),ue.viewport(D.copy(R).multiplyScalar(z).floor())},this.getScissor=function(y){return y.copy(W)},this.setScissor=function(y,F,H,O){y.isVector4?W.set(y.x,y.y,y.z,y.w):W.set(y,F,H,O),ue.scissor(L.copy(W).multiplyScalar(z).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(y){ue.setScissorTest(B=y)},this.setOpaqueSort=function(y){Q=y},this.setTransparentSort=function(y){ee=y},this.getClearColor=function(y){return y.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(y=!0,F=!0,H=!0){let O=0;y&&(O|=16384),F&&(O|=256),H&&(O|=1024),G.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",A,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",ne,!1),Ne.dispose(),M.dispose(),Ce.dispose(),je.dispose(),et.dispose(),Ze.dispose(),Z.dispose(),Re.dispose(),re.dispose(),re.removeEventListener("sessionstart",He),re.removeEventListener("sessionend",Ve),V&&(V.dispose(),V=null),_t.stop()};function A(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;let y=Fe.autoReset,F=k.enabled,H=k.autoUpdate,O=k.needsUpdate,q=k.type;oe(),Fe.autoReset=y,k.enabled=F,k.autoUpdate=H,k.needsUpdate=O,k.type=q}function ne(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function xe(y){let F=y.target;F.removeEventListener("dispose",xe),he(F)}function he(y){_e(y),Ce.remove(y)}function _e(y){let F=Ce.get(y).programs;F!==void 0&&(F.forEach(function(H){Re.releaseProgram(H)}),y.isShaderMaterial&&Re.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,H,O,q,we){F===null&&(F=fe);let Te=q.isMesh&&q.matrixWorld.determinant()<0,Pe=Kc(y,F,H,O,q);ue.setMaterial(O,Te);let Ae=H.index,Ge=H.attributes.position;if(Ae===null){if(Ge===void 0||Ge.count===0)return}else if(Ae.count===0)return;let ze=1;O.wireframe===!0&&(Ae=ct.getWireframeAttribute(H),ze=2),Z.setup(q,O,Pe,H,Ae);let Oe,Ke=de;Ae!==null&&(Oe=tt.get(Ae),Ke=ye,Ke.setIndex(Oe));let kn=Ae!==null?Ae.count:Ge.count,si=H.drawRange.start*ze,ai=H.drawRange.count*ze,Qt=we!==null?we.start*ze:0,ke=we!==null?we.count*ze:Infinity,oi=Math.max(si,Qt),nt=Math.min(kn,si+ai,Qt+ke)-1,Jt=Math.max(0,nt-oi+1);if(Jt!==0){if(q.isMesh)O.wireframe===!0?(ue.setLineWidth(O.wireframeLinewidth*me()),Ke.setMode(1)):Ke.setMode(4);else if(q.isLine){let _n=O.linewidth;_n===void 0&&(_n=1),ue.setLineWidth(_n*me()),q.isLineSegments?Ke.setMode(1):q.isLineLoop?Ke.setMode(2):Ke.setMode(3)}else q.isPoints?Ke.setMode(0):q.isSprite&&Ke.setMode(4);if(q.isInstancedMesh)Ke.renderInstances(oi,Jt,q.count);else if(H.isInstancedBufferGeometry){let _n=Math.min(H.instanceCount,H._maxInstanceCount);Ke.renderInstances(oi,Jt,_n)}else Ke.render(oi,Jt)}},this.compile=function(y,F){d=M.get(y),d.init(),g.push(d),y.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights(p.physicallyCorrectLights),y.traverse(function(H){let O=H.material;if(O)if(Array.isArray(O))for(let q=0;q<O.length;q++){let we=O[q];bs(we,y,H)}else bs(O,y,H)}),g.pop(),d=null};let ae=null;function Me(y){ae&&ae(y)}function He(){_t.stop()}function Ve(){_t.start()}let _t=new Al;_t.setAnimationLoop(Me),typeof self!="undefined"&&_t.setContext(self),this.setAnimationLoop=function(y){ae=y,re.setAnimationLoop(y),y===null?_t.stop():_t.start()},re.addEventListener("sessionstart",He),re.addEventListener("sessionend",Ve),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;y.autoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(F),F=re.getCamera()),y.isScene===!0&&y.onBeforeRender(p,y,F,T),d=M.get(y,g.length),d.init(),g.push(d),J.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(J),U=this.localClippingEnabled,j=v.init(this.clippingPlanes,U,F),h=Ne.get(y,m.length),h.init(),m.push(h),Kt(y,F,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(Q,ee),j===!0&&v.beginShadows();let H=d.state.shadowsArray;if(k.render(H,y,F),j===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(h,y),d.setupLights(p.physicallyCorrectLights),F.isArrayCamera){let O=F.cameras;for(let q=0,we=O.length;q<we;q++){let Te=O[q];so(h,y,Te,Te.viewport)}}else so(h,y,F);T!==null&&(ve.updateMultisampleRenderTarget(T),ve.updateRenderTargetMipmap(T)),y.isScene===!0&&y.onAfterRender(p,y,F),Z.resetDefaultState(),S=-1,w=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Kt(y,F,H,O){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){O&&le.setFromMatrixPosition(y.matrixWorld).applyMatrix4(J);let Te=Ze.update(y),Pe=y.material;Pe.visible&&h.push(y,Te,Pe,H,le.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==Fe.render.frame&&(y.skeleton.update(),y.skeleton.frame=Fe.render.frame),!y.frustumCulled||Y.intersectsObject(y))){O&&le.setFromMatrixPosition(y.matrixWorld).applyMatrix4(J);let Te=Ze.update(y),Pe=y.material;if(Array.isArray(Pe)){let Ae=Te.groups;for(let Ge=0,ze=Ae.length;Ge<ze;Ge++){let Oe=Ae[Ge],Ke=Pe[Oe.materialIndex];Ke&&Ke.visible&&h.push(y,Te,Ke,H,le.z,Oe)}}else Pe.visible&&h.push(y,Te,Pe,H,le.z,null)}}let we=y.children;for(let Te=0,Pe=we.length;Te<Pe;Te++)Kt(we[Te],F,H,O)}function so(y,F,H,O){let q=y.opaque,we=y.transmissive,Te=y.transparent;d.setupLightsView(H),we.length>0&&$c(q,F,H),O&&ue.viewport(D.copy(O)),q.length>0&&yr(q,F,H),we.length>0&&yr(we,F,H),Te.length>0&&yr(Te,F,H),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function $c(y,F,H){let O=be.isWebGL2;V===null&&(V=new ut(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?ar:Gn,minFilter:Cr,samples:O&&r===!0?4:0})),p.getDrawingBufferSize(K),O?V.setSize(K.x,K.y):V.setSize(Ys(K.x),Ys(K.y));let q=p.getRenderTarget();p.setRenderTarget(V),p.clear();let we=p.toneMapping;p.toneMapping=It,yr(y,F,H),p.toneMapping=we,ve.updateMultisampleRenderTarget(V),ve.updateRenderTargetMipmap(V),p.setRenderTarget(q)}function yr(y,F,H){let O=F.isScene===!0?F.overrideMaterial:null;for(let q=0,we=y.length;q<we;q++){let Te=y[q],Pe=Te.object,Ae=Te.geometry,Ge=O===null?Te.material:O,ze=Te.group;Pe.layers.test(H.layers)&&Zc(Pe,F,H,Ae,Ge,ze)}}function Zc(y,F,H,O,q,we){y.onBeforeRender(p,F,H,O,q,we),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),q.onBeforeRender(p,F,H,O,y,we),q.transparent===!0&&q.side===an?(q.side=Gt,q.needsUpdate=!0,p.renderBufferDirect(H,F,O,q,y,we),q.side=rr,q.needsUpdate=!0,p.renderBufferDirect(H,F,O,q,y,we),q.side=an):p.renderBufferDirect(H,F,O,q,y,we),y.onAfterRender(p,F,H,O,q,we)}function bs(y,F,H){F.isScene!==!0&&(F=fe);let O=Ce.get(y),q=d.state.lights,we=d.state.shadowsArray,Te=q.state.version,Pe=Re.getParameters(y,q.state,we,F,H),Ae=Re.getProgramCacheKey(Pe),Ge=O.programs;O.environment=y.isMeshStandardMaterial?F.environment:null,O.fog=F.fog,O.envMap=(y.isMeshStandardMaterial?et:je).get(y.envMap||O.environment),Ge===void 0&&(y.addEventListener("dispose",xe),Ge=new Map,O.programs=Ge);let ze=Ge.get(Ae);if(ze!==void 0){if(O.currentProgram===ze&&O.lightsStateVersion===Te)return ao(y,Pe),ze}else Pe.uniforms=Re.getUniforms(y),y.onBuild(H,Pe,p),y.onBeforeCompile(Pe,p),ze=Re.acquireProgram(Pe,Ae),Ge.set(Ae,ze),O.uniforms=Pe.uniforms;let Oe=O.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Oe.clippingPlanes=v.uniform),ao(y,Pe),O.needsLights=Jc(y),O.lightsStateVersion=Te,O.needsLights&&(Oe.ambientLightColor.value=q.state.ambient,Oe.lightProbe.value=q.state.probe,Oe.directionalLights.value=q.state.directional,Oe.directionalLightShadows.value=q.state.directionalShadow,Oe.spotLights.value=q.state.spot,Oe.spotLightShadows.value=q.state.spotShadow,Oe.rectAreaLights.value=q.state.rectArea,Oe.ltc_1.value=q.state.rectAreaLTC1,Oe.ltc_2.value=q.state.rectAreaLTC2,Oe.pointLights.value=q.state.point,Oe.pointLightShadows.value=q.state.pointShadow,Oe.hemisphereLights.value=q.state.hemi,Oe.directionalShadowMap.value=q.state.directionalShadowMap,Oe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Oe.spotShadowMap.value=q.state.spotShadowMap,Oe.spotShadowMatrix.value=q.state.spotShadowMatrix,Oe.pointShadowMap.value=q.state.pointShadowMap,Oe.pointShadowMatrix.value=q.state.pointShadowMatrix);let Ke=ze.getUniforms(),kn=dr.seqWithValue(Ke.seq,Oe);return O.currentProgram=ze,O.uniformsList=kn,ze}function ao(y,F){let H=Ce.get(y);H.outputEncoding=F.outputEncoding,H.instancing=F.instancing,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function Kc(y,F,H,O,q){F.isScene!==!0&&(F=fe),ve.resetTextureUnits();let we=F.fog,Te=O.isMeshStandardMaterial?F.environment:null,Pe=T===null?p.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:qn,Ae=(O.isMeshStandardMaterial?et:je).get(O.envMap||Te),Ge=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!O.normalMap&&!!H.attributes.tangent,Oe=!!H.morphAttributes.position,Ke=!!H.morphAttributes.normal,kn=!!H.morphAttributes.color,si=O.toneMapped?p.toneMapping:It,ai=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Qt=ai!==void 0?ai.length:0,ke=Ce.get(O),oi=d.state.lights;if(j===!0&&(U===!0||y!==w)){let en=y===w&&O.id===S;v.setState(O,y,en)}let nt=!1;O.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==oi.state.version||ke.outputEncoding!==Pe||q.isInstancedMesh&&ke.instancing===!1||!q.isInstancedMesh&&ke.instancing===!0||q.isSkinnedMesh&&ke.skinning===!1||!q.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Ae||O.fog===!0&&ke.fog!==we||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==v.numPlanes||ke.numIntersection!==v.numIntersection)||ke.vertexAlphas!==Ge||ke.vertexTangents!==ze||ke.morphTargets!==Oe||ke.morphNormals!==Ke||ke.morphColors!==kn||ke.toneMapping!==si||be.isWebGL2===!0&&ke.morphTargetsCount!==Qt)&&(nt=!0):(nt=!0,ke.__version=O.version);let Jt=ke.currentProgram;nt===!0&&(Jt=bs(O,F,q));let _n=!1,$i=!1,ys=!1,vt=Jt.getUniforms(),Zi=ke.uniforms;if(ue.useProgram(Jt.program)&&(_n=!0,$i=!0,ys=!0),O.id!==S&&(S=O.id,$i=!0),_n||w!==y){if(vt.setValue(G,"projectionMatrix",y.projectionMatrix),be.logarithmicDepthBuffer&&vt.setValue(G,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),w!==y&&(w=y,$i=!0,ys=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){let en=vt.map.cameraPosition;en!==void 0&&en.setValue(G,le.setFromMatrixPosition(y.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&vt.setValue(G,"isOrthographic",y.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||q.isSkinnedMesh)&&vt.setValue(G,"viewMatrix",y.matrixWorldInverse)}if(q.isSkinnedMesh){vt.setOptional(G,q,"bindMatrix"),vt.setOptional(G,q,"bindMatrixInverse");let en=q.skeleton;en&&(be.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),vt.setValue(G,"boneTexture",en.boneTexture,ve),vt.setValue(G,"boneTextureSize",en.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let ws=H.morphAttributes;return(ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0&&be.isWebGL2===!0)&&te.update(q,H,O,Jt),($i||ke.receiveShadow!==q.receiveShadow)&&(ke.receiveShadow=q.receiveShadow,vt.setValue(G,"receiveShadow",q.receiveShadow)),$i&&(vt.setValue(G,"toneMappingExposure",p.toneMappingExposure),ke.needsLights&&Qc(Zi,ys),we&&O.fog===!0&&Ue.refreshFogUniforms(Zi,we),Ue.refreshMaterialUniforms(Zi,O,z,I,V),dr.upload(G,ke.uniformsList,Zi,ve)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(dr.upload(G,ke.uniformsList,Zi,ve),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&vt.setValue(G,"center",q.center),vt.setValue(G,"modelViewMatrix",q.modelViewMatrix),vt.setValue(G,"normalMatrix",q.normalMatrix),vt.setValue(G,"modelMatrix",q.matrixWorld),Jt}function Qc(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Jc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(y,F,H){Ce.get(y.texture).__webglTexture=F,Ce.get(y.depthTexture).__webglTexture=H;let O=Ce.get(y);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=H===void 0,O.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,F){let H=Ce.get(y);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,H=0){T=y,_=F,E=H;let O=!0;if(y){let Ae=Ce.get(y);Ae.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),O=!1):Ae.__webglFramebuffer===void 0?ve.setupRenderTarget(y):Ae.__hasExternalTextures&&ve.rebindTextures(y,Ce.get(y.texture).__webglTexture,Ce.get(y.depthTexture).__webglTexture)}let q=null,we=!1,Te=!1;if(y){let Ae=y.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture)&&(Te=!0);let Ge=Ce.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(q=Ge[F],we=!0):be.isWebGL2&&y.samples>0&&ve.useMultisampledRTT(y)===!1?q=Ce.get(y).__webglMultisampledFramebuffer:q=Ge,D.copy(y.viewport),L.copy(y.scissor),x=y.scissorTest}else D.copy(R).multiplyScalar(z).floor(),L.copy(W).multiplyScalar(z).floor(),x=B;if(ue.bindFramebuffer(36160,q)&&be.drawBuffers&&O&&ue.drawBuffers(y,q),ue.viewport(D),ue.scissor(L),ue.setScissorTest(x),we){let Ae=Ce.get(y.texture);G.framebufferTexture2D(36160,36064,34069+F,Ae.__webglTexture,H)}else if(Te){let Ae=Ce.get(y.texture),Ge=F||0;G.framebufferTextureLayer(36160,36064,Ae.__webglTexture,H||0,Ge)}S=-1},this.readRenderTargetPixels=function(y,F,H,O,q,we,Te){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe){ue.bindFramebuffer(36160,Pe);try{let Ae=y.texture,Ge=Ae.format,ze=Ae.type;if(Ge!==nn&&b.convert(Ge)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Oe=ze===ar&&(Ee.has("EXT_color_buffer_half_float")||be.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(ze!==Gn&&b.convert(ze)!==G.getParameter(35738)&&!(ze===jn&&(be.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-O&&H>=0&&H<=y.height-q&&G.readPixels(F,H,O,q,b.convert(Ge),b.convert(ze),we)}finally{let Ae=T!==null?Ce.get(T).__webglFramebuffer:null;ue.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(y,F,H=0){let O=Math.pow(2,-H),q=Math.floor(F.image.width*O),we=Math.floor(F.image.height*O);ve.setTexture2D(F,0),G.copyTexSubImage2D(3553,H,0,0,y.x,y.y,q,we),ue.unbindTexture()},this.copyTextureToTexture=function(y,F,H,O=0){let q=F.image.width,we=F.image.height,Te=b.convert(H.format),Pe=b.convert(H.type);ve.setTexture2D(H,0),G.pixelStorei(37440,H.flipY),G.pixelStorei(37441,H.premultiplyAlpha),G.pixelStorei(3317,H.unpackAlignment),F.isDataTexture?G.texSubImage2D(3553,O,y.x,y.y,q,we,Te,Pe,F.image.data):F.isCompressedTexture?G.compressedTexSubImage2D(3553,O,y.x,y.y,F.mipmaps[0].width,F.mipmaps[0].height,Te,F.mipmaps[0].data):G.texSubImage2D(3553,O,y.x,y.y,Te,Pe,F.image),O===0&&H.generateMipmaps&&G.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(y,F,H,O,q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let we=y.max.x-y.min.x+1,Te=y.max.y-y.min.y+1,Pe=y.max.z-y.min.z+1,Ae=b.convert(O.format),Ge=b.convert(O.type),ze;if(O.isData3DTexture)ve.setTexture3D(O,0),ze=32879;else if(O.isDataArrayTexture)ve.setTexture2DArray(O,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,O.flipY),G.pixelStorei(37441,O.premultiplyAlpha),G.pixelStorei(3317,O.unpackAlignment);let Oe=G.getParameter(3314),Ke=G.getParameter(32878),kn=G.getParameter(3316),si=G.getParameter(3315),ai=G.getParameter(32877),Qt=H.isCompressedTexture?H.mipmaps[0]:H.image;G.pixelStorei(3314,Qt.width),G.pixelStorei(32878,Qt.height),G.pixelStorei(3316,y.min.x),G.pixelStorei(3315,y.min.y),G.pixelStorei(32877,y.min.z),H.isDataTexture||H.isData3DTexture?G.texSubImage3D(ze,q,F.x,F.y,F.z,we,Te,Pe,Ae,Ge,Qt.data):H.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(ze,q,F.x,F.y,F.z,we,Te,Pe,Ae,Qt.data)):G.texSubImage3D(ze,q,F.x,F.y,F.z,we,Te,Pe,Ae,Ge,Qt),G.pixelStorei(3314,Oe),G.pixelStorei(32878,Ke),G.pixelStorei(3316,kn),G.pixelStorei(3315,si),G.pixelStorei(32877,ai),q===0&&O.generateMipmaps&&G.generateMipmap(ze),ue.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?ve.setTextureCube(y,0):y.isData3DTexture?ve.setTexture3D(y,0):y.isDataArrayTexture?ve.setTexture2DArray(y,0):ve.setTexture2D(y,0),ue.unbindTexture()},this.resetState=function(){_=0,E=0,T=null,ue.reset(),Z.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var ts=class extends Pt{constructor(){super();this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}},ns=class extends An{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},uc=class extends An{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dc=new Xe,Ra=new Or,is=new cr,rs=new C,ss=class extends Pt{constructor(e=new lt,t=new uc){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(i),is.radius+=r,e.ray.intersectsSphere(is)===!1)return;dc.copy(i).invert(),Ra.copy(e.ray).applyMatrix4(dc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=d,p=m;g<p;g++){let f=c.getX(g);rs.fromBufferAttribute(h,f),fc(rs,f,l,i,e,t,this)}}else{let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=d,p=m;g<p;g++)rs.fromBufferAttribute(h,g),fc(rs,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function fc(s,e,t,n,i,r,a){let o=Ra.distanceSqToPoint(s);if(o<t){let l=new C;Ra.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var as=class extends An{constructor(e){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ie(16777215),this.specular=new Ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ns,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ia=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=pc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function pc(){return(typeof performance=="undefined"?Date:performance).now()}var Jm="\\[\\]\\.:\\/",Hg="[^"+Jm.replace("\\.","")+"]",os=class{constructor(e,t,n=0,i=Infinity){this.ray=new Or(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Fa(e,this,n,t),n.sort(mc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Fa(e[i],this,n,t);return n.sort(mc),n}};function mc(s,e){return s.distance-e.distance}function Fa(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,a=i.length;r<a;r++)Fa(i[r],e,t,!0)}}var Lt=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Is}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Is);var Ut=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},eg=new Ri(-1,1,1,-1,0,1),Na=new lt;Na.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3));Na.setAttribute("uv",new Tt([0,2,0,0,2,0],2));var Fn=class{constructor(e){this._mesh=new $t(Na,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,eg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var gc={uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

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

		}`},za=class extends Ut{constructor(e=.96){super();gc===void 0&&console.error("THREE.AfterimagePass relies on AfterimageShader"),this.shader=gc,this.uniforms=Rn.clone(this.shader.uniforms),this.uniforms.damp.value=e,this.textureComp=new ut(window.innerWidth,window.innerHeight,{magFilter:ht}),this.textureOld=new ut(window.innerWidth,window.innerHeight,{magFilter:ht}),this.shaderMaterial=new Ye({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new Fn(this.shaderMaterial);let t=new Jn;this.copyFsQuad=new Fn(t)}render(e,t,n){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=n.texture,e.setRenderTarget(this.textureComp),this.compFsQuad.render(e),this.copyFsQuad.material.map=this.textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this.copyFsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.copyFsQuad.render(e));let i=this.textureOld;this.textureOld=this.textureComp,this.textureComp=i}setSize(e,t){this.textureComp.setSize(e,t),this.textureOld.setSize(e,t)}};var _c={type:"change"},Oa={type:"start"},vc={type:"end"},Ua=class extends cn{constructor(e,t){super();t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.minDistance=0,this.maxDistance=Infinity,this.minZoom=0,this.maxZoom=Infinity,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-Infinity,this.maxAzimuthAngle=Infinity,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hn.ROTATE,MIDDLE:Hn.DOLLY,RIGHT:Hn.PAN},this.touches={ONE:Vn.ROTATE,TWO:Vn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",Ne),this._domElementKeyEvents=b},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(_c),n.update(),r=i.NONE},this.update=function(){let b=new C,Z=new hn().setFromUnitVectors(e.up,new C(0,1,0)),oe=Z.clone().invert(),re=new C,A=new hn,se=2*Math.PI;return function(){let xe=n.object.position;b.copy(xe).sub(n.target),b.applyQuaternion(Z),o.setFromVector3(b),n.autoRotate&&r===i.NONE&&P(L()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let he=n.minAzimuthAngle,_e=n.maxAzimuthAngle;return isFinite(he)&&isFinite(_e)&&(he<-Math.PI?he+=se:he>Math.PI&&(he-=se),_e<-Math.PI?_e+=se:_e>Math.PI&&(_e-=se),he<=_e?o.theta=Math.max(he,Math.min(_e,o.theta)):o.theta=o.theta>(he+_e)/2?Math.max(he,o.theta):Math.min(_e,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),b.setFromSpherical(o),b.applyQuaternion(oe),xe.copy(n.target).add(b),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||re.distanceToSquared(n.object.position)>a||8*(1-A.dot(n.object.quaternion))>a?(n.dispatchEvent(_c),re.copy(n.object.position),A.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",k),n.domElement.removeEventListener("pointerdown",je),n.domElement.removeEventListener("pointercancel",ct),n.domElement.removeEventListener("wheel",Ue),n.domElement.removeEventListener("pointermove",et),n.domElement.removeEventListener("pointerup",tt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Ne)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=i.NONE,a=1e-6,o=new Lt,l=new Lt,c=1,u=new C,h=!1,d=new pe,m=new pe,g=new pe,p=new pe,f=new pe,_=new pe,E=new pe,T=new pe,S=new pe,w=[],D={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function P(b){l.theta-=b}function I(b){l.phi-=b}let z=function(){let b=new C;return function(oe,re){b.setFromMatrixColumn(re,0),b.multiplyScalar(-oe),u.add(b)}}(),Q=function(){let b=new C;return function(oe,re){n.screenSpacePanning===!0?b.setFromMatrixColumn(re,1):(b.setFromMatrixColumn(re,0),b.crossVectors(n.object.up,b)),b.multiplyScalar(oe),u.add(b)}}(),ee=function(){let b=new C;return function(oe,re){let A=n.domElement;if(n.object.isPerspectiveCamera){let se=n.object.position;b.copy(se).sub(n.target);let ne=b.length();ne*=Math.tan(n.object.fov/2*Math.PI/180),z(2*oe*ne/A.clientHeight,n.object.matrix),Q(2*re*ne/A.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(oe*(n.object.right-n.object.left)/n.object.zoom/A.clientWidth,n.object.matrix),Q(re*(n.object.top-n.object.bottom)/n.object.zoom/A.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(b){n.object.isPerspectiveCamera?c/=b:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*b)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(b){n.object.isPerspectiveCamera?c*=b:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/b)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(b){d.set(b.clientX,b.clientY)}function Y(b){E.set(b.clientX,b.clientY)}function j(b){p.set(b.clientX,b.clientY)}function U(b){m.set(b.clientX,b.clientY),g.subVectors(m,d).multiplyScalar(n.rotateSpeed);let Z=n.domElement;P(2*Math.PI*g.x/Z.clientHeight),I(2*Math.PI*g.y/Z.clientHeight),d.copy(m),n.update()}function V(b){T.set(b.clientX,b.clientY),S.subVectors(T,E),S.y>0?R(x()):S.y<0&&W(x()),E.copy(T),n.update()}function J(b){f.set(b.clientX,b.clientY),_.subVectors(f,p).multiplyScalar(n.panSpeed),ee(_.x,_.y),p.copy(f),n.update()}function K(b){b.deltaY<0?W(x()):b.deltaY>0&&R(x()),n.update()}function le(b){let Z=!1;switch(b.code){case n.keys.UP:ee(0,n.keyPanSpeed),Z=!0;break;case n.keys.BOTTOM:ee(0,-n.keyPanSpeed),Z=!0;break;case n.keys.LEFT:ee(n.keyPanSpeed,0),Z=!0;break;case n.keys.RIGHT:ee(-n.keyPanSpeed,0),Z=!0;break}Z&&(b.preventDefault(),n.update())}function fe(){if(w.length===1)d.set(w[0].pageX,w[0].pageY);else{let b=.5*(w[0].pageX+w[1].pageX),Z=.5*(w[0].pageY+w[1].pageY);d.set(b,Z)}}function me(){if(w.length===1)p.set(w[0].pageX,w[0].pageY);else{let b=.5*(w[0].pageX+w[1].pageX),Z=.5*(w[0].pageY+w[1].pageY);p.set(b,Z)}}function G(){let b=w[0].pageX-w[1].pageX,Z=w[0].pageY-w[1].pageY,oe=Math.sqrt(b*b+Z*Z);E.set(0,oe)}function $e(){n.enableZoom&&G(),n.enablePan&&me()}function Ee(){n.enableZoom&&G(),n.enableRotate&&fe()}function be(b){if(w.length==1)m.set(b.pageX,b.pageY);else{let oe=ye(b),re=.5*(b.pageX+oe.x),A=.5*(b.pageY+oe.y);m.set(re,A)}g.subVectors(m,d).multiplyScalar(n.rotateSpeed);let Z=n.domElement;P(2*Math.PI*g.x/Z.clientHeight),I(2*Math.PI*g.y/Z.clientHeight),d.copy(m)}function ue(b){if(w.length===1)f.set(b.pageX,b.pageY);else{let Z=ye(b),oe=.5*(b.pageX+Z.x),re=.5*(b.pageY+Z.y);f.set(oe,re)}_.subVectors(f,p).multiplyScalar(n.panSpeed),ee(_.x,_.y),p.copy(f)}function Fe(b){let Z=ye(b),oe=b.pageX-Z.x,re=b.pageY-Z.y,A=Math.sqrt(oe*oe+re*re);T.set(0,A),S.set(0,Math.pow(T.y/E.y,n.zoomSpeed)),R(S.y),E.copy(T)}function Ce(b){n.enableZoom&&Fe(b),n.enablePan&&ue(b)}function ve(b){n.enableZoom&&Fe(b),n.enableRotate&&be(b)}function je(b){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(b.pointerId),n.domElement.addEventListener("pointermove",et),n.domElement.addEventListener("pointerup",tt)),$(b),b.pointerType==="touch"?M(b):Ze(b))}function et(b){n.enabled!==!1&&(b.pointerType==="touch"?v(b):Re(b))}function tt(b){te(b),w.length===0&&(n.domElement.releasePointerCapture(b.pointerId),n.domElement.removeEventListener("pointermove",et),n.domElement.removeEventListener("pointerup",tt)),n.dispatchEvent(vc),r=i.NONE}function ct(b){te(b)}function Ze(b){let Z;switch(b.button){case 0:Z=n.mouseButtons.LEFT;break;case 1:Z=n.mouseButtons.MIDDLE;break;case 2:Z=n.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case Hn.DOLLY:if(n.enableZoom===!1)return;Y(b),r=i.DOLLY;break;case Hn.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(n.enablePan===!1)return;j(b),r=i.PAN}else{if(n.enableRotate===!1)return;B(b),r=i.ROTATE}break;case Hn.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(n.enableRotate===!1)return;B(b),r=i.ROTATE}else{if(n.enablePan===!1)return;j(b),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Oa)}function Re(b){if(n.enabled!==!1)switch(r){case i.ROTATE:if(n.enableRotate===!1)return;U(b);break;case i.DOLLY:if(n.enableZoom===!1)return;V(b);break;case i.PAN:if(n.enablePan===!1)return;J(b);break}}function Ue(b){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(b.preventDefault(),n.dispatchEvent(Oa),K(b),n.dispatchEvent(vc))}function Ne(b){n.enabled===!1||n.enablePan===!1||le(b)}function M(b){switch(de(b),w.length){case 1:switch(n.touches.ONE){case Vn.ROTATE:if(n.enableRotate===!1)return;fe(),r=i.TOUCH_ROTATE;break;case Vn.PAN:if(n.enablePan===!1)return;me(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Vn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;$e(),r=i.TOUCH_DOLLY_PAN;break;case Vn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ee(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Oa)}function v(b){switch(de(b),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;be(b),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ue(b),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(b),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(b),n.update();break;default:r=i.NONE}}function k(b){n.enabled!==!1&&b.preventDefault()}function $(b){w.push(b)}function te(b){delete D[b.pointerId];for(let Z=0;Z<w.length;Z++)if(w[Z].pointerId==b.pointerId){w.splice(Z,1);return}}function de(b){let Z=D[b.pointerId];Z===void 0&&(Z=new pe,D[b.pointerId]=Z),Z.set(b.pageX,b.pageY)}function ye(b){let Z=b.pointerId===w[0].pointerId?w[1]:w[0];return D[Z.pointerId]}n.domElement.addEventListener("contextmenu",k),n.domElement.addEventListener("pointerdown",je),n.domElement.addEventListener("pointercancel",ct),n.domElement.addEventListener("wheel",Ue,{passive:!1}),this.update()}};var zi={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};var ni=class extends Ut{constructor(e,t){super();this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ye?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Rn.clone(e.uniforms),this.material=new Ye({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Fn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}};var ka=class extends Ut{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},xc=class extends Ut{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Ba=class{constructor(e,t){if(this.renderer=e,t===void 0){let n=e.getSize(new pe);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new ut(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],zi===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),ni===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new ni(zi),this.clock=new Ia}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ka!==void 0&&(a instanceof ka?n=!0:a instanceof xc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}},a0=new Ri(-1,1,1,-1,0,1),bc=new lt;bc.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3));bc.setAttribute("uv",new Tt([0,2,0,0,2,0],2));var Ha=class extends Ut{constructor(e,t,n,i,r){super();this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ie}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}};var yc={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},Nn=class extends Ut{constructor(e,t,n,i){super();this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new pe(e.x,e.y):new pe(256,256),this.clearColor=new Ie(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ut(r,a),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new ut(r,a);d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let m=new ut(r,a);m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}yc===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");let o=yc;this.highPassUniforms=Rn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ye({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{}}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new pe(r,a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,zi===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");let u=zi;this.copyUniforms=Rn.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Ye({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:on,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ie,this.oldClearAlpha=1,this.basic=new Jn,this.fsQuad=new Fn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.texSize.value=new pe(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Nn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Nn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){return new Ye({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new pe(.5,.5)},direction:{value:new pe(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Ye({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
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
				}`})}};Nn.BlurDirectionX=new pe(1,0);Nn.BlurDirectionY=new pe(0,1);var wc={uniforms:{tDiffuse:{value:null},resolution:{value:new pe(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`};var hs={};oo(hs,{bulb:()=>Wa,collidingBulb:()=>cg,collidingDisc:()=>lg,cube:()=>ng,disc:()=>Ga,eightCubes:()=>ug,expandingSphere:()=>ag,fountain:()=>hg,harmonicSphere:()=>sg,plane:()=>dg,plane2:()=>fg,regularCube:()=>ig,solarSystem:()=>og,sphere:()=>rg,teapot:()=>pg,tesseract:()=>mg});var Va=class extends lt{constructor(e=50,t=10,n=!0,i=!0,r=!0,a=!0,o=!0){let l=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,3,16,17,18,7,19,20,21,11,22,23,24,15,25,26,27,18,28,29,30,21,31,32,33,24,34,35,36,27,37,38,39,30,40,41,0,33,42,43,4,36,44,45,8,39,46,47,12,12,13,14,15,48,49,50,51,52,53,54,55,56,57,58,59,15,25,26,27,51,60,61,62,55,63,64,65,59,66,67,68,27,37,38,39,62,69,70,71,65,72,73,74,68,75,76,77,39,46,47,12,71,78,79,48,74,80,81,52,77,82,83,56,56,57,58,59,84,85,86,87,88,89,90,91,92,93,94,95,59,66,67,68,87,96,97,98,91,99,100,101,95,102,103,104,68,75,76,77,98,105,106,107,101,108,109,110,104,111,112,113,77,82,83,56,107,114,115,84,110,116,117,88,113,118,119,92,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,123,136,137,120,127,138,139,124,131,140,141,128,135,142,143,132,132,133,134,135,144,145,146,147,148,149,150,151,68,152,153,154,135,142,143,132,147,155,156,144,151,157,158,148,154,159,160,68,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,164,177,178,161,168,179,180,165,172,181,182,169,176,183,184,173,173,174,175,176,185,186,187,188,189,190,191,192,193,194,195,196,176,183,184,173,188,197,198,185,192,199,200,189,196,201,202,193,203,203,203,203,204,205,206,207,208,208,208,208,209,210,211,212,203,203,203,203,207,213,214,215,208,208,208,208,212,216,217,218,203,203,203,203,215,219,220,221,208,208,208,208,218,222,223,224,203,203,203,203,221,225,226,204,208,208,208,208,224,227,228,209,209,210,211,212,229,230,231,232,233,234,235,236,237,238,239,240,212,216,217,218,232,241,242,243,236,244,245,246,240,247,248,249,218,222,223,224,243,250,251,252,246,253,254,255,249,256,257,258,224,227,228,209,252,259,260,229,255,261,262,233,258,263,264,237,265,265,265,265,266,267,268,269,270,271,272,273,92,119,118,113,265,265,265,265,269,274,275,276,273,277,278,279,113,112,111,104,265,265,265,265,276,280,281,282,279,283,284,285,104,103,102,95,265,265,265,265,282,286,287,266,285,288,289,270,95,94,93,92],c=[1.4,0,2.4,1.4,-.784,2.4,.784,-1.4,2.4,0,-1.4,2.4,1.3375,0,2.53125,1.3375,-.749,2.53125,.749,-1.3375,2.53125,0,-1.3375,2.53125,1.4375,0,2.53125,1.4375,-.805,2.53125,.805,-1.4375,2.53125,0,-1.4375,2.53125,1.5,0,2.4,1.5,-.84,2.4,.84,-1.5,2.4,0,-1.5,2.4,-.784,-1.4,2.4,-1.4,-.784,2.4,-1.4,0,2.4,-.749,-1.3375,2.53125,-1.3375,-.749,2.53125,-1.3375,0,2.53125,-.805,-1.4375,2.53125,-1.4375,-.805,2.53125,-1.4375,0,2.53125,-.84,-1.5,2.4,-1.5,-.84,2.4,-1.5,0,2.4,-1.4,.784,2.4,-.784,1.4,2.4,0,1.4,2.4,-1.3375,.749,2.53125,-.749,1.3375,2.53125,0,1.3375,2.53125,-1.4375,.805,2.53125,-.805,1.4375,2.53125,0,1.4375,2.53125,-1.5,.84,2.4,-.84,1.5,2.4,0,1.5,2.4,.784,1.4,2.4,1.4,.784,2.4,.749,1.3375,2.53125,1.3375,.749,2.53125,.805,1.4375,2.53125,1.4375,.805,2.53125,.84,1.5,2.4,1.5,.84,2.4,1.75,0,1.875,1.75,-.98,1.875,.98,-1.75,1.875,0,-1.75,1.875,2,0,1.35,2,-1.12,1.35,1.12,-2,1.35,0,-2,1.35,2,0,.9,2,-1.12,.9,1.12,-2,.9,0,-2,.9,-.98,-1.75,1.875,-1.75,-.98,1.875,-1.75,0,1.875,-1.12,-2,1.35,-2,-1.12,1.35,-2,0,1.35,-1.12,-2,.9,-2,-1.12,.9,-2,0,.9,-1.75,.98,1.875,-.98,1.75,1.875,0,1.75,1.875,-2,1.12,1.35,-1.12,2,1.35,0,2,1.35,-2,1.12,.9,-1.12,2,.9,0,2,.9,.98,1.75,1.875,1.75,.98,1.875,1.12,2,1.35,2,1.12,1.35,1.12,2,.9,2,1.12,.9,2,0,.45,2,-1.12,.45,1.12,-2,.45,0,-2,.45,1.5,0,.225,1.5,-.84,.225,.84,-1.5,.225,0,-1.5,.225,1.5,0,.15,1.5,-.84,.15,.84,-1.5,.15,0,-1.5,.15,-1.12,-2,.45,-2,-1.12,.45,-2,0,.45,-.84,-1.5,.225,-1.5,-.84,.225,-1.5,0,.225,-.84,-1.5,.15,-1.5,-.84,.15,-1.5,0,.15,-2,1.12,.45,-1.12,2,.45,0,2,.45,-1.5,.84,.225,-.84,1.5,.225,0,1.5,.225,-1.5,.84,.15,-.84,1.5,.15,0,1.5,.15,1.12,2,.45,2,1.12,.45,.84,1.5,.225,1.5,.84,.225,.84,1.5,.15,1.5,.84,.15,-1.6,0,2.025,-1.6,-.3,2.025,-1.5,-.3,2.25,-1.5,0,2.25,-2.3,0,2.025,-2.3,-.3,2.025,-2.5,-.3,2.25,-2.5,0,2.25,-2.7,0,2.025,-2.7,-.3,2.025,-3,-.3,2.25,-3,0,2.25,-2.7,0,1.8,-2.7,-.3,1.8,-3,-.3,1.8,-3,0,1.8,-1.5,.3,2.25,-1.6,.3,2.025,-2.5,.3,2.25,-2.3,.3,2.025,-3,.3,2.25,-2.7,.3,2.025,-3,.3,1.8,-2.7,.3,1.8,-2.7,0,1.575,-2.7,-.3,1.575,-3,-.3,1.35,-3,0,1.35,-2.5,0,1.125,-2.5,-.3,1.125,-2.65,-.3,.9375,-2.65,0,.9375,-2,-.3,.9,-1.9,-.3,.6,-1.9,0,.6,-3,.3,1.35,-2.7,.3,1.575,-2.65,.3,.9375,-2.5,.3,1.125,-1.9,.3,.6,-2,.3,.9,1.7,0,1.425,1.7,-.66,1.425,1.7,-.66,.6,1.7,0,.6,2.6,0,1.425,2.6,-.66,1.425,3.1,-.66,.825,3.1,0,.825,2.3,0,2.1,2.3,-.25,2.1,2.4,-.25,2.025,2.4,0,2.025,2.7,0,2.4,2.7,-.25,2.4,3.3,-.25,2.4,3.3,0,2.4,1.7,.66,.6,1.7,.66,1.425,3.1,.66,.825,2.6,.66,1.425,2.4,.25,2.025,2.3,.25,2.1,3.3,.25,2.4,2.7,.25,2.4,2.8,0,2.475,2.8,-.25,2.475,3.525,-.25,2.49375,3.525,0,2.49375,2.9,0,2.475,2.9,-.15,2.475,3.45,-.15,2.5125,3.45,0,2.5125,2.8,0,2.4,2.8,-.15,2.4,3.2,-.15,2.4,3.2,0,2.4,3.525,.25,2.49375,2.8,.25,2.475,3.45,.15,2.5125,2.9,.15,2.475,3.2,.15,2.4,2.8,.15,2.4,0,0,3.15,.8,0,3.15,.8,-.45,3.15,.45,-.8,3.15,0,-.8,3.15,0,0,2.85,.2,0,2.7,.2,-.112,2.7,.112,-.2,2.7,0,-.2,2.7,-.45,-.8,3.15,-.8,-.45,3.15,-.8,0,3.15,-.112,-.2,2.7,-.2,-.112,2.7,-.2,0,2.7,-.8,.45,3.15,-.45,.8,3.15,0,.8,3.15,-.2,.112,2.7,-.112,.2,2.7,0,.2,2.7,.45,.8,3.15,.8,.45,3.15,.112,.2,2.7,.2,.112,2.7,.4,0,2.55,.4,-.224,2.55,.224,-.4,2.55,0,-.4,2.55,1.3,0,2.55,1.3,-.728,2.55,.728,-1.3,2.55,0,-1.3,2.55,1.3,0,2.4,1.3,-.728,2.4,.728,-1.3,2.4,0,-1.3,2.4,-.224,-.4,2.55,-.4,-.224,2.55,-.4,0,2.55,-.728,-1.3,2.55,-1.3,-.728,2.55,-1.3,0,2.55,-.728,-1.3,2.4,-1.3,-.728,2.4,-1.3,0,2.4,-.4,.224,2.55,-.224,.4,2.55,0,.4,2.55,-1.3,.728,2.55,-.728,1.3,2.55,0,1.3,2.55,-1.3,.728,2.4,-.728,1.3,2.4,0,1.3,2.4,.224,.4,2.55,.4,.224,2.55,.728,1.3,2.55,1.3,.728,2.55,.728,1.3,2.4,1.3,.728,2.4,0,0,0,1.425,0,0,1.425,.798,0,.798,1.425,0,0,1.425,0,1.5,0,.075,1.5,.84,.075,.84,1.5,.075,0,1.5,.075,-.798,1.425,0,-1.425,.798,0,-1.425,0,0,-.84,1.5,.075,-1.5,.84,.075,-1.5,0,.075,-1.425,-.798,0,-.798,-1.425,0,0,-1.425,0,-1.5,-.84,.075,-.84,-1.5,.075,0,-1.5,.075,.798,-1.425,0,1.425,-.798,0,.84,-1.5,.075,1.5,-.84,.075];super();t=Math.max(2,Math.floor(t));let u=1.3,d=3.15*(o?1:u)/2,m=e/d,g=n?(8*t-4)*t:0;g+=i?(16*t-4)*t:0,g+=r?40*t*t:0;let p=new Uint32Array(g*3),f=n?4:0;f+=i?8:0,f+=r?20:0,f*=(t+1)*(t+1);let _=new Float32Array(f*3),E=new Float32Array(f*3),T=new Float32Array(f*2),S=new Xe;S.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0);let w=[],D=[],L=[],x=[],P=[],I=[],z=[],Q=[],ee=[],R=new C,W,B,Y,j,U=0,V=0,J=new C,K=new Xe,le=new Xe,fe=new Be,me=new Be,G=new Be,$e=new Be,Ee=new C,be=new C,ue=S.clone();ue.transpose();let Fe=(Ue,Ne,M)=>!(_[Ue*3]===_[Ne*3]&&_[Ue*3+1]===_[Ne*3+1]&&_[Ue*3+2]===_[Ne*3+2]||_[Ue*3]===_[M*3]&&_[Ue*3+1]===_[M*3+1]&&_[Ue*3+2]===_[M*3+2]||_[Ne*3]===_[M*3]&&_[Ne*3+1]===_[M*3+1]&&_[Ne*3+2]===_[M*3+2]);for(let Ue=0;Ue<3;Ue++)I[Ue]=new Xe;let Ce=r?0:20,ve=n?32:28,je=t+1,et=0,tt=0,ct=0,Ze=0,Re=0;for(let Ue=Ce;Ue<ve;Ue++)if(i||Ue<20||Ue>=28){for(let Ne=0;Ne<3;Ne++){for(let M=0;M<4;M++)for(let v=0;v<4;v++)w[v*4+M]=c[l[Ue*16+M*4+v]*3+Ne],a&&Ue>=20&&Ue<28&&Ne!==2&&(w[v*4+M]*=1.077),!o&&Ne===2&&(w[v*4+M]*=u);K.set(w[0],w[1],w[2],w[3],w[4],w[5],w[6],w[7],w[8],w[9],w[10],w[11],w[12],w[13],w[14],w[15]),le.multiplyMatrices(K,S),I[Ne].multiplyMatrices(ue,le)}for(let Ne=0;Ne<=t;Ne++){let M=Ne/t;for(let v=0;v<=t;v++){let k=v/t;for(j=4,B=Y=1;j--;)D[j]=B,L[j]=Y,B*=M,Y*=k,j===3?(x[j]=P[j]=0,U=V=1):(x[j]=U*(3-j),P[j]=V*(3-j),U*=M,V*=k);fe.fromArray(D),me.fromArray(L),G.fromArray(x),$e.fromArray(P);for(let $=0;$<3;$++)W=fe.clone(),W.applyMatrix4(I[$]),z[$]=W.dot(me),W=G.clone(),W.applyMatrix4(I[$]),Q[$]=W.dot(me),W=fe.clone(),W.applyMatrix4(I[$]),ee[$]=W.dot($e);Ee.fromArray(Q),be.fromArray(ee),R.crossVectors(be,Ee),R.normalize(),z[0]===0&&z[1]===0?J.set(0,z[2]>d?1:-1,0):J.set(R.x,R.z,-R.y),_[tt++]=m*z[0],_[tt++]=m*(z[2]-d),_[tt++]=-m*z[1],E[ct++]=J.x,E[ct++]=J.y,E[ct++]=J.z,T[Ze++]=1-k,T[Ze++]=1-M}}for(let Ne=0;Ne<t;Ne++)for(let M=0;M<t;M++){let v=et*je*je+Ne*je+M,k=v+1,$=k+je,te=v+je;Fe(v,k,$)&&(p[Re++]=v,p[Re++]=k,p[Re++]=$),Fe(v,$,te)&&(p[Re++]=v,p[Re++]=$,p[Re++]=te)}et++}this.setIndex(new qe(p,1)),this.setAttribute("position",new qe(_,3)),this.setAttribute("normal",new qe(E,3)),this.setAttribute("uv",new qe(T,2)),this.computeBoundingSphere()}};var ls=(s,e,t,n=256)=>~~(Math.min(s,.99)*n)+~~(Math.min(e,.99)*n)*n+~~(Math.min(t,.99)*n)*n*n;var tg=s=>Math.exp(-Math.pow(s*2,2)),cs=s=>s<5?(s+1.09611)*1900:(s+1.7)*1700,wt=s=>{let e=s*Math.pow(Math.random(),15),t=cs(e);return{mass:e,temperature:t*(1+.75*tg(1-2*Math.random()))}};var Rt=s=>s?[{temperature:0,mass:s,position:new C,speed:new C}]:[],ng=({number:s,range:e,speed:t,mass:n,blackHoleMass:i})=>new Array(s).fill().map(()=>({...wt(n),position:new C(e/2-Math.random()*e,e/2-Math.random()*e,e/2-Math.random()*e),speed:new C(t/2-Math.random()*t,t/2-Math.random()*t,t/2-Math.random()*t)})).concat(Rt(i)),ig=({number:s,range:e,speed:t,mass:n,blackHoleMass:i})=>{let r=~~Math.cbrt(s);return new Array(r).fill().map((a,o)=>new Array(r).fill().map((l,c)=>new Array(r).fill().map((u,h)=>{let d=new C(o/r-1/2,c/r-1/2,h/r-1/2);return{mass:n,temperature:15e3*(.75-d.lengthSq())-3e3,position:d.multiplyScalar(e),speed:new C(t/2-Math.random()*t,t/2-Math.random()*t,t/2-Math.random()*t)}}))).flat(3).concat(Rt(i))},rg=({number:s,range:e,mass:t,speed:n,blackHoleMass:i,gravitationalConstant:r})=>{let a=new Lt;return e*=.5,new Array(s).fill().map(()=>{a.radius=e*Math.cbrt(Math.random()),a.theta=Math.random()*2*Math.PI,a.phi=Math.acos(2*Math.random()-1);let o=new C().setFromSpherical(a),l=1-2*Math.random(),c=1-2*Math.random(),u=-(l*o.x+c*o.y)/o.z,h=new C(l,c,u).normalize().multiplyScalar(n*Math.sqrt(r*i/a.radius));return{...wt(t),position:o,speed:h}}).concat(Rt(i))},sg=({number:s,range:e,mass:t,speed:n,blackHoleMass:i,gravitationalConstant:r})=>{let a=new Lt;return e*=.5,new Array(s).fill().map(()=>{a.radius=e*Math.cbrt(Math.random()),a.theta=Math.random()*2*Math.PI,a.phi=Math.acos(2*Math.random()-1);let o=new C().setFromSpherical(a),l=new C(n*Math.cos(a.theta),0,-n*Math.sin(a.theta)).normalize().multiplyScalar(Math.sqrt(r*i/a.radius));return{...wt(t),position:o,speed:l}}).concat(Rt(i))},ag=({number:s,range:e,mass:t,speed:n,blackHoleMass:i})=>{let r=new Lt;return e*=.5,new Array(s).fill().map(()=>{r.radius=e*Math.cbrt(Math.random()),r.theta=Math.random()*2*Math.PI,r.phi=Math.acos(2*Math.random()-1);let a=new C().setFromSpherical(r),o=a.clone().normalize().multiplyScalar(Math.random()*n);return{...wt(t),position:a,speed:o}}).concat(Rt(i))},Ga=({number:s,range:e,mass:t,speed:n,blackHoleMass:i,gravitationalConstant:r,dimensions:a})=>{let o=new Lt;e*=.5;let l=e/12;if(a===4)return new Array(s).fill().map(()=>{let c=l+(e-l)*Math.random(),u=Math.random()*2*Math.PI,h=Math.random()*2*Math.PI,d=new Be(c*Math.cos(u),c*Math.sin(h),c*Math.cos(h),c*Math.sin(u)),m=new Be(Math.sin(u),-Math.cos(h),Math.sin(h),-Math.cos(u)).normalize().multiplyScalar(n*Math.sqrt(r*i)/c);return{...wt(t),position:d,speed:m}}).concat(Rt(i));if(a===3)return new Array(s).fill().map(()=>{o.radius=l+(e-l)*Math.random(),o.theta=Math.random()*2*Math.PI,o.phi=Math.PI/2;let c=new C().setFromSpherical(o),u=new C(Math.cos(o.theta),0,-Math.sin(o.theta)).normalize().multiplyScalar(n*Math.sqrt(r*i/o.radius));return{...wt(t),position:c,speed:u}}).concat(Rt(i));if(a===2)return new Array(s).fill().map(()=>{let c=l+(e-l)*Math.random(),u=Math.random()*2*Math.PI,h=new pe(c*Math.cos(u),c*Math.sin(u)),d=new pe(Math.sin(u),-Math.cos(u)).normalize().multiplyScalar(n*Math.sqrt(r*i));return{...wt(t),position:h,speed:d}}).concat(Rt(i))},Wa=({number:s,range:e,mass:t,speed:n,blackHoleMass:i,gravitationalConstant:r})=>{let a=new Lt;return e*=.5,new Array(s).fill().map(()=>{a.radius=e*Math.random(),a.theta=Math.random()*2*Math.PI,a.phi=Math.PI/2*(1+Math.pow(1-a.radius/e,3)*2*(.5-Math.random())),a.radius+=Math.abs(Math.cos(a.phi))*e/8;let o=new C().setFromSpherical(a),l=new C(Math.cos(a.theta),0,-Math.sin(a.theta)).normalize().multiplyScalar(n*Math.sqrt(r*i/a.radius));return{...wt(t),position:o,speed:l}}).concat(Rt(i))},og=({gravitationalConstant:s})=>{let e=new Lt;e.theta=Math.PI/2;let t={temperature:ls(1,1,0),mass:1989e3,position:new C,speed:new C},n=(w,D,L)=>(e.radius=D,e.phi=Math.random()*2*Math.PI,{temperature:ls(...L),mass:w,position:new C().setFromSpherical(e),speed:new C(-Math.cos(e.phi),Math.sin(e.phi),0).normalize().multiplyScalar(Math.sqrt(s*t.mass/e.radius))}),i=n(.3285,57.909,[.8,.8,.8]),r=n(4.867,108.16,[.8,.8,0]),a=n(5.972,149.6,[.15,.25,1]),o=n(.639,227.99,[1,.5,.25]),l=n(1898,778.36,[1,.65,.46]),c=n(568.3,1433.5,[.55,.54,.4]),u=n(86.81,2872.4,[0,1,1]),h=n(102.4,4498.4,[0,0,1]),d=(w,D,L,x)=>(e.radius=D,e.phi=Math.random()*2*Math.PI,{temperature:ls(...L),mass:w,position:new C().setFromSpherical(e).add(x.position),speed:new C(-Math.cos(e.phi),Math.sin(e.phi),0).normalize().multiplyScalar(Math.sqrt(s*x.mass/e.radius)).add(x.speed)}),m=d(.07342,.3844,[.9,.9,.9],a),g=d(.089319,.4218,[.9,.9,.9],l),p=d(.048,.6711,[.9,.9,.9],l),f=d(.14819,1.0704,[.9,.9,.9],l),_=d(.10759,1.8827,[.9,.9,.9],l),E=d(.13452,1.22183,[.9,.9,.9],c),T=d(.002306,.52704,[.9,.9,.9],c),S=d(.001805,3.5613,[.9,.9,.9],c);return[t,i,r,a,m,o,l,g,p,f,_,c,E,T,S,u,h]},lg=({number:s,range:e,mass:t,speed:n,blackHoleMass:i,gravitationalConstant:r,dimensions:a})=>{let o=~~(s/2),l=new C(e*.15,e*.15,-e*.25),c=new zt(Math.PI/4,0,0),u=new C(-n,-n,0),h=Ga({number:o,range:e/3,mass:t,speed:1,blackHoleMass:i,gravitationalConstant:r,dimensions:a});h.forEach(({position:f,speed:_})=>{f.applyEuler(c).add(l),_.applyEuler(c).add(u)});let d=new C(-e*.15,-e*.15,e*.25),m=new zt(-Math.PI/8,0,0),g=new C(n,0,0),p=Ga({number:o,range:e/2,mass:t,speed:1,blackHoleMass:i,gravitationalConstant:r,dimensions:a});return p.forEach(({position:f,speed:_})=>{f.applyEuler(m).add(d),_.applyEuler(m).add(g)}),[...h,...p]},cg=({number:s,range:e,mass:t,speed:n,blackHoleMass:i,gravitationalConstant:r})=>{let a=~~(s/2),o=new C(e*.15,e*.15,-e*.25),l=new zt(Math.PI/4,0,0),c=new C(-n,-n,0),u=Wa({number:a,range:e/3,mass:t,speed:1,blackHoleMass:i,gravitationalConstant:r});u.forEach(({position:p,speed:f})=>{p.applyEuler(l).add(o),f.applyEuler(l).add(c)});let h=new C(-e*.15,-e*.15,e*.25),d=new zt(-Math.PI/8,0,0),m=new C(n,0,0),g=Wa({number:a,range:e/2,mass:t,speed:1,blackHoleMass:i,gravitationalConstant:r});return g.forEach(({position:p,speed:f})=>{p.applyEuler(d).add(h),f.applyEuler(d).add(m)}),[...u,...g]},hg=({number:s,range:e,mass:t,speed:n,blackHoleMass:i})=>{let r=new Lt;return e*=.5,new Array(s).fill().map(()=>{r.radius=e/10+Math.random()*e,r.theta=Math.random()*2*Math.PI,r.phi=Math.PI-Math.random()*Math.PI/12;let a=new C().setFromSpherical(r);return{...wt(t),position:a,speed:new C(0,n*Math.random(),0)}}).concat(Rt(i))},ug=({number:s,range:e,mass:t,speed:n,blackHoleMass:i})=>{let r=8;e*=.333;let a=new Array(s).fill().map(()=>({...wt(t),position:new C(e/2-Math.random()*e,e/2-Math.random()*e,e/2-Math.random()*e),speed:new C(n/2-Math.random()*n,n/2-Math.random()*n,n/2-Math.random()*n)})),o=new Array(r).fill().map((c,u)=>a.slice(~~(u*s/r),~~((u+1)*s/r))),l=new Array(r).fill().map((c,u)=>new C(...u.toString(2).padStart(3,"0").split("").map(h=>h==="0"?-1:1)).multiplyScalar(e));return o.forEach((c,u)=>{c.forEach(h=>{h.position.add(l[u])})}),i&&a.push({temperature:0,mass:i,position:new C,speed:new C}),a},dg=({number:s,range:e,mass:t,blackHoleMass:n})=>(e*=.25,new Array(s).fill().map(()=>({...wt(t),position:new C(e/2-Math.random()*e,e,e/2-Math.random()*e),speed:new C})).concat(Rt(n))),fg=({number:s,range:e,mass:t})=>new Array(s).fill().map(()=>({...wt(t),position:new pe(e/2-Math.random()*e,e/2-Math.random()*e),speed:new C})),pg=({number:s,range:e,mass:t,blackHoleMass:n})=>{let i=~~(Math.sqrt(s/32)-1),a=new Va(~~(e/5),i).attributes.position;return new Array(a.count).fill().map((o,l)=>({...wt(t),position:new C(a.getX(l),a.getY(l),a.getZ(l)),speed:new C})).concat(Rt(n))},mg=({number:s,range:e,speed:t,mass:n,blackHoleMass:i})=>new Array(s).fill().map(()=>({...wt(n),position:new Be(e/2-Math.random()*e,e/2-Math.random()*e,e/2-Math.random()*e,e/2-Math.random()*e),speed:new Be(t/2-Math.random()*t,t/2-Math.random()*t,t/2-Math.random()*t,t/2-Math.random()*t)})).concat(Rt(i));var Mc=`varying float blackHole;
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
}`;var Sc=`attribute float mass;
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
`;var us={preset:"Cube",remembered:{Cube:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!0,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"cube",number:3e3,range:1e3,speed:5,mass:10,blackHoleMass:0,scale:35,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.5,softening:10,collisions:!0,collisionThreshold:25,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},Tesseract:{0:{dimensions:4,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:3,zw:4,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"tesseract",number:3e3,range:1500,speed:0,mass:10,blackHoleMass:0,scale:40,colorMode:"Temperature",gravitationalConstant:100,softening:100,simulationSpeed:2,collisions:!0,collisionThreshold:25,escapeDistance:1e5,blackHoleMassThreshold:1e4,creationMode:!1}},FrozenTesseract:{0:{dimensions:4,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:6,zw:7,backend:"rust_none",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"tesseract",number:5e3,range:1e3,speed:0,mass:10,blackHoleMass:0,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,softening:30,simulationSpeed:0,collisions:!1,collisionThreshold:25,escapeDistance:1e5,blackHoleMassThreshold:1e4,creationMode:!1}},Wall:{0:{dimensions:2,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:6,zw:7,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!0,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"plane2",number:1e4,range:3e3,speed:0,mass:10,blackHoleMass:0,scale:20,colorMode:"Temperature",gravitationalConstant:1,softening:35,simulationSpeed:.5,collisions:!1,collisionThreshold:25,escapeDistance:1e5,blackHoleMassThreshold:1e4,creationMode:!1}},RegularCube:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_p2p",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!0,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"regularCube",number:1250,range:1e3,speed:0,mass:1,blackHoleMass:0,scale:50,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.5,softening:10,collisions:!1,collisionThreshold:25,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},Galaxy:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"disc",number:2e3,range:1500,speed:1,mass:10,blackHoleMass:1e5,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.5,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:1e3,blackHoleMassThreshold:1e4,creationMode:!1}},DualGalaxy:{0:{dimensions:4,zFov:45,wFov:45,w:1500,xy:2,xz:3,xw:5,yz:2.5,yw:1.5,zw:3.5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"disc",number:4e3,range:1e3,speed:1,mass:10,blackHoleMass:1e5,scale:28,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:5e3,blackHoleMassThreshold:1e4,creationMode:!1}},BulbGalaxy:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"bulb",number:2e3,range:1500,speed:1,mass:10,blackHoleMass:1e5,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:10,collisions:!0,collisionThreshold:2,escapeDistance:800,blackHoleMassThreshold:1e4,creationMode:!1}},SlowGalaxy:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"disc",number:2e3,range:1500,speed:.75,mass:10,blackHoleMass:1e5,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:10,collisions:!1,collisionThreshold:2,escapeDistance:1e3,blackHoleMassThreshold:1e4,creationMode:!1}},Sphere:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"sphere",number:4e3,range:1500,speed:1,mass:10,blackHoleMass:5e5,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.1,softening:50,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:5e5,creationMode:!1}},HarmonicSphere:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"harmonicSphere",number:5e3,range:1500,speed:15,mass:10,blackHoleMass:5e5,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.2,softening:50,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:5e5,creationMode:!1}},ProtoSolarSystem:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_p2p",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!1,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!0,afterImageDamp:.98,configuration:"solarSystem",number:1e3,range:1e3,speed:15,mass:10,blackHoleMass:0,scale:3,colorMode:"ColorCoded",gravitationalConstant:6.67,simulationSpeed:.001,softening:0,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:2e6,creationMode:!1}},CollidingGalaxies:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:2,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"collidingDisc",number:4e3,range:3e3,speed:10,mass:10,blackHoleMass:5e5,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.075,softening:10,collisions:!0,collisionThreshold:3,escapeDistance:2e3,blackHoleMassThreshold:5e5,creationMode:!1}},CollidingGalaxiesBulb:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:2,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"collidingBulb",number:8e3,range:3e3,speed:10,mass:10,blackHoleMass:5e5,scale:20,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.05,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:5e5,creationMode:!1}},Fountain:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_p2p",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"fountain",number:1e3,range:2e3,speed:5,mass:20,blackHoleMass:1e5,scale:15,colorMode:"Rainbow",gravitationalConstant:6.67,simulationSpeed:.05,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},EightCubes:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_p2p",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!0,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"eightCubes",number:1e3,range:1e3,speed:5,mass:10,blackHoleMass:0,scale:50,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.5,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:2500,creationMode:!1}},Plane:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_p2p",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:2,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"plane",number:1250,range:3e3,speed:15,mass:10,blackHoleMass:5e5,scale:15,colorMode:"White",gravitationalConstant:6.67,simulationSpeed:.1,softening:100,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:5e5,creationMode:!1}},Teapot:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_p2p",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!0,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"teapot",number:2e3,range:2500,speed:15,mass:10,blackHoleMass:0,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:50,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},TeapotWithBlackHole:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_p2p",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!0,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"teapot",number:2e3,range:2500,speed:15,mass:10,blackHoleMass:25e3,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:50,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},Ekusupuroshon:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"js_none",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"expandingSphere",number:5e4,range:10,speed:100,mass:10,blackHoleMass:0,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},Ekusupuroshon2:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"js_none",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!0,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"expandingSphere",number:1e6,range:10,speed:50,mass:10,blackHoleMass:0,scale:5,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},LittleExpand:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"expandingSphere",number:3e3,range:10,speed:40,mass:10,blackHoleMass:0,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},BigSphere:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:2,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"sphere",number:2e4,range:2e3,speed:0,mass:10,blackHoleMass:0,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:1,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}}},closed:!1,folders:{"Render fx":{preset:"Default",closed:!0,folders:{}},Configuration:{preset:"Default",closed:!1,folders:{}},Simulation:{preset:"Default",closed:!1,folders:{}}}};var mr={};oo(mr,{MODE:()=>gg,NODE_ENV:()=>_g,SSR:()=>vg});var gg="production",_g="production",vg=!1;import.meta.env=mr;var ie,Ec=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Ec.decode();var ds;function fs(){return ds.byteLength===0&&(ds=new Uint8Array(ie.memory.buffer)),ds}function ja(s,e){return Ec.decode(fs().subarray(s,s+e))}var Je=new Array(32).fill(void 0);Je.push(void 0,null,!0,!1);var Oi=Je.length;function ii(s){Oi===Je.length&&Je.push(Je.length+1);let e=Oi;if(Oi=Je[e],typeof Oi!="number")throw new Error("corrupt heap");return Je[e]=s,e}function gr(s){return Je[s]}function xg(s){s<36||(Je[s]=Oi,Oi=s)}function dt(s){let e=gr(s);return xg(s),e}var ps=0,ms=new TextEncoder("utf-8"),bg=typeof ms.encodeInto=="function"?function(s,e){return ms.encodeInto(s,e)}:function(s,e){let t=ms.encode(s);return e.set(t),{read:s.length,written:t.length}};function Tc(s,e,t){if(typeof s!="string")throw new Error("expected a string argument");if(t===void 0){let o=ms.encode(s),l=e(o.length);return fs().subarray(l,l+o.length).set(o),ps=o.length,l}let n=s.length,i=e(n),r=fs(),a=0;for(;a<n;a++){let o=s.charCodeAt(a);if(o>127)break;r[i+a]=o}if(a!==n){a!==0&&(s=s.slice(a)),i=t(i,n,n=a+s.length*3);let o=fs().subarray(i+a,i+n),l=bg(s,o);if(l.read!==s.length)throw new Error("failed to pass whole string");a+=l.written}return ps=a,i}var gs;function Le(){return gs.byteLength===0&&(gs=new Int32Array(ie.memory.buffer)),gs}function Cc(){let s=ie.wasm_memory();return dt(s)}var Mt=32;function kt(s){if(Mt==1)throw new Error("out of js stack");return Je[--Mt]=s,Mt}function Se(s){if(typeof s!="number")throw new Error("expected a number argument")}function _r(s,e){try{return s.apply(this,e)}catch(t){let n=function(){try{return t instanceof Error?`${t.message}

Stack:
${t.stack}`:t.toString()}catch(i){return"<failed to stringify thrown value>"}}();throw console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:",n),t}}var Ui=class{static __wrap(e){let t=Object.create(Ui.prototype);return t.ptr=e,t}__destroy_into_raw(){let e=this.ptr;return this.ptr=0,e}free(){let e=this.__destroy_into_raw();ie.__wbg_barneshutrustgravity_free(e)}constructor(e,t,n){try{let o=ie.__wbindgen_add_to_stack_pointer(-16);Se(n),ie.barneshutrustgravity_new(o,kt(e),kt(t),n);var i=Le()[o/4+0],r=Le()[o/4+1],a=Le()[o/4+2];if(a)throw dt(r);return Ui.__wrap(i)}finally{ie.__wbindgen_add_to_stack_pointer(16),Je[Mt++]=void 0,Je[Mt++]=void 0}}xyz_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");return Se(this.ptr),ie.barneshutrustgravity_xyz_ptr(this.ptr)}speeds_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");return Se(this.ptr),ie.barneshutrustgravity_speeds_ptr(this.ptr)}masses_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");return Se(this.ptr),ie.barneshutrustgravity_masses_ptr(this.ptr)}temperatures_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");return Se(this.ptr),ie.barneshutrustgravity_temperatures_ptr(this.ptr)}frog_leap(){if(this.ptr==0)throw new Error("Attempt to use a moved value");Se(this.ptr),ie.barneshutrustgravity_frog_leap(this.ptr)}simulate(){if(this.ptr==0)throw new Error("Attempt to use a moved value");return Se(this.ptr),ie.barneshutrustgravity_simulate(this.ptr)>>>0}frog_drop(){if(this.ptr==0)throw new Error("Attempt to use a moved value");Se(this.ptr),ie.barneshutrustgravity_frog_drop(this.ptr)}grow(e){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");let i=ie.__wbindgen_add_to_stack_pointer(-16);Se(this.ptr),ie.barneshutrustgravity_grow(i,this.ptr,kt(e));var t=Le()[i/4+0],n=Le()[i/4+1];if(n)throw dt(t)}finally{ie.__wbindgen_add_to_stack_pointer(16),Je[Mt++]=void 0}}shrink(e){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");let i=ie.__wbindgen_add_to_stack_pointer(-16);Se(this.ptr),Se(e),ie.barneshutrustgravity_shrink(i,this.ptr,e);var t=Le()[i/4+0],n=Le()[i/4+1];if(n)throw dt(t)}finally{ie.__wbindgen_add_to_stack_pointer(16)}}set_orb(e,t){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");let r=ie.__wbindgen_add_to_stack_pointer(-16);Se(this.ptr),Se(e),ie.barneshutrustgravity_set_orb(r,this.ptr,e,ii(t));var n=Le()[r/4+0],i=Le()[r/4+1];if(i)throw dt(n)}finally{ie.__wbindgen_add_to_stack_pointer(16)}}project(){if(this.ptr==0)throw new Error("Attempt to use a moved value");Se(this.ptr),ie.barneshutrustgravity_project(this.ptr)}params_change(e){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");let i=ie.__wbindgen_add_to_stack_pointer(-16);Se(this.ptr),ie.barneshutrustgravity_params_change(i,this.ptr,kt(e));var t=Le()[i/4+0],n=Le()[i/4+1];if(n)throw dt(t)}finally{ie.__wbindgen_add_to_stack_pointer(16),Je[Mt++]=void 0}}},ki=class{static __wrap(e){let t=Object.create(ki.prototype);return t.ptr=e,t}__destroy_into_raw(){let e=this.ptr;return this.ptr=0,e}free(){let e=this.__destroy_into_raw();ie.__wbg_norustgravity_free(e)}constructor(e,t,n){try{let o=ie.__wbindgen_add_to_stack_pointer(-16);Se(n),ie.norustgravity_new(o,kt(e),kt(t),n);var i=Le()[o/4+0],r=Le()[o/4+1],a=Le()[o/4+2];if(a)throw dt(r);return ki.__wrap(i)}finally{ie.__wbindgen_add_to_stack_pointer(16),Je[Mt++]=void 0,Je[Mt++]=void 0}}xyz_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");return Se(this.ptr),ie.barneshutrustgravity_xyz_ptr(this.ptr)}masses_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");return Se(this.ptr),ie.barneshutrustgravity_masses_ptr(this.ptr)}temperatures_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");return Se(this.ptr),ie.barneshutrustgravity_temperatures_ptr(this.ptr)}frog_leap(){if(this.ptr==0)throw new Error("Attempt to use a moved value");Se(this.ptr),ie.norustgravity_frog_leap(this.ptr)}simulate(){if(this.ptr==0)throw new Error("Attempt to use a moved value");return Se(this.ptr),ie.norustgravity_simulate(this.ptr)>>>0}frog_drop(){if(this.ptr==0)throw new Error("Attempt to use a moved value");Se(this.ptr),ie.norustgravity_frog_drop(this.ptr)}grow(e){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");let i=ie.__wbindgen_add_to_stack_pointer(-16);Se(this.ptr),ie.norustgravity_grow(i,this.ptr,kt(e));var t=Le()[i/4+0],n=Le()[i/4+1];if(n)throw dt(t)}finally{ie.__wbindgen_add_to_stack_pointer(16),Je[Mt++]=void 0}}shrink(e){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");let i=ie.__wbindgen_add_to_stack_pointer(-16);Se(this.ptr),Se(e),ie.norustgravity_shrink(i,this.ptr,e);var t=Le()[i/4+0],n=Le()[i/4+1];if(n)throw dt(t)}finally{ie.__wbindgen_add_to_stack_pointer(16)}}set_orb(e,t){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");let r=ie.__wbindgen_add_to_stack_pointer(-16);Se(this.ptr),Se(e),ie.norustgravity_set_orb(r,this.ptr,e,ii(t));var n=Le()[r/4+0],i=Le()[r/4+1];if(i)throw dt(n)}finally{ie.__wbindgen_add_to_stack_pointer(16)}}project(){if(this.ptr==0)throw new Error("Attempt to use a moved value");Se(this.ptr),ie.norustgravity_project(this.ptr)}params_change(e){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");let i=ie.__wbindgen_add_to_stack_pointer(-16);Se(this.ptr),ie.norustgravity_params_change(i,this.ptr,kt(e));var t=Le()[i/4+0],n=Le()[i/4+1];if(n)throw dt(t)}finally{ie.__wbindgen_add_to_stack_pointer(16),Je[Mt++]=void 0}}},Bi=class{static __wrap(e){let t=Object.create(Bi.prototype);return t.ptr=e,t}__destroy_into_raw(){let e=this.ptr;return this.ptr=0,e}free(){let e=this.__destroy_into_raw();ie.__wbg_p2prustgravity_free(e)}constructor(e,t,n){try{let o=ie.__wbindgen_add_to_stack_pointer(-16);Se(n),ie.p2prustgravity_new(o,kt(e),kt(t),n);var i=Le()[o/4+0],r=Le()[o/4+1],a=Le()[o/4+2];if(a)throw dt(r);return Bi.__wrap(i)}finally{ie.__wbindgen_add_to_stack_pointer(16),Je[Mt++]=void 0,Je[Mt++]=void 0}}xyz_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");return Se(this.ptr),ie.barneshutrustgravity_xyz_ptr(this.ptr)}masses_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");return Se(this.ptr),ie.barneshutrustgravity_masses_ptr(this.ptr)}temperatures_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");return Se(this.ptr),ie.barneshutrustgravity_temperatures_ptr(this.ptr)}frog_leap(){if(this.ptr==0)throw new Error("Attempt to use a moved value");Se(this.ptr),ie.p2prustgravity_frog_leap(this.ptr)}simulate(){if(this.ptr==0)throw new Error("Attempt to use a moved value");return Se(this.ptr),ie.p2prustgravity_simulate(this.ptr)>>>0}frog_drop(){if(this.ptr==0)throw new Error("Attempt to use a moved value");Se(this.ptr),ie.p2prustgravity_frog_drop(this.ptr)}grow(e){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");let i=ie.__wbindgen_add_to_stack_pointer(-16);Se(this.ptr),ie.p2prustgravity_grow(i,this.ptr,kt(e));var t=Le()[i/4+0],n=Le()[i/4+1];if(n)throw dt(t)}finally{ie.__wbindgen_add_to_stack_pointer(16),Je[Mt++]=void 0}}shrink(e){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");let i=ie.__wbindgen_add_to_stack_pointer(-16);Se(this.ptr),Se(e),ie.p2prustgravity_shrink(i,this.ptr,e);var t=Le()[i/4+0],n=Le()[i/4+1];if(n)throw dt(t)}finally{ie.__wbindgen_add_to_stack_pointer(16)}}set_orb(e,t){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");let r=ie.__wbindgen_add_to_stack_pointer(-16);Se(this.ptr),Se(e),ie.p2prustgravity_set_orb(r,this.ptr,e,ii(t));var n=Le()[r/4+0],i=Le()[r/4+1];if(i)throw dt(n)}finally{ie.__wbindgen_add_to_stack_pointer(16)}}project(){if(this.ptr==0)throw new Error("Attempt to use a moved value");Se(this.ptr),ie.p2prustgravity_project(this.ptr)}params_change(e){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");let i=ie.__wbindgen_add_to_stack_pointer(-16);Se(this.ptr),ie.p2prustgravity_params_change(i,this.ptr,kt(e));var t=Le()[i/4+0],n=Le()[i/4+1];if(n)throw dt(t)}finally{ie.__wbindgen_add_to_stack_pointer(16),Je[Mt++]=void 0}}};async function yg(s,e){if(typeof Response=="function"&&s instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(s,e)}catch(n){if(s.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n);else throw n}let t=await s.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{let t=await WebAssembly.instantiate(s,e);return t instanceof WebAssembly.Instance?{instance:t,module:s}:t}}function wg(){let s={};return s.wbg={},s.wbg.__wbindgen_string_new=function(e,t){let n=ja(e,t);return ii(n)},s.wbg.__wbindgen_object_drop_ref=function(e){dt(e)},s.wbg.__wbindgen_json_serialize=function(e,t){let n=gr(t),i=JSON.stringify(n===void 0?null:n),r=Tc(i,ie.__wbindgen_malloc,ie.__wbindgen_realloc),a=ps;Le()[e/4+1]=a,Le()[e/4+0]=r},s.wbg.__wbindgen_memory=function(){let e=ie.memory;return ii(e)},s.wbg.__wbg_length_93debb0e2e184ab6=function(){return _r(function(e){let t=gr(e).length;return Se(t),t},arguments)},s.wbg.__wbg_get_f0f4f1608ebf633e=function(){return _r(function(e,t){let n=gr(e)[t>>>0];return ii(n)},arguments)},s.wbg.__wbg_new_693216e109162396=function(){return _r(function(){let e=new Error;return ii(e)},arguments)},s.wbg.__wbg_stack_0ddaca5d1abfb52f=function(){return _r(function(e,t){let n=gr(t).stack,i=Tc(n,ie.__wbindgen_malloc,ie.__wbindgen_realloc),r=ps;Le()[e/4+1]=r,Le()[e/4+0]=i},arguments)},s.wbg.__wbg_error_09919627ac0992f5=function(){return _r(function(e,t){try{console.error(ja(e,t))}finally{ie.__wbindgen_free(e,t)}},arguments)},s.wbg.__wbindgen_throw=function(e,t){throw new Error(ja(e,t))},s}function Mg(s,e){}function Sg(s,e){return ie=s.exports,Ac.__wbindgen_wasm_module=e,gs=new Int32Array(ie.memory.buffer),ds=new Uint8Array(ie.memory.buffer),ie}async function Ac(s){typeof s=="undefined"&&(s=new URL("index_bg.wasm",import.meta.url));let e=wg();(typeof s=="string"||typeof Request=="function"&&s instanceof Request||typeof URL=="function"&&s instanceof URL)&&(s=fetch(s)),Mg(e);let{instance:t,module:n}=await yg(await s,e);return Sg(t,n)}var Pc=Ac;var Eg=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Cg(s,e,t){return t={path:e,exports:{},require:function(n,i){return Tg(n,i??t.path)}},s(t,t.exports),t.exports}function Tg(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var Ag=Cg(function(s,e){(function(t,n){s.exports=n()})(Eg,function(){var t=function(){function n(m){return a.appendChild(m.dom),m}function i(m){for(var g=0;g<a.children.length;g++)a.children[g].style.display=g===m?"block":"none";r=m}var r=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(m){m.preventDefault(),i(++r%a.children.length)},!1);var o=(performance||Date).now(),l=o,c=0,u=n(new t.Panel("FPS","#0ff","#002")),h=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:a,addPanel:n,showPanel:i,begin:function(){o=(performance||Date).now()},end:function(){c++;var m=(performance||Date).now();if(h.update(m-o,200),m>l+1e3&&(u.update(1e3*c/(m-l),100),l=m,c=0,d)){var g=performance.memory;d.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return m},update:function(){o=this.end()},domElement:a,setMode:i}};return t.Panel=function(n,i,r){var a=Infinity,o=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,h=48*c,d=3*c,m=2*c,g=3*c,p=15*c,f=74*c,_=30*c,E=document.createElement("canvas");E.width=u,E.height=h,E.style.cssText="width:80px;height:48px";var T=E.getContext("2d");return T.font="bold "+9*c+"px Helvetica,Arial,sans-serif",T.textBaseline="top",T.fillStyle=r,T.fillRect(0,0,u,h),T.fillStyle=i,T.fillText(n,d,m),T.fillRect(g,p,f,_),T.fillStyle=r,T.globalAlpha=.9,T.fillRect(g,p,f,_),{dom:E,update:function(S,w){a=Math.min(a,S),o=Math.max(o,S),T.fillStyle=r,T.globalAlpha=1,T.fillRect(0,0,u,p),T.fillStyle=i,T.fillText(l(S)+" "+n+" ("+l(a)+"-"+l(o)+")",d,m),T.drawImage(E,g+c,p,f-c,_,g,p,f-c,_),T.fillRect(g+f-c,p,c,_),T.fillStyle=r,T.globalAlpha=.9,T.fillRect(g+f-c,p,c,l((1-S/w)*_))}}},t})}),Dc=Ag;var Hi=({colors:s})=>({cell:e})=>s[(e||0)%s.length],Lc=`
uniform float size;
attribute vec3 color;
varying vec3 vColor;

void main() {
  vColor = color;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

  gl_PointSize = size * (10.0 / - mvPosition.z);

  gl_Position = projectionMatrix * mvPosition;
}
`,Rc=`
uniform float opacity;
varying vec3 vColor;

void main() {
  if (length(gl_PointCoord - vec2( 0.5, 0.5 )) > 0.475) discard;

  gl_FragColor = vec4(vColor, opacity);
}
`,Vi=new Array(128).fill().map((s,e)=>`hsl(${e*29%360}, 60%, 60%)`),I0={faces:{enabled:!0,useColors:!0,colorGenerator:Hi,colors:Vi,reuse:"none",split:"cells",splitScale:100,material:new as({transparent:!0,opacity:.25,blending:wn,depthWrite:!1,side:an,vertexColors:!0})},edges:{enabled:!0,useColors:!0,colorGenerator:Hi,colors:Vi,reuse:"faces",split:"cells",splitScale:100,material:new ns({transparent:!0,opacity:.25,blending:on,depthWrite:!1,vertexColors:!0,linewidth:2})},points:{enabled:!1,useColors:!0,colorGenerator:Hi,colors:Vi,reuse:"faces",split:"none",splitScale:100,material:new Ye({uniforms:{size:{value:5},opacity:{value:.25}},vertexShader:Lc,fragmentShader:Rc,transparent:!0,blending:on})}},Xa=class{constructor(e,t,n){this.fov=e||Math.PI/2,this.w=t||10,this.wt=0,this.wSlice=0,this.rotation=n||{xy:0,xz:0,xw:0,yz:0,yw:0,zw:0}}_directProject([e,t,n,i]){let r=1+i*this.fov/this.w;return[e/r,t/r,n/r]}project([e,t,n,i]){return this._directProject(this.rotatePoint([e,t,n,i]))}_directSlice([e,t,n,i],[r,a,o,l]){if((this.wSlice-i)*(this.wSlice-l)>=0)return;let c=(this.wSlice-i)/(l-i),u=e+c*(r-e),h=t+c*(a-t),d=n+c*(o-n);return[u,h,d]}slice(e,t){return this._directSlice(this.rotatePoint(e),this.rotatePoint(t))}shiftSlice(e,t,n){this.wt+=e/100;let i=(1+Math.cos(this.wt))*.5;this.wSlice=t+(n-t)*i}rotate(e){Object.keys(this.rotation).forEach(t=>{this.rotation[t]=(this.rotation[t]+(e[t]||0)/1e3)%(2*Math.PI)})}rotatePoint([e,t,n,i]){let{xy:r,xz:a,xw:o,yz:l,yw:c,zw:u}=this.rotation,h=Math.cos(r),d=Math.sin(r),m=Math.cos(a),g=Math.sin(a),p=Math.cos(o),f=Math.sin(o),_=Math.cos(l),E=Math.sin(l),T=Math.cos(c),S=Math.sin(c),w=Math.cos(u),D=Math.sin(u),L=e;return e=e*h+t*d,t=t*h-L*d,L=e,e=e*m+n*g,n=n*m-L*g,L=e,e=e*p+i*f,i=i*p-L*f,L=t,t=t*_+n*E,n=n*_-L*E,L=t,t=t*T+i*S,i=i*T-L*S,L=n,n=n*w+i*D,i=i*w-L*D,[e,t,n,i]}prepare(){}},F0={faces:{enabled:!0,useColors:!0,colorGenerator:Hi,colors:Vi,material:new as({side:an,shininess:50,vertexColors:!0})},edges:{enabled:!0,useColors:!0,colorGenerator:Hi,colors:Vi,material:new ns({transparent:!0,opacity:.25,blending:on,depthWrite:!1,vertexColors:!0,linewidth:2})},points:{enabled:!1,useColors:!0,colorGenerator:Hi,colors:Vi,material:new Ye({uniforms:{size:{value:5},opacity:{value:.25}},vertexShader:Lc,fragmentShader:Rc,transparent:!0,blending:on})}},Ic=(s,[e,t,n=16,i=!1,r=!0],[a,o,l=16,c=!1,u=!0])=>{let h=[],d=[],m=[];for(let g=0;g<l;g++){let p=[];for(let f=0;f<n;f++){h.push(s(e+f*(t-e)/(n-(i?1:0)),a+g*(o-a)/(l-(c?1:0))));let _=f+1<n?f+1:0,E=g+1<l?g+1:0;(r||f+1<n)&&(u||g+1<l)&&(d.push([f+g*n,_+g*n,_+E*n,f+E*n]),p.push(d.length-1))}p.length&&m.push(p)}return{vertices:h,faces:d,cells:m}},Fc=(s,e,t=32)=>Ic((n,i)=>[s*Math.cos(n),s*Math.sin(n),e*Math.cos(i),e*Math.sin(i)],[-Math.PI,Math.PI,t],[-Math.PI,Math.PI,t]),Pg=(s,e=32)=>Fc(s,s,e),N0=Fc(1,.5),z0=Pg(1),O0=Ic((s,e)=>[Math.cos(s)*Math.sin(e),Math.sin(s)*Math.sin(e),Math.cos(e)*Math.sin(s),Math.cos(e)*Math.cos(s)],[-Math.PI,Math.PI,32],[-Math.PI,Math.PI,32]),Zt=(s,[e,t,n=16,i=!1,r=!0],[a,o,l=16,c=!1,u=!0],[h,d,m=16,g=!1,p=!0],f={u:!0,v:!0,w:!0})=>{let _=[],E=[],T=[],S=[],w=[];for(let D=0;D<m;D++){let L=[];for(let x=0;x<l;x++){let P=w[x]||[];for(let I=0;I<n;I++){let z=S[I]||[];_.push(s(e+I*(t-e)/(n-(i?1:0)),a+x*(o-a)/(l-(c?1:0)),h+D*(d-h)/(m-(g?1:0))));let Q=I+1<n?I+1:0,ee=x+1<l?x+1:0,R=D+1<m?D+1:0;(r||I+1<n)&&(u||x+1<l)&&(E.push([I+x*n+D*n*l,Q+x*n+D*n*l,Q+ee*n+D*n*l,I+ee*n+D*n*l]),L.push(E.length-1)),(r||I+1<n)&&(p||D+1<m)&&(E.push([I+x*n+D*n*l,I+x*n+R*n*l,Q+x*n+R*n*l,Q+x*n+D*n*l]),P.push(E.length-1)),(u||x+1<l)&&(p||D+1<m)&&(E.push([I+x*n+D*n*l,I+x*n+R*n*l,I+ee*n+R*n*l,I+ee*n+D*n*l]),z.push(E.length-1)),S[I]=z}w[x]=P}f.w&&T.push(L)}return f.v&&w.map(D=>T.push(D)),f.u&&S.map(D=>T.push(D)),{vertices:_,faces:E,cells:T}},Dg=s=>Zt((e,t,n)=>[s*Math.cos(e),s*Math.sin(e)*Math.cos(t),s*Math.sin(e)*Math.sin(t)*Math.cos(n),s*Math.sin(e)*Math.sin(t)*Math.sin(n)],[0,Math.PI,16,!0],[0,2*Math.PI,16],[0,2*Math.PI,16]),U0=Dg(1),Lg=(s,e,t)=>Zt((n,i,r)=>[s*Math.cos(n),(e+s*Math.sin(n))*Math.cos(i),(t+(e+s*Math.sin(n))*Math.sin(i))*Math.cos(r),(t+(e+s*Math.sin(n))*Math.sin(i))*Math.sin(r)],[0,Math.PI,16,!0],[0,2*Math.PI,16],[0,2*Math.PI,16]),k0=Lg(.25,.5,1),B0=Zt((s,e,t)=>[2*Math.cos(s)*Math.cos(e),2*Math.cos(s)*Math.sin(e),2*Math.sin(s),t],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,5]),H0=Zt((s,e,t)=>[t+2*Math.cos(s)*Math.cos(e),t+2*Math.cos(s)*Math.sin(e),t+2*Math.sin(s),t],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,5]),V0=Zt((s,e,t)=>[Math.sin(s)*Math.cos(e),Math.sin(s)*Math.sin(e),Math.cos(s),t],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,2,!0],{u:!0,v:!1,w:!0}),G0=Zt((s,e,t)=>[(1+.5*Math.cos(s))*Math.cos(e),(1+.5*Math.cos(s))*Math.sin(e),.5*Math.cos(s),t],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,2,!0],{u:!0,v:!1,w:!0}),W0=Zt((s,e,t)=>[Math.cos(s),Math.sin(s),e,t],[-Math.PI,Math.PI,32,!0],[-1,1,2,!0],[-1,1,2,!0],{u:!1,v:!0,w:!0}),j0=Zt((s,e,t)=>[.25*Math.cos(s)+1*Math.cos(s)*Math.cos(t),.25*Math.sin(s)+1*Math.sin(s)*Math.cos(t),.75*Math.cos(e)+1*Math.cos(e)*Math.sin(t),.75*Math.sin(e)+1*Math.sin(e)*Math.sin(t)],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],{u:!0,v:!1,w:!0}),X0=Zt((s,e,t)=>[.5*Math.cos(s)*Math.cos(e)*Math.cos(t)+1*Math.cos(e)*Math.cos(t),.5*Math.cos(s)*Math.cos(e)*Math.sin(t)+1*Math.cos(e)*Math.sin(t),.5*Math.cos(s)*Math.sin(e)+1*Math.sin(e),.5*Math.sin(s)],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,16,!0]),q0=Zt((s,e,t)=>[.5*Math.cos(s)*Math.cos(e)*Math.cos(t)+1*Math.cos(t),.5*Math.cos(s)*Math.cos(e)*Math.sin(t)+1*Math.sin(t),.5*Math.cos(s)*Math.sin(e),.5*Math.sin(s)],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,16,!0]),Y0=Zt((s,e,t)=>[s,e,t,s*e*t],[-1,1,2,!0],[-1,1,2,!0],[-1,1,2,!0]);var qa=class{constructor(e,t,n){this.alive=!0,this.params=t,this.N=t.dimensions,this.vectorSuffix="xyzw",this.len=e.length,this.N>3&&(this.projector=new Xa(t.wFov*Math.PI/180,t.w)),this.xyz=new Float32Array(n*3),this.positions=this.N===3?this.xyz:new Float32Array(n*this.N),this.speeds=new Float32Array(this.N*n),this.accelerations=new Float32Array(this.N*n),this.masses=new Float32Array(n),this.temperatures=new Float32Array(n),e.forEach((i,r)=>this.set_orb(r,i))}params_change(e){this.projector&&(this.projector.fov=e.wFov*Math.PI/180,this.projector.w=e.w)}frog_leap(){let e=this.params.simulationSpeed,t=e*.5;for(let n=0,i=this.len;n<i;n++){let r=n*this.N;for(let a=0;a<this.N;a++)this.speeds[r+a]+=this.accelerations[r+a]*t,this.positions[r+a]+=this.speeds[r+a]*e}}aggregateCollisions(e){let t=[];for(let n=0,i=e.length;n<i;n++){let[r,a]=e[n],o=!0;for(let l=0,c=t.length;l<c;l++){let u=t[l],h=u.includes(r),d=u.includes(a);if((h||d)&&(o=!1),h!==d){let m=h?a:r;m>u[0]?u.push(m):u.unshift(m);break}}o&&t.push(r>a?[a,r]:[r,a])}return t}solveCollisions(e){for(let t=0,n=e.length;t<n;t++){let i=e[t],r=i[0],a=r*this.N;for(let o=1,l=i.length;o<l;o++){let c=i[o],u=c*this.N,h=1/(this.masses[r]+this.masses[c]);for(let d=0;d<this.N;d++)this.positions[a+d]=h*(this.positions[a+d]*this.masses[r]+this.positions[u+d]*this.masses[c]),this.speeds[a+d]=h*(this.speeds[a+d]*this.masses[r]+this.speeds[u+d]*this.masses[c]);this.temperatures[r]=h*(this.temperatures[r]*this.masses[r]+this.temperatures[c]*this.masses[c]),this.masses[r]+=this.masses[c]}}}solveEscapes(){let e=[],{escapeDistance:t}=this.params;if(!t)return e;let n=t*t;for(let i=0,r=this.len;i<r;i++){let a=i*this.N,o=0;for(let l=0;l<this.N;l++)o+=this.positions[a+l]*this.positions[a+l];o>n&&e.push(i)}return e}crunchOrbs(e){let t=0,n=0;for(;t+n<this.len;){if(e.includes(t+n)){n+=1;continue}if(n==0){t+=1;continue}let i=t*this.N,r=(t+n)*this.N;for(let a=0;a<this.N;a++)this.positions[i+a]=this.positions[r+a],this.speeds[i+a]=this.speeds[r+a],this.accelerations[i+a]=this.accelerations[r+a];this.temperatures[t]=this.temperatures[t+n],this.masses[t]=this.masses[t+n],t+=1}return this.len-n}solve(e){let t=this.solveEscapes();return e.length&&(e=this.aggregateCollisions(e),e.forEach(n=>{t.push(...n.slice(1))}),this.solveCollisions(e)),t.length&&(this.len=this.crunchOrbs(t)),this.len}async simulate(){return this.solve([])}frog_drop(){let t=this.params.simulationSpeed*.5;for(let n=0,i=this.len;n<i;n++){let r=n*this.N;for(let a=0;a<this.N;a++)this.speeds[r+a]+=this.accelerations[r+a]*t}this.projector&&this.projector.rotate(this.params)}set_orb(e,{position:t,mass:n,speed:i,temperature:r}){let a=e*this.N;for(let o=0;o<this.N;o++){let l=this.vectorSuffix[o];this.positions[a+o]=t[l]||0,this.speeds[a+o]=i[l]||0}this.masses[e]=n,this.temperatures[e]=r}grow(e){if(this.len+e.length>this.temperatures.length){console.warn("Can't grow");return}e.forEach((t,n)=>this.set_orb(this.len+n,t)),this.len+=e.length}shrink(e){if(this.len-e<0){console.warn("Can't shrink");return}this.len-=e}project(){if(this.N!==3){if(this.N===2)for(let e=0,t=this.len;e<t;e++){let n=e*2,i=n+e;this.xyz[i]=this.positions[n],this.xyz[i+1]=this.positions[n+1],this.xyz[i+2]=0}else if(this.N===4)for(let e=0,t=this.len;e<t;e++){let n=e*3,i=n+e,r=this.projector.project([this.positions[i],this.positions[i+1],this.positions[i+2],this.positions[i+3]]);this.xyz[n]=r[0],this.xyz[n+1]=r[1],this.xyz[n+2]=r[2]}}}free(){this.alive=!1,delete this.temperatures,delete this.masses,delete this.accelerations,delete this.speeds,delete this.positions,delete this.xyz}},zn=qa;var Ya=class extends zn{compute2(e,t,n,i,r,a,o,l,c,u){t[0]=this.positions[a]-this.positions[i],t[1]=this.positions[a+1]-this.positions[i+1];let h=t[0]*t[0]+t[1]*t[1];l&&h<c&&u.push([n,r]);let d=this.masses[r]/(h+o);e[0]+=t[0]*d,e[1]+=t[1]*d}compute3(e,t,n,i,r,a,o,l,c,u){t[0]=this.positions[a]-this.positions[i],t[1]=this.positions[a+1]-this.positions[i+1],t[2]=this.positions[a+2]-this.positions[i+2];let h=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],d=Math.sqrt(h+o);l&&h<c&&u.push([n,r]);let m=this.masses[r]/(d*d*d);e[0]+=t[0]*m,e[1]+=t[1]*m,e[2]+=t[2]*m}compute4(e,t,n,i,r,a,o,l,c,u){t[0]=this.positions[a]-this.positions[i],t[1]=this.positions[a+1]-this.positions[i+1],t[2]=this.positions[a+2]-this.positions[i+2],t[3]=this.positions[a+3]-this.positions[i+3];let h=t[0]*t[0]+t[1]*t[1]+t[2]*t[2]+t[3]*t[3];l&&h<c&&u.push([n,r]);let d=h+o,m=this.masses[r]/(d*d);e[0]+=t[0]*m,e[1]+=t[1]*m,e[2]+=t[2]*m,e[3]+=t[3]*m}compute(e,t,n,i,r,a,o,l,c){let u=this[`compute${n}`].bind(this),h=new Array(n).fill(0),d=new Array(n).fill(0);for(let m=e,g=t;m<g;m++){let p=m*n;d.fill(0);for(let f=0;f<i;f++){if(m===f)continue;let _=f*n;u(d,h,m,p,f,_,a,o,l,c)}for(let f=0;f<n;f++)this.accelerations[p+f]=d[f]*r}}async simulate(){let{gravitationalConstant:e,softening:t,collisions:n,collisionThreshold:i}=this.params,r=t*t,a=i*i,o=[];return this.compute(0,this.len,this.N,this.len,e,r,n,a,o),this.solve(o)}},Nc=Ya;var $a=class extends zn{frog_leap(){let e=this.params.simulationSpeed;for(let t=0,n=this.len;t<n;t++){let i=t*this.N;for(let r=0;r<this.N;r++)this.positions[i+r]+=this.speeds[i+r]*e}}simulate(){return this.len}frog_drop(){}},zc=$a;var _s=(s,...e)=>{class t extends s{constructor(...r){super(...r);e.forEach(a=>{n(this,new a(...r))})}}let n=(i,r)=>{Object.getOwnPropertyNames(r).concat(Object.getOwnPropertySymbols(r)).forEach(a=>{a.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/)||Object.defineProperty(i,a,Object.getOwnPropertyDescriptor(r,a))})};return e.forEach(i=>{n(t.prototype,i.prototype),n(t,i)}),t},On=(s,...e)=>new Promise(t=>{s.postMessage(...e),s.onmessage=n=>t(n.data)});import.meta.env=mr;var Za=class extends zn{constructor(e,t,n,i="p2p-thread"){super(e,t,n);this.initThreadPool(i)}initThreadPool(e){this.pool=new Array(~~this.params.threads).fill().map(()=>{let t=import.meta.url;return new Worker(new URL(`./worker/${e}.js`,t),{type:"module"})})}async simulate(){let{gravitationalConstant:e,softening:t,collisions:n,collisionThreshold:i}=this.params,r=[],a=t*t,o=i*i,l=~~(this.len/this.pool.length),c=await Promise.all(this.pool.map((u,h)=>On(u,[h*l,h==this.pool.length-1?this.len:(h+1)*l,this.len,this.N,e,a,n,o,this.accelerations.buffer,this.positions.buffer,this.masses.buffer])));if(!!this.alive)return c.forEach(([u,h,d,m])=>{let g=new Float32Array(u);for(let p=h;p<d;p++){let f=p*3;this.accelerations[f]=g[f],this.accelerations[f+1]=g[f+1],this.accelerations[f+2]=g[f+2]}r.push(...m)}),this.solve(r)}free(){super.free(),this.pool.forEach(e=>e.terminate())}},Gi=Za;var Ka=class extends Gi{constructor(e,t,n,i="p2p-thread-sab"){super(e,t,n,i);this.xyzBuffer=new SharedArrayBuffer(3*n*4),this.positionsBuffer=this.N===3?this.xyzBuffer:new SharedArrayBuffer(this.N*n*4),this.xyz=new Float32Array(this.xyzBuffer),this.positions=new Float32Array(this.positionsBuffer),this.speedsBuffer=new SharedArrayBuffer(this.N*n*4),this.speeds=new Float32Array(this.speedsBuffer),this.accelerationsBuffer=new SharedArrayBuffer(this.N*n*4),this.accelerations=new Float32Array(this.accelerationsBuffer),this.massesBuffer=new SharedArrayBuffer(n*4),this.masses=new Float32Array(this.massesBuffer),this.pool.forEach(r=>{r.postMessage([this.accelerationsBuffer,this.positionsBuffer,this.massesBuffer])}),e.forEach((r,a)=>this.set_orb(a,r))}async simulate(){let{gravitationalConstant:e,softening:t,collisions:n,collisionThreshold:i}=this.params,r=[],a=t*t,o=i*i,l=~~(this.len/this.pool.length),c=await Promise.all(this.pool.map((u,h)=>On(u,[h*l,h==this.pool.length-1?this.len:(h+1)*l,this.len,this.N,e,a,n,o])));if(!!this.alive)return c.forEach(([u])=>{r.push(...u)}),this.solve(r)}},vs=Ka;var Oc=[[0,0],[1,0],[1,1],[0,1]],Uc=[[0,0,0],[1,0,0],[1,0,1],[0,0,1],[0,1,0],[1,1,0],[1,1,1],[0,1,1]],kc=[[0,0,0,0],[1,0,0,0],[1,0,1,0],[0,0,1,0],[0,0,0,1],[1,0,0,1],[1,0,1,1],[0,0,1,1],[0,1,0,0],[1,1,0,0],[1,1,1,0],[0,1,1,0],[0,1,0,1],[1,1,0,1],[1,1,1,1],[0,1,1,1]],Qa=class extends zn{subdivide2(e){let t=e.size/2;e.leaf=!1,e.quadrants=Oc.map(([n,i])=>({x:e.x+n*t,y:e.y+i*t,size:t,index:null,mass:0,cx:0,cy:0,quadrants:null,leaf:!0}))}getSubCell2(e,t){let n=t*2,i=this.positions[n]>e.quadrants[2].x,r=this.positions[n+1]>e.quadrants[2].y;return e.quadrants[Oc.findIndex(([a,o])=>!!a==i&&!!o==r)]}addParticle2(e,t){if(e.index===null){e.index=t;return}this.subdivide2(e);let n=this.getSubCell2(e,e.index);n.index=e.index;let i=this.getSubCell2(e,t);if(n===i){let r=t*2,a=e.index*2;this.positions[a]===this.positions[r]&&this.positions[a+1]===this.positions[r+1]||this.addParticle2(n,t)}i.index=t}makeOctree2(e,t){let n={x:e,y:e,size:t,index:null,mass:0,cx:0,cy:0,quadrants:null,leaf:!0};for(let i=0;i<this.len;i++){let r=n;for(;!r.leaf;)r=this.getSubCell2(r,i);this.addParticle2(r,i)}return n}massDistribution2(e){if(e.leaf){let t=e.index*2;e.cx=this.positions[t],e.cy=this.positions[t+1],e.mass=this.masses[e.index]}else{for(let t=0,n=e.quadrants.length;t<n;t++){let i=e.quadrants[t];i.index!==null&&(this.massDistribution2(i),e.mass+=i.mass,e.cx+=i.cx*i.mass,e.cy+=i.cy*i.mass)}e.cx/=e.mass,e.cy/=e.mass}}compute2(e,t,n,i,r,a,o){if(e.leaf){if(e.index!==null&&e.index!==t){let l=t*2,c=e.index*2,u=this.positions[c]-this.positions[l],h=this.positions[c+1]-this.positions[l+1],d=u*u+h*h;r&&d<o&&a.push([t,e.index]);let m=this.masses[e.index]/(d+i);this.accelerations[l]+=m*u,this.accelerations[l+1]+=m*h}}else{let l=t*2,c=e.cx-this.positions[l],u=e.cy-this.positions[l+1],h=c*c+u*u;if(e.size*e.size<n*n*h){let m=e.mass/h;this.accelerations[l]+=m*c,this.accelerations[l+1]+=m*u}else for(let m=0,g=e.quadrants.length;m<g;m++)this.compute2(e.quadrants[m],t,n,i,r,a,o)}}subdivide3(e){let t=e.size/2;e.leaf=!1,e.octants=Uc.map(([n,i,r])=>({x:e.x+n*t,y:e.y+i*t,z:e.z+r*t,size:t,index:null,mass:0,cx:0,cy:0,cz:0,octants:null,leaf:!0}))}getSubCell3(e,t){let n=t*3,i=this.positions[n]>e.octants[6].x,r=this.positions[n+1]>e.octants[6].y,a=this.positions[n+2]>e.octants[6].z;return e.octants[Uc.findIndex(([o,l,c])=>!!o==i&&!!l==r&&!!c==a)]}addParticle3(e,t){if(e.index===null){e.index=t;return}this.subdivide3(e);let n=this.getSubCell3(e,e.index);n.index=e.index;let i=this.getSubCell3(e,t);if(n===i){let r=t*3,a=e.index*3;this.positions[a]===this.positions[r]&&this.positions[a+1]===this.positions[r+1]&&this.positions[a+2]===this.positions[r+2]||this.addParticle3(n,t)}i.index=t}makeOctree3(e,t){let n={x:e,y:e,z:e,size:t,index:null,mass:0,cx:0,cy:0,cz:0,octants:null,leaf:!0};for(let i=0;i<this.len;i++){let r=n;for(;!r.leaf;)r=this.getSubCell3(r,i);this.addParticle3(r,i)}return n}massDistribution3(e){if(e.leaf){let t=e.index*3;e.cx=this.positions[t],e.cy=this.positions[t+1],e.cz=this.positions[t+2],e.mass=this.masses[e.index]}else{for(let t=0,n=e.octants.length;t<n;t++){let i=e.octants[t];i.index!==null&&(this.massDistribution3(i),e.mass+=i.mass,e.cx+=i.cx*i.mass,e.cy+=i.cy*i.mass,e.cz+=i.cz*i.mass)}e.cx/=e.mass,e.cy/=e.mass,e.cz/=e.mass}}compute3(e,t,n,i,r,a,o){if(e.leaf){if(e.index!==null&&e.index!==t){let l=t*3,c=e.index*3,u=this.positions[c]-this.positions[l],h=this.positions[c+1]-this.positions[l+1],d=this.positions[c+2]-this.positions[l+2],m=u*u+h*h+d*d,g=Math.sqrt(m+i);r&&m<o&&a.push([t,e.index]);let p=this.masses[e.index]/(g*g*g);this.accelerations[l]+=p*u,this.accelerations[l+1]+=p*h,this.accelerations[l+2]+=p*d}}else{let l=t*3,c=e.cx-this.positions[l],u=e.cy-this.positions[l+1],h=e.cz-this.positions[l+2],d=Math.sqrt(c*c+u*u+h*h);if(e.size<n*d){let g=e.mass/(d*d*d);this.accelerations[l]+=g*c,this.accelerations[l+1]+=g*u,this.accelerations[l+2]+=g*h}else for(let g=0,p=e.octants.length;g<p;g++)this.compute3(e.octants[g],t,n,i,r,a,o)}}subdivide4(e){let t=e.size/2;e.leaf=!1,e.hexadecants=kc.map(([n,i,r,a])=>({x:e.x+n*t,y:e.y+i*t,z:e.z+r*t,w:e.w+a*t,size:t,index:null,mass:0,cx:0,cy:0,cz:0,cw:0,hexadecants:null,leaf:!0}))}getSubCell4(e,t){let n=t*4,i=this.positions[n]>e.hexadecants[14].x,r=this.positions[n+1]>e.hexadecants[14].y,a=this.positions[n+2]>e.hexadecants[14].z,o=this.positions[n+3]>e.hexadecants[14].w;return e.hexadecants[kc.findIndex(([l,c,u,h])=>!!l==i&&!!c==r&&!!u==a&&!!h==o)]}addParticle4(e,t){if(e.index===null){e.index=t;return}this.subdivide4(e);let n=this.getSubCell4(e,e.index);n.index=e.index;let i=this.getSubCell4(e,t);if(n===i){let r=t*4,a=e.index*4;this.positions[a]===this.positions[r]&&this.positions[a+1]===this.positions[r+1]&&this.positions[a+2]===this.positions[r+2]&&this.positions[a+3]===this.positions[r+3]||this.addParticle4(n,t)}i.index=t}makeOctree4(e,t){let n={x:e,y:e,z:e,w:e,size:t,index:null,mass:0,cx:0,cy:0,cz:0,cw:0,hexadecants:null,leaf:!0};for(let i=0;i<this.len;i++){let r=n;for(;!r.leaf;)r=this.getSubCell4(r,i);this.addParticle4(r,i)}return n}massDistribution4(e){if(e.leaf){let t=e.index*4;e.cx=this.positions[t],e.cy=this.positions[t+1],e.cz=this.positions[t+2],e.cw=this.positions[t+3],e.mass=this.masses[e.index]}else{for(let t=0,n=e.hexadecants.length;t<n;t++){let i=e.hexadecants[t];i.index!==null&&(this.massDistribution4(i),e.mass+=i.mass,e.cx+=i.cx*i.mass,e.cy+=i.cy*i.mass,e.cz+=i.cz*i.mass,e.cw+=i.cw*i.mass)}e.cx/=e.mass,e.cy/=e.mass,e.cz/=e.mass,e.cw/=e.mass}}compute4(e,t,n,i,r,a,o){if(e.leaf){if(e.index!==null&&e.index!==t){let l=t*4,c=e.index*4,u=this.positions[c]-this.positions[l],h=this.positions[c+1]-this.positions[l+1],d=this.positions[c+2]-this.positions[l+2],m=this.positions[c+3]-this.positions[l+3],g=u*u+h*h+d*d+m*m,p=g+i;r&&g<o&&a.push([t,e.index]);let f=this.masses[e.index]/(p*p);this.accelerations[l]+=f*u,this.accelerations[l+1]+=f*h,this.accelerations[l+2]+=f*d,this.accelerations[l+3]+=f*m}}else{let l=t*4,c=e.cx-this.positions[l],u=e.cy-this.positions[l+1],h=e.cz-this.positions[l+2],d=e.cw-this.positions[l+3],m=c*c+u*u+h*h+d*d;if(e.size*e.size<n*n*m){let p=e.mass/(m*m);this.accelerations[l]+=p*c,this.accelerations[l+1]+=p*u,this.accelerations[l+2]+=p*h,this.accelerations[l+3]+=p*d}else for(let p=0,f=e.hexadecants.length;p<f;p++)this.compute4(e.hexadecants[p],t,n,i,r,a,o)}}async simulate(){let{theta:e,softening:t,gravitationalConstant:n,collisions:i,collisionThreshold:r}=this.params,a=[],o=t*t,l=r*r,c=Math.min.apply(null,this.positions),u=Math.max.apply(null,this.positions),h=this[`compute${this.N}`].bind(this),d=this[`makeOctree${this.N}`](c,u-c);this[`massDistribution${this.N}`](d);for(let m=0;m<this.len;m++){let g=m*this.N;for(let p=0;p<this.N;p++)this.accelerations[g+p]=0;h(d,m,e,o,i,a,l);for(let p=0;p<this.N;p++)this.accelerations[g+p]*=n}return this.solve(a)}},Wi=Qa;var Ja=class extends _s(Gi,Wi){constructor(e,t,n,i="bh-thread"){super(e,t,n,i)}fill2(e,t,n){let i=n.shift;if(t[0+i]=e.size,t[1+i]=e.index,t[2+i]=e.mass,t[3+i]=e.cx,t[4+i]=e.cy,e.leaf)for(let r=0;r<4;r++)t[5+r+i]=NaN;else for(let r=0;r<4;r++)n.shift+=9,t[5+r+i]=n.shift,this.fill2(e.quadrants[r],t,n);return i}fill3(e,t,n){let i=n.shift;if(t[0+i]=e.size,t[1+i]=e.index,t[2+i]=e.mass,t[3+i]=e.cx,t[4+i]=e.cy,t[5+i]=e.cz,e.leaf)for(let r=0;r<8;r++)t[6+r+i]=NaN;else for(let r=0;r<8;r++)n.shift+=14,t[6+r+i]=n.shift,this.fill3(e.octants[r],t,n);return i}fill4(e,t,n){let i=n.shift;if(t[0+i]=e.size,t[1+i]=e.index,t[2+i]=e.mass,t[3+i]=e.cx,t[4+i]=e.cy,t[5+i]=e.cz,t[6+i]=e.cw,e.leaf)for(let r=0;r<16;r++)t[7+r+i]=NaN;else for(let r=0;r<16;r++)n.shift+=23,t[7+r+i]=n.shift,this.fill4(e.hexadecants[r],t,n);return i}async simulate(){let{gravitationalConstant:e,softening:t,collisions:n,collisionThreshold:i,theta:r}=this.params,a=[],o=t*t,l=i*i,c=Math.min.apply(null,this.positions),u=Math.max.apply(null,this.positions),h=this[`makeOctree${this.N}`](c,u-c);this[`massDistribution${this.N}`](h);let d={2:"quadrants",3:"octants",4:"hexadecants"}[this.N],m=T=>T[d]?T[d].length+T[d].map(m).reduce((S,w)=>S+w,0):0,g=m(h)+1,p={2:9,3:14,4:23}[this.N],f=new Float32Array(g*p);this[`fill${this.N}`](h,f,{shift:0});let _=~~(this.len/this.pool.length),E=await Promise.all(this.pool.map((T,S)=>On(T,[S*_,S==this.pool.length-1?this.len:(S+1)*_,this.N,r,e,o,n,l,this.accelerations.buffer,this.positions.buffer,this.masses.buffer,f.buffer])));if(!!this.alive)return E.forEach(([T,S,w,D])=>{let L=new Float32Array(T);for(let x=S;x<w;x++){let P=x*this.N;for(let I=0;I<this.N;I++)this.accelerations[P+I]=L[P+I]}a.push(...D)}),this.solve(a)}},Bc=Ja;var eo=class extends _s(Wi,vs){constructor(e,t,n,i="bh-thread-sab"){super(e,t,n,i)}fill2(e,t,n){let i=n.shift;if(t[0+i]=e.size,t[1+i]=e.index,t[2+i]=e.mass,t[3+i]=e.cx,t[4+i]=e.cy,e.leaf)for(let r=0;r<4;r++)t[5+r+i]=NaN;else for(let r=0;r<4;r++)n.shift+=9,t[5+r+i]=n.shift,this.fill2(e.quadrants[r],t,n);return i}fill3(e,t,n){let i=n.shift;if(t[0+i]=e.size,t[1+i]=e.index,t[2+i]=e.mass,t[3+i]=e.cx,t[4+i]=e.cy,t[5+i]=e.cz,e.leaf)for(let r=0;r<8;r++)t[6+r+i]=NaN;else for(let r=0;r<8;r++)n.shift+=14,t[6+r+i]=n.shift,this.fill3(e.octants[r],t,n);return i}fill4(e,t,n){let i=n.shift;if(t[0+i]=e.size,t[1+i]=e.index,t[2+i]=e.mass,t[3+i]=e.cx,t[4+i]=e.cy,t[5+i]=e.cz,t[6+i]=e.cw,e.leaf)for(let r=0;r<16;r++)t[7+r+i]=NaN;else for(let r=0;r<16;r++)n.shift+=23,t[7+r+i]=n.shift,this.fill4(e.hexadecants[r],t,n);return i}async simulate(){let{gravitationalConstant:e,softening:t,collisions:n,collisionThreshold:i,theta:r}=this.params,a=[],o=t*t,l=i*i,c=Math.min.apply(null,this.positions),u=Math.max.apply(null,this.positions),h=this[`makeOctree${this.N}`](c,u-c);this[`massDistribution${this.N}`](h);let d={2:"quadrants",3:"octants",4:"hexadecants"}[this.N],m=S=>S[d]?S[d].length+S[d].map(m).reduce((w,D)=>w+D,0):0,g=m(h)+1,p={2:9,3:14,4:23}[this.N],f=new SharedArrayBuffer(g*p*4),_=new Float32Array(f);this[`fill${this.N}`](h,_,{shift:0});let E=~~(this.len/this.pool.length),T=await Promise.all(this.pool.map((S,w)=>On(S,[w*E,w==this.pool.length-1?this.len:(w+1)*E,this.N,r,e,o,n,l,f])));if(!!this.alive)return T.forEach(([S])=>{a.push(...S)}),this.solve(a)}free(){super.free(),this.pool.forEach(e=>e.terminate())}},Hc=eo;var xs=null,st=null,to={Temperature:.5,Rainbow:1,Grayscale:.25,White:0,ColorCoded:.75},St,mt,gt,Vc=!1,vr={js_p2p:Nc,rust_p2p:Bi,js_p2p_threaded:Gi,js_p2p_sab:vs,js_bh:Wi,js_bh_threaded:Bc,js_bh_sab:Hc,rust_bh:Ui,js_none:zc,rust_none:ki},Rg={js_p2p_sab:"js_p2p_threaded",js_bh_sab:"js_bh_threaded"};typeof SharedArrayBuffer=="undefined"&&(delete vr.js_p2p_sab,delete vr.js_bh_sab);var ji=new Dc,Gc={showStats:!1},Wc=()=>decodeURIComponent(location.hash.replace(/^#/,""))||us.preset,jc=Wc(),ge=new Proxy({...us.remembered[jc][0]},{set(s,e,t){return s[e]=t,mt?.params_change(s,e,t),!0}}),Bt=new La;Bt.setPixelRatio(window.devicePixelRatio);Bt.setSize(window.innerWidth,window.innerHeight);Bt.toneMapping=sr;document.body.appendChild(Bt.domElement);document.body.appendChild(ji.dom);ji.showPanel(null);var no=new ts,gn=new xt(45,window.innerWidth/window.innerHeight,1,2e4);gn.position.set(1500,1500,1500);gn.lookAt(0,0,0);var Un=new Ua(gn,Bt.domElement);Un.minDistance=1;Un.maxDistance=2e4;Un.enableDamping=!0;Un.dampingFactor=.05;var Xi=new Ba(Bt),Ig=new Ha(no,gn);Xi.addPass(Ig);var xr=new za;xr.uniforms.damp.value=ge.afterImageDamp;xr.enabled=ge.afterImage;Xi.addPass(xr);var ri=new ni(wc),Xc=Bt.getPixelRatio();ri.material.uniforms.resolution.value.x=1/(window.innerWidth*Xc);ri.material.uniforms.resolution.value.y=1/(window.innerHeight*Xc);ri.enabled=ge.fxaa;Xi.addPass(ri);var qi=new Nn(new pe(window.innerWidth,window.innerHeight),ge.bloomStrength,ge.bloomRadius,ge.bloomThreshold);Bt.toneMappingExposure=ge.bloomExposure;qi.enabled=ge.bloom;Xi.addPass(qi);window.addEventListener("resize",Fg);function Fg(){gn.aspect=window.innerWidth/window.innerHeight,gn.updateProjectionMatrix(),Bt.setSize(window.innerWidth,window.innerHeight),Xi.setSize(window.innerWidth,window.innerHeight);let s=Bt.getPixelRatio();ri.material.uniforms.resolution.value.x=1/(window.innerWidth*s),ri.material.uniforms.resolution.value.y=1/(window.innerHeight*s)}async function io(){Gc.showStats&&ji.update(),await Ng(),xs=requestAnimationFrame(io)}async function Ng(){if(st!==null){if(br.setFromCamera(ro,gn),st.iter===0){let{escapeDistance:e}=ge,t=new C;t.copy(br.ray.origin),t.addScaledVector(br.ray.direction,2e3),t.length()>e&&t.normalize().multiplyScalar(e*.9),st.iter++;let n=new C;n.copy(br.ray.direction),n.multiplyScalar(st.speed);let i=Math.pow(st.iter/50,4)*ge.mass;st.orb={position:t,speed:n,mass:i,temperature:cs(i)},mt.grow([st.orb])}else st.iter++,st.orb.speed.copy(br.ray.direction),st.orb.speed.multiplyScalar(st.speed),st.orb.mass=Math.pow(st.iter/50,4)*ge.mass,st.orb.temperature=cs(st.orb.mass),mt.set_orb(mt.len-1,st.orb);St.geometry.attributes.temperature.needsUpdate=!0,St.geometry.attributes.mass.needsUpdate=!0}mt.frog_leap();let s=await mt.simulate();mt.frog_drop(),mt.project(),ge.backend.startsWith("rust")&&!St.geometry.attributes.temperature.array.buffer.byteLength&&(console.log("Memory has grown"),qc(St.geometry,St.geometry.attributes.temperature.count)),s!==St.geometry.drawRange.count&&(St.geometry.setDrawRange(0,s),St.geometry.attributes.temperature.needsUpdate=!0,St.geometry.attributes.mass.needsUpdate=!0),St.geometry.attributes.position.needsUpdate=!0,Un.update(),Xi.render()}function qc(s,e){let{buffer:t}=Cc(),n=new Float32Array(t,mt.xyz_ptr(),3*e),i=new Float32Array(t,mt.masses_ptr(),e),r=new Float32Array(t,mt.temperatures_ptr(),e);s.setAttribute("position",new qe(n,3).setUsage(Mn)),s.setAttribute("mass",new qe(i,1).setUsage(Mn)),s.setAttribute("temperature",new qe(r,1).setUsage(Mn))}function Yc(){let{backend:s,configuration:e,scale:t,blackHoleMassThreshold:n,colorMode:i}=ge,r=hs[e](ge),a=vr[s]||vr[Rg[s]],o=r.length+1e3;mt=new a(r,ge,o);let l=new lt;l.setDrawRange(0,r.length),s.startsWith("rust")?qc(l,o):(l.setAttribute("position",new qe(mt.xyz,3).setUsage(Mn)),l.setAttribute("mass",new qe(mt.masses,1).setUsage(Mn)),l.setAttribute("temperature",new qe(mt.temperatures,1).setUsage(Mn))),l.setDrawRange(0,r.length);let c=new Ye({vertexShader:Sc,fragmentShader:Mc,uniforms:{scale:{value:t},blackHoleMassThreshold:{value:n},mode:{value:to[i]}}});St=new ss(l,c),no.add(St)}function Yi(){!Vc||(cancelAnimationFrame(xs),no.clear(),mt.free(),Un.reset(),Yc(),xs=requestAnimationFrame(io))}function zg(){gt=new Co({load:us,preset:jc}),gt.remember(ge),gt.add(ge,"backend",Object.keys(vr)).onChange(Yi),gt.add(ge,"dimensions",2,4,1).onChange(Yi),gt.add(ge,"zFov",0,180).onChange(r=>{gn.fov=r,gn.updateProjectionMatrix()});let s=gt.addFolder("4d params and rotation speeds");s.add(ge,"wFov",0,180),s.add(ge,"w",0).name("Camera ana"),s.add(ge,"xy",0,50),s.add(ge,"xz",0,50),s.add(ge,"xw",0,50),s.add(ge,"yz",0,50),s.add(ge,"yw",0,50),s.add(ge,"zw",0,50);let e=gt.addFolder("Backend parameters");e.add(ge,"theta",0,4,.01).name("bh theta").onChange(Yi),e.add(ge,"threads",1,128,1).onChange(Yi);let t=gt.addFolder("Render fx");t.add(ge,"autoRotate").onChange(r=>Un.autoRotate=r).listen(),t.add(ge,"fxaa").onChange(r=>ri.enabled=r),t.add(ge,"bloom").onChange(r=>{qi.enabled=r,Bt.toneMapping=r?sr:It}),t.add(ge,"bloomStrength",0,10,.01).onChange(r=>qi.strength=r),t.add(ge,"bloomRadius",0,1,.01).onChange(r=>qi.radius=r),t.add(ge,"bloomThreshold",0,1,.01).onChange(r=>qi.threshold=r),t.add(ge,"bloomExposure",.001,128).onChange(r=>Bt.toneMappingExposure=r),t.add(ge,"afterImage").onChange(r=>xr.enabled=r),t.add(ge,"afterImageDamp",0,1).onChange(r=>xr.uniforms.damp.value=r),t.add(Gc,"showStats").onChange(r=>ji.showPanel(r?0:null));let n=gt.addFolder("Configuration");n.add(ge,"configuration",Object.keys(hs)),n.add(ge,"number",0),n.add(ge,"range",0,5e3,1).name("range (1e15m)"),n.add(ge,"speed",0,1e3).name("speed (1e2m.s)"),n.add(ge,"mass",0,1e3).name("mass (1e30kg)"),n.add(ge,"blackHoleMass",0,1e6,1e3),n.add(ge,"scale",0,1e3).onChange(r=>St.material.uniforms.scale.value=r),n.add(ge,"colorMode",Object.keys(to)).onChange(r=>St.material.uniforms.mode.value=to[r]),n.add({restart:Yi},"restart"),n.open();let i=gt.addFolder("Simulation");i.add(ge,"gravitationalConstant",0,100,.01),i.add(ge,"simulationSpeed",0,100,.001).name("speed (1e13s)"),i.add(ge,"softening",0,1e3,1),i.add(ge,"collisions"),i.add(ge,"collisionThreshold",0,1e3,1),i.add(ge,"escapeDistance",0,1e5,1),i.add(ge,"blackHoleMassThreshold",0,2e6,1).onChange(r=>St.material.uniforms.blackHoleMassThreshold.value=r),i.open(),window.innerWidth<600&&gt.close(),gt.revert(),gt.__preset_select.addEventListener("change",({target:{value:r}})=>{location.hash=`#${encodeURIComponent(r)}`}),window.addEventListener("hashchange",()=>{gt.preset=Wc(),Yi()})}var br=new os,ro=new pe;window.addEventListener("pointerdown",function(s){gt&&gt.domElement.contains(s.target)||ji&&ji.dom.contains(s.target)||(ro.set(s.clientX/window.innerWidth*2-1,-(s.clientY/window.innerHeight)*2+1),ge.creationMode&&(ge.autoRotate=!1,Un.autoRotate=!1,st={iter:0,speed:20*(1+s.button)}))});window.addEventListener("pointermove",function(s){st!==null&&ro.set(s.clientX/window.innerWidth*2-1,-(s.clientY/window.innerHeight)*2+1)});window.addEventListener("pointerup",function(){st=null});var Og=Pc("./dist/wasm/index_bg.wasm");Og.then(()=>{Yc(),zg(),Vc=!0,xs=requestAnimationFrame(io)});
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
//# sourceMappingURL=index.js.map

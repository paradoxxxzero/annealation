var nc=Object.defineProperty;var Ns=(r,e)=>{for(var t in e)nc(r,t,{get:e[t],enumerable:!0})};function ic(r){if(!!r&&typeof window!="undefined"){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function zn(r,e){var t=r.__state.conversionName.toString(),n=Math.round(r.r),i=Math.round(r.g),a=Math.round(r.b),s=r.a,o=Math.round(r.h),l=r.s.toFixed(1),c=r.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=r.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+a+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+a+","+s+")";if(t==="HEX")return"0x"+r.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+a+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+a+","+s+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+a+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+a+",a:"+s+"}";if(t==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+s+"}"}return"unknown format"}var Is=Array.prototype.forEach,xi=Array.prototype.slice,V={BREAK:{},extend:function(e){return this.each(xi.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(t[i])||(e[i]=t[i])}.bind(this))},this),e},defaults:function(e){return this.each(xi.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(e[i])&&(e[i]=t[i])}.bind(this))},this),e},compose:function(){var e=xi.call(arguments);return function(){for(var t=xi.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(!!e){if(Is&&e.forEach&&e.forEach===Is)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,a=void 0;for(i=0,a=e.length;i<a;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var s in e)if(t.call(n,e[s],s)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var a=this,s=arguments;function o(){i=null,n||e.apply(a,s)}var l=n||!i;clearTimeout(i),i=setTimeout(o,t),l&&e.apply(a,s)}},toArray:function(e){return e.toArray?e.toArray():xi.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(r){function e(t){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},rc=[{litmus:V.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:zn},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:zn},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:zn},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:zn}}},{litmus:V.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:V.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:V.isObject,conversions:{RGBA_OBJ:{read:function(e){return V.isNumber(e.r)&&V.isNumber(e.g)&&V.isNumber(e.b)&&V.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return V.isNumber(e.r)&&V.isNumber(e.g)&&V.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return V.isNumber(e.h)&&V.isNumber(e.s)&&V.isNumber(e.v)&&V.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return V.isNumber(e.h)&&V.isNumber(e.s)&&V.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],vi=void 0,Wi=void 0,Gr=function(){Wi=!1;var e=arguments.length>1?V.toArray(arguments):arguments[0];return V.each(rc,function(t){if(t.litmus(e))return V.each(t.conversions,function(n,i){if(vi=n.read(e),Wi===!1&&vi!==!1)return Wi=vi,vi.conversionName=i,vi.conversion=n,V.BREAK}),V.BREAK}),Wi},Us=void 0,Xi={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,a=e/60-Math.floor(e/60),s=n*(1-t),o=n*(1-a*t),l=n*(1-(1-a)*t),c=[[n,l,s],[o,n,s],[s,n,l],[s,o,n],[l,s,n],[n,s,o]][i];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),a=Math.max(e,t,n),s=a-i,o=void 0,l=void 0;if(a!==0)l=s/a;else return{h:NaN,s:0,v:0};return e===a?o=(t-n)/s:t===a?o=2+(n-e)/s:o=4+(e-t)/s,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:a/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(Us=t*8)|e&~(255<<Us)}},ac=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Dt=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},Nt=function(){function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),rn=function r(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var a=Object.getPrototypeOf(e);return a===null?void 0:r(a,t,n)}else{if("value"in i)return i.value;var s=i.get;return s===void 0?void 0:s.call(n)}},an=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},sn=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},Ke=function(){function r(){if(Dt(this,r),this.__state=Gr.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Nt(r,[{key:"toString",value:function(){return zn(this)}},{key:"toHexString",value:function(){return zn(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r}();function kr(r,e,t){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Ke.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(Ke.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function Vr(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Ke.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(Ke.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}Ke.recalculateRGB=function(r,e,t){if(r.__state.space==="HEX")r.__state[e]=Xi.component_from_hex(r.__state.hex,t);else if(r.__state.space==="HSV")V.extend(r.__state,Xi.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};Ke.recalculateHSV=function(r){var e=Xi.rgb_to_hsv(r.r,r.g,r.b);V.extend(r.__state,{s:e.s,v:e.v}),V.isNaN(e.h)?V.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h};Ke.COMPONENTS=["r","g","b","h","s","v","hex","a"];kr(Ke.prototype,"r",2);kr(Ke.prototype,"g",1);kr(Ke.prototype,"b",0);Vr(Ke.prototype,"h");Vr(Ke.prototype,"s");Vr(Ke.prototype,"v");Object.defineProperty(Ke.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Ke.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Xi.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Tn=function(){function r(e,t){Dt(this,r),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Nt(r,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r}(),sc={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},zs={};V.each(sc,function(r,e){V.each(r,function(t){zs[t]=e})});var oc=/(\d+(\.\d+)?)px/;function Wt(r){if(r==="0"||V.isUndefined(r))return 0;var e=r.match(oc);return V.isNull(e)?0:parseFloat(e[1])}var I={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,a=t;V.isUndefined(a)&&(a=!0),V.isUndefined(i)&&(i=!0),e.style.position="absolute",a&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var a=n||{},s=zs[t];if(!s)throw new Error("Event type "+t+" not supported.");var o=document.createEvent(s);switch(s){case"MouseEvents":{var l=a.x||a.clientX||0,c=a.y||a.clientY||0;o.initMouseEvent(t,a.bubbles||!1,a.cancelable||!0,window,a.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=o.initKeyboardEvent||o.initKeyEvent;V.defaults(a,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,a.bubbles||!1,a.cancelable,window,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.keyCode,a.charCode);break}default:{o.initEvent(t,a.bubbles||!1,a.cancelable||!0);break}}V.defaults(o,i),e.dispatchEvent(o)},bind:function(e,t,n,i){var a=i||!1;return e.addEventListener?e.addEventListener(t,n,a):e.attachEvent&&e.attachEvent("on"+t,n),I},unbind:function(e,t,n,i){var a=i||!1;return e.removeEventListener?e.removeEventListener(t,n,a):e.detachEvent&&e.detachEvent("on"+t,n),I},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return I},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return I},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Wt(t["border-left-width"])+Wt(t["border-right-width"])+Wt(t["padding-left"])+Wt(t["padding-right"])+Wt(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Wt(t["border-top-width"])+Wt(t["border-bottom-width"])+Wt(t["padding-top"])+Wt(t["padding-bottom"])+Wt(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Os=function(r){an(e,r);function e(t,n){Dt(this,e);var i=sn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function s(){a.setValue(!a.__prev)}return I.bind(i.__checkbox,"change",s,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return Nt(e,[{key:"setValue",value:function(n){var i=rn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),rn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Tn),lc=function(r){an(e,r);function e(t,n,i){Dt(this,e);var a=sn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i,o=a;if(a.__select=document.createElement("select"),V.isArray(s)){var l={};V.each(s,function(c){l[c]=c}),s=l}return V.each(s,function(c,u){var d=document.createElement("option");d.innerHTML=u,d.setAttribute("value",c),o.__select.appendChild(d)}),a.updateDisplay(),I.bind(a.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),a.domElement.appendChild(a.__select),a}return Nt(e,[{key:"setValue",value:function(n){var i=rn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return I.isActive(this.__select)?this:(this.__select.value=this.getValue(),rn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Tn),cc=function(r){an(e,r);function e(t,n){Dt(this,e);var i=sn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=i;function s(){a.setValue(a.__input.value)}function o(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),I.bind(i.__input,"keyup",s),I.bind(i.__input,"change",s),I.bind(i.__input,"blur",o),I.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return Nt(e,[{key:"updateDisplay",value:function(){return I.isActive(this.__input)||(this.__input.value=this.getValue()),rn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Tn);function Bs(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var Hs=function(r){an(e,r);function e(t,n,i){Dt(this,e);var a=sn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i||{};return a.__min=s.min,a.__max=s.max,a.__step=s.step,V.isUndefined(a.__step)?a.initialValue===0?a.__impliedStep=1:a.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(a.initialValue))/Math.LN10))/10:a.__impliedStep=a.__step,a.__precision=Bs(a.__impliedStep),a}return Nt(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!=0&&(i=Math.round(i/this.__step)*this.__step),rn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Bs(n),this}}]),e}(Tn);function dc(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var Yi=function(r){an(e,r);function e(t,n,i){Dt(this,e);var a=sn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));a.__truncationSuspended=!1;var s=a,o=void 0;function l(){var g=parseFloat(s.__input.value);V.isNaN(g)||s.setValue(g)}function c(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}function u(){c()}function d(g){var _=o-g.clientY;s.setValue(s.getValue()+_*s.__impliedStep),o=g.clientY}function h(){I.unbind(window,"mousemove",d),I.unbind(window,"mouseup",h),c()}function f(g){I.bind(window,"mousemove",d),I.bind(window,"mouseup",h),o=g.clientY}return a.__input=document.createElement("input"),a.__input.setAttribute("type","text"),I.bind(a.__input,"change",l),I.bind(a.__input,"blur",u),I.bind(a.__input,"mousedown",f),I.bind(a.__input,"keydown",function(g){g.keyCode===13&&(s.__truncationSuspended=!0,this.blur(),s.__truncationSuspended=!1,c())}),a.updateDisplay(),a.domElement.appendChild(a.__input),a}return Nt(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():dc(this.getValue(),this.__precision),rn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Hs);function Gs(r,e,t,n,i){return n+(i-n)*((r-e)/(t-e))}var Wr=function(r){an(e,r);function e(t,n,i,a,s){Dt(this,e);var o=sn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:a,step:s})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),I.bind(o.__background,"mousedown",c),I.bind(o.__background,"touchstart",h),I.addClass(o.__background,"slider"),I.addClass(o.__foreground,"slider-fg");function c(_){document.activeElement.blur(),I.bind(window,"mousemove",u),I.bind(window,"mouseup",d),u(_)}function u(_){_.preventDefault();var x=l.__background.getBoundingClientRect();return l.setValue(Gs(_.clientX,x.left,x.right,l.__min,l.__max)),!1}function d(){I.unbind(window,"mousemove",u),I.unbind(window,"mouseup",d),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function h(_){_.touches.length===1&&(I.bind(window,"touchmove",f),I.bind(window,"touchend",g),f(_))}function f(_){var x=_.touches[0].clientX,m=l.__background.getBoundingClientRect();l.setValue(Gs(x,m.left,m.right,l.__min,l.__max))}function g(){I.unbind(window,"touchmove",f),I.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return Nt(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",rn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Hs),ks=function(r){an(e,r);function e(t,n,i){Dt(this,e);var a=sn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=a;return a.__button=document.createElement("div"),a.__button.innerHTML=i===void 0?"Fire":i,I.bind(a.__button,"click",function(o){return o.preventDefault(),s.fire(),!1}),I.addClass(a.__button,"button"),a.domElement.appendChild(a.__button),a}return Nt(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Tn),Xr=function(r){an(e,r);function e(t,n){Dt(this,e);var i=sn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new Ke(i.getValue()),i.__temp=new Ke(0);var a=i;i.domElement=document.createElement("div"),I.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",I.bind(i.__input,"keydown",function(_){_.keyCode===13&&d.call(this)}),I.bind(i.__input,"blur",d),I.bind(i.__selector,"mousedown",function(){I.addClass(this,"drag").bind(window,"mouseup",function(){I.removeClass(a.__selector,"drag")})}),I.bind(i.__selector,"touchstart",function(){I.addClass(this,"drag").bind(window,"touchend",function(){I.removeClass(a.__selector,"drag")})});var s=document.createElement("div");V.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),V.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),V.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),V.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),V.extend(s.style,{width:"100%",height:"100%",background:"none"}),Vs(s,"top","rgba(0,0,0,0)","#000"),V.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),uc(i.__hue_field),V.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),I.bind(i.__saturation_field,"mousedown",o),I.bind(i.__saturation_field,"touchstart",o),I.bind(i.__field_knob,"mousedown",o),I.bind(i.__field_knob,"touchstart",o),I.bind(i.__hue_field,"mousedown",l),I.bind(i.__hue_field,"touchstart",l);function o(_){f(_),I.bind(window,"mousemove",f),I.bind(window,"touchmove",f),I.bind(window,"mouseup",c),I.bind(window,"touchend",c)}function l(_){g(_),I.bind(window,"mousemove",g),I.bind(window,"touchmove",g),I.bind(window,"mouseup",u),I.bind(window,"touchend",u)}function c(){I.unbind(window,"mousemove",f),I.unbind(window,"touchmove",f),I.unbind(window,"mouseup",c),I.unbind(window,"touchend",c),h()}function u(){I.unbind(window,"mousemove",g),I.unbind(window,"touchmove",g),I.unbind(window,"mouseup",u),I.unbind(window,"touchend",u),h()}function d(){var _=Gr(this.value);_!==!1?(a.__color.__state=_,a.setValue(a.__color.toOriginal())):this.value=a.__color.toString()}function h(){a.__onFinishChange&&a.__onFinishChange.call(a,a.__color.toOriginal())}i.__saturation_field.appendChild(s),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function f(_){_.type.indexOf("touch")===-1&&_.preventDefault();var x=a.__saturation_field.getBoundingClientRect(),m=_.touches&&_.touches[0]||_,p=m.clientX,T=m.clientY,L=(p-x.left)/(x.right-x.left),S=1-(T-x.top)/(x.bottom-x.top);return S>1?S=1:S<0&&(S=0),L>1?L=1:L<0&&(L=0),a.__color.v=S,a.__color.s=L,a.setValue(a.__color.toOriginal()),!1}function g(_){_.type.indexOf("touch")===-1&&_.preventDefault();var x=a.__hue_field.getBoundingClientRect(),m=_.touches&&_.touches[0]||_,p=m.clientY,T=1-(p-x.top)/(x.bottom-x.top);return T>1?T=1:T<0&&(T=0),a.__color.h=T*360,a.setValue(a.__color.toOriginal()),!1}return i}return Nt(e,[{key:"updateDisplay",value:function(){var n=Gr(this.getValue());if(n!==!1){var i=!1;V.each(Ke.COMPONENTS,function(o){if(!V.isUndefined(n[o])&&!V.isUndefined(this.__color.__state[o])&&n[o]!==this.__color.__state[o])return i=!0,{}},this),i&&V.extend(this.__color.__state,n)}V.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var a=this.__color.v<.5||this.__color.s>.5?255:0,s=255-a;V.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+a+","+a+","+a+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Vs(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),V.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+a+","+a+","+a+")",textShadow:this.__input_textShadow+"rgba("+s+","+s+","+s+",.7)"})}}]),e}(Tn),hc=["-moz-","-o-","-webkit-","-ms-",""];function Vs(r,e,t,n){r.style.background="",V.each(hc,function(i){r.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function uc(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var fc={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var a=n.getElementsByTagName("head")[0];try{a.appendChild(i)}catch(s){}}},pc=`<div id="dg-save" class="dg dialogue">

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

</div>`,mc=function(e,t){var n=e[t];return V.isArray(arguments[2])||V.isObject(arguments[2])?new lc(e,t,arguments[2]):V.isNumber(n)?V.isNumber(arguments[2])&&V.isNumber(arguments[3])?V.isNumber(arguments[4])?new Wr(e,t,arguments[2],arguments[3],arguments[4]):new Wr(e,t,arguments[2],arguments[3]):V.isNumber(arguments[4])?new Yi(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Yi(e,t,{min:arguments[2],max:arguments[3]}):V.isString(n)?new cc(e,t):V.isFunction(n)?new ks(e,t,""):V.isBoolean(n)?new Os(e,t):null};function gc(r){setTimeout(r,1e3/60)}var _c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||gc,xc=function(){function r(){Dt(this,r),this.backgroundElement=document.createElement("div"),V.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),I.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),V.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;I.bind(this.backgroundElement,"click",function(){e.hide()})}return Nt(r,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),V.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",I.unbind(t.domElement,"webkitTransitionEnd",i),I.unbind(t.domElement,"transitionend",i),I.unbind(t.domElement,"oTransitionEnd",i)};I.bind(this.domElement,"webkitTransitionEnd",n),I.bind(this.domElement,"transitionend",n),I.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-I.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-I.getHeight(this.domElement)/2+"px"}}]),r}(),vc=ic(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);fc.inject(vc);var Ws="dg",Xs=72,Ys=20,yi="Default",bi=function(){try{return!!window.localStorage}catch(r){return!1}}(),wi=void 0,js=!0,On=void 0,Yr=!1,Qs=[],Oe=function r(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),I.addClass(this.domElement,Ws),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=V.defaults(n,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),n=V.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),V.isUndefined(n.load)?n.load={preset:yi}:n.preset&&(n.load.preset=n.preset),V.isUndefined(n.parent)&&n.hideable&&Qs.push(this),n.resizable=V.isUndefined(n.parent)&&n.resizable,n.autoPlace&&V.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=bi&&localStorage.getItem(Bn(this,"isLocal"))==="true",a=void 0,s=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(h){t.parent?t.getRoot().preset=h:n.load.preset=h,bc(this),t.revert()}},width:{get:function(){return n.width},set:function(h){n.width=h,Qr(t,h)}},name:{get:function(){return n.name},set:function(h){n.name=h,s&&(s.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(h){n.closed=h,n.closed?I.addClass(t.__ul,r.CLASS_CLOSED):I.removeClass(t.__ul,r.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=h?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(h){bi&&(i=h,h?I.bind(window,"unload",a):I.unbind(window,"unload",a),localStorage.setItem(Bn(t,"isLocal"),h))}}}),V.isUndefined(n.parent)){if(this.closed=n.closed||!1,I.addClass(this.domElement,r.CLASS_MAIN),I.makeSelectable(this.domElement,!1),bi&&i){t.useLocalStorage=!0;var o=localStorage.getItem(Bn(this,"gui"));o&&(n.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,I.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),n.closeOnTop?(I.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(I.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),I.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);I.addClass(l,"controller-name"),s=jr(t,l);var c=function(h){return h.preventDefault(),t.closed=!t.closed,!1};I.addClass(this.__ul,r.CLASS_CLOSED),I.addClass(s,"title"),I.bind(s,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(V.isUndefined(n.parent)&&(js&&(On=document.createElement("div"),I.addClass(On,Ws),I.addClass(On,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(On),js=!1),On.appendChild(this.domElement),I.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||Qr(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},I.bind(window,"resize",this.__resizeHandler),I.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),I.bind(this.__ul,"transitionend",this.__resizeHandler),I.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&yc(this),a=function(){bi&&localStorage.getItem(Bn(t,"isLocal"))==="true"&&localStorage.setItem(Bn(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=a;function u(){var d=t.getRoot();d.width+=1,V.defer(function(){d.width-=1})}n.parent||u()};Oe.toggleHide=function(){Yr=!Yr,V.each(Qs,function(r){r.domElement.style.display=Yr?"none":""})};Oe.CLASS_AUTO_PLACE="a";Oe.CLASS_AUTO_PLACE_CONTAINER="ac";Oe.CLASS_MAIN="main";Oe.CLASS_CONTROLLER_ROW="cr";Oe.CLASS_TOO_TALL="taller-than-window";Oe.CLASS_CLOSED="closed";Oe.CLASS_CLOSE_BUTTON="close-button";Oe.CLASS_CLOSE_TOP="close-top";Oe.CLASS_CLOSE_BOTTOM="close-bottom";Oe.CLASS_DRAG="drag";Oe.DEFAULT_WIDTH=245;Oe.TEXT_CLOSED="Close Controls";Oe.TEXT_OPEN="Open Controls";Oe._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===Xs||r.keyCode===Xs)&&Oe.toggleHide()};I.bind(window,"keydown",Oe._keydownHandler,!1);V.extend(Oe.prototype,{add:function(e,t){return Mi(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Mi(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;V.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&On.removeChild(this.domElement);var e=this;V.each(this.__folders,function(t){e.removeFolder(t)}),I.unbind(window,"keydown",Oe._keydownHandler,!1),qs(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new Oe(t);this.__folders[e]=n;var i=jr(this,n.domElement);return I.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],qs(e);var t=this;V.each(e.__folders,function(n){e.removeFolder(n)}),V.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=I.getOffset(e.__ul).top,n=0;V.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=I.getHeight(i))}),window.innerHeight-t-Ys<n?(I.addClass(e.domElement,Oe.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-Ys+"px"):(I.removeClass(e.domElement,Oe.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&V.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:V.debounce(function(){this.onResize()},50),remember:function(){if(V.isUndefined(wi)&&(wi=new xc,wi.domElement.innerHTML=pc),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;V.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&wc(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Qr(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=ji(this)),e.folders={},V.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=ji(this),qr(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[yi]=ji(this,!0)),this.load.remembered[e]=ji(this),this.preset=e,Zr(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){V.each(this.__controllers,function(t){this.getRoot().load.remembered?Zs(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),V.each(this.__folders,function(t){t.revert(t)}),e||qr(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&$s(this.__listening)},updateDisplay:function(){V.each(this.__controllers,function(e){e.updateDisplay()}),V.each(this.__folders,function(e){e.updateDisplay()})}});function jr(r,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?r.__ul.insertBefore(n,t):r.__ul.appendChild(n),r.onResize(),n}function qs(r){I.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&I.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function qr(r,e){var t=r.__preset_select[r.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function Mc(r,e,t){if(t.__li=e,t.__gui=r,V.extend(t,{options:function(s){if(arguments.length>1){var o=t.__li.nextElementSibling;return t.remove(),Mi(r,t.object,t.property,{before:o,factoryArgs:[V.toArray(arguments)]})}if(V.isArray(s)||V.isObject(s)){var l=t.__li.nextElementSibling;return t.remove(),Mi(r,t.object,t.property,{before:l,factoryArgs:[s]})}},name:function(s){return t.__li.firstElementChild.firstElementChild.innerHTML=s,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Wr){var n=new Yi(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});V.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(a){var s=t[a],o=n[a];t[a]=n[a]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(n,l),s.apply(t,l)}}),I.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof Yi){var i=function(s){if(V.isNumber(t.__min)&&V.isNumber(t.__max)){var o=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=Mi(r,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(o),l&&c.listen(),c}return s};t.min=V.compose(i,t.min),t.max=V.compose(i,t.max)}else t instanceof Os?(I.bind(e,"click",function(){I.fakeEvent(t.__checkbox,"click")}),I.bind(t.__checkbox,"click",function(a){a.stopPropagation()})):t instanceof ks?(I.bind(e,"click",function(){I.fakeEvent(t.__button,"click")}),I.bind(e,"mouseover",function(){I.addClass(t.__button,"hover")}),I.bind(e,"mouseout",function(){I.removeClass(t.__button,"hover")})):t instanceof Xr&&(I.addClass(e,"color"),t.updateDisplay=V.compose(function(a){return e.style.borderLeftColor=t.__color.toString(),a},t.updateDisplay),t.updateDisplay());t.setValue=V.compose(function(a){return r.getRoot().__preset_select&&t.isModified()&&qr(r.getRoot(),!0),a},t.setValue)}function Zs(r,e){var t=r.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var a=t.load.remembered,s=void 0;if(a[r.preset])s=a[r.preset];else if(a[yi])s=a[yi];else return;if(s[n]&&s[n][e.property]!==void 0){var o=s[n][e.property];e.initialValue=o,e.setValue(o)}}}}function Mi(r,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new Xr(e,t);else{var a=[e,t].concat(n.factoryArgs);i=mc.apply(r,a)}n.before instanceof Tn&&(n.before=n.before.__li),Zs(r,i),I.addClass(i.domElement,"c");var s=document.createElement("span");I.addClass(s,"property-name"),s.innerHTML=i.property;var o=document.createElement("div");o.appendChild(s),o.appendChild(i.domElement);var l=jr(r,o,n.before);return I.addClass(l,Oe.CLASS_CONTROLLER_ROW),i instanceof Xr?I.addClass(l,"color"):I.addClass(l,ac(i.getValue())),Mc(r,l,i),r.__controllers.push(i),i}function Bn(r,e){return document.location.href+"."+e}function Zr(r,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,r.__preset_select.appendChild(n),t&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function Js(r,e){e.style.display=r.useLocalStorage?"block":"none"}function wc(r){var e=r.__save_row=document.createElement("li");I.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),I.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",I.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",I.addClass(n,"button"),I.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",I.addClass(i,"button"),I.addClass(i,"save-as");var a=document.createElement("span");a.innerHTML="Revert",I.addClass(a,"button"),I.addClass(a,"revert");var s=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?V.each(r.load.remembered,function(d,h){Zr(r,h,h===r.preset)}):Zr(r,yi,!1),I.bind(s,"change",function(){for(var d=0;d<r.__preset_select.length;d++)r.__preset_select[d].innerHTML=r.__preset_select[d].value;r.preset=this.value}),e.appendChild(s),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(a),bi){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Bn(r,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Js(r,o),I.bind(l,"change",function(){r.useLocalStorage=!r.useLocalStorage,Js(r,o)})}var u=document.getElementById("dg-new-constructor");I.bind(u,"keydown",function(d){d.metaKey&&(d.which===67||d.keyCode===67)&&wi.hide()}),I.bind(t,"click",function(){u.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),wi.show(),u.focus(),u.select()}),I.bind(n,"click",function(){r.save()}),I.bind(i,"click",function(){var d=prompt("Enter a new preset name.");d&&r.saveAs(d)}),I.bind(a,"click",function(){r.revert()})}function yc(r){var e=void 0;r.__resize_handle=document.createElement("div"),V.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(a){return a.preventDefault(),r.width+=e-a.clientX,r.onResize(),e=a.clientX,!1}function n(){I.removeClass(r.__closeButton,Oe.CLASS_DRAG),I.unbind(window,"mousemove",t),I.unbind(window,"mouseup",n)}function i(a){return a.preventDefault(),e=a.clientX,I.addClass(r.__closeButton,Oe.CLASS_DRAG),I.bind(window,"mousemove",t),I.bind(window,"mouseup",n),!1}I.bind(r.__resize_handle,"mousedown",i),I.bind(r.__closeButton,"mousedown",i),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function Qr(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function ji(r,e){var t={};return V.each(r.__rememberedObjects,function(n,i){var a={},s=r.__rememberedObjectIndecesToControllers[i];V.each(s,function(o,l){a[l]=e?o.initialValue:o.getValue()}),t[i]=a}),t}function bc(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function $s(r){r.length!==0&&_c.call(window,function(){$s(r)}),V.each(r,function(e){e.updateDisplay()})}var Ks=Oe;var eo="128",Ln={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ac=0,to=1,Sc=2,no=1,Ec=2,Ai=3,Qi=0,et=1,qi=2,io=1,Si=0,Ei=1,Zi=2,ro=3,ao=4,Tc=5,Hn=100,Lc=101,Pc=102,so=103,oo=104,Fc=200,Cc=201,Rc=202,Dc=203,lo=204,co=205,Nc=206,Ic=207,Uc=208,zc=209,Oc=210,Bc=0,Hc=1,Gc=2,$r=3,kc=4,Vc=5,Wc=6,Xc=7,uo=0,Yc=1,jc=2,on=0,Qc=1,Ti=2,qc=3,Zc=4,$c=5,ho=300,Jr=301,Kr=302,fo=303,po=304,ea=306,ta=307,na=1e3,It=1001,ia=1002,st=1003,mo=1004,go=1005,je=1006,Jc=1007,ra=1008,aa=1009,Kc=1010,ed=1011,sa=1012,td=1013,$i=1014,ln=1015,Ji=1016,nd=1017,id=1018,rd=1019,Ki=1020,ad=1021,Gn=1022,tt=1023,sd=1024,od=1025,oa=1026,la=1027,ld=1028,cd=1029,dd=1030,ud=1031,hd=1032,fd=1033,_o=33776,xo=33777,vo=33778,yo=33779,bo=35840,wo=35841,Mo=35842,Ao=35843,pd=36196,So=37492,Eo=37496,md=37808,gd=37809,_d=37810,xd=37811,vd=37812,yd=37813,bd=37814,wd=37815,Md=37816,Ad=37817,Sd=37818,Ed=37819,Td=37820,Ld=37821,Pd=36492,Fd=37840,Cd=37841,Rd=37842,Dd=37843,Nd=37844,Id=37845,Ud=37846,zd=37847,Od=37848,Bd=37849,Hd=37850,Gd=37851,kd=37852,Vd=37853,Wd=0,Li=3e3,To=3001,Xd=3007,Yd=3002,jd=3003,Qd=3004,qd=3005,Zd=3006,$d=3200,Jd=3201,Kd=0,eu=1,ca=7680,tu=519,da=35044,Ut=35048,Lo="300 es",qt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let a=0,s=i.length;a<s;a++)i[a].call(this,e);e.target=null}}},at=[];for(let r=0;r<256;r++)at[r]=(r<16?"0":"")+r.toString(16);var ua=Math.PI/180,Po=180/Math.PI;function Pi(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(at[r&255]+at[r>>8&255]+at[r>>16&255]+at[r>>24&255]+"-"+at[e&255]+at[e>>8&255]+"-"+at[e>>16&15|64]+at[e>>24&255]+"-"+at[t&63|128]+at[t>>8&255]+"-"+at[t>>16&255]+at[t>>24&255]+at[n&255]+at[n>>8&255]+at[n>>16&255]+at[n>>24&255]).toUpperCase()}function zt(r,e,t){return Math.max(e,Math.min(t,r))}function nu(r,e){return(r%e+e)%e}function ha(r,e,t){return(1-t)*r+t*e}function Fo(r){return(r&r-1)==0&&r!==0}function iu(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ru(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}var ae=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*i+e.x,this.y=a*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}};ae.prototype.isVector2=!0;var nt=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,a,s,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,a=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=i[0],x=i[3],m=i[6],p=i[1],T=i[4],L=i[7],S=i[2],v=i[5],C=i[8];return a[0]=s*_+o*p+l*S,a[3]=s*x+o*T+l*v,a[6]=s*m+o*L+l*C,a[1]=c*_+u*p+d*S,a[4]=c*x+u*T+d*v,a[7]=c*m+u*L+d*C,a[2]=h*_+f*p+g*S,a[5]=h*x+f*T+g*v,a[8]=h*m+f*L+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*a*u+n*o*l+i*a*c-i*s*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*s-o*c,h=o*l-u*a,f=c*a-s*l,g=t*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*s)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*a-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(s*t-n*a)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,s,o){let l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),i=this.elements,a=i[0],s=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*a+n*l,i[3]=t*s+n*c,i[6]=t*o+n*u,i[1]=-n*a+t*l,i[4]=-n*s+t*c,i[7]=-n*o+t*u,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};nt.prototype.isMatrix3=!0;var kn,Fn=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{kn===void 0&&(kn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),kn.width=e.width,kn.height=e.height;let n=kn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=kn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}},au=0,yt=class extends qt{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=It,i=It,a=je,s=ra,o=tt,l=aa,c=1,u=Li){super();Object.defineProperty(this,"id",{value:au++}),this.uuid=Pi(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let i=this.image;if(i.uuid===void 0&&(i.uuid=Pi()),!t&&e.images[i.uuid]===void 0){let a;if(Array.isArray(i)){a=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?a.push(fa(i[s].image)):a.push(fa(i[s]))}else a=fa(i);e.images[i.uuid]={uuid:i.uuid,url:a}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ho)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case na:e.x=e.x-Math.floor(e.x);break;case It:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case na:e.y=e.y-Math.floor(e.y);break;case It:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};yt.DEFAULT_IMAGE=void 0;yt.DEFAULT_MAPPING=ho;yt.prototype.isTexture=!0;function fa(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Fn.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ce=class{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a,s=.01,o=.1,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],x=l[6],m=l[10];if(Math.abs(u-h)<s&&Math.abs(d-_)<s&&Math.abs(g-x)<s){if(Math.abs(u+h)<o&&Math.abs(d+_)<o&&Math.abs(g+x)<o&&Math.abs(c+f+m-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,L=(f+1)/2,S=(m+1)/2,v=(u+h)/4,C=(d+_)/4,O=(g+x)/4;return T>L&&T>S?T<s?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(T),i=v/n,a=C/n):L>S?L<s?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(L),n=v/i,a=O/i):S<s?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(S),n=C/a,i=O/a),this.set(n,i,a,t),this}let p=Math.sqrt((x-g)*(x-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(p)<.001&&(p=1),this.x=(x-g)/p,this.y=(d-_)/p,this.z=(h-u)/p,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}};Ce.prototype.isVector4=!0;var ot=class extends qt{constructor(e,t,n){super();this.width=e,this.height=t,this.depth=1,this.scissor=new Ce(0,0,e,t),this.scissorTest=!1,this.viewport=new Ce(0,0,e,t),n=n||{},this.texture=new yt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:je,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};ot.prototype.isWebGLRenderTarget=!0;var wt=class{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,a,s,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=a[s+0],f=a[s+1],g=a[s+2],_=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||c!==f||u!==g){let x=1-o,m=l*h+c*f+u*g+d*_,p=m>=0?1:-1,T=1-m*m;if(T>Number.EPSILON){let S=Math.sqrt(T),v=Math.atan2(S,m*p);x=Math.sin(x*v)/S,o=Math.sin(o*v)/S}let L=o*p;if(l=l*x+h*L,c=c*x+f*L,u=u*x+g*L,d=d*x+_*L,x===1-o){let S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,a,s){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=a[s],h=a[s+1],f=a[s+2],g=a[s+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=e._x,i=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(a/2),h=l(n/2),f=l(i/2),g=l(a/2);switch(s){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(a-c)*f,this._z=(s-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(a+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(a-c)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(s-i)/f,this._x=(a+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+i*c-a*l,this._y=i*u+s*l+a*o-n*c,this._z=a*u+s*c+n*l-i*o,this._w=s*u-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,a=this._z,s=this._w,o=s*e._w+n*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*s+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*a+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};wt.prototype.isQuaternion=!0;var w=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Co.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Co.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*i-o*n,u=l*n+o*t-a*i,d=l*i+a*n-s*t,h=-a*t-s*n-o*i;return this.x=c*l+h*-a+u*-o-d*-s,this.y=u*l+h*-s+d*-a-c*-o,this.z=d*l+h*-o+c*-s-u*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-a*o,this.y=a*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pa.copy(this).projectOnVector(e),this.sub(pa)}reflect(e){return this.sub(pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}};w.prototype.isVector3=!0;var pa=new w,Co=new wt,Mt=class{constructor(e=new w(Infinity,Infinity,Infinity),t=new w(-Infinity,-Infinity,-Infinity)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=Infinity,n=Infinity,i=Infinity,a=-Infinity,s=-Infinity,o=-Infinity;for(let l=0,c=e.length;l<c;l+=3){let u=e[l],d=e[l+1],h=e[l+2];u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>a&&(a=u),d>s&&(s=d),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(a,s,o),this}setFromBufferAttribute(e){let t=Infinity,n=Infinity,i=Infinity,a=-Infinity,s=-Infinity,o=-Infinity;for(let l=0,c=e.count;l<c;l++){let u=e.getX(l),d=e.getY(l),h=e.getZ(l);u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>a&&(a=u),d>s&&(s=d),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(a,s,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new w),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new w),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),ma.copy(t.boundingBox),ma.applyMatrix4(e.matrixWorld),this.union(ma));let n=e.children;for(let i=0,a=n.length;i<a;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new w),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ci),er.subVectors(this.max,Ci),Vn.subVectors(e.a,Ci),Wn.subVectors(e.b,Ci),Xn.subVectors(e.c,Ci),cn.subVectors(Wn,Vn),dn.subVectors(Xn,Wn),Cn.subVectors(Vn,Xn);let t=[0,-cn.z,cn.y,0,-dn.z,dn.y,0,-Cn.z,Cn.y,cn.z,0,-cn.x,dn.z,0,-dn.x,Cn.z,0,-Cn.x,-cn.y,cn.x,0,-dn.y,dn.x,0,-Cn.y,Cn.x,0];return!ga(t,Vn,Wn,Xn,er)||(t=[1,0,0,0,1,0,0,0,1],!ga(t,Vn,Wn,Xn,er))?!1:(tr.crossVectors(cn,dn),t=[tr.x,tr.y,tr.z],ga(t,Vn,Wn,Xn,er))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new w),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Fi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};Mt.prototype.isBox3=!0;var Zt=[new w,new w,new w,new w,new w,new w,new w,new w],Fi=new w,ma=new Mt,Vn=new w,Wn=new w,Xn=new w,cn=new w,dn=new w,Cn=new w,Ci=new w,er=new w,tr=new w,Rn=new w;function ga(r,e,t,n,i){for(let a=0,s=r.length-3;a<=s;a+=3){Rn.fromArray(r,a);let o=i.x*Math.abs(Rn.x)+i.y*Math.abs(Rn.y)+i.z*Math.abs(Rn.z),l=e.dot(Rn),c=t.dot(Rn),u=n.dot(Rn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var su=new Mt,Ro=new w,_a=new w,xa=new w,Yn=class{constructor(e=new w,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):su.setFromPoints(e).getCenter(n);let i=0;for(let a=0,s=e.length;a<s;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new w),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new Mt),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){xa.subVectors(e,this.center);let t=xa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(xa.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return _a.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Ro.copy(e.center).add(_a)),this.expandByPoint(Ro.copy(e.center).sub(_a)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},$t=new w,va=new w,nr=new w,un=new w,ya=new w,ir=new w,ba=new w,Dn=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new w),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$t)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new w),t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$t.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($t.copy(this.direction).multiplyScalar(t).add(this.origin),$t.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){va.copy(e).add(t).multiplyScalar(.5),nr.copy(t).sub(e).normalize(),un.copy(this.origin).sub(va);let a=e.distanceTo(t)*.5,s=-this.direction.dot(nr),o=un.dot(this.direction),l=-un.dot(nr),c=un.lengthSq(),u=Math.abs(1-s*s),d,h,f,g;if(u>0)if(d=s*l-o,h=s*o-l,g=a*u,d>=0)if(h>=-g)if(h<=g){let _=1/u;d*=_,h*=_,f=d*(d+s*h+2*o)+h*(s*d+h+2*l)+c}else h=a,d=Math.max(0,-(s*h+o)),f=-d*d+h*(h+2*l)+c;else h=-a,d=Math.max(0,-(s*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-s*a+o)),h=d>0?-a:Math.min(Math.max(-a,-l),a),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-a,-l),a),f=h*(h+2*l)+c):(d=Math.max(0,-(s*a+o)),h=d>0?a:Math.min(Math.max(-a,-l),a),f=-d*d+h*(h+2*l)+c);else h=s>0?-a:a,d=Math.max(0,-(s*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(nr).multiplyScalar(h).add(va),f}intersectSphere(e,t){$t.subVectors(e.center,this.origin);let n=$t.dot(this.direction),i=$t.dot($t)-n*n,a=e.radius*e.radius;if(i>a)return null;let s=Math.sqrt(a-i),o=n-s,l=n+s;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,s,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(a=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),n>s||a>i||((a>n||n!==n)&&(n=a),(s<i||i!==i)&&(i=s),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$t)!==null}intersectTriangle(e,t,n,i,a){ya.subVectors(t,e),ir.subVectors(n,e),ba.crossVectors(ya,ir);let s=this.direction.dot(ba),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;un.subVectors(this.origin,e);let l=o*this.direction.dot(ir.crossVectors(un,ir));if(l<0)return null;let c=o*this.direction.dot(ya.cross(un));if(c<0||l+c>s)return null;let u=-o*un.dot(ba);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,a,s,o,l,c,u,d,h,f,g,_,x){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=a,m[5]=s,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=_,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/jn.setFromMatrixColumn(e,0).length(),a=1/jn.setFromMatrixColumn(e,1).length(),s=1/jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,n=e.x,i=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){let h=s*u,f=s*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=s*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h+_*o,t[4]=g*o-f,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-o,t[2]=f*o-g,t[6]=_+h*o,t[10]=s*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h-_*o,t[4]=-s*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=s*u,t[9]=_-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){let h=s*u,f=s*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){let h=s*l,f=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){let h=s*l,f=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=s*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ou,e,lu)}lookAt(e,t,n){let i=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),hn.crossVectors(n,At),hn.lengthSq()===0&&(Math.abs(n.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),hn.crossVectors(n,At)),hn.normalize(),rr.crossVectors(At,hn),i[0]=hn.x,i[4]=rr.x,i[8]=At.x,i[1]=hn.y,i[5]=rr.y,i[9]=At.y,i[2]=hn.z,i[6]=rr.z,i[10]=At.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,a=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],x=n[10],m=n[14],p=n[3],T=n[7],L=n[11],S=n[15],v=i[0],C=i[4],O=i[8],z=i[12],W=i[1],q=i[5],B=i[9],P=i[13],D=i[2],R=i[6],F=i[10],j=i[14],$=i[3],J=i[7],re=i[11],ie=i[15];return a[0]=s*v+o*W+l*D+c*$,a[4]=s*C+o*q+l*R+c*J,a[8]=s*O+o*B+l*F+c*re,a[12]=s*z+o*P+l*j+c*ie,a[1]=u*v+d*W+h*D+f*$,a[5]=u*C+d*q+h*R+f*J,a[9]=u*O+d*B+h*F+f*re,a[13]=u*z+d*P+h*j+f*ie,a[2]=g*v+_*W+x*D+m*$,a[6]=g*C+_*q+x*R+m*J,a[10]=g*O+_*B+x*F+m*re,a[14]=g*z+_*P+x*j+m*ie,a[3]=p*v+T*W+L*D+S*$,a[7]=p*C+T*q+L*R+S*J,a[11]=p*O+T*B+L*F+S*re,a[15]=p*z+T*P+L*j+S*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],x=e[11],m=e[15];return g*(+a*l*d-i*c*d-a*o*h+n*c*h+i*o*f-n*l*f)+_*(+t*l*f-t*c*h+a*s*h-i*s*f+i*c*u-a*l*u)+x*(+t*c*d-t*o*f-a*s*d+n*s*f+a*o*u-n*c*u)+m*(-i*o*u-t*l*d+t*o*h+i*s*d-n*s*h+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],x=e[14],m=e[15],p=d*x*c-_*h*c+_*l*f-o*x*f-d*l*m+o*h*m,T=g*h*c-u*x*c-g*l*f+s*x*f+u*l*m-s*h*m,L=u*_*c-g*d*c+g*o*f-s*_*f-u*o*m+s*d*m,S=g*d*l-u*_*l-g*o*h+s*_*h+u*o*x-s*d*x,v=t*p+n*T+i*L+a*S;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/v;return e[0]=p*C,e[1]=(_*h*a-d*x*a-_*i*f+n*x*f+d*i*m-n*h*m)*C,e[2]=(o*x*a-_*l*a+_*i*c-n*x*c-o*i*m+n*l*m)*C,e[3]=(d*l*a-o*h*a-d*i*c+n*h*c+o*i*f-n*l*f)*C,e[4]=T*C,e[5]=(u*x*a-g*h*a+g*i*f-t*x*f-u*i*m+t*h*m)*C,e[6]=(g*l*a-s*x*a-g*i*c+t*x*c+s*i*m-t*l*m)*C,e[7]=(s*h*a-u*l*a+u*i*c-t*h*c-s*i*f+t*l*f)*C,e[8]=L*C,e[9]=(g*d*a-u*_*a-g*n*f+t*_*f+u*n*m-t*d*m)*C,e[10]=(s*_*a-g*o*a+g*n*c-t*_*c-s*n*m+t*o*m)*C,e[11]=(u*o*a-s*d*a-u*n*c+t*d*c+s*n*f-t*o*f)*C,e[12]=S*C,e[13]=(u*_*i-g*d*i+g*n*h-t*_*h-u*n*x+t*d*x)*C,e[14]=(g*o*i-s*_*i-g*n*l+t*_*l+s*n*x-t*o*x)*C,e[15]=(s*d*i-u*o*i+u*n*l-t*d*l-s*n*h+t*o*h)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),a=1-n,s=e.x,o=e.y,l=e.z,c=a*s,u=a*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*s,0,c*l-i*o,u*l+i*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,u=s+s,d=o+o,h=a*c,f=a*u,g=a*d,_=s*u,x=s*d,m=o*d,p=l*c,T=l*u,L=l*d,S=n.x,v=n.y,C=n.z;return i[0]=(1-(_+m))*S,i[1]=(f+L)*S,i[2]=(g-T)*S,i[3]=0,i[4]=(f-L)*v,i[5]=(1-(h+m))*v,i[6]=(x+p)*v,i[7]=0,i[8]=(g+T)*C,i[9]=(x-p)*C,i[10]=(1-(h+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,a=jn.set(i[0],i[1],i[2]).length(),s=jn.set(i[4],i[5],i[6]).length(),o=jn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],Ot.copy(this);let c=1/a,u=1/s,d=1/o;return Ot.elements[0]*=c,Ot.elements[1]*=c,Ot.elements[2]*=c,Ot.elements[4]*=u,Ot.elements[5]*=u,Ot.elements[6]*=u,Ot.elements[8]*=d,Ot.elements[9]*=d,Ot.elements[10]*=d,t.setFromRotationMatrix(Ot),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,i,a,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let o=this.elements,l=2*a/(t-e),c=2*a/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),h=-(s+a)/(s-a),f=-2*s*a/(s-a);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,a,s){let o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-a),d=(t+e)*l,h=(n+i)*c,f=(s+a)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};xe.prototype.isMatrix4=!0;var jn=new w,Ot=new xe,ou=new w(0,0,0),lu=new w(1,1,1),hn=new w,rr=new w,At=new w,Do=new xe,No=new wt,St=class{constructor(e=0,t=0,n=0,i=St.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._order=i||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,n){let i=e.elements,a=i[0],s=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-zt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Do.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Do,t,n)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return No.setFromEuler(this),this.setFromQuaternion(No,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new w(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};St.prototype.isEuler=!0;St.DefaultOrder="XYZ";St.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var wa=class{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}},cu=0,Io=new w,Qn=new wt,Jt=new xe,ar=new w,Ri=new w,du=new w,uu=new wt,Uo=new w(1,0,0),zo=new w(0,1,0),Oo=new w(0,0,1),hu={type:"added"},Bo={type:"removed"},ke=class extends qt{constructor(){super();Object.defineProperty(this,"id",{value:cu++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DefaultUp.clone();let e=new w,t=new St,n=new wt,i=new w(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xe},normalMatrix:{value:new nt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=ke.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.premultiply(Qn),this}rotateX(e){return this.rotateOnAxis(Uo,e)}rotateY(e){return this.rotateOnAxis(zo,e)}rotateZ(e){return this.rotateOnAxis(Oo,e)}translateOnAxis(e,t){return Io.copy(e).applyQuaternion(this.quaternion),this.position.add(Io.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uo,e)}translateY(e){return this.translateOnAxis(zo,e)}translateZ(e){return this.translateOnAxis(Oo,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ar.copy(e):ar.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(Ri,ar,this.up):Jt.lookAt(ar,Ri,this.up),this.quaternion.setFromRotationMatrix(Jt),i&&(Jt.extractRotation(i.matrixWorld),Qn.setFromRotationMatrix(Jt),this.quaternion.premultiply(Qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bo)),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Bo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new w),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new wt),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,e,du),e}getWorldScale(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new w),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,uu,e),e}getWorldDirection(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new w),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(a(e.animations,l))}}if(t){let o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),f=s(e.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f)}return n.object=i,n;function s(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};ke.DefaultUp=new w(0,1,0);ke.DefaultMatrixAutoUpdate=!0;ke.prototype.isObject3D=!0;var Ma=new w,fu=new w,pu=new nt,Bt=class{constructor(e=new w(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ma.subVectors(n,t).cross(fu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new w),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new w);let n=e.delta(Ma),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(n).multiplyScalar(a).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new w),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||pu.getNormalMatrix(e),i=this.coplanarPoint(Ma).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};Bt.prototype.isPlane=!0;var Ht=new w,Kt=new w,Aa=new w,en=new w,qn=new w,Zn=new w,Ho=new w,Sa=new w,Ea=new w,Ta=new w,Qe=class{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new w),i.subVectors(n,t),Ht.subVectors(e,t),i.cross(Ht);let a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){Ht.subVectors(i,t),Kt.subVectors(n,t),Aa.subVectors(e,t);let s=Ht.dot(Ht),o=Ht.dot(Kt),l=Ht.dot(Aa),c=Kt.dot(Kt),u=Kt.dot(Aa),d=s*c-o*o;if(a===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),a=new w),d===0)return a.set(-2,-1,-1);let h=1/d,f=(c*l-o*u)*h,g=(s*u-o*l)*h;return a.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,en),en.x>=0&&en.y>=0&&en.x+en.y<=1}static getUV(e,t,n,i,a,s,o,l){return this.getBarycoord(e,t,n,i,en),l.set(0,0),l.addScaledVector(a,en.x),l.addScaledVector(s,en.y),l.addScaledVector(o,en.z),l}static isFrontFacing(e,t,n,i){return Ht.subVectors(n,t),Kt.subVectors(e,t),Ht.cross(Kt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),Kt.subVectors(this.a,this.b),Ht.cross(Kt).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new w),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qe.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Bt),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qe.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,a){return Qe.getUV(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return Qe.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qe.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new w);let n=this.a,i=this.b,a=this.c,s,o;qn.subVectors(i,n),Zn.subVectors(a,n),Sa.subVectors(e,n);let l=qn.dot(Sa),c=Zn.dot(Sa);if(l<=0&&c<=0)return t.copy(n);Ea.subVectors(e,i);let u=qn.dot(Ea),d=Zn.dot(Ea);if(u>=0&&d<=u)return t.copy(i);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(qn,s);Ta.subVectors(e,a);let f=qn.dot(Ta),g=Zn.dot(Ta);if(g>=0&&f<=g)return t.copy(a);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Zn,o);let x=u*g-f*d;if(x<=0&&d-u>=0&&f-g>=0)return Ho.subVectors(a,i),o=(d-u)/(d-u+(f-g)),t.copy(i).addScaledVector(Ho,o);let m=1/(x+_+h);return s=_*m,o=h*m,t.copy(n).addScaledVector(qn,s).addScaledVector(Zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mu=0;function tn(){Object.defineProperty(this,"id",{value:mu++}),this.uuid=Pi(),this.name="",this.type="Material",this.fog=!0,this.blending=Ei,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=lo,this.blendDst=co,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=$r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}tn.prototype=Object.assign(Object.create(qt.prototype),{constructor:tn,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(r){if(r!==void 0)for(let e in r){let t=r[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===io;continue}let n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(t):n&&n.isVector3&&t&&t.isVector3?n.copy(t):this[e]=t}},toJSON:function(r){let e=r===void 0||typeof r=="string";e&&(r={textures:{},images:{}});let t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(r).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(r).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(r).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(r).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(r).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(r).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(r).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(r).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(r).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(r).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(r).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(r).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(r).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(r).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(r).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(r).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(r).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(t.blending=this.blending),this.side!==Qi&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function n(i){let a=[];for(let s in i){let o=i[s];delete o.metadata,a.push(o)}return a}if(e){let i=n(r.textures),a=n(r.images);i.length>0&&(t.textures=i),a.length>0&&(t.images=a)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(r){this.name=r.name,this.fog=r.fog,this.blending=r.blending,this.side=r.side,this.vertexColors=r.vertexColors,this.opacity=r.opacity,this.transparent=r.transparent,this.blendSrc=r.blendSrc,this.blendDst=r.blendDst,this.blendEquation=r.blendEquation,this.blendSrcAlpha=r.blendSrcAlpha,this.blendDstAlpha=r.blendDstAlpha,this.blendEquationAlpha=r.blendEquationAlpha,this.depthFunc=r.depthFunc,this.depthTest=r.depthTest,this.depthWrite=r.depthWrite,this.stencilWriteMask=r.stencilWriteMask,this.stencilFunc=r.stencilFunc,this.stencilRef=r.stencilRef,this.stencilFuncMask=r.stencilFuncMask,this.stencilFail=r.stencilFail,this.stencilZFail=r.stencilZFail,this.stencilZPass=r.stencilZPass,this.stencilWrite=r.stencilWrite;let e=r.clippingPlanes,t=null;if(e!==null){let n=e.length;t=new Array(n);for(let i=0;i!==n;++i)t[i]=e[i].clone()}return this.clippingPlanes=t,this.clipIntersection=r.clipIntersection,this.clipShadows=r.clipShadows,this.shadowSide=r.shadowSide,this.colorWrite=r.colorWrite,this.precision=r.precision,this.polygonOffset=r.polygonOffset,this.polygonOffsetFactor=r.polygonOffsetFactor,this.polygonOffsetUnits=r.polygonOffsetUnits,this.dithering=r.dithering,this.alphaTest=r.alphaTest,this.alphaToCoverage=r.alphaToCoverage,this.premultipliedAlpha=r.premultipliedAlpha,this.visible=r.visible,this.toneMapped=r.toneMapped,this.userData=JSON.parse(JSON.stringify(r.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(tn.prototype,"needsUpdate",{set:function(r){r===!0&&this.version++}});var Go={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gt={h:0,s:0,l:0},sr={h:0,s:0,l:0};function La(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Pa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Me=class{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=nu(e,1),t=zt(t,0,1),n=zt(n,0,1),t===0)this.r=this.g=this.b=n;else{let i=n<=.5?n*(1+t):n+t-n*t,a=2*n-i;this.r=La(a,i,e+1/3),this.g=La(a,i,e),this.b=La(a,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i,a=n[1],s=n[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){let o=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(o,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let i=n[1],a=i.length;if(a===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(a===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=Go[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){let n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}copyLinearToSRGB(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});let t=this.r,n=this.g,i=this.b,a=Math.max(t,n,i),s=Math.min(t,n,i),o,l,c=(s+a)/2;if(s===a)o=0,l=0;else{let u=a-s;switch(l=c<=.5?u/(a+s):u/(2-a-s),a){case t:o=(n-i)/u+(n<i?6:0);break;case n:o=(i-t)/u+2;break;case i:o=(t-n)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Gt),Gt.h+=e,Gt.s+=t,Gt.l+=n,this.setHSL(Gt.h,Gt.s,Gt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gt),e.getHSL(sr);let n=ha(Gt.h,sr.h,t),i=ha(Gt.s,sr.s,t),a=ha(Gt.l,sr.l,t);return this.setHSL(n,i,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};Me.NAMES=Go;Me.prototype.isColor=!0;Me.prototype.r=1;Me.prototype.g=1;Me.prototype.b=1;var fn=class extends tn{constructor(e){super();this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}};fn.prototype.isMeshBasicMaterial=!0;var Be=new w,or=new ae,Ue=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=da,this.updateRange={offset:0,count:-1},this.version=0,this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,n=0;for(let i=0,a=e.length;i<a;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new Me),t[n++]=s.r,t[n++]=s.g,t[n++]=s.b}return this}copyVector2sArray(e){let t=this.array,n=0;for(let i=0,a=e.length;i<a;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new ae),t[n++]=s.x,t[n++]=s.y}return this}copyVector3sArray(e){let t=this.array,n=0;for(let i=0,a=e.length;i<a;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new w),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z}return this}copyVector4sArray(e){let t=this.array,n=0;for(let i=0,a=e.length;i<a;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new Ce),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z,t[n++]=s.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.applyMatrix3(e),this.setXY(t,or.x,or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Be.fromBufferAttribute(this,t),Be.applyMatrix3(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Be.x=this.getX(t),Be.y=this.getY(t),Be.z=this.getZ(t),Be.applyMatrix4(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Be.x=this.getX(t),Be.y=this.getY(t),Be.z=this.getZ(t),Be.applyNormalMatrix(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Be.x=this.getX(t),Be.y=this.getY(t),Be.z=this.getZ(t),Be.transformDirection(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==da&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};Ue.prototype.isBufferAttribute=!0;var Ca=class extends Ue{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ra=class extends Ue{constructor(e,t,n){super(new Uint32Array(e),t,n)}},bt=class extends Ue{constructor(e,t,n){super(new Float32Array(e),t,n)}};function ko(r){if(r.length===0)return-Infinity;let e=r[0];for(let t=1,n=r.length;t<n;++t)r[t]>e&&(e=r[t]);return e}var gu=0,Xt=new xe,Da=new ke,$n=new w,Et=new Mt,Di=new Mt,it=new w,ze=class extends qt{constructor(){super();Object.defineProperty(this,"id",{value:gu++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ko(e)>65535?Ra:Ca)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let a=new nt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return Da.lookAt(e),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-Infinity,-Infinity,-Infinity),new w(Infinity,Infinity,Infinity));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let a=t[n];Et.setFromBufferAttribute(a),this.morphTargetsRelative?(it.addVectors(this.boundingBox.min,Et.min),this.boundingBox.expandByPoint(it),it.addVectors(this.boundingBox.max,Et.max),this.boundingBox.expandByPoint(it)):(this.boundingBox.expandByPoint(Et.min),this.boundingBox.expandByPoint(Et.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,Infinity);return}if(e){let n=this.boundingSphere.center;if(Et.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){let o=t[a];Di.setFromBufferAttribute(o),this.morphTargetsRelative?(it.addVectors(Et.min,Di.min),Et.expandByPoint(it),it.addVectors(Et.max,Di.max),Et.expandByPoint(it)):(Et.expandByPoint(Di.min),Et.expandByPoint(Di.max))}Et.getCenter(n);let i=0;for(let a=0,s=e.count;a<s;a++)it.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(it));if(t)for(let a=0,s=t.length;a<s;a++){let o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)it.fromBufferAttribute(o,c),l&&($n.fromBufferAttribute(e,c),it.add($n)),i=Math.max(i,n.distanceToSquared(it))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,a=t.normal.array,s=t.uv.array,o=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new Ue(new Float32Array(4*o),4));let l=t.tangent.array,c=[],u=[];for(let W=0;W<o;W++)c[W]=new w,u[W]=new w;let d=new w,h=new w,f=new w,g=new ae,_=new ae,x=new ae,m=new w,p=new w;function T(W,q,B){d.fromArray(i,W*3),h.fromArray(i,q*3),f.fromArray(i,B*3),g.fromArray(s,W*2),_.fromArray(s,q*2),x.fromArray(s,B*2),h.sub(d),f.sub(d),_.sub(g),x.sub(g);let P=1/(_.x*x.y-x.x*_.y);!isFinite(P)||(m.copy(h).multiplyScalar(x.y).addScaledVector(f,-_.y).multiplyScalar(P),p.copy(f).multiplyScalar(_.x).addScaledVector(h,-x.x).multiplyScalar(P),c[W].add(m),c[q].add(m),c[B].add(m),u[W].add(p),u[q].add(p),u[B].add(p))}let L=this.groups;L.length===0&&(L=[{start:0,count:n.length}]);for(let W=0,q=L.length;W<q;++W){let B=L[W],P=B.start,D=B.count;for(let R=P,F=P+D;R<F;R+=3)T(n[R+0],n[R+1],n[R+2])}let S=new w,v=new w,C=new w,O=new w;function z(W){C.fromArray(a,W*3),O.copy(C);let q=c[W];S.copy(q),S.sub(C.multiplyScalar(C.dot(q))).normalize(),v.crossVectors(O,q);let P=v.dot(u[W])<0?-1:1;l[W*4]=S.x,l[W*4+1]=S.y,l[W*4+2]=S.z,l[W*4+3]=P}for(let W=0,q=L.length;W<q;++W){let B=L[W],P=B.start,D=B.count;for(let R=P,F=P+D;R<F;R+=3)z(n[R+0]),z(n[R+1]),z(n[R+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let i=new w,a=new w,s=new w,o=new w,l=new w,c=new w,u=new w,d=new w;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),_=e.getX(h+1),x=e.getX(h+2);i.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),u.subVectors(s,a),d.subVectors(i,a),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,a),d.subVectors(i,a),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(e.attributes[i]===void 0)continue;let s=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,u=Math.min(l.length,s.length-c);for(let d=0,h=c;d<u;d++,h++)s[h]=l[d]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)it.fromBufferAttribute(e,t),it.normalize(),e.setXYZ(t,it.x,it.y,it.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let _=0,x=l.length;_<x;_++){f=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new Ue(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new ze,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new ze().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let a=e.morphAttributes;for(let c in a){let u=[],d=a[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,u=s.length;c<u;c++){let d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};ze.prototype.isBufferGeometry=!0;var Vo=new xe,Jn=new Dn,Na=new Yn,pn=new w,mn=new w,gn=new w,Ia=new w,Ua=new w,za=new w,lr=new w,cr=new w,dr=new w,ur=new ae,hr=new ae,fr=new ae,Oa=new w,pr=new w,kt=class extends ke{constructor(e=new ze,t=new fn){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){let o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){let n=this.geometry,i=this.material,a=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(a),e.ray.intersectsSphere(Na)===!1)||(Vo.copy(a).invert(),Jn.copy(e.ray).applyMatrix4(Vo),n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1))return;let s;if(n.isBufferGeometry){let o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,d=n.attributes.uv,h=n.attributes.uv2,f=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let _=0,x=f.length;_<x;_++){let m=f[_],p=i[m.materialIndex],T=Math.max(m.start,g.start),L=Math.min(m.start+m.count,g.start+g.count);for(let S=T,v=L;S<v;S+=3){let C=o.getX(S),O=o.getX(S+1),z=o.getX(S+2);s=mr(this,p,e,Jn,l,c,u,d,h,C,O,z),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,g.start),x=Math.min(o.count,g.start+g.count);for(let m=_,p=x;m<p;m+=3){let T=o.getX(m),L=o.getX(m+1),S=o.getX(m+2);s=mr(this,i,e,Jn,l,c,u,d,h,T,L,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let _=0,x=f.length;_<x;_++){let m=f[_],p=i[m.materialIndex],T=Math.max(m.start,g.start),L=Math.min(m.start+m.count,g.start+g.count);for(let S=T,v=L;S<v;S+=3){let C=S,O=S+1,z=S+2;s=mr(this,p,e,Jn,l,c,u,d,h,C,O,z),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let m=_,p=x;m<p;m+=3){let T=m,L=m+1,S=m+2;s=mr(this,i,e,Jn,l,c,u,d,h,T,L,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};kt.prototype.isMesh=!0;function _u(r,e,t,n,i,a,s,o){let l;if(e.side===et?l=n.intersectTriangle(s,a,i,!0,o):l=n.intersectTriangle(i,a,s,e.side!==qi,o),l===null)return null;pr.copy(o),pr.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(pr);return c<t.near||c>t.far?null:{distance:c,point:pr.clone(),object:r}}function mr(r,e,t,n,i,a,s,o,l,c,u,d){pn.fromBufferAttribute(i,c),mn.fromBufferAttribute(i,u),gn.fromBufferAttribute(i,d);let h=r.morphTargetInfluences;if(e.morphTargets&&a&&h){lr.set(0,0,0),cr.set(0,0,0),dr.set(0,0,0);for(let g=0,_=a.length;g<_;g++){let x=h[g],m=a[g];x!==0&&(Ia.fromBufferAttribute(m,c),Ua.fromBufferAttribute(m,u),za.fromBufferAttribute(m,d),s?(lr.addScaledVector(Ia,x),cr.addScaledVector(Ua,x),dr.addScaledVector(za,x)):(lr.addScaledVector(Ia.sub(pn),x),cr.addScaledVector(Ua.sub(mn),x),dr.addScaledVector(za.sub(gn),x)))}pn.add(lr),mn.add(cr),gn.add(dr)}r.isSkinnedMesh&&e.skinning&&(r.boneTransform(c,pn),r.boneTransform(u,mn),r.boneTransform(d,gn));let f=_u(r,e,t,n,pn,mn,gn,Oa);if(f){o&&(ur.fromBufferAttribute(o,c),hr.fromBufferAttribute(o,u),fr.fromBufferAttribute(o,d),f.uv=Qe.getUV(Oa,pn,mn,gn,ur,hr,fr,new ae)),l&&(ur.fromBufferAttribute(l,c),hr.fromBufferAttribute(l,u),fr.fromBufferAttribute(l,d),f.uv2=Qe.getUV(Oa,pn,mn,gn,ur,hr,fr,new ae));let g={a:c,b:u,c:d,normal:new w,materialIndex:0};Qe.getNormal(pn,mn,gn,g.normal),f.face=g}return f}var gr=class extends ze{constructor(e=1,t=1,n=1,i=1,a=1,s=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:s};let o=this;i=Math.floor(i),a=Math.floor(a),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,t,e,s,a,0),g("z","y","x",1,-1,n,t,-e,s,a,1),g("x","z","y",1,1,e,n,t,i,s,2),g("x","z","y",1,-1,e,n,-t,i,s,3),g("x","y","z",1,-1,e,t,n,i,a,4),g("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(d,2));function g(_,x,m,p,T,L,S,v,C,O,z){let W=L/C,q=S/O,B=L/2,P=S/2,D=v/2,R=C+1,F=O+1,j=0,$=0,J=new w;for(let re=0;re<F;re++){let ie=re*q-P;for(let de=0;de<R;de++){let fe=de*W-B;J[_]=fe*p,J[x]=ie*T,J[m]=D,c.push(J.x,J.y,J.z),J[_]=0,J[x]=0,J[m]=v>0?1:-1,u.push(J.x,J.y,J.z),d.push(de/C),d.push(1-re/O),j+=1}}for(let re=0;re<O;re++)for(let ie=0;ie<C;ie++){let de=h+ie+R*re,fe=h+ie+R*(re+1),H=h+(ie+1)+R*(re+1),Le=h+(ie+1)+R*re;l.push(de,fe,Le),l.push(fe,H,Le),$+=6}o.addGroup(f,$,z),f+=$,h+=j}}};function Kn(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function lt(r){let e={};for(let t=0;t<r.length;t++){let n=Kn(r[t]);for(let i in n)e[i]=n[i]}return e}var _n={clone:Kn,merge:lt},xu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends tn{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=xu,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kn(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};We.prototype.isShaderMaterial=!0;var _r=class extends ke{constructor(){super();this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new w),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};_r.prototype.isCamera=!0;var pt=class extends _r{constructor(e=50,t=1,n=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ua*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};pt.prototype.isPerspectiveCamera=!0;var ei=90,ti=1,xr=class extends ke{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new pt(ei,ti,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new w(1,0,0)),this.add(i);let a=new pt(ei,ti,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new w(-1,0,0)),this.add(a);let s=new pt(ei,ti,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new w(0,1,0)),this.add(s);let o=new pt(ei,ti,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new w(0,-1,0)),this.add(o);let l=new pt(ei,ti,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new w(0,0,1)),this.add(l);let c=new pt(ei,ti,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new w(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,a,s,o,l,c]=this.children,u=e.xr.enabled,d=e.getRenderTarget();e.xr.enabled=!1;let h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(d),e.xr.enabled=u}},Ni=class extends yt{constructor(e,t,n,i,a,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Jr,o=o!==void 0?o:Gn,super(e,t,n,i,a,s,o,l,c,u),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};Ni.prototype.isCubeTexture=!0;var Ba=class extends ot{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new Ni(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:je,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=tt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new gr(5,5,5),a=new We({name:"CubemapFromEquirect",uniforms:Kn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:et,blending:Si});a.uniforms.tEquirect.value=t;let s=new kt(i,a),o=t.minFilter;return t.minFilter===ra&&(t.minFilter=je),new xr(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){let a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(a)}};Ba.prototype.isWebGLCubeRenderTarget=!0;var Ha=class extends yt{constructor(e,t,n,i,a,s,o,l,c,u,d,h){super(null,s,o,l,c,u,i,a,d,h);this.image={data:e||null,width:t||1,height:n||1},this.magFilter=c!==void 0?c:st,this.minFilter=u!==void 0?u:st,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Ha.prototype.isDataTexture=!0;var ni=new Yn,vr=new w,yr=class{constructor(e=new Bt,t=new Bt,n=new Bt,i=new Bt,a=new Bt,s=new Bt){this.planes=[e,t,n,i,a,s]}set(e,t,n,i,a,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],a=n[1],s=n[2],o=n[3],l=n[4],c=n[5],u=n[6],d=n[7],h=n[8],f=n[9],g=n[10],_=n[11],x=n[12],m=n[13],p=n[14],T=n[15];return t[0].setComponents(o-i,d-l,_-h,T-x).normalize(),t[1].setComponents(o+i,d+l,_+h,T+x).normalize(),t[2].setComponents(o+a,d+c,_+f,T+m).normalize(),t[3].setComponents(o-a,d-c,_-f,T-m).normalize(),t[4].setComponents(o-s,d-u,_-g,T-p).normalize(),t[5].setComponents(o+s,d+u,_+g,T+p).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(vr.x=i.normal.x>0?e.max.x:e.min.x,vr.y=i.normal.y>0?e.max.y:e.min.y,vr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(vr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wo(){let r=null,e=!1,t=null,n=null;function i(a,s){t(a,s),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function yu(r,e){let t=e.isWebGL2,n=new WeakMap;function i(c,u){let d=c.array,h=c.usage,f=r.createBuffer();r.bindBuffer(u,f),r.bufferData(u,d,h),c.onUploadCallback();let g=5126;return d instanceof Float32Array?g=5126:d instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):d instanceof Uint16Array?c.isFloat16BufferAttribute?t?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:d instanceof Int16Array?g=5122:d instanceof Uint32Array?g=5125:d instanceof Int32Array?g=5124:d instanceof Int8Array?g=5120:d instanceof Uint8Array&&(g=5121),{buffer:f,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function a(c,u,d){let h=u.array,f=u.updateRange;r.bindBuffer(d,c),f.count===-1?r.bufferSubData(d,0,h):(t?r.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):r.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1)}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);d===void 0?n.set(c,i(c,u)):d.version<c.version&&(a(d.buffer,c,u),d.version=c.version)}return{get:s,remove:o,update:l}}var Xo=class extends ze{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let a=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],_=[],x=[];for(let m=0;m<u;m++){let p=m*h-s;for(let T=0;T<c;T++){let L=T*d-a;g.push(L,-p,0),_.push(0,0,1),x.push(T/o),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let p=0;p<o;p++){let T=p+c*m,L=p+c*(m+1),S=p+1+c*(m+1),v=p+1+c*m;f.push(T,L,v),f.push(L,S,v)}this.setIndex(f),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(x,2))}},bu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,wu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mu=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Au=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Su=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eu="vec3 transformed = vec3( position );",Tu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lu=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
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
#endif`,Pu=`#ifdef USE_BUMPMAP
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
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ou=`#define PI 3.141592653589793
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
}`,Bu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hu=`vec3 transformedNormal = objectNormal;
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
#endif`,Gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ku=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yu=`
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
}`,ju=`#ifdef USE_ENVMAP
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
#endif`,Qu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qu=`#ifdef USE_ENVMAP
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
#endif`,Zu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$u=`#ifdef USE_ENVMAP
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
#endif`,Ju=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,Ku=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,th=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nh=`#ifdef USE_GRADIENTMAP
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
}`,ih=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,rh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ah=`vec3 diffuse = vec3( 1.0 );
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
#endif`,sh=`uniform bool receiveShadow;
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
#endif`,oh=`#if defined( USE_ENVMAP )
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
#endif`,lh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ch=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,dh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uh=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,hh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
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
#endif`,fh=`struct PhysicalMaterial {
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
}`,ph=`
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
#endif`,mh=`#if defined( RE_IndirectDiffuse )
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
#endif`,gh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,_h=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bh=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,wh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ah=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Th=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Lh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Ph=`#ifdef USE_MORPHTARGETS
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
#endif`,Fh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Ch=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Rh=`#ifdef USE_NORMALMAP
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
#endif`,Dh=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Nh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ih=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Uh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Oh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vh=`#ifdef USE_SHADOWMAP
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
#endif`,Wh=`#ifdef USE_SHADOWMAP
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
#endif`,Xh=`#ifdef USE_SHADOWMAP
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
#endif`,Yh=`float getShadowMask() {
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
}`,jh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qh=`#ifdef USE_SKINNING
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
#endif`,qh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zh=`#ifdef USE_SKINNING
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
#endif`,$h=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ef=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tf=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,nf=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,rf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,af=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,sf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,of=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,lf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,cf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,df=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,uf=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ff=`#include <envmap_common_pars_fragment>
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
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mf=`#if DEPTH_PACKING == 3200
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
}`,gf=`#include <common>
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
}`,_f=`#define DISTANCE
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
}`,xf=`#define DISTANCE
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
}`,vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bf=`uniform vec3 diffuse;
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
}`,wf=`uniform float scale;
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
}`,Mf=`uniform vec3 diffuse;
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
}`,Af=`#include <common>
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
}`,Sf=`uniform vec3 diffuse;
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
}`,Ef=`#define LAMBERT
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
}`,Tf=`#define MATCAP
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
}`,Lf=`#define MATCAP
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
}`,Pf=`#define TOON
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
}`,Ff=`#define TOON
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
}`,Cf=`#define PHONG
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
}`,Rf=`#define PHONG
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
}`,Df=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
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
#include <transmissionmap_pars_fragment>
#include <bsdfs>
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
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
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
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
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
}`,If=`#define NORMAL
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
}`,Uf=`#define NORMAL
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
}`,zf=`uniform vec3 diffuse;
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
}`,Of=`uniform float size;
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
}`,Bf=`uniform vec3 color;
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
}`,Hf=`#include <common>
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
}`,Gf=`uniform vec3 diffuse;
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
}`,kf=`uniform float rotation;
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
}`,be={alphamap_fragment:bu,alphamap_pars_fragment:wu,alphatest_fragment:Mu,aomap_fragment:Au,aomap_pars_fragment:Su,begin_vertex:Eu,beginnormal_vertex:Tu,bsdfs:Lu,bumpmap_pars_fragment:Pu,clipping_planes_fragment:Fu,clipping_planes_pars_fragment:Cu,clipping_planes_pars_vertex:Ru,clipping_planes_vertex:Du,color_fragment:Nu,color_pars_fragment:Iu,color_pars_vertex:Uu,color_vertex:zu,common:Ou,cube_uv_reflection_fragment:Bu,defaultnormal_vertex:Hu,displacementmap_pars_vertex:Gu,displacementmap_vertex:ku,emissivemap_fragment:Vu,emissivemap_pars_fragment:Wu,encodings_fragment:Xu,encodings_pars_fragment:Yu,envmap_fragment:ju,envmap_common_pars_fragment:Qu,envmap_pars_fragment:qu,envmap_pars_vertex:Zu,envmap_physical_pars_fragment:oh,envmap_vertex:$u,fog_vertex:Ju,fog_pars_vertex:Ku,fog_fragment:eh,fog_pars_fragment:th,gradientmap_pars_fragment:nh,lightmap_fragment:ih,lightmap_pars_fragment:rh,lights_lambert_vertex:ah,lights_pars_begin:sh,lights_toon_fragment:lh,lights_toon_pars_fragment:ch,lights_phong_fragment:dh,lights_phong_pars_fragment:uh,lights_physical_fragment:hh,lights_physical_pars_fragment:fh,lights_fragment_begin:ph,lights_fragment_maps:mh,lights_fragment_end:gh,logdepthbuf_fragment:_h,logdepthbuf_pars_fragment:xh,logdepthbuf_pars_vertex:vh,logdepthbuf_vertex:yh,map_fragment:bh,map_pars_fragment:wh,map_particle_fragment:Mh,map_particle_pars_fragment:Ah,metalnessmap_fragment:Sh,metalnessmap_pars_fragment:Eh,morphnormal_vertex:Th,morphtarget_pars_vertex:Lh,morphtarget_vertex:Ph,normal_fragment_begin:Fh,normal_fragment_maps:Ch,normalmap_pars_fragment:Rh,clearcoat_normal_fragment_begin:Dh,clearcoat_normal_fragment_maps:Nh,clearcoat_pars_fragment:Ih,packing:Uh,premultiplied_alpha_fragment:zh,project_vertex:Oh,dithering_fragment:Bh,dithering_pars_fragment:Hh,roughnessmap_fragment:Gh,roughnessmap_pars_fragment:kh,shadowmap_pars_fragment:Vh,shadowmap_pars_vertex:Wh,shadowmap_vertex:Xh,shadowmask_pars_fragment:Yh,skinbase_vertex:jh,skinning_pars_vertex:Qh,skinning_vertex:qh,skinnormal_vertex:Zh,specularmap_fragment:$h,specularmap_pars_fragment:Jh,tonemapping_fragment:Kh,tonemapping_pars_fragment:ef,transmissionmap_fragment:tf,transmissionmap_pars_fragment:nf,uv_pars_fragment:rf,uv_pars_vertex:af,uv_vertex:sf,uv2_pars_fragment:of,uv2_pars_vertex:lf,uv2_vertex:cf,worldpos_vertex:df,background_frag:uf,background_vert:hf,cube_frag:ff,cube_vert:pf,depth_frag:mf,depth_vert:gf,distanceRGBA_frag:_f,distanceRGBA_vert:xf,equirect_frag:vf,equirect_vert:yf,linedashed_frag:bf,linedashed_vert:wf,meshbasic_frag:Mf,meshbasic_vert:Af,meshlambert_frag:Sf,meshlambert_vert:Ef,meshmatcap_frag:Tf,meshmatcap_vert:Lf,meshtoon_frag:Pf,meshtoon_vert:Ff,meshphong_frag:Cf,meshphong_vert:Rf,meshphysical_frag:Df,meshphysical_vert:Nf,normal_frag:If,normal_vert:Uf,points_frag:zf,points_vert:Of,shadow_frag:Bf,shadow_vert:Hf,sprite_frag:Gf,sprite_vert:kf},te={common:{diffuse:{value:new Me(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new nt},uv2Transform:{value:new nt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Me(15658734)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new nt}}},Yt={basic:{uniforms:lt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:lt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.fog,te.lights,{emissive:{value:new Me(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:lt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:lt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:lt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Me(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:lt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:lt([te.points,te.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:lt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:lt([te.common,te.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:lt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:be.normal_vert,fragmentShader:be.normal_frag},sprite:{uniforms:lt([te.sprite,te.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null}},vertexShader:be.background_vert,fragmentShader:be.background_frag},cube:{uniforms:lt([te.envmap,{opacity:{value:1}}]),vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:lt([te.common,te.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:lt([te.lights,te.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};Yt.physical={uniforms:lt([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ae(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new Me(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};function Vf(r,e,t,n,i){let a=new Me(0),s=0,o,l,c=null,u=0,d=null;function h(g,_,x,m){let p=_.isScene===!0?_.background:null;p&&p.isTexture&&(p=e.get(p));let T=r.xr,L=T.getSession&&T.getSession();L&&L.environmentBlendMode==="additive"&&(p=null),p===null?f(a,s):p&&p.isColor&&(f(p,1),m=!0),(r.autoClear||m)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),p&&(p.isCubeTexture||p.mapping===ea)?(l===void 0&&(l=new kt(new gr(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:Kn(Yt.cube.uniforms),vertexShader:Yt.cube.vertexShader,fragmentShader:Yt.cube.fragmentShader,side:et,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,v,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p._needsFlipEnvMap?-1:1,(c!==p||u!==p.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,c=p,u=p.version,d=r.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(o===void 0&&(o=new kt(new Xo(2,2),new We({name:"BackgroundMaterial",uniforms:Kn(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),o.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||u!==p.version||d!==r.toneMapping)&&(o.material.needsUpdate=!0,c=p,u=p.version,d=r.toneMapping),g.unshift(o,o.geometry,o.material,0,0,null))}function f(g,_){t.buffers.color.setClear(g.r,g.g,g.b,_,i)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),s=_,f(a,s)},getClearAlpha:function(){return s},setClearAlpha:function(g){s=g,f(a,s)},render:h}}function Wf(r,e,t,n){let i=r.getParameter(34921),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||a!==null,o={},l=_(null),c=l;function u(P,D,R,F,j){let $=!1;if(s){let J=g(F,R,D);c!==J&&(c=J,h(c.object)),$=x(F,j),$&&m(F,j)}else{let J=D.wireframe===!0;(c.geometry!==F.id||c.program!==R.id||c.wireframe!==J)&&(c.geometry=F.id,c.program=R.id,c.wireframe=J,$=!0)}P.isInstancedMesh===!0&&($=!0),j!==null&&t.update(j,34963),$&&(C(P,D,R,F),j!==null&&r.bindBuffer(34963,t.get(j).buffer))}function d(){return n.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function h(P){return n.isWebGL2?r.bindVertexArray(P):a.bindVertexArrayOES(P)}function f(P){return n.isWebGL2?r.deleteVertexArray(P):a.deleteVertexArrayOES(P)}function g(P,D,R){let F=R.wireframe===!0,j=o[P.id];j===void 0&&(j={},o[P.id]=j);let $=j[D.id];$===void 0&&($={},j[D.id]=$);let J=$[F];return J===void 0&&(J=_(d()),$[F]=J),J}function _(P){let D=[],R=[],F=[];for(let j=0;j<i;j++)D[j]=0,R[j]=0,F[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:R,attributeDivisors:F,object:P,attributes:{},index:null}}function x(P,D){let R=c.attributes,F=P.attributes,j=0;for(let $ in F){let J=R[$],re=F[$];if(J===void 0||J.attribute!==re||J.data!==re.data)return!0;j++}return c.attributesNum!==j||c.index!==D}function m(P,D){let R={},F=P.attributes,j=0;for(let $ in F){let J=F[$],re={};re.attribute=J,J.data&&(re.data=J.data),R[$]=re,j++}c.attributes=R,c.attributesNum=j,c.index=D}function p(){let P=c.newAttributes;for(let D=0,R=P.length;D<R;D++)P[D]=0}function T(P){L(P,0)}function L(P,D){let R=c.newAttributes,F=c.enabledAttributes,j=c.attributeDivisors;R[P]=1,F[P]===0&&(r.enableVertexAttribArray(P),F[P]=1),j[P]!==D&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,D),j[P]=D)}function S(){let P=c.newAttributes,D=c.enabledAttributes;for(let R=0,F=D.length;R<F;R++)D[R]!==P[R]&&(r.disableVertexAttribArray(R),D[R]=0)}function v(P,D,R,F,j,$){n.isWebGL2===!0&&(R===5124||R===5125)?r.vertexAttribIPointer(P,D,R,j,$):r.vertexAttribPointer(P,D,R,F,j,$)}function C(P,D,R,F){if(n.isWebGL2===!1&&(P.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();let j=F.attributes,$=R.getAttributes(),J=D.defaultAttributeValues;for(let re in $){let ie=$[re];if(ie>=0){let de=j[re];if(de!==void 0){let fe=de.normalized,H=de.itemSize,Le=t.get(de);if(Le===void 0)continue;let Ae=Le.buffer,ye=Le.type,ue=Le.bytesPerElement;if(de.isInterleavedBufferAttribute){let we=de.data,Se=we.stride,Pe=de.offset;we&&we.isInstancedInterleavedBuffer?(L(ie,we.meshPerAttribute),F._maxInstanceCount===void 0&&(F._maxInstanceCount=we.meshPerAttribute*we.count)):T(ie),r.bindBuffer(34962,Ae),v(ie,H,ye,fe,Se*ue,Pe*ue)}else de.isInstancedBufferAttribute?(L(ie,de.meshPerAttribute),F._maxInstanceCount===void 0&&(F._maxInstanceCount=de.meshPerAttribute*de.count)):T(ie),r.bindBuffer(34962,Ae),v(ie,H,ye,fe,0,0)}else if(re==="instanceMatrix"){let fe=t.get(P.instanceMatrix);if(fe===void 0)continue;let H=fe.buffer,Le=fe.type;L(ie+0,1),L(ie+1,1),L(ie+2,1),L(ie+3,1),r.bindBuffer(34962,H),r.vertexAttribPointer(ie+0,4,Le,!1,64,0),r.vertexAttribPointer(ie+1,4,Le,!1,64,16),r.vertexAttribPointer(ie+2,4,Le,!1,64,32),r.vertexAttribPointer(ie+3,4,Le,!1,64,48)}else if(re==="instanceColor"){let fe=t.get(P.instanceColor);if(fe===void 0)continue;let H=fe.buffer,Le=fe.type;L(ie,1),r.bindBuffer(34962,H),r.vertexAttribPointer(ie,3,Le,!1,12,0)}else if(J!==void 0){let fe=J[re];if(fe!==void 0)switch(fe.length){case 2:r.vertexAttrib2fv(ie,fe);break;case 3:r.vertexAttrib3fv(ie,fe);break;case 4:r.vertexAttrib4fv(ie,fe);break;default:r.vertexAttrib1fv(ie,fe)}}}}S()}function O(){q();for(let P in o){let D=o[P];for(let R in D){let F=D[R];for(let j in F)f(F[j].object),delete F[j];delete D[R]}delete o[P]}}function z(P){if(o[P.id]===void 0)return;let D=o[P.id];for(let R in D){let F=D[R];for(let j in F)f(F[j].object),delete F[j];delete D[R]}delete o[P.id]}function W(P){for(let D in o){let R=o[D];if(R[P.id]===void 0)continue;let F=R[P.id];for(let j in F)f(F[j].object),delete F[j];delete R[P.id]}}function q(){B(),c!==l&&(c=l,h(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:q,resetDefaultState:B,dispose:O,releaseStatesOfGeometry:z,releaseStatesOfProgram:W,initAttributes:p,enableAttribute:T,disableUnusedAttributes:S}}function Xf(r,e,t,n){let i=n.isWebGL2,a;function s(c){a=c}function o(c,u){r.drawArrays(a,c,u),t.update(u,a,1)}function l(c,u,d){if(d===0)return;let h,f;if(i)h=r,f="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[f](a,c,u,d),t.update(u,a,d)}this.setMode=s,this.render=o,this.renderInstances=l}function Yf(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(v){if(v==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";v="mediump"}return v==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext,o=t.precision!==void 0?t.precision:"highp",l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=t.logarithmicDepthBuffer===!0,u=r.getParameter(34930),d=r.getParameter(35660),h=r.getParameter(3379),f=r.getParameter(34076),g=r.getParameter(34921),_=r.getParameter(36347),x=r.getParameter(36348),m=r.getParameter(36349),p=d>0,T=s||e.has("OES_texture_float"),L=p&&T,S=s?r.getParameter(36183):0;return{isWebGL2:s,getMaxAnisotropy:i,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:d,maxTextureSize:h,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:m,vertexTextures:p,floatFragmentTextures:T,floatVertexTextures:L,maxSamples:S}}function jf(r){let e=this,t=null,n=0,i=!1,a=!1,s=new Bt,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h,f){let g=d.length!==0||h||n!==0||i;return i=h,t=u(d,f,0),n=d.length,g},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1,c()},this.setState=function(d,h,f){let g=d.clippingPlanes,_=d.clipIntersection,x=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||a&&!x)a?u(null):c();else{let p=a?0:n,T=p*4,L=m.clippingState||null;l.value=L,L=u(g,h,T,f);for(let S=0;S!==T;++S)L[S]=t[S];m.clippingState=L,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){let _=d!==null?d.length:0,x=null;if(_!==0){if(x=l.value,g!==!0||x===null){let m=f+_*4,p=h.matrixWorldInverse;o.getNormalMatrix(p),(x===null||x.length<m)&&(x=new Float32Array(m));for(let T=0,L=f;T!==_;++T,L+=4)s.copy(d[T]).applyMatrix4(p,o),s.normal.toArray(x,L),x[L+3]=s.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,x}}function Qf(r){let e=new WeakMap;function t(s,o){return o===fo?s.mapping=Jr:o===po&&(s.mapping=Kr),s}function n(s){if(s&&s.isTexture){let o=s.mapping;if(o===fo||o===po)if(e.has(s)){let l=e.get(s).texture;return t(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let c=r.getRenderTarget(),u=new Ba(l.height/2);return u.fromEquirectangularTexture(r,s),e.set(s,u),r.setRenderTarget(c),s.addEventListener("dispose",i),t(u.texture,s.mapping)}else return null}}return s}function i(s){let o=s.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}function qf(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zf(r,e,t,n){let i={},a=new WeakMap;function s(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete i[h.id];let f=a.get(h);f&&(e.remove(f),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let g in h)e.update(h[g],34962);let f=d.morphAttributes;for(let g in f){let _=f[g];for(let x=0,m=_.length;x<m;x++)e.update(_[x],34962)}}function c(d){let h=[],f=d.index,g=d.attributes.position,_=0;if(f!==null){let p=f.array;_=f.version;for(let T=0,L=p.length;T<L;T+=3){let S=p[T+0],v=p[T+1],C=p[T+2];h.push(S,v,v,C,C,S)}}else{let p=g.array;_=g.version;for(let T=0,L=p.length/3-1;T<L;T+=3){let S=T+0,v=T+1,C=T+2;h.push(S,v,v,C,C,S)}}let x=new(ko(h)>65535?Ra:Ca)(h,1);x.version=_;let m=a.get(d);m&&e.remove(m),a.set(d,x)}function u(d){let h=a.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function $f(r,e,t,n){let i=n.isWebGL2,a;function s(h){a=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,f){r.drawElements(a,f,o,h*l),t.update(f,a,1)}function d(h,f,g){if(g===0)return;let _,x;if(i)_=r,x="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[x](a,f,o,h*l,g),t.update(f,a,g)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=d}function Jf(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case 4:t.triangles+=o*(a/3);break;case 1:t.lines+=o*(a/2);break;case 3:t.lines+=o*(a-1);break;case 2:t.lines+=o*a;break;case 0:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Kf(r,e){return r[0]-e[0]}function ep(r,e){return Math.abs(e[1])-Math.abs(r[1])}function tp(r){let e={},t=new Float32Array(8),n=[];for(let a=0;a<8;a++)n[a]=[a,0];function i(a,s,o,l){let c=a.morphTargetInfluences,u=c===void 0?0:c.length,d=e[s.id];if(d===void 0){d=[];for(let x=0;x<u;x++)d[x]=[x,0];e[s.id]=d}for(let x=0;x<u;x++){let m=d[x];m[0]=x,m[1]=c[x]}d.sort(ep);for(let x=0;x<8;x++)x<u&&d[x][1]?(n[x][0]=d[x][0],n[x][1]=d[x][1]):(n[x][0]=Number.MAX_SAFE_INTEGER,n[x][1]=0);n.sort(Kf);let h=o.morphTargets&&s.morphAttributes.position,f=o.morphNormals&&s.morphAttributes.normal,g=0;for(let x=0;x<8;x++){let m=n[x],p=m[0],T=m[1];p!==Number.MAX_SAFE_INTEGER&&T?(h&&s.getAttribute("morphTarget"+x)!==h[p]&&s.setAttribute("morphTarget"+x,h[p]),f&&s.getAttribute("morphNormal"+x)!==f[p]&&s.setAttribute("morphNormal"+x,f[p]),t[x]=T,g+=T):(h&&s.hasAttribute("morphTarget"+x)===!0&&s.deleteAttribute("morphTarget"+x),f&&s.hasAttribute("morphNormal"+x)===!0&&s.deleteAttribute("morphNormal"+x),t[x]=0)}let _=s.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",t)}return{update:i}}function np(r,e,t,n){let i=new WeakMap;function a(l){let c=n.render.frame,u=l.geometry,d=e.get(l,u);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function s(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}var Ga=class extends yt{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=st,this.minFilter=st,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Ga.prototype.isDataTexture2DArray=!0;var ka=class extends yt{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=st,this.minFilter=st,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};ka.prototype.isDataTexture3D=!0;var Yo=new yt,ip=new Ga,rp=new ka,jo=new Ni,Qo=[],qo=[],Zo=new Float32Array(16),$o=new Float32Array(9),Jo=new Float32Array(4);function ii(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,a=Qo[i];if(a===void 0&&(a=new Float32Array(i),Qo[i]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,r[s].toArray(a,o)}return a}function mt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ct(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ko(r,e){let t=qo[e];t===void 0&&(t=new Int32Array(e),qo[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ap(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function sp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;r.uniform2fv(this.addr,e),ct(t,e)}}function op(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;r.uniform3fv(this.addr,e),ct(t,e)}}function lp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;r.uniform4fv(this.addr,e),ct(t,e)}}function cp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(mt(t,n))return;Jo.set(n),r.uniformMatrix2fv(this.addr,!1,Jo),ct(t,n)}}function dp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(mt(t,n))return;$o.set(n),r.uniformMatrix3fv(this.addr,!1,$o),ct(t,n)}}function up(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(mt(t,n))return;Zo.set(n),r.uniformMatrix4fv(this.addr,!1,Zo),ct(t,n)}}function hp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function fp(r,e){let t=this.cache;mt(t,e)||(r.uniform2iv(this.addr,e),ct(t,e))}function pp(r,e){let t=this.cache;mt(t,e)||(r.uniform3iv(this.addr,e),ct(t,e))}function mp(r,e){let t=this.cache;mt(t,e)||(r.uniform4iv(this.addr,e),ct(t,e))}function gp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function _p(r,e){let t=this.cache;mt(t,e)||(r.uniform2uiv(this.addr,e),ct(t,e))}function xp(r,e){let t=this.cache;mt(t,e)||(r.uniform3uiv(this.addr,e),ct(t,e))}function vp(r,e){let t=this.cache;mt(t,e)||(r.uniform4uiv(this.addr,e),ct(t,e))}function yp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||Yo,i)}function bp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rp,i)}function wp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||jo,i)}function Mp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ip,i)}function Ap(r){switch(r){case 5126:return ap;case 35664:return sp;case 35665:return op;case 35666:return lp;case 35674:return cp;case 35675:return dp;case 35676:return up;case 5124:case 35670:return hp;case 35667:case 35671:return fp;case 35668:case 35672:return pp;case 35669:case 35673:return mp;case 5125:return gp;case 36294:return _p;case 36295:return xp;case 36296:return vp;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return Mp}}function Sp(r,e){r.uniform1fv(this.addr,e)}function Ep(r,e){let t=ii(e,this.size,2);r.uniform2fv(this.addr,t)}function Tp(r,e){let t=ii(e,this.size,3);r.uniform3fv(this.addr,t)}function Lp(r,e){let t=ii(e,this.size,4);r.uniform4fv(this.addr,t)}function Pp(r,e){let t=ii(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Fp(r,e){let t=ii(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Cp(r,e){let t=ii(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Rp(r,e){r.uniform1iv(this.addr,e)}function Dp(r,e){r.uniform2iv(this.addr,e)}function Np(r,e){r.uniform3iv(this.addr,e)}function Ip(r,e){r.uniform4iv(this.addr,e)}function Up(r,e){r.uniform1uiv(this.addr,e)}function zp(r,e){r.uniform2uiv(this.addr,e)}function Op(r,e){r.uniform3uiv(this.addr,e)}function Bp(r,e){r.uniform4uiv(this.addr,e)}function Hp(r,e,t){let n=e.length,i=Ko(t,n);r.uniform1iv(this.addr,i);for(let a=0;a!==n;++a)t.safeSetTexture2D(e[a]||Yo,i[a])}function Gp(r,e,t){let n=e.length,i=Ko(t,n);r.uniform1iv(this.addr,i);for(let a=0;a!==n;++a)t.safeSetTextureCube(e[a]||jo,i[a])}function kp(r){switch(r){case 5126:return Sp;case 35664:return Ep;case 35665:return Tp;case 35666:return Lp;case 35674:return Pp;case 35675:return Fp;case 35676:return Cp;case 5124:case 35670:return Rp;case 35667:case 35671:return Dp;case 35668:case 35672:return Np;case 35669:case 35673:return Ip;case 5125:return Up;case 36294:return zp;case 36295:return Op;case 36296:return Bp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35680:case 36300:case 36308:case 36293:return Gp}}function Vp(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=Ap(e.type)}function el(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=kp(e.type)}el.prototype.updateCache=function(r){let e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),ct(e,r)};function tl(r){this.id=r,this.seq=[],this.map={}}tl.prototype.setValue=function(r,e,t){let n=this.seq;for(let i=0,a=n.length;i!==a;++i){let s=n[i];s.setValue(r,e[s.id],t)}};var Va=/(\w+)(\])?(\[|\.)?/g;function nl(r,e){r.seq.push(e),r.map[e.id]=e}function Wp(r,e,t){let n=r.name,i=n.length;for(Va.lastIndex=0;;){let a=Va.exec(n),s=Va.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){nl(t,c===void 0?new Vp(o,r,e):new el(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new tl(o),nl(t,d)),t=d}}}function xn(r,e){this.seq=[],this.map={};let t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){let i=r.getActiveUniform(e,n),a=r.getUniformLocation(e,i.name);Wp(i,a,this)}}xn.prototype.setValue=function(r,e,t,n){let i=this.map[e];i!==void 0&&i.setValue(r,t,n)};xn.prototype.setOptional=function(r,e,t){let n=e[t];n!==void 0&&this.setValue(r,t,n)};xn.upload=function(r,e,t,n){for(let i=0,a=e.length;i!==a;++i){let s=e[i],o=t[s.id];o.needsUpdate!==!1&&s.setValue(r,o.value,n)}};xn.seqWithValue=function(r,e){let t=[];for(let n=0,i=r.length;n!==i;++n){let a=r[n];a.id in e&&t.push(a)}return t};function il(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Xp=0;function Yp(r){let e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function rl(r){switch(r){case Li:return["Linear","( value )"];case To:return["sRGB","( value )"];case Yd:return["RGBE","( value )"];case Qd:return["RGBM","( value, 7.0 )"];case qd:return["RGBM","( value, 16.0 )"];case Zd:return["RGBD","( value, 256.0 )"];case Xd:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case jd:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function al(r,e,t){let n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let a=r.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+i+Yp(a)}function Ii(r,e){let t=rl(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function jp(r,e){let t=rl(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Qp(r,e){let t;switch(e){case Qc:t="Linear";break;case Ti:t="Reinhard";break;case qc:t="OptimizedCineon";break;case Zc:t="ACESFilmic";break;case $c:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qp(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ui).join(`
`)}function Zp(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $p(r,e){let t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i).name;t[s]=r.getAttribLocation(e,s)}return t}function Ui(r){return r!==""}function sl(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ol(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Jp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(r){return r.replace(Jp,Kp)}function Kp(r,e){let t=be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Wa(t)}var em=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cl(r){return r.replace(tm,ll).replace(em,nm)}function nm(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),ll(r,e,t,n)}function ll(r,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function dl(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function im(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===no?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ec?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function rm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Jr:case Kr:e="ENVMAP_TYPE_CUBE";break;case ea:case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function am(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Kr:case ta:e="ENVMAP_MODE_REFRACTION";break}return e}function sm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case uo:e="ENVMAP_BLENDING_MULTIPLY";break;case Yc:e="ENVMAP_BLENDING_MIX";break;case jc:e="ENVMAP_BLENDING_ADD";break}return e}function om(r,e,t,n){let i=r.getContext(),a=t.defines,s=t.vertexShader,o=t.fragmentShader,l=im(t),c=rm(t),u=am(t),d=sm(t),h=r.gammaFactor>0?r.gammaFactor:1,f=t.isWebGL2?"":qp(t),g=Zp(a),_=i.createProgram(),x,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[g].filter(Ui).join(`
`),x.length>0&&(x+=`
`),m=[f,g].filter(Ui).join(`
`),m.length>0&&(m+=`
`)):(x=[dl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+h,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ui).join(`
`),m=[f,dl(t),"#define SHADER_NAME "+t.shaderName,g,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==on?"#define TONE_MAPPING":"",t.toneMapping!==on?be.tonemapping_pars_fragment:"",t.toneMapping!==on?Qp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",be.encodings_pars_fragment,t.map?Ii("mapTexelToLinear",t.mapEncoding):"",t.matcap?Ii("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Ii("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Ii("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?Ii("lightMapTexelToLinear",t.lightMapEncoding):"",jp("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ui).join(`
`)),s=Wa(s),s=sl(s,t),s=ol(s,t),o=Wa(o),o=sl(o,t),o=ol(o,t),s=cl(s),o=cl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Lo?"":"out highp vec4 pc_fragColor;",t.glslVersion===Lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let T=p+x+s,L=p+m+o,S=il(i,35633,T),v=il(i,35632,L);if(i.attachShader(_,S),i.attachShader(_,v),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){let z=i.getProgramInfoLog(_).trim(),W=i.getShaderInfoLog(S).trim(),q=i.getShaderInfoLog(v).trim(),B=!0,P=!0;if(i.getProgramParameter(_,35714)===!1){B=!1;let D=al(i,S,"vertex"),R=al(i,v,"fragment");console.error("THREE.WebGLProgram: shader error: ",i.getError(),"35715",i.getProgramParameter(_,35715),"gl.getProgramInfoLog",z,D,R)}else z!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",z):(W===""||q==="")&&(P=!1);P&&(this.diagnostics={runnable:B,programLog:z,vertexShader:{log:W,prefix:x},fragmentShader:{log:q,prefix:m}})}i.deleteShader(S),i.deleteShader(v);let C;this.getUniforms=function(){return C===void 0&&(C=new xn(i,_)),C};let O;return this.getAttributes=function(){return O===void 0&&(O=$p(i,_)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Xp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=v,this}function lm(r,e,t,n,i,a){let s=[],o=n.isWebGL2,l=n.logarithmicDepthBuffer,c=n.floatVertexTextures,u=n.maxVertexUniforms,d=n.vertexTextures,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},g=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function _(v){let O=v.skeleton.bones;if(c)return 1024;{let W=Math.floor((u-20)/4),q=Math.min(W,O.length);return q<O.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+O.length+" bones. This GPU supports "+q+"."),0):q}}function x(v){let C;return v&&v.isTexture?C=v.encoding:v&&v.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),C=v.texture.encoding):C=Li,C}function m(v,C,O,z,W){let q=z.fog,B=v.isMeshStandardMaterial?z.environment:null,P=e.get(v.envMap||B),D=f[v.type],R=W.isSkinnedMesh?_(W):0;v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let F,j;if(D){let re=Yt[D];F=re.vertexShader,j=re.fragmentShader}else F=v.vertexShader,j=v.fragmentShader;let $=r.getRenderTarget();return{isWebGL2:o,shaderID:D,shaderName:v.type,vertexShader:F,fragmentShader:j,defines:v.defines,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:d,outputEncoding:$!==null?x($.texture):r.outputEncoding,map:!!v.map,mapEncoding:x(v.map),matcap:!!v.matcap,matcapEncoding:x(v.matcap),envMap:!!P,envMapMode:P&&P.mapping,envMapEncoding:x(P),envMapCubeUV:!!P&&(P.mapping===ea||P.mapping===ta),lightMap:!!v.lightMap,lightMapEncoding:x(v.lightMap),aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,emissiveMapEncoding:x(v.emissiveMap),bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===eu,tangentSpaceNormalMap:v.normalMapType===Kd,clearcoatMap:!!v.clearcoatMap,clearcoatRoughnessMap:!!v.clearcoatRoughnessMap,clearcoatNormalMap:!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,alphaMap:!!v.alphaMap,gradientMap:!!v.gradientMap,sheen:!!v.sheen,transmissionMap:!!v.transmissionMap,combine:v.combine,vertexTangents:v.normalMap&&v.vertexTangents,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&W.geometry&&W.geometry.attributes.color&&W.geometry.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.displacementMap||!!v.transmissionMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.transmissionMap)&&!!v.displacementMap,fog:!!q,useFog:v.fog,fogExp2:q&&q.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:l,skinning:v.skinning&&R>0,maxBones:R,useVertexTexture:c,morphTargets:v.morphTargets,morphNormals:v.morphNormals,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:on,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,alphaTest:v.alphaTest,doubleSided:v.side===qi,flipSided:v.side===et,depthPacking:v.depthPacking!==void 0?v.depthPacking:!1,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:o||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:o||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:o||t.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.fragmentShader),C.push(v.vertexShader)),v.defines!==void 0)for(let O in v.defines)C.push(O),C.push(v.defines[O]);if(v.isRawShaderMaterial===!1){for(let O=0;O<g.length;O++)C.push(v[g[O]]);C.push(r.outputEncoding),C.push(r.gammaFactor)}return C.push(v.customProgramCacheKey),C.join()}function T(v){let C=f[v.type],O;if(C){let z=Yt[C];O=_n.clone(z.uniforms)}else O=v.uniforms;return O}function L(v,C){let O;for(let z=0,W=s.length;z<W;z++){let q=s[z];if(q.cacheKey===C){O=q,++O.usedTimes;break}}return O===void 0&&(O=new om(r,C,v,i),s.push(O)),O}function S(v){if(--v.usedTimes==0){let C=s.indexOf(v);s[C]=s[s.length-1],s.pop(),v.destroy()}}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:L,releaseProgram:S,programs:s}}function cm(){let r=new WeakMap;function e(a){let s=r.get(a);return s===void 0&&(s={},r.set(a,s)),s}function t(a){r.delete(a)}function n(a,s,o){r.get(a)[s]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function dm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.program!==e.program?r.program.id-e.program.id:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function um(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ul(r){let e=[],t=0,n=[],i=[],a={id:-1};function s(){t=0,n.length=0,i.length=0}function o(h,f,g,_,x,m){let p=e[t],T=r.get(g);return p===void 0?(p={id:h.id,object:h,geometry:f,material:g,program:T.program||a,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},e[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=g,p.program=T.program||a,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=x,p.group=m),t++,p}function l(h,f,g,_,x,m){let p=o(h,f,g,_,x,m);(g.transparent===!0?i:n).push(p)}function c(h,f,g,_,x,m){let p=o(h,f,g,_,x,m);(g.transparent===!0?i:n).unshift(p)}function u(h,f){n.length>1&&n.sort(h||dm),i.length>1&&i.sort(f||um)}function d(){for(let h=t,f=e.length;h<f;h++){let g=e[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.program=null,g.group=null}}return{opaque:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function hm(r){let e=new WeakMap;function t(i,a){let s;return e.has(i)===!1?(s=new ul(r),e.set(i,[s])):a>=e.get(i).length?(s=new ul(r),e.get(i).push(s)):s=e.get(i)[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function fm(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Me};break;case"SpotLight":t={position:new w,direction:new w,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new w,halfWidth:new w,halfHeight:new w};break}return r[e.id]=t,t}}}function pm(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var mm=0;function gm(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function _m(r,e){let t=new fm,n=pm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new w);let a=new w,s=new xe,o=new xe;function l(u){let d=0,h=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let g=0,_=0,x=0,m=0,p=0,T=0,L=0,S=0;u.sort(gm);for(let C=0,O=u.length;C<O;C++){let z=u[C],W=z.color,q=z.intensity,B=z.distance,P=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)d+=W.r*q,h+=W.g*q,f+=W.b*q;else if(z.isLightProbe)for(let D=0;D<9;D++)i.probe[D].addScaledVector(z.sh.coefficients[D],q);else if(z.isDirectionalLight){let D=t.get(z);if(D.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let R=z.shadow,F=n.get(z);F.shadowBias=R.bias,F.shadowNormalBias=R.normalBias,F.shadowRadius=R.radius,F.shadowMapSize=R.mapSize,i.directionalShadow[g]=F,i.directionalShadowMap[g]=P,i.directionalShadowMatrix[g]=z.shadow.matrix,T++}i.directional[g]=D,g++}else if(z.isSpotLight){let D=t.get(z);if(D.position.setFromMatrixPosition(z.matrixWorld),D.color.copy(W).multiplyScalar(q),D.distance=B,D.coneCos=Math.cos(z.angle),D.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),D.decay=z.decay,z.castShadow){let R=z.shadow,F=n.get(z);F.shadowBias=R.bias,F.shadowNormalBias=R.normalBias,F.shadowRadius=R.radius,F.shadowMapSize=R.mapSize,i.spotShadow[x]=F,i.spotShadowMap[x]=P,i.spotShadowMatrix[x]=z.shadow.matrix,S++}i.spot[x]=D,x++}else if(z.isRectAreaLight){let D=t.get(z);D.color.copy(W).multiplyScalar(q),D.halfWidth.set(z.width*.5,0,0),D.halfHeight.set(0,z.height*.5,0),i.rectArea[m]=D,m++}else if(z.isPointLight){let D=t.get(z);if(D.color.copy(z.color).multiplyScalar(z.intensity),D.distance=z.distance,D.decay=z.decay,z.castShadow){let R=z.shadow,F=n.get(z);F.shadowBias=R.bias,F.shadowNormalBias=R.normalBias,F.shadowRadius=R.radius,F.shadowMapSize=R.mapSize,F.shadowCameraNear=R.camera.near,F.shadowCameraFar=R.camera.far,i.pointShadow[_]=F,i.pointShadowMap[_]=P,i.pointShadowMatrix[_]=z.shadow.matrix,L++}i.point[_]=D,_++}else if(z.isHemisphereLight){let D=t.get(z);D.skyColor.copy(z.color).multiplyScalar(q),D.groundColor.copy(z.groundColor).multiplyScalar(q),i.hemi[p]=D,p++}}m>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;let v=i.hash;(v.directionalLength!==g||v.pointLength!==_||v.spotLength!==x||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==T||v.numPointShadows!==L||v.numSpotShadows!==S)&&(i.directional.length=g,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=L,i.spotShadowMatrix.length=S,v.directionalLength=g,v.pointLength=_,v.spotLength=x,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=T,v.numPointShadows=L,v.numSpotShadows=S,i.version=mm++)}function c(u,d){let h=0,f=0,g=0,_=0,x=0,m=d.matrixWorldInverse;for(let p=0,T=u.length;p<T;p++){let L=u[p];if(L.isDirectionalLight){let S=i.directional[h];S.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(m),h++}else if(L.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(L.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(m),g++}else if(L.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(L.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(L.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(L.width*.5,0,0),S.halfHeight.set(0,L.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(L.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(L.matrixWorld),S.position.applyMatrix4(m),f++}else if(L.isHemisphereLight){let S=i.hemi[x];S.direction.setFromMatrixPosition(L.matrixWorld),S.direction.transformDirection(m),S.direction.normalize(),x++}}}return{setup:l,setupView:c,state:i}}function hl(r,e){let t=new _m(r,e),n=[],i=[];function a(){n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function l(){t.setup(n)}function c(d){t.setupView(n,d)}return{init:a,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function xm(r,e){let t=new WeakMap;function n(a,s=0){let o;return t.has(a)===!1?(o=new hl(r,e),t.set(a,[o])):s>=t.get(a).length?(o=new hl(r,e),t.get(a).push(o)):o=t.get(a)[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var Xa=class extends tn{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=$d,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};Xa.prototype.isMeshDepthMaterial=!0;var Ya=class extends tn{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new w,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Ya.prototype.isMeshDistanceMaterial=!0;var vm=`uniform sampler2D shadow_pass;
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
}`,ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function fl(r,e,t){let n=new yr,i=new ae,a=new ae,s=new Ce,o=[],l=[],c={},u=t.maxTextureSize,d={0:et,1:Qi,2:qi},h=new We({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:ym,fragmentShader:vm}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new ze;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new kt(g,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=no,this.render=function(v,C,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||v.length===0)return;let z=r.getRenderTarget(),W=r.getActiveCubeFace(),q=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Si),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);for(let P=0,D=v.length;P<D;P++){let R=v[P],F=R.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let j=F.getFrameExtents();if(i.multiply(j),a.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/j.x),i.x=a.x*j.x,F.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/j.y),i.y=a.y*j.y,F.mapSize.y=a.y)),F.map===null&&!F.isPointLightShadow&&this.type===Ai){let J={minFilter:je,magFilter:je,format:tt};F.map=new ot(i.x,i.y,J),F.map.texture.name=R.name+".shadowMap",F.mapPass=new ot(i.x,i.y,J),F.camera.updateProjectionMatrix()}if(F.map===null){let J={minFilter:st,magFilter:st,format:tt};F.map=new ot(i.x,i.y,J),F.map.texture.name=R.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();let $=F.getViewportCount();for(let J=0;J<$;J++){let re=F.getViewport(J);s.set(a.x*re.x,a.y*re.y,a.x*re.z,a.y*re.w),B.viewport(s),F.updateMatrices(R,J),n=F.getFrustum(),S(C,O,F.camera,R,this.type)}!F.isPointLightShadow&&this.type===Ai&&m(F,O),F.needsUpdate=!1}x.needsUpdate=!1,r.setRenderTarget(z,W,q)};function m(v,C){let O=e.update(_);h.uniforms.shadow_pass.value=v.map.texture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(C,null,O,h,_,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(C,null,O,f,_,null)}function p(v,C,O){let z=v<<0|C<<1|O<<2,W=o[z];return W===void 0&&(W=new Xa({depthPacking:Jd,morphTargets:v,skinning:C}),o[z]=W),W}function T(v,C,O){let z=v<<0|C<<1|O<<2,W=l[z];return W===void 0&&(W=new Ya({morphTargets:v,skinning:C}),l[z]=W),W}function L(v,C,O,z,W,q,B){let P=null,D=p,R=v.customDepthMaterial;if(z.isPointLight===!0&&(D=T,R=v.customDistanceMaterial),R===void 0){let F=!1;O.morphTargets===!0&&(F=C.morphAttributes&&C.morphAttributes.position&&C.morphAttributes.position.length>0);let j=!1;v.isSkinnedMesh===!0&&(O.skinning===!0?j=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",v));let $=v.isInstancedMesh===!0;P=D(F,j,$)}else P=R;if(r.localClippingEnabled&&O.clipShadows===!0&&O.clippingPlanes.length!==0){let F=P.uuid,j=O.uuid,$=c[F];$===void 0&&($={},c[F]=$);let J=$[j];J===void 0&&(J=P.clone(),$[j]=J),P=J}return P.visible=O.visible,P.wireframe=O.wireframe,B===Ai?P.side=O.shadowSide!==null?O.shadowSide:O.side:P.side=O.shadowSide!==null?O.shadowSide:d[O.side],P.clipShadows=O.clipShadows,P.clippingPlanes=O.clippingPlanes,P.clipIntersection=O.clipIntersection,P.wireframeLinewidth=O.wireframeLinewidth,P.linewidth=O.linewidth,z.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(z.matrixWorld),P.nearDistance=W,P.farDistance=q),P}function S(v,C,O,z,W){if(v.visible===!1)return;if(v.layers.test(C.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&W===Ai)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld);let P=e.update(v),D=v.material;if(Array.isArray(D)){let R=P.groups;for(let F=0,j=R.length;F<j;F++){let $=R[F],J=D[$.materialIndex];if(J&&J.visible){let re=L(v,P,J,z,O.near,O.far,W);r.renderBufferDirect(O,null,P,re,v,$)}}}else if(D.visible){let R=L(v,P,D,z,O.near,O.far,W);r.renderBufferDirect(O,null,P,R,v,null)}}let B=v.children;for(let P=0,D=B.length;P<D;P++)S(B[P],C,O,z,W)}}function bm(r,e,t){let n=t.isWebGL2;function i(){let M=!1,Y=new Ce,Z=null,se=new Ce(0,0,0,0);return{setMask:function(X){Z!==X&&!M&&(r.colorMask(X,X,X,X),Z=X)},setLocked:function(X){M=X},setClear:function(X,he,Re,Fe,rt){rt===!0&&(X*=Fe,he*=Fe,Re*=Fe),Y.set(X,he,Re,Fe),se.equals(Y)===!1&&(r.clearColor(X,he,Re,Fe),se.copy(Y))},reset:function(){M=!1,Z=null,se.set(-1,0,0,0)}}}function a(){let M=!1,Y=null,Z=null,se=null;return{setTest:function(X){X?de(2929):fe(2929)},setMask:function(X){Y!==X&&!M&&(r.depthMask(X),Y=X)},setFunc:function(X){if(Z!==X){if(X)switch(X){case Bc:r.depthFunc(512);break;case Hc:r.depthFunc(519);break;case Gc:r.depthFunc(513);break;case $r:r.depthFunc(515);break;case kc:r.depthFunc(514);break;case Vc:r.depthFunc(518);break;case Wc:r.depthFunc(516);break;case Xc:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);Z=X}},setLocked:function(X){M=X},setClear:function(X){se!==X&&(r.clearDepth(X),se=X)},reset:function(){M=!1,Y=null,Z=null,se=null}}}function s(){let M=!1,Y=null,Z=null,se=null,X=null,he=null,Re=null,Fe=null,rt=null;return{setTest:function(Ge){M||(Ge?de(2960):fe(2960))},setMask:function(Ge){Y!==Ge&&!M&&(r.stencilMask(Ge),Y=Ge)},setFunc:function(Ge,jt,Rt){(Z!==Ge||se!==jt||X!==Rt)&&(r.stencilFunc(Ge,jt,Rt),Z=Ge,se=jt,X=Rt)},setOp:function(Ge,jt,Rt){(he!==Ge||Re!==jt||Fe!==Rt)&&(r.stencilOp(Ge,jt,Rt),he=Ge,Re=jt,Fe=Rt)},setLocked:function(Ge){M=Ge},setClear:function(Ge){rt!==Ge&&(r.clearStencil(Ge),rt=Ge)},reset:function(){M=!1,Y=null,Z=null,se=null,X=null,he=null,Re=null,Fe=null,rt=null}}}let o=new i,l=new a,c=new s,u={},d=null,h={},f=null,g=!1,_=null,x=null,m=null,p=null,T=null,L=null,S=null,v=!1,C=null,O=null,z=null,W=null,q=null,B=r.getParameter(35661),P=!1,D=0,R=r.getParameter(7938);R.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(R)[1]),P=D>=1):R.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),P=D>=2);let F=null,j={},$=new Ce(0,0,r.canvas.width,r.canvas.height),J=new Ce(0,0,r.canvas.width,r.canvas.height);function re(M,Y,Z){let se=new Uint8Array(4),X=r.createTexture();r.bindTexture(M,X),r.texParameteri(M,10241,9728),r.texParameteri(M,10240,9728);for(let he=0;he<Z;he++)r.texImage2D(Y+he,0,6408,1,1,0,6408,5121,se);return X}let ie={};ie[3553]=re(3553,3553,1),ie[34067]=re(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),de(2929),l.setFunc($r),Pe(!1),Ze(to),de(2884),we(Si);function de(M){u[M]!==!0&&(r.enable(M),u[M]=!0)}function fe(M){u[M]!==!1&&(r.disable(M),u[M]=!1)}function H(M){M!==d&&(r.bindFramebuffer(36160,M),d=M)}function Le(M,Y){Y===null&&d!==null&&(Y=d),h[M]!==Y&&(r.bindFramebuffer(M,Y),h[M]=Y,n&&(M===36009&&(h[36160]=Y),M===36160&&(h[36009]=Y)))}function Ae(M){return f!==M?(r.useProgram(M),f=M,!0):!1}let ye={[Hn]:32774,[Lc]:32778,[Pc]:32779};if(n)ye[so]=32775,ye[oo]=32776;else{let M=e.get("EXT_blend_minmax");M!==null&&(ye[so]=M.MIN_EXT,ye[oo]=M.MAX_EXT)}let ue={[Fc]:0,[Cc]:1,[Rc]:768,[lo]:770,[Oc]:776,[Uc]:774,[Nc]:772,[Dc]:769,[co]:771,[zc]:775,[Ic]:773};function we(M,Y,Z,se,X,he,Re,Fe){if(M===Si){g===!0&&(fe(3042),g=!1);return}if(g===!1&&(de(3042),g=!0),M!==Tc){if(M!==_||Fe!==v){if((x!==Hn||T!==Hn)&&(r.blendEquation(32774),x=Hn,T=Hn),Fe)switch(M){case Ei:r.blendFuncSeparate(1,771,1,771);break;case Zi:r.blendFunc(1,1);break;case ro:r.blendFuncSeparate(0,0,769,771);break;case ao:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case Ei:r.blendFuncSeparate(770,771,1,771);break;case Zi:r.blendFunc(770,1);break;case ro:r.blendFunc(0,769);break;case ao:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}m=null,p=null,L=null,S=null,_=M,v=Fe}return}X=X||Y,he=he||Z,Re=Re||se,(Y!==x||X!==T)&&(r.blendEquationSeparate(ye[Y],ye[X]),x=Y,T=X),(Z!==m||se!==p||he!==L||Re!==S)&&(r.blendFuncSeparate(ue[Z],ue[se],ue[he],ue[Re]),m=Z,p=se,L=he,S=Re),_=M,v=null}function Se(M,Y){M.side===qi?fe(2884):de(2884);let Z=M.side===et;Y&&(Z=!Z),Pe(Z),M.blending===Ei&&M.transparent===!1?we(Si):we(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.premultipliedAlpha),l.setFunc(M.depthFunc),l.setTest(M.depthTest),l.setMask(M.depthWrite),o.setMask(M.colorWrite);let se=M.stencilWrite;c.setTest(se),se&&(c.setMask(M.stencilWriteMask),c.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),c.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),Xe(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?de(32926):fe(32926)}function Pe(M){C!==M&&(M?r.frontFace(2304):r.frontFace(2305),C=M)}function Ze(M){M!==Ac?(de(2884),M!==O&&(M===to?r.cullFace(1029):M===Sc?r.cullFace(1028):r.cullFace(1032))):fe(2884),O=M}function $e(M){M!==z&&(P&&r.lineWidth(M),z=M)}function Xe(M,Y,Z){M?(de(32823),(W!==Y||q!==Z)&&(r.polygonOffset(Y,Z),W=Y,q=Z)):fe(32823)}function ht(M){M?de(3089):fe(3089)}function Je(M){M===void 0&&(M=33984+B-1),F!==M&&(r.activeTexture(M),F=M)}function E(M,Y){F===null&&Je();let Z=j[F];Z===void 0&&(Z={type:void 0,texture:void 0},j[F]=Z),(Z.type!==M||Z.texture!==Y)&&(r.bindTexture(M,Y||ie[M]),Z.type=M,Z.texture=Y)}function b(){let M=j[F];M!==void 0&&M.type!==void 0&&(r.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function k(){try{r.texImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function K(){try{r.texImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ee(M){$.equals(M)===!1&&(r.scissor(M.x,M.y,M.z,M.w),$.copy(M))}function ce(M){J.equals(M)===!1&&(r.viewport(M.x,M.y,M.z,M.w),J.copy(M))}function A(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},F=null,j={},d=null,h={},f=null,g=!1,_=null,x=null,m=null,p=null,T=null,L=null,S=null,v=!1,C=null,O=null,z=null,W=null,q=null,$.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:de,disable:fe,bindFramebuffer:Le,bindXRFramebuffer:H,useProgram:Ae,setBlending:we,setMaterial:Se,setFlipSided:Pe,setCullFace:Ze,setLineWidth:$e,setPolygonOffset:Xe,setScissorTest:ht,activeTexture:Je,bindTexture:E,unbindTexture:b,compressedTexImage2D:Q,texImage2D:k,texImage3D:K,scissor:ee,viewport:ce,reset:A}}function wm(r,e,t,n,i,a,s){let o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,h=new WeakMap,f,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(E){}function _(E,b){return g?new OffscreenCanvas(E,b):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function x(E,b,Q,k){let K=1;if((E.width>k||E.height>k)&&(K=k/Math.max(E.width,E.height)),K<1||b===!0)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap){let ee=b?ru:Math.floor,ce=ee(K*E.width),A=ee(K*E.height);f===void 0&&(f=_(ce,A));let M=Q?_(ce,A):f;return M.width=ce,M.height=A,M.getContext("2d").drawImage(E,0,0,ce,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ce+"x"+A+")."),M}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return Fo(E.width)&&Fo(E.height)}function p(E){return o?!1:E.wrapS!==It||E.wrapT!==It||E.minFilter!==st&&E.minFilter!==je}function T(E,b){return E.generateMipmaps&&b&&E.minFilter!==st&&E.minFilter!==je}function L(E,b,Q,k){r.generateMipmap(E);let K=n.get(b);K.__maxMipLevel=Math.log2(Math.max(Q,k))}function S(E,b,Q){if(o===!1)return b;if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let k=b;return b===6403&&(Q===5126&&(k=33326),Q===5131&&(k=33325),Q===5121&&(k=33321)),b===6407&&(Q===5126&&(k=34837),Q===5131&&(k=34843),Q===5121&&(k=32849)),b===6408&&(Q===5126&&(k=34836),Q===5131&&(k=34842),Q===5121&&(k=32856)),(k===33325||k===33326||k===34842||k===34836)&&e.get("EXT_color_buffer_float"),k}function v(E){return E===st||E===mo||E===go?9728:9729}function C(E){let b=E.target;b.removeEventListener("dispose",C),z(b),b.isVideoTexture&&h.delete(b),s.memory.textures--}function O(E){let b=E.target;b.removeEventListener("dispose",O),W(b),s.memory.textures--}function z(E){let b=n.get(E);b.__webglInit!==void 0&&(r.deleteTexture(b.__webglTexture),n.remove(E))}function W(E){let b=E.texture,Q=n.get(E),k=n.get(b);if(!!E){if(k.__webglTexture!==void 0&&r.deleteTexture(k.__webglTexture),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)r.deleteFramebuffer(Q.__webglFramebuffer[K]),Q.__webglDepthbuffer&&r.deleteRenderbuffer(Q.__webglDepthbuffer[K]);else r.deleteFramebuffer(Q.__webglFramebuffer),Q.__webglDepthbuffer&&r.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer&&r.deleteRenderbuffer(Q.__webglColorRenderbuffer),Q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Q.__webglDepthRenderbuffer);n.remove(b),n.remove(E)}}let q=0;function B(){q=0}function P(){let E=q;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),q+=1,E}function D(E,b){let Q=n.get(E);if(E.isVideoTexture&&Ze(E),E.version>0&&Q.__version!==E.version){let k=E.image;if(k===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(Q,E,b);return}}t.activeTexture(33984+b),t.bindTexture(3553,Q.__webglTexture)}function R(E,b){let Q=n.get(E);if(E.version>0&&Q.__version!==E.version){de(Q,E,b);return}t.activeTexture(33984+b),t.bindTexture(35866,Q.__webglTexture)}function F(E,b){let Q=n.get(E);if(E.version>0&&Q.__version!==E.version){de(Q,E,b);return}t.activeTexture(33984+b),t.bindTexture(32879,Q.__webglTexture)}function j(E,b){let Q=n.get(E);if(E.version>0&&Q.__version!==E.version){fe(Q,E,b);return}t.activeTexture(33984+b),t.bindTexture(34067,Q.__webglTexture)}let $={[na]:10497,[It]:33071,[ia]:33648},J={[st]:9728,[mo]:9984,[go]:9986,[je]:9729,[Jc]:9985,[ra]:9987};function re(E,b,Q){if(Q?(r.texParameteri(E,10242,$[b.wrapS]),r.texParameteri(E,10243,$[b.wrapT]),(E===32879||E===35866)&&r.texParameteri(E,32882,$[b.wrapR]),r.texParameteri(E,10240,J[b.magFilter]),r.texParameteri(E,10241,J[b.minFilter])):(r.texParameteri(E,10242,33071),r.texParameteri(E,10243,33071),(E===32879||E===35866)&&r.texParameteri(E,32882,33071),(b.wrapS!==It||b.wrapT!==It)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(E,10240,v(b.magFilter)),r.texParameteri(E,10241,v(b.minFilter)),b.minFilter!==st&&b.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let k=e.get("EXT_texture_filter_anisotropic");if(b.type===ln&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===Ji&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function ie(E,b){E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",C),E.__webglTexture=r.createTexture(),s.memory.textures++)}function de(E,b,Q){let k=3553;b.isDataTexture2DArray&&(k=35866),b.isDataTexture3D&&(k=32879),ie(E,b),t.activeTexture(33984+Q),t.bindTexture(k,E.__webglTexture),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);let K=p(b)&&m(b.image)===!1,ee=x(b.image,K,!1,u),ce=m(ee)||o,A=a.convert(b.format),M=a.convert(b.type),Y=S(b.internalFormat,A,M);re(k,b,ce);let Z,se=b.mipmaps;if(b.isDepthTexture)Y=6402,o?b.type===ln?Y=36012:b.type===$i?Y=33190:b.type===Ki?Y=35056:Y=33189:b.type===ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===oa&&Y===6402&&b.type!==sa&&b.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=sa,M=a.convert(b.type)),b.format===la&&Y===6402&&(Y=34041,b.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ki,M=a.convert(b.type))),t.texImage2D(3553,0,Y,ee.width,ee.height,0,A,M,null);else if(b.isDataTexture)if(se.length>0&&ce){for(let X=0,he=se.length;X<he;X++)Z=se[X],t.texImage2D(3553,X,Y,Z.width,Z.height,0,A,M,Z.data);b.generateMipmaps=!1,E.__maxMipLevel=se.length-1}else t.texImage2D(3553,0,Y,ee.width,ee.height,0,A,M,ee.data),E.__maxMipLevel=0;else if(b.isCompressedTexture){for(let X=0,he=se.length;X<he;X++)Z=se[X],b.format!==tt&&b.format!==Gn?A!==null?t.compressedTexImage2D(3553,X,Y,Z.width,Z.height,0,Z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,X,Y,Z.width,Z.height,0,A,M,Z.data);E.__maxMipLevel=se.length-1}else if(b.isDataTexture2DArray)t.texImage3D(35866,0,Y,ee.width,ee.height,ee.depth,0,A,M,ee.data),E.__maxMipLevel=0;else if(b.isDataTexture3D)t.texImage3D(32879,0,Y,ee.width,ee.height,ee.depth,0,A,M,ee.data),E.__maxMipLevel=0;else if(se.length>0&&ce){for(let X=0,he=se.length;X<he;X++)Z=se[X],t.texImage2D(3553,X,Y,A,M,Z);b.generateMipmaps=!1,E.__maxMipLevel=se.length-1}else t.texImage2D(3553,0,Y,A,M,ee),E.__maxMipLevel=0;T(b,ce)&&L(k,b,ee.width,ee.height),E.__version=b.version,b.onUpdate&&b.onUpdate(b)}function fe(E,b,Q){if(b.image.length!==6)return;ie(E,b),t.activeTexture(33984+Q),t.bindTexture(34067,E.__webglTexture),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);let k=b&&(b.isCompressedTexture||b.image[0].isCompressedTexture),K=b.image[0]&&b.image[0].isDataTexture,ee=[];for(let X=0;X<6;X++)!k&&!K?ee[X]=x(b.image[X],!1,!0,c):ee[X]=K?b.image[X].image:b.image[X];let ce=ee[0],A=m(ce)||o,M=a.convert(b.format),Y=a.convert(b.type),Z=S(b.internalFormat,M,Y);re(34067,b,A);let se;if(k){for(let X=0;X<6;X++){se=ee[X].mipmaps;for(let he=0;he<se.length;he++){let Re=se[he];b.format!==tt&&b.format!==Gn?M!==null?t.compressedTexImage2D(34069+X,he,Z,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+X,he,Z,Re.width,Re.height,0,M,Y,Re.data)}}E.__maxMipLevel=se.length-1}else{se=b.mipmaps;for(let X=0;X<6;X++)if(K){t.texImage2D(34069+X,0,Z,ee[X].width,ee[X].height,0,M,Y,ee[X].data);for(let he=0;he<se.length;he++){let Fe=se[he].image[X].image;t.texImage2D(34069+X,he+1,Z,Fe.width,Fe.height,0,M,Y,Fe.data)}}else{t.texImage2D(34069+X,0,Z,M,Y,ee[X]);for(let he=0;he<se.length;he++){let Re=se[he];t.texImage2D(34069+X,he+1,Z,M,Y,Re.image[X])}}E.__maxMipLevel=se.length}T(b,A)&&L(34067,b,ce.width,ce.height),E.__version=b.version,b.onUpdate&&b.onUpdate(b)}function H(E,b,Q,k){let K=b.texture,ee=a.convert(K.format),ce=a.convert(K.type),A=S(K.internalFormat,ee,ce);k===32879||k===35866?t.texImage3D(k,0,A,b.width,b.height,b.depth,0,ee,ce,null):t.texImage2D(k,0,A,b.width,b.height,0,ee,ce,null),t.bindFramebuffer(36160,E),r.framebufferTexture2D(36160,Q,k,n.get(K).__webglTexture,0),t.bindFramebuffer(36160,null)}function Le(E,b,Q){if(r.bindRenderbuffer(36161,E),b.depthBuffer&&!b.stencilBuffer){let k=33189;if(Q){let K=b.depthTexture;K&&K.isDepthTexture&&(K.type===ln?k=36012:K.type===$i&&(k=33190));let ee=Pe(b);r.renderbufferStorageMultisample(36161,ee,k,b.width,b.height)}else r.renderbufferStorage(36161,k,b.width,b.height);r.framebufferRenderbuffer(36160,36096,36161,E)}else if(b.depthBuffer&&b.stencilBuffer){if(Q){let k=Pe(b);r.renderbufferStorageMultisample(36161,k,35056,b.width,b.height)}else r.renderbufferStorage(36161,34041,b.width,b.height);r.framebufferRenderbuffer(36160,33306,36161,E)}else{let k=b.texture,K=a.convert(k.format),ee=a.convert(k.type),ce=S(k.internalFormat,K,ee);if(Q){let A=Pe(b);r.renderbufferStorageMultisample(36161,A,ce,b.width,b.height)}else r.renderbufferStorage(36161,ce,b.width,b.height)}r.bindRenderbuffer(36161,null)}function Ae(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),D(b.depthTexture,0);let k=n.get(b.depthTexture).__webglTexture;if(b.depthTexture.format===oa)r.framebufferTexture2D(36160,36096,3553,k,0);else if(b.depthTexture.format===la)r.framebufferTexture2D(36160,33306,3553,k,0);else throw new Error("Unknown depthTexture format")}function ye(E){let b=n.get(E),Q=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Ae(b.__webglFramebuffer,E)}else if(Q){b.__webglDepthbuffer=[];for(let k=0;k<6;k++)t.bindFramebuffer(36160,b.__webglFramebuffer[k]),b.__webglDepthbuffer[k]=r.createRenderbuffer(),Le(b.__webglDepthbuffer[k],E,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),Le(b.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function ue(E){let b=E.texture,Q=n.get(E),k=n.get(b);E.addEventListener("dispose",O),k.__webglTexture=r.createTexture(),k.__version=b.version,s.memory.textures++;let K=E.isWebGLCubeRenderTarget===!0,ee=E.isWebGLMultisampleRenderTarget===!0,ce=b.isDataTexture3D||b.isDataTexture2DArray,A=m(E)||o;if(o&&b.format===Gn&&(b.type===ln||b.type===Ji)&&(b.format=tt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),K){Q.__webglFramebuffer=[];for(let M=0;M<6;M++)Q.__webglFramebuffer[M]=r.createFramebuffer()}else if(Q.__webglFramebuffer=r.createFramebuffer(),ee)if(o){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,Q.__webglColorRenderbuffer);let M=a.convert(b.format),Y=a.convert(b.type),Z=S(b.internalFormat,M,Y),se=Pe(E);r.renderbufferStorageMultisample(36161,se,Z,E.width,E.height),t.bindFramebuffer(36160,Q.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,Q.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),E.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Le(Q.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(K){t.bindTexture(34067,k.__webglTexture),re(34067,b,A);for(let M=0;M<6;M++)H(Q.__webglFramebuffer[M],E,36064,34069+M);T(b,A)&&L(34067,b,E.width,E.height),t.bindTexture(34067,null)}else{let M=3553;ce&&(o?M=b.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(M,k.__webglTexture),re(M,b,A),H(Q.__webglFramebuffer,E,36064,M),T(b,A)&&L(3553,b,E.width,E.height),t.bindTexture(3553,null)}E.depthBuffer&&ye(E)}function we(E){let b=E.texture,Q=m(E)||o;if(T(b,Q)){let k=E.isWebGLCubeRenderTarget?34067:3553,K=n.get(b).__webglTexture;t.bindTexture(k,K),L(k,b,E.width,E.height),t.bindTexture(k,null)}}function Se(E){if(E.isWebGLMultisampleRenderTarget)if(o){let b=E.width,Q=E.height,k=16384;E.depthBuffer&&(k|=256),E.stencilBuffer&&(k|=1024);let K=n.get(E);t.bindFramebuffer(36008,K.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,K.__webglFramebuffer),r.blitFramebuffer(0,0,b,Q,0,0,b,Q,k,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,K.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Pe(E){return o&&E.isWebGLMultisampleRenderTarget?Math.min(d,E.samples):0}function Ze(E){let b=s.render.frame;h.get(E)!==b&&(h.set(E,b),E.update())}let $e=!1,Xe=!1;function ht(E,b){E&&E.isWebGLRenderTarget&&($e===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),$e=!0),E=E.texture),D(E,b)}function Je(E,b){E&&E.isWebGLCubeRenderTarget&&(Xe===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Xe=!0),E=E.texture),j(E,b)}this.allocateTextureUnit=P,this.resetTextureUnits=B,this.setTexture2D=D,this.setTexture2DArray=R,this.setTexture3D=F,this.setTextureCube=j,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Se,this.safeSetTexture2D=ht,this.safeSetTextureCube=Je}function Mm(r,e,t){let n=t.isWebGL2;function i(a){let s;if(a===aa)return 5121;if(a===nd)return 32819;if(a===id)return 32820;if(a===rd)return 33635;if(a===Kc)return 5120;if(a===ed)return 5122;if(a===sa)return 5123;if(a===td)return 5124;if(a===$i)return 5125;if(a===ln)return 5126;if(a===Ji)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===ad)return 6406;if(a===Gn)return 6407;if(a===tt)return 6408;if(a===sd)return 6409;if(a===od)return 6410;if(a===oa)return 6402;if(a===la)return 34041;if(a===ld)return 6403;if(a===cd)return 36244;if(a===dd)return 33319;if(a===ud)return 33320;if(a===hd)return 36248;if(a===fd)return 36249;if(a===_o||a===xo||a===vo||a===yo)if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===_o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===xo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===yo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===bo||a===wo||a===Mo||a===Ao)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===bo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===wo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Mo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Ao)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===pd)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if((a===So||a===Eo)&&(s=e.get("WEBGL_compressed_texture_etc"),s!==null)){if(a===So)return s.COMPRESSED_RGB8_ETC2;if(a===Eo)return s.COMPRESSED_RGBA8_ETC2_EAC}if(a===md||a===gd||a===_d||a===xd||a===vd||a===yd||a===bd||a===wd||a===Md||a===Ad||a===Sd||a===Ed||a===Td||a===Ld||a===Fd||a===Cd||a===Rd||a===Dd||a===Nd||a===Id||a===Ud||a===zd||a===Od||a===Bd||a===Hd||a===Gd||a===kd||a===Vd)return s=e.get("WEBGL_compressed_texture_astc"),s!==null?a:null;if(a===Pd)return s=e.get("EXT_texture_compression_bptc"),s!==null?a:null;if(a===Ki)return n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}var ja=class extends pt{constructor(e=[]){super();this.cameras=e}};ja.prototype.isArrayCamera=!0;var ri=class extends ke{constructor(){super();this.type="Group"}};ri.prototype.isGroup=!0;var Am={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,s=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Am))),c&&e.hand){s=!0;for(let _ of e.hand.values()){let x=t.getJointPose(_,n);if(c.joints[_.jointName]===void 0){let p=new ri;p.matrixAutoUpdate=!1,p.visible=!1,c.joints[_.jointName]=p,c.add(p)}let m=c.joints[_.jointName];x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=x.radius),m.visible=x!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}},pl=class extends qt{constructor(e,t){super();let n=this,i=e.state,a=null,s=1,o=null,l="local-floor",c=null,u=[],d=new Map,h=new pt;h.layers.enable(1),h.viewport=new Ce;let f=new pt;f.layers.enable(2),f.viewport=new Ce;let g=[h,f],_=new ja;_.layers.enable(1),_.layers.enable(2);let x=null,m=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let P=u[B];return P===void 0&&(P=new br,u[B]=P),P.getTargetRaySpace()},this.getControllerGrip=function(B){let P=u[B];return P===void 0&&(P=new br,u[B]=P),P.getGripSpace()},this.getHand=function(B){let P=u[B];return P===void 0&&(P=new br,u[B]=P),P.getHandSpace()};function p(B){let P=d.get(B.inputSource);P&&P.dispatchEvent({type:B.type,data:B.inputSource})}function T(){d.forEach(function(B,P){B.disconnect(P)}),d.clear(),x=null,m=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){l=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getSession=function(){return a},this.setSession=async function(B){if(a=B,a!==null){a.addEventListener("select",p),a.addEventListener("selectstart",p),a.addEventListener("selectend",p),a.addEventListener("squeeze",p),a.addEventListener("squeezestart",p),a.addEventListener("squeezeend",p),a.addEventListener("end",T),a.addEventListener("inputsourceschange",L);let P=t.getContextAttributes();P.xrCompatible!==!0&&await t.makeXRCompatible();let D={antialias:P.antialias,alpha:P.alpha,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:s},R=new XRWebGLLayer(a,t,D);a.updateRenderState({baseLayer:R}),o=await a.requestReferenceSpace(l),q.setContext(a),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function L(B){let P=a.inputSources;for(let D=0;D<u.length;D++)d.set(P[D],u[D]);for(let D=0;D<B.removed.length;D++){let R=B.removed[D],F=d.get(R);F&&(F.dispatchEvent({type:"disconnected",data:R}),d.delete(R))}for(let D=0;D<B.added.length;D++){let R=B.added[D],F=d.get(R);F&&F.dispatchEvent({type:"connected",data:R})}}let S=new w,v=new w;function C(B,P,D){S.setFromMatrixPosition(P.matrixWorld),v.setFromMatrixPosition(D.matrixWorld);let R=S.distanceTo(v),F=P.projectionMatrix.elements,j=D.projectionMatrix.elements,$=F[14]/(F[10]-1),J=F[14]/(F[10]+1),re=(F[9]+1)/F[5],ie=(F[9]-1)/F[5],de=(F[8]-1)/F[0],fe=(j[8]+1)/j[0],H=$*de,Le=$*fe,Ae=R/(-de+fe),ye=Ae*-de;P.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ye),B.translateZ(Ae),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();let ue=$+Ae,we=J+Ae,Se=H-ye,Pe=Le+(R-ye),Ze=re*J/we*ue,$e=ie*J/we*ue;B.projectionMatrix.makePerspective(Se,Pe,Ze,$e,ue,we)}function O(B,P){P===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(P.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.getCamera=function(B){_.near=f.near=h.near=B.near,_.far=f.far=h.far=B.far,(x!==_.near||m!==_.far)&&(a.updateRenderState({depthNear:_.near,depthFar:_.far}),x=_.near,m=_.far);let P=B.parent,D=_.cameras;O(_,P);for(let F=0;F<D.length;F++)O(D[F],P);B.matrixWorld.copy(_.matrixWorld),B.matrix.copy(_.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);let R=B.children;for(let F=0,j=R.length;F<j;F++)R[F].updateMatrixWorld(!0);return D.length===2?C(_,h,f):_.projectionMatrix.copy(h.projectionMatrix),_};let z=null;function W(B,P){if(c=P.getViewerPose(o),c!==null){let R=c.views,F=a.renderState.baseLayer;i.bindXRFramebuffer(F.framebuffer);let j=!1;R.length!==_.cameras.length&&(_.cameras.length=0,j=!0);for(let $=0;$<R.length;$++){let J=R[$],re=F.getViewport(J),ie=g[$];ie.matrix.fromArray(J.transform.matrix),ie.projectionMatrix.fromArray(J.projectionMatrix),ie.viewport.set(re.x,re.y,re.width,re.height),$===0&&_.matrix.copy(ie.matrix),j===!0&&_.cameras.push(ie)}}let D=a.inputSources;for(let R=0;R<u.length;R++){let F=u[R],j=D[R];F.update(j,P,o)}z&&z(B,P)}let q=new Wo;q.setAnimationLoop(W),this.setAnimationLoop=function(B){z=B},this.dispose=function(){}}};function Sm(r){function e(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function t(m,p,T,L){p.isMeshBasicMaterial?n(m,p):p.isMeshLambertMaterial?(n(m,p),l(m,p)):p.isMeshToonMaterial?(n(m,p),u(m,p)):p.isMeshPhongMaterial?(n(m,p),c(m,p)):p.isMeshStandardMaterial?(n(m,p),p.isMeshPhysicalMaterial?h(m,p):d(m,p)):p.isMeshMatcapMaterial?(n(m,p),f(m,p)):p.isMeshDepthMaterial?(n(m,p),g(m,p)):p.isMeshDistanceMaterial?(n(m,p),_(m,p)):p.isMeshNormalMaterial?(n(m,p),x(m,p)):p.isLineBasicMaterial?(i(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?s(m,p,T,L):p.isSpriteMaterial?o(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.specularMap&&(m.specularMap.value=p.specularMap);let T=r.get(p).envMap;if(T){m.envMap.value=T,m.flipEnvMap.value=T.isCubeTexture&&T._needsFlipEnvMap?-1:1,m.reflectivity.value=p.reflectivity,m.refractionRatio.value=p.refractionRatio;let v=r.get(T).__maxMipLevel;v!==void 0&&(m.maxMipLevel.value=v)}p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let L;p.map?L=p.map:p.specularMap?L=p.specularMap:p.displacementMap?L=p.displacementMap:p.normalMap?L=p.normalMap:p.bumpMap?L=p.bumpMap:p.roughnessMap?L=p.roughnessMap:p.metalnessMap?L=p.metalnessMap:p.alphaMap?L=p.alphaMap:p.emissiveMap?L=p.emissiveMap:p.clearcoatMap?L=p.clearcoatMap:p.clearcoatNormalMap?L=p.clearcoatNormalMap:p.clearcoatRoughnessMap&&(L=p.clearcoatRoughnessMap),L!==void 0&&(L.isWebGLRenderTarget&&(L=L.texture),L.matrixAutoUpdate===!0&&L.updateMatrix(),m.uvTransform.value.copy(L.matrix));let S;p.aoMap?S=p.aoMap:p.lightMap&&(S=p.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),m.uv2Transform.value.copy(S.matrix))}function i(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function s(m,p,T,L){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=L*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap);let S;p.map?S=p.map:p.alphaMap&&(S=p.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),m.uvTransform.value.copy(S.matrix))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap);let T;p.map?T=p.map:p.alphaMap&&(T=p.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),m.uvTransform.value.copy(T.matrix))}function l(m,p){p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===et&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===et&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===et&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===et&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function d(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===et&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===et&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),r.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p){d(m,p),m.reflectivity.value=p.reflectivity,m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.sheen&&m.sheen.value.copy(p.sheen),p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===et&&m.clearcoatNormalScale.value.negate()),m.transmission.value=p.transmission,p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===et&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===et&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function g(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function _(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}function x(m,p){p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===et&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===et&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Em(){let r=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return r.style.display="block",r}function Ne(r){r=r||{};let e=r.canvas!==void 0?r.canvas:Em(),t=r.context!==void 0?r.context:null,n=r.alpha!==void 0?r.alpha:!1,i=r.depth!==void 0?r.depth:!0,a=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,l=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1,d=null,h=null,f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Li,this.physicallyCorrectLights=!1,this.toneMapping=on,this.toneMappingExposure=1;let _=this,x=!1,m=0,p=0,T=null,L=-1,S=null,v=new Ce,C=new Ce,O=null,z=e.width,W=e.height,q=1,B=null,P=null,D=new Ce(0,0,z,W),R=new Ce(0,0,z,W),F=!1,j=new yr,$=!1,J=!1,re=new xe,ie=new w,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function fe(){return T===null?q:1}let H=t;function Le(y,U){for(let N=0;N<y.length;N++){let G=y[N],ne=e.getContext(G,U);if(ne!==null)return ne}return null}try{let y={alpha:n,depth:i,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",he,!1),e.addEventListener("webglcontextrestored",Re,!1),H===null){let U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),H=Le(U,y),H===null)throw Le(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ae,ye,ue,we,Se,Pe,Ze,$e,Xe,ht,Je,E,b,Q,k,K,ee,ce,A,M,Y,Z;function se(){Ae=new qf(H),ye=new Yf(H,Ae,r),Ae.init(ye),Y=new Mm(H,Ae,ye),ue=new bm(H,Ae,ye),we=new Jf(H),Se=new cm,Pe=new wm(H,Ae,ue,Se,ye,Y,we),Ze=new Qf(_),$e=new yu(H,ye),Z=new Wf(H,Ae,$e,ye),Xe=new Zf(H,$e,we,Z),ht=new np(H,Xe,$e,we),ce=new tp(H),k=new jf(Se),Je=new lm(_,Ze,Ae,ye,Z,k),E=new Sm(Se),b=new hm(Se),Q=new xm(Ae,ye),ee=new Vf(_,Ze,ue,ht,o),K=new fl(_,ht,ye),A=new Xf(H,Ae,we,ye),M=new $f(H,Ae,we,ye),we.programs=Je.programs,_.capabilities=ye,_.extensions=Ae,_.properties=Se,_.renderLists=b,_.shadowMap=K,_.state=ue,_.info=we}se();let X=new pl(_,H);this.xr=X,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let y=Ae.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Ae.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(y){y!==void 0&&(q=y,this.setSize(z,W,!1))},this.getSize=function(y){return y===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),y=new ae),y.set(z,W)},this.setSize=function(y,U,N){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=y,W=U,e.width=Math.floor(y*q),e.height=Math.floor(U*q),N!==!1&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),y=new ae),y.set(z*q,W*q).floor()},this.setDrawingBufferSize=function(y,U,N){z=y,W=U,q=N,e.width=Math.floor(y*N),e.height=Math.floor(U*N),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),y=new Ce),y.copy(v)},this.getViewport=function(y){return y.copy(D)},this.setViewport=function(y,U,N,G){y.isVector4?D.set(y.x,y.y,y.z,y.w):D.set(y,U,N,G),ue.viewport(v.copy(D).multiplyScalar(q).floor())},this.getScissor=function(y){return y.copy(R)},this.setScissor=function(y,U,N,G){y.isVector4?R.set(y.x,y.y,y.z,y.w):R.set(y,U,N,G),ue.scissor(C.copy(R).multiplyScalar(q).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(y){ue.setScissorTest(F=y)},this.setOpaqueSort=function(y){B=y},this.setTransparentSort=function(y){P=y},this.getClearColor=function(y){return y===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),y=new Me),y.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(y,U,N){let G=0;(y===void 0||y)&&(G|=16384),(U===void 0||U)&&(G|=256),(N===void 0||N)&&(G|=1024),H.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",Re,!1),b.dispose(),Q.dispose(),Se.dispose(),Ze.dispose(),ht.dispose(),Z.dispose(),X.dispose(),X.removeEventListener("sessionstart",Ts),X.removeEventListener("sessionend",Ls),An.stop()};function he(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let y=we.autoReset,U=K.enabled,N=K.autoUpdate,G=K.needsUpdate,ne=K.type;se(),we.autoReset=y,K.enabled=U,K.autoUpdate=N,K.needsUpdate=G,K.type=ne}function Fe(y){let U=y.target;U.removeEventListener("dispose",Fe),rt(U)}function rt(y){Ge(y),Se.remove(y)}function Ge(y){let U=Se.get(y).programs;U!==void 0&&U.forEach(function(N){Je.releaseProgram(N)})}function jt(y,U){y.render(function(N){_.renderBufferImmediate(N,U)})}this.renderBufferImmediate=function(y,U){Z.initAttributes();let N=Se.get(y);y.hasPositions&&!N.position&&(N.position=H.createBuffer()),y.hasNormals&&!N.normal&&(N.normal=H.createBuffer()),y.hasUvs&&!N.uv&&(N.uv=H.createBuffer()),y.hasColors&&!N.color&&(N.color=H.createBuffer());let G=U.getAttributes();y.hasPositions&&(H.bindBuffer(34962,N.position),H.bufferData(34962,y.positionArray,35048),Z.enableAttribute(G.position),H.vertexAttribPointer(G.position,3,5126,!1,0,0)),y.hasNormals&&(H.bindBuffer(34962,N.normal),H.bufferData(34962,y.normalArray,35048),Z.enableAttribute(G.normal),H.vertexAttribPointer(G.normal,3,5126,!1,0,0)),y.hasUvs&&(H.bindBuffer(34962,N.uv),H.bufferData(34962,y.uvArray,35048),Z.enableAttribute(G.uv),H.vertexAttribPointer(G.uv,2,5126,!1,0,0)),y.hasColors&&(H.bindBuffer(34962,N.color),H.bufferData(34962,y.colorArray,35048),Z.enableAttribute(G.color),H.vertexAttribPointer(G.color,3,5126,!1,0,0)),Z.disableUnusedAttributes(),H.drawArrays(4,0,y.count),y.count=0},this.renderBufferDirect=function(y,U,N,G,ne,Ee){U===null&&(U=de);let pe=ne.isMesh&&ne.matrixWorld.determinant()<0,ve=Ds(y,U,G,ne);ue.setMaterial(G,pe);let Ie=N.index,_e=N.attributes.position;if(Ie===null){if(_e===void 0||_e.count===0)return}else if(Ie.count===0)return;let Te=1;G.wireframe===!0&&(Ie=Xe.getWireframeAttribute(N),Te=2),(G.morphTargets||G.morphNormals)&&ce.update(ne,N,G,ve),Z.setup(ne,G,ve,N,Ie);let me,De=A;Ie!==null&&(me=$e.get(Ie),De=M,De.setIndex(me));let Vt=Ie!==null?Ie.count:_e.count,ft=N.drawRange.start*Te,Sn=N.drawRange.count*Te,Ye=Ee!==null?Ee.start*Te:0,En=Ee!==null?Ee.count*Te:Infinity,Ve=Math.max(ft,Ye),Hr=Math.min(Vt,ft+Sn,Ye+En)-1,vt=Math.max(0,Hr-Ve+1);if(vt!==0){if(ne.isMesh)G.wireframe===!0?(ue.setLineWidth(G.wireframeLinewidth*fe()),De.setMode(1)):De.setMode(4);else if(ne.isLine){let Qt=G.linewidth;Qt===void 0&&(Qt=1),ue.setLineWidth(Qt*fe()),ne.isLineSegments?De.setMode(1):ne.isLineLoop?De.setMode(2):De.setMode(3)}else ne.isPoints?De.setMode(0):ne.isSprite&&De.setMode(4);if(ne.isInstancedMesh)De.renderInstances(Ve,vt,ne.count);else if(N.isInstancedBufferGeometry){let Qt=Math.min(N.instanceCount,N._maxInstanceCount);De.renderInstances(Ve,vt,Qt)}else De.render(Ve,vt)}},this.compile=function(y,U){h=Q.get(y),h.init(),y.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights(),y.traverse(function(N){let G=N.material;if(G)if(Array.isArray(G))for(let ne=0;ne<G.length;ne++){let Ee=G[ne];Br(Ee,y,N)}else Br(G,y,N)})};let Rt=null;function Jl(y){Rt&&Rt(y)}function Ts(){An.stop()}function Ls(){An.start()}let An=new Wo;An.setAnimationLoop(Jl),typeof window!="undefined"&&An.setContext(window),this.setAnimationLoop=function(y){Rt=y,X.setAnimationLoop(y),y===null?An.stop():An.start()},X.addEventListener("sessionstart",Ts),X.addEventListener("sessionend",Ls),this.render=function(y,U){let N,G;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),N=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),G=arguments[3]),U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;y.autoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(U=X.getCamera(U)),y.isScene===!0&&y.onBeforeRender(_,y,U,N||T),h=Q.get(y,g.length),h.init(),g.push(h),re.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(re),J=this.localClippingEnabled,$=k.init(this.clippingPlanes,J,U),d=b.get(y,f.length),d.init(),f.push(d),Ps(y,U,0,_.sortObjects),d.finish(),_.sortObjects===!0&&d.sort(B,P),$===!0&&k.beginShadows();let ne=h.state.shadowsArray;K.render(ne,y,U),h.setupLights(),h.setupLightsView(U),$===!0&&k.endShadows(),this.info.autoReset===!0&&this.info.reset(),N!==void 0&&this.setRenderTarget(N),ee.render(d,y,U,G);let Ee=d.opaque,pe=d.transparent;Ee.length>0&&Fs(Ee,y,U),pe.length>0&&Fs(pe,y,U),T!==null&&(Pe.updateRenderTargetMipmap(T),Pe.updateMultisampleRenderTarget(T)),y.isScene===!0&&y.onAfterRender(_,y,U),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1),Z.resetDefaultState(),L=-1,S=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,f.pop(),f.length>0?d=f[f.length-1]:d=null};function Ps(y,U,N,G){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)N=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||j.intersectsSprite(y)){G&&ie.setFromMatrixPosition(y.matrixWorld).applyMatrix4(re);let pe=ht.update(y),ve=y.material;ve.visible&&d.push(y,pe,ve,N,ie.z,null)}}else if(y.isImmediateRenderObject)G&&ie.setFromMatrixPosition(y.matrixWorld).applyMatrix4(re),d.push(y,null,y.material,N,ie.z,null);else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==we.render.frame&&(y.skeleton.update(),y.skeleton.frame=we.render.frame),!y.frustumCulled||j.intersectsObject(y))){G&&ie.setFromMatrixPosition(y.matrixWorld).applyMatrix4(re);let pe=ht.update(y),ve=y.material;if(Array.isArray(ve)){let Ie=pe.groups;for(let _e=0,Te=Ie.length;_e<Te;_e++){let me=Ie[_e],De=ve[me.materialIndex];De&&De.visible&&d.push(y,pe,De,N,ie.z,me)}}else ve.visible&&d.push(y,pe,ve,N,ie.z,null)}}let Ee=y.children;for(let pe=0,ve=Ee.length;pe<ve;pe++)Ps(Ee[pe],U,N,G)}function Fs(y,U,N){let G=U.isScene===!0?U.overrideMaterial:null;for(let ne=0,Ee=y.length;ne<Ee;ne++){let pe=y[ne],ve=pe.object,Ie=pe.geometry,_e=G===null?pe.material:G,Te=pe.group;if(N.isArrayCamera){let me=N.cameras;for(let De=0,Vt=me.length;De<Vt;De++){let ft=me[De];ve.layers.test(ft.layers)&&(ue.viewport(v.copy(ft.viewport)),h.setupLightsView(ft),Cs(ve,U,ft,Ie,_e,Te))}}else Cs(ve,U,N,Ie,_e,Te)}}function Cs(y,U,N,G,ne,Ee){if(y.onBeforeRender(_,U,N,G,ne,Ee),y.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),y.isImmediateRenderObject){let pe=Ds(N,U,ne,y);ue.setMaterial(ne),Z.reset(),jt(y,pe)}else _.renderBufferDirect(N,U,G,ne,y,Ee);y.onAfterRender(_,U,N,G,ne,Ee)}function Br(y,U,N){U.isScene!==!0&&(U=de);let G=Se.get(y),ne=h.state.lights,Ee=h.state.shadowsArray,pe=ne.state.version,ve=Je.getParameters(y,ne.state,Ee,U,N),Ie=Je.getProgramCacheKey(ve),_e=G.programs;G.environment=y.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=Ze.get(y.envMap||G.environment),_e===void 0&&(y.addEventListener("dispose",Fe),_e=new Map,G.programs=_e);let Te=_e.get(Ie);if(Te!==void 0){if(G.currentProgram===Te&&G.lightsStateVersion===pe)return Rs(y,ve),Te}else ve.uniforms=Je.getUniforms(y),y.onBuild(ve,_),y.onBeforeCompile(ve,_),Te=Je.acquireProgram(ve,Ie),_e.set(Ie,Te),G.uniforms=ve.uniforms;let me=G.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(me.clippingPlanes=k.uniform),Rs(y,ve),G.needsLights=ec(y),G.lightsStateVersion=pe,G.needsLights&&(me.ambientLightColor.value=ne.state.ambient,me.lightProbe.value=ne.state.probe,me.directionalLights.value=ne.state.directional,me.directionalLightShadows.value=ne.state.directionalShadow,me.spotLights.value=ne.state.spot,me.spotLightShadows.value=ne.state.spotShadow,me.rectAreaLights.value=ne.state.rectArea,me.ltc_1.value=ne.state.rectAreaLTC1,me.ltc_2.value=ne.state.rectAreaLTC2,me.pointLights.value=ne.state.point,me.pointLightShadows.value=ne.state.pointShadow,me.hemisphereLights.value=ne.state.hemi,me.directionalShadowMap.value=ne.state.directionalShadowMap,me.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,me.spotShadowMap.value=ne.state.spotShadowMap,me.spotShadowMatrix.value=ne.state.spotShadowMatrix,me.pointShadowMap.value=ne.state.pointShadowMap,me.pointShadowMatrix.value=ne.state.pointShadowMatrix);let De=Te.getUniforms(),Vt=xn.seqWithValue(De.seq,me);return G.currentProgram=Te,G.uniformsList=Vt,Te}function Rs(y,U){let N=Se.get(y);N.outputEncoding=U.outputEncoding,N.instancing=U.instancing,N.numClippingPlanes=U.numClippingPlanes,N.numIntersection=U.numClipIntersection,N.vertexAlphas=U.vertexAlphas}function Ds(y,U,N,G){U.isScene!==!0&&(U=de),Pe.resetTextureUnits();let ne=U.fog,Ee=N.isMeshStandardMaterial?U.environment:null,pe=T===null?_.outputEncoding:T.texture.encoding,ve=Ze.get(N.envMap||Ee),Ie=N.vertexColors===!0&&G.geometry&&G.geometry.attributes.color&&G.geometry.attributes.color.itemSize===4,_e=Se.get(N),Te=h.state.lights;if($===!0&&(J===!0||y!==S)){let Ve=y===S&&N.id===L;k.setState(N,y,Ve)}let me=!1;N.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Te.state.version||_e.outputEncoding!==pe||G.isInstancedMesh&&_e.instancing===!1||!G.isInstancedMesh&&_e.instancing===!0||_e.envMap!==ve||N.fog&&_e.fog!==ne||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==k.numPlanes||_e.numIntersection!==k.numIntersection)||_e.vertexAlphas!==Ie)&&(me=!0):(me=!0,_e.__version=N.version);let De=_e.currentProgram;me===!0&&(De=Br(N,U,G));let Vt=!1,ft=!1,Sn=!1,Ye=De.getUniforms(),En=_e.uniforms;if(ue.useProgram(De.program)&&(Vt=!0,ft=!0,Sn=!0),N.id!==L&&(L=N.id,ft=!0),Vt||S!==y){if(Ye.setValue(H,"projectionMatrix",y.projectionMatrix),ye.logarithmicDepthBuffer&&Ye.setValue(H,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),S!==y&&(S=y,ft=!0,Sn=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){let Ve=Ye.map.cameraPosition;Ve!==void 0&&Ve.setValue(H,ie.setFromMatrixPosition(y.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Ye.setValue(H,"isOrthographic",y.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||N.skinning)&&Ye.setValue(H,"viewMatrix",y.matrixWorldInverse)}if(N.skinning){Ye.setOptional(H,G,"bindMatrix"),Ye.setOptional(H,G,"bindMatrixInverse");let Ve=G.skeleton;if(Ve){let Hr=Ve.bones;if(ye.floatVertexTextures){if(Ve.boneTexture===null){let vt=Math.sqrt(Hr.length*4);vt=iu(vt),vt=Math.max(vt,4);let Qt=new Float32Array(vt*vt*4);Qt.set(Ve.boneMatrices);let tc=new Ha(Qt,vt,vt,tt,ln);Ve.boneMatrices=Qt,Ve.boneTexture=tc,Ve.boneTextureSize=vt}Ye.setValue(H,"boneTexture",Ve.boneTexture,Pe),Ye.setValue(H,"boneTextureSize",Ve.boneTextureSize)}else Ye.setOptional(H,Ve,"boneMatrices")}}return(ft||_e.receiveShadow!==G.receiveShadow)&&(_e.receiveShadow=G.receiveShadow,Ye.setValue(H,"receiveShadow",G.receiveShadow)),ft&&(Ye.setValue(H,"toneMappingExposure",_.toneMappingExposure),_e.needsLights&&Kl(En,Sn),ne&&N.fog&&E.refreshFogUniforms(En,ne),E.refreshMaterialUniforms(En,N,q,W),xn.upload(H,_e.uniformsList,En,Pe)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(xn.upload(H,_e.uniformsList,En,Pe),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Ye.setValue(H,"center",G.center),Ye.setValue(H,"modelViewMatrix",G.modelViewMatrix),Ye.setValue(H,"normalMatrix",G.normalMatrix),Ye.setValue(H,"modelMatrix",G.matrixWorld),De}function Kl(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function ec(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return T},this.setRenderTarget=function(y,U=0,N=0){T=y,m=U,p=N,y&&Se.get(y).__webglFramebuffer===void 0&&Pe.setupRenderTarget(y);let G=null,ne=!1,Ee=!1;if(y){let pe=y.texture;(pe.isDataTexture3D||pe.isDataTexture2DArray)&&(Ee=!0);let ve=Se.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(G=ve[U],ne=!0):y.isWebGLMultisampleRenderTarget?G=Se.get(y).__webglMultisampledFramebuffer:G=ve,v.copy(y.viewport),C.copy(y.scissor),O=y.scissorTest}else v.copy(D).multiplyScalar(q).floor(),C.copy(R).multiplyScalar(q).floor(),O=F;if(ue.bindFramebuffer(36160,G),ue.viewport(v),ue.scissor(C),ue.setScissorTest(O),ne){let pe=Se.get(y.texture);H.framebufferTexture2D(36160,36064,34069+U,pe.__webglTexture,N)}else if(Ee){let pe=Se.get(y.texture),ve=U||0;H.framebufferTextureLayer(36160,36064,pe.__webglTexture,N||0,ve)}},this.readRenderTargetPixels=function(y,U,N,G,ne,Ee,pe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Se.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pe!==void 0&&(ve=ve[pe]),ve){ue.bindFramebuffer(36160,ve);try{let Ie=y.texture,_e=Ie.format,Te=Ie.type;if(_e!==tt&&Y.convert(_e)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let me=Te===Ji&&(Ae.has("EXT_color_buffer_half_float")||ye.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Te!==aa&&Y.convert(Te)!==H.getParameter(35738)&&!(Te===ln&&(ye.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!me){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H.checkFramebufferStatus(36160)===36053?U>=0&&U<=y.width-G&&N>=0&&N<=y.height-ne&&H.readPixels(U,N,G,ne,Y.convert(_e),Y.convert(Te),Ee):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{let Ie=T!==null?Se.get(T).__webglFramebuffer:null;ue.bindFramebuffer(36160,Ie)}}},this.copyFramebufferToTexture=function(y,U,N=0){let G=Math.pow(2,-N),ne=Math.floor(U.image.width*G),Ee=Math.floor(U.image.height*G),pe=Y.convert(U.format);Pe.setTexture2D(U,0),H.copyTexImage2D(3553,N,pe,y.x,y.y,ne,Ee,0),ue.unbindTexture()},this.copyTextureToTexture=function(y,U,N,G=0){let ne=U.image.width,Ee=U.image.height,pe=Y.convert(N.format),ve=Y.convert(N.type);Pe.setTexture2D(N,0),H.pixelStorei(37440,N.flipY),H.pixelStorei(37441,N.premultiplyAlpha),H.pixelStorei(3317,N.unpackAlignment),U.isDataTexture?H.texSubImage2D(3553,G,y.x,y.y,ne,Ee,pe,ve,U.image.data):U.isCompressedTexture?H.compressedTexSubImage2D(3553,G,y.x,y.y,U.mipmaps[0].width,U.mipmaps[0].height,pe,U.mipmaps[0].data):H.texSubImage2D(3553,G,y.x,y.y,pe,ve,U.image),G===0&&N.generateMipmaps&&H.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(y,U,N,G,ne=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let{width:Ee,height:pe,data:ve}=N.image,Ie=Y.convert(G.format),_e=Y.convert(G.type),Te;if(G.isDataTexture3D)Pe.setTexture3D(G,0),Te=32879;else if(G.isDataTexture2DArray)Pe.setTexture2DArray(G,0),Te=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,G.flipY),H.pixelStorei(37441,G.premultiplyAlpha),H.pixelStorei(3317,G.unpackAlignment);let me=H.getParameter(3314),De=H.getParameter(32878),Vt=H.getParameter(3316),ft=H.getParameter(3315),Sn=H.getParameter(32877);H.pixelStorei(3314,Ee),H.pixelStorei(32878,pe),H.pixelStorei(3316,y.min.x),H.pixelStorei(3315,y.min.y),H.pixelStorei(32877,y.min.z),H.texSubImage3D(Te,ne,U.x,U.y,U.z,y.max.x-y.min.x+1,y.max.y-y.min.y+1,y.max.z-y.min.z+1,Ie,_e,ve),H.pixelStorei(3314,me),H.pixelStorei(32878,De),H.pixelStorei(3316,Vt),H.pixelStorei(3315,ft),H.pixelStorei(32877,Sn),ne===0&&G.generateMipmaps&&H.generateMipmap(Te),ue.unbindTexture()},this.initTexture=function(y){Pe.setTexture2D(y,0),ue.unbindTexture()},this.resetState=function(){m=0,p=0,T=null,ue.reset(),Z.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var ai=class extends ke{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};ai.prototype.isScene=!0;var Qa=class extends tn{constructor(e){super();this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}};Qa.prototype.isPointsMaterial=!0;var ml=new xe,qa=new Dn,wr=new Yn,Mr=new w,zi=class extends ke{constructor(e=new ze,t=new Qa){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(i),wr.radius+=a,e.ray.intersectsSphere(wr)===!1)return;ml.copy(i).invert(),qa.copy(e.ray).applyMatrix4(ml);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){let c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let g=h,_=f;g<_;g++){let x=c.getX(g);Mr.fromBufferAttribute(d,x),gl(Mr,x,l,i,e,t,this)}}else{let h=Math.max(0,s.start),f=Math.min(d.count,s.start+s.count);for(let g=h,_=f;g<_;g++)Mr.fromBufferAttribute(d,g),gl(Mr,g,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){let o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};zi.prototype.isPoints=!0;function gl(r,e,t,n,i,a,s){let o=qa.distanceSqToPoint(r);if(o<t){let l=new w;qa.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}var _l={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},xl=class{constructor(e,t,n){let i=this,a=!1,s=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,a===!1&&i.onStart!==void 0&&i.onStart(u,s,o),a=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,o),s===o&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},Tm=new xl,si=class{constructor(e){this.manager=e!==void 0?e:Tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,a){n.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},Za=class extends si{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,s=_l.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;let o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function l(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),_l.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(u){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),i&&i(u),a.manager.itemError(e),a.manager.itemEnd(e)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}},vl=class extends si{constructor(e){super(e)}load(e,t,n,i){let a=new Ni,s=new Za(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function l(c){s.load(e[c],function(u){a.images[c]=u,o++,o===6&&(a.needsUpdate=!0,t&&t(a))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return a}},yl=class extends si{constructor(e){super(e)}load(e,t,n,i){let a=new yt,s=new Za(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o;let l=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;a.format=l?Gn:tt,a.needsUpdate=!0,t!==void 0&&t(a)},n,i),a}},$a=class extends ke{constructor(e,t=1){super();this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};$a.prototype.isLight=!0;var oi=class extends _r{constructor(e=-1,t=1,n=1,i=-1,a=.1,s=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,a=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};oi.prototype.isOrthographicCamera=!0;var bl=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}},Ja=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=wl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function wl(){return(typeof performance=="undefined"?Date:performance).now()}var Ml="\\[\\]\\.:\\/",Ka="[^"+Ml+"]",Lm="[^"+Ml.replace("\\.","")+"]",fg=/((?:WC+[\/:])*)/.source.replace("WC",Ka),pg=/(WCOD+)?/.source.replace("WCOD",Lm),mg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ka),gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ka),Ar=class{constructor(e,t,n=0,i=Infinity){this.ray=new Dn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!1,n=[]){return es(e,this,n,t),n.sort(Al),n}intersectObjects(e,t=!1,n=[]){for(let i=0,a=e.length;i<a;i++)es(e[i],this,n,t);return n.sort(Al),n}};function Al(r,e){return r.distance-e.distance}function es(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){let i=r.children;for(let a=0,s=i.length;a<s;a++)es(i[a],e,t,!0)}}var Tt=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Pm=new fn({side:et,depthWrite:!1,depthTest:!1}),_g=new kt(new gr,Pm);si.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),bl.extractUrlBase(r)};si.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Mt.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};Mt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Mt.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Mt.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};Mt.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};Yn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};yr.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};nt.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};nt.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};nt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};nt.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};nt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};nt.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};xe.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};xe.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};xe.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new w().setFromMatrixColumn(this,3)};xe.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};xe.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};xe.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};xe.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};xe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};xe.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};xe.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};xe.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};xe.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};xe.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};xe.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};xe.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};xe.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};xe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};xe.prototype.makeFrustum=function(r,e,t,n,i,a){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,a)};xe.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Bt.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};wt.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};wt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Dn.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Dn.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};Dn.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};Qe.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};Qe.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};Qe.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};Qe.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};Qe.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};Qe.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Qe.getBarycoord(r,e,t,n,i)};Qe.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Qe.getNormal(r,e,t,n)};ae.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};ae.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};ae.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};w.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};w.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};w.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};w.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};w.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};w.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};w.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};w.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};w.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ce.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};Ce.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};ke.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};ke.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};ke.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};ke.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};ke.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(ke.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});kt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(kt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Wd},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});pt.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties($a.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(Ue.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Ut},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Ut)}}});Ue.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Ut:da),this};Ue.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Ue.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};ze.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};ze.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new Ue(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};ze.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};ze.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};ze.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};ze.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};ze.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(ze.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});ai.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(tn.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Me}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===io}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}}});Object.defineProperties(We.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});Ne.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};Ne.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};Ne.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Ne.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Ne.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Ne.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Ne.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Ne.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Ne.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Ne.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Ne.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Ne.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Ne.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Ne.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Ne.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};Ne.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Ne.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Ne.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Ne.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Ne.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Ne.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Ne.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Ne.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Ne.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Ne.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Ne.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?To:Li}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(fl.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(ot.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});xr.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};xr.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};Fn.crossOrigin=void 0;Fn.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let i=new yl;i.setCrossOrigin(this.crossOrigin);let a=i.load(r,t,void 0,n);return e&&(a.mapping=e),a};Fn.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let i=new vl;i.setCrossOrigin(this.crossOrigin);let a=i.load(r,t,void 0,n);return e&&(a.mapping=e),a};Fn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Fn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eo);var Pt=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},Fm=new oi(-1,1,1,-1,0,1),ts=new ze;ts.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3));ts.setAttribute("uv",new bt([0,2,0,0,2,0],2));var vn=class{constructor(e){this._mesh=new kt(ts,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Fm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Sl={uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

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

		}`},ns=class extends Pt{constructor(e=.96){super();Sl===void 0&&console.error("THREE.AfterimagePass relies on AfterimageShader"),this.shader=Sl,this.uniforms=_n.clone(this.shader.uniforms),this.uniforms.damp.value=e,this.textureComp=new ot(window.innerWidth,window.innerHeight,{minFilter:je,magFilter:st,format:tt}),this.textureOld=new ot(window.innerWidth,window.innerHeight,{minFilter:je,magFilter:st,format:tt}),this.shaderMaterial=new We({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new vn(this.shaderMaterial);let t=new fn;this.copyFsQuad=new vn(t)}render(e,t,n){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=n.texture,e.setRenderTarget(this.textureComp),this.compFsQuad.render(e),this.copyFsQuad.material.map=this.textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this.copyFsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.copyFsQuad.render(e));let i=this.textureOld;this.textureOld=this.textureComp,this.textureComp=i}setSize(e,t){this.textureComp.setSize(e,t),this.textureOld.setSize(e,t)}};var El={type:"change"},is={type:"start"},rs={type:"end"},as=class extends qt{constructor(e,t){super();t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new w,this.minDistance=0,this.maxDistance=Infinity,this.minZoom=0,this.maxZoom=Infinity,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-Infinity,this.maxAzimuthAngle=Infinity,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ln.ROTATE,MIDDLE:Ln.DOLLY,RIGHT:Ln.PAN},this.touches={ONE:Pn.ROTATE,TWO:Pn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.listenToKeyEvents=function(A){A.addEventListener("keydown",Q),this._domElementKeyEvents=A},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(El),n.update(),a=i.NONE},this.update=function(){let A=new w,M=new wt().setFromUnitVectors(e.up,new w(0,1,0)),Y=M.clone().invert(),Z=new w,se=new wt,X=2*Math.PI;return function(){let Re=n.object.position;A.copy(Re).sub(n.target),A.applyQuaternion(M),o.setFromVector3(A),n.autoRotate&&a===i.NONE&&C(S()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Fe=n.minAzimuthAngle,rt=n.maxAzimuthAngle;return isFinite(Fe)&&isFinite(rt)&&(Fe<-Math.PI?Fe+=X:Fe>Math.PI&&(Fe-=X),rt<-Math.PI?rt+=X:rt>Math.PI&&(rt-=X),Fe<=rt?o.theta=Math.max(Fe,Math.min(rt,o.theta)):o.theta=o.theta>(Fe+rt)/2?Math.max(Fe,o.theta):Math.min(rt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),A.setFromSpherical(o),A.applyQuaternion(Y),Re.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||Z.distanceToSquared(n.object.position)>s||8*(1-se.dot(n.object.quaternion))>s?(n.dispatchEvent(El),Z.copy(n.object.position),se.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ce),n.domElement.removeEventListener("pointerdown",Ze),n.domElement.removeEventListener("wheel",b),n.domElement.removeEventListener("touchstart",k),n.domElement.removeEventListener("touchend",ee),n.domElement.removeEventListener("touchmove",K),n.domElement.ownerDocument.removeEventListener("pointermove",$e),n.domElement.ownerDocument.removeEventListener("pointerup",Xe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Q)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},a=i.NONE,s=1e-6,o=new Tt,l=new Tt,c=1,u=new w,d=!1,h=new ae,f=new ae,g=new ae,_=new ae,x=new ae,m=new ae,p=new ae,T=new ae,L=new ae;function S(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function C(A){l.theta-=A}function O(A){l.phi-=A}let z=function(){let A=new w;return function(Y,Z){A.setFromMatrixColumn(Z,0),A.multiplyScalar(-Y),u.add(A)}}(),W=function(){let A=new w;return function(Y,Z){n.screenSpacePanning===!0?A.setFromMatrixColumn(Z,1):(A.setFromMatrixColumn(Z,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(Y),u.add(A)}}(),q=function(){let A=new w;return function(Y,Z){let se=n.domElement;if(n.object.isPerspectiveCamera){let X=n.object.position;A.copy(X).sub(n.target);let he=A.length();he*=Math.tan(n.object.fov/2*Math.PI/180),z(2*Y*he/se.clientHeight,n.object.matrix),W(2*Z*he/se.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(Y*(n.object.right-n.object.left)/n.object.zoom/se.clientWidth,n.object.matrix),W(Z*(n.object.top-n.object.bottom)/n.object.zoom/se.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function B(A){n.object.isPerspectiveCamera?c/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function P(A){n.object.isPerspectiveCamera?c*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(A){h.set(A.clientX,A.clientY)}function R(A){p.set(A.clientX,A.clientY)}function F(A){_.set(A.clientX,A.clientY)}function j(A){f.set(A.clientX,A.clientY),g.subVectors(f,h).multiplyScalar(n.rotateSpeed);let M=n.domElement;C(2*Math.PI*g.x/M.clientHeight),O(2*Math.PI*g.y/M.clientHeight),h.copy(f),n.update()}function $(A){T.set(A.clientX,A.clientY),L.subVectors(T,p),L.y>0?B(v()):L.y<0&&P(v()),p.copy(T),n.update()}function J(A){x.set(A.clientX,A.clientY),m.subVectors(x,_).multiplyScalar(n.panSpeed),q(m.x,m.y),_.copy(x),n.update()}function re(A){A.deltaY<0?P(v()):A.deltaY>0&&B(v()),n.update()}function ie(A){let M=!1;switch(A.code){case n.keys.UP:q(0,n.keyPanSpeed),M=!0;break;case n.keys.BOTTOM:q(0,-n.keyPanSpeed),M=!0;break;case n.keys.LEFT:q(n.keyPanSpeed,0),M=!0;break;case n.keys.RIGHT:q(-n.keyPanSpeed,0),M=!0;break}M&&(A.preventDefault(),n.update())}function de(A){if(A.touches.length==1)h.set(A.touches[0].pageX,A.touches[0].pageY);else{let M=.5*(A.touches[0].pageX+A.touches[1].pageX),Y=.5*(A.touches[0].pageY+A.touches[1].pageY);h.set(M,Y)}}function fe(A){if(A.touches.length==1)_.set(A.touches[0].pageX,A.touches[0].pageY);else{let M=.5*(A.touches[0].pageX+A.touches[1].pageX),Y=.5*(A.touches[0].pageY+A.touches[1].pageY);_.set(M,Y)}}function H(A){let M=A.touches[0].pageX-A.touches[1].pageX,Y=A.touches[0].pageY-A.touches[1].pageY,Z=Math.sqrt(M*M+Y*Y);p.set(0,Z)}function Le(A){n.enableZoom&&H(A),n.enablePan&&fe(A)}function Ae(A){n.enableZoom&&H(A),n.enableRotate&&de(A)}function ye(A){if(A.touches.length==1)f.set(A.touches[0].pageX,A.touches[0].pageY);else{let Y=.5*(A.touches[0].pageX+A.touches[1].pageX),Z=.5*(A.touches[0].pageY+A.touches[1].pageY);f.set(Y,Z)}g.subVectors(f,h).multiplyScalar(n.rotateSpeed);let M=n.domElement;C(2*Math.PI*g.x/M.clientHeight),O(2*Math.PI*g.y/M.clientHeight),h.copy(f)}function ue(A){if(A.touches.length==1)x.set(A.touches[0].pageX,A.touches[0].pageY);else{let M=.5*(A.touches[0].pageX+A.touches[1].pageX),Y=.5*(A.touches[0].pageY+A.touches[1].pageY);x.set(M,Y)}m.subVectors(x,_).multiplyScalar(n.panSpeed),q(m.x,m.y),_.copy(x)}function we(A){let M=A.touches[0].pageX-A.touches[1].pageX,Y=A.touches[0].pageY-A.touches[1].pageY,Z=Math.sqrt(M*M+Y*Y);T.set(0,Z),L.set(0,Math.pow(T.y/p.y,n.zoomSpeed)),B(L.y),p.copy(T)}function Se(A){n.enableZoom&&we(A),n.enablePan&&ue(A)}function Pe(A){n.enableZoom&&we(A),n.enableRotate&&ye(A)}function Ze(A){if(n.enabled!==!1)switch(A.pointerType){case"mouse":case"pen":ht(A);break}}function $e(A){if(n.enabled!==!1)switch(A.pointerType){case"mouse":case"pen":Je(A);break}}function Xe(A){switch(A.pointerType){case"mouse":case"pen":E();break}}function ht(A){A.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus();let M;switch(A.button){case 0:M=n.mouseButtons.LEFT;break;case 1:M=n.mouseButtons.MIDDLE;break;case 2:M=n.mouseButtons.RIGHT;break;default:M=-1}switch(M){case Ln.DOLLY:if(n.enableZoom===!1)return;R(A),a=i.DOLLY;break;case Ln.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;F(A),a=i.PAN}else{if(n.enableRotate===!1)return;D(A),a=i.ROTATE}break;case Ln.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;D(A),a=i.ROTATE}else{if(n.enablePan===!1)return;F(A),a=i.PAN}break;default:a=i.NONE}a!==i.NONE&&(n.domElement.ownerDocument.addEventListener("pointermove",$e),n.domElement.ownerDocument.addEventListener("pointerup",Xe),n.dispatchEvent(is))}function Je(A){if(n.enabled!==!1)switch(A.preventDefault(),a){case i.ROTATE:if(n.enableRotate===!1)return;j(A);break;case i.DOLLY:if(n.enableZoom===!1)return;$(A);break;case i.PAN:if(n.enablePan===!1)return;J(A);break}}function E(A){n.domElement.ownerDocument.removeEventListener("pointermove",$e),n.domElement.ownerDocument.removeEventListener("pointerup",Xe),n.enabled!==!1&&(n.dispatchEvent(rs),a=i.NONE)}function b(A){n.enabled===!1||n.enableZoom===!1||a!==i.NONE&&a!==i.ROTATE||(A.preventDefault(),n.dispatchEvent(is),re(A),n.dispatchEvent(rs))}function Q(A){n.enabled===!1||n.enablePan===!1||ie(A)}function k(A){if(n.enabled!==!1){switch(A.preventDefault(),A.touches.length){case 1:switch(n.touches.ONE){case Pn.ROTATE:if(n.enableRotate===!1)return;de(A),a=i.TOUCH_ROTATE;break;case Pn.PAN:if(n.enablePan===!1)return;fe(A),a=i.TOUCH_PAN;break;default:a=i.NONE}break;case 2:switch(n.touches.TWO){case Pn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Le(A),a=i.TOUCH_DOLLY_PAN;break;case Pn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(A),a=i.TOUCH_DOLLY_ROTATE;break;default:a=i.NONE}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(is)}}function K(A){if(n.enabled!==!1)switch(A.preventDefault(),a){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ye(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ue(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pe(A),n.update();break;default:a=i.NONE}}function ee(A){n.enabled!==!1&&(n.dispatchEvent(rs),a=i.NONE)}function ce(A){n.enabled!==!1&&A.preventDefault()}n.domElement.addEventListener("contextmenu",ce),n.domElement.addEventListener("pointerdown",Ze),n.domElement.addEventListener("wheel",b,{passive:!1}),n.domElement.addEventListener("touchstart",k,{passive:!1}),n.domElement.addEventListener("touchend",ee),n.domElement.addEventListener("touchmove",K,{passive:!1}),this.update()}};var li={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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

		}`};var Nn=class extends Pt{constructor(e,t){super();this.textureID=t!==void 0?t:"tDiffuse",e instanceof We?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_n.clone(e.uniforms),this.material=new We({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new vn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}};var ss=class extends Pt{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),a.buffers.stencil.setFunc(i.ALWAYS,s,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(i.EQUAL,1,4294967295),a.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),a.buffers.stencil.setLocked(!0)}},Tl=class extends Pt{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},os=class{constructor(e,t){if(this.renderer=e,t===void 0){let n={minFilter:je,magFilter:je,format:tt},i=e.getSize(new ae);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new ot(this._width*this._pixelRatio,this._height*this._pixelRatio,n),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],li===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Nn===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Nn(li),this.clock=new Ja}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,a=this.passes.length;i<a;i++){let s=this.passes[i];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),s.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ss!==void 0&&(s instanceof ss?n=!0:s instanceof Tl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}},Ug=new oi(-1,1,1,-1,0,1),Ll=new ze;Ll.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3));Ll.setAttribute("uv",new bt([0,2,0,0,2,0],2));var ls=class extends Pt{constructor(e,t,n,i,a){super();this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=a!==void 0?a:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Me}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==void 0&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),a=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,a),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=s),e.autoClear=i}};var Pl={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Me(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},yn=class extends Pt{constructor(e,t,n,i){super();this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new Me(0,0,0);let a={minFilter:je,magFilter:je,format:tt};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ot(s,o,a),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new ot(s,o,a);f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let g=new ot(s,o,a);g.texture.name="UnrealBloomPass.v"+h,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),s=Math.round(s/2),o=Math.round(o/2)}Pl===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");let l=Pl;this.highPassUniforms=_n.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new We({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{}}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new ae(s,o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,li===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");let d=li;this.copyUniforms=_n.clone(d.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new We({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:Zi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Me,this.oldClearAlpha=1,this.basic=new fn,this.fsQuad=new vn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,i),this.renderTargetsVertical[a].setSize(n,i),this.separableBlurMaterials[a].uniforms.texSize.value=new ae(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=yn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=yn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}getSeperableBlurMaterial(e){return new We({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new We({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};yn.BlurDirectionX=new ae(1,0);yn.BlurDirectionY=new ae(0,1);var Fl={uniforms:{tDiffuse:{value:null},resolution:{value:new ae(1/1024,1/512)}},vertexShader:`

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
		}`};var Tr={};Ns(Tr,{bulb:()=>us,collidingBulb:()=>Bm,collidingDisc:()=>Om,cube:()=>Rm,disc:()=>ds,eightCubes:()=>Gm,expandingSphere:()=>Um,fountain:()=>Hm,harmonicSphere:()=>Im,plane:()=>km,plane2:()=>Vm,regularCube:()=>Dm,solarSystem:()=>zm,sphere:()=>Nm,teapot:()=>Wm,tesseract:()=>Xm});var cs=class extends ze{constructor(e=50,t=10,n=!0,i=!0,a=!0,s=!0,o=!0){let l=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,3,16,17,18,7,19,20,21,11,22,23,24,15,25,26,27,18,28,29,30,21,31,32,33,24,34,35,36,27,37,38,39,30,40,41,0,33,42,43,4,36,44,45,8,39,46,47,12,12,13,14,15,48,49,50,51,52,53,54,55,56,57,58,59,15,25,26,27,51,60,61,62,55,63,64,65,59,66,67,68,27,37,38,39,62,69,70,71,65,72,73,74,68,75,76,77,39,46,47,12,71,78,79,48,74,80,81,52,77,82,83,56,56,57,58,59,84,85,86,87,88,89,90,91,92,93,94,95,59,66,67,68,87,96,97,98,91,99,100,101,95,102,103,104,68,75,76,77,98,105,106,107,101,108,109,110,104,111,112,113,77,82,83,56,107,114,115,84,110,116,117,88,113,118,119,92,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,123,136,137,120,127,138,139,124,131,140,141,128,135,142,143,132,132,133,134,135,144,145,146,147,148,149,150,151,68,152,153,154,135,142,143,132,147,155,156,144,151,157,158,148,154,159,160,68,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,164,177,178,161,168,179,180,165,172,181,182,169,176,183,184,173,173,174,175,176,185,186,187,188,189,190,191,192,193,194,195,196,176,183,184,173,188,197,198,185,192,199,200,189,196,201,202,193,203,203,203,203,204,205,206,207,208,208,208,208,209,210,211,212,203,203,203,203,207,213,214,215,208,208,208,208,212,216,217,218,203,203,203,203,215,219,220,221,208,208,208,208,218,222,223,224,203,203,203,203,221,225,226,204,208,208,208,208,224,227,228,209,209,210,211,212,229,230,231,232,233,234,235,236,237,238,239,240,212,216,217,218,232,241,242,243,236,244,245,246,240,247,248,249,218,222,223,224,243,250,251,252,246,253,254,255,249,256,257,258,224,227,228,209,252,259,260,229,255,261,262,233,258,263,264,237,265,265,265,265,266,267,268,269,270,271,272,273,92,119,118,113,265,265,265,265,269,274,275,276,273,277,278,279,113,112,111,104,265,265,265,265,276,280,281,282,279,283,284,285,104,103,102,95,265,265,265,265,282,286,287,266,285,288,289,270,95,94,93,92],c=[1.4,0,2.4,1.4,-.784,2.4,.784,-1.4,2.4,0,-1.4,2.4,1.3375,0,2.53125,1.3375,-.749,2.53125,.749,-1.3375,2.53125,0,-1.3375,2.53125,1.4375,0,2.53125,1.4375,-.805,2.53125,.805,-1.4375,2.53125,0,-1.4375,2.53125,1.5,0,2.4,1.5,-.84,2.4,.84,-1.5,2.4,0,-1.5,2.4,-.784,-1.4,2.4,-1.4,-.784,2.4,-1.4,0,2.4,-.749,-1.3375,2.53125,-1.3375,-.749,2.53125,-1.3375,0,2.53125,-.805,-1.4375,2.53125,-1.4375,-.805,2.53125,-1.4375,0,2.53125,-.84,-1.5,2.4,-1.5,-.84,2.4,-1.5,0,2.4,-1.4,.784,2.4,-.784,1.4,2.4,0,1.4,2.4,-1.3375,.749,2.53125,-.749,1.3375,2.53125,0,1.3375,2.53125,-1.4375,.805,2.53125,-.805,1.4375,2.53125,0,1.4375,2.53125,-1.5,.84,2.4,-.84,1.5,2.4,0,1.5,2.4,.784,1.4,2.4,1.4,.784,2.4,.749,1.3375,2.53125,1.3375,.749,2.53125,.805,1.4375,2.53125,1.4375,.805,2.53125,.84,1.5,2.4,1.5,.84,2.4,1.75,0,1.875,1.75,-.98,1.875,.98,-1.75,1.875,0,-1.75,1.875,2,0,1.35,2,-1.12,1.35,1.12,-2,1.35,0,-2,1.35,2,0,.9,2,-1.12,.9,1.12,-2,.9,0,-2,.9,-.98,-1.75,1.875,-1.75,-.98,1.875,-1.75,0,1.875,-1.12,-2,1.35,-2,-1.12,1.35,-2,0,1.35,-1.12,-2,.9,-2,-1.12,.9,-2,0,.9,-1.75,.98,1.875,-.98,1.75,1.875,0,1.75,1.875,-2,1.12,1.35,-1.12,2,1.35,0,2,1.35,-2,1.12,.9,-1.12,2,.9,0,2,.9,.98,1.75,1.875,1.75,.98,1.875,1.12,2,1.35,2,1.12,1.35,1.12,2,.9,2,1.12,.9,2,0,.45,2,-1.12,.45,1.12,-2,.45,0,-2,.45,1.5,0,.225,1.5,-.84,.225,.84,-1.5,.225,0,-1.5,.225,1.5,0,.15,1.5,-.84,.15,.84,-1.5,.15,0,-1.5,.15,-1.12,-2,.45,-2,-1.12,.45,-2,0,.45,-.84,-1.5,.225,-1.5,-.84,.225,-1.5,0,.225,-.84,-1.5,.15,-1.5,-.84,.15,-1.5,0,.15,-2,1.12,.45,-1.12,2,.45,0,2,.45,-1.5,.84,.225,-.84,1.5,.225,0,1.5,.225,-1.5,.84,.15,-.84,1.5,.15,0,1.5,.15,1.12,2,.45,2,1.12,.45,.84,1.5,.225,1.5,.84,.225,.84,1.5,.15,1.5,.84,.15,-1.6,0,2.025,-1.6,-.3,2.025,-1.5,-.3,2.25,-1.5,0,2.25,-2.3,0,2.025,-2.3,-.3,2.025,-2.5,-.3,2.25,-2.5,0,2.25,-2.7,0,2.025,-2.7,-.3,2.025,-3,-.3,2.25,-3,0,2.25,-2.7,0,1.8,-2.7,-.3,1.8,-3,-.3,1.8,-3,0,1.8,-1.5,.3,2.25,-1.6,.3,2.025,-2.5,.3,2.25,-2.3,.3,2.025,-3,.3,2.25,-2.7,.3,2.025,-3,.3,1.8,-2.7,.3,1.8,-2.7,0,1.575,-2.7,-.3,1.575,-3,-.3,1.35,-3,0,1.35,-2.5,0,1.125,-2.5,-.3,1.125,-2.65,-.3,.9375,-2.65,0,.9375,-2,-.3,.9,-1.9,-.3,.6,-1.9,0,.6,-3,.3,1.35,-2.7,.3,1.575,-2.65,.3,.9375,-2.5,.3,1.125,-1.9,.3,.6,-2,.3,.9,1.7,0,1.425,1.7,-.66,1.425,1.7,-.66,.6,1.7,0,.6,2.6,0,1.425,2.6,-.66,1.425,3.1,-.66,.825,3.1,0,.825,2.3,0,2.1,2.3,-.25,2.1,2.4,-.25,2.025,2.4,0,2.025,2.7,0,2.4,2.7,-.25,2.4,3.3,-.25,2.4,3.3,0,2.4,1.7,.66,.6,1.7,.66,1.425,3.1,.66,.825,2.6,.66,1.425,2.4,.25,2.025,2.3,.25,2.1,3.3,.25,2.4,2.7,.25,2.4,2.8,0,2.475,2.8,-.25,2.475,3.525,-.25,2.49375,3.525,0,2.49375,2.9,0,2.475,2.9,-.15,2.475,3.45,-.15,2.5125,3.45,0,2.5125,2.8,0,2.4,2.8,-.15,2.4,3.2,-.15,2.4,3.2,0,2.4,3.525,.25,2.49375,2.8,.25,2.475,3.45,.15,2.5125,2.9,.15,2.475,3.2,.15,2.4,2.8,.15,2.4,0,0,3.15,.8,0,3.15,.8,-.45,3.15,.45,-.8,3.15,0,-.8,3.15,0,0,2.85,.2,0,2.7,.2,-.112,2.7,.112,-.2,2.7,0,-.2,2.7,-.45,-.8,3.15,-.8,-.45,3.15,-.8,0,3.15,-.112,-.2,2.7,-.2,-.112,2.7,-.2,0,2.7,-.8,.45,3.15,-.45,.8,3.15,0,.8,3.15,-.2,.112,2.7,-.112,.2,2.7,0,.2,2.7,.45,.8,3.15,.8,.45,3.15,.112,.2,2.7,.2,.112,2.7,.4,0,2.55,.4,-.224,2.55,.224,-.4,2.55,0,-.4,2.55,1.3,0,2.55,1.3,-.728,2.55,.728,-1.3,2.55,0,-1.3,2.55,1.3,0,2.4,1.3,-.728,2.4,.728,-1.3,2.4,0,-1.3,2.4,-.224,-.4,2.55,-.4,-.224,2.55,-.4,0,2.55,-.728,-1.3,2.55,-1.3,-.728,2.55,-1.3,0,2.55,-.728,-1.3,2.4,-1.3,-.728,2.4,-1.3,0,2.4,-.4,.224,2.55,-.224,.4,2.55,0,.4,2.55,-1.3,.728,2.55,-.728,1.3,2.55,0,1.3,2.55,-1.3,.728,2.4,-.728,1.3,2.4,0,1.3,2.4,.224,.4,2.55,.4,.224,2.55,.728,1.3,2.55,1.3,.728,2.55,.728,1.3,2.4,1.3,.728,2.4,0,0,0,1.425,0,0,1.425,.798,0,.798,1.425,0,0,1.425,0,1.5,0,.075,1.5,.84,.075,.84,1.5,.075,0,1.5,.075,-.798,1.425,0,-1.425,.798,0,-1.425,0,0,-.84,1.5,.075,-1.5,.84,.075,-1.5,0,.075,-1.425,-.798,0,-.798,-1.425,0,0,-1.425,0,-1.5,-.84,.075,-.84,-1.5,.075,0,-1.5,.075,.798,-1.425,0,1.425,-.798,0,.84,-1.5,.075,1.5,-.84,.075];super();t=Math.max(2,Math.floor(t));let u=1.3,h=3.15*(o?1:u)/2,f=e/h,g=n?(8*t-4)*t:0;g+=i?(16*t-4)*t:0,g+=a?40*t*t:0;let _=new Uint32Array(g*3),x=n?4:0;x+=i?8:0,x+=a?20:0,x*=(t+1)*(t+1);let m=new Float32Array(x*3),p=new Float32Array(x*3),T=new Float32Array(x*2),L=new xe;L.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0);let S=[],v=[],C=[],O=[],z=[],W=[],q=[],B=[],P=[],D=new w,R,F,j,$,J=0,re=0,ie=new w,de=new xe,fe=new xe,H=new Ce,Le=new Ce,Ae=new Ce,ye=new Ce,ue=new w,we=new w,Se=L.clone();Se.transpose();let Pe=(k,K,ee)=>!(m[k*3]===m[K*3]&&m[k*3+1]===m[K*3+1]&&m[k*3+2]===m[K*3+2]||m[k*3]===m[ee*3]&&m[k*3+1]===m[ee*3+1]&&m[k*3+2]===m[ee*3+2]||m[K*3]===m[ee*3]&&m[K*3+1]===m[ee*3+1]&&m[K*3+2]===m[ee*3+2]);for(let k=0;k<3;k++)W[k]=new xe;let Ze=a?0:20,$e=n?32:28,Xe=t+1,ht=0,Je=0,E=0,b=0,Q=0;for(let k=Ze;k<$e;k++)if(i||k<20||k>=28){for(let K=0;K<3;K++){for(let ee=0;ee<4;ee++)for(let ce=0;ce<4;ce++)S[ce*4+ee]=c[l[k*16+ee*4+ce]*3+K],s&&k>=20&&k<28&&K!==2&&(S[ce*4+ee]*=1.077),!o&&K===2&&(S[ce*4+ee]*=u);de.set(S[0],S[1],S[2],S[3],S[4],S[5],S[6],S[7],S[8],S[9],S[10],S[11],S[12],S[13],S[14],S[15]),fe.multiplyMatrices(de,L),W[K].multiplyMatrices(Se,fe)}for(let K=0;K<=t;K++){let ee=K/t;for(let ce=0;ce<=t;ce++){let A=ce/t;for($=4,F=j=1;$--;)v[$]=F,C[$]=j,F*=ee,j*=A,$===3?(O[$]=z[$]=0,J=re=1):(O[$]=J*(3-$),z[$]=re*(3-$),J*=ee,re*=A);H.fromArray(v),Le.fromArray(C),Ae.fromArray(O),ye.fromArray(z);for(let M=0;M<3;M++)R=H.clone(),R.applyMatrix4(W[M]),q[M]=R.dot(Le),R=Ae.clone(),R.applyMatrix4(W[M]),B[M]=R.dot(Le),R=H.clone(),R.applyMatrix4(W[M]),P[M]=R.dot(ye);ue.fromArray(B),we.fromArray(P),D.crossVectors(we,ue),D.normalize(),q[0]===0&&q[1]===0?ie.set(0,q[2]>h?1:-1,0):ie.set(D.x,D.z,-D.y),m[Je++]=f*q[0],m[Je++]=f*(q[2]-h),m[Je++]=-f*q[1],p[E++]=ie.x,p[E++]=ie.y,p[E++]=ie.z,T[b++]=1-A,T[b++]=1-ee}}for(let K=0;K<t;K++)for(let ee=0;ee<t;ee++){let ce=ht*Xe*Xe+K*Xe+ee,A=ce+1,M=A+Xe,Y=ce+Xe;Pe(ce,A,M)&&(_[Q++]=ce,_[Q++]=A,_[Q++]=M),Pe(ce,M,Y)&&(_[Q++]=ce,_[Q++]=M,_[Q++]=Y)}ht++}this.setIndex(new Ue(_,1)),this.setAttribute("position",new Ue(m,3)),this.setAttribute("normal",new Ue(p,3)),this.setAttribute("uv",new Ue(T,2)),this.computeBoundingSphere()}};var Sr=(r,e,t,n=256)=>~~(Math.min(r,.99)*n)+~~(Math.min(e,.99)*n)*n+~~(Math.min(t,.99)*n)*n*n;var Cm=r=>Math.exp(-Math.pow(r*2,2)),Er=r=>r<5?(r+1.09611)*1900:(r+1.7)*1700,gt=r=>{let e=r*Math.pow(Math.random(),15),t=Er(e);return{mass:e,temperature:t*(1+.75*Cm(1-2*Math.random()))}};var Lt=r=>r?[{temperature:0,mass:r,position:new w,speed:new w}]:[],Rm=({number:r,range:e,speed:t,mass:n,blackHoleMass:i})=>new Array(r).fill().map(()=>({...gt(n),position:new w(e/2-Math.random()*e,e/2-Math.random()*e,e/2-Math.random()*e),speed:new w(t/2-Math.random()*t,t/2-Math.random()*t,t/2-Math.random()*t)})).concat(Lt(i)),Dm=({number:r,range:e,speed:t,mass:n,blackHoleMass:i})=>{let a=~~Math.cbrt(r);return new Array(a).fill().map((s,o)=>new Array(a).fill().map((l,c)=>new Array(a).fill().map((u,d)=>{let h=new w(o/a-1/2,c/a-1/2,d/a-1/2);return{mass:n,temperature:15e3*(.75-h.lengthSq())-3e3,position:h.multiplyScalar(e),speed:new w(t/2-Math.random()*t,t/2-Math.random()*t,t/2-Math.random()*t)}}))).flat(3).concat(Lt(i))},Nm=({number:r,range:e,mass:t,speed:n,blackHoleMass:i,gravitationalConstant:a})=>{let s=new Tt;return e*=.5,new Array(r).fill().map(()=>{s.radius=e*Math.cbrt(Math.random()),s.theta=Math.random()*2*Math.PI,s.phi=Math.acos(2*Math.random()-1);let o=new w().setFromSpherical(s),l=1-2*Math.random(),c=1-2*Math.random(),u=-(l*o.x+c*o.y)/o.z,d=new w(l,c,u).normalize().multiplyScalar(n*Math.sqrt(a*i/s.radius));return{...gt(t),position:o,speed:d}}).concat(Lt(i))},Im=({number:r,range:e,mass:t,speed:n,blackHoleMass:i,gravitationalConstant:a})=>{let s=new Tt;return e*=.5,new Array(r).fill().map(()=>{s.radius=e*Math.cbrt(Math.random()),s.theta=Math.random()*2*Math.PI,s.phi=Math.acos(2*Math.random()-1);let o=new w().setFromSpherical(s),l=new w(n*Math.cos(s.theta),0,-n*Math.sin(s.theta)).normalize().multiplyScalar(Math.sqrt(a*i/s.radius));return{...gt(t),position:o,speed:l}}).concat(Lt(i))},Um=({number:r,range:e,mass:t,speed:n,blackHoleMass:i})=>{let a=new Tt;return e*=.5,new Array(r).fill().map(()=>{a.radius=e*Math.cbrt(Math.random()),a.theta=Math.random()*2*Math.PI,a.phi=Math.acos(2*Math.random()-1);let s=new w().setFromSpherical(a),o=s.clone().normalize().multiplyScalar(Math.random()*n);return{...gt(t),position:s,speed:o}}).concat(Lt(i))},ds=({number:r,range:e,mass:t,speed:n,blackHoleMass:i,gravitationalConstant:a,dimensions:s})=>{let o=new Tt;e*=.5;let l=e/12;if(s===4)return new Array(r).fill().map(()=>{let c=l+(e-l)*Math.random(),u=Math.random()*2*Math.PI,d=Math.random()*2*Math.PI,h=new Ce(c*Math.cos(u),c*Math.sin(d),c*Math.cos(d),c*Math.sin(u)),f=new Ce(Math.sin(u),-Math.cos(d),Math.sin(d),-Math.cos(u)).normalize().multiplyScalar(n*Math.sqrt(a*i)/c);return{...gt(t),position:h,speed:f}}).concat(Lt(i));if(s===3)return new Array(r).fill().map(()=>{o.radius=l+(e-l)*Math.random(),o.theta=Math.random()*2*Math.PI,o.phi=Math.PI/2;let c=new w().setFromSpherical(o),u=new w(Math.cos(o.theta),0,-Math.sin(o.theta)).normalize().multiplyScalar(n*Math.sqrt(a*i/o.radius));return{...gt(t),position:c,speed:u}}).concat(Lt(i));if(s===2)return new Array(r).fill().map(()=>{let c=l+(e-l)*Math.random(),u=Math.random()*2*Math.PI,d=new ae(c*Math.cos(u),c*Math.sin(u)),h=new ae(Math.sin(u),-Math.cos(u)).normalize().multiplyScalar(n*Math.sqrt(a*i));return{...gt(t),position:d,speed:h}}).concat(Lt(i))},us=({number:r,range:e,mass:t,speed:n,blackHoleMass:i,gravitationalConstant:a})=>{let s=new Tt;return e*=.5,new Array(r).fill().map(()=>{s.radius=e*Math.random(),s.theta=Math.random()*2*Math.PI,s.phi=Math.PI/2*(1+Math.pow(1-s.radius/e,3)*2*(.5-Math.random())),s.radius+=Math.abs(Math.cos(s.phi))*e/8;let o=new w().setFromSpherical(s),l=new w(Math.cos(s.theta),0,-Math.sin(s.theta)).normalize().multiplyScalar(n*Math.sqrt(a*i/s.radius));return{...gt(t),position:o,speed:l}}).concat(Lt(i))},zm=({gravitationalConstant:r})=>{let e=new Tt;e.theta=Math.PI/2;let t={temperature:Sr(1,1,0),mass:1989e3,position:new w,speed:new w},n=(S,v,C)=>(e.radius=v,e.phi=Math.random()*2*Math.PI,{temperature:Sr(...C),mass:S,position:new w().setFromSpherical(e),speed:new w(-Math.cos(e.phi),Math.sin(e.phi),0).normalize().multiplyScalar(Math.sqrt(r*t.mass/e.radius))}),i=n(.3285,57.909,[.8,.8,.8]),a=n(4.867,108.16,[.8,.8,0]),s=n(5.972,149.6,[.15,.25,1]),o=n(.639,227.99,[1,.5,.25]),l=n(1898,778.36,[1,.65,.46]),c=n(568.3,1433.5,[.55,.54,.4]),u=n(86.81,2872.4,[0,1,1]),d=n(102.4,4498.4,[0,0,1]),h=(S,v,C,O)=>(e.radius=v,e.phi=Math.random()*2*Math.PI,{temperature:Sr(...C),mass:S,position:new w().setFromSpherical(e).add(O.position),speed:new w(-Math.cos(e.phi),Math.sin(e.phi),0).normalize().multiplyScalar(Math.sqrt(r*O.mass/e.radius)).add(O.speed)}),f=h(.07342,.3844,[.9,.9,.9],s),g=h(.089319,.4218,[.9,.9,.9],l),_=h(.048,.6711,[.9,.9,.9],l),x=h(.14819,1.0704,[.9,.9,.9],l),m=h(.10759,1.8827,[.9,.9,.9],l),p=h(.13452,1.22183,[.9,.9,.9],c),T=h(.002306,.52704,[.9,.9,.9],c),L=h(.001805,3.5613,[.9,.9,.9],c);return[t,i,a,s,f,o,l,g,_,x,m,c,p,T,L,u,d]},Om=({number:r,range:e,mass:t,speed:n,blackHoleMass:i,gravitationalConstant:a,dimensions:s})=>{let o=~~(r/2),l=new w(e*.15,e*.15,-e*.25),c=new St(Math.PI/4,0,0),u=new w(-n,-n,0),d=ds({number:o,range:e/3,mass:t,speed:1,blackHoleMass:i,gravitationalConstant:a,dimensions:s});d.forEach(({position:x,speed:m})=>{x.applyEuler(c).add(l),m.applyEuler(c).add(u)});let h=new w(-e*.15,-e*.15,e*.25),f=new St(-Math.PI/8,0,0),g=new w(n,0,0),_=ds({number:o,range:e/2,mass:t,speed:1,blackHoleMass:i,gravitationalConstant:a,dimensions:s});return _.forEach(({position:x,speed:m})=>{x.applyEuler(f).add(h),m.applyEuler(f).add(g)}),[...d,..._]},Bm=({number:r,range:e,mass:t,speed:n,blackHoleMass:i,gravitationalConstant:a})=>{let s=~~(r/2),o=new w(e*.15,e*.15,-e*.25),l=new St(Math.PI/4,0,0),c=new w(-n,-n,0),u=us({number:s,range:e/3,mass:t,speed:1,blackHoleMass:i,gravitationalConstant:a});u.forEach(({position:_,speed:x})=>{_.applyEuler(l).add(o),x.applyEuler(l).add(c)});let d=new w(-e*.15,-e*.15,e*.25),h=new St(-Math.PI/8,0,0),f=new w(n,0,0),g=us({number:s,range:e/2,mass:t,speed:1,blackHoleMass:i,gravitationalConstant:a});return g.forEach(({position:_,speed:x})=>{_.applyEuler(h).add(d),x.applyEuler(h).add(f)}),[...u,...g]},Hm=({number:r,range:e,mass:t,speed:n,blackHoleMass:i})=>{let a=new Tt;return e*=.5,new Array(r).fill().map(()=>{a.radius=e/10+Math.random()*e,a.theta=Math.random()*2*Math.PI,a.phi=Math.PI-Math.random()*Math.PI/12;let s=new w().setFromSpherical(a);return{...gt(t),position:s,speed:new w(0,n*Math.random(),0)}}).concat(Lt(i))},Gm=({number:r,range:e,mass:t,speed:n,blackHoleMass:i})=>{let a=8;e*=.333;let s=new Array(r).fill().map(()=>({...gt(t),position:new w(e/2-Math.random()*e,e/2-Math.random()*e,e/2-Math.random()*e),speed:new w(n/2-Math.random()*n,n/2-Math.random()*n,n/2-Math.random()*n)})),o=new Array(a).fill().map((c,u)=>s.slice(~~(u*r/a),~~((u+1)*r/a))),l=new Array(a).fill().map((c,u)=>new w(...u.toString(2).padStart(3,"0").split("").map(d=>d==="0"?-1:1)).multiplyScalar(e));return o.forEach((c,u)=>{c.forEach(d=>{d.position.add(l[u])})}),i&&s.push({temperature:0,mass:i,position:new w,speed:new w}),s},km=({number:r,range:e,mass:t,blackHoleMass:n})=>(e*=.25,new Array(r).fill().map(()=>({...gt(t),position:new w(e/2-Math.random()*e,e,e/2-Math.random()*e),speed:new w})).concat(Lt(n))),Vm=({number:r,range:e,mass:t})=>new Array(r).fill().map(()=>({...gt(t),position:new ae(e/2-Math.random()*e,e/2-Math.random()*e),speed:new w})),Wm=({number:r,range:e,mass:t,blackHoleMass:n})=>{let i=~~(Math.sqrt(r/32)-1),s=new cs(~~(e/5),i).attributes.position;return new Array(s.count).fill().map((o,l)=>({...gt(t),position:new w(s.getX(l),s.getY(l),s.getZ(l)),speed:new w})).concat(Lt(n))},Xm=({number:r,range:e,speed:t,mass:n,blackHoleMass:i})=>new Array(r).fill().map(()=>({...gt(n),position:new Ce(e/2-Math.random()*e,e/2-Math.random()*e,e/2-Math.random()*e,e/2-Math.random()*e),speed:new Ce(t/2-Math.random()*t,t/2-Math.random()*t,t/2-Math.random()*t,t/2-Math.random()*t)})).concat(Lt(i));var Cl=`varying float blackHole;
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
}`;var Rl=`attribute float mass;
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
`;var Lr={preset:"Cube",remembered:{Cube:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!0,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"cube",number:3e3,range:1e3,speed:5,mass:10,blackHoleMass:0,scale:35,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.5,softening:10,collisions:!0,collisionThreshold:25,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},Tesseract:{0:{dimensions:4,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:3,zw:4,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"tesseract",number:3e3,range:1500,speed:0,mass:10,blackHoleMass:0,scale:40,colorMode:"Temperature",gravitationalConstant:100,softening:100,simulationSpeed:2,collisions:!0,collisionThreshold:25,escapeDistance:1e5,blackHoleMassThreshold:1e4,creationMode:!1}},FrozenTesseract:{0:{dimensions:4,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:6,zw:7,backend:"rust_none",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"tesseract",number:5e3,range:1e3,speed:0,mass:10,blackHoleMass:0,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,softening:30,simulationSpeed:0,collisions:!1,collisionThreshold:25,escapeDistance:1e5,blackHoleMassThreshold:1e4,creationMode:!1}},Wall:{0:{dimensions:2,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:6,zw:7,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!0,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"plane2",number:1e4,range:3e3,speed:0,mass:10,blackHoleMass:0,scale:20,colorMode:"Temperature",gravitationalConstant:1,softening:35,simulationSpeed:.5,collisions:!1,collisionThreshold:25,escapeDistance:1e5,blackHoleMassThreshold:1e4,creationMode:!1}},RegularCube:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_p2p",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!0,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"regularCube",number:1250,range:1e3,speed:0,mass:1,blackHoleMass:0,scale:50,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.5,softening:10,collisions:!1,collisionThreshold:25,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},Galaxy:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"disc",number:2e3,range:1500,speed:1,mass:10,blackHoleMass:1e5,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.5,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:1e3,blackHoleMassThreshold:1e4,creationMode:!1}},DualGalaxy:{0:{dimensions:4,zFov:45,wFov:45,w:1500,xy:2,xz:3,xw:5,yz:2.5,yw:1.5,zw:3.5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"disc",number:4e3,range:1e3,speed:1,mass:10,blackHoleMass:1e5,scale:28,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:5e3,blackHoleMassThreshold:1e4,creationMode:!1}},BulbGalaxy:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"bulb",number:2e3,range:1500,speed:1,mass:10,blackHoleMass:1e5,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:10,collisions:!0,collisionThreshold:2,escapeDistance:800,blackHoleMassThreshold:1e4,creationMode:!1}},SlowGalaxy:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"disc",number:2e3,range:1500,speed:.75,mass:10,blackHoleMass:1e5,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:10,collisions:!1,collisionThreshold:2,escapeDistance:1e3,blackHoleMassThreshold:1e4,creationMode:!1}},Sphere:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"sphere",number:4e3,range:1500,speed:1,mass:10,blackHoleMass:5e5,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.1,softening:50,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:5e5,creationMode:!1}},HarmonicSphere:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"harmonicSphere",number:5e3,range:1500,speed:15,mass:10,blackHoleMass:5e5,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.2,softening:50,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:5e5,creationMode:!1}},ProtoSolarSystem:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_p2p",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!1,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!0,afterImageDamp:.98,configuration:"solarSystem",number:1e3,range:1e3,speed:15,mass:10,blackHoleMass:0,scale:3,colorMode:"ColorCoded",gravitationalConstant:6.67,simulationSpeed:.001,softening:0,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:2e6,creationMode:!1}},CollidingGalaxies:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:2,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"collidingDisc",number:4e3,range:3e3,speed:10,mass:10,blackHoleMass:5e5,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.075,softening:10,collisions:!0,collisionThreshold:3,escapeDistance:2e3,blackHoleMassThreshold:5e5,creationMode:!1}},CollidingGalaxiesBulb:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:2,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"collidingBulb",number:8e3,range:3e3,speed:10,mass:10,blackHoleMass:5e5,scale:20,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.05,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:5e5,creationMode:!1}},Fountain:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_p2p",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"fountain",number:1e3,range:2e3,speed:5,mass:20,blackHoleMass:1e5,scale:15,colorMode:"Rainbow",gravitationalConstant:6.67,simulationSpeed:.05,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},EightCubes:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_p2p",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!0,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"eightCubes",number:1e3,range:1e3,speed:5,mass:10,blackHoleMass:0,scale:50,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.5,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:2500,creationMode:!1}},Plane:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_p2p",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:2,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"plane",number:1250,range:3e3,speed:15,mass:10,blackHoleMass:5e5,scale:15,colorMode:"White",gravitationalConstant:6.67,simulationSpeed:.1,softening:100,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:5e5,creationMode:!1}},Teapot:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_p2p",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!0,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"teapot",number:2e3,range:2500,speed:15,mass:10,blackHoleMass:0,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:50,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},TeapotWithBlackHole:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_p2p",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!0,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"teapot",number:2e3,range:2500,speed:15,mass:10,blackHoleMass:25e3,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:50,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},Ekusupuroshon:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"js_none",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"expandingSphere",number:5e4,range:10,speed:100,mass:10,blackHoleMass:0,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},Ekusupuroshon2:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"js_none",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!0,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"expandingSphere",number:1e6,range:10,speed:50,mass:10,blackHoleMass:0,scale:5,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},LittleExpand:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:1,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"expandingSphere",number:3e3,range:10,speed:40,mass:10,blackHoleMass:0,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:.25,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}},BigSphere:{0:{dimensions:3,zFov:45,wFov:45,w:1500,xy:0,xz:0,xw:5,yz:0,yw:5,zw:5,backend:"rust_bh",threads:navigator.hardwareConcurrency-1,theta:2,autoRotate:!1,fxaa:!0,bloom:!0,bloomStrength:1.5,bloomRadius:.75,bloomThreshold:0,bloomExposure:.75,afterImage:!1,afterImageDamp:.75,configuration:"sphere",number:2e4,range:2e3,speed:0,mass:10,blackHoleMass:0,scale:30,colorMode:"Temperature",gravitationalConstant:6.67,simulationSpeed:1,softening:10,collisions:!1,collisionThreshold:10,escapeDistance:2e3,blackHoleMassThreshold:1e4,creationMode:!1}}},closed:!1,folders:{"Render fx":{preset:"Default",closed:!0,folders:{}},Configuration:{preset:"Default",closed:!1,folders:{}},Simulation:{preset:"Default",closed:!1,folders:{}}}};var Oi={};Ns(Oi,{MODE:()=>Ym,NODE_ENV:()=>jm,SSR:()=>Qm});var Ym="production",jm="production",Qm=!1;import.meta.env=Oi;var le,Dl=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Dl.decode();var Pr=null;function Fr(){return(Pr===null||Pr.buffer!==le.memory.buffer)&&(Pr=new Uint8Array(le.memory.buffer)),Pr}function hs(r,e){return Dl.decode(Fr().subarray(r,r+e))}var He=new Array(32).fill(void 0);He.push(void 0,null,!0,!1);var ci=He.length;function In(r){ci===He.length&&He.push(He.length+1);let e=ci;if(ci=He[e],typeof ci!="number")throw new Error("corrupt heap");return He[e]=r,e}function Bi(r){return He[r]}function qm(r){r<36||(He[r]=ci,ci=r)}function fs(r){let e=Bi(r);return qm(r),e}var Cr=0,Rr=new TextEncoder("utf-8"),Zm=typeof Rr.encodeInto=="function"?function(r,e){return Rr.encodeInto(r,e)}:function(r,e){let t=Rr.encode(r);return e.set(t),{read:r.length,written:t.length}};function Nl(r,e,t){if(typeof r!="string")throw new Error("expected a string argument");if(t===void 0){let o=Rr.encode(r),l=e(o.length);return Fr().subarray(l,l+o.length).set(o),Cr=o.length,l}let n=r.length,i=e(n),a=Fr(),s=0;for(;s<n;s++){let o=r.charCodeAt(s);if(o>127)break;a[i+s]=o}if(s!==n){s!==0&&(r=r.slice(s)),i=t(i,n,n=s+r.length*3);let o=Fr().subarray(i+s,i+n),l=Zm(r,o);if(l.read!==r.length)throw new Error("failed to pass whole string");s+=l.written}return Cr=s,i}var Dr=null;function Nr(){return(Dr===null||Dr.buffer!==le.memory.buffer)&&(Dr=new Int32Array(le.memory.buffer)),Dr}var _t=32;function Ft(r){if(_t==1)throw new Error("out of js stack");return He[--_t]=r,_t}function ge(r){if(typeof r!="number")throw new Error("expected a number argument")}function Il(){var r=le.wasm_memory();return fs(r)}function Hi(r){return function(){try{return r.apply(this,arguments)}catch(e){let t=function(){try{return e instanceof Error?`${e.message}

Stack:
${e.stack}`:e.toString()}catch(n){return"<failed to stringify thrown value>"}}();throw console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:",t),e}}}var di=class{static __wrap(e){let t=Object.create(di.prototype);return t.ptr=e,t}free(){let e=this.ptr;this.ptr=0,le.__wbg_barneshutrustgravity_free(e)}constructor(e,t,n){try{ge(n);var i=le.barneshutrustgravity_new(Ft(e),Ft(t),n);return di.__wrap(i)}finally{He[_t++]=void 0,He[_t++]=void 0}}xyz_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr);var e=le.barneshutrustgravity_xyz_ptr(this.ptr);return e}speeds_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr);var e=le.barneshutrustgravity_speeds_ptr(this.ptr);return e}masses_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr);var e=le.barneshutrustgravity_masses_ptr(this.ptr);return e}temperatures_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr);var e=le.barneshutrustgravity_temperatures_ptr(this.ptr);return e}frog_leap(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr),le.barneshutrustgravity_frog_leap(this.ptr)}simulate(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr);var e=le.barneshutrustgravity_simulate(this.ptr);return e>>>0}frog_drop(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr),le.barneshutrustgravity_frog_drop(this.ptr)}grow(e){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr),le.barneshutrustgravity_grow(this.ptr,Ft(e))}finally{He[_t++]=void 0}}shrink(e){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr),ge(e),le.barneshutrustgravity_shrink(this.ptr,e)}set_orb(e,t){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr),ge(e),le.barneshutrustgravity_set_orb(this.ptr,e,In(t))}project(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr),le.barneshutrustgravity_project(this.ptr)}params_change(e){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr),le.barneshutrustgravity_params_change(this.ptr,Ft(e))}finally{He[_t++]=void 0}}},ui=class{static __wrap(e){let t=Object.create(ui.prototype);return t.ptr=e,t}free(){let e=this.ptr;this.ptr=0,le.__wbg_norustgravity_free(e)}constructor(e,t,n){try{ge(n);var i=le.norustgravity_new(Ft(e),Ft(t),n);return ui.__wrap(i)}finally{He[_t++]=void 0,He[_t++]=void 0}}xyz_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr);var e=le.barneshutrustgravity_xyz_ptr(this.ptr);return e}masses_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr);var e=le.barneshutrustgravity_masses_ptr(this.ptr);return e}temperatures_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr);var e=le.barneshutrustgravity_temperatures_ptr(this.ptr);return e}frog_leap(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr),le.norustgravity_frog_leap(this.ptr)}simulate(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr);var e=le.norustgravity_simulate(this.ptr);return e>>>0}frog_drop(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr),le.norustgravity_frog_drop(this.ptr)}grow(e){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr),le.norustgravity_grow(this.ptr,Ft(e))}finally{He[_t++]=void 0}}shrink(e){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr),ge(e),le.norustgravity_shrink(this.ptr,e)}set_orb(e,t){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr),ge(e),le.norustgravity_set_orb(this.ptr,e,In(t))}project(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr),le.norustgravity_project(this.ptr)}params_change(e){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr),le.norustgravity_params_change(this.ptr,Ft(e))}finally{He[_t++]=void 0}}},hi=class{static __wrap(e){let t=Object.create(hi.prototype);return t.ptr=e,t}free(){let e=this.ptr;this.ptr=0,le.__wbg_p2prustgravity_free(e)}constructor(e,t,n){try{ge(n);var i=le.p2prustgravity_new(Ft(e),Ft(t),n);return hi.__wrap(i)}finally{He[_t++]=void 0,He[_t++]=void 0}}xyz_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr);var e=le.barneshutrustgravity_xyz_ptr(this.ptr);return e}masses_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr);var e=le.barneshutrustgravity_masses_ptr(this.ptr);return e}temperatures_ptr(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr);var e=le.barneshutrustgravity_temperatures_ptr(this.ptr);return e}frog_leap(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr),le.p2prustgravity_frog_leap(this.ptr)}simulate(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr);var e=le.p2prustgravity_simulate(this.ptr);return e>>>0}frog_drop(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr),le.p2prustgravity_frog_drop(this.ptr)}grow(e){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr),le.p2prustgravity_grow(this.ptr,Ft(e))}finally{He[_t++]=void 0}}shrink(e){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr),ge(e),le.p2prustgravity_shrink(this.ptr,e)}set_orb(e,t){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr),ge(e),le.p2prustgravity_set_orb(this.ptr,e,In(t))}project(){if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr),le.p2prustgravity_project(this.ptr)}params_change(e){try{if(this.ptr==0)throw new Error("Attempt to use a moved value");ge(this.ptr),le.p2prustgravity_params_change(this.ptr,Ft(e))}finally{He[_t++]=void 0}}};async function $m(r,e){if(typeof Response=="function"&&r instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(r,e)}catch(n){if(r.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n);else throw n}let t=await r.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{let t=await WebAssembly.instantiate(r,e);return t instanceof WebAssembly.Instance?{instance:t,module:r}:t}}async function Ul(r){typeof r=="undefined"&&(r=import.meta.url.replace(/\.js$/,"_bg.wasm"));let e={};e.wbg={},e.wbg.__wbindgen_string_new=function(i,a){var s=hs(i,a);return In(s)},e.wbg.__wbg_length_4c7aec6f35774e3d=Hi(function(i){var a=Bi(i).length;return ge(a),a}),e.wbg.__wbg_get_a8b9619536c590d4=Hi(function(i,a){var s=Bi(i)[a>>>0];return In(s)}),e.wbg.__wbindgen_object_drop_ref=function(i){fs(i)},e.wbg.__wbindgen_json_serialize=function(i,a){let s=Bi(a);var o=JSON.stringify(s===void 0?null:s),l=Nl(o,le.__wbindgen_malloc,le.__wbindgen_realloc),c=Cr;Nr()[i/4+1]=c,Nr()[i/4+0]=l},e.wbg.__wbindgen_memory=function(){var i=le.memory;return In(i)},e.wbg.__wbg_new_59cb74e423758ede=Hi(function(){var i=new Error;return In(i)}),e.wbg.__wbg_stack_558ba5917b466edd=Hi(function(i,a){var s=Bi(a).stack,o=Nl(s,le.__wbindgen_malloc,le.__wbindgen_realloc),l=Cr;Nr()[i/4+1]=l,Nr()[i/4+0]=o}),e.wbg.__wbg_error_4bb6c2a97407129a=Hi(function(i,a){try{console.error(hs(i,a))}finally{le.__wbindgen_free(i,a)}}),e.wbg.__wbindgen_throw=function(i,a){throw new Error(hs(i,a))},e.wbg.__wbindgen_rethrow=function(i){throw fs(i)},(typeof r=="string"||typeof Request=="function"&&r instanceof Request||typeof URL=="function"&&r instanceof URL)&&(r=fetch(r));let{instance:t,module:n}=await $m(await r,e);return le=t.exports,Ul.__wbindgen_wasm_module=n,le}var zl=Ul;var Jm=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function eg(r,e,t){return t={path:e,exports:{},require:function(n,i){return Km(n,i??t.path)}},r(t,t.exports),t.exports}function Km(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var tg=eg(function(r,e){(function(t,n){r.exports=n()})(Jm,function(){var t=function(){function n(f){return s.appendChild(f.dom),f}function i(f){for(var g=0;g<s.children.length;g++)s.children[g].style.display=g===f?"block":"none";a=f}var a=0,s=document.createElement("div");s.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",s.addEventListener("click",function(f){f.preventDefault(),i(++a%s.children.length)},!1);var o=(performance||Date).now(),l=o,c=0,u=n(new t.Panel("FPS","#0ff","#002")),d=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:s,addPanel:n,showPanel:i,begin:function(){o=(performance||Date).now()},end:function(){c++;var f=(performance||Date).now();if(d.update(f-o,200),f>l+1e3&&(u.update(1e3*c/(f-l),100),l=f,c=0,h)){var g=performance.memory;h.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return f},update:function(){o=this.end()},domElement:s,setMode:i}};return t.Panel=function(n,i,a){var s=Infinity,o=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,d=48*c,h=3*c,f=2*c,g=3*c,_=15*c,x=74*c,m=30*c,p=document.createElement("canvas");p.width=u,p.height=d,p.style.cssText="width:80px;height:48px";var T=p.getContext("2d");return T.font="bold "+9*c+"px Helvetica,Arial,sans-serif",T.textBaseline="top",T.fillStyle=a,T.fillRect(0,0,u,d),T.fillStyle=i,T.fillText(n,h,f),T.fillRect(g,_,x,m),T.fillStyle=a,T.globalAlpha=.9,T.fillRect(g,_,x,m),{dom:p,update:function(L,S){s=Math.min(s,L),o=Math.max(o,L),T.fillStyle=a,T.globalAlpha=1,T.fillRect(0,0,u,_),T.fillStyle=i,T.fillText(l(L)+" "+n+" ("+l(s)+"-"+l(o)+")",h,f),T.drawImage(p,g+c,_,x-c,m,g,_,x-c,m),T.fillRect(g+x-c,_,c,m),T.fillStyle=a,T.globalAlpha=.9,T.fillRect(g+x-c,_,c,l((1-L/S)*m))}}},t})}),Ol=tg;var ps=class{constructor(e,t,n){this.fov=e||Math.PI/2,this.w=t||10,this.rotation=n||{xy:0,xz:0,xw:0,yz:0,yw:0,zw:0}}project([e,t,n,i]){let[a,s,o,l]=this.rotatePoint([e,t,n,i]),c=1+l*this.fov/this.w;return[a/c,s/c,o/c]}rotate(e){Object.keys(this.rotation).forEach(t=>{this.rotation[t]=(this.rotation[t]+(e[t]||0)/1e3)%(2*Math.PI)})}rotatePoint([e,t,n,i]){let{xy:a,xz:s,xw:o,yz:l,yw:c,zw:u}=this.rotation,d=Math.cos(a),h=Math.sin(a),f=Math.cos(s),g=Math.sin(s),_=Math.cos(o),x=Math.sin(o),m=Math.cos(l),p=Math.sin(l),T=Math.cos(c),L=Math.sin(c),S=Math.cos(u),v=Math.sin(u),C=e;return e=e*d+t*h,t=t*d-C*h,C=e,e=e*f+n*g,n=n*f-C*g,C=e,e=e*_+i*x,i=i*_-C*x,C=t,t=t*m+n*p,n=n*m-C*p,C=t,t=t*T+i*L,i=i*T-C*L,C=n,n=n*S+i*v,i=i*S-C*v,[e,t,n,i]}};function ng(r,e=8){let t=[],n=[],i=[],a=0,s={theta:{},phi:{},gamma:{}};for(let o=0;o<=e;o++)for(let l=0;l<=e;l++)for(let c=0;c<2*e;c++){s.theta[o]||(s.theta[o]=[]),s.phi[l]||(s.phi[l]=[]),s.gamma[c]||(s.gamma[c]=[]),s.theta[o].push(t.length),s.phi[l].push(t.length),s.gamma[c].push(t.length);let u=o*Math.PI/e,d=l*Math.PI/e,h=c*Math.PI/e;t.push([r*Math.cos(u),r*Math.sin(u)*Math.cos(d),r*Math.sin(u)*Math.sin(d)*Math.cos(h),r*Math.sin(u)*Math.sin(d)*Math.sin(h)])}for(let o in s.theta){let l=s.theta[o],c=[];for(let u=0;u<l.length/(e*2)-1;u++)for(let d=0;d<e*2;d++){let h=u*e*2,f=(u+1)*e*2;n.push([l[h+d],l[h+(d+1)%(e*2)],l[f+(d+1)%(e*2)],l[f+d%(e*2)]]),c.push(a),a++}i.push(c)}for(let o in s.phi){let l=s.phi[o],c=[];for(let u=0;u<l.length/(e*2)-1;u++)for(let d=0;d<e*2;d++){let h=u*e*2,f=(u+1)*e*2;n.push([l[h+d],l[h+(d+1)%(e*2)],l[f+(d+1)%(e*2)],l[f+d%(e*2)]]),c.push(a),a++}i.push(c)}for(let o in s.gamma)if(parseInt(o)<e){let l=s.gamma[o],c=s.gamma[parseInt(o)+e],u=[];for(let h=0;h<l.length/(e+1);h++)u.push(...l.slice(h*(e+1),(h+1)*(e+1))),u.push(...c.slice(h*(e+1),(h+1)*(e+1)).reverse());let d=[];for(let h=0;h<u.length/(2*(e+1))-1;h++)for(let f=0;f<2*(e+1);f++){let g=h*(2*(e+1)),_=(h+1)*(2*(e+1));n.push([u[g+f],u[g+(f+1)%(2*(e+1))],u[_+(f+1)%(2*(e+1))],u[_+f%(2*(e+1))]]),d.push(a),a++}i.push(d)}return{vertices:t,faces:n,cells:i}}var l0=ng(1);function ig(r,e,t,n=8){let i=[],a=[],s=[],o=0,l={theta:{},phi:{},gamma:{}};for(let c=0;c<=n;c++)for(let u=0;u<=n;u++)for(let d=0;d<2*n;d++){l.theta[c]||(l.theta[c]=[]),l.phi[u]||(l.phi[u]=[]),l.gamma[d]||(l.gamma[d]=[]),l.theta[c].push(i.length),l.phi[u].push(i.length),l.gamma[d].push(i.length);let h=c*Math.PI/n,f=u*Math.PI/n,g=d*Math.PI/n;i.push([r*Math.cos(h),(e+r*Math.sin(h))*Math.cos(f),(t+(e+r*Math.sin(h))*Math.sin(f))*Math.cos(g),(t+(e+r*Math.sin(h))*Math.sin(f))*Math.sin(g)])}for(let c in l.theta){let u=l.theta[c],d=[];for(let h=0;h<u.length/(n*2)-1;h++)for(let f=0;f<n*2;f++){let g=h*n*2,_=(h+1)*n*2;a.push([u[g+f],u[g+(f+1)%(n*2)],u[_+(f+1)%(n*2)],u[_+f%(n*2)]]),d.push(o),o++}s.push(d)}for(let c in l.phi){let u=l.phi[c],d=[];for(let h=0;h<u.length/(n*2)-1;h++)for(let f=0;f<n*2;f++){let g=h*n*2,_=(h+1)*n*2;a.push([u[g+f],u[g+(f+1)%(n*2)],u[_+(f+1)%(n*2)],u[_+f%(n*2)]]),d.push(o),o++}s.push(d)}for(let c in l.gamma)if(parseInt(c)<n){let u=l.gamma[c],d=l.gamma[parseInt(c)+n],h=[];for(let g=0;g<u.length/(n+1);g++)h.push(...u.slice(g*(n+1),(g+1)*(n+1))),h.push(...d.slice(g*(n+1),(g+1)*(n+1)).reverse());let f=[];for(let g=0;g<h.length/(2*(n+1))-1;g++)for(let _=0;_<2*(n+1);_++){let x=g*(2*(n+1)),m=(g+1)*(2*(n+1));a.push([h[x+_],h[x+(_+1)%(2*(n+1))],h[m+(_+1)%(2*(n+1))],h[m+_%(2*(n+1))]]),f.push(o),o++}s.push(f)}return{vertices:i,faces:a,cells:s}}var c0=ig(.1,.5,1);var ms=class{constructor(e,t,n){this.alive=!0,this.params=t,this.N=t.dimensions,this.vectorSuffix="xyzw",this.len=e.length,this.N>3&&(this.projector=new ps(t.wFov*Math.PI/180,t.w)),this.xyz=new Float32Array(n*3),this.positions=this.N===3?this.xyz:new Float32Array(n*this.N),this.speeds=new Float32Array(this.N*n),this.accelerations=new Float32Array(this.N*n),this.masses=new Float32Array(n),this.temperatures=new Float32Array(n),e.forEach((i,a)=>this.set_orb(a,i))}params_change(e){this.projector&&(this.projector.fov=e.wFov*Math.PI/180,this.projector.w=e.w)}frog_leap(){let e=this.params.simulationSpeed,t=e*.5;for(let n=0,i=this.len;n<i;n++){let a=n*this.N;for(let s=0;s<this.N;s++)this.speeds[a+s]+=this.accelerations[a+s]*t,this.positions[a+s]+=this.speeds[a+s]*e}}aggregateCollisions(e){let t=[];for(let n=0,i=e.length;n<i;n++){let[a,s]=e[n],o=!0;for(let l=0,c=t.length;l<c;l++){let u=t[l],d=u.includes(a),h=u.includes(s);if((d||h)&&(o=!1),d!==h){let f=d?s:a;f>u[0]?u.push(f):u.unshift(f);break}}o&&t.push(a>s?[s,a]:[a,s])}return t}solveCollisions(e){for(let t=0,n=e.length;t<n;t++){let i=e[t],a=i[0],s=a*this.N;for(let o=1,l=i.length;o<l;o++){let c=i[o],u=c*this.N,d=1/(this.masses[a]+this.masses[c]);for(let h=0;h<this.N;h++)this.positions[s+h]=d*(this.positions[s+h]*this.masses[a]+this.positions[u+h]*this.masses[c]),this.speeds[s+h]=d*(this.speeds[s+h]*this.masses[a]+this.speeds[u+h]*this.masses[c]);this.temperatures[a]=d*(this.temperatures[a]*this.masses[a]+this.temperatures[c]*this.masses[c]),this.masses[a]+=this.masses[c]}}}solveEscapes(){let e=[],{escapeDistance:t}=this.params;if(!t)return e;let n=t*t;for(let i=0,a=this.len;i<a;i++){let s=i*this.N,o=0;for(let l=0;l<this.N;l++)o+=this.positions[s+l]*this.positions[s+l];o>n&&e.push(i)}return e}crunchOrbs(e){let t=0,n=0;for(;t+n<this.len;){if(e.includes(t+n)){n+=1;continue}if(n==0){t+=1;continue}let i=t*this.N,a=(t+n)*this.N;for(let s=0;s<this.N;s++)this.positions[i+s]=this.positions[a+s],this.speeds[i+s]=this.speeds[a+s],this.accelerations[i+s]=this.accelerations[a+s];this.temperatures[t]=this.temperatures[t+n],this.masses[t]=this.masses[t+n],t+=1}return this.len-n}solve(e){let t=this.solveEscapes();return e.length&&(e=this.aggregateCollisions(e),e.forEach(n=>{t.push(...n.slice(1))}),this.solveCollisions(e)),t.length&&(this.len=this.crunchOrbs(t)),this.len}async simulate(){return this.solve([])}frog_drop(){let t=this.params.simulationSpeed*.5;for(let n=0,i=this.len;n<i;n++){let a=n*this.N;for(let s=0;s<this.N;s++)this.speeds[a+s]+=this.accelerations[a+s]*t}this.projector&&this.projector.rotate(this.params)}set_orb(e,{position:t,mass:n,speed:i,temperature:a}){let s=e*this.N;for(let o=0;o<this.N;o++){let l=this.vectorSuffix[o];this.positions[s+o]=t[l]||0,this.speeds[s+o]=i[l]||0}this.masses[e]=n,this.temperatures[e]=a}grow(e){if(this.len+e.length>this.temperatures.length){console.warn("Can't grow");return}e.forEach((t,n)=>this.set_orb(this.len+n,t)),this.len+=e.length}shrink(e){if(this.len-e<0){console.warn("Can't shrink");return}this.len-=e}project(){if(this.N!==3){if(this.N===2)for(let e=0,t=this.len;e<t;e++){let n=e*2,i=n+e;this.xyz[i]=this.positions[n],this.xyz[i+1]=this.positions[n+1],this.xyz[i+2]=0}else if(this.N===4)for(let e=0,t=this.len;e<t;e++){let n=e*3,i=n+e,a=this.projector.project([this.positions[i],this.positions[i+1],this.positions[i+2],this.positions[i+3]]);this.xyz[n]=a[0],this.xyz[n+1]=a[1],this.xyz[n+2]=a[2]}}}free(){this.alive=!1,delete this.temperatures,delete this.masses,delete this.accelerations,delete this.speeds,delete this.positions,delete this.xyz}},bn=ms;var gs=class extends bn{compute2(e,t,n,i,a,s,o,l,c,u){t[0]=this.positions[s]-this.positions[i],t[1]=this.positions[s+1]-this.positions[i+1];let d=t[0]*t[0]+t[1]*t[1];l&&d<c&&u.push([n,a]);let h=this.masses[a]/(d+o);e[0]+=t[0]*h,e[1]+=t[1]*h}compute3(e,t,n,i,a,s,o,l,c,u){t[0]=this.positions[s]-this.positions[i],t[1]=this.positions[s+1]-this.positions[i+1],t[2]=this.positions[s+2]-this.positions[i+2];let d=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],h=Math.sqrt(d+o);l&&d<c&&u.push([n,a]);let f=this.masses[a]/(h*h*h);e[0]+=t[0]*f,e[1]+=t[1]*f,e[2]+=t[2]*f}compute4(e,t,n,i,a,s,o,l,c,u){t[0]=this.positions[s]-this.positions[i],t[1]=this.positions[s+1]-this.positions[i+1],t[2]=this.positions[s+2]-this.positions[i+2],t[3]=this.positions[s+3]-this.positions[i+3];let d=t[0]*t[0]+t[1]*t[1]+t[2]*t[2]+t[3]*t[3];l&&d<c&&u.push([n,a]);let h=d+o,f=this.masses[a]/(h*h);e[0]+=t[0]*f,e[1]+=t[1]*f,e[2]+=t[2]*f,e[3]+=t[3]*f}compute(e,t,n,i,a,s,o,l,c){let u=this[`compute${n}`].bind(this),d=new Array(n).fill(0),h=new Array(n).fill(0);for(let f=e,g=t;f<g;f++){let _=f*n;h.fill(0);for(let x=0;x<i;x++){if(f===x)continue;let m=x*n;u(h,d,f,_,x,m,s,o,l,c)}for(let x=0;x<n;x++)this.accelerations[_+x]=h[x]*a}}async simulate(){let{gravitationalConstant:e,softening:t,collisions:n,collisionThreshold:i}=this.params,a=t*t,s=i*i,o=[];return this.compute(0,this.len,this.N,this.len,e,a,n,s,o),this.solve(o)}},Bl=gs;var _s=class extends bn{frog_leap(){let e=this.params.simulationSpeed;for(let t=0,n=this.len;t<n;t++){let i=t*this.N;for(let a=0;a<this.N;a++)this.positions[i+a]+=this.speeds[i+a]*e}}simulate(){return this.len}frog_drop(){}},Hl=_s;var Ir=(r,...e)=>{class t extends r{constructor(...a){super(...a);e.forEach(s=>{n(this,new s(...a))})}}let n=(i,a)=>{Object.getOwnPropertyNames(a).concat(Object.getOwnPropertySymbols(a)).forEach(s=>{s.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/)||Object.defineProperty(i,s,Object.getOwnPropertyDescriptor(a,s))})};return e.forEach(i=>{n(t.prototype,i.prototype),n(t,i)}),t},wn=(r,...e)=>new Promise(t=>{r.postMessage(...e),r.onmessage=n=>t(n.data)});import.meta.env=Oi;var xs=class extends bn{constructor(e,t,n,i="p2p-thread"){super(e,t,n);this.initThreadPool(i)}initThreadPool(e){this.pool=new Array(~~this.params.threads).fill().map(()=>{let t=import.meta.url;return new Worker(new URL(`./worker/${e}.js`,t),{type:"module"})})}async simulate(){let{gravitationalConstant:e,softening:t,collisions:n,collisionThreshold:i}=this.params,a=[],s=t*t,o=i*i,l=~~(this.len/this.pool.length),c=await Promise.all(this.pool.map((u,d)=>wn(u,[d*l,d==this.pool.length-1?this.len:(d+1)*l,this.len,this.N,e,s,n,o,this.accelerations.buffer,this.positions.buffer,this.masses.buffer])));if(!!this.alive)return c.forEach(([u,d,h,f])=>{let g=new Float32Array(u);for(let _=d;_<h;_++){let x=_*3;this.accelerations[x]=g[x],this.accelerations[x+1]=g[x+1],this.accelerations[x+2]=g[x+2]}a.push(...f)}),this.solve(a)}free(){super.free(),this.pool.forEach(e=>e.terminate())}},fi=xs;var vs=class extends fi{constructor(e,t,n,i="p2p-thread-sab"){super(e,t,n,i);this.xyzBuffer=new SharedArrayBuffer(3*n*4),this.positionsBuffer=this.N===3?this.xyzBuffer:new SharedArrayBuffer(this.N*n*4),this.xyz=new Float32Array(this.xyzBuffer),this.positions=new Float32Array(this.positionsBuffer),this.speedsBuffer=new SharedArrayBuffer(this.N*n*4),this.speeds=new Float32Array(this.speedsBuffer),this.accelerationsBuffer=new SharedArrayBuffer(this.N*n*4),this.accelerations=new Float32Array(this.accelerationsBuffer),this.massesBuffer=new SharedArrayBuffer(n*4),this.masses=new Float32Array(this.massesBuffer),this.pool.forEach(a=>{a.postMessage([this.accelerationsBuffer,this.positionsBuffer,this.massesBuffer])}),e.forEach((a,s)=>this.set_orb(s,a))}async simulate(){let{gravitationalConstant:e,softening:t,collisions:n,collisionThreshold:i}=this.params,a=[],s=t*t,o=i*i,l=~~(this.len/this.pool.length),c=await Promise.all(this.pool.map((u,d)=>wn(u,[d*l,d==this.pool.length-1?this.len:(d+1)*l,this.len,this.N,e,s,n,o])));if(!!this.alive)return c.forEach(([u])=>{a.push(...u)}),this.solve(a)}},Ur=vs;var Gl=[[0,0],[1,0],[1,1],[0,1]],kl=[[0,0,0],[1,0,0],[1,0,1],[0,0,1],[0,1,0],[1,1,0],[1,1,1],[0,1,1]],Vl=[[0,0,0,0],[1,0,0,0],[1,0,1,0],[0,0,1,0],[0,0,0,1],[1,0,0,1],[1,0,1,1],[0,0,1,1],[0,1,0,0],[1,1,0,0],[1,1,1,0],[0,1,1,0],[0,1,0,1],[1,1,0,1],[1,1,1,1],[0,1,1,1]],ys=class extends bn{subdivide2(e){let t=e.size/2;e.leaf=!1,e.quadrants=Gl.map(([n,i])=>({x:e.x+n*t,y:e.y+i*t,size:t,index:null,mass:0,cx:0,cy:0,quadrants:null,leaf:!0}))}getSubCell2(e,t){let n=t*2,i=this.positions[n]>e.quadrants[2].x,a=this.positions[n+1]>e.quadrants[2].y;return e.quadrants[Gl.findIndex(([s,o])=>!!s==i&&!!o==a)]}addParticle2(e,t){if(e.index===null){e.index=t;return}this.subdivide2(e);let n=this.getSubCell2(e,e.index);n.index=e.index;let i=this.getSubCell2(e,t);if(n===i){let a=t*2,s=e.index*2;this.positions[s]===this.positions[a]&&this.positions[s+1]===this.positions[a+1]||this.addParticle2(n,t)}i.index=t}makeOctree2(e,t){let n={x:e,y:e,size:t,index:null,mass:0,cx:0,cy:0,quadrants:null,leaf:!0};for(let i=0;i<this.len;i++){let a=n;for(;!a.leaf;)a=this.getSubCell2(a,i);this.addParticle2(a,i)}return n}massDistribution2(e){if(e.leaf){let t=e.index*2;e.cx=this.positions[t],e.cy=this.positions[t+1],e.mass=this.masses[e.index]}else{for(let t=0,n=e.quadrants.length;t<n;t++){let i=e.quadrants[t];i.index!==null&&(this.massDistribution2(i),e.mass+=i.mass,e.cx+=i.cx*i.mass,e.cy+=i.cy*i.mass)}e.cx/=e.mass,e.cy/=e.mass}}compute2(e,t,n,i,a,s,o){if(e.leaf){if(e.index!==null&&e.index!==t){let l=t*2,c=e.index*2,u=this.positions[c]-this.positions[l],d=this.positions[c+1]-this.positions[l+1],h=u*u+d*d;a&&h<o&&s.push([t,e.index]);let f=this.masses[e.index]/(h+i);this.accelerations[l]+=f*u,this.accelerations[l+1]+=f*d}}else{let l=t*2,c=e.cx-this.positions[l],u=e.cy-this.positions[l+1],d=c*c+u*u;if(e.size*e.size<n*n*d){let f=e.mass/d;this.accelerations[l]+=f*c,this.accelerations[l+1]+=f*u}else for(let f=0,g=e.quadrants.length;f<g;f++)this.compute2(e.quadrants[f],t,n,i,a,s,o)}}subdivide3(e){let t=e.size/2;e.leaf=!1,e.octants=kl.map(([n,i,a])=>({x:e.x+n*t,y:e.y+i*t,z:e.z+a*t,size:t,index:null,mass:0,cx:0,cy:0,cz:0,octants:null,leaf:!0}))}getSubCell3(e,t){let n=t*3,i=this.positions[n]>e.octants[6].x,a=this.positions[n+1]>e.octants[6].y,s=this.positions[n+2]>e.octants[6].z;return e.octants[kl.findIndex(([o,l,c])=>!!o==i&&!!l==a&&!!c==s)]}addParticle3(e,t){if(e.index===null){e.index=t;return}this.subdivide3(e);let n=this.getSubCell3(e,e.index);n.index=e.index;let i=this.getSubCell3(e,t);if(n===i){let a=t*3,s=e.index*3;this.positions[s]===this.positions[a]&&this.positions[s+1]===this.positions[a+1]&&this.positions[s+2]===this.positions[a+2]||this.addParticle3(n,t)}i.index=t}makeOctree3(e,t){let n={x:e,y:e,z:e,size:t,index:null,mass:0,cx:0,cy:0,cz:0,octants:null,leaf:!0};for(let i=0;i<this.len;i++){let a=n;for(;!a.leaf;)a=this.getSubCell3(a,i);this.addParticle3(a,i)}return n}massDistribution3(e){if(e.leaf){let t=e.index*3;e.cx=this.positions[t],e.cy=this.positions[t+1],e.cz=this.positions[t+2],e.mass=this.masses[e.index]}else{for(let t=0,n=e.octants.length;t<n;t++){let i=e.octants[t];i.index!==null&&(this.massDistribution3(i),e.mass+=i.mass,e.cx+=i.cx*i.mass,e.cy+=i.cy*i.mass,e.cz+=i.cz*i.mass)}e.cx/=e.mass,e.cy/=e.mass,e.cz/=e.mass}}compute3(e,t,n,i,a,s,o){if(e.leaf){if(e.index!==null&&e.index!==t){let l=t*3,c=e.index*3,u=this.positions[c]-this.positions[l],d=this.positions[c+1]-this.positions[l+1],h=this.positions[c+2]-this.positions[l+2],f=u*u+d*d+h*h,g=Math.sqrt(f+i);a&&f<o&&s.push([t,e.index]);let _=this.masses[e.index]/(g*g*g);this.accelerations[l]+=_*u,this.accelerations[l+1]+=_*d,this.accelerations[l+2]+=_*h}}else{let l=t*3,c=e.cx-this.positions[l],u=e.cy-this.positions[l+1],d=e.cz-this.positions[l+2],h=Math.sqrt(c*c+u*u+d*d);if(e.size<n*h){let g=e.mass/(h*h*h);this.accelerations[l]+=g*c,this.accelerations[l+1]+=g*u,this.accelerations[l+2]+=g*d}else for(let g=0,_=e.octants.length;g<_;g++)this.compute3(e.octants[g],t,n,i,a,s,o)}}subdivide4(e){let t=e.size/2;e.leaf=!1,e.hexadecants=Vl.map(([n,i,a,s])=>({x:e.x+n*t,y:e.y+i*t,z:e.z+a*t,w:e.w+s*t,size:t,index:null,mass:0,cx:0,cy:0,cz:0,cw:0,hexadecants:null,leaf:!0}))}getSubCell4(e,t){let n=t*4,i=this.positions[n]>e.hexadecants[14].x,a=this.positions[n+1]>e.hexadecants[14].y,s=this.positions[n+2]>e.hexadecants[14].z,o=this.positions[n+3]>e.hexadecants[14].w;return e.hexadecants[Vl.findIndex(([l,c,u,d])=>!!l==i&&!!c==a&&!!u==s&&!!d==o)]}addParticle4(e,t){if(e.index===null){e.index=t;return}this.subdivide4(e);let n=this.getSubCell4(e,e.index);n.index=e.index;let i=this.getSubCell4(e,t);if(n===i){let a=t*4,s=e.index*4;this.positions[s]===this.positions[a]&&this.positions[s+1]===this.positions[a+1]&&this.positions[s+2]===this.positions[a+2]&&this.positions[s+3]===this.positions[a+3]||this.addParticle4(n,t)}i.index=t}makeOctree4(e,t){let n={x:e,y:e,z:e,w:e,size:t,index:null,mass:0,cx:0,cy:0,cz:0,cw:0,hexadecants:null,leaf:!0};for(let i=0;i<this.len;i++){let a=n;for(;!a.leaf;)a=this.getSubCell4(a,i);this.addParticle4(a,i)}return n}massDistribution4(e){if(e.leaf){let t=e.index*4;e.cx=this.positions[t],e.cy=this.positions[t+1],e.cz=this.positions[t+2],e.cw=this.positions[t+3],e.mass=this.masses[e.index]}else{for(let t=0,n=e.hexadecants.length;t<n;t++){let i=e.hexadecants[t];i.index!==null&&(this.massDistribution4(i),e.mass+=i.mass,e.cx+=i.cx*i.mass,e.cy+=i.cy*i.mass,e.cz+=i.cz*i.mass,e.cw+=i.cw*i.mass)}e.cx/=e.mass,e.cy/=e.mass,e.cz/=e.mass,e.cw/=e.mass}}compute4(e,t,n,i,a,s,o){if(e.leaf){if(e.index!==null&&e.index!==t){let l=t*4,c=e.index*4,u=this.positions[c]-this.positions[l],d=this.positions[c+1]-this.positions[l+1],h=this.positions[c+2]-this.positions[l+2],f=this.positions[c+3]-this.positions[l+3],g=u*u+d*d+h*h+f*f,_=g+i;a&&g<o&&s.push([t,e.index]);let x=this.masses[e.index]/(_*_);this.accelerations[l]+=x*u,this.accelerations[l+1]+=x*d,this.accelerations[l+2]+=x*h,this.accelerations[l+3]+=x*f}}else{let l=t*4,c=e.cx-this.positions[l],u=e.cy-this.positions[l+1],d=e.cz-this.positions[l+2],h=e.cw-this.positions[l+3],f=c*c+u*u+d*d+h*h;if(e.size*e.size<n*n*f){let _=e.mass/(f*f);this.accelerations[l]+=_*c,this.accelerations[l+1]+=_*u,this.accelerations[l+2]+=_*d,this.accelerations[l+3]+=_*h}else for(let _=0,x=e.hexadecants.length;_<x;_++)this.compute4(e.hexadecants[_],t,n,i,a,s,o)}}async simulate(){let{theta:e,softening:t,gravitationalConstant:n,collisions:i,collisionThreshold:a}=this.params,s=[],o=t*t,l=a*a,c=Math.min.apply(null,this.positions),u=Math.max.apply(null,this.positions),d=this[`compute${this.N}`].bind(this),h=this[`makeOctree${this.N}`](c,u-c);this[`massDistribution${this.N}`](h);for(let f=0;f<this.len;f++){let g=f*this.N;for(let _=0;_<this.N;_++)this.accelerations[g+_]=0;d(h,f,e,o,i,s,l);for(let _=0;_<this.N;_++)this.accelerations[g+_]*=n}return this.solve(s)}},pi=ys;var bs=class extends Ir(fi,pi){constructor(e,t,n,i="bh-thread"){super(e,t,n,i)}fill2(e,t,n){let i=n.shift;if(t[0+i]=e.size,t[1+i]=e.index,t[2+i]=e.mass,t[3+i]=e.cx,t[4+i]=e.cy,e.leaf)for(let a=0;a<4;a++)t[5+a+i]=NaN;else for(let a=0;a<4;a++)n.shift+=9,t[5+a+i]=n.shift,this.fill2(e.quadrants[a],t,n);return i}fill3(e,t,n){let i=n.shift;if(t[0+i]=e.size,t[1+i]=e.index,t[2+i]=e.mass,t[3+i]=e.cx,t[4+i]=e.cy,t[5+i]=e.cz,e.leaf)for(let a=0;a<8;a++)t[6+a+i]=NaN;else for(let a=0;a<8;a++)n.shift+=14,t[6+a+i]=n.shift,this.fill3(e.octants[a],t,n);return i}fill4(e,t,n){let i=n.shift;if(t[0+i]=e.size,t[1+i]=e.index,t[2+i]=e.mass,t[3+i]=e.cx,t[4+i]=e.cy,t[5+i]=e.cz,t[6+i]=e.cw,e.leaf)for(let a=0;a<16;a++)t[7+a+i]=NaN;else for(let a=0;a<16;a++)n.shift+=23,t[7+a+i]=n.shift,this.fill4(e.hexadecants[a],t,n);return i}async simulate(){let{gravitationalConstant:e,softening:t,collisions:n,collisionThreshold:i,theta:a}=this.params,s=[],o=t*t,l=i*i,c=Math.min.apply(null,this.positions),u=Math.max.apply(null,this.positions),d=this[`makeOctree${this.N}`](c,u-c);this[`massDistribution${this.N}`](d);let h={2:"quadrants",3:"octants",4:"hexadecants"}[this.N],f=T=>T[h]?T[h].length+T[h].map(f).reduce((L,S)=>L+S,0):0,g=f(d)+1,_={2:9,3:14,4:23}[this.N],x=new Float32Array(g*_);this[`fill${this.N}`](d,x,{shift:0});let m=~~(this.len/this.pool.length),p=await Promise.all(this.pool.map((T,L)=>wn(T,[L*m,L==this.pool.length-1?this.len:(L+1)*m,this.N,a,e,o,n,l,this.accelerations.buffer,this.positions.buffer,this.masses.buffer,x.buffer])));if(!!this.alive)return p.forEach(([T,L,S,v])=>{let C=new Float32Array(T);for(let O=L;O<S;O++){let z=O*this.N;for(let W=0;W<this.N;W++)this.accelerations[z+W]=C[z+W]}s.push(...v)}),this.solve(s)}},Wl=bs;var ws=class extends Ir(pi,Ur){constructor(e,t,n,i="bh-thread-sab"){super(e,t,n,i)}fill2(e,t,n){let i=n.shift;if(t[0+i]=e.size,t[1+i]=e.index,t[2+i]=e.mass,t[3+i]=e.cx,t[4+i]=e.cy,e.leaf)for(let a=0;a<4;a++)t[5+a+i]=NaN;else for(let a=0;a<4;a++)n.shift+=9,t[5+a+i]=n.shift,this.fill2(e.quadrants[a],t,n);return i}fill3(e,t,n){let i=n.shift;if(t[0+i]=e.size,t[1+i]=e.index,t[2+i]=e.mass,t[3+i]=e.cx,t[4+i]=e.cy,t[5+i]=e.cz,e.leaf)for(let a=0;a<8;a++)t[6+a+i]=NaN;else for(let a=0;a<8;a++)n.shift+=14,t[6+a+i]=n.shift,this.fill3(e.octants[a],t,n);return i}fill4(e,t,n){let i=n.shift;if(t[0+i]=e.size,t[1+i]=e.index,t[2+i]=e.mass,t[3+i]=e.cx,t[4+i]=e.cy,t[5+i]=e.cz,t[6+i]=e.cw,e.leaf)for(let a=0;a<16;a++)t[7+a+i]=NaN;else for(let a=0;a<16;a++)n.shift+=23,t[7+a+i]=n.shift,this.fill4(e.hexadecants[a],t,n);return i}async simulate(){let{gravitationalConstant:e,softening:t,collisions:n,collisionThreshold:i,theta:a}=this.params,s=[],o=t*t,l=i*i,c=Math.min.apply(null,this.positions),u=Math.max.apply(null,this.positions),d=this[`makeOctree${this.N}`](c,u-c);this[`massDistribution${this.N}`](d);let h={2:"quadrants",3:"octants",4:"hexadecants"}[this.N],f=L=>L[h]?L[h].length+L[h].map(f).reduce((S,v)=>S+v,0):0,g=f(d)+1,_={2:9,3:14,4:23}[this.N],x=new SharedArrayBuffer(g*_*4),m=new Float32Array(x);this[`fill${this.N}`](d,m,{shift:0});let p=~~(this.len/this.pool.length),T=await Promise.all(this.pool.map((L,S)=>wn(L,[S*p,S==this.pool.length-1?this.len:(S+1)*p,this.N,a,e,o,n,l,x])));if(!!this.alive)return T.forEach(([L])=>{s.push(...L)}),this.solve(s)}free(){super.free(),this.pool.forEach(e=>e.terminate())}},Xl=ws;var zr=null,qe=null,Ms={Temperature:.5,Rainbow:1,Grayscale:.25,White:0,ColorCoded:.75},xt,dt,ut,Yl=!1,Gi={js_p2p:Bl,rust_p2p:hi,js_p2p_threaded:fi,js_p2p_sab:Ur,js_bh:pi,js_bh_threaded:Wl,js_bh_sab:Xl,rust_bh:di,js_none:Hl,rust_none:ui},rg={js_p2p_sab:"js_p2p_threaded",js_bh_sab:"js_bh_threaded"};typeof SharedArrayBuffer=="undefined"&&(delete Gi.js_p2p_sab,delete Gi.js_bh_sab);var Or=new Ol,jl=()=>decodeURIComponent(location.hash.replace(/^#/,""))||Lr.preset,Ql=jl(),oe=new Proxy({...Lr.remembered[Ql][0]},{set(r,e,t){return r[e]=t,dt?.params_change(r,e,t),!0}}),Ct=new Ne;Ct.setPixelRatio(window.devicePixelRatio);Ct.setSize(window.innerWidth,window.innerHeight);Ct.toneMapping=Ti;document.body.appendChild(Ct.domElement);document.body.appendChild(Or.dom);var As=new ai,nn=new pt(45,window.innerWidth/window.innerHeight,1,2e4);nn.position.set(1500,1500,1500);nn.lookAt(0,0,0);var Mn=new as(nn,Ct.domElement);Mn.minDistance=1;Mn.maxDistance=2e4;Mn.enableDamping=!0;Mn.dampingFactor=.05;var mi=new os(Ct),ag=new ls(As,nn);mi.addPass(ag);var ki=new ns;ki.uniforms.damp.value=oe.afterImageDamp;ki.enabled=oe.afterImage;mi.addPass(ki);var Un=new Nn(Fl),ql=Ct.getPixelRatio();Un.material.uniforms.resolution.value.x=1/(window.innerWidth*ql);Un.material.uniforms.resolution.value.y=1/(window.innerHeight*ql);Un.enabled=oe.fxaa;mi.addPass(Un);var gi=new yn(new ae(window.innerWidth,window.innerHeight),oe.bloomStrength,oe.bloomRadius,oe.bloomThreshold);Ct.toneMappingExposure=oe.bloomExposure;gi.enabled=oe.bloom;mi.addPass(gi);window.addEventListener("resize",sg);function sg(){nn.aspect=window.innerWidth/window.innerHeight,nn.updateProjectionMatrix(),Ct.setSize(window.innerWidth,window.innerHeight),mi.setSize(window.innerWidth,window.innerHeight);let r=Ct.getPixelRatio();Un.material.uniforms.resolution.value.x=1/(window.innerWidth*r),Un.material.uniforms.resolution.value.y=1/(window.innerHeight*r)}async function Ss(){Or.update(),await og(),zr=requestAnimationFrame(Ss)}async function og(){if(qe!==null){if(Vi.setFromCamera(Es,nn),qe.iter===0){let{escapeDistance:e}=oe,t=new w;t.copy(Vi.ray.origin),t.addScaledVector(Vi.ray.direction,2e3),t.length()>e&&t.normalize().multiplyScalar(e*.9),qe.iter++;let n=new w;n.copy(Vi.ray.direction),n.multiplyScalar(qe.speed);let i=Math.pow(qe.iter/50,4)*oe.mass;qe.orb={position:t,speed:n,mass:i,temperature:Er(i)},dt.grow([qe.orb])}else qe.iter++,qe.orb.speed.copy(Vi.ray.direction),qe.orb.speed.multiplyScalar(qe.speed),qe.orb.mass=Math.pow(qe.iter/50,4)*oe.mass,qe.orb.temperature=Er(qe.orb.mass),dt.set_orb(dt.len-1,qe.orb);xt.geometry.attributes.temperature.needsUpdate=!0,xt.geometry.attributes.mass.needsUpdate=!0}dt.frog_leap();let r=await dt.simulate();dt.frog_drop(),dt.project(),oe.backend.startsWith("rust")&&!xt.geometry.attributes.temperature.array.buffer.byteLength&&(console.warn("Bad rust memory"),Zl(xt.geometry,xt.geometry.attributes.temperature.count)),r!==xt.geometry.drawRange.count&&(xt.geometry.setDrawRange(0,r),xt.geometry.attributes.temperature.needsUpdate=!0,xt.geometry.attributes.mass.needsUpdate=!0),xt.geometry.attributes.position.needsUpdate=!0,Mn.update(),mi.render()}function Zl(r,e){let{buffer:t}=Il(),n=new Float32Array(t,dt.xyz_ptr(),3*e),i=new Float32Array(t,dt.masses_ptr(),e),a=new Float32Array(t,dt.temperatures_ptr(),e);r.setAttribute("position",new Ue(n,3).setUsage(Ut)),r.setAttribute("mass",new Ue(i,1).setUsage(Ut)),r.setAttribute("temperature",new Ue(a,1).setUsage(Ut))}function $l(){let{backend:r,configuration:e,scale:t,blackHoleMassThreshold:n,colorMode:i}=oe,a=Tr[e](oe),s=Gi[r]||Gi[rg[r]],o=a.length+1e3;dt=new s(a,oe,o);let l=new ze;l.setDrawRange(0,a.length),r.startsWith("rust")?Zl(l,o):(l.setAttribute("position",new Ue(dt.xyz,3).setUsage(Ut)),l.setAttribute("mass",new Ue(dt.masses,1).setUsage(Ut)),l.setAttribute("temperature",new Ue(dt.temperatures,1).setUsage(Ut))),l.setDrawRange(0,a.length);let c=new We({vertexShader:Rl,fragmentShader:Cl,uniforms:{scale:{value:t},blackHoleMassThreshold:{value:n},mode:{value:Ms[i]}}});xt=new zi(l,c),As.add(xt)}function _i(){!Yl||(cancelAnimationFrame(zr),As.clear(),dt.free(),Mn.reset(),$l(),zr=requestAnimationFrame(Ss))}function lg(){ut=new Ks({load:Lr,preset:Ql}),ut.add(oe,"backend",Object.keys(Gi)).onChange(_i),ut.add(oe,"dimensions",2,4,1).onChange(_i),ut.add(oe,"zFov",0,180).onChange(a=>{nn.fov=a,nn.updateProjectionMatrix()});let r=ut.addFolder("4d params and rotation speeds");r.add(oe,"wFov",0,180),r.add(oe,"w",0).name("Camera ana"),r.add(oe,"xy",0,50),r.add(oe,"xz",0,50),r.add(oe,"xw",0,50),r.add(oe,"yz",0,50),r.add(oe,"yw",0,50),r.add(oe,"zw",0,50);let e=ut.addFolder("Backend parameters");e.add(oe,"theta",0,4,.01).name("bh theta").onChange(_i),e.add(oe,"threads",1,128,1).onChange(_i);let t=ut.addFolder("Render fx");t.add(oe,"autoRotate").onChange(a=>Mn.autoRotate=a).listen(),t.add(oe,"fxaa").onChange(a=>Un.enabled=a),t.add(oe,"bloom").onChange(a=>{gi.enabled=a,Ct.toneMapping=a?Ti:on}),t.add(oe,"bloomStrength",0,10,.01).onChange(a=>gi.strength=a),t.add(oe,"bloomRadius",0,1,.01).onChange(a=>gi.radius=a),t.add(oe,"bloomThreshold",0,1,.01).onChange(a=>gi.threshold=a),t.add(oe,"bloomExposure",.001,128).onChange(a=>Ct.toneMappingExposure=a),t.add(oe,"afterImage").onChange(a=>ki.enabled=a),t.add(oe,"afterImageDamp",0,1).onChange(a=>ki.uniforms.damp.value=a);let n=ut.addFolder("Configuration");n.add(oe,"configuration",Object.keys(Tr)),n.add(oe,"number",0),n.add(oe,"range",0,5e3,1).name("range (1e15m)"),n.add(oe,"speed",0,1e3).name("speed (1e2m.s)"),n.add(oe,"mass",0,1e3).name("mass (1e30kg)"),n.add(oe,"blackHoleMass",0,1e6,1e3),n.add(oe,"scale",0,1e3).onChange(a=>xt.material.uniforms.scale.value=a),n.add(oe,"colorMode",Object.keys(Ms)).onChange(a=>xt.material.uniforms.mode.value=Ms[a]),n.add({restart:_i},"restart"),n.open();let i=ut.addFolder("Simulation");i.add(oe,"gravitationalConstant",0,100,.01),i.add(oe,"simulationSpeed",0,100,.001).name("speed (1e13s)"),i.add(oe,"softening",0,1e3,1),i.add(oe,"collisions"),i.add(oe,"collisionThreshold",0,1e3,1),i.add(oe,"escapeDistance",0,1e5,1),i.add(oe,"blackHoleMassThreshold",0,2e6,1).onChange(a=>xt.material.uniforms.blackHoleMassThreshold.value=a),i.open(),ut.add(oe,"creationMode"),ut.remember(oe),ut.revert(),ut.__preset_select.addEventListener("change",({target:{value:a}})=>{location.hash=`#${encodeURIComponent(a)}`}),window.addEventListener("hashchange",()=>{ut.preset=jl(),_i()})}var Vi=new Ar,Es=new ae;window.addEventListener("pointerdown",function(r){ut&&ut.domElement.contains(r.target)||Or&&Or.dom.contains(r.target)||(Es.set(r.clientX/window.innerWidth*2-1,-(r.clientY/window.innerHeight)*2+1),oe.creationMode&&(oe.autoRotate=!1,Mn.autoRotate=!1,qe={iter:0,speed:20*(1+r.button)}))});window.addEventListener("pointermove",function(r){qe!==null&&Es.set(r.clientX/window.innerWidth*2-1,-(r.clientY/window.innerHeight)*2+1)});window.addEventListener("pointerup",function(){qe=null});var cg=zl("./dist/wasm/index_bg.wasm");cg.then(()=>{$l(),lg(),Yl=!0,zr=requestAnimationFrame(Ss)});
/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
//# sourceMappingURL=index.js.map

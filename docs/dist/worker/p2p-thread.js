(()=>{var Y3="142";var p7=0,t4=1,m7=2;var n4=1,g7=2,Q2=3,e3=0,d1=1,D1=2,x7=1;var W1=0,q1=1,i2=2,i4=3,s4=4,_7=5,M2=100,v7=101,y7=102,r4=103,a4=104,M7=200,b7=201,w7=202,S7=203,o4=204,l4=205,A7=206,T7=207,E7=208,C7=209,P7=210,L7=0,I7=1,R7=2,Z3=3,D7=4,F7=5,N7=6,z7=7,J3=0,B7=1,O7=2,F1=0,U7=1,k7=2,V7=3,G7=4,H7=5,c4=300,b2=301,w2=302,$3=303,K3=304,u3=306,j3=1e3,f1=1001,Q3=1002,t1=1003,h4=1004;var u4=1005;var o1=1006,W7=1007;var d3=1008;var s2=1009,q7=1010,X7=1011,d4=1012,Y7=1013,r2=1014,a2=1015,t3=1016,Z7=1017,J7=1018,S2=1020,$7=1021,K7=1022,T1=1023,j7=1024,Q7=1025,o2=1026,A2=1027,e8=1028,t8=1029,n8=1030,i8=1031,s8=1033,e6=33776,t6=33777,n6=33778,i6=33779,f4=35840,p4=35841,m4=35842,g4=35843,r8=36196,x4=37492,_4=37496,v4=37808,y4=37809,M4=37810,b4=37811,w4=37812,S4=37813,A4=37814,T4=37815,E4=37816,C4=37817,P4=37818,L4=37819,I4=37820,R4=37821,D4=36492;var f3=2300,p3=2301,s6=2302,F4=2400,N4=2401,z4=2402;var a8=2501;var l2=3e3,B0=3001,o8=3200,l8=3201,B4=0,c8=1;var N1="srgb",c2="srgb-linear";var r6=7680;var h8=519,O4=35044;var U4="300 es",a6=1035,h2=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},Z0=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var o6=Math.PI/180,k4=180/Math.PI;function n3(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Z0[r&255]+Z0[r>>8&255]+Z0[r>>16&255]+Z0[r>>24&255]+"-"+Z0[e&255]+Z0[e>>8&255]+"-"+Z0[e>>16&15|64]+Z0[e>>24&255]+"-"+Z0[t&63|128]+Z0[t>>8&255]+"-"+Z0[t>>16&255]+Z0[t>>24&255]+Z0[n&255]+Z0[n>>8&255]+Z0[n>>16&255]+Z0[n>>24&255]).toLowerCase()}function i1(r,e,t){return Math.max(e,Math.min(t,r))}function u8(r,e){return(r%e+e)%e}function l6(r,e,t){return(1-t)*r+t*e}function V4(r){return(r&r-1)==0&&r!==0}function c6(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}var R0=class{constructor(e=0,t=0){R0.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},s1=class{constructor(){s1.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],p=i[0],f=i[3],x=i[6],w=i[1],C=i[4],b=i[7],S=i[2],E=i[5],I=i[8];return s[0]=o*p+a*w+l*S,s[3]=o*f+a*C+l*E,s[6]=o*x+a*b+l*I,s[1]=c*p+h*w+u*S,s[4]=c*f+h*C+u*E,s[7]=c*x+h*b+u*I,s[2]=d*p+m*w+g*S,s[5]=d*f+m*C+g*E,s[8]=d*x+m*b+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,m=c*s-o*l,g=t*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/g;return e[0]=u*p,e[1]=(i*c-h*n)*p,e[2]=(a*n-i*o)*p,e[3]=d*p,e[4]=(h*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*s+n*l,i[3]=t*o+n*c,i[6]=t*a+n*h,i[1]=-n*s+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*h,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};function G4(r){for(let e=r.length-1;e>=0;--e)if(r[e]>65535)return!0;return!1}function m3(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function u2(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function g3(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var h6={[N1]:{[c2]:u2},[c2]:{[N1]:g3}},p1={legacyMode:!0,get workingColorSpace(){return c2},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(h6[e]&&h6[e][t]!==void 0){let n=h6[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},H4={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},k0={r:0,g:0,b:0},m1={h:0,s:0,l:0},x3={h:0,s:0,l:0};function u6(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function _3(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}var C0=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=N1){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,p1.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=c2){return this.r=e,this.g=t,this.b=n,p1.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=c2){if(e=u8(e,1),t=i1(t,0,1),n=i1(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=u6(o,s,e+1/3),this.g=u6(o,s,e),this.b=u6(o,s,e-1/3)}return p1.toWorkingColorSpace(this,i),this}setStyle(e,t=N1){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,p1.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,p1.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){let l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,h=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,p1.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,p1.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=N1){let n=H4[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=u2(e.r),this.g=u2(e.g),this.b=u2(e.b),this}copyLinearToSRGB(e){return this.r=g3(e.r),this.g=g3(e.g),this.b=g3(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=N1){return p1.fromWorkingColorSpace(_3(this,k0),e),i1(k0.r*255,0,255)<<16^i1(k0.g*255,0,255)<<8^i1(k0.b*255,0,255)<<0}getHexString(e=N1){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=c2){p1.fromWorkingColorSpace(_3(this,k0),t);let n=k0.r,i=k0.g,s=k0.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=c2){return p1.fromWorkingColorSpace(_3(this,k0),t),e.r=k0.r,e.g=k0.g,e.b=k0.b,e}getStyle(e=N1){return p1.fromWorkingColorSpace(_3(this,k0),e),e!==N1?`color(${e} ${k0.r} ${k0.g} ${k0.b})`:`rgb(${k0.r*255|0},${k0.g*255|0},${k0.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(m1),m1.h+=e,m1.s+=t,m1.l+=n,this.setHSL(m1.h,m1.s,m1.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(m1),e.getHSL(x3);let n=l6(m1.h,x3.h,t),i=l6(m1.s,x3.s,t),s=l6(m1.l,x3.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};C0.NAMES=H4;var T2,d6=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{T2===void 0&&(T2=m3("canvas")),T2.width=e.width,T2.height=e.height;let n=T2.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=T2}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=m3("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=u2(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(u2(t[n]/255)*255):t[n]=u2(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},f6=class{constructor(e=null){this.isSource=!0,this.uuid=n3(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(p6(i[o].image)):s.push(p6(i[o]))}else s=p6(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function p6(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?d6.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var d8=0,l1=class extends h2{constructor(e=l1.DEFAULT_IMAGE,t=l1.DEFAULT_MAPPING,n=f1,i=f1,s=o1,o=d3,a=T1,l=s2,c=1,h=l2){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:d8++}),this.uuid=n3(),this.name="",this.source=new f6(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new R0(0,0),this.repeat=new R0(1,1),this.center=new R0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new s1,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==c4)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case j3:e.x=e.x-Math.floor(e.x);break;case f1:e.x=e.x<0?0:1;break;case Q3:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case j3:e.y=e.y-Math.floor(e.y);break;case f1:e.y=e.y<0?0:1;break;case Q3:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};l1.DEFAULT_IMAGE=null;l1.DEFAULT_MAPPING=c4;var V0=class{constructor(e=0,t=0,n=0,i=1){V0.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,o=.01,a=.1,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],p=l[2],f=l[6],x=l[10];if(Math.abs(h-d)<o&&Math.abs(u-p)<o&&Math.abs(g-f)<o){if(Math.abs(h+d)<a&&Math.abs(u+p)<a&&Math.abs(g+f)<a&&Math.abs(c+m+x-3)<a)return this.set(1,0,0,0),this;t=Math.PI;let C=(c+1)/2,b=(m+1)/2,S=(x+1)/2,E=(h+d)/4,I=(u+p)/4,y=(g+f)/4;return C>b&&C>S?C<o?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(C),i=E/n,s=I/n):b>S?b<o?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=E/i,s=y/i):S<o?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=I/s,i=y/s),this.set(n,i,s,t),this}let w=Math.sqrt((f-g)*(f-g)+(u-p)*(u-p)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(f-g)/w,this.y=(u-p)/w,this.z=(d-h)/w,this.w=Math.acos((c+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},X1=class extends h2{constructor(e,t,n={}){super();this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new V0(0,0,e,t),this.scissorTest=!1,this.viewport=new V0(0,0,e,t);let i={width:e,height:t,depth:1};this.texture=new l1(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:o1,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new f6(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},m6=class extends l1{constructor(e=null,t=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=t1,this.minFilter=t1,this.wrapR=f1,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var W4=class extends l1{constructor(e=null,t=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=t1,this.minFilter=t1,this.wrapR=f1,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var z1=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(u!==p||l!==d||c!==m||h!==g){let f=1-a,x=l*d+c*m+h*g+u*p,w=x>=0?1:-1,C=1-x*x;if(C>Number.EPSILON){let S=Math.sqrt(C),E=Math.atan2(S,x*w);f=Math.sin(f*E)/S,a=Math.sin(a*E)/S}let b=a*w;if(l=l*f+d*b,c=c*f+m*b,h=h*f+g*b,u=u*f+p*b,f===1-a){let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*m-c*d,e[t+1]=l*g+h*d+c*u-a*m,e[t+2]=c*g+h*m+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(i1(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(q4.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(q4.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,h=l*n+a*t-s*i,u=l*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=c*l+d*-s+h*-a-u*-o,this.y=h*l+d*-o+u*-s-c*-a,this.z=u*l+d*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return g6.copy(this).projectOnVector(e),this.sub(g6)}reflect(e){return this.sub(g6.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(i1(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},g6=new L,q4=new z1,E2=class{constructor(e=new L(Infinity,Infinity,Infinity),t=new L(-Infinity,-Infinity,-Infinity)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=Infinity,n=Infinity,i=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let l=0,c=e.length;l<c;l+=3){let h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=Infinity,n=Infinity,i=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let l=0,c=e.count;l<c;l++){let h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=d2.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){let s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)d2.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(d2)}else n.boundingBox===null&&n.computeBoundingBox(),x6.copy(n.boundingBox),x6.applyMatrix4(e.matrixWorld),this.union(x6);let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,d2),d2.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(i3),v3.subVectors(this.max,i3),C2.subVectors(e.a,i3),P2.subVectors(e.b,i3),L2.subVectors(e.c,i3),Y1.subVectors(P2,C2),Z1.subVectors(L2,P2),f2.subVectors(C2,L2);let t=[0,-Y1.z,Y1.y,0,-Z1.z,Z1.y,0,-f2.z,f2.y,Y1.z,0,-Y1.x,Z1.z,0,-Z1.x,f2.z,0,-f2.x,-Y1.y,Y1.x,0,-Z1.y,Z1.x,0,-f2.y,f2.x,0];return!_6(t,C2,P2,L2,v3)||(t=[1,0,0,0,1,0,0,0,1],!_6(t,C2,P2,L2,v3))?!1:(y3.crossVectors(Y1,Z1),t=[y3.x,y3.y,y3.z],_6(t,C2,P2,L2,v3))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return d2.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(d2).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(B1[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),B1[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),B1[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),B1[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),B1[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),B1[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),B1[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),B1[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(B1),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},B1=[new L,new L,new L,new L,new L,new L,new L,new L],d2=new L,x6=new E2,C2=new L,P2=new L,L2=new L,Y1=new L,Z1=new L,f2=new L,i3=new L,v3=new L,y3=new L,p2=new L;function _6(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){p2.fromArray(r,s);let a=i.x*Math.abs(p2.x)+i.y*Math.abs(p2.y)+i.z*Math.abs(p2.z),l=e.dot(p2),c=t.dot(p2),h=n.dot(p2);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var f8=new E2,X4=new L,M3=new L,v6=new L,b3=class{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):f8.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){v6.subVectors(e,this.center);let t=v6.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(v6.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?M3.set(0,0,1).multiplyScalar(e.radius):M3.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(X4.copy(e.center).add(M3)),this.expandByPoint(X4.copy(e.center).sub(M3)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},O1=new L,y6=new L,w3=new L,J1=new L,M6=new L,S3=new L,b6=new L,Y4=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,O1)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=O1.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(O1.copy(this.direction).multiplyScalar(t).add(this.origin),O1.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){y6.copy(e).add(t).multiplyScalar(.5),w3.copy(t).sub(e).normalize(),J1.copy(this.origin).sub(y6);let s=e.distanceTo(t)*.5,o=-this.direction.dot(w3),a=J1.dot(this.direction),l=-J1.dot(w3),c=J1.lengthSq(),h=Math.abs(1-o*o),u,d,m,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let p=1/h;u*=p,d*=p,m=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(w3).multiplyScalar(d).add(y6),m}intersectSphere(e,t){O1.subVectors(e.center,this.origin);let n=O1.dot(this.direction),i=O1.dot(O1)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,O1)!==null}intersectTriangle(e,t,n,i,s){M6.subVectors(t,e),S3.subVectors(n,e),b6.crossVectors(M6,S3);let o=this.direction.dot(b6),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;J1.subVectors(this.origin,e);let l=a*this.direction.dot(S3.crossVectors(J1,S3));if(l<0)return null;let c=a*this.direction.dot(M6.cross(J1));if(c<0||l+c>o)return null;let h=-a*J1.dot(b6);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},W0=class{constructor(){W0.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c,h,u,d,m,g,p,f){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=m,x[7]=g,x[11]=p,x[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new W0().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/I2.setFromMatrixColumn(e,0).length(),s=1/I2.setFromMatrixColumn(e,1).length(),o=1/I2.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=o*h,m=o*u,g=a*h,p=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=d-p*c,t[9]=-a*l,t[2]=p-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,m=l*u,g=c*h,p=c*u;t[0]=d+p*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=p+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,m=l*u,g=c*h,p=c*u;t[0]=d-p*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=p-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,m=o*u,g=a*h,p=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+p,t[1]=l*u,t[5]=p*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*h,t[4]=p-d*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=d-p*u}else if(e.order==="XZY"){let d=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+p,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=p*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p8,e,m8)}lookAt(e,t,n){let i=this.elements;return r1.subVectors(e,t),r1.lengthSq()===0&&(r1.z=1),r1.normalize(),$1.crossVectors(n,r1),$1.lengthSq()===0&&(Math.abs(n.z)===1?r1.x+=1e-4:r1.z+=1e-4,r1.normalize(),$1.crossVectors(n,r1)),$1.normalize(),A3.crossVectors(r1,$1),i[0]=$1.x,i[4]=A3.x,i[8]=r1.x,i[1]=$1.y,i[5]=A3.y,i[9]=r1.y,i[2]=$1.z,i[6]=A3.z,i[10]=r1.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],p=n[6],f=n[10],x=n[14],w=n[3],C=n[7],b=n[11],S=n[15],E=i[0],I=i[4],y=i[8],T=i[12],F=i[1],N=i[5],J=i[9],n0=i[13],R=i[2],W=i[6],U=i[10],q=i[14],X=i[3],O=i[7],k=i[11],K=i[15];return s[0]=o*E+a*F+l*R+c*X,s[4]=o*I+a*N+l*W+c*O,s[8]=o*y+a*J+l*U+c*k,s[12]=o*T+a*n0+l*q+c*K,s[1]=h*E+u*F+d*R+m*X,s[5]=h*I+u*N+d*W+m*O,s[9]=h*y+u*J+d*U+m*k,s[13]=h*T+u*n0+d*q+m*K,s[2]=g*E+p*F+f*R+x*X,s[6]=g*I+p*N+f*W+x*O,s[10]=g*y+p*J+f*U+x*k,s[14]=g*T+p*n0+f*q+x*K,s[3]=w*E+C*F+b*R+S*X,s[7]=w*I+C*N+b*W+S*O,s[11]=w*y+C*J+b*U+S*k,s[15]=w*T+C*n0+b*q+S*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],p=e[7],f=e[11],x=e[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*m-n*l*m)+p*(+t*l*m-t*c*d+s*o*d-i*o*m+i*c*h-s*l*h)+f*(+t*c*u-t*a*m-s*o*u+n*o*m+s*a*h-n*c*h)+x*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],p=e[13],f=e[14],x=e[15],w=u*f*c-p*d*c+p*l*m-a*f*m-u*l*x+a*d*x,C=g*d*c-h*f*c-g*l*m+o*f*m+h*l*x-o*d*x,b=h*p*c-g*u*c+g*a*m-o*p*m-h*a*x+o*u*x,S=g*u*l-h*p*l-g*a*d+o*p*d+h*a*f-o*u*f,E=t*w+n*C+i*b+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/E;return e[0]=w*I,e[1]=(p*d*s-u*f*s-p*i*m+n*f*m+u*i*x-n*d*x)*I,e[2]=(a*f*s-p*l*s+p*i*c-n*f*c-a*i*x+n*l*x)*I,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*m-n*l*m)*I,e[4]=C*I,e[5]=(h*f*s-g*d*s+g*i*m-t*f*m-h*i*x+t*d*x)*I,e[6]=(g*l*s-o*f*s-g*i*c+t*f*c+o*i*x-t*l*x)*I,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*m+t*l*m)*I,e[8]=b*I,e[9]=(g*u*s-h*p*s-g*n*m+t*p*m+h*n*x-t*u*x)*I,e[10]=(o*p*s-g*a*s+g*n*c-t*p*c-o*n*x+t*a*x)*I,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*m-t*a*m)*I,e[12]=S*I,e[13]=(h*p*i-g*u*i+g*n*d-t*p*d-h*n*f+t*u*f)*I,e[14]=(g*a*i-o*p*i-g*n*l+t*p*l+o*n*f-t*a*f)*I,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*I,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,m=s*h,g=s*u,p=o*h,f=o*u,x=a*u,w=l*c,C=l*h,b=l*u,S=n.x,E=n.y,I=n.z;return i[0]=(1-(p+x))*S,i[1]=(m+b)*S,i[2]=(g-C)*S,i[3]=0,i[4]=(m-b)*E,i[5]=(1-(d+x))*E,i[6]=(f+w)*E,i[7]=0,i[8]=(g+C)*I,i[9]=(f-w)*I,i[10]=(1-(d+p))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=I2.set(i[0],i[1],i[2]).length(),o=I2.set(i[4],i[5],i[6]).length(),a=I2.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],g1.copy(this);let c=1/s,h=1/o,u=1/a;return g1.elements[0]*=c,g1.elements[1]*=c,g1.elements[2]*=c,g1.elements[4]*=h,g1.elements[5]*=h,g1.elements[6]*=h,g1.elements[8]*=u,g1.elements[9]*=u,g1.elements[10]*=u,t.setFromRotationMatrix(g1),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){let a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(o-s),u=(t+e)*l,d=(n+i)*c,m=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},I2=new L,g1=new W0,p8=new L(0,0,0),m8=new L(1,1,1),$1=new L,A3=new L,r1=new L,Z4=new W0,J4=new z1,R2=class{constructor(e=0,t=0,n=0,i=R2.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(i1(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-i1(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(i1(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-i1(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(i1(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-i1(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Z4.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Z4,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return J4.setFromEuler(this),this.setFromQuaternion(J4,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}};R2.DefaultOrder="XYZ";R2.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var w6=class{constructor(){this.mask=1|0}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},g8=0,$4=new L,D2=new z1,U1=new W0,T3=new L,s3=new L,x8=new L,_8=new z1,K4=new L(1,0,0),j4=new L(0,1,0),Q4=new L(0,0,1),v8={type:"added"},e5={type:"removed"},x1=class extends h2{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:g8++}),this.uuid=n3(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=x1.DefaultUp.clone();let e=new L,t=new R2,n=new z1,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new W0},normalMatrix:{value:new s1}}),this.matrix=new W0,this.matrixWorld=new W0,this.matrixAutoUpdate=x1.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new w6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return D2.setFromAxisAngle(e,t),this.quaternion.multiply(D2),this}rotateOnWorldAxis(e,t){return D2.setFromAxisAngle(e,t),this.quaternion.premultiply(D2),this}rotateX(e){return this.rotateOnAxis(K4,e)}rotateY(e){return this.rotateOnAxis(j4,e)}rotateZ(e){return this.rotateOnAxis(Q4,e)}translateOnAxis(e,t){return $4.copy(e).applyQuaternion(this.quaternion),this.position.add($4.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(K4,e)}translateY(e){return this.translateOnAxis(j4,e)}translateZ(e){return this.translateOnAxis(Q4,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(U1.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?T3.copy(e):T3.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),s3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?U1.lookAt(s3,T3,this.up):U1.lookAt(T3,s3,this.up),this.quaternion.setFromRotationMatrix(U1),i&&(U1.extractRotation(i.matrixWorld),D2.setFromRotationMatrix(U1),this.quaternion.premultiply(D2.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(v8)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(e5)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(e5)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),U1.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),U1.multiply(e.parent.matrixWorld)),e.applyMatrix4(U1),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(s3,e,x8),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(s3,_8,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};x1.DefaultUp=new L(0,1,0);x1.DefaultMatrixAutoUpdate=!0;var _1=new L,k1=new L,S6=new L,V1=new L,F2=new L,N2=new L,t5=new L,A6=new L,T6=new L,E6=new L,E1=class{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_1.subVectors(e,t),i.cross(_1);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){_1.subVectors(i,t),k1.subVectors(n,t),S6.subVectors(e,t);let o=_1.dot(_1),a=_1.dot(k1),l=_1.dot(S6),c=k1.dot(k1),h=k1.dot(S6),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);let d=1/u,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,V1),V1.x>=0&&V1.y>=0&&V1.x+V1.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,V1),l.set(0,0),l.addScaledVector(s,V1.x),l.addScaledVector(o,V1.y),l.addScaledVector(a,V1.z),l}static isFrontFacing(e,t,n,i){return _1.subVectors(n,t),k1.subVectors(e,t),_1.cross(k1).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _1.subVectors(this.c,this.b),k1.subVectors(this.a,this.b),_1.cross(k1).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return E1.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return E1.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return E1.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return E1.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return E1.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;F2.subVectors(i,n),N2.subVectors(s,n),A6.subVectors(e,n);let l=F2.dot(A6),c=N2.dot(A6);if(l<=0&&c<=0)return t.copy(n);T6.subVectors(e,i);let h=F2.dot(T6),u=N2.dot(T6);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(F2,o);E6.subVectors(e,s);let m=F2.dot(E6),g=N2.dot(E6);if(g>=0&&m<=g)return t.copy(s);let p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(N2,a);let f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return t5.subVectors(s,i),a=(u-h)/(u-h+(m-g)),t.copy(i).addScaledVector(t5,a);let x=1/(f+p+d);return o=p*x,a=d*x,t.copy(n).addScaledVector(F2,o).addScaledVector(N2,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},y8=0,m2=class extends h2{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:y8++}),this.uuid=n3(),this.name="",this.type="Material",this.blending=q1,this.side=e3,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=o4,this.blendDst=l4,this.blendEquation=M2,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Z3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h8,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=r6,this.stencilZFail=r6,this.stencilZPass=r6,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===x7;continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==q1&&(n.blending=this.blending),this.side!==e3&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},C6=class extends m2{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new C0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=J3,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},U0=new L,E3=new R0,c1=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=O4,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new C0),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new R0),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new L),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new V0),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)E3.fromBufferAttribute(this,t),E3.applyMatrix3(e),this.setXY(t,E3.x,E3.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)U0.fromBufferAttribute(this,t),U0.applyMatrix3(e),this.setXYZ(t,U0.x,U0.y,U0.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)U0.fromBufferAttribute(this,t),U0.applyMatrix4(e),this.setXYZ(t,U0.x,U0.y,U0.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)U0.fromBufferAttribute(this,t),U0.applyNormalMatrix(e),this.setXYZ(t,U0.x,U0.y,U0.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)U0.fromBufferAttribute(this,t),U0.transformDirection(e),this.setXYZ(t,U0.x,U0.y,U0.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==O4&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};var P6=class extends c1{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var L6=class extends c1{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var K1=class extends c1{constructor(e,t,n){super(new Float32Array(e),t,n)}};var M8=0,h1=new W0,I6=new x1,z2=new L,a1=new E2,r3=new E2,q0=new L,G1=class extends h2{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M8++}),this.uuid=n3(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(G4(e)?L6:P6)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new s1().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return h1.makeRotationFromQuaternion(e),this.applyMatrix4(h1),this}rotateX(e){return h1.makeRotationX(e),this.applyMatrix4(h1),this}rotateY(e){return h1.makeRotationY(e),this.applyMatrix4(h1),this}rotateZ(e){return h1.makeRotationZ(e),this.applyMatrix4(h1),this}translate(e,t,n){return h1.makeTranslation(e,t,n),this.applyMatrix4(h1),this}scale(e,t,n){return h1.makeScale(e,t,n),this.applyMatrix4(h1),this}lookAt(e){return I6.lookAt(e),I6.updateMatrix(),this.applyMatrix4(I6.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(z2).negate(),this.translate(z2.x,z2.y,z2.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new K1(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new E2);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-Infinity,-Infinity,-Infinity),new L(Infinity,Infinity,Infinity));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];a1.setFromBufferAttribute(s),this.morphTargetsRelative?(q0.addVectors(this.boundingBox.min,a1.min),this.boundingBox.expandByPoint(q0),q0.addVectors(this.boundingBox.max,a1.max),this.boundingBox.expandByPoint(q0)):(this.boundingBox.expandByPoint(a1.min),this.boundingBox.expandByPoint(a1.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new b3);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,Infinity);return}if(e){let n=this.boundingSphere.center;if(a1.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];r3.setFromBufferAttribute(a),this.morphTargetsRelative?(q0.addVectors(a1.min,r3.min),a1.expandByPoint(q0),q0.addVectors(a1.max,r3.max),a1.expandByPoint(q0)):(a1.expandByPoint(r3.min),a1.expandByPoint(r3.max))}a1.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)q0.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(q0));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)q0.fromBufferAttribute(a,c),l&&(z2.fromBufferAttribute(e,c),q0.add(z2)),i=Math.max(i,n.distanceToSquared(q0))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new c1(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let F=0;F<a;F++)c[F]=new L,h[F]=new L;let u=new L,d=new L,m=new L,g=new R0,p=new R0,f=new R0,x=new L,w=new L;function C(F,N,J){u.fromArray(i,F*3),d.fromArray(i,N*3),m.fromArray(i,J*3),g.fromArray(o,F*2),p.fromArray(o,N*2),f.fromArray(o,J*2),d.sub(u),m.sub(u),p.sub(g),f.sub(g);let n0=1/(p.x*f.y-f.x*p.y);!isFinite(n0)||(x.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(n0),w.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(n0),c[F].add(x),c[N].add(x),c[J].add(x),h[F].add(w),h[N].add(w),h[J].add(w))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let F=0,N=b.length;F<N;++F){let J=b[F],n0=J.start,R=J.count;for(let W=n0,U=n0+R;W<U;W+=3)C(n[W+0],n[W+1],n[W+2])}let S=new L,E=new L,I=new L,y=new L;function T(F){I.fromArray(s,F*3),y.copy(I);let N=c[F];S.copy(N),S.sub(I.multiplyScalar(I.dot(N))).normalize(),E.crossVectors(y,N);let n0=E.dot(h[F])<0?-1:1;l[F*4]=S.x,l[F*4+1]=S.y,l[F*4+2]=S.z,l[F*4+3]=n0}for(let F=0,N=b.length;F<N;++F){let J=b[F],n0=J.start,R=J.count;for(let W=n0,U=n0+R;W<U;W+=3)T(n[W+0]),T(n[W+1]),T(n[W+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new c1(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let i=new L,s=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,f),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(e.attributes[i]===void 0)continue;let o=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,h=Math.min(l.length,o.length-c);for(let u=0,d=c;u<h;u++,d++)o[d]=l[u]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)q0.fromBufferAttribute(e,t),q0.normalize(),e.setXYZ(t,q0.x,q0.y,q0.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),m=0,g=0;for(let p=0,f=l.length;p<f;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*h;for(let x=0;x<h;x++)d[g++]=c[m++]}return new c1(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new G1,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},n5=new W0,B2=new Y4,R6=new b3,j1=new L,Q1=new L,e2=new L,D6=new L,F6=new L,N6=new L,C3=new L,P3=new L,L3=new L,I3=new R0,R3=new R0,D3=new R0,z6=new L,F3=new L,C1=class extends x1{constructor(e=new G1,t=new C6){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),R6.copy(n.boundingSphere),R6.applyMatrix4(s),e.ray.intersectsSphere(R6)===!1)||(n5.copy(s).invert(),B2.copy(e.ray).applyMatrix4(n5),n.boundingBox!==null&&B2.intersectsBox(n.boundingBox)===!1))return;let o,a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){let x=m[p],w=i[x.materialIndex],C=Math.max(x.start,g.start),b=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let S=C,E=b;S<E;S+=3){let I=a.getX(S),y=a.getX(S+1),T=a.getX(S+2);o=N3(this,w,e,B2,l,c,h,u,d,I,y,T),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{let p=Math.max(0,g.start),f=Math.min(a.count,g.start+g.count);for(let x=p,w=f;x<w;x+=3){let C=a.getX(x),b=a.getX(x+1),S=a.getX(x+2);o=N3(this,i,e,B2,l,c,h,u,d,C,b,S),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){let x=m[p],w=i[x.materialIndex],C=Math.max(x.start,g.start),b=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let S=C,E=b;S<E;S+=3){let I=S,y=S+1,T=S+2;o=N3(this,w,e,B2,l,c,h,u,d,I,y,T),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{let p=Math.max(0,g.start),f=Math.min(l.count,g.start+g.count);for(let x=p,w=f;x<w;x+=3){let C=x,b=x+1,S=x+2;o=N3(this,i,e,B2,l,c,h,u,d,C,b,S),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}};function b8(r,e,t,n,i,s,o,a){let l;if(e.side===d1?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side!==D1,a),l===null)return null;F3.copy(a),F3.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(F3);return c<t.near||c>t.far?null:{distance:c,point:F3.clone(),object:r}}function N3(r,e,t,n,i,s,o,a,l,c,h,u){j1.fromBufferAttribute(i,c),Q1.fromBufferAttribute(i,h),e2.fromBufferAttribute(i,u);let d=r.morphTargetInfluences;if(s&&d){C3.set(0,0,0),P3.set(0,0,0),L3.set(0,0,0);for(let g=0,p=s.length;g<p;g++){let f=d[g],x=s[g];f!==0&&(D6.fromBufferAttribute(x,c),F6.fromBufferAttribute(x,h),N6.fromBufferAttribute(x,u),o?(C3.addScaledVector(D6,f),P3.addScaledVector(F6,f),L3.addScaledVector(N6,f)):(C3.addScaledVector(D6.sub(j1),f),P3.addScaledVector(F6.sub(Q1),f),L3.addScaledVector(N6.sub(e2),f)))}j1.add(C3),Q1.add(P3),e2.add(L3)}r.isSkinnedMesh&&(r.boneTransform(c,j1),r.boneTransform(h,Q1),r.boneTransform(u,e2));let m=b8(r,e,t,n,j1,Q1,e2,z6);if(m){a&&(I3.fromBufferAttribute(a,c),R3.fromBufferAttribute(a,h),D3.fromBufferAttribute(a,u),m.uv=E1.getUV(z6,j1,Q1,e2,I3,R3,D3,new R0)),l&&(I3.fromBufferAttribute(l,c),R3.fromBufferAttribute(l,h),D3.fromBufferAttribute(l,u),m.uv2=E1.getUV(z6,j1,Q1,e2,I3,R3,D3,new R0));let g={a:c,b:h,c:u,normal:new L,materialIndex:0};E1.getNormal(j1,Q1,e2,g.normal),m.face=g}return m}var O2=class extends G1{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new K1(c,3)),this.setAttribute("normal",new K1(h,3)),this.setAttribute("uv",new K1(u,2));function g(p,f,x,w,C,b,S,E,I,y,T){let F=b/I,N=S/y,J=b/2,n0=S/2,R=E/2,W=I+1,U=y+1,q=0,X=0,O=new L;for(let k=0;k<U;k++){let K=k*N-n0;for(let Y=0;Y<W;Y++){let i0=Y*F-J;O[p]=i0*w,O[f]=K*C,O[x]=R,c.push(O.x,O.y,O.z),O[p]=0,O[f]=0,O[x]=E>0?1:-1,h.push(O.x,O.y,O.z),u.push(Y/I),u.push(1-k/y),q+=1}}for(let k=0;k<y;k++)for(let K=0;K<I;K++){let Y=d+K+W*k,i0=d+K+W*(k+1),c0=d+(K+1)+W*(k+1),u0=d+(K+1)+W*k;l.push(Y,i0,u0),l.push(i0,c0,u0),X+=6}a.addGroup(m,X,T),m+=X,d+=q}}static fromJSON(e){return new O2(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function U2(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function J0(r){let e={};for(let t=0;t<r.length;t++){let n=U2(r[t]);for(let i in n)e[i]=n[i]}return e}var w8={clone:U2,merge:J0},S8=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A8=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,v1=class extends m2{constructor(e){super();this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=S8,this.fragmentShader=A8,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=U2(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},B6=class extends x1{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new W0,this.projectionMatrix=new W0,this.projectionMatrixInverse=new W0}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},u1=class extends B6{constructor(e=50,t=1,n=.1,i=2e3){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=k4*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(o6*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return k4*2*Math.atan(Math.tan(o6*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(o6*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},k2=90,V2=1,i5=class extends x1{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new u1(k2,V2,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new L(1,0,0)),this.add(i);let s=new u1(k2,V2,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new L(-1,0,0)),this.add(s);let o=new u1(k2,V2,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new L(0,1,0)),this.add(o);let a=new u1(k2,V2,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new L(0,-1,0)),this.add(a);let l=new u1(k2,V2,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,1)),this.add(l);let c=new u1(k2,V2,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,o,a,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=F1,e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}},O6=class extends l1{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:b2,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},s5=class extends X1{constructor(e,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new O6(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:o1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new O2(5,5,5),s=new v1({name:"CubemapFromEquirect",uniforms:U2(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:d1,blending:W1});s.uniforms.tEquirect.value=t;let o=new C1(i,s),a=t.minFilter;return t.minFilter===d3&&(t.minFilter=o1),new i5(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},U6=new L,T8=new L,E8=new s1,t2=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=U6.subVectors(n,t).cross(T8.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(U6),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||E8.getNormalMatrix(e),i=this.coplanarPoint(U6).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},G2=new b3,z3=new L,k6=class{constructor(e=new t2,t=new t2,n=new t2,i=new t2,s=new t2,o=new t2){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],m=n[9],g=n[10],p=n[11],f=n[12],x=n[13],w=n[14],C=n[15];return t[0].setComponents(a-i,u-l,p-d,C-f).normalize(),t[1].setComponents(a+i,u+l,p+d,C+f).normalize(),t[2].setComponents(a+s,u+c,p+m,C+x).normalize(),t[3].setComponents(a-s,u-c,p-m,C-x).normalize(),t[4].setComponents(a-o,u-h,p-g,C-w).normalize(),t[5].setComponents(a+o,u+h,p+g,C+w).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),G2.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(G2)}intersectsSprite(e){return G2.center.set(0,0,0),G2.radius=.7071067811865476,G2.applyMatrix4(e.matrixWorld),this.intersectsSphere(G2)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(z3.x=i.normal.x>0?e.max.x:e.min.x,z3.y=i.normal.y>0?e.max.y:e.min.y,z3.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(z3)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function r5(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function C8(r,e){let t=e.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,d=c.usage,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){let d=h.array,m=h.updateRange;r.bindBuffer(u,c),m.count===-1?r.bufferSubData(u,0,d):(t?r.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}var B3=class extends G1{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,m=[],g=[],p=[],f=[];for(let x=0;x<h;x++){let w=x*d-o;for(let C=0;C<c;C++){let b=C*u-s;g.push(b,-w,0),p.push(0,0,1),f.push(C/a),f.push(1-x/l)}}for(let x=0;x<l;x++)for(let w=0;w<a;w++){let C=w+c*x,b=w+c*(x+1),S=w+1+c*(x+1),E=w+1+c*x;m.push(C,b,E),m.push(b,S,E)}this.setIndex(m),this.setAttribute("position",new K1(g,3)),this.setAttribute("normal",new K1(p,3)),this.setAttribute("uv",new K1(f,2))}static fromJSON(e){return new B3(e.width,e.height,e.widthSegments,e.heightSegments)}},P8=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,L8=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I8=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,R8=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D8=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,F8=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N8="vec3 transformed = vec3( position );",z8=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B8=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,O8=`#ifdef USE_IRIDESCENCE
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
#endif`,U8=`#ifdef USE_BUMPMAP
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
#endif`,k8=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V8=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G8=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H8=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W8=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q8=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X8=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Y8=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Z8=`#define PI 3.141592653589793
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
}`,J8=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$8=`vec3 transformedNormal = objectNormal;
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
#endif`,K8=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j8=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Q8=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e9=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t9="gl_FragColor = linearToOutputTexel( gl_FragColor );",n9=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i9=`#ifdef USE_ENVMAP
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
#endif`,s9=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r9=`#ifdef USE_ENVMAP
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
#endif`,a9=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o9=`#ifdef USE_ENVMAP
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
#endif`,l9=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c9=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h9=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u9=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d9=`#ifdef USE_GRADIENTMAP
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
}`,f9=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,p9=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m9=`vec3 diffuse = vec3( 1.0 );
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
#endif`,g9=`uniform bool receiveShadow;
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
#endif`,x9=`#if defined( USE_ENVMAP )
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
#endif`,_9=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v9=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,y9=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M9=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,b9=`PhysicalMaterial material;
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
#endif`,w9=`struct PhysicalMaterial {
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
}`,S9=`
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
#endif`,A9=`#if defined( RE_IndirectDiffuse )
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
#endif`,T9=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,E9=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C9=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P9=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,L9=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,I9=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R9=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D9=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,F9=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N9=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z9=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B9=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O9=`#ifdef USE_MORPHNORMALS
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
#endif`,U9=`#ifdef USE_MORPHTARGETS
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
#endif`,k9=`#ifdef USE_MORPHTARGETS
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
#endif`,V9=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,G9=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,H9=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W9=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q9=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,X9=`#ifdef USE_NORMALMAP
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
#endif`,Y9=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Z9=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,J9=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,$9=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K9=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j9=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Q9=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ee=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,te=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ne=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ie=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,se=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,re=`#ifdef USE_SHADOWMAP
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
#endif`,ae=`#ifdef USE_SHADOWMAP
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
#endif`,oe=`#ifdef USE_SHADOWMAP
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
#endif`,le=`float getShadowMask() {
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
}`,ce=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,he=`#ifdef USE_SKINNING
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
#endif`,ue=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,de=`#ifdef USE_SKINNING
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
#endif`,fe=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pe=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,me=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ge=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xe=`#ifdef USE_TRANSMISSION
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
#endif`,_e=`#ifdef USE_TRANSMISSION
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
#endif`,ve=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ye=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Me=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,be=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,we=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Se=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ae=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Te=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ee=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ce=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pe=`#include <envmap_common_pars_fragment>
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
}`,Le=`#include <common>
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
}`,Ie=`#if DEPTH_PACKING == 3200
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
}`,Re=`#define DISTANCE
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
}`,De=`#define DISTANCE
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
}`,Fe=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ne=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ze=`uniform float scale;
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
}`,Be=`uniform vec3 diffuse;
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
}`,Oe=`#include <common>
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
}`,Ue=`uniform vec3 diffuse;
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
}`,ke=`#define LAMBERT
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
}`,Ve=`uniform vec3 diffuse;
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
}`,Ge=`#define MATCAP
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
}`,He=`#define MATCAP
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
}`,We=`#define NORMAL
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
}`,qe=`#define NORMAL
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
}`,Xe=`#define PHONG
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
}`,Ye=`#define PHONG
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
}`,Ze=`#define STANDARD
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
}`,Je=`#define STANDARD
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
}`,$e=`#define TOON
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
}`,Ke=`#define TOON
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
}`,je=`uniform float size;
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
}`,Qe=`uniform vec3 diffuse;
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
}`,et=`#include <common>
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
}`,tt=`uniform vec3 color;
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
}`,nt=`uniform float rotation;
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
}`,it=`uniform vec3 diffuse;
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
}`,b0={alphamap_fragment:P8,alphamap_pars_fragment:L8,alphatest_fragment:I8,alphatest_pars_fragment:R8,aomap_fragment:D8,aomap_pars_fragment:F8,begin_vertex:N8,beginnormal_vertex:z8,bsdfs:B8,iridescence_fragment:O8,bumpmap_pars_fragment:U8,clipping_planes_fragment:k8,clipping_planes_pars_fragment:V8,clipping_planes_pars_vertex:G8,clipping_planes_vertex:H8,color_fragment:W8,color_pars_fragment:q8,color_pars_vertex:X8,color_vertex:Y8,common:Z8,cube_uv_reflection_fragment:J8,defaultnormal_vertex:$8,displacementmap_pars_vertex:K8,displacementmap_vertex:j8,emissivemap_fragment:Q8,emissivemap_pars_fragment:e9,encodings_fragment:t9,encodings_pars_fragment:n9,envmap_fragment:i9,envmap_common_pars_fragment:s9,envmap_pars_fragment:r9,envmap_pars_vertex:a9,envmap_physical_pars_fragment:x9,envmap_vertex:o9,fog_vertex:l9,fog_pars_vertex:c9,fog_fragment:h9,fog_pars_fragment:u9,gradientmap_pars_fragment:d9,lightmap_fragment:f9,lightmap_pars_fragment:p9,lights_lambert_vertex:m9,lights_pars_begin:g9,lights_toon_fragment:_9,lights_toon_pars_fragment:v9,lights_phong_fragment:y9,lights_phong_pars_fragment:M9,lights_physical_fragment:b9,lights_physical_pars_fragment:w9,lights_fragment_begin:S9,lights_fragment_maps:A9,lights_fragment_end:T9,logdepthbuf_fragment:E9,logdepthbuf_pars_fragment:C9,logdepthbuf_pars_vertex:P9,logdepthbuf_vertex:L9,map_fragment:I9,map_pars_fragment:R9,map_particle_fragment:D9,map_particle_pars_fragment:F9,metalnessmap_fragment:N9,metalnessmap_pars_fragment:z9,morphcolor_vertex:B9,morphnormal_vertex:O9,morphtarget_pars_vertex:U9,morphtarget_vertex:k9,normal_fragment_begin:V9,normal_fragment_maps:G9,normal_pars_fragment:H9,normal_pars_vertex:W9,normal_vertex:q9,normalmap_pars_fragment:X9,clearcoat_normal_fragment_begin:Y9,clearcoat_normal_fragment_maps:Z9,clearcoat_pars_fragment:J9,iridescence_pars_fragment:$9,output_fragment:K9,packing:j9,premultiplied_alpha_fragment:Q9,project_vertex:ee,dithering_fragment:te,dithering_pars_fragment:ne,roughnessmap_fragment:ie,roughnessmap_pars_fragment:se,shadowmap_pars_fragment:re,shadowmap_pars_vertex:ae,shadowmap_vertex:oe,shadowmask_pars_fragment:le,skinbase_vertex:ce,skinning_pars_vertex:he,skinning_vertex:ue,skinnormal_vertex:de,specularmap_fragment:fe,specularmap_pars_fragment:pe,tonemapping_fragment:me,tonemapping_pars_fragment:ge,transmission_fragment:xe,transmission_pars_fragment:_e,uv_pars_fragment:ve,uv_pars_vertex:ye,uv_vertex:Me,uv2_pars_fragment:be,uv2_pars_vertex:we,uv2_vertex:Se,worldpos_vertex:Ae,background_vert:Te,background_frag:Ee,cube_vert:Ce,cube_frag:Pe,depth_vert:Le,depth_frag:Ie,distanceRGBA_vert:Re,distanceRGBA_frag:De,equirect_vert:Fe,equirect_frag:Ne,linedashed_vert:ze,linedashed_frag:Be,meshbasic_vert:Oe,meshbasic_frag:Ue,meshlambert_vert:ke,meshlambert_frag:Ve,meshmatcap_vert:Ge,meshmatcap_frag:He,meshnormal_vert:We,meshnormal_frag:qe,meshphong_vert:Xe,meshphong_frag:Ye,meshphysical_vert:Ze,meshphysical_frag:Je,meshtoon_vert:$e,meshtoon_frag:Ke,points_vert:je,points_frag:Qe,shadow_vert:et,shadow_frag:tt,sprite_vert:nt,sprite_frag:it},t0={common:{diffuse:{value:new C0(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new s1},uv2Transform:{value:new s1},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new R0(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new C0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new C0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new s1}},sprite:{diffuse:{value:new C0(16777215)},opacity:{value:1},center:{value:new R0(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new s1}}},P1={basic:{uniforms:J0([t0.common,t0.specularmap,t0.envmap,t0.aomap,t0.lightmap,t0.fog]),vertexShader:b0.meshbasic_vert,fragmentShader:b0.meshbasic_frag},lambert:{uniforms:J0([t0.common,t0.specularmap,t0.envmap,t0.aomap,t0.lightmap,t0.emissivemap,t0.fog,t0.lights,{emissive:{value:new C0(0)}}]),vertexShader:b0.meshlambert_vert,fragmentShader:b0.meshlambert_frag},phong:{uniforms:J0([t0.common,t0.specularmap,t0.envmap,t0.aomap,t0.lightmap,t0.emissivemap,t0.bumpmap,t0.normalmap,t0.displacementmap,t0.fog,t0.lights,{emissive:{value:new C0(0)},specular:{value:new C0(1118481)},shininess:{value:30}}]),vertexShader:b0.meshphong_vert,fragmentShader:b0.meshphong_frag},standard:{uniforms:J0([t0.common,t0.envmap,t0.aomap,t0.lightmap,t0.emissivemap,t0.bumpmap,t0.normalmap,t0.displacementmap,t0.roughnessmap,t0.metalnessmap,t0.fog,t0.lights,{emissive:{value:new C0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:b0.meshphysical_vert,fragmentShader:b0.meshphysical_frag},toon:{uniforms:J0([t0.common,t0.aomap,t0.lightmap,t0.emissivemap,t0.bumpmap,t0.normalmap,t0.displacementmap,t0.gradientmap,t0.fog,t0.lights,{emissive:{value:new C0(0)}}]),vertexShader:b0.meshtoon_vert,fragmentShader:b0.meshtoon_frag},matcap:{uniforms:J0([t0.common,t0.bumpmap,t0.normalmap,t0.displacementmap,t0.fog,{matcap:{value:null}}]),vertexShader:b0.meshmatcap_vert,fragmentShader:b0.meshmatcap_frag},points:{uniforms:J0([t0.points,t0.fog]),vertexShader:b0.points_vert,fragmentShader:b0.points_frag},dashed:{uniforms:J0([t0.common,t0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:b0.linedashed_vert,fragmentShader:b0.linedashed_frag},depth:{uniforms:J0([t0.common,t0.displacementmap]),vertexShader:b0.depth_vert,fragmentShader:b0.depth_frag},normal:{uniforms:J0([t0.common,t0.bumpmap,t0.normalmap,t0.displacementmap,{opacity:{value:1}}]),vertexShader:b0.meshnormal_vert,fragmentShader:b0.meshnormal_frag},sprite:{uniforms:J0([t0.sprite,t0.fog]),vertexShader:b0.sprite_vert,fragmentShader:b0.sprite_frag},background:{uniforms:{uvTransform:{value:new s1},t2D:{value:null}},vertexShader:b0.background_vert,fragmentShader:b0.background_frag},cube:{uniforms:J0([t0.envmap,{opacity:{value:1}}]),vertexShader:b0.cube_vert,fragmentShader:b0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:b0.equirect_vert,fragmentShader:b0.equirect_frag},distanceRGBA:{uniforms:J0([t0.common,t0.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:b0.distanceRGBA_vert,fragmentShader:b0.distanceRGBA_frag},shadow:{uniforms:J0([t0.lights,t0.fog,{color:{value:new C0(0)},opacity:{value:1}}]),vertexShader:b0.shadow_vert,fragmentShader:b0.shadow_frag}};P1.physical={uniforms:J0([P1.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new R0(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new C0(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new R0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new C0(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new C0(1,1,1)},specularColorMap:{value:null}}]),vertexShader:b0.meshphysical_vert,fragmentShader:b0.meshphysical_frag};function st(r,e,t,n,i,s){let o=new C0(0),a=i===!0?0:1,l,c,h=null,u=0,d=null;function m(p,f){let x=!1,w=f.isScene===!0?f.background:null;w&&w.isTexture&&(w=e.get(w));let C=r.xr,b=C.getSession&&C.getSession();b&&b.environmentBlendMode==="additive"&&(w=null),w===null?g(o,a):w&&w.isColor&&(g(w,1),x=!0),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),w&&(w.isCubeTexture||w.mapping===u3)?(c===void 0&&(c=new C1(new O2(1,1,1),new v1({name:"BackgroundCubeMaterial",uniforms:U2(P1.cube.uniforms),vertexShader:P1.cube.vertexShader,fragmentShader:P1.cube.fragmentShader,side:d1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,(h!==w||u!==w.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=w,u=w.version,d=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new C1(new B3(2,2),new v1({name:"BackgroundMaterial",uniforms:U2(P1.background.uniforms),vertexShader:P1.background.vertexShader,fragmentShader:P1.background.fragmentShader,side:e3,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||u!==w.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=w,u=w.version,d=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,f){t.buffers.color.setClear(p.r,p.g,p.b,f,s)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),a=f,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(o,a)},render:m}}function rt(r,e,t,n){let i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=f(null),c=l,h=!1;function u(R,W,U,q,X){let O=!1;if(o){let k=p(q,U,W);c!==k&&(c=k,m(c.object)),O=x(R,q,U,X),O&&w(R,q,U,X)}else{let k=W.wireframe===!0;(c.geometry!==q.id||c.program!==U.id||c.wireframe!==k)&&(c.geometry=q.id,c.program=U.id,c.wireframe=k,O=!0)}X!==null&&t.update(X,34963),(O||h)&&(h=!1,y(R,W,U,q),X!==null&&r.bindBuffer(34963,t.get(X).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R,W,U){let q=U.wireframe===!0,X=a[R.id];X===void 0&&(X={},a[R.id]=X);let O=X[W.id];O===void 0&&(O={},X[W.id]=O);let k=O[q];return k===void 0&&(k=f(d()),O[q]=k),k}function f(R){let W=[],U=[],q=[];for(let X=0;X<i;X++)W[X]=0,U[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:U,attributeDivisors:q,object:R,attributes:{},index:null}}function x(R,W,U,q){let X=c.attributes,O=W.attributes,k=0,K=U.getAttributes();for(let Y in K)if(K[Y].location>=0){let c0=X[Y],u0=O[Y];if(u0===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(u0=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(u0=R.instanceColor)),c0===void 0||c0.attribute!==u0||u0&&c0.data!==u0.data)return!0;k++}return c.attributesNum!==k||c.index!==q}function w(R,W,U,q){let X={},O=W.attributes,k=0,K=U.getAttributes();for(let Y in K)if(K[Y].location>=0){let c0=O[Y];c0===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(c0=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(c0=R.instanceColor));let u0={};u0.attribute=c0,c0&&c0.data&&(u0.data=c0.data),X[Y]=u0,k++}c.attributes=X,c.attributesNum=k,c.index=q}function C(){let R=c.newAttributes;for(let W=0,U=R.length;W<U;W++)R[W]=0}function b(R){S(R,0)}function S(R,W){let U=c.newAttributes,q=c.enabledAttributes,X=c.attributeDivisors;U[R]=1,q[R]===0&&(r.enableVertexAttribArray(R),q[R]=1),X[R]!==W&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,W),X[R]=W)}function E(){let R=c.newAttributes,W=c.enabledAttributes;for(let U=0,q=W.length;U<q;U++)W[U]!==R[U]&&(r.disableVertexAttribArray(U),W[U]=0)}function I(R,W,U,q,X,O){n.isWebGL2===!0&&(U===5124||U===5125)?r.vertexAttribIPointer(R,W,U,X,O):r.vertexAttribPointer(R,W,U,q,X,O)}function y(R,W,U,q){if(n.isWebGL2===!1&&(R.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();let X=q.attributes,O=U.getAttributes(),k=W.defaultAttributeValues;for(let K in O){let Y=O[K];if(Y.location>=0){let i0=X[K];if(i0===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(i0=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(i0=R.instanceColor)),i0!==void 0){let c0=i0.normalized,u0=i0.itemSize,G=t.get(i0);if(G===void 0)continue;let H0=G.buffer,w0=G.type,v0=G.bytesPerElement;if(i0.isInterleavedBufferAttribute){let r0=i0.data,F0=r0.stride,S0=i0.offset;if(r0.isInstancedInterleavedBuffer){for(let f0=0;f0<Y.locationSize;f0++)S(Y.location+f0,r0.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=r0.meshPerAttribute*r0.count)}else for(let f0=0;f0<Y.locationSize;f0++)b(Y.location+f0);r.bindBuffer(34962,H0);for(let f0=0;f0<Y.locationSize;f0++)I(Y.location+f0,u0/Y.locationSize,w0,c0,F0*v0,(S0+u0/Y.locationSize*f0)*v0)}else{if(i0.isInstancedBufferAttribute){for(let r0=0;r0<Y.locationSize;r0++)S(Y.location+r0,i0.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=i0.meshPerAttribute*i0.count)}else for(let r0=0;r0<Y.locationSize;r0++)b(Y.location+r0);r.bindBuffer(34962,H0);for(let r0=0;r0<Y.locationSize;r0++)I(Y.location+r0,u0/Y.locationSize,w0,c0,u0*v0,u0/Y.locationSize*r0*v0)}}else if(k!==void 0){let c0=k[K];if(c0!==void 0)switch(c0.length){case 2:r.vertexAttrib2fv(Y.location,c0);break;case 3:r.vertexAttrib3fv(Y.location,c0);break;case 4:r.vertexAttrib4fv(Y.location,c0);break;default:r.vertexAttrib1fv(Y.location,c0)}}}}E()}function T(){J();for(let R in a){let W=a[R];for(let U in W){let q=W[U];for(let X in q)g(q[X].object),delete q[X];delete W[U]}delete a[R]}}function F(R){if(a[R.id]===void 0)return;let W=a[R.id];for(let U in W){let q=W[U];for(let X in q)g(q[X].object),delete q[X];delete W[U]}delete a[R.id]}function N(R){for(let W in a){let U=a[W];if(U[R.id]===void 0)continue;let q=U[R.id];for(let X in q)g(q[X].object),delete q[X];delete U[R.id]}}function J(){n0(),h=!0,c!==l&&(c=l,m(c.object))}function n0(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:J,resetDefaultState:n0,dispose:T,releaseStatesOfGeometry:F,releaseStatesOfProgram:N,initAttributes:C,enableAttribute:b,disableUnusedAttributes:E}}function at(r,e,t,n){let i=n.isWebGL2,s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,h,u),t.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function ot(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(I){if(I==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),f=r.getParameter(36347),x=r.getParameter(36348),w=r.getParameter(36349),C=d>0,b=o||e.has("OES_texture_float"),S=C&&b,E=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:w,vertexTextures:C,floatFragmentTextures:b,floatVertexTextures:S,maxSamples:E}}function lt(r){let e=this,t=null,n=0,i=!1,s=!1,o=new t2,a=new s1,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,m){let g=u.length!==0||d||n!==0||i;return i=d,t=h(u,m,0),n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,m){let g=u.clippingPlanes,p=u.clipIntersection,f=u.clipShadows,x=r.get(u);if(!i||g===null||g.length===0||s&&!f)s?h(null):c();else{let w=s?0:n,C=w*4,b=x.clippingState||null;l.value=b,b=h(g,d,C,m);for(let S=0;S!==C;++S)b[S]=t[S];x.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,g){let p=u!==null?u.length:0,f=null;if(p!==0){if(f=l.value,g!==!0||f===null){let x=m+p*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(f===null||f.length<x)&&(f=new Float32Array(x));for(let C=0,b=m;C!==p;++C,b+=4)o.copy(u[C]).applyMatrix4(w,a),o.normal.toArray(f,b),f[b+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function ct(r){let e=new WeakMap;function t(o,a){return a===$3?o.mapping=b2:a===K3&&(o.mapping=w2),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===$3||a===K3)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new s5(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var a5=class extends B6{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},H2=4,o5=[.125,.215,.35,.446,.526,.582],g2=20,V6=new a5,l5=new C0,G6=null,x2=(1+Math.sqrt(5))/2,W2=1/x2,c5=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,x2,W2),new L(0,x2,-W2),new L(W2,0,x2),new L(-W2,0,x2),new L(x2,W2,0),new L(-x2,W2,0)],H6=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){G6=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=d5(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=u5(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(G6),e.scissorTest=!1,O3(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===b2||e.mapping===w2?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),G6=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,16*7),t=4*this._cubeSize,n={magFilter:o1,minFilter:o1,generateMipmaps:!1,type:t3,format:T1,encoding:l2,depthBuffer:!1},i=h5(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h5(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ht(s)),this._blurMaterial=ut(s,e,t)}return i}_compileMaterial(e){let t=new C1(this._lodPlanes[0],e);this._renderer.compile(t,V6)}_sceneToCubeUV(e,t,n,i){let s=90,o=1,a=new u1(s,o,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(l5),h.toneMapping=F1,h.autoClear=!1;let m=new C6({name:"PMREM.Background",side:d1,depthWrite:!1,depthTest:!1}),g=new C1(new O2,m),p=!1,f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(l5),p=!0);for(let x=0;x<6;x++){let w=x%3;w===0?(a.up.set(0,l[x],0),a.lookAt(c[x],0,0)):w===1?(a.up.set(0,0,l[x]),a.lookAt(0,c[x],0)):(a.up.set(0,l[x],0),a.lookAt(0,0,c[x]));let C=this._cubeSize;O3(i,w*C,x>2?C:0,C,C),h.setRenderTarget(i),p&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===b2||e.mapping===w2;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=d5()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=u5());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new C1(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;O3(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,V6)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=c5[(i-1)%c5.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new C1(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*g2-1),p=s/g,f=isFinite(s)?1+Math.floor(h*p):g2;f>g2&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${g2}`);let x=[],w=0;for(let I=0;I<g2;++I){let y=I/p,T=Math.exp(-y*y/2);x.push(T),I===0?w+=T:I<f&&(w+=2*T)}for(let I=0;I<x.length;I++)x[I]=x[I]/w;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=x,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:C}=this;d.dTheta.value=g,d.mipInt.value=C-n;let b=this._sizeLods[i],S=3*b*(i>C-H2?i-C+H2:0),E=4*(this._cubeSize-b);O3(t,S,E,3*b,2*b),l.setRenderTarget(t),l.render(u,V6)}};function ht(r){let e=[],t=[],n=[],i=r,s=r-H2+1+o5.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>r-H2?l=o5[o-r+H2-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,p=3,f=2,x=1,w=new Float32Array(p*g*m),C=new Float32Array(f*g*m),b=new Float32Array(x*g*m);for(let E=0;E<m;E++){let I=E%3*2/3-1,y=E>2?0:-1,T=[I,y,0,I+2/3,y,0,I+2/3,y+1,0,I,y,0,I+2/3,y+1,0,I,y+1,0];w.set(T,p*g*E),C.set(d,f*g*E);let F=[E,E,E,E,E,E];b.set(F,x*g*E)}let S=new G1;S.setAttribute("position",new c1(w,p)),S.setAttribute("uv",new c1(C,f)),S.setAttribute("faceIndex",new c1(b,x)),e.push(S),i>H2&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function h5(r,e,t){let n=new X1(r,e,t);return n.texture.mapping=u3,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function O3(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ut(r,e,t){let n=new Float32Array(g2),i=new L(0,1,0);return new v1({name:"SphericalGaussianBlur",defines:{n:g2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:W6(),fragmentShader:`

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
		`,blending:W1,depthTest:!1,depthWrite:!1})}function u5(){return new v1({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:W6(),fragmentShader:`

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
		`,blending:W1,depthTest:!1,depthWrite:!1})}function d5(){return new v1({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:W6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:W1,depthTest:!1,depthWrite:!1})}function W6(){return`

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
	`}function dt(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===$3||l===K3,h=l===b2||l===w2;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new H6(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new H6(r));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ft(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function pt(r,e,t,n){let i={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];let m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],34962);let m=u.morphAttributes;for(let g in m){let p=m[g];for(let f=0,x=p.length;f<x;f++)e.update(p[f],34962)}}function c(u){let d=[],m=u.index,g=u.attributes.position,p=0;if(m!==null){let w=m.array;p=m.version;for(let C=0,b=w.length;C<b;C+=3){let S=w[C+0],E=w[C+1],I=w[C+2];d.push(S,E,E,I,I,S)}}else{let w=g.array;p=g.version;for(let C=0,b=w.length/3-1;C<b;C+=3){let S=C+0,E=C+1,I=C+2;d.push(S,E,E,I,I,S)}}let f=new(G4(d)?L6:P6)(d,1);f.version=p;let x=s.get(u);x&&e.remove(x),s.set(u,f)}function h(u){let d=s.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function mt(r,e,t,n){let i=n.isWebGL2,s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,m){r.drawElements(s,m,a,d*l),t.update(m,s,1)}function u(d,m,g){if(g===0)return;let p,f;if(i)p=r,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,a,d*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function gt(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function xt(r,e){return r[0]-e[0]}function _t(r,e){return Math.abs(e[1])-Math.abs(r[1])}function q6(r,e){let t=1,n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function vt(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,o=new V0,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,d){let m=c.morphTargetInfluences;if(e.isWebGL2===!0){let g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0,f=s.get(h);if(f===void 0||f.count!==p){let W=function(){n0.dispose(),s.delete(h),h.removeEventListener("dispose",W)};f!==void 0&&f.texture.dispose();let C=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],y=h.morphAttributes.color||[],T=0;C===!0&&(T=1),b===!0&&(T=2),S===!0&&(T=3);let F=h.attributes.position.count*T,N=1;F>e.maxTextureSize&&(N=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);let J=new Float32Array(F*N*4*p),n0=new m6(J,F,N,p);n0.type=a2,n0.needsUpdate=!0;let R=T*4;for(let U=0;U<p;U++){let q=E[U],X=I[U],O=y[U],k=F*N*4*U;for(let K=0;K<q.count;K++){let Y=K*R;C===!0&&(o.fromBufferAttribute(q,K),q.normalized===!0&&q6(o,q),J[k+Y+0]=o.x,J[k+Y+1]=o.y,J[k+Y+2]=o.z,J[k+Y+3]=0),b===!0&&(o.fromBufferAttribute(X,K),X.normalized===!0&&q6(o,X),J[k+Y+4]=o.x,J[k+Y+5]=o.y,J[k+Y+6]=o.z,J[k+Y+7]=0),S===!0&&(o.fromBufferAttribute(O,K),O.normalized===!0&&q6(o,O),J[k+Y+8]=o.x,J[k+Y+9]=o.y,J[k+Y+10]=o.z,J[k+Y+11]=O.itemSize===4?o.w:1)}}f={count:p,texture:n0,size:new R0(F,N)},s.set(h,f),h.addEventListener("dispose",W)}let x=0;for(let C=0;C<m.length;C++)x+=m[C];let w=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",w),d.getUniforms().setValue(r,"morphTargetInfluences",m),d.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{let g=m===void 0?0:m.length,p=n[h.id];if(p===void 0||p.length!==g){p=[];for(let b=0;b<g;b++)p[b]=[b,0];n[h.id]=p}for(let b=0;b<g;b++){let S=p[b];S[0]=b,S[1]=m[b]}p.sort(_t);for(let b=0;b<8;b++)b<g&&p[b][1]?(a[b][0]=p[b][0],a[b][1]=p[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(xt);let f=h.morphAttributes.position,x=h.morphAttributes.normal,w=0;for(let b=0;b<8;b++){let S=a[b],E=S[0],I=S[1];E!==Number.MAX_SAFE_INTEGER&&I?(f&&h.getAttribute("morphTarget"+b)!==f[E]&&h.setAttribute("morphTarget"+b,f[E]),x&&h.getAttribute("morphNormal"+b)!==x[E]&&h.setAttribute("morphNormal"+b,x[E]),i[b]=I,w+=I):(f&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),x&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),i[b]=0)}let C=h.morphTargetsRelative?1:1-w;d.getUniforms().setValue(r,"morphTargetBaseInfluence",C),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function yt(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var f5=new l1,p5=new m6,m5=new W4,g5=new O6,x5=[],_5=[],v5=new Float32Array(16),y5=new Float32Array(9),M5=new Float32Array(4);function q2(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=x5[i];if(s===void 0&&(s=new Float32Array(i),x5[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function j0(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Q0(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function U3(r,e){let t=_5[e];t===void 0&&(t=new Int32Array(e),_5[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Mt(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function bt(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(j0(t,e))return;r.uniform2fv(this.addr,e),Q0(t,e)}}function wt(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(j0(t,e))return;r.uniform3fv(this.addr,e),Q0(t,e)}}function St(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(j0(t,e))return;r.uniform4fv(this.addr,e),Q0(t,e)}}function At(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(j0(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Q0(t,e)}else{if(j0(t,n))return;M5.set(n),r.uniformMatrix2fv(this.addr,!1,M5),Q0(t,n)}}function Tt(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(j0(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Q0(t,e)}else{if(j0(t,n))return;y5.set(n),r.uniformMatrix3fv(this.addr,!1,y5),Q0(t,n)}}function Et(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(j0(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Q0(t,e)}else{if(j0(t,n))return;v5.set(n),r.uniformMatrix4fv(this.addr,!1,v5),Q0(t,n)}}function Ct(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Pt(r,e){let t=this.cache;j0(t,e)||(r.uniform2iv(this.addr,e),Q0(t,e))}function Lt(r,e){let t=this.cache;j0(t,e)||(r.uniform3iv(this.addr,e),Q0(t,e))}function It(r,e){let t=this.cache;j0(t,e)||(r.uniform4iv(this.addr,e),Q0(t,e))}function Rt(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Dt(r,e){let t=this.cache;j0(t,e)||(r.uniform2uiv(this.addr,e),Q0(t,e))}function Ft(r,e){let t=this.cache;j0(t,e)||(r.uniform3uiv(this.addr,e),Q0(t,e))}function Nt(r,e){let t=this.cache;j0(t,e)||(r.uniform4uiv(this.addr,e),Q0(t,e))}function zt(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||f5,i)}function Bt(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||m5,i)}function Ot(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||g5,i)}function Ut(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||p5,i)}function kt(r){switch(r){case 5126:return Mt;case 35664:return bt;case 35665:return wt;case 35666:return St;case 35674:return At;case 35675:return Tt;case 35676:return Et;case 5124:case 35670:return Ct;case 35667:case 35671:return Pt;case 35668:case 35672:return Lt;case 35669:case 35673:return It;case 5125:return Rt;case 36294:return Dt;case 36295:return Ft;case 36296:return Nt;case 35678:case 36198:case 36298:case 36306:case 35682:return zt;case 35679:case 36299:case 36307:return Bt;case 35680:case 36300:case 36308:case 36293:return Ot;case 36289:case 36303:case 36311:case 36292:return Ut}}function Vt(r,e){r.uniform1fv(this.addr,e)}function Gt(r,e){let t=q2(e,this.size,2);r.uniform2fv(this.addr,t)}function Ht(r,e){let t=q2(e,this.size,3);r.uniform3fv(this.addr,t)}function Wt(r,e){let t=q2(e,this.size,4);r.uniform4fv(this.addr,t)}function qt(r,e){let t=q2(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Xt(r,e){let t=q2(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Yt(r,e){let t=q2(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Zt(r,e){r.uniform1iv(this.addr,e)}function Jt(r,e){r.uniform2iv(this.addr,e)}function $t(r,e){r.uniform3iv(this.addr,e)}function Kt(r,e){r.uniform4iv(this.addr,e)}function jt(r,e){r.uniform1uiv(this.addr,e)}function Qt(r,e){r.uniform2uiv(this.addr,e)}function en(r,e){r.uniform3uiv(this.addr,e)}function tn(r,e){r.uniform4uiv(this.addr,e)}function nn(r,e,t){let n=e.length,i=U3(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||f5,i[s])}function sn(r,e,t){let n=e.length,i=U3(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||m5,i[s])}function rn(r,e,t){let n=e.length,i=U3(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||g5,i[s])}function an(r,e,t){let n=e.length,i=U3(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||p5,i[s])}function on(r){switch(r){case 5126:return Vt;case 35664:return Gt;case 35665:return Ht;case 35666:return Wt;case 35674:return qt;case 35675:return Xt;case 35676:return Yt;case 5124:case 35670:return Zt;case 35667:case 35671:return Jt;case 35668:case 35672:return $t;case 35669:case 35673:return Kt;case 5125:return jt;case 36294:return Qt;case 36295:return en;case 36296:return tn;case 35678:case 36198:case 36298:case 36306:case 35682:return nn;case 35679:case 36299:case 36307:return sn;case 35680:case 36300:case 36308:case 36293:return rn;case 36289:case 36303:case 36311:case 36292:return an}}var b5=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=kt(t.type)}},w5=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=on(t.type)}},S5=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},X6=/(\w+)(\])?(\[|\.)?/g;function A5(r,e){r.seq.push(e),r.map[e.id]=e}function ln(r,e,t){let n=r.name,i=n.length;for(X6.lastIndex=0;;){let s=X6.exec(n),o=X6.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){A5(t,c===void 0?new b5(a,r,e):new w5(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new S5(a),A5(t,u)),t=u}}}var a3=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);ln(s,o,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function T5(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var cn=0;function hn(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function un(r){switch(r){case l2:return["Linear","( value )"];case B0:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function E5(r,e,t){let n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+hn(r.getShaderSource(e),o)}else return i}function dn(r,e){let t=un(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function fn(r,e){let t;switch(e){case U7:t="Linear";break;case k7:t="Reinhard";break;case V7:t="OptimizedCineon";break;case G7:t="ACESFilmic";break;case H7:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pn(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(o3).join(`
`)}function mn(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gn(r,e){let t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function o3(r){return r!==""}function C5(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function P5(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xn=/^[ \t]*#include +<([\w\d./]+)>/gm;function Y6(r){return r.replace(xn,_n)}function _n(r,e){let t=b0[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Y6(t)}var vn=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,yn=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function I5(r){return r.replace(yn,L5).replace(vn,Mn)}function Mn(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),L5(r,e,t,n)}function L5(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function R5(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bn(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===n4?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===g7?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Q2&&(e="SHADOWMAP_TYPE_VSM"),e}function wn(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case b2:case w2:e="ENVMAP_TYPE_CUBE";break;case u3:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sn(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case w2:e="ENVMAP_MODE_REFRACTION";break}return e}function An(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case J3:e="ENVMAP_BLENDING_MULTIPLY";break;case B7:e="ENVMAP_BLENDING_MIX";break;case O7:e="ENVMAP_BLENDING_ADD";break}return e}function Tn(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function En(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=bn(t),c=wn(t),h=Sn(t),u=An(t),d=Tn(t),m=t.isWebGL2?"":pn(t),g=mn(s),p=i.createProgram(),f,x,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(o3).join(`
`),f.length>0&&(f+=`
`),x=[m,g].filter(o3).join(`
`),x.length>0&&(x+=`
`)):(f=[R5(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(o3).join(`
`),x=[m,R5(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==F1?"#define TONE_MAPPING":"",t.toneMapping!==F1?b0.tonemapping_pars_fragment:"",t.toneMapping!==F1?fn("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",b0.encodings_pars_fragment,dn("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(o3).join(`
`)),o=Y6(o),o=C5(o,t),o=P5(o,t),a=Y6(a),a=C5(a,t),a=P5(a,t),o=I5(o),a=I5(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["#define varying in",t.glslVersion===U4?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===U4?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let C=w+f+o,b=w+x+a,S=T5(i,35633,C),E=T5(i,35632,b);if(i.attachShader(p,S),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){let T=i.getProgramInfoLog(p).trim(),F=i.getShaderInfoLog(S).trim(),N=i.getShaderInfoLog(E).trim(),J=!0,n0=!0;if(i.getProgramParameter(p,35714)===!1){J=!1;let R=E5(i,S,"vertex"),W=E5(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+R+`
`+W)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(F===""||N==="")&&(n0=!1);n0&&(this.diagnostics={runnable:J,programLog:T,vertexShader:{log:F,prefix:f},fragmentShader:{log:N,prefix:x}})}i.deleteShader(S),i.deleteShader(E);let I;this.getUniforms=function(){return I===void 0&&(I=new a3(i,p)),I};let y;return this.getAttributes=function(){return y===void 0&&(y=gn(i,p)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=cn++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=E,this}var Cn=0,D5=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){let t=this.shaderCache;if(t.has(e)===!1){let n=new F5(e);t.set(e,n)}return t.get(e)}},F5=class{constructor(e){this.id=Cn++,this.code=e,this.usedTimes=0}};function Pn(r,e,t,n,i,s,o){let a=new w6,l=new D5,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,m=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,T,F,N,J){let n0=N.fog,R=J.geometry,W=y.isMeshStandardMaterial?N.environment:null,U=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),q=!!U&&U.mapping===u3?U.image.height:null,X=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let O=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,k=O!==void 0?O.length:0,K=0;R.morphAttributes.position!==void 0&&(K=1),R.morphAttributes.normal!==void 0&&(K=2),R.morphAttributes.color!==void 0&&(K=3);let Y,i0,c0,u0;if(X){let F0=P1[X];Y=F0.vertexShader,i0=F0.fragmentShader}else Y=y.vertexShader,i0=y.fragmentShader,l.update(y),c0=l.getVertexShaderID(y),u0=l.getFragmentShaderID(y);let G=r.getRenderTarget(),H0=y.alphaTest>0,w0=y.clearcoat>0,v0=y.iridescence>0;return{isWebGL2:h,shaderID:X,shaderName:y.type,vertexShader:Y,fragmentShader:i0,defines:y.defines,customVertexShaderID:c0,customFragmentShaderID:u0,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:d,outputEncoding:G===null?r.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:l2,map:!!y.map,matcap:!!y.matcap,envMap:!!U,envMapMode:U&&U.mapping,envMapCubeUVHeight:q,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===c8,tangentSpaceNormalMap:y.normalMapType===B4,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===B0,clearcoat:w0,clearcoatMap:w0&&!!y.clearcoatMap,clearcoatRoughnessMap:w0&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:w0&&!!y.clearcoatNormalMap,iridescence:v0,iridescenceMap:v0&&!!y.iridescenceMap,iridescenceThicknessMap:v0&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===q1,alphaMap:!!y.alphaMap,alphaTest:H0,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!R.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!n0,useFog:y.fog===!0,fogExp2:n0&&n0.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:K,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:y.toneMapped?r.toneMapping:F1,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===D1,flipSided:y.side===d1,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let F in y.defines)T.push(F),T.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(x(T,y),w(T,y),T.push(r.outputEncoding)),T.push(y.customProgramCacheKey),T.join()}function x(y,T){y.push(T.precision),y.push(T.outputEncoding),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.combine),y.push(T.vertexUvs),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function w(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),T.fog&&a.enable(33),y.push(a.mask),a.disableAll(),T.useFog&&a.enable(0),T.flatShading&&a.enable(1),T.logarithmicDepthBuffer&&a.enable(2),T.skinning&&a.enable(3),T.morphTargets&&a.enable(4),T.morphNormals&&a.enable(5),T.morphColors&&a.enable(6),T.premultipliedAlpha&&a.enable(7),T.shadowMapEnabled&&a.enable(8),T.physicallyCorrectLights&&a.enable(9),T.doubleSided&&a.enable(10),T.flipSided&&a.enable(11),T.useDepthPacking&&a.enable(12),T.dithering&&a.enable(13),T.specularIntensityMap&&a.enable(14),T.specularColorMap&&a.enable(15),T.transmission&&a.enable(16),T.transmissionMap&&a.enable(17),T.thicknessMap&&a.enable(18),T.sheen&&a.enable(19),T.sheenColorMap&&a.enable(20),T.sheenRoughnessMap&&a.enable(21),T.decodeVideoTexture&&a.enable(22),T.opaque&&a.enable(23),y.push(a.mask)}function C(y){let T=g[y.type],F;if(T){let N=P1[T];F=w8.clone(N.uniforms)}else F=y.uniforms;return F}function b(y,T){let F;for(let N=0,J=c.length;N<J;N++){let n0=c[N];if(n0.cacheKey===T){F=n0,++F.usedTimes;break}}return F===void 0&&(F=new En(r,T,y,s),c.push(F)),F}function S(y){if(--y.usedTimes==0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function E(y){l.remove(y)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:C,acquireProgram:b,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:I}}function Ln(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function In(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function N5(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function z5(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,m,g,p,f){let x=r[e];return x===void 0?(x={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:p,group:f},r[e]=x):(x.id=u.id,x.object=u,x.geometry=d,x.material=m,x.groupOrder=g,x.renderOrder=u.renderOrder,x.z=p,x.group=f),e++,x}function a(u,d,m,g,p,f){let x=o(u,d,m,g,p,f);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):t.push(x)}function l(u,d,m,g,p,f){let x=o(u,d,m,g,p,f);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function c(u,d){t.length>1&&t.sort(u||In),n.length>1&&n.sort(d||N5),i.length>1&&i.sort(d||N5)}function h(){for(let u=e,d=r.length;u<d;u++){let m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Rn(){let r=new WeakMap;function e(n,i){let s;return r.has(n)===!1?(s=new z5,r.set(n,[s])):i>=r.get(n).length?(s=new z5,r.get(n).push(s)):s=r.get(n)[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function Dn(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new C0};break;case"SpotLight":t={position:new L,direction:new L,color:new C0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new C0,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new C0,groundColor:new C0};break;case"RectAreaLight":t={color:new C0,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function Fn(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R0};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R0};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R0,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var Nn=0;function zn(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function Bn(r,e){let t=new Dn,n=Fn(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new L);let s=new L,o=new W0,a=new W0;function l(h,u){let d=0,m=0,g=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,f=0,x=0,w=0,C=0,b=0,S=0,E=0;h.sort(zn);let I=u!==!0?Math.PI:1;for(let T=0,F=h.length;T<F;T++){let N=h[T],J=N.color,n0=N.intensity,R=N.distance,W=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=J.r*n0*I,m+=J.g*n0*I,g+=J.b*n0*I;else if(N.isLightProbe)for(let U=0;U<9;U++)i.probe[U].addScaledVector(N.sh.coefficients[U],n0);else if(N.isDirectionalLight){let U=t.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity*I),N.castShadow){let q=N.shadow,X=n.get(N);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=N.shadow.matrix,b++}i.directional[p]=U,p++}else if(N.isSpotLight){let U=t.get(N);if(U.position.setFromMatrixPosition(N.matrixWorld),U.color.copy(J).multiplyScalar(n0*I),U.distance=R,U.coneCos=Math.cos(N.angle),U.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),U.decay=N.decay,N.castShadow){let q=N.shadow,X=n.get(N);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=W,i.spotShadowMatrix[x]=N.shadow.matrix,E++}i.spot[x]=U,x++}else if(N.isRectAreaLight){let U=t.get(N);U.color.copy(J).multiplyScalar(n0),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),i.rectArea[w]=U,w++}else if(N.isPointLight){let U=t.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity*I),U.distance=N.distance,U.decay=N.decay,N.castShadow){let q=N.shadow,X=n.get(N);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,i.pointShadow[f]=X,i.pointShadowMap[f]=W,i.pointShadowMatrix[f]=N.shadow.matrix,S++}i.point[f]=U,f++}else if(N.isHemisphereLight){let U=t.get(N);U.skyColor.copy(N.color).multiplyScalar(n0*I),U.groundColor.copy(N.groundColor).multiplyScalar(n0*I),i.hemi[C]=U,C++}}w>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=t0.LTC_FLOAT_1,i.rectAreaLTC2=t0.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=t0.LTC_HALF_1,i.rectAreaLTC2=t0.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;let y=i.hash;(y.directionalLength!==p||y.pointLength!==f||y.spotLength!==x||y.rectAreaLength!==w||y.hemiLength!==C||y.numDirectionalShadows!==b||y.numPointShadows!==S||y.numSpotShadows!==E)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=w,i.point.length=f,i.hemi.length=C,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotShadowMatrix.length=E,y.directionalLength=p,y.pointLength=f,y.spotLength=x,y.rectAreaLength=w,y.hemiLength=C,y.numDirectionalShadows=b,y.numPointShadows=S,y.numSpotShadows=E,i.version=Nn++)}function c(h,u){let d=0,m=0,g=0,p=0,f=0,x=u.matrixWorldInverse;for(let w=0,C=h.length;w<C;w++){let b=h[w];if(b.isDirectionalLight){let S=i.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),d++}else if(b.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),g++}else if(b.isRectAreaLight){let S=i.rectArea[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(x),a.identity(),o.copy(b.matrixWorld),o.premultiply(x),a.extractRotation(o),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){let S=i.point[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(x),m++}else if(b.isHemisphereLight){let S=i.hemi[f];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(x),f++}}}return{setup:l,setupView:c,state:i}}function B5(r,e){let t=new Bn(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function On(r,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new B5(r,e),t.set(s,[a])):o>=t.get(s).length?(a=new B5(r,e),t.get(s).push(a)):a=t.get(s)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}var O5=class extends m2{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=o8,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},U5=class extends m2{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Un=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kn=`uniform sampler2D shadow_pass;
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
}`;function Vn(r,e,t){let n=new k6,i=new R0,s=new R0,o=new V0,a=new O5({depthPacking:l8}),l=new U5,c={},h=t.maxTextureSize,u={0:d1,1:e3,2:D1},d=new v1({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new R0},radius:{value:4}},vertexShader:Un,fragmentShader:kn}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new G1;g.setAttribute("position",new c1(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new C1(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n4,this.render=function(b,S,E){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;let I=r.getRenderTarget(),y=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),F=r.state;F.setBlending(W1),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let N=0,J=b.length;N<J;N++){let n0=b[N],R=n0.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",n0,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);let W=R.getFrameExtents();if(i.multiply(W),s.copy(R.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/W.x),i.x=s.x*W.x,R.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/W.y),i.y=s.y*W.y,R.mapSize.y=s.y)),R.map===null){let q=this.type!==Q2?{minFilter:t1,magFilter:t1}:{};R.map=new X1(i.x,i.y,q),R.map.texture.name=n0.name+".shadowMap",R.camera.updateProjectionMatrix()}r.setRenderTarget(R.map),r.clear();let U=R.getViewportCount();for(let q=0;q<U;q++){let X=R.getViewport(q);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),F.viewport(o),R.updateMatrices(n0,q),n=R.getFrustum(),C(S,E,R.camera,n0,this.type)}R.isPointLightShadow!==!0&&this.type===Q2&&x(R,E),R.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(I,y,T)};function x(b,S){let E=e.update(p);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new X1(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(S,null,E,d,p,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(S,null,E,m,p,null)}function w(b,S,E,I,y,T){let F=null,N=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0?F=N:F=E.isPointLight===!0?l:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){let J=F.uuid,n0=S.uuid,R=c[J];R===void 0&&(R={},c[J]=R);let W=R[n0];W===void 0&&(W=F.clone(),R[n0]=W),F=W}return F.visible=S.visible,F.wireframe=S.wireframe,T===Q2?F.side=S.shadowSide!==null?S.shadowSide:S.side:F.side=S.shadowSide!==null?S.shadowSide:u[S.side],F.alphaMap=S.alphaMap,F.alphaTest=S.alphaTest,F.clipShadows=S.clipShadows,F.clippingPlanes=S.clippingPlanes,F.clipIntersection=S.clipIntersection,F.displacementMap=S.displacementMap,F.displacementScale=S.displacementScale,F.displacementBias=S.displacementBias,F.wireframeLinewidth=S.wireframeLinewidth,F.linewidth=S.linewidth,E.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(E.matrixWorld),F.nearDistance=I,F.farDistance=y),F}function C(b,S,E,I,y){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Q2)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);let N=e.update(b),J=b.material;if(Array.isArray(J)){let n0=N.groups;for(let R=0,W=n0.length;R<W;R++){let U=n0[R],q=J[U.materialIndex];if(q&&q.visible){let X=w(b,q,I,E.near,E.far,y);r.renderBufferDirect(E,null,N,X,b,U)}}}else if(J.visible){let n0=w(b,J,I,E.near,E.far,y);r.renderBufferDirect(E,null,N,n0,b,null)}}let F=b.children;for(let N=0,J=F.length;N<J;N++)C(F[N],S,E,I,y)}}function Gn(r,e,t){let n=t.isWebGL2;function i(){let A=!1,e0=new V0,Q=null,d0=new V0(0,0,0,0);return{setMask:function(o0){Q!==o0&&!A&&(r.colorMask(o0,o0,o0,o0),Q=o0)},setLocked:function(o0){A=o0},setClear:function(o0,m0,$,g0,P0){P0===!0&&(o0*=g0,m0*=g0,$*=g0),e0.set(o0,m0,$,g0),d0.equals(e0)===!1&&(r.clearColor(o0,m0,$,g0),d0.copy(e0))},reset:function(){A=!1,Q=null,d0.set(-1,0,0,0)}}}function s(){let A=!1,e0=null,Q=null,d0=null;return{setTest:function(o0){o0?u0(2929):G(2929)},setMask:function(o0){e0!==o0&&!A&&(r.depthMask(o0),e0=o0)},setFunc:function(o0){if(Q!==o0){if(o0)switch(o0){case L7:r.depthFunc(512);break;case I7:r.depthFunc(519);break;case R7:r.depthFunc(513);break;case Z3:r.depthFunc(515);break;case D7:r.depthFunc(514);break;case F7:r.depthFunc(518);break;case N7:r.depthFunc(516);break;case z7:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);Q=o0}},setLocked:function(o0){A=o0},setClear:function(o0){d0!==o0&&(r.clearDepth(o0),d0=o0)},reset:function(){A=!1,e0=null,Q=null,d0=null}}}function o(){let A=!1,e0=null,Q=null,d0=null,o0=null,m0=null,$=null,g0=null,P0=null;return{setTest:function(L0){A||(L0?u0(2960):G(2960))},setMask:function(L0){e0!==L0&&!A&&(r.stencilMask(L0),e0=L0)},setFunc:function(L0,$0,b1){(Q!==L0||d0!==$0||o0!==b1)&&(r.stencilFunc(L0,$0,b1),Q=L0,d0=$0,o0=b1)},setOp:function(L0,$0,b1){(m0!==L0||$!==$0||g0!==b1)&&(r.stencilOp(L0,$0,b1),m0=L0,$=$0,g0=b1)},setLocked:function(L0){A=L0},setClear:function(L0){P0!==L0&&(r.clearStencil(L0),P0=L0)},reset:function(){A=!1,e0=null,Q=null,d0=null,o0=null,m0=null,$=null,g0=null,P0=null}}}let a=new i,l=new s,c=new o,h={},u={},d=new WeakMap,m=[],g=null,p=!1,f=null,x=null,w=null,C=null,b=null,S=null,E=null,I=!1,y=null,T=null,F=null,N=null,J=null,n0=r.getParameter(35661),R=!1,W=0,U=r.getParameter(7938);U.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(U)[1]),R=W>=1):U.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),R=W>=2);let q=null,X={},O=r.getParameter(3088),k=r.getParameter(2978),K=new V0().fromArray(O),Y=new V0().fromArray(k);function i0(A,e0,Q){let d0=new Uint8Array(4),o0=r.createTexture();r.bindTexture(A,o0),r.texParameteri(A,10241,9728),r.texParameteri(A,10240,9728);for(let m0=0;m0<Q;m0++)r.texImage2D(e0+m0,0,6408,1,1,0,6408,5121,d0);return o0}let c0={};c0[3553]=i0(3553,3553,1),c0[34067]=i0(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),u0(2929),l.setFunc(Z3),Y0(!1),e1(t4),u0(2884),S0(W1);function u0(A){h[A]!==!0&&(r.enable(A),h[A]=!0)}function G(A){h[A]!==!1&&(r.disable(A),h[A]=!1)}function H0(A,e0){return u[A]!==e0?(r.bindFramebuffer(A,e0),u[A]=e0,n&&(A===36009&&(u[36160]=e0),A===36160&&(u[36009]=e0)),!0):!1}function w0(A,e0){let Q=m,d0=!1;if(A)if(Q=d.get(e0),Q===void 0&&(Q=[],d.set(e0,Q)),A.isWebGLMultipleRenderTargets){let o0=A.texture;if(Q.length!==o0.length||Q[0]!==36064){for(let m0=0,$=o0.length;m0<$;m0++)Q[m0]=36064+m0;Q.length=o0.length,d0=!0}}else Q[0]!==36064&&(Q[0]=36064,d0=!0);else Q[0]!==1029&&(Q[0]=1029,d0=!0);d0&&(t.isWebGL2?r.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function v0(A){return g!==A?(r.useProgram(A),g=A,!0):!1}let r0={[M2]:32774,[v7]:32778,[y7]:32779};if(n)r0[r4]=32775,r0[a4]=32776;else{let A=e.get("EXT_blend_minmax");A!==null&&(r0[r4]=A.MIN_EXT,r0[a4]=A.MAX_EXT)}let F0={[M7]:0,[b7]:1,[w7]:768,[o4]:770,[P7]:776,[E7]:774,[A7]:772,[S7]:769,[l4]:771,[C7]:775,[T7]:773};function S0(A,e0,Q,d0,o0,m0,$,g0){if(A===W1){p===!0&&(G(3042),p=!1);return}if(p===!1&&(u0(3042),p=!0),A!==_7){if(A!==f||g0!==I){if((x!==M2||b!==M2)&&(r.blendEquation(32774),x=M2,b=M2),g0)switch(A){case q1:r.blendFuncSeparate(1,771,1,771);break;case i2:r.blendFunc(1,1);break;case i4:r.blendFuncSeparate(0,769,0,1);break;case s4:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case q1:r.blendFuncSeparate(770,771,1,771);break;case i2:r.blendFunc(770,1);break;case i4:r.blendFuncSeparate(0,769,0,1);break;case s4:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}w=null,C=null,S=null,E=null,f=A,I=g0}return}o0=o0||e0,m0=m0||Q,$=$||d0,(e0!==x||o0!==b)&&(r.blendEquationSeparate(r0[e0],r0[o0]),x=e0,b=o0),(Q!==w||d0!==C||m0!==S||$!==E)&&(r.blendFuncSeparate(F0[Q],F0[d0],F0[m0],F0[$]),w=Q,C=d0,S=m0,E=$),f=A,I=null}function f0(A,e0){A.side===D1?G(2884):u0(2884);let Q=A.side===d1;e0&&(Q=!Q),Y0(Q),A.blending===q1&&A.transparent===!1?S0(W1):S0(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),a.setMask(A.colorWrite);let d0=A.stencilWrite;c.setTest(d0),d0&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),M1(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?u0(32926):G(32926)}function Y0(A){y!==A&&(A?r.frontFace(2304):r.frontFace(2305),y=A)}function e1(A){A!==p7?(u0(2884),A!==T&&(A===t4?r.cullFace(1029):A===m7?r.cullFace(1028):r.cullFace(1032))):G(2884),T=A}function n1(A){A!==F&&(R&&r.lineWidth(A),F=A)}function M1(A,e0,Q){A?(u0(32823),(N!==e0||J!==Q)&&(r.polygonOffset(e0,Q),N=e0,J=Q)):G(32823)}function X0(A){A?u0(3089):G(3089)}function N0(A){A===void 0&&(A=33984+n0-1),q!==A&&(r.activeTexture(A),q=A)}function I1(A,e0){q===null&&N0();let Q=X[q];Q===void 0&&(Q={type:void 0,texture:void 0},X[q]=Q),(Q.type!==A||Q.texture!==e0)&&(r.bindTexture(A,e0||c0[A]),Q.type=A,Q.texture=e0)}function R1(){let A=X[q];A!==void 0&&A.type!==void 0&&(r.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function M(){try{r.compressedTexImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function _(){try{r.texSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function V(){try{r.texSubImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function j(){try{r.texStorage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function s0(){try{r.texStorage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function x0(){try{r.texImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function B(){try{r.texImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function h0(A){K.equals(A)===!1&&(r.scissor(A.x,A.y,A.z,A.w),K.copy(A))}function l0(A){Y.equals(A)===!1&&(r.viewport(A.x,A.y,A.z,A.w),Y.copy(A))}function a0(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},q=null,X={},u={},d=new WeakMap,m=[],g=null,p=!1,f=null,x=null,w=null,C=null,b=null,S=null,E=null,I=!1,y=null,T=null,F=null,N=null,J=null,K.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:u0,disable:G,bindFramebuffer:H0,drawBuffers:w0,useProgram:v0,setBlending:S0,setMaterial:f0,setFlipSided:Y0,setCullFace:e1,setLineWidth:n1,setPolygonOffset:M1,setScissorTest:X0,activeTexture:N0,bindTexture:I1,unbindTexture:R1,compressedTexImage2D:M,texImage2D:x0,texImage3D:B,texStorage2D:j,texStorage3D:s0,texSubImage2D:_,texSubImage3D:V,compressedTexSubImage2D:Z,scissor:h0,viewport:l0,reset:a0}}function Hn(r,e,t,n,i,s,o){let a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,p,f=new WeakMap,x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function w(M,_){return x?new OffscreenCanvas(M,_):m3("canvas")}function C(M,_,V,Z){let j=1;if((M.width>Z||M.height>Z)&&(j=Z/Math.max(M.width,M.height)),j<1||_===!0)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap){let s0=_?c6:Math.floor,x0=s0(j*M.width),B=s0(j*M.height);p===void 0&&(p=w(x0,B));let h0=V?w(x0,B):p;return h0.width=x0,h0.height=B,h0.getContext("2d").drawImage(M,0,0,x0,B),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+x0+"x"+B+")."),h0}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function b(M){return V4(M.width)&&V4(M.height)}function S(M){return a?!1:M.wrapS!==f1||M.wrapT!==f1||M.minFilter!==t1&&M.minFilter!==o1}function E(M,_){return M.generateMipmaps&&_&&M.minFilter!==t1&&M.minFilter!==o1}function I(M){r.generateMipmap(M)}function y(M,_,V,Z,j=!1){if(a===!1)return _;if(M!==null){if(r[M]!==void 0)return r[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let s0=_;return _===6403&&(V===5126&&(s0=33326),V===5131&&(s0=33325),V===5121&&(s0=33321)),_===33319&&(V===5126&&(s0=33328),V===5131&&(s0=33327),V===5121&&(s0=33323)),_===6408&&(V===5126&&(s0=34836),V===5131&&(s0=34842),V===5121&&(s0=Z===B0&&j===!1?35907:32856),V===32819&&(s0=32854),V===32820&&(s0=32855)),(s0===33325||s0===33326||s0===33327||s0===33328||s0===34842||s0===34836)&&e.get("EXT_color_buffer_float"),s0}function T(M,_,V){return E(M,V)===!0||M.isFramebufferTexture&&M.minFilter!==t1&&M.minFilter!==o1?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function F(M){return M===t1||M===h4||M===u4?9728:9729}function N(M){let _=M.target;_.removeEventListener("dispose",N),n0(_),_.isVideoTexture&&g.delete(_)}function J(M){let _=M.target;_.removeEventListener("dispose",J),W(_)}function n0(M){let _=n.get(M);if(_.__webglInit===void 0)return;let V=M.source,Z=f.get(V);if(Z){let j=Z[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(M),Object.keys(Z).length===0&&f.delete(V)}n.remove(M)}function R(M){let _=n.get(M);r.deleteTexture(_.__webglTexture);let V=M.source,Z=f.get(V);delete Z[_.__cacheKey],o.memory.textures--}function W(M){let _=M.texture,V=n.get(M),Z=n.get(_);if(Z.__webglTexture!==void 0&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let j=0;j<6;j++)r.deleteFramebuffer(V.__webglFramebuffer[j]),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[j]);else{if(r.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let j=0;j<V.__webglColorRenderbuffer.length;j++)V.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[j]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let j=0,s0=_.length;j<s0;j++){let x0=n.get(_[j]);x0.__webglTexture&&(r.deleteTexture(x0.__webglTexture),o.memory.textures--),n.remove(_[j])}n.remove(_),n.remove(M)}let U=0;function q(){U=0}function X(){let M=U;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),U+=1,M}function O(M){let _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.encoding),_.join()}function k(M,_){let V=n.get(M);if(M.isVideoTexture&&I1(M),M.isRenderTargetTexture===!1&&M.version>0&&V.__version!==M.version){let Z=M.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{w0(V,M,_);return}}t.activeTexture(33984+_),t.bindTexture(3553,V.__webglTexture)}function K(M,_){let V=n.get(M);if(M.version>0&&V.__version!==M.version){w0(V,M,_);return}t.activeTexture(33984+_),t.bindTexture(35866,V.__webglTexture)}function Y(M,_){let V=n.get(M);if(M.version>0&&V.__version!==M.version){w0(V,M,_);return}t.activeTexture(33984+_),t.bindTexture(32879,V.__webglTexture)}function i0(M,_){let V=n.get(M);if(M.version>0&&V.__version!==M.version){v0(V,M,_);return}t.activeTexture(33984+_),t.bindTexture(34067,V.__webglTexture)}let c0={[j3]:10497,[f1]:33071,[Q3]:33648},u0={[t1]:9728,[h4]:9984,[u4]:9986,[o1]:9729,[W7]:9985,[d3]:9987};function G(M,_,V){if(V?(r.texParameteri(M,10242,c0[_.wrapS]),r.texParameteri(M,10243,c0[_.wrapT]),(M===32879||M===35866)&&r.texParameteri(M,32882,c0[_.wrapR]),r.texParameteri(M,10240,u0[_.magFilter]),r.texParameteri(M,10241,u0[_.minFilter])):(r.texParameteri(M,10242,33071),r.texParameteri(M,10243,33071),(M===32879||M===35866)&&r.texParameteri(M,32882,33071),(_.wrapS!==f1||_.wrapT!==f1)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(M,10240,F(_.magFilter)),r.texParameteri(M,10241,F(_.minFilter)),_.minFilter!==t1&&_.minFilter!==o1&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let Z=e.get("EXT_texture_filter_anisotropic");if(_.type===a2&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===t3&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(r.texParameterf(M,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function H0(M,_){let V=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",N));let Z=_.source,j=f.get(Z);j===void 0&&(j={},f.set(Z,j));let s0=O(_);if(s0!==M.__cacheKey){j[s0]===void 0&&(j[s0]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),j[s0].usedTimes++;let x0=j[M.__cacheKey];x0!==void 0&&(j[M.__cacheKey].usedTimes--,x0.usedTimes===0&&R(_)),M.__cacheKey=s0,M.__webglTexture=j[s0].texture}return V}function w0(M,_,V){let Z=3553;_.isDataArrayTexture&&(Z=35866),_.isData3DTexture&&(Z=32879);let j=H0(M,_),s0=_.source;if(t.activeTexture(33984+V),t.bindTexture(Z,M.__webglTexture),s0.version!==s0.__currentVersion||j===!0){r.pixelStorei(37440,_.flipY),r.pixelStorei(37441,_.premultiplyAlpha),r.pixelStorei(3317,_.unpackAlignment),r.pixelStorei(37443,0);let x0=S(_)&&b(_.image)===!1,B=C(_.image,x0,!1,h);B=R1(_,B);let h0=b(B)||a,l0=s.convert(_.format,_.encoding),a0=s.convert(_.type),A=y(_.internalFormat,l0,a0,_.encoding,_.isVideoTexture);G(Z,_,h0);let e0,Q=_.mipmaps,d0=a&&_.isVideoTexture!==!0,o0=s0.__currentVersion===void 0||j===!0,m0=T(_,B,h0);if(_.isDepthTexture)A=6402,a?_.type===a2?A=36012:_.type===r2?A=33190:_.type===S2?A=35056:A=33189:_.type===a2&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===o2&&A===6402&&_.type!==d4&&_.type!==r2&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=r2,a0=s.convert(_.type)),_.format===A2&&A===6402&&(A=34041,_.type!==S2&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=S2,a0=s.convert(_.type))),o0&&(d0?t.texStorage2D(3553,1,A,B.width,B.height):t.texImage2D(3553,0,A,B.width,B.height,0,l0,a0,null));else if(_.isDataTexture)if(Q.length>0&&h0){d0&&o0&&t.texStorage2D(3553,m0,A,Q[0].width,Q[0].height);for(let $=0,g0=Q.length;$<g0;$++)e0=Q[$],d0?t.texSubImage2D(3553,$,0,0,e0.width,e0.height,l0,a0,e0.data):t.texImage2D(3553,$,A,e0.width,e0.height,0,l0,a0,e0.data);_.generateMipmaps=!1}else d0?(o0&&t.texStorage2D(3553,m0,A,B.width,B.height),t.texSubImage2D(3553,0,0,0,B.width,B.height,l0,a0,B.data)):t.texImage2D(3553,0,A,B.width,B.height,0,l0,a0,B.data);else if(_.isCompressedTexture){d0&&o0&&t.texStorage2D(3553,m0,A,Q[0].width,Q[0].height);for(let $=0,g0=Q.length;$<g0;$++)e0=Q[$],_.format!==T1?l0!==null?d0?t.compressedTexSubImage2D(3553,$,0,0,e0.width,e0.height,l0,e0.data):t.compressedTexImage2D(3553,$,A,e0.width,e0.height,0,e0.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):d0?t.texSubImage2D(3553,$,0,0,e0.width,e0.height,l0,a0,e0.data):t.texImage2D(3553,$,A,e0.width,e0.height,0,l0,a0,e0.data)}else if(_.isDataArrayTexture)d0?(o0&&t.texStorage3D(35866,m0,A,B.width,B.height,B.depth),t.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,l0,a0,B.data)):t.texImage3D(35866,0,A,B.width,B.height,B.depth,0,l0,a0,B.data);else if(_.isData3DTexture)d0?(o0&&t.texStorage3D(32879,m0,A,B.width,B.height,B.depth),t.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,l0,a0,B.data)):t.texImage3D(32879,0,A,B.width,B.height,B.depth,0,l0,a0,B.data);else if(_.isFramebufferTexture){if(o0)if(d0)t.texStorage2D(3553,m0,A,B.width,B.height);else{let $=B.width,g0=B.height;for(let P0=0;P0<m0;P0++)t.texImage2D(3553,P0,A,$,g0,0,l0,a0,null),$>>=1,g0>>=1}}else if(Q.length>0&&h0){d0&&o0&&t.texStorage2D(3553,m0,A,Q[0].width,Q[0].height);for(let $=0,g0=Q.length;$<g0;$++)e0=Q[$],d0?t.texSubImage2D(3553,$,0,0,l0,a0,e0):t.texImage2D(3553,$,A,l0,a0,e0);_.generateMipmaps=!1}else d0?(o0&&t.texStorage2D(3553,m0,A,B.width,B.height),t.texSubImage2D(3553,0,0,0,l0,a0,B)):t.texImage2D(3553,0,A,l0,a0,B);E(_,h0)&&I(Z),s0.__currentVersion=s0.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function v0(M,_,V){if(_.image.length!==6)return;let Z=H0(M,_),j=_.source;if(t.activeTexture(33984+V),t.bindTexture(34067,M.__webglTexture),j.version!==j.__currentVersion||Z===!0){r.pixelStorei(37440,_.flipY),r.pixelStorei(37441,_.premultiplyAlpha),r.pixelStorei(3317,_.unpackAlignment),r.pixelStorei(37443,0);let s0=_.isCompressedTexture||_.image[0].isCompressedTexture,x0=_.image[0]&&_.image[0].isDataTexture,B=[];for(let $=0;$<6;$++)!s0&&!x0?B[$]=C(_.image[$],!1,!0,c):B[$]=x0?_.image[$].image:_.image[$],B[$]=R1(_,B[$]);let h0=B[0],l0=b(h0)||a,a0=s.convert(_.format,_.encoding),A=s.convert(_.type),e0=y(_.internalFormat,a0,A,_.encoding),Q=a&&_.isVideoTexture!==!0,d0=j.__currentVersion===void 0||Z===!0,o0=T(_,h0,l0);G(34067,_,l0);let m0;if(s0){Q&&d0&&t.texStorage2D(34067,o0,e0,h0.width,h0.height);for(let $=0;$<6;$++){m0=B[$].mipmaps;for(let g0=0;g0<m0.length;g0++){let P0=m0[g0];_.format!==T1?a0!==null?Q?t.compressedTexSubImage2D(34069+$,g0,0,0,P0.width,P0.height,a0,P0.data):t.compressedTexImage2D(34069+$,g0,e0,P0.width,P0.height,0,P0.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?t.texSubImage2D(34069+$,g0,0,0,P0.width,P0.height,a0,A,P0.data):t.texImage2D(34069+$,g0,e0,P0.width,P0.height,0,a0,A,P0.data)}}}else{m0=_.mipmaps,Q&&d0&&(m0.length>0&&o0++,t.texStorage2D(34067,o0,e0,B[0].width,B[0].height));for(let $=0;$<6;$++)if(x0){Q?t.texSubImage2D(34069+$,0,0,0,B[$].width,B[$].height,a0,A,B[$].data):t.texImage2D(34069+$,0,e0,B[$].width,B[$].height,0,a0,A,B[$].data);for(let g0=0;g0<m0.length;g0++){let L0=m0[g0].image[$].image;Q?t.texSubImage2D(34069+$,g0+1,0,0,L0.width,L0.height,a0,A,L0.data):t.texImage2D(34069+$,g0+1,e0,L0.width,L0.height,0,a0,A,L0.data)}}else{Q?t.texSubImage2D(34069+$,0,0,0,a0,A,B[$]):t.texImage2D(34069+$,0,e0,a0,A,B[$]);for(let g0=0;g0<m0.length;g0++){let P0=m0[g0];Q?t.texSubImage2D(34069+$,g0+1,0,0,a0,A,P0.image[$]):t.texImage2D(34069+$,g0+1,e0,a0,A,P0.image[$])}}}E(_,l0)&&I(34067),j.__currentVersion=j.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function r0(M,_,V,Z,j){let s0=s.convert(V.format,V.encoding),x0=s.convert(V.type),B=y(V.internalFormat,s0,x0,V.encoding);n.get(_).__hasExternalTextures||(j===32879||j===35866?t.texImage3D(j,0,B,_.width,_.height,_.depth,0,s0,x0,null):t.texImage2D(j,0,B,_.width,_.height,0,s0,x0,null)),t.bindFramebuffer(36160,M),N0(_)?d.framebufferTexture2DMultisampleEXT(36160,Z,j,n.get(V).__webglTexture,0,X0(_)):r.framebufferTexture2D(36160,Z,j,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function F0(M,_,V){if(r.bindRenderbuffer(36161,M),_.depthBuffer&&!_.stencilBuffer){let Z=33189;if(V||N0(_)){let j=_.depthTexture;j&&j.isDepthTexture&&(j.type===a2?Z=36012:j.type===r2&&(Z=33190));let s0=X0(_);N0(_)?d.renderbufferStorageMultisampleEXT(36161,s0,Z,_.width,_.height):r.renderbufferStorageMultisample(36161,s0,Z,_.width,_.height)}else r.renderbufferStorage(36161,Z,_.width,_.height);r.framebufferRenderbuffer(36160,36096,36161,M)}else if(_.depthBuffer&&_.stencilBuffer){let Z=X0(_);V&&N0(_)===!1?r.renderbufferStorageMultisample(36161,Z,35056,_.width,_.height):N0(_)?d.renderbufferStorageMultisampleEXT(36161,Z,35056,_.width,_.height):r.renderbufferStorage(36161,34041,_.width,_.height),r.framebufferRenderbuffer(36160,33306,36161,M)}else{let Z=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let j=0;j<Z.length;j++){let s0=Z[j],x0=s.convert(s0.format,s0.encoding),B=s.convert(s0.type),h0=y(s0.internalFormat,x0,B,s0.encoding),l0=X0(_);V&&N0(_)===!1?r.renderbufferStorageMultisample(36161,l0,h0,_.width,_.height):N0(_)?d.renderbufferStorageMultisampleEXT(36161,l0,h0,_.width,_.height):r.renderbufferStorage(36161,h0,_.width,_.height)}}r.bindRenderbuffer(36161,null)}function S0(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k(_.depthTexture,0);let Z=n.get(_.depthTexture).__webglTexture,j=X0(_);if(_.depthTexture.format===o2)N0(_)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Z,0,j):r.framebufferTexture2D(36160,36096,3553,Z,0);else if(_.depthTexture.format===A2)N0(_)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Z,0,j):r.framebufferTexture2D(36160,33306,3553,Z,0);else throw new Error("Unknown depthTexture format")}function f0(M){let _=n.get(M),V=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");S0(_.__webglFramebuffer,M)}else if(V){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(36160,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]=r.createRenderbuffer(),F0(_.__webglDepthbuffer[Z],M,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=r.createRenderbuffer(),F0(_.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function Y0(M,_,V){let Z=n.get(M);_!==void 0&&r0(Z.__webglFramebuffer,M,M.texture,36064,3553),V!==void 0&&f0(M)}function e1(M){let _=M.texture,V=n.get(M),Z=n.get(_);M.addEventListener("dispose",J),M.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=_.version,o.memory.textures++);let j=M.isWebGLCubeRenderTarget===!0,s0=M.isWebGLMultipleRenderTargets===!0,x0=b(M)||a;if(j){V.__webglFramebuffer=[];for(let B=0;B<6;B++)V.__webglFramebuffer[B]=r.createFramebuffer()}else{if(V.__webglFramebuffer=r.createFramebuffer(),s0)if(i.drawBuffers){let B=M.texture;for(let h0=0,l0=B.length;h0<l0;h0++){let a0=n.get(B[h0]);a0.__webglTexture===void 0&&(a0.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&N0(M)===!1){let B=s0?_:[_];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let h0=0;h0<B.length;h0++){let l0=B[h0];V.__webglColorRenderbuffer[h0]=r.createRenderbuffer(),r.bindRenderbuffer(36161,V.__webglColorRenderbuffer[h0]);let a0=s.convert(l0.format,l0.encoding),A=s.convert(l0.type),e0=y(l0.internalFormat,a0,A,l0.encoding),Q=X0(M);r.renderbufferStorageMultisample(36161,Q,e0,M.width,M.height),r.framebufferRenderbuffer(36160,36064+h0,36161,V.__webglColorRenderbuffer[h0])}r.bindRenderbuffer(36161,null),M.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),F0(V.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}}if(j){t.bindTexture(34067,Z.__webglTexture),G(34067,_,x0);for(let B=0;B<6;B++)r0(V.__webglFramebuffer[B],M,_,36064,34069+B);E(_,x0)&&I(34067),t.unbindTexture()}else if(s0){let B=M.texture;for(let h0=0,l0=B.length;h0<l0;h0++){let a0=B[h0],A=n.get(a0);t.bindTexture(3553,A.__webglTexture),G(3553,a0,x0),r0(V.__webglFramebuffer,M,a0,36064+h0,3553),E(a0,x0)&&I(3553)}t.unbindTexture()}else{let B=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?B=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(B,Z.__webglTexture),G(B,_,x0),r0(V.__webglFramebuffer,M,_,36064,B),E(_,x0)&&I(B),t.unbindTexture()}M.depthBuffer&&f0(M)}function n1(M){let _=b(M)||a,V=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Z=0,j=V.length;Z<j;Z++){let s0=V[Z];if(E(s0,_)){let x0=M.isWebGLCubeRenderTarget?34067:3553,B=n.get(s0).__webglTexture;t.bindTexture(x0,B),I(x0),t.unbindTexture()}}}function M1(M){if(a&&M.samples>0&&N0(M)===!1){let _=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],V=M.width,Z=M.height,j=16384,s0=[],x0=M.stencilBuffer?33306:36096,B=n.get(M),h0=M.isWebGLMultipleRenderTargets===!0;if(h0)for(let l0=0;l0<_.length;l0++)t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+l0,36161,null),t.bindFramebuffer(36160,B.__webglFramebuffer),r.framebufferTexture2D(36009,36064+l0,3553,null,0);t.bindFramebuffer(36008,B.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,B.__webglFramebuffer);for(let l0=0;l0<_.length;l0++){s0.push(36064+l0),M.depthBuffer&&s0.push(x0);let a0=B.__ignoreDepthValues!==void 0?B.__ignoreDepthValues:!1;if(a0===!1&&(M.depthBuffer&&(j|=256),M.stencilBuffer&&(j|=1024)),h0&&r.framebufferRenderbuffer(36008,36064,36161,B.__webglColorRenderbuffer[l0]),a0===!0&&(r.invalidateFramebuffer(36008,[x0]),r.invalidateFramebuffer(36009,[x0])),h0){let A=n.get(_[l0]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,A,0)}r.blitFramebuffer(0,0,V,Z,0,0,V,Z,j,9728),m&&r.invalidateFramebuffer(36008,s0)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),h0)for(let l0=0;l0<_.length;l0++){t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+l0,36161,B.__webglColorRenderbuffer[l0]);let a0=n.get(_[l0]).__webglTexture;t.bindFramebuffer(36160,B.__webglFramebuffer),r.framebufferTexture2D(36009,36064+l0,3553,a0,0)}t.bindFramebuffer(36009,B.__webglMultisampledFramebuffer)}}function X0(M){return Math.min(u,M.samples)}function N0(M){let _=n.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function I1(M){let _=o.render.frame;g.get(M)!==_&&(g.set(M,_),M.update())}function R1(M,_){let V=M.encoding,Z=M.format,j=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===a6||V!==l2&&(V===B0?a===!1?e.has("EXT_sRGB")===!0&&Z===T1?(M.format=a6,M.minFilter=o1,M.generateMipmaps=!1):_=d6.sRGBToLinear(_):(Z!==T1||j!==s2)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),_}this.allocateTextureUnit=X,this.resetTextureUnits=q,this.setTexture2D=k,this.setTexture2DArray=K,this.setTexture3D=Y,this.setTextureCube=i0,this.rebindTextures=Y0,this.setupRenderTarget=e1,this.updateRenderTargetMipmap=n1,this.updateMultisampleRenderTarget=M1,this.setupDepthRenderbuffer=f0,this.setupFrameBufferTexture=r0,this.useMultisampledRTT=N0}function Wn(r,e,t){let n=t.isWebGL2;function i(s,o=null){let a;if(s===s2)return 5121;if(s===Z7)return 32819;if(s===J7)return 32820;if(s===q7)return 5120;if(s===X7)return 5122;if(s===d4)return 5123;if(s===Y7)return 5124;if(s===r2)return 5125;if(s===a2)return 5126;if(s===t3)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===$7)return 6406;if(s===T1)return 6408;if(s===j7)return 6409;if(s===Q7)return 6410;if(s===o2)return 6402;if(s===A2)return 34041;if(s===e8)return 6403;if(s===K7)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===a6)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===t8)return 36244;if(s===n8)return 33319;if(s===i8)return 33320;if(s===s8)return 36249;if(s===e6||s===t6||s===n6||s===i6)if(o===B0)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===e6)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===t6)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===n6)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===i6)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===e6)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===t6)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===n6)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===i6)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===f4||s===p4||s===m4||s===g4)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===f4)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===p4)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===m4)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===g4)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===r8)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===x4||s===_4)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===x4)return o===B0?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===_4)return o===B0?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===v4||s===y4||s===M4||s===b4||s===w4||s===S4||s===A4||s===T4||s===E4||s===C4||s===P4||s===L4||s===I4||s===R4)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===v4)return o===B0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===y4)return o===B0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===M4)return o===B0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===b4)return o===B0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===w4)return o===B0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===S4)return o===B0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===A4)return o===B0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===T4)return o===B0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===E4)return o===B0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===C4)return o===B0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===P4)return o===B0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===L4)return o===B0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===I4)return o===B0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===R4)return o===B0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===D4)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===D4)return o===B0?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===S2?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var k5=class extends u1{constructor(e=[]){super();this.isArrayCamera=!0,this.cameras=e}},X2=class extends x1{constructor(){super();this.isGroup=!0,this.type="Group"}},qn={type:"move"},k3=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new X2,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new X2,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new X2,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let p of e.hand.values()){let f=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){let w=new X2;w.matrixAutoUpdate=!1,w.visible=!1,c.joints[p.jointName]=w,c.add(w)}let x=c.joints[p.jointName];f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=f.radius),x.visible=f!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qn)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}},V5=class extends l1{constructor(e,t,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:o2,h!==o2&&h!==A2)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===o2&&(n=r2),n===void 0&&h===A2&&(n=S2),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:t1,this.minFilter=l!==void 0?l:t1,this.flipY=!1,this.generateMipmaps=!1}},G5=class extends h2{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=null,c=null,h=null,u=null,d=null,m=null,g=t.getContextAttributes(),p=null,f=null,x=[],w=[],C=new u1;C.layers.enable(1),C.viewport=new V0;let b=new u1;b.layers.enable(2),b.viewport=new V0;let S=[C,b],E=new k5;E.layers.enable(1),E.layers.enable(2);let I=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let k=x[O];return k===void 0&&(k=new k3,x[O]=k),k.getTargetRaySpace()},this.getControllerGrip=function(O){let k=x[O];return k===void 0&&(k=new k3,x[O]=k),k.getGripSpace()},this.getHand=function(O){let k=x[O];return k===void 0&&(k=new k3,x[O]=k),k.getHandSpace()};function T(O){let k=w.indexOf(O.inputSource);if(k===-1)return;let K=x[k];K!==void 0&&K.dispatchEvent({type:O.type,data:O.inputSource})}function F(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",N);for(let O=0;O<x.length;O++){let k=w[O];k!==null&&(w[O]=null,x[O].disconnect(k))}I=null,y=null,e.setRenderTarget(p),d=null,u=null,h=null,i=null,f=null,X.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",F),i.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let k={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,k),i.updateRenderState({baseLayer:d}),f=new X1(d.framebufferWidth,d.framebufferHeight,{format:T1,type:s2,encoding:e.outputEncoding})}else{let k=null,K=null,Y=null;g.depth&&(Y=g.stencil?35056:33190,k=g.stencil?A2:o2,K=g.stencil?S2:r2);let i0={colorFormat:32856,depthFormat:Y,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(i0),i.updateRenderState({layers:[u]}),f=new X1(u.textureWidth,u.textureHeight,{format:T1,type:s2,depthTexture:new V5(u.textureWidth,u.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});let c0=e.properties.get(f);c0.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),X.setContext(i),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(O){for(let k=0;k<O.removed.length;k++){let K=O.removed[k],Y=w.indexOf(K);Y>=0&&(w[Y]=null,x[Y].dispatchEvent({type:"disconnected",data:K}))}for(let k=0;k<O.added.length;k++){let K=O.added[k],Y=w.indexOf(K);if(Y===-1){for(let c0=0;c0<x.length;c0++)if(c0>=w.length){w.push(K),Y=c0;break}else if(w[c0]===null){w[c0]=K,Y=c0;break}if(Y===-1)break}let i0=x[Y];i0&&i0.dispatchEvent({type:"connected",data:K})}}let J=new L,n0=new L;function R(O,k,K){J.setFromMatrixPosition(k.matrixWorld),n0.setFromMatrixPosition(K.matrixWorld);let Y=J.distanceTo(n0),i0=k.projectionMatrix.elements,c0=K.projectionMatrix.elements,u0=i0[14]/(i0[10]-1),G=i0[14]/(i0[10]+1),H0=(i0[9]+1)/i0[5],w0=(i0[9]-1)/i0[5],v0=(i0[8]-1)/i0[0],r0=(c0[8]+1)/c0[0],F0=u0*v0,S0=u0*r0,f0=Y/(-v0+r0),Y0=f0*-v0;k.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Y0),O.translateZ(f0),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();let e1=u0+f0,n1=G+f0,M1=F0-Y0,X0=S0+(Y-Y0),N0=H0*G/n1*e1,I1=w0*G/n1*e1;O.projectionMatrix.makePerspective(M1,X0,N0,I1,e1,n1)}function W(O,k){k===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(k.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;E.near=b.near=C.near=O.near,E.far=b.far=C.far=O.far,(I!==E.near||y!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),I=E.near,y=E.far);let k=O.parent,K=E.cameras;W(E,k);for(let i0=0;i0<K.length;i0++)W(K[i0],k);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),O.position.copy(E.position),O.quaternion.copy(E.quaternion),O.scale.copy(E.scale),O.matrix.copy(E.matrix),O.matrixWorld.copy(E.matrixWorld);let Y=O.children;for(let i0=0,c0=Y.length;i0<c0;i0++)Y[i0].updateMatrixWorld(!0);K.length===2?R(E,C,b):E.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(O){u!==null&&(u.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)};let U=null;function q(O,k){if(c=k.getViewerPose(l||o),m=k,c!==null){let K=c.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let Y=!1;K.length!==E.cameras.length&&(E.cameras.length=0,Y=!0);for(let i0=0;i0<K.length;i0++){let c0=K[i0],u0=null;if(d!==null)u0=d.getViewport(c0);else{let H0=h.getViewSubImage(u,c0);u0=H0.viewport,i0===0&&(e.setRenderTargetTextures(f,H0.colorTexture,u.ignoreDepthValues?void 0:H0.depthStencilTexture),e.setRenderTarget(f))}let G=S[i0];G===void 0&&(G=new u1,G.layers.enable(i0),G.viewport=new V0,S[i0]=G),G.matrix.fromArray(c0.transform.matrix),G.projectionMatrix.fromArray(c0.projectionMatrix),G.viewport.set(u0.x,u0.y,u0.width,u0.height),i0===0&&E.matrix.copy(G.matrix),Y===!0&&E.cameras.push(G)}}for(let K=0;K<x.length;K++){let Y=w[K],i0=x[K];Y!==null&&i0!==void 0&&i0.update(Y,k,l||o)}U&&U(O,k),m=null}let X=new r5;X.setAnimationLoop(q),this.setAnimationLoop=function(O){U=O},this.dispose=function(){}}};function Xn(r,e){function t(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,x,w,C){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),h(p,f)):f.isMeshPhongMaterial?(i(p,f),c(p,f)):f.isMeshStandardMaterial?(i(p,f),u(p,f),f.isMeshPhysicalMaterial&&d(p,f,C)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?a(p,f,x,w):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===d1&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===d1&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let x=e.get(f).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let b=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*b}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let w;f.map?w=f.map:f.specularMap?w=f.specularMap:f.displacementMap?w=f.displacementMap:f.normalMap?w=f.normalMap:f.bumpMap?w=f.bumpMap:f.roughnessMap?w=f.roughnessMap:f.metalnessMap?w=f.metalnessMap:f.alphaMap?w=f.alphaMap:f.emissiveMap?w=f.emissiveMap:f.clearcoatMap?w=f.clearcoatMap:f.clearcoatNormalMap?w=f.clearcoatNormalMap:f.clearcoatRoughnessMap?w=f.clearcoatRoughnessMap:f.iridescenceMap?w=f.iridescenceMap:f.iridescenceThicknessMap?w=f.iridescenceThicknessMap:f.specularIntensityMap?w=f.specularIntensityMap:f.specularColorMap?w=f.specularColorMap:f.transmissionMap?w=f.transmissionMap:f.thicknessMap?w=f.thicknessMap:f.sheenColorMap?w=f.sheenColorMap:f.sheenRoughnessMap&&(w=f.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix));let C;f.aoMap?C=f.aoMap:f.lightMap&&(C=f.lightMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),p.uv2Transform.value.copy(C.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,x,w){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*x,p.scale.value=w*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let C;f.map?C=f.map:f.alphaMap&&(C=f.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),p.uvTransform.value.copy(C.matrix))}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,x){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===d1&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Yn(){let r=m3("canvas");return r.style.display="block",r}function Zn(r={}){this.isWebGLRenderer=!0;let e=r.canvas!==void 0?r.canvas:Yn(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1,h;t!==null?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let u=null,d=null,m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=l2,this.physicallyCorrectLights=!1,this.toneMapping=F1,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});let p=this,f=!1,x=0,w=0,C=null,b=-1,S=null,E=new V0,I=new V0,y=null,T=e.width,F=e.height,N=1,J=null,n0=null,R=new V0(0,0,T,F),W=new V0(0,0,T,F),U=!1,q=new k6,X=!1,O=!1,k=null,K=new W0,Y=new R0,i0=new L,c0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function u0(){return C===null?N:1}let G=t;function H0(v,P){for(let z=0;z<v.length;z++){let D=v[z],H=e.getContext(D,P);if(H!==null)return H}return null}try{let v={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Y3}`),e.addEventListener("webglcontextlost",A,!1),e.addEventListener("webglcontextrestored",e0,!1),e.addEventListener("webglcontextcreationerror",Q,!1),G===null){let P=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&P.shift(),G=H0(P,v),G===null)throw H0(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let w0,v0,r0,F0,S0,f0,Y0,e1,n1,M1,X0,N0,I1,R1,M,_,V,Z,j,s0,x0,B,h0;function l0(){w0=new ft(G),v0=new ot(G,w0,r),w0.init(v0),B=new Wn(G,w0,v0),r0=new Gn(G,w0,v0),F0=new gt,S0=new Ln,f0=new Hn(G,w0,r0,S0,v0,B,F0),Y0=new ct(p),e1=new dt(p),n1=new C8(G,v0),h0=new rt(G,w0,n1,v0),M1=new pt(G,n1,F0,h0),X0=new yt(G,M1,n1,F0),j=new vt(G,v0,f0),_=new lt(S0),N0=new Pn(p,Y0,e1,w0,v0,h0,_),I1=new Xn(p,S0),R1=new Rn,M=new On(w0,v0),Z=new st(p,Y0,r0,X0,h,o),V=new Vn(p,X0,v0),s0=new at(G,w0,F0,v0),x0=new mt(G,w0,F0,v0),F0.programs=N0.programs,p.capabilities=v0,p.extensions=w0,p.properties=S0,p.renderLists=R1,p.shadowMap=V,p.state=r0,p.info=F0}l0();let a0=new G5(p,G);this.xr=a0,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let v=w0.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=w0.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(v){v!==void 0&&(N=v,this.setSize(T,F,!1))},this.getSize=function(v){return v.set(T,F)},this.setSize=function(v,P,z){if(a0.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=v,F=P,e.width=Math.floor(v*N),e.height=Math.floor(P*N),z!==!1&&(e.style.width=v+"px",e.style.height=P+"px"),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(T*N,F*N).floor()},this.setDrawingBufferSize=function(v,P,z){T=v,F=P,N=z,e.width=Math.floor(v*z),e.height=Math.floor(P*z),this.setViewport(0,0,v,P)},this.getCurrentViewport=function(v){return v.copy(E)},this.getViewport=function(v){return v.copy(R)},this.setViewport=function(v,P,z,D){v.isVector4?R.set(v.x,v.y,v.z,v.w):R.set(v,P,z,D),r0.viewport(E.copy(R).multiplyScalar(N).floor())},this.getScissor=function(v){return v.copy(W)},this.setScissor=function(v,P,z,D){v.isVector4?W.set(v.x,v.y,v.z,v.w):W.set(v,P,z,D),r0.scissor(I.copy(W).multiplyScalar(N).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(v){r0.setScissorTest(U=v)},this.setOpaqueSort=function(v){J=v},this.setTransparentSort=function(v){n0=v},this.getClearColor=function(v){return v.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(v=!0,P=!0,z=!0){let D=0;v&&(D|=16384),P&&(D|=256),z&&(D|=1024),G.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",A,!1),e.removeEventListener("webglcontextrestored",e0,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),R1.dispose(),M.dispose(),S0.dispose(),Y0.dispose(),e1.dispose(),X0.dispose(),h0.dispose(),N0.dispose(),a0.dispose(),a0.removeEventListener("sessionstart",P0),a0.removeEventListener("sessionend",L0),k&&(k.dispose(),k=null),$0.stop()};function A(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function e0(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;let v=F0.autoReset,P=V.enabled,z=V.autoUpdate,D=V.needsUpdate,H=V.type;l0(),F0.autoReset=v,V.enabled=P,V.autoUpdate=z,V.needsUpdate=D,V.type=H}function Q(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function d0(v){let P=v.target;P.removeEventListener("dispose",d0),o0(P)}function o0(v){m0(v),S0.remove(v)}function m0(v){let P=S0.get(v).programs;P!==void 0&&(P.forEach(function(z){N0.releaseProgram(z)}),v.isShaderMaterial&&N0.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,z,D,H,p0){P===null&&(P=c0);let _0=H.isMesh&&H.matrixWorld.determinant()<0,M0=u7(v,P,z,D,H);r0.setMaterial(D,_0);let y0=z.index,I0=z.attributes.position;if(y0===null){if(I0===void 0||I0.count===0)return}else if(y0.count===0)return;let A0=1;D.wireframe===!0&&(y0=M1.getWireframeAttribute(z),A0=2),h0.setup(H,D,M0,z,y0);let T0,z0=s0;y0!==null&&(T0=n1.get(y0),z0=x0,z0.setIndex(T0));let n2=y0!==null?y0.count:I0.count,_2=z.drawRange.start*A0,v2=z.drawRange.count*A0,w1=p0!==null?p0.start*A0:0,E0=p0!==null?p0.count*A0:Infinity,y2=Math.max(_2,w1),O0=Math.min(n2,_2+v2,w1+E0)-1,S1=Math.max(0,O0-y2+1);if(S1!==0){if(H.isMesh)D.wireframe===!0?(r0.setLineWidth(D.wireframeLinewidth*u0()),z0.setMode(1)):z0.setMode(4);else if(H.isLine){let H1=D.linewidth;H1===void 0&&(H1=1),r0.setLineWidth(H1*u0()),H.isLineSegments?z0.setMode(1):H.isLineLoop?z0.setMode(2):z0.setMode(3)}else H.isPoints?z0.setMode(0):H.isSprite&&z0.setMode(4);if(H.isInstancedMesh)z0.renderInstances(y2,S1,H.count);else if(z.isInstancedBufferGeometry){let H1=Math.min(z.instanceCount,z._maxInstanceCount);z0.renderInstances(y2,S1,H1)}else z0.render(y2,S1)}},this.compile=function(v,P){d=M.get(v),d.init(),g.push(d),v.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights(p.physicallyCorrectLights),v.traverse(function(z){let D=z.material;if(D)if(Array.isArray(D))for(let H=0;H<D.length;H++){let p0=D[H];W3(p0,v,z)}else W3(D,v,z)}),g.pop(),d=null};let $=null;function g0(v){$&&$(v)}function P0(){$0.stop()}function L0(){$0.start()}let $0=new r5;$0.setAnimationLoop(g0),typeof self!="undefined"&&$0.setContext(self),this.setAnimationLoop=function(v){$=v,a0.setAnimationLoop(v),v===null?$0.stop():$0.start()},a0.addEventListener("sessionstart",P0),a0.addEventListener("sessionend",L0),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;v.autoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.updateMatrixWorld(),a0.enabled===!0&&a0.isPresenting===!0&&(a0.cameraAutoUpdate===!0&&a0.updateCamera(P),P=a0.getCamera()),v.isScene===!0&&v.onBeforeRender(p,v,P,C),d=M.get(v,g.length),d.init(),g.push(d),K.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),q.setFromProjectionMatrix(K),O=this.localClippingEnabled,X=_.init(this.clippingPlanes,O,P),u=R1.get(v,m.length),u.init(),m.push(u),b1(v,P,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(J,n0),X===!0&&_.beginShadows();let z=d.state.shadowsArray;if(V.render(z,v,P),X===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(u,v),d.setupLights(p.physicallyCorrectLights),P.isArrayCamera){let D=P.cameras;for(let H=0,p0=D.length;H<p0;H++){let _0=D[H];Q6(u,v,_0,_0.viewport)}}else Q6(u,v,P);C!==null&&(f0.updateMultisampleRenderTarget(C),f0.updateRenderTargetMipmap(C)),v.isScene===!0&&v.onAfterRender(p,v,P),h0.resetDefaultState(),b=-1,S=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function b1(v,P,z,D){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||q.intersectsSprite(v)){D&&i0.setFromMatrixPosition(v.matrixWorld).applyMatrix4(K);let _0=X0.update(v),M0=v.material;M0.visible&&u.push(v,_0,M0,z,i0.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(v.isSkinnedMesh&&v.skeleton.frame!==F0.render.frame&&(v.skeleton.update(),v.skeleton.frame=F0.render.frame),!v.frustumCulled||q.intersectsObject(v))){D&&i0.setFromMatrixPosition(v.matrixWorld).applyMatrix4(K);let _0=X0.update(v),M0=v.material;if(Array.isArray(M0)){let y0=_0.groups;for(let I0=0,A0=y0.length;I0<A0;I0++){let T0=y0[I0],z0=M0[T0.materialIndex];z0&&z0.visible&&u.push(v,_0,z0,z,i0.z,T0)}}else M0.visible&&u.push(v,_0,M0,z,i0.z,null)}}let p0=v.children;for(let _0=0,M0=p0.length;_0<M0;_0++)b1(p0[_0],P,z,D)}function Q6(v,P,z,D){let H=v.opaque,p0=v.transmissive,_0=v.transparent;d.setupLightsView(z),p0.length>0&&c7(H,P,z),D&&r0.viewport(E.copy(D)),H.length>0&&h3(H,P,z),p0.length>0&&h3(p0,P,z),_0.length>0&&h3(_0,P,z),r0.buffers.depth.setTest(!0),r0.buffers.depth.setMask(!0),r0.buffers.color.setMask(!0),r0.setPolygonOffset(!1)}function c7(v,P,z){let D=v0.isWebGL2;k===null&&(k=new X1(1,1,{generateMipmaps:!0,type:w0.has("EXT_color_buffer_half_float")?t3:s2,minFilter:d3,samples:D&&s===!0?4:0})),p.getDrawingBufferSize(Y),D?k.setSize(Y.x,Y.y):k.setSize(c6(Y.x),c6(Y.y));let H=p.getRenderTarget();p.setRenderTarget(k),p.clear();let p0=p.toneMapping;p.toneMapping=F1,h3(v,P,z),p.toneMapping=p0,f0.updateMultisampleRenderTarget(k),f0.updateRenderTargetMipmap(k),p.setRenderTarget(H)}function h3(v,P,z){let D=P.isScene===!0?P.overrideMaterial:null;for(let H=0,p0=v.length;H<p0;H++){let _0=v[H],M0=_0.object,y0=_0.geometry,I0=D===null?_0.material:D,A0=_0.group;M0.layers.test(z.layers)&&h7(M0,P,z,y0,I0,A0)}}function h7(v,P,z,D,H,p0){v.onBeforeRender(p,P,z,D,H,p0),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),H.onBeforeRender(p,P,z,D,v,p0),H.transparent===!0&&H.side===D1?(H.side=d1,H.needsUpdate=!0,p.renderBufferDirect(z,P,D,H,v,p0),H.side=e3,H.needsUpdate=!0,p.renderBufferDirect(z,P,D,H,v,p0),H.side=D1):p.renderBufferDirect(z,P,D,H,v,p0),v.onAfterRender(p,P,z,D,H,p0)}function W3(v,P,z){P.isScene!==!0&&(P=c0);let D=S0.get(v),H=d.state.lights,p0=d.state.shadowsArray,_0=H.state.version,M0=N0.getParameters(v,H.state,p0,P,z),y0=N0.getProgramCacheKey(M0),I0=D.programs;D.environment=v.isMeshStandardMaterial?P.environment:null,D.fog=P.fog,D.envMap=(v.isMeshStandardMaterial?e1:Y0).get(v.envMap||D.environment),I0===void 0&&(v.addEventListener("dispose",d0),I0=new Map,D.programs=I0);let A0=I0.get(y0);if(A0!==void 0){if(D.currentProgram===A0&&D.lightsStateVersion===_0)return e4(v,M0),A0}else M0.uniforms=N0.getUniforms(v),v.onBuild(z,M0,p),v.onBeforeCompile(M0,p),A0=N0.acquireProgram(M0,y0),I0.set(y0,A0),D.uniforms=M0.uniforms;let T0=D.uniforms;(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(T0.clippingPlanes=_.uniform),e4(v,M0),D.needsLights=f7(v),D.lightsStateVersion=_0,D.needsLights&&(T0.ambientLightColor.value=H.state.ambient,T0.lightProbe.value=H.state.probe,T0.directionalLights.value=H.state.directional,T0.directionalLightShadows.value=H.state.directionalShadow,T0.spotLights.value=H.state.spot,T0.spotLightShadows.value=H.state.spotShadow,T0.rectAreaLights.value=H.state.rectArea,T0.ltc_1.value=H.state.rectAreaLTC1,T0.ltc_2.value=H.state.rectAreaLTC2,T0.pointLights.value=H.state.point,T0.pointLightShadows.value=H.state.pointShadow,T0.hemisphereLights.value=H.state.hemi,T0.directionalShadowMap.value=H.state.directionalShadowMap,T0.directionalShadowMatrix.value=H.state.directionalShadowMatrix,T0.spotShadowMap.value=H.state.spotShadowMap,T0.spotShadowMatrix.value=H.state.spotShadowMatrix,T0.pointShadowMap.value=H.state.pointShadowMap,T0.pointShadowMatrix.value=H.state.pointShadowMatrix);let z0=A0.getUniforms(),n2=a3.seqWithValue(z0.seq,T0);return D.currentProgram=A0,D.uniformsList=n2,A0}function e4(v,P){let z=S0.get(v);z.outputEncoding=P.outputEncoding,z.instancing=P.instancing,z.skinning=P.skinning,z.morphTargets=P.morphTargets,z.morphNormals=P.morphNormals,z.morphColors=P.morphColors,z.morphTargetsCount=P.morphTargetsCount,z.numClippingPlanes=P.numClippingPlanes,z.numIntersection=P.numClipIntersection,z.vertexAlphas=P.vertexAlphas,z.vertexTangents=P.vertexTangents,z.toneMapping=P.toneMapping}function u7(v,P,z,D,H){P.isScene!==!0&&(P=c0),f0.resetTextureUnits();let p0=P.fog,_0=D.isMeshStandardMaterial?P.environment:null,M0=C===null?p.outputEncoding:C.isXRRenderTarget===!0?C.texture.encoding:l2,y0=(D.isMeshStandardMaterial?e1:Y0).get(D.envMap||_0),I0=D.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,A0=!!D.normalMap&&!!z.attributes.tangent,T0=!!z.morphAttributes.position,z0=!!z.morphAttributes.normal,n2=!!z.morphAttributes.color,_2=D.toneMapped?p.toneMapping:F1,v2=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,w1=v2!==void 0?v2.length:0,E0=S0.get(D),y2=d.state.lights;if(X===!0&&(O===!0||v!==S)){let A1=v===S&&D.id===b;_.setState(D,v,A1)}let O0=!1;D.version===E0.__version?(E0.needsLights&&E0.lightsStateVersion!==y2.state.version||E0.outputEncoding!==M0||H.isInstancedMesh&&E0.instancing===!1||!H.isInstancedMesh&&E0.instancing===!0||H.isSkinnedMesh&&E0.skinning===!1||!H.isSkinnedMesh&&E0.skinning===!0||E0.envMap!==y0||D.fog===!0&&E0.fog!==p0||E0.numClippingPlanes!==void 0&&(E0.numClippingPlanes!==_.numPlanes||E0.numIntersection!==_.numIntersection)||E0.vertexAlphas!==I0||E0.vertexTangents!==A0||E0.morphTargets!==T0||E0.morphNormals!==z0||E0.morphColors!==n2||E0.toneMapping!==_2||v0.isWebGL2===!0&&E0.morphTargetsCount!==w1)&&(O0=!0):(O0=!0,E0.__version=D.version);let S1=E0.currentProgram;O0===!0&&(S1=W3(D,P,H));let H1=!1,K2=!1,q3=!1,K0=S1.getUniforms(),j2=E0.uniforms;if(r0.useProgram(S1.program)&&(H1=!0,K2=!0,q3=!0),D.id!==b&&(b=D.id,K2=!0),H1||S!==v){if(K0.setValue(G,"projectionMatrix",v.projectionMatrix),v0.logarithmicDepthBuffer&&K0.setValue(G,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),S!==v&&(S=v,K2=!0,q3=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){let A1=K0.map.cameraPosition;A1!==void 0&&A1.setValue(G,i0.setFromMatrixPosition(v.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&K0.setValue(G,"isOrthographic",v.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||H.isSkinnedMesh)&&K0.setValue(G,"viewMatrix",v.matrixWorldInverse)}if(H.isSkinnedMesh){K0.setOptional(G,H,"bindMatrix"),K0.setOptional(G,H,"bindMatrixInverse");let A1=H.skeleton;A1&&(v0.floatVertexTextures?(A1.boneTexture===null&&A1.computeBoneTexture(),K0.setValue(G,"boneTexture",A1.boneTexture,f0),K0.setValue(G,"boneTextureSize",A1.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let X3=z.morphAttributes;return(X3.position!==void 0||X3.normal!==void 0||X3.color!==void 0&&v0.isWebGL2===!0)&&j.update(H,z,D,S1),(K2||E0.receiveShadow!==H.receiveShadow)&&(E0.receiveShadow=H.receiveShadow,K0.setValue(G,"receiveShadow",H.receiveShadow)),K2&&(K0.setValue(G,"toneMappingExposure",p.toneMappingExposure),E0.needsLights&&d7(j2,q3),p0&&D.fog===!0&&I1.refreshFogUniforms(j2,p0),I1.refreshMaterialUniforms(j2,D,N,F,k),a3.upload(G,E0.uniformsList,j2,f0)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(a3.upload(G,E0.uniformsList,j2,f0),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&K0.setValue(G,"center",H.center),K0.setValue(G,"modelViewMatrix",H.modelViewMatrix),K0.setValue(G,"normalMatrix",H.normalMatrix),K0.setValue(G,"modelMatrix",H.matrixWorld),S1}function d7(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function f7(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(v,P,z){S0.get(v.texture).__webglTexture=P,S0.get(v.depthTexture).__webglTexture=z;let D=S0.get(v);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=z===void 0,D.__autoAllocateDepthBuffer||w0.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(v,P){let z=S0.get(v);z.__webglFramebuffer=P,z.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,z=0){C=v,x=P,w=z;let D=!0;if(v){let y0=S0.get(v);y0.__useDefaultFramebuffer!==void 0?(r0.bindFramebuffer(36160,null),D=!1):y0.__webglFramebuffer===void 0?f0.setupRenderTarget(v):y0.__hasExternalTextures&&f0.rebindTextures(v,S0.get(v.texture).__webglTexture,S0.get(v.depthTexture).__webglTexture)}let H=null,p0=!1,_0=!1;if(v){let y0=v.texture;(y0.isData3DTexture||y0.isDataArrayTexture)&&(_0=!0);let I0=S0.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(H=I0[P],p0=!0):v0.isWebGL2&&v.samples>0&&f0.useMultisampledRTT(v)===!1?H=S0.get(v).__webglMultisampledFramebuffer:H=I0,E.copy(v.viewport),I.copy(v.scissor),y=v.scissorTest}else E.copy(R).multiplyScalar(N).floor(),I.copy(W).multiplyScalar(N).floor(),y=U;if(r0.bindFramebuffer(36160,H)&&v0.drawBuffers&&D&&r0.drawBuffers(v,H),r0.viewport(E),r0.scissor(I),r0.setScissorTest(y),p0){let y0=S0.get(v.texture);G.framebufferTexture2D(36160,36064,34069+P,y0.__webglTexture,z)}else if(_0){let y0=S0.get(v.texture),I0=P||0;G.framebufferTextureLayer(36160,36064,y0.__webglTexture,z||0,I0)}b=-1},this.readRenderTargetPixels=function(v,P,z,D,H,p0,_0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let M0=S0.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_0!==void 0&&(M0=M0[_0]),M0){r0.bindFramebuffer(36160,M0);try{let y0=v.texture,I0=y0.format,A0=y0.type;if(I0!==T1&&B.convert(I0)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let T0=A0===t3&&(w0.has("EXT_color_buffer_half_float")||v0.isWebGL2&&w0.has("EXT_color_buffer_float"));if(A0!==s2&&B.convert(A0)!==G.getParameter(35738)&&!(A0===a2&&(v0.isWebGL2||w0.has("OES_texture_float")||w0.has("WEBGL_color_buffer_float")))&&!T0){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-D&&z>=0&&z<=v.height-H&&G.readPixels(P,z,D,H,B.convert(I0),B.convert(A0),p0)}finally{let y0=C!==null?S0.get(C).__webglFramebuffer:null;r0.bindFramebuffer(36160,y0)}}},this.copyFramebufferToTexture=function(v,P,z=0){let D=Math.pow(2,-z),H=Math.floor(P.image.width*D),p0=Math.floor(P.image.height*D);f0.setTexture2D(P,0),G.copyTexSubImage2D(3553,z,0,0,v.x,v.y,H,p0),r0.unbindTexture()},this.copyTextureToTexture=function(v,P,z,D=0){let H=P.image.width,p0=P.image.height,_0=B.convert(z.format),M0=B.convert(z.type);f0.setTexture2D(z,0),G.pixelStorei(37440,z.flipY),G.pixelStorei(37441,z.premultiplyAlpha),G.pixelStorei(3317,z.unpackAlignment),P.isDataTexture?G.texSubImage2D(3553,D,v.x,v.y,H,p0,_0,M0,P.image.data):P.isCompressedTexture?G.compressedTexSubImage2D(3553,D,v.x,v.y,P.mipmaps[0].width,P.mipmaps[0].height,_0,P.mipmaps[0].data):G.texSubImage2D(3553,D,v.x,v.y,_0,M0,P.image),D===0&&z.generateMipmaps&&G.generateMipmap(3553),r0.unbindTexture()},this.copyTextureToTexture3D=function(v,P,z,D,H=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let p0=v.max.x-v.min.x+1,_0=v.max.y-v.min.y+1,M0=v.max.z-v.min.z+1,y0=B.convert(D.format),I0=B.convert(D.type),A0;if(D.isData3DTexture)f0.setTexture3D(D,0),A0=32879;else if(D.isDataArrayTexture)f0.setTexture2DArray(D,0),A0=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,D.flipY),G.pixelStorei(37441,D.premultiplyAlpha),G.pixelStorei(3317,D.unpackAlignment);let T0=G.getParameter(3314),z0=G.getParameter(32878),n2=G.getParameter(3316),_2=G.getParameter(3315),v2=G.getParameter(32877),w1=z.isCompressedTexture?z.mipmaps[0]:z.image;G.pixelStorei(3314,w1.width),G.pixelStorei(32878,w1.height),G.pixelStorei(3316,v.min.x),G.pixelStorei(3315,v.min.y),G.pixelStorei(32877,v.min.z),z.isDataTexture||z.isData3DTexture?G.texSubImage3D(A0,H,P.x,P.y,P.z,p0,_0,M0,y0,I0,w1.data):z.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(A0,H,P.x,P.y,P.z,p0,_0,M0,y0,w1.data)):G.texSubImage3D(A0,H,P.x,P.y,P.z,p0,_0,M0,y0,I0,w1),G.pixelStorei(3314,T0),G.pixelStorei(32878,z0),G.pixelStorei(3316,n2),G.pixelStorei(3315,_2),G.pixelStorei(32877,v2),H===0&&D.generateMipmaps&&G.generateMipmap(A0),r0.unbindTexture()},this.initTexture=function(v){v.isCubeTexture?f0.setTextureCube(v,0):v.isData3DTexture?f0.setTexture3D(v,0):v.isDataArrayTexture?f0.setTexture2DArray(v,0):f0.setTexture2D(v,0),r0.unbindTexture()},this.resetState=function(){x=0,w=0,C=null,r0.reset(),h0.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var H5=class extends Zn{};H5.prototype.isWebGL1Renderer=!0;var V3=class extends m2{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new C0(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};var G3=class extends m2{constructor(e){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new C0(16777215),this.specular=new C0(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new C0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=B4,this.normalScale=new R0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=J3,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var G0={arraySlice:function(r,e,t){return G0.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){let s=r.clone();s.name=e;let o=[];for(let l=0;l<s.tracks.length;++l){let c=s.tracks[l],h=c.getValueSize(),u=[],d=[];for(let m=0;m<c.times.length;++m){let g=c.times[m]*i;if(!(g<t||g>=n)){u.push(c.times[m]);for(let p=0;p<h;++p)d.push(c.values[m*h+p])}}u.length!==0&&(c.times=G0.convertArray(u,c.times.constructor),c.values=G0.convertArray(d,c.values.constructor),o.push(c))}s.tracks=o;let a=Infinity;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);let i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){let a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=r.tracks.find(function(x){return x.name===a.name&&x.ValueTypeName===l});if(c===void 0)continue;let h=0,u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,m=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=m/3);let g=a.times.length-1,p;if(s<=a.times[0]){let x=h,w=u-h;p=G0.arraySlice(a.values,x,w)}else if(s>=a.times[g]){let x=g*u+h,w=x+u-h;p=G0.arraySlice(a.values,x,w)}else{let x=a.createInterpolant(),w=h,C=u-h;x.evaluate(s),p=G0.arraySlice(x.resultBuffer,w,C)}l==="quaternion"&&new z1().fromArray(p).normalize().conjugate().toArray(p);let f=c.times.length;for(let x=0;x<f;++x){let w=x*m+d;if(l==="quaternion")z1.multiplyQuaternionsFlat(c.values,w,p,0,c.values,w);else{let C=m-d*2;for(let b=0;b<C;++b)c.values[w+b]-=p[b]}}}return r.blendMode=a8,r}},l3=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},W5=class extends l3{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:F4,endingEnd:F4}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case N4:s=e,a=2*t-n;break;case z4:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case N4:o=e,l=2*n-t;break;case z4:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),p=g*g,f=p*g,x=-d*f+2*d*p-d*g,w=(1+d)*f+(-1.5-2*d)*p+(-.5+d)*g+1,C=(-1-m)*f+(1.5+m)*p+.5*g,b=m*f-m*p;for(let S=0;S!==a;++S)s[S]=x*o[h+S]+w*o[c+S]+C*o[l+S]+b*o[u+S];return s}},q5=class extends l3{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},X5=class extends l3{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},L1=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=G0.convertArray(t,this.TimeBufferType),this.values=G0.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:G0.convertArray(e.times,Array),values:G0.convertArray(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new X5(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new q5(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new W5(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case f3:t=this.InterpolantFactoryMethodDiscrete;break;case p3:t=this.InterpolantFactoryMethodLinear;break;case s6:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return f3;case this.InterpolantFactoryMethodLinear:return p3;case this.InterpolantFactoryMethodSmooth:return s6}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=G0.arraySlice(n,s,o),this.values=G0.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&G0.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=G0.arraySlice(this.times),t=G0.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===s6,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){let p=t[u+g];if(p!==t[d+g]||p!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[u+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=G0.arraySlice(e,0,o),this.values=G0.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){let e=G0.arraySlice(this.times,0),t=G0.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};L1.prototype.TimeBufferType=Float32Array;L1.prototype.ValueBufferType=Float32Array;L1.prototype.DefaultInterpolation=p3;var Y2=class extends L1{};Y2.prototype.ValueTypeName="bool";Y2.prototype.ValueBufferType=Array;Y2.prototype.DefaultInterpolation=f3;Y2.prototype.InterpolantFactoryMethodLinear=void 0;Y2.prototype.InterpolantFactoryMethodSmooth=void 0;var Y5=class extends L1{};Y5.prototype.ValueTypeName="color";var Z5=class extends L1{};Z5.prototype.ValueTypeName="number";var J5=class extends l3{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)z1.slerpFlat(s,0,o,c-a,o,c,l);return s}},H3=class extends L1{InterpolantFactoryMethodLinear(e){return new J5(this.times,this.values,this.getValueSize(),e)}};H3.prototype.ValueTypeName="quaternion";H3.prototype.DefaultInterpolation=p3;H3.prototype.InterpolantFactoryMethodSmooth=void 0;var Z2=class extends L1{};Z2.prototype.ValueTypeName="string";Z2.prototype.ValueBufferType=Array;Z2.prototype.DefaultInterpolation=f3;Z2.prototype.InterpolantFactoryMethodLinear=void 0;Z2.prototype.InterpolantFactoryMethodSmooth=void 0;var $5=class extends L1{};$5.prototype.ValueTypeName="vector";var K5=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},di=new K5;var Z6="\\[\\]\\.:\\/",Jn=new RegExp("["+Z6+"]","g"),J6="[^"+Z6+"]",$n="[^"+Z6.replace("\\.","")+"]",Kn=/((?:WC+[\/:])*)/.source.replace("WC",J6),jn=/(WCOD+)?/.source.replace("WCOD",$n),Qn=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",J6),ei=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",J6),ti=new RegExp("^"+Kn+jn+Qn+ei+"$"),ni=["material","materials","bones"],j5=class{constructor(e,t,n){let i=n||D0.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},D0=class{constructor(e,t,n){this.path=t,this.parsedPath=n||D0.parseTrackName(t),this.node=D0.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new D0.Composite(e,t,n):new D0(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jn,"")}static parseTrackName(e){let t=ti.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);ni.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=D0.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};D0.Composite=j5;D0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};D0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};D0.prototype.GetterByBindingType=[D0.prototype._getValue_direct,D0.prototype._getValue_array,D0.prototype._getValue_arrayElement,D0.prototype._getValue_toArray];D0.prototype.SetterByBindingTypeAndVersioning=[[D0.prototype._setValue_direct,D0.prototype._setValue_direct_setNeedsUpdate,D0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[D0.prototype._setValue_array,D0.prototype._setValue_array_setNeedsUpdate,D0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[D0.prototype._setValue_arrayElement,D0.prototype._setValue_arrayElement_setNeedsUpdate,D0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[D0.prototype._setValue_fromArray,D0.prototype._setValue_fromArray_setNeedsUpdate,D0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Y3}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Y3);var J2=({colors:r})=>({cell:e})=>r[(e||0)%r.length];var Q5=`
uniform float size;
attribute vec3 color;
varying vec3 vColor;

void main() {
  vColor = color;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

  gl_PointSize = size * (10.0 / - mvPosition.z);

  gl_Position = projectionMatrix * mvPosition;
}
`,e7=`
uniform float opacity;
varying vec3 vColor;

void main() {
  if (length(gl_PointCoord - vec2( 0.5, 0.5 )) > 0.475) discard;

  gl_FragColor = vec4(vColor, opacity);
}
`,$2=new Array(128).fill().map((r,e)=>`hsl(${e*29%360}, 60%, 60%)`),_i={faces:{enabled:!0,useColors:!0,colorGenerator:J2,colors:$2,reuse:"none",split:"cells",splitScale:100,material:new G3({transparent:!0,opacity:.25,blending:q1,depthWrite:!1,side:D1,vertexColors:!0})},edges:{enabled:!0,useColors:!0,colorGenerator:J2,colors:$2,reuse:"faces",split:"cells",splitScale:100,material:new V3({transparent:!0,opacity:.25,blending:i2,depthWrite:!1,vertexColors:!0,linewidth:2})},points:{enabled:!1,useColors:!0,colorGenerator:J2,colors:$2,reuse:"faces",split:"none",splitScale:100,material:new v1({uniforms:{size:{value:5},opacity:{value:.25}},vertexShader:Q5,fragmentShader:e7,transparent:!0,blending:i2})}};var $6=class{constructor(e,t,n){this.fov=e||Math.PI/2,this.w=t||10,this.wt=0,this.wSlice=0,this.rotation=n||{xy:0,xz:0,xw:0,yz:0,yw:0,zw:0}}_directProject([e,t,n,i]){let s=1+i*this.fov/this.w;return[e/s,t/s,n/s]}project([e,t,n,i]){return this._directProject(this.rotatePoint([e,t,n,i]))}_directSlice([e,t,n,i],[s,o,a,l]){if((this.wSlice-i)*(this.wSlice-l)>=0)return;let c=(this.wSlice-i)/(l-i),h=e+c*(s-e),u=t+c*(o-t),d=n+c*(a-n);return[h,u,d]}slice(e,t){return this._directSlice(this.rotatePoint(e),this.rotatePoint(t))}shiftSlice(e,t,n){this.wt+=e/100;let i=(1+Math.cos(this.wt))*.5;this.wSlice=t+(n-t)*i}rotate(e){Object.keys(this.rotation).forEach(t=>{this.rotation[t]=(this.rotation[t]+(e[t]||0)/1e3)%(2*Math.PI)})}rotatePoint([e,t,n,i]){let{xy:s,xz:o,xw:a,yz:l,yw:c,zw:h}=this.rotation,u=Math.cos(s),d=Math.sin(s),m=Math.cos(o),g=Math.sin(o),p=Math.cos(a),f=Math.sin(a),x=Math.cos(l),w=Math.sin(l),C=Math.cos(c),b=Math.sin(c),S=Math.cos(h),E=Math.sin(h),I=e;return e=e*u+t*d,t=t*u-I*d,I=e,e=e*m+n*g,n=n*m-I*g,I=e,e=e*p+i*f,i=i*p-I*f,I=t,t=t*x+n*w,n=n*x-I*w,I=t,t=t*C+i*b,i=i*C-I*b,I=n,n=n*S+i*E,i=i*S-I*E,[e,t,n,i]}prepare(){}};var vi={faces:{enabled:!0,useColors:!0,colorGenerator:J2,colors:$2,material:new G3({side:D1,shininess:50,vertexColors:!0})},edges:{enabled:!0,useColors:!0,colorGenerator:J2,colors:$2,material:new V3({transparent:!0,opacity:.25,blending:i2,depthWrite:!1,vertexColors:!0,linewidth:2})},points:{enabled:!1,useColors:!0,colorGenerator:J2,colors:$2,material:new v1({uniforms:{size:{value:5},opacity:{value:.25}},vertexShader:Q5,fragmentShader:e7,transparent:!0,blending:i2})}};var yi={vertices:[[1,1,1,-1/Math.sqrt(5)],[1,-1,-1,-1/Math.sqrt(5)],[-1,1,-1,-1/Math.sqrt(5)],[-1,-1,1,-1/Math.sqrt(5)],[0,0,0,Math.sqrt(5)-1/Math.sqrt(5)]],faces:[[1,2,3],[0,1,2],[0,1,3],[0,3,2],[0,4,1],[0,2,4],[0,3,4],[2,4,3],[1,3,4],[1,4,2]],cells:[[0,1,2,3],[1,5,4,9],[3,6,5,7],[2,4,6,8],[0,7,8,9]]},t7=([r,e],[t,n],[i,s],[o,a])=>({vertices:[[e,n,s,a],[e,n,i,a],[e,t,i,a],[e,t,s,a],[r,n,s,a],[r,n,i,a],[r,t,i,a],[r,t,s,a],[e,n,s,o],[e,n,i,o],[e,t,i,o],[e,t,s,o],[r,n,s,o],[r,n,i,o],[r,t,i,o],[r,t,s,o]],faces:[[0,1,2,3],[0,4,5,1],[0,3,7,4],[3,2,6,7],[1,5,6,2],[4,7,6,5],[0,1,9,8],[4,5,13,12],[3,2,10,11],[7,6,14,15],[0,3,11,8],[4,7,15,12],[1,2,10,9],[5,6,14,13],[0,4,12,8],[1,5,13,9],[2,6,14,10],[3,7,15,11],[11,10,9,8],[9,13,12,8],[12,15,11,8],[15,14,10,11],[10,14,13,9],[13,14,15,12]],cells:[[0,1,2,3,4,5],[0,6,12,8,10,18],[1,6,14,7,15,19],[4,12,16,13,15,22],[3,8,16,9,17,21],[2,10,17,11,14,20],[5,7,13,9,11,23],[18,19,20,21,22,23]]}),Mi=t7([-.25,.25],[-.5,.5],[-.75,.75],[-1,1]),ii=r=>t7([-r,r],[-r,r],[-r,r],[-r,r]),bi=ii(1),n7=([r,e],[t,n],[i,s],o)=>({vertices:[[r,t,i,0],[r,t,s,0],[r,n,i,0],[r,n,s,0],[e,t,i,0],[e,t,s,0],[e,n,i,0],[e,n,s,0],[0,0,0,o]],faces:[[1,5,8],[4,5,8],[0,4,8],[0,1,8],[0,1,5,4],[2,6,8],[4,6,8],[0,2,8],[0,2,6,4],[1,3,8],[2,3,8],[0,1,3,2],[5,7,8],[6,7,8],[4,5,7,6],[3,7,8],[2,3,7,6],[1,3,7,5]],cells:[[0,1,2,3,4],[5,6,2,7,8],[9,10,7,3,11],[12,13,6,1,14],[15,13,5,10,16],[15,12,0,9,17],[4,8,11,14,16,17]]}),si=r=>n7([-r,r],[-r,r],[-r,r],r),wi=n7([-.25,.25],[-.5,.5],[-.75,.75],1),Si=si(1),i7=([r,e],[t,n],[i,s],[o,a])=>({vertices:[[0,0,0,o],[r,t,i,0],[r,t,s,0],[r,n,i,0],[r,n,s,0],[e,t,i,0],[e,t,s,0],[e,n,i,0],[e,n,s,0],[0,0,0,a]],faces:[[6,8,9],[7,8,9],[5,7,9],[5,6,9],[5,6,8,7],[4,8,9],[3,7,9],[3,4,9],[3,4,8,7],[2,6,9],[2,4,9],[2,4,8,6],[1,5,9],[1,3,9],[1,3,7,5],[1,2,9],[1,2,6,5],[1,2,4,3],[0,7,8],[0,6,8],[0,5,6],[0,5,7],[0,4,8],[0,3,4],[0,3,7],[0,2,4],[0,2,6],[0,1,3],[0,1,5],[0,1,2]],cells:[[0,1,2,3,4],[5,1,6,7,8],[5,0,9,10,11],[6,2,12,13,14],[9,3,12,15,16],[10,7,13,15,17],[18,19,20,21,4],[18,22,23,24,8],[19,22,25,26,11],[21,24,27,28,14],[20,26,29,28,16],[23,25,29,27,17]]}),ri=r=>i7([-r,r],[-r,r],[-r,r],[-r,r]),Ai=i7([-.25,.25],[-.5,.5],[-.75,.75],[-1,1]),Ti=ri(1),s7=([r,e],[t,n],[i,s],o)=>({vertices:[[r,0,0,0],[0,t,0,0],[0,0,i,0],[0,0,s,0],[0,n,0,0],[e,0,0,0],[0,0,0,o]],faces:[[4,5,6],[3,5,6],[3,4,6],[3,4,5],[2,5,6],[2,4,6],[2,4,5],[1,5,6],[1,3,6],[1,3,5],[1,2,6],[1,2,5],[0,4,6],[0,3,6],[0,3,4],[0,2,6],[0,2,4],[0,1,6],[0,1,3],[0,1,2]],cells:[[0,1,2,3],[0,4,5,6],[1,7,8,9],[4,7,10,11],[2,12,13,14],[5,12,15,16],[8,13,17,18],[10,15,17,19],[3,6,9,11,14,16,18,19]]}),ai=r=>s7([-r,r],[-r,r],[-r,r],r),Ei=s7([-.25,.25],[-.5,.5],[-.75,.75],1),Ci=ai(1),r7=([r,e],[t,n],[i,s],[o,a])=>({vertices:[[r,0,0,0],[0,t,0,0],[0,0,i,0],[0,0,0,o],[0,0,0,a],[0,0,s,0],[0,n,0,0],[e,0,0,0]],faces:[[4,5,6],[3,5,6],[3,4,6],[3,4,5],[2,5,6],[2,4,6],[2,4,5],[1,5,6],[1,3,6],[1,3,5],[1,2,6],[1,2,5],[0,4,6],[0,3,6],[0,3,4],[0,2,6],[0,2,4],[0,1,6],[0,1,3],[0,1,2]],cells:[[0,1,2,3],[0,4,5,6],[1,7,8,9],[4,7,10,11],[2,12,13,14],[5,12,15,16],[8,13,17,18],[10,15,17,19],[3,6,9,11,14,16,18,19]]}),oi=r=>r7([-r,r],[-r,r],[-r,r],[-r,r]),Pi=r7([-.25,.25],[-.5,.5],[-.75,.75],[-1,1]),Li=oi(1);var a7=(r,[e,t,n=16,i=!1,s=!0],[o,a,l=16,c=!1,h=!0])=>{let u=[],d=[],m=[];for(let g=0;g<l;g++){let p=[];for(let f=0;f<n;f++){u.push(r(e+f*(t-e)/(n-(i?1:0)),o+g*(a-o)/(l-(c?1:0))));let x=f+1<n?f+1:0,w=g+1<l?g+1:0;(s||f+1<n)&&(h||g+1<l)&&(d.push([f+g*n,x+g*n,x+w*n,f+w*n]),p.push(d.length-1))}p.length&&m.push(p)}return{vertices:u,faces:d,cells:m}},o7=(r,e,t=32)=>a7((n,i)=>[r*Math.cos(n),r*Math.sin(n),e*Math.cos(i),e*Math.sin(i)],[-Math.PI,Math.PI,t],[-Math.PI,Math.PI,t]),li=(r,e=32)=>o7(r,r,e),Ii=o7(1,.5),Ri=li(1),Di=a7((r,e)=>[Math.cos(r)*Math.sin(e),Math.sin(r)*Math.sin(e),Math.cos(e)*Math.sin(r),Math.cos(e)*Math.cos(r)],[-Math.PI,Math.PI,32],[-Math.PI,Math.PI,32]),y1=(r,[e,t,n=16,i=!1,s=!0],[o,a,l=16,c=!1,h=!0],[u,d,m=16,g=!1,p=!0],f={u:!0,v:!0,w:!0})=>{let x=[],w=[],C=[],b=[],S=[];for(let E=0;E<m;E++){let I=[];for(let y=0;y<l;y++){let T=S[y]||[];for(let F=0;F<n;F++){let N=b[F]||[];x.push(r(e+F*(t-e)/(n-(i?1:0)),o+y*(a-o)/(l-(c?1:0)),u+E*(d-u)/(m-(g?1:0))));let J=F+1<n?F+1:0,n0=y+1<l?y+1:0,R=E+1<m?E+1:0;(s||F+1<n)&&(h||y+1<l)&&(w.push([F+y*n+E*n*l,J+y*n+E*n*l,J+n0*n+E*n*l,F+n0*n+E*n*l]),I.push(w.length-1)),(s||F+1<n)&&(p||E+1<m)&&(w.push([F+y*n+E*n*l,F+y*n+R*n*l,J+y*n+R*n*l,J+y*n+E*n*l]),T.push(w.length-1)),(h||y+1<l)&&(p||E+1<m)&&(w.push([F+y*n+E*n*l,F+y*n+R*n*l,F+n0*n+R*n*l,F+n0*n+E*n*l]),N.push(w.length-1)),b[F]=N}S[y]=T}f.w&&C.push(I)}return f.v&&S.map(E=>C.push(E)),f.u&&b.map(E=>C.push(E)),{vertices:x,faces:w,cells:C}},ci=r=>y1((e,t,n)=>[r*Math.cos(e),r*Math.sin(e)*Math.cos(t),r*Math.sin(e)*Math.sin(t)*Math.cos(n),r*Math.sin(e)*Math.sin(t)*Math.sin(n)],[0,Math.PI,16,!0],[0,2*Math.PI,16],[0,2*Math.PI,16]),Fi=ci(1),hi=(r,e,t)=>y1((n,i,s)=>[r*Math.cos(n),(e+r*Math.sin(n))*Math.cos(i),(t+(e+r*Math.sin(n))*Math.sin(i))*Math.cos(s),(t+(e+r*Math.sin(n))*Math.sin(i))*Math.sin(s)],[0,Math.PI,16,!0],[0,2*Math.PI,16],[0,2*Math.PI,16]),Ni=hi(.25,.5,1),zi=y1((r,e,t)=>[2*Math.cos(r)*Math.cos(e),2*Math.cos(r)*Math.sin(e),2*Math.sin(r),t],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,5]),Bi=y1((r,e,t)=>[t+2*Math.cos(r)*Math.cos(e),t+2*Math.cos(r)*Math.sin(e),t+2*Math.sin(r),t],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,5]),Oi=y1((r,e,t)=>[Math.sin(r)*Math.cos(e),Math.sin(r)*Math.sin(e),Math.cos(r),t],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,2,!0],{u:!0,v:!1,w:!0}),Ui=y1((r,e,t)=>[(1+.5*Math.cos(r))*Math.cos(e),(1+.5*Math.cos(r))*Math.sin(e),.5*Math.cos(r),t],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,2,!0],{u:!0,v:!1,w:!0}),ki=y1((r,e,t)=>[Math.cos(r),Math.sin(r),e,t],[-Math.PI,Math.PI,32,!0],[-1,1,2,!0],[-1,1,2,!0],{u:!1,v:!0,w:!0}),Vi=y1((r,e,t)=>[.25*Math.cos(r)+1*Math.cos(r)*Math.cos(t),.25*Math.sin(r)+1*Math.sin(r)*Math.cos(t),.75*Math.cos(e)+1*Math.cos(e)*Math.sin(t),.75*Math.sin(e)+1*Math.sin(e)*Math.sin(t)],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],{u:!0,v:!1,w:!0}),Gi=y1((r,e,t)=>[.5*Math.cos(r)*Math.cos(e)*Math.cos(t)+1*Math.cos(e)*Math.cos(t),.5*Math.cos(r)*Math.cos(e)*Math.sin(t)+1*Math.cos(e)*Math.sin(t),.5*Math.cos(r)*Math.sin(e)+1*Math.sin(e),.5*Math.sin(r)],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,16,!0]),Hi=y1((r,e,t)=>[.5*Math.cos(r)*Math.cos(e)*Math.cos(t)+1*Math.cos(t),.5*Math.cos(r)*Math.cos(e)*Math.sin(t)+1*Math.sin(t),.5*Math.cos(r)*Math.sin(e),.5*Math.sin(r)],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,16,!0]),Wi=y1((r,e,t)=>[r,e,t,r*e*t],[-1,1,2,!0],[-1,1,2,!0],[-1,1,2,!0]);var K6=class{constructor(e,t,n){this.alive=!0,this.params=t,this.N=t.dimensions,this.vectorSuffix="xyzw",this.len=e.length,this.N>3&&(this.projector=new $6(t.wFov*Math.PI/180,t.w)),this.xyz=new Float32Array(n*3),this.positions=this.N===3?this.xyz:new Float32Array(n*this.N),this.speeds=new Float32Array(this.N*n),this.accelerations=new Float32Array(this.N*n),this.masses=new Float32Array(n),this.temperatures=new Float32Array(n),e.forEach((i,s)=>this.set_orb(s,i))}params_change(e){this.projector&&(this.projector.fov=e.wFov*Math.PI/180,this.projector.w=e.w)}frog_leap(){let e=this.params.simulationSpeed,t=e*.5;for(let n=0,i=this.len;n<i;n++){let s=n*this.N;for(let o=0;o<this.N;o++)this.speeds[s+o]+=this.accelerations[s+o]*t,this.positions[s+o]+=this.speeds[s+o]*e}}aggregateCollisions(e){let t=[];for(let n=0,i=e.length;n<i;n++){let[s,o]=e[n],a=!0;for(let l=0,c=t.length;l<c;l++){let h=t[l],u=h.includes(s),d=h.includes(o);if((u||d)&&(a=!1),u!==d){let m=u?o:s;m>h[0]?h.push(m):h.unshift(m);break}}a&&t.push(s>o?[o,s]:[s,o])}return t}solveCollisions(e){for(let t=0,n=e.length;t<n;t++){let i=e[t],s=i[0],o=s*this.N;for(let a=1,l=i.length;a<l;a++){let c=i[a],h=c*this.N,u=1/(this.masses[s]+this.masses[c]);for(let d=0;d<this.N;d++)this.positions[o+d]=u*(this.positions[o+d]*this.masses[s]+this.positions[h+d]*this.masses[c]),this.speeds[o+d]=u*(this.speeds[o+d]*this.masses[s]+this.speeds[h+d]*this.masses[c]);this.temperatures[s]=u*(this.temperatures[s]*this.masses[s]+this.temperatures[c]*this.masses[c]),this.masses[s]+=this.masses[c]}}}solveEscapes(){let e=[],{escapeDistance:t}=this.params;if(!t)return e;let n=t*t;for(let i=0,s=this.len;i<s;i++){let o=i*this.N,a=0;for(let l=0;l<this.N;l++)a+=this.positions[o+l]*this.positions[o+l];a>n&&e.push(i)}return e}crunchOrbs(e){let t=0,n=0;for(;t+n<this.len;){if(e.includes(t+n)){n+=1;continue}if(n==0){t+=1;continue}let i=t*this.N,s=(t+n)*this.N;for(let o=0;o<this.N;o++)this.positions[i+o]=this.positions[s+o],this.speeds[i+o]=this.speeds[s+o],this.accelerations[i+o]=this.accelerations[s+o];this.temperatures[t]=this.temperatures[t+n],this.masses[t]=this.masses[t+n],t+=1}return this.len-n}solve(e){let t=this.solveEscapes();return e.length&&(e=this.aggregateCollisions(e),e.forEach(n=>{t.push(...n.slice(1))}),this.solveCollisions(e)),t.length&&(this.len=this.crunchOrbs(t)),this.len}async simulate(){return this.solve([])}frog_drop(){let t=this.params.simulationSpeed*.5;for(let n=0,i=this.len;n<i;n++){let s=n*this.N;for(let o=0;o<this.N;o++)this.speeds[s+o]+=this.accelerations[s+o]*t}this.projector&&this.projector.rotate(this.params)}set_orb(e,{position:t,mass:n,speed:i,temperature:s}){let o=e*this.N;for(let a=0;a<this.N;a++){let l=this.vectorSuffix[a];this.positions[o+a]=t[l]||0,this.speeds[o+a]=i[l]||0}this.masses[e]=n,this.temperatures[e]=s}grow(e){if(this.len+e.length>this.temperatures.length){console.warn("Can't grow");return}e.forEach((t,n)=>this.set_orb(this.len+n,t)),this.len+=e.length}shrink(e){if(this.len-e<0){console.warn("Can't shrink");return}this.len-=e}project(){if(this.N!==3){if(this.N===2)for(let e=0,t=this.len;e<t;e++){let n=e*2,i=n+e;this.xyz[i]=this.positions[n],this.xyz[i+1]=this.positions[n+1],this.xyz[i+2]=0}else if(this.N===4)for(let e=0,t=this.len;e<t;e++){let n=e*3,i=n+e,s=this.projector.project([this.positions[i],this.positions[i+1],this.positions[i+2],this.positions[i+3]]);this.xyz[n]=s[0],this.xyz[n+1]=s[1],this.xyz[n+2]=s[2]}}}free(){this.alive=!1,delete this.temperatures,delete this.masses,delete this.accelerations,delete this.speeds,delete this.positions,delete this.xyz}},l7=K6;var j6=class extends l7{compute2(e,t,n,i,s,o,a,l,c,h){t[0]=this.positions[o]-this.positions[i],t[1]=this.positions[o+1]-this.positions[i+1];let u=t[0]*t[0]+t[1]*t[1];l&&u<c&&h.push([n,s]);let d=this.masses[s]/(u+a);e[0]+=t[0]*d,e[1]+=t[1]*d}compute3(e,t,n,i,s,o,a,l,c,h){t[0]=this.positions[o]-this.positions[i],t[1]=this.positions[o+1]-this.positions[i+1],t[2]=this.positions[o+2]-this.positions[i+2];let u=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],d=Math.sqrt(u+a);l&&u<c&&h.push([n,s]);let m=this.masses[s]/(d*d*d);e[0]+=t[0]*m,e[1]+=t[1]*m,e[2]+=t[2]*m}compute4(e,t,n,i,s,o,a,l,c,h){t[0]=this.positions[o]-this.positions[i],t[1]=this.positions[o+1]-this.positions[i+1],t[2]=this.positions[o+2]-this.positions[i+2],t[3]=this.positions[o+3]-this.positions[i+3];let u=t[0]*t[0]+t[1]*t[1]+t[2]*t[2]+t[3]*t[3];l&&u<c&&h.push([n,s]);let d=u+a,m=this.masses[s]/(d*d);e[0]+=t[0]*m,e[1]+=t[1]*m,e[2]+=t[2]*m,e[3]+=t[3]*m}compute(e,t,n,i,s,o,a,l,c){let h=this[`compute${n}`].bind(this),u=new Array(n).fill(0),d=new Array(n).fill(0);for(let m=e,g=t;m<g;m++){let p=m*n;d.fill(0);for(let f=0;f<i;f++){if(m===f)continue;let x=f*n;h(d,u,m,p,f,x,o,a,l,c)}for(let f=0;f<n;f++)this.accelerations[p+f]=d[f]*s}}async simulate(){let{gravitationalConstant:e,softening:t,collisions:n,collisionThreshold:i}=this.params,s=t*t,o=i*i,a=[];return this.compute(0,this.len,this.N,this.len,e,s,n,o,a),this.solve(a)}},c3=j6;onmessage=function(r){let[e,t,n,i,s,o,a,l,c,h,u]=r.data,d=new Float32Array(h),m=new Float32Array(c),g=new Float32Array(u),p=[];c3.prototype.compute.call({positions:d,masses:g,accelerations:m,compute2:c3.prototype.compute2,compute3:c3.prototype.compute3,compute4:c3.prototype.compute4},e,t,i,n,s,o,a,l,p),postMessage([c,e,t,p])};})();
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */

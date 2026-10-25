(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ju="183",dg=0,td=1,fg=2,ja=1,np=2,To=3,Wi=0,_n=1,cn=2,Gi=0,Ur=1,xs=2,nd=3,id=4,pg=5,zs=100,mg=101,gg=102,xg=103,_g=104,vg=200,yg=201,Mg=202,Sg=203,Xc=204,Wc=205,bg=206,Eg=207,Tg=208,wg=209,Ag=210,Rg=211,Cg=212,Pg=213,Lg=214,jc=0,qc=1,Yc=2,Xr=3,$c=4,Kc=5,Zc=6,Jc=7,Qu=0,Ig=1,Dg=2,mi=0,ip=1,sp=2,rp=3,op=4,ap=5,lp=6,cp=7,sd="attached",Ng="detached",up=300,Ys=301,Wr=302,Xl=303,Wl=304,Ml=306,jr=1e3,di=1001,nl=1002,Ot=1003,hp=1004,wo=1005,Gt=1006,qa=1007,Fi=1008,En=1009,dp=1010,fp=1011,Do=1012,eh=1013,xi=1014,Ln=1015,ji=1016,th=1017,nh=1018,No=1020,pp=35902,mp=35899,gp=1021,xp=1022,In=1023,qi=1026,Vs=1027,ih=1028,sh=1029,qr=1030,rh=1031,oh=1033,Ya=33776,$a=33777,Ka=33778,Za=33779,Qc=35840,eu=35841,tu=35842,nu=35843,iu=36196,su=37492,ru=37496,ou=37488,au=37489,lu=37490,cu=37491,uu=37808,hu=37809,du=37810,fu=37811,pu=37812,mu=37813,gu=37814,xu=37815,_u=37816,vu=37817,yu=37818,Mu=37819,Su=37820,bu=37821,Eu=36492,Tu=36494,wu=36495,Au=36283,Ru=36284,Cu=36285,Pu=36286,Uo=2300,Oo=2301,jl=2302,rd=2303,od=2400,ad=2401,ld=2402,Ug=2500,Og=0,_p=1,Lu=2,Fg=3200,ah=0,Bg=1,cs="",$t="srgb",dn="srgb-linear",il="linear",_t="srgb",ar=7680,cd=519,zg=512,kg=513,Gg=514,lh=515,Vg=516,Hg=517,ch=518,Xg=519,Iu=35044,vp=35048,ud="300 es",fi=2e3,Fo=2001;function Wg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function jg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Bo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qg(){const i=Bo("canvas");return i.style.display="block",i}const hd={};function sl(...i){const e="THREE."+i.shift();console.log(e,...i)}function yp(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ne(...i){i=yp(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=yp(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function rl(...i){const e=i.join(" ");e in hd||(hd[e]=!0,Ne(...i))}function Yg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const $g={[jc]:qc,[Yc]:Zc,[$c]:Jc,[Xr]:Kc,[qc]:jc,[Zc]:Yc,[Jc]:$c,[Kc]:Xr};class to{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dd=1234567;const Or=Math.PI/180,Yr=180/Math.PI;function Nn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function uh(i,e){return(i%e+e)%e}function Kg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Zg(i,e,t){return i!==e?(t-i)/(e-i):0}function Co(i,e,t){return(1-t)*i+t*e}function Jg(i,e,t,n){return Co(i,e,1-Math.exp(-t*n))}function Qg(i,e=1){return e-Math.abs(uh(i,e*2)-e)}function e0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function t0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function n0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function i0(i,e){return i+Math.random()*(e-i)}function s0(i){return i*(.5-Math.random())}function r0(i){i!==void 0&&(dd=i);let e=dd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function o0(i){return i*Or}function a0(i){return i*Yr}function l0(i){return(i&i-1)===0&&i!==0}function c0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function u0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function h0(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*u,a*c);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Sn={DEG2RAD:Or,RAD2DEG:Yr,generateUUID:Nn,clamp:st,euclideanModulo:uh,mapLinear:Kg,inverseLerp:Zg,lerp:Co,damp:Jg,pingpong:Qg,smoothstep:e0,smootherstep:t0,randInt:n0,randFloat:i0,randFloatSpread:s0,seededRandom:r0,degToRad:o0,radToDeg:a0,isPowerOfTwo:l0,ceilPowerOfTwo:c0,floorPowerOfTwo:u0,setQuaternionFromProperEuler:h0,normalize:vt,denormalize:Wn};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(h!==x||l!==d||c!==f||u!==p){let m=l*d+c*f+u*p+h*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){const y=Math.acos(m),S=Math.sin(y);g=Math.sin(g*y)/S,a=Math.sin(a*y)/S,l=l*g+d*a,c=c*g+f*a,u=u*g+p*a,h=h*g+x*a}else{l=l*g+d*a,c=c*g+f*a,u=u*g+p*a,h=h*g+x*a;const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ql.copy(this).projectOnVector(e),this.sub(ql)}reflect(e){return this.sub(ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ql=new L,fd=new yi;class Qe{constructor(e,t,n,s,r,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],y=s[1],S=s[4],M=s[7],w=s[2],A=s[5],P=s[8];return r[0]=o*x+a*y+l*w,r[3]=o*m+a*S+l*A,r[6]=o*g+a*M+l*P,r[1]=c*x+u*y+h*w,r[4]=c*m+u*S+h*A,r[7]=c*g+u*M+h*P,r[2]=d*x+f*y+p*w,r[5]=d*m+f*S+p*A,r[8]=d*g+f*M+p*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,p=t*h+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Yl.makeScale(e,t)),this}rotate(e){return this.premultiply(Yl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yl=new Qe,pd=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),md=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function d0(){const i={enabled:!0,workingColorSpace:dn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=Fr(s.r),s.g=Fr(s.g),s.b=Fr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===cs?il:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[dn]:{primaries:e,whitePoint:n,transfer:il,toXYZ:pd,fromXYZ:md,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:pd,fromXYZ:md,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),i}const lt=d0();function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let lr;class f0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{lr===void 0&&(lr=Bo("canvas")),lr.width=e.width,lr.height=e.height;const s=lr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=lr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vi(t[n]/255)*255):t[n]=Vi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let p0=0;class hh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Nn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($l(s[o].image)):r.push($l(s[o]))}else r=$l(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function $l(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?f0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let m0=0;const Kl=new L;class Vt extends to{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=di,s=di,r=Gt,o=Fi,a=In,l=En,c=Vt.DEFAULT_ANISOTROPY,u=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Nn(),this.name="",this.source=new hh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kl).x}get height(){return this.source.getSize(Kl).y}get depth(){return this.source.getSize(Kl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==up)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jr:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jr:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=up;Vt.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,s=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,M=(f+1)/2,w=(g+1)/2,A=(u+d)/4,P=(h+x)/4,_=(p+m)/4;return S>M&&S>w?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=A/n,r=P/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=_/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=P/r,s=_/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(h-x)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class g0 extends to{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Vt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new hh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends g0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Mp extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class x0 extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Je{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,p,x,m){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,p,x,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,p,x,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/cr.setFromMatrixColumn(e,0).length(),r=1/cr.setFromMatrixColumn(e,1).length(),o=1/cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_0,e,v0)}lookAt(e,t,n){const s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),es.crossVectors(n,yn),es.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),es.crossVectors(n,yn)),es.normalize(),oa.crossVectors(yn,es),s[0]=es.x,s[4]=oa.x,s[8]=yn.x,s[1]=es.y,s[5]=oa.y,s[9]=yn.y,s[2]=es.z,s[6]=oa.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],y=n[3],S=n[7],M=n[11],w=n[15],A=s[0],P=s[4],_=s[8],E=s[12],z=s[1],C=s[5],F=s[9],k=s[13],X=s[2],B=s[6],G=s[10],N=s[14],Q=s[3],K=s[7],fe=s[11],xe=s[15];return r[0]=o*A+a*z+l*X+c*Q,r[4]=o*P+a*C+l*B+c*K,r[8]=o*_+a*F+l*G+c*fe,r[12]=o*E+a*k+l*N+c*xe,r[1]=u*A+h*z+d*X+f*Q,r[5]=u*P+h*C+d*B+f*K,r[9]=u*_+h*F+d*G+f*fe,r[13]=u*E+h*k+d*N+f*xe,r[2]=p*A+x*z+m*X+g*Q,r[6]=p*P+x*C+m*B+g*K,r[10]=p*_+x*F+m*G+g*fe,r[14]=p*E+x*k+m*N+g*xe,r[3]=y*A+S*z+M*X+w*Q,r[7]=y*P+S*C+M*B+w*K,r[11]=y*_+S*F+M*G+w*fe,r[15]=y*E+S*k+M*N+w*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],y=l*f-c*d,S=a*f-c*h,M=a*d-l*h,w=o*f-c*u,A=o*d-l*u,P=o*h-a*u;return t*(x*y-m*S+g*M)-n*(p*y-m*w+g*A)+s*(p*S-x*w+g*P)-r*(p*M-x*A+m*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=t*a-n*o,S=t*l-s*o,M=t*c-r*o,w=n*l-s*a,A=n*c-r*a,P=s*c-r*l,_=u*x-h*p,E=u*m-d*p,z=u*g-f*p,C=h*m-d*x,F=h*g-f*x,k=d*g-f*m,X=y*k-S*F+M*C+w*z-A*E+P*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/X;return e[0]=(a*k-l*F+c*C)*B,e[1]=(s*F-n*k-r*C)*B,e[2]=(x*P-m*A+g*w)*B,e[3]=(d*A-h*P-f*w)*B,e[4]=(l*z-o*k-c*E)*B,e[5]=(t*k-s*z+r*E)*B,e[6]=(m*M-p*P-g*S)*B,e[7]=(u*P-d*M+f*S)*B,e[8]=(o*F-a*z+c*_)*B,e[9]=(n*z-t*F-r*_)*B,e[10]=(p*A-x*M+g*y)*B,e[11]=(h*M-u*A-f*y)*B,e[12]=(a*E-o*C-l*_)*B,e[13]=(t*C-n*E+s*_)*B,e[14]=(x*S-p*w-m*y)*B,e[15]=(u*w-h*S+d*y)*B,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,p=r*h,x=o*u,m=o*h,g=a*h,y=l*c,S=l*u,M=l*h,w=n.x,A=n.y,P=n.z;return s[0]=(1-(x+g))*w,s[1]=(f+M)*w,s[2]=(p-S)*w,s[3]=0,s[4]=(f-M)*A,s[5]=(1-(d+g))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(p+S)*P,s[9]=(m-y)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let o=cr.set(s[0],s[1],s[2]).length();const a=cr.set(s[4],s[5],s[6]).length(),l=cr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Vn.copy(this);const c=1/o,u=1/a,h=1/l;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=h,Vn.elements[9]*=h,Vn.elements[10]*=h,t.setFromRotationMatrix(Vn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=fi,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===fi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Fo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=fi,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===fi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Fo)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const cr=new L,Vn=new Je,_0=new L(0,0,0),v0=new L(1,1,1),es=new L,oa=new L,yn=new L,gd=new Je,xd=new yi;class Kn{constructor(e=0,t=0,n=0,s=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xd.setFromEuler(this),this.setFromQuaternion(xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class Sp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let y0=0;const _d=new L,ur=new yi,Ri=new Je,aa=new L,uo=new L,M0=new L,S0=new yi,vd=new L(1,0,0),yd=new L(0,1,0),Md=new L(0,0,1),Sd={type:"added"},b0={type:"removed"},hr={type:"childadded",child:null},Zl={type:"childremoved",child:null};class Tt extends to{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new L,t=new Kn,n=new yi,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new Qe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(vd,e)}rotateY(e){return this.rotateOnAxis(yd,e)}rotateZ(e){return this.rotateOnAxis(Md,e)}translateOnAxis(e,t){return _d.copy(e).applyQuaternion(this.quaternion),this.position.add(_d.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vd,e)}translateY(e){return this.translateOnAxis(yd,e)}translateZ(e){return this.translateOnAxis(Md,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?aa.copy(e):aa.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(uo,aa,this.up):Ri.lookAt(aa,uo,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),ur.setFromRotationMatrix(Ri),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sd),hr.child=e,this.dispatchEvent(hr),hr.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(b0),Zl.child=e,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sd),hr.child=e,this.dispatchEvent(hr),hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,e,M0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,S0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Tt.DEFAULT_UP=new L(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hn extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E0={type:"move"};class Jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(E0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},la={h:0,s:0,l:0};function Ql(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=uh(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ql(o,r,e+1/3),this.g=Ql(o,r,e),this.b=Ql(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=$t){function n(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const n=bp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return lt.workingToColorSpace(nn.copy(this),e),Math.round(st(nn.r*255,0,255))*65536+Math.round(st(nn.g*255,0,255))*256+Math.round(st(nn.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(nn.copy(this),t);const n=nn.r,s=nn.g,r=nn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=$t){lt.workingToColorSpace(nn.copy(this),e);const t=nn.r,n=nn.g,s=nn.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(la);const n=Co(ts.h,la.h,t),s=Co(ts.s,la.s,t),r=Co(ts.l,la.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new ze;ze.NAMES=bp;class dh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new dh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ep extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Hn=new L,Ci=new L,ec=new L,Pi=new L,dr=new L,fr=new L,bd=new L,tc=new L,nc=new L,ic=new L,sc=new Ct,rc=new Ct,oc=new Ct;class Tn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hn.subVectors(e,t),s.cross(Hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Hn.subVectors(s,t),Ci.subVectors(n,t),ec.subVectors(e,t);const o=Hn.dot(Hn),a=Hn.dot(Ci),l=Hn.dot(ec),c=Ci.dot(Ci),u=Ci.dot(ec),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return sc.setScalar(0),rc.setScalar(0),oc.setScalar(0),sc.fromBufferAttribute(e,t),rc.fromBufferAttribute(e,n),oc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(sc,r.x),o.addScaledVector(rc,r.y),o.addScaledVector(oc,r.z),o}static isFrontFacing(e,t,n,s){return Hn.subVectors(n,t),Ci.subVectors(e,t),Hn.cross(Ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),Hn.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;dr.subVectors(s,n),fr.subVectors(r,n),tc.subVectors(e,n);const l=dr.dot(tc),c=fr.dot(tc);if(l<=0&&c<=0)return t.copy(n);nc.subVectors(e,s);const u=dr.dot(nc),h=fr.dot(nc);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(dr,o);ic.subVectors(e,r);const f=dr.dot(ic),p=fr.dot(ic);if(p>=0&&f<=p)return t.copy(r);const x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(fr,a);const m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return bd.subVectors(r,s),a=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(bd,a);const g=1/(m+x+d);return o=x*g,a=d*g,t.copy(n).addScaledVector(dr,o).addScaledVector(fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Mi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(e.matrixWorld),this.union(ca)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ho),ua.subVectors(this.max,ho),pr.subVectors(e.a,ho),mr.subVectors(e.b,ho),gr.subVectors(e.c,ho),ns.subVectors(mr,pr),is.subVectors(gr,mr),Rs.subVectors(pr,gr);let t=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Rs.z,Rs.y,ns.z,0,-ns.x,is.z,0,-is.x,Rs.z,0,-Rs.x,-ns.y,ns.x,0,-is.y,is.x,0,-Rs.y,Rs.x,0];return!ac(t,pr,mr,gr,ua)||(t=[1,0,0,0,1,0,0,0,1],!ac(t,pr,mr,gr,ua))?!1:(ha.crossVectors(ns,is),t=[ha.x,ha.y,ha.z],ac(t,pr,mr,gr,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Li=[new L,new L,new L,new L,new L,new L,new L,new L],Xn=new L,ca=new Mi,pr=new L,mr=new L,gr=new L,ns=new L,is=new L,Rs=new L,ho=new L,ua=new L,ha=new L,Cs=new L;function ac(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Cs.fromArray(i,r);const a=s.x*Math.abs(Cs.x)+s.y*Math.abs(Cs.y)+s.z*Math.abs(Cs.z),l=e.dot(Cs),c=t.dot(Cs),u=n.dot(Cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Bt=new L,da=new re;let T0=0;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:T0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Iu,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)da.fromBufferAttribute(this,t),da.applyMatrix3(e),this.setXY(t,da.x,da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Iu&&(e.usage=this.usage),e}}class Tp extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wp extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wt extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const w0=new Mi,fo=new L,lc=new L;class Si{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):w0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);const t=fo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(lc)),this.expandByPoint(fo.copy(e.center).sub(lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let A0=0;const Cn=new Je,cc=new Tt,xr=new L,Mn=new Mi,po=new Mi,Yt=new L;class Nt extends to{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wg(e)?wp:Tp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return cc.lookAt(e),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];po.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Mn.min,po.min),Mn.expandByPoint(Yt),Yt.addVectors(Mn.max,po.max),Mn.expandByPoint(Yt)):(Mn.expandByPoint(po.min),Mn.expandByPoint(po.max))}Mn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(xr.fromBufferAttribute(e,c),Yt.add(xr)),s=Math.max(s,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new L,l[_]=new L;const c=new L,u=new L,h=new L,d=new re,f=new re,p=new re,x=new L,m=new L;function g(_,E,z){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,z),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,z),u.sub(c),h.sub(c),f.sub(d),p.sub(d);const C=1/(f.x*p.y-p.x*f.y);isFinite(C)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(C),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(C),a[_].add(x),a[E].add(x),a[z].add(x),l[_].add(m),l[E].add(m),l[z].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,E=y.length;_<E;++_){const z=y[_],C=z.start,F=z.count;for(let k=C,X=C+F;k<X;k+=3)g(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const S=new L,M=new L,w=new L,A=new L;function P(_){w.fromBufferAttribute(s,_),A.copy(w);const E=a[_];S.copy(E),S.sub(w.multiplyScalar(w.dot(E))).normalize(),M.crossVectors(A,E);const C=M.dot(l[_])<0?-1:1;o.setXYZW(_,S.x,S.y,S.z,C)}for(let _=0,E=y.length;_<E;++_){const z=y[_],C=z.start,F=z.count;for(let k=C,X=C+F;k<X;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let g=0;g<u;g++)d[p++]=c[f++]}return new Zt(d,u,h)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ap{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Iu,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new L;class zo{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){sl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){sl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let R0=0;class Un extends to{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=Ur,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=Wc,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(n.blending=this.blending),this.side!==Wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xc&&(n.blendSrc=this.blendSrc),this.blendDst!==Wc&&(n.blendDst=this.blendDst),this.blendEquation!==zs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rp extends Un{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _r;const mo=new L,vr=new L,yr=new L,Mr=new re,go=new re,Cp=new Je,fa=new L,xo=new L,pa=new L,Ed=new re,uc=new re,Td=new re;class C0 extends Tt{constructor(e=new Rp){if(super(),this.isSprite=!0,this.type="Sprite",_r===void 0){_r=new Nt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ap(t,5);_r.setIndex([0,1,2,0,2,3]),_r.setAttribute("position",new zo(n,3,0,!1)),_r.setAttribute("uv",new zo(n,2,3,!1))}this.geometry=_r,this.material=e,this.center=new re(.5,.5),this.count=1}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vr.setFromMatrixScale(this.matrixWorld),Cp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vr.multiplyScalar(-yr.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;ma(fa.set(-.5,-.5,0),yr,o,vr,s,r),ma(xo.set(.5,-.5,0),yr,o,vr,s,r),ma(pa.set(.5,.5,0),yr,o,vr,s,r),Ed.set(0,0),uc.set(1,0),Td.set(1,1);let a=e.ray.intersectTriangle(fa,xo,pa,!1,mo);if(a===null&&(ma(xo.set(-.5,.5,0),yr,o,vr,s,r),uc.set(0,1),a=e.ray.intersectTriangle(fa,pa,xo,!1,mo),a===null))return;const l=e.ray.origin.distanceTo(mo);l<e.near||l>e.far||t.push({distance:l,point:mo.clone(),uv:Tn.getInterpolation(mo,fa,xo,pa,Ed,uc,Td,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ma(i,e,t,n,s,r){Mr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(go.x=r*Mr.x-s*Mr.y,go.y=s*Mr.x+r*Mr.y):go.copy(Mr),i.copy(e),i.x+=go.x,i.y+=go.y,i.applyMatrix4(Cp)}const Ii=new L,hc=new L,ga=new L,ss=new L,dc=new L,xa=new L,fc=new L;class Sl{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){hc.copy(e).add(t).multiplyScalar(.5),ga.copy(t).sub(e).normalize(),ss.copy(this.origin).sub(hc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ga),a=ss.dot(this.direction),l=-ss.dot(ga),c=ss.lengthSq(),u=Math.abs(1-o*o);let h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=r*u,h>=0)if(d>=-p)if(d<=p){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(hc).addScaledVector(ga,d),f}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const n=Ii.dot(this.direction),s=Ii.dot(Ii)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,n,s,r){dc.subVectors(t,e),xa.subVectors(n,e),fc.crossVectors(dc,xa);let o=this.direction.dot(fc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ss.subVectors(this.origin,e);const l=a*this.direction.dot(xa.crossVectors(ss,xa));if(l<0)return null;const c=a*this.direction.dot(dc.cross(ss));if(c<0||l+c>o)return null;const u=-a*ss.dot(fc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wd=new Je,Ps=new Sl,_a=new Si,Ad=new L,va=new L,ya=new L,Ma=new L,pc=new L,Sa=new L,Rd=new L,ba=new L;class gt extends Tt{constructor(e=new Nt,t=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Sa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(pc.fromBufferAttribute(h,e),o?Sa.addScaledVector(pc,u):Sa.addScaledVector(pc.sub(t),u))}t.add(Sa)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(r),Ps.copy(e.ray).recast(e.near),!(_a.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(_a,Ad)===null||Ps.origin.distanceToSquared(Ad)>(e.far-e.near)**2))&&(wd.copy(r).invert(),Ps.copy(e.ray).applyMatrix4(wd),!(n.boundingBox!==null&&Ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ps)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){const m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,w=S;M<w;M+=3){const A=a.getX(M),P=a.getX(M+1),_=a.getX(M+2);s=Ea(this,g,e,n,c,u,h,A,P,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const y=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);s=Ea(this,o,e,n,c,u,h,y,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){const m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,w=S;M<w;M+=3){const A=M,P=M+1,_=M+2;s=Ea(this,g,e,n,c,u,h,A,P,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const y=m,S=m+1,M=m+2;s=Ea(this,o,e,n,c,u,h,y,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function P0(i,e,t,n,s,r,o,a){let l;if(e.side===_n?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Wi,a),l===null)return null;ba.copy(a),ba.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ba);return c<t.near||c>t.far?null:{distance:c,point:ba.clone(),object:i}}function Ea(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,va),i.getVertexPosition(l,ya),i.getVertexPosition(c,Ma);const u=P0(i,e,t,n,va,ya,Ma,Rd);if(u){const h=new L;Tn.getBarycoord(Rd,va,ya,Ma,h),s&&(u.uv=Tn.getInterpolatedAttribute(s,a,l,c,h,new re)),r&&(u.uv1=Tn.getInterpolatedAttribute(r,a,l,c,h,new re)),o&&(u.normal=Tn.getInterpolatedAttribute(o,a,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};Tn.getNormal(va,ya,Ma,d.normal),u.face=d,u.barycoord=h}return u}const Cd=new L,Pd=new Ct,Ld=new Ct,L0=new L,Id=new Je,Ta=new L,mc=new Si,Dd=new Je,gc=new Sl;class I0 extends gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sd,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ta),this.boundingBox.expandByPoint(Ta)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Si),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ta),this.boundingSphere.expandByPoint(Ta)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mc.copy(this.boundingSphere),mc.applyMatrix4(s),e.ray.intersectsSphere(mc)!==!1&&(Dd.copy(s).invert(),gc.copy(e.ray).applyMatrix4(Dd),!(this.boundingBox!==null&&gc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ct,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ng?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ne("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Pd.fromBufferAttribute(s.attributes.skinIndex,e),Ld.fromBufferAttribute(s.attributes.skinWeight,e),Cd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Ld.getComponent(r);if(o!==0){const a=Pd.getComponent(r);Id.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(L0.copy(Cd).applyMatrix4(Id),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Pp extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class fh extends Vt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Ot,u=Ot,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nd=new Je,D0=new Je;class ph{constructor(e=[],t=[]){this.uuid=Nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ne("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:D0;Nd.multiplyMatrices(a,t[r]),Nd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new ph(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new fh(t,e,e,In,Ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(Ne("Skeleton: No bone found with UUID:",r),o=new Pp),this.bones.push(o),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Du extends Zt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Sr=new Je,Ud=new Je,wa=[],Od=new Mi,N0=new Je,_o=new gt,vo=new Si;class mh extends gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Du(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,N0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sr),Od.copy(e.boundingBox).applyMatrix4(Sr),this.boundingBox.union(Od)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sr),vo.copy(e.boundingSphere).applyMatrix4(Sr),this.boundingSphere.union(vo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(_o.geometry=this.geometry,_o.material=this.material,_o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vo.copy(this.boundingSphere),vo.applyMatrix4(n),e.ray.intersectsSphere(vo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Sr),Ud.multiplyMatrices(n,Sr),_o.matrixWorld=Ud,_o.raycast(e,wa);for(let o=0,a=wa.length;o<a;o++){const l=wa[o];l.instanceId=r,l.object=this,t.push(l)}wa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Du(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fh(new Float32Array(s*this.count),s,this.count,ih,Ln));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const xc=new L,U0=new L,O0=new Qe;class Fs{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=xc.subVectors(n,t).cross(U0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||O0.getNormalMatrix(e),s=this.coplanarPoint(xc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new Si,F0=new re(.5,.5),Aa=new L;class gh{constructor(e=new Fs,t=new Fs,n=new Fs,s=new Fs,r=new Fs,o=new Fs){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fi,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],S=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-o,f-u,g-p,w-y).normalize(),s[1].setComponents(c+o,f+u,g+p,w+y).normalize(),s[2].setComponents(c+a,f+h,g+x,w+S).normalize(),s[3].setComponents(c-a,f-h,g-x,w-S).normalize(),n)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,f-d,g-m,w-M).normalize();else if(s[4].setComponents(c-l,f-d,g-m,w-M).normalize(),t===fi)s[5].setComponents(c+l,f+d,g+m,w+M).normalize();else if(t===Fo)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);const t=F0.distanceTo(e.center);return Ls.radius=.7071067811865476+t,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Aa.x=s.normal.x>0?e.max.x:e.min.x,Aa.y=s.normal.y>0?e.max.y:e.min.y,Aa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yi extends Un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ol=new L,al=new L,Fd=new Je,yo=new Sl,Ra=new Si,_c=new L,Bd=new L;class bl extends Tt{constructor(e=new Nt,t=new Yi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ol.fromBufferAttribute(t,s-1),al.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ol.distanceTo(al);e.setAttribute("lineDistance",new wt(n,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,e.ray.intersectsSphere(Ra)===!1)return;Fd.copy(s).invert(),yo.copy(e.ray).applyMatrix4(Fd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){const g=u.getX(x),y=u.getX(x+1),S=Ca(this,e,yo,l,g,y,x);S&&t.push(S)}if(this.isLineLoop){const x=u.getX(p-1),m=u.getX(f),g=Ca(this,e,yo,l,x,m,p-1);g&&t.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){const g=Ca(this,e,yo,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){const x=Ca(this,e,yo,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ca(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(ol.fromBufferAttribute(a,s),al.fromBufferAttribute(a,r),t.distanceSqToSegment(ol,al,_c,Bd)>n)return;_c.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(_c);if(!(c<e.near||c>e.far))return{distance:c,point:Bd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const zd=new L,kd=new L;class $s extends bl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)zd.fromBufferAttribute(t,s),kd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zd.distanceTo(kd);e.setAttribute("lineDistance",new wt(n,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class B0 extends bl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class xh extends Un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gd=new Je,Nu=new Sl,Pa=new Si,La=new L;class Lp extends Tt{constructor(e=new Nt,t=new xh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(s),Pa.radius+=r,e.ray.intersectsSphere(Pa)===!1)return;Gd.copy(s).invert(),Nu.copy(e.ray).applyMatrix4(Gd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,x=f;p<x;p++){const m=c.getX(p);La.fromBufferAttribute(h,m),Vd(La,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,x=f;p<x;p++)La.fromBufferAttribute(h,p),Vd(La,p,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Vd(i,e,t,n,s,r,o){const a=Nu.distanceSqToPoint(i);if(a<t){const l=new L;Nu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ip extends Vt{constructor(e=[],t=Ys,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dp extends Vt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ko extends Vt{constructor(e,t,n=xi,s,r,o,a=Ot,l=Ot,c,u=qi,h=1){if(u!==qi&&u!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class z0 extends ko{constructor(e,t=xi,n=Ys,s,r,o=Ot,a=Ot,l,c=qi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Np extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ys extends Nt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(h,2));function p(x,m,g,y,S,M,w,A,P,_,E){const z=M/P,C=w/_,F=M/2,k=w/2,X=A/2,B=P+1,G=_+1;let N=0,Q=0;const K=new L;for(let fe=0;fe<G;fe++){const xe=fe*C-k;for(let pe=0;pe<B;pe++){const Ve=pe*z-F;K[x]=Ve*y,K[m]=xe*S,K[g]=X,c.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[g]=A>0?1:-1,u.push(K.x,K.y,K.z),h.push(pe/P),h.push(1-fe/_),N+=1}}for(let fe=0;fe<_;fe++)for(let xe=0;xe<P;xe++){const pe=d+xe+B*fe,Ve=d+xe+B*(fe+1),ut=d+(xe+1)+B*(fe+1),ct=d+(xe+1)+B*fe;l.push(pe,Ve,ct),l.push(Ve,ut,ct),Q+=6}a.addGroup(f,Q,E),f+=Q,d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Wo extends Nt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let p=0;const x=[],m=n/2;let g=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new wt(h,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(f,2));function y(){const M=new L,w=new L;let A=0;const P=(t-e)/n;for(let _=0;_<=r;_++){const E=[],z=_/r,C=z*(t-e)+e;for(let F=0;F<=s;F++){const k=F/s,X=k*l+a,B=Math.sin(X),G=Math.cos(X);w.x=C*B,w.y=-z*n+m,w.z=C*G,h.push(w.x,w.y,w.z),M.set(B,P,G).normalize(),d.push(M.x,M.y,M.z),f.push(k,1-z),E.push(p++)}x.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){const z=x[E][_],C=x[E+1][_],F=x[E+1][_+1],k=x[E][_+1];(e>0||E!==0)&&(u.push(z,C,k),A+=3),(t>0||E!==r-1)&&(u.push(C,F,k),A+=3)}c.addGroup(g,A,0),g+=A}function S(M){const w=p,A=new re,P=new L;let _=0;const E=M===!0?e:t,z=M===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*z,0),d.push(0,z,0),f.push(.5,.5),p++;const C=p;for(let F=0;F<=s;F++){const X=F/s*l+a,B=Math.cos(X),G=Math.sin(X);P.x=E*G,P.y=m*z,P.z=E*B,h.push(P.x,P.y,P.z),d.push(0,z,0),A.x=B*.5+.5,A.y=G*.5*z+.5,f.push(A.x,A.y),p++}for(let F=0;F<s;F++){const k=w+F,X=C+F;M===!0?u.push(X,X+1,k):u.push(X+1,X,k),_+=3}c.addGroup(g,_,M===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ll extends Wo{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ll(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class El extends Nt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new wt(r,3)),this.setAttribute("normal",new wt(r.slice(),3)),this.setAttribute("uv",new wt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const S=new L,M=new L,w=new L;for(let A=0;A<t.length;A+=3)f(t[A+0],S),f(t[A+1],M),f(t[A+2],w),l(S,M,w,y)}function l(y,S,M,w){const A=w+1,P=[];for(let _=0;_<=A;_++){P[_]=[];const E=y.clone().lerp(M,_/A),z=S.clone().lerp(M,_/A),C=A-_;for(let F=0;F<=C;F++)F===0&&_===A?P[_][F]=E:P[_][F]=E.clone().lerp(z,F/C)}for(let _=0;_<A;_++)for(let E=0;E<2*(A-_)-1;E++){const z=Math.floor(E/2);E%2===0?(d(P[_][z+1]),d(P[_+1][z]),d(P[_][z])):(d(P[_][z+1]),d(P[_+1][z+1]),d(P[_+1][z]))}}function c(y){const S=new L;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(y),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function u(){const y=new L;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const M=m(y)/2/Math.PI+.5,w=g(y)/Math.PI+.5;o.push(M,1-w)}p(),h()}function h(){for(let y=0;y<o.length;y+=6){const S=o[y+0],M=o[y+2],w=o[y+4],A=Math.max(S,M,w),P=Math.min(S,M,w);A>.9&&P<.1&&(S<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,S){const M=y*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}function p(){const y=new L,S=new L,M=new L,w=new L,A=new re,P=new re,_=new re;for(let E=0,z=0;E<r.length;E+=9,z+=6){y.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),A.set(o[z+0],o[z+1]),P.set(o[z+2],o[z+3]),_.set(o[z+4],o[z+5]),w.copy(y).add(S).add(M).divideScalar(3);const C=m(w);x(A,z+0,y,C),x(P,z+2,S,C),x(_,z+4,M,C)}}function x(y,S,M,w){w<0&&y.x===1&&(o[S]=y.x-1),M.x===0&&M.z===0&&(o[S]=w/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.vertices,e.indices,e.radius,e.detail)}}const Ia=new L,Da=new L,vc=new L,Na=new Tn;class Ks extends Nt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Or*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:x,b:m,c:g}=Na;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),Na.getNormal(vc),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const S=(y+1)%3,M=h[y],w=h[S],A=Na[u[y]],P=Na[u[S]],_=`${M}_${w}`,E=`${w}_${M}`;E in d&&d[E]?(vc.dot(d[E].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(P.x,P.y,P.z)),d[E]=null):_ in d||(d[_]={index0:c[y],index1:c[S],normal:vc.clone()})}}for(const p in d)if(d[p]){const{index0:x,index1:m}=d[p];Ia.fromBufferAttribute(a,x),Da.fromBufferAttribute(a,m),f.push(Ia.x,Ia.y,Ia.z),f.push(Da.x,Da.y,Da.z)}this.setAttribute("position",new wt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ne("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new re:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,s=[],r=[],o=[],a=new L,l=new Je;for(let f=0;f<=e;f++){const p=f/e;s[f]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(st(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(st(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class _h extends bi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class k0 extends _h{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function vh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Ua=new L,yc=new vh,Mc=new vh,Sc=new vh;class G0 extends bi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Ua.subVectors(s[0],s[1]).add(s[0]),c=Ua);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ua.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ua),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),yc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,x,m),Mc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,x,m),Sc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,x,m)}else this.curveType==="catmullrom"&&(yc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Mc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Sc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(yc.calc(l),Mc.calc(l),Sc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Hd(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function V0(i,e){const t=1-i;return t*t*e}function H0(i,e){return 2*(1-i)*i*e}function X0(i,e){return i*i*e}function Po(i,e,t,n){return V0(i,e)+H0(i,t)+X0(i,n)}function W0(i,e){const t=1-i;return t*t*t*e}function j0(i,e){const t=1-i;return 3*t*t*i*e}function q0(i,e){return 3*(1-i)*i*i*e}function Y0(i,e){return i*i*i*e}function Lo(i,e,t,n,s){return W0(i,e)+j0(i,t)+q0(i,n)+Y0(i,s)}class Up extends bi{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lo(e,s.x,r.x,o.x,a.x),Lo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $0 extends bi{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lo(e,s.x,r.x,o.x,a.x),Lo(e,s.y,r.y,o.y,a.y),Lo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Op extends bi{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class K0 extends bi{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fp extends bi{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Po(e,s.x,r.x,o.x),Po(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Z0 extends bi{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Po(e,s.x,r.x,o.x),Po(e,s.y,r.y,o.y),Po(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bp extends bi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Hd(a,l.x,c.x,u.x,h.x),Hd(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new re().fromArray(s))}return this}}var Uu=Object.freeze({__proto__:null,ArcCurve:k0,CatmullRomCurve3:G0,CubicBezierCurve:Up,CubicBezierCurve3:$0,EllipseCurve:_h,LineCurve:Op,LineCurve3:K0,QuadraticBezierCurve:Fp,QuadraticBezierCurve3:Z0,SplineCurve:Bp});class J0 extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Uu[s.type]().fromJSON(s))}return this}}class Xd extends J0{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Op(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Fp(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Up(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Bp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new _h(e,t,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class zp extends Xd{constructor(e){super(e),this.uuid=Nn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Xd().fromJSON(s))}return this}}function Q0(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=kp(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=sx(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let u=a,h=l;for(let d=t;d<s;d+=t){const f=i[d],p=i[d+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Go(r,o,t,a,l,c,0),o}function kp(i,e,t,n,s){let r;if(s===mx(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Wd(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Wd(o/n|0,i[o],i[o+1],r);return r&&$r(r,r.next)&&(Ho(r),r=r.next),r}function Zs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&($r(t,t.next)||It(t.prev,t,t.next)===0)){if(Ho(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Go(i,e,t,n,s,r,o){if(!i)return;!o&&r&&cx(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?tx(i,n,s,r):ex(i)){e.push(l.i,i.i,c.i),Ho(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=nx(Zs(i),e),Go(i,e,t,n,s,r,2)):o===2&&ix(i,e,t,n,s,r):Go(Zs(i),e,t,n,s,r,1);break}}}function ex(i){const e=i.prev,t=i,n=i.next;if(It(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c);let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Ao(s,a,r,l,o,c,p.x,p.y)&&It(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function tx(i,e,t,n){const s=i.prev,r=i,o=i.next;if(It(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(u,h,d),x=Math.max(a,l,c),m=Math.max(u,h,d),g=Ou(f,p,e,t,n),y=Ou(x,m,e,t,n);let S=i.prevZ,M=i.nextZ;for(;S&&S.z>=g&&M&&M.z<=y;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&Ao(a,u,l,h,c,d,S.x,S.y)&&It(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&Ao(a,u,l,h,c,d,M.x,M.y)&&It(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&Ao(a,u,l,h,c,d,S.x,S.y)&&It(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&Ao(a,u,l,h,c,d,M.x,M.y)&&It(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function nx(i,e){let t=i;do{const n=t.prev,s=t.next.next;!$r(n,s)&&Vp(n,t,t.next,s)&&Vo(n,s)&&Vo(s,n)&&(e.push(n.i,t.i,s.i),Ho(t),Ho(t.next),t=i=s),t=t.next}while(t!==i);return Zs(t)}function ix(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&dx(o,a)){let l=Hp(o,a);o=Zs(o,o.next),l=Zs(l,l.next),Go(o,e,t,n,s,r,0),Go(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function sx(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=kp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(hx(c))}s.sort(rx);for(let r=0;r<s.length;r++)t=ox(s[r],t);return t}function rx(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ox(i,e){const t=ax(i,e);if(!t)return e;const n=Hp(t,i);return Zs(n,n.next),Zs(t,t.next)}function ax(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if($r(i,t))return t;do{if($r(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Gp(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const h=Math.abs(s-t.y)/(n-t.x);Vo(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&lx(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function lx(i,e){return It(i.prev,i,e.prev)<0&&It(e.next,i,i.next)<0}function cx(i,e,t,n){let s=i;do s.z===0&&(s.z=Ou(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ux(s)}function ux(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Ou(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function hx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Gp(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Ao(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Gp(i,e,t,n,s,r,o,a)}function dx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!fx(i,e)&&(Vo(i,e)&&Vo(e,i)&&px(i,e)&&(It(i.prev,i,e.prev)||It(i,e.prev,e))||$r(i,e)&&It(i.prev,i,i.next)>0&&It(e.prev,e,e.next)>0)}function It(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function $r(i,e){return i.x===e.x&&i.y===e.y}function Vp(i,e,t,n){const s=Fa(It(i,e,t)),r=Fa(It(i,e,n)),o=Fa(It(t,n,i)),a=Fa(It(t,n,e));return!!(s!==r&&o!==a||s===0&&Oa(i,t,e)||r===0&&Oa(i,n,e)||o===0&&Oa(t,i,n)||a===0&&Oa(t,e,n))}function Oa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Fa(i){return i>0?1:i<0?-1:0}function fx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Vp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Vo(i,e){return It(i.prev,i,i.next)<0?It(i,e,i.next)>=0&&It(i,i.prev,e)>=0:It(i,e,i.prev)<0||It(i,i.next,e)<0}function px(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Hp(i,e){const t=Fu(i.i,i.x,i.y),n=Fu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Wd(i,e,t,n){const s=Fu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ho(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class gx{static triangulate(e,t,n=2){return Q0(e,t,n)}}class Lr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Lr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];jd(e),qd(n,e);let o=e.length;t.forEach(jd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,qd(n,t[l]);const a=gx.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function jd(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function qd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class yh extends Nt{constructor(e=new zp([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new wt(s,3)),this.setAttribute("uv",new wt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:xx;let S,M=!1,w,A,P,_;if(g){S=g.getSpacedPoints(u),M=!0,d=!1;const Z=g.isCatmullRomCurve3?g.closed:!1;w=g.computeFrenetFrames(u,Z),A=new L,P=new L,_=new L}d||(m=0,f=0,p=0,x=0);const E=a.extractPoints(c);let z=E.shape;const C=E.holes;if(!Lr.isClockWise(z)){z=z.reverse();for(let Z=0,ie=C.length;Z<ie;Z++){const ee=C[Z];Lr.isClockWise(ee)&&(C[Z]=ee.reverse())}}function k(Z){const ee=10000000000000001e-36;let me=Z[0];for(let R=1;R<=Z.length;R++){const Ge=R%Z.length,ye=Z[Ge],He=ye.x-me.x,ue=ye.y-me.y,T=He*He+ue*ue,v=Math.max(Math.abs(ye.x),Math.abs(ye.y),Math.abs(me.x),Math.abs(me.y)),D=ee*v*v;if(T<=D){Z.splice(Ge,1),R--;continue}me=ye}}k(z),C.forEach(k);const X=C.length,B=z;for(let Z=0;Z<X;Z++){const ie=C[Z];z=z.concat(ie)}function G(Z,ie,ee){return ie||je("ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(ie,ee)}const N=z.length;function Q(Z,ie,ee){let me,R,Ge;const ye=Z.x-ie.x,He=Z.y-ie.y,ue=ee.x-Z.x,T=ee.y-Z.y,v=ye*ye+He*He,D=ye*T-He*ue;if(Math.abs(D)>Number.EPSILON){const j=Math.sqrt(v),J=Math.sqrt(ue*ue+T*T),q=ie.x-He/j,Ae=ie.y+ye/j,he=ee.x-T/J,Fe=ee.y+ue/J,Xe=((he-q)*T-(Fe-Ae)*ue)/(ye*T-He*ue);me=q+ye*Xe-Z.x,R=Ae+He*Xe-Z.y;const ne=me*me+R*R;if(ne<=2)return new re(me,R);Ge=Math.sqrt(ne/2)}else{let j=!1;ye>Number.EPSILON?ue>Number.EPSILON&&(j=!0):ye<-Number.EPSILON?ue<-Number.EPSILON&&(j=!0):Math.sign(He)===Math.sign(T)&&(j=!0),j?(me=-He,R=ye,Ge=Math.sqrt(v)):(me=ye,R=He,Ge=Math.sqrt(v/2))}return new re(me/Ge,R/Ge)}const K=[];for(let Z=0,ie=B.length,ee=ie-1,me=Z+1;Z<ie;Z++,ee++,me++)ee===ie&&(ee=0),me===ie&&(me=0),K[Z]=Q(B[Z],B[ee],B[me]);const fe=[];let xe,pe=K.concat();for(let Z=0,ie=X;Z<ie;Z++){const ee=C[Z];xe=[];for(let me=0,R=ee.length,Ge=R-1,ye=me+1;me<R;me++,Ge++,ye++)Ge===R&&(Ge=0),ye===R&&(ye=0),xe[me]=Q(ee[me],ee[Ge],ee[ye]);fe.push(xe),pe=pe.concat(xe)}let Ve;if(m===0)Ve=Lr.triangulateShape(B,C);else{const Z=[],ie=[];for(let ee=0;ee<m;ee++){const me=ee/m,R=f*Math.cos(me*Math.PI/2),Ge=p*Math.sin(me*Math.PI/2)+x;for(let ye=0,He=B.length;ye<He;ye++){const ue=G(B[ye],K[ye],Ge);ke(ue.x,ue.y,-R),me===0&&Z.push(ue)}for(let ye=0,He=X;ye<He;ye++){const ue=C[ye];xe=fe[ye];const T=[];for(let v=0,D=ue.length;v<D;v++){const j=G(ue[v],xe[v],Ge);ke(j.x,j.y,-R),me===0&&T.push(j)}me===0&&ie.push(T)}}Ve=Lr.triangulateShape(Z,ie)}const ut=Ve.length,ct=p+x;for(let Z=0;Z<N;Z++){const ie=d?G(z[Z],pe[Z],ct):z[Z];M?(P.copy(w.normals[0]).multiplyScalar(ie.x),A.copy(w.binormals[0]).multiplyScalar(ie.y),_.copy(S[0]).add(P).add(A),ke(_.x,_.y,_.z)):ke(ie.x,ie.y,0)}for(let Z=1;Z<=u;Z++)for(let ie=0;ie<N;ie++){const ee=d?G(z[ie],pe[ie],ct):z[ie];M?(P.copy(w.normals[Z]).multiplyScalar(ee.x),A.copy(w.binormals[Z]).multiplyScalar(ee.y),_.copy(S[Z]).add(P).add(A),ke(_.x,_.y,_.z)):ke(ee.x,ee.y,h/u*Z)}for(let Z=m-1;Z>=0;Z--){const ie=Z/m,ee=f*Math.cos(ie*Math.PI/2),me=p*Math.sin(ie*Math.PI/2)+x;for(let R=0,Ge=B.length;R<Ge;R++){const ye=G(B[R],K[R],me);ke(ye.x,ye.y,h+ee)}for(let R=0,Ge=C.length;R<Ge;R++){const ye=C[R];xe=fe[R];for(let He=0,ue=ye.length;He<ue;He++){const T=G(ye[He],xe[He],me);M?ke(T.x,T.y+S[u-1].y,S[u-1].x+ee):ke(T.x,T.y,h+ee)}}}$(),oe();function $(){const Z=s.length/3;if(d){let ie=0,ee=N*ie;for(let me=0;me<ut;me++){const R=Ve[me];Oe(R[2]+ee,R[1]+ee,R[0]+ee)}ie=u+m*2,ee=N*ie;for(let me=0;me<ut;me++){const R=Ve[me];Oe(R[0]+ee,R[1]+ee,R[2]+ee)}}else{for(let ie=0;ie<ut;ie++){const ee=Ve[ie];Oe(ee[2],ee[1],ee[0])}for(let ie=0;ie<ut;ie++){const ee=Ve[ie];Oe(ee[0]+N*u,ee[1]+N*u,ee[2]+N*u)}}n.addGroup(Z,s.length/3-Z,0)}function oe(){const Z=s.length/3;let ie=0;ae(B,ie),ie+=B.length;for(let ee=0,me=C.length;ee<me;ee++){const R=C[ee];ae(R,ie),ie+=R.length}n.addGroup(Z,s.length/3-Z,1)}function ae(Z,ie){let ee=Z.length;for(;--ee>=0;){const me=ee;let R=ee-1;R<0&&(R=Z.length-1);for(let Ge=0,ye=u+m*2;Ge<ye;Ge++){const He=N*Ge,ue=N*(Ge+1),T=ie+me+He,v=ie+R+He,D=ie+R+ue,j=ie+me+ue;We(T,v,D,j)}}}function ke(Z,ie,ee){l.push(Z),l.push(ie),l.push(ee)}function Oe(Z,ie,ee){pt(Z),pt(ie),pt(ee);const me=s.length/3,R=y.generateTopUV(n,s,me-3,me-2,me-1);Ye(R[0]),Ye(R[1]),Ye(R[2])}function We(Z,ie,ee,me){pt(Z),pt(ie),pt(me),pt(ie),pt(ee),pt(me);const R=s.length/3,Ge=y.generateSideWallUV(n,s,R-6,R-3,R-2,R-1);Ye(Ge[0]),Ye(Ge[1]),Ye(Ge[3]),Ye(Ge[1]),Ye(Ge[2]),Ye(Ge[3])}function pt(Z){s.push(l[Z*3+0]),s.push(l[Z*3+1]),s.push(l[Z*3+2])}function Ye(Z){r.push(Z.x),r.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return _x(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Uu[s.type]().fromJSON(s)),new yh(n,e.options)}}const xx={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new re(r,o),new re(a,l),new re(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-h),new re(d,1-p),new re(x,1-g)]:[new re(a,1-l),new re(u,1-h),new re(f,1-p),new re(m,1-g)]}};function _x(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Tl extends El{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Tl(e.radius,e.detail)}}class jo extends El{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new jo(e.radius,e.detail)}}class no extends Nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<u;g++){const y=g*d-o;for(let S=0;S<c;S++){const M=S*h-r;p.push(M,-y,0),x.push(0,0,1),m.push(S/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){const S=y+c*g,M=y+c*(g+1),w=y+1+c*(g+1),A=y+1+c*g;f.push(S,M,A),f.push(M,w,A)}this.setIndex(f),this.setAttribute("position",new wt(p,3)),this.setAttribute("normal",new wt(x,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.widthSegments,e.heightSegments)}}class Js extends Nt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,f=new L,p=new re;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const g=r+m/n*o;f.x=h*Math.cos(g),f.y=h*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let x=0;x<s;x++){const m=x*(n+1);for(let g=0;g<n;g++){const y=g+m,S=y,M=y+n+1,w=y+n+2,A=y+1;a.push(S,M,A),a.push(M,w,A)}}this.setIndex(a),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(c,3)),this.setAttribute("uv",new wt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class wl extends Nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new L,d=new L,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){const y=[],S=g/n;let M=0;g===0&&o===0?M=.5/t:g===n&&l===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){const A=w/t;h.x=-e*Math.cos(s+A*r)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(s+A*r)*Math.sin(o+S*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(A+M,1-S),y.push(c++)}u.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){const S=u[g][y+1],M=u[g][y],w=u[g+1][y],A=u[g+1][y+1];(g!==0||o>0)&&f.push(S,M,A),(g!==n-1||l<Math.PI)&&f.push(M,w,A)}this.setIndex(f),this.setAttribute("position",new wt(p,3)),this.setAttribute("normal",new wt(x,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Kr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function an(i){const e={};for(let t=0;t<i.length;t++){const n=Kr(i[t]);for(const s in n)e[s]=n[s]}return e}function vx(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const yx={clone:Kr,merge:an};var Mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mx,this.fragmentShader=Sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=vx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bx extends Zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mh extends Un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ei extends Mh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Wp extends Un{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Qu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ex extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tx extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ba(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function wx(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Yd(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function jp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class io{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ax extends io{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:od,endingEnd:od}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ad:r=e,a=2*t-n;break;case ld:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ad:o=e,l=2*n-t;break;case ld:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,S=(-1-f)*m+(1.5+f)*x+.5*p,M=f*m-f*x;for(let w=0;w!==a;++w)r[w]=g*o[u+w]+y*o[c+w]+S*o[l+w]+M*o[h+w];return r}}class Rx extends io{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class Cx extends io{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Px extends io{interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.settings||this.DefaultSettings_,h=u.inTangents,d=u.outTangents;if(!h||!d){const x=(n-t)/(s-t),m=1-x;for(let g=0;g!==a;++g)r[g]=o[c+g]*m+o[l+g]*x;return r}const f=a*2,p=e-1;for(let x=0;x!==a;++x){const m=o[c+x],g=o[l+x],y=p*f+x*2,S=d[y],M=d[y+1],w=e*f+x*2,A=h[w],P=h[w+1];let _=(n-t)/(s-t),E,z,C,F,k;for(let X=0;X<8;X++){E=_*_,z=E*_,C=1-_,F=C*C,k=F*C;const G=k*t+3*F*_*S+3*C*E*A+z*s-n;if(Math.abs(G)<1e-10)break;const N=3*F*(S-t)+6*C*_*(A-S)+3*E*(s-A);if(Math.abs(N)<1e-10)break;_=_-G/N,_=Math.max(0,Math.min(1,_))}r[x]=k*m+3*F*_*M+3*C*E*P+z*g}return r}}class Jn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ba(t,this.TimeBufferType),this.values=Ba(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ba(e.times,Array),values:Ba(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ax(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Px(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Uo:t=this.InterpolantFactoryMethodDiscrete;break;case Oo:t=this.InterpolantFactoryMethodLinear;break;case jl:t=this.InterpolantFactoryMethodSmooth;break;case rd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ne("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uo;case this.InterpolantFactoryMethodLinear:return Oo;case this.InterpolantFactoryMethodSmooth:return jl;case this.InterpolantFactoryMethodBezier:return rd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&jg(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===jl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){const x=t[h+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=Oo;class so extends Jn{constructor(e,t,n){super(e,t,n)}}so.prototype.ValueTypeName="bool";so.prototype.ValueBufferType=Array;so.prototype.DefaultInterpolation=Uo;so.prototype.InterpolantFactoryMethodLinear=void 0;so.prototype.InterpolantFactoryMethodSmooth=void 0;class qp extends Jn{constructor(e,t,n,s){super(e,t,n,s)}}qp.prototype.ValueTypeName="color";class Zr extends Jn{constructor(e,t,n,s){super(e,t,n,s)}}Zr.prototype.ValueTypeName="number";class Lx extends io{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)yi.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Jr extends Jn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Lx(this.times,this.values,this.getValueSize(),e)}}Jr.prototype.ValueTypeName="quaternion";Jr.prototype.InterpolantFactoryMethodSmooth=void 0;class ro extends Jn{constructor(e,t,n){super(e,t,n)}}ro.prototype.ValueTypeName="string";ro.prototype.ValueBufferType=Array;ro.prototype.DefaultInterpolation=Uo;ro.prototype.InterpolantFactoryMethodLinear=void 0;ro.prototype.InterpolantFactoryMethodSmooth=void 0;class Qr extends Jn{constructor(e,t,n,s){super(e,t,n,s)}}Qr.prototype.ValueTypeName="vector";class Ix{constructor(e="",t=-1,n=[],s=Ug){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Nn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Nx(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Jn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=wx(l);l=Yd(l,1,u),c=Yd(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Zr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(Ne("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return je("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,p,x){if(f.length!==0){const m=[],g=[];jp(f,m,g,p),m.length!==0&&x.push(new h(d,m,g))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let x=0;x<d[p].morphTargets.length;x++)f[d[p].morphTargets[x]]=-1;for(const x in f){const m=[],g=[];for(let y=0;y!==d[p].morphTargets.length;++y){const S=d[p];m.push(S.time),g.push(S.morphTarget===x?1:0)}s.push(new Zr(".morphTargetInfluence["+x+"]",m,g))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Qr,f+".position",d,"pos",s),n(Jr,f+".quaternion",d,"rot",s),n(Qr,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Dx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zr;case"vector":case"vector2":case"vector3":case"vector4":return Qr;case"color":return qp;case"quaternion":return Jr;case"bool":case"boolean":return so;case"string":return ro}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Nx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Dx(i.type);if(i.times===void 0){const t=[],n=[];jp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Bi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&($d(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!$d(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function $d(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Ux{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ox=new Ux;class oo{constructor(e){this.manager=e!==void 0?e:Ox,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}oo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Di={};class Fx extends Error{constructor(e,t){super(e),this.response=t}}class Yp extends oo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Bi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Di[e]!==void 0){Di[e].push({onLoad:t,onProgress:n,onError:s});return}Di[e]=[],Di[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ne("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Di[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let x=0;const m=new ReadableStream({start(g){y();function y(){h.read().then(({done:S,value:M})=>{if(S)g.close();else{x+=M.byteLength;const w=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let A=0,P=u.length;A<P;A++){const _=u[A];_.onProgress&&_.onProgress(w)}g.enqueue(M),y()}},S=>{g.error(S)})}}});return new Response(m)}else throw new Fx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Bi.add(`file:${e}`,c);const u=Di[e];delete Di[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Di[e];if(u===void 0)throw this.manager.itemError(e),c;delete Di[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const br=new WeakMap;class Bx extends oo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Bi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=br.get(o);h===void 0&&(h=[],br.set(o,h)),h.push({onLoad:t,onError:s})}return o}const a=Bo("img");function l(){u(),t&&t(this);const h=br.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}br.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Bi.remove(`image:${e}`);const d=br.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(h)}br.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Bi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class zx extends oo{constructor(e){super(e)}load(e,t,n,s){const r=new Vt,o=new Bx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Al extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const bc=new Je,Kd=new L,Zd=new L;class Sh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gh,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Kd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kd),Zd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zd),t.updateMatrixWorld(),bc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Fo||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const za=new L,ka=new yi,ri=new L;class $p extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(za,ka,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,ka,ri.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(za,ka,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,ka,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rs=new L,Jd=new re,Qd=new re;class ln extends $p{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,Jd,Qd),t.subVectors(Qd,Jd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Or*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class kx extends Sh{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Yr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Gx extends Al{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new kx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Vx extends Sh{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}}class Hx extends Al{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class qo extends $p{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xx extends Sh{constructor(){super(new qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kp extends Al{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Xx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Wx extends Al{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Io{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ec=new WeakMap;class jx extends oo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ne("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ne("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Bi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Ec.has(o)===!0)s&&s(Ec.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Bi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ec.set(l,c),Bi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Bi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Er=-90,Tr=1;class qx extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(Er,Tr,e,t);s.layers=this.layers,this.add(s);const r=new ln(Er,Tr,e,t);r.layers=this.layers,this.add(r);const o=new ln(Er,Tr,e,t);o.layers=this.layers,this.add(o);const a=new ln(Er,Tr,e,t);a.layers=this.layers,this.add(a);const l=new ln(Er,Tr,e,t);l.layers=this.layers,this.add(l);const c=new ln(Er,Tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===fi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Yx extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const bh="\\[\\]\\.:\\/",$x=new RegExp("["+bh+"]","g"),Eh="[^"+bh+"]",Kx="[^"+bh.replace("\\.","")+"]",Zx=/((?:WC+[\/:])*)/.source.replace("WC",Eh),Jx=/(WCOD+)?/.source.replace("WCOD",Kx),Qx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eh),e_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eh),t_=new RegExp("^"+Zx+Jx+Qx+e_+"$"),n_=["material","materials","bones","map"];class i_{constructor(e,t,n){const s=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class yt{constructor(e,t,n){this.path=t,this.parsedPath=n||yt.parseTrackName(t),this.node=yt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new yt.Composite(e,t,n):new yt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($x,"")}static parseTrackName(e){const t=t_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);n_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=yt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yt.Composite=i_;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class s_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ne("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ef(i,e,t,n){const s=r_(n);switch(t){case gp:return i*e;case ih:return i*e/s.components*s.byteLength;case sh:return i*e/s.components*s.byteLength;case qr:return i*e*2/s.components*s.byteLength;case rh:return i*e*2/s.components*s.byteLength;case xp:return i*e*3/s.components*s.byteLength;case In:return i*e*4/s.components*s.byteLength;case oh:return i*e*4/s.components*s.byteLength;case Ya:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ka:case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eu:case nu:return Math.max(i,16)*Math.max(e,8)/4;case Qc:case tu:return Math.max(i,8)*Math.max(e,8)/2;case iu:case su:case ou:case au:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ru:case lu:case cu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case du:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case gu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case xu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _u:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Mu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Su:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case bu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Eu:case Tu:case wu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Au:case Ru:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Cu:case Pu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function r_(i){switch(i){case En:case dp:return{byteLength:1,components:1};case Do:case fp:case ji:return{byteLength:2,components:1};case th:case nh:return{byteLength:2,components:4};case xi:case eh:case Ln:return{byteLength:4,components:1};case pp:case mp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ju}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ju);function Zp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function o_(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var a_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,c_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,g_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,__=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,y_=`#ifdef USE_IRIDESCENCE
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
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
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
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,M_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,A_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,R_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,C_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,P_=`#define PI 3.141592653589793
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
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,L_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,I_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,D_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F_="gl_FragColor = linearToOutputTexel( gl_FragColor );",B_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z_=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,G_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H_=`#ifdef USE_ENVMAP
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
#endif`,X_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Q_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ev=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ov=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,av=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_v=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ev=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ov=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Hv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$v=`#ifdef USE_SKINNING
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
#endif`,Kv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ey=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ty=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ry=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ay=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,fy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,py=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,my=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,My=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,by=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ey=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ty=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ay=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ry=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Cy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Py=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ly=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Dy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ny=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,Uy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Oy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,By=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:a_,alphahash_pars_fragment:l_,alphamap_fragment:c_,alphamap_pars_fragment:u_,alphatest_fragment:h_,alphatest_pars_fragment:d_,aomap_fragment:f_,aomap_pars_fragment:p_,batching_pars_vertex:m_,batching_vertex:g_,begin_vertex:x_,beginnormal_vertex:__,bsdfs:v_,iridescence_fragment:y_,bumpmap_pars_fragment:M_,clipping_planes_fragment:S_,clipping_planes_pars_fragment:b_,clipping_planes_pars_vertex:E_,clipping_planes_vertex:T_,color_fragment:w_,color_pars_fragment:A_,color_pars_vertex:R_,color_vertex:C_,common:P_,cube_uv_reflection_fragment:L_,defaultnormal_vertex:I_,displacementmap_pars_vertex:D_,displacementmap_vertex:N_,emissivemap_fragment:U_,emissivemap_pars_fragment:O_,colorspace_fragment:F_,colorspace_pars_fragment:B_,envmap_fragment:z_,envmap_common_pars_fragment:k_,envmap_pars_fragment:G_,envmap_pars_vertex:V_,envmap_physical_pars_fragment:Q_,envmap_vertex:H_,fog_vertex:X_,fog_pars_vertex:W_,fog_fragment:j_,fog_pars_fragment:q_,gradientmap_pars_fragment:Y_,lightmap_pars_fragment:$_,lights_lambert_fragment:K_,lights_lambert_pars_fragment:Z_,lights_pars_begin:J_,lights_toon_fragment:ev,lights_toon_pars_fragment:tv,lights_phong_fragment:nv,lights_phong_pars_fragment:iv,lights_physical_fragment:sv,lights_physical_pars_fragment:rv,lights_fragment_begin:ov,lights_fragment_maps:av,lights_fragment_end:lv,logdepthbuf_fragment:cv,logdepthbuf_pars_fragment:uv,logdepthbuf_pars_vertex:hv,logdepthbuf_vertex:dv,map_fragment:fv,map_pars_fragment:pv,map_particle_fragment:mv,map_particle_pars_fragment:gv,metalnessmap_fragment:xv,metalnessmap_pars_fragment:_v,morphinstance_vertex:vv,morphcolor_vertex:yv,morphnormal_vertex:Mv,morphtarget_pars_vertex:Sv,morphtarget_vertex:bv,normal_fragment_begin:Ev,normal_fragment_maps:Tv,normal_pars_fragment:wv,normal_pars_vertex:Av,normal_vertex:Rv,normalmap_pars_fragment:Cv,clearcoat_normal_fragment_begin:Pv,clearcoat_normal_fragment_maps:Lv,clearcoat_pars_fragment:Iv,iridescence_pars_fragment:Dv,opaque_fragment:Nv,packing:Uv,premultiplied_alpha_fragment:Ov,project_vertex:Fv,dithering_fragment:Bv,dithering_pars_fragment:zv,roughnessmap_fragment:kv,roughnessmap_pars_fragment:Gv,shadowmap_pars_fragment:Vv,shadowmap_pars_vertex:Hv,shadowmap_vertex:Xv,shadowmask_pars_fragment:Wv,skinbase_vertex:jv,skinning_pars_vertex:qv,skinning_vertex:Yv,skinnormal_vertex:$v,specularmap_fragment:Kv,specularmap_pars_fragment:Zv,tonemapping_fragment:Jv,tonemapping_pars_fragment:Qv,transmission_fragment:ey,transmission_pars_fragment:ty,uv_pars_fragment:ny,uv_pars_vertex:iy,uv_vertex:sy,worldpos_vertex:ry,background_vert:oy,background_frag:ay,backgroundCube_vert:ly,backgroundCube_frag:cy,cube_vert:uy,cube_frag:hy,depth_vert:dy,depth_frag:fy,distance_vert:py,distance_frag:my,equirect_vert:gy,equirect_frag:xy,linedashed_vert:_y,linedashed_frag:vy,meshbasic_vert:yy,meshbasic_frag:My,meshlambert_vert:Sy,meshlambert_frag:by,meshmatcap_vert:Ey,meshmatcap_frag:Ty,meshnormal_vert:wy,meshnormal_frag:Ay,meshphong_vert:Ry,meshphong_frag:Cy,meshphysical_vert:Py,meshphysical_frag:Ly,meshtoon_vert:Iy,meshtoon_frag:Dy,points_vert:Ny,points_frag:Uy,shadow_vert:Oy,shadow_frag:Fy,sprite_vert:By,sprite_frag:zy},ge={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},ui={basic:{uniforms:an([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:an([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:an([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:an([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:an([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ze(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:an([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:an([ge.points,ge.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:an([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:an([ge.common,ge.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:an([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:an([ge.sprite,ge.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:an([ge.common,ge.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:an([ge.lights,ge.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ui.physical={uniforms:an([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Ga={r:0,b:0,g:0},Is=new Kn,ky=new Je;function Gy(i,e,t,n,s,r){const o=new ze(0);let a=s===!0?0:1,l,c,u=null,h=0,d=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){const M=y.backgroundBlurriness>0;S=e.get(S,M)}return S}function p(y){let S=!1;const M=f(y);M===null?m(o,a):M&&M.isColor&&(m(M,1),S=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,S){const M=f(S);M&&(M.isCubeTexture||M.mapping===Ml)?(c===void 0&&(c=new gt(new ys(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Kr(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Is.copy(S.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ky.makeRotationFromEuler(Is)),c.material.toneMapped=lt.getTransfer(M.colorSpace)!==_t,(u!==M||h!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new gt(new no(2,2),new Zn({name:"BackgroundMaterial",uniforms:Kr(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=lt.getTransfer(M.colorSpace)!==_t,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,S){y.getRGB(Ga,Xp(i)),t.buffers.color.setClear(Ga.r,Ga.g,Ga.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Vy(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(C,F,k,X,B){let G=!1;const N=h(C,X,k,F);r!==N&&(r=N,c(r.object)),G=f(C,X,k,B),G&&p(C,X,k,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,M(C,F,k,X),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function u(C){return i.deleteVertexArray(C)}function h(C,F,k,X){const B=X.wireframe===!0;let G=n[F.id];G===void 0&&(G={},n[F.id]=G);const N=C.isInstancedMesh===!0?C.id:0;let Q=G[N];Q===void 0&&(Q={},G[N]=Q);let K=Q[k.id];K===void 0&&(K={},Q[k.id]=K);let fe=K[B];return fe===void 0&&(fe=d(l()),K[B]=fe),fe}function d(C){const F=[],k=[],X=[];for(let B=0;B<t;B++)F[B]=0,k[B]=0,X[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:X,object:C,attributes:{},index:null}}function f(C,F,k,X){const B=r.attributes,G=F.attributes;let N=0;const Q=k.getAttributes();for(const K in Q)if(Q[K].location>=0){const xe=B[K];let pe=G[K];if(pe===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(pe=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(pe=C.instanceColor)),xe===void 0||xe.attribute!==pe||pe&&xe.data!==pe.data)return!0;N++}return r.attributesNum!==N||r.index!==X}function p(C,F,k,X){const B={},G=F.attributes;let N=0;const Q=k.getAttributes();for(const K in Q)if(Q[K].location>=0){let xe=G[K];xe===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(xe=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(xe=C.instanceColor));const pe={};pe.attribute=xe,xe&&xe.data&&(pe.data=xe.data),B[K]=pe,N++}r.attributes=B,r.attributesNum=N,r.index=X}function x(){const C=r.newAttributes;for(let F=0,k=C.length;F<k;F++)C[F]=0}function m(C){g(C,0)}function g(C,F){const k=r.newAttributes,X=r.enabledAttributes,B=r.attributeDivisors;k[C]=1,X[C]===0&&(i.enableVertexAttribArray(C),X[C]=1),B[C]!==F&&(i.vertexAttribDivisor(C,F),B[C]=F)}function y(){const C=r.newAttributes,F=r.enabledAttributes;for(let k=0,X=F.length;k<X;k++)F[k]!==C[k]&&(i.disableVertexAttribArray(k),F[k]=0)}function S(C,F,k,X,B,G,N){N===!0?i.vertexAttribIPointer(C,F,k,B,G):i.vertexAttribPointer(C,F,k,X,B,G)}function M(C,F,k,X){x();const B=X.attributes,G=k.getAttributes(),N=F.defaultAttributeValues;for(const Q in G){const K=G[Q];if(K.location>=0){let fe=B[Q];if(fe===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(fe=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(fe=C.instanceColor)),fe!==void 0){const xe=fe.normalized,pe=fe.itemSize,Ve=e.get(fe);if(Ve===void 0)continue;const ut=Ve.buffer,ct=Ve.type,$=Ve.bytesPerElement,oe=ct===i.INT||ct===i.UNSIGNED_INT||fe.gpuType===eh;if(fe.isInterleavedBufferAttribute){const ae=fe.data,ke=ae.stride,Oe=fe.offset;if(ae.isInstancedInterleavedBuffer){for(let We=0;We<K.locationSize;We++)g(K.location+We,ae.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let We=0;We<K.locationSize;We++)m(K.location+We);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let We=0;We<K.locationSize;We++)S(K.location+We,pe/K.locationSize,ct,xe,ke*$,(Oe+pe/K.locationSize*We)*$,oe)}else{if(fe.isInstancedBufferAttribute){for(let ae=0;ae<K.locationSize;ae++)g(K.location+ae,fe.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ae=0;ae<K.locationSize;ae++)m(K.location+ae);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let ae=0;ae<K.locationSize;ae++)S(K.location+ae,pe/K.locationSize,ct,xe,pe*$,pe/K.locationSize*ae*$,oe)}}else if(N!==void 0){const xe=N[Q];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(K.location,xe);break;case 3:i.vertexAttrib3fv(K.location,xe);break;case 4:i.vertexAttrib4fv(K.location,xe);break;default:i.vertexAttrib1fv(K.location,xe)}}}}y()}function w(){E();for(const C in n){const F=n[C];for(const k in F){const X=F[k];for(const B in X){const G=X[B];for(const N in G)u(G[N].object),delete G[N];delete X[B]}}delete n[C]}}function A(C){if(n[C.id]===void 0)return;const F=n[C.id];for(const k in F){const X=F[k];for(const B in X){const G=X[B];for(const N in G)u(G[N].object),delete G[N];delete X[B]}}delete n[C.id]}function P(C){for(const F in n){const k=n[F];for(const X in k){const B=k[X];if(B[C.id]===void 0)continue;const G=B[C.id];for(const N in G)u(G[N].object),delete G[N];delete B[C.id]}}}function _(C){for(const F in n){const k=n[F],X=C.isInstancedMesh===!0?C.id:0,B=k[X];if(B!==void 0){for(const G in B){const N=B[G];for(const Q in N)u(N[Q].object),delete N[Q];delete B[G]}delete k[X],Object.keys(k).length===0&&delete n[F]}}}function E(){z(),o=!0,r!==s&&(r=s,c(r.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:z,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Hy(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x]*d[x];t.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Xy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==In&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const _=P===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==En&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ln&&!_)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ne("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:M,maxSamples:w,samples:A}}function Wy(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Fs,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,g=i.get(h);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,S=y*4;let M=g.clippingState||null;l.value=M,M=u(p,d,S,f);for(let w=0;w!==S;++w)M[w]=t[w];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,p!==!0||m===null){const g=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,M=f;S!==x;++S,M+=4)o.copy(h[S]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const hs=4,tf=[.125,.215,.35,.446,.526,.582],ks=20,jy=256,Mo=new qo,nf=new ze;let Tc=null,wc=0,Ac=0,Rc=!1;const qy=new L;class sf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=qy}=r;Tc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel(),Rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Tc,wc,Ac),this._renderer.xr.enabled=Rc,e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===Wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel(),Rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:ji,format:In,colorSpace:dn,depthBuffer:!1},s=rf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Yy(r)),this._blurMaterial=Ky(r,e,t),this._ggxMaterial=$y(r,e,t)}return s}_compileMaterial(e){const t=new gt(new Nt,e);this._renderer.compile(t,Mo)}_sceneToCubeUV(e,t,n,s,r){const l=new ln(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(nf),h.toneMapping=mi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gt(new ys,new Lt({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let g=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(nf),g=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const w=this._cubeSize;wr(s,M*w,S>2?w:0,w,w),h.setRenderTarget(s),g&&h.render(x,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ys||e.mapping===Wr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=af()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=of());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;wr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Mo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,f=h*d,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-hs?n-p+hs:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,wr(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,Mo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,wr(e,m,g,3*x,2*x),s.setRenderTarget(e),s.render(a,Mo)}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ks-1),x=r/p,m=isFinite(r)?1+Math.floor(u*x):ks;m>ks&&Ne(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ks}`);const g=[];let y=0;for(let P=0;P<ks;++P){const _=P/x,E=Math.exp(-_*_/2);g.push(E),P===0?y+=E:P<m&&(y+=2*E)}for(let P=0;P<g.length;P++)g[P]=g[P]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=p,d.mipInt.value=S-n;const M=this._sizeLods[s],w=3*M*(s>S-hs?s-S+hs:0),A=4*(this._cubeSize-M);wr(t,w,A,3*M,2*M),l.setRenderTarget(t),l.render(h,Mo)}}function Yy(i){const e=[],t=[],n=[];let s=i;const r=i-hs+1+tf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-hs?l=tf[o-i+hs-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,x=3,m=2,g=1,y=new Float32Array(x*p*f),S=new Float32Array(m*p*f),M=new Float32Array(g*p*f);for(let A=0;A<f;A++){const P=A%3*2/3-1,_=A>2?0:-1,E=[P,_,0,P+2/3,_,0,P+2/3,_+1,0,P,_,0,P+2/3,_+1,0,P,_+1,0];y.set(E,x*p*A),S.set(d,m*p*A);const z=[A,A,A,A,A,A];M.set(z,g*p*A)}const w=new Nt;w.setAttribute("position",new Zt(y,x)),w.setAttribute("uv",new Zt(S,m)),w.setAttribute("faceIndex",new Zt(M,g)),n.push(new gt(w,null)),s>hs&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function rf(i,e,t){const n=new Yn(i,e,t);return n.texture.mapping=Ml,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function $y(i,e,t){return new Zn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Ky(i,e,t){const n=new Float32Array(ks),s=new L(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function of(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function af(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}class Jp extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ip(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ys(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:Kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Gi});r.uniforms.tEquirect.value=t;const o=new gt(s,r),a=t.minFilter;return t.minFilter===Fi&&(t.minFilter=Gt),new qx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}function Zy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Xl||f===Wl)if(e.has(d)){const p=e.get(d).texture;return a(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const x=new Jp(p.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const f=d.mapping,p=f===Xl||f===Wl,x=f===Ys||f===Wr;if(p||x){let m=t.get(d);const g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new sf(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const y=d.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new sf(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,f){return f===Xl?d.mapping=Ys:f===Wl&&(d.mapping=Wr),d}function l(d){let f=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){const f=d.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Jy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&rl("WebGLRenderer: "+n+" extension not supported."),s}}}function Qy(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,p=h.attributes.position;let x=0;if(p===void 0)return;if(f!==null){const y=f.array;x=f.version;for(let S=0,M=y.length;S<M;S+=3){const w=y[S+0],A=y[S+1],P=y[S+2];d.push(w,A,A,P,P,w)}}else{const y=p.array;x=p.version;for(let S=0,M=y.length/3-1;S<M;S+=3){const w=S+0,A=S+1,P=S+2;d.push(w,A,A,P,P,w)}}const m=new(p.count>=65535?wp:Tp)(d,1);m.version=x;const g=r.get(h);g&&e.remove(g),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function eM(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*o,p),t.update(f,n,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];t.update(m,n,1)}function h(d,f,p,x){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)c(d[g]/o,f[g],x[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,p);let g=0;for(let y=0;y<p;y++)g+=f[y]*x[y];t.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function tM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function nM(i,e,t){const n=new WeakMap,s=new Ct;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let z=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",z)};var f=z;d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;p===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let w=a.attributes.position.count*M,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const P=new Float32Array(w*A*4*h),_=new Mp(P,w,A,h);_.type=Ln,_.needsUpdate=!0;const E=M*4;for(let C=0;C<h;C++){const F=g[C],k=y[C],X=S[C],B=w*A*4*C;for(let G=0;G<F.count;G++){const N=G*E;p===!0&&(s.fromBufferAttribute(F,G),P[B+N+0]=s.x,P[B+N+1]=s.y,P[B+N+2]=s.z,P[B+N+3]=0),x===!0&&(s.fromBufferAttribute(k,G),P[B+N+4]=s.x,P[B+N+5]=s.y,P[B+N+6]=s.z,P[B+N+7]=0),m===!0&&(s.fromBufferAttribute(X,G),P[B+N+8]=s.x,P[B+N+9]=s.y,P[B+N+10]=s.z,P[B+N+11]=X.itemSize===4?s.w:1)}}d={count:h,texture:_,size:new re(w,A)},n.set(a,d),a.addEventListener("dispose",z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const x=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function iM(i,e,t,n,s){let r=new WeakMap;function o(c){const u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const sM={[ip]:"LINEAR_TONE_MAPPING",[sp]:"REINHARD_TONE_MAPPING",[rp]:"CINEON_TONE_MAPPING",[op]:"ACES_FILMIC_TONE_MAPPING",[lp]:"AGX_TONE_MAPPING",[cp]:"NEUTRAL_TONE_MAPPING",[ap]:"CUSTOM_TONE_MAPPING"};function rM(i,e,t,n,s){const r=new Yn(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),o=new Yn(e,t,{type:ji,depthBuffer:!1,stencilBuffer:!1}),a=new Nt;a.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new wt([0,2,0,0,2,0],2));const l=new bx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new gt(a,l),u=new qo(-1,1,1,-1,0,1);let h=null,d=null,f=!1,p,x=null,m=[],g=!1;this.setSize=function(y,S){r.setSize(y,S),o.setSize(y,S);for(let M=0;M<m.length;M++){const w=m[M];w.setSize&&w.setSize(y,S)}},this.setEffects=function(y){m=y,g=m.length>0&&m[0].isRenderPass===!0;const S=r.width,M=r.height;for(let w=0;w<m.length;w++){const A=m[w];A.setSize&&A.setSize(S,M)}},this.begin=function(y,S){if(f||y.toneMapping===mi&&m.length===0)return!1;if(x=S,S!==null){const M=S.width,w=S.height;(r.width!==M||r.height!==w)&&this.setSize(M,w)}return g===!1&&y.setRenderTarget(r),p=y.toneMapping,y.toneMapping=mi,!0},this.hasRenderPass=function(){return g},this.end=function(y,S){y.toneMapping=p,f=!0;let M=r,w=o;for(let A=0;A<m.length;A++){const P=m[A];if(P.enabled!==!1&&(P.render(y,w,M,S),P.needsSwap!==!1)){const _=M;M=w,w=_}}if(h!==y.outputColorSpace||d!==y.toneMapping){h=y.outputColorSpace,d=y.toneMapping,l.defines={},lt.getTransfer(h)===_t&&(l.defines.SRGB_TRANSFER="");const A=sM[d];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(x),y.render(c,u),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Qp=new Vt,Bu=new ko(1,1),em=new Mp,tm=new x0,nm=new Ip,lf=[],cf=[],uf=new Float32Array(16),hf=new Float32Array(9),df=new Float32Array(4);function ao(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=lf[s];if(r===void 0&&(r=new Float32Array(s),lf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Cl(i,e){let t=cf[e];t===void 0&&(t=new Int32Array(e),cf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function oM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function aM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function lM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function cM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function uM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Xt(t,n))return;df.set(n),i.uniformMatrix2fv(this.addr,!1,df),Wt(t,n)}}function hM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Xt(t,n))return;hf.set(n),i.uniformMatrix3fv(this.addr,!1,hf),Wt(t,n)}}function dM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Xt(t,n))return;uf.set(n),i.uniformMatrix4fv(this.addr,!1,uf),Wt(t,n)}}function fM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function pM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function mM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function gM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function xM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _M(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function vM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function yM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function MM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bu.compareFunction=t.isReversedDepthBuffer()?ch:lh,r=Bu):r=Qp,t.setTexture2D(e||r,s)}function SM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||tm,s)}function bM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||nm,s)}function EM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||em,s)}function TM(i){switch(i){case 5126:return oM;case 35664:return aM;case 35665:return lM;case 35666:return cM;case 35674:return uM;case 35675:return hM;case 35676:return dM;case 5124:case 35670:return fM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return xM;case 36294:return _M;case 36295:return vM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return EM}}function wM(i,e){i.uniform1fv(this.addr,e)}function AM(i,e){const t=ao(e,this.size,2);i.uniform2fv(this.addr,t)}function RM(i,e){const t=ao(e,this.size,3);i.uniform3fv(this.addr,t)}function CM(i,e){const t=ao(e,this.size,4);i.uniform4fv(this.addr,t)}function PM(i,e){const t=ao(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function LM(i,e){const t=ao(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function IM(i,e){const t=ao(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function DM(i,e){i.uniform1iv(this.addr,e)}function NM(i,e){i.uniform2iv(this.addr,e)}function UM(i,e){i.uniform3iv(this.addr,e)}function OM(i,e){i.uniform4iv(this.addr,e)}function FM(i,e){i.uniform1uiv(this.addr,e)}function BM(i,e){i.uniform2uiv(this.addr,e)}function zM(i,e){i.uniform3uiv(this.addr,e)}function kM(i,e){i.uniform4uiv(this.addr,e)}function GM(i,e,t){const n=this.cache,s=e.length,r=Cl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Bu:o=Qp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function VM(i,e,t){const n=this.cache,s=e.length,r=Cl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||tm,r[o])}function HM(i,e,t){const n=this.cache,s=e.length,r=Cl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||nm,r[o])}function XM(i,e,t){const n=this.cache,s=e.length,r=Cl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||em,r[o])}function WM(i){switch(i){case 5126:return wM;case 35664:return AM;case 35665:return RM;case 35666:return CM;case 35674:return PM;case 35675:return LM;case 35676:return IM;case 5124:case 35670:return DM;case 35667:case 35671:return NM;case 35668:case 35672:return UM;case 35669:case 35673:return OM;case 5125:return FM;case 36294:return BM;case 36295:return zM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return GM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return XM}}class jM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=TM(t.type)}}class qM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=WM(t.type)}}class YM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Cc=/(\w+)(\])?(\[|\.)?/g;function ff(i,e){i.seq.push(e),i.map[e.id]=e}function $M(i,e,t){const n=i.name,s=n.length;for(Cc.lastIndex=0;;){const r=Cc.exec(n),o=Cc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ff(t,c===void 0?new jM(a,i,e):new qM(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new YM(a),ff(t,h)),t=h}}}class Ja{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);$M(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function pf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const KM=37297;let ZM=0;function JM(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const mf=new Qe;function QM(i){lt._getMatrix(mf,lt.workingColorSpace,i);const e=`mat3( ${mf.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case il:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+JM(i.getShaderSource(e),a)}else return r}function eS(i,e){const t=QM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const tS={[ip]:"Linear",[sp]:"Reinhard",[rp]:"Cineon",[op]:"ACESFilmic",[lp]:"AgX",[cp]:"Neutral",[ap]:"Custom"};function nS(i,e){const t=tS[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Va=new L;function iS(){lt.getLuminanceCoefficients(Va);const i=Va.x.toFixed(4),e=Va.y.toFixed(4),t=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function rS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function oS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ro(i){return i!==""}function xf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _f(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aS=/^[ \t]*#include +<([\w\d./]+)>/gm;function zu(i){return i.replace(aS,cS)}const lS=new Map;function cS(i,e){let t=et[e];if(t===void 0){const n=lS.get(e);if(n!==void 0)t=et[n],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zu(t)}const uS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vf(i){return i.replace(uS,hS)}function hS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const dS={[ja]:"SHADOWMAP_TYPE_PCF",[To]:"SHADOWMAP_TYPE_VSM"};function fS(i){return dS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pS={[Ys]:"ENVMAP_TYPE_CUBE",[Wr]:"ENVMAP_TYPE_CUBE",[Ml]:"ENVMAP_TYPE_CUBE_UV"};function mS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":pS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const gS={[Wr]:"ENVMAP_MODE_REFRACTION"};function xS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":gS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _S={[Qu]:"ENVMAP_BLENDING_MULTIPLY",[Ig]:"ENVMAP_BLENDING_MIX",[Dg]:"ENVMAP_BLENDING_ADD"};function vS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":_S[i.combine]||"ENVMAP_BLENDING_NONE"}function yS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function MS(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=fS(t),c=mS(t),u=xS(t),h=vS(t),d=yS(t),f=sS(t),p=rS(r),x=s.createProgram();let m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ro).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ro).join(`
`),g.length>0&&(g+=`
`)):(m=[yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),g=[yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?et.tonemapping_pars_fragment:"",t.toneMapping!==mi?nS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,eS("linearToOutputTexel",t.outputColorSpace),iS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ro).join(`
`)),o=zu(o),o=xf(o,t),o=_f(o,t),a=zu(a),a=xf(a,t),a=_f(a,t),o=vf(o),a=vf(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===ud?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ud?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=y+m+o,M=y+g+a,w=pf(s,s.VERTEX_SHADER,S),A=pf(s,s.FRAGMENT_SHADER,M);s.attachShader(x,w),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(C){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(w)||"",X=s.getShaderInfoLog(A)||"",B=F.trim(),G=k.trim(),N=X.trim();let Q=!0,K=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,A);else{const fe=gf(s,w,"vertex"),xe=gf(s,A,"fragment");je("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+fe+`
`+xe)}else B!==""?Ne("WebGLProgram: Program Info Log:",B):(G===""||N==="")&&(K=!1);K&&(C.diagnostics={runnable:Q,programLog:B,vertexShader:{log:G,prefix:m},fragmentShader:{log:N,prefix:g}})}s.deleteShader(w),s.deleteShader(A),_=new Ja(s,x),E=oS(s,x)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(x,KM)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=A,this}let SS=0;class bS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ES(e),t.set(e,n)),n}}class ES{constructor(e){this.id=SS++,this.code=e,this.usedTimes=0}}function TS(i,e,t,n,s,r){const o=new Sp,a=new bS,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,E,z,C,F){const k=C.fog,X=F.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,N=e.get(_.envMap||B,G),Q=N&&N.mapping===Ml?N.image.height:null,K=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Ne("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const fe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,xe=fe!==void 0?fe.length:0;let pe=0;X.morphAttributes.position!==void 0&&(pe=1),X.morphAttributes.normal!==void 0&&(pe=2),X.morphAttributes.color!==void 0&&(pe=3);let Ve,ut,ct,$;if(K){const xt=ui[K];Ve=xt.vertexShader,ut=xt.fragmentShader}else Ve=_.vertexShader,ut=_.fragmentShader,a.update(_),ct=a.getVertexShaderID(_),$=a.getFragmentShaderID(_);const oe=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),ke=F.isInstancedMesh===!0,Oe=F.isBatchedMesh===!0,We=!!_.map,pt=!!_.matcap,Ye=!!N,Z=!!_.aoMap,ie=!!_.lightMap,ee=!!_.bumpMap,me=!!_.normalMap,R=!!_.displacementMap,Ge=!!_.emissiveMap,ye=!!_.metalnessMap,He=!!_.roughnessMap,ue=_.anisotropy>0,T=_.clearcoat>0,v=_.dispersion>0,D=_.iridescence>0,j=_.sheen>0,J=_.transmission>0,q=ue&&!!_.anisotropyMap,Ae=T&&!!_.clearcoatMap,he=T&&!!_.clearcoatNormalMap,Fe=T&&!!_.clearcoatRoughnessMap,Xe=D&&!!_.iridescenceMap,ne=D&&!!_.iridescenceThicknessMap,le=j&&!!_.sheenColorMap,Re=j&&!!_.sheenRoughnessMap,Pe=!!_.specularMap,Me=!!_.specularColorMap,nt=!!_.specularIntensityMap,I=J&&!!_.transmissionMap,de=J&&!!_.thicknessMap,ce=!!_.gradientMap,Te=!!_.alphaMap,se=_.alphaTest>0,Y=!!_.alphaHash,Ce=!!_.extensions;let Ke=mi;_.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ke=i.toneMapping);const Et={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:Ve,fragmentShader:ut,defines:_.defines,customVertexShaderID:ct,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Oe,batchingColor:Oe&&F._colorsTexture!==null,instancing:ke,instancingColor:ke&&F.instanceColor!==null,instancingMorph:ke&&F.morphTexture!==null,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:dn,alphaToCoverage:!!_.alphaToCoverage,map:We,matcap:pt,envMap:Ye,envMapMode:Ye&&N.mapping,envMapCubeUVHeight:Q,aoMap:Z,lightMap:ie,bumpMap:ee,normalMap:me,displacementMap:R,emissiveMap:Ge,normalMapObjectSpace:me&&_.normalMapType===Bg,normalMapTangentSpace:me&&_.normalMapType===ah,metalnessMap:ye,roughnessMap:He,anisotropy:ue,anisotropyMap:q,clearcoat:T,clearcoatMap:Ae,clearcoatNormalMap:he,clearcoatRoughnessMap:Fe,dispersion:v,iridescence:D,iridescenceMap:Xe,iridescenceThicknessMap:ne,sheen:j,sheenColorMap:le,sheenRoughnessMap:Re,specularMap:Pe,specularColorMap:Me,specularIntensityMap:nt,transmission:J,transmissionMap:I,thicknessMap:de,gradientMap:ce,opaque:_.transparent===!1&&_.blending===Ur&&_.alphaToCoverage===!1,alphaMap:Te,alphaTest:se,alphaHash:Y,combine:_.combine,mapUv:We&&p(_.map.channel),aoMapUv:Z&&p(_.aoMap.channel),lightMapUv:ie&&p(_.lightMap.channel),bumpMapUv:ee&&p(_.bumpMap.channel),normalMapUv:me&&p(_.normalMap.channel),displacementMapUv:R&&p(_.displacementMap.channel),emissiveMapUv:Ge&&p(_.emissiveMap.channel),metalnessMapUv:ye&&p(_.metalnessMap.channel),roughnessMapUv:He&&p(_.roughnessMap.channel),anisotropyMapUv:q&&p(_.anisotropyMap.channel),clearcoatMapUv:Ae&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:he&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:le&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Re&&p(_.sheenRoughnessMap.channel),specularMapUv:Pe&&p(_.specularMap.channel),specularColorMapUv:Me&&p(_.specularColorMap.channel),specularIntensityMapUv:nt&&p(_.specularIntensityMap.channel),transmissionMapUv:I&&p(_.transmissionMap.channel),thicknessMapUv:de&&p(_.thicknessMap.channel),alphaMapUv:Te&&p(_.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(me||ue),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(We||Te),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||X.attributes.normal===void 0&&me===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ae,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:pe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:We&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===_t,decodeVideoTextureEmissive:Ge&&_.emissiveMap.isVideoTexture===!0&&lt.getTransfer(_.emissiveMap.colorSpace)===_t,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===cn,flipSided:_.side===_n,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ce&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&_.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Et.vertexUv1s=l.has(1),Et.vertexUv2s=l.has(2),Et.vertexUv3s=l.has(3),l.clear(),Et}function m(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const z in _.defines)E.push(z),E.push(_.defines[z]);return _.isRawShaderMaterial===!1&&(g(E,_),y(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function g(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function y(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),_.push(o.mask)}function S(_){const E=f[_.type];let z;if(E){const C=ui[E];z=yx.clone(C.uniforms)}else z=_.uniforms;return z}function M(_,E){let z=u.get(E);return z!==void 0?++z.usedTimes:(z=new MS(i,E,_,s),c.push(z),u.set(E,z)),z}function w(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){a.remove(_)}function P(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:S,acquireProgram:M,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:P}}function wS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function AS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Mf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sf(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,m,g){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=p,y.materialVariant=o(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=g),e++,y}function l(d,f,p,x,m,g){const y=a(d,f,p,x,m,g);p.transmission>0?n.push(y):p.transparent===!0?s.push(y):t.push(y)}function c(d,f,p,x,m,g){const y=a(d,f,p,x,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function u(d,f){t.length>1&&t.sort(d||AS),n.length>1&&n.sort(f||Mf),s.length>1&&s.sort(f||Mf)}function h(){for(let d=e,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function RS(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Sf,i.set(n,[o])):s>=r.length?(o=new Sf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function CS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ze};break;case"SpotLight":t={position:new L,direction:new L,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function PS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let LS=0;function IS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function DS(i){const e=new CS,t=PS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new Je,o=new Je;function a(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,y=0,S=0,M=0,w=0,A=0,P=0;c.sort(IS);for(let E=0,z=c.length;E<z;E++){const C=c[E],F=C.color,k=C.intensity,X=C.distance;let B=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===qr?B=C.shadow.map.texture:B=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=F.r*k,h+=F.g*k,d+=F.b*k;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],k);P++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const N=C.shadow,Q=t.get(C);Q.shadowIntensity=N.intensity,Q.shadowBias=N.bias,Q.shadowNormalBias=N.normalBias,Q.shadowRadius=N.radius,Q.shadowMapSize=N.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=C.shadow.matrix,y++}n.directional[f]=G,f++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(F).multiplyScalar(k),G.distance=X,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[x]=G;const N=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,N.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[x]=N.matrix,C.castShadow){const Q=t.get(C);Q.shadowIntensity=N.intensity,Q.shadowBias=N.bias,Q.shadowNormalBias=N.normalBias,Q.shadowRadius=N.radius,Q.shadowMapSize=N.mapSize,n.spotShadow[x]=Q,n.spotShadowMap[x]=B,M++}x++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(F).multiplyScalar(k),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=G,m++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const N=C.shadow,Q=t.get(C);Q.shadowIntensity=N.intensity,Q.shadowBias=N.bias,Q.shadowNormalBias=N.normalBias,Q.shadowRadius=N.radius,Q.shadowMapSize=N.mapSize,Q.shadowCameraNear=N.camera.near,Q.shadowCameraFar=N.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=B,n.pointShadowMatrix[p]=C.shadow.matrix,S++}n.point[p]=G,p++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(k),G.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[g]=G,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const _=n.hash;(_.directionalLength!==f||_.pointLength!==p||_.spotLength!==x||_.rectAreaLength!==m||_.hemiLength!==g||_.numDirectionalShadows!==y||_.numPointShadows!==S||_.numSpotShadows!==M||_.numSpotMaps!==w||_.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,_.directionalLength=f,_.pointLength=p,_.spotLength=x,_.rectAreaLength=m,_.hemiLength=g,_.numDirectionalShadows=y,_.numPointShadows=S,_.numSpotShadows=M,_.numSpotMaps=w,_.numLightProbes=P,n.version=LS++)}function l(c,u){let h=0,d=0,f=0,p=0,x=0;const m=u.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const S=c[g];if(S.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(S.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const M=n.rectArea[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function bf(i){const e=new DS(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function NS(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new bf(i),e.set(s,[a])):r>=o.length?(a=new bf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const US=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,FS=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],BS=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Ef=new Je,So=new L,Pc=new L;function zS(i,e,t){let n=new gh;const s=new re,r=new re,o=new Ct,a=new Ex,l=new Tx,c={},u=t.maxTextureSize,h={[Wi]:_n,[_n]:Wi,[cn]:cn},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:US,fragmentShader:OS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Nt;p.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new gt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let g=this.type;this.render=function(A,P,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===np&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ja);const E=i.getRenderTarget(),z=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Gi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=g!==this.type;k&&P.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(B=>B.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,B=A.length;X<B;X++){const G=A[X],N=G.shadow;if(N===void 0){Ne("WebGLShadowMap:",G,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const Q=N.getFrameExtents();s.multiply(Q),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,N.mapSize.y=r.y));const K=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=K,N.map===null||k===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===To){if(G.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Yn(s.x,s.y,{format:qr,type:ji,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),N.map.texture.name=G.name+".shadowMap",N.map.depthTexture=new ko(s.x,s.y,Ln),N.map.depthTexture.name=G.name+".shadowMapDepth",N.map.depthTexture.format=qi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ot,N.map.depthTexture.magFilter=Ot}else G.isPointLight?(N.map=new Jp(s.x),N.map.depthTexture=new z0(s.x,xi)):(N.map=new Yn(s.x,s.y),N.map.depthTexture=new ko(s.x,s.y,xi)),N.map.depthTexture.name=G.name+".shadowMap",N.map.depthTexture.format=qi,this.type===ja?(N.map.depthTexture.compareFunction=K?ch:lh,N.map.depthTexture.minFilter=Gt,N.map.depthTexture.magFilter=Gt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ot,N.map.depthTexture.magFilter=Ot);N.camera.updateProjectionMatrix()}const fe=N.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<fe;xe++){if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,xe),i.clear();else{xe===0&&(i.setRenderTarget(N.map),i.clear());const pe=N.getViewport(xe);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),F.viewport(o)}if(G.isPointLight){const pe=N.camera,Ve=N.matrix,ut=G.distance||pe.far;ut!==pe.far&&(pe.far=ut,pe.updateProjectionMatrix()),So.setFromMatrixPosition(G.matrixWorld),pe.position.copy(So),Pc.copy(pe.position),Pc.add(FS[xe]),pe.up.copy(BS[xe]),pe.lookAt(Pc),pe.updateMatrixWorld(),Ve.makeTranslation(-So.x,-So.y,-So.z),Ef.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Ef,pe.coordinateSystem,pe.reversedDepth)}else N.updateMatrices(G);n=N.getFrustum(),M(P,_,N.camera,G,this.type)}N.isPointLightShadow!==!0&&this.type===To&&y(N,_),N.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(E,z,C)};function y(A,P){const _=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Yn(s.x,s.y,{format:qr,type:ji})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,_,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,_,f,x,null)}function S(A,P,_,E){let z=null;const C=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)z=C;else if(z=_.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=z.uuid,k=P.uuid;let X=c[F];X===void 0&&(X={},c[F]=X);let B=X[k];B===void 0&&(B=z.clone(),X[k]=B,P.addEventListener("dispose",w)),z=B}if(z.visible=P.visible,z.wireframe=P.wireframe,E===To?z.side=P.shadowSide!==null?P.shadowSide:P.side:z.side=P.shadowSide!==null?P.shadowSide:h[P.side],z.alphaMap=P.alphaMap,z.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,z.map=P.map,z.clipShadows=P.clipShadows,z.clippingPlanes=P.clippingPlanes,z.clipIntersection=P.clipIntersection,z.displacementMap=P.displacementMap,z.displacementScale=P.displacementScale,z.displacementBias=P.displacementBias,z.wireframeLinewidth=P.wireframeLinewidth,z.linewidth=P.linewidth,_.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const F=i.properties.get(z);F.light=_}return z}function M(A,P,_,E,z){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&z===To)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);const k=e.update(A),X=A.material;if(Array.isArray(X)){const B=k.groups;for(let G=0,N=B.length;G<N;G++){const Q=B[G],K=X[Q.materialIndex];if(K&&K.visible){const fe=S(A,K,E,z);A.onBeforeShadow(i,A,P,_,k,fe,Q),i.renderBufferDirect(_,null,k,fe,A,Q),A.onAfterShadow(i,A,P,_,k,fe,Q)}}}else if(X.visible){const B=S(A,X,E,z);A.onBeforeShadow(i,A,P,_,k,B,null),i.renderBufferDirect(_,null,k,B,A,null),A.onAfterShadow(i,A,P,_,k,B,null)}}const F=A.children;for(let k=0,X=F.length;k<X;k++)M(F[k],P,_,E,z)}function w(A){A.target.removeEventListener("dispose",w);for(const _ in c){const E=c[_],z=A.target.uuid;z in E&&(E[z].dispose(),delete E[z])}}}function kS(i,e){function t(){let I=!1;const de=new Ct;let ce=null;const Te=new Ct(0,0,0,0);return{setMask:function(se){ce!==se&&!I&&(i.colorMask(se,se,se,se),ce=se)},setLocked:function(se){I=se},setClear:function(se,Y,Ce,Ke,Et){Et===!0&&(se*=Ke,Y*=Ke,Ce*=Ke),de.set(se,Y,Ce,Ke),Te.equals(de)===!1&&(i.clearColor(se,Y,Ce,Ke),Te.copy(de))},reset:function(){I=!1,ce=null,Te.set(-1,0,0,0)}}}function n(){let I=!1,de=!1,ce=null,Te=null,se=null;return{setReversed:function(Y){if(de!==Y){const Ce=e.get("EXT_clip_control");Y?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),de=Y;const Ke=se;se=null,this.setClear(Ke)}},getReversed:function(){return de},setTest:function(Y){Y?oe(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(Y){ce!==Y&&!I&&(i.depthMask(Y),ce=Y)},setFunc:function(Y){if(de&&(Y=$g[Y]),Te!==Y){switch(Y){case jc:i.depthFunc(i.NEVER);break;case qc:i.depthFunc(i.ALWAYS);break;case Yc:i.depthFunc(i.LESS);break;case Xr:i.depthFunc(i.LEQUAL);break;case $c:i.depthFunc(i.EQUAL);break;case Kc:i.depthFunc(i.GEQUAL);break;case Zc:i.depthFunc(i.GREATER);break;case Jc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=Y}},setLocked:function(Y){I=Y},setClear:function(Y){se!==Y&&(se=Y,de&&(Y=1-Y),i.clearDepth(Y))},reset:function(){I=!1,ce=null,Te=null,se=null,de=!1}}}function s(){let I=!1,de=null,ce=null,Te=null,se=null,Y=null,Ce=null,Ke=null,Et=null;return{setTest:function(xt){I||(xt?oe(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(xt){de!==xt&&!I&&(i.stencilMask(xt),de=xt)},setFunc:function(xt,wi,Ai){(ce!==xt||Te!==wi||se!==Ai)&&(i.stencilFunc(xt,wi,Ai),ce=xt,Te=wi,se=Ai)},setOp:function(xt,wi,Ai){(Y!==xt||Ce!==wi||Ke!==Ai)&&(i.stencilOp(xt,wi,Ai),Y=xt,Ce=wi,Ke=Ai)},setLocked:function(xt){I=xt},setClear:function(xt){Et!==xt&&(i.clearStencil(xt),Et=xt)},reset:function(){I=!1,de=null,ce=null,Te=null,se=null,Y=null,Ce=null,Ke=null,Et=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],p=null,x=!1,m=null,g=null,y=null,S=null,M=null,w=null,A=null,P=new ze(0,0,0),_=0,E=!1,z=null,C=null,F=null,k=null,X=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,N=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(Q)[1]),G=N>=1):Q.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),G=N>=2);let K=null,fe={};const xe=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),Ve=new Ct().fromArray(xe),ut=new Ct().fromArray(pe);function ct(I,de,ce,Te){const se=new Uint8Array(4),Y=i.createTexture();i.bindTexture(I,Y),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<ce;Ce++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(de+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return Y}const $={};$[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(Xr),ee(!1),me(td),oe(i.CULL_FACE),Z(Gi);function oe(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function ae(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function ke(I,de){return h[I]!==de?(i.bindFramebuffer(I,de),h[I]=de,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Oe(I,de){let ce=f,Te=!1;if(I){ce=d.get(de),ce===void 0&&(ce=[],d.set(de,ce));const se=I.textures;if(ce.length!==se.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,Ce=se.length;Y<Ce;Y++)ce[Y]=i.COLOR_ATTACHMENT0+Y;ce.length=se.length,Te=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,Te=!0);Te&&i.drawBuffers(ce)}function We(I){return p!==I?(i.useProgram(I),p=I,!0):!1}const pt={[zs]:i.FUNC_ADD,[mg]:i.FUNC_SUBTRACT,[gg]:i.FUNC_REVERSE_SUBTRACT};pt[xg]=i.MIN,pt[_g]=i.MAX;const Ye={[vg]:i.ZERO,[yg]:i.ONE,[Mg]:i.SRC_COLOR,[Xc]:i.SRC_ALPHA,[Ag]:i.SRC_ALPHA_SATURATE,[Tg]:i.DST_COLOR,[bg]:i.DST_ALPHA,[Sg]:i.ONE_MINUS_SRC_COLOR,[Wc]:i.ONE_MINUS_SRC_ALPHA,[wg]:i.ONE_MINUS_DST_COLOR,[Eg]:i.ONE_MINUS_DST_ALPHA,[Rg]:i.CONSTANT_COLOR,[Cg]:i.ONE_MINUS_CONSTANT_COLOR,[Pg]:i.CONSTANT_ALPHA,[Lg]:i.ONE_MINUS_CONSTANT_ALPHA};function Z(I,de,ce,Te,se,Y,Ce,Ke,Et,xt){if(I===Gi){x===!0&&(ae(i.BLEND),x=!1);return}if(x===!1&&(oe(i.BLEND),x=!0),I!==pg){if(I!==m||xt!==E){if((g!==zs||M!==zs)&&(i.blendEquation(i.FUNC_ADD),g=zs,M=zs),xt)switch(I){case Ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xs:i.blendFunc(i.ONE,i.ONE);break;case nd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case id:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",I);break}else switch(I){case Ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nd:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case id:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",I);break}y=null,S=null,w=null,A=null,P.set(0,0,0),_=0,m=I,E=xt}return}se=se||de,Y=Y||ce,Ce=Ce||Te,(de!==g||se!==M)&&(i.blendEquationSeparate(pt[de],pt[se]),g=de,M=se),(ce!==y||Te!==S||Y!==w||Ce!==A)&&(i.blendFuncSeparate(Ye[ce],Ye[Te],Ye[Y],Ye[Ce]),y=ce,S=Te,w=Y,A=Ce),(Ke.equals(P)===!1||Et!==_)&&(i.blendColor(Ke.r,Ke.g,Ke.b,Et),P.copy(Ke),_=Et),m=I,E=!1}function ie(I,de){I.side===cn?ae(i.CULL_FACE):oe(i.CULL_FACE);let ce=I.side===_n;de&&(ce=!ce),ee(ce),I.blending===Ur&&I.transparent===!1?Z(Gi):Z(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const Te=I.stencilWrite;a.setTest(Te),Te&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ge(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(I){z!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),z=I)}function me(I){I!==dg?(oe(i.CULL_FACE),I!==C&&(I===td?i.cullFace(i.BACK):I===fg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),C=I}function R(I){I!==F&&(G&&i.lineWidth(I),F=I)}function Ge(I,de,ce){I?(oe(i.POLYGON_OFFSET_FILL),(k!==de||X!==ce)&&(k=de,X=ce,o.getReversed()&&(de=-de),i.polygonOffset(de,ce))):ae(i.POLYGON_OFFSET_FILL)}function ye(I){I?oe(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function He(I){I===void 0&&(I=i.TEXTURE0+B-1),K!==I&&(i.activeTexture(I),K=I)}function ue(I,de,ce){ce===void 0&&(K===null?ce=i.TEXTURE0+B-1:ce=K);let Te=fe[ce];Te===void 0&&(Te={type:void 0,texture:void 0},fe[ce]=Te),(Te.type!==I||Te.texture!==de)&&(K!==ce&&(i.activeTexture(ce),K=ce),i.bindTexture(I,de||$[I]),Te.type=I,Te.texture=de)}function T(){const I=fe[K];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(I){je("WebGLState:",I)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(I){je("WebGLState:",I)}}function j(){try{i.texSubImage2D(...arguments)}catch(I){je("WebGLState:",I)}}function J(){try{i.texSubImage3D(...arguments)}catch(I){je("WebGLState:",I)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(I){je("WebGLState:",I)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(I){je("WebGLState:",I)}}function he(){try{i.texStorage2D(...arguments)}catch(I){je("WebGLState:",I)}}function Fe(){try{i.texStorage3D(...arguments)}catch(I){je("WebGLState:",I)}}function Xe(){try{i.texImage2D(...arguments)}catch(I){je("WebGLState:",I)}}function ne(){try{i.texImage3D(...arguments)}catch(I){je("WebGLState:",I)}}function le(I){Ve.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Ve.copy(I))}function Re(I){ut.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ut.copy(I))}function Pe(I,de){let ce=c.get(de);ce===void 0&&(ce=new WeakMap,c.set(de,ce));let Te=ce.get(I);Te===void 0&&(Te=i.getUniformBlockIndex(de,I.name),ce.set(I,Te))}function Me(I,de){const Te=c.get(de).get(I);l.get(de)!==Te&&(i.uniformBlockBinding(de,Te,I.__bindingPointIndex),l.set(de,Te))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},K=null,fe={},h={},d=new WeakMap,f=[],p=null,x=!1,m=null,g=null,y=null,S=null,M=null,w=null,A=null,P=new ze(0,0,0),_=0,E=!1,z=null,C=null,F=null,k=null,X=null,Ve.set(0,0,i.canvas.width,i.canvas.height),ut.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:ae,bindFramebuffer:ke,drawBuffers:Oe,useProgram:We,setBlending:Z,setMaterial:ie,setFlipSided:ee,setCullFace:me,setLineWidth:R,setPolygonOffset:Ge,setScissorTest:ye,activeTexture:He,bindTexture:ue,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:D,texImage2D:Xe,texImage3D:ne,updateUBOMapping:Pe,uniformBlockBinding:Me,texStorage2D:he,texStorage3D:Fe,texSubImage2D:j,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:Ae,scissor:le,viewport:Re,reset:nt}}function GS(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,v){return f?new OffscreenCanvas(T,v):Bo("canvas")}function x(T,v,D){let j=1;const J=ue(T);if((J.width>D||J.height>D)&&(j=D/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(j*J.width),Ae=Math.floor(j*J.height);h===void 0&&(h=p(q,Ae));const he=v?p(q,Ae):h;return he.width=q,he.height=Ae,he.getContext("2d").drawImage(T,0,0,q,Ae),Ne("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+Ae+")."),he}else return"data"in T&&Ne("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function g(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(T,v,D,j,J=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=v;if(v===i.RED&&(D===i.FLOAT&&(q=i.R32F),D===i.HALF_FLOAT&&(q=i.R16F),D===i.UNSIGNED_BYTE&&(q=i.R8)),v===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(q=i.R8UI),D===i.UNSIGNED_SHORT&&(q=i.R16UI),D===i.UNSIGNED_INT&&(q=i.R32UI),D===i.BYTE&&(q=i.R8I),D===i.SHORT&&(q=i.R16I),D===i.INT&&(q=i.R32I)),v===i.RG&&(D===i.FLOAT&&(q=i.RG32F),D===i.HALF_FLOAT&&(q=i.RG16F),D===i.UNSIGNED_BYTE&&(q=i.RG8)),v===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(q=i.RG8UI),D===i.UNSIGNED_SHORT&&(q=i.RG16UI),D===i.UNSIGNED_INT&&(q=i.RG32UI),D===i.BYTE&&(q=i.RG8I),D===i.SHORT&&(q=i.RG16I),D===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(q=i.RGB8UI),D===i.UNSIGNED_SHORT&&(q=i.RGB16UI),D===i.UNSIGNED_INT&&(q=i.RGB32UI),D===i.BYTE&&(q=i.RGB8I),D===i.SHORT&&(q=i.RGB16I),D===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),D===i.UNSIGNED_INT&&(q=i.RGBA32UI),D===i.BYTE&&(q=i.RGBA8I),D===i.SHORT&&(q=i.RGBA16I),D===i.INT&&(q=i.RGBA32I)),v===i.RGB&&(D===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),v===i.RGBA){const Ae=J?il:lt.getTransfer(j);D===i.FLOAT&&(q=i.RGBA32F),D===i.HALF_FLOAT&&(q=i.RGBA16F),D===i.UNSIGNED_BYTE&&(q=Ae===_t?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function M(T,v){let D;return T?v===null||v===xi||v===No?D=i.DEPTH24_STENCIL8:v===Ln?D=i.DEPTH32F_STENCIL8:v===Do&&(D=i.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===xi||v===No?D=i.DEPTH_COMPONENT24:v===Ln?D=i.DEPTH_COMPONENT32F:v===Do&&(D=i.DEPTH_COMPONENT16),D}function w(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ot&&T.minFilter!==Gt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){const v=T.target;v.removeEventListener("dispose",A),_(v),v.isVideoTexture&&u.delete(v)}function P(T){const v=T.target;v.removeEventListener("dispose",P),z(v)}function _(T){const v=n.get(T);if(v.__webglInit===void 0)return;const D=T.source,j=d.get(D);if(j){const J=j[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(T),Object.keys(j).length===0&&d.delete(D)}n.remove(T)}function E(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const D=T.source,j=d.get(D);delete j[v.__cacheKey],o.memory.textures--}function z(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let J=0;J<v.__webglFramebuffer[j].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[j][J]);else i.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)i.deleteFramebuffer(v.__webglFramebuffer[j]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const D=T.textures;for(let j=0,J=D.length;j<J;j++){const q=n.get(D[j]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(D[j])}n.remove(T)}let C=0;function F(){C=0}function k(){const T=C;return T>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function X(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function B(T,v){const D=n.get(T);if(T.isVideoTexture&&ye(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&D.__version!==T.version){const j=T.image;if(j===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{$(D,T,v);return}}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+v)}function G(T,v){const D=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){$(D,T,v);return}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+v)}function N(T,v){const D=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){$(D,T,v);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+v)}function Q(T,v){const D=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&D.__version!==T.version){oe(D,T,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+v)}const K={[jr]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[nl]:i.MIRRORED_REPEAT},fe={[Ot]:i.NEAREST,[hp]:i.NEAREST_MIPMAP_NEAREST,[wo]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[qa]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},xe={[zg]:i.NEVER,[Xg]:i.ALWAYS,[kg]:i.LESS,[lh]:i.LEQUAL,[Gg]:i.EQUAL,[ch]:i.GEQUAL,[Vg]:i.GREATER,[Hg]:i.NOTEQUAL};function pe(T,v){if(v.type===Ln&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Gt||v.magFilter===qa||v.magFilter===wo||v.magFilter===Fi||v.minFilter===Gt||v.minFilter===qa||v.minFilter===wo||v.minFilter===Fi)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,K[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,K[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,K[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,fe[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,fe[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ot||v.minFilter!==wo&&v.minFilter!==Fi||v.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ve(T,v){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));const j=v.source;let J=d.get(j);J===void 0&&(J={},d.set(j,J));const q=X(v);if(q!==T.__cacheKey){J[q]===void 0&&(J[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,D=!0),J[q].usedTimes++;const Ae=J[T.__cacheKey];Ae!==void 0&&(J[T.__cacheKey].usedTimes--,Ae.usedTimes===0&&E(v)),T.__cacheKey=q,T.__webglTexture=J[q].texture}return D}function ut(T,v,D){return Math.floor(Math.floor(T/D)/v)}function ct(T,v,D,j){const q=T.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,D,j,v.data);else{q.sort((ne,le)=>ne.start-le.start);let Ae=0;for(let ne=1;ne<q.length;ne++){const le=q[Ae],Re=q[ne],Pe=le.start+le.count,Me=ut(Re.start,v.width,4),nt=ut(le.start,v.width,4);Re.start<=Pe+1&&Me===nt&&ut(Re.start+Re.count-1,v.width,4)===Me?le.count=Math.max(le.count,Re.start+Re.count-le.start):(++Ae,q[Ae]=Re)}q.length=Ae+1;const he=i.getParameter(i.UNPACK_ROW_LENGTH),Fe=i.getParameter(i.UNPACK_SKIP_PIXELS),Xe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ne=0,le=q.length;ne<le;ne++){const Re=q[ne],Pe=Math.floor(Re.start/4),Me=Math.ceil(Re.count/4),nt=Pe%v.width,I=Math.floor(Pe/v.width),de=Me,ce=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,nt,I,de,ce,D,j,v.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,he),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Xe)}}function $(T,v,D){let j=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=i.TEXTURE_3D);const J=Ve(T,v),q=v.source;t.bindTexture(j,T.__webglTexture,i.TEXTURE0+D);const Ae=n.get(q);if(q.version!==Ae.__version||J===!0){t.activeTexture(i.TEXTURE0+D);const he=lt.getPrimaries(lt.workingColorSpace),Fe=v.colorSpace===cs?null:lt.getPrimaries(v.colorSpace),Xe=v.colorSpace===cs||he===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let ne=x(v.image,!1,s.maxTextureSize);ne=He(v,ne);const le=r.convert(v.format,v.colorSpace),Re=r.convert(v.type);let Pe=S(v.internalFormat,le,Re,v.colorSpace,v.isVideoTexture);pe(j,v);let Me;const nt=v.mipmaps,I=v.isVideoTexture!==!0,de=Ae.__version===void 0||J===!0,ce=q.dataReady,Te=w(v,ne);if(v.isDepthTexture)Pe=M(v.format===Vs,v.type),de&&(I?t.texStorage2D(i.TEXTURE_2D,1,Pe,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Pe,ne.width,ne.height,0,le,Re,null));else if(v.isDataTexture)if(nt.length>0){I&&de&&t.texStorage2D(i.TEXTURE_2D,Te,Pe,nt[0].width,nt[0].height);for(let se=0,Y=nt.length;se<Y;se++)Me=nt[se],I?ce&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Me.width,Me.height,le,Re,Me.data):t.texImage2D(i.TEXTURE_2D,se,Pe,Me.width,Me.height,0,le,Re,Me.data);v.generateMipmaps=!1}else I?(de&&t.texStorage2D(i.TEXTURE_2D,Te,Pe,ne.width,ne.height),ce&&ct(v,ne,le,Re)):t.texImage2D(i.TEXTURE_2D,0,Pe,ne.width,ne.height,0,le,Re,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Pe,nt[0].width,nt[0].height,ne.depth);for(let se=0,Y=nt.length;se<Y;se++)if(Me=nt[se],v.format!==In)if(le!==null)if(I){if(ce)if(v.layerUpdates.size>0){const Ce=ef(Me.width,Me.height,v.format,v.type);for(const Ke of v.layerUpdates){const Et=Me.data.subarray(Ke*Ce/Me.data.BYTES_PER_ELEMENT,(Ke+1)*Ce/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,Ke,Me.width,Me.height,1,le,Et)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Me.width,Me.height,ne.depth,le,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Pe,Me.width,Me.height,ne.depth,0,Me.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Me.width,Me.height,ne.depth,le,Re,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Pe,Me.width,Me.height,ne.depth,0,le,Re,Me.data)}else{I&&de&&t.texStorage2D(i.TEXTURE_2D,Te,Pe,nt[0].width,nt[0].height);for(let se=0,Y=nt.length;se<Y;se++)Me=nt[se],v.format!==In?le!==null?I?ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Me.width,Me.height,le,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Pe,Me.width,Me.height,0,Me.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ce&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Me.width,Me.height,le,Re,Me.data):t.texImage2D(i.TEXTURE_2D,se,Pe,Me.width,Me.height,0,le,Re,Me.data)}else if(v.isDataArrayTexture)if(I){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Pe,ne.width,ne.height,ne.depth),ce)if(v.layerUpdates.size>0){const se=ef(ne.width,ne.height,v.format,v.type);for(const Y of v.layerUpdates){const Ce=ne.data.subarray(Y*se/ne.data.BYTES_PER_ELEMENT,(Y+1)*se/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,ne.width,ne.height,1,le,Re,Ce)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,le,Re,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,ne.width,ne.height,ne.depth,0,le,Re,ne.data);else if(v.isData3DTexture)I?(de&&t.texStorage3D(i.TEXTURE_3D,Te,Pe,ne.width,ne.height,ne.depth),ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,le,Re,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,ne.width,ne.height,ne.depth,0,le,Re,ne.data);else if(v.isFramebufferTexture){if(de)if(I)t.texStorage2D(i.TEXTURE_2D,Te,Pe,ne.width,ne.height);else{let se=ne.width,Y=ne.height;for(let Ce=0;Ce<Te;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,Pe,se,Y,0,le,Re,null),se>>=1,Y>>=1}}else if(nt.length>0){if(I&&de){const se=ue(nt[0]);t.texStorage2D(i.TEXTURE_2D,Te,Pe,se.width,se.height)}for(let se=0,Y=nt.length;se<Y;se++)Me=nt[se],I?ce&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,le,Re,Me):t.texImage2D(i.TEXTURE_2D,se,Pe,le,Re,Me);v.generateMipmaps=!1}else if(I){if(de){const se=ue(ne);t.texStorage2D(i.TEXTURE_2D,Te,Pe,se.width,se.height)}ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Re,ne)}else t.texImage2D(i.TEXTURE_2D,0,Pe,le,Re,ne);m(v)&&g(j),Ae.__version=q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function oe(T,v,D){if(v.image.length!==6)return;const j=Ve(T,v),J=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+D);const q=n.get(J);if(J.version!==q.__version||j===!0){t.activeTexture(i.TEXTURE0+D);const Ae=lt.getPrimaries(lt.workingColorSpace),he=v.colorSpace===cs?null:lt.getPrimaries(v.colorSpace),Fe=v.colorSpace===cs||Ae===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Xe=v.isCompressedTexture||v.image[0].isCompressedTexture,ne=v.image[0]&&v.image[0].isDataTexture,le=[];for(let Y=0;Y<6;Y++)!Xe&&!ne?le[Y]=x(v.image[Y],!0,s.maxCubemapSize):le[Y]=ne?v.image[Y].image:v.image[Y],le[Y]=He(v,le[Y]);const Re=le[0],Pe=r.convert(v.format,v.colorSpace),Me=r.convert(v.type),nt=S(v.internalFormat,Pe,Me,v.colorSpace),I=v.isVideoTexture!==!0,de=q.__version===void 0||j===!0,ce=J.dataReady;let Te=w(v,Re);pe(i.TEXTURE_CUBE_MAP,v);let se;if(Xe){I&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,nt,Re.width,Re.height);for(let Y=0;Y<6;Y++){se=le[Y].mipmaps;for(let Ce=0;Ce<se.length;Ce++){const Ke=se[Ce];v.format!==In?Pe!==null?I?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ce,0,0,Ke.width,Ke.height,Pe,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ce,nt,Ke.width,Ke.height,0,Ke.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ce,0,0,Ke.width,Ke.height,Pe,Me,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ce,nt,Ke.width,Ke.height,0,Pe,Me,Ke.data)}}}else{if(se=v.mipmaps,I&&de){se.length>0&&Te++;const Y=ue(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,nt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ne){I?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,le[Y].width,le[Y].height,Pe,Me,le[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,nt,le[Y].width,le[Y].height,0,Pe,Me,le[Y].data);for(let Ce=0;Ce<se.length;Ce++){const Et=se[Ce].image[Y].image;I?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ce+1,0,0,Et.width,Et.height,Pe,Me,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ce+1,nt,Et.width,Et.height,0,Pe,Me,Et.data)}}else{I?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Pe,Me,le[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,nt,Pe,Me,le[Y]);for(let Ce=0;Ce<se.length;Ce++){const Ke=se[Ce];I?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ce+1,0,0,Pe,Me,Ke.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ce+1,nt,Pe,Me,Ke.image[Y])}}}m(v)&&g(i.TEXTURE_CUBE_MAP),q.__version=J.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ae(T,v,D,j,J,q){const Ae=r.convert(D.format,D.colorSpace),he=r.convert(D.type),Fe=S(D.internalFormat,Ae,he,D.colorSpace),Xe=n.get(v),ne=n.get(D);if(ne.__renderTarget=v,!Xe.__hasExternalTextures){const le=Math.max(1,v.width>>q),Re=Math.max(1,v.height>>q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,q,Fe,le,Re,v.depth,0,Ae,he,null):t.texImage2D(J,q,Fe,le,Re,0,Ae,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ge(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,J,ne.__webglTexture,0,R(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,J,ne.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(T,v,D){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const j=v.depthTexture,J=j&&j.isDepthTexture?j.type:null,q=M(v.stencilBuffer,J),Ae=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ge(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R(v),q,v.width,v.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,R(v),q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,T)}else{const j=v.textures;for(let J=0;J<j.length;J++){const q=j[J],Ae=r.convert(q.format,q.colorSpace),he=r.convert(q.type),Fe=S(q.internalFormat,Ae,he,q.colorSpace);Ge(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R(v),Fe,v.width,v.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,R(v),Fe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Fe,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(T,v,D){const j=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(v.depthTexture);if(J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j){if(J.__webglInit===void 0&&(J.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),pe(i.TEXTURE_CUBE_MAP,v.depthTexture);const Xe=r.convert(v.depthTexture.format),ne=r.convert(v.depthTexture.type);let le;v.depthTexture.format===qi?le=i.DEPTH_COMPONENT24:v.depthTexture.format===Vs&&(le=i.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,le,v.width,v.height,0,Xe,ne,null)}}else B(v.depthTexture,0);const q=J.__webglTexture,Ae=R(v),he=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+D:i.TEXTURE_2D,Fe=v.depthTexture.format===Vs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===qi)Ge(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Fe,he,q,0,Ae):i.framebufferTexture2D(i.FRAMEBUFFER,Fe,he,q,0);else if(v.depthTexture.format===Vs)Ge(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Fe,he,q,0,Ae):i.framebufferTexture2D(i.FRAMEBUFFER,Fe,he,q,0);else throw new Error("Unknown depthTexture format")}function We(T){const v=n.get(T),D=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=j}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(D)for(let j=0;j<6;j++)Oe(v.__webglFramebuffer[j],T,j);else{const j=T.texture.mipmaps;j&&j.length>0?Oe(v.__webglFramebuffer[0],T,0):Oe(v.__webglFramebuffer,T,0)}else if(D){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=i.createRenderbuffer(),ke(v.__webglDepthbuffer[j],T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}else{const j=T.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ke(v.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(T,v,D){const j=n.get(T);v!==void 0&&ae(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&We(T)}function Ye(T){const v=T.texture,D=n.get(T),j=n.get(v);T.addEventListener("dispose",P);const J=T.textures,q=T.isWebGLCubeRenderTarget===!0,Ae=J.length>1;if(Ae||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=v.version,o.memory.textures++),q){D.__webglFramebuffer=[];for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[he]=[];for(let Fe=0;Fe<v.mipmaps.length;Fe++)D.__webglFramebuffer[he][Fe]=i.createFramebuffer()}else D.__webglFramebuffer[he]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let he=0;he<v.mipmaps.length;he++)D.__webglFramebuffer[he]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let he=0,Fe=J.length;he<Fe;he++){const Xe=n.get(J[he]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Ge(T)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let he=0;he<J.length;he++){const Fe=J[he];D.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[he]);const Xe=r.convert(Fe.format,Fe.colorSpace),ne=r.convert(Fe.type),le=S(Fe.internalFormat,Xe,ne,Fe.colorSpace,T.isXRRenderTarget===!0),Re=R(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,le,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,D.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(D.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),pe(i.TEXTURE_CUBE_MAP,v);for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0)for(let Fe=0;Fe<v.mipmaps.length;Fe++)ae(D.__webglFramebuffer[he][Fe],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Fe);else ae(D.__webglFramebuffer[he],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(v)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let he=0,Fe=J.length;he<Fe;he++){const Xe=J[he],ne=n.get(Xe);let le=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(le=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,ne.__webglTexture),pe(le,Xe),ae(D.__webglFramebuffer,T,Xe,i.COLOR_ATTACHMENT0+he,le,0),m(Xe)&&g(le)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,j.__webglTexture),pe(he,v),v.mipmaps&&v.mipmaps.length>0)for(let Fe=0;Fe<v.mipmaps.length;Fe++)ae(D.__webglFramebuffer[Fe],T,v,i.COLOR_ATTACHMENT0,he,Fe);else ae(D.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,he,0);m(v)&&g(he),t.unbindTexture()}T.depthBuffer&&We(T)}function Z(T){const v=T.textures;for(let D=0,j=v.length;D<j;D++){const J=v[D];if(m(J)){const q=y(T),Ae=n.get(J).__webglTexture;t.bindTexture(q,Ae),g(q),t.unbindTexture()}}}const ie=[],ee=[];function me(T){if(T.samples>0){if(Ge(T)===!1){const v=T.textures,D=T.width,j=T.height;let J=i.COLOR_BUFFER_BIT;const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(T),he=v.length>1;if(he)for(let Xe=0;Xe<v.length;Xe++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Fe=T.texture.mipmaps;Fe&&Fe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Xe=0;Xe<v.length;Xe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Xe]);const ne=n.get(v[Xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,D,j,0,0,D,j,J,i.NEAREST),l===!0&&(ie.length=0,ee.length=0,ie.push(i.COLOR_ATTACHMENT0+Xe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ie.push(q),ee.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Xe=0;Xe<v.length;Xe++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Xe]);const ne=n.get(v[Xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function R(T){return Math.min(s.maxSamples,T.samples)}function Ge(T){const v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ye(T){const v=o.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function He(T,v){const D=T.colorSpace,j=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==dn&&D!==cs&&(lt.getTransfer(D)===_t?(j!==In||J!==En)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",D)),v}function ue(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=B,this.setTexture2DArray=G,this.setTexture3D=N,this.setTextureCube=Q,this.rebindTextures=pt,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ge,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function VS(i,e){function t(n,s=cs){let r;const o=lt.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===th)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mp)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===dp)return i.BYTE;if(n===fp)return i.SHORT;if(n===Do)return i.UNSIGNED_SHORT;if(n===eh)return i.INT;if(n===xi)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===ji)return i.HALF_FLOAT;if(n===gp)return i.ALPHA;if(n===xp)return i.RGB;if(n===In)return i.RGBA;if(n===qi)return i.DEPTH_COMPONENT;if(n===Vs)return i.DEPTH_STENCIL;if(n===ih)return i.RED;if(n===sh)return i.RED_INTEGER;if(n===qr)return i.RG;if(n===rh)return i.RG_INTEGER;if(n===oh)return i.RGBA_INTEGER;if(n===Ya||n===$a||n===Ka||n===Za)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qc||n===eu||n===tu||n===nu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===iu||n===su||n===ru||n===ou||n===au||n===lu||n===cu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===iu||n===su)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ru)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ou)return r.COMPRESSED_R11_EAC;if(n===au)return r.COMPRESSED_SIGNED_R11_EAC;if(n===lu)return r.COMPRESSED_RG11_EAC;if(n===cu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===uu||n===hu||n===du||n===fu||n===pu||n===mu||n===gu||n===xu||n===_u||n===vu||n===yu||n===Mu||n===Su||n===bu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===uu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===du)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_u)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Su)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bu)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eu||n===Tu||n===wu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Eu)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Au||n===Ru||n===Cu||n===Pu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Au)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ru)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===No?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const HS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class WS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Np(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Zn({vertexShader:HS,fragmentShader:XS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new no(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jS extends to{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",m=new WS,g={},y=t.getContextAttributes();let S=null,M=null;const w=[],A=[],P=new re;let _=null;const E=new ln;E.viewport=new Ct;const z=new ln;z.viewport=new Ct;const C=[E,z],F=new Yx;let k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let oe=w[$];return oe===void 0&&(oe=new Jl,w[$]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function($){let oe=w[$];return oe===void 0&&(oe=new Jl,w[$]=oe),oe.getGripSpace()},this.getHand=function($){let oe=w[$];return oe===void 0&&(oe=new Jl,w[$]=oe),oe.getHandSpace()};function B($){const oe=A.indexOf($.inputSource);if(oe===-1)return;const ae=w[oe];ae!==void 0&&(ae.update($.inputSource,$.frame,c||o),ae.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",N);for(let $=0;$<w.length;$++){const oe=A[$];oe!==null&&(A[$]=null,w[$].disconnect(oe))}k=null,X=null,m.reset();for(const $ in g)delete g[$];e.setRenderTarget(S),f=null,d=null,h=null,s=null,M=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",N),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,ke=null,Oe=null;y.depth&&(Oe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=y.stencil?Vs:qi,ke=y.stencil?No:xi);const We={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(We),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Yn(d.textureWidth,d.textureHeight,{format:In,type:En,depthTexture:new ko(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ae={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Yn(f.framebufferWidth,f.framebufferHeight,{format:In,type:En,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N($){for(let oe=0;oe<$.removed.length;oe++){const ae=$.removed[oe],ke=A.indexOf(ae);ke>=0&&(A[ke]=null,w[ke].disconnect(ae))}for(let oe=0;oe<$.added.length;oe++){const ae=$.added[oe];let ke=A.indexOf(ae);if(ke===-1){for(let We=0;We<w.length;We++)if(We>=A.length){A.push(ae),ke=We;break}else if(A[We]===null){A[We]=ae,ke=We;break}if(ke===-1)break}const Oe=w[ke];Oe&&Oe.connect(ae)}}const Q=new L,K=new L;function fe($,oe,ae){Q.setFromMatrixPosition(oe.matrixWorld),K.setFromMatrixPosition(ae.matrixWorld);const ke=Q.distanceTo(K),Oe=oe.projectionMatrix.elements,We=ae.projectionMatrix.elements,pt=Oe[14]/(Oe[10]-1),Ye=Oe[14]/(Oe[10]+1),Z=(Oe[9]+1)/Oe[5],ie=(Oe[9]-1)/Oe[5],ee=(Oe[8]-1)/Oe[0],me=(We[8]+1)/We[0],R=pt*ee,Ge=pt*me,ye=ke/(-ee+me),He=ye*-ee;if(oe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(He),$.translateZ(ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Oe[10]===-1)$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const ue=pt+ye,T=Ye+ye,v=R-He,D=Ge+(ke-He),j=Z*Ye/T*ue,J=ie*Ye/T*ue;$.projectionMatrix.makePerspective(v,D,j,J,ue,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function xe($,oe){oe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(oe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let oe=$.near,ae=$.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),F.near=z.near=E.near=oe,F.far=z.far=E.far=ae,(k!==F.near||X!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,X=F.far),F.layers.mask=$.layers.mask|6,E.layers.mask=F.layers.mask&-5,z.layers.mask=F.layers.mask&-3;const ke=$.parent,Oe=F.cameras;xe(F,ke);for(let We=0;We<Oe.length;We++)xe(Oe[We],ke);Oe.length===2?fe(F,E,z):F.projectionMatrix.copy(E.projectionMatrix),pe($,F,ke)};function pe($,oe,ae){ae===null?$.matrix.copy(oe.matrixWorld):($.matrix.copy(ae.matrixWorld),$.matrix.invert(),$.matrix.multiply(oe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Yr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function($){return g[$]};let Ve=null;function ut($,oe){if(u=oe.getViewerPose(c||o),p=oe,u!==null){const ae=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let ke=!1;ae.length!==F.cameras.length&&(F.cameras.length=0,ke=!0);for(let Ye=0;Ye<ae.length;Ye++){const Z=ae[Ye];let ie=null;if(f!==null)ie=f.getViewport(Z);else{const me=h.getViewSubImage(d,Z);ie=me.viewport,Ye===0&&(e.setRenderTargetTextures(M,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(M))}let ee=C[Ye];ee===void 0&&(ee=new ln,ee.layers.enable(Ye),ee.viewport=new Ct,C[Ye]=ee),ee.matrix.fromArray(Z.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Z.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ie.x,ie.y,ie.width,ie.height),Ye===0&&(F.matrix.copy(ee.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ke===!0&&F.cameras.push(ee)}const Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const Ye=h.getDepthInformation(ae[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,s.renderState)}if(Oe&&Oe.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let Ye=0;Ye<ae.length;Ye++){const Z=ae[Ye].camera;if(Z){let ie=g[Z];ie||(ie=new Np,g[Z]=ie);const ee=h.getCameraImage(Z);ie.sourceTexture=ee}}}}for(let ae=0;ae<w.length;ae++){const ke=A[ae],Oe=w[ae];ke!==null&&Oe!==void 0&&Oe.update(ke,oe,c||o)}Ve&&Ve($,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),p=null}const ct=new Zp;ct.setAnimationLoop(ut),this.setAnimationLoop=function($){Ve=$},this.dispose=function(){}}}const Ds=new Kn,qS=new Je;function YS(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Xp(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,S,M){g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===_n&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===_n&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const y=e.get(g),S=y.envMap,M=y.envMapRotation;S&&(m.envMap.value=S,Ds.copy(M),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),m.envMapRotation.value.setFromMatrix4(qS.makeRotationFromEuler(Ds)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===_n&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $S(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const M=S.program;n.uniformBlockBinding(y,M)}function c(y,S){let M=s[y.id];M===void 0&&(p(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",m));const w=S.program;n.updateUBOMapping(y,w);const A=e.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function u(y){const S=h();y.__bindingPointIndex=S;const M=i.createBuffer(),w=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=s[y.id],M=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,P=M.length;A<P;A++){const _=Array.isArray(M[A])?M[A]:[M[A]];for(let E=0,z=_.length;E<z;E++){const C=_[E];if(f(C,A,E,w)===!0){const F=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let B=0;B<k.length;B++){const G=k[B],N=x(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,F+X,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,X),X+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,S,M,w){const A=y.value,P=S+"_"+M;if(w[P]===void 0)return typeof A=="number"||typeof A=="boolean"?w[P]=A:w[P]=A.clone(),!0;{const _=w[P];if(typeof A=="number"||typeof A=="boolean"){if(_!==A)return w[P]=A,!0}else if(_.equals(A)===!1)return _.copy(A),!0}return!1}function p(y){const S=y.uniforms;let M=0;const w=16;for(let P=0,_=S.length;P<_;P++){const E=Array.isArray(S[P])?S[P]:[S[P]];for(let z=0,C=E.length;z<C;z++){const F=E[z],k=Array.isArray(F.value)?F.value:[F.value];for(let X=0,B=k.length;X<B;X++){const G=k[X],N=x(G),Q=M%w,K=Q%N.boundary,fe=Q+K;M+=K,fe!==0&&w-fe<N.storage&&(M+=w-fe),F.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=N.storage}}}const A=M%w;return A>0&&(M+=w-A),y.__size=M,y.__cache={},this}function x(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ne("WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}const KS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function ZS(){return oi===null&&(oi=new fh(KS,16,16,qr,ji),oi.name="DFG_LUT",oi.minFilter=Gt,oi.magFilter=Gt,oi.wrapS=di,oi.wrapT=di,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class JS{constructor(e={}){const{canvas:t=qg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=En}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=f,m=new Set([oh,rh,sh]),g=new Set([En,xi,Do,No,th,nh]),y=new Uint32Array(4),S=new Int32Array(4);let M=null,w=null;const A=[],P=[];let _=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let z=!1;this._outputColorSpace=$t;let C=0,F=0,k=null,X=-1,B=null;const G=new Ct,N=new Ct;let Q=null;const K=new ze(0);let fe=0,xe=t.width,pe=t.height,Ve=1,ut=null,ct=null;const $=new Ct(0,0,xe,pe),oe=new Ct(0,0,xe,pe);let ae=!1;const ke=new gh;let Oe=!1,We=!1;const pt=new Je,Ye=new L,Z=new Ct,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function me(){return k===null?Ve:1}let R=n;function Ge(b,O){return t.getContext(b,O)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ju}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Et,!1),R===null){const O="webgl2";if(R=Ge(O,b),R===null)throw Ge(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw je("WebGLRenderer: "+b.message),b}let ye,He,ue,T,v,D,j,J,q,Ae,he,Fe,Xe,ne,le,Re,Pe,Me,nt,I,de,ce,Te;function se(){ye=new Jy(R),ye.init(),de=new VS(R,ye),He=new Xy(R,ye,e,de),ue=new kS(R,ye),He.reversedDepthBuffer&&d&&ue.buffers.depth.setReversed(!0),T=new tM(R),v=new wS,D=new GS(R,ye,ue,v,He,de,T),j=new Zy(E),J=new o_(R),ce=new Vy(R,J),q=new Qy(R,J,T,ce),Ae=new iM(R,q,J,ce,T),Me=new nM(R,He,D),le=new Wy(v),he=new TS(E,j,ye,He,ce,le),Fe=new YS(E,v),Xe=new RS,ne=new NS(ye),Pe=new Gy(E,j,ue,Ae,p,l),Re=new zS(E,Ae,He),Te=new $S(R,T,He,ue),nt=new Hy(R,ye,T),I=new eM(R,ye,T),T.programs=he.programs,E.capabilities=He,E.extensions=ye,E.properties=v,E.renderLists=Xe,E.shadowMap=Re,E.state=ue,E.info=T}se(),x!==En&&(_=new rM(x,t.width,t.height,s,r));const Y=new jS(E,R);this.xr=Y,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=ye.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ye.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ve},this.setPixelRatio=function(b){b!==void 0&&(Ve=b,this.setSize(xe,pe,!1))},this.getSize=function(b){return b.set(xe,pe)},this.setSize=function(b,O,W=!0){if(Y.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=b,pe=O,t.width=Math.floor(b*Ve),t.height=Math.floor(O*Ve),W===!0&&(t.style.width=b+"px",t.style.height=O+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(xe*Ve,pe*Ve).floor()},this.setDrawingBufferSize=function(b,O,W){xe=b,pe=O,Ve=W,t.width=Math.floor(b*W),t.height=Math.floor(O*W),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(x===En){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(G)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,O,W,H){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,O,W,H),ue.viewport(G.copy($).multiplyScalar(Ve).round())},this.getScissor=function(b){return b.copy(oe)},this.setScissor=function(b,O,W,H){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,O,W,H),ue.scissor(N.copy(oe).multiplyScalar(Ve).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(b){ue.setScissorTest(ae=b)},this.setOpaqueSort=function(b){ut=b},this.setTransparentSort=function(b){ct=b},this.getClearColor=function(b){return b.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,W=!0){let H=0;if(b){let V=!1;if(k!==null){const _e=k.texture.format;V=m.has(_e)}if(V){const _e=k.texture.type,be=g.has(_e),ve=Pe.getClearColor(),Le=Pe.getClearAlpha(),Ue=ve.r,Ze=ve.g,it=ve.b;be?(y[0]=Ue,y[1]=Ze,y[2]=it,y[3]=Le,R.clearBufferuiv(R.COLOR,0,y)):(S[0]=Ue,S[1]=Ze,S[2]=it,S[3]=Le,R.clearBufferiv(R.COLOR,0,S))}else H|=R.COLOR_BUFFER_BIT}O&&(H|=R.DEPTH_BUFFER_BIT),W&&(H|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),Pe.dispose(),Xe.dispose(),ne.dispose(),v.dispose(),j.dispose(),Ae.dispose(),ce.dispose(),Te.dispose(),he.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",qh),Y.removeEventListener("sessionend",Yh),ws.stop()};function Ce(b){b.preventDefault(),sl("WebGLRenderer: Context Lost."),z=!0}function Ke(){sl("WebGLRenderer: Context Restored."),z=!1;const b=T.autoReset,O=Re.enabled,W=Re.autoUpdate,H=Re.needsUpdate,V=Re.type;se(),T.autoReset=b,Re.enabled=O,Re.autoUpdate=W,Re.needsUpdate=H,Re.type=V}function Et(b){je("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function xt(b){const O=b.target;O.removeEventListener("dispose",xt),wi(O)}function wi(b){Ai(b),v.remove(b)}function Ai(b){const O=v.get(b).programs;O!==void 0&&(O.forEach(function(W){he.releaseProgram(W)}),b.isShaderMaterial&&he.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,W,H,V,_e){O===null&&(O=ie);const be=V.isMesh&&V.matrixWorld.determinant()<0,ve=og(b,O,W,H,V);ue.setMaterial(H,be);let Le=W.index,Ue=1;if(H.wireframe===!0){if(Le=q.getWireframeAttribute(W),Le===void 0)return;Ue=2}const Ze=W.drawRange,it=W.attributes.position;let Be=Ze.start*Ue,Mt=(Ze.start+Ze.count)*Ue;_e!==null&&(Be=Math.max(Be,_e.start*Ue),Mt=Math.min(Mt,(_e.start+_e.count)*Ue)),Le!==null?(Be=Math.max(Be,0),Mt=Math.min(Mt,Le.count)):it!=null&&(Be=Math.max(Be,0),Mt=Math.min(Mt,it.count));const Ut=Mt-Be;if(Ut<0||Ut===1/0)return;ce.setup(V,H,ve,W,Le);let Dt,St=nt;if(Le!==null&&(Dt=J.get(Le),St=I,St.setIndex(Dt)),V.isMesh)H.wireframe===!0?(ue.setLineWidth(H.wireframeLinewidth*me()),St.setMode(R.LINES)):St.setMode(R.TRIANGLES);else if(V.isLine){let en=H.linewidth;en===void 0&&(en=1),ue.setLineWidth(en*me()),V.isLineSegments?St.setMode(R.LINES):V.isLineLoop?St.setMode(R.LINE_LOOP):St.setMode(R.LINE_STRIP)}else V.isPoints?St.setMode(R.POINTS):V.isSprite&&St.setMode(R.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)rl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))St.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const en=V._multiDrawStarts,Ie=V._multiDrawCounts,vn=V._multiDrawCount,ht=Le?J.get(Le).bytesPerElement:1,Gn=v.get(H).currentProgram.getUniforms();for(let si=0;si<vn;si++)Gn.setValue(R,"_gl_DrawID",si),St.render(en[si]/ht,Ie[si])}else if(V.isInstancedMesh)St.renderInstances(Be,Ut,V.count);else if(W.isInstancedBufferGeometry){const en=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ie=Math.min(W.instanceCount,en);St.renderInstances(Be,Ut,Ie)}else St.render(Be,Ut)};function jh(b,O,W){b.transparent===!0&&b.side===cn&&b.forceSinglePass===!1?(b.side=_n,b.needsUpdate=!0,ra(b,O,W),b.side=Wi,b.needsUpdate=!0,ra(b,O,W),b.side=cn):ra(b,O,W)}this.compile=function(b,O,W=null){W===null&&(W=b),w=ne.get(W),w.init(O),P.push(w),W.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),b!==W&&b.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights();const H=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const _e=V.material;if(_e)if(Array.isArray(_e))for(let be=0;be<_e.length;be++){const ve=_e[be];jh(ve,W,V),H.add(ve)}else jh(_e,W,V),H.add(_e)}),w=P.pop(),H},this.compileAsync=function(b,O,W=null){const H=this.compile(b,O,W);return new Promise(V=>{function _e(){if(H.forEach(function(be){v.get(be).currentProgram.isReady()&&H.delete(be)}),H.size===0){V(b);return}setTimeout(_e,10)}ye.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Vl=null;function rg(b){Vl&&Vl(b)}function qh(){ws.stop()}function Yh(){ws.start()}const ws=new Zp;ws.setAnimationLoop(rg),typeof self<"u"&&ws.setContext(self),this.setAnimationLoop=function(b){Vl=b,Y.setAnimationLoop(b),b===null?ws.stop():ws.start()},Y.addEventListener("sessionstart",qh),Y.addEventListener("sessionend",Yh),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;const W=Y.enabled===!0&&Y.isPresenting===!0,H=_!==null&&(k===null||W)&&_.begin(E,k);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(E,b,O,k),w=ne.get(b,P.length),w.init(O),P.push(w),pt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ke.setFromProjectionMatrix(pt,fi,O.reversedDepth),We=this.localClippingEnabled,Oe=le.init(this.clippingPlanes,We),M=Xe.get(b,A.length),M.init(),A.push(M),Y.enabled===!0&&Y.isPresenting===!0){const be=E.xr.getDepthSensingMesh();be!==null&&Hl(be,O,-1/0,E.sortObjects)}Hl(b,O,0,E.sortObjects),M.finish(),E.sortObjects===!0&&M.sort(ut,ct),ee=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,ee&&Pe.addToRenderList(M,b),this.info.render.frame++,Oe===!0&&le.beginShadows();const V=w.state.shadowsArray;if(Re.render(V,b,O),Oe===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&_.hasRenderPass())===!1){const be=M.opaque,ve=M.transmissive;if(w.setupLights(),O.isArrayCamera){const Le=O.cameras;if(ve.length>0)for(let Ue=0,Ze=Le.length;Ue<Ze;Ue++){const it=Le[Ue];Kh(be,ve,b,it)}ee&&Pe.render(b);for(let Ue=0,Ze=Le.length;Ue<Ze;Ue++){const it=Le[Ue];$h(M,b,it,it.viewport)}}else ve.length>0&&Kh(be,ve,b,O),ee&&Pe.render(b),$h(M,b,O)}k!==null&&F===0&&(D.updateMultisampleRenderTarget(k),D.updateRenderTargetMipmap(k)),H&&_.end(E),b.isScene===!0&&b.onAfterRender(E,b,O),ce.resetDefaultState(),X=-1,B=null,P.pop(),P.length>0?(w=P[P.length-1],Oe===!0&&le.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function Hl(b,O,W,H){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ke.intersectsSprite(b)){H&&Z.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pt);const be=Ae.update(b),ve=b.material;ve.visible&&M.push(b,be,ve,W,Z.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ke.intersectsObject(b))){const be=Ae.update(b),ve=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Z.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Z.copy(be.boundingSphere.center)),Z.applyMatrix4(b.matrixWorld).applyMatrix4(pt)),Array.isArray(ve)){const Le=be.groups;for(let Ue=0,Ze=Le.length;Ue<Ze;Ue++){const it=Le[Ue],Be=ve[it.materialIndex];Be&&Be.visible&&M.push(b,be,Be,W,Z.z,it)}}else ve.visible&&M.push(b,be,ve,W,Z.z,null)}}const _e=b.children;for(let be=0,ve=_e.length;be<ve;be++)Hl(_e[be],O,W,H)}function $h(b,O,W,H){const{opaque:V,transmissive:_e,transparent:be}=b;w.setupLightsView(W),Oe===!0&&le.setGlobalState(E.clippingPlanes,W),H&&ue.viewport(G.copy(H)),V.length>0&&sa(V,O,W),_e.length>0&&sa(_e,O,W),be.length>0&&sa(be,O,W),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Kh(b,O,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){const Be=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new Yn(1,1,{generateMipmaps:!0,type:Be?ji:En,minFilter:Fi,samples:Math.max(4,He.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const _e=w.state.transmissionRenderTarget[H.id],be=H.viewport||G;_e.setSize(be.z*E.transmissionResolutionScale,be.w*E.transmissionResolutionScale);const ve=E.getRenderTarget(),Le=E.getActiveCubeFace(),Ue=E.getActiveMipmapLevel();E.setRenderTarget(_e),E.getClearColor(K),fe=E.getClearAlpha(),fe<1&&E.setClearColor(16777215,.5),E.clear(),ee&&Pe.render(W);const Ze=E.toneMapping;E.toneMapping=mi;const it=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),Oe===!0&&le.setGlobalState(E.clippingPlanes,H),sa(b,W,H),D.updateMultisampleRenderTarget(_e),D.updateRenderTargetMipmap(_e),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Mt=0,Ut=O.length;Mt<Ut;Mt++){const Dt=O[Mt],{object:St,geometry:en,material:Ie,group:vn}=Dt;if(Ie.side===cn&&St.layers.test(H.layers)){const ht=Ie.side;Ie.side=_n,Ie.needsUpdate=!0,Zh(St,W,H,en,Ie,vn),Ie.side=ht,Ie.needsUpdate=!0,Be=!0}}Be===!0&&(D.updateMultisampleRenderTarget(_e),D.updateRenderTargetMipmap(_e))}E.setRenderTarget(ve,Le,Ue),E.setClearColor(K,fe),it!==void 0&&(H.viewport=it),E.toneMapping=Ze}function sa(b,O,W){const H=O.isScene===!0?O.overrideMaterial:null;for(let V=0,_e=b.length;V<_e;V++){const be=b[V],{object:ve,geometry:Le,group:Ue}=be;let Ze=be.material;Ze.allowOverride===!0&&H!==null&&(Ze=H),ve.layers.test(W.layers)&&Zh(ve,O,W,Le,Ze,Ue)}}function Zh(b,O,W,H,V,_e){b.onBeforeRender(E,O,W,H,V,_e),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(E,O,W,H,b,_e),V.transparent===!0&&V.side===cn&&V.forceSinglePass===!1?(V.side=_n,V.needsUpdate=!0,E.renderBufferDirect(W,O,H,V,b,_e),V.side=Wi,V.needsUpdate=!0,E.renderBufferDirect(W,O,H,V,b,_e),V.side=cn):E.renderBufferDirect(W,O,H,V,b,_e),b.onAfterRender(E,O,W,H,V,_e)}function ra(b,O,W){O.isScene!==!0&&(O=ie);const H=v.get(b),V=w.state.lights,_e=w.state.shadowsArray,be=V.state.version,ve=he.getParameters(b,V.state,_e,O,W),Le=he.getProgramCacheKey(ve);let Ue=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;const Ze=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=j.get(b.envMap||H.environment,Ze),H.envMapRotation=H.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Ue===void 0&&(b.addEventListener("dispose",xt),Ue=new Map,H.programs=Ue);let it=Ue.get(Le);if(it!==void 0){if(H.currentProgram===it&&H.lightsStateVersion===be)return Qh(b,ve),it}else ve.uniforms=he.getUniforms(b),b.onBeforeCompile(ve,E),it=he.acquireProgram(ve,Le),Ue.set(Le,it),H.uniforms=ve.uniforms;const Be=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Be.clippingPlanes=le.uniform),Qh(b,ve),H.needsLights=lg(b),H.lightsStateVersion=be,H.needsLights&&(Be.ambientLightColor.value=V.state.ambient,Be.lightProbe.value=V.state.probe,Be.directionalLights.value=V.state.directional,Be.directionalLightShadows.value=V.state.directionalShadow,Be.spotLights.value=V.state.spot,Be.spotLightShadows.value=V.state.spotShadow,Be.rectAreaLights.value=V.state.rectArea,Be.ltc_1.value=V.state.rectAreaLTC1,Be.ltc_2.value=V.state.rectAreaLTC2,Be.pointLights.value=V.state.point,Be.pointLightShadows.value=V.state.pointShadow,Be.hemisphereLights.value=V.state.hemi,Be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Be.spotLightMatrix.value=V.state.spotLightMatrix,Be.spotLightMap.value=V.state.spotLightMap,Be.pointShadowMatrix.value=V.state.pointShadowMatrix),H.currentProgram=it,H.uniformsList=null,it}function Jh(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=Ja.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Qh(b,O){const W=v.get(b);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function og(b,O,W,H,V){O.isScene!==!0&&(O=ie),D.resetTextureUnits();const _e=O.fog,be=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,ve=k===null?E.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:dn,Le=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ue=j.get(H.envMap||be,Le),Ze=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,it=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Be=!!W.morphAttributes.position,Mt=!!W.morphAttributes.normal,Ut=!!W.morphAttributes.color;let Dt=mi;H.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Dt=E.toneMapping);const St=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,en=St!==void 0?St.length:0,Ie=v.get(H),vn=w.state.lights;if(Oe===!0&&(We===!0||b!==B)){const qt=b===B&&H.id===X;le.setState(H,b,qt)}let ht=!1;H.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==vn.state.version||Ie.outputColorSpace!==ve||V.isBatchedMesh&&Ie.batching===!1||!V.isBatchedMesh&&Ie.batching===!0||V.isBatchedMesh&&Ie.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ie.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ie.instancing===!1||!V.isInstancedMesh&&Ie.instancing===!0||V.isSkinnedMesh&&Ie.skinning===!1||!V.isSkinnedMesh&&Ie.skinning===!0||V.isInstancedMesh&&Ie.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ie.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ie.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ie.instancingMorph===!1&&V.morphTexture!==null||Ie.envMap!==Ue||H.fog===!0&&Ie.fog!==_e||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==le.numPlanes||Ie.numIntersection!==le.numIntersection)||Ie.vertexAlphas!==Ze||Ie.vertexTangents!==it||Ie.morphTargets!==Be||Ie.morphNormals!==Mt||Ie.morphColors!==Ut||Ie.toneMapping!==Dt||Ie.morphTargetsCount!==en)&&(ht=!0):(ht=!0,Ie.__version=H.version);let Gn=Ie.currentProgram;ht===!0&&(Gn=ra(H,O,V));let si=!1,As=!1,rr=!1;const bt=Gn.getUniforms(),Jt=Ie.uniforms;if(ue.useProgram(Gn.program)&&(si=!0,As=!0,rr=!0),H.id!==X&&(X=H.id,As=!0),si||B!==b){ue.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),bt.setValue(R,"projectionMatrix",b.projectionMatrix),bt.setValue(R,"viewMatrix",b.matrixWorldInverse);const Qi=bt.map.cameraPosition;Qi!==void 0&&Qi.setValue(R,Ye.setFromMatrixPosition(b.matrixWorld)),He.logarithmicDepthBuffer&&bt.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&bt.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),B!==b&&(B=b,As=!0,rr=!0)}if(Ie.needsLights&&(vn.state.directionalShadowMap.length>0&&bt.setValue(R,"directionalShadowMap",vn.state.directionalShadowMap,D),vn.state.spotShadowMap.length>0&&bt.setValue(R,"spotShadowMap",vn.state.spotShadowMap,D),vn.state.pointShadowMap.length>0&&bt.setValue(R,"pointShadowMap",vn.state.pointShadowMap,D)),V.isSkinnedMesh){bt.setOptional(R,V,"bindMatrix"),bt.setOptional(R,V,"bindMatrixInverse");const qt=V.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),bt.setValue(R,"boneTexture",qt.boneTexture,D))}V.isBatchedMesh&&(bt.setOptional(R,V,"batchingTexture"),bt.setValue(R,"batchingTexture",V._matricesTexture,D),bt.setOptional(R,V,"batchingIdTexture"),bt.setValue(R,"batchingIdTexture",V._indirectTexture,D),bt.setOptional(R,V,"batchingColorTexture"),V._colorsTexture!==null&&bt.setValue(R,"batchingColorTexture",V._colorsTexture,D));const Ji=W.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&Me.update(V,W,Gn),(As||Ie.receiveShadow!==V.receiveShadow)&&(Ie.receiveShadow=V.receiveShadow,bt.setValue(R,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(Jt.envMapIntensity.value=O.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=ZS()),As&&(bt.setValue(R,"toneMappingExposure",E.toneMappingExposure),Ie.needsLights&&ag(Jt,rr),_e&&H.fog===!0&&Fe.refreshFogUniforms(Jt,_e),Fe.refreshMaterialUniforms(Jt,H,Ve,pe,w.state.transmissionRenderTarget[b.id]),Ja.upload(R,Jh(Ie),Jt,D)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ja.upload(R,Jh(Ie),Jt,D),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&bt.setValue(R,"center",V.center),bt.setValue(R,"modelViewMatrix",V.modelViewMatrix),bt.setValue(R,"normalMatrix",V.normalMatrix),bt.setValue(R,"modelMatrix",V.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const qt=H.uniformsGroups;for(let Qi=0,or=qt.length;Qi<or;Qi++){const ed=qt[Qi];Te.update(ed,Gn),Te.bind(ed,Gn)}}return Gn}function ag(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function lg(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,O,W){const H=v.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),v.get(b.texture).__webglTexture=O,v.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){const W=v.get(b);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const cg=R.createFramebuffer();this.setRenderTarget=function(b,O=0,W=0){k=b,C=O,F=W;let H=null,V=!1,_e=!1;if(b){const ve=v.get(b);if(ve.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(R.FRAMEBUFFER,ve.__webglFramebuffer),G.copy(b.viewport),N.copy(b.scissor),Q=b.scissorTest,ue.viewport(G),ue.scissor(N),ue.setScissorTest(Q),X=-1;return}else if(ve.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(ve.__hasExternalTextures)D.rebindTextures(b,v.get(b.texture).__webglTexture,v.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ze=b.depthTexture;if(ve.__boundDepthTexture!==Ze){if(Ze!==null&&v.has(Ze)&&(b.width!==Ze.image.width||b.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const Le=b.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(_e=!0);const Ue=v.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ue[O])?H=Ue[O][W]:H=Ue[O],V=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?H=v.get(b).__webglMultisampledFramebuffer:Array.isArray(Ue)?H=Ue[W]:H=Ue,G.copy(b.viewport),N.copy(b.scissor),Q=b.scissorTest}else G.copy($).multiplyScalar(Ve).floor(),N.copy(oe).multiplyScalar(Ve).floor(),Q=ae;if(W!==0&&(H=cg),ue.bindFramebuffer(R.FRAMEBUFFER,H)&&ue.drawBuffers(b,H),ue.viewport(G),ue.scissor(N),ue.setScissorTest(Q),V){const ve=v.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+O,ve.__webglTexture,W)}else if(_e){const ve=O;for(let Le=0;Le<b.textures.length;Le++){const Ue=v.get(b.textures[Le]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Le,Ue.__webglTexture,W,ve)}}else if(b!==null&&W!==0){const ve=v.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ve.__webglTexture,W)}X=-1},this.readRenderTargetPixels=function(b,O,W,H,V,_e,be,ve=0){if(!(b&&b.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=v.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Le=Le[be]),Le){ue.bindFramebuffer(R.FRAMEBUFFER,Le);try{const Ue=b.textures[ve],Ze=Ue.format,it=Ue.type;if(b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ve),!He.textureFormatReadable(Ze)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(it)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-H&&W>=0&&W<=b.height-V&&R.readPixels(O,W,H,V,de.convert(Ze),de.convert(it),_e)}finally{const Ue=k!==null?v.get(k).__webglFramebuffer:null;ue.bindFramebuffer(R.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(b,O,W,H,V,_e,be,ve=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=v.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Le=Le[be]),Le)if(O>=0&&O<=b.width-H&&W>=0&&W<=b.height-V){ue.bindFramebuffer(R.FRAMEBUFFER,Le);const Ue=b.textures[ve],Ze=Ue.format,it=Ue.type;if(b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ve),!He.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Be),R.bufferData(R.PIXEL_PACK_BUFFER,_e.byteLength,R.STREAM_READ),R.readPixels(O,W,H,V,de.convert(Ze),de.convert(it),0);const Mt=k!==null?v.get(k).__webglFramebuffer:null;ue.bindFramebuffer(R.FRAMEBUFFER,Mt);const Ut=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Yg(R,Ut,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Be),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,_e),R.deleteBuffer(Be),R.deleteSync(Ut),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,W=0){const H=Math.pow(2,-W),V=Math.floor(b.image.width*H),_e=Math.floor(b.image.height*H),be=O!==null?O.x:0,ve=O!==null?O.y:0;D.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,W,0,0,be,ve,V,_e),ue.unbindTexture()};const ug=R.createFramebuffer(),hg=R.createFramebuffer();this.copyTextureToTexture=function(b,O,W=null,H=null,V=0,_e=0){let be,ve,Le,Ue,Ze,it,Be,Mt,Ut;const Dt=b.isCompressedTexture?b.mipmaps[_e]:b.image;if(W!==null)be=W.max.x-W.min.x,ve=W.max.y-W.min.y,Le=W.isBox3?W.max.z-W.min.z:1,Ue=W.min.x,Ze=W.min.y,it=W.isBox3?W.min.z:0;else{const Jt=Math.pow(2,-V);be=Math.floor(Dt.width*Jt),ve=Math.floor(Dt.height*Jt),b.isDataArrayTexture?Le=Dt.depth:b.isData3DTexture?Le=Math.floor(Dt.depth*Jt):Le=1,Ue=0,Ze=0,it=0}H!==null?(Be=H.x,Mt=H.y,Ut=H.z):(Be=0,Mt=0,Ut=0);const St=de.convert(O.format),en=de.convert(O.type);let Ie;O.isData3DTexture?(D.setTexture3D(O,0),Ie=R.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(D.setTexture2DArray(O,0),Ie=R.TEXTURE_2D_ARRAY):(D.setTexture2D(O,0),Ie=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,O.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,O.unpackAlignment);const vn=R.getParameter(R.UNPACK_ROW_LENGTH),ht=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Gn=R.getParameter(R.UNPACK_SKIP_PIXELS),si=R.getParameter(R.UNPACK_SKIP_ROWS),As=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Dt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Dt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ue),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ze),R.pixelStorei(R.UNPACK_SKIP_IMAGES,it);const rr=b.isDataArrayTexture||b.isData3DTexture,bt=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const Jt=v.get(b),Ji=v.get(O),qt=v.get(Jt.__renderTarget),Qi=v.get(Ji.__renderTarget);ue.bindFramebuffer(R.READ_FRAMEBUFFER,qt.__webglFramebuffer),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let or=0;or<Le;or++)rr&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,v.get(b).__webglTexture,V,it+or),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,v.get(O).__webglTexture,_e,Ut+or)),R.blitFramebuffer(Ue,Ze,be,ve,Be,Mt,be,ve,R.DEPTH_BUFFER_BIT,R.NEAREST);ue.bindFramebuffer(R.READ_FRAMEBUFFER,null),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||v.has(b)){const Jt=v.get(b),Ji=v.get(O);ue.bindFramebuffer(R.READ_FRAMEBUFFER,ug),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,hg);for(let qt=0;qt<Le;qt++)rr?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Jt.__webglTexture,V,it+qt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Jt.__webglTexture,V),bt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ji.__webglTexture,_e,Ut+qt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ji.__webglTexture,_e),V!==0?R.blitFramebuffer(Ue,Ze,be,ve,Be,Mt,be,ve,R.COLOR_BUFFER_BIT,R.NEAREST):bt?R.copyTexSubImage3D(Ie,_e,Be,Mt,Ut+qt,Ue,Ze,be,ve):R.copyTexSubImage2D(Ie,_e,Be,Mt,Ue,Ze,be,ve);ue.bindFramebuffer(R.READ_FRAMEBUFFER,null),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else bt?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(Ie,_e,Be,Mt,Ut,be,ve,Le,St,en,Dt.data):O.isCompressedArrayTexture?R.compressedTexSubImage3D(Ie,_e,Be,Mt,Ut,be,ve,Le,St,Dt.data):R.texSubImage3D(Ie,_e,Be,Mt,Ut,be,ve,Le,St,en,Dt):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,_e,Be,Mt,be,ve,St,en,Dt.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,_e,Be,Mt,Dt.width,Dt.height,St,Dt.data):R.texSubImage2D(R.TEXTURE_2D,_e,Be,Mt,be,ve,St,en,Dt);R.pixelStorei(R.UNPACK_ROW_LENGTH,vn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ht),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Gn),R.pixelStorei(R.UNPACK_SKIP_ROWS,si),R.pixelStorei(R.UNPACK_SKIP_IMAGES,As),_e===0&&O.generateMipmaps&&R.generateMipmap(Ie),ue.unbindTexture()},this.initRenderTarget=function(b){v.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),ue.unbindTexture()},this.resetState=function(){C=0,F=0,k=null,ue.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}function QS(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Nt;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Tf(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);const p=Tf(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function Tf(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Zt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){const x=u.getComponent(d,p);a.setComponent(d+h,p,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function wf(i,e){if(e===Og)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Lu||e===_p){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Lu)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function eb(i){const e=new Map,t=new Map,n=i.clone();return im(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function im(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)im(i.children[n],e.children[n],t)}class tb extends oo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ob(t)}),this.register(function(t){return new ab(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new xb(t)}),this.register(function(t){return new _b(t)}),this.register(function(t){return new cb(t)}),this.register(function(t){return new ub(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new db(t)}),this.register(function(t){return new rb(t)}),this.register(function(t){return new fb(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new ib(t)}),this.register(function(t){return new Af(t,rt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Af(t,rt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new vb(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Io.extractUrlBase(e);o=Io.resolveURL(c,this.path)}else o=Io.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Yp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===sm){try{o[rt.KHR_BINARY_GLTF]=new yb(e)}catch(h){s&&s(h);return}r=JSON.parse(o[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Db(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case rt.KHR_MATERIALS_UNLIT:o[h]=new sb;break;case rt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Mb(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:o[h]=new Sb;break;case rt.KHR_MESH_QUANTIZATION:o[h]=new bb;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function nb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Ft(i,e,t){const n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ib{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new ze(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],dn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Kp(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Hx(u),c.distance=h;break;case"spot":c=new Gx(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ai(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class sb{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return Lt}extendParams(e,t,n){const s=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],dn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,$t))}return Promise.all(s)}}class rb{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class ob{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Ei:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(r,r)}return Promise.all(s)}}class ab{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Ei:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class lb{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Ei:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class cb{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Ei:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],dn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,$t)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class ub{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Ei:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class hb{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Ei:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(r[0],r[1],r[2],dn),Promise.all(s)}}class db{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Ei:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class fb{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Ei:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(r[0],r[1],r[2],dn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,$t)),Promise.all(s)}}class pb{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Ei:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}}class mb{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Ei:null}extendMaterialParams(e,t){const n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class gb{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class xb{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class _b{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Af{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class vb{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Pn.TRIANGLES&&c.mode!==Pn.TRIANGLE_STRIP&&c.mode!==Pn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const p of h){const x=new Je,m=new L,g=new yi,y=new L(1,1,1),S=new mh(p.geometry,p.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,M),l.SCALE&&y.fromBufferAttribute(l.SCALE,M),S.setMatrixAt(M,x.compose(m,g,y));for(const M in l)if(M==="_COLOR_0"){const w=l[M];S.instanceColor=new Du(w.array,w.itemSize,w.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&p.geometry.setAttribute(M,l[M]);Tt.prototype.copy.call(S,p),this.parser.assignFinalMaterial(S),f.push(S)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const sm="glTF",bo=12,Rf={JSON:1313821514,BIN:5130562};class yb{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,bo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-bo,r=new DataView(e,bo);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Rf.JSON){const c=new Uint8Array(e,bo+o,a);this.content=n.decode(c)}else if(l===Rf.BIN){const c=bo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Mb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=ku[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=ku[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Br[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const p in f.attributes){const x=f.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}h(f)},a,c,dn,d)})})}}class Sb{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class bb{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}}class rm extends io{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,p=e*c,x=p-c,m=-2*f+3*d,g=f-d,y=1-m,S=g-d+h;for(let M=0;M!==a;M++){const w=o[x+M+a],A=o[x+M+l]*u,P=o[p+M+a],_=o[p+M]*u;r[M]=y*w+S*A+m*P+g*_}return r}}const Eb=new yi;class Tb extends rm{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return Eb.fromArray(r).normalize().toArray(r),r}}const Pn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Br={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cf={9728:Ot,9729:Gt,9984:hp,9985:qa,9986:wo,9987:Fi},Pf={33071:di,33648:nl,10497:jr},Lc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ku={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},os={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wb={CUBICSPLINE:void 0,LINEAR:Oo,STEP:Uo},Ic={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ab(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Mh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wi})),i.DefaultMaterial}function Ns(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ai(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Rb(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Cb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Pb(i){let e;const t=i.extensions&&i.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Dc(t.attributes):e=i.indices+":"+Dc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Dc(i.targets[n]);return e}function Dc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Gu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Lb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Ib=new Je;class Db{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new nb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new zx(this.options.manager):this.textureLoader=new jx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Yp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ns(r,a,s),ai(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Io.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Lc[s.type],a=Br[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Zt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Lc[s.type],c=Br[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0;let x,m;if(f&&f!==h){const g=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count;let S=t.cache.get(y);S||(x=new c(a,g*f,s.count*f/u),S=new Ap(x,f/u),t.cache.add(y,S)),m=new zo(S,l,d%f/u,p)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),m=new Zt(x,l,p);if(s.sparse!==void 0){const g=Lc.SCALAR,y=Br[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,w=new y(o[1],S,s.sparse.count*g),A=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new Zt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,_=w.length;P<_;P++){const E=w[P];if(m.setX(E,A[P*l]),l>=2&&m.setY(E,A[P*l+1]),l>=3&&m.setZ(E,A[P*l+2]),l>=4&&m.setW(E,A[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Cf[d.magFilter]||Gt,u.minFilter=Cf[d.minFilter]||Fi,u.wrapS=Pf[d.wrapS]||jr,u.wrapT=Pf[d.wrapT]||jr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ot&&u.minFilter!==Gt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(x){const m=new Vt(x);m.needsUpdate=!0,d(m)}),t.load(Io.resolveURL(h,r.path),p,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),ai(h,o),h.userData.mimeType=o.mimeType||Lb(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new xh,Un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Yi,Un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Mh}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[rt.KHR_MATERIALS_UNLIT]){const h=s[rt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],dn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,$t)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=cn);const u=r.alphaMode||Ic.OPAQUE;if(u===Ic.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ic.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Lt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Lt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Lt){const h=r.emissiveFactor;a.emissive=new ze().setRGB(h[0],h[1],h[2],dn)}return r.emissiveTexture!==void 0&&o!==Lt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,$t)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),ai(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ns(s,h,r),h})}createUniqueName(e){const t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Lf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Pb(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Lf(new Nt,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Ab(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,p=u.length;f<p;f++){const x=u[f],m=o[f];let g;const y=c[f];if(m.mode===Pn.TRIANGLES||m.mode===Pn.TRIANGLE_STRIP||m.mode===Pn.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new I0(x,y):new gt(x,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===Pn.TRIANGLE_STRIP?g.geometry=wf(g.geometry,_p):m.mode===Pn.TRIANGLE_FAN&&(g.geometry=wf(g.geometry,Lu));else if(m.mode===Pn.LINES)g=new $s(x,y);else if(m.mode===Pn.LINE_STRIP)g=new bl(x,y);else if(m.mode===Pn.LINE_LOOP)g=new B0(x,y);else if(m.mode===Pn.POINTS)g=new Lp(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&Cb(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),ai(g,r),m.extensions&&Ns(s,g,m),t.assignFinalMaterial(g),h.push(g)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Ns(s,h[0],r),h[0];const d=new hn;r.extensions&&Ns(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new ln(Sn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new qo(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ai(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new Je;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ph(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],p=s.samplers[f.sampler],x=f.target,m=x.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,y=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(p),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],p=h[2],x=h[3],m=h[4],g=[];for(let S=0,M=d.length;S<M;S++){const w=d[S],A=f[S],P=p[S],_=x[S],E=m[S];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const z=n._createAnimationTracks(w,A,P,_,E);if(z)for(let C=0;C<z.length;C++)g.push(z[C])}const y=new Ix(r,void 0,g);return ai(y,s),y})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Ib)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){const f=u.userData.pivot,p=h[0];u.pivot=new L().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Pp:c.length>1?u=new hn:c.length===1?u=c[0]:u=new Tt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ai(u,r),r.extensions&&Ns(n,u,r),r.matrix!==void 0){const h=new Je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new hn;n.name&&(r.name=s.createUniqueName(n.name)),ai(r,n),n.extensions&&Ns(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){const d=l[u];d.parent!==null?r.add(eb(d)):r.add(d)}const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof Un||d instanceof Vt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];os[r.path]===os.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(os[r.path]){case os.weights:c=Zr;break;case os.rotation:c=Jr;break;case os.translation:case os.scale:c=Qr;break;default:n.itemSize===1?c=Zr:c=Qr;break}const u=s.interpolation!==void 0?wb[s.interpolation]:Oo,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const p=new c(l[d]+"."+os[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Gu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Jr?Tb:rm;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Nb(i,e,t){const n=e.attributes,s=new Mi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const u=Gu(Br[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,l=new L;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const x=Gu(Br[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Si;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Lf(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=ku[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return lt.workingColorSpace!==dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),ai(i,e),Nb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Rb(i,e.targets,t):i})}const Nc={volume:.3,sampleRate:44100,audioContext:new AudioContext,play:function(...i){return this.playSamples([this.buildSamples(...i)])},playSamples:function(i,e=1,t=1,n=0,s=!1){const r=i.length,o=i[0].length,a=this.audioContext.createBuffer(r,o,this.sampleRate),l=this.audioContext.createBufferSource();i.forEach((h,d)=>a.getChannelData(d).set(h)),l.buffer=a,l.playbackRate.value=t,l.loop=s;const c=this.audioContext.createGain();c.gain.value=this.volume*e,c.connect(this.audioContext.destination);const u=new StereoPannerNode(this.audioContext,{pan:n});return l.connect(u).connect(c),l.start(),l},buildSamples:function(i=1,e=.05,t=220,n=0,s=0,r=.1,o=0,a=1,l=0,c=0,u=0,h=0,d=0,f=0,p=0,x=0,m=0,g=1,y=0,S=0,M=0){let w=this.sampleRate,A=Math.PI*2,P=Math.abs,_=ee=>ee<0?-1:1,E=l*=500*A/w/w,z=t*=(1+e*2*Math.random()-e)*A/w,C=0,F=0,k=0,X=1,B,G=[],N=0,Q=0,K=0,fe,xe=2,pe=A*P(M)*2/w,Ve=Math.cos(pe),ut=Math.sin(pe)/2/xe,ct=1+ut,$=-2*Ve/ct,oe=(1-ut)/ct,ae=(1+_(M)*Ve)/2/ct,ke=-(_(M)+Ve)/ct,Oe=ae,We=0,pt=0,Ye=0,Z=0;for(n=n*w||9,y*=w,s*=w,r*=w,m*=w,c*=500*A/w**3,p*=A/w,u*=A/w,h*=w,d=d*w|0,i*=this.volume,B=n+y+s+r+m|0;Q<B;G[Q++]=K*i)++k%(x*100|0)||(K=o?o>1?o>2?o>3?o>4?(N/A%1<a/2)*2-1:Math.sin(N**3):Math.max(Math.min(Math.tan(N),1),-1):1-(2*N/A%2+2)%2:1-4*P(Math.round(N/A)-N/A):Math.sin(N),K=(d?1-S+S*Math.sin(A*Q/d):1)*(o>4?K:_(K)*P(K)**a)*(Q<n?Q/n:Q<n+y?1-(Q-n)/y*(1-g):Q<n+y+s?g:Q<B-m?(B-Q-m)/r*g:0),K=m?K/2+(m>Q?0:(Q<B-m?1:(B-Q)/m)*G[Q-m|0]/2/i):K,M&&(K=Z=Oe*We+ke*(We=pt)+ae*(pt=K)-oe*Ye-$*(Ye=Z))),fe=(t+=l+=c)*Math.cos(p*C++),N+=fe+fe*f*Math.sin(Q**5),X&&++X>h&&(t+=u,z+=u,X=0),d&&!(++F%d)&&(t=z,l=E,X||=1);return G},getNote:function(i=0,e=440){return e*2**(i/12)}},Ub={hover:[.4,.05,420,,.01,.02,1,2,,,,,,,,,,.5,.01],click:[.6,.05,720,,.01,.05,2,1.8,,,,,,,,,,.6,.02],trail:[.25,.1,180,,.01,.03,2,3,-20,,,,,.2,,,,.4,.01],capture:[.5,.05,320,.01,.06,.14,1,1.4,,,260,.04,,,,,,.7,.05],beep:[.5,.02,880,,.03,.06,2,1.2,,,,,,,,,,.6,.03],explosion:[.8,.2,90,.01,.12,.35,4,1.8,,,,,,1.4,,.2,.1,.6,.18],bounce:[.2,.1,260,,.02,.06,2,2.4,40,,,,,.1,,,,.5,.03],death:[.8,.15,260,.02,.16,.5,3,1.6,-7,,,,,1.1,,.25,.12,.5,.25],victory:[.6,.05,520,.02,.14,.3,1,1.5,,,340,.06,.08,,,,,.8,.1],pickup:[.6,.05,537,.02,.08,.22,1,1.59,-6.98,4.97,,,,,,,,.7,.05],collapse:[.55,.15,150,.01,.08,.26,4,2.4,-6,,,,,1.2,,.2,.05,.55,.14],ray:[.35,.1,980,,.02,.09,2,1.6,12,,420,.03,,,,,,.5,.02],charge:[.5,.05,90,.05,1,.3,2,1.4,6,3,,,,.1,,,,.6,.12],power:[.6,.05,480,.02,.12,.3,1,1.6,,,220,.05,,,,,.05,.7,.1],disarm:[.7,.05,220,.05,.25,.55,1,1.3,,,330,.08,.12,,,,.1,.8,.2],alarm:[.55,.05,420,.02,.14,.3,2,1.8,-5,-2,,,,.1,,,.05,.6,.12]},Ob=.07;class Fb{constructor(e){this.settings=e,this.ctx=Nc.audioContext,this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.connect(this.master),this.musicGain=this.ctx.createGain(),this.musicGain.connect(this.master),this.buffers={},this.lastTrailTime=0,this.engineNodes=null,this.sequencer=null,this.drone=null,this.menuMusic=new Audio("sounds/soundtrack.mp3"),this.menuMusic.loop=!0,this.noiseBuffer=this.createNoiseBuffer(),this.updateVolumes()}createNoiseBuffer(){const e=Math.floor(this.ctx.sampleRate*.4),t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let s=0;s<e;s++)n[s]=Math.random()*2-1;return t}unlock(){this.ctx.state==="suspended"&&this.ctx.resume()}updateVolumes(){this.sfxGain.gain.value=this.settings.sfxVol,this.musicGain.gain.value=Math.min(this.settings.bgmVol*1.35,1),this.menuMusic.volume=this.settings.bgmVol}getBuffer(e){if(this.buffers[e])return this.buffers[e];const t=Ub[e];if(!t)return null;const n=Nc.buildSamples(...t),s=this.ctx.createBuffer(1,n.length,Nc.sampleRate);return s.getChannelData(0).set(n),this.buffers[e]=s,s}playSFX(e){if(this.settings.sfxVol<=0)return;if(e==="trail"){if(this.ctx.currentTime-this.lastTrailTime<Ob)return;this.lastTrailTime=this.ctx.currentTime}const t=this.getBuffer(e);if(!t)return;const n=this.ctx.createBufferSource();n.buffer=t,n.playbackRate.value=.94+Math.random()*.12,n.connect(this.sfxGain),n.start()}startEngine(){if(this.engineNodes)return;const e=this.ctx.createGain();e.gain.value=0,e.connect(this.sfxGain);const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.value=520,t.connect(e);const n=this.ctx.createOscillator();n.type="sawtooth",n.frequency.value=58;const s=this.ctx.createOscillator();s.type="sawtooth",s.frequency.value=58,s.detune.value=14,n.connect(t),s.connect(t),n.start(),s.start(),e.gain.setTargetAtTime(.065,this.ctx.currentTime,.15),this.engineNodes={gain:e,filter:t,oscA:n,oscB:s}}stopEngine(){if(!this.engineNodes)return;const{gain:e,oscA:t,oscB:n}=this.engineNodes;this.engineNodes=null;const s=this.ctx.currentTime+.25;e.gain.setTargetAtTime(0,this.ctx.currentTime,.06),t.stop(s),n.stop(s)}setEngineSpeed(e){if(!this.engineNodes)return;const t=52+e*46,n=this.ctx.currentTime;this.engineNodes.oscA.frequency.setTargetAtTime(t,n,.08),this.engineNodes.oscB.frequency.setTargetAtTime(t,n,.08),this.engineNodes.filter.frequency.setTargetAtTime(420+e*500,n,.1)}startMenuMusic(){this.stopGameMusic(),this.menuMusic.paused&&this.menuMusic.play().catch(()=>{})}isMenuMusicPlaying(){return!this.menuMusic.paused}stopMenuMusic(){this.menuMusic.pause()}startGameMusic(){this.stopMenuMusic(),!(this.sequencer&&this.sequencer.mode==="game")&&(this.stopSequencer(),this.stopDrone(),this.startSequencer("game",60/112/4))}startBossMusic(){this.stopMenuMusic(),!(this.sequencer&&this.sequencer.mode==="boss")&&(this.stopSequencer(),this.startDrone(),this.startSequencer("boss",60/72/4))}startChallengeMusic(){this.stopMenuMusic(),!(this.sequencer&&this.sequencer.mode==="challenge")&&(this.stopSequencer(),this.stopDrone(),this.startSequencer("challenge",60/138/4))}startSequencer(e,t){this.sequencer={mode:e,stepDuration:t,step:0,nextTime:this.ctx.currentTime+.1,timer:setInterval(()=>this.scheduleSteps(),25)}}stopSequencer(){this.sequencer&&(clearInterval(this.sequencer.timer),this.sequencer=null)}stopGameMusic(){this.stopSequencer(),this.stopDrone()}startDrone(){if(this.drone)return;const e=this.ctx.createGain();e.gain.value=0,e.connect(this.musicGain);const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.value=210,t.Q.value=5,t.connect(e);const n=this.ctx.createOscillator();n.type="sawtooth",n.frequency.value=41.2;const s=this.ctx.createOscillator();s.type="sawtooth",s.frequency.value=61.74,s.detune.value=-9;const r=this.ctx.createOscillator();r.frequency.value=.07;const o=this.ctx.createGain();o.gain.value=95,r.connect(o).connect(t.frequency),n.connect(t),s.connect(t),n.start(),s.start(),r.start(),e.gain.setTargetAtTime(.12,this.ctx.currentTime,1.2),this.drone={gain:e,oscA:n,oscB:s,lfo:r}}stopDrone(){if(!this.drone)return;const{gain:e,oscA:t,oscB:n,lfo:s}=this.drone;this.drone=null;const r=this.ctx.currentTime+.9;e.gain.setTargetAtTime(0,this.ctx.currentTime,.25),t.stop(r),n.stop(r),s.stop(r)}scheduleSteps(){for(;this.sequencer&&this.sequencer.nextTime<this.ctx.currentTime+.15;)this.playStep(this.sequencer.step,this.sequencer.nextTime),this.sequencer.step=(this.sequencer.step+1)%16,this.sequencer.nextTime+=this.sequencer.stepDuration}playStep(e,t){if(this.sequencer.mode==="challenge"){e%4===0&&this.playKick(t,135,.12),e%4===2&&this.playHat(t),(e===4||e===12)&&this.playClap(t);const s=[110,164.81,220,164.81,130.81,196,261.63,196];e%2===0&&this.playBass(s[e/2%s.length],t,.13,1100);return}if(this.sequencer.mode==="boss"){(e===0||e===9)&&this.playKick(t,92,.3),(e===6||e===14)&&this.playClang(t),e===0&&this.playBass(41.2,t,.5),e===10&&this.playBass(43.65,t,.4),e===12&&this.playBass(38.89,t,.4);return}(e===0||e===8||e===11)&&this.playKick(t,115,.15),(e===4||e===12)&&this.playClap(t),e%4===2&&this.playHat(t);const n={0:110,3:110,6:146.83,8:98,11:98,14:130.81};n[e]&&this.playBass(n[e],t,.2,1e3)}playClap(e){const t=this.ctx.createBufferSource(),n=this.ctx.createBiquadFilter(),s=this.ctx.createGain();t.buffer=this.noiseBuffer,n.type="bandpass",n.frequency.value=1500,n.Q.value=2.2,s.gain.setValueAtTime(.14,e),s.gain.exponentialRampToValueAtTime(.001,e+.12),t.connect(n).connect(s).connect(this.musicGain),t.start(e),t.stop(e+.14)}playClang(e){const t=this.ctx.createBufferSource(),n=this.ctx.createBiquadFilter(),s=this.ctx.createGain();t.buffer=this.noiseBuffer,n.type="bandpass",n.frequency.value=1700,n.Q.value=11,s.gain.setValueAtTime(.11,e),s.gain.exponentialRampToValueAtTime(.001,e+.5),t.connect(n).connect(s).connect(this.musicGain),t.start(e),t.stop(e+.5)}playKick(e,t=120,n=.16){const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(t,e),s.frequency.exponentialRampToValueAtTime(t*.37,e+n*.7),r.gain.setValueAtTime(.42,e),r.gain.exponentialRampToValueAtTime(.001,e+n),s.connect(r).connect(this.musicGain),s.start(e),s.stop(e+n+.02)}playHat(e){const t=this.ctx.createBufferSource(),n=this.ctx.createBiquadFilter(),s=this.ctx.createGain();t.buffer=this.noiseBuffer,n.type="highpass",n.frequency.value=7e3,s.gain.setValueAtTime(.12,e),s.gain.exponentialRampToValueAtTime(.001,e+.05),t.connect(n).connect(s).connect(this.musicGain),t.start(e),t.stop(e+.06)}playBass(e,t,n=.22,s=700){const r=this.ctx.createOscillator(),o=this.ctx.createBiquadFilter(),a=this.ctx.createGain();r.type="square",r.frequency.value=e,o.type="lowpass",o.frequency.value=s,a.gain.setValueAtTime(.18,t),a.gain.exponentialRampToValueAtTime(.001,t+n),r.connect(o).connect(a).connect(this.musicGain),r.start(t),r.stop(t+n+.02)}}function Bb(i){return new Fb(i)}const zb=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
    }
`,kb=`
    uniform sampler2D tDiffuse;
    uniform vec2 uResolution;
    uniform float uCurvature;
    uniform float uScanline;
    uniform float uAberration;
    uniform float uMask;
    uniform float uBrightness;
    uniform float uCorner;
    varying vec2 vUv;

    void main() {
        // Vyklenutí stínítka. Zkreslení roste s druhou mocninou vzdálenosti od středu,
        // takže střed obrazu zůstává ostrý a ohýbají se hlavně okraje — jako na baňce CRT.
        vec2 centered = vUv * 2.0 - 1.0;
        vec2 bend = abs(centered.yx) * uCurvature;
        centered += centered * bend * bend;
        vec2 uv = centered * 0.5 + 0.5;

        // mimo plochu stínítka je tma
        if (uv.x < -0.02 || uv.x > 1.02 || uv.y < -0.02 || uv.y > 1.02) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
            return;
        }
        uv = clamp(uv, 0.0, 1.0);

        // barevné rozladění kanálů po stranách
        float shift = uAberration * 0.002 * length(centered);
        vec3 color;
        color.r = texture2D(tDiffuse, uv + vec2(shift, 0.0)).r;
        color.g = texture2D(tDiffuse, uv).g;
        color.b = texture2D(tDiffuse, uv - vec2(shift, 0.0)).b;

        // řádkování zarovnané přesně na jeden řádek vnitřního rozlišení
        float scan = sin(uv.y * uResolution.y * 6.2831853) * 0.5 + 0.5;
        color *= 1.0 - uScanline * scan;

        // maska luminoforu (svislé RGB pruhy)
        float stripe = mod(gl_FragCoord.x, 3.0);
        vec3 mask = vec3(1.0 - uMask);
        if (stripe < 1.0) mask.r = 1.0 + uMask;
        else if (stripe < 2.0) mask.g = 1.0 + uMask;
        else mask.b = 1.0 + uMask;
        color *= mask;

        // vinětace do rohů
        float vignette = smoothstep(1.6, 0.4, length(centered));
        color *= mix(0.88, 1.0, vignette);

        // kompenzace ztmavení od řádkování a masky + celkové prosvětlení
        color *= (1.0 + uScanline * 0.9) * uBrightness;

        // Okraj stínítka: měkký přechod do černé a zaoblené rohy,
        // aby vyklenutá plocha končila jako sklo obrazovky, ne jako ostrý obdélník.
        vec2 fromCenter = abs(uv - 0.5) * 2.0;
        vec2 overCorner = max(fromCenter - (1.0 - uCorner), 0.0);
        float cornerDist = length(overCorner) / max(uCorner, 0.0001);
        float screenMask = 1.0 - smoothstep(0.75, 1.0, cornerDist);
        screenMask *= smoothstep(0.0, 0.006, uv.x) * (1.0 - smoothstep(0.994, 1.0, uv.x));
        screenMask *= smoothstep(0.0, 0.006, uv.y) * (1.0 - smoothstep(0.994, 1.0, uv.y));
        color *= screenMask;

        gl_FragColor = vec4(color, 1.0);
    }
`;function Gb(i){const e=[];let t=!1;function n(s){const r=s.dataset.warpBaseTransform||"";if(s.style.transform=r,!t)return;const o=s.getBoundingClientRect();if(o.width===0&&o.height===0)return;const a=window.innerWidth,l=window.innerHeight,c=(o.left+o.width/2)/a*2-1,u=(o.top+o.height/2)/l*2-1,h=Math.abs(u)*i,d=Math.abs(c)*i,f=-c*h*h*(a/2),p=-u*d*d*(l/2);s.style.transform=`${r} translate(${f.toFixed(1)}px, ${p.toFixed(1)}px)`.trim()}return{register(s){s.dataset.warpBaseTransform=s.style.transform||"",e.push(s),n(s)},refresh(){e.forEach(n)},setEnabled(s){t=s,e.forEach(n)}}}function Vb(i,e={}){const t={enabled:e.enabled!==!1,pixelScale:e.pixelScale||3},n=new Yn(1,1,{minFilter:Ot,magFilter:Ot,depthBuffer:!0}),s=new Zn({uniforms:{tDiffuse:{value:n.texture},uResolution:{value:new re(1,1)},uCurvature:{value:e.curvature??.32},uScanline:{value:e.scanline??.1},uAberration:{value:e.aberration??.4},uMask:{value:e.mask??.035},uBrightness:{value:e.brightness??1.25},uCorner:{value:e.corner??.09}},vertexShader:zb,fragmentShader:kb,depthTest:!1,depthWrite:!1}),r=new Ep;r.add(new gt(new no(2,2),s));const o=new qo(-1,1,1,-1,0,1);function a(){const h=window.innerWidth,d=window.innerHeight;i.setSize(h,d);const f=Math.max(160,Math.floor(h/t.pixelScale)),p=Math.max(120,Math.floor(d/t.pixelScale));n.setSize(f,p),s.uniforms.uResolution.value.set(f,p)}function l(h,d){if(!t.enabled){i.setRenderTarget(null),i.render(h,d);return}i.setRenderTarget(n),i.render(h,d),i.setRenderTarget(null),i.render(r,o)}function c(h){t.enabled=h,i.setPixelRatio(h?1:Math.min(window.devicePixelRatio,2)),a()}function u(h){t.pixelScale=h,a()}return c(t.enabled),{render:l,resize:a,setEnabled:c,setPixelScale:u,isEnabled:()=>t.enabled}}const Th=document.createElement("link");Th.href="https://fonts.googleapis.com/css2?family=VT323&display=swap";Th.rel="stylesheet";document.head.appendChild(Th);const ot=window.matchMedia("(pointer: coarse)").matches&&navigator.maxTouchPoints>0,U={font:"'VT323', monospace",artFont:"ui-monospace, Menlo, 'DejaVu Sans Mono', monospace",cyan:"#00d9ff",amber:"#ffa023",danger:"#ff3b5c",success:"#00ff9c",text:"#d8f6ff",dim:"#5c7a91",overlay:"rgba(4, 4, 15, 0.92)",panelEdge:"#1e3350",glow:i=>`0 0 6px ${i}, 0 0 18px ${i}`},Hb={heart:[".XX.XX.","XXXXXXX","XXXXXXX","XXXXXXX",".XXXXX.","..XXX..","...X..."],area:["XXXXXXX","X.....X","X.....X","XXXX..X","XXXX..X","XXXX..X","XXXXXXX"],timer:["XXXXXXX",".X...X.","..X.X..","...X...","..X.X..",".X...X.","XXXXXXX"],lock:[".XXXXX.",".X...X.",".X...X.","XXXXXXX","XXX.XXX","XXX.XXX","XXXXXXX"],star:[".....X.....","....XXX....","....XXX....","XXXXXXXXXXX",".XXXXXXXXX.","..XXXXXXX..","...XXXXX...","..XXXXXXX..","..XXX.XXX..","..X.....X.."],core:["...X...","..XXX..",".XXXXX.","XXXXXXX",".XXXXX.","..XXX..","...X..."],mine:["..XXX..",".XXXXX.","XXXXXXX","XXXXXXX","XXXXXXX",".XXXXX.","..XXX.."]};function ds(i,e="currentColor",t=3){const n=Hb[i],s=n[0].length;let r="";return n.forEach((o,a)=>{let l=0;for(;l<s;){if(o[l]!=="X"){l++;continue}let c=1;for(;o[l+c]==="X";)c++;r+=`<rect x="${l}" y="${a}" width="${c}" height="1"/>`,l+=c}}),`<svg width="${s*t}" height="${n.length*t}" viewBox="0 0 ${s} ${n.length}" fill="${e}" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">${r}</svg>`}function xn(i,e,t=!0){i.onmouseover=()=>{i.style.backgroundColor=e,i.style.color="#04040f",i.style.boxShadow=U.glow(e),t&&Se.playSFX("hover")},i.onmouseout=()=>{i.style.backgroundColor="transparent",i.style.color=e,i.style.boxShadow="none"}}const Xo=[{id:1,target:80,time:70,bouncers:2,eaters:0,bombers:0,maxMines:2,pillars:0},{id:2,target:80,time:80,bouncers:2,eaters:1,bombers:0,maxMines:2,pillars:0},{id:3,target:80,time:90,bouncers:3,eaters:1,bombers:0,maxMines:3,pillars:0},{id:4,target:80,time:100,bouncers:2,eaters:2,bombers:1,maxMines:3,pillars:0},{id:5,target:80,time:110,bouncers:3,eaters:2,bombers:1,maxMines:3,pillars:1},{id:6,target:80,time:125,bouncers:3,eaters:2,bombers:1,maxMines:4,pillars:2},{id:7,target:80,time:140,bouncers:3,eaters:3,bombers:2,maxMines:4,pillars:3},{id:8,target:80,time:150,bouncers:4,eaters:3,bombers:2,maxMines:4,pillars:4}],Pl=9,Xb={id:Pl,target:80,time:240,bouncers:0,eaters:2,bombers:3,maxMines:4,pillars:0,boss:!0},If=Xo.length+1,Wb=i=>(i===Pl?Xb:Xo.find(e=>e.id===i))||Xo[0],jb=()=>zt.unlocked>Xo.length,bn="#ffb020",cl=[{id:"mines",goal:"mines",minesNeeded:20,time:100,bouncers:3,eaters:2,bombers:0,maxMines:5},{id:"sixtyseven",goal:"exact",exact:67,time:100,bouncers:0,eaters:4,bombers:1,maxMines:0},{id:"upside",goal:"area",target:80,flipped:!0,time:100,bouncers:3,eaters:1,bombers:0,maxMines:0},{id:"wtf",goal:"area",target:80,invisibleEaters:3,time:100,bouncers:0,eaters:0,bombers:0,maxMines:0}],qb=i=>cl.find(e=>e.id===i)||null,Yb=i=>!!(zt.challenges&&zt.challenges[i]),$b={cz:{title:"CUTRON",campaign:"Kampaň",resetProgress:"Smazat postup",resetConfirm:"Opravdu smazat?",resetDone:"Postup smazán",language:"Jazyk: Čeština",settings:"Nastavení",help:"Nápověda",duel:"1v1",duelNoTouch:"Souboj 1v1 se hraje ve dvou na jedné klávesnici — jeden na WASD, druhý na šipkách. Na dotykovém zařízení ho hrát nelze.",touchJoystick:"Ovládání: Joystick",touchDpad:"Ovládání: Šipky",playerOne:"Hráč 1",playerTwo:"Hráč 2",duelByArea:"ovládl nadpoloviční většinu plochy!",duelByTime:"měl po vypršení času větší území!",duelByLives:"ustál souboj — soupeři došly životy!",duelWins:"%s vyhrává",duelDraw:"Remíza!",reasonRivalTrail:"Soupeř ti přejel nedokončenou brázdu!",helpTitle:"Nápověda",helpGoal:"Cíl hry",helpGoalText:"Leť dronem po volné ploše a kresli brázdu. Jakmile ji uzavřeš o vlastní území nebo o okraj arény, zabereš všechno uvnitř. V kampani potřebuješ 80 % plochy, v souboji víc než soupeř. Nikdy nenajížděj do vlastní nedokončené brázdy.",helpCollapse:"Když ti do rozdělané brázdy někdo vlítne, nepřijdeš o život hned. Brázda zbělá a začne se bortit od svého začátku směrem k dronu — mnohem rychleji, než letíš. Stihneš-li dorazit na zabrané území, zabere se ti všechno, co z brázdy zůstalo. Život přijdeš až ve chvíli, kdy se rozpadne celá.",helpPillars:"Od pátého levelu stojí v aréně ostrůvky už zvednuté plochy. Chovají se jako kus tvého území, takže na nich jde brázdu uzavřít i daleko od okraje arény.",helpControls:"Ovládání",helpMoveOne:"Pohyb — hráč 1",helpMoveTwo:"Pohyb — hráč 2 (jen 1v1)",helpDiagonal:"Dvě klávesy naráz = šikmý let.",helpTouchDpad:"Dron ovládáš šipkami dole uprostřed obrazovky. V Nastavení se dá přepnout na plovoucí joystick.",helpTouchJoystick:"Joystick se objeví tam, kde přiložíš prst. V Nastavení se dá přepnout na pevné šipky.",helpObjects:"Předměty",helpEnemies:"Nepřátelé",lifeName:"Kříž života",lifeDesc:"Objeví se jen zřídka a jen na zabrané ploše. Sebráním získáš život navíc, nejvýš však pět. Zmizí, pokud pod ním plocha přestane být tvoje.",clockName:"Přesýpací hodiny",clockDesc:"Stejně vzácné jako kříž života a taky jen na zabrané ploše. Sebráním si přidáš 10 sekund. Zmizí, pokud pod nimi plocha přestane být tvoje.",bossLevel:"Boss level",bossBriefingOk:"Jdu na to",bossDisarmed:"Boss odzbrojen",bossRecharging:"Boss se znovu nabíjí!",bossNeedGenerators:"Umlč všechny čtyři generátory!",challenges:"Challenge",challengeDone:"Splněno!",nextChallenge:"DALŠÍ CHALLENGE",chMinesName:"Minové pole",chMinesDesc:"Zaber kus plochy, nalákej miny a nech jich vybuchnout dvacet, než vyprší čas. Aréna ti to nijak neulehčí — létají v ní tři bouncery a dva eateři, kteří ti zabranou plochu ukusují i s místy, kde se miny líhnou.",chMinesCounter:"Miny",chSixtysevenName:"67",chSixtysevenDesc:"Zaber přesně 67 % plochy. Ani o procento míň, ani o procento víc. Překročení tě bude stát život a celé zabrané území přijdeš. Pomáhat ti nebudou čtyři eateři, kteří ti plochu ukusují, ani bomber.",chUpsideName:"Vzhůru nohama",chUpsideDesc:"Celá aréna je vzhůru nohama, takže doleva je doprava a nahoru je dolů. Zaber 80 % plochy, jestli to ještě zvládneš.",chWtfName:"WTF",chWtfDesc:"Prázdná aréna, zaber 80 % plochy. Jenom pozor — něco tu s tebou je. Vidět to není, zato uvidíš díry, které to po sobě nechává.",reasonOvershoot:"Přestřelil jsi! Území je pryč.",reasonMinesLeft:"Nestihl jsi odpálit deset min!",gameCompleted:"Úspěšně jsi dokončil hru!",share:"SDÍLET",shareCopied:"ZKOPÍROVÁNO",shareSaved:"ULOŽENO",shareFailed:"NEPOVEDLO SE",bossDefeated:"BOSS PORAŽEN",totalScore:"Celkové skóre",bossIntro:"Uprostřed arény se probral Boss. Míří pomalu přímo k tobě a zabranou plochu drtí jako tank. Nabíjejí ho čtyři generátory — zaber plochu kolem generátoru a umlčíš ho. Co ti ale Boss rozdrtí, to generátor zase probudí. Boss vybuchne, až budeš mít všechny čtyři umlčené a k tomu aspoň 80 % arény.",reasonBossHit:"Boss tě rozdrtil!",reasonBossTrail:"Boss projel tvou brázdou!",selectLevel:"Výběr Levelu",back:"Zpět",level:"Level",score:"Skóre",pause:"PAUZA",resume:"POKRAČOVAT",quit:"UKONČIT",pausedTitle:"HRA POZASTAVENA",pausedSub:"Klikni na obrazovku nebo stiskni Esc",victory:"VÍTĚZSTVÍ!",gameOver:"KONEC HRY",captured:"Zabral jsi %s% území.",nextLevel:"DALŠÍ LEVEL",playAgain:"HRÁT ZNOVU",mainMenu:"HLAVNÍ MENU",move:"Pohyb",reset:"Reset",musicVol:"Hlasitost hudby",crtOn:"CRT efekt: Zapnutý",crtOff:"CRT efekt: Vypnutý",sfxVol:"Hlasitost zvuků",reasonTime:"Vypršel čas!",reasonCross:"Překřížil jsi vlastní stopu!",reasonMine:"Zasáhl tě výbuch miny!",reasonEnemyHit:"Nepřítel tě dostal!",reasonEnemyTrail:"Nepřítel narazil do tvé stopy!",reasonEaterHit:"Eater tě sežral!",reasonEaterTrail:"Eater narazil do tvé stopy!",reasonFireballHit:"Zasáhla tě ohnivá koule!",reasonFireballTrail:"Ohnivá koule zasáhla tvou stopu!",reasonBomberHit:"Bomber tě přejel!",reasonBomberTrail:"Bomber narazil do tvé stopy!",livesOut:"<br>Došly ti životy!"},en:{title:"CUTRON",campaign:"Campaign",resetProgress:"Erase progress",resetConfirm:"Really erase?",resetDone:"Progress erased",language:"Language: English",settings:"Settings",help:"Help",duel:"1v1",duelNoTouch:"A 1v1 duel is played by two people on one keyboard — one on WASD, the other on the arrow keys. It cannot be played on a touch device.",touchJoystick:"Controls: Joystick",touchDpad:"Controls: D-pad",playerOne:"Player 1",playerTwo:"Player 2",duelByArea:"took more than half of the arena!",duelByTime:"held more ground when time ran out!",duelByLives:"outlasted the rival — they ran out of lives!",duelWins:"%s wins",duelDraw:"Draw!",reasonRivalTrail:"Your rival ran over your unfinished trail!",helpTitle:"Help",helpGoal:"Objective",helpGoalText:"Fly across open ground and draw a trail. Close it against your own territory or the arena edge and everything inside becomes yours. The campaign needs 80 % of the arena, a duel just needs more than your rival. Never run into your own unfinished trail.",helpCollapse:"If something hits your unfinished trail, you do not lose a life straight away. The trail turns white and starts collapsing from its base towards the drone — far faster than you can fly. Reach captured ground in time and everything left of the trail becomes yours. You only lose a life once the whole trail is gone.",helpPillars:"From level five on, islands of already raised ground stand in the arena. They behave like a piece of your territory, so you can close a trail on them far from the arena edge.",helpControls:"Controls",helpMoveOne:"Move — player 1",helpMoveTwo:"Move — player 2 (1v1 only)",helpDiagonal:"Hold two keys at once to fly diagonally.",helpTouchDpad:"Steer with the arrows at the bottom of the screen. You can switch to a floating joystick in Settings.",helpTouchJoystick:"The joystick appears wherever you put your finger. You can switch to fixed arrows in Settings.",helpObjects:"Objects",helpEnemies:"Enemies",lifeName:"Life cross",lifeDesc:"Appears rarely and only on captured ground. Picking it up grants an extra life, up to five. It vanishes if the ground beneath it stops being yours.",clockName:"Hourglass",clockDesc:"As rare as the life cross and likewise only on captured ground. Picking it up adds 10 seconds to the clock. It vanishes if the ground beneath it stops being yours.",bossLevel:"Boss level",bossBriefingOk:"Let's go",bossDisarmed:"Boss disarmed",bossRecharging:"The boss is recharging!",bossNeedGenerators:"Silence all four generators!",challenges:"Challenge",challengeDone:"Done!",nextChallenge:"NEXT CHALLENGE",chMinesName:"Minefield",chMinesDesc:"Capture some ground, lure the mines in and set off twenty of them before time runs out. The arena will not make it easy — three bouncers and two eaters are loose in it, and the eaters chew away the very ground the mines need.",chMinesCounter:"Mines",chSixtysevenName:"67",chSixtysevenDesc:"Capture exactly 67 % of the arena. Not one percent less, not one more. Overshoot and it costs you a life and every bit of ground you took. Four eaters chewing your ground away and a bomber are no help either.",chUpsideName:"Upside down",chUpsideDesc:"The whole arena is upside down, so left is right and up is down. Capture 80 % of it, if you still can.",chWtfName:"WTF",chWtfDesc:"An empty arena, capture 80 % of it. Just mind that something is in here with you. You will not see it — but you will see the holes it leaves behind.",reasonOvershoot:"Overshot! Your ground is gone.",reasonMinesLeft:"You did not set off ten mines in time!",gameCompleted:"You have finished the game!",share:"SHARE",shareCopied:"COPIED",shareSaved:"SAVED",shareFailed:"FAILED",bossDefeated:"BOSS DEFEATED",totalScore:"Total score",bossIntro:"A Boss has woken up in the middle of the arena. It crawls straight at you and grinds captured ground like a tank. Four generators keep it charged — capture the ground around a generator to silence it, but whatever the Boss grinds away wakes that generator up again. The Boss blows up once all four are silenced and you hold at least 80 % of the arena.",reasonBossHit:"The boss crushed you!",reasonBossTrail:"The boss drove through your trail!",selectLevel:"Select Level",back:"Back",level:"Level",score:"Score",pause:"PAUSE",resume:"RESUME",quit:"QUIT",pausedTitle:"GAME PAUSED",pausedSub:"Click the screen or press Esc",victory:"VICTORY!",gameOver:"GAME OVER",captured:"You captured %s% of the area.",nextLevel:"NEXT LEVEL",playAgain:"PLAY AGAIN",mainMenu:"MAIN MENU",move:"Move",reset:"Reset",musicVol:"Music Volume",crtOn:"CRT effect: On",crtOff:"CRT effect: Off",sfxVol:"SFX Volume",reasonTime:"Time's up!",reasonCross:"You crossed your own trail!",reasonMine:"Hit by a mine explosion!",reasonEnemyHit:"Enemy got you!",reasonEnemyTrail:"Enemy hit your trail!",reasonEaterHit:"Eater ate you!",reasonEaterTrail:"Eater hit your trail!",reasonFireballHit:"Hit by a fireball!",reasonFireballTrail:"Fireball hit your trail!",reasonBomberHit:"Bomber ran you over!",reasonBomberTrail:"Bomber hit your trail!",livesOut:"<br>Out of lives!"}};let ul="en";const Ee=i=>$b[ul][i];let kt="MENU",zn="campaign",ms=null,zt=JSON.parse(localStorage.getItem("cutronProgress"))||{unlocked:1,scores:{}},Rn=JSON.parse(localStorage.getItem("cutronSettings"))||{sfxVol:.5,bgmVol:.3};function hl(){localStorage.setItem("cutronProgress",JSON.stringify(zt))}function Ll(){localStorage.setItem("cutronSettings",JSON.stringify(Rn))}const Qs=()=>Rn.touchControl==="joystick"?"joystick":"dpad";let sn=1,mn=null,at=null,dl=0,Il=5,Hi=!1,jt=!1,Pt=!1,qn=0,Uc=0,$n=60,wn=0,Ws=80;const Se=Bb(Rn),rn=new Ep,om=855330;rn.background=new ze(om);rn.fog=new dh(om,18,70);const At=new ln(60,window.innerWidth/window.innerHeight,.1,1e3),lo=new JS({antialias:!1});lo.setSize(window.innerWidth,window.innerHeight);lo.setPixelRatio(Math.min(window.devicePixelRatio,2));lo.shadowMap.enabled=!0;lo.shadowMap.type=np;document.body.appendChild(lo.domElement);const am=ot?.16:.32,zr=Vb(lo,{enabled:Rn.crt!==!1,pixelScale:Rn.pixelScale||2,curvature:am}),lm=new Nt,cm=8e3,Qa=new Float32Array(cm*3);for(let i=0;i<cm*3;i+=3)Qa[i]=(Math.random()-.5)*250,Qa[i+1]=(Math.random()-.5)*150,Qa[i+2]=(Math.random()-.5)*250;lm.setAttribute("position",new Zt(Qa,3));const Kb=new xh({size:.15,color:55807,transparent:!0,opacity:.6}),wh=new Lp(lm,Kb);wh.position.y=0;rn.add(wh);const fn=document.createElement("div");Object.assign(fn.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",fontFamily:"sans-serif",overflow:"hidden"});document.body.appendChild(fn);const Qn=Gb(am),kn=document.createElement("div");Object.assign(kn.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"auto",background:"transparent"});fn.appendChild(kn);const Ki=document.createElement("div");Object.assign(Ki.style,{marginTop:"10vh",display:"flex",flexDirection:"column",alignItems:"center",zIndex:"10"});kn.appendChild(Ki);Qn.register(Ki);const Zb=[" ██████╗██╗   ██╗████████╗██████╗  ██████╗ ███╗   ██╗","██╔════╝██║   ██║╚══██╔══╝██╔══██╗██╔═══██╗████╗  ██║","██║     ██║   ██║   ██║   ██████╔╝██║   ██║██╔██╗ ██║","██║     ██║   ██║   ██║   ██╔══██╗██║   ██║██║╚██╗██║","╚██████╗╚██████╔╝   ██║   ██║  ██║╚██████╔╝██║ ╚████║"," ╚═════╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝"].join(`
`),Dl=document.createElement("pre");Dl.className="logo-sweep";Dl.textContent=Zb;Object.assign(Dl.style,{fontFamily:U.artFont,fontSize:"clamp(5px, 2.4vw, 20px)",lineHeight:"1.02",whiteSpace:"pre",margin:"0 0 44px"});Ki.appendChild(Dl);function ei(i,e){const t=document.createElement("button");return t.dataset.textKey=i,t.innerText=Ee(i),Object.assign(t.style,{fontFamily:U.font,padding:"12px 18px",fontSize:"26px",lineHeight:"1.3",cursor:"pointer",backgroundColor:"transparent",color:U.cyan,border:`2px solid ${U.cyan}`,borderRadius:"0",marginBottom:"16px",width:"min(330px, 76vw)",letterSpacing:"1px",textTransform:"uppercase",transition:"none"}),xn(t,U.cyan),t.onclick=n=>{Se.unlock(),Se.playSFX("click"),e(n)},t}const Jb=ei("campaign",()=>xE()),Qb=ei("language",()=>{ul=ul==="cz"?"en":"cz",Nl()}),eE=ei("settings",()=>{kn.style.display="none",ti.style.display="flex"}),tE=ei("duel",()=>{if(ot){fE("duelNoTouch");return}Jm()}),nE=ei("help",()=>oE());Ki.appendChild(Jb);Ki.appendChild(tE);Ki.appendChild(Qb);Ki.appendChild(nE);Ki.appendChild(eE);const Ti=document.createElement("div");Object.assign(Ti.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"none",flexDirection:"column",alignItems:"center",pointerEvents:"auto",backgroundColor:U.overlay,overflowY:"auto",padding:"0 16px 32px",boxSizing:"border-box"});fn.appendChild(Ti);const Ah=document.createElement("div");Object.assign(Ah.style,{fontFamily:U.font,fontSize:"clamp(30px, 5vw, 56px)",color:U.text,marginTop:ot?"4vh":"6vh",marginBottom:ot?"20px":"32px",letterSpacing:"2px",textShadow:U.glow(U.cyan),flex:"0 0 auto"});Ah.dataset.textKey="selectLevel";Ti.appendChild(Ah);const as=document.createElement("div"),Pr=ot?70:120;Object.assign(as.style,{display:"grid",gridTemplateColumns:`repeat(4, ${Pr}px)`,gap:ot?"10px":"25px",flex:"0 0 auto",maxWidth:"100%"});Ti.appendChild(as);const Rh=ei("back",()=>{Ti.style.display="none",kn.style.display="flex"});Rh.style.marginTop="36px";Rh.style.flex="0 0 auto";Ti.appendChild(Rh);const Yo=document.createElement("div");Object.assign(Yo.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"none",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#000000",pointerEvents:"auto",zIndex:"250",padding:"24px",boxSizing:"border-box",overflowY:"auto",textAlign:"center"});fn.appendChild(Yo);const ls=document.createElement("div");Object.assign(ls.style,{fontFamily:U.font,fontSize:"clamp(34px, 7vw, 72px)",letterSpacing:"8px",marginBottom:"30px",opacity:"0",transition:"opacity 1.2s ease-in"});const Ir=document.createElement("div");Object.assign(Ir.style,{fontFamily:U.font,fontSize:"clamp(18px, 2.4vw, 25px)",color:U.text,lineHeight:"1.6",maxWidth:"640px",textAlign:"center",opacity:"0",transition:"opacity 1.6s ease-in"});let um=()=>{};const Ni=ei("bossBriefingOk",()=>iE());Object.assign(Ni.style,{marginTop:"44px",marginBottom:"0",opacity:"0",transition:"opacity 0.8s ease-in",pointerEvents:"none"});const Ch=document.createElement("div");Object.assign(Ch.style,{display:"flex",flexDirection:"column",alignItems:"center",margin:"auto",maxWidth:"100%"});Ch.append(ls,Ir,Ni);Yo.appendChild(Ch);let Gs=[];function hm(i,e,t,n){Gs.forEach(clearTimeout),Gs=[],um=n,kt="MENU",Se.stopEngine(),ls.dataset.textKey=i,ls.innerText=Ee(i),ls.style.color=t,ls.style.textShadow=U.glow(t),Ir.dataset.textKey=e,Ir.innerText=Ee(e),Ni.style.color=t,Ni.style.borderColor=t,xn(Ni,t),kn.style.display="none",Ti.style.display="none",Kt.style.display="none",ni.style.display="none",Yo.style.display="flex",ls.style.opacity="0",Ir.style.opacity="0",Ni.style.opacity="0",Ni.style.pointerEvents="none",Gs.push(setTimeout(()=>{ls.style.opacity="1"},400)),Gs.push(setTimeout(()=>{Ir.style.opacity="1"},1500)),Gs.push(setTimeout(()=>{Ni.style.opacity="1",Ni.style.pointerEvents="auto"},3300))}function iE(){Gs.forEach(clearTimeout),Gs=[],Yo.style.display="none",um()}function dm(){hm("bossLevel","bossIntro",U.danger,()=>yl(Pl)),Se.startBossMusic()}function fm(i){hm(Vu(i,"Name"),Vu(i,"Desc"),bn,()=>Zm(i.id)),Se.startChallengeMusic()}const Vu=(i,e)=>"ch"+i.id.charAt(0).toUpperCase()+i.id.slice(1)+e,sE=[{section:"enemies",shape:"sphere",color:"#eaf0ff",cz:{name:"Bouncer",desc:"Nejrychlejší z nepřátel. Odráží se od zabrané plochy i od stěn arény. Zabije tě při dotyku — a stejně tak, když sám narazí do tvé rozdělané brázdy. Zabrané území nepoškozuje."},en:{name:"Bouncer",desc:"The fastest enemy. Bounces off captured ground and arena walls. It kills you on contact — and also when it runs into your unfinished trail. It does not damage captured territory."}},{section:"enemies",shape:"poly",color:"#c44dff",cz:{name:"Eater",desc:"Pomalejší než Bouncer, zato při každém nárazu do zabrané plochy z ní ukousne čtverec 5×5 polí. Postupně ti tak ubírá už získané území."},en:{name:"Eater",desc:"Slower than the Bouncer, but every time it hits captured ground it bites out a 5×5 square. It steadily eats away the territory you already won."}},{section:"enemies",shape:"diamond",color:"#1a1a24",stroke:"#ff6a00",cz:{name:"Bomber",desc:"Nejpomalejší nepřítel. Každých 5 sekund vystřelí ohnivou kouli náhodným směrem. Sám území nepoškozuje — to za něj obstarají jeho střely."},en:{name:"Bomber",desc:"The slowest enemy. Every 5 seconds it fires a fireball in a random direction. It does no damage itself — its projectiles do the work."}},{section:"enemies",shape:"sphere",color:"#ffb020",cz:{name:"Ohnivá koule",desc:"Letí rovně a velmi rychle. Při nárazu do zabrané plochy vybuchne a vypálí v ní kruh o poloměru 5 polí. Když zasáhne tebe nebo tvou brázdu, přijdeš o život."},en:{name:"Fireball",desc:"Flies straight and very fast. On hitting captured ground it explodes and burns out a circle with a radius of 5 cells. If it hits you or your trail, you lose a life."}},{section:"enemies",shape:"boss",color:"#10060c",stroke:"#ff2a2a",cz:{name:"Boss",desc:"Čeká jen v Boss levelu. Je ze všech nejpomalejší, zato míří pořád přímo k tobě a od ničeho se neodráží — zabranou plochu prostě rozdrtí a sám se tím ještě zpomalí. Dotek s ním stojí život. Roztrhá ho až odzbrojení všech čtyř generátorů spolu se zabranými 80 % plochy."},en:{name:"Boss",desc:"Waits only in the Boss level. The slowest enemy of all, but it always heads straight at you and bounces off nothing — it simply grinds captured ground down, slowing itself in the process. Touching it costs a life. It only blows up once all four generators are silenced and you hold 80 % of the arena."}},{section:"enemies",shape:"pylon",color:"#9d5bff",cz:{name:"Generátor",desc:"Čtyři z nich nabíjejí Bosse. Dokud je naživu aspoň jeden, Boss každých 10 sekund vystřelí ohnivé koule do všech stran — ohlásí to stoupající tón, třes a vlny vybíhající od něj ven. Zaber plochu kolem generátoru a umlčíš ho. Jakmile ji ale Boss zase rozdrtí, generátor se probudí."},en:{name:"Generator",desc:"Four of them keep the Boss charged. While even one is alive, the Boss fires a ring of fireballs every 10 seconds — a rising tone, a shudder and waves rolling outwards give it away. Capture the ground around a generator to silence it. Grind that ground away and it wakes back up."}},{section:"objects",shape:"mine",color:"#c6ff2e",cz:{name:"Mina",desc:"Objeví se uvnitř zabraného území. Jakmile se přiblížíš na 4 pole, spustí se odpočet 5 sekund — pak vybuchne, zničí kruh o poloměru 7 polí a v jeho dosahu zabije i tebe."},en:{name:"Mine",desc:"Appears inside captured territory. Come within 4 cells and a 5 second countdown starts — then it explodes, destroying a circle with a radius of 7 cells and killing you if you are inside it."}},{section:"objects",shape:"cross",color:"#ff2d95",useKeys:{name:"lifeName",desc:"lifeDesc"}},{section:"objects",shape:"hourglass",color:"#ffc93c",useKeys:{name:"clockName",desc:"clockDesc"}}];function rE(i){const e=i.stroke?` stroke="${i.stroke}" stroke-width="3"`:"";let t;return i.shape==="sphere"?t=`<circle cx="22" cy="22" r="15" fill="${i.color}"${e}/>`:i.shape==="poly"?t=`<polygon points="22,6 36,14 36,30 22,38 8,30 8,14" fill="${i.color}"${e}/>`:i.shape==="diamond"?t=`<polygon points="22,5 39,22 22,39 5,22" fill="${i.color}"${e}/>`:i.shape==="cross"?t=`<ellipse cx="22" cy="38" rx="13" ry="4" fill="none" stroke="${i.color}" stroke-width="1.5" opacity="0.5"/><polygon points="17,5 27,5 27,15 37,15 37,25 27,25 27,35 17,35 17,25 7,25 7,15 17,15" fill="#15151f" stroke="${i.color}" stroke-width="2.5" stroke-linejoin="round"/>`:i.shape==="hourglass"?t=`<ellipse cx="22" cy="39" rx="12" ry="4" fill="none" stroke="${i.color}" stroke-width="1.5" opacity="0.5"/><polygon points="9,5 35,5 22,21" fill="#15151f" stroke="${i.color}" stroke-width="2.5" stroke-linejoin="round"/><polygon points="22,21 35,37 9,37" fill="#15151f" stroke="${i.color}" stroke-width="2.5" stroke-linejoin="round"/>`:i.shape==="boss"?t=`<polygon points="22,3 41,22 22,41 3,22" fill="none" stroke="${i.stroke}" stroke-width="1.5" opacity="0.6"/><polygon points="22,8 33,15 33,29 22,36 11,29 11,15" fill="${i.color}" stroke="${i.stroke}" stroke-width="2.5"/>`:i.shape==="pylon"?t=`<polygon points="14,40 30,40 27,20 17,20" fill="#141124" stroke="${i.color}" stroke-width="2"/><polygon points="22,4 29,12 22,20 15,12" fill="${i.color}"/>`:t=`<circle cx="22" cy="22" r="18" fill="none" stroke="${i.color}" stroke-width="2" opacity="0.55"/><polygon points="32.2,26.2 26.2,32.2 17.8,32.2 11.8,26.2 11.8,17.8 17.8,11.8 26.2,11.8 32.2,17.8" fill="#15151f" stroke="${i.color}" stroke-width="2.5"/>`,`<svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">${t}</svg>`}const Ms=document.createElement("div");Object.assign(Ms.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"none",flexDirection:"column",alignItems:"center",pointerEvents:"auto",backgroundColor:U.overlay,overflowY:"auto",padding:"0 20px 40px",boxSizing:"border-box"});fn.appendChild(Ms);const Ph=document.createElement("div");Object.assign(Ph.style,{fontFamily:U.font,fontSize:"clamp(30px, 5vw, 56px)",color:U.text,marginTop:"8vh",marginBottom:"32px",letterSpacing:"2px",textShadow:U.glow(U.cyan)});Ph.dataset.textKey="helpTitle";Ms.appendChild(Ph);const Ui=document.createElement("div");Object.assign(Ui.style,{display:"flex",flexDirection:"column",gap:"18px",width:"100%",maxWidth:"680px"});Ms.appendChild(Ui);function Oc(i){const e=document.createElement("div");return Object.assign(e.style,{fontFamily:U.font,fontSize:"26px",color:U.amber,letterSpacing:"2px",textTransform:"uppercase",marginTop:"14px",marginBottom:"2px"}),e.textContent=Ee(i),e}function Fc(){const i=document.createElement("div");return Object.assign(i.style,{border:`2px solid ${U.panelEdge}`,padding:"16px 18px",display:"flex",flexDirection:"column",gap:"12px"}),i}function Bs(i,e=U.text,t="19px"){const n=document.createElement("div");return Object.assign(n.style,{fontFamily:U.font,fontSize:t,color:e,lineHeight:"1.45"}),n.textContent=i,n}function Df(i,e,t){const n=document.createElement("div");Object.assign(n.style,{display:"flex",alignItems:"center",gap:"14px",flexWrap:"wrap"});const s=document.createElement("div");return Object.assign(s.style,{display:"flex",gap:"5px"}),i.forEach(r=>s.appendChild(Sm(r,e))),n.append(s,Bs(Ee(t),e)),n}function oE(){setTimeout(()=>Qn.refresh(),0),kn.style.display="none",Ms.style.display="flex",Ui.innerHTML="",Ui.appendChild(Oc("helpGoal"));const i=Fc();i.appendChild(Bs(Ee("helpGoalText"))),i.appendChild(Bs(Ee("helpCollapse"))),i.appendChild(Bs(Ee("helpPillars"),U.dim)),Ui.appendChild(i),Ui.appendChild(Oc("helpControls"));const e=Fc();ot?e.appendChild(Bs(Ee(Qs()==="dpad"?"helpTouchDpad":"helpTouchJoystick"))):(e.appendChild(Df(["W","A","S","D"],U.cyan,"helpMoveOne")),e.appendChild(Df(["↑","←","↓","→"],"#00b4ff","helpMoveTwo")),e.appendChild(Bs(Ee("helpDiagonal"),U.dim))),Ui.appendChild(e);for(const t of["objects","enemies"]){Ui.appendChild(Oc(t==="objects"?"helpObjects":"helpEnemies"));for(const n of sE.filter(s=>s.section===t)){const s=Fc();s.style.flexDirection="row",s.style.gap="18px",s.style.alignItems="flex-start";const r=document.createElement("div");r.style.flex="0 0 auto",r.innerHTML=rE(n);const o=document.createElement("div"),a=n.useKeys?{name:Ee(n.useKeys.name),desc:Ee(n.useKeys.desc)}:n[ul],l=document.createElement("div");Object.assign(l.style,{fontFamily:U.font,fontSize:"24px",color:n.stroke||n.color,marginBottom:"6px",letterSpacing:"1px"}),l.textContent=a.name,o.append(l,Bs(a.desc)),s.append(r,o),Ui.appendChild(s)}}}function aE(){Ms.style.display="none",kn.style.display="flex"}const $o=document.createElement("div");$o.textContent="×";Object.assign($o.style,{position:"fixed",top:"14px",right:"16px",width:"46px",height:"46px",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:U.font,fontSize:"34px",lineHeight:"1",color:U.cyan,border:`2px solid ${U.cyan}`,backgroundColor:"rgba(4, 4, 15, 0.85)",cursor:"pointer",zIndex:"120"});$o.addEventListener("pointerdown",i=>{i.preventDefault(),Se.playSFX("click"),aE()});$o.addEventListener("touchend",i=>i.preventDefault(),{passive:!1});Ms.appendChild($o);const ti=document.createElement("div");Object.assign(ti.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"none",flexDirection:"column",alignItems:"center",pointerEvents:"auto",backgroundColor:U.overlay});fn.appendChild(ti);const Lh=document.createElement("div");Object.assign(Lh.style,{fontFamily:U.font,fontSize:"clamp(30px, 5vw, 56px)",color:U.text,marginTop:"10vh",marginBottom:"40px",letterSpacing:"2px",textShadow:U.glow(U.cyan)});Lh.dataset.textKey="settings";ti.appendChild(Lh);function pm(i,e,t){const n=document.createElement("div");n.style.marginBottom="30px",n.style.textAlign="center";const s=document.createElement("div");s.dataset.textKey=i,s.style.color=U.text,s.style.fontFamily=U.font,s.style.fontSize="24px",s.style.letterSpacing="1px",s.style.marginBottom="18px";const r=document.createElement("input");return r.type="range",r.min=0,r.max=1,r.step=.05,r.value=e,r.style.width="300px",r.style.cursor="pointer",r.oninput=o=>t(parseFloat(o.target.value)),n.appendChild(s),n.appendChild(r),n}ti.appendChild(pm("musicVol",Rn.bgmVol,i=>{Rn.bgmVol=i,Ll(),Se.updateVolumes()}));ti.appendChild(pm("sfxVol",Rn.sfxVol,i=>{Rn.sfxVol=i,Ll(),Se.updateVolumes()}));let Ha=!1,Bc=null;const li=ei("resetProgress",()=>{if(!Ha){Ha=!0,li.dataset.textKey="resetConfirm",li.innerText=Ee("resetConfirm"),clearTimeout(Bc),Bc=setTimeout(()=>{Ha=!1,li.dataset.textKey="resetProgress",li.innerText=Ee("resetProgress")},4e3);return}clearTimeout(Bc),Ha=!1,zt={unlocked:1,scores:{}},hl(),li.dataset.textKey="resetDone",li.innerText=Ee("resetDone"),setTimeout(()=>{li.dataset.textKey="resetProgress",li.innerText=Ee("resetProgress")},1800)});li.style.marginTop="30px";ti.appendChild(li);const kr=ei("touchJoystick",()=>{Rn.touchControl=Qs()==="dpad"?"joystick":"dpad",Ll(),kr.dataset.textKey=Qs()==="dpad"?"touchDpad":"touchJoystick",kr.innerText=Ee(kr.dataset.textKey),Ts()});kr.dataset.textKey=Qs()==="dpad"?"touchDpad":"touchJoystick";kr.style.marginTop="10px";ot&&ti.appendChild(kr);const Gr=ei("crtOn",()=>{const i=!zr.isEnabled();zr.setEnabled(i),Qn.setEnabled(i),Rn.crt=i,Ll(),Gr.dataset.textKey=i?"crtOn":"crtOff",Gr.innerText=Ee(Gr.dataset.textKey)});Gr.dataset.textKey=Rn.crt===!1?"crtOff":"crtOn";Gr.style.marginTop="10px";ti.appendChild(Gr);const mm=ei("back",()=>{ti.style.display="none",kn.style.display="flex"});mm.style.marginTop="50px";ti.appendChild(mm);const ni=document.createElement("div");Object.assign(ni.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"none"});fn.appendChild(ni);const Ss=document.createElement("div");Object.assign(Ss.style,{position:"absolute",top:"4.5%",left:"4.5%",display:"flex",gap:ot?"12px":"22px",fontFamily:U.font,fontSize:ot?"18px":"26px",color:U.text,letterSpacing:"1px",textShadow:"2px 2px 0 rgba(0,0,0,0.9)"});ni.appendChild(Ss);Qn.register(Ss);function Ko(i,e){const t=document.createElement("div");Object.assign(t.style,{display:"flex",alignItems:"center",gap:"9px"});const n=document.createElement("span");n.style.display="flex",n.innerHTML=ds(i,e,ot?2:3);const s=document.createElement("span");return t.append(n,s),{wrap:t,value:s}}const gm=Ko("heart",U.danger),Zo=Ko("area",U.cyan),Hu=Ko("timer",U.amber),xm="#9d5bff",_s=Ko("core",xm);_s.wrap.style.display="none";const gs=document.createElement("span"),_m=document.createElement("span");Zo.value.append(gs,_m);const Jo=Ko("mine","#c6ff2e");Jo.wrap.style.display="none";Ss.append(gm.wrap,Zo.wrap,Hu.wrap,_s.wrap,Jo.wrap);const lE=ot?18:26,cE=ot?54:110;function vm(){const i=at?at.goal:null;Jo.wrap.style.display=i==="mines"?"flex":"none",Zo.wrap.style.display=i==="mines"?"none":"flex",gs.style.fontSize="",gs.style.color=""}const bs=document.createElement("div");Object.assign(bs.style,{position:"absolute",top:"4.5%",left:"4.5%",display:"none",alignItems:"center",gap:"18px",fontFamily:U.font,fontSize:"20px",letterSpacing:"1px"});ni.appendChild(bs);Qn.register(bs);function Nf(i){const e=document.createElement("div");Object.assign(e.style,{display:"flex",alignItems:"center",gap:"10px",color:i,border:`2px solid ${i}`,padding:"6px 14px"});const t=document.createElement("span");t.style.display="flex",t.innerHTML=ds("heart",i,3);const n=document.createElement("span"),s=document.createElement("span");return s.style.marginLeft="8px",e.append(t,n,s),{wrap:e,lives:n,area:s}}const Xu=[Nf("#ff3b5c"),Nf("#00b4ff")],Ih=document.createElement("div");Object.assign(Ih.style,{color:U.amber,display:"flex",alignItems:"center",gap:"10px"});const Dh=document.createElement("span");Dh.style.display="flex";Dh.innerHTML=ds("timer",U.amber,3);const ym=document.createElement("span");Ih.append(Dh,ym);bs.append(Xu[0].wrap,Ih,Xu[1].wrap);let Xa=["","",""];function Mm(){$e.forEach(e=>{const t=Xu[e.index];if(!t)return;const n=`${e.lives}`;Xa[e.index]!==n+e.percentage&&(t.lives.textContent=n,t.area.textContent=`${e.percentage}%`,Xa[e.index]=n+e.percentage)});const i=`${Math.ceil(Math.max($n,0))}s`;Xa[2]!==i&&(ym.textContent=i,Xa[2]=i)}const tr=document.createElement("div");Object.assign(tr.style,{position:"absolute",top:"4.5%",right:"4.5%",display:"flex",gap:"15px",zIndex:"100"});ni.appendChild(tr);Qn.register(tr);const pi=document.createElement("button");pi.dataset.textKey="pause";Object.assign(pi.style,{padding:ot?"6px 10px":"10px 20px",cursor:"pointer",pointerEvents:"auto",backgroundColor:"transparent",fontFamily:U.font,fontSize:ot?"15px":"20px",border:`2px solid ${U.cyan}`,color:U.cyan,borderRadius:"0"});xn(pi,U.cyan);tr.appendChild(pi);const Qo=document.createElement("button");Qo.dataset.textKey="quit";Object.assign(Qo.style,{padding:ot?"6px 10px":"10px 20px",cursor:"pointer",pointerEvents:"auto",backgroundColor:"transparent",fontFamily:U.font,fontSize:ot?"15px":"20px",border:`2px solid ${U.danger}`,color:U.danger,borderRadius:"0"});xn(Qo,U.danger);Qo.onclick=i=>{i.stopPropagation(),Se.playSFX("click"),Ol()};tr.appendChild(Qo);const js=document.createElement("div");Object.assign(js.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:U.overlay,display:"none",justifyContent:"center",alignItems:"center",flexDirection:"column",color:U.cyan,fontSize:"clamp(26px, 4vw, 42px)",fontWeight:"bold",pointerEvents:"auto",textAlign:"center"});ni.appendChild(js);const Kt=document.createElement("div");Object.assign(Kt.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:U.overlay,display:"none",justifyContent:"center",alignItems:"center",flexDirection:"column",pointerEvents:"auto",textAlign:"center"});ni.appendChild(Kt);const Zi=document.createElement("div");Object.assign(Zi.style,{position:"absolute",bottom:"30px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"40px",alignItems:"center"});ni.appendChild(Zi);Qn.register(Zi);function Sm(i,e=U.cyan){const t=document.createElement("div");return t.innerText=i,Object.assign(t.style,{padding:"8px 12px",backgroundColor:"transparent",fontFamily:U.font,fontSize:"22px",border:`2px solid ${e}`,color:e,borderRadius:"0"}),t}function uE(i){const e=document.createElement("div");return e.dataset.textKey=i,Object.assign(e.style,{fontFamily:U.font,fontSize:"22px",color:U.dim,letterSpacing:"1px"}),e}function Nh(i,e,t){const n=document.createElement("div");Object.assign(n.style,{display:"flex",alignItems:"center",gap:"15px"});const s=document.createElement("div");Object.assign(s.style,{display:"flex",gap:"5px"}),i.forEach(o=>s.appendChild(Sm(o,e)));const r=uE(t);return r.style.color=e,n.append(s,r),n}const bm=Nh(["W","A","S","D"],U.cyan,"move"),Em=Nh(["W","A","S","D"],"#ff3b5c","playerOne"),Tm=Nh(["↑","←","↓","→"],"#00b4ff","playerTwo");Zi.append(bm,Em,Tm);function wm(){if(ot){Zi.style.display="none";return}const i=zn==="duel";bm.style.display=i?"none":"flex",Em.style.display=i?"flex":"none",Tm.style.display=i?"flex":"none"}wm();const Es=document.createElement("div");Object.assign(Es.style,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"min(430px, 80vw)",padding:"20px 22px",backgroundColor:U.overlay,border:`2px solid ${U.cyan}`,fontFamily:U.font,fontSize:"19px",color:U.text,lineHeight:"1.5",textAlign:"center",display:"none",pointerEvents:"auto",zIndex:"200"});fn.appendChild(Es);const Uh=document.createElement("div");Uh.textContent="×";Object.assign(Uh.style,{position:"absolute",top:"4px",right:"12px",fontFamily:U.font,fontSize:"30px",lineHeight:"1",color:U.cyan,cursor:"pointer"});Es.appendChild(Uh);const Am=document.createElement("div");Es.appendChild(Am);const Dr=document.createElement("div");Object.assign(Dr.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"#ffffff",opacity:"0",pointerEvents:"none",zIndex:"300"});fn.appendChild(Dr);function hE(i=40,e=1.6){Dr.style.transition="none",Dr.style.opacity="1",setTimeout(()=>{Dr.style.transition=`opacity ${e}s ease-out`,Dr.style.opacity="0"},i)}function Uf(i,e,t){const n=document.createElement("div");n.textContent=i,Object.assign(n.style,{position:"absolute",top:"42%",left:"50%",transform:"translate(-50%, -50%) scale(0.6)",fontFamily:U.font,fontSize:"clamp(42px, 8vw, 86px)",letterSpacing:"4px",color:e,textShadow:U.glow(e),opacity:"0",pointerEvents:"none",zIndex:"210",transition:"opacity 0.22s ease-out, transform 0.22s ease-out"}),fn.appendChild(n);const s=[];return s.push(setTimeout(()=>{n.style.opacity="1",n.style.transform="translate(-50%, -50%) scale(1)"},20)),s.push(setTimeout(()=>{const r=n.getBoundingClientRect(),o=t?t.getBoundingClientRect():null;if(o&&o.width>0){const a=o.left+o.width/2-(r.left+r.width/2),l=o.top+o.height/2-(r.top+r.height/2);n.style.transition="opacity 0.55s ease-in, transform 0.55s ease-in",n.style.transform=`translate(calc(-50% + ${a}px), calc(-50% + ${l}px)) scale(0.18)`}n.style.opacity="0"},900)),s.push(setTimeout(()=>n.remove(),1600)),s}function dE(i,e,t){const n=document.createElement("div");n.textContent=i,Object.assign(n.style,{position:"absolute",top:"46%",left:"50%",fontFamily:U.font,fontSize:"clamp(70px, 20vw, 210px)",letterSpacing:"6px",color:e,textShadow:U.glow(e),pointerEvents:"none",zIndex:"210"});const s=window.innerWidth/2,r=window.innerHeight*.46,o=t?t.getBoundingClientRect():null,a=o?o.left+o.width/2-s:0,l=o?o.top+o.height/2-r:0;n.style.transform=`translate(calc(-50% + ${a}px), calc(-50% + ${l}px)) scale(0.1)`,fn.appendChild(n),setTimeout(()=>{n.style.transition="transform 0.8s cubic-bezier(.16,.9,.3,1), opacity 0.7s ease-in 1.7s",n.style.transform="translate(-50%, -50%) scale(1)",n.style.opacity="0"},30),setTimeout(()=>n.remove(),2800)}function fl(i,e){const t=document.createElement("div");t.textContent=i,Object.assign(t.style,{position:"absolute",top:"56%",left:"50%",transform:"translate(-50%, -50%)",fontFamily:U.font,fontSize:"clamp(22px, 3.4vw, 36px)",letterSpacing:"3px",color:e,textShadow:U.glow(e),opacity:"0",pointerEvents:"none",zIndex:"210",transition:"opacity 0.3s ease-out"}),fn.appendChild(t),setTimeout(()=>{t.style.opacity="1"},20),setTimeout(()=>{t.style.transition="opacity 0.9s ease-in",t.style.opacity="0"},1500),setTimeout(()=>t.remove(),2600)}function fE(i){Am.textContent=Ee(i),Es.style.display="block"}const pE=i=>{i.preventDefault(),Es.style.display="none"};Es.addEventListener("pointerdown",pE);Es.addEventListener("touchend",i=>i.preventDefault(),{passive:!1});const Hs=58,Qt={active:!1,pointerId:null,x:0,z:0},Vr=document.createElement("div");Object.assign(Vr.style,{position:"absolute",width:`${Hs*2}px`,height:`${Hs*2}px`,marginLeft:`-${Hs}px`,marginTop:`-${Hs}px`,border:`2px solid ${U.cyan}`,borderRadius:"50%",backgroundColor:"rgba(0, 217, 255, 0.08)",display:"none",pointerEvents:"none",zIndex:"50"});const us=document.createElement("div");Object.assign(us.style,{position:"absolute",width:"52px",height:"52px",marginLeft:"-26px",marginTop:"-26px",border:`2px solid ${U.cyan}`,borderRadius:"50%",backgroundColor:"rgba(0, 217, 255, 0.35)",display:"none",pointerEvents:"none",zIndex:"51"});fn.append(Vr,us);function mE(i,e){Vr.style.left=`${i}px`,Vr.style.top=`${e}px`,Vr.style.display="block",Rm(i,e,i,e)}function Rm(i,e,t,n){const s=t-i,r=n-e,o=Math.hypot(s,r),a=Math.min(o,Hs);if(o>0?(us.style.left=`${i+s/o*a}px`,us.style.top=`${e+r/o*a}px`):(us.style.left=`${i}px`,us.style.top=`${e}px`),us.style.display="block",o===0||o/Hs<.18){Qt.x=0,Qt.z=0;return}const l=Math.min(o/Hs,1);Qt.x=s/o*l,Qt.z=r/o*l}function gE(){Qt.active=!1,Qt.pointerId=null,Qt.x=0,Qt.z=0,Vr.style.display="none",us.style.display="none"}let Cm=0,Pm=0;window.addEventListener("pointerdown",i=>{i.pointerType!=="touch"||kt!=="PLAYING"||Hi||jt||Qs()==="joystick"&&(i.target instanceof Element&&i.target.closest("button")||(Qt.active=!0,Qt.pointerId=i.pointerId,Cm=i.clientX,Pm=i.clientY,mE(i.clientX,i.clientY)))});window.addEventListener("pointermove",i=>{!Qt.active||i.pointerId!==Qt.pointerId||Rm(Cm,Pm,i.clientX,i.clientY)});const Lm=i=>{Qt.active&&i.pointerId===Qt.pointerId&&gE()};window.addEventListener("pointerup",Lm);window.addEventListener("pointercancel",Lm);document.addEventListener("dblclick",i=>i.preventDefault(),{passive:!1});["gesturestart","gesturechange","gestureend"].forEach(i=>{document.addEventListener(i,e=>e.preventDefault(),{passive:!1})});const zi={up:!1,down:!1,left:!1,right:!1},ea=document.createElement("div");Object.assign(ea.style,{position:"absolute",left:"50%",bottom:"26px",transform:"translateX(-50%)",display:"none",gridTemplateColumns:"repeat(3, 62px)",gridTemplateRows:"repeat(3, 62px)",gap:"4px",pointerEvents:"auto",zIndex:"60"});fn.appendChild(ea);function Wa(i,e,t,n){const s=document.createElement("div");s.textContent=i,Object.assign(s.style,{gridColumn:String(t),gridRow:String(n),display:"flex",alignItems:"center",justifyContent:"center",fontFamily:U.font,fontSize:"26px",color:U.cyan,border:`2px solid ${U.cyan}`,backgroundColor:"rgba(0, 217, 255, 0.1)",userSelect:"none",touchAction:"none"});const r=o=>{zi[e]=o,s.style.backgroundColor=o?"rgba(0, 217, 255, 0.45)":"rgba(0, 217, 255, 0.1)"};return s.addEventListener("pointerdown",o=>{o.preventDefault(),r(!0);try{s.setPointerCapture(o.pointerId)}catch{}}),s.addEventListener("pointerup",()=>r(!1)),s.addEventListener("touchend",o=>o.preventDefault(),{passive:!1}),s.addEventListener("dblclick",o=>o.preventDefault()),s.addEventListener("pointercancel",()=>r(!1)),s.addEventListener("pointerleave",()=>r(!1)),s}ea.append(Wa("↑","up",2,1),Wa("←","left",1,2),Wa("→","right",3,2),Wa("↓","down",2,3));function Im(){zi.up=zi.down=zi.left=zi.right=!1}function Ts(){const e=ot&&(kt==="PLAYING"&&!jt&&!Pt&&!Hi)&&Qs()==="dpad";ea.style.display=e?"grid":"none",e||Im()}function Nl(){document.querySelectorAll("[data-text-key]").forEach(i=>{i.innerText=Ee(i.dataset.textKey)}),(kt==="PLAYING"||Hi||jt)&&vs()}function Of(i,e,t=!1){const n=document.createElement("div");return Object.assign(n.style,{gridColumn:"1 / -1",textAlign:"center",marginTop:t?"0":ot?"14px":"22px",marginBottom:ot?"2px":"4px",fontFamily:U.font,fontSize:`${ot?16:22}px`,color:e,letterSpacing:"6px",textTransform:"uppercase"}),n.textContent=i,n}function xE(){setTimeout(()=>Qn.refresh(),0),kn.style.display="none",Ti.style.display="flex",as.innerHTML="",as.appendChild(Of(Ee("campaign"),U.cyan,!0)),Xo.forEach(t=>{const n=t.id<=zt.unlocked,s=document.createElement("div");Object.assign(s.style,{width:`${Pr}px`,height:`${Pr}px`,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:"0",border:n?`2px solid ${U.cyan}`:"2px solid #2b3a4a",backgroundColor:"transparent",cursor:n?"pointer":"not-allowed",color:n?U.cyan:U.dim}),s.innerHTML=`<div style="font-family: ${U.font}; font-size: ${ot?26:42}px;">${t.id}</div>`,zt.scores[t.id]?s.innerHTML+=`<div style="font-family: ${U.font}; font-size: ${ot?11:18}px; margin-top: ${ot?3:8}px; color: inherit; display: flex; align-items: center; gap: 4px;">${ds("star","currentColor",ot?1:2)} ${zt.scores[t.id]}</div>`:n||(s.innerHTML+=`<div style="margin-top: ${ot?3:8}px; display: flex; color: inherit;">${ds("lock","currentColor",ot?2:3)}</div>`),n&&(xn(s,U.cyan),s.onclick=()=>{Se.playSFX("click"),yl(t.id)}),as.appendChild(s)});const i=jb(),e=document.createElement("div");Object.assign(e.style,{gridColumn:"1 / -1",height:`${Math.round(Pr*.55)}px`,marginTop:ot?"0":"2px",display:"flex",justifyContent:"center",alignItems:"center",gap:"12px",border:`2px solid ${i?U.danger:"#2b3a4a"}`,color:i?U.danger:U.dim,cursor:i?"pointer":"not-allowed",fontFamily:U.font,fontSize:`${ot?26:42}px`,letterSpacing:"3px",textTransform:"uppercase"}),e.innerHTML=`<span>${Ee("bossLevel")}</span>`+(i?"":`<span style="display:flex; color:inherit;">${ds("lock","currentColor",ot?2:3)}</span>`),i&&(xn(e,U.danger),e.onclick=()=>{Se.playSFX("click"),dm()}),as.appendChild(e),as.appendChild(Of(Ee("challenges"),bn)),cl.forEach((t,n)=>{const s=document.createElement("div");Object.assign(s.style,{width:`${Pr}px`,height:`${Pr}px`,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:"0",border:`2px solid ${bn}`,backgroundColor:"transparent",cursor:"pointer",color:bn}),s.innerHTML=`<div style="font-family: ${U.font}; font-size: ${ot?26:42}px;">${n+1}</div>`,Yb(t.id)&&(s.innerHTML+=`<div style="margin-top: ${ot?3:8}px; display: flex; color: inherit;">${ds("star","currentColor",ot?1:2)}</div>`),xn(s,bn),s.onclick=()=>{Se.playSFX("click"),fm(t)},as.appendChild(s)})}let Ff=null,Bf=null,Wu=null,zf=null;function vs(){if(zn==="duel"){Mm();return}const i=$e[0],e=i?i.lives:0;e!==Ff&&(gm.value.textContent=e,Ff=e);const t=Math.ceil($n);if(t!==Bf&&(Hu.value.textContent=`${t}s`,Hu.value.style.color=$n<=10?U.danger:U.text,Bf=t),(wn!==Wu||Ws!==zf)&&(gs.textContent=`${wn}%`,_m.textContent=` / ${Ws}%`,Wu=wn,zf=Ws,at&&at.goal==="exact")){const n=Math.min(wn/at.exact,1),s=lE*(1+Math.pow(n,3)*3.6);gs.style.fontSize=`${Math.round(Math.min(s,cE))}px`,gs.style.color=n>.9?bn:U.text}if(at&&at.goal==="mines"&&(Jo.value.textContent=`${dl}/${at.minesNeeded}`),gn.length>0){const n=gn.length-qs();_s.value.textContent=`${n}/${gn.length}`,_s.value.style.color=n===gn.length?U.success:U.text}}function Ul(i){kt!=="PLAYING"||jt||Pt||(Se.playSFX("click"),Hi=typeof i=="boolean"?i:!Hi,Ts(),Hi?(Se.stopEngine(),js.style.display="flex",js.innerHTML=`<span style="font-family: ${U.font};">${Ee("pausedTitle")}</span><br><span style="font-family: ${U.font}; font-size: 22px; color: ${U.dim}; cursor:pointer; display:inline-block; margin-top:20px;">${Ee("pausedSub")}</span>`,pi.dataset.textKey="resume",pi.innerText=Ee("resume")):(Se.startEngine(),js.style.display="none",pi.dataset.textKey="pause",pi.innerText=Ee("pause")))}pi.addEventListener("click",Ul);js.addEventListener("click",()=>Ul(!1));document.addEventListener("visibilitychange",()=>{document.hidden&&kt==="PLAYING"&&Ul(!0)});function Ol(){jt=!1,Hi=!1,Pt=!1,kt="MENU",qn=0,Se.stopEngine(),Se.startMenuMusic(),js.style.display="none",Kt.style.display="none",ni.style.display="none",Ti.style.display="none",bs.style.display="none",ea.style.display="none",Im(),mt.visible=!1,zn="campaign",at=null,At.up.set(0,1,0),Jo.wrap.style.display="none",Zo.wrap.style.display="flex",gs.style.fontSize="",gs.style.color="",ms=null,Km(),km(),ki.group&&(ki.group.visible=!0),At.position.set(0,4,15),hi.set(0,4,0),At.lookAt(hi),pi.dataset.textKey="pause",Nl(),kn.style.display="flex"}const Dm=()=>Math.floor(wn*$n*($e[0]?$e[0].lives:1)*sn);function _E(i){const n=document.createElement("canvas");n.width=900,n.height=480;const s=n.getContext("2d");s.fillStyle="#04040f",s.fillRect(0,0,900,480),s.strokeStyle=U.cyan,s.lineWidth=4,s.strokeRect(18,18,864,444),s.textAlign="center",s.fillStyle=U.cyan,s.shadowColor=U.cyan,s.shadowBlur=18,s.font="96px 'VT323', monospace",s.fillText("CUTRON",900/2,132),s.fillStyle=U.amber,s.shadowColor=U.amber,s.font="62px 'VT323', monospace",s.fillText(Ee("bossDefeated"),900/2,214),s.shadowBlur=0,s.fillStyle=U.text,s.font="36px 'VT323', monospace",s.fillText(Ee("gameCompleted"),900/2,264),s.fillStyle=U.dim,s.font="30px 'VT323', monospace",s.fillText(Ee("totalScore"),900/2,332),s.fillStyle=U.success,s.shadowColor=U.success,s.shadowBlur=20,s.font="84px 'VT323', monospace",s.fillText(String(i),900/2,408),s.shadowBlur=0,s.fillStyle=U.dim,s.font="22px 'VT323', monospace",s.fillText(new Date().toLocaleDateString(),900/2,452),s.fillStyle="rgba(0, 0, 0, 0.16)";for(let r=0;r<480;r+=3)s.fillRect(0,r,900,1);return n}let Xs=null;function vE(i){Xs=null,_E(i).toBlob(e=>{e&&(Xs=new File([e],"cutron.png",{type:"image/png"}))},"image/png")}function yE(i){const e=t=>{i.innerText=Ee(t),setTimeout(()=>{i.innerText=Ee("share")},2200)};if(!Xs){e("shareFailed");return}if(ot&&navigator.canShare&&navigator.canShare({files:[Xs]})){navigator.share({files:[Xs],title:"Cutron"}).catch(()=>{});return}if(navigator.clipboard&&window.ClipboardItem){navigator.clipboard.write([new ClipboardItem({"image/png":Xs})]).then(()=>e("shareCopied")).catch(()=>kf(e));return}kf(e)}function kf(i){const e=URL.createObjectURL(Xs),t=document.createElement("a");t.href=e,t.download="cutron.png",t.click(),setTimeout(()=>URL.revokeObjectURL(e),2e3),i("shareSaved")}function Gf(i,e,t){const n=document.createElement("button");return n.innerText=i,Object.assign(n.style,{fontFamily:U.font,padding:"14px 22px",fontSize:"22px",cursor:"pointer",backgroundColor:"transparent",color:e,border:`2px solid ${e}`,borderRadius:"0"}),xn(n,e),n.onclick=t,n}function ME(){jt=!0,Ts(),Se.stopEngine(),Se.stopGameMusic(),Se.playSFX("victory"),mt.visible=!1,$e.forEach(r=>{r.group.visible=!1}),Ss.style.display="none",tr.style.display="none",Zi.style.display="none",Kt.style.backgroundColor="#04040f",Kt.style.display="flex";const i=Dm();(!zt.scores[sn]||i>zt.scores[sn])&&(zt.scores[sn]=i),hl();const e=Object.values(zt.scores).reduce((r,o)=>r+o,0);vE(e),Kt.innerHTML=`
        <div style="font-family: ${U.font}; color: ${U.amber}; font-size: clamp(34px, 6vw, 68px); letter-spacing: 4px; text-shadow: ${U.glow(U.amber)};">${Ee("bossDefeated")}</div>
        <div style="font-family: ${U.font}; font-size: clamp(20px, 3vw, 28px); color: ${U.text}; margin-top: 20px;">${Ee("gameCompleted")}</div>
        <div style="font-family: ${U.font}; font-size: 24px; color: ${U.dim}; margin-top: 40px; letter-spacing: 2px;">${Ee("totalScore")}</div>
        <div style="font-family: ${U.font}; font-size: clamp(40px, 7vw, 76px); color: ${U.success}; text-shadow: ${U.glow(U.success)};">${e}</div>`;const t=document.createElement("div");Object.assign(t.style,{marginTop:"44px",display:"flex",gap:"20px"});const n=Gf(Ee("mainMenu"),U.dim,()=>{Se.playSFX("click"),Ol()}),s=Gf(Ee("share"),U.cyan,()=>{Se.playSFX("click"),yE(s)});t.append(n,s),Kt.appendChild(t)}function Nm(i,e=""){jt=!0,Ts(),Se.stopEngine(),Se.stopGameMusic(),Kt.style.display="flex",Zi.style.display="none";let t="";if(i&&at)zt.challenges=zt.challenges||{},zt.challenges[at.id]=!0,hl(),Kt.innerHTML=`
            <div style="font-family: ${U.font}; color: ${bn}; font-size: clamp(34px, 6vw, 68px); letter-spacing: 3px; text-shadow: ${U.glow(bn)};">${Ee("challengeDone")}</div>
            <div style="font-family: ${U.font}; font-size: 26px; color: ${U.text}; margin-top: 20px; letter-spacing: 2px;">${Ee(Vu(at,"Name"))}</div>
            <div style="margin-top: 22px; color: ${bn}; display: flex;">${ds("star","currentColor",4)}</div>`;else if(i){const o=Dm();(!zt.scores[sn]||o>zt.scores[sn])&&(zt.scores[sn]=o),sn===zt.unlocked&&sn<If&&zt.unlocked++,hl(),t=`<div style="font-family: ${U.font}; font-size: 28px; margin-top: 24px; color: ${U.success};">${Ee("score")}: ${o}</div>`,Kt.innerHTML=`
            <div style="font-family: ${U.font}; color: ${U.success}; font-size: clamp(34px, 6vw, 68px); text-shadow: ${U.glow(U.success)};">${Ee("victory")}</div>
            <div style="font-family: ${U.font}; font-size: 24px; color: ${U.text}; margin-top: 20px;">${Ee("captured").replace("%s",wn)}</div>
            ${t}`}else Kt.innerHTML=`
            <div style="font-family: ${U.font}; color: ${U.danger}; font-size: clamp(34px, 6vw, 68px); text-shadow: ${U.glow(U.danger)};">${Ee("gameOver")}</div>
            <div style="font-family: ${U.font}; font-size: 24px; color: ${U.text}; margin-top: 20px;">${e}</div>`;const n=document.createElement("div");if(Object.assign(n.style,{marginTop:"40px",display:"flex",gap:"20px"}),i&&at){const o=cl.indexOf(at),a=cl[o+1];if(a){const l=document.createElement("button");l.innerText=Ee("nextChallenge"),Object.assign(l.style,{fontFamily:U.font,padding:"14px 22px",fontSize:"22px",cursor:"pointer",backgroundColor:"transparent",color:bn,border:`2px solid ${bn}`,borderRadius:"0"}),xn(l,bn),l.onclick=()=>{Se.playSFX("click"),fm(a)},n.appendChild(l)}}if(i&&!at&&sn<If){const o=document.createElement("button");o.innerText=Ee("nextLevel"),Object.assign(o.style,{fontFamily:U.font,padding:"14px 22px",fontSize:"22px",cursor:"pointer",backgroundColor:"transparent",color:U.success,border:`2px solid ${U.success}`,borderRadius:"0"}),xn(o,U.success),o.onclick=()=>{Se.playSFX("click"),sn+1===Pl?dm():yl(sn+1)},n.appendChild(o)}const s=document.createElement("button");s.innerText=Ee("playAgain"),Object.assign(s.style,{fontFamily:U.font,padding:"14px 22px",fontSize:"22px",cursor:"pointer",backgroundColor:"transparent",color:U.cyan,border:`2px solid ${U.cyan}`,borderRadius:"0"}),xn(s,U.cyan),s.onclick=()=>{Se.playSFX("click"),at?Zm(at.id):yl(sn)};const r=document.createElement("button");r.innerText=Ee("mainMenu"),Object.assign(r.style,{fontFamily:U.font,padding:"14px 22px",fontSize:"22px",cursor:"pointer",backgroundColor:"transparent",color:U.dim,border:`2px solid ${U.dim}`,borderRadius:"0"}),xn(r,U.dim),r.onclick=()=>{Se.playSFX("click"),Ol()},n.appendChild(s),n.appendChild(r),Kt.appendChild(n)}function Um(i,e){jt=!0,Ts(),Se.stopEngine(),Se.stopGameMusic(),Kt.style.display="flex",Zi.style.display="none";const t=i.index===0?"#ff3b5c":"#00b4ff",n=Ee(i.labelKey),s=$e.map(l=>`${Ee(l.labelKey)} ${l.percentage}%`).join("  ·  ");Kt.innerHTML=`
        <div style="font-family: ${U.font}; color: ${t}; font-size: clamp(26px, 5vw, 54px); text-shadow: ${U.glow(t)};">${Ee("duelWins").replace("%s",n)}</div>
        <div style="font-family: ${U.font}; font-size: 16px; color: ${U.text}; margin-top: 20px;">${n} ${Ee(e)}</div>
        <div style="font-family: ${U.font}; font-size: 18px; color: ${U.dim}; margin-top: 16px;">${s}</div>`;const r=document.createElement("div");Object.assign(r.style,{marginTop:"40px",display:"flex",gap:"20px"});const o=document.createElement("button");o.innerText=Ee("playAgain"),Object.assign(o.style,{fontFamily:U.font,padding:"14px 22px",fontSize:"22px",cursor:"pointer",backgroundColor:"transparent",color:U.cyan,border:`2px solid ${U.cyan}`,borderRadius:"0"}),xn(o,U.cyan),o.onclick=()=>{Se.playSFX("click"),Jm()};const a=document.createElement("button");a.innerText=Ee("mainMenu"),Object.assign(a.style,{fontFamily:U.font,padding:"14px 22px",fontSize:"22px",cursor:"pointer",backgroundColor:"transparent",color:U.dim,border:`2px solid ${U.dim}`,borderRadius:"0"}),xn(a,U.dim),a.onclick=()=>{Se.playSFX("click"),Ol()},r.append(o,a),Kt.appendChild(r)}const SE=new Wx(16777215,1.05);rn.add(SE);const ii=new Kp(16777215,1.45);ii.position.set(10,20,10);ii.castShadow=!0;ii.shadow.mapSize.width=1024;ii.shadow.mapSize.height=1024;const Fl=25;ii.shadow.camera.left=-Fl;ii.shadow.camera.right=Fl;ii.shadow.camera.top=Fl;ii.shadow.camera.bottom=-Fl;ii.shadow.camera.near=.5;ii.shadow.camera.far=100;rn.add(ii);const qe=100,te=.25,De=qe*te,Rt=1,bE=(qe-2)*(qe-2);let we=[];const $e=[],gi=[],mt=new hn;mt.visible=!1;rn.add(mt);const EE=new Wp({color:3487083}),Oh=new gt(new no(De,De),EE);Oh.rotation.x=-Math.PI/2;Oh.receiveShadow=!0;mt.add(Oh);const nr=qe*qe,TE=new ys(te,Rt,te),wE=new Wp,dt=new mh(TE,wE,nr);dt.castShadow=!1;dt.receiveShadow=!0;dt.instanceMatrix.setUsage(vp);mt.add(dt);const tt=new Tt,Fn=0,Bn=5,Bl=i=>i===0?1:3,Om=i=>i===0?2:4,Ht=i=>i===1||i===3,_i=i=>i===2||i===4,Fm=i=>i===1?0:1,vi=i=>i===2?0:1,AE=new ze(4872826),RE=new ze(55807),Fh=()=>zn==="duel"?AE:RE,pl={campaign:[{captured:55807,trail:16752675,tint:null}],duel:[{captured:16726876,trail:16751280,tint:16726876},{captured:46335,trail:10216703,tint:46335}]},pn=new Int32Array(nr),Ar=new Int32Array(nr),zc=new Uint8Array(nr),Eo=new Uint8Array(nr),kc=new Uint8Array(nr),CE=180,Bm=new ze(16773876),PE=9,Xi=[];function un(i,e){return e*qe+i}function ir(i,e,t,n,s=!0){const r=i*te-De/2+te/2,o=e*te-De/2+te/2,a=Rt/2,l=un(i,e);if(we[e][i]=n,dt.setColorAt(l,t),Xi.length>0){const c=Xi.findIndex(u=>u.index===l);c!==-1&&Xi.splice(c,1)}s?(tt.position.set(r,a-Rt,o),tt.scale.set(1,1,1),tt.updateMatrix(),dt.setMatrixAt(l,tt.matrix),gi.push({index:l,x:r,z:o,currentY:a-Rt,targetY:a})):(tt.position.set(r,a,o),tt.scale.set(1,1,1),tt.updateMatrix(),dt.setMatrixAt(l,tt.matrix)),dt.instanceMatrix.needsUpdate=!0,dt.instanceColor&&(dt.instanceColor.needsUpdate=!0)}function zm(){for(let i=0;i<qe;i++){we[i]||(we[i]=[]);for(let e=0;e<qe;e++)if(e===0||e===qe-1||i===0||i===qe-1)we[i][e]=Bn,ir(e,i,Fh(),Bn,!1);else{we[i][e]=0;const t=un(e,i);tt.scale.set(0,0,0),tt.updateMatrix(),dt.setMatrixAt(t,tt.matrix)}}dt.instanceMatrix.needsUpdate=!0,gi.length=0,Xi.length=0,$e.forEach(i=>{i.trail.length=0,i.percentage=0}),wn=0}const Gc=3.4,LE=22,IE=16;function DE(i,e){if(!i)return;const t=9,n=qe-2*t,s=Bl(e.index),r=Math.floor((e.startX+De/2)/te),o=Math.floor((e.startZ+De/2)/te),a=[];for(let l=0;l<i;l++)for(let c=0;c<200;c++){const u=t+Math.floor(Math.random()*n),h=t+Math.floor(Math.random()*n);if(Math.hypot(u-r,h-o)<IE||a.some(f=>Math.hypot(f.x-u,f.z-h)<LE))continue;a.push({x:u,z:h});const d=Math.floor(Gc);for(let f=-d;f<=d;f++)for(let p=-d;p<=d;p++)p*p+f*f>Gc*Gc||ir(u+p,h+f,e.colorCaptured,s,!1);break}return a}for(let i=0;i<nr;i++)tt.scale.set(0,0,0),tt.updateMatrix(),dt.setMatrixAt(i,tt.matrix);zm();function ml(i,e){const t=new hn;t.position.set(e.startX,0,e.startZ),rn.add(t);const n={index:i,group:t,model:null,rotor1:null,rotor2:null,keys:e.keys,labelKey:e.labelKey,colorCaptured:new ze(e.colors.captured),colorTrail:new ze(e.colors.trail),tint:e.colors.tint,startX:e.startX,startZ:e.startZ,velocityX:0,velocityZ:0,lastGridX:-1,lastGridZ:-1,lastTrailDir:null,trail:[],collapsing:!1,collapseProgress:0,collapseReason:null,trailBroken:!1,lives:3,isRespawning:!1,percentage:0};return $e.push(n),Bh(n),n}function NE(i){i.group.position.set(i.startX,0,i.startZ),i.group.rotation.set(0,0,0),i.group.visible=!0,i.velocityX=0,i.velocityZ=0,i.lastGridX=-1,i.lastGridZ=-1,i.lastTrailDir=null,i.trail.length=0,i.collapsing=!1,i.collapseProgress=0,i.collapseReason=null,i.trailBroken=!1,i.isRespawning=!1}function km(){$e.forEach(i=>rn.remove(i.group)),$e.length=0}const ju=i=>$e.filter(e=>e!==i);function ta(i,e,t){if(kt!=="PLAYING"||Pt||jt)return!1;let n=!1;for(const s of $e){if(s.isRespawning)continue;const r=s.group.position.x-i.x,o=s.group.position.z-i.z;Math.hypot(r,o)<e&&(sr(s,Ee(t)),n=!0)}return n}const Vf=()=>zn==="duel"||!$e.some(i=>i.isRespawning);function UE(i){const t=document.createElement("canvas");t.width=t.height=192;const n=t.getContext("2d"),s=192/2,r=s*.97,o=s*.6,a=240;for(let c=0;c<a;c++){const u=c/a*2%1,h=Math.pow(1-u,2.4);if(h<.004)continue;const d=c/a*Math.PI*2,f=(c+1.6)/a*Math.PI*2,p=i?-f:d,x=i?-d:f,m=o+(r-o)*(.35+.65*h);n.beginPath(),n.arc(s,s,r,p,x),n.arc(s,s,r-(m-o),x,p,!0),n.closePath(),n.fillStyle=`rgba(226, 240, 255, ${(.14*h).toFixed(4)})`,n.fill()}const l=new Dp(t);return l.colorSpace=$t,l}const OE=new tb;let el=null;const qu=[];OE.load("Sprite_drone_2.glb",i=>{const e=i.scene;e.scale.set(.15,.15,.15);const t=e.getObjectByName("Rotor_one"),n=e.getObjectByName("Rotor_two");e.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0)}),e.traverse(r=>{!r.isMesh||!r.material||!r.material.emissive||(r.material=r.material.clone(),r.material.emissive.setHex(4016739),r.material.emissiveIntensity=1)}),e.updateWorldMatrix(!0,!0);const s=new L;[t,n].forEach((r,o)=>{if(!r)return;new Mi().setFromObject(r).getSize(s);const a=Math.max(s.x,s.z)*.5/e.scale.x,l=new gt(new Js(a*.58,a*1.06,48),new Lt({map:UE(o===0),transparent:!0,blending:xs,depthWrite:!1,side:cn}));l.rotation.x=-Math.PI/2,l.userData.isRotorWake=!0,r.add(l)}),el=e,qu.forEach(Bh),qu.length=0});function FE(i){if(i.name==="Orange")return!0;const e=i.color;return e.r>.25&&e.r>e.g*2.5&&e.r>e.b*2.5}function Bh(i){if(!el){qu.push(i);return}const e=el.clone();if(e.scale.copy(el.scale),i.scaleMultiplier&&e.scale.multiplyScalar(i.scaleMultiplier),i.tint!==null&&i.tint!==void 0){const t=new ze(i.tint);e.traverse(n=>{if(!n.isMesh||!n.material||n.userData.isRotorWake)return;const s=n.material;!s.color||!FE(s)||(n.material=s.clone(),n.material.color.copy(t),n.material.emissive&&n.material.emissive.copy(t).multiplyScalar(.25))})}i.model=e,i.rotor1=e.getObjectByName("Rotor_one"),i.rotor2=e.getObjectByName("Rotor_two"),i.group.add(e)}const ki={group:new hn,model:null,rotor1:null,rotor2:null,tint:null,scaleMultiplier:1.35};rn.add(ki.group);Bh(ki);function Hf(i,e){i.rotor1&&(i.rotor1.rotation.y+=15*e),i.rotor2&&(i.rotor2.rotation.y-=15*e)}const zh=15;let Yu=zh;const Xf=8,eo={wasd:{up:"w",down:"s",left:"a",right:"d"},arrows:{up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"}},Nr=new Set,Gm=new Set([...Object.values(eo.wasd),...Object.values(eo.arrows)]);window.addEventListener("keydown",i=>{const e=i.key.toLowerCase();Gm.has(e)&&(e.startsWith("arrow")&&i.preventDefault(),Nr.add(e))});window.addEventListener("keyup",i=>{const e=i.key.toLowerCase();Gm.has(e)&&Nr.delete(e)});window.addEventListener("keydown",i=>{i.key!=="Escape"&&i.code!=="Space"||kt==="PLAYING"&&(i.preventDefault(),document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),Ul())});window.addEventListener("resize",()=>{At.aspect=window.innerWidth/window.innerHeight,At.updateProjectionMatrix(),zr.resize(),Qn.refresh()});const zl=600,BE=new ys(.15,.15,.15),An=new mh(BE,new Lt,zl);An.instanceMatrix.setUsage(vp);An.frustumCulled=!1;rn.add(An);const Vm=9109504,kh=2236962,Gh=16746496,Wf=[16766720,65450,43775,16711850,16777215],jn=new Tt,na=[],Vh=[];for(let i=zl-1;i>=0;i--)na[i]={active:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,rot:0,life:0},Vh.push(i),jn.scale.set(0,0,0),jn.updateMatrix(),An.setMatrixAt(i,jn.matrix);const zE=new ze;function ia(i,e,t,n,s,r,o,a){const l=Vh.pop();if(l===void 0)return;const c=na[l];c.active=!0,c.x=i,c.y=e,c.z=t,c.vx=n,c.vy=s,c.vz=r,c.rot=0,c.life=o,An.setColorAt(l,zE.setHex(a)),An.instanceColor&&(An.instanceColor.needsUpdate=!0)}function Hm(i){na[i].active=!1,Vh.push(i),jn.scale.set(0,0,0),jn.updateMatrix(),An.setMatrixAt(i,jn.matrix)}function er(i,e,t,n=45,s=[Vm,kh]){for(let r=0;r<n;r++){const o=Math.random()*Math.PI*2,a=Math.random()*8+4,l=Math.random()*10+5;ia(i,e,t,Math.cos(o)*a,l,Math.sin(o)*a,1,s[Math.floor(Math.random()*s.length)])}An.instanceMatrix.needsUpdate=!0}function Hh(i,e,t){const n=Wf[Math.floor(Math.random()*Wf.length)];for(let s=0;s<40;s++){const r=Math.random()*Math.PI*2,o=Math.random()*10+2,a=Math.random()*12+4;ia(i,e,t,Math.cos(r)*o,a,Math.sin(r)*o,1.2,n)}An.instanceMatrix.needsUpdate=!0}const gl=te*1.5,Xm=new Wo(gl*.72,gl,te*.7,8),kE=new Lt({color:1381663}),GE=new Ks(Xm),$u=13041454,VE=15925200,HE=new Yi({color:$u}),XE=new Js(gl*.78,gl*1.15,8);function WE(){const i=te*1.9,e=te*.66,t=new zp;t.moveTo(-e,-i),t.lineTo(e,-i),t.lineTo(e,-e),t.lineTo(i,-e),t.lineTo(i,e),t.lineTo(e,e),t.lineTo(e,i),t.lineTo(-e,i),t.lineTo(-e,e),t.lineTo(-i,e),t.lineTo(-i,-e),t.lineTo(-e,-e),t.closePath();const n=new yh(t,{depth:te*.7,bevelEnabled:!1});return n.center(),n}function jE(){const i=te*1.5,e=te*1.75,t=new ll(i,e,6);t.rotateX(Math.PI),t.translate(0,e/2,0);const n=new ll(i,e,6);return n.translate(0,-e/2,0),QS([t,n],!1)}const qE=new Js(te*1.7,te*2.4,8),YE=10,$E=te*3,Wm=5,jf=WE(),qf=jE();function KE(i){const e=t=>t<0||t>1?0:Math.pow(1-t,3);return Math.max(e(i/.18),e((i-.26)/.2)*.75)}const ZE={life:{color:16723349,geometry:jf,edges:new Ks(jf),body:new Lt({color:4000804}),sparks:[16723349,16762082],canTake:i=>i.lives<Wm,take:i=>{i.lives++}},time:{color:16763196,geometry:qf,edges:new Ks(qf),body:new Lt({color:3812360}),sparks:[16763196,16774872],canTake:()=>!0,take:()=>{$n+=YE}}},xl=()=>40+Math.random()*50,Oi=[],jm={life:{timer:0,delay:xl()},time:{timer:0,delay:xl()}};class JE{constructor(e,t,n){this.kind=e,this.config=ZE[e],this.isDead=!1,this.bob=Math.random()*Math.PI*2,this.pulsePhase=0,this.sandTimer=0,this.mesh=new hn,this.mesh.position.set(t,Rt+.5,n),this.body=new gt(this.config.geometry,this.config.body),this.body.add(new $s(this.config.edges,new Yi({color:this.config.color}))),this.mesh.add(this.body),this.ringMaterial=new Lt({color:this.config.color,transparent:!0,opacity:.4,blending:xs,depthWrite:!1,side:cn}),this.ring=new gt(qE,this.ringMaterial),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=-.42,this.mesh.add(this.ring),mt.add(this.mesh)}remove(){mt.remove(this.mesh),this.isDead=!0}update(e){if(this.isDead)return;this.mesh.rotation.y+=1.1*e,this.bob+=e*2.2,this.mesh.position.y=Rt+.5+Math.sin(this.bob)*.09,this.pulsePhase=(this.pulsePhase+e/(this.kind==="life"?1.1:2.2))%1;const t=this.kind==="life"?KE(this.pulsePhase):Math.sin(this.pulsePhase*Math.PI*2)*.5+.5;this.ring.scale.setScalar(1+t*.18),this.ringMaterial.opacity=.25+t*.45,this.kind==="life"&&this.body.scale.setScalar(1+t*.07),this.kind==="time"&&(this.sandTimer-=e,this.sandTimer<=0&&(this.sandTimer=.12,ia(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z,0,-.9,0,.3,16774872)));const n=Math.floor((this.mesh.position.x+De/2)/te),s=Math.floor((this.mesh.position.z+De/2)/te);if(we[s]&&!Ht(we[s][n])){this.remove();return}for(const r of $e){if(r.isRespawning||!this.config.canTake(r))continue;const o=r.group.position.x-this.mesh.position.x,a=r.group.position.z-this.mesh.position.z;if(Math.hypot(o,a)<$E){this.config.take(r),Se.playSFX("pickup"),er(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z,24,this.config.sparks),this.remove(),vs();return}}}}function Yf(i,e){const s=qe-8;for(let r=0;r<150;r++){const o=4+Math.floor(Math.random()*s),a=4+Math.floor(Math.random()*s);if(!Ht(we[a][o]))continue;let l=!0;for(let u=-2;u<=2&&l;u++)for(let h=-2;h<=2;h++)if(we[a+u]&&!Ht(we[a+u][o+h])){l=!1;break}if(!l)continue;let c=!0;for(const u of e){const h=Math.floor((u.mesh.position.x+De/2)/te),d=Math.floor((u.mesh.position.z+De/2)/te),f=o-h,p=a-d;if(f*f+p*p<i*i){c=!1;break}}if(c)return{x:o*te-De/2+te/2,z:a*te-De/2+te/2}}return null}const ci=[];let tl=0;class QE{constructor(e,t){this.radius=te*.4,this.isDead=!1,this.timer=5,this.mesh=new hn,this.mesh.position.set(e,15,t),this.targetY=Rt;const n=document.createElement("canvas");n.width=128,n.height=128;const s=n.getContext("2d"),r=new Dp(n);this.textSprite=new C0(new Rp({map:r,transparent:!0})),this.textSprite.position.y=.75,this.textSprite.scale.set(.95,.95,1),this.textSprite.visible=!1,this.textCanvas=n,this.textCtx=s,this.textTexture=r,this.mesh.add(this.textSprite),this.isTriggered=!1,this.lastDisplayedSecond=-1;const o=new gt(Xm,kE);o.position.y=te*.35,o.add(new $s(GE,HE)),this.mesh.add(o),this.ringMaterial=new Lt({color:$u,transparent:!0,opacity:.55,blending:xs,depthWrite:!1,side:cn}),this.ring=new gt(XE,this.ringMaterial),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=te*.72,this.mesh.add(this.ring),this.pulsePhase=0,mt.add(this.mesh)}updateCountdownText(e){if(e===this.lastDisplayedSecond)return;this.lastDisplayedSecond=e,Se.playSFX("beep");const t=this.textCtx;t.clearRect(0,0,128,128),t.fillStyle="rgba(8, 8, 16, 0.92)",t.beginPath(),t.arc(64,64,52,0,Math.PI*2),t.fill(),t.lineWidth=6,t.strokeStyle=e<=2?"#f2ffd0":"#c6ff2e",t.stroke(),t.font="bold 86px monospace",t.textAlign="center",t.textBaseline="middle",t.lineWidth=8,t.strokeStyle="#000000",t.strokeText(e.toString(),64,68),t.fillStyle=e<=2?"#ffffff":"#dcff8a",t.fillText(e.toString(),64,68),this.textTexture.needsUpdate=!0}explodeMine(){Se.playSFX("explosion");const e=Math.floor((this.mesh.position.x+De/2)/te),t=Math.floor((this.mesh.position.z+De/2)/te);let n=!1;const s=7;for(let r=-s;r<=s;r++)for(let o=-s;o<=s;o++)if(o*o+r*r<=s*s){const a=e+o,l=t+r;if(a>0&&a<qe-1&&l>0&&l<qe-1&&Ht(we[l][a])){we[l][a]=Fn;const c=un(a,l);tt.scale.set(0,0,0),tt.updateMatrix(),dt.setMatrixAt(c,tt.matrix),n=!0}}if(n&&(dt.instanceMatrix.needsUpdate=!0,Gl()),er(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z,80,[Vm,Gh,kh]),at&&at.goal==="mines"&&!jt&&!Pt&&(dl++,vs(),dl>=at.minesNeeded&&Zu()),kt==="PLAYING"&&!Pt&&!jt)for(const r of $e){if(r.isRespawning)continue;const o=r.group.position.x-this.mesh.position.x,a=r.group.position.z-this.mesh.position.z;Math.sqrt(o*o+a*a)<s*te&&sr(r,Ee("reasonMine"))}}update(e){if(this.isDead)return;this.mesh.position.y>this.targetY&&(this.mesh.position.y-=15*e,this.mesh.position.y<this.targetY&&(this.mesh.position.y=this.targetY));const t=Math.floor((this.mesh.position.x+De/2)/te),n=Math.floor((this.mesh.position.z+De/2)/te);if(this.mesh.position.y<=this.targetY+.1&&we[n]&&!Ht(we[n][t])){this.explodeMine(),mt.remove(this.mesh),this.isDead=!0;return}const s=this.isTriggered?Math.max(0,1-this.timer/5):0;this.pulsePhase+=e*(2.5+s*22);const r=Math.sin(this.pulsePhase)*.5+.5;if(this.ring.scale.setScalar(1+r*(.12+s*.4)),this.ringMaterial.opacity=.3+r*(.3+s*.45),this.ringMaterial.color.setHex(s>.6?VE:$u),this.isTriggered&&(this.timer-=e,this.updateCountdownText(Math.ceil(this.timer)),this.timer<=0)){this.explodeMine(),mt.remove(this.mesh),this.isDead=!0;return}if(kt==="PLAYING"&&!Pt&&!this.isTriggered)for(const o of $e){if(o.isRespawning)continue;const a=o.group.position.x-this.mesh.position.x,l=o.group.position.z-this.mesh.position.z;if(Math.sqrt(a*a+l*l)<te*4){this.isTriggered=!0,this.textSprite.visible=!0;break}}}}const kl=1.6;class _l{constructor(e,t){this.radius=te*.48,this.colRadius=te*.4,this.mesh=new gt(new wl(this.radius*kl,12,12),new Lt({color:15397119})),this.mesh.position.set(e,Rt/2,t),this.mesh.castShadow=!0,mt.add(this.mesh);const n=7,s=Math.random()*Math.PI*2;this.vx=Math.cos(s)*n,this.vz=Math.sin(s)*n}update(e){let t=!1,n=this.mesh.position.x+this.vx*e,s=Math.floor((n+Math.sign(this.vx)*this.colRadius+De/2)/te),r=Math.floor((this.mesh.position.z+De/2)/te),o=we[r]&&we[r][s]!==void 0?we[r][s]:1;Ht(o)||o===Bn?(n=this.vx>0?s*te-De/2-this.colRadius-.001:(s+1)*te-De/2+this.colRadius+.001,this.vx*=-1,t=!0):_i(o)&&$i($e[vi(o)],"reasonEnemyTrail"),this.mesh.position.x=n;let a=this.mesh.position.z+this.vz*e,l=Math.floor((this.mesh.position.x+De/2)/te),c=Math.floor((a+Math.sign(this.vz)*this.colRadius+De/2)/te),u=we[c]&&we[c][l]!==void 0?we[c][l]:1;Ht(u)||u===Bn?(a=this.vz>0?c*te-De/2-this.colRadius-.001:(c+1)*te-De/2+this.colRadius+.001,this.vz*=-1,t=!0):_i(u)&&$i($e[vi(u)],"reasonEnemyTrail"),this.mesh.position.z=a,t&&Se.playSFX("bounce"),ta(this.mesh.position,this.radius+te*.5,"reasonEnemyHit")}}class Ku{constructor(e,t){this.radius=te*.72,this.colRadius=te*.4,this.mesh=new gt(new Tl(this.radius*kl,0),new Lt({color:12865023})),this.mesh.position.set(e,Rt/2,t),this.mesh.castShadow=!0,mt.add(this.mesh);const n=5,s=Math.random()*Math.PI*2;this.vx=Math.cos(s)*n,this.vz=Math.sin(s)*n}eat(e,t){let n=!1;const s=2;for(let r=-s;r<=s;r++)for(let o=-s;o<=s;o++){const a=e+o,l=t+r;if(a>0&&a<qe-1&&l>0&&l<qe-1&&Ht(we[l][a])){we[l][a]=Fn;const c=un(a,l);tt.scale.set(0,0,0),tt.updateMatrix(),dt.setMatrixAt(c,tt.matrix),n=!0}}n&&(dt.instanceMatrix.needsUpdate=!0,Gl())}update(e){let t=!1,n=this.mesh.position.x+this.vx*e,s=Math.floor((n+Math.sign(this.vx)*this.colRadius+De/2)/te),r=Math.floor((this.mesh.position.z+De/2)/te),o=we[r]&&we[r][s]!==void 0?we[r][s]:1;Ht(o)||o===Bn?(this.eat(s,r),n=this.vx>0?s*te-De/2-this.colRadius-.001:(s+1)*te-De/2+this.colRadius+.001,this.vx*=-1,t=!0):_i(o)&&$i($e[vi(o)],"reasonEaterTrail"),this.mesh.position.x=n;let a=this.mesh.position.z+this.vz*e,l=Math.floor((this.mesh.position.x+De/2)/te),c=Math.floor((a+Math.sign(this.vz)*this.colRadius+De/2)/te),u=we[c]&&we[c][l]!==void 0?we[c][l]:1;Ht(u)||u===Bn?(this.eat(l,c),a=this.vz>0?c*te-De/2-this.colRadius-.001:(c+1)*te-De/2+this.colRadius+.001,this.vz*=-1,t=!0):_i(u)&&$i($e[vi(u)],"reasonEaterTrail"),this.mesh.position.z=a,this.mesh.rotation.x+=4*e,this.mesh.rotation.y+=4*e,t&&Se.playSFX("bounce"),ta(this.mesh.position,this.radius+te*.5,"reasonEaterHit")}}class qm{constructor(e,t,n){this.radius=te*.3,this.colRadius=te*.25,this.mesh=new gt(new wl(this.radius*kl,8,8),new Lt({color:16756768})),this.mesh.position.set(e,Rt/2,t),mt.add(this.mesh);const s=12;this.vx=Math.cos(n)*s,this.vz=Math.sin(n)*s,this.isDead=!1}eat(e,t){let n=!1;const s=5;for(let r=-s;r<=s;r++)for(let o=-s;o<=s;o++)if(o*o+r*r<=s*s){const a=e+o,l=t+r;if(a>0&&a<qe-1&&l>0&&l<qe-1&&Ht(we[l][a])){we[l][a]=Fn;const c=un(a,l);tt.scale.set(0,0,0),tt.updateMatrix(),dt.setMatrixAt(c,tt.matrix),n=!0}}n&&(dt.instanceMatrix.needsUpdate=!0,Gl())}update(e){if(this.isDead)return;let t=this.mesh.position.x+this.vx*e,n=this.mesh.position.z+this.vz*e,s=Math.floor((t+Math.sign(this.vx)*this.colRadius+De/2)/te),r=Math.floor((this.mesh.position.z+De/2)/te),o=Math.floor((n+Math.sign(this.vz)*this.colRadius+De/2)/te),a=Math.floor((this.mesh.position.x+De/2)/te),l=!1;if(s<=0||s>=qe-1||o<=0||o>=qe-1)l=!0;else if(we[r]&&(Ht(we[r][s])||we[r][s]===Bn))this.eat(s,r),l=!0;else if(we[o]&&(Ht(we[o][a])||we[o][a]===Bn))this.eat(a,o),l=!0;else{const c=we[r]?we[r][s]:void 0,u=we[o]?we[o][a]:void 0,h=_i(c)?c:_i(u)?u:null;h!==null&&($i($e[vi(h)],"reasonFireballTrail"),l=!0)}if(l){er(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z,45,[Gh,kh]),mt.remove(this.mesh),this.isDead=!0;return}this.mesh.position.x=t,this.mesh.position.z=n,ta(this.mesh.position,this.radius+te*.5,"reasonFireballHit")&&(mt.remove(this.mesh),this.isDead=!0)}}class Ym{constructor(e,t){this.radius=te*1,this.colRadius=te*.4;const n=new jo(this.radius*kl,0);this.mesh=new gt(n,new Lt({color:1710628})),this.mesh.add(new $s(new Ks(n),new Yi({color:16738816}))),this.mesh.position.set(e,Rt/2,t),this.mesh.castShadow=!0,mt.add(this.mesh);const s=2.5,r=Math.random()*Math.PI*2;this.vx=Math.cos(r)*s,this.vz=Math.sin(r)*s,this.fireTimer=0}update(e){let t=!1;this.fireTimer+=e,this.fireTimer>=5&&(fs.push(new qm(this.mesh.position.x,this.mesh.position.z,Math.random()*Math.PI*2)),this.fireTimer=0);let n=this.mesh.position.x+this.vx*e,s=Math.floor((n+Math.sign(this.vx)*this.colRadius+De/2)/te),r=Math.floor((this.mesh.position.z+De/2)/te),o=we[r]&&we[r][s]!==void 0?we[r][s]:1;Ht(o)||o===Bn?(n=this.vx>0?s*te-De/2-this.colRadius-.001:(s+1)*te-De/2+this.colRadius+.001,this.vx*=-1,t=!0):_i(o)&&$i($e[vi(o)],"reasonBomberTrail"),this.mesh.position.x=n;let a=this.mesh.position.z+this.vz*e,l=Math.floor((this.mesh.position.x+De/2)/te),c=Math.floor((a+Math.sign(this.vz)*this.colRadius+De/2)/te),u=we[c]&&we[c][l]!==void 0?we[c][l]:1;Ht(u)||u===Bn?(a=this.vz>0?c*te-De/2-this.colRadius-.001:(c+1)*te-De/2+this.colRadius+.001,this.vz*=-1,t=!0):_i(u)&&$i($e[vi(u)],"reasonBomberTrail"),this.mesh.position.z=a,this.mesh.rotation.x+=4*e,this.mesh.rotation.y+=4*e,t&&Se.playSFX("bounce"),ta(this.mesh.position,this.radius+te*.5,"reasonBomberHit")}}const Us=te*4,eT=1.15,tT=.5,$f=10,Kf=12,Zf=1.6,Rr=4,Vc=16722474,Jf=16742938,Os=10312703,nT=6,iT=.7,sT=.5,gn=[];let ft=null;const qs=()=>gn.reduce((i,e)=>i+(e.active?1:0),0);class rT{constructor(e,t){this.gridX=e,this.gridZ=t,this.active=!0,this.checkTimer=0,this.pulsePhase=Math.random()*Math.PI*2;const n=e*te-De/2+te/2,s=t*te-De/2+te/2;this.mesh=new hn,this.mesh.position.set(n,0,s);const r=new Wo(te*.9,te*1.4,Rt*1.8,6),o=new gt(r,new Lt({color:1315108}));o.position.y=Rt*.9,this.edgeMaterial=new Yi({color:Os}),o.add(new $s(new Ks(r),this.edgeMaterial)),this.mesh.add(o),this.coreMaterial=new Lt({color:Os,transparent:!0,opacity:.9}),this.core=new gt(new jo(te*.8,0),this.coreMaterial),this.core.position.y=Rt*2.15,this.mesh.add(this.core);const a=new Nt;a.setAttribute("position",new Zt(new Float32Array(6),3)),this.beamMaterial=new Yi({color:Os,transparent:!0,opacity:.5}),this.beam=new bl(a,this.beamMaterial),this.beam.frustumCulled=!1,mt.add(this.mesh,this.beam)}capturedRatio(){let e=0,t=0;const n=nT;for(let s=-n;s<=n;s++)for(let r=-n;r<=n;r++){if(r*r+s*s>n*n)continue;const o=this.gridX+r,a=this.gridZ+s;o<=0||o>=qe-1||a<=0||a>=qe-1||(e++,Ht(we[a][o])&&t++)}return e===0?0:t/e}deactivate(){this.active=!1,this.coreMaterial.color.setHex(3814736),this.edgeMaterial.color.setHex(3814736),this.beam.visible=!1,er(this.mesh.position.x,Rt*2,this.mesh.position.z,30,[Os,16777215]),vs();const e=gn.length-qs(),t=e===gn.length;Se.playSFX(t?"disarm":"power"),Uf(`${e}/${gn.length}`,t?U.success:xm,_s.wrap),t&&(fl(Ee("bossDisarmed"),U.success),co())}reactivate(){const e=qs()===0;this.active=!0,this.coreMaterial.color.setHex(Os),this.edgeMaterial.color.setHex(Os),this.beam.visible=!0,Se.playSFX("alarm"),er(this.mesh.position.x,Rt*2,this.mesh.position.z,18,[Os,16722474]),vs();const t=gn.length-qs();Uf(`${t}/${gn.length}`,U.danger,_s.wrap),e&&fl(Ee("bossRecharging"),U.danger)}update(e){if(this.pulsePhase+=e*3,this.checkTimer+=e,this.checkTimer>.3){this.checkTimer=0;const n=this.capturedRatio();if(this.active&&n>=iT){this.deactivate();return}!this.active&&n<sT&&this.reactivate()}if(!this.active)return;const t=Math.sin(this.pulsePhase)*.5+.5;if(this.core.rotation.y+=e*2,this.core.scale.setScalar(.85+t*.3),this.coreMaterial.opacity=.6+t*.4,ft&&!ft.isDead){const n=this.beam.geometry.attributes.position;n.setXYZ(0,this.mesh.position.x,Rt*2.15,this.mesh.position.z),n.setXYZ(1,ft.mesh.position.x,ft.mesh.position.y,ft.mesh.position.z),n.needsUpdate=!0,this.beamMaterial.opacity=.25+t*.35}else this.beam.visible=!1}remove(){mt.remove(this.mesh),mt.remove(this.beam)}}class oT{constructor(e,t){this.radius=Us,this.fireTimer=0,this.pulsePhase=Math.random()*Math.PI*2,this.isDead=!1,this.mesh=new hn,this.mesh.position.set(e,Rt*.9,t);const n=new Tl(Us,0);this.core=new gt(n,new Lt({color:1050124})),this.core.add(new $s(new Ks(n),new Yi({color:Vc}))),this.mesh.add(this.core);const s=new jo(Us*1.5,0);this.cage=new $s(new Ks(s),new Yi({color:Jf,transparent:!0,opacity:.7})),this.mesh.add(this.cage),this.ringMaterial=new Lt({color:Vc,transparent:!0,opacity:.35,blending:xs,depthWrite:!1,side:cn}),this.ring=new gt(new Js(Us*.9,Us*1.3,24),this.ringMaterial),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=Rt*.15,this.mesh.add(this.ring),this.chargeMaterial=new Lt({color:16773328,transparent:!0,opacity:0,blending:xs,depthWrite:!1,side:cn}),this.chargeRing=new gt(new Js(Us*.95,Us*1.15,32),this.chargeMaterial),this.chargeRing.rotation.x=-Math.PI/2,this.chargeRing.position.y=Rt*.2,this.chargeRing.visible=!1,this.mesh.add(this.chargeRing),this.isCharging=!1,mt.add(this.mesh)}nearestPlayer(){let e=null,t=1/0;for(const n of $e){if(n.isRespawning)continue;const s=Math.hypot(n.group.position.x-this.mesh.position.x,n.group.position.z-this.mesh.position.z);s<t&&(t=s,e=n)}return e}crush(){const e=Math.floor((this.mesh.position.x+De/2)/te),t=Math.floor((this.mesh.position.z+De/2)/te);let n=0;for(let s=-Rr;s<=Rr;s++)for(let r=-Rr;r<=Rr;r++){if(r*r+s*s>Rr*Rr)continue;const o=e+r,a=t+s;if(o<=0||o>=qe-1||a<=0||a>=qe-1)continue;const l=we[a][o];if(_i(l)){$i($e[vi(l)],"reasonBossTrail");continue}Ht(l)&&(we[a][o]=Fn,tt.scale.set(0,0,0),tt.updateMatrix(),dt.setMatrixAt(un(o,a),tt.matrix),n++)}if(n>0&&(dt.instanceMatrix.needsUpdate=!0,Gl(),Math.random()<.4)){const s=Math.random()*Math.PI*2;ia(this.mesh.position.x,Rt,this.mesh.position.z,Math.cos(s)*3,Math.random()*4+2,Math.sin(s)*3,.4,Jf)}return n}fire(){if(!(qs()<=0)){Se.playSFX("explosion");for(let e=0;e<Kf;e++){const t=e/Kf*Math.PI*2;fs.push(new qm(this.mesh.position.x+Math.cos(t)*this.radius,this.mesh.position.z+Math.sin(t)*this.radius,t))}qn=.45}}explode(){if(!this.isDead){this.isDead=!0,Se.playSFX("explosion");for(let e=0;e<4;e++)er(this.mesh.position.x,this.mesh.position.y+e*.4,this.mesh.position.z,70,[16777215,Gh,Vc]);mt.remove(this.mesh),qn=1.4,hE(900,4.5)}}update(e){if(this.isDead)return;const t=qs()>0,n=$f-this.fireTimer,s=t&&n<=Zf;t?(this.fireTimer+=e,this.fireTimer>=$f&&(this.fire(),this.fireTimer=0)):this.fireTimer=0;const o=this.crush()>0?tT:eT,a=this.nearestPlayer();if(a&&!s){const c=a.group.position.x-this.mesh.position.x,u=a.group.position.z-this.mesh.position.z,h=Math.hypot(c,u)||1,d=De/2-te*2;this.mesh.position.x=Sn.clamp(this.mesh.position.x+c/h*o*e,-d,d),this.mesh.position.z=Sn.clamp(this.mesh.position.z+u/h*o*e,-d,d)}this.core.rotation.y+=.35*e,this.core.rotation.x+=.18*e,this.cage.rotation.y-=.55*e,this.pulsePhase+=e*2.4;const l=Math.sin(this.pulsePhase)*.5+.5;if(this.ringMaterial.opacity=t?.2+l*.35:.07,this.ring.scale.setScalar(t?1+l*.08:1),s){const c=1-n/Zf;this.isCharging||(this.isCharging=!0,Se.playSFX("charge"));const u=.35*c;this.core.position.set((Math.random()-.5)*u,(Math.random()-.5)*u,(Math.random()-.5)*u),this.core.scale.setScalar(1+c*.3),this.ringMaterial.opacity=.85;const h=c*3%1;this.chargeRing.visible=!0,this.chargeRing.scale.setScalar(.6+h*3.4),this.chargeMaterial.opacity=(1-h)*(.25+c*.5),qn=Math.max(qn,.05+c*.1)}else this.isCharging&&(this.isCharging=!1,this.core.scale.setScalar(1),this.chargeRing.visible=!1),this.core.position.lengthSq()>0&&this.core.position.set(0,0,0);ta(this.mesh.position,this.radius*.8,"reasonBossHit")}}const Qf=3.2,aT=.24,lT=5,$m=new ys(1,.06,.06);$m.translate(.5,0,0);const cT=new Lt({color:16777215,transparent:!0,opacity:.8,blending:xs,depthWrite:!1}),uT=new L(1,0,0);let On=null;function hT(){if(!ft||ft.isDead||On)return;Pt=!0,ms=null,Ts(),Se.stopEngine(),Se.stopGameMusic(),$e.forEach(e=>{e.velocityX=0,e.velocityZ=0,e.lastGridX=-1,e.lastGridZ=-1});const i=new hn;i.position.copy(ft.mesh.position),mt.add(i),On={time:0,nextRay:.4,rays:[],group:i}}function dT(i){const e=On;e.time+=i;const t=Math.min(e.time/Qf,1);if(ft&&!ft.isDead){const s=.08+t*.5;ft.core.position.set((Math.random()-.5)*s,(Math.random()-.5)*s,(Math.random()-.5)*s),ft.cage.rotation.y-=(.6+t*7)*i,ft.ringMaterial.opacity=.3+t*.6,ft.ring.scale.setScalar(1+t*.6)}if(e.nextRay-=i,e.nextRay<=0){e.nextRay=aT*(1-t*.65);const s=new gt($m,cT),r=new L(Math.random()*2-1,Math.random()*1.4-.3,Math.random()*2-1).normalize();s.quaternion.setFromUnitVectors(uT,r),s.scale.set(.01,1,1),e.group.add(s),e.rays.push(s),Se.playSFX("ray")}const n=1+t*3;for(const s of e.rays)s.scale.x=Math.min(s.scale.x+lT*i,9),s.scale.y=n,s.scale.z=n;qn=.1+t*.25,e.time>=Qf&&fT()}function fT(){const i=On;On=null,i.rays.forEach(e=>i.group.remove(e)),mt.remove(i.group),ft&&ft.explode(),setTimeout(()=>{Pt=!1,ME()},1200)}const Dn=[],fs=[],Hr=[];function Km(){Dn.forEach(i=>mt.remove(i.mesh)),Dn.length=0,gn.forEach(i=>i.remove()),gn.length=0,On&&(mt.remove(On.group),On=null),ft&&mt.remove(ft.mesh),ft=null,fs.forEach(i=>mt.remove(i.mesh)),fs.length=0,ci.forEach(i=>mt.remove(i.mesh)),ci.length=0,Oi.forEach(i=>mt.remove(i.mesh)),Oi.length=0,Object.values(jm).forEach(i=>{i.timer=0,i.delay=xl()});for(let i=0;i<zl;i++)na[i].active&&Hm(i);An.instanceMatrix.needsUpdate=!0,Hr.forEach(i=>rn.remove(i.mesh)),Hr.length=0}const vl=De/2-te/2;function ps(){for(let i=0;i<80;i++){const e=(Math.random()-.5)*15,t=(Math.random()-.5)*15,n=Math.floor((e+De/2)/te),s=Math.floor((t+De/2)/te);let r=!0;for(let o=-2;o<=2&&r;o++)for(let a=-2;a<=2;a++){const l=we[s+o];if(!l||l[n+a]!==Fn){r=!1;break}}if(r)return{x:e,z:t}}return{x:0,z:0}}function Xh(){jt=!1,Pt=!1,Hi=!1,tl=0,ms=null,wn=0,km(),Km(),zm(),ki.group.visible=!1,mt.visible=!0,kn.style.display="none",Ti.style.display="none",Ms.style.display="none",Kt.style.display="none",Kt.style.backgroundColor=U.overlay,tr.style.display="flex",ni.style.display="block",Zi.style.display="flex",wm(),setTimeout(()=>Qn.refresh(),0)}function Wh(){Nl(),Se.startEngine(),at?Se.startChallengeMusic():mn&&mn.boss?Se.startBossMusic():Se.startGameMusic(),kt="PLAYING",Ts(),co()}const pT=[[30,30],[70,30],[30,70],[70,70]];function yl(i){zn="campaign",at=null,sn=i,mn=Wb(i),$n=mn.time,Ws=mn.target,Il=mn.maxMines,Xh();const e=ml(0,{keys:eo.wasd,colors:pl.campaign[0],startX:0,startZ:vl,labelKey:"playerOne"});DE(mn.pillars,e);for(let t=0;t<mn.bouncers;t++){const n=ps();Dn.push(new _l(n.x,n.z))}for(let t=0;t<mn.eaters;t++){const n=ps();Dn.push(new Ku(n.x,n.z))}for(let t=0;t<mn.bombers;t++){const n=ps();Dn.push(new Ym(n.x,n.z))}mn.boss&&(pT.forEach(([t,n])=>gn.push(new rT(t,n))),ft=new oT(0,0)),bs.style.display="none",Ss.style.display="flex",_s.wrap.style.display=mn.boss?"flex":"none",vm(),Wh()}function Zm(i){const e=qb(i);if(!e)return;zn="campaign",at=e,sn=0,mn=e,dl=0,$n=e.time,Ws=e.goal==="area"?e.target:e.goal==="exact"?e.exact:101,Il=e.maxMines,Xh(),ml(0,{keys:eo.wasd,colors:pl.campaign[0],startX:0,startZ:vl,labelKey:"playerOne"});for(let n=0;n<e.bouncers;n++){const s=ps();Dn.push(new _l(s.x,s.z))}for(let n=0;n<e.eaters;n++){const s=ps();Dn.push(new Ku(s.x,s.z))}for(let n=0;n<e.bombers;n++){const s=ps();Dn.push(new Ym(s.x,s.z))}const t=(n,s)=>{for(let r=0;r<(s||0);r++){const o=ps(),a=new n(o.x,o.z);a.mesh.visible=!1,Dn.push(a)}};t(_l,e.invisibleBouncers),t(Ku,e.invisibleEaters),bs.style.display="none",Ss.style.display="flex",_s.wrap.style.display="none",vm(),Wh()}const mT=180,gT=4,xT=3;function Jm(){zn="duel",at=null,sn=0,mn=null,$n=mT,Ws=Qm,Il=gT,Xh(),ml(0,{keys:eo.wasd,colors:pl.duel[0],startX:0,startZ:vl,labelKey:"playerOne"}),ml(1,{keys:eo.arrows,colors:pl.duel[1],startX:0,startZ:-vl,labelKey:"playerTwo"});for(let i=0;i<xT;i++){const e=ps();Dn.push(new _l(e.x,e.z))}Ss.style.display="none",bs.style.display="flex",Mm(),Wh()}const Qm=50;function co(){if(Pt||jt||kt!=="PLAYING")return;const i=[0,0];for(let e=1;e<qe-1;e++)for(let t=1;t<qe-1;t++){const n=we[e][t];n===1?i[0]++:n===3&&i[1]++}if($e.forEach(e=>{e.percentage=Math.round(i[e.index]/bE*100)}),wn=$e[0]?$e[0].percentage:0,vs(),!(jt||Pt)){if(zn==="duel"){const e=$e.find(t=>t.percentage>Qm);e&&eg(e,"duelByArea");return}if(at&&at.goal==="exact"){wn===at.exact?Zu():wn>at.exact&&vT();return}at&&at.goal==="mines"||wn>=Ws&&(ft&&!ft.isDead&&qs()>0?yT():Zu())}}function _T(){for(let i=1;i<qe-1;i++)for(let e=1;e<qe-1;e++)Ht(we[i][e])&&(we[i][e]=Fn,tt.scale.set(0,0,0),tt.updateMatrix(),dt.setMatrixAt(un(e,i),tt.matrix));dt.instanceMatrix.needsUpdate=!0,Xi.length=0,gi.length=0}function vT(){const i=$e[0];!i||i.isRespawning||(_T(),wn=0,i.percentage=0,Wu=-1,qn=.6,fl(Ee("reasonOvershoot"),U.danger),sr(i,Ee("reasonOvershoot")))}let ep=0;function yT(){const i=performance.now();i-ep<6e3||(ep=i,fl(Ee("bossNeedGenerators"),U.danger))}const Gl=co;function Zu(){if(ft&&!ft.isDead){hT();return}Pt=!0,Ts(),Se.stopEngine(),Se.playSFX("victory");const i=$e[0];i.velocityX=0,i.velocityZ=0,i.lastGridX=-1,i.lastGridZ=-1,ms=i,Hh(i.group.position.x,i.group.position.y,i.group.position.z);const e=at&&at.goal==="exact";e&&dE(`${at.exact}%`,bn,Zo.wrap),setTimeout(()=>{Pt=!1,Nm(!0)},e?2800:2e3)}function eg(i,e){jt||Pt||(Pt=!0,Se.stopEngine(),Se.playSFX("victory"),$e.forEach(t=>{t.velocityX=0,t.velocityZ=0,t.lastGridX=-1,t.lastGridZ=-1}),ms=i,Hh(i.group.position.x,i.group.position.y,i.group.position.z),setTimeout(()=>{Pt=!1,Um(i,e)},2e3))}function $i(i,e){if(!(!i||i.isRespawning)&&!(jt||Pt||kt!=="PLAYING")&&i.trail.length!==0&&!i.collapsing){i.collapsing=!0,i.collapseProgress=0,i.collapseReason=e,Se.playSFX("collapse");for(const t of i.trail)dt.setColorAt(un(t.x,t.z),Bm);dt.instanceColor&&(dt.instanceColor.needsUpdate=!0)}}function MT(i,e){const t=un(e.x,e.z),n=gi.findIndex(o=>o.index===t);n!==-1&&gi.splice(n,1);const s=e.x*te-De/2+te/2,r=e.z*te-De/2+te/2;for(let o=0;o<2;o++){const a=Math.random()*Math.PI*2;ia(s,Rt*.9,r,Math.cos(a)*2.4,Math.random()*4+2.5,Math.sin(a)*2.4,.35,o===0?16777215:i.colorTrail.getHex())}if(e.prev===Fn)we[e.z][e.x]=Fn,Xi.push({index:t,x:s,z:r,y:Rt/2});else{const o=$e[Fm(e.prev)];ir(e.x,e.z,o?o.colorCaptured:Fh(),e.prev,!1)}}function ST(i,e){let t=0;for(;t<e&&i.trail.length>0;)MT(i,i.trail.shift()),i.trailBroken=!0,t++;t>0&&(dt.instanceMatrix.needsUpdate=!0),i.trail.length===0&&i.collapsing&&(i.collapsing=!1,sr(i,Ee(i.collapseReason||"reasonEnemyTrail")))}function bT(i,e,t){if(!i)return;const n=i.trail.findIndex(s=>s.x===e&&s.z===t);n!==-1&&(i.trail.splice(n,1),i.trailBroken=!0,we[t][e]=Fn,i.trail.length===0&&i.collapsing&&(i.collapsing=!1,sr(i,Ee(i.collapseReason||"reasonRivalTrail"))))}function ET(i,e){if(!i.collapsing)return;i.collapseProgress+=CE*e;const t=Math.floor(i.collapseProgress);t<=0||(i.collapseProgress-=t,ST(i,t))}function tg(i){for(const e of i.trail){const t=un(e.x,e.z),n=gi.findIndex(s=>s.index===t);if(n!==-1&&gi.splice(n,1),e.prev===Fn)we[e.z][e.x]=Fn,tt.scale.set(0,0,0),tt.updateMatrix(),dt.setMatrixAt(t,tt.matrix);else{const s=$e[Fm(e.prev)];ir(e.x,e.z,s?s.colorCaptured:Fh(),e.prev,!1)}}dt.instanceMatrix.needsUpdate=!0,i.trail.length=0,i.lastTrailDir=null,i.collapsing=!1,i.collapseProgress=0,i.trailBroken=!1}function TT(i){const e=i.trail.slice(),t=Bl(i.index);for(const s of e)ir(s.x,s.z,i.colorCaptured,t,!1);const n=i.trailBroken;if(i.trail.length=0,i.lastTrailDir=null,i.collapsing=!1,i.collapseProgress=0,i.trailBroken=!1,n){e.length>0&&Se.playSFX("capture"),co();return}RT(i,e)}function wT(i){const e=Om(i.index);i.trail.length!==0&&(i.trail.every(t=>we[t.z][t.x]===e)||(i.trail=i.trail.filter(t=>we[t.z][t.x]===e),tg(i),i.lastGridX=-1,i.lastGridZ=-1))}function sr(i,e,t=!1){if(jt||Pt||kt!=="PLAYING"||!i||i.isRespawning)return;t?i.lives=0:i.lives--,Se.playSFX("death"),Se.stopEngine();const n=i.velocityX,s=i.velocityZ,r=i.group.position;if(er(r.x,r.y,r.z),i.model){const o=(a,l=!1)=>{if(!a)return;const c=a.clone(),u=[];if(c.traverse(x=>{x.userData.isRotorWake&&u.push(x)}),u.forEach(x=>x.removeFromParent()),l){const x=c.getObjectByName("Rotor_one"),m=c.getObjectByName("Rotor_two");x&&x.removeFromParent(),m&&m.removeFromParent()}const h=new L;a.getWorldPosition(h),c.position.copy(h);const d=new L;a.getWorldScale(d),c.scale.copy(d);const f=new yi;a.getWorldQuaternion(f),c.quaternion.copy(f);const p=8;rn.add(c),Hr.push({mesh:c,vx:n*.6+(Math.random()-.5)*p,vy:Math.random()*15+10,vz:s*.6+(Math.random()-.5)*p,rx:(Math.random()-.5)*15,ry:(Math.random()-.5)*15,rz:(Math.random()-.5)*15,life:2})};o(i.rotor1),o(i.rotor2),o(i.model,!0)}qn=.5,tg(i),co(),i.isRespawning=!0,i.group.visible=!1,i.velocityX=0,i.velocityZ=0,i.lastGridX=-1,i.lastGridZ=-1,Yu=zh,setTimeout(()=>{if(!(kt!=="PLAYING"&&!jt)){if(i.lives<=0){if(zn==="duel"){const o=ju(i)[0];o&&Um(o,"duelByLives")}else Nm(!1,t?e:e+Ee("livesOut"));return}NE(i),Se.startEngine()}},1e3)}function AT(i,e,t,n){const s=[];let r=Math.abs(t-i),o=i<t?1:-1,a=Math.abs(n-e),l=e<n?1:-1,c=r-a;for(;s.push({x:i,z:e}),!(i===t&&e===n);){let u=2*c;u>-a&&(c-=a,i+=o),u<r&&(c+=r,e+=l)}return s}function RT(i,e){const t=Bl(i.index);pn.fill(-1),zc.fill(0);for(const a of e)zc[un(a.x,a.z)]=1;const n=a=>a===t||a===Bn;let s=0;for(let a=0;a<qe;a++)for(let l=0;l<qe;l++){const c=un(l,a);if(n(we[a][l])||pn[c]!==-1)continue;const u=s++;Eo[u]=0,kc[u]=0;let h=0,d=0;for(Ar[d++]=c,pn[c]=u;h<d;){const f=Ar[h++],p=f%qe,x=(f-p)/qe;if(!Eo[u])for(let m=-1;m<=1&&!Eo[u];m++){const g=x+m;if(!(g<0||g>=qe))for(let y=-1;y<=1;y++){const S=p+y;if(!(S<0||S>=qe)&&zc[g*qe+S]){Eo[u]=1;break}}}x+1<qe&&!n(we[x+1][p])&&pn[f+qe]===-1&&(pn[f+qe]=u,Ar[d++]=f+qe),x-1>=0&&!n(we[x-1][p])&&pn[f-qe]===-1&&(pn[f-qe]=u,Ar[d++]=f-qe),p+1<qe&&!n(we[x][p+1])&&pn[f+1]===-1&&(pn[f+1]=u,Ar[d++]=f+1),p-1>=0&&!n(we[x][p-1])&&pn[f-1]===-1&&(pn[f-1]=u,Ar[d++]=f-1)}}const r=[];for(const a of Dn)r.push(a.mesh.position);for(const a of ju(i))r.push(a.group.position);for(const a of r){const l=Math.floor((a.x+De/2)/te),c=Math.floor((a.z+De/2)/te);if(l<0||l>=qe||c<0||c>=qe)continue;let u=pn[un(l,c)];for(let h=1;u===-1&&h<=2;h++)for(let d=-h;d<=h&&u===-1;d++)for(let f=-h;f<=h;f++){const p=l+f,x=c+d;if(p<0||p>=qe||x<0||x>=qe)continue;const m=pn[un(p,x)];if(m!==-1){u=m;break}}u!==-1&&(kc[u]=1)}let o=0;for(let a=1;a<qe-1;a++)for(let l=1;l<qe-1;l++){const c=pn[un(l,a)];c!==-1&&Eo[c]&&!kc[c]&&(ir(l,a,i.colorCaptured,t,!0),o++)}o>0&&Se.playSFX("capture"),ju(i).forEach(wT),co()}function CT(i,e){if(i.isRespawning)return;const t=Bl(i.index),n=Om(i.index);let s=0,r=0;const o=i.keys;o&&(Nr.has(o.up)&&(r-=1),Nr.has(o.down)&&(r+=1),Nr.has(o.left)&&(s-=1),Nr.has(o.right)&&(s+=1)),ot&&i.index===0&&(Qs()==="dpad"?(zi.up&&(r-=1),zi.down&&(r+=1),zi.left&&(s-=1),zi.right&&(s+=1)):Qt.active&&(s=Qt.x,r=Qt.z)),i.trail.length>0?(i.lastTrailDir==="z"&&r<0&&(r=0),i.lastTrailDir==="-z"&&r>0&&(r=0),i.lastTrailDir==="x"&&s<0&&(s=0),i.lastTrailDir==="-x"&&s>0&&(s=0)):i.lastTrailDir=null;const a=Math.hypot(s,r);a>1&&(s/=a,r/=a);const l=s*Yu,c=r*Yu;i.velocityX=Sn.lerp(i.velocityX,l,Xf*e),i.velocityZ=Sn.lerp(i.velocityZ,c,Xf*e);const u=i.group.position;u.x+=i.velocityX*e,u.z+=i.velocityZ*e;const h=De/2-te/2;u.x=Sn.clamp(u.x,-h,h),u.z=Sn.clamp(u.z,-h,h);const d=Math.floor((u.x+De/2)/te),f=Math.floor((u.z+De/2)/te);if((d!==i.lastGridX||f!==i.lastGridZ)&&i.lastGridX!==-1){const p=AT(i.lastGridX,i.lastGridZ,d,f);for(const x of p){if(x.x===i.lastGridX&&x.z===i.lastGridZ)continue;let m=we[x.z][x.x];if(_i(m)&&vi(m)!==i.index){const w=$e[vi(m)];$i(w,"reasonRivalTrail"),bT(w,x.x,x.z),m=we[x.z][x.x]}if(m===n){sr(i,Ee("reasonCross"));return}if(m===t||m===Bn){i.trail.length>0&&TT(i);continue}const g=Ht(m)?m:Fn,y=i.trail.length>0?i.trail[i.trail.length-1]:{x:i.lastGridX,z:i.lastGridZ},S=x.x-y.x,M=x.z-y.z;S>0?i.lastTrailDir="x":S<0?i.lastTrailDir="-x":M>0?i.lastTrailDir="z":M<0&&(i.lastTrailDir="-z"),ir(x.x,x.z,i.collapsing?Bm:i.colorTrail,n,!0),i.trail.push({x:x.x,z:x.z,prev:g}),Se.playSFX("trail")}}i.lastGridX=d,i.lastGridZ=f}const Hc=new s_;new L(0,8,10);const hi=new L(0,0,0),PT=new L(0,4,15),LT=new L(0,4,0),Cr=new L,tp=new L;function IT(){const i=!!(at&&at.flipped);if(At.up.y<0!==i&&At.up.set(0,i?-1:1,0),On&&ft&&!ft.isDead){Cr.set(ft.mesh.position.x*.85,11,ft.mesh.position.z*.85+11),At.position.lerp(Cr,.03),hi.lerp(ft.mesh.position,.05),At.lookAt(hi);return}if(zn==="duel"&&$e.length===2){const l=$e[0].group.position,c=$e[1].group.position,u=(l.x+c.x)/2,h=(l.z+c.z)/2,d=5,f=Math.abs(l.x-c.x)+d,p=Math.abs(l.z-c.z)+d,x=Sn.degToRad(At.fov),m=2*Math.atan(Math.tan(x/2)*At.aspect),g=Sn.clamp(Math.max(p/2/Math.tan(x/2),f/2/Math.tan(m/2)),16,38);Cr.set(u*.8,g*.78,h*.8+g*.62),At.position.lerp(Cr,.05),tp.set(u,0,h),hi.lerp(tp,.08),At.lookAt(hi);return}const e=$e[0];if(!e)return;const t=.9,n=e.group.position,s=Sn.clamp(1/At.aspect,1,1.18),r=Sn.clamp((1/At.aspect-1)/1.2,0,1),o=Sn.lerp(10,15,r)*s,a=Sn.lerp(12,6,r)*s;Cr.set(n.x*t,o,n.z*t+a),At.position.lerp(Cr,.05),hi.lerp(n,.08),At.lookAt(hi)}Nl();Qn.setEnabled(Rn.crt!==!1);Se.unlock();Se.startMenuMusic();const ng=["pointerdown","mousedown","click","keydown","touchstart"];function ig(){Se.unlock(),(kt==="MENU"||kt==="LEVEL_SELECT")&&Se.startMenuMusic(),Se.isMenuMusicPlaying()&&ng.forEach(i=>window.removeEventListener(i,ig))}ng.forEach(i=>window.addEventListener(i,ig));function sg(){if(requestAnimationFrame(sg),document.hidden){Hc.getDelta();return}const i=Math.min(Hc.getDelta(),.1),e=Hc.getElapsedTime();if(wh.rotation.y+=.02*i,kt==="MENU"||kt==="LEVEL_SELECT"){if(ki.model){const s=e*.5,r=Math.sin(s*.8),o=ot?4:7;ki.model.position.set(r*o,3.4+Math.sin(s*1.1)*1.5,-4+Math.abs(r)*7),ki.model.rotation.set(Math.sin(s*1.5)*.2,-.5+Math.sin(s)*.3,Math.cos(s*1.2)*.2)}Hf(ki,i),At.position.lerp(PT,.05),hi.lerp(LT,.08),At.lookAt(hi),zr.render(rn,At);return}if(Hi||jt){zr.render(rn,At);return}if(!Pt&&Vf())if($n-=i,$n<=0)if($n=0,vs(),zn==="duel"){const s=$e.reduce((r,o)=>o.percentage>r.percentage?o:r);eg(s,"duelByTime")}else{const s=at&&at.goal==="mines"?Ee("reasonMinesLeft"):Ee("reasonTime");sr($e[0],s,!0)}else vs();if(!Pt&&Vf()){if(ci.length<Il&&(tl+=i,tl>4+Math.random()*2)){tl=0;const s=Yf(15,ci);s&&ci.push(new QE(s.x,s.z))}for(const s of["life","time"]){const r=jm[s];if(r.timer+=i,r.timer<=r.delay||Oi.some(a=>a.kind===s)||(r.timer=0,r.delay=xl(),s==="life"&&!$e.some(a=>a.lives<Wm)))continue;const o=Yf(10,[...ci,...Oi]);o&&Oi.push(new JE(s,o.x,o.z))}for(let s=Oi.length-1;s>=0;s--)Oi[s].update(i),Oi[s].isDead&&Oi.splice(s,1);for(let s=ci.length-1;s>=0;s--)ci[s].update(i),ci[s].isDead&&ci.splice(s,1)}let t=!1;for(let s=0;s<zl;s++){const r=na[s];if(r.active){if(t=!0,r.life-=i,r.life<=0){Hm(s);continue}r.x+=r.vx*i,r.y+=r.vy*i,r.z+=r.vz*i,r.vy-=25*i,r.rot+=10*i,jn.position.set(r.x,r.y,r.z),jn.rotation.set(r.rot,r.rot,0),jn.scale.setScalar(r.life),jn.updateMatrix(),An.setMatrixAt(s,jn.matrix)}}t&&(An.instanceMatrix.needsUpdate=!0);for(let s=Hr.length-1;s>=0;s--){const r=Hr[s];r.life-=i,r.life<=0?(rn.remove(r.mesh),Hr.splice(s,1)):(r.mesh.position.x+=r.vx*i,r.mesh.position.y+=r.vy*i,r.mesh.position.z+=r.vz*i,r.vy-=30*i,r.mesh.rotation.x+=r.rx*i,r.mesh.rotation.y+=r.ry*i,r.mesh.rotation.z+=r.rz*i)}if($e.forEach(s=>Hf(s,i)),Pt&&ms){const s=ms.group.position;s.y+=15*i,ms.group.rotation.y+=8*i,Uc-=i,Uc<=0&&(Hh(s.x+(Math.random()-.5)*15,s.y+(Math.random()-.5)*5,s.z+(Math.random()-.5)*15),Uc=.2)}if(Pt||$e.forEach((o,a)=>{o.model&&(o.model.position.x=0,o.model.position.z=0,o.model.position.y=Rt+.5+Math.sin(e*2+a*1.7)*.2,o.model.rotation.set(0,0,Math.sin(e*2*.5+a)*.05))}),!Pt){let s=0;for(const r of $e)ET(r,i),CT(r,i),s=Math.max(s,Math.hypot(r.velocityX,r.velocityZ));Se.setEngineSpeed(Math.min(s/zh,1))}if(!On){for(let s of Dn)s.update(i);for(const s of gn)s.update(i)}ft&&!ft.isDead&&!On&&ft.update(i),On&&dT(i);for(let s=fs.length-1;s>=0;s--)fs[s].update(i),fs[s].isDead&&fs.splice(s,1);let n=!1;for(let s=Xi.length-1;s>=0;s--){const r=Xi[s];r.y-=PE*i;const o=r.y<=-Rt;tt.position.set(r.x,o?0:r.y,r.z),tt.scale.set(o?0:1,o?0:1,o?0:1),tt.updateMatrix(),dt.setMatrixAt(r.index,tt.matrix),o&&Xi.splice(s,1),n=!0}for(let s=gi.length-1;s>=0;s--){const r=gi[s];r.currentY+=8*i,r.currentY>=r.targetY&&(r.currentY=r.targetY,gi.splice(s,1)),tt.position.set(r.x,r.currentY,r.z),tt.scale.set(1,1,1),tt.updateMatrix(),dt.setMatrixAt(r.index,tt.matrix),n=!0}if(n&&(dt.instanceMatrix.needsUpdate=!0),IT(),qn>0){qn-=i;const s=Math.max(qn,0)*1.5;At.position.x+=(Math.random()-.5)*s,At.position.y+=(Math.random()-.5)*s,At.position.z+=(Math.random()-.5)*s}zr.render(rn,At)}sg();

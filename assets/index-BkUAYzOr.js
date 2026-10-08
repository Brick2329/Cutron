(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ou="183",jm=0,Fh=1,Ym=2,Oa=1,Bf=2,fo=3,zi=0,pn=1,an=2,Ui=0,Sr=1,cs=2,Bh=3,zh=4,$m=5,ws=100,Km=101,Zm=102,Jm=103,Qm=104,eg=200,tg=201,ng=202,ig=203,Cc=204,Pc=205,sg=206,rg=207,og=208,ag=209,lg=210,cg=211,ug=212,hg=213,dg=214,Lc=0,Ic=1,Dc=2,Dr=3,Nc=4,Uc=5,Oc=6,Fc=7,Fu=0,fg=1,pg=2,ui=0,zf=1,kf=2,Vf=3,Gf=4,Hf=5,Xf=6,Wf=7,kh="attached",mg="detached",qf=300,Ns=301,Nr=302,Rl=303,Cl=304,rl=306,Ur=1e3,oi=1001,ja=1002,Ut=1003,jf=1004,po=1005,zt=1006,Fa=1007,Li=1008,Mn=1009,Yf=1010,$f=1011,So=1012,Bu=1013,di=1014,An=1015,ki=1016,zu=1017,ku=1018,bo=1020,Kf=35902,Zf=35899,Jf=1021,Qf=1022,Rn=1023,Vi=1026,Cs=1027,Vu=1028,Gu=1029,Or=1030,Hu=1031,Xu=1033,Ba=33776,za=33777,ka=33778,Va=33779,Bc=35840,zc=35841,kc=35842,Vc=35843,Gc=36196,Hc=37492,Xc=37496,Wc=37488,qc=37489,jc=37490,Yc=37491,$c=37808,Kc=37809,Zc=37810,Jc=37811,Qc=37812,eu=37813,tu=37814,nu=37815,iu=37816,su=37817,ru=37818,ou=37819,au=37820,lu=37821,cu=36492,uu=36494,hu=36495,du=36283,fu=36284,pu=36285,mu=36286,Eo=2300,To=2301,Pl=2302,Vh=2303,Gh=2400,Hh=2401,Xh=2402,gg=2500,xg=0,ep=1,gu=2,_g=3200,Wu=0,vg=1,ts="",Wt="srgb",cn="srgb-linear",Ya="linear",gt="srgb",Ks=7680,Wh=519,yg=512,Mg=513,Sg=514,qu=515,bg=516,Eg=517,ju=518,Tg=519,xu=35044,tp=35048,qh="300 es",ai=2e3,wo=2001;function wg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ag(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rg(){const i=Ao("canvas");return i.style.display="block",i}const jh={};function $a(...i){const e="THREE."+i.shift();console.log(e,...i)}function np(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function De(...i){i=np(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=np(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ka(...i){const e=i.join(" ");e in jh||(jh[e]=!0,De(...i))}function Cg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Pg={[Lc]:Ic,[Dc]:Oc,[Nc]:Fc,[Dr]:Uc,[Ic]:Lc,[Oc]:Dc,[Fc]:Nc,[Uc]:Dr};class Hr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yh=1234567;const br=Math.PI/180,Fr=180/Math.PI;function Cn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function Yu(i,e){return(i%e+e)%e}function Lg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ig(i,e,t){return i!==e?(t-i)/(e-i):0}function xo(i,e,t){return(1-t)*i+t*e}function Dg(i,e,t,n){return xo(i,e,1-Math.exp(-t*n))}function Ng(i,e=1){return e-Math.abs(Yu(i,e*2)-e)}function Ug(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Og(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Fg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Bg(i,e){return i+Math.random()*(e-i)}function zg(i){return i*(.5-Math.random())}function kg(i){i!==void 0&&(Yh=i);let e=Yh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vg(i){return i*br}function Gg(i){return i*Fr}function Hg(i){return(i&i-1)===0&&i!==0}function Xg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qg(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*u,a*c);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yn={DEG2RAD:br,RAD2DEG:Fr,generateUUID:Cn,clamp:it,euclideanModulo:Yu,mapLinear:Lg,inverseLerp:Ig,lerp:xo,damp:Dg,pingpong:Ng,smoothstep:Ug,smootherstep:Og,randInt:Fg,randFloat:Bg,randFloatSpread:zg,seededRandom:kg,degToRad:Vg,radToDeg:Gg,isPowerOfTwo:Hg,ceilPowerOfTwo:Xg,floorPowerOfTwo:Wg,setQuaternionFromProperEuler:qg,normalize:xt,denormalize:zn};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(h!==x||l!==d||c!==f||u!==p){let m=l*d+c*f+u*p+h*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){const y=Math.acos(m),S=Math.sin(y);g=Math.sin(g*y)/S,a=Math.sin(a*y)/S,l=l*g+d*a,c=c*g+f*a,u=u*g+p*a,h=h*g+x*a}else{l=l*g+d*a,c=c*g+f*a,u=u*g+p*a,h=h*g+x*a;const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($h.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ll.copy(this).projectOnVector(e),this.sub(Ll)}reflect(e){return this.sub(Ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ll=new L,$h=new mi;class Qe{constructor(e,t,n,s,r,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],y=s[1],S=s[4],M=s[7],w=s[2],A=s[5],P=s[8];return r[0]=o*x+a*y+l*w,r[3]=o*m+a*S+l*A,r[6]=o*g+a*M+l*P,r[1]=c*x+u*y+h*w,r[4]=c*m+u*S+h*A,r[7]=c*g+u*M+h*P,r[2]=d*x+f*y+p*w,r[5]=d*m+f*S+p*A,r[8]=d*g+f*M+p*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,p=t*h+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Il.makeScale(e,t)),this}rotate(e){return this.premultiply(Il.makeRotation(-e)),this}translate(e,t){return this.premultiply(Il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Il=new Qe,Kh=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jg(){const i={enabled:!0,workingColorSpace:cn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===gt&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(s.r=Er(s.r),s.g=Er(s.g),s.b=Er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ts?Ya:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ka("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ka("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cn]:{primaries:e,whitePoint:n,transfer:Ya,toXYZ:Kh,fromXYZ:Zh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:Kh,fromXYZ:Zh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),i}const ot=jg();function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zs;class Yg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zs===void 0&&(Zs=Ao("canvas")),Zs.width=e.width,Zs.height=e.height;const s=Zs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Zs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ao("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $g=0;class $u{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Cn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Dl(s[o].image)):r.push(Dl(s[o]))}else r=Dl(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Dl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let Kg=0;const Nl=new L;class kt extends Hr{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=oi,s=oi,r=zt,o=Li,a=Rn,l=Mn,c=kt.DEFAULT_ANISOTROPY,u=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=Cn(),this.name="",this.source=new $u(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nl).x}get height(){return this.source.getSize(Nl).y}get depth(){return this.source.getSize(Nl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ur:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ur:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=qf;kt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,n=0,s=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,M=(f+1)/2,w=(g+1)/2,A=(u+d)/4,P=(h+x)/4,_=(p+m)/4;return S>M&&S>w?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=A/n,r=P/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=_/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=P/r,s=_/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(h-x)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zg extends Hr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new kt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new $u(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends Zg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ip extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jg extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Je{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,p,x,m){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,p,x,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,p,x,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Js.setFromMatrixColumn(e,0).length(),r=1/Js.setFromMatrixColumn(e,1).length(),o=1/Js.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qg,e,e0)}lookAt(e,t,n){const s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Yi.crossVectors(n,xn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Yi.crossVectors(n,xn)),Yi.normalize(),Ko.crossVectors(xn,Yi),s[0]=Yi.x,s[4]=Ko.x,s[8]=xn.x,s[1]=Yi.y,s[5]=Ko.y,s[9]=xn.y,s[2]=Yi.z,s[6]=Ko.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],y=n[3],S=n[7],M=n[11],w=n[15],A=s[0],P=s[4],_=s[8],E=s[12],z=s[1],C=s[5],O=s[9],k=s[13],X=s[2],F=s[6],V=s[10],N=s[14],Q=s[3],K=s[7],fe=s[11],xe=s[15];return r[0]=o*A+a*z+l*X+c*Q,r[4]=o*P+a*C+l*F+c*K,r[8]=o*_+a*O+l*V+c*fe,r[12]=o*E+a*k+l*N+c*xe,r[1]=u*A+h*z+d*X+f*Q,r[5]=u*P+h*C+d*F+f*K,r[9]=u*_+h*O+d*V+f*fe,r[13]=u*E+h*k+d*N+f*xe,r[2]=p*A+x*z+m*X+g*Q,r[6]=p*P+x*C+m*F+g*K,r[10]=p*_+x*O+m*V+g*fe,r[14]=p*E+x*k+m*N+g*xe,r[3]=y*A+S*z+M*X+w*Q,r[7]=y*P+S*C+M*F+w*K,r[11]=y*_+S*O+M*V+w*fe,r[15]=y*E+S*k+M*N+w*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],y=l*f-c*d,S=a*f-c*h,M=a*d-l*h,w=o*f-c*u,A=o*d-l*u,P=o*h-a*u;return t*(x*y-m*S+g*M)-n*(p*y-m*w+g*A)+s*(p*S-x*w+g*P)-r*(p*M-x*A+m*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=t*a-n*o,S=t*l-s*o,M=t*c-r*o,w=n*l-s*a,A=n*c-r*a,P=s*c-r*l,_=u*x-h*p,E=u*m-d*p,z=u*g-f*p,C=h*m-d*x,O=h*g-f*x,k=d*g-f*m,X=y*k-S*O+M*C+w*z-A*E+P*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/X;return e[0]=(a*k-l*O+c*C)*F,e[1]=(s*O-n*k-r*C)*F,e[2]=(x*P-m*A+g*w)*F,e[3]=(d*A-h*P-f*w)*F,e[4]=(l*z-o*k-c*E)*F,e[5]=(t*k-s*z+r*E)*F,e[6]=(m*M-p*P-g*S)*F,e[7]=(u*P-d*M+f*S)*F,e[8]=(o*O-a*z+c*_)*F,e[9]=(n*z-t*O-r*_)*F,e[10]=(p*A-x*M+g*y)*F,e[11]=(h*M-u*A-f*y)*F,e[12]=(a*E-o*C-l*_)*F,e[13]=(t*C-n*E+s*_)*F,e[14]=(x*S-p*w-m*y)*F,e[15]=(u*w-h*S+d*y)*F,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,p=r*h,x=o*u,m=o*h,g=a*h,y=l*c,S=l*u,M=l*h,w=n.x,A=n.y,P=n.z;return s[0]=(1-(x+g))*w,s[1]=(f+M)*w,s[2]=(p-S)*w,s[3]=0,s[4]=(f-M)*A,s[5]=(1-(d+g))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(p+S)*P,s[9]=(m-y)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Js.set(s[0],s[1],s[2]).length();const a=Js.set(s[4],s[5],s[6]).length(),l=Js.set(s[8],s[9],s[10]).length();r<0&&(o=-o),On.copy(this);const c=1/o,u=1/a,h=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=h,On.elements[9]*=h,On.elements[10]*=h,t.setFromRotationMatrix(On),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=ai,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===ai)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===wo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ai,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===ai)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===wo)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Js=new L,On=new Je,Qg=new L(0,0,0),e0=new L(1,1,1),Yi=new L,Ko=new L,xn=new L,Jh=new Je,Qh=new mi;class Gn{constructor(e=0,t=0,n=0,s=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class sp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let t0=0;const ed=new L,Qs=new mi,bi=new Je,Zo=new L,Jr=new L,n0=new L,i0=new mi,td=new L(1,0,0),nd=new L(0,1,0),id=new L(0,0,1),sd={type:"added"},s0={type:"removed"},er={type:"childadded",child:null},Ul={type:"childremoved",child:null};class bt extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new L,t=new Gn,n=new mi,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new Qe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(td,e)}rotateY(e){return this.rotateOnAxis(nd,e)}rotateZ(e){return this.rotateOnAxis(id,e)}translateOnAxis(e,t){return ed.copy(e).applyQuaternion(this.quaternion),this.position.add(ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(td,e)}translateY(e){return this.translateOnAxis(nd,e)}translateZ(e){return this.translateOnAxis(id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zo.copy(e):Zo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Jr,Zo,this.up):bi.lookAt(Zo,Jr,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Qs.setFromRotationMatrix(bi),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sd),er.child=e,this.dispatchEvent(er),er.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(s0),Ul.child=e,this.dispatchEvent(Ul),Ul.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sd),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,n0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,i0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}bt.DEFAULT_UP=new L(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ln extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r0={type:"move"};class Ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(r0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function Fl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=Yu(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Fl(o,r,e+1/3),this.g=Fl(o,r,e),this.b=Fl(o,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=rp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return ot.workingToColorSpace(en.copy(this),e),Math.round(it(en.r*255,0,255))*65536+Math.round(it(en.g*255,0,255))*256+Math.round(it(en.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(en.copy(this),t);const n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Wt){ot.workingToColorSpace(en.copy(this),e);const t=en.r,n=en.g,s=en.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Jo);const n=xo($i.h,Jo.h,t),s=xo($i.s,Jo.s,t),r=xo($i.l,Jo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new ze;ze.NAMES=rp;class Ku{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new Ku(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class op extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Fn=new L,Ei=new L,Bl=new L,Ti=new L,tr=new L,nr=new L,rd=new L,zl=new L,kl=new L,Vl=new L,Gl=new At,Hl=new At,Xl=new At;class Sn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Fn.subVectors(e,t),s.cross(Fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Fn.subVectors(s,t),Ei.subVectors(n,t),Bl.subVectors(e,t);const o=Fn.dot(Fn),a=Fn.dot(Ei),l=Fn.dot(Bl),c=Ei.dot(Ei),u=Ei.dot(Bl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Gl.setScalar(0),Hl.setScalar(0),Xl.setScalar(0),Gl.fromBufferAttribute(e,t),Hl.fromBufferAttribute(e,n),Xl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Gl,r.x),o.addScaledVector(Hl,r.y),o.addScaledVector(Xl,r.z),o}static isFrontFacing(e,t,n,s){return Fn.subVectors(n,t),Ei.subVectors(e,t),Fn.cross(Ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Fn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Sn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;tr.subVectors(s,n),nr.subVectors(r,n),zl.subVectors(e,n);const l=tr.dot(zl),c=nr.dot(zl);if(l<=0&&c<=0)return t.copy(n);kl.subVectors(e,s);const u=tr.dot(kl),h=nr.dot(kl);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(tr,o);Vl.subVectors(e,r);const f=tr.dot(Vl),p=nr.dot(Vl);if(p>=0&&f<=p)return t.copy(r);const x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(nr,a);const m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return rd.subVectors(r,s),a=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(rd,a);const g=1/(m+x+d);return o=x*g,a=d*g,t.copy(n).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class gi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qo.copy(n.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),ea.subVectors(this.max,Qr),ir.subVectors(e.a,Qr),sr.subVectors(e.b,Qr),rr.subVectors(e.c,Qr),Ki.subVectors(sr,ir),Zi.subVectors(rr,sr),ms.subVectors(ir,rr);let t=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-ms.z,ms.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,ms.z,0,-ms.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-ms.y,ms.x,0];return!Wl(t,ir,sr,rr,ea)||(t=[1,0,0,0,1,0,0,0,1],!Wl(t,ir,sr,rr,ea))?!1:(ta.crossVectors(Ki,Zi),t=[ta.x,ta.y,ta.z],Wl(t,ir,sr,rr,ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wi=[new L,new L,new L,new L,new L,new L,new L,new L],Bn=new L,Qo=new gi,ir=new L,sr=new L,rr=new L,Ki=new L,Zi=new L,ms=new L,Qr=new L,ea=new L,ta=new L,gs=new L;function Wl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gs.fromArray(i,r);const a=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),l=e.dot(gs),c=t.dot(gs),u=n.dot(gs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ft=new L,na=new re;let o0=0;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:o0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xu,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xu&&(e.usage=this.usage),e}}class ap extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class lp extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Et extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const a0=new gi,eo=new L,ql=new L;class xi{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):a0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const t=eo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(eo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(ql)),this.expandByPoint(eo.copy(e.center).sub(ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let l0=0;const Tn=new Je,jl=new bt,or=new L,_n=new gi,to=new gi,Xt=new L;class Dt extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wg(e)?lp:ap)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return jl.lookAt(e),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Et(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];to.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(_n.min,to.min),_n.expandByPoint(Xt),Xt.addVectors(_n.max,to.max),_n.expandByPoint(Xt)):(_n.expandByPoint(to.min),_n.expandByPoint(to.max))}_n.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Xt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xt.fromBufferAttribute(a,c),l&&(or.fromBufferAttribute(e,c),Xt.add(or)),s=Math.max(s,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new L,l[_]=new L;const c=new L,u=new L,h=new L,d=new re,f=new re,p=new re,x=new L,m=new L;function g(_,E,z){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,z),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,z),u.sub(c),h.sub(c),f.sub(d),p.sub(d);const C=1/(f.x*p.y-p.x*f.y);isFinite(C)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(C),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(C),a[_].add(x),a[E].add(x),a[z].add(x),l[_].add(m),l[E].add(m),l[z].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,E=y.length;_<E;++_){const z=y[_],C=z.start,O=z.count;for(let k=C,X=C+O;k<X;k+=3)g(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const S=new L,M=new L,w=new L,A=new L;function P(_){w.fromBufferAttribute(s,_),A.copy(w);const E=a[_];S.copy(E),S.sub(w.multiplyScalar(w.dot(E))).normalize(),M.crossVectors(A,E);const C=M.dot(l[_])<0?-1:1;o.setXYZW(_,S.x,S.y,S.z,C)}for(let _=0,E=y.length;_<E;++_){const z=y[_],C=z.start,O=z.count;for(let k=C,X=C+O;k<X;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let g=0;g<u;g++)d[p++]=c[f++]}return new qt(d,u,h)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xu,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new L;class Ro{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){$a("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ro(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$a("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let c0=0;class Pn extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=Sr,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cc,this.blendDst=Pc,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cc&&(n.blendSrc=this.blendSrc),this.blendDst!==Pc&&(n.blendDst=this.blendDst),this.blendEquation!==ws&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class up extends Pn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ar;const no=new L,lr=new L,cr=new L,ur=new re,io=new re,hp=new Je,ia=new L,so=new L,sa=new L,od=new re,Yl=new re,ad=new re;class u0 extends bt{constructor(e=new up){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new Dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new cp(t,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new Ro(n,3,0,!1)),ar.setAttribute("uv",new Ro(n,2,3,!1))}this.geometry=ar,this.material=e,this.center=new re(.5,.5),this.count=1}raycast(e,t){e.camera===null&&qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),lr.setFromMatrixScale(this.matrixWorld),hp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),cr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&lr.multiplyScalar(-cr.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;ra(ia.set(-.5,-.5,0),cr,o,lr,s,r),ra(so.set(.5,-.5,0),cr,o,lr,s,r),ra(sa.set(.5,.5,0),cr,o,lr,s,r),od.set(0,0),Yl.set(1,0),ad.set(1,1);let a=e.ray.intersectTriangle(ia,so,sa,!1,no);if(a===null&&(ra(so.set(-.5,.5,0),cr,o,lr,s,r),Yl.set(0,1),a=e.ray.intersectTriangle(ia,sa,so,!1,no),a===null))return;const l=e.ray.origin.distanceTo(no);l<e.near||l>e.far||t.push({distance:l,point:no.clone(),uv:Sn.getInterpolation(no,ia,so,sa,od,Yl,ad,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ra(i,e,t,n,s,r){ur.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(io.x=r*ur.x-s*ur.y,io.y=s*ur.x+r*ur.y):io.copy(ur),i.copy(e),i.x+=io.x,i.y+=io.y,i.applyMatrix4(hp)}const Ai=new L,$l=new L,oa=new L,Ji=new L,Kl=new L,aa=new L,Zl=new L;class ol{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){$l.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub($l);const r=e.distanceTo(t)*.5,o=-this.direction.dot(oa),a=Ji.dot(this.direction),l=-Ji.dot(oa),c=Ji.lengthSq(),u=Math.abs(1-o*o);let h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=r*u,h>=0)if(d>=-p)if(d<=p){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy($l).addScaledVector(oa,d),f}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const n=Ai.dot(this.direction),s=Ai.dot(Ai)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,s,r){Kl.subVectors(t,e),aa.subVectors(n,e),Zl.crossVectors(Kl,aa);let o=this.direction.dot(Zl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);const l=a*this.direction.dot(aa.crossVectors(Ji,aa));if(l<0)return null;const c=a*this.direction.dot(Kl.cross(Ji));if(c<0||l+c>o)return null;const u=-a*Ji.dot(Zl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ld=new Je,xs=new ol,la=new xi,cd=new L,ca=new L,ua=new L,ha=new L,Jl=new L,da=new L,ud=new L,fa=new L;class pt extends bt{constructor(e=new Dt,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){da.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Jl.fromBufferAttribute(h,e),o?da.addScaledVector(Jl,u):da.addScaledVector(Jl.sub(t),u))}t.add(da)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),xs.copy(e.ray).recast(e.near),!(la.containsPoint(xs.origin)===!1&&(xs.intersectSphere(la,cd)===null||xs.origin.distanceToSquared(cd)>(e.far-e.near)**2))&&(ld.copy(r).invert(),xs.copy(e.ray).applyMatrix4(ld),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){const m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,w=S;M<w;M+=3){const A=a.getX(M),P=a.getX(M+1),_=a.getX(M+2);s=pa(this,g,e,n,c,u,h,A,P,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const y=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);s=pa(this,o,e,n,c,u,h,y,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){const m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,w=S;M<w;M+=3){const A=M,P=M+1,_=M+2;s=pa(this,g,e,n,c,u,h,A,P,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const y=m,S=m+1,M=m+2;s=pa(this,o,e,n,c,u,h,y,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function h0(i,e,t,n,s,r,o,a){let l;if(e.side===pn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===zi,a),l===null)return null;fa.copy(a),fa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(fa);return c<t.near||c>t.far?null:{distance:c,point:fa.clone(),object:i}}function pa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ca),i.getVertexPosition(l,ua),i.getVertexPosition(c,ha);const u=h0(i,e,t,n,ca,ua,ha,ud);if(u){const h=new L;Sn.getBarycoord(ud,ca,ua,ha,h),s&&(u.uv=Sn.getInterpolatedAttribute(s,a,l,c,h,new re)),r&&(u.uv1=Sn.getInterpolatedAttribute(r,a,l,c,h,new re)),o&&(u.normal=Sn.getInterpolatedAttribute(o,a,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};Sn.getNormal(ca,ua,ha,d.normal),u.face=d,u.barycoord=h}return u}const hd=new L,dd=new At,fd=new At,d0=new L,pd=new Je,ma=new L,Ql=new xi,md=new Je,ec=new ol;class f0 extends pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=kh,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ma),this.boundingBox.expandByPoint(ma)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ma),this.boundingSphere.expandByPoint(ma)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ql.copy(this.boundingSphere),Ql.applyMatrix4(s),e.ray.intersectsSphere(Ql)!==!1&&(md.copy(s).invert(),ec.copy(e.ray).applyMatrix4(md),!(this.boundingBox!==null&&ec.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ec)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===kh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mg?this.bindMatrixInverse.copy(this.bindMatrix).invert():De("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;dd.fromBufferAttribute(s.attributes.skinIndex,e),fd.fromBufferAttribute(s.attributes.skinWeight,e),hd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=fd.getComponent(r);if(o!==0){const a=dd.getComponent(r);pd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(d0.copy(hd).applyMatrix4(pd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class dp extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Zu extends kt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Ut,u=Ut,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gd=new Je,p0=new Je;class Ju{constructor(e=[],t=[]){this.uuid=Cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){De("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:p0;gd.multiplyMatrices(a,t[r]),gd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ju(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Zu(t,e,e,Rn,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(De("Skeleton: No bone found with UUID:",r),o=new dp),this.bones.push(o),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class _u extends qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const hr=new Je,xd=new Je,ga=[],_d=new gi,m0=new Je,ro=new pt,oo=new xi;class Qu extends pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _u(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,m0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),_d.copy(e.boundingBox).applyMatrix4(hr),this.boundingBox.union(_d)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),oo.copy(e.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(n),e.ray.intersectsSphere(oo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hr),xd.multiplyMatrices(n,hr),ro.matrixWorld=xd,ro.raycast(e,ga);for(let o=0,a=ga.length;o<a;o++){const l=ga[o];l.instanceId=r,l.object=this,t.push(l)}ga.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _u(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zu(new Float32Array(s*this.count),s,this.count,Vu,An));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const tc=new L,g0=new L,x0=new Qe;class Es{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=tc.subVectors(n,t).cross(g0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(tc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||x0.getNormalMatrix(e),s=this.coplanarPoint(tc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new xi,_0=new re(.5,.5),xa=new L;class eh{constructor(e=new Es,t=new Es,n=new Es,s=new Es,r=new Es,o=new Es){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],S=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-o,f-u,g-p,w-y).normalize(),s[1].setComponents(c+o,f+u,g+p,w+y).normalize(),s[2].setComponents(c+a,f+h,g+x,w+S).normalize(),s[3].setComponents(c-a,f-h,g-x,w-S).normalize(),n)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,f-d,g-m,w-M).normalize();else if(s[4].setComponents(c-l,f-d,g-m,w-M).normalize(),t===ai)s[5].setComponents(c+l,f+d,g+m,w+M).normalize();else if(t===wo)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);const t=_0.distanceTo(e.center);return _s.radius=.7071067811865476+t,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(xa.x=s.normal.x>0?e.max.x:e.min.x,xa.y=s.normal.y>0?e.max.y:e.min.y,xa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gi extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Za=new L,Ja=new L,vd=new Je,ao=new ol,_a=new xi,nc=new L,yd=new L;class al extends bt{constructor(e=new Dt,t=new Gi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Za.fromBufferAttribute(t,s-1),Ja.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Za.distanceTo(Ja);e.setAttribute("lineDistance",new Et(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;vd.copy(s).invert(),ao.copy(e.ray).applyMatrix4(vd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){const g=u.getX(x),y=u.getX(x+1),S=va(this,e,ao,l,g,y,x);S&&t.push(S)}if(this.isLineLoop){const x=u.getX(p-1),m=u.getX(f),g=va(this,e,ao,l,x,m,p-1);g&&t.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){const g=va(this,e,ao,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){const x=va(this,e,ao,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function va(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(Za.fromBufferAttribute(a,s),Ja.fromBufferAttribute(a,r),t.distanceSqToSegment(Za,Ja,nc,yd)>n)return;nc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(nc);if(!(c<e.near||c>e.far))return{distance:c,point:yd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Md=new L,Sd=new L;class Us extends al{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Md.fromBufferAttribute(t,s),Sd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Md.distanceTo(Sd);e.setAttribute("lineDistance",new Et(n,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class v0 extends al{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class th extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bd=new Je,vu=new ol,ya=new xi,Ma=new L;class fp extends bt{constructor(e=new Dt,t=new th){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,e.ray.intersectsSphere(ya)===!1)return;bd.copy(s).invert(),vu.copy(e.ray).applyMatrix4(bd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,x=f;p<x;p++){const m=c.getX(p);Ma.fromBufferAttribute(h,m),Ed(Ma,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,x=f;p<x;p++)Ma.fromBufferAttribute(h,p),Ed(Ma,p,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ed(i,e,t,n,s,r,o){const a=vu.distanceSqToPoint(i);if(a<t){const l=new L;vu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class pp extends kt{constructor(e=[],t=Ns,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mp extends kt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Co extends kt{constructor(e,t,n=di,s,r,o,a=Ut,l=Ut,c,u=Vi,h=1){if(u!==Vi&&u!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $u(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class y0 extends Co{constructor(e,t=di,n=Ns,s,r,o=Ut,a=Ut,l,c=Vi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gp extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class us extends Dt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(h,2));function p(x,m,g,y,S,M,w,A,P,_,E){const z=M/P,C=w/_,O=M/2,k=w/2,X=A/2,F=P+1,V=_+1;let N=0,Q=0;const K=new L;for(let fe=0;fe<V;fe++){const xe=fe*C-k;for(let pe=0;pe<F;pe++){const Ge=pe*z-O;K[x]=Ge*y,K[m]=xe*S,K[g]=X,c.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[g]=A>0?1:-1,u.push(K.x,K.y,K.z),h.push(pe/P),h.push(1-fe/_),N+=1}}for(let fe=0;fe<_;fe++)for(let xe=0;xe<P;xe++){const pe=d+xe+F*fe,Ge=d+xe+F*(fe+1),lt=d+(xe+1)+F*(fe+1),at=d+(xe+1)+F*fe;l.push(pe,Ge,at),l.push(Ge,lt,at),Q+=6}a.addGroup(f,Q,E),f+=Q,d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Fo extends Dt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let p=0;const x=[],m=n/2;let g=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Et(h,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(f,2));function y(){const M=new L,w=new L;let A=0;const P=(t-e)/n;for(let _=0;_<=r;_++){const E=[],z=_/r,C=z*(t-e)+e;for(let O=0;O<=s;O++){const k=O/s,X=k*l+a,F=Math.sin(X),V=Math.cos(X);w.x=C*F,w.y=-z*n+m,w.z=C*V,h.push(w.x,w.y,w.z),M.set(F,P,V).normalize(),d.push(M.x,M.y,M.z),f.push(k,1-z),E.push(p++)}x.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){const z=x[E][_],C=x[E+1][_],O=x[E+1][_+1],k=x[E][_+1];(e>0||E!==0)&&(u.push(z,C,k),A+=3),(t>0||E!==r-1)&&(u.push(C,O,k),A+=3)}c.addGroup(g,A,0),g+=A}function S(M){const w=p,A=new re,P=new L;let _=0;const E=M===!0?e:t,z=M===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,m*z,0),d.push(0,z,0),f.push(.5,.5),p++;const C=p;for(let O=0;O<=s;O++){const X=O/s*l+a,F=Math.cos(X),V=Math.sin(X);P.x=E*V,P.y=m*z,P.z=E*F,h.push(P.x,P.y,P.z),d.push(0,z,0),A.x=F*.5+.5,A.y=V*.5*z+.5,f.push(A.x,A.y),p++}for(let O=0;O<s;O++){const k=w+O,X=C+O;M===!0?u.push(X,X+1,k):u.push(X+1,X,k),_+=3}c.addGroup(g,_,M===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qa extends Fo{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Qa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ll extends Dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Et(r,3)),this.setAttribute("normal",new Et(r.slice(),3)),this.setAttribute("uv",new Et(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const S=new L,M=new L,w=new L;for(let A=0;A<t.length;A+=3)f(t[A+0],S),f(t[A+1],M),f(t[A+2],w),l(S,M,w,y)}function l(y,S,M,w){const A=w+1,P=[];for(let _=0;_<=A;_++){P[_]=[];const E=y.clone().lerp(M,_/A),z=S.clone().lerp(M,_/A),C=A-_;for(let O=0;O<=C;O++)O===0&&_===A?P[_][O]=E:P[_][O]=E.clone().lerp(z,O/C)}for(let _=0;_<A;_++)for(let E=0;E<2*(A-_)-1;E++){const z=Math.floor(E/2);E%2===0?(d(P[_][z+1]),d(P[_+1][z]),d(P[_][z])):(d(P[_][z+1]),d(P[_+1][z+1]),d(P[_+1][z]))}}function c(y){const S=new L;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(y),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function u(){const y=new L;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const M=m(y)/2/Math.PI+.5,w=g(y)/Math.PI+.5;o.push(M,1-w)}p(),h()}function h(){for(let y=0;y<o.length;y+=6){const S=o[y+0],M=o[y+2],w=o[y+4],A=Math.max(S,M,w),P=Math.min(S,M,w);A>.9&&P<.1&&(S<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,S){const M=y*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}function p(){const y=new L,S=new L,M=new L,w=new L,A=new re,P=new re,_=new re;for(let E=0,z=0;E<r.length;E+=9,z+=6){y.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),A.set(o[z+0],o[z+1]),P.set(o[z+2],o[z+3]),_.set(o[z+4],o[z+5]),w.copy(y).add(S).add(M).divideScalar(3);const C=m(w);x(A,z+0,y,C),x(P,z+2,S,C),x(_,z+4,M,C)}}function x(y,S,M,w){w<0&&y.x===1&&(o[S]=y.x-1),M.x===0&&M.z===0&&(o[S]=w/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.vertices,e.indices,e.radius,e.detail)}}const Sa=new L,ba=new L,ic=new L,Ea=new Sn;class Os extends Dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(br*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:x,b:m,c:g}=Ea;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),Ea.getNormal(ic),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const S=(y+1)%3,M=h[y],w=h[S],A=Ea[u[y]],P=Ea[u[S]],_=`${M}_${w}`,E=`${w}_${M}`;E in d&&d[E]?(ic.dot(d[E].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(P.x,P.y,P.z)),d[E]=null):_ in d||(d[_]={index0:c[y],index1:c[S],normal:ic.clone()})}}for(const p in d)if(d[p]){const{index0:x,index1:m}=d[p];Sa.fromBufferAttribute(a,x),ba.fromBufferAttribute(a,m),f.push(Sa.x,Sa.y,Sa.z),f.push(ba.x,ba.y,ba.z)}this.setAttribute("position",new Et(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class _i{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new re:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,s=[],r=[],o=[],a=new L,l=new Je;for(let f=0;f<=e;f++){const p=f/e;s[f]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(it(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(it(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class nh extends _i{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class M0 extends nh{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ih(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Ta=new L,sc=new ih,rc=new ih,oc=new ih;class S0 extends _i{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Ta.subVectors(s[0],s[1]).add(s[0]),c=Ta);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ta.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ta),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),sc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,x,m),rc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,x,m),oc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,x,m)}else this.curveType==="catmullrom"&&(sc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),rc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),oc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(sc.calc(l),rc.calc(l),oc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Td(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function b0(i,e){const t=1-i;return t*t*e}function E0(i,e){return 2*(1-i)*i*e}function T0(i,e){return i*i*e}function _o(i,e,t,n){return b0(i,e)+E0(i,t)+T0(i,n)}function w0(i,e){const t=1-i;return t*t*t*e}function A0(i,e){const t=1-i;return 3*t*t*i*e}function R0(i,e){return 3*(1-i)*i*i*e}function C0(i,e){return i*i*i*e}function vo(i,e,t,n,s){return w0(i,e)+A0(i,t)+R0(i,n)+C0(i,s)}class xp extends _i{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vo(e,s.x,r.x,o.x,a.x),vo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class P0 extends _i{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vo(e,s.x,r.x,o.x,a.x),vo(e,s.y,r.y,o.y,a.y),vo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _p extends _i{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class L0 extends _i{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vp extends _i{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(_o(e,s.x,r.x,o.x),_o(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class I0 extends _i{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(_o(e,s.x,r.x,o.x),_o(e,s.y,r.y,o.y),_o(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yp extends _i{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Td(a,l.x,c.x,u.x,h.x),Td(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new re().fromArray(s))}return this}}var yu=Object.freeze({__proto__:null,ArcCurve:M0,CatmullRomCurve3:S0,CubicBezierCurve:xp,CubicBezierCurve3:P0,EllipseCurve:nh,LineCurve:_p,LineCurve3:L0,QuadraticBezierCurve:vp,QuadraticBezierCurve3:I0,SplineCurve:yp});class D0 extends _i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new yu[s.type]().fromJSON(s))}return this}}class wd extends D0{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new _p(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new vp(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new xp(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new yp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new nh(e,t,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Mp extends wd{constructor(e){super(e),this.uuid=Cn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new wd().fromJSON(s))}return this}}function N0(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Sp(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=z0(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let u=a,h=l;for(let d=t;d<s;d+=t){const f=i[d],p=i[d+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Po(r,o,t,a,l,c,0),o}function Sp(i,e,t,n,s){let r;if(s===K0(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ad(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ad(o/n|0,i[o],i[o+1],r);return r&&Br(r,r.next)&&(Io(r),r=r.next),r}function Fs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Br(t,t.next)||Ct(t.prev,t,t.next)===0)){if(Io(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Po(i,e,t,n,s,r,o){if(!i)return;!o&&r&&X0(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?O0(i,n,s,r):U0(i)){e.push(l.i,i.i,c.i),Io(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=F0(Fs(i),e),Po(i,e,t,n,s,r,2)):o===2&&B0(i,e,t,n,s,r):Po(Fs(i),e,t,n,s,r,1);break}}}function U0(i){const e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c);let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&mo(s,a,r,l,o,c,p.x,p.y)&&Ct(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function O0(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Ct(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(u,h,d),x=Math.max(a,l,c),m=Math.max(u,h,d),g=Mu(f,p,e,t,n),y=Mu(x,m,e,t,n);let S=i.prevZ,M=i.nextZ;for(;S&&S.z>=g&&M&&M.z<=y;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&mo(a,u,l,h,c,d,S.x,S.y)&&Ct(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&mo(a,u,l,h,c,d,M.x,M.y)&&Ct(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&mo(a,u,l,h,c,d,S.x,S.y)&&Ct(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&mo(a,u,l,h,c,d,M.x,M.y)&&Ct(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function F0(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Br(n,s)&&Ep(n,t,t.next,s)&&Lo(n,s)&&Lo(s,n)&&(e.push(n.i,t.i,s.i),Io(t),Io(t.next),t=i=s),t=t.next}while(t!==i);return Fs(t)}function B0(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&j0(o,a)){let l=Tp(o,a);o=Fs(o,o.next),l=Fs(l,l.next),Po(o,e,t,n,s,r,0),Po(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function z0(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Sp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(q0(c))}s.sort(k0);for(let r=0;r<s.length;r++)t=V0(s[r],t);return t}function k0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function V0(i,e){const t=G0(i,e);if(!t)return e;const n=Tp(t,i);return Fs(n,n.next),Fs(t,t.next)}function G0(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Br(i,t))return t;do{if(Br(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&bp(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const h=Math.abs(s-t.y)/(n-t.x);Lo(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&H0(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function H0(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function X0(i,e,t,n){let s=i;do s.z===0&&(s.z=Mu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,W0(s)}function W0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Mu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function q0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function bp(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function mo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&bp(i,e,t,n,s,r,o,a)}function j0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Y0(i,e)&&(Lo(i,e)&&Lo(e,i)&&$0(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||Br(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Br(i,e){return i.x===e.x&&i.y===e.y}function Ep(i,e,t,n){const s=Aa(Ct(i,e,t)),r=Aa(Ct(i,e,n)),o=Aa(Ct(t,n,i)),a=Aa(Ct(t,n,e));return!!(s!==r&&o!==a||s===0&&wa(i,t,e)||r===0&&wa(i,n,e)||o===0&&wa(t,i,n)||a===0&&wa(t,e,n))}function wa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Aa(i){return i>0?1:i<0?-1:0}function Y0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ep(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Lo(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function $0(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Tp(i,e){const t=Su(i.i,i.x,i.y),n=Su(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ad(i,e,t,n){const s=Su(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Io(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Su(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function K0(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Z0{static triangulate(e,t,n=2){return N0(e,t,n)}}class vr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return vr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Rd(e),Cd(n,e);let o=e.length;t.forEach(Rd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Cd(n,t[l]);const a=Z0.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Rd(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Cd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class sh extends Dt{constructor(e=new Mp([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Et(s,3)),this.setAttribute("uv",new Et(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:J0;let S,M=!1,w,A,P,_;if(g){S=g.getSpacedPoints(u),M=!0,d=!1;const Z=g.isCatmullRomCurve3?g.closed:!1;w=g.computeFrenetFrames(u,Z),A=new L,P=new L,_=new L}d||(m=0,f=0,p=0,x=0);const E=a.extractPoints(c);let z=E.shape;const C=E.holes;if(!vr.isClockWise(z)){z=z.reverse();for(let Z=0,ie=C.length;Z<ie;Z++){const ee=C[Z];vr.isClockWise(ee)&&(C[Z]=ee.reverse())}}function k(Z){const ee=10000000000000001e-36;let me=Z[0];for(let R=1;R<=Z.length;R++){const Ve=R%Z.length,ye=Z[Ve],He=ye.x-me.x,ue=ye.y-me.y,T=He*He+ue*ue,v=Math.max(Math.abs(ye.x),Math.abs(ye.y),Math.abs(me.x),Math.abs(me.y)),D=ee*v*v;if(T<=D){Z.splice(Ve,1),R--;continue}me=ye}}k(z),C.forEach(k);const X=C.length,F=z;for(let Z=0;Z<X;Z++){const ie=C[Z];z=z.concat(ie)}function V(Z,ie,ee){return ie||qe("ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(ie,ee)}const N=z.length;function Q(Z,ie,ee){let me,R,Ve;const ye=Z.x-ie.x,He=Z.y-ie.y,ue=ee.x-Z.x,T=ee.y-Z.y,v=ye*ye+He*He,D=ye*T-He*ue;if(Math.abs(D)>Number.EPSILON){const q=Math.sqrt(v),J=Math.sqrt(ue*ue+T*T),j=ie.x-He/q,Ee=ie.y+ye/q,he=ee.x-T/J,Oe=ee.y+ue/J,Xe=((he-j)*T-(Oe-Ee)*ue)/(ye*T-He*ue);me=j+ye*Xe-Z.x,R=Ee+He*Xe-Z.y;const ne=me*me+R*R;if(ne<=2)return new re(me,R);Ve=Math.sqrt(ne/2)}else{let q=!1;ye>Number.EPSILON?ue>Number.EPSILON&&(q=!0):ye<-Number.EPSILON?ue<-Number.EPSILON&&(q=!0):Math.sign(He)===Math.sign(T)&&(q=!0),q?(me=-He,R=ye,Ve=Math.sqrt(v)):(me=ye,R=He,Ve=Math.sqrt(v/2))}return new re(me/Ve,R/Ve)}const K=[];for(let Z=0,ie=F.length,ee=ie-1,me=Z+1;Z<ie;Z++,ee++,me++)ee===ie&&(ee=0),me===ie&&(me=0),K[Z]=Q(F[Z],F[ee],F[me]);const fe=[];let xe,pe=K.concat();for(let Z=0,ie=X;Z<ie;Z++){const ee=C[Z];xe=[];for(let me=0,R=ee.length,Ve=R-1,ye=me+1;me<R;me++,Ve++,ye++)Ve===R&&(Ve=0),ye===R&&(ye=0),xe[me]=Q(ee[me],ee[Ve],ee[ye]);fe.push(xe),pe=pe.concat(xe)}let Ge;if(m===0)Ge=vr.triangulateShape(F,C);else{const Z=[],ie=[];for(let ee=0;ee<m;ee++){const me=ee/m,R=f*Math.cos(me*Math.PI/2),Ve=p*Math.sin(me*Math.PI/2)+x;for(let ye=0,He=F.length;ye<He;ye++){const ue=V(F[ye],K[ye],Ve);ke(ue.x,ue.y,-R),me===0&&Z.push(ue)}for(let ye=0,He=X;ye<He;ye++){const ue=C[ye];xe=fe[ye];const T=[];for(let v=0,D=ue.length;v<D;v++){const q=V(ue[v],xe[v],Ve);ke(q.x,q.y,-R),me===0&&T.push(q)}me===0&&ie.push(T)}}Ge=vr.triangulateShape(Z,ie)}const lt=Ge.length,at=p+x;for(let Z=0;Z<N;Z++){const ie=d?V(z[Z],pe[Z],at):z[Z];M?(P.copy(w.normals[0]).multiplyScalar(ie.x),A.copy(w.binormals[0]).multiplyScalar(ie.y),_.copy(S[0]).add(P).add(A),ke(_.x,_.y,_.z)):ke(ie.x,ie.y,0)}for(let Z=1;Z<=u;Z++)for(let ie=0;ie<N;ie++){const ee=d?V(z[ie],pe[ie],at):z[ie];M?(P.copy(w.normals[Z]).multiplyScalar(ee.x),A.copy(w.binormals[Z]).multiplyScalar(ee.y),_.copy(S[Z]).add(P).add(A),ke(_.x,_.y,_.z)):ke(ee.x,ee.y,h/u*Z)}for(let Z=m-1;Z>=0;Z--){const ie=Z/m,ee=f*Math.cos(ie*Math.PI/2),me=p*Math.sin(ie*Math.PI/2)+x;for(let R=0,Ve=F.length;R<Ve;R++){const ye=V(F[R],K[R],me);ke(ye.x,ye.y,h+ee)}for(let R=0,Ve=C.length;R<Ve;R++){const ye=C[R];xe=fe[R];for(let He=0,ue=ye.length;He<ue;He++){const T=V(ye[He],xe[He],me);M?ke(T.x,T.y+S[u-1].y,S[u-1].x+ee):ke(T.x,T.y,h+ee)}}}$(),oe();function $(){const Z=s.length/3;if(d){let ie=0,ee=N*ie;for(let me=0;me<lt;me++){const R=Ge[me];Ue(R[2]+ee,R[1]+ee,R[0]+ee)}ie=u+m*2,ee=N*ie;for(let me=0;me<lt;me++){const R=Ge[me];Ue(R[0]+ee,R[1]+ee,R[2]+ee)}}else{for(let ie=0;ie<lt;ie++){const ee=Ge[ie];Ue(ee[2],ee[1],ee[0])}for(let ie=0;ie<lt;ie++){const ee=Ge[ie];Ue(ee[0]+N*u,ee[1]+N*u,ee[2]+N*u)}}n.addGroup(Z,s.length/3-Z,0)}function oe(){const Z=s.length/3;let ie=0;ae(F,ie),ie+=F.length;for(let ee=0,me=C.length;ee<me;ee++){const R=C[ee];ae(R,ie),ie+=R.length}n.addGroup(Z,s.length/3-Z,1)}function ae(Z,ie){let ee=Z.length;for(;--ee>=0;){const me=ee;let R=ee-1;R<0&&(R=Z.length-1);for(let Ve=0,ye=u+m*2;Ve<ye;Ve++){const He=N*Ve,ue=N*(Ve+1),T=ie+me+He,v=ie+R+He,D=ie+R+ue,q=ie+me+ue;We(T,v,D,q)}}}function ke(Z,ie,ee){l.push(Z),l.push(ie),l.push(ee)}function Ue(Z,ie,ee){ut(Z),ut(ie),ut(ee);const me=s.length/3,R=y.generateTopUV(n,s,me-3,me-2,me-1);Ye(R[0]),Ye(R[1]),Ye(R[2])}function We(Z,ie,ee,me){ut(Z),ut(ie),ut(me),ut(ie),ut(ee),ut(me);const R=s.length/3,Ve=y.generateSideWallUV(n,s,R-6,R-3,R-2,R-1);Ye(Ve[0]),Ye(Ve[1]),Ye(Ve[3]),Ye(Ve[1]),Ye(Ve[2]),Ye(Ve[3])}function ut(Z){s.push(l[Z*3+0]),s.push(l[Z*3+1]),s.push(l[Z*3+2])}function Ye(Z){r.push(Z.x),r.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Q0(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new yu[s.type]().fromJSON(s)),new sh(n,e.options)}}const J0={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new re(r,o),new re(a,l),new re(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-h),new re(d,1-p),new re(x,1-g)]:[new re(a,1-l),new re(u,1-h),new re(f,1-p),new re(m,1-g)]}};function Q0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class cl extends ll{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cl(e.radius,e.detail)}}class Bo extends ll{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bo(e.radius,e.detail)}}class Xr extends Dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<u;g++){const y=g*d-o;for(let S=0;S<c;S++){const M=S*h-r;p.push(M,-y,0),x.push(0,0,1),m.push(S/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){const S=y+c*g,M=y+c*(g+1),w=y+1+c*(g+1),A=y+1+c*g;f.push(S,M,A),f.push(M,w,A)}this.setIndex(f),this.setAttribute("position",new Et(p,3)),this.setAttribute("normal",new Et(x,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bs extends Dt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,f=new L,p=new re;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const g=r+m/n*o;f.x=h*Math.cos(g),f.y=h*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let x=0;x<s;x++){const m=x*(n+1);for(let g=0;g<n;g++){const y=g+m,S=y,M=y+n+1,w=y+n+2,A=y+1;a.push(S,M,A),a.push(M,w,A)}}this.setIndex(a),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ul extends Dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new L,d=new L,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){const y=[],S=g/n;let M=0;g===0&&o===0?M=.5/t:g===n&&l===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){const A=w/t;h.x=-e*Math.cos(s+A*r)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(s+A*r)*Math.sin(o+S*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(A+M,1-S),y.push(c++)}u.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){const S=u[g][y+1],M=u[g][y],w=u[g+1][y],A=u[g+1][y+1];(g!==0||o>0)&&f.push(S,M,A),(g!==n-1||l<Math.PI)&&f.push(M,w,A)}this.setIndex(f),this.setAttribute("position",new Et(p,3)),this.setAttribute("normal",new Et(x,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function zr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function sn(i){const e={};for(let t=0;t<i.length;t++){const n=zr(i[t]);for(const s in n)e[s]=n[s]}return e}function ex(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const tx={clone:zr,merge:sn};var nx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nx,this.fragmentShader=ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=ex(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class sx extends Hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rh extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wu,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vi extends rh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ap extends Pn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wu,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Fu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rx extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_g,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ox extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ra(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ax(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Pd(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Rp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Wr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class lx extends Wr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gh,endingEnd:Gh}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hh:r=e,a=2*t-n;break;case Xh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hh:o=e,l=2*n-t;break;case Xh:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,S=(-1-f)*m+(1.5+f)*x+.5*p,M=f*m-f*x;for(let w=0;w!==a;++w)r[w]=g*o[u+w]+y*o[c+w]+S*o[l+w]+M*o[h+w];return r}}class cx extends Wr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class ux extends Wr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class hx extends Wr{interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.settings||this.DefaultSettings_,h=u.inTangents,d=u.outTangents;if(!h||!d){const x=(n-t)/(s-t),m=1-x;for(let g=0;g!==a;++g)r[g]=o[c+g]*m+o[l+g]*x;return r}const f=a*2,p=e-1;for(let x=0;x!==a;++x){const m=o[c+x],g=o[l+x],y=p*f+x*2,S=d[y],M=d[y+1],w=e*f+x*2,A=h[w],P=h[w+1];let _=(n-t)/(s-t),E,z,C,O,k;for(let X=0;X<8;X++){E=_*_,z=E*_,C=1-_,O=C*C,k=O*C;const V=k*t+3*O*_*S+3*C*E*A+z*s-n;if(Math.abs(V)<1e-10)break;const N=3*O*(S-t)+6*C*_*(A-S)+3*E*(s-A);if(Math.abs(N)<1e-10)break;_=_-V/N,_=Math.max(0,Math.min(1,_))}r[x]=k*m+3*O*_*M+3*C*E*P+z*g}return r}}class Wn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ra(t,this.TimeBufferType),this.values=Ra(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ra(e.times,Array),values:Ra(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ux(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new hx(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Eo:t=this.InterpolantFactoryMethodDiscrete;break;case To:t=this.InterpolantFactoryMethodLinear;break;case Pl:t=this.InterpolantFactoryMethodSmooth;break;case Vh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return De("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Eo;case this.InterpolantFactoryMethodLinear:return To;case this.InterpolantFactoryMethodSmooth:return Pl;case this.InterpolantFactoryMethodBezier:return Vh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){qe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ag(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Pl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){const x=t[h+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=To;class qr extends Wn{constructor(e,t,n){super(e,t,n)}}qr.prototype.ValueTypeName="bool";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=Eo;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;class Cp extends Wn{constructor(e,t,n,s){super(e,t,n,s)}}Cp.prototype.ValueTypeName="color";class kr extends Wn{constructor(e,t,n,s){super(e,t,n,s)}}kr.prototype.ValueTypeName="number";class dx extends Wr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)mi.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Vr extends Wn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new dx(this.times,this.values,this.getValueSize(),e)}}Vr.prototype.ValueTypeName="quaternion";Vr.prototype.InterpolantFactoryMethodSmooth=void 0;class jr extends Wn{constructor(e,t,n){super(e,t,n)}}jr.prototype.ValueTypeName="string";jr.prototype.ValueBufferType=Array;jr.prototype.DefaultInterpolation=Eo;jr.prototype.InterpolantFactoryMethodLinear=void 0;jr.prototype.InterpolantFactoryMethodSmooth=void 0;class Gr extends Wn{constructor(e,t,n,s){super(e,t,n,s)}}Gr.prototype.ValueTypeName="vector";class fx{constructor(e="",t=-1,n=[],s=gg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Cn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(mx(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Wn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=ax(l);l=Pd(l,1,u),c=Pd(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new kr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(De("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return qe("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,p,x){if(f.length!==0){const m=[],g=[];Rp(f,m,g,p),m.length!==0&&x.push(new h(d,m,g))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let x=0;x<d[p].morphTargets.length;x++)f[d[p].morphTargets[x]]=-1;for(const x in f){const m=[],g=[];for(let y=0;y!==d[p].morphTargets.length;++y){const S=d[p];m.push(S.time),g.push(S.morphTarget===x?1:0)}s.push(new kr(".morphTargetInfluence["+x+"]",m,g))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Gr,f+".position",d,"pos",s),n(Vr,f+".quaternion",d,"rot",s),n(Gr,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function px(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return kr;case"vector":case"vector2":case"vector3":case"vector4":return Gr;case"color":return Cp;case"quaternion":return Vr;case"bool":case"boolean":return qr;case"string":return jr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function mx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=px(i.type);if(i.times===void 0){const t=[],n=[];Rp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ii={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ld(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ld(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ld(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class gx{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const xx=new gx;class Yr{constructor(e){this.manager=e!==void 0?e:xx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Yr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ri={};class _x extends Error{constructor(e,t){super(e),this.response=t}}class Pp extends Yr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ii.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:n,onError:s});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&De("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ri[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let x=0;const m=new ReadableStream({start(g){y();function y(){h.read().then(({done:S,value:M})=>{if(S)g.close();else{x+=M.byteLength;const w=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let A=0,P=u.length;A<P;A++){const _=u[A];_.onProgress&&_.onProgress(w)}g.enqueue(M),y()}},S=>{g.error(S)})}}});return new Response(m)}else throw new _x(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Ii.add(`file:${e}`,c);const u=Ri[e];delete Ri[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Ri[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ri[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const dr=new WeakMap;class vx extends Yr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ii.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=dr.get(o);h===void 0&&(h=[],dr.set(o,h)),h.push({onLoad:t,onError:s})}return o}const a=Ao("img");function l(){u(),t&&t(this);const h=dr.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}dr.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Ii.remove(`image:${e}`);const d=dr.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(h)}dr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ii.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class yx extends Yr{constructor(e){super(e)}load(e,t,n,s){const r=new kt,o=new vx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class hl extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ac=new Je,Id=new L,Dd=new L;class oh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eh,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Id.setFromMatrixPosition(e.matrixWorld),t.position.copy(Id),Dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dd),t.updateMatrixWorld(),ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===wo||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ca=new L,Pa=new mi,Qn=new L;class Lp extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ca,Pa,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,Pa,Qn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ca,Pa,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,Pa,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new L,Nd=new re,Ud=new re;class on extends Lp{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,Nd,Ud),t.subVectors(Ud,Nd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(br*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Mx extends oh{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Fr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Sx extends hl{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Mx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class bx extends oh{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}}class Ex extends hl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new bx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class zo extends Lp{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Tx extends oh{constructor(){super(new zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ip extends hl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Tx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class wx extends hl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class yo{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const lc=new WeakMap;class Ax extends Yr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&De("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&De("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ii.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(lc.has(o)===!0)s&&s(lc.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ii.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),lc.set(l,c),Ii.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ii.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const fr=-90,pr=1;class Rx extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(fr,pr,e,t);s.layers=this.layers,this.add(s);const r=new on(fr,pr,e,t);r.layers=this.layers,this.add(r);const o=new on(fr,pr,e,t);o.layers=this.layers,this.add(o);const a=new on(fr,pr,e,t);a.layers=this.layers,this.add(a);const l=new on(fr,pr,e,t);l.layers=this.layers,this.add(l);const c=new on(fr,pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Cx extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ah="\\[\\]\\.:\\/",Px=new RegExp("["+ah+"]","g"),lh="[^"+ah+"]",Lx="[^"+ah.replace("\\.","")+"]",Ix=/((?:WC+[\/:])*)/.source.replace("WC",lh),Dx=/(WCOD+)?/.source.replace("WCOD",Lx),Nx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),Ux=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),Ox=new RegExp("^"+Ix+Dx+Nx+Ux+"$"),Fx=["material","materials","bones","map"];class Bx{constructor(e,t,n){const s=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class _t{constructor(e,t,n){this.path=t,this.parsedPath=n||_t.parseTrackName(t),this.node=_t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new _t.Composite(e,t,n):new _t(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Px,"")}static parseTrackName(e){const t=Ox.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Fx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=_t.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}_t.Composite=Bx;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class zx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,De("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Od(i,e,t,n){const s=kx(n);switch(t){case Jf:return i*e;case Vu:return i*e/s.components*s.byteLength;case Gu:return i*e/s.components*s.byteLength;case Or:return i*e*2/s.components*s.byteLength;case Hu:return i*e*2/s.components*s.byteLength;case Qf:return i*e*3/s.components*s.byteLength;case Rn:return i*e*4/s.components*s.byteLength;case Xu:return i*e*4/s.components*s.byteLength;case Ba:case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ka:case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zc:case Vc:return Math.max(i,16)*Math.max(e,8)/4;case Bc:case kc:return Math.max(i,8)*Math.max(e,8)/2;case Gc:case Hc:case Wc:case qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xc:case jc:case Yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case eu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case tu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case nu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case iu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case su:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ru:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ou:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case au:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case lu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case cu:case uu:case hu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case du:case fu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case pu:case mu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kx(i){switch(i){case Mn:case Yf:return{byteLength:1,components:1};case So:case $f:case ki:return{byteLength:2,components:1};case zu:case ku:return{byteLength:2,components:4};case di:case Bu:case An:return{byteLength:4,components:1};case Kf:case Zf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ou}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ou);function Dp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Vx(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Gx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hx=`#ifdef USE_ALPHAHASH
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
#endif`,Xx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yx=`#ifdef USE_AOMAP
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
#endif`,$x=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kx=`#ifdef USE_BATCHING
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
#endif`,Zx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t_=`#ifdef USE_IRIDESCENCE
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
#endif`,n_=`#ifdef USE_BUMPMAP
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
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,l_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,c_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,u_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,h_=`#define PI 3.141592653589793
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
} // validated`,d_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,f_=`vec3 transformedNormal = objectNormal;
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
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,__="gl_FragColor = linearToOutputTexel( gl_FragColor );",v_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y_=`#ifdef USE_ENVMAP
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
#endif`,M_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
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
#endif`,b_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
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
#endif`,T_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C_=`#ifdef USE_GRADIENTMAP
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
}`,P_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D_=`uniform bool receiveShadow;
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
#endif`,N_=`#ifdef USE_ENVMAP
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
#endif`,U_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z_=`PhysicalMaterial material;
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
#endif`,k_=`uniform sampler2D dfgLUT;
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
}`,V_=`
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
#endif`,G_=`#if defined( RE_IndirectDiffuse )
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
#endif`,H_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z_=`#if defined( USE_POINTS_UV )
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
#endif`,J_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ev=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iv=`#ifdef USE_MORPHTARGETS
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
#endif`,sv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ov=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uv=`#ifdef USE_NORMALMAP
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
#endif`,hv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_v=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ev=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wv=`float getShadowMask() {
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
}`,Av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rv=`#ifdef USE_SKINNING
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
#endif`,Cv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pv=`#ifdef USE_SKINNING
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
#endif`,Lv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uv=`#ifdef USE_TRANSMISSION
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
#endif`,Ov=`#ifdef USE_TRANSMISSION
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
#endif`,Fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gv=`uniform sampler2D t2D;
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
}`,Hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jv=`#include <common>
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
}`,Yv=`#if DEPTH_PACKING == 3200
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
}`,$v=`#define DISTANCE
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
}`,Kv=`#define DISTANCE
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
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qv=`uniform float scale;
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
}`,ey=`uniform vec3 diffuse;
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
}`,ty=`#include <common>
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
}`,ny=`uniform vec3 diffuse;
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
}`,iy=`#define LAMBERT
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
}`,sy=`#define LAMBERT
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
}`,ry=`#define MATCAP
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
}`,oy=`#define MATCAP
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
}`,ay=`#define NORMAL
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
}`,ly=`#define NORMAL
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
}`,cy=`#define PHONG
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
}`,uy=`#define PHONG
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
}`,hy=`#define STANDARD
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
}`,dy=`#define STANDARD
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
}`,fy=`#define TOON
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
}`,py=`#define TOON
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
}`,my=`uniform float size;
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
}`,gy=`uniform vec3 diffuse;
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
}`,xy=`#include <common>
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
}`,_y=`uniform vec3 color;
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
}`,vy=`uniform float rotation;
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
}`,yy=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Gx,alphahash_pars_fragment:Hx,alphamap_fragment:Xx,alphamap_pars_fragment:Wx,alphatest_fragment:qx,alphatest_pars_fragment:jx,aomap_fragment:Yx,aomap_pars_fragment:$x,batching_pars_vertex:Kx,batching_vertex:Zx,begin_vertex:Jx,beginnormal_vertex:Qx,bsdfs:e_,iridescence_fragment:t_,bumpmap_pars_fragment:n_,clipping_planes_fragment:i_,clipping_planes_pars_fragment:s_,clipping_planes_pars_vertex:r_,clipping_planes_vertex:o_,color_fragment:a_,color_pars_fragment:l_,color_pars_vertex:c_,color_vertex:u_,common:h_,cube_uv_reflection_fragment:d_,defaultnormal_vertex:f_,displacementmap_pars_vertex:p_,displacementmap_vertex:m_,emissivemap_fragment:g_,emissivemap_pars_fragment:x_,colorspace_fragment:__,colorspace_pars_fragment:v_,envmap_fragment:y_,envmap_common_pars_fragment:M_,envmap_pars_fragment:S_,envmap_pars_vertex:b_,envmap_physical_pars_fragment:N_,envmap_vertex:E_,fog_vertex:T_,fog_pars_vertex:w_,fog_fragment:A_,fog_pars_fragment:R_,gradientmap_pars_fragment:C_,lightmap_pars_fragment:P_,lights_lambert_fragment:L_,lights_lambert_pars_fragment:I_,lights_pars_begin:D_,lights_toon_fragment:U_,lights_toon_pars_fragment:O_,lights_phong_fragment:F_,lights_phong_pars_fragment:B_,lights_physical_fragment:z_,lights_physical_pars_fragment:k_,lights_fragment_begin:V_,lights_fragment_maps:G_,lights_fragment_end:H_,logdepthbuf_fragment:X_,logdepthbuf_pars_fragment:W_,logdepthbuf_pars_vertex:q_,logdepthbuf_vertex:j_,map_fragment:Y_,map_pars_fragment:$_,map_particle_fragment:K_,map_particle_pars_fragment:Z_,metalnessmap_fragment:J_,metalnessmap_pars_fragment:Q_,morphinstance_vertex:ev,morphcolor_vertex:tv,morphnormal_vertex:nv,morphtarget_pars_vertex:iv,morphtarget_vertex:sv,normal_fragment_begin:rv,normal_fragment_maps:ov,normal_pars_fragment:av,normal_pars_vertex:lv,normal_vertex:cv,normalmap_pars_fragment:uv,clearcoat_normal_fragment_begin:hv,clearcoat_normal_fragment_maps:dv,clearcoat_pars_fragment:fv,iridescence_pars_fragment:pv,opaque_fragment:mv,packing:gv,premultiplied_alpha_fragment:xv,project_vertex:_v,dithering_fragment:vv,dithering_pars_fragment:yv,roughnessmap_fragment:Mv,roughnessmap_pars_fragment:Sv,shadowmap_pars_fragment:bv,shadowmap_pars_vertex:Ev,shadowmap_vertex:Tv,shadowmask_pars_fragment:wv,skinbase_vertex:Av,skinning_pars_vertex:Rv,skinning_vertex:Cv,skinnormal_vertex:Pv,specularmap_fragment:Lv,specularmap_pars_fragment:Iv,tonemapping_fragment:Dv,tonemapping_pars_fragment:Nv,transmission_fragment:Uv,transmission_pars_fragment:Ov,uv_pars_fragment:Fv,uv_pars_vertex:Bv,uv_vertex:zv,worldpos_vertex:kv,background_vert:Vv,background_frag:Gv,backgroundCube_vert:Hv,backgroundCube_frag:Xv,cube_vert:Wv,cube_frag:qv,depth_vert:jv,depth_frag:Yv,distance_vert:$v,distance_frag:Kv,equirect_vert:Zv,equirect_frag:Jv,linedashed_vert:Qv,linedashed_frag:ey,meshbasic_vert:ty,meshbasic_frag:ny,meshlambert_vert:iy,meshlambert_frag:sy,meshmatcap_vert:ry,meshmatcap_frag:oy,meshnormal_vert:ay,meshnormal_frag:ly,meshphong_vert:cy,meshphong_frag:uy,meshphysical_vert:hy,meshphysical_frag:dy,meshtoon_vert:fy,meshtoon_frag:py,points_vert:my,points_frag:gy,shadow_vert:xy,shadow_frag:_y,sprite_vert:vy,sprite_frag:yy},ge={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},si={basic:{uniforms:sn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:sn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:sn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:sn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:sn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ze(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:sn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:sn([ge.points,ge.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:sn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:sn([ge.common,ge.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:sn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:sn([ge.sprite,ge.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:sn([ge.common,ge.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:sn([ge.lights,ge.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};si.physical={uniforms:sn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const La={r:0,b:0,g:0},vs=new Gn,My=new Je;function Sy(i,e,t,n,s,r){const o=new ze(0);let a=s===!0?0:1,l,c,u=null,h=0,d=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){const M=y.backgroundBlurriness>0;S=e.get(S,M)}return S}function p(y){let S=!1;const M=f(y);M===null?m(o,a):M&&M.isColor&&(m(M,1),S=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,S){const M=f(S);M&&(M.isCubeTexture||M.mapping===rl)?(c===void 0&&(c=new pt(new us(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:zr(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),vs.copy(S.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(My.makeRotationFromEuler(vs)),c.material.toneMapped=ot.getTransfer(M.colorSpace)!==gt,(u!==M||h!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new pt(new Xr(2,2),new Hn({name:"BackgroundMaterial",uniforms:zr(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ot.getTransfer(M.colorSpace)!==gt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,S){y.getRGB(La,wp(i)),t.buffers.color.setClear(La.r,La.g,La.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function by(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(C,O,k,X,F){let V=!1;const N=h(C,X,k,O);r!==N&&(r=N,c(r.object)),V=f(C,X,k,F),V&&p(C,X,k,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,M(C,O,k,X),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function u(C){return i.deleteVertexArray(C)}function h(C,O,k,X){const F=X.wireframe===!0;let V=n[O.id];V===void 0&&(V={},n[O.id]=V);const N=C.isInstancedMesh===!0?C.id:0;let Q=V[N];Q===void 0&&(Q={},V[N]=Q);let K=Q[k.id];K===void 0&&(K={},Q[k.id]=K);let fe=K[F];return fe===void 0&&(fe=d(l()),K[F]=fe),fe}function d(C){const O=[],k=[],X=[];for(let F=0;F<t;F++)O[F]=0,k[F]=0,X[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:X,object:C,attributes:{},index:null}}function f(C,O,k,X){const F=r.attributes,V=O.attributes;let N=0;const Q=k.getAttributes();for(const K in Q)if(Q[K].location>=0){const xe=F[K];let pe=V[K];if(pe===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(pe=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(pe=C.instanceColor)),xe===void 0||xe.attribute!==pe||pe&&xe.data!==pe.data)return!0;N++}return r.attributesNum!==N||r.index!==X}function p(C,O,k,X){const F={},V=O.attributes;let N=0;const Q=k.getAttributes();for(const K in Q)if(Q[K].location>=0){let xe=V[K];xe===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(xe=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(xe=C.instanceColor));const pe={};pe.attribute=xe,xe&&xe.data&&(pe.data=xe.data),F[K]=pe,N++}r.attributes=F,r.attributesNum=N,r.index=X}function x(){const C=r.newAttributes;for(let O=0,k=C.length;O<k;O++)C[O]=0}function m(C){g(C,0)}function g(C,O){const k=r.newAttributes,X=r.enabledAttributes,F=r.attributeDivisors;k[C]=1,X[C]===0&&(i.enableVertexAttribArray(C),X[C]=1),F[C]!==O&&(i.vertexAttribDivisor(C,O),F[C]=O)}function y(){const C=r.newAttributes,O=r.enabledAttributes;for(let k=0,X=O.length;k<X;k++)O[k]!==C[k]&&(i.disableVertexAttribArray(k),O[k]=0)}function S(C,O,k,X,F,V,N){N===!0?i.vertexAttribIPointer(C,O,k,F,V):i.vertexAttribPointer(C,O,k,X,F,V)}function M(C,O,k,X){x();const F=X.attributes,V=k.getAttributes(),N=O.defaultAttributeValues;for(const Q in V){const K=V[Q];if(K.location>=0){let fe=F[Q];if(fe===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(fe=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(fe=C.instanceColor)),fe!==void 0){const xe=fe.normalized,pe=fe.itemSize,Ge=e.get(fe);if(Ge===void 0)continue;const lt=Ge.buffer,at=Ge.type,$=Ge.bytesPerElement,oe=at===i.INT||at===i.UNSIGNED_INT||fe.gpuType===Bu;if(fe.isInterleavedBufferAttribute){const ae=fe.data,ke=ae.stride,Ue=fe.offset;if(ae.isInstancedInterleavedBuffer){for(let We=0;We<K.locationSize;We++)g(K.location+We,ae.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let We=0;We<K.locationSize;We++)m(K.location+We);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let We=0;We<K.locationSize;We++)S(K.location+We,pe/K.locationSize,at,xe,ke*$,(Ue+pe/K.locationSize*We)*$,oe)}else{if(fe.isInstancedBufferAttribute){for(let ae=0;ae<K.locationSize;ae++)g(K.location+ae,fe.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ae=0;ae<K.locationSize;ae++)m(K.location+ae);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let ae=0;ae<K.locationSize;ae++)S(K.location+ae,pe/K.locationSize,at,xe,pe*$,pe/K.locationSize*ae*$,oe)}}else if(N!==void 0){const xe=N[Q];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(K.location,xe);break;case 3:i.vertexAttrib3fv(K.location,xe);break;case 4:i.vertexAttrib4fv(K.location,xe);break;default:i.vertexAttrib1fv(K.location,xe)}}}}y()}function w(){E();for(const C in n){const O=n[C];for(const k in O){const X=O[k];for(const F in X){const V=X[F];for(const N in V)u(V[N].object),delete V[N];delete X[F]}}delete n[C]}}function A(C){if(n[C.id]===void 0)return;const O=n[C.id];for(const k in O){const X=O[k];for(const F in X){const V=X[F];for(const N in V)u(V[N].object),delete V[N];delete X[F]}}delete n[C.id]}function P(C){for(const O in n){const k=n[O];for(const X in k){const F=k[X];if(F[C.id]===void 0)continue;const V=F[C.id];for(const N in V)u(V[N].object),delete V[N];delete F[C.id]}}}function _(C){for(const O in n){const k=n[O],X=C.isInstancedMesh===!0?C.id:0,F=k[X];if(F!==void 0){for(const V in F){const N=F[V];for(const Q in N)u(N[Q].object),delete N[Q];delete F[V]}delete k[X],Object.keys(k).length===0&&delete n[O]}}}function E(){z(),o=!0,r!==s&&(r=s,c(r.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:z,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Ey(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x]*d[x];t.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ty(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Rn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const _=P===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Mn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==An&&!_)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(De("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:M,maxSamples:w,samples:A}}function wy(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Es,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,g=i.get(h);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,S=y*4;let M=g.clippingState||null;l.value=M,M=u(p,d,S,f);for(let w=0;w!==S;++w)M[w]=t[w];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,p!==!0||m===null){const g=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,M=f;S!==x;++S,M+=4)o.copy(h[S]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const is=4,Fd=[.125,.215,.35,.446,.526,.582],As=20,Ay=256,lo=new zo,Bd=new ze;let cc=null,uc=0,hc=0,dc=!1;const Ry=new L;class zd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=Ry}=r;cc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cc,uc,hc),this._renderer.xr.enabled=dc,e.scissorTest=!1,mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:ki,format:Rn,colorSpace:cn,depthBuffer:!1},s=kd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kd(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Cy(r)),this._blurMaterial=Ly(r,e,t),this._ggxMaterial=Py(r,e,t)}return s}_compileMaterial(e){const t=new pt(new Dt,e);this._renderer.compile(t,lo)}_sceneToCubeUV(e,t,n,s,r){const l=new on(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Bd),h.toneMapping=ui,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pt(new us,new Rt({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let g=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(Bd),g=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const w=this._cubeSize;mr(s,M*w,S>2?w:0,w,w),h.setRenderTarget(s),g&&h.render(x,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ns||e.mapping===Nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;mr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,lo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,f=h*d,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-is?n-p+is:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,mr(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,lo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,mr(e,m,g,3*x,2*x),s.setRenderTarget(e),s.render(a,lo)}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&qe("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*As-1),x=r/p,m=isFinite(r)?1+Math.floor(u*x):As;m>As&&De(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${As}`);const g=[];let y=0;for(let P=0;P<As;++P){const _=P/x,E=Math.exp(-_*_/2);g.push(E),P===0?y+=E:P<m&&(y+=2*E)}for(let P=0;P<g.length;P++)g[P]=g[P]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=p,d.mipInt.value=S-n;const M=this._sizeLods[s],w=3*M*(s>S-is?s-S+is:0),A=4*(this._cubeSize-M);mr(t,w,A,3*M,2*M),l.setRenderTarget(t),l.render(h,lo)}}function Cy(i){const e=[],t=[],n=[];let s=i;const r=i-is+1+Fd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-is?l=Fd[o-i+is-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,x=3,m=2,g=1,y=new Float32Array(x*p*f),S=new Float32Array(m*p*f),M=new Float32Array(g*p*f);for(let A=0;A<f;A++){const P=A%3*2/3-1,_=A>2?0:-1,E=[P,_,0,P+2/3,_,0,P+2/3,_+1,0,P,_,0,P+2/3,_+1,0,P,_+1,0];y.set(E,x*p*A),S.set(d,m*p*A);const z=[A,A,A,A,A,A];M.set(z,g*p*A)}const w=new Dt;w.setAttribute("position",new qt(y,x)),w.setAttribute("uv",new qt(S,m)),w.setAttribute("faceIndex",new qt(M,g)),n.push(new pt(w,null)),s>is&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function kd(i,e,t){const n=new Vn(i,e,t);return n.texture.mapping=rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Py(i,e,t){return new Hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ay,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dl(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Ly(i,e,t){const n=new Float32Array(As),s=new L(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dl(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Vd(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Gd(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function dl(){return`

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
	`}class Np extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new pp(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new us(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Ui});r.uniforms.tEquirect.value=t;const o=new pt(s,r),a=t.minFilter;return t.minFilter===Li&&(t.minFilter=zt),new Rx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}function Iy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Rl||f===Cl)if(e.has(d)){const p=e.get(d).texture;return a(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const x=new Np(p.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const f=d.mapping,p=f===Rl||f===Cl,x=f===Ns||f===Nr;if(p||x){let m=t.get(d);const g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new zd(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const y=d.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new zd(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,f){return f===Rl?d.mapping=Ns:f===Cl&&(d.mapping=Nr),d}function l(d){let f=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){const f=d.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Dy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ka("WebGLRenderer: "+n+" extension not supported."),s}}}function Ny(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,p=h.attributes.position;let x=0;if(p===void 0)return;if(f!==null){const y=f.array;x=f.version;for(let S=0,M=y.length;S<M;S+=3){const w=y[S+0],A=y[S+1],P=y[S+2];d.push(w,A,A,P,P,w)}}else{const y=p.array;x=p.version;for(let S=0,M=y.length/3-1;S<M;S+=3){const w=S+0,A=S+1,P=S+2;d.push(w,A,A,P,P,w)}}const m=new(p.count>=65535?lp:ap)(d,1);m.version=x;const g=r.get(h);g&&e.remove(g),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Uy(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*o,p),t.update(f,n,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];t.update(m,n,1)}function h(d,f,p,x){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)c(d[g]/o,f[g],x[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,p);let g=0;for(let y=0;y<p;y++)g+=f[y]*x[y];t.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Oy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:qe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Fy(i,e,t){const n=new WeakMap,s=new At;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let z=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",z)};var f=z;d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;p===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let w=a.attributes.position.count*M,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const P=new Float32Array(w*A*4*h),_=new ip(P,w,A,h);_.type=An,_.needsUpdate=!0;const E=M*4;for(let C=0;C<h;C++){const O=g[C],k=y[C],X=S[C],F=w*A*4*C;for(let V=0;V<O.count;V++){const N=V*E;p===!0&&(s.fromBufferAttribute(O,V),P[F+N+0]=s.x,P[F+N+1]=s.y,P[F+N+2]=s.z,P[F+N+3]=0),x===!0&&(s.fromBufferAttribute(k,V),P[F+N+4]=s.x,P[F+N+5]=s.y,P[F+N+6]=s.z,P[F+N+7]=0),m===!0&&(s.fromBufferAttribute(X,V),P[F+N+8]=s.x,P[F+N+9]=s.y,P[F+N+10]=s.z,P[F+N+11]=X.itemSize===4?s.w:1)}}d={count:h,texture:_,size:new re(w,A)},n.set(a,d),a.addEventListener("dispose",z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const x=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function By(i,e,t,n,s){let r=new WeakMap;function o(c){const u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const zy={[zf]:"LINEAR_TONE_MAPPING",[kf]:"REINHARD_TONE_MAPPING",[Vf]:"CINEON_TONE_MAPPING",[Gf]:"ACES_FILMIC_TONE_MAPPING",[Xf]:"AGX_TONE_MAPPING",[Wf]:"NEUTRAL_TONE_MAPPING",[Hf]:"CUSTOM_TONE_MAPPING"};function ky(i,e,t,n,s){const r=new Vn(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),o=new Vn(e,t,{type:ki,depthBuffer:!1,stencilBuffer:!1}),a=new Dt;a.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Et([0,2,0,0,2,0],2));const l=new sx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new pt(a,l),u=new zo(-1,1,1,-1,0,1);let h=null,d=null,f=!1,p,x=null,m=[],g=!1;this.setSize=function(y,S){r.setSize(y,S),o.setSize(y,S);for(let M=0;M<m.length;M++){const w=m[M];w.setSize&&w.setSize(y,S)}},this.setEffects=function(y){m=y,g=m.length>0&&m[0].isRenderPass===!0;const S=r.width,M=r.height;for(let w=0;w<m.length;w++){const A=m[w];A.setSize&&A.setSize(S,M)}},this.begin=function(y,S){if(f||y.toneMapping===ui&&m.length===0)return!1;if(x=S,S!==null){const M=S.width,w=S.height;(r.width!==M||r.height!==w)&&this.setSize(M,w)}return g===!1&&y.setRenderTarget(r),p=y.toneMapping,y.toneMapping=ui,!0},this.hasRenderPass=function(){return g},this.end=function(y,S){y.toneMapping=p,f=!0;let M=r,w=o;for(let A=0;A<m.length;A++){const P=m[A];if(P.enabled!==!1&&(P.render(y,w,M,S),P.needsSwap!==!1)){const _=M;M=w,w=_}}if(h!==y.outputColorSpace||d!==y.toneMapping){h=y.outputColorSpace,d=y.toneMapping,l.defines={},ot.getTransfer(h)===gt&&(l.defines.SRGB_TRANSFER="");const A=zy[d];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(x),y.render(c,u),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Up=new kt,bu=new Co(1,1),Op=new ip,Fp=new Jg,Bp=new pp,Hd=[],Xd=[],Wd=new Float32Array(16),qd=new Float32Array(9),jd=new Float32Array(4);function $r(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Hd[s];if(r===void 0&&(r=new Float32Array(s),Hd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fl(i,e){let t=Xd[e];t===void 0&&(t=new Int32Array(e),Xd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function Hy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function Xy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function Wy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;jd.set(n),i.uniformMatrix2fv(this.addr,!1,jd),Gt(t,n)}}function qy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;qd.set(n),i.uniformMatrix3fv(this.addr,!1,qd),Gt(t,n)}}function jy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Wd.set(n),i.uniformMatrix4fv(this.addr,!1,Wd),Gt(t,n)}}function Yy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $y(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function Ky(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function Zy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function Jy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Qy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function eM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function tM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function nM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bu.compareFunction=t.isReversedDepthBuffer()?ju:qu,r=bu):r=Up,t.setTexture2D(e||r,s)}function iM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Fp,s)}function sM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Bp,s)}function rM(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Op,s)}function oM(i){switch(i){case 5126:return Vy;case 35664:return Gy;case 35665:return Hy;case 35666:return Xy;case 35674:return Wy;case 35675:return qy;case 35676:return jy;case 5124:case 35670:return Yy;case 35667:case 35671:return $y;case 35668:case 35672:return Ky;case 35669:case 35673:return Zy;case 5125:return Jy;case 36294:return Qy;case 36295:return eM;case 36296:return tM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return rM}}function aM(i,e){i.uniform1fv(this.addr,e)}function lM(i,e){const t=$r(e,this.size,2);i.uniform2fv(this.addr,t)}function cM(i,e){const t=$r(e,this.size,3);i.uniform3fv(this.addr,t)}function uM(i,e){const t=$r(e,this.size,4);i.uniform4fv(this.addr,t)}function hM(i,e){const t=$r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function dM(i,e){const t=$r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fM(i,e){const t=$r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function pM(i,e){i.uniform1iv(this.addr,e)}function mM(i,e){i.uniform2iv(this.addr,e)}function gM(i,e){i.uniform3iv(this.addr,e)}function xM(i,e){i.uniform4iv(this.addr,e)}function _M(i,e){i.uniform1uiv(this.addr,e)}function vM(i,e){i.uniform2uiv(this.addr,e)}function yM(i,e){i.uniform3uiv(this.addr,e)}function MM(i,e){i.uniform4uiv(this.addr,e)}function SM(i,e,t){const n=this.cache,s=e.length,r=fl(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=bu:o=Up;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function bM(i,e,t){const n=this.cache,s=e.length,r=fl(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Fp,r[o])}function EM(i,e,t){const n=this.cache,s=e.length,r=fl(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Bp,r[o])}function TM(i,e,t){const n=this.cache,s=e.length,r=fl(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Op,r[o])}function wM(i){switch(i){case 5126:return aM;case 35664:return lM;case 35665:return cM;case 35666:return uM;case 35674:return hM;case 35675:return dM;case 35676:return fM;case 5124:case 35670:return pM;case 35667:case 35671:return mM;case 35668:case 35672:return gM;case 35669:case 35673:return xM;case 5125:return _M;case 36294:return vM;case 36295:return yM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return SM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return EM;case 36289:case 36303:case 36311:case 36292:return TM}}class AM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=oM(t.type)}}class RM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wM(t.type)}}class CM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const fc=/(\w+)(\])?(\[|\.)?/g;function Yd(i,e){i.seq.push(e),i.map[e.id]=e}function PM(i,e,t){const n=i.name,s=n.length;for(fc.lastIndex=0;;){const r=fc.exec(n),o=fc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Yd(t,c===void 0?new AM(a,i,e):new RM(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new CM(a),Yd(t,h)),t=h}}}class Ga{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);PM(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function $d(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const LM=37297;let IM=0;function DM(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Kd=new Qe;function NM(i){ot._getMatrix(Kd,ot.workingColorSpace,i);const e=`mat3( ${Kd.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case Ya:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+DM(i.getShaderSource(e),a)}else return r}function UM(i,e){const t=NM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const OM={[zf]:"Linear",[kf]:"Reinhard",[Vf]:"Cineon",[Gf]:"ACESFilmic",[Xf]:"AgX",[Wf]:"Neutral",[Hf]:"Custom"};function FM(i,e){const t=OM[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ia=new L;function BM(){ot.getLuminanceCoefficients(Ia);const i=Ia.x.toFixed(4),e=Ia.y.toFixed(4),t=Ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function kM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function VM(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function go(i){return i!==""}function Jd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eu(i){return i.replace(GM,XM)}const HM=new Map;function XM(i,e){let t=et[e];if(t===void 0){const n=HM.get(e);if(n!==void 0)t=et[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Eu(t)}const WM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ef(i){return i.replace(WM,qM)}function qM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const jM={[Oa]:"SHADOWMAP_TYPE_PCF",[fo]:"SHADOWMAP_TYPE_VSM"};function YM(i){return jM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $M={[Ns]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE",[rl]:"ENVMAP_TYPE_CUBE_UV"};function KM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":$M[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const ZM={[Nr]:"ENVMAP_MODE_REFRACTION"};function JM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ZM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const QM={[Fu]:"ENVMAP_BLENDING_MULTIPLY",[fg]:"ENVMAP_BLENDING_MIX",[pg]:"ENVMAP_BLENDING_ADD"};function eS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":QM[i.combine]||"ENVMAP_BLENDING_NONE"}function tS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function nS(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=YM(t),c=KM(t),u=JM(t),h=eS(t),d=tS(t),f=zM(t),p=kM(r),x=s.createProgram();let m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(go).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(go).join(`
`),g.length>0&&(g+=`
`)):(m=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),g=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?et.tonemapping_pars_fragment:"",t.toneMapping!==ui?FM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,UM("linearToOutputTexel",t.outputColorSpace),BM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(go).join(`
`)),o=Eu(o),o=Jd(o,t),o=Qd(o,t),a=Eu(a),a=Jd(a,t),a=Qd(a,t),o=ef(o),a=ef(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=y+m+o,M=y+g+a,w=$d(s,s.VERTEX_SHADER,S),A=$d(s,s.FRAGMENT_SHADER,M);s.attachShader(x,w),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(C){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(w)||"",X=s.getShaderInfoLog(A)||"",F=O.trim(),V=k.trim(),N=X.trim();let Q=!0,K=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,A);else{const fe=Zd(s,w,"vertex"),xe=Zd(s,A,"fragment");qe("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+fe+`
`+xe)}else F!==""?De("WebGLProgram: Program Info Log:",F):(V===""||N==="")&&(K=!1);K&&(C.diagnostics={runnable:Q,programLog:F,vertexShader:{log:V,prefix:m},fragmentShader:{log:N,prefix:g}})}s.deleteShader(w),s.deleteShader(A),_=new Ga(s,x),E=VM(s,x)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(x,LM)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=A,this}let iS=0;class sS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rS(e),t.set(e,n)),n}}class rS{constructor(e){this.id=iS++,this.code=e,this.usedTimes=0}}function oS(i,e,t,n,s,r){const o=new sp,a=new sS,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,E,z,C,O){const k=C.fog,X=O.geometry,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,N=e.get(_.envMap||F,V),Q=N&&N.mapping===rl?N.image.height:null,K=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&De("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const fe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,xe=fe!==void 0?fe.length:0;let pe=0;X.morphAttributes.position!==void 0&&(pe=1),X.morphAttributes.normal!==void 0&&(pe=2),X.morphAttributes.color!==void 0&&(pe=3);let Ge,lt,at,$;if(K){const mt=si[K];Ge=mt.vertexShader,lt=mt.fragmentShader}else Ge=_.vertexShader,lt=_.fragmentShader,a.update(_),at=a.getVertexShaderID(_),$=a.getFragmentShaderID(_);const oe=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),ke=O.isInstancedMesh===!0,Ue=O.isBatchedMesh===!0,We=!!_.map,ut=!!_.matcap,Ye=!!N,Z=!!_.aoMap,ie=!!_.lightMap,ee=!!_.bumpMap,me=!!_.normalMap,R=!!_.displacementMap,Ve=!!_.emissiveMap,ye=!!_.metalnessMap,He=!!_.roughnessMap,ue=_.anisotropy>0,T=_.clearcoat>0,v=_.dispersion>0,D=_.iridescence>0,q=_.sheen>0,J=_.transmission>0,j=ue&&!!_.anisotropyMap,Ee=T&&!!_.clearcoatMap,he=T&&!!_.clearcoatNormalMap,Oe=T&&!!_.clearcoatRoughnessMap,Xe=D&&!!_.iridescenceMap,ne=D&&!!_.iridescenceThicknessMap,le=q&&!!_.sheenColorMap,Ae=q&&!!_.sheenRoughnessMap,Ce=!!_.specularMap,Me=!!_.specularColorMap,tt=!!_.specularIntensityMap,I=J&&!!_.transmissionMap,de=J&&!!_.thicknessMap,ce=!!_.gradientMap,be=!!_.alphaMap,se=_.alphaTest>0,Y=!!_.alphaHash,Re=!!_.extensions;let Ke=ui;_.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ke=i.toneMapping);const St={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:Ge,fragmentShader:lt,defines:_.defines,customVertexShaderID:at,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Ue,batchingColor:Ue&&O._colorsTexture!==null,instancing:ke,instancingColor:ke&&O.instanceColor!==null,instancingMorph:ke&&O.morphTexture!==null,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:cn,alphaToCoverage:!!_.alphaToCoverage,map:We,matcap:ut,envMap:Ye,envMapMode:Ye&&N.mapping,envMapCubeUVHeight:Q,aoMap:Z,lightMap:ie,bumpMap:ee,normalMap:me,displacementMap:R,emissiveMap:Ve,normalMapObjectSpace:me&&_.normalMapType===vg,normalMapTangentSpace:me&&_.normalMapType===Wu,metalnessMap:ye,roughnessMap:He,anisotropy:ue,anisotropyMap:j,clearcoat:T,clearcoatMap:Ee,clearcoatNormalMap:he,clearcoatRoughnessMap:Oe,dispersion:v,iridescence:D,iridescenceMap:Xe,iridescenceThicknessMap:ne,sheen:q,sheenColorMap:le,sheenRoughnessMap:Ae,specularMap:Ce,specularColorMap:Me,specularIntensityMap:tt,transmission:J,transmissionMap:I,thicknessMap:de,gradientMap:ce,opaque:_.transparent===!1&&_.blending===Sr&&_.alphaToCoverage===!1,alphaMap:be,alphaTest:se,alphaHash:Y,combine:_.combine,mapUv:We&&p(_.map.channel),aoMapUv:Z&&p(_.aoMap.channel),lightMapUv:ie&&p(_.lightMap.channel),bumpMapUv:ee&&p(_.bumpMap.channel),normalMapUv:me&&p(_.normalMap.channel),displacementMapUv:R&&p(_.displacementMap.channel),emissiveMapUv:Ve&&p(_.emissiveMap.channel),metalnessMapUv:ye&&p(_.metalnessMap.channel),roughnessMapUv:He&&p(_.roughnessMap.channel),anisotropyMapUv:j&&p(_.anisotropyMap.channel),clearcoatMapUv:Ee&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:he&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:le&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&p(_.sheenRoughnessMap.channel),specularMapUv:Ce&&p(_.specularMap.channel),specularColorMapUv:Me&&p(_.specularColorMap.channel),specularIntensityMapUv:tt&&p(_.specularIntensityMap.channel),transmissionMapUv:I&&p(_.transmissionMap.channel),thicknessMapUv:de&&p(_.thicknessMap.channel),alphaMapUv:be&&p(_.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(me||ue),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(We||be),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||X.attributes.normal===void 0&&me===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ae,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:pe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:We&&_.map.isVideoTexture===!0&&ot.getTransfer(_.map.colorSpace)===gt,decodeVideoTextureEmissive:Ve&&_.emissiveMap.isVideoTexture===!0&&ot.getTransfer(_.emissiveMap.colorSpace)===gt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===an,flipSided:_.side===pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Re&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&_.extensions.multiDraw===!0||Ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function m(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const z in _.defines)E.push(z),E.push(_.defines[z]);return _.isRawShaderMaterial===!1&&(g(E,_),y(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function g(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function y(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),_.push(o.mask)}function S(_){const E=f[_.type];let z;if(E){const C=si[E];z=tx.clone(C.uniforms)}else z=_.uniforms;return z}function M(_,E){let z=u.get(E);return z!==void 0?++z.usedTimes:(z=new nS(i,E,_,s),c.push(z),u.set(E,z)),z}function w(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){a.remove(_)}function P(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:S,acquireProgram:M,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:P}}function aS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function lS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function nf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sf(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,m,g){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=p,y.materialVariant=o(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=g),e++,y}function l(d,f,p,x,m,g){const y=a(d,f,p,x,m,g);p.transmission>0?n.push(y):p.transparent===!0?s.push(y):t.push(y)}function c(d,f,p,x,m,g){const y=a(d,f,p,x,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function u(d,f){t.length>1&&t.sort(d||lS),n.length>1&&n.sort(f||nf),s.length>1&&s.sort(f||nf)}function h(){for(let d=e,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function cS(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new sf,i.set(n,[o])):s>=r.length?(o=new sf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function uS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ze};break;case"SpotLight":t={position:new L,direction:new L,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function hS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let dS=0;function fS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function pS(i){const e=new uS,t=hS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new Je,o=new Je;function a(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,y=0,S=0,M=0,w=0,A=0,P=0;c.sort(fS);for(let E=0,z=c.length;E<z;E++){const C=c[E],O=C.color,k=C.intensity,X=C.distance;let F=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Or?F=C.shadow.map.texture:F=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=O.r*k,h+=O.g*k,d+=O.b*k;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],k);P++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const N=C.shadow,Q=t.get(C);Q.shadowIntensity=N.intensity,Q.shadowBias=N.bias,Q.shadowNormalBias=N.normalBias,Q.shadowRadius=N.radius,Q.shadowMapSize=N.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=C.shadow.matrix,y++}n.directional[f]=V,f++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(O).multiplyScalar(k),V.distance=X,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[x]=V;const N=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,N.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[x]=N.matrix,C.castShadow){const Q=t.get(C);Q.shadowIntensity=N.intensity,Q.shadowBias=N.bias,Q.shadowNormalBias=N.normalBias,Q.shadowRadius=N.radius,Q.shadowMapSize=N.mapSize,n.spotShadow[x]=Q,n.spotShadowMap[x]=F,M++}x++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(O).multiplyScalar(k),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=V,m++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const N=C.shadow,Q=t.get(C);Q.shadowIntensity=N.intensity,Q.shadowBias=N.bias,Q.shadowNormalBias=N.normalBias,Q.shadowRadius=N.radius,Q.shadowMapSize=N.mapSize,Q.shadowCameraNear=N.camera.near,Q.shadowCameraFar=N.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=F,n.pointShadowMatrix[p]=C.shadow.matrix,S++}n.point[p]=V,p++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(k),V.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[g]=V,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const _=n.hash;(_.directionalLength!==f||_.pointLength!==p||_.spotLength!==x||_.rectAreaLength!==m||_.hemiLength!==g||_.numDirectionalShadows!==y||_.numPointShadows!==S||_.numSpotShadows!==M||_.numSpotMaps!==w||_.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,_.directionalLength=f,_.pointLength=p,_.spotLength=x,_.rectAreaLength=m,_.hemiLength=g,_.numDirectionalShadows=y,_.numPointShadows=S,_.numSpotShadows=M,_.numSpotMaps=w,_.numLightProbes=P,n.version=dS++)}function l(c,u){let h=0,d=0,f=0,p=0,x=0;const m=u.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const S=c[g];if(S.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(S.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const M=n.rectArea[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function rf(i){const e=new pS(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function mS(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new rf(i),e.set(s,[a])):r>=o.length?(a=new rf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const gS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xS=`uniform sampler2D shadow_pass;
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
}`,_S=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],vS=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],of=new Je,co=new L,pc=new L;function yS(i,e,t){let n=new eh;const s=new re,r=new re,o=new At,a=new rx,l=new ox,c={},u=t.maxTextureSize,h={[zi]:pn,[pn]:zi,[an]:an},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:gS,fragmentShader:xS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Dt;p.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new pt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oa;let g=this.type;this.render=function(A,P,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Bf&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Oa);const E=i.getRenderTarget(),z=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Ui),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=g!==this.type;k&&P.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(F=>F.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,F=A.length;X<F;X++){const V=A[X],N=V.shadow;if(N===void 0){De("WebGLShadowMap:",V,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const Q=N.getFrameExtents();s.multiply(Q),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,N.mapSize.y=r.y));const K=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=K,N.map===null||k===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===fo){if(V.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Vn(s.x,s.y,{format:Or,type:ki,minFilter:zt,magFilter:zt,generateMipmaps:!1}),N.map.texture.name=V.name+".shadowMap",N.map.depthTexture=new Co(s.x,s.y,An),N.map.depthTexture.name=V.name+".shadowMapDepth",N.map.depthTexture.format=Vi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ut,N.map.depthTexture.magFilter=Ut}else V.isPointLight?(N.map=new Np(s.x),N.map.depthTexture=new y0(s.x,di)):(N.map=new Vn(s.x,s.y),N.map.depthTexture=new Co(s.x,s.y,di)),N.map.depthTexture.name=V.name+".shadowMap",N.map.depthTexture.format=Vi,this.type===Oa?(N.map.depthTexture.compareFunction=K?ju:qu,N.map.depthTexture.minFilter=zt,N.map.depthTexture.magFilter=zt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Ut,N.map.depthTexture.magFilter=Ut);N.camera.updateProjectionMatrix()}const fe=N.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<fe;xe++){if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,xe),i.clear();else{xe===0&&(i.setRenderTarget(N.map),i.clear());const pe=N.getViewport(xe);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),O.viewport(o)}if(V.isPointLight){const pe=N.camera,Ge=N.matrix,lt=V.distance||pe.far;lt!==pe.far&&(pe.far=lt,pe.updateProjectionMatrix()),co.setFromMatrixPosition(V.matrixWorld),pe.position.copy(co),pc.copy(pe.position),pc.add(_S[xe]),pe.up.copy(vS[xe]),pe.lookAt(pc),pe.updateMatrixWorld(),Ge.makeTranslation(-co.x,-co.y,-co.z),of.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),N._frustum.setFromProjectionMatrix(of,pe.coordinateSystem,pe.reversedDepth)}else N.updateMatrices(V);n=N.getFrustum(),M(P,_,N.camera,V,this.type)}N.isPointLightShadow!==!0&&this.type===fo&&y(N,_),N.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(E,z,C)};function y(A,P){const _=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vn(s.x,s.y,{format:Or,type:ki})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,_,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,_,f,x,null)}function S(A,P,_,E){let z=null;const C=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)z=C;else if(z=_.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const O=z.uuid,k=P.uuid;let X=c[O];X===void 0&&(X={},c[O]=X);let F=X[k];F===void 0&&(F=z.clone(),X[k]=F,P.addEventListener("dispose",w)),z=F}if(z.visible=P.visible,z.wireframe=P.wireframe,E===fo?z.side=P.shadowSide!==null?P.shadowSide:P.side:z.side=P.shadowSide!==null?P.shadowSide:h[P.side],z.alphaMap=P.alphaMap,z.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,z.map=P.map,z.clipShadows=P.clipShadows,z.clippingPlanes=P.clippingPlanes,z.clipIntersection=P.clipIntersection,z.displacementMap=P.displacementMap,z.displacementScale=P.displacementScale,z.displacementBias=P.displacementBias,z.wireframeLinewidth=P.wireframeLinewidth,z.linewidth=P.linewidth,_.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const O=i.properties.get(z);O.light=_}return z}function M(A,P,_,E,z){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&z===fo)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);const k=e.update(A),X=A.material;if(Array.isArray(X)){const F=k.groups;for(let V=0,N=F.length;V<N;V++){const Q=F[V],K=X[Q.materialIndex];if(K&&K.visible){const fe=S(A,K,E,z);A.onBeforeShadow(i,A,P,_,k,fe,Q),i.renderBufferDirect(_,null,k,fe,A,Q),A.onAfterShadow(i,A,P,_,k,fe,Q)}}}else if(X.visible){const F=S(A,X,E,z);A.onBeforeShadow(i,A,P,_,k,F,null),i.renderBufferDirect(_,null,k,F,A,null),A.onAfterShadow(i,A,P,_,k,F,null)}}const O=A.children;for(let k=0,X=O.length;k<X;k++)M(O[k],P,_,E,z)}function w(A){A.target.removeEventListener("dispose",w);for(const _ in c){const E=c[_],z=A.target.uuid;z in E&&(E[z].dispose(),delete E[z])}}}function MS(i,e){function t(){let I=!1;const de=new At;let ce=null;const be=new At(0,0,0,0);return{setMask:function(se){ce!==se&&!I&&(i.colorMask(se,se,se,se),ce=se)},setLocked:function(se){I=se},setClear:function(se,Y,Re,Ke,St){St===!0&&(se*=Ke,Y*=Ke,Re*=Ke),de.set(se,Y,Re,Ke),be.equals(de)===!1&&(i.clearColor(se,Y,Re,Ke),be.copy(de))},reset:function(){I=!1,ce=null,be.set(-1,0,0,0)}}}function n(){let I=!1,de=!1,ce=null,be=null,se=null;return{setReversed:function(Y){if(de!==Y){const Re=e.get("EXT_clip_control");Y?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),de=Y;const Ke=se;se=null,this.setClear(Ke)}},getReversed:function(){return de},setTest:function(Y){Y?oe(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(Y){ce!==Y&&!I&&(i.depthMask(Y),ce=Y)},setFunc:function(Y){if(de&&(Y=Pg[Y]),be!==Y){switch(Y){case Lc:i.depthFunc(i.NEVER);break;case Ic:i.depthFunc(i.ALWAYS);break;case Dc:i.depthFunc(i.LESS);break;case Dr:i.depthFunc(i.LEQUAL);break;case Nc:i.depthFunc(i.EQUAL);break;case Uc:i.depthFunc(i.GEQUAL);break;case Oc:i.depthFunc(i.GREATER);break;case Fc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=Y}},setLocked:function(Y){I=Y},setClear:function(Y){se!==Y&&(se=Y,de&&(Y=1-Y),i.clearDepth(Y))},reset:function(){I=!1,ce=null,be=null,se=null,de=!1}}}function s(){let I=!1,de=null,ce=null,be=null,se=null,Y=null,Re=null,Ke=null,St=null;return{setTest:function(mt){I||(mt?oe(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(mt){de!==mt&&!I&&(i.stencilMask(mt),de=mt)},setFunc:function(mt,Mi,Si){(ce!==mt||be!==Mi||se!==Si)&&(i.stencilFunc(mt,Mi,Si),ce=mt,be=Mi,se=Si)},setOp:function(mt,Mi,Si){(Y!==mt||Re!==Mi||Ke!==Si)&&(i.stencilOp(mt,Mi,Si),Y=mt,Re=Mi,Ke=Si)},setLocked:function(mt){I=mt},setClear:function(mt){St!==mt&&(i.clearStencil(mt),St=mt)},reset:function(){I=!1,de=null,ce=null,be=null,se=null,Y=null,Re=null,Ke=null,St=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],p=null,x=!1,m=null,g=null,y=null,S=null,M=null,w=null,A=null,P=new ze(0,0,0),_=0,E=!1,z=null,C=null,O=null,k=null,X=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,N=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(Q)[1]),V=N>=1):Q.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),V=N>=2);let K=null,fe={};const xe=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),Ge=new At().fromArray(xe),lt=new At().fromArray(pe);function at(I,de,ce,be){const se=new Uint8Array(4),Y=i.createTexture();i.bindTexture(I,Y),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<ce;Re++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(de+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return Y}const $={};$[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(Dr),ee(!1),me(Fh),oe(i.CULL_FACE),Z(Ui);function oe(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function ae(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function ke(I,de){return h[I]!==de?(i.bindFramebuffer(I,de),h[I]=de,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Ue(I,de){let ce=f,be=!1;if(I){ce=d.get(de),ce===void 0&&(ce=[],d.set(de,ce));const se=I.textures;if(ce.length!==se.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,Re=se.length;Y<Re;Y++)ce[Y]=i.COLOR_ATTACHMENT0+Y;ce.length=se.length,be=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,be=!0);be&&i.drawBuffers(ce)}function We(I){return p!==I?(i.useProgram(I),p=I,!0):!1}const ut={[ws]:i.FUNC_ADD,[Km]:i.FUNC_SUBTRACT,[Zm]:i.FUNC_REVERSE_SUBTRACT};ut[Jm]=i.MIN,ut[Qm]=i.MAX;const Ye={[eg]:i.ZERO,[tg]:i.ONE,[ng]:i.SRC_COLOR,[Cc]:i.SRC_ALPHA,[lg]:i.SRC_ALPHA_SATURATE,[og]:i.DST_COLOR,[sg]:i.DST_ALPHA,[ig]:i.ONE_MINUS_SRC_COLOR,[Pc]:i.ONE_MINUS_SRC_ALPHA,[ag]:i.ONE_MINUS_DST_COLOR,[rg]:i.ONE_MINUS_DST_ALPHA,[cg]:i.CONSTANT_COLOR,[ug]:i.ONE_MINUS_CONSTANT_COLOR,[hg]:i.CONSTANT_ALPHA,[dg]:i.ONE_MINUS_CONSTANT_ALPHA};function Z(I,de,ce,be,se,Y,Re,Ke,St,mt){if(I===Ui){x===!0&&(ae(i.BLEND),x=!1);return}if(x===!1&&(oe(i.BLEND),x=!0),I!==$m){if(I!==m||mt!==E){if((g!==ws||M!==ws)&&(i.blendEquation(i.FUNC_ADD),g=ws,M=ws),mt)switch(I){case Sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cs:i.blendFunc(i.ONE,i.ONE);break;case Bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",I);break}else switch(I){case Sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bh:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zh:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",I);break}y=null,S=null,w=null,A=null,P.set(0,0,0),_=0,m=I,E=mt}return}se=se||de,Y=Y||ce,Re=Re||be,(de!==g||se!==M)&&(i.blendEquationSeparate(ut[de],ut[se]),g=de,M=se),(ce!==y||be!==S||Y!==w||Re!==A)&&(i.blendFuncSeparate(Ye[ce],Ye[be],Ye[Y],Ye[Re]),y=ce,S=be,w=Y,A=Re),(Ke.equals(P)===!1||St!==_)&&(i.blendColor(Ke.r,Ke.g,Ke.b,St),P.copy(Ke),_=St),m=I,E=!1}function ie(I,de){I.side===an?ae(i.CULL_FACE):oe(i.CULL_FACE);let ce=I.side===pn;de&&(ce=!ce),ee(ce),I.blending===Sr&&I.transparent===!1?Z(Ui):Z(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const be=I.stencilWrite;a.setTest(be),be&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ve(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(I){z!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),z=I)}function me(I){I!==jm?(oe(i.CULL_FACE),I!==C&&(I===Fh?i.cullFace(i.BACK):I===Ym?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),C=I}function R(I){I!==O&&(V&&i.lineWidth(I),O=I)}function Ve(I,de,ce){I?(oe(i.POLYGON_OFFSET_FILL),(k!==de||X!==ce)&&(k=de,X=ce,o.getReversed()&&(de=-de),i.polygonOffset(de,ce))):ae(i.POLYGON_OFFSET_FILL)}function ye(I){I?oe(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function He(I){I===void 0&&(I=i.TEXTURE0+F-1),K!==I&&(i.activeTexture(I),K=I)}function ue(I,de,ce){ce===void 0&&(K===null?ce=i.TEXTURE0+F-1:ce=K);let be=fe[ce];be===void 0&&(be={type:void 0,texture:void 0},fe[ce]=be),(be.type!==I||be.texture!==de)&&(K!==ce&&(i.activeTexture(ce),K=ce),i.bindTexture(I,de||$[I]),be.type=I,be.texture=de)}function T(){const I=fe[K];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function q(){try{i.texSubImage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function J(){try{i.texSubImage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function he(){try{i.texStorage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function Oe(){try{i.texStorage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function Xe(){try{i.texImage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function ne(){try{i.texImage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function le(I){Ge.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Ge.copy(I))}function Ae(I){lt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),lt.copy(I))}function Ce(I,de){let ce=c.get(de);ce===void 0&&(ce=new WeakMap,c.set(de,ce));let be=ce.get(I);be===void 0&&(be=i.getUniformBlockIndex(de,I.name),ce.set(I,be))}function Me(I,de){const be=c.get(de).get(I);l.get(de)!==be&&(i.uniformBlockBinding(de,be,I.__bindingPointIndex),l.set(de,be))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},K=null,fe={},h={},d=new WeakMap,f=[],p=null,x=!1,m=null,g=null,y=null,S=null,M=null,w=null,A=null,P=new ze(0,0,0),_=0,E=!1,z=null,C=null,O=null,k=null,X=null,Ge.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:ae,bindFramebuffer:ke,drawBuffers:Ue,useProgram:We,setBlending:Z,setMaterial:ie,setFlipSided:ee,setCullFace:me,setLineWidth:R,setPolygonOffset:Ve,setScissorTest:ye,activeTexture:He,bindTexture:ue,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:D,texImage2D:Xe,texImage3D:ne,updateUBOMapping:Ce,uniformBlockBinding:Me,texStorage2D:he,texStorage3D:Oe,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:j,compressedTexSubImage3D:Ee,scissor:le,viewport:Ae,reset:tt}}function SS(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,v){return f?new OffscreenCanvas(T,v):Ao("canvas")}function x(T,v,D){let q=1;const J=ue(T);if((J.width>D||J.height>D)&&(q=D/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor(q*J.width),Ee=Math.floor(q*J.height);h===void 0&&(h=p(j,Ee));const he=v?p(j,Ee):h;return he.width=j,he.height=Ee,he.getContext("2d").drawImage(T,0,0,j,Ee),De("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+Ee+")."),he}else return"data"in T&&De("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function g(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(T,v,D,q,J=!1){if(T!==null){if(i[T]!==void 0)return i[T];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=v;if(v===i.RED&&(D===i.FLOAT&&(j=i.R32F),D===i.HALF_FLOAT&&(j=i.R16F),D===i.UNSIGNED_BYTE&&(j=i.R8)),v===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(j=i.R8UI),D===i.UNSIGNED_SHORT&&(j=i.R16UI),D===i.UNSIGNED_INT&&(j=i.R32UI),D===i.BYTE&&(j=i.R8I),D===i.SHORT&&(j=i.R16I),D===i.INT&&(j=i.R32I)),v===i.RG&&(D===i.FLOAT&&(j=i.RG32F),D===i.HALF_FLOAT&&(j=i.RG16F),D===i.UNSIGNED_BYTE&&(j=i.RG8)),v===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(j=i.RG8UI),D===i.UNSIGNED_SHORT&&(j=i.RG16UI),D===i.UNSIGNED_INT&&(j=i.RG32UI),D===i.BYTE&&(j=i.RG8I),D===i.SHORT&&(j=i.RG16I),D===i.INT&&(j=i.RG32I)),v===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(j=i.RGB8UI),D===i.UNSIGNED_SHORT&&(j=i.RGB16UI),D===i.UNSIGNED_INT&&(j=i.RGB32UI),D===i.BYTE&&(j=i.RGB8I),D===i.SHORT&&(j=i.RGB16I),D===i.INT&&(j=i.RGB32I)),v===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),D===i.UNSIGNED_INT&&(j=i.RGBA32UI),D===i.BYTE&&(j=i.RGBA8I),D===i.SHORT&&(j=i.RGBA16I),D===i.INT&&(j=i.RGBA32I)),v===i.RGB&&(D===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),v===i.RGBA){const Ee=J?Ya:ot.getTransfer(q);D===i.FLOAT&&(j=i.RGBA32F),D===i.HALF_FLOAT&&(j=i.RGBA16F),D===i.UNSIGNED_BYTE&&(j=Ee===gt?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function M(T,v){let D;return T?v===null||v===di||v===bo?D=i.DEPTH24_STENCIL8:v===An?D=i.DEPTH32F_STENCIL8:v===So&&(D=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===di||v===bo?D=i.DEPTH_COMPONENT24:v===An?D=i.DEPTH_COMPONENT32F:v===So&&(D=i.DEPTH_COMPONENT16),D}function w(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ut&&T.minFilter!==zt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){const v=T.target;v.removeEventListener("dispose",A),_(v),v.isVideoTexture&&u.delete(v)}function P(T){const v=T.target;v.removeEventListener("dispose",P),z(v)}function _(T){const v=n.get(T);if(v.__webglInit===void 0)return;const D=T.source,q=d.get(D);if(q){const J=q[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(T),Object.keys(q).length===0&&d.delete(D)}n.remove(T)}function E(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const D=T.source,q=d.get(D);delete q[v.__cacheKey],o.memory.textures--}function z(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let J=0;J<v.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[q][J]);else i.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)i.deleteFramebuffer(v.__webglFramebuffer[q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const D=T.textures;for(let q=0,J=D.length;q<J;q++){const j=n.get(D[q]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(D[q])}n.remove(T)}let C=0;function O(){C=0}function k(){const T=C;return T>=s.maxTextures&&De("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function X(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function F(T,v){const D=n.get(T);if(T.isVideoTexture&&ye(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&D.__version!==T.version){const q=T.image;if(q===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{$(D,T,v);return}}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+v)}function V(T,v){const D=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){$(D,T,v);return}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+v)}function N(T,v){const D=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){$(D,T,v);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+v)}function Q(T,v){const D=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&D.__version!==T.version){oe(D,T,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+v)}const K={[Ur]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[ja]:i.MIRRORED_REPEAT},fe={[Ut]:i.NEAREST,[jf]:i.NEAREST_MIPMAP_NEAREST,[po]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},xe={[yg]:i.NEVER,[Tg]:i.ALWAYS,[Mg]:i.LESS,[qu]:i.LEQUAL,[Sg]:i.EQUAL,[ju]:i.GEQUAL,[bg]:i.GREATER,[Eg]:i.NOTEQUAL};function pe(T,v){if(v.type===An&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===zt||v.magFilter===Fa||v.magFilter===po||v.magFilter===Li||v.minFilter===zt||v.minFilter===Fa||v.minFilter===po||v.minFilter===Li)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,K[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,K[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,K[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,fe[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,fe[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ut||v.minFilter!==po&&v.minFilter!==Li||v.type===An&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ge(T,v){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));const q=v.source;let J=d.get(q);J===void 0&&(J={},d.set(q,J));const j=X(v);if(j!==T.__cacheKey){J[j]===void 0&&(J[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,D=!0),J[j].usedTimes++;const Ee=J[T.__cacheKey];Ee!==void 0&&(J[T.__cacheKey].usedTimes--,Ee.usedTimes===0&&E(v)),T.__cacheKey=j,T.__webglTexture=J[j].texture}return D}function lt(T,v,D){return Math.floor(Math.floor(T/D)/v)}function at(T,v,D,q){const j=T.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,D,q,v.data);else{j.sort((ne,le)=>ne.start-le.start);let Ee=0;for(let ne=1;ne<j.length;ne++){const le=j[Ee],Ae=j[ne],Ce=le.start+le.count,Me=lt(Ae.start,v.width,4),tt=lt(le.start,v.width,4);Ae.start<=Ce+1&&Me===tt&&lt(Ae.start+Ae.count-1,v.width,4)===Me?le.count=Math.max(le.count,Ae.start+Ae.count-le.start):(++Ee,j[Ee]=Ae)}j.length=Ee+1;const he=i.getParameter(i.UNPACK_ROW_LENGTH),Oe=i.getParameter(i.UNPACK_SKIP_PIXELS),Xe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ne=0,le=j.length;ne<le;ne++){const Ae=j[ne],Ce=Math.floor(Ae.start/4),Me=Math.ceil(Ae.count/4),tt=Ce%v.width,I=Math.floor(Ce/v.width),de=Me,ce=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,tt,I,de,ce,D,q,v.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,he),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Xe)}}function $(T,v,D){let q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=i.TEXTURE_3D);const J=Ge(T,v),j=v.source;t.bindTexture(q,T.__webglTexture,i.TEXTURE0+D);const Ee=n.get(j);if(j.version!==Ee.__version||J===!0){t.activeTexture(i.TEXTURE0+D);const he=ot.getPrimaries(ot.workingColorSpace),Oe=v.colorSpace===ts?null:ot.getPrimaries(v.colorSpace),Xe=v.colorSpace===ts||he===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let ne=x(v.image,!1,s.maxTextureSize);ne=He(v,ne);const le=r.convert(v.format,v.colorSpace),Ae=r.convert(v.type);let Ce=S(v.internalFormat,le,Ae,v.colorSpace,v.isVideoTexture);pe(q,v);let Me;const tt=v.mipmaps,I=v.isVideoTexture!==!0,de=Ee.__version===void 0||J===!0,ce=j.dataReady,be=w(v,ne);if(v.isDepthTexture)Ce=M(v.format===Cs,v.type),de&&(I?t.texStorage2D(i.TEXTURE_2D,1,Ce,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Ce,ne.width,ne.height,0,le,Ae,null));else if(v.isDataTexture)if(tt.length>0){I&&de&&t.texStorage2D(i.TEXTURE_2D,be,Ce,tt[0].width,tt[0].height);for(let se=0,Y=tt.length;se<Y;se++)Me=tt[se],I?ce&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Me.width,Me.height,le,Ae,Me.data):t.texImage2D(i.TEXTURE_2D,se,Ce,Me.width,Me.height,0,le,Ae,Me.data);v.generateMipmaps=!1}else I?(de&&t.texStorage2D(i.TEXTURE_2D,be,Ce,ne.width,ne.height),ce&&at(v,ne,le,Ae)):t.texImage2D(i.TEXTURE_2D,0,Ce,ne.width,ne.height,0,le,Ae,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Ce,tt[0].width,tt[0].height,ne.depth);for(let se=0,Y=tt.length;se<Y;se++)if(Me=tt[se],v.format!==Rn)if(le!==null)if(I){if(ce)if(v.layerUpdates.size>0){const Re=Od(Me.width,Me.height,v.format,v.type);for(const Ke of v.layerUpdates){const St=Me.data.subarray(Ke*Re/Me.data.BYTES_PER_ELEMENT,(Ke+1)*Re/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,Ke,Me.width,Me.height,1,le,St)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Me.width,Me.height,ne.depth,le,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Ce,Me.width,Me.height,ne.depth,0,Me.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Me.width,Me.height,ne.depth,le,Ae,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Ce,Me.width,Me.height,ne.depth,0,le,Ae,Me.data)}else{I&&de&&t.texStorage2D(i.TEXTURE_2D,be,Ce,tt[0].width,tt[0].height);for(let se=0,Y=tt.length;se<Y;se++)Me=tt[se],v.format!==Rn?le!==null?I?ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Me.width,Me.height,le,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Ce,Me.width,Me.height,0,Me.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ce&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Me.width,Me.height,le,Ae,Me.data):t.texImage2D(i.TEXTURE_2D,se,Ce,Me.width,Me.height,0,le,Ae,Me.data)}else if(v.isDataArrayTexture)if(I){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Ce,ne.width,ne.height,ne.depth),ce)if(v.layerUpdates.size>0){const se=Od(ne.width,ne.height,v.format,v.type);for(const Y of v.layerUpdates){const Re=ne.data.subarray(Y*se/ne.data.BYTES_PER_ELEMENT,(Y+1)*se/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,ne.width,ne.height,1,le,Ae,Re)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,le,Ae,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,ne.width,ne.height,ne.depth,0,le,Ae,ne.data);else if(v.isData3DTexture)I?(de&&t.texStorage3D(i.TEXTURE_3D,be,Ce,ne.width,ne.height,ne.depth),ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,le,Ae,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,ne.width,ne.height,ne.depth,0,le,Ae,ne.data);else if(v.isFramebufferTexture){if(de)if(I)t.texStorage2D(i.TEXTURE_2D,be,Ce,ne.width,ne.height);else{let se=ne.width,Y=ne.height;for(let Re=0;Re<be;Re++)t.texImage2D(i.TEXTURE_2D,Re,Ce,se,Y,0,le,Ae,null),se>>=1,Y>>=1}}else if(tt.length>0){if(I&&de){const se=ue(tt[0]);t.texStorage2D(i.TEXTURE_2D,be,Ce,se.width,se.height)}for(let se=0,Y=tt.length;se<Y;se++)Me=tt[se],I?ce&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,le,Ae,Me):t.texImage2D(i.TEXTURE_2D,se,Ce,le,Ae,Me);v.generateMipmaps=!1}else if(I){if(de){const se=ue(ne);t.texStorage2D(i.TEXTURE_2D,be,Ce,se.width,se.height)}ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Ae,ne)}else t.texImage2D(i.TEXTURE_2D,0,Ce,le,Ae,ne);m(v)&&g(q),Ee.__version=j.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function oe(T,v,D){if(v.image.length!==6)return;const q=Ge(T,v),J=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+D);const j=n.get(J);if(J.version!==j.__version||q===!0){t.activeTexture(i.TEXTURE0+D);const Ee=ot.getPrimaries(ot.workingColorSpace),he=v.colorSpace===ts?null:ot.getPrimaries(v.colorSpace),Oe=v.colorSpace===ts||Ee===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const Xe=v.isCompressedTexture||v.image[0].isCompressedTexture,ne=v.image[0]&&v.image[0].isDataTexture,le=[];for(let Y=0;Y<6;Y++)!Xe&&!ne?le[Y]=x(v.image[Y],!0,s.maxCubemapSize):le[Y]=ne?v.image[Y].image:v.image[Y],le[Y]=He(v,le[Y]);const Ae=le[0],Ce=r.convert(v.format,v.colorSpace),Me=r.convert(v.type),tt=S(v.internalFormat,Ce,Me,v.colorSpace),I=v.isVideoTexture!==!0,de=j.__version===void 0||q===!0,ce=J.dataReady;let be=w(v,Ae);pe(i.TEXTURE_CUBE_MAP,v);let se;if(Xe){I&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,tt,Ae.width,Ae.height);for(let Y=0;Y<6;Y++){se=le[Y].mipmaps;for(let Re=0;Re<se.length;Re++){const Ke=se[Re];v.format!==Rn?Ce!==null?I?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re,0,0,Ke.width,Ke.height,Ce,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re,tt,Ke.width,Ke.height,0,Ke.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re,0,0,Ke.width,Ke.height,Ce,Me,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re,tt,Ke.width,Ke.height,0,Ce,Me,Ke.data)}}}else{if(se=v.mipmaps,I&&de){se.length>0&&be++;const Y=ue(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,tt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ne){I?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,le[Y].width,le[Y].height,Ce,Me,le[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,tt,le[Y].width,le[Y].height,0,Ce,Me,le[Y].data);for(let Re=0;Re<se.length;Re++){const St=se[Re].image[Y].image;I?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re+1,0,0,St.width,St.height,Ce,Me,St.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re+1,tt,St.width,St.height,0,Ce,Me,St.data)}}else{I?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ce,Me,le[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,tt,Ce,Me,le[Y]);for(let Re=0;Re<se.length;Re++){const Ke=se[Re];I?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re+1,0,0,Ce,Me,Ke.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re+1,tt,Ce,Me,Ke.image[Y])}}}m(v)&&g(i.TEXTURE_CUBE_MAP),j.__version=J.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ae(T,v,D,q,J,j){const Ee=r.convert(D.format,D.colorSpace),he=r.convert(D.type),Oe=S(D.internalFormat,Ee,he,D.colorSpace),Xe=n.get(v),ne=n.get(D);if(ne.__renderTarget=v,!Xe.__hasExternalTextures){const le=Math.max(1,v.width>>j),Ae=Math.max(1,v.height>>j);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,j,Oe,le,Ae,v.depth,0,Ee,he,null):t.texImage2D(J,j,Oe,le,Ae,0,Ee,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ve(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,ne.__webglTexture,0,R(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,ne.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(T,v,D){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const q=v.depthTexture,J=q&&q.isDepthTexture?q.type:null,j=M(v.stencilBuffer,J),Ee=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ve(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R(v),j,v.width,v.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,R(v),j,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,T)}else{const q=v.textures;for(let J=0;J<q.length;J++){const j=q[J],Ee=r.convert(j.format,j.colorSpace),he=r.convert(j.type),Oe=S(j.internalFormat,Ee,he,j.colorSpace);Ve(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R(v),Oe,v.width,v.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,R(v),Oe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Oe,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(T,v,D){const q=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(v.depthTexture);if(J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q){if(J.__webglInit===void 0&&(J.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),pe(i.TEXTURE_CUBE_MAP,v.depthTexture);const Xe=r.convert(v.depthTexture.format),ne=r.convert(v.depthTexture.type);let le;v.depthTexture.format===Vi?le=i.DEPTH_COMPONENT24:v.depthTexture.format===Cs&&(le=i.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,le,v.width,v.height,0,Xe,ne,null)}}else F(v.depthTexture,0);const j=J.__webglTexture,Ee=R(v),he=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+D:i.TEXTURE_2D,Oe=v.depthTexture.format===Cs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Vi)Ve(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Oe,he,j,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,Oe,he,j,0);else if(v.depthTexture.format===Cs)Ve(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Oe,he,j,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,Oe,he,j,0);else throw new Error("Unknown depthTexture format")}function We(T){const v=n.get(T),D=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=q}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(D)for(let q=0;q<6;q++)Ue(v.__webglFramebuffer[q],T,q);else{const q=T.texture.mipmaps;q&&q.length>0?Ue(v.__webglFramebuffer[0],T,0):Ue(v.__webglFramebuffer,T,0)}else if(D){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=i.createRenderbuffer(),ke(v.__webglDepthbuffer[q],T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,j)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ke(v.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(T,v,D){const q=n.get(T);v!==void 0&&ae(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&We(T)}function Ye(T){const v=T.texture,D=n.get(T),q=n.get(v);T.addEventListener("dispose",P);const J=T.textures,j=T.isWebGLCubeRenderTarget===!0,Ee=J.length>1;if(Ee||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=v.version,o.memory.textures++),j){D.__webglFramebuffer=[];for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[he]=[];for(let Oe=0;Oe<v.mipmaps.length;Oe++)D.__webglFramebuffer[he][Oe]=i.createFramebuffer()}else D.__webglFramebuffer[he]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let he=0;he<v.mipmaps.length;he++)D.__webglFramebuffer[he]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let he=0,Oe=J.length;he<Oe;he++){const Xe=n.get(J[he]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Ve(T)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let he=0;he<J.length;he++){const Oe=J[he];D.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[he]);const Xe=r.convert(Oe.format,Oe.colorSpace),ne=r.convert(Oe.type),le=S(Oe.internalFormat,Xe,ne,Oe.colorSpace,T.isXRRenderTarget===!0),Ae=R(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,le,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,D.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(D.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),pe(i.TEXTURE_CUBE_MAP,v);for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0)for(let Oe=0;Oe<v.mipmaps.length;Oe++)ae(D.__webglFramebuffer[he][Oe],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Oe);else ae(D.__webglFramebuffer[he],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(v)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let he=0,Oe=J.length;he<Oe;he++){const Xe=J[he],ne=n.get(Xe);let le=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(le=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,ne.__webglTexture),pe(le,Xe),ae(D.__webglFramebuffer,T,Xe,i.COLOR_ATTACHMENT0+he,le,0),m(Xe)&&g(le)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,q.__webglTexture),pe(he,v),v.mipmaps&&v.mipmaps.length>0)for(let Oe=0;Oe<v.mipmaps.length;Oe++)ae(D.__webglFramebuffer[Oe],T,v,i.COLOR_ATTACHMENT0,he,Oe);else ae(D.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,he,0);m(v)&&g(he),t.unbindTexture()}T.depthBuffer&&We(T)}function Z(T){const v=T.textures;for(let D=0,q=v.length;D<q;D++){const J=v[D];if(m(J)){const j=y(T),Ee=n.get(J).__webglTexture;t.bindTexture(j,Ee),g(j),t.unbindTexture()}}}const ie=[],ee=[];function me(T){if(T.samples>0){if(Ve(T)===!1){const v=T.textures,D=T.width,q=T.height;let J=i.COLOR_BUFFER_BIT;const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(T),he=v.length>1;if(he)for(let Xe=0;Xe<v.length;Xe++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Oe=T.texture.mipmaps;Oe&&Oe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Xe=0;Xe<v.length;Xe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Xe]);const ne=n.get(v[Xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,D,q,0,0,D,q,J,i.NEAREST),l===!0&&(ie.length=0,ee.length=0,ie.push(i.COLOR_ATTACHMENT0+Xe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ie.push(j),ee.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Xe=0;Xe<v.length;Xe++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Xe]);const ne=n.get(v[Xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function R(T){return Math.min(s.maxSamples,T.samples)}function Ve(T){const v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ye(T){const v=o.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function He(T,v){const D=T.colorSpace,q=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==cn&&D!==ts&&(ot.getTransfer(D)===gt?(q!==Rn||J!==Mn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",D)),v}function ue(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=F,this.setTexture2DArray=V,this.setTexture3D=N,this.setTextureCube=Q,this.rebindTextures=ut,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function bS(i,e){function t(n,s=ts){let r;const o=ot.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===zu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ku)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yf)return i.BYTE;if(n===$f)return i.SHORT;if(n===So)return i.UNSIGNED_SHORT;if(n===Bu)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===ki)return i.HALF_FLOAT;if(n===Jf)return i.ALPHA;if(n===Qf)return i.RGB;if(n===Rn)return i.RGBA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===Cs)return i.DEPTH_STENCIL;if(n===Vu)return i.RED;if(n===Gu)return i.RED_INTEGER;if(n===Or)return i.RG;if(n===Hu)return i.RG_INTEGER;if(n===Xu)return i.RGBA_INTEGER;if(n===Ba||n===za||n===ka||n===Va)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bc||n===zc||n===kc||n===Vc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gc||n===Hc||n===Xc||n===Wc||n===qc||n===jc||n===Yc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gc||n===Hc)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wc)return r.COMPRESSED_R11_EAC;if(n===qc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===jc)return r.COMPRESSED_RG11_EAC;if(n===Yc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$c||n===Kc||n===Zc||n===Jc||n===Qc||n===eu||n===tu||n===nu||n===iu||n===su||n===ru||n===ou||n===au||n===lu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$c)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===iu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===su)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ru)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ou)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===au)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cu||n===uu||n===hu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===cu)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===du||n===fu||n===pu||n===mu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===du)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const ES=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TS=`
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

}`;class wS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new gp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Hn({vertexShader:ES,fragmentShader:TS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new Xr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AS extends Hr{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",m=new wS,g={},y=t.getContextAttributes();let S=null,M=null;const w=[],A=[],P=new re;let _=null;const E=new on;E.viewport=new At;const z=new on;z.viewport=new At;const C=[E,z],O=new Cx;let k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let oe=w[$];return oe===void 0&&(oe=new Ol,w[$]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function($){let oe=w[$];return oe===void 0&&(oe=new Ol,w[$]=oe),oe.getGripSpace()},this.getHand=function($){let oe=w[$];return oe===void 0&&(oe=new Ol,w[$]=oe),oe.getHandSpace()};function F($){const oe=A.indexOf($.inputSource);if(oe===-1)return;const ae=w[oe];ae!==void 0&&(ae.update($.inputSource,$.frame,c||o),ae.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",N);for(let $=0;$<w.length;$++){const oe=A[$];oe!==null&&(A[$]=null,w[$].disconnect(oe))}k=null,X=null,m.reset();for(const $ in g)delete g[$];e.setRenderTarget(S),f=null,d=null,h=null,s=null,M=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",N),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,ke=null,Ue=null;y.depth&&(Ue=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=y.stencil?Cs:Vi,ke=y.stencil?bo:di);const We={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(We),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Vn(d.textureWidth,d.textureHeight,{format:Rn,type:Mn,depthTexture:new Co(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ae={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Vn(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N($){for(let oe=0;oe<$.removed.length;oe++){const ae=$.removed[oe],ke=A.indexOf(ae);ke>=0&&(A[ke]=null,w[ke].disconnect(ae))}for(let oe=0;oe<$.added.length;oe++){const ae=$.added[oe];let ke=A.indexOf(ae);if(ke===-1){for(let We=0;We<w.length;We++)if(We>=A.length){A.push(ae),ke=We;break}else if(A[We]===null){A[We]=ae,ke=We;break}if(ke===-1)break}const Ue=w[ke];Ue&&Ue.connect(ae)}}const Q=new L,K=new L;function fe($,oe,ae){Q.setFromMatrixPosition(oe.matrixWorld),K.setFromMatrixPosition(ae.matrixWorld);const ke=Q.distanceTo(K),Ue=oe.projectionMatrix.elements,We=ae.projectionMatrix.elements,ut=Ue[14]/(Ue[10]-1),Ye=Ue[14]/(Ue[10]+1),Z=(Ue[9]+1)/Ue[5],ie=(Ue[9]-1)/Ue[5],ee=(Ue[8]-1)/Ue[0],me=(We[8]+1)/We[0],R=ut*ee,Ve=ut*me,ye=ke/(-ee+me),He=ye*-ee;if(oe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(He),$.translateZ(ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ue[10]===-1)$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const ue=ut+ye,T=Ye+ye,v=R-He,D=Ve+(ke-He),q=Z*Ye/T*ue,J=ie*Ye/T*ue;$.projectionMatrix.makePerspective(v,D,q,J,ue,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function xe($,oe){oe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(oe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let oe=$.near,ae=$.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),O.near=z.near=E.near=oe,O.far=z.far=E.far=ae,(k!==O.near||X!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,X=O.far),O.layers.mask=$.layers.mask|6,E.layers.mask=O.layers.mask&-5,z.layers.mask=O.layers.mask&-3;const ke=$.parent,Ue=O.cameras;xe(O,ke);for(let We=0;We<Ue.length;We++)xe(Ue[We],ke);Ue.length===2?fe(O,E,z):O.projectionMatrix.copy(E.projectionMatrix),pe($,O,ke)};function pe($,oe,ae){ae===null?$.matrix.copy(oe.matrixWorld):($.matrix.copy(ae.matrixWorld),$.matrix.invert(),$.matrix.multiply(oe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Fr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function($){return g[$]};let Ge=null;function lt($,oe){if(u=oe.getViewerPose(c||o),p=oe,u!==null){const ae=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let ke=!1;ae.length!==O.cameras.length&&(O.cameras.length=0,ke=!0);for(let Ye=0;Ye<ae.length;Ye++){const Z=ae[Ye];let ie=null;if(f!==null)ie=f.getViewport(Z);else{const me=h.getViewSubImage(d,Z);ie=me.viewport,Ye===0&&(e.setRenderTargetTextures(M,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(M))}let ee=C[Ye];ee===void 0&&(ee=new on,ee.layers.enable(Ye),ee.viewport=new At,C[Ye]=ee),ee.matrix.fromArray(Z.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Z.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ie.x,ie.y,ie.width,ie.height),Ye===0&&(O.matrix.copy(ee.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),ke===!0&&O.cameras.push(ee)}const Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const Ye=h.getDepthInformation(ae[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,s.renderState)}if(Ue&&Ue.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let Ye=0;Ye<ae.length;Ye++){const Z=ae[Ye].camera;if(Z){let ie=g[Z];ie||(ie=new gp,g[Z]=ie);const ee=h.getCameraImage(Z);ie.sourceTexture=ee}}}}for(let ae=0;ae<w.length;ae++){const ke=A[ae],Ue=w[ae];ke!==null&&Ue!==void 0&&Ue.update(ke,oe,c||o)}Ge&&Ge($,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),p=null}const at=new Dp;at.setAnimationLoop(lt),this.setAnimationLoop=function($){Ge=$},this.dispose=function(){}}}const ys=new Gn,RS=new Je;function CS(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,wp(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,S,M){g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===pn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===pn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const y=e.get(g),S=y.envMap,M=y.envMapRotation;S&&(m.envMap.value=S,ys.copy(M),ys.x*=-1,ys.y*=-1,ys.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),m.envMapRotation.value.setFromMatrix4(RS.makeRotationFromEuler(ys)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function PS(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const M=S.program;n.uniformBlockBinding(y,M)}function c(y,S){let M=s[y.id];M===void 0&&(p(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",m));const w=S.program;n.updateUBOMapping(y,w);const A=e.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function u(y){const S=h();y.__bindingPointIndex=S;const M=i.createBuffer(),w=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=s[y.id],M=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,P=M.length;A<P;A++){const _=Array.isArray(M[A])?M[A]:[M[A]];for(let E=0,z=_.length;E<z;E++){const C=_[E];if(f(C,A,E,w)===!0){const O=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let F=0;F<k.length;F++){const V=k[F],N=x(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,O+X,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,X),X+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,S,M,w){const A=y.value,P=S+"_"+M;if(w[P]===void 0)return typeof A=="number"||typeof A=="boolean"?w[P]=A:w[P]=A.clone(),!0;{const _=w[P];if(typeof A=="number"||typeof A=="boolean"){if(_!==A)return w[P]=A,!0}else if(_.equals(A)===!1)return _.copy(A),!0}return!1}function p(y){const S=y.uniforms;let M=0;const w=16;for(let P=0,_=S.length;P<_;P++){const E=Array.isArray(S[P])?S[P]:[S[P]];for(let z=0,C=E.length;z<C;z++){const O=E[z],k=Array.isArray(O.value)?O.value:[O.value];for(let X=0,F=k.length;X<F;X++){const V=k[X],N=x(V),Q=M%w,K=Q%N.boundary,fe=Q+K;M+=K,fe!==0&&w-fe<N.storage&&(M+=w-fe),O.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=N.storage}}}const A=M%w;return A>0&&(M+=w-A),y.__size=M,y.__cache={},this}function x(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):De("WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}const LS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ei=null;function IS(){return ei===null&&(ei=new Zu(LS,16,16,Or,ki),ei.name="DFG_LUT",ei.minFilter=zt,ei.magFilter=zt,ei.wrapS=oi,ei.wrapT=oi,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}class DS{constructor(e={}){const{canvas:t=Rg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Mn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=f,m=new Set([Xu,Hu,Gu]),g=new Set([Mn,di,So,bo,zu,ku]),y=new Uint32Array(4),S=new Int32Array(4);let M=null,w=null;const A=[],P=[];let _=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let z=!1;this._outputColorSpace=Wt;let C=0,O=0,k=null,X=-1,F=null;const V=new At,N=new At;let Q=null;const K=new ze(0);let fe=0,xe=t.width,pe=t.height,Ge=1,lt=null,at=null;const $=new At(0,0,xe,pe),oe=new At(0,0,xe,pe);let ae=!1;const ke=new eh;let Ue=!1,We=!1;const ut=new Je,Ye=new L,Z=new At,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function me(){return k===null?Ge:1}let R=n;function Ve(b,U){return t.getContext(b,U)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ou}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",St,!1),R===null){const U="webgl2";if(R=Ve(U,b),R===null)throw Ve(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw qe("WebGLRenderer: "+b.message),b}let ye,He,ue,T,v,D,q,J,j,Ee,he,Oe,Xe,ne,le,Ae,Ce,Me,tt,I,de,ce,be;function se(){ye=new Dy(R),ye.init(),de=new bS(R,ye),He=new Ty(R,ye,e,de),ue=new MS(R,ye),He.reversedDepthBuffer&&d&&ue.buffers.depth.setReversed(!0),T=new Oy(R),v=new aS,D=new SS(R,ye,ue,v,He,de,T),q=new Iy(E),J=new Vx(R),ce=new by(R,J),j=new Ny(R,J,T,ce),Ee=new By(R,j,J,ce,T),Me=new Fy(R,He,D),le=new wy(v),he=new oS(E,q,ye,He,ce,le),Oe=new CS(E,v),Xe=new cS,ne=new mS(ye),Ce=new Sy(E,q,ue,Ee,p,l),Ae=new yS(E,Ee,He),be=new PS(R,T,He,ue),tt=new Ey(R,ye,T),I=new Uy(R,ye,T),T.programs=he.programs,E.capabilities=He,E.extensions=ye,E.properties=v,E.renderLists=Xe,E.shadowMap=Ae,E.state=ue,E.info=T}se(),x!==Mn&&(_=new ky(x,t.width,t.height,s,r));const Y=new AS(E,R);this.xr=Y,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=ye.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ye.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ge},this.setPixelRatio=function(b){b!==void 0&&(Ge=b,this.setSize(xe,pe,!1))},this.getSize=function(b){return b.set(xe,pe)},this.setSize=function(b,U,W=!0){if(Y.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=b,pe=U,t.width=Math.floor(b*Ge),t.height=Math.floor(U*Ge),W===!0&&(t.style.width=b+"px",t.style.height=U+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(xe*Ge,pe*Ge).floor()},this.setDrawingBufferSize=function(b,U,W){xe=b,pe=U,Ge=W,t.width=Math.floor(b*W),t.height=Math.floor(U*W),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(x===Mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(V)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,U,W,H){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,U,W,H),ue.viewport(V.copy($).multiplyScalar(Ge).round())},this.getScissor=function(b){return b.copy(oe)},this.setScissor=function(b,U,W,H){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,U,W,H),ue.scissor(N.copy(oe).multiplyScalar(Ge).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(b){ue.setScissorTest(ae=b)},this.setOpaqueSort=function(b){lt=b},this.setTransparentSort=function(b){at=b},this.getClearColor=function(b){return b.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,W=!0){let H=0;if(b){let G=!1;if(k!==null){const _e=k.texture.format;G=m.has(_e)}if(G){const _e=k.texture.type,Se=g.has(_e),ve=Ce.getClearColor(),Pe=Ce.getClearAlpha(),Ne=ve.r,Ze=ve.g,nt=ve.b;Se?(y[0]=Ne,y[1]=Ze,y[2]=nt,y[3]=Pe,R.clearBufferuiv(R.COLOR,0,y)):(S[0]=Ne,S[1]=Ze,S[2]=nt,S[3]=Pe,R.clearBufferiv(R.COLOR,0,S))}else H|=R.COLOR_BUFFER_BIT}U&&(H|=R.DEPTH_BUFFER_BIT),W&&(H|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",St,!1),Ce.dispose(),Xe.dispose(),ne.dispose(),v.dispose(),q.dispose(),Ee.dispose(),ce.dispose(),be.dispose(),he.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Ch),Y.removeEventListener("sessionend",Ph),fs.stop()};function Re(b){b.preventDefault(),$a("WebGLRenderer: Context Lost."),z=!0}function Ke(){$a("WebGLRenderer: Context Restored."),z=!1;const b=T.autoReset,U=Ae.enabled,W=Ae.autoUpdate,H=Ae.needsUpdate,G=Ae.type;se(),T.autoReset=b,Ae.enabled=U,Ae.autoUpdate=W,Ae.needsUpdate=H,Ae.type=G}function St(b){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function mt(b){const U=b.target;U.removeEventListener("dispose",mt),Mi(U)}function Mi(b){Si(b),v.remove(b)}function Si(b){const U=v.get(b).programs;U!==void 0&&(U.forEach(function(W){he.releaseProgram(W)}),b.isShaderMaterial&&he.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,W,H,G,_e){U===null&&(U=ie);const Se=G.isMesh&&G.matrixWorld.determinant()<0,ve=Vm(b,U,W,H,G);ue.setMaterial(H,Se);let Pe=W.index,Ne=1;if(H.wireframe===!0){if(Pe=j.getWireframeAttribute(W),Pe===void 0)return;Ne=2}const Ze=W.drawRange,nt=W.attributes.position;let Fe=Ze.start*Ne,vt=(Ze.start+Ze.count)*Ne;_e!==null&&(Fe=Math.max(Fe,_e.start*Ne),vt=Math.min(vt,(_e.start+_e.count)*Ne)),Pe!==null?(Fe=Math.max(Fe,0),vt=Math.min(vt,Pe.count)):nt!=null&&(Fe=Math.max(Fe,0),vt=Math.min(vt,nt.count));const Nt=vt-Fe;if(Nt<0||Nt===1/0)return;ce.setup(G,H,ve,W,Pe);let Pt,yt=tt;if(Pe!==null&&(Pt=J.get(Pe),yt=I,yt.setIndex(Pt)),G.isMesh)H.wireframe===!0?(ue.setLineWidth(H.wireframeLinewidth*me()),yt.setMode(R.LINES)):yt.setMode(R.TRIANGLES);else if(G.isLine){let Jt=H.linewidth;Jt===void 0&&(Jt=1),ue.setLineWidth(Jt*me()),G.isLineSegments?yt.setMode(R.LINES):G.isLineLoop?yt.setMode(R.LINE_LOOP):yt.setMode(R.LINE_STRIP)}else G.isPoints?yt.setMode(R.POINTS):G.isSprite&&yt.setMode(R.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Ka("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))yt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Jt=G._multiDrawStarts,Le=G._multiDrawCounts,gn=G._multiDrawCount,ct=Pe?J.get(Pe).bytesPerElement:1,Un=v.get(H).currentProgram.getUniforms();for(let Jn=0;Jn<gn;Jn++)Un.setValue(R,"_gl_DrawID",Jn),yt.render(Jt[Jn]/ct,Le[Jn])}else if(G.isInstancedMesh)yt.renderInstances(Fe,Nt,G.count);else if(W.isInstancedBufferGeometry){const Jt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Le=Math.min(W.instanceCount,Jt);yt.renderInstances(Fe,Nt,Le)}else yt.render(Fe,Nt)};function Rh(b,U,W){b.transparent===!0&&b.side===an&&b.forceSinglePass===!1?(b.side=pn,b.needsUpdate=!0,$o(b,U,W),b.side=zi,b.needsUpdate=!0,$o(b,U,W),b.side=an):$o(b,U,W)}this.compile=function(b,U,W=null){W===null&&(W=b),w=ne.get(W),w.init(U),P.push(w),W.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),b!==W&&b.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights();const H=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const _e=G.material;if(_e)if(Array.isArray(_e))for(let Se=0;Se<_e.length;Se++){const ve=_e[Se];Rh(ve,W,G),H.add(ve)}else Rh(_e,W,G),H.add(_e)}),w=P.pop(),H},this.compileAsync=function(b,U,W=null){const H=this.compile(b,U,W);return new Promise(G=>{function _e(){if(H.forEach(function(Se){v.get(Se).currentProgram.isReady()&&H.delete(Se)}),H.size===0){G(b);return}setTimeout(_e,10)}ye.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let wl=null;function km(b){wl&&wl(b)}function Ch(){fs.stop()}function Ph(){fs.start()}const fs=new Dp;fs.setAnimationLoop(km),typeof self<"u"&&fs.setContext(self),this.setAnimationLoop=function(b){wl=b,Y.setAnimationLoop(b),b===null?fs.stop():fs.start()},Y.addEventListener("sessionstart",Ch),Y.addEventListener("sessionend",Ph),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;const W=Y.enabled===!0&&Y.isPresenting===!0,H=_!==null&&(k===null||W)&&_.begin(E,k);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(E,b,U,k),w=ne.get(b,P.length),w.init(U),P.push(w),ut.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ke.setFromProjectionMatrix(ut,ai,U.reversedDepth),We=this.localClippingEnabled,Ue=le.init(this.clippingPlanes,We),M=Xe.get(b,A.length),M.init(),A.push(M),Y.enabled===!0&&Y.isPresenting===!0){const Se=E.xr.getDepthSensingMesh();Se!==null&&Al(Se,U,-1/0,E.sortObjects)}Al(b,U,0,E.sortObjects),M.finish(),E.sortObjects===!0&&M.sort(lt,at),ee=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,ee&&Ce.addToRenderList(M,b),this.info.render.frame++,Ue===!0&&le.beginShadows();const G=w.state.shadowsArray;if(Ae.render(G,b,U),Ue===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&_.hasRenderPass())===!1){const Se=M.opaque,ve=M.transmissive;if(w.setupLights(),U.isArrayCamera){const Pe=U.cameras;if(ve.length>0)for(let Ne=0,Ze=Pe.length;Ne<Ze;Ne++){const nt=Pe[Ne];Ih(Se,ve,b,nt)}ee&&Ce.render(b);for(let Ne=0,Ze=Pe.length;Ne<Ze;Ne++){const nt=Pe[Ne];Lh(M,b,nt,nt.viewport)}}else ve.length>0&&Ih(Se,ve,b,U),ee&&Ce.render(b),Lh(M,b,U)}k!==null&&O===0&&(D.updateMultisampleRenderTarget(k),D.updateRenderTargetMipmap(k)),H&&_.end(E),b.isScene===!0&&b.onAfterRender(E,b,U),ce.resetDefaultState(),X=-1,F=null,P.pop(),P.length>0?(w=P[P.length-1],Ue===!0&&le.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function Al(b,U,W,H){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ke.intersectsSprite(b)){H&&Z.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ut);const Se=Ee.update(b),ve=b.material;ve.visible&&M.push(b,Se,ve,W,Z.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ke.intersectsObject(b))){const Se=Ee.update(b),ve=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Z.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Z.copy(Se.boundingSphere.center)),Z.applyMatrix4(b.matrixWorld).applyMatrix4(ut)),Array.isArray(ve)){const Pe=Se.groups;for(let Ne=0,Ze=Pe.length;Ne<Ze;Ne++){const nt=Pe[Ne],Fe=ve[nt.materialIndex];Fe&&Fe.visible&&M.push(b,Se,Fe,W,Z.z,nt)}}else ve.visible&&M.push(b,Se,ve,W,Z.z,null)}}const _e=b.children;for(let Se=0,ve=_e.length;Se<ve;Se++)Al(_e[Se],U,W,H)}function Lh(b,U,W,H){const{opaque:G,transmissive:_e,transparent:Se}=b;w.setupLightsView(W),Ue===!0&&le.setGlobalState(E.clippingPlanes,W),H&&ue.viewport(V.copy(H)),G.length>0&&Yo(G,U,W),_e.length>0&&Yo(_e,U,W),Se.length>0&&Yo(Se,U,W),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Ih(b,U,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){const Fe=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new Vn(1,1,{generateMipmaps:!0,type:Fe?ki:Mn,minFilter:Li,samples:Math.max(4,He.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const _e=w.state.transmissionRenderTarget[H.id],Se=H.viewport||V;_e.setSize(Se.z*E.transmissionResolutionScale,Se.w*E.transmissionResolutionScale);const ve=E.getRenderTarget(),Pe=E.getActiveCubeFace(),Ne=E.getActiveMipmapLevel();E.setRenderTarget(_e),E.getClearColor(K),fe=E.getClearAlpha(),fe<1&&E.setClearColor(16777215,.5),E.clear(),ee&&Ce.render(W);const Ze=E.toneMapping;E.toneMapping=ui;const nt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),Ue===!0&&le.setGlobalState(E.clippingPlanes,H),Yo(b,W,H),D.updateMultisampleRenderTarget(_e),D.updateRenderTargetMipmap(_e),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let vt=0,Nt=U.length;vt<Nt;vt++){const Pt=U[vt],{object:yt,geometry:Jt,material:Le,group:gn}=Pt;if(Le.side===an&&yt.layers.test(H.layers)){const ct=Le.side;Le.side=pn,Le.needsUpdate=!0,Dh(yt,W,H,Jt,Le,gn),Le.side=ct,Le.needsUpdate=!0,Fe=!0}}Fe===!0&&(D.updateMultisampleRenderTarget(_e),D.updateRenderTargetMipmap(_e))}E.setRenderTarget(ve,Pe,Ne),E.setClearColor(K,fe),nt!==void 0&&(H.viewport=nt),E.toneMapping=Ze}function Yo(b,U,W){const H=U.isScene===!0?U.overrideMaterial:null;for(let G=0,_e=b.length;G<_e;G++){const Se=b[G],{object:ve,geometry:Pe,group:Ne}=Se;let Ze=Se.material;Ze.allowOverride===!0&&H!==null&&(Ze=H),ve.layers.test(W.layers)&&Dh(ve,U,W,Pe,Ze,Ne)}}function Dh(b,U,W,H,G,_e){b.onBeforeRender(E,U,W,H,G,_e),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(E,U,W,H,b,_e),G.transparent===!0&&G.side===an&&G.forceSinglePass===!1?(G.side=pn,G.needsUpdate=!0,E.renderBufferDirect(W,U,H,G,b,_e),G.side=zi,G.needsUpdate=!0,E.renderBufferDirect(W,U,H,G,b,_e),G.side=an):E.renderBufferDirect(W,U,H,G,b,_e),b.onAfterRender(E,U,W,H,G,_e)}function $o(b,U,W){U.isScene!==!0&&(U=ie);const H=v.get(b),G=w.state.lights,_e=w.state.shadowsArray,Se=G.state.version,ve=he.getParameters(b,G.state,_e,U,W),Pe=he.getProgramCacheKey(ve);let Ne=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;const Ze=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=q.get(b.envMap||H.environment,Ze),H.envMapRotation=H.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ne===void 0&&(b.addEventListener("dispose",mt),Ne=new Map,H.programs=Ne);let nt=Ne.get(Pe);if(nt!==void 0){if(H.currentProgram===nt&&H.lightsStateVersion===Se)return Uh(b,ve),nt}else ve.uniforms=he.getUniforms(b),b.onBeforeCompile(ve,E),nt=he.acquireProgram(ve,Pe),Ne.set(Pe,nt),H.uniforms=ve.uniforms;const Fe=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=le.uniform),Uh(b,ve),H.needsLights=Hm(b),H.lightsStateVersion=Se,H.needsLights&&(Fe.ambientLightColor.value=G.state.ambient,Fe.lightProbe.value=G.state.probe,Fe.directionalLights.value=G.state.directional,Fe.directionalLightShadows.value=G.state.directionalShadow,Fe.spotLights.value=G.state.spot,Fe.spotLightShadows.value=G.state.spotShadow,Fe.rectAreaLights.value=G.state.rectArea,Fe.ltc_1.value=G.state.rectAreaLTC1,Fe.ltc_2.value=G.state.rectAreaLTC2,Fe.pointLights.value=G.state.point,Fe.pointLightShadows.value=G.state.pointShadow,Fe.hemisphereLights.value=G.state.hemi,Fe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Fe.spotLightMatrix.value=G.state.spotLightMatrix,Fe.spotLightMap.value=G.state.spotLightMap,Fe.pointShadowMatrix.value=G.state.pointShadowMatrix),H.currentProgram=nt,H.uniformsList=null,nt}function Nh(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Ga.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Uh(b,U){const W=v.get(b);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Vm(b,U,W,H,G){U.isScene!==!0&&(U=ie),D.resetTextureUnits();const _e=U.fog,Se=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,ve=k===null?E.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:cn,Pe=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ne=q.get(H.envMap||Se,Pe),Ze=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,nt=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Fe=!!W.morphAttributes.position,vt=!!W.morphAttributes.normal,Nt=!!W.morphAttributes.color;let Pt=ui;H.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Pt=E.toneMapping);const yt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Jt=yt!==void 0?yt.length:0,Le=v.get(H),gn=w.state.lights;if(Ue===!0&&(We===!0||b!==F)){const Ht=b===F&&H.id===X;le.setState(H,b,Ht)}let ct=!1;H.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==gn.state.version||Le.outputColorSpace!==ve||G.isBatchedMesh&&Le.batching===!1||!G.isBatchedMesh&&Le.batching===!0||G.isBatchedMesh&&Le.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Le.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Le.instancing===!1||!G.isInstancedMesh&&Le.instancing===!0||G.isSkinnedMesh&&Le.skinning===!1||!G.isSkinnedMesh&&Le.skinning===!0||G.isInstancedMesh&&Le.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Le.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Le.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Le.instancingMorph===!1&&G.morphTexture!==null||Le.envMap!==Ne||H.fog===!0&&Le.fog!==_e||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==le.numPlanes||Le.numIntersection!==le.numIntersection)||Le.vertexAlphas!==Ze||Le.vertexTangents!==nt||Le.morphTargets!==Fe||Le.morphNormals!==vt||Le.morphColors!==Nt||Le.toneMapping!==Pt||Le.morphTargetsCount!==Jt)&&(ct=!0):(ct=!0,Le.__version=H.version);let Un=Le.currentProgram;ct===!0&&(Un=$o(H,U,G));let Jn=!1,ps=!1,Ys=!1;const Mt=Un.getUniforms(),Yt=Le.uniforms;if(ue.useProgram(Un.program)&&(Jn=!0,ps=!0,Ys=!0),H.id!==X&&(X=H.id,ps=!0),Jn||F!==b){ue.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Mt.setValue(R,"projectionMatrix",b.projectionMatrix),Mt.setValue(R,"viewMatrix",b.matrixWorldInverse);const ji=Mt.map.cameraPosition;ji!==void 0&&ji.setValue(R,Ye.setFromMatrixPosition(b.matrixWorld)),He.logarithmicDepthBuffer&&Mt.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Mt.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),F!==b&&(F=b,ps=!0,Ys=!0)}if(Le.needsLights&&(gn.state.directionalShadowMap.length>0&&Mt.setValue(R,"directionalShadowMap",gn.state.directionalShadowMap,D),gn.state.spotShadowMap.length>0&&Mt.setValue(R,"spotShadowMap",gn.state.spotShadowMap,D),gn.state.pointShadowMap.length>0&&Mt.setValue(R,"pointShadowMap",gn.state.pointShadowMap,D)),G.isSkinnedMesh){Mt.setOptional(R,G,"bindMatrix"),Mt.setOptional(R,G,"bindMatrixInverse");const Ht=G.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Mt.setValue(R,"boneTexture",Ht.boneTexture,D))}G.isBatchedMesh&&(Mt.setOptional(R,G,"batchingTexture"),Mt.setValue(R,"batchingTexture",G._matricesTexture,D),Mt.setOptional(R,G,"batchingIdTexture"),Mt.setValue(R,"batchingIdTexture",G._indirectTexture,D),Mt.setOptional(R,G,"batchingColorTexture"),G._colorsTexture!==null&&Mt.setValue(R,"batchingColorTexture",G._colorsTexture,D));const qi=W.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0)&&Me.update(G,W,Un),(ps||Le.receiveShadow!==G.receiveShadow)&&(Le.receiveShadow=G.receiveShadow,Mt.setValue(R,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(Yt.envMapIntensity.value=U.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=IS()),ps&&(Mt.setValue(R,"toneMappingExposure",E.toneMappingExposure),Le.needsLights&&Gm(Yt,Ys),_e&&H.fog===!0&&Oe.refreshFogUniforms(Yt,_e),Oe.refreshMaterialUniforms(Yt,H,Ge,pe,w.state.transmissionRenderTarget[b.id]),Ga.upload(R,Nh(Le),Yt,D)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ga.upload(R,Nh(Le),Yt,D),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Mt.setValue(R,"center",G.center),Mt.setValue(R,"modelViewMatrix",G.modelViewMatrix),Mt.setValue(R,"normalMatrix",G.normalMatrix),Mt.setValue(R,"modelMatrix",G.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ht=H.uniformsGroups;for(let ji=0,$s=Ht.length;ji<$s;ji++){const Oh=Ht[ji];be.update(Oh,Un),be.bind(Oh,Un)}}return Un}function Gm(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Hm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,U,W){const H=v.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),v.get(b.texture).__webglTexture=U,v.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const W=v.get(b);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const Xm=R.createFramebuffer();this.setRenderTarget=function(b,U=0,W=0){k=b,C=U,O=W;let H=null,G=!1,_e=!1;if(b){const ve=v.get(b);if(ve.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(R.FRAMEBUFFER,ve.__webglFramebuffer),V.copy(b.viewport),N.copy(b.scissor),Q=b.scissorTest,ue.viewport(V),ue.scissor(N),ue.setScissorTest(Q),X=-1;return}else if(ve.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(ve.__hasExternalTextures)D.rebindTextures(b,v.get(b.texture).__webglTexture,v.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ze=b.depthTexture;if(ve.__boundDepthTexture!==Ze){if(Ze!==null&&v.has(Ze)&&(b.width!==Ze.image.width||b.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const Pe=b.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(_e=!0);const Ne=v.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?H=Ne[U][W]:H=Ne[U],G=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?H=v.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?H=Ne[W]:H=Ne,V.copy(b.viewport),N.copy(b.scissor),Q=b.scissorTest}else V.copy($).multiplyScalar(Ge).floor(),N.copy(oe).multiplyScalar(Ge).floor(),Q=ae;if(W!==0&&(H=Xm),ue.bindFramebuffer(R.FRAMEBUFFER,H)&&ue.drawBuffers(b,H),ue.viewport(V),ue.scissor(N),ue.setScissorTest(Q),G){const ve=v.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,W)}else if(_e){const ve=U;for(let Pe=0;Pe<b.textures.length;Pe++){const Ne=v.get(b.textures[Pe]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Pe,Ne.__webglTexture,W,ve)}}else if(b!==null&&W!==0){const ve=v.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ve.__webglTexture,W)}X=-1},this.readRenderTargetPixels=function(b,U,W,H,G,_e,Se,ve=0){if(!(b&&b.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=v.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Pe=Pe[Se]),Pe){ue.bindFramebuffer(R.FRAMEBUFFER,Pe);try{const Ne=b.textures[ve],Ze=Ne.format,nt=Ne.type;if(b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ve),!He.textureFormatReadable(Ze)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(nt)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-H&&W>=0&&W<=b.height-G&&R.readPixels(U,W,H,G,de.convert(Ze),de.convert(nt),_e)}finally{const Ne=k!==null?v.get(k).__webglFramebuffer:null;ue.bindFramebuffer(R.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(b,U,W,H,G,_e,Se,ve=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=v.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Pe=Pe[Se]),Pe)if(U>=0&&U<=b.width-H&&W>=0&&W<=b.height-G){ue.bindFramebuffer(R.FRAMEBUFFER,Pe);const Ne=b.textures[ve],Ze=Ne.format,nt=Ne.type;if(b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ve),!He.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Fe),R.bufferData(R.PIXEL_PACK_BUFFER,_e.byteLength,R.STREAM_READ),R.readPixels(U,W,H,G,de.convert(Ze),de.convert(nt),0);const vt=k!==null?v.get(k).__webglFramebuffer:null;ue.bindFramebuffer(R.FRAMEBUFFER,vt);const Nt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Cg(R,Nt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Fe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,_e),R.deleteBuffer(Fe),R.deleteSync(Nt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,W=0){const H=Math.pow(2,-W),G=Math.floor(b.image.width*H),_e=Math.floor(b.image.height*H),Se=U!==null?U.x:0,ve=U!==null?U.y:0;D.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,W,0,0,Se,ve,G,_e),ue.unbindTexture()};const Wm=R.createFramebuffer(),qm=R.createFramebuffer();this.copyTextureToTexture=function(b,U,W=null,H=null,G=0,_e=0){let Se,ve,Pe,Ne,Ze,nt,Fe,vt,Nt;const Pt=b.isCompressedTexture?b.mipmaps[_e]:b.image;if(W!==null)Se=W.max.x-W.min.x,ve=W.max.y-W.min.y,Pe=W.isBox3?W.max.z-W.min.z:1,Ne=W.min.x,Ze=W.min.y,nt=W.isBox3?W.min.z:0;else{const Yt=Math.pow(2,-G);Se=Math.floor(Pt.width*Yt),ve=Math.floor(Pt.height*Yt),b.isDataArrayTexture?Pe=Pt.depth:b.isData3DTexture?Pe=Math.floor(Pt.depth*Yt):Pe=1,Ne=0,Ze=0,nt=0}H!==null?(Fe=H.x,vt=H.y,Nt=H.z):(Fe=0,vt=0,Nt=0);const yt=de.convert(U.format),Jt=de.convert(U.type);let Le;U.isData3DTexture?(D.setTexture3D(U,0),Le=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(D.setTexture2DArray(U,0),Le=R.TEXTURE_2D_ARRAY):(D.setTexture2D(U,0),Le=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const gn=R.getParameter(R.UNPACK_ROW_LENGTH),ct=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Un=R.getParameter(R.UNPACK_SKIP_PIXELS),Jn=R.getParameter(R.UNPACK_SKIP_ROWS),ps=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Pt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Pt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ne),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ze),R.pixelStorei(R.UNPACK_SKIP_IMAGES,nt);const Ys=b.isDataArrayTexture||b.isData3DTexture,Mt=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const Yt=v.get(b),qi=v.get(U),Ht=v.get(Yt.__renderTarget),ji=v.get(qi.__renderTarget);ue.bindFramebuffer(R.READ_FRAMEBUFFER,Ht.__webglFramebuffer),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let $s=0;$s<Pe;$s++)Ys&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,v.get(b).__webglTexture,G,nt+$s),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,v.get(U).__webglTexture,_e,Nt+$s)),R.blitFramebuffer(Ne,Ze,Se,ve,Fe,vt,Se,ve,R.DEPTH_BUFFER_BIT,R.NEAREST);ue.bindFramebuffer(R.READ_FRAMEBUFFER,null),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||v.has(b)){const Yt=v.get(b),qi=v.get(U);ue.bindFramebuffer(R.READ_FRAMEBUFFER,Wm),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,qm);for(let Ht=0;Ht<Pe;Ht++)Ys?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Yt.__webglTexture,G,nt+Ht):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Yt.__webglTexture,G),Mt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,qi.__webglTexture,_e,Nt+Ht):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,qi.__webglTexture,_e),G!==0?R.blitFramebuffer(Ne,Ze,Se,ve,Fe,vt,Se,ve,R.COLOR_BUFFER_BIT,R.NEAREST):Mt?R.copyTexSubImage3D(Le,_e,Fe,vt,Nt+Ht,Ne,Ze,Se,ve):R.copyTexSubImage2D(Le,_e,Fe,vt,Ne,Ze,Se,ve);ue.bindFramebuffer(R.READ_FRAMEBUFFER,null),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Mt?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(Le,_e,Fe,vt,Nt,Se,ve,Pe,yt,Jt,Pt.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(Le,_e,Fe,vt,Nt,Se,ve,Pe,yt,Pt.data):R.texSubImage3D(Le,_e,Fe,vt,Nt,Se,ve,Pe,yt,Jt,Pt):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,_e,Fe,vt,Se,ve,yt,Jt,Pt.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,_e,Fe,vt,Pt.width,Pt.height,yt,Pt.data):R.texSubImage2D(R.TEXTURE_2D,_e,Fe,vt,Se,ve,yt,Jt,Pt);R.pixelStorei(R.UNPACK_ROW_LENGTH,gn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ct),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Un),R.pixelStorei(R.UNPACK_SKIP_ROWS,Jn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ps),_e===0&&U.generateMipmaps&&R.generateMipmap(Le),ue.unbindTexture()},this.initRenderTarget=function(b){v.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),ue.unbindTexture()},this.resetState=function(){C=0,O=0,k=null,ue.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}function NS(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Dt;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=af(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);const p=af(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function af(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new qt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){const x=u.getComponent(d,p);a.setComponent(d+h,p,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function lf(i,e){if(e===xg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===gu||e===ep){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===gu)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function US(i){const e=new Map,t=new Map,n=i.clone();return zp(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function zp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)zp(i.children[n],e.children[n],t)}class OS extends Yr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new VS(t)}),this.register(function(t){return new GS(t)}),this.register(function(t){return new ZS(t)}),this.register(function(t){return new JS(t)}),this.register(function(t){return new QS(t)}),this.register(function(t){return new XS(t)}),this.register(function(t){return new WS(t)}),this.register(function(t){return new qS(t)}),this.register(function(t){return new jS(t)}),this.register(function(t){return new kS(t)}),this.register(function(t){return new YS(t)}),this.register(function(t){return new HS(t)}),this.register(function(t){return new KS(t)}),this.register(function(t){return new $S(t)}),this.register(function(t){return new BS(t)}),this.register(function(t){return new cf(t,st.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new cf(t,st.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new eb(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=yo.extractUrlBase(e);o=yo.resolveURL(c,this.path)}else o=yo.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Pp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===kp){try{o[st.KHR_BINARY_GLTF]=new tb(e)}catch(h){s&&s(h);return}r=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new pb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case st.KHR_MATERIALS_UNLIT:o[h]=new zS;break;case st.KHR_DRACO_MESH_COMPRESSION:o[h]=new nb(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[h]=new ib;break;case st.KHR_MESH_QUANTIZATION:o[h]=new sb;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function FS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Ot(i,e,t){const n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class BS{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new ze(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],cn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ip(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ex(u),c.distance=h;break;case"spot":c=new Sx(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ti(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class zS{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return Rt}extendParams(e,t,n){const s=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],cn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Wt))}return Promise.all(s)}}class kS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Ot(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class VS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?vi:null}extendMaterialParams(e,t){const n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(r,r)}return Promise.all(s)}}class GS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?vi:null}extendMaterialParams(e,t){const n=Ot(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class HS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?vi:null}extendMaterialParams(e,t){const n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class XS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?vi:null}extendMaterialParams(e,t){const n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],cn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Wt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class WS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?vi:null}extendMaterialParams(e,t){const n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class qS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?vi:null}extendMaterialParams(e,t){const n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(r[0],r[1],r[2],cn),Promise.all(s)}}class jS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?vi:null}extendMaterialParams(e,t){const n=Ot(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class YS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?vi:null}extendMaterialParams(e,t){const n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(r[0],r[1],r[2],cn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Wt)),Promise.all(s)}}class $S{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?vi:null}extendMaterialParams(e,t){const n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}}class KS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?vi:null}extendMaterialParams(e,t){const n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class ZS{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class JS{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class QS{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class cf{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class eb{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==wn.TRIANGLES&&c.mode!==wn.TRIANGLE_STRIP&&c.mode!==wn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const p of h){const x=new Je,m=new L,g=new mi,y=new L(1,1,1),S=new Qu(p.geometry,p.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,M),l.SCALE&&y.fromBufferAttribute(l.SCALE,M),S.setMatrixAt(M,x.compose(m,g,y));for(const M in l)if(M==="_COLOR_0"){const w=l[M];S.instanceColor=new _u(w.array,w.itemSize,w.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&p.geometry.setAttribute(M,l[M]);bt.prototype.copy.call(S,p),this.parser.assignFinalMaterial(S),f.push(S)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const kp="glTF",uo=12,uf={JSON:1313821514,BIN:5130562};class tb{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,uo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-uo,r=new DataView(e,uo);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===uf.JSON){const c=new Uint8Array(e,uo+o,a);this.content=n.decode(c)}else if(l===uf.BIN){const c=uo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class nb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Tu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Tu[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Tr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const p in f.attributes){const x=f.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}h(f)},a,c,cn,d)})})}}class ib{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class sb{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class Vp extends Wr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,p=e*c,x=p-c,m=-2*f+3*d,g=f-d,y=1-m,S=g-d+h;for(let M=0;M!==a;M++){const w=o[x+M+a],A=o[x+M+l]*u,P=o[p+M+a],_=o[p+M]*u;r[M]=y*w+S*A+m*P+g*_}return r}}const rb=new mi;class ob extends Vp{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return rb.fromArray(r).normalize().toArray(r),r}}const wn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Tr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hf={9728:Ut,9729:zt,9984:jf,9985:Fa,9986:po,9987:Li},df={33071:oi,33648:ja,10497:Ur},mc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Tu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},es={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ab={CUBICSPLINE:void 0,LINEAR:To,STEP:Eo},gc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function lb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new rh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zi})),i.DefaultMaterial}function Ms(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ti(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cb(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function ub(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hb(i){let e;const t=i.extensions&&i.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xc(t.attributes):e=i.indices+":"+xc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+xc(i.targets[n]);return e}function xc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function wu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function db(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const fb=new Je;class pb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new FS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new yx(this.options.manager):this.textureLoader=new Ax(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Pp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ms(r,a,s),ti(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(yo.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=mc[s.type],a=Tr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new qt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=mc[s.type],c=Tr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0;let x,m;if(f&&f!==h){const g=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count;let S=t.cache.get(y);S||(x=new c(a,g*f,s.count*f/u),S=new cp(x,f/u),t.cache.add(y,S)),m=new Ro(S,l,d%f/u,p)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),m=new qt(x,l,p);if(s.sparse!==void 0){const g=mc.SCALAR,y=Tr[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,w=new y(o[1],S,s.sparse.count*g),A=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new qt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,_=w.length;P<_;P++){const E=w[P];if(m.setX(E,A[P*l]),l>=2&&m.setY(E,A[P*l+1]),l>=3&&m.setZ(E,A[P*l+2]),l>=4&&m.setW(E,A[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=hf[d.magFilter]||zt,u.minFilter=hf[d.minFilter]||Li,u.wrapS=df[d.wrapS]||Ur,u.wrapT=df[d.wrapT]||Ur,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ut&&u.minFilter!==zt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(x){const m=new kt(x);m.needsUpdate=!0,d(m)}),t.load(yo.resolveURL(h,r.path),p,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),ti(h,o),h.userData.mimeType=o.mimeType||db(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new th,Pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Gi,Pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return rh}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){const h=s[st.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],cn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Wt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=an);const u=r.alphaMode||gc.OPAQUE;if(u===gc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===gc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Rt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Rt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Rt){const h=r.emissiveFactor;a.emissive=new ze().setRGB(h[0],h[1],h[2],cn)}return r.emissiveTexture!==void 0&&o!==Rt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Wt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),ti(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ms(s,h,r),h})}createUniqueName(e){const t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return ff(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=hb(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=ff(new Dt,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?lb(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,p=u.length;f<p;f++){const x=u[f],m=o[f];let g;const y=c[f];if(m.mode===wn.TRIANGLES||m.mode===wn.TRIANGLE_STRIP||m.mode===wn.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new f0(x,y):new pt(x,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===wn.TRIANGLE_STRIP?g.geometry=lf(g.geometry,ep):m.mode===wn.TRIANGLE_FAN&&(g.geometry=lf(g.geometry,gu));else if(m.mode===wn.LINES)g=new Us(x,y);else if(m.mode===wn.LINE_STRIP)g=new al(x,y);else if(m.mode===wn.LINE_LOOP)g=new v0(x,y);else if(m.mode===wn.POINTS)g=new fp(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&ub(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),ti(g,r),m.extensions&&Ms(s,g,m),t.assignFinalMaterial(g),h.push(g)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Ms(s,h[0],r),h[0];const d=new ln;r.extensions&&Ms(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new on(yn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new zo(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ti(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new Je;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ju(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],p=s.samplers[f.sampler],x=f.target,m=x.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,y=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(p),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],p=h[2],x=h[3],m=h[4],g=[];for(let S=0,M=d.length;S<M;S++){const w=d[S],A=f[S],P=p[S],_=x[S],E=m[S];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const z=n._createAnimationTracks(w,A,P,_,E);if(z)for(let C=0;C<z.length;C++)g.push(z[C])}const y=new fx(r,void 0,g);return ti(y,s),y})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,fb)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){const f=u.userData.pivot,p=h[0];u.pivot=new L().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new dp:c.length>1?u=new ln:c.length===1?u=c[0]:u=new bt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ti(u,r),r.extensions&&Ms(n,u,r),r.matrix!==void 0){const h=new Je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new ln;n.name&&(r.name=s.createUniqueName(n.name)),ti(r,n),n.extensions&&Ms(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){const d=l[u];d.parent!==null?r.add(US(d)):r.add(d)}const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof Pn||d instanceof kt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];es[r.path]===es.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(es[r.path]){case es.weights:c=kr;break;case es.rotation:c=Vr;break;case es.translation:case es.scale:c=Gr;break;default:n.itemSize===1?c=kr:c=Gr;break}const u=s.interpolation!==void 0?ab[s.interpolation]:To,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const p=new c(l[d]+"."+es[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=wu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Vr?ob:Vp;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function mb(i,e,t){const n=e.attributes,s=new gi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const u=wu(Tr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,l=new L;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const x=wu(Tr[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new xi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function ff(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Tu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ot.workingColorSpace!==cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),ti(i,e),mb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?cb(i,e.targets,t):i})}const _c={volume:.3,sampleRate:44100,audioContext:new AudioContext,play:function(...i){return this.playSamples([this.buildSamples(...i)])},playSamples:function(i,e=1,t=1,n=0,s=!1){const r=i.length,o=i[0].length,a=this.audioContext.createBuffer(r,o,this.sampleRate),l=this.audioContext.createBufferSource();i.forEach((h,d)=>a.getChannelData(d).set(h)),l.buffer=a,l.playbackRate.value=t,l.loop=s;const c=this.audioContext.createGain();c.gain.value=this.volume*e,c.connect(this.audioContext.destination);const u=new StereoPannerNode(this.audioContext,{pan:n});return l.connect(u).connect(c),l.start(),l},buildSamples:function(i=1,e=.05,t=220,n=0,s=0,r=.1,o=0,a=1,l=0,c=0,u=0,h=0,d=0,f=0,p=0,x=0,m=0,g=1,y=0,S=0,M=0){let w=this.sampleRate,A=Math.PI*2,P=Math.abs,_=ee=>ee<0?-1:1,E=l*=500*A/w/w,z=t*=(1+e*2*Math.random()-e)*A/w,C=0,O=0,k=0,X=1,F,V=[],N=0,Q=0,K=0,fe,xe=2,pe=A*P(M)*2/w,Ge=Math.cos(pe),lt=Math.sin(pe)/2/xe,at=1+lt,$=-2*Ge/at,oe=(1-lt)/at,ae=(1+_(M)*Ge)/2/at,ke=-(_(M)+Ge)/at,Ue=ae,We=0,ut=0,Ye=0,Z=0;for(n=n*w||9,y*=w,s*=w,r*=w,m*=w,c*=500*A/w**3,p*=A/w,u*=A/w,h*=w,d=d*w|0,i*=this.volume,F=n+y+s+r+m|0;Q<F;V[Q++]=K*i)++k%(x*100|0)||(K=o?o>1?o>2?o>3?o>4?(N/A%1<a/2)*2-1:Math.sin(N**3):Math.max(Math.min(Math.tan(N),1),-1):1-(2*N/A%2+2)%2:1-4*P(Math.round(N/A)-N/A):Math.sin(N),K=(d?1-S+S*Math.sin(A*Q/d):1)*(o>4?K:_(K)*P(K)**a)*(Q<n?Q/n:Q<n+y?1-(Q-n)/y*(1-g):Q<n+y+s?g:Q<F-m?(F-Q-m)/r*g:0),K=m?K/2+(m>Q?0:(Q<F-m?1:(F-Q)/m)*V[Q-m|0]/2/i):K,M&&(K=Z=Ue*We+ke*(We=ut)+ae*(ut=K)-oe*Ye-$*(Ye=Z))),fe=(t+=l+=c)*Math.cos(p*C++),N+=fe+fe*f*Math.sin(Q**5),X&&++X>h&&(t+=u,z+=u,X=0),d&&!(++O%d)&&(t=z,l=E,X||=1);return V},getNote:function(i=0,e=440){return e*2**(i/12)}},gb={hover:[.4,.05,420,,.01,.02,1,2,,,,,,,,,,.5,.01],click:[.6,.05,720,,.01,.05,2,1.8,,,,,,,,,,.6,.02],trail:[.25,.1,180,,.01,.03,2,3,-20,,,,,.2,,,,.4,.01],capture:[.5,.05,320,.01,.06,.14,1,1.4,,,260,.04,,,,,,.7,.05],beep:[.5,.02,880,,.03,.06,2,1.2,,,,,,,,,,.6,.03],explosion:[.8,.2,90,.01,.12,.35,4,1.8,,,,,,1.4,,.2,.1,.6,.18],bounce:[.2,.1,260,,.02,.06,2,2.4,40,,,,,.1,,,,.5,.03],death:[.8,.15,260,.02,.16,.5,3,1.6,-7,,,,,1.1,,.25,.12,.5,.25],victory:[.6,.05,520,.02,.14,.3,1,1.5,,,340,.06,.08,,,,,.8,.1],pickup:[.6,.05,537,.02,.08,.22,1,1.59,-6.98,4.97,,,,,,,,.7,.05],collapse:[.55,.15,150,.01,.08,.26,4,2.4,-6,,,,,1.2,,.2,.05,.55,.14],ray:[.35,.1,980,,.02,.09,2,1.6,12,,420,.03,,,,,,.5,.02],charge:[.5,.05,90,.05,1,.3,2,1.4,6,3,,,,.1,,,,.6,.12],power:[.6,.05,480,.02,.12,.3,1,1.6,,,220,.05,,,,,.05,.7,.1],disarm:[.7,.05,220,.05,.25,.55,1,1.3,,,330,.08,.12,,,,.1,.8,.2],alarm:[.55,.05,420,.02,.14,.3,2,1.8,-5,-2,,,,.1,,,.05,.6,.12]},xb=.07;class _b{constructor(e){this.settings=e,this.ctx=_c.audioContext,this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.connect(this.master),this.musicGain=this.ctx.createGain(),this.musicGain.connect(this.master),this.buffers={},this.lastTrailTime=0,this.engineNodes=null,this.sequencer=null,this.drone=null,this.menuMusic=new Audio("sounds/soundtrack.mp3"),this.menuMusic.loop=!0,this.noiseBuffer=this.createNoiseBuffer(),this.updateVolumes()}createNoiseBuffer(){const e=Math.floor(this.ctx.sampleRate*.4),t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let s=0;s<e;s++)n[s]=Math.random()*2-1;return t}unlock(){this.ctx.state==="suspended"&&this.ctx.resume()}updateVolumes(){this.sfxGain.gain.value=this.settings.sfxVol,this.musicGain.gain.value=Math.min(this.settings.bgmVol*1.35,1),this.menuMusic.volume=this.settings.bgmVol}getBuffer(e){if(this.buffers[e])return this.buffers[e];const t=gb[e];if(!t)return null;const n=_c.buildSamples(...t),s=this.ctx.createBuffer(1,n.length,_c.sampleRate);return s.getChannelData(0).set(n),this.buffers[e]=s,s}playSFX(e){if(this.settings.sfxVol<=0)return;if(e==="trail"){if(this.ctx.currentTime-this.lastTrailTime<xb)return;this.lastTrailTime=this.ctx.currentTime}const t=this.getBuffer(e);if(!t)return;const n=this.ctx.createBufferSource();n.buffer=t,n.playbackRate.value=.94+Math.random()*.12,n.connect(this.sfxGain),n.start()}startEngine(){if(this.engineNodes)return;const e=this.ctx.createGain();e.gain.value=0,e.connect(this.sfxGain);const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.value=520,t.connect(e);const n=this.ctx.createOscillator();n.type="sawtooth",n.frequency.value=58;const s=this.ctx.createOscillator();s.type="sawtooth",s.frequency.value=58,s.detune.value=14,n.connect(t),s.connect(t),n.start(),s.start(),e.gain.setTargetAtTime(.065,this.ctx.currentTime,.15),this.engineNodes={gain:e,filter:t,oscA:n,oscB:s}}stopEngine(){if(!this.engineNodes)return;const{gain:e,oscA:t,oscB:n}=this.engineNodes;this.engineNodes=null;const s=this.ctx.currentTime+.25;e.gain.setTargetAtTime(0,this.ctx.currentTime,.06),t.stop(s),n.stop(s)}setEngineSpeed(e){if(!this.engineNodes)return;const t=52+e*46,n=this.ctx.currentTime;this.engineNodes.oscA.frequency.setTargetAtTime(t,n,.08),this.engineNodes.oscB.frequency.setTargetAtTime(t,n,.08),this.engineNodes.filter.frequency.setTargetAtTime(420+e*500,n,.1)}startMenuMusic(){this.stopGameMusic(),this.menuMusic.paused&&this.menuMusic.play().catch(()=>{})}isMenuMusicPlaying(){return!this.menuMusic.paused}stopMenuMusic(){this.menuMusic.pause()}startGameMusic(){this.stopMenuMusic(),!(this.sequencer&&this.sequencer.mode==="game")&&(this.stopSequencer(),this.stopDrone(),this.startSequencer("game",60/104/4))}startBossMusic(){this.stopMenuMusic(),!(this.sequencer&&this.sequencer.mode==="boss")&&(this.stopSequencer(),this.startDrone(),this.startSequencer("boss",60/72/4))}startSequencer(e,t){this.sequencer={mode:e,stepDuration:t,step:0,nextTime:this.ctx.currentTime+.1,timer:setInterval(()=>this.scheduleSteps(),25)}}stopSequencer(){this.sequencer&&(clearInterval(this.sequencer.timer),this.sequencer=null)}stopGameMusic(){this.stopSequencer(),this.stopDrone()}startDrone(){if(this.drone)return;const e=this.ctx.createGain();e.gain.value=0,e.connect(this.musicGain);const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.value=210,t.Q.value=5,t.connect(e);const n=this.ctx.createOscillator();n.type="sawtooth",n.frequency.value=41.2;const s=this.ctx.createOscillator();s.type="sawtooth",s.frequency.value=61.74,s.detune.value=-9;const r=this.ctx.createOscillator();r.frequency.value=.07;const o=this.ctx.createGain();o.gain.value=95,r.connect(o).connect(t.frequency),n.connect(t),s.connect(t),n.start(),s.start(),r.start(),e.gain.setTargetAtTime(.12,this.ctx.currentTime,1.2),this.drone={gain:e,oscA:n,oscB:s,lfo:r}}stopDrone(){if(!this.drone)return;const{gain:e,oscA:t,oscB:n,lfo:s}=this.drone;this.drone=null;const r=this.ctx.currentTime+.9;e.gain.setTargetAtTime(0,this.ctx.currentTime,.25),t.stop(r),n.stop(r),s.stop(r)}scheduleSteps(){for(;this.sequencer&&this.sequencer.nextTime<this.ctx.currentTime+.15;)this.playStep(this.sequencer.step,this.sequencer.nextTime),this.sequencer.step=(this.sequencer.step+1)%16,this.sequencer.nextTime+=this.sequencer.stepDuration}playStep(e,t){if(this.sequencer.mode==="boss"){(e===0||e===9)&&this.playKick(t,92,.3),(e===6||e===14)&&this.playClang(t),e===0&&this.playBass(41.2,t,.5),e===10&&this.playBass(43.65,t,.4),e===12&&this.playBass(38.89,t,.4);return}e%8===0&&this.playKick(t),e%4===2&&this.playHat(t),(e===0||e===6||e===10)&&this.playBass(e===0?55:e===6?62:49,t)}playClang(e){const t=this.ctx.createBufferSource(),n=this.ctx.createBiquadFilter(),s=this.ctx.createGain();t.buffer=this.noiseBuffer,n.type="bandpass",n.frequency.value=1700,n.Q.value=11,s.gain.setValueAtTime(.11,e),s.gain.exponentialRampToValueAtTime(.001,e+.5),t.connect(n).connect(s).connect(this.musicGain),t.start(e),t.stop(e+.5)}playKick(e,t=120,n=.16){const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(t,e),s.frequency.exponentialRampToValueAtTime(t*.37,e+n*.7),r.gain.setValueAtTime(.42,e),r.gain.exponentialRampToValueAtTime(.001,e+n),s.connect(r).connect(this.musicGain),s.start(e),s.stop(e+n+.02)}playHat(e){const t=this.ctx.createBufferSource(),n=this.ctx.createBiquadFilter(),s=this.ctx.createGain();t.buffer=this.noiseBuffer,n.type="highpass",n.frequency.value=7e3,s.gain.setValueAtTime(.12,e),s.gain.exponentialRampToValueAtTime(.001,e+.05),t.connect(n).connect(s).connect(this.musicGain),t.start(e),t.stop(e+.06)}playBass(e,t,n=.22){const s=this.ctx.createOscillator(),r=this.ctx.createBiquadFilter(),o=this.ctx.createGain();s.type="square",s.frequency.value=e,r.type="lowpass",r.frequency.value=700,o.gain.setValueAtTime(.18,t),o.gain.exponentialRampToValueAtTime(.001,t+n),s.connect(r).connect(o).connect(this.musicGain),s.start(t),s.stop(t+n+.02)}}function vb(i){return new _b(i)}const yb=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
    }
`,Mb=`
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
`;function Sb(i){const e=[];let t=!1;function n(s){const r=s.dataset.warpBaseTransform||"";if(s.style.transform=r,!t)return;const o=s.getBoundingClientRect();if(o.width===0&&o.height===0)return;const a=window.innerWidth,l=window.innerHeight,c=(o.left+o.width/2)/a*2-1,u=(o.top+o.height/2)/l*2-1,h=Math.abs(u)*i,d=Math.abs(c)*i,f=-c*h*h*(a/2),p=-u*d*d*(l/2);s.style.transform=`${r} translate(${f.toFixed(1)}px, ${p.toFixed(1)}px)`.trim()}return{register(s){s.dataset.warpBaseTransform=s.style.transform||"",e.push(s),n(s)},refresh(){e.forEach(n)},setEnabled(s){t=s,e.forEach(n)}}}function bb(i,e={}){const t={enabled:e.enabled!==!1,pixelScale:e.pixelScale||3},n=new Vn(1,1,{minFilter:Ut,magFilter:Ut,depthBuffer:!0}),s=new Hn({uniforms:{tDiffuse:{value:n.texture},uResolution:{value:new re(1,1)},uCurvature:{value:e.curvature??.32},uScanline:{value:e.scanline??.1},uAberration:{value:e.aberration??.4},uMask:{value:e.mask??.035},uBrightness:{value:e.brightness??1.25},uCorner:{value:e.corner??.09}},vertexShader:yb,fragmentShader:Mb,depthTest:!1,depthWrite:!1}),r=new op;r.add(new pt(new Xr(2,2),s));const o=new zo(-1,1,1,-1,0,1);function a(){const h=window.innerWidth,d=window.innerHeight;i.setSize(h,d);const f=Math.max(160,Math.floor(h/t.pixelScale)),p=Math.max(120,Math.floor(d/t.pixelScale));n.setSize(f,p),s.uniforms.uResolution.value.set(f,p)}function l(h,d){if(!t.enabled){i.setRenderTarget(null),i.render(h,d);return}i.setRenderTarget(n),i.render(h,d),i.setRenderTarget(null),i.render(r,o)}function c(h){t.enabled=h,i.setPixelRatio(h?1:Math.min(window.devicePixelRatio,2)),a()}function u(h){t.pixelScale=h,a()}return c(t.enabled),{render:l,resize:a,setEnabled:c,setPixelScale:u,isEnabled:()=>t.enabled}}const ch=document.createElement("link");ch.href="https://fonts.googleapis.com/css2?family=VT323&display=swap";ch.rel="stylesheet";document.head.appendChild(ch);const Tt=window.matchMedia("(pointer: coarse)").matches&&navigator.maxTouchPoints>0,B={font:"'VT323', monospace",artFont:"ui-monospace, Menlo, 'DejaVu Sans Mono', monospace",cyan:"#00d9ff",amber:"#ffa023",danger:"#ff3b5c",success:"#00ff9c",text:"#d8f6ff",dim:"#5c7a91",overlay:"rgba(4, 4, 15, 0.92)",panelEdge:"#1e3350",glow:i=>`0 0 6px ${i}, 0 0 18px ${i}`},Eb={heart:[".XX.XX.","XXXXXXX","XXXXXXX","XXXXXXX",".XXXXX.","..XXX..","...X..."],area:["XXXXXXX","X.....X","X.....X","XXXX..X","XXXX..X","XXXX..X","XXXXXXX"],timer:["XXXXXXX",".X...X.","..X.X..","...X...","..X.X..",".X...X.","XXXXXXX"],lock:[".XXXXX.",".X...X.",".X...X.","XXXXXXX","XXX.XXX","XXX.XXX","XXXXXXX"],star:["...X...","..XXX..","XXXXXXX",".XXXXX.","..XXX..",".XX.XX.","X.....X"],core:["...X...","..XXX..",".XXXXX.","XXXXXXX",".XXXXX.","..XXX..","...X..."]};function Do(i,e="currentColor",t=3){const n=Eb[i],s=n[0].length;let r="";return n.forEach((o,a)=>{let l=0;for(;l<s;){if(o[l]!=="X"){l++;continue}let c=1;for(;o[l+c]==="X";)c++;r+=`<rect x="${l}" y="${a}" width="${c}" height="1"/>`,l+=c}}),`<svg width="${s*t}" height="${n.length*t}" viewBox="0 0 ${s} ${n.length}" fill="${e}" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">${r}</svg>`}function Ln(i,e,t=!0){i.onmouseover=()=>{i.style.backgroundColor=e,i.style.color="#04040f",i.style.boxShadow=B.glow(e),t&&Te.playSFX("hover")},i.onmouseout=()=>{i.style.backgroundColor="transparent",i.style.color=e,i.style.boxShadow="none"}}const el=[{id:1,target:80,time:70,bouncers:2,eaters:0,bombers:0,maxMines:2,pillars:0},{id:2,target:80,time:80,bouncers:2,eaters:1,bombers:0,maxMines:2,pillars:0},{id:3,target:80,time:90,bouncers:3,eaters:1,bombers:0,maxMines:3,pillars:0},{id:4,target:80,time:100,bouncers:2,eaters:2,bombers:1,maxMines:3,pillars:0},{id:5,target:80,time:110,bouncers:3,eaters:2,bombers:1,maxMines:3,pillars:1},{id:6,target:80,time:125,bouncers:3,eaters:2,bombers:1,maxMines:4,pillars:2},{id:7,target:80,time:140,bouncers:3,eaters:3,bombers:2,maxMines:4,pillars:3},{id:8,target:80,time:150,bouncers:4,eaters:3,bombers:2,maxMines:4,pillars:4}],pl=9,Tb={id:pl,target:80,time:240,bouncers:0,eaters:2,bombers:3,maxMines:0,pillars:0,boss:!0},pf=el.length+1,wb=i=>(i===pl?Tb:el.find(e=>e.id===i))||el[0],Ab={cz:{title:"CUTRON",campaign:"Kampaň",resetProgress:"Smazat postup",resetConfirm:"Opravdu smazat?",resetDone:"Postup smazán",language:"Jazyk: Čeština",settings:"Nastavení",help:"Nápověda",duel:"1v1",duelNoTouch:"Souboj 1v1 se hraje ve dvou na jedné klávesnici — jeden na WASD, druhý na šipkách. Na dotykovém zařízení ho hrát nelze.",touchJoystick:"Ovládání: Joystick",touchDpad:"Ovládání: Šipky",playerOne:"Hráč 1",playerTwo:"Hráč 2",duelByArea:"ovládl nadpoloviční většinu plochy!",duelByTime:"měl po vypršení času větší území!",duelByLives:"ustál souboj — soupeři došly životy!",duelWins:"%s vyhrává",duelDraw:"Remíza!",reasonRivalTrail:"Soupeř ti přejel nedokončenou brázdu!",helpTitle:"Nápověda",helpGoal:"Cíl hry",helpGoalText:"Leť dronem po volné ploše a kresli brázdu. Jakmile ji uzavřeš o vlastní území nebo o okraj arény, zabereš všechno uvnitř. V kampani potřebuješ 80 % plochy, v souboji víc než soupeř. Nikdy nenajížděj do vlastní nedokončené brázdy.",helpCollapse:"Když ti do rozdělané brázdy někdo vlítne, nepřijdeš o život hned. Brázda zbělá a začne se bortit od svého začátku směrem k dronu — mnohem rychleji, než letíš. Stihneš-li dorazit na zabrané území, zabere se ti všechno, co z brázdy zůstalo. Život přijdeš až ve chvíli, kdy se rozpadne celá.",helpPillars:"Od pátého levelu stojí v aréně ostrůvky už zvednuté plochy. Chovají se jako kus tvého území, takže na nich jde brázdu uzavřít i daleko od okraje arény.",helpControls:"Ovládání",helpMoveOne:"Pohyb — hráč 1",helpMoveTwo:"Pohyb — hráč 2 (jen 1v1)",helpDiagonal:"Dvě klávesy naráz = šikmý let.",helpTouchDpad:"Dron ovládáš šipkami dole uprostřed obrazovky. V Nastavení se dá přepnout na plovoucí joystick.",helpTouchJoystick:"Joystick se objeví tam, kde přiložíš prst. V Nastavení se dá přepnout na pevné šipky.",helpObjects:"Předměty",helpEnemies:"Nepřátelé",lifeName:"Kříž života",lifeDesc:"Objeví se jen zřídka a jen na zabrané ploše. Sebráním získáš život navíc, nejvýš však pět. Zmizí, pokud pod ním plocha přestane být tvoje.",clockName:"Přesýpací hodiny",clockDesc:"Stejně vzácné jako kříž života a taky jen na zabrané ploše. Sebráním si přidáš 10 sekund. Zmizí, pokud pod nimi plocha přestane být tvoje.",bossLevel:"Boss level",bossBriefingOk:"Jdu na to",bossDisarmed:"Boss odzbrojen",bossRecharging:"Boss se znovu nabíjí!",gameCompleted:"Úspěšně jsi dokončil hru!",share:"SDÍLET",shareCopied:"ZKOPÍROVÁNO",shareSaved:"ULOŽENO",shareFailed:"NEPOVEDLO SE",bossDefeated:"BOSS PORAŽEN",totalScore:"Celkové skóre",bossIntro:"Uprostřed arény se probral Boss. Míří pomalu přímo k tobě a zabranou plochu drtí jako tank. Nabíjejí ho čtyři generátory — zaber plochu kolem generátoru a umlčíš ho. Co ti ale Boss rozdrtí, to generátor zase probudí. Jakmile budeš mít 80 % arény, Boss vybuchne.",reasonBossHit:"Boss tě rozdrtil!",reasonBossTrail:"Boss projel tvou brázdou!",selectLevel:"Výběr Levelu",back:"Zpět",level:"Level",score:"Skóre",pause:"PAUZA",resume:"POKRAČOVAT",quit:"UKONČIT",pausedTitle:"HRA POZASTAVENA",pausedSub:"Klikni na obrazovku nebo stiskni Esc",victory:"VÍTĚZSTVÍ!",gameOver:"KONEC HRY",captured:"Zabral jsi %s% území.",nextLevel:"DALŠÍ LEVEL",playAgain:"HRÁT ZNOVU",mainMenu:"HLAVNÍ MENU",move:"Pohyb",reset:"Reset",musicVol:"Hlasitost hudby",crtOn:"CRT efekt: Zapnutý",crtOff:"CRT efekt: Vypnutý",sfxVol:"Hlasitost zvuků",reasonTime:"Vypršel čas!",reasonCross:"Překřížil jsi vlastní stopu!",reasonMine:"Zasáhl tě výbuch miny!",reasonEnemyHit:"Nepřítel tě dostal!",reasonEnemyTrail:"Nepřítel narazil do tvé stopy!",reasonEaterHit:"Eater tě sežral!",reasonEaterTrail:"Eater narazil do tvé stopy!",reasonFireballHit:"Zasáhla tě ohnivá koule!",reasonFireballTrail:"Ohnivá koule zasáhla tvou stopu!",reasonBomberHit:"Bomber tě přejel!",reasonBomberTrail:"Bomber narazil do tvé stopy!",livesOut:"<br>Došly ti životy!"},en:{title:"CUTRON",campaign:"Campaign",resetProgress:"Erase progress",resetConfirm:"Really erase?",resetDone:"Progress erased",language:"Language: English",settings:"Settings",help:"Help",duel:"1v1",duelNoTouch:"A 1v1 duel is played by two people on one keyboard — one on WASD, the other on the arrow keys. It cannot be played on a touch device.",touchJoystick:"Controls: Joystick",touchDpad:"Controls: D-pad",playerOne:"Player 1",playerTwo:"Player 2",duelByArea:"took more than half of the arena!",duelByTime:"held more ground when time ran out!",duelByLives:"outlasted the rival — they ran out of lives!",duelWins:"%s wins",duelDraw:"Draw!",reasonRivalTrail:"Your rival ran over your unfinished trail!",helpTitle:"Help",helpGoal:"Objective",helpGoalText:"Fly across open ground and draw a trail. Close it against your own territory or the arena edge and everything inside becomes yours. The campaign needs 80 % of the arena, a duel just needs more than your rival. Never run into your own unfinished trail.",helpCollapse:"If something hits your unfinished trail, you do not lose a life straight away. The trail turns white and starts collapsing from its base towards the drone — far faster than you can fly. Reach captured ground in time and everything left of the trail becomes yours. You only lose a life once the whole trail is gone.",helpPillars:"From level five on, islands of already raised ground stand in the arena. They behave like a piece of your territory, so you can close a trail on them far from the arena edge.",helpControls:"Controls",helpMoveOne:"Move — player 1",helpMoveTwo:"Move — player 2 (1v1 only)",helpDiagonal:"Hold two keys at once to fly diagonally.",helpTouchDpad:"Steer with the arrows at the bottom of the screen. You can switch to a floating joystick in Settings.",helpTouchJoystick:"The joystick appears wherever you put your finger. You can switch to fixed arrows in Settings.",helpObjects:"Objects",helpEnemies:"Enemies",lifeName:"Life cross",lifeDesc:"Appears rarely and only on captured ground. Picking it up grants an extra life, up to five. It vanishes if the ground beneath it stops being yours.",clockName:"Hourglass",clockDesc:"As rare as the life cross and likewise only on captured ground. Picking it up adds 10 seconds to the clock. It vanishes if the ground beneath it stops being yours.",bossLevel:"Boss level",bossBriefingOk:"Let's go",bossDisarmed:"Boss disarmed",bossRecharging:"The boss is recharging!",gameCompleted:"You have finished the game!",share:"SHARE",shareCopied:"COPIED",shareSaved:"SAVED",shareFailed:"FAILED",bossDefeated:"BOSS DEFEATED",totalScore:"Total score",bossIntro:"A Boss has woken up in the middle of the arena. It crawls straight at you and grinds captured ground like a tank. Four generators keep it charged — capture the ground around a generator to silence it, but whatever the Boss grinds away wakes that generator up again. Once you hold 80 % of the arena, the Boss blows up.",reasonBossHit:"The boss crushed you!",reasonBossTrail:"The boss drove through your trail!",selectLevel:"Select Level",back:"Back",level:"Level",score:"Score",pause:"PAUSE",resume:"RESUME",quit:"QUIT",pausedTitle:"GAME PAUSED",pausedSub:"Click the screen or press Esc",victory:"VICTORY!",gameOver:"GAME OVER",captured:"You captured %s% of the area.",nextLevel:"NEXT LEVEL",playAgain:"PLAY AGAIN",mainMenu:"MAIN MENU",move:"Move",reset:"Reset",musicVol:"Music Volume",crtOn:"CRT effect: On",crtOff:"CRT effect: Off",sfxVol:"SFX Volume",reasonTime:"Time's up!",reasonCross:"You crossed your own trail!",reasonMine:"Hit by a mine explosion!",reasonEnemyHit:"Enemy got you!",reasonEnemyTrail:"Enemy hit your trail!",reasonEaterHit:"Eater ate you!",reasonEaterTrail:"Eater hit your trail!",reasonFireballHit:"Hit by a fireball!",reasonFireballTrail:"Fireball hit your trail!",reasonBomberHit:"Bomber ran you over!",reasonBomberTrail:"Bomber hit your trail!",livesOut:"<br>Out of lives!"}};let tl="en";const Be=i=>Ab[tl][i];let Bt="MENU",qn="campaign",rs=null,hn=JSON.parse(localStorage.getItem("cutronProgress"))||{unlocked:1,scores:{}},En=JSON.parse(localStorage.getItem("cutronSettings"))||{sfxVol:.5,bgmVol:.3};function uh(){localStorage.setItem("cutronProgress",JSON.stringify(hn))}function ml(){localStorage.setItem("cutronSettings",JSON.stringify(En))}const zs=()=>En.touchControl==="joystick"?"joystick":"dpad";let rn=1,vn=null,hh=5,os=!1,Zt=!1,It=!1,li=0,vc=0,hi=60,Fi=0,wr=80;const Te=vb(En),tn=new op,Gp=855330;tn.background=new ze(Gp);tn.fog=new Ku(Gp,18,70);const Lt=new on(60,window.innerWidth/window.innerHeight,.1,1e3),Kr=new DS({antialias:!1});Kr.setSize(window.innerWidth,window.innerHeight);Kr.setPixelRatio(Math.min(window.devicePixelRatio,2));Kr.shadowMap.enabled=!0;Kr.shadowMap.type=Bf;document.body.appendChild(Kr.domElement);const Hp=Tt?.16:.32,Ar=bb(Kr,{enabled:En.crt!==!1,pixelScale:En.pixelScale||2,curvature:Hp}),Xp=new Dt,Wp=8e3,Ha=new Float32Array(Wp*3);for(let i=0;i<Wp*3;i+=3)Ha[i]=(Math.random()-.5)*250,Ha[i+1]=(Math.random()-.5)*150,Ha[i+2]=(Math.random()-.5)*250;Xp.setAttribute("position",new qt(Ha,3));const Rb=new th({size:.15,color:55807,transparent:!0,opacity:.6}),dh=new fp(Xp,Rb);dh.position.y=0;tn.add(dh);const mn=document.createElement("div");Object.assign(mn.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",fontFamily:"sans-serif",overflow:"hidden"});document.body.appendChild(mn);const jn=Sb(Hp),Nn=document.createElement("div");Object.assign(Nn.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",pointerEvents:"auto",background:"transparent"});mn.appendChild(Nn);const Xi=document.createElement("div");Object.assign(Xi.style,{marginTop:"10vh",display:"flex",flexDirection:"column",alignItems:"center",zIndex:"10"});Nn.appendChild(Xi);jn.register(Xi);const Cb=[" ██████╗██╗   ██╗████████╗██████╗  ██████╗ ███╗   ██╗","██╔════╝██║   ██║╚══██╔══╝██╔══██╗██╔═══██╗████╗  ██║","██║     ██║   ██║   ██║   ██████╔╝██║   ██║██╔██╗ ██║","██║     ██║   ██║   ██║   ██╔══██╗██║   ██║██║╚██╗██║","╚██████╗╚██████╔╝   ██║   ██║  ██║╚██████╔╝██║ ╚████║"," ╚═════╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝"].join(`
`),gl=document.createElement("pre");gl.className="logo-sweep";gl.textContent=Cb;Object.assign(gl.style,{fontFamily:B.artFont,fontSize:"clamp(5px, 2.4vw, 20px)",lineHeight:"1.02",whiteSpace:"pre",margin:"0 0 44px"});Xi.appendChild(gl);function Yn(i,e){const t=document.createElement("button");return t.dataset.textKey=i,t.innerText=Be(i),Object.assign(t.style,{fontFamily:B.font,padding:"12px 18px",fontSize:"26px",lineHeight:"1.3",cursor:"pointer",backgroundColor:"transparent",color:B.cyan,border:`2px solid ${B.cyan}`,borderRadius:"0",marginBottom:"16px",width:"min(330px, 76vw)",letterSpacing:"1px",textTransform:"uppercase",transition:"none"}),Ln(t,B.cyan),t.onclick=n=>{Te.unlock(),Te.playSFX("click"),e(n)},t}const Pb=Yn("campaign",()=>qb()),Lb=Yn("language",()=>{tl=tl==="cz"?"en":"cz",_l()}),Ib=Yn("settings",()=>{Nn.style.display="none",$n.style.display="flex"}),Db=Yn("duel",()=>{if(Tt){Gb("duelNoTouch");return}Dm()}),Nb=Yn("help",()=>Bb());Xi.appendChild(Pb);Xi.appendChild(Db);Xi.appendChild(Lb);Xi.appendChild(Nb);Xi.appendChild(Ib);const yi=document.createElement("div");Object.assign(yi.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"none",flexDirection:"column",alignItems:"center",pointerEvents:"auto",backgroundColor:B.overlay});mn.appendChild(yi);const fh=document.createElement("div");Object.assign(fh.style,{fontFamily:B.font,fontSize:"clamp(30px, 5vw, 56px)",color:B.text,marginTop:"10vh",marginBottom:"40px",letterSpacing:"2px",textShadow:B.glow(B.cyan)});fh.dataset.textKey="selectLevel";yi.appendChild(fh);const Mo=document.createElement("div"),yc=Tt?70:120;Object.assign(Mo.style,{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:Tt?"10px":"25px"});yi.appendChild(Mo);const qp=Yn("back",()=>{yi.style.display="none",Nn.style.display="flex"});qp.style.marginTop="50px";yi.appendChild(qp);const ko=document.createElement("div");Object.assign(ko.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"none",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#000000",pointerEvents:"auto",zIndex:"250",padding:"0 24px"});mn.appendChild(ko);const No=document.createElement("div");No.dataset.textKey="bossLevel";Object.assign(No.style,{fontFamily:B.font,fontSize:"clamp(34px, 7vw, 72px)",letterSpacing:"8px",color:B.danger,textShadow:B.glow(B.danger),marginBottom:"30px",opacity:"0",transition:"opacity 1.2s ease-in"});const Uo=document.createElement("div");Uo.dataset.textKey="bossIntro";Object.assign(Uo.style,{fontFamily:B.font,fontSize:"clamp(18px, 2.4vw, 25px)",color:B.text,lineHeight:"1.6",maxWidth:"640px",textAlign:"center",opacity:"0",transition:"opacity 1.6s ease-in"});const Ps=Yn("bossBriefingOk",()=>Ub());Object.assign(Ps.style,{color:B.danger,borderColor:B.danger,marginTop:"44px",marginBottom:"0",opacity:"0",transition:"opacity 0.8s ease-in",pointerEvents:"none"});Ln(Ps,B.danger);ko.append(No,Uo,Ps);let Rs=[];function jp(){Rs.forEach(clearTimeout),Rs=[],Bt="MENU",Te.stopEngine(),Te.startBossMusic(),Nn.style.display="none",yi.style.display="none",$t.style.display="none",Kn.style.display="none",ko.style.display="flex",No.style.opacity="0",Uo.style.opacity="0",Ps.style.opacity="0",Ps.style.pointerEvents="none",Rs.push(setTimeout(()=>{No.style.opacity="1"},400)),Rs.push(setTimeout(()=>{Uo.style.opacity="1"},1500)),Rs.push(setTimeout(()=>{Ps.style.opacity="1",Ps.style.pointerEvents="auto"},3300))}function Ub(){Rs.forEach(clearTimeout),Rs=[],ko.style.display="none",sl(pl)}const Ob=[{section:"enemies",shape:"sphere",color:"#eaf0ff",cz:{name:"Bouncer",desc:"Nejrychlejší z nepřátel. Odráží se od zabrané plochy i od stěn arény. Zabije tě při dotyku — a stejně tak, když sám narazí do tvé rozdělané brázdy. Zabrané území nepoškozuje."},en:{name:"Bouncer",desc:"The fastest enemy. Bounces off captured ground and arena walls. It kills you on contact — and also when it runs into your unfinished trail. It does not damage captured territory."}},{section:"enemies",shape:"poly",color:"#c44dff",cz:{name:"Eater",desc:"Pomalejší než Bouncer, zato při každém nárazu do zabrané plochy z ní ukousne čtverec 5×5 polí. Postupně ti tak ubírá už získané území."},en:{name:"Eater",desc:"Slower than the Bouncer, but every time it hits captured ground it bites out a 5×5 square. It steadily eats away the territory you already won."}},{section:"enemies",shape:"diamond",color:"#1a1a24",stroke:"#ff6a00",cz:{name:"Bomber",desc:"Nejpomalejší nepřítel. Každých 5 sekund vystřelí ohnivou kouli náhodným směrem. Sám území nepoškozuje — to za něj obstarají jeho střely."},en:{name:"Bomber",desc:"The slowest enemy. Every 5 seconds it fires a fireball in a random direction. It does no damage itself — its projectiles do the work."}},{section:"enemies",shape:"sphere",color:"#ffb020",cz:{name:"Ohnivá koule",desc:"Letí rovně a velmi rychle. Při nárazu do zabrané plochy vybuchne a vypálí v ní kruh o poloměru 5 polí. Když zasáhne tebe nebo tvou brázdu, přijdeš o život."},en:{name:"Fireball",desc:"Flies straight and very fast. On hitting captured ground it explodes and burns out a circle with a radius of 5 cells. If it hits you or your trail, you lose a life."}},{section:"enemies",shape:"boss",color:"#10060c",stroke:"#ff2a2a",cz:{name:"Boss",desc:"Čeká jen v Boss levelu. Je ze všech nejpomalejší, zato míří pořád přímo k tobě a od ničeho se neodráží — zabranou plochu prostě rozdrtí a sám se tím ještě zpomalí. Dotek s ním stojí život."},en:{name:"Boss",desc:"Waits only in the Boss level. The slowest enemy of all, but it always heads straight at you and bounces off nothing — it simply grinds captured ground down, slowing itself in the process. Touching it costs a life."}},{section:"enemies",shape:"pylon",color:"#9d5bff",cz:{name:"Generátor",desc:"Čtyři z nich nabíjejí Bosse. Dokud je naživu aspoň jeden, Boss každých 10 sekund vystřelí ohnivé koule do všech stran — ohlásí to stoupající tón, třes a vlny vybíhající od něj ven. Zaber plochu kolem generátoru a umlčíš ho. Jakmile ji ale Boss zase rozdrtí, generátor se probudí."},en:{name:"Generator",desc:"Four of them keep the Boss charged. While even one is alive, the Boss fires a ring of fireballs every 10 seconds — a rising tone, a shudder and waves rolling outwards give it away. Capture the ground around a generator to silence it. Grind that ground away and it wakes back up."}},{section:"objects",shape:"mine",color:"#c6ff2e",cz:{name:"Mina",desc:"Objeví se uvnitř zabraného území. Jakmile se přiblížíš na 4 pole, spustí se odpočet 5 sekund — pak vybuchne, zničí kruh o poloměru 7 polí a v jeho dosahu zabije i tebe."},en:{name:"Mine",desc:"Appears inside captured territory. Come within 4 cells and a 5 second countdown starts — then it explodes, destroying a circle with a radius of 7 cells and killing you if you are inside it."}},{section:"objects",shape:"cross",color:"#ff2d95",useKeys:{name:"lifeName",desc:"lifeDesc"}},{section:"objects",shape:"hourglass",color:"#ffc93c",useKeys:{name:"clockName",desc:"clockDesc"}}];function Fb(i){const e=i.stroke?` stroke="${i.stroke}" stroke-width="3"`:"";let t;return i.shape==="sphere"?t=`<circle cx="22" cy="22" r="15" fill="${i.color}"${e}/>`:i.shape==="poly"?t=`<polygon points="22,6 36,14 36,30 22,38 8,30 8,14" fill="${i.color}"${e}/>`:i.shape==="diamond"?t=`<polygon points="22,5 39,22 22,39 5,22" fill="${i.color}"${e}/>`:i.shape==="cross"?t=`<ellipse cx="22" cy="38" rx="13" ry="4" fill="none" stroke="${i.color}" stroke-width="1.5" opacity="0.5"/><polygon points="17,5 27,5 27,15 37,15 37,25 27,25 27,35 17,35 17,25 7,25 7,15 17,15" fill="#15151f" stroke="${i.color}" stroke-width="2.5" stroke-linejoin="round"/>`:i.shape==="hourglass"?t=`<ellipse cx="22" cy="39" rx="12" ry="4" fill="none" stroke="${i.color}" stroke-width="1.5" opacity="0.5"/><polygon points="9,5 35,5 22,21" fill="#15151f" stroke="${i.color}" stroke-width="2.5" stroke-linejoin="round"/><polygon points="22,21 35,37 9,37" fill="#15151f" stroke="${i.color}" stroke-width="2.5" stroke-linejoin="round"/>`:i.shape==="boss"?t=`<polygon points="22,3 41,22 22,41 3,22" fill="none" stroke="${i.stroke}" stroke-width="1.5" opacity="0.6"/><polygon points="22,8 33,15 33,29 22,36 11,29 11,15" fill="${i.color}" stroke="${i.stroke}" stroke-width="2.5"/>`:i.shape==="pylon"?t=`<polygon points="14,40 30,40 27,20 17,20" fill="#141124" stroke="${i.color}" stroke-width="2"/><polygon points="22,4 29,12 22,20 15,12" fill="${i.color}"/>`:t=`<circle cx="22" cy="22" r="18" fill="none" stroke="${i.color}" stroke-width="2" opacity="0.55"/><polygon points="32.2,26.2 26.2,32.2 17.8,32.2 11.8,26.2 11.8,17.8 17.8,11.8 26.2,11.8 32.2,17.8" fill="#15151f" stroke="${i.color}" stroke-width="2.5"/>`,`<svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">${t}</svg>`}const hs=document.createElement("div");Object.assign(hs.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"none",flexDirection:"column",alignItems:"center",pointerEvents:"auto",backgroundColor:B.overlay,overflowY:"auto",padding:"0 20px 40px"});mn.appendChild(hs);const ph=document.createElement("div");Object.assign(ph.style,{fontFamily:B.font,fontSize:"clamp(30px, 5vw, 56px)",color:B.text,marginTop:"8vh",marginBottom:"32px",letterSpacing:"2px",textShadow:B.glow(B.cyan)});ph.dataset.textKey="helpTitle";hs.appendChild(ph);const Ci=document.createElement("div");Object.assign(Ci.style,{display:"flex",flexDirection:"column",gap:"18px",width:"100%",maxWidth:"680px"});hs.appendChild(Ci);function Mc(i){const e=document.createElement("div");return Object.assign(e.style,{fontFamily:B.font,fontSize:"26px",color:B.amber,letterSpacing:"2px",textTransform:"uppercase",marginTop:"14px",marginBottom:"2px"}),e.textContent=Be(i),e}function Sc(){const i=document.createElement("div");return Object.assign(i.style,{border:`2px solid ${B.panelEdge}`,padding:"16px 18px",display:"flex",flexDirection:"column",gap:"12px"}),i}function Ts(i,e=B.text,t="19px"){const n=document.createElement("div");return Object.assign(n.style,{fontFamily:B.font,fontSize:t,color:e,lineHeight:"1.45"}),n.textContent=i,n}function mf(i,e,t){const n=document.createElement("div");Object.assign(n.style,{display:"flex",alignItems:"center",gap:"14px",flexWrap:"wrap"});const s=document.createElement("div");return Object.assign(s.style,{display:"flex",gap:"5px"}),i.forEach(r=>s.appendChild(tm(r,e))),n.append(s,Ts(Be(t),e)),n}function Bb(){setTimeout(()=>jn.refresh(),0),Nn.style.display="none",hs.style.display="flex",Ci.innerHTML="",Ci.appendChild(Mc("helpGoal"));const i=Sc();i.appendChild(Ts(Be("helpGoalText"))),i.appendChild(Ts(Be("helpCollapse"))),i.appendChild(Ts(Be("helpPillars"),B.dim)),Ci.appendChild(i),Ci.appendChild(Mc("helpControls"));const e=Sc();Tt?e.appendChild(Ts(Be(zs()==="dpad"?"helpTouchDpad":"helpTouchJoystick"))):(e.appendChild(mf(["W","A","S","D"],B.cyan,"helpMoveOne")),e.appendChild(mf(["↑","←","↓","→"],"#00b4ff","helpMoveTwo")),e.appendChild(Ts(Be("helpDiagonal"),B.dim))),Ci.appendChild(e);for(const t of["objects","enemies"]){Ci.appendChild(Mc(t==="objects"?"helpObjects":"helpEnemies"));for(const n of Ob.filter(s=>s.section===t)){const s=Sc();s.style.flexDirection="row",s.style.gap="18px",s.style.alignItems="flex-start";const r=document.createElement("div");r.style.flex="0 0 auto",r.innerHTML=Fb(n);const o=document.createElement("div"),a=n.useKeys?{name:Be(n.useKeys.name),desc:Be(n.useKeys.desc)}:n[tl],l=document.createElement("div");Object.assign(l.style,{fontFamily:B.font,fontSize:"24px",color:n.stroke||n.color,marginBottom:"6px",letterSpacing:"1px"}),l.textContent=a.name,o.append(l,Ts(a.desc)),s.append(r,o),Ci.appendChild(s)}}}function zb(){hs.style.display="none",Nn.style.display="flex"}const Vo=document.createElement("div");Vo.textContent="×";Object.assign(Vo.style,{position:"fixed",top:"14px",right:"16px",width:"46px",height:"46px",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:B.font,fontSize:"34px",lineHeight:"1",color:B.cyan,border:`2px solid ${B.cyan}`,backgroundColor:"rgba(4, 4, 15, 0.85)",cursor:"pointer",zIndex:"120"});Vo.addEventListener("pointerdown",i=>{i.preventDefault(),Te.playSFX("click"),zb()});Vo.addEventListener("touchend",i=>i.preventDefault(),{passive:!1});hs.appendChild(Vo);const $n=document.createElement("div");Object.assign($n.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"none",flexDirection:"column",alignItems:"center",pointerEvents:"auto",backgroundColor:B.overlay});mn.appendChild($n);const mh=document.createElement("div");Object.assign(mh.style,{fontFamily:B.font,fontSize:"clamp(30px, 5vw, 56px)",color:B.text,marginTop:"10vh",marginBottom:"40px",letterSpacing:"2px",textShadow:B.glow(B.cyan)});mh.dataset.textKey="settings";$n.appendChild(mh);function Yp(i,e,t){const n=document.createElement("div");n.style.marginBottom="30px",n.style.textAlign="center";const s=document.createElement("div");s.dataset.textKey=i,s.style.color=B.text,s.style.fontFamily=B.font,s.style.fontSize="24px",s.style.letterSpacing="1px",s.style.marginBottom="18px";const r=document.createElement("input");return r.type="range",r.min=0,r.max=1,r.step=.05,r.value=e,r.style.width="300px",r.style.cursor="pointer",r.oninput=o=>t(parseFloat(o.target.value)),n.appendChild(s),n.appendChild(r),n}$n.appendChild(Yp("musicVol",En.bgmVol,i=>{En.bgmVol=i,ml(),Te.updateVolumes()}));$n.appendChild(Yp("sfxVol",En.sfxVol,i=>{En.sfxVol=i,ml(),Te.updateVolumes()}));let Da=!1,bc=null;const ni=Yn("resetProgress",()=>{if(!Da){Da=!0,ni.dataset.textKey="resetConfirm",ni.innerText=Be("resetConfirm"),clearTimeout(bc),bc=setTimeout(()=>{Da=!1,ni.dataset.textKey="resetProgress",ni.innerText=Be("resetProgress")},4e3);return}clearTimeout(bc),Da=!1,hn={unlocked:1,scores:{}},uh(),ni.dataset.textKey="resetDone",ni.innerText=Be("resetDone"),setTimeout(()=>{ni.dataset.textKey="resetProgress",ni.innerText=Be("resetProgress")},1800)});ni.style.marginTop="30px";$n.appendChild(ni);const Rr=Yn("touchJoystick",()=>{En.touchControl=zs()==="dpad"?"joystick":"dpad",ml(),Rr.dataset.textKey=zs()==="dpad"?"touchDpad":"touchJoystick",Rr.innerText=Be(Rr.dataset.textKey),dm()});Rr.dataset.textKey=zs()==="dpad"?"touchDpad":"touchJoystick";Rr.style.marginTop="10px";Tt&&$n.appendChild(Rr);const Cr=Yn("crtOn",()=>{const i=!Ar.isEnabled();Ar.setEnabled(i),jn.setEnabled(i),En.crt=i,ml(),Cr.dataset.textKey=i?"crtOn":"crtOff",Cr.innerText=Be(Cr.dataset.textKey)});Cr.dataset.textKey=En.crt===!1?"crtOff":"crtOn";Cr.style.marginTop="10px";$n.appendChild(Cr);const $p=Yn("back",()=>{$n.style.display="none",Nn.style.display="flex"});$p.style.marginTop="50px";$n.appendChild($p);const Kn=document.createElement("div");Object.assign(Kn.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"none"});mn.appendChild(Kn);const Hs=document.createElement("div");Object.assign(Hs.style,{position:"absolute",top:"4.5%",left:"4.5%",display:"flex",gap:Tt?"12px":"22px",fontFamily:B.font,fontSize:Tt?"18px":"26px",color:B.text,letterSpacing:"1px",textShadow:"2px 2px 0 rgba(0,0,0,0.9)"});Kn.appendChild(Hs);jn.register(Hs);function xl(i,e){const t=document.createElement("div");Object.assign(t.style,{display:"flex",alignItems:"center",gap:"9px"});const n=document.createElement("span");n.style.display="flex",n.innerHTML=Do(i,e,Tt?2:3);const s=document.createElement("span");return t.append(n,s),{wrap:t,value:s}}const Kp=xl("heart",B.danger),Zp=xl("area",B.cyan),Au=xl("timer",B.amber),Jp="#9d5bff",ks=xl("core",Jp);ks.wrap.style.display="none";Hs.append(Kp.wrap,Zp.wrap,Au.wrap,ks.wrap);const Xs=document.createElement("div");Object.assign(Xs.style,{position:"absolute",top:"4.5%",left:"4.5%",display:"none",alignItems:"center",gap:"18px",fontFamily:B.font,fontSize:"20px",letterSpacing:"1px"});Kn.appendChild(Xs);jn.register(Xs);function gf(i){const e=document.createElement("div");Object.assign(e.style,{display:"flex",alignItems:"center",gap:"10px",color:i,border:`2px solid ${i}`,padding:"6px 14px"});const t=document.createElement("span");t.style.display="flex",t.innerHTML=Do("heart",i,3);const n=document.createElement("span"),s=document.createElement("span");return s.style.marginLeft="8px",e.append(t,n,s),{wrap:e,lives:n,area:s}}const Ru=[gf("#ff3b5c"),gf("#00b4ff")],gh=document.createElement("div");Object.assign(gh.style,{color:B.amber,display:"flex",alignItems:"center",gap:"10px"});const xh=document.createElement("span");xh.style.display="flex";xh.innerHTML=Do("timer",B.amber,3);const Qp=document.createElement("span");gh.append(xh,Qp);Xs.append(Ru[0].wrap,gh,Ru[1].wrap);let Na=["","",""];function em(){$e.forEach(e=>{const t=Ru[e.index];if(!t)return;const n=`${e.lives}`;Na[e.index]!==n+e.percentage&&(t.lives.textContent=n,t.area.textContent=`${e.percentage}%`,Na[e.index]=n+e.percentage)});const i=`${Math.ceil(Math.max(hi,0))}s`;Na[2]!==i&&(Qp.textContent=i,Na[2]=i)}const Ws=document.createElement("div");Object.assign(Ws.style,{position:"absolute",top:"4.5%",right:"4.5%",display:"flex",gap:"15px",zIndex:"100"});Kn.appendChild(Ws);jn.register(Ws);const ci=document.createElement("button");ci.dataset.textKey="pause";Object.assign(ci.style,{padding:Tt?"6px 10px":"10px 20px",cursor:"pointer",pointerEvents:"auto",backgroundColor:"transparent",fontFamily:B.font,fontSize:Tt?"15px":"20px",border:`2px solid ${B.cyan}`,color:B.cyan,borderRadius:"0"});Ln(ci,B.cyan);Ws.appendChild(ci);const Go=document.createElement("button");Go.dataset.textKey="quit";Object.assign(Go.style,{padding:Tt?"6px 10px":"10px 20px",cursor:"pointer",pointerEvents:"auto",backgroundColor:"transparent",fontFamily:B.font,fontSize:Tt?"15px":"20px",border:`2px solid ${B.danger}`,color:B.danger,borderRadius:"0"});Ln(Go,B.danger);Go.onclick=i=>{i.stopPropagation(),Te.playSFX("click"),yl()};Ws.appendChild(Go);const Ds=document.createElement("div");Object.assign(Ds.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:B.overlay,display:"none",justifyContent:"center",alignItems:"center",flexDirection:"column",color:B.cyan,fontSize:"clamp(26px, 4vw, 42px)",fontWeight:"bold",pointerEvents:"auto",textAlign:"center"});Kn.appendChild(Ds);const $t=document.createElement("div");Object.assign($t.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:B.overlay,display:"none",justifyContent:"center",alignItems:"center",flexDirection:"column",pointerEvents:"auto",textAlign:"center"});Kn.appendChild($t);const Wi=document.createElement("div");Object.assign(Wi.style,{position:"absolute",bottom:"30px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"40px",alignItems:"center"});Kn.appendChild(Wi);jn.register(Wi);function tm(i,e=B.cyan){const t=document.createElement("div");return t.innerText=i,Object.assign(t.style,{padding:"8px 12px",backgroundColor:"transparent",fontFamily:B.font,fontSize:"22px",border:`2px solid ${e}`,color:e,borderRadius:"0"}),t}function kb(i){const e=document.createElement("div");return e.dataset.textKey=i,Object.assign(e.style,{fontFamily:B.font,fontSize:"22px",color:B.dim,letterSpacing:"1px"}),e}function _h(i,e,t){const n=document.createElement("div");Object.assign(n.style,{display:"flex",alignItems:"center",gap:"15px"});const s=document.createElement("div");Object.assign(s.style,{display:"flex",gap:"5px"}),i.forEach(o=>s.appendChild(tm(o,e)));const r=kb(t);return r.style.color=e,n.append(s,r),n}const nm=_h(["W","A","S","D"],B.cyan,"move"),im=_h(["W","A","S","D"],"#ff3b5c","playerOne"),sm=_h(["↑","←","↓","→"],"#00b4ff","playerTwo");Wi.append(nm,im,sm);function rm(){if(Tt){Wi.style.display="none";return}const i=qn==="duel";nm.style.display=i?"none":"flex",im.style.display=i?"flex":"none",sm.style.display=i?"flex":"none"}rm();const ds=document.createElement("div");Object.assign(ds.style,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"min(430px, 80vw)",padding:"20px 22px",backgroundColor:B.overlay,border:`2px solid ${B.cyan}`,fontFamily:B.font,fontSize:"19px",color:B.text,lineHeight:"1.5",textAlign:"center",display:"none",pointerEvents:"auto",zIndex:"200"});mn.appendChild(ds);const vh=document.createElement("div");vh.textContent="×";Object.assign(vh.style,{position:"absolute",top:"4px",right:"12px",fontFamily:B.font,fontSize:"30px",lineHeight:"1",color:B.cyan,cursor:"pointer"});ds.appendChild(vh);const om=document.createElement("div");ds.appendChild(om);const yr=document.createElement("div");Object.assign(yr.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"#ffffff",opacity:"0",pointerEvents:"none",zIndex:"300"});mn.appendChild(yr);function Vb(i=40,e=1.6){yr.style.transition="none",yr.style.opacity="1",setTimeout(()=>{yr.style.transition=`opacity ${e}s ease-out`,yr.style.opacity="0"},i)}function xf(i,e,t){const n=document.createElement("div");n.textContent=i,Object.assign(n.style,{position:"absolute",top:"42%",left:"50%",transform:"translate(-50%, -50%) scale(0.6)",fontFamily:B.font,fontSize:"clamp(42px, 8vw, 86px)",letterSpacing:"4px",color:e,textShadow:B.glow(e),opacity:"0",pointerEvents:"none",zIndex:"210",transition:"opacity 0.22s ease-out, transform 0.22s ease-out"}),mn.appendChild(n);const s=[];return s.push(setTimeout(()=>{n.style.opacity="1",n.style.transform="translate(-50%, -50%) scale(1)"},20)),s.push(setTimeout(()=>{const r=n.getBoundingClientRect(),o=t?t.getBoundingClientRect():null;if(o&&o.width>0){const a=o.left+o.width/2-(r.left+r.width/2),l=o.top+o.height/2-(r.top+r.height/2);n.style.transition="opacity 0.55s ease-in, transform 0.55s ease-in",n.style.transform=`translate(calc(-50% + ${a}px), calc(-50% + ${l}px)) scale(0.18)`}n.style.opacity="0"},900)),s.push(setTimeout(()=>n.remove(),1600)),s}function _f(i,e){const t=document.createElement("div");t.textContent=i,Object.assign(t.style,{position:"absolute",top:"56%",left:"50%",transform:"translate(-50%, -50%)",fontFamily:B.font,fontSize:"clamp(22px, 3.4vw, 36px)",letterSpacing:"3px",color:e,textShadow:B.glow(e),opacity:"0",pointerEvents:"none",zIndex:"210",transition:"opacity 0.3s ease-out"}),mn.appendChild(t),setTimeout(()=>{t.style.opacity="1"},20),setTimeout(()=>{t.style.transition="opacity 0.9s ease-in",t.style.opacity="0"},1500),setTimeout(()=>t.remove(),2600)}function Gb(i){om.textContent=Be(i),ds.style.display="block"}const Hb=i=>{i.preventDefault(),ds.style.display="none"};ds.addEventListener("pointerdown",Hb);ds.addEventListener("touchend",i=>i.preventDefault(),{passive:!1});const Ls=58,Kt={active:!1,pointerId:null,x:0,z:0},Pr=document.createElement("div");Object.assign(Pr.style,{position:"absolute",width:`${Ls*2}px`,height:`${Ls*2}px`,marginLeft:`-${Ls}px`,marginTop:`-${Ls}px`,border:`2px solid ${B.cyan}`,borderRadius:"50%",backgroundColor:"rgba(0, 217, 255, 0.08)",display:"none",pointerEvents:"none",zIndex:"50"});const ns=document.createElement("div");Object.assign(ns.style,{position:"absolute",width:"52px",height:"52px",marginLeft:"-26px",marginTop:"-26px",border:`2px solid ${B.cyan}`,borderRadius:"50%",backgroundColor:"rgba(0, 217, 255, 0.35)",display:"none",pointerEvents:"none",zIndex:"51"});mn.append(Pr,ns);function Xb(i,e){Pr.style.left=`${i}px`,Pr.style.top=`${e}px`,Pr.style.display="block",am(i,e,i,e)}function am(i,e,t,n){const s=t-i,r=n-e,o=Math.hypot(s,r),a=Math.min(o,Ls);if(o>0?(ns.style.left=`${i+s/o*a}px`,ns.style.top=`${e+r/o*a}px`):(ns.style.left=`${i}px`,ns.style.top=`${e}px`),ns.style.display="block",o===0||o/Ls<.18){Kt.x=0,Kt.z=0;return}const l=Math.min(o/Ls,1);Kt.x=s/o*l,Kt.z=r/o*l}function Wb(){Kt.active=!1,Kt.pointerId=null,Kt.x=0,Kt.z=0,Pr.style.display="none",ns.style.display="none"}let lm=0,cm=0;window.addEventListener("pointerdown",i=>{i.pointerType!=="touch"||Bt!=="PLAYING"||os||Zt||zs()==="joystick"&&(i.target instanceof Element&&i.target.closest("button")||(Kt.active=!0,Kt.pointerId=i.pointerId,lm=i.clientX,cm=i.clientY,Xb(i.clientX,i.clientY)))});window.addEventListener("pointermove",i=>{!Kt.active||i.pointerId!==Kt.pointerId||am(lm,cm,i.clientX,i.clientY)});const um=i=>{Kt.active&&i.pointerId===Kt.pointerId&&Wb()};window.addEventListener("pointerup",um);window.addEventListener("pointercancel",um);document.addEventListener("dblclick",i=>i.preventDefault(),{passive:!1});["gesturestart","gesturechange","gestureend"].forEach(i=>{document.addEventListener(i,e=>e.preventDefault(),{passive:!1})});const Di={up:!1,down:!1,left:!1,right:!1},Ho=document.createElement("div");Object.assign(Ho.style,{position:"absolute",left:"50%",bottom:"26px",transform:"translateX(-50%)",display:"none",gridTemplateColumns:"repeat(3, 62px)",gridTemplateRows:"repeat(3, 62px)",gap:"4px",pointerEvents:"auto",zIndex:"60"});mn.appendChild(Ho);function Ua(i,e,t,n){const s=document.createElement("div");s.textContent=i,Object.assign(s.style,{gridColumn:String(t),gridRow:String(n),display:"flex",alignItems:"center",justifyContent:"center",fontFamily:B.font,fontSize:"26px",color:B.cyan,border:`2px solid ${B.cyan}`,backgroundColor:"rgba(0, 217, 255, 0.1)",userSelect:"none",touchAction:"none"});const r=o=>{Di[e]=o,s.style.backgroundColor=o?"rgba(0, 217, 255, 0.45)":"rgba(0, 217, 255, 0.1)"};return s.addEventListener("pointerdown",o=>{o.preventDefault(),r(!0);try{s.setPointerCapture(o.pointerId)}catch{}}),s.addEventListener("pointerup",()=>r(!1)),s.addEventListener("touchend",o=>o.preventDefault(),{passive:!1}),s.addEventListener("dblclick",o=>o.preventDefault()),s.addEventListener("pointercancel",()=>r(!1)),s.addEventListener("pointerleave",()=>r(!1)),s}Ho.append(Ua("↑","up",2,1),Ua("←","left",1,2),Ua("→","right",3,2),Ua("↓","down",2,3));function hm(){Di.up=Di.down=Di.left=Di.right=!1}function dm(){const i=Tt&&Bt==="PLAYING"&&zs()==="dpad";Ho.style.display=i?"grid":"none",i||hm()}function _l(){document.querySelectorAll("[data-text-key]").forEach(i=>{i.innerText=Be(i.dataset.textKey)}),(Bt==="PLAYING"||os||Zt)&&Vs()}function qb(){setTimeout(()=>jn.refresh(),0),Nn.style.display="none",yi.style.display="flex",Mo.innerHTML="",el.forEach(e=>{const t=e.id<=hn.unlocked,n=document.createElement("div");Object.assign(n.style,{width:`${yc}px`,height:`${yc}px`,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:"0",border:t?`2px solid ${B.cyan}`:"2px solid #2b3a4a",backgroundColor:"transparent",cursor:t?"pointer":"not-allowed",color:t?B.cyan:B.dim}),n.innerHTML=`<div style="font-family: ${B.font}; font-size: ${Tt?26:42}px;">${e.id}</div>`,hn.scores[e.id]?n.innerHTML+=`<div style="font-family: ${B.font}; font-size: ${Tt?11:18}px; margin-top: ${Tt?3:8}px; color: inherit; display: flex; align-items: center; gap: 4px;">${Do("star","currentColor",Tt?2:3)} ${hn.scores[e.id]}</div>`:t||(n.innerHTML+=`<div style="margin-top: ${Tt?3:8}px; display: flex; color: inherit;">${Do("lock","currentColor",Tt?2:3)}</div>`),t&&(Ln(n,B.cyan),n.onclick=()=>{Te.playSFX("click"),sl(e.id)}),Mo.appendChild(n)});const i=document.createElement("div");Object.assign(i.style,{gridColumn:"1 / -1",height:`${Math.round(yc*.55)}px`,display:"flex",justifyContent:"center",alignItems:"center",gap:"12px",border:`2px solid ${B.danger}`,color:B.danger,cursor:"pointer",fontFamily:B.font,fontSize:`${Tt?22:32}px`,letterSpacing:"3px",textTransform:"uppercase"}),i.innerHTML=`<span>${Be("bossLevel")}</span>`,Ln(i,B.danger),i.onclick=()=>{Te.playSFX("click"),jp()},Mo.appendChild(i)}let vf=null,yf=null,Mf=null,Sf=null;function Vs(){if(qn==="duel"){em();return}const i=$e[0],e=i?i.lives:0;e!==vf&&(Kp.value.textContent=e,vf=e);const t=Math.ceil(hi);if(t!==yf&&(Au.value.textContent=`${t}s`,Au.value.style.color=hi<=10?B.danger:B.text,yf=t),(Fi!==Mf||wr!==Sf)&&(Zp.value.textContent=`${Fi}% / ${wr}%`,Mf=Fi,Sf=wr),fn.length>0){const n=fn.length-Lr();ks.value.textContent=`${n}/${fn.length}`,ks.value.style.color=n===fn.length?B.success:B.text}}function vl(i){Bt!=="PLAYING"||Zt||It||(Te.playSFX("click"),os=typeof i=="boolean"?i:!os,os?(Te.stopEngine(),Ds.style.display="flex",Ds.innerHTML=`<span style="font-family: ${B.font};">${Be("pausedTitle")}</span><br><span style="font-family: ${B.font}; font-size: 22px; color: ${B.dim}; cursor:pointer; display:inline-block; margin-top:20px;">${Be("pausedSub")}</span>`,ci.dataset.textKey="resume",ci.innerText=Be("resume")):(Te.startEngine(),Ds.style.display="none",ci.dataset.textKey="pause",ci.innerText=Be("pause")))}ci.addEventListener("click",vl);Ds.addEventListener("click",()=>vl(!1));document.addEventListener("visibilitychange",()=>{document.hidden&&Bt==="PLAYING"&&vl(!0)});function yl(){Zt=!1,os=!1,It=!1,Bt="MENU",li=0,Te.stopEngine(),Te.startMenuMusic(),Ds.style.display="none",$t.style.display="none",Kn.style.display="none",yi.style.display="none",Xs.style.display="none",Ho.style.display="none",hm(),ht.visible=!1,qn="campaign",rs=null,Pm(),ym(),Ni.group&&(Ni.group.visible=!0),Lt.position.set(0,4,15),ri.set(0,4,0),Lt.lookAt(ri),ci.dataset.textKey="pause",_l(),Nn.style.display="flex"}const fm=()=>Math.floor(Fi*hi*($e[0]?$e[0].lives:1)*rn);function jb(i){const n=document.createElement("canvas");n.width=900,n.height=480;const s=n.getContext("2d");s.fillStyle="#04040f",s.fillRect(0,0,900,480),s.strokeStyle=B.cyan,s.lineWidth=4,s.strokeRect(18,18,864,444),s.textAlign="center",s.fillStyle=B.cyan,s.shadowColor=B.cyan,s.shadowBlur=18,s.font="96px 'VT323', monospace",s.fillText("CUTRON",900/2,132),s.fillStyle=B.amber,s.shadowColor=B.amber,s.font="62px 'VT323', monospace",s.fillText(Be("bossDefeated"),900/2,214),s.shadowBlur=0,s.fillStyle=B.text,s.font="36px 'VT323', monospace",s.fillText(Be("gameCompleted"),900/2,264),s.fillStyle=B.dim,s.font="30px 'VT323', monospace",s.fillText(Be("totalScore"),900/2,332),s.fillStyle=B.success,s.shadowColor=B.success,s.shadowBlur=20,s.font="84px 'VT323', monospace",s.fillText(String(i),900/2,408),s.shadowBlur=0,s.fillStyle=B.dim,s.font="22px 'VT323', monospace",s.fillText(new Date().toLocaleDateString(),900/2,452),s.fillStyle="rgba(0, 0, 0, 0.16)";for(let r=0;r<480;r+=3)s.fillRect(0,r,900,1);return n}let Is=null;function Yb(i){Is=null,jb(i).toBlob(e=>{e&&(Is=new File([e],"cutron.png",{type:"image/png"}))},"image/png")}function $b(i){const e=t=>{i.innerText=Be(t),setTimeout(()=>{i.innerText=Be("share")},2200)};if(!Is){e("shareFailed");return}if(Tt&&navigator.canShare&&navigator.canShare({files:[Is]})){navigator.share({files:[Is],title:"Cutron"}).catch(()=>{});return}if(navigator.clipboard&&window.ClipboardItem){navigator.clipboard.write([new ClipboardItem({"image/png":Is})]).then(()=>e("shareCopied")).catch(()=>bf(e));return}bf(e)}function bf(i){const e=URL.createObjectURL(Is),t=document.createElement("a");t.href=e,t.download="cutron.png",t.click(),setTimeout(()=>URL.revokeObjectURL(e),2e3),i("shareSaved")}function Ef(i,e,t){const n=document.createElement("button");return n.innerText=i,Object.assign(n.style,{fontFamily:B.font,padding:"14px 22px",fontSize:"22px",cursor:"pointer",backgroundColor:"transparent",color:e,border:`2px solid ${e}`,borderRadius:"0"}),Ln(n,e),n.onclick=t,n}function Kb(){Zt=!0,Te.stopEngine(),Te.stopGameMusic(),Te.playSFX("victory"),ht.visible=!1,$e.forEach(r=>{r.group.visible=!1}),Hs.style.display="none",Ws.style.display="none",Wi.style.display="none",$t.style.backgroundColor="#04040f",$t.style.display="flex";const i=fm();(!hn.scores[rn]||i>hn.scores[rn])&&(hn.scores[rn]=i),uh();const e=Object.values(hn.scores).reduce((r,o)=>r+o,0);Yb(e),$t.innerHTML=`
        <div style="font-family: ${B.font}; color: ${B.amber}; font-size: clamp(34px, 6vw, 68px); letter-spacing: 4px; text-shadow: ${B.glow(B.amber)};">${Be("bossDefeated")}</div>
        <div style="font-family: ${B.font}; font-size: clamp(20px, 3vw, 28px); color: ${B.text}; margin-top: 20px;">${Be("gameCompleted")}</div>
        <div style="font-family: ${B.font}; font-size: 24px; color: ${B.dim}; margin-top: 40px; letter-spacing: 2px;">${Be("totalScore")}</div>
        <div style="font-family: ${B.font}; font-size: clamp(40px, 7vw, 76px); color: ${B.success}; text-shadow: ${B.glow(B.success)};">${e}</div>`;const t=document.createElement("div");Object.assign(t.style,{marginTop:"44px",display:"flex",gap:"20px"});const n=Ef(Be("mainMenu"),B.dim,()=>{Te.playSFX("click"),yl()}),s=Ef(Be("share"),B.cyan,()=>{Te.playSFX("click"),$b(s)});t.append(n,s),$t.appendChild(t)}function pm(i,e=""){Zt=!0,Te.stopEngine(),Te.stopGameMusic(),$t.style.display="flex",Wi.style.display="none";let t="";if(i){const o=fm();(!hn.scores[rn]||o>hn.scores[rn])&&(hn.scores[rn]=o),rn===hn.unlocked&&rn<pf&&hn.unlocked++,uh(),t=`<div style="font-family: ${B.font}; font-size: 28px; margin-top: 24px; color: ${B.success};">${Be("score")}: ${o}</div>`,$t.innerHTML=`
            <div style="font-family: ${B.font}; color: ${B.success}; font-size: clamp(34px, 6vw, 68px); text-shadow: ${B.glow(B.success)};">${Be("victory")}</div>
            <div style="font-family: ${B.font}; font-size: 24px; color: ${B.text}; margin-top: 20px;">${Be("captured").replace("%s",Fi)}</div>
            ${t}`}else $t.innerHTML=`
            <div style="font-family: ${B.font}; color: ${B.danger}; font-size: clamp(34px, 6vw, 68px); text-shadow: ${B.glow(B.danger)};">${Be("gameOver")}</div>
            <div style="font-family: ${B.font}; font-size: 24px; color: ${B.text}; margin-top: 20px;">${e}</div>`;const n=document.createElement("div");if(Object.assign(n.style,{marginTop:"40px",display:"flex",gap:"20px"}),i&&rn<pf){const o=document.createElement("button");o.innerText=Be("nextLevel"),Object.assign(o.style,{fontFamily:B.font,padding:"14px 22px",fontSize:"22px",cursor:"pointer",backgroundColor:"transparent",color:B.success,border:`2px solid ${B.success}`,borderRadius:"0"}),Ln(o,B.success),o.onclick=()=>{Te.playSFX("click"),rn+1===pl?jp():sl(rn+1)},n.appendChild(o)}const s=document.createElement("button");s.innerText=Be("playAgain"),Object.assign(s.style,{fontFamily:B.font,padding:"14px 22px",fontSize:"22px",cursor:"pointer",backgroundColor:"transparent",color:B.cyan,border:`2px solid ${B.cyan}`,borderRadius:"0"}),Ln(s,B.cyan),s.onclick=()=>{Te.playSFX("click"),sl(rn)};const r=document.createElement("button");r.innerText=Be("mainMenu"),Object.assign(r.style,{fontFamily:B.font,padding:"14px 22px",fontSize:"22px",cursor:"pointer",backgroundColor:"transparent",color:B.dim,border:`2px solid ${B.dim}`,borderRadius:"0"}),Ln(r,B.dim),r.onclick=()=>{Te.playSFX("click"),yl()},n.appendChild(s),n.appendChild(r),$t.appendChild(n)}function mm(i,e){Zt=!0,Te.stopEngine(),Te.stopGameMusic(),$t.style.display="flex",Wi.style.display="none";const t=i.index===0?"#ff3b5c":"#00b4ff",n=Be(i.labelKey),s=$e.map(l=>`${Be(l.labelKey)} ${l.percentage}%`).join("  ·  ");$t.innerHTML=`
        <div style="font-family: ${B.font}; color: ${t}; font-size: clamp(26px, 5vw, 54px); text-shadow: ${B.glow(t)};">${Be("duelWins").replace("%s",n)}</div>
        <div style="font-family: ${B.font}; font-size: 16px; color: ${B.text}; margin-top: 20px;">${n} ${Be(e)}</div>
        <div style="font-family: ${B.font}; font-size: 18px; color: ${B.dim}; margin-top: 16px;">${s}</div>`;const r=document.createElement("div");Object.assign(r.style,{marginTop:"40px",display:"flex",gap:"20px"});const o=document.createElement("button");o.innerText=Be("playAgain"),Object.assign(o.style,{fontFamily:B.font,padding:"14px 22px",fontSize:"22px",cursor:"pointer",backgroundColor:"transparent",color:B.cyan,border:`2px solid ${B.cyan}`,borderRadius:"0"}),Ln(o,B.cyan),o.onclick=()=>{Te.playSFX("click"),Dm()};const a=document.createElement("button");a.innerText=Be("mainMenu"),Object.assign(a.style,{fontFamily:B.font,padding:"14px 22px",fontSize:"22px",cursor:"pointer",backgroundColor:"transparent",color:B.dim,border:`2px solid ${B.dim}`,borderRadius:"0"}),Ln(a,B.dim),a.onclick=()=>{Te.playSFX("click"),yl()},r.append(o,a),$t.appendChild(r)}const Zb=new wx(16777215,1.05);tn.add(Zb);const Zn=new Ip(16777215,1.45);Zn.position.set(10,20,10);Zn.castShadow=!0;Zn.shadow.mapSize.width=1024;Zn.shadow.mapSize.height=1024;const Ml=25;Zn.shadow.camera.left=-Ml;Zn.shadow.camera.right=Ml;Zn.shadow.camera.top=Ml;Zn.shadow.camera.bottom=-Ml;Zn.shadow.camera.near=.5;Zn.shadow.camera.far=100;tn.add(Zn);const je=100,te=.25,Ie=je*te,wt=1,Jb=(je-2)*(je-2);let we=[];const $e=[],Bi=[],ht=new ln;ht.visible=!1;tn.add(ht);const Qb=new Ap({color:3487083}),yh=new pt(new Xr(Ie,Ie),Qb);yh.rotation.x=-Math.PI/2;yh.receiveShadow=!0;ht.add(yh);const qs=je*je,eE=new us(te,wt,te),tE=new Ap,dt=new Qu(eE,tE,qs);dt.castShadow=!1;dt.receiveShadow=!0;dt.instanceMatrix.setUsage(tp);ht.add(dt);const rt=new bt,Xn=0,Dn=5,Sl=i=>i===0?1:3,gm=i=>i===0?2:4,jt=i=>i===1||i===3,fi=i=>i===2||i===4,xm=i=>i===1?0:1,pi=i=>i===2?0:1,nE=new ze(4872826),iE=new ze(55807),Mh=()=>qn==="duel"?nE:iE,Cu={campaign:[{captured:55807,trail:16752675,tint:null}],duel:[{captured:16726876,trail:16751280,tint:16726876},{captured:46335,trail:10216703,tint:46335}]},un=new Int32Array(qs),gr=new Int32Array(qs),Ec=new Uint8Array(qs),ho=new Uint8Array(qs),Tc=new Uint8Array(qs),sE=180,_m=new ze(16773876),rE=9,as=[];function dn(i,e){return e*je+i}function js(i,e,t,n,s=!0){const r=i*te-Ie/2+te/2,o=e*te-Ie/2+te/2,a=wt/2,l=dn(i,e);if(we[e][i]=n,dt.setColorAt(l,t),as.length>0){const c=as.findIndex(u=>u.index===l);c!==-1&&as.splice(c,1)}s?(rt.position.set(r,a-wt,o),rt.scale.set(1,1,1),rt.updateMatrix(),dt.setMatrixAt(l,rt.matrix),Bi.push({index:l,x:r,z:o,currentY:a-wt,targetY:a})):(rt.position.set(r,a,o),rt.scale.set(1,1,1),rt.updateMatrix(),dt.setMatrixAt(l,rt.matrix)),dt.instanceMatrix.needsUpdate=!0,dt.instanceColor&&(dt.instanceColor.needsUpdate=!0)}function vm(){for(let i=0;i<je;i++){we[i]||(we[i]=[]);for(let e=0;e<je;e++)if(e===0||e===je-1||i===0||i===je-1)we[i][e]=Dn,js(e,i,Mh(),Dn,!1);else{we[i][e]=0;const t=dn(e,i);rt.scale.set(0,0,0),rt.updateMatrix(),dt.setMatrixAt(t,rt.matrix)}}dt.instanceMatrix.needsUpdate=!0,Bi.length=0,as.length=0,$e.forEach(i=>{i.trail.length=0,i.percentage=0}),Fi=0}const wc=3.4,oE=22,aE=16;function lE(i,e){if(!i)return;const t=9,n=je-2*t,s=Sl(e.index),r=Math.floor((e.startX+Ie/2)/te),o=Math.floor((e.startZ+Ie/2)/te),a=[];for(let l=0;l<i;l++)for(let c=0;c<200;c++){const u=t+Math.floor(Math.random()*n),h=t+Math.floor(Math.random()*n);if(Math.hypot(u-r,h-o)<aE||a.some(f=>Math.hypot(f.x-u,f.z-h)<oE))continue;a.push({x:u,z:h});const d=Math.floor(wc);for(let f=-d;f<=d;f++)for(let p=-d;p<=d;p++)p*p+f*f>wc*wc||js(u+p,h+f,e.colorCaptured,s,!1);break}return a}for(let i=0;i<qs;i++)rt.scale.set(0,0,0),rt.updateMatrix(),dt.setMatrixAt(i,rt.matrix);vm();function Pu(i,e){const t=new ln;t.position.set(e.startX,0,e.startZ),tn.add(t);const n={index:i,group:t,model:null,rotor1:null,rotor2:null,keys:e.keys,labelKey:e.labelKey,colorCaptured:new ze(e.colors.captured),colorTrail:new ze(e.colors.trail),tint:e.colors.tint,startX:e.startX,startZ:e.startZ,velocityX:0,velocityZ:0,lastGridX:-1,lastGridZ:-1,lastTrailDir:null,trail:[],collapsing:!1,collapseProgress:0,collapseReason:null,trailBroken:!1,lives:3,isRespawning:!1,percentage:0};return $e.push(n),Sh(n),n}function cE(i){i.group.position.set(i.startX,0,i.startZ),i.group.rotation.set(0,0,0),i.group.visible=!0,i.velocityX=0,i.velocityZ=0,i.lastGridX=-1,i.lastGridZ=-1,i.lastTrailDir=null,i.trail.length=0,i.collapsing=!1,i.collapseProgress=0,i.collapseReason=null,i.trailBroken=!1,i.isRespawning=!1}function ym(){$e.forEach(i=>tn.remove(i.group)),$e.length=0}const Lu=i=>$e.filter(e=>e!==i);function Xo(i,e,t){if(Bt!=="PLAYING"||It||Zt)return!1;let n=!1;for(const s of $e){if(s.isRespawning)continue;const r=s.group.position.x-i.x,o=s.group.position.z-i.z;Math.hypot(r,o)<e&&(Zr(s,Be(t)),n=!0)}return n}const Tf=()=>qn==="duel"||!$e.some(i=>i.isRespawning);function uE(i){const t=document.createElement("canvas");t.width=t.height=192;const n=t.getContext("2d"),s=192/2,r=s*.97,o=s*.6,a=240;for(let c=0;c<a;c++){const u=c/a*2%1,h=Math.pow(1-u,2.4);if(h<.004)continue;const d=c/a*Math.PI*2,f=(c+1.6)/a*Math.PI*2,p=i?-f:d,x=i?-d:f,m=o+(r-o)*(.35+.65*h);n.beginPath(),n.arc(s,s,r,p,x),n.arc(s,s,r-(m-o),x,p,!0),n.closePath(),n.fillStyle=`rgba(226, 240, 255, ${(.14*h).toFixed(4)})`,n.fill()}const l=new mp(t);return l.colorSpace=Wt,l}const hE=new OS;let Xa=null;const Iu=[];hE.load("Sprite_drone_2.glb",i=>{const e=i.scene;e.scale.set(.15,.15,.15);const t=e.getObjectByName("Rotor_one"),n=e.getObjectByName("Rotor_two");e.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0)}),e.traverse(r=>{!r.isMesh||!r.material||!r.material.emissive||(r.material=r.material.clone(),r.material.emissive.setHex(4016739),r.material.emissiveIntensity=1)}),e.updateWorldMatrix(!0,!0);const s=new L;[t,n].forEach((r,o)=>{if(!r)return;new gi().setFromObject(r).getSize(s);const a=Math.max(s.x,s.z)*.5/e.scale.x,l=new pt(new Bs(a*.58,a*1.06,48),new Rt({map:uE(o===0),transparent:!0,blending:cs,depthWrite:!1,side:an}));l.rotation.x=-Math.PI/2,l.userData.isRotorWake=!0,r.add(l)}),Xa=e,Iu.forEach(Sh),Iu.length=0});function Sh(i){if(!Xa){Iu.push(i);return}const e=Xa.clone();if(e.scale.copy(Xa.scale),i.scaleMultiplier&&e.scale.multiplyScalar(i.scaleMultiplier),i.tint!==null&&i.tint!==void 0){const t=new ze(i.tint);e.traverse(n=>{!n.isMesh||!n.material||n.userData.isRotorWake||n.material.color&&(n.material=n.material.clone(),n.material.color.lerp(t,.6),n.material.emissive&&n.material.emissive.copy(t).multiplyScalar(.25))})}i.model=e,i.rotor1=e.getObjectByName("Rotor_one"),i.rotor2=e.getObjectByName("Rotor_two"),i.group.add(e)}const Ni={group:new ln,model:null,rotor1:null,rotor2:null,tint:null,scaleMultiplier:1.35};tn.add(Ni.group);Sh(Ni);function wf(i,e){i.rotor1&&(i.rotor1.rotation.y+=15*e),i.rotor2&&(i.rotor2.rotation.y-=15*e)}const bh=15;let Du=bh;const Af=8,Oo={wasd:{up:"w",down:"s",left:"a",right:"d"},arrows:{up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"}},Mr=new Set,Mm=new Set([...Object.values(Oo.wasd),...Object.values(Oo.arrows)]);window.addEventListener("keydown",i=>{const e=i.key.toLowerCase();Mm.has(e)&&(e.startsWith("arrow")&&i.preventDefault(),Mr.add(e))});window.addEventListener("keyup",i=>{const e=i.key.toLowerCase();Mm.has(e)&&Mr.delete(e)});window.addEventListener("keydown",i=>{i.key!=="Escape"&&i.code!=="Space"||Bt==="PLAYING"&&(i.preventDefault(),document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),vl())});window.addEventListener("resize",()=>{Lt.aspect=window.innerWidth/window.innerHeight,Lt.updateProjectionMatrix(),Ar.resize(),jn.refresh()});const bl=600,dE=new us(.15,.15,.15),bn=new Qu(dE,new Rt,bl);bn.instanceMatrix.setUsage(tp);bn.frustumCulled=!1;tn.add(bn);const Sm=9109504,Eh=2236962,Th=16746496,Rf=[16766720,65450,43775,16711850,16777215],kn=new bt,Wo=[],wh=[];for(let i=bl-1;i>=0;i--)Wo[i]={active:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,rot:0,life:0},wh.push(i),kn.scale.set(0,0,0),kn.updateMatrix(),bn.setMatrixAt(i,kn.matrix);const fE=new ze;function qo(i,e,t,n,s,r,o,a){const l=wh.pop();if(l===void 0)return;const c=Wo[l];c.active=!0,c.x=i,c.y=e,c.z=t,c.vx=n,c.vy=s,c.vz=r,c.rot=0,c.life=o,bn.setColorAt(l,fE.setHex(a)),bn.instanceColor&&(bn.instanceColor.needsUpdate=!0)}function bm(i){Wo[i].active=!1,wh.push(i),kn.scale.set(0,0,0),kn.updateMatrix(),bn.setMatrixAt(i,kn.matrix)}function Gs(i,e,t,n=45,s=[Sm,Eh]){for(let r=0;r<n;r++){const o=Math.random()*Math.PI*2,a=Math.random()*8+4,l=Math.random()*10+5;qo(i,e,t,Math.cos(o)*a,l,Math.sin(o)*a,1,s[Math.floor(Math.random()*s.length)])}bn.instanceMatrix.needsUpdate=!0}function Ah(i,e,t){const n=Rf[Math.floor(Math.random()*Rf.length)];for(let s=0;s<40;s++){const r=Math.random()*Math.PI*2,o=Math.random()*10+2,a=Math.random()*12+4;qo(i,e,t,Math.cos(r)*o,a,Math.sin(r)*o,1.2,n)}bn.instanceMatrix.needsUpdate=!0}const nl=te*1.5,Em=new Fo(nl*.72,nl,te*.7,8),pE=new Rt({color:1381663}),mE=new Os(Em),Nu=13041454,gE=15925200,xE=new Gi({color:Nu}),_E=new Bs(nl*.78,nl*1.15,8);function vE(){const i=te*1.9,e=te*.66,t=new Mp;t.moveTo(-e,-i),t.lineTo(e,-i),t.lineTo(e,-e),t.lineTo(i,-e),t.lineTo(i,e),t.lineTo(e,e),t.lineTo(e,i),t.lineTo(-e,i),t.lineTo(-e,e),t.lineTo(-i,e),t.lineTo(-i,-e),t.lineTo(-e,-e),t.closePath();const n=new sh(t,{depth:te*.7,bevelEnabled:!1});return n.center(),n}function yE(){const i=te*1.5,e=te*1.75,t=new Qa(i,e,6);t.rotateX(Math.PI),t.translate(0,e/2,0);const n=new Qa(i,e,6);return n.translate(0,-e/2,0),NS([t,n],!1)}const ME=new Bs(te*1.7,te*2.4,8),SE=10,Tm=5,Cf=vE(),Pf=yE();function bE(i){const e=t=>t<0||t>1?0:Math.pow(1-t,3);return Math.max(e(i/.18),e((i-.26)/.2)*.75)}const EE={life:{color:16723349,geometry:Cf,edges:new Os(Cf),body:new Rt({color:4000804}),sparks:[16723349,16762082],canTake:i=>i.lives<Tm,take:i=>{i.lives++}},time:{color:16763196,geometry:Pf,edges:new Os(Pf),body:new Rt({color:3812360}),sparks:[16763196,16774872],canTake:()=>!0,take:()=>{hi+=SE}}},il=()=>40+Math.random()*50,Pi=[],wm={life:{timer:0,delay:il()},time:{timer:0,delay:il()}};class TE{constructor(e,t,n){this.kind=e,this.config=EE[e],this.isDead=!1,this.bob=Math.random()*Math.PI*2,this.pulsePhase=0,this.sandTimer=0,this.mesh=new ln,this.mesh.position.set(t,wt+.5,n),this.body=new pt(this.config.geometry,this.config.body),this.body.add(new Us(this.config.edges,new Gi({color:this.config.color}))),this.mesh.add(this.body),this.ringMaterial=new Rt({color:this.config.color,transparent:!0,opacity:.4,blending:cs,depthWrite:!1,side:an}),this.ring=new pt(ME,this.ringMaterial),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=-.42,this.mesh.add(this.ring),ht.add(this.mesh)}remove(){ht.remove(this.mesh),this.isDead=!0}update(e){if(this.isDead)return;this.mesh.rotation.y+=1.1*e,this.bob+=e*2.2,this.mesh.position.y=wt+.5+Math.sin(this.bob)*.09,this.pulsePhase=(this.pulsePhase+e/(this.kind==="life"?1.1:2.2))%1;const t=this.kind==="life"?bE(this.pulsePhase):Math.sin(this.pulsePhase*Math.PI*2)*.5+.5;this.ring.scale.setScalar(1+t*.18),this.ringMaterial.opacity=.25+t*.45,this.kind==="life"&&this.body.scale.setScalar(1+t*.07),this.kind==="time"&&(this.sandTimer-=e,this.sandTimer<=0&&(this.sandTimer=.12,qo(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z,0,-.9,0,.3,16774872)));const n=Math.floor((this.mesh.position.x+Ie/2)/te),s=Math.floor((this.mesh.position.z+Ie/2)/te);if(we[s]&&!jt(we[s][n])){this.remove();return}for(const r of $e){if(r.isRespawning||!this.config.canTake(r))continue;const o=r.group.position.x-this.mesh.position.x,a=r.group.position.z-this.mesh.position.z;if(Math.hypot(o,a)<te*2.4){this.config.take(r),Te.playSFX("pickup"),Gs(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z,24,this.config.sparks),this.remove(),Vs();return}}}}function Lf(i,e){const s=je-8;for(let r=0;r<150;r++){const o=4+Math.floor(Math.random()*s),a=4+Math.floor(Math.random()*s);if(!jt(we[a][o]))continue;let l=!0;for(let u=-2;u<=2&&l;u++)for(let h=-2;h<=2;h++)if(we[a+u]&&!jt(we[a+u][o+h])){l=!1;break}if(!l)continue;let c=!0;for(const u of e){const h=Math.floor((u.mesh.position.x+Ie/2)/te),d=Math.floor((u.mesh.position.z+Ie/2)/te),f=o-h,p=a-d;if(f*f+p*p<i*i){c=!1;break}}if(c)return{x:o*te-Ie/2+te/2,z:a*te-Ie/2+te/2}}return null}const ii=[];let Wa=0;class wE{constructor(e,t){this.radius=te*.4,this.isDead=!1,this.timer=5,this.mesh=new ln,this.mesh.position.set(e,15,t),this.targetY=wt;const n=document.createElement("canvas");n.width=128,n.height=128;const s=n.getContext("2d"),r=new mp(n);this.textSprite=new u0(new up({map:r,transparent:!0})),this.textSprite.position.y=.75,this.textSprite.scale.set(.95,.95,1),this.textSprite.visible=!1,this.textCanvas=n,this.textCtx=s,this.textTexture=r,this.mesh.add(this.textSprite),this.isTriggered=!1,this.lastDisplayedSecond=-1;const o=new pt(Em,pE);o.position.y=te*.35,o.add(new Us(mE,xE)),this.mesh.add(o),this.ringMaterial=new Rt({color:Nu,transparent:!0,opacity:.55,blending:cs,depthWrite:!1,side:an}),this.ring=new pt(_E,this.ringMaterial),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=te*.72,this.mesh.add(this.ring),this.pulsePhase=0,ht.add(this.mesh)}updateCountdownText(e){if(e===this.lastDisplayedSecond)return;this.lastDisplayedSecond=e,Te.playSFX("beep");const t=this.textCtx;t.clearRect(0,0,128,128),t.fillStyle="rgba(8, 8, 16, 0.92)",t.beginPath(),t.arc(64,64,52,0,Math.PI*2),t.fill(),t.lineWidth=6,t.strokeStyle=e<=2?"#f2ffd0":"#c6ff2e",t.stroke(),t.font="bold 86px monospace",t.textAlign="center",t.textBaseline="middle",t.lineWidth=8,t.strokeStyle="#000000",t.strokeText(e.toString(),64,68),t.fillStyle=e<=2?"#ffffff":"#dcff8a",t.fillText(e.toString(),64,68),this.textTexture.needsUpdate=!0}explodeMine(){Te.playSFX("explosion");const e=Math.floor((this.mesh.position.x+Ie/2)/te),t=Math.floor((this.mesh.position.z+Ie/2)/te);let n=!1;const s=7;for(let r=-s;r<=s;r++)for(let o=-s;o<=s;o++)if(o*o+r*r<=s*s){const a=e+o,l=t+r;if(a>0&&a<je-1&&l>0&&l<je-1&&jt(we[l][a])){we[l][a]=Xn;const c=dn(a,l);rt.scale.set(0,0,0),rt.updateMatrix(),dt.setMatrixAt(c,rt.matrix),n=!0}}if(n&&(dt.instanceMatrix.needsUpdate=!0,Tl()),Gs(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z,80,[Sm,Th,Eh]),Bt==="PLAYING"&&!It&&!Zt)for(const r of $e){if(r.isRespawning)continue;const o=r.group.position.x-this.mesh.position.x,a=r.group.position.z-this.mesh.position.z;Math.sqrt(o*o+a*a)<s*te&&Zr(r,Be("reasonMine"))}}update(e){if(this.isDead)return;this.mesh.position.y>this.targetY&&(this.mesh.position.y-=15*e,this.mesh.position.y<this.targetY&&(this.mesh.position.y=this.targetY));const t=Math.floor((this.mesh.position.x+Ie/2)/te),n=Math.floor((this.mesh.position.z+Ie/2)/te);if(this.mesh.position.y<=this.targetY+.1&&we[n]&&!jt(we[n][t])){this.explodeMine(),ht.remove(this.mesh),this.isDead=!0;return}const s=this.isTriggered?Math.max(0,1-this.timer/5):0;this.pulsePhase+=e*(2.5+s*22);const r=Math.sin(this.pulsePhase)*.5+.5;if(this.ring.scale.setScalar(1+r*(.12+s*.4)),this.ringMaterial.opacity=.3+r*(.3+s*.45),this.ringMaterial.color.setHex(s>.6?gE:Nu),this.isTriggered&&(this.timer-=e,this.updateCountdownText(Math.ceil(this.timer)),this.timer<=0)){this.explodeMine(),ht.remove(this.mesh),this.isDead=!0;return}if(Bt==="PLAYING"&&!It&&!this.isTriggered)for(const o of $e){if(o.isRespawning)continue;const a=o.group.position.x-this.mesh.position.x,l=o.group.position.z-this.mesh.position.z;if(Math.sqrt(a*a+l*l)<te*4){this.isTriggered=!0,this.textSprite.visible=!0;break}}}}const El=1.6;class Am{constructor(e,t){this.radius=te*.48,this.colRadius=te*.4,this.mesh=new pt(new ul(this.radius*El,12,12),new Rt({color:15397119})),this.mesh.position.set(e,wt/2,t),this.mesh.castShadow=!0,ht.add(this.mesh);const n=7,s=Math.random()*Math.PI*2;this.vx=Math.cos(s)*n,this.vz=Math.sin(s)*n}update(e){let t=!1,n=this.mesh.position.x+this.vx*e,s=Math.floor((n+Math.sign(this.vx)*this.colRadius+Ie/2)/te),r=Math.floor((this.mesh.position.z+Ie/2)/te),o=we[r]&&we[r][s]!==void 0?we[r][s]:1;jt(o)||o===Dn?(n=this.vx>0?s*te-Ie/2-this.colRadius-.001:(s+1)*te-Ie/2+this.colRadius+.001,this.vx*=-1,t=!0):fi(o)&&Hi($e[pi(o)],"reasonEnemyTrail"),this.mesh.position.x=n;let a=this.mesh.position.z+this.vz*e,l=Math.floor((this.mesh.position.x+Ie/2)/te),c=Math.floor((a+Math.sign(this.vz)*this.colRadius+Ie/2)/te),u=we[c]&&we[c][l]!==void 0?we[c][l]:1;jt(u)||u===Dn?(a=this.vz>0?c*te-Ie/2-this.colRadius-.001:(c+1)*te-Ie/2+this.colRadius+.001,this.vz*=-1,t=!0):fi(u)&&Hi($e[pi(u)],"reasonEnemyTrail"),this.mesh.position.z=a,t&&Te.playSFX("bounce"),Xo(this.mesh.position,this.radius+te*.5,"reasonEnemyHit")}}class AE{constructor(e,t){this.radius=te*.72,this.colRadius=te*.4,this.mesh=new pt(new cl(this.radius*El,0),new Rt({color:12865023})),this.mesh.position.set(e,wt/2,t),this.mesh.castShadow=!0,ht.add(this.mesh);const n=5,s=Math.random()*Math.PI*2;this.vx=Math.cos(s)*n,this.vz=Math.sin(s)*n}eat(e,t){let n=!1;const s=2;for(let r=-s;r<=s;r++)for(let o=-s;o<=s;o++){const a=e+o,l=t+r;if(a>0&&a<je-1&&l>0&&l<je-1&&jt(we[l][a])){we[l][a]=Xn;const c=dn(a,l);rt.scale.set(0,0,0),rt.updateMatrix(),dt.setMatrixAt(c,rt.matrix),n=!0}}n&&(dt.instanceMatrix.needsUpdate=!0,Tl())}update(e){let t=!1,n=this.mesh.position.x+this.vx*e,s=Math.floor((n+Math.sign(this.vx)*this.colRadius+Ie/2)/te),r=Math.floor((this.mesh.position.z+Ie/2)/te),o=we[r]&&we[r][s]!==void 0?we[r][s]:1;jt(o)||o===Dn?(this.eat(s,r),n=this.vx>0?s*te-Ie/2-this.colRadius-.001:(s+1)*te-Ie/2+this.colRadius+.001,this.vx*=-1,t=!0):fi(o)&&Hi($e[pi(o)],"reasonEaterTrail"),this.mesh.position.x=n;let a=this.mesh.position.z+this.vz*e,l=Math.floor((this.mesh.position.x+Ie/2)/te),c=Math.floor((a+Math.sign(this.vz)*this.colRadius+Ie/2)/te),u=we[c]&&we[c][l]!==void 0?we[c][l]:1;jt(u)||u===Dn?(this.eat(l,c),a=this.vz>0?c*te-Ie/2-this.colRadius-.001:(c+1)*te-Ie/2+this.colRadius+.001,this.vz*=-1,t=!0):fi(u)&&Hi($e[pi(u)],"reasonEaterTrail"),this.mesh.position.z=a,this.mesh.rotation.x+=4*e,this.mesh.rotation.y+=4*e,t&&Te.playSFX("bounce"),Xo(this.mesh.position,this.radius+te*.5,"reasonEaterHit")}}class Rm{constructor(e,t,n){this.radius=te*.3,this.colRadius=te*.25,this.mesh=new pt(new ul(this.radius*El,8,8),new Rt({color:16756768})),this.mesh.position.set(e,wt/2,t),ht.add(this.mesh);const s=12;this.vx=Math.cos(n)*s,this.vz=Math.sin(n)*s,this.isDead=!1}eat(e,t){let n=!1;const s=5;for(let r=-s;r<=s;r++)for(let o=-s;o<=s;o++)if(o*o+r*r<=s*s){const a=e+o,l=t+r;if(a>0&&a<je-1&&l>0&&l<je-1&&jt(we[l][a])){we[l][a]=Xn;const c=dn(a,l);rt.scale.set(0,0,0),rt.updateMatrix(),dt.setMatrixAt(c,rt.matrix),n=!0}}n&&(dt.instanceMatrix.needsUpdate=!0,Tl())}update(e){if(this.isDead)return;let t=this.mesh.position.x+this.vx*e,n=this.mesh.position.z+this.vz*e,s=Math.floor((t+Math.sign(this.vx)*this.colRadius+Ie/2)/te),r=Math.floor((this.mesh.position.z+Ie/2)/te),o=Math.floor((n+Math.sign(this.vz)*this.colRadius+Ie/2)/te),a=Math.floor((this.mesh.position.x+Ie/2)/te),l=!1;if(s<=0||s>=je-1||o<=0||o>=je-1)l=!0;else if(we[r]&&(jt(we[r][s])||we[r][s]===Dn))this.eat(s,r),l=!0;else if(we[o]&&(jt(we[o][a])||we[o][a]===Dn))this.eat(a,o),l=!0;else{const c=we[r]?we[r][s]:void 0,u=we[o]?we[o][a]:void 0,h=fi(c)?c:fi(u)?u:null;h!==null&&(Hi($e[pi(h)],"reasonFireballTrail"),l=!0)}if(l){Gs(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z,45,[Th,Eh]),ht.remove(this.mesh),this.isDead=!0;return}this.mesh.position.x=t,this.mesh.position.z=n,Xo(this.mesh.position,this.radius+te*.5,"reasonFireballHit")&&(ht.remove(this.mesh),this.isDead=!0)}}class RE{constructor(e,t){this.radius=te*1,this.colRadius=te*.4;const n=new Bo(this.radius*El,0);this.mesh=new pt(n,new Rt({color:1710628})),this.mesh.add(new Us(new Os(n),new Gi({color:16738816}))),this.mesh.position.set(e,wt/2,t),this.mesh.castShadow=!0,ht.add(this.mesh);const s=2.5,r=Math.random()*Math.PI*2;this.vx=Math.cos(r)*s,this.vz=Math.sin(r)*s,this.fireTimer=0}update(e){let t=!1;this.fireTimer+=e,this.fireTimer>=5&&(ss.push(new Rm(this.mesh.position.x,this.mesh.position.z,Math.random()*Math.PI*2)),this.fireTimer=0);let n=this.mesh.position.x+this.vx*e,s=Math.floor((n+Math.sign(this.vx)*this.colRadius+Ie/2)/te),r=Math.floor((this.mesh.position.z+Ie/2)/te),o=we[r]&&we[r][s]!==void 0?we[r][s]:1;jt(o)||o===Dn?(n=this.vx>0?s*te-Ie/2-this.colRadius-.001:(s+1)*te-Ie/2+this.colRadius+.001,this.vx*=-1,t=!0):fi(o)&&Hi($e[pi(o)],"reasonBomberTrail"),this.mesh.position.x=n;let a=this.mesh.position.z+this.vz*e,l=Math.floor((this.mesh.position.x+Ie/2)/te),c=Math.floor((a+Math.sign(this.vz)*this.colRadius+Ie/2)/te),u=we[c]&&we[c][l]!==void 0?we[c][l]:1;jt(u)||u===Dn?(a=this.vz>0?c*te-Ie/2-this.colRadius-.001:(c+1)*te-Ie/2+this.colRadius+.001,this.vz*=-1,t=!0):fi(u)&&Hi($e[pi(u)],"reasonBomberTrail"),this.mesh.position.z=a,this.mesh.rotation.x+=4*e,this.mesh.rotation.y+=4*e,t&&Te.playSFX("bounce"),Xo(this.mesh.position,this.radius+te*.5,"reasonBomberHit")}}const Ss=te*4,CE=1.15,PE=.5,If=10,Df=12,Nf=1.6,xr=4,Ac=16722474,Uf=16742938,bs=10312703,LE=6,IE=.7,DE=.5,fn=[];let ft=null;const Lr=()=>fn.reduce((i,e)=>i+(e.active?1:0),0);class NE{constructor(e,t){this.gridX=e,this.gridZ=t,this.active=!0,this.checkTimer=0,this.pulsePhase=Math.random()*Math.PI*2;const n=e*te-Ie/2+te/2,s=t*te-Ie/2+te/2;this.mesh=new ln,this.mesh.position.set(n,0,s);const r=new Fo(te*.9,te*1.4,wt*1.8,6),o=new pt(r,new Rt({color:1315108}));o.position.y=wt*.9,this.edgeMaterial=new Gi({color:bs}),o.add(new Us(new Os(r),this.edgeMaterial)),this.mesh.add(o),this.coreMaterial=new Rt({color:bs,transparent:!0,opacity:.9}),this.core=new pt(new Bo(te*.8,0),this.coreMaterial),this.core.position.y=wt*2.15,this.mesh.add(this.core);const a=new Dt;a.setAttribute("position",new qt(new Float32Array(6),3)),this.beamMaterial=new Gi({color:bs,transparent:!0,opacity:.5}),this.beam=new al(a,this.beamMaterial),this.beam.frustumCulled=!1,ht.add(this.mesh,this.beam)}capturedRatio(){let e=0,t=0;const n=LE;for(let s=-n;s<=n;s++)for(let r=-n;r<=n;r++){if(r*r+s*s>n*n)continue;const o=this.gridX+r,a=this.gridZ+s;o<=0||o>=je-1||a<=0||a>=je-1||(e++,jt(we[a][o])&&t++)}return e===0?0:t/e}deactivate(){this.active=!1,this.coreMaterial.color.setHex(3814736),this.edgeMaterial.color.setHex(3814736),this.beam.visible=!1,Gs(this.mesh.position.x,wt*2,this.mesh.position.z,30,[bs,16777215]),Vs();const e=fn.length-Lr(),t=e===fn.length;Te.playSFX(t?"disarm":"power"),xf(`${e}/${fn.length}`,t?B.success:Jp,ks.wrap),t&&_f(Be("bossDisarmed"),B.success)}reactivate(){const e=Lr()===0;this.active=!0,this.coreMaterial.color.setHex(bs),this.edgeMaterial.color.setHex(bs),this.beam.visible=!0,Te.playSFX("alarm"),Gs(this.mesh.position.x,wt*2,this.mesh.position.z,18,[bs,16722474]),Vs();const t=fn.length-Lr();xf(`${t}/${fn.length}`,B.danger,ks.wrap),e&&_f(Be("bossRecharging"),B.danger)}update(e){if(this.pulsePhase+=e*3,this.checkTimer+=e,this.checkTimer>.3){this.checkTimer=0;const n=this.capturedRatio();if(this.active&&n>=IE){this.deactivate();return}!this.active&&n<DE&&this.reactivate()}if(!this.active)return;const t=Math.sin(this.pulsePhase)*.5+.5;if(this.core.rotation.y+=e*2,this.core.scale.setScalar(.85+t*.3),this.coreMaterial.opacity=.6+t*.4,ft&&!ft.isDead){const n=this.beam.geometry.attributes.position;n.setXYZ(0,this.mesh.position.x,wt*2.15,this.mesh.position.z),n.setXYZ(1,ft.mesh.position.x,ft.mesh.position.y,ft.mesh.position.z),n.needsUpdate=!0,this.beamMaterial.opacity=.25+t*.35}else this.beam.visible=!1}remove(){ht.remove(this.mesh),ht.remove(this.beam)}}class UE{constructor(e,t){this.radius=Ss,this.fireTimer=0,this.pulsePhase=Math.random()*Math.PI*2,this.isDead=!1,this.mesh=new ln,this.mesh.position.set(e,wt*.9,t);const n=new cl(Ss,0);this.core=new pt(n,new Rt({color:1050124})),this.core.add(new Us(new Os(n),new Gi({color:Ac}))),this.mesh.add(this.core);const s=new Bo(Ss*1.5,0);this.cage=new Us(new Os(s),new Gi({color:Uf,transparent:!0,opacity:.7})),this.mesh.add(this.cage),this.ringMaterial=new Rt({color:Ac,transparent:!0,opacity:.35,blending:cs,depthWrite:!1,side:an}),this.ring=new pt(new Bs(Ss*.9,Ss*1.3,24),this.ringMaterial),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=wt*.15,this.mesh.add(this.ring),this.chargeMaterial=new Rt({color:16773328,transparent:!0,opacity:0,blending:cs,depthWrite:!1,side:an}),this.chargeRing=new pt(new Bs(Ss*.95,Ss*1.15,32),this.chargeMaterial),this.chargeRing.rotation.x=-Math.PI/2,this.chargeRing.position.y=wt*.2,this.chargeRing.visible=!1,this.mesh.add(this.chargeRing),this.isCharging=!1,ht.add(this.mesh)}nearestPlayer(){let e=null,t=1/0;for(const n of $e){if(n.isRespawning)continue;const s=Math.hypot(n.group.position.x-this.mesh.position.x,n.group.position.z-this.mesh.position.z);s<t&&(t=s,e=n)}return e}crush(){const e=Math.floor((this.mesh.position.x+Ie/2)/te),t=Math.floor((this.mesh.position.z+Ie/2)/te);let n=0;for(let s=-xr;s<=xr;s++)for(let r=-xr;r<=xr;r++){if(r*r+s*s>xr*xr)continue;const o=e+r,a=t+s;if(o<=0||o>=je-1||a<=0||a>=je-1)continue;const l=we[a][o];if(fi(l)){Hi($e[pi(l)],"reasonBossTrail");continue}jt(l)&&(we[a][o]=Xn,rt.scale.set(0,0,0),rt.updateMatrix(),dt.setMatrixAt(dn(o,a),rt.matrix),n++)}if(n>0&&(dt.instanceMatrix.needsUpdate=!0,Tl(),Math.random()<.4)){const s=Math.random()*Math.PI*2;qo(this.mesh.position.x,wt,this.mesh.position.z,Math.cos(s)*3,Math.random()*4+2,Math.sin(s)*3,.4,Uf)}return n}fire(){if(!(Lr()<=0)){Te.playSFX("explosion");for(let e=0;e<Df;e++){const t=e/Df*Math.PI*2;ss.push(new Rm(this.mesh.position.x+Math.cos(t)*this.radius,this.mesh.position.z+Math.sin(t)*this.radius,t))}li=.45}}explode(){if(!this.isDead){this.isDead=!0,Te.playSFX("explosion");for(let e=0;e<4;e++)Gs(this.mesh.position.x,this.mesh.position.y+e*.4,this.mesh.position.z,70,[16777215,Th,Ac]);ht.remove(this.mesh),li=1.4,Vb(900,4.5)}}update(e){if(this.isDead)return;const t=Lr()>0,n=If-this.fireTimer,s=t&&n<=Nf;t?(this.fireTimer+=e,this.fireTimer>=If&&(this.fire(),this.fireTimer=0)):this.fireTimer=0;const o=this.crush()>0?PE:CE,a=this.nearestPlayer();if(a&&!s){const c=a.group.position.x-this.mesh.position.x,u=a.group.position.z-this.mesh.position.z,h=Math.hypot(c,u)||1,d=Ie/2-te*2;this.mesh.position.x=yn.clamp(this.mesh.position.x+c/h*o*e,-d,d),this.mesh.position.z=yn.clamp(this.mesh.position.z+u/h*o*e,-d,d)}this.core.rotation.y+=.35*e,this.core.rotation.x+=.18*e,this.cage.rotation.y-=.55*e,this.pulsePhase+=e*2.4;const l=Math.sin(this.pulsePhase)*.5+.5;if(this.ringMaterial.opacity=t?.2+l*.35:.07,this.ring.scale.setScalar(t?1+l*.08:1),s){const c=1-n/Nf;this.isCharging||(this.isCharging=!0,Te.playSFX("charge"));const u=.35*c;this.core.position.set((Math.random()-.5)*u,(Math.random()-.5)*u,(Math.random()-.5)*u),this.core.scale.setScalar(1+c*.3),this.ringMaterial.opacity=.85;const h=c*3%1;this.chargeRing.visible=!0,this.chargeRing.scale.setScalar(.6+h*3.4),this.chargeMaterial.opacity=(1-h)*(.25+c*.5),li=Math.max(li,.05+c*.1)}else this.isCharging&&(this.isCharging=!1,this.core.scale.setScalar(1),this.chargeRing.visible=!1),this.core.position.lengthSq()>0&&this.core.position.set(0,0,0);Xo(this.mesh.position,this.radius*.8,"reasonBossHit")}}const Of=3.2,OE=.24,FE=5,Cm=new us(1,.06,.06);Cm.translate(.5,0,0);const BE=new Rt({color:16777215,transparent:!0,opacity:.8,blending:cs,depthWrite:!1}),zE=new L(1,0,0);let In=null;function kE(){if(!ft||ft.isDead||In)return;It=!0,rs=null,Te.stopEngine(),Te.stopGameMusic(),$e.forEach(e=>{e.velocityX=0,e.velocityZ=0,e.lastGridX=-1,e.lastGridZ=-1});const i=new ln;i.position.copy(ft.mesh.position),ht.add(i),In={time:0,nextRay:.4,rays:[],group:i}}function VE(i){const e=In;e.time+=i;const t=Math.min(e.time/Of,1);if(ft&&!ft.isDead){const s=.08+t*.5;ft.core.position.set((Math.random()-.5)*s,(Math.random()-.5)*s,(Math.random()-.5)*s),ft.cage.rotation.y-=(.6+t*7)*i,ft.ringMaterial.opacity=.3+t*.6,ft.ring.scale.setScalar(1+t*.6)}if(e.nextRay-=i,e.nextRay<=0){e.nextRay=OE*(1-t*.65);const s=new pt(Cm,BE),r=new L(Math.random()*2-1,Math.random()*1.4-.3,Math.random()*2-1).normalize();s.quaternion.setFromUnitVectors(zE,r),s.scale.set(.01,1,1),e.group.add(s),e.rays.push(s),Te.playSFX("ray")}const n=1+t*3;for(const s of e.rays)s.scale.x=Math.min(s.scale.x+FE*i,9),s.scale.y=n,s.scale.z=n;li=.1+t*.25,e.time>=Of&&GE()}function GE(){const i=In;In=null,i.rays.forEach(e=>i.group.remove(e)),ht.remove(i.group),ft&&ft.explode(),setTimeout(()=>{It=!1,Kb()},1200)}const ls=[],ss=[],Ir=[];function Pm(){ls.forEach(i=>ht.remove(i.mesh)),ls.length=0,fn.forEach(i=>i.remove()),fn.length=0,In&&(ht.remove(In.group),In=null),ft&&ht.remove(ft.mesh),ft=null,ss.forEach(i=>ht.remove(i.mesh)),ss.length=0,ii.forEach(i=>ht.remove(i.mesh)),ii.length=0,Pi.forEach(i=>ht.remove(i.mesh)),Pi.length=0,Object.values(wm).forEach(i=>{i.timer=0,i.delay=il()});for(let i=0;i<bl;i++)Wo[i].active&&bm(i);bn.instanceMatrix.needsUpdate=!0,Ir.forEach(i=>tn.remove(i.mesh)),Ir.length=0}const Uu=Ie/2-te/2;function qa(){for(let i=0;i<80;i++){const e=(Math.random()-.5)*15,t=(Math.random()-.5)*15,n=Math.floor((e+Ie/2)/te),s=Math.floor((t+Ie/2)/te);let r=!0;for(let o=-2;o<=2&&r;o++)for(let a=-2;a<=2;a++){const l=we[s+o];if(!l||l[n+a]!==Xn){r=!1;break}}if(r)return{x:e,z:t}}return{x:0,z:0}}function Lm(){Zt=!1,It=!1,os=!1,Wa=0,rs=null,Fi=0,ym(),Pm(),vm(),Ni.group.visible=!1,ht.visible=!0,Nn.style.display="none",yi.style.display="none",hs.style.display="none",$t.style.display="none",$t.style.backgroundColor=B.overlay,Ws.style.display="flex",Kn.style.display="block",Wi.style.display="flex",rm(),setTimeout(()=>jn.refresh(),0)}function Im(){_l(),Te.startEngine(),vn&&vn.boss?Te.startBossMusic():Te.startGameMusic(),Bt="PLAYING",dm(),jo()}const HE=[[30,30],[70,30],[30,70],[70,70]];function sl(i){qn="campaign",rn=i,vn=wb(i),hi=vn.time,wr=vn.target,hh=vn.maxMines,Lm();const e=Pu(0,{keys:Oo.wasd,colors:Cu.campaign[0],startX:0,startZ:Uu,labelKey:"playerOne"});lE(vn.pillars,e);for(let t=0;t<vn.bouncers;t++){const n=qa();ls.push(new Am(n.x,n.z))}for(let t=0;t<vn.eaters;t++){const n=qa();ls.push(new AE(n.x,n.z))}for(let t=0;t<vn.bombers;t++){const n=qa();ls.push(new RE(n.x,n.z))}vn.boss&&(HE.forEach(([t,n])=>fn.push(new NE(t,n))),ft=new UE(0,0)),Xs.style.display="none",Hs.style.display="flex",ks.wrap.style.display=vn.boss?"flex":"none",Im()}const XE=180,WE=4,qE=3;function Dm(){qn="duel",rn=0,vn=null,hi=XE,wr=Nm,hh=WE,Lm(),Pu(0,{keys:Oo.wasd,colors:Cu.duel[0],startX:0,startZ:Uu,labelKey:"playerOne"}),Pu(1,{keys:Oo.arrows,colors:Cu.duel[1],startX:0,startZ:-Uu,labelKey:"playerTwo"});for(let i=0;i<qE;i++){const e=qa();ls.push(new Am(e.x,e.z))}Hs.style.display="none",Xs.style.display="flex",em(),Im()}const Nm=50;function jo(){if(It||Zt||Bt!=="PLAYING")return;const i=[0,0];for(let e=1;e<je-1;e++)for(let t=1;t<je-1;t++){const n=we[e][t];n===1?i[0]++:n===3&&i[1]++}if($e.forEach(e=>{e.percentage=Math.round(i[e.index]/Jb*100)}),Fi=$e[0]?$e[0].percentage:0,Vs(),!(Zt||It))if(qn==="duel"){const e=$e.find(t=>t.percentage>Nm);e&&Um(e,"duelByArea")}else Fi>=wr&&jE()}const Tl=jo;function jE(){if(ft&&!ft.isDead){kE();return}It=!0,Te.stopEngine(),Te.playSFX("victory");const i=$e[0];i.velocityX=0,i.velocityZ=0,i.lastGridX=-1,i.lastGridZ=-1,rs=i,Ah(i.group.position.x,i.group.position.y,i.group.position.z),setTimeout(()=>{It=!1,pm(!0)},2e3)}function Um(i,e){Zt||It||(It=!0,Te.stopEngine(),Te.playSFX("victory"),$e.forEach(t=>{t.velocityX=0,t.velocityZ=0,t.lastGridX=-1,t.lastGridZ=-1}),rs=i,Ah(i.group.position.x,i.group.position.y,i.group.position.z),setTimeout(()=>{It=!1,mm(i,e)},2e3))}function Hi(i,e){if(!(!i||i.isRespawning)&&!(Zt||It||Bt!=="PLAYING")&&i.trail.length!==0&&!i.collapsing){i.collapsing=!0,i.collapseProgress=0,i.collapseReason=e,Te.playSFX("collapse");for(const t of i.trail)dt.setColorAt(dn(t.x,t.z),_m);dt.instanceColor&&(dt.instanceColor.needsUpdate=!0)}}function YE(i,e){const t=dn(e.x,e.z),n=Bi.findIndex(o=>o.index===t);n!==-1&&Bi.splice(n,1);const s=e.x*te-Ie/2+te/2,r=e.z*te-Ie/2+te/2;for(let o=0;o<2;o++){const a=Math.random()*Math.PI*2;qo(s,wt*.9,r,Math.cos(a)*2.4,Math.random()*4+2.5,Math.sin(a)*2.4,.35,o===0?16777215:i.colorTrail.getHex())}if(e.prev===Xn)we[e.z][e.x]=Xn,as.push({index:t,x:s,z:r,y:wt/2});else{const o=$e[xm(e.prev)];js(e.x,e.z,o?o.colorCaptured:Mh(),e.prev,!1)}}function $E(i,e){let t=0;for(;t<e&&i.trail.length>0;)YE(i,i.trail.shift()),i.trailBroken=!0,t++;t>0&&(dt.instanceMatrix.needsUpdate=!0),i.trail.length===0&&i.collapsing&&(i.collapsing=!1,Zr(i,Be(i.collapseReason||"reasonEnemyTrail")))}function KE(i,e,t){if(!i)return;const n=i.trail.findIndex(s=>s.x===e&&s.z===t);n!==-1&&(i.trail.splice(n,1),i.trailBroken=!0,we[t][e]=Xn,i.trail.length===0&&i.collapsing&&(i.collapsing=!1,Zr(i,Be(i.collapseReason||"reasonRivalTrail"))))}function ZE(i,e){if(!i.collapsing)return;i.collapseProgress+=sE*e;const t=Math.floor(i.collapseProgress);t<=0||(i.collapseProgress-=t,$E(i,t))}function Om(i){for(const e of i.trail){const t=dn(e.x,e.z),n=Bi.findIndex(s=>s.index===t);if(n!==-1&&Bi.splice(n,1),e.prev===Xn)we[e.z][e.x]=Xn,rt.scale.set(0,0,0),rt.updateMatrix(),dt.setMatrixAt(t,rt.matrix);else{const s=$e[xm(e.prev)];js(e.x,e.z,s?s.colorCaptured:Mh(),e.prev,!1)}}dt.instanceMatrix.needsUpdate=!0,i.trail.length=0,i.lastTrailDir=null,i.collapsing=!1,i.collapseProgress=0,i.trailBroken=!1}function JE(i){const e=i.trail.slice(),t=Sl(i.index);for(const s of e)js(s.x,s.z,i.colorCaptured,t,!1);const n=i.trailBroken;if(i.trail.length=0,i.lastTrailDir=null,i.collapsing=!1,i.collapseProgress=0,i.trailBroken=!1,n){e.length>0&&Te.playSFX("capture"),jo();return}tT(i,e)}function QE(i){const e=gm(i.index);i.trail.length!==0&&(i.trail.every(t=>we[t.z][t.x]===e)||(i.trail=i.trail.filter(t=>we[t.z][t.x]===e),Om(i),i.lastGridX=-1,i.lastGridZ=-1))}function Zr(i,e,t=!1){if(Zt||It||Bt!=="PLAYING"||!i||i.isRespawning)return;t?i.lives=0:i.lives--,Te.playSFX("death"),Te.stopEngine();const n=i.velocityX,s=i.velocityZ,r=i.group.position;if(Gs(r.x,r.y,r.z),i.model){const o=(a,l=!1)=>{if(!a)return;const c=a.clone(),u=[];if(c.traverse(x=>{x.userData.isRotorWake&&u.push(x)}),u.forEach(x=>x.removeFromParent()),l){const x=c.getObjectByName("Rotor_one"),m=c.getObjectByName("Rotor_two");x&&x.removeFromParent(),m&&m.removeFromParent()}const h=new L;a.getWorldPosition(h),c.position.copy(h);const d=new L;a.getWorldScale(d),c.scale.copy(d);const f=new mi;a.getWorldQuaternion(f),c.quaternion.copy(f);const p=8;tn.add(c),Ir.push({mesh:c,vx:n*.6+(Math.random()-.5)*p,vy:Math.random()*15+10,vz:s*.6+(Math.random()-.5)*p,rx:(Math.random()-.5)*15,ry:(Math.random()-.5)*15,rz:(Math.random()-.5)*15,life:2})};o(i.rotor1),o(i.rotor2),o(i.model,!0)}li=.5,Om(i),jo(),i.isRespawning=!0,i.group.visible=!1,i.velocityX=0,i.velocityZ=0,i.lastGridX=-1,i.lastGridZ=-1,Du=bh,setTimeout(()=>{if(!(Bt!=="PLAYING"&&!Zt)){if(i.lives<=0){if(qn==="duel"){const o=Lu(i)[0];o&&mm(o,"duelByLives")}else pm(!1,t?e:e+Be("livesOut"));return}cE(i),Te.startEngine()}},1e3)}function eT(i,e,t,n){const s=[];let r=Math.abs(t-i),o=i<t?1:-1,a=Math.abs(n-e),l=e<n?1:-1,c=r-a;for(;s.push({x:i,z:e}),!(i===t&&e===n);){let u=2*c;u>-a&&(c-=a,i+=o),u<r&&(c+=r,e+=l)}return s}function tT(i,e){const t=Sl(i.index);un.fill(-1),Ec.fill(0);for(const a of e)Ec[dn(a.x,a.z)]=1;const n=a=>a===t||a===Dn;let s=0;for(let a=0;a<je;a++)for(let l=0;l<je;l++){const c=dn(l,a);if(n(we[a][l])||un[c]!==-1)continue;const u=s++;ho[u]=0,Tc[u]=0;let h=0,d=0;for(gr[d++]=c,un[c]=u;h<d;){const f=gr[h++],p=f%je,x=(f-p)/je;if(!ho[u])for(let m=-1;m<=1&&!ho[u];m++){const g=x+m;if(!(g<0||g>=je))for(let y=-1;y<=1;y++){const S=p+y;if(!(S<0||S>=je)&&Ec[g*je+S]){ho[u]=1;break}}}x+1<je&&!n(we[x+1][p])&&un[f+je]===-1&&(un[f+je]=u,gr[d++]=f+je),x-1>=0&&!n(we[x-1][p])&&un[f-je]===-1&&(un[f-je]=u,gr[d++]=f-je),p+1<je&&!n(we[x][p+1])&&un[f+1]===-1&&(un[f+1]=u,gr[d++]=f+1),p-1>=0&&!n(we[x][p-1])&&un[f-1]===-1&&(un[f-1]=u,gr[d++]=f-1)}}const r=[];for(const a of ls)r.push(a.mesh.position);for(const a of Lu(i))r.push(a.group.position);for(const a of r){const l=Math.floor((a.x+Ie/2)/te),c=Math.floor((a.z+Ie/2)/te);if(l<0||l>=je||c<0||c>=je)continue;let u=un[dn(l,c)];for(let h=1;u===-1&&h<=2;h++)for(let d=-h;d<=h&&u===-1;d++)for(let f=-h;f<=h;f++){const p=l+f,x=c+d;if(p<0||p>=je||x<0||x>=je)continue;const m=un[dn(p,x)];if(m!==-1){u=m;break}}u!==-1&&(Tc[u]=1)}let o=0;for(let a=1;a<je-1;a++)for(let l=1;l<je-1;l++){const c=un[dn(l,a)];c!==-1&&ho[c]&&!Tc[c]&&(js(l,a,i.colorCaptured,t,!0),o++)}o>0&&Te.playSFX("capture"),Lu(i).forEach(QE),jo()}function nT(i,e){if(i.isRespawning)return;const t=Sl(i.index),n=gm(i.index);let s=0,r=0;const o=i.keys;o&&(Mr.has(o.up)&&(r-=1),Mr.has(o.down)&&(r+=1),Mr.has(o.left)&&(s-=1),Mr.has(o.right)&&(s+=1)),Tt&&i.index===0&&(zs()==="dpad"?(Di.up&&(r-=1),Di.down&&(r+=1),Di.left&&(s-=1),Di.right&&(s+=1)):Kt.active&&(s=Kt.x,r=Kt.z)),i.trail.length>0?(i.lastTrailDir==="z"&&r<0&&(r=0),i.lastTrailDir==="-z"&&r>0&&(r=0),i.lastTrailDir==="x"&&s<0&&(s=0),i.lastTrailDir==="-x"&&s>0&&(s=0)):i.lastTrailDir=null;const a=Math.hypot(s,r);a>1&&(s/=a,r/=a);const l=s*Du,c=r*Du;i.velocityX=yn.lerp(i.velocityX,l,Af*e),i.velocityZ=yn.lerp(i.velocityZ,c,Af*e);const u=i.group.position;u.x+=i.velocityX*e,u.z+=i.velocityZ*e;const h=Ie/2-te/2;u.x=yn.clamp(u.x,-h,h),u.z=yn.clamp(u.z,-h,h);const d=Math.floor((u.x+Ie/2)/te),f=Math.floor((u.z+Ie/2)/te);if((d!==i.lastGridX||f!==i.lastGridZ)&&i.lastGridX!==-1){const p=eT(i.lastGridX,i.lastGridZ,d,f);for(const x of p){if(x.x===i.lastGridX&&x.z===i.lastGridZ)continue;let m=we[x.z][x.x];if(fi(m)&&pi(m)!==i.index){const w=$e[pi(m)];Hi(w,"reasonRivalTrail"),KE(w,x.x,x.z),m=we[x.z][x.x]}if(m===n){Zr(i,Be("reasonCross"));return}if(m===t||m===Dn){i.trail.length>0&&JE(i);continue}const g=jt(m)?m:Xn,y=i.trail.length>0?i.trail[i.trail.length-1]:{x:i.lastGridX,z:i.lastGridZ},S=x.x-y.x,M=x.z-y.z;S>0?i.lastTrailDir="x":S<0?i.lastTrailDir="-x":M>0?i.lastTrailDir="z":M<0&&(i.lastTrailDir="-z"),js(x.x,x.z,i.collapsing?_m:i.colorTrail,n,!0),i.trail.push({x:x.x,z:x.z,prev:g}),Te.playSFX("trail")}}i.lastGridX=d,i.lastGridZ=f}const Rc=new zx;new L(0,8,10);const ri=new L(0,0,0),iT=new L(0,4,15),sT=new L(0,4,0),_r=new L,Ff=new L;function rT(){if(In&&ft&&!ft.isDead){_r.set(ft.mesh.position.x*.85,11,ft.mesh.position.z*.85+11),Lt.position.lerp(_r,.03),ri.lerp(ft.mesh.position,.05),Lt.lookAt(ri);return}if(qn==="duel"&&$e.length===2){const a=$e[0].group.position,l=$e[1].group.position,c=(a.x+l.x)/2,u=(a.z+l.z)/2,h=5,d=Math.abs(a.x-l.x)+h,f=Math.abs(a.z-l.z)+h,p=yn.degToRad(Lt.fov),x=2*Math.atan(Math.tan(p/2)*Lt.aspect),m=yn.clamp(Math.max(f/2/Math.tan(p/2),d/2/Math.tan(x/2)),16,38);_r.set(c*.8,m*.78,u*.8+m*.62),Lt.position.lerp(_r,.05),Ff.set(c,0,u),ri.lerp(Ff,.08),Lt.lookAt(ri);return}const i=$e[0];if(!i)return;const e=.9,t=i.group.position,n=yn.clamp(1/Lt.aspect,1,1.18),s=yn.clamp((1/Lt.aspect-1)/1.2,0,1),r=yn.lerp(10,15,s)*n,o=yn.lerp(12,6,s)*n;_r.set(t.x*e,r,t.z*e+o),Lt.position.lerp(_r,.05),ri.lerp(t,.08),Lt.lookAt(ri)}_l();jn.setEnabled(En.crt!==!1);Te.unlock();Te.startMenuMusic();const Fm=["pointerdown","mousedown","click","keydown","touchstart"];function Bm(){Te.unlock(),(Bt==="MENU"||Bt==="LEVEL_SELECT")&&Te.startMenuMusic(),Te.isMenuMusicPlaying()&&Fm.forEach(i=>window.removeEventListener(i,Bm))}Fm.forEach(i=>window.addEventListener(i,Bm));function zm(){if(requestAnimationFrame(zm),document.hidden){Rc.getDelta();return}const i=Math.min(Rc.getDelta(),.1),e=Rc.getElapsedTime();if(dh.rotation.y+=.02*i,Bt==="MENU"||Bt==="LEVEL_SELECT"){if(Ni.model){const s=e*.5,r=Math.sin(s*.8),o=Tt?4:7;Ni.model.position.set(r*o,3.4+Math.sin(s*1.1)*1.5,-4+Math.abs(r)*7),Ni.model.rotation.set(Math.sin(s*1.5)*.2,-.5+Math.sin(s)*.3,Math.cos(s*1.2)*.2)}wf(Ni,i),Lt.position.lerp(iT,.05),ri.lerp(sT,.08),Lt.lookAt(ri),Ar.render(tn,Lt);return}if(os||Zt){Ar.render(tn,Lt);return}if(!It&&Tf())if(hi-=i,hi<=0)if(hi=0,Vs(),qn==="duel"){const s=$e.reduce((r,o)=>o.percentage>r.percentage?o:r);Um(s,"duelByTime")}else Zr($e[0],Be("reasonTime"),!0);else Vs();if(!It&&Tf()){if(ii.length<hh&&(Wa+=i,Wa>4+Math.random()*2)){Wa=0;const s=Lf(15,ii);s&&ii.push(new wE(s.x,s.z))}for(const s of["life","time"]){const r=wm[s];if(r.timer+=i,r.timer<=r.delay||Pi.some(a=>a.kind===s)||(r.timer=0,r.delay=il(),s==="life"&&!$e.some(a=>a.lives<Tm)))continue;const o=Lf(10,[...ii,...Pi]);o&&Pi.push(new TE(s,o.x,o.z))}for(let s=Pi.length-1;s>=0;s--)Pi[s].update(i),Pi[s].isDead&&Pi.splice(s,1);for(let s=ii.length-1;s>=0;s--)ii[s].update(i),ii[s].isDead&&ii.splice(s,1)}let t=!1;for(let s=0;s<bl;s++){const r=Wo[s];if(r.active){if(t=!0,r.life-=i,r.life<=0){bm(s);continue}r.x+=r.vx*i,r.y+=r.vy*i,r.z+=r.vz*i,r.vy-=25*i,r.rot+=10*i,kn.position.set(r.x,r.y,r.z),kn.rotation.set(r.rot,r.rot,0),kn.scale.setScalar(r.life),kn.updateMatrix(),bn.setMatrixAt(s,kn.matrix)}}t&&(bn.instanceMatrix.needsUpdate=!0);for(let s=Ir.length-1;s>=0;s--){const r=Ir[s];r.life-=i,r.life<=0?(tn.remove(r.mesh),Ir.splice(s,1)):(r.mesh.position.x+=r.vx*i,r.mesh.position.y+=r.vy*i,r.mesh.position.z+=r.vz*i,r.vy-=30*i,r.mesh.rotation.x+=r.rx*i,r.mesh.rotation.y+=r.ry*i,r.mesh.rotation.z+=r.rz*i)}if($e.forEach(s=>wf(s,i)),It&&rs){const s=rs.group.position;s.y+=15*i,rs.group.rotation.y+=8*i,vc-=i,vc<=0&&(Ah(s.x+(Math.random()-.5)*15,s.y+(Math.random()-.5)*5,s.z+(Math.random()-.5)*15),vc=.2)}if(It||$e.forEach((o,a)=>{o.model&&(o.model.position.x=0,o.model.position.z=0,o.model.position.y=wt+.5+Math.sin(e*2+a*1.7)*.2,o.model.rotation.set(0,0,Math.sin(e*2*.5+a)*.05))}),!It){let s=0;for(const r of $e)ZE(r,i),nT(r,i),s=Math.max(s,Math.hypot(r.velocityX,r.velocityZ));Te.setEngineSpeed(Math.min(s/bh,1))}if(!In){for(let s of ls)s.update(i);for(const s of fn)s.update(i)}ft&&!ft.isDead&&!In&&ft.update(i),In&&VE(i);for(let s=ss.length-1;s>=0;s--)ss[s].update(i),ss[s].isDead&&ss.splice(s,1);let n=!1;for(let s=as.length-1;s>=0;s--){const r=as[s];r.y-=rE*i;const o=r.y<=-wt;rt.position.set(r.x,o?0:r.y,r.z),rt.scale.set(o?0:1,o?0:1,o?0:1),rt.updateMatrix(),dt.setMatrixAt(r.index,rt.matrix),o&&as.splice(s,1),n=!0}for(let s=Bi.length-1;s>=0;s--){const r=Bi[s];r.currentY+=8*i,r.currentY>=r.targetY&&(r.currentY=r.targetY,Bi.splice(s,1)),rt.position.set(r.x,r.currentY,r.z),rt.scale.set(1,1,1),rt.updateMatrix(),dt.setMatrixAt(r.index,rt.matrix),n=!0}if(n&&(dt.instanceMatrix.needsUpdate=!0),rT(),li>0){li-=i;const s=Math.max(li,0)*1.5;Lt.position.x+=(Math.random()-.5)*s,Lt.position.y+=(Math.random()-.5)*s,Lt.position.z+=(Math.random()-.5)*s}Ar.render(tn,Lt)}zm();

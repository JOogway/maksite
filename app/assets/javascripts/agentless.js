var a=window;a.dT_?a.console&&a.console.log("Duplicate agent injection detected, turning off redundant initConfig."):navigator.cookieEnabled&&(window.dT_||(window.dT_={cfg:"app=CBC839210CA9BEE8|cors=1|bp2=1|featureHash=A2SVfhqr|dpvc=1|md=1=a#usertag|lastModification=1532608954671|dtVersion=10152180724230102|reportUrl=https://bf99090cpc.bf-dev.dynatracelabs.com/bf|tp=500,50,0,1|rdnt=1|featureHash=A2SVfhqr|agentUri=https://js-cdn.dynatracelabs.com/jstag/1468ae7109d/ruxitagent_A2SVfhqr_10152180724230102.js|auto=|domain=|rid=RID_|rpid=|app=CBC839210CA9BEE8"}));
(function(){function vb(){try{wb.apply(e.parent,arguments)}catch(a){}}function xb(){try{yb.apply(e.top,arguments)}catch(a){}}function zb(a){var b=Array.prototype.slice.call(arguments,1);try{Ab.apply(a,b)}catch(c){}}function Bb(a){var b=Array.prototype.slice.call(arguments,1);try{Cb.apply(a,b)}catch(c){}}function r(){var a=0;try{a=e.performance.timing.navigationStart+Math.floor(e.performance.now())}catch(b){}return 0>=a||isNaN(a)||!isFinite(a)?(new Date).getTime():a}function ua(a,b){for(var c=2;c<
arguments.length;c++);return"apply"in J?J.apply(e,arguments):J(a,b)}function l(a){for(var b=[],c=1;c<arguments.length;c++)b[c-1]=arguments[c];a.push.apply(a,b)}function Pa(a){l(W,a)}function Db(){return W}function Eb(a,b){return Fb(a,b)}function Gb(a,b){a=new Hb([a],{type:b});return Ib(a)}function Jb(a,b){return new Kb(a,b)}function Lb(a){"function"===typeof a&&l(fa,a)}function Mb(){return fa}function Nb(){return va}function Ob(){return K}function ga(){var a="currentCookie: "+w(x),b=(0===g?-1*X(2,
21)+"$":"")+wa(32);e.JSAgentTestFrameworkAPI&&e.JSAgentTestFrameworkAPI.notifyAssertOK("Created dtCookie: "+(a+(", newCookie: "+b)));return b}function Pb(){return q}function Qb(){ha(function(){ia()||xa(ga());q=ja()})}function Qa(a,b){b=ka(b);for(var c=!1,d=0;d<b.length;d++)b[d].frameId===K&&(b[d].g=a,c=!0);c||l(b,{frameId:K,g:a});ya(b)}function ya(a,b){var c="";if(a){for(var c=[],d=0;d<a.length;d++)a[d].g&&(0<d&&0<c.length&&l(c,"p"),0===g&&(l(c,q),l(c,"$")),l(c,a[d].frameId),l(c,"h"),l(c,a[d].g));
0===g&&(c.length||(L&&(la(0,!0),za(!1)),q=ja(),l(c,q),l(c,"$"),l(c,K),l(c,"h-")),l(c,"v"),l(c,b||Aa()));c=c.join("")}c||(c="-",0===g&&(L&&(la(0,!0),za(!1)),q=ja(),c=q+"$"+K+"h-v"+(b||Aa())));a=c;try{"undefined"!==typeof e.DynatraceJsBridge&&"undefined"!==typeof e.DynatraceJsBridge.setDtPc&&e.DynatraceJsBridge.setDtPc(a)}catch(k){}M(N,a,void 0,m("ssc"))}function ka(a){var b=w(N),c=[];if(b&&"-"!==b)for(var b=b.split("p"),d=0;d<b.length;d++){var k=b[d].split("h");if(2===k.length&&k[0]&&k[1]){var e=k[0];
if(0===g&&(e&&0<=h(e,"$")&&(e=e.split("$")[1]),0<=h(k[1],"v"))){var f=k[1].split("v");if(2===f.length){var m=f[1];k[1]=f[0]}}if(!(f=a)){var f=O(e.split("_")[0]),n=r()%Ba;n<f&&(n+=Ba);f=f+9E5>n}f&&l(c,{frameId:e,g:k[1]})}}if(0===g)for(a=0;a<c.length;a++)c[a].visitId=m;return c}function Aa(){return Ca()||la(0,!0)}function Ca(){var a=ka(!0);if(!(P()<=r())){ma(!1);if(a&&1<=a.length)return a[0].visitId;(a=Da(E))||(a=na(E));return a}return null}function ma(a){var b=r(),c=Ra().j;a&&(c=b);Sa(b+Ta+"|"+c);
Ua()}function Va(a){a||(a=X(1,1E6));var b=ia();b||(b=ga(),xa(b),b=ia(b));a=""+a;for(var c=a.length,d=[],e=0;e<b.length;e++)d[e]=String.fromCharCode(65+Math.abs((b.charCodeAt(e)^a.charCodeAt(e%c))%26));b=d.join("");for(a=0;a<Q.length;a++)Q[a](b);return b}function Ea(a){var b=ka(!1);ya(b,a);Y(E,a);ma(!0)}function la(a,b){b&&(R=!0);a=Va(r());Ea(a);return a}function Rb(a){Q.push(a)}function Ua(){Z&&clearTimeout(Z);Z=ua(Wa,P()-r())}function Wa(){if(P()<=r()&&S()){var a=Va(r());Ea(a);return!0}ha(Ua);return!1}
function Sa(a){M(y,a,void 0,m("ssc"));Y(y,a)}function Y(a,b){if(m("dpvc")||m("pVO"))oa(a,b),Xa(a);else{try{e.localStorage&&e.localStorage.setItem(a,b)}catch(c){}Fa(a)}}function Ya(a){var b=w(a);b||(b=Da(a))||(b=na(a));return b}function Za(){var a=Ca();Y(E,a);a=Ya(y);Sa(a)}function Ra(){var a={m:0,j:0},b=Ya(y);if(b)try{var c=b.split("|");2===c.length&&(a.m=parseInt(c[0],10),a.j=parseInt(c[1],10))}catch(d){}return a}function P(){var a=Ra();return Math.min(a.m,a.j+$a)}function Sb(a){Ta=a}function za(a){void 0===
a&&(a=!0);L=a}function Tb(){var a=R;R=!1;return a}function Ub(){Wa()||ma(!1)}function Ga(){var a=w(p);if(!a||a.length&&a.length!==aa)a=na(p),a&&a.length===aa||(ab=!0,a=r()+"",a+=wa(aa-a.length));var b=a;if(!m("dpvc")&&!m("pVO")){var c=new Date;c.setFullYear(c.getFullYear()+2)}M(p,b,c,m("ssc"));oa(p,b);return a}function Vb(){return ab}function Wb(a){var b=w(p);t(p);Fa(p);M(p,b);f.pVO=!0;if(a)try{e.localStorage&&e.localStorage.setItem(Ha,"1")}catch(c){}Za()}function Xb(){Xa(Ha);m("pVO")&&(f.pVO=!1,
Ga());Za()}function bb(){"undefined"===typeof ba&&(ba=navigator.userAgent&&0<=navigator.userAgent.indexOf("RuxitSynthetic"));return ba}function S(){return!m("coo")||m("cooO")||bb()}function ha(a){S()?a():(C||(C=[]),l(C,a))}function pa(a,b){if(S()&&(!D().v||bb()))return a.apply(this,b||[])}function Yb(a){return pa(a)}function Zb(){for(var a=0;a<C.length;a++)ua(C[a],0);C=[];f.cooO=1}function $b(){f.cooO=0;t(x);t(N);t(qa);t("dtSa");t(cb);0===g&&(t(p),t(y));try{0===g&&F.removeItem(p),F.removeItem(x),
Ia.removeItem(Ja())}catch(a){}}function O(a,b){return parseInt(a,b||10)}function na(a){try{if(F)return F[a]}catch(b){}return null}function oa(a,b){try{F.setItem(a,b)}catch(c){}}function Fa(a){try{F.removeItem(a)}catch(b){}}function h(a,b){var c=-1;b&&a&&a.indexOf&&(c=a.indexOf(b));return c}function t(a){document.cookie=a+'="";path=/'+(n("domain")?";domain="+n("domain"):"")+"; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}function db(a,b,c){var d=1,e=0;do document.cookie=a+'=""'+(b?";domain="+b:"")+";path="+
c.substr(0,d)+"; expires=Thu, 01 Jan 1970 00:00:01 GMT;",d=c.indexOf("/",d),e++;while(-1!==d&&5>e)}function eb(a){a=encodeURIComponent(a);var b=[];if(a)for(var c=0;c<a.length;c++){var d=a.charAt(c);l(b,ac[d]||d)}return b.join("")}function M(a,b,c,d){pa(bc,[a,b,c,d])}function bc(a,b,c,d){b||0===b?(b=(""+b).replace(/[;\n\r]/g,"_"),b="DTSA"===a.toUpperCase()?eb(b):b,a=a+"="+b+";path=/"+(n("domain")?";domain="+n("domain"):""),c&&(a+=";expires="+c.toUTCString()),d&&(a+=";Secure"),document.cookie=a):t(a)}
function w(a){for(var b=document.cookie.split(";"),c=0;c<b.length;c++){var d=h(b[c],"="),e=b[c].substring(0,d),d=b[c].substring(d+1),e=e.replace(/^\s+|\s+$/g,"");if(e===a)return"DTSA"===a.toUpperCase()?decodeURIComponent(d):d}return""}function fb(a){var b=/^[0-9A-Za-z_=:\$\+\/\.\-\*%\|]*$/.test(a);return 0===g&&(0>=h(a,"$")&&-1===h(a,"=srv=")||a&&2<a.split("$").length)?!1:b}function gb(){var a=w(x);return a&&fb(a)?a:""}function xa(a){M(x,a,void 0,m("ssc"))}function T(a){return 32===a.length||12>=
a.length?a:null}function hb(a){return!isNaN(a)&&3>=a.length?a:null}function ib(a){var b={sessionId:null,b:null},c=h(a,"|"),d=a;-1!==c&&(d=a.substring(0,c));c=h(d,"$");-1!==c?(b.sessionId=T(d.substring(c+1)),b.b=hb(d.substring(0,c))):b.sessionId=T(d);return b}function jb(a){var b={sessionId:null,b:null};a=a.split("=");if(2<a.length&&!(a.length%2)){var c=Number(a[1]);if(isNaN(c)||3>c)return b;for(var c={},d=2;d<a.length;d++)c[a[d]]=a[d+1],d++;b.sessionId=T(c.sn);c.srv&&(b.b=hb(c.srv));"1"===c.ol&&(oa("dtDisabled",
"true"),D().disabled=!0,D().v=!0)}return b}function kb(a){return(a=a||gb())?h(a,"=")?ib(a):jb(a):{sessionId:null,b:null}}function ja(a){try{if("undefined"!==typeof e.DynatraceJsBridge&&"undefined"!==typeof e.DynatraceJsBridge.getServerId())return e.DynatraceJsBridge.getServerId()}catch(b){}return kb(a).b}function ia(a){return kb(a).sessionId}function X(a,b){return Math.floor(Math.random()*(b-a+1))+a}function wa(a){var b=e.crypto||e.msCrypto;if(b){var c=new Int8Array(a);b.getRandomValues(c)}else for(c=
[],b=0;b<a;b++)c.push(X(0,lb));a=[];for(b=0;b<c.length;b++){var d=Math.abs(c[b]%lb);a.push(String.fromCharCode(d+(9>=d?48:55)))}return a.join("")}function mb(a){return document.getElementsByTagName(a)}function nb(a){var b=a.length;if("number"===typeof b)a=b;else{for(var b=0,c=2048;a[c-1];)b=c,c+=c;for(var d=7;1<c-b;)d=(c+b)/2,a[d-1]?b=d:c=d;a=a[d]?c:b}return a}function Da(a){try{if(e.localStorage)return e.localStorage.getItem(a)}catch(b){}}function Xa(a){try{e.localStorage&&e.localStorage.removeItem(a)}catch(b){}}
function ob(a){var b={};a=a.split("|");for(var c=0;c<a.length;c++){var d=a[c].split("=");2===d.length&&(b[d[0]]=decodeURIComponent(d[1].replace(/\+/g," ")))}return b}function Ja(){var a=n("csu");return(a.indexOf("dbg")===a.length-3?a.substr(0,a.length-3):a)+"_"+n("app")+"_Store"}function ca(a,b,c){b=b||{};a=a.split("|");for(var d=0;d<a.length;d++){var e=a[d],f=h(a[d],"=");-1===f?b[e]="1":(e=a[d].substring(0,f),b[e]=a[d].substring(f+1,a[d].length))}!c&&(c=b,a=c.spc)&&(d=document.createElement("textarea"),
d.innerHTML=a,c.spc=d.value);return b}function da(a){return a in f?f[a]:ra[a]}function m(a){a=da(a);return"false"===a||"0"===a?!1:!!a}function sa(a){var b=O(da(a));isNaN(b)&&(b=ra[a]);return b}function n(a){return String(da(a)||"")}function cc(a,b){f[a]=b}function dc(a){return f=a}function pb(a){var b=location.hostname;return b&&a?b===a||-1!==b.indexOf("."+a,b.length-("."+a).length):!0}function ec(){return x}function fc(){return qb}function gc(){return rb}function hc(){return qa}function ic(){return cb}
function jc(){return N}function Ka(a){f[a]=0>h(f[a],"#"+a.toUpperCase())?f[a]:""}function sb(a){var b=a.agentUri;b&&-1<h(b,"_")&&(b=/([a-zA-Z]*)[0-9]{0,4}_([a-zA-Z_0-9]*)_[0-9]+/g.exec(b),a.csu=b[1],a.featureHash=b[2])}function tb(a,b){pb(f.domain)||(f.domainOverride=location.hostname+","+f.domain,delete f.domain);f.pVO&&(a.pVO=f.pVO);b||(a.bp=a.bp||ra.bp,1===g&&a.bp1&&(a.bp=1),a.bp2&&(a.bp=2),4!==a.bp||e.JSON||(a.bp=1))}function kc(){return f}function z(a){var b=document.cookie?document.cookie.split(a).length-
1:0;if(1<b){var c=n("domain")||e.location.hostname,d=e.location.hostname,f=e.location.pathname,g=0,l=0;A.push(a);do{var h=d.substr(g);if(h!==c||"/"!==f){db(a,h===c?void 0:h,f);var m=document.cookie?document.cookie.split(a).length-1:0;m<b&&(A.push(h),b=m)}g=d.indexOf(".",g)+1;l++}while(g&&10>l&&1<b);n("domain")&&1<b&&db(a,void 0,f)}}function lc(){z(N);z(x);z(qa);z(y);Pa(function(a,b,c,d){0<A.length&&!b&&(a.a(d,"dCN","duplicateCookieNames",function(){return A.join(",")},function(){return A.slice()}),
A=[])})}function La(a,b,c,d){var e=document.createElement("script");e.setAttribute("src",a);b&&e.setAttribute("defer","true");c&&(e.onload=c);d&&(e.onerror=d);e.setAttribute("crossorigin","anonymous");a=document.getElementsByTagName("script")[0];a.parentElement.insertBefore(e,a)}function Ma(a,b){return U+"/"+(b||G)+"_"+a+"_"+(sa("buildNumber")||D().version)+".js"}function D(){return e.dT_}var u=window;if(!u.dT_||!u.dT_.cfg||"string"!=typeof u.dT_.cfg||u.dT_.initialized)u.console&&u.console.log("Initconfig not found or agent already initialized! This is an injection issue.");
else if(!(navigator.userAgent&&0<=navigator.userAgent.indexOf("RuxitSynthetic"))){var e=window,J=e.setTimeout,Fb=e.setInterval,Ab=e.postMessage,Kb=e.Worker,Hb=e.Blob,Ib=e.URL&&e.URL.createObjectURL,Cb=e.Worker&&e.Worker.prototype.postMessage,wb=e.parent.postMessage,yb=e.top.postMessage,F=e.sessionStorage,W=[],fa=[],va,ra,K,Ba=6E8,q,E="rxvisitid",Z,Ta=18E5,$a=216E5,R=!1,Q=[],L=!1,p="rxVisitor",Ha="dt-pVO",aa=45,ab=!1,ba,C=[],lb=32,ac=new (function(){return function(){this["!"]="%21";this["~"]="%7E";
this["*"]="%2A";this["("]="%28";this[")"]="%29";this["'"]="%27";this.$="%24";this[";"]="%3B";this[","]="%2C"}}()),f={},N="dtPC",x="dtCookie",qb="x-dtpc",rb="x-dtreferer",qa="dtLatC",y="rxvt",cb="dtAdk";try{var Ia=e.localStorage}catch(a){}var A=[],ub,U,G,mc={childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0},nc=["_DT_RENDERING_"],g;(function(a){try{g=a;if(!navigator.cookieEnabled)return!1;e.dT_={version:"10152180724230102",cfg:e.dT_&&e.dT_.cfg||"",ica:1,disabled:!1,v:!1,mp:vb,mtp:xb,mi:zb,
mw:Bb,gAST:Nb,ww:Jb,stu:Gb,nw:r,apush:l,st:ua,si:Eb,aBPSL:Pa,gBPSL:Db,aBPSCC:Lb,gBPSCC:Mb,buildType:0===g?"dynatrace":"appmon",gSSV:na,sSSV:oa,rSSV:Fa,pn:O,iVSC:fb,p3SC:jb,pLSC:ib,io:h,dC:t,sC:M,esc:eb,gSId:ja,gDtc:ia,gSC:gb,sSC:xa,gC:w,cRN:X,cRS:wa,gEL:nb,gEBTN:mb,gSCN:ec,gPCHN:fc,gRHN:gc,gPCCN:jc,gLCN:hc,gMSIDCN:ic,cfgO:kc,pCfg:ob,pCSAA:ca,cFHFAU:sb,sCD:tb,bcv:m,ncv:sa,scv:n,stcv:cc,rplC:dc,cLSCK:Ja,gFId:Ob,gBAU:Ma,iS:La,eWE:ha,oEIE:Yb,oEIEWA:pa,eA:Zb,dA:$b,gcSId:Pb,iNV:Vb,gVID:Ga,dPV:Wb,ePV:Xb,
sVIdUP:za,sVTT:Sb,sVID:Ea,rVID:Ca,gVI:Aa,gNVId:la,gARnVF:Tb,cAUV:Ub,uVT:ma,aNVL:Rb,gPC:ka,cPC:Qa,sPC:ya};va=r();ra={ade:"",agentLocation:"",agentname:"",agentUri:"",app:"",async:!1,auto:!1,bandwidth:"300",bp1:!1,bp2:!1,bp:0===g?1:2,bs:!1,buildNumber:0,coo:!1,cooO:!1,cors:!1,csu:"",cux:!1,dataDtConfig:"",debugName:"",disableCookieManager:!1,disableLogging:!1,dmo:!1,dpvc:!1,disableXhrFailures:!1,domain:"",domainOverride:"",doNotDetect:"",dsndb:!1,dsss:!1,euf:!1,evl:"",extblacklist:"",exteventsoff:!1,
fa:!1,featureHash:"",ffi:!1,hvt:216E5,imm:!1,initializedModules:"",ign:"",instr:"",lab:!1,legacy:!1,lmut:!0,lzwd:!1,lzwe:!1,md:"",name:"",mdn:5E3,mepp:10,moa:30,mrt:3,msl:3E4,mhl:4E3,ncw:!1,ntd:!1,oat:180,ote:!1,pui:!1,pVO:!1,rdnt:0,reportUrl:"dynaTraceMonitor",rid:"",ridPath:"",rpid:"",rt:0===g?1E4:0,rtl:0===g?0:100,rtp:0===g?2:1,rtt:1E3,rtu:200,rx_visitID:"",sl:100,sosi:!1,spc:"",srbw:!0,srad:!0,srmr:100,srsr:1E5,srtd:1,srtr:500,ssc:!1,st:3E3,svNB:!1,syntheticConfig:!1,tp:"500,50,3",tvc:3E3,uam:!1,
useNewCookies:!1,vcfi:!1,WST:!1,xb:"",xmut:!0,xt:0};a:{f={reportUrl:"dynaTraceMonitor",initializedModules:"",csu:"dtagent",dataDtConfig:D().cfg};0===g&&(f.csu="ruxitagentjs");var b=f.dataDtConfig;b&&-1===h(b,"#CONFIGSTRING")&&(ca(b,f),Ka("domain"),Ka("auto"),Ka("app"),sb(f));var c=mb("script"),d=nb(c),k=-1===h(f.dataDtConfig,"#CONFIGSTRING")?f:null;if(0<d)for(a=0;a<d;a++)b:{var b=void 0,p=c[a],q=k;if(p.attributes){var y=f.csu+"_bootstrap.js",C=/.*\/jstag\/.*\/.*\/(.*)_bs.js$/,A=q,H=p.src,u=H&&H.indexOf(y),
E=p.attributes.getNamedItem("data-dtconfig");if(E){var z=H,J=E.value,v={};f.legacy=!0;if(z){var V=/([a-zA-Z]*)[0-9]{0,4}_([a-zA-Z_0-9]*)_([0-9]+)/g.exec(z);V&&V.length&&(v.csu=V[1],v.featureHash=V[2],0===g&&(v.agentLocation=z.substr(0,h(z,V[1])-1),v.buildNumber=V[3]))}J&&ca(J,v,!0);pb(v.domain)||(v.domainOverride=location.hostname+","+v.domain,delete v.domain);b=v;if(!q)A=b;else if(!b.syntheticConfig){k=b;break b}}b||(b=f);if(u&&0<=u){var L=u+y.length+5;b.app=H.length>L?H.substr(L):"Default%20Application"}else if(H){var P=
C.exec(H);P&&(b.app=P[1])}k=A}else k=q}if(k)for(var Q in k)k.hasOwnProperty(Q)&&(c=Q,f[c]=k[c]);f.rx_visitID&&(D().rx_visitID=f.rx_visitID);var Y=Ja();try{var R=Ia&&Ia.getItem(Y);if(R){var I=ob(R),Z=ca(I.config,I).lastModification||"",S=f.lastModification||"",aa=O(Z.substr(0,13)),ba=O(S.substr(0,13));if(!S||aa>=ba)for(var ta in I)I.hasOwnProperty(ta)&&(k=ta,"name"===ta?f.agentname=I[k]:"config"===ta?ca(I[k],f):f[k]=I[k])}}catch(Na){}tb(f);try{var T=f.ign;if(T&&(new RegExp(T)).test(e.location.href)){document.dT_=
e.dT_=null;var ea=!1;break a}}catch(Na){}f.useNewCookies&&0===g&&(N="rxpc",x="rxsession",qa="rxlatency",qb="x-rxpc",rb="x-rxreferer");ea=!0}if(!ea)return!1;lc();K=va%Ba+"_"+O(X(0,1E3)+"");try{ub=D().disabled||F.getItem("dtDisabled")}catch(Na){}U=n("agentLocation");if(!U)if(document.currentScript){var B=document.currentScript.src;if(B){var da=-1===h(B,"_bs")&&-1===h(B,"_bootstrap")&&-1===h(B,"_complete")?1:2,Oa=B.lastIndexOf("/");for(ea=0;ea<da&&-1!==Oa;ea++)B=B.substr(0,Oa),Oa=B.lastIndexOf("/")}U=
B}else U=null;G=n("agentname")||n("csu")||(0===g?"ruxitagentjs":"dtagent");"true"===w("dtUseDebugAgent")?0>G.indexOf("dbg")&&(G=n("debugName")||G+"dbg"):G=n("name")||G;if(!m("auto")&&!m("legacy")&&!ub){var W=n("agentUri")||Ma(n("featureHash"));m("async")?La(W,m("async")):document.write('<script type="text/javascript" src="'+W+'">\x3c/script>')}var fa=e.location.href;0===g&&-1!==h(fa,"_DT_RENDERING_")&&(D().RMOD={conf:mc,ignore:nc,ID:"_DT_RENDERING_"},U&&La(Ma("R"),!0));w(x)&&(f.cooO=1);Qb();if(0===
g){var ga=Da(Ha);f.pVO=ga;ha(Ga)}0===g&&sa("hvt")&&($a=sa("hvt"));pa(Qa,[1])}catch(Na){return!1}return!0})(0)||(delete e.dT_,e.console.log("JsAgent initCode initialization failed!"))}})();

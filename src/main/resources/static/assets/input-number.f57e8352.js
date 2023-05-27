var pe=Object.defineProperty,de=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var W=(n,s,a)=>s in n?pe(n,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[s]=a,Y=(n,s)=>{for(var a in s||(s={}))be.call(s,a)&&W(n,a,s[a]);if(R)for(var a of R(s))me.call(s,a)&&W(n,a,s[a]);return n},H=(n,s)=>de(n,ce(s));import{d as re,r as fe,M as _e,c as g,w as he,o as ve,aa as ge,a as f,f as D,J,u as t,g as M,z as I,j as K,e as q,b as E,k as Q,h as k}from"./index.f20a2340.js";import{E as Ne}from"./index.2085544e.js";import{b as we,a7 as xe,a8 as c,m as w,n as ye,a as Ve,aa as Ie,a9 as S,ac as Ee,o as ke,af as Se,be as Pe,E as X,ag as Fe,bf as ze,_ as Ae,k as Ce,x as Z,w as Be}from"./base.f9e60852.js";import{C as ne,I as P,U as N}from"./event.776e7e11.js";import{v as ee}from"./index.4a39cc77.js";const Te=we({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:xe,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:n=>n===null||c(n)||["min","max"].includes(n),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:n=>n>=0&&n===Number.parseInt(`${n}`,10)},validateEvent:{type:Boolean,default:!0}}),De={[ne]:(n,s)=>s!==n,blur:n=>n instanceof FocusEvent,focus:n=>n instanceof FocusEvent,[P]:n=>c(n)||w(n),[N]:n=>c(n)||w(n)},Me=["aria-label","onKeydown"],Ke=["aria-label","onKeydown"],Oe=re({name:"ElInputNumber"}),Ue=re(H(Y({},Oe),{props:Te,emits:De,setup(n,{expose:s,emit:a}){const i=n,{t:O}=ye(),b=Ve("input-number"),h=fe(),o=_e({currentValue:i.modelValue,userInput:null}),{formItem:_}=Ie(),U=g(()=>c(i.modelValue)&&i.modelValue<=i.min),$=g(()=>c(i.modelValue)&&i.modelValue>=i.max),te=g(()=>{const e=G(i.step);return S(i.precision)?Math.max(G(i.modelValue),e):(e>i.precision,i.precision)}),F=g(()=>i.controls&&i.controlsPosition==="right"),j=Ee(),v=ke(),z=g(()=>{if(o.userInput!==null)return o.userInput;let e=o.currentValue;if(w(e))return"";if(c(e)){if(Number.isNaN(e))return"";S(i.precision)||(e=e.toFixed(i.precision))}return e}),A=(e,r)=>{if(S(r)&&(r=te.value),r===0)return Math.round(e);let l=String(e);const p=l.indexOf(".");if(p===-1||!l.replace(".","").split("")[p+r])return e;const y=l.length;return l.charAt(y-1)==="5"&&(l=`${l.slice(0,Math.max(0,y-1))}6`),Number.parseFloat(Number(l).toFixed(r))},G=e=>{if(w(e))return 0;const r=e.toString(),l=r.indexOf(".");let p=0;return l!==-1&&(p=r.length-l-1),p},L=(e,r=1)=>c(e)?A(e+i.step*r):o.currentValue,C=()=>{if(i.readonly||v.value||$.value)return;const e=Number(z.value)||0,r=L(e);x(r),a(P,o.currentValue)},B=()=>{if(i.readonly||v.value||U.value)return;const e=Number(z.value)||0,r=L(e,-1);x(r),a(P,o.currentValue)},T=(e,r)=>{const{max:l,min:p,step:u,precision:m,stepStrictly:y,valueOnClear:V}=i;let d=Number(e);if(w(e)||Number.isNaN(d))return null;if(e===""){if(V===null)return null;d=Ce(V)?{min:p,max:l}[V]:V}return y&&(d=A(Math.round(d/u)*u,m)),S(m)||(d=A(d,m)),(d>l||d<p)&&(d=d>l?l:p,r&&a(N,d)),d},x=(e,r=!0)=>{var l;const p=o.currentValue,u=T(e);if(p!==u){if(!r){a(N,u);return}o.userInput=null,a(N,u),a(ne,u,p),i.validateEvent&&((l=_==null?void 0:_.validate)==null||l.call(_,"change").catch(m=>Z())),o.currentValue=u}},le=e=>{o.userInput=e;const r=e===""?null:Number(e);a(P,r),x(r,!1)},ie=e=>{const r=e!==""?Number(e):"";(c(r)&&!Number.isNaN(r)||e==="")&&x(r),o.userInput=null},ae=()=>{var e,r;(r=(e=h.value)==null?void 0:e.focus)==null||r.call(e)},ue=()=>{var e,r;(r=(e=h.value)==null?void 0:e.blur)==null||r.call(e)},se=e=>{a("focus",e)},oe=e=>{var r;a("blur",e),i.validateEvent&&((r=_==null?void 0:_.validate)==null||r.call(_,"blur").catch(l=>Z()))};return he(()=>i.modelValue,e=>{const r=T(o.userInput),l=T(e,!0);!c(r)&&(!r||r!==l)&&(o.currentValue=l,o.userInput=null)},{immediate:!0}),ve(()=>{var e;const{min:r,max:l,modelValue:p}=i,u=(e=h.value)==null?void 0:e.input;if(u.setAttribute("role","spinbutton"),Number.isFinite(l)?u.setAttribute("aria-valuemax",String(l)):u.removeAttribute("aria-valuemax"),Number.isFinite(r)?u.setAttribute("aria-valuemin",String(r)):u.removeAttribute("aria-valuemin"),u.setAttribute("aria-valuenow",String(o.currentValue)),u.setAttribute("aria-disabled",String(v.value)),!c(p)&&p!=null){let m=Number(p);Number.isNaN(m)&&(m=null),a(N,m)}}),ge(()=>{var e;const r=(e=h.value)==null?void 0:e.input;r==null||r.setAttribute("aria-valuenow",`${o.currentValue}`)}),s({focus:ae,blur:ue}),(e,r)=>(f(),D("div",{class:M([t(b).b(),t(b).m(t(j)),t(b).is("disabled",t(v)),t(b).is("without-controls",!e.controls),t(b).is("controls-right",t(F))]),onDragstart:r[1]||(r[1]=k(()=>{},["prevent"]))},[e.controls?J((f(),D("span",{key:0,role:"button","aria-label":t(O)("el.inputNumber.decrease"),class:M([t(b).e("decrease"),t(b).is("disabled",t(U))]),onKeydown:I(B,["enter"])},[K(t(X),null,{default:q(()=>[t(F)?(f(),E(t(Se),{key:0})):(f(),E(t(Pe),{key:1}))]),_:1})],42,Me)),[[t(ee),B]]):Q("v-if",!0),e.controls?J((f(),D("span",{key:1,role:"button","aria-label":t(O)("el.inputNumber.increase"),class:M([t(b).e("increase"),t(b).is("disabled",t($))]),onKeydown:I(C,["enter"])},[K(t(X),null,{default:q(()=>[t(F)?(f(),E(t(Fe),{key:0})):(f(),E(t(ze),{key:1}))]),_:1})],42,Ke)),[[t(ee),C]]):Q("v-if",!0),K(t(Ne),{id:e.id,ref_key:"input",ref:h,type:"number",step:e.step,"model-value":t(z),placeholder:e.placeholder,readonly:e.readonly,disabled:t(v),size:t(j),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:r[0]||(r[0]=k(()=>{},["prevent"])),onKeydown:[I(k(C,["prevent"]),["up"]),I(k(B,["prevent"]),["down"])],onBlur:oe,onFocus:se,onInput:le,onChange:ie},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}}));var $e=Ae(Ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const He=Be($e);export{He as E};
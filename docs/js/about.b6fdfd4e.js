(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0fd9":function(t,e,n){"use strict";n("4b85");var l=n("2b0e"),a=n("d9f7"),r=n("80d2");const o=["sm","md","lg","xl"],s=["start","end","center"];function i(t,e){return o.reduce((n,l)=>(n[t+Object(r["t"])(l)]=e(),n),{})}const u=t=>[...s,"baseline","stretch"].includes(t),c=i("align",()=>({type:String,default:null,validator:u})),f=t=>[...s,"space-between","space-around"].includes(t),d=i("justify",()=>({type:String,default:null,validator:f})),g=t=>[...s,"space-between","space-around","stretch"].includes(t),p=i("alignContent",()=>({type:String,default:null,validator:g})),b={align:Object.keys(c),justify:Object.keys(d),alignContent:Object.keys(p)},y={align:"align",justify:"justify",alignContent:"align-content"};function j(t,e,n){let l=y[t];if(null!=n){if(e){const n=e.replace(t,"");l+="-"+n}return l+="-"+n,l.toLowerCase()}}const S=new Map;e["a"]=l["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...c,justify:{type:String,default:null,validator:f},...d,alignContent:{type:String,default:null,validator:g},...p},render(t,{props:e,data:n,children:l}){let r="";for(const a in e)r+=String(e[a]);let o=S.get(r);if(!o){let t;for(t in o=[],b)b[t].forEach(n=>{const l=e[n],a=j(t,n,l);a&&o.push(a)});o.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),S.set(r,o)}return t(e.tag,Object(a["a"])(n,{staticClass:"row",class:o}),l)}})},"62ad":function(t,e,n){"use strict";n("4b85");var l=n("2b0e"),a=n("d9f7"),r=n("80d2");const o=["sm","md","lg","xl"],s=(()=>o.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),i=(()=>o.reduce((t,e)=>(t["offset"+Object(r["t"])(e)]={type:[String,Number],default:null},t),{}))(),u=(()=>o.reduce((t,e)=>(t["order"+Object(r["t"])(e)]={type:[String,Number],default:null},t),{}))(),c={col:Object.keys(s),offset:Object.keys(i),order:Object.keys(u)};function f(t,e,n){let l=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");l+="-"+n}return"col"!==t||""!==n&&!0!==n?(l+="-"+n,l.toLowerCase()):l.toLowerCase()}}const d=new Map;e["a"]=l["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...s,offset:{type:[String,Number],default:null},...i,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:l,parent:r}){let o="";for(const a in e)o+=String(e[a]);let s=d.get(o);if(!s){let t;for(t in s=[],c)c[t].forEach(n=>{const l=e[n],a=f(t,n,l);a&&s.push(a)});const n=s.some(t=>t.startsWith("col-"));s.push({col:!n||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),d.set(o,s)}return t(e.tag,Object(a["a"])(n,{class:s}),l)}})},f820:function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",[n("h1",[t._v("This is an about page")])])],1)],1)},a=[],r=n("2877"),o=n("6544"),s=n.n(o),i=n("62ad"),u=n("a523"),c=n("0fd9"),f={},d=Object(r["a"])(f,l,a,!1,null,null,null);e["default"]=d.exports;s()(d,{VCol:i["a"],VContainer:u["a"],VRow:c["a"]})}}]);
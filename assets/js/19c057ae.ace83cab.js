"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={title:"Hive table",id:"hive"},l=void 0,s={unversionedId:"docs/configuration/materializations/hive",id:"docs/configuration/materializations/hive",title:"Hive table",description:"The default dbt table materialization will be using a Hive table in Athena.",source:"@site/docs/docs/configuration/materializations/hive.md",sourceDirName:"docs/configuration/materializations",slug:"/docs/configuration/materializations/hive",permalink:"/docs/configuration/materializations/hive",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/current/docs/docs/configuration/materializations/hive.md",tags:[],version:"current",lastUpdatedAt:1683029953,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Hive table",id:"hive"},sidebar:"docs",previous:{title:"Table configuration",permalink:"/docs/configuration/table-configuration"},next:{title:"Highly-available Hive table",permalink:"/docs/configuration/materializations/hive-ha"}},u={},p=[],d={toc:p},f="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The default dbt ",(0,i.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/build/materializations#table"},"table materialization")," will be using a Hive table in Athena.\nWhen used, dbt will run a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/athena/latest/ug/create-table-as.html"},(0,i.kt)("inlineCode",{parentName:"a"},"CREATE TABLE AS"))," query against Athena."))}m.isMDXComponent=!0}}]);
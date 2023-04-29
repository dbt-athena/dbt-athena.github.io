"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,b=p["".concat(d,".").concat(m)]||p[m]||l[m]||i;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r,o=n(7462),i=n(3366),a=(n(7294),n(3905)),c=n(5108),d=["components"],s={title:"Become a contributor",sidebar_label:"Contributing",id:"contributing"},u=void 0,p={unversionedId:"docs/contributing/contributing",id:"docs/contributing/contributing",title:"Become a contributor",description:"A community-owned project",source:"@site/docs/docs/contributing/contributing.md",sourceDirName:"docs/contributing",slug:"/docs/contributing/",permalink:"/pr-preview/pr-2/docs/contributing/",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/current/docs/docs/contributing/contributing.md",tags:[],version:"current",lastUpdatedAt:1682729760,formattedLastUpdatedAt:"Apr 29, 2023",frontMatter:{title:"Become a contributor",sidebar_label:"Contributing",id:"contributing"},sidebar:"docs",previous:{title:"Known issues",permalink:"/pr-preview/pr-2/docs/known-issues"},next:{title:"Local development",permalink:"/pr-preview/pr-2/docs/contributing/local-development"}},l={},m=[{value:"A community-owned project",id:"a-community-owned-project",level:2}],b=(r="Card",function(e){return c.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),h={toc:m},f="wrapper";function y(e){var t=e.components,n=(0,i.Z)(e,d);return(0,a.kt)(f,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"a-community-owned-project"},"A community-owned project"),(0,a.kt)("p",null,"The dbt-athena adapter is a community-owned adapter on Github, which means that the code is maintained and developed by a group of individuals rather than a single company or organization. This approach of community ownership ensures that the adapter is not dependent on a single entity, reducing the risk of the code becoming unsupported or abandoned."),(0,a.kt)("p",null,"Community ownership also fosters collaboration, encourages transparency, and helps to ensure that the code is developed and maintained with the needs of the community in mind. The dbt-athena adapter is an excellent example of how the power of the open-source community can be harnessed to develop high-quality, reliable, and sustainable software."),(0,a.kt)("p",null,"Community ownership also means that there is no single point of failure in terms of the code's development and maintenance. With multiple contributors and maintainers, the risk of the project being abandoned or becoming unsupported due to changes in the ownership structure is reduced. Additionally, the diverse perspectives and expertise of the community can result in a more robust and feature-rich codebase."),(0,a.kt)("div",{className:"grid--2-col"},(0,a.kt)(b,{title:"Local development setup",body:"Learn how to setup and debug the project locally",link:"docs/contributing/local-development",icon:"computer",mdxType:"Card"}),(0,a.kt)(b,{title:"Online community building",body:"Getting involved in the dbt Community Slack (#db-athena) is one of the best entry points for contributing. Share your knowledge about Athena and dbt-athena and learn from others.",link:"https://www.getdbt.com/community/join-the-community/",icon:"slack",mdxType:"Card"})))}y.isMDXComponent=!0}}]);
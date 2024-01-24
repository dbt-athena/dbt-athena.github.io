"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[801],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Known issues",id:"known-issues"},l=void 0,c={unversionedId:"docs/known-issues",id:"docs/known-issues",title:"Known issues",description:"- Incremental Iceberg models: sync all columns on schema change can't remove columns used as partitioning. The only way, from a dbt perspective, is to do a full-refresh of the incremental model.",source:"@site/docs/docs/known-issues.md",sourceDirName:"docs",slug:"/docs/known-issues",permalink:"/pr-preview/pr-19/docs/known-issues",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/main/docs/docs/known-issues.md",tags:[],version:"current",lastUpdatedAt:1706107943,formattedLastUpdatedAt:"Jan 24, 2024",frontMatter:{title:"Known issues",id:"known-issues"},sidebar:"docs",previous:{title:"Lakeformation",permalink:"/pr-preview/pr-19/docs/configuration/lakeformation"},next:{title:"Upgrade to version 1.5",permalink:"/pr-preview/pr-19/docs/migration/UPGRADE-1.5"}},u={},p=[{value:"An error occurred (InvalidIdentityToken) when calling the AssumeRoleWithWebIdentity operation",id:"an-error-occurred-invalididentitytoken-when-calling-the-assumerolewithwebidentity-operation",level:2}],d={toc:p},m="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Incremental Iceberg models: sync all columns on schema change can't remove columns used as partitioning. The only way, from a dbt perspective, is to do a full-refresh of the incremental model."),(0,a.kt)("li",{parentName:"ul"},"Tables, schemas and database should only be lowercase")),(0,a.kt)("h2",{id:"an-error-occurred-invalididentitytoken-when-calling-the-assumerolewithwebidentity-operation"},"An error occurred (InvalidIdentityToken) when calling the AssumeRoleWithWebIdentity operation"),(0,a.kt)("p",null,"When using db-athena with Single Sign On (SSO), the mechanism you use to assume the target role can cause problems. You can provide the token in ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.aws/config")," as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},"[profile web-identity]\nrole_arn=arn:aws:iam:...\nweb_identity_token_file=/path/to/a/token\n")),(0,a.kt)("p",null,"This approach has been known to cause an error during your dbt execution (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dbt-athena/dbt-athena/issues/259"},"issue#259"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"An error occurred (InvalidIdentityToken) when calling the AssumeRoleWithWebIdentity operation: Couldn't retrieve verification key from your identity provider, please reference AssumeRoleWithWebIdentity documentation for requirements\"\n")),(0,a.kt)("p",null,"A solution is to explicitly assume the role before your dbt execution, rather than letting the underlying libraries take care of it. Call ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/reference/sts/assume-role-with-web-identity.html"},(0,a.kt)("inlineCode",{parentName:"a"},"aws sts assume-role-with-web-identity"))," with an appropriate duration."))}h.isMDXComponent=!0}}]);
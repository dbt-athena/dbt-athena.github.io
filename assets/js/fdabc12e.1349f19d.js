"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r,a=n(7462),o=n(3366),i=(n(7294),n(3905)),l=n(5108),c=["components"],s={title:"Local development",id:"local-development"},u=void 0,p={unversionedId:"docs/contributing/local-development",id:"docs/contributing/local-development",title:"Local development",description:"Using virtual environments",source:"@site/docs/docs/contributing/local-development.md",sourceDirName:"docs/contributing",slug:"/docs/contributing/local-development",permalink:"/docs/contributing/local-development",draft:!1,editUrl:"https://github.com/dbt-athena/dbt-athena.github.io/edit/main/docs/docs/contributing/local-development.md",tags:[],version:"current",lastUpdatedAt:1683043763,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Local development",id:"local-development"},sidebar:"docs",previous:{title:"Contributing",permalink:"/docs/contributing/"},next:{title:"Frequently asked questions",permalink:"/docs/faqs"}},d={},m=[{value:"Using virtual environments",id:"using-virtual-environments",level:2},{value:"Install a specific package of dbt-athena in your project",id:"install-a-specific-package-of-dbt-athena-in-your-project",level:2},{value:"Local package",id:"local-package",level:3},{value:"Git branch",id:"git-branch",level:3},{value:"Unit tests",id:"unit-tests",level:2}],v=(r="File",function(e){return l.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:m},b="wrapper";function g(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"using-virtual-environments"},"Using virtual environments"),(0,i.kt)("p",null,"Virtualenv is the most common and easy to install tool for virtual environments. It\u2019s a great tool for beginners."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-terminal"},"python3 -m venv dbt-env             # create the environment\nsource dbt-env/bin/activate         # activate the environment for Mac and Linux\ndbt-env\\Scripts\\activate            # activate the environment for Windows\n")),(0,i.kt)("p",null,"If you install dbt in a virtual environment, you need to reactivate that same virtual environment each time you create a shell window or session."),(0,i.kt)("h2",{id:"install-a-specific-package-of-dbt-athena-in-your-project"},"Install a specific package of dbt-athena in your project"),(0,i.kt)("h3",{id:"local-package"},"Local package"),(0,i.kt)("p",null,"When you are experiencing a bug, it's often very useful to run against a local version of dbt-athena, with the ability to add debug logs and fixes."),(0,i.kt)(v,{name:"requirements.txt",mdxType:"File"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"-e /Users/username/Code/dbt-athena\n"))),(0,i.kt)("p",null,"Then, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pip install -r requirements.txt")),(0,i.kt)("h3",{id:"git-branch"},"Git branch"),(0,i.kt)("p",null,"To test a specific branch in your project, add the following to your ",(0,i.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file:"),(0,i.kt)(v,{name:"requirements.txt",mdxType:"File"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"git+https://github.com/dbt-athena/dbt-athena.git@main#dbt-athena-community\n"))),(0,i.kt)("p",null,"Then, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pip install -r requirements.txt")),(0,i.kt)("h2",{id:"unit-tests"},"Unit tests"),(0,i.kt)("p",null,"To run the unit tests using Pytest in dbt-athena, follow these instructions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-terminal"},"make install_deps\nmake unit_test\n")))}g.isMDXComponent=!0}}]);
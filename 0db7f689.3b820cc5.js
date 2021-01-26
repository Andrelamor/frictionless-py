(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{131:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(131)),o={title:"SQL Tutorial",sidebar_label:"SQL"},c={unversionedId:"tutorials/sql-tutorial",id:"tutorials/sql-tutorial",isDocsHomePage:!1,title:"SQL Tutorial",description:"This functionality requires an experimental sql plugin. Read More",source:"@site/../docs/tutorials/sql-tutorial.md",slug:"/tutorials/sql-tutorial",permalink:"/docs/tutorials/sql-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/sql-tutorial.md",version:"current",lastUpdatedBy:"thill-odi",lastUpdatedAt:1611665065,sidebar_label:"SQL",sidebar:"tutorials",previous:{title:"SPSS Tutorial",permalink:"/docs/tutorials/spss-tutorial"},next:{title:"Server Tutorial",permalink:"/docs/tutorials/server-tutorial"}},l=[{value:"Reading from SQL",id:"reading-from-sql",children:[]},{value:"Wriring to SQL",id:"wriring-to-sql",children:[]},{value:"Configuring SQL",id:"configuring-sql",children:[]}],s={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This functionality requires an experimental ",Object(i.b)("inlineCode",{parentName:"p"},"sql")," plugin. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/references/plugins-reference"}),"Read More")))),Object(i.b)("p",null,"Frictionless supports reading and writing SQL databases."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"! pip install frictionless[sql]\n")),Object(i.b)("h2",{id:"reading-from-sql"},"Reading from SQL"),Object(i.b)("p",null,"You can read SQL database:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import Package\n\npackage = Package.from_pandas(url='postgresql://mydatabase')\nprint(package)\nfor resource in package.resources:\n  print(resource.read_rows())\n")),Object(i.b)("h2",{id:"wriring-to-sql"},"Wriring to SQL"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"[NOTE]")," Timezone information is ignored for ",Object(i.b)("inlineCode",{parentName:"p"},"datetime")," and ",Object(i.b)("inlineCode",{parentName:"p"},"time")," types.")),Object(i.b)("p",null,"You can write SQL databases:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import Package\n\npackage = Package('path/to/datapackage.json')\npackage.to_spss(utl='postgresql://mydatabase')\n")),Object(i.b)("h2",{id:"configuring-sql"},"Configuring SQL"),Object(i.b)("p",null,"There is a dialect to configure how Frictionless read and write files in this format. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import Resource\nfrom frictionless.plugins.sql import SqlDialect\n\ndialect = SqlDialect(table='table', order_by='field')\nresource = Resource('postgresql://database', dialect=dialect)\n")),Object(i.b)("p",null,"References:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://frictionlessdata.io/tooling/python/dialects-reference/#sql"}),"SQL Dialect"))))}p.isMDXComponent=!0}}]);
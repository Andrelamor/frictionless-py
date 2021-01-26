(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{131:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),b=n,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},93:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(131)),o={title:"Pandas Tutorial",sidebar_label:"Pandas"},c={unversionedId:"tutorials/pandas-tutorial",id:"tutorials/pandas-tutorial",isDocsHomePage:!1,title:"Pandas Tutorial",description:"This functionality requires an experimental pandas plugin. Read More",source:"@site/../docs/tutorials/pandas-tutorial.md",slug:"/tutorials/pandas-tutorial",permalink:"/docs/tutorials/pandas-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/pandas-tutorial.md",version:"current",lastUpdatedBy:"thill-odi",lastUpdatedAt:1611665065,sidebar_label:"Pandas",sidebar:"tutorials",previous:{title:"ODS Tutorial",permalink:"/docs/tutorials/ods-tutorial"},next:{title:"SPSS Tutorial",permalink:"/docs/tutorials/spss-tutorial"}},s=[{value:"Reading from Pandas",id:"reading-from-pandas",children:[]},{value:"Writing to Pandas",id:"writing-to-pandas",children:[]},{value:"Configuring Pandas",id:"configuring-pandas",children:[]}],l={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This functionality requires an experimental ",Object(i.b)("inlineCode",{parentName:"p"},"pandas")," plugin. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/references/plugins-reference"}),"Read More")))),Object(i.b)("p",null,"Frictionless supports reading and writing Pandas dataframes."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"! pip install frictionless[pandas]\n")),Object(i.b)("h2",{id:"reading-from-pandas"},"Reading from Pandas"),Object(i.b)("p",null,"You can read a Pandas dataframe:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import Package\n\npackage = Package.from_pandas(dataframes=['table1': '<df1>', 'tables2': '<df2>'])\nprint(package)\nfor resource in package.resources:\n  print(resource.read_rows())\n")),Object(i.b)("h2",{id:"writing-to-pandas"},"Writing to Pandas"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"[NOTE]")," Timezone information is ignored for ",Object(i.b)("inlineCode",{parentName:"p"},"datetime")," and ",Object(i.b)("inlineCode",{parentName:"p"},"time")," types.")),Object(i.b)("p",null,"You can write a dataset to Pandas:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import Package\n\npackage = Package('path/to/datapackage.json')\ndataframes = package.to_pandas()\n")),Object(i.b)("h2",{id:"configuring-pandas"},"Configuring Pandas"),Object(i.b)("p",null,"There are no options available in ",Object(i.b)("inlineCode",{parentName:"p"},"PandasDialect"),"."),Object(i.b)("p",null,"References:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://frictionlessdata.io/tooling/python/dialects-reference/#pandas"}),"Pandas Dialect"))))}p.isMDXComponent=!0}}]);
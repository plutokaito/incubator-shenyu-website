"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[8125],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),u=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,g=s["".concat(o,".").concat(m)]||s[m]||c[m]||a;return n?i.createElement(g,l(l({ref:t},d),{},{components:n})):i.createElement(g,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4190:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],p={title:"Divide Plugin",keywords:["divide"],description:"divide plugin"},o=void 0,u={unversionedId:"plugin-center/proxy/divide-plugin",id:"plugin-center/proxy/divide-plugin",isDocsHomePage:!1,title:"Divide Plugin",description:"divide plugin",source:"@site/docs/plugin-center/proxy/divide-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/divide-plugin",permalink:"/docs/next/plugin-center/proxy/divide-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/docs/plugin-center/proxy/divide-plugin.md",version:"current",frontMatter:{title:"Divide Plugin",keywords:["divide"],description:"divide plugin"},sidebar:"tutorialSidebar",previous:{title:"Rewrite Plugin",permalink:"/docs/next/plugin-center/http-handle/rewrite-plugin"},next:{title:"Dubbo Plugin",permalink:"/docs/next/plugin-center/proxy/dubbo-plugin"}},d=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin detail",id:"plugin-detail",children:[]}],c={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"explanation"},"Explanation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Divide")," is the core processing plugin for gateway to process ",(0,a.kt)("inlineCode",{parentName:"li"},"http")," requests.")),(0,a.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add related dependencies and enable plugin, please refer to: ",(0,a.kt)("a",{parentName:"p",href:"../../quick-start/quick-start-http"},"Quick start with Http"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Http")," client access, please refer to\uff1a",(0,a.kt)("a",{parentName:"p",href:"../../user-guide/http-proxy"},"Http proxy")," ."))),(0,a.kt)("h2",{id:"plugin-detail"},"Plugin detail"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"divide")," plugin is a plugin for forward proxying of ",(0,a.kt)("inlineCode",{parentName:"p"},"http"),". All requests of the ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," type are called by the plugin for load balancing."),(0,a.kt)("img",{src:"/img/shenyu/plugin/divide/plugin-en.png",width:"80%",height:"80%"}),(0,a.kt)("p",null,"After the client connects to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway, it will automatically register the selector and rule information. For the selector and rule configuration, please refer to:",(0,a.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule"),"\u3002"),(0,a.kt)("h4",{id:"selector-handler"},"Selector Handler"),(0,a.kt)("img",{src:"/img/shenyu/plugin/divide/selector_en.png",width:"80%",height:"80%"}),(0,a.kt)("p",null,"Selector Handler, corresponding to the ",(0,a.kt)("inlineCode",{parentName:"p"},"handle")," field of ",(0,a.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," , it is the ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," configuration that is actually called after the gateway matches the traffic. You can configure multiple and set the load The balance weight, the specific load balancing strategy, is specified in the rules. For more information, please refer to ",(0,a.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/plugin-handle-explanation"},"Plugin handle management")," in Plugin Config."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"detailed processing setting\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"host"),": input ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),",this field is ignored.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ip:port"),": ip and port, input your true service ",(0,a.kt)("inlineCode",{parentName:"p"},"ip")," + port here.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"protocol"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP")," protocol, input ",(0,a.kt)("inlineCode",{parentName:"p"},"http://")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"https://"),", default is:",(0,a.kt)("inlineCode",{parentName:"p"},"http://")," .")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"startupTime"),": enabling the time.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"weight"),": load balancing weight.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"warmupTime"),": warm-up time.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"status"),": open or closed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ip + port")," check"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"there will be a scheduled task in ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," to scan the configured ",(0,a.kt)("inlineCode",{parentName:"p"},"ip")," port, if it is found offline, choose to delete the ",(0,a.kt)("inlineCode",{parentName:"p"},"ip + port"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"can be configured as follows:"))))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: http \n    serverLists: \n    props:\n      sessionTimeout: 5000\n      connectionTimeout: 2000\n      checked: true  # default is true, set to false, no detection\n      zombieCheckTimes: 5\n      scheduledTime: 10 # timing detection interval, the default is 10 seconds\n\n")),(0,a.kt)("h4",{id:"rule-handler"},"Rule Handler"),(0,a.kt)("img",{src:"/img/shenyu/plugin/divide/rule_en.png",width:"80%",height:"80%"}),(0,a.kt)("p",null,"Rule Handler, corresponding to the ",(0,a.kt)("inlineCode",{parentName:"p"},"handle")," field of ",(0,a.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),". It is the processing rule that the gateway adopts after the final matching of the traffic is completed. For more information, please refer to ",(0,a.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/plugin-handle-explanation"},"Plugin handle management")," in Plugin Config."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"detailed processing setting\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"loadStrategy"),": if the ",(0,a.kt)("inlineCode",{parentName:"li"},"http")," client is a cluster, which load balancing strategy is adopted when the ",(0,a.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," gateway is called, currently supports ",(0,a.kt)("inlineCode",{parentName:"li"},"roundRobin"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"random")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"hash"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"retryCount"),": number of retries for calling the ",(0,a.kt)("inlineCode",{parentName:"li"},"http")," client."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout"),": timeout period for calling the ",(0,a.kt)("inlineCode",{parentName:"li"},"http")," client."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"headerMaxSize"),": maximum value of the requested ",(0,a.kt)("inlineCode",{parentName:"li"},"header"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"requestMaxSize"),": maximum size of the request body.")))))}s.isMDXComponent=!0}}]);
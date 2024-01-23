"use strict";(self.webpackChunkmadices=self.webpackChunkmadices||[]).push([[173],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1788:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"MADICES 2024",sidebar_label:"MADICES 2024"},l=void 0,c={unversionedId:"index",id:"index",title:"MADICES 2024",description:"The recently established research data management (RDM) initiatives have been largely successful in delivering tools advancing the digitalisation of sciences, including a few open research data (ORD) repositories, several electronic lab notebooks (ELNs), workflow management systems (WFMSs), and many instrument automation platforms [1-4].",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/madices/madices.github.io/edit/main/docs/index.mdx",tags:[],version:"current",lastUpdatedAt:1706028481,formattedLastUpdatedAt:"1/23/2024",frontMatter:{title:"MADICES 2024",sidebar_label:"MADICES 2024"}},p=[{value:"References",id:"references",children:[],level:3}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The recently established research data management (RDM) initiatives have been largely successful in delivering tools advancing the digitalisation of sciences, including a few open research data (ORD) repositories, several electronic lab notebooks (ELNs), workflow management systems (WFMSs), and many instrument automation platforms ","[1-4]","."),(0,i.kt)("p",null,"In this proposed workshop we plan to focus on interoperability across the stages of such RDM pipelines. This includes both integration of experimental and computational data, and the interoperability of instrument automation platforms and WFMSs with ELNs. In particular, we wish to address the following challenges:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sample provenance in mixed workflows"),". WFMSs are tailored to keep track of data and sample provenance for workflows that are completely contained in the WFMS. Similarly, an ELN is usually tailored to allow the users to enter protocols and link it with data manually. However, what happens in cases where the sample history is a mixture of automated and manual steps? How do we avoid data duplication and yet retain the complete sample history in an ELN?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Digital twins suitable for computation and experiment"),". A sample in a computational workflow is, generally, a well-defined, immutable, idealized system, which can be easily reused in further computations. However, a sample in an experimental workflow is strictly dependent on its history, as many experimental techniques alter the sample state. In this case, one cannot physically access the previous sample states. How does a WFMS know what kind of sample it\u2019s handed from the ELN? How does the WFMS know to which descendant of the parent sample it\u2019s meant to push the new results? How is this provenance graph consistently transferred between the different components of the RDM pipeline?")),(0,i.kt)("p",null,"At the proposed workshop, we will bring together WFMS and ELN developers, scientists, and data stewards to discuss the above issues and find cross-platform solutions. The goal of the workshop will be to establish a working group focused on developing a standard for such a tool-to-tool interoperability in a platform-agnostic way."),(0,i.kt)("p",null,"The ultimate goal is to provide the infrastructure for future autonomous laboratories, in which ML/AI algorithms can seamlessly drive both experiments and simulations toward fully autonomous discovery and characterization. In doing so, the contribution of MADICES2 will be to encourage the support by the various platforms for FAIR data sharing \u201cby design\u201d."),(0,i.kt)("p",null,"The workshop will promote these scientific applications by spending significant time scoping and discussing the software development required to support the case studies. By breaking off into 2-3 fluid interest groups, the minimum workable version of each project can be achieved within the short turnaround time of 4 days. Guidelines will be put into place for organizers to report back the work of each group twice-a-day, and each day will end with open discussion to feed back into the next day\u2019s work."),(0,i.kt)("p",null,"On day 2, there will be a specific time scheduled for more \u201chackathon\u201d style work (with pizza provided), where attendees can work individually or in very small groups to investigate possible integrations within their existing initiatives. We will contact participants to arrange one or two meetings to discuss potential ideas in the months before the workshop. This will be of great impact given the technical audience of the workshop, and time to present the hackathon projects will be given at the start of day 3. After the official close of the workshop around lunchtime on day 4, the organizers (and those without travel constraints) commit to staying for the rest of the day to tidy-up the projects and begin drafting a whitepaper or publication, as well as aligning follow-up work from the interest groups on specific projects."),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"K. Jablonka, L. Patiny, B. Smit, Nat. Chem., 14, 365-376 (2022)"),(0,i.kt)("li",{parentName:"ol"},"S. Kanza, C. Willoughby, N. Gibbins, R. Whitby, J. Frey, J. Erjavec, K. Zupan\u010di\u010d, M. Hren, K. Kova\u010d, J. Cheminform., 9, 31 (2017)"),(0,i.kt)("li",{parentName:"ol"},"M. Scheffler, M. Aeschlimann, M. Albrecht, T. Bereau, H. Bungartz, C. Felser, M. Greiner, A. Gro\xdf, C. Koch, K. Kremer, W. Nagel, M. Scheidgen, C. W\xf6ll, C. Draxl, Nature, 604, 635-642 (2022)"),(0,i.kt)("li",{parentName:"ol"},"A. Yakutovich, K. Eimre, O. Sch\xfctt, L. Talirz, C. Adorf, C. Andersen, E. Ditler, D. Du, D. Passerone, B. Smit, N. Marzari, G. Pizzi, C. Pignedoli, Computational Materials Science, 188, 110165 (2021)"),(0,i.kt)("li",{parentName:"ol"},"S. Clark, F. Bleken, S. Stier, E. Flores, C. Andersen, M. Marcinek, A. Szczesna\u2010Chrzan, M. Gaberscek, M. Palacin, M. Uhrin, J. Friis, Advanced Energy Materials, 12, 2102702 (2021)"),(0,i.kt)("li",{parentName:"ol"},"C. Andersen, R. Armiento, E. Blokhin, G. Conduit, S. Dwaraknath, M. Evans, \xc1. Fekete, A. Gopakumar, S. Gra\u017eulis, A. Merkys, F. Mohamed, C. Oses, G. Pizzi, G. Rignanese, M. Scheidgen, L. Talirz, C. Toher, D. Winston, R. Aversa, K. Choudhary, P. Colinet, S. Curtarolo, D. Di Stefano, C. Draxl, S. Er, M. Esters, M. Fornari, M. Giantomassi, M. Govoni, G. Hautier, V. Hegde, M. Horton, P. Huck, G. Huhs, J. Hummelsh\xf8j, A. Kariryaa, B. Kozinsky, S. Kumbhar, M. Liu, N. Marzari, A. Morris, A. Mostofi, K. Persson, G. Petretto, T. Purcell, F. Ricci, F. Rose, M. Scheffler, D. Speckhard, M. Uhrin, A. Vaitkus, P. Villars, D. Waroquiers, C. Wolverton, M. Wu, X. Yang, Sci. Data., 8, 217 (2021)")))}d.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(156),o=a(162),l=a(163),c=new(a(77).default);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("div",null,"Welcome ",c.getUserName()),r.a.createElement(i.a,{to:"/"},"Go to home page"))}},156:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(20),c=a.n(l);a.d(t,"a",function(){return c.a}),a.d(t,"c",function(){return l.navigate});a(159);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},159:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Manattosphere"}}}}},161:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(57),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},162:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(156),s=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};s.propTypes={siteTitle:l.a.string},s.defaultProps={siteTitle:""};var u=s,d=(a(166),a(77)),m=a(165),p=new d.default,g=function(){return(0,p.isAuthenticated)()?i.a.createElement(m.a,{onClick:p.logout},"Logout ",p.getUserName()):i.a.createElement(m.a,{onClick:p.login},"Login")},f=function(){var e=new d.default,t={message:"",login:!0},a=e.isAuthenticated;return a()?t.message="Hello, ":t.message="You are not logged in",i.a.createElement("div",{style:{display:"flex",flex:"1",justifyContent:"space-between",borderBottom:"1px solid #d1c1e0"}},i.a.createElement("span",null,t.message),i.a.createElement("nav",null,i.a.createElement(c.a,{to:"/"},"Home"),i.a.createElement(c.a,{to:"/app/profile"},"Profile"),a()?i.a.createElement("a",{href:"/",onClick:e.logout},"Logout"):i.a.createElement(g,{auth:e})))},y=function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}}," ",i.a.createElement(f,null),i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),","," ","Paradise Tech Soft pvt. ltd.")))},data:n})};y.propTypes={children:l.a.node.isRequired};t.a=y},163:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(168),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Manattosphere",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-profile-js-a7e2c8ce03392f8dea17.js.map
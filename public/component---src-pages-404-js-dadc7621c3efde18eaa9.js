(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(162),o=a(163);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},156:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(20),l=a.n(s);a.d(t,"a",function(){return l.a}),a.d(t,"c",function(){return s.navigate});a(159);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},159:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Manattosphere"}}}}},161:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(57),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},162:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(156),c=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};c.propTypes={siteTitle:s.a.string},c.defaultProps={siteTitle:""};var u=c,d=(a(166),a(77)),m=a(165),p=new d.default,g=function(){return(0,p.isAuthenticated)()?i.a.createElement(m.a,{onClick:p.logout},"Logout ",p.getUserName()):i.a.createElement(m.a,{onClick:p.login},"Login")},f=function(){var e=new d.default,t={message:"",login:!0},a=e.isAuthenticated;return a()?t.message="Hello, ":t.message="You are not logged in",i.a.createElement("div",{style:{display:"flex",flex:"1",justifyContent:"space-between",borderBottom:"1px solid #d1c1e0"}},i.a.createElement("span",null,t.message),i.a.createElement("nav",null,i.a.createElement(l.a,{to:"/"},"Home"),i.a.createElement(l.a,{to:"/app/profile"},"Profile"),a()?i.a.createElement("a",{href:"/",onClick:e.logout},"Logout"):i.a.createElement(g,{auth:e})))},h=function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}}," ",i.a.createElement(f,null),i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),","," ","Paradise Tech Soft pvt. ltd.")))},data:n})};h.propTypes={children:s.a.node.isRequired};t.a=h},163:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(168),c=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,l=n.data.site,u=t||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Manattosphere",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-dadc7621c3efde18eaa9.js.map
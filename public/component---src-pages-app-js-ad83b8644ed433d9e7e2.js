(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),i=a(162),o=a(77),u=new o.default,c=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Your profile"),r.a.createElement("ul",null,r.a.createElement("li",null,"Name: ",u.getUserName()),r.a.createElement("li",null,"E-mail: ",u.getUserEmail())))},s=a(165),m=new o.default,d=function(){return(0,m.isAuthenticated)()?r.a.createElement(s.a,{onClick:m.logout},"Logout ",m.getUserName()):r.a.createElement(s.a,{onClick:m.login},"Login")},p=a(156),f=new o.default,g=function(){return(0,f.isAuthenticated)()?r.a.createElement(c,null):(Object(p.c)("/"),null)};t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.Router,null,r.a.createElement(g,{path:"/app/profile",component:c}),r.a.createElement(d,{path:"/app/login"})))}},156:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(20),u=a.n(o);a.d(t,"a",function(){return u.a}),a.d(t,"c",function(){return o.navigate});a(159);var c=r.a.createContext({}),s=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},159:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Manattosphere"}}}}},161:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(57),u=a(2),c=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},162:function(e,t,a){"use strict";var n=a(160),r=a(0),l=a.n(r),i=a(4),o=a.n(i),u=a(156),c=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(u.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};c.propTypes={siteTitle:o.a.string},c.defaultProps={siteTitle:""};var s=c,m=(a(166),a(77)),d=a(165),p=new m.default,f=function(){return(0,p.isAuthenticated)()?l.a.createElement(d.a,{onClick:p.logout},"Logout ",p.getUserName()):l.a.createElement(d.a,{onClick:p.login},"Login")},g=function(){var e=new m.default,t={message:"",login:!0},a=e.isAuthenticated;return a()?t.message="Hello, ":t.message="You are not logged in",l.a.createElement("div",{style:{display:"flex",flex:"1",justifyContent:"space-between",borderBottom:"1px solid #d1c1e0"}},l.a.createElement("span",null,t.message),l.a.createElement("nav",null,l.a.createElement(u.a,{to:"/"},"Home"),l.a.createElement(u.a,{to:"/app/profile"},"Profile"),a()?l.a.createElement("a",{href:"/",onClick:e.logout},"Logout"):l.a.createElement(f,{auth:e})))},E=function(e){var t=e.children;return l.a.createElement(u.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}}," ",l.a.createElement(g,null),l.a.createElement("main",null,t),l.a.createElement("footer",null,"© ",(new Date).getFullYear(),","," ","Paradise Tech Soft pvt. ltd.")))},data:n})};E.propTypes={children:o.a.node.isRequired};t.a=E}}]);
//# sourceMappingURL=component---src-pages-app-js-ad83b8644ed433d9e7e2.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{405:function(o,t,l){var map={"./db_sql.png":409,"./dialogflow_logo.jpg":410,"./firebase_logo.png":411,"./html_css_logo.png":412,"./jwt_logo.jpg":413,"./langs.png":258,"./node_logo.svg":414,"./oauth_logo.png":415,"./php_logo.png":416,"./postgre_logo.svg":417,"./pwa_logo.png":418,"./react_logo.png":419,"./socketio.png":420,"./vue_logo.png":421,"./web_push.png":422};function n(o){var t=e(o);return l(t)}function e(o){if(!l.o(map,o)){var t=new Error("Cannot find module '"+o+"'");throw t.code="MODULE_NOT_FOUND",t}return map[o]}n.keys=function(){return Object.keys(map)},n.resolve=e,o.exports=n,n.id=405},409:function(o,t,l){o.exports=l.p+"img/db_sql.a6cae15.png"},410:function(o,t,l){o.exports=l.p+"img/dialogflow_logo.96ecbc1.jpg"},411:function(o,t,l){o.exports=l.p+"img/firebase_logo.236ae3e.png"},412:function(o,t,l){o.exports=l.p+"img/html_css_logo.ef11b67.png"},413:function(o,t,l){o.exports=l.p+"img/jwt_logo.46f766e.jpg"},414:function(o,t,l){o.exports=l.p+"img/node_logo.dd47e26.svg"},415:function(o,t,l){o.exports=l.p+"img/oauth_logo.abd8b14.png"},416:function(o,t,l){o.exports=l.p+"img/php_logo.b9fdd20.png"},417:function(o,t,l){o.exports=l.p+"img/postgre_logo.29aef66.svg"},418:function(o,t,l){o.exports=l.p+"img/pwa_logo.818993f.png"},419:function(o,t,l){o.exports=l.p+"img/react_logo.d1d0036.png"},420:function(o,t,l){o.exports=l.p+"img/socketio.38c9006.png"},421:function(o,t,l){o.exports=l.p+"img/vue_logo.81cc72c.png"},422:function(o,t,l){o.exports=l.p+"img/web_push.8283633.png"},424:function(o,t,l){"use strict";l.r(t);var n={name:"skill",props:{skillData:{type:Object,default:function(){return{name:"",image:"",knowledgeLvl:0,text:""}}}}},e=l(37),component=Object(e.a)(n,(function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("el-row",[o.skillData.secundary?[n("div",{staticClass:"secundary__skill__container"},[n("el-row",[n("el-col",[n("div",{staticClass:"skill__image"},[n("img",{attrs:{src:l(405)("./"+o.skillData.image),alt:""}})]),o._v(" "),n("strong",[o._v(" "+o._s(o.skillData.name)+" ")]),o._v(" "),n("br")])],1)],1)]:[n("div",{staticClass:"main__skill__container"},[n("el-row",[n("el-col",{attrs:{xs:{span:18},lg:{span:16}}},[n("div",[n("strong",[o._v(" "+o._s(o.skillData.name)+" ")]),o._v(" "),n("br"),o._v(" "),n("span",{staticClass:"additional__skill__text"},[o._v(o._s(o.skillData.text))])]),o._v(" "),n("div",{staticClass:"skill__knowledge__level"},[n("div",{staticClass:"skill__level",style:{width:o.skillData.knowledgeLvl+"%"}},[o._v("\n              "+o._s(o.skillData.knowledgeLvl)+"%\n            ")])])]),o._v(" "),n("el-col",{attrs:{xs:{span:6},lg:{span:8}}},[n("div",{staticClass:"skill__image"},[n("img",{attrs:{src:l(405)("./"+o.skillData.image),alt:""}})])])],1)],1)]],2)}),[],!1,null,null,null);t.default=component.exports}}]);
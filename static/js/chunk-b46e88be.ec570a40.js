(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b46e88be"],{caad:function(e,n,t){"use strict";var r=t("23e7"),o=t("4d64").includes,s=t("44d2"),i=t("ae40"),a=i("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!a},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),s("includes")},d9c9:function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"login"},[t("div",{staticClass:"login-form"},[t("h1",[e._v("Element Admin")]),t("el-form",{ref:"loginForm",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[t("el-form-item",{attrs:{prop:"username"}},[t("span",{staticClass:"form-item-icon"},[t("svg-icon",{attrs:{name:"user"}})],1),t("el-input",{attrs:{placeholder:"请输入用户名","icon-class":"username",type:"text","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(n){e.$set(e.loginForm,"username","string"===typeof n?n.trim():n)},expression:"loginForm.username"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"form-item-icon"},[t("svg-icon",{attrs:{name:"password"}})],1),t("el-input",{attrs:{type:e.passwordType,placeholder:"请输入密码",name:"password","auto-complete":"on"},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.handleLogin(n)}},model:{value:e.loginForm.password,callback:function(n){e.$set(e.loginForm,"password","string"===typeof n?n.trim():n)},expression:"loginForm.password"}}),t("svg-icon",{attrs:{name:"eye"},nativeOn:{click:function(n){return e.showPwd(n)}}})],1),t("el-button",{staticClass:"login-btn",attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(n){return n.preventDefault(),e.handleLogin(n)}}},[e._v(" 登录 ")])],1)],1)])},o=[];t("e97a"),t("caad");function s(e){var n=["admin","editor"];return n.includes(e)}var i={name:"Login",data:function(){var e=function(e,n,t){s(n)?t():t(new Error("Please enter the correct user name"))},n=function(e,n,t){n&&n.length<6?t(new Error("The password can not be less than 6 digits")):t()};return{loginForm:{username:"admin",password:"1111111"},loginRules:{username:{required:!0,trigger:"blur",validator:e},password:{required:!0,trigger:"blur",validator:n}},passwordType:"password",loading:!1,redirect:void 0}},methods:{showPwd:function(){this.passwordType="password"===this.passwordType?"":"password"},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(n){if(!n)return e.$message.error("请认真填写登录信息！"),!1;e.loading=!0,e.$message.success(e.$i18n.t("tip.loginSuccess")),setTimeout((function(){e.loading=!1,e.$router.push({path:e.redirect||"/"})}),500)}))}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}}},a=i,l=t("2877"),u=Object(l["a"])(a,r,o,!1,null,null,null);n["default"]=u.exports},e97a:function(e,n,t){}}]);
//# sourceMappingURL=chunk-b46e88be.ec570a40.js.map
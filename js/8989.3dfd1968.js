"use strict";(self["webpackChunkelement_show"]=self["webpackChunkelement_show"]||[]).push([[8989],{8989:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var o=function(){var t=this,e=t._self._c;return e("div",[e("fTitle",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Notification 通知")]},proxy:!0},{key:"introduce",fn:function(){return[t._v("悬浮出现在页面角落，显示全局的通知提醒消息。")]},proxy:!0}])}),e("sTitle",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("基本用法")]},proxy:!0},{key:"introduce",fn:function(){},proxy:!0}])}),e("div",{staticClass:"outbox"},[e("div",{staticClass:"inbox"},[e("el-row",{attrs:{type:"flex",justify:"space-around"}},[e("el-col",{attrs:{span:10}},[e("div",{staticClass:"grid-content"},[e("el-button",{attrs:{plain:""},on:{click:t.open1}},[t._v(" 可自动关闭 ")])],1)]),e("el-col",{attrs:{span:10}},[e("div",{staticClass:"grid-content"},[e("el-button",{attrs:{plain:""},on:{click:t.open2}},[t._v(" 不会自动关闭 ")])],1)])],1),e("el-row",{attrs:{type:"flex",justify:"space-around"}},t._l(t.typeList,(function(n){return e("el-col",{key:n.type,attrs:{span:5}},[e("div",{staticClass:"grid-content"},[e("el-button",{attrs:{plain:""},on:{click:function(e){return t.open3(n)}}},[t._v(" "+t._s(n.type+"按钮")+" ")])],1)])})),1),e("el-row",{attrs:{type:"flex",justify:"space-around"}},t._l(t.positionList,(function(n){return e("el-col",{key:n.type,attrs:{span:5}},[e("div",{staticClass:"grid-content"},[e("el-button",{attrs:{plain:""},on:{click:function(e){return t.open4(n)}}},[t._v(" "+t._s(n.text.slice(0,3))+" ")])],1)])})),1)],1)])],1)},s=[],i={name:"ColorIndex",data(){return{typeList:[{type:"success",text:"这是一条成功的提示消息"},{type:"warning",text:"这是一条警告的提示消息"},{type:"info",text:"这是一条消息的提示消息"},{type:"error",text:"这是一条错误的提示消息"}],positionList:[{type:"top-right",text:"右上角弹出的消息"},{type:"bottom-right",text:"右下角弹出的消息"},{type:"bottom-left",text:"左下角弹出的消息"},{type:"top-left",text:"左上角弹出的消息"}]}},methods:{open1(){const t=this.$createElement;this.$notify({title:"标题名称",message:t("i",{style:"color: teal"},"这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案")})},open2(){this.$notify({title:"提示",message:"这是一条不会自动关闭的消息",duration:0})},open3(t){this.$notify({title:t.type,message:t.text,type:t.type})},open4(t){this.$notify({title:"自定义位置",message:t.text,position:t.type})}}},l=i,r=n(1656),a=(0,r.A)(l,o,s,!1,null,"5f91047c",null),p=a.exports}}]);
//# sourceMappingURL=8989.3dfd1968.js.map
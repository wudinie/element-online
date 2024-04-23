"use strict";(self["webpackChunkelement_show"]=self["webpackChunkelement_show"]||[]).push([[6731],{6731:function(e,t,a){a.r(t),a.d(t,{default:function(){return r}});var l=function(){var e=this,t=e._self._c;return t("div",[t("fTitle",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("DatePicker 日期选择器")]},proxy:!0},{key:"introduce",fn:function(){return[e._v("用于选择或输入日期")]},proxy:!0}])}),t("sTitle",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("选择日")]},proxy:!0},{key:"introduce",fn:function(){return[e._v("以「日」为基本单位，基础的日期选择控件")]},proxy:!0}])}),t("div",{staticClass:"outbox"},[t("div",{staticClass:"inbox"},[t("el-row",{attrs:{type:"flex",justify:"space-around"}},[t("el-col",{attrs:{span:8}},[t("div",{staticClass:"grid-content"},[t("H3",[e._v("默认")]),t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1)]),t("el-col",{attrs:{span:8}},[t("div",{staticClass:"grid-content"},[t("H3",[e._v("带快捷选项")]),t("el-date-picker",{attrs:{align:"right",type:"date",placeholder:"选择日期","picker-options":e.pickerOptions},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)])],1)],1)]),t("sTitle",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("其他日期单位")]},proxy:!0},{key:"introduce",fn:function(){return[e._v("通过扩展基础的日期选择，可以选择周、月、年或多个日期")]},proxy:!0}])}),t("div",{staticClass:"outbox"},[t("div",{staticClass:"inbox"},[t("el-row",{attrs:{type:"flex",justify:"space-around"}},[t("el-col",{attrs:{span:8}},[t("div",{staticClass:"grid-content"},[t("H3",[e._v("周")]),t("el-date-picker",{attrs:{type:"week",format:"yyyy 第 WW 周",placeholder:"选择周"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1)]),t("el-col",{attrs:{span:8}},[t("div",{staticClass:"grid-content"},[t("H3",[e._v("选择多个日期")]),t("el-date-picker",{attrs:{type:"dates",placeholder:"选择一个或多个日期"},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})],1)])],1)],1)]),t("sTitle",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("其他日期单位")]},proxy:!0},{key:"introduce",fn:function(){return[e._v("通过扩展基础的日期选择，可以选择周、月、年或多个日期")]},proxy:!0}])}),t("div",{staticClass:"outbox"},[t("div",{staticClass:"inbox"},[t("el-row",{attrs:{type:"flex",justify:"space-around"}},[t("el-col",{attrs:{span:10}},[t("div",{staticClass:"grid-content"},[t("H3",[e._v("默认")]),t("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1)]),t("el-col",{attrs:{span:10}},[t("div",{staticClass:"grid-content"},[t("H3",[e._v("带快捷选项")]),t("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions2},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)])],1)],1)]),t("sTitle",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("默认选择当年1号至今日日期")]},proxy:!0},{key:"introduce",fn:function(){},proxy:!0}])}),t("div",{staticClass:"outbox"},[t("div",{staticClass:"inbox"},[t("el-row",[t("el-col",[t("div",{staticClass:"block"},[t("p",[e._v("组件值："+e._s(e.value))]),t("el-date-picker",{attrs:{type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["00:00:00","23:59:59"]},on:{change:e.logDate},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)])],1)],1)])],1)},n=[],i={name:"ColorIndex",data(){return{pickerOptions2:{shortcuts:[{text:"最近一周",onClick(e){const t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick(e){const t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick(e){const t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},pickerOptions:{disabledDate(e){return e.getTime()>Date.now()},shortcuts:[{text:"今天",onClick(e){e.$emit("pick",new Date)}},{text:"昨天",onClick(e){const t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"一周前",onClick(e){const t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}}]},value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value:""}},methods:{logDate(){console.log(this.value)}},mounted(){setTimeout((()=>{this.value=[new Date((new Date).getFullYear(),0,1),new Date],console.log(this.value)}),200)}},s=i,o=a(1656),c=(0,o.A)(s,l,n,!1,null,"4fa5342e",null),r=c.exports}}]);
//# sourceMappingURL=6731.f7de23ec.js.map
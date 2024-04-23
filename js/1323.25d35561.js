"use strict";(self["webpackChunkelement_show"]=self["webpackChunkelement_show"]||[]).push([[1323],{1323:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",[e("fTitle",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Skeleton 骨架屏")]},proxy:!0},{key:"introduce",fn:function(){return[t._v("在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。")]},proxy:!0}])}),e("sTitle",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("动画效果")]},proxy:!0},{key:"introduce",fn:function(){return[t._v("绑定表格显示动画加载效果。")]},proxy:!0}])}),e("div",{staticClass:"outbox"},[e("div",{staticClass:"inbox"},[e("el-row",{attrs:{type:"flex",justify:"space-around"}},[e("el-col",{attrs:{span:20}},[e("div",{staticClass:"grid-content"},[e("el-skeleton",{staticStyle:{width:"100%",height:"400PX"},attrs:{rows:10,loading:t.load,animated:""}},[e("el-table",{staticStyle:{height:"400px",overflow:"scroll"},attrs:{data:t.goodList}},[e("el-table-column",{attrs:{property:"user.user_id",label:"用户id",width:"150"}}),e("el-table-column",{attrs:{property:"create_time",label:"评论时间",width:"250"}}),e("el-table-column",{attrs:{property:"content",label:"评论",width:"250"}}),e("el-table-column",{attrs:{label:"用户昵称"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-tag",{attrs:{type:"success"}},[t._v(t._s(a.row.user.nick_name))])]}}])})],1)],1)],1)])],1)],1)]),e("sTitle",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Loading 状态")]},proxy:!0},{key:"introduce",fn:function(){return[t._v("当 Loading 结束之后，我们往往需要显示真实的 UI，可以通过 loading 的值来控制是否显示真实的 DOM。然后通过 具名 Slot 来设置当 loading 结束之后需要展示的 UI。")]},proxy:!0}])}),e("div",{staticClass:"outbox"},[e("div",{staticClass:"inbox"},[e("el-row",{attrs:{type:"flex",justify:"space-around"}},[e("el-col",{attrs:{span:20}},[e("p",[e("label",{staticStyle:{"margin-right":"16px"}},[t._v("切换 Loading")]),e("el-switch",{model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}})],1),e("div",{staticClass:"grid-content",staticStyle:{height:"380px"}},[e("el-skeleton",{staticStyle:{width:"240px"},attrs:{loading:t.loading,animated:"",throttle:500}},[e("template",{slot:"template"},[e("el-skeleton-item",{staticStyle:{width:"240px",height:"240px"},attrs:{variant:"image"}}),e("div",{staticStyle:{padding:"14px"}},[e("el-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"h3"}}),e("div",{staticStyle:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},[e("el-skeleton-item",{staticStyle:{"margin-right":"16px"},attrs:{variant:"text"}}),e("el-skeleton-item",{staticStyle:{width:"30%"},attrs:{variant:"text"}})],1)],1)],1),[e("el-card",[e("img",{staticClass:"image",attrs:{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"}}),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v("好吃的汉堡")]),e("div",{staticClass:"bottom card-header"},[e("span",{staticClass:"time"},[t._v(t._s(t.currentDate))]),e("el-button",{staticClass:"button",attrs:{type:"text"}},[t._v("操作按钮")])],1)])])]],2)],1)])],1)],1)])],1)},i=[],l=a(3476),n={name:"ColorIndex",data(){return{load:!0,goodList:[],loading:!0,currentDate:"2021-06-01"}},created(){setTimeout((async()=>{const t=await l.A.get("/comment/list",{params:{scoreType:-1,goodsId:10038,page:1}});this.goodList=t.data.list.data,this.load=!1,console.log(t.data.list.data)}),2e3)}},o=n,r=a(1656),d=(0,r.A)(o,s,i,!1,null,"fe89dd56",null),c=d.exports}}]);
//# sourceMappingURL=1323.25d35561.js.map
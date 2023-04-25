(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{374:function(t,s,a){"use strict";a.r(s);var n=a(44),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"负载均衡器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡器"}},[t._v("#")]),t._v(" 负载均衡器")]),t._v(" "),a("h2",{attrs:{id:"负载均衡器-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡器-2"}},[t._v("#")]),t._v(" 负载均衡器")]),t._v(" "),a("h3",{attrs:{id:"公共数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公共数据"}},[t._v("#")]),t._v(" 公共数据")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("可选云平台\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 腾讯云")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# aws")]),t._v("\n")])])]),a("h3",{attrs:{id:"路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),a("p",[t._v("/clb/info/")]),t._v(" "),a("h4",{attrs:{id:"获取负载均衡器内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取负载均衡器内容"}},[t._v("#")]),t._v(" 获取负载均衡器内容")]),t._v(" "),a("p",[t._v("查询方法：get")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名称")]),t._v(" "),a("th",[t._v("字段类型")]),t._v(" "),a("th",[t._v("是否必要")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("flag")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("云平台，请查看公共数据，可选云平台，默认是腾讯云平台")])])])]),t._v(" "),a("p",[t._v("响应内容")]),t._v(" "),a("h5",{attrs:{id:"腾讯云"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#腾讯云"}},[t._v("#")]),t._v(" 腾讯云")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名称")]),t._v(" "),a("th",[t._v("字段类型")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("自增id")])]),t._v(" "),a("tr",[a("td",[t._v("clbid")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("实例ID")])]),t._v(" "),a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("名称")])]),t._v(" "),a("tr",[a("td",[t._v("status")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("状态")])]),t._v(" "),a("tr",[a("td",[t._v("vip")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("vip")])]),t._v(" "),a("tr",[a("td",[t._v("region")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("所属节点")])]),t._v(" "),a("tr",[a("td",[t._v("nettype")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("网络类型")])]),t._v(" "),a("tr",[a("td",[t._v("vpcid")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("所属网络")])]),t._v(" "),a("tr",[a("td",[t._v("target")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("健康状态")])]),t._v(" "),a("tr",[a("td",[t._v("tag")]),t._v(" "),a("td",[t._v("list")]),t._v(" "),a("td",[t._v("标签列表[string,string]，可以为空")])]),t._v(" "),a("tr",[a("td",[t._v("creattime")]),t._v(" "),a("td",[t._v("datetime")]),t._v(" "),a("td",[t._v("创建时间，格式yyyy-mm-dd HH-MM-SS")])]),t._v(" "),a("tr",[a("td",[t._v("comment")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("备注")])])])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clbid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lb-4q0xj05p"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wam-分服-03"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"正常"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vip"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"162.62.3.225"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"region"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"莫斯科一区"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nettype"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"公网属性"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vpcid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vpc-d8eclp2v"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"target"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"creattime"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-04-14T12:01:44Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comment"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OK"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h5",{attrs:{id:"aws"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aws"}},[t._v("#")]),t._v(" AWS")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名称")]),t._v(" "),a("th",[t._v("字段类型")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("自增id")])]),t._v(" "),a("tr",[a("td",[t._v("clbid")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("vip")])]),t._v(" "),a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("名称")])]),t._v(" "),a("tr",[a("td",[t._v("status")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("状态")])]),t._v(" "),a("tr",[a("td",[t._v("region")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("所属节点")])]),t._v(" "),a("tr",[a("td",[t._v("nettype")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("模式")])]),t._v(" "),a("tr",[a("td",[t._v("clbtype")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("类型")])]),t._v(" "),a("tr",[a("td",[t._v("vpcid")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("所属网络")])]),t._v(" "),a("tr",[a("td",[t._v("tag")]),t._v(" "),a("td",[t._v("list")]),t._v(" "),a("td",[t._v("标签列表[string,string]，可以为空")])]),t._v(" "),a("tr",[a("td",[t._v("creattime")]),t._v(" "),a("td",[t._v("datetime")]),t._v(" "),a("td",[t._v("创建时间，格式yyyy-mm-dd HH-MM-SS")])]),t._v(" "),a("tr",[a("td",[t._v("comment")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("备注")])])])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clbid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ksr-2104316894.us-west-1.elb.amazonaws.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ksr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"active"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"region"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"us-west-1a,us-west-1c"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nettype"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"internet-facing"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clbtype"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vpcid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vpc-06c227650f40995e8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"creattime"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-04-25T07:00:37.050000Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comment"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clbid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kg-cdn-dynamic-1499863476.us-west-1.elb.amazonaws.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kg-cdn-dynamic"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"active"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"region"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"us-west-1c,us-west-1a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nettype"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"internet-facing"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clbtype"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vpcid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vpc-35e1d152"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"creattime"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-01-22T08:56:06.540000Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comment"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OK"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"刷新负载均衡器内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#刷新负载均衡器内容"}},[t._v("#")]),t._v(" 刷新负载均衡器内容")]),t._v(" "),a("p",[t._v("查询方法：post")]),t._v(" "),a("p",[t._v("响应内容：成功后需要调用get方法")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名称")]),t._v(" "),a("th",[t._v("字段类型")]),t._v(" "),a("th",[t._v("是否必要")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("flag")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("云平台，请查看公共数据，可选云平台")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
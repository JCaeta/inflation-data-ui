(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[511],{3710:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/public",function(){return a(8723)}])},8723:function(t,e,a){"use strict";a.r(e),a.d(e,{Public:function(){return c}});var n=a(5893),s=a(7294),r=a(3426),u=a(3156),l=a(3742),i=a(695);let c=()=>{let[t,e]=(0,s.useState)(null),[a,c]=(0,s.useState)(!1),[o,d]=(0,s.useState)(!1),h=t=>1===t.id||(-2===t.id?(d(!0),!1):void 0),f=async()=>{_(null,null)},_=async(t,a)=>{console.log("getChartsData");let n=await (0,l.Rv)({startDate:t,endDate:a});console.log("responseCharts: ",n),h(n.message)&&e({barChartData:n.barChartData,lineChartData:n.lineChartData})};(0,s.useEffect)(()=>{!1==a&&(f(),c(!0))});let p=async(t,e)=>{_(t,e)};return(0,n.jsx)(n.Fragment,{children:o?(0,n.jsx)(i.e,{}):(0,n.jsx)(u.Z,{maxWidth:!1,children:(0,n.jsx)(r.t,{data:t,onFilter:p})})})};e.default=c,c.defaultProps={},c.propTypes={}}},function(t){t.O(0,[196,885,76,409,774,888,179],function(){return t(t.s=3710)}),_N_E=t.O()}]);
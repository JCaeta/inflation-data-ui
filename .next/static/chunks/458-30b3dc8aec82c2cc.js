"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[458],{458:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var a=n(5893),l=n(7294),i=n(5697),r=n.n(i),s=n(1703),o=n(44),u=n(8794),d=n(3321),c=n(6886);let f=(0,l.forwardRef)((e,t)=>{let[n,i]=(0,l.useState)(e.inputNumberValue),[r,s]=(0,l.useState)(e.inputDateValue);(0,l.useEffect)(()=>{e.inputDateValue instanceof Date?s(e.inputDateValue.toISOString().split("T")[0]):s(""),"number"==typeof e.inputNumberValue?i(e.inputNumberValue):i("")},[e.inputNumberValue,e.inputDateValue]);let o=e=>{/^[0-9]*\.?[0-9]*$/.test(e.target.value)&&i(e.target.value)};(0,l.useImperativeHandle)(t,()=>({clear(){s(""),i("")}}));let f=e=>{s(e.target.value)},p=()=>{let t=new Date(r),a=t.getTimezoneOffset();t.setMinutes(t.getMinutes()+a),e.onSubmit(parseFloat(n),t)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{children:e.title}),(0,a.jsxs)(c.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,a.jsx)(c.ZP,{item:!0,xs:5,children:(0,a.jsx)(u.Z,{label:e.inputNumberText,variant:"outlined",type:"text",value:n,onChange:o,fullWidth:!0})}),(0,a.jsx)(c.ZP,{item:!0,xs:5,children:(0,a.jsx)(u.Z,{label:"Date Input",variant:"outlined",type:"date",value:r,onChange:f,fullWidth:!0,InputLabelProps:{shrink:!0}})}),(0,a.jsx)(c.ZP,{item:!0,xs:2,children:(0,a.jsx)(d.Z,{variant:"contained",onClick:p,children:e.buttonText})})]})]})});f.defaultProps={inputNumberText:"Number Input",onSubmit:null,buttonText:"Submit",title:"Title",inputNumberValue:"",inputDateValue:""},f.propTypes={inputNumberText:r().string,onSubmit:r().func,buttonText:r().string,title:r().string,inputNumberValue:r().any,inputDateValue:r().any};var p=n(2882),x=n(629),h=n(7906),m=n(3184),g=n(3816),j=n(3252),b=n(295),v=n(3946),D=n(1797),Z=n(6761);let y=e=>(0,a.jsx)(p.Z,{component:x.Z,children:(0,a.jsxs)(h.Z,{children:[(0,a.jsx)(m.Z,{children:(0,a.jsxs)(g.Z,{children:[e.headers.map((e,t)=>(0,a.jsx)(j.Z,{children:e},t)),(0,a.jsx)(j.Z,{})]})}),(0,a.jsx)(b.Z,{children:e.rows.map((t,n)=>(0,a.jsxs)(g.Z,{children:[t.map((e,t)=>(0,a.jsx)(j.Z,{children:e},t)),(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(v.Z,{"aria-label":"edit",onClick:()=>e.onEdit({index:n,row:t}),children:(0,a.jsx)(D.Z,{})}),(0,a.jsx)(v.Z,{"aria-label":"delete",onClick:()=>e.onRemove({index:n,row:t}),children:(0,a.jsx)(Z.Z,{})})]})]},n))})]})});y.defaultProps={headers:null,rows:null},y.propTypes={headers:r().arrayOf(r().string).isRequired,rows:r().arrayOf(r().arrayOf(r().node)).isRequired,onEdit:r().func,onRemove:r().func};let T=(0,l.forwardRef)((e,t)=>{let[n,i]=(0,l.useState)(""),[r,s]=(0,l.useState)("");(0,l.useImperativeHandle)(t,()=>({clear(){i(""),s("")},setDate1(e){i(e.toISOString().split("T")[0])},setDate2(e){s(e.toISOString().split("T")[0])},getDates:()=>x()}));let o=e=>{i(e.target.value)},f=e=>{s(e.target.value)},p=()=>{let t=x();e.onSubmit(t.date1,t.date2)},x=()=>{var e=null,t=null;if(""!=n){e=new Date(n);let t=e.getTimezoneOffset();e.setMinutes(e.getMinutes()+t)}if(""!=r){t=new Date(r);let e=t.getTimezoneOffset();t.setMinutes(t.getMinutes()+e)}return{date1:e,date2:t}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{children:e.title}),(0,a.jsxs)(c.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,a.jsx)(c.ZP,{item:!0,xs:5,children:(0,a.jsx)(u.Z,{label:e.date1Text,variant:"outlined",type:"date",value:n,onChange:o,fullWidth:!0,InputLabelProps:{shrink:!0}})}),(0,a.jsx)(c.ZP,{item:!0,xs:5,children:(0,a.jsx)(u.Z,{label:e.date2Text,variant:"outlined",type:"date",value:r,onChange:f,fullWidth:!0,InputLabelProps:{shrink:!0}})}),(0,a.jsx)(c.ZP,{item:!0,xs:2,children:(0,a.jsx)(d.Z,{variant:"contained",onClick:p,children:e.buttonText})})]})]})});T.defaultProps={date1Text:"Start date",date2Text:"End date",onSubmit:null,buttonText:"Filter",title:"Filter"},T.propTypes={date1Text:r().string,date2Text:r().string,onSubmit:r().func,buttonText:r().string,title:r().string};var I=n(3156),S=n(657),C=n(4509),w=n(6514);let F=(0,l.forwardRef)((e,t)=>{let[n,i]=(0,l.useState)(""),[r,s]=(0,l.useState)(""),o=t=>{/^[0-9]*\.?[0-9]*$/.test(t.target.value)&&(e.onNumberChange(parseFloat(t.target.value)),i(t.target.value))},d=t=>{if(""!=t.target.value){let n=new Date(t.target.value),a=n.getTimezoneOffset();n.setMinutes(n.getMinutes()+a),s(n.toISOString().split("T")[0]),e.onDateChange(n)}else s("")};return(0,l.useImperativeHandle)(t,()=>({setNumber(e){i(e)},setDate(e){s(e.toISOString().split("T")[0])},clear(){i(""),s("")}})),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{children:e.title}),(0,a.jsxs)(c.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,a.jsx)(c.ZP,{item:!0,xs:6,children:(0,a.jsx)(u.Z,{label:e.inputNumberText,variant:"outlined",type:"text",value:n,onChange:o,fullWidth:!0})}),(0,a.jsx)(c.ZP,{item:!0,xs:6,children:(0,a.jsx)(u.Z,{label:"Date Input",variant:"outlined",type:"date",value:r,onChange:d,fullWidth:!0,InputLabelProps:{shrink:!0}})})]})]})});F.defaultProps={inputNumberText:"Number Input",title:"Title",onNumberChange:null,onDateChange:null},F.propTypes={inputNumberText:r().string,title:r().string,onNumberChange:r().func,onDateChange:r().func};let P=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(S.Z,{open:e.open,onClose:()=>e.setOpen(!1),children:[(0,a.jsx)(C.Z,{children:"Warning"}),(0,a.jsx)(w.Z,{children:(0,a.jsxs)(c.ZP,{container:!0,direction:"column",sx:{my:2},children:[(0,a.jsx)(c.ZP,{item:!0,sx:{my:2},children:e.text}),(0,a.jsxs)(c.ZP,{item:!0,sx:{my:2},display:"flex",flexDirection:"row-reverse",children:[(0,a.jsx)(d.Z,{variant:"contained",onClick:e.onYes,sx:{mr:1},children:"Yes"}),(0,a.jsx)(d.Z,{variant:"contained",onClick:e.onNo,sx:{mr:1},children:"No"})]})]})})]})});P.defaultProps={open:!0,setOpen:null,onYes:null,onNo:null,text:"Message"},P.propTypes={open:r().bool,setOpen:r().func,onYes:r().func,onNo:r().func,text:r().string};let N=(0,l.forwardRef)((e,t)=>{let[n,i]=(0,l.useState)(!1),r=(0,l.useRef)(null),[s,o]=(0,l.useState)(null),u=()=>{f()},f=()=>{i(!0)},p=()=>{i(!1)},x=()=>{i(!1),e.onUpdate(s)};(0,l.useEffect)(()=>{null!=e.inflation&&o({id:e.inflation.id,date:e.inflation.date,value:e.inflation.value})},[]),(0,l.useEffect)(()=>{null!=s&&(r.current.setDate(s.date),r.current.setNumber(s.value))},[s]),(0,l.useImperativeHandle)(t,()=>({setInflation(e){console.log("setInflation"),console.log("inflation: ",e),o(e),r.current.setDate(e.date),r.current.setNumber(e.value)}}));let h=e=>{o({id:s.id,date:e,value:s.value})},m=e=>{o({id:s.id,date:s.date,value:e})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(c.ZP,{container:!0,direction:"column",sx:{my:2},children:[(0,a.jsx)(c.ZP,{item:!0,sx:{my:2},children:(0,a.jsx)(F,{ref:r,inputNumberText:"Inflation %",onDateChange:h,onNumberChange:m,title:""})}),(0,a.jsxs)(c.ZP,{item:!0,sx:{my:2},display:"flex",flexDirection:"row-reverse",children:[(0,a.jsx)(d.Z,{variant:"contained",onClick:e.onCancel,sx:{mr:1},children:"Cancel"}),(0,a.jsx)(d.Z,{variant:"contained",onClick:u,sx:{mr:1},children:"Update"})]})]}),(0,a.jsx)(P,{open:n,setOpen:i,onYes:x,onNo:p,text:"Are you sure you want to update this record?"})]})});N.defaultProps={inflation:null,onUpdate:null,onCancel:null},N.propTypes={inflation:r().any,onUpdate:r().func,onCancel:r().func};let R=(0,l.forwardRef)((e,t)=>{let[n,i]=(0,l.useState)(!1),[r,s]=(0,l.useState)(!1),[o,u]=(0,l.useState)(null),[d,p]=(0,l.useState)({headers:["Id","Date","Inflation %"],rows:[]}),[x,h]=(0,l.useState)(!1),m=(0,l.useRef)(null),g=(0,l.useRef)(null),j=(0,l.useRef)(null),b=async(t,n)=>{u({id:null,date:n,value:t}),e.onAdd({id:null,date:n,value:t})},v=e=>{let t=new Date(e.row[1]),n=t.getTimezoneOffset();t.setMinutes(t.getMinutes()+n),u({id:e.row[0],date:t,value:parseFloat(e.row[2])}),i(!0)},D=()=>{Z()},Z=()=>{i(!1)},F=t=>{Z(),e.onUpdate(t)},R=e=>{u({id:e.row[0],date:e.row[1],value:parseFloat(e.row[2])}),s(!0)},O=()=>{k(),e.onRemove(o)},k=()=>{s(!1)};return(0,l.useImperativeHandle)(t,()=>({clearAdd(){m.current.clear()},clearFilter(){g.current.clear()},setTableData(e){let t=e.map(e=>[e.id,e.date.toISOString().split("T")[0],e.value]);p({headers:["Id","Date","Inflation %"],rows:t}),h(!0)},getFilterData:()=>g.current.getDates()})),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(I.Z,{children:[(0,a.jsxs)(c.ZP,{container:!0,direction:"column",spacing:2,children:[(0,a.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsx)(f,{ref:m,inputNumberText:"Inflation %",buttonText:"Add",onSubmit:b,title:"Add new inflation data"})}),(0,a.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,a.jsx)(T,{ref:g,onSubmit:e.onFilter})}),x?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(c.ZP,{item:!0,xs:12,sm:6,children:[(0,a.jsx)("h2",{children:"Results"}),(0,a.jsx)(y,{headers:d.headers,rows:d.rows,onEdit:v,onRemove:R})]})}):null]}),(0,a.jsxs)(S.Z,{open:n,onClose:()=>i(!1),children:[(0,a.jsx)(C.Z,{children:"Update inflation"}),(0,a.jsx)(w.Z,{children:(0,a.jsx)(N,{ref:j,inflation:o,onUpdate:F,onCancel:D})})]}),(0,a.jsx)(P,{open:r,setOpen:s,onYes:O,onNo:k,text:"Are you sure you want to delete this record?"})]})})});R.defaultProps={title:"Data",onFilter:null,onAdd:null,onUpdate:null,onRemove:null},R.propTypes={title:r().string,onFilter:r().func,onAdd:r().func,onUpdate:r().func,onRemove:r().func};var O=n(9085);let k=e=>{let t=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let n=t.current.getContext("2d");new O.ZP(n,{type:"bar",data:{labels:e.labels,datasets:[{label:e.title,data:e.data,backgroundColor:e.backgroundColor}]},options:{scales:{x:{title:{display:!0,text:e.xTitle,font:{size:e.xFontSize}}},y:{beginAtZero:!0,title:{display:!0,text:e.yTitle,font:{size:e.yFontSize}}}}}})},[]),(0,a.jsx)("canvas",{ref:t})};k.defaultProps={title:"Title",data:[],labels:[],backgroundColor:"rgba(75,192,192,1)",xTitle:"X axis",yTitle:"Y axis",xFontSize:20,yFontSize:20},k.propTypes={title:r().string,data:r().arrayOf(r().number),labels:r().arrayOf(r().string),backgroundColor:r().string,xTitle:r().string,xFontSize:r().number,yTitle:r().string,yFontSize:r().string};let A=e=>{var t;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(I.Z,{children:[(0,a.jsx)("h1",{children:e.title}),(0,a.jsx)(T,{}),null!=e.data?(t=e.data,(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(k,{data:t})})):null]})})};A.defaultProps={title:"Charts",onFilter:function(e,t){console.log("startDate: ",e),console.log("endDate: ",t)},data:null},A.propTypes={title:r().string,onFilter:r().func,data:r().any};let U=(0,l.forwardRef)((e,t)=>{let[n,i]=(0,l.useState)(0),r=(0,l.useRef)(null),u=(e,t)=>{i(t)};return(0,l.useImperativeHandle)(t,()=>({clearAddInputs(){r.current.clearAdd()},clearFilterInputs(){r.current.clearFilter()},setTableData(e){r.current.setTableData(e)},getFilterData:()=>r.current.getFilterData()})),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.Z,{value:n,onChange:u,"aria-label":"simple tabs example",children:[(0,a.jsx)(o.Z,{label:"Data"}),(0,a.jsx)(o.Z,{label:"Charts"})]}),0===n&&(0,a.jsx)(R,{ref:r,onAdd:e.onCreateInflation,onFilter:e.onFilterDataSection,onUpdate:e.onUpdateInflation,onRemove:e.onDeleteInflation}),1===n&&(0,a.jsx)(A,{onFilter:e.onFilterChartSection,data:e.chartSectionData})]})});U.defaultProps={title:"Data",onFilterDataSection:null,onCreateInflation:null,onUpdateInflation:null,onDeleteInflation:null,chartSectionData:null,onFilterChartSection:null,onAddChartSection:null},U.propTypes={title:r().string,onFilterDataSection:r().func,onCreateInflation:r().func,onUpdateInflation:r().func,onDeleteInflation:r().func,onFilterChartSection:r().func,onAddChartSection:r().func,chartsData:r().any};var z=n(6154),V=n(381),E=n.n(V);let L="https://localhost:7173";function M(e){var t,n;if(null==e||null===(t=e.data)||void 0===t||!t.message)return{message:{id:-2,message:"Communication with server failed"},inflationList:[]};if(Array.isArray(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.inflationList)){let t=e.data.inflationList.map(e=>({id:e.id,date:E()(e.date).toDate(),value:e.value})),n={message:e.data.message,inflationList:t};return n}{let t={message:e.data.message,inflationList:[]};return t}}async function W(e){let t=await z.Z.post(L+"/Inflation/create",e);return M(t)}async function Y(e){console.log("readInflation");let t=await z.Z.post(L+"/Inflation/read",e);return M(t)}async function H(e){let t=await z.Z.put(L+"/Inflation/update",e);return M(t)}async function _(e){console.log("Request postInflation");let t=await z.Z.delete(L+"/Inflation/delete/",{data:e});return M(t)}let q=()=>{let e=(0,l.useRef)(null),[t,n]=(0,l.useState)(!1),i=async()=>{let t=await Y({startDate:null,endDate:null,inflation:null});e.current.setTableData(t.inflationList)},r=async t=>{let n={inflation:{id:0,date:t.date,value:t.value},startDate:null,endDate:null},a=await W(n);1===a.message.id&&(e.current.clearAddInputs(),await s())},s=async()=>{console.log("refreshData");let t=e.current.getFilterData();console.log("dates: ",t),await o(t.date1,t.date2)},o=async(t,n)=>{let a=await Y({startDate:t,endDate:n,inflation:null});e.current.setTableData(a.inflationList)},u=async t=>{console.log("deleteInflation"),console.log("inflation: ",t);let n=await _({inflation:t,startDate:null,endDate:null});1===n.message.id&&(e.current.clearAddInputs(),await s())},d=async t=>{let n=await H({inflation:t,startDate:null,endDate:null});1===n.message.id&&(e.current.clearAddInputs(),await s())};return(0,l.useEffect)(()=>{!1==t&&(i(),n(!0))}),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(U,{ref:e,onCreateInflation:r,onFilterDataSection:o,onDeleteInflation:u,onUpdateInflation:d})})};var $=q}}]);
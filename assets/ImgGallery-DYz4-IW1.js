import{a7 as pe,a8 as de,r as y,C as ge,a9 as ue,aa as re,l as x,j as c,t as v,v as D,i as T,ab as ye,ac as me,N as fe,h as V,s as _,P as J,q as Z,ad as he,W as xe,n as be,u as B,ae as je,B as q,L as Ce,m as ae,T as O}from"./index-cI7BfNBm.js";import{B as Se}from"./Button-BRqSSQea.js";import{g as _e,b as oe,a as ne,u as ke}from"./useThemeProps-OmplaZV8.js";const ie=pe();function ve(e,t,s,r,a){const[o,n]=y.useState(()=>a&&s?s(e).matches:r?r(e).matches:t);return ge(()=>{if(!s)return;const i=s(e),l=()=>{n(i.matches)};return l(),i.addEventListener("change",l),()=>{i.removeEventListener("change",l)}},[e,s]),o}const we={...ue},le=we.useSyncExternalStore;function $e(e,t,s,r,a){const o=y.useCallback(()=>t,[t]),n=y.useMemo(()=>{if(a&&s)return()=>s(e).matches;if(r!==null){const{matches:g}=r(e);return()=>g}return o},[o,e,r,a,s]),[i,l]=y.useMemo(()=>{if(s===null)return[o,()=>()=>{}];const g=s(e);return[()=>g.matches,d=>(g.addEventListener("change",d),()=>{g.removeEventListener("change",d)})]},[o,s,e]);return le(l,i,n)}function Me(e,t={}){const s=de(),r=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:a=!1,matchMedia:o=r?window.matchMedia:null,ssrMatchMedia:n=null,noSsr:i=!1}=_e({name:"MuiUseMediaQuery",props:t,theme:s});let l=typeof e=="function"?e(s):e;return l=l.replace(/^@media( ?)/m,""),(le!==void 0?$e:ve)(l,a,o,n,i)}const We=re(),Re=ie("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[`maxWidth${x(String(s.maxWidth))}`],s.fixed&&t.fixed,s.disableGutters&&t.disableGutters]}}),Ge=e=>oe({props:e,name:"MuiContainer",defaultTheme:We}),Pe=(e,t)=>{const s=l=>T(t,l),{classes:r,fixed:a,disableGutters:o,maxWidth:n}=e,i={root:["root",n&&`maxWidth${x(String(n))}`,a&&"fixed",o&&"disableGutters"]};return D(i,s,r)};function Ne(e={}){const{createStyledComponent:t=Re,useThemeProps:s=Ge,componentName:r="MuiContainer"}=e,a=t(({theme:n,ownerState:i})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!i.disableGutters&&{paddingLeft:n.spacing(2),paddingRight:n.spacing(2),[n.breakpoints.up("sm")]:{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}}}),({theme:n,ownerState:i})=>i.fixed&&Object.keys(n.breakpoints.values).reduce((l,p)=>{const g=p,d=n.breakpoints.values[g];return d!==0&&(l[n.breakpoints.up(g)]={maxWidth:`${d}${n.breakpoints.unit}`}),l},{}),({theme:n,ownerState:i})=>({...i.maxWidth==="xs"&&{[n.breakpoints.up("xs")]:{maxWidth:Math.max(n.breakpoints.values.xs,444)}},...i.maxWidth&&i.maxWidth!=="xs"&&{[n.breakpoints.up(i.maxWidth)]:{maxWidth:`${n.breakpoints.values[i.maxWidth]}${n.breakpoints.unit}`}}}));return y.forwardRef(function(i,l){const p=s(i),{className:g,component:d="div",disableGutters:m=!1,fixed:u=!1,maxWidth:f="lg",classes:w,...b}=p,j={...p,component:d,disableGutters:m,fixed:u,maxWidth:f},k=Pe(j,r);return c.jsx(a,{as:d,ownerState:j,className:v(k.root,g),ref:l,...b})})}const De=(e,t)=>e.filter(s=>t.includes(s)),W=(e,t,s)=>{const r=e.keys[0];Array.isArray(t)?t.forEach((a,o)=>{s((n,i)=>{o<=e.keys.length-1&&(o===0?Object.assign(n,i):n[e.up(e.keys[o])]=i)},a)}):t&&typeof t=="object"?(Object.keys(t).length>e.keys.length?e.keys:De(e.keys,Object.keys(t))).forEach(o=>{if(e.keys.includes(o)){const n=t[o];n!==void 0&&s((i,l)=>{r===o?Object.assign(i,l):i[e.up(o)]=l},n)}}):(typeof t=="number"||typeof t=="string")&&s((a,o)=>{Object.assign(a,o)},t)};function z(e){return`--Grid-${e}Spacing`}function A(e){return`--Grid-parent-${e}Spacing`}const te="--Grid-columns",M="--Grid-parent-columns",Te=({theme:e,ownerState:t})=>{const s={};return W(e.breakpoints,t.size,(r,a)=>{let o={};a==="grow"&&(o={flexBasis:0,flexGrow:1,maxWidth:"100%"}),a==="auto"&&(o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof a=="number"&&(o={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${a} / var(${M}) - (var(${M}) - ${a}) * (var(${A("column")}) / var(${M})))`}),r(s,o)}),s},Be=({theme:e,ownerState:t})=>{const s={};return W(e.breakpoints,t.offset,(r,a)=>{let o={};a==="auto"&&(o={marginLeft:"auto"}),typeof a=="number"&&(o={marginLeft:a===0?"0px":`calc(100% * ${a} / var(${M}) + var(${A("column")}) * ${a} / var(${M}))`}),r(s,o)}),s},Ee=({theme:e,ownerState:t})=>{if(!t.container)return{};const s={[te]:12};return W(e.breakpoints,t.columns,(r,a)=>{const o=a??12;r(s,{[te]:o,"> *":{[M]:o}})}),s},Le=({theme:e,ownerState:t})=>{if(!t.container)return{};const s={};return W(e.breakpoints,t.rowSpacing,(r,a)=>{var n;const o=typeof a=="string"?a:(n=e.spacing)==null?void 0:n.call(e,a);r(s,{[z("row")]:o,"> *":{[A("row")]:o}})}),s},Ie=({theme:e,ownerState:t})=>{if(!t.container)return{};const s={};return W(e.breakpoints,t.columnSpacing,(r,a)=>{var n;const o=typeof a=="string"?a:(n=e.spacing)==null?void 0:n.call(e,a);r(s,{[z("column")]:o,"> *":{[A("column")]:o}})}),s},Oe=({theme:e,ownerState:t})=>{if(!t.container)return{};const s={};return W(e.breakpoints,t.direction,(r,a)=>{r(s,{flexDirection:a})}),s},ze=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},gap:`var(${z("row")}) var(${z("column")})`}}),Ae=e=>{const t=[];return Object.entries(e).forEach(([s,r])=>{r!==!1&&r!==void 0&&t.push(`grid-${s}-${String(r)}`)}),t},Ue=(e,t="xs")=>{function s(r){return r===void 0?!1:typeof r=="string"&&!Number.isNaN(Number(r))||typeof r=="number"&&r>0}if(s(e))return[`spacing-${t}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const r=[];return Object.entries(e).forEach(([a,o])=>{s(o)&&r.push(`spacing-${a}-${String(o)}`)}),r}return[]},Fe=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([t,s])=>`direction-${t}-${s}`):[`direction-xs-${String(e)}`],Qe=re(),He=ie("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function Xe(e){return oe({props:e,name:"MuiGrid",defaultTheme:Qe})}function Ye(e={}){const{createStyledComponent:t=He,useThemeProps:s=Xe,componentName:r="MuiGrid"}=e,a=(l,p)=>{const{container:g,direction:d,spacing:m,wrap:u,size:f}=l,w={root:["root",g&&"container",u!=="wrap"&&`wrap-xs-${String(u)}`,...Fe(d),...Ae(f),...g?Ue(m,p.breakpoints.keys[0]):[]]};return D(w,b=>T(r,b),{})};function o(l,p,g=()=>!0){const d={};return l===null||(Array.isArray(l)?l.forEach((m,u)=>{m!==null&&g(m)&&p.keys[u]&&(d[p.keys[u]]=m)}):typeof l=="object"?Object.keys(l).forEach(m=>{const u=l[m];u!=null&&g(u)&&(d[m]=u)}):d[p.keys[0]]=l),d}const n=t(Ee,Ie,Le,Te,Oe,ze,Be),i=y.forwardRef(function(p,g){const d=ye(),m=s(p),u=me(m),{className:f,children:w,columns:b=12,container:j=!1,component:k="div",direction:E="row",wrap:U="wrap",size:L={},offset:F={},spacing:R=0,rowSpacing:I=R,columnSpacing:Q=R,unstable_level:C=0,...$}=u,G=o(L,d.breakpoints,S=>S!==!1),P=o(F,d.breakpoints),H=p.columns??(C?void 0:b),X=p.spacing??(C?void 0:R),N=p.rowSpacing??p.spacing??(C?void 0:I),Y=p.columnSpacing??p.spacing??(C?void 0:Q),h={...u,level:C,columns:H,container:j,direction:E,wrap:U,spacing:X,rowSpacing:N,columnSpacing:Y,size:G,offset:P},ce=a(h,d);return c.jsx(n,{ref:g,as:k,ownerState:h,className:v(ce.root,f),...$,children:y.Children.map(w,S=>{var ee;return y.isValidElement(S)&&fe(S,["Grid"])&&j&&S.props.container?y.cloneElement(S,{unstable_level:((ee=S.props)==null?void 0:ee.unstable_level)??C+1}):S})})});return i.muiName="Grid",i}function Ke(e){return T("MuiCard",e)}V("MuiCard",["root"]);const Ve=e=>{const{classes:t}=e;return D({root:["root"]},Ke,t)},Je=_(J,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})({overflow:"hidden"}),Ze=y.forwardRef(function(t,s){const r=Z({props:t,name:"MuiCard"}),{className:a,raised:o=!1,...n}=r,i={...r,raised:o},l=Ve(i);return c.jsx(Je,{className:v(l.root,a),elevation:o?8:void 0,ref:s,ownerState:i,...n})});function qe(e){return T("MuiCardMedia",e)}V("MuiCardMedia",["root","media","img"]);const et=e=>{const{classes:t,isMediaComponent:s,isImageComponent:r}=e;return D({root:["root",s&&"media",r&&"img"]},qe,t)},tt=_("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e,{isMediaComponent:r,isImageComponent:a}=s;return[t.root,r&&t.media,a&&t.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),st=["video","audio","picture","iframe","img"],rt=["picture","img"],at=y.forwardRef(function(t,s){const r=Z({props:t,name:"MuiCardMedia"}),{children:a,className:o,component:n="div",image:i,src:l,style:p,...g}=r,d=st.includes(n),m=!d&&i?{backgroundImage:`url("${i}")`,...p}:p,u={...r,component:n,isMediaComponent:d,isImageComponent:rt.includes(n)},f=et(u);return c.jsx(tt,{className:v(f.root,o),as:n,role:!d&&i?"img":void 0,ref:s,style:m,ownerState:u,src:d?i||l:void 0,...g,children:a})}),ot=Ne({createStyledComponent:_("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[`maxWidth${x(String(s.maxWidth))}`],s.fixed&&t.fixed,s.disableGutters&&t.disableGutters]}}),useThemeProps:e=>ne({props:e,name:"MuiContainer"})});function nt(e){return T("MuiDialog",e)}const K=V("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),it=y.createContext({}),lt=_(he,{name:"MuiDialog",slot:"Backdrop",overrides:(e,t)=>t.backdrop})({zIndex:-1}),ct=e=>{const{classes:t,scroll:s,maxWidth:r,fullWidth:a,fullScreen:o}=e,n={root:["root"],container:["container",`scroll${x(s)}`],paper:["paper",`paperScroll${x(s)}`,`paperWidth${x(String(r))}`,a&&"paperFullWidth",o&&"paperFullScreen"]};return D(n,nt,t)},pt=_(xe,{name:"MuiDialog",slot:"Root",overridesResolver:(e,t)=>t.root})({"@media print":{position:"absolute !important"}}),dt=_("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.container,t[`scroll${x(s.scroll)}`]]}})({height:"100%","@media print":{height:"auto"},outline:0,variants:[{props:{scroll:"paper"},style:{display:"flex",justifyContent:"center",alignItems:"center"}},{props:{scroll:"body"},style:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}}]}),gt=_(J,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.paper,t[`scrollPaper${x(s.scroll)}`],t[`paperWidth${x(String(s.maxWidth))}`],s.fullWidth&&t.paperFullWidth,s.fullScreen&&t.paperFullScreen]}})(be(({theme:e})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},variants:[{props:{scroll:"paper"},style:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"}},{props:{scroll:"body"},style:{display:"inline-block",verticalAlign:"middle",textAlign:"initial"}},{props:({ownerState:t})=>!t.maxWidth,style:{maxWidth:"calc(100% - 64px)"}},{props:{maxWidth:"xs"},style:{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${K.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}}},...Object.keys(e.breakpoints.values).filter(t=>t!=="xs").map(t=>({props:{maxWidth:t},style:{maxWidth:`${e.breakpoints.values[t]}${e.breakpoints.unit}`,[`&.${K.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[t]+32*2)]:{maxWidth:"calc(100% - 64px)"}}}})),{props:({ownerState:t})=>t.fullWidth,style:{width:"calc(100% - 64px)"}},{props:({ownerState:t})=>t.fullScreen,style:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${K.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}}]}))),ut=y.forwardRef(function(t,s){const r=Z({props:t,name:"MuiDialog"}),a=B(),o={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{"aria-describedby":n,"aria-labelledby":i,BackdropComponent:l,BackdropProps:p,children:g,className:d,disableEscapeKeyDown:m=!1,fullScreen:u=!1,fullWidth:f=!1,maxWidth:w="sm",onBackdropClick:b,onClick:j,onClose:k,open:E,PaperComponent:U=J,PaperProps:L={},scroll:F="paper",TransitionComponent:R=je,transitionDuration:I=o,TransitionProps:Q,...C}=r,$={...r,disableEscapeKeyDown:m,fullScreen:u,fullWidth:f,maxWidth:w,scroll:F},G=ct($),P=y.useRef(),H=h=>{P.current=h.target===h.currentTarget},X=h=>{j&&j(h),P.current&&(P.current=null,b&&b(h),k&&k(h,"backdropClick"))},N=ke(i),Y=y.useMemo(()=>({titleId:N}),[N]);return c.jsx(pt,{className:v(G.root,d),closeAfterTransition:!0,components:{Backdrop:lt},componentsProps:{backdrop:{transitionDuration:I,as:l,...p}},disableEscapeKeyDown:m,onClose:k,open:E,ref:s,onClick:X,ownerState:$,...C,children:c.jsx(R,{appear:!0,in:E,timeout:I,role:"presentation",...Q,children:c.jsx(dt,{className:v(G.container),onMouseDown:H,ownerState:$,children:c.jsx(gt,{as:U,elevation:24,role:"dialog","aria-describedby":n,"aria-labelledby":N,...L,className:v(G.paper,L.className),ownerState:$,children:c.jsx(it.Provider,{value:Y,children:g})})})})})}),yt=Ye({createStyledComponent:_("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,t)=>t.root}),componentName:"MuiGrid2",useThemeProps:e=>ne({props:e,name:"MuiGrid2"})}),mt=({categories:e,selectedCategory:t,setSelectedCategory:s})=>{const r=B();return c.jsx(q,{sx:{display:"flex",justifyContent:"center",flexWrap:"wrap",mb:4,gap:1},children:e.map(a=>c.jsx(Se,{onClick:()=>s(a),variant:t===a?"contained":"outlined",sx:{mx:1,minWidth:180,backgroundColor:t===a?r.palette.accent.main:"transparent",color:t===a?r.palette.accent.contrastText:r.palette.text.primary,borderColor:t===a?r.palette.accent.main:r.palette.divider,"&:hover":{backgroundColor:t===a?r.palette.highlight.main:r.palette.action.hover,borderColor:r.palette.accent.main}},children:a},a))})},ft=({image:e,onClick:t})=>{const s=B();return c.jsx(Ce,{children:c.jsxs(Ze,{onClick:t,component:ae.div,whileHover:{scale:1.05},sx:{cursor:"pointer",boxShadow:3,backgroundColor:s.palette.background.paper,transition:"transform 0.3s",borderRadius:s.shape.borderRadius,display:"flex",flexDirection:"column",height:"100%",width:320},children:[c.jsx(at,{component:"img",image:e.src,alt:e.title,sx:{height:{xs:"200px",sm:"250px",md:"300px"},width:"100%",objectFit:"cover",borderTopLeftRadius:s.shape.borderRadius,borderTopRightRadius:s.shape.borderRadius}}),c.jsx(q,{sx:{p:2,flexGrow:1,display:"flex",alignItems:"center",justifyContent:"center"},children:c.jsx(O,{variant:"body2",color:"text.secondary",align:"center",children:e.title})})]})})},ht=({selectedImage:e,handleClose:t})=>{const s=B(),r=Me(s.breakpoints.down("sm"));return c.jsx(ut,{open:!!e,onClose:t,maxWidth:!1,fullWidth:!0,fullScreen:r,PaperProps:{sx:{backgroundColor:s.palette.background.default,boxShadow:"none",overflow:"hidden",borderRadius:0,height:"100vh",width:"100vw"}},children:c.jsx(ae.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:t,style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:c.jsx("img",{src:e,alt:"Selected",style:{maxWidth:"100%",maxHeight:"90vh",display:"block",margin:"auto",borderRadius:0,boxShadow:s.shadows[5]}})})})},se=[{src:"./assets/gallery/container_1.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_2.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_3.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_4.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_5.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_6.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_7.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_8.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_9.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_10.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_11.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_12.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_13.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_14.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_15.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_16.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_17.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_18.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_19.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_20.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_21.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_22.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_23.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/container_24.jpg",title:"Контейнери",category:"Контейнери"},{src:"./assets/gallery/house_1.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_2.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_3.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_4.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_5.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_6.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_7.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_8.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_9.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_10.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_11.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_12.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_13.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_14.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_15.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_16.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_17.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_18.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_19.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_20.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_21.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_22.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_23.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_24.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_25.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_26.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_27.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/house_28.jpg",title:"Сглобяема къща",category:"Сглобяеми къщи"},{src:"./assets/gallery/steel_house_1.jpg",title:"Стоманена къща",category:"Стоманени къщи"},{src:"./assets/gallery/steel_house_2.jpg",title:"Стоманена къща",category:"Стоманени къщи"},{src:"./assets/gallery/steel_house_3.jpg",title:"Стоманена къща",category:"Стоманени къщи"},{src:"./assets/gallery/steel_house_4.jpg",title:"Стоманена къща",category:"Стоманени къщи"},{src:"./assets/gallery/steel_house_5.jpg",title:"Стоманена къща",category:"Стоманени къщи"},{src:"./assets/gallery/steel_house_6.jpg",title:"Стоманена къща",category:"Стоманени къщи"},{src:"./assets/gallery/steel_house_7.jpg",title:"Стоманена къща",category:"Стоманени къщи"},{src:"./assets/gallery/steel_house_7.jpg",title:"Стоманена къща",category:"Стоманени къщи"},{src:"./assets/gallery/steel_house_8.jpg",title:"Стоманена къща",category:"Стоманени къщи"},{src:"./assets/gallery/steel_house_9.jpg",title:"Стоманена къща",category:"Стоманени къщи"},{src:"./assets/gallery/steel_house_10.jpg",title:"Стоманена къща",category:"Стоманени къщи"}],xt=["Всички","Контейнери","Сглобяеми къщи","Стоманени къщи"],St=()=>{const[e,t]=y.useState("Всички"),[s,r]=y.useState(null),[a,o]=y.useState(null),n=B(),i=y.useMemo(()=>e==="Всички"?se:se.filter(l=>l.category===e),[e]);return c.jsxs(ot,{maxWidth:!1,sx:{my:4,bgcolor:n.palette.background.paper,borderRadius:2,padding:2,width:"100%"},children:[c.jsx(O,{variant:"h4",align:"center",gutterBottom:!0,color:n.palette.text.primary,children:"Галерия"}),c.jsx(mt,{categories:xt,selectedCategory:e,setSelectedCategory:t}),c.jsx(yt,{container:!0,spacing:3,justifyContent:"center",children:a?c.jsx(q,{sx:{my:4,color:"red"},children:c.jsxs(O,{variant:"h6",children:["Error loading images: ",a.message]})}):i.length===0?c.jsx(O,{variant:"h6",sx:{my:4},children:"No images found."}):i.map((l,p)=>c.jsx(ft,{image:l,onClick:()=>r(l.src)},p))}),c.jsx(ht,{selectedImage:s,handleClose:()=>r(null)})]})};export{St as default};

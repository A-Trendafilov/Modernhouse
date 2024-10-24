import{i as L,h as T,r as c,s as b,k as m,K as V,l as r,n as j,af as F,q as U,j as g,t as $,v as G,p as D,o as p}from"./index-cI7BfNBm.js";function H(a){return L("MuiButton",a)}const e=T("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),q=c.createContext({}),A=c.createContext(void 0),K=a=>{const{color:o,disableElevation:t,fullWidth:n,size:i,variant:s,classes:l}=a,u={root:["root",s,`${s}${r(o)}`,`size${r(i)}`,`${s}Size${r(i)}`,`color${r(o)}`,t&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${r(i)}`],endIcon:["icon","endIcon",`iconSize${r(i)}`]},x=G(u,H,l);return{...l,...x}},I=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],J=b(m,{shouldForwardProp:a=>V(a)||a==="classes",name:"MuiButton",slot:"Root",overridesResolver:(a,o)=>{const{ownerState:t}=a;return[o.root,o[t.variant],o[`${t.variant}${r(t.color)}`],o[`size${r(t.size)}`],o[`${t.variant}Size${r(t.size)}`],t.color==="inherit"&&o.colorInherit,t.disableElevation&&o.disableElevation,t.fullWidth&&o.fullWidth]}})(j(({theme:a})=>{const o=a.palette.mode==="light"?a.palette.grey[300]:a.palette.grey[800],t=a.palette.mode==="light"?a.palette.grey.A100:a.palette.grey[700];return{...a.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(a.vars||a).shape.borderRadius,transition:a.transitions.create(["background-color","box-shadow","border-color","color"],{duration:a.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${e.disabled}`]:{color:(a.vars||a).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(a.vars||a).shadows[2],"&:hover":{boxShadow:(a.vars||a).shadows[4],"@media (hover: none)":{boxShadow:(a.vars||a).shadows[2]}},"&:active":{boxShadow:(a.vars||a).shadows[8]},[`&.${e.focusVisible}`]:{boxShadow:(a.vars||a).shadows[6]},[`&.${e.disabled}`]:{color:(a.vars||a).palette.action.disabled,boxShadow:(a.vars||a).shadows[0],backgroundColor:(a.vars||a).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${e.disabled}`]:{border:`1px solid ${(a.vars||a).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(a.palette).filter(D()).map(([n])=>({props:{color:n},style:{"--variant-textColor":(a.vars||a).palette[n].main,"--variant-outlinedColor":(a.vars||a).palette[n].main,"--variant-outlinedBorder":a.vars?`rgba(${a.vars.palette[n].mainChannel} / 0.5)`:p(a.palette[n].main,.5),"--variant-containedColor":(a.vars||a).palette[n].contrastText,"--variant-containedBg":(a.vars||a).palette[n].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(a.vars||a).palette[n].dark,"--variant-textBg":a.vars?`rgba(${a.vars.palette[n].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:p(a.palette[n].main,a.palette.action.hoverOpacity),"--variant-outlinedBorder":(a.vars||a).palette[n].main,"--variant-outlinedBg":a.vars?`rgba(${a.vars.palette[n].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:p(a.palette[n].main,a.palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":a.vars?a.vars.palette.Button.inheritContainedBg:o,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":a.vars?a.vars.palette.Button.inheritContainedHoverBg:t,"--variant-textBg":a.vars?`rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})`:p(a.palette.text.primary,a.palette.action.hoverOpacity),"--variant-outlinedBg":a.vars?`rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})`:p(a.palette.text.primary,a.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:a.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:a.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:a.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:a.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:a.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:a.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${e.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${e.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}}]}})),Q=b("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(a,o)=>{const{ownerState:t}=a;return[o.startIcon,o[`iconSize${r(t.size)}`]]}})({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},...I]}),X=b("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(a,o)=>{const{ownerState:t}=a;return[o.endIcon,o[`iconSize${r(t.size)}`]]}})({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},...I]}),Z=c.forwardRef(function(o,t){const n=c.useContext(q),i=c.useContext(A),s=F(n,o),l=U({props:s,name:"MuiButton"}),{children:u,color:x="primary",component:y="button",className:w,disabled:S=!1,disableElevation:R=!1,disableFocusRipple:z=!1,endIcon:f,focusVisibleClassName:h,fullWidth:E=!1,size:P="medium",startIcon:C,type:B,variant:W="text",...k}=l,v={...l,color:x,component:y,disabled:S,disableElevation:R,disableFocusRipple:z,fullWidth:E,size:P,type:B,variant:W},d=K(v),M=C&&g.jsx(Q,{className:d.startIcon,ownerState:v,children:C}),N=f&&g.jsx(X,{className:d.endIcon,ownerState:v,children:f}),O=i||"";return g.jsxs(J,{ownerState:v,className:$(n.className,d.root,w,O),component:y,disabled:S,focusRipple:!z,focusVisibleClassName:$(d.focusVisible,h),ref:t,type:B,...k,classes:d,children:[M,u,N]})});export{Z as B};

import{af as c,ab as f,r as a,a9 as m,ag as p,ah as l}from"./index-cI7BfNBm.js";function d(t){const{theme:e,name:s,props:n}=t;return!e||!e.components||!e.components[s]||!e.components[s].defaultProps?n:c(e.components[s].defaultProps,n)}function i({props:t,name:e,defaultTheme:s,themeId:n}){let o=f(s);return n&&(o=o[n]||o),d({theme:o,name:e,props:t})}let u=0;function I(t){const[e,s]=a.useState(t),n=t||e;return a.useEffect(()=>{e==null&&(u+=1,s(`mui-${u}`))},[e]),n}const h={...m},r=h.useId;function T(t){if(r!==void 0){const e=r();return t??e}return I(t)}function b({props:t,name:e}){return i({props:t,name:e,defaultTheme:p,themeId:l})}export{b as a,i as b,d as g,T as u};

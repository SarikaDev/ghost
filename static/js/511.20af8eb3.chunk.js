"use strict";(self.webpackChunkcnam=self.webpackChunkcnam||[]).push([[511],{3511:function(e,t,r){r.r(t),r.d(t,{default:function(){return G}});var o=r(2791),n=r(3459),a=r(6482);var i=r(3366),l=r(7462),c=r(8182),s=r(4419),u=r(2065),v=r(6934),p=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},d=r(1402),m=r(5878),h=r(7225);function f(e){return(0,h.Z)("MuiPaper",e)}(0,m.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var g=r(184),y=["className","component","elevation","square","variant"],Z=(0,v.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],!r.square&&t.rounded,"elevation"===r.variant&&t["elevation".concat(r.elevation)]]}})((function(e){var t,r=e.theme,o=e.ownerState;return(0,l.Z)({backgroundColor:(r.vars||r).palette.background.paper,color:(r.vars||r).palette.text.primary,transition:r.transitions.create("box-shadow")},!o.square&&{borderRadius:r.shape.borderRadius},"outlined"===o.variant&&{border:"1px solid ".concat((r.vars||r).palette.divider)},"elevation"===o.variant&&(0,l.Z)({boxShadow:(r.vars||r).shadows[o.elevation]},!r.vars&&"dark"===r.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,u.Fq)("#fff",p(o.elevation)),", ").concat((0,u.Fq)("#fff",p(o.elevation)),")")},r.vars&&{backgroundImage:null==(t=r.vars.overlays)?void 0:t[o.elevation]}))})),b=o.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiPaper"}),o=r.className,n=r.component,a=void 0===n?"div":n,u=r.elevation,v=void 0===u?1:u,p=r.square,m=void 0!==p&&p,h=r.variant,b=void 0===h?"elevation":h,x=(0,i.Z)(r,y),k=(0,l.Z)({},r,{component:a,elevation:v,square:m,variant:b}),w=function(e){var t=e.square,r=e.elevation,o=e.variant,n=e.classes,a={root:["root",o,!t&&"rounded","elevation"===o&&"elevation".concat(r)]};return(0,s.Z)(a,f,n)}(k);return(0,g.jsx)(Z,(0,l.Z)({as:a,ownerState:k,className:(0,c.Z)(w.root,o),ref:t},x))})),x=r(4942),k=r(2466),w=(0,r(7091).ZP)(),P=r(7078),S=r(3433),M=r(7416),B=["sx"],R=function(e){var t,r,o={systemProps:{},otherProps:{}},n=null!=(t=null==e||null==(r=e.theme)?void 0:r.unstable_sxConfig)?t:M.Z;return Object.keys(e).forEach((function(t){n[t]?o.systemProps[t]=e[t]:o.otherProps[t]=e[t]})),o};function j(e){var t,r=e.sx,o=(0,i.Z)(e,B),n=R(o),a=n.systemProps,c=n.otherProps;return t=Array.isArray(r)?[a].concat((0,S.Z)(r)):"function"===typeof r?function(){var e=r.apply(void 0,arguments);return(0,k.P)(e)?(0,l.Z)({},a,e):a}:(0,l.Z)({},a,r),(0,l.Z)({},c,{sx:t})}var N=r(5080),T=r(1184),W=r(5682),C=["component","direction","spacing","divider","children","className"],q=(0,N.Z)(),A=w("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}});function E(e){return(0,P.Z)({props:e,name:"MuiStack",defaultTheme:q})}function F(e,t){var r=o.Children.toArray(e).filter(Boolean);return r.reduce((function(e,n,a){return e.push(n),a<r.length-1&&e.push(o.cloneElement(t,{key:"separator-".concat(a)})),e}),[])}var O=function(e){var t=e.ownerState,r=e.theme,o=(0,l.Z)({display:"flex",flexDirection:"column"},(0,T.k9)({theme:r},(0,T.P$)({values:t.direction,breakpoints:r.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var n=(0,W.hB)(r),a=Object.keys(r.breakpoints.values).reduce((function(e,r){return("object"===typeof t.spacing&&null!=t.spacing[r]||"object"===typeof t.direction&&null!=t.direction[r])&&(e[r]=!0),e}),{}),i=(0,T.P$)({values:t.direction,base:a}),c=(0,T.P$)({values:t.spacing,base:a});"object"===typeof i&&Object.keys(i).forEach((function(e,t,r){if(!i[e]){var o=t>0?i[r[t-1]]:"column";i[e]=o}}));o=(0,k.Z)(o,(0,T.k9)({theme:r},c,(function(e,r){return{"& > :not(style) + :not(style)":(0,x.Z)({margin:0},"margin".concat((o=r?i[r]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),(0,W.NA)(n,e))};var o})))}return o=(0,T.dt)(r.breakpoints,o)};var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,r=void 0===t?A:t,n=e.useThemeProps,a=void 0===n?E:n,u=e.componentName,v=void 0===u?"MuiStack":u,p=r(O),d=o.forwardRef((function(e,t){var r=j(a(e)),o=r.component,n=void 0===o?"div":o,u=r.direction,d=void 0===u?"column":u,m=r.spacing,f=void 0===m?0:m,y=r.divider,Z=r.children,b=r.className,x=(0,i.Z)(r,C),k={direction:d,spacing:f},w=(0,s.Z)({root:["root"]},(function(e){return(0,h.Z)(v,e)}),{});return(0,g.jsx)(p,(0,l.Z)({as:n,ownerState:k,ref:t,className:(0,c.Z)(w.root,b)},x,{children:y?F(Z,y):Z}))}));return d}({createStyledComponent:(0,v.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}}),useThemeProps:function(e){return(0,d.Z)({props:e,name:"MuiStack"})}}),$=I,D=r(4036);function L(e){return(0,h.Z)("MuiTypography",e)}(0,m.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var H=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],J=(0,v.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t["align".concat((0,D.Z)(r.align))],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})((function(e){var t=e.theme,r=e.ownerState;return(0,l.Z)({margin:0},r.variant&&t.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})})),Y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},_={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},z=o.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiTypography"}),o=function(e){return _[e]||e}(r.color),n=j((0,l.Z)({},r,{color:o})),a=n.align,u=void 0===a?"inherit":a,v=n.className,p=n.component,m=n.gutterBottom,h=void 0!==m&&m,f=n.noWrap,y=void 0!==f&&f,Z=n.paragraph,b=void 0!==Z&&Z,x=n.variant,k=void 0===x?"body1":x,w=n.variantMapping,P=void 0===w?Y:w,S=(0,i.Z)(n,H),M=(0,l.Z)({},n,{align:u,color:o,className:v,component:p,gutterBottom:h,noWrap:y,paragraph:b,variant:k,variantMapping:P}),B=p||(b?"p":P[k]||Y[k])||"span",R=function(e){var t=e.align,r=e.gutterBottom,o=e.noWrap,n=e.paragraph,a=e.variant,i=e.classes,l={root:["root",a,"inherit"!==e.align&&"align".concat((0,D.Z)(t)),r&&"gutterBottom",o&&"noWrap",n&&"paragraph"]};return(0,s.Z)(l,L,i)}(M);return(0,g.jsx)(J,(0,l.Z)({as:B,ref:t,ownerState:M,className:(0,c.Z)(R.root,v)},S))})),G=function(){var e=(0,n.Z)(a.Z);return(0,g.jsx)(b,{elevation:5,marginY:2,sx:{borderBottom:"3px solid ".concat(e.palette.primary.main),borderTop:"3px solid ".concat(e.palette.primary.main)},children:(0,g.jsx)($,{justifyContent:"center",alignItems:"center",minHeight:"calc(100vh - 10px)",children:(0,g.jsxs)(z,{variant:"h5",component:"h2",color:function(e){return e.palette.primary.main},textTransform:"uppercase",fontWeight:600,letterSpacing:3,children:[(0,g.jsx)("span",{style:{color:"red"},children:" 404 Error "})," - Page Not Found"]})})})}}}]);
//# sourceMappingURL=511.20af8eb3.chunk.js.map
(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[7],{1031:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var c,o,i=n(9),r=n(10),j=n(0),a=n(4),l=n(2),s=n(6),b=n(19),d=n(127),O=n(42),x=n(68),u=n(388),p=n(30),h=n(457),g=n(118),f=n(27),y=n(53),v=n(115),m=n(842),T=n(176),k=n(237),E=n(203),F=n(259),I=n(1);!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(o||(o={}));var N=Object(s.e)(l.n)(c||(c=Object(r.a)(["\n  background-color: ",";\n  color: ",";\n  box-shadow: none;\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.text}));function S(){var e,t=Object(f.a)().account,n=Object(b.b)().t,c=Object(j.useState)(o.TOKEN1),r=Object(i.a)(c,2),s=r[0],S=r[1],C=Object(j.useState)(a.d),A=Object(i.a)(C,2),w=A[0],K=A[1],B=Object(j.useState)(null),q=Object(i.a)(B,2),L=q[0],X=q[1],D=Object(g.b)(null!==w&&void 0!==w?w:void 0,null!==L&&void 0!==L?L:void 0),J=Object(i.a)(D,2),M=J[0],P=J[1],Y=Object(y.g)();Object(j.useEffect)((function(){P&&Y(P)}),[P,Y]);var G=M===g.a.NOT_EXISTS||Boolean(M===g.a.EXISTS&&P&&a.e.equal(P.reserve0.raw,a.e.BigInt(0))&&a.e.equal(P.reserve1.raw,a.e.BigInt(0))),R=Object(v.d)(null!==t&&void 0!==t?t:void 0,null===P||void 0===P?void 0:P.liquidityToken),V=Boolean(R&&a.e.greaterThan(R.raw,a.e.BigInt(0))),W=Object(j.useCallback)((function(e){s===o.TOKEN0?K(e):X(e)}),[s]),_=Object(I.jsx)(d.b,{padding:"45px 10px",children:Object(I.jsx)(l.Fb,{textAlign:"center",color:"rgb(4, 187, 251)",children:n(t?"Select a token to find your liquidity.":"Connect to a wallet to find pools")})}),z=Object(l.Yb)(Object(I.jsx)(h.a,{onCurrencySelect:W,showCommonBases:!0,selectedCurrency:null!==(e=s===o.TOKEN0?L:w)&&void 0!==e?e:void 0}),!0,!0,"selectCurrencyModal"),H=Object(i.a)(z,1)[0];return Object(I.jsx)(F.a,{children:Object(I.jsxs)(E.a,{children:[Object(I.jsx)(E.b,{title:n("Import Pool"),subtitle:n(""),backTo:"/pool",noConfig:"false"}),Object(I.jsxs)(O.a,{style:{padding:"1rem"},gap:"md",children:[Object(I.jsxs)(N,{onClick:function(){H(),S(o.TOKEN0)},style:{display:"flex",justifyContent:"center"},children:[w?Object(I.jsxs)(p.d,{children:[Object(I.jsx)(x.a,{currency:w}),Object(I.jsx)(l.Fb,{ml:"8px",children:w.symbol})]}):Object(I.jsx)(l.Fb,{ml:"8px",children:n("Select a Token")}),Object(I.jsx)(l.B,{})]}),Object(I.jsx)(O.b,{children:Object(I.jsx)(l.a,{})}),Object(I.jsx)(N,{endIcon:Object(I.jsx)(l.B,{}),onClick:function(){H(),S(o.TOKEN1)},children:L?Object(I.jsxs)(p.d,{children:[Object(I.jsx)(x.a,{currency:L}),Object(I.jsx)(l.Fb,{ml:"8px",children:L.symbol})]}):Object(I.jsx)(l.Fb,{as:p.d,children:n("Select a Token")})}),V&&Object(I.jsxs)(O.b,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[Object(I.jsx)(l.Fb,{textAlign:"center",children:n("Pool Found!")}),Object(I.jsx)(m.a,{to:"/pool",children:Object(I.jsx)(l.Fb,{textAlign:"center",children:n("Manage this pool.")})})]}),w&&L?M===g.a.EXISTS?V&&P?Object(I.jsx)(u.a,{pair:P}):Object(I.jsx)(d.b,{padding:"45px 10px",children:Object(I.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(I.jsx)(l.Fb,{textAlign:"center",children:n("You don\u2019t have liquidity in this pool yet.")}),Object(I.jsx)(m.a,{to:"/add/".concat(Object(T.a)(w),"/").concat(Object(T.a)(L)),children:Object(I.jsx)(l.Fb,{textAlign:"center",children:n("Add Liquidity")})})]})}):G?Object(I.jsx)(d.b,{padding:"45px 10px",children:Object(I.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(I.jsx)(l.Fb,{textAlign:"center",children:n("No pool found.")}),Object(I.jsx)(m.a,{to:"/add/".concat(Object(T.a)(w),"/").concat(Object(T.a)(L)),children:n("Create pool.")})]})}):M===g.a.INVALID?Object(I.jsx)(d.b,{padding:"45px 10px",children:Object(I.jsx)(O.a,{gap:"sm",justify:"center",children:Object(I.jsx)(l.Fb,{textAlign:"center",fontWeight:500,children:n("Invalid pair.")})})}):M===g.a.LOADING?Object(I.jsx)(d.b,{padding:"45px 10px",children:Object(I.jsx)(O.a,{gap:"sm",justify:"center",children:Object(I.jsxs)(l.Fb,{textAlign:"center",children:[n("Loading"),Object(I.jsx)(k.a,{})]})})}):null:_]})]})})}},842:function(e,t,n){"use strict";var c,o=n(10),i=n(99),r=n(6),j=Object(r.e)(i.a)(c||(c=Object(o.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=j}}]);
//# sourceMappingURL=7.a03d2361.chunk.js.map
(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{CancelConfiguration:()=>M,CancelMethods:()=>d});const n=("undefined"!=typeof window?window:global).MathJax._.components.global,a=(n.GLOBAL,n.isObject,n.combineConfig,n.combineDefaults,n.combineWithMathJax),o=(n.MathJax,MathJax._.input.tex.Configuration),c=o.Configuration,i=(o.ConfigurationHandler,o.ParserConfiguration,MathJax._.input.tex.TexConstants.TexConstant),r=MathJax._.input.tex.TokenMap,l=(r.parseResult,r.AbstractTokenMap,r.RegExpMap,r.AbstractParseMap,r.CharacterMap,r.DelimiterMap,r.MacroMap,r.CommandMap),s=(r.EnvironmentMap,MathJax._.input.tex.ParseUtil.default),p=MathJax._.input.tex.enclose.EncloseConfiguration,u=p.ENCLOSE_OPTIONS;p.EncloseMethods,p.EncloseConfiguration;let d={Cancel:function(e,t,n){const a=e.GetBrackets(t,""),o=e.ParseArg(t),c=s.keyvalOptions(a,u);c.notation=n,e.Push(e.create("node","menclose",[o],c))},CancelTo:function(e,t){const n=e.GetBrackets(t,"");let a=e.ParseArg(t);const o=e.ParseArg(t),c=s.keyvalOptions(n,u);c.notation=[i.Notation.UPDIAGONALSTRIKE,i.Notation.UPDIAGONALARROW,i.Notation.NORTHEASTARROW].join(" "),a=e.create("node","mpadded",[a],{depth:"-.1em",height:"+.1em",voffset:".1em"}),e.Push(e.create("node","msup",[e.create("node","menclose",[o],c),a]))}};new l("cancel",{cancel:["Cancel",i.Notation.UPDIAGONALSTRIKE],bcancel:["Cancel",i.Notation.DOWNDIAGONALSTRIKE],xcancel:["Cancel",i.Notation.UPDIAGONALSTRIKE+" "+i.Notation.DOWNDIAGONALSTRIKE],cancelto:"CancelTo"},d);const M=c.create("cancel",{handler:{macro:["cancel"]}});MathJax.loader&&MathJax.loader.checkVersion("[tex]/cancel","4.0.0-beta.4","tex-extension"),a({_:{input:{tex:{cancel:{CancelConfiguration:t}}}}})})();
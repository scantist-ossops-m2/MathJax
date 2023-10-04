(()=>{"use strict";var t={d:(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{MhchemConfiguration:()=>g});const o=("undefined"!=typeof window?window:global).MathJax._.components.global,n=(o.GLOBAL,o.isObject,o.combineConfig,o.combineDefaults,o.combineWithMathJax),a=(o.MathJax,MathJax._.input.tex.Configuration),r=a.Configuration,i=(a.ConfigurationHandler,a.ParserConfiguration,MathJax._.input.tex.TokenMap),c=(i.parseResult,i.AbstractTokenMap,i.RegExpMap,i.AbstractParseMap,i.CharacterMap,i.DelimiterMap,i.MacroMap,i.CommandMap),p=(i.EnvironmentMap,MathJax._.input.tex.TexError.default),u=MathJax._.input.tex.base.BaseMethods,s=(u.splitAlignArray,u.default),_=MathJax._.input.tex.ams.AmsMethods,l=_.AmsMethods;_.NEW_OPS;
/*!
 *************************************************************************
 *
 *  mhchemParser.ts
 *  4.2.1
 *
 *  Parser for the \ce command and \pu command for MathJax and Co.
 *
 *  mhchem's \ce is a tool for writing beautiful chemical equations easily.
 *  mhchem's \pu is a tool for writing physical units easily.
 *
 *  ----------------------------------------------------------------------
 *
 *  Copyright (c) 2015-2023 Martin Hensel
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 *  ----------------------------------------------------------------------
 *
 *  https://github.com/mhchem/mhchemParser
 *
 */
class d{static toTex(t,e){return f.go(h.go(t,e),"tex"!==e)}}function m(t){let e,o,n={};for(e in t)for(o in t[e]){let a=o.split("|");t[e][o].stateArray=a;for(let t=0;t<a.length;t++)n[a[t]]=[]}for(e in t)for(o in t[e]){let a=t[e][o].stateArray||[];for(let r=0;r<a.length;r++){const i=t[e][o];i.action_=[].concat(i.action_);for(let t=0;t<i.action_.length;t++)"string"==typeof i.action_[t]&&(i.action_[t]={type_:i.action_[t]});const c=e.split("|");for(let t=0;t<c.length;t++)if("*"===a[r]){let e;for(e in n)n[e].push({pattern:c[t],task:i})}else n[a[r]].push({pattern:c[t],task:i})}}return n}const h={go:function(t,e){if(!t)return[];void 0===e&&(e="ce");let o,n="0",a={};a.parenthesisLevel=0,t=(t=(t=t.replace(/\n/g," ")).replace(/[\u2212\u2013\u2014\u2010]/g,"-")).replace(/[\u2026]/g,"...");let r=10,i=[];for(;;){o!==t?(r=10,o=t):r--;let c=h.stateMachines[e],p=c.transitions[n]||c.transitions["*"];t:for(let e=0;e<p.length;e++){let o=h.patterns.match_(p[e].pattern,t);if(o){const r=p[e].task;for(let t=0;t<r.action_.length;t++){let e;if(c.actions[r.action_[t].type_])e=c.actions[r.action_[t].type_](a,o.match_,r.action_[t].option);else{if(!h.actions[r.action_[t].type_])throw["MhchemBugA","mhchem bug A. Please report. ("+r.action_[t].type_+")"];e=h.actions[r.action_[t].type_](a,o.match_,r.action_[t].option)}h.concatArray(i,e)}if(n=r.nextState||n,!(t.length>0))return i;if(r.revisit||(t=o.remainder),!r.toContinue)break t}}if(r<=0)throw["MhchemBugU","mhchem bug U. Please report."]}},concatArray:function(t,e){if(e)if(Array.isArray(e))for(let o=0;o<e.length;o++)t.push(e[o]);else t.push(e)},patterns:{patterns:{empty:/^$/,else:/^./,else2:/^./,space:/^\s/,"space A":/^\s(?=[A-Z\\$])/,space$:/^\s$/,"a-z":/^[a-z]/,x:/^x/,x$:/^x$/,i$:/^i$/,letters:/^(?:[a-zA-Z\u03B1-\u03C9\u0391-\u03A9?@]|(?:\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))))+/,"\\greek":/^\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))/,"one lowercase latin letter $":/^(?:([a-z])(?:$|[^a-zA-Z]))$/,"$one lowercase latin letter$ $":/^\$(?:([a-z])(?:$|[^a-zA-Z]))\$$/,"one lowercase greek letter $":/^(?:\$?[\u03B1-\u03C9]\$?|\$?\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega)\s*\$?)(?:\s+|\{\}|(?![a-zA-Z]))$/,digits:/^[0-9]+/,"-9.,9":/^[+\-]?(?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))/,"-9.,9 no missing 0":/^[+\-]?[0-9]+(?:[.,][0-9]+)?/,"(-)(9.,9)(e)(99)":function(t){const e=t.match(/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))?(\((?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))\))?(?:(?:([eE])|\s*(\*|x|\\times|\u00D7)\s*10\^)([+\-]?[0-9]+|\{[+\-]?[0-9]+\}))?/);return e&&e[0]?{match_:e.slice(1),remainder:t.substr(e[0].length)}:null},"(-)(9)^(-9)":/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+)?)\^([+\-]?[0-9]+|\{[+\-]?[0-9]+\})/,"state of aggregation $":function(t){const e=h.patterns.findObserveGroups(t,"",/^\([a-z]{1,3}(?=[\),])/,")","");if(e&&e.remainder.match(/^($|[\s,;\)\]\}])/))return e;const o=t.match(/^(?:\((?:\\ca\s?)?\$[amothc]\$\))/);return o?{match_:o[0],remainder:t.substr(o[0].length)}:null},"_{(state of aggregation)}$":/^_\{(\([a-z]{1,3}\))\}/,"{[(":/^(?:\\\{|\[|\()/,")]}":/^(?:\)|\]|\\\})/,", ":/^[,;]\s*/,",":/^[,;]/,".":/^[.]/,". __* ":/^([.\u22C5\u00B7\u2022]|[*])\s*/,"...":/^\.\.\.(?=$|[^.])/,"^{(...)}":function(t){return h.patterns.findObserveGroups(t,"^{","","","}")},"^($...$)":function(t){return h.patterns.findObserveGroups(t,"^","$","$","")},"^a":/^\^([0-9]+|[^\\_])/,"^\\x{}{}":function(t){return h.patterns.findObserveGroups(t,"^",/^\\[a-zA-Z]+\{/,"}","","","{","}","",!0)},"^\\x{}":function(t){return h.patterns.findObserveGroups(t,"^",/^\\[a-zA-Z]+\{/,"}","")},"^\\x":/^\^(\\[a-zA-Z]+)\s*/,"^(-1)":/^\^(-?\d+)/,"'":/^'/,"_{(...)}":function(t){return h.patterns.findObserveGroups(t,"_{","","","}")},"_($...$)":function(t){return h.patterns.findObserveGroups(t,"_","$","$","")},_9:/^_([+\-]?[0-9]+|[^\\])/,"_\\x{}{}":function(t){return h.patterns.findObserveGroups(t,"_",/^\\[a-zA-Z]+\{/,"}","","","{","}","",!0)},"_\\x{}":function(t){return h.patterns.findObserveGroups(t,"_",/^\\[a-zA-Z]+\{/,"}","")},"_\\x":/^_(\\[a-zA-Z]+)\s*/,"^_":/^(?:\^(?=_)|\_(?=\^)|[\^_]$)/,"{}^":/^\{\}(?=\^)/,"{}":/^\{\}/,"{...}":function(t){return h.patterns.findObserveGroups(t,"","{","}","")},"{(...)}":function(t){return h.patterns.findObserveGroups(t,"{","","","}")},"$...$":function(t){return h.patterns.findObserveGroups(t,"","$","$","")},"${(...)}$__$(...)$":function(t){return h.patterns.findObserveGroups(t,"${","","","}$")||h.patterns.findObserveGroups(t,"$","","","$")},"=<>":/^[=<>]/,"#":/^[#\u2261]/,"+":/^\+/,"-$":/^-(?=[\s_},;\]/]|$|\([a-z]+\))/,"-9":/^-(?=[0-9])/,"- orbital overlap":/^-(?=(?:[spd]|sp)(?:$|[\s,;\)\]\}]))/,"-":/^-/,"pm-operator":/^(?:\\pm|\$\\pm\$|\+-|\+\/-)/,operator:/^(?:\+|(?:[\-=<>]|<<|>>|\\approx|\$\\approx\$)(?=\s|$|-?[0-9]))/,arrowUpDown:/^(?:v|\(v\)|\^|\(\^\))(?=$|[\s,;\)\]\}])/,"\\bond{(...)}":function(t){return h.patterns.findObserveGroups(t,"\\bond{","","","}")},"->":/^(?:<->|<-->|->|<-|<=>>|<<=>|<=>|[\u2192\u27F6\u21CC])/,CMT:/^[CMT](?=\[)/,"[(...)]":function(t){return h.patterns.findObserveGroups(t,"[","","","]")},"1st-level escape":/^(&|\\\\|\\hline)\s*/,"\\,":/^(?:\\[,\ ;:])/,"\\x{}{}":function(t){return h.patterns.findObserveGroups(t,"",/^\\[a-zA-Z]+\{/,"}","","","{","}","",!0)},"\\x{}":function(t){return h.patterns.findObserveGroups(t,"",/^\\[a-zA-Z]+\{/,"}","")},"\\ca":/^\\ca(?:\s+|(?![a-zA-Z]))/,"\\x":/^(?:\\[a-zA-Z]+\s*|\\[_&{}%])/,orbital:/^(?:[0-9]{1,2}[spdfgh]|[0-9]{0,2}sp)(?=$|[^a-zA-Z])/,others:/^[\/~|]/,"\\frac{(...)}":function(t){return h.patterns.findObserveGroups(t,"\\frac{","","","}","{","","","}")},"\\overset{(...)}":function(t){return h.patterns.findObserveGroups(t,"\\overset{","","","}","{","","","}")},"\\underset{(...)}":function(t){return h.patterns.findObserveGroups(t,"\\underset{","","","}","{","","","}")},"\\underbrace{(...)}":function(t){return h.patterns.findObserveGroups(t,"\\underbrace{","","","}_","{","","","}")},"\\color{(...)}":function(t){return h.patterns.findObserveGroups(t,"\\color{","","","}")},"\\color{(...)}{(...)}":function(t){return h.patterns.findObserveGroups(t,"\\color{","","","}","{","","","}")||h.patterns.findObserveGroups(t,"\\color","\\","",/^(?=\{)/,"{","","","}")},"\\ce{(...)}":function(t){return h.patterns.findObserveGroups(t,"\\ce{","","","}")},"\\pu{(...)}":function(t){return h.patterns.findObserveGroups(t,"\\pu{","","","}")},oxidation$:/^(?:[+-][IVX]+|(?:\\pm|\$\\pm\$|\+-|\+\/-)\s*0)$/,"d-oxidation$":/^(?:[+-]?[IVX]+|(?:\\pm|\$\\pm\$|\+-|\+\/-)\s*0)$/,"1/2$":/^[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+(?:\$[a-z]\$|[a-z])?$/,amount:function(t){let e;if(e=t.match(/^(?:(?:(?:\([+\-]?[0-9]+\/[0-9]+\)|[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+|[+\-]?[0-9]+[.,][0-9]+|[+\-]?\.[0-9]+|[+\-]?[0-9]+)(?:[a-z](?=\s*[A-Z]))?)|[+\-]?[a-z](?=\s*[A-Z])|\+(?!\s))/),e)return{match_:e[0],remainder:t.substr(e[0].length)};const o=h.patterns.findObserveGroups(t,"","$","$","");return o&&(e=o.match_.match(/^\$(?:\(?[+\-]?(?:[0-9]*[a-z]?[+\-])?[0-9]*[a-z](?:[+\-][0-9]*[a-z]?)?\)?|\+|-)\$$/),e)?{match_:e[0],remainder:t.substr(e[0].length)}:null},amount2:function(t){return this.amount(t)},"(KV letters),":/^(?:[A-Z][a-z]{0,2}|i)(?=,)/,formula$:function(t){if(t.match(/^\([a-z]+\)$/))return null;const e=t.match(/^(?:[a-z]|(?:[0-9\ \+\-\,\.\(\)]+[a-z])+[0-9\ \+\-\,\.\(\)]*|(?:[a-z][0-9\ \+\-\,\.\(\)]+)+[a-z]?)$/);return e?{match_:e[0],remainder:t.substr(e[0].length)}:null},uprightEntities:/^(?:pH|pOH|pC|pK|iPr|iBu)(?=$|[^a-zA-Z])/,"/":/^\s*(\/)\s*/,"//":/^\s*(\/\/)\s*/,"*":/^\s*[*.]\s*/},findObserveGroups:function(t,e,o,n,a,r,i,c,p,u){const s=function(t,e){if("string"==typeof e)return 0!==t.indexOf(e)?null:e;{const o=t.match(e);return o?o[0]:null}};let _=s(t,e);if(null===_)return null;if(t=t.substr(_.length),_=s(t,o),null===_)return null;const l=function(t,e,o){let n=0;for(;e<t.length;){let a=t.charAt(e);const r=s(t.substr(e),o);if(null!==r&&0===n)return{endMatchBegin:e,endMatchEnd:e+r.length};if("{"===a)n++;else if("}"===a){if(0===n)throw["ExtraCloseMissingOpen","Extra close brace or missing open brace"];n--}e++}return null}(t,_.length,n||a);if(null===l)return null;const d=t.substring(0,n?l.endMatchEnd:l.endMatchBegin);if(r||i){const e=this.findObserveGroups(t.substr(l.endMatchEnd),r,i,c,p);if(null===e)return null;const o=[d,e.match_];return{match_:u?o.join(""):o,remainder:e.remainder}}return{match_:d,remainder:t.substr(l.endMatchEnd)}},match_:function(t,e){const o=h.patterns.patterns[t];if(void 0===o)throw["MhchemBugP","mhchem bug P. Please report. ("+t+")"];if("function"==typeof o)return h.patterns.patterns[t](e);{const t=e.match(o);return t?t.length>2?{match_:t.slice(1),remainder:e.substr(t[0].length)}:{match_:t[1]||t[0],remainder:e.substr(t[0].length)}:null}}},actions:{"a=":function(t,e){t.a=(t.a||"")+e},"b=":function(t,e){t.b=(t.b||"")+e},"p=":function(t,e){t.p=(t.p||"")+e},"o=":function(t,e){t.o=(t.o||"")+e},"o=+p1":function(t,e,o){t.o=(t.o||"")+o},"q=":function(t,e){t.q=(t.q||"")+e},"d=":function(t,e){t.d=(t.d||"")+e},"rm=":function(t,e){t.rm=(t.rm||"")+e},"text=":function(t,e){t.text_=(t.text_||"")+e},insert:function(t,e,o){return{type_:o}},"insert+p1":function(t,e,o){return{type_:o,p1:e}},"insert+p1+p2":function(t,e,o){return{type_:o,p1:e[0],p2:e[1]}},copy:function(t,e){return e},write:function(t,e,o){return o},rm:function(t,e){return{type_:"rm",p1:e}},text:function(t,e){return h.go(e,"text")},"tex-math":function(t,e){return h.go(e,"tex-math")},"tex-math tight":function(t,e){return h.go(e,"tex-math tight")},bond:function(t,e,o){return{type_:"bond",kind_:o||e}},"color0-output":function(t,e){return{type_:"color0",color:e}},ce:function(t,e){return h.go(e,"ce")},pu:function(t,e){return h.go(e,"pu")},"1/2":function(t,e){let o=[];e.match(/^[+\-]/)&&(o.push(e.substr(0,1)),e=e.substr(1));const n=e.match(/^([0-9]+|\$[a-z]\$|[a-z])\/([0-9]+)(\$[a-z]\$|[a-z])?$/);return n[1]=n[1].replace(/\$/g,""),o.push({type_:"frac",p1:n[1],p2:n[2]}),n[3]&&(n[3]=n[3].replace(/\$/g,""),o.push({type_:"tex-math",p1:n[3]})),o},"9,9":function(t,e){return h.go(e,"9,9")}},stateMachines:{tex:{transitions:m({empty:{0:{action_:"copy"}},"\\ce{(...)}":{0:{action_:[{type_:"write",option:"{"},"ce",{type_:"write",option:"}"}]}},"\\pu{(...)}":{0:{action_:[{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},else:{0:{action_:"copy"}}}),actions:{}},ce:{transitions:m({empty:{"*":{action_:"output"}},else:{"0|1|2":{action_:"beginsWithBond=false",revisit:!0,toContinue:!0}},oxidation$:{0:{action_:"oxidation-output"}},CMT:{r:{action_:"rdt=",nextState:"rt"},rd:{action_:"rqt=",nextState:"rdt"}},arrowUpDown:{"0|1|2|as":{action_:["sb=false","output","operator"],nextState:"1"}},uprightEntities:{"0|1|2":{action_:["o=","output"],nextState:"1"}},orbital:{"0|1|2|3":{action_:"o=",nextState:"o"}},"->":{"0|1|2|3":{action_:"r=",nextState:"r"},"a|as":{action_:["output","r="],nextState:"r"},"*":{action_:["output","r="],nextState:"r"}},"+":{o:{action_:"d= kv",nextState:"d"},"d|D":{action_:"d=",nextState:"d"},q:{action_:"d=",nextState:"qd"},"qd|qD":{action_:"d=",nextState:"qd"},dq:{action_:["output","d="],nextState:"d"},3:{action_:["sb=false","output","operator"],nextState:"0"}},amount:{"0|2":{action_:"a=",nextState:"a"}},"pm-operator":{"0|1|2|a|as":{action_:["sb=false","output",{type_:"operator",option:"\\pm"}],nextState:"0"}},operator:{"0|1|2|a|as":{action_:["sb=false","output","operator"],nextState:"0"}},"-$":{"o|q":{action_:["charge or bond","output"],nextState:"qd"},d:{action_:"d=",nextState:"d"},D:{action_:["output",{type_:"bond",option:"-"}],nextState:"3"},q:{action_:"d=",nextState:"qd"},qd:{action_:"d=",nextState:"qd"},"qD|dq":{action_:["output",{type_:"bond",option:"-"}],nextState:"3"}},"-9":{"3|o":{action_:["output",{type_:"insert",option:"hyphen"}],nextState:"3"}},"- orbital overlap":{o:{action_:["output",{type_:"insert",option:"hyphen"}],nextState:"2"},d:{action_:["output",{type_:"insert",option:"hyphen"}],nextState:"2"}},"-":{"0|1|2":{action_:[{type_:"output",option:1},"beginsWithBond=true",{type_:"bond",option:"-"}],nextState:"3"},3:{action_:{type_:"bond",option:"-"}},a:{action_:["output",{type_:"insert",option:"hyphen"}],nextState:"2"},as:{action_:[{type_:"output",option:2},{type_:"bond",option:"-"}],nextState:"3"},b:{action_:"b="},o:{action_:{type_:"- after o/d",option:!1},nextState:"2"},q:{action_:{type_:"- after o/d",option:!1},nextState:"2"},"d|qd|dq":{action_:{type_:"- after o/d",option:!0},nextState:"2"},"D|qD|p":{action_:["output",{type_:"bond",option:"-"}],nextState:"3"}},amount2:{"1|3":{action_:"a=",nextState:"a"}},letters:{"0|1|2|3|a|as|b|p|bp|o":{action_:"o=",nextState:"o"},"q|dq":{action_:["output","o="],nextState:"o"},"d|D|qd|qD":{action_:"o after d",nextState:"o"}},digits:{o:{action_:"q=",nextState:"q"},"d|D":{action_:"q=",nextState:"dq"},q:{action_:["output","o="],nextState:"o"},a:{action_:"o=",nextState:"o"}},"space A":{"b|p|bp":{action_:[]}},space:{a:{action_:[],nextState:"as"},0:{action_:"sb=false"},"1|2":{action_:"sb=true"},"r|rt|rd|rdt|rdq":{action_:"output",nextState:"0"},"*":{action_:["output","sb=true"],nextState:"1"}},"1st-level escape":{"1|2":{action_:["output",{type_:"insert+p1",option:"1st-level escape"}]},"*":{action_:["output",{type_:"insert+p1",option:"1st-level escape"}],nextState:"0"}},"[(...)]":{"r|rt":{action_:"rd=",nextState:"rd"},"rd|rdt":{action_:"rq=",nextState:"rdq"}},"...":{"o|d|D|dq|qd|qD":{action_:["output",{type_:"bond",option:"..."}],nextState:"3"},"*":{action_:[{type_:"output",option:1},{type_:"insert",option:"ellipsis"}],nextState:"1"}},". __* ":{"*":{action_:["output",{type_:"insert",option:"addition compound"}],nextState:"1"}},"state of aggregation $":{"*":{action_:["output","state of aggregation"],nextState:"1"}},"{[(":{"a|as|o":{action_:["o=","output","parenthesisLevel++"],nextState:"2"},"0|1|2|3":{action_:["o=","output","parenthesisLevel++"],nextState:"2"},"*":{action_:["output","o=","output","parenthesisLevel++"],nextState:"2"}},")]}":{"0|1|2|3|b|p|bp|o":{action_:["o=","parenthesisLevel--"],nextState:"o"},"a|as|d|D|q|qd|qD|dq":{action_:["output","o=","parenthesisLevel--"],nextState:"o"}},", ":{"*":{action_:["output","comma"],nextState:"0"}},"^_":{"*":{action_:[]}},"^{(...)}|^($...$)":{"0|1|2|as":{action_:"b=",nextState:"b"},p:{action_:"b=",nextState:"bp"},"3|o":{action_:"d= kv",nextState:"D"},q:{action_:"d=",nextState:"qD"},"d|D|qd|qD|dq":{action_:["output","d="],nextState:"D"}},"^a|^\\x{}{}|^\\x{}|^\\x|'":{"0|1|2|as":{action_:"b=",nextState:"b"},p:{action_:"b=",nextState:"bp"},"3|o":{action_:"d= kv",nextState:"d"},q:{action_:"d=",nextState:"qd"},"d|qd|D|qD":{action_:"d="},dq:{action_:["output","d="],nextState:"d"}},"_{(state of aggregation)}$":{"d|D|q|qd|qD|dq":{action_:["output","q="],nextState:"q"}},"_{(...)}|_($...$)|_9|_\\x{}{}|_\\x{}|_\\x":{"0|1|2|as":{action_:"p=",nextState:"p"},b:{action_:"p=",nextState:"bp"},"3|o":{action_:"q=",nextState:"q"},"d|D":{action_:"q=",nextState:"dq"},"q|qd|qD|dq":{action_:["output","q="],nextState:"q"}},"=<>":{"0|1|2|3|a|as|o|q|d|D|qd|qD|dq":{action_:[{type_:"output",option:2},"bond"],nextState:"3"}},"#":{"0|1|2|3|a|as|o":{action_:[{type_:"output",option:2},{type_:"bond",option:"#"}],nextState:"3"}},"{}^":{"*":{action_:[{type_:"output",option:1},{type_:"insert",option:"tinySkip"}],nextState:"1"}},"{}":{"*":{action_:{type_:"output",option:1},nextState:"1"}},"{...}":{"0|1|2|3|a|as|b|p|bp":{action_:"o=",nextState:"o"},"o|d|D|q|qd|qD|dq":{action_:["output","o="],nextState:"o"}},"$...$":{a:{action_:"a="},"0|1|2|3|as|b|p|bp|o":{action_:"o=",nextState:"o"},"as|o":{action_:"o="},"q|d|D|qd|qD|dq":{action_:["output","o="],nextState:"o"}},"\\bond{(...)}":{"*":{action_:[{type_:"output",option:2},"bond"],nextState:"3"}},"\\frac{(...)}":{"*":{action_:[{type_:"output",option:1},"frac-output"],nextState:"3"}},"\\overset{(...)}":{"*":{action_:[{type_:"output",option:2},"overset-output"],nextState:"3"}},"\\underset{(...)}":{"*":{action_:[{type_:"output",option:2},"underset-output"],nextState:"3"}},"\\underbrace{(...)}":{"*":{action_:[{type_:"output",option:2},"underbrace-output"],nextState:"3"}},"\\color{(...)}{(...)}":{"*":{action_:[{type_:"output",option:2},"color-output"],nextState:"3"}},"\\color{(...)}":{"*":{action_:[{type_:"output",option:2},"color0-output"]}},"\\ce{(...)}":{"*":{action_:[{type_:"output",option:2},"ce"],nextState:"3"}},"\\,":{"*":{action_:[{type_:"output",option:1},"copy"],nextState:"1"}},"\\pu{(...)}":{"*":{action_:["output",{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}],nextState:"3"}},"\\x{}{}|\\x{}|\\x":{"0|1|2|3|a|as|b|p|bp|o|c0":{action_:["o=","output"],nextState:"3"},"*":{action_:["output","o=","output"],nextState:"3"}},others:{"*":{action_:[{type_:"output",option:1},"copy"],nextState:"3"}},else2:{a:{action_:"a to o",nextState:"o",revisit:!0},as:{action_:["output","sb=true"],nextState:"1",revisit:!0},"r|rt|rd|rdt|rdq":{action_:["output"],nextState:"0",revisit:!0},"*":{action_:["output","copy"],nextState:"3"}}}),actions:{"o after d":function(t,e){let o;if((t.d||"").match(/^[1-9][0-9]*$/)){const e=t.d;t.d=void 0,o=this.output(t),o.push({type_:"tinySkip"}),t.b=e}else o=this.output(t);return h.actions["o="](t,e),o},"d= kv":function(t,e){t.d=e,t.dType="kv"},"charge or bond":function(t,e){if(t.beginsWithBond){let o=[];return h.concatArray(o,this.output(t)),h.concatArray(o,h.actions.bond(t,e,"-")),o}t.d=e},"- after o/d":function(t,e,o){let n=h.patterns.match_("orbital",t.o||"");const a=h.patterns.match_("one lowercase greek letter $",t.o||""),r=h.patterns.match_("one lowercase latin letter $",t.o||""),i=h.patterns.match_("$one lowercase latin letter$ $",t.o||""),c="-"===e&&(n&&""===n.remainder||a||r||i);!c||t.a||t.b||t.p||t.d||t.q||n||!r||(t.o="$"+t.o+"$");let p=[];return c?(h.concatArray(p,this.output(t)),p.push({type_:"hyphen"})):(n=h.patterns.match_("digits",t.d||""),o&&n&&""===n.remainder?(h.concatArray(p,h.actions["d="](t,e)),h.concatArray(p,this.output(t))):(h.concatArray(p,this.output(t)),h.concatArray(p,h.actions.bond(t,e,"-")))),p},"a to o":function(t){t.o=t.a,t.a=void 0},"sb=true":function(t){t.sb=!0},"sb=false":function(t){t.sb=!1},"beginsWithBond=true":function(t){t.beginsWithBond=!0},"beginsWithBond=false":function(t){t.beginsWithBond=!1},"parenthesisLevel++":function(t){t.parenthesisLevel++},"parenthesisLevel--":function(t){t.parenthesisLevel--},"state of aggregation":function(t,e){return{type_:"state of aggregation",p1:h.go(e,"o")}},comma:function(t,e){const o=e.replace(/\s*$/,"");return o!==e&&0===t.parenthesisLevel?{type_:"comma enumeration L",p1:o}:{type_:"comma enumeration M",p1:o}},output:function(t,e,o){let n;if(t.r){let e,o;e="M"===t.rdt?h.go(t.rd,"tex-math"):"T"===t.rdt?[{type_:"text",p1:t.rd||""}]:h.go(t.rd,"ce"),o="M"===t.rqt?h.go(t.rq,"tex-math"):"T"===t.rqt?[{type_:"text",p1:t.rq||""}]:h.go(t.rq,"ce"),n={type_:"arrow",r:t.r,rd:e,rq:o}}else n=[],(t.a||t.b||t.p||t.o||t.q||t.d||o)&&(t.sb&&n.push({type_:"entitySkip"}),t.o||t.q||t.d||t.b||t.p||2===o?t.o||t.q||t.d||!t.b&&!t.p?t.o&&"kv"===t.dType&&h.patterns.match_("d-oxidation$",t.d||"")?t.dType="oxidation":t.o&&"kv"===t.dType&&!t.q&&(t.dType=void 0):(t.o=t.a,t.d=t.b,t.q=t.p,t.a=t.b=t.p=void 0):(t.o=t.a,t.a=void 0),n.push({type_:"chemfive",a:h.go(t.a,"a"),b:h.go(t.b,"bd"),p:h.go(t.p,"pq"),o:h.go(t.o,"o"),q:h.go(t.q,"pq"),d:h.go(t.d,"oxidation"===t.dType?"oxidation":"bd"),dType:t.dType}));for(const e in t)"parenthesisLevel"!==e&&"beginsWithBond"!==e&&delete t[e];return n},"oxidation-output":function(t,e){let o=["{"];return h.concatArray(o,h.go(e,"oxidation")),o.push("}"),o},"frac-output":function(t,e){return{type_:"frac-ce",p1:h.go(e[0],"ce"),p2:h.go(e[1],"ce")}},"overset-output":function(t,e){return{type_:"overset",p1:h.go(e[0],"ce"),p2:h.go(e[1],"ce")}},"underset-output":function(t,e){return{type_:"underset",p1:h.go(e[0],"ce"),p2:h.go(e[1],"ce")}},"underbrace-output":function(t,e){return{type_:"underbrace",p1:h.go(e[0],"ce"),p2:h.go(e[1],"ce")}},"color-output":function(t,e){return{type_:"color",color1:e[0],color2:h.go(e[1],"ce")}},"r=":function(t,e){t.r=e},"rdt=":function(t,e){t.rdt=e},"rd=":function(t,e){t.rd=e},"rqt=":function(t,e){t.rqt=e},"rq=":function(t,e){t.rq=e},operator:function(t,e,o){return{type_:"operator",kind_:o||e}}}},a:{transitions:m({empty:{"*":{action_:[]}},"1/2$":{0:{action_:"1/2"}},else:{0:{action_:[],nextState:"1",revisit:!0}},"${(...)}$__$(...)$":{"*":{action_:"tex-math tight",nextState:"1"}},",":{"*":{action_:{type_:"insert",option:"commaDecimal"}}},else2:{"*":{action_:"copy"}}}),actions:{}},o:{transitions:m({empty:{"*":{action_:[]}},"1/2$":{0:{action_:"1/2"}},else:{0:{action_:[],nextState:"1",revisit:!0}},letters:{"*":{action_:"rm"}},"\\ca":{"*":{action_:{type_:"insert",option:"circa"}}},"\\pu{(...)}":{"*":{action_:[{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},"\\x{}{}|\\x{}|\\x":{"*":{action_:"copy"}},"${(...)}$__$(...)$":{"*":{action_:"tex-math"}},"{(...)}":{"*":{action_:[{type_:"write",option:"{"},"text",{type_:"write",option:"}"}]}},else2:{"*":{action_:"copy"}}}),actions:{}},text:{transitions:m({empty:{"*":{action_:"output"}},"{...}":{"*":{action_:"text="}},"${(...)}$__$(...)$":{"*":{action_:"tex-math"}},"\\greek":{"*":{action_:["output","rm"]}},"\\pu{(...)}":{"*":{action_:["output",{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},"\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:["output","copy"]}},else:{"*":{action_:"text="}}}),actions:{output:function(t){if(t.text_){let e={type_:"text",p1:t.text_};for(const e in t)delete t[e];return e}}}},pq:{transitions:m({empty:{"*":{action_:[]}},"state of aggregation $":{"*":{action_:"state of aggregation"}},i$:{0:{action_:[],nextState:"!f",revisit:!0}},"(KV letters),":{0:{action_:"rm",nextState:"0"}},formula$:{0:{action_:[],nextState:"f",revisit:!0}},"1/2$":{0:{action_:"1/2"}},else:{0:{action_:[],nextState:"!f",revisit:!0}},"${(...)}$__$(...)$":{"*":{action_:"tex-math"}},"{(...)}":{"*":{action_:"text"}},"a-z":{f:{action_:"tex-math"}},letters:{"*":{action_:"rm"}},"-9.,9":{"*":{action_:"9,9"}},",":{"*":{action_:{type_:"insert+p1",option:"comma enumeration S"}}},"\\color{(...)}{(...)}":{"*":{action_:"color-output"}},"\\color{(...)}":{"*":{action_:"color0-output"}},"\\ce{(...)}":{"*":{action_:"ce"}},"\\pu{(...)}":{"*":{action_:[{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},"\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:"copy"}},else2:{"*":{action_:"copy"}}}),actions:{"state of aggregation":function(t,e){return{type_:"state of aggregation subscript",p1:h.go(e,"o")}},"color-output":function(t,e){return{type_:"color",color1:e[0],color2:h.go(e[1],"pq")}}}},bd:{transitions:m({empty:{"*":{action_:[]}},x$:{0:{action_:[],nextState:"!f",revisit:!0}},formula$:{0:{action_:[],nextState:"f",revisit:!0}},else:{0:{action_:[],nextState:"!f",revisit:!0}},"-9.,9 no missing 0":{"*":{action_:"9,9"}},".":{"*":{action_:{type_:"insert",option:"electron dot"}}},"a-z":{f:{action_:"tex-math"}},x:{"*":{action_:{type_:"insert",option:"KV x"}}},letters:{"*":{action_:"rm"}},"'":{"*":{action_:{type_:"insert",option:"prime"}}},"${(...)}$__$(...)$":{"*":{action_:"tex-math"}},"{(...)}":{"*":{action_:"text"}},"\\color{(...)}{(...)}":{"*":{action_:"color-output"}},"\\color{(...)}":{"*":{action_:"color0-output"}},"\\ce{(...)}":{"*":{action_:"ce"}},"\\pu{(...)}":{"*":{action_:[{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},"\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:"copy"}},else2:{"*":{action_:"copy"}}}),actions:{"color-output":function(t,e){return{type_:"color",color1:e[0],color2:h.go(e[1],"bd")}}}},oxidation:{transitions:m({empty:{"*":{action_:"roman-numeral"}},"pm-operator":{"*":{action_:{type_:"o=+p1",option:"\\pm"}}},else:{"*":{action_:"o="}}}),actions:{"roman-numeral":function(t){return{type_:"roman numeral",p1:t.o||""}}}},"tex-math":{transitions:m({empty:{"*":{action_:"output"}},"\\ce{(...)}":{"*":{action_:["output","ce"]}},"\\pu{(...)}":{"*":{action_:["output",{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},"{...}|\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:"o="}},else:{"*":{action_:"o="}}}),actions:{output:function(t){if(t.o){let e={type_:"tex-math",p1:t.o};for(const e in t)delete t[e];return e}}}},"tex-math tight":{transitions:m({empty:{"*":{action_:"output"}},"\\ce{(...)}":{"*":{action_:["output","ce"]}},"\\pu{(...)}":{"*":{action_:["output",{type_:"write",option:"{"},"pu",{type_:"write",option:"}"}]}},"{...}|\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:"o="}},"-|+":{"*":{action_:"tight operator"}},else:{"*":{action_:"o="}}}),actions:{"tight operator":function(t,e){t.o=(t.o||"")+"{"+e+"}"},output:function(t){if(t.o){let e={type_:"tex-math",p1:t.o};for(const e in t)delete t[e];return e}}}},"9,9":{transitions:m({empty:{"*":{action_:[]}},",":{"*":{action_:"comma"}},else:{"*":{action_:"copy"}}}),actions:{comma:function(){return{type_:"commaDecimal"}}}},pu:{transitions:m({empty:{"*":{action_:"output"}},space$:{"*":{action_:["output","space"]}},"{[(|)]}":{"0|a":{action_:"copy"}},"(-)(9)^(-9)":{0:{action_:"number^",nextState:"a"}},"(-)(9.,9)(e)(99)":{0:{action_:"enumber",nextState:"a"}},space:{"0|a":{action_:[]}},"pm-operator":{"0|a":{action_:{type_:"operator",option:"\\pm"},nextState:"0"}},operator:{"0|a":{action_:"copy",nextState:"0"}},"//":{d:{action_:"o=",nextState:"/"}},"/":{d:{action_:"o=",nextState:"/"}},"{...}|else":{"0|d":{action_:"d=",nextState:"d"},a:{action_:["space","d="],nextState:"d"},"/|q":{action_:"q=",nextState:"q"}}}),actions:{enumber:function(t,e){let o=[];return"+-"===e[0]||"+/-"===e[0]?o.push("\\pm "):e[0]&&o.push(e[0]),e[1]&&(h.concatArray(o,h.go(e[1],"pu-9,9")),e[2]&&(e[2].match(/[,.]/)?h.concatArray(o,h.go(e[2],"pu-9,9")):o.push(e[2])),(e[3]||e[4])&&("e"===e[3]||"*"===e[4]?o.push({type_:"cdot"}):o.push({type_:"times"}))),e[5]&&o.push("10^{"+e[5]+"}"),o},"number^":function(t,e){let o=[];return"+-"===e[0]||"+/-"===e[0]?o.push("\\pm "):e[0]&&o.push(e[0]),h.concatArray(o,h.go(e[1],"pu-9,9")),o.push("^{"+e[2]+"}"),o},operator:function(t,e,o){return{type_:"operator",kind_:o||e}},space:function(){return{type_:"pu-space-1"}},output:function(t){let e;const o=h.patterns.match_("{(...)}",t.d||"");o&&""===o.remainder&&(t.d=o.match_);const n=h.patterns.match_("{(...)}",t.q||"");if(n&&""===n.remainder&&(t.q=n.match_),t.d&&(t.d=t.d.replace(/\u00B0C|\^oC|\^{o}C/g,"{}^{\\circ}C"),t.d=t.d.replace(/\u00B0F|\^oF|\^{o}F/g,"{}^{\\circ}F")),t.q){t.q=t.q.replace(/\u00B0C|\^oC|\^{o}C/g,"{}^{\\circ}C"),t.q=t.q.replace(/\u00B0F|\^oF|\^{o}F/g,"{}^{\\circ}F");const o={d:h.go(t.d,"pu"),q:h.go(t.q,"pu")};"//"===t.o?e={type_:"pu-frac",p1:o.d,p2:o.q}:(e=o.d,o.d.length>1||o.q.length>1?e.push({type_:" / "}):e.push({type_:"/"}),h.concatArray(e,o.q))}else e=h.go(t.d,"pu-2");for(const e in t)delete t[e];return e}}},"pu-2":{transitions:m({empty:{"*":{action_:"output"}},"*":{"*":{action_:["output","cdot"],nextState:"0"}},"\\x":{"*":{action_:"rm="}},space:{"*":{action_:["output","space"],nextState:"0"}},"^{(...)}|^(-1)":{1:{action_:"^(-1)"}},"-9.,9":{0:{action_:"rm=",nextState:"0"},1:{action_:"^(-1)",nextState:"0"}},"{...}|else":{"*":{action_:"rm=",nextState:"1"}}}),actions:{cdot:function(){return{type_:"tight cdot"}},"^(-1)":function(t,e){t.rm+="^{"+e+"}"},space:function(){return{type_:"pu-space-2"}},output:function(t){let e=[];if(t.rm){const o=h.patterns.match_("{(...)}",t.rm||"");e=o&&""===o.remainder?h.go(o.match_,"pu"):{type_:"rm",p1:t.rm}}for(const e in t)delete t[e];return e}}},"pu-9,9":{transitions:m({empty:{0:{action_:"output-0"},o:{action_:"output-o"}},",":{0:{action_:["output-0","comma"],nextState:"o"}},".":{0:{action_:["output-0","copy"],nextState:"o"}},else:{"*":{action_:"text="}}}),actions:{comma:function(){return{type_:"commaDecimal"}},"output-0":function(t){let e=[];if(t.text_=t.text_||"",t.text_.length>4){let o=t.text_.length%3;0===o&&(o=3);for(let o=t.text_.length-3;o>0;o-=3)e.push(t.text_.substr(o,3)),e.push({type_:"1000 separator"});e.push(t.text_.substr(0,o)),e.reverse()}else e.push(t.text_);for(const e in t)delete t[e];return e},"output-o":function(t){let e=[];if(t.text_=t.text_||"",t.text_.length>4){const o=t.text_.length-3;let n;for(n=0;n<o;n+=3)e.push(t.text_.substr(n,3)),e.push({type_:"1000 separator"});e.push(t.text_.substr(n))}else e.push(t.text_);for(const e in t)delete t[e];return e}}}}},f={go:function(t,e){if(!t)return"";let o="",n=!1;for(let e=0;e<t.length;e++){const a=t[e];"string"==typeof a?o+=a:(o+=f._go2(a),"1st-level escape"===a.type_&&(n=!0))}return e&&!n&&o&&(o="{"+o+"}"),o},_goInner:function(t){return f.go(t,!1)},_go2:function(t){let e;switch(t.type_){case"chemfive":e="";const o={a:f._goInner(t.a),b:f._goInner(t.b),p:f._goInner(t.p),o:f._goInner(t.o),q:f._goInner(t.q),d:f._goInner(t.d)};o.a&&(o.a.match(/^[+\-]/)&&(o.a="{"+o.a+"}"),e+=o.a+"\\,"),(o.b||o.p)&&(e+="{\\vphantom{A}}",e+="^{\\hphantom{"+(o.b||"")+"}}_{\\hphantom{"+(o.p||"")+"}}",e+="\\mkern-1.5mu",e+="{\\vphantom{A}}",e+="^{\\smash[t]{\\vphantom{2}}\\llap{"+(o.b||"")+"}}",e+="_{\\vphantom{2}\\llap{\\smash[t]{"+(o.p||"")+"}}}"),o.o&&(o.o.match(/^[+\-]/)&&(o.o="{"+o.o+"}"),e+=o.o),"kv"===t.dType?((o.d||o.q)&&(e+="{\\vphantom{A}}"),o.d&&(e+="^{"+o.d+"}"),o.q&&(e+="_{\\smash[t]{"+o.q+"}}")):"oxidation"===t.dType?(o.d&&(e+="{\\vphantom{A}}",e+="^{"+o.d+"}"),o.q&&(e+="{\\vphantom{A}}",e+="_{\\smash[t]{"+o.q+"}}")):(o.q&&(e+="{\\vphantom{A}}",e+="_{\\smash[t]{"+o.q+"}}"),o.d&&(e+="{\\vphantom{A}}",e+="^{"+o.d+"}"));break;case"rm":case"roman numeral":e="\\mathrm{"+t.p1+"}";break;case"text":t.p1.match(/[\^_]/)?(t.p1=t.p1.replace(" ","~").replace("-","\\text{-}"),e="\\mathrm{"+t.p1+"}"):e="\\text{"+t.p1+"}";break;case"state of aggregation":e="\\mskip2mu "+f._goInner(t.p1);break;case"state of aggregation subscript":e="\\mskip1mu "+f._goInner(t.p1);break;case"bond":if(e=f._getBond(t.kind_),!e)throw["MhchemErrorBond","mhchem Error. Unknown bond type ("+t.kind_+")"];break;case"frac":const n="\\frac{"+t.p1+"}{"+t.p2+"}";e="\\mathchoice{\\textstyle"+n+"}{"+n+"}{"+n+"}{"+n+"}";break;case"pu-frac":const a="\\frac{"+f._goInner(t.p1)+"}{"+f._goInner(t.p2)+"}";e="\\mathchoice{\\textstyle"+a+"}{"+a+"}{"+a+"}{"+a+"}";break;case"tex-math":case"1st-level escape":e=t.p1+" ";break;case"frac-ce":e="\\frac{"+f._goInner(t.p1)+"}{"+f._goInner(t.p2)+"}";break;case"overset":e="\\overset{"+f._goInner(t.p1)+"}{"+f._goInner(t.p2)+"}";break;case"underset":e="\\underset{"+f._goInner(t.p1)+"}{"+f._goInner(t.p2)+"}";break;case"underbrace":e="\\underbrace{"+f._goInner(t.p1)+"}_{"+f._goInner(t.p2)+"}";break;case"color":e="{\\color{"+t.color1+"}{"+f._goInner(t.color2)+"}}";break;case"color0":e="\\color{"+t.color+"}";break;case"arrow":const r={rd:f._goInner(t.rd),rq:f._goInner(t.rq)};let i=f._getArrow(t.r);r.rd||r.rq?"<=>"===t.r||"<=>>"===t.r||"<<=>"===t.r||"<--\x3e"===t.r?(i="\\long"+i,r.rd&&(i="\\overset{"+r.rd+"}{"+i+"}"),r.rq&&(i="<--\x3e"===t.r?"\\underset{\\lower2mu{"+r.rq+"}}{"+i+"}":"\\underset{\\lower6mu{"+r.rq+"}}{"+i+"}"),i=" {}\\mathrel{"+i+"}{} "):(r.rq&&(i+="[{"+r.rq+"}]"),i+="{"+r.rd+"}",i=" {}\\mathrel{\\x"+i+"}{} "):i=" {}\\mathrel{\\long"+i+"}{} ",e=i;break;case"operator":e=f._getOperator(t.kind_);break;case"space":e=" ";break;case"tinySkip":e="\\mkern2mu";break;case"entitySkip":case"pu-space-1":e="~";break;case"pu-space-2":e="\\mkern3mu ";break;case"1000 separator":e="\\mkern2mu ";break;case"commaDecimal":e="{,}";break;case"comma enumeration L":e="{"+t.p1+"}\\mkern6mu ";break;case"comma enumeration M":e="{"+t.p1+"}\\mkern3mu ";break;case"comma enumeration S":e="{"+t.p1+"}\\mkern1mu ";break;case"hyphen":e="\\text{-}";break;case"addition compound":e="\\,{\\cdot}\\,";break;case"electron dot":e="\\mkern1mu \\bullet\\mkern1mu ";break;case"KV x":e="{\\times}";break;case"prime":e="\\prime ";break;case"cdot":e="\\cdot ";break;case"tight cdot":e="\\mkern1mu{\\cdot}\\mkern1mu ";break;case"times":e="\\times ";break;case"circa":e="{\\sim}";break;case"^":e="uparrow";break;case"v":e="downarrow";break;case"ellipsis":e="\\ldots ";break;case"/":e="/";break;case" / ":e="\\,/\\,";break;default:throw["MhchemBugT","mhchem bug T. Please report."]}return e},_getArrow:function(t){switch(t){case"->":case"\u2192":case"\u27f6":return"rightarrow";case"<-":return"leftarrow";case"<->":return"leftrightarrow";case"<--\x3e":return"leftrightarrows";case"<=>":case"\u21cc":return"rightleftharpoons";case"<=>>":return"Rightleftharpoons";case"<<=>":return"Leftrightharpoons";default:throw["MhchemBugT","mhchem bug T. Please report."]}},_getBond:function(t){switch(t){case"-":case"1":return"{-}";case"=":case"2":return"{=}";case"#":case"3":return"{\\equiv}";case"~":return"{\\tripledash}";case"~-":return"{\\rlap{\\lower.1em{-}}\\raise.1em{\\tripledash}}";case"~=":case"~--":return"{\\rlap{\\lower.2em{-}}\\rlap{\\raise.2em{\\tripledash}}-}";case"-~-":return"{\\rlap{\\lower.2em{-}}\\rlap{\\raise.2em{-}}\\tripledash}";case"...":return"{{\\cdot}{\\cdot}{\\cdot}}";case"....":return"{{\\cdot}{\\cdot}{\\cdot}{\\cdot}}";case"->":return"{\\rightarrow}";case"<-":return"{\\leftarrow}";case"<":return"{<}";case">":return"{>}";default:throw["MhchemBugT","mhchem bug T. Please report."]}},_getOperator:function(t){switch(t){case"+":return" {}+{} ";case"-":return" {}-{} ";case"=":return" {}={} ";case"<":return" {}<{} ";case">":return" {}>{} ";case"<<":return" {}\\ll{} ";case">>":return" {}\\gg{} ";case"\\pm":return" {}\\pm{} ";case"\\approx":case"$\\approx$":return" {}\\approx{} ";case"v":case"(v)":return" \\downarrow{} ";case"^":case"(^)":return" \\uparrow{} ";default:throw["MhchemBugT","mhchem bug T. Please report."]}}};let x={};x.Macro=s.Macro,x.xArrow=l.xArrow,x.Machine=function(t,e,o){let n,a=t.GetArgument(e);try{n=d.toTex(a,o)}catch(t){throw new p(t[0],t[1])}t.string=n+t.string.substr(t.i),t.i=0},new c("mhchem",{ce:["Machine","ce"],pu:["Machine","pu"],longrightleftharpoons:["Macro","\\stackrel{\\textstyle{-}\\!\\!{\\rightharpoonup}}{\\smash{{\\leftharpoondown}\\!\\!{-}}}"],longRightleftharpoons:["Macro","\\stackrel{\\textstyle{-}\\!\\!{\\rightharpoonup}}{\\smash{\\leftharpoondown}}"],longLeftrightharpoons:["Macro","\\stackrel{\\textstyle\\vphantom{{-}}{\\rightharpoonup}}{\\smash{{\\leftharpoondown}\\!\\!{-}}}"],longleftrightarrows:["Macro","\\stackrel{\\longrightarrow}{\\smash{\\longleftarrow}\\Rule{0px}{.25em}{0px}}"],tripledash:["Macro","\\vphantom{-}\\raise2mu{\\kern2mu\\tiny\\text{-}\\kern1mu\\text{-}\\kern1mu\\text{-}\\kern2mu}"],xleftrightarrow:["xArrow",8596,6,6],xrightleftharpoons:["xArrow",8652,5,7],xRightleftharpoons:["xArrow",8652,5,7],xLeftrightharpoons:["xArrow",8652,5,7]},x);const g=r.create("mhchem",{handler:{macro:["mhchem"]}});MathJax.loader&&MathJax.loader.checkVersion("[tex]/mhchem","4.0.0-beta.4","tex-extension"),n({_:{input:{tex:{mhchem:{MhchemConfiguration:e}}}}})})();
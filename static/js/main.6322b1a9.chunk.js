(this["webpackJsonpreact-ts"]=this["webpackJsonpreact-ts"]||[]).push([[0],{20:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n),c=a(13),r=a.n(c),s=(a(20),a(15)),l=a(10),o=a(7),d=a(8),h=a(2),u=a(12),j=a(11),b=a(1),m=a(9),p=(a(24),a(0));function O(e){var t=e.columns,a=e.data,n=Object(m.useTable)({columns:t,data:a}),i=n.getTableProps,c=n.getTableBodyProps,r=n.headerGroups,s=n.rows,l=n.prepareRow;return Object(p.jsxs)("table",Object(b.a)(Object(b.a)({},i()),{},{children:[Object(p.jsx)("thead",{children:r.map((function(e){return Object(p.jsx)("tr",Object(b.a)(Object(b.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(p.jsx)("th",Object(b.a)(Object(b.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(p.jsx)("tbody",Object(b.a)(Object(b.a)({},c()),{},{children:s.map((function(e,t){return l(e),Object(p.jsx)("tr",Object(b.a)(Object(b.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(p.jsx)("td",Object(b.a)(Object(b.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))}function g(e){var t=e.columns,a=e.data,n=Object(m.useTable)({columns:t,data:a}),i=n.getTableProps,c=n.getTableBodyProps,r=n.headerGroups,s=n.rows,l=n.prepareRow;return Object(p.jsxs)("table",Object(b.a)(Object(b.a)({},i()),{},{children:[Object(p.jsx)("thead",{children:r.map((function(e){return Object(p.jsx)("tr",Object(b.a)(Object(b.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(p.jsx)("th",Object(b.a)(Object(b.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(p.jsx)("tbody",Object(b.a)(Object(b.a)({},c()),{},{children:s.map((function(e,t){return l(e),Object(p.jsx)("tr",Object(b.a)(Object(b.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(p.jsx)("td",Object(b.a)(Object(b.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))}var v="perfect_support_3",_="damage_guard",x="skill_boost",f="encore",k="cinderella_magic",C=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleListBoxNameChange=function(e){n.props.changeName(n.props.id,e.target.value)},n.handleInputBoxIntervalChange=function(e){n.props.changeInterval(n.props.id,Number(e.target.value))},n.handleListBoxTimeChange=function(e){n.props.changeTime(n.props.id,e.target.value)},n.handleListBoxNameChange=n.handleListBoxNameChange.bind(Object(h.a)(n)),n.handleInputBoxIntervalChange=n.handleInputBoxIntervalChange.bind(Object(h.a)(n)),n.handleListBoxTimeChange=n.handleListBoxTimeChange.bind(Object(h.a)(n)),n}return Object(d.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("select",{name:"skill_name_".concat(this.props.id),id:"skill_id_".concat(this.props.id),onChange:this.handleListBoxNameChange,value:this.props.skill.name,children:[Object(p.jsx)("option",{value:v,children:"SSR \u30d1\u30fc\u30d5\u30a7\u30af\u30c8\u30b5\u30dd\u30fc\u30c8"}),Object(p.jsx)("option",{value:"perfect_support_2",children:"SR \u30d1\u30fc\u30d5\u30a7\u30af\u30c8\u30b5\u30dd\u30fc\u30c8"}),Object(p.jsx)("option",{value:"perfect_support_1",children:"R \u30d1\u30fc\u30d5\u30a7\u30af\u30c8\u30b5\u30dd\u30fc\u30c8"}),Object(p.jsx)("option",{value:_,children:"\u30c0\u30e1\u30fc\u30b8\u30ac\u30fc\u30c9"}),Object(p.jsx)("option",{value:x,children:"\u30b9\u30ad\u30eb\u30d6\u30fc\u30b9\u30c8"}),Object(p.jsx)("option",{value:f,children:"\u30a2\u30f3\u30b3\u30fc\u30eb"}),Object(p.jsx)("option",{value:k,children:"\u30b7\u30f3\u30c7\u30ec\u30e9\u30de\u30b8\u30c3\u30af"}),Object(p.jsx)("option",{value:"other",children:"\u305d\u306e\u4ed6"})]}),Object(p.jsx)("input",{type:"number",id:"interval_id_".concat(this.props.id),name:"interval_name_".concat(this.props.id),min:"1",placeholder:"4",onChange:this.handleInputBoxIntervalChange,value:this.props.skill.interval}),"\u79d2\u3054\u3068",Object(p.jsxs)("select",{name:"time_name_".concat(this.props.id),id:"time_id_".concat(this.props.id),onChange:this.handleListBoxTimeChange,value:this.props.skill.time,children:[Object(p.jsx)("option",{value:"time_a",children:"\u4e00\u77ac\u306e\u9593"}),Object(p.jsx)("option",{value:"time_b",children:"\u308f\u305a\u304b\u306a\u9593"}),Object(p.jsx)("option",{value:"time_c",children:"\u5c11\u3057\u306e\u9593"}),Object(p.jsx)("option",{value:"time_d",children:"\u3057\u3070\u3089\u304f\u306e\u9593"}),Object(p.jsx)("option",{value:"time_e",children:"\u304b\u306a\u308a\u306e\u9593"})]})]})}}]),a}(i.a.Component),T=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;Object(o.a)(this,a),(n=t.call(this,e)).last_activated_skill_id=-1,n.current_encore_id_list=[-1,-1,-1,-1,-1],n.idolsData={idol1:null,idol2:null,idol3:null,idol4:null,idol5:null},n.data=[{start:"*",idol1:"*",idol2:"*",idol3:"*",idol4:"*",idol5:"*",perfect:"*",guard:"*"}],n.handleChangeMusicTime=function(e){var t=Number(e.target.value);n.setState({music_time:t}),n.update(0,n.state.skills[0],t)};var i={name:v,interval:8,time:"time_b"};return n.state={skills:[i,i,i,i,i],music_time:120,is_resonance:!1},n.changeName=n.changeName.bind(Object(h.a)(n)),n.changeInterval=n.changeInterval.bind(Object(h.a)(n)),n.changeTime=n.changeTime.bind(Object(h.a)(n)),n.handleChangeMusicTime=n.handleChangeMusicTime.bind(Object(h.a)(n)),n}return Object(d.a)(a,[{key:"updateTimeLine",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:120;function n(e,t){return e>=t.interval&&(e-t.interval)%t.interval<=I[t.time]&&e-(e-t.interval)%t.interval<=a-3}function i(e,t){return e>=t.interval&&(e-t.interval)%t.interval===0&&e<=a-3}for(var c=[],r=4;r>=0;r--)t[r].name===f&&i(e,t[r])&&-1!==this.last_activated_skill_id&&(this.current_encore_id_list[r]=this.last_activated_skill_id);for(var s=4;s>=0;s--)if(n(e,t[s]))if(t[s].name===f){if(-1===this.current_encore_id_list[s])continue;if(t[this.current_encore_id_list[s]].name===k)for(var l=4;l>=0;l--)c.push(t[l].name);else c.push(t[this.current_encore_id_list[s]].name)}else{if(t[s].name===k)for(var o=4;o>=0;o--)c.push(t[o].name);else c.push(t[s].name);i(e,t[s])&&(this.last_activated_skill_id=s)}function d(){return c.includes(v)&&c.includes(x)}function h(){return c.includes(_)}function u(a,i){return n(e,t[a])?t[a].name===f?-1!==i?t[i].name===k?"12345":(i+1).toFixed(0):"":t[a].name===k?"12345":(a+1).toFixed(0):""}return{start:e.toFixed(1)+" -",idol1:u(0,this.current_encore_id_list[0]),idol2:u(1,this.current_encore_id_list[1]),idol3:u(2,this.current_encore_id_list[2]),idol4:u(3,this.current_encore_id_list[3]),idol5:u(4,this.current_encore_id_list[4]),perfect:d()?"p":"-",guard:h()?"g":"-"}}},{key:"update",value:function(e,t,a){var n=this,i=this.state.skills;i[e-1]=t,this.setState({skills:i}),this.last_activated_skill_id=-1,this.current_encore_id_list=[-1,-1,-1,-1,-1];var c=Object(l.a)(Array(2*a)).map((function(e,t){return t/2}));this.data=c.map((function(e){return n.updateTimeLine(e,i,a)}))}},{key:"changeName",value:function(e,t){var a=Object(b.a)(Object(b.a)({},this.state.skills[e-1]),{},{name:t});this.update(e,a,this.state.music_time)}},{key:"changeInterval",value:function(e,t){var a=Object(b.a)(Object(b.a)({},this.state.skills[e-1]),{},{interval:t});this.update(e,a,this.state.music_time)}},{key:"changeTime",value:function(e,t){var a=Object(b.a)(Object(b.a)({},this.state.skills[e-1]),{},{time:t});this.update(e,a,this.state.music_time)}},{key:"render",value:function(){return this.idolsData={idol1:Object(p.jsx)(C,{skill:this.state.skills[0],id:1,changeName:this.changeName,changeInterval:this.changeInterval,changeTime:this.changeTime}),idol2:Object(p.jsx)(C,{skill:this.state.skills[1],id:2,changeName:this.changeName,changeInterval:this.changeInterval,changeTime:this.changeTime}),idol3:Object(p.jsx)(C,{skill:this.state.skills[2],id:3,changeName:this.changeName,changeInterval:this.changeInterval,changeTime:this.changeTime}),idol4:Object(p.jsx)(C,{skill:this.state.skills[3],id:4,changeName:this.changeName,changeInterval:this.changeInterval,changeTime:this.changeTime}),idol5:Object(p.jsx)(C,{skill:this.state.skills[4],id:5,changeName:this.changeName,changeInterval:this.changeInterval,changeTime:this.changeTime})},Object(p.jsxs)("p",{children:[Object(p.jsx)(O,{columns:[{Header:"\u30a2\u30a4\u30c9\u30eb4\u7279\u6280",accessor:"idol4"},{Header:"\u30a2\u30a4\u30c9\u30eb2\u7279\u6280",accessor:"idol2"},{Header:"\u30a2\u30a4\u30c9\u30eb1\u7279\u6280",accessor:"idol1"},{Header:"\u30a2\u30a4\u30c9\u30eb3\u7279\u6280",accessor:"idol3"},{Header:"\u30a2\u30a4\u30c9\u30eb5\u7279\u6280",accessor:"idol5"}],data:[this.idolsData]}),"\u697d\u66f2\u6642\u9593\uff08\u6b8b\u308a3\u79d2\u672a\u6e80\u306b\u306a\u308b\u3068\u7279\u6280\u304c\u767a\u52d5\u3057\u306a\u3044\uff09",Object(p.jsx)("input",{type:"number",id:"music_time",name:"music_time",onChange:this.handleChangeMusicTime,value:this.state.music_time}),Object(p.jsx)(g,{columns:[{Header:"start",accessor:"start"},{Header:"4",accessor:"idol4"},{Header:"2",accessor:"idol2"},{Header:"1",accessor:"idol1"},{Header:"3",accessor:"idol3"},{Header:"5",accessor:"idol5"},{Header:"perfect",accessor:"perfect"},{Header:"guard",accessor:"guard"}],data:this.data})]})}}]),a}(i.a.Component),I={time_a:3,time_b:4.5,time_c:6,time_d:7.5,time_e:9};var N=function(){var e=i.a.useState([""]),t=Object(s.a)(e,2),a=t[0],n=t[1],c=function(e){a.includes(e.target.value)?n(a.filter((function(t){return t!==e.target.value}))):n([].concat(Object(l.a)(a),[e.target.value]))},r=["\u30ec\u30be\u30ca\u30f3\u30b9"],o=function(e){var t=e.id,a=e.value,n=e.checked,i=void 0!==n&&n,c=e.onChange;return Object(p.jsx)("input",{type:"checkbox",id:t,name:"center",checked:i,onChange:c,value:a})},d=function(){return Object(p.jsx)(p.Fragment,{children:r.map((function(e,t){return t+=1,Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("label",{htmlFor:"resonance",children:e}),Object(p.jsx)(o,{id:"id_".concat(t),value:e,onChange:c,checked:a.includes(e)})]})}))})};return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("p",{children:"\u30a2\u30a4\u30c9\u30eb\u30de\u30b9\u30bf\u30fc\u30b9\u30bf\u30fc\u30ea\u30c3\u30c8\u30b7\u30fc\u30ba\u30f3\u597d\u8a55\u767a\u58f2\u4e2d\uff01"}),Object(p.jsx)("p",{children:"\u30b7\u30f3\u30c7\u30ec\u30e9\u30ac\u30fc\u30eb\u30ba\u7dcf\u9078\u6319\u3067\u306f\u5c0f\u65e9\u5ddd\u7d17\u679d\u306b\u6295\u7968\u3057\u3066\u304f\u308c\u307e\u3059\u3088\u306d"}),Object(p.jsx)("p",{children:"\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0 \u306f SR \u30d1\u30fc\u30d5\u30a7\u30af\u30c8\u30b5\u30dd\u30fc\u30c8 \u3068\u540c\u3058"}),Object(p.jsx)("p",{children:"\u30c8\u30ea\u30b3\u30ed\u30fc\u30eb\u30fb\u30b7\u30f3\u30d5\u30a9\u30cb\u30fc \u306f \u30b9\u30ad\u30eb\u30d6\u30fc\u30b9\u30c8 \u3068\u540c\u3058"}),Object(p.jsx)("p",{children:"\u672a\u5bfe\u5fdc\uff1a\u30ec\u30be\u30ca\u30f3\u30b9, \u30b0\u30e9\u30f3\u30c9\u30e9\u30a4\u30d6, \u5f37\u5236\u30d1\u30fc\u30d5\u30a7\u30af\u30c8\u7387\u8a08\u7b97, \u5f37\u5236\u30d1\u30fc\u30d5\u30a7\u30af\u30c8\u6642\u9593\u8a08\u7b97, \u5f37\u5236\u30d1\u30fc\u30d5\u30a7\u30af\u30c8 + \u30c0\u30e1\u30fc\u30b8\u30ac\u30fc\u30c9\u7387\u8a08\u7b97, \u5f37\u5236\u30d1\u30fc\u30d5\u30a7\u30af\u30c8 + \u30c0\u30c3\u30e1\u30fc\u30b8\u30ac\u30fc\u30c9\u6642\u9593\u8a08\u7b97"}),r.map((function(e,t){return 1,Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(d,{})})})),Object(p.jsx)("p",{}),Object(p.jsx)(T,{})]})})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root")),H()}},[[26,1,2]]]);
//# sourceMappingURL=main.6322b1a9.chunk.js.map
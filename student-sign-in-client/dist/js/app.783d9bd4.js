(function(t){function e(e){for(var r,c,a=e[0],s=e[1],o=e[2],l=0,f=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&f.push(u[c][0]),u[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);i&&i(e);while(f.length)f.shift()();return d.push.apply(d,o||[]),n()}function n(){for(var t,e=0;e<d.length;e++){for(var n=d[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==u[s]&&(r=!1)}r&&(d.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},u={app:0},d=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var o=0;o<a.length;o++)e(a[o]);var i=s;d.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0138":function(t,e,n){},"04bf":function(t,e,n){},1085:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFbklEQVRoge2ZXWwUVRTH/+fOlmLodnflm21LadFFSniBQIg+wINVwwMNRo3xVYmEJ8OHgBiNCgZbJDEq5cnExERNIG2iwfigJCompphoaRoSaguUBdrU7c7SStm55/iwW/e7e2c7DQ9yksmcmdxz7/8399yPmQEe2AP7fxu5KbzxZzsCja8Jsn4uxAjoT1h4vueJ2sumMcpNA8TonCvxAECQ9cTodBNjDLD5fGwbRLa6l+XSRLZu/DFm3I4xABO9VZki90aWZdxW2TGw86ZsF8FpAcKzk+XahkHY1bWczs1UqGwPsKDzPogHgDoITpcrZJJCdR6IqdTqyxUwmkYXHB08JIJjIqlrSTupk8Dkfn4ZAzuMY5H3yxXymdREQokMqiDDbe4TpcQTEUSMQGwTbUYAQmQTVS6+mD8Nkt1TuY16CKCIbJB34kv5OSBKvARgW0gVpMGcgnjZA1DKJlBBQ9MgRAIRb0EEkvAMoMqnbEeXb3QaxIueEu1hCkE5CeLpopUP2HzA4uXTVj3fOwDLmW8zaUPB5pYCyZxz66o2AjBudeGJaBIQ32wWMxf39b23m40erlkKAVAKCREKzdz93vgEs/x3BUAgG4RQqZXV45loDgAU2TB48mYDtazvPYAiJNiDPZBRTwl7DwB4ux+auaeU0SLmCsA0hWa1W2UNAkMA7wGgYCuZgz2QAGAHwg7AGhABMU94DkBZKeRuZZ3B1xrCScxL3sVTI714cvQSWuwo6u6MvVS1pfU50TwszL8LO12jU2NdLX199yoGsAgJSaOUEuZmDyROEtD38MzIHzg0cA4Nk2MQZggLRLgKQBWACIAIhF5cZD08cHvd4weWXvrlbLYu488qQsomIqQOwMRXKuUrhfQ5dQ2dhM+5iyMD36Cz/0s03I2ZSGgGcObmmi3tkqXbGIAUEhlxszg4CSVJHBz8Dq9EfzVtPqODZN+tyKb/3pWNARTBdvP0i/oQgDWeHu3Fy9ELrsVn2YFo84Y2VwCWSg3i6TSoBASiMU9P4eDQ94X1R1aDArUF91UwAN/aSKEgog/7WlrmmX/cFeSMgfz8NgJhjdaxvoKctx5djZqPjqPm5DFQKJgRHwoi0HkCoc8+hq9lTb6iVYHJqh3mg9iaOYVyB2qRnoKAwGgd6y+om2+PQF+/AWvVSvhPHoUKBaFCQdR+0g6reRWcq8PgGzcL4ghqh/E0KppspVJh6TtGfmbNYGgI1k0UCpG4jYl9b2JB+zuwmhrhP9UBOA6sxgbooWuI794LHo8Xk7XRuAdqHiLX02hO/qexlkzdKf6AxuO4s/cI9NXrsOpWpMRfjyL+6l7w2N8lVEnYGGDhikBi1rOQ67fO9PtmaWNjgPPbyFGKJisWrwikFEaq/UXrp2AANSfeg7WyHnr4BvTQNVj1YQROdUAtWlhKVtTdL6b0WpA/YM1WZQukLPT5VxTWG6jFgo53YTU1Qg9eRWL3fiT27IceGILV2IDApx1QwUBBnEB6XAKogWIi82eeolOrsqCUwg+L1xbUq5YugVUfTol/7Q1wbBwcG4e9Zz/0wCB8K+ugwsuLKep2lZUtX0xugvDnAkRKf2XIv86UE2cKamoS3T+1o35iFGBJb+AY1iNN0NFb4FgcohlgDdEMqvWDli5GsrcfYIZonYrR/Fes+p/H3H/M8cAS21/YKcJnsgGQPgtLDoBMi9acA8Ca28JXerpdpZBX5v/2q7MQ6ZhFFcfDV3q6AZf/ib00/+Z1rwPS7jaOgA+WXf7tcNb1/TW79dk2Zt0O5tUzphDzFWG9b1nvhe7s+PsOAACyYVdVPHCrTZh3CMsG0VwH1hDmYXH0RWHpWqwS3XTxYjI/9l87Q1Cb6kaUIQAAAABJRU5ErkJggg=="},"34fc":function(t,e,n){"use strict";n("4e82")},"4e82":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),u={id:"app"},d=Object(r["f"])("h1",null,"Student Sign In",-1);function c(t,e,n,c,a,s){var o=Object(r["m"])("new-student-form"),i=Object(r["m"])("student-table"),l=Object(r["m"])("student-message");return Object(r["i"])(),Object(r["e"])("div",u,[d,Object(r["g"])(o,{onStudentAdded:s.newStudentAdded},null,8,["onStudentAdded"]),Object(r["g"])(i,{students:a.students,onStudentArrivedOrLeft:s.studentArrivedOrLeft,onDeleteStudent:s.studentDeleted},null,8,["students","onStudentArrivedOrLeft","onDeleteStudent"]),Object(r["g"])(l,{student:a.mostRecentStudent},null,8,["student"])])}n("a15b");var a={key:0,class:"alert alert-danger"},s={class:"card add-student m-2 p-2"},o=Object(r["f"])("h4",{class:"card-title"},"Add new student",-1),i={class:"form-group"},l=Object(r["f"])("label",{for:"name"},"Name",-1),f={class:"form-group"},b=Object(r["f"])("label",{for:"starID"},"Star ID",-1);function p(t,e,n,u,d,c){return Object(r["i"])(),Object(r["e"])("div",null,[d.errors.length>0?(Object(r["i"])(),Object(r["e"])("div",a,[Object(r["f"])("ul",null,[(Object(r["i"])(!0),Object(r["e"])(r["a"],null,Object(r["l"])(d.errors,(function(t){return Object(r["i"])(),Object(r["e"])("li",{key:t},Object(r["n"])(t),1)})),128))])])):Object(r["d"])("",!0),Object(r["f"])("div",s,[o,Object(r["f"])("div",i,[l,Object(r["r"])(Object(r["f"])("input",{id:"name",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=function(t){return d.newStudentName=t})},null,512),[[r["p"],d.newStudentName,void 0,{trim:!0}]])]),Object(r["f"])("div",f,[b,Object(r["r"])(Object(r["f"])("input",{id:"starID",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=function(t){return d.newStarID=t})},null,512),[[r["p"],d.newStarID,void 0,{trim:!0}]])]),Object(r["f"])("button",{class:"btn btn-primary",onClick:e[2]||(e[2]=function(){return c.addStudent&&c.addStudent.apply(c,arguments)})},"Add")])])}var O={name:"NewStudentForm",emits:["student-added"],data:function(){return{newStudentName:"",newStarID:"",errors:[]}},methods:{addStudent:function(){if(this.errors=[],this.newStudentName||this.errors.push("Student name is required"),this.newStarID||this.errors.push("StarID is required"),0==this.errors.length){var t={name:this.newStudentName,starID:this.newStarID,present:!1};this.$emit("student-added",t),this.newStudentName="",this.newStarID=""}}}},m=n("6b0d"),h=n.n(m);const j=h()(O,[["render",p]]);var A=j,S={class:"card student-list m-2 p-2"},g=Object(r["f"])("h4",{class:"card-title"},"Student List",-1),v={class:"edit-table-toggle form-check"},w=Object(r["f"])("label",{for:"edit-table",class:"form-check-table"},"edit-table?",-1),D={id:"student-table"},y={class:"table"},k=Object(r["f"])("th",null,"Name",-1),I=Object(r["f"])("th",null,"StarID",-1),U=Object(r["f"])("th",null,"Present?",-1);function B(t,e,n,u,d,c){var a=Object(r["m"])("student-row");return Object(r["i"])(),Object(r["e"])("div",null,[Object(r["f"])("div",S,[g,Object(r["f"])("div",v,[Object(r["r"])(Object(r["f"])("input",{type:"checkbox",id:"edit-table",class:"form-chcek-input","onUpdate:modelValue":e[0]||(e[0]=function(t){return d.editTable=t})},null,512),[[r["o"],d.editTable]]),w]),Object(r["f"])("div",D,[Object(r["f"])("table",y,[Object(r["f"])("tr",null,[k,I,U,Object(r["r"])(Object(r["f"])("th",null,"Delete",512),[[r["q"],d.editTable]])]),(Object(r["i"])(!0),Object(r["e"])(r["a"],null,Object(r["l"])(n.students,(function(t){return Object(r["i"])(),Object(r["c"])(a,{student:t,key:t.starID,edit:d.editTable,onStudentArrivedOrLeft:c.arrivedOrLeft,onDeleteStudent:c.deleteStudent},null,8,["student","edit","onStudentArrivedOrLeft","onDeleteStudent"])})),128))])])])])}n("b0c0");var T=n("1085"),R=n.n(T),L=["checked"];function Q(t,e,n,u,d,c){return Object(r["i"])(),Object(r["e"])("tr",{class:Object(r["h"])({present:n.student.present,absent:!n.student.present})},[Object(r["f"])("td",null,Object(r["n"])(n.student.name),1),Object(r["f"])("td",null,Object(r["n"])(n.student.starID),1),Object(r["f"])("td",null,[Object(r["f"])("input",{type:"checkbox",checked:n.student.present,onChange:e[0]||(e[0]=function(t){return c.arrivedOrLeft(n.student,t.srcElement.checked)})},null,40,L)]),Object(r["r"])(Object(r["f"])("td",null,[Object(r["f"])("img",{onClick:e[1]||(e[1]=function(){return c.deleteStudent&&c.deleteStudent.apply(c,arguments)}),src:R.a})],512),[[r["q"],n.edit]])],2)}var x={name:"StudentRow",props:{student:Object,edit:Boolean},emits:["student-arrived-or-left","delete-student"],methods:{arrivedOrLeft:function(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent:function(){confirm("Delete ".concat(this.student.name,"?"))&&this.$emit("delete-student",this.student)}}};n("34fc");const W=h()(x,[["render",Q],["__scopeId","data-v-12a9b227"]]);var N=W,P={name:"StudentTable",components:{StudentRow:N},emits:["student-arrived-or-left","delete-student"],props:{students:Array},data:function(){return{editTable:!1}},methods:{arrivedOrLeft:function(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent:function(t){this.$emit("delete-student",t)}}};n("9d70");const q=h()(P,[["render",B]]);var V=q,C={key:0,class:"alert alert-primary"},G={key:1,class:"alert alert-secondary"};function M(t,e,n,u,d,c){return Object(r["i"])(),Object(r["e"])("div",null,[Object(r["r"])(Object(r["f"])("div",null,[n.student.present?(Object(r["i"])(),Object(r["e"])("div",C," Welcome, "+Object(r["n"])(n.student.name),1)):(Object(r["i"])(),Object(r["e"])("div",G," Goodbye, "+Object(r["n"])(n.student.name)+". See you later! ",1))],512),[[r["q"],n.student.name]])])}var Z={name:"StudentMessage",props:{student:Object}};const E=h()(Z,[["render",M]]);var Y=E,J={name:"App",components:{NewStudentForm:A,StudentTable:V,StudentMessage:Y},data:function(){return{students:[],mostRecentStudent:{}}},mounted:function(){this.updateStudents()},methods:{updateStudents:function(){var t=this;this.$student_api.getAllStudents().then((function(e){t.students=e})).catch((function(){return alert("Unable to fetch student list")}))},newStudentAdded:function(t){var e=this;this.$student_api.addStudent(t).then((function(){e.updateStudents()})).catch((function(t){var e=t.response.data.join(",");alert("Error adding student\n"+e)}))},studentArrivedOrLeft:function(t,e){var n=this;t.present=e,this.$student_api.updateStudent(t).then((function(){n.mostRecentStudent=t,n.updateStudents()})).catch((function(){return alert("Unable to update student list")}))},studentDeleted:function(t){var e=this;this.$student_api.deleteStudent(t.id).then((function(){e.updateStudents(),e.mostRecentStudent={}})).catch((function(){return alert("Unable to delete student list")}))}}};n("84ee");const K=h()(J,[["render",c]]);var z=K,X=n("bc3a"),F=n.n(X),H="/api/students",_={getAllStudents:function(){return F.a.get(H).then((function(t){return t.data}))},addStudent:function(t){return F.a.post(H,t).then((function(t){return t.data}))},updateStudent:function(t){return F.a.patch("".concat(H,"/").concat(t.id),t).then((function(t){return t.data}))},deleteStudent:function(t){return F.a.delete("".concat(H,"/").concat(t)).then((function(t){return t.data}))}},$=Object(r["b"])(z);$.config.globalProperties.$student_api=_,$.mount("#app")},"84ee":function(t,e,n){"use strict";n("04bf")},"9d70":function(t,e,n){"use strict";n("0138")}});
//# sourceMappingURL=app.783d9bd4.js.map
"use strict";(self.webpackChunknasa=self.webpackChunknasa||[]).push([[150],{3150:(O,u,o)=>{o.r(u),o.d(u,{AdminNKModule:()=>M});var N=o(6870),c=o(1567),t=o(5879),T=o(553),p=o(9862);let m=(()=>{class a{findLstNK(e){return this.http.get(`${this.apiUrl}?name=${e}`)}findCrrNk(e){return this.http.get(`${this.apiUrl}?name=${e}`)}updateCrrNk(e,i){return this.http.put(`${this.apiUrl}/${e}`,i).subscribe(n=>{})}constructor(e){this.http=e,this.apiUrl=`${T.N.apiURL}/entities`}static#t=this.\u0275fac=function(i){return new(i||a)(t.LFG(p.eN))};static#e=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var D=o(9711);let b=(()=>{class a{constructor(e){this.adminNKService=e,this.items=[],this.path="",this.category="nhom-kinh",this.columnConfig=[{key:"title",header:"T\xean s\u1ea3n ph\u1ea9m"}]}ngOnInit(){this.adminNKService.findLstNK("NHOM_KINH").subscribe(e=>{this.items=JSON.parse(e?.[0]?.data),this.path=e[0].name})}onClick(){}static#t=this.\u0275fac=function(i){return new(i||a)(t.Y36(m))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-nk-lst"]],decls:4,vars:4,consts:[[1,"create-btn"],[1,"uppercase","my-10","text-xl"],[3,"displayedColumns","data","category","path"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"Danh m\u1ee5c nh\xf4m k\xednh"),t.qZA()(),t._UZ(3,"app-table",2)),2&i&&(t.xp6(3),t.Q6J("displayedColumns",n.columnConfig)("data",n.items)("category",n.category)("path",n.path))},dependencies:[D.a]})}return a})();var v=o(7930),Z=o.n(v),l=o(95),h=o(9e3),g=o(6814),d=o(1628),k=o(5971),A=o(4009),_=o(9545),f=o(4634),C=o(9299);function y(a,z){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td",20),t._UZ(2,"img",21),t.qZA(),t.TgZ(3,"td")(4,"textarea",22),t._uU(5),t.qZA()(),t.TgZ(6,"td")(7,"button",23),t.NdJ("click",function(){const s=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.showDeleteConfirm(s))}),t._uU(8,"Xo\xe1"),t.qZA()()()}if(2&a){const e=z.$implicit;t.xp6(2),t.Q6J("src",e,t.LSH),t.xp6(3),t.Oqu(e)}}function S(a,z){if(1&a){const e=t.EpF();t.ynx(0),t.TgZ(1,"nz-table",10,11)(3,"thead")(4,"tr")(5,"th"),t._uU(6,"\u1ea2nh"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"URL"),t.qZA()()(),t.TgZ(9,"tbody")(10,"tr")(11,"td",20),t._UZ(12,"img",24),t.qZA(),t.TgZ(13,"td")(14,"textarea",25),t.NdJ("ngModelChange",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s.newImageSrc=n)}),t.qZA()()()()(),t.BQk()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("nzData",e.dataImg)("nzShowPagination",!1),t.xp6(11),t.Q6J("src",e.newImageSrc,t.LSH),t.xp6(2),t.Q6J("ngModel",e.newImageSrc)}}const E=c.Bz.forChild([{path:"",component:b},{path:":name",component:(()=>{class a{constructor(e,i,n,s,r){this.fb=e,this.activatedRoute=i,this.adminNKService=n,this.http=s,this.modal=r,this.Editor=Z(),this.model={editorData:""},this.isDisableDesc=!0,this.isDisableUrlImg=!0,this.isDisableDescDetail=!0,this.newImageSrc="",this.name="",this.data={id:"",content:"",desc:"",image:"",imageLst:[],path:"",title:""},this.dataImg=[],this.introduce=[],this.idCrrSmt=0,this.isVisible=!1}buildForm(){this.formDesc=this.fb.group({name:[this.data.title],desc:[this.data.desc]})}ngOnInit(){this.buildForm(),this.name=this.activatedRoute.snapshot.params.name,this.findCrrNk()}findCrrNk(){this.adminNKService.findLstNK(this.name).subscribe(e=>{let i=JSON.parse(e?.[0]?.data);this.data=i,this.dataImg=i.imageLst,this.introduce=i.content,this.idCrrSmt=e[0].id,this.model.editorData=this.data.content})}onSave(){let e={...this.data,title:this.formDesc.value.name||this.data.title,desc:this.formDesc.value.desc||this.data.desc};this.updateCrrSmt(e)}updateCrrSmt(e){let i={name:this.name,data:JSON.stringify(e)};this.adminNKService.updateCrrNk(this.idCrrSmt,i)}onSaveDesc(){let e={...this.data,content:this.model.editorData};this.updateCrrSmt(e)}showModal(){this.isVisible=!0}handleOk(){let e={...this.data,imageLst:[...this.data.imageLst,this.newImageSrc]};this.updateCrrSmt(e),this.findCrrNk(),this.isVisible=!1}handleCancel(){this.isVisible=!1}showDeleteConfirm(e){this.modal.confirm({nzTitle:"B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n xo\xe1 \u1ea3nh n\xe0y?",nzOkText:"Yes",nzOkType:"primary",nzOkDanger:!0,nzOnOk:()=>{let i=this.dataImg.filter(s=>s!==e),n={...this.data,imageLst:i};this.updateCrrSmt(n),this.findCrrNk()},nzCancelText:"No",nzOnCancel:()=>{}})}static#t=this.\u0275fac=function(i){return new(i||a)(t.Y36(l.qu),t.Y36(c.gz),t.Y36(m),t.Y36(p.eN),t.Y36(h.Sf))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-nk-detail"]],decls:39,vars:13,consts:[["nzTitle","M\xf4 t\u1ea3 ng\u1eafn"],[3,"formGroup"],[1,"btn","text-end"],["nz-button","","nzType","primary",1,"m-3",3,"disabled","click"],[1,"font-bold","my-3"],["type","text","formControlName","name",1,"my-3","w-full",3,"value","ngModelChange"],["formControlName","desc",1,"w-full","my-3",3,"value","ngModelChange"],["nzTitle","\u1ea2nh minh ho\u1ea1"],["nz-button","","nzType","primary",1,"m-3",3,"disabled"],["nz-button","","nzType","primary",1,"my-3",3,"click"],["nzSize","middle",3,"nzData","nzShowPagination"],["middleTable",""],[4,"ngFor","ngForOf"],[1,"modalCrete"],["nzTitle","Th\xeam \u1ea3nh minh ho\u1ea1",3,"nzVisible","nzVisibleChange","nzOnCancel","nzOnOk"],[4,"nzModalContent"],["nzTitle","M\xf4 t\u1ea3 chi ti\u1ebft"],["nz-button","","nzType","primary",1,"my-3",3,"disabled","click"],[3,"ngModel","editor","ngModelChange"],[3,"innerHTML"],[2,"width","20%"],["alt","\u1ea3nh kh\xf4ng t\u1ed3n t\u1ea1i",2,"width","100px","height","auto",3,"src"],[1,"w-full"],["nz-button","","nzSize","large","nzType","primary",3,"click"],["alt","",2,"width","100px","height","auto",3,"src"],[1,"w-full","border","border-1","border-solid","p-2",3,"ngModel","ngModelChange"]],template:function(i,n){1&i&&(t.TgZ(0,"nz-tabset")(1,"nz-tab",0)(2,"form",1)(3,"div",2)(4,"button",3),t.NdJ("click",function(){return n.onSave()}),t._uU(5,"L\u01b0u"),t.qZA()(),t.TgZ(6,"label",4),t._uU(7,"T\xean s\u1ea3n ph\u1ea9m"),t.qZA(),t.TgZ(8,"input",5),t.NdJ("ngModelChange",function(){return n.isDisableDesc=!1}),t.qZA(),t.TgZ(9,"label",4),t._uU(10,"M\xf4 t\u1ea3 ng\u1eafn"),t.qZA(),t.TgZ(11,"textarea",6),t.NdJ("ngModelChange",function(){return n.isDisableDesc=!1}),t.qZA()()(),t.TgZ(12,"nz-tab",7)(13,"div",2)(14,"button",8),t._uU(15,"L\u01b0u"),t.qZA(),t.TgZ(16,"button",9),t.NdJ("click",function(){return n.showModal()}),t._uU(17,"Th\xeam"),t.qZA()(),t.TgZ(18,"nz-table",10,11)(20,"thead")(21,"tr")(22,"th"),t._uU(23,"\u1ea2nh"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"URL"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"T\xe1c v\u1ee5"),t.qZA()()(),t.TgZ(28,"tbody"),t.YNc(29,y,9,2,"tr",12),t.qZA()(),t.TgZ(30,"div",13)(31,"nz-modal",14),t.NdJ("nzVisibleChange",function(r){return n.isVisible=r})("nzOnCancel",function(){return n.handleCancel()})("nzOnOk",function(){return n.handleOk()}),t.YNc(32,S,15,4,"ng-container",15),t.qZA()()(),t.TgZ(33,"nz-tab",16)(34,"div",2)(35,"button",17),t.NdJ("click",function(){return n.onSaveDesc()}),t._uU(36,"L\u01b0u"),t.qZA()(),t.TgZ(37,"ckeditor",18),t.NdJ("ngModelChange",function(r){return n.model.editorData=r})("ngModelChange",function(){return n.isDisableDescDetail=!1}),t.qZA(),t._UZ(38,"div",19),t.qZA()()),2&i&&(t.xp6(2),t.Q6J("formGroup",n.formDesc),t.xp6(2),t.Q6J("disabled",n.isDisableDesc),t.xp6(4),t.Q6J("value",n.data.title),t.xp6(3),t.Q6J("value",n.data.desc),t.xp6(3),t.Q6J("disabled",n.isDisableUrlImg),t.xp6(4),t.Q6J("nzData",n.dataImg)("nzShowPagination",!1),t.xp6(11),t.Q6J("ngForOf",n.dataImg),t.xp6(2),t.Q6J("nzVisible",n.isVisible),t.xp6(4),t.Q6J("disabled",n.isDisableDescDetail),t.xp6(2),t.Q6J("ngModel",n.model.editorData)("editor",n.Editor),t.xp6(1),t.Q6J("innerHTML",n.model.editorData,t.oJD))},dependencies:[g.sg,d.N8,d.Uo,d._C,d.Om,d.p0,d.$Z,k.ix,A.w,_.dQ,f.xH,f.xw,h.du,h.Hf,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,C.u,l.On]})}return a})()}]);let M=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({providers:[m],imports:[g.ez,E,N.m,C.d,l.u5]})}return a})()}}]);
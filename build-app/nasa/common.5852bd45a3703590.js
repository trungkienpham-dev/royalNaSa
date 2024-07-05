"use strict";(self.webpackChunknasa=self.webpackChunknasa||[]).push([[592],{6652:(m,h,u)=>{u.d(h,{c:()=>c});var t=u(5879),n=u(1567),l=u(6873);let c=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-category-page-layout"]],decls:7,vars:0,consts:[[1,"bg-white","grid","grid-cols-12","items-center","py-3",2,"min-height","81vh"],[1,"col-span-2"],[1,"col-span-2","text-white","h-full","py-3"],[1,"col-span-6","h-full"]],template:function(s,d){1&s&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"app-category-product"),t.qZA(),t.TgZ(4,"div",3),t._UZ(5,"router-outlet"),t.qZA(),t._UZ(6,"div",1),t.qZA())},dependencies:[n.lC,l.j]})}return e})()},2234:(m,h,u)=>{u.d(h,{X:()=>d});var t=u(5879),n=u(1567),l=u(553),c=u(9862);let e=(()=>{class r{findLst(i){return this.http.get(`${this.apiUrl}?name=${i}`)}constructor(i){this.http=i,this.apiUrl=`${l.N.apiURL}/entities`}static#t=this.\u0275fac=function(o){return new(o||r)(t.LFG(c.eN))};static#n=this.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var A=u(6814);function E(r,g){if(1&r){const i=t.EpF();t.TgZ(0,"div",10),t.NdJ("click",function(){const p=t.CHM(i).$implicit,_=t.oxw();return t.KtG(_.onDetailSMT(p))}),t.TgZ(1,"div",11),t._UZ(2,"img",12),t.qZA(),t.TgZ(3,"div",13),t._uU(4),t.qZA()()}if(2&r){const i=g.$implicit;t.xp6(2),t.Q6J("src",i.img,t.LSH),t.xp6(2),t.hij(" ",i.title," ")}}function s(r,g){if(1&r){const i=t.EpF();t.TgZ(0,"div",10),t.NdJ("click",function(){const p=t.CHM(i).$implicit,_=t.oxw();return t.KtG(_.onDetailNK(p))}),t.TgZ(1,"div",11),t._UZ(2,"img",12),t.qZA(),t.TgZ(3,"div",13),t._uU(4),t.qZA()()}if(2&r){const i=g.$implicit;t.xp6(2),t.Q6J("src",i.img,t.LSH),t.xp6(2),t.hij(" ",i.title," ")}}let d=(()=>{class r{constructor(i,o){this.router=i,this.allProductService=o,this.lstSMT=[],this.lstNK=[]}ngOnInit(){this.getListSMT(),this.getListNK()}getListSMT(){this.allProductService.findLst("SAT_MY_THUAT").pipe().subscribe(i=>{let o=JSON.parse(i?.[0]?.data);this.lstSMT=o})}getListNK(){this.allProductService.findLst("NHOM_KINH").pipe().subscribe(i=>{let o=JSON.parse(i?.[0]?.data);this.lstNK=o})}onDetailSMT(i){this.router.navigate([`category/sat-my-thuat/${i.name}`])}onDetailNK(i){this.router.navigate([`category/nhom-kinh/${i.name}`])}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(n.F0),t.Y36(e))};static#n=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-product-list"]],decls:21,vars:2,consts:[[1,"grid","grid-cols-12"],[1,"col-span-2"],[1,"col-span-8"],[1,"outstanding-product"],[1,"tit-page","my-10"],[1,"text-2xl","text-start","uppercase","font-bold","mb-3"],[1,"underline",2,"border-top","3px solid #F08E33","width","10%"],[1,"text-l","uppercase","font-bold","mt-3"],[1,"underline",2,"border-top","3px solid #F08E33","width","5%"],["class","col-span-3 m-3 grid grid-rows-3 cursor-pointer","style","height: 300px;",3,"click",4,"ngFor","ngForOf"],[1,"col-span-3","m-3","grid","grid-rows-3","cursor-pointer",2,"height","300px",3,"click"],[1,"row-span-2"],["alt","",2,"width","100%","height","100%","overflow","hidden",3,"src"],[1,"row-span-1","bg-slate-200","flex","flex-col","justify-center","text-center","uppercase","text-xl","text-bold"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._uU(6,"Danh m\u1ee5c s\u1ea3n ph\u1ea9m"),t.qZA(),t._UZ(7,"div",6),t.qZA(),t.TgZ(8,"div")(9,"div",7),t._uU(10,"s\u1eaft m\u1ef9 thu\u1eadt"),t.qZA(),t._UZ(11,"div",8),t.TgZ(12,"div",0),t.YNc(13,E,5,2,"div",9),t.qZA()(),t.TgZ(14,"div")(15,"div",7),t._uU(16,"nh\xf4m k\xednh"),t.qZA(),t._UZ(17,"div",8),t.TgZ(18,"div",0),t.YNc(19,s,5,2,"div",9),t.qZA()()(),t._UZ(20,"div",1),t.qZA()()),2&o&&(t.xp6(13),t.Q6J("ngForOf",a.lstSMT),t.xp6(6),t.Q6J("ngForOf",a.lstNK))},dependencies:[A.sg]})}return r})()},9376:(m,h,u)=>{u.d(h,{H:()=>c});var t=u(5879),n=u(4167),l=u(4009);let c=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-commit"]],decls:50,vars:0,consts:[[1,"grid","grid-cols-12"],[1,"col-span-2"],[1,"col-span-8"],[1,"grid","grid-cols-5","my-16"],["src","https://cokhivn.com.vn/wp-content/uploads/2021/02/gioi-thieu-co-khi-vn.jpg","alt","",2,"border","15px #fff solid"],[1,"col-span-3"],[1,"uppercase","text-2xl","font-normal","py-10","px-20"],[1,"px-20","font-light","text-l"],[1,"my-16"],[1,"text-xl","uppercase","font-bold"],[1,"underline",2,"border-top","3px solid #F08E33","width","25%","margin-bottom","30px"],[1,"grid","grid-cols-4","my-10"],[1,"col-span-1","px-5"],[1,"text-center"],["nz-icon","","nzType","bulb","nzTheme","outline",1,"text-6xl","p-5","m-3","hover:bg-orange-500","hover:text-white",2,"border","2px solid #F08E33","border-radius","50%"],[1,"tit","text-center","uppercase","font-light","text-2xl","m-3"],[1,"desc","text-center","text-l"],["nz-icon","","nzType","customer-service","nzTheme","outline",1,"text-6xl","p-5","m-3","hover:bg-orange-500","hover:text-white",2,"border","2px solid #F08E33","border-radius","50%"],["nz-icon","","nzType","heart","nzTheme","outline",1,"text-6xl","p-5","m-3","hover:bg-orange-500","hover:text-white",2,"border","2px solid #F08E33","border-radius","50%"],["nz-icon","","nzType","safety","nzTheme","outline",1,"text-6xl","p-5","m-3","hover:bg-orange-500","hover:text-white",2,"border","2px solid #F08E33","border-radius","50%"],[1,"banner1"],[1,"text-intro"],[1,"text-white","uppercase","font-light"]],template:function(s,d){1&s&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2)(3,"div",3)(4,"div",1),t._UZ(5,"img",4),t.qZA(),t.TgZ(6,"div",5)(7,"p",6),t._uU(8,"C\xd4NG TY TNHH S\u1ea2N XU\u1ea4T & TH\u01af\u01a0NG M\u1ea0I NASA"),t.qZA(),t.TgZ(9,"p",7),t._uU(10," Ch\xfang t\xf4i l\xe0 m\u1ed9t c\xf4ng ty c\u01a1 kh\xed h\xe0ng \u0111\u1ea7u, chuy\xean nghi\xean c\u1ee9u, ph\xe1t tri\u1ec3n v\xe0 s\u1ea3n xu\u1ea5t c\xe1c gi\u1ea3i ph\xe1p k\u1ef9 thu\u1eadt cao c\u1ea5p. \u0110\u1ed9i ng\u0169 k\u1ef9 s\u01b0 t\xe0i n\u0103ng v\xe0 trang thi\u1ebft b\u1ecb hi\u1ec7n \u0111\u1ea1i gi\xfap ch\xfang t\xf4i \u0111\xe1p \u1ee9ng m\u1ecdi y\xeau c\u1ea7u v\u1ec1 gia c\xf4ng c\u01a1 kh\xed v\xe0 s\u1ea3n xu\u1ea5t linh ki\u1ec7n ch\u1ea5t l\u01b0\u1ee3ng. S\u1ef1 cam k\u1ebft v\u1edbi s\u1ef1 \u0111\u1ed5i m\u1edbi v\xe0 ch\u1ea5t l\u01b0\u1ee3ng l\xe0 n\u1ec1n t\u1ea3ng c\u1ee7a ch\xfang t\xf4i, mang \u0111\u1ebfn s\u1ef1 h\xe0i l\xf2ng v\xe0 tin t\u01b0\u1edfng cho m\u1ecdi c\xf4ng tr\xecnh. "),t.qZA()()(),t.TgZ(11,"div",8)(12,"div",9),t._uU(13,"Cam k\u1ebft c\u1ee7a ch\xfang t\xf4i v\u1edbi qu\xfd kh\xe1ch h\xe0ng"),t.qZA(),t._UZ(14,"div",10),t.TgZ(15,"div",11)(16,"div",12)(17,"div",13),t._UZ(18,"span",14),t.qZA(),t.TgZ(19,"div",15),t._uU(20,"s\u1ea3n ph\u1ea9m"),t.qZA(),t.TgZ(21,"div",16),t._uU(22," Ch\xfang t\xf4i cam k\u1ebft \u0111em \u0111\u1ebfn cho qu\xfd kh\xe1ch h\xe0ng nh\u1eefng s\u1ea3n ph\u1ea9m ch\xednh h\xe3ng, \u0111\u1ed9 b\u1ec1n \u1ea5n t\u01b0\u1ee3ng. T\u1ef1 tin \u0111\u1ed3ng h\xe0nh c\xf9ng b\u1ea1n trong m\u1ecdi h\xe0nh tr\xecnh. "),t.qZA()(),t.TgZ(23,"div",12)(24,"div",13),t._UZ(25,"span",17),t.qZA(),t.TgZ(26,"div",15),t._uU(27,"t\u01b0 v\u1ea5n"),t.qZA(),t.TgZ(28,"div",16),t._uU(29,"ch\u1ec9 T\u01b0 v\u1ea5n s\u1ea3n ph\u1ea9m ph\xf9 h\u1ee3p v\u1edbi nhu c\u1ea7u qu\xfd kh\xe1ch h\xe0ng. Kh\xf4ng t\u01b0 v\u1ea5n s\u1ea3n ph\u1ea9m \u0111\u1eaft \u0111\u1ecf n\u1ebfu kh\xe1ch h\xe0ng kh\xf4ng y\xeau c\u1ea7u"),t.qZA()(),t.TgZ(30,"div",12)(31,"div",13),t._UZ(32,"span",18),t.qZA(),t.TgZ(33,"div",15),t._uU(34,"d\u1ecbch v\u1ee5"),t.qZA(),t.TgZ(35,"div",16),t._uU(36,"Cam k\u1ebft ch\u1ea5t l\u01b0\u1ee3ng, k\u1ef9 thu\u1eadt, gi\xe1 c\u1ea3 c\u1ea1nh tranh. \u0110\u1ea3m b\u1ea3o \u0111\xfang ti\u1ebfn \u0111\u1ed9, kh\xf4ng g\xe2y \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn c\xe1c h\u1ea1ng m\u1ee5c kh\xe1c trong c\xf4ng tr\xecnh"),t.qZA()(),t.TgZ(37,"div",12)(38,"div",13),t._UZ(39,"span",19),t.qZA(),t.TgZ(40,"div",15),t._uU(41,"b\u1ea3o h\xe0nh"),t.qZA(),t.TgZ(42,"div",16),t._uU(43,"B\u1ea3o h\xe0nh d\xe0i h\u1ea1n c\xe1c s\u1ea3n ph\u1ea9m \u0111\u01b0\u1ee3c xu\u1ea5t x\u01b0\u1edfng. n\u1ebfu h\u1ebft b\u1ea3o h\xe0nh, V\u1eabn h\u1ed7 tr\u1ee3 s\u1eeda ch\u1eefa, b\u1ea3o tr\xec theo nhu c\u1ea7u c\u1ee7a kh\xe1ch h\xe0ng"),t.qZA()()()()(),t._UZ(44,"div",1),t.qZA(),t.TgZ(45,"div",20)(46,"div",21)(47,"h1",22),t._uU(48,"S\u1ee9 m\u1ec7nh c\u1ee7a ch\xfang t\xf4i \u0111\u1ed1i v\u1edbi kh\xe1ch h\xe0ng l\xe0 ti\xean phong mang \u0111\u1ebfn nh\u1eefng gi\u1ea3i ph\xe1p t\u1ed1t nh\u1ea5t, g\xf3p ph\u1ea7n n\xe2ng t\u1ea7m ch\u1ea5t l\u01b0\u1ee3ng c\xf4ng tr\xecnh."),t.qZA(),t._UZ(49,"br"),t.qZA()())},dependencies:[n.Ls,l.w],styles:[".banner1[_ngcontent-%COMP%]{background-color:#041941;height:25vh;background-position:center;background-repeat:no-repeat;background-size:cover;position:relative}.text-intro[_ngcontent-%COMP%]{text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-size:18px;font-weight:100}"]})}return e})()},4145:(m,h,u)=>{u.d(h,{U:()=>r});var t=u(95),n=u(5879),l=u(2679),c=u(1849),e=u(5971),A=u(4009),E=u(9545),s=u(4344),d=u(6590);let r=(()=>{class g{constructor(o,a){this.fb=o,this.quotationService=a,this.idAPI=0,this.lstQuotation="",this.isDisplayAlertErr="none",this.isDisplayAlertSuccess="none"}buildForm(){this.formQuotation=this.fb.group({name:[null,t.kI.required],phoneNumber:[null,t.kI.required],add:[null,t.kI.required],noteOfCustomer:[null,t.kI.required]})}ngOnInit(){this.buildForm(),this.findListQuotation()}findListQuotation(){this.quotationService.findListQuotation("LIST_QUOTATION").subscribe(o=>{this.idAPI=o[0].id,this.lstQuotation=JSON.parse(o[0].data)})}submitForm(){if("INVALID"==this.formQuotation.status&&(this.isDisplayAlertErr="flex",setTimeout(()=>{this.isDisplayAlertErr="none"},5e3)),"VALID"==this.formQuotation.status){const o={isConnect:!1,...this.formQuotation.value,note:""};let a=[...this.lstQuotation,o];this.createQuotation(a)}}createQuotation(o){let a={name:"LIST_QUOTATION",data:JSON.stringify(o)};this.quotationService.createFormQuotation(this.idAPI,a),this.isDisplayAlertSuccess="flex",setTimeout(()=>{this.isDisplayAlertSuccess="none"},5e3)}static#t=this.\u0275fac=function(a){return new(a||g)(n.Y36(t.qu),n.Y36(l.G))};static#n=this.\u0275cmp=n.Xpm({type:g,selectors:[["app-form"]],decls:37,vars:5,consts:[[1,"quotation","grid","grid-cols-12","my-10"],[1,"col-span-2"],[1,"col-span-8","grid","grid-cols-2"],[1,"img","col-span-1","w-full"],["src","https://nhaxinh.com/wp-content/uploads/2023/12/phong-khach-hien-dai-tre-trung.jpg","alt","",1,"w-full"],[1,"col-span-1","ml-10"],[1,"tit","text-xl","bg-orange-400","text-white","py-3","px-5","text-center"],[1,"form","border-2","boder-solid","py-3","px-5"],["nz-form","",3,"formGroup","ngSubmit"],[2,"min-width","25%","text-align","start"],["nz-input","","formControlName","name",2,"width","100%","height","30px"],["nz-input","","formControlName","phoneNumber",2,"width","100%","height","30px"],["nz-input","","formControlName","add",2,"width","100%","height","30px"],["nz-input","","formControlName","noteOfCustomer",2,"width","100%","height","30px"],["nz-button","","nzType","primary",1,"w-full","my-5",3,"disabled"],[1,"alert","w-1/2","justify-end","fixed","top-3","right-3"],["nzType","error","nzMessage","Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin","nzShowIcon","",1,"w-1/2"],["nzType","success","nzMessage","G\u1eedi th\xf4ng tin b\xe1o gi\xe1 th\xe0nh c\xf4ng!","nzShowIcon","",1,"w-1/2"]],template:function(a,p){1&a&&(n.TgZ(0,"div",0),n._UZ(1,"div",1),n.TgZ(2,"div",2)(3,"div",3),n._UZ(4,"img",4),n.qZA(),n.TgZ(5,"div",5)(6,"div",6),n._uU(7," Nh\u1eadn b\xe1o gi\xe1 t\u1eeb ch\xfang t\xf4i "),n.qZA(),n.TgZ(8,"div",7)(9,"form",8),n.NdJ("ngSubmit",function(){return p.submitForm()}),n.TgZ(10,"nz-form-item")(11,"nz-form-label",9),n._uU(12,"H\u1ecd t\xean"),n.qZA(),n.TgZ(13,"nz-form-control"),n._UZ(14,"input",10),n.qZA()(),n.TgZ(15,"nz-form-item")(16,"nz-form-label",9),n._uU(17,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),n.qZA(),n.TgZ(18,"nz-form-control"),n._UZ(19,"input",11),n.qZA()(),n.TgZ(20,"nz-form-item")(21,"nz-form-label",9),n._uU(22,"\u0110\u1ecba ch\u1ec9 thi c\xf4ng"),n.qZA(),n.TgZ(23,"nz-form-control"),n._UZ(24,"input",12),n.qZA()(),n.TgZ(25,"nz-form-item")(26,"nz-form-label",9),n._uU(27,"Nhu c\u1ea7u t\u01b0 v\u1ea5n"),n.qZA(),n.TgZ(28,"nz-form-control"),n._UZ(29,"textarea",13),n.qZA()(),n.TgZ(30,"button",14),n._uU(31,"\u0110\u0103ng k\xfd"),n.qZA()()()()(),n._UZ(32,"div",1),n.qZA(),n.TgZ(33,"div",15),n._UZ(34,"nz-alert",16),n.qZA(),n.TgZ(35,"div",15),n._UZ(36,"nz-alert",17),n.qZA()),2&a&&(n.xp6(9),n.Q6J("formGroup",p.formQuotation),n.xp6(24),n.Udp("display",p.isDisplayAlertErr),n.xp6(2),n.Udp("display",p.isDisplayAlertSuccess))},dependencies:[c.t3,c.SK,e.ix,A.w,E.dQ,s.r,d.Lr,d.Nx,d.iK,d.Fd,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u]})}return g})()},2679:(m,h,u)=>{u.d(h,{G:()=>c});var t=u(553),n=u(5879),l=u(9862);let c=(()=>{class e{findListQuotation(E){return this.http.get(`${this.apiUrl}?name=${E}`)}createFormQuotation(E,s){return this.http.put(`${this.apiUrl}/${E}`,s).subscribe(d=>{})}constructor(E){this.http=E,this.apiUrl=`${t.N.apiURL}/entities`}static#t=this.\u0275fac=function(s){return new(s||e)(n.LFG(l.eN))};static#n=this.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()}}]);
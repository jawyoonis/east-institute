import{_ as m,o as i,c as l,a as T,b as t,F as v,r as w,t as d,w as _,e as f,v as y,d as u,n as c,g,h as b}from"./index-BOqqPPTq.js";const $={};function E(o,e){return i(),l("section",null,e[0]||(e[0]=[T('<h1 class="text-3xl font-bold mb-6">Dashboard Overview</h1><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><div class="bg-blue-500 text-white p-6 rounded-lg shadow"><h2 class="text-xl font-semibold">Total Students</h2><p class="text-3xl font-bold">5,120</p></div><div class="bg-green-500 text-white p-6 rounded-lg shadow"><h2 class="text-xl font-semibold">Total Courses</h2><p class="text-3xl font-bold">120</p></div><div class="bg-yellow-500 text-white p-6 rounded-lg shadow"><h2 class="text-xl font-semibold">Messages Received</h2><p class="text-3xl font-bold">350</p></div></div>',2)]))}const P=m($,[["render",E]]),S={data(){return{messages:[{id:1,name:"Alice Johnson",email:"alice@example.com",content:"I love the curriculum, but I have a question about enrollment."},{id:2,name:"Mohammed Ahmed",email:"mohammed@example.com",content:"Do you offer in-person workshops as well?"}]}},methods:{deleteMessage(o){this.messages=this.messages.filter(e=>e.id!==o)}}},B={key:0,class:"text-gray-500"},D={key:1,class:"overflow-x-auto"},O={class:"min-w-full bg-white shadow-md rounded-lg"},j={class:"px-6 py-4 border-b border-gray-200 text-sm"},N={class:"px-6 py-4 border-b border-gray-200 text-sm"},V={class:"px-6 py-4 border-b border-gray-200 text-sm"},A={class:"px-6 py-4 border-b border-gray-200 text-sm text-right"},F=["onClick"];function q(o,e,p,h,s,n){return i(),l("section",null,[e[1]||(e[1]=t("h1",{class:"text-3xl font-bold mb-6"},"Contact Messages",-1)),s.messages.length===0?(i(),l("div",B,"No messages available.")):(i(),l("div",D,[t("table",O,[e[0]||(e[0]=t("thead",null,[t("tr",null,[t("th",{class:"px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"}," Name "),t("th",{class:"px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"}," Email "),t("th",{class:"px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"}," Message "),t("th",{class:"px-6 py-3 border-b-2 border-gray-200 bg-gray-100"})])],-1)),t("tbody",null,[(i(!0),l(v,null,w(s.messages,r=>(i(),l("tr",{key:r.id},[t("td",j,d(r.name),1),t("td",N,d(r.email),1),t("td",V,d(r.content),1),t("td",A,[t("button",{onClick:x=>n.deleteMessage(r.id),class:"px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"}," Delete ",8,F)])]))),128))])])]))])}const I=m(S,[["render",q]]),U={data(){return{courses:[{id:1,title:"STEM Program",description:"Covers science, technology, engineering, and math courses.",image:"path/to/stem-image.jpg"},{id:2,title:"Business & Entrepreneurship",description:"Teaches financial literacy, management, and entrepreneurship.",image:"path/to/business-image.jpg"},{id:3,title:"Health & Medicine",description:"Prepares students for medical careers with biology and healthcare courses.",image:"path/to/health-image.jpg"}]}},methods:{removeCourse(o){this.courses=this.courses.filter(e=>e.id!==o)}}},R={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"},H=["src","alt"],z={class:"p-6"},J={class:"text-xl font-semibold text-gray-800"},L={class:"text-gray-600 mt-2"},W=["onClick"];function G(o,e,p,h,s,n){return i(),l("section",null,[e[0]||(e[0]=t("h1",{class:"text-3xl font-bold mb-6 text-center"},"Course Management",-1)),t("div",R,[(i(!0),l(v,null,w(s.courses,r=>(i(),l("div",{key:r.id,class:"bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"},[t("img",{src:r.image,alt:r.title,class:"w-full h-48 object-cover"},null,8,H),t("div",z,[t("h2",J,d(r.title),1),t("p",L,d(r.description),1),t("button",{onClick:x=>n.removeCourse(r.id),class:"mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"}," Remove ",8,W)])]))),128))])])}const K=m(U,[["render",G],["__scopeId","data-v-183cfe5b"]]),Q={data(){return{curriculum:[{id:1,title:"STEM Program",description:"Covers science, technology, engineering, and math courses."},{id:2,title:"Business & Entrepreneurship",description:"Teaches financial literacy, management, and entrepreneurship."},{id:3,title:"Health & Medicine",description:"Prepares students for medical careers with biology and healthcare courses."}],newCourse:{title:"",description:""}}},methods:{addCourse(){if(!this.newCourse.title||!this.newCourse.description){alert("Please fill out all fields.");return}const o={...this.newCourse,id:Date.now()};this.curriculum.push(o),this.newCourse.title="",this.newCourse.description=""},removeCourse(o){this.curriculum=this.curriculum.filter(e=>e.id!==o)}}},X={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"},Y={class:"text-xl font-semibold text-blue-800"},Z={class:"text-gray-600 mt-2"},ee=["onClick"],te={class:"mt-8 bg-white p-6 rounded-lg shadow"},se={class:"mb-4"},re={class:"mb-4"};function oe(o,e,p,h,s,n){return i(),l("section",null,[e[7]||(e[7]=t("h1",{class:"text-3xl font-bold mb-6"},"Manage Curriculum",-1)),t("div",X,[(i(!0),l(v,null,w(s.curriculum,r=>(i(),l("div",{key:r.id,class:"bg-gray-50 p-6 rounded-lg shadow"},[t("h2",Y,d(r.title),1),t("p",Z,d(r.description),1),t("button",{onClick:x=>n.removeCourse(r.id),class:"mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"}," Remove ",8,ee)]))),128))]),t("div",te,[e[6]||(e[6]=t("h2",{class:"text-2xl font-semibold mb-4"},"Add New Course",-1)),t("form",{onSubmit:e[2]||(e[2]=_((...r)=>n.addCourse&&n.addCourse(...r),["prevent"]))},[t("div",se,[e[3]||(e[3]=t("label",{for:"title",class:"block text-sm font-medium text-gray-700"},"Course Title",-1)),f(t("input",{type:"text",id:"title","onUpdate:modelValue":e[0]||(e[0]=r=>s.newCourse.title=r),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter course title",required:""},null,512),[[y,s.newCourse.title]])]),t("div",re,[e[4]||(e[4]=t("label",{for:"description",class:"block text-sm font-medium text-gray-700"},"Course Description",-1)),f(t("textarea",{id:"description","onUpdate:modelValue":e[1]||(e[1]=r=>s.newCourse.description=r),rows:"3",class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter course description",required:""},null,512),[[y,s.newCourse.description]])]),e[5]||(e[5]=t("button",{type:"submit",class:"bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"}," Add Course ",-1))],32)])])}const ne=m(Q,[["render",oe]]),ie={name:"Blog",data(){return{posts:[],form:{id:null,title:"",content:""},isEditing:!1}},methods:{createPost(){const o={...this.form,id:Date.now()};this.posts.push(o),this.resetForm()},editPost(o){this.form={...o},this.isEditing=!0},updatePost(){const o=this.posts.findIndex(e=>e.id===this.form.id);o!==-1&&(this.posts.splice(o,1,{...this.form}),this.resetForm(),this.isEditing=!1)},deletePost(o){this.posts=this.posts.filter(e=>e.id!==o)},cancelEdit(){this.resetForm(),this.isEditing=!1},resetForm(){this.form={id:null,title:"",content:""}}}},le={class:"flex justify-center items-center min-h-screen bg-blue-50"},de={class:"container mx-auto py-8 px-4"},ae={class:"mb-12"},ce={class:"text-2xl font-semibold mb-4"},ue={class:"mb-4"},me={class:"mb-4"},ge={class:"flex items-center"},be={type:"submit",class:"bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"};function pe(o,e,p,h,s,n){return i(),l("div",le,[t("div",de,[e[6]||(e[6]=t("h1",{class:"text-4xl font-extrabold mb-6 text-center"},"📝 Blog Management",-1)),t("div",ae,[t("h2",ce,d(s.isEditing?"✏️ Edit Post":"🆕 Create New Post"),1),t("form",{onSubmit:e[3]||(e[3]=_(r=>s.isEditing?n.updatePost():n.createPost(),["prevent"])),class:"bg-gray-50 p-6 rounded-lg shadow-md"},[t("div",ue,[e[4]||(e[4]=t("label",{for:"title",class:"block text-sm font-medium text-gray-700"},"Title",-1)),f(t("input",{type:"text",id:"title","onUpdate:modelValue":e[0]||(e[0]=r=>s.form.title=r),required:"",class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Enter the post title"},null,512),[[y,s.form.title]])]),t("div",me,[e[5]||(e[5]=t("label",{for:"content",class:"block text-sm font-medium text-gray-700"},"Content",-1)),f(t("textarea",{id:"content","onUpdate:modelValue":e[1]||(e[1]=r=>s.form.content=r),rows:"5",required:"",class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Write your post content here..."},null,512),[[y,s.form.content]])]),t("div",ge,[t("button",be,d(s.isEditing?"Update Post":"Publish Post"),1),s.isEditing?(i(),l("button",{key:0,type:"button",onClick:e[2]||(e[2]=(...r)=>n.cancelEdit&&n.cancelEdit(...r)),class:"ml-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300"}," Cancel ")):u("",!0)])],32)])])])}const he=m(ie,[["render",pe],["__scopeId","data-v-8891853e"]]),xe={name:"AdminDashboard",components:{Overview:P,ContactMessages:I,CourseManagement:K,CurriculumManagement:ne,BlogManagement:he},data(){return{currentTab:"overview",activeTabTitle:"Dashboard Overview",isSidebarOpen:!1}},methods:{toggleSidebar(){this.isSidebarOpen=!this.isSidebarOpen},changeTab(o,e){this.currentTab=o,this.activeTabTitle=e,this.toggleSidebar()}}},fe={class:"min-h-screen flex flex-col bg-gray-200"},ye={class:"bg-white shadow-md px-6 sm:px-8 lg:px-10 h-16 flex items-center justify-between border-b"},ve={class:"flex-1 flex justify-center"},we={class:"px-6 py-2 rounded-md font-semibold bg-gray-300 text-gray-900 shadow-md"},_e={class:"flex flex-1"},Ce={class:"space-y-4"},ke={class:"flex-1 p-4 sm:p-6 md:p-8 bg-white shadow-md rounded-lg"};function Me(o,e,p,h,s,n){const r=b("Overview"),x=b("ContactMessages"),C=b("CourseManagement"),k=b("CurriculumManagement"),M=b("BlogManagement");return i(),l("div",fe,[t("nav",ye,[t("div",ve,[t("span",we,d(s.activeTabTitle),1)]),t("button",{onClick:e[0]||(e[0]=(...a)=>n.toggleSidebar&&n.toggleSidebar(...a)),class:"sm:hidden text-gray-900 focus:outline-none"},"☰")]),t("div",_e,[t("aside",{class:c(["bg-gray-900 text-white min-h-screen p-6",s.isSidebarOpen?"block":"hidden","sm:block w-64"])},[t("nav",null,[t("ul",Ce,[t("li",{onClick:e[1]||(e[1]=a=>n.changeTab("overview","Dashboard Overview")),class:c([{"bg-gray-700":s.currentTab==="overview"},"cursor-pointer px-4 py-2 rounded-md hover:bg-gray-600 transition"])}," Dashboard Overview ",2),t("li",{onClick:e[2]||(e[2]=a=>n.changeTab("messages","Contact Messages")),class:c([{"bg-gray-700":s.currentTab==="messages"},"cursor-pointer px-4 py-2 rounded-md hover:bg-gray-600 transition"])}," Contact Messages ",2),t("li",{onClick:e[3]||(e[3]=a=>n.changeTab("courses","Course Management")),class:c([{"bg-gray-700":s.currentTab==="courses"},"cursor-pointer px-4 py-2 rounded-md hover:bg-gray-600 transition"])}," Course Management ",2),t("li",{onClick:e[4]||(e[4]=a=>n.changeTab("curriculum","Manage Curriculum")),class:c([{"bg-gray-700":s.currentTab==="curriculum"},"cursor-pointer px-4 py-2 rounded-md hover:bg-gray-600 transition"])}," Manage Curriculum ",2),t("li",{onClick:e[5]||(e[5]=a=>n.changeTab("blog","Manage Blog")),class:c([{"bg-gray-700":s.currentTab==="blog"},"cursor-pointer px-4 py-2 rounded-md hover:bg-gray-600 transition"])}," Manage Blog ",2)])])],2),t("main",ke,[s.currentTab==="overview"?(i(),g(r,{key:0})):u("",!0),s.currentTab==="messages"?(i(),g(x,{key:1})):u("",!0),s.currentTab==="courses"?(i(),g(C,{key:2})):u("",!0),s.currentTab==="curriculum"?(i(),g(k,{key:3})):u("",!0),s.currentTab==="blog"?(i(),g(M,{key:4})):u("",!0)])])])}const $e=m(xe,[["render",Me]]);export{$e as default};

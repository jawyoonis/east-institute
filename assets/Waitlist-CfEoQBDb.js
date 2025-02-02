import{_ as c,c as l,b as s,w as p,e as a,v as n,f,F as g,r as b,t as i,d as m,o}from"./index-KjJWBkEG.js";const x={data(){return{firstName:"",lastName:"",email:"",selectedCourse:"",courses:["Course A","Course B","Course C"],successMessage:"",errorMessage:""}},methods:{handleSubmit(){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)){this.errorMessage="Please enter a valid email address.",this.successMessage="";return}if(!this.selectedCourse){this.errorMessage="Please select a course.",this.successMessage="";return}try{console.log("Form submitted:",{firstName:this.firstName,lastName:this.lastName,email:this.email,course:this.selectedCourse}),this.successMessage="Thank you for joining the waitlist!",this.errorMessage="",this.firstName="",this.lastName="",this.email="",this.selectedCourse=""}catch{this.errorMessage="An error occurred. Please try again later.",this.successMessage=""}}}},y={class:"min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 px-4 sm:px-6 lg:px-8"},v={class:"max-w-md w-full space-y-8"},h={class:"space-y-4"},N={class:"relative"},w={class:"relative"},M={class:"relative"},C={class:"relative"},k=["value"],S={key:0,class:"mt-2 text-center text-sm text-green-600"},V={key:1,class:"mt-2 text-center text-sm text-red-600"};function B(d,e,F,P,t,u){return o(),l("div",y,[s("div",v,[e[15]||(e[15]=s("div",null,[s("h2",{class:"mt-6 text-center text-3xl font-extrabold text-gray-900"}," 🚀 Secure Your Early Access "),s("p",{class:"mt-2 text-center text-sm text-gray-600"}," Be among the first to experience our platform when we launch. ")],-1)),s("form",{class:"mt-8 space-y-6 bg-white p-8 rounded-lg shadow-lg",onSubmit:e[4]||(e[4]=p((...r)=>u.handleSubmit&&u.handleSubmit(...r),["prevent"]))},[s("div",h,[s("div",N,[e[5]||(e[5]=s("label",{for:"first-name",class:"sr-only"},"First Name",-1)),a(s("input",{id:"first-name",name:"firstName",type:"text",autocomplete:"given-name",required:"","onUpdate:modelValue":e[0]||(e[0]=r=>t.firstName=r),class:"appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"First Name"},null,512),[[n,t.firstName]]),e[6]||(e[6]=s("span",{class:"absolute inset-y-0 right-3 flex items-center pointer-events-none"},"👤",-1))]),s("div",w,[e[7]||(e[7]=s("label",{for:"last-name",class:"sr-only"},"Last Name",-1)),a(s("input",{id:"last-name",name:"lastName",type:"text",autocomplete:"family-name",required:"","onUpdate:modelValue":e[1]||(e[1]=r=>t.lastName=r),class:"appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"Last Name"},null,512),[[n,t.lastName]]),e[8]||(e[8]=s("span",{class:"absolute inset-y-0 right-3 flex items-center pointer-events-none"},"👤",-1))]),s("div",M,[e[9]||(e[9]=s("label",{for:"email-address",class:"sr-only"},"Email address",-1)),a(s("input",{id:"email-address",name:"email",type:"email",autocomplete:"email",required:"","onUpdate:modelValue":e[2]||(e[2]=r=>t.email=r),class:"appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",placeholder:"Email address"},null,512),[[n,t.email]]),e[10]||(e[10]=s("span",{class:"absolute inset-y-0 right-3 flex items-center pointer-events-none"},"📧",-1))]),s("div",C,[e[12]||(e[12]=s("label",{for:"course",class:"sr-only"},"Select Course",-1)),a(s("select",{id:"course",name:"course",required:"","onUpdate:modelValue":e[3]||(e[3]=r=>t.selectedCourse=r),class:"appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"},[e[11]||(e[11]=s("option",{value:"",disabled:""},"Select a course",-1)),(o(!0),l(g,null,b(t.courses,r=>(o(),l("option",{key:r,value:r},i(r),9,k))),128))],512),[[f,t.selectedCourse]]),e[13]||(e[13]=s("span",{class:"absolute inset-y-0 right-3 flex items-center pointer-events-none"},"📘",-1))])]),e[14]||(e[14]=s("div",null,[s("button",{type:"submit",class:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"}," Join Waitlist 🎉 ")],-1))],32),t.successMessage?(o(),l("p",S,i(t.successMessage),1)):m("",!0),t.errorMessage?(o(),l("p",V,i(t.errorMessage),1)):m("",!0)])])}const E=c(x,[["render",B]]);export{E as default};

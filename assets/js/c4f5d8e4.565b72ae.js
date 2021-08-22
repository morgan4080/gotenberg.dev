"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[195],{8448:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},7358:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(2713);var o=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(6010),c="tabItem_1uMI",s="tabItemActive_2DSg";var m=37,i=39;var u=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,u=e.values,d=e.groupId,h=e.className,f=o(),g=f.tabGroupChoices,p=f.setTabGroupChoices,b=(0,n.useState)(r),v=b[0],E=b[1],N=n.Children.toArray(e.children),y=[];if(null!=d){var k=g[d];null!=k&&k!==v&&u.some((function(e){return e.value===k}))&&E(k)}var w=function(e){var t=e.currentTarget,a=y.indexOf(t),n=u[a].value;E(n),null!=d&&(p(d,n),setTimeout((function(){var e,a,n,r,o,l,c,m;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,l=window,c=l.innerHeight,m=l.innerWidth,a>=0&&o<=m&&r<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},Z=function(e){var t,a;switch(e.keyCode){case i:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case m:var r=y.indexOf(e.target)-1;a=y[r]||y[y.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},h)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,l.Z)("tabs__item",c,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:Z,onFocus:w,onClick:w},a)}))),t?(0,n.cloneElement)(N.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},846:function(e,t,a){a.r(t),a.d(t,{default:function(){return P}});var n=a(7294),r=a(8198),o=a(9962),l="hero_WEpf",c="getStartedButton_3H87",s="githubIcon_3TpU",m="githubButtonText_2J76",i="logo_17gd",u=a(6010),d=a(2511),h=a(9524);function f(){return n.createElement("header",{className:l},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6"},n.createElement("h1",null,"A Docker-powered stateless API ",n.createElement("br",null),n.createElement("span",{className:"highlight"},"for PDF files")),n.createElement(d.Z,{className:(0,u.Z)("button button--primary button--lg",c),to:"/docs/get-started/docker"},"Get Started"),n.createElement(d.Z,{className:"button button--secondary button--lg",to:"https://github.com/gotenberg/gotenberg"},n.createElement("img",{className:s,src:(0,h.Z)("/img/github.svg"),alt:"GitHub Logo"})," ",n.createElement("span",{className:m},"GitHub")),n.createElement("p",{className:"padding-top--md"},"Available on both ",n.createElement("strong",null,"amd64")," and"," ",n.createElement("strong",null,"arm64")," architectures")),n.createElement("div",{className:"col col--6"},n.createElement("img",{className:i,src:(0,h.Z)("/img/logo_jed.png"),alt:"Gotenberg Hero Logo"})))))}var g="section_WmXD",p="text_3Bw2";function b(){return n.createElement("section",{className:g},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},n.createElement("div",{className:p},n.createElement("strong",null,"20+ million")," pulls from Docker Hub \u2764\ufe0f")))))}var v=a(7358),E=a(8448),N=a(7981),y="section_XkLZ",k="darker_Bus8",w="paddingTopLg_I12s",Z="wantMore_Fa2x",T=[{label:"Chromium",value:"chromium",content:n.createElement(N.Z,{className:"bash",children:"\ncurl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--form 'url=\"https://my.url\"' \\\n--form 'landscape=\"true\"' \\\n--form 'marginTop=\"1\"' \\\n--form 'marginBottom=\"1\"' \\\n-o my.pdf\n"})},{label:"LibreOffice",value:"libreoffice",content:n.createElement(N.Z,{className:"bash",children:"\ncurl \\\n--request POST 'http://localhost:3000/forms/libreoffice/convert' \\\n--form 'files=@\"/path/to/file.docx\"' \\\n--form 'files=@\"/path/to/file.xlsx\"' \\\n--form 'merge=\"true\"' \\\n--form 'pdfFormat=\"PDF/A-1a\"' \\\n-o my.pdf\n"})},{label:"PDF Engines",value:"pdfengines",content:n.createElement(N.Z,{className:"bash",children:"\ncurl \\\n--request POST 'http://localhost:3000/forms/pdfengines/merge' \\\n--form 'files=@\"/path/to/file1.pdf\"' \\\n--form 'files=@\"/path/to/file2.pdf\"' \\\n--form 'files=@\"/path/to/file3.pdf\"' \\\n--form 'files=@\"/path/to/file4.pdf\"' \\\n-o my.pdf\n"})},{label:"...",value:"more",content:n.createElement("div",{className:"text--center"},n.createElement("p",{className:"padding-top--lg padding-bottom--md"},"The API provides many more options and documents to convert \ud83d\ude80"),n.createElement(d.Z,{className:"button button--secondary button--lg margin-bottom--lg",to:"/docs/modules/api"},"Learn More"))}];function _(){return n.createElement("span",null,n.createElement("section",{className:y},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6"},n.createElement(v.Z,{defaultValue:"chromium",values:T},T.map((function(e,t){return n.createElement(E.Z,{key:t,value:e.value},e.content)})))),n.createElement("div",{className:"col col--6"},n.createElement("h2",null,"Convert, merge ",n.createElement("span",{className:"highlight"},"and more!")),n.createElement("p",null,"Gotenberg provides a developer-friendly API to interact with powerful tools like Chromium and LibreOffice to convert many documents to PDF, transform them, merge them, and more!"),n.createElement("p",null,"Thanks to Docker, you don't have to install each tool in your environments; drop the Docker image in your stack, and you're good to go!")))))," ",n.createElement("section",{className:(0,u.Z)(y,k)},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},n.createElement("h2",null,n.createElement("span",{className:"highlight"},"Asynchronous")," workflow"))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6"},n.createElement("p",{className:w},"The webhook feature allows you to upload the output file to the destination of your choice."),n.createElement("p",null,"There are many options to fit your requirements, from the custom HTTP headers sent to your webhook to the HTTP method used to call it.")),n.createElement("div",{className:"col col--6"},n.createElement(N.Z,{className:"bash",children:"\ncurl \\\n--request POST 'http://localhost:3000/forms/chromium/convert/url' \\\n--header 'Gotenberg-Webhook-Extra-Http-Headers: {\"MyHeader\": \"MyValue\"}' \\\n--header 'Gotenberg-Webhook-Url: https://my.webhook.url' \\\n--header 'Gotenberg-Webhook-Method: PUT' \\\n--header 'Gotenberg-Webhook-Error-Url: https://my.webhook.error.url' \\\n--header 'Gotenberg-Webhook-Error-Method: POST' \\\n--form 'url=\"https://my.url\"'\n"})))))," ",n.createElement("section",{className:y},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},n.createElement("h2",null,"A modular ",n.createElement("span",{className:"highlight"},"platform")))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},n.createElement("div",{className:"text--center"},n.createElement("p",null,"Gotenberg is a platform composed of modules; each module has properties you may customize to your flavor."),n.createElement(N.Z,{children:"\ndocker run --rm -p 80:80 gotenberg/gotenberg:7 gotenberg --api-port=80 --api-process-timeout=10s --libreoffice-disable-routes --log-level=debug\n"})))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},n.createElement("div",{className:"text--center"},n.createElement("p",{className:Z},"\ud83d\ude80"," ",n.createElement("span",{className:"highlight"},n.createElement("b",null,"More customizations?"))," ","Build your own Docker image by adding new tools and create modules that provide new routes to the API."),n.createElement(d.Z,{className:"button button--secondary button--lg",to:"https://pkg.go.dev/github.com/gotenberg/gotenberg/v7"},"Go Reference")))))))}function P(){var e=(0,o.Z)().siteConfig;return n.createElement(r.Z,{title:e.title,description:e.tagLine},n.createElement(f,null),n.createElement("main",null,n.createElement(b,null),n.createElement(_,null)))}}}]);
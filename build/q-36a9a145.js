import{N as o,A as t,E as a,L as r,D as c,n as i}from"./q-94ebc968.js";import{n as u,j as m}from"./q-54615ccf.js";const g=()=>{const n=u(),s=m();return o(i,{children:[t("title",null,null,n.title,1,null),t("link",null,{rel:"canonical",href:a(e=>e.url.href,[s])},null,3,null),t("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),t("link",null,{id:"favicon",rel:"icon",type:"image/svg+xml",href:"/favicon.svg?v=7"},null,3,null),t("meta",null,{property:"og:site_name",content:"Jonniek"},null,3,null),n.meta.map((e,l)=>r("meta",{...e},null,0,l)),n.links.map((e,l)=>r("link",{...e},null,0,l)),n.styles.map((e,l)=>r("style",{...e.props,dangerouslySetInnerHTML:c(e,"style")},null,0,l)),t("script",null,{dangerouslySetInnerHTML:`
        const cssPreferenceTheme = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches
          ? "dark"
          : "light";

        const theme = localStorage.getItem("theme") || cssPreferenceTheme;
        document.documentElement.setAttribute('data-theme', theme);

        let hue = localStorage.getItem("brand-color-hue");
        if (hue === null) {
          hue = theme === "dark" ? "30" : "195";
        }
        const hsl = "hsl(" + hue + ", 67%, 57%)";
        document.documentElement.style.setProperty("--brand-color", hsl);
        document.documentElement.style.setProperty("--brand-color-hue", String(hue));
        const svg = '<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg"><style>circle{transition:stroke 2s ease-in}</style><circle cx="50" cy="50" r="36" stroke="' + hsl + '" stroke-width="25" fill="transparent" /></svg>';
        const faviconElement = document.querySelector("#favicon");
        if (faviconElement) {
          faviconElement.setAttribute("href", "data:image/svg+xml;utf8," + svg);
        }
      `},null,3,null)]},1,"OA_0")};export{g as s_zrbrqoaqXSY};

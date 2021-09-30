export const menuItems = [
         {
           name: "demos",
           label: "Demos",
           items: [
             { name: "", label: "Software" },
             { name: "mobile", label: "Mobile App" },
             { name: "conferrence", label: "Video Conference" },
             { name: "telemedecine", label: "Telemedicine" },
             { name: "crypto", label: "Crypto" },
             { name: "web", label: "Web Application" },
             { name: "ios", label: "IOS App" },
             { name: "webHosting", label: "Web Hosting" },
             { name: "onlineCourse", label: "Online Course" },
           ],
         },
         {
           name: "pages",
           label: "Pages",
           items: [
             { name: "about", label: "About Us" },
             {
               name: "careers",
               label: "Careers",
               items: [
                 { name: "career", label: "Career" },
                 { name: "career-details", label: "Career Details" },
               ],
             },
             {
               name: "utility",
               label: "Utility",
               items: [
                 { name: "pricing", label: "Pricing & Plan" },
                 { name: "contact", label: "Contact" },
                 { name: "faq", label: "FAQ" },
                 { name: "comingsoon", label: "Coming soon" },
                 { name: "terms", label: "Terms & Conditions" },
                 { name: "404", label: "404 Page" },
               ],
             },
             {
               name: "account",
               label: "Account",
               items: [
                 { name: "signin", label: "Sign In" },
                 { name: "signin-image", label: "Sign In Image" },
                 { name: "signup", label: "Sign Up" },
                 { name: "signup-image", label: "Sign Up Image" },
                 { name: "reset-pass", label: "Reset Password" },
               ],
             },
           ],
         },
         {
           name: "megamenu",
           label: "Portfolios",
           megamenu:true,
           col:12,
           items: {
            //  image:{
            //   url:"",
            //   col:"",
            //  },
             col_1 : {
              title:"GALLERY STYLE",
              items:[
                {
                 name: "gallery-2-col",
                 label: "Two Column Grid",
                },
                {
                 name: "gallery-3-col",
                 label: "Three Column Grid",
                },
                {
                 name: "gallery-4-col",
                 label: "Four Column Grid",
                },
                {
                 name: "gallery-4-col-wide",
                 label: "Two Column Wide",
                },
                {
                 name: "gallery-4-col-wide",
                 label: "Three Column Wide",
                },
                {
                 name: "gallery-4-col-wide",
                 label: "Four Column Wide",
                },
               ]
             },
             col_2 : {
              title:"CLASSIC GRID STYLE",
              items:[
                {
                 name: "classic-2-col",
                 label: "Two Column Grid",
                },
                {
                 name: "classic-3-col",
                 label: "Three Column Grid",
                },
                {
                 name: "classic-4-col",
                 label: "Four Column Grid",
                },
                {
                 name: "classic-4-col-wide",
                 label: "Two Column Wide",
                },
                {
                 name: "classic-4-col-wide",
                 label: "Three Column Wide",
                },
                {
                 name: "classic-4-col-wide",
                 label: "Four Column Wide",
                },
               ]
             },
             col_3 : {
              title:"MASONRY STYLE",
              items:[
                {
                 name: "masonry-3-col",
                 label: "Three Column Grid",
                },
                {
                 name: "masonry-4-col",
                 label: "Four Column Grid",
                },
                {
                 name: "masonry-4-col-wide",
                 label: "Three Column Wide",
                },
                {
                 name: "masonry-4-col-wide",
                 label: "Four Column Wide",
                },
                {
                 name: "masonry-4-col-classic",
                 label: "Three Column Classic",
                },
                {
                 name: "masonry-4-col-classic",
                 label: "Four Column Classic",
                },
               ]
             },
             col_4 : {
              title:"SINGLE PROJECT",
              items:[
                {
                 name: "portfolio-details-1",
                 label: "Portfolio-details-01",
                },
                {
                 name: "portfolio-details-2",
                 label: "Portfolio-details-02",
                },
                {
                 name: "portfolio-details-3",
                 label: "Portfolio-details-03",
                },
               ]
             },
            //  col_6 : [
            //    {
            //     name: "supa",
            //     label: "supa",
            //    },
            //    {
            //     name: "Mega",
            //     label: "Mega",
            //    },
            //    {
            //     name: "menu",
            //     label: "Menu",
            //    },
            //    {
            //     name: "lele",
            //     label: "LEle",
            //    }
            //   ]
           }
         },
         {
           name: "https://uxtheme.net/product-support/",
           label: "Support",
           isExternal: true,
         },
       ];

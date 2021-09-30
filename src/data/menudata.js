// import menuImage from '../assets/image/menu-image.webp'

export const menuItems = [
         {
           name: "",
           label: "Landings",
           items: [
             { name: "", label: "Marketing" },
             { name: "mdx", label: "MDX PAGE" },
             { name: "project", label: "Project Management" },
             { name: "it", label: "IT Services" },
             { name: "services", label: "Services" },
             { name: "agency", label: "Agency" },
             { name: "digital", label: "Digital Agency" },
             { name: "app", label: "App Presenting" },
             { name: "startup", label: "Startup" },
           ],
         },
         {
           name: "pages",
           label: "Pages",
           items: [
             { name: "about-us", label: "About Us" },
             {
               name: "#",
               label: "Blog",
               items: [
                 { name: "blog/blog-regular", label: "Blog Regular" },
                 { name: "blog/blog-left-sidebar", label: "Blog Left Sidebar" },
                 { name: "blog/blog-right-sidebar", label: "Blog Right Sidebar" },
                 { name: "blog/blog-details", label: "Blog Details" },
               ],
             },
             {
               name: "careers",
               label: "Careers",
               items: [
                 { name: "innerpage/career", label: "Career" },
                 { name: "innerpage/career-details", label: "Career Details" },
               ],
             },
             {
               name: "#",
               label: "Pricing",
               items: [
                 { name: "innerpage/pricing/pricing-1", label: "Pricing One" },
                 { name: "innerpage/pricing/pricing-2", label: "Pricing Two" },
               ],
             },
             {
               name: "#",
               label: "Contact",
               items: [
                 { name: "innerpage/contact/contact-1", label: "Contact One" },
                 { name: "innerpage/contact/contact-2", label: "Contact Two" },
               ],
             },
             {
               name: "#",
               label: "Account",
               items: [
                 { name: "innerpage/sign-in", label: "Sign In" },
                 { name: "innerpage/sign-up", label: "Sign Up" },
                 { name: "innerpage/forgot", label: "Reset Password" },
               ],
             },
             {
               name: "Testimonial",
               label: "Testimonial",
               items: [
                 { name: "innerpage/testimonials/testimonials-1", label: "Testimonial One" },
                 { name: "innerpage/testimonials/testimonials-2", label: "Testimonial Two" },
               ],
             },
             {
               name: "utility",
               label: "Utility",
               items: [
                 { name: "innerpage/faq", label: "FAQ" },
                 { name: "innerpage/coming-soon", label: "Coming soon" },
                 { name: "innerpage/terms", label: "Terms & Conditions" },
                 { name: "innerpage/404", label: "404 Page" }
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
            //   url:menuImage,
            //   col:"5",
            //  },
             col_1 : {
              title:"GALLERY STYLE",
              items:[
                {
                 name: "portfolio/grid/portfolio-grid-2",
                 label: "Two Column Grid",
                },
                {
                 name: "portfolio/grid/portfolio-grid-3",
                 label: "Three Column Grid",
                },
                {
                 name: "portfolio/grid/portfolio-grid-4",
                 label: "Four Column Grid",
                },
                {
                 name: "portfolio/grid/portfolio-grid-2-full",
                 label: "Two Column Grid Wide",
                },
                {
                 name: "portfolio/grid/portfolio-grid-3-full",
                 label: "Three Column Grid Wide",
                },
                {
                 name: "portfolio/grid/portfolio-grid-4-full",
                 label: "Four Column Grid Wide",
                },
               ]
             },
             col_2 : {
              title:"GALLERY (NO GAP)",
              items:[
                {
                 name: "portfolio/grid/portfolio-grid-2-no-gap",
                 label: "Two Column Grid",
                },
                {
                 name: "portfolio/grid/portfolio-grid-3-no-gap",
                 label: "Three Column Grid",
                },
                {
                 name: "portfolio/grid/portfolio-grid-4-no-gap",
                 label: "Four Column Grid",
                },
                {
                 name: "portfolio/grid/portfolio-grid-2-no-gap-full",
                 label: "Two Column Grid Wide",
                },
                {
                 name: "portfolio/grid/portfolio-grid-3-no-gap-full",
                 label: "Three Column Grid Wide",
                },
                {
                 name: "portfolio/grid/portfolio-grid-4-no-gap-full",
                 label: "Four Column Grid Wide",
                },
               ]
             },
             col_3 : {
              title:"MASONRY STYLE",
              items:[
                {
                 name: "portfolio/masonry/portfolio-masonary-2",
                 label: "Two Column Masonary",
                },
                {
                 name: "portfolio/masonry/portfolio-masonary-3",
                 label: "Three Column Masonary",
                },
                {
                 name: "portfolio/masonry/portfolio-masonary-4",
                 label: "Four Column Masonary",
                },
                {
                 name: "portfolio/masonry/portfolio-masonary-2-full",
                 label: "Two Column Masonary Wide",
                },
                {
                 name: "portfolio/masonry/portfolio-masonary-3-full",
                 label: "Three Column Masonary Wide",
                },
                {
                 name: "portfolio/masonry/portfolio-masonary-4-full",
                 label: "Four Column Masonary Wide",
                },
               ]
             },
             col_4 : {
              title:"PORTFOLIO DETAILS",
              items:[
                {
                 name: "portfolio/portfolio-details-1",
                 label: "Portfolio Details 01",
                },
                {
                 name: "portfolio/portfolio-details-2",
                 label: "Portfolio Details 02",
                },
                {
                 name: "portfolio/portfolio-details-3",
                 label: "Portfolio Details 03",
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
export default menuItems;
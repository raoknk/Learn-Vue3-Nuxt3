// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // css: ["bootstrap/dist/css/bootstrap.min.css"],
    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap&display=swap',
                    as:"style",
                    onload:"this.onload=null;this.rel='stylesheet'"
                },
            ],
            script: [
                {
                  src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
                  type: "text/javascript",
                },
              ],
        }
    }
})


// <link rel="preload" href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">

//   <noscript>
//   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap&display=swap">
  
//   </noscript>
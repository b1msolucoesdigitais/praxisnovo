export const whatsappConfig = {
  phone: "31997150237", // Número sem formatação para link
  formattedPhone: "(31) 99715-0237", // Número formatado para exibição
  message: "Quero transformar minha gestão financeira.",
  
  // Mensagens pré-definidas para diferentes contextos
  messages: {
    default: "Quero transformar minha gestão financeira.",
    consultoria: "Quero transformar minha gestão financeira.",
    diagnostico: "Quero transformar minha gestão financeira.",
    orcamento: "Quero transformar minha gestão financeira.",
    duvidas: "Quero transformar minha gestão financeira."
  },
  
  // Função para gerar link do WhatsApp
  getWhatsAppLink: (customMessage?: string) => {
    const message = customMessage || whatsappConfig.message;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${whatsappConfig.phone}?text=${encodedMessage}`;
  },
  
  // Função para abrir WhatsApp diretamente
  openWhatsApp: (customMessage?: string) => {
    const url = whatsappConfig.getWhatsAppLink(customMessage);
    window.open(url, '_blank');
  }
};

export const companyConfig = {
  name: "Praxis",
  email: "suporte@sejapraxis.com.br",
  phone: whatsappConfig.formattedPhone,
  address: "Belo Horizonte, MG",
  social: {
    linkedin: "https://www.linkedin.com/company/praxisgestaointeligente/",
    instagram: "https://www.instagram.com/sejapraxis",
    facebook: "https://www.facebook.com/sejapraxis"
  }
};

// Configuração para códigos de terceiros (Google Analytics, Facebook Pixel, etc.)
export interface ThirdPartyCode {
  name: string;
  code: string;
  enabled: boolean;
}

export const thirdPartyCodes = {
  // Códigos para serem inseridos no <head>
  header: [
    // Google Analytics 4
    // {
    //   name: "Google Analytics",
    //   code: `
    //     <!-- Google tag (gtag.js) -->
    //     <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
    //     <script>
    //       window.dataLayer = window.dataLayer || [];
    //       function gtag(){dataLayer.push(arguments);}
    //       gtag('js', new Date());
    //       gtag('config', 'GA_MEASUREMENT_ID');
    //     </script>
    //   `,
    //   enabled: false
    // },
    
    // Facebook Pixel (inserido diretamente no index.html)
    // {
    //   name: "Facebook Pixel",
    //   code: `
    //     <!-- Facebook Pixel Code -->
    //     <script>
    //       !function(f,b,e,v,n,t,s)
    //       {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    //       n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    //       if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    //       n.queue=[];t=b.createElement(e);t.async=!0;
    //       t.src=v;s=b.getElementsByTagName(e)[0];
    //       s.parentNode.insertBefore(t,s)}(window, document,'script',
    //       'https://connect.facebook.net/en_US/fbevents.js');
    //       fbq('init', '1646061579423295');
    //       fbq('track', 'PageView');
    //     </script>
    //     <noscript><img height="1" width="1" style="display:none"
    //       src="https://www.facebook.com/tr?id=PIXEL_ID&ev=PageView&noscript=1"
    //     /></noscript>
    //   `,
    //   enabled: false
    // },
    
    // Google Tag Manager
    // {
    //   name: "Google Tag Manager",
    //   code: `
    //     <!-- Google Tag Manager -->
    //     <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    //     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    //     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    //     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    //     })(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
    //     <!-- End Google Tag Manager -->
    //   `,
    //   enabled: false
    // }
  ] as ThirdPartyCode[],
  
  // Códigos para serem inseridos no início do <body>
  bodyStart: [
    // Google Tag Manager (noscript)
    // {
    //   name: "Google Tag Manager (noscript)",
    //   code: `
    //     <!-- Google Tag Manager (noscript) -->
    //     <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
    //     height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    //     <!-- End Google Tag Manager (noscript) -->
    //   `,
    //   enabled: false
    // }
  ] as ThirdPartyCode[],
  
  // Códigos para serem inseridos no final do <body>
  bodyEnd: [
    // Hotjar
    // {
    //   name: "Hotjar",
    //   code: `
    //     <!-- Hotjar Tracking Code -->
    //     <script>
    //       (function(h,o,t,j,a,r){
    //         h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    //         h._hjSettings={hjid:HOTJAR_ID,hjsv:6};
    //         a=o.getElementsByTagName('head')[0];
    //         r=o.createElement('script');r.async=1;
    //         r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    //         a.appendChild(r);
    //       })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    //     </script>
    //   `,
    //   enabled: false
    // },
    
    // LinkedIn Insight Tag
    // {
    //   name: "LinkedIn Insight Tag",
    //   code: `
    //     <script type="text/javascript">
    //       _linkedin_partner_id = "LINKEDIN_PARTNER_ID";
    //       window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    //       window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    //     </script>
    //     <script type="text/javascript">
    //       (function(l) {
    //       if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
    //       window.lintrk.q=[]}
    //       var s = document.getElementsByTagName("script")[0];
    //       var b = document.createElement("script");
    //       b.type = "text/javascript";b.async = true;
    //       b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    //       s.parentNode.insertBefore(b, s);})(window.lintrk);
    //     </script>
    //     <noscript>
    //       <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=LINKEDIN_PARTNER_ID&fmt=gif" />
    //     </noscript>
    //   `,
    //   enabled: false
    // }
  ] as ThirdPartyCode[]
};

// Função utilitária para obter códigos ativos
export const getActiveCodes = (location: 'header' | 'bodyStart' | 'bodyEnd') => {
  return thirdPartyCodes[location]
    .filter(code => code.enabled)
    .map(code => code.code)
    .join('\n');
};

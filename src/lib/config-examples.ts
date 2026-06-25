// EXEMPLOS DE CONFIGURAÇÃO DE CÓDIGOS DE TERCEIROS
// Copie e cole estes exemplos no arquivo config.ts

// ========================================
// GOOGLE ANALYTICS 4
// ========================================
export const googleAnalyticsExample = {
  name: "Google Analytics 4",
  code: `
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    </script>
  `,
  enabled: false
};

// ========================================
// FACEBOOK PIXEL
// ========================================
export const facebookPixelExample = {
  name: "Facebook Pixel",
  code: `
    <!-- Facebook Pixel Code -->
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '123456789012345');
      fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=123456789012345&ev=PageView&noscript=1"
    /></noscript>
  `,
  enabled: false
};

// ========================================
// GOOGLE TAG MANAGER
// ========================================
export const gtmExample = {
  name: "Google Tag Manager",
  code: `
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
    <!-- End Google Tag Manager -->
  `,
  enabled: false
};

// ========================================
// HOTJAR
// ========================================
export const hotjarExample = {
  name: "Hotjar",
  code: `
    <!-- Hotjar Tracking Code -->
    <script>
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1234567,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>
  `,
  enabled: false
};

// ========================================
// LINKEDIN INSIGHT TAG
// ========================================
export const linkedinExample = {
  name: "LinkedIn Insight Tag",
  code: `
    <script type="text/javascript">
      _linkedin_partner_id = "123456";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    </script>
    <script type="text/javascript">
      (function(l) {
      if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
      window.lintrk.q=[]}
      var s = document.getElementsByTagName("script")[0];
      var b = document.createElement("script");
      b.type = "text/javascript";b.async = true;
      b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
      s.parentNode.insertBefore(b, s);})(window.lintrk);
    </script>
    <noscript>
      <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=123456&fmt=gif" />
    </noscript>
  `,
  enabled: false
};

// ========================================
// INSTRUÇÕES DE USO
// ========================================

/*
COMO ATIVAR OS CÓDIGOS:

1. Abra o arquivo src/lib/config.ts

2. Para ativar Google Analytics, por exemplo:
   - Descomente o código do Google Analytics
   - Substitua 'GA_MEASUREMENT_ID' pelo seu ID real (ex: G-ABC123DEF4)
   - Mude enabled: false para enabled: true

3. Exemplo de ativação:
   thirdPartyCodes.header[0] = {
     name: "Google Analytics",
     code: `<!-- Seu código GA aqui -->`,
     enabled: true
   };

4. Reinicie a aplicação para aplicar as mudanças

5. Verifique se o código está funcionando:
   - Abra o DevTools (F12)
   - Vá para a aba Network
   - Recarregue a página
   - Procure por requisições para os domínios dos serviços

NOTAS IMPORTANTES:
- Sempre teste em desenvolvimento antes de fazer deploy
- Verifique se os códigos não estão duplicados
- Alguns códigos podem afetar a performance da página
- Considere usar Google Tag Manager para gerenciar múltiplos códigos
*/

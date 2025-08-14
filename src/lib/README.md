# Configurações Centralizadas

Este diretório contém configurações centralizadas para facilitar a manutenção do projeto.

## WhatsApp Configuration

### Uso Básico
```typescript
import { whatsappConfig } from '../lib/config';

// Abrir WhatsApp com mensagem padrão
whatsappConfig.openWhatsApp();

// Gerar link personalizado
const link = whatsappConfig.getWhatsAppLink("Mensagem personalizada");

// Usar mensagens pré-definidas
whatsappConfig.openWhatsApp(whatsappConfig.messages.consultoria);
```

### Mensagens Disponíveis
- `default`: "Quero transformar minha gestão financeira."
- `consultoria`: "Gostaria de agendar uma consultoria financeira."
- `diagnostico`: "Quero solicitar um diagnóstico financeiro da minha empresa."
- `orcamento`: "Gostaria de receber um orçamento para controladoria financeira."
- `duvidas`: "Tenho dúvidas sobre os serviços de controladoria financeira."

### Componente WhatsAppButton
```typescript
import WhatsAppButton from '../components/ui/whatsapp-button';

// Botão com mensagem padrão
<WhatsAppButton>Fale Conosco</WhatsAppButton>

// Botão com mensagem personalizada
<WhatsAppButton customMessage="Quero um orçamento">
  Solicitar Orçamento
</WhatsAppButton>

// Botão com estilo personalizado
<WhatsAppButton 
  variant="outline" 
  size="lg" 
  className="w-full"
  customMessage={whatsappConfig.messages.diagnostico}
>
  Diagnóstico Gratuito
</WhatsAppButton>
```

## Company Configuration

### Informações da Empresa
```typescript
import { companyConfig } from '../lib/config';

// Dados disponíveis
companyConfig.name        // "Praxis"
companyConfig.email       // "contato@praxis.com.br"
companyConfig.phone       // "(31) 99715-0237"
companyConfig.address     // "Belo Horizonte, MG"
companyConfig.social      // Links das redes sociais
```

## Third Party Codes (Códigos de Terceiros)

### Configuração de Códigos
```typescript
import { thirdPartyCodes, getActiveCodes } from '../lib/config';

// Verificar códigos ativos
const headerCodes = getActiveCodes('header');
const bodyStartCodes = getActiveCodes('bodyStart');
const bodyEndCodes = getActiveCodes('bodyEnd');
```

### Estrutura dos Códigos
```typescript
interface ThirdPartyCode {
  name: string;        // Nome descritivo do código
  code: string;        // HTML/JavaScript do código
  enabled: boolean;    // Se está ativo ou não
}
```

### Locais de Inserção

#### 1. **Códigos no HTML (index.html)**
- **Vantagem**: Carregam antes do React, garantindo tracking desde o início
- **Uso**: Para códigos críticos como Facebook Pixel, Google Analytics
- **Localização**: `<head>` do index.html
- **Exemplo**: Facebook Pixel já está configurado no index.html

#### 2. **Códigos no React (App.tsx)**
- **`bodyStart`**: Códigos inseridos no início do `<body>` (GTM noscript, etc.)
- **`bodyEnd`**: Códigos inseridos no final do `<body>` (Hotjar, LinkedIn, etc.)

### Exemplo de Configuração
```typescript
// Ativar Google Analytics
thirdPartyCodes.header[0].enabled = true;
thirdPartyCodes.header[0].code = `
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  </script>
`;
```

### Componentes React
```typescript
import { BodyStartCodes, BodyEndCodes } from '../components/third-party-codes';

// No App.tsx
<>
  <BodyStartCodes />
  {/* Conteúdo da aplicação */}
  <BodyEndCodes />
</>
```

### Códigos Pré-configurados

#### ✅ **Já Ativo (no index.html)**
- **Facebook Pixel**: ID 1646061579423295

#### 📝 **Disponíveis para Ativação (no React)**
- **Google Analytics 4** (comentado)
- **Google Tag Manager** (comentado)
- **Hotjar** (comentado)
- **LinkedIn Insight Tag** (comentado)

### ⚠️ **Importante: Diferença entre HTML e React**

- **HTML (index.html)**: Códigos carregam imediatamente, garantindo tracking desde o primeiro carregamento
- **React (App.tsx)**: Códigos carregam após o React inicializar, podem perder alguns eventos iniciais

**Recomendação**: Use o HTML para códigos críticos de tracking (Facebook Pixel, GA) e o React para códigos secundários (Hotjar, LinkedIn).

## Vantagens

1. **Manutenção Centralizada**: Altere o número do WhatsApp em um só lugar
2. **Consistência**: Todos os botões usam a mesma configuração
3. **Flexibilidade**: Mensagens personalizadas para diferentes contextos
4. **Reutilização**: Componentes prontos para uso em qualquer lugar
5. **Type Safety**: Configurações tipadas com TypeScript
6. **Códigos de Terceiros**: Gerenciamento centralizado de tracking e analytics

## Atualizando Configurações

Para alterar o número do WhatsApp ou outras informações:

1. Edite o arquivo `src/lib/config.ts`
2. As mudanças se aplicam automaticamente em todo o projeto
3. Não é necessário alterar outros arquivos

## Ativando Códigos de Terceiros

1. **Descomente** o código desejado em `thirdPartyCodes`
2. **Substitua** os IDs/parâmetros pelos valores reais
3. **Defina** `enabled: true`
4. **Reinicie** a aplicação

### Exemplo de Ativação
```typescript
// Ativar Google Analytics
thirdPartyCodes.header[0] = {
  name: "Google Analytics",
  code: `<!-- Seu código GA aqui -->`,
  enabled: true
};
```

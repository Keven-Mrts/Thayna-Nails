# Thayna Virginio Nails — Site Completo

Site profissional para a Nail Designer **Thayna Virginio Nails**.

## 🚀 Como Usar

### Abrir o site
Basta abrir o arquivo `index.html` diretamente no navegador (duplo clique). **Não precisa de servidor** ou instalação de nada.

```
thayna-nails/
├── index.html          ← Site principal
├── admin/
│   └── index.html      ← Painel administrativo
├── css/
│   └── style.css       ← Todos os estilos
├── js/
│   ├── data.js         ← Dados (serviços, galeria, etc)
│   └── app.js          ← Lógica do site
├── robots.txt
└── sitemap.xml
```

---

## 🔧 Configurações Importantes

### 1. Número de WhatsApp
Abra `js/data.js` e altere a linha 3:
```js
const WHATSAPP_NUMBER = '5500000000000';
// → Substitua pelo número real (apenas dígitos, com DDI)
// Exemplo: '5511999998888'
```

### 2. Painel Administrativo
Acesse: `admin/index.html`
- **Usuário:** `admin`
- **Senha:** `admin123`

> ⚠️ Para produção, implemente autenticação segura via Supabase.

---

## 📋 Funcionalidades

### Site Principal
- [x] Loading screen animada
- [x] Header fixo com scroll effect
- [x] Menu mobile responsivo
- [x] Seção Hero com partículas animadas
- [x] Seção Sobre com estatísticas
- [x] Galeria com filtros por categoria + lightbox
- [x] Sistema de agendamento em 4 etapas
- [x] Calendário interativo
- [x] Bloqueio de horários ocupados
- [x] Confirmação via WhatsApp
- [x] 20 depoimentos em carrossel
- [x] FAQ accordion
- [x] Seção de contato
- [x] Botão WhatsApp flutuante
- [x] Botão voltar ao topo
- [x] Animações scroll (AOS customizado)
- [x] SEO meta tags + Schema.org
- [x] robots.txt + sitemap.xml
- [x] 100% responsivo (mobile/tablet/desktop)

### Painel Admin
- [x] Login com senha
- [x] Dashboard com estatísticas
- [x] Lista de agendamentos com filtros
- [x] Cancelar/excluir agendamentos
- [x] Lista de clientes
- [x] Editar serviços e preços
- [x] Gerenciar galeria (adicionar/remover fotos)
- [x] Bloquear datas/férias
- [x] Exportar agenda CSV
- [x] Link direto para o site

---

## 🛠️ Para Produção (Next.js + Supabase)

Para uma versão com banco de dados em tempo real:

1. Crie conta gratuita em [supabase.com](https://supabase.com)
2. Execute o SQL de criação das tabelas (ver seção abaixo)
3. Migre para Next.js usando as mesmas lógicas

### Schema SQL (Supabase)
```sql
-- Agendamentos
CREATE TABLE appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  service TEXT, price TEXT, date DATE, time TIME,
  client_name TEXT, client_whatsapp TEXT, client_email TEXT,
  status TEXT DEFAULT 'confirmed',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Serviços
CREATE TABLE services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT, description TEXT, price TEXT,
  icon TEXT, category TEXT, img_url TEXT,
  active BOOLEAN DEFAULT TRUE
);

-- Galeria
CREATE TABLE gallery (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  img_url TEXT, category TEXT, label TEXT,
  sort_order INT DEFAULT 0, active BOOLEAN DEFAULT TRUE
);

-- Datas Bloqueadas
CREATE TABLE blocked_dates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE UNIQUE, reason TEXT
);
```

---

## 🌐 Deploy Gratuito

**Opção 1 — Vercel (recomendado)**
1. Crie conta em [vercel.com](https://vercel.com)
2. Faça upload da pasta ou conecte ao GitHub
3. Deploy automático!

**Opção 2 — Netlify**
1. Arraste a pasta para [netlify.com/drop](https://app.netlify.com/drop)
2. Pronto em segundos!

---

## 📞 Suporte
Instagram: [@thayna_virginionails](https://www.instagram.com/thayna_virginionails)

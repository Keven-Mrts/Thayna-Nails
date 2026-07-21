// ============================================================
// DATA.JS — Thayna Virginio Nails
// Dados centralizados: serviços, galeria, depoimentos, FAQ
// ============================================================

if (localStorage.getItem('data_version') !== '4') {
  localStorage.removeItem('admin_categories');
  localStorage.removeItem('admin_gallery');
  localStorage.setItem('data_version', '4');
}

const WHATSAPP_NUMBER = '5583988528323'; // ← Substitua pelo número real

const SERVICE_CATEGORIES = [
  {
    id: 'cat-app-gel',
    name: 'Aplicação Gel',
    startingPrice: 'A partir de R$ 80,00',
    icon: '💅',
    services: [
      { id: 'app-tips', name: 'Aplicação na tips', price: 'R$ 100,00', priceNum: 100, duration: 120 },
      { id: 'app-fibra', name: 'Aplicação na fibra', price: 'R$ 140,00', priceNum: 140, duration: 120 },
      { id: 'banho-gel', name: 'Banho de Gel', price: 'R$ 80,00', priceNum: 80, duration: 90 },
      { id: 'banho-gel-franc', name: 'Banho de Gel + franc.', price: 'R$ 90,00', priceNum: 90, duration: 105 }
    ]
  },
  {
    id: 'cat-manu',
    name: 'Manutenção',
    startingPrice: 'A partir de R$ 80,00',
    icon: '🔧',
    services: [
      { id: 'manu-nat', name: 'Manutenção Natural', price: 'R$ 80,00', priceNum: 80, duration: 60 },
      { id: 'manu-esm', name: 'Com esmaltação', price: 'R$ 80,00', priceNum: 80, duration: 75 },
      { id: 'manu-franc', name: 'Com francesinha', price: 'R$ 90,00', priceNum: 90, duration: 90 },
      { id: 'manu-bb', name: 'Babybommer', price: 'R$ 90,00', priceNum: 90, duration: 90 },
      { id: 'manu-bc', name: 'Babycollor', price: 'R$ 90,00', priceNum: 90, duration: 90 },
      { id: 'manu-bg', name: 'Baby Glitter', price: 'R$ 90,00', priceNum: 90, duration: 90 },
      { id: 'manu-fr-rev', name: 'Francesa reversa (par)', price: 'R$ 15,00', priceNum: 15, duration: 30 }
    ]
  },
  {
    id: 'cat-adc',
    name: 'Serviços Adicionais',
    startingPrice: 'A partir de R$ 5,00',
    icon: '✨',
    services: [
      { id: 'adc-pedrarias', name: 'Pedrarias', price: 'R$ 5,00', priceNum: 5, duration: 15 },
      { id: 'adc-remocao', name: 'Remoção total', price: 'R$ 40,00', priceNum: 40, duration: 45 },
      { id: 'adc-reposicao', name: 'Reposição de unhas', price: 'R$ 5,00', priceNum: 5, duration: 15 },
      { id: 'adc-formato', name: 'Troca de formato', price: 'R$ 15,00', priceNum: 15, duration: 15 }
    ]
  },
  {
    id: 'cat-outros',
    name: 'Outros Serviços',
    startingPrice: 'A partir de R$ 10,00',
    icon: '💎',
    services: [
      { id: 'out-blindagem', name: 'Blindagem', price: 'R$ 40,00', priceNum: 40, duration: 60 },
      { id: 'out-esmalta', name: 'Esmaltação em Gel', price: 'R$ 40,00', priceNum: 40, duration: 60 },
      { id: 'out-cutila', name: 'Cutilagem', price: 'R$ 10,00', priceNum: 10, duration: 30 },
      { id: 'out-adesivo', name: 'Adesivo (par)', price: 'R$ 10,00', priceNum: 10, duration: 15 }
    ]
  },
  {
    id: 'cat-spa',
    name: 'Spa dos Pés',
    startingPrice: 'A partir de R$ 100,00',
    icon: '🦶',
    services: [
      { id: 'spa-escalda', name: 'Spa dos pés com escalda pés', price: 'R$ 120,00', priceNum: 120, duration: 60 },
      { id: 'spa-sem-escalda', name: 'Spa dos pés sem escalda pés', price: 'R$ 100,00', priceNum: 100, duration: 45 },
      { id: 'spa-completo', name: 'Spa + escalda pé + Plastica', price: 'R$ 150,00', priceNum: 150, duration: 90 }
    ]
  },
  {
    id: 'cat-mp',
    name: 'Manicure Pedicure',
    startingPrice: 'A partir de R$ 5,00',
    icon: '💅',
    services: [
      { id: 'mp-manicure', name: 'Manicure', price: 'R$ 25,00', priceNum: 25, duration: 45 },
      { id: 'mp-pedicure', name: 'Pedicure', price: 'R$ 25,00', priceNum: 25, duration: 45 },
      { id: 'mp-pe-mao', name: 'Pé + Mão', price: 'R$ 45,00', priceNum: 45, duration: 90 },
      { id: 'mp-reconst', name: 'Reconstrução de unhas', price: 'R$ 80,00', priceNum: 80, duration: 60 },
      { id: 'mp-manu-pe', name: 'Manutenção de Pé', price: 'R$ 40,00', priceNum: 40, duration: 45 },
      { id: 'mp-remocao', name: 'Remoção', price: 'R$ 30,00', priceNum: 30, duration: 30 },
      { id: 'mp-reposicao', name: 'Reposição de unha', price: 'R$ 5,00', priceNum: 5, duration: 15 }
    ]
  }
];

const GALLERY = [
  { src: 'galeria_thayna/IMG-20260721-WA0008.jpg', label: 'Galeria Thayna' },
  { src: 'galeria_thayna/IMG-20260721-WA0012.jpg', label: 'Galeria Thayna' },
  { src: 'galeria_thayna/IMG-20260721-WA0014.jpg', label: 'Galeria Thayna' },
  { src: 'galeria_thayna/IMG-20260721-WA0015.jpg', label: 'Galeria Thayna' },
  { src: 'galeria_thayna/IMG-20260721-WA0016.jpg', label: 'Galeria Thayna' },
  { src: 'galeria_thayna/IMG-20260721-WA0020.jpg', label: 'Galeria Thayna' },
  { src: 'galeria_thayna/IMG-20260721-WA0022.jpg', label: 'Galeria Thayna' },
  { src: 'galeria_thayna/IMG-20260721-WA0023.jpg', label: 'Galeria Thayna' },
  { src: 'galeria_thayna/IMG-20260721-WA0024.jpg', label: 'Galeria Thayna' },
  { src: 'galeria_thayna/IMG-20260721-WA0025.jpg', label: 'Galeria Thayna' },
  { src: 'galeria_thayna/IMG-20260721-WA0026.jpg', label: 'Galeria Thayna' },
  { src: 'galeria_thayna/IMG-20260721-WA0028.jpg', label: 'Galeria Thayna' },
  { src: 'galeria_thayna/IMG-20260721-WA0029.jpg', label: 'Galeria Thayna' }
];

const TESTIMONIALS = [
  { name: 'Amanda Ferreira', service: 'Alongamento em Fibra', text: 'Minha unha ficou simplesmente perfeita! Atendimento maravilhoso, ambiente super aconchegante. Nunca mais vou em outro lugar. Thayna é incrível!', rating: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda&backgroundColor=ffd5dc' },
  { name: 'Larissa Souza', service: 'Nail Art', text: 'A melhor nail designer que já encontrei. Fiz a nail art que vi no Pinterest e ficou IGUAL, sem exagero. Profissionalismo e carinho em cada detalhe.', rating: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Larissa&backgroundColor=ffdfbf' },
  { name: 'Juliana Martins', service: 'Banho em Gel', text: 'Perfeição em cada detalhe. As unhas ficaram exatamente como eu queria. Já agendei o próximo horário antes mesmo de sair!', rating: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juliana&backgroundColor=d1f4e0' },
  { name: 'Fernanda Oliveira', service: 'Blindagem', text: 'Fiz a blindagem e estou apaixonada! Minhas unhas ficaram fortes e lindas. A Thayna é muito atenciosa e explica tudo o que está fazendo.', rating: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fernanda&backgroundColor=c0efff' },
  { name: 'Camila Santos', service: 'Esmaltação em Gel', text: 'Que trabalho de qualidade! Fiz a esmaltação em gel e já faz 3 semanas sem uma lasca sequer. Super recomendo!', rating: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Camila&backgroundColor=e8d5ff' },
  { name: 'Beatriz Lima', service: 'Alongamento em Fibra', text: 'Só tenho elogios! A Thayna é extremamente talentosa e cuidadosa. Meu alongamento ficou lindo e muito natural.', rating: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Beatriz&backgroundColor=ffd5dc' },
  { name: 'Rafaela Costa', service: 'Nail Art', text: 'Fiz nail art de unicórnio para uma festa temática e ficou um sonho! Todos elogiaram. A Thayna tem um dom especial para arte.', rating: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rafaela&backgroundColor=ffe4c4' },
  { name: 'Isabela Rocha', service: 'Manutençao', text: 'Faço manutenção todo mês e nunca me decepcionei. Atendimento pontual, studio organizado e resultado sempre impecável.', rating: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Isabela&backgroundColor=d1f4e0' },
  { name: 'Priscila Alves', service: 'Banho em Gel', text: 'Agendei online e foi super fácil! As unhas ficaram maravilhosas. A Thayna atende com muita delicadeza e atenção.', rating: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priscila&backgroundColor=c0efff' },
  { name: 'Vanessa Gomes', service: 'Blindagem', text: 'Minha autoestima foi lá no alto depois da sessão! Unhas perfeitas, atendimento acolhedor. Voltarei com certeza.', rating: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vanessa&backgroundColor=e8d5ff' },
  { name: 'Monique Pereira', service: 'Decorações', text: 'As pedrinhas que coloquei ficaram simplesmente divas! A Thayna tem um cuidado incrível com cada detalhe. Recomendo 100%.', rating: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Monique&backgroundColor=ffd5dc' },
  { name: 'Tatiana Ribeiro', service: 'Esmaltação em Gel', text: 'Nunca tinha feito esmaltação em gel e me arrependo de ter esperado tanto! A Thayna explicou tudo e o resultado superou expectativas.', rating: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tatiana&backgroundColor=ffdfbf' },
  { name: 'Aline Carvalho', service: 'Alongamento em Fibra', text: 'Simplesmente incrível! Fibra ficou tão natural que minha própria mãe não acreditou que era postiço. Talento demais!', rating: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aline&backgroundColor=d1f4e0' },
  { name: 'Débora Mendes', service: 'Nail Art', text: 'Amor eterno pela nail art que fiz! Francesinha com degradê rosé para o casamento da minha irmã. Todo mundo perguntou onde fiz.', rating: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Debora&backgroundColor=c0efff' },
  { name: 'Luciana Barbosa', service: 'Banho em Gel', text: 'Perfeição absoluta! Atendimento no horário, studio super limpo e organizado, e minhas unhas ficaram lindas. Voltarei sempre.', rating: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Luciana&backgroundColor=e8d5ff' },
  { name: 'Natalia Freitas', service: 'Manutençao', text: 'Já são 8 meses fazendo manutenção com a Thayna e jamais pensei em ir a outro lugar. Fidelidade total!', rating: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Natalia&backgroundColor=ffd5dc' },
  { name: 'Carolina Nunes', service: 'Blindagem', text: 'Minhas unhas eram fracas e quebravam o tempo todo. Depois da blindagem, estão mais fortes e lindas. Resultado incrível!', rating: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carolina&backgroundColor=ffe4c4' },
  { name: 'Elaine Teixeira', service: 'Decorações', text: 'Fiz cromado dourado nas unhas para o Réveillon e ficou DESLUMBRANTE. Todas as fotos com destaque para as unhas haha. Amei!', rating: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elaine&backgroundColor=d1f4e0' },
  { name: 'Sandra Vieira', service: 'Esmaltação em Gel', text: 'Lindo trabalho! A cor ficou exatamente como mostrei na foto. Profissional dedicada e carinhosa. Super recomendo!', rating: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sandra&backgroundColor=c0efff' },
  { name: 'Renata Moura', service: 'Alongamento em Fibra', text: 'Que mão delicada e precisa! O alongamento ficou idêntico ao que eu pedi. Sinto que minhas unhas são parte do show onde for.', rating: 5, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Renata&backgroundColor=e8d5ff' },
];

const FAQ = [
  {
    q: 'Quanto tempo dura o alongamento em gel ou fibra?',
    a: 'O alongamento em gel ou fibra dura em média 3 a 4 semanas sem precisar de manutenção. Com os devidos cuidados em casa, é possível prolongar ainda mais a durabilidade.'
  },
  {
    q: 'Preciso de algum cuidado especial após a sessão?',
    a: 'Sim! Recomendamos evitar contato com produtos de limpeza sem luva nos primeiros dias, não usar as unhas como ferramenta e aplicar óleo de cutícula diariamente para manter a hidratação e o brilho.'
  },
  {
    q: 'Como funciona o agendamento online?',
    a: 'Basta escolher o serviço desejado, selecionar a data e horário disponíveis e preencher seus dados. Após confirmar, você receberá uma confirmação pelo WhatsApp. É simples e seguro!'
  },
  {
    q: 'Posso cancelar ou remarcar meu horário?',
    a: 'Sim! Entre em contato pelo WhatsApp com pelo menos 24 horas de antecedência para cancelar ou remarcar sem nenhuma taxa. Cancelamentos com menos de 24h podem estar sujeitos a cobrança.'
  },
  {
    q: 'Vocês usam produtos de qualidade?',
    a: 'Absolutamente! Trabalhamos apenas com marcas reconhecidas e materiais de alta qualidade, importados e nacionais, garantindo durabilidade, segurança e beleza nos resultados.'
  },
  {
    q: 'A blindagem danifica a unha natural?',
    a: 'Não! A blindagem é justamente um procedimento que protege a unha natural. É aplicada sobre a sua própria unha para fortalecê-la, sem danificá-la ou comprometê-la.'
  },
  {
    q: 'Qual a diferença entre gel e fibra?',
    a: 'O gel é aplicado camada por camada e curado com luz UV, dando um resultado mais natural e flexível. A fibra de vidro é mais resistente e durável, ideal para quem tem as unhas mais fracas ou quer um comprimento maior.'
  },
  {
    q: 'Posso trazer referências de modelos que vi no Pinterest ou Instagram?',
    a: 'Com certeza! Adoramos quando as clientes trazem referências. Isso nos ajuda a entender exatamente o que você deseja e criar o look perfeito para você.'
  },
];

const BUSINESS_HOURS = {
  // 0=Dom, 1=Seg... 6=Sáb
  days: [1, 2, 3, 4, 5, 6], // Seg a Sáb
  start: 9,
  end: 18,
  satEnd: 14,
  interval: 60, // minutos entre atendimentos
  lunchStart: 12,
  lunchEnd: 13,
};

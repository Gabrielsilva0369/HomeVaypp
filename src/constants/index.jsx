import { ana, carlos, joao, maria, } from '@/assets';
import ice from '../../public/game/ice.svg';
import warrior from '../../public/game/warrior.svg';
import brave from '../../public/game/brave.svg';
import king from '../../public/game/king.svg'; 
import fearless from '../../public/game/fearless.svg';
import spartan from '../../public/game/spartan.svg';
import pride from '../../public/game/pride.svg';
import rage from '../../public/game/rage.svg';


import {
  AiOutlineHeart,
  AiOutlineInstagram,
  AiOutlineLock,
} from 'react-icons/ai';
import { MdComputer } from 'react-icons/md';
import { SlSocialLinkedin, SlSocialTwitter } from 'react-icons/sl';
import Login from '@/Components/Header/Login/Login';

const heart = <AiOutlineHeart />,
  locker = <AiOutlineLock />,
  computer = <MdComputer />,
  instagram = <AiOutlineInstagram />,
  linkedin = <SlSocialLinkedin />,
  twitter = <SlSocialTwitter />;

export const navLinks = [
  { name: 'Diferenciais', url: '#differentials' },
  { name: 'Soluções', url: '#solutions' },
  { name: 'Gameficação', url: '#gamification' },
  { name: <div className='Login'><Login></Login></div>, url: '#' },
];

export const header = {
  title: 'Seja Produtor, Seja Afiliado, Prospere Sem Limites!',
  subtitle:
    'A Novidade Tecnologica Que Você Precisa.',
  caption: '__ Segurança e Qualidade',
};

export const experience = [
  {
    title: 'Uma Rede Poderosa',
    
    color: 'blue',
  },
  {
    title: 'Multiplas Conexões',
   
    color: 'blue',
  },
];


//checkout svg element
export const Checkout = () => ( 
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 70L4.375 50.3125L44.8437 9.84375L60.1562 25.1562L19.6875 65.625L0 70ZM18.2919 55.4794L48.9169 24.8544L45.1456 21.0831L14.5206 51.7081L18.2919 55.4794Z" fill="white"/>
  <path d="M59.0625 0C61.0937 0 63.0848 0.565629 64.8127 1.63351C66.5405 2.70138 67.9369 4.22932 68.8453 6.0461C69.7537 7.86288 70.1382 9.89673 69.9558 11.9197C69.7734 13.9428 69.0312 15.875 67.8125 17.5L63.4375 21.875L48.125 6.5625L52.5 2.1875C54.3287 0.81375 56.5994 0 59.0625 0Z" fill="#0B96C2"/>
  </svg>
  
);
//aprovação imediata svg element
export const Apimedi= () => ( 
  <svg width="89" height="60" viewBox="0 0 89 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M66.75 48.75H81.5833V22.5H66.75V48.75ZM63.0417 15H85.2917C86.2752 15 87.2184 15.3951 87.9139 16.0984C88.6093 16.8016 89 17.7554 89 18.75V56.25C89 57.2446 88.6093 58.1984 87.9139 58.9017C87.2184 59.6049 86.2752 60 85.2917 60H63.0417C62.0582 60 61.1149 59.6049 60.4195 58.9017C59.724 58.1984 59.3333 57.2446 59.3333 56.25V18.75C59.3333 17.7554 59.724 16.8016 60.4195 16.0984C61.1149 15.3951 62.0582 15 63.0417 15Z" fill="#0B96C2"/>
  <path d="M14.8333 7.5H81.5833V0H14.8333C12.8663 0 10.9799 0.790176 9.58896 2.1967C8.19806 3.60322 7.41667 5.51088 7.41667 7.5V48.75H0V60H51.9167V48.75H14.8333V7.5Z" fill="white"/>
  </svg>
  
);

export const Relatorio= () => ( 
<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.26397 5.13235C8.26397 4.3016 7.93399 3.50487 7.34663 2.91744C6.75927 2.33001 5.96264 2 5.13198 2C4.30133 2 3.5047 2.33001 2.91734 2.91744C2.32998 3.50487 2 4.3016 2 5.13235V65.6912C2 69.7256 5.27397 73 9.30796 73H69.8597C70.6903 73 71.4869 72.67 72.0743 72.0826C72.6617 71.4951 72.9916 70.6984 72.9916 69.8677C72.9916 69.0369 72.6617 68.2402 72.0743 67.6527C71.4869 67.0653 70.6903 66.7353 69.8597 66.7353H9.30796C9.03108 66.7353 8.76553 66.6253 8.56975 66.4295C8.37396 66.2337 8.26397 65.9681 8.26397 65.6912V5.13235ZM45.8478 15.5735C45.8478 14.7428 46.1778 13.9461 46.7651 13.3586C47.3525 12.7712 48.1491 12.4412 48.9798 12.4412H69.868C70.6987 12.4412 71.4953 12.7712 72.0827 13.3586C72.67 13.9461 73 14.7428 73 15.5735V36.4768C73 37.3075 72.67 38.1042 72.0827 38.6917C71.4953 39.2791 70.6987 39.6091 69.868 39.6091C69.0374 39.6091 68.2407 39.2791 67.6534 38.6917C67.066 38.1042 66.736 37.3075 66.736 36.4768V23.1288L44.9291 44.9341C44.3418 45.5207 43.5458 45.8502 42.7158 45.8502C41.8858 45.8502 41.0898 45.5207 40.5025 44.9341L32.2758 36.7065L18.8292 50.1547C18.2355 50.708 17.4502 51.0092 16.6388 50.9949C15.8274 50.9806 15.0532 50.6519 14.4794 50.0779C13.9056 49.504 13.5769 48.7298 13.5626 47.9183C13.5482 47.1068 13.8494 46.3214 14.4027 45.7276L30.0626 30.0659C30.6498 29.4793 31.4459 29.1498 32.2758 29.1498C33.1058 29.1498 33.9019 29.4793 34.4891 30.0659L42.7158 38.2935L62.3011 18.7059H48.9798C48.1491 18.7059 47.3525 18.3759 46.7651 17.7884C46.1778 17.201 45.8478 16.4043 45.8478 15.5735Z" fill="white" stroke="#0B96C2" stroke-width="2.5"/>
</svg>

  
);

export const resources = {
  title: 'Transcenda limites, multiplique lucros: conheça nossas soluções. ',
  
  list: [
    {
      icon: <Checkout/>,
      title: 'Checkout V-Pro.',
      subtitle:
        'Imagine o impacto positivo no seu negócio com o nosso Checkout Personalizado de Alta Conversão, planejado para amplificar suas vendas!',
    },
    {
      icon: <Relatorio/>,
      title: 'Relatório de Vendas.',
      subtitle:
        'Aumente sua produtividade e conquiste novos patamares de sucesso com um relatório de vendas e desempenho que oferece insights poderosos e estratégias comprovadas.',
    },
    {
      icon: <Apimedi/>,
      title: 'Aprovação imediata.',
      subtitle:
        'Com a nossa plataforma, coloque seu produto e veja suas vendas aumentarem instantaneamente, sem preocupações!',
    },
  ],
};

export const rewards = {
  title: 'CS TechRewards - O Programa de Pontos CS Tech Bank',
  list: [
    {
      title: 'Acumule pontos e troque por vantagens',
      subtitle:
        'Com o CS TechRewards você acumule pontos a cada real gasto, podendo trocá-los por passagens aéreas e vantagens exclusivas em nossa loja virtual.',
    },
    {
      title: 'Como funciona',
      subtitle:
        'Você acumula pontos a cada transação realizada com seu cartão de crédito. Além disso, quanto mais você usar os serviços do CS Tech Bank, mais pontos acumula. É simples assim!',
    },
  ],
};

export const testimonials = {
  title: 'Eleve-se a Excelência Inigualável',
  list: [
    {
      avatar: ice,
      name: 'Ice',
      role: 'First level',
      comment:
        'Explore o nível Ice de vendas na Vaypp, uma jornada que vai de 0 a 10 mil reais em vendas. Suba essa escala e alcance um patamar excepcional de sucesso comercial com seus produtos digitais.',
    },
    {
      avatar: brave,
      name: 'Brave',
      role: 'Second level',
      comment:
        'O Nível Brave na Vaypp é para os destemidos, representando vendas de 10 a 100 mil reais. Aqui, os Produtores e Afiliados audaciosos se destacam, transformando conhecimento em sucesso financeiro de maneira notável.',
    },
    {
      avatar: fearless,
      name: 'Fearless',
      role: 'Third level',
      comment:
        'Abraçando o desafio do Nível Fearless na Vaypp, onde vendas de 100 a 200 mil reais revelam os verdadeiros titãs da plataforma. Aqui, a ousadia encontra recompensas extraordinárias, estabelecendo sua posição como um líder destemido no cenário digital, com conquistas financeiras excepcionais.',
    },
    {
      avatar: pride,
      name: 'Pride',
      role: 'Fourth level',
      comment:
        'Destaque-se na multidão no Nível Pride da Vaypp, onde vendas de 200 a 300 mil reais são mais do que números, são a materialização de sua dedicação. Testemunhe seu legado florescer, uma saga de triunfos comerciais que ecoam poderosamente..',
    },
    {
      avatar: spartan,
      name: 'Spartan',
      role: 'fifth level',
      comment:
        'Abra caminho com destemor através do Nível Spartan na Vaypp, onde vendas de 300 a 500 mil reais são o campo de batalha da elite. Erga suas vendas como um guerreiro implacável, deixando uma trilha imponente de sucesso e reforçando sua posição como um verdadeiro líder conquistador no cenário digital.',
    },
    {
      avatar: rage,
      name: 'Rage',
      role: 'Sixth level',
      comment:
        'No Nível Rage da Vaypp, as vendas de 500K a 1M de reais incendeiam sua jornada rumo à supremacia. Domine o campo de batalha com um fogo avassalador de realizações, moldando um império financeiro inimaginável.',
    },
    {
      avatar: warrior,
      name: 'Warrior',
      role: 'Seventh level',
      comment:
        'Entre no domínio lendário do Nível Warrior na Vaypp, onde vendas entre 1 milhão e 2 milhões de reais se tornam as insígnias daqueles que desbravam o impossível. Erga suas conquistas como um guerreiro incansável, trilhando um caminho de grandiosidade financeira que ecoará como um grito de vitória em todo o cenário da plataforma.',
    },
    {
      avatar: king,
      name: 'King',
      role: 'Eighth level',
      comment:
        'Coroe-se como um verdadeiro líder supremo no lendário Nível King da Vaypp, onde vendas extraordinárias entre 2 e 5 milhões de reais transcendem o comum. Neste patamar quase mítico, sua jornada alcança o ápice da grandiosidade financeira, marcando você como uma lenda entre os titãs. Se torne uma inspiração incontestável para todos que buscam a excelência.',
    },
  ],
};

export const footer = {
  description: 'Plantando conhecimentos e colhendo sucessos.',
  links: [
    { name: 'Perguntas frequentes', url: '#' },
    { name: 'Política de Privacidade', url: '#' },
    { name: 'Termos de Uso', url: '#' },
    { name: 'Trabalhe Conosco', url: '#' },
    { name: 'Fale Conosco', url: '#' },
  ],
  contact: [
    'contato@vaypp.com.br',
    '(00) 1234-5678',
    'Rua Fictícia, 1234, Bairro Fictício, Cidade Fictícia - Estado Fictício',
  ],
  copy: 'Copyright © 2023 Vaypp. Todos os direitos reservados.',
  social: [
    { component: instagram, url: '#' },
    { component: twitter, url: '#' },
    { component: linkedin, url: '#' },
  ],
};









'use client'
const projects = [
  {
    id: 1,
    url: 'portfolio',
    img: '/projects/portfolio/thumb.png',
    title: 'Portfolio',
    type: 'Website',
    icon: '/projects/portfolio/home.webp',
    github: 'https://github.com/EvanderInacio/Portfolio',
    web: 'https://evander.vercel.app/',
    description:
      'Meu portfólio criado com o objetivo de mostrar meus projetos ao longo da minha carreira.',
    tags: [
      { name: 'Next JS', icon: '/skills/next-js.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'Styled Components', icon: '/skills/styled-components.svg' }
    ],
    print: [
      { img: '/projects/portfolio/thumb.png' },
      { img: '/projects/portfolio/about.png' },
      { img: '/projects/portfolio/skills.png' },
      { img: '/projects/portfolio/projects.png' },
      { img: '/projects/portfolio/contact.png' },
      { img: '/projects/portfolio/detail-1.png' },
      { img: '/projects/portfolio/detail-2.png' },
      { img: '/projects/portfolio/detail-3.png' },
      { img: '/projects/portfolio/detail-4.png' }
    ],
    video:
      'https://www.youtube.com/watch?v=8Ek_BFSi8Pk&t=2s&ab_channel=EvanderIn%C3%A1cio'
  },
  {
    id: 2,
    url: 'turtle-movie',
    img: '/projects/turtlemovie/turtle.png',
    title: 'Turtle Movie',
    type: 'Website',
    icon: 'https://imgur.com/f0pqZyp.png',
    github: 'https://github.com/EvanderInacio/Turtle-Movie',
    web: 'https://turtle-movie.vercel.app/',
    description:
      'Website usando a API TMDB para fazer a listagem de filmes e series com as melhores notas da semana/dia, além de trazer as obras populares e também com as maiores notas da plataforma da TMDB. Podendo ver detalhes das obras, como Lançamento da obra, duração no caso de filmes, produção, idioma além do pais de origem. Ainda conta com uma listagem de atores populares com a opção de consultar os filmes que determinada pessoa participou.',
    tags: [
      { name: 'React Js', icon: '/skills/react.svg' },
      { name: 'React Router', icon: '/skills/code.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'Styled Components', icon: '/skills/styled-components.svg' }
    ],
    print: [
      { img: '/projects/turtlemovie/turtle-movie.png' },
      { img: '/projects/turtlemovie/movie-popular.png' },
      { img: '/projects/turtlemovie/series-popular.png' },
      { img: '/projects/turtlemovie/detail-home.png' },
      { img: '/projects/turtlemovie/detail-elenco.png' },
      { img: '/projects/turtlemovie/detail-video.png' },
      { img: '/projects/turtlemovie/peoples.png' },
      { img: '/projects/turtlemovie/detail-people.png' }
    ],
    video:
      'https://www.youtube.com/watch?v=wt2g4q2md9g&ab_channel=EvanderIn%C3%A1cio'
  },
  {
    id: 3,
    url: 'playstation',
    img: '/projects/playstation/playstation.webp',
    title: 'PlayStation',
    type: 'Website',
    icon: '/projects/playstation/icon.svg',
    github: 'https://github.com/EvanderInacio/PlayStation',
    web: 'https://playstation-4.vercel.app/',
    description: 'E-commerce Website da PlayStation para vendas de controles.',
    tags: [
      { name: 'Html', icon: '/skills/html.svg' },
      { name: 'Css', icon: '/skills/css.svg' },
      { name: 'JavaScript', icon: '/skills/javascript.svg' }
    ],
    print: [
      { img: '/projects/playstation/playstation-home.png' },
      { img: '/projects/playstation/playstation-home-2.png' },
      { img: '/projects/playstation/playstation-about.png' },
      { img: '/projects/playstation/playstation-product.png' },
      { img: '/projects/playstation/playstation-product-2.png' },
      { img: '/projects/playstation/playstation-buy.png' },
      { img: '/projects/playstation/playstation-contact.png' }
    ],
    video:
      'https://www.youtube.com/watch?v=VZsm-NGse6M&ab_channel=EvanderIn%C3%A1cio'
  },
  {
    id: 4,
    url: 'podcastr',
    img: '/projects/podcastr/podcastr-home.png',
    title: 'Podcastr',
    type: 'Website',
    icon: '/projects/podcastr/icon.svg',
    github: 'https://github.com/EvanderInacio/Podcastr',
    web: 'https://podcastr-evander.vercel.app/',
    description:
      'Podcastr é uma plataforma construída para transmissão de podcast.',
    tags: [
      { name: 'React JS', icon: '/skills/react.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'Next JS', icon: '/skills/next-js.svg' },
      { name: 'Sass', icon: '/skills/sass.svg' }
    ],
    print: [
      { img: '/projects/podcastr/podcastr-home.png' },
      { img: '/projects/podcastr/podcastr-home-2.png' },
      { img: '/projects/podcastr/podcastr-detail.png' }
    ],
    video:
      'https://www.youtube.com/watch?v=a_OoBSceC80&ab_channel=EvanderIn%C3%A1cio'
  },
  {
    id: 5,
    url: 'ds-meta',
    img: '/projects/dsmeta/dsmeta.png',
    title: 'DS Meta',
    type: 'Website',
    icon: '/projects/dsmeta/dsmeta-icon.svg',
    github: 'https://github.com/EvanderInacio/DsMeta',
    web: 'https://dsmeta-evander.netlify.app/',
    description:
      'Aplicação de listagem de vendas, com a opção de filtrar determinados períodos de vendas por data. Além de envio de notificações.',
    tags: [
      { name: 'Java', icon: '/skills/java.svg' },
      { name: 'Spring', icon: '/skills/spring.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'React Js', icon: '/skills/react.svg' },
      { name: 'Axios', icon: '/skills/code.svg' },
      { name: 'API Rest', icon: '/skills/code.svg' },
      { name: 'H2 Database', icon: '/skills/database.svg' }
    ],
    print: [
      { name: 'Home', img: '/projects/dsmeta/dsmeta.png' },
      { name: 'Footer', img: '/projects/dsmeta/dsmeta-footer.png' }
    ],
    video:
      'https://www.youtube.com/watch?v=CxHypCf8QYc&ab_channel=EvanderIn%C3%A1cio'
  },
  {
    id: 6,
    url: 'github-blog',
    img: '/projects/github-blog/github-blog-home.png',
    title: 'Github Blog',
    type: 'Website',
    icon: '/projects/github-blog/logo.svg',
    github: 'https://github.com/EvanderInacio/Github-Blog',
    web: 'https://github-blog-evander.vercel.app/',
    description:
      'Github Blog utiliza a Api do Github para pegar os dados de usuário, e para puxar dados das issues desse repositório para transformar em postagens.',
    tags: [
      { name: 'Next JS', icon: '/skills/next-js.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'Stitches', icon: '/skills/code.svg' }
    ],
    print: [
      { name: 'Home', img: '/projects/github-blog/github-blog-home.png' },
      { name: 'Home', img: '/projects/github-blog/github-blog-home-2.png' },
      { name: 'Home', img: '/projects/github-blog/github-blog-detail.png' },
      { name: 'Home', img: '/projects/github-blog/github-blog-detail-2.png' }
    ],
    video:
      'https://www.youtube.com/watch?v=RcKQNz0n6Ts&ab_channel=EvanderIn%C3%A1cio'
  }
]

export default projects

export default {
  header: {
    menu: [
      {route: '/', text: 'Yo'},
      {route: '/skills', text: 'Habilidades'},
      {route: '/experience', text: 'Experiencia'},
      {route: '/contact', text: 'Contacto'}
    ]
  },
  home: {
    welcome: 'Hola &#128075;, soy Esteban Córdoba',
    mainText:
      [
        'Ubicado en Medellín, Colombia, cuento con más de 4 años de experiencia en el entorno web. Durante este tiempo he desarrollado habilidad para llevar a cabo proyectos completos a través de las diferentes tecnologías y he tenido la oportunidad de participar en proyectos de alto impacto tecnológico tales como  <strong><a target="_blank" href="https://eldorado.aero">El Dorado</a></strong>, <strong><a target="_blank" href="https://futme.co">Futme</a></strong>, entre otros, aportando saberes y experiencias previas para la finalización y sostenibilidad de los mismos.',
        'En mi experiencia he tenido la oportunidad de conocer varias tecnologías de las cuales mis preferidas son Vuejs, Nodejs, PhP  y PostgreSql. Además he podido desarrollar algunas otras habilidades como la comunicación asertiva, trabajo en equipo y un alto sentido de responsabilidad.',
        'Soy una persona tranquila y entregado a las cosas que me apasionan, el desarrollo &#128187;, los videojuegos &#127918; y la buena comida &#128523.'
      ]
  },
  skills: {
    skillsList: {
      mainForntend: [
        { knowledgeLvl: 80, image: 'vue_logo.png', name: 'VueJs', text: 'Nuxtjs, Vuex, Axios' },
        { knowledgeLvl: 60, image: 'html_css_logo.png', name: 'Html - Css', text: 'Componentes, Bootstrap, Flexbox' },
        { knowledgeLvl: 20, image: 'react_logo.png', name: 'ReactJs', text: '' }
      ],
      secFrontend: [
        { image: 'pwa_logo.png', name: 'PWA', secundary: true },
        { image: 'web_push.png', name: 'Web push', secundary: true }
      ],
      mainBackend: [
        { knowledgeLvl: 80, image: 'node_logo.svg', name: 'NodeJs', text: 'Express, Hapi' },
        { knowledgeLvl: 60, image: 'php_logo.png', name: 'PHP', text: 'Estructurado, Lareavel 5.6+' },
        { knowledgeLvl: 80, image: 'db_sql.png', name: 'Bases de datos', text: 'PostgreSql, Mysql, SqlServer, OracleDb' }
      ],
      secBackend: [
        { image: 'socketio.png', name: 'Socket.io', secundary: true },
        { image: 'firebase_logo.png', name: 'Firebase', secundary: true },
        { image: 'dialogflow_logo.jpg', name: 'Dialogflow', secundary: true },
        { image: 'oauth_logo.png', name: 'Oauth', secundary: true },
        { image: 'jwt_logo.jpg', name: 'JWT', secundary: true }
      ]
    }
  },
  experiences: [
    {
      start: '12/2019',
      end: 'Hoy',
      company: 'PLM Group',
      position: 'Desarrollador',
      technologies: 'VueJs, Nodejs, PostgreSql',
      features: [
        'Desarrollar nuevas funcionalidades sobre los sistemas de los clientes de la compañia',
        'Soportar software existente y nuevos',
        'Entregar informes solicitados extraidos desde la DB'
      ]
    },
    {
      start: '01/2019 ',
      end: '11/2019',
      company: 'Mutek (Latin checkout S.A)',
      position: 'Ingeniero de datos Jr',
      technologies: 'AngularJs, Php(Laravel), Mysql, ElasticSearch',
      features: [
        'Recopilación de información mediante eventos (Adobe tag manager)',
        'Agregar funcionabilidad a la herramienta de analitica de la compañia',
        'Realización de pruebas A/B para recopilar datos'
      ]
    },
    {
      start: '03/2018',
      end: '12/2018',
      company: 'Teleguardia LTDA',
      position: 'Desarrollador',
      technologies: 'Vuejs, Python(Tornado), PostgreSql',
      features: [
        'Desarrollar herramienta de administración de contenido para proyecto de la compañia'
      ]
    },
    {
      start: '06/2016',
      end: '02/2018',
      company: 'Fenalco Antioquia',
      position: 'Analista Desarrollador',
      technologies: 'Jquery, Php, Mysql, SqlServer, OracleDb',
      features: [
        'Desarrollar nuevas funcionalidades en las plataformas existentes',
        'Extración de información de la base de datos para informes',
        'Soportar operación de las plataformas de cara al cliente'
      ]
    }
  ],
  contact: {
    placeholders: {
      email: 'Correo eletrónico',
      subject: 'Asunto',
      message: 'Mensaje'
    },
    form: {
      email: 'El email es obligatorio',
      subject: 'El tema es obligatorio',
      message: 'Por favor indique el mensaje',
      button: 'Enviar'
    },
    dialog: {
      ok: 'Gracias por su mensaje, me pondre en contacto lo más pronto posible.',
      btn: 'Aceptar'
    }
  }
}

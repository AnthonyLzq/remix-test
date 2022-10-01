import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  await prisma.status.createMany({
    data: [
      {
        name: 'Junta Directiva'
      },
      {
        name: 'Regular'
      },
      {
        name: 'Aspirante'
      },
      {
        name: 'Miembro Honorario'
      }
    ]
  })

  await prisma.area.createMany({
    data: [
      {
        abstract:
          'Somos un grupo de estudiantes con intereses afines respecto a la Inteligencia Artificial. Nuestro campo de estudio como área, busca abarcar cada una de sus variantes. Nuestra meta es diversificar el conocimiento y hacerlo más accesible a los estudiantes de UNI. Nuestro principal motor es la pasión, y una visión a futuro sobre los impactos éticos que IA traerá en un futuro muy cercano.',
        image: 'https://i.ibb.co/zm5M4cV/IA.png',
        name: 'Inteligencia Artificial'
      },
      {
        abstract:
          'El área de Desarrollo Web, está dedicada a la creación de software que permita la conexión entre los usuarios y la información, haciendo uso de las tecnologías que nos permitan dicho fin.',
        image: '',
        name: 'Desarrollo Web'
      },
      {
        image: '',
        abstract:
          'Área de ACECOM afín a la Seguridad Informática, entre nuestras principales actividades están la de investigar y realizar proyectos con el fin de capacitarnos.',
        name: 'Seguridad Informática'
      },
      {
        image: 'https://ibb.co/zJ566XD',
        abstract:
          'El área de videojuegos está enfocada en el aprendizaje y desarrollo de aplicaciones utilizando como herramienta principal motores de videojuegos y código generado a partir de conceptos de matemática y algoritmia.',
        name: 'Desarrollo de Videojuegos'
      }
    ]
  })

  await prisma.career.createMany({
    data: [
      {
        code: 'N1',
        name: 'Física'
      },
      {
        code: 'N2',
        name: 'Matemática'
      },
      {
        code: 'N3',
        name: 'Química'
      },
      {
        code: 'N5',
        name: 'Ingeniería Física'
      },
      {
        code: 'N6',
        name: 'Ciencia de la Computación'
      }
    ]
  })

  await prisma.member.createMany({
    data: [
      {
        areaId: 2,
        birthday: new Date('2000-03-26T05:00:00.000'),
        careerId: 5,
        code: '20180483J',
        email: 'bpalaciosm@uni.pe',
        git: 'https://github.com/BrandPM18',
        key: false,
        lastName: 'Palacios Mogollon',
        name: 'Brando Miguel',
        phone: '951351845',
        photo:
          'https://i.ibb.co/mDYCHsr/93052706-1573431666153167-4779624316352331776-o.png',
        statusId: 2,
        linkedin: 'https://www.linkedin.com/in/brando-palacios-842b53162'
      },
      {
        areaId: 3,
        birthday: new Date('1998-04-11T05:00:00.000'),
        careerId: 5,
        code: '20162665B',
        email: 'crisebas100@gmail.com',
        git: 'https://github.com/crisebas',
        key: true,
        lastName: 'Garcia Pacheco',
        name: 'Cristopher Sebastian',
        phone: '967580758',
        photo: 'https://cdn2.thecatapi.com/images/bi0.jpg',
        statusId: 2,
        linkedin:
          'https://www.linkedin.com/in/cristopher-sebastian-garcia-pacheco-10a623201'
      },
      {
        areaId: 1,
        birthday: new Date('1998-06-08T05:00:00.000'),
        careerId: 5,
        code: '20180517A',
        email: 'christiansanchezsaune@gmail.com',
        git: 'https://github.com/HiroForYou',
        key: true,
        lastName: 'Sanchez Sauñe',
        name: 'Cristhian Wiki',
        phone: '924130271',
        photo:
          'https://avatars3.githubusercontent.com/u/40742491?s=400&u=24bdb8fda72e16d279fd55249edbe1cde449f21c&v=4',
        statusId: 1,
        linkedin: 'https://www.linkedin.com/in/cristhian-wiki'
      },
      {
        areaId: 4,
        birthday: new Date('2000-10-26T05:00:00.000'),
        careerId: 5,
        code: '20190611K',
        email: 'pierre.ruiz.r@uni',
        git: 'https://github.com/DvlPnk',
        key: true,
        lastName: 'Ruiz Rosas',
        name: 'Pierre Adan Camilo',
        phone: '991598415',
        photo:
          'https://firebasestorage.googleapis.com/v0/b/harper-351515.appspot.com/o/pier.png?alt=media&token=f64aefe5-8502-4301-b4f3-eae6f3abf205',
        statusId: 2,
        linkedin: 'https://www.linkedin.com/in/pierre-ruiz-rosas-2b3b29184'
      },
      {
        areaId: 4,
        birthday: new Date('1993-04-13T05:00:00.000'),
        careerId: 5,
        code: '20132097F',
        email: 'dhidalgoc@uni.pe',
        git: '',
        key: true,
        lastName: 'Hidalgo Chavez',
        name: 'Daniel Alfredo',
        phone: '941377122',
        photo: 'https://i.ibb.co/L1jpLdq/daniel.jpg',
        statusId: 2,
        displayName: 'Daniel Hidalgo',
        linkedin:
          'https://www.linkedin.com/in/daniel-hidalgo-ch%C3%A1vez-671177161'
      },
      {
        areaId: 2,
        birthday: new Date('1998-07-16T05:00:00.000'),
        careerId: 5,
        code: '20162613B',
        email: 'andradec.diego@gmail.com',
        git: 'https://github.com/sjellters',
        key: true,
        lastName: 'Andrade Carril',
        name: 'Diego',
        phone: '926451081',
        photo: 'https://i.ibb.co/Z20PBVL/diego.jpg',
        statusId: 2,
        linkedin: 'https://www.linkedin.com/in/diego-andrade-carril-0986ab1a1'
      },
      {
        areaId: 2,
        birthday: new Date('1996-08-04T05:00:00.000'),
        careerId: 5,
        code: '20140118I',
        email: 'sluzquinosa@uni.pe',
        git: 'https://github.com/AnthonyLzq',
        key: false,
        lastName: 'Luzquiños Agama',
        name: 'Steve Anthony',
        phone: '936962826',
        photo: 'https://avatars.githubusercontent.com/u/43073718?v=4',
        statusId: 2,
        displayName: 'Anthony Luzquiños',
        linkedin: 'https://www.linkedin.com/in/anthony-luzquinos'
      },
      {
        areaId: 2,
        birthday: new Date('2001-01-26T05:00:00.000'),
        careerId: 5,
        code: '20184159B',
        email: 'gverae@uni.pe',
        git: 'https://github.com/BryanVe',
        key: false,
        lastName: 'Vera Esquives',
        name: 'George Bryan',
        phone: '981518751',
        photo:
          'https://avatars3.githubusercontent.com/u/45080817?s=400&u=8cd9a60cf18c63fdcc88dc3b2eb13a18b3503d30&v=4',
        statusId: 2,
        displayName: 'Bryan Vera',
        linkedin: 'https://www.linkedin.com/in/bryan-vera-2ba40219b'
      },
      {
        areaId: 4,
        birthday: new Date('1998-05-25T05:00:00.000'),
        careerId: 5,
        code: '20180426F',
        email: 'eyauyos@uni.pe',
        git: 'https://github.com/EdwinYauyo',
        key: true,
        lastName: 'Yauyo Soto',
        name: 'Edwin Cesar',
        phone: '956286068',
        photo: 'https://i.ibb.co/tQNf6wR/ewin.jpg',
        statusId: 2,
        linkedin: 'https://www.linkedin.com/in/edwin-cesar-yauyo-soto-364425184'
      },
      {
        areaId: 1,
        birthday: new Date('1996-06-17T05:00:00.000'),
        careerId: 5,
        code: '20152231J',
        email: 'luis.vasquez@uni.pe',
        git: 'https://github.com/luislve17',
        key: true,
        lastName: 'Vasquez Espinoza',
        name: 'Luis Leonardo',
        phone: '995399159',
        photo: 'https://avatars3.githubusercontent.com/u/19810460?s=400&v=4',
        statusId: 2,
        linkedin: 'https://www.linkedin.com/in/luis-vasquez-36552a1b3'
      },
      {
        areaId: 2,
        birthday: new Date('1996-09-05T05:00:00.000'),
        careerId: 5,
        code: '20144567B',
        email: 'iipanaquec@uni.pe',
        git: '',
        key: true,
        lastName: 'Ipanaque Casquina',
        name: 'Ingrid Fransheska',
        phone: '982057679',
        photo:
          'https://firebasestorage.googleapis.com/v0/b/harper-351515.appspot.com/o/milo.jpg?alt=media&token=5c457215-beac-47ba-b79b-96b3f8ee275d',
        statusId: 2,
        linkedin:
          'https://www.linkedin.com/in/ingrid-ipanaque-casquina-b55b2617a'
      },
      {
        areaId: 1,
        birthday: new Date('2002-07-17T05:00:00.000'),
        careerId: 1,
        code: '20191505J',
        email: 'angelica.sanchez.a@uni',
        git: 'https://github.com/Angelica-17',
        key: false,
        lastName: 'Sánchez Alcarraz',
        name: 'Angélica del Rosario',
        phone: '946529208',
        photo: 'https://i.ibb.co/pwjB30V/blanquita.jpg',
        statusId: 2
      },
      {
        areaId: 3,
        birthday: new Date('2000-06-26T05:00:00.000'),
        careerId: 5,
        code: '20191516A',
        email: 'malin.garrido.m@uni',
        git: '',
        key: true,
        lastName: 'Garrido Mansilla',
        name: 'Malin Alessandra',
        phone: '978793885',
        photo: 'https://i.ibb.co/16S1kHn/malin.jpg',
        statusId: 2
      },
      {
        areaId: 4,
        birthday: new Date('2000-09-07T05:00:00.000'),
        careerId: 5,
        code: '20184065H',
        email: 'piero759@gmail.com',
        git: 'https://github.com/PieroVioleta',
        key: false,
        lastName: 'Violeta Estrella',
        name: 'Piero Alexis',
        phone: '950978842',
        photo: 'https://i.ibb.co/thKFPys/piero.jpg',
        statusId: 2,
        linkedin:
          'https://www.linkedin.com/in/piero-alexis-violeta-estrella-066181217'
      },
      {
        areaId: 1,
        birthday: new Date('1999-06-06T05:00:00.000'),
        careerId: 5,
        code: '20191001A',
        email: 'diego.bayes.s@uni',
        git: 'https://github.com/FixerDiegoB',
        key: false,
        lastName: 'Bayes Santos',
        name: 'Diego Edson',
        phone: '975805885',
        photo: 'https://cdn2.thecatapi.com/images/ddl.jpg',
        statusId: 2
      },
      {
        areaId: 3,
        birthday: new Date('1997-05-15T05:00:00.000'),
        careerId: 5,
        code: '20180463I',
        email: 'cmoscold@uni.pe',
        git: 'https://github.com/CarlosMoscol',
        key: false,
        lastName: 'Moscol Durand',
        name: 'Carlos Enrique',
        phone: '987862882',
        photo: 'https://i.ibb.co/DVNHbrC/20190921-205116.jpg',
        statusId: 2
      },
      {
        areaId: 2,
        birthday: new Date('1998-06-13T05:00:00.000'),
        careerId: 5,
        code: '20170616G',
        email: 'nrojasm@uni.pe',
        git: 'https://github.com/datanicolas1',
        key: true,
        lastName: 'Rojas Minaya',
        name: 'Nicolás Guillermo',
        phone: '956000304',
        photo: 'https://cdn2.thecatapi.com/images/c0f.jpg',
        statusId: 2
      },
      {
        areaId: 1,
        birthday: new Date('1996-02-28T05:00:00.000'),
        careerId: 5,
        code: '20152734A',
        email: 'nsanabiom@uni.pe',
        git: 'https://github.com/NelsonStevenSM',
        key: true,
        lastName: 'Sanabio Maldonado',
        name: 'Nelson Steven',
        phone: '991624039',
        photo: 'https://i.ibb.co/fdKM73r/nelson.jpg',
        statusId: 2,
        linkedin: 'https://www.linkedin.com/in/nsanabiom'
      },
      {
        areaId: 3,
        birthday: new Date('2001-03-05T05:00:00.000'),
        careerId: 5,
        code: '20191487A',
        email: 'hiteek049@hotmail.com',
        git: '',
        key: false,
        lastName: 'Ricapa Corrales',
        name: 'Ruben Anthony',
        phone: '978738035',
        photo: 'https://i.ibb.co/ZN00N6y/fotode-seguridad.png',
        statusId: 2
      },
      {
        areaId: 3,
        birthday: new Date('1999-01-05T05:00:00.000'),
        careerId: 5,
        code: '20170333E',
        email: 'dmorantem@uni.pe',
        git: 'https://github.com/dvid1999',
        key: false,
        lastName: 'Morante Moran',
        name: 'David Willians',
        phone: '910290043',
        photo: 'https://www.orce.uni.edu.pe/fotosuni/006020170333E.jpg',
        statusId: 2
      },
      {
        areaId: 1,
        birthday: new Date('2002-03-30T05:00:00.000'),
        careerId: 5,
        code: '20194100K',
        email: 'ajulissa2002@gmail.com',
        git: '',
        key: false,
        lastName: 'Garcia Cayetano',
        name: 'Julissa Allison',
        phone: '964288604',
        photo:
          'https://fotos.subefotos.com/66538c0e5c491bff94a5ec3c10524d80o.jpg',
        statusId: 2
      },
      {
        areaId: 2,
        birthday: new Date('1994-09-14T05:00:00.000'),
        careerId: 5,
        code: '20132631B',
        email: 'jhon.rojas.i@uni',
        git: '',
        key: true,
        lastName: 'Rojas Isidro',
        name: 'Jhon Alexander',
        phone: '961519118',
        photo: 'https://i.ibb.co/hfVhhpR/ion.png',
        statusId: 4
      },
      {
        areaId: 4,
        birthday: new Date('2003-02-22T05:00:00.000'),
        careerId: 5,
        code: '20200605H',
        email: 'chandler.perez.c@uni',
        git: 'https://github.com/chandler-pc',
        key: false,
        lastName: 'Pérez Cueva',
        name: 'Chandler Steven',
        phone: '963634165',
        photo: 'https://cdn2.thecatapi.com/images/dOLtfuSOV.jpg',
        statusId: 2,
        linkedin: 'https://www.linkedin.com/in/chandler-pc'
      },
      {
        areaId: 1,
        birthday: new Date('2001-02-09T05:00:00.000'),
        careerId: 5,
        code: '20192196K',
        email: 'alexander.lique.l@uni',
        git: 'https://github.com/alexliqu09',
        key: false,
        lastName: 'Lique Lamas',
        name: 'Alexander Leonardo',
        phone: '981272242',
        photo: 'https://cdn2.thecatapi.com/images/5rp.jpg',
        statusId: 1,
        linkedin:
          'https://www.linkedin.com/in/alexander-leonardo-lique-lamas-47b8361a1'
      },
      {
        areaId: 2,
        birthday: new Date('2000-11-28T05:00:00.000'),
        careerId: 5,
        code: '20180355A',
        email: 'dsalazarv@uni.pe',
        git: 'https://github.com/diegosv2000',
        key: false,
        lastName: 'Salazar Vergara',
        name: 'Diego Edgardo',
        phone: '963874126',
        photo:
          'https://i.ibb.co/Ms0Pyvc/69667699-1441548475994647-4169967770408058880-n.jpg',
        statusId: 2,
        linkedin: 'https://www.linkedin.com/in/dsalazarv'
      },
      {
        areaId: 1,
        birthday: new Date('1989-09-04T05:00:00.000'),
        careerId: 5,
        code: '20175526F',
        email: 'jnavio@uni.pe',
        git: 'https://github.com/JnavioT',
        key: false,
        lastName: 'Navio Torres',
        name: 'Jose Luis',
        phone: '977528559',
        photo: 'https://cdn2.thecatapi.com/images/46m.jpg',
        statusId: 1
      }
    ]
  })

  console.log('Seed complete')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

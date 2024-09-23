/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Randretsa",
  title: "Bonjour, je suis Andrianjaka",
  subTitle: emoji(
    "En dernière année de Master en Big Data Intelligence for Human Augmented Reality (BIHAR) à l'ESTIA – Université de Bordeaux, je suis passionné par la science, la technologie et le numérique. Toujours en quête de nouveaux défis, je suis prêt à mobiliser mes compétences techniques pour contribuer à vos projets et faire avancer vos idées."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/randretsa",
  linkedin: "https://www.linkedin.com/in/andrianjaka-randretsa-86623b218/",
  gmail: "randretsaandrianjaka30@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/andry.randretsa.37/",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Mes compétences",
  subTitle: "Développeur full stack",
  skills: [
    emoji(
      "⚡ Développement d'interfaces graphiques interactives pour des applications web et mobiles"
    ),
    emoji("⚡ Conception de la logique métier selon une architecture microservices ou monolithique"),
    emoji(
      "⚡ Intégration d'API tierces"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      skillLogo: require('./assets/images/html.png'),
      altLogo: "logo",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      skillLogo: require('./assets/images/css.png'),
      altLogo: "logo",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      skillLogo: require('./assets/images/javascript.png'),
      altLogo: "logo",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      skillLogo: require('./assets/images/react.png'),
      altLogo: "logo",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "spring framework",
      skillLogo: require('./assets/images/spring.png'),
      altLogo: "logo",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "mongoDB",
      skillLogo: require('./assets/images/mongodb.png'),
      altLogo: "logo",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      skillLogo: require('./assets/images/sqldatabase.png'),
      altLogo: "logo",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ESTIA",
      logo: require("./assets/images/logo-estia.png"),
      subHeader: "Master BIHAR",
      duration: "2023 - Ajourd'hui",
      desc: /*Z"Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ..."*/"",
      descBullets: []
    },
    {
      schoolName: "IT University",
      logo: require("./assets/images/itu.png"),
      subHeader: "Diplôme de licence en informatique",
      duration: "Novembre 2020 - Octobre 2023",
      desc: "Formations spécialisées dans les domaines des sciences et technologies:",
      descBullets: [
        "Développement d'application",
        "Web et design",
        "Base de données et réseaux",
      ]
    },
    {
      schoolName: "Lycée Saint Antoine",
      logo: require("./assets/images/lsa.jpeg"),
      subHeader: "Diplôme du baccalauréat série C",
      duration: "2005 - Novembre 2020",
      desc: /*"Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ..."*/"",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech ience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Gestion des bases de données",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Développeur Full Stack",
      company: "Ibonia",
      companylogo: require("./assets/images/ibonia.png"),
      date: "Juillet 2023 – Aujourd'hui",
      desc: "Ma participation à divers projets de l'entreprise m'a permis d'affiner mes compétences techniques et humaines.",
      descBullets: [
        "Application de la méthode Agile SCRUM",
        "Communication en entreprise",
        "Maîtrise du Domain-Driven Design",
      ]
    },
    {
      role: "Développeur Freelance",
      company: "Buy your way",
      companylogo: require("./assets/images/byw.png"),
      date: "Octobre 2023 – Mars 2024",
      desc: "En tant que développeur Front-End, ma mission consistait à concevoir des interfaces utilisateur pour la gestion du back-office d'un salon virtuel.",
      descBullets: [
        "Intégration du design",
        "Optimisation de l'expérience utilisateur",
        "Interfaces graphiques intuitives et interactives",
      ]
    },
    {
      role: "Mon portfolio",
      company: "Projets personnels",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "2024",
      desc: "Dans mon temps libre, je prends toujours le temps de coder pour apprendre de nouvelles choses dans ce monde en constante évolution.",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Mes certifications 🏆 "),
  subtitle:
    "Voici les certifications que j'ai obtenues !",

  achievementsCards: [
    {
      title: "Design Thinking",
      subtitle:
        "Formation animée par Tahiry Ramanantsoa, organisée par la Chambre de Commerce et d'Industrie France-Madagascar.",
      image: require("./assets/images/designThinking.jpg"),
      imageAlt: "Formation CCIFM",
      footerLink: [
        {
          name: "Tahiry Ramanantsoa",
          url: "https://www.linkedin.com/in/ramanantsoa-tahiry-a9080a3a/"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Méthode Agile SCRUM",
      subtitle:
        "Formation exceptionnelle animée par le Dr. Alain Nimbol Rivosoaniaina, sous l'égide de la Chambre de Commerce et d'Industrie France-Madagascar.",
      image: require("./assets/images/ccifm.jpg"),
      imageAlt: "Formation SCRUM",
      footerLink: [
        {
          name: "Dr. Alain Nimbol Rivosoaniaina",
          url: "https://www.linkedin.com/in/alain-nimbol/"
        }
      ]
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactez-moi ☎️"),
  subtitle:
    "Envie de discuter d'un projet ou juste de dire bonjour ? Ma boîte mail est ouverte à tous !",
  number: "+261-342056050",
  email_address: "randretsaandrianjaka30@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

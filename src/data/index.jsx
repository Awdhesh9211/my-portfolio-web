import { CgWebsite } from "react-icons/cg";
import { FaCode, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

// Data for Navigation
export const NAV_ITEMS = [
    { name: "Home", link: "#header" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" }
  ];
  
  // Data for Skills, Experience, Education (About Section)
  export const ABOUT_DATA = {
    skills: [
      { title: "Backend", description: "Developing Backend by NodeJS and Laravel" },
      { title: "Frontend", description: "Developing Frontend by React and Laravel" },
      { title: "App", description: "Developing App by Flutter and React-Native" }
    ],
    experience: [
      { title: "Full Stack Intern", company: "TCR Innovation" }
    ],
    education: [
      { title: "BCA", institution: "Sahyog College of IT & Management" },
      { title: "HSC", institution: "G.S.S English High School" },
      { title: "SSC", institution: "G.S.S English High School" }
    ]
  };
  
  // Data for Services
  export const SERVICES = [
    {
      title: "Web Development",
      description: "We specialize in creating dynamic and responsive websites that deliver an exceptional user experience. From custom design to seamless functionality, our web development services are tailored to meet your business needs and provide a robust online presence."
    },
    {
      title: "App Development",
      description: "Our team builds innovative and high-performance mobile applications for iOS and Android. We focus on delivering user-friendly apps that integrate the latest technology to enhance functionality and engagement, ensuring your brand stands out in a competitive market."
    },
    {
      title: "Backend Development",
      description: "Our backend development services focus on creating scalable, secure, and efficient server-side solutions. We build robust APIs, databases, and cloud-based systems to power your digital products, ensuring smooth performance and data integrity across all platforms."
    }
  ];
  
  
  // Data for Portfolio Items
  export const PORTFOLIO_ITEMS = [
    { image: "projects/mini_moviemax.png", title: "MovieMax", description: "Created By Using ReactJS for Learning Purpose", WebLink: "https://awdhesh9211.github.io/mini_moviemax/" , web:<CgWebsite />, code:<FaCode/>,CodeLink:"https://github.com/Awdhesh9211/mini_moviemax"},
    { image: "projects/flutter_chat_app.png", title: "Chat App", description: "Created By Using Flutter", WebLink: "https://github.com/Awdhesh9211/flutter-chatapp" , web:<CgWebsite />, code:<FaCode/>,CodeLink:"https://github.com/Awdhesh9211/flutter-chatapp"},
    { image: "projects/BubbleGo.png", title: "Bubble Go", description: "Created By Using HTML / CSS / JS", WebLink: "https://awdhesh9211.github.io/BubbleGo/" , web:<CgWebsite />, code:<FaCode/>,CodeLink:"https://github.com/Awdhesh9211/BubbleGo"},
    { image: "projects/tic_tac_toe.png", title: "TIC TAC TOA", description: "Created By Using HTML / CSS / JS", WebLink: "https://awdhesh9211.github.io/Tic-tac-toe/" , web:<CgWebsite />, code:<FaCode/>,CodeLink:"https://github.com/Awdhesh9211/Tic-tac-toe"},
    { image: "projects/anime_explorer.png", title: "Anime Explorer", description: "Created By Using NextJs", WebLink: "https://github.com/Awdhesh9211/anime-explorer-next"},
  ];
  
  // Data for Contact
  export const CONTACT = {
    email: "gaundawdhesh9211@gmail.com",
    phone: "8419968404",
    socialLinks: [
      // { icon: <FaFacebook size={30} />, link: "#facebook" },
      // { icon:  <FaInstagram size={30} />, link: "#insta" },
      { icon:  <FaLinkedin size={30} />, link: "https://www.linkedin.com/in/awdhesh-gaund-0a2791285/" },
      { icon: <FaGithub size={30} />, link: "https://github.com/Awdhesh9211" }
    ],
    resumeLink: "#",
  };
  
  // Footer text
  export const FOOTER_TEXT = "&copy; 2024 Awdhesh. All Rights Reserved.";
  
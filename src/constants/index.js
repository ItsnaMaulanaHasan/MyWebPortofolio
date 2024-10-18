import { backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, git, figma, udinus, dncc, bengkod, estimasi_laptop, webdncc, threejs, certify, btng, dinacom, brewcoffee, apple } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Mobile Developer",
    company_name: "Bengkel Koding at UDINUS",
    icon: bengkod,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Present",
    points: [
      "Building a scheduling and attendance system for teh Bengkel Koding (Bengkod) at Dian Nuswantoro University, here I built mobile application for students to take attendance with a Qr Code.",
      "Working im a team of 2, I built a scheduling and attendance system at Bengkel Koding (Bengkod) in a mobile version for the student side.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Bengkel Koding at UDINUS",
    icon: bengkod,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Present",
    points: [
      "Building a scheduling and attendance system at UDINUS, especially for the Bengkel Koding (Bengkod) course in the informatics engineering study program, where the scheduling an attendance system in Bengkod is still manual, so I am here building a web-based scheduling and attendance system with attendance features with QR Code.",
      "Working in a team of 5 people, I was in charge of building the frontend using NextJs and the ReactJs library.",
    ],
  },
  {
    title: "Lecture Assistant",
    company_name: "Bengkel Koding at UDINUS",
    icon: bengkod,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Present",
    points: [
      "Assist lecturers in creating cryptography course material, especially creating code for cryptographic algorithms.",
      "Created approximately 8 classical and modern cryptographic algorithms, and algorithms for steganography as well.",
      "Being a mentor and also an assistant for career guidance courses in the web development section, here I help students in facing the Web Developer certification exam at Dian Nuswantro University",
    ],
  },
  {
    title: "App Designer and iOS Developer",
    company_name: "Apple Foundation at UC",
    icon: apple,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Sep 2024",
    points: [
      "Learned about CBL (Challenge Based Learning), which is how to develop an idea based on a problem we experience.",
      "Learn how to design apps on iOS that are correct and user friendly.",
      "build an iOS application using swift programming language with SwiftUI and SwiftData frameworks.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Dian Nuswantoro Computer Club",
    icon: dncc,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Agu 2024",
    points: [
      "Building a website for the DNCC organization.",
      "Building a website for the New Generation Basic Training event (BTNG) 2023.",
      "Building a website for the Dinus Application Competition (DINACOM)  2024.",
      "Provide basic training on web programming for DNCC members.",
    ],
  },
  {
    title: "Computer Lab Assistant",
    company_name: "Universitas Dian Nuswantoro",
    icon: udinus,
    iconBg: "#E6DEDD",
    date: "Agu 2022 - Mar 2023",
    points: [
      "Became a Lecture assistant in teaching in the computer lab in Basic Programming course.",
      "Became a Lecture assistant in teaching in the computer lab in Basic Computing course.",
      "Assisted lecturers in supervising exams in the computer lab and also assisted in grading for about 20 students in each class.",
    ],
  },
];

const projects = [
  {
    name: "The Laptop Price Estimation Application",
    description:
      "The Laptop Price Estimation Application is a website application created with the help of Streamlit, and uses the Python programming language and uses a linear regression algorithm to train the dataset. The dataset used is a dataset of laptop prices totaling approximately 1304 datasets.",
    tags: [
      {
        name: "python",
        color: "orange-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "liniear-regression-algorithm",
        color: "pink-text-gradient",
      },
    ],
    image: estimasi_laptop,
    source_code_link: "https://app-estimasi-harga-mobil-bekas-bmw-pli6kohm72.streamlit.app/",
  },
  {
    name: "Certify",
    description:
      "Certify is the final project assignment of the cryptography course. Certify is a web application that is useful for creating stegano certificates and at the same time checking the authenticity of an online certificate. In carrying out its function, Certify uses the LSB algorithm to embed hidden messages into certificates. This Web Certify was created using ReactJS and for the backend using Express.",
    tags: [
      {
        name: "python",
        color: "orange-text-gradient",
      },
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: certify,
    source_code_link: "https://github.com/ItsnaMaulanaHasan/certify-project.git",
  },
  {
    name: "Website DNCC (Dian Nuswantoro Computer Club)",
    description: "This website is the official website of the DNCC (Dian Nuswantoro Computer Club) organization. The website was built using the CodeIgniter 4 framework and styling was assisted with TailwindCSS.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "ci4",
        color: "pink-text-gradient",
      },
    ],
    image: webdncc,
    source_code_link: "https://dnccudinus.org/",
  },
  {
    name: "Website BTNG (Basic Training Next Generation)",
    description:
      "This website is the official website for the BTNG (Basic Training Next Generation) event which was built with the ReactJs framework. This event is an annual program from the DNCC (Dian Nuswantoro Computer Club) which aims to provide basic training to members of the DNCC division.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: btng,
    source_code_link: "https://btng.dnccudinus.org/",
  },
  {
    name: "Website DINACOM (Dinus Application Competition)",
    description:
      "This website is the official website of the DINACOM (Dinus Application Competition) event held by UDINUS and organized by DNCC. Dinus Application Competition (DINACOM) is a competition in the field of information technology at the national level.The products being competed in DINACOM are website-based applications, mobile applications and desktop applications. This website was built using the Laravel framework and also TailwindCSS.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
    ],
    image: dinacom,
    source_code_link: "https://dinacom.dnccudinus.org/",
  },
  {
    name: "brewCoffee",
    description:
      "brewCoffee is an innovative app designed for coffee lovers with gerd. The app allows users to track their daily caffeine intake and ensure consumption remains safe with a predetermined maximum limit per day. In addition, brewCoffee also provides various articles on coffee beans that are more friendly to people with gerd and helps users choose coffee that suits their health condition. With brewCoffee, you can enjoy your coffee without worrying about your stomach health. This iOS app is designed in swift programming language with swiftUI and swiftData frameworks.",
    tags: [
      {
        name: "swift",
        color: "pink-text-gradient",
      },
      {
        name: "swiftUI",
        color: "blue-text-gradient",
      },
      {
        name: "swiftData",
        color: "green-text-gradient",
      },
    ],
    image: brewcoffee,
    source_code_link: "https://github.com/jonathankl4/brewCoffee.git",
  },
];

export { services, technologies, experiences, projects };

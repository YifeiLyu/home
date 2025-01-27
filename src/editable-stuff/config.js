// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Yifei",
  middleName: "",
  lastName: "Lyu",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/YifeiLyu",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/lyuyifei1999/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/yifeilyu-berkeley/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Yifei_Lyu_OPT.jpg"),
  imageSize: 375,
  message:
    "I am currently a master of engineering student from UC Berkeley with a concentration in Electrical Engineering and Computer Sciences. After appreciating the beauty of engineering (and my childhood love of Transformers), I quit my original Clinical Medicine major in my freshman year and received my bachelor's degree in robotics engineering from Southeast University in 2022. My engineering fields lie in robotic vision and learning, and I have completed various software projects based on mobile robots like NEXT, Turtlebot and EAI, through C++ and Python in diverse software environments such as ROS, Gazebo, and Webots. I was also a research assistant at the Chinese University of Hong Kong and researched multi-robot SLAM. In industry, I used to work as a computer vision engineer in the direction of human key point detection at a Chinese technology start-up. Due to the universal perception technology and the high similarity of robot systems and self-driving technology, I am now interested in software development in autonomous driving and its computer vision applications.",
  resume: "https://drive.google.com/file/d/1-3g8HKTX5lzQzzMXgV44wsc8qJqVBBha/view?usp=sharing",
};


// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "YifeiLyu", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

const education = {
  show: false,
  heading: "Education",
  lists: [
    {
      university: "Southeast University",
      degree: "Bachelor of Engineering - BE, Robotics",
      time: "2018 - 2022",
      description:" - GPA: 3.88/4.0, Average Score: 91/100, Ranking: 2/37\n- President’s Scholarship (Top 1%)\n- Member of OneCo Lab (Prof. Wankou Yang)."
    },
    {
      university: "University of California, Berkeley",
      degree: "Master of Engineering - MEng, Electrical Engineering & Computer Sciences",
      time: "2022 - 2023",
      description:"- Fung Institute's Scholarship\n- Member of Barsky Lab (Prof. Brian A. Barsky)"
    }]
  };

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "ROS", value: 85 },
    { name: "Gazebo", value: 65 },
    { name: "C/C++", value: 65 },
    { name: "Webots", value: 80 },
    { name: "PyTorch", value: 75 },
    { name: "OpenCV", value: 65 },
    { name: "NumPy & Pandas", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Robotics Software Engineering or Machine Learning / Autonomous Driving opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "yifei_lyu@berkeley.edu",
};

const experiences = {
  show: true,
  heading: "Education",
  data: [
    {
      name: 'Southeast University',
      role1: 'Bachelor of Engineering',// Here Add Company Name
      role2: 'Robotics',
      companylogo: require('../assets/img/southeast.jpeg'),
      date: '2018 - 2022',
    },
    {
      name: 'University of California, Berkeley',
      role1: 'Master of Engineering',
      role2: 'Electrical Engineering & Computer Sciences',
      companylogo: require('../assets/img/berkeley.jpeg'),
      date: '2022 - 2023',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, education, repos, skills, leadership, getInTouch, experiences };

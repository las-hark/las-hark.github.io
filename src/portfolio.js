/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Yiyi's Portfolio",
  description:
    "A passionate machine learning engineer who always thrives to work on end to end solution with state-of-the-art techniques.",
  og: {
    title: "Yiyi Zhang Portfolio",
    type: "website",
    url: "https://las-hark.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Yiyi Zhang",
  logo_name: "YiyiZhang",
  nickname: "",
  subTitle:
    "A passionate machine learning engineer who always thrives to work on user-friendly technical systems with multimodal data.",
  // resumeLink:
  //   "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharig",
  // portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/las-hark",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/las-hark",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yiyi-zhang-b56a71297/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:yiyizhang112@outlook.com",
    fontAwesomeIcon: "fa-microsoft", //Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#004788", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Machine Learning & Deep Learning",
      fileName: "DataScienceImg", //还没改
      skills: [
        "⚡ Establishing highly scalable models for deep learning and statistical use cases",
        "⚡ Proficient in Tabular Learning, Computer Vision and Signal Processing tasks",
        "⚡ Independently developing solutions from traning-tuning-testing to deploying",
        "⚡ Experienced modelling on multiple cloud platforms especially in Azure",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "HuggingFace",
          fontAwesomeClassname: "logos:hugging-face-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "devicon:opencv-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Data Mining and Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing pipelines to end-to-end transfer data",
        "⚡ Pre-processing large-scale data based on properties",
        "⚡ Visualizing targets to reveal characters",
        "⚡ Discovering knowledge from database",
      ],
      softwareSkills: [
        {
          skillName: "SkLearn",
          fontAwesomeClassname: "devicon:scikitlearn",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Spark",
          fontAwesomeClassname: "logos:apache-spark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "devicon:matplotlib",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Seaborn",
          fontAwesomeClassname: "logos:seaborn-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "devicon:pandas-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "logos:numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "skill-icons:r-light",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Embedded System Developing",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Implementing FPGA and microcontroller systems",
        "⚡ Designing digital integrated circuits with microchips",
        "⚡ Conducting host servers to interact based on various protocols",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "IC",
          fontAwesomeClassname: "file-icons:vhdl",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "FPGA",
          fontAwesomeClassname: "codicon:circuit-board",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "VHDL",
          fontAwesomeClassname: "vscode-icons:file-type-vhdl",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "CPP",
          fontAwesomeClassname: "vscode-icons:file-type-cpp3",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Arduino",
          fontAwesomeClassname: "devicon:arduino-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "mysql",
          fontAwesomeClassname: "devicon:mysql-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "What's more about her?",
      fileName: "",
      skills: [
        "⚡ Wearable equipment designer with a Chinese national award ( proudly ;D )",
        "⚡ Illustrator and character designer",
        "⚡ Best-taste vintage buyer",
        "⚡ Cutest cat keeper",
        "⚡ Horror lover immersing in Reddit NonSleep group to have some bedtime stories",
        "⚡ Video gamer however not a 3A fan",
        "⚡ Not enough? Get to know her in person!",
      ],
      softwareSkills: [],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    //{
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Utrecht University",
      subtitle: "Master of Science in Human-Computer Interaction",
      logo_path: "UU.png",
      alt_name: "HCI UU",
      duration: "2023 - NOW",
      descriptions: [
        "Leading reseach university in the Netherlands since 1636",
        "⚡ I have taken varity of courses related to AI and Human-AI interaction with a GPA of 8.2/10.",
        "⚡ I have done a research assistantship of the object tracking based on YOLO model for gaze detection.",
        "⚡ I have been doing my graduation project in Mercedes-Benz Mobility Athlon about Residual Value Prediction with Tabluer Learning.",
        "⚡ I'm pursuing the Cum Laude at the final stage with high expectations of myself.",
      ],
      website_link: "https://www.uu.nl/en/masters/human-computer-interaction",
    },
    {
      title: "Chongqing University",
      subtitle: "Bachelor of Engineering in Medical Engineering",
      logo_path: "CQU.png",
      alt_name: "CQU BME",
      duration: "2019 - 2023",
      descriptions: [
        "Key national university in 39 985-Project Universities of China",
        "⚡ I have been trained as a medical device engineer by courses of medicine, electronic engineering and computer science, Cum laude.",
        "⚡ I have worked on a research project of brain-computer interface, awarded as the Outstanding Undergraduate Project by Chongqing Municipality.",
        "⚡ I have followed my interest of AI to develop extracurricular projects of mathematical modelling, EEG staging, and trajectory prediction.",
        "⚡ I have won national awards, university awards and school awards during my bachelor, selected as the Outstanding Graduate.",
      ],
      website_link: "https://english.cqu.edu.cn/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Engineer, Researcher & Developer",
  subtitle: "Internship and Self-Initiated",
  description1: "Welcome to My Non-stopping Exploration of",
  description2: "AI and Interaction Topics",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   work: true,
    //   experiences: [
    //     {
    //       title: "Machine Learning Engineer",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "June 2023 - Present",
    //       location: "San Jose, CA, USA",
    //       description:
    //         "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Associate AI Engineer",
    //       company: "Legato Health Technology",
    //       company_url: "https://legatohealthtech.com/",
    //       logo_path: "legato_logo.png",
    //       duration: "June 2020 - Aug 2021",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
    //       color: "#0879bf",
    //     },
    //     {
    //       title: "Android and ML Developer",
    //       company: "Muffito Incorporation",
    //       company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //       logo_path: "muffito_logo.png",
    //       duration: "May 2018 - Oct 2018",
    //       location: "Pune, Maharashtra",
    //       description:
    //         "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //       color: "#9b1578",
    //     },
    //     {
    //       title: "Android Developer",
    //       company: "FreeCopy Pvt. Ltd.",
    //       company_url: "https://www.linkedin.com/company/freecopy/about/",
    //       logo_path: "freecopy_logo.png",
    //       duration: "Nov 2017 - Dec 2017",
    //       location: "Ahmedabad, Gujarat",
    //       description:
    //         "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
    //       color: "#fc1f20",
    //     },
    //   ],
    // },
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "AI and Data Science Research Intern",
          company: "Athlon (Mercedes-Benz Mobility AG)",
          company_url: "https://www.athlon.com/",
          logo_path: "athlon.png",
          duration: "Sept 2024 - Now",
          location: "Almere, Netherlands",
          description:
            "Combining research insight and industrial application, my primary work covered DL/ML-based predictive modeling, data engineering, and data analyzing on Azure platforms, including my Master Graduation Research boosting the improved technique for deep tabular learning. Besides, I also worked on developing chatbot with RAG for driver desk.",
          color: "#000000",
        },
        {
          title: "AI Research Intern",
          company: "Utrecht University",
          company_url: "https://www.delhivery.com/",
          logo_path: "UU.png",
          duration: "July 2024 - Jan 2025",
          location: "Utrecht, Netherlands",
          description:
            "Based on multi-view coutinous and discrete data, I developed a detector-tracker model combining YOLOv8 and BortSort to track multiple objects in the free-playground child-parent interaction scenario. I also designed post-processing algorithms to optimize the tracking by involving adjacent trajectory information.",
          color: "#ee3c26",
        },
        {
          title: "Brain-computer Interface Research Intern",
          company: "Chongqing Neurobiology Laboratory, Chongqing University",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "CQU.png",
          duration: "Mar 2021 - May 2022",
          location: "Chongqing, China",
          description:
            "I spearheaded an undergraduate research project examining the effects of deep brain stimulation of the entorhinal cortex on neural responses of Alzheimer's disease mice. I played a pivotal role in assisting with animal experiments, conducting both neurological and behavioral studies, and processing and analyzing local field potential signals. Additionally, I performed comprehensive statistical analysis of the data collected. This project was awarded as an Outstanding Project by the Chongqing Municipality.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Self-Initiated",
      experiences: [
        // {
        //   title: "Algorithm Developer",
        //   company: "Google",
        //   company_url: " ",
        //   logo_path: "google_logo.png",
        //   duration: "June 2019 - April 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
        //   color: "#4285F4",
        // },
        {
          title: "Embeded System Engineer",
          company: "A Snow Storm of Connectivity",
          company_url: " ",
          logo_path: "architect.png",
          duration: "Jan 2024 - April 2024",
          location: " ",
          description:
            "I designed the snow-globe system with 13 embedded functions on the ESP32S3 for fantastic remote interaction. I set up a host server to support MQTT and HTTP services, enabling seamless communication. Additionally, I contributed to designing application scenarios and developing prototypes to enhance the user experience.",
          color: "#D83B01",
        },
        {
          title: "AI Researcher",
          company:
            "Interventional Needle Tracking Based on Lightweight CNN-LSTM",
          company_url: " ",
          logo_path: "researcher.png",
          duration: "Nov 2022 - May 2023",
          location: " ",
          description:
            "Based on the Ultra-sound puncture operation record I collected in lab, I labeled 1800 continous frames, further augmented into 21270 enhanced sequences. I designed a CNN-ConvLSTM model with Keras to track tip location based on time series and a ROI-based morphological tracking algroithm, finally achieving a 0.03s precise tracking with only 3.86pixel difference",
          color: "#000000",
        },
        {
          title: "Cloud Architecture & Machine Learning Engineer",
          company: "Sleeping as a Baby: Wise Sleep Monitoring Neck-Pillow",
          company_url: " ",
          logo_path: "engineer.png",
          duration: "Apr 2022 - Aug 2022",
          location: " ",
          description:
            "My work involved designing algorithms to analyze 47 sleep factors derived from 7 types of signals collected by the devices. I enhanced a multi-branch Depthwise Separable CNN with the ECA module for EEG classification. Additionally, I developed a cloud-based HTTP server on Azure to save record from wearable device into database, generate visualized report with deployed models, and transfer it to mobile APP.",
          color: "#0C9D58",
        },
        // {
        //   title: "Data Scientist",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Deep Learning, Embedded Application, Cloud System and Data Science projects.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    //{
    // id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

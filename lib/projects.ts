export type Project = {
  name: string;
  subHeader: string | null;
  description: string;
  techUsed: string[];
  startDate: string;
  endDate: string | null;
  website: string | null;
  github: string | null;
  image: string;
  bulletPoints: string[];
};

const projects: Project[] = [
  {
    name: "Trash",
    subHeader: null,
    description:
      "A command line utility as a replacement to rm. Moves the file(s) to a tmp folder and gives ability to undo.",
    techUsed: ["Rust"],
    startDate: "02/2024",
    endDate: "02/2024",
    website: null,
    github: "https://github.com/jpal91/trash",
    image: "trash.png",
    bulletPoints: [],
  },
  {
    name: "Boil",
    subHeader: null,
    description:
      "A project written in Rust to assist in keeping track of user generated scripts, and generate boilerplate code more easily.",
    techUsed: ["Rust"],
    startDate: "02/2024",
    endDate: null,
    website: null,
    github: "https://github.com/jpal91/boil",
    image: "boil.png",
    bulletPoints: [],
  },
  {
    name: "Colorize",
    subHeader: null,
    description:
      "A set of Rust macros to assist in turning text into colors for printing on the terminal.",
    techUsed: ["Rust"],
    startDate: "02/2024",
    endDate: null,
    website: null,
    github: "https://github.com/jpal91/colorize",
    image: "colorize.png",
    bulletPoints: [],
  },
  {
    name: "Xontrib-ChatGPT",
    subHeader: null,
    description:
      "A extension for the Xonsh shell that allows users to communicate with ChatGPT directly from the command line",
    techUsed: ["Python", "Xonsh", "ChatGPT"],
    startDate: "10/2023",
    endDate: null,
    website: null,
    github: "https://github.com/jpal91/xontrib-chatgpt",
    image: "xontrib-chatgpt.png",
    bulletPoints: [],
  },
  {
    name: "IntelliGift.co",
    subHeader: null,
    description:
      "Generates gift ideas using AI and machine learning. Suggested products are given with an Amazon Affiliate link for revenue generation",
    techUsed: ["Python", "Next.js", "Material UI", "AWS"],
    startDate: "05/2023",
    endDate: "07/2023",
    website: "https://intelligift.co",
    github: null,
    image: "intelligift.jpg",
    bulletPoints: [
      "Generates gift ideas using AI and machine learning",
      "Utilizes Next.js and Material UI on the front-end",
      "Leverages AWS Lambda functions to run Python scripts that generate gift ideas using AI and machine learning",
      "Uses AWS DynamoDB to store gift ideas and user information",
    ],
  },
  {
    name: "Resume",
    subHeader: "(The page you're on right now!)",
    description:
      "This resume project was built using Next.js, AWS, Terraform, Python, and more. Utilizes my knowledge of IaC to leverage the power of AWS services and show what's possible in the cloud. Includes a separate back-end repo that is linked from this GitHub repo as well.",
    techUsed: ["Next.js", "Material UI", "AWS", "Terraform"],
    startDate: "12/2022",
    endDate: null,
    website: null,
    github: "https://github.com/jpal91/resume",
    image: "resume.png",
    bulletPoints: [],
  },
  {
    name: "LeetCode Solutions",
    subHeader: null,
    description:
      "An ongoing project to add code solutions to algorithm and data structure problems presented on the coding challenge site LeetCode.",
    techUsed: ["Python", "JavaScript", "SQL"],
    startDate: "10/2022",
    endDate: null,
    website: null,
    github: "https://github.com/jpal91/leetcode",
    image: "leetcode.png",
    bulletPoints: [
      "An ongoing project to add code solutions to algorithm and data structure problems presented on the coding challenge site LeetCode",
      "Included comments to briefly describe each solution, its development, along with time and space complexity",
      "Successfully developed over 400 solutions on LeetCode in Python, JavaScript, and SQL",
    ],
  },
  {
    name: ".MARKDOWN",
    subHeader: "In-Browser Markdown Editor",
    description:
      "This in-browser editor uses custom logic to convert Markdown Script into rendered markdown. Also utilizes OAuth to create a back-end that can save user info to be reused on a different browser or kept locally.",
    techUsed: ["Next.js", "RegExp", "MongoDB", "Material UI"],
    startDate: "06/2022",
    endDate: "07/2022",
    website: "https://markdown-nextjs-lime.vercel.app",
    github: "https://github.com/jpal91/markdown-nextjs",
    image: "markdown.png",
    bulletPoints: [
      "Utilized Next.js / React.js to develop a reactive web-based Markdown application",
      "Developed custom logic for Markdown conversion using Regular Expressions instead of a third-party package",
      "Managed the data using MongoDB to integrate the Front-End software with the Back-End user information",
      "Implemented CSS styling with Material UI",
      "Integrated testing with Cypress.js",
    ],
  },
  {
    name: "Interactive Comments",
    subHeader: "Reactive Comments Section",
    description:
      "A comments section similar to what you would see on a social media site or blog. Gives you the ability to create, read, update, and delete through a MongoDB back-end.",
    techUsed: ["Next.js", "JavaScript", "MongoDB", "Material UI"],
    startDate: "06/2022",
    endDate: "07/2022",
    website: "https://comments-nextjs.vercel.app",
    github: "https://github.com/jpal91/comments-nextjs",
    image: "comments.png",
    bulletPoints: [
      "Utilized Next.js / React.js to create an interactive comments section",
      "Implemented the ability to create, remove, update, delete, and reply to existing comments",
      "Saved existing comment data utilizing MongoDB",
      "Created CSS styling using Material UI",
    ],
  },
  {
    name: "REST Countries API App",
    subHeader: "World Countries Search Engine",
    description:
      "Using the REST Countries API, this app allows users to search for a country of their choice and get basic info back on their selection.",
    techUsed: ["Next.js", "REST API", "Material UI"],
    startDate: "06/2022",
    endDate: "07/2022",
    website: "https://rest-country-nextjs.vercel.app",
    github: "https://github.com/jpal91/rest-country-nextjs",
    image: "countries.png",
    bulletPoints: [
      "Utilized Next.js / React.js to create a reactive web application for searching world countries and displaying info/facts on a selection",
      "Leveraged RESTful protocols to get data from the REST Countries API and integrate it into the application",
      "Implemented CSS with Material UI Components",
    ],
  },
  {
    name: "Rock, Paper, Scissors",
    subHeader: "In-Browser Game",
    description:
      "A fun in-browser game of Rock, Paper, Scissors to kill some time!",
    techUsed: ["React.js", "Redux", "Material UI"],
    startDate: "06/2022",
    endDate: "07/2022",
    website: "https://rest-country-nextjs.vercel.app",
    github: "https://github.com/jpal91/rest-country-nextjs",
    image: "rps.png",
    bulletPoints: [
      "Utilized React.js to create an interactive web app game of Rock, Paper, Scissors",
      "Implemented state management through Redux",
      "Created user interface with Material UI and animations through Vanilla CSS",
    ],
  },
];

export default projects;

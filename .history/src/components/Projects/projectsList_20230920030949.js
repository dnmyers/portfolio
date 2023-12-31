const projectsList = [
    {
        title: "Jammming",
        desc:
            "This project served as my capstone for Codecademy's React Skill Path.  Jammming is " +
            "a web app that I built using React, integrating coponents, state management, and API integration. " +
            "It allows users to search the Spotify library and create custom playlists.  By completing this project, " +
            "I showcased my proficiency in HTML, CSS, JavaScript, React, version control using Git and " +
            "hosting repositories on GitHub, as well as my knowledge of HTTP requests, responses, " +
            "and authentication with the Spotify API.  Click this card to check it out or click the Github link below " +
            "to view the repository.",
        img: "/images/jammming.png",
        authorName: "Daniel Myers",
        href: "https://jammming.danielnmyers.com",
        github: "https://github.com/dnmyers/jammming-new",
        category: ["React", "HTML", "CSS", "JavaScript", "Spotify API", "Git", "GitHub"],
        // desc: "In this project, I built a React web application called Jammming. Using React components, state management, and requests with the Spotify API, I created a website that allows users to search the Spotify library and create custom playlists. Users can search for songs by title, artist, genre, and more. The application displays information about each song, including title, artist, and album. Once users have created their custom playlist, they can save it directly to their personal Spotify account. The                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              project utilizes HTML, CSS, JavaScript, and React, and integrates with the Spotify API for data retrieval and authentication. The application is deployed and the repository is hosted on GitHub. For more details about the project, including its purpose, technologies used, features, and future work, please refer to the README document."
        // href: "https://dnm-jammming.surge.sh"
    },

    // {
    //     title: "Ingredient Matcher",
    //     desc: "This is a personal project I made to help my mother find new recipes.  It uses React, Framer Motion, Axios, HTTP Proxy Middleware, Sass, and the Edamam API.  It allows users to enter a list of ingredients that they have on-hand, and then search for recipes that use those ingredients.  The user can also specify if they want recipes that use only the ingredients they have entered, or recipes that include those and other ingredients.",
    //     // desc: Crafted as a labor of love, this personal project stems from my desire to assist my mother in discovering exciting new recipes effortlessly. Leveraging a blend of modern technologies including React, Framer Motion, Axios, HTTP Proxy Middleware, Sass, and the robust Edamam API, the project takes culinary exploration to the next level.
    //         // At its core, this innovative application empowers users to effortlessly curate a list of available ingredients. Armed with this list, they can embark on a journey to explore a plethora of recipes that perfectly align with their ingredients. The application grants users the flexibility to specify their preferences - whether they seek recipes exclusively tailored to their selected ingredients or those that cleverly incorporate additional elements.
    //         // Embrace the culinary adventure, and discover a new world of recipes with ease through this personalized web experience."
    //     img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    //     authorName: "Daniel Myers",
    //     href: "https://ingredient-matcher.surge.sh"
    // },
    {
        title: "Ravenous",
        desc:
            "Ravenous is a restaurant recommendation website that allows users to search " +
            "for local businesses based on the location and keywords entered.  I built this project " +
            "for a React course I took from Codecademy.  It uses HTML, CSS, JavaScript, React, and the Yelp API. " +
            "Users are able to search by restaurant name or cuisine type, and sort by Best Match, Highest Rated, or Most Reviewed. " +
            "Click this card to see it in action or  click the Github link below to check out the repository.",
        img: "/images/ravenous.png",
        authorName: "Daniel Myers",
        href: "https://ravenous.danielnmyers.com/",
        github: "https://github.com/dnmyers/ravenous-updated/tree/main",
        category: ["React", "HTML", "CSS", "JavaScript", "Yelp API", "Git", "GitHub"],
    },
    {
        title: "My Portfolio Website",
        desc:
            "I built this website with React to demonstrate some of my projects and web development skills.  It uses React Router for the routing, Framer Motion " +
            "for the animations, EmailJS for the contact form, and Tailwind CSS for styling." +
            "You can click this card to go back to the homepage, or click on the GitHub link below to check out it's repository.",
        img: "/images/danielnmyers.com.png",
        authorName: "Daniel Myers",
        href: "https://www.danielnmyers.com",
        github: "https://github.com/dnmyers/portfolio",
        category: ["React", "Tailwind CSS", "Framer Motion", "React Router", "EmailJS","HTML", "CSS", "JavaScript",  "Git", "GitHub"],
    },
    {
        title: "Inspirational Homepage",
        desc: "Inspirational Homepage is a project I completed for an Advance React and Redux course I took from Codecademy.  It uses React, " +
            "Redux Toolkit, SCSS, Framer-Motion, Axios, and some other libraries to display " +
            "a homepage with the weather information for the user's current location from the OpenWeatherMap API, background images from the Unsplash API that the user can cycle through " +
            "with the right and left arrows on either side of the page, an inspirational quote on the bottom of the page from the Quotable API, and the ability to add tasks or notes in the " +
            "middle of the page.",
        img: "/images/inspirational-homepage.png",
        authorName: "Daniel N. Myers",
        href: "https://inspirational-homepage.danielnmyers.com",
        github: "https://github.com/dnmyers/inspirational-homepage-v2.0",
        category: ["React", "Redux", "Framer Motion", "Sass", "OpenWeatherMap API", "Unsplash API", "Quotable API", "HTML", "JavaScript", "Git", "GitHub"],

    },
    {
        title: "League",
        // desc: "This is a .NET Web App I created as my capstone project for the Codecademy ASP.NET Skill Path.",
        desc:
            "This project showcases my expertise in web development, utilizing ASP.NET Core, " +
            "Entity Framework, and LINQ to create a multi-page web app.  I created this app as my capstone " +
            "project for Codecademy's ASP.NET skill path.  For this project, I built a dynamic sports league " +
            "web app with intricate functionalities, including team and player data retrieval, advanced sorting, " +
            "filtering, and dynamic rendering of teams and players' information.  Click this card to see it in action or " +
            "click the Github link below to check out the repository.",
        img: "/images/league.png",
        authorName: "Daniel Myers",
        href: "https://league20230716014917.azurewebsites.net",
        github: "https://github.com/dnmyers/League",
        category: [".NET", "ASP.NET", "Entity Framework", "LINQ", "Razor Pages", "C#.NET", "HTML", "CSS", "JavaScript", "Bootstrap", "Git", "GitHub"],
    },
];

export default projectsList;
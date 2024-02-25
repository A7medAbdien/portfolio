export const data = {
    summary: `I build full stack web applications when I am bored`,
    summary2: `Writing websites and API's since 2020`,
    name: "Ahmed.A",
    job: "Software Engineer",
    cv: "/pdfs/CV.pdf",
    colors: {
        title: "#00000099",
        contacts: "#00000099",
        contactsF: "#7e0f0f66",
        skills: "#00000099",
        skillsF: "#7e0f0f66",
        projects: "#00000099",
        projectsF: "#7e0f0f66",
        end: "#00000099",
    },
    contacts: [
        {
            id: 'github',
            place: "top",
            text: 'A7medAbdien 👨‍💻',
            img: '/imgs/github.png',
            link: "https://github.com/A7medAbdien"
        },
        {
            id: 'linkedin',
            place: "top",
            text: 'LinkedIn 🥲',
            img: '/imgs/linkedin.png',
            link: "https://www.linkedin.com/in/ahmed-abdin-90a957187/"
        },
        {
            id: 'cv',
            place: "top",
            text: 'Get my CV 📃',
            img: '/imgs/resume.png',
            link: "/pdfs/CV.pdf"
        },
        {
            id: 'gmail',
            place: "top",
            text: 'Email me 📧',
            img: '/svg/gmail.svg',
            link: "https://wa.me/97334533638?text=Hi%20Ahmed..."
        },
        {
            id: 'whatsapp',
            place: "top",
            text: 'Say Hi 👋',
            img: '/imgs/whatsapp.png',
            link: "https://wa.me/97334533638?text=Hi%20Ahmed..."
        },
    ],
    skills: {
        title: "Skills", skills: [
            {
                id: "Typescript-icon",
                place: "top",
                img: '/svg/typescript.svg',
                text: "Typescript"
            },
            {
                id: "React-icon",
                place: "top",
                img: '/svg/react.svg',
                text: "React"
            },
            {
                id: "Go-icon",
                place: "top",
                img: '/svg/golang.svg',
                text: "Go",
                size: 40
            },
            {
                id: "MongoDB-icon",
                place: "top",
                img: '/svg/mongodb.svg',
                text: "MongoDB"
            },
            {
                id: "Three-icon",
                place: "top",
                img: '/svg/threejs.svg',
                text: "Three.js"
            },
        ]
    },
    projects: {
        title: "Projects",
        repoLogo: '/svg/github.svg',
        linkLogo: '/svg/open-link.svg',
        projects: [
            {
                name: 'Go Restaurant',
                description: 'Restaurant management system backend.',
                skills: [
                    {
                        id: "Go-Go-Restaurant",
                        place: "left",
                        img: '/svg/golang.svg',
                        text: "Go"
                    },
                    {
                        id: "MongoDB-Go-Restaurant",
                        place: "top",
                        img: '/svg/mongodb.svg',
                        text: "MongoDB"
                    },
                ],
                repo: 'https://github.com/A7medAbdien/Go-CRM-Backend',
                bg: 'red'
            },
            {
                name: 'ProShop',
                description: 'E-commerce website using MERN stack.',
                skills: [
                    {
                        id: "React-ProShop",
                        place: "left",
                        img: '/svg/react.svg',
                        text: "React"
                    },
                    {
                        id: "Express.js-ProShop",
                        place: "top",
                        img: '/svg/express-js.svg',
                        text: "Express.js"
                    },
                    {
                        id: "Node.js-ProShop",
                        place: "top",
                        img: '/svg/node-js.svg',
                        text: "Node.js"
                    },
                    {
                        id: "MongoDB-ProShop",
                        place: "top",
                        img: '/svg/mongodb.svg',
                        text: "MongoDB"
                    },
                ],
                link: 'https://proshop-ebur.onrender.com/',
                repo: 'https://github.com/A7medAbdien/proshop',
                bg: 'red'
            },
            // {
            //     name: 'BookStore',
            //     description: 'E-commerce website using .Net.',
            //     skills: [
            //         {
            //             id: "Vercel-ArtMixer",
            //             place: "top",
            //             img: '/svg/typescript.svg',
            //             text: "Vercel"
            //         },
            //         {
            //             id: "Three-ArtMixer",
            //             place: "top",
            //             img: '/svg/typescript.svg',
            //             text: "Three.js"
            //         },
            //     ],
            //     link: 'https://github.com/A7medAbdien/ArtMixer',
            //     repo: 'https://github.com/A7medAbdien/ArtMixer',
            //     bg: 'red'
            // },
            {
                name: 'ArtMixer',
                description: 'A 3D website, that mixes two images.',
                skills: [
                    {
                        id: "React-ArtMixer",
                        place: "left",
                        img: '/svg/react.svg',
                        text: "React"
                    },
                    {
                        id: "Three-ArtMixer",
                        place: "top",
                        img: '/svg/threejs.svg',
                        text: "Three.js"
                    },
                ],
                link: 'https://art-mixer.vercel.app/',
                repo: 'https://github.com/A7medAbdien/ArtMixer',
                bg: 'red'
            },
            {
                name: 'SafeDistance',
                description: "App Measures the distance using phone's camera.",
                skills: [
                    {
                        id: "Android-SafeDistance",
                        place: "left",
                        img: '/svg/android.svg',
                        text: "Android"
                    },
                    {
                        id: "Python-SafeDistance",
                        place: "top",
                        img: '/svg/python.svg',
                        text: "Python"
                    },
                ],
                link: 'https://youtu.be/jVohDX-kcaE',
                repo: 'https://github.com/A7medAbdien/safeDistanceProject',
                bg: 'green'
            }
        ]
    }
}

export const data = {
    name: "Ahmed.A",
    job: "Software Engineer",
    cv: "/pdfs/CV.pdf",
    contacts: [
        {
            id: 'github',
            place: "top",
            text: 'A7medAbdien',
            img: '/imgs/github.png',
            link: "https://github.com/A7medAbdien"
        },
        {
            id: 'linkedin',
            place: "top",
            text: 'linkedin',
            img: '/imgs/linkedin.png',
            link: "https://www.linkedin.com/in/ahmed-abdin-90a957187/"
        },
        {
            id: 'whatsapp',
            place: "top",
            text: 'Hi ^^',
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
                img: '/svg/typescript.svg',
                text: "React"
            },
            {
                id: "Go-icon",
                place: "top",
                img: '/svg/typescript.svg',
                text: "Go"
            },
            {
                id: "Gin-icon",
                place: "top",
                img: '/svg/typescript.svg',
                text: "Gin"
            },
            {
                id: "MongoDB-icon",
                place: "top",
                img: '/svg/typescript.svg',
                text: "MongoDB"
            },
            {
                id: "Vercel-icon",
                place: "top",
                img: '/svg/typescript.svg',
                text: "Vercel"
            },
            {
                id: "Three-icon",
                place: "top",
                img: '/svg/typescript.svg',
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
                        img: '/svg/typescript.svg',
                        text: "Go"
                    },
                    {
                        id: "Gin-Go-Restaurant",
                        place: "top",
                        img: '/svg/typescript.svg',
                        text: "Gin"
                    },
                    {
                        id: "MongoDB-Go-Restaurant",
                        place: "top",
                        img: '/svg/typescript.svg',
                        text: "MongoDB"
                    },
                ],
                link: 'https://github.com/A7medAbdien/ArtMixer',
                repo: 'https://github.com/A7medAbdien/ArtMixer',
                bg: 'red'
            },
            {
                name: 'ProShop',
                description: 'E-commerce website using MERN stack.',
                skills: [
                    {
                        id: "React-ProShop",
                        place: "left",
                        img: '/svg/typescript.svg',
                        text: "React"
                    },
                    {
                        id: "MongoDB-ProShop",
                        place: "top",
                        img: '/svg/typescript.svg',
                        text: "MongoDB"
                    },
                ],
                link: 'https://github.com/A7medAbdien/ArtMixer',
                repo: 'https://github.com/A7medAbdien/ArtMixer',
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
                        place: "top",
                        img: '/svg/typescript.svg',
                        text: "React"
                    },
                    {
                        id: "Three-ArtMixer",
                        place: "top",
                        img: '/svg/typescript.svg',
                        text: "Three.js"
                    },
                ],
                link: 'https://github.com/A7medAbdien/ArtMixer',
                repo: 'https://github.com/A7medAbdien/ArtMixer',
                bg: 'red'
            },
            {
                name: 'SafeDistance',
                description: "App Measures the distance using phone's camera.",
                skills: [
                    {
                        id: "Android-SafeDistance",
                        place: "top",
                        img: '/svg/typescript.svg',
                        text: "Vercel"
                    },
                    {
                        id: "Python-SafeDistance",
                        place: "top",
                        img: '/svg/typescript.svg',
                        text: "Python"
                    },
                ],
                link: 'https://github.com/A7medAbdien/safeDistanceProject',
                repo: 'https://github.com/A7medAbdien/ArtMixer',
                bg: 'green'
            }
        ]
    }
}

export const logos = [
    {
        position: [-1.2, 0, 0],
        imgUrl: '/svg/typescript.svg',
        link: "https://github.com/A7medAbdien"
    },
    {
        position: [-1.2, 0, 0],
        imgUrl: '/imgs/github.png',
        link: "https://github.com/A7medAbdien"
    },
    {
        position: [0, 0, 0],
        imgUrl: '/imgs/linkedin.png',
        link: "https://www.linkedin.com/in/ahmed-abdin-90a957187/"
    },
    {
        position: [1.2, 0, 0],
        imgUrl: '/imgs/whatsapp.png',
        link: "https://wa.me/97334533638?text=Hi%20Ahmed..."
    },
]

export const summary = `I build full stack web applications when I am bored`
export const summary2 = `Writing websites and API's since 2020`

export const whatICanDo =
    `- Websites (MERN Stack, .Net)
- 3D Websites 
- Applications 
- Augmented Reality Applications 
- Data Analysis 
- Machine Learning Models 
- Computer Version Projects`

export const skills = `- SPA, RESTful API
- React, MERN stack, Next.js 13
- .Net 7, Blazer, Entity Framework
- Stripe API, PayPal API
- Three.js, React three fiber
- Kotlin (Android)
- Python (numpy, pandas, Tensorflow API)`

export const portalContents = [
    {
        id: '01',
        name: 'ArtMixer',
        description: 'A 3D website, that mixes two images.',
        img: '/svg/open-link.svg',
        repo: '/svg/github.svg',
        link: 'https://github.com/A7medAbdien/ArtMixer',
        bg: 'red'
    },
    {
        id: '02',
        name: 'SafeDistance',
        description: 'App for Measure the safe distance (2 meters) using the camera phone.',
        vid: '/vids/safeDistanceVid.mp4',
        link: 'https://github.com/A7medAbdien/safeDistanceProject',
        bg: 'green'
    },
    {
        id: '03',
        name: 'ToxicTweets',
        description: 'Machine learning model that classify positive and negative tweets.',
        img: '/imgs/toxicTweetsImg.png',
        link: 'https://colab.research.google.com/drive/1L472f5lxBHfFAmlTO7JCpvag9YFuxiwb?usp=sharing',
        bg: 'blue'
    },
]
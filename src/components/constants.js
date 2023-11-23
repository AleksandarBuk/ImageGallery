import { signalBlueDark, signalBlueLight, robot, h1,h2,h3,h4,h5 } from "../assets";


export const navLinks = [
    {
        title: 'Home',
        href: '#home'
    },
    {
        title: 'About Me',
        href: '#aboutme'
    },
    {
        title: 'Contact',
        href: '#contact'
    }
];

export const album1 = [
    { id: 1, title: "Image 1", dateCreated: "2022-01-01", imageUrl: signalBlueDark },
    { id: 2, title: "Image 2", dateCreated: "2022-02-01", imageUrl: signalBlueDark },
    { id: 3, title: "Image 3", dateCreated: "2022-03-01", imageUrl: signalBlueLight },
    { id: 4, title: "Image 4", dateCreated: "2022-04-01", imageUrl: robot },
    { id: 5, title: "Image 5", dateCreated: "2022-05-01", imageUrl: signalBlueDark },
    { id: 6, title: "Image 6", dateCreated: "2022-06-01", imageUrl: signalBlueDark },
]

export const album2 = [
    { id: 1, title: "Image 1", dateCreated: "2022-01-01", imageUrl: signalBlueDark },
    { id: 2, title: "Image 2", dateCreated: "2022-02-01", imageUrl: signalBlueDark },
    { id: 3, title: "Image 3", dateCreated: "2022-03-01", imageUrl: signalBlueDark },
    { id: 4, title: "Image 4", dateCreated: "2022-04-01", imageUrl: signalBlueDark },
    { id: 5, title: "Image 5", dateCreated: "2022-05-01", imageUrl: signalBlueDark },
    { id: 6, title: "Image 6", dateCreated: "2022-06-01", imageUrl: signalBlueDark },

]

export const album3 = [
    { id: 1, title: "Image 1", dateCreated: "2023-01-01", imageUrl: h1 },
    { id: 2, title: "Image 2", dateCreated: "2023-02-01", imageUrl: h2 },
    { id: 3, title: "Image 3", dateCreated: "2023-03-01", imageUrl: h3 },
    { id: 4, title: "Image 4", dateCreated: "2023-04-01", imageUrl: h4 },
    { id: 5, title: "Image 5", dateCreated: "2023-05-01", imageUrl: h5 },
    { id: 6, title: "Image 6", dateCreated: "2023-06-01", imageUrl: signalBlueDark },

]

export const albums = [
    { 
        id: 1, 
        title: "Summer collection", 
        dateCreated: "2022-01-01", 
        imageUrl: h1, 
        albumUrl: 'album1'  // add album URL here
    },
    { 
        id: 2, 
        title: "Autumn collection", 
        dateCreated: "2022-02-01", 
        imageUrl: h2, 
        albumUrl: 'album2'  // add album URL here
    },
    { 
        id: 3, 
        title: "Winter collection", 
        dateCreated: "2023-02-01", 
        imageUrl: h3, 
        albumUrl: 'album3'  // add album URL here
    },
    // add more albums as needed
];




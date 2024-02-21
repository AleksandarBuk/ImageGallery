import { second, third, fourth, fifth, p1, p2, p3, p4, n} from "../assets";
import { i1, i2, i3, i4, i5, e1, c1, c2, n2, n1,n3, n4, v1, v2, v3, v4, v5, church, d0} from "../assets/lice-ulice";
import { p5, p6, p7, p8} from "../assets/protraits";
import { na1, na2, na3, na4, na5, na6, na7, na8 } from "../assets/nature_a";
import { ha1, ha2, ha3, ha4, ha5, ha6, ha7, ha8} from "../assets/happy_a";



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


export const albums = [
    { 
        id: 1, 
        title: "Portraits", 
        dateCreated: "2022-01-01", 
        imageUrl: p2, 
        albumUrl: 'album1',
        images: [ 
        { id: 1, title: "Image 1", dateCreated: "2022-01-01", imageUrl: p1 },
        { id: 2, title: "Image 2", dateCreated: "2022-02-01", imageUrl: p2 },
        { id: 3, title: "Image 3", dateCreated: "2022-01-01", imageUrl: p3 },
        { id: 4, title: "Image 4", dateCreated: "2022-02-01", imageUrl: p4 },
        { id: 5, title: "Image 5", dateCreated: "2022-01-01", imageUrl: p5 },
        { id: 6, title: "Image 6", dateCreated: "2022-02-01", imageUrl: p6 },
        { id: 7, title: "Image 7", dateCreated: "2022-01-01", imageUrl: p7 },
        { id: 8, title: "Image 8", dateCreated: "2022-02-01", imageUrl: p8 },
        ]
    },
    { 
        id: 2, 
        title: "Soul of the moment", 
        dateCreated: "2022-02-01", 
        imageUrl: e1, 
        albumUrl: 'album2',
        images: [ 
            { id: 1, title: "Image 1", dateCreated: "2022-01-01", imageUrl: church },
            { id: 2, title: "Image 2", dateCreated: "2022-02-01", imageUrl: i2 },
            { id: 3, title: "Image 3", dateCreated: "2022-01-01", imageUrl: v4 },
            { id: 4, title: "Image 4", dateCreated: "2022-02-01", imageUrl: i4 },
            { id: 5, title: "Image 5", dateCreated: "2022-01-01", imageUrl: i5 },
            { id: 6, title: "Image 6", dateCreated: "2022-02-01", imageUrl: e1 },
            { id: 7, title: "Image 7", dateCreated: "2022-01-01", imageUrl: c2 },
            { id: 8, title: "Image 8", dateCreated: "2022-02-01", imageUrl: c1 },
            ]
    },
    { 
        id: 3, 
        title: "Dusk", 
        dateCreated: "2023-02-01", 
        imageUrl: n2, 
        albumUrl: 'album3',
        images: [ 
            { id: 1, title: "Image 1", dateCreated: "2022-01-01", imageUrl: n },
            { id: 2, title: "Image 2", dateCreated: "2022-02-01", imageUrl: n1 },
            { id: 3, title: "Image 3", dateCreated: "2022-01-01", imageUrl: n2 },
            { id: 4, title: "Image 4", dateCreated: "2022-02-01", imageUrl: n3 },
            { id: 5, title: "Image 5", dateCreated: "2022-01-01", imageUrl: n4 },
            { id: 6, title: "Image 6", dateCreated: "2022-02-01", imageUrl: v1 },
            { id: 7, title: "Image 7", dateCreated: "2022-01-01", imageUrl: v2 },
            { id: 8, title: "Image 8", dateCreated: "2022-02-01", imageUrl: d0 },
            ]  // add album URL here
    },
    { 
        id: 4, 
        title: "Nature", 
        dateCreated: "2023-03-01", 
        imageUrl: na1, 
        albumUrl: 'album4',
        images: [ 
            { id: 1, title: "Image 1", dateCreated: "2022-01-01", imageUrl: na1 },
            { id: 2, title: "Image 2", dateCreated: "2022-02-01", imageUrl: na2 },
            { id: 3, title: "Image 3", dateCreated: "2022-01-01", imageUrl: na3 },
            { id: 4, title: "Image 4", dateCreated: "2022-02-01", imageUrl: na4 },
            { id: 5, title: "Image 5", dateCreated: "2022-01-01", imageUrl: na5 },
            { id: 6, title: "Image 6", dateCreated: "2022-02-01", imageUrl: na6 },
            { id: 7, title: "Image 7", dateCreated: "2022-01-01", imageUrl: na7 },
            { id: 8, title: "Image 8", dateCreated: "2022-02-01", imageUrl: na8 },
            ]  // add album URL here
    },
    { 
        id: 5, 
        title: "Happy place", 
        dateCreated: "2023-03-01", 
        imageUrl: ha2, 
        albumUrl: 'album5',
        images: [ 
            { id: 1, title: "Image 1", dateCreated: "2022-01-01", imageUrl: ha1 },
            { id: 2, title: "Image 2", dateCreated: "2022-02-01", imageUrl: ha2 },
            { id: 3, title: "Image 3", dateCreated: "2022-01-01", imageUrl: ha3 },
            { id: 4, title: "Image 4", dateCreated: "2022-02-01", imageUrl: ha4 },
            { id: 5, title: "Image 5", dateCreated: "2022-01-01", imageUrl: ha5 },
            { id: 6, title: "Image 6", dateCreated: "2022-02-01", imageUrl: ha6 },
            { id: 7, title: "Image 7", dateCreated: "2022-01-01", imageUrl: ha7 },
            { id: 8, title: "Image 8", dateCreated: "2022-02-01", imageUrl: ha8 },
            ]  // add album URL here
    }
    // { 
    //     id: 6, 
    //     title: "Spring collection", 
    //     dateCreated: "2023-03-01", 
    //     imageUrl: p1, 
    //     albumUrl: 'album4',
    //     images: [ 
    //         { id: 1, title: "Image 1", dateCreated: "2022-01-01", imageUrl: p1 },
    //         { id: 2, title: "Image 2", dateCreated: "2022-02-01", imageUrl: second },
    //         { id: 3, title: "Image 3", dateCreated: "2022-01-01", imageUrl: third },
    //         { id: 4, title: "Image 4", dateCreated: "2022-02-01", imageUrl: fourth },
    //         { id: 5, title: "Image 5", dateCreated: "2022-01-01", imageUrl: fifth },
    //         { id: 6, title: "Image 6", dateCreated: "2022-02-01", imageUrl: p1 },
    //         { id: 7, title: "Image 7", dateCreated: "2022-01-01", imageUrl: p1 },
    //         { id: 8, title: "Image 8", dateCreated: "2022-02-01", imageUrl: fifth },
    //         ]  // add album URL here
    // },
    // // add more albums as needed
];



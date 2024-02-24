import { p1, p2, } from "../assets";
import { c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19} from "../assets/lice-ulice";
import { p5, p6, p7, p8, lena1, lena2, lena3, lena4} from "../assets/protraits";
// import { ha1, ha2, ha3, ha4, ha5, ha6, ha7, ha8 } from "../assets/happy_a";
import { takt1, takt2, takt3, takt4, takt5, takt6, takt7, takt8, takt9, takt10 } from "../assets/u-dodiru-sa-taktom";
import { jinjang1, jinjang2, jinjang3, jinjang4, jinjang5, jinjang6, jinjang7, jinjang8, jinjang9, jinjang10, jinjang11, jinjang12, jinjang13 } from "../assets/jin-jang";
import { nature1, nature2, nature3, nature4, nature5, nature6, nature7, nature8, nature9, nature10, nature11, nature12, nature13, nature14, nature15, nature16, nature17, nature18 } from "../assets/u-dodiru-sa-prirodom";
import { hap1, hap2, hap3, hap4, hap5, hap6, hap7, hap8, hap9, hap10, hap11 } from "../assets/dokumentovana_radost";


export const navLinks = [
    {
        title: 'Početna',
        href: '#home'
    },
    {
        title: 'O meni',
        href: '#aboutme'
    },
    {
        title: 'Kontakt',
        href: '#Kontakt'
    }
];


export const albums = [
    { 
        id: 1, 
        title: "Portraits", 
        dateCreated: "2024", 
        imageUrl: lena1, 
        albumUrl: 'album1',
        images: [ 
        { id: 1, title: "Image 1", dateCreated: "2022-01-01", imageUrl: p1 },
        { id: 2, title: "Image 2", dateCreated: "2022-02-01", imageUrl: p2 },
        { id: 3, title: "Image 3", dateCreated: "2022-01-01", imageUrl: lena1 },
        { id: 4, title: "Image 4", dateCreated: "2022-02-01", imageUrl: lena2 },
        { id: 5, title: "Image 5", dateCreated: "2022-01-01", imageUrl: p5 },
        { id: 6, title: "Image 6", dateCreated: "2022-02-01", imageUrl: p6 },
        { id: 7, title: "Image 7", dateCreated: "2022-01-01", imageUrl: p7 },
        { id: 8, title: "Image 8", dateCreated: "2022-02-01", imageUrl: p8 },
        { id: 9, title: "Image 9", dateCreated: "2022-02-01", imageUrl: lena3 },
        { id: 10, title: "Image 10", dateCreated: "2022-02-01", imageUrl: lena4 },
        ]
    },
    { 
        id: 2, 
        title: "Lice Ulice", 
        dateCreated: "2020", 
        imageUrl: c2, 
        albumUrl: 'album2',
        images: [ 
            { id: 1, title: "Image 1", dateCreated: "2022-01-01", imageUrl: c1 },
            { id: 2, title: "Image 2", dateCreated: "2022-02-01", imageUrl: c2 },
            { id: 3, title: "Image 3", dateCreated: "2022-01-01", imageUrl: c3 },
            { id: 4, title: "Image 4", dateCreated: "2022-02-01", imageUrl: c4 },
            { id: 5, title: "Image 5", dateCreated: "2022-01-01", imageUrl: c5 },
            { id: 6, title: "Image 6", dateCreated: "2022-02-01", imageUrl: c6 },
            { id: 7, title: "Image 7", dateCreated: "2022-01-01", imageUrl: c7 },
            { id: 8, title: "Image 8", dateCreated: "2022-02-01", imageUrl: c8 },
            { id: 9, title: "Image 9", dateCreated: "2022-02-01", imageUrl: c9 },
            { id: 10, title: "Image 10", dateCreated: "2022-02-01", imageUrl: c10 },
            { id: 11, title: "Image 11", dateCreated: "2022-02-01", imageUrl: c11 },
            { id: 12, title: "Image 12", dateCreated: "2022-02-01", imageUrl: c12 },
            { id: 13, title: "Image 13", dateCreated: "2022-02-01", imageUrl: c13 },
            { id: 14, title: "Image 14", dateCreated: "2022-02-01", imageUrl: c14 },
            { id: 15, title: "Image 15", dateCreated: "2022-02-01", imageUrl: c15 },
            { id: 16, title: "Image 16", dateCreated: "2022-02-01", imageUrl: c16 },
            { id: 17, title: "Image 17", dateCreated: "2022-02-01", imageUrl: c17 },
            { id: 17, title: "Image 18", dateCreated: "2022-02-01", imageUrl: c18 },
            { id: 18, title: "Image 19", dateCreated: "2022-02-01", imageUrl: c19 },
            ]
    },
    { 
        id: 3, 
        title: "Dokumentovana Radost", 
        dateCreated: "2023", 
        imageUrl: hap2, 
        albumUrl: 'album3',
        images: [ 
            { id: 1, title: "Image 1", dateCreated: "2022-01-01", imageUrl: hap1 },
            { id: 2, title: "Image 2", dateCreated: "2022-02-01", imageUrl: hap2 },
            { id: 3, title: "Image 3", dateCreated: "2022-01-01", imageUrl: hap3 },
            { id: 4, title: "Image 4", dateCreated: "2022-02-01", imageUrl: hap4 },
            { id: 5, title: "Image 5", dateCreated: "2022-01-01", imageUrl: hap5 },
            { id: 6, title: "Image 6", dateCreated: "2022-02-01", imageUrl: hap6 },
            { id: 7, title: "Image 7", dateCreated: "2022-01-01", imageUrl: hap7 },
            { id: 8, title: "Image 8", dateCreated: "2022-02-01", imageUrl: hap8 },
            { id: 9, title: "Image 8", dateCreated: "2022-02-01", imageUrl: hap9 },
            { id: 10, title: "Image 8", dateCreated: "2022-02-01", imageUrl: hap10 },
            { id: 11, title: "Image 8", dateCreated: "2022-02-01", imageUrl: hap11 },
            ]
    },
    { 
        id: 4, 
        title: "U dodiru sa prirodom", 
        dateCreated: "2023", 
        imageUrl: nature2, 
        albumUrl: 'album4',
        images: [ 
            { id: 1, title: "Image 1", dateCreated: "2022-01-01", imageUrl: nature1 },
            { id: 2, title: "Image 2", dateCreated: "2022-02-01", imageUrl: nature2 },
            { id: 3, title: "Image 3", dateCreated: "2022-01-01", imageUrl: nature3 },
            { id: 4, title: "Image 4", dateCreated: "2022-02-01", imageUrl: nature4 },
            { id: 5, title: "Image 5", dateCreated: "2022-01-01", imageUrl: nature5 },
            { id: 6, title: "Image 6", dateCreated: "2022-02-01", imageUrl: nature6 },
            { id: 7, title: "Image 7", dateCreated: "2022-01-01", imageUrl: nature7 },
            { id: 8, title: "Image 8", dateCreated: "2022-02-01", imageUrl: nature8 },
            { id: 9, title: "Image 9", dateCreated: "2022-02-01", imageUrl: nature9 },
            { id: 10, title: "Image 10", dateCreated: "2022-02-01", imageUrl: nature10 },
            { id: 11, title: "Image 11", dateCreated: "2022-02-01", imageUrl: nature11 },
            { id: 12, title: "Image 12", dateCreated: "2022-02-01", imageUrl: nature12 },
            { id: 13, title: "Image 13", dateCreated: "2022-02-01", imageUrl: nature13 },
            { id: 14, title: "Image 14", dateCreated: "2022-02-01", imageUrl: nature14 },
            { id: 15, title: "Image 15", dateCreated: "2022-02-01", imageUrl: nature15 },
            { id: 16, title: "Image 16", dateCreated: "2022-02-01", imageUrl: nature16 },
            { id: 17, title: "Image 17", dateCreated: "2022-02-01", imageUrl: nature17 },
            { id: 18, title: "Image 18", dateCreated: "2022-02-01", imageUrl: nature18 },
            ]
    },
    { 
        id: 5, 
        title: "U dodiru sa taktom", 
        dateCreated: "2022", 
        imageUrl: takt3, 
        albumUrl: 'album5',
        images: [ 
            { id: 1, title: "Image 1", dateCreated: "2022-01-01", imageUrl: takt1 },
            { id: 2, title: "Image 2", dateCreated: "2022-02-01", imageUrl: takt2 },
            { id: 3, title: "Image 3", dateCreated: "2022-01-01", imageUrl: takt3 },
            { id: 4, title: "Image 4", dateCreated: "2022-02-01", imageUrl: takt4 },
            { id: 5, title: "Image 5", dateCreated: "2022-01-01", imageUrl: takt5 },
            { id: 6, title: "Image 6", dateCreated: "2022-02-01", imageUrl: takt6 },
            { id: 7, title: "Image 7", dateCreated: "2022-01-01", imageUrl: takt7 },
            { id: 8, title: "Image 8", dateCreated: "2022-02-01", imageUrl: takt8 },
            { id: 9, title: "Image 9", dateCreated: "2022-02-01", imageUrl: takt9 },
            { id: 8, title: "Image 10", dateCreated: "2022-02-01", imageUrl: takt10 },
    
            ]  
    },
    { 
        id: 6, 
        title: "Jin-Jang", 
        dateCreated: "2019", 
        imageUrl: jinjang3, 
        albumUrl: 'album6',
        images: [ 
            { id: 1, title: "Image 1", dateCreated: "2022-01-01", imageUrl: jinjang1 },
            { id: 2, title: "Image 2", dateCreated: "2022-02-01", imageUrl: jinjang2 },
            { id: 3, title: "Image 3", dateCreated: "2022-01-01", imageUrl: jinjang3 },
            { id: 4, title: "Image 4", dateCreated: "2022-02-01", imageUrl: jinjang4 },
            { id: 5, title: "Image 5", dateCreated: "2022-01-01", imageUrl: jinjang5 },
            { id: 6, title: "Image 6", dateCreated: "2022-02-01", imageUrl: jinjang6 },
            { id: 7, title: "Image 7", dateCreated: "2022-01-01", imageUrl: jinjang7 },
            { id: 8, title: "Image 8", dateCreated: "2022-02-01", imageUrl: jinjang8 },
            { id: 9, title: "Image 9", dateCreated: "2022-02-01", imageUrl: jinjang9 },
            { id: 10, title: "Image 10", dateCreated: "2022-02-01", imageUrl: jinjang10 },
            { id: 11, title: "Image 11", dateCreated: "2022-02-01", imageUrl: jinjang11 },
            { id: 12, title: "Image 12", dateCreated: "2022-02-01", imageUrl: jinjang12 },
            { id: 13, title: "Image 13", dateCreated: "2022-02-01", imageUrl: jinjang13 },
            ]
    },
    
];



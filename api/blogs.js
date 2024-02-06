// images
import blogImg1 from "/public/images/blog/img-1.jpg";
import blogImg2 from "/public/images/blog/img-2.jpg";
import blogImg3 from "/public/images/blog/img-3.jpg";
import blogImg4 from "/public/images/blog/img-4.jpg";

import blogSingleImg1 from "/public/images/blog/img-8.jpg";
import blogSingleImg2 from "/public/images/blog/img-9.jpg";
import blogSingleImg3 from "/public/images/blog/img-10.jpg";
import blogSingleImg4 from "/public/images/blog/img-11.jpg";

import author from "/public/images/blog/admin.jpg";



const blogs = [
    {
        id: '1',
        title: 'Rencontre des benevoles de japenaci.',
        slug:'Rencontre des benevoles de japenaci.',
        screens: blogImg1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.',
        author: 'Ibou Fall',
        authorImg: author,
        authorTitle:'volunteer',
        create_at: '20 DEC,23',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'Rendez-vous au Diner de fin d annee 2023 ! ',
        slug:'Rendez-vous au Diner de fin d annee 2023 ! .',
        screens: blogImg2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.',
        author: 'Ibou Fall',
        authorImg: author,
        authorTitle:'volunteer',
        create_at: '16 AUG,21',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
  
];
export default blogs;
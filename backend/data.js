import bcrypt from 'bcryptjs';

const data =  {
    users: [
        {   
            name: 'sanket',
            email: 'swagh6360@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:true,
        },
        {
            name: 'siddhant',
            email: 'user@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:false,
        },
    ],
    menus: [
        {
            
            name: 'Spicy Noodles',
            category: 'veg',
            image:'/images/img6.jpg',
            price: 60,
            Available:0,
            countInStock:20,
            type: 'veg',
            rating: 4.5,
            numReviews: 10,
            description:"High quality menu",
        },
        {
           
            name: 'Pizza',
            category: 'veg',
            image: '/images/t1.jpg',
            price: 500,Available:10,
            countInStock:20,
            type: 'veg',
            rating: 4.5,
            numReviews: 10,
            description:"high quality menu",
        },
        {
            
            name: 'pizza',
            category: 'non-veg',
            image: '/images/img6.jpg',
            price: 60,Available:10,
            countInStock:20,
            type: 'non-veg',
            rating: 4.5,
            numReviews: 10,
            description:"high quality menu",
        },
        {

            name: 'ddd',
            category: 'non-veg',
            image: '/images/img6.jpg',
            price: 60,Available:10,
            countInStock:20,
            type: 'non-veg',
            rating: 4.5,
            numReviews: 10,
            description:"high quality menu",
        },
        {
          
            name: 'eee',
            category: 'non-veg',
            image: ' /images/img6.jpg',
            price: 60,Available:10,
            countInStock:20,
            type: 'non-veg',
            rating: 4.5,
            numReviews: 10,
            description:"high quality menu",
        },
        {
           
            name: 'ffff',
            category: 'non-veg',
            image: '/images/img6.jpg',
            price: 60,Available:10,
            countInStock:20,
            type: 'non-veg',
            rating: 4.5,
            numReviews: 10,
            description:"high quality menu",
        },
        {
            
            name: 'mmm',
            category: 'non-veg',
            image: '/images/img6.jpg',
            price: 60,Available:10,
            countInStock:20,
            type: 'non-veg',
            rating: 4.5,
            numReviews: 10,
            description:"high quality menu",
        },
        {
           
            name: 'iii',
            category: 'non-veg',
            image: '/images/img6.jpg',
            price: 60,Available:10,
            countInStock:20,
            type: 'non-veg',
            rating: 4.5,
            numReviews: 10,
            description:"high quality menu",
        },
        {
           
            name: 'jjj',
            category: 'non-veg',
            image: '/images/img6.jpg',
            price: 60,Available:10,
            countInStock:20,
            type: 'non-veg',
            rating: 4.5,
            numReviews: 10,
            description:"high quality menu",
        },
        {
            
            name: 'sanket',
            category: 'non-veg',
            image: '/images/img6.jpg',
            price: 60,Available:10,
            countInStock:20,
            type: 'non-veg',
            rating: 4.5,
            numReviews: 10,
            description:"high quality menu",
        },
      
       
    ]
}
export default data;
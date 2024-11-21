export const TITTLE = "React 🚀"

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

//Function to find the nth prime number
export function findNthPrime(n) {
    let count = 0;
    let num = 2;
    while (count < n) {
        if (isPrime(num)) {
            count++;
        }
        num++;
    }
    return num - 1;
}


export const UNIVERSITY_API = `http://universities.hipolabs.com/search?country=United+States`

export const POST = `https://jsonplaceholder.typicode.com/posts`


export const explorer = {
    id: "1",
    name: "root",
    isFolder: true,
    items: [
        {
            id: "2",
            name: "public",
            isFolder: true,
            items: [
                {
                    id: "3",
                    name: "public nested 1",
                    isFolder: true,
                    items: [
                        {
                            id: "4",
                            name: "index.html",
                            isFolder: false,
                            items: []
                        },
                        {
                            id: "5",
                            name: "hello.html",
                            isFolder: false,
                            items: []
                        }
                    ]
                },
                {
                    id: "6",
                    name: "public_nested_file",
                    isFolder: false,
                    items: []
                }
            ]
        },
        {
            id: "7",
            name: "src",
            isFolder: true,
            items: [
                {
                    id: "8",
                    name: "App.js",
                    isFolder: false,
                    items: []
                },
                {
                    id: "9",
                    name: "Index.js",
                    isFolder: false,
                    items: []
                },
                {
                    id: "10",
                    name: "styles.css",
                    isFolder: false,
                    items: []
                }
            ]
        },
        {
            id: "11",
            name: "package.json",
            isFolder: false,
            items: []
        }
    ]
};


export const commentData = [
    {
        id: 1,
        name: 'gagan',
        comment: 'Hi from Gagan',
        reply: [
            {
                id: 4,
                name: 'kiran',
                comment: 'Hello Gagan! How are you?',
                reply: [
                    {
                        id: 8,
                        name: 'gagan',
                        comment: 'Doing well, thanks Kiran!',
                        reply: []
                    }
                ]
            },
            {
                id: 5,
                name: 'sandeep',
                comment: 'Nice to see you here, Gagan!',
                reply: []
            }
        ]
    },
    {
        id: 2,
        name: 'naveen',
        comment: 'Hi from Naveen',
        reply: [
            {
                id: 6,
                name: 'rajesh',
                comment: 'Hey Naveen, how’s it going?',
                reply: [
                    {
                        id: 9,
                        name: 'naveen',
                        comment: 'Great, thanks Rajesh!',
                        reply: []
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'shiva',
        comment: 'Hi from Shiva',
        reply: [
            {
                id: 7,
                name: 'priya',
                comment: 'Hello Shiva!',
                reply: [
                    {
                        id: 10,
                        name: 'shiva',
                        comment: 'Hey Priya!',
                        reply: []
                    }
                ]
            }
        ]
    },
    {
        id: 11,
        name: 'ananya',
        comment: 'Good afternoon everyone!',
        reply: [
            {
                id: 12,
                name: 'vishal',
                comment: 'Good afternoon, Ananya!',
                reply: []
            }
        ]
    },
    {
        id: 13,
        name: 'sneha',
        comment: 'Just joined, excited to be here!',
        reply: [
            {
                id: 14,
                name: 'sameer',
                comment: 'Welcome Sneha!',
                reply: []
            },
            {
                id: 15,
                name: 'ravi',
                comment: 'Hi Sneha!',
                reply: []
            }
        ]
    }
];

export const PRODUCT_API = 'https://dummyjson.com/products'

export const USERDATA_API = "https://jsonplaceholder.typicode.com/users"
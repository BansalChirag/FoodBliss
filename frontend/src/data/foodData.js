const foodItems = [
    {
        id: 1,
        CategoryName: "Biryani/Rice",
        name: "Chicken Fried Rice",
        img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        options: [
            {
                half: "130",
                full: "220"
            }
        ],
        description: "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
        id: 2,
        CategoryName: "Biryani/Rice",
        name: "Veg Fried Rice",
        img: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        options: [
            {
                half: "110",
                full: "200"
            }
        ],
        description: "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
        id: 3,
        CategoryName: "Biryani/Rice",
        name: "Fish Biryani",
        img: "https://media.istockphoto.com/photos/king-fish-biryani-with-raita-served-in-a-golden-dish-isolated-on-dark-picture-id1409942571?b=1&k=20&m=1409942571&s=170667a&w=0&h=ozlMJf5hsDmS2sSdEdBWnoSZOEITef4qGMeWeq2lyTc=",
        options: [
            {
                half: "200",
                full: "320"
            }
        ],
        description: "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
        id: 4,
        CategoryName: "Biryani/Rice",
        name: "Chicken Biryani",
        img: "https://cdn.pixabay.com/photo/2019/11/04/12/16/rice-4601049__340.jpg",
        options: [
            {
                half: "170",
                full: "300"
            }
        ],
        description: "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
        id: 5,
        CategoryName: "Biryani/Rice",
        name: "Veg Biryani",
        img: "https://media.istockphoto.com/photos/veg-biryani-picture-id1363306527?b=1&k=20&m=1363306527&s=170667a&w=0&h=VCbro7CX8nq2kruynWOCO2GbMGCea2dDJy6O6ebCKD0=",
        options: [
            {
                half: "150",
                full: "260"
            }
        ],
        description: "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
        id: 6,
        CategoryName: "Biryani/Rice",
        name: "Prawns Fried Rice",
        img: "https://cdn.pixabay.com/photo/2018/03/23/08/27/thai-fried-rice-3253027__340.jpg",
        options: [
            {
                half: "120",
                full: "220"
            }
        ],
        description: "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
        id: 7,
        CategoryName: "Starter",
        name: "Chilli Paneer",
        img: "https://media.istockphoto.com/photos/spicy-paneer-or-chilli-paneer-or-paneer-tikka-or-cottage-cheese-in-picture-id697316634?b=1&k=20&m=697316634&s=170667a&w=0&h=bctfHdYTz9q2dJUnuxGRDUUwC9UBWjL_oQo5ECVVDAs=",
        options: [
            {
                half: "120",
                full: "200"
            }
        ],
        description: "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
       
        {
            id: 8,
            CategoryName: "Starter",
            name: "Paneer 65",
            img: "https://media.istockphoto.com/photos/paneer-tikka-kabab-in-red-sauce-is-an-indian-dish-made-from-chunks-of-picture-id1257507446?b=1&k=20&m=1257507446&s=170667a&w=0&h=Nd7QsslbvPqOcvwu1bY0rEPZXJqwoKTYCal3nty4X-Y=",
            options: [
                {
                    half: "150",
                    full: "260"
                }
            ],
            description: "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
        },
        {
            id: 9,
            CategoryName: "Starter",
            name: "Chicken Tikka",
            img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHRpa2thfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            options: [
                {
                    half: "170",
                    full: "300"
                }
            ],
            description: "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
        },
        {
            id: 10,
            CategoryName: "Starter",
            name: "Paneer Tikka",
            img: "https://media.istockphoto.com/photos/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-picture-id1186759790?k=20&m=1186759790&s=612x612&w=0&h=e9MlX_7cZtq9_-ORGLPNU27VNP6SvDz7s-iwTxrf7wU=",
            options: [
                {
                    half: "170",
                    full: "250"
                }
            ],
            description: "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
        },
        {
            id: 11,
            CategoryName: "Pizza",
            name: "Chicken Cheese Pizza",
            img: "https://media.istockphoto.com/photos/double-topping-pizza-on-the-wooden-desk-isolated-picture-id1074109872?k=20&m=1074109872&s=612x612&w=0&h=JoYwwTfU_mMBykXpRB_DmgeecfotutOIO9pV5_JObpk=",
            options: [
                {
                    regular: "120",
                    medium: "230",
                    large: "350"
                }
            ],
            description: "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
        },
        {
            id: 12,
            CategoryName: "Pizza",
            name: "Mix Veg Pizza",
            img: "https://media.istockphoto.com/photos/chinese-food-veg-pizza-picture-id1341905237?k=20&m=1341905237&s=612x612&w=0&h=Lbuza1Ig5cC1PwQhqTsq-Uac8hg1W-V0Wx4d4lqDeB0=",
            options: [
                {
                    regular: "100",
                    medium: "200",
                    large: "300"
                }
            ],
            description: "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
        },
        // {
        //     id: 13,
        //     CategoryName: "Burger",
        //     name: "Cheeseburger",
        //     img: "https://images.unsplash.com/photo-1565299627-219b1a586625?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         size: "Regular",
        //         price: "120"
        //       },
        //       {
        //         size: "Large",
        //         price: "150"
        //       }
        //     ],
        //     description: "A classic cheeseburger with a juicy beef patty and melted cheese."
        //   },
        //   {
        //     id: 14,
        //     CategoryName: "Pizza",
        //     name: "Margherita Pizza",
        //     img: "https://images.unsplash.com/photo-1587502537542-91d069423c2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFyZ2hlcml0YSUyMHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         size: "Regular",
        //         price: "150"
        //       },
        //       {
        //         size: "Medium",
        //         price: "250"
        //       },
        //       {
        //         size: "Large",
        //         price: "350"
        //       }
        //     ],
        //     description: "A traditional pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves."
        //   },
        //   {
        //     id: 15,
        //     CategoryName: "Dessert",
        //     name: "Chocolate Brownie",
        //     img: "https://images.unsplash.com/photo-1590074033613-05b577b01f1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnJvd25pZSUyMGRlc3NlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         type: "Single",
        //         price: "80"
        //       },
        //       {
        //         type: "Double",
        //         price: "150"
        //       }
        //     ],
        //     description: "A decadent chocolate brownie served with a scoop of vanilla ice cream."
        //   },
        //   {
        //     id: 16,
        //     CategoryName: "Biryani/Rice",
        //     name: "Egg Biryani",
        //     img: "https://images.unsplash.com/photo-1604715512432-085da4986536?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZWdnJTIwYmlyeWFuaSUyMHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         half: "150",
        //         full: "260"
        //       }
        //     ],
        //     description: "A flavorful biryani with fragrant rice and boiled eggs."
        //   },
        //   {
        //     id: 17,
        //     CategoryName: "Biryani/Rice",
        //     name: "Mutton Biryani",
        //     img: "https://images.unsplash.com/photo-1579928897548-89ad2502f060?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXV0dG9uJTIwYmlyeWFuaSUyMHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         half: "180",
        //         full: "320"
        //       }
        //     ],
        //     description: "A rich and aromatic biryani with tender mutton pieces."
        //   },
        //   {
        //     id: 18,
        //     CategoryName: "Starter",
        //     name: "Vegetable Spring Rolls",
        //     img: "https://images.unsplash.com/photo-1551024737-b58610a4c396?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3ByaW5nJTIwcm9sbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         quantity: "4 pieces",
        //         price: "100"
        //       },
        //       {
        //         quantity: "8 pieces",
        //         price: "180"
        //       }
        //     ],
        //     description: "Crispy spring rolls filled with a mix of fresh vegetables."
        //   },
        //   {
        //     id: 19,
        //     CategoryName: "Starter",
        //     name: "Paneer Tikka Masala",
        //     img: "https://images.unsplash.com/photo-1550735391-25c3dbefa672?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFuZWVyJTIwdGlra2ElMjBtYXNhbGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         quantity: "Half plate",
        //         price: "150"
        //       },
        //       {
        //         quantity: "Full plate",
        //         price: "280"
        //       }
        //     ],
        //     description: "Soft and marinated paneer tikka cooked in a creamy masala sauce."
        //   },
        //   {
        //     id: 20,
        //     CategoryName: "Pizza",
        //     name: "Pepperoni Pizza",
        //     img: "https://images.unsplash.com/photo-1578886736121-507bcc496c6f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         size: "Regular",
        //         price: "200"
        //       },
        //       {
        //         size: "Medium",
        //         price: "320"
        //       },
        //       {
        //         size: "Large",
        //         price: "440"
        //       }
        //     ],
        //     description: "A classic pizza topped with pepperoni slices and melted cheese."
        //   },
        //   {
        //     id: 21,
        //     CategoryName: "Burger",
        //     name: "Veggie Burger",
        //     img: "https://images.unsplash.com/photo-1565299266-aa8c4b1acb3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVnZ2llJTIwYnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         size: "Regular",
        //         price: "120"
        //       },
        //       {
        //         size: "Large",
        //         price: "150"
        //       }
        //     ],
        //     description: "A delicious vegetarian burger with a patty made from assorted veggies."
        //   },
        //   {
        //     id: 22,
        //     CategoryName: "Dessert",
        //     name: "Strawberry Cheesecake",
        //     img: "https://images.unsplash.com/photo-1580927752452-41d2a9d53823?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyYXdiZXJyeSUyMGNoZWVzY2FrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         type: "Slice",
        //         price: "120"
        //       },
        //       {
        //         type: "Whole",
        //         price: "600"
        //       }
        //     ],
        //     description: "A creamy cheesecake with a strawberry topping and a buttery graham cracker crust."
        //   },
        //   {
        //     id: 23,
        //     CategoryName: "Soup",
        //     name: "Tomato Soup",
        //     img: "https://images.unsplash.com/photo-1572449014802-76e8c7dd4173?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvJTIwc291cHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         size: "Regular",
        //         price: "80"
        //       },
        //       {
        //         size: "Large",
        //         price: "120"
        //       }
        //     ],
        //     description: "A comforting and tangy tomato-based soup with a hint of herbs and spices."
        //   },
        //   {
        //     id: 24,
        //     CategoryName: "Pasta",
        //     name: "Penne Arrabiata",
        //     img: "https://images.unsplash.com/photo-1589578131767-18d5f420d4e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFzdGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         size: "Regular",
        //         price: "150"
        //       },
        //       {
        //         size: "Large",
        //         price: "220"
        //       }
        //     ],
        //     description: "Al dente penne pasta tossed in a spicy tomato sauce with garlic and herbs."
        //   },
        //   {
        //     id: 25,
        //     CategoryName: "Sandwich",
        //     name: "Grilled Chicken Sandwich",
        //     img: "https://images.unsplash.com/photo-1612524781640-7725d99e9e8c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JpbGxlZCUyMGNoaWNrZW4lMjBzYW5kd2ljaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         size: "Regular",
        //         price: "180"
        //       },
        //       {
        //         size: "Large",
        //         price: "220"
        //       }
        //     ],
        //     description: "Grilled chicken breast, lettuce, and mayo layered between slices of toasted bread."
        //   },
        //   {
        //     id: 26,
        //     CategoryName: "Salad",
        //     name: "Greek Salad",
        //     img: "https://images.unsplash.com/photo-1560807707-99ef09e3dcef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdyZWVrJTIwc2FsYWQlMjBkZXNzYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         size: "Regular",
        //         price: "130"
        //       },
        //       {
        //         size: "Large",
        //         price: "200"
        //       }
        //     ],
        //     description: "A refreshing salad with fresh lettuce, tomatoes, cucumbers, olives, and feta cheese, drizzled with olive oil and lemon dressing."
        //   },
        //   {
        //     id: 27,
        //     CategoryName: "Chicken",
        //     name: "Lemon Pepper Chicken",
        //     img: "https://images.unsplash.com/photo-1589996616760-c7dd01e5ffcd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGVtb24lMjBwZXBwZXIlMjBjaGlja2VuJTIwZGVzY3JpcHRpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         quantity: "Half",
        //         price: "180"
        //       },
        //       {
        //         quantity: "Full",
        //         price: "320"
        //       }
        //     ],
        //     description: "Grilled chicken marinated with zesty lemon and cracked black pepper."
        //   },
        //   {
        //     id: 28,
        //     CategoryName: "Seafood",
        //     name: "Grilled Salmon",
        //     img: "https://images.unsplash.com/photo-1525610819933-1745c41f0694?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsbW9uJTIwZ3JpbGwlMjBzYWxvbW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         quantity: "Half",
        //         price: "280"
        //       },
        //       {
        //         quantity: "Full",
        //         price: "520"
        //       }
        //     ],
        //     description: "Fresh and succulent grilled salmon seasoned with herbs and spices."
        //   },
        //   {
        //     id: 29,
        //     CategoryName: "Breakfast",
        //     name: "Avocado Toast",
        //     img: "https://images.unsplash.com/photo-1483137140003-ae073b395549?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZvY2FkbyUyMHRvYXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         size: "Regular",
        //         price: "90"
        //       },
        //       {
        //         size: "Large",
        //         price: "130"
        //       }
        //     ],
        //     description: "Toasted bread topped with mashed avocado, olive oil, and a sprinkle of salt and pepper."
        //   },
        //   {
        //     id: 30,
        //     CategoryName: "Dessert",
        //     name: "Chocolate Brownie",
        //     img: "https://images.unsplash.com/photo-1547514708-7a5284fe0d25?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym93bmllJTIwYmxvd25pZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         type: "Piece",
        //         price: "60"
        //       },
        //       {
        //         type: "Whole",
        //         price: "350"
        //       }
        //     ],
        //     description: "A rich and fudgy chocolate brownie, perfect for chocolate lovers."
        //   },
        //   {
        //     id: 31,
        //     CategoryName: "Soup",
        //     name: "Mushroom Soup",
        //     img: "https://images.unsplash.com/photo-1590529518636-47b77725c19c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaHJvb20lMjBzb3VwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         size: "Regular",
        //         price: "80"
        //       },
        //       {
        //         size: "Large",
        //         price: "120"
        //       }
        //     ],
        //     description: "A creamy and earthy soup made with fresh mushrooms and a blend of herbs and spices."
        //   },
        //   {
        //     id: 32,
        //     CategoryName: "Pasta",
        //     name: "Spinach and Ricotta Ravioli",
        //     img: "https://images.unsplash.com/photo-1565299464-dcd57b380a9d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BpbmFjaCUyMGFuZCUyMHJpY292b2xpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         size: "Regular",
        //         price: "160"
        //       },
        //       {
        //         size: "Large",
        //         price: "240"
        //       }
        //     ],
        //     description: "Delicate spinach and ricotta-filled ravioli served with your choice of sauce."
        //   },
        //   {
        //     id: 33,
        //     CategoryName: "Sandwich",
        //     name: "Turkey Club Sandwich",
        //     img: "https://images.unsplash.com/photo-1595500211897-08b5a5928e9a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHVya2V5JTIwY2x1YiUyMHNhbmR3aWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         size: "Regular",
        //         price: "150"
        //       },
        //       {
        //         size: "Large",
        //         price: "180"
        //       }
        //     ],
        //     description: "Layers of turkey, bacon, lettuce, tomato, and mayo on toasted bread."
        //   },
        //   {
        //     id: 34,
        //     CategoryName: "Salad",
        //     name: "Caesar Salad",
        //     img: "https://images.unsplash.com/photo-1567032207837-b36c7c03b7e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Flc2FyJTIwc2FsYWQlMjBkZXNzYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         size: "Regular",
        //         price: "110"
        //       },
        //       {
        //         size: "Large",
        //         price: "180"
        //       }
        //     ],
        //     description: "Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese."
        //   },
        //   {
        //     id: 35,
        //     CategoryName: "Chicken",
        //     name: "Honey Mustard Chicken",
        //     img: "https://images.unsplash.com/photo-1570597724810-c70d7061c75e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbmV5JTIrbXVzdGFyZCUyMGNoaWNrZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         quantity: "Half",
        //         price: "190"
        //       },
        //       {
        //         quantity: "Full",
        //         price: "340"
        //       }
        //     ],
        //     description: "Grilled chicken breast marinated in a sweet and tangy honey mustard sauce."
        //   },
        //   {
        //     id: 36,
        //     CategoryName: "Seafood",
        //     name: "Shrimp Scampi",
        //     img: "https://images.unsplash.com/photo-1594168115913-d3b7c8e17cf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNocmltcCUyMHNjYW1waXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         quantity: "Half",
        //         price: "260"
        //       },
        //       {
        //         quantity: "Full",
        //         price: "480"
        //       }
        //     ],
        //     description: "Tender shrimp sautéed in garlic butter and served with a side of pasta or rice."
        //   },
        //   {
        //     id: 37,
        //     CategoryName: "Breakfast",
        //     name: "Pancakes",
        //     img: "https://images.unsplash.com/photo-1565981172-92f2d5c1a570?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuY2FrZXMlMjBkZWZhdWx0JTIwcGFuY2FrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         size: "Regular",
        //         price: "100"
        //       },
        //       {
        //         size: "Large",
        //         price: "140"
        //       }
        //     ],
        //     description: "Fluffy and golden pancakes served with maple syrup and butter."
        //   },
        //   {
        //     id: 38,
        //     CategoryName: "Dessert",
        //     name: "Vanilla Ice Cream",
        //     img: "https://images.unsplash.com/photo-1564071155509-38d2dbbaa848?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmFuaWxsYSUyMGluZCUyMGNvbW1pc3Npb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         type: "Scoop",
        //         price: "50"
        //       },
        //       {
        //         type: "Double Scoop",
        //         price: "90"
        //       }
        //     ],
        //     description: "Smooth and creamy vanilla ice cream, perfect for a sweet treat."
        //   },
        //   {
        //     id: 39,
        //     CategoryName: "Soup",
        //     name: "Chicken Noodle Soup",
        //     img: "https://images.unsplash.com/photo-1604348165083-6bb894f0cf0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbiUyMG5vb2RsZSUyMHNvdXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         size: "Regular",
        //         price: "90"
        //       },
        //       {
        //         size: "Large",
        //         price: "130"
        //       }
        //     ],
        //     description: "Hearty chicken soup with tender noodles, vegetables, and aromatic herbs."
        //   },
        //   {
        //     id: 40,
        //     CategoryName: "Pasta",
        //     name: "Lobster Linguine",
        //     img: "https://images.unsplash.com/photo-1600138610326-6ae3a3ae8805?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9ic3RlciUyMGxpbmd1aW5lJTIwZGVzc2VydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //       {
        //         size: "Regular",
        //         price: "380"
        //       },
        //       {
        //         size: "Large",
        //         price: "700"
        //       }
        //     ],
        //     description: "Linguine pasta tossed in a rich and creamy lobster sauce, topped with tender lobster meat." 
        //   },
        //   {
        //     id: 41,
        //     CategoryName: "Biryani/Rice",
        //     name: "Lamb Biryani",
        //     img: "https://images.unsplash.com/photo-1618836230767-488c6738d63e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFtYiUyMGJpcnJ5YW5pJTIwcGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //         {
        //             half: "200",
        //             full: "350"
        //         }
        //     ],
        //     description: "A delicious biryani made with tender lamb pieces and aromatic spices."
        // },
        // {
        //     id: 42,
        //     CategoryName: "Biryani/Rice",
        //     name: "Shrimp Biryani",
        //     img: "https://images.unsplash.com/photo-1561174587-4bbfbc5b61a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hyaW1wJTIwYmlyeWFuaSUyMHBlc3Npc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //         {
        //             half: "180",
        //             full: "300"
        //         }
        //     ],
        //     description: "A flavorful biryani prepared with succulent shrimp and fragrant spices."
        // },
        // {
        //     id: 43,
        //     CategoryName: "Starter",
        //     name: "Mushroom Tikka",
        //     img: "https://images.unsplash.com/photo-1612518160620-6e33e0e1b5b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaHJvb20lMjB0aWtrYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //         {
        //             half: "130",
        //             full: "240"
        //         }
        //     ],
        //     description: "Grilled mushroom skewers marinated in a spicy tikka masala sauce."
        // },
        // {
        //     id: 44,
        //     CategoryName: "Starter",
        //     name: "Crispy Chicken Wings",
        //     img: "https://images.unsplash.com/photo-1572572357395-ebaff13aa6b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3Jpc3B5JTIwY2hpY2tlbiUyMHdpbmdzJTIwd29tZXMlMjBlc3BlY2lhbGx5JTIwcHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //         {
        //             quantity: "6 pieces",
        //             price: "180"
        //         },
        //         {
        //             quantity: "12 pieces",
        //             price: "320"
        //         }
        //     ],
        //     description: "Deliciously crispy chicken wings tossed in your choice of sauce."
        // },
        // {
        //     id: 45,
        //     CategoryName: "Pizza",
        //     name: "Vegetarian Supreme",
        //     img: "https://images.unsplash.com/photo-1551014411-4b3db0e35c9e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnZXRhcmFpbiUyMHN1bXByZW1lJTIwcGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //         {
        //             size: "Medium",
        //             price: "280"
        //         },
        //         {
        //             size: "Large",
        //             price: "380"
        //         }
        //     ],
        //     description: "A loaded vegetarian pizza with a variety of fresh vegetables and a perfect blend of flavors."
        // },
        // {
        //     id: 46,
        //     CategoryName: "Pizza",
        //     name: "Barbecue Chicken",
        //     img: "https://images.unsplash.com/photo-1611142618654-50cc2cfc1aa5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYXF1ZSUyMGNoaWNrZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //         {
        //             size: "Medium",
        //             price: "320"
        //         },
        //         {
        //             size: "Large",
        //             price: "450"
        //         }
        //     ],
        //     description: "A smoky barbecue chicken pizza topped with tangy sauce, grilled chicken, and onions."
        // },
        // {
        //     id: 47,
        //     CategoryName: "Dessert",
        //     name: "Chocolate Lava Cake",
        //     img: "https://images.unsplash.com/photo-1573483037536-b8f02e170cd9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlJTIwbGF2YSUyMGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //         {
        //             size: "Single",
        //             price: "120"
        //         },
        //         {
        //             size: "Double",
        //             price: "200"
        //         }
        //     ],
        //     description: "Indulge in a warm and gooey chocolate lava cake with a molten chocolate center."
        // },
        // {
        //     id: 48,
        //     CategoryName: "Dessert",
        //     name: "Strawberry Cheesecake",
        //     img: "https://images.unsplash.com/photo-1578002442787-95a6f6b0e0dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0cmF3YmVycnklMjBjaGVlc2VrYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //         {
        //             size: "Slice",
        //             price: "150"
        //         },
        //         {
        //             size: "Whole",
        //             price: "550"
        //         }
        //     ],
        //     description: "Creamy and luscious strawberry cheesecake with a buttery graham cracker crust."
        // },
        // {
        //     id: 49,
        //     CategoryName: "Breakfast",
        //     name: "Egg Sandwich",
        //     img: "https://images.unsplash.com/photo-1586932728391-0d48e388fbb4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGVnZyUyMHNhbmRib3glMjBmcmllbmRzJTIwc2FuZHdpY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //         {
        //             type: "Regular",
        //             price: "80"
        //         },
        //         {
        //             type: "Cheese",
        //             price: "100"
        //         },
        //         {
        //             type: "Veggie",
        //             price: "90"
        //         }
        //     ],
        //     description: "A delicious sandwich made with scrambled eggs, served with your choice of toppings."
        // },
        // {
        //     id: 50,
        //     CategoryName: "Breakfast",
        //     name: "Pancakes",
        //     img: "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuY2FrZXMlMjBhcHBsaWNhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //         {
        //             type: "Plain",
        //             price: "80"
        //         },
        //         {
        //             type: "Blueberry",
        //             price: "90"
        //         },
        //         {
        //             type: "Chocolate Chip",
        //             price: "90"
        //         }
        //     ],
        //     description: "Fluffy pancakes served with your choice of toppings and syrup."
        // },
        // {
        //     id: 51,
        //     CategoryName: "Breakfast",
        //     name: "Omelette",
        //     img: "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuY2FrZXMlMjBhcHBsaWNhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //         {
        //             type: "Cheese",
        //             price: "90"
        //         },
        //         {
        //             type: "Vegetable",
        //             price: "90"
        //         },
        //         {
        //             type: "Ham and Cheese",
        //             price: "100"
        //         }
        //     ],
        //     description: "A fluffy omelette filled with your choice of ingredients."
        // },
        // {
        //     id: 52,
        //     CategoryName: "Breakfast",
        //     name: "Avocado Toast",
        //     img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZvY2FkbyUyMHRvYXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //         {
        //             type: "Classic",
        //             price: "90"
        //         },
        //         {
        //             type: "Smoked Salmon",
        //             price: "110"
        //         },
        //         {
        //             type: "Bacon and Egg",
        //             price: "100"
        //         }
        //     ],
        //     description: "A delicious combination of mashed avocado, served on toast with various toppings."
        // },
        // {
        //     id: 53,
        //     CategoryName: "Breakfast",
        //     name: "Breakfast Burrito",
        //     img: "https://images.unsplash.com/photo-1565299627-d0726670b709?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVycml0byUyMGRldGFpbCUyMGJ1cnJpdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //         {
        //             type: "Vegetarian",
        //             price: "100"
        //         },
        //         {
        //             type: "Bacon and Egg",
        //             price: "110"
        //         },
        //         {
        //             type: "Sausage and Cheese",
        //             price: "110"
        //         }
        //     ],
        //     description: "A hearty breakfast burrito filled with your choice of fillings and wrapped in a tortilla."
        // },
        // {
        //     id: 54,
        //     CategoryName: "Breakfast",
        //     name: "Fruit Parfait",
        //     img: "https://images.unsplash.com/photo-1565299627-d0726670b709?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXQlMjBwYXJmcXVpdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //     options: [
        //         {
        //             type: "Mixed Berries",
        //             price: "80"
        //         },
        //         {
        //             type: "Tropical Fruits",
        //             price: "90"
        //         },
        //         {
        //             type: "Granola and Yogurt",
        //             price: "100"
        //         }
        //     ],
        //     description: "A refreshing and healthy parfait made with layers of fresh fruits and yogurt."
        // },
        // {
        //     id: 55,
        //     CategoryName: "Burger",
        //     name: "Chicken Burger",
        //     img: "https://images.unsplash.com/photo-1553163147-622ab5b8ee1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbiUyMGRlc3NlcnxlbnwwfHwwfHw%3D",
        //     options: [
        //       {
        //         size: "Regular",
        //         price: "130"
        //       },
        //       {
        //         size: "Large",
        //         price: "160"
        //       }
        //     ],
        //     description: "A delicious chicken burger with a juicy patty and fresh toppings."
        //   },
        //   {
        //     id: 56,
        //     CategoryName: "Burger",
        //     name: "Veggie Burger",
        //     img: "https://images.unsplash.com/photo-1591696333668-fca19e6cfaf8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZ2llJTIwYnVyZ2VyfGVufDB8fDB8fA%3D%3D",
        //     options: [
        //       {
        //         size: "Regular",
        //         price: "110"
        //       },
        //       {
        //         size: "Large",
        //         price: "140"
        //       }
        //     ],
        //     description: "A flavorful veggie burger made with a variety of vegetables and spices."
        //   },
        //   {
        //     id: 57,
        //     CategoryName: "Burger",
        //     name: "Fish Burger",
        //     img: "https://images.unsplash.com/photo-1610393556744-73d25eaa888e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmlzaCUyMGRlc3NlcnxlbnwwfHwwfHw%3D",
        //     options: [
        //       {
        //         size: "Regular",
        //         price: "150"
        //       },
        //       {
        //         size: "Large",
        //         price: "180"
        //       }
        //     ],
        //     description: "A delightful fish burger with a crispy fish fillet and tangy sauce."
        //   }
          
                         
    ];
    
    module.exports = foodItems;
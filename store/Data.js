// var Data = {
//     food: {
//         apples: {
//             "name": "apples",
//             "type": "fruit",
//             "color": "red",
//             "description": "Apples are grown in the ground",
//             "monthsActive": [2, 3, 4, 5, 6, 7]
//         },
//         carrots: {
//             "name": "carrots",
//             "type": "vegetables",
//             "color": "orange",
//             "description": "Carrots are grown in the sky",
//             "monthsActive": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//         }
//     }
// }
//
// export default Data


var Data = {
    food: {
        apples: {
            "name": "apples",
            "type": "fruit",
            "color": "red",
            "description": "Apples are grown in the ground",
            "monthsActive": {
                "January": false,
                "February": false,
                "March": false,
                "April": false,
                "May": false,
                "June": false,
                "July": true,
                "August": true,
                "September": true,
                "October": true,
                "November": true,
                "December": true
            }
        },
        carrots: {
            "name": "carrots",
            "type": "vegetables",
            "color": "orange",
            "description": "Carrots are grown in the sky",
            "monthsActive": {
                "January": true,
                "February": true,
                "March": true,
                "April": true,
                "May": true,
                "June": false,
                "July": false,
                "August": false,
                "September": false,
                "October": false,
                "November": false,
                "December": true
            }
        }
    }
}

export default Data

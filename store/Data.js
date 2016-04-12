var Data = {
    food: {
        apples: {
            "name": "apples",
            "type": "fruit",
            "description": "Apples are grown in the ground",
            "backgroundImage": "../images/apple.png",
            "isGrowing": false,
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
        onions: {
            "name": "onions",
            "type": "fruit",
            "description": "Apples are grown in the ground",
            "backgroundImage": "../images/onion.png",
            "isGrowing": false,
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
            "type": "vegetable",
            "lengthOfGrowth": 12, // in weeks
            "whenToWater": 1, // in days
            "description": "Carrots are a popular root vegetable that are easy to grow in sandy soil. They are resistant to most pests and diseases, and are a good late season crop that can tolerate frost. Not all carrots are orange; varieties vary in color from purple to white.",
            "instructions": [
                "Plan to plant seeds outdoors 3 to 5 weeks before the last spring frost date.",
                "Make sure your soil is free of stones; carrots need deeply tilled soil that they can push through.",
                "Plant seeds 3-4 inches apart in rows. Rows should be at least a foot apart."
            ],
            "harvestInstructions": [
                "Carrots are mature at around 2 ½ months and ½ inch in diameter. You may harvest whenever desired maturity is reached.",
                "You may leave mature carrots in the soil for storage if the ground will not freeze.",
                "To store freshly harvested carrots, twist off the tops, scrub off the dirt under cold running water, let dry and seal in airtight plastic bags, and refrigerate. If you simply put fresh carrots in the refrigerator, they’ll go limp in a few hours."
            ],
            "backgroundImage": "../images/carrot.png",
            "isGrowing": false,
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
        },
        mushrooms: {
            "name": "mushrooms",
            "type": "vegetable",
            "description": "Carrots are grown in the sky",
            "backgroundImage": "../images/mushroom.png",
            "isGrowing": false,
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
        },
        brocoli: {
            "name": "brocoli",
            "type": "fruit",
            "description": "Apples are grown in the ground",
            "backgroundImage": "../images/brocoli.png",
            "isGrowing": false,
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
        tomatoes: {
            "name": "tomatoes",
            "type": "vegetable",
            "description": "Carrots are grown in the sky",
            "backgroundImage": "../images/tomato.png",
            "isGrowing": false,
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

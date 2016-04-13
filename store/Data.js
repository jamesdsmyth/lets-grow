var Data = {
    food: {
        apples: {
            "name": "apples",
            "type": "fruit",
            "lengthOfGrowth": 12, // in weeks
            "whenToWater": 1, // in days
            "description": "Apples are probably the easiest tree fruit to grow and the most popular with gardeners. You may be lucky enough to have one in your garden already, but if not, they are easy to establish. There are thousands of different types of apples, but they broadly fall into two categories: dessert apples for eating, and cookers, as the name suggest, for cooking. Some are dual-purpose, so suitable for both uses.",
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
            "sunExposure": "Full sun",
            "backgroundImage": "../images/apple.png",
            "isGrowing": false,
            "monthsActive": {
                "January": true,
                "February": true,
                "March": true,
                "April": false,
                "May": false,
                "June": false,
                "July": false,
                "August": false,
                "September": false,
                "October": false,
                "November": true,
                "December": true
            }
        },
        onions: {
            "name": "onions",
            "type": "vegetable",
            "lengthOfGrowth": 4, // in weeks
            "whenToWater": 1, // in days
            "description": "Onions are such a versatile vegetable – they feature in so many recipes, so growing your own onions means you’ll always have them to hand. They are easy to grow from baby onions called sets. Although seed is available, sets are the easiest and quickest way to grow onions. Sets are also are better in colder regions, and are less likely to be attacked by some pests and diseases.",
            "instructions": [
                "Onions need a sunny, sheltered site with fertile, well-drained soil. Avoid planting on freshly-manured ground as this can lead to rotting.",
                "Onions are best suited for growing in the open ground, but you could grow a short row or two in large, deep containers or raised beds. They are not suitable for growbags.",
                "Plant onion sets 10cm (4in) apart in rows 30cm (12in) apart from mid-March to mid-April. Gently push the sets into soft, well-worked soil so that the tip is just showing, and firm the soil around them. Plant hardy Japanese varieties in autumn for an early crop the following year."
            ],
            "harvestInstructions": [
                "Onions can be harvested when the foliage turns yellow and starts to topple over. Although it is sometimes suggested to bend over the foliage or gently lift the bulbs to break the roots, this is no longer recommended.",
                "Leave for two to three weeks and then carefully lift with a garden fork. Onions for storage must be firm, disease-free and then dried for two to three weeks, either laid out in the sun or in a shed if the weather is wet."
            ],
            "sunExposure": "Full sun",
            "backgroundImage": "../images/onion.png",
            "isGrowing": false,
            "monthsActive": {
                "January": false,
                "February": true,
                "March": true,
                "April": false,
                "May": false,
                "June": false,
                "July": false,
                "August": false,
                "September": false,
                "October": false,
                "November": false,
                "December": false
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
            "sunExposure": "Full sun",
            "backgroundImage": "../images/carrot.png",
            "isGrowing": false,
            "monthsActive": {
                "January": false,
                "February": true,
                "March": true,
                "April": true,
                "May": true,
                "June": true,
                "July": true,
                "August": false,
                "September": false,
                "October": false,
                "November": false,
                "December": false
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

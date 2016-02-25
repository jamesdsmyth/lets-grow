// Function that gets the current month and checks to see if it matches the inseason months
// saved in the food object.
var currentMonth = (months) => {

    var monthClass = 'not-in-season'
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();

    console.log(months)

    for(var i = 0; i < months.length; i++) {
        if(currentMonth == months[i]) {
            monthClass = 'in-season'
        }
    }

    return monthClass
}

export default currentMonth

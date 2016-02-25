// Function that returns a text value of the month after being passed the numeric equivilant
var transformMonth = (month) => {

    var transformedMonth;

    switch (month) {
        case 0:
        transformedMonth = 'January'
        break;
        case 1:
        transformedMonth = 'February'
        break;
        case 2:
        transformedMonth = 'March'
        break;
        case 3:
        transformedMonth = 'April'
        break;
        case 4:
        transformedMonth = 'May'
        break;
        case 5:
        transformedMonth = 'June'
        break;
        case 6:
        transformedMonth = 'July'
        break;
        case 7:
        transformedMonth = 'August'
        break;
        case 8:
        transformedMonth = 'September'
        break;
        case 9:
        transformedMonth = 'October'
        break;
        case 10:
        transformedMonth = 'November'
        break;
        case 11:
        transformedMonth = 'December'
        break;
    }
    return transformedMonth;
}

export default transformMonth

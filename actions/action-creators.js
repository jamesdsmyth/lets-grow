import moment from 'moment';

export function getTime () {
    return moment().format();
}

export function updateTime (time) {
    return moment(time).add(1, 'second').format();
}

export function startGrowingCreator(foodName) {
    var now = getTime();
    var timeLength = moment(now).add(1, 'second').format(); //just adding a second here.

    return {
        type: 'START_GROWING',
        food: foodName,
        isGrowing: true,
        time: now,
        timeLength: timeLength
    }
}

export function stopGrowingCreator(foodName) {
    var now = getTime();

    return {
        type: 'STOP_GROWING',
        food: foodName,
        time: now
    }
}

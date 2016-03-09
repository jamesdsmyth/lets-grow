import moment from 'moment';

export function getTime () {
    return moment().format();
}

export function updateTime (time) {
    return moment(time).add(1, 'second').format();
}

export function startGrowingCreator(foodName) {
    var now = getTime();
    console.log('this time now is', now);
    var b = moment(now).add(1, 'second').format(); //just adding a second here.
    console.log(b);

    return {
        type: 'START_GROWING',
        food: foodName,
        isGrowing: true,
        time: now
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

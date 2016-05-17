import moment from 'moment';

function getTime () {
    return moment().format();
}

export function startGrowingCreator (foodName) {
    return {
        type: 'START_GROWING',
        food: foodName,
        time: getTime()
    }
}

export function stopGrowingCreator (foodName) {
    return {
        type: 'STOP_GROWING',
        food: foodName,
        time: getTime()
    }
}

export function justWatered (foodName) {
    return {
        type: 'JUST_WATERED',
        food: foodName,
        time: getTime()
    }
}

export function needsWatering (foodName) {
    return {
        type: 'NEEDS_WATERING',
        food: foodName,
        time: getTime()
    }
}

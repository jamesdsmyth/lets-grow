export function startGrowingCreator(foodName) {
    var date = new Date();
    var time = date.getTime();
    return {
        type: 'START_GROWING',
        food: foodName,
        isGrowing: true,
        time: time
    }
}

export function stopGrowingCreator(foodName) {
    var date = new Date();
    var time = date.getTime();
    return {
        type: 'STOP_GROWING',
        food: foodName,
        time: time
    }
}

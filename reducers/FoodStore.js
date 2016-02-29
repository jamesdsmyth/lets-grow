import Data from '../store/Data'

var FoodStore = (state = Data.food, action) => {
    console.log('reducer called with state ', state , ' and action ', action);

    switch (action.type) {

        case 'TO_DO':
            return {
                ...state,
                apples: {
                    name: 'THIS IS THE NEW TIME'
                }
            }
    }
    return state;
}

export default FoodStore

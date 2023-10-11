import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const sortedState = [...state];
            if (action.payload === 'up') {
                return sortedState.sort((a, b) => a.name > b.name ? 1 : -1);
            } else if (action.payload === 'down') {
                return sortedState.sort((a, b) => a.name < b.name ? 1 : -1);
            }
            return sortedState;
        }
        case 'check': {
            // filter() создаёт новый массив? или нужно в ручную?...
            return state.filter(el => el.age >= 18) // need to fix
        }
        default:
            return state
    }
}

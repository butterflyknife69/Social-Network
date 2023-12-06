const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SetUSERS = 'SetUSERS';

let initialState = {
    users: [
        // { id: 1, followed: false, fullName: 'Dmitry', status: 'Im a boss', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 2, followed: true, fullName: 'Svetlana', status: 'Im a boss', location: { city: 'Kiev', country: 'Ukraine' } },
        // { id: 3, followed: false, fullName: 'Sergei', status: 'Im a boss', location: { city: 'Krakow', country: 'Poland' } }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map()(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map()(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SetUSERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default: return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SetUSERS, users })
export default usersReducer;


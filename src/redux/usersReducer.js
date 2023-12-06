const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SetUSERS = 'SetUSERS';

let initialState = {
    users: [
        { id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Jason_Statham_2007.jpg/280px-Jason_Statham_2007.jpg', followed: false, fullName: 'Dmitry', status: 'Im a boss', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Jason_Statham_2007.jpg/280px-Jason_Statham_2007.jpg', followed: true, fullName: 'Svetlana', status: 'Im a boss', location: { city: 'Kiev', country: 'Ukraine' } },
        { id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Jason_Statham_2007.jpg/280px-Jason_Statham_2007.jpg', followed: false, fullName: 'Sergei', status: 'Im a boss', location: { city: 'Krakow', country: 'Poland' } }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
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


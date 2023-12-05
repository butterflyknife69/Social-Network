const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        { id: 1, followed: false, fullName: 'Dmitry', status: 'Im a boss', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 2, followed: true, fullName: 'Svetlana', status: 'Im a boss', location: { city: 'Kiev', country: 'Ukraine' } },
        { id: 3, followed: false, fullName: 'Sergei', status: 'Im a boss', location: { city: 'Krakow', country: 'Poland' } }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        default: return state
    }
}

export const followAC = () => ({ type: FOLLOW })
export const unfollowAC = () =>
    ({ type: UNFOLLOW})

export default usersReducer;


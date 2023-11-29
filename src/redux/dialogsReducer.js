const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';



let initialState={
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is yor it-kamasutra' },
        { id: 3, message: 'Yoo' },
        { id: 4, message: 'Yoo' },
        { id: 5, message: 'Yoo' },
        { id: 6, message: 'Yoo' }
    ],
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' }
    ],
    newMessageBody: ""
}

const dialogReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            let maxId = Math.max(...state.messages.map(message => message.id));
            state.messages.push({ id: maxId + 1, message: body });
            return state;
        default:
            // Якщо action.type не відповідає жодному case
            return state;
    }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default dialogReducer;

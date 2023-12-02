import StoreContext from '../../StoreContext';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().dialogPage;
          let onSendMessageClic = () => {
            store.dispatch(sendMessageCreator())
          }
          let onNewMessageChange = (body) => {
            store.dispatch(updateNewMessageBodyCreator(body))
          }
          return <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClic}
            dialogPage={state} />
        }
      }
    </StoreContext.Consumer>
  )
}
export default DialogsContainer;


import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
  let state = props.store.getState().dialogPage;
  let onSendMessageClic = () => {
    props.store.dispatch(sendMessageCreator())
  }
  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }
  return (<Dialogs
    updateNewMessageBody={onNewMessageChange}
    sendMessage={onSendMessageClic}
    dialogPage={state}
  />)
}
export default DialogsContainer;


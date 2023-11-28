import s from './Dialogs.module.css';
import DialogItem from './DialogItems/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';



const Dialogs = (props) => {
  let state = props.store.getState().dialogPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElement = state.messages.map(m => <Message message={m.message} />)
  let newMessageBody = state.newMessageBody;

  let onSendMessageClic = () => {
    props.store.dispatch(sendMessageCreator())
   }

  let onNewMessageChange = (e) => {
   let body= e.target.value
   props.store.dispatch(updateNewMessageBodyCreator(body))
  }
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElement}</div>
        <div>
          <div><textarea value={newMessageBody} onChange={onNewMessageChange}
            placeholder='Enter your message'></textarea></div>
          <div><button onClick={onSendMessageClic}>Send</button></div>
        </div>
      </div>
    </div>
  )
}


export default Dialogs;

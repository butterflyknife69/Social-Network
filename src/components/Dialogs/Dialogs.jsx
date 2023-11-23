import s from './Dialogs.module.css';
import DialogItem from './DialogItems/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {

  let dialogs = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' }
  ]
  let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is yor it-kamasutra' },
    { id: 3, message: 'Yoo' },
    { id: 4, message: 'Yoo' },
    { id: 4, message: 'Yoo' },
    { id: 5, message: 'Yoo' }
  ]

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

  let messagesElement = messages.map(m => <Message message={m.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElement}
      </div>
    </div>
  )
}


export default Dialogs;
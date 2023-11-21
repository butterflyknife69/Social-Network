import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to='/dialogs/1'>Dimych</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/2'>Andrey</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/3'>Sveta</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/4'>Sasha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/5'>Viktor</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/6'>Valera</NavLink>
        </div>
      </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How is yor it-kamasutra</div>
                <div className={s.dialog}>Yoo</div>
            </div>
        </div>
    )
}


export default Dialogs;
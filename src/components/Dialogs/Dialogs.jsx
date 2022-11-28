import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id

  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {

  let dialogs_data = [
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Taras' },
    { id: 3, name: 'Kolia' },
    { id: 2, name: 'Max' }
  ]

  let message_data = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How' },
    { id: 3, message: 'how how' }
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        <DialogItem name={dialogs_data[0].name} id={dialogs_data[0].id} />
        <DialogItem name='Taras' id='2' />
        <DialogItem name='Kolia' id='3' />
        <DialogItem name='Max' id='4' />
      </div>
      <div className={s.messages}>
        <Message message={message_data[0].message} />
        <Message message='How' />
        <Message message='how how' />
      </div>
    </div>
  );
}

export default Dialogs;

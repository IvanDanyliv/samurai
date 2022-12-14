import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialog_elements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
  let messages_elements = props.messages.map ( m => <Message message={m.message} /> );

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        { dialog_elements }
      </div>
      <div className={s.messages}>
        { messages_elements }
      </div>
    </div>
  );
}

export default Dialogs;

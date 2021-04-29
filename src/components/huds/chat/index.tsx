import { FC } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from 'redux/store';
import ChatBox from './chat-box';
import ChatInput from './chat-input';

const Chat: FC<TChat> = ({ type, enabled }) => {
  return (
    <>
      {enabled ? type === 'CHATBOX' ? <ChatBox /> : null : null}
      <ChatInput />
    </>
  );
};

const mapStateToProps = ({ settings }: AppStateType) => ({
  type: settings.UI.chat.chatType,
  enabled: settings.UI.chat.enabled,
});

export default connect(mapStateToProps)(Chat);

type TChat = ReturnType<typeof mapStateToProps>;

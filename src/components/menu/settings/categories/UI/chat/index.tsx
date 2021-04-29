import { FC } from 'react';

import Colorpick from 'components/menu/settings/basic/colorpick';
import Switch from 'components/menu/settings/basic/switch';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { RGB } from 'redux/settings/theming/types';
import {
  setChatBackgroundColor,
  setChatCommandMessageBackgroundColor,
  setChatCommandMessageFontColor,
  setChatEnabled,
  setChatFontColor,
  setChatGameMessageBackgroundColor,
  setChatGameMessageFontColor,
  setChatHeight,
  setChatType,
} from 'redux/settings/UI/chat/actions';

import { ChatType } from 'redux/settings/UI/chat/types';
import { AppStateType } from 'redux/store';
import Select from 'components/menu/settings/basic/select';
import { CHAT_HEIGHT_VALUES } from 'redux/settings/UI/chat/values';

const Chat: FC<TChat> = ({
  enabled,
  chatType,
  height,
  backgroundColor,
  fontColor,
  commandMessageBackgroundColor,
  commandMessageFontColor,
  gameMessageBackgroundColor,
  gameMessageFontColor,
  setEnabled,
  setType,
  setHeight,
  setBackgroundColor,
  setFontColor,
  setCommandMessageBackgroundColor,
  setCommandMessageFontColor,
  setGameMessageBackgroundColor,
  setGameMessageFontColor,
}) => {
  return (
    <>
      <Switch text="Enabled" enabled={enabled} onChange={setEnabled} main />
      <Select
        text="Type"
        items={['CHATBOX', 'POPUP'] as Array<ChatType>}
        selectedItem={chatType}
        onChange={setType}
      />
      <Select text="Height" items={CHAT_HEIGHT_VALUES} selectedItem={height} onChange={setHeight} />
      <Colorpick
        text="Background color"
        color={backgroundColor}
        onChange={setBackgroundColor}
        useAlpha
      />
      <Colorpick text="Font color" color={fontColor} onChange={setFontColor} />
      <Colorpick
        text="Commander message background color"
        color={commandMessageBackgroundColor}
        onChange={setCommandMessageBackgroundColor}
        useAlpha
      />
      <Colorpick
        text="Commander message font color"
        color={commandMessageFontColor}
        onChange={setCommandMessageFontColor}
      />
      <Colorpick
        text="Game (system) message background color"
        color={gameMessageBackgroundColor}
        onChange={setGameMessageBackgroundColor}
        useAlpha
      />
      <Colorpick
        text="Game (system) message font color"
        color={gameMessageFontColor}
        onChange={setGameMessageFontColor}
      />
    </>
  );
};

const mapStateToProps = ({ settings }: AppStateType) => ({
  ...settings.UI.chat,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setEnabled: (value: boolean) => dispatch(setChatEnabled(value)),
  setType: (value: ChatType) => dispatch(setChatType(value)),
  setBackgroundColor: (color: RGB) => dispatch(setChatBackgroundColor(color)),
  setFontColor: (color: RGB) => dispatch(setChatFontColor(color)),
  setHeight: (value: number) => dispatch(setChatHeight(value)),
  setCommandMessageBackgroundColor: (color: RGB) =>
    dispatch(setChatCommandMessageBackgroundColor(color)),
  setCommandMessageFontColor: (color: RGB) => dispatch(setChatCommandMessageFontColor(color)),
  setGameMessageBackgroundColor: (color: RGB) => dispatch(setChatGameMessageBackgroundColor(color)),
  setGameMessageFontColor: (color: RGB) => dispatch(setChatGameMessageFontColor(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

type TChat = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

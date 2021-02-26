import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rgbToCssString } from "api/utils";
import { FC, useEffect, useRef } from "react"
import { connect } from "react-redux";
import { AppStateType } from "redux/store";
import { TChatMessageType } from "redux/UI/types";
import css from './index.module.scss';

const ChatBox: FC<TChatBox> = ({ 
  menuShown,
  statsShown, 
  statsPosition, 
  backgroundColor,
  fontColor,
  gameMessageBackgroundColor,
  gameMessageFontColor,
  commandMessageBackgroundColor,
  commandMessageFontColor, 
  height, 
  messages,
}) => {

  const getBackgroundColor = (type: TChatMessageType): string => {
    switch (type) {
      case 'GAME': return rgbToCssString(gameMessageBackgroundColor);
      case 'COMMAND': return rgbToCssString(commandMessageBackgroundColor);
      case 'PLAYER': return 'transparent';
    }
  }

  const getFontColor = (type: TChatMessageType): string => {
    switch (type) {
      case 'GAME': return rgbToCssString(gameMessageFontColor);
      case 'COMMAND': return rgbToCssString(commandMessageFontColor);
      case 'PLAYER': return rgbToCssString(fontColor);
    }
  }

  const getBorderBottomColor = (type: TChatMessageType): string => {
    switch (type) {
      case 'GAME': return rgbToCssString({ ...gameMessageBackgroundColor, alpha: 0.1 });
      case 'COMMAND': return rgbToCssString({ ...commandMessageBackgroundColor, alpha: 0.1 });
      case 'PLAYER': return rgbToCssString({ ...backgroundColor, alpha: 0.1 });
    }
  }

  const endRef = useRef(null);

  useEffect(() => {
    if (!menuShown) { 
      // @ts-ignore
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, menuShown]); 


  return (
    <div 
      className={css.wrap}
      style={{
        bottom: statsShown ? statsPosition === 'BOTTOM LEFT' ? 38 : 0 : 0,
        height,
        backgroundColor: rgbToCssString(backgroundColor),
        boxShadow: `0 0 4px ${rgbToCssString(backgroundColor)}`
      }}
    >
      <div className={css.content}>
        {messages.map(({ nick, message, type, key }) => {
          return (
            <div 
              className={css.messageWrap}
              key={key}
              style={{
                backgroundColor: getBackgroundColor(type),
                color: getFontColor(type),
                fontWeight: type !== 'PLAYER' ? 600 : 'initial',
                borderBottom: `1px solid ${getBorderBottomColor(type)}`
              }}
            >
              <span className={css.nick}>
                {type === 'GAME' ? <FontAwesomeIcon icon={faGamepad}/> : `${nick.trim()}:`}
              </span>
              <span className={css.message}>{message}</span>
            </div>
          )
        })}
        <div className={css.messagesEnd} ref={endRef}></div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ settings, UI }: AppStateType) => ({
  statsShown: settings.UI.stats.shown,
  statsPosition: settings.UI.stats.position,
  messages: UI.chatMessages,
  menuShown: UI.menuShown,
  ...settings.UI.chat
});

export default connect(mapStateToProps)(ChatBox);

type TChatBox = ReturnType<typeof mapStateToProps>;
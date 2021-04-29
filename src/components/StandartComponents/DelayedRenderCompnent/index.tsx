import { FC, useEffect, useState } from 'react';

type DelayedRenderComponentType = {
  rendered: boolean;
  hideDelayMs: number;
};

const DelayedRenderComponent: FC<DelayedRenderComponentType> = ({
  rendered,
  hideDelayMs,
  children,
}) => {
  const [_rendered, _setRendered] = useState(rendered);

  useEffect(() => {
    let timeoutId: any;

    if (rendered) {
      _setRendered(true);
    } else {
      timeoutId = setTimeout(() => _setRendered(false), hideDelayMs);
    }

    return () => clearTimeout(timeoutId);
  }, [rendered, hideDelayMs]);

  return <>{_rendered ? children : null}</>;
};

export default DelayedRenderComponent;

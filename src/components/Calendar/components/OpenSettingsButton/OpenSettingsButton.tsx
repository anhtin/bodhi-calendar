import React from 'react';

import { Button } from './styled';

interface Props {
  onClick: () => void;
}

function OpenSettingsButton({ onClick }: Props) {
  return <Button onClick={onClick}>⚙</Button>;
}

export default OpenSettingsButton;

import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';

const Loading = () => (
  <div className="fixed z-[100000] top-0 left-0 bottom-0 right-0 bg-primary-950/90 flex items-center justify-center">
    <FontAwesomeIcon
      width={64}
      className="text-white animate-spin"
      icon={faSpinner}
    />
  </div>
);

export default Loading;

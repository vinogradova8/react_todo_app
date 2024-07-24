/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';

type Props = {
  errorMessage: string;
};

export const Notification: React.FC<Props> = ({ errorMessage }) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (errorMessage) {
      setHidden(false);
    }

    if (!errorMessage) {
      setHidden(true);
    }
  }, [errorMessage]);

  // setTimeout(() => setHidden(true), 3000);

  return (
    <div
      data-cy="ErrorNotification"
      className={cn('is-light has-text-weight-normal', {
        hidden,
        'is-danger': errorMessage,
        notification: errorMessage,
      })}
    >
      {errorMessage && (
        <button
          data-cy="HideErrorButton"
          type="button"
          className="delete"
          onClick={() => setHidden(true)}
        />
      )}
      {errorMessage}
    </div>
  );
};

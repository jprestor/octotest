import React, { useState } from 'react';

import './copy-field.scss';

export const CopyField: React.FC<any> = ({ value, className }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = (e: React.MouseEvent) => {
    (e.target as HTMLInputElement).select();
    document.execCommand('copy');
    setCopySuccess(true);

    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
  };

  return (
    <div className={`copy-field ${className ? className : ''}`}>
      <textarea
        className="copy-field__input"
        onClick={copyToClipboard}
        defaultValue={value}
        readOnly
      ></textarea>
      <div
        className={`copy-field__message ${
          copySuccess ? 'copy-field__message--visible' : ''
        }`}
      >
        Скопировано!
      </div>
    </div>
  );
};

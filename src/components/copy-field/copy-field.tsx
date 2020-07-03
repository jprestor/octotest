import React, { useState } from 'react';

export const CopyField: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = (e: React.MouseEvent) => {
    (e.target as HTMLInputElement).select();
    document.execCommand('copy');
    setCopySuccess('Скопировано!');
  };

  return (
    <div className="copy-field">
      <input
        className="copy-field__input"
        type="text"
        onClick={copyToClipboard}
        defaultValue="https://test.octweb.ru/api/pages/index/"
        readOnly
      />
      <div className="copy-field__message">{copySuccess}</div>
    </div>
  );
};

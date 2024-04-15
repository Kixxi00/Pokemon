'use client';

import { useState } from 'react';

const CopyToClipboardButton = ({
  value,
  className
}: {
  value: string;
  className?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // Reset copied state after 2 seconds
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  if (value.length > 0)
    return (
      <button
        onClick={handleCopy}
        className={`px-2 italic text-xs ${className}`}
        title="copy to clipboard"
      >
        {copied ? 'copied' : 'copy'}
      </button>
    );
  else return <></>;
};

export default CopyToClipboardButton;

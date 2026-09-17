'use client';
import { useState } from 'react';

export default function CopyCodeButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="text-xs bg-red-600 hover:bg-red-500 text-white font-bold px-4 py-2 rounded-lg transition"
    >
      {copied ? '✓ Copied!' : 'Copy'}
    </button>
  );
}

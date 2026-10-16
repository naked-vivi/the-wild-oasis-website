"use client"
import { useState } from 'react';

interface TextExpanderProps {
  children: string;
}

export default function TextExpander({ children }: TextExpanderProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const displayText = isExpanded
    ? children
    : children.split(' ').slice(0, 40).join(' ') + '...';

  return (
    <span>
      {displayText}{' '}
      <button
        type="button"
        className='text-primary-700 border-b border-primary-700 leading-3 pb-1 cursor-pointer'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </span>
  );
}
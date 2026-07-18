// textNode.js

import { useState, useRef } from 'react';
import { Position, Handle } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [height, setheight] = useState();
  const [width, setwidth] = useState();
  const textareaRef = useRef(null);
  const [variables, setVariables] = useState([]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value)
    setheight(e.target.scrollHeight)
    // setwidth(e.target.scrollWidth)
    const textarea = textareaRef.current;

    // Reset first so shrinking also works
    textarea.style.height = "auto";

    // Set new height
    textarea.style.height = `${textarea.scrollHeight}px`;

    // Make BaseNode match it
    setheight(textarea.scrollHeight + 75);
    const minWidth = 50;
    const maxWidth = 300;

    const calculatedWidth = Math.min(
      Math.max(200, currText.length * 11),
      maxWidth
    );

    setwidth(calculatedWidth);

    const matches = [...currText.matchAll(/\{\{\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*\}\}/g)];

    const vars = [...new Set(matches.map(match => match[1]))];

    setVariables(vars);

  };

  return (
    <BaseNode title="text" handles={[
      {
        type: "source",
        position: Position.Right,
        id: `${id}-output`
      }
    ]} style={{ height: `${height}px`, width: `${width}px` }}>


      <div className='flex flex-col gap-3'>
        <label className='flex flex-col gap-1 rounded-2'>
          Name:
          <textarea className='bg-white-900 text-[#1C2536] rounded-xl p-2 w-full resize-none'
            type="text"
            value={currText}
            onChange={handleTextChange}
            ref={textareaRef}
          />
        </label>
        {variables.map((variable, index) => (
          <Handle
            key={variable}
            id={variable}
            type="target"
            position={Position.Left}
            style={{ top: 40 + index * 20 }}
          />
        ))}
      </div>
    </BaseNode>
  );
}

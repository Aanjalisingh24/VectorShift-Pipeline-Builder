// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode title="Input" handles={[
       {
        type:"source",
        position:Position.Right,
        id:`${id}-value`
       }
    ]}>
      <div className='flex flex-col gap-3'>
        <label className='flex flex-col gap-1 rounded-2'>
          Name:
          <input className='bg-white-900 text-[#1C2536] rounded-xl p-2'
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
          />
        </label>
        <label className='flex flex-col gap-1'>
          Type:
          <select className='bg-white-900 text-[#1C2536] rounded-xl p-2' value={inputType} onChange={handleTypeChange}>
            <option className='text-[#1C2536]' value="Text">Text</option>
            <option className='text-[#1C2536]' value="File">File</option>
          </select>
        </label>
      </div>
   </BaseNode>
  );
}

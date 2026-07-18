// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode title="Output" handles={[
      {
        type:"target",
        position:Position.Left,
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
          <select className='bg-white-900 text-[#1C2536] rounded-xl p-2' value={outputType} onChange={handleTypeChange}>
            <option className='text-[#1C2536]' value="Text">Text</option>
            <option className='text-[#1C2536]' value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}

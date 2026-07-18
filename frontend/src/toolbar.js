// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode  type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='api' label = 'api' />
                <DraggableNode type='condition' label='condition' />
                <DraggableNode type='email' label='email' />
                <DraggableNode type='image' label='image' />
                <DraggableNode type='database' label='database' />
            </div>
        </div>
    );
};

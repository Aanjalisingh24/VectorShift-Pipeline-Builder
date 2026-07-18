import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { BaseNode } from './nodes/BaseNode';

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
      <BaseNode/>
    </div>
  );
}

export default App;

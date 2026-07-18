// submit.js
import axios from 'axios'
import { useStore } from "./store";

export const SubmitButton = () => {

  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handlesubmit = async () =>{
    try{
        const res = await axios.post("http://localhost:8000/pipelines/parse" , {
            nodes,
            edges
        });

        const {num_nodes , num_edges , is_dag} = res.data;

        alert(`
            Number of Nodes: ${num_nodes}
            Number of edges: ${num_edges}
            Is DAG: ${is_dag}
            `);

    } catch(err){
        console.log(err.message);
    }

  }
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button className='bg-[#1C2536] text-white p-4 rounded-xl m-2 hover:scale-105 transition-all duration-200 ' onClick={handlesubmit} type="submit">Submit</button>
        </div>
    );
}

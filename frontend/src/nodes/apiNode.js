import { BaseNode } from "./BaseNode"
import { Position } from 'reactflow';


export const APINODE = (id) => {
    return (
        <BaseNode title="api" handles={[
            {
            type: "source",
            position: Position.Right,
            id: `${id}-response`
        }
        ]} description="This is ApiNode">
        </BaseNode>
    )
}
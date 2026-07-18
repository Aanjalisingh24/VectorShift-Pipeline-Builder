import { BaseNode } from "./BaseNode"
import { Position } from 'reactflow';


export const DATABASENODE = (id) => {
    return (
        <BaseNode title="Database" handles={[
            {
            type: "source",
            position: Position.Right,
            id: `${id}-response`
        }
        ]} description="This is DataBaseNode">
        </BaseNode>

    )
}
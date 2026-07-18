import { BaseNode } from "./BaseNode"
import { Position } from 'reactflow';


export const EMAILNODE = (id) => {
    return (
        <BaseNode title="email" handles={[
            {
            type: "source",
            position: Position.Right,
            id: `${id}-response`
        }
        ]} description="This is EmailNode">
        </BaseNode>

    )
}
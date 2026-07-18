import { BaseNode } from "./BaseNode"
import { Position } from 'reactflow';


export const CONDITIONNODE = (id) => {
    return (
        <BaseNode title="Condition" handles={[
            {
            type: "source",
            position: Position.left,
            id: `${id}-response`
        }
        ]} description="This is ConditionNode">
        </BaseNode>

    )
}
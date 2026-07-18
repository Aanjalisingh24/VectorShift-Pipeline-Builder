import { BaseNode } from "./BaseNode"
import { Position } from 'reactflow';


export const IMAGENODE = (id) => {
    return (
        <BaseNode title="Image" handles={[
            {
            type: "source",
            position: Position.left,
            id: `${id}-response`
        }
        ]} description="This is ImageNode">
        </BaseNode>

    )
}
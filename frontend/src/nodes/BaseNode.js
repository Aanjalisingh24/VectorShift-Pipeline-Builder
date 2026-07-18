import { useState } from "react"
import { Handle } from "reactflow"

export const BaseNode = ({ title, children, handles =[] , description ,style }) => {

    return (
        <div style={{ border: '1px solid black', borderRadius:"10px", backgroundColor:"#1C2536", color:"white" , padding:"10px", ...style}}>
            <div >
                <h3 className="text-center">{title}</h3>
                {children}
                {handles.map((handle) => (
                    <Handle
                        key={handle.id}
                        type={handle.type}
                        position={handle.position}
                        id={handle.id}
                        style={handle.style}
                    />
                ))}
                <p>{description}</p>
            </div>
        </div>
    )
}

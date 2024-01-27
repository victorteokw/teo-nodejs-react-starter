import React, { FC } from "react"

interface SpacerProps {
    spacing: number
    direction: "vertical" | "horizontal"
}

const Spacer: FC<SpacerProps> = ({ spacing, direction }) => {
    return <div style={direction === 'vertical' ? { height: spacing } : { width: spacing }} />
}

export default Spacer

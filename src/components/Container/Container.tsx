import React, { FC } from 'react'
import './Container.scss'
type ContainerPropsType = {
    children: React.ReactNode
}
const Container: FC<ContainerPropsType> = ({ children }) => {
    return (
        <div className='container'>{children}</div>
    )
}

export default Container
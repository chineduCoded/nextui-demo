import React from 'react'
import { Loading } from "@nextui-org/react"

const Loader = () => {
    return (
        <div className='loader'>
            <Loading type="points" color="secondary" size='lg' />
        </div>
    )
}

export default Loader
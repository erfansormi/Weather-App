import React from 'react'

const Offline = () => {
    return (
        <div className='alert p-2' style={{ background: "rgb(51 51 51 / 26%)" }}>
            <h3 className='text-center mb-5'>you not online!</h3>
            <h6 className='text-center mb-2'>check your connection</h6>
        </div>
    )
}

export default Offline
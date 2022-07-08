import React from 'react'

const Loading = () => {
    return (
        <div className='text-center'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <h6 style={{textTransform:"uppercase"}}>loading...</h6>
        </div>
    )
}

export default Loading
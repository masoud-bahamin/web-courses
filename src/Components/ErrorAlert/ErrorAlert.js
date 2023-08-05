import React from 'react'

export default function ErrorAlert(error) {

    console.log(error);
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ width: "100vd", height: "100vh" }}>
            <div className='text-center'>
                <img src="https://www.dictio.id/uploads/db3342/original/3X/c/4/c45165360f01a3ceb96f8e44a1aef3ee29f7d404.jpeg" width={400} />
                <div className='alert alert-danger text-center w-50 my-5 mx-auto'>please try again</div>
                <p>{error.error.message}</p>
                <button className='btn btn-primary text-center'
                    onClick={() => window.location.reload()}
                >refresh</button>

            </div>

        </div>
    )
}

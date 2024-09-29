import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../Components/Add'
import Category from '../Components/Category'
import View from '../Components/View'

function Home() {

  const[uploadVideoResponse, setUploadVideoResponse]=useState({})
  const[dropVideoResponse,setDropVideoResponse]=useState({})

  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <div className="add-videos">
          <Add setUploadVideoResponse={setUploadVideoResponse}></Add>
        </div>
        <Link to={'/watch-history'} style={{ textDecoration: 'none', color: 'blue', fontSize: '30px' }}>Watch History <i class="fa-solid fa-clock-rotate-left"></i></Link>
      </div>
      <div className="container-fluid w-100 mt-5 mb-5 row">
        <div className="all-videos col-lg-9">
          <h1>All Videos</h1>
          <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse}></View>
        </div>
        <div className='all-videos col-lg-3'>
          <Category dropVideoResponse={dropVideoResponse}></Category>
        </div>
        </div>
    </>
  )
}

export default Home

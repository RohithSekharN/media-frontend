import React from 'react'
import { Card } from 'react-bootstrap'
import { useState } from 'react';
import { Modal} from 'react-bootstrap';
import { addHistoryAPI, deleteVideoAPI} from '../../service/allAPI';



function VideoCard({video, setDeleteVideoResponse,insideCategory}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {

  setShow(true)
  const{ caption, link} = video

  let today = new Date()
  console.log(new Intl.DateTimeFormat('en-US',{year: 'numeric', month: '2-digit',day: '2-digit',hour: '2-digit',minute: '2-digit',second: '2-digit'}).format(today));
  
  let timeStamp = new Intl.DateTimeFormat('en-US',{year: 'numeric', month: '2-digit',day: '2-digit',hour: '2-digit',minute: '2-digit',second: '2-digit'}).format(today)

  let videoHistory = {caption, link, timeStamp}

  await addHistoryAPI(videoHistory)

  }

  const deleteVideo = async(id) => {
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }

  const dragStarted = (e, id) => {
    console.log("Drag Started...Video ID: $"+id);
    e.dataTransfer.setData("VideoId", id)
  }

  return (
    <>
      <Card style={{ width: '18rem' }} draggable onDragStart={e=>dragStarted(e, video.id)}>
      <Card.Img style={{width: '100%', height: '400px'}} onClick={handleShow} variant="top" src={video.url} />
      <Card.Body>
        <Card.Title className='text-center p-2'>{video.caption}</Card.Title>
        {insideCategory?null: <button className='btn btn-danger w-100' onClick={()=>deleteVideo(video.id)}><i className="fa-solid fa-trash"></i></button>}
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video.caption} Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${video.link}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default VideoCard

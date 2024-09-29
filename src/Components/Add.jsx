import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { uploadVideoAPI } from '../../service/allAPI';

function Add({setUploadVideoResponse}) {

  const[uploadVideo, setUploadVideo] = useState({
    id:"",caption:"",url:"",link:""
  })

  // console.log(uploadVideo);

  const getYouTubeLink = (e) => {
    const { value } = e.target;
    if (value.includes("v=")) {
      let vID = value.split("v=")[1].slice(0, 11);
      const embedLink = `https://www.youtube.com/embed/${vID}`;
      setUploadVideo({ ...uploadVideo, link: embedLink });
    } else {
      // Clear the link if it's not a valid YouTube URL
      setUploadVideo({ ...uploadVideo, link: "" });
    }
  };

  const handleAdd=async()=>{
    const{id,caption,url,link}=uploadVideo

    if(!id || !caption || !url || !link){
      alert("Please fill all the fields")
    }
    else{
      // store video details to the json server
      const result = await uploadVideoAPI(uploadVideo)
      console.log(result);

      if(result.status>=200&&result.status<=300){
        // Success
        handleClose()
        // Alert
        alert("Video Uploaded Successfully")

        // Clear the form
        setUploadVideo({id:"",caption:"",url:"",link:""})

        setUploadVideoResponse(result.data)

      }
      else{
        console.log(result.message);
      }
    }
  }
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='d-flex  align-items-center'>
        <Button onClick={handleShow} className='ms-2 fs-5'>Upload Videos <i class="fa-solid fa-cloud-arrow-up"></i></Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel
        controlId="floatingInput"
        label="Video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video Id" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingName" label="Video Name">
        <Form.Control type="text" placeholder="Video Name" onChange={(e)=>setUploadVideo({...uploadVideo,caption:e.target.value})}/>
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingName"
        label="Image Url"
        className="mb-3 mt-3"
      >
        <Form.Control type="text" placeholder="Image Url" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})}/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingName" label="Video Url">
        <Form.Control type="text" placeholder="Video Url" onChange={getYouTubeLink}/>
      </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add

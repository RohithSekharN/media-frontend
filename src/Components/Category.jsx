import React, { useEffect } from 'react'
import { Col, Form, FormLabel, Row } from 'react-bootstrap'
import { Button, Modal } from 'react-bootstrap'
import { useState } from 'react'
import { addCategoryAPI, deleteCategoryAPI, getCategoryAPI, getAVideoAPI, updateCategoryAPI } from '../../service/allAPI'
import VideoCard from './VideoCard'

function Category({dropVideoResponse}) {
  const[categoryName,setCategoryName]=useState("")
  const [allCategories,setAllCategories]=useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async()=>{
    if(categoryName){
      const result = await addCategoryAPI({categoryName,allVideos:[]})
      console.log(result);
      if(result.status>=200 && result.status<300){
        handleClose()
        setCategoryName("")
        getCategories()
      }
      else{
        alert(result.message)
      }
    }
    else{
      alert("Please Enter Category Name")
    }
  }

  const getCategories = async()=>{
    const {data} = await getCategoryAPI()
    setAllCategories(data)
  }

  useEffect(()=>{
    getCategories()
  },[dropVideoResponse])

  // console.log(allCategories);

  const removeCategory = async(id)=>{
    await deleteCategoryAPI(id)
    getCategories()
  }

  const dragOver=(e)=>{
    console.log("Videocard dragging over the category");
    e.preventDefault()
    
  }

  const videoDropped=async(e,categoryId)=>{
    const VideoId = e.dataTransfer.getData("VideoId")
    console.log("Video Id: "+VideoId+"video dropped catergory id: "+categoryId);
    const {data} =  await getAVideoAPI(VideoId)
    // console.log(data);

    const selectedCategory = allCategories.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    // console.log(selectedCategory);

    await updateCategoryAPI(categoryId,selectedCategory)
    getCategories()
  }

  const videoDragStarted=(e,videoId,categoryId)=>{
    let datashare = {videoId,categoryId}
    e.dataTransfer.setData("data",JSON.stringify(datashare))
  }

  return (
    <div>
      <div className="d-grid">
        <button onClick={handleShow} className='btn btn-info'>Add Category</button>
      </div>

      {allCategories?.length>0?allCategories.map(category=>(
          <div className='border rounded mt-2' droppable="true" onDragOver={(e)=>dragOver(e)} onDrop={e=>videoDropped(e,category.id)}>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className='ps-3 pt-1'> {category.categoryName}</h5>
            <button onClick={()=>removeCategory(category.id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
          </div>
          <Row className='m-auto'>
            {
              category?.allVideos?.length>0?category?.allVideos.map(card=>(
                <Col className='m-3' sm={12} draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
                <VideoCard video={card} insideCategory={true}></VideoCard>
                </Col>
              )):null
              }
          </Row>


        </div>
        )):<p>No Category Found</p>
      }
      

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormLabel controlId='floatingName' label='Category' className='mb-3'>
              <Form.Control className='w-100' type='text' placeholder='Category Name' onChange={e=>setCategoryName(e.target.value)} />
            </FormLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Category
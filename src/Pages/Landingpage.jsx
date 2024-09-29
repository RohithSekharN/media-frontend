import React from 'react'
import { Card, CardImg, Col, Row} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {
  const navigateByUrl = useNavigate();
  return (
    <div>
      <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
          <h1 style={{fontSize:'40px'}}>Welcome to <span className='text-warning'>Media Player</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ad cumque odit eaque sed excepturi necessitatibus officia in, repudiandae natus odio est. Dolore suscipit odio illo totam nam odit magnam?</p>
          <button onClick={()=>navigateByUrl('/home')} className='btn btn-info mt-4'>Get Started</button>
        </Col>
        <Col lg={5}>
          <img width={'600px'} src="https://i.pinimg.com/originals/43/3d/83/433d83f7e481f35245f8c6bb7c7591d8.gif" alt="" />
        </Col>
        <Col></Col>
      </Row>

      <div className='container mt-5 d-flex justify-content-center align-items-center flex-column'>
        <h3>Features</h3>
        <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
          <Card style={{width: '22rem'}} className='p-4 bg-info'>
            <CardImg variant='top' height={'300px'} width={'300px'} src='https://i.pinimg.com/564x/0e/9d/c1/0e9dc161534927a7e2bf4f6d9aa9a793.jpg'></CardImg>
            <Card.Body>
              <Card.Title className='text-black'>Managing Videos</Card.Title>
              <Card.Text className='text-black'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ad cumque odit eaque sed excepturi necessitatibus officia in, repudiandae natus odio est. Dolore suscipit odio illo totam nam odit magnam?
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{width: '22rem'}} className='p-4 bg-info'>
            <CardImg variant='top' height={'300px'} width={'300px'} src='https://i.pinimg.com/564x/69/e0/39/69e039f7ecb37d70c2f7e9b5f41c5c6f.jpg'></CardImg>
            <Card.Body>
              <Card.Title className='text-black'>Categorized Video</Card.Title>
              <Card.Text className='text-black'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ad cumque odit eaque sed excepturi necessitatibus officia in, repudiandae natus odio est. Dolore suscipit odio illo totam nam odit magnam?
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{width: '22rem'}} className='p-4 bg-info'>
            <CardImg variant='top' height={'300px'} width={'300px'} src='https://i.pinimg.com/564x/b0/b1/ec/b0b1ec2093ebb90f8f1704da1ba7f200.jpg'></CardImg>
            <Card.Body>
              <Card.Title className='text-black'>Watch History</Card.Title>
              <Card.Text className='text-black'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ad cumque odit eaque sed excepturi necessitatibus officia in, repudiandae natus odio est. Dolore suscipit odio illo totam nam odit magnam?
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100'>
        <div className='col-lg-5'>
          <h4 className='text-warning'>Simple,Powerful & Fast</h4>
          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi rem veniam aut quis consectetur repudiandae, consequuntur labore tempore excepturi est nesciunt sint natus quia fugit odio incidunt, ut reprehenderit et?</h6>

          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi rem veniam aut quis consectetur repudiandae, consequuntur labore tempore excepturi est nesciunt sint natus quia fugit odio incidunt, ut reprehenderit et?</h6>

          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Managing Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi rem veniam aut quis consectetur repudiandae, consequuntur labore tempore excepturi est nesciunt sint natus quia fugit odio incidunt, ut reprehenderit et?</h6>
        </div>
        <div>
        <iframe width="700" height="400" src="https://www.youtube.com/embed/aFsGDcy-6hc?si=ZpXSZj3lybaWaJiS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

    </div>
  )
}

export default Landingpage

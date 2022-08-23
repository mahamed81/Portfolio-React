import Project from './Project';
import { selectAllProjects } from './ProjectSlice';
import { Row, Col, Container } from 'reactstrap';

const ProjectList = () => {
  const proj = selectAllProjects();
  console.log(proj)

  return (
    <Container >
      <h1 className='text-center text-white'>Projects</h1>
      <hr className='offset-3'/>
      <Row style={{marginTop: 80,}} className='offset-1'>
   
        {proj.map((item)=>{
        return (
            <Col  sm = '6' md = '4' className='mb-5'>
              <Project key = {proj.id} item ={item}/>
            </Col>
        ) 
      })}
  
    </Row>
    </Container>
    
    
  );
}

export default ProjectList;

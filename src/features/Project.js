import { Col, Row } from 'reactstrap';
const Project = ({item}) => {
  

  const {pic, title, desc, site, github} = item;
  return (
    <div className="card" style={{width: '18rem'}}>
      <img className="card-img-top" src={pic} alt="Card image cap" />
   <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <Row>
      <Col className='col-auto'>
    <a href={site} className="btn btn-primary"><i className='fa fa-globe fa-lg' /> Vis site</a>
    
      </Col>
      <Col className='col-auto'>
    <a href={github} className="btn btn-primary"><i className='fa fa-github fa-lg' />See Code </a>
      </Col>
    </Row>
  </div>
</div>
  );
}

export default Project;

import { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import '../styles/products.scss';
import latex from '../resources/latex.png'
import msword from '../resources/word.jpeg'
import excel from '../resources/excel.png'
import { Banner, Placeholder } from 'exoclick-react';

function Products() {
  //const origin = 'http://localhost/prosup'
  var origin = 'https://prosup-backend.000webhostapp.com'
  const api = origin + '/api/products?sProduct='

  const cost = (p)=>{
    if(p === 'Free'){
      return(p)
    }
    else{
      return(`NGN ${p}`)
    }
  }

  const available = (a) => {
    if(a === 'Yes'){
      return('')
    }else{
      return(` | ${a}`)
    }
  }

  const btnActive = (ab) => {
    if(ab === 'Yes'){//6525
      return(false)
    }else{
      return(true)
    }
  }
  
  const [products, setProducts] = useState([])
  const [courses] = useState([
    {
      "Product": "MS Word Master Class",
      "Description": "Not just to type, but, to have look rightly, perfect, and compelling to read.. using Microsoft Office Word",
      "Available": "Upcoming",
      "Price": "3000",
      "Image": excel,
      "Preview": "previews/prosup-latex-project-template.pdf",
      "Duration": "5 Days",
      "Payment": "https://paystack.com/buy/ms-word-master-class-aqqhto"
    },
    {
      "Product": "MS Excel Master Class",
      "Description": "Learn to analyze, visualize and manipulate data and make meaning of results",
      "Available": "Upcoming",
      "Price": "4000",
      "Image": msword,
      "Preview": "previews/prosup-latex-project-template.pdf",
      "Duration": "15 Days",
      "Payment": "https://paystack.com/buy/ms-excel-master-class-ksskvr"
    },
    {
      "Product": "LaTex Intermidiate Class",
      "Description": "A step by step approach into mastering LaTex for creating amazing documents",
      "Available": "Upcoming",
      "Price": "5000",
      "Image": latex,
      "Preview": "previews/prosup-latex-project-template.pdf",
      "Duration": "8 Days",
      "Payment": "https://paystack.com/buy/latex-intermidiate-class-upgaph"
    }
  ])

  useEffect(()=>{
    fetch(api)
    .then(responce => responce.json())
    .then(data => {
      setProducts(data)
    });
  },[api])

  const [modalProduct, setmodalProduct] = useState('')
  const [imodalPayment, setimodalPayment] = useState('')
  const [modalOpen, setmodalOpen] = useState(false);
  const toggleModal = (name, link) => {
    setmodalProduct(name)
    setimodalPayment(link)
    setmodalOpen(!modalOpen);
  }

  return (
    <div className='App-Products'>
      <div className='cTitle'>Courses</div>
      <div className='row' id='courses'>
      {courses.map((item, i) => {
          return (
            <div className='prod col-sm-6 col-md-4 col-lg-3' key={i}>
              <Card>
                <CardImg className='cImg' top width="100%" src={item.Image} alt="Product Tumbnail" />
                <CardBody>
                  <CardTitle >
                  <div className='cHead'>{item.Product}</div> <br/>
                  <span className='text-danger pill'>{
                    cost(item.Price)
                  } {available(item.Available)}</span>
                  </CardTitle>
                  <CardSubtitle className='cText'>{item.Description}</CardSubtitle>
                  Duration : {item.Duration}
                  <div className='btns'>
                    <Button disabled={btnActive(item.Available)} color='danger' onClick={()=>toggleModal(item.Product, item.Payment)} outline> Buy </Button>
                    <Button disabled={btnActive(item.Available)} onClick={()=>toggleModal(`Previewing ${item.Product}`, `${origin}/api/catalogues/${item.Preview}`)} outline> Course Outline </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
              )
          })}
          
          <div className='prod col-sm-6 col-md-4 col-lg-3' >
            <script async="async" data-cfasync="false" src="//pl16597025.effectivecpmgate.com/cd6c42521e90f23c546a70ecd58fe426/invoke.js"></script>
            <div id="container-cd6c42521e90f23c546a70ecd58fe426"></div>
          </div>
      </div>

      <div className='adWeb' >
        <Placeholder width="728" height="90">
          <Banner className='center' zoneId="4423198" />
        </Placeholder>
      </div>
      <div className='adMobile' >
        <Placeholder className='adMobile' width="300" height="100">
          <Banner className='center' zoneId="4423200" />
        </Placeholder>
      </div>

      <div className='cTitle' id='templates'>Document Templates</div>
      <div className="row">
        {products.map((item, i) => {
          return (
            <div className='prod col-sm-6 col-md-4 col-lg-3' key={i}>
              <Card>
                <CardImg className='cImg' top width="100%" src={`${origin}/api/catalogues/${item.Image}`} alt="Product Tumbnail" />
                <CardBody>
                  <CardTitle >
                  <div className='cHead'>{item.Product}</div> <br/>
                  <span className='text-danger pill'>{ cost(item.Price) } { available(item.Available) }</span>
                  </CardTitle>
                  <CardSubtitle className='cText'>{item.Description}</CardSubtitle>
                  <div className='btns'>
                    <Button color='danger' disabled={btnActive(item.Available)} onClick={()=>toggleModal(item.Product, item.Payment)} outline> Buy </Button>
                    <Button disabled={btnActive(item.Available)} onClick={()=>toggleModal(`Previewing ${item.Product}`, `${origin}/api/catalogues/${item.Preview}`)} outline> Preview </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
              )
          })}
      </div>

      <Modal isOpen={modalOpen} backdrop={false} toggle={()=>toggleModal('','')}>
        <ModalHeader>{modalProduct}</ModalHeader>
        <ModalBody style={{minHeight:'70vh'}}>
            <iframe title='Buy Template' height='100%' width='100%' src={imodalPayment}></iframe>
        </ModalBody>
        <ModalFooter>
          <Button color='outline' onClick={()=>toggleModal('','')}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Products;

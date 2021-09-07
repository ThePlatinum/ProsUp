import { useState } from 'react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import '../styles/submit.scss';
import emailjs from 'emailjs-com'

function Submit() {

    //const origin = 'http://localhost/prosup'
    const origin = 'https://prosup-backend.000webhostapp.com'
    var api = origin + '/api/services/submission.php'

    const [selectFileName, setSelectFileName] = useState('No File Selected')
    const [disabled, setDisabled] = useState(true)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [otherName, setOtherName] = useState('')
    const [mail, setMail] = useState('')
    const [docType, setdocType] = useState('Document Type')
    const [note, setNote] = useState('')
    const [Loading, setLoading] = useState('Sending Please Wait...')
    const [modalOpen, setmodalOpen] = useState(false);
    const toggleModal = () => setmodalOpen(!modalOpen);
    const [hasErrorName, sethasErrorName] = useState(true)
    const [hasErrorMail, sethasErrorMail] = useState(true)
    const [hasErrorNote, sethasErrorNote] = useState(true)
    const [hasErrorFile, sethasErrorFile] = useState(true)
    const [fillAll, setFillAll] = useState('')

    const sendSubmission = ()=>{

        if(!hasErrorName && !hasErrorMail && !hasErrorNote && !hasErrorFile){
            toggleModal()
            setFillAll('')

            const User_ID = 'user_ngIsUTPsb5AEBQ3b49qFi'
            const Template_ID = 'template_39xr60v'

            emailjs.send("service_ozw18ud",Template_ID,{
                message: `${note}`,
                name: `${firstName}, ${lastName} ${otherName}`,
                email: `${mail}`,
                type: `${docType}`,
                file: `${selectFileName}`,
                }, User_ID)
            .then(result => {
                let status = result.status;
                if (status === 200){
                    setLoading('Your Submission has been successfull, \n We will contact you soon');
                    window.location.reload(false);
                }
                else{
                setLoading('Unable to complete your sumission, please try again.');
                }
            })
        }else{
            setFillAll('Please fill all Required (* - marked) Fields')
        }
        /* const submisson = new FormData
            ({'firstName':firstName,
            lastName:lastName,
            otherName:otherName,
            mail:mail,
            docType:docType,
            note:note,
            fupload:selectFile})

            submisson.append('fupload',setSelectFile)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: submisson
        };
        fetch(api, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data)); */
    }

  const [dropdownOpen, setdropdownOpen] = useState(false);
  const toggle = () => setdropdownOpen(!dropdownOpen);
  const [nameError, setnameError] = useState('')
  const [mailError, setmailError] = useState('')
  const [noteError, setnoteError] = useState('')

  return (
    <div className="App-Submit row">
        <div className='note col-md-5'>
            <div className='hP'>
                You got cool Projects you'd like to put up for the world to see, and it makes use glad. <br/>
                Anyone can make a submission, but, to establish good value, check that: <br/> <br/>
                <p>
                    Your Project is not copywritten/copied/a plagiarised content <br/>  <br/>
                    The document is well formatted and not a draft <br/> <br/>
                    You proof read the document... you don't want to author typos<br/> <br/>
                </p>
            </div>
        </div>
        <div className='forms col-md-7'>
            <Form action={api} method='POST' enctype="multipart/form-data" target='error'>
                <FormGroup className='card grp'>
                <Label>You</Label> <span class='errSpan'>{nameError}</span>
                    <Input type="text" name="firstName" placeholder="First Name *" onChange={(e)=>{
                        setFirstName(e.target.value);
                        if (e.target.value.length < 2){
                            setnameError('Enter a valid name')
                        }
                        else{
                            setnameError('')
                            sethasErrorName(false)
                        }
                        }} />
                    <div className='row'>
                        <div className='col-md-6'>
                            <Input name="lastName" type='text' placeholder="Last Name" onChange={(e)=>{
                                setLastName(e.target.value)}} />
                        </div>
                        <div className='col-md-6'>
                            <Input name="otherName" type="text" placeholder="Other Name" onChange={(e)=>{setOtherName(e.target.value)}} />
                        </div>
                    </div>
                    <span class='errSpan'>{mailError}</span>
                    <Input type="email" name="email" placeholder="Email Address *" onChange={(e)=>{
                        setMail(e.target.value)
                        var re = /\S+@\S+\.\S+/;
                        if (re.test(e.target.value)){
                            setmailError('')
                            sethasErrorMail(false)
                        }
                        else{
                            setmailError('Enter a valid mail')
                        }
                        }} />
                    <span>You'll get a mail notification after the review process</span>
                </FormGroup>
                <FormGroup className='card grp'>
                <Label>The Project</Label>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} name='type'>
                        <DropdownToggle color='' type='select' style={{width:'100%', borderWidth:'1px', textAlign:'left', borderColor:'#909090', marginBottom:'1vw', marginTop:'1vw' }}>
                            {docType}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={()=>{setdocType('Undergraduate Project')}}>Undergraduate Project</DropdownItem>
                            <DropdownItem onClick={()=>{setdocType('Graduate Project')}}>Graduate Project</DropdownItem>
                            <DropdownItem onClick={()=>{setdocType('Term Paper')}}>Term Paper</DropdownItem>
                            <DropdownItem onClick={()=>{setdocType('Independent Research')}}>Independent Research</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <span class='errSpan'>{noteError}</span>
                    <textarea name='note' placeholder="* Tell us a bit about the document..." onChange={(e)=>{
                        setNote(e.target.value)
                        if (e.target.value.length < 70){
                            setnoteError(e.target.value.length.toString()+'/70 (minimum character)')
                        }
                        else{
                            setnoteError('')
                            sethasErrorNote(false)
                        }
                        }} />
                        <Label></Label>
                    <span>Browse or drag file (pdf format only)</span>
                        <Label for='file-upload' className='upload'>
                            {selectFileName}
                            <input type='file' name='fupload' id='file-upload' accept="application/pdf" onChange={(e)=>{
                                setSelectFileName(e.target.value.replace('C:\\fakepath\\',''))
                                sethasErrorFile(false)}}/>
                        </Label>
                </FormGroup>
                <div className='card grp' >
                    <FormGroup check>
                        <Label check><input type='checkbox' onChange={(e)=>{ setDisabled(!e.target.checked) }} /> &nbsp; Accept Privacy Policy </Label>
                    </FormGroup>
                </div>
                <span class='errSpan'>{fillAll}</span>
                <Label> {' '} </Label>
                <Button className='sendBtn' id='submitBtn' type='submit' disabled={disabled} onClick={sendSubmission} > Submit </Button>

                <Modal isOpen={modalOpen} backdrop={false} toggle={toggleModal}>
                    <ModalHeader>Loading</ModalHeader>
                    <ModalBody>
                        {Loading}
                    </ModalBody>
                    <ModalFooter>
                        <Button color='outline' onClick={toggleModal}>Close</Button>
                    </ModalFooter>
                </Modal>
            </Form>
                <iframe title='Upload' name='error' hidden height='0px'>
                </iframe>
        </div>
    </div>
  );
}

export default Submit;

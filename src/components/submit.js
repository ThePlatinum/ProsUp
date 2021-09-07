import { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import '../styles/submit.scss';

function Submit() {


    const origin = 'http://localhost/prosup'
    //const origin = 'https://prosup-backend.000webhostapp.com'
    var api = origin + '/api/services'
    
    const [selectFileName, setSelectFileName] = useState('No File Selected')
    
    const [disabled, setDisabled] = useState(true)

/*     const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [otherName, setOtherName] = useState('')
    const [mail, setMail] = useState('')
    const [docType, setdocType] = useState('')
    const [note, setNote] = useState('')
    const sendSubmission = ()=>{
        let submisson = {
            firstName:firstName,
            lastName:lastName,
            otherName:otherName,
            mail:mail,
            docType:docType,
            note:note
        }

        console.log(submisson)
    } */

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
            <Form action={`${api}/submission.php`} method="POST" enctype="multipart/form-data" target="error">
                <FormGroup className='card grp'>
                <Label>You</Label>
                    <Input type="text" name="firstName" placeholder="First Name" /* onChange={(e)=>{setFirstName(e.target.value)}} */ />
                    <div className='row'>
                        <div className='col-md-6'>
                            <Input name="lastName" type='text' placeholder="Last Name" /* onChange={(e)=>{setLastName(e.target.value)}} */ />
                        </div>
                        <div className='col-md-6'>
                            <Input name="otherName" type="text" placeholder="Other Name (Optional)"/*  onChange={(e)=>{setOtherName(e.target.value)}} */ />
                        </div>
                    </div>
                    <Label>You'll get a mail notification after the review process</Label>
                    <Input type="email" name="email" placeholder="Email Address" /* onChange={(e)=>{setMail(e.target.value)}}  *//>
                </FormGroup>
                <FormGroup className='card grp'>
                <Label>The Project</Label>
                    <Input type='text' name='type' placeholder="Document Type" /* onChange={(e)=>{setdocType(e.target.value)}} */ />
                    <textarea name='note' placeholder="Tell us a bit about the document..." /* onChange={(e)=>{setNote(e.target.value)}} */ />
                    <Label>Browse or drag file (pdf format only)</Label>
                    <Label for='file-upload' className='upload'>
                        {selectFileName}
                        <input type='file' name='fupload' id='file-upload' accept="application/pdf" onChange={(e)=>{setSelectFileName(e.target.value.replace('C:\\fakepath\\',''))}}/>
                    </Label>
                </FormGroup>
                <iframe title='Submission' name='error'>
                </iframe>
                <div className='card grp' >
                    <FormGroup check>
                        <Label check><input type='checkbox' onChange={(e)=>{ setDisabled(!e.target.checked) }} /> &nbsp; Accept Privacy Policy </Label>
                    </FormGroup>
                </div>
                <Button className='sendBtn' id='submitBtn' disabled={disabled} type='submit' /* onClick={sendSubmission} */> Submit </Button>
            </Form>

            
        </div>
    </div>
  );
}

export default Submit;

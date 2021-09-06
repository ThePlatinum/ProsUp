import { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import '../styles/submit.scss';

function Submit() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [otherName, setOtherName] = useState('')
    const [mail, setMail] = useState('')
    const [docType, setdocType] = useState('')
    const [note, setNote] = useState('')
    const [selectFileName, setSelectFileName] = useState('No File Selected')

  return (
    <div className="App-Submit row">
        <div className='note col-md-5'>
            <p>
                You got cool Projects you'd like to put up for the world to see, and it makes use glad. <br/>
                Anyone can make a submission, but, to establish good value, check that: <br/> <br/>
                <p>
                    Your Project is not copywritten/copied/a plagiarised content <br/>  <br/>
                    The document is well formatted and not a draft <br/> <br/>
                    You proof read the document... you don't want to author typos <br/> <br/>
                </p>
            </p>
        </div>
        <div className='forms col-md-7'>
            <Form>
                <FormGroup className='card grp'>
                <Label>You</Label>
                    <Input type="text" id="firstName" placeholder="First Name" onChange={(e)=>{setFirstName(e.target.value)}} />
                    <div className='row'>
                        <div className='col-md-6'>
                            <Input type='text' placeholder="Last Name" onChange={(e)=>{setLastName(e.target.value)}} />
                        </div>
                        <div className='col-md-6'>
                            <Input type="text" placeholder="Other Name (Optional)" onChange={(e)=>{setOtherName(e.target.value)}} />
                        </div>
                    </div>
                    <Input type="email" name="email" placeholder="Email Address" onChange={(e)=>{setMail(e.target.value)}} />
                </FormGroup>
                <FormGroup className='card grp'>
                <Label>The Project</Label>
                    <Input type='text' placeholder="Document Type" onChange={(e)=>{setdocType(e.target.value)}} />
                    <textarea placeholder="Tell us a bit about the document..." onChange={(e)=>{setNote(e.target.value)}} />
                    <Label>Browse or drag file (pdf format only)</Label>
                    <Label for='file-upload' className='upload'>
                        {selectFileName}
                        <input type='file' id='btn file-upload' onChange={(e)=>{setSelectFileName(e.target.value.replace('C:\\fakepath\\',''))}}/>
                    </Label>
                </FormGroup>
                <div className='card grp' >
                    <FormGroup check>
                        <Label check><input type='checkbox'/> &nbsp; Get a mail notification upon review </Label>
                    </FormGroup>
                </div>
                <Button className='sendBtn'> Submit </Button>
            </Form>
        </div>
    </div>
  );
}

export default Submit;

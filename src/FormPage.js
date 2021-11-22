import react, { useState } from 'react'
import logo from './logo.svg';
import './FormPage.css';
import 'antd/dist/antd.css';
import {
    Form,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Rate,
    Checkbox,
    Row,
    Col,
    Typography,
    Modal
} from 'antd';
import QuestionForm from './Components/QuestionForm';

import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const { Title } = Typography; 

const { Option } = Select;

const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }

    return e && e.fileList;
};

const FormPage = () => {

    const [formView, changeFormView] = useState(true);

    return (
        <div>
            {/* <img src={require('./Airpnp_Logo.png')}
                 height={100} width={150} /> */}
            {/* <h1 style={{"font-size": 50, "visibility": formView? "visible":"hidden"}}>hi</h1> */}
            {/* <div className='formContainer' style={{"visibility": formView? "visible":"hidden"}}> */}
            <div className='formContainer'>
                <Title className='title' level={3} onClick={()=>changeFormView(!formView)} level={3}>please fill out this form 📝</Title>
                <QuestionForm />
                <Title style={{paddingLeft: 370}} level={3} id={"output"}> </Title>
                    <br></br><br></br><br></br><br></br><br></br>
            </div>
            
        </div>
    );
};


export default FormPage;
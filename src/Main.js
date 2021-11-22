import react, { useState } from 'react'
import logo from './logo.svg';
import './FormPage.css';
import 'antd/dist/antd.css';
import FormPage from './FormPage';
import WelcomePage from './Components/WelcomePage'

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
    Typography
} from 'antd';
import QuestionForm from './Components/QuestionForm';

import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const { Title } = Typography; 

const { Option } = Select;

const Main = () =>{

    const [formView, changeFormView] = useState(false);
    
    console.log("hi")
    console.log(formView)

    return(

        <div>
            <div style={formView? {"display":"none"}: {}}>
                <WelcomePage changeFormView={changeFormView} formView={formView}/>
            </div>
            <div style={(!formView)? {"display":"none"}: {}}>
                <FormPage />
            </div>
        </div>

    );

}

export default Main
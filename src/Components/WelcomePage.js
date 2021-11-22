import react, { useState } from 'react'
import 'antd/dist/antd.css';
import './WelcomePage.css'
import Airpnp_Logo from './Airpnp_Logo.png';
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
    Space,
} from 'antd';

import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const { Text, Link, Title } = Typography; 

const { Option } = Select;


const WelcomePage = (props) => {
    return (
        <div className='WelcomePageContainer'>
            <img src={Airpnp_Logo} className='logo' />
            {/* <Title level={5} italic strong='false'>one-stop solution to optimally price your airbnb listing 🏠</Title> */}
            {/* <Space direction="horizontal">
                <Text italic style={{'font-size': '16px'}}>one-stop solution to optimally price your airbnb listing</Text>
                <Text style={{'font-size': '16px'}}>🏠</Text>
            </Space> */}
            <div className='WelcomeContent'>
                <Space direction="vertical" align='center' size={'large'} wrap>
                    <Text style={{'font-size': '16px'}}>Welcoming amazing guests from all over the world 🌎 to your property is fun and exciting.</Text>
                    <Text style={{'font-size': '16px'}}>And putting your property on Airbnb allows you to meet new and cool people while having a passive income source 💰.</Text>
                    <Text style={{'font-size': '16px'}}>However, pricing your listing correctly might be difficult 🤔. You may have questions like…</Text>
                    {/* <br/> */}
                    <div className='questions' >
                        <Space direction="vertical" align='center' size={'small'} wrap>
                            <Text italic keyboard>How much should I charge for 3 bedroom and 2 bathroom?</Text>
                            <Text italic keyboard>My listing is in a great location, should I charge more?</Text>
                            <Text italic keyboard>How much extra should I charge for my great amenities?</Text>
                            {/* <Text italic>Would people pay more if I am a verified host with high ratings?</Text> */}
                        </Space>
                    </div>
                    {/* <br/> */}
                    <Text style={{'font-size': '16px'}}>...Therefore we made AirPnP to make this process easier </Text>
                    {/* <Title level={3} style={{'margin-top': '1%'}} keyboard>AirPnP is here to make that process easier</Title> */}
                    {/* <Title level={3} style={{'margin-top': '1%'}} keyboard>We are providing a machine learning algorithm that helps you to optimally price your listing</Title> */}
                    <Text style={{'font-size': '16px'}}>AirPnP is a machine learning algorithm that helps you to optimally price your listing after considering a multitude of factors such as location, amenities, beds, rooms, competitors, ratings and more</Text>

                    {/* <Text style={{'font-size': '16px'}}>We are providing a machine learning algorithm that helps you to optimally price your listing</Text> */}
                    <Button type="primary" style={{'margin-top': '7%', 'margin-bottom': '30%'}} onClick={() => props.changeFormView(!props.formView)}>Click here to start</Button>
                </Space>
                <br/>
            </div>
            {/* <h1>hi</h1> */}
        </div>
    );
}

export default WelcomePage
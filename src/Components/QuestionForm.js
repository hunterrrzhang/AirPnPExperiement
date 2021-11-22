import 'antd/dist/antd.css';
import './QuestionForm.css';
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
    Modal,
} from 'antd';
import react, { useState } from 'react'

const { Title } = Typography; 

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};


const QuestionForm = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [result, setResult] = useState(0);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };


    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        fetch('/api/get_price', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'mode': 'no-cors'
            },
            body: JSON.stringify(values),
        }).then(response => response.json()).then(
            data => {
                console.log(data);
                setResult(data.toFixed(2))
                // document.getElementById("output").innerText = "Estimated Price: $"+data;
                showModal()
            }
        )
    };

    return (
    
    <div className='wrap-label'>
    <Modal title="Result" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <h3>Thank you!</h3>
        <p>Base on our model, we recommend pricing your listing at ${result} per night</p>
      </Modal>
    <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
            'input-number': 3,
            'checkbox-group': [],
            host_identity_verified: false,
            host_is_superhost: false,
            availability_90: false
        }}
    >
        <Form.Item label="" wrapperCol={{
            span: 12,
            offset: 10,
        }}>
        </Form.Item>

        <Form.Item
            name="Location" label="Location" hasFeedback
            rules={[{   required: true,
                        message: 'Please select your Location!',},]}
        >
            <Select placeholder="Please select a location">
                {/* <Option value="Chicago">Chicago</Option> */}
                <Option value="New York">New York</Option>
                <Option value="Los Angeles">Los Angeles</Option>
            </Select>
        </Form.Item>

        <Form.Item
            name="property_type_" label="Property Type" hasFeedback
            rules={[{   required: true,
                        message: 'Please select the property type of your listing',},]}
        >
            <Select placeholder="Please choose the apartment type of your listing">
                <Option value="property_type_Apartment">Apartment</Option>
                <Option value="property_type_Hotel">Hotel</Option>
                <Option value="property_type_House">House</Option>
                <Option value="property_type_Other">Other</Option>
            </Select>
        </Form.Item>

        <Form.Item
            name="room_type_" label="Room type" hasFeedback
            rules={[{   required: true,
                message: 'Please select the property type of your listing',},]}
        >
            <Select placeholder="Please select the room type of your listing">
                <Option value="room_type_Entire home/apt">Entire home/apartment</Option>
                <Option value="room_type_Hotel room">Hotel room</Option>
                <Option value="room_type_Private room">Private room</Option>
                <Option value="room_type_Shared room">Shared room</Option>
            </Select>
        </Form.Item>

        <Form.Item name="host_identity_verified" label="Is your identify verified on Airbnb?" valuePropName="checked" rules={[{required: true},]}>
            <Switch/>
        </Form.Item>

        <Form.Item name="host_is_superhost" label="Are you a superhost?" valuePropName="checked" rules={[{required: true},]}>
            <Switch />
        </Form.Item>

        <Form.Item name="availability_90" label="Is this listing available in the next 90 days?" valuePropName="checked" rules={[{required: true},]}>
            <Switch />
        </Form.Item>

        <Form.Item label="How many total listing do you have on Airbnb?">
            <Form.Item name="host_listings_count" noStyle  rules={[{required: true},]}>
                <InputNumber min={1} max={50} />
            </Form.Item>
            <span className="ant-form-text"> listing(s)</span>
        </Form.Item>

        <Form.Item label="How many people does it accomodates?">
            <Form.Item name="accommodates" noStyle  rules={[{required: true},]}>
                <InputNumber min={1} max={50} />
            </Form.Item>
            <span className="ant-form-text"> listing(s)</span>
        </Form.Item>

        <Form.Item label="Number of bedroom">
                <Form.Item name="bedrooms" noStyle  rules={[{required: true},]}>
                <InputNumber min={1} max={50} />
            </Form.Item>
            <span className="ant-form-text"> listing(s)</span>
        </Form.Item>

        <Form.Item label="Number of beds">
            <Form.Item name="beds" noStyle  rules={[{required: true},]}>
                <InputNumber min={1} max={50} />
            </Form.Item>
            <span className="ant-form-text"> listing(s)</span>
        </Form.Item>

        <Form.Item label="Minimum nights">
            <Form.Item name="minimum_nights" noStyle  rules={[{required: true},]}>
                <InputNumber min={1} max={50} />
            </Form.Item>
            <span className="ant-form-text"> listing(s)</span>
        </Form.Item>

        <Form.Item label="Maximum nights">
            <Form.Item name="maximum_nights" noStyle  rules={[{required: true},]}>
                <InputNumber min={1} max={50} />
            </Form.Item>
            <span className="ant-form-text"> listing(s)</span>
        </Form.Item>

        <Form.Item label="Number of reviews you have">
            <Form.Item name="number_of_reviews" noStyle  rules={[{required: true},]}>
                <InputNumber min={1} max={50} />
            </Form.Item>
            <span className="ant-form-text"> listing(s)</span>
        </Form.Item>

        <Form.Item name="host_response_rate_" label="What's your response rate?" rules={[{required: true},]}>
            <Slider
                marks={{
                    0: '0%',
                    20: '20%',
                    40: '40%',
                    60: '60%',
                    80: '80%',
                    100: '100%',
                }}
            />
        </Form.Item>

        <Form.Item name="review_scores_rating" label="What's your listing's overall rating score?" rules={[{required: true},]}>
            <Slider
                marks={{
                    0: '0',
                    20: '20',
                    40: '40',
                    60: '60',
                    80: '80',
                    100: '100',
                }}
            />
        </Form.Item>

        <Form.Item name="review_accuracy_rating" label="What's your listing's accuracy rating score?" rules={[{required: true},]}>
            <Slider min={0} max={10}
                marks={{
                    0: '0',
                    2: '2',
                    4: '4',
                    6: '6',
                    8: '8',
                    10: '10',
                }}
            />
        </Form.Item>

        <Form.Item name="review_cleanliness_rating" label="What's your listing's cleanliness rating score?" rules={[{required: true},]}>
            <Slider min={0} max={10}
                marks={{
                    0: '0',
                    2: '2',
                    4: '4',
                    6: '6',
                    8: '8',
                    10: '10',
                }}
            />
        </Form.Item>

        <Form.Item name="review_checkin_rating" label="What's your listing's checkin rating score?" rules={[{required: true},]}>
            <Slider min={0} max={10}
                marks={{
                    0: '0',
                    2: '2',
                    4: '4',
                    6: '6',
                    8: '8',
                    10: '10',
                }}
            />
        </Form.Item>

        <Form.Item name="review_communication_rating" label="What's your listing's communication rating score?" rules={[{required: true},]}>
            <Slider min={0} max={10}
                marks={{
                    0: '0',
                    2: '2',
                    4: '4',
                    6: '6',
                    8: '8',
                    10: '10',
                }}
            />
        </Form.Item>

        <Form.Item name="review_location_rating" label="What's your listing's location rating score?" rules={[{required: true},]}>
            <Slider min={0} max={10}
                marks={{
                    0: '0',
                    2: '2',
                    4: '4',
                    6: '6',
                    8: '8',
                    10: '10',
                }}
            />
        </Form.Item>

        <Form.Item name="review_value_rating" label="What's your listing's value rating score?" rules={[{required: true},]}>
            <Slider min={0} max={10}
                marks={{
                    0: '0',
                    2: '2',
                    4: '4',
                    6: '6',
                    8: '8',
                    10: '10',
                }}
            />
        </Form.Item>

        <Form.Item name="host_response_time_" label="How quickly do you usually respond to your client?" rules={[{required: true},]}>
            <Radio.Group>
                <Radio value="host_response_time_within an hour">within an hour</Radio>
                <Radio value="host_response_time_within a few hours">within a few hours</Radio>
                <Radio value="host_response_time_within a day">within a day</Radio>
                <Radio value="host_response_time_2-3 years">2-3 years</Radio>
                <Radio value="host_response_time_a few days or more">a few days or more</Radio>
            </Radio.Group>
        </Form.Item>

        <Form.Item name="time_since_first_review_" label="Time since its first customer review?" rules={[{required: true},]}>
            <Radio.Group>
                <Radio value="time_since_first_review_0-6 months">0-6 months</Radio>
                <Radio value="time_since_first_review_6-12 months">6-12 months</Radio>
                <Radio value="time_since_first_review_1-2 years">1-2 years</Radio>
                <Radio value="time_since_first_review_2-3 years">2-3 years</Radio>
                <Radio value="time_since_first_review_4+ years">4+ years</Radio>
            </Radio.Group>
        </Form.Item>

        <Form.Item name="time_since_last_review_" label="Time since its last customer review?" rules={[{required: true},]}>
            <Radio.Group>
                <Radio value="time_since_last_review_0-2 weeks">0-2 weeks</Radio>
                <Radio value="time_since_last_review_2-8 weeks">2-8 weeks</Radio>
                <Radio value="time_since_last_review_2-6 months">2-6 months</Radio>
                <Radio value="time_since_last_review_6-12 months">6-12 months</Radio>
                <Radio value="time_since_last_review_1+ year">1+ year</Radio>
            </Radio.Group>
        </Form.Item>

        <Form.Item name="Amenities" label="Amenities" rules={[{required: true},]}>
            <Checkbox.Group>
                <Row>
                    <Col span={8}>
                        <Checkbox
                            value="bbq"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            bbq
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox
                            value="balcony"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            balcony
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox
                            value="bed_linen"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            bed linen
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox
                            value="breakfast"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            breakfast
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox
                            value="tv"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            tv
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox
                            value="coffee_machine"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            coffee machine
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox
                            value="cooking_basics"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            cooking basics
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox
                            value="white_goods"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            white goods
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox
                            value="elevator"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            elevator
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox
                            value="gym"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            gym
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox
                            value="parking"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            parking
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox
                            value="outdoor-space"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            outdoor-space
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox
                            value="hot_tub_sauna_or_pool"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            Hot tub/pool
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox
                            value="internet"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            internet
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox
                            value="long_term_stays"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            long term stays
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox
                            value="private_entrance"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            private entrance
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox
                            value="air_conditioning_1.0"
                            style={{
                                lineHeight: '32px',
                            }}
                        >
                            air conditioning
                        </Checkbox>
                    </Col>
                </Row>
            </Checkbox.Group>
        </Form.Item>
        <Form.Item
            wrapperCol={{
                span: 12,
                offset: 6,
            }}
        >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
    </div>
    );
}

export default QuestionForm;
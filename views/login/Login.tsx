import React from 'react'
import Logins from './login.module.scss';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import usecontext from '../../context/usecontext';
import { useObserver } from 'mobx-react-lite'
export default function Login() {
        let { user } = usecontext()
        let history = useHistory();
        const onFinish = async (values: any) => {
            let result = await user.login(values.username,values.password)
            console.log(result.data)
            if (result){
                let qs:{[key:string]:string} = {};
                console.log(history.location.search)
                history.location.search.slice(1).split('&').forEach(item=>{
                
                    let arrs = item.split('=');
                    qs[arrs[0]] = arrs[1];
                });
                history.replace(qs.redirect? qs.redirect: '/home');
                console.log(history)
            }
        }
   
    return useObserver(()=>
        <div className={Logins.login}>
            <div className={Logins.tab}>
                <Form
                    name="normal_login"
                    className={Logins.login_form}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        validateTrigger='onBlur'
                        rules={[{ required: true, pattern: /^[a-z]{4,10}$/,  message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="输入用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        validateTrigger='onBlur'
                        rules={[{ required: true, pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[#@*!&.]).*$/, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="输入密码"
                        />
                    </Form.Item>
                    <Form.Item>
                        <div className={Logins.ant_form_item_control_input_content}>

                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住密码</Checkbox>
                            </Form.Item>

                            <a className={Logins.login_form_forgot} href="/">
                                忘记密码
                            </a>
                        </div>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={Logins.ant_btn_primary}>
                            登陆
                            </Button>

                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
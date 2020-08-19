import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { NavLink, useHistory } from "react-router-dom"
import { Layout, Menu, Breadcrumb } from 'antd';
import RouterViews from '../../router/router-views';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import useStore from '../../context/usecontext'
import { useObserver } from 'mobx-react-lite'
import { Iroute } from '../../utils/interface';
import Nav from '../../components/nav/Nav'

const { SubMenu } = Menu;
const { Content, Sider } = Layout;
interface Iprops {
    routes: Iroute[]
}
export default function Home(props: Iprops) {
    let { mirChen } = useStore()
    let history = useHistory()
    useEffect(() => {
        mirChen.useInfo()

    }, [mirChen])

    return useObserver(() =>
        <Layout>
            <header>
                <Nav></Nav>
            </header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        theme='dark'
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="试题管理">
                            <Menu.Item key="1">
                                <NavLink to="/home/testQuestions/TQ_add">添加试题</NavLink>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <NavLink to="/home/testQuestions/TQ_classify">试题分类</NavLink>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <NavLink to="/home/testQuestions/TQ_look">查看试题</NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="用户管理">
                            <Menu.Item key="4">
                                <NavLink to="/home/user/User_add">添加用户</NavLink>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <NavLink to="/home/user/User_show">用户管理</NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="考试管理">
                            <Menu.Item key="6">
                                <NavLink to="/home/exam/Exam_add">添加考试</NavLink>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <NavLink to="/home/exam/Exam_list">试卷列表</NavLink>
                            </Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub4" icon={<NotificationOutlined />} title="班级管理">
                            <Menu.Item key="8">
                                <NavLink to="/home/classAndGrade/Class_Grade">班级管理</NavLink>
                            </Menu.Item>
                            <Menu.Item key="9">
                                <NavLink to="/home/classAndGrade/Room_Grade">教室管理</NavLink>
                            </Menu.Item>
                            <Menu.Item key="10">
                                <NavLink to="/home/classAndGrade/Student_Grade">学生管理</NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" icon={<NotificationOutlined />} title="阅卷管理">
                            <Menu.Item key="11">
                                <NavLink to="/home/roll/Roll">待批班级</NavLink>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>


                    <Breadcrumb style={{ margin: '10px 0', fontSize: '18px', padding:' 20px 0px'
                    }}>
                        {
                            console.log(history)
                        }
                    <Breadcrumb.Item >{history.location.pathname}</Breadcrumb.Item>
                    
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <RouterViews routes={props.routes}></RouterViews>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )


}

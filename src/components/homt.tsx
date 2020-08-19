import React from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu,} from 'antd';
import {NavLink} from 'react-router-dom'
import RouterViews from '../router/router-views';
import {
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default function homt(props:any) {
    const data = {
        collapsed: false,
      }
      const onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
      
      };
    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={data.collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
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
          <SubMenu key="sub2" icon={<UserOutlined />} title="用户管理">
              <Menu.Item key="4">
              <NavLink to="/home/user/User_add">添加用户</NavLink>
                </Menu.Item>
              <Menu.Item key="5">
              <NavLink to="/home/user/User_show">用户管理</NavLink>
                </Menu.Item>
            </SubMenu>
          <SubMenu key="sub3" icon={<UserOutlined />} title="考试管理">
              <Menu.Item key="6">
              <NavLink to="/home/exam/Exam_add">添加考试</NavLink>
                </Menu.Item>
              <Menu.Item key="7">
              <NavLink to="/home/exam/Exam_list">试卷列表</NavLink>
                </Menu.Item>
            </SubMenu>
         
            <SubMenu key="sub4" icon={<UserOutlined />} title="班级管理">
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
            <SubMenu key="sub5" icon={<TeamOutlined />} title="阅卷管理">
              <Menu.Item key="11">
              <NavLink to="/home/roll/Roll">待批班级</NavLink>
                </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <RouterViews routes = {props}></RouterViews>
          <Footer style={{ textAlign: 'center' }}></Footer>
        </Layout>
      </Layout>
        </div>
    )
}

import Login from '../views/login/Login'; // 登陆接口
import Home from '../views/home/home';  //  主页接口
// 试题管理
import TQ_add from '../views/home/testQuestions/TQ_add'; //  添加试题
import TQ_classify from '../views/home/testQuestions/TQ_classify' // 试题分类
import TQ_look from '../views/home/testQuestions/TQ_look' // 查看试题

// 用户管理
import User_add from '../views/home/user/User_add' // 添加用户
import User_show from '../views/home/user/User_show' // 用户管理

// 考试管理
import Exam_add from '../views/home/exam/Exam_add'; // 添加考试
import Exam_list from '../views/home/exam/Exam_list'; // 试卷列表

// 班级管理
import Class_Grade from '../views/home/classAndGrade/Class_Grade'; // 班级管理
import Room_Grade from '../views/home/classAndGrade/Room_Grade'; // 教室管理
import Student_Grade from '../views/home/classAndGrade/Student_Grade'; // 学生管理

// 阅卷管理 
import Roll from '../views/home/roll/Roll'; // 待批班级

import { Iroute } from '../utils/interface'; // 数据规范
const routes : Iroute[] = [
    {
        path:'/login',
        component:Login
    },
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/testQuestions/TQ_add',
                component:TQ_add
            },
            {
                path:'/home/testQuestions/TQ_classify',
                component:TQ_classify
            },
            {
                path:'/home/testQuestions/TQ_look',
                component:TQ_look
            },
            {
                path:'/home/user/User_add',
                component:User_add
            },
            {
                path:'/home/user/User_show',
                component:User_show
            },
            {
                path:'/home/exam/Exam_add',
                component:Exam_add
            },
            {
                path:'/home/exam/Exam_list',
                component:Exam_list
            },
            {
                path:'/home/classAndGrade/Class_Grade',
                component:Class_Grade
            },
            {
                path:'/home/uclassAndGrade/Room_Grade',
                component:Room_Grade
            },
            {
                path:'/home/uclassAndGrade/Student_Grade',
                component:Student_Grade
            },
            {
                path:'home/roll/Roll',
                component:Roll
            },
            //  重定向
            {
                path:'/home',
                to: '/home/test'
            }
        ]
    },
            //  重定向
    {
        path:'/',
        to:'/home'
    }
]

export default routes;
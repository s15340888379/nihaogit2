import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Select, Modal } from 'antd';
import style from './toAdd.module.scss';
import Editor from 'for-editor' //  Markdow编辑器插件
import { useObserver } from 'mobx-react-lite'
import useStore from '../../../context/usecontext'
let { Option } = Select
function TQ_add() {
    let { mirChen } = useStore()
    let [visible, setvisible] = useState<boolean>(false)
    useEffect(() => {
        mirChen.getQuestionsTypeAction()
        mirChen.getsubjectAction()
        mirChen.getexamTypeAction()
    }, [])
    const onFinish = (values: any) => { //  添加试题
        mirChen.Question(values)
    };
    const showModal = () => {
        setvisible(true)
    }
    const handleOk = (e: any) => {
        setvisible(false)
    }
    const handleCancel = (e: any) => {
        setvisible(false)
    }
    return useObserver(() =>
        <div className={style.addquest}>
            <Form
                className={style.form}
                onFinish={onFinish}
            >
                <h3>题目信息</h3>
                <p>题干</p>
                <Form.Item
                    label=""
                    name="questions_stem"
                    rules={[{ required: true, message: 'Please input your text!' }]}
                >
                    <Input placeholder='请输入题目，不超过20字' style={{ width: 400 }} />
                </Form.Item>
                <p>题目主题</p>
                <Form.Item
                    name="title"
                    rules={[{ required: true, message: '请输入内容' }]}
                >
                    <Editor placeholder='请输入内容...' style={{ height: 200 }} />
                </Form.Item>
                <p>请选择周考类型：</p>
                <Form.Item
                    name="exam_id"
                    rules={[{ required: true }]}
                >
                    <Select style={{ width: 200 }} placeholder='周考一'>
                        {
                            mirChen.getexamType.map((item: any) => {
                                return <Option
                                    key={item.exam_id}
                                    value={item.exam_id}>
                                    {item.exam_name}
                                </Option>

                            })
                        }


                    </Select>
                </Form.Item>

                <p>请选择课程类型：</p>
                <Form.Item
                    name="subject_id"
                    rules={[{ required: true }]}
                >
                    <Select style={{ width: 200 }} placeholder='JavaScript上'>
                        {
                            mirChen.getsubject.map((item: any) => {
                                return <Option

                                    key={item.subject_id}
                                    value={item.subject_id}>
                                    {item.subject_text}
                                </Option>
                            })
                        }
                    </Select>
                </Form.Item>

                <p>请选择题目类型：</p>
                <Form.Item
                    name="questions_type_id"
                    rules={[{ required: true }]}
                >
                    <Select style={{ width: 200 }} placeholder='简答题'>
                        {
                            mirChen.getQuestionsType.map((item: any) => {
                                return <Option
                                    key={item.questions_type_id}
                                    value={item.questions_type_id}>
                                    {item.questions_type_text}
                                </Option>
                            })
                        }
                    </Select>
                </Form.Item>

                <p>答案信息</p>
                <Form.Item
                    name="questions_answer"
                    rules={[{ required: true, message: '请输入内容' }]}
                >
                    <Editor placeholder='请输入内容...' style={{ height: 200 }} />
                </Form.Item>


                <Button type="primary" htmlType="submit" onClick={showModal}>
                    提交
                       
                </Button>
                <Modal
                        title='？'
                        visible={visible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        okText='确定'
                        cancelText='取消'
                        className={style.btns}
                >
                        <b>你确定要添加这道试题吗</b>
                        <p>真的要添加吗</p>
                </Modal>
                   
                  
                
            </Form>
        </div>
    )
}
export default TQ_add
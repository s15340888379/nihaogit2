import request from '../../utils/requre';
import { IAddQuestion } from '../../utils/interface'
//  添加试题接口
export let questions = (params: IAddQuestion) => { // 添加
    return request.post('/exam/questions', {...params})
}
//  获取所有的试题类型
export let QuestionsType =() => {
    return request.get('/exam/getQuestionsType')
}
//  获取所有的课程
export let subject = () => {
    return request.get('/exam/subject')
}

//  获取所有的考试类型
export let examType =() => {
    return request.get('/exam/examType')
}
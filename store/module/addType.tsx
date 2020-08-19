import { action, observable } from 'mobx';
import { questions, useInfo, QuestionsType, subject, examType } from '../../service/index';
import { IAddQuestion } from '../../utils/interface'
class Grades{
    @observable
    userInfo: any= {}

    @action 
    async useInfo(){ //  
     let result = await useInfo()

     this.userInfo = result.data.data;
    }
    //  获取所有的试题类型
    @observable
    getQuestionsType= []

    @action 
    async getQuestionsTypeAction() {
      let result = await QuestionsType()
      if(result.data.code===1){
        this.getQuestionsType = result.data.data
      }
    }
    //  获取所有的课程
    @observable
    getsubject: any= []

    @action
    async getsubjectAction() {
      let result = await subject()
      if(result.data.code===1){
        this.getsubject = result.data.data
      }
    }

    //  获取所有的考试类型
    @observable
    getexamType: any = []

    @action
    async getexamTypeAction() {
      let result = await examType()
      if(result.data.code===1){
        this.getexamType = result.data.data
      }
    }


    //  添加试题接口
    @observable
    questions: IAddQuestion = {
      questions_type_id:'',
      questions_stem:'',
      subject_id:'',
      exam_id:'',
      user_id:'',
      questions_answer:"",
      title:''
    }

    @action
    async Question(params :IAddQuestion) {
     let result = await questions({...params,user_id:this.userInfo.user_id})
     console.log(result,'questions...')
    }

 
}
export default Grades

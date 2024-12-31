import React,{FC} from "react";
import QuestionCard from './components/QuestionCard'
const List1:FC = ()=>{
    const questionList = [
        {id:'q1', title:'问卷1', isPublished:false},
        {id:'q2', title:'问卷2', isPublished:true},
        {id:'q3', title:'问卷3', isPublished:true},
        {id:'q4', title:'问卷4', isPublished:false},
        {id:'q5', title:'问卷5', isPublished:false},
        {id:'q6', title:'问卷6', isPublished:true},
    ]
    console.log('questionList',questionList)
    function edit(id:string){
        console.log('编辑',id)
        const index = questionList.findIndex(item=>item.id === id)
        questionList[index].isPublished = true
    }
    return(
        <>
         <h1>问卷列表页</h1>
        <div>
            {questionList.map(item=>{
                const {id,title,isPublished} = item
                return <QuestionCard key={id} id={id} title={title} isPublished={isPublished}></QuestionCard>
                // return <QuestionCard key={id} {...item}></QuestionCard>
            })}
        </div>
        </>
    )
}
export default List1
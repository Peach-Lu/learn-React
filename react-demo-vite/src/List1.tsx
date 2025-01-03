import React,{FC, useState, useEffect,useRef} from "react";
import {produce} from 'immer'
import QuestionCard from './components/QuestionCard'
const List1:FC = ()=>{
    useEffect(()=>{
        console.log('useEffect')
        console.log('加载 ajax 网络请求')
        return ()=>{
            console.log('销毁')
        }
    },[])
    const [count,setCount] = useState(0)
    const [questionList,setQuestionList] = useState([
        {id:'q1', title:'问卷1', isPublished:false},
        {id:'q2', title:'问卷2', isPublished:true},
        {id:'q3', title:'问卷3', isPublished:true},
        {id:'q4', title:'问卷4', isPublished:false},
        {id:'q5', title:'问卷5', isPublished:false},
        {id:'q6', title:'问卷6', isPublished:true},
    ])
    
    // useEffect(()=>{
    //     console.log('useEffect22222222222222222222222222222222')
    //     return ()=>{
    //         console.log('销毁2')
    //     }
    // },[questionList,count])
    
    function add(){
        console.log('add')
        // setQuestionList(questionList.concat({id:'q'+(questionList.length + 1), title:'问卷'+(questionList.length +1), isPublished:false}))
        setQuestionList(produce(draft=>{
            console.log('draft',draft)
            draft.push({id:'q'+(questionList.length + 1), title:'问卷'+(questionList.length +1), isPublished:false})
        }))
    }
    function edit(id:string){
        console.log('编辑',id)
        const index = questionList.findIndex(item=>item.id === id)
        questionList[index].isPublished = true
        setQuestionList([...questionList])
    }
    function deleteQuestion(id:string){
        console.log(id)
        const index = questionList.findIndex(item=>item.id === id)
        // questionList.splice(index,1)
        // setQuestionList([...questionList])
        // 不可变数据
    //    const newData =  questionList.filter(item=>item.id !== id) // 排除改id
    //    setQuestionList(newData)
    //    方式二
        // setQuestionList(questionList.filter(item=>item.id !== id))
        // immer
        setQuestionList(produce(draft=>{
        draft.splice(index,1)
        }))
    }
    function publishQuestion(id:string){
        console.log('发布',id)
        // const index = questionList.findIndex(item=>item.id === id)
        // questionList[index].isPublished = true
        // setQuestionList([...questionList])

        // setQuestionList(questionList.map(item=>{
        //     if(item.id === id){
        //         return {...item,isPublished:!item.isPublished}
        //     }
        //     return item
        // })) 

        setQuestionList(produce(draft=>{
            const index = draft.findIndex(item=>item.id === id)
            if(index >= 0){
                console.log('index',index)
                draft[index].isPublished = !draft[index].isPublished
            }
        }))
    }
    function addCount(){
        console.log('addCount')
        setCount(count+1)
    }
    return(
        <>
         <h1>问卷列表页</h1>
         <button onClick={()=>console.log('questionList',questionList)}>按钮</button>
        <button onClick={add}>新增问卷</button>
        <button onClick={addCount}>{count}</button>
        <div>
            {questionList.map(item=>{
                const {id,title,isPublished} = item
                return <QuestionCard key={id} id={id} title={title} isPublished={isPublished} deleteQuestion={deleteQuestion} publishQuestion={publishQuestion}></QuestionCard>
                // return <QuestionCard key={id} {...item}></QuestionCard>
            })}
        </div>
        </>
    )
}
export default List1
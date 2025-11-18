import { FC } from "react"
// import { useParams } from "react-router-dom";
// import { getQuestionService } from "@/request/question";
// import type { ResDataType } from "@/request/http";
import useLoadingQuestionData from "@/hook/useLoadingQuestionData"
import styles from './index.module.scss'
const Edit: FC = () => {

  const { loading, data } = useLoadingQuestionData()
  return (
    <>
     <div className={styles.container}>
      <div className="bg-[#fff] h-[40px]"> Header</div>
      {/* conent */}
      <div className={styles['content-wrapper']}>
     <div className={styles['content']}>
         <div className={styles['left']}>left</div>
        <div className={`${styles['main']} relative`}>
          <div className={`${styles['canvas-wrapper']}`}>
            <div className="h-[900px]">滚动</div>
          </div>
        </div>
        <div className={styles['right']}>right</div>
     </div>
      </div>
     </div>
    </>
  )
}
export default Edit

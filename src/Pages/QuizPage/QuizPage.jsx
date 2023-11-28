import React, { useCallback, useEffect, useId, useState } from 'react'
import grayLogo from "../../assets/image/grayLogo.png"
import BasicHeader from '../../components/BasicHeader/BasicHeader'
import BasicFooter from '../../components/BasicFooter/BasicFooter'
import image1White from "../../assets/image/image1White.png"
import image2White from "../../assets/image/image2White.png"
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { getQuestion } from '../../app/quiz/getQuestion/getQuestionThunkFunctions'
import { useNavigate, useParams } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'
import { useFormik } from 'formik'
import { client } from '../../services/client/client'
import { api } from '../../services/api/api'



export default function QuizPage() {
    // ----------store----------
    let userInfo=useSelector(state => state.getUserInfoByJWTSlice);
    let {info:quiz , loading:quizLoading}=useSelector(state => state.questionSlice);
    console.log(quiz);

    // ----------hooks----------
    let jwt=localStorage.getItem("jwt");
    let dispatch=useDispatch();
    let navigate=useNavigate();
    let {values , handleChange , handleSubmit , errors , handleBlur , touched}=useFormik({
        initialValues:quiz.questions && quiz.questions.reduce((store , question) => {
            return {
                ...store,
                [question.id]:""
            }
        } , {}),
        enableReinitialize:true,
        onSubmit:async (values) => {
            let keys=Object.keys(values);
            let answerArray=keys.map((key) => {
                return {
                    question:Number(key),
                    answer:values[key].length ? Number(values[key]) : 5
                }
            })

            try{
                let response=await client.post(api.sendAnswer + quiz.uuid + "/" , [...answerArray] , {
                    headers:{
                        "Authorization": `Bearer ${localStorage.getItem("jwt")}`
                    }
                })
                if(response.status===200) {
                    toast.success("success");
                    console.log(response.data);
                }
                navigate("/dashboard")
            }catch(err){
                navigate("/dashboard")
            }
        }
    })

    console.log(values);

    // ----------variables----------
    let {id:skillId}=useParams();


    // ----------lifeCycle----------
    useEffect(() => {
        dispatch(getQuestion({skillId}))
    } , []);

    // ----------loading----------
    if(quizLoading) {
        return <div className='w-full h-screen flex justify-center items-center'>
            <Spinner className='w-10 h-10' />
        </div>
    }

  return (
    <div className='w-full h-full bg-text-custom-gray'>
        <div className='w-full h-full bg-text-custom-gray p-10'>
            <div className='w-full flex justify-center'>
                <p className='text-5xl text-white font-yekan p-4'>آزمون</p>
            </div>
            <div className='w-full h-full bg-white rounded-xl'>
                <form style={{direction:"rtl"}} onSubmit={handleSubmit} action="" className='p-4'>
                    {quiz.questions &&
                    quiz.questions.map((question , index) => {
                        return (
                        <div className='w-full border-b border-gray-200 pb-10 my-4'>
                                    <span>{index+1}-</span><label htmlFor="" className='text-base lg:text-xl font-yekan'>
                                        {question.description}
                                    </label>
                                    <div>
                                        <div className='text-sm lg:text-base flex flex-row-reverse gap-1 justify-end items-center font-yekan'>
                                            <label htmlFor={question.o1}>{question.o1}</label>
                                            <input name={question.id} onChange={handleChange} value={1} type="radio" id={question.o1} />
                                        </div>

                                        <div className='text-sm lg:text-base flex flex-row-reverse gap-1 justify-end items-center font-yekan'>
                                            <label htmlFor={question.o2}>{question.o2}</label>
                                            <input name={question.id} onChange={handleChange} value={2} type="radio" id={question.o2} />
                                        </div>

                                        <div className='text-sm lg:text-base flex flex-row-reverse gap-1 justify-end items-center font-yekan'>
                                            <label htmlFor={question.o3}>{question.o3}</label>
                                            <input name={question.id} onChange={handleChange} value={3} type="radio" id={question.o3} />
                                        </div>

                                        <div className='text-sm lg:text-base flex flex-row-reverse gap-1 justify-end items-center font-yekan'>
                                            <label htmlFor={question.o4}>{question.o4}</label>
                                            <input name={question.id} onChange={handleChange} value={4} type="radio" id={question.o4} />
                                        </div>
                                    </div>
                        </div>
                        )
                    })
                    }
                    <div className='w-full py-10 flex justify-center'>
                        <button type='submit' className='px-10 py-4 rounded-2xl text-xl text-white font-yekan bg-green-400'>ارسال جواب ها</button>
                    </div>
                </form>
            </div>
        </div>
        <Toaster />
    </div>
  )
}

import React, { useState } from 'react'
import BasicHeader from '../../components/BasicHeader/BasicHeader'
import grayLogo from "../../assets/image/grayLogo.png"
import image1Gray from "../../assets/image/image1Gray.png"
import image2Gray from "../../assets/image/image2Gray.png"
import BasicFooter from '../../components/BasicFooter/BasicFooter'
import { useFormik } from 'formik'
import avatarWomen from "../../assets/image/avatarWomen.png"
import avatarMen from "../../assets/image/avatarMen.png"
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../../app/auth/signUp/signUpThunkFunctions'
import { useNavigate } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'

export default function SignUpPage() {


    const [showPage , setShowPage]=useState(1);

    let loading=useSelector(state => state.signUpSlice.loading);

    let dispatch=useDispatch();
    let navigate=useNavigate();
    let phoneNumber=localStorage.getItem("phoneNumber");

    let [values1 , setValues1]=useState({
        user_type:"",
        institute_type:"",
        gender:""
    })

    let {user_type , institute_type , gender}=values1;


    function handleChange1(event) {
        setValues1({...values1,
            [event.target.name]:event.target.value
        })
    }

    let validationSchema={
            full_name:Yup.string().required(),
            email:Yup.string().required(),
            national_id:Yup.string().required(),
            birth_year:Yup.date().required(),
            major:Yup.string().required(),
            institute_name:Yup.string().required(),
            education_year:Yup.string().required(),
            password:Yup.string().required("لطفا رمز را وارد کنید").min(8 , "رمز باید حداقل هشت کاراکتر باشد")
    }


    let {values , handleChange , handleSubmit , errors , handleBlur , touched}=useFormik({
        initialValues:{
            full_name:"",
            email:"",
            national_id:"",
            birth_year:"",
            major:"",
            student_code:"",
            institute_name:"",
            education_year:"",
            parent_phone_number:"",
            password:""
        },
        validationSchema:Yup.object().shape({...validationSchema}),
        onSubmit:(values) => {
            let newValues={...values};
            delete newValues.password;
            dispatch(signUp({
                values:{
                    phone_number:phoneNumber,
                    password:values.password,
                    profile:{
                        ...values1,
                        ...newValues
                    }
                },
                navigate
            }))
        }
    })


    let labelClassName="text-base font-yekan after:content-['*'] after:text-red-500";


  return (
    <div className='w-full h-screen bg-white'>
        <BasicHeader logoImage={grayLogo} className={"text-text-custom-gray"} />
        <div className='h-[calc(100vh-122px)] flex flex-col justify-between'>
            {showPage===1 ? 
            <div className='w-full grid grid-cols-1 md:grid-cols-2 mt-8'>
                <div className='w-full lg:w-[75%] lg:pl-24 flex justify-center lg:block'>
                    <img className='w-[70%] lg:w-auto' src={gender==="FEMALE" ? avatarWomen : avatarMen} alt="" />
                </div>
                <div className='w-full flex justify-center items-center p-6 md:pr-36 md:pl-20'>
                    <form action="" className='w-full'>
                        <div>
                            <select style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"}} value={user_type} onChange={handleChange1} name="user_type" id="user_type"
                            className='w-full h-16 text-center text-lg lg:text-xl font-yekan bg-white rounded-3xl border-none px-1'
                            >
                                <option className='text-xl font-yekan' value="" selected disabled>نوع کاربری خود را انتخاب کنید</option>
                                <option className='text-xl font-yekan' value="INTERN">کارآموز</option>
                                <option className='text-xl font-yekan' value="JOB_SEEKER">کارجـو</option>
                            </select>
                            <div style={{direction:"rtl"}} className='text-sm text-red-500 font-yekan'>{values1.user_type==="error" && "لطفا نوع کاربری خود را وارد کنید"}</div>
                        </div>
                        <div className='w-full mt-6'>
                            <div className='w-full grid grid-cols-3'>
                                <div onClick={() => setValues1({...values1 , institute_type:"UNI"})} 
                                className={`h-12 ${institute_type==="UNI" ? "bg-text-custom-gray text-white" : "bg-[#F2F2F2] text-gray-500"} rounded-l-3xl flex justify-center items-center cursor-pointer`}>
                                    <p className='text-lg font-yekan'>دانشجو</p>
                                </div>
                                <div onClick={() => setValues1({...values1 , institute_type:"ART"})}
                                className={`h-12 ${institute_type==="ART" ? "bg-text-custom-gray text-white" : "bg-[#F2F2F2] text-gray-500"} border-x border-gray-200 flex justify-center items-center cursor-pointer`}>
                                    <p className='text-lg font-yekan'>هنرستان</p>
                                </div>
                                <div onClick={() => setValues1({...values1 , institute_type:"HS"})}
                                className={`h-12 ${institute_type==="HS" ? "bg-text-custom-gray text-white" : "bg-[#F2F2F2] text-gray-500"} rounded-r-3xl flex justify-center items-center cursor-pointer`}>
                                    <p className='text-lg font-yekan'>دبیرستان</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mt-6 px-20'>
                            <div className='w-full grid grid-cols-2'>
                                <div onClick={() => setValues1({...values1 , gender:"MALE"})} 
                                className={`h-12 ${gender==="MALE" ? "bg-text-custom-gray text-white" : "bg-[#F2F2F2] text-gray-500"} rounded-l-3xl flex justify-center items-center cursor-pointer`}>
                                    <p className='text-lg font-yekan'>پسر</p>
                                </div>
                                <div onClick={() => setValues1({...values1 , gender:"FEMALE"})}
                                className={`h-12 ${gender==="FEMALE" ? "bg-text-custom-gray text-white" : "bg-[#F2F2F2] text-gray-500"} rounded-r-3xl border-l border-gray-200 flex justify-center items-center cursor-pointer`}>
                                    <p className='text-lg font-yekan'>دختر</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mt-6'>
                            <div onClick={() => {
                            !values1.user_type ? setValues1({...values1 , user_type:"error"}) : setShowPage(2);
                            }}
                            className='w-full h-12 lg:h-14 flex justify-center items-center rounded-3xl bg-[#35CB00] text-2xl text-white font-yekan cursor-pointer'>
                                <p>
                                    برو مرحله بعد
                                </p>
                                </div>
                        </div>
                    </form>
                </div>
            </div> :
            <form onSubmit={handleSubmit} className='w-full flex flex-col lg:grid lg:grid-cols-2 mt-8'>
                <div className='w-full px-6 lg:px-36 flex flex-col justify-start items-center'>
                    <img className='w-[80%]' src={gender==="FEMALE" ? avatarWomen : avatarMen} alt="" />
                    <div className='w-[60%] mt-6'>
                        <button type='submit' className='w-full h-14 rounded-3xl bg-[#35CB00] text-2xl text-white font-yekan'>
                            {loading ? 
                            <div className='w-full h-full flex justify-center items-center'><Spinner className='w-7 h-7' /></div>
                            :
                           <p>
                               برو مرحله بعد
                           </p>
                            }
                        </button>
                    </div>
                </div>
                <div className='w-full h-[350px] lg:h-auto flex justify-center items-center mt-6 lg:mt-0 px-6 lg:px-0 lg:pr-custom-padding-x'>
                    <div style={{direction:"rtl"}} className='w-full h-full grid grid-cols-2 grid-rows-5 gap-x-4 gap-y-1'>
                        <div className='w-full flex flex-col gap-1'>
                            <label style={{direction:"rtl"}} className={labelClassName} htmlFor="full_name">نام و نام خانوادگی</label>
                            <input style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}} type="text" id='full_name' name="full_name" value={values.full_name} onChange={handleChange} onBlur={handleBlur}
                            className={`w-full h-full rounded-3xl bg-white px-2 text-base font-yekan border-none ${errors.full_name && touched.full_name && "border border-red-500"}`}
                            />
                        </div>

                        <div className='w-full flex flex-col gap-1'>
                            <label className={labelClassName} htmlFor="major">رشته تحصیلی</label>
                            <input style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}} type="text" id='major' name='major' value={values.major} onChange={handleChange} onBlur={handleBlur}
                            className={`w-full h-full rounded-3xl bg-white px-2 text-base font-yekan border-none ${errors.major && touched.major && "border border-red-500"}`}
                            />
                        </div>

                        <div className='w-full flex flex-col gap-1'>
                            <label className={labelClassName} htmlFor="email">ایمیل</label>
                            <input style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}} type="text" id='email' value={values.email} onChange={handleChange} onBlur={handleBlur}
                            className={`w-full h-full rounded-3xl bg-white px-2 text-base font-yekan border-none ${errors.email && touched.email && "border border-red-500"}`}
                            />
                        </div>

                        <div className='w-full flex flex-col gap-1'>
                            <label className='text-base font-yekan' htmlFor="student_code">کد دانشجویی</label>
                            <input style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}} type="text" id='student_code' name='"student_code' value={values.student_code} onChange={handleChange} onBlur={handleBlur} 
                            className='w-full h-full rounded-3xl bg-white px-2 text-base font-yekan border-none'
                            />
                        </div>

                        <div className='w-full flex flex-col gap-1'>
                            <label className={labelClassName} htmlFor="national_id">کد ملی</label>
                            <input style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}} type="text" id='national_id' name='national_id' value={values.national_id} onChange={handleChange} onBlur={handleBlur} 
                            className={`w-full h-full rounded-3xl bg-white px-2 text-base font-yekan border-none ${errors.national_id && touched.national_id && "border border-red-500"}`}
                            />
                        </div>

                        <div className='w-full flex flex-col gap-1'>
                            <label className='text-base font-yekan' htmlFor="parent_phone_number">شماره تماس والدین</label>
                            <input style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}} type="text" id='parent_phone_number' name="parent_phone_number" value={values.parent_phone_number} onChange={handleChange} onBlur={handleBlur}
                            className='w-full h-full rounded-3xl bg-white px-2 text-base font-yekan border-none'
                            />
                        </div>

                        <div className='w-full flex flex-col gap-1'>
                            <label className={labelClassName} htmlFor="birth_year">تاریخ تولد</label>
                            <input style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}} type="date" id="birth_year" name="birth_year" value={values.birth_year} onChange={handleChange} onBlur={handleBlur}
                            className={`w-full h-full rounded-3xl bg-white px-2 text-base font-yekan border-none ${errors.birth_year && touched.birth_year && "border border-red-500"}`}
                            />
                        </div>

                        <div className='w-full flex flex-col gap-1'>
                            <label className={labelClassName} htmlFor="institute_name">نام موسسه ی آموزشی</label>
                            <input style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}} type="text" id="institute_name" name="institute_name" value={values.institute_name} onChange={handleChange} onBlur={handleBlur} 
                            className={`w-full h-full rounded-3xl bg-white px-2 text-base font-yekan border-none ${errors.institute_name && touched.institute_name && "border border-red-500"}`}
                            />
                        </div>

                        <div className='w-full flex flex-col gap-1'>
                            <label className={labelClassName} htmlFor="education_year">آخرین مقطع تحصیلی</label>
                            <select style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}} type="text" id='education_year' name="education_year" value={values.education_year} onChange={handleChange} onBlur={handleBlur} 
                            className={`w-full h-full rounded-3xl bg-white px-2 text-base font-yekan border-none ${errors.education_year && touched.education_year && "border border-red-500"}`}
                            >
                                <option value="" selected disabled>مقطع تحصیلی</option>
                                <option value="TEN">دهم</option>
                                <option value="ELEVEN">یازدهم</option>
                                <option value="TWELVE">دوازدهم</option>
                                <option value="ASSO">فوق دیپلم</option>
                                <option value="BACHLOR">کارشناسی</option>
                                <option value="MASTER">ارشد</option>
                                <option value="DR">دکتری</option>
                            </select>
                        </div>

                        <div className='w-full flex flex-col gap-1 relative'>
                            <label className={labelClassName} htmlFor="password">رمز ورود</label>
                            <input style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}} type="text" id='password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} 
                            className={`w-full h-full rounded-3xl bg-white px-2 text-base font-yekan border-none ${errors.password && touched.password && "border border-red-500"}`}
                            />
                            <div className='text-sm text-red-500 font-yekan absolute bottom-[-20px]'>{errors.password && touched.password && errors.password}</div>
                        </div>
                    </div>
                </div>
            </form>
            }




            <div className='w-fit flex justify-start p-4'>
            <div>
                <img src={image1Gray} alt="" />
            </div>
            <div>
                <img src={image2Gray} alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}
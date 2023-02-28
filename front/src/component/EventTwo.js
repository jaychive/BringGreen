import React, { useState } from 'react';
import EventTitle from './reusable/EventTitle';
import { useForm, Controller } from "react-hook-form";
import { TextField, ButtonBase } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';

function EventTwo(props) {

  const [formValues, setFormValues] = useState({
    no : null,
    ordernum : '',
    oliveid : '',
    name : '',
    email : ''
  });
  

  const { register, handleSubmit, formState: { isSubmitting, isDirty, errors } } = useForm(formValues);

  const onSubmit = data => {
    alert(JSON.stringify(data))
    setFormValues(data)
    axios.post('http://localhost:8080/api', { headers: { "Content-Type": `application/json` }, body: data })
    .then(res => {
      res.send(formValues)
    })
    .catch(err => { console.log(err); })
  }
  return (
    <section id='event2' className='sectionSpace'>
      <EventTitle type={props.sort}></EventTitle>
      <div className='d-flex justify-content-center pt-5'>
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column" id='eventform'>
          <input type="hidden" name="no" id="no" {...register("no")} />
            <TextField
              name="ordernum"
              label="주문번호"
              id="ordernum"
              placeholder="주문번호"
              aria-invalid={!isDirty ? undefined : errors.ordernum ? "true" : "false"}
              {...register("ordernum", {
                required: "주문번호는 필수 입력 사항입니다.",
                minLength: {
                  value: 14,
                  message: "주문번호는 Y를 포함한 14자리입니다.",
                }}
              )}
            />
            {errors.ordernum && <small role="alert">{errors.ordernum.message}</small>}
            <TextField
              name="oliveid"
              label="올리브영 ID"
              id="oliveid"
              placeholder="올리브영 ID"
              aria-invalid={!isDirty ? undefined : errors.oliveid ? "true" : "false"}
              {...register("oliveid", {
                required: "올리브영 ID는 필수 입력 사항입니다.",
                minLength: {
                  value: 5,
                  message: "유효하지 않은 ID입니다.",
                }}
              )}
            />
            {errors.oliveid && <small role="alert">{errors.oliveid.message}</small>}
            <TextField
              name="name"
              label="이름"
              id="name"
              placeholder="이름"
              aria-invalid={!isDirty ? undefined : errors.name ? "true" : "false"}
              {...register("name", {
                required: "이름은 필수 입력 사항입니다.",
                minLength: {
                  value: 2,
                  message: "이름은 2자리 이상 입력해야 합니다.",
                }}
              )}
            />
            {errors.name && <small role="alert">{errors.name.message}</small>}
            <TextField
              name="email"
              label="이메일"
              id="email"
              placeholder='이메일'
              aria-invalid={!isDirty ? undefined : errors.email ? "true" : "false"}
              {...register("email", {
                required: "이메일은 필수 입력 사항입니다.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "이메일 형식에 맞지 않습니다.",
                }}
              )}
            />
            {errors.email && <small role="alert">{errors.email.message}</small>}
          <div className='d-flex justify-content-start'>
            <input type="checkbox" className='w-auto' required /><label className='ms-3'>개인정보 활용 동의</label>
          </div>
          <ButtonBase type="submit" className='submit w-100 text-white bg-secondary border-0 rounded py-3 mt-5' disabled={isSubmitting}>
            제출하기
          </ButtonBase>
        </form>
      </div>
    </section>
  );
}

export default EventTwo;
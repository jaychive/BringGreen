import React from 'react';
import EventTitle from './reusable/EventTitle';
import { useForm, Controller } from "react-hook-form";
import { TextField } from '@mui/material';

function EventTwo(props) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      select: {}
    }
  });
  const onSubmit = data => console.log(data);
  return (
    <section id='event2' className='sectionSpace'>
      <EventTitle type={props.sort}></EventTitle>
      <div className='d-flex justify-content-center pt-5'>
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column" id='eventform'>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) =>         <TextField
            label="주문번호"
            id="order"
            defaultValue="주문번호"
          />}
          />
                    <Controller
            name="firstName"
            control={control}
            render={({ field }) =>         <TextField
            label="올리브영 ID"
            id="oliveid"
            defaultValue="올리브영 ID"
          />}
          />
                    <Controller
            name="firstName"
            control={control}
            render={({ field }) =>         <TextField
            label="이름"
            id="name"
            defaultValue="이름"
          />}
          />
                    <Controller
            name="firstName"
            control={control}
            render={({ field }) =>         <TextField
            label="이메일"
            id="email"
            defaultValue="이메일"
          />}
          />
          <div className='d-flex justify-content-start'>
          <input type="checkbox" className='w-auto' /><label className='ms-3'>개인정보 활용 동의</label>
          </div>
          <input type="submit" className='w-100 text-white bg-secondary border-0 rounded py-3 mt-5' />
        </form>
      </div>  

    </section>
  );
}

export default EventTwo;
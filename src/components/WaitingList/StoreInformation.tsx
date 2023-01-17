import { useState } from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import './StoreInformation.scss';
import axios from 'axios';

function StoreInformation() {
  const [text, setText] = useState('')
  const onChange = (event: any) => (
    setText(event.target.value)
  );

  // 400 error - url확인
  const storeinformationText = () => {
    axios.patch('http://localhost:8000/api/v1/store/detail/',{
      store_id: 1, //localStorage.getItem("store_id"),
      information: text
    })
    .then((response) => {
        console.log(text);
      }) 
    .catch((error) => { 
      console.log('Error!');
    });
  }

  return (
    <div className='InformationOutline'>
      <TextareaAutosize
        minRows={25}
        maxRows={30}
        aria-label="매장 소개 정보"
        placeholder="매장 소개글을 입력해주세요."
        className='InformationInput'
        value = {text}
        onChange = {onChange}
      />
      <button onClick={storeinformationText}>저장</button>
    </div>
  );
}

export default StoreInformation;
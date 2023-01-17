import { useState } from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import './StoreInformation.scss';
import axios from 'axios';

function StoreInformation() {
  const [text, setText] = useState('')  //resInforamtion : waitingList에서 넘겨준 데이터를 해당 컴포넌트에서 어떻게 부를건지, 받아온 데이터를 어떻게 부를건지
  const onChange = (event: any) => (
    setText(event.target.value)
  );

  // 404 error
  const storeinformationText = () => {
    axios.patch('http://localhost:8000/api/v1/stores/details/',{
      store_id: localStorage.getItem("store_id"),
      inforamtion: text
    })
    .then((response) => {
        console.log(response.data);
        console.log(text);
      }) 
    .catch((error) => { 
      console.log('Error!');
      console.log(text);
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
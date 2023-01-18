import { useEffect, useState } from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import './StoreInformation.scss';
import axios from 'axios';

function StoreInformation({information}:{information:string}) {
  const [text, setText] = useState(information)
  const onChange = (event: any) => (
    setText(event.target.value)
  );

  
  const storeinformationText = () => {
    axios.patch('http://localhost:8000/api/v1/stores/details/',{
      store_id: 2, //localStorage.getItem("store_id"), - 우선 임의의 값으로 지정, 로그인 api완료 후 추후 진행
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
      <button onClick={storeinformationText} className={'InformationSaveButton'} >저장</button>
    </div>
  );
}

export default StoreInformation;
import { useEffect, useState } from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import './StoreInformation.scss';
import axios from 'axios';

interface Props {
  setInformation: React.Dispatch<React.SetStateAction<string>>;
}
type Info = {text : string}

function StoreInformation(information: any) {
  //const [text, setText] = useState<string>({setInformation})
  const onChange = (event: any) => (
    setInfo(event.target.value)
  );

  const [info, setInfo] = useState('information');

  const storeInformationText = () => {
    axios.patch('http://localhost:8000/api/v1/stores/details/',{
      store_id: localStorage.getItem("store_id"), //- 우선 임의의 값으로 지정, 로그인 api완료 후 추후 진행
      information: info  //information: info = 처음에 가져온 가게설명 초기값 : 변경되는 가게설명수정
    })
    .then((response) => {
        console.log(information);
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
        value = {info}
        onChange = {onChange}
      />
      <button onClick={storeInformationText} className={'InformationSaveButton'} >저장</button>
    </div>
  );
}

export default StoreInformation;
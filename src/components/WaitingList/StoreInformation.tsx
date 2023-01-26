import { useEffect, useState } from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import './StoreInformation.scss';
import axios from 'axios';

interface Props {
  information: string | undefined;
}
//type Info = {text : string}

function StoreInformation(information: Props) {
  //const [text, setText] = useState<string>({setInformation})
  const onChange = (event: any) => (
    setInfo(event.target.value)
  );

  const [info, setInfo] = useState(information);  //useState('information'); 이렇게 작성되면 텍스트 information만 작성되던데 이게 맞는지!

  const storeInformationText = () => {
    axios.patch('http://15.164.28.246:8000/api/v1/stores/details/',{
      information: info 
    },
    {
      headers : {Authorization: localStorage.getItem('accessToken')}
    }
    )
    .then((response) => {
      console.log('[가게설명]' + localStorage.getItem('accessToken'))
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
        value = {info.information} 
        onChange = {onChange}
      />
      <button onClick={storeInformationText} className={'InformationSaveButton'} >저장</button>
    </div>
  );
}

export default StoreInformation;
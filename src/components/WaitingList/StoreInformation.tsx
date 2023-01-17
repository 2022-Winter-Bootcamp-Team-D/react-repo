import { useState } from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import './StoreInformation.scss';
import axios from 'axios';

function StoreInformation() {

  const [inforamtion, setInformation] = useState(resInforamtion)  //resInforamtion : waitingList에서 넘겨준 데이터를 해당 컴포넌트에서 어떻게 부를건지, 받아온 데이터를 어떻게 부를건지
  //const information = 
  const storeinformationText = () => {
    axios.patch('http://localhost:8000/api/v1/stores/details',{
      store_id: localStorage.getItem("store_id"),
      inforamtion: resInforamtion
    }
    )
  }

  return (
    <div className='InformationOutline'>
      <TextareaAutosize
        minRows={25}
        maxRows={30}
        aria-label="매장 소개 정보"
        placeholder="매장 소개글을 입력해주세요."
        className='InformationInput'
        value =                  //value 기본값을 넣어주는 default데이터 ,
                              //해당 페이지를 다시 열었을때 이전의 데이터가 뜨기 위해 axios로 받아온 데이터를 value로 넣어줘
                              //Textarea에 있는 값은 이미 저장이 되어 있음, value값이 변함에 따라 return을 해주게 해야 함(밖으로 내뿜어주게)
        onChange={e => setInformation(e.target.value)}  //value값이 바뀌는지 계속 추적해주는 함수, 값이 바뀌었을 때 실행, 이를 이벤트라고 함
                              //event 발생하면 event 객체 내의 target.value에 바뀐 값이 있고 그 값이 setInformation으로, 
      />
    </div>
  );
}

export default StoreInformation;
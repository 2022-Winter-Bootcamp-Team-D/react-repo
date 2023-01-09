import * as React from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import './StoreInformation.scss';

export default function StoreInformation() {
  return (
    //<div className='InformationInput'>
    <TextareaAutosize
      minRows={15}
      maxRows={18}
      aria-label="매장 소개 정보"
      placeholder="매장 소개글을 입력해주세요."
      style={{ width: 225 }}
      className='InformationInput'
    />
    //</div>
  );
}
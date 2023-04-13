import { FC, ReactElement } from 'react';

import { Button } from './Button';

interface Props {
  title: string;
  body: string | ReactElement;
  requestToClose: () => void;
  requestToConfirm: () => void;
}
export const Modal: FC<Props> = ({ title, body, requestToConfirm ,requestToClose }) => {
  return (
    <>
      <div className={`absolute top-0 h-screen w-screen backdrop-blur-sm`} />
      <div className="modal-color modal-text-color absolute w-[30%] h-fit inset-0 m-auto rounded flex flex-col p-4">
        <div className='flex flex-col gap-4 my-2'>
          <h1>{title}</h1>
          <div>{body}</div>
        </div>
        <div className="flex gap-4 mt-4">
          <Button type="button" onClick={requestToConfirm}>
            Confirm
          </Button>
          <Button onClick={requestToClose}>Cancel</Button>
        </div>
      </div>
    </>
  );
};



import React from 'react';

import { MarkdownContext } from '../../context';
import { Button } from '../utilities';

interface Props {
  closeModal: () => void;
}

export const DeleteDocModal: React.FC<Props> = ({ closeModal }) => {
  const { currDoc, deleteDoc } = React.useContext(MarkdownContext);

  const handleDelete = () => {
    deleteDoc();
    closeModal();
  }

  return (
    <>
      <div className={`absolute top-0 h-screen w-screen backdrop-blur-sm`} />
      <div className="modal-color modal-text-color absolute w-[30%] h-fit inset-0 m-auto rounded flex flex-col p-4">
        <div className='flex flex-col gap-4 m-2'>
          <h2>Are you sure you want to delete this document.</h2>
          <p>
            Are you sure you want to delete {currDoc.name}. This is process is
            irreversable.
          </p>
        </div>
        <div className="flex gap-4 mt-4">
          <Button type="button" onClick={handleDelete}>
            Delete Document
          </Button>
          <Button onClick={closeModal}>Cancel</Button>
        </div>
      </div>
    </>
  );
};
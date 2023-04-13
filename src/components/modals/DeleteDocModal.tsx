import React from 'react';

import { MarkdownContext } from '../../context';
import { Modal } from '../utilities';

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
      <Modal
        title="Delete Document"
        body={
          <p>
            Are you sure you want to delete [{currDoc.name}]. This is process is
            irreversable.
          </p>
        }
        requestToConfirm={handleDelete}
        requestToClose={closeModal}
      />
    </>
  );
};
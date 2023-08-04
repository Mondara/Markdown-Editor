import React from 'react';

import { MarkdownContext } from '../../context';
import { Modal } from '../utilities';

interface Props {
  closeModal: () => void;
}

export const CreateDocModal: React.FC<Props> = ({ closeModal }) => {
  const [docName, setDocName] = React.useState('');
  const { newDoc } = React.useContext(MarkdownContext);

  const handleCreate = () => {
    newDoc(docName);
    closeModal();
  }

  return (
    <Modal
      title="Create a new document"
      body={
        <div className='flex flex-col gap-y-2'>
          <label htmlFor="name">Document Name:</label>
          <input
            type="text"
            name="name"
            value={docName}
            onChange={(e) => setDocName(e.target.value)}
            required
            className="modal-input-color h-12 rounded p-2"
          />
        </div>
      }
      requestToConfirm={handleCreate}
      requestToClose={closeModal}
    />
  );
}
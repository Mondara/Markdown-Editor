import React from 'react';

import { MarkdownContext } from '../../context';
import { Modal } from '../utilities';
import { getDate } from '../../utilities_functions';
import { UploadBtn } from '../uploadBtn';

interface Props {
  closeModal: () => void;
}

export const CreateDocModal: React.FC<Props> = ({ closeModal }) => {
  const [docName, setDocName] = React.useState('');
  const { newDoc, uploadFile } = React.useContext(MarkdownContext);

  const handleCreate = () => {
    newDoc({ name: docName });
    closeModal();
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const currFile = e.target.files[0];

    const contents = await currFile.text();
    // console.log(contents)

    uploadFile({
      name: currFile.name,
      createdAt: getDate(currFile.lastModified),
      content: contents
    });

    closeModal();
  };



  return (
    <Modal
      title="Create or Upload document"
      body={
        <div className='flex flex-col gap-y-2'>
          <label htmlFor="name">New Document Name:</label>
          <input
            type="text"
            name="name"
            value={docName}
            onChange={(e) => setDocName(e.target.value)}
            required
            className="modal-input-color h-12 rounded p-2"
          />

          <p className="heading-medium font-bold">OR</p>
          <UploadBtn handleFileChange={handleFileChange} />
        </div>
      }
      requestToConfirm={handleCreate}
      requestToClose={closeModal}
    />
  );
}
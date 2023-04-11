import React from 'react';
import { MarkdownContext } from '../../context';
import { Button } from '../utilities';

interface Props {
  closeModal: () => void;
}

export const Modal: React.FC<Props> = ({ closeModal }) => {
  const [docName, setDocName] = React.useState('');
  const { newDoc } = React.useContext(MarkdownContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newDoc(docName);

    closeModal();
  }

  return (
    <>
      <div className="absolute top-0 h-screen w-screen backdrop-blur-sm" />
      <div className="modal-color modal-text-color absolute w-3/12 h-fit inset-0 m-auto rounded flex flex-col p-4">
        <h2>Create Document</h2>
        <form className="flex flex-col gap-2 mt-4" onSubmit={handleSubmit}>
          <label htmlFor="name">
            Document Name:
          </label>
          <input type="text" name="name" value={docName} onChange={(e) => setDocName(e.target.value)}
            required
            className='modal-input-color h-12 rounded ' />
          <div className="flex gap-4 mt-4">
            <Button type="submit" value="Submit">
              <span>+</span>
              Create Document
            </Button>
            <Button onClick={() => closeModal()}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </>

  )
}
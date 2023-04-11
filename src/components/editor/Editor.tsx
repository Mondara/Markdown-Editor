import React from "react";

import data from '../../assets/data.json';

interface Props {
  data: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Editor: React.FC<Props> = ({ data, handleChange }) => {

  return (
    <div className="w-6/12 h-full flex flex-col border  ">
      <div className="w-full px-4 py-2 editor-header-color">
        <h5 className="editor-header-text-color">MARKDOWN</h5>
      </div>
      <textarea
        className="w-full h-full px-4 py-2 resize-none editor-color editor-text-color"
        value={data}
        onChange={(e) => handleChange(e)}>
      </textarea>
    </div>
  );
};

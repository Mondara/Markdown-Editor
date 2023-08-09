export interface Doc {
  id: string;
  name: string;
  createdAt: string;
  content: string;
}

export interface MarkDownContextType {
  docs: Doc[];
  currDoc: Doc;
  handleCurrDocChange: (idx: number) => void;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  saveDoc: () => void;
  deleteDoc: () => void;
  newDoc: (doc?: Partial<Doc>) => void;
  updateDoc: (name: string) => void;
  uploadFile: (file: FileState) => void;
  downloadFile: (file: Doc) => void;
}

export interface FileState {
  name: string;
  createdAt: string;
  content: string;
}

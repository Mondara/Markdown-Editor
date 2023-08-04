import React from 'react';

import { CreateDocModal, DeleteDocModal, Editor, Header, Preview, Sidebar } from './components';
import { MarkdownContext } from './context';

function App() {
  const { currDoc, handleChange } = React.useContext(MarkdownContext);

  // const [input, setInput] = React.useState(data[1].content)
  const [showEditor, setShowEditor] = React.useState<boolean>(true);
  const [showSidebar, setShowSidebar] = React.useState<boolean>(false);
  const [showCreateModal, setShowCreateModal] = React.useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState<boolean>(false);

  const handleOpenCreateModal = () => setShowCreateModal(true);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  const handleOpenDeleteModal = () => setShowDeleteModal(true);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  // const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.currentTarget.value)
  const toggleEditor = () => setShowEditor((prevShowEditor: boolean) => !prevShowEditor);
  const toggleSidebar = () => setShowSidebar((prevShowEditor: boolean) => !prevShowEditor)

  return (
    <div className="w-screen h-screen max-h-screen overflow-none bg-dark-gray-4 relative">
      {showSidebar && (
        <aside className="fixed top-0 open h-full w-60">
          <Sidebar openModal={handleOpenCreateModal} />
        </aside>)}

      <header className={`${showSidebar && "translate-x-60 max-w-[calc(100vw-15rem)]"} open w-full h-20 `}>
        <Header toggleSidebar={toggleSidebar} openDeleteDocModal={handleOpenDeleteModal} />
      </header>

      <main className={`${showSidebar && "translate-x-60 max-w-[calc(100vw-15rem)]"} open h-full max-h-[calc(100vh-5rem)] flex`}>
        {showEditor && <Editor data={currDoc.content} handleChange={handleChange} showEditor={showEditor} toggleEditor={toggleEditor} />}
        <Preview data={currDoc.content} showEditor={showEditor} toggleEditor={toggleEditor} />
      </main>

      {showCreateModal && (
        <CreateDocModal closeModal={handleCloseCreateModal} />
      )}

      {showDeleteModal && (
        <DeleteDocModal closeModal={handleCloseDeleteModal} />
      )}

    </div >
  )
}

export default App

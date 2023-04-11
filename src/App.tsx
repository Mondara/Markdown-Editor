import React from "react";

import { Header, Editor, Preview, Sidebar, Modal } from "./components";
import { MarkdownContext } from "./context";

function App() {
  const { currDoc, handleChange } = React.useContext(MarkdownContext);

  // const [input, setInput] = React.useState(data[1].content)
  const [showEditor, setShowEditor] = React.useState<boolean>(true);
  const [showSidebar, setShowSidebar] = React.useState<boolean>(false);
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.currentTarget.value)
  const toggleEditor = () => setShowEditor(!showEditor);
  const toggleSidebar = () => setShowSidebar(!showSidebar)

  return (
    <div className="w-screen h-screen max-h-screen overflow-none bg-dark-gray-4 relative">
      {showSidebar && (
        <aside className="fixed top-0 open h-full w-60">
          <Sidebar openModal={handleOpen} />
        </aside>)}

      <header className={`${showSidebar && "translate-x-60 max-w-[calc(100vw-15rem)]"} open w-full h-20 `}>
        <Header toggleSidebar={toggleSidebar} />
      </header>

      <main className={`${showSidebar && "translate-x-60 max-w-[calc(100vw-15rem)]"} open h-full max-h-[calc(100vh-5rem)] flex`}>
        {showEditor && <Editor data={currDoc.content} handleChange={handleChange} />}
        <Preview data={currDoc.content} showEditor={showEditor} toggleEditor={toggleEditor} />
      </main>

      {showModal && (
        <Modal closeModal={handleClose} />
      )}

    </div >
  )
}

export default App

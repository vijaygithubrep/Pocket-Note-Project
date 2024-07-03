import React, { useEffect, useState, useRef } from 'react'
import './MainContent.css'
import Img from './Image.png'

const MainContent = ({ selectedGroup,  onCreate }) => {
  const [date, setDate] = useState(new Date())
  const [groupNote, setGroupNote] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ note: groupNote });
  };

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000)
  })
  if (!selectedGroup) {
    return (
      <div className="main-contentmessage">
        <div>
          <img src={Img} alt="Image" style={{ width: "25vw", height: "20vw", background: "#F7ECDC", marginTop: "8vw", marginLeft: "6vw" }} />
          <p style={{ color: "black", fontWeight: "620", fontSize: "25px", marginLeft: "10vw", letterSpacing: "2px" }}>Pocket Notes </p>
          <p style={{ color: "black", marginLeft: "7vw" }}>Send and receive messages without keeping your phone online. <br />
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
          <p style={{ marginLeft: "10vw", marginTop: "70px" }}><strong>End-to-end encrypted</strong></p>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="main-content notes-view">
        <h3 style={{ display: "flex", float: "right", color: "black", backgroundColor: "#E8E8E8", }}> &nbsp;&nbsp; {selectedGroup.name}</h3>
        <div style={{ display: "flex", float: "right" }}>
          <div><p>{date.toLocaleDateString()}</p>
          </div>
          <div className="note" style={{ marginLeft: "4vw" }}>
            <p>Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning.
              The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</p>
            <p>It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are needed, this tool can be a great way to get that.
              It's a good way to test your programming and that the tool being created is working well.</p>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='text-area'>
          <textarea className='textarea' value={groupNote}
            onChange={(e) => setGroupNote(e.target.value)} placeholder="Enter your text here......." />
          <button type='submit' className="send-btn">➤</button>
        </div></form>
    </>
  );
};

export default MainContent;

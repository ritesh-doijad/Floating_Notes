import React, { useRef, useState } from "react";
import Card from "./Card";
import { MdOutlinePostAdd } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Foreground = () => {
  const ref = useRef(null);

  const [formVisible, setFormVisible] = useState(false);
  const [note, setNote] = useState("");
  const [filesize, setFilesize] = useState("");
  const [close, SetClose] = useState(false);
  const [isOpen, SetIsOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [tagColor, setTagColor] = useState("");
  const [data, setData] = useState([
    {
      note: "go to gym and then school",
      filesize: ".5mb",
      close: true,
      tag: {
        isOpen: true,
        title: "Download Now",
        tagColor: "green",
      },
    },
  ]);

  const SubmitData = (e) => {
    e.preventDefault();
    setData([
      ...data,
      { note, filesize, close, tag: { isOpen, title, tagColor } },
    ]);
    setNote("");
    setFilesize("");
    SetClose(false);
    SetIsOpen(false);
    setTitle("");
    setTagColor("");

    toast("Data Is Sucessfully Added");
    setFormVisible(!formVisible);
  };

  const renderForm = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div ref={ref} className="fixed top-0 left-0 w-full h-full z-[3] flex p-3 ">
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}

      <div
        onClick={renderForm}
        className="absolute bottom-10 outline outline-offset-2 outline-2 outline-blue-500 right-[30%] w-12 h-12 bg-zinc-900/90 text-white rounded-full flex items-center justify-center"
      >
        <MdOutlinePostAdd size="1.6em " />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition:Bounce
        />
      </div>
      {formVisible && (
        <div className="w-3/12 absolute bottom-[77px] left-[42%] p-6 border-8 border-zinc-600 rounded-md bg-zinc-700">
          <form onSubmit={SubmitData} action="">
            <label htmlFor="" className="text-white">
              Enter Note Here :
            </label>
            <input
              required
              type="text"
              className="w-full bg-zinc-800 p-2 mt-1 mb-2 text-white"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <label htmlFor="" className="text-white">
              Enter Filesize Here :(write with in mb)
            </label>
            <input
              required
              type="text"
              className="w-full bg-zinc-800 p-2 mt-1 mb-2 text-white"
              value={filesize}
              onChange={(e) => setFilesize(e.target.value)}
            />
            <div className="flex flex-col">
              <label htmlFor="" className="text-white">
                Close or Not Close :
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="m-2 "
                  value={close}
                  onChange={() => {
                    SetClose((prev) => !prev);
                  }}
                />
              </label>

              <label htmlFor="" className="text-white">
                Tag isOpen or not :
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="m-2 "
                  value={isOpen}
                  onChange={() => {
                    SetIsOpen((prev) => !prev);
                  }}
                />
              </label>
            </div>
            {isOpen && (
              <>
                <label htmlFor="" className="text-white mt-3">
                  Enter Tag Title :
                  <input
                    type="text"
                    className="w-full bg-zinc-800 p-2 mt-1 mb-2 text-white"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
                <label htmlFor="" className="text-white">
                  Enter Tag Color :
                  <input
                    type="text"
                    className="w-full bg-zinc-800 p-2 mt-1 mb-2 text-white"
                    value={tagColor}
                    onChange={(e) => setTagColor(e.target.value)}
                  />
                </label>
              </>
            )}
            <button className="p-1 bg-blue-500 text-white font-semibold rounded-md mt-3">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Foreground;

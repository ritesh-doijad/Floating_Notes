import React from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseSharp, IoScale } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = (props) => {
    console.log(props)
  return (
    <motion.div drag dragConstraints={props.reference} whileDrag={{scale:1.1}} dragElastic={.1} className=" m-2 overflow-hidden relative w-60 h-72 rounded-[45px] px-8 py-10 bg-zinc-900/70 text-white ">
      <AiOutlineFileText />
      <p className=" text-sm leading-tight mt-4 font-semibold ">
        {props.data.note}
      </p>
      <div className=" absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-4 ">
          <h5>{props.data.filesize}</h5>
          <span className="w-7 h-7 flex justify-center bg-zinc-600 rounded-full items-center">
            {props.data.close ? (
              <IoCloseSharp size=".7em " color="#fff" />
            ) : (
              <MdOutlineFileDownload size=".7em " color="#fff" />
            )}
          </span>
        </div>
        {props.data.tag.isOpen && (
           <div className="w-full py-3 flex items-center justify-center" style={{ background: `${props.data.tag.tagColor}` }}>
            <h3 className="text-sm font-semibold">{props.data.tag.title}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;

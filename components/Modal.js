import { useRecoilState } from "recoil"
import { modalState } from "../atoms/index"
import { useRef, useState } from 'react';
import { BsFillCameraFill } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { MdDelete } from 'react-icons/md';

function Modal() {
    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const filePickerRef = useRef(null);
    const [caption, setCaption] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const addImgToPost = e => {
        const reader = new FileReader();
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = readerEvent => setSelectedFile(readerEvent.target.result)
    }
    console.log(selectedFile)
    const uploadPost = async () => {
        if(loading) return;
        setLoading(true);
        const newPost = await fetch('/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                author: session.user.name,
                caption: caption,
                authorImg: session.user.image,
                photo: selectedFile,
                createdAt: new Date().toString()
            })
        })
        setOpen(false);
        setLoading(false);
        setSelectedFile(null);
    }
    
    return (
        <>
            <div className="flex top-32
            overflow-x-hidden overflow-y-auto fixed z-50 h-auto">
                {open ? (
                <div className={`fixed z-50 my-6 p-6 mx-auto max-w-3xl border-0 rounded-lg overflow-y-scroll
                shadow-lg shadow-inner no-scrollbar relative flex flex-col justify-around ease-in-out duration-150
                text-white bg-gray-100 hover:bg-gray-200 outline-none 
                focus:outline-none min-h-[40vh] w-[32vw] border border-[1px] border-black`}>
                    <div as="h3" className="text-center text-lg loading-6 font-medium text-gray-900">
                        Upload a Photo
                    </div>
                    <div>
                        <input type="file" hidden ref={filePickerRef} onChange={addImgToPost}/>
                    </div>
                    <div className="mt-2 h-full">
                        <textarea type="text" 
                            className="min-h-[30vh] border-none text-black resize-none focus:ring-0 p-2 w-full" 
                            placeholder="Please Enter Caption..." onChange={e => setCaption(e.target.value)}>
                        </textarea>
                    </div>
                    <p className="cursor-pointer text-bold text-red-400 p-2 m-2 rounded-lg absolute right-0 top-0
                        hover:text-red-500" 
                        onClick={() => {
                            setSelectedFile(null)
                            setOpen(false)}
                        }>
                        <MdDelete className="text-3xl"/>
                    </p>
                    <div onClick={() => filePickerRef.current.click()} className="flex flex-col items-center justify-center mt-3 text-center sm:mt-5">
                        {selectedFile ? (
                            <img src={selectedFile} className="w-1/3 h-full p-2 cursor-pointer" alt="..."
                            onClick={() => setSelectedFile(null)}/>
                        ) : (
                            <BsFillCameraFill className="h-6 w-6 text-blue-600" aria-hidden="true" />
                        )}
                    </div>
                    <button onClick={() => uploadPost()} 
                    className="inline-flex justify-center w-full rounded-lg shadow-sm px-4
                    py-2 text-white font-medium bg-blue-500 hover:bg-blue-700
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300">
                        {!loading ? <>Finish</> : <>Uploading...</>}
                    </button>
                </div>
                ) : null}
            </div>
        </>
    )
}

export default Modal;
import ModalEmail from "./ModalEmail";
import ModalDelete from "./ModalDelete";
import CloseBttn from './CloseBttn';

export default function Modal({setModalVisible, modalContent, group}) {

    function onClose() {
        setModalVisible(false);
    }

    return (
        <>
        <div onClick={onClose} className="absolute -m-5 w-screen h-screen bg-slate-300 backdrop-blur-sm bg-opacity-50 flex justify-center items-center">
            <div onClick={(e) => e.stopPropagation()} className="w-1/2 h-1/2 overflow-scroll flex flex-col gap-4 max-w-screen-sm min-w-[300px] min-h-[300px] bg-slate-50 rounded-md shadow-lg p-5">
                
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl'>{modalContent}</h1>
                    <CloseBttn setModalVisible={setModalVisible} />
                </div>
                {
                    modalContent === 'Email' ?
                    <ModalEmail setModalVisible={setModalVisible}/> :
                    modalContent === 'Delete Group' ?
                    <ModalDelete group={group}/> :
                    ''
                }   
                
            </div>
        </div>
        </>
    )
}
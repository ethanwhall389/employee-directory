import CloseIcon from '@mui/icons-material/Close';


export default function CloseBttn({onRequestClose}) {
    
    function onClose() {
        onRequestClose();
    }
    
    return (
        <div onClick={onClose} className="hover:cursor-pointer rounded-full p-1 bg-blue-300 w-10 h-10 flex justify-center items-center">
            <CloseIcon />
        </div>
    )
}
import CloseBttn from './CloseBttn';

export default function Modal({isVisible, onRequestClose, children}) {
    
    return isVisible ? (
        <div onClick={onRequestClose} className="absolute -m-5 w-screen h-screen bg-slate-300 backdrop-blur-sm bg-opacity-50 flex justify-center items-center">
            <div onClick={(e) => e.stopPropagation()} className="w-1/2 h-1/2 overflow-scroll flex flex-col gap-4 max-w-screen-sm min-w-[300px] min-h-[300px] bg-slate-50 rounded-md shadow-lg p-5">
                <CloseBttn onRequestClose={onRequestClose} />
                {children}     
            </div>
        </div>
    ) : null;
}
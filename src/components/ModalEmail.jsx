export default function ModalEmail({setModalVisible}) {

    function onClose() {
        setModalVisible(false);
    }

    return (
        <>
        <div>
            <textarea name="message" id="message" cols="30" rows="5" className='w-full border-2 border-blue-300 p-1'></textarea>
        </div>
        <button onClick={onClose} className='bg-blue-300 p-2 px-4 rounded-full'>Send</button>
        </>
    )
}
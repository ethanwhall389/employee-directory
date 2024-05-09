export default function ModalNewGroup() {

    return (
        <>
        <div className="h-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-lg">Create a new group</h1>
                <p>This action cannot be undone</p>
            <button className='bg-blue-300 p-2 px-4 mt-6 rounded-full w-full'>Yes, delete</button>
            </div>
        </div>
        </>
    )
}
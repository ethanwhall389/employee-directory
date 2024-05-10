import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({setSearchQuery}) {
    
    function handleChange(e) {
        setSearchQuery(e.target.value);
    }
    
    return(
        <div className='flex justify-center'>
        <div className="grow my-2 max-w-screen-md border-2 border-slate-500 px-3 rounded-full flex items-center gap-2 focus-within:border-blue-300 focus-within:shadow-outline-blue">
            <SearchIcon/>
            <input className="text-lg w-full py-2 bg-transparent border-none outline-none" type="text" onChange={handleChange} />
        </div>
        </div>
            
    )

}
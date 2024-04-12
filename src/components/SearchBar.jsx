export default function SearchBar({setSearchQuery}) {
    
    function handleChange(e) {
        setSearchQuery(e.target.value);
    }
    
    return(
        <input type="text" onChange={handleChange} />
    )

}
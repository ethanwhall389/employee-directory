export default function MenuOption({optionLogo, optionText, cb}) {

    function handleClick() {
        cb();
    }

    return (
        <div onClick={handleClick} title={optionText} className="hover:cursor-pointer">
            {optionLogo}
        </div>

    )
}
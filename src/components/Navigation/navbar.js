const Navbar = () => {

    return (

        <div className="w-[70%] h-10 mt-[2rem] flex justify-between">
            <a href="/">
                <img className="h-10 cursor-pointer" src="/assets/images/logo_futura.png" alt="" />
            </a>
            <ul className="flex items-end space-x-[2rem] children:font-helvetica children:cursor-pointer uppercase text-sm">
                <li><a href="/boutique">boutique</a></li>
                <li>a propos</li>
                <li>autres</li>
                <li>panier (0)</li>
            </ul>
        </div>

    );

};

export default Navbar;
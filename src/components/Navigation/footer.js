const Footer = () => {

    return (

        <footer className="h-auto w-[70%] py-8 mt-8 flex flex-col items-center justify-center">
            <div className="flex space-x-8 children:font-helvetica text-[10px] uppercase">
                <a href='https://www.instagram.com/thelongitudebrand/' target={'blank'}>instagram</a>
                <p>twitter</p>
                <p>contact</p>
                <p>livraisons</p>
                <p>à propos</p>
            </div>
            <div className="flex space-x-8 children:font-helvetica text-[10px] uppercase">
                <p>conditions générales</p>
                <p>politique de confidentialité</p>
            </div>

            <div className="children:font-helvetica text-[12px] uppercase mt-4">
                <p>© 2023 longitude vêtements / the longitude brand</p>
            </div>

        </footer>

    );

};

export default Footer;
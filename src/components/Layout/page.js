import Navbar from "../Navigation/navbar";
import Footer from "../Navigation/footer";

const Page = ({ children }) => {

    return (

        <main className="h-auto w-full flex flex-col items-center">
            <Navbar/>
            {children}
            <Footer/>
        </main>

    );

};

export default Page;
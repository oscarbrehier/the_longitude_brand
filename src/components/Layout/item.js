import Image from "next/image";

const Item = ({ title, image, price, route}) => {

    return (

        <a href={`/boutique/${route}`} className="h-max w-auto flex flex-col">
            <div className="unset-img">
                <Image className="bg-[#f2f2f2] py-20 custom-img" src={image} alt="" layout="fill" />
            </div>
            <div className="flex flex-col items-center mt-4">
                <p className="uppercase font-helvetica text-sm">{title}</p>
                <p className="text-md">{price}€</p>
            </div>
        </a>


    );

};

export default Item;
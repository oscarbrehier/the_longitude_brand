import Components from '../../../components/main';
import { useState } from 'react';
import client from '../../api/client';

export const getServerSideProps = async ({ params }) => {

    const res = await client.fetch(`*[_id in path("${params.id}")]`);
    const add = await client.fetch('*[_type == "item"]');

    if (res.length == 0) return { notFound: true };

    const base = 'https://cdn.sanity.io/images/votft28a/production/';
    const img = res[0].item_image.asset._ref;
    res['image_url'] = base + img.slice(6).replace('-png', '.png');

    return {
        props: {
            res, add, params
        }
    };

};

const Item = ({ res, add, params }) => {

    const [size, setSize] = useState([1, 0, 0]);
    let data = [];
    let chosen = [];

    while (chosen.length != 4) {

        let number = Math.floor(Math.random() * add.length);
        if(!chosen.includes(number)) chosen.push(number);

    }

    add.map((item, i) => {

        const img = item.item_image.asset._ref;
        const base = 'https://cdn.sanity.io/images/votft28a/production/';
        item['image_url'] = base + img.slice(6).replace('-png', '.png');
        if(chosen.includes(i) && item._id != params.id) data.push(item);

    });

    console.log(data);

    const handleSize = (size) => {



        switch (size) {
            case 's':
                setSize([1, 0, 0])
                break;

            case 'm':
                setSize([0, 1, 0])
                break;

            case 'l':
                setSize([0, 0, 1])
                break;

            default:
                break;
        }

    }

    return (

        <Components.Page>

            <section className='h-auto w-[70%] mt-8 flex'>
                <div className='w-1/2'>
                    <img className="bg-[#f2f2f2] py-20" src={res.image_url} alt="" />
                </div>
                <div className='w-1/2 pl-8 flex flex-col justify-between'>
                    <div className='flex flex-col'>
                        <h1 className='uppercase text-lg'>{res[0].title}</h1>
                        <p className=''>{res[0].price}€</p>

                        <div className='mt-5'>
                            <p className='uppercase text-[12px]'>taille</p>
                            <div className='flex space-x-2 mt-2 children:cursor-pointer'>
                                <div onClick={(e) => handleSize('s')} className={`border-black border-[1px] py-1 px-5 ${size[0] == 0 ? '' : 'bg-black text-white'}`}>S</div>
                                <div onClick={(e) => handleSize('m')} className={`border-black border-[1px] py-1 px-5 ${size[1] == 0 ? '' : 'bg-black text-white'}`}>M</div>
                                <div onClick={(e) => handleSize('l')} className={`border-black border-[1px] py-1 px-5 ${size[2] == 0 ? '' : 'bg-black text-white'}`}>L</div>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <button className='px-5 py-1 border-black border-[1px] uppercase font-semibold'>
                                ajoute au panier
                            </button>
                        </div>

                        <div className='mt-5'>
                            <p className='w-2/3 text-sm'>Non irure ut sunt culpa sit commodo aliqua quis id officia irure exercitation amet non. Ullamco et aliqua eiusmod ex dolor. Ipsum ipsum est consequat nulla velit nisi. Dolore mollit nisi anim tempor nostrud. Non pariatur nostrud est occaecat officia sint consectetur dolor.</p>
                        </div>
                    </div>

                    {/* <div className='h-auto flex flex-col space-y-2'>
                        <p className='uppercase text-[12px]'>Coloris</p>
                        <div onClick={handleClick}>
                            <img className="bg-[#f2f2f2] h-36 py-8 px-2" src={`/assets/clothing/t-shirt/${inactive}.png`} alt="" />
                        </div>
                    </div> */}

                </div>
            </section>

            <section className='h-auto w-[70%] mt-16 space-y-4'>
                <h2 className='uppercase text-lg'>vous pourriez aussi aimer</h2>
                <div className='grid-4 w-2/3'>
                    <img className="bg-[#f2f2f2] py-12 px-2 " src={res.image_url} alt="" />
                    <img className="bg-[#f2f2f2] py-12 px-2 " src={res.image_url} alt="" />
                    <img className="bg-[#f2f2f2] py-12 px-2 " src={res.image_url} alt="" />
                    <img className="bg-[#f2f2f2] py-12 px-2 " src={res.image_url} alt="" />

                </div>
            </section>

        </Components.Page>

    );

};

export default Item;
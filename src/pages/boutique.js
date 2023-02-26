import { useEffect, useState } from 'react';
import Components from '../components/main';

import client from './api/client';

export const getStaticProps = async () => {

    const res = await client.fetch('*[_type == "item"]');
    console.log(res);

    return {
        props: {
            res
        }
    }

};


const Shop = ({ res }) => {

    let data = [];

    const [category, setCategory] = useState();

    res.map((item) => {

        const img = item.item_image.asset._ref;
        const base = 'https://cdn.sanity.io/images/votft28a/production/';
        item['image_url'] = base + img.slice(6).replace('-png', '.png');
        data.push(item);

    });

    return (

        <Components.Page>

            <div className='h-auto w-[70%] mt-8 space-x-4 uppercase text-sm flex children:cursor-pointer'>
                <a href="/boutique">tous</a>
                <a href='/boutique/t-shirt' className='text-[#a5a5a5]'>t-shirt</a>
                <a href='/boutique/tank-top' className='text-[#a5a5a5]'>débardeur</a>
            </div>

            <div className="h-auto w-[70%] mt-[2rem] grid-2">          

                {data.map((d) => (
                    <Components.Item title={d.title} image={d.image_url} price={52} route={`${d.type}/${d._id}`} />
                ))}

            </div>

        </Components.Page>

    );

};

export default Shop;
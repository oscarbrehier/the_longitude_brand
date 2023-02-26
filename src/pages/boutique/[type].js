import Components from '../../components/main';
import client from '../api/client';

export const getServerSideProps = async ({ params }) => {

    const res = await client.fetch(`*[type in path("${params.type}")]`);
    console.log(res);

    return {
        props: {
            res, params
        }
    }

};

const Type = ({ res, params }) => {

    let data = [];

    res.map((item) => {

        const img = item.item_image.asset._ref;
        const base = 'https://cdn.sanity.io/images/votft28a/production/';
        item['image_url'] = base + img.slice(6).replace('-png', '.png');
        data.push(item);

    });

    return (

        <Components.Page>

            <div className='h-auto w-[70%] mt-8 space-x-4 uppercase text-sm flex children:cursor-pointer'>
                <a className='text-[#a5a5a5]' href='/boutique'>tous</a>
                <a className={params.type == 't-shirt' ? '' : "text-[#a5a5a5]"} href="/boutique/t-shirt">t-shirt</a>
                <a className={params.type == 'tank-top' ? '' : "text-[#a5a5a5]"} href="/boutique/tank-top">débardeur</a>
            </div>

            <div className="h-auto w-[70%] mt-[2rem] grid-2">          

                {data.map((d) => (
                    <Components.Item title={d.title} image={d.image_url} price={52} route={`${params.type}/${d._id}`} />
                ))}

            </div>

        </Components.Page>

    );

};

export default Type;
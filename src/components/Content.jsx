import { useLoaderData } from "react-router-dom";
import imagePlaceHolder from '../assets/404.jpg'
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData();
    const { title, cover_image, tags, body_html } = blog;
    console.log(body_html)
    return (
        <div className="hover:bg-base-200 border-2 p-2 border-opacity-30 duration-200 group hover:no-underline focus:no-underline rounded">
            <img role="presentation" className="object-cover w-full rounded h-44" src={cover_image || imagePlaceHolder} />
            <div>
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400 dark:border-gray-600">
                    {
                        tags?.map(tag => <a key={tag} className="px-3 py-1 rounded-sm hover:underline">{tag}</a>)
                    }
                </div>
            </div>
            <div className="">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                {/* https://www.npmjs.com/package/react-markdown?activeTab=readme */}
                {/* https://www.npmjs.com/package/rehype-raw */}
                <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
            </div>
        </div>
    );
};

export default Content;
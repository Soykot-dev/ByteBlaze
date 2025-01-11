import { Link } from "react-router-dom";
import imagePlaceHolder from '../assets/404.jpg'
import PropTypes from "prop-types";
import { MdBookmarkRemove } from "react-icons/md";

const BlogCard = ({ blog, deletable, handleDelete }) => {
    const { id, title, cover_image, published_at, description } = blog;
    return (
        <div className="flex relative">
            <Link to={`/blog/${id}`} className="bg-base-200 hover:bg-base-300 max-w-sm mx-auto transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 duration-200 group hover:no-underline focus:no-underline p-2 rounded">
                <img role="presentation" className="object-cover w-full rounded h-44" src={cover_image || imagePlaceHolder} />
                <div className="">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs">{new Date(published_at).toLocaleDateString()}</span>
                    <p className="">{description}</p>
                </div>
            </Link>
            {
                deletable && <div onClick={(() => handleDelete(id))} className="absolute -top-5 -right-5 bg-primary p-3 rounded-full bg-opacity-60 hover:bg-opacity-90 cursor-pointer hover:scale-105 duration-100 overflow-hidden">
                    <MdBookmarkRemove size='20' className="text-secondary" />
                </div>
            }
        </div>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.object.isRequired,
    deletable: PropTypes.bool,
    handleDelete: PropTypes.func
}

export default BlogCard;
import { Link } from "react-router-dom";
import imagePlaceHolder from '../assets/404.jpg'
import PropTypes from "prop-types";

const BlogCard = ({ blog }) => {
    const { id, title, cover_image, published_at, description } = blog;
    return (
        <Link to={`${id}`} className="bg-base-200 hover:bg-base-300 max-w-sm mx-auto transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 duration-200 group hover:no-underline focus:no-underline p-2 rounded">
            <img role="presentation" className="object-cover w-full rounded h-44" src={cover_image || imagePlaceHolder} />
            <div className=" space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs ">{new Date(published_at).toLocaleDateString()}</span>
                <p>{description}</p>
            </div>
        </Link>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.object.isRequired
}

export default BlogCard;
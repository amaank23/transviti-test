import PostUser from "./PostUser";
import PostContent from "./PostContent";
import PostActions from './PostActions'
import { PropTypes } from "prop-types";
import { Divider } from 'antd'
import PostsCommentAdd from "./PostsCommentAdd";

const Post = ({ text, images }) => {
  return (
    <div className="bg-white p-4 rounded-xl mb-4">
      <PostUser />
      <PostContent text={text} images={images} />
      <Divider className="mb-4" />
      <PostActions />
      <Divider className="mt-4"  />
      <PostsCommentAdd />
    </div>
  );
};

Post.propTypes = {
    text: PropTypes.string.isRequired,
    images: PropTypes.array,
  };
  

export default Post;

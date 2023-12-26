import { PropTypes } from "prop-types";

const PostContent = ({ text, images }) => {
  return (
    <div className="mt-6">
      <p className="text-sm text-[#2D3139]">{text}</p>
      {images?.length && (
        <div className="grid grid-cols-2 h-[331px] gap-4 mt-6">
          {images?.map((item, i) => {
            return (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={
                  i === 0
                    ? {
                        gridRowStart: 1,
                        gridRowEnd: 3,
                      }
                    : {}
                }
              >
                <img src={item} className="w-full h-full" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

PostContent.propTypes = {
  text: PropTypes.string.isRequired,
  images: PropTypes.array,
};

export default PostContent;

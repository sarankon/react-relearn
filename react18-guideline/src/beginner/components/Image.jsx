import PropTypes from 'prop-types';

export default function Image({ imageUrl }) {
    return (
        <>
            <div>
                <div>Image URL: { imageUrl }</div>
                <div> <img src={imageUrl} style={{width:"250px"}}/></div>
            </div>
        </>
    )
}

Image.propTypes = {
    imageUrl: PropTypes.string
}
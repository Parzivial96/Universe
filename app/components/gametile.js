import { useState } from "react";

export default function GameTile(data) {
    const [liked, setLiked] = useState(false);
    const handleLikeClick = () => {
        setLiked(!liked);
    };

    const banner = "http://127.0.0.1:8000" + data.imageurl;
    return (
        <div className="gametilecontainer">
            <img src={banner} />
            <h3>{data.title}</h3>
            <div className="like">
                <img src={liked ? 'images/heart-filled.jpg' : 'images/heart.jpg'} alt="like" id="like" onClick={ handleLikeClick } />
            </div>
            <div className="buynowcontainer">
                {data.price === 0 ? ( <p>Free</p>) : ( <p>₹ {data.price}</p> )}
                <input type="button" value="Buy Now" />
            </div>
        </div>
    );
}
import React from "react";

const Meme = () => {
    return (
        <div className="form--container">
            <form>
                <input type="text" className="form--input" placeholder="Top text" />
                <input type="text" className="form--input" placeholder="Bottom text" />
                <button className="form--button">Get a new meme image</button>
            </form>
        </div>
    );
};

export default Meme;
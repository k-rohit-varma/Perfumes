const Card = (props) => {
    const item = props.perfume;
    return (
        <div className="p-5 flex ">
            <div className="w-64 bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 rounded-3xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-white object-cover p-5">
                  
                    <img
                        src={item.Image}
                        alt={item.name}
                        className="w-full h-40 object-cover rounded-lg"
                    />
                   
                    <div className="mt-4">
                        <h2 className="text-lg font-bold tracking-tight">Name: {item.name}</h2>
                        <p className="text-sm">Type: {item.short_dir}</p>
                        <p className="text-md font-semibold">Price: ${item.price}</p>
                        <p className="text-sm">Items Left: {item.piecesAvailable}</p>
                    </div>
    
                    <div className="mt-4">
                        <button className="w-full bg-white text-purple-700 font-semibold py-2 rounded-lg transition duration-300 hover:bg-purple-600 hover:text-white">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

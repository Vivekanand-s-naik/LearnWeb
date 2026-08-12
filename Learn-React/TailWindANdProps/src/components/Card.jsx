function Card(props){
    const description = props.description ||'Lorem, ipsum dolor.' ;
    const rank = props.rank || 35;
    const visitingPrice = props.visitingPrice || 5;
    return (
    <div className=" w-72 flex flex-col rounded-xl glass  min-h-72 mt-3 ">
      <div>
        <img
          src="https://images.pexels.com/photos/36129739/pexels-photo-36129739.png"
          alt="test"
          width="300"
          height="300"
          className="rounded-t-xl w-full"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl text-amber-50">
        <div className="flex justify-between">
          <h1 className="font-RubikBold ">{description}</h1>
          <h1 className="font-bold font-RubikBold">VisitingPrice</h1>
        </div>
        <div className="flex  justify-between font-mono">
          <p>{rank}</p>
          <p>{visitingPrice}</p>
        </div>
      </div>
    </div>
    );
}

export default Card;
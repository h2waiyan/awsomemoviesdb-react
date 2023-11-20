export const Cast = (props) => {
  console.log(props.casts["name"]);
  return (
    <div className="">
      <img
        className="flex-shrink-0 m-3 h-24 w-24 rounded-full object-fit"
        src={`https://image.tmdb.org/t/p/original${props.casts["profile_path"]}`}
        alt=""
      />

      <h1>{props.casts["name"]}</h1>
      <h1>{props.casts["character"]}</h1>
    </div>
  );
};

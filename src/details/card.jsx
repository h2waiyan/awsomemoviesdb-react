import userpic from "../assets/images/user.png";

export const Cast = ({ casts }) => {
  return (
    <div className="flex-shrink-0 p-5">
      <img
        className="w-40 h-40 rounded-full object-cover"
        src={
          casts["profile_path"] == undefined || null
            ? userpic
            : `https://image.tmdb.org/t/p/original${casts["profile_path"]}`
        }
        alt=""
      />
      <h1 className="pt-5 font-bold">{casts["name"]}</h1>
      <h1>{casts["character"]}</h1>
    </div>
  );
};

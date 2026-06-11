
type Props = {
  name: string;
};

function getImage(name: string) {
  return (
    "/cards/" +
    name
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/'/g, "") +
    ".jpg"
  );
}

export default function TarotCard({ name }: Props) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      shadow-xl
      overflow-hidden
      border
      hover:scale-105
      hover:shadow-2xl
      transition-all
      duration-300
      cursor-pointer
      "
    >
      <img
        src={getImage(name)}
        alt={name}
        className="w-full aspect-[2/3] object-cover"
      />

      <div className="p-4">

        <h3 className="font-bold text-lg text-center">

          {name}

        </h3>

      </div>
    </div>
  );
}

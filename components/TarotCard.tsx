
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
    ".png"
  );
}

export default function TarotCard({ name }: Props) {
  return (
    <div
      className="
      group
      rounded-3xl
      overflow-hidden
      bg-white
      shadow-lg
      border
      border-gray-200
      hover:-translate-y-2
      hover:shadow-2xl
      transition-all
      duration-300
      "
    >
      <div className="bg-gray-100">

        <img
          src={getImage(name)}
          alt={name}
          className="
          w-full
          aspect-[2/3]
          object-cover
          group-hover:scale-105
          transition-all
          duration-300
          "
        />

      </div>

      <div className="p-5">

        <h3 className="text-xl font-bold text-center">

          {name}

        </h3>

        <p className="text-gray-500 text-center mt-2 text-sm">

          Click to reveal deeper meaning

        </p>

      </div>

    </div>
  );
}

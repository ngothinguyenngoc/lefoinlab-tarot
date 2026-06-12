
type Props = {
  reading: string;
};

export default function ReadingBox({ reading }: Props) {

  if (!reading) return null;

  return (

    <div className="mt-10">

      <div className="
        rounded-2xl
        bg-white
        shadow-xl
        border
        p-8
      ">

        <h2 className="text-3xl font-bold mb-6">

          🔮 Le Foin ®  Tarot Reading

        </h2>

        <div
          className="
          whitespace-pre-wrap
          leading-8
          text-gray-700
          text-lg
          "
        >

          {reading}

        </div>

      </div>

    </div>

  );

}

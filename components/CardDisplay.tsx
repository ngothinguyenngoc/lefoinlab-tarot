type Props = {
  cards: string[];
};

export default function CardDisplay({ cards }: Props) {

  if (cards.length === 0) return null;

  return (

    <div className="mt-10">

      <h2 className="text-2xl font-bold mb-6">

        🃏 Your Cards

      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {cards.map((card) => (

          <div
            key={card}
            className="rounded-xl border bg-white shadow-lg p-6 text-center hover:scale-105 transition"
          >

            <div className="text-5xl mb-4">

              🃏

            </div>

            <h3 className="font-bold text-lg">

              {card}

            </h3>

          </div>

        ))}

      </div>

    </div>

  );

}
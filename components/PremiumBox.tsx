type Props = {
  onUnlock?: () => void;
};

export default function PremiumBox({
  onUnlock,
}: Props) {

  return (

    <div className="mt-10 rounded-2xl border border-purple-200 bg-purple-50 p-6 shadow">

      <h3 className="text-2xl font-bold mb-3">

        ✨ Unlock Full Reading

      </h3>

      <p className="text-gray-700 mb-6">

        Get a complete interpretation including:

      </p>

      <ul className="list-disc ml-6 mb-6 space-y-2">

        <li>❤️ Love</li>

        <li>💼 Career</li>

        <li>💰 Finance</li>

        <li>🌙 Hidden Influences</li>

        <li>🔮 Future Advice</li>

      </ul>

      <button
        onClick={onUnlock}
        className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-xl font-bold"
      >

        Unlock Full Reading • $5

      </button>

    </div>

  );

}
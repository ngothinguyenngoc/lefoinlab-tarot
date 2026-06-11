
type Props = {
  name: string;
  question: string;
  loading: boolean;
  setName: (v: string) => void;
  setQuestion: (v: string) => void;
  onDraw: () => void;
};

export default function TarotForm({
  name,
  question,
  loading,
  setName,
  setQuestion,
  onDraw,
}: Props) {
  return (
    <div className="space-y-4">

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className="border rounded-xl w-full p-3"
      />

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Your Question"
        className="border rounded-xl w-full p-3"
      />

      <button
        onClick={onDraw}
        disabled={loading}
        className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90"
      >
        {loading ? "🔮 Reading..." : "Draw Cards"}
      </button>

    </div>
  );
}

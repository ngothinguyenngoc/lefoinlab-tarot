
export default function LoadingSpinner() {
  return (
    <div className="mt-10 text-center">

      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>

      <p className="mt-4 text-lg font-semibold text-purple-700">
        🔮 Reading your cards...
      </p>

    </div>
  );
}


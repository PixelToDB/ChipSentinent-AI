import AnimatedWrapper from "./AnimatedWrapper";

export default function DecisionPanel({ decision }: any) {
  return (
    <AnimatedWrapper>
      <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800 shadow-md mt-6">
        <h2 className="font-semibold text-white mb-2">🤖 AI Decision</h2>

        <p className="text-gray-300">
          <strong className="text-white">Action:</strong>{" "}
          {decision?.action || "Analyzing..."}
        </p>

        <ul className="list-disc ml-5 mt-2 text-gray-300">
          {decision?.alternatives?.map((alt: string, i: number) => (
            <li key={i}>{alt}</li>
          ))}
        </ul>

        <p className="text-gray-500 mt-2">
          {decision?.message}
        </p>
      </div>
    </AnimatedWrapper>
  );
}
import AnimatedWrapper from "./AnimatedWrapper";

export default function RegulationFeed({ alert }: any) {
  return (
    <AnimatedWrapper>
      <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800 shadow-md">
        <h2 className="text-white mb-2">🌍 Regulation Feed</h2>

        <p className="text-gray-300">
          {alert.restricted_from} restricts {alert.material} →{" "}
          {alert.restricted_to}
        </p>
      </div>
    </AnimatedWrapper>
  );
}
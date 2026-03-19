import AnimatedWrapper from "./AnimatedWrapper";

export default function AlertPanel({ alert, risk }: any) {
  return (
    <AnimatedWrapper>
      <div className="bg-gradient-to-r from-red-500/10 to-red-500/5 
p-6 rounded-2xl border border-red-500/20 shadow-lg backdrop-blur">
        <h2 className="font-semibold text-red-400 mb-2">
  🚨 Trade Restriction
</h2>

<p className="text-xl font-semibold text-white">
  {alert.material}
</p>

<p className="text-gray-300">
  {alert.restricted_from} → {alert.restricted_to}
</p>

<p className="mt-2 font-semibold text-red-400">
  Risk: {risk?.risk_level || "Analyzing..."}
</p>
      </div>
    </AnimatedWrapper>
  );
}
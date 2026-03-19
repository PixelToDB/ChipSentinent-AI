import AnimatedWrapper from "./AnimatedWrapper";

export default function ShipmentsTable({ risk }: any) {
  return (
    <AnimatedWrapper>
      <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800 shadow-md hover:shadow-xl transition">
        <h2 className="font-semibold mb-3">📦 Shipments</h2>

        <div className="flex justify-between">
          <span>SHP001</span>
          <span>Gallium</span>

          <span
            className={`font-semibold ${
              risk?.affected_shipments?.includes("SHP001")
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {risk?.affected_shipments?.includes("SHP001")
              ? "At Risk"
              : "Safe"}
          </span>
        </div>
      </div>
    </AnimatedWrapper>
  );
}
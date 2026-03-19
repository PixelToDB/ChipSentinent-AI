// ******** For demo purposes, this hook simulates an API call with mocked data. ********

import { useState } from "react";

export const useAnalysis = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
  setLoading(true);

  await new Promise((r) => setTimeout(r, 500));

  setData({
    alert: {
      material: "Gallium",
      restricted_from: "China",
      restricted_to: "US",
    },
  });

  await new Promise((r) => setTimeout(r, 700));

  setData((prev: any) => ({
    ...prev,
    risk: {
      affected_shipments: ["SHP001"],
      risk_level: "HIGH",
    },
  }));

  await new Promise((r) => setTimeout(r, 700));

  setData((prev: any) => ({
    ...prev,
    decision: {
      action: "Switch supplier",
      alternatives: ["Korea Advanced Materials"],
      message: "Shipment at risk",
    },
  }));

  setLoading(false);
};

  return { data, loading, analyze };
};


// ******** For actual API integration, replace the above mock with this: ********

// import { useState } from "react";
// import { analyzeNews } from "@/services/api";

// export const useAnalysis = () => {
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState(false);

//   const analyze = async () => {
//     setLoading(true);
//     const res = await analyzeNews();
//     setData(res);
//     setLoading(false);
//   };

//   return { data, loading, analyze };
// };


// utils/helpers.ts

export const formatConfidence = (confidence?: number) => {
  if (confidence === undefined || confidence === null) return "N/A";
  return `${Math.round(confidence * 100)}%`;
};

export const getRiskColor = (risk?: string) => {
  switch (risk) {
    case "HIGH":
      return "text-red-600";
    case "MEDIUM":
      return "text-yellow-600";
    case "LOW":
      return "text-green-600";
    default:
      return "text-gray-500";
  }
};

export const getRiskBg = (risk?: string) => {
  switch (risk) {
    case "HIGH":
      return "bg-red-100";
    case "MEDIUM":
      return "bg-yellow-100";
    case "LOW":
      return "bg-green-100";
    default:
      return "bg-gray-100";
  }
};

export const safeArray = <T>(arr: T[] | undefined): T[] => {
  return Array.isArray(arr) ? arr : [];
};
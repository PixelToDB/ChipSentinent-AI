// components/Loader.tsx

export default function Loader() {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        
        <p className="text-gray-600 text-sm">
          Analyzing global trade data...
        </p>
      </div>
    </div>
  );
}
export default function SectionTitle({ children }) {
  return (
    <h2 className="text-2xl font-bold border-b-4 border-blue-700 inline-block mb-6">
      {children}
    </h2>
  );
}
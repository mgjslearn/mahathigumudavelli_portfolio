// Select component placeholder. Replace with your actual implementation or customize as needed.
export default function Select({ options = [], ...props }) {
  return (
    <select className="border rounded px-3 py-2 bg-background text-foreground" {...props}>
      {options.map((opt, i) => (
        <option key={i} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  );
}

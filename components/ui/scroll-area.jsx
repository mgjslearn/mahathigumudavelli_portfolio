// ScrollArea component placeholder. Replace with your actual implementation or customize as needed.
export default function ScrollArea({ children, ...props }) {
  return (
    <div className="overflow-auto max-h-60 border rounded p-2" {...props}>
      {children}
    </div>
  );
}

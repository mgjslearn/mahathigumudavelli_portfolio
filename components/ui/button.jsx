// Button component placeholder. Replace with your actual implementation or customize as needed.
export default function Button({ children, variant = "primary", ...props }) {
  let base = "px-4 py-2 rounded transition font-semibold ";
  let styles =
    variant === "outline"
      ? base +
        "border border-purple-500 text-purple-500 bg-transparent hover:bg-purple-500 hover:text-black"
      : base +
        "bg-purple-700 text-white hover:bg-purple-800";
  return (
    <button className={styles + (props.className ? ` ${props.className}` : "")} {...props}>
      {children}
    </button>
  );
}

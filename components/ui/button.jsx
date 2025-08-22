export default function Button({ children, variant = "primary", ...props }) {
  let base = "px-4 py-2 rounded transition font-semibold !important ";
  let styles =
    variant === "outline"
      ? base +
        "border border-purple-500 !text-black bg-transparent hover:!bg-purple-500 hover:!text-black"
      : base + "bg-purple-500 !text-black hover:!bg-purple-600 hover:!text-black";
  
  return (
    <button className={styles + (props.className ? ` ${props.className}` : "")} {...props}>
      {children}
    </button>
  );
}

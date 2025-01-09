function BrandButton({ title, key }) {
  return (
    <button
      key={key}
      className="w-[calc(20%-6px)] h-14 bg-[#efecea] text-sm hover:text-blue-400 capitalize rounded-md shrink-0"
    >
      <span>{title}</span>
    </button>
  );
}

export default BrandButton;

function UsListElement({ img, title, body }) {
  return (
    <li className="w-[calc(25%-6px)] h-full rounded-lg bg-white border border-[#cccccc] flex justify-center items-center">
      <div className="w-4/5 h-4/5">
        <div className="w-full h-1/2">
          <img src={img} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="text-center h-1/2">
          <div className="text-2xl font-semibold h-1/2 flex justify-center items-center">
            <h1>{title}</h1>
          </div>
          <div className="text-[0.875rem]">
            <p>{body}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
export default UsListElement;

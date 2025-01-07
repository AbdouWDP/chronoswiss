function FavWatchText({ watch, key }) {
  return (
    <div
      key={key}
      className="w-[calc(25%-12px)] text-sm capitalize hover:text-blue-600"
    >
      <a href="#">
        <p>
          <span>{watch.brand}</span>&nbsp;
          <strong>{watch.name}</strong>
        </p>
      </a>
    </div>
  );
}
export default FavWatchText;

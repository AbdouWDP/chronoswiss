function IgCard({ post, key }) {
  return (
    <li key={key} className="group w-1/4 aspect-square inline-block pl-[5px] pr-[5px] mb-5 cursor-pointer">
      <div className="w-full h-full rounded-md overflow-hidden relative">
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url('${post.img}')`,
          }}
        ></div>
        <div className="w-full h-full absolute opacity-0 group-hover:opacity-100 left-0 top-0">
          <div className="overlay w-full h-full bg-[rgba(0,0,0,0.6)]"></div>
          <div className="w-full h-full text-white text-sm absolute top-0 left-0">
            <div className="w-3/4 m-auto h-full flex items-center">
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default IgCard;

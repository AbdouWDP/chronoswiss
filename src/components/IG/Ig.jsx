import IgCard from "./IgCard";
import { igPosts } from "./igPosts";

function Ig() {
  return (
    <section className="w-screen py-12">
      <div className="w-[90%] m-auto">
        <div className="text-3xl font-semibold pb-6">
          <h2>Nouveau sur Instagram : tendances, inspirations et styles</h2>
        </div>
        <div>
          <ul>
            {igPosts.map((post) => (
              <IgCard post={post} key={post.id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Ig;

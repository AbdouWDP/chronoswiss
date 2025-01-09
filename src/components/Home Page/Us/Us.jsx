import UsListElement from "./UsListElement";

function Us() {
  return (
    <section className="w-screen py-8">
      <div className="w-[90%] m-auto">
        <div className="text-3xl font-semibold">
          <h2> Première plateforme pour les montres de luxe depuis 2003</h2>
        </div>
        <div className="w-full h-60 my-8">
          <ul className="w-full h-full flex justify-between gap-2 flex-wrap">
            <UsListElement
              img={
                "https://static.chrono24.com/images/default/illustrations/buyer-rating.svg"
              }
              title="4,8 sur 5 étoiles"
              body={"parmi 169 000 évaluations dans le monde entier."}
            />
            <UsListElement
              img={
                "https://static.chrono24.com/images/default/illustrations/love-my-watch.svg"
              }
              title="9 millions"
              body={"d'amateurs de montres utilisent Chrono24 chaque mois"}
            />
            <UsListElement
              img={
                "https://static.chrono24.com/images/default/illustrations/handshake.svg"
              }
              title="Plus de 200 000"
              body={
                "acheteurs font confiance chaque année à la Protection des Acheteurs"
              }
            />
            <UsListElement
              img={
                "https://static.chrono24.com/images/default/illustrations/dealer.svg"
              }
              title="Plus de 25 000"
              body={"vendeurs de confiance"}
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Us;

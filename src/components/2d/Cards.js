import { isDesktop } from "react-device-detect";

export default function Cards({ content }) {
  return (
    <main className="stacking-cards">
      <ul id="cards">
        {content.map(({ id, title, url }) => (
          <li class="card" id={id}>
            <div class="card__content">
              {isDesktop ? (
                <>
                  <h3>{title}</h3>
                  <a
                    href={url}
                    class="btn btn--accent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                </>
              ) : (
                <h3 className="card__content-mobile">
                  <a href={url}>{title}</a>
                </h3>
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default function Cards({ content }) {
  return (
    <main className="stacking-cards">
      <ul id="cards">
        {content.map(({ id, title, content }) => (
          <li class="card" id={id}>
            <div class="card__content">
              <div>
                <h3>{title}</h3>
                <p>{content}</p>
                <p>
                  <a href="#top" class="btn btn--accent">
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

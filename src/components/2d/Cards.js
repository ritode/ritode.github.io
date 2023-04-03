export default function Cards({ content }) {
  return (
    <main className="stacking-cards">
      <ul id="cards">
        {content.map(({ id, title, content }) => (
          <li class="card" id={id}>
            <div class="card__content">
              <h3>{title}</h3>
              {/* <p>{content}</p> */}
              <p>
                <a
                  href="https://medium.com/@deritobrita/what-are-arrow-functions-in-javascript-4a14bc16ae4c"
                  class="btn btn--accent"
                >
                  Read more
                </a>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

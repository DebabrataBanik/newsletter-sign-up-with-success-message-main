import Email from "./Email"
function Signup() {
  return (
    <div className="container">
      <section>
        <h1 className="title">Stay updated!</h1>
        <p className="description">Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li><img src="/assets/images/icon-list.svg" alt="list icon" /> Product discovery and buidling what matters</li>
          <li><img src="/assets/images/icon-list.svg" alt="list icon" /> Measuring to ensure updates are a success</li>
          <li><img src="/assets/images/icon-list.svg" alt="list icon" /> And much more!</li>
        </ul>

        <Email />

      </section>
      <aside>
        <picture>
          <source srcSet="assets/images/illustration-sign-up-desktop.svg" media="(min-width: 37.5rem)" />
          <img src="/assets/images/illustration-sign-up-mobile.svg" alt="sign up illustration" />
        </picture>
      </aside>
    </div>
  )
}

export default Signup
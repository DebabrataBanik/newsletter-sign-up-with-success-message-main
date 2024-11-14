
function SuccessCard({ mail }) {
  return (
    <div className="success__card">

      <section>
        <img src="/assets/images/icon-success.svg" alt="success icon" />
        <h2 className="success__title">Thanks for subscribing!</h2>
        <p className="success__description">A confirmation email has been sent to <strong>{mail}</strong>.
          Please open it and click the
          button inside to confirm your subscription</p>

        <button className="dismiss" aria-label="Dismiss success message">Dismiss message</button>
      </section>
    </div>
  )
}

export default SuccessCard
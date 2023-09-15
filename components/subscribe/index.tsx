const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div style={{backgroundImage: 'url(/images/header1.jpeg)'}} className="subscribe__content">
          <h4>Join our newsletter and get access to exclusive weekly offers</h4>

          <form className="subscribe__form">
            <input type="email" placeholder="Email address" />
            <button type="submit" className="btn btn--rounded btn--yellow">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
};


export default Subscribe
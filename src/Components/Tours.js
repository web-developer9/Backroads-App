import Title from './Title'
import { tours } from '../data'
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" span="tours" />

      <div className="section-center featured-center">
        {tours.map((info) => {
          const { id, date, text, title, country, duration, cost, image } = info
          return (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    {country}
                  </p>
                  <p>{duration}</p>
                  <p>{cost}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Tours

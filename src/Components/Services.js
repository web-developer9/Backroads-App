import Title from './Title'
import { serviceData } from '../data'
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" span="services" />
      <div className="section-center services-center">
        {serviceData.map((info) => {
          const { id, icon, title, text } = info
          return (
            <article key={id} className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Services

import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"

export default function Contact() {
  return (
    <Layout>
      <section className="contact">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you. Use the information below or send us a message using the form.</p>

        <div className="contact-grid">
          <div className="contact-info">
            <p><strong>Address:</strong> P. Paredes Street , Sampaloc Manila</p>
            <p><strong>Phone:</strong> (555) 123-4567</p>
            <p><strong>Email:</strong> <a href="mailto:ddgeda@fit.edu.ph">info@FriedDays.co</a></p>
          </div>

          <ContactForm />
        </div>
      </section>
    </Layout>
  )
}

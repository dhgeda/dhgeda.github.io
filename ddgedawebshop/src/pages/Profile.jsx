import Layout from "../components/Layout"
import ProfileInfoRow from "../components/ProfileInfoRow"

export default function Profile() {
  const user = {
    firstName: "Dwyane",
    lastName: "Geda",
    email: "ddgeda@fit.edu.ph",
    mobile: "(555) 123-4567",
    address: "855 P. Paredes Street, Sampaloc, Manila"
  }

  function handleLogout() {
    console.log("User logged out")

    // later:
    // clear auth state
    // redirect to login
  }

  return (
    <Layout>
      <section className="profile-section">
        <h2>User Profile</h2>

        <div className="profile-card">
          <div className="profile-info">
            <ProfileInfoRow label="First Name:" value={user.firstName} />
            <ProfileInfoRow label="Last Name:" value={user.lastName} />
            <ProfileInfoRow label="Email Address:" value={user.email} />
            <ProfileInfoRow label="Mobile Number:" value={user.mobile} />
            <ProfileInfoRow label="Home Address:" value={user.address} />
          </div>

          <div className="profile-actions">
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

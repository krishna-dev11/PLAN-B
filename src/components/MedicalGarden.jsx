import React, { useState } from "react";

const MedicalGarden = () => {
  const [view, setView] = useState("main"); // Track which section to show

  const styles = {
    body: {
      backgroundColor: "black",
      color: "white",
      fontFamily: "Arial, sans-serif",
      margin: 0,
      padding: 0,
    },
    header: {
      backgroundColor: "#0a0a0a",
      padding: "20px",
      textAlign: "center",
    },
    nav: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px",
      marginBottom: "20px",
      backgroundColor: "#1a1a1a",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    navLink: {
      color: "white",
      margin: "0 15px",
      textDecoration: "none",
      fontWeight: "bold",
      padding: "10px",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    navLinkHover: {
      backgroundColor: "#4caf50",
      color: "black",
      borderRadius: "5px",
    },
    container: {
      textAlign: "center",
      marginTop: "50px",
    },
    ctaButton: {
      display: "inline-block",
      padding: "10px 20px",
      backgroundColor: "#4caf50",
      color: "white",
      textDecoration: "none",
      fontWeight: "bold",
      borderRadius: "5px",
      transition: "background-color 0.3s ease",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      margin: "0 auto",
      maxWidth: "1200px",
      padding: "0 20px",
    },
    gridItem: {
      backgroundColor: "#1e1e1e",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      transition: "transform 0.3s ease",
    },
    footer: {
      backgroundColor: "#0a0a0a",
      padding: "20px",
      textAlign: "center",
      marginTop: "50px",
    },
  };

  const showChatPage = () => setView("chat");
  const showAgreementPage = () => setView("agreement");
  const backToMain = () => setView("main");

  return (
    <div style={styles.body}>
      {/* Header */}
      <header style={styles.header}>
        <h1>Medical Garden – Donate Life, Share Hope</h1>
      </header>

      {/* Navigation */}
      <nav style={styles.nav}>
        {view !== "main" && (
          <a href="#" style={styles.navLink} onClick={backToMain}>
            ← Back
          </a>
        )}
        <a href="#" style={styles.navLink}>
          Home
        </a>
        <a href="#" style={styles.navLink}>
          About Us
        </a>
        <a href="#" style={styles.navLink}>
          Contact Us
        </a>
      </nav>

      {/* Conditional Views */}
      {view === "main" && (
        <div style={styles.container}>
          <div>
            <p>Become a Donor Today</p>
            <a href="#" style={styles.ctaButton}>
              Login Now
            </a>
          </div>
          <div style={styles.grid}>
            <div style={styles.gridItem}>
              <h3>Registration Form</h3>
              <a href="#">Start your journey today!</a>
            </div>
            <div style={styles.gridItem}>
              <h3>Chat with AI</h3>
              <a href="#" onClick={showChatPage}>
                Chat with AI now!
              </a>
            </div>
            <div style={styles.gridItem}>
              <h3>Transportation System</h3>
              <a href="#">Learn about transport solutions</a>
            </div>
            <div style={styles.gridItem}>
              <h3>Donation</h3>
              <a href="#">Donate to support the cause</a>
            </div>
            <div style={styles.gridItem}>
              <h3>Agreement</h3>
              <a href="#" onClick={showAgreementPage}>
                Review and agree
              </a>
            </div>
            <div style={styles.gridItem}>
              <h3>Appointment</h3>
              <a href="#">Book an appointment</a>
            </div>
            <div style={styles.gridItem}>
              <h3>Education Hub</h3>
              <a href="#">Explore the education hub</a>
            </div>
            <div style={styles.gridItem}>
              <h3>Insurance</h3>
              <a href="#">View insurance options</a>
            </div>
            <div style={styles.gridItem}>
              <h3>Milestone</h3>
              <a href="#">See milestones and success stories</a>
            </div>
          </div>
        </div>
      )}

      {view === "chat" && (
        <div style={styles.container}>
          <h1>Chat with AI</h1>
          <p>Click the button below to start a conversation with the AI:</p>
          <a
            href="https://talkai.info/chat/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.ctaButton}
          >
            Chat with AI
          </a>
        </div>
      )}

      {view === "agreement" && (
        <div style={styles.container}>
          <h1>Organ Donation Agreement</h1>
          <form>
            <label>Donor Name:</label>
            <input type="text" name="donorName" required />
            <br />
            <label>Donor Age:</label>
            <input type="number" name="age" required />
            <br />
            <label>Blood Group:</label>
            <select name="bloodGroup" required>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
            </select>
            <br />
            <button type="submit">I Agree</button>
          </form>
        </div>
      )}

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2024 Medical Garden</p>
      </footer>
    </div>
  );
};

export default MedicalGarden;

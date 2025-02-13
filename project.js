import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-container">
        <div className="project-card">
  
          <h3>Railway Management System</h3>
          <p>A web-based system for managing train schedules, bookings, and ticketing, built using HTML, CSS, and JavaScript.</p>
          <a href="https://github.com/Sakshi80506/railway-management" target="_blank" rel="noopener noreferrer" className="btn">View on GitHub</a>
        </div>

        <div className="project-card">
         
          <h3>Pharmacy Management System</h3>
          <p>A user-friendly web platform for managing inventory, sales, and customer details for pharmacies, developed using HTML, CSS, and JavaScript.</p>
          <a href="https://github.com/Sakshi80506/pharmacy-management" target="_blank" rel="noopener noreferrer" className="btn">View on GitHub</a>
        </div>

        <div className="project-card">
          
          <h3>Online Cab Booking System</h3>
          <p>A Java-based application that allows users to book, manage, and track cab rides.</p>
          <a href="https://github.com/Sakshi80506/Online-cab-booking-system" target="_blank" rel="noopener noreferrer" className="btn">View on GitHub</a>
        </div>

        <div className="project-card">
          
          <h3>Vegetable buying System</h3>
          <p>A C++ application for managing the purchase of vegetables, allowing users to select, order, and handle payments for vegetable purchases.</p>
          <a href="https://github.com/Sakshi80506/Vegetable_transport-" target="_blank" rel="noopener noreferrer" className="btn">View on GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

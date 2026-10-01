import React from 'react';

function Resume() {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      {/* Header */}
      <header style={{ borderBottom: '2px solid #fff', pb: '10px', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '5px' }}>Brayden Kuppusami</h1>
        <p style={{ fontSize: '1.2rem', color: '#aaa' }}>Student & Athlete | Web Development</p>
      </header>

      {/* Education */}
      <section style={{ marginBottom: '25px' }}>
        <h2>Education</h2>
        <hr />
        <h3>Indiana Tech</h3>
        <p>Bachelor of Science in Computer Science / Web Development</p>
      </section>

      {/* Experience */}
      <section style={{ marginBottom: '25px' }}>
        <h2>Experience</h2>
        <hr />
        <h3>Resident Assistant</h3>
        <p><strong>Indiana Tech</strong></p>
        <ul>
          <li>Managed residential floor communities and facilitated student activities.</li>
          <li>Guided conflict resolution and executed administrative floor tasks.</li>
        </ul>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: '25px' }}>
        <h2>Technical Skills</h2>
        <hr />
        <ul>
          <li><strong>Languages:</strong> JavaScript, HTML5, CSS3, C, C++</li>
          <li><strong>Frameworks & Tools:</strong> React, Bootstrap 5, Git, GitHub Pages</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
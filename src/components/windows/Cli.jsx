import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import './cli.scss'

const Cli = ({ windowName, setWindowState }) => {
  const welcomeMessage = `
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║           Welcome to Rishi's Portfolio Terminal!              ║
║                                                                ║
║  Type 'help' to see all available commands                    ║
║  Type 'about' to learn more about me                           ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
  `;

  const commands = {
    
    about: {
      description: 'Learn more about Rishi Maheshwari',
      usage: 'about',
      fn: () => {
        return `
╔════════════════════════════════════════════════════════════════╗
║                   About Rishi Maheshwari                      ║
╚════════════════════════════════════════════════════════════════╝

A passionate full-stack developer with expertise in modern web 
technologies. Dedicated to creating intuitive, performant, and 
user-friendly applications.

Specialization:
  • Frontend Development (React, Vue, Angular)
  • Backend Development (Node.js, Express, Python)
  • Full-Stack Solutions
  • Web Performance Optimization
  • UI/UX Implementation

Currently focused on building innovative solutions that solve 
real-world problems.`;
      }
    },
    skills: {
      description: 'View technical skills and expertise',
      usage: 'skills',
      fn: () => {
        return `
╔════════════════════════════════════════════════════════════════╗
║                    Technical Skills                           ║
╚════════════════════════════════════════════════════════════════╝

Frontend:
  ✓ React.js          ✓ Vue.js           ✓ JavaScript (ES6+)
  ✓ HTML5 & CSS3      ✓ SASS/SCSS        ✓ Tailwind CSS
  ✓ Responsive Design ✓ Webpack/Vite

Backend:
  ✓ Node.js           ✓ Express.js       ✓ MongoDB
  ✓ PostgreSQL        ✓ REST APIs        ✓ Authentication
  ✓ Python            ✓ Flask

Tools & Platforms:
  ✓ Git & GitHub      ✓ Docker           ✓ AWS
  ✓ VS Code           ✓ Figma            ✓ Linux/Mac/Windows`;
      }
    },
    projects: {
      description: 'See featured projects and portfolio work',
      usage: 'projects',
      fn: () => {
        return `
╔════════════════════════════════════════════════════════════════╗
║                   Featured Projects                           ║
╚════════════════════════════════════════════════════════════════╝

1. Portfolio Website (Current)
   A modern Mac OS-themed portfolio built with React & Vite
   Tech: React, SCSS, Vite
   GitHub: github.com/rishimaheshwari

2. E-Commerce Platform
   Full-stack e-commerce solution with payment integration
   Tech: React, Node.js, MongoDB, Stripe
   Live: [Coming Soon]

3. Task Management App
   Collaborative task management tool with real-time updates
   Tech: React, Firebase, Material-UI
   GitHub: github.com/rishimaheshwari

4. Weather Dashboard
   Real-time weather information with location-based services
   Tech: React, OpenWeather API, Geolocation API
   Live: [Coming Soon]

Type 'contact' to reach out about collaborations!`;
      }
    },
    experience: {
      description: 'View work experience and background',
      usage: 'experience',
      fn: () => {
        return `
╔════════════════════════════════════════════════════════════════╗
║                    Work Experience                            ║
╚════════════════════════════════════════════════════════════════╝

Current Role: Full-Stack Developer
Company: Self-Employed
Duration: 2022 - Present
Responsibilities:
  • Develop full-stack web applications
  • Create responsive and accessible UI components
  • Optimize performance and user experience
  • Collaborate with clients and stakeholders

Previous Experience:
  • Web Developer Intern (2021-2022)
  • Technical Support Specialist (2020-2021)

Education:
  • Bachelor's Degree in Computer Science`;
      }
    },
    contact: {
      description: 'Display contact information and links',
      usage: 'contact',
      fn: () => {
        return `
╔════════════════════════════════════════════════════════════════╗
║                  Contact Information                          ║
╚════════════════════════════════════════════════════════════════╝

Email:    hello@rishimaheshwari.com
Phone:    +1 (555) 123-4567
Location: San Francisco, CA

Social Links:
  • GitHub:    github.com/rishimaheshwari
  • LinkedIn:  linkedin.com/in/rishimaheshwari
  • Twitter:   @rishimaheshwari
  • Portfolio: rishimaheshwari.com

Let's Connect!
Feel free to reach out for collaborations, projects, or just 
a friendly chat about web development.`;
      }
    },
    echo: {
      description: 'Echo a passed string',
      usage: 'echo <string>',
      fn: (...args) => args.join(' ')
    },
    whoami: {
      description: 'Display current user information',
      usage: 'whoami',
      fn: () => 'rishimaheshwari (Full-Stack Developer)'
    },
    pwd: {
      description: 'Print working directory',
      usage: 'pwd',
      fn: () => '/Users/rishimaheshwari/portfolio'
    },
    date: {
      description: 'Show current date and time',
      usage: 'date',
      fn: () => new Date().toString()
    }
  };

  return (
    <MacWindow windowName={windowName}
            
            setWindowState={setWindowState}>
      <div className="cli-window">
        <Terminal.default
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel="rishimaheshwari:~$"
          promptLabelStyle={{ color: '#00ff00' }}
        />
      </div>
    </MacWindow>
  )
}

export default Cli
# Campus Connect Nexus
 
A Smart Student Resource Portal built for **Dr. N.G.P. Institute of Technology**. It helps students access academic resources, announcements, placement information and campus services through a single, responsive website.
 
## Features
 
- Student registration with field validation (name, register number, email, password, phone, DOB, department, gender, ID upload, address)
- Student login with show/hide password toggle
- Academic resource links (NPTEL, GitHub, GeeksforGeeks, Anna University)
- Campus announcements and information
- Contact form with institution details
- Fully responsive layout (desktop and mobile)
## Pages
 
| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Landing page with banner, welcome section, campus info and resource preview |
| About | `about.html` | Portal objectives and features |
| Register | `register.html` | Student registration form |
| Login | `login.html` | Student login form |
| Resources | `resource.html` | Links to learning platforms and study materials |
| Contact | `contact.html` | Contact form and institution details |
 
## Tech Stack
 
- **HTML5** – semantic markup and form controls
- **CSS3** – Flexbox, media queries, hover effects, responsive design
- **JavaScript (Vanilla)** – form validation, DOM manipulation, event handling
## Project Structure
 
```
campus-connect-nexus/
├── index.html
├── about.html
├── register.html
├── login.html
├── resource.html
├── contact.html
├── register.js
├── login.js
├── style.css
└── images/
    ├── logo.png
    ├── banner.jpg
    ├── student.webp
    └── campus.jpg
```
 
## Getting Started
 
No build steps or dependencies required.
 
1. Clone the repository
```bash
   git clone https://github.com/<your-username>/campus-connect-nexus.git
   cd campus-connect-nexus
```
2. Open `index.html` directly in a browser, or serve it locally:
```bash
   python3 -m http.server 8000
```
3. Visit `http://localhost:8000` in your browser.
## Form Validation
 
- **Registration** (`register.js`): checks required fields, password length (min 8 characters), 10-digit phone number, and department selection.
- **Login** (`login.js`): checks required email and minimum 8-character password, with a show/hide password toggle.
## Author
 
Sarumathi H
Dr. N.G.P. Institute of Technology
 
## License
 
This project is for academic purposes.
 

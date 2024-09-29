# 🖥️ My Portfolio

Welcome to my personal portfolio project! This website showcases my work, skills, and experience, offering an overview of my journey as a developer and content creator. The portfolio includes interactive elements like a contact form, Earth 3D canvas, and more to provide an engaging user experience.

![Portfolio Preview](https://github.com/user-attachments/assets/b105bd86-a43b-4da1-89ca-314618c2be7e)

## 🌟 Features

- **Modern and Responsive Design**: Optimized for all screen sizes, including mobile, tablet, and desktop.
- **Interactive Contact Form**: Users can send emails directly through the form.
- **3D Earth Canvas**: Visual interaction with Earth using `three.js` for a creative and engaging UI element.
- **Framer Motion Animations**: Smooth transitions and animations throughout the site, enhancing the overall user experience.
- **Tailwind CSS Integration**: Styled with Tailwind CSS for a fast, modern, and customizable design.

## 🚀 Technologies Used

- **React**: A JavaScript library for building dynamic user interfaces.
- **Framer Motion**: For seamless animations and transitions.
- **Tailwind CSS**: A utility-first CSS framework for responsive design.
- **EmailJS**: To handle the backend of the contact form and send emails.
- **Three.js**: For rendering the 3D Earth Canvas.
- **Vercel/Netlify**: Recommended for hosting the website for free with continuous deployment support.



## 📁 Project Structure

Here's an overview of the main directories and files in the project: (*some of them are ignored because they are default*)

```bash
├── public/                # Public assets (images, icons, etc.)
├── src/
│   ├── components/        # React components (including the contact form)
│   ├── styles/            # Tailwind CSS styles
│   ├── hoc/               # Higher-Order Components (wrapping reusable code)
│   ├── utils/             # Utility functions and animation presets
│   ├── canvas/            # 3D canvas components (EarthCanvas)
│   ├── App.js             # Main App component
│   ├── index.js           # Main entry point of the application
├── index.html             # The main html file
├── postcss.config.js      # Postcss config since we are using Vite and Tailwindcss
├── README.md              # You are here!
├── package.json           # Project dependencies and scripts
└── tailwind.config.js     # Tailwind CSS configuration
```

## 📧 Contact Form Integration

The contact form is powered by **EmailJS**, allowing users to send messages directly through the site. EmailJS provides a seamless connection without the need for a custom backend.

### Contact Form Setup:

1. **Create an account on [EmailJS](https://emailjs.com)**.
2. **Configure your EmailJS service**, template, and user keys.
3. **Update the form configuration** in `contact.jsx`:

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs
    .send(
      'your_service_id', 
      'your_template_id', 
      {
        from_name: form.name,
        to_name: 'Your Name',
        from_email: form.email,
        to_email: 'your_email@example.com',
        message: form.message,
      },
      'your_public_key'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong.');
    });
};
```

## 📦 Installation & Setup

To get this project up and running locally:

1. **Clone the repository**

```
git clone https://github.com/yourusername/your-portfolio.git
cd your-portfolio
```

3. **Install dependencies**:
```
npm install
```

5. **Run the development server**:
```
npm start
```

6. **Build for production**:
```
npm run build
```

## 🖥️ Deployment

You can easily deploy this project on Vercel, Netlify, or any other static hosting platform.

### Deploy on Vercel:

1. Push your project to a Git repository (GitHub, GitLab, etc.).
2. Sign in to [Vercel](https://vercel.com) and import your project.
3. Follow the prompts to deploy your site.

### Deploy on Netlify:

1. Push your project to a Git repository.
2. Sign in to [Netlify](https://netlify.com) and import your project.
3. Set up continuous deployment and build settings.

## 💡 Usage

- **Home Section**: Displays an introduction and key skills.
- **Projects Section**: Showcases various projects, including descriptions, technologies used, and links.
- **Contact Section**: Allows visitors to get in touch via the email form.

## 📷 Screenshots

1. **Home Page**  
   ![Home Page](https://github.com/user-attachments/assets/0fdeab5e-9138-4c31-8b29-5b2e15006637)


2. **Projects Page**  
   ![Tech Section](https://github.com/user-attachments/assets/fc5ef607-3565-4705-ae65-375ec299612e)



3. **Contact Form**  
   ![Contact Form](https://github.com/user-attachments/assets/f5417602-9476-4201-bb51-cda91993e473)

## 🛠️ Contributing

Feel free to fork this repository and make improvements. Contributions, issues, and feature requests are welcome! (*Also, if you like it a star is appreciated* ⭐)

1. **Fork the project**
2. **Create your feature branch**: `git checkout -b feature/my-feature`
3. **Commit your changes**: `git commit -m 'Add some feature'`
4. **Push to the branch**: `git push origin feature/my-feature`
5. **Open a pull request**

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/license/mit) file for details.

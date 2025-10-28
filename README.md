# Trend Financial Services - Website Clone

A modern, responsive financial services website built with Angular 19, replicating the design and functionality of Trendfinserv.com.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Multiple Pages**: Home, About Us, Services, Contact
- **Professional Components**: Header with navigation, Footer with links
- **Contact Form**: Functional contact form with form validation
- **Service Showcase**: Comprehensive display of financial services
- **Smooth Navigation**: Client-side routing with Angular Router

## 📋 Pages

### Home Page
- Hero section with call-to-action buttons
- Features section highlighting key benefits
- Services overview with detailed cards
- Statistics section showing company achievements
- Call-to-action section for conversions

### About Us Page
- Company introduction and history
- Mission, Vision, and Values
- Team members showcase
- Why Choose Us section

### Services Page
- Detailed service descriptions
- Investment Planning
- Wealth Management
- Tax Planning
- Insurance Services
- Retirement Planning
- Loan Advisory

### Contact Page
- Contact information display
- Interactive contact form
- Business hours
- Location map placeholder

## 🛠️ Technologies Used

- **Angular 19.2.12** - Latest Angular framework
- **TypeScript** - Type-safe development
- **SCSS** - Advanced styling with variables and nesting
- **Standalone Components** - Modern Angular architecture
- **Reactive Forms** - Form handling and validation
- **Angular Router** - Client-side navigation

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd trendfinserv-clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to:
```
http://localhost:4200
```

## 🏗️ Project Structure

```
trendfinserv-clone/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/          # Navigation header
│   │   │   └── footer/          # Footer component
│   │   ├── pages/
│   │   │   ├── home/            # Home page
│   │   │   ├── about/           # About Us page
│   │   │   ├── services/        # Services page
│   │   │   └── contact/         # Contact page
│   │   ├── app.component.*      # Root component
│   │   └── app.routes.ts        # Routing configuration
│   ├── styles.scss              # Global styles
│   └── index.html               # Main HTML file
├── angular.json                 # Angular configuration
├── package.json                 # Dependencies
└── README.md                    # Documentation
```

## 🎨 Design Features

- **Color Scheme**: Purple gradient (#667eea to #764ba2) with gold accents (#ffd700)
- **Typography**: Segoe UI font family for clean readability
- **Animations**: Smooth hover effects and transitions
- **Responsive Grid**: CSS Grid and Flexbox for layouts
- **Mobile-First**: Optimized for mobile devices first

## 🔧 Build

To build the project for production:

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌟 Key Components

### Header Component
- Sticky navigation bar
- Top bar with contact info and social links
- Mobile-responsive hamburger menu
- Active route highlighting

### Footer Component
- Multi-column layout
- Quick links and service links
- Contact information
- Copyright and legal links

### Contact Form
- Form validation
- Required field indicators
- Service selection dropdown
- Success message on submission

## 🚀 Deployment

The application can be deployed to various platforms:

- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Connect GitHub repository
- **Firebase Hosting**: Use Firebase CLI
- **GitHub Pages**: Use angular-cli-ghpages

## 📄 License

This project is created for educational purposes.

## 👥 Contact

For any queries or support, please contact:
- Email: info@trendfinserv.com
- Phone: +91 98765 43210

## 🙏 Acknowledgments

- Original website: https://www.trendfinserv.com/
- Built with Angular framework
- Icons and emojis for visual elements

---

**Note**: This is a clone project created for demonstration purposes. All content and design elements are inspired by the original Trendfinserv website.

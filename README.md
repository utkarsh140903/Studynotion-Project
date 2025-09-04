# 📚 StudyNotion - EdTech Platform

A comprehensive online learning platform built with MERN Stack
  
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Latest-green?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-brightgreen?style=for-the-badge&logo=mongodb)
![Express](https://img.shields.io/badge/Express.js-Latest-lightgrey?style=for-the-badge&logo=express)

## 🌐 **[🚀 Live Demo - Visit StudyNotion!](https://studynotion-frontend-utkarsh-s-projects-2c5d922b.vercel.app/)**

## 🎯 Overview

StudyNotion is a fully functional EdTech platform that enables users to create, consume, and rate educational content. Built with the MERN stack, it provides a seamless and interactive learning experience for students and a platform for instructors to showcase their expertise.

## ✨ Features

### 👨‍🎓 For Students
- **Course Browsing & Enrollment**: Browse through various courses and enroll with secure payment processing
- **Interactive Learning**: Watch video lectures with progress tracking
- **Progress Dashboard**: Track your learning progress across all enrolled courses
- **Rating & Reviews**: Rate and review courses to help other students
- **Profile Management**: Manage personal information and view course history

### 👨‍🏫 For Instructors
- **Course Creation**: Create comprehensive courses with multiple sections and subsections
- **Video Upload**: Upload and manage video content with cloud storage
- **Student Analytics**: View detailed analytics about student enrollment and engagement
- **Revenue Tracking**: Monitor earnings from course sales
- **Course Management**: Edit, update, and manage course content

### 🔒 Authentication & Security
- **JWT Authentication**: Secure user authentication and authorization
- **OTP Verification**: Email-based OTP verification for account security
- **Password Management**: Secure password reset functionality
- **Role-based Access**: Different access levels for students and instructors

### 💳 Payment Integration
- **Razorpay Integration**: Secure payment processing for course purchases
- **Payment Verification**: Robust payment verification system
- **Email Notifications**: Automated email notifications for successful transactions

## 🛠️ Tech Stack

### Frontend
- **React.js** - User interface library
- **Redux Toolkit** - State management
- **React Router** - Navigation and routing
- **Tailwind CSS** - Styling and UI components
- **React Hook Form** - Form handling and validation
- **React Hot Toast** - Notification system
- **Chart.js** - Data visualization
- **React Dropzone** - File upload handling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Nodemailer** - Email service
- **Multer** - File upload middleware

### Cloud Services
- **Cloudinary** - Media storage and management
- **Razorpay** - Payment gateway integration

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Git**

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/utkarsh140903/StudyNotion.git
cd StudyNotion
```

### 2. Install Dependencies

#### Install Frontend Dependencies
```bash
npm install
```

#### Install Backend Dependencies
```bash
cd Server
npm install
cd ..
```

### 3. Environment Variables Setup

Create `.env` files in both root directory and Server directory:

#### Root Directory `.env`
```env
REACT_APP_BASE_URL=http://localhost:4000/api/v1
```

#### Server Directory `.env`
```env
# Database
MONGODB_URL=your_mongodb_connection_string
PORT=4000

# JWT
JWT_SECRET=your_jwt_secret_key

# Mail Configuration
MAIL_HOST=smtp.gmail.com
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password

# Cloudinary Configuration
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
FOLDER_NAME=StudyNotion

# Razorpay Configuration
RAZORPAY_KEY=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_key_secret
```

### 4. Run the Application

#### Development Mode (Recommended)
```bash
# Run both frontend and backend concurrently
npm run dev
```

#### Separate Terminal Method
```bash
# Terminal 1 - Backend
cd Server
npm run dev

# Terminal 2 - Frontend
npm start
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:4000

## 📁 Project Structure

```
StudyNotion/
├── public/                  # Public assets
├── src/                     # Frontend source code
│   ├── components/         # React components
│   │   ├── common/        # Shared components
│   │   └── core/          # Feature-specific components
│   ├── data/              # Static data and constants
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   ├── services/          # API services and operations
│   ├── slices/            # Redux slices
│   └── utils/             # Utility functions
├── Server/                  # Backend source code
│   ├── config/            # Configuration files
│   ├── controllers/       # Route controllers
│   ├── mail/              # Email templates
│   ├── middlewares/       # Custom middlewares
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   └── utils/             # Utility functions
└── README.md
```

## 🔑 Key Features Implementation

### Authentication Flow
1. **Signup**: User registration with email verification
2. **OTP Verification**: Email-based OTP verification
3. **Login**: JWT-based authentication
4. **Password Reset**: Secure password recovery

### Course Management
1. **Course Creation**: Multi-step course creation process
2. **Content Upload**: Video and image upload to Cloudinary
3. **Course Structure**: Sections and subsections organization
4. **Progress Tracking**: Student progress monitoring

### Payment Processing
1. **Cart Management**: Add/remove courses from cart
2. **Razorpay Integration**: Secure payment processing
3. **Payment Verification**: Server-side payment verification
4. **Enrollment**: Automatic course enrollment after payment

## 🔧 Configuration

### Database Configuration
The application uses MongoDB with Mongoose ODM. Make sure to:
1. Create a MongoDB database
2. Update the `MONGODB_URL` in your `.env` file
3. The application will automatically create required collections

### Email Configuration
For email functionality:
1. Use Gmail SMTP or any other email service
2. Enable "Less secure app access" or use App Passwords for Gmail
3. Update email credentials in the `.env` file

### Cloud Storage Configuration
1. Create a Cloudinary account
2. Get your cloud name, API key, and API secret
3. Update Cloudinary credentials in the `.env` file

### Payment Gateway Configuration
1. Create a Razorpay account
2. Get your key ID and key secret from the dashboard
3. Update Razorpay credentials in the `.env` file

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Utkarsh Kumar Gupta**
- Email: gupta.utkarsh140903@gmail.com
- GitHub: [@utkarsh140903](https://github.com/utkarsh140903)

## 🙏 Acknowledgments

- Thanks to all the open-source libraries and tools used in this project
- Special thanks to the React and Node.js communities
- Icons and UI inspiration from various design resources

## 📞 Support

If you have any questions or need help with setup, please feel free to reach out:

- Email: gupta.utkarsh140903@gmail.com
- Create an issue in this repository

---

Made with ❤️ by Utkarsh Kumar Gupta
⭐ Star this repository if you find it helpful!


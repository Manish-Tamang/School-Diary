# React Firebase Gallery - School Diary

A secure image gallery application built with React and Firebase, designed to showcase photos of the SEE Batch 2080 students from Prashanti Academy.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Features

### Gallery & Image Management
- Dynamic grid-based image gallery
- Full-screen lightbox view with navigation
- Multi-image upload support
- Image cropping and rotation tools
- Download and delete options
- Upload progress tracking

### User Management
- Secure authentication (email/password and Google sign-in)
- Email verification requirement
- Profile management (display name, profile picture)
- Account settings (email/password changes, account deletion)

### User Experience
- Responsive design for all screen sizes
- Real-time notifications
- Intuitive navigation

## Technologies

- **Frontend Framework:** React
- **Backend Services:** Firebase (Authentication, Database, Storage)
- **UI Components:** 
  - Material UI
  - React Easy Crop
  - React Image Lightbox
- **Utilities:** 
  - Moment.js (date formatting)
  - uuid (unique identifiers)

## Project Structure

```
├── .vscode/
│   └── settings.json
├── public/
│   ├── Logo.png
│   ├── index.html
│   └── opengraph-image.jpeg
├── src/
│   ├── App.js
│   ├── components/
│   │   ├── Loading.js
│   │   ├── MainNotification.js
│   │   ├── Modal.js
│   │   ├── Nav.js
│   │   ├── Notify.js
│   │   ├── crop/
│   │   ├── imagesList/
│   │   ├── upload/
│   │   └── user/
│   ├── context/
│   │   └── AuthContext.js
│   ├── firebase/
│   │   ├── config.js
│   │   └── [firebase utilities]
│   ├── img/
│   │   └── profile.jpeg
│   └── index.js
└── [config files]
```

## Getting Started

### Prerequisites
- Node.js installed
- Git installed
- Firebase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Manish-Tamang/School-Diary.git
cd School-Diary
```

2. Install dependencies:
```bash
npm install
```

3. Configure Firebase:
   - Create a new Firebase project
   - Enable Authentication (Email/Password and Google)
   - Set up Cloud Firestore
   - Configure Cloud Storage
   - Update Firebase configuration in `src/firebase/config.js`

4. Create environment variables:
   - Create `.env.local` file in root directory
   - Add Firebase configuration variables

5. Start development server:
```bash
npm start
# or
npm run dev
```

## Deployment

### Firebase Hosting Deployment

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Build the project:
```bash
npm run build
# or
npm run build:deploy
```

3. Initialize Firebase:
```bash
firebase login
firebase init
# Select hosting during setup
```

4. Deploy:
```bash
firebase deploy -P <your-firebase-project-id>
```

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests to improve the project.

## License

This project is licensed under the MIT License.

## Author

[Manish Tamang](https://github.com/Manish-Tamang)

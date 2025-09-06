# Mobile Habit Tracker App

This is a mobile application designed to help users track their habits and improve their daily routines. The app features an onboarding process, a home dashboard, a habit tracker, and a profile/settings page.

## Features

- **Onboarding Screen**: A welcoming interface that introduces users to the app and allows them to get started or sign in.
- **Home Dashboard**: Displays a summary of daily activities and progress on user habits.
- **Habit Tracker**: A dedicated screen for tracking habits, allowing users to mark habits as complete and add new ones.
- **Profile/Settings Page**: Users can view their profile, manage notifications, and toggle dark mode.

## Project Structure

```
mobile-app
├── src
│   ├── assets
│   │   └── fonts
│   ├── components
│   │   └── HabitCard.js
│   ├── navigation
│   │   └── AppNavigator.js
│   ├── screens
│   │   ├── HomeScreen.js
│   │   ├── OnboardingScreen.js
│   │   ├── ProfileScreen.js
│   │   └── HabitTrackerScreen.js
│   └── styles
│       └── theme.js
├── App.js
├── babel.config.js
├── index.js
├── metro.config.js
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd mobile-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Run the application:
   ```
   npm start
   ```

## Usage

- Follow the onboarding instructions to set up your profile.
- Use the home dashboard to view your daily habits and progress.
- Track your habits in the habit tracker screen.
- Customize your profile and settings as needed.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
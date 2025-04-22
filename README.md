# ReState - Modern Real Estate Mobile App

A beautiful and modern real estate mobile application built with React Native and Expo. ReState helps users find their ideal home with an intuitive interface and powerful features.

https://github.com/mariotoribi0/restate-app/assets/video/demo.mp4

<details>
<summary>Watch Demo Video</summary>

https://user-images.githubusercontent.com/YOUR_USER_ID/restate-app/assets/demo.mp4

</details>

## Features

- 🏠 **Property Listings**
  - Browse through featured and recommended properties
  - View detailed property information
  - High-quality image galleries with carousel
  - Property specifications (beds, baths, area)

- 📍 **Location & Maps**
  - Interactive property location maps
  - Detailed address information
  - Area highlights and points of interest

- ⭐ **Reviews & Ratings**
  - Property ratings and reviews
  - User reviews with profile pictures
  - Overall property rating system

- 🔍 **Search & Filters**
  - Advanced property search
  - Filter by property type, price, and amenities
  - Real-time search results

- 👤 **User Features**
  - Google authentication
  - User profiles
  - Saved properties
  - Booking management

## Tech Stack

- **Frontend**
  - React Native
  - Expo Router
  - NativeWind (Tailwind CSS for React Native)
  - TypeScript

- **Backend**
  - Appwrite (Backend as a Service)
  - Real-time data synchronization
  - Secure authentication
  - File storage for images

- **UI/UX**
  - Custom components
  - Responsive design
  - Modern and clean interface
  - Rubik font family

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Yarn or npm
- Expo CLI
- iOS Simulator or Android Emulator

### Installation

1. Clone the repository
```bash
git clone https://github.com/mariotoribi0/restate-app.git
cd restate-app
```

2. Install dependencies
```bash
yarn install
```

3. Set up environment variables
```bash
cp .env.example .env
```
Fill in your Appwrite credentials in the .env file.

4. Start the development server
```bash
yarn start
```

5. Run on your preferred platform
```bash
# For iOS
yarn ios

# For Android
yarn android
```

## Project Structure

```
my-app/
├── app/                    # Main application code
│   ├── (root)/            # Root navigation
│   │   ├── (tabs)/        # Tab navigation screens
│   │   └── properties/    # Property-related screens
│   │   └── _layout.tsx    # Root layout configuration
├── components/            # Reusable components
├── constants/             # App constants and assets
├── lib/                   # Utilities and helpers
└── assets/               # Static assets
```

## Components

- **Carrousel**: Image slider for property galleries
- **Facilities**: Property amenities display
- **Gallery**: Grid view of property images
- **Reviews**: User reviews and ratings
- **Search**: Property search functionality
- **Cards**: Property card components

## Styling

The app uses NativeWind (Tailwind CSS) for styling with custom configuration:

- Custom color palette
- Responsive design
- Custom font integration (Rubik)
- Consistent spacing and layout

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from modern real estate applications
- Expo team for the amazing framework
- Appwrite team for the backend solution
- React Native community for continuous support

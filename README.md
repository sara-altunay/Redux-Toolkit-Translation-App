# 🌐 Redux Toolkit Translation App

A modern, responsive translation application built with React, Redux Toolkit, and Vite. Features real-time translation, language swapping, translation history, and a beautiful dark theme UI.

## ✨ Features

- 🔄 **Real-time Translation** - Instant translation using Deep Translate API
- 🌍 **100+ Languages** - Support for multiple languages with auto-detection
- 🔀 **Language Swapping** - Quick swap between source and target languages
- 📚 **Translation History** - Save and access your recent translations
- 📋 **Copy/Clear Functions** - Easy text management
- 🎨 **Modern UI** - Beautiful dark theme with smooth animations
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development

## 🚀 Live Demo

![Translation App Demo](https://via.placeholder.com/800x400/1f2937/ffffff?text=Translation+App+Demo)

*Screenshot showing the main interface with language selection, text input areas, and translation functionality*

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API**: Deep Translate API
- **HTTP Client**: Axios

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/redux-toolkit-translate-app.git
   cd redux-toolkit-translate-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Add your RapidAPI key to `.env`:
   ```
   VITE_RAPIDAPI_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 API Setup

This app uses the Deep Translate API from RapidAPI. To get started:

1. Visit [RapidAPI Deep Translate](https://rapidapi.com/dmitry-udodov/api/deep-translate1)
2. Subscribe to the API (free tier available)
3. Copy your API key
4. Add it to your `.env` file as `VITE_RAPIDAPI_KEY`

## 📱 Screenshots

### Main Interface
![Main Interface](https://via.placeholder.com/600x400/1f2937/ffffff?text=Main+Interface)
*Clean, modern interface with language selection and text areas*

### Translation in Action
![Translation Demo](https://via.placeholder.com/600x400/1f2937/ffffff?text=Translation+Demo)
*Real-time translation with loading states and results*

### History Feature
![History Feature](https://via.placeholder.com/600x400/1f2937/ffffff?text=History+Feature)
*Translation history dropdown with recent translations*

### Mobile Responsive
![Mobile View](https://via.placeholder.com/300x600/1f2937/ffffff?text=Mobile+View)
*Fully responsive design that works on all devices*

## 🎯 Usage

1. **Select Languages**
   - Choose source language (or use "Detect Language")
   - Select target language
   - Use the swap button to quickly switch languages

2. **Translate Text**
   - Type or paste text in the source area
   - Click "Translate" button
   - View the translated result

3. **Manage Translations**
   - Use "Copy" to copy translated text
   - Use "Clear" to clear all text
   - Access "History" to see recent translations

4. **History Management**
   - Click "History" to see recent translations
   - Click any history item to restore source text
   - Use "Clear All" to remove all history

## 🏗️ Project Structure

```
src/
├── components/
│   ├── button.jsx          # Translate button
│   ├── header.jsx          # App header
│   ├── history.jsx         # Translation history
│   ├── language-select.jsx # Language selection
│   ├── loader.jsx          # Loading animation
│   └── text-container.jsx  # Text input/output
├── redux/
│   ├── actions/
│   │   └── index.js        # Async thunks
│   ├── slices/
│   │   ├── languageSlice.js # Language state
│   │   └── translateSlice.js # Translation state
│   └── store.js            # Redux store
├── utils/
│   └── api.js              # API configuration
├── App.jsx                 # Main app component
├── index.css               # Global styles
└── main.jsx                # App entry point
```

## 🔄 Redux State Management

The app uses Redux Toolkit for efficient state management:

- **Language State**: Manages available languages and loading states
- **Translation State**: Handles text input, translation results, and history
- **Async Thunks**: Manages API calls for language fetching and translation

## 🎨 Styling

Built with Tailwind CSS for:
- Consistent design system
- Responsive layouts
- Dark theme
- Smooth animations
- Custom components

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Add environment variables in Netlify dashboard

### Other Platforms
The app can be deployed to any static hosting service that supports React applications.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Yusuf Altunay**
- GitHub: [@yusufaltunay](https://github.com/yusufaltunay)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [Deep Translate API](https://rapidapi.com/dmitry-udodov/api/deep-translate1) for translation services
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management

## 📊 Performance

- ⚡ **Fast Loading**: Vite-powered development and build
- 🎯 **Optimized Bundle**: Tree-shaking and code splitting
- 📱 **Mobile First**: Responsive design for all devices
- 🔄 **Efficient Updates**: Redux Toolkit for optimal re-renders

---

**Made with ❤️ using React, Redux Toolkit, and Vite**
# Redux-Toolkit-Translation-App
# Redux-Toolkit-Translation-App

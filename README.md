# News API Website

## Overview
This project is a feature-rich web application that utilizes the GNews API to fetch and display news articles. It allows users to search for news articles, filter them by country, and select topics, creating an interactive and user-friendly experience.

## Features
- **Search Functionality**: Search for news articles based on user input.
- **Country Selection**: Choose from various countries (e.g., India, Canada, US) to filter news results.
- **Category Filtering**: Easily filter news by categories such as politics, business, movies, and tech.
- **Responsive Design**: The app is designed to be mobile-friendly and responsive across all devices.

## Technology Stack
- **Front-end**: React.js, React Router
- **API**: [GNews API](https://gnews.io/)
- **Styling**: Tailwind CSS for responsive and modern UI
- **Icons**: React Icons for enhanced UI/UX

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/anoopwilson96/034WeNewsOnline.git
   cd 034WeNewsOnline

2. Install dependencies:
```bash
npm install
```
3. Create a .env file in the root directory and add your News API key:
```bash
VITE_API_URL0=your_api_key_here
```
4. Run the development server:
```bash
npm run dev
```

Usage
Header: Use the country selector to change the region of news. Click the category buttons for specific news topics.
Search Bar: Type a keyword and press the search icon to filter news by your query.
Articles Section: Displays news articles in a grid format with titles, descriptions, and a "Read more" button linking to the full article.
Project Structure

```
src/
|-- components/
|   |-- Header.jsx
|   |-- Footer.jsx
|-- pages/
|   |-- NewsArticles.jsx
|-- service/
|   |-- newsAPI.js
|-- App.jsx
|-- main.jsx
```

Live Demo
[View the live site here](https://your-daily-news-anoopwilson-projects.vercel.app/)

Improvements from Previous Version [Old Version](https://anoopwilson96.github.io/028-news-website/)
Enhanced with search functionality and topic filtering.
Added interactive country selection for region-specific news.
Implemented a more structured and maintainable codebase with reusable components.

Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any improvements or new features.

License
This project is open-source and available under the MIT License.

Contact
For any questions, feel free to reach out at your [email](anoopwilson33@yahoo.com)

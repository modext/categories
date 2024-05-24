# Project Documentation for ISE-Website
## Introduction
The ISE-Website is a sophisticated platform designed to facilitate investments in influencer stocks, providing users with the ability to buy and sell shares of social media influencers' marketable popularity. The application leverages modern web technologies to create a seamless and interactive user experience. Built with Next.js, the site features real-time data processing and a responsive design.

## Technologies Used:

- **Next.js:** For server-side rendering and static site generation.
- **React:** Used for building the user interface.
- **Tailwind CSS:** For styling and responsive design.
- **TypeScript:** For type-safe code and better developer experience.
- **Yarn:** As a package manager to leverage its fast, reliable, and secure dependency 
 management.
- **Axios:** For making HTTP requests to external services.
- **Nodemailer:** For sending emails directly from the platform.
- **SVG:** Integrated SVG with React for direct manipulation of complex graphics.
- **WordPress as a Headless CMS:** Used for content management of blogs, news, and 
 sponsor information, accessed via the WordPress REST API.

## Getting Started

### Prerequisites:

- Node.js installed on your machine.
- Yarn package manager.
- Access to our WordPress site https://ise-insights.up.railway.app/wp-admin which is configured as a headless CMS.
  
### Installation:

1. Clone the repository:
``` bash
  git clone https://github.com/Influencer-Stock-Exchange/ise-website.git
  ```
3. Install dependencies:
```bash
  cd ise-website
  yarn install
```


### Running the Project Locally:

- To run the development server:
```bash
   yarn dev
```
- This will start the server on http://localhost:3003.

### Building for Production:

- To create a production build:
```bash
yarn build
```
- To start the production server:
```bash
yarn start
```

## Project Structure
- .next/: Contains output files from Next.js builds, typically not checked into version control.
- node_modules/: Contains all project dependencies.
- public/: Static assets like images and fonts.
- src/: Main source directory for the application.
  - app/: Contains specific modules like about-us, api, cookies.
  - components/: Reusable React components.
  - types/: TypeScript types and interfaces.
  - utils/: Utility functions and helpers.
- styles/: Contains global styles and configurations for Tailwind CSS.

   
### Key Files:

- next.config.js: Configuration for Next.js.
- tailwind.config.js: Tailwind CSS configuration.
- postcss.config.js: PostCSS configuration for processing CSS.
- .env: Environment variables used across the app.

## Environment Configuration

### Environment Variables
Ensure the following environment variables are set in your .env file:

```bash
NEXT_PUBLIC_CHAT_API_URL: URL for the chat API
EMAIL_USER: Username for email service
EMAIL_PASSWORD: Password for email service
TARGET_EMAIL: Target email address for notifications
```

## Development Server:
  - Run `yarn dev` to start the Next.js development server.
    
## Linting and Formatting:
  - ESLint and Prettier are configured for code linting and formatting. Run `yarn lint`      to check for linting errors.
    
## Testing:
  - Tests can be implemented using Jest and React Testing Library for unit and integration tests. (Note: setup and examples not provided in the initial setup)

## Styling and Theming

- **Tailwind CSS:** Used for all styling. Custom configurations can be made in `tailwind.config.js`.
- **Global Styles:** Defined in globals.css including custom font-faces for 'Roobert'.
  
## Third-Party Services and Integrations

### Headless WordPress CMS Integration:
- The backend content for blogs, news, and sponsors is managed through a headless WordPress CMS setup. This allows for a decoupled architecture where the frontend Next.js application consumes content via the WordPress REST API.

### Email Service Integration:

- Nodemailer is used for sending emails directly from the platform, configured to use SMTP transport.

## Ekko AI Chat Widget Documentation

### Overview
Ekko AI serves as a virtual assistant within the ISE platform, helping users navigate through the site, learn more about services, and get real-time answers to their questions. It's designed to improve user engagement and provide support without human intervention.

### Components of Ekko AI
- **ChatWidget:** The main component that users interact with on the webpage. It handles the state and visibility of the chat modal and includes features for minimizing and restoring the chat window.
- **ChatModal:** Manages the chat interface where messages are sent and received. Displays the initial greeting message and handles rendering of messages.

### Key Features
- **Real-Time Interaction:** Users can interact with Ekko AI in real-time, with responses generated based on the user's queries.
- **Dynamic Responses:** Leverages a backend API to fetch responses, providing tailored information based on user input.
- **Accessibility Features:** Ensures keyboard navigable inputs and focus management for accessibility.
- **Responsive Design:** Fully responsive, making it usable on both desktop and mobile devices.

### Integration Details
- Uses Axios for API calls to a backend service configured in the `.env` for handling real-time chats.
- Employs WebSocket or similar technology for real-time data transfer.

### Customization and Settings
- **Styling:** CSS and inline styles are used to customize the appearance of the chat components.
- **Configuration:** Administrators can configure the behavior and responses of Ekko AI by modifying the backend logic or through a dedicated admin panel if available.

### Troubleshooting Common Issues
- **Connectivity Issues:** Ensure the server endpoint in chatApi.ts is correct and the server is running to avoid connection errors.
- **UI Glitches:** Make sure all CSS files are loaded correctly, and the React components are rendering without errors.

## Troubleshooting
### Common Issues and Solutions:

  - **CORS Errors:** Ensure that the WordPress backend is correctly configured to allow     requests from your domain.
  - **Build Failures:** Check the console for specific errors related to dependencies or    TypeScript types, and ensure all environment variables are correctly set.
 
    


## WordPress as a Headless CMS for the ISE Website
### Overview
For the ISE (Influencer Stock Exchange) website, WordPress is utilized as a headless CMS, meaning that it serves as the backend content management system but does not dictate the front-end presentation. Instead, the content managed in WordPress is delivered through APIs to a React-based front-end, ensuring dynamic content delivery and a more interactive user experience.

### Configuration
- **WordPress Setup:** The WordPress installation is standard, with the primary role of managing content such as blogs, news articles, and sponsor details.
- **Plugins:**
  - Advanced Custom Fields (ACF): This plugin is used to add custom fields to WordPress content types, allowing for the extension of information associated with posts, pages, and     
    custom post types.
  - Custom Post Types: For the specific needs of the website, custom post types for Blogs,  
    News, and Sponsors are created. These help in organizing the content more efficiently 
    and tailor the admin panel to the needs of content managers.
    
### Integration with the Front-end
  - **API Consumption:** The front-end consumes the WordPress REST API to fetch content. Each content type (blogs, news, sponsors) is accessed via specific endpoints that provide JSON 
    data.
  - **Endpoints:**
    **Blogs:** GET /wp-json/wp/v2/blogs
    **News:** GET /wp-json/wp/v2/news
    **Sponsors:** GET /wp-json/wp/v2/sponsors
  - **React Components:** On the front-end, components like BlogList, NewsArticle, and SponsorCard fetch data from these endpoints and render them accordingly.
   
### WordPress Content Management
#### Blogs and News Posts:
Content managers can add, edit, or delete articles directly from the WordPress dashboard.
Each post can be categorized and tagged, and custom fields like summary, author, and featured image are used to enrich the content data.
##### **Fields for Blogs and News Posts:**
 - **Title:** The main headline of the blog or news article.
 - **Summary:** A brief overview or abstract of the content, providing readers with a snapshot of what to expect.
 - **Content:** The main body of the post, which can include formatted text, links, and embedded media.
 - **Category:** This field allows the post to be categorized, which helps in organizing the content by topics or themes and aids in navigation and content retrieval.
 - **Post Type:** Defines the type of post.
 - **Date:** The publication date, or the date intended for the post to go live.
 - **Author:** The author of the post. 
 - **Author Title:** A sub-field to specify the author's professional title or role, which can be useful in cases where author credibility is crucial, such as in expert analyses or 
   opinion pieces.
 - **Cadre of Content:** This could be a custom field that indicates the level or depth of the content, such as "Beginner", "Intermediate", or "Expert". This helps users understand the 
   expected complexity of the content before reading.
 - **Large Image & Thumbnail:** These are crucial for visually representing the content. Thumbnails are particularly important for display of the Author's headshot, while large images would be  featured within the content.
   
#### Sponsors:
Sponsor details are managed similarly, with additional fields for logos, website URLs and Name of sponsor, and brief descriptions.
These entries are vital for maintaining dynamic partner information across the ISE platform.

### Features and Benefits
- **Scalability:** Utilizing WordPress as a headless CMS allows for scaling the content management capabilities without affecting the front-end systems.
- **Security:** Separating the CMS from the front-end reduces security risks associated with traditional WordPress sites.
- **Flexibility:** Front-end developers can implement any technology stack or architecture, improving the user experience without being limited by the CMS.
- **Content Rich:** Leveraging WordPress's robust content management features ensures that non-technical users can still manage site content effectively.

This documentation outlines the structure and setup of the ISE-Website project to aid in maintenance and further development.



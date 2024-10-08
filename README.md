Code Snippet Sharing Application

This project is a code snippet sharing application built with React, utilizing the Monaco Editor to allow users to write, edit, and share code snippets easily. Users can select different programming languages, modify code snippets, and share them with others through automatically generated links.
Features

    Monaco Editor Integration: A powerful, customizable code editor that supports multiple languages, such as JavaScript, HTML, TypeScript, CSS, and JSON.
    Snippet Sharing: Users can create and share their code snippets through unique URLs. Snippets can be shared with others via links.
    Language Selection: Allows users to switch between supported programming languages while editing snippets.
    Real-Time Editor Updates: Any changes made in the editor are tracked, and users are only allowed to share if the snippet has been modified.
    Button Disable/Enable: The "Share" button is enabled only when changes are made to the snippet, ensuring that unchanged snippets cannot be shared.
    Responsive Design: The layout is responsive, providing an optimal experience on various screen sizes.

Installation

    Clone the repository:

bash

git clone https://github.com/your-repo/code-snippet-sharing.git
cd code-snippet-sharing

    Install dependencies:

bash

npm install

    Start the development server:

bash

npm start

The application will be accessible at http://localhost:3000.
Usage

    Code Editing: Upon loading the app, you will see a default code snippet in the Monaco Editor. You can modify this code or start fresh by selecting a programming language from the dropdown menu.

    Sharing Code Snippets:
        After modifying the snippet, click the "Share" button. If the snippet hasn't been changed, the button will be disabled.
        The snippet will be saved, and a shareable link will be generated. You can copy this link and share it with others.
        If you have received a shared snippet link, opening it will load the code snippet directly into the editor.

    Language Support: Switch between different programming languages, such as JavaScript, HTML, CSS, and JSON, using the language dropdown menu.

API Integration

The application uses a simple API for fetching and creating snippets:

    GET request to retrieve a saved snippet using its id.
    POST request to create a new snippet and generate a shareable link.

Technologies Used

    React: A JavaScript library for building user interfaces.
    Monaco Editor: The code editor that powers VS Code, integrated into the app for an intuitive coding experience.
    Axios: A promise-based HTTP client for interacting with the backend API.
    React Router: Enables dynamic routing within the application.
    CSS Modules: For styling the application and maintaining scoped CSS.

Folder Structure

bash

src/
│
├── assets/          # Contains icons and images
├── components/      # React components like EditorMonaco
├── styles/          # CSS modules for styling
├── App.tsx          # Main app component
├── index.tsx        # Application entry point
└── ...

Contributing

    Fork the repository.
    Create your feature branch (git checkout -b feature/new-feature).
    Commit your changes (git commit -am 'Add new feature').
    Push to the branch (git push origin feature/new-feature).
    Open a pull request.

License

This project is licensed under the MIT License.

Thank you for using the code snippet sharing application! We hope this tool helps in sharing and collaborating on code more effectively.

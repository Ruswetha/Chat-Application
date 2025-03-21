# Chat-Application
Company: CODTECH IT SOLUTIONS

Name: RUSWETHA KUNIPALLI

ID: CT04WX124

Domain: Full Stack Web Development

Duration: 4 weeks

Mentor:NEELA SANTHOSH

Output:

![Screenshot 2025-03-21 104310](https://github.com/user-attachments/assets/0eb5ffba-c5b0-4cfe-81d6-767d464a1940)
![Screenshot 2025-03-21 104414](https://github.com/user-attachments/assets/c16be2c9-9b57-4f88-bf2a-8d1141afc5e3)


Description of the project:

Introduction The real-time chat application is a web-based communication platform that enables multiple users to exchange messages instantly. Built using Node.js and Socket.IO, the application ensures seamless and dynamic message exchange, allowing users to join a chat room, send messages, and see notifications when users enter or leave the conversation. The application is designed for a simple and interactive experience without requiring authentication or user accounts.

Technology Stack Backend: Node.js with Express.js and Socket.IO for real-time WebSocket communication. Frontend: HTML, CSS, and JavaScript for a dynamic and responsive user interface. Real-Time Communication: Socket.IO for handling bidirectional communication between clients and the server. Key Features Multiple User Support: Any number of users can join and communicate in the chat room without restriction. Real-Time Messaging: Messages are instantly delivered to all connected users. User Notifications: Users are notified when someone joins or leaves the chat. Auto-Scrolling Chatbox: The chat window automatically scrolls to show the latest messages. Timestamped Messages: Messages include a timestamp to indicate when they were sent. Project Components

Server-Side (Backend) The backend is developed using Node.js and Express.js to handle HTTP requests and serve static frontend files. The Socket.IO library is integrated to manage real-time WebSocket connections. The server listens for events such as:
New user connections Incoming chat messages User disconnections When a user joins, their username is stored in an object, and all other users are notified. Messages are broadcast to all connected users, ensuring real-time delivery.

Client-Side (Frontend) The frontend is built using HTML, CSS, and JavaScript. A simple interface allows users to:
Enter their username before joining the chat. Send messages via an input field. View chat history in a scrollable chatbox. Receive notifications about user activity. The frontend JavaScript file connects to the backend using Socket.IO client library, handles user interactions, and updates the UI dynamically.

Real-Time Communication The Socket.IO library enables WebSocket-based communication between clients and the server. This ensures instant data transmission with minimal delay. Events such as "chat message," "user joined," and "user left" are handled efficiently to update all connected users in real time.
How It Works A user accesses the application in their browser. They enter a username and join the chat. The server notifies all users about the new participant. Users can send messages, which are broadcast to all connected clients. When a user disconnects, others receive a notification. The chat window updates dynamically, ensuring a smooth experience. Use Cases Group communication among friends or colleagues. Customer support chat systems. Educational discussions and virtual study groups. Team collaboration for remote work. Conclusion This real-time chat application provides a fast and interactive communication tool using modern web technologies. With its minimalistic design, easy usability, and instant messaging capabilities, it serves as a foundation for more advanced chat applications, such as those integrating authentication, multimedia sharing, or AI-powered chatbots.

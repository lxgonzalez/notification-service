# 📩 **Notification Module**

The **Notification Service Module** consists of multiple microservices that handle different aspects of real-time notifications, including **email notifications** and **WebSocket-based event listening**. This module ensures seamless communication across systems by listening to events and triggering notifications.

---

## 📚 **Technologies Used**

- **Node.js 18** : Runtime environment  
- **Express**: Web framework for API handling  
- **WebSocket**: For real-time event-driven communication  
- **Nodemailer**: For sending email notifications  
- **Docker**: Containerization and deployment  
- **Dotenv**: For managing environment variables securely  

---

## 🛠️ **Microservices Overview**

📧 **Notification Action Service**  
- Listens for WebSocket events and sends email notifications based on specific actions.  

🔑 **Notification Code Service**  
- Monitors WebSocket messages for **verification codes** and sends emails to users when a code is registered.  

---

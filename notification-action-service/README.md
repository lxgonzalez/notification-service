# 🛠️ Notification Action Service

The **Notification Action Service** is a microservice built using Node.js, WebSockets, and Nodemailer to send email notifications based on specific actions. It listens to WebSocket messages and triggers an email notification when an action is registered.

---

## 🐳 **Deployment Docker Image**

Visit the repository on Docker Hub [here](https://hub.docker.com/r/lxgonzalez/notification-action-service)

1. **Check if port 3000 is free**.
2. **Run the following command in your terminal**:

```bash
docker pull lxgonzalez/notification-action-service
docker run -p 3000:3000 --env-file .env lxgonzalez/notification-action-service
```

## 🚀**Deployment Locally**
Follow these steps to run the API on your local machine:

1. **Clone the Repository**
Clone this repository to your local machine:
```bash
git clone https://github.com/lxgonzalez/notification-action-service.git
```
2. **Install Dependencies**
   
```bash
npm install
```
3. **Run the Application**
```bash
npm start
```
4. **Connecting to the Service**
Once the application is running, you can access the service by opening your browser and navigating to: http://localhost:3000

5. ✉️ **Example: Sending a Notification**
```json
{
  "topic": "send_notification",
  "event": "send_email",
  "email": "user@example.com",
  "action": "User Login",
  "date": "2025-02-11"
}
```

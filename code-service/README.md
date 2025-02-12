# 🔑 Code Service

The **Code Service** is a microservice developed using Node.js, WebSockets, and Nodemailer. Its primary functionality is to listen for incoming WebSocket messages and send email notifications when a code is registered.

---

## 🐳 **Deployment Docker Image**

Visit the repository on Docker Hub [here](https://hub.docker.com/r/lxgonzalez/notification-code-service) 🐳  

1. **Ensure port 1029 is free**.  
2. **Run the following command in your terminal**:  

```bash
docker pull lxgonzalez/notification-code-service
docker pull lxgonzalez/notification-code-service:latest
```

# 🚀**Deployment Locally**
Follow these steps to run the API on your local machine:

1. **Clone the Repository**
Clone this repository to your local machine:
```bash
git clone: https://github.com/lxgonzalez/notification-service/
```
2. **Install Dependencies**
   
```bash
npm install
```
3. **Run the Application**
```bash
npm start
```
4. **Email Notification Example**
When the service receives a WebSocket message with a send_email_code event, it triggers an email. Example message:
```json
{
  "topic": "send_code",
  "event": "send_email_code",
  "email": "user@example.com",
  "code": "123456",
  "date": "2025-02-11"
}
```

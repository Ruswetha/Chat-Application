const socket = io();
let username = "";

function setUsername() {
    const input = document.getElementById("username");
    if (input.value.trim() !== "") {
        username = input.value;
        document.querySelector(".username-section").style.display = "none";
        document.getElementById("message").disabled = false;
        document.getElementById("send-btn").disabled = false;

        socket.emit("user joined", username);
    } else {
        alert("Please enter a username");
    }
}

document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("message").addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    const messageInput = document.getElementById("message");
    const messageText = messageInput.value.trim();

    if (messageText !== "" && username !== "") {
        const timestamp = new Date().toLocaleTimeString();
        socket.emit("chat message", { username, message: messageText, time: timestamp });
        messageInput.value = "";
    }
}

socket.on("chat message", (data) => {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = `<strong>${data.username}:</strong> ${data.message} <span class="timestamp">${data.time}</span>`;
    
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
});

socket.on("user joined", (user) => {
    const chatBox = document.getElementById("chat-box");
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = `${user} joined the chat`;
    chatBox.appendChild(notification);
    chatBox.scrollTop = chatBox.scrollHeight;
});

socket.on("user left", (user) => {
    const chatBox = document.getElementById("chat-box");
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = `${user} left the chat`;
    chatBox.appendChild(notification);
    chatBox.scrollTop = chatBox.scrollHeight;
});

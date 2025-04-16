const socket = io();

const clientsTotal = document.getElementById("clients-total");
const messageContainer = document.getElementById("message-container");
const nameInput = document.getElementById("name-input");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const typingIndicator = document.getElementById("typing-indicator");
const typingName = document.getElementById("typing-name");

let typingTimeout;

// Update client count
socket.on("clients-total", (count) => {
  clientsTotal.innerText = `Total Users: ${count}`;
});

// Send message
sendButton.addEventListener("click", sendMessage);

messageInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
  socket.emit("typing", nameInput.value);
  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => socket.emit("typing", null), 1000);
});

function sendMessage() {
  const message = messageInput.value.trim();
  if (!message) return;

  const data = {
    name: nameInput.value,
    message,
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };

  appendMessage(data, true);
  socket.emit("message", data);
  messageInput.value = "";
}

function appendMessage(data, isSelf = false) {
  const li = document.createElement("li");
  li.className = `flex flex-col ${
    isSelf ? "items-end" : "items-start"
  } space-y-1`;

  const meta = `<span class="text-xs text-gray-500">${data.name} • ${data.time}</span>`;

  const bubble = `
    <div class="flex items-end gap-1">
      ${
        !isSelf
          ? `<i class="fas fa-user-circle text-2xl text-gray-500"></i>`
          : ""
      }
      <div class="${
        isSelf ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"
      } px-4 py-2 rounded-xl shadow-sm max-w-[75%]">
        <p>${data.message}</p>
        ${
          isSelf
            ? `<div class="text-right text-xs mt-1 text-white/80"><i class="fas fa-check-double ${
                data.seen ? "text-blue-300" : "text-white/80"
              }"></i></div>`
            : ""
        }

      </div>
      ${
        isSelf
          ? `<i class="fas fa-user-circle text-2xl text-blue-500"></i>`
          : ""
      }
    </div>
    ${meta}
  `;

  li.innerHTML = bubble;
  messageContainer.appendChild(li);
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Incoming message
socket.on("chat-message", (data) => {
  appendMessage(data, false);
});

// Typing indicator
socket.on("typing", (name) => {
  if (!name) {
    typingIndicator.classList.add("hidden");
    return;
  }
  typingName.innerText = name;
  typingIndicator.classList.remove("hidden");

  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(
    () => typingIndicator.classList.add("hidden"),
    2000
  );
});

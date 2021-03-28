const socket = io('/') // This means your client will always be connected to your server, locally or on Heroku.

const chatBox = document.getElementById('chatBox')
const messageEl = document.getElementById('message')
const user = document.getElementById('user')
const date = new Date() // Date implementation

socket.on('newMessage', data => {
    console.log("Message Received")
    console.log(data)
    addMessage(data, false)
})

// Post message to board
const postMessage = () => {
    /***********************************
     *         YOUR CODE HERE          *
     ***********************************/
    const data = { user: user.value, message: messageEl.value }
    socket.emit('message', data)
    addMessage(data, true)
}

// Add message from any user to chatbox, determine if added
// by current user.
const addMessage = (data = {}, user = false) => {
    /***********************************
     *         YOUR CODE HERE          *
     ***********************************/
    const messageLi = document.createElement('li')
    messageLi.classList.add('message')
    let message
    if (user) {
        messageLi.classList.add('uMessage')
        message = 'you: ' + data.message;
    } else {
        message = data.user + ': ' + data.message
    }
    messageLi.innerHTML = message

    chatBox.appendChild(messageLi)
}

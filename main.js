fetch("https://350b-186-26-95-8.ngrok-free.app/discord-avatar/852317704446541834")
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })

document.addEventListener ('DOMContentLoaded', () => {
    const previewDiv = document.getElementById ('previewDiv')
    const message = document.getElementById ('m_message')
    message.addEventListener ('change', () => {
        const videolink = 'https://www.youtube.com/watch?v=' + document.getElementById ('m_video').value
        previewDiv.innerHTML = template({
                               m_message: message.value,
                               m_to: document.getElementById ('m_to').value,
                               m_from: document.getElementById ('m_from').value,
                               m_videolink: videolink,
                               m_videoimgsrc: ''
        })
    })
})

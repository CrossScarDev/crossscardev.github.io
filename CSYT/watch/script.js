//<iframe width="640" height="360" src="https://www.youtube.com/embed/Q8Z6m8wxLpc" title="Universal Lego Sorter - Update 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

let video = window.location.hash.replace("#", "")

let frame = document.createElement("iframe")
frame.width = 640
frame.height = 360
frame.src = `https://www.youtube.com/embed/${video}`
frame.style.border = "none"
frame.allowFullscreen = true
frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

document.body.appendChild(frame)
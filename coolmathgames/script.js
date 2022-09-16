const data = fetch("https://coolmathgames.com").then(x => x.text())
document.documentElement.innerHTML = data
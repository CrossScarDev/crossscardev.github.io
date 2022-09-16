const data = fetch("https://coolmathgames.com").then(x => x.text()).then(y => y)
document.body.innertext = data
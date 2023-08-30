function toggleMode() {
    // Alternar entre as cores dark e light, clicando no botão.
    const html = document.documentElement
    html.classList.toggle("light")
    
    // Pegar a tag img.
   const img = document.querySelector("#profile img")
   
   // Substituir a imagem.
    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/Mobile/avatar-light.png")
    } else {
        img.setAttribute("src", "./assets/Mobile/avatar.png")
    }
 
}
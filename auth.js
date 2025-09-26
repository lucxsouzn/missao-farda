window.addEventListener("load", () => {
    const conteudo = document.getElementById("conteudo");
    const logo = document.getElementById("logo");
    const fundo = document.getElementById("fundo");
    const barra = document.getElementById("barra");
    const botoes = document.getElementById("botoes");
     const som = document.getElementById("som"); 

    conteudo.addEventListener("click", () => {
        conteudo.style.opacity = "0";
        setTimeout(() => {
            conteudo.style.display = "none";
            logo.style.opacity = "1";
            setTimeout(() => {
                logo.style.opacity = "0";
                setTimeout(() => {
                    logo.style.display = "none";
                     som.volume = 0.03; 
                    som.play();
                    fundo.style.opacity = "1";
                    setTimeout(() => {
                        barra.style.left = "450px"; 
                        botoes.style.right = "550px"; 
                    }, 1000);
                }, 3000);
            }, 3000);
        }, 2000);
    }, { once: true });
});

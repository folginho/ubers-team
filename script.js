function mostrarDetalhes() {
    const detalhes = document.getElementById('detalhes');
    detalhes.classList.toggle('mostrar');
    
    // Adiciona scroll suave até os detalhes
    if(detalhes.classList.contains('mostrar')) {
        setTimeout(() => {
            detalhes.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

function confirmarPresenca() {
    const botao = document.querySelector('.botao-confirmar');
    botao.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        alert('Parabéns! Sua presença foi confirmada no Ubers Team.\nPrepare-se para fazer história no Blue Lock!');
        window.location.href = "https://discord.gg/uXNwg3Gxem";
    }, 200);
}
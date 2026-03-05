// 1. PRIMEIRO PASSO: Pegamos os elementos lá do HTML usando o ID que demos a eles
const botao = document.getElementById('botao-magico');
const mensagem = document.getElementById('mensagem-secreta');

// 2. SEGUNDO PASSO: Adicionamos um "ouvinte". Ele fica esperando o usuário clicar no botão.
botao.addEventListener('click', function() {
    
    // 3. TERCEIRO PASSO: O que acontece após o clique?
    // Verificamos se a mensagem tem a classe 'escondido'
    if (mensagem.classList.contains('escondido')) {
        
        // Se está escondida, a gente tira a classe para ela aparecer na tela
        mensagem.classList.remove('escondido');
        
        // E mudamos o texto do botão para fazer sentido
        botao.textContent = 'Esconder Curiosidade';
        
    } else {
        
        // Se ela já estiver aparecendo, a gente coloca a classe 'escondido' de volta para sumir
        mensagem.classList.add('escondido');
        
        // E voltamos o texto do botão ao normal
        botao.textContent = 'Revelar Curiosidade';
        
    }
});
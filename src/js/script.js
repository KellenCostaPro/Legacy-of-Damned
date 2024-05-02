document.addEventListener('DOMContentLoaded', function () {
    var menuLinks = document.querySelectorAll('.desktop-menu ul li a');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            var targetId = link.getAttribute('href'); // Obter o ID da seção de destino do atributo href do link

            // Verificar se o link é para uma seção interna
            if (targetId.startsWith('#')) {
                event.preventDefault(); // Impedir o comportamento padrão do link

                // Verificar se a seção de destino está no documento atual
                var targetSection = document.querySelector(targetId);

                // Se a seção de destino não estiver no documento atual, redirecione para o link do index.html
                if (!targetSection) {
                    window.location.href = 'index.html' + targetId;
                }

                // Se a seção de destino existir, rolar suavemente até ela
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' }); // Rolar suavemente até a seção de destino
                }
            }
        });
    });
});



// Observador de interseção para animação de elementos
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

// Observar todos os elementos com a classe .hidden para animação quando entram na viewport
const elements = document.querySelectorAll('.hidden');
elements.forEach((element) =>
    myObserver.observe(element)
);


document.addEventListener('DOMContentLoaded', function () {
    // Função para fechar o pop-up quando clicar fora dele
    function closePopUpOutside() {
        const popUpOverlays = document.querySelectorAll('.popup-overlay');
        popUpOverlays.forEach((popupOverlay) => {
            popupOverlay.addEventListener('click', function(event) {
                if (event.target === popupOverlay) {
                    popupOverlay.style.display = 'none';
                }
            });
        });
    }



    // Seleciona todos os botões "Ver mais"
    const buttons = document.querySelectorAll('.button');
    
    // Adiciona um ouvinte de evento de clique a cada botão "Ver mais"
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Obtém o ID único do pop-up overlay correspondente
            const popupId = `popupOverlay${index + 1}`;
            // Seleciona o pop-up overlay correspondente ao botão clicado
            const popupOverlay = document.getElementById(popupId);
            
            // Exibe o pop-up overlay correspondente ao botão clicado
            if (popupOverlay) {
                popupOverlay.style.display = 'block';
                // Chama a função para fechar o pop-up clicando fora dele
                closePopUpOutside();
            }
        });
    });

    // Seleciona todos os botões de fechar pop-up
    const closeButtons = document.querySelectorAll('.popup-close');

    // Adiciona um ouvinte de evento de clique a cada botão de fechar pop-up
    closeButtons.forEach((closeButton) => {
        closeButton.addEventListener('click', () => {
            // Obtém o pop-up overlay pai do botão de fechar clicado
            const popupOverlay = closeButton.closest('.popup-overlay');
            
            // Oculta o pop-up overlay correspondente ao botão de fechar clicado
            if (popupOverlay) {
                popupOverlay.style.display = 'none';
            }
        });
    });

    // Chama a função para fechar o pop-up clicando fora dele
    closePopUpOutside();
});

/* button de info*/
document.addEventListener('DOMContentLoaded', function () {
    const personagemSections = document.querySelectorAll('.personagem');

    personagemSections.forEach(function(personagemSection) {
        const infoButton = personagemSection.querySelector('.info');
        const popUp = personagemSection.querySelector('.pop-up');
        
        infoButton.addEventListener('mouseenter', function () {
            if (popUp) {
                popUp.style.display = 'block';
            }
        });

        infoButton.addEventListener('mouseleave', function () {
            if (popUp) {
                popUp.style.display = 'none';
            }
        });
    });
});





















document.addEventListener("DOMContentLoaded", function() {
    const timelineNavItems = document.querySelectorAll('.timeline__nav li');
    const timelineSections = document.querySelectorAll('.timeline__section .column');

    // Função para mostrar a seção correspondente quando um item da navegação da timeline é clicado
    function showTimelineSection(index) {
        // Remover a classe 'active' de todos os itens da navegação da timeline
        timelineNavItems.forEach(item => {
            item.classList.remove('active');
        });
        // Adicionar a classe 'active' ao item clicado
        timelineNavItems[index].classList.add('active');

        // Ocultar todas as seções da timeline
        timelineSections.forEach(section => {
            section.style.display = 'none';
        });
        // Mostrar a seção correspondente ao item clicado
        timelineSections[index].style.display = 'block';
    }

    // Adicionar evento de clique a cada item da navegação da timeline
    timelineNavItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            showTimelineSection(index);
        });
    });

    // Exibir a primeira seção da timeline por padrão
    showTimelineSection(0);
});




















document.addEventListener("DOMContentLoaded", function() {
    // Selecionar todos os botões "Ver mais"
    const verMaisBtns = document.querySelectorAll(".time-butt");
    
    // Para cada botão "Ver mais"
    verMaisBtns.forEach(function(verMaisBtn) {
        // Mostrar o popup associado a este botão
        verMaisBtn.addEventListener("click", function() {
            // Encontrar o popup correspondente usando a classe do botão
            const popupId = verMaisBtn.dataset.popupId;
            const popupOverlay = document.getElementById(popupId);
            
            // Verificar se o popup foi encontrado
            if (popupOverlay) {
                popupOverlay.style.display = "block";
            }
        });
    });

    // Selecionar todos os botões de fechar
    const closeBtns = document.querySelectorAll(".popup-content .time-butt");
    
    // Para cada botão de fechar
    closeBtns.forEach(function(closeBtn) {
        // Fechar o popup correspondente quando o botão de fechar for clicado
        closeBtn.addEventListener("click", function() {
            // Encontrar o popup correspondente usando a classe do botão
            const popupId = closeBtn.dataset.popupId;
            const popupOverlay = document.getElementById(popupId);
            
            // Verificar se o popup foi encontrado
            if (popupOverlay) {
                popupOverlay.style.display = "none";
            }
        });
    });
});






// Seleciona os elementos bloqueados
const lockedItems = document.querySelectorAll('.locked');

// Adiciona um event listener para cada item bloqueado
lockedItems.forEach(item => {
    item.addEventListener('click', () => {
        // Exibe a camada de sobreposição da área restrita
        const restrictedOverlay = document.querySelector('.restricted-overlay');
        restrictedOverlay.style.display = 'flex';

        // Aplica a classe de animação de tremor ao site todo
        document.body.classList.add('shake-animation');

        // Remove a classe de animação após um tempo
        setTimeout(() => {
            document.body.classList.remove('shake-animation');
        }, 500); // Tempo deve ser igual à duração da animação em milissegundos
    });
});


// Seleciona a camada de sobreposição da área restrita
const restrictedOverlay = document.querySelector('.restricted-overlay');

// Adiciona um event listener para ocultar a camada de sobreposição quando o usuário clicar fora do cadeado
restrictedOverlay.addEventListener('click', (event) => {
    // Verifica se o clique foi fora do cadeado
    if (!event.target.closest('.locked-image')) {
        // Oculta a camada de sobreposição da área restrita
        restrictedOverlay.style.display = 'none';

        // Redireciona o usuário para a primeira data não bloqueada
        const unlockedItem = document.querySelector('.timeline__nav li:not(.locked)');
        if (unlockedItem) {
            unlockedItem.click(); // Simula um clique na primeira data não bloqueada
        }
    }
});





















let jogos = [
    "Minecraft",
    "Valorant",
    "League of Legends"
];

// Mapeamento dos Elementos do DOM (HTML)
const loginSection = document.getElementById("login-section");
const dashboardSection = document.getElementById("dashboard-section");
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("login-error");

const gameInput = document.getElementById("game-input");
const gameError = document.getElementById("game-error");
const btnAddStart = document.getElementById("btn-add-start");
const btnAddEnd = document.getElementById("btn-add-end");
const gamesListContainer = document.getElementById("games-list");
const btnLogout = document.getElementById("btn-logout");


// ============================================================================
// FUNÇÕES DE LOGIN E AUTENTICAÇÃO
// ============================================================================

/**
 * Controla o processo de login validando as credenciais informadas.
 * @param {Event} event - Objeto de evento do formulário
 */
function processarLogin(event) {
    event.preventDefault(); // Evita o recarregamento automático da página

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validação: Campos Vazios
    if (username === "" || password === "") {
        exibirErro(loginError, "Por favor, preencha todos os campos.");
        return;
    }

    // Validação: Credenciais Corretas (aluno / fiap2025)
    if (username === "aluno" && password === "fiap2025") {
        loginError.classList.add("hidden");
        loginSection.classList.add("hidden");
        dashboardSection.classList.remove("hidden");
        
        // Renderiza a lista inicial após o login bem-sucedido
        renderizarJogos();
    } else {
        exibirErro(loginError, "Usuário ou senha incorretos.");
    }
}

/**
 * Realiza o logout limpando os campos e voltando para a tela de login.
 */
function processarLogout() {
    usernameInput.value = "";
    passwordInput.value = "";
    gameInput.value = "";
    loginError.classList.add("hidden");
    gameError.classList.add("hidden");
    
    dashboardSection.classList.add("hidden");
    loginSection.classList.remove("hidden");
}


// ============================================================================
// FUNÇÕES DO CRUD DE JOGOS
// ============================================================================

/**
 * Renderiza dinamicamente a lista de jogos na tela a partir do array 'jogos'.
 */
function renderizarJogos() {
    gamesListContainer.innerHTML = ""; // Limpa a lista existente na tela

    // Percorre o array de strings utilizando o índice (index) para exclusão/edição corretas
    jogos.forEach((jogo, index) => {
        const li = document.createElement("li");
        li.className = "game-item";

        li.innerHTML = `
            <span class="game-name">${jogo}</span>
            <div class="action-buttons">
                <button class="btn btn-secondary btn-action" onclick="editarJogo(${index})">Editar</button>
                <button class="btn btn-danger btn-action" onclick="removerJogo(${index})">Remover</button>
            </div>
        `;

        gamesListContainer.appendChild(li);
    });
}

/**
 * Adiciona um jogo ao final do array.
 */
function adicionarNoFinal() {
    const novoJogo = gameInput.value.trim();

    if (validarInputJogo(novoJogo)) {
        jogos.push(novoJogo); // Adiciona no fim
        posAcaoSucesso();
    }
}

/**
 * Adiciona um jogo ao início do array.
 */
function adicionarNoInicio() {
    const novoJogo = gameInput.value.trim();

    if (validarInputJogo(novoJogo)) {
        jogos.unshift(novoJogo); // Adiciona no início
        posAcaoSucesso();
    }
}

/**
 * Edita individualmente um jogo do array com base em seu índice.
 * @param {number} index - Posição do item no array
 */
function editarJogo(index) {
    gameError.classList.add("hidden");
    
    // Captura o novo valor via Prompt nativo do navegador
    const valorAtual = jogos[index];
    const novoValor = prompt("Edite o nome do jogo:", valorAtual);

    // Regra: Se o usuário cancelar ou deixar o campo vazio, o item original é mantido
    if (novoValor === null || novoValor.trim() === "") {
        return; 
    }

    jogos[index] = novoValor.trim(); // Atualiza a string no array
    renderizarJogos(); // Atualiza a interface
}

/**
 * Remove individualmente um jogo do array utilizando seu índice.
 * @param {number} index - Posição do item no array
 */
function removerJogo(index) {
    gameError.classList.add("hidden");
    
    // Remove 1 elemento a partir do índice especificado
    jogos.splice(index, 1); 
    renderizarJogos(); // Atualiza a interface
}


// ============================================================================
// FUNÇÕES AUXILIARES / VALIDAÇÃO
// ============================================================================

/**
 * Valida se o campo do jogo não está vazio.
 * @param {string} valor - O texto capturado do input
 * @returns {boolean} - Verdadeiro se for válido, falso caso contrário
 */
function validarInputJogo(valor) {
    if (valor === "") {
        exibirErro(gameError, "O nome do jogo não pode estar vazio.");
        return false;
    }
    gameError.classList.add("hidden");
    return true;
}

/**
 * Limpa o campo de texto e força a atualização visual da interface.
 */
function posAcaoSucesso() {
    gameInput.value = "";
    renderizarJogos();
}

/**
 * Exibe mensagens de erro em contêineres específicos da interface.
 * @param {HTMLElement} elementoErro - O elemento HTML container do erro
 * @param {string} mensagem - Texto do erro a ser exibido
 */
function exibirErro(elementoErro, mensagem) {
    elementoErro.textContent = mensagem;
    elementoErro.classList.remove("hidden");
}


// ============================================================================
// MAPEAMENTO DE EVENTOS (LISTENERS)
// ============================================================================
loginForm.addEventListener("submit", processarLogin);
btnAddEnd.addEventListener("click", adicionarNoFinal);
btnAddStart.addEventListener("click", adicionarNoInicio);
btnLogout.addEventListener("click", processarLogout);
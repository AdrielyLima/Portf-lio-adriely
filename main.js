
const portfolio = {
    nome: "Adriely Lima",

    titulo: "Estudante de Análise e Desenvolvimento de Sistemas",

    foto: "minha-foto.png",

    sobre: "Sou estudante de Análise e Desenvolvimento de Sistemas no Centro Universitário Piaget (UNIPIAGET), com interesse em tecnologia, programação e segurança da informação. Durante minha formação, venho desenvolvendo conhecimentos em lógica de programação, desenvolvimento de sistemas e fundamentos da tecnologia. Sou uma pessoa dedicada, organizada e comprometida com minhas responsabilidades. Busco oportunidades para adquirir experiência profissional e crescer na área de TI.",

    formacao: {
        curso: "Análise e Desenvolvimento de Sistemas",
        instituicao: "Centro Universitário Piaget (UNIPIAGET)",
        status: "Em andamento",
        ano: "2026",
        
    },
    

    conhecimentos: [
        "HTML",
        "CSS",
        "JavaScript",
        "Lógica de Programação",
        "UX/UI",
        "Fundamentos de Segurança da Informação"
    ],

    projetos: [
        {
            nome: "Análise UX do iFood",
            descricao: "Análise da experiência do usuário no aplicativo iFood.",
            detalhes: "O projeto identificou dificuldades para encontrar cupons de desconto. A proposta foi melhorar a visibilidade dos cupons, utilizando conceitos da Lei de Hick e prevenção de erros.",
            tecnologias: ["UX/UI", "Lei de Hick", "Personas"]
        },

        {
            nome: "Calculadora JavaScript",
            descricao: "Calculadora com operações matemáticas básicas.",
            detalhes: "Projeto que permite realizar operações de adição, subtração, multiplicação e divisão utilizando JavaScript.",
            tecnologias: ["HTML", "CSS", "JavaScript"]
        },

        {
            nome: "Tabela de Comidas",
            descricao: "Projeto de tabela desenvolvido para apresentar informações sobre alimentos.",
            detalhes: "Projeto desenvolvido com estrutura HTML, estilização CSS e recursos de JavaScript.",
            tecnologias: ["HTML", "CSS", "JavaScript"]
        }
    ],

    contato: {
        email: "adrielycavalcante1237@gmail.com",
        github: "https://github.com/AdrielyLima",
        linkedin: "https://www.linkedin.com/in/adriely-lima-159799242/"
    }
};


// MOSTRAR INFORMAÇÕES INICIAIS
document.getElementById("nome").textContent = portfolio.nome;

document.getElementById("titulo").textContent = portfolio.titulo;

document.getElementById("sobre-texto").textContent = portfolio.sobre;


// MOSTRAR FORMAÇÃO
const formacao = document.getElementById("formacao-conteudo");

formacao.innerHTML = `
    <h3>${portfolio.formacao.curso}</h3>
    <p>${portfolio.formacao.instituicao}</p>
    <p>Status: ${portfolio.formacao.status}</p>
    <p>Ano: ${portfolio.formacao.ano}</p>
`;


// MOSTRAR CONHECIMENTOS
const conhecimentos = document.getElementById("lista-conhecimentos");

portfolio.conhecimentos.forEach(conhecimento => {
    const item = document.createElement("div");

    item.classList.add("conhecimento");

    item.textContent = conhecimento;

    conhecimentos.appendChild(item);
});


// MOSTRAR PROJETOS
const projetos = document.getElementById("lista-projetos");

portfolio.projetos.forEach((projeto, index) => {
    const card = document.createElement("div");

    card.classList.add("projeto");

    card.innerHTML = `
        <h3>${projeto.nome}</h3>

        <p>${projeto.descricao}</p>

        <button onclick="mostrarDetalhes(${index})">
            Ver detalhes
        </button>

        <div class="detalhes" id="detalhes-${index}">
            <p>${projeto.detalhes}</p>
            <p><strong>Tecnologias:</strong>
            ${projeto.tecnologias.join(", ")}</p>
        </div>
    `;

    projetos.appendChild(card);
});


// MOSTRAR DETALHES DOS PROJETOS
function mostrarDetalhes(index) {
    const detalhes = document.getElementById(`detalhes-${index}`);

    detalhes.classList.toggle("ativo");
}


// MOSTRAR CONTATOS
const contato = document.getElementById("lista-contato");

contato.innerHTML = `
    <p>
        E-mail:
        <a href="mailto:${portfolio.contato.email}">
            ${portfolio.contato.email}
        </a>
    </p>

    <p>
        GitHub:
        <a href="${portfolio.contato.github}" target="_blank">
            Acessar GitHub
        </a>
    </p>

    <p>
        LinkedIn:
        <a href="${portfolio.contato.linkedin}" target="_blank">
            Acessar LinkedIn
        </a>
    </p>
`;

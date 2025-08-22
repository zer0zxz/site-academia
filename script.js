// script.js

// Função para salvar plano e redirecionar
function contratarPlano(nomePlano) {
  console.log("Plano selecionado:", nomePlano);
  localStorage.setItem('planoSelecionado', nomePlano);
  window.location.href = "/login"; // redireciona para login
}

// --- Exemplo: gerar unidades dinamicamente, parecido com o .map do React ---
document.addEventListener("DOMContentLoaded", function () {
  const unidades = [
    {
      nome: 'ZER0GYM - Bairro Exemplo',
      endereco: 'Av. das Palmeiras, 123 - Bairro Exemplo, Várzea Grande - MT',
      imagem: 'unidade.png',
      maps: 'https://www.google.com/maps'
    },
    {
      nome: 'ZER0GYM - Centro',
      endereco: 'Rua Principal, 456 - Centro, Cuiabá - MT',
      imagem: 'unidade.png',
      maps: 'https://www.google.com/maps'
    },
    {
      nome: 'ZER0GYM - Não Centro',
      endereco: 'Rua Não é do Centro, 456 - Não Centro, Várzea Grande - MT',
      imagem: 'unidade.png',
      maps: 'https://www.google.com/maps'
    }
  ];

  const container = document.querySelector("#unidades .lista-unidades");

  if (container) {
    unidades.forEach(u => {
      const link = document.createElement("a");
      link.href = u.maps;
      link.target = "_blank";
      link.style.textDecoration = "none";
      link.style.color = "inherit";
      link.style.width = "300px";

      link.innerHTML = `
        <div style="border:1px solid red;border-radius:10px;padding:15px;background:#1d1d1d;text-align:center;transition:transform 0.2s;">
          <img src="${u.imagem}" alt="${u.nome}" style="width:100%;border-radius:8px" />
          <h3>${u.nome}</h3>
          <p>${u.endereco}</p>
        </div>
      `;

      // Efeito hover
      link.addEventListener("mouseenter", () => {
        link.firstElementChild.style.transform = "scale(1.03)";
      });
      link.addEventListener("mouseleave", () => {
        link.firstElementChild.style.transform = "scale(1)";
      });

      container.appendChild(link);
    });
  }
});

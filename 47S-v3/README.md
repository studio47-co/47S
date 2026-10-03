# 47S — Site Institucional

Site institucional da 47S, construído com **HTML5, CSS3 e JavaScript Vanilla**, sem frameworks.

## Estrutura do projeto

```text
47S-site/
├── index.html
├── pages/
│   ├── sobre.html
│   ├── servicos.html
│   ├── projetos.html
│   ├── modelos.html
│   ├── processo.html
│   └── contato.html
├── projetos/
│   ├── clinica.html
│   ├── negocio-local.html
│   ├── cosmeticos.html
│   └── advocacia.html
├── modelos/
│   ├── business.html
│   ├── essential.html
│   ├── editorial.html
│   ├── conversion.html
│   ├── portfolio.html
│   └── local.html
├── css/
│   ├── variables.css       # cores, espaçamentos e fontes
│   ├── reset.css           # normalização/base
│   ├── typography.css      # tipografia
│   ├── global.css          # utilitários e estrutura global
│   ├── navbar.css          # navegação
│   ├── hero.css            # hero da home
│   ├── manifesto.css       # manifesto
│   ├── services.css        # lista de serviços
│   ├── projects.css        # lista de projetos
│   ├── catalog.css         # filtros e catálogo
│   ├── project-page.css    # páginas de cases
│   ├── models.css          # modelos
│   ├── services-page.css   # página de serviços
│   ├── process.css         # processo
│   ├── about.css           # sobre
│   ├── contact.css         # contato/formulário
│   ├── footer.css          # rodapé
│   ├── animations.css      # animações/reveal
│   └── responsive.css      # responsividade
├── js/
│   ├── main.js             # inicialização geral e reveal
│   ├── navbar.js           # página ativa
│   ├── mobile-menu.js      # menu mobile
│   ├── animations.js       # efeito magnet
│   ├── interactions.js     # ações genéricas
│   ├── filters.js          # filtros do catálogo
│   ├── form.js             # validação do formulário
│   ├── projects.js         # reservado para catálogo
│   └── site.js              # reservado para comportamentos específicos
└── assets/
    ├── fonts/
    ├── icons/
    ├── images/
    ├── models/
    └── projects/
```

## Organização do código

- Cada arquivo CSS possui uma responsabilidade específica.
- O HTML mantém a estrutura e o conteúdo de cada página.
- O JavaScript foi separado por comportamento para facilitar manutenção.
- O código foi formatado com indentação consistente e linhas separadas.
- Os caminhos existentes entre páginas, estilos, scripts e assets foram preservados.
- A organização não depende de framework ou build system.

## Como executar

Abra `index.html` no navegador ou use um servidor local:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Onde alterar cada parte

### Cores e variáveis
`css/variables.css`

### Tipografia
`css/typography.css`

### Home
`index.html`

### Páginas institucionais
`pages/`

### Projetos
`projetos/` e `pages/projetos.html`

### Modelos
`modelos/` e `pages/modelos.html`

### Formulário
`pages/contato.html` + `js/form.js`

### Responsividade
`css/responsive.css` — breakpoints: 1100px, 900px (menu hambúrguer), 601–900px (tablet), 520px, 380px, `hover:none` (toque) e celular deitado (landscape). Carregado em todas as páginas.

### Menu mobile
`js/mobile-menu.js`

## Observações

O formulário continua sendo apenas uma simulação no front-end, sem backend.

Os projetos e modelos apresentados no site são conceituais.

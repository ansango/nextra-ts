import { DocsThemeConfig } from "nextra-theme-docs";
const config: DocsThemeConfig = {
  logo: <span className="font-semibold">ansango</span>,
  project: {
    link: "https://github.com/ansango",
  },
  docsRepositoryBase: "https://github.com/ansango/anibalsantos",
  search: {
    placeholder: "Buscar en el sitio",
    emptyResult: (
      <span className="nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400">
        No se encontraron resultados
      </span>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 0,
  },
  footer: {
    text: "ansango",
  },
  toc: {
    title: "En esta página",
  },
  editLink: {
    text: "Edita esta página",
  },
  feedback: {
    content: "¿Tienes alguna sugerencia?",
  },
};

export default config;

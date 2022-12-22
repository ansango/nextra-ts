import { formatDate } from "lib";
import { useRouter } from "next/router";
import { useConfig, type DocsThemeConfig } from "nextra-theme-docs";

const Time = ({ timestamp }: { timestamp: Date }) => {
  const { route } = useRouter();
  if (route === "/") return null;
  return (
    <time dateTime={formatDate(timestamp)}>
      Última actualización: {formatDate(timestamp)}
    </time>
  );
};

const gitTimestamp = ({ timestamp }: { timestamp: Date }) => (
  <Time timestamp={timestamp} />
);

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { frontMatter } = useConfig();
    return {
      titleTemplate: "%s – ansango",
      description: "ansango",
    };
  },
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
    text: "Edita esta página →",
  },
  feedback: {
    content: "¿Alguna sugerencia? →",
  },
  gitTimestamp,
  darkMode: true,
  primaryHue: {
    dark: 290,
    light: 268,
  },
};

export default config;

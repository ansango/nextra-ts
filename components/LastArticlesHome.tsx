import { useAllLastFiles } from "lib";

export const LastArticlesHome = () => {
  const articles = useAllLastFiles(3);

  return (
    <section className="relative mb-24">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight mb-4">
              Últimas publicaciones
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Estos son los últimos artículos que he publicado.
            </p>
          </div>
          <div className="max-w-sm mx-auto md:max-w-2xl lg:max-w-none">
            <div className="grid gap-12 md:gap-6 md:grid-cols-3 items-start">
              {articles.map((article, index) => (
                <article
                  key={`${article.slug}-${index}`}
                  className="flex flex-col items-center p-6 bg-white dark:bg-[#0e0e0e] rounded shadow-xl h-48"
                ></article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { dictionary } from '@/lib/dictionary';
import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { Footer } from '@/components/layout/footer';

// This is the page component for [lang]
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  // Await params for Next.js 15
  const { lang: langParam } = await params;
  
  // Ensure we fallback to 'es' if something weird happens, though middleware prevents it
  const lang = langParam === 'en' ? 'en' : 'es';
  const content = dictionary[lang];

  return (
    <div className="flex min-h-screen flex-col">
      <Header content={content.nav} lang={lang} />
      <main className="flex-1">
        <Hero content={content.hero} lang={lang} />
        <section id="descripcion" className="py-20 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.about.title}</h2>
            <div className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line text-left">
              {content.about.description}
            </div>
          </div>
        </section>
        <Skills content={content.skills} lang={lang} />
        <Projects content={content.projects} lang={lang} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
}

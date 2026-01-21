import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-spa.jpg';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Spa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-spa-dark/80 via-spa-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/50 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-spa-gold/10 rounded-full blur-3xl animate-float animation-delay-200" />

      {/* Content */}
      <div className="spa-container relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-up">
            <Sparkles className="w-5 h-5 text-spa-gold" />
            <span className="text-spa-gold font-medium tracking-wider uppercase text-sm">
              HF Beauty & Spa Center
            </span>
          </div>

          <h1 className="spa-heading text-primary-foreground mb-6 animate-fade-up animation-delay-100">
            {t('hero.title')}
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed animate-fade-up animation-delay-200 font-light">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection('#contact')}
            >
              {t('hero.cta.booking')}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection('#services')}
            >
              {t('hero.cta.services')}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-up animation-delay-400">
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">10+</div>
              <div className="text-primary-foreground/70 mt-1">{t('about.experience')}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">5K+</div>
              <div className="text-primary-foreground/70 mt-1">{t('about.clients')}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">25+</div>
              <div className="text-primary-foreground/70 mt-1">{t('about.staff')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary-foreground/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { Award, Users, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import aboutImage from '@/assets/about-spa.jpg';

const About: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      value: '10+',
      label: t('about.experience'),
    },
    {
      icon: Users,
      value: '5000+',
      label: t('about.clients'),
    },
    {
      icon: Heart,
      value: '25+',
      label: t('about.staff'),
    },
  ];

  return (
    <section id="about" className="spa-section bg-spa-cream">
      <div className="spa-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-up">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={aboutImage}
                alt="HF Beauty & Spa Center"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/30 to-transparent" />
            </div>
            {/* Decorative Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-elevated">
              <div className="text-4xl font-serif font-bold">10+</div>
              <div className="text-sm opacity-90">{t('about.experience')}</div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-spa-sage-light rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="animate-fade-up animation-delay-200">
            <span className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4">
              {t('about.title')}
            </span>
            <h2 className="spa-subheading text-foreground mb-6">
              {t('about.subtitle')}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-2xl bg-background shadow-soft"
                >
                  <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-serif font-bold text-foreground">
                    {feature.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {feature.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

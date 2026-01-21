import React from 'react';
import { 
  Users, 
  Award, 
  Shield, 
  Cpu, 
  Leaf, 
  BadgePercent 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyUs: React.FC = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Users,
      titleKey: 'whyus.professional',
      descKey: 'whyus.professional.desc',
    },
    {
      icon: Award,
      titleKey: 'whyus.quality',
      descKey: 'whyus.quality.desc',
    },
    {
      icon: Shield,
      titleKey: 'whyus.hygiene',
      descKey: 'whyus.hygiene.desc',
    },
    {
      icon: Cpu,
      titleKey: 'whyus.equipment',
      descKey: 'whyus.equipment.desc',
    },
    {
      icon: Leaf,
      titleKey: 'whyus.ambiance',
      descKey: 'whyus.ambiance.desc',
    },
    {
      icon: BadgePercent,
      titleKey: 'whyus.price',
      descKey: 'whyus.price.desc',
    },
  ];

  return (
    <section className="spa-section bg-background">
      <div className="spa-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4">
            {t('whyus.title')}
          </span>
          <h2 className="spa-subheading text-foreground mb-4">
            {t('whyus.subtitle')}
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 rounded-2xl bg-card border border-border/50 hover:shadow-card transition-all duration-500 animate-fade-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-spa-sage-light flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <reason.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {t(reason.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(reason.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

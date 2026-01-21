import React from 'react';
import { 
  Sparkles, 
  Heart, 
  Zap, 
  Palette, 
  Hand, 
  Flame, 
  Waves, 
  Scissors,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Sparkles,
      titleKey: 'services.skincare',
      descKey: 'services.skincare.desc',
      color: 'from-emerald-400 to-teal-500',
    },
    {
      icon: Heart,
      titleKey: 'services.bodyshaping',
      descKey: 'services.bodyshaping.desc',
      color: 'from-rose-400 to-pink-500',
    },
    {
      icon: Zap,
      titleKey: 'services.laser',
      descKey: 'services.laser.desc',
      color: 'from-amber-400 to-orange-500',
    },
    {
      icon: Palette,
      titleKey: 'services.nails',
      descKey: 'services.nails.desc',
      color: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: Hand,
      titleKey: 'services.massage',
      descKey: 'services.massage.desc',
      color: 'from-sky-400 to-blue-500',
    },
    {
      icon: Flame,
      titleKey: 'services.hammam',
      descKey: 'services.hammam.desc',
      color: 'from-red-400 to-rose-500',
    },
    {
      icon: Waves,
      titleKey: 'services.pool',
      descKey: 'services.pool.desc',
      color: 'from-cyan-400 to-teal-500',
    },
    {
      icon: Scissors,
      titleKey: 'services.hairdresser',
      descKey: 'services.hairdresser.desc',
      color: 'from-violet-400 to-indigo-500',
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="spa-section bg-background">
      <div className="spa-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4">
            {t('services.title')}
          </span>
          <h2 className="spa-subheading text-foreground mb-4">
            {t('services.subtitle')}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="spa-card group p-6 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {t(service.titleKey)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {t(service.descKey)}
              </p>

              {/* Action */}
              <Button
                variant="ghost"
                size="sm"
                className="p-0 h-auto text-primary hover:bg-transparent group/btn"
                onClick={scrollToContact}
              >
                {t('services.book')}
                <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

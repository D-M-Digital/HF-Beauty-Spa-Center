import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t, language } = useLanguage();

  const testimonials = [
    {
      name: 'Ayşe K.',
      location: language === 'tr' ? 'Girne' : 'Kyrenia',
      rating: 5,
      text: language === 'tr' 
        ? 'HF Spa\'da geçirdiğim her dakika muhteşemdi. Cilt bakımı uzmanları gerçekten işlerini çok iyi biliyorlar. Hijyen konusunda da çok titizler. Kesinlikle tavsiye ederim!'
        : 'Every minute I spent at HF Spa was wonderful. The skincare specialists really know their job well. They are also very meticulous about hygiene. Highly recommended!',
    },
    {
      name: 'Mehmet Y.',
      location: 'Lapta',
      rating: 5,
      text: language === 'tr'
        ? 'İş stresinden sonra masaj terapisi için gittim. Personel çok profesyonel ve nazik. Tesisler son derece temiz ve modern. Artık düzenli müşteriyim.'
        : 'I went for massage therapy after work stress. The staff is very professional and kind. The facilities are extremely clean and modern. I am now a regular customer.',
    },
    {
      name: 'Elena M.',
      location: language === 'tr' ? 'Girne' : 'Kyrenia',
      rating: 5,
      text: language === 'tr'
        ? 'Hamam ve sauna deneyimi harikaydı! Geleneksel Türk hamamının modernleştirilmiş hali. Jakuzi de çok rahatlatıcı. Kuzey Kıbrıs\'ın en iyi spa merkezi!'
        : 'The hammam and sauna experience was amazing! A modernized version of traditional Turkish bath. The jacuzzi is also very relaxing. The best spa center in North Cyprus!',
    },
  ];

  return (
    <section className="spa-section bg-spa-cream">
      <div className="spa-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4">
            {t('testimonials.title')}
          </span>
          <h2 className="spa-subheading text-foreground mb-4">
            {t('testimonials.subtitle')}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="spa-card p-8 bg-background animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-spa-gold text-spa-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-spa-sage-light flex items-center justify-center">
                  <span className="font-serif font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import galleryImage1 from '@/assets/gallery-1.jpg';
import galleryImage2 from '@/assets/gallery-2.jpg';
import galleryImage3 from '@/assets/gallery-3.jpg';
import galleryImage4 from '@/assets/gallery-4.jpg';
import galleryImage5 from '@/assets/gallery-5.jpg';
import galleryImage6 from '@/assets/gallery-6.jpg';

const Gallery: React.FC = () => {
  const { t, language } = useLanguage();

  const galleryItems = [
    {
      image: galleryImage1,
      title: language === 'tr' ? 'Jakuzi & Wellness' : 'Jacuzzi & Wellness',
      description: language === 'tr' ? 'Rahatlatıcı jakuzi deneyimi' : 'Relaxing jacuzzi experience',
    },
    {
      image: galleryImage2,
      title: language === 'tr' ? 'Hamam & Sauna' : 'Hammam & Sauna',
      description: language === 'tr' ? 'Geleneksel Türk hamamı' : 'Traditional Turkish bath',
    },
    {
      image: galleryImage3,
      title: language === 'tr' ? 'Masaj Odaları' : 'Massage Rooms',
      description: language === 'tr' ? 'Huzurlu masaj alanları' : 'Peaceful massage areas',
    },
    {
      image: galleryImage4,
      title: language === 'tr' ? 'Cilt Bakım Salonu' : 'Skin Care Salon',
      description: language === 'tr' ? 'Modern cilt bakım merkezi' : 'Modern skin care center',
    },
    {
      image: galleryImage5,
      title: language === 'tr' ? 'Havuz Alanı' : 'Pool Area',
      description: language === 'tr' ? 'Kapalı yüzme havuzu' : 'Indoor swimming pool',
    },
    {
      image: galleryImage6,
      title: language === 'tr' ? 'Kuaför Salonu' : 'Hair Salon',
      description: language === 'tr' ? 'Profesyonel kuaför hizmetleri' : 'Professional hair services',
    },
  ];

  return (
    <section id="gallery" className="spa-section bg-spa-cream">
      <div className="spa-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4">
            {t('gallery.title')}
          </span>
          <h2 className="spa-subheading text-foreground mb-4">
            {t('gallery.subtitle')}
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-card animate-fade-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-spa-dark/80 via-spa-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-xl font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

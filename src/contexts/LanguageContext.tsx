import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.services': 'Hizmetlerimiz',
    'nav.gallery': 'Galeri',
    'nav.contact': 'İletişim',
    'nav.booking': 'Randevu Al',

    // Hero
    'hero.title': 'Huzurun ve Güzelliğin Adresi',
    'hero.subtitle': 'Girne ve Lapta\'da profesyonel spa ve güzellik hizmetleri ile kendinizi şımartın',
    'hero.cta.booking': 'Randevu Al',
    'hero.cta.services': 'Hizmetlerimizi Keşfet',

    // About
    'about.title': 'Hakkımızda',
    'about.subtitle': 'HF Beauty & Spa Center',
    'about.description': 'HF Beauty & Spa Center olarak, Kuzey Kıbrıs\'ın en prestijli spa ve güzellik merkeziyiz. Girne ve Lapta şubelerimizde, uzman kadromuz ve son teknoloji cihazlarımızla sizlere en kaliteli hizmeti sunuyoruz. Misyonumuz, her müşterimizin kendini özel hissetmesini sağlamak ve iç huzuru ile dış güzelliği bir araya getirmektir.',
    'about.experience': 'Yıllık Deneyim',
    'about.clients': 'Mutlu Müşteri',
    'about.staff': 'Uzman Personel',

    // Services
    'services.title': 'Hizmetlerimiz',
    'services.subtitle': 'Size özel tasarlanmış lüks spa ve güzellik deneyimleri',
    'services.skincare': 'Cilt Bakımı & Medikal Cilt Bakımları',
    'services.skincare.desc': 'Profesyonel cilt analizi ve kişiye özel bakım protokolleri',
    'services.bodyshaping': 'Yüz & Vücut Şekillendirme',
    'services.bodyshaping.desc': 'Son teknoloji cihazlarla etkili şekillendirme',
    'services.laser': 'Epilasyon & Lazer',
    'services.laser.desc': 'Kalıcı ve güvenli lazer epilasyon uygulamaları',
    'services.nails': 'Manikür & Pedikür / Nail Art',
    'services.nails.desc': 'Tırnak bakımı ve yaratıcı nail art tasarımları',
    'services.massage': 'Masaj Terapi',
    'services.massage.desc': 'Rahatlatıcı ve terapötik masaj seansları',
    'services.hammam': 'Hamam & Sauna & Buhar',
    'services.hammam.desc': 'Geleneksel hamam ve modern wellness deneyimi',
    'services.pool': 'Jakuzi & Havuz',
    'services.pool.desc': 'Rahatlatıcı jakuzi ve yüzme havuzu keyfi',
    'services.hairdresser': 'Bayan & Erkek Kuaför',
    'services.hairdresser.desc': 'Profesyonel saç kesimi ve bakım hizmetleri',
    'services.details': 'Detaylar',
    'services.book': 'Randevu Al',

    // Gallery
    'gallery.title': 'Tesislerimiz',
    'gallery.subtitle': 'Modern ve huzurlu mekanlarımızı keşfedin',

    // Why Us
    'whyus.title': 'Neden Bizi Seçmelisiniz?',
    'whyus.subtitle': 'HF Beauty & Spa Center farkını yaşayın',
    'whyus.professional': 'Profesyonel Ekip',
    'whyus.professional.desc': 'Alanında uzman ve sertifikalı personel kadromuz',
    'whyus.quality': 'Premium Ürünler',
    'whyus.quality.desc': 'Dünya markası kozmetik ve bakım ürünleri',
    'whyus.hygiene': 'Hijyen Standartları',
    'whyus.hygiene.desc': 'En yüksek hijyen ve sterilizasyon standartları',
    'whyus.equipment': 'Son Teknoloji',
    'whyus.equipment.desc': 'Modern ve güvenli cihazlarla hizmet',
    'whyus.ambiance': 'Huzurlu Atmosfer',
    'whyus.ambiance.desc': 'Rahatlatıcı ve lüks spa ortamı',
    'whyus.price': 'Uygun Fiyat',
    'whyus.price.desc': 'Kaliteli hizmet, makul fiyat politikası',

    // Testimonials
    'testimonials.title': 'Müşteri Yorumları',
    'testimonials.subtitle': 'Müşterilerimizin deneyimlerini keşfedin',

    // Contact
    'contact.title': 'İletişim',
    'contact.subtitle': 'Bizimle iletişime geçin',
    'contact.girne': 'Girne Şubesi',
    'contact.lapta': 'Lapta Şubesi',
    'contact.address': 'Adres',
    'contact.phone': 'Telefon',
    'contact.email': 'E-posta',
    'contact.hours': 'Çalışma Saatleri',
    'contact.weekdays': 'Pazartesi - Cumartesi: 09:00 - 21:00',
    'contact.sunday': 'Pazar: 10:00 - 18:00',
    'contact.form.name': 'Adınız Soyadınız',
    'contact.form.email': 'E-posta Adresiniz',
    'contact.form.phone': 'Telefon Numaranız',
    'contact.form.message': 'Mesajınız',
    'contact.form.submit': 'Gönder',
    'contact.form.booking': 'Online Randevu Al',

    // Footer
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.terms': 'Kullanım Şartları',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.booking': 'Book Now',

    // Hero
    'hero.title': 'Where Peace Meets Beauty',
    'hero.subtitle': 'Pamper yourself with professional spa and beauty services in Kyrenia and Lapta',
    'hero.cta.booking': 'Book Appointment',
    'hero.cta.services': 'Explore Services',

    // About
    'about.title': 'About Us',
    'about.subtitle': 'HF Beauty & Spa Center',
    'about.description': 'As HF Beauty & Spa Center, we are the most prestigious spa and beauty center in Northern Cyprus. At our Kyrenia and Lapta branches, we offer you the highest quality service with our expert staff and state-of-the-art equipment. Our mission is to make every customer feel special and bring together inner peace and outer beauty.',
    'about.experience': 'Years Experience',
    'about.clients': 'Happy Clients',
    'about.staff': 'Expert Staff',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Luxury spa and beauty experiences designed just for you',
    'services.skincare': 'Skin Care & Medical Treatments',
    'services.skincare.desc': 'Professional skin analysis and personalized care protocols',
    'services.bodyshaping': 'Face & Body Contouring',
    'services.bodyshaping.desc': 'Effective shaping with state-of-the-art equipment',
    'services.laser': 'Hair Removal & Laser',
    'services.laser.desc': 'Permanent and safe laser hair removal treatments',
    'services.nails': 'Manicure & Pedicure / Nail Art',
    'services.nails.desc': 'Nail care and creative nail art designs',
    'services.massage': 'Massage Therapy',
    'services.massage.desc': 'Relaxing and therapeutic massage sessions',
    'services.hammam': 'Hammam & Sauna & Steam',
    'services.hammam.desc': 'Traditional hammam and modern wellness experience',
    'services.pool': 'Jacuzzi & Pool',
    'services.pool.desc': 'Relaxing jacuzzi and swimming pool experience',
    'services.hairdresser': 'Ladies & Gents Hairdresser',
    'services.hairdresser.desc': 'Professional haircut and care services',
    'services.details': 'Details',
    'services.book': 'Book Now',

    // Gallery
    'gallery.title': 'Our Facilities',
    'gallery.subtitle': 'Discover our modern and peaceful spaces',

    // Why Us
    'whyus.title': 'Why Choose Us?',
    'whyus.subtitle': 'Experience the HF Beauty & Spa Center difference',
    'whyus.professional': 'Professional Team',
    'whyus.professional.desc': 'Expert and certified staff in their field',
    'whyus.quality': 'Premium Products',
    'whyus.quality.desc': 'World-renowned cosmetic and care products',
    'whyus.hygiene': 'Hygiene Standards',
    'whyus.hygiene.desc': 'Highest hygiene and sterilization standards',
    'whyus.equipment': 'Latest Technology',
    'whyus.equipment.desc': 'Service with modern and safe equipment',
    'whyus.ambiance': 'Peaceful Atmosphere',
    'whyus.ambiance.desc': 'Relaxing and luxurious spa environment',
    'whyus.price': 'Affordable Prices',
    'whyus.price.desc': 'Quality service, reasonable pricing policy',

    // Testimonials
    'testimonials.title': 'Customer Reviews',
    'testimonials.subtitle': 'Discover our customers\' experiences',

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch with us',
    'contact.girne': 'Kyrenia Branch',
    'contact.lapta': 'Lapta Branch',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Working Hours',
    'contact.weekdays': 'Monday - Saturday: 09:00 - 21:00',
    'contact.sunday': 'Sunday: 10:00 - 18:00',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.phone': 'Your Phone',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send',
    'contact.form.booking': 'Book Online',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

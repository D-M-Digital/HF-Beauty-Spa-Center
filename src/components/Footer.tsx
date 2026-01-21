import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-spa-dark text-primary-foreground py-12">
      <div className="spa-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-lg">HF</span>
            </div>
            <div>
              <span className="font-serif font-semibold">HF Beauty & Spa Center</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-primary-foreground/60 text-sm text-center">
            © {currentYear} HF Beauty & Spa Center. {t('footer.rights')}
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

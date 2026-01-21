import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Calendar, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const branches = [
    {
      name: t('contact.girne'),
      address: language === 'tr' 
        ? 'Kordonboyu Caddesi No: 45, Girne, KKTC'
        : 'Kordonboyu Street No: 45, Kyrenia, TRNC',
      phone: '+90 392 815 00 00',
      email: 'girne@hfbeauty.com',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.9!2d33.3!3d35.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE4JzAwLjAiTiAzM8KwMTgnMDAuMCJF!5e0!3m2!1sen!2s!4v1!5m2!1sen!2s',
    },
    {
      name: t('contact.lapta'),
      address: language === 'tr'
        ? 'Sahil Yolu No: 78, Lapta, KKTC'
        : 'Coastal Road No: 78, Lapta, TRNC',
      phone: '+90 392 821 00 00',
      email: 'lapta@hfbeauty.com',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.9!2d33.1!3d35.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE4JzAwLjAiTiAzM8KwMDYnMDAuMCJF!5e0!3m2!1sen!2s!4v1!5m2!1sen!2s',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: language === 'tr' ? 'Mesajınız Gönderildi' : 'Message Sent',
      description: language === 'tr' 
        ? 'En kısa sürede size dönüş yapacağız.'
        : 'We will get back to you as soon as possible.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="spa-section bg-background">
      <div className="spa-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4">
            {t('contact.title')}
          </span>
          <h2 className="spa-subheading text-foreground mb-4">
            {t('contact.subtitle')}
          </h2>
        </div>

        {/* Branches */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="spa-card p-8 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                {branch.name}
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">{t('contact.address')}</div>
                    <div className="text-muted-foreground">{branch.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">{t('contact.phone')}</div>
                    <a href={`tel:${branch.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {branch.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">{t('contact.email')}</div>
                    <a href={`mailto:${branch.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {branch.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">{t('contact.hours')}</div>
                    <div className="text-muted-foreground">{t('contact.weekdays')}</div>
                    <div className="text-muted-foreground">{t('contact.sunday')}</div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden h-48 bg-muted">
                <iframe
                  src={branch.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={branch.name}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form & Booking */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="spa-card p-8 animate-fade-up">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              {language === 'tr' ? 'Bize Ulaşın' : 'Get in Touch'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  placeholder={t('contact.form.name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 rounded-xl border-border bg-background"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t('contact.form.email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 rounded-xl border-border bg-background"
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder={t('contact.form.phone')}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 rounded-xl border-border bg-background"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder={t('contact.form.message')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-32 rounded-xl border-border bg-background resize-none"
                  required
                />
              </div>
              <Button type="submit" variant="spa" size="lg" className="w-full">
                <Send className="w-4 h-4" />
                {t('contact.form.submit')}
              </Button>
            </form>
          </div>

          {/* Booking CTA */}
          <div className="spa-card p-8 bg-primary text-primary-foreground animate-fade-up animation-delay-200">
            <div className="h-full flex flex-col justify-center items-center text-center">
              <Calendar className="w-16 h-16 mb-6 opacity-80" />
              <h3 className="font-serif text-3xl font-semibold mb-4">
                {t('contact.form.booking')}
              </h3>
              <p className="text-primary-foreground/80 mb-8 max-w-sm">
                {language === 'tr' 
                  ? 'Hemen online randevu alın ve kendinizi şımartmaya başlayın.'
                  : 'Book your appointment online now and start pampering yourself.'}
              </p>
              <Button 
                variant="secondary" 
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Phone className="w-5 h-5" />
                {t('nav.booking')}
              </Button>

              {/* Social Media */}
              <div className="flex gap-4 mt-10">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

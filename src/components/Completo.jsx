import { useState, useEffect } from 'react';
import { Heart, Stethoscope, Phone, MapPin, Clock, ArrowRight, Instagram, Facebook, Mail, ChevronDown, Calendar, User, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react'

function Completo() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Consulta Médica General",
      description: "Evaluación completa con atención personalizada y diagnóstico preciso.",
      icon: <Stethoscope className="w-8 h-8" />
    },
    {
      title: "Cirugía Menor",
      description: "Procedimientos quirúrgicos ambulatorios con máxima seguridad.",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Atención Prenatal",
      description: "Seguimiento completo durante tu embarazo para una gestación saludable.",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Control de Enfermedades Crónicas",
      description: "Manejo integral de diabetes, hipertensión y enfermedades del corazón.",
      icon: <Stethoscope className="w-8 h-8" />
    }
  ];

  const galleryImages = [
    'https://placehold.co/600x400/e5c7a7/ffffff?text=Consultorio+Moderno',
    'https://placehold.co/600x400/a6574c/ffffff?text=Atención+Personalizada',
    'https://placehold.co/600x400/861d23/ffffff?text=Equipo+Profesional',
    'https://placehold.co/600x400/e5c7a7/ffffff?text=Espacio+Tranquilo',
    'https://placehold.co/600x400/a6574c/ffffff?text=Tecnología+Médica',
    'https://placehold.co/600x400/861d23/ffffff?text=Cuidado+Humano'
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-3 h-3 bg-[#861D23] rounded-full"></div>
              <span className="font-light text-gray-800 tracking-wide">Dra. Laura Bravo</span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['inicio', 'servicios', 'acerca', 'galeria', 'contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-light tracking-wide transition-colors hover:text-[#861D23] ${
                    activeSection === item ? 'text-[#861D23]' : 'text-gray-600'
                  }`}
                >
                  {item === 'inicio' && 'Inicio'}
                  {item === 'servicios' && 'Servicios'}
                  {item === 'acerca' && 'Acerca'}
                  {item === 'galeria' && 'Galería'}
                  {item === 'contacto' && 'Contacto'}
                </button>
              ))}
            </div>
            
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="md:hidden mt-4 pb-4"
            >
              {['inicio', 'servicios', 'acerca', 'galeria', 'contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left py-2 px-4 text-sm font-light tracking-wide ${
                    activeSection === item ? 'text-[#861D23]' : 'text-gray-600'
                  }`}
                >
                  {item === 'inicio' && 'Inicio'}
                  {item === 'servicios' && 'Servicios'}
                  {item === 'acerca' && 'Acerca'}
                  {item === 'galeria' && 'Galería'}
                  {item === 'contacto' && 'Contacto'}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E5C7A7]/10 to-[#A6574C]/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#861D23] rounded-full mb-6">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
                Cuidado Médico
                <br />
                <span className="font-normal text-[#861D23]">Con Corazón</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Médica, cirujana y partera dedicada a brindar atención integral 
                con profesionalismo, empatía y la más alta calidad.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contacto')}
                className="bg-[#861D23] text-white px-8 py-4 rounded-full font-light tracking-wide hover:bg-[#A6574C] transition-colors"
              >
                Agenda tu cita
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('servicios')}
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-light tracking-wide hover:border-[#861D23] hover:text-[#861D23] transition-colors"
              >
                Explora servicios
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Servicios
              <span className="block text-[#861D23] font-normal">Profesionales</span>
            </h2>
            <div className="w-24 h-1 bg-[#861D23] mx-auto mt-6"></div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="text-[#861D23] mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="acerca" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://placehold.co/600x700/ffffff/861d23?text=Dra.+Laura+Bravo" 
                  alt="Dra. Laura Bravo" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#861D23]/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#E5C7A7] rounded-2xl"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-light text-gray-900">
                Sobre <span className="text-[#861D23]">mí</span>
              </h2>
              <div className="w-16 h-1 bg-[#861D23]"></div>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                Con más de 15 años de experiencia en medicina integral, mi enfoque se centra 
                en la atención personalizada y el cuidado humano. Creo firmemente que la 
                medicina debe ir más allá del tratamiento de síntomas.
              </p>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                Mi compromiso es brindarte un espacio seguro donde puedas expresar tus 
                preocupaciones y recibir orientación clara, empática y basada en evidencia 
                científica actualizada.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-[#861D23]" />
                  <span className="text-gray-700 font-light">15+ años experiencia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-[#861D23]" />
                  <span className="text-gray-700 font-light">500+ pacientes</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Nuestro
              <span className="block text-[#861D23] font-normal">Espacio</span>
            </h2>
            <div className="w-24 h-1 bg-[#861D23] mx-auto mt-6"></div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <img 
                  src={image} 
                  alt={`Galería ${index + 1}`} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Contáctame
            </h2>
            <div className="w-24 h-1 bg-[#861D23] mx-auto mt-6"></div>
          </motion.div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-light text-gray-900 mb-6">Información</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#E5C7A7] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#861D23]" />
                    </div>
                    <div>
                      <div className="font-light text-gray-900">Teléfono</div>
                      <div className="text-gray-600">244 - 159 - 3500</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#E5C7A7] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#861D23]" />
                    </div>
                    <div>
                      <div className="font-light text-gray-900">Dirección</div>
                      <div className="text-gray-600">9 sur #321 A, Atlixco, Puebla</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#E5C7A7] rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#861D23]" />
                    </div>
                    <div>
                      <div className="font-light text-gray-900">Horario</div>
                      <div className="text-gray-600">Lunes - Viernes: 9AM - 8PM</div>
                      <div className="text-gray-600">Sábado: 9AM - 2PM</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ y: -5 }}
                  href="#"
                  className="w-12 h-12 bg-[#861D23] rounded-full flex items-center justify-center text-white hover:bg-[#A6574C] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  href="#"
                  className="w-12 h-12 bg-[#861D23] rounded-full flex items-center justify-center text-white hover:bg-[#A6574C] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  href="#"
                  className="w-12 h-12 bg-[#861D23] rounded-full flex items-center justify-center text-white hover:bg-[#A6574C] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <h3 className="text-2xl font-light text-gray-900 mb-6">Envía un mensaje</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Nombre"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#861D23]/20 focus:border-[#861D23] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#861D23]/20 focus:border-[#861D23] outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Teléfono"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#861D23]/20 focus:border-[#861D23] outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    rows={4}
                    placeholder="Mensaje"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#861D23]/20 focus:border-[#861D23] outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#861D23] text-white py-3 rounded-lg font-light tracking-wide hover:bg-[#A6574C] transition-colors"
                >
                  Enviar mensaje
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-3 h-3 bg-[#861D23] rounded-full"></div>
              <span className="font-light tracking-wide">Dra. Laura Bravo</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {scrollY > 300 && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-[#861D23] text-white rounded-full shadow-lg flex items-center justify-center"
        >
          <ChevronDown className="w-5 h-5 transform rotate-180" />
        </motion.button>
      )}
    </div>
  );
}

export default Completo
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  User, 
  MapPin, 
  Briefcase, 
  Code2, 
  Mail, 
  Github, 
  Instagram, 
  ArrowRight,
  Database,
  Cpu,
  Coffee,
  Sun,
  Moon,
  HandMetal,
  UtensilsCrossed
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Sistem Manajemen Nasi Bungkus",
      desc: "Aplikasi revolusioner untuk memantau stok nasi bungkus di warteg terdekat secara real-time.",
      tech: ["React", "Firebase", "Izin Tuhan"],
      color: "bg-brutal-yellow"
    },
    {
      title: "AI Pendeteksi Gorengan Dingin",
      desc: "Menggunakan visi komputer untuk mengidentifikasi apakah bakwan ini masih layak konsumsi atau sudah jadi batu.",
      tech: ["Python", "TensorFlow", "Lidah"],
      color: "bg-brutal-pink"
    },
    {
      title: "Chatbot Anti-Ghosting",
      desc: "Membantu warga sipil membalas pesan HRD dengan sopan agar tidak di-ghosting.",
      tech: ["Next.js", "GPT-4", "Sabar"],
      color: "bg-brutal-blue"
    }
  ];

  const experiences = [
    {
      year: "2024 - Sekarang",
      role: "Warga Sipil Fullstack",
      company: "Republik Indonesia",
      desc: "Bertahan hidup dengan mengonsumsi nasi 3 kali sehari sambil sesekali menulis kode yang jalan cuma di localhost."
    },
    {
      year: "2022 - 2024",
      role: "Peminat Oksigen Senior",
      company: "Alam Semesta",
      desc: "Berhasil menghirup udara setiap hari tanpa komplain. Ahli dalam bidang bernafas dan berkedip."
    },
    {
      year: "2020 - 2022",
      role: "Junior Tukang Debugging Doa",
      company: "Kamar Sendiri",
      desc: "Mencoba memperbaiki hidup saya yang penuh dengan error dan warning."
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b-4 border-black bg-white px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black italic tracking-tighter">
          WARGA<span className="text-brutal-pink">SIPIL</span>.
        </div>
        <div className="hidden md:flex gap-8 font-bold">
          <a href="#about" className="hover:text-brutal-blue transition-colors">Tentang Perangkat</a>
          <a href="#log" className="hover:text-brutal-pink transition-colors">Log Hidup</a>
          <a href="#work" className="hover:text-brutal-green transition-colors">Karya Nyleneh</a>
          <a href="#contact" className="hover:text-brutal-yellow transition-colors">Saluran Sosmed</a>
        </div>
        <button 
          className="md:hidden p-2 border-2 border-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "TUTUP" : "MENU"}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block brutal-border-sm bg-brutal-green px-4 py-1 font-bold mb-6 rotate-[-2deg]">
            STATUS: SEDANG MAKAN NASI 🍚
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8 tracking-tighter">
            HALO, SAYA <br />
            <span className="bg-brutal-yellow px-2 brutal-border mt-2 inline-block rotate-[1deg]">MANUSIA</span> <br />
            BIASA.
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-10 max-w-lg leading-relaxed">
            Seorang warga sipil pemakan nasi yang memiliki spesifikasi teknis bisa <span className="underline decoration-brutal-pink decoration-4">ngoding</span>, <span className="underline decoration-brutal-blue decoration-4">ngopi</span>, dan <span className="underline decoration-brutal-green decoration-4">overthinking</span> tepat waktu.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#work" className="brutal-btn bg-brutal-pink">LIHAT KARYA</a>
            <a href="#contact" className="brutal-btn bg-white">JALUR DARURAT</a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="brutal-border bg-brutal-blue p-2 rotate-[3deg]">
            <img 
              src="https://picsum.photos/seed/kreatif/800/800" 
              alt="Warga Sipil" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 brutal-border bg-white p-4 rotate-[-5deg] hidden md:block">
            <p className="font-bold flex items-center gap-2">
              <UtensilsCrossed size={18} /> Nasi Padang Lover
            </p>
          </div>
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="border-y-4 border-black bg-black text-white py-4 overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-8 text-2xl font-black uppercase italic"
        >
          <span>Warga Sipil</span>
          <span className="text-brutal-yellow">●</span>
          <span>Pemakan Nasi</span>
          <span className="text-brutal-pink">●</span>
          <span>Bisa Ngoding Dikit</span>
          <span className="text-brutal-blue">●</span>
          <span>Anti-Ghosting</span>
          <span className="text-brutal-green">●</span>
          <span>Warga Sipil</span>
          <span className="text-brutal-yellow">●</span>
          <span>Pemakan Nasi</span>
          <span className="text-brutal-pink">●</span>
          <span>Bisa Ngoding Dikit</span>
          <span className="text-brutal-blue">●</span>
        </motion.div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="brutal-border bg-brutal-yellow p-8 md:col-span-2">
            <h2 className="text-4xl font-black mb-6 flex items-center gap-4 text-black">
              <User /> SPESIFIKASI ORGANISME
            </h2>
            <p className="text-xl font-bold mb-8 leading-relaxed">
              Saya bukan AI, saya bukan bot, saya adalah kumpulan sel-sel yang membutuhkan asupan nasi setiap hari agar bisa menjalankan fungsi logika di otak. Saya penganut aliran "Kalau bisa besok kenapa sekarang" kecuali kalau lagi lapar.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="brutal-border-sm bg-white p-4 text-center">
                <Code2 className="mx-auto mb-2" />
                <span className="font-bold uppercase text-sm">Logika JS</span>
              </div>
              <div className="brutal-border-sm bg-white p-4 text-center">
                <Database className="mx-auto mb-2" />
                <span className="font-bold uppercase text-sm">Gudang Data</span>
              </div>
              <div className="brutal-border-sm bg-white p-4 text-center">
                <Cpu className="mx-auto mb-2" />
                <span className="font-bold uppercase text-sm">Prosesor Otak</span>
              </div>
              <div className="brutal-border-sm bg-white p-4 text-center">
                <Coffee className="mx-auto mb-2" />
                <span className="font-bold uppercase text-sm">Bahan Bakar</span>
              </div>
            </div>
          </div>
          
          <div className="brutal-border bg-white p-8">
            <h3 className="text-2xl font-black mb-4 uppercase">Data Statis</h3>
            <ul className="space-y-4 font-bold">
              <li className="flex justify-between border-b-2 border-black pb-2">
                <span>Domain:</span>
                <span className="text-brutal-pink italic">Bumi</span>
              </li>
              <li className="flex justify-between border-b-2 border-black pb-2">
                <span>Versi:</span>
                <span className="text-brutal-blue">Human v2.0</span>
              </li>
              <li className="flex justify-between border-b-2 border-black pb-2">
                <span>Status:</span>
                <span className="text-brutal-green">Aktif</span>
              </li>
              <li className="flex justify-between border-b-2 border-black pb-2">
                <span>Energi:</span>
                <span className="text-brutal-yellow">85% (Nasi)</span>
              </li>
            </ul>
            <div className="mt-8">
              <HandMetal size={48} className="text-brutal-pink rotate-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="log" className="bg-[#1c1917] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <div className="inline-block bg-brutal-pink text-black px-4 py-1 font-bold mb-4 uppercase">
                Temporal Registry
              </div>
              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter">LOG PERJALANAN HIDUP</h2>
            </div>
            <p className="max-w-md text-gray-400 font-medium">
              Dokumentasi resmi tentang bagaimana saya tidak melakukan apa pun namun tetap merasa lelah. Dipandu oleh KBBI yang taat asas.
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 border-b border-gray-800 pb-12 cursor-default"
              >
                <div className="text-brutal-blue font-mono font-bold pt-1">{exp.year}</div>
                <div>
                  <h3 className="text-3xl font-black mb-2 group-hover:text-brutal-yellow transition-colors italic uppercase">{exp.role}</h3>
                  <div className="text-brutal-green font-bold mb-4 text-sm flex items-center gap-2 italic">
                    <Briefcase size={14} /> {exp.company}
                  </div>
                  <p className="text-xl text-gray-400 max-w-2xl font-medium italic">
                    "{exp.desc}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center underline decoration-brutal-blue decoration-8 underline-offset-8 italic">
          KARYA TIDAK BERFAEDAH ( & BERFAEDAH )
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ rotate: idx % 2 === 0 ? 2 : -2, y: -10 }}
              className={`brutal-border ${project.color} p-8 flex flex-col h-full`}
            >
              <div className="brutal-border-sm bg-white p-2 w-fit mb-6">
                <Code2 />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase">{project.title}</h3>
              <p className="font-bold mb-8 flex-grow">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-black bg-black text-white px-2 py-1 uppercase">{t}</span>
                ))}
              </div>
              <button className="brutal-btn bg-white w-full flex justify-center items-center gap-2 group">
                CEK LOKASI <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto brutal-border bg-brutal-pink p-12 text-center rotate-[-1deg]">
          <h2 className="text-5xl md:text-7xl font-black mb-8 italic tracking-tighter">APA ANDA TERTARIK?</h2>
          <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl mx-auto italic">
            Atau sekadar ingin mengajak saya makan nasi bersama? Saya sangat terbuka untuk kolaborasi yang menguntungkan perut dan portofolio.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
            <a href="mailto:ujicobacuy1@gmail.com" className="brutal-btn bg-white text-black flex items-center gap-2">
              <Mail /> KIRIM E-MAIL
            </a>
            <div className="flex gap-4">
              <a href="#" className="brutal-border-sm p-3 bg-brutal-blue hover:translate-y-[-4px] transition-transform"><Github /></a>
              <a href="#" className="brutal-border-sm p-3 bg-brutal-yellow hover:translate-y-[-4px] transition-transform"><Instagram /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-8 font-bold italic">
        <div>© 2024 Warga Sipil Kreatif. Berpedoman KBBI.</div>
        <div className="flex items-center gap-2">
          MADE WITH <UtensilsCrossed size={16} className="text-brutal-pink" /> & NASI HANGAT
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">PRIVASI</a>
          <a href="#" className="hover:underline">SYARAT & KETENTUAN</a>
        </div>
      </footer>

      {/* Random Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="fixed bottom-10 left-10 z-[100] md:block hidden"
      >
        <div className="brutal-border bg-brutal-green p-4 font-black">
          NASI ADALAH KOENTJI
        </div>
      </motion.div>
    </div>
  );
}

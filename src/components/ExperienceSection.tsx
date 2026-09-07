import React from 'react';
import { GlassWater, PackageCheck, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: PackageCheck,
    number: '01',
    title: 'Escolha o sabor',
    description: 'Encontre a combinação que combina com a sua bebida e com o momento.',
  },
  {
    icon: GlassWater,
    number: '02',
    title: 'Adicione à bebida',
    description: 'Uma forma prática de gelar e acrescentar sabor ao mesmo tempo.',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Transforme o momento',
    description: 'Sirva com personalidade em encontros, festas, eventos ou no dia a dia.',
  },
];

const ExperienceSection: React.FC = () => (
  <section className="bg-ink-950 py-24 text-white" aria-labelledby="experiencia-title">
    <div className="site-container">
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div>
          <p className="section-kicker text-cuesta-300">Simples de servir</p>
          <h2 id="experiencia-title" className="max-w-xl text-4xl font-black leading-tight sm:text-5xl">
            Mais sabor, sem complicação.
          </h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-white/65 lg:justify-self-end">
          Coco Cuesta foi feita para quem quer transformar uma bebida comum em uma experiência marcante, de um jeito prático e refrescante.
        </p>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-3">
        {steps.map(({ icon: Icon, number, title, description }) => (
          <article key={number} className="group bg-ink-900 p-8 transition-colors hover:bg-ink-800 sm:p-10">
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cuesta-300 text-ink-950">
                <Icon size={23} aria-hidden="true" />
              </span>
              <span className="text-sm font-bold tracking-[0.2em] text-white/30">{number}</span>
            </div>
            <h3 className="mt-8 text-xl font-bold">{title}</h3>
            <p className="mt-3 leading-7 text-white/60">{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;

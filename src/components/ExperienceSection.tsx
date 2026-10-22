import { useEffect, useState } from 'react';
import { flavors } from '../data/flavors';
import caco from '../assets/coco-cuesta/aprovados/caco-apresentando.webp';
import cacoSmall from '../assets/coco-cuesta/aprovados/caco-apresentando-768.webp';

const suggestions = flavors.map(flavor=>({id:flavor.id,name:flavor.name,title:flavor.serving,text:flavor.preparation}));
function recipeFromUrl(){return suggestions.find(s=>s.id===new URLSearchParams(window.location.search).get('receita'))?.id??suggestions[0].id;}

export default function ExperienceSection() {
  const [selectedId,setSelectedId]=useState(recipeFromUrl);
  useEffect(()=>{const sync=()=>setSelectedId(recipeFromUrl());window.addEventListener('popstate',sync);return()=>window.removeEventListener('popstate',sync);},[]);
  const choose=(id:string)=>{if(id===selectedId)return;const url=new URL(window.location.href);url.searchParams.set('receita',id);window.history.pushState({},'',url);setSelectedId(id);};
  const selected=suggestions.find(s=>s.id===selectedId)??suggestions[0];
  return (
    <section id="ocasioes" className="serve-section section-space" aria-labelledby="serve-title">
      <div className="site-container serve-layout">
        <figure className="caco-figure">
          <img src={caco} srcSet={`${cacoSmall} 768w, ${caco} 1024w`} sizes="(max-width: 700px) calc(100vw - 48px), 470px" alt="Caco de corpo inteiro, com a mão aberta apresentando as sugestões de combinação" width={1024} height={1536} loading="lazy" decoding="async" />
        </figure>
        <div className="serve-copy">
          <div className="serve-heading">
            <h2 id="serve-title">Como servir</h2>
          </div>
          <div className="recipe-options" role="group" aria-label="Sugestões de combinação do Caco">
            {suggestions.map(s=><button key={s.id} type="button" aria-pressed={selectedId===s.id} aria-controls="caco-recipe" onClick={()=>choose(s.id)}>{s.name}</button>)}
          </div>
          <div id="caco-recipe" className="caco-recipe" aria-live="polite">
            <h3>{selected.title}</h3><p>{selected.text}</p>
          </div>
          <ol className="serve-steps">
            <li><strong>Escolha a bebida.</strong> Água com gás, limonada ou chá gelado são algumas possibilidades.</li>
            <li><strong>Abra a embalagem.</strong> Retire a mistura congelada para colocar na bebida.</li>
            <li><strong>Misture e sirva.</strong> Experimente a combinação e ajuste ao seu gosto.</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

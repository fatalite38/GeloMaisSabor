import campaignImg from '../assets/coco-cuesta/campanha-cinco-sabores.png';

export default function BrandCampaignSection() {
  return (
    <figure className="campaign-art">
      <img
        src={campaignImg}
        alt="Campanha Coco Cuesta: embalagens de Melancia, Água de Coco, Maracujá, Maçã Verde e Morango entre frutas, gelo e água."
        width={1672}
        height={941}
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
}

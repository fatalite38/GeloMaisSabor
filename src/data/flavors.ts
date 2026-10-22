import coco from '../assets/coco-cuesta/agua-de-coco-oficial.png';
import maracuja from '../assets/coco-cuesta/maracuja-oficial.png';
import melancia from '../assets/coco-cuesta/melancia-oficial.png';
import morango from '../assets/coco-cuesta/morango-oficial.png';
import maca from '../assets/coco-cuesta/maca-verde-oficial.png';

export interface Flavor {
  id: string;
  name: string;
  image: string;
  description: string;
  color: string;
  accent: string;
  serving: string;
  preparation: string;
}
export const flavors: Flavor[] = [
  { id: 'coco', name: 'Água de Coco', image: coco, description: 'Tropical e refrescante.', color: '#eaf6ff', accent: '#0094f6', serving: 'Água com gás + limão', preparation: 'Adicione o gelo sabor Água de Coco à água com gás e finalize com uma rodela de limão.' },
  { id: 'maracuja', name: 'Maracujá', image: maracuja, description: 'Marcante e cítrico.', color: '#fff7ce', accent: '#ffdc18', serving: 'Chá gelado', preparation: 'Experimente o gelo sabor Maracujá no seu chá gelado favorito e misture antes de servir.' },
  { id: 'melancia', name: 'Melancia', image: melancia, description: 'Leve e refrescante.', color: '#eef4f1', accent: '#000000', serving: 'Água com gás', preparation: 'Coloque o gelo sabor Melancia no copo e complete com água com gás.' },
  { id: 'morango', name: 'Morango', image: morango, description: 'Doce e aromático.', color: '#fff0f3', accent: '#e51d45', serving: 'Limonada', preparation: 'Adicione o gelo sabor Morango à limonada. Misture e ajuste a combinação ao seu gosto.' },
  { id: 'maca', name: 'Maçã Verde', image: maca, description: 'Um toque levemente ácido.', color: '#f0f8dc', accent: '#8bcf16', serving: 'Água com gás ou soda', preparation: 'Experimente o gelo sabor Maçã Verde com água com gás ou soda e misture no copo.' },
];

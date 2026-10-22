export const whatsappUrl = (message = 'Olá! Gostaria de fazer um pedido Coco Cuesta. Podem me informar os sabores disponíveis e as condições de entrega?') =>
  `https://api.whatsapp.com/send?phone=5514997445680&text=${encodeURIComponent(message)}`;

# SmartWatch PTY

Sitio web de venta de relojes inteligentes, auriculares y accesorios tecnológicos en Panamá.

## Descripción

SmartWatch PTY es una tienda en línea enfocada en el mercado panameño. Los clientes pueden explorar el catálogo y contactar directamente por WhatsApp para realizar su compra. Se aceptan múltiples métodos de pago y se ofrece envío a todo Panamá.

## Tecnologías utilizadas

- HTML5 / CSS3
- Bootstrap 5 (sin jQuery — Bootstrap 5 no lo requiere)
- Swiper.js 9 (carrusel de productos y hero)
- Google Analytics (G-D5XSYPS9W0)
- Google Fonts: Jost, Lato

## Estructura de archivos

```
smartwatchpty/
├── index.html          — Página principal
├── style.css           — Estilos personalizados
├── css/
│   ├── bootstrap.min.css
│   └── vendor.css
├── js/
│   ├── script.js       — Lógica principal (vanilla JS)
│   ├── bootstrap.bundle.min.js
│   ├── modernizr.js
│   └── plugins.js
├── images/             — Imágenes del sitio
└── res9/               — Recursos adicionales
```

## Métodos de pago aceptados

- Yappy
- POS (Punto de venta con tarjeta)
- Visa / Mastercard
- Pago contra entrega

## Cobertura de envíos

- Ciudad de Panamá
- Interior del país
- Envíos internacionales bajo consulta

## Contacto

WhatsApp: [+507 6298 2064](https://wa.me/50762982064)

## Notas de desarrollo

- jQuery eliminado en la última actualización — todo el JS usa vanilla ES5+
- Imágenes fuera del hero usan `loading="lazy"` para mejor rendimiento
- Las imágenes del billboard/hero usan `loading="eager"` para LCP óptimo
- Meta tags Open Graph configurados para compartir en redes sociales

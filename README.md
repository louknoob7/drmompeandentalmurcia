# Mompeán Smiles

Crea una página web completa y profesional para una clínica dental real llamada "Clínica Dental Dres. Mompeán", ubicada en C. Calderón de la Barca, 14, Piso 4ºA, 30001 Murcia. Teléfono: 678 69 98 33. Valoración 5,0 estrellas con 18 reseñas en Google. Horario: Lunes a Jueves 8:30–14:30, Viernes a Domingo cerrado.

DISEÑO Y ESTILO:

Estilo clínico moderno, limpio, confiable y cálido a la vez — nada de plantilla genérica de "empresa tech". Paleta de color: blanco/azul clínico suave (ej. azul petróleo #0F4C5C o azul turquesa suave) combinado con un acento cálido (verde menta o coral suave) para botones de acción. Evitar el típico azul corporativo plano. Tipografía moderna, legible, con buen contraste. Titulares grandes y humanos, no fríos. Mucho espacio en blanco, secciones bien separadas, nada de texto amontonado. Diseño totalmente responsive (móvil primero, la mayoría de pacientes entrarán desde el móvil buscando en Google). Fotos de alta calidad (usa imágenes de stock de clínicas dentales modernas, sonrisas, equipo médico, mientras no se suban fotos reales) — nunca uses imágenes con marcas de agua ni logos de terceros. Iconos consistentes en todo el sitio (usa una sola librería de iconos, ej. lucide o similar).

ESTRUCTURA — 10 PÁGINAS (con SEO on-page en cada una: title tag único, meta description, H1 único, texto de al menos 400 palabras optimizado para búsquedas locales "Murcia"):

Inicio (/)
Hero con titular potente (ej. "Tu sonrisa en las mejores manos de Murcia"), subtítulo, botón grande "Pedir cita" y botón "Hablar por WhatsApp". Sección de confianza: valoración 5,0 con 18 reseñas, logos/iconos de "Se necesita cita", "Atención pediátrica", "Odontología con sedación", "Servicios de emergencias". Sección de servicios destacados (Invisalign, estética dental, implantes, odontología pediátrica, urgencias) con tarjetas visuales. Sección "Por qué elegirnos" con 3-4 puntos (trato cercano, tecnología, sin esperas, financiación). Testimonios reales extraídos de reseñas de Google (parafraseados, no copiados literalmente): pacientes contentos con Invisalign, con el trato profesional, con sentirse bien atendidos desde que entran. Mapa embebido de Google Maps con la ubicación exacta. Chatbot flotante abajo a la derecha (ver especificación abajo). Botón flotante fijo de WhatsApp abajo a la izquierda o derecha, todo el recorrido de la web.

Sobre nosotros (/sobre-nosotros)
Historia de la clínica, filosofía de trato al paciente, presentación del equipo (usar nombres genéricos tipo "Dr. Mompeán" si no hay datos reales, dejar marcado con [NOMBRE] para reemplazar). Fotos del equipo y de las instalaciones.

Servicios (/servicios) — página resumen con tarjetas enlazando a subpáginas de cada tratamiento.

Invisalign (/invisalign) — página SEO específica, con explicación del tratamiento, duración, para quién es, antes/después, preguntas frecuentes, CTA a cita.

Odontología estética (/odontologia-estetica) — carillas, blanqueamiento, diseño de sonrisa. Misma estructura SEO.

Odontología pediátrica (/odontopediatria) — enfoque en niños, primera visita, cómo se trabaja el miedo infantil al dentista.

Urgencias dentales (/urgencias-dentales-murcia) — página muy orientada a SEO local ("urgencias dentales Murcia"), qué hacer ante un dolor agudo, disponibilidad, botón de llamada directa muy visible.

Blog (/blog) — listado de artículos. Genera 4 artículos de ejemplo con título, imagen y resumen:
"¿Cuánto dura un tratamiento de Invisalign?"
"Cómo preparar a tu hijo para su primera visita al dentista"
"Blanqueamiento dental: mitos y verdades"
"Qué hacer si se te rompe un diente (urgencia dental)"
Cada artículo debe tener su propia página individual (/blog/[slug]) con contenido real de 500+ palabras, optimizado para SEO, con CTA al final invitando a pedir cita.

Reseñas (/opiniones) — página dedicada mostrando las reseñas de Google de forma visual (tarjetas con nombre, estrellas y comentario), con enlace a "Ver todas en Google" y botón para dejar una nueva reseña.

Contacto (/contacto) — formulario de contacto (nombre, teléfono, email, tratamiento de interés, mensaje), mapa, horario completo, teléfono clicable, botón de WhatsApp destacado, dirección con enlace directo a Google Maps.

NAVEGACIÓN Y FOOTER:

Menú superior fijo (sticky) con: Inicio, Servicios (desplegable con las subpáginas), Blog, Opiniones, Sobre nosotros, Contacto, y botón destacado "Pedir cita" siempre visible. Footer con: dirección, teléfono, horario, mini-mapa, enlaces a redes sociales (Instagram, Facebook, TikTok — usar iconos con enlaces de ejemplo a reemplazar: https://instagram.com/clinicamompean, https://facebook.com/clinicamompean, https://tiktok.com/@clinicamompean), aviso legal, política de privacidad, y de nuevo el botón de WhatsApp.

BOTÓN DE WHATSAPP:

Botón flotante circular verde WhatsApp, visible en TODAS las páginas, fijo en la esquina inferior (no se mueve al hacer scroll). Al hacer clic, abre en nueva pestaña: https://wa.me/34678699833?text=Hola,%20me%20gustaría%20pedir%20información%20sobre%20una%20cita
Además, incluir un botón de texto "Escríbenos por WhatsApp" en la sección de contacto y en el hero de la página de inicio.

FORMULARIO DE SOLICITAR CITA:

Formulario con campos: Nombre completo, Teléfono, Email, Tratamiento de interés (desplegable con los servicios), Día/franja horaria preferida, Mensaje opcional. Al enviarse, mostrar un mensaje de confirmación claro tipo "Gracias, te contactaremos en menos de 24h para confirmar tu cita" (por ahora simulado en frontend, sin backend real de envío de emails). Validación de campos obligatorios (nombre, teléfono).

CHATBOT DE VOZ CON AGENDAMIENTO DE CITAS (widget flotante, esquina inferior derecha, distinto del botón de WhatsApp):

Icono circular flotante que al hacer clic abre una ventana de chat estilo mensajería, con dos modos de interacción: texto (escribir y leer) y voz (hablar y escuchar). Debe incluir un botón de micrófono dentro de la ventana de chat para activar entrada por voz, y un botón de altavoz/toggle para activar o desactivar que el asistente lea las respuestas en voz alta.

VOZ:
- Usa la Web Speech API del navegador: SpeechRecognition (webkitSpeechRecognition) para convertir voz a texto en español (lang = "es-ES"), y SpeechSynthesis (speechSynthesis.speak) para leer las respuestas del asistente en voz alta con voz en español.
- Mientras escucha, mostrar un indicador visual animado (ej. ondas o pulso) de "Te escucho...".
- Si el navegador no soporta reconocimiento de voz, ocultar el botón de micrófono automáticamente y dejar solo el modo texto, sin romper la funcionalidad.
- El usuario puede alternar libremente entre escribir y hablar en la misma conversación.

INTELIGENCIA DEL CHATBOT:
- Debe responder usando la API de Anthropic (Claude) mediante fetch a https://api.anthropic.com/v1/messages, modelo "claude-sonnet-4-6", max_tokens 1000, sin pasar ninguna API key (ya está gestionada por el entorno).
- System prompt: es el asistente virtual de "Clínica Dental Dres. Mompeán" en Murcia. Conoce el horario (L-J 8:30–14:30, V-D cerrado), la dirección (C. Calderón de la Barca, 14, Piso 4ºA, 30001 Murcia), el teléfono (678 69 98 33), y los servicios ofrecidos (Invisalign, odontología estética, odontología pediátrica, sedación, urgencias).
- Debe dejar claro que funciona 24/7 aunque la clínica esté cerrada (fuera de horario, fines de semana, noches), y que cualquier cita solicitada fuera de horario quedará agendada como "pendiente de confirmación" y el equipo la confirmará al abrir (próximo día laborable).

AGENDAMIENTO DE CITAS DESDE EL CHAT:
- El chatbot debe poder recoger, de forma conversacional (por voz o texto), los datos necesarios para agendar una cita: nombre completo, teléfono, tratamiento de interés, y día/franja horaria preferida.
- Una vez recogidos todos los datos, el chatbot debe pedir confirmación explícita al usuario ("¿Confirmas que quieres agendar tu cita para [tratamiento] el [día] a las [hora]?") antes de guardarla.
- Al confirmar, guardar la cita en una tabla de Supabase (usar la integración nativa de Supabase de Lovable) llamada "citas_chatbot" con columnas: nombre, telefono, tratamiento, fecha_preferida, franja_horaria, mensaje, estado (por defecto "pendiente_confirmacion"), origen ("chatbot_voz"), created_at.
- Tras guardar, el chatbot debe confirmar al usuario con un mensaje claro: "¡Listo! He registrado tu solicitud de cita para [tratamiento] el [día]. Como estamos fuera de horario / para confirmar el hueco exacto, el equipo te llamará al [teléfono] en cuanto abramos (L-J 8:30–14:30) para confirmar definitivamente. Si es urgente, puedes escribirnos ya por WhatsApp al 678 69 98 33."
- Si el usuario pide algo urgente (dolor agudo, urgencia dental) fuera de horario, el chatbot debe recomendar directamente llamar o escribir por WhatsApp en vez de agendar una cita normal.
- Añadir una vista simple protegida por contraseña en /admin-citas (o similar) donde la clínica pueda ver el listado de citas solicitadas por el chatbot (tabla de Supabase), marcarlas como confirmadas/rechazadas, y ver la hora en que se solicitaron — para que por la mañana el equipo revise todo lo que entró mientras estaban cerrados.

COMPORTAMIENTO GENERAL:
- Mensaje de bienvenida automático (en texto y leído en voz si el modo voz está activo): "Hola 👋 Soy el asistente virtual de la Clínica Dental Dres. Mompeán, disponible las 24 horas. Puedo darte información sobre horarios y tratamientos, o ayudarte a agendar tu cita ahora mismo, aunque estemos cerrados."
- Guardar el historial de la conversación en el estado de React mientras el usuario esté en la página (no hace falta persistencia entre sesiones, salvo las citas guardadas en Supabase).
- Mostrar un indicador de "escribiendo..." (o "pensando..." en modo voz) mientras se espera la respuesta de la API.
- Manejar errores de la API o de guardado en Supabase con un mensaje amable: "Ahora mismo no puedo completar esto, puedes llamarnos al 678 69 98 33 o escribirnos por WhatsApp y te atenderemos en cuanto abramos."

SEO TÉCNICO:

Cada página con su propio <title> y meta description únicos orientados a búsquedas locales: "Clínica Dental Murcia", "Invisalign Murcia", "Urgencias dentales Murcia", "Dentista pediátrico Murcia", etc. Uso correcto de jerarquía de encabezados (un solo H1 por página, H2/H3 para subsecciones). Texto alternativo (alt) descriptivo en todas las imágenes. URLs limpias y descriptivas (sin parámetros raros). Datos estructurados tipo negocio local en la página de inicio (nombre, dirección, teléfono, horario, valoración) si es posible representarlo en el HTML.

TONO DE TODOS LOS TEXTOS:

Cercano, profesional, tranquilizador — pensado para alguien que quizás tiene miedo al dentista. Nada de lenguaje corporativo frío ni tecnicismos innecesarios. Siempre reforzar: trato cercano, sin esperas, tecnología moderna, equipo de confianza, 5 estrellas en Google. No uses ningún texto de relleno tipo "Lorem ipsum" — genera todo el contenido en español, real y coherente con una clínica dental de Murcia.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://drmompeandental.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/40fbde2f-1033-4c97-96c8-b10729958ed4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

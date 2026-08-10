import invisalignImg from "@/assets/invisalign.jpg";
import esteticaImg from "@/assets/estetica.jpg";
import odontopediatriaImg from "@/assets/odontopediatria.jpg";
import urgenciasImg from "@/assets/urgencias.jpg";
import blanqueamientoImg from "@/assets/blanqueamiento.jpg";

export const CLINICA = {
  nombre: "Clínica Dental Dres. Mompeán",
  direccion: "C. Calderón de la Barca, 14, Piso 4ºA, 30001 Murcia",
  calle: "C. Calderón de la Barca, 14, Piso 4ºA",
  ciudad: "30001 Murcia",
  telefono: "678 69 98 33",
  telefonoTel: "+34678699833",
  whatsapp:
    "https://wa.me/34678699833?text=Hola,%20me%20gustar%C3%ADa%20pedir%20informaci%C3%B3n%20sobre%20una%20cita",
  email: "info@clinicadentalmompean.es",
  valoracion: "5,0",
  resenas: 18,
  horario: "Lunes a Jueves de 8:30 a 14:30 · Viernes a domingo, cerrado",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Calder%C3%B3n+de+la+Barca+14+30001+Murcia",
  mapsEmbed:
    "https://www.google.com/maps?q=Calle%20Calder%C3%B3n%20de%20la%20Barca%2014%2C%2030001%20Murcia&output=embed",
  resenasGoogle: "https://www.google.com/search?q=Cl%C3%ADnica+Dental+Dres.+Mompe%C3%A1n+Murcia",
  redes: {
    instagram: "https://instagram.com/clinicamompean",
    facebook: "https://facebook.com/clinicamompean",
    tiktok: "https://tiktok.com/@clinicamompean",
  },
};

export type Servicio = {
  slug: string;
  titulo: string;
  resumen: string;
  imagen: string;
  ruta: string;
};

export const SERVICIOS: Servicio[] = [
  {
    slug: "invisalign",
    titulo: "Invisalign · Ortodoncia invisible",
    resumen:
      "Alinea tus dientes sin brackets, con férulas transparentes que casi nadie notará. Cómodo, removible y planificado en 3D.",
    imagen: invisalignImg,
    ruta: "/invisalign",
  },
  {
    slug: "odontologia-estetica",
    titulo: "Odontología estética",
    resumen:
      "Carillas, blanqueamiento y diseño de sonrisa para que vuelvas a sonreír sin taparte la boca.",
    imagen: esteticaImg,
    ruta: "/odontologia-estetica",
  },
  {
    slug: "odontopediatria",
    titulo: "Odontología pediátrica",
    resumen:
      "Primera visita sin miedo, con paciencia y juego. Cuidamos la boca de los peques desde que salen sus primeros dientes.",
    imagen: odontopediatriaImg,
    ruta: "/odontopediatria",
  },
  {
    slug: "urgencias",
    titulo: "Urgencias dentales en Murcia",
    resumen:
      "¿Dolor fuerte, un diente roto o un flemón? Te atendemos lo antes posible y te calmamos el dolor.",
    imagen: urgenciasImg,
    ruta: "/urgencias-dentales-murcia",
  },
];

export const TRATAMIENTOS = [
  "Primera visita / revisión",
  "Invisalign · ortodoncia invisible",
  "Odontología estética (carillas, blanqueamiento)",
  "Implantes dentales",
  "Odontología pediátrica",
  "Odontología con sedación",
  "Urgencia dental",
  "Otro / no lo sé todavía",
];

export type Articulo = {
  slug: string;
  titulo: string;
  resumen: string;
  imagen: string;
  alt: string;
  fecha: string;
  lectura: string;
  metaTitle: string;
  metaDescription: string;
  contenido: { h2: string; parrafos: string[] }[];
};

export const ARTICULOS: Articulo[] = [
  {
    slug: "cuanto-dura-tratamiento-invisalign",
    titulo: "¿Cuánto dura un tratamiento de Invisalign?",
    resumen:
      "La duración media, qué factores la alargan o la acortan y cómo lo planificamos en nuestra clínica de Murcia para que no se eternice.",
    imagen: invisalignImg,
    alt: "Férula transparente de Invisalign sostenida entre los dedos",
    fecha: "12 de marzo de 2025",
    lectura: "5 min",
    metaTitle: "¿Cuánto dura un tratamiento de Invisalign? | Murcia",
    metaDescription:
      "Te explicamos cuánto dura Invisalign según cada caso, qué influye en el tiempo de tratamiento y cómo lo planificamos en nuestra clínica dental de Murcia.",
    contenido: [
      {
        h2: "La respuesta corta: entre 6 y 18 meses en la mayoría de casos",
        parrafos: [
          "Es la primera pregunta que nos hace casi todo el mundo cuando se sienta en el sillón: “¿y esto cuánto va a durar?”. La respuesta honesta es que depende de tu caso, pero podemos darte un rango realista: la mayoría de los tratamientos de Invisalign que hacemos en nuestra clínica de Murcia se resuelven entre los 6 y los 18 meses.",
          "Los casos más sencillos —un ligero apiñamiento en los dientes de delante, una recaída de una ortodoncia antigua, un pequeño espacio que se ha abierto con los años— pueden estar terminados en apenas 6 u 8 meses. Los casos más complejos, con mordidas cruzadas, apiñamientos importantes o necesidad de mover muelas, se acercan más a los 18 o 24 meses.",
          "Lo bueno de Invisalign es que no vas a ir a ciegas. Antes de empezar hacemos un escaneado 3D de tu boca y te enseñamos, en pantalla, cómo se van a mover tus dientes semana a semana y cómo quedará tu sonrisa al final. Sales de esa primera visita sabiendo el número aproximado de férulas y, por tanto, el tiempo estimado.",
        ],
      },
      {
        h2: "Qué factores hacen que dure más o menos",
        parrafos: [
          "El primero y más importante es la complejidad del movimiento. No es lo mismo girar ligeramente un incisivo que cerrar un espacio grande o corregir una mordida abierta. Cuanto más lejos estén tus dientes de su posición ideal, más férulas necesitarás.",
          "El segundo factor, y aquí sí que mandas tú, son las horas de uso. Invisalign necesita entre 20 y 22 horas al día puestas. Si te las quitas a menudo, si se te olvidan al comer fuera o si las dejas en el bolso “un ratito”, el tratamiento se alarga. No es un castigo: es simple biología, los dientes solo se mueven mientras la férula está haciendo fuerza.",
          "El tercero es la edad y la respuesta biológica de cada persona. En pacientes jóvenes el hueso responde algo más rápido; en adultos el movimiento es igual de predecible pero suele necesitar un poco más de paciencia.",
          "Y el cuarto es el seguimiento. Revisar el caso cada 6-8 semanas nos permite detectar a tiempo si un diente se está quedando atrás y corregir el rumbo, en lugar de descubrirlo al final y tener que pedir férulas de refinamiento.",
        ],
      },
      {
        h2: "Cómo lo planificamos nosotros",
        parrafos: [
          "En la primera visita hacemos un estudio completo: fotografías, radiografía y escaneado intraoral. Con eso preparamos tu ClinCheck, la simulación 3D del tratamiento. Te la enseñamos con calma, te explicamos cuántas férulas serán, cada cuánto se cambian y cuál es el resultado esperado. Si algo no te convence, se ajusta antes de fabricar nada.",
          "Durante el tratamiento te vemos cada 6 u 8 semanas, en visitas cortas de 15-20 minutos. No hay urgencias de brackets despegados ni alambres que pinchan, así que las revisiones son tranquilas.",
          "Al terminar viene la parte que muchos olvidan: la retención. Colocamos un retenedor fijo por dentro y/o una férula de noche. Sin retención los dientes tienden a volver, y sería una pena perder el resultado de un año de trabajo.",
        ],
      },
      {
        h2: "¿Se puede acelerar?",
        parrafos: [
          "Sí, dentro de un límite razonable. En muchos casos podemos programar cambios de férula cada 7 días en lugar de cada 14, siempre que el movimiento lo permita y que tú cumplas con las horas de uso. En determinados casos también existen técnicas complementarias que estimulan la respuesta del hueso.",
          "Lo que no recomendamos nunca es forzar plazos por encima de lo que aguanta la biología. Un diente movido demasiado rápido puede sufrir. Preferimos ser sinceros contigo desde el principio: mejor un mes más y un resultado sano y estable.",
        ],
      },
      {
        h2: "Nuestra recomendación",
        parrafos: [
          "Si llevas tiempo dándole vueltas, la mejor forma de salir de dudas es venir a que te veamos. En una visita informativa te decimos si eres candidato, cuánto tiempo estimamos en tu caso concreto y qué opciones de financiación tienes. Sin compromiso y sin lenguaje raro: te lo explicamos como se lo explicaríamos a un amigo.",
        ],
      },
    ],
  },
  {
    slug: "preparar-a-tu-hijo-primera-visita-dentista",
    titulo: "Cómo preparar a tu hijo para su primera visita al dentista",
    resumen:
      "Trucos que funcionan de verdad para que tu peque entre tranquilo a la consulta, y qué hacemos nosotros para que salga con una sonrisa.",
    imagen: odontopediatriaImg,
    alt: "Niño sonriente levantando el pulgar sentado en el sillón dental",
    fecha: "4 de abril de 2025",
    lectura: "5 min",
    metaTitle: "Primera visita al dentista de tu hijo | Murcia",
    metaDescription:
      "Consejos prácticos de nuestro dentista pediátrico en Murcia para que la primera visita de tu hijo al dentista sea tranquila, divertida y sin miedo.",
    contenido: [
      {
        h2: "¿Cuándo debe ir un niño al dentista por primera vez?",
        parrafos: [
          "La recomendación general es que la primera visita se haga alrededor del primer año de vida, o poco después de que aparezcan los primeros dientes. Suena pronto, y muchos padres se sorprenden, pero esa primera cita no es para hacer nada invasivo: es para mirar, resolver dudas sobre higiene y alimentación, y —sobre todo— para que el niño conozca el sitio cuando no le duele nada.",
          "Ese detalle es clave. Si la primera vez que un niño pisa una clínica dental es porque tiene dolor, su cerebro asocia el lugar con el dolor. Si viene antes, cuando todo está bien, la consulta es simplemente un sitio curioso con una silla que sube y baja.",
        ],
      },
      {
        h2: "Qué puedes hacer en casa los días previos",
        parrafos: [
          "Habla del tema con naturalidad, sin darle demasiada importancia. Frases como “vamos a que te cuenten los dientes” funcionan mejor que un discurso largo.",
          "Evita palabras que tú asocias con miedo aunque él todavía no: “no te va a doler”, “no te van a pinchar”, “no llores”. Al decirlas estás introduciendo la idea de que hay algo que temer. Mejor cambiarlas por “te van a mirar los dientes con un espejito”.",
          "Juega a los dentistas en casa. Túmbale en el sofá, cuéntale los dientes con una linterna y deja que él te los cuente a ti. Es un ensayo perfecto y suele encantarles.",
          "Elige bien la hora. Un niño con sueño o con hambre lo lleva peor. Las citas de media mañana suelen funcionar mejor que las de después de comer.",
          "Y si tú tienes miedo al dentista, intenta que no se note. Los niños leen nuestra tensión mucho mejor de lo que creemos. Si te cuesta, que le acompañe el adulto que esté más tranquilo.",
        ],
      },
      {
        h2: "Qué hacemos nosotros en la consulta",
        parrafos: [
          "En la primera cita no corremos. Dedicamos los primeros minutos a que el peque se familiarice: se sienta en el sillón, lo sube y lo baja, toca el espejito, ve el agua salir de la jeringa. Trabajamos con la técnica de “decir, mostrar, hacer”: primero le explicamos con palabras suyas qué vamos a hacer, luego se lo enseñamos en su mano o en un muñeco, y solo después lo hacemos en su boca.",
          "Nunca engañamos a un niño. Si algo va a molestar un poco, se lo decimos. Perder su confianza en la primera visita significa perderla para muchos años.",
          "Reforzamos siempre lo positivo: “qué bien has abierto la boca”, “te has portado genial”. Y terminamos con algo divertido para que el recuerdo final sea bueno.",
          "Si detectamos ansiedad importante o el tratamiento es más largo, contamos también con odontología con sedación consciente, que permite trabajar con el niño relajado y sin sufrimiento.",
        ],
      },
      {
        h2: "Después de la visita",
        parrafos: [
          "Celébralo, pero sin exagerar. Un “lo has hecho fenomenal” vale más que un premio enorme, que puede transmitir la idea de que ha pasado por algo terrible.",
          "Y mantén la rutina: revisiones cada seis meses, cepillado dos veces al día supervisado hasta los 8-9 años, y poco azúcar entre horas. La mayoría de las caries infantiles que vemos se podrían haber evitado con estos tres hábitos.",
        ],
      },
      {
        h2: "Estamos aquí para ayudarte",
        parrafos: [
          "Si tu hijo ya ha tenido una mala experiencia y ahora se niega a abrir la boca, no eres el primer padre que nos lo cuenta. Se puede reconducir, con paciencia y con visitas cortas de adaptación. Llámanos y te contamos cómo lo hacemos.",
        ],
      },
    ],
  },
  {
    slug: "blanqueamiento-dental-mitos-y-verdades",
    titulo: "Blanqueamiento dental: mitos y verdades",
    resumen:
      "¿Estropea el esmalte? ¿Sirve el carbón activado? ¿Cuánto dura? Respondemos con criterio clínico y sin exagerar resultados.",
    imagen: blanqueamientoImg,
    alt: "Guía de color dental junto a una sonrisa blanca y sana",
    fecha: "22 de mayo de 2025",
    lectura: "6 min",
    metaTitle: "Blanqueamiento dental en Murcia: mitos y verdades",
    metaDescription:
      "Un dentista de Murcia responde a los mitos más habituales del blanqueamiento dental: si daña el esmalte, cuánto dura y qué resultados son realistas.",
    contenido: [
      {
        h2: "Mito 1: “El blanqueamiento estropea el esmalte”",
        parrafos: [
          "Es la creencia más extendida y, hecho en clínica y con supervisión, es falsa. Los geles que utilizamos están basados en peróxido de hidrógeno o peróxido de carbamida, que actúan oxidando los pigmentos que hay dentro del diente. No desgastan el esmalte ni lo hacen más fino.",
          "Lo que sí puede ocurrir es sensibilidad temporal durante unos días. Es molesto, pero reversible, y se controla bien con pastas desensibilizantes y ajustando las concentraciones. Lo que de verdad puede dañar tus dientes son los kits sin control que se compran por internet, con concentraciones descontroladas y férulas que no se ajustan a tu boca y dejan escapar el gel a la encía.",
        ],
      },
      {
        h2: "Mito 2: “El carbón activado y el bicarbonato blanquean”",
        parrafos: [
          "No blanquean: abrasionan. Eliminan manchas superficiales frotando, igual que una lija fina. Al principio parece que funciona porque desaparece la tinción del café, pero con el uso continuado desgastan el esmalte y dejan al descubierto la dentina, que es más amarilla. Resultado: a medio plazo tus dientes se ven más oscuros, no más blancos.",
          "Lo mismo pasa con muchos remedios caseros con limón o vinagre. El ácido erosiona el esmalte de forma irreversible. Por favor, no lo hagas.",
        ],
      },
      {
        h2: "Verdad: no todos los dientes responden igual",
        parrafos: [
          "Las manchas amarillentas propias de la edad o del café y el tabaco responden muy bien. Las manchas grisáceas, las causadas por tetraciclinas o las de un diente que ha sufrido un traumatismo responden peor y a veces necesitan otra solución, como una carilla.",
          "Y un detalle importante: las fundas, coronas, carillas y empastes no se blanquean. Si tienes una funda en un incisivo y blanqueas el resto, ese diente se quedará como estaba y habrá que renovarlo después. Por eso siempre planificamos primero y tratamos después.",
        ],
      },
      {
        h2: "Verdad: el resultado dura, pero no es eterno",
        parrafos: [
          "Un blanqueamiento bien hecho suele mantenerse entre uno y tres años. Depende mucho de tus hábitos: café, té, vino tinto, refrescos de cola y tabaco vuelven a teñir el diente.",
          "La buena noticia es que el mantenimiento es sencillo. Con conservar tus férulas personalizadas y hacer un par de noches de repaso al año, el tono se mantiene sin necesidad de repetir el tratamiento completo.",
        ],
      },
      {
        h2: "Cómo lo hacemos en la clínica",
        parrafos: [
          "Primero revisamos que no haya caries ni problemas de encías: blanquear una boca que no está sana es pedir problemas. Hacemos una limpieza previa, tomamos el color de partida y decidimos contigo el método: en clínica, en casa con férulas, o combinado, que es el que mejores resultados suele dar.",
          "Te enseñamos el antes y el después con la guía de color y te damos pautas para los primeros días —la llamada “dieta blanca”— para que el resultado se asiente bien.",
          "Nuestro objetivo no es un blanco artificial de anuncio, sino un tono natural y luminoso que encaje con tu cara. Eso es lo que hace que una sonrisa se vea bien de verdad.",
        ],
      },
    ],
  },
  {
    slug: "que-hacer-si-se-te-rompe-un-diente",
    titulo: "Qué hacer si se te rompe un diente (urgencia dental)",
    resumen:
      "Los primeros 30 minutos importan. Guía rápida para actuar bien ante un diente roto o un golpe, paso a paso.",
    imagen: urgenciasImg,
    alt: "Odontólogo atendiendo a una paciente en una urgencia dental",
    fecha: "9 de junio de 2025",
    lectura: "5 min",
    metaTitle: "Se me ha roto un diente: qué hacer | Urgencias Murcia",
    metaDescription:
      "Guía paso a paso ante un diente roto o un golpe dental. Qué hacer en los primeros minutos y cómo contactar con urgencias dentales en Murcia.",
    contenido: [
      {
        h2: "Primero: mantén la calma y valora el alcance",
        parrafos: [
          "Un diente roto asusta, sobre todo si es de los de delante, pero en la inmensa mayoría de los casos tiene solución y buen pronóstico. Lo primero es ver qué ha pasado exactamente: si solo se ha saltado un trocito de esmalte, si el diente está astillado hasta la parte rosada, si se ha movido o si ha salido entero.",
          "Enjuágate la boca con agua templada, sin frotar. Si hay sangrado, muerde una gasa limpia durante diez minutos. Aplica frío por fuera de la mejilla en intervalos de 10-15 minutos para bajar la inflamación.",
        ],
      },
      {
        h2: "Si se ha roto un trozo",
        parrafos: [
          "Busca el fragmento y guárdalo. En bastantes casos podemos volver a pegarlo y el resultado estético es excelente. Consérvalo en leche, en suero fisiológico o en saliva —nunca envuelto en un pañuelo seco, porque se deshidrata y pierde color.",
          "Evita masticar por ese lado y no toques la zona con la lengua constantemente. Si el borde está afilado y te corta, puedes cubrirlo temporalmente con cera de ortodoncia o un chicle sin azúcar hasta que llegues a la clínica.",
        ],
      },
      {
        h2: "Si el diente se ha salido entero",
        parrafos: [
          "Esto sí es una urgencia de reloj. Un diente permanente avulsionado tiene muchas posibilidades de reimplantarse con éxito si se actúa en los primeros 30-60 minutos.",
          "Cógelo siempre por la corona, nunca por la raíz. Si está sucio, enjuágalo un par de segundos con suero o leche, sin frotar ni cepillar. Si te ves capaz, colócalo en su sitio y muerde una gasa suavemente. Si no, mételo en un vaso con leche, suero fisiológico o la propia saliva y ven inmediatamente.",
          "Importante: si es un diente de leche de un niño, no se reimplanta. Aun así, conviene que lo veamos para revisar que el diente definitivo que viene debajo no haya sufrido.",
        ],
      },
      {
        h2: "Señales de que no puedes esperar",
        parrafos: [
          "Dolor intenso que no cede con analgésicos, inflamación de la cara o del cuello, fiebre, sangrado que no para o un golpe con pérdida de conocimiento son motivos para buscar atención urgente de inmediato. En caso de traumatismo importante con afectación general, acude directamente a un servicio de urgencias hospitalario.",
        ],
      },
      {
        h2: "Cómo contactar con nosotros",
        parrafos: [
          "Atendemos urgencias dentales en Murcia dentro de nuestro horario, de lunes a jueves de 8:30 a 14:30, y reservamos huecos cada día precisamente para estos casos. Llámanos al 678 69 98 33 y cuéntanos qué ha pasado: te diremos qué hacer mientras vienes.",
          "Si nos escribes fuera de horario, por WhatsApp o a través del asistente virtual de la web, tu solicitud queda registrada y te llamamos en cuanto abrimos para darte el primer hueco disponible.",
        ],
      },
    ],
  },
];

export type Resena = {
  nombre: string;
  inicial: string;
  fecha: string;
  texto: string;
};

export const RESENAS: Resena[] = [
  {
    nombre: "Laura M.",
    inicial: "L",
    fecha: "Hace 2 meses",
    texto:
      "Empecé el tratamiento de Invisalign con bastante miedo y ha sido mucho más llevadero de lo que imaginaba. Me explicaron cada paso con la simulación en 3D y el resultado ha superado lo que esperaba. Encantada.",
  },
  {
    nombre: "Javier R.",
    inicial: "J",
    fecha: "Hace 3 meses",
    texto:
      "Profesionalidad y trato de diez. Te escuchan, no te meten prisa y te explican las cosas de forma que se entienden. Se nota que trabajan bien y sin vender tratamientos que no necesitas.",
  },
  {
    nombre: "Carmen S.",
    inicial: "C",
    fecha: "Hace 4 meses",
    texto:
      "Desde que entras por la puerta te sientes bien atendida. Puntualidad absoluta, nunca he tenido que esperar y siempre salgo con la sensación de que se han preocupado por mí.",
  },
  {
    nombre: "Antonio G.",
    inicial: "A",
    fecha: "Hace 5 meses",
    texto:
      "Fui de urgencia con un dolor tremendo y me hicieron hueco el mismo día. Me quitaron el dolor y me explicaron el plan para solucionarlo bien. No puedo estar más agradecido.",
  },
  {
    nombre: "María del Mar P.",
    inicial: "M",
    fecha: "Hace 6 meses",
    texto:
      "Llevo a mis dos hijos y es la primera clínica a la que entran sin llorar. Tienen una paciencia infinita con los niños y salen contentos, que es lo que más valoro.",
  },
  {
    nombre: "Pedro L.",
    inicial: "P",
    fecha: "Hace 8 meses",
    texto:
      "Me hice un blanqueamiento y unas carillas. Resultado natural, nada exagerado, justo lo que pedí. El seguimiento posterior fue impecable.",
  },
];

export const CONFIANZA = [
  {
    titulo: "Se necesita cita",
    texto: "Atendemos con cita previa para que no esperes: tu hora es tu hora.",
  },
  {
    titulo: "Atención pediátrica",
    texto: "Odontopediatría con paciencia y sin sustos para los más pequeños.",
  },
  {
    titulo: "Odontología con sedación",
    texto: "Si te da miedo el dentista, podemos tratarte relajado y sin ansiedad.",
  },
  {
    titulo: "Servicios de emergencias",
    texto: "Huecos reservados cada día para urgencias y dolor agudo.",
  },
];

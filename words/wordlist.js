let wordList = [
  {
    theme: "océano",
    words: ["cangrejo", "playa", "delfín", "caballito de mar"],
  },
  {
    theme: "bosque",
    words: ["oso", "sendero", "excursionismo", "fogata"],
  },
  {
    theme: "desierto",
    words: ["arena", "serpiente", "cactus", "sequía"],
  },
  {
    theme: "clima",
    words: ["viento", "nube", "soleado", "llovizna"],
  },
  {
    theme: "escuela",
    words: ["examen", "amigo", "biblioteca", "tarea"],
  },
  {
    theme: "música",
    words: ["bajo", "tempo", "violín", "trombón"],
  },
  {
    theme: "deportes",
    words: ["disco", "pista", "lacrosse", "fútbol"],
  },
  {
    theme: "naturaleza",
    words: ["hoja", "océano", "amanecer", "arcoíris"],
  },
  {
    theme: "granja",
    words: ["toro", "caballo", "tractor", "pollo"],
  },
  {
    theme: "ciudad",
    words: ["alto", "ruidoso", "metro", "edificio"],
  },
  {
    theme: "hogar",
    words: ["patio", "sofá", "cocina", "dormitorio"],
  },
  {
    theme: "transporte",
    words: ["bicicleta", "tren", "camión", "avión"],
  },
  {
    theme: "tecnología",
    words: ["disco", "píxel", "iPhone", "computadora"],
  },
  {
    theme: "ciencia",
    words: ["átomo", "luz", "gravedad", "física"],
  },
  {
    theme: "reino",
    words: ["bandera", "corona", "invasor", "guerrero"],
  },
  {
    theme: "tierra",
    words: ["tierra", "mundo", "suelo", "cultura"],
  },
  {
    theme: "comida",
    words: ["sopa", "fruta", "cítricos", "lechuga"],
  },
  {
    theme: "animales",
    words: ["pez", "panda", "conejo", "mapache"],
  },
  {
    theme: "plantas",
    words: ["arbusto", "pétalo", "agujas", "calabaza"],
  },
  {
    theme: "salud",
    words: ["pastilla", "enfermera", "doctor", "hospital"],
  },
  {
    theme: "emociones",
    words: ["dolor", "enojo", "soledad", "agradecido"],
  },
  {
    theme: "ropa",
    words: ["chaleco", "zapatos", "botón", "sweater"],
  },
  {
    theme: "trabajos",
    words: ["ascensor", "minero", "policía", "fontanero"],
  },
  {
    theme: "finanzas",
    words: ["préstamo", "precio", "inversión", "banca"],
  },
  {
    theme: "arquitectura",
    words: ["arco", "torre", "columna", "estadio"],
  },
  {
    theme: "profesiones",
    words: ["cocinero", "enfermera", "dentista", "cirujano"],
  },
  {
    theme: "familia",
    words: ["tía", "sobrina", "prima", "abuela"],
  },
  {
    theme: "generación",
    words: ["molinillo", "alfa", "anciano", "antiguo"],
  },
  {
    theme: "literatura",
    words: ["poema", "novela", "prosa", "ficción"],
  },
  {
    theme: "geografía",
    words: ["este", "océano", "valle", "prado"],
  },
  {
    theme: "gobierno",
    words: ["billete", "alcalde", "senado", "embajada"],
  },
  {
    theme: "industria",
    words: ["carbón", "acero", "petróleo", "fábrica"],
  },
  {
    theme: "ciencia ficción",
    words: ["rayo", "extraterrestre", "galaxia", "cíborg"],
  },
  {
    theme: "filosofía",
    words: ["ética", "lógica", "dilema", "falacia"],
  },
  {
    theme: "artes",
    words: ["obra de teatro", "foto", "lienzo", "galería"],
  },
  {
    theme: "guerra",
    words: ["bomba", "rifle", "bunker", "cuartel"],
  },
  {
    theme: "crimen",
    words: ["robo", "fraude", "secuestro", "agresión"],
  },
  {
    theme: "justicia",
    words: ["justo", "verdad", "inocente", "veredicto"],
  },
  {
    theme: "política",
    words: ["voto", "partido", "debate", "congreso"],
  },
  {
    theme: "religión",
    words: ["rezar", "fe", "creencia", "doctrina"],
  },
  {
    theme: "mitología",
    words: ["Zeus", "Atenea", "Olimpo", "Hércules"],
  },
  {
    theme: "geología",
    words: ["roca", "falla", "cristal", "mineral"],
  },
  {
    theme: "astronomía",
    words: ["Marte", "Venus", "Saturno", "Mercurio"],
  },
  {
    theme: "química",
    words: ["sal", "óxido", "enzima", "proteína"],
  },
  {
    theme: "física",
    words: ["calor", "luz", "plasma", "cuántico"],
  },
  {
    theme: "artes escénicas",
    words: ["mimo", "ópera", "ballet", "orquesta"],
  },
  {
    theme: "biología",
    words: ["célula", "nervio", "órgano", "neurona"],
  },
  {
    theme: "matemáticas",
    words: ["raíz cuadrada", "ángulo", "vértice", "fórmula"],
  },
  {
    theme: "ingeniería",
    words: ["engranaje", "láser", "sensor", "batería"],
  },
  {
    theme: "tecnología",
    words: ["código", "píxel", "iPhone", "computadora"],
  },
  {
    theme: "comunicación",
    words: ["texto", "correo electrónico", "medio", "red"],
  },
  {
    theme: "negocios",
    words: ["vender", "acciones", "inversión", "startup"],
  },
  {
    theme: "economía",
    words: ["dinero en efectivo", "comercio", "demanda", "finanzas"],
  },
  {
    theme: "educación",
    words: ["matemáticas", "clase", "lección", "campus"],
  },
  {
    theme: "lenguaje",
    words: ["palabra", "hablar", "diálogo", "gramática"],
  },
  {
    theme: "literatura",
    words: ["poema", "prosa", "novela", "trilogía"],
  },
  {
    theme: "arte",
    words: ["pintar", "esculpir", "exponer", "museo"],
  },
  {
    theme: "música",
    words: ["canción", "acorde", "ritmo", "concierto"],
  },
  {
    theme: "baile",
    words: ["jazz", "swing", "tango", "ballet"],
  },
  {
    theme: "teatro",
    words: ["obra de teatro", "escena", "guion", "musical"],
  },
  {
    theme: "cine",
    words: ["bobina", "inicio", "estudio", "cine"],
  },
  {
    theme: "deportes",
    words: ["golf", "tenis", "carrera", "ciclismo"],
  },
  {
    theme: "noticias",
    words: ["publicación", "periódico", "actualización", "diario"],
  },
  {
    theme: "política",
    words: ["voto", "partido", "debate", "congreso"],
  },
  {
    theme: "ley",
    words: ["traje", "crimen", "abogado", "procesar"],
  },
  {
    theme: "viaje",
    words: ["tour", "crucero", "vacaciones", "itinerario"],
  },
  {
    theme: "sabor",
    words: ["agrio", "picante", "sabroso", "delicioso"],
  },
  {
    theme: "cocina",
    words: ["hornear", "saltear", "cocinar a fuego lento", "barbacoa"],
  },
  {
    theme: "jardinería",
    words: ["suelo", "podar", "flor", "cosechar"],
  },
  {
    theme: "mascotas",
    words: ["pez", "gatito", "jerbo", "pez dorado"],
  },
  {
    theme: "crianza",
    words: ["cuna", "sueño", "pañal", "niño pequeño"],
  },
  {
    theme: "fitness",
    words: ["repeticiones", "sudor", "jogging", "spinning"],
  },
  {
    theme: "belleza",
    words: ["uña", "delineador", "labial", "máscara"],
  },
  {
    theme: "moda",
    words: ["estado de ánimo", "estilo", "vintage", "patrón"],
  },
  {
    theme: "hogar",
    words: ["sofá", "cortina", "gabinete", "dormitorio"],
  },
  {
    theme: "diseño de interiores",
    words: ["lámpara", "decoración", "diseño", "amueblar"],
  },
  {
    theme: "vehículos",
    words: ["neumático", "freno", "motor", "tablero"],
  },
  {
    theme: "pasatiempos",
    words: ["lana", "edredón", "rompecabezas", "origami"],
  },
  {
    theme: "manualidades",
    words: ["pegamento", "cuentas", "tejer", "ganchillo"],
  },
  {
    theme: "juegos",
    words: ["dados", "ajedrez", "sudoku", "jumblie"],
  },
  {
    theme: "comedia",
    words: ["chiste", "boceto", "asado", "improvisar"],
  },
  {
    theme: "aventura",
    words: ["balsa", "trepar", "bungee", "tirolina"],
  },
  {
    theme: "naturaleza",
    words: ["árbol", "helecho", "bosque", "prado"],
  },
  {
    theme: "psicología",
    words: ["yo", "enojo", "mental", "terapia"],
  },
  {
    theme: "filosofía",
    words: ["idea", "lógica", "mentalidad", "dilema"],
  },
  {
    theme: "fotografía",
    words: ["zoom", "enfoque", "viñeta", "paisaje"],
  },
  {
    theme: "terror",
    words: ["miedo", "pesadilla", "vampiro", "monstruo"],
  },
  {
    theme: "fantasía",
    words: ["mito", "magia", "castillo", "dragón"],
  },
  {
    theme: "acción",
    words: ["piratear", "pelear", "batalla", "duelo"],
  },
  {
    theme: "mitología",
    words: ["lore", "hada", "leyenda", "Olimpo"],
  },
  {
    theme: "exploración",
    words: ["buscar", "atlas", "brújula", "pionero"],
  },
  {
    theme: "misterio",
    words: ["pista", "coartada", "motivo", "sospechoso"],
  },
  {
    theme: "sobrenatural",
    words: ["acechar", "fantasma", "espeluznante", "psíquico"],
  },
  {
    theme: "espía",
    words: ["topo", "secreto", "encubierto", "misión"],
  },
  {
    theme: "películas del viejo oeste",
    words: ["pueblo", "vaquero", "desierto", "frontera"],
  },
  {
    theme: "mascotas",
    words: ["pez", "cachorro", "gatito", "hámster"],
  },
  {
    theme: "guerra",
    words: ["ejército", "lucha", "combate", "estrategia"],
  },
  {
    theme: "historia",
    words: ["pasado", "antiguo", "reliquia", "artefacto"],
  },
  {
    theme: "biografía",
    words: ["vida", "historia", "memorias", "legado"],
  },
  {
    theme: "viajar",
    words: ["viaje", "ruta", "viaje", "turista"],
  },
  {
    theme: "clima",
    words: ["lluvia", "nube", "ventoso", "trueno"],
  },
  {
    theme: "animales",
    words: ["ave", "hipopótamo", "reptil", "elefante"],
  },
  {
    theme: "agricultura",
    words: ["cultivo", "granero", "cosecha", "tractor"],
  },
  {
    theme: "cocina",
    words: ["hornear", "asar", "receta", "concoctar"],
  },
  {
    theme: "horneado",
    words: ["horno", "levadura", "harina", "pastelería"],
  },
  {
    theme: "relaciones",
    words: ["amor", "confianza", "cercanía", "amigo"],
  },
  {
    theme: "generaciones",
    words: ["edades", "ancianos", "legado", "descender"],
  },
  {
    theme: "envejecimiento",
    words: ["sabio", "maduro", "senior", "arruga"],
  },
  {
    theme: "hogar",
    words: ["acogedor", "morada", "residir", "conectar"],
  },
  {
    theme: "cumpleaños",
    words: ["pastel", "fiesta", "vela", "sorpresa"],
  },
  {
    theme: "navegación",
    words: ["navegar", "yate", "barco", "regata"],
  },
  {
    theme: "locomoción",
    words: ["ferrocarril", "tren", "vagón de cola", "conductor"],
  },
  {
    theme: "invento",
    words: ["hacer", "comenzar", "patente", "prototipo"],
  },
  {
    theme: "energía",
    words: ["empujar", "verde", "solar", "generar"],
  },
  {
    theme: "reciclaje",
    words: ["ahorrar", "reutilizar", "desperdicio", "plástico"],
  },
  {
    theme: "ecología",
    words: ["árbol", "hábitat", "naturaleza", "conservar"],
  },
  {
    theme: "volcán",
    words: ["lava", "magma", "erupción", "cráter"],
  },
  {
    theme: "rescate",
    words: ["salvar", "flotar", "revivir", "recuperar"],
  },
  {
    theme: "seguridad",
    words: ["seguro", "guardia", "proteger", "vigilar"],
  },
  {
    theme: "supervivencia",
    words: ["empaque", "forraje", "soportar", "refugio"],
  },
  {
    theme: "inversión",
    words: ["fondo", "activo", "gasto", "dividendo"],
  },
  {
    theme: "banca",
    words: ["préstamo", "dinero", "crédito", "hipoteca"],
  },
  {
    theme: "comercio",
    words: ["tarjeta", "venta al por menor", "importación", "paso"],
  },
];

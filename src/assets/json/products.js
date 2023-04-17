const products = [
    {
        "id": 1,
        "name": "Maleta - Bolso",
        "price": 140000,
        "image": "./src/img/img-products/BOLSO-MALETA-0.1.jpeg",
        "category": "Maleta - Bolso",
        "quantity": 5,
        "description": "Maleta convertible en bolso creada con tela residual, bolsillos creados a través de la unión de retazos (Proceso Sostenible). 1 Bolsillo delantero , 2 Bolsillos laterales, Tapa posterior con bolsillos para guardar las correas de colgar, 1 correa graduable removible, 1 bolsillo interno.",
        "measures": "Alto 44 cm, Ancho 25 cm, Base 25 cm"
    },
    {
        "id": 2,
        "name": "Maleta - Bolso",
        "price": 130000,
        "image": "./src/img/img-products/maleta2.jpeg",
        "category": "Maleta - Bolso",
        "quantity": 5,
        "description": "Maleta convertible en bolso creada con tela residual (Proceso Sostenible). 1 Bolsillo delantero , 2 Bolsillos laterales, Tapa posterior con bolsillos para guardar las correas de colgar, 1 correa graduable removible, 1 bolsillo interno.",
        "measures": "Alto 44 cm, Ancho 25 cm, Base 25 cm"
    },
    {
        "id": 3,
        "name": "Pechera",
        "price": 95000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Pechera",
        "quantity": 5,
        "description": "Pechera creada a través de la unión de retazos (Proceso sostenible). 2 bolsillos externos, división 2 bolsillos principales con cremallera, 1 tira para colgar graduable.",
        "measures": "Alto 19 cm, Ancho 16 cm, Base 9 cm"
    },
    {
        "id": 4,
        "name": "Portacables",
        "price": 65000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Portacables",
        "quantity": 5,
        "description": "Portacables creado con tela residual, bolsillo creado a través de la unión de retazos (Proceso Sostenible). 1 Bolsillo externo con cremallera, compartimientos varios internos.",
        "measures": "Alto 19cm, Ancho 22 cm, Base 3.5 cm"
    },
    {
        "id": 5,
        "name": "Maleta viajera",
        "price": 149900,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Maleta Viajera",
        "quantity": 5,
        "description": "Maleta viajera creada con tela residual (Proceso sostenible). 2 bolsillos laterales, 1 correa para ajustar a la cintura, cierre de cordón con tapa de broche, 1 bolsillo pequeño interno, 1 bolsillo interno para celular, espacio divisor para computador.",
        "measures": "Alto 44 cm, Ancho 29 cm, Base 19 cm"
    },
    {
        "id": 6,
        "name": "Maleta viajera",
        "price": 149900,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Maleta Viajera",
        "quantity": 5,
        "description": "Maleta viajera creada con tela residual (Proceso sostenible). 2 bolsillos laterales, 1 correa para ajustar a la cintura, cierre de cordón con tapa de broche, 1 bolsillo pequeño interno, 1 bolsillo interno para celular, espacio divisor para computador.",
        "measures": "Alto 44 cm, Ancho 29 cm, Base 19 cm"
    },
    {
        "id": 7,
        "name": "Manicartera - Organizador",
        "price": 50000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Manicartera - Organizador",
        "quantity": 5,
        "description": "Manicartera creada con tela residual (Proceso sostenible). 1 bolsillo frontal con cremallera, 1 bolsillo posterior, bolsillo principal con cremallera, 1 manija agarradera.",
        "measures": "Alto 13 cm, Ancho 22 cm, Base 7 cm"
    },
    {
        "id": 8,
        "name": "Manicartera - Organizador",
        "price": 50000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Manicartera - Organizador",
        "quantity": 5,
        "description": "Manicartera creada con tela residual (Proceso sostenible). 1 bolsillo frontal con cremallera, 1 bolsillo posterior, bolsillo principal con cremallera, 1 manija agarradera.",
        "measures": "Alto 13 cm, Ancho 22 cm, Base 7 cm"
    },
    {
        "id": 9,
        "name": "Bolso Deportivo",
        "price": 99900,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Bolso Deportivo",
        "quantity": 5,
        "description": "Bolso deportivo creado con tela residual (Proceso Sostenible). 1 bolsillo frontal, 1 bolsillo zapatero, 1 bolsillo lateral, 1 espacio interno para termo o botella, 1 bolsillo interno de maya, espacio principal con 2 tiras para colgar y 1 tira graduable.",
        "measures": "Alto 23cm, Ancho 38 cm, Base 20 cm"
    },
    {
        "id": 10,
        "name": "Bolso Deportivo",
        "price": 99900,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Bolso Deportivo",
        "quantity": 5,
        "description": "Bolso deportivo creado con tela residual (Proceso Sostenible). 1 bolsillo frontal, 1 bolsillo zapatero, 1 bolsillo lateral, 1 espacio interno para termo o botella, 1 bolsillo interno de maya, espacio principal con 2 tiras para colgar y 1 tira graduable.",
        "measures": "Alto 23cm, Ancho 38 cm, Base 20 cm"
    },
    {
        "id": 11,
        "name": "Bolso Deportivo",
        "price": 99900,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Bolso Deportivo",
        "quantity": 5,
        "description": "Bolso deportivo creado con tela residual (Proceso Sostenible). 1 bolsillo frontal, 1 bolsillo zapatero, 1 bolsillo lateral, 1 espacio interno para termo o botella, 1 bolsillo interno de maya, espacio principal con 2 tiras para colgar y 1 tira graduable.",
        "measures": "Alto 23cm, Ancho 38 cm, Base 20 cm"
    },
    {
        "id": 12,
        "name": "Portacables",
        "price": 75000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Portacables",
        "quantity": 5,
        "description": "Portacables creado a través de la unión de retazos (Proceso Sostenible). 1 Bolsillo externo con cremallera, compartimientos varios internos.",
        "measures": "Alto 19cm, Ancho 22 cm, Base 3.5 cm"
    },
    {
        "id": 13,
        "name": "Portacables",
        "price": 50000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Portacables",
        "quantity": 5,
        "description": "Portacables creado con tela residual (Proceso Sostenible). 1 Bolsillo externo con cremallera, compartimientos varios internos.",
        "measures": "Alto 19cm, Ancho 22 cm, Base 3.5 cm"
    },
    {
        "id": 14,
        "name": "Pechera",
        "price": 70000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Pechera",
        "quantity": 5,
        "description": "Pechera creada a través de la unión de retazos (Proceso sostenible). 2 bolsillos externos, división 2 bolsillos principales con cremallera, 1 tira para colgar graduable.",
        "measures": "Alto 19 cm, Ancho 16 cm, Base 9 cm"
    },
    {
        "id": 15,
        "name": "Pechera",
        "price": 80000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Pechera",
        "quantity": 5,
        "description": "Pechera creada a través de la unión de retazos (Proceso sostenible). 2 bolsillos externos, división 2 bolsillos principales con cremallera, 1 tira para colgar graduable.",
        "measures": "Alto 19 cm, Ancho 16 cm, Base 9 cm"
    },
    {
        "id": 16,
        "name": "Pechera",
        "price": 80000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Pechera",
        "quantity": 5,
        "description": "Pechera creada a través de la unión de retazos (Proceso sostenible). 2 bolsillos externos, división 2 bolsillos principales con cremallera, 1 tira para colgar graduable.",
        "measures": "Alto 19 cm, Ancho 16 cm, Base 9 cm"
    },
    {
        "id": 17,
        "name": "Pechera",
        "price": 80000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Pechera",
        "quantity": 5,
        "description": "Pechera creada a través de la unión de retazos (Proceso sostenible). 2 bolsillos externos, división 2 bolsillos principales con cremallera, 1 tira para colgar graduable.",
        "measures": "Alto 19 cm, Ancho 16 cm, Base 9 cm"
    },
    {
        "id": 18,
        "name": "Organizador viajero",
        "price": 55000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Organizador viajero",
        "quantity": 5,
        "description": "Organizador viajero creado a través de la unión de retazos (Proceso sostenible). 4 bolsillos internos con cierre de cremallera, plegable, impermeable, 2 manijas para colgar.",
        "measures": "Alto 10cm, Ancho 25 cm, Base 10 cm, Largo extendio 50 cm."
    },
    {
        "id": 19,
        "name": "Organizador viajero",
        "price": 80000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Organizador viajero",
        "quantity": 5,
        "description": "Organizador viajero creado a través de la unión de retazos (Proceso sostenible). 4 bolsillos internos con cierre de cremallera, plegable, impermeable, 2 manijas para colgar.",
        "measures": "Alto 10cm, Ancho 25 cm, Base 10 cm, Largo extendio 50 cm."
    },
    {
        "id": 20,
        "name": "Tula",
        "price": 70000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Tula",
        "quantity": 5,
        "description": "Tula creada con tela residual, bolsillos creados a través de la unión de retazos (proceso sostenible). Tula con bolsillo externo en cremallera, 1 bolsillo interno pequeño, cierre de cordón, 2 tiras para colgar.",
        "measures": "Alto 39 cm, Ancho 32 cm"
    },
    {
        "id": 21,
        "name": "Maleta",
        "price": 95000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Maleta",
        "quantity": 5,
        "description": "Maleta creada con tela residual (Proceso sostenible). 2 Bolsillos auxiliares laterales, 2 Bolsillos auxiliares frontales, 1 bolsillo interno de cremallera, 1 bolsillo interno para celular, espacio interno para computador.",
        "measures": "Alto 38 cm, Ancho 29 cm, Base 11 cm"
    },
    {
        "id": 22,
        "name": "Tula",
        "price": 70000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Tula",
        "quantity": 5,
        "description": "Tula creada con tela residual, bolsillos creados a través de la unión de retazos (proceso sostenible). Tula con bolsillo externo en cremallera, 1 bolsillo interno pequeño, cierre de cordón, 2 tiras para colgar.",
        "measures": "Alto 39 cm, Ancho 32 cm"
    },
    {
        "id": 23,
        "name": "Tula",
        "price": 60000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Tula",
        "quantity": 5,
        "description": "Tula creada con tela residual (proceso sostenible). Tula con bolsillo externo en cremallera, 1 bolsillo interno pequeño, cierre de cordón, 2 tiras para colgar.",
        "measures": "Alto 39 cm, Ancho 32 cm"
    },
    {
        "id": 24,
        "name": "Canguro - Riñonera",
        "price": 85000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Canguro - Riñonera",
        "quantity": 5,
        "description": "Canguro creado a través de la unión de retazos (proceso sostenible). 2 bolsillos externos con cremallera, 1 bolsillo posterior con cremallera, 1 bolsillo y, 1 tira graduable de colgar.",
        "measures": "Medidas: Alto 15 cm, Ancho 35 cm"
    },
    {
        "id": 25,
        "name": "Canguro - Riñonera",
        "price": 70000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Canguro - Riñonera",
        "quantity": 5,
        "description": "Canguro creado con tela residual, piezas creadas a través de la unión de retazos (proceso sostenible). 2 bolsillos externos con cremallera, 1 bolsillo posterior con cremallera, 1 bolsillo y, 1 tira graduable de colgar.",
        "measures": "Medidas: Alto 15 cm, Ancho 35 cm"
    },
    {
        "id": 26,
        "name": "Canguro - Riñonera",
        "price": 60000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Canguro - Riñonera",
        "quantity": 5,
        "description": "Canguro creado con tela residual (proceso sostenible). 2 bolsillos externos con cremallera, 1 bolsillo posterior con cremallera, 1 bolsillo principal, 1 tira graduable de colgar.",
        "measures": "Alto 15 cm, Ancho 35 cm"
    },    
    {
        "id": 27,
        "name": "Tula",
        "price": 85000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Tula",
        "quantity": 5,
        "description": "Tula creada a través de la unión de retazos (proceso sostenible). Tula con bolsillo externo en cremallera, 1 bolsillo interno pequeño, cierre de cordón, 2 tiras para colgar.",
        "measures": "Alto 39 cm, Ancho 32 cm"
    },
    {
        "id": 28,
        "name": "Carriel",
        "price": 80000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Carriel",
        "quantity": 5,
        "description": "Carriel creado con tela residual, bolsillos creados a través de la unión de retazos (Proceso sostenible). 1 Bolsillo de tapa externo, 1 bolsillo de cremallera externl, bolsillo principal en cremallera, 1 bolsillo pequeño interno, 1 tira graduable para colgar.",
        "measures": "Alto 21 cm, Ancho 15 cm, Base 7 cm"
    },
    {
        "id": 29,
        "name": "Carriel",
        "price": 90000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Carriel",
        "quantity": 5,
        "description": "Carriel creado a través de la unión de retazos (Proceso sostenible). 1 Bolsillo de tapa externo, 1 bolsillo de cremallera externl, bolsillo principal en cremallera, 1 bolsillo pequeño interno, 1 tira graduable para colgar.",
        "measures": "Alto 21 cm, Ancho 15 cm, Base 7 cm"
    },
    {
        "id": 30,
        "name": "Carriel",
        "price": 80000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Carriel",
        "quantity": 5,
        "description": "Carriel creado con tela residual, bolsillos creados a través de la unión de retazos (Proceso sostenible). 1 Bolsillo de tapa externo, 1 bolsillo de cremallera externl, bolsillo principal en cremallera, 1 bolsillo pequeño interno, 1 tira graduable para colgar.",
        "measures": "Alto 21 cm, Ancho 15 cm, Base 7 cm"
    },
    {
        "id": 31,
        "name": "Maleta",
        "price": 110000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Maleta",
        "quantity": 5,
        "description": "Maleta creada con tela residual, bolsillos creados a través de la unión de retazos (Proceso sostenible). 2 Bolsillos auxiliares laterales, 2 Bolsillos auxiliares frontales, 1 bolsillo interno de cremallera, 1 bolsillo interno para celular, espacio interno para computador.",
        "measures": "Alto 38 cm, Ancho 29 cm, Base 11 cm"
    },
    {
        "id": 32,
        "name": "Maleta",
        "price": 130000,
        "image": "src/img/img-products/pechera2.0.jpg",
        "category": "Maleta",
        "quantity": 5,
        "description": "Maleta creada a través de la unión de retazos (Proceso sostenible). 2 Bolsillos auxiliares laterales, 2 Bolsillos auxiliares frontales, 1 bolsillo interno de cremallera, 1 bolsillo interno para celular, espacio interno para computador.",
        "measures": " Alto 38 cm, Ancho 29 cm, Base 11 cm"
    }
]

export default products
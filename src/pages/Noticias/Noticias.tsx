import { useEffect, useState } from "react";
import {
  Box,
  SimpleGrid,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { noticias } from "../../services/noticias";
import { NoticiaType } from "../../models/NoticiaType";
import { NoticiaItem } from "./components";

const Noticias: React.FC = () => {
  const [noticiasCol, setNoticasCol] = useState<NoticiaType[] | undefined>(
    undefined
  );

  useEffect(() => {
    setNoticasCol(noticias);
  }, []);
  // const noticias = [
  //   {
  //     id: 1,
  //     date: new Date(),
  //     title:
  //       "La Federación Sanluiseña de Deportes Acuáticos y Le Parc Club, los invitan al 𝐓𝐨𝐫𝐧𝐞𝐨‎ 𝐋𝐞‎ 𝐏𝐚𝐫𝐜‎ 𝐂𝐥𝐮𝐛‎ 𝟐𝟎𝟐𝟒 el próximo Sábado 5 de octubre",
  //     content:
  //       "<img src='src/assets/imagen-prueba.jpg' /><p>La Federación Sanluiseña de Deportes Acuáticos y Le Parc Club, los invitan al 𝐓𝐨𝐫𝐧𝐞𝐨‎ 𝐋𝐞‎ 𝐏𝐚𝐫𝐜‎ 𝐂𝐥𝐮𝐛‎ 𝟐𝟎𝟐𝟒 el próximo Sábado 5de octubre 🏆</p><br /><p>👉El mismo se llevará a cabo por la mañana en las instalaciones de @leparcclub en Villa Mercedes</p><br /><span>👉Invita a las categorías:</span><br /><ul><li>🔹Pre infantil 1 y 2.</li><li>🔹Infantil 1 y 2.</li><li>🔹Menores 1 y 2.</li><li>🔹Cadetes 1 y 2.</li><li>🔹Juveniles 1 y 2.</li></ul><p>🏁 El programa de pruebas contempla las distancias de 25m para los cuatro estilos (mariposa, espalda, pecho y libre) y también 50m en dichos estilos!Además habrá relevo 4x25m libre y 4x50m libre mixto 🙌</p><p>‼️No te pierdas esta oportunidad, veni a disfrutar con tu equipo!<br />✍️ 𝐈𝐧𝐬𝐜𝐫𝐢𝐩𝐜𝐢𝐨𝐧𝐞𝐬‎ asdasanluis@yahoo.com.ar y vía WhatsApp: <br/>📱𝐈𝐧𝐬𝐜𝐫𝐢𝐩𝐜𝐢𝐨𝐧𝐞𝐬 2664-4218002</p><br /><p>Los esperamos 🫂</p>",
  //     author: "Fany Zalazar",
  //     categories: ["Invitación", "Torneo", "Inscripciones"],
  //     url: "",
  //   },
  // ];
  // const noticias = [
  //   {
  //     id: 1,
  //     date: new Date("2024-09-25"),
  //     title: "Destacada actuación de nuestros nadadores en el Cenard",
  //     content:
  //       "<p>Entre el 11 y 14 pasado se desarrolló el Campeonato de la República de Natación categoría Juveniles y Juniors en el CENARD con una nutrida y destacada participación de nuestros nadadores.</p><img src='https://picsum.photos/400/400' alt='Descripción'/><p>En el primer día de competencia, Joaquín Renzi (Loas) se consagró campeón nacional en 200m libre juvenil 2. En tanto Barbará Olguín (SAC) fue 3ra en 100m espalda juniors, Franco Gamarra (EFC) fue subcampeón en 100m espalda juniors.</p><p>En la segunda jornada la gran figura del día resultó Joaquín Renzi que se quedó con el oro en 400m libres consiguiendo el record nacional de categoría bajando por 2 segundos la marca de Gonzalo Garay Manginelli de River quién era poseedor del record.</p><p>Además Salvatore Alesio (EFC) fue campeón en 50m mariposa categoría juniors; Bárbara Olguín (SAC) 3ra en 200m espalda juniors; Tomás  Zanon (EFC) 3ro en 200m espalda juniors; Máximo Concetti (LOAS) 3ro en 400m libres juveniles 1; Matías Badaui (GER) 3er puesto en 200m pecho categoría Juvenil 1.</p><p>En la tercera jornada los podios de nuestros nadadores fueron: 2do puesto de Alesio Salvatore (EFC) en 50m libres categoría juniors; 1er puesto de Joaquín Renzi (LOAS) en 1500m libres categoría juveniles 2.</p><p>Por último, la cuarta jornada dejó otros tres podios más. Joaquín Renzi (LOAS) fue segundo en 100m libres juveniles 2; misma posición que logró Bárbara Olguín (SAC) en los 50m espalda categoría juniors y Franco Gamarra (EFC) se alzó con el oro en los 50m espalda categoría juniors.</p><p>Además de los podios, vale la pena destacar y resaltar la labor de muchos otros nadadores que alcanzaron una o más finales, colocándose entre los 8 mejores del país en esas pruebas. Ellos fueron: Sol L’ hereaux (CNSA); Franco Ledesma (CNSA); Milagros Calderón (EFC); Lía Pereyra (EFC); Candela Muñoz (CNSA); Valentino Volante (EFC); Ornella Copes (CRR); Martina Colaneri (CRR); Lucas Palminteri (EFC); Valentín Domínguez (CNSA); Valentino Racca (EFC); Milagros Moretti (LOAS); Gastón Córdoba (EFC); Facundo Luqués (GER); Julieta Nucifora (CNSA) y Joaquín De Martini (CNSA).</p><img src='https://picsum.photos/400/400' alt='Descripción'/>",
  //     author: "Juan Pérez",
  //     categories: ["Competencias", "Jóvenes"],
  //     url: "url_de_la_noticia.html",
  //   },
  //   {
  //     id: 2,
  //     date: new Date("2024-09-25"),
  //     title: "Destacada actuación de nuestros nadadores en el Cenard",
  //     content:
  //       "<p>Entre el 11 y 14 pasado se desarrolló el Campeonato de la República de Natación categoría Juveniles y Juniors en el CENARD con una nutrida y destacada participación de nuestros nadadores.</p><img src='https://picsum.photos/400/400' alt='Descripción'/><p>En el primer día de competencia, Joaquín Renzi (Loas) se consagró campeón nacional en 200m libre juvenil 2. En tanto Barbará Olguín (SAC) fue 3ra en 100m espalda juniors, Franco Gamarra (EFC) fue subcampeón en 100m espalda juniors.</p><p>En la segunda jornada la gran figura del día resultó Joaquín Renzi que se quedó con el oro en 400m libres consiguiendo el record nacional de categoría bajando por 2 segundos la marca de Gonzalo Garay Manginelli de River quién era poseedor del record.</p><p>Además Salvatore Alesio (EFC) fue campeón en 50m mariposa categoría juniors; Bárbara Olguín (SAC) 3ra en 200m espalda juniors; Tomás  Zanon (EFC) 3ro en 200m espalda juniors; Máximo Concetti (LOAS) 3ro en 400m libres juveniles 1; Matías Badaui (GER) 3er puesto en 200m pecho categoría Juvenil 1.</p><p>En la tercera jornada los podios de nuestros nadadores fueron: 2do puesto de Alesio Salvatore (EFC) en 50m libres categoría juniors; 1er puesto de Joaquín Renzi (LOAS) en 1500m libres categoría juveniles 2.</p><p>Por último, la cuarta jornada dejó otros tres podios más. Joaquín Renzi (LOAS) fue segundo en 100m libres juveniles 2; misma posición que logró Bárbara Olguín (SAC) en los 50m espalda categoría juniors y Franco Gamarra (EFC) se alzó con el oro en los 50m espalda categoría juniors.</p><p>Además de los podios, vale la pena destacar y resaltar la labor de muchos otros nadadores que alcanzaron una o más finales, colocándose entre los 8 mejores del país en esas pruebas. Ellos fueron: Sol L’ hereaux (CNSA); Franco Ledesma (CNSA); Milagros Calderón (EFC); Lía Pereyra (EFC); Candela Muñoz (CNSA); Valentino Volante (EFC); Ornella Copes (CRR); Martina Colaneri (CRR); Lucas Palminteri (EFC); Valentín Domínguez (CNSA); Valentino Racca (EFC); Milagros Moretti (LOAS); Gastón Córdoba (EFC); Facundo Luqués (GER); Julieta Nucifora (CNSA) y Joaquín De Martini (CNSA).</p><img src='https://picsum.photos/400/400' alt='Descripción'/>",
  //     author: "Juan Pérez",
  //     categories: ["Competencias", "Jóvenes"],
  //     url: "url_de_la_noticia.html",
  //   },
  //   {
  //     id: 3,
  //     date: new Date("2024-09-25"),
  //     title: "Destacada actuación de nuestros nadadores en el Cenard",
  //     content:
  //       "<p>Entre el 11 y 14 pasado se desarrolló el Campeonato de la República de Natación categoría Juveniles y Juniors en el CENARD con una nutrida y destacada participación de nuestros nadadores.</p><img src='https://picsum.photos/400/400' alt='Descripción'/><p>En el primer día de competencia, Joaquín Renzi (Loas) se consagró campeón nacional en 200m libre juvenil 2. En tanto Barbará Olguín (SAC) fue 3ra en 100m espalda juniors, Franco Gamarra (EFC) fue subcampeón en 100m espalda juniors.</p><p>En la segunda jornada la gran figura del día resultó Joaquín Renzi que se quedó con el oro en 400m libres consiguiendo el record nacional de categoría bajando por 2 segundos la marca de Gonzalo Garay Manginelli de River quién era poseedor del record.</p><p>Además Salvatore Alesio (EFC) fue campeón en 50m mariposa categoría juniors; Bárbara Olguín (SAC) 3ra en 200m espalda juniors; Tomás  Zanon (EFC) 3ro en 200m espalda juniors; Máximo Concetti (LOAS) 3ro en 400m libres juveniles 1; Matías Badaui (GER) 3er puesto en 200m pecho categoría Juvenil 1.</p><p>En la tercera jornada los podios de nuestros nadadores fueron: 2do puesto de Alesio Salvatore (EFC) en 50m libres categoría juniors; 1er puesto de Joaquín Renzi (LOAS) en 1500m libres categoría juveniles 2.</p><p>Por último, la cuarta jornada dejó otros tres podios más. Joaquín Renzi (LOAS) fue segundo en 100m libres juveniles 2; misma posición que logró Bárbara Olguín (SAC) en los 50m espalda categoría juniors y Franco Gamarra (EFC) se alzó con el oro en los 50m espalda categoría juniors.</p><p>Además de los podios, vale la pena destacar y resaltar la labor de muchos otros nadadores que alcanzaron una o más finales, colocándose entre los 8 mejores del país en esas pruebas. Ellos fueron: Sol L’ hereaux (CNSA); Franco Ledesma (CNSA); Milagros Calderón (EFC); Lía Pereyra (EFC); Candela Muñoz (CNSA); Valentino Volante (EFC); Ornella Copes (CRR); Martina Colaneri (CRR); Lucas Palminteri (EFC); Valentín Domínguez (CNSA); Valentino Racca (EFC); Milagros Moretti (LOAS); Gastón Córdoba (EFC); Facundo Luqués (GER); Julieta Nucifora (CNSA) y Joaquín De Martini (CNSA).</p><img src='https://picsum.photos/400/400' alt='Descripción'/>",
  //     author: "Juan Pérez",
  //     categories: ["Competencias", "Jóvenes"],
  //     url: "url_de_la_noticia.html",
  //   },
  //   {
  //     id: 4,
  //     date: new Date("2024-09-25"),
  //     title: "Destacada actuación de nuestros nadadores en el Cenard",
  //     content:
  //       "<p>Entre el 11 y 14 pasado se desarrolló el Campeonato de la República de Natación categoría Juveniles y Juniors en el CENARD con una nutrida y destacada participación de nuestros nadadores.</p><img src='https://picsum.photos/400/400' alt='Descripción'/><p>En el primer día de competencia, Joaquín Renzi (Loas) se consagró campeón nacional en 200m libre juvenil 2. En tanto Barbará Olguín (SAC) fue 3ra en 100m espalda juniors, Franco Gamarra (EFC) fue subcampeón en 100m espalda juniors.</p><p>En la segunda jornada la gran figura del día resultó Joaquín Renzi que se quedó con el oro en 400m libres consiguiendo el record nacional de categoría bajando por 2 segundos la marca de Gonzalo Garay Manginelli de River quién era poseedor del record.</p><p>Además Salvatore Alesio (EFC) fue campeón en 50m mariposa categoría juniors; Bárbara Olguín (SAC) 3ra en 200m espalda juniors; Tomás  Zanon (EFC) 3ro en 200m espalda juniors; Máximo Concetti (LOAS) 3ro en 400m libres juveniles 1; Matías Badaui (GER) 3er puesto en 200m pecho categoría Juvenil 1.</p><p>En la tercera jornada los podios de nuestros nadadores fueron: 2do puesto de Alesio Salvatore (EFC) en 50m libres categoría juniors; 1er puesto de Joaquín Renzi (LOAS) en 1500m libres categoría juveniles 2.</p><p>Por último, la cuarta jornada dejó otros tres podios más. Joaquín Renzi (LOAS) fue segundo en 100m libres juveniles 2; misma posición que logró Bárbara Olguín (SAC) en los 50m espalda categoría juniors y Franco Gamarra (EFC) se alzó con el oro en los 50m espalda categoría juniors.</p><p>Además de los podios, vale la pena destacar y resaltar la labor de muchos otros nadadores que alcanzaron una o más finales, colocándose entre los 8 mejores del país en esas pruebas. Ellos fueron: Sol L’ hereaux (CNSA); Franco Ledesma (CNSA); Milagros Calderón (EFC); Lía Pereyra (EFC); Candela Muñoz (CNSA); Valentino Volante (EFC); Ornella Copes (CRR); Martina Colaneri (CRR); Lucas Palminteri (EFC); Valentín Domínguez (CNSA); Valentino Racca (EFC); Milagros Moretti (LOAS); Gastón Córdoba (EFC); Facundo Luqués (GER); Julieta Nucifora (CNSA) y Joaquín De Martini (CNSA).</p><img src='https://picsum.photos/400/400' alt='Descripción'/>",
  //     author: "Juan Pérez",
  //     categories: ["Competencias", "Jóvenes"],
  //     url: "url_de_la_noticia.html",
  //   },
  //   {
  //     id: 5,
  //     date: new Date("2024-09-25"),
  //     title: "Destacada actuación de nuestros nadadores en el Cenard",
  //     content:
  //       "<p>Entre el 11 y 14 pasado se desarrolló el Campeonato de la República de Natación categoría Juveniles y Juniors en el CENARD con una nutrida y destacada participación de nuestros nadadores.</p><img src='https://picsum.photos/400/400' alt='Descripción'/><p>En el primer día de competencia, Joaquín Renzi (Loas) se consagró campeón nacional en 200m libre juvenil 2. En tanto Barbará Olguín (SAC) fue 3ra en 100m espalda juniors, Franco Gamarra (EFC) fue subcampeón en 100m espalda juniors.</p><p>En la segunda jornada la gran figura del día resultó Joaquín Renzi que se quedó con el oro en 400m libres consiguiendo el record nacional de categoría bajando por 2 segundos la marca de Gonzalo Garay Manginelli de River quién era poseedor del record.</p><p>Además Salvatore Alesio (EFC) fue campeón en 50m mariposa categoría juniors; Bárbara Olguín (SAC) 3ra en 200m espalda juniors; Tomás  Zanon (EFC) 3ro en 200m espalda juniors; Máximo Concetti (LOAS) 3ro en 400m libres juveniles 1; Matías Badaui (GER) 3er puesto en 200m pecho categoría Juvenil 1.</p><p>En la tercera jornada los podios de nuestros nadadores fueron: 2do puesto de Alesio Salvatore (EFC) en 50m libres categoría juniors; 1er puesto de Joaquín Renzi (LOAS) en 1500m libres categoría juveniles 2.</p><p>Por último, la cuarta jornada dejó otros tres podios más. Joaquín Renzi (LOAS) fue segundo en 100m libres juveniles 2; misma posición que logró Bárbara Olguín (SAC) en los 50m espalda categoría juniors y Franco Gamarra (EFC) se alzó con el oro en los 50m espalda categoría juniors.</p><p>Además de los podios, vale la pena destacar y resaltar la labor de muchos otros nadadores que alcanzaron una o más finales, colocándose entre los 8 mejores del país en esas pruebas. Ellos fueron: Sol L’ hereaux (CNSA); Franco Ledesma (CNSA); Milagros Calderón (EFC); Lía Pereyra (EFC); Candela Muñoz (CNSA); Valentino Volante (EFC); Ornella Copes (CRR); Martina Colaneri (CRR); Lucas Palminteri (EFC); Valentín Domínguez (CNSA); Valentino Racca (EFC); Milagros Moretti (LOAS); Gastón Córdoba (EFC); Facundo Luqués (GER); Julieta Nucifora (CNSA) y Joaquín De Martini (CNSA).</p><img src='https://picsum.photos/400/400' alt='Descripción'/>",
  //     author: "Juan Pérez",
  //     categories: ["Competencias", "Jóvenes"],
  //     url: "url_de_la_noticia.html",
  //   },
  //   {
  //     id: 6,
  //     date: new Date("2024-09-25"),
  //     title: "Destacada actuación de nuestros nadadores en el Cenard",
  //     content:
  //       "<p>Entre el 11 y 14 pasado se desarrolló el Campeonato de la República de Natación categoría Juveniles y Juniors en el CENARD con una nutrida y destacada participación de nuestros nadadores.</p><img src='https://picsum.photos/400/400' alt='Descripción'/><p>En el primer día de competencia, Joaquín Renzi (Loas) se consagró campeón nacional en 200m libre juvenil 2. En tanto Barbará Olguín (SAC) fue 3ra en 100m espalda juniors, Franco Gamarra (EFC) fue subcampeón en 100m espalda juniors.</p><p>En la segunda jornada la gran figura del día resultó Joaquín Renzi que se quedó con el oro en 400m libres consiguiendo el record nacional de categoría bajando por 2 segundos la marca de Gonzalo Garay Manginelli de River quién era poseedor del record.</p><p>Además Salvatore Alesio (EFC) fue campeón en 50m mariposa categoría juniors; Bárbara Olguín (SAC) 3ra en 200m espalda juniors; Tomás  Zanon (EFC) 3ro en 200m espalda juniors; Máximo Concetti (LOAS) 3ro en 400m libres juveniles 1; Matías Badaui (GER) 3er puesto en 200m pecho categoría Juvenil 1.</p><p>En la tercera jornada los podios de nuestros nadadores fueron: 2do puesto de Alesio Salvatore (EFC) en 50m libres categoría juniors; 1er puesto de Joaquín Renzi (LOAS) en 1500m libres categoría juveniles 2.</p><p>Por último, la cuarta jornada dejó otros tres podios más. Joaquín Renzi (LOAS) fue segundo en 100m libres juveniles 2; misma posición que logró Bárbara Olguín (SAC) en los 50m espalda categoría juniors y Franco Gamarra (EFC) se alzó con el oro en los 50m espalda categoría juniors.</p><p>Además de los podios, vale la pena destacar y resaltar la labor de muchos otros nadadores que alcanzaron una o más finales, colocándose entre los 8 mejores del país en esas pruebas. Ellos fueron: Sol L’ hereaux (CNSA); Franco Ledesma (CNSA); Milagros Calderón (EFC); Lía Pereyra (EFC); Candela Muñoz (CNSA); Valentino Volante (EFC); Ornella Copes (CRR); Martina Colaneri (CRR); Lucas Palminteri (EFC); Valentín Domínguez (CNSA); Valentino Racca (EFC); Milagros Moretti (LOAS); Gastón Córdoba (EFC); Facundo Luqués (GER); Julieta Nucifora (CNSA) y Joaquín De Martini (CNSA).</p><img src='https://picsum.photos/400/400' alt='Descripción'/>",
  //     author: "Juan Pérez",
  //     categories: ["Competencias", "Jóvenes"],
  //     url: "url_de_la_noticia.html",
  //   },
  //   {
  //     id: 7,
  //     date: new Date("2024-09-25"),
  //     title: "Destacada actuación de nuestros nadadores en el Cenard",
  //     content:
  //       "<p>Entre el 11 y 14 pasado se desarrolló el Campeonato de la República de Natación categoría Juveniles y Juniors en el CENARD con una nutrida y destacada participación de nuestros nadadores.</p><img src='https://picsum.photos/400/400' alt='Descripción'/><p>En el primer día de competencia, Joaquín Renzi (Loas) se consagró campeón nacional en 200m libre juvenil 2. En tanto Barbará Olguín (SAC) fue 3ra en 100m espalda juniors, Franco Gamarra (EFC) fue subcampeón en 100m espalda juniors.</p><p>En la segunda jornada la gran figura del día resultó Joaquín Renzi que se quedó con el oro en 400m libres consiguiendo el record nacional de categoría bajando por 2 segundos la marca de Gonzalo Garay Manginelli de River quién era poseedor del record.</p><p>Además Salvatore Alesio (EFC) fue campeón en 50m mariposa categoría juniors; Bárbara Olguín (SAC) 3ra en 200m espalda juniors; Tomás  Zanon (EFC) 3ro en 200m espalda juniors; Máximo Concetti (LOAS) 3ro en 400m libres juveniles 1; Matías Badaui (GER) 3er puesto en 200m pecho categoría Juvenil 1.</p><p>En la tercera jornada los podios de nuestros nadadores fueron: 2do puesto de Alesio Salvatore (EFC) en 50m libres categoría juniors; 1er puesto de Joaquín Renzi (LOAS) en 1500m libres categoría juveniles 2.</p><p>Por último, la cuarta jornada dejó otros tres podios más. Joaquín Renzi (LOAS) fue segundo en 100m libres juveniles 2; misma posición que logró Bárbara Olguín (SAC) en los 50m espalda categoría juniors y Franco Gamarra (EFC) se alzó con el oro en los 50m espalda categoría juniors.</p><p>Además de los podios, vale la pena destacar y resaltar la labor de muchos otros nadadores que alcanzaron una o más finales, colocándose entre los 8 mejores del país en esas pruebas. Ellos fueron: Sol L’ hereaux (CNSA); Franco Ledesma (CNSA); Milagros Calderón (EFC); Lía Pereyra (EFC); Candela Muñoz (CNSA); Valentino Volante (EFC); Ornella Copes (CRR); Martina Colaneri (CRR); Lucas Palminteri (EFC); Valentín Domínguez (CNSA); Valentino Racca (EFC); Milagros Moretti (LOAS); Gastón Córdoba (EFC); Facundo Luqués (GER); Julieta Nucifora (CNSA) y Joaquín De Martini (CNSA).</p><img src='https://picsum.photos/400/400' alt='Descripción'/>",
  //     author: "Juan Pérez",
  //     categories: ["Competencias", "Jóvenes"],
  //     url: "url_de_la_noticia.html",
  //   },
  //   {
  //     id: 8,
  //     date: new Date("2024-09-25"),
  //     title: "Destacada actuación de nuestros nadadores en el Cenard",
  //     content:
  //       "<p>Entre el 11 y 14 pasado se desarrolló el Campeonato de la República de Natación categoría Juveniles y Juniors en el CENARD con una nutrida y destacada participación de nuestros nadadores.</p><img src='https://picsum.photos/400/400' alt='Descripción'/><p>En el primer día de competencia, Joaquín Renzi (Loas) se consagró campeón nacional en 200m libre juvenil 2. En tanto Barbará Olguín (SAC) fue 3ra en 100m espalda juniors, Franco Gamarra (EFC) fue subcampeón en 100m espalda juniors.</p><p>En la segunda jornada la gran figura del día resultó Joaquín Renzi que se quedó con el oro en 400m libres consiguiendo el record nacional de categoría bajando por 2 segundos la marca de Gonzalo Garay Manginelli de River quién era poseedor del record.</p><p>Además Salvatore Alesio (EFC) fue campeón en 50m mariposa categoría juniors; Bárbara Olguín (SAC) 3ra en 200m espalda juniors; Tomás  Zanon (EFC) 3ro en 200m espalda juniors; Máximo Concetti (LOAS) 3ro en 400m libres juveniles 1; Matías Badaui (GER) 3er puesto en 200m pecho categoría Juvenil 1.</p><p>En la tercera jornada los podios de nuestros nadadores fueron: 2do puesto de Alesio Salvatore (EFC) en 50m libres categoría juniors; 1er puesto de Joaquín Renzi (LOAS) en 1500m libres categoría juveniles 2.</p><p>Por último, la cuarta jornada dejó otros tres podios más. Joaquín Renzi (LOAS) fue segundo en 100m libres juveniles 2; misma posición que logró Bárbara Olguín (SAC) en los 50m espalda categoría juniors y Franco Gamarra (EFC) se alzó con el oro en los 50m espalda categoría juniors.</p><p>Además de los podios, vale la pena destacar y resaltar la labor de muchos otros nadadores que alcanzaron una o más finales, colocándose entre los 8 mejores del país en esas pruebas. Ellos fueron: Sol L’ hereaux (CNSA); Franco Ledesma (CNSA); Milagros Calderón (EFC); Lía Pereyra (EFC); Candela Muñoz (CNSA); Valentino Volante (EFC); Ornella Copes (CRR); Martina Colaneri (CRR); Lucas Palminteri (EFC); Valentín Domínguez (CNSA); Valentino Racca (EFC); Milagros Moretti (LOAS); Gastón Córdoba (EFC); Facundo Luqués (GER); Julieta Nucifora (CNSA) y Joaquín De Martini (CNSA).</p><img src='https://picsum.photos/400/400' alt='Descripción'/>",
  //     author: "Juan Pérez",
  //     categories: ["Competencias", "Jóvenes"],
  //     url: "url_de_la_noticia.html",
  //   },
  //   {
  //     id: 9,
  //     date: new Date("2024-09-25"),
  //     title: "Destacada actuación de nuestros nadadores en el Cenard",
  //     content:
  //       "<p>Entre el 11 y 14 pasado se desarrolló el Campeonato de la República de Natación categoría Juveniles y Juniors en el CENARD con una nutrida y destacada participación de nuestros nadadores.</p><img src='https://picsum.photos/400/400' alt='Descripción'/><p>En el primer día de competencia, Joaquín Renzi (Loas) se consagró campeón nacional en 200m libre juvenil 2. En tanto Barbará Olguín (SAC) fue 3ra en 100m espalda juniors, Franco Gamarra (EFC) fue subcampeón en 100m espalda juniors.</p><p>En la segunda jornada la gran figura del día resultó Joaquín Renzi que se quedó con el oro en 400m libres consiguiendo el record nacional de categoría bajando por 2 segundos la marca de Gonzalo Garay Manginelli de River quién era poseedor del record.</p><p>Además Salvatore Alesio (EFC) fue campeón en 50m mariposa categoría juniors; Bárbara Olguín (SAC) 3ra en 200m espalda juniors; Tomás  Zanon (EFC) 3ro en 200m espalda juniors; Máximo Concetti (LOAS) 3ro en 400m libres juveniles 1; Matías Badaui (GER) 3er puesto en 200m pecho categoría Juvenil 1.</p><p>En la tercera jornada los podios de nuestros nadadores fueron: 2do puesto de Alesio Salvatore (EFC) en 50m libres categoría juniors; 1er puesto de Joaquín Renzi (LOAS) en 1500m libres categoría juveniles 2.</p><p>Por último, la cuarta jornada dejó otros tres podios más. Joaquín Renzi (LOAS) fue segundo en 100m libres juveniles 2; misma posición que logró Bárbara Olguín (SAC) en los 50m espalda categoría juniors y Franco Gamarra (EFC) se alzó con el oro en los 50m espalda categoría juniors.</p><p>Además de los podios, vale la pena destacar y resaltar la labor de muchos otros nadadores que alcanzaron una o más finales, colocándose entre los 8 mejores del país en esas pruebas. Ellos fueron: Sol L’ hereaux (CNSA); Franco Ledesma (CNSA); Milagros Calderón (EFC); Lía Pereyra (EFC); Candela Muñoz (CNSA); Valentino Volante (EFC); Ornella Copes (CRR); Martina Colaneri (CRR); Lucas Palminteri (EFC); Valentín Domínguez (CNSA); Valentino Racca (EFC); Milagros Moretti (LOAS); Gastón Córdoba (EFC); Facundo Luqués (GER); Julieta Nucifora (CNSA) y Joaquín De Martini (CNSA).</p><img src='https://picsum.photos/400/400' alt='Descripción'/>",
  //     author: "Juan Pérez",
  //     categories: ["Competencias", "Jóvenes"],
  //     url: "url_de_la_noticia.html",
  //   },
  //   {
  //     id: 10,
  //     date: new Date("2024-09-25"),
  //     title: "Destacada actuación de nuestros nadadores en el Cenard",
  //     content:
  //       "<p>Entre el 11 y 14 pasado se desarrolló el Campeonato de la República de Natación categoría Juveniles y Juniors en el CENARD con una nutrida y destacada participación de nuestros nadadores.</p><img src='https://picsum.photos/400/400' alt='Descripción'/><p>En el primer día de competencia, Joaquín Renzi (Loas) se consagró campeón nacional en 200m libre juvenil 2. En tanto Barbará Olguín (SAC) fue 3ra en 100m espalda juniors, Franco Gamarra (EFC) fue subcampeón en 100m espalda juniors.</p><p>En la segunda jornada la gran figura del día resultó Joaquín Renzi que se quedó con el oro en 400m libres consiguiendo el record nacional de categoría bajando por 2 segundos la marca de Gonzalo Garay Manginelli de River quién era poseedor del record.</p><p>Además Salvatore Alesio (EFC) fue campeón en 50m mariposa categoría juniors; Bárbara Olguín (SAC) 3ra en 200m espalda juniors; Tomás  Zanon (EFC) 3ro en 200m espalda juniors; Máximo Concetti (LOAS) 3ro en 400m libres juveniles 1; Matías Badaui (GER) 3er puesto en 200m pecho categoría Juvenil 1.</p><p>En la tercera jornada los podios de nuestros nadadores fueron: 2do puesto de Alesio Salvatore (EFC) en 50m libres categoría juniors; 1er puesto de Joaquín Renzi (LOAS) en 1500m libres categoría juveniles 2.</p><p>Por último, la cuarta jornada dejó otros tres podios más. Joaquín Renzi (LOAS) fue segundo en 100m libres juveniles 2; misma posición que logró Bárbara Olguín (SAC) en los 50m espalda categoría juniors y Franco Gamarra (EFC) se alzó con el oro en los 50m espalda categoría juniors.</p><p>Además de los podios, vale la pena destacar y resaltar la labor de muchos otros nadadores que alcanzaron una o más finales, colocándose entre los 8 mejores del país en esas pruebas. Ellos fueron: Sol L’ hereaux (CNSA); Franco Ledesma (CNSA); Milagros Calderón (EFC); Lía Pereyra (EFC); Candela Muñoz (CNSA); Valentino Volante (EFC); Ornella Copes (CRR); Martina Colaneri (CRR); Lucas Palminteri (EFC); Valentín Domínguez (CNSA); Valentino Racca (EFC); Milagros Moretti (LOAS); Gastón Córdoba (EFC); Facundo Luqués (GER); Julieta Nucifora (CNSA) y Joaquín De Martini (CNSA).</p><img src='https://picsum.photos/400/400' alt='Descripción'/>",
  //     author: "Juan Pérez",
  //     categories: ["Competencias", "Jóvenes"],
  //     url: "url_de_la_noticia.html",
  //   },
  //   {
  //     id: 11,
  //     date: new Date("2024-09-25"),
  //     title: "Destacada actuación de nuestros nadadores en el Cenard",
  //     content:
  //       "<p>Entre el 11 y 14 pasado se desarrolló el Campeonato de la República de Natación categoría Juveniles y Juniors en el CENARD con una nutrida y destacada participación de nuestros nadadores.</p><img src='https://picsum.photos/400/400' alt='Descripción'/><p>En el primer día de competencia, Joaquín Renzi (Loas) se consagró campeón nacional en 200m libre juvenil 2. En tanto Barbará Olguín (SAC) fue 3ra en 100m espalda juniors, Franco Gamarra (EFC) fue subcampeón en 100m espalda juniors.</p><p>En la segunda jornada la gran figura del día resultó Joaquín Renzi que se quedó con el oro en 400m libres consiguiendo el record nacional de categoría bajando por 2 segundos la marca de Gonzalo Garay Manginelli de River quién era poseedor del record.</p><p>Además Salvatore Alesio (EFC) fue campeón en 50m mariposa categoría juniors; Bárbara Olguín (SAC) 3ra en 200m espalda juniors; Tomás  Zanon (EFC) 3ro en 200m espalda juniors; Máximo Concetti (LOAS) 3ro en 400m libres juveniles 1; Matías Badaui (GER) 3er puesto en 200m pecho categoría Juvenil 1.</p><p>En la tercera jornada los podios de nuestros nadadores fueron: 2do puesto de Alesio Salvatore (EFC) en 50m libres categoría juniors; 1er puesto de Joaquín Renzi (LOAS) en 1500m libres categoría juveniles 2.</p><p>Por último, la cuarta jornada dejó otros tres podios más. Joaquín Renzi (LOAS) fue segundo en 100m libres juveniles 2; misma posición que logró Bárbara Olguín (SAC) en los 50m espalda categoría juniors y Franco Gamarra (EFC) se alzó con el oro en los 50m espalda categoría juniors.</p><p>Además de los podios, vale la pena destacar y resaltar la labor de muchos otros nadadores que alcanzaron una o más finales, colocándose entre los 8 mejores del país en esas pruebas. Ellos fueron: Sol L’ hereaux (CNSA); Franco Ledesma (CNSA); Milagros Calderón (EFC); Lía Pereyra (EFC); Candela Muñoz (CNSA); Valentino Volante (EFC); Ornella Copes (CRR); Martina Colaneri (CRR); Lucas Palminteri (EFC); Valentín Domínguez (CNSA); Valentino Racca (EFC); Milagros Moretti (LOAS); Gastón Córdoba (EFC); Facundo Luqués (GER); Julieta Nucifora (CNSA) y Joaquín De Martini (CNSA).</p><img src='https://picsum.photos/400/400' alt='Descripción'/>",
  //     author: "Juan Pérez",
  //     categories: ["Competencias", "Jóvenes"],
  //     url: "url_de_la_noticia.html",
  //   },
  //   {
  //     id: 12,
  //     date: new Date("2024-09-25"),
  //     title: "Destacada actuación de nuestros nadadores en el Cenard",
  //     content:
  //       "<p>Entre el 11 y 14 pasado se desarrolló el Campeonato de la República de Natación categoría Juveniles y Juniors en el CENARD con una nutrida y destacada participación de nuestros nadadores.</p><img src='https://picsum.photos/400/400' alt='Descripción'/><p>En el primer día de competencia, Joaquín Renzi (Loas) se consagró campeón nacional en 200m libre juvenil 2. En tanto Barbará Olguín (SAC) fue 3ra en 100m espalda juniors, Franco Gamarra (EFC) fue subcampeón en 100m espalda juniors.</p><p>En la segunda jornada la gran figura del día resultó Joaquín Renzi que se quedó con el oro en 400m libres consiguiendo el record nacional de categoría bajando por 2 segundos la marca de Gonzalo Garay Manginelli de River quién era poseedor del record.</p><p>Además Salvatore Alesio (EFC) fue campeón en 50m mariposa categoría juniors; Bárbara Olguín (SAC) 3ra en 200m espalda juniors; Tomás  Zanon (EFC) 3ro en 200m espalda juniors; Máximo Concetti (LOAS) 3ro en 400m libres juveniles 1; Matías Badaui (GER) 3er puesto en 200m pecho categoría Juvenil 1.</p><p>En la tercera jornada los podios de nuestros nadadores fueron: 2do puesto de Alesio Salvatore (EFC) en 50m libres categoría juniors; 1er puesto de Joaquín Renzi (LOAS) en 1500m libres categoría juveniles 2.</p><p>Por último, la cuarta jornada dejó otros tres podios más. Joaquín Renzi (LOAS) fue segundo en 100m libres juveniles 2; misma posición que logró Bárbara Olguín (SAC) en los 50m espalda categoría juniors y Franco Gamarra (EFC) se alzó con el oro en los 50m espalda categoría juniors.</p><p>Además de los podios, vale la pena destacar y resaltar la labor de muchos otros nadadores que alcanzaron una o más finales, colocándose entre los 8 mejores del país en esas pruebas. Ellos fueron: Sol L’ hereaux (CNSA); Franco Ledesma (CNSA); Milagros Calderón (EFC); Lía Pereyra (EFC); Candela Muñoz (CNSA); Valentino Volante (EFC); Ornella Copes (CRR); Martina Colaneri (CRR); Lucas Palminteri (EFC); Valentín Domínguez (CNSA); Valentino Racca (EFC); Milagros Moretti (LOAS); Gastón Córdoba (EFC); Facundo Luqués (GER); Julieta Nucifora (CNSA) y Joaquín De Martini (CNSA).</p><img src='https://picsum.photos/400/400' alt='Descripción'/>",
  //     author: "Juan Pérez",
  //     categories: ["Competencias", "Jóvenes"],
  //     url: "url_de_la_noticia.html",
  //   },
  // ];

  if (noticiasCol) {
    return (
      <Box w="100%" p={4}>
        <Flex my={8} px={4} alignItems="center" justifyContent="space-between">
          <Heading as="h2" size="md">
            Noticias
          </Heading>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="/">Noticias</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} p={4}>
          {noticiasCol.map((noticia) => (
            <NoticiaItem key={noticia.id} noticia={noticia} />
          ))}
        </SimpleGrid>
      </Box>
    );
  }
};

export default Noticias;

//TODO: Práctica filtros

document.addEventListener('DOMContentLoaded', () => {


    //*** VARIABLES ***//

    const urlBase = 'assets/';

    //* capturas *//
    const capBotones = document.querySelector('#botones');
    const capTextoTag = document.querySelector('#text-tag');
    const capTituloTag = document.querySelector('#title-tag');
    const capFotos = document.querySelector('#fotos');

    //* arrays *//
    const arrayBotones = [
        ['Playa', 'btn1'],
        ['Edificio', 'btn2'],
        ['Montaña', 'btn3'],
        ['Señales', 'btn4'],
        ['Cositas', 'btnNull']
    ];

    const arrayFotos = [
        {id: 'btn1', tag: 'Playa', url: 'viajes-1.jpg', title: 'Foto de viaje 1', alt: 'Foto de viaje 1', header: 'Viaje 1'},
        {id: 'btn1', tag: 'Playa', url: 'viajes-2.jpg', title: 'Foto de viaje 2', alt: 'Foto de viaje 2', header: 'Viaje 2'},
        {id: 'btn4', tag: 'Señales', url: 'viajes-3.jpg', title: 'Foto de viaje 3', alt: 'Foto de viaje 3', header: 'Viaje 3'},
        {id: 'btn2', tag: 'Edificio', url: 'viajes-4.jpg', title: 'Foto de viaje 4', alt: 'Foto de viaje 4', header: 'Viaje 4'},
        {id: 'btn2', tag: 'Edificio', url: 'viajes-5.jpg', title: 'Foto de viaje 5', alt: 'Foto de viaje 5', header: 'Viaje 5'},
        {id: 'btn3', tag: 'Montaña', url: 'viajes-6.jpg', title: 'Foto de viaje 6', alt: 'Foto de viaje 6', header: 'Viaje 6'},
        {id: 'btn3', tag: 'Montaña', url: 'viajes-7.jpg', title: 'Foto de viaje 7', alt: 'Foto de viaje 7', header: 'Viaje 7'}
    ];




    //*** EVENTOS ***//

    capBotones.addEventListener('click', ({target}) => {

        if(target.matches('#btn1')){ //* botón playa
            const id = target.id; //? ¿quizás utilizar .contains() para capturar y pintar los que compartan la misma propiedad tag, por ej.
            const data = target.dataset.id; //* capturo el atributo dataset del botón para poder utilizar el mismo nombre del botón al pintar el mensaje correspondiente
            pintarTag(id, data); //* le paso los parámetros necesarios tanto para filtrar como para completar el mensaje a pintar de forma dinámica
            pintarFotos(id);
        }

        if(target.matches('#btn2')){ //* botón edificio
            const id = target.id;
            const data = target.dataset.id;
            pintarTag(id, data);
            pintarFotos(id);
        }

        if(target.matches('#btn3')){ //* botón montaña
            const id = target.id;
            const data = target.dataset.id;
            pintarTag(id, data);
            pintarFotos(id);
        }

        if(target.matches('#btn4')){ //* botón señales
            const id = target.id;
            const data = target.dataset.id;
            pintarTag(id, data);
            pintarFotos(id);
        }

        if(target.matches('#btnNull')){ //* botón cositas (null)
            const id = target.id;
            const data = target.dataset.id;
            pintarTag(id, data);
            pintarFotos(id);
        }

    })




    //*** FUNCIONES ***//

    const pintarBotones = () => {

        arrayBotones.forEach((item) => {
            const botones = document.createElement('BUTTON');
            botones.textContent = item[0];
            botones.id = item[1];
            botones.setAttribute("data-id", item[0]); //* aplico el atributo dataset para utilizar el valor del botón (el nombre asignado a c/u) al capturarlo cuando haga click (const data del evento) y que se muestre el mensaje con el nombre del tag correspondiente

            capBotones.append(botones);

        })

    } //!FUNC-PINTARBOTONES



    const pintarTag = (id, data) => {

        capTextoTag.innerHTML = '';
        capTituloTag.innerHTML = '';

        const fotos = arrayFotos.filter((item) => item.id == id);

        const elementP = document.createElement('P');
        elementP.innerHTML = `Se han encontrado <strong>${fotos.length}</strong> fotos con la etiqueta <strong>${data}</strong>.`

        const elementHeader = document.createElement('H4');
        elementHeader.textContent = data;
        elementHeader.classList.add('uppercase-text');

        capTextoTag.append(elementP);
        capTituloTag.append(elementHeader);
        
    } //!FUNC-PINTARTAG



    const pintarFotos = (id) => {

        capFotos.innerHTML = '';

        arrayFotos.forEach((item) => {
            if(item.id == id){
                const elementImg = document.createElement('IMG');
                elementImg.src = urlBase + item.url;
                elementImg.title = item.title;
                elementImg.alt = item.alt;
                const elementHeader = document.createElement('H5');
                elementHeader.textContent = item.header;
                elementHeader.classList.add('grid-item-title');
    
                capFotos.append(elementImg, elementHeader);

            }

        })

    } //!FUNC-PINTARFOTOS



    const init = () => {

        pintarBotones();

    } //!FUNC-INIT


    init();


}) //!LOAD
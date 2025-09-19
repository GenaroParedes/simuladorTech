const productos = [
    {
        id: '01',
        name: 'Teclado NovaKeys Gamer',
        description: 'Teclado Gamer mecánico con retroiluminación RGB y switches táctiles para una experiencia de juego superior.',
        stock: 25,
        price: 1000,
        category: 'Teclados',
        img: 'https://i.postimg.cc/W4J21jqh/Teclado2.png'
    },
    {
        id: '02',
        name: 'Teclado NovaKeys Gamer 2.0',
        description: 'Teclado Gamer mecánico con retroiluminación RGB y switches táctiles para una experiencia de juego superior.',
        stock: 15,
        price: 2000,
        category: 'Teclados',
        img: 'https://i.postimg.cc/LXKmq7jv/Teclado1.png'
    },
    {
        id: '03',
        name: 'Auriculares NovaSound Pro',
        description: 'Auriculares inalámbricos con sonido envolvente 7.1, micrófono con cancelación de ruido y batería de larga duración',
        stock: 4,
        price: 2500,
        category: 'Auriculares',
        img: 'https://i.postimg.cc/pX2XYg46/Auris1.png'
    },
    {
        id: '04',
        name: 'Mouse economico de oficina',
        description: 'Mouse óptico con diseño ergonómico, sensor de alta precisión y conectividad USB para uso diario en oficina o estudio.',
        stock: 4,
        price: 2500,
        category: 'Mouses',
        img: 'https://i.postimg.cc/K8WGb4z6/Mouse1.png'
    },
    {
        id: '05',
        name: 'Auriculares Con micrófono Pro',
        description: 'Auriculares inalámbricos con sonido envolvente 7.1, micrófono con cancelación de ruido y batería de larga duración',
        stock: 4,
        price: 2500,
        category: 'Auriculares',
        img: 'https://i.postimg.cc/QCqNZb9m/Auris2.png'
    },
    {
        id: '06',
        name: 'Teclado de uso comun',
        description: 'Teclado de uso comun en oficinas, con cable USB y diseño compacto para facilitar su transporte y almacenamiento.',
        stock: 4,
        price: 2500,
        category: 'Teclados',
        img: 'https://i.postimg.cc/LXKmq7jv/Teclado1.png'
    },
    {
        id: '07',
        name: 'Auriculares NovaSound Pro',
        description: 'Auriculares inalámbricos con sonido envolvente 7.1, micrófono con cancelación de ruido y batería de larga duración',
        stock: 4,
        price: 2500,
        category: 'Auriculares',
        img: 'https://i.postimg.cc/pX2XYg46/Auris1.png'
    }
]

let error = false;
export const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(error){
                reject('Error: No se pudo completar la promesa')
            } else{
                resolve(productos)
            }
        }, 1000)
    }
)}

export const getOneProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let producto = productos.find(prod => prod.id === id)
            if(producto){
                resolve(producto)
            } else {
                reject('Error: Producto no encontrado')
            }
        }, 2000)
    }
)}
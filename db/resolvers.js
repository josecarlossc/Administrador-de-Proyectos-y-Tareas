const cursos = [
    {
        titulo: 'Javascript Moderno Guia Definitiva Construye +10 Proyectos',
        tecnologia: 'JavaScript ES6',
    },
    {
        titulo: 'React - La ',
        tecnologia: 'React',
    },
    {
        titulo: 'Node.js - B',
        tecnologia: 'Node.js',
    },
    {
        titulo: 'ReactJS Avanzado - ',
        tecnologia: 'React',
    }
];

const resolvers = {
    Query: {
        obtenerCursos: () => cursos,

        obtenerTecnologia: () => cursos,
    }
}

module.exports = resolvers;

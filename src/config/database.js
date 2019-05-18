const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb+srv://cataloger:cataloger@clusterfree-anpsj.mongodb.net/cataloger-db?retryWrites=true';
// const url = 'mongodb://localhost:27017';
const dbName = 'cataloger-db';

var _conn;

MongoClient.connect(url, { useNewUrlParser: true })
    .then(client => _conn = client.db(dbName))
    .catch(err => console.log(err));

function insert(collection, document) {

    return _conn.collection(collection)
            .insertOne(document);
            /* .then( () => {
                console.log("Document inserted");
            })
            .catch( (err) => {
                console.error(err);
            }); */

}

function removeAll() {
    _conn.collection("systems").deleteMany({})
        .then( (result) => {
            console.log(result)
        }).catch( (err) => {
            console.log(err);
        });
}

function findAll(collection, callback) {
    _conn.collection(collection).find({}).toArray(callback);
}

module.exports = { findAll, insert, removeAll };

/* const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_completo VARCHAR(40) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
)
`;

const INSERIR_USUARIO_1 =
`
INSERT INTO usuarios (
    nome_completo,
    email,
    senha
) SELECT 'Gabriel Leite', 'gabriel@alura.com.br', '123' WHERE NOT EXISTS (SELECT * FROM usuarios WHERE email = 'gabriel@alura.com.br')
`;

const LIVROS_SCHEMA =
`
CREATE TABLE IF NOT EXISTS livros (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    preco REAL NOT NULL,
    descricao TEXT DEFAULT ('') NOT NULL
)
`;

const INSERIR_LIVRO_1 =
`
INSERT INTO livros (
    titulo,
    preco,
    descricao
) SELECT 'Node na prática', 30.0, 'Como desenvolver com Node.' WHERE NOT EXISTS (SELECT * FROM livros WHERE titulo = 'Node na prática')
`;

const INSERIR_LIVRO_2 =
`
INSERT INTO livros (
    titulo,
    preco,
    descricao
) SELECT 'JavaScript na prática', 40.0, 'Como desenvolver com JavaScript.' WHERE NOT EXISTS (SELECT * FROM livros WHERE titulo = 'JavaScript na prática')
`;

bd.serialize(() => {
    bd.run("PRAGMA foreign_keys=ON");
    bd.run(USUARIOS_SCHEMA);
    bd.run(INSERIR_USUARIO_1);
    bd.run(LIVROS_SCHEMA);
    bd.run(INSERIR_LIVRO_1);
    bd.run(INSERIR_LIVRO_2);

    bd.each("SELECT * FROM usuarios", (err, usuario) => {
        console.log('Usuario: ');
        console.log(usuario);
    });
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;*/
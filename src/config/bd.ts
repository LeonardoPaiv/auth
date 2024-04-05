import { Client } from 'pg';

const client = new Client({
  connectionString: 'URL_DO_SEU_BANCO_DE_DADOS',
  ssl: { rejectUnauthorized: false } // Somente se você estiver usando SSL (recomendado para produção)
});

async function connect() {
  try {
    await client.connect();
    console.log('Conexão bem-sucedida com o banco de dados');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}

connect();

export default client;

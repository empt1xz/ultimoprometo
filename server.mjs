import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/discord-avatar/:userId', async (req, res) => {
  const userId = req.params.userId;
  const token = 'calmacalabrezo'; // Substitua pelo seu token de bot do Discord

  try {
    const response = await fetch(`https://discord.com/api/users/${userId}`, {
      headers: {
        Authorization: `Bot ${token}`
      }
    });
    
    const userData = await response.json();
    const avatarURL = `https://cdn.discordapp.com/avatars/${userId}/${userData.avatar}.png`;
    
    res.json({ avatarURL });
  } catch (error) {
    console.error('Erro ao obter foto de perfil:', error);
    res.status(500).json({ error: 'Erro ao obter foto de perfil' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

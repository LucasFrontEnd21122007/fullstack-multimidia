// routes.js
const express = require('express');
const router = express.Router();
const mediaController = require('./controllers/mediaController');

router.post('/media', mediaController.uploadMedia);
router.get('/media/:id', mediaController.getMediaById);
router.get('/media', mediaController.getAllMedia);

module.exports = router;

// mediaController.js
const Media = require('../models/mediaModel');

// Exemplo de controlador para fazer o upload de mídia no MongoDB e salvar metadados no PostgreSQL
exports.uploadMedia = async (req, res) => {
  try {
    // Fazer upload da mídia no MongoDB

    // Salvar metadados no PostgreSQL

    res.status(201).json({ message: 'Mídia enviada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao enviar mídia' });
  }
};

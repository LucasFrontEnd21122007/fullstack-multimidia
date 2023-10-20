import React, { useState } from 'react';
import axios from 'axios';

function UploadMedia() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('/api/media', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Mídia enviada com sucesso!');
    } catch (error) {
      alert('Erro ao enviar mídia');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Enviar Mídia</button>
    </div>
  );
}

export default UploadMedia;

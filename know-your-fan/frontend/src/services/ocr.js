// services/ocr.js

// Função simulada de leitura OCR
export const analyzeDocument = async (file) => {
    // Aqui seria feita a chamada para Google Vision API com base64
    // Simulação de retorno do OCR
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          text: "Simulação: Nome: Matheus | CPF: 123.456.789-00"
        });
      }, 1000);
    });
  };
  
// src/services/api.js

export const postFanData = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/fans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) throw new Error("Erro ao enviar dados!");
  
      return await response.json();
    } catch (error) {
      console.error("Erro ao enviar dados do fã:", error);
      return { success: false };
    }
  };
  
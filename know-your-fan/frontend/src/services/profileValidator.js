export const analyzeProfileLink = async (link) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (link.includes("steam") || link.includes("faceit")) {
          resolve({ valid: true, message: "Perfil validado com sucesso! ✅" });
        } else {
          resolve({ valid: false, message: "Link inválido ou não reconhecido ❌" });
        }
      }, 1500);
    });
  };
  
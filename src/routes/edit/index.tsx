import React, { useState } from "react";
import { PageContainer, Title, PageContent } from "./styles";
import { Header } from "../../components/header";

export const EditServiceOrder: React.FC = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [id, setId] = useState<string | null>("");
  const [formData, setFormData] = useState({
    customerName: "",
    purchaseDate: "",
    customerPhone: "",
    olhoEsquerdoDP: "",
    olhoDireitoDP: "",
    longeODEsferico: "",
    longeODCilindro: "",
    longeODEixo: "",
    longeOEEsferico: "",
    longeOECilindro: "",
    longeOEEixo: "",
    pertoODEsferico: "",
    pertoODCilindro: "",
    pertoODEixo: "",
    pertoOEEsferico: "",
    pertoOECilindro: "",
    pertoOEEixo: "",
    addEsquerdo: "",
    addDireito: "",
    tratamentosLentes: "",
    obs: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleIdSelection = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    setId(value);
  };

  const handlePostRequest = async (): Promise<void> => {
    const url = `https://cadastro-os-cors.onrender.com/serviceOrders/${id}`;

    try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        console.error("Token not available. Redirect to login.");
        // Handle the case where the token is not available (e.g., redirect to login)
        return;
      }

      const response = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseBody = await response.text();
      const responseData = responseBody ? JSON.parse(responseBody) : null;

      setResponse(JSON.stringify(responseData));
    } catch (error) {
      console.error("Error:", error);

      if (error instanceof Response) {
        const rawResponseText = await error.text();
        console.error("Raw Response Text:", rawResponseText);
      }
    }
  };

  return (
    <PageContent>
      <Header />
      <PageContainer>
        <Title>Editar ordem de serviço</Title>
        <input type="text" onChange={handleIdSelection} />
        <form>
          <h2>Informações do cliente</h2>
          <div>
            <label>
              Nome do cliente:{" "}
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Data da compra:{" "}
              <input
                type="text"
                name="purchaseDate"
                value={formData.purchaseDate}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Contato do cliente:{" "}
              <input
                type="text"
                name="customerPhone"
                value={formData.customerPhone}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <h2>Informações do serviço</h2>
          <div>
            <div>
              <label>
                DP Olho esquerdo:{" "}
                <input
                  type="text"
                  name="olhoEsquerdoDP"
                  value={formData.olhoEsquerdoDP}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                DP Olho direito:{" "}
                <input
                  type="text"
                  name="olhoDireitoDP"
                  value={formData.olhoDireitoDP}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <h3>Longe</h3>
              <div>
                <h4>Olho direito</h4>
                <label>
                  Esferico:{" "}
                  <input
                    type="text"
                    name="longeODEsferico"
                    value={formData.longeODEsferico}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Cilindro:{" "}
                  <input
                    type="text"
                    name="longeODCilindro"
                    value={formData.longeODCilindro}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Eixo:{" "}
                  <input
                    type="text"
                    name="longeODEixo"
                    value={formData.longeODEixo}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div>
                <h4>Olho esquerdo</h4>
                <label>
                  Esferico:{" "}
                  <input
                    type="text"
                    name="longeOEEsferico"
                    value={formData.longeOEEsferico}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Cilindro:{" "}
                  <input
                    type="text"
                    name="longeOECilindro"
                    value={formData.longeOECilindro}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Eixo:{" "}
                  <input
                    type="text"
                    name="longeOEEixo"
                    value={formData.longeOEEixo}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            </div>
          </div>
          <div>
            <h3>Perto</h3>
            <div>
              <h4>Olho direito</h4>
              <label>
                Esferico:{" "}
                <input
                  type="text"
                  name="pertoODEsferico"
                  value={formData.pertoODEsferico}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Cilindro:{" "}
                <input
                  type="text"
                  name="pertoODCilindro"
                  value={formData.pertoODCilindro}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Eixo:{" "}
                <input
                  type="text"
                  name="pertoODEixo"
                  value={formData.pertoODEixo}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <h4>Olho Esquerdo</h4>
              <label>
                Esferico:{" "}
                <input
                  type="text"
                  name="pertoOEEsferico"
                  value={formData.pertoOEEsferico}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Cilindro:{" "}
                <input
                  type="text"
                  name="pertoOECilindro"
                  value={formData.pertoOECilindro}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Eixo:{" "}
                <input
                  type="text"
                  name="pertoOEEixo"
                  value={formData.pertoOEEixo}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
          <div>
            <h4>Adição</h4>
            <label>
              Olho esquerdo/direito:{" "}
              <input
                type="text"
                name="addEsquerdo"
                value={formData.addEsquerdo}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <h3>Informações Adicionais do Serviço</h3>
            <label>
              Tratamentos de Lentes:{" "}
              <input
                type="text"
                name="tratamentosLentes"
                value={formData.tratamentosLentes}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Observações:{" "}
              <input
                type="text"
                name="obs"
                value={formData.obs}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <button type="button" onClick={handlePostRequest}>
            Make PUT Request
          </button>
          {response && <p>Response: {JSON.stringify(response)}</p>}
        </form>
      </PageContainer>
    </PageContent>
  );
};

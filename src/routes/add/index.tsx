import React, { useState } from "react";
import {
  PageContainer,
  Title,
  PageContent,
  FormContainer,
  FormGroup,
  Label,
  Input,
  SubmitButton,
  ResponseMessage,
} from "./styles";
import { Header } from "../../components/header";

export const CreateServiceOrders: React.FC = () => {
  const [response, setResponse] = useState<string | null>(null);
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

  const handlePostRequest = async (): Promise<void> => {
    const url = "https://cadastro-os-cors.onrender.com/serviceOrders";

    try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        console.error("Token not available. Redirect to login.");
        // Handle the case where the token is not available (e.g., redirect to login)
        return;
      }

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Clear form data
      setFormData({
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

      const responseBody = await response.text();
      const responseData = responseBody ? JSON.parse(responseBody) : null;

      setResponse(JSON.stringify(responseData));

      // Reset response message after a short delay (e.g., 3 seconds)
      setTimeout(() => {
        setResponse(null);
      }, 3000); // Adjust the delay as needed
    } catch (error) {
      console.error("Error:", error);

      if (error instanceof Response) {
        const rawResponseText = await error.text();
        console.error("Raw Response Text:", rawResponseText);
      }
    }
  };

  return (
    <>
      <Header />
      <PageContent>
        <PageContainer>
          <Title>Criar ordem de serviço</Title>
          <FormContainer>
            <form>
              <FormGroup>
                <h2>Informações do cliente</h2>
                <div>
                  <Label>
                    Nome do cliente:
                    <Input
                      type="text"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleInputChange}
                    />
                  </Label>
                  <Label>
                    Data da compra:
                    <Input
                      type="text"
                      name="purchaseDate"
                      value={formData.purchaseDate}
                      onChange={handleInputChange}
                    />
                  </Label>
                  <Label>
                    Contato do cliente:
                    <Input
                      type="text"
                      name="customerPhone"
                      value={formData.customerPhone}
                      onChange={handleInputChange}
                    />
                  </Label>
                </div>
              </FormGroup>

              <FormGroup>
                <div>
                  <Label>
                    DP Olho esquerdo:
                    <Input
                      type="text"
                      name="olhoEsquerdoDP"
                      value={formData.olhoEsquerdoDP}
                      onChange={handleInputChange}
                    />
                  </Label>
                  <Label>
                    DP Olho direito:
                    <Input
                      type="text"
                      name="olhoDireitoDP"
                      value={formData.olhoDireitoDP}
                      onChange={handleInputChange}
                    />
                  </Label>
                </div>
                <div>
                  <h3>Longe</h3>
                  <div>
                    <h4>Olho direito</h4>
                    <Label>
                      Esferico:
                      <Input
                        type="text"
                        name="longeODEsferico"
                        value={formData.longeODEsferico}
                        onChange={handleInputChange}
                      />
                    </Label>
                    <Label>
                      Cilindro:
                      <Input
                        type="text"
                        name="longeODCilindro"
                        value={formData.longeODCilindro}
                        onChange={handleInputChange}
                      />
                    </Label>
                    <Label>
                      Eixo:
                      <Input
                        type="text"
                        name="longeODEixo"
                        value={formData.longeODEixo}
                        onChange={handleInputChange}
                      />
                    </Label>
                  </div>

                  <div>
                    <h4>Olho esquerdo</h4>
                    <Label>
                      Esferico:
                      <Input
                        type="text"
                        name="longeOEEsferico"
                        value={formData.longeOEEsferico}
                        onChange={handleInputChange}
                      />
                    </Label>
                    <Label>
                      Cilindro:
                      <Input
                        type="text"
                        name="longeOECilindro"
                        value={formData.longeOECilindro}
                        onChange={handleInputChange}
                      />
                    </Label>
                    <Label>
                      Eixo:
                      <Input
                        type="text"
                        name="longeOEEixo"
                        value={formData.longeOEEixo}
                        onChange={handleInputChange}
                      />
                    </Label>
                  </div>
                </div>
              </FormGroup>

              <FormGroup>
                <h3>Perto</h3>
                <div>
                  <h4>Olho direito</h4>
                  <Label>
                    Esferico:
                    <Input
                      type="text"
                      name="pertoODEsferico"
                      value={formData.pertoODEsferico}
                      onChange={handleInputChange}
                    />
                  </Label>
                  <Label>
                    Cilindro:
                    <Input
                      type="text"
                      name="pertoODCilindro"
                      value={formData.pertoODCilindro}
                      onChange={handleInputChange}
                    />
                  </Label>
                  <Label>
                    Eixo:
                    <Input
                      type="text"
                      name="pertoODEixo"
                      value={formData.pertoODEixo}
                      onChange={handleInputChange}
                    />
                  </Label>
                </div>
                <div>
                  <h4>Olho Esquerdo</h4>
                  <Label>
                    Esferico:
                    <Input
                      type="text"
                      name="pertoOEEsferico"
                      value={formData.pertoOEEsferico}
                      onChange={handleInputChange}
                    />
                  </Label>
                  <Label>
                    Cilindro:
                    <Input
                      type="text"
                      name="pertoOECilindro"
                      value={formData.pertoOECilindro}
                      onChange={handleInputChange}
                    />
                  </Label>
                  <Label>
                    Eixo:
                    <Input
                      type="text"
                      name="pertoOEEixo"
                      value={formData.pertoOEEixo}
                      onChange={handleInputChange}
                    />
                  </Label>
                </div>
              </FormGroup>

              <FormGroup>
                <h4>Adição</h4>
                <Label>
                  Olho esquerdo/direito:
                  <Input
                    type="text"
                    name="addEsquerdo"
                    value={formData.addEsquerdo}
                    onChange={handleInputChange}
                  />
                </Label>
              </FormGroup>

              <FormGroup>
                <h3>Informações Adicionais do Serviço</h3>
                <Label>
                  Tratamentos de Lentes:
                  <Input
                    type="text"
                    name="tratamentosLentes"
                    value={formData.tratamentosLentes}
                    onChange={handleInputChange}
                  />
                </Label>
                <Label>
                  Observações:
                  <Input
                    type="text"
                    name="obs"
                    value={formData.obs}
                    onChange={handleInputChange}
                  />
                </Label>
              </FormGroup>

              <SubmitButton type="button" onClick={handlePostRequest}>
                Confirmar
              </SubmitButton>

              {response && (
                <ResponseMessage>Ordem criada com sucesso</ResponseMessage>
              )}
            </form>
          </FormContainer>
        </PageContainer>
      </PageContent>
    </>
  );
};

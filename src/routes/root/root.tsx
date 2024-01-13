import Header from "../../components/header";
import { Container, PageLink } from "./syles";

export const Root = () => {
  return (
    <>
      <Container>
        <Header />
        <ul>
          <li>
            <PageLink href={`/listServiceOrders`}>
              Listar Ordens de serviço
            </PageLink>
          </li>
          <li>
            <PageLink href={`/CreateServiceOrders`}>
              Adicionar Ordem de serviço
            </PageLink>
          </li>
          <li>
            <PageLink href={`/`}>Apagar Ordem de serviço</PageLink>
          </li>
          <li>
            <PageLink href={`/`}>Editar Ordens de serviço</PageLink>
          </li>
        </ul>
      </Container>
    </>
  );
};

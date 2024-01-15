import { Header } from "../../components/header";
import { Container, LinkList, PageLink } from "./syles";

export const Root = () => {
  return (
    <>
      <Container>
        <Header />
        <LinkList>
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
            <PageLink href={`/EditServiceOrder`}>
              Editar Ordens de serviço
            </PageLink>
          </li>
        </LinkList>
      </Container>
    </>
  );
};

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
            <PageLink href={`/createServiceOrders`}>
              Adicionar Ordem de serviço
            </PageLink>
          </li>
          <li>
            <PageLink href={`/editServiceOrder`}>
              Editar Ordens de serviço
            </PageLink>
          </li>
          <li>
            <PageLink href={`/deleteServiceOrder`}>
              Apagar Ordem de serviço
            </PageLink>
          </li>
        </LinkList>
      </Container>
    </>
  );
};

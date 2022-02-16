import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SidebarItem = styled.li`
  list-style-type: none;
  font-size: clamp(0.5rem, 1rem, 1.5rem);
  font-weight: bold;
  padding-bottom: 20px;
`;

export const PlusIcon = styled(Add)``;

export const MinusIcon = styled(Remove)``;

export const SubmenuItem = styled.li`
  list-style-type: none;
  padding: 0 0 20px 15px;
  text-transform: uppercase;
`;

import styled from "styled-components";
import { device } from "../../mediaQueries";
import { Add, Remove } from "@material-ui/icons";

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${device.tablet`
  `}
`;

export const SidebarItem = styled.li`
  list-style-type: none;
  font-size: clamp(0.5rem, 1rem, 1.5rem);
  font-weight: bold;
  padding-bottom: 20px;
  cursor: pointer;

  ${device.tablet`
  padding: 15px;
  font-weight: normal;
  `}
`;

export const IconWrapper = styled.div`
  height: 32px;
  width: 32px;
  margin-right: 10px;

  ${device.tablet`
  display: none;
  `}
`;

export const PlusIcon = styled(Add)``;

export const MinusIcon = styled(Remove)``;

export const SubnavWrapper = styled.ul`
  ${device.tablet`
  position: absolute;
  display: flex;
  top: 40px;
  `}
`;

export const SubmenuItem = styled.li`
  list-style-type: none;
  padding: 0 0 20px 15px;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 999;

  ${device.tablet`
  padding: 15px;
  color: white;
  `}
`;

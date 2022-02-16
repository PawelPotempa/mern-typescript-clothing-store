import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid lightgrey;
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoriesContainer = styled.div`
  padding: 0.5rem 0;
  min-width: 8rem;
  display: flex;
`;

export const Category = styled.li`
  list-style-type: none;
  padding: 0 1rem;
`;

export const SubmenuItem = styled.li``;

export const MenuElement = styled.li`
  list-style-type: none;
  font-size: clamp(0.5rem, 1rem, 1.5rem);
  padding: 15px;
`;

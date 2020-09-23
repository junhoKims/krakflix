import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

interface IPagination {
  curPage?: number;
  postPerPage: number;
  totalPosts: number;
  onChangePage: (page: number) => void;
}

const List = styled.ul`
    display: inline-flex;
    margin-top: 16px;
    margin-left: 16px;
    border-color: white;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid;
`;

const Item = styled.li<{ isActive: boolean }>`
    padding: 12px;
    background-color: ${props => (props.isActive ? 'white' : 'black')};
    :not(:last-child) {
        border-right: 1px white solid;
    }
`;

const PageNumber = styled.span<{ isActive: boolean }>`
    color: ${props => (props.isActive ? 'black' : 'white')};
`;

const Pagination: React.FC<IPagination> = ({
  curPage, postPerPage, totalPosts, onChangePage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
        <List>
            {pageNumbers.map(page => (
                <Item
                  key={page}
                  isActive={page === curPage}
                  onClick={() => onChangePage(page)}>
                  <PageNumber isActive={page === curPage}>{page}</PageNumber>
                </Item>
            ))}
        </List>
    </nav>
  );
};

Pagination.propTypes = {
  curPage: PropTypes.number.isRequired,
  postPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default Pagination;

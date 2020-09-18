import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    display: inline-flex;
    margin-top: 16px;
    margin-left: 16px;
    border-color: white;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid;
`;

const Item = styled.li`
    padding: 12px;
    background-color: ${props => props.isActive ? 'white' : 'black'};
    :not(:last-child) {
        border-right: 1px white solid;
    }
`;

const PageNumber = styled.span`
    color: ${props => props.isActive ? 'black' : 'white'};
`;


const Pagination = ({ curPage, postPerPage, totalPosts, onChangePage }) => {
    const pageNumbers = [];

    for(let i=1;i<Math.ceil(totalPosts / postPerPage);i++) {
        pageNumbers.push(i)
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
    )
}

export default Pagination;
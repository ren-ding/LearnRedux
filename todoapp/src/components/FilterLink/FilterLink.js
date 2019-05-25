import React from 'react';
import {connect} from 'react-redux'
import {setVisibilityFilter} from '../../action/action';

const Link = ({
    active,
    children,
    onClick
}) => {
    if(active){
        return <span>{children}</span>;
    }
    return(
    <a href='#'
       onClick={ e=>{
            e.preventDefault();
            onClick();
        }}
    >
    {children}
    </a>
    );
};

const mapStateToLinkProps = (
    state,
    ownProps
) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (
    dispatch,
    ownProps
) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter));
    }
});

const FilterLink = connect(
    mapStateToLinkProps,
    mapDispatchToProps
)(Link);


export default FilterLink;
import React from 'react';
import {connect} from 'react-redux'

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
) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (
    dispatch,
    ownProps
) => {
    return {
        onClick: () => {
            dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter: ownProps.filter
            });
        }
    }
}

const FilterLink = connect(
    mapStateToLinkProps,
    mapDispatchToProps
)(Link);


export default FilterLink;
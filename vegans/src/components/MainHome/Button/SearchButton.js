import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import SearchBox from '../Main/SearchBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchButton() {
    const [state, setState] = useState(false);

    return (
        <div>
            <button onClick={()=> { setState(!state) }} style={{
                border: 'none',
                backgroundColor: 'white',
                cursor: 'pointer',
            }} >
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{
                    width: '38px',
                    height: '38px',
                    position: 'fixed',
                    top: '70px',
                    left: '1350px'
                }} />
            </button>
            {state === true ? <SearchBox /> : null}
        </div>
    )
}
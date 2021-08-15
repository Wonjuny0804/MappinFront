import React, { useRef, useEffect } from 'react';
import { Icon } from '..';
import styles from "./SearchInput.module.scss";

interface SearchInputProps extends React.Component<HTMLInputElement> {
}

function SearchInput():JSX.Element {

    const wrapperRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const labelRef = useRef<HTMLLabelElement>(null);

    const handleWrapperClick = ():void => {
        labelRef.current.style.display = "none";
        inputRef.current.focus();
    }

    useEffect(() => {
        
    }, [])

    return (
        <div className={styles.inputWrapper} ref={wrapperRef} onClick={handleWrapperClick}>
            <Icon type="Search" />
            <label htmlFor="SearchInput" className={styles.label} ref={labelRef}>가고 싶은 곳을 검색해 보세요</label>
            <input type="search" id="SearchInput" name="search" minLength={2} className={styles.input} ref={inputRef}/>
        </div>
    )
}

export default SearchInput;

import styles from './Column.module.scss';
import shortid from 'shortid';
import { useState } from 'react';

const Column = props => {

    return (
        <article className={styles.column}>
            <h1 className={styles.title}>
                <span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}
            </h1>
        </article>
    );
};

export default Column;
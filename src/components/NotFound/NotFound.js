import React from 'react'
import PageTitle from '../PageTitle/PageTitle';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <>
      <PageTitle>Ooops!</PageTitle>
      <p className={styles.message}>Page not found...</p>
    </>

  )
}

export default NotFound
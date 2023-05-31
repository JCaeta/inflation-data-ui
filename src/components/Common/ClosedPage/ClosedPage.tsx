import styles from './ClosedPage.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
// import img1 from '/Closed.png';
import img1 from './images/Closed.png';
import {Container} from '@mui/material';

export const ClosedPage = () => {

    return (<>
        <Container 
            style={{ 
                textAlign: 'center', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh',
                flexDirection: 'column'
            }}
            className={styles.container}
            maxWidth={false}>
            {/* <div className={styles.message}> */}
                <h2 >
                    We apologize for the inconvenience, but due to limited 
                    hosting capacity, this page is only available during 
                    certain hours. 
                </h2>
                <h2 >
                    Please visit us again during our regular hours of operation:
                    Monday - Friday: 9am - 5pm EST
                </h2>
            {/* </div> */}

            <Image 
                    src={img1} 
                    className={styles.image}
                    alt="My image"/>
        </Container>
    </>);
}

ClosedPage.defaultProps =
{

}

ClosedPage.propTypes = 
{

}


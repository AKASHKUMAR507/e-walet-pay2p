import React from 'react'
import { IMAGES } from '../assets';
function SideLogo() {
    return (
        <div style={styles.container}>
            <img
                src={IMAGES.backgroundSideLogo}
                alt='backgroundSideLogo'
                style={styles.image}
            />

            <img src={IMAGES.companyLogo}
                alt='company logo'
                style={
                    {
                        height: '200px',
                        width: '200px',
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }
                }
            />
        </div>
    )
}

export default SideLogo

const styles = {
    container: {
        backgroundColor: '#000',
        position: 'relative',
        display: 'inline-Block',
    },
    image: {
        width: '100%',
        height: '100%',
        display: "block",
    },
};
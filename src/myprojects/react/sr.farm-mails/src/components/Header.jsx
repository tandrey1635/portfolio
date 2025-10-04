import React from 'react';

import {
	Row,
	Column,
	Img,
	Link,
	Text,
} from "@react-email/components";

import styles from '../styles.js'


const Header = () =>{
	return(
		<Row>
			<Column style={styles.mainLogoSectionRow}>
				<Link style={styles.mainLogoLink} href="https://sr.farm">
					<Img
						style={styles.mainLogo}
						src={styles.mainLogo.src}
						alt="Сердце России"
					/>
				</Link>
				<Text style={styles.mainLogoText}>
					С Любовью, заботой и вниманием
					<Img
						style={styles.mainLogoHeart}
						src={styles.mainLogoHeart.src}
					/>
				</Text>
			</Column>
		</Row>
	)
}



export default Header
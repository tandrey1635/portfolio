import React from 'react';

import {
	Row,
	Column,
	Link,
} from "@react-email/components";

import styles from '../styles.js'


const Btn = () => {
	return(
		<Row>
			<Column style={styles.buttonItem}>
				<Link style={styles.button} href="https://sr.farm">
					Спешите в аптеки вашего города
				</Link>
			</Column>
		</Row>
	)
}


export default Btn
import React from 'react';

import {
	Row,
	Column,
	Link,
	Img
} from "@react-email/components";

import styles from '../styles.js'

const Card = () => {
	return(
		<Row>
			<Column>
				<Link href="https://sr.farm" style={styles.link}>
					<Img style={styles.img} src={styles.testImg.src} />
				</Link>
			</Column>
		</Row>
	)
}


export default Card
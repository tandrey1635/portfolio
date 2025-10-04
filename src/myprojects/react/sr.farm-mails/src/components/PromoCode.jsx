import React from 'react';

import {
	Heading,
	Row,
	Column,
	Text,
} from "@react-email/components";


import styles from '../styles.js'

const PromoCode = () => {
	return(
		<Row>
			<Column style={styles.promoCodeSection}>
				<Heading as="h2" style={styles.h2}>
					Ваш промокод
				</Heading>
				<Text style={styles.promoCodeText}>
					успейте воспользоваться
				</Text>
				<Text style={styles.promoCodePersonal}>
					srpodarok24
				</Text>
			</Column>
		</Row>
	)
}


export default PromoCode
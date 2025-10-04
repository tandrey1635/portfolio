import React from 'react';

import {
	Body,
	Container,
	Section,
	Html,
} from "@react-email/components";


import styles from '../src/styles.js'
import HeadComponent from '../src/components/Head'
import Header from '../src/components/Header'
import Nav from '../src/components/Nav'
import Descriptions from '../src/components/Descriptions'
import PromoCode from '../src/components/PromoCode'
import Footer from '../src/components/Footer'


const HeartOfRussianEmailPromoCode = () => {
	return (
		<Html lang="ru">
			<HeadComponent />
			<Body style={styles.body}>
				<Container style={styles.mainSection}>
					<Section>
						<Section style={styles.section}>
							<Header />
						</Section>

						<Section style={styles.section}>
							<Nav />
						</Section>

						<Section style={styles.section}>
							<Descriptions HeartOfRussianPromoCode />
						</Section>

						<Section style={styles.section}>
							<PromoCode />
						</Section>

						<Section style={styles.section}>
							<Footer />
						</Section>
					</Section>
				</Container>
			</Body>
		</Html>
	)

}


export default HeartOfRussianEmailPromoCode

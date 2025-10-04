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
import Card from '../src/components/Card'
import Btn from '../src/components/Btn'
import Footer from '../src/components/Footer'


export const HeartOfRussianEmail = () => {
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
							<Descriptions HeartOfRussian />
						</Section>

						<Section style={styles.section}>
							<Card />
							<Card />
							<Card />
						</Section>

						<Section style={styles.section}>
							<Btn />
						</Section>

						<Section style={styles.section}>
							<Footer />
						</Section>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

export default HeartOfRussianEmail;
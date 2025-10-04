import React from 'react';

import {
	Row,
	Column,
	Link,
	Text,
} from "@react-email/components";

import styles from '../styles.js'

const Footer = () => {
	return(
		<Row style={styles.footer}>
			<Column>
				<Text style={styles.unsubscribeText}>
					Если Вы хотите отписаться от получения писем,
					<Link
						href="#UNSUBSCRIBE#"
						style={styles.unsubscribeLink}
					>
						нажмите здесь
					</Link>
				</Text>
			</Column>
		</Row>
	)
}


export default Footer
import React from 'react';

import {
	Row,
	Column,
	Link,
} from "@react-email/components";


import styles from '../styles.js'

const Nav = () => {
	return(
		<Row style={styles.navLinkSection}>
			<ul>
				<Column style={styles.navLinkSectionColumn}>
					<li style={styles.navListNoListStyle}>
						<Link
							style={styles.navLink}
							href="https://sr.farm/apteka/lekarstvennye-preparaty/"
						>
							Лекарства
						</Link>
					</li>
				</Column>
				<Column style={styles.navLinkSectionColumn}>
					<li style={styles.navList}>
						<Link
							style={styles.navLink}
							href="https://sr.farm/apteka/bad/"
						>
							БАД
						</Link>
					</li>
				</Column>
				<Column style={styles.navLinkSectionColumn}>
					<li style={styles.navList}>
						<Link
							style={styles.navLink}
							href="https://sr.farm/apteka/gigiena-i-kosmetika/"
						>
							Косметика и гигиена
						</Link>
					</li>
				</Column>
				<Column style={styles.navLinkSectionColumn}>
					<li style={styles.navList}>
						<Link
							style={styles.navLink}
							href="https://sr.farm/loyalty/"
						>
							Бонусная программа
						</Link>
					</li>
				</Column>
			</ul>
		</Row>
	)
}

export default Nav
import React from 'react';

import {
	Row,
	Column,
	Heading,
	Text
} from "@react-email/components";


import styles from '../styles.js'

const Descriptions = ({HeartOfRussian, HeartOfRussianPromoCode}) => {
	return(
		<Row>
			{ HeartOfRussian &&
				<Column>
					<Heading as="h1" style={styles.h1}>
						Это актуально
					</Heading>
				</Column>
			}

			{ HeartOfRussianPromoCode &&
				<>
					<Row>
						<Column>
							<Heading as="h1" style={styles.h1}>
								Сегодня Сердце России <br /> отмечает день рождения!
							</Heading>
						</Column>
					</Row>

					<Row>
						<Column>
							<Text style={styles.text}>
								Мы считаем, что лучший способ отметить праздник — это разделить его с теми, для кого мы работаем, с нашими клиентами!
							</Text>
						</Column>
					</Row>

					<Row>
						<Column>
							<Text style={styles.text}>
								Специально для Вас мы подготовили промокод, выбирайте свой полис <br /> и оформляйте его онлайн уже сегодня!
							</Text>
						</Column>
					</Row>
				</>
			}
		</Row>
	)
}


export default Descriptions
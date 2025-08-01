import {
	Section,
	Container,
	Row,
	Column,
	Text,
} from "@react-email/components";



const Footer = () => {
	return (
		<Section>
			<Container>
				<Row className="mt-[24px] text-[#1c2027b8]">
					<Column>
						<Text className="p-0 m-0 border-0 leading-[unset] text-[13px]">
							Предназначено для информирования специалистов
							здравоохранения. <br /> Не для демонстрации
							пациентам. <br /> ОАО АВЕКСИМА, г. Москва,
							Ленинградский проспект, д. 31А, стр. 1, +7 (495) 258
							45 28, www.avexima.ru KSN-RUS-00008-DOC-06.2025
						</Text>
					</Column>
				</Row>
			</Container>
		</Section>
	);
};

export default Footer
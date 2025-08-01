import {
	Html,
	Body,
	Section,
	Container,
	Row,
	Column,
	Tailwind,
	pixelBasedPreset
} from "@react-email/components";


import HeadComponent from "../src/components/Head";
import Header from "../src/components/Header";
import TextDescriptons from "../src/components/Text";
import Main from "../src/components/Main";
import Btn from "../src/components/Btn";
import FinalSection from "../src/components/FinalSection";
import Footer from "../src/components/Footer";



const AveximaLayout = () => {
	return(
		<Html lang="ru">
			<HeadComponent title="А вы уже посмотрели схемы лечения вагинитов президента Рагин?" />
			<Tailwind
        		config={{
          		presets: [pixelBasedPreset],
        		}}
      		>
				<Body className="[font-family:'Noto_Sans']">
					<Section className="w-[640px] bg-[#f4f7fa] px-0 py-[48px] mx-[auto]">
						<Container className="max-w-[544px] mx-auto">
							<Header header='А вы уже посмотрели схемы лечения вагинитов президента Рагин?' />

							<Main>
								<Row className="font-[700] leading-[150%] tracking-[0.01em] text-[#384860]">
									<Column>
										<Container>
											<TextDescriptons textHeader text={
												<>
													У Вас ещё есть возможность<br /> просмотреть/прослушать вторую мини-лекцию проф. Е.Ф. Кира
												</>}
											/>
										</Container>
									</Column>
								</Row>
								<Row className="mt-[30px] tracking-[0.01em] text-[16px] leading-[150%] text-[#384860]">
									<Column>
										<Container>
											<TextDescriptons text='Добрый день,' doctorName='Имя_Доктора!' />
										</Container>
									</Column>
								</Row>
								<Row className="mt-[30px] tracking-[0.01em] text-[16px] leading-[150%] text-[#384860]">
									<Column>
										<Container>
											<TextDescriptons spanAfter='еще в течение 72 часов.' text='Напоминаем, что вторая мини-лекция остаётся открытой для просмотра' />
										</Container>
									</Column>
								</Row>
								<Btn>Перейти к лекции</Btn>
								<Row className="mt-[30px] tracking-[0.01em] text-[16px] leading-[150%] text-[#384860]">
									<Column>
										<Container>
											<TextDescriptons text='Многие ваши коллеги уже посмотрели мини-лекции и оценили её значимость в клинической практике.' />
										</Container>
									</Column>
								</Row>
								<Row className="mt-[30px] tracking-[0.01em] text-[16px] leading-[150%] text-[#384860]">
									<Column>
										<Container>
											<TextDescriptons text='Присоединяйтесь!' />
										</Container>
									</Column>
								</Row>
							</Main>

							<FinalSection />

							<Footer />
						</Container>
					</Section>
				</Body>
			</Tailwind>
  		</Html>
	)
};


export default AveximaLayout;

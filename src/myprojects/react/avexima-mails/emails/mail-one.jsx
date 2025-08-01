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
			<HeadComponent title="Старт мини-лекций проф.  Е.Ф. КИра: нормальная микробиота" />
			<Tailwind
        		config={{
          		presets: [pixelBasedPreset],
        		}}
      		>
				<Body className="[font-family:'Noto_Sans']">
					<Section className="w-[640px] bg-[#f4f7fa] px-0 py-[48px] mx-[auto]">
						<Container className="max-w-[544px] mx-auto">
							<Header header='Старт мини-лекций проф. Е.Ф. КИра: нормальная микробиота' />

							<Main>
								<Row className="font-[700] leading-[150%] tracking-[0.01em] text-[#384860]">
									<Column>
										<Container>
											<TextDescriptons textHeader text='5-минут о главном защитном барьере влагалища' />
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
											<TextDescriptons spanBefore='Компания Авексима' text='благодарит Вас за интерес к нашим материалам. Мы запускаем серию мини-лекций профессора Евгения Федоровича Кира, президента Российской Ассоциации по Генитальным Инфекциям и Неоплазии, посвященных современным подходам к диагностике и лечению инфекций нижних отделов полового тракта.' />
										</Container>
									</Column>
								</Row>
								<Row className="mt-[30px] tracking-[0.01em] text-[16px] leading-[150%] text-[#384860]">
									<Column>
										<Container>
											<TextDescriptons spanAfter='состав и значение нормальной микробиоты влагалища.' text='Первая мини-лекция посвящена современному взгляду на ' />
										</Container>
									</Column>
								</Row>
								<Btn>Смотреть 1-е видео</Btn>
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




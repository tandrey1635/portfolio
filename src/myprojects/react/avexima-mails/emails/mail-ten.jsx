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
import FinalSection from "../src/components/FinalSection";
import Footer from "../src/components/Footer";




const AveximaLayout = () => {
	return(
		<Html lang="ru">
			<HeadComponent title="Спасибо, что прослушали мини-лекции проф. Кира Е.Ф." />
			<Tailwind
        		config={{
          		presets: [pixelBasedPreset],
        		}}
      		>
				<Body className="[font-family:'Noto_Sans']">
					<Section className="w-[640px] bg-[#f4f7fa] px-0 py-[48px] mx-[auto]">
						<Container className="max-w-[544px] mx-auto">
							<Header header='Спасибо, что прослушали мини-лекции проф. Кира Е.Ф.' />

							<Main>
								<Row className="font-[700] leading-[150%] tracking-[0.01em] text-[#384860]">
									<Column>
										<Container>
											<TextDescriptons textHeader text='Завершилась серия мини-лекций проф. Кира Е.Ф.' />
										</Container>
									</Column>
								</Row>
								<Row className="mt-[30px] tracking-[0.01em] text-[16px] leading-[150%] text-[#384860]">
									<Column>
										<Container>
											<TextDescriptons text='Компания Авексима благодарит Вас за интерес к серии мини-лекций президента Российской Ассоциации по Генитальным Инфекциям и Неоплазии, проф. Кира Евгения Фёдоровича.' />
										</Container>
									</Column>
								</Row>
								<Row className="mt-[30px] tracking-[0.01em] text-[16px] leading-[150%] text-[#384860]">
									<Column>
										<Container>
											<TextDescriptons text='Очень надеемся, что этот материал был полезен для Вас и Ваших пациентов.' />
										</Container>
									</Column>
								</Row>
								<Row className="mt-[30px] tracking-[0.01em] text-[16px] leading-[150%] text-[#384860]">
									<Column>
										<Container>
											<TextDescriptons text='Мы же, со своей стороны продолжим работать над следующим материалом, полезным в Вашем нелёгком труде.' />
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
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
			<HeadComponent title="Аэробный и смешанный вагинит: как повысить качество терапии?" />
			<Tailwind
        		config={{
          		presets: [pixelBasedPreset],
        		}}
      		>
				<Body className="[font-family:'Noto_Sans']">
					<Section className="w-[640px] bg-[#f4f7fa] px-0 py-[48px] mx-[auto]">
						<Container className="max-w-[544px] mx-auto">
							<Header header={
								<>
									Аэробный и смешанный вагинит:<br /> как повысить качество терапии?
								</>}
							/>

							<Main>
								<Row className="font-[700] leading-[150%] tracking-[0.01em] text-[#384860]">
									<Column>
										<Container>
											<TextDescriptons textHeader text='Частые ошибки и рациональные схемы' />
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
											<TextDescriptons text='Четвёртая мини-лекция посвящена особенностям терапии аэробного и смешанного вагинитов. Профессор Е.Ф. Кира разбирает частые ошибки и делится актуальными подходами к терапии.' />
										</Container>
									</Column>
								</Row>
								<Btn>Смотреть 4-е видео</Btn>
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

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
			<HeadComponent title="Бактериальный вагиноз через призму современности" />
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
									Бактериальный вагиноз через<br /> призму современности
								</>}
							/>

							<Main>
								<Row className="font-[700] leading-[150%] tracking-[0.01em] text-[#384860]">
									<Column>
										<Container>
											<TextDescriptons textHeader text={
												<>
													Мини-лекция проф. Е.Ф. Кира доступно<br /> ещё только 72 ч!
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
											<TextDescriptons text='Напомним о мини-лекции о повышении качества терапии. Предлагаем вашему вниманию готовый алгоритм современной терапии.' />
										</Container>
									</Column>
								</Row>
								<Btn>Перейти к видео</Btn>
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

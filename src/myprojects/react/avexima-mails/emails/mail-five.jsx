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
			<HeadComponent title="Современная диагностика вагинитов — алгоритм за 7 шагов" />
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
									Современная диагностика<br /> вагинитов — алгоритм за 7 шагов
								</>}
							/>

							<Main>
								<Row className="font-[700] leading-[150%] tracking-[0.01em] text-[#384860]">
									<Column>
										<Container>
											<TextDescriptons textHeader text='Мини-лекция от проф. Е.Ф. Кира' />
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
											<TextDescriptons text='В третьей мини-лекции профессор Е.Ф. Кира рассказывает о пошаговом алгоритме лабораторной диагностики и самых современных методах подтверждения типа возбудителя воспалительных заболеваний влагалища.' />
										</Container>
									</Column>
								</Row>
								<Row className="mt-[30px] tracking-[0.01em] text-[16px] leading-[150%] text-[#384860]">
									<Column>
										<Container>
											<TextDescriptons text='Это видео будет всегда для Вас доступным на нашем сайте, чтобы всегда можно было вернуться и вспомнить детали.' />
										</Container>
									</Column>
								</Row>
								<Btn>Смотреть 3-е видео</Btn>
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

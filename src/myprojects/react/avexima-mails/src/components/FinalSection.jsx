import {
	Section,
	Container,
	Row,
	Column,
	Text,
	Img,
} from "@react-email/components";



const FinalSection = () => {
	return (
		<Section>
			<Container>
				<Row className="block pt-[24px] pb-[24px] pl-[40px] pr-[20px] mt-[28px] bg-[#fff] text-[#384860] rounded-[8px]">
					<Column className="w-[70%]">
						<Text className="p-0 m-0 border-0 text-[16px] leading-[150%]">
							С уважением, <br /> Команда женского здоровья <span className="uppercase">Авексима</span>
						</Text>
					</Column>
					<Column className="w-[15%]">
						<Img className="w-[82px] h-[42px]"
							src={`static/logo.jpg`}
							alt="Авексима"
						></Img>
					</Column>
				</Row>
			</Container>
		</Section>
	);
};


export default FinalSection
import {
	Section,
	Container,
	Row,
	Column,
	Heading,
} from "@react-email/components";


const Header = ({header}) => {
	return (
		<Section>
			<Row className="block pt-[36px] pb-[30px] pl-[32px] pr-[7px] rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[0px] rounded-br-[0px] text-[22px] font-[900] leading-[150%] text-[#fff] uppercase bg-[url('static/header-bg.png')] bg-no-repeat">
				<Column>
					<Container className="max-w-[544px]">
						<Heading as="h1" style={{fontSize: 'unset'}} className="m-0">
							{header}
						</Heading>
					</Container>
				</Column>
			</Row>
		</Section>
	);
};



export default Header
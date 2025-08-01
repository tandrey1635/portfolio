import { Section } from "@react-email/components";

const Main = ({children}) => {
	return (
		<Section className="block p-[40px] pb-[28px] bg-[#fff] rounded-[8px]" >
			{children}
		</Section>
	);
};



export default Main
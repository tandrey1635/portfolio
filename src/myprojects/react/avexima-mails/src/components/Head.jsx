import { Head } from "@react-email/components";

const HeadComponent = ({ title }) => {
	return (
		<Head>
			<title>{title}</title>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
				rel="stylesheet"
			/>
		</Head>
	);
};

export default HeadComponent;

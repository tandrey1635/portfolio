import OrderSteps from "./OrderSteps";
import WhyWe from "./WhyWe";


const Main = ({children}) => {
	return (
		<main>
			{children}
			<OrderSteps />
			<WhyWe />
		</main>
	)
}


export default Main
import Wrapper  from "../../components/Wrapper";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer  from "../../components/Footer";
import ArrowUp  from "../../components/ArrowUp";


import Announcement from "../../components/Announcement";
import Promo from "../../components/Promo";
import Cards from "../../components/Cards";


const Awakener = () => {
	return (
		<>
			<Wrapper>
				<Header />
				<Main>
					<h1 style={{fontSize: 120}} className="text-center text-danger">В разработке</h1>
					<Announcement awakener />
					<Promo awakener />
				</Main>
				<Footer />
				<ArrowUp />
			</Wrapper>
		</>
	)
}


export default Awakener
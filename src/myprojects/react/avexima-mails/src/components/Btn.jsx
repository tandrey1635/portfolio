import {
	Link,
} from "@react-email/components";


const Btn = ({children})=>{
	return(
		<Link className="inline-block mt-[24px] px-[32px] py-[16px] bg-[#ea2085] text-[#fff] text-[16px] rounded-[8px] font-[700] leading-[150%] text-center tracking-[0.02em]" href="#">{children}</Link>
	)
}


export default Btn
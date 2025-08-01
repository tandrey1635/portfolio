import {
	Text,
} from "@react-email/components";



const TextDescriptons = ({textHeader, spanBefore, spanAfter, text, doctorName}) =>{
	return(
		<Text className={
			textHeader ? "p-0 m-0 border-0 text-[20px] leading-[unset]"
			: "p-0 m-0 border-0 text-[16px] leading-[unset]"}>
				<span className="font-[700]">{spanBefore}</span> {text} {doctorName} <span className="font-[700]">{spanAfter}</span>
		</Text>
	)
}


export default TextDescriptons
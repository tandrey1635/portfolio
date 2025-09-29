import { useRef, useEffect  } from "react";


const ArrowUp = () => {
	const arrowUpRef = useRef(null)

	useEffect (() => {

		const handleScroll = () => {
			if (window.pageYOffset > 1000) {
				arrowUpRef.current.classList.add('arrow-up-active')
			} else {
				arrowUpRef.current.classList.remove('arrow-up-active')
			}
		}

		const handleClick = () => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
    	}

		window.addEventListener('scroll', handleScroll);
		arrowUpRef.current.addEventListener('click', handleClick)


		return () => {
			window.removeEventListener('scroll', handleScroll);
			if (arrowUpRef.current) {
				arrowUpRef.current.removeEventListener('click', handleClick)
			}
		}

	}, [])



	return (
		<div className="arrow-up" ref={arrowUpRef}></div>
	)
}

export default ArrowUp

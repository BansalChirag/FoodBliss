import { useEffect, useState } from 'react';
import './CarouselCard.css';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
// import { IMG_LINK } from '../../utils/config';

const CarouselCard = ({carousels}) => {
	const [curImage, setCurImage] = useState([]);
	const [curStart, setCurStart] = useState(0);
	const [nextClicked, setNextClicked] = useState(false);
	const [prevClicked, setPrevClicked] = useState(false);

	useEffect(() => {
		setCurImage(carousels);
	}, [carousels]);
	return (
		<div className="carousel-wrapper">
			<div className="carousel">
				{curStart > 0 && (
					<button
						onClick={() => {
							if (!prevClicked) {
								setPrevClicked(true);
								if (curStart > 0) {
									setTimeout(() => {
										setCurStart(prev => prev - 1);
										setPrevClicked(false);
									}, 400);
								}
							}
						}}
						className="prev">
						<GrLinkPrevious className="icon" />
					</button>
				)}
				<div className="carousel-box">
					{curImage
						.filter((_, i) => i >= curStart && i < curStart + 4)
						.map((el, idx) => (
							<div
								key={idx}
								className={
									nextClicked
										? 'animation-left'
										: prevClicked
										? 'animation-right'
										: ''
								}>
								<img src="" alt="" />
							</div>
						))}
				</div>
				{curStart < 3 && (
					<button
						onClick={() => {
							if (!nextClicked) {
								setNextClicked(true);
								if (curStart < 3) {
									setTimeout(() => {
										setCurStart(prev => prev + 1);
										setNextClicked(false);
									}, 400);
								}
							}
						}}
						className="next">
						<GrLinkNext className="icon" />
					</button>
				)}
			</div>
		</div>
	);
};

export default CarouselCard;

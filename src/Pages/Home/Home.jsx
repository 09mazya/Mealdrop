import React from "react";
import Group from '../../Assets/image/Group.png'
import GroupText from '../../Assets/image/Grouptext.png'
import basket from '../../Assets/image/icon.png'
import Banner from '../../Assets/image/Banner block.png'


import './Home.css'
const Home = () => {
	return (
		<section>
			<header className="homeHeader">
				<div className="homeLogo">
					<img src={Group} alt="Fox" />
					<img src={GroupText} alt="Fox" />
				</div>
				<div className="homeButton">
					<button className="homeHome">Home</button>
					<button className="homeAll">All restaurants</button>
					<img src={basket} alt="" />
				</div>
			</header>
			<main>
				<section className="homeBanner">
					<div className="bannerButton">
						<button>See all restaurants</button>
					</div>
				</section>
			</main>
			{/* <footer></footer> */}
		</section>
	);
};

export { Home };

import Pic1 from "../../images/Pic1.png";
import React from "react";
const paragraphStyle = {
margin:'5vw',
  textAlign: 'center',
  width:'90vw',
}
const Home = () => {
  return (
    <>

<img
                    src={Pic1}
                      alt=""
                      width="1300px"
                      height="500px"
                  align="center"
                      display="block"
                      flex-direction="row"
                      align-items="center"
                     
               
                    />
      <h1 align="center">Homepage </h1>
      <hr/>
      <p   style={paragraphStyle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia debitis assumenda amet optio laborum, perspiciatis dolorem tempore a, quasi, pariatur in eaque eum voluptate sed veritatis. Voluptas dolorem impedit voluptate voluptates nostrum numquam omnis consequuntur aperiam at repellat! Ipsam eum totam facere numquam optio ullam, consectetur ipsa cupiditate deleniti esse laboriosam nihil atque modi explicabo autem pariatur harum sed exercitationem sunt nesciunt nobis delectus quis deserunt dicta. Autem architecto sapiente, id reprehenderit, aliquam facere ratione incidunt eos reiciendis minima aut iusto ipsa totam alias omnis cumque eveniet eius. Ducimus vero modi cupiditate delectus laudantium est saepe quo rerum ratione soluta.</p>
    </>
  );
};
export default Home;

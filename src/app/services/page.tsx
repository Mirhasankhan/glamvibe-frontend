"use client";
import Container from "@/utils/Container";
import bgImage from "../../assets/service.jpg";
import Image from "next/image";
import {  useServicesQuery } from "@/redux/features/services/services.api";
import Categories from "@/components/services/Categories";
import { useState } from "react";

const Services = () => {
   
   const [active,setActive] = useState("6814b4255b13a23a1c6be957")
  const {data: services,isLoading} = useServicesQuery(active)
  console.log(services);

  if(isLoading){
    return <p>Loading.........</p>
  }
  
  return (
    <div>
      <div
        className="h-[300px] md:h-[400px] 2xl:h-[650px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        {/* <Image alt="" height={50} width={50} src={serviceLogo.src}> </Image> */}
        Services
      </div>
      <Container>
        <div className="grid grid-cols-3 gap-8 my-8">
          <div className="col-span-1 border">
            <Categories active={active} setActive={setActive}></Categories>
          </div>
          <div className="col-span-2">
            <Image
              className="w-full h-60 object-cover"
              height={100}
              width={100}
              src={bgImage}
              alt=""
            ></Image>
            <h1 className="text-xl font-semibold py-6">Aroma Therapy</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              cumque quisquam debitis, amet iusto eveniet aliquid doloribus quae
              cupiditate similique natus doloremque illo quasi. Pariatur rerum
              repellat repellendus cumque accusantium nisi amet nihil, obcaecati
              quasi ducimus dolorum cupiditate dolor distinctio laudantium
              aspernatur soluta eligendi inventore nobis modi quae neque? Modi,
              consequuntur. Modi repudiandae quia, dolor tempore debitis fugit
              necessitatibus saepe enim illo sint atque blanditiis nobis quos
              nihil reprehenderit molestiae dolore delectus cupiditate beatae!
              Ea ipsam odit architecto! Veniam, accusantium?
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;

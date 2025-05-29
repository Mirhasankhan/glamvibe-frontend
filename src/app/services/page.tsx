"use client";
import Container from "@/utils/Container";
import bgImage from "../../assets/service.jpg";
import Image from "next/image";
import { useServicesQuery } from "@/redux/features/services/services.api";
import Categories from "@/components/services/Categories";
import { useState } from "react";
import { TService } from "@/types/common";
import Card from "@/components/services/Card";

const Services = () => {
  const [active, setActive] = useState("682b475155275c85dc32b417");
  const { data: services, isLoading } = useServicesQuery(active);
  
  if (isLoading) {
    return <p>Loading.........</p>;
  }

  return (
    <div>
      <div
        className="h-[300px] md:h-[400px] 2xl:h-[650px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >        
        {services?.result?.categoryName}
      </div>
      <Container>
        <div className="grid grid-cols-3 gap-8 my-8">
          <div className="col-span-1">
            <Categories active={active} setActive={setActive}></Categories>
       
          </div>
          <div className="col-span-2">
            <Image
              height={400}
              width={600}
              src={services?.result?.mediaUrl}
              alt=""
            ></Image>
            <h1 className="text-xl font-semibold py-6">
              {services?.result?.categoryName}
            </h1>
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
            <h1 className="text-xl font-semibold py-4">Available Services</h1>
            <div className="grid grid-cols-3 gap-8">
              {services?.result?.servicesWithAvgRating?.map((service:TService) => (
                <Card service={service} key={service.id}></Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;

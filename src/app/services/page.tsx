"use client";
import Container from "@/utils/Container";
import bgImage from "../../assets/service.jpg";
import Image from "next/image";
import { useServicesQuery } from "@/redux/features/services/services.api";
import Categories from "@/components/services/Categories";
import { useState } from "react";
import { TService } from "@/types/common";
import Card from "@/components/services/Card";
import Expert from "@/components/shared/Expert";
import { useExpertsQuery } from "@/redux/features/career/career.api";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Services = () => {
  const params = useSearchParams();
  const category = params.get("category");
  const [active, setActive] = useState(category || "682b475155275c85dc32b417");
  const { data: allExperts } = useExpertsQuery(active);
  const { data: services, isLoading } = useServicesQuery(active);

  return (
    <div>
      <div
        className="h-[200px] md:h-[200px] 2xl:h-[350px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className="bg-black h-full w-full flex flex-col items-center justify-center bg-opacity-70">
          <h1 className="text-white text-5xl font-semibold">
            {services?.result?.categoryName}
          </h1>
          <div className="flex gap-2 mt-2 font-medium">
            <Link className="text-white" href="/">
              Home /{" "}
            </Link>
            <h1 className="text-primary">{services?.result?.categoryName}</h1>
          </div>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-3 gap-8 my-8">
          <div className="col-span-3 md:col-span-1">
            <div className="sticky top-20">
              {isLoading ? (
                <div className="h-60 w-full bg-gray-300 border rounded-2xl animate-pulse"></div>
              ) : (
                <Categories active={active} setActive={setActive} />
              )}
            </div>
          </div>
          <div className="col-span-3 md:col-span-2">
            {isLoading ? (
              <div className="h-80 w-full bg-gray-300 border rounded-2xl animate-pulse"></div>
            ) : (
              <Image
                height={400}
                width={1500}
                src={services?.result?.mediaUrl}
                alt=""
              ></Image>
            )}
            <h1 className="text-2xl uppercase font-semibold py-6">
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
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
              {services?.result?.servicesWithAvgRating?.map(
                (service: TService) => (
                  <Card service={service} key={service.id}></Card>
                )
              )}
            </div>
            <h1 className="text-2xl font-medium">
              Our {services?.result?.categoryName} Specialists
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 py-8">
              <Expert experts={allExperts?.result}></Expert>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;

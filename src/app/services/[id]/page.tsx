"use client";
import ServiceDetaills from "@/components/services/ServiceDetaills";
import ServiceImages from "@/components/services/ServiceImages";
import { useServiceQuery } from "@/redux/features/services/services.api";
import Container from "@/utils/Container";

const ServiceDetailsPage = ({ params }: { params: any }) => {
  const id = params.id;
  const { data: service } = useServiceQuery(id);

  return (
    <div className="bg-gradient-to-br from-purple-50 p-2 via-blue-50 to-indigo-100">
      <Container>
        <div className="grid grid-cols-2 gap-6">
          <ServiceImages service={service}></ServiceImages>
          <ServiceDetaills service={service}></ServiceDetaills>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetailsPage;

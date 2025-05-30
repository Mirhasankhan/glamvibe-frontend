"use client";
import Container from "@/utils/Container";
import { useExpertsQuery } from "@/redux/features/career/career.api";
import Expert from "../shared/Expert";

const Experts = () => {
  const { data: allExperts } = useExpertsQuery("");
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-2xl font-bold text-center mb-8">
          MEET OUR EXPERTS
        </h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
          <Expert experts={allExperts?.result}></Expert>
        </div>
      </div>
    </Container>
  );
};

export default Experts;
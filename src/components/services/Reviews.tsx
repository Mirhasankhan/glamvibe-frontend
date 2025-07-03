import Image from "next/image";
import profielImage from "../../assets/expert2.jpg";
import { Star } from "lucide-react";

const Reviews = ({ service }: { service: any }) => {
  return (
    <div>
      {service?.result?.review?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service?.result?.review?.map((ser: any) => (
            <div className="bg-white p-2 rounded-xl" key={ser.id}>
              <div className=" flex mt-2 justify-between items-center">
                <div className="flex gap-1 items-center">
                  <Image
                    className="rounded-full"
                    src={ser.user.profielImage || profielImage}
                    height={50}
                    width={30}
                    alt=""
                  ></Image>
                  <h1 className="text-xl font-medium">{ser?.user?.username}</h1>
                </div>
                <div className="flex items-center gap-1">
                  <Star></Star>
                  <Star></Star>
                  <Star></Star>
                  <Star></Star>
                  <Star></Star>
                </div>
              </div>
              <h1 className="py-1">{ser.comment}</h1>
              <h1>6 July, 2025</h1>
            </div>
          ))}
        </div>
      ) : (
        "no review found"
      )}
    </div>
  );
};

export default Reviews;

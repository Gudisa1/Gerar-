import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
  width: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
  width,
}: CampProps) => {
  return (
    <div
      className={`w-full h-[300px] lg:h-[480px] bg-cover bg-no-repeat bg-center lg:rounded-r-5xl 2xl:rounded-5xl ${backgroundImage}`}
      style={{ width }}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg--50 p-4">
            <Image src="/path5.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 px-4">
      <div className="flex items-start justify-start gap-8 lg:gap-0 overflow-x-hidden">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Gerar Furniture"
          subtitle="Around Piasa"
          peopleJoined="50+ Joined"
          width="70%"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Gerar Furniture"
          subtitle="Around Piasa"
          peopleJoined="50+ Joined"
          width="30%"
        />
      </div>

      <div className="flexEnd mt-8 px-4 lg:-mt-40 lg:mr-4">
        <div className="bg-green-50 p-6 lg:max-w-[400px] xl:max-w-[600px] xl:rounded-5xl xl:px-12 xl:py-16 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-20 md:regular-24 2xl:regular-48 capitalize text-white">
            <strong>SERVICES</strong> We offer you the best services
          </h2>
          <p className="regular-12 xl:regular-14 mt-3 text-white">
            We are working to make your interiors, landscapes, or gardens
            comfortable and cozy. We have concentrated on the details and the
            general appearance of your design.
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={120} // Adjust the width to decrease
            height={140} // Adjust the height to decrease
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;

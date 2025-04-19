import useTextDirection from "@/hooks/useTextDirection";
import Animate from "./Animate";
import Image from "next/image";
import { cn } from "@/lib/utils";

type TreatmentsBenefitCarddProps = {
  description: string;
  title: string;
  icon: string;
  index: number;
};

const TreatmentsBenefitCardd = (props: TreatmentsBenefitCarddProps) => {
  const dir = useTextDirection();
  return (
    <Animate
      key={props.title}
      fromY={50}
      toY={0}
      initialOpacity={0}
      finalOpcaity={1}
      duration={0.8}
      wrapper="div"
      once={true}
      delay={0.15 * props.index}
      className="flex min-h-[200px] flex-col justify-between rounded-xl bg-teal-50 p-6 shadow-sm transition duration-300 ease-in-out hover:shadow-md"
    >
      <div className="mb-1 flex flex-col items-center gap-4">
        <Image src={props.icon} alt="treatment" className="h-20 w-20" />
        <div className="flex w-full flex-col items-center justify-center text-center">
          <h3 className="mb-2 text-[24px] font-semibold leading-[28.8px] text-primary-background">
            {props.title}
          </h3>
          <p className="mb-4 text-[18px] text-[#3D3D3D]">{props.description}</p>
        </div>
      </div>
    </Animate>
  );
};

export default TreatmentsBenefitCardd;

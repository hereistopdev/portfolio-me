import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";

const HomeSection7 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center"
      id={id}>
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Payment</SectionTitle>
        <div>
          <h1>Erc20</h1>
          <span>0x438fa54eBfAf3Fd4d6DC5dbdb3912D685ae04DC0</span>
        </div>
        <div>
          <h1>Bep20</h1>
          <span>0x438fa54eBfAf3Fd4d6DC5dbdb3912D685ae04DC0</span>
        </div>
        <div>
          <h1>TRC20</h1>
          <span>TKg1javc21uaQaZpfZuu1xzSdznYYQXsVw</span>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection7;

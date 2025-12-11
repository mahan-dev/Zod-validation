import { CardModule } from "@/module/Card";

const page = () => {
  return (
    <div className="h-[80vh] text-[1.2rem] flex flex-col items-center justify-center max-md:mx-4">
      <h2 className="mb-3 text-[1.3rem] font-bold">Demo Page</h2>
      <CardModule />
    </div>
  );
};

export default page;
